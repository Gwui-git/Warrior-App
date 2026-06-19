# Warrior — Setup Guide

## Files in this folder
- `index.html` — main app
- `app.js` — all logic
- `manifest.json` — PWA config
- `sw.js` — offline support

## How to host on GitHub Pages (one-time setup, ~10 min)

1. Go to github.com and create a free account if you don't have one
2. Click the + button → New repository
3. Name it `warrior-app`, set to Public, click Create
4. Click "uploading an existing file" link on the repo page
5. Drag all 4 files into the upload area
6. Click "Commit changes"
7. Go to Settings → Pages → Source → Deploy from branch → main → Save
8. Your app will be live at: `https://YOUR-USERNAME.github.io/warrior-app`

## How to install on Android (both phones)

1. Open Chrome on the phone
2. Go to your GitHub Pages URL above
3. Tap the 3-dot menu → "Add to Home screen"
4. Tap Add — it installs like a real app

## How to push updates (new workouts, swapped exercises)

1. Go to your GitHub repo
2. Click on `app.js`
3. Click the pencil (edit) icon
4. Make your changes — programs are in the PROGRAM object at the top
5. Click "Commit changes"
6. Both phones update automatically next time the app is opened

## How to swap an exercise without losing history

Open the app → tap the Program tab → toggle "Swap exercises" → tap Swap next to any exercise → type the new name. History for the old exercise is preserved in session logs.

## Icons (optional)
Add `icon-192.png` and `icon-512.png` to your repo for a proper home screen icon.
Use any image — crop to square, save at both sizes.
