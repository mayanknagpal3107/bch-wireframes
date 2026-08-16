# BCH Electric (bchindia.com) — Current Site Inventory

**Purpose:** Complete factual inventory for website rebuild / wireframe IA mapping.  
**Sources:** `sitemap.xml` (427 locs), WordPress sitemaps, homepage nav scrape, `/downloads/*` HTML PDF extraction, WP REST (`pages`, `blogs`, `news_and_events`).  
**Inventoried:** 13 Aug 2026 (IST).  
**Do not invent pages** — absences are marked explicitly.

## Counts (quick)

| Metric | Count |
|--------|------:|
| Sitemap locs (sf) | 427 |
| Inventory page rows (deduped content URLs) | 469 |
| Product URLs | 224 |
| Product categories (taxonomy) | 32 |
| Download hub/folder pages | 15 |
| File links found (PDF/PPT/etc., incl. investor PDFs) | 106 |
| Blog posts (API+sitemap) | 120 |
| News & events posts (API) | 24 |
| Industries (detail) | 4 |
| Applications (detail) | 4 |

## 1. Nav structure (primary + footer)

### Primary / header (from homepage menu-item scrape)

**Utility / top**
- Contact → `/contact/`
- Customer Care → `/customer-care/`
- Downloads → `/download/`
- News & Events → `/news-events/`
- Blog → `/blog/`
- Careers → `https://careers.bchindia.com/` ⚠️ **DEAD / unreachable**

**Main**
- Home → `/`
- Products & Solutions → `/products-and-solutions/`
  - Motor Starters & Submersible Pump Starters → `/product-category/pump-controller/`
  - Industrial Products → `/product-category/industrial-products/`
  - Enclosure → `/product-category/enclosure/`
  - Industrial Solutions → `/product-category/industrial-solutions/`
- Industries → `/industries/`
  - Agriculture · Railways · Mining · Steel
- Applications → `/applications/`
  - Power Control & Protection · Motor Control & Protection · Detection & Sensing · Heavy Machinery Control
- Company → `/company/`
  - Board of Directors · Manufacturing · R&D and Quality Assurance · Sales and Distribution · Vigil Mechanism
- Contact → `/contact/`
  - Enquiry · Customer Care · News & Events · Blog · Sales Offices · Downloads

**Also linked in menus (footer-ish / secondary blocks — no `<footer>` landmark in HTML)**
- Products & Solutions, Industries, Applications, Company
- Industrial Products, Motor Starter, Enclosure, Industrial Solutions
- Power/Motor Control, Detection & Sensing, Heavy Machinery Control
- Agriculture, Railways, Mining, Steel
- Downloads, Download Enclosure Drawings → `/product/ip-55-bhartia-enclosure/`
- Blog, News & Events, Enquiry, Resources
- Privacy Policy, Terms & Conditions, Data Privacy Policy, FAQs
- Company Overview, Sales and Distribution, R&D and Quality, Manufacturing, Contact

**Company pages present but NOT all in primary nav:** CSR (`/company/csr-2/`), Investor Relation, Annual Reports, AGM Notices, Public Notices.

## 2. All pages table

URL | Title | Type | Notes | → Wireframe
--- | ----- | ---- | ----- | ----------
https://bchindia.com/ | Switchgear Manufacturers in India | home |  | index.html
https://bchindia.com/application/detection-sensing/ | Detection & Sensing | application |  | solutions.html (industry/application filters) + products.html
https://bchindia.com/application/heavy-machinery-control/ | Heavy Machinery Control | application |  | solutions.html (industry/application filters) + products.html
https://bchindia.com/application/motor-control-protection/ | Motor Control & Protection | application |  | solutions.html (industry/application filters) + products.html
https://bchindia.com/application/power-control-protection/ | Power Control & Protection | application |  | solutions.html (industry/application filters) + products.html
https://bchindia.com/applications/ | Our Applications | application |  | solutions.html (industry/application filters) + products.html
https://bchindia.com/bch-electric-opens-new-branch-office-at-dehradun/ | Bch Electric Opens New Branch Office At Dehradun | page |  | media.html (legacy news; prefer /news-and-events/ canonical)
https://bchindia.com/bch-participation-in-elecrama-2018/ | Bch Participation In Elecrama 2018 | page |  | media.html (legacy news; prefer /news-and-events/ canonical)
https://bchindia.com/bhubaneswar-branch-opening-2017/ | Bhubaneswar Branch Opening 2017 | page |  | media.html (legacy news; prefer /news-and-events/ canonical)
https://bchindia.com/blog/ | Everything About the Electrical Industry | blog |  | media.html (Blog)
https://bchindia.com/blogs/10-common-industrial-problems-solved-by-limit-switches/ | 10 Common Industrial Problems Solved by Limit Switches | blog |  | media.html (Blog)
https://bchindia.com/blogs/10-trusted-rccb-manufacturers-for-uncompromising-protection/ | Electrical Safety is Non-Negotiable: 10 Trusted RCCB Manufacturers for Uncompromising Protection | blog |  | media.html (Blog)
https://bchindia.com/blogs/3-core-flat-cable-size-for-submersible-pumps/ | 3-Core Flat Cable Size for Submersible Pumps | blog |  | media.html (Blog)
https://bchindia.com/blogs/30-ma-vs-100-ma-vs-300-ma-rccb-selection-a-practical-guide/ | 30 mA vs 100 mA vs 300 mA RCCB Selection: A Practical Guide | blog |  | media.html (Blog)
https://bchindia.com/blogs/4-things-to-consider-when-selecting-your-outdoor-enclosure-system/ | 4 Things to Consider When Selecting Your Outdoor Enclosure System | blog |  | media.html (Blog)
https://bchindia.com/blogs/advantages-and-disadvantages-of-star-delta-starter/ | Advantages and Disadvantages of Star Delta Starter | blog |  | media.html (Blog)
https://bchindia.com/blogs/all-about-limit-switches/ | All About Limit Switches | blog |  | media.html (Blog)
https://bchindia.com/blogs/apfc-panel-step-calculation-how-to-prevent-under-and-over-correction/ | APFC Panel Step Calculation: How to Prevent Under- and Over-Correction | blog |  | media.html (Blog)
https://bchindia.com/blogs/bch-electric-contactors-vs-other-brands-feature-comparison-buyer-friendly-guide/ | BCH Electric Contactors vs Other Brands: Feature Comparison (Buyer-Friendly Guide) | blog |  | media.html (Blog)
https://bchindia.com/blogs/bch-india-rccb-vs-other-brands-detailed-comparison-2026-guide/ | BCH India RCCB vs Other Brands: Detailed Comparison (2026 Guide) | blog |  | media.html (Blog)
https://bchindia.com/blogs/best-industrial-plug-and-socket-types-for-harsh-environments/ | Best Industrial Plug and Socket Types for Harsh Environments | blog |  | media.html (Blog)
https://bchindia.com/blogs/best-limit-switches-for-heavy-duty-industrial-machines/ | Best Limit Switches for Heavy-Duty Industrial Machines | blog |  | media.html (Blog)
https://bchindia.com/blogs/best-overload-relays-for-industrial-applications-2026-guide/ | Best Overload Relays for Industrial Applications (2026 Guide) | blog |  | media.html (Blog)
https://bchindia.com/blogs/blogs-2-pole-contactor-vs-4-pole-contactor/ | 2 pole contactor vs 4 pole contactor: key differences and uses | blog |  | media.html (Blog)
https://bchindia.com/blogs/blogs-ac-solenoid-brake-working-principle-components-industrial-applications/ | AC Solenoid Brake: Working Principle, Components and Industrial Applications | blog |  | media.html (Blog)
https://bchindia.com/blogs/blogs-how-to-select-2-pole-contactor-for-different-loads/ | How to select a 2 pole contactor for heating, lighting and motor loads | blog |  | media.html (Blog)
https://bchindia.com/blogs/build-apfc-panel-with-bch-products/ | Build APFC Panel with BCH Products | blog |  | media.html (Blog)
https://bchindia.com/blogs/can-rccb-prevent-fire-hazards/ | Can RCCB Prevent Fire Hazards? | blog |  | media.html (Blog)
https://bchindia.com/blogs/causes-of-rccb-tripping-and-how-to-troubleshoot-them/ | Causes of RCCB Tripping and How to Troubleshoot Them | blog |  | media.html (Blog)
https://bchindia.com/blogs/choosing-star-delta-starter-for-industrial-motors-a-buyers-guide/ | Choosing Star-Delta Starter for Industrial Motors: A Buyer’s Guide | blog |  | media.html (Blog)
https://bchindia.com/blogs/common-3-core-flat-cable-failures-in-borewells/ | Common 3-Core Flat Cable Failures in Borewells | blog |  | media.html (Blog)
https://bchindia.com/blogs/complete-guide-to-solid-state-relays-working-types-applications/ | Complete Guide to Solid State Relays: Working, Types & Applications | blog |  | media.html (Blog)
https://bchindia.com/blogs/contactor-ratings-ac1-ac3-ac4-bch-electric/ | Contactor Ratings Explained: AC1, AC3, AC4 Duty Cycles | blog |  | media.html (Blog)
https://bchindia.com/blogs/contactor-selection-guide-for-industrial-motor-control/ | Contactor Selection Guide for Industrial Motor Control | blog |  | media.html (Blog)
https://bchindia.com/blogs/contactor-vs-relay-key-differences-and-applications/ | Contactor vs. Relay: Key Differences and Applications in Electrical Systems | blog |  | media.html (Blog)
https://bchindia.com/blogs/dc-contactor-working-principle-arc-control-coils-and-main-contacts/ | DC contactor working principle: arc control, coils and main contacts | blog |  | media.html (Blog)
https://bchindia.com/blogs/dol-starter-wiring-diagram-and-sequence-of-operation-explained/ | DOL starter wiring diagram and sequence of operation explained | blog |  | media.html (Blog)
https://bchindia.com/blogs/enclosure-sizing-guide-for-electrical-components-wiring-space-and-future-expansion/ | Enclosure sizing guide for electrical components, wiring space and future expansion | blog |  | media.html (Blog)
https://bchindia.com/blogs/energy-efficiency-and-mccbs/ | Energy Efficiency and MCCBs: How Modern Breakers Reduce Power Losses | blog |  | media.html (Blog)
https://bchindia.com/blogs/growth-in-branded-customized-industrial-enclosures-and-challenges/ | Growth in Branded Customized Industrial Enclosures and Challenges…! | blog |  | media.html (Blog)
https://bchindia.com/blogs/growth-in-customised-industrial-enclosures/ | Growth in Customised Industrial Enclosures | blog |  | media.html (Blog)
https://bchindia.com/blogs/guide-to-selecting-the-right-motor-starter-for-your-load-requirements/ | Guide to Selecting the Right Motor Starter for Your Load Requirements | blog |  | media.html (Blog)
https://bchindia.com/blogs/how-bch-indias-overload-relays-improve-motor-safety-efficiency/ | How BCH India’s Overload Relays Improve Motor Safety & Efficiency | blog |  | media.html (Blog)
https://bchindia.com/blogs/how-limit-switches-improve-machine-safety-and-reliability/ | How Limit Switches Improve Machine Safety and Reliability | blog |  | media.html (Blog)
https://bchindia.com/blogs/how-mcbs-enhance-safety-compliance-in-electrical-panels/ | How MCBs Enhance Safety Compliance in Electrical Panels | blog |  | media.html (Blog)
https://bchindia.com/blogs/how-mccbs-protect-electrical-systems-from-overload-short-circuit/ | How MCCBs Protect Electrical Systems from Overload & Short Circuit | blog |  | media.html (Blog)
https://bchindia.com/blogs/how-motor-starters-work-with-contactors-and-overload-relays/ | How Motor Starters Work with Contactors and Overload Relays | blog |  | media.html (Blog)
https://bchindia.com/blogs/how-smart-mcbs-will-transform-electrical-safety/ | How Smart MCBs Will Transform Electrical Safety | blog |  | media.html (Blog)
https://bchindia.com/blogs/how-to-calculate-required-kvar-for-power-factor-correction/ | How to Calculate Required KVAR for Power Factor Correction | blog |  | media.html (Blog)
https://bchindia.com/blogs/how-to-choose-safe-and-reliable-electronic-enclosures-for-a-hazardous-environment/ | How to Choose Safe and Reliable Electronic Enclosures for a Hazardous Environment. | blog |  | media.html (Blog)
https://bchindia.com/blogs/how-to-choose-the-right-3-core-flat-cable-for-your-industrial-wiring-needs/ | How to Choose the Right 3-Core Flat Cable for Your Industrial Wiring Needs? | blog |  | media.html (Blog)
https://bchindia.com/blogs/how-to-choose-the-right-electrical-enclosure-for-your-application/ | How to Choose the Right Electrical Enclosure for Your Application | blog |  | media.html (Blog)
https://bchindia.com/blogs/how-to-choose-the-right-electrical-enclosure-for-your-needs/ | How to Choose the Right Electrical Enclosure For Your Needs | blog |  | media.html (Blog)
https://bchindia.com/blogs/how-to-choose-the-right-industrial-socket-for-panels-and-machines/ | How to Choose the Right Industrial Socket for Panels and Machines | blog |  | media.html (Blog)
https://bchindia.com/blogs/how-to-choose-the-right-industrial-socket-for-your-application/ | How to Choose the Right Industrial Socket for Your Application | blog |  | media.html (Blog)
https://bchindia.com/blogs/how-to-choose-the-right-mcb-for-home-6a-10a-16a-20a-32a/ | How to Choose the Right MCB for Home: 6A, 10A, 16A, 20A, 32A | blog |  | media.html (Blog)
https://bchindia.com/blogs/how-to-choose-the-right-motor-starter-for-different-motor-ratings/ | How to Choose the Right Motor Starter for Different Motor Ratings | blog |  | media.html (Blog)
https://bchindia.com/blogs/how-to-choose-the-right-single-phase-starter-for-your-motor/ | How to Choose the Right Single Phase Starter for Your Motor | blog |  | media.html (Blog)
https://bchindia.com/blogs/how-to-install-an-mcb-distribution-box-safely-a-step-by-step-guide/ | How to Install an MCB Distribution Box Safely: A Step-by-Step Guide | blog |  | media.html (Blog)
https://bchindia.com/blogs/how-to-prevent-overheating-in-electrical-enclosures/ | How to Prevent Overheating in Electrical Enclosures | blog |  | media.html (Blog)
https://bchindia.com/blogs/how-to-select-kvar-capacitors-for-voltage-duty-and-apfc-panel-steps/ | How to select kVAR capacitors for voltage, duty and APFC panel steps | blog |  | media.html (Blog)
https://bchindia.com/blogs/how-to-select-mccb-for-high-fault-level-industrial-systems/ | How to Select MCCB for High Fault Level Industrial Systems | blog |  | media.html (Blog)
https://bchindia.com/blogs/how-to-select-mpcb-for-motor/ | How to Select an MPCB by Motor Current and Duty | blog |  | media.html (Blog)
https://bchindia.com/blogs/how-to-select-the-right-mccb-based-on-load-and-application/ | How to Select the Right MCCB Based on Load and Application | blog |  | media.html (Blog)
https://bchindia.com/blogs/importance-of-mcbs-in-preventing-electrical-fires/ | Importance of MCBs in Preventing Electrical Fires | blog |  | media.html (Blog)
https://bchindia.com/blogs/importance-of-rccbs-in-modern-electrical-systems/ | The Importance of RCCBs in Modern Electrical Systems | blog |  | media.html (Blog)
https://bchindia.com/blogs/industrial-plugs-sockets/ | How to Select Industrial Plugs and Sockets for Heavy-Duty Applications | blog |  | media.html (Blog)
https://bchindia.com/blogs/ip-ratings-in-electrical-enclosures-everything-you-need-to-know/ | IP Ratings in Electrical Enclosures: Everything You Need to Know | blog |  | media.html (Blog)
https://bchindia.com/blogs/keep-your-electric-system-secure/ | Keep Your Electric System Secure | blog |  | media.html (Blog)
https://bchindia.com/blogs/kvar-capacitors-explained-for-industrial-power-systems/ | KVAR Capacitors Explained for Industrial Power Systems | blog |  | media.html (Blog)
https://bchindia.com/blogs/limit-switch-wiring-no-nc-and-changeover-contact-examples/ | Limit Switch Wiring: NO, NC and Changeover Contact Examples | blog |  | media.html (Blog)
https://bchindia.com/blogs/limit-switches-for-cranes-conveyors-and-hoists-application-guide/ | Limit Switches for Cranes, Conveyors and Hoists: Application Guide | blog |  | media.html (Blog)
https://bchindia.com/blogs/mcb-distribution-box-maintenance-tips-every-electrician-should-know/ | MCB Distribution Box Maintenance Tips Every Electrician Should Know | blog |  | media.html (Blog)
https://bchindia.com/blogs/mcb-guide-from-overloads-to-safety/ | MCB Guide From Overloads to Safety | blog |  | media.html (Blog)
https://bchindia.com/blogs/mcb-installation-guide-for-industrial-and-commercial-panels/ | MCB Installation Guide for Industrial and Commercial Panels | blog |  | media.html (Blog)
https://bchindia.com/blogs/mcb-selection-guide-how-to-choose-the-right-mcb-for-your-electrical-system/ | MCB Selection Guide: How to Choose the Right MCB for Your Electrical System | blog |  | media.html (Blog)
https://bchindia.com/blogs/mcb-vs-fuse-which-is-better-for-modern-electrical-systems/ | MCB vs Fuse: Which Is Better for Modern Electrical Systems? | blog |  | media.html (Blog)
https://bchindia.com/blogs/mcb-working-and-selection-guide/ | What Is an MCB? Working, Types, Applications and Selection Guide | blog |  | media.html (Blog)
https://bchindia.com/blogs/mccb-applications-across-industries-from-homes-to-heavy-industries/ | MCCB Applications Across Industries: From Homes to Heavy Industries | blog |  | media.html (Blog)
https://bchindia.com/blogs/mccb-vs-fused-switch/ | MCCB vs. Fused Switch: Which One Should You Choose for Your Electrical Panel? | blog |  | media.html (Blog)
https://bchindia.com/blogs/most-common-rccb-problems-and-how-to-fix-them/ | Most Common RCCB Problems and How to Fix Them | blog |  | media.html (Blog)
https://bchindia.com/blogs/mpcb-trip-settings-contactor-coordination/ | MPCB Trip Settings and Contactor Coordination Guide | blog |  | media.html (Blog)
https://bchindia.com/blogs/mpcb-vs-mcb-vs-overload-relay/ | MPCB vs MCB vs Overload Relay for Motor Protection | blog |  | media.html (Blog)
https://bchindia.com/blogs/overload-relay-reset-and-troubleshooting-guide-for-industrial-motors/ | Overload Relay Reset and Troubleshooting Guide for Industrial Motors | blog |  | media.html (Blog)
https://bchindia.com/blogs/overload-relay-setting-chart-industrial-motors/ | Overload Relay Setting Chart for Industrial Motors: FLA, Current Range & Trip Class Explained | blog |  | media.html (Blog)
https://bchindia.com/blogs/protection-devices-used-in-star-delta-starter-circuits/ | Protection Devices Used in Star Delta Starter Circuits | blog |  | media.html (Blog)
https://bchindia.com/blogs/rccb-as-incomer-working-ratings-wiring-mcb-difference/ | RCCB and MCB in Distribution Boards: Working, Differences and Selection | blog |  | media.html (Blog)
https://bchindia.com/blogs/rccb-for-home-vs-rccb-for-industry-whats-the-difference/ | RCCB for Home vs. RCCB for Industry: What’s the Difference? | blog |  | media.html (Blog)
https://bchindia.com/blogs/rccb-tripping-frequently-10-reasons-why-solutions/ | RCCB Tripping Frequently? 10 Reasons Why & Solutions | blog |  | media.html (Blog)
https://bchindia.com/blogs/rccb-wiring-guidelines-dos-donts-for-electricians/ | RCCB Wiring Guidelines: Do’s & Don’ts for Electricians | blog |  | media.html (Blog)
https://bchindia.com/blogs/relays-contactors-starters-comparison-bch-electric/ | Understanding Switching Devices: Relays, Contactors & Starters Compared | blog |  | media.html (Blog)
https://bchindia.com/blogs/reversing-contactor-interlocking/ |  | blog |  | media.html (Blog)
https://bchindia.com/blogs/role-of-dol-starters-in-water-supply-management/ | Role of DOL Starters in Water Supply Management | blog |  | media.html (Blog)
https://bchindia.com/blogs/role-of-overload-relays-in-hvac-systems/ | The Role of Overload Relays in HVAC Systems | blog |  | media.html (Blog)
https://bchindia.com/blogs/short-circuit-protection-with-mccbs-how-it-works-in-real-installations/ | Short Circuit Protection with MCCBs: How It Works in Real Installations | blog |  | media.html (Blog)
https://bchindia.com/blogs/signs-your-rccb-needs-replacement/ | Signs Your RCCB Needs Replacement | blog |  | media.html (Blog)
https://bchindia.com/blogs/single-phase-dol-starter-for-water-pumps/ | Best Single Phase DOL Starter for Water Pumps: Features, Safety & Price Factors | blog |  | media.html (Blog)
https://bchindia.com/blogs/single-phase-vs-three-phase-rccb-which-one-do-you-need/ | Single-Phase vs Three-Phase RCCB: Which One Do You Need? | blog |  | media.html (Blog)
https://bchindia.com/blogs/smart-rccbs-the-next-big-step-in-electrical-safety-monitoring/ | Smart RCCBs: The Next Big Step in Electrical Safety & Monitoring | blog |  | media.html (Blog)
https://bchindia.com/blogs/solid-state-relay-vs-mechanical-relay-which-is-better-for-automation/ | Solid State Relay vs Mechanical Relay: Which Is Better for Automation? | blog |  | media.html (Blog)
https://bchindia.com/blogs/stay-protected-from-electrical-fires/ | Stay Protected from Electrical Fires | blog |  | media.html (Blog)
https://bchindia.com/blogs/the-5-most-popular-modular-enclosure-features/ | The 5 Most Popular Modular Enclosure Features | blog |  | media.html (Blog)
https://bchindia.com/blogs/the-latest-advancements-in-motor-protection-circuit-breaker-technology/ | The Latest Advancements in Motor Protection Circuit Breaker Technology | blog |  | media.html (Blog)
https://bchindia.com/blogs/the-role-of-motor-starters-in-energy-efficiency-and-cost-savings/ | The Role of Motor Starters in Energy Efficiency and Cost Savings | blog |  | media.html (Blog)
https://bchindia.com/blogs/thermal-vs-electronic-overload-relay-which-one-is-better/ | Thermal vs Electronic Overload Relay: Which One Is Better? | blog |  | media.html (Blog)
https://bchindia.com/blogs/top-10-industrial-sockets-for-heavy-duty-use/ | Top 10 Industrial Sockets for Heavy-Duty Use | blog |  | media.html (Blog)
https://bchindia.com/blogs/top-10-mcb-brands-in-india/ | Top 10 MCB Brands in India, 2024 | blog |  | media.html (Blog)
https://bchindia.com/blogs/top-10-signs-your-facility-needs-an-apfc-panel/ | Top 10 Signs Your Facility Needs an APFC Panel | blog |  | media.html (Blog)
https://bchindia.com/blogs/top-5-benefits-of-dol-starter-for-small-motors/ | Top 5 Benefits of BCH India’s DOL Starter for Small Motors | blog |  | media.html (Blog)
https://bchindia.com/blogs/top-features-to-look-for-in-industrial-limit-switches/ | Top Features to Look for in Industrial Limit Switches | blog |  | media.html (Blog)
https://bchindia.com/blogs/top-mcb-features-you-should-look-for-in-2026/ | Top MCB Features You Should Look for in 2026 | blog |  | media.html (Blog)
https://bchindia.com/blogs/troubleshooting-common-dol-starter-issues-a-guide-for-beginners/ | Troubleshooting Common DOL Starter Issues: A Guide for Beginners | blog |  | media.html (Blog)
https://bchindia.com/blogs/understanding-different-types-of-electrical-switchgear-and-their-applications/ | Understanding Different Types of Electrical Switchgear and Their Applications | blog |  | media.html (Blog)
https://bchindia.com/blogs/understanding-ip-ratings-in-electrical-enclosures-ip54-ip65-ip67/ | Understanding IP Ratings in Electrical Enclosures (IP54, IP65, IP67) | blog |  | media.html (Blog)
https://bchindia.com/blogs/understanding-the-basics-what-is-a-solid-state-relay/ | What Is a Solid State Relay? Working, Types, Advantages and Applications | blog |  | media.html (Blog)
https://bchindia.com/blogs/what-are-limit-switches-and-how-do-they-enhance-industrial-automation/ | What Are Limit Switches and How Do They Improve Industrial Automation? | blog |  | media.html (Blog)
https://bchindia.com/blogs/what-is-a-2-pole-contactor-working-principle-wiring-and-applications/ | What is a 2 pole contactor? Working principle, wiring and applications | blog |  | media.html (Blog)
https://bchindia.com/blogs/what-is-ics-and-icu-in-mccb-simplified-explanation/ | What is Ics and Icu in MCCB? Simplified Explanation | blog |  | media.html (Blog)
https://bchindia.com/blogs/where-are-star-delta-starters-used-top-industry-applications/ | Where Are Star-Delta Starters Used? Top Industry Applications | blog |  | media.html (Blog)
https://bchindia.com/blogs/why-bch-electric-is-a-trusted-name-in-mccb-manufacturing-in-india/ | Why BCH Electric Is a Trusted Name in MCCB Manufacturing in India | blog |  | media.html (Blog)
https://bchindia.com/blogs/why-bch-india-overload-relays-are-ideal-for-your-industrial-needs/ | Why BCH India Overload Relays Are Ideal for Your Industrial Needs | blog |  | media.html (Blog)
https://bchindia.com/blogs/why-custom-built-enclosures-improve-system-efficiency/ | Why Custom-Built Enclosures Improve System Efficiency | blog |  | media.html (Blog)
https://bchindia.com/blogs/why-electrical-enclosure-ventilation-is-critical-for-heat-management/ | Why Electrical Enclosure Ventilation Is Critical for Heat Management | blog |  | media.html (Blog)
https://bchindia.com/blogs/why-modern-home-needs-an-mcb-instead-of-fuses/ | Why Modern Home Needs an MCB Instead of Fuses | blog |  | media.html (Blog)
https://bchindia.com/blogs/why-quality-control-matters-in-electrical-component-manufacturing/ | Why Quality Control Matters in Electrical Component Manufacturing | blog |  | media.html (Blog)
https://bchindia.com/blogs/why-rccb-is-mandatory-for-modern-electrical-installations/ | Why RCCB is Mandatory for Modern Electrical Installations? | blog |  | media.html (Blog)
https://bchindia.com/blogs/why-solid-state-relays-are-replacing-mechanical-relays-in-modern-factories/ | Why Solid State Relays Are Replacing Mechanical Relays in Modern Factories | blog |  | media.html (Blog)
https://bchindia.com/blogs/why-starters-are-essential-for-motor-safety-and-longevity/ | Why Starters are Essential for Motor Safety and Longevity | blog |  | media.html (Blog)
https://bchindia.com/blogs/why-waterproof-enclosures-are-essential-for-outdoor-applications/ | Why Waterproof Enclosures Are Essential for Outdoor Applications | blog |  | media.html (Blog)
https://bchindia.com/blogs/why-you-should-choose-the-mccb-carefully/ | Why You Should Choose the MCCB Carefully | blog |  | media.html (Blog)
https://bchindia.com/category/news-events/ | News Events | news |  | media.html (News & Events)
https://bchindia.com/certificate/ | Certificates & Compliance | page | Page title Certificates & Compliance; body flagged "coming soon"; no PDF links found | about.html / engineering.html (Certificates — currently "coming soon")
https://bchindia.com/company/ | About BCH Electric Limited Company | company |  | about.html
https://bchindia.com/company/agm-notices/ | AGM Notices | company |  | about.html (Investors / governance subsection) or dedicated Investors area
https://bchindia.com/company/annual-reports/ | Annual Reports | company |  | about.html (Investors / governance subsection) or dedicated Investors area
https://bchindia.com/company/board-of-directors/ | Board of Directors | company |  | about.html
https://bchindia.com/company/csr-2/ | CSR | company |  | about.html (CSR section)
https://bchindia.com/company/investor-relation/ | Investor Relation | company |  | about.html (Investors / governance subsection) or dedicated Investors area
https://bchindia.com/company/manufacturing/ | Manufacturing | company |  | engineering.html (+ about.html for overview)
https://bchindia.com/company/public-notices/ | Public Notices | company |  | about.html (Investors / governance subsection) or dedicated Investors area
https://bchindia.com/company/rd-and-quality-assurance/ | R&D and Quality Assurance | company |  | engineering.html (+ about.html for overview)
https://bchindia.com/company/sales-and-distribution/ | Sales and Distribution Network | company |  | find-dealer.html
https://bchindia.com/company/vigil-mechanism/ | Vigil Mechanism | company |  | about.html (Investors / governance subsection) or dedicated Investors area
https://bchindia.com/contact/ | Contact Us | page |  | contact.html
https://bchindia.com/customer-care/ | Customer Care | page |  | contact.html (Support/FAQ) + optional Support hub
https://bchindia.com/data-privacy-policy/ | Data Privacy Policy | page |  | Footer legal pages (keep)
https://bchindia.com/download/ | Downloads | download | Hub listing download categories; PDFs live on child /downloads/* pages | Engineering library / Media resources (new) — linked from engineering.html + product pages
https://bchindia.com/downloads/automation/ | Automation Products | download |  | Engineering library / Media resources (new) — linked from engineering.html + product pages
https://bchindia.com/downloads/custom-build-products/ | MCC, PCC & Custom Build Panels | download |  | Engineering library / Media resources (new) — linked from engineering.html + product pages
https://bchindia.com/downloads/electronic-product/ | Electronic Product Downloads | download |  | Engineering library / Media resources (new) — linked from engineering.html + product pages
https://bchindia.com/downloads/industrial-enclosures-pdf-download/ | Industrial Enclosures PDF Download | download |  | Engineering library / Media resources (new) — linked from engineering.html + product pages
https://bchindia.com/downloads/industrial-products-pdf-download/ | Industrial Products PDF Download | download |  | Engineering library / Media resources (new) — linked from engineering.html + product pages
https://bchindia.com/downloads/motor-control-products-3/ | Control Gear Products | download |  | Engineering library / Media resources (new) — linked from engineering.html + product pages
https://bchindia.com/downloads/motor-starters-submersible-pump-starters/ | Motor Starters & Submersible Pump Starters Manufacturer | download |  | Engineering library / Media resources (new) — linked from engineering.html + product pages
https://bchindia.com/downloads/motors/ | Motors - Manufacturer, and Supplier in India | download | Download folder page exists but contains ZERO file links (empty) | Engineering library / Media resources (new) — linked from engineering.html + product pages
https://bchindia.com/downloads/new-product-catalogues/ | New Product Catalogues | download |  | Engineering library / Media resources (new) — linked from engineering.html + product pages
https://bchindia.com/downloads/power-control-products/ | Power Distribution Buttons | download |  | Engineering library / Media resources (new) — linked from engineering.html + product pages
https://bchindia.com/downloads/price-list/ | Price List 2026 | download |  | Engineering library / Media resources (new) — linked from engineering.html + product pages
https://bchindia.com/downloads/product-profiles/ | Product Profiles | download |  | Engineering library / Media resources (new) — linked from engineering.html + product pages
https://bchindia.com/downloads/reactive-power-management/ | Reactive Power Management Downloads | download | Download folder page exists but contains ZERO file links (empty) | Engineering library / Media resources (new) — linked from engineering.html + product pages
https://bchindia.com/downloads/wires-cables/ | Wires & Cables | download |  | Engineering library / Media resources (new) — linked from engineering.html + product pages
https://bchindia.com/eapic-2016/ | Eapic 2016 | page |  | media.html (legacy news; prefer /news-and-events/ canonical)
https://bchindia.com/enquiry/ | Enquiry | page |  | contact.html
https://bchindia.com/essay-writing-service-affordable-papers-net-how-to-find-a-good-author-online/ | Essay Writing Service Affordable-papers.net – How to Find a Good Author Online | spam/test | SPAM/TEST — do not migrate | DO NOT MAP — remove (spam/test)
https://bchindia.com/faqs/ | Frequently Asked Questions (FAQs) | page |  | contact.html (Support/FAQ) + optional Support hub
https://bchindia.com/industries/ | Industries | industry |  | solutions.html (industry/application filters) + products.html
https://bchindia.com/industry/agriculture/ | Agriculture Starters | industry |  | solutions.html (industry/application filters) + products.html
https://bchindia.com/industry/mining/ | Mining Products - Manufacturer & Supplier India | industry |  | solutions.html (industry/application filters) + products.html
https://bchindia.com/industry/railways/ | Railways Products | industry |  | solutions.html (industry/application filters) + products.html
https://bchindia.com/industry/steel/ | Steel & Iron Industry Products | industry |  | solutions.html (industry/application filters) + products.html
https://bchindia.com/ip-protection-categories-as-per-iec-60529/ | IP Protection categories as per IEC 60529 | page |  | engineering.html (Resources/guides)
https://bchindia.com/krishi-darshan-expo-2016/ | Krishi Darshan Expo 2016 | page |  | media.html (legacy news; prefer /news-and-events/ canonical)
https://bchindia.com/krishithon-expo-2016/ | Krishithon Expo 2016 | page |  | media.html (legacy news; prefer /news-and-events/ canonical)
https://bchindia.com/new_product/new-product/ | New Product | page |  | products.html (New products highlight)
https://bchindia.com/news-and-events/bch-electric-develops-starter-for-smart-farming/ | BCH Electric develops starter for Smart Farming | news |  | media.html (News & Events)
https://bchindia.com/news-and-events/bch-electric-opens-new-branch-office-at-dehradun/ | BCH Electric opens new branch office at Dehradun | news |  | media.html (News & Events)
https://bchindia.com/news-and-events/bch-participated-in-elasia-2024-exhibition-at-bangalore/ | BCH PARTICIPATED IN ELASIA 2024 EXHIBITION AT BANGALORE | news |  | media.html (News & Events)
https://bchindia.com/news-and-events/bch-participated-in-elecrama-exhibition-2020-at-greater-noida-ncr-india/ | BCH participated in ELECRAMA Exhibition, 2020 at Greater Noida, NCR, India | news |  | media.html (News & Events)
https://bchindia.com/news-and-events/bch-participated-in-krishi-darshan-expo-2018-at-hisar/ | BCH Participated in Krishi Darshan Expo, 2018 at Hisar | news |  | media.html (News & Events)
https://bchindia.com/news-and-events/bch-participation-in-elecrama-2018/ | BCH Participation In Elecrama 2018 | news |  | media.html (News & Events)
https://bchindia.com/news-and-events/bhubaneswar-branch-opening-2017/ | Bhubaneswar Branch Opening, 2017 | news |  | media.html (News & Events)
https://bchindia.com/news-and-events/eapic-2016/ | EAPIC 2016 | news |  | media.html (News & Events)
https://bchindia.com/news-and-events/head-sales-marketing-mr-kapil-grover-interview-to-industrial-product-finder-ipf-magazine/ | Head Sales & Marketing, Mr. Kapil Grover interview to Industrial Product Finder ( IPF) magazine | news |  | media.html (News & Events)
https://bchindia.com/news-and-events/jaipur-stonemart-2019-31-jan-3-feb-2019/ | JAIPUR STONEMART, 2019 : 31 Jan- 3 Feb 2019 | news |  | media.html (News & Events)
https://bchindia.com/news-and-events/krishi-darshan-expo-2016/ | Krishi Darshan Expo 2016 | news |  | media.html (News & Events)
https://bchindia.com/news-and-events/krishithon-expo-2016/ | Krishithon Expo 2016 | news |  | media.html (News & Events)
https://bchindia.com/news-and-events/pondicherry-industrial-expo-31-may-02-june-2019/ | Pondicherry Industrial Expo : 31 May -02 June 2019 | news |  | media.html (News & Events)
https://bchindia.com/news-and-events/product-demo-at-hindalco-belur-june-2018/ | Product Demo at Hindalco, Belur : June 2018 | news |  | media.html (News & Events)
https://bchindia.com/news-and-events/raocaps-all-india-seminar-by-mecon-aug-2017/ | RAOCAPS-All India Seminar by Mecon, Aug 2017 | news |  | media.html (News & Events)
https://bchindia.com/news-and-events/seminar-for-ak-automotive-rohtak-august-2018/ | Seminar for AK Automotive , Rohtak : August 2018 | news |  | media.html (News & Events)
https://bchindia.com/news-and-events/seminar-for-eesl-02-july-2018/ | Seminar for EESL : 02 July 2018 | news |  | media.html (News & Events)
https://bchindia.com/news-and-events/seminar-for-irrigation-department-at-bazpur-uttrakhand-may-18/ | Seminar for Irrigation department at Bazpur, Uttrakhand – May 18 | news |  | media.html (News & Events)
https://bchindia.com/news-and-events/seminar-for-shree-cement-july-2018/ | Seminar for Shree Cement : July 2018 | news |  | media.html (News & Events)
https://bchindia.com/news-and-events/seminar-gujarat-at-customer-site/ | Seminar Gujarat at Customer Site | news |  | media.html (News & Events)
https://bchindia.com/news-and-events/speech-delivered-by-mr-o-p-bhartia-chairman-and-managing-director-bch-electric-limited-at-dealers-meet-held-on-22-25-oct-2018-in-goa/ | Speech delivered by Mr. O.P Bhartia, Chairman and Managing Director, BCH Electric Limited at Dealers meet held on 22-25 Oct, 2018 in Goa | news |  | media.html (News & Events)
https://bchindia.com/news-and-events/surrender-of-cutler-hammer-provident-fund-trust-and-transferring-of-pf-funds-to-epfo/ | Surrender of Cutler Hammer Provident Fund Trust and Transferring of PF Funds to EPFO – Latest Update | news | PF trust / EPFO compliance notice | media.html (News & Events)
https://bchindia.com/news-and-events/surrender-of-cutler-hammer-provident-fund-trust/ | Surrender of “Cutler Hammer Provident Fund Trust” and Transferring of PF Funds to EPFO (Employees’ Provident Fund Organization) | news | PF trust / EPFO compliance notice | media.html (News & Events)
https://bchindia.com/news-and-events/surrender-of-exemption-dissolution-of-cutler-hammer-provident-fund-trust/ | Surrender of Exemption & Dissolution of Cutler Hammer Provident Fund Trust | news | PF trust / EPFO compliance notice | media.html (News & Events)
https://bchindia.com/news-events/ | News & Events - Manufacturer | news |  | media.html (News & Events)
https://bchindia.com/privacy-policy/ | Privacy Policy | page |  | Footer legal pages (keep)
https://bchindia.com/product-category/auto-transformer-starter/ | Auto Transformer Starter | category |  | motor-starters.html
https://bchindia.com/product-category/bch-wireless-modem/ | Bch Wireless Modem | category |  | solutions.html
https://bchindia.com/product-category/compartmentalized-enclosure/ | Compartmentalized Enclosure | category |  | enclosures.html
https://bchindia.com/product-category/control-desk/ | Control Desk Panel | category |  | enclosures.html
https://bchindia.com/product-category/crane-control-panels/ | Crane Control Panels | category |  | solutions.html
https://bchindia.com/product-category/dc-starters/ | DC Starters \| Motor Starter | category |  | solutions.html
https://bchindia.com/product-category/double-door-bhartia-enclosure-2-0/ | Double Door Bhartia Enclosure 2 0 | category |  | enclosures.html
https://bchindia.com/product-category/electronic-timer/ | Electronic Timer | category |  | motor-control.html
https://bchindia.com/product-category/enclosure/ | Enclosure | category |  | enclosures.html
https://bchindia.com/product-category/floor-mounted-enclosures/ | Modular Enclosures | category |  | enclosures.html
https://bchindia.com/product-category/industrial-products/ | Industrial Products | category |  | motor-control.html
https://bchindia.com/product-category/industrial-solutions/ | Industrial Solutions | category |  | solutions.html
https://bchindia.com/product-category/ip-55-bhartia-enclosure/ | IP 55 Bhartia Enclosure | category |  | enclosures.html
https://bchindia.com/product-category/it-racks/ | IT Racks \| Server Racks | category |  | enclosures.html
https://bchindia.com/product-category/mcc-pcc-imcc/ | MCC, PCC & IMCC | category |  | solutions.html
https://bchindia.com/product-category/motor-control-products/ | Motor Control Products | category |  | motor-control.html
https://bchindia.com/product-category/motor-starter/ | Motor Starter Manufacturers & Suppliers in India | category |  | motor-starters.html
https://bchindia.com/product-category/non-metallic-enclosure/ | Non Metallic Enclosure | category |  | enclosures.html
https://bchindia.com/product-category/oil-immersed-starters/ | Oil Immersed Starters | category |  | motor-starters.html
https://bchindia.com/product-category/other-industrial-products/ | Other Industrial Products | category |  | motor-control.html
https://bchindia.com/product-category/plug-in-relay/ | Plug In Relay | category |  | motor-control.html
https://bchindia.com/product-category/power-control/ | Power Control Products | category |  | power-control.html
https://bchindia.com/product-category/power-factor-management/ | Power Factor Management | category |  | power-control.html
https://bchindia.com/product-category/power-receptacles/ | Power Receptacles | category |  | solutions.html
https://bchindia.com/product-category/pump-controller/ | Pump Controllers | category |  | motor-starters.html
https://bchindia.com/product-category/resistors/ | High Voltage Resistors | category |  | solutions.html
https://bchindia.com/product-category/single-door-bhartia-enclosure-2-0/ | Single Door Bhartia Enclosure 2 0 | category |  | enclosures.html
https://bchindia.com/product-category/spares/ | Spares | category |  | motor-control.html
https://bchindia.com/product-category/special-purpose-starter/ | Special Purpose Starter | category |  | motor-starters.html
https://bchindia.com/product-category/submersible-pump-starters/ | Submersible Pump Starters | category |  | motor-starters.html
https://bchindia.com/product-category/terminal-2-0/ | Terminal 2 0 | category |  | enclosures.html
https://bchindia.com/product-category/wall-mounted-enclosures/ | Electrical Boxes | category |  | enclosures.html
https://bchindia.com/products-and-solutions/ | Industrial Products, Enclosures & Solutions | page |  | products.html
https://bchindia.com/raocaps-all-india-seminar-by-mecon-aug-2017/ | Raocaps All India Seminar By Mecon Aug 2017 | page |  | media.html (legacy news; prefer /news-and-events/ canonical)
https://bchindia.com/resources/ | Resources & Technical Guides | page | Resources & Technical Guides hub; no direct PDF hrefs in HTML scrape | engineering.html (Resources/guides)
https://bchindia.com/sales-offices/ | Sales Office Location of BCH Electric Limited | page |  | find-dealer.html
https://bchindia.com/seminar-gujarat-at-customer-site/ | Seminar Gujarat At Customer Site | page |  | media.html (legacy news; prefer /news-and-events/ canonical)
https://bchindia.com/student-collaboration-with-writemypapers/ | Student collaboration with Writemypapers | spam/test | SPAM/TEST — do not migrate | DO NOT MAP — remove (spam/test)
https://bchindia.com/terms-conditions/ | Terms & Conditions | page |  | Footer legal pages (keep)
https://bchindia.com/test-form/ | Test Form | spam/test | SPAM/TEST — do not migrate | DO NOT MAP — remove (spam/test)
https://bchindia.com/test/ | test | spam/test | SPAM/TEST — do not migrate | DO NOT MAP — remove (spam/test)
https://bchindia.com/test3/ | test3 | spam/test | SPAM/TEST — do not migrate | DO NOT MAP — remove (spam/test)
https://bchindia.com/test4/ | test4 | spam/test | SPAM/TEST — do not migrate | DO NOT MAP — remove (spam/test)
https://bchindia.com/thank-you/ | Thank You | page |  | contact.html
https://bchindia.com/wp-sitemap.xsl" ?>/ | Wp Sitemap.xsl" ?> | page |  | Review — map to nearest of about/media/products/contact
https://bchindia.com/product/19-networking-racks/ | 19” Networking Racks | product |  | enclosures.html → product detail template
https://bchindia.com/product/19-server-racks/ | 19” Server Racks | product |  | enclosures.html → product detail template
https://bchindia.com/product/19-wall-mount-racks/ | 19” Wall Mount Racks | product |  | enclosures.html → product detail template
https://bchindia.com/product/ac-crane-control-panel/ | AC Crane Control Panel | product |  | solutions.html → product detail template
https://bchindia.com/product/ac-solenoid-ac-brakes/ | AC Solenoid & AC Brakes | product |  | motor-control.html → product detail template
https://bchindia.com/product/acb-terasaki/ | Air Circuit Breakers – ACB (Terasaki) | product |  | power-control.html → product detail template
https://bchindia.com/product/accessories-19-racks/ | Accessories 19” Racks | product |  | enclosures.html → product detail template
https://bchindia.com/product/apfc-panel/ | APFC Panels | product |  | power-control.html → product detail template
https://bchindia.com/product/auto-start-dol-starter/ | Auto Start DOL Starter | product |  | motor-starters.html → product detail template
https://bchindia.com/product/auto-transformer-starter/ | Auto Transformer Starter | product |  | motor-starters.html → product detail template
https://bchindia.com/product/automation/ | Automation | product |  | motor-control.html → product detail template
https://bchindia.com/product/automation/ac-drive-sinus-m/ | AC Drive Sinus M | product |  | motor-control.html → product detail template
https://bchindia.com/product/automation/ac-drive-sinus-n/ | AC Drive Sinus N | product |  | motor-control.html → product detail template
https://bchindia.com/product/automation/ac-drive-sinus-penta/ | AC Drive Sinus Penta | product |  | motor-control.html → product detail template
https://bchindia.com/product/automation/dc-drive-dcreg/ | DC Drive Dcreg | product |  | motor-control.html → product detail template
https://bchindia.com/product/automation/dqr-plus-star-delta-timer/ | DQR Plus Star Delta Timer | product |  | motor-starters.html → product detail template
https://bchindia.com/product/automation/electronic-timer-btr-17-series/ | Electronic Timer -BTR 17 Series | product |  | motor-control.html → product detail template
https://bchindia.com/product/automation/plr-sr-series/ | Plr Sr Series | product |  | motor-control.html → product detail template
https://bchindia.com/product/automation/plug-in-relay-apa/ | Plug-In Relay – APA | product |  | motor-control.html → product detail template
https://bchindia.com/product/automation/plug-in-relay-asp/ | Plug-In Relay – ASP | product |  | motor-control.html → product detail template
https://bchindia.com/product/automation/sensors/ | Sensors | product |  | motor-control.html → product detail template
https://bchindia.com/product/automation/soft-starters-asab-asac-series/ | Soft Starters Asab Asac Series | product |  | motor-starters.html → product detail template
https://bchindia.com/product/bch-wireless-modem/ | Bch Wireless Modem | product |  | motor-control.html → product detail template
https://bchindia.com/product/bhartia-enclosure-2-0/ | Bhartia Enclosures 2.0 | product |  | enclosures.html → product detail template
https://bchindia.com/product/bhartia-enclosures/ | Bhartia Enclosures | product |  | enclosures.html → product detail template
https://bchindia.com/product/bil-30000-2/ | BIL-30000-2 | product | Enclosure drawing/SKU leaf (BIL code title) | enclosures.html (CAD/drawing leaf under enclosure SKU)
https://bchindia.com/product/bil-30010/ | BIL-30010 | product | Enclosure drawing/SKU leaf (BIL code title) | enclosures.html (CAD/drawing leaf under enclosure SKU)
https://bchindia.com/product/bil-30020/ | BIL-30020 | product | Enclosure drawing/SKU leaf (BIL code title) | enclosures.html (CAD/drawing leaf under enclosure SKU)
https://bchindia.com/product/bil-30030/ | BIL-30030 | product | Enclosure drawing/SKU leaf (BIL code title) | enclosures.html (CAD/drawing leaf under enclosure SKU)
https://bchindia.com/product/bil-30040/ | BIL-30040 | product | Enclosure drawing/SKU leaf (BIL code title) | enclosures.html (CAD/drawing leaf under enclosure SKU)
https://bchindia.com/product/bil-30050/ | BIL-30050 | product | Enclosure drawing/SKU leaf (BIL code title) | enclosures.html (CAD/drawing leaf under enclosure SKU)
https://bchindia.com/product/bil-30060/ | BIL-30060 | product | Enclosure drawing/SKU leaf (BIL code title) | enclosures.html (CAD/drawing leaf under enclosure SKU)
https://bchindia.com/product/bil-30070/ | BIL-30070 | product | Enclosure drawing/SKU leaf (BIL code title) | enclosures.html (CAD/drawing leaf under enclosure SKU)
https://bchindia.com/product/bil-30080/ | BIL-30080 | product | Enclosure drawing/SKU leaf (BIL code title) | enclosures.html (CAD/drawing leaf under enclosure SKU)
https://bchindia.com/product/bil-30090/ | BIL-30090 | product | Enclosure drawing/SKU leaf (BIL code title) | enclosures.html (CAD/drawing leaf under enclosure SKU)
https://bchindia.com/product/bil-30100/ | BIL-30100 | product | Enclosure drawing/SKU leaf (BIL code title) | enclosures.html (CAD/drawing leaf under enclosure SKU)
https://bchindia.com/product/bil-30110/ | BIL-30110 | product | Enclosure drawing/SKU leaf (BIL code title) | enclosures.html (CAD/drawing leaf under enclosure SKU)
https://bchindia.com/product/bil-30120/ | BIL-30120 | product | Enclosure drawing/SKU leaf (BIL code title) | enclosures.html (CAD/drawing leaf under enclosure SKU)
https://bchindia.com/product/bil-30130/ | BIL-30130 | product | Enclosure drawing/SKU leaf (BIL code title) | enclosures.html (CAD/drawing leaf under enclosure SKU)
https://bchindia.com/product/bil-30140/ | BIL-30140 | product | Enclosure drawing/SKU leaf (BIL code title) | enclosures.html (CAD/drawing leaf under enclosure SKU)
https://bchindia.com/product/bil-30150/ | BIL-30150 | product | Enclosure drawing/SKU leaf (BIL code title) | enclosures.html (CAD/drawing leaf under enclosure SKU)
https://bchindia.com/product/bil-30160/ | BIL-30160 | product | Enclosure drawing/SKU leaf (BIL code title) | enclosures.html (CAD/drawing leaf under enclosure SKU)
https://bchindia.com/product/bil-30170/ | BIL-30170 | product | Enclosure drawing/SKU leaf (BIL code title) | enclosures.html (CAD/drawing leaf under enclosure SKU)
https://bchindia.com/product/bil-30180/ | BIL-30180 | product | Enclosure drawing/SKU leaf (BIL code title) | enclosures.html (CAD/drawing leaf under enclosure SKU)
https://bchindia.com/product/bil-30190/ | BIL-30190 | product | Enclosure drawing/SKU leaf (BIL code title) | enclosures.html (CAD/drawing leaf under enclosure SKU)
https://bchindia.com/product/bil-30200/ | BIL-30200 | product | Enclosure drawing/SKU leaf (BIL code title) | enclosures.html (CAD/drawing leaf under enclosure SKU)
https://bchindia.com/product/bil-30210/ | BIL-30210 | product | Enclosure drawing/SKU leaf (BIL code title) | enclosures.html (CAD/drawing leaf under enclosure SKU)
https://bchindia.com/product/bil-40000/ | BIL-40000 | product | Enclosure drawing/SKU leaf (BIL code title) | enclosures.html (CAD/drawing leaf under enclosure SKU)
https://bchindia.com/product/bil-40010/ | BIL-40010 | product | Enclosure drawing/SKU leaf (BIL code title) | enclosures.html (CAD/drawing leaf under enclosure SKU)
https://bchindia.com/product/bil-40020/ | BIL-40020 | product | Enclosure drawing/SKU leaf (BIL code title) | enclosures.html (CAD/drawing leaf under enclosure SKU)
https://bchindia.com/product/bil-40030/ | BIL-40030 | product | Enclosure drawing/SKU leaf (BIL code title) | enclosures.html (CAD/drawing leaf under enclosure SKU)
https://bchindia.com/product/bil-40040/ | BIL-40040 | product | Enclosure drawing/SKU leaf (BIL code title) | enclosures.html (CAD/drawing leaf under enclosure SKU)
https://bchindia.com/product/bil-40050/ | BIL-40050 | product | Enclosure drawing/SKU leaf (BIL code title) | enclosures.html (CAD/drawing leaf under enclosure SKU)
https://bchindia.com/product/bil-40060/ | BIL-40060 | product | Enclosure drawing/SKU leaf (BIL code title) | enclosures.html (CAD/drawing leaf under enclosure SKU)
https://bchindia.com/product/bil-40070/ | BIL-40070 | product | Enclosure drawing/SKU leaf (BIL code title) | enclosures.html (CAD/drawing leaf under enclosure SKU)
https://bchindia.com/product/bil-40080/ | BIL-40080 | product | Enclosure drawing/SKU leaf (BIL code title) | enclosures.html (CAD/drawing leaf under enclosure SKU)
https://bchindia.com/product/bil-40090/ | BIL-40090 | product | Enclosure drawing/SKU leaf (BIL code title) | enclosures.html (CAD/drawing leaf under enclosure SKU)
https://bchindia.com/product/bil-40100/ | BIL-40100 | product | Enclosure drawing/SKU leaf (BIL code title) | enclosures.html (CAD/drawing leaf under enclosure SKU)
https://bchindia.com/product/bil-40110/ | BIL-40110 | product | Enclosure drawing/SKU leaf (BIL code title) | enclosures.html (CAD/drawing leaf under enclosure SKU)
https://bchindia.com/product/bil-40120/ | BIL-40120 | product | Enclosure drawing/SKU leaf (BIL code title) | enclosures.html (CAD/drawing leaf under enclosure SKU)
https://bchindia.com/product/bil-40140/ | BIL-40140 | product | Enclosure drawing/SKU leaf (BIL code title) | enclosures.html (CAD/drawing leaf under enclosure SKU)
https://bchindia.com/product/bil-40150/ | BIL-40150 | product | Enclosure drawing/SKU leaf (BIL code title) | enclosures.html (CAD/drawing leaf under enclosure SKU)
https://bchindia.com/product/bil-40160/ | BIL-40160 | product | Enclosure drawing/SKU leaf (BIL code title) | enclosures.html (CAD/drawing leaf under enclosure SKU)
https://bchindia.com/product/bil-40170/ | BIL-40170 | product | Enclosure drawing/SKU leaf (BIL code title) | enclosures.html (CAD/drawing leaf under enclosure SKU)
https://bchindia.com/product/bil-40180/ | BIL-40180 | product | Enclosure drawing/SKU leaf (BIL code title) | enclosures.html (CAD/drawing leaf under enclosure SKU)
https://bchindia.com/product/bil-40190/ | BIL-40190 | product | Enclosure drawing/SKU leaf (BIL code title) | enclosures.html (CAD/drawing leaf under enclosure SKU)
https://bchindia.com/product/bil-40200/ | BIL-40200 | product | Enclosure drawing/SKU leaf (BIL code title) | enclosures.html (CAD/drawing leaf under enclosure SKU)
https://bchindia.com/product/bil-40210/ | BIL-40210 | product | Enclosure drawing/SKU leaf (BIL code title) | enclosures.html (CAD/drawing leaf under enclosure SKU)
https://bchindia.com/product/bil-40220/ | BIL-40220 | product | Enclosure drawing/SKU leaf (BIL code title) | enclosures.html (CAD/drawing leaf under enclosure SKU)
https://bchindia.com/product/bil-40230/ | BIL-40230 | product | Enclosure drawing/SKU leaf (BIL code title) | enclosures.html (CAD/drawing leaf under enclosure SKU)
https://bchindia.com/product/bil-40240/ | BIL-40240 | product | Enclosure drawing/SKU leaf (BIL code title) | enclosures.html (CAD/drawing leaf under enclosure SKU)
https://bchindia.com/product/bil-40250/ | BIL-40250 | product | Enclosure drawing/SKU leaf (BIL code title) | enclosures.html (CAD/drawing leaf under enclosure SKU)
https://bchindia.com/product/bil-40260/ | BIL-40260 | product | Enclosure drawing/SKU leaf (BIL code title) | enclosures.html (CAD/drawing leaf under enclosure SKU)
https://bchindia.com/product/bil-40270/ | BIL-40270 | product | Enclosure drawing/SKU leaf (BIL code title) | enclosures.html (CAD/drawing leaf under enclosure SKU)
https://bchindia.com/product/bil-40280/ | BIL-40280 | product | Enclosure drawing/SKU leaf (BIL code title) | enclosures.html (CAD/drawing leaf under enclosure SKU)
https://bchindia.com/product/bil-40290/ | BIL-40290 | product | Enclosure drawing/SKU leaf (BIL code title) | enclosures.html (CAD/drawing leaf under enclosure SKU)
https://bchindia.com/product/bil-40300/ | BIL-40300 | product | Enclosure drawing/SKU leaf (BIL code title) | enclosures.html (CAD/drawing leaf under enclosure SKU)
https://bchindia.com/product/bil-40310/ | BIL-40310 | product | Enclosure drawing/SKU leaf (BIL code title) | enclosures.html (CAD/drawing leaf under enclosure SKU)
https://bchindia.com/product/bil-40320/ | BIL-40320 | product | Enclosure drawing/SKU leaf (BIL code title) | enclosures.html (CAD/drawing leaf under enclosure SKU)
https://bchindia.com/product/bil-40330/ | BIL-40330 | product | Enclosure drawing/SKU leaf (BIL code title) | enclosures.html (CAD/drawing leaf under enclosure SKU)
https://bchindia.com/product/bil-40340/ | BIL-40340 | product | Enclosure drawing/SKU leaf (BIL code title) | enclosures.html (CAD/drawing leaf under enclosure SKU)
https://bchindia.com/product/bil-40350/ | BIL-40350 | product | Enclosure drawing/SKU leaf (BIL code title) | enclosures.html (CAD/drawing leaf under enclosure SKU)
https://bchindia.com/product/bil-40360/ | BIL-40360 | product | Enclosure drawing/SKU leaf (BIL code title) | enclosures.html (CAD/drawing leaf under enclosure SKU)
https://bchindia.com/product/bil-40370/ | BIL-40370 | product | Enclosure drawing/SKU leaf (BIL code title) | enclosures.html (CAD/drawing leaf under enclosure SKU)
https://bchindia.com/product/bil-40380/ | BIL-40380 | product | Enclosure drawing/SKU leaf (BIL code title) | enclosures.html (CAD/drawing leaf under enclosure SKU)
https://bchindia.com/product/bil-40390/ | BIL-40390 | product | Enclosure drawing/SKU leaf (BIL code title) | enclosures.html (CAD/drawing leaf under enclosure SKU)
https://bchindia.com/product/bil-40400/ | BIL-40400 | product | Enclosure drawing/SKU leaf (BIL code title) | enclosures.html (CAD/drawing leaf under enclosure SKU)
https://bchindia.com/product/bil-40410/ | BIL-40410 | product | Enclosure drawing/SKU leaf (BIL code title) | enclosures.html (CAD/drawing leaf under enclosure SKU)
https://bchindia.com/product/bil-40420/ | BIL-40420 | product | Enclosure drawing/SKU leaf (BIL code title) | enclosures.html (CAD/drawing leaf under enclosure SKU)
https://bchindia.com/product/bil-40430/ | BIL-40430 | product | Enclosure drawing/SKU leaf (BIL code title) | enclosures.html (CAD/drawing leaf under enclosure SKU)
https://bchindia.com/product/bil-40440/ | BIL-40440 | product | Enclosure drawing/SKU leaf (BIL code title) | enclosures.html (CAD/drawing leaf under enclosure SKU)
https://bchindia.com/product/bil-40450/ | BIL-40450 | product | Enclosure drawing/SKU leaf (BIL code title) | enclosures.html (CAD/drawing leaf under enclosure SKU)
https://bchindia.com/product/bil-50000/ | BIL-50000 | product | Enclosure drawing/SKU leaf (BIL code title) | enclosures.html (CAD/drawing leaf under enclosure SKU)
https://bchindia.com/product/bil-50010/ | BIL-50010 | product | Enclosure drawing/SKU leaf (BIL code title) | enclosures.html (CAD/drawing leaf under enclosure SKU)
https://bchindia.com/product/bil-50020/ | BIL-50020 | product | Enclosure drawing/SKU leaf (BIL code title) | enclosures.html (CAD/drawing leaf under enclosure SKU)
https://bchindia.com/product/bil-50030/ | BIL-50030 | product | Enclosure drawing/SKU leaf (BIL code title) | enclosures.html (CAD/drawing leaf under enclosure SKU)
https://bchindia.com/product/bil-50050/ | BIL-50050 | product | Enclosure drawing/SKU leaf (BIL code title) | enclosures.html (CAD/drawing leaf under enclosure SKU)
https://bchindia.com/product/bil-50060/ | BIL-50060 | product | Enclosure drawing/SKU leaf (BIL code title) | enclosures.html (CAD/drawing leaf under enclosure SKU)
https://bchindia.com/product/bil-50080/ | BIL-50080 | product | Enclosure drawing/SKU leaf (BIL code title) | enclosures.html (CAD/drawing leaf under enclosure SKU)
https://bchindia.com/product/bil-50090/ | BIL-50090 | product | Enclosure drawing/SKU leaf (BIL code title) | enclosures.html (CAD/drawing leaf under enclosure SKU)
https://bchindia.com/product/bil-50110/ | BIL-50110 | product | Enclosure drawing/SKU leaf (BIL code title) | enclosures.html (CAD/drawing leaf under enclosure SKU)
https://bchindia.com/product/bil-50120/ | BIL-50120 | product | Enclosure drawing/SKU leaf (BIL code title) | enclosures.html (CAD/drawing leaf under enclosure SKU)
https://bchindia.com/product/bil-50140/ | BIL-50140 | product | Enclosure drawing/SKU leaf (BIL code title) | enclosures.html (CAD/drawing leaf under enclosure SKU)
https://bchindia.com/product/bil-50150/ | BIL-50150 | product | Enclosure drawing/SKU leaf (BIL code title) | enclosures.html (CAD/drawing leaf under enclosure SKU)
https://bchindia.com/product/bil-50170/ | BIL-50170 | product | Enclosure drawing/SKU leaf (BIL code title) | enclosures.html (CAD/drawing leaf under enclosure SKU)
https://bchindia.com/product/bil-50180/ | BIL-50180 | product | Enclosure drawing/SKU leaf (BIL code title) | enclosures.html (CAD/drawing leaf under enclosure SKU)
https://bchindia.com/product/bil-50190/ | BIL-50190 | product | Enclosure drawing/SKU leaf (BIL code title) | enclosures.html (CAD/drawing leaf under enclosure SKU)
https://bchindia.com/product/bil-50210/ | BIL-50210 | product | Enclosure drawing/SKU leaf (BIL code title) | enclosures.html (CAD/drawing leaf under enclosure SKU)
https://bchindia.com/product/bil-50220/ | BIL-50220 | product | Enclosure drawing/SKU leaf (BIL code title) | enclosures.html (CAD/drawing leaf under enclosure SKU)
https://bchindia.com/product/bil-50230/ | BIL-50230 | product | Enclosure drawing/SKU leaf (BIL code title) | enclosures.html (CAD/drawing leaf under enclosure SKU)
https://bchindia.com/product/bil-50240/ | BIL-50240 | product | Enclosure drawing/SKU leaf (BIL code title) | enclosures.html (CAD/drawing leaf under enclosure SKU)
https://bchindia.com/product/bil-50250/ | BIL-50250 | product | Enclosure drawing/SKU leaf (BIL code title) | enclosures.html (CAD/drawing leaf under enclosure SKU)
https://bchindia.com/product/bil-50260/ | BIL-50260 | product | Enclosure drawing/SKU leaf (BIL code title) | enclosures.html (CAD/drawing leaf under enclosure SKU)
https://bchindia.com/product/bil-50270/ | BIL-50270 | product | Enclosure drawing/SKU leaf (BIL code title) | enclosures.html (CAD/drawing leaf under enclosure SKU)
https://bchindia.com/product/bil-50280/ | BIL-50280 | product | Enclosure drawing/SKU leaf (BIL code title) | enclosures.html (CAD/drawing leaf under enclosure SKU)
https://bchindia.com/product/bil-50290/ | BIL-50290 | product | Enclosure drawing/SKU leaf (BIL code title) | enclosures.html (CAD/drawing leaf under enclosure SKU)
https://bchindia.com/product/bil-50300/ | BIL-50300 | product | Enclosure drawing/SKU leaf (BIL code title) | enclosures.html (CAD/drawing leaf under enclosure SKU)
https://bchindia.com/product/bil-50310/ | BIL-50310 | product | Enclosure drawing/SKU leaf (BIL code title) | enclosures.html (CAD/drawing leaf under enclosure SKU)
https://bchindia.com/product/bil-50320/ | BIL-50320 | product | Enclosure drawing/SKU leaf (BIL code title) | enclosures.html (CAD/drawing leaf under enclosure SKU)
https://bchindia.com/product/bil-50330/ | BIL-50330 | product | Enclosure drawing/SKU leaf (BIL code title) | enclosures.html (CAD/drawing leaf under enclosure SKU)
https://bchindia.com/product/bil-50340/ | BIL-50340 | product | Enclosure drawing/SKU leaf (BIL code title) | enclosures.html (CAD/drawing leaf under enclosure SKU)
https://bchindia.com/product/bil-50350/ | BIL-50350 | product | Enclosure drawing/SKU leaf (BIL code title) | enclosures.html (CAD/drawing leaf under enclosure SKU)
https://bchindia.com/product/bil-50360/ | BIL-50360 | product | Enclosure drawing/SKU leaf (BIL code title) | enclosures.html (CAD/drawing leaf under enclosure SKU)
https://bchindia.com/product/bil-50390/ | BIL-50390 | product | Enclosure drawing/SKU leaf (BIL code title) | enclosures.html (CAD/drawing leaf under enclosure SKU)
https://bchindia.com/product/bil-50395/ | BIL-50395 | product | Enclosure drawing/SKU leaf (BIL code title) | enclosures.html (CAD/drawing leaf under enclosure SKU)
https://bchindia.com/product/bil-50500/ | BIL-50500 | product | Enclosure drawing/SKU leaf (BIL code title) | enclosures.html (CAD/drawing leaf under enclosure SKU)
https://bchindia.com/product/bil-50520/ | BIL-50520 | product | Enclosure drawing/SKU leaf (BIL code title) | enclosures.html (CAD/drawing leaf under enclosure SKU)
https://bchindia.com/product/bil-50540/ | BIL-50540 | product | Enclosure drawing/SKU leaf (BIL code title) | enclosures.html (CAD/drawing leaf under enclosure SKU)
https://bchindia.com/product/bil-50550/ | BIL-50550 | product | Enclosure drawing/SKU leaf (BIL code title) | enclosures.html (CAD/drawing leaf under enclosure SKU)
https://bchindia.com/product/bil-50560/ | BIL-50560 | product | Enclosure drawing/SKU leaf (BIL code title) | enclosures.html (CAD/drawing leaf under enclosure SKU)
https://bchindia.com/product/bil-50570/ | BIL-50570 | product | Enclosure drawing/SKU leaf (BIL code title) | enclosures.html (CAD/drawing leaf under enclosure SKU)
https://bchindia.com/product/bil-50580/ | BIL-50580 | product | Enclosure drawing/SKU leaf (BIL code title) | enclosures.html (CAD/drawing leaf under enclosure SKU)
https://bchindia.com/product/bil-50590/ | BIL-50590 | product | Enclosure drawing/SKU leaf (BIL code title) | enclosures.html (CAD/drawing leaf under enclosure SKU)
https://bchindia.com/product/bk1starter/ | BK1 Starter | product |  | motor-starters.html → product detail template
https://bchindia.com/product/bk1starter/btimers/ | B Timers | product |  | motor-starters.html → product detail template
https://bchindia.com/product/compartmentalized-enclosure/ | Compartmentalized Enclosures | product |  | enclosures.html → product detail template
https://bchindia.com/product/compartmentalized-enclosure/draw-out-compartmentalized-enclosure/ | Draw Out – Compartmentalized Enclosure | product |  | enclosures.html → product detail template
https://bchindia.com/product/compartmentalized-enclosure/fixed-type-compartmentalized-enclosure/ | Fixed Type – Compartmentalized Enclosure | product |  | enclosures.html → product detail template
https://bchindia.com/product/contactor/ | Contactor | product |  | motor-control.html → product detail template
https://bchindia.com/product/contactor/4-pole-2-pole-contactors/ | 4 Pole 2 Pole Contactors | product |  | motor-control.html → product detail template
https://bchindia.com/product/contactor/4-pole-2-pole-contactors/2-pole-cpg-contactor/ | 2 Pole CPG Contactor | product |  | motor-control.html → product detail template
https://bchindia.com/product/contactor/4-pole-2-pole-contactors/2-pole-jpg-contactor/ | 2 Pole JPG Contactor | product |  | motor-control.html → product detail template
https://bchindia.com/product/contactor/4-pole-2-pole-contactors/4-pole-contactor/ | 4 Pole Contactor | product |  | motor-control.html → product detail template
https://bchindia.com/product/contactor/citation-contactors/ | Citation Contactors | product |  | motor-control.html → product detail template
https://bchindia.com/product/contactor/freedom-contactors/ | Freedom Contactors | product |  | motor-control.html → product detail template
https://bchindia.com/product/control-and-signalling-devices/ | Control and Signalling Devices | product |  | motor-control.html → product detail template
https://bchindia.com/product/control-and-signalling-devices/push-button-indicating-light/ | Push Button Indicating Light | product |  | motor-control.html → product detail template
https://bchindia.com/product/control-and-signalling-devices/push-button-led-indicating-light-22-5mm/ | Push Button LED Indicating Light 22 5mm | product |  | motor-control.html → product detail template
https://bchindia.com/product/control-desk/ | Control Desk | product |  | enclosures.html → product detail template
https://bchindia.com/product/control-relay-accessories/ | Control Relay & Accessories | product |  | motor-control.html → product detail template
https://bchindia.com/product/control-relay-accessories/control-relay-freedom-series/ | Control Relay Freedom Series | product |  | motor-control.html → product detail template
https://bchindia.com/product/dc-brakes/ | DC Brakes | product |  | motor-control.html → product detail template
https://bchindia.com/product/dc-contactors/ | DC Contactors | product |  | motor-control.html → product detail template
https://bchindia.com/product/dc-crane-control-panel/ | DC Crane Control Panel | product |  | solutions.html → product detail template
https://bchindia.com/product/dc-starters/ | DC Starters | product |  | solutions.html → product detail template
https://bchindia.com/product/dol-starter/ | DOL Starter | product |  | motor-starters.html → product detail template
https://bchindia.com/product/double-door-bhartia-enclosure-2-0/ | Double Door Bhartia Enclosure 2 0 | product |  | enclosures.html → product detail template
https://bchindia.com/product/etsi-racks/ | ETSI Racks | product |  | enclosures.html → product detail template
https://bchindia.com/product/fasd-starter/ | FASD Starter | product |  | motor-starters.html → product detail template
https://bchindia.com/product/foot-switch/ | Foot Switch | product |  | motor-control.html → product detail template
https://bchindia.com/product/foot-switch/fsg-bsg-foot-switch/ | FSG BSG Foot Switch | product |  | motor-control.html → product detail template
https://bchindia.com/product/foot-switch/fsg-foot-switch/ | FSG Foot Switch | product |  | motor-control.html → product detail template
https://bchindia.com/product/industrial-dol/ | Industrial DOL | product |  | motor-starters.html → product detail template
https://bchindia.com/product/ip-55-bhartia-enclosure/ | IP 55 Bhartia Enclosure | product |  | enclosures.html → product detail template
https://bchindia.com/product/ip-66-bhartia-enclosure/ | IP 66 Bhartia Enclosure | product |  | enclosures.html → product detail template
https://bchindia.com/product/limit-switches/ | Limit Switches | product |  | motor-control.html → product detail template
https://bchindia.com/product/limit-switches/general-purpose-limit-switch/ | General Purpose Limit Switch | product |  | motor-control.html → product detail template
https://bchindia.com/product/limit-switches/heavy-duty-limit-switch-nl-series/ | Heavy Duty Limit Switch NL Series | product |  | motor-control.html → product detail template
https://bchindia.com/product/limit-switches/mini-limit-switch/ | Mini Limit Switch | product |  | motor-control.html → product detail template
https://bchindia.com/product/limit-switches/precision-limit-switch/ | Precision Limit Switch | product |  | motor-control.html → product detail template
https://bchindia.com/product/lt-capacitor/ | Power Capacitor | product |  | power-control.html → product detail template
https://bchindia.com/product/manual-star-delta-starter/ | Manual Star Delta Starter | product |  | motor-starters.html → product detail template
https://bchindia.com/product/mcb-distribution-box/ | MCB Distribution Box | product |  | power-control.html → product detail template
https://bchindia.com/product/mcb/ | MCB (Miniature Circuit Breaker) | product |  | power-control.html → product detail template
https://bchindia.com/product/mccb-terasaki/ | Moulded Case Circuit Breakers – MCCB (Terasaki) | product |  | power-control.html → product detail template
https://bchindia.com/product/mccb-x-range/ | MCCB X – Range | product |  | power-control.html → product detail template
https://bchindia.com/product/mccb/ | MCCB - Manufacturer & Supplier in Faridabad | product |  | power-control.html → product detail template
https://bchindia.com/product/mini-contactors/ | Mini Contactors | product |  | motor-control.html → product detail template
https://bchindia.com/product/mini-manual-dol-starter/ | Mini Manual DOL Starter | product |  | motor-starters.html → product detail template
https://bchindia.com/product/mini-manual-with-uvt-coil/ | Mini Manual with UVT Coil | product |  | motor-starters.html → product detail template
https://bchindia.com/product/motor-control-center-power-control-center/ | Motor Control Center (MCC) & Power Control Center (PCC) | product |  | solutions.html → product detail template
https://bchindia.com/product/motors/ | Motors | product |  | motor-control.html → product detail template
https://bchindia.com/product/mpcb/ | MPCB – Motor Protection Circuit Breaker | product |  | motor-control.html → product detail template
https://bchindia.com/product/non-metallic-enclosure/ | Non Metallic Enclosure | product |  | enclosures.html → product detail template
https://bchindia.com/product/open-racks/ | Open Racks | product |  | enclosures.html → product detail template
https://bchindia.com/product/other-starter/ | Other Starter | product |  | motor-starters.html → product detail template
https://bchindia.com/product/overload-relay/ | Overload Relay - Manufacturer & Supplier India | product |  | motor-control.html → product detail template
https://bchindia.com/product/overload-relay/electronic-overload-relay/ | Electronic Overload Relay | product |  | motor-control.html → product detail template
https://bchindia.com/product/overload-relay/thermal-overload-relay/ | Thermal Overload Relay | product |  | motor-control.html → product detail template
https://bchindia.com/product/plugs-sockets/ | Industrial Plug & Socket | product |  | motor-control.html → product detail template
https://bchindia.com/product/plugs-sockets/bpx-range-plug-socket/ | BPX Range Plug Socket | product |  | motor-control.html → product detail template
https://bchindia.com/product/plugs-sockets/ds-decontactors-with-integral-switching-device/ | Ds Decontactors With Integral Switching Device | product |  | motor-control.html → product detail template
https://bchindia.com/product/plugs-sockets/heavy-duty-industrial-ps-ss-type/ | Heavy Duty Industrial Ps Ss Type | product |  | motor-control.html → product detail template
https://bchindia.com/product/plugs-sockets/metal-clad-plug-sockets/ | Metal Clad Plug Sockets | product |  | motor-control.html → product detail template
https://bchindia.com/product/plugs-sockets/plugs-sockets-ps-type/ | Plugs Sockets Ps Type | product |  | motor-control.html → product detail template
https://bchindia.com/product/pneumatic-timers/ | Pneumatic Timers | product |  | motor-control.html → product detail template
https://bchindia.com/product/power-factor-control/ | Power Factor Control | product |  | power-control.html → product detail template
https://bchindia.com/product/power-factor-control/apfc-relay/ | APFC Relay | product |  | power-control.html → product detail template
https://bchindia.com/product/power-factor-control/ipfc-relay/ | IPFC Relay | product |  | power-control.html → product detail template
https://bchindia.com/product/power-factor-control/network-analyser/ | Network Analyser | product |  | power-control.html → product detail template
https://bchindia.com/product/power-receptacles/ | Power Receptacles | product |  | solutions.html → product detail template
https://bchindia.com/product/punched-grid-resistors/ | Punched Grid Resistors | product |  | solutions.html → product detail template
https://bchindia.com/product/residual-current-circuit-breaker-rccb/ | RCCB (Residual Current Circuit Breaker) | product |  | power-control.html → product detail template
https://bchindia.com/product/sasd-starter/ | SASD Starter | product |  | motor-starters.html → product detail template
https://bchindia.com/product/sdf/ | SDF | product |  | power-control.html → product detail template
https://bchindia.com/product/single-door-bhartia-enclosure-2-0/ | Single Door Bhartia Enclosure 2 0 | product |  | enclosures.html → product detail template
https://bchindia.com/product/single-phase-submersible-pump-starter/ | Single Phase Submersible Pump Starter | product |  | motor-starters.html → product detail template
https://bchindia.com/product/solid-state-relay/ | Solid State Relay | product |  | motor-control.html → product detail template
https://bchindia.com/product/spares/ | Spares | product |  | motor-control.html → product detail template
https://bchindia.com/product/special-purpose-contactors/ | Special Purpose Contactors | product |  | motor-control.html → product detail template
https://bchindia.com/product/special-purpose-contactors/capacitor-switching-contactor/ | Capacitor Switching Contactor | product |  | motor-control.html → product detail template
https://bchindia.com/product/special-purpose-contactors/definite-purpose-contactor/ | Definite Purpose Contactor | product |  | motor-control.html → product detail template
https://bchindia.com/product/special-purpose-starter/ | Special Purpose Starter | product |  | motor-starters.html → product detail template
https://bchindia.com/product/stainless-steel-enclosures/ | Stainless Steel Enclosures | product |  | enclosures.html → product detail template
https://bchindia.com/product/star-delta-starter/ | Star Delta Starter | product |  | motor-starters.html → product detail template
https://bchindia.com/product/tce-series-floor-standing-enclosure/ | TCE Series Floor Standing Enclosure | product |  | enclosures.html → product detail template
https://bchindia.com/product/techno-modular-enclosure/ | Techno Modular Enclosure | product |  | enclosures.html → product detail template
https://bchindia.com/product/terminal-boxes-2-0/ | Terminal Boxes 2.0 | product |  | enclosures.html → product detail template
https://bchindia.com/product/terminal-boxes/ | Terminal Boxes | product |  | enclosures.html → product detail template
https://bchindia.com/product/ultra-powerair-circuit-breakers/ | Ultra Power Air Circuit Breakers | product |  | power-control.html + product-detail-acb.html (detail pattern)
https://bchindia.com/product/wires-cables/ | Wires & Cables | product |  | motor-control.html → product detail template
https://bchindia.com/product/wires-cables/3-core-flat-cable/ | 3 Core Flat Cable | product |  | motor-control.html → product detail template
https://bchindia.com/product/wires-cables/flame-retardant-fr-frls/ | Flame Retardant FR FRLS | product |  | motor-control.html → product detail template
https://bchindia.com/product/wires-cables/single-multi-core-pvc-flexible-cable/ | Single Multi Core PVC Flexible Cable | product |  | motor-control.html → product detail template

_Table rows: 469 (including 224 product URLs)._

## 3. Product taxonomy tree with leaf product URLs

Primary nav buckets map to WordPress `product_category` terms (32 in WP taxonomy sitemap). Nested `/product/.../...` URLs are parent hubs with child leaves. Bucket assignment is heuristic from URL path for wireframe mapping.

### Motor Starters & Submersible Pump Starters
- **Hub:** https://bchindia.com/product-category/pump-controller/
- **Related categories:**
  - Motor Starter Manufacturers & Suppliers in India — https://bchindia.com/product-category/motor-starter/
  - Submersible Pump Starters — https://bchindia.com/product-category/submersible-pump-starters/
  - Oil Immersed Starters — https://bchindia.com/product-category/oil-immersed-starters/
  - Special Purpose Starter — https://bchindia.com/product-category/special-purpose-starter/
  - Auto Transformer Starter — https://bchindia.com/product-category/auto-transformer-starter/
- **Wireframe absorb:** `motor-starters.html`
- **Products assigned to this bucket (17):**
  - **Auto Start DOL Starter** — https://bchindia.com/product/auto-start-dol-starter/
  - **Auto Transformer Starter** — https://bchindia.com/product/auto-transformer-starter/
  - **BK1 Starter** — https://bchindia.com/product/bk1starter/
    - B Timers — https://bchindia.com/product/bk1starter/btimers/
  - **DOL Starter** — https://bchindia.com/product/dol-starter/
  - **FASD Starter** — https://bchindia.com/product/fasd-starter/
  - **Industrial DOL** — https://bchindia.com/product/industrial-dol/
  - **Manual Star Delta Starter** — https://bchindia.com/product/manual-star-delta-starter/
  - **Mini Manual DOL Starter** — https://bchindia.com/product/mini-manual-dol-starter/
  - **Mini Manual with UVT Coil** — https://bchindia.com/product/mini-manual-with-uvt-coil/
  - **Other Starter** — https://bchindia.com/product/other-starter/
  - **SASD Starter** — https://bchindia.com/product/sasd-starter/
  - **Single Phase Submersible Pump Starter** — https://bchindia.com/product/single-phase-submersible-pump-starter/
  - **Special Purpose Starter** — https://bchindia.com/product/special-purpose-starter/
  - **Star Delta Starter** — https://bchindia.com/product/star-delta-starter/
  - DQR Plus Star Delta Timer — https://bchindia.com/product/automation/dqr-plus-star-delta-timer/
  - Soft Starters Asab Asac Series _(title from slug)_ — https://bchindia.com/product/automation/soft-starters-asab-asac-series/

### Industrial Products / Motor Control
- **Hub:** https://bchindia.com/product-category/industrial-products/
- **Related categories:**
  - Motor Control Products — https://bchindia.com/product-category/motor-control-products/
  - Other Industrial Products — https://bchindia.com/product-category/other-industrial-products/
  - Electronic Timer — https://bchindia.com/product-category/electronic-timer/
  - Plug In Relay — https://bchindia.com/product-category/plug-in-relay/
  - Spares — https://bchindia.com/product-category/spares/
- **Wireframe absorb:** `motor-control.html`
- **Products assigned to this bucket (56):**
  - **AC Solenoid & AC Brakes** — https://bchindia.com/product/ac-solenoid-ac-brakes/
  - **Automation** — https://bchindia.com/product/automation/
    - AC Drive Sinus M _(title from slug)_ — https://bchindia.com/product/automation/ac-drive-sinus-m/
    - AC Drive Sinus N _(title from slug)_ — https://bchindia.com/product/automation/ac-drive-sinus-n/
    - AC Drive Sinus Penta _(title from slug)_ — https://bchindia.com/product/automation/ac-drive-sinus-penta/
    - DC Drive Dcreg _(title from slug)_ — https://bchindia.com/product/automation/dc-drive-dcreg/
    - Electronic Timer -BTR 17 Series — https://bchindia.com/product/automation/electronic-timer-btr-17-series/
    - Plr Sr Series _(title from slug)_ — https://bchindia.com/product/automation/plr-sr-series/
    - Plug-In Relay – APA — https://bchindia.com/product/automation/plug-in-relay-apa/
    - Plug-In Relay – ASP — https://bchindia.com/product/automation/plug-in-relay-asp/
    - Sensors _(title from slug)_ — https://bchindia.com/product/automation/sensors/
  - **Bch Wireless Modem** _(title from slug)_ — https://bchindia.com/product/bch-wireless-modem/
  - **Contactor** — https://bchindia.com/product/contactor/
    - 4 Pole 2 Pole Contactors _(title from slug)_ — https://bchindia.com/product/contactor/4-pole-2-pole-contactors/
    - 2 Pole CPG Contactor _(title from slug)_ — https://bchindia.com/product/contactor/4-pole-2-pole-contactors/2-pole-cpg-contactor/
    - 2 Pole JPG Contactor _(title from slug)_ — https://bchindia.com/product/contactor/4-pole-2-pole-contactors/2-pole-jpg-contactor/
    - 4 Pole Contactor _(title from slug)_ — https://bchindia.com/product/contactor/4-pole-2-pole-contactors/4-pole-contactor/
    - Citation Contactors _(title from slug)_ — https://bchindia.com/product/contactor/citation-contactors/
    - Freedom Contactors _(title from slug)_ — https://bchindia.com/product/contactor/freedom-contactors/
  - **Control and Signalling Devices** — https://bchindia.com/product/control-and-signalling-devices/
    - Push Button Indicating Light _(title from slug)_ — https://bchindia.com/product/control-and-signalling-devices/push-button-indicating-light/
    - Push Button LED Indicating Light 22 5mm _(title from slug)_ — https://bchindia.com/product/control-and-signalling-devices/push-button-led-indicating-light-22-5mm/
  - **Control Relay & Accessories** — https://bchindia.com/product/control-relay-accessories/
    - Control Relay Freedom Series _(title from slug)_ — https://bchindia.com/product/control-relay-accessories/control-relay-freedom-series/
  - **DC Brakes** — https://bchindia.com/product/dc-brakes/
  - **DC Contactors** — https://bchindia.com/product/dc-contactors/
  - **Foot Switch** — https://bchindia.com/product/foot-switch/
    - FSG BSG Foot Switch _(title from slug)_ — https://bchindia.com/product/foot-switch/fsg-bsg-foot-switch/
    - FSG Foot Switch _(title from slug)_ — https://bchindia.com/product/foot-switch/fsg-foot-switch/
  - **Limit Switches** — https://bchindia.com/product/limit-switches/
    - General Purpose Limit Switch _(title from slug)_ — https://bchindia.com/product/limit-switches/general-purpose-limit-switch/
    - Heavy Duty Limit Switch NL Series _(title from slug)_ — https://bchindia.com/product/limit-switches/heavy-duty-limit-switch-nl-series/
    - Mini Limit Switch _(title from slug)_ — https://bchindia.com/product/limit-switches/mini-limit-switch/
    - Precision Limit Switch _(title from slug)_ — https://bchindia.com/product/limit-switches/precision-limit-switch/
  - **Mini Contactors** — https://bchindia.com/product/mini-contactors/
  - **Motors** — https://bchindia.com/product/motors/
  - **MPCB – Motor Protection Circuit Breaker** — https://bchindia.com/product/mpcb/
  - **Overload Relay - Manufacturer & Supplier India** — https://bchindia.com/product/overload-relay/
    - Electronic Overload Relay _(title from slug)_ — https://bchindia.com/product/overload-relay/electronic-overload-relay/
    - Thermal Overload Relay _(title from slug)_ — https://bchindia.com/product/overload-relay/thermal-overload-relay/
  - **Industrial Plug & Socket** — https://bchindia.com/product/plugs-sockets/
    - BPX Range Plug Socket _(title from slug)_ — https://bchindia.com/product/plugs-sockets/bpx-range-plug-socket/
    - Ds Decontactors With Integral Switching Device _(title from slug)_ — https://bchindia.com/product/plugs-sockets/ds-decontactors-with-integral-switching-device/
    - Heavy Duty Industrial Ps Ss Type _(title from slug)_ — https://bchindia.com/product/plugs-sockets/heavy-duty-industrial-ps-ss-type/
    - Metal Clad Plug Sockets _(title from slug)_ — https://bchindia.com/product/plugs-sockets/metal-clad-plug-sockets/
    - Plugs Sockets Ps Type _(title from slug)_ — https://bchindia.com/product/plugs-sockets/plugs-sockets-ps-type/
  - **Pneumatic Timers** — https://bchindia.com/product/pneumatic-timers/
  - **Solid State Relay** — https://bchindia.com/product/solid-state-relay/
  - **Spares** — https://bchindia.com/product/spares/
  - **Special Purpose Contactors** — https://bchindia.com/product/special-purpose-contactors/
    - Capacitor Switching Contactor _(title from slug)_ — https://bchindia.com/product/special-purpose-contactors/capacitor-switching-contactor/
    - Definite Purpose Contactor _(title from slug)_ — https://bchindia.com/product/special-purpose-contactors/definite-purpose-contactor/
  - **Wires & Cables** — https://bchindia.com/product/wires-cables/
    - 3 Core Flat Cable _(title from slug)_ — https://bchindia.com/product/wires-cables/3-core-flat-cable/
    - Flame Retardant FR FRLS _(title from slug)_ — https://bchindia.com/product/wires-cables/flame-retardant-fr-frls/
    - Single Multi Core PVC Flexible Cable _(title from slug)_ — https://bchindia.com/product/wires-cables/single-multi-core-pvc-flexible-cable/

### Power Control
- **Hub:** https://bchindia.com/product-category/power-control/
- **Related categories:**
  - Power Factor Management — https://bchindia.com/product-category/power-factor-management/
- **Wireframe absorb:** `power-control.html`
- **Products assigned to this bucket (15):**
  - **Air Circuit Breakers – ACB (Terasaki)** — https://bchindia.com/product/acb-terasaki/
  - **APFC Panels** — https://bchindia.com/product/apfc-panel/
  - **Power Capacitor** — https://bchindia.com/product/lt-capacitor/
  - **MCB Distribution Box** — https://bchindia.com/product/mcb-distribution-box/
  - **MCB (Miniature Circuit Breaker)** — https://bchindia.com/product/mcb/
  - **Moulded Case Circuit Breakers – MCCB (Terasaki)** — https://bchindia.com/product/mccb-terasaki/
  - **MCCB X – Range** — https://bchindia.com/product/mccb-x-range/
  - **MCCB - Manufacturer & Supplier in Faridabad** — https://bchindia.com/product/mccb/
  - **Power Factor Control** — https://bchindia.com/product/power-factor-control/
    - APFC Relay _(title from slug)_ — https://bchindia.com/product/power-factor-control/apfc-relay/
    - IPFC Relay _(title from slug)_ — https://bchindia.com/product/power-factor-control/ipfc-relay/
    - Network Analyser _(title from slug)_ — https://bchindia.com/product/power-factor-control/network-analyser/
  - **RCCB (Residual Current Circuit Breaker)** — https://bchindia.com/product/residual-current-circuit-breaker-rccb/
  - **SDF** — https://bchindia.com/product/sdf/
  - **Ultra Power Air Circuit Breakers** — https://bchindia.com/product/ultra-powerair-circuit-breakers/

### Enclosures
- **Hub:** https://bchindia.com/product-category/enclosure/
- **Related categories:**
  - Electrical Boxes — https://bchindia.com/product-category/wall-mounted-enclosures/
  - Modular Enclosures — https://bchindia.com/product-category/floor-mounted-enclosures/
  - Compartmentalized Enclosure — https://bchindia.com/product-category/compartmentalized-enclosure/
  - Control Desk Panel — https://bchindia.com/product-category/control-desk/
  - IT Racks | Server Racks — https://bchindia.com/product-category/it-racks/
  - Non Metallic Enclosure — https://bchindia.com/product-category/non-metallic-enclosure/
  - IP 55 Bhartia Enclosure — https://bchindia.com/product-category/ip-55-bhartia-enclosure/
  - Single Door Bhartia Enclosure 2 0 — https://bchindia.com/product-category/single-door-bhartia-enclosure-2-0/
  - Double Door Bhartia Enclosure 2 0 — https://bchindia.com/product-category/double-door-bhartia-enclosure-2-0/
  - Terminal 2 0 — https://bchindia.com/product-category/terminal-2-0/
- **Wireframe absorb:** `enclosures.html`
- **Products assigned to this bucket (130):**
  - **19” Networking Racks** — https://bchindia.com/product/19-networking-racks/
  - **19” Server Racks** — https://bchindia.com/product/19-server-racks/
  - **19” Wall Mount Racks** — https://bchindia.com/product/19-wall-mount-racks/
  - **Accessories 19” Racks** — https://bchindia.com/product/accessories-19-racks/
  - **Bhartia Enclosures 2.0** — https://bchindia.com/product/bhartia-enclosure-2-0/
  - **Bhartia Enclosures** — https://bchindia.com/product/bhartia-enclosures/
  - **BIL-30000-2** _(title from slug)_ — https://bchindia.com/product/bil-30000-2/
  - **BIL-30010** _(title from slug)_ — https://bchindia.com/product/bil-30010/
  - **BIL-30020** _(title from slug)_ — https://bchindia.com/product/bil-30020/
  - **BIL-30030** _(title from slug)_ — https://bchindia.com/product/bil-30030/
  - **BIL-30040** _(title from slug)_ — https://bchindia.com/product/bil-30040/
  - **BIL-30050** _(title from slug)_ — https://bchindia.com/product/bil-30050/
  - **BIL-30060** _(title from slug)_ — https://bchindia.com/product/bil-30060/
  - **BIL-30070** _(title from slug)_ — https://bchindia.com/product/bil-30070/
  - **BIL-30080** _(title from slug)_ — https://bchindia.com/product/bil-30080/
  - **BIL-30090** _(title from slug)_ — https://bchindia.com/product/bil-30090/
  - **BIL-30100** _(title from slug)_ — https://bchindia.com/product/bil-30100/
  - **BIL-30110** _(title from slug)_ — https://bchindia.com/product/bil-30110/
  - **BIL-30120** _(title from slug)_ — https://bchindia.com/product/bil-30120/
  - **BIL-30130** _(title from slug)_ — https://bchindia.com/product/bil-30130/
  - **BIL-30140** _(title from slug)_ — https://bchindia.com/product/bil-30140/
  - **BIL-30150** _(title from slug)_ — https://bchindia.com/product/bil-30150/
  - **BIL-30160** _(title from slug)_ — https://bchindia.com/product/bil-30160/
  - **BIL-30170** _(title from slug)_ — https://bchindia.com/product/bil-30170/
  - **BIL-30180** _(title from slug)_ — https://bchindia.com/product/bil-30180/
  - **BIL-30190** _(title from slug)_ — https://bchindia.com/product/bil-30190/
  - **BIL-30200** _(title from slug)_ — https://bchindia.com/product/bil-30200/
  - **BIL-30210** _(title from slug)_ — https://bchindia.com/product/bil-30210/
  - **BIL-40000** — https://bchindia.com/product/bil-40000/
  - **BIL-40010** _(title from slug)_ — https://bchindia.com/product/bil-40010/
  - **BIL-40020** _(title from slug)_ — https://bchindia.com/product/bil-40020/
  - **BIL-40030** _(title from slug)_ — https://bchindia.com/product/bil-40030/
  - **BIL-40040** _(title from slug)_ — https://bchindia.com/product/bil-40040/
  - **BIL-40050** _(title from slug)_ — https://bchindia.com/product/bil-40050/
  - **BIL-40060** _(title from slug)_ — https://bchindia.com/product/bil-40060/
  - **BIL-40070** _(title from slug)_ — https://bchindia.com/product/bil-40070/
  - **BIL-40080** _(title from slug)_ — https://bchindia.com/product/bil-40080/
  - **BIL-40090** _(title from slug)_ — https://bchindia.com/product/bil-40090/
  - **BIL-40100** _(title from slug)_ — https://bchindia.com/product/bil-40100/
  - **BIL-40110** _(title from slug)_ — https://bchindia.com/product/bil-40110/
  - **BIL-40120** _(title from slug)_ — https://bchindia.com/product/bil-40120/
  - **BIL-40140** _(title from slug)_ — https://bchindia.com/product/bil-40140/
  - **BIL-40150** _(title from slug)_ — https://bchindia.com/product/bil-40150/
  - **BIL-40160** _(title from slug)_ — https://bchindia.com/product/bil-40160/
  - **BIL-40170** _(title from slug)_ — https://bchindia.com/product/bil-40170/
  - **BIL-40180** _(title from slug)_ — https://bchindia.com/product/bil-40180/
  - **BIL-40190** _(title from slug)_ — https://bchindia.com/product/bil-40190/
  - **BIL-40200** _(title from slug)_ — https://bchindia.com/product/bil-40200/
  - **BIL-40210** _(title from slug)_ — https://bchindia.com/product/bil-40210/
  - **BIL-40220** _(title from slug)_ — https://bchindia.com/product/bil-40220/
  - **BIL-40230** _(title from slug)_ — https://bchindia.com/product/bil-40230/
  - **BIL-40240** _(title from slug)_ — https://bchindia.com/product/bil-40240/
  - **BIL-40250** _(title from slug)_ — https://bchindia.com/product/bil-40250/
  - **BIL-40260** _(title from slug)_ — https://bchindia.com/product/bil-40260/
  - **BIL-40270** _(title from slug)_ — https://bchindia.com/product/bil-40270/
  - **BIL-40280** _(title from slug)_ — https://bchindia.com/product/bil-40280/
  - **BIL-40290** _(title from slug)_ — https://bchindia.com/product/bil-40290/
  - **BIL-40300** _(title from slug)_ — https://bchindia.com/product/bil-40300/
  - **BIL-40310** _(title from slug)_ — https://bchindia.com/product/bil-40310/
  - **BIL-40320** _(title from slug)_ — https://bchindia.com/product/bil-40320/
  - **BIL-40330** _(title from slug)_ — https://bchindia.com/product/bil-40330/
  - **BIL-40340** _(title from slug)_ — https://bchindia.com/product/bil-40340/
  - **BIL-40350** _(title from slug)_ — https://bchindia.com/product/bil-40350/
  - **BIL-40360** _(title from slug)_ — https://bchindia.com/product/bil-40360/
  - **BIL-40370** _(title from slug)_ — https://bchindia.com/product/bil-40370/
  - **BIL-40380** _(title from slug)_ — https://bchindia.com/product/bil-40380/
  - **BIL-40390** _(title from slug)_ — https://bchindia.com/product/bil-40390/
  - **BIL-40400** _(title from slug)_ — https://bchindia.com/product/bil-40400/
  - **BIL-40410** _(title from slug)_ — https://bchindia.com/product/bil-40410/
  - **BIL-40420** _(title from slug)_ — https://bchindia.com/product/bil-40420/
  - **BIL-40430** _(title from slug)_ — https://bchindia.com/product/bil-40430/
  - **BIL-40440** _(title from slug)_ — https://bchindia.com/product/bil-40440/
  - **BIL-40450** _(title from slug)_ — https://bchindia.com/product/bil-40450/
  - **BIL-50000** _(title from slug)_ — https://bchindia.com/product/bil-50000/
  - **BIL-50010** _(title from slug)_ — https://bchindia.com/product/bil-50010/
  - **BIL-50020** _(title from slug)_ — https://bchindia.com/product/bil-50020/
  - **BIL-50030** _(title from slug)_ — https://bchindia.com/product/bil-50030/
  - **BIL-50050** _(title from slug)_ — https://bchindia.com/product/bil-50050/
  - **BIL-50060** _(title from slug)_ — https://bchindia.com/product/bil-50060/
  - **BIL-50080** _(title from slug)_ — https://bchindia.com/product/bil-50080/
  - **BIL-50090** _(title from slug)_ — https://bchindia.com/product/bil-50090/
  - **BIL-50110** _(title from slug)_ — https://bchindia.com/product/bil-50110/
  - **BIL-50120** _(title from slug)_ — https://bchindia.com/product/bil-50120/
  - **BIL-50140** _(title from slug)_ — https://bchindia.com/product/bil-50140/
  - **BIL-50150** _(title from slug)_ — https://bchindia.com/product/bil-50150/
  - **BIL-50170** _(title from slug)_ — https://bchindia.com/product/bil-50170/
  - **BIL-50180** _(title from slug)_ — https://bchindia.com/product/bil-50180/
  - **BIL-50190** _(title from slug)_ — https://bchindia.com/product/bil-50190/
  - **BIL-50210** _(title from slug)_ — https://bchindia.com/product/bil-50210/
  - **BIL-50220** _(title from slug)_ — https://bchindia.com/product/bil-50220/
  - **BIL-50230** _(title from slug)_ — https://bchindia.com/product/bil-50230/
  - **BIL-50240** _(title from slug)_ — https://bchindia.com/product/bil-50240/
  - **BIL-50250** _(title from slug)_ — https://bchindia.com/product/bil-50250/
  - **BIL-50260** _(title from slug)_ — https://bchindia.com/product/bil-50260/
  - **BIL-50270** _(title from slug)_ — https://bchindia.com/product/bil-50270/
  - **BIL-50280** _(title from slug)_ — https://bchindia.com/product/bil-50280/
  - **BIL-50290** _(title from slug)_ — https://bchindia.com/product/bil-50290/
  - **BIL-50300** _(title from slug)_ — https://bchindia.com/product/bil-50300/
  - **BIL-50310** _(title from slug)_ — https://bchindia.com/product/bil-50310/
  - **BIL-50320** _(title from slug)_ — https://bchindia.com/product/bil-50320/
  - **BIL-50330** _(title from slug)_ — https://bchindia.com/product/bil-50330/
  - **BIL-50340** _(title from slug)_ — https://bchindia.com/product/bil-50340/
  - **BIL-50350** _(title from slug)_ — https://bchindia.com/product/bil-50350/
  - **BIL-50360** _(title from slug)_ — https://bchindia.com/product/bil-50360/
  - **BIL-50390** _(title from slug)_ — https://bchindia.com/product/bil-50390/
  - **BIL-50395** _(title from slug)_ — https://bchindia.com/product/bil-50395/
  - **BIL-50500** _(title from slug)_ — https://bchindia.com/product/bil-50500/
  - **BIL-50520** _(title from slug)_ — https://bchindia.com/product/bil-50520/
  - **BIL-50540** _(title from slug)_ — https://bchindia.com/product/bil-50540/
  - **BIL-50550** _(title from slug)_ — https://bchindia.com/product/bil-50550/
  - **BIL-50560** _(title from slug)_ — https://bchindia.com/product/bil-50560/
  - **BIL-50570** _(title from slug)_ — https://bchindia.com/product/bil-50570/
  - **BIL-50580** _(title from slug)_ — https://bchindia.com/product/bil-50580/
  - **BIL-50590** _(title from slug)_ — https://bchindia.com/product/bil-50590/
  - **Compartmentalized Enclosures** — https://bchindia.com/product/compartmentalized-enclosure/
    - Draw Out – Compartmentalized Enclosure — https://bchindia.com/product/compartmentalized-enclosure/draw-out-compartmentalized-enclosure/
    - Fixed Type – Compartmentalized Enclosure — https://bchindia.com/product/compartmentalized-enclosure/fixed-type-compartmentalized-enclosure/
  - **Control Desk** — https://bchindia.com/product/control-desk/
  - **Double Door Bhartia Enclosure 2 0** _(title from slug)_ — https://bchindia.com/product/double-door-bhartia-enclosure-2-0/
  - **ETSI Racks** — https://bchindia.com/product/etsi-racks/
  - **IP 55 Bhartia Enclosure** — https://bchindia.com/product/ip-55-bhartia-enclosure/
  - **IP 66 Bhartia Enclosure** _(title from slug)_ — https://bchindia.com/product/ip-66-bhartia-enclosure/
  - **Non Metallic Enclosure** — https://bchindia.com/product/non-metallic-enclosure/
  - **Open Racks** — https://bchindia.com/product/open-racks/
  - **Single Door Bhartia Enclosure 2 0** _(title from slug)_ — https://bchindia.com/product/single-door-bhartia-enclosure-2-0/
  - **Stainless Steel Enclosures** — https://bchindia.com/product/stainless-steel-enclosures/
  - **TCE Series Floor Standing Enclosure** — https://bchindia.com/product/tce-series-floor-standing-enclosure/
  - **Techno Modular Enclosure** — https://bchindia.com/product/techno-modular-enclosure/
  - **Terminal Boxes 2.0** — https://bchindia.com/product/terminal-boxes-2-0/
  - **Terminal Boxes** — https://bchindia.com/product/terminal-boxes/

### Industrial Solutions
- **Hub:** https://bchindia.com/product-category/industrial-solutions/
- **Related categories:**
  - MCC, PCC & IMCC — https://bchindia.com/product-category/mcc-pcc-imcc/
  - Crane Control Panels — https://bchindia.com/product-category/crane-control-panels/
  - DC Starters | Motor Starter — https://bchindia.com/product-category/dc-starters/
  - Power Receptacles — https://bchindia.com/product-category/power-receptacles/
  - High Voltage Resistors — https://bchindia.com/product-category/resistors/
  - Bch Wireless Modem — https://bchindia.com/product-category/bch-wireless-modem/
- **Wireframe absorb:** `solutions.html`
- **Products assigned to this bucket (6):**
  - **AC Crane Control Panel** — https://bchindia.com/product/ac-crane-control-panel/
  - **DC Crane Control Panel** — https://bchindia.com/product/dc-crane-control-panel/
  - **DC Starters** — https://bchindia.com/product/dc-starters/
  - **Motor Control Center (MCC) & Power Control Center (PCC)** — https://bchindia.com/product/motor-control-center-power-control-center/
  - **Power Receptacles** — https://bchindia.com/product/power-receptacles/
  - **Punched Grid Resistors** — https://bchindia.com/product/punched-grid-resistors/

### Full category list (32 WP taxonomy terms)

- **Auto Transformer Starter** — https://bchindia.com/product-category/auto-transformer-starter/
- **Bch Wireless Modem** — https://bchindia.com/product-category/bch-wireless-modem/
- **Compartmentalized Enclosure** — https://bchindia.com/product-category/compartmentalized-enclosure/
- **Control Desk Panel** — https://bchindia.com/product-category/control-desk/
- **Crane Control Panels** — https://bchindia.com/product-category/crane-control-panels/
- **DC Starters | Motor Starter** — https://bchindia.com/product-category/dc-starters/
- **Double Door Bhartia Enclosure 2 0** — https://bchindia.com/product-category/double-door-bhartia-enclosure-2-0/
- **Electronic Timer** — https://bchindia.com/product-category/electronic-timer/
- **Enclosure** — https://bchindia.com/product-category/enclosure/
- **Modular Enclosures** — https://bchindia.com/product-category/floor-mounted-enclosures/
- **Industrial Products** — https://bchindia.com/product-category/industrial-products/
- **Industrial Solutions** — https://bchindia.com/product-category/industrial-solutions/
- **IP 55 Bhartia Enclosure** — https://bchindia.com/product-category/ip-55-bhartia-enclosure/
- **IT Racks | Server Racks** — https://bchindia.com/product-category/it-racks/
- **MCC, PCC & IMCC** — https://bchindia.com/product-category/mcc-pcc-imcc/
- **Motor Control Products** — https://bchindia.com/product-category/motor-control-products/
- **Motor Starter Manufacturers & Suppliers in India** — https://bchindia.com/product-category/motor-starter/
- **Non Metallic Enclosure** — https://bchindia.com/product-category/non-metallic-enclosure/
- **Oil Immersed Starters** — https://bchindia.com/product-category/oil-immersed-starters/
- **Other Industrial Products** — https://bchindia.com/product-category/other-industrial-products/
- **Plug In Relay** — https://bchindia.com/product-category/plug-in-relay/
- **Power Control Products** — https://bchindia.com/product-category/power-control/
- **Power Factor Management** — https://bchindia.com/product-category/power-factor-management/
- **Power Receptacles** — https://bchindia.com/product-category/power-receptacles/
- **Pump Controllers** — https://bchindia.com/product-category/pump-controller/
- **High Voltage Resistors** — https://bchindia.com/product-category/resistors/
- **Single Door Bhartia Enclosure 2 0** — https://bchindia.com/product-category/single-door-bhartia-enclosure-2-0/
- **Spares** — https://bchindia.com/product-category/spares/
- **Special Purpose Starter** — https://bchindia.com/product-category/special-purpose-starter/
- **Submersible Pump Starters** — https://bchindia.com/product-category/submersible-pump-starters/
- **Terminal 2 0** — https://bchindia.com/product-category/terminal-2-0/
- **Electrical Boxes** — https://bchindia.com/product-category/wall-mounted-enclosures/

**Note:** Many leaf URLs under `/product/bil-#####/` are enclosure drawing SKUs titled with the BIL code (confirmed on `/product/bil-40000/` → title `BIL-40000`).

## 4. Downloads & presentations (complete list with URLs)

### Download hub structure
- `/download/` — category hub (no direct PDF hrefs in HTML)
- https://bchindia.com/downloads/automation/ (9 files linked)
- https://bchindia.com/downloads/custom-build-products/ (3 files linked)
- https://bchindia.com/downloads/electronic-product/ (6 files linked)
- https://bchindia.com/downloads/industrial-enclosures-pdf-download/ (7 files linked)
- https://bchindia.com/downloads/industrial-products-pdf-download/ (18 files linked)
- https://bchindia.com/downloads/motor-control-products-3/ (7 files linked)
- https://bchindia.com/downloads/motor-starters-submersible-pump-starters/ (6 files linked)
- https://bchindia.com/downloads/motors/ ⚠️ EMPTY (0 file links)
- https://bchindia.com/downloads/new-product-catalogues/ (4 files linked)
- https://bchindia.com/downloads/power-control-products/ (7 files linked)
- https://bchindia.com/downloads/price-list/ (5 files linked)
- https://bchindia.com/downloads/product-profiles/ (2 files linked)
- https://bchindia.com/downloads/reactive-power-management/ ⚠️ EMPTY (0 file links)
- https://bchindia.com/downloads/wires-cables/ (3 files linked)

### Product catalogues / brochures / price lists / manuals

Filename | URL | Linked from
-------- | --- | -----------
ASAB-Soft-starter.pdf | https://bchindia.com/wp-content/uploads/2018/02/ASAB-Soft-starter.pdf | https://bchindia.com/downloads/automation/
ASAC-Softstarter.pdf | https://bchindia.com/wp-content/uploads/2018/02/ASAC-Softstarter.pdf | https://bchindia.com/downloads/automation/
ASP-series-_plug-in-relays-catalogue.pdf | https://bchindia.com/wp-content/uploads/2018/02/ASP-series-_plug-in-relays-catalogue.pdf | https://bchindia.com/downloads/automation/
Digital_DC_Drive_DCREG.pdf | https://bchindia.com/wp-content/uploads/2018/02/Digital_DC_Drive_DCREG.pdf | https://bchindia.com/downloads/automation/
ETIMER-SBT.pdf | https://bchindia.com/wp-content/uploads/2018/02/ETIMER-SBT.pdf | https://bchindia.com/downloads/automation/
IBT-TIMER.pdf | https://bchindia.com/wp-content/uploads/2018/02/IBT-TIMER.pdf | https://bchindia.com/downloads/automation/
SINUS_PENTA_AC-DRIVE.pdf | https://bchindia.com/wp-content/uploads/2018/02/SINUS_PENTA_AC-DRIVE.pdf | https://bchindia.com/downloads/automation/
Sinus_M_AC-DRIVE.pdf | https://bchindia.com/wp-content/uploads/2018/02/Sinus_M_AC-DRIVE.pdf | https://bchindia.com/downloads/automation/
e-Prox-sensors.pdf | https://bchindia.com/wp-content/uploads/2018/02/e-Prox-sensors.pdf | https://bchindia.com/downloads/automation/
Auto-Transformer-Starter.pdf | https://bchindia.com/wp-content/uploads/2018/02/Auto-Transformer-Starter.pdf | https://bchindia.com/downloads/custom-build-products/
Power-Receptales.pdf | https://bchindia.com/wp-content/uploads/2018/02/Power-Receptales.pdf | https://bchindia.com/downloads/custom-build-products/
Punched-Grid-Resistors.pdf | https://bchindia.com/wp-content/uploads/2018/02/Punched-Grid-Resistors.pdf | https://bchindia.com/downloads/custom-build-products/
 InteliApp_Software.zip | https://bchindia.com/downloads/electronics-products/ InteliApp_Software.zip | https://bchindia.com/downloads/electronic-product/
BOCR2.0_QRG.pdf | https://bchindia.com/downloads/electronics-products/BOCR2.0_QRG.pdf | https://bchindia.com/downloads/electronic-product/
BOCR4.0_C1_QRG.pdf | https://bchindia.com/downloads/electronics-products/BOCR4.0_C1_QRG.pdf | https://bchindia.com/downloads/electronic-product/
BOCR4.0_QRG.pdf | https://bchindia.com/downloads/electronics-products/BOCR4.0_QRG.pdf | https://bchindia.com/downloads/electronic-product/
Ipro_QRG.pdf | https://bchindia.com/downloads/electronics-products/Ipro_QRG.pdf | https://bchindia.com/downloads/electronic-product/
MCPlus_QRG.pdf | https://bchindia.com/downloads/electronics-products/MCPlus_QRG.pdf | https://bchindia.com/downloads/electronic-product/
BHARTIA-ENCLOSURE-2.O.pdf | https://bchindia.com/wp-content/uploads/2024/11/BHARTIA-ENCLOSURE-2.O.pdf | https://bchindia.com/downloads/industrial-enclosures-pdf-download/
Bhartia_Boxes_Catalogue-1.pdf | https://bchindia.com/wp-content/uploads/2017/08/Bhartia_Boxes_Catalogue-1.pdf | https://bchindia.com/downloads/industrial-enclosures-pdf-download/
MCC-Enclosure-Catalogue.pdf | https://bchindia.com/wp-content/uploads/2018/02/MCC-Enclosure-Catalogue.pdf | https://bchindia.com/downloads/industrial-enclosures-pdf-download/
Non-Metallic-Catalogue-2025.pdf | https://bchindia.com/wp-content/uploads/2018/02/Non-Metallic-Catalogue-2025.pdf | https://bchindia.com/downloads/industrial-enclosures-pdf-download/
TECHNO_IT_RACKS.pdf | https://bchindia.com/wp-content/uploads/2018/02/TECHNO_IT_RACKS.pdf | https://bchindia.com/downloads/industrial-enclosures-pdf-download/
TME-Catalogue.pdf | https://bchindia.com/wp-content/uploads/2017/08/TME-Catalogue.pdf | https://bchindia.com/downloads/industrial-enclosures-pdf-download/
tce-series-enclosure-catalogue-final-22.01.2026.pdf | https://bchindia.com/wp-content/uploads/2020/10/tce-series-enclosure-catalogue-final-22.01.2026.pdf | https://bchindia.com/downloads/industrial-enclosures-pdf-download/
AC-Solenoid-Solenoid-Brakes.pdf | https://bchindia.com/wp-content/uploads/2017/08/AC-Solenoid-Solenoid-Brakes.pdf | https://bchindia.com/downloads/industrial-products-pdf-download/
Capacitor-Duty-Contactor.pdf | https://bchindia.com/wp-content/uploads/2018/02/Capacitor-Duty-Contactor.pdf | https://bchindia.com/downloads/industrial-products-pdf-download/
DC-Mill-Duty-Contactors.pdf | https://bchindia.com/wp-content/uploads/2018/02/DC-Mill-Duty-Contactors.pdf | https://bchindia.com/downloads/industrial-products-pdf-download/
DC_Electromagnetic_Brakes.pdf | https://bchindia.com/wp-content/uploads/2018/02/DC_Electromagnetic_Brakes.pdf | https://bchindia.com/downloads/industrial-products-pdf-download/
DS-Decontactors-Plug-Sockets1.pdf | https://bchindia.com/wp-content/uploads/2017/08/DS-Decontactors-Plug-Sockets1.pdf | https://bchindia.com/downloads/industrial-products-pdf-download/
General-Purpose-Limit-Switch.pdf | https://bchindia.com/wp-content/uploads/2018/02/General-Purpose-Limit-Switch.pdf | https://bchindia.com/downloads/industrial-products-pdf-download/
Heavy-Duty-Foot-Switches.pdf | https://bchindia.com/wp-content/uploads/2018/02/Heavy-Duty-Foot-Switches.pdf | https://bchindia.com/downloads/industrial-products-pdf-download/
Heavy-Duty-Limit-Switch_NL-series.pdf | https://bchindia.com/wp-content/uploads/2018/02/Heavy-Duty-Limit-Switch_NL-series.pdf | https://bchindia.com/downloads/industrial-products-pdf-download/
Metal-Clad-Plug-Socket.pdf | https://bchindia.com/wp-content/uploads/2018/02/Metal-Clad-Plug-Socket.pdf | https://bchindia.com/downloads/industrial-products-pdf-download/
Mini-Limit-Switch.pdf | https://bchindia.com/wp-content/uploads/2018/02/Mini-Limit-Switch.pdf | https://bchindia.com/downloads/industrial-products-pdf-download/
Plug-Socket-PS-Type.pdf | https://bchindia.com/wp-content/uploads/2018/02/Plug-Socket-PS-Type.pdf | https://bchindia.com/downloads/industrial-products-pdf-download/
Power_Receptacles.pdf | https://bchindia.com/wp-content/uploads/2018/02/Power_Receptacles.pdf | https://bchindia.com/downloads/industrial-products-pdf-download/
Precision-Limit-Switch.pdf | https://bchindia.com/wp-content/uploads/2018/02/Precision-Limit-Switch.pdf | https://bchindia.com/downloads/industrial-products-pdf-download/
Punched_Grid_Resistors.pdf | https://bchindia.com/wp-content/uploads/2018/02/Punched_Grid_Resistors.pdf | https://bchindia.com/downloads/industrial-products-pdf-download/
Time-Delay-Relay-Pneumatic-Timer.pdf | https://bchindia.com/wp-content/uploads/2018/02/Time-Delay-Relay-Pneumatic-Timer.pdf | https://bchindia.com/downloads/industrial-products-pdf-download/
plug-socket-ss-type.pdf | https://bchindia.com/wp-content/uploads/2022/12/plug-socket-ss-type.pdf | https://bchindia.com/downloads/industrial-products-pdf-download/
product-profile-leaflet.pdf | https://bchindia.com/wp-content/uploads/2018/02/product-profile-leaflet.pdf | https://bchindia.com/downloads/industrial-products-pdf-download/
push-button-22.5mm.pdf | https://bchindia.com/wp-content/uploads/2018/02/push-button-22.5mm.pdf | https://bchindia.com/downloads/industrial-products-pdf-download/
BCH-MPCB-catalogue-MPE-series.pdf | https://bchindia.com/wp-content/uploads/2018/02/BCH-MPCB-catalogue-MPE-series.pdf | https://bchindia.com/downloads/motor-control-products-3/
BCH-MPCB-catalogue-MPH-series..pdf | https://bchindia.com/wp-content/uploads/2018/02/BCH-MPCB-catalogue-MPH-series..pdf | https://bchindia.com/downloads/motor-control-products-3/
BCH-MPCB-catalogue-MS32-series.pdf | https://bchindia.com/wp-content/uploads/2018/02/BCH-MPCB-catalogue-MS32-series.pdf | https://bchindia.com/downloads/motor-control-products-3/
Cap-Duty-Contactor.pdf | https://bchindia.com/wp-content/uploads/2018/02/Cap-Duty-Contactor.pdf | https://bchindia.com/downloads/motor-control-products-3/
EOCR-Catalogue.pdf | https://bchindia.com/wp-content/uploads/2018/02/EOCR-Catalogue.pdf | https://bchindia.com/downloads/motor-control-products-3/
Solid-state-relay.pdf | https://bchindia.com/wp-content/uploads/2018/02/Solid-state-relay.pdf | https://bchindia.com/downloads/motor-control-products-3/
Vacuum-Contactor-Catalogue.pdf | https://bchindia.com/wp-content/uploads/2018/02/Vacuum-Contactor-Catalogue.pdf | https://bchindia.com/downloads/motor-control-products-3/
BCH-Citation-starters.pdf | https://bchindia.com/wp-content/uploads/2018/02/BCH-Citation-starters.pdf | https://bchindia.com/downloads/motor-starters-submersible-pump-starters/
BCH_INDUSTRIAL-DOL.pdf | https://bchindia.com/wp-content/uploads/2018/02/BCH_INDUSTRIAL-DOL.pdf | https://bchindia.com/downloads/motor-starters-submersible-pump-starters/
BCH_SHAKTI-Starters.pdf | https://bchindia.com/wp-content/uploads/2018/02/BCH_SHAKTI-Starters.pdf | https://bchindia.com/downloads/motor-starters-submersible-pump-starters/
BK1-Starter.pdf | https://bchindia.com/wp-content/uploads/2018/02/BK1-Starter.pdf | https://bchindia.com/downloads/motor-starters-submersible-pump-starters/
Single-Phase_-Submersible-Pump-Starter.pdf | https://bchindia.com/wp-content/uploads/2018/02/Single-Phase_-Submersible-Pump-Starter.pdf | https://bchindia.com/downloads/motor-starters-submersible-pump-starters/
Three-Phase_-Submersible-Pump-Starter.pdf | https://bchindia.com/wp-content/uploads/2018/02/Three-Phase_-Submersible-Pump-Starter.pdf | https://bchindia.com/downloads/motor-starters-submersible-pump-starters/
al-limit-switch-catalogue.pdf | https://bchindia.com/wp-content/uploads/2025/02/al-limit-switch-catalogue.pdf | https://bchindia.com/downloads/new-product-catalogues/
bpx-series-plugs-socket.pdf | https://bchindia.com/wp-content/uploads/2025/02/bpx-series-plugs-socket.pdf | https://bchindia.com/downloads/new-product-catalogues/
control-signalling-devices-22.5mm.pdf | https://bchindia.com/wp-content/uploads/2025/02/control-signalling-devices-22.5mm.pdf | https://bchindia.com/downloads/new-product-catalogues/
fdp.pdf | https://bchindia.com/wp-content/uploads/2025/02/fdp.pdf | https://bchindia.com/downloads/new-product-catalogues/
ACB-Ultra-Power.pdf | https://bchindia.com/wp-content/uploads/2021/12/ACB-Ultra-Power.pdf | https://bchindia.com/downloads/power-control-products/
Distribution-box_Leaflet-1.pdf | https://bchindia.com/wp-content/uploads/2018/02/Distribution-box_Leaflet-1.pdf | https://bchindia.com/downloads/power-control-products/
MCB_Leaflet.pdf | https://bchindia.com/wp-content/uploads/2018/02/MCB_Leaflet.pdf | https://bchindia.com/downloads/power-control-products/
RCCB_Leaflet.pdf | https://bchindia.com/wp-content/uploads/2018/02/RCCB_Leaflet.pdf | https://bchindia.com/downloads/power-control-products/
Resilient-MCCB-Catalogue.pdf | https://bchindia.com/wp-content/uploads/2018/02/Resilient-MCCB-Catalogue.pdf | https://bchindia.com/downloads/power-control-products/
Tempower-2-ACB_Catalogue.pdf | https://bchindia.com/wp-content/uploads/2017/06/Tempower-2-ACB_Catalogue.pdf | https://bchindia.com/downloads/power-control-products/
ULTRA-POWER-ACB_USER-MANUAL.pdf | https://bchindia.com/wp-content/uploads/2022/04/ULTRA-POWER-ACB_USER-MANUAL.pdf | https://bchindia.com/downloads/power-control-products/
BCH_Enclosures_Price-list-_w.e.f.-17.04.2026.pdf | https://bchindia.com/wp-content/uploads/2026/04/BCH_Enclosures_Price-list-_w.e.f.-17.04.2026.pdf | https://bchindia.com/downloads/price-list/
BCH_Final-Dstribution-Products_Price-list_w.e.f.17.04.2026.pdf | https://bchindia.com/wp-content/uploads/2026/04/BCH_Final-Dstribution-Products_Price-list_w.e.f.17.04.2026.pdf | https://bchindia.com/downloads/price-list/
BCH_Low-Voltage-Switchgear-Products_Price-list_w.e.f.17.04.2026.pdf | https://bchindia.com/wp-content/uploads/2026/04/BCH_Low-Voltage-Switchgear-Products_Price-list_w.e.f.17.04.2026.pdf | https://bchindia.com/downloads/price-list/
BCH_Motor-Starters_Price-List_w.e.f.17.04.2026.-1.pdf | https://bchindia.com/wp-content/uploads/2026/04/BCH_Motor-Starters_Price-List_w.e.f.17.04.2026.-1.pdf | https://bchindia.com/downloads/price-list/
Motor-price-list-wef-09.03.2026.pdf | https://bchindia.com/wp-content/uploads/2018/04/Motor-price-list-wef-09.03.2026.pdf | https://bchindia.com/downloads/price-list/
Starter-Range_Multifold.pdf | https://bchindia.com/wp-content/uploads/2019/03/Starter-Range_Multifold.pdf | https://bchindia.com/downloads/product-profiles/
product-profile-leaflet-1.pdf | https://bchindia.com/wp-content/uploads/2019/03/product-profile-leaflet-1.pdf | https://bchindia.com/downloads/product-profiles/
BCH-Industrial-Cables-House-Wires-catalogue.pdf | https://bchindia.com/wp-content/uploads/2018/02/BCH-Industrial-Cables-House-Wires-catalogue.pdf | https://bchindia.com/downloads/wires-cables/
FRFRLSH_Wire_Leaflet.pdf | https://bchindia.com/wp-content/uploads/2018/02/FRFRLSH_Wire_Leaflet.pdf | https://bchindia.com/downloads/wires-cables/
Flat-cable-Leaflet.pdf | https://bchindia.com/wp-content/uploads/2018/02/Flat-cable-Leaflet.pdf | https://bchindia.com/downloads/wires-cables/

### Corporate / investor PDFs (linked from Company subsection)

Filename | URL | Linked from
-------- | --- | -----------
AGM-Notice-2021.pdf | https://bchindia.com/wp-content/uploads/2023/11/AGM-Notice-2021.pdf | https://bchindia.com/company/agm-notices/
AGM-Notice-2022.pdf | https://bchindia.com/wp-content/uploads/2023/11/AGM-Notice-2022.pdf | https://bchindia.com/company/agm-notices/
AGM-Notice-30.09.2023.pdf | https://bchindia.com/wp-content/uploads/2023/11/AGM-Notice-30.09.2023.pdf | https://bchindia.com/company/agm-notices/
EGM-NOTICE-2026.pdf | https://bchindia.com/wp-content/uploads/2026/06/EGM-NOTICE-2026.pdf | https://bchindia.com/company/agm-notices/
Notice-of-AGM-2024.pdf | https://bchindia.com/wp-content/uploads/2024/09/Notice-of-AGM-2024.pdf | https://bchindia.com/company/agm-notices/
Notice-of-AGM-2025.pdf | https://bchindia.com/wp-content/uploads/2025/10/Notice-of-AGM-2025.pdf | https://bchindia.com/company/agm-notices/
68b1869540988-1.pdf | https://bchindia.com/wp-content/uploads/2025/08/68b1869540988-1.pdf | https://bchindia.com/company/annual-reports/
Annual-Report-2020-2021.pdf | https://bchindia.com/wp-content/uploads/2023/11/Annual-Report-2020-2021.pdf | https://bchindia.com/company/annual-reports/
Annual-Report-2021-2022.pdf | https://bchindia.com/wp-content/uploads/2023/11/Annual-Report-2021-2022.pdf | https://bchindia.com/company/annual-reports/
Annual-Report-2022-2023.pdf | https://bchindia.com/wp-content/uploads/2023/11/Annual-Report-2022-2023.pdf | https://bchindia.com/company/annual-reports/
BCH_Standalone-FS-and-Audit-Report_March-2025.pdf | https://bchindia.com/wp-content/uploads/2026/04/BCH_Standalone-FS-and-Audit-Report_March-2025.pdf | https://bchindia.com/company/annual-reports/
MGT-7-2020-2021.pdf | https://bchindia.com/wp-content/uploads/2023/11/MGT-7-2020-2021.pdf | https://bchindia.com/company/annual-reports/
MGT-7-2021-2022.pdf | https://bchindia.com/wp-content/uploads/2023/11/MGT-7-2021-2022.pdf | https://bchindia.com/company/annual-reports/
MGT-7-2022-2023.pdf | https://bchindia.com/wp-content/uploads/2023/11/MGT-7-2022-2023.pdf | https://bchindia.com/company/annual-reports/
MGT-7-24-25.pdf | https://bchindia.com/wp-content/uploads/2026/04/MGT-7-24-25.pdf | https://bchindia.com/company/annual-reports/
MGT-9-2018-19.pdf | https://bchindia.com/wp-content/uploads/2023/11/MGT-9-2018-19.pdf | https://bchindia.com/company/annual-reports/
MGT-9-2019-20.pdf | https://bchindia.com/wp-content/uploads/2023/11/MGT-9-2019-20.pdf | https://bchindia.com/company/annual-reports/
MGT-9-2020-21.pdf | https://bchindia.com/wp-content/uploads/2023/11/MGT-9-2020-21.pdf | https://bchindia.com/company/annual-reports/
MGT-9-2021-22.pdf | https://bchindia.com/wp-content/uploads/2023/11/MGT-9-2021-22.pdf | https://bchindia.com/company/annual-reports/
MGT-9-2022-23.pdf | https://bchindia.com/wp-content/uploads/2023/11/MGT-9-2022-23.pdf | https://bchindia.com/company/annual-reports/
annual-report-2_11zon.pdf | https://bchindia.com/wp-content/uploads/2025/05/annual-report-2_11zon.pdf | https://bchindia.com/company/annual-reports/
Notice-09-09-2017.zip | https://bchindia.com/wp-content/uploads/2018/09/Notice-09-09-2017.zip | https://bchindia.com/company/investor-relation/
Notice-21-04-2018.zip | https://bchindia.com/wp-content/uploads/2018/09/Notice-21-04-2018.zip | https://bchindia.com/company/investor-relation/
Notice-on-13-sep-2018.zip | https://bchindia.com/wp-content/uploads/2019/06/Notice-on-13-sep-2018.zip | https://bchindia.com/company/investor-relation/
Notice-on-2-Feb-2019.zip | https://bchindia.com/wp-content/uploads/2019/06/Notice-on-2-Feb-2019.zip | https://bchindia.com/company/investor-relation/
Worksheet-in-Unclaimed-div-2010-11_-feb19.xls | https://bchindia.com/wp-content/uploads/2019/06/Worksheet-in-Unclaimed-div-2010-11_-feb19.xls | https://bchindia.com/company/investor-relation/
bchindia-exl.xlsx | https://bchindia.com/wp-content/uploads/2018/09/bchindia-exl.xlsx | https://bchindia.com/company/investor-relation/
RSC-4-Newspaper-Advertisement-English.pdf | https://bchindia.com/wp-content/uploads/2026/06/RSC-4-Newspaper-Advertisement-English.pdf | https://bchindia.com/company/public-notices/
RSC-4-Newspaper-Advertisement-Hindi.pdf | https://bchindia.com/wp-content/uploads/2026/06/RSC-4-Newspaper-Advertisement-Hindi.pdf | https://bchindia.com/company/public-notices/

_Total file links scraped: 106. Prior crawl list had 76 product-oriented URLs; live `/downloads/*` scrape + company pages yielded the table above (deduped)._

**Presentations (.ppt/.pptx):** none found as direct hrefs on download pages scraped.

## 5. Company subsection

| Page | URL | Notes | → Wireframe |
|------|-----|-------|-------------|
| Company overview | https://bchindia.com/company/ | About hub; heritage / JV history with Cutler-Hammer mentioned on site | about.html |
| Manufacturing | https://bchindia.com/company/manufacturing/ | Plants / manufacturing narrative | engineering.html (+ about.html for overview) |
| R&D and Quality Assurance | https://bchindia.com/company/rd-and-quality-assurance/ | Design, tool room, QA | engineering.html (+ about.html for overview) |
| CSR | https://bchindia.com/company/csr-2/ | CSR (slug csr-2) | about.html (CSR section) |
| Board of Directors | https://bchindia.com/company/board-of-directors/ | Leadership | about.html |
| Investor Relation | https://bchindia.com/company/investor-relation/ | Investor PDFs linked | about.html (Investors / governance subsection) or dedicated Investors area |
| Annual Reports | https://bchindia.com/company/annual-reports/ | Multiple annual report + MGT-9 PDFs | about.html (Investors / governance subsection) or dedicated Investors area |
| AGM Notices | https://bchindia.com/company/agm-notices/ | AGM/EGM notice PDFs | about.html (Investors / governance subsection) or dedicated Investors area |
| Public Notices | https://bchindia.com/company/public-notices/ | Public notice PDFs | about.html (Investors / governance subsection) or dedicated Investors area |
| Sales and Distribution | https://bchindia.com/company/sales-and-distribution/ | Network narrative | find-dealer.html |
| Vigil Mechanism | https://bchindia.com/company/vigil-mechanism/ | Governance / whistleblower | about.html (Investors / governance subsection) or dedicated Investors area |

- **Awards page:** **ABSENT** (no `/awards/` or similar in sitemaps).
- **Certificates:** `/certificate/` exists titled “Certificates & Compliance” but content flagged **coming soon**; no certificate PDFs linked.

## 6. Industries & applications served

### Industries
- Hub: `/industries/`
- **Agriculture Starters** — https://bchindia.com/industry/agriculture/
- **Mining Products - Manufacturer & Supplier India** — https://bchindia.com/industry/mining/
- **Railways Products** — https://bchindia.com/industry/railways/
- **Steel & Iron Industry Products** — https://bchindia.com/industry/steel/

### Applications
- Hub: `/applications/`
- **Detection & Sensing** — https://bchindia.com/application/detection-sensing/
- **Heavy Machinery Control** — https://bchindia.com/application/heavy-machinery-control/
- **Motor Control & Protection** — https://bchindia.com/application/motor-control-protection/
- **Power Control & Protection** — https://bchindia.com/application/power-control-protection/

## 7. Case studies / project stories

**ABSENT as a dedicated section.** No `/case-studies/`, `/case-study/`, or `/projects/` in sitemaps.

Closest proxies (not true case studies):
- News items mentioning customer seminars / demos (e.g. Hindalco Belur product demo, Shree Cement seminar, EESL seminar, Irrigation Dept Bazpur).
- These should be treated as Media/News, not Proof/Case Study library — rebuild should add a real Case Studies capability if strategy requires “Proof & Guarantee”.

## 8. Customer care / support / FAQ / contact / enquiry

| Page | URL | Notes | → Wireframe |
|------|-----|-------|-------------|
| Contact | `/contact/` | Contact form + country selector on home/contact | `contact.html` |
| Enquiry | `/enquiry/` | Enquiry form | `contact.html` |
| Thank You | `/thank-you/` | Form confirmation | `contact.html` (system) |
| Customer Care | `/customer-care/` | Support entry | `contact.html` (Support) |
| FAQs | `/faqs/` | FAQ page | `contact.html` or Support hub |
| Sales Offices | `/sales-offices/` | Branch/office locator content | `find-dealer.html` |
| Careers | `careers.bchindia.com` | **UNREACHABLE** | `careers.html` (rebuild) |
| Careers (path) | `/careers/` | **Redirects to homepage** | same |

**Phone / email (from homepage links):** tel `18001039262`, `01143673100`; mailto `marketing@bchindia.com`, `working@bchindia.com`.

**App:** Google Play — BCH Electric app (`com.bchelectric.bch`).

## 9. News & blog inventory

### Blog — 120 posts (+ hub `/blog/`)
Hub title: “Everything About the Electrical Industry”. Full list:

- [2026-08-12] Common 3-Core Flat Cable Failures in Borewells — https://bchindia.com/blogs/common-3-core-flat-cable-failures-in-borewells/
- [2026-08-12] 3-Core Flat Cable Size for Submersible Pumps — https://bchindia.com/blogs/3-core-flat-cable-size-for-submersible-pumps/
- [2026-08-12]  — https://bchindia.com/blogs/reversing-contactor-interlocking/
- [2026-08-10] 30 mA vs 100 mA vs 300 mA RCCB Selection: A Practical Guide — https://bchindia.com/blogs/30-ma-vs-100-ma-vs-300-ma-rccb-selection-a-practical-guide/
- [2026-07-29] MPCB Trip Settings and Contactor Coordination Guide — https://bchindia.com/blogs/mpcb-trip-settings-contactor-coordination/
- [2026-07-27] MPCB vs MCB vs Overload Relay for Motor Protection — https://bchindia.com/blogs/mpcb-vs-mcb-vs-overload-relay/
- [2026-07-27] How to Select an MPCB by Motor Current and Duty — https://bchindia.com/blogs/how-to-select-mpcb-for-motor/
- [2026-07-20] Limit Switches for Cranes, Conveyors and Hoists: Application Guide — https://bchindia.com/blogs/limit-switches-for-cranes-conveyors-and-hoists-application-guide/
- [2026-07-20] Limit Switch Wiring: NO, NC and Changeover Contact Examples — https://bchindia.com/blogs/limit-switch-wiring-no-nc-and-changeover-contact-examples/
- [2026-07-13] How to select kVAR capacitors for voltage, duty and APFC panel steps — https://bchindia.com/blogs/how-to-select-kvar-capacitors-for-voltage-duty-and-apfc-panel-steps/
- [2026-07-13] Enclosure sizing guide for electrical components, wiring space and future expansion — https://bchindia.com/blogs/enclosure-sizing-guide-for-electrical-components-wiring-space-and-future-expansion/
- [2026-07-08] DOL starter wiring diagram and sequence of operation explained — https://bchindia.com/blogs/dol-starter-wiring-diagram-and-sequence-of-operation-explained/
- [2026-07-07] DC contactor working principle: arc control, coils and main contacts — https://bchindia.com/blogs/dc-contactor-working-principle-arc-control-coils-and-main-contacts/
- [2026-07-04] APFC Panel Step Calculation: How to Prevent Under- and Over-Correction — https://bchindia.com/blogs/apfc-panel-step-calculation-how-to-prevent-under-and-over-correction/
- [2026-07-04] AC Solenoid Brake: Working Principle, Components and Industrial Applications — https://bchindia.com/blogs/blogs-ac-solenoid-brake-working-principle-components-industrial-applications/
- [2026-06-23] 2 pole contactor vs 4 pole contactor: key differences and uses — https://bchindia.com/blogs/blogs-2-pole-contactor-vs-4-pole-contactor/
- [2026-06-22] How to select a 2 pole contactor for heating, lighting and motor loads — https://bchindia.com/blogs/blogs-how-to-select-2-pole-contactor-for-different-loads/
- [2026-06-17] What is a 2 pole contactor? Working principle, wiring and applications — https://bchindia.com/blogs/what-is-a-2-pole-contactor-working-principle-wiring-and-applications/
- [2026-06-09] Overload Relay Setting Chart for Industrial Motors: FLA, Current Range & Trip Class Explained — https://bchindia.com/blogs/overload-relay-setting-chart-industrial-motors/
- [2026-06-09] Best Single Phase DOL Starter for Water Pumps: Features, Safety & Price Factors — https://bchindia.com/blogs/single-phase-dol-starter-for-water-pumps/
- [2026-05-25] How to Choose the Right Motor Starter for Different Motor Ratings — https://bchindia.com/blogs/how-to-choose-the-right-motor-starter-for-different-motor-ratings/
- [2026-05-25] How to Choose the Right Industrial Socket for Panels and Machines — https://bchindia.com/blogs/how-to-choose-the-right-industrial-socket-for-panels-and-machines/
- [2026-05-21] Best Industrial Plug and Socket Types for Harsh Environments — https://bchindia.com/blogs/best-industrial-plug-and-socket-types-for-harsh-environments/
- [2026-05-19] Solid State Relay vs Mechanical Relay: Which Is Better for Automation? — https://bchindia.com/blogs/solid-state-relay-vs-mechanical-relay-which-is-better-for-automation/
- [2026-05-15] Overload Relay Reset and Troubleshooting Guide for Industrial Motors — https://bchindia.com/blogs/overload-relay-reset-and-troubleshooting-guide-for-industrial-motors/
- [2026-05-15] KVAR Capacitors Explained for Industrial Power Systems — https://bchindia.com/blogs/kvar-capacitors-explained-for-industrial-power-systems/
- [2026-05-07] Top Features to Look for in Industrial Limit Switches — https://bchindia.com/blogs/top-features-to-look-for-in-industrial-limit-switches/
- [2026-05-07] Signs Your RCCB Needs Replacement — https://bchindia.com/blogs/signs-your-rccb-needs-replacement/
- [2026-04-29] Understanding IP Ratings in Electrical Enclosures (IP54, IP65, IP67) — https://bchindia.com/blogs/understanding-ip-ratings-in-electrical-enclosures-ip54-ip65-ip67/
- [2026-04-29] Single-Phase vs Three-Phase RCCB: Which One Do You Need? — https://bchindia.com/blogs/single-phase-vs-three-phase-rccb-which-one-do-you-need/
- [2026-04-16] How Motor Starters Work with Contactors and Overload Relays — https://bchindia.com/blogs/how-motor-starters-work-with-contactors-and-overload-relays/
- [2026-04-15] How to Choose the Right Electrical Enclosure for Your Application — https://bchindia.com/blogs/how-to-choose-the-right-electrical-enclosure-for-your-application/
- [2026-04-13] How to Calculate Required KVAR for Power Factor Correction — https://bchindia.com/blogs/how-to-calculate-required-kvar-for-power-factor-correction/
- [2026-04-07] MCB Installation Guide for Industrial and Commercial Panels — https://bchindia.com/blogs/mcb-installation-guide-for-industrial-and-commercial-panels/
- [2026-04-07] Best Overload Relays for Industrial Applications (2026 Guide) — https://bchindia.com/blogs/best-overload-relays-for-industrial-applications-2026-guide/
- [2026-03-24] How to Select MCCB for High Fault Level Industrial Systems — https://bchindia.com/blogs/how-to-select-mccb-for-high-fault-level-industrial-systems/
- [2026-03-24] How to Choose the Right Single Phase Starter for Your Motor — https://bchindia.com/blogs/how-to-choose-the-right-single-phase-starter-for-your-motor/
- [2026-03-18] Thermal vs Electronic Overload Relay: Which One Is Better? — https://bchindia.com/blogs/thermal-vs-electronic-overload-relay-which-one-is-better/
- [2026-03-18] Contactor Selection Guide for Industrial Motor Control — https://bchindia.com/blogs/contactor-selection-guide-for-industrial-motor-control/
- [2026-03-12] MCB Selection Guide: How to Choose the Right MCB for Your Electrical System — https://bchindia.com/blogs/mcb-selection-guide-how-to-choose-the-right-mcb-for-your-electrical-system/
- [2026-03-12] Complete Guide to Solid State Relays: Working, Types & Applications — https://bchindia.com/blogs/complete-guide-to-solid-state-relays-working-types-applications/
- [2026-03-06] How to Choose the Right Industrial Socket for Your Application — https://bchindia.com/blogs/how-to-choose-the-right-industrial-socket-for-your-application/
- [2026-03-06] 10 Common Industrial Problems Solved by Limit Switches — https://bchindia.com/blogs/10-common-industrial-problems-solved-by-limit-switches/
- [2026-02-26] Top MCB Features You Should Look for in 2026 — https://bchindia.com/blogs/top-mcb-features-you-should-look-for-in-2026/
- [2026-02-26] BCH India RCCB vs Other Brands: Detailed Comparison (2026 Guide) — https://bchindia.com/blogs/bch-india-rccb-vs-other-brands-detailed-comparison-2026-guide/
- [2026-02-16] MCB Distribution Box Maintenance Tips Every Electrician Should Know — https://bchindia.com/blogs/mcb-distribution-box-maintenance-tips-every-electrician-should-know/
- [2026-02-16] Best Limit Switches for Heavy-Duty Industrial Machines — https://bchindia.com/blogs/best-limit-switches-for-heavy-duty-industrial-machines/
- [2026-02-09] Top 10 Signs Your Facility Needs an APFC Panel — https://bchindia.com/blogs/top-10-signs-your-facility-needs-an-apfc-panel/
- [2026-02-09] How BCH India’s Overload Relays Improve Motor Safety & Efficiency — https://bchindia.com/blogs/how-bch-indias-overload-relays-improve-motor-safety-efficiency/
- [2026-02-04] Why Solid State Relays Are Replacing Mechanical Relays in Modern Factories — https://bchindia.com/blogs/why-solid-state-relays-are-replacing-mechanical-relays-in-modern-factories/
- [2026-02-04] How Smart MCBs Will Transform Electrical Safety — https://bchindia.com/blogs/how-smart-mcbs-will-transform-electrical-safety/
- [2026-01-27] How MCCBs Protect Electrical Systems from Overload & Short Circuit — https://bchindia.com/blogs/how-mccbs-protect-electrical-systems-from-overload-short-circuit/
- [2026-01-27] Guide to Selecting the Right Motor Starter for Your Load Requirements — https://bchindia.com/blogs/guide-to-selecting-the-right-motor-starter-for-your-load-requirements/
- [2026-01-23] Why BCH India Overload Relays Are Ideal for Your Industrial Needs — https://bchindia.com/blogs/why-bch-india-overload-relays-are-ideal-for-your-industrial-needs/
- [2026-01-23] BCH Electric Contactors vs Other Brands: Feature Comparison (Buyer-Friendly Guide) — https://bchindia.com/blogs/bch-electric-contactors-vs-other-brands-feature-comparison-buyer-friendly-guide/
- [2026-01-09] Why RCCB is Mandatory for Modern Electrical Installations? — https://bchindia.com/blogs/why-rccb-is-mandatory-for-modern-electrical-installations/
- [2026-01-09] How to Choose the Right 3-Core Flat Cable for Your Industrial Wiring Needs? — https://bchindia.com/blogs/how-to-choose-the-right-3-core-flat-cable-for-your-industrial-wiring-needs/
- [2026-01-03] What is Ics and Icu in MCCB? Simplified Explanation — https://bchindia.com/blogs/what-is-ics-and-icu-in-mccb-simplified-explanation/
- [2026-01-03] How to Choose the Right MCB for Home: 6A, 10A, 16A, 20A, 32A — https://bchindia.com/blogs/how-to-choose-the-right-mcb-for-home-6a-10a-16a-20a-32a/
- [2025-12-20] Importance of MCBs in Preventing Electrical Fires — https://bchindia.com/blogs/importance-of-mcbs-in-preventing-electrical-fires/
- [2025-12-20] Can RCCB Prevent Fire Hazards? — https://bchindia.com/blogs/can-rccb-prevent-fire-hazards/
- [2025-12-05] Short Circuit Protection with MCCBs: How It Works in Real Installations — https://bchindia.com/blogs/short-circuit-protection-with-mccbs-how-it-works-in-real-installations/
- [2025-12-05] RCCB Wiring Guidelines: Do’s & Don’ts for Electricians — https://bchindia.com/blogs/rccb-wiring-guidelines-dos-donts-for-electricians/
- [2025-11-26] Why Waterproof Enclosures Are Essential for Outdoor Applications — https://bchindia.com/blogs/why-waterproof-enclosures-are-essential-for-outdoor-applications/
- [2025-11-26] How to Prevent Overheating in Electrical Enclosures — https://bchindia.com/blogs/how-to-prevent-overheating-in-electrical-enclosures/
- [2025-11-22] RCCB Tripping Frequently? 10 Reasons Why & Solutions — https://bchindia.com/blogs/rccb-tripping-frequently-10-reasons-why-solutions/
- [2025-11-22] Most Common RCCB Problems and How to Fix Them — https://bchindia.com/blogs/most-common-rccb-problems-and-how-to-fix-them/
- [2025-11-14] Where Are Star-Delta Starters Used? Top Industry Applications — https://bchindia.com/blogs/where-are-star-delta-starters-used-top-industry-applications/
- [2025-11-14] Choosing Star-Delta Starter for Industrial Motors: A Buyer’s Guide — https://bchindia.com/blogs/choosing-star-delta-starter-for-industrial-motors-a-buyers-guide/
- [2025-10-30] The Role of Overload Relays in HVAC Systems — https://bchindia.com/blogs/role-of-overload-relays-in-hvac-systems/
- [2025-10-30] Causes of RCCB Tripping and How to Troubleshoot Them — https://bchindia.com/blogs/causes-of-rccb-tripping-and-how-to-troubleshoot-them/
- [2025-10-24] Why Custom-Built Enclosures Improve System Efficiency — https://bchindia.com/blogs/why-custom-built-enclosures-improve-system-efficiency/
- [2025-10-24] Why BCH Electric Is a Trusted Name in MCCB Manufacturing in India — https://bchindia.com/blogs/why-bch-electric-is-a-trusted-name-in-mccb-manufacturing-in-india/
- [2025-10-18] Why Quality Control Matters in Electrical Component Manufacturing — https://bchindia.com/blogs/why-quality-control-matters-in-electrical-component-manufacturing/
- [2025-10-18] Understanding Different Types of Electrical Switchgear and Their Applications — https://bchindia.com/blogs/understanding-different-types-of-electrical-switchgear-and-their-applications/
- [2025-10-14] Why Modern Home Needs an MCB Instead of Fuses — https://bchindia.com/blogs/why-modern-home-needs-an-mcb-instead-of-fuses/
- [2025-10-14] How MCBs Enhance Safety Compliance in Electrical Panels — https://bchindia.com/blogs/how-mcbs-enhance-safety-compliance-in-electrical-panels/
- [2025-10-10] Protection Devices Used in Star Delta Starter Circuits — https://bchindia.com/blogs/protection-devices-used-in-star-delta-starter-circuits/
- [2025-10-10] Advantages and Disadvantages of Star Delta Starter — https://bchindia.com/blogs/advantages-and-disadvantages-of-star-delta-starter/
- [2025-10-04] The Role of Motor Starters in Energy Efficiency and Cost Savings — https://bchindia.com/blogs/the-role-of-motor-starters-in-energy-efficiency-and-cost-savings/
- [2025-10-04] MCCB Applications Across Industries: From Homes to Heavy Industries — https://bchindia.com/blogs/mccb-applications-across-industries-from-homes-to-heavy-industries/
- [2025-09-26] Why Electrical Enclosure Ventilation Is Critical for Heat Management — https://bchindia.com/blogs/why-electrical-enclosure-ventilation-is-critical-for-heat-management/
- [2025-09-26] Smart RCCBs: The Next Big Step in Electrical Safety & Monitoring — https://bchindia.com/blogs/smart-rccbs-the-next-big-step-in-electrical-safety-monitoring/
- [2025-09-19] MCB vs Fuse: Which Is Better for Modern Electrical Systems? — https://bchindia.com/blogs/mcb-vs-fuse-which-is-better-for-modern-electrical-systems/
- [2025-09-19] How Limit Switches Improve Machine Safety and Reliability — https://bchindia.com/blogs/how-limit-switches-improve-machine-safety-and-reliability/
- [2025-09-12] Understanding Switching Devices: Relays, Contactors & Starters Compared — https://bchindia.com/blogs/relays-contactors-starters-comparison-bch-electric/
- [2025-09-12] Contactor Ratings Explained: AC1, AC3, AC4 Duty Cycles — https://bchindia.com/blogs/contactor-ratings-ac1-ac3-ac4-bch-electric/
- [2025-08-23] IP Ratings in Electrical Enclosures: Everything You Need to Know — https://bchindia.com/blogs/ip-ratings-in-electrical-enclosures-everything-you-need-to-know/
- [2025-08-23] Energy Efficiency and MCCBs: How Modern Breakers Reduce Power Losses — https://bchindia.com/blogs/energy-efficiency-and-mccbs/
- [2025-07-30] Why Starters are Essential for Motor Safety and Longevity — https://bchindia.com/blogs/why-starters-are-essential-for-motor-safety-and-longevity/
- [2025-07-30] How to Select the Right MCCB Based on Load and Application — https://bchindia.com/blogs/how-to-select-the-right-mccb-based-on-load-and-application/
- [2025-07-24] RCCB for Home vs. RCCB for Industry: What’s the Difference? — https://bchindia.com/blogs/rccb-for-home-vs-rccb-for-industry-whats-the-difference/
- [2025-05-30] Troubleshooting Common DOL Starter Issues: A Guide for Beginners — https://bchindia.com/blogs/troubleshooting-common-dol-starter-issues-a-guide-for-beginners/
- [2025-05-30] Top 5 Benefits of BCH India’s DOL Starter for Small Motors — https://bchindia.com/blogs/top-5-benefits-of-dol-starter-for-small-motors/
- [2025-05-03] What Are Limit Switches and How Do They Improve Industrial Automation? — https://bchindia.com/blogs/what-are-limit-switches-and-how-do-they-enhance-industrial-automation/
- [2025-03-15] Role of DOL Starters in Water Supply Management — https://bchindia.com/blogs/role-of-dol-starters-in-water-supply-management/
- [2025-03-04] Top 10 Industrial Sockets for Heavy-Duty Use — https://bchindia.com/blogs/top-10-industrial-sockets-for-heavy-duty-use/
- [2025-03-04] How to Install an MCB Distribution Box Safely: A Step-by-Step Guide — https://bchindia.com/blogs/how-to-install-an-mcb-distribution-box-safely-a-step-by-step-guide/
- [2025-02-12] Electrical Safety is Non-Negotiable: 10 Trusted RCCB Manufacturers for Uncompromising Protection — https://bchindia.com/blogs/10-trusted-rccb-manufacturers-for-uncompromising-protection/
- [2025-01-21] The 5 Most Popular Modular Enclosure Features — https://bchindia.com/blogs/the-5-most-popular-modular-enclosure-features/
- [2025-01-13] How to Choose Safe and Reliable Electronic Enclosures for a Hazardous Environment. — https://bchindia.com/blogs/how-to-choose-safe-and-reliable-electronic-enclosures-for-a-hazardous-environment/
- [2024-11-27] MCCB vs. Fused Switch: Which One Should You Choose for Your Electrical Panel? — https://bchindia.com/blogs/mccb-vs-fused-switch/
- [2024-11-14] Contactor vs. Relay: Key Differences and Applications in Electrical Systems — https://bchindia.com/blogs/contactor-vs-relay-key-differences-and-applications/
- [2024-10-23] Top 10 MCB Brands in India, 2024 — https://bchindia.com/blogs/top-10-mcb-brands-in-india/
- [2024-10-14] The Importance of RCCBs in Modern Electrical Systems — https://bchindia.com/blogs/importance-of-rccbs-in-modern-electrical-systems/
- [2024-09-25] The Latest Advancements in Motor Protection Circuit Breaker Technology — https://bchindia.com/blogs/the-latest-advancements-in-motor-protection-circuit-breaker-technology/
- [2024-09-19] MCB Guide From Overloads to Safety — https://bchindia.com/blogs/mcb-guide-from-overloads-to-safety/
- [2024-09-12] 4 Things to Consider When Selecting Your Outdoor Enclosure System — https://bchindia.com/blogs/4-things-to-consider-when-selecting-your-outdoor-enclosure-system/
- [2024-09-06] How to Choose the Right Electrical Enclosure For Your Needs — https://bchindia.com/blogs/how-to-choose-the-right-electrical-enclosure-for-your-needs/
- [2023-09-26] What Is a Solid State Relay? Working, Types, Advantages and Applications — https://bchindia.com/blogs/understanding-the-basics-what-is-a-solid-state-relay/
- [2021-04-27] Build APFC Panel with BCH Products — https://bchindia.com/blogs/build-apfc-panel-with-bch-products/
- [2020-04-05] How to Select Industrial Plugs and Sockets for Heavy-Duty Applications — https://bchindia.com/blogs/industrial-plugs-sockets/
- [2020-03-05] RCCB and MCB in Distribution Boards: Working, Differences and Selection — https://bchindia.com/blogs/rccb-as-incomer-working-ratings-wiring-mcb-difference/
- [2020-02-05] All About Limit Switches — https://bchindia.com/blogs/all-about-limit-switches/
- [2019-05-05] Growth in Customised Industrial Enclosures — https://bchindia.com/blogs/growth-in-customised-industrial-enclosures/
- [2019-02-10] What Is an MCB? Working, Types, Applications and Selection Guide — https://bchindia.com/blogs/mcb-working-and-selection-guide/
- [2018-11-05] Growth in Branded Customized Industrial Enclosures and Challenges…! — https://bchindia.com/blogs/growth-in-branded-customized-industrial-enclosures-and-challenges/
- [2018-10-05] Why You Should Choose the MCCB Carefully — https://bchindia.com/blogs/why-you-should-choose-the-mccb-carefully/
- [2018-09-05] Keep Your Electric System Secure — https://bchindia.com/blogs/keep-your-electric-system-secure/
- [2018-08-05] Stay Protected from Electrical Fires — https://bchindia.com/blogs/stay-protected-from-electrical-fires/

### News & Events — 24 posts (+ hub `/news-events/`)

- [2025-04-08] Surrender of Exemption & Dissolution of Cutler Hammer Provident Fund Trust — https://bchindia.com/news-and-events/surrender-of-exemption-dissolution-of-cutler-hammer-provident-fund-trust/
- [2024-07-04] Surrender of Cutler Hammer Provident Fund Trust and Transferring of PF Funds to EPFO – Latest Update — https://bchindia.com/news-and-events/surrender-of-cutler-hammer-provident-fund-trust-and-transferring-of-pf-funds-to-epfo/
- [2024-06-06] Surrender of “Cutler Hammer Provident Fund Trust” and Transferring of PF Funds to EPFO (Employees’ Provident Fund Organization) — https://bchindia.com/news-and-events/surrender-of-cutler-hammer-provident-fund-trust/
- [2024-05-24] BCH PARTICIPATED IN ELASIA 2024 EXHIBITION AT BANGALORE — https://bchindia.com/news-and-events/bch-participated-in-elasia-2024-exhibition-at-bangalore/
- [2020-11-06] Head Sales & Marketing, Mr. Kapil Grover interview to Industrial Product Finder ( IPF) magazine — https://bchindia.com/news-and-events/head-sales-marketing-mr-kapil-grover-interview-to-industrial-product-finder-ipf-magazine/
- [2020-11-06] BCH participated in ELECRAMA Exhibition, 2020 at Greater Noida, NCR, India — https://bchindia.com/news-and-events/bch-participated-in-elecrama-exhibition-2020-at-greater-noida-ncr-india/
- [2020-11-06] Pondicherry Industrial Expo : 31 May -02 June 2019 — https://bchindia.com/news-and-events/pondicherry-industrial-expo-31-may-02-june-2019/
- [2020-11-06] JAIPUR STONEMART, 2019 : 31 Jan- 3 Feb 2019 — https://bchindia.com/news-and-events/jaipur-stonemart-2019-31-jan-3-feb-2019/
- [2020-11-06] BCH Participated in Krishi Darshan Expo, 2018 at Hisar — https://bchindia.com/news-and-events/bch-participated-in-krishi-darshan-expo-2018-at-hisar/
- [2020-11-06] Speech delivered by Mr. O.P Bhartia, Chairman and Managing Director, BCH Electric Limited at Dealers meet held on 22-25 Oct, 2018 in Goa — https://bchindia.com/news-and-events/speech-delivered-by-mr-o-p-bhartia-chairman-and-managing-director-bch-electric-limited-at-dealers-meet-held-on-22-25-oct-2018-in-goa/
- [2020-11-06] Seminar for AK Automotive , Rohtak : August 2018 — https://bchindia.com/news-and-events/seminar-for-ak-automotive-rohtak-august-2018/
- [2020-11-06] Seminar for Shree Cement : July 2018 — https://bchindia.com/news-and-events/seminar-for-shree-cement-july-2018/
- [2020-11-06] Product Demo at Hindalco, Belur : June 2018 — https://bchindia.com/news-and-events/product-demo-at-hindalco-belur-june-2018/
- [2020-11-06] Seminar for EESL : 02 July 2018 — https://bchindia.com/news-and-events/seminar-for-eesl-02-july-2018/
- [2020-11-06] BCH Electric develops starter for Smart Farming — https://bchindia.com/news-and-events/bch-electric-develops-starter-for-smart-farming/
- [2020-11-06] Seminar for Irrigation department at Bazpur, Uttrakhand – May 18 — https://bchindia.com/news-and-events/seminar-for-irrigation-department-at-bazpur-uttrakhand-may-18/
- [2020-11-06] BCH Participation In Elecrama 2018 — https://bchindia.com/news-and-events/bch-participation-in-elecrama-2018/
- [2020-11-06] Seminar Gujarat at Customer Site — https://bchindia.com/news-and-events/seminar-gujarat-at-customer-site/
- [2020-11-06] RAOCAPS-All India Seminar by Mecon, Aug 2017 — https://bchindia.com/news-and-events/raocaps-all-india-seminar-by-mecon-aug-2017/
- [2020-11-06] Bhubaneswar Branch Opening, 2017 — https://bchindia.com/news-and-events/bhubaneswar-branch-opening-2017/
- [2020-11-06] Krishithon Expo 2016 — https://bchindia.com/news-and-events/krishithon-expo-2016/
- [2020-11-06] Krishi Darshan Expo 2016 — https://bchindia.com/news-and-events/krishi-darshan-expo-2016/
- [2020-11-06] EAPIC 2016 — https://bchindia.com/news-and-events/eapic-2016/
- [2020-11-06] BCH Electric opens new branch office at Dehradun — https://bchindia.com/news-and-events/bch-electric-opens-new-branch-office-at-dehradun/

**Note:** Several older event URLs also exist as top-level pages/posts (e.g. `/eapic-2016/`, `/bhubaneswar-branch-opening-2017/`) overlapping `/news-and-events/*` — treat as duplicates for IA.

## 10. Gaps vs a global brand site

| Capability | Current state |
|------------|---------------|
| Awards / recognition | **Missing** dedicated page |
| Case studies / project proof | **Missing** |
| Certificates library | Placeholder `/certificate/` “coming soon” |
| Careers | **Broken** (subdomain down; path redirects home) |
| Dealer / distributor portal | App + sales offices only; no logged-in dealer portal link found on homepage |
| Global / export narrative | Mentioned (“Global Presence”) on home but thin dedicated IA |
| Sustainability beyond CSR | Only `/company/csr-2/` |
| Media kit / brand assets | Not found |
| Technical download UX | Fragmented `/downloads/*`; two folders **empty** (motors, reactive power) |
| Spam/test pages live in WP | essay-writing, writemypapers, test/test3/test4/test-form — **must delete** |
| Product SEO titles | Many product CPT titles not exposed via public REST; BIL SKUs use code titles |
| Search | Ajax Search Lite present (product post type) |

## 11. Recommended wireframe IA mapping

Wireframe screens (from `/workspace/bch-wireframes/README.md`): `index.html`, `products.html`, `motor-starters.html`, `motor-control.html`, `power-control.html`, `enclosures.html`, `solutions.html`, `product-detail-acb.html`, `engineering.html`, `media.html`, `about.html`, `find-dealer.html`, `contact.html`, `careers.html`.

### Mapping rules (nothing lost)

| CURRENT | NEW wireframe home |
|---------|-------------------|
| `/` | `index.html` |
| `/products-and-solutions/` + all `product-category/*` | `products.html` + family pages below |
| Starters / pump controller categories & products | `motor-starters.html` |
| Contactors, relays, timers, limit switches, plugs, SSR, MPCB, spares, etc. | `motor-control.html` |
| ACB/MCCB/MCB/RCCB/SDF/DB/power factor products | `power-control.html` (+ `product-detail-acb.html` as detail pattern for Ultra Power ACB) |
| Enclosure categories, Bhartia, racks, desks, BIL drawing SKUs | `enclosures.html` |
| MCC/PCC/IMCC, crane panels, DC starters, receptacles, resistors + Industries + Applications hubs | `solutions.html` |
| Every `/product/*` leaf | Product detail template (ACB example already wired) under its family |
| `/download/`, `/downloads/*`, price lists, catalogues | Engineering / Resources library (attach to `engineering.html` + product detail downloads) |
| `/resources/`, `/ip-protection-categories-as-per-iec-60529/` | `engineering.html` |
| `/certificate/` | `engineering.html` or `about.html` Certificates (rebuild content — currently empty) |
| `/company/`, board, CSR | `about.html` |
| Manufacturing, R&D/QA | `engineering.html` (+ About deep links) |
| Investor / AGM / annual reports / public notices / vigil | About → Investors & Governance (new subsection; not in wireframe list yet — add or fold into `about.html`) |
| Sales & distribution, sales offices | `find-dealer.html` |
| Contact, enquiry, thank-you, customer care, FAQs | `contact.html` |
| Blog + news (+ legacy event posts) | `media.html` |
| Careers (dead) | `careers.html` |
| Privacy / terms / data privacy | Footer legal (keep) |
| Spam/test URLs | **Delete — do not map** |

### Suggested NEW pages not in current site (for rebuild, optional)
- Case Studies (gap fill for Proof positioning)
- Awards / Milestones
- Certificates library (replace coming-soon)
- Investors hub (group existing PDF pages)
- Support hub (FAQ + customer care + spares)

## External important links

- Facebook: https://www.facebook.com/bchelectric/
- LinkedIn: https://in.linkedin.com/company/bch-electric-ltd-faridabad
- YouTube sample: https://www.youtube.com/watch?v=Npp2sGDiNcY
- Google Play app: https://play.google.com/store/apps/details?id=com.bchelectric.bch&hl=en
- Careers subdomain: https://careers.bchindia.com/ — **unreachable at inventory time**

## Method notes / limitations

- Product CPT and `download_catalogues` / `industry` / `application` CPTs are **not** publicly exposed on WP REST (`/wp-json/wp/v2/product` → 404); titles for unscanned product leaves use slug humanization (flagged).
- Sampled product pages confirm real titles for hubs (Contactor, DOL Starter, MCB, MCCB, Ultra Power ACB, Limit Switches, Plugs & Sockets, Overload Relay, IP55 Bhartia, BIL-40000).
- PDF extraction is from HTML `href` on `/downloads/*` and company investor pages; JS-only assets would not appear (none obvious).
- Homepage has no `<footer>` element; footer links appear as additional `menu-item` blocks.

---
_JSON companion: `/workspace/bch-wireframes/current-site-inventory.json`_
