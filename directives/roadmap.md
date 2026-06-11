# Applied Flux LLC — Roadmap

## Sprint 1 — Launch

- [x] Project initialization + folder structure
- [x] Git init (main + dev branches)
- [x] GitHub repo: rcadden/applied-flux
- [x] `index.html` — full single-page structure
- [x] `styles.css` — design system + all layout + responsive
- [x] Scroll animation JS (IntersectionObserver, inline)
- [x] Mobile responsive pass (640px + 900px breakpoints)
- [x] **Cloudflare Pages project connected to GitHub** (owner action)
- [x] **appliedflux.com domain connected** (owner action)
- [x] **hello@appliedflux.com routing configured via Cloudflare Email Routing** (owner action)
- [ ] Visual QA pass in browser — all sections, mobile + desktop
- [ ] Anti-trope checklist sign-off before launch

## Sprint 2 — Voice, Audience & Redesign

- [x] Copy rewrite: first person, named owner, no Balcom-adjacent work referenced
- [x] Redesign: warm editorial palette (paper/ink/copper), Fraunces display type
- [x] About section — Ricky bio, photo, rickycadden.com + LinkedIn links
- [x] `websites.html` — productized SMB offer ($2,500 build / $500-mo retainer)
- [x] Ventures split: "Ventures I run" vs. "Sites I've shipped"
- [x] "View Architecture" links relabeled "Visit Site"
- [x] Navio image hosted locally; headshot optimized
- [x] Favicon (SVG)
- [x] **Visual QA pass — both pages** (dev preview)
- [x] Owner review of all new copy (7 revisions applied)
- [x] Promote dev → main — **live in production 2026-06-11**

## Sprint 3 — Conversion & Discoverability

- [x] robots.txt + sitemap.xml + 404 page
- [x] JSON-LD structured data (ProfessionalService + Service) — GEO proof-of-craft
- [x] Contact form built — `functions/api/contact.js` (Resend API) + form on /websites
- [x] `og:image` (1200×630, copper headline) + Twitter card meta on both pages
- [ ] **SHELVED 2026-06-11:** contact form hidden (`hidden` attr on #contactForm). Resend free tier = one domain, currently thelede.info — sending from it is off-brand for Applied Flux (owner decision), and a second domain is $20/mo. Revisit when worth paying or when a better free transactional option appears. Backend (`functions/api/contact.js`) is done and dormant.

## Future Explorations

- Case study pages or a `/work` section with project deep-dives
- Blog or writing section (editorial, no CMS — static markdown)
- GEO optimization pass (AI-crawler-friendly content architecture, entity coverage)
