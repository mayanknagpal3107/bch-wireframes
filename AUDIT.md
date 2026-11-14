# BCH Wireframes — Site Audit

Audit date: 16 Aug 2026 · Scope: all 160 HTML pages (111 content pages, 49 redirect stubs), `chrome.js`, `feedback.js`, `styles.css`, section docs.

**Overall verdict:** the wireframe set is unusually disciplined — zero missing-file links site-wide, no lorem/TODO text, consistent titles, honest labeled placeholders, one `h1` per page, and good investor tables / search states / verify flow. What needs work falls into five buckets: (1) a systemic wrong-target link bug (`../index.html` → homepage instead of section hub, ~18 instances), (2) unreachable pages that exist but can't be found, (3) dead in-page anchors (27+ into Download Center), (4) cloned template content never differentiated, and (5) a handful of real functional bugs.

---

## P1 — Fix before the next stakeholder click-through

### 1. Systemic bug: "hub" links that go to the site homepage
`../index.html` from inside a section folder is the site root, not the section hub. The same copy-paste error appears in all three sections (~18 links):

- **Products** — `products/all.html:47` (breadcrumb "Products"), `:62`, `:460`, `:536`, `:600`; `products/selector.html:54`, `:105` → should be `index.html` (products hub)
- **Solutions** — `solutions/applications.html:95`; `solutions/partners.html:82` (panel-builder card — should target `custom-panels.html`); `solutions/custom-panels.html:89`, `:174`, `:201`, `:203` (crane tiles should be `#crane` on the same page)
- **Support** — `support/verify-product.html:141`, `support/faqs.html:97`, `support/report-counterfeit.html:129` ("Support →" buttons); `contact/index.html:15` and `:359` (utility-bar "Enquire" and footer "Contact / Enquire" point at the homepage from the contact page itself)

### 2. Four built starter PDPs are unreachable from the catalog
`products/all.html` routes Shakti, Submersible, Oil-immersed and ATS cards **and** their A–Z entries to `citation-fasd-dol.html` instead of their own pages (`all.html:100, 130, 140, 150, 641, 675, 690, 693`). ASAB/ASAC **soft starters** also land on the DOL page (`:503, 513, 639, 640`). `motor-starters.html`'s shelf omits ATS entirely, leaving `ats.html` reachable only via mega-menu and sitemap.

### 3. Dead anchors into Download Center (27+)
`support/download-center.html` has only two ids (`dl-search`, `folders`), but products/solutions pages link to `#starters`, `#motor-control`, `#enclosures`, `#power-control`, `#cables`, `#electronics`, `#solutions`, `#wires-cables` — 26 links from products (`products/index.html:133–259`, `all.html`, category pages, `combo-kits.html`) plus `solutions/index.html:112`. All silently land at the top. Also dead: `combo-kits.html:59` → `motor-starters.html#shakti` (no ids in that file), and `catalog-index.js:27/:31` sends part-search results to `#shakti`/`#asab` anchors that don't exist — so dealer-tools part search and site search land unhighlighted at page top.

### 4. Company hub and orphans
- The "Company" nav points at `about.html` everywhere (`chrome.js:679`, static navs); `company/index.html` is reachable only from the sitemap — a 12-tile hub nobody can reach. Point the nav at it or delete it.
- `company/vigil.html` — near-orphan (sitemap only; chrome.js `unlinkVigil()` even strips its links at runtime while the page stays live). Add it to the investor/governance chip-row or remove it.
- `company/engineering.html` has real content but is linked only from `support/dealer-tools.html`; it also overlaps `manufacturing.html`'s R&D story with no cross-link either way ("Manufacturing & R&D" vs "Engineering" vs `research.html` redirect — three names, one story).
- Two blog posts (`choosing-star-delta-starter.html`, `contactor-ratings-ac1-ac3-ac4.html`) exist and are cross-linked from other posts but are **missing from `blogs/index.html`**, undated, and use an older CTA style.

### 5. Legal content defects
- `legal/terms.html:57` — governing law is "**Netherlands**"; `:63` admits it "was created with the help of the TermsFeed Free Terms and Conditions Generator." Flag for counsel; fix governing law to India.
- `legal/data-privacy.html` is a mis-adapted **healthcare** policy — references patients, medical records, prescriptions (`:63`), cites the SPDI Rules as "2022" (they're 2011), and its H1 is "Privacy Policy," identical to `privacy.html`'s.
- Three overlapping privacy documents (`privacy.html`, `data-privacy.html`, `dpdp.html` — the DPDP page is the best) with two different grievance addresses. Consolidate or add a "which governs what" header on each.

### 6. Functional bugs
- **`solutions/custom-panels.html:178–195`** — the `data-panel="cases"` div is nested *inside* the `data-panel="support"` div, so the "Case studies" tab renders empty. Move the closing `</div>` above line 186.
- **Download Center search is invisible** — `download-center.html:272–285` hides non-matching rows but never opens the collapsed accordions containing matches, and the section-hiding selector (`section.section[id]`) matches nothing. Typing appears to do nothing; there's no zero-results message.
- **`support/verify-product.html:243`** — `if (!serial || !family) key = "notfound"`: a valid serial with no family selected shows "Not found," contradicting the hint at `:108`. Drop `|| !family` or mark family required.
- **`support/dealer-portal.html:60`** — "Thank you — we'll be in touch." is visible under the untouched login form (and is the wrong copy for a login).
- **`404.html`** is a previous IA generation: nav is Products/Solutions/Company/Resources with no Support and no search (`:16–21`), utility bar and footer are empty, and it's the only page using root-absolute paths (`/styles.css`) — it renders unstyled under file:// or a subpath.
- **Contact page double form** — `chrome.js` `injectInquiry()` skips only `support` and `find-dealer` pages; `contact/index.html` (`data-page="contact"`) has no `#bch-inquiry` of its own, so the generic enquiry band is injected under the page's own 379-line contact form. Add `contact` to the skip list.

---

## P2 — Structural improvements

### 7. Nav has two sources of truth
Static HTML navs carry **Products / Solutions / Support / Company / Contact** (5 items), but `chrome.js` wipes and rebuilds **Products / Solutions / Company / Resources** (4 items — Support demoted to the utility bar, Contact to the CTA button). `index.html` and `404.html` carry yet other static variants. With JS off, reviewers see a different IA than intended; with JS on, the HTML is dead weight. Pick one nav, and prefer letting the HTML carry it. The same applies to the footer, which chrome.js patches at runtime (adds Authenticity column, removes/rewrites Company links, strips vigil) — ~10 lines of JS repair per page load that should be one corrected footer include.

### 8. Cloned PDP content contradicts itself
The four starter PDPs (`shakti`, `submersible`, `oil-immersed`, `ats`) share identical spec tables, model rows, and Benefits/Applications blocks — ATS (a reduced-voltage auto-transformer starter) claims DOL HP/IP figures and "Irrigation / pump sets" as its lead application. Contradictions even within one page: `citation-fasd-dol.html:70` says "0.5–20 HP" while its own table (`:110`) says "3–20 HP typical"; `shakti.html:67` vs `:72` disagree the same way. `CATALOG-SPECS.md` §2.7 already holds differentiated per-family data — use it. Also add an "Also in Motor starters" sibling strip to the PDP template (`citation-fasd-dol.html:70` names the siblings without linking them), and per `PDP-VS-PANEL-IA.md` Template A item 7.

### 9. News archive isn't usable at 24 items
`company/news.html` is one flat grid: no pagination, year filter, or categories, and **20 of 24 items carry the same imported date "6 Nov 2020"** (e.g. "Krishithon Expo 2016" dated 2020). Three statutory PF-Trust notices sit among expo coverage — they belong under Public notices. `media.html` duplicates three news items as parallel pages with conflicting dates (Dehradun: "September 2016" vs "6 Nov 2020"); make Media a filtered view of one canonical archive.

### 10. Blog: 11 of 14 posts are shells with no signal
Only three posts are full articles (excellent template: quick answer, FAQ, product deep-links). The other 11 are 6-line shells, yet every index card says "Read article →" — 79% of clicks dead-end. Shells also get the injected article rail with an **empty TOC** and the fake "Explore with AI" loader, which reads as broken. Label shell cards, suppress the rail on shells, and add one product link + Enquire CTA per shell. Products never link back to blog posts — add a "Related reading" slot on family pages. The rail's "FlexiCity" and "IconetSector" buttons (`chrome.js:1557, 1559`) are unexplained dead `#` links — remove or annotate.

### 11. Support section overlap
- `support/resources.html` — semi-orphaned duplicate hub whose lead describes a nav that no longer exists (`:50`); duplicates Download Center and Company content. Retire or fold in — note the JS nav's "Resources" mega currently uses it as its hub target, so decide together with issue 7.
- `find-a-dealer.html` vs `sales-offices.html` — ~70% overlap (identical state/city widget, duplicated office list). Keep find-a-dealer as the buyer locator (widget + "All 24 offices →" link); move Dealer-meet videos (`:117–170`) to partners/dealer-tools.
- Support hub's 12 undifferentiated "Doors" bury the six core tasks — tier them; Product selector and Partners are cross-links, not support tasks.
- Complaint routing dead-ends: `customer-care.html:64` "Register a complaint →" goes to the contact form, which has no Complaint option (`contact/index.html:266–275`) — only the support form has one.

### 12. Category-page gaps (products)
- `motor-control.html` is the only major category with zero PDPs and **non-clickable** cards (plain `<div>`s at `:66–72`, vs `<a class="card">` on power-control/enclosures); it shows 7 cards where `all.html` promises 8 subcategories (foot switches, control & signalling, plug-in relays, e-Prox missing).
- "Automation & drives" and "Brakes, cables & resistors" are dead-end tabs on `all.html` (`:459–588`) — no category page, cards route into wrong families.
- Power-control and enclosures have no filter rail; an ACB/MCCB buyer expects an In/kA facet (motor-starters' shelf with its empty state at `:88` is the model).
- Shared PDPs absorb ranges silently: clicking "TCE" lands on a Bhartia-titled page (`enclosures/bhartia-2.html:65`); TemPower-2 lands on `ultra-power-acb.html`. Retitle as range/family pages with per-range anchors, or split.

### 13. Forms lack basic wireframe-grade validation cues
Contact, support, and report-counterfeit forms have no `required` marks, no `for`/`id` label pairing, no error states (`contact/index.html:224–281`, `support/index.html:93–118`, `report-counterfeit.html:82–110`). Verify-product and the dealer widget already show the right pattern — apply it site-wide.

---

## P3 — Consistency pass

- **Breadcrumbs** drift everywhere: five different parent labels in company/ alone ("About", "Company", "Investor relations", "Resources", absent); case studies live in `solutions/` but breadcrumb + nav file them under Resources (`solutions/case-studies.html:46`, `chrome.js:780`); `custom-panels.html:46` is the only dual-parent trail; hub pages (products, solutions, support, blogs, company, contact) mostly have none; support/ mixes present/absent. Standardize `Home / Section / Category / Page` and one parent per page.
- **Version banner**: "IA v3.1" on `products/all.html:10` and `support/download-center.html:10`; "IA v3" everywhere else.
- **CTA drift**: "Enquire →" vs "Contact us →" in identical template slots (`agriculture.html:66` vs `mining.html:66`); duplicate primaries (`oil-immersed.html:80–81`; four stacked buttons with two `btn-fill` on `selector.html:104–107`); counterfeit feature named four ways — pick "Report counterfeit".
- **Footer variants**: two footer-legal patterns coexist across support/ (compact+© vs extended 13-link without ©); footer link sets drift between products pages.
- **Utility bar**: contact page uses the homepage globe trigger; support pages use the lang-bar — one should win.
- **Hinglish register**: deliberate on agri shelf pages, but drafting notes leak into specifier-facing pages (`ultra-power-acb.html:125`, `bhartia-2.html:124`) and Brand & Media ("jo pack ready hai…", `brand-media.html:41, 86, 96` — where "Download when ready" buttons also mislead by linking to contact).
- **Small content bugs**: `agriculture.html:77` pump card → citation instead of `submersible.html`; `products/index.html:428` Mining → generic industries hub though `mining.html` exists; "(placeholder)" leaks in visible rows (`investor.html:76–77`, `public-notices.html:65`, `ultra-power-acb.html:144`); typo "Power Receptales" (`download-center.html:108`); Foot Switches row links the Limit-Switch PDF (`:116`); FAQs carry live-site typos ("Rudarpur", "complain registered"); App Store link uses the Mauritania storefront (`digital-ecosystem.html:68`) and the Play link is a search query; Patna listed twice on sales-offices (`:99`, `:105`); service-level claims conflict ("24/7" vs "response within 2 days"); phone formats unnormalized; leadership `h1` is the bare first name; About's Careers chip links to the live site instead of local `careers.html` (`about.html:61`); `company/index.html:31` uses `.grid-5` for 12 tiles → ragged 5/5/2; solutions hub Steel/Rail tiles should use existing `industries.html#steel/#rail` anchors; blog index static nav marks Company active while JS maps blog → Resources; search page breadcrumb claims "Support / Search".

---

## What's already good (keep)

- Zero broken file links across 160 pages; all legacy root URLs covered by redirect stubs.
- No lorem/TODO/TBD anywhere — placeholders are explicit and labeled.
- Search page result states (ranked hits with "why matched", part-code merge, empty state with suggestions).
- Verify-product flow implements all three result states with correct next actions.
- Investor document tables (realistic FYs, MGT types, EN/HI columns).
- The three full blog posts' product deep-linking pattern; `pump-set-field.html` case-study template.
- Find-a-dealer's honest state→city cascade with empty state; motor-starters shelf filter with empty state; oil-immersed docs empty state.
- Report-counterfeit's 4-step process track and verify↔report cross-links.
