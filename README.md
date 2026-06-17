# Newton Lake Guest Guide

A premium mobile-first PWA companion app for Newton Lake House guests. Built with Next.js 15, TypeScript, Tailwind CSS, and shadcn/ui.

## Features

- **Dashboard** — Hero image, quick-action cards, check-in/out info
- **WiFi** — One-tap copy for network name and password
- **House Guide** — Accordion sections covering every aspect of the stay
- **Local Picks** — Curated dining, outdoor, and culture recommendations
- **Property Map** — Interactive SVG map with tappable zones
- **Contact Host** — Text, call, and email links
- **PWA** — Installable, offline fallback, QR-code friendly

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) on your phone or desktop.

## Customize

Edit guest content in `src/lib/data/`:

- `property.ts` — Name, WiFi, host contact, hero image
- `guide.ts` — House guide accordion sections
- `recommendations.ts` — Local picks
- `map-zones.ts` — Interactive map zones

## Deploy

Deploy to Vercel, Netlify, or any static host. The PWA service worker is generated at build time.

```bash
npm run build
npm start
```

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
- shadcn/ui
- Framer Motion
- @ducanh2912/next-pwa
