# Applied Flux LLC — Project Context

## North Star
Convert two audiences to inquiries — no fluff, no theater:
1. Senior marketing/ops leaders (homepage — credibility anchor)
2. Service-business owners needing a website (`websites.html` — productized: $2,500 build / $500-mo retainer)

## Hard Constraint
**Fully disconnected from Ricky's Balcom Agency work.** Never reference Balcom projects, clients, or capabilities on this site. Pre-Balcom career history (Sprint, RadioShack, Sabre, Smith & Nephew) is fine. Voice is first-person singular ("I", Ricky Cadden) — not corporate "we".

## Status
Sprint 2 — Redesign + voice rewrite complete on `dev`, awaiting owner review. Email routing live. Site live on Cloudflare Pages (appliedflux.com).

## Tech Stack
- **Markup:** Vanilla HTML5 (`index.html`, `websites.html`)
- **Styles:** Vanilla CSS (`styles.css`) — custom properties, no framework
- **JS:** Inline, minimal — IntersectionObserver scroll animations only
- **Fonts:** Google Fonts CDN — Fraunces, DM Sans, JetBrains Mono
- **Analytics:** GTM (`GTM-NGXQ7RFG`) → GA4 — deliberate owner choice
- **Deployment:** Cloudflare Pages, connected to GitHub (dev = preview, main = production)

## Active Integrations
- Google Fonts CDN
- Google Tag Manager / GA4
- Cloudflare Pages + Email Routing

## Environment & Credentials
- **Live URL:** appliedflux.com
- **Contact email:** hello@appliedflux.com (Cloudflare Email Routing → personal inbox, live)
- **GitHub repo:** rcadden/applied-flux

## Brand & Design — "warm editorial: paper, ink, copper"
- **Background:** `#faf7f1` paper (primary), `#f2ede3` alt sections, `#fffdf9` cards
- **Text:** `#23201b` ink (primary), `#6c6259` muted
- **Accent:** `#b5491c` copper (`#9a3d16` deep variant) — flux/solder metaphor
- **Dark band (CTA + footer):** bg `#23201b`, text `#f5f1e8`, muted `#a89e92`, accent `#e0793f`
- **Borders:** `rgba(35,32,27,0.13)` dividers, `rgba(35,32,27,0.18)` cards
- **Display:** Fraunces (headlines, italic emphasis, venture group labels)
- **Body/UI:** DM Sans (body copy, nav, section labels — small caps, no `//` prefix)
- **Mono:** JetBrains Mono (service/step numbers, service tags only — used sparingly)
- **Hero:** Left-aligned, subtle drafting-grid texture, single CTA link
- **Services:** Full-width numbered rows with border-top dividers — NO card grids
- **Ventures:** 2-column cards, grouped "Ventures I run" / "Sites I've shipped"
- **Anti-tropes (hard rules):** no gradients (decorative), no glassmorphism, no bento grids, no purple, no hero metric badges, no testimonial carousels

## Lessons Learned
- Cloudflare Pages must be connected to GitHub manually via dashboard — cannot be done retroactively via API/CLI after repo creation.
- OneDrive sync can touch files between Read and Write — re-read before rewriting if Write reports modification.
