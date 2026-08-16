# Liberate Global — Mega-nav + footer inquiry form IA
Source: https://www.liberateglobal.com/ (captured 15 Aug 2026). Structure only, no colors.
Screenshots in this folder: `liberate-nav-products.png`, `liberate-nav-solutions.png`, `liberate-nav-about.png`, `liberate-nav-industries.png`, `liberate-footer-form.png`.

## 0. Top-level nav
Sticky header, 3 zones: logo (left) · link row (center) · search icon + language dropdown + red pill CTA "Talk to Us →" (right). Above it a dismissible red announcement strip: "Upcoming Webinar: Inside Agentic AI for L&D | Thursday, Sept 3 | 11 AM | Register Now" with an × close.

Top-level items (all chevron-down, all open mega panels):
`Solutions` · `Who We Are` · `Industries` · `Our Work` · `Resources`

> There is **no "Products" or "About" item**. The product-equivalent menu is **Solutions**; the company-equivalent menu is **Who We Are**. `liberate-nav-products.png` therefore intentionally shows the same Solutions panel as the product analogue (same DOM: `.nav_open-menu-items.is-solutions`); `liberate-nav-about.png` shows Who We Are.

Mechanics (from DOM): a single shared overlay `.nav_open-menu-wrap` holds one panel per menu (`.nav_open-menu-items.is-solutions / .is-wwa / .is-indus / .is-work / .is-res / .is-search`). Panels are **full-bleed width** (they span the viewport, content constrained by `padding-global`), drop below the bar, and dim the page behind with `.nav_open-menu-bg` + a click-to-close layer. Toggles are `.nav-dd_toggle` with a chevron embed.

## 1. SOLUTIONS mega-panel — 2-pane, L1 rail + L2 list (+ promo)
Layout: **left vertical tab rail (L1) → middle L2 link list → right promo card**. Full-width dropdown; L2 list wraps into 2–3 text columns for long tabs (`.nav_dd-btn-wrap.is-3c`).

L1 tabs (`.nav_solutions-tabs_menu`, each with trailing chevron, hover/click swaps the L2 pane):
1. Managed Learning Services
2. Strategy & Advisory Solutions
3. AI-Powered Learning
4. Learning Technology Solutions
5. Custom eLearning
6. Workforce Training Areas
7. Learning Delivery Solutions
8. Immersive Learning (AR/VR)
9. Accessibility & Enablement

L2 items per tab (each is a text link with a right-chevron on hover; **no per-item icons in Solutions**), every pane ends with a "Know more" link to the L1 landing page:
- **Managed Learning Services:** Learning Strategy & Consulting · Learning Operations · Staff Augmentation · Learning Delivery & Facilitation · Learning Technology & Platform Support · Learning Analytics & Measurement · *Know more*
- **Strategy & Advisory Solutions:** Learning Strategy Development · Capability Frameworks & Journey Mapping · Learning Solution Architecture · Strategic L&D Advisory · Measurement & Analytics · *Know more*
- **AI-Powered Learning:** Learning Content Generation · AI Roleplays · Predictive Analytics for L&D · AI-Powered Insights & Dashboards · *Know more*
- **Learning Technology Solutions:** LMS & LXP Management · Learning Portals & Platforms · Quizbiz · CyberTest · XR Optimus · LearNow · Content Hosting & Curation · eLearning Authoring Tools Expertise · *Know more*
- **Custom eLearning:** Scenario-Based Learning · Gamification · Microlearning & Mobile Learning · Video-Based Learning · Story-Based Learning · Rapid eLearning · Personalized Learning · Simulations · Continuous Learning · Informal Learning · Social Learning · Self-Directed Learning · *Know more*
- **Workforce Training Areas:** Compliance Training · Leadership Training · Sales Training · Product Training · Induction & Onboarding · DEI Training · Soft Skills Training · Business Sustainability Training · *Know more*
- **Learning Delivery Solutions:** Virtual Instructor-Led Training (VILT) · Blended Learning Programs · In-Person ILT Delivery · *Know more*
- **Immersive Learning (AR/VR):** AR/MR Learning · VR Learning · Virtual Tours · Learning Metaverse · Immersive Experience Centers · *Know more*
- **Accessibility & Enablement:** Accessibility & Inclusive Design · Translation & Localization · Performance Support Tools · Certification Program · *Know more*

## 2. WHO WE ARE (= About/Company) — simple 1-column + promo
Full-width panel but sparse: one column of **icon links** (`.nav_dd-icon-link` = small square glyph tile `.nav_dd-wwa-link-icon` + label `.nav_dd-wwa-link-text`) plus the promo card on the right. This is the **only menu with per-item icons**.
Items: About Liberate · Our Story · Our Leadership · Corporate Social Responsibility (CSR)
Promo: eyebrow label "Case Study" + landscape image card + title "Transforming Onboarding: Equipping Supply Chain Frontline Employees for Success at a Global Food, Snack, and Beverage Leader" + circular arrow button.

## 3. INDUSTRIES — multi-column flat list + promo
Flat L1 list (`.nav_inds-links`) rendered in **2–3 columns**, no icons, plus "Know more" and the same promo slot.
Items: Aviation · BFSI · Education · Government & Public Sector · Manufacturing & Logistics · Pharma & Healthcare · Energy & Utilities · Retail & Consumer Goods · Technology & Services · *Know more*
Promo: "Case Study" → "Case Study: Coles: Learning Bites".

## 4. OUR WORK / RESOURCES (same pattern, for reference)
- **Our Work:** Case Studies · Demos · Customer Testimonials · Awards & Recognition — promo: "Case Study: ACU: Five2Study Website Development".
- **Resources:** Blogs · eBooks · Webinars & Podcasts · Glossary · *View all* — promo: "Case Study: ACU: Gateway to ACU".

## 5. Promotion panel (shared module)
Every mega panel ends with the same right-hand promo card (`.nav_dd-cs-item`): image thumb (~140px wide) with gradient/pattern hover overlay, small eyebrow "Case Study", 2–3 line title, and a circular arrow affordance. Solutions panel shows up to 2 of these side by side. It is a **featured case study**, not a featured product, and there is no separate CTA button inside the panel (the nav-level CTA "Talk to Us →" carries that job).

## 6. Footer inquiry form — verbatim
Appears at the bottom of the homepage **and repeats on inner pages** (verified on /solutions/managed-learning-services — identical labels). Layout: left half = tall lifestyle image, right half = form, 2 fields per row.

- Heading: **Let's Explore How We Can Help**
- Helper text under heading: *Tell us about your learning needs and we'll get in touch.*
- Row 1: `First name *` | `Last name *`
- Row 2: `Mobile` (country-code flag selector, defaults +91) | `Business email *`
- Row 3: `Company name *` | `Role *`
- Row 4: `Country *` (flag select, defaults India) | `How did you hear about us? *` — select, placeholder "Select an option"; options: Google / Search engine · LinkedIn · Referral · Event / Webinar · Email · eBook / Content download · Industry website / Listing · Advertisement · Word of Mouth · Other
- Row 5 (full width): `What are you looking for *` — select, placeholder "Select an option"; options: Managed Learning Services · Strategy, Advisory & Consulting · Custom eLearning Development · Immersive (AR/VR) Learning · Learning Technology (AI/LMS/LXP) Solutions · Learning Delivery Solutions · Other (Please describe below)
- `Description` — textarea
- Attachment control: circular ⊕ icon + **Add attachment** with helper line **PDF, DOC, PPT • Max 10 MB**
- Button: **Submit →**
- Below in footer bar: "© 2026 Liberate Global. All rights reserved." · Privacy Policy · Disclaimer · Statutory Disclosures · YouTube + LinkedIn icons.
- Secondary form elsewhere on page (ebook gate, not the footer form): heading **L&D Trends 2026**, fields First name * / Last name * / Business email * / Organisation * / Role *, button Submit.

## 7. Patterns worth porting to BCH Electric wireframes
- One shared full-bleed overlay panel per top-level item + page dimmer; chevron toggles.
- Products-style menu = **vertical L1 tab rail + multi-column L2 list + "Know more"** (maps well to product families → sub-ranges).
- Icons only on the company menu; product/industry lists stay text-only.
- Every panel reserves a right-hand featured-story promo slot.
- Persistent site-wide footer inquiry form with 2-up fields, two dropdowns, description, attachment with format/size helper, single Submit.
- Nav-level CTA pill kept separate from the mega panels (BCH equivalent: logo **BCH Electric** + tagline **har haal mein**, no exact ratings in any nav label — use ranges only).
