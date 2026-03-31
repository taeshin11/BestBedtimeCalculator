# Product Requirements Document (PRD)
## Project: Sleep Cycle Optimizer (Best Bedtime Calculator)

### 1. Harness Design Architecture (CRITICAL INSTRUCTIONS FOR CLAUDE CODE)
You are an autonomous AI coding agent. To prevent context loss, ensure high code quality, and operate systematically across sessions, you MUST strictly follow this "Harness Design" methodology.

#### 1.1. Planner & Initializer Agent Phase
- First, act as the **Planner Agent**. Do not over-engineer early on; focus purely on what needs to be built based on this PRD.
- In your very first session, act as the **Initializer Agent** and create exactly three mandatory files in the root directory:
  1. `feature_list.json`: A granular breakdown of features and tasks to implement.
  2. `claude-progress.txt`: A tracking file logging current progress, completed items, and exact next steps.
  3. `init.sh`: A shell script defining how to start the local development server and run tests.

#### 1.2. Fixed Session Start Routine
- At the beginning of EVERY session, you MUST perform these steps in order:
  1. Read `claude-progress.txt` and `feature_list.json`.
  2. Execute `init.sh` to ensure the local environment is running.
  3. Select exactly ONE pending feature from `feature_list.json` to implement.
  4. Implement the feature, commit the code, and update the progress files.
  5. Move on to the next feature.

#### 1.3. Maker & Reviewer Separation
- **Maker Mode:** Write the code to implement the selected feature.
- **Reviewer Mode:** Once the code is written, switch your context to a "Reviewer" (QA engineer). Review your own code for bugs, edge cases, responsive UI glitches, and SEO compliance before considering the feature complete.

#### 1.4. Mandatory Git Push Rule
- **CRITICAL:** Upon achieving any important milestone (defined in Section 5), you MUST execute `git add .`, `git commit -m "[Milestone message]"`, and strictly perform a `git push` to save the progress to the remote repository. Do not wait for user prompting to push milestones.

### 2. Product Overview
- **Service Name:** Sleep Cycle Optimizer
- **Short Title:** Best Bedtime Calculator
- **Description:** A web application where users input their desired wake-up time, and the system calculates backward using 90-minute REM sleep cycles to recommend "4 optimal bedtimes" for waking up refreshed.
- **Format:** A visually appealing timeline dashboard.
- **Key Advantage:** Purely frontend-based time subtraction logic requiring zero backend coding. Targets the highly-searched global keyword "sleep".

### 3. Core Business & Technical Requirements

#### 3.1. Aggressive Monetization (Ad Integration)
- The service will be provided for free, but it must be structured for rapid revenue generation from Day 1.
- Create prominent, responsive UI slots for advertisements (e.g., Top Header Banner, In-Content Banner, Sticky Footer Banner).
- Implement script placeholders for **Google AdSense**.
- **Alternative Ad Networks:** Because Google AdSense approval can be slow, you MUST also integrate ad script placeholders for fast-approval alternative networks (e.g., Adsterra, PropellerAds, Monetag, or Media.net) to ensure we can earn ad revenue immediately.

#### 3.2. Zero-Cost Architecture
- Development and deployment must incur absolutely $0 in running costs.
- Build the app using a Static Frontend Stack (HTML, CSS, Vanilla JS, or a lightweight static framework like Vite + React).
- Absolutely NO paid backend servers or databases are allowed.

#### 3.3. Maximum Search Engine Optimization (SEO)
- The application must be heavily optimized for search engines to capture keywords like "sleep cycle calculator", "best bedtime", and "REM sleep calculator".
- Include highly optimized `<meta>` tags (Title, Description, Keywords).
- Implement Open Graph (OG) tags, Twitter Cards, and strictly use Semantic HTML5 tags.
- Generate structured data (JSON-LD WebApplication or SoftwareApplication schema) to boost Google indexing.

#### 3.4. 100% Responsive Web Design
- The UI must provide a flawless experience across all devices (Mobile, Tablet, Desktop).
- Use a Mobile-First approach with modern CSS (Flexbox/Grid) or a framework like Tailwind CSS.

#### 3.5. Free User Data Collection
- We need to collect the data users input (e.g., the wake-up times they search for) for future trend analysis, entirely for free.
- **Implementation:** Write an asynchronous JavaScript `fetch()` function that sends a silent POST request to a **Google Apps Script Web App URL** (which connects to Google Sheets) whenever a user hits the calculate button. This will act as our free, serverless database.
- Leave a placeholder like `const GOOGLE_SHEETS_WEBHOOK_URL = "";` so the owner can paste their URL later. Ensure the app doesn't crash if this network request fails.

#### 3.6. Hide GitHub Identity via Free Custom Links
- Do NOT configure the app for GitHub Pages directly, as `[username].github.io` exposes the creator's personal GitHub ID.
- Prepare the project configuration for deployment on platforms like **Vercel, Netlify, or Cloudflare Pages**. These platforms pull code from GitHub but provide free hosting with neutral, randomly generated subdomains (e.g., `sleep-optimizer.vercel.app`), completely hiding the GitHub identity while providing free SSL.
- Write a short `DEPLOY.md` explaining how the owner can deploy the site on these platforms easily.

### 4. Application Logic & UI Details
- **Input Area:** A clean, intuitive time picker for the user's desired wake-up time (Hours, Minutes, AM/PM).
- **Calculation Logic:** 
  - Subtract exact 90-minute REM intervals from the wake-up time.
  - Automatically factor in an average of **15 minutes** for the "time to fall asleep" (sleep latency).
  - Calculate 4 options: 3 cycles (4.5h), 4 cycles (6h), 5 cycles (7.5h), and 6 cycles (9h).
- **Output Dashboard:** A timeline dashboard displaying the 4 recommended bedtimes.
- **Highlights:** Visually emphasize the 5-cycle (7.5 hours) and 6-cycle (9 hours) options as "Highly Recommended".

### 5. Development Milestones (Git Push Required)
*You MUST execute `git push` upon completing each of these milestones.*

- **Milestone 1:** Initializer Phase - Create `feature_list.json`, `claude-progress.txt`, `init.sh`, and initialize basic project structure. -> **`git push`**
- **Milestone 2:** Core sleep calculation logic and basic HTML/CSS skeleton. -> **`git push`**
- **Milestone 3:** 100% Responsive UI styling, Timeline Dashboard rendering, and Ad Network placeholders integration. -> **`git push`**
- **Milestone 4:** Free Data Collection (Google Sheets Webhook API integration) & SEO Optimization (Meta tags, JSON-LD). -> **`git push`**
- **Milestone 5:** Final Reviewer QA, bug fixes, and Vercel/Netlify deployment prep (`DEPLOY.md`). -> **`git push`**

### 6. Internationalization (i18n) & Traffic Optimization (Milestone 9)

#### 6.1. Auto-Translation System
- **File:** `public/i18n.js` — Self-contained i18n system with 12 language translations
- **Supported Languages:** English (default), Korean, Japanese, Chinese, Spanish, German, French, Portuguese, Italian, Russian, Arabic, Hindi
- **Features:**
  - Auto-detects browser language via `navigator.language`
  - URL parameter override: `?lang=ko`, `?lang=ja`, etc.
  - Language preference saved to localStorage
  - Language picker (globe icon) in header — collapses to icon-only on mobile
  - RTL support for Arabic
  - All static text translatable via `data-i18n` attributes
  - Dynamic text (calculator results) uses `window.I18n.t()` function

#### 6.2. Traffic Optimization Measures
- **hreflang tags** for all 12 supported languages in `<head>` and sitemap
- **Social sharing buttons** (Twitter/X, Facebook, WhatsApp, Reddit, Pinterest) in footer area
- **Sitemap updated** with `xhtml:link` alternate language entries
- **Feedback mechanism** — floating FAB button + footer link to `taeshinkim11@gmail.com`

---
**Instruction for Claude Code:**
If you have read and understood this PRD, acknowledge it. Then, immediately start the "Planner & Initializer" phase of the Harness Design workflow.