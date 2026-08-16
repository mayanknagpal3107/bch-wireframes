# PDP vs PANEL — Information Architecture (benchmark study)

Refs studied
- C&S WiNtrip MCB & Isolator (catalogue product): https://cselectric.co.in/products-solutions/final-distribution-products/miniature-circuit-breakers/miniature-circuit-breakermcb/ — screenshot: `ref-cns-mcb.png`
- C&S Low Voltage Switchboards (engineered): https://cselectric.co.in/products-solutions/low-voltage-switchboards/
- Advance Panels — Motor Control Center (Drawout/Fixed/IMCC): https://www.advancepanels.com/lvsmotor.aspx
- Advance Switchgear Co. — PCC/MCC Panels: https://advanceswitchgear.com/product/pcc-mcc-panels/
- Siemens: siemens.com LV MCB deep pages 404 / SiePortal is a slow JS catalogue (SKU-table style, config manual PDFs) — not captured live; pattern noted from search results only.
- Precolight: no reachable site found (precolight.com does not resolve). Substituted Advance Switchgear.

Key finding: both are "product pages", but the **unit of sale differs** — a catalogue product sells a *range you pick a SKU from*; a panel sells a *capability envelope you enquire against*. That single difference drives every section.

---

## TEMPLATE A — CATALOGUE PRODUCT (MCB / MCCB / starter / contactor)
Section order as seen on C&S (and Siemens equivalent):

1. **Breadcrumb + range name** — Home / Products / Family / Sub-family / Range. Range name is a brand ("WiNtrip MCB & Isolator"), not a part number.
2. **Hero**: single product-family photo (1P/2P/3P/4P shot together) + standards strip directly under image ("Conforms to IS/IEC 60898-1, IS/IEC 60947-3").
3. **RANGE block — first, above features.** Specs stated as **spans, never one SKU**:
   - In: 0.5 A ~ 125 A (AC); 0.5 A ~ 63 A (DC)
   - Poles: 1P, 1P+N, 2P, 3P, 3P+N, 4P (DC: 1P, 2P)
   - Variant sub-block (Isolator: 25–125 A, 1P/2P/3P/4P)
4. **FEATURES** — 6–8 one-line bullets, technical not marketing: tripping curves B/C/D, breaking capacity 10 kA, IP20, trip-free + padlocking, low power consumption, current-limiting class 3.
5. **Tabs**: Presentation | Benefits | Contact Our Experts | Download. Long-form description lives in the tab, not the top of the page.
6. **Downloads** — catalogue/datasheet PDF (Siemens: config manual + selection tables).
7. **Related / siblings** — other ranges in the same family via left/side family nav.

Rules of the template
- Ratings are **ranges + option lists**; a single value only appears where it is a fixed class (10 kA, class 3, IP20).
- No pricing, no HP/kW chips, no project photos, no "capacity/ delivery" talk.
- CTA is soft: *Download* and *Contact our experts* — no quote form on the page.
- Standards + curve/kA are the trust signals.

---

## TEMPLATE B — PANEL / SWITCHBOARD (PCC, MCC/PMCC, IMCC, LT, VCB, APFC)
Section order as seen on Advance Panels + Advance Switchgear + C&S switchboards:

1. **Breadcrumb + panel-type name** — the type IS the product ("Motor Control Center (Drawout / Fixed Type / IMCC)", "PCC / MCC Panels").
2. **Wide hero banner** (application/industrial imagery) + panel photo — visual is a *cabinet in a plant*, not a component on white.
3. **Capability paragraph**: who it's for (industries, utilities, power plants, HVAC) + design standard + top-line kA. "In-house designed to IEC 61439-1/2 … short-circuit withstand up to 65 kA."
4. **Design & construction bullets** (the panel analogue of "features"): modular/foldable, single vs double front, fixed vs drawout, fully compartmentalised, standardised module/busbar/cable-alley sizes, interchangeable drawout modules with safety shutters, three positions (Test/Service/Isolation), self-aligning contacts, Cu or Al busbar, CRCA 14/16 SWG, powder coat.
5. **TECHNICAL ENVELOPE table** — the defining section. Not SKUs; *maxima and option sets*:
   - Main bus / incomer: up to 6300 A; drawout feeder max 630 A
   - Icw: 50 kA / 65 kA @ 415 V; Uimp up to 8 kV; 690 V AC; 50/60 Hz
   - **Form of internal separation: 3B / 4A / 4B** (C&S: up to Form 4B; fault level 65/80 kA)
   - IP 42/43/52/54/55 (standard 42, higher on request); IK10; pollution degree 3
   - Control voltage options 12/24/30/110/230 V AC/DC; neutral TPN 50% / FP 100%
   - Type-tested / PTTA status, seismic (IEEE 693 ZPA 0.5g, Zone V)
6. **Options / add-ons**: comms & IMCC (Ethernet, Profibus DP, Profinet, Modbus), SCADA/EMS, protection relays, gas flooding, space heaters, cable-alley lamps, top/bottom entry, Type-2 coordinated starters.
7. **Applications / sectors grid** — power & energy, pharma, water & sewage, oil & gas, paper, healthcare, commercial. (Catalogue PDPs don't have this.)
8. **Proof of delivery** — project photos, clientele/sector list, plant & capacity, counters (customers, engineers, ₹ crore orders executed, years), certificates/ISO, routine test & engineering-documentation (GA/SLD) promises.
9. **Hard enquiry CTA** — "Need the right panel for your project? Tell us your requirements and our experts will prepare a customised quotation" + GET IN TOUCH form, phone, WhatsApp, Download Catalogue.
10. **Related panel types** as siblings (PCC/MCC, LT, DB, VCB, VFD, AC drive, TTA).

---

## Delta summary (what changes A → B)
| Aspect | Catalogue product | Panel |
|---|---|---|
| Unit | SKU chosen from a range | Engineered assembly, made to spec |
| Numbers | In / poles / curve as spans, fixed kA | Envelope: max bus A, Icw kA, Form 3B/4A/4B, IP, Uimp |
| "Features" | Device features (curves, IP20, trip-free) | Construction & separation (drawout, compartmentalised, CRCA, busbar) |
| Selection aid | Rating & pole tables, curves | Configuration options + engineering docs, no chips |
| Proof | Standards + type test | Standards + type test **+ projects, clientele, plant, counters, certificates** |
| Imagery | Product on white | Cabinet in situ, factory floor, project sites |
| CTA | Download datasheet / contact expert | Enquiry / RFQ form for a quotation |
| Absent | project photos, sectors grid, RFQ | HP/kW chips, per-SKU part numbers, price/stock |

## Implications for BCH (no HTML edited)
- Keep two distinct templates; don't force panels into the MCB PDP shell.
- Catalogue PDP: lead with RANGE spans (In, poles, kA, curve) before prose; tabs for description/benefits/downloads.
- Panel page: lead with capability + envelope table (bus A, kA, **Form of separation**, IP), then options, then applications, then project proof, ending in an enquiry form. Drop HP/kW chips here — they belong to starters/DOL products, not to a switchboard.
