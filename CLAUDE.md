# CLAUDE.md

@AGENTS.md

## What rec'd is

rec'd ([recd.us](https://recd.us)) is an Atlanta app that connects local creators with local businesses.

## What this repo is

- This repo is **only the marketing website**.
- The mobile app is a **separate Expo repo**. Both share **one Supabase backend**.
- Supabase is not installed here yet. It will be added for waitlist forms using
  `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` (see `.env.example`).
  Never commit `.env.local`.

## Stack

- Next.js 16 (App Router, TypeScript strict, `src/` directory). Next 16 differs from older versions:
  check `node_modules/next/dist/docs/` before using an API you're unsure of.
- Tailwind CSS v4 (CSS-first config, no `tailwind.config.js`)
- Framer Motion (installed, reserved for the animated tagline)
- ESLint (flat config) + Prettier with `prettier-plugin-tailwindcss`
- npm. Deployed on Vercel.
- The developer works on Windows 11: all commands and scripts must work in PowerShell
  (no bash-only syntax in `package.json` scripts).

## Folder conventions

- `src/app/`: routes, layouts and metadata routes (`robots.ts`, `sitemap.ts`, `icon.svg`, `opengraph-image.tsx`)
- `src/components/`: shared React components
- `src/lib/`: utilities and config. `src/lib/site.ts` holds the site name, tagline and URL; import from there instead of hard-coding.
- `public/`: static assets
- Theme tokens (colors, fonts) live in the `@theme` block in `src/app/globals.css`. That is the one place to change the brand palette.
- Brand assets still to come are marked `TODO(brand)`.
- New public routes go into `routes` in `src/app/sitemap.ts`.

## Brand notes

- Always written lowercase: **rec'd**. Never "Rec'd" or "RECD", including at the start of a sentence.
- Tagline: **record. recommend. rec'd.**
- Feel: inviting, authentic, tasteful, colorful, Gen Z.
- Logo: a lowercase black wordmark.

## Rules

- Keep it simple. Don't add dependencies unless they're clearly needed.
- Mobile-first: design for small screens, then scale up with `sm:`/`md:`/`lg:`.
- TypeScript strict; no `any` without a good reason.
- Before committing: `npm run lint`, `npm run typecheck`, `npm run format:check`, `npm run build`.
