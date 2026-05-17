# Gouru Rakesh — Premium Portfolio

Ultra-modern, animated personal portfolio built with **React**, **Vite**, **Tailwind CSS**, **Framer Motion**, and **Three.js**.

![Portfolio Preview](./public/og-preview.png)

## Live Demo

> Update this URL after Vercel deployment:
> **https://gouru-rakesh-portfolio.vercel.app**

## Features

- Animated loading screen & premium hero with profile photo
- Glassmorphism UI with orange + neon blue gradients
- Dark / light mode toggle
- Custom cursor, scroll progress, parallax & particle background
- Typing animation for roles (AI Developer, Full Stack, etc.)
- Skills, Projects, Experience timeline, Achievements, Contact
- EmailJS-ready contact form
- Lazy-loaded sections, SEO meta tags & structured data
- Fully responsive design

## Tech Stack

| Layer | Tools |
|-------|--------|
| Frontend | React 19, Vite 8 |
| Styling | Tailwind CSS 4 |
| Animation | Framer Motion, GSAP-ready |
| 3D | Three.js, React Three Fiber |
| Icons | React Icons |
| Contact | EmailJS |
| Deploy | Vercel |

## Project Structure

```
src/
├── components/     # Reusable UI (Navbar, Cursor, Loader, etc.)
├── sections/       # Page sections (Hero, About, Skills, ...)
├── pages/          # Home page composition
├── hooks/          # useTheme, useTypingEffect, etc.
├── animations/     # Framer Motion variants
├── constants/      # Content & config data
├── utils/          # Helpers (scrollTo)
├── assets/         # Images (profile.png)
├── App.jsx
└── main.jsx
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
git clone https://github.com/YOUR_USERNAME/gouru-rakesh-portfolio.git
cd gouru-rakesh-portfolio
npm install
```

### Environment Variables

Copy `.env.example` to `.env` and add your EmailJS credentials:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_SITE_URL=https://your-domain.vercel.app
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

### Production Build

```bash
npm run build
npm run preview
```

## Customization

- **Profile & content:** Edit `src/constants/index.js`
- **Resume:** Replace `public/resume.pdf` with your CV
- **Photo:** Replace `src/assets/profile.png`
- **Social links:** Update `PERSONAL` in constants

## Deploy to Vercel

1. Push this repo to GitHub
2. Go to [vercel.com](https://vercel.com) → **Add New Project**
3. Import the GitHub repository
4. Framework preset: **Vite** (auto-detected)
5. Add environment variables from `.env.example`
6. Deploy

`vercel.json` is included for SPA routing.

## Deploy via CLI

```bash
npm i -g vercel
vercel login
vercel --prod
```

## EmailJS Setup

1. Create account at [emailjs.com](https://www.emailjs.com)
2. Add email service + template
3. Copy Service ID, Template ID, and Public Key to `.env`

## Author

**Gouru Rakesh**  
AI Developer · Full Stack Developer · Mainframe Support Engineer

---

© 2026 Gouru Rakesh. All rights reserved.
