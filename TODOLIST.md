# Master Todo List - High Performance Landing Page (MVP Focus)

## 📌 Phase 1: Foundation (MVP - Wajib)
*Goal: Project ready, deployed, and fast.*

- [ ] **Project Setup**
    - [ ] `npm create astro@latest` (Template: Empty)
    - [ ] Install Integrations: `@astrojs/tailwind`, `@astrojs/alpinejs`, `@astrojs/sitemap`
    - [ ] Clean up default Astro files
    - [ ] Setup folder structure (`src/components`, `src/layouts`, `src/pages`)
- [ ] **Design System & Layout**
    - [ ] Config Tailwind (`tailwind.config.mjs`) for Typography & Colors (Trust Blue)
    - [ ] Create `Layout.astro` (Base HTML structure with SEO meta slots)
    - [x] Create `Navbar.astro` (Mobile responsive)
    - [x] Create `Footer.astro`
- [ ] **Key Components Development**
    - [x] `Hero.astro` (Value Prop: "Web < 2 Detik")
    - [x] `ServiceCard.astro` (3 tiers: Basic, Performance, Dominator)
    - [x] `StickyWA.astro` (The "Rotator" logic + Floating Button) - *High Priority*
    - [x] `PerformanceBadge.astro` (Show live stats: Size, Score) - *Proof of Work*
    - [x] `FAQ.astro` (Accordion style using Alpine.js)

## ⚡ Phase 2: The "Killer Features" (MVP - Wajib)
*Goal: Prove we are "Engineers", not just designers.*

- [ ] **Interactive Calculator (The Demo)**
    - [ ] Create `RenovationCalculator.astro` (Island Component)
    - [ ] Implement Logic: `(m2 * price) + material_grade` using Alpine.js
    - [ ] Styling: Slider inputs, Real-time currency formatting (Rp)
- [ ] **Speed Optimization**
    - [ ] Convert all assets to WebP
    - [ ] Implement `Image` component from Astro
    - [ ] Verify Lighthouse Score > 95 locally

## 📊 Phase 3: Analytics & SEO (MVP - Wajib)
*Goal: "Spy Pixel" & Google Friendly.*

- [ ] **SEO Technicals**
    - [ ] Create `SchemaJSONLD.astro` component
    - [ ] Inject `LocalBusiness` data
    - [ ] Generate `sitemap.xml` & `robots.txt`
- [x] **Tracking Infrastructure**
    - [x] Setup GTM script injection (Partytown/Deferred)
    - [x] Create `analytics.js` utility for `dataLayer.push`
    - [ ] Test Event: "Click WA" fires `generate_lead`

## 🚀 Phase 4: Launch & Manual Audit (MVP - Process)
- [ ] Deploy to Vercel/Netlify
- [ ] Test Live URL on GTMetrix & PageSpeed Insights
- [ ] **Ghost Audit Workflow:**
    - [ ] Cari 5 calon klien di IG (Niche: Renovasi)
    - [ ] Audit manual pakai `docs/Manual_Audit_SOP.md`
    - [ ] Kirim pesan WA personal

---

## 🔮 Future / Non-MVP (Kerjakan Nanti)
*Goal: Automation & Scaling.*

- [ ] **Automated Audit Tool** (User input URL -> Auto crawl -> PDF Report)
- [ ] **Blog/Case Study Section** (Content Marketing)
- [ ] **Dark Mode Toggle** (Nice to have, not critical for B2B)
- [ ] **Client Dashboard** (Login area for clients to see leads)
