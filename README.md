# Rupesh Tonpe Premium Portfolio + Admin CMS

Production-ready Next.js 15 + TypeScript portfolio website and admin panel for Rupesh Tonpe.

## Features

- Premium cinematic dark UI (Tailwind + Framer Motion)
- Pages: Home, About, Portfolio, Single Project, Services, Experience, Contact, Login, Admin, 404
- CMS/Admin Dashboard with JWT auth
- CRUD APIs for projects, categories, services, testimonials, settings
- Contact form API + submissions management
- MongoDB models for Users, Projects, Categories, Testimonials, Services, Contact Messages, Settings
- Cloudinary upload API
- SEO metadata + OpenGraph + sitemap + robots
- Mobile-first responsive design + page transitions + loading screen + custom cursor + sticky dock

## Folder Structure

```txt
app/
  api/
  about/
  admin/
  contact/
  experience/
  portfolio/
  services/
  layout.tsx
  page.tsx
  sitemap.ts
  robots.ts
components/
lib/
  models/
scripts/
public/
```

## Setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Admin Login

- URL: `/admin/login`
- Email: `ADMIN_EMAIL`
- Password hash: `ADMIN_PASSWORD_HASH` (bcrypt)

Generate hash:

```bash
node -e "require('bcryptjs').hash('your_password',10).then(console.log)"
```

## Database Seed

```bash
npm run seed
```

## Deploy to Vercel

1. Push repository to GitHub.
2. Import project in Vercel.
3. Set all variables from `.env.example`.
4. Deploy.

## Build

```bash
npm run lint
npm run build
npm run start
```
