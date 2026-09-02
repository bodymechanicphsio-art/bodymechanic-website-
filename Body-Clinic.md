# Body-Clinic

Marketing website for **Body Mechanic Physiotherapy Clinic** - Lahore, Pakistan.

- **Live domain:** https://bodymechanic-physio.com
- **Stack:** Next.js 16 · React 19 · TypeScript · Tailwind CSS v4
- **Type:** Static frontend - no database, no backend API

---

## Project structure

```
Body-Clinic/
├── app/
│   ├── layout.tsx              # Root layout, fonts, global SEO, JSON-LD
│   ├── sitemap.ts              # Dynamic sitemap (auto-generated)
│   ├── robots.ts               # Dynamic robots.txt
│   ├── globals.css               # Brand design system
│   └── (marketing)/              # Public pages + shared Navbar/Footer
│       ├── layout.tsx
│       ├── page.tsx              # Home
│       ├── about/page.tsx
│       ├── services/page.tsx
│       ├── book/page.tsx
│       ├── privacy/page.tsx
│       └── terms/page.tsx
├── components/
│   ├── layout/                   # Navbar, Footer, LegalDocument
│   ├── sections/                 # Homepage & page sections
│   ├── forms/                    # BookingForm
│   ├── ui/                       # Button, JsonLd, WhatsAppButton, etc.
│   └── 3d/                       # HeroScene (optional, not on homepage)
├── lib/
│   ├── constants/                # Single source of truth for all content
│   │   ├── clinic.ts             # Contact, hours, nav, mission
│   │   ├── services.ts           # Service catalog
│   │   ├── content.ts            # Stats, team, testimonials, FAQ
│   │   └── legal.ts              # Privacy & Terms content
│   ├── seo.ts                    # Metadata helpers, sitemap routes
│   ├── assets.ts                 # Public image path registry
│   ├── types.ts
│   └── whatsapp.ts               # WhatsApp booking link helpers
└── public/images/                # Brand assets (see Asset checklist)
    ├── logo/
    ├── og/
    └── team/
```

---

## Content data model

All content is static TypeScript - no CMS or database.

| Module | Key exports | Used by |
|--------|-------------|---------|
| `clinic.ts` | `CLINIC`, `CLINIC_HOURS`, `NAV_LINKS` | Layout, Footer, Contact, JsonLd |
| `services.ts` | `SERVICES`, `HOME_SERVICE_HIGHLIGHTS` | Services page, home, booking |
| `content.ts` | `STATS`, `TEAM_MEMBERS`, `TESTIMONIALS`, `FAQ_ITEMS` | Sections, JsonLd |
| `legal.ts` | `PRIVACY_SECTIONS`, `TERMS_SECTIONS` | Legal pages |

**Rule:** Never duplicate clinic info in components. Add or edit data in `lib/constants/` only.

---

## Pages

| Route | Purpose |
|-------|---------|
| `/` | Home - hero, services, team, testimonials, contact |
| `/about` | Clinic story, mission, team, credentials |
| `/services` | Full service catalog + FAQ |
| `/book` | Booking form → WhatsApp |
| `/privacy` | Privacy Policy |
| `/terms` | Terms of Service |

---

## Booking flow

1. User fills form on `/book` or `/#contact`
2. Form builds a structured WhatsApp message via `lib/whatsapp.ts`
3. Opens `wa.me/923004971086` with pre-filled text
4. Clinic staff confirms appointment manually

No email backend or database - by design for MVP.

---

## SEO setup

### What's already done

| Item | File | Status |
|------|------|--------|
| Root metadata | `lib/seo.ts` → `rootMetadata` | ✅ |
| Per-page metadata | `createPageMetadata()` on every page | ✅ |
| Dynamic sitemap | `app/sitemap.ts` | ✅ |
| Dynamic robots.txt | `app/robots.ts` | ✅ |
| JSON-LD LocalBusiness | `components/ui/JsonLd.tsx` | ✅ |
| JSON-LD MedicalBusiness | `components/ui/JsonLd.tsx` | ✅ |
| JSON-LD FAQ | Services page | ✅ |
| Open Graph tags | All pages via `createPageMetadata` | ✅ (image path ready) |
| Twitter cards | All pages | ✅ (image path ready) |
| Canonical URLs | Per page | ✅ |
| Google verification | Env variable (see below) | ⏳ Needs your code |

### SEO plan - next actions (when ready)

#### Step 1: Google Search Console (do first after deploy)

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property: `bodymechanic-physio.com`
3. Choose **HTML tag** verification method
4. Copy the `content="..."` value from the meta tag
5. Create `.env.local`:
   ```
   NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your-code-here
   ```
6. Redeploy on Vercel (add same env var in Vercel dashboard)
7. Click **Verify** in Search Console
8. Submit sitemap: `https://bodymechanic-physio.com/sitemap.xml`

#### Step 2: Add brand assets (when you have files)

Drop files into `public/images/`:

| File | Path | Size |
|------|------|------|
| Logo | `public/images/logo/logo.png` | Square, min 200×200 |
| Favicon | `public/images/logo/favicon.ico` | 32×32 |
| OG image | `public/images/og/og-image.png` | **1200×630** (required for social previews) |
| Hero | `public/images/hero/hero-main.jpg` | 1600px wide |
| Clinic interior | `public/images/clinic/clinic-interior.jpg` | 1600px wide |
| Services (6) | `public/images/services/*.jpg` | 1200px wide each |
| Conditions (8) | `public/images/conditions/*.jpg` | 800px wide each |
| Contact photo | `public/images/contact/clinic-photo.jpg` | 1200px wide |
| Team photo | `public/images/team/dr-samia-hijab.jpg` | Portrait, replace placeholder |

Paths are defined in `lib/assets.ts`. Stock source URLs are in `IMAGE_SOURCES` in the same file.

#### Step 3: Post-launch SEO (optional, later)

- [ ] Google Business Profile - link to website
- [ ] Bing Webmaster Tools - submit sitemap
- [ ] Google Maps embed on contact/book pages
- [ ] Analytics (Plausible or Google Analytics)
- [ ] Monitor Search Console for indexing errors

### Target keywords

Primary: `physiotherapy lahore`, `physio clinic lahore`, `sports physiotherapy lahore`, `dry needling lahore`

Secondary: `chronic pain management`, `home physio lahore`, `body mechanic clinic`

---

## Environment variables

| Variable | Required | Description |
|----------|----------|-------------|
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | No | Google Search Console verification code |

Copy `.env.example` to `.env.local` and fill in when ready.

---

## Development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint     # ESLint
```

---

## Deployment

Hosted on **Vercel**. Push to `main` triggers auto-deploy.

Add `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` in Vercel → Project → Settings → Environment Variables when ready.

---

## Asset checklist

- [x] `public/images/logo/logo.png`
- [ ] `public/images/logo/favicon.ico`
- [ ] `public/images/og/og-image.png` (1200×630)
- [x] `public/images/hero/hero-main.jpg` (stock - replace with clinic photo)
- [x] `public/images/clinic/clinic-interior.jpg` (stock)
- [x] `public/images/services/*.jpg` (stock)
- [x] `public/images/conditions/*.jpg` (stock)
- [x] `public/images/contact/clinic-photo.jpg` (stock)
- [ ] `public/images/team/dr-samia-hijab.jpg` (placeholder - add real team photo)

---

## Milestone history

| Date | Milestone |
|------|-----------|
| Jul 2026 | Initial site - hero, services, WhatsApp booking, SEO metadata |
| Jul 2026 | Structure refactor - `lib/constants/`, shared layout, all sections wired |
| Aug 2026 | Light clinical theme - photo sections, conditions grid, Pexels stock images |

---

## Roadmap

- [ ] Add brand assets when available
- [ ] Google Search Console verification
- [ ] Google Maps embed
- [ ] Custom 404 page
- [ ] Analytics integration
