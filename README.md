# recd-web

The marketing website for **rec'd** ([recd.us](https://recd.us)): an Atlanta app that connects local creators with local businesses.

This repo is only the website. The mobile app lives in a separate repo.

Built with Next.js (App Router, TypeScript), Tailwind CSS and Framer Motion. Deployed on Vercel.

## Run it locally

Requires Node.js 20.9+ and npm. These commands work in PowerShell, macOS and Linux.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Optional, once Supabase is wired up: copy the env template and fill in the values.

```powershell
Copy-Item .env.example .env.local
```

## Scripts

| Command                | What it does                     |
| ---------------------- | -------------------------------- |
| `npm run dev`          | Start the dev server             |
| `npm run build`        | Production build                 |
| `npm run start`        | Serve the production build       |
| `npm run lint`         | ESLint                           |
| `npm run typecheck`    | TypeScript check                 |
| `npm run format`       | Format everything with Prettier  |
| `npm run format:check` | Check formatting without writing |

## Deploy to Vercel

1. Push this repo to GitHub.
2. In Vercel, choose **Add New → Project**, import the repo, and keep the detected Next.js defaults.
3. Add any environment variables from `.env.example` under **Settings → Environment Variables**.
4. Every push to `main` deploys to production; other branches get preview URLs.
5. Add `recd.us` under **Settings → Domains** and follow the DNS instructions Vercel shows.
