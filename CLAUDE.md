# Applied Flux LLC — Project Context

## North Star
The credibility anchor for Director, VP, and C-Suite marketing/ops leaders evaluating whether to engage Applied Flux. Convert skeptics to inquiries — no fluff, no theater.

## Status
Sprint 1 — In progress. Site built, GitHub connected. Cloudflare Pages TBD (manual setup by owner).

## Tech Stack
- **Markup:** Vanilla HTML5 (`index.html`)
- **Styles:** Vanilla CSS (`styles.css`) — custom properties, no framework
- **JS:** Inline, minimal — IntersectionObserver scroll animations only
- **Fonts:** Google Fonts CDN — DM Serif Display, DM Sans, JetBrains Mono
- **Deployment:** Cloudflare Pages (static direct upload) — owner connects manually via Cloudflare dashboard

## Active Integrations
- Google Fonts CDN
- Cloudflare Pages (pending owner setup)

## Environment & Credentials
- **Live URL:** appliedflux.com (pending Cloudflare domain connection)
- **Contact email:** hello@appliedflux.com (Cloudflare Email Routing → personal inbox, pending setup)
- **GitHub repo:** rcadden/applied-flux

## Brand & Design
- **Background:** `#0e0e10` (primary), `#131315` (CTA section), `#161618` (cards)
- **Text:** `#f0ede8` (primary), `#888` (muted)
- **Accent:** `#e8a020` (amber — hover states, underlines, CTA email)
- **Borders:** `rgba(255,255,255,0.08)` dividers, `rgba(255,255,255,0.10)` cards
- **Display:** DM Serif Display (headlines, italic emphasis)
- **Body/UI:** DM Sans (body copy, nav, labels)
- **Technical labels:** JetBrains Mono (`// SECTION` markers, service numbers, tags)
- **Hero:** Left-aligned, grid texture background, single CTA link
- **Services:** Full-width numbered rows with border-top dividers — NO card grids
- **Ventures:** 2-column cards with image preview, dark border, no shadow

## Lessons Learned
- Cloudflare Pages must be connected to GitHub manually via dashboard — cannot be done retroactively via API/CLI after repo creation.
