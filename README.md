# Threads of Enlightenment

A lightweight Next.js App Router website and custom CMS for Ken Primus and Threads of Enlightenment.

## Stack
- Next.js App Router + TypeScript
- TailwindCSS
- Prisma ORM
- PostgreSQL (Railway-ready)
- Cloudflare R2 public media URLs
- PayPal placeholder endpoint for later checkout integration

## Local setup
```bash
npm install
cp .env.example .env
npm run prisma:generate
npm run prisma:migrate
npm run prisma:seed
npm run dev
```

Set `DATABASE_URL`, `ADMIN_EMAIL`, `ADMIN_PASSWORD`, `AUTH_SECRET`, and `NEXT_PUBLIC_SITE_URL` in Railway. Media fields accept pasted Cloudflare R2 public URLs.
