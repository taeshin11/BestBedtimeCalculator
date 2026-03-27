// ============================================================
// Sleep Cycle Optimizer - Core Logic
// ============================================================

const CYCLE_MINUTES = 90;
const SLEEP_LATENCY_MINUTES = 15;
const CYCLES = [6, 5, 4, 3]; // ordered from most to fewest
const RECOMMENDED_CYCLES = [6, 5]; // highlighted as best

// Google Sheets Webhook — paste your URL here
const GOOGLE_SHEETS_WEBHOOK_URL = "";

// --- DOM Elements ---
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const ampmEl = document.getElementById("ampm");
const calcBtn = document.getElementById("calculate-btn");
const resultsSection = document.getElementById("results");
const wakeTimeDisplay = document.getElementById("wake-time-display");
const timelineEl = document.getElementById("timeline");

// --- Calculate Bedtimes ---
function calculateBedtimes(wakeHour, wakeMinute, ampm) {
  // Convert to 24-hour
  let hour24 = wakeHour;
  if (ampm === "AM" && hour24 === 12) hour24 = 0;
  if (ampm === "PM" && hour24 !== 12) hour24 += 12;

  const wakeTotal = hour24 * 60 + wakeMinute;

  return CYCLES.map((numCycles) => {
    const sleepDuration = numCycles * CYCLE_MINUTES;
    let bedTotal = wakeTotal - sleepDuration - SLEEP_LATENCY_MINUTES;

    // Wrap around midnight
    if (bedTotal < 0) bedTotal += 24 * 60;

    const bedHour24 = Math.floor(bedTotal / 60) % 24;
    const bedMinute = bedTotal % 60;

    // Convert back to 12-hour
    const bedAmPm = bedHour24 >= 12 ? "PM" : "AM";
    let bedHour12 = bedHour24 % 12;
    if (bedHour12 === 0) bedHour12 = 12;

    const hours = numCycles * 1.5;

    return {
      cycles: numCycles,
      hour12: bedHour12,
      minute: bedMinute,
      ampm: bedAmPm,
      totalHours: hours,
      recommended: RECOMMENDED_CYCLES.includes(numCycles),
    };
  });
}

// --- Format time string ---
function formatTime(hour12, minute, ampm) {
  const mm = String(minute).padStart(2, "0");
  return `${hour12}:${mm} ${ampm}`;
}

// --- Render Results ---
function renderResults(bedtimes, wakeTimeStr) {
  wakeTimeDisplay.textContent = wakeTimeStr;
  timelineEl.innerHTML = "";

  bedtimes.forEach((bt) => {
    const card = document.createElement("div");
    card.className = `timeline__card${bt.recommended ? " timeline__card--recommended" : ""}`;

    const timeStr = formatTime(bt.hour12, bt.minute, bt.ampm);

    card.innerHTML = `
      <div class="timeline__cycles">${bt.cycles}<br>cycles</div>
      <div class="timeline__body">
        <div class="timeline__time">${timeStr}</div>
        <div class="timeline__meta">${bt.totalHours} hours of sleep</div>
      </div>
      ${bt.recommended ? '<span class="timeline__badge">Recommended</span>' : ""}
    `;

    timelineEl.appendChild(card);
  });

  resultsSection.hidden = false;
  resultsSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

// --- Silent Data Collection ---
function sendToGoogleSheets(wakeTime) {
  if (!GOOGLE_SHEETS_WEBHOOK_URL) return;

  const payload = {
    wakeTime,
    timestamp: new Date().toISOString(),
    userAgent: navigator.userAgent,
  };

  fetch(GOOGLE_SHEETS_WEBHOOK_URL, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  }).catch(() => {
    // Silently fail — don't break user experience
  });
}

// --- Event Handler ---
calcBtn.addEventListener("click", () => {
  const wakeHour = parseInt(hoursEl.value, 10);
  const wakeMinute = parseInt(minutesEl.value, 10);
  const ampm = ampmEl.value;

  const wakeTimeStr = formatTime(wakeHour, wakeMinute, ampm);
  const bedtimes = calculateBedtimes(wakeHour, wakeMinute, ampm);

  renderResults(bedtimes, wakeTimeStr);
  sendToGoogleSheets(wakeTimeStr);
});
