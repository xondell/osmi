<div align="center">

# ✦ osmi

### Digital Presence Architecture for humans, search engines and AI discovery

A multilingual digital-services website focused on **web development, SEO, Generative Engine Optimization (GEO), and Google Maps visibility**.

[**Live deployment**](https://osmi-topaz.vercel.app/)

![Next.js](https://img.shields.io/badge/Next.js-16.2-000000?logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![i18n](https://img.shields.io/badge/i18n-EN_%7C_RO_%7C_RU-4B5563)

</div>

---

## What osmi is

osmi is built around a simple idea:

> A modern business should be discoverable by people, traditional search engines, local search and AI-driven discovery systems.

The site presents four core service directions:

- **Web Development** — fast, minimalist websites with a strong technical base;
- **SEO** — technical and content optimization for conventional search;
- **GEO** — content/data structure designed for generative discovery;
- **Google Maps** — local-search and business-profile visibility.

## Experience

- 🌍 English, Romanian and Russian localization
- 🧭 locale-aware routing with `next-intl`
- ✨ animated sections with Framer Motion
- 🪶 smooth scrolling with Lenis
- 📱 responsive typography and layout
- 🧩 case-study presentation
- 📨 contact form with loading / success / error states
- 🤖 server-side delivery of contact requests to Telegram
- 🔍 localized metadata

## Contact flow

```mermaid
flowchart LR
    U[Visitor] --> F[Contact form]
    F --> API[/api/contact]
    API --> ESC[Escape user content]
    ESC --> TG[Telegram Bot API]
    TG --> C1[Chat 1]
    TG --> C2[Additional chats]
```

The API route supports one or multiple Telegram chat IDs.

Required server variables:

```env
TELEGRAM_BOT_TOKEN=
TELEGRAM_CHAT_ID=
```

`TELEGRAM_CHAT_ID` may contain multiple IDs separated by spaces, commas or semicolons.

## Tech stack

| Area | Technology |
|---|---|
| Framework | Next.js 16.2 |
| UI | React 19.2 |
| Language | TypeScript |
| Styling | Tailwind CSS 4 |
| Animation | Framer Motion |
| Smooth scroll | Lenis |
| Internationalization | next-intl |
| Contact delivery | Telegram Bot API |
| Icons | Lucide React |

## Local development

```bash
git clone https://github.com/xondell/osmi.git
cd osmi
npm install
npm run dev
```

Commands:

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Project structure

```text
osmi/
├── messages/
│   ├── en.json
│   ├── ro.json
│   └── ru.json
├── public/
└── src/
    ├── app/
    │   ├── [locale]/
    │   └── api/contact/
    ├── components/
    ├── i18n/
    └── proxy.ts
```

## Page flow

```text
Hero → Problem / positioning → Services → Case study → Contact → Telegram
```

## Design system

The interface deliberately avoids a conventional agency-template look:

- oversized typography;
- black/white contrast;
- generous whitespace;
- restrained motion;
- responsive content hierarchy;
- focused conversion path.

---

<div align="center">

**osmi — digital presence built for the way discovery works now.**

</div>
