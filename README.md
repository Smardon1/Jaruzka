# OceanCore — Offshore Drilling Company Website

A complete, production-ready Next.js website for OceanCore, an offshore drilling contractor headquartered in Sydney, Australia.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: TypeScript
- **Fonts**: Inter (Google Fonts)
- **Icons**: Lucide React
- **Hosting**: Vercel

## Features

- ✅ Full-page translation — 6 languages (EN, FR, ES, ZH, PT, AR)
- ✅ RTL support for Arabic
- ✅ Animated canvas ocean + drilling rig hero
- ✅ Scroll-reveal animations
- ✅ Animated stat counters
- ✅ Fully responsive (mobile-first)
- ✅ All nav, footer, and internal links connected
- ✅ SEO metadata on every page
- ✅ News ticker
- ✅ Contact form
- ✅ Careers application form
- ✅ Fleet page with vessel cards
- ✅ Projects portfolio
- ✅ HSE page
- ✅ Privacy, Terms, Modern Slavery, Cookie policy pages

## Pages

| Route | Description |
|---|---|
| `/` | Home |
| `/about` | About, Values, Leadership, Certifications |
| `/services` | All 6 service lines |
| `/fleet` | Vessel fleet with specs |
| `/projects` | Project portfolio |
| `/hse` | HSE commitment & certifications |
| `/careers` | Open roles & application form |
| `/news` | News & insights with category filter |
| `/contact` | Contact form & office locations |
| `/privacy` | Privacy Policy |
| `/terms` | Terms of Use |
| `/modern-slavery` | Modern Slavery Statement |
| `/cookies` | Cookie Policy |

## Getting Started

### Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open in browser
open http://localhost:3000
```

### Build for Production

```bash
npm run build
npm start
```

## Deploying to Vercel

### Option 1 — Vercel CLI (fastest)

```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy from project root
cd oceancore
vercel

# Follow prompts:
# - Set up and deploy: Y
# - Which scope: your account
# - Link to existing project: N
# - Project name: oceancore
# - Directory: ./
# - Override settings: N
```

### Option 2 — Vercel Dashboard (recommended)

1. Push this project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click **"Add New Project"**
4. Import your GitHub repository
5. Vercel auto-detects Next.js — click **"Deploy"**
6. Done — your site is live at `oceancore.vercel.app`

### Option 3 — GitHub + Vercel Auto-Deploy

```bash
# Initialise git
git init
git add .
git commit -m "Initial commit — OceanCore website"

# Push to GitHub
gh repo create oceancore --public --push
```
Then connect in Vercel dashboard for automatic deploys on every push.

## Custom Domain

1. In Vercel dashboard → Project → Settings → Domains
2. Add `oceancore.com.au`
3. Update DNS at your registrar:
   ```
   A     @     76.76.21.21
   CNAME www   cname.vercel-dns.com
   ```

## Customisation

### Update translations
Edit `/src/lib/translations.ts` — all copy is centralised here.

### Add a language
1. Add to `LANGUAGES` array in `translations.ts`
2. Create a new translation object following the `en` structure
3. Add it to the `translations` export

### Brand colours
Edit `tailwind.config.ts` — update `navy` and `gold` colour values.

### Replace placeholder contact info
Search for `oceancore.com.au`, `+61 2 9001 0000`, and `1 Macquarie Place` throughout the codebase.

## Project Structure

```
src/
  app/
    layout.tsx          # Root layout with Nav + Footer
    page.tsx            # Home page
    globals.css         # Global styles + Tailwind
    about/page.tsx
    services/page.tsx
    fleet/page.tsx
    projects/page.tsx
    hse/page.tsx
    careers/page.tsx
    news/page.tsx
    contact/page.tsx
    privacy/page.tsx
    terms/page.tsx
    modern-slavery/page.tsx
    cookies/page.tsx
    not-found.tsx
  components/
    Navbar.tsx          # Responsive nav with mobile menu + services dropdown
    Footer.tsx          # Full footer with all links
    HeroCanvas.tsx      # Animated ocean + rig canvas
    NewsTicker.tsx      # Scrolling news bar
    PageHero.tsx        # Inner page hero with breadcrumbs
    ScrollReveal.tsx    # Intersection-observer scroll animations
    StatCounter.tsx     # Animated number counters
    TranslationWidget.tsx # Language switcher
  context/
    LanguageContext.tsx # Translation state provider
  lib/
    translations.ts     # All copy in 6 languages
```

## License

© 2026 OceanCore Pty Ltd. All rights reserved.
