# Applied Flux Site — Improvement Plan

_Status: Draft for review — not approved for execution._
_Date: 2026-06-11_

## Diagnosis (summary)

1. **Audience mismatch.** The site speaks exclusively to Director/VP/C-Suite buyers, but the highest-volume near-term business is SMB service-business websites. A locksmith landing on "boutique technical consulting firm" with `// SECTION` markers bounces immediately.
2. **The copy is stiff because it's anonymous and abstract.** "We" voice for a one-person LLC, noun-stack jargon ("high-fidelity, edge-hosted digital assets," "programmatic logic," "absolute efficiency"). It reads like consultant-speak — which is exactly the AI-generated tell the project goals say to avoid.
3. **Zero proof.** No name, no face, no numbers, no case studies. Senior skeptics hire people, not LLCs.
4. **Critical risk:** the only CTA is `mailto:hello@appliedflux.com` and email routing is still unconfigured per the roadmap. The site may be live with a dead contact path.
5. **Integrity drift:** project_goals.md promises "zero tracking scripts, zero cookies" but GTM is now installed. "View Architecture →" links go to product homepages, not architecture write-ups. Navio's card image hotlinks from rickycadden.com.

## Phase 0 — Stop the bleeding (before anything else)

- [ ] Configure Cloudflare Email Routing for hello@appliedflux.com and send a test email (owner action)
- [ ] Change "View Architecture →" to "Visit Site →" until write-ups exist
- [ ] Host the Navio card image locally (`images/navio.png`)
- [ ] Decide: keep GTM (update project_goals.md to drop the zero-tracking claim) or swap to Cloudflare Web Analytics (cookieless, keeps the promise)

## Phase 1 — Voice & copy rewrite

Goal: sound like Ricky, not a firm. First person ("I"), concrete, dry.

- [ ] Rewrite hero. Drop "boutique technical consulting firm." Candidate direction: lead with what gets built, not what agencies failed at. (The current headline also assumes agency trauma — and Ricky works at an agency; mild optics issue.)
- [ ] Add an **About / "Who's behind this"** section: Ricky's name, photo, one-paragraph background (enterprise brands, quantified results — borrow from rickycadden.com), links to rickycadden.com + LinkedIn
- [ ] Rewrite all four service descriptions: each should contain at least one concrete, real example of work done (e.g., the 50-node n8n keyword-research workflow, the SEO/GEO/reputation engagement) instead of capability taxonomy
- [ ] Name the "one obsession" or cut the line
- [ ] Ventures section: clarify ownership. If Tarrant Media / The Interruption are client builds, relabel the section — "Sites we've shipped" as client proof is *stronger* for the SMB offer than implying ownership

## Phase 2 — Structure for the real business

- [ ] New page: `/websites` — the productized SMB offer. Plain language, no dark-techno aesthetic required to match homepage exactly. Contents: what you get (5–7 pages, contact form, hosting/SSL/maintenance handled), flat pricing or "from $X," 2–3 example sites, simple form or phone-friendly CTA. This page is what you send to a locksmith.
- [ ] Homepage gets a short plain-English bridge section linking to `/websites` ("Run a service business and just need a website that works? →")
- [ ] Reframe service #3 (Managed Digital Presence) in plain terms; it currently buries the SMB offer in jargon
- [ ] Contact form (Cloudflare Pages Functions + email) — mailto-only loses SMB owners

## Phase 3 — Technical & SEO/GEO hygiene

- [ ] Favicon + og:image
- [ ] Canonical URL, robots.txt, sitemap.xml, 404 page
- [ ] JSON-LD structured data (Organization / ProfessionalService) — the site sells GEO; it should demonstrate it
- [ ] Lighthouse / Core Web Vitals pass against the stated metrics

## Open questions for Ricky

1. Pricing model for the SMB website offer — flat build + monthly managed fee? Publish it or "from $X"?
2. Are Tarrant Media and The Interruption client work, family, or owned ventures? Determines how the section is labeled.
3. Keep GTM or go cookieless?
4. Comfort level putting your name/face on the site given the Balcom day job?
