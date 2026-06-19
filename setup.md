# SWC V1 – Full Setup Guide

## Files in this project
- index.html      → Sign up landing page
- dashboard.html  → Admin dashboard (view signups)
- appscript.gs    → Google Apps Script code

---

## STEP 1 — Google Sheets + Apps Script

1. Go to https://sheets.google.com → Create a new blank spreadsheet
   Name it: "SWC Signups"

2. Click Extensions → Apps Script

3. Delete everything in the editor and paste the contents of appscript.gs

4. Click Save, then Deploy → New Deployment
   - Type: Web App
   - Execute as: Me
   - Who has access: Anyone
   → Click Deploy → Copy the Web App URL

5. Paste that URL into index.html here:
      const GOOGLE_SCRIPT_URL = "PASTE_HERE";

6. For the Dashboard to read data:
   - In Google Sheets → File → Share → Publish to web
   - Choose: Sheet1 → CSV → Publish → Copy the URL
   - Paste that URL into dashboard.html here:
      const SHEET_CSV_URL = "PASTE_HERE";

---

## STEP 2 — Video (Imgur does NOT support video)

Use one of these FREE options:

  Streamable.com  → upload video → right-click → Copy video address (.mp4 URL)
  Cloudinary.com  → free account → upload → get direct .mp4 link
  GitHub Raw      → upload .mp4 to your repo → use raw.githubusercontent.com URL

Then in index.html replace:
  <source src="YOUR_VIDEO_URL_HERE.mp4" type="video/mp4">
with your actual .mp4 URL.

---

## STEP 3 — GitHub (free code hosting)

1. Go to https://github.com → New repository
   Name: swc-landing | Public → Create

2. Upload: index.html and dashboard.html
   (do NOT upload appscript.gs — that stays in Google)

3. Commit changes

---

## STEP 4 — Vercel (YES, you can have multiple websites!)

Each GitHub repo = one Vercel project = one free website URL.

1. Go to https://vercel.com → Sign in with GitHub
2. Click "Add New Project" → Import your swc-landing repo
3. Click Deploy → You get: swc-landing.vercel.app

For a SECOND website:
  - Create another GitHub repo (e.g. swc-v2)
  - Vercel → Add New Project → import that repo
  - Gets its own free URL automatically

---

## Google Sheet Column Order (auto-created)
| Timestamp | Facebook Name | Username | Phone | Email |

---

## Quick Checklist
[ ] Apps Script deployed as Web App (Execute as: Me, Anyone can access)
[ ] Script URL pasted into index.html → GOOGLE_SCRIPT_URL
[ ] Sheet published as CSV
[ ] CSV URL pasted into dashboard.html → SHEET_CSV_URL
[ ] Video .mp4 URL replaced in index.html
[ ] index.html + dashboard.html uploaded to GitHub
[ ] GitHub repo connected to Vercel → live!