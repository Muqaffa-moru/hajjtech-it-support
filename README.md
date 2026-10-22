# HajjTech IT Support

A responsive React + Vite + Tailwind CSS starter website for an IT support services brand and portfolio.

## Requirements
- Node.js (current LTS recommended)
- npm
- VS Code (recommended)

## Run locally
```bash
npm install
npm run dev
```
Open the local URL printed in the terminal, usually `http://localhost:5173`.

## Production build
```bash
npm run build
npm run preview
```

## Before publishing
1. In `src/App.jsx`, replace `YOUR_EMAIL@example.com` with the email address where you want to receive support requests.
2. Update project descriptions, status labels, skills and links so every portfolio claim is accurate.
3. Test the support form. It opens a prefilled email draft using the visitor's configured email application; it does not store or send the request through a backend.
4. Add a real backend (for example, Supabase) before relying on persistent request storage, an admin dashboard or automatic notifications.
5. Review privacy, accessibility and mobile layouts before promoting the site.

## Deploy to Vercel
### Option A: GitHub (recommended)
1. Create a GitHub repository and push this project.
2. Sign in to Vercel and import the repository.
3. Vercel should detect Vite. Use build command `npm run build` and output directory `dist`.
4. Deploy and test the production URL.

### Option B: Vercel CLI
```bash
npm install
npm run build
npx vercel
```
Follow the prompts for a preview deployment. When ready to publish to production, run:
```bash
npx vercel --prod
```

## Structure
```
hajjtech-it-support/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── App.jsx
    ├── main.jsx
    └── style.css
```

## Important
The site currently uses a front-end-only request form. It opens an email draft and requires the visitor to send it. The placeholder email must be replaced before launch. No requests are saved to a database yet.
