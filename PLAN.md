# 🌿 HealthWell SaaS — Master Build Plan

> Mission: Ship a pixel-leaning clone of [healthwell.framer.website](https://healthwell.framer.website/), then graduate it into a real **SaaS** with auth, dashboard, DB and Stripe billing.
>
> **Stack already in place:** Next.js 16 (App Router) · React 19 · Tailwind v4 · shadcn/ui (radix-nova) · framer-motion · lucide-react · TypeScript

Legend: `[ ]` todo · `[~]` in-progress · `[x]` done · 🎯 = milestone deliverable

---

## 🗺️ Phase Map (high-level)

| # | Phase | Deliverable |
|---|---|---|
| 1 | Foundation & Theme | Design tokens, fonts, colors, container |
| 2 | Layout | Navbar + Footer wrappers |
| 3–14 | Marketing Home | All home page sections |
| 15 | Sub-pages | About, Features, Pricing, Articles, Contact |
| 16 | Legal & 404 | Privacy, Cookie, Licensing, Not Found |
| 17–20 | SaaS Layer | Auth, Dashboard, DB, Stripe |
| 21 | Polish | SEO, perf, a11y, deploy |

---

## 🎨 Phase 1 — Foundation & Theme  🎯 *Visual identity locked* ✅

- [x] 1.1 Audit current `globals.css` (Tailwind v4 + shadcn radix-nova)
- [x] 1.2 Define brand color tokens (greens / off-white / charcoal) in `:root`
- [x] 1.3 Add Google Fonts (Geist body + Instrument Serif display) via `next/font`
- [x] 1.4 Create `src/lib/site.ts` — central site metadata (name, nav, social, copy)
- [x] 1.5 Add `Container` primitive in `src/components/ui/container.tsx`
- [x] 1.6 Add `Section` + `SectionHeading` primitive (vertical rhythm wrapper)
- [x] 1.7 Add motion helpers in `src/lib/motion.ts` (fadeUp, stagger, viewport)
- [x] 1.8 Configure `metadata` in `app/layout.tsx` (title template, og, twitter)

## 🧭 Phase 2 — Layout  🎯 *Site shell* ✅

- [x] 2.1 `src/components/layout/navbar.tsx` — logo, nav links, CTA button, mobile sheet
- [x] 2.2 Sticky/blur-on-scroll behavior with framer-motion `useScroll`
- [x] 2.3 `src/components/layout/footer.tsx` — columns + social
- [x] 2.4 Wire into `app/layout.tsx`
- [x] 2.5 Mobile menu (animated)
- [x] 2.6 Active link state per route (sliding pill)

## 🌅 Phase 3 — Hero Section ✅
- [x] 3.1 `sections/hero.tsx`
- [x] 3.2 Big display headline "Improve Your Health with HealthWell®"
- [x] 3.3 Avatar pile + "+1.8M Happy Clients" badge
- [x] 3.4 Primary + secondary CTA buttons
- [x] 3.5 Image collage (4–6 lifestyle images) with rotation/parallax
- [x] 3.6 Entrance animation (stagger fade-up)

## 🌿 Phase 4 — Expedition (About teaser)
- [x] 4.1 `sections/expedition.tsx`
- [x] 4.2 2-column layout: copy left, image cluster right
- [x] 4.3 Marquee/scrolling image strip
- [x] 4.4 "Know Us Better" pill button

## 📊 Phase 5 — Stats
- [x] 5.1 `sections/stats.tsx`
- [x] 5.2 5 stat cards (3M, 1.8M, 750k, 40%, 75k)
- [x] 5.3 CountUp animation on viewport enter
- [x] 5.4 Subtle gradient backdrop

## 📱 Phase 6 — Health Tracking Carousel
- [x] 6.1 `sections/tracking.tsx` with iPhone mockup centerpiece
- [x] 6.2 Tabs/cards: Medication, Symptom, Activity, Nutrition, Sleep
- [x] 6.3 Swap mockup screen on tab change (framer-motion `AnimatePresence`)
- [x] 6.4 Prev/next arrows
- [x] 6.5 Auto-advance with pause-on-hover

## 🗓️ Phase 7 — Appointment & Communication
- [x] 7.1 `sections/appointments.tsx`
- [x] 7.2 Bento grid (6 tiles): Scheduling, Telemedicine, Directory, Messaging, Records, Care Coordination
- [x] 7.3 Mini-mock UIs inside each tile (calendar grid, chat bubbles, vitals card)
- [x] 7.4 Hover lift + border glow

## 🌸 Phase 8 — Wellness Resources
- [x] 8.1 `sections/wellness.tsx`
- [x] 8.2 5-image card grid (Education, Forums, Challenges, Tips, Programs)
- [x] 8.3 Image hover zoom + label slide

## 💬 Phase 9 — Testimonials
- [x] 9.1 `sections/testimonials.tsx`
- [x] 9.2 Marquee or 3-up grid of quote cards
- [x] 9.3 Avatar + name + role + ★★★★★

## 💎 Phase 10 — Pricing
- [x] 10.1 `sections/pricing.tsx`
- [x] 10.2 Monthly/Yearly toggle (`Switch`) — saves 30%
- [x] 10.3 3 plan cards: Basic / Premium (popular) / Elite
- [x] 10.4 Feature checklist per plan
- [x] 10.5 Animated price swap on toggle

## ❓ Phase 11 — FAQ
- [x] 11.1 `sections/faq.tsx`
- [x] 11.2 shadcn `Accordion`
- [x] 11.3 8 Q&A items from source site

## 📰 Phase 12 — Articles
- [x] 12.1 `sections/articles.tsx`
- [x] 12.2 2 featured article cards (cover + category + date + author)
- [x] 12.3 "View All Articles" CTA

## 📲 Phase 13 — App Showcase
- [x] 13.1 `sections/app-showcase.tsx`
- [x] 13.2 iPhone mockup with floating UI cards (vitals, calendar, doctor card)
- [x] 13.3 App Store / Play Store badges
- [x] 13.4 Floating-card animation loop

## 📨 Phase 14 — Newsletter / Final CTA
- [x] 14.1 `sections/newsletter.tsx`
- [x] 14.2 Email input + checkbox + Subscribe button
- [x] 14.3 Success/error toasts (sonner)
- [x] 14.4 Compose Home page in `app/page.tsx`  🎯 **Home complete**

## 📄 Phase 15 — Sub-pages
- [ ] 15.1 `/about` — full story page
- [ ] 15.2 `/features` — anchored feature deep dives (`#medication-tracking`, etc.)
- [ ] 15.3 `/pricing` — full plan comparison table
- [ ] 15.4 `/articles` — blog index + `/articles/[slug]`
- [ ] 15.5 `/contact` — contact form + map/cards

## ⚖️ Phase 16 — Legal & 404
- [ ] 16.1 `/privacy-policy`
- [ ] 16.2 `/cookie-policy`
- [ ] 16.3 `/licensing`
- [ ] 16.4 `not-found.tsx`  🎯 **Marketing site shipped**

---

## 🔐 Phase 17 — SaaS: Auth
- [ ] 17.1 Pick provider (NextAuth v5 / Clerk / Better-Auth) — *recommend NextAuth.js*
- [ ] 17.2 `/sign-in`, `/sign-up`, `/forgot-password` pages
- [ ] 17.3 Email + Google OAuth
- [ ] 17.4 Middleware route protection
- [ ] 17.5 Session in server components

## 📊 Phase 18 — SaaS: Dashboard
- [ ] 18.1 `/dashboard` shell with sidebar + topbar
- [ ] 18.2 Overview page (vitals widgets, upcoming appointments, recent records)
- [ ] 18.3 `/dashboard/appointments`
- [ ] 18.4 `/dashboard/records`
- [ ] 18.5 `/dashboard/messages`
- [ ] 18.6 `/dashboard/settings` (profile, billing, danger zone)

## 🗄️ Phase 19 — SaaS: Database
- [ ] 19.1 Install Prisma + choose DB (Postgres on Neon/Supabase)
- [ ] 19.2 Schema: User, Account, Session, Plan, Subscription, Appointment, Record, Message
- [ ] 19.3 Migrations + seed script
- [ ] 19.4 Server actions / route handlers for CRUD

## 💳 Phase 20 — SaaS: Stripe
- [ ] 20.1 Stripe products mirroring Basic/Premium/Elite
- [ ] 20.2 Checkout session route handler
- [ ] 20.3 Customer portal link
- [ ] 20.4 Webhook handler (`subscription.*`, `invoice.*`)
- [ ] 20.5 Plan-gated dashboard features  🎯 **SaaS live**

## ✨ Phase 21 — Polish & Ship
- [ ] 21.1 Lighthouse pass (≥ 95 perf/a11y/seo)
- [ ] 21.2 Open Graph / Twitter cards per page
- [ ] 21.3 `sitemap.ts` + `robots.ts`
- [ ] 21.4 Error boundaries + loading skeletons
- [ ] 21.5 Deploy to Vercel + custom domain
- [ ] 21.6 Analytics (Vercel Analytics + PostHog)

---

## ✅ Working agreement
1. Work top-down, one phase at a time.
2. After every phase, you load `localhost:3001` and react ✅ / 🔧.
3. Plan is living — we tick boxes here as we go.

