# 🔁 Reverse String

A minimal, Unicode-aware string reversal tool — type anything, see it flip instantly.

## Features

- **Live reversal** as you type, with smooth fade animations
- **Unicode-aware** — handles emoji 🔥, Arabic عربي, accented café, surrogate pairs, and grapheme clusters correctly
- **3-character minimum** before showing output (UX hint included)
- **Clipboard support** — paste anything directly into the input
- Pure **HTML + CSS + JavaScript** — no runtime dependencies

## Tech Stack

| Tool | Purpose |
|------|---------|
| [Vite](https://vitejs.dev) | Dev server & production build |
| [Vitest](https://vitest.dev) | Unit testing |
| GitHub Actions | CI/CD pipeline |
| GitHub Pages | Hosting |

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Run unit tests
npm test

# Run tests in watch mode
npm run test:watch

# Build for production
npm run build
```

## Deploying to GitHub Pages

1. Push the repository to GitHub
2. Go to **Settings → Pages** and set the source to **GitHub Actions**
3. Push to `main` — the workflow in `.github/workflows/deploy.yml` will:
   - Run tests
   - Build the site with Vite
   - Deploy the `dist/` folder to GitHub Pages

## Project Structure

```
reverse-string/
├── src/
│   ├── index.html        # Page markup
│   ├── style.css         # All styles
│   ├── script.js         # UI logic & event handling
│   └── string-utils.js   # Pure utility functions (reverseString, isLongEnough)
├── test/
│   └── string-utils.test.js  # Unit tests
├── .github/
│   └── workflows/
│       └── deploy.yml    # CI/CD pipeline
├── vite.config.js
└── package.json
```

## Unicode Handling

The reversal logic uses `Intl.Segmenter` (where supported) to split text into grapheme clusters before reversing — ensuring multi-codepoint characters like `🏳️‍🌈` or combined emoji sequences are treated as a single unit rather than being torn apart.