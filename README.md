# Sujith S M Portfolio (Next.js 15)

Modern dark-theme portfolio for **Sujith S M** built with Next.js App Router + TypeScript + Tailwind + Framer Motion.

## Stack

- Next.js 15 (App Router)
- TypeScript
- TailwindCSS
- Framer Motion
- Lucide React
- Recharts
- tsparticles
- Contact API: Next.js Route Handler + Resend API

## Local setup

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Environment variables

Copy `.env.example` to `.env.local` and set:

- `RESEND_API_KEY`
- `CONTACT_TO_EMAIL`
- `CONTACT_FROM_EMAIL`

## Build

```bash
npm run build
```

## Deploy to Vercel

1. Push repository to GitHub.
2. Import the repository in Vercel.
3. Add environment variables in Vercel project settings:
   - `RESEND_API_KEY`
   - `CONTACT_TO_EMAIL`
   - `CONTACT_FROM_EMAIL`
4. Deploy.

After deploy, contact form submissions are sent via `/api/contact` using Resend.
