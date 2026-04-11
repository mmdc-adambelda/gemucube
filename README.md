# GemuCube Solutions — Website

**Business & IT Partnership Firm**  
Built with Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Open http://localhost:3000
```

---

## Project Structure

```
gemucube/
├── app/
│   ├── layout.tsx              # Root layout — Navbar + Footer on all pages
│   ├── globals.css             # Design system — tokens, glass cards, animations
│   ├── page.tsx                # Home page
│   ├── about/page.tsx          # About — Founder profiles
│   ├── solutions/page.tsx      # Solutions — 5 pillars
│   ├── partnership/page.tsx    # Partnership Models
│   ├── case-studies/page.tsx   # 10 Case Studies
│   ├── contact/
│   │   ├── page.tsx            # Server wrapper (metadata)
│   │   └── ContactPage.tsx     # Client component (form)
│   ├── articles/
│   │   ├── page.tsx            # Editorial hub index
│   │   ├── business-guides/
│   │   ├── tech-operation-guides/
│   │   ├── case-studies/
│   │   ├── project-articles/
│   │   └── [category]/[slug]/  # Dynamic article pages
│   ├── sitemap.ts
│   ├── robots.ts
│   └── not-found.tsx
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── sections/
│       └── CategoryLayout.tsx  # Reusable article category listing
├── lib/
│   └── articles.ts             # All 40 article definitions (structured data)
└── public/
    └── assets/
        └── logo.png
```

---

## Design System

**Fonts:** DM Serif Display (headlines) + DM Sans (body) + JetBrains Mono (labels/code)  
**Colors:** `#FFDB49` Yellow · `#080808` Background · `#0e0e0e` Surface · Glass cards with `rgba(255,255,255,0.04)`  
**Style:** Dark mode · Glassy cards · Subtle glow orbs · Grid background texture · Monospace eyebrow labels

---

## To Connect the Contact Form

In `app/contact/ContactPage.tsx`, replace the `await new Promise(...)` placeholder:

```ts
const response = await fetch('YOUR_ZAPIER_WEBHOOK_URL', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(form),
})
```

The Zapier webhook should create a deal in Zoho CRM and send a confirmation email.

---

## To Add Full Article Content

Articles currently render a placeholder body. Two options:

**Option A — Markdown files:**
1. Create `/content/articles/[slug].md` for each article
2. Install `next-mdx-remote` or `gray-matter` + `remark`
3. Load and render in `app/articles/[category]/[slug]/page.tsx`

**Option B — Headless CMS:**
1. Connect Contentful, Sanity, or Notion as CMS
2. Fetch article body by slug in `generateStaticParams`
3. Render with your preferred rich text renderer

---

## To Add Founder Photos

Replace the monogram avatars in `app/about/page.tsx`:

```tsx
// Replace the initials div with:
<Image
  src="/assets/adam.jpg"
  alt="Adam Raymond Belda"
  width={80}
  height={80}
  className="rounded-lg object-cover"
/>
```

Add `adam.jpg` and `renz.jpg` to `/public/assets/`.

---

## Deployment

**Vercel (recommended):**
```bash
npm install -g vercel
vercel
```

**Environment variables to set in Vercel:**
- `NEXT_PUBLIC_SITE_URL` = `https://gemucube.com`

---

## SEO Configuration

Each page exports its own `metadata`. Update `app/layout.tsx` `metadataBase` to your live domain before deployment.

Schema markup types per page:
- Home → Organization
- About → Person (Adam) + Person (Renz)  
- Solutions → Service (×5 pillars)
- Partnership → Service
- Case Studies → Article
- Contact → ContactPage

---

*Built by GemuCube Solutions · General Trias City, Cavite 4107, Philippines*
