# BCH Website IA v3 — World-class benchmark synthesis

Sources studied: Siemens SIRIUS (range + Industry Mall article pattern), Schneider Electric (se.com nav + TeSys pattern), C&S Electric (cselectric.co.in LV tree — homepage/product hierarchy; WAF blocks full JS), ABB/LK patterns (secondary). BrandClef audit + BCH crawl.

---

## 1. What maturity looks like (vs our v2 wireframes)

| World-class | Our v2 felt |
|-------------|-------------|
| Jobs-to-be-done first: **Select → Spec → Download → Buy/Enquire** | Pretty sections, thin utility |
| Sticky product tools (Select & order, Downloads, Contact) | Generic Enquire buried |
| Document taxonomy on every PDP (datasheet / catalogue / CAD / certs / manual) | One “datasheet” placeholder |
| Deep nav: Products › Family › Range › SKU | Flat cards |
| Download Center as first-class product | Downloads as footer afterthought |
| Specifier + dealer paths explicit | Brand story without workbench |
| Proof density (standards, ratings strip, accessories) | Sparse “calm” empty boxes |

---

## 2. Benchmark patterns

### Siemens (SIRIUS contactors range + Mall article)
- Breadcrumb: Products → SIRIUS → Contactors
- Range page: hero product family + **Select & order** + Contact
- Why / portfolio breakdown / key benefits / featured capabilities
- Article/SKU layer (Industry Mall): full tech data table, then **Catalogs · Service&Support (manuals, certificates) · Image/CAx (2D/3D/EPLAN) · CAx generator**
- Maturity cue: engineering workbench, not brochure

### Schneider Electric
- Global mega-nav: **Products · Software · Services · Solutions · Partners · Support · Company**
- Support cluster: Product Documentation & Software, Product Selector, Where to buy, Get a Quote
- PDP culture: documentation + software downloads as primary jobs

### C&S Electric (India peer)
- Products & Solutions tree: LV Switchgear → Circuit Breakers → ACB / MCCB → series page
- Series page: ratings/poles/features + long technical body (specs-forward)
- Hierarchy depth signals industrial seriousness (even if UX is dated)

### ABB / LK (brief)
- Product finder + download center + industries
- LK: segment tiles + ProServe + pump starters depth

---

## 3. Recommended global nav (BCH v3)

**Primary**
1. Products  
2. Solutions (Industries + Applications)  
3. Support (Download Center · FAQ · Customer Care · Sales offices)  
4. Company (About · Manufacturing · R&D · CSR · Leadership · Careers)  
5. Contact  

**Utility (always visible)**  
- Download Center  
- Find a dealer  
- Enquire / RFQ  

*(Engineering & Media fold under Company/Support/Products as tabs — not equal to Products.)*

---

## 4. Homepage section stack (order)

1. **Utility bar** — Download Center · Find dealer · Enquire  
2. **Mega-capable header** — Products (mega) · Solutions · Support · Company · Contact  
3. **Hero** — brand positioning line + dual CTA: *Explore products* / *Open Download Center* (not soft “legacy” only)  
4. **Customer jobs strip** — Specifier · Panel builder · Dealer · OEM/Farmer (4 doors)  
5. **Product families** — Starters · Motor control · Power control · Enclosures · Solutions (with “Browse + Downloads” on each)  
6. **Engineering proof** — standards, plants, R&D (compact, not essay)  
7. **Solutions by industry** — Agri · Steel · Rail · Mining · Crane…  
8. **Document & tools** — featured catalogues / price list / CAD coming  
9. **Trust** — heritage 1965 · network · certifications  
10. **News / insights** (1 row)  
11. **Footer** — full IA + legal  

---

## 5. Product DETAIL page stack (the maturity unlock)

**Above the fold**
- Breadcrumb: Products / Family / Range / Product  
- Title + short engineering line  
- Key ratings chips (e.g. A / kW / IP / poles / standard)  
- Primary visual + secondary thumbs (product · exploded · install)  
- **Sticky action rail:** Download datasheet · All documents · Enquire · Find dealer  

**Body (tabbed or anchored — wireframe both as tabs)**
1. Overview (benefits + applications)  
2. Specifications (full table)  
3. **Documents** — typed list: Datasheet · Catalogue · Manual · Certificate · Drawing/CAD · Presentation  
4. Accessories / related  
5. Support (FAQ, spare parts, contact expert)  

**Below**
- Related products  
- “Part of” family link  
- Compliance strip (IEC/IS)  

Use **4 templates only**: Starter · Power device (ACB) · Enclosure · Panel/solution — same chrome, different spec fields.

---

## 6. Document taxonomy (sitewide Download Center)

Folders matching real BCH crawl + peer expectation:
- Motor starters & pump starters  
- Motor control  
- Power control  
- Enclosures  
- Industrial solutions / panels  
- Electronics / automation  
- Wires & cables  
- Price lists  
- Product profiles / presentations  
- Certificates (when live)  
- Corporate / investor (separate, quieter)

Each asset row: **Type · Title · Language · Date · Download**

---

## 7. Sitemap v3 (wireframe pages to rebuild)

- Home (jobs + families + docs teaser)  
- Products hub + category examples  
- PDP ×4 templates with **Documents tab**  
- Solutions hub + Industries + Applications  
- **Download Center** (first-class)  
- Support hub · Customer care · FAQ · Sales offices  
- Company · Manufacturing · R&D · CSR · Leadership/About · Certificates  
- News · Blog · Media (video/exploded gallery)  
- Enquire · Find dealer · Careers  
- Inventory (internal)  

---

## 8. Design density note (for rebuild)

Keep B&W wireframe, but increase **information density** like Siemens/Schneider: tighter sections, sticky tools, tabbed PDP, document tables — not large empty gray slabs. Maturity = structure + tools, not more whitespace.

---

# ADDENDUM — Live-page verification (browserUse, Aug 2026)

Captured directly from live DOM/snapshots. Exact labels as rendered.

## A. Siemens

### siemens.com global homepage (redirects to /en-us/)
- **Utility bar:** region/language picker ("United States | EN"), "Support & community" (dropdown), cart icon, "Log in".
- **Main nav (5 items):** Products & services · Solutions · Industries · Partner ecosystem · Topics & insights — plus right-aligned **Search**.
- **Hero:** rotating 5-slide carousel with pause/prev/next + slide dots. Slide 1 is a *thesis/story* hero ("What if AI could do an engineer's most tedious work?") with two CTAs: primary "Start free trial", secondary "How AI transforms Engineering". Sells narrative + capability, not SKUs.
- **Section order below fold:**
  1. Hero carousel (brand/tech narrative)
  2. **"Upgrade reality"** — tabbed theme switcher (tabs: Artificial intelligence / Digital twin / Digital transformation / Infrastructure / Software-defined automation / Sustainability)
  3. 3-card content row, each card **eyebrow-labelled by content type**: `CUSTOMER STORY` · `E-BOOK` (→ "Download the e-book") · `PRODUCT SPOTLIGHT`
  4. Themed capability promo ("Unlock smarter solutions with our AI offerings" → Discover more)
  5. **"Discover products and services"** → CTA "Go to marketplace" + grid of ~9 named offerings each with "Learn more"
  6. **"A network of problem solvers"** — partner ecosystem grid (9 partners) → "Explore the ecosystem"
  7. **"News and breakthroughs"** — 3 press items, eyebrow-tagged by topic (INDUSTRIAL AI / SIGNALLING / SMART GRIDS)
  8. Company row, 4 cards: ABOUT US · INSIGHTS · CAREERS · HISTORY
  9. Footer
- **Maturity cues:** corporate site is thin on product; **product/commerce lives in a separate portal (SiePortal)**. Downloads/support are portal-side, not homepage-side. Cart on a corporate domain = transactional intent.

### Siemens PDP — SiePortal, SIRIUS 3RT contactor `3RT2015-1BB41`
(mall.industry.siemens.com/… redirects → `sieportal.siemens.com/en-ww/products-services/detail/3RT2015-1BB41`)
- Portal nav: Home · Products & Services · Support · mySiePortal (+ search, cart, region, Login, "Need help?")
- **Exact block order:**
  1. Breadcrumb, full catalog tree: Home > Products & Services > … > Power contactors for switching motors > SIRIUS 3RT contactors, 3-pole, up to 250 kW > 3RT2015-1BB41
  2. **H1 = MLFB/order number** ("3RT2015-1BB41"); subtitle = terse spec string ("CONTACTOR,AC3:3KW 1NO DC24V"); right: Print + Share icons
  3. **Sticky in-page tab bar (5):** Overview · Specifications · Related products & services · Documents & downloads · Support (duplicated as a sticky condensed header on scroll with product id/name)
  4. Overview: image gallery w/ thumbnails (photo, dim drawing, cULus mark, schematic) + link **"Download product images and data for M-CAD and E-CAD (7)"** directly under gallery
  5. Middle column: long-form description + key attribute pairs — **Product lifecycle** ("Active Product" w/ info tooltip), **Product class**, Packaging dimensions, Net weight; links "Download product data sheet" (PDF endpoint), "See related products"
  6. Right rail buy box: "Login to buy", qty stepper, **Add to Cart**
  7. **Specifications** (full table section)
  8. **Related products & Services**
  9. **Documents & Downloads** — see below
  10. **Support** — "Create a request" with two cards: **Support Request** / **Field Service Request**; "Contact a product specialist" (Contact a Siemens specialist); **"Find a Siemens trusted partner"** → partner finder; "Get in Touch" → Find your Contact; "Join the community" social
  11. Footer
- **Documents & Downloads is a mini search app, not an accordion:**
  - Heading "Documents & Downloads" → "Browse all"
  - **Two sub-tabs: Knowledge base entries | Engineering files**
  - Controls: keyword filter box + **Type** facet + **Date** facet; result count ("139 documents for 3RT2015-1BB41"); Select all checkboxes (multi-select → bulk download); **Sort by Date (latest first)**; pagination (14 pages, items-per-page 10)
  - Each row: UPDATED badge, asset kind ("Download"), date, document ID, **star rating + review count**, title, one-line description, ⋮ row menu
  - Real asset types observed: catalog (**"Catalog IC 10 • 2026 – SIRIUS Industrial Controls"** w/ order code), certificates (**CCC/CQC**, **cURus/UL**, **BIS / Electrical Equipment Quality Control Order Scheme-X**), transport/dangerous-goods info, functional-safety data (**B10/B10d values, failure rates**), product-family document hub entry, and a **software tool** (SIMARIS therm — power-loss calc)
  - Bottom cross-link card: "Looking for Engineering files? Browse all available technical documentation" → **See all files**
- **Above the fold:** order number, spec string, image, tab bar, buy box, datasheet link. **Deep:** full specs, 139 docs, support requests.

## B. Schneider Electric — se.com/in (TeSys D contactor `LC1D09M7`)
- **Utility bar:** country (India) · **Our Brands** · Access Our Online Store · **My Documents** (personal doc basket) · Login/Register · favourites star.
- **Main nav (7):** Products · Software · Services · Solutions · Homeowner · Support · Company. Persistent full-width search ("What are you looking for?").
- **PDP block order:**
  1. Breadcrumb (Home > All products > Industrial Automation and Control > Contactors and Protection Relays > Contactors and Reversing Contactors > TeSys Deca Advanced > LC1D09M7) + back link "View all TeSys Deca Advanced"
  2. Left: image w/ zoom ("Roll over image to zoom in"), +2 more images, **"1 videos"**
  3. Right: H1 marketing-spec title + commercial ref as H2; **"Add to My Products"** + **Compare** checkbox
  4. **Inline variant selectors as chip rows** — "Maximum motor phase current:" (9/12/18/25/32/38/80/95 A, each linking to that SKU's PDP) and "[Uc] control circuit voltage:" → acts as an on-page configurator across the family
  5. **Benefit bullets** (tick icons: modern look, easier install, IEC 60335-1 fire resistance certificate, IEC/EN/UL 60335-2-40 Annex JJ, "Digital customer experience for technical documents")
  6. **Environmental Data** block — Total lifecycle carbon footprint (22 kg CO2 eq.), "Use Better" (recycled packaging), "Use Again" (recyclability 66%), Take-back — with info tooltips
  7. **Main documents** — flat, above-fold-ish quick list: **Product datasheet**, **Instruction sheet**, **Catalog**, **CAD**, **Environmental Disclosure**, then **"See all documents"** (→ full Products Documentation search)
  8. **"This product is compatible with"** — 4 counted, expandable groups: **Accessories (8) · Add-ons (7) · Auxiliaries (19) · Spare parts (1)**
  9. Description / Specifications / Dimensions & Drawings / Connections and Schemes / Documents (full filtered list w/ facets) / "Items usually bought together" — per full-page render
  10. Email opt-in strip, footer
- **Footer = the B2B tool rack:** Products Documentation · Software Downloads · **Product Selector** · **Product Substitution and Replacement** · Help and Contact Centre · **Where to buy** · **Get a Quote** · Find our Offices · Community · **Price List** · phone number.
- Persistent live-chat bubble + Feedback tab.

## C. C&S Electric — cselectric.co.in (NOT blocked; loads fine)
- **Utility bar:** News & Media · Download Center · Certifications · Contact Us · Investors Relations · search; **Hindi** toggle; hamburger.
- **Main nav (5, hamburger-revealed):** HOME · ABOUT US · PRODUCTS & SOLUTIONS · MARKET SEGMENTS · BLOG. No mega-menu, no product search, no where-to-buy.
- **Hero:** 6-slide banner carousel of *product-family/program* posters (e.g. "CX Partner Program — An IEC 61439 Type Tested LV Assemblies" with compliance bullets; "Smart Electrical Solutions for Happy Homes" with MCB|RCCB|Isolators|DB|Modular Switches|Motor Starters). Sells families + standards compliance.
- **Section order:** 1) hero carousel → 2) tagline band "We touch your electricity everyday! / Power Generation | Transmission & Distribution | Protection & Control | Final Consumption" → 3) **6 product-category tiles** (Low Voltage Products & Solutions · Final Distribution Products · Low Voltage Switchboards · LV & MV Busducts · Low Voltage Bustrunking · Protection & Measurement Devices) → 4) **MARKET SEGMENTS** grid (Infrastructure, Residential, Commercial, Agriculture, Power Generation, Distribution & Transmission, Industries, OEMs) → 5) NEWS / BLOGS tabbed CSR-heavy feed → 6) footer with **QUICK ACCESS** (News & Media, Download Center, Certifications, Contact Us) + full product/segment/company link columns.
- **No true PDP.** `/product-category/...` 301s to a WordPress **"Project"** post (`/project/low-voltage-products-solutions/`) — breadcrumb "Home / Project / …", one image, `Category: Featured Products · By · March 9, 2016 · Leave a comment`. i.e. blog-post chrome, no specs table, no per-SKU docs, no related products. `/download-center/` 301s to homepage; documents are centralised, not product-attached.
- **Takeaway: this is the bar BCH must clear, and it is low.** Their advantage is only nav simplicity + Certifications/Download Center being top-level.

## D. ABB — new.abb.com PDP (`AF12-30-10-13`, 1SBL157001R1310)
- **Main nav (7):** Products & Solutions · Industries · Services · About us · Where to buy · Contact us · Careers + search + cart + region. Mega-menu is deep and taxonomy-first (Low Voltage Products and Systems, Motor Starting and Protection, Motor Control Centers, Smart Switchgear, Arc Flash Protection and Mitigation, …).
- **PDP order:** language selector → H1 = **Extended Product Type** ("AF12-30-10-13") → green **Buy now** → **"General Information"** spec table starting with Extended Product Type / Product ID / **EAN** / Catalog Description → then anchor-linked right-rail/section set in this order: **Data Sheet · Downloads · Buy now · Categories · Related Links · Related Products** → **"Contact us — Submit your inquiry and we will contact you"** (+ ABB Contact Center) → footer.
- Pattern: pure engineering-data page. Order code is the identity; Data Sheet and Downloads are top-level anchors; no marketing hero, no video, no configurator on the SKU page. "Print to PDF" of the whole page is offered.

## E. Lauritz Knudsen (lk-ea.com)
- Sparse top bar; **right-edge floating action rail: Enquiry · Feedback/contact · Smartshop (cart)** — always-on conversion rail.
- Homepage stack: 1) hero carousel (offer-led: "Discover Our All-New Price List → **Download Pricelist**", solar, WhatsApp community) → 2) brand video/campaign band "Powering a Non-Stop India" with **Enquire Now / Watch Now** → 3) **Who we are** (legacy 70 yrs, 2.1M sq ft manufacturing) with sub-tabs Facilities / STC / About Us → 4) **Highlights = network proof counters** (Channel Partners, Approved Service Partners, Field Service Engineers, Branch Offices, Training Centers) → 5) **Our Products** — 7 tiles incl. LV IEC Panels, Power Distribution, Final Distribution, Home & Distributions, EV Charging, **Pump Starter & Controllers** → 6) **Our Services (ProServe)** w/ 100+ service centres, 30+ branch offices → 7) **Smartshop** e-commerce promos (up to 40% off, bulk discounts) → 8) blogs/footer.
- Cues: price list as a lead magnet, service-network-as-proof, own D2C shop, Enquiry always one click away. Directly relevant to BCH's starter/pump dealer audience.

## F. Cross-site facts worth copying (verified, not inferred)
1. **Order code is the H1** on Siemens and ABB; Schneider uses marketing title + ref underneath. BCH PDPs must show catalogue/order number as first-class identity.
2. **Two-layer document UX:** a short "Main documents" quick list near the top (Schneider: datasheet, instruction sheet, catalog, CAD, environmental) **plus** a deep, faceted document library lower (Siemens: 139 docs, Type + Date facets, keyword, sort, multi-select, pagination, per-doc IDs and dates).
3. **Certificates are a document type, not a page:** CCC/CQC, cURus/UL, **BIS / EEQCO Scheme-X** appear as per-SKU downloads at Siemens — a BIS-heavy Indian brand like BCH should attach certificates per SKU, not only to a global /certificates page.
4. **Functional-safety / reliability data** (B10, B10d, failure rates) is a distinct asset class for contactors/starters.
5. **Lifecycle status** ("Active Product", product class) is displayed above the fold — specifiers need obsolescence signals; pair with a **Substitution/Replacement** tool (Schneider footer).
6. **Variant chips** (current rating / coil voltage) that link sibling SKUs is the cheapest credible "configurator".
7. **Compatibility groups with counts** — Accessories / Add-ons / Auxiliaries / Spare parts — is the panel-builder's job-to-be-done.
8. **Personal document basket**: Schneider "My Documents" + "Add to My Products"; Siemens multi-select bulk download. Engineers collect docs across SKUs.
9. **CAD/BIM is a named, separate asset** (Siemens: "product images and data for M-CAD and E-CAD (7)"; Schneider: CAD).
10. **Support is a routed action, not an email link:** Support Request vs Field Service Request vs Contact a specialist vs Find a partner (Siemens); Where to buy / Get a Quote / Price List (Schneider, LK).
11. **Environmental/ESG data on the PDP** (carbon footprint, recyclability, take-back) is now table stakes at Schneider.
12. **Software tools surface inside product docs** (SIMARIS therm on a contactor page) — BCH equivalents: starter selector, cable/short-circuit calc, panel form-factor guide.

## G. Gap check vs. the current BCH wireframes in this folder
Current set has `product-detail-*.html`, `downloads.html`, `certificates.html`, `find-dealer.html`. Against the bar above, missing/weak:
- Order/catalogue number not treated as PDP H1 identity; no lifecycle-status field.
- No sticky in-page PDP tab bar (Overview / Specifications / Documents & downloads / Related / Support).
- Documents modelled as one global `downloads.html` page → needs **per-SKU document library with Type + Date facets, keyword, doc IDs, dates, multi-select bulk download**, plus a top "Main documents" 5-link quick list.
- No CAD/M-CAD/E-CAD asset type; no certificates (BIS/CE/ISI) attached per SKU; no functional-safety/B10 data class.
- No compatibility block with counts (Accessories / Auxiliaries / Add-ons / Spare parts).
- No variant chip row linking sibling ratings/coil voltages.
- No routed support: Support Request vs Field Service Request vs Find a dealer vs Get a Quote / Price List download.
- No "My Documents"/saved-products basket; no Compare.
- No product selector/calculator tools; no substitution-and-replacement tool.
- No dimensional drawing / connection-scheme sections as named blocks.
- Homepage lacks content-type eyebrows (CUSTOMER STORY / CATALOGUE / TOOL) and a network-proof counter band (LK/C&S both lean on this in India).

## H. Screenshots
No new files written; live-page evidence captured as DOM text above. Existing wireframe screenshots remain in `/workspace/bch-wireframes/shots/` (home.png, product-detail-acb.png, product-detail-starter.png, downloads.png, etc.).
