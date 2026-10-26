# Praxis Development — WebDevPro Ultra Max 6

Responsive React + Vite + TypeScript website for Praxis Development (Pty) Ltd, based on WebDevPro Ultra Max 6.

## Features

- Home hero with three realistic workplace stock-photo slides and moderate-speed typewriter animation
- Responsive menu, footer and mobile bottom navigation
- Six services, on-demand training catalogue and illustrated flip-card services
- Founder and associate staff biographies with supplied original profile photographs
- Ubuntu-Science philosophy and Praxis Insights
- Partner/organisation logos supplied with the company document
- PWA install prompt, branded splash/icon, network-first service worker and offline message
- Enquiry preparation form and floating guide; email/WhatsApp destinations remain unset until verified
- Footer WebDevPro credit, contact phone and 2020 brand marker

## Run

```bash
npm ci
npm run build
npm run dev
```

Business content in `site.config.json`, portraits in `public/brand/`, updated source photos described in `IMAGE-SOURCES.md`. For SEO launch, set an approved domain and change `mode` to `client-ready`. The project is presently configured as a **no-index preview** until a production domain is confirmed.
