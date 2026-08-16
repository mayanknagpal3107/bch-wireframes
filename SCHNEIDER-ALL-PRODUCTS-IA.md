# Schneider Electric India — "All Products" — IA Spec (for BCH wireframe clone)
Source: https://www.se.com/in/en/all-products/?businessId=3#/3  (captured Aug 2026)
Wireframe = B/W structural clone. No prices anywhere on this page (none exist on source).

## 1. Page title / H1
- Document title: "All Products | Schneider Electric India"
- On-page H1: **"All products"** (visually small/near-hidden; the visually dominant heading is the active business-line section title, e.g. "Critical Power, Cooling and Racks" with a › arrow, which is a link to that business hub).

## 2. Organizing model (what it actually is)
NOT a faceted product grid. It is a **business-line tab switcher + per-line two-column layout**:
1. **Breadcrumb** (Home › All products)
2. **Business-line tab strip** (horizontal row of 8 icon+label tabs, one per business line; active tab has underline/accent). URL state = `?businessId=N#/N`.
3. **Active section** for the selected tab:
   - Section title link ("Critical Power, Cooling and Racks ›")
   - **Left column: category list** (vertical link list, each row with a right chevron — flat list, not an accordion, not A–Z)
   - **Right column: "top runners" card grid** (product-family cards, 3 per row)
4. Non-selected business lines exist in DOM but hidden (tab-panel pattern).
5. On some business tabs, the grid area additionally contains **action blocks / utility tiles** instead of a card: "Products from A to Z → View Product List", "Product Selector list", "Browse Products by Master Range → View Master Ranges", "Looking for product documents or software? → Go to Download Center".
6. **"Need help?" section** below: 4 tiles (Product Selector / Get a Quote / Where to buy? / Help Centre) — icon + title + one-line desc.
7. Newsletter signup band (Email + "I am a" select + Subscribe) then large footer link columns.

## 3. Business-line tabs (the only top-level "filter")
Low Voltage Products and Systems · Building Automation and Control · Medium Voltage Distribution and Grid Automation · Critical Power, Cooling and Racks · Residential and Small Business · Industrial Automation and Control · Access to Energy · Solar and Energy Storage

## 4. Filter facets
**There are no filter facets on this page.** No voltage/application/brand checkboxes, no chips, no sliders, no "clear all". Narrowing happens only by (a) business-line tab, then (b) clicking a category in the left list, which navigates to a category/range page. Faceted filtering lives one level deeper (product-range/category pages).
Wireframe filter model recommendation: represent as **Tab strip (single-select, 8 items)** + **Category rail (single-select navigation list)**. If BCH wants facets, show them as an optional left rail placeholder labelled "Filters (deeper level)".

## 5. Card anatomy (product-family / "top runner" card)
- Container: bordered white card, tall portrait ratio, entire card is one `<a>` to `/product-range/<id>-<slug>/`
- Top: **title** (family/range name, brand word in bold, e.g. "APC **Back-UPS Pro**", "Galaxy VS", "Smart-UPS | Online UPS")
- Optional **label/eyebrow slot** (present in markup, empty on this page)
- Optional **short description slot** (present, truncated with ellipsis component; empty on this page)
- Bottom: **product image** (lazy-loaded, transparent-bg product shot), sometimes a small **brand logo** (e.g. APC) beneath
- **No "view products" count, no badges, no price, no CTA button** — the card itself is the link
- Category rail row anatomy: text label + right chevron only.

## 6. Search bar on the page?
No in-page catalog search. Only the **global header search** ("What you are looking for?" with magnifier). Header also: country selector (India), Our Brands, Access Our Online Store, My Documents, Login/Register, favourites star, nav (Products / Software / Services / Solutions / Homeowner + carousel arrows) and green "For Consumer" button.

## 7. Counts / pagination / sort / view toggle / sticky
- No result count, **no pagination**, no load-more, **no sort**, **no grid/list toggle**.
- Grid size per tab: ~9 family cards (3×3) + 10–14 categories in the left rail (Critical Power tab: 10 categories, 9 cards).
- Sticky: sticky/overlaying **header** on scroll; **floating chat bubble** (bottom-right, green) and **accessibility widget** (bottom-left) persist. Tab strip and rail are not sticky.

## 8. Top of page
- Breadcrumb: Home › All products. No hero image, **no intro/marketing copy paragraph** — breadcrumb goes almost straight into the tab strip.

## 9. Wireframe section order (B/W)
1 Header bar (utility row + logo + search + account + nav)
2 Breadcrumb
3 H1 "All products" (small)
4 Business-line tab strip (8 tiles: icon box + 2-line label; active = underline)
5 Section title + › link
6 Two-column body: [category rail 25%] [card grid 75%, 3-up]
7 Utility action tiles (A–Z, Master Range, Download Center, Product Selector)
8 "Need help?" 2×2 tiles
9 Newsletter band
10 Footer link columns + legal row
