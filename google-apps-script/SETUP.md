# Google Sheets Webhook Setup (5 minutes)

## Step 1: Create Google Sheet
1. Go to https://sheets.google.com
2. Create a new blank spreadsheet
3. Name it "Sleep Cycle Optimizer Data"

## Step 2: Open Apps Script
1. In the spreadsheet, click **Extensions > Apps Script**
2. Delete any existing code in the editor
3. Copy the entire contents of `Code.gs` and paste it in
4. Click the save icon (or Ctrl+S)
5. Name the project "Sleep Data Collector"

## Step 3: Deploy as Web App
1. Click **Deploy > New deployment**
2. Click the gear icon next to "Select type" and choose **Web app**
3. Set these options:
   - Description: "Sleep Cycle Data Collector"
   - Execute as: **Me**
   - Who has access: **Anyone**
4. Click **Deploy**
5. Click **Authorize access** and allow permissions
6. **Copy the Web App URL** (looks like: `https://script.google.com/macros/s/XXXXX/exec`)

## Step 4: Paste URL in Your App
Open `script.js` and replace this line:
```js
const GOOGLE_SHEETS_WEBHOOK_URL = "";
```
With your URL:
```js
const GOOGLE_SHEETS_WEBHOOK_URL = "https://script.google.com/macros/s/YOUR_ID_HERE/exec";
```

## Step 5: Redeploy
```bash
npx vercel --prod
```

## Done!
Every time a user clicks "Calculate", their wake-up time data will be silently saved to your Google Sheet.
