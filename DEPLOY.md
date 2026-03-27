# Deployment Guide

This app is a static site built with Vite. Deploy it for free on any of these platforms — all hide your GitHub identity behind a neutral subdomain.

## Build for Production

```bash
npm install
npm run build
```

This creates a `dist/` folder with optimized static files.

---

## Option 1: Vercel (Recommended)

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
2. Click **"Add New Project"** and import this repository.
3. Vercel auto-detects Vite. Just click **Deploy**.
4. Your site will be live at `https://your-project-name.vercel.app`.

**Custom domain:** Go to Project Settings > Domains to add your own domain (free SSL included).

---

## Option 2: Netlify

1. Go to [netlify.com](https://netlify.com) and sign in with GitHub.
2. Click **"Add new site" > "Import an existing project"**.
3. Select this repository.
4. Set:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Click **Deploy site**.
6. Your site will be live at `https://random-name.netlify.app`.

---

## Option 3: Cloudflare Pages

1. Go to [pages.cloudflare.com](https://pages.cloudflare.com) and sign in.
2. Click **"Create a project" > "Connect to Git"**.
3. Select this repository.
4. Set:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
5. Click **Save and Deploy**.
6. Your site will be live at `https://your-project.pages.dev`.

---

## After Deployment

1. Update the `<link rel="canonical">` and Open Graph URLs in `index.html` with your actual domain.
2. Set up your ad network accounts and uncomment the relevant script tags in `index.html`.
3. Create a Google Apps Script webhook and paste the URL into `GOOGLE_SHEETS_WEBHOOK_URL` in `script.js`.
