# AstroSec 2.0

Marketing website for **AstroSec** — cybersecurity, AI systems, and full-stack engineering studio.

Built with [Next.js 16](https://nextjs.org) (App Router, Turbopack), [React 19](https://react.dev), TypeScript, and [Tailwind CSS v4](https://tailwindcss.com).

## Pages

| Route         | Purpose                                   |
| ------------- | ----------------------------------------- |
| `/`           | Hero, stats, capabilities, process, work  |
| `/services`   | Service catalog (AI, security, engineering) |
| `/projects`   | Portfolio + testimonials                  |
| `/about`      | Team & company story                      |
| `/contact`    | Contact form + direct channels            |
| `/privacy`    | Privacy policy                            |
| `/terms`      | Terms of service                          |
| `/api/contact` | Serverless endpoint that delivers form submissions by email |

## Development

```bash
npm install
npm run dev       # local dev server (http://localhost:3000)
npm run build     # production build
npm run lint      # eslint
```

## Environment variables

The contact form emails via [Resend](https://resend.com). Copy `.env.example` to `.env.local`:

```bash
RESEND_API_KEY=re_xxxxxxxx          # required to actually deliver email
CONTACT_TO_EMAIL=info@astrosec.in   # optional, defaults to info@astrosec.in
CONTACT_FROM_EMAIL=AstroSec <onboarding@resend.dev>  # optional
```

Without `RESEND_API_KEY`, submissions are logged server-side instead of sent (the site keeps working; nothing is delivered).

## Deployment

Pushed to GitHub and deployed on Vercel. Env vars for production are set in the Vercel project settings.
