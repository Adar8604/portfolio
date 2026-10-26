# Adarsh Kumar · Portfolio

A personal portfolio site built with **React + Vite** and **Framer Motion**. It has dark and light themes, scroll animations, and works on phones.

## Project structure

```
portfolio/
├── index.html              # Page shell, fonts, SEO meta tags
├── public/favicon.svg      # Browser tab icon
├── src/
│   ├── data.js             # ← ALL your content (edit this to update the site)
│   ├── App.jsx             # Page sections / components
│   ├── styles.css          # Theme colours, layout, responsive rules
│   └── main.jsx            # React entry point
├── .github/workflows/deploy.yml   # Optional GitHub Pages auto-deploy
└── package.json
```

## Run it locally

You need Node.js 18 or newer (`node -v` to check).

```bash
npm install      # first time only
npm run dev      # starts http://localhost:5173 with live reload
```

To make and check a production build:

```bash
npm run build    # outputs static files to dist/
npm run preview  # serves dist/ at http://localhost:4173
```

## Updating content

Open `src/data.js`:

- **GitHub / LinkedIn**: fill in `profile.links.github` and `profile.links.linkedin`. Empty links are hidden.
- **Resume button**: copy a PDF to `public/resume.pdf` and set `resumeUrl: 'resume.pdf'`.
- **Project links**: set `link` on any project to show an ↗ button.
- **Experience, projects, skills, stats**: edit the arrays. The page updates on save.

Colours are the CSS variables at the top of `src/styles.css` (`--accent`, `--accent-2`, `--gradient`).

## Hosting (free)

The build is a plain static site, so any static host works. Push this folder to its own GitHub repo first:

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/portfolio.git
git push -u origin main
```

### Option A: Vercel (recommended)

1. Sign in at https://vercel.com with GitHub.
2. **Add New → Project**, then import the `portfolio` repo.
3. Vercel detects Vite automatically (build: `npm run build`, output: `dist`). Click **Deploy**.
4. You get a URL like `https://portfolio-xyz.vercel.app`. Every `git push` redeploys.
5. Optional: add a custom domain under **Settings → Domains**.

### Option B: Netlify

1. Sign in at https://app.netlify.com, then **Add new site → Import from Git**.
2. Build command `npm run build`, publish directory `dist`, then **Deploy**.

To skip Git entirely, run `npm run build` and drag the `dist/` folder onto https://app.netlify.com/drop.

### Option C: GitHub Pages

The workflow in `.github/workflows/deploy.yml` is already set up.

1. Push to GitHub (above).
2. In the repo, go to **Settings → Pages → Source** and choose **GitHub Actions**.
3. The next push to `main` deploys to `https://<your-username>.github.io/portfolio/`.

To serve it at the root `https://<your-username>.github.io`, name the repo `<your-username>.github.io`.
