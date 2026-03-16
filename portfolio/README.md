# Madhav Donthula - Personal Portfolio

A modern, animated personal portfolio website built with Next.js 14, Tailwind CSS, and Framer Motion.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Inter (body) + JetBrains Mono (code/labels) via next/font

## Features

- Custom dot cursor with spring hover animation
- Indigo sweep page-load transition
- Sticky frosted-glass navbar with hover underline animations
- Mobile nav drawer with staggered link reveal
- Hero section with typewriter animation (Software Engineer → Data Scientist → Product Builder → Founder)
- Animated gradient orb with parallax mouse tracking
- Scroll-reveal animations across all sections
- About section with circular photo, bio, and count-up stat chips
- Experience timeline with tech pills and award badges
- Projects bento grid with hover effects
- Skills section with grouped pill tags and float animations
- Contact section with icon cards and floating-label form
- Full SEO metadata, OG image config, sitemap, and robots.txt
- Accessibility: aria labels, keyboard nav, reduced-motion support

## Local Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build

```bash
npm run build
npm start
```

## Folder Structure

```
src/
├── app/                 # Next.js App Router
│   ├── layout.tsx      # Root layout with fonts and metadata
│   ├── page.tsx        # Home page
│   ├── globals.css     # Global styles and design tokens
│   ├── robots.ts       # robots.txt
│   └── sitemap.ts      # sitemap.xml
├── components/
│   ├── ui/             # Reusable UI components
│   │   ├── CustomCursor.tsx
│   │   ├── PageLoadTransition.tsx
│   │   ├── Typewriter.tsx
│   │   ├── HeroOrb.tsx
│   │   └── RevealOnScroll.tsx
│   └── sections/       # Page sections
│       ├── Navbar.tsx
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Experience.tsx
│       ├── Projects.tsx
│       ├── Skills.tsx
│       ├── Contact.tsx
│       └── Footer.tsx
├── hooks/
│   └── useScrollReveal.ts
├── lib/
│   └── utils.ts        # cn() for class merging
└── constants/
    └── animations.ts  # Animation duration, easing values
```

## Images

Place images in `public/images/`:

- `public/images/experience/` - Synopsys, Handbook, Guardian
- `public/images/projects/` - Project screenshots
- `public/images/og-image.png` - Open Graph image (1200x630)

## Deployment

Configured for Vercel. Add `vercel.json` is included. Deploy with:

```bash
vercel
```
