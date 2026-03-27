// ============================================================
// Sleep Cycle Optimizer - Core Logic
// ============================================================

const CYCLE_MINUTES = 90;
const CYCLES = [6, 5, 4, 3];
const RECOMMENDED_CYCLES = [6, 5];

// Google Sheets Webhook — paste your URL here
const GOOGLE_SHEETS_WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbzi-RciQJMdhXwyVva-otSFt7NLI1KWVmcy1jmV5R3YpQY8Kc_1jVk3o9cXj4bamId7/exec";

// --- DOM Elements ---
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const ampmEl = document.getElementById("ampm");
const calcBtn = document.getElementById("calculate-btn");
const resultsSection = document.getElementById("results");
const resultsHeading = document.getElementById("results-heading");
const resultsInfo = document.getElementById("results-info");
const resultsNote = document.getElementById("results-note");
const wakeTimeDisplay = document.getElementById("wake-time-display");
const timelineEl = document.getElementById("timeline");
const shareBtn = document.getElementById("share-btn");
const recalcBtn = document.getElementById("recalc-btn");
const latencySlider = document.getElementById("latency-slider");
const latencyValue = document.getElementById("latency-value");
const calcHeading = document.getElementById("calc-heading");
const pickerArea = document.getElementById("picker-area");

const themeToggle = document.getElementById("theme-toggle");
const sleepBarEl = document.getElementById("sleep-bar");
const cookieBanner = document.getElementById("cookie-banner");
const cookieAccept = document.getElementById("cookie-accept");
const cookieDecline = document.getElementById("cookie-decline");

// --- State ---
let currentMode = "bedtime"; // "bedtime" or "sleepnow"
let sleepLatency = parseInt(localStorage.getItem("sleepLatency") || "15", 10);
let lastResults = null;

// --- Init ---
function init() {
  // Restore latency
  latencySlider.value = sleepLatency;
  latencyValue.textContent = sleepLatency;

  // Restore last wake time
  const saved = localStorage.getItem("lastWakeTime");
  if (saved) {
    try {
      const { hour, minute, ampm } = JSON.parse(saved);
      hoursEl.value = hour;
      minutesEl.value = minute;
      ampmEl.value = ampm;
    } catch {}
  }

  // Restore theme
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
  }

  // Cookie consent
  if (!localStorage.getItem("cookieConsent")) {
    cookieBanner.hidden = false;
  }

  // Register service worker
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/sw.js").catch(() => {});
  }
}

// --- Theme Toggle ---
themeToggle.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === "light" ? "dark" : "light";
  if (next === "dark") {
    document.documentElement.removeAttribute("data-theme");
  } else {
    document.documentElement.setAttribute("data-theme", next);
  }
  localStorage.setItem("theme", next);
});

// --- Cookie Consent ---
cookieAccept.addEventListener("click", () => {
  localStorage.setItem("cookieConsent", "accepted");
  cookieBanner.hidden = true;
});

cookieDecline.addEventListener("click", () => {
  localStorage.setItem("cookieConsent", "declined");
  cookieBanner.hidden = true;
});

// --- Mode Tabs ---
document.querySelectorAll(".mode-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".mode-tab").forEach((t) => {
      t.classList.remove("mode-tab--active");
      t.setAttribute("aria-selected", "false");
    });
    tab.classList.add("mode-tab--active");
    tab.setAttribute("aria-selected", "true");

    currentMode = tab.dataset.mode;

    if (currentMode === "sleepnow") {
      calcHeading.textContent = "Going to bed now?";
      calcBtn.textContent = "Calculate Wake Times";
      pickerArea.querySelector(".picker").hidden = true;
    } else {
      calcHeading.textContent = "What time do you need to wake up?";
      calcBtn.textContent = "Calculate Bedtime";
      pickerArea.querySelector(".picker").hidden = false;
    }

    resultsSection.hidden = true;
  });
});

// --- Latency Slider ---
latencySlider.addEventListener("input", () => {
  sleepLatency = parseInt(latencySlider.value, 10);
  latencyValue.textContent = sleepLatency;
  localStorage.setItem("sleepLatency", sleepLatency);
});

// --- Time Conversion Helpers ---
function to24(hour12, ampm) {
  let h = hour12;
  if (ampm === "AM" && h === 12) h = 0;
  if (ampm === "PM" && h !== 12) h += 12;
  return h;
}

function to12(hour24) {
  const ampm = hour24 >= 12 ? "PM" : "AM";
  let h = hour24 % 12;
  if (h === 0) h = 12;
  return { hour: h, ampm };
}

function formatTime(hour12, minute, ampm) {
  return `${hour12}:${String(minute).padStart(2, "0")} ${ampm}`;
}

function wrapMinutes(total) {
  return ((total % 1440) + 1440) % 1440;
}

// --- Calculate Bedtimes (wake time → bedtimes) ---
function calculateBedtimes(wakeHour, wakeMinute, ampm) {
  const wakeTotal = to24(wakeHour, ampm) * 60 + wakeMinute;

  return CYCLES.map((numCycles) => {
    const bedTotal = wrapMinutes(wakeTotal - numCycles * CYCLE_MINUTES - sleepLatency);
    const bedHour24 = Math.floor(bedTotal / 60) % 24;
    const bedMinute = bedTotal % 60;
    const { hour, ampm: bedAmPm } = to12(bedHour24);

    return {
      cycles: numCycles,
      hour12: hour,
      minute: bedMinute,
      ampm: bedAmPm,
      totalHours: numCycles * 1.5,
      recommended: RECOMMENDED_CYCLES.includes(numCycles),
    };
  });
}

// --- Calculate Wake Times (sleep now → wake times) ---
function calculateWakeTimes() {
  const now = new Date();
  const nowTotal = now.getHours() * 60 + now.getMinutes();
  const sleepStart = nowTotal + sleepLatency;

  return CYCLES.map((numCycles) => {
    const wakeTotal = wrapMinutes(sleepStart + numCycles * CYCLE_MINUTES);
    const wakeHour24 = Math.floor(wakeTotal / 60) % 24;
    const wakeMinute = wakeTotal % 60;
    const { hour, ampm } = to12(wakeHour24);

    return {
      cycles: numCycles,
      hour12: hour,
      minute: wakeMinute,
      ampm,
      totalHours: numCycles * 1.5,
      recommended: RECOMMENDED_CYCLES.includes(numCycles),
    };
  });
}

// --- Render Results ---
function renderResults(results, headerText, infoText) {
  lastResults = { results, headerText, infoText };
  resultsHeading.textContent = headerText;
  resultsInfo.innerHTML = infoText;
  resultsNote.textContent = `* Includes ~${sleepLatency} minutes to fall asleep. Recommended options give you 5-6 full sleep cycles for optimal rest.`;
  timelineEl.innerHTML = "";

  results.forEach((bt) => {
    const card = document.createElement("div");
    card.className = `timeline__card${bt.recommended ? " timeline__card--recommended" : ""}`;
    card.setAttribute("role", "listitem");

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

  // Render sleep quality bar
  renderSleepBar(results);

  resultsSection.hidden = false;
  resultsSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

// --- Sleep Quality Bar ---
function renderSleepBar(results) {
  sleepBarEl.innerHTML = "";
  const qualityMap = {
    3: { label: "Poor", cls: "poor" },
    4: { label: "Fair", cls: "fair" },
    5: { label: "Good", cls: "good" },
    6: { label: "Great", cls: "great" },
  };

  results.forEach((bt) => {
    const q = qualityMap[bt.cycles] || { label: "?", cls: "poor" };
    const seg = document.createElement("div");
    seg.className = "sleep-bar__segment";
    seg.innerHTML = `
      <div class="sleep-bar__fill sleep-bar__fill--${q.cls}"></div>
      <span class="sleep-bar__label">${bt.cycles} cyc &middot; ${q.label}</span>
    `;
    sleepBarEl.appendChild(seg);
  });
}

// --- Silent Data Collection ---
function sendToGoogleSheets(data) {
  if (!GOOGLE_SHEETS_WEBHOOK_URL) return;

  fetch(GOOGLE_SHEETS_WEBHOOK_URL, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...data,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
    }),
  }).catch(() => {});
}

// --- Share Results ---
shareBtn.addEventListener("click", () => {
  if (!lastResults) return;

  const lines = lastResults.results.map(
    (bt) =>
      `${bt.recommended ? "* " : "  "}${formatTime(bt.hour12, bt.minute, bt.ampm)} (${bt.cycles} cycles, ${bt.totalHours}h)`
  );

  const text = `${lastResults.headerText}\n${lines.join("\n")}\n\nCalculated with Sleep Cycle Optimizer`;

  if (navigator.share) {
    navigator.share({ title: "Sleep Cycle Results", text }).catch(() => {});
  } else if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => {
      shareBtn.textContent = "Copied!";
      setTimeout(() => {
        shareBtn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg> Share Results`;
      }, 2000);
    });
  }
});

// --- Recalculate ---
recalcBtn.addEventListener("click", () => {
  resultsSection.hidden = true;
  document.querySelector(".calculator").scrollIntoView({ behavior: "smooth" });
});

// --- Main Calculate Handler ---
calcBtn.addEventListener("click", () => {
  if (currentMode === "sleepnow") {
    const now = new Date();
    const { hour, ampm } = to12(now.getHours());
    const nowStr = formatTime(hour, now.getMinutes(), ampm);
    const results = calculateWakeTimes();

    renderResults(
      results,
      "Your Optimal Wake Times",
      `If you go to sleep now (<strong>${nowStr}</strong>), set your alarm for:`
    );

    sendToGoogleSheets({ mode: "sleepnow", sleepTime: nowStr });
  } else {
    const wakeHour = parseInt(hoursEl.value, 10);
    const wakeMinute = parseInt(minutesEl.value, 10);
    const ampm = ampmEl.value;
    const wakeTimeStr = formatTime(wakeHour, wakeMinute, ampm);
    const results = calculateBedtimes(wakeHour, wakeMinute, ampm);

    // Save preference
    localStorage.setItem("lastWakeTime", JSON.stringify({ hour: wakeHour, minute: wakeMinute, ampm }));

    renderResults(
      results,
      "Your Optimal Bedtimes",
      `To wake up at <strong>${wakeTimeStr}</strong>, go to sleep at one of these times:`
    );

    sendToGoogleSheets({ mode: "bedtime", wakeTime: wakeTimeStr });
  }
});

// --- Initialize ---
init();
