# Neura Pulse AI Health Solutions LLP

Marketing website for **Neura Pulse AI Health Solutions LLP** — AI platforms, custom GPT systems, and RAG tools for clinical research, pharma, biotech, genomics, and hospitals.

## Tech stack

- **Vite 5** + **React 18** + **TypeScript 5**
- **Tailwind CSS v3** with a custom design system (HSL tokens, gradients, glassmorphism)
- **shadcn/ui** primitives + **lucide-react** icons
- **React Router** for client-side routing
- **Vitest** + **Testing Library** for unit tests

## Requirements

- **Node.js 18+** (Node 20 LTS recommended)
- **npm 9+** (or pnpm / bun / yarn)

## Quick start

```bash
# 1. Clone
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>

# 2. Install dependencies
npm install

# 3. Start the dev server (http://localhost:8080)
npm run dev
```

## NPM scripts

| Script               | What it does                                              |
| -------------------- | --------------------------------------------------------- |
| `npm run dev`        | Start Vite dev server with HMR on port 8080               |
| `npm run build`      | Production build → `dist/`                                |
| `npm run build:dev`  | Development-mode build (unminified, useful for debugging) |
| `npm run preview`    | Preview the production build locally on port 8080         |
| `npm run lint`       | Run ESLint across the project                             |
| `npm run test`       | Run the Vitest test suite once                            |
| `npm run test:watch` | Run Vitest in watch mode                                  |

## Project structure

```
├─ public/                 Static assets served as-is (favicon, _redirects)
├─ src/
│  ├─ assets/              Imported images (logo, etc.)
│  ├─ components/
│  │  ├─ site/             Page sections (Navbar, Hero, Industries, …)
│  │  └─ ui/               shadcn/ui primitives
│  ├─ hooks/               Custom React hooks
│  ├─ lib/                 Utilities (cn, etc.)
│  ├─ pages/               Route components (Index, NotFound)
│  ├─ App.tsx              Router + providers
│  ├─ main.tsx             App entry
│  └─ index.css            Tailwind layers + design tokens
├─ index.html              Vite HTML entry (SEO meta + Google Fonts)
├─ tailwind.config.ts      Tailwind theme extension
├─ vite.config.ts          Vite build + dev server config
└─ vitest.config.ts        Vitest config
```

## Deployment

The app is a **single-page application (SPA)** that builds to a static `dist/` directory and can be deployed to any static host.

### Build the site

```bash
npm run build
# → outputs dist/
```

### Vercel

1. Import the GitHub repo into Vercel.
2. Framework preset: **Vite** (auto-detected).
3. Build command: `npm run build` · Output directory: `dist`.
4. SPA rewrites are handled by the included `vercel.json`.

### Netlify

1. New site from Git → select the repo.
2. Build command: `npm run build` · Publish directory: `dist`.
3. SPA fallback is handled by the included `public/_redirects` (`/* /index.html 200`).

### Cloudflare Pages

- Build command: `npm run build`
- Build output directory: `dist`
- Add a `_redirects` rule (already provided in `public/`).

### GitHub Pages (project site)

If deploying to `https://<user>.github.io/<repo>/`, set Vite's `base` accordingly in `vite.config.ts`:

```ts
base: process.env.NODE_ENV === "production" ? "/<repo>/" : "/",
```

Then build and publish `dist/` (e.g. with `gh-pages` or a GitHub Actions workflow).

### Self-hosting (Nginx, Caddy, etc.)

Serve the contents of `dist/` and add an SPA fallback so deep links resolve to `index.html`:

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

## License

© Neura Pulse AI Health Solutions LLP. All rights reserved.
