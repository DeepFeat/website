# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Production build
npm run lint     # Run ESLint
npm run start    # Start production server
```

## Architecture

This is a Next.js 16 marketing website for DeepFeat, a subsea intelligence platform. It uses the App Router architecture with React 19.

### Tech Stack
- **Next.js 16** with App Router (`src/app/`)
- **React 19**
- **Tailwind CSS 4** with CSS variables for theming
- **Framer Motion** for animations
- **TypeScript** with `@/*` path alias mapping to `./src/*`

### Component Organization
Components are organized by feature under `src/components/`:
- `home/` - Homepage sections (Hero, Gallery, ProductShowcase, ProcessFlow, etc.)
- `layout/` - Navbar and Footer
- `ui/` - Reusable UI components (Button, Card, Container, MediaPlaceholder)
- `contact/` - Contact form
- `team/` - Team member cards

### Pages
- `/` - Homepage with multiple section components
- `/contact` - Contact form page
- `/team` - Team page
- `/api/contact` - Contact form API endpoint (POST)

### Theming
CSS variables are defined in `src/app/globals.css` with a military/tactical color palette:
- Primary cyan: `#00e5ff`
- Dark backgrounds: `#000000`, `#0a0f14`, `#1a2128`
- Fonts: Rajdhani (sans), Share Tech Mono (mono)

### Media Placeholders
The `MediaPlaceholder` component is used throughout the site as placeholder for future images/videos. See `MEDIA_GUIDE.md` for replacement instructions.
