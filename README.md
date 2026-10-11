# Medicare Landing Page — Next.js

A fully responsive, animated rebuild of the Medicare landing page design using Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build for production

```bash
npm run build
npm run start
```

## Stack

- **Next.js 14** (App Router)
- **Tailwind CSS** — design tokens (teal / peach / sand palette) in `tailwind.config.ts`
- **Framer Motion** — scroll reveals, hover states, floating cards, testimonial dots
- **lucide-react** — icon set
- **next/image** — optimized images (currently pointing at Unsplash placeholders — swap for real photography/doctor headshots)

## Structure

```
app/
  layout.tsx      Root layout + Google Fonts (Plus Jakarta Sans + Sora)
  page.tsx         Assembles all sections
  globals.css
components/
  Navbar.tsx
  Hero.tsx              hero + stats bar
  FocusCards.tsx        Customer Support / Chamber Services / etc.
  Departments.tsx       Our Department grid
  TopSpecialists.tsx    horizontal scrollable specialist cards
  Benefits.tsx          image collage + benefits list
  Testimonials.tsx      testimonial grid + animated dot pagination
  CTABanner.tsx         "Ready to get started?" banner
  BlogTrending.tsx      article + trending list
  PartnerLogos.tsx
  Footer.tsx
  Reveal.tsx            shared scroll-in-view animation wrapper
```

## Notes

- All copy/images are placeholders — replace doctor names, phone numbers, and Unsplash URLs with real content.
- Animations respect `prefers-reduced-motion`.
- Fully responsive: stacks to a single column below `lg`, mobile nav drawer below `lg`, horizontally scrollable specialist cards on small screens.
# medicare
