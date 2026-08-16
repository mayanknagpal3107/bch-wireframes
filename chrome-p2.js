Anwendungen",
        company: "Unternehmen",
        people: "Menschen &amp; News",
        featured: "Baureihe",
        featuredH: "Citation-Starter",
        featuredP: "Citation · 0.5–20 HP · 110–415 V. Produktdetail — keine Einzel-SKU.",
        allProducts: "Alle Produkte →",
        work: "Zusammenarbeit",
        workH: "Partner / Anfrage",
        workP: "Händler, Schaltanlagenbauer, OEMs — Last nennen, wir führen zur Tafel oder zur Baureihe.",
        partner: "Partner →",
        reach: "Kontakt",
        reachH: "Kontakt / Produkt prüfen",
        reachP: "Anfrage, Händler oder Echtheit — keine Preise auf der Site.",
        contact: "Kontakt →"
      },
      util: { selector: "Produktauswahl", dealer: "Händler finden", enquire: "Anfrage", support: "Service" },
      loc: {
        title: "Region und Sprache",
        country: "Region wählen",
        language: "Sprache wählen",
        confirm: "Auswahl bestätigen",
        close: "Schließen"
      },
      inquiryH2: "Lassen Sie uns prüfen, wie wir helfen können",
      inquiryLead: "Sagen Sie uns, was Sie brauchen. Wir melden uns.",
      searchPh: "KI fragen — Produkt, Einsatz, Baureihe…",
      searchAria: "KI-Produktsuche",
      searchBtn: "Fragen",
      chip: "Deutsch · Struktur",
      footerLine: "Industrie-Schaltgeräte seit 1965. Auswählen · Spezifizieren · Download · Anfragen.",
      download: "Download-Center",
      appAgri: "Landwirtschaft &amp; Pumpen",
      appMotor: "Motorsteuerung &amp; Schutz",
      appPower: "Niederspannungsschutz",
      appSense: "Erfassung &amp; Sensorik",
      appCrane: "Schwermaschinen &amp; Kran",
      appPanel: "Schaltanlagen"
    }
  };

  function ico(letters) {
    return '<span class="mega-ico" aria-hidden="true">' + letters + "</span>";
  }

  function l2(href, mark, label) {
    return (
      '<a class="mega-l2" href="' +
      href +
      '">' +
      ico(mark) +
      "<span>" +
      label +
      "</span></a>"
    );
  }

function productsMega() {
    var i18 = t();
    var m = i18.mega;
    return (
      '<div class="mega-inner">' +
      '<div class="mega-col">' +
      '<a class="mega-h" href="' + href("products/motor-starters.html") + '">' + m.starters + "</a>" +
      l2(href("products/motor-starters/citation-fasd-dol.html"), "CI", "Citation") +
      l2(href("products/motor-starters/citation-fasd-dol.html#dol"), "DO", "DOL") +
      l2(href("products/motor-starters/citation-fasd-dol.html#fasd"), "FA", "FASD / SASD") +
      l2(href("products/motor-starters/shakti.html"), "SH", "Shakti") +
      l2(href("products/motor-starters/submersible.html"), "SU", "Submersible") +
      l2(href("products/motor-starters/oil-immersed.html"), "OI", "Oil-immersed") +
      l2(href("products/motor-starters/ats.html"), "AT", "ATS") +
      l2(href("products/combo-kits.html"), "CK", "Combo kits") +
      "</div>" +
      '<div class="mega-col">' +
      '<a class="mega-h" href="' + href("products/motor-control.html") + '">' + m.control + "</a>" +
      l2(href("products/motor-control.html#contactors"), "CO", "Contactors") +
      l2(href("products/motor-control.html#mpcb"), "MP", "MPCB") +
      l2(href("products/motor-control.html#olr"), "OL", "OLR / EOCR") +
      l2(href("products/motor-control.html#limit"), "LS", "Limit switches") +
      "</div>" +
      '<div class="mega-col">' +
      '<a class="mega-h" href="' + href("products/enclosures.html") + '">' + m.enclosures + "</a>" +
      l2(href("products/enclosures.html#bhartia"), "B2", "Bhartia 2.0") +
      l2(href("products/enclosures.html#tce"), "TC", "TCE") +
      l2(href("products/enclosures.html#tme"), "TM", "TME") +
      "</div>" +
      '<div class="mega-col">' +
      '<a class="mega-h" href="' + href("products/power-control.html") + '">' + m.power + "</a>" +
      l2(href("products/power-control.html#acb"), "AC", "ACB") +
      l2(href("products/power-control.html#mccb"), "MC", "MCCB") +
      l2(href("products/power-control.html#mcb"), "MB", "MCB") +
      l2(href("products/power-control.html#rccb"), "RC", "RCCB") +
      l2(href("products/power-control.html#sdf"), "SD", "SDF") +
      l2(href("products/all.html"), "AL", m.allProducts) +
      "</div>" +
      "</div>"
    );
  }

function solutionsMega() {
    var i18 = t();
    var m = i18.mega;
    return (
      '<div class="mega-inner">' +
      '<div class="mega-col">' +
      '<a class="mega-h" href="' + href("solutions/custom-panels.html") + '">' + m.engineered + "</a>" +
      l2(href("solutions/custom-panels.html"), "MC", "MCC / PCC / IMCC") +
      l2(href("solutions/custom-panels.html#crane"), "CR", "Crane panels") +
      l2(href("solutions/custom-panels.html#apfc"), "AP", "APFC panels") +
      "</div>" +
      '<div class="mega-col">' +
      '<a class="mega-h" href="' + href("solutions/industries.html") + '">' + m.industries + "</a>" +
      l2(href("solutions/industries/agriculture.html"), "AG", "Agri") +
      l2(href("solutions/industries.html#steel"), "ST", "Steel") +
      l2(href("solutions/industries.html#rail"), "RA", "Rail") +
      l2(href("solutions/industries/mining.html"), "MI", "Mining") +
      "</div>" +
      '<div class="mega-col mega-col-wide">' +
      '<a class="mega-h" href="' + href("solutions/applications.html") + '">' + m.applications + "</a>" +
      l2(href("solutions/applications.html#agri"), "A1", i18.appAgri) +
      l2(href("solutions/applications.html#motor"), "A2", i18.appMotor) +
      l2(href("solutions/applications.html#power"), "A3", i18.appPower) +
      l2(href("solutions/applications.html#sense"), "A4", i18.appSense) +
      l2(href("solutions/applications.html#crane"), "A5", i18.appCrane) +
      l2(href("solutions/applications.html#panel"), "A6", i18.appPanel) +
      "</div>" +
      '<div class="mega-promo">' +
      '<span class="section-label">' + m.work + "</span>" +
      "<h3>Custom panels</h3>" +
      "<p>Not a standard panel SKU. Project-built MCC / PCC / IMCC, crane, APFC — Form 2–4B, kA/IP envelope. Enquire for a board.</p>" +
      '<a class="btn btn-fill" href="' + href("solutions/custom-panels.html") + '">Custom panels →</a>' +
      '<a class="mega-promo-link" href="' + href("solutions/partners.html") + '">' + m.partner + "</a>" +
      '<a class="mega-promo-link" href="' + href("contact/index.html") + '">' + i18.util.enquire + "</a>" +
      "</div>" +
      "</div>"
    );
  }

function aboutMega() {
    var m = t().mega;
    return (
      '<div class="mega-inner">' +
      '<div class="mega-col">' +
      '<a class="mega-h" href="' + href("company/about.html") + '">' + m.company + "</a>" +
      l2(href("company/about.html"), "AB", "About") +
      l2(href("company/leadership.html"), "LD", "Leadership") +
      l2(href("company/about.html#history"), "HI", "History") +
      l2(href("company/manufacturing.html"), "MF", "Manufacturing &amp; R&amp;D") +
      "</div>" +
      '<div class="mega-col">' +
      '<a class="mega-h" href="' + href("company/careers.html") + '">' + m.people + "</a>" +
      l2(href("company/careers.html"), "CA", "Careers") +
      l2(href("support/digital-ecosystem.html"), "DE", "Digital ecosystem") +
      l2(href("legal/dpdp.html"), "DP", "DPDP compliance") +
      "</div>" +
      "</div>"
    );
  }


  function resourcesMega() {
    return (
      '<div class="mega-inner">' +
      '<div class="mega-col">' +
      '<a class="mega-h" href="' + href("support/resources.html") + '">Insights</a>' +
      l2(href("blogs/index.html"), "BL", "Blog") +
      l2(href("company/news.html"), "NW", "News &amp; events") +
      l2(href("company/media.html"), "MD", "Media") +
      l2(href("solutions/case-studies.html"), "CS", "Case studies") +
      "</div>" +
      '<div class="mega-col">' +
      '<a class="mega-h" href="' + href("support/download-center.html") + '">Documents</a>' +
      l2(href("support/download-center.html"), "DL", "Download Center") +
      l2(href("company/annual-reports.html"), "AR", "Annual reports") +
      l2(href("company/agm-notices.html"), "AG", "AGM notices") +
      l2(href("company/public-notices.html"), "PN", "Public notices") +
      l2(href("company/investor.html"), "IR", "Investor relations") +
      "</div>" +
      '<div class="mega-promo">' +
      '<span class="section-label">Featured</span>' +
      "<h3>Pump-set starters in the field</h3>" +
      "<p>Wireframe example — duty, challenge, range. Not a named customer story.</p>" +
      '<a class="btn btn-fill" href="' + href("solutions/case-studies/pump-set-field.html") + '">Read case study →</a>' +
      '<a class="mega-promo-link" href="' + href("solutions/case-studies.html") + '">All case studies →</a>' +
      "</div>" +
      "</div>"
    );
  }

  function enhanceLogo(nav) {
    var logo = nav.querySelector(".nav-logo");
    if (!logo) return;
    if (!nav.querySelector(".nav-lockup")) {
      var lockup = document.createElement("div");
      lockup.className = "nav-lockup";
      logo.parentNode.insertBefore(lockup, logo);
      lockup.appendChild(logo);
      var tag = document.createElement("span");
      tag.className = "nav-tagline";
      tag.textContent = brandTagline();
      lockup.appendChild(tag);
    } else if (!nav.querySelector(".nav-tagline")) {
      var tEl = document.createElement("span");
      tEl.className = "nav-tagline";
      tEl.textContent = brandTagline();
      nav.querySelector(".nav-lockup").appendChild(tEl);
    }
  }

  function wrapMega(href, navKey, label, megaHtml, extraClass) {
    var item = document.createElement("div");
    item.className = "nav-item has-mega" + (extraClass ? " " + extraClass : "");
    item.setAttribute("data-mega", navKey);
    item.innerHTML =
      '<a href="' +
      href +
      '" data-nav="' +
      navKey +
      '" class="nav-trigger" aria-haspopup="true" aria-expanded="false">' +
      label +
      "</a>" +
      '<div class="mega" id="mega-' +
      navKey +
      '" hidden>' +
      megaHtml +
      "</div>";
    return item;
  }

  function enhanceNav(nav) {
    enhanceLogo(nav);
    var logo = nav.querySelector(".nav-logo");
    if (logo) logo.setAttribute("href", href("index.html"));
    var cta = nav.querySelector(".nav-cta");
    if (cta) {
      cta.setAttribute("href", href("contact/index.html"));
      cta.textContent = t().nav.contactUs || "Contact us";
    }
    nav.querySelectorAll("form.nav-search").forEach(function (f) {
      f.setAttribute("action", href("search.html"));
    });
    var links = nav.querySelector(".nav-links");
    if (!links) return;
    var labels = t().nav;
    links.innerHTML = "";
    links.setAttribute("data-mega-ready", "1");
    links.appendChild(wrapMega(href("products/index.html"), "products", labels.products, productsMega()));
    links.appendChild(wrapMega(href("solutions/index.html"), "solutions", labels.solutions, solutionsMega()));
    links.appendChild(wrapMega(href("company/about.html"), "company", labels.company, aboutMega()));
    links.appendChild(wrapMega(href("support/resources.html"), "resources", labels.resources || "Resources", resourcesMega()));
    bindMega(nav);
    markActive(nav);
    var qm = /(?:\?|&)mega=([a-z]+)/.exec(location.search || "");
    if (qm) {
      var force = nav.querySelector('[data-mega="' + qm[1] + '"]');
      if (force) openMega(nav, force);
    }
  }

  function closeAll(nav) {
    nav.querySelectorAll(".has-mega").forEach(function (item) {
      item.classList.remove("is-open");
      var trigger = item.querySelector(".nav-trigger");
      var mega = item.querySelector(".mega");
      if (trigger) trigger.setAttribute("aria-expanded", "false");
      if (mega) mega.hidden = true;
    });
    document.body.classList.remove("mega-open");
  }

  function openMega(nav, item) {
    nav.querySelectorAll(".has-mega").forEach(function (other) {
      if (other !== item) {
        other.classList.remove("is-open");
        var tEl = other.querySelector(".nav-trigger");
        var m = other.querySelector(".mega");
        if (tEl) tEl.setAttribute("aria-expanded", "false");
        if (m) m.hidden = true;
      }
    });
    item.classList.add("is-open");
    var trigger = item.querySelector(".nav-trigger");
    var mega = item.querySelector(".mega");
    if (trigger) trigger.setAttribute("aria-expanded", "true");
    if (mega) mega.hidden = false;
    document.body.classList.add("mega-open");
  }

  function isDesktop() {
    return window.matchMedia("(min-width: 961px)").matches;
  }

  function bindMega(nav) {
    var leaveTimer = null;
    nav.querySelectorAll(".has-mega").forEach(function (item) {
      var trigger = item.querySelector(".nav-trigger");
      item.addEventListener("mouseenter", function () {
        if (!isDesktop()) return;
        clearTimeout(leaveTimer);
        openMega(nav, item);
      });
      trigger.addEventListener("click", function (e) {
        if (isDesktop()) return;
        e.preventDefault();
        if (item.classList.contains("is-open")) closeAll(nav);
        else openMega(nav, item);
      });
    });
    if (nav.getAttribute("data-mega-bound") === "1") return;
    nav.setAttribute("data-mega-bound", "1");
    nav.addEventListener("mouseleave", function () {
      if (!isDesktop()) return;
      clearTimeout(leaveTimer);
      leaveTimer = setTimeout(function () {
        closeAll(nav);
      }, 160);
    });
    nav.addEventListener("mouseenter", function () {
      clearTimeout(leaveTimer);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeAll(nav);
    });
    document.addEventListener("click", function (e) {
      if (!nav.contains(e.target)) closeAll(nav);
    });
  }

  function markActive(nav) {
    var page = pageKey();
    var map = {
      home: null,
      products: "products",
      "all-products": "products",
      selector: "products",
      "motor-starters": "products",
      "motor-control": "products",
      "power-control": "products",
      enclosures: "products",
      "product-detail-starter": "products",
      "product-detail-acb": "products",
      "product-detail-enclosure": "products",
      "product-detail-panel": "products",
      solutions: "solutions",
      partners: "solutions",
      industries: "solutions",
      "industry-agriculture": "solutions",
      "industry-mining": "solutions",
      applications: "solutions",
      "case-studies": "resources",
      "case-study-post": "resources",
      support: null,
      downloads: "resources",
      faqs: null,
      "customer-care": null,
      "sales-offices": null,
      "find-dealer": null,
      "dealer-portal": null,
      resources: "resources",
      counterfeit: null,
      verify: null,
      about: "company",
      manufacturing: "company",
      rd: "company",
      csr: "company",
      certificates: "company",
      careers: "company",
      board: "company",
      investor: "resources",
      "annual-reports": "resources",
      "agm-notices": "resources",
      "public-notices": "resources",
      privacy: "company",
      terms: "company",
      "data-privacy": "company",
      dpdp: "company",
      engineering: "company",
      news: "resources",
      blog: "resources",
      media: "resources",
      "brand-media": "resources",
      inventory: "company",
      contact: null,
      enquire: null,
      search: null,
      "citation-fasd-dol": "products",
      "ultra-power-acb": "products",
      "bhartia-2": "products",
      "custom-panels": "solutions",
      "combo-kits": "products",
      "dealer-tools": null,
      "download-center": "resources",
      "find-a-dealer": null,
      "verify-product": null,
      "digital-ecosystem": "company",
      "report-counterfeit": null,
      research: "company",
      all: "products",
      "blog-post": "resources",
      "news-post": "resources",
      "media-post": "resources"
    };
    var navKey = map[page];
    if (!navKey) return;
    nav.querySelectorAll("[data-nav]").forEach(function (a) {
      if (a.getAttribute("data-nav") === navKey) a.classList.add("is-active");
    });
  }

  function globeSVG() {
    return (
      '<svg class="loc-globe" viewBox="0 0 16 16" width="14" height="14" aria-hidden="true">' +
      '<circle cx="8" cy="8" r="6.5" fill="none" stroke="currentColor" stroke-width="1.2"/>' +
      '<ellipse cx="8" cy="8" rx="2.8" ry="6.5" fill="none" stroke="currentColor" stroke-width="1"/>' +
      '<path d="M1.5 8h13M2.8 4.5h10.4M2.8 11.5h10.4" fill="none" stroke="currentColor" stroke-width="1"/>' +
      "</svg>"
    );
  }

  function locOptions(map, selected) {
    var html = "";
    Object.keys(map).forEach(function (code) {
      html +=
        '<option value="' +
        code +
        '"' +
        (code === selected ? " selected" : "") +
        ">" +
        map[code] +
        "</option>";
    });
    return html;
  }

  function locTriggerText(loc) {
    loc = normalizeLoc(loc);
    return COUNTRY_TRIGGER[loc.country] + " | " + LANG_CODE[loc.lang];
  }

  function locEls() {
    return {
      wrap: document.querySelector(".loc-wrap"),
      trigger: document.querySelector(".loc-trigger"),
      panel: document.getElementById("loc-panel"),
      dim: document.querySelector(".loc-dim")
    };
  }

  function syncLocCurrent(panel) {
    if (!panel) return;
    var countrySel = panel.querySelector("#loc-country");
    var langSel = panel.querySelector("#loc-lang");
    var countryEl = panel.querySelector(".loc-current-country");
    var langEl = panel.querySelector(".loc-current-lang");
    var country = countrySel ? countrySel.value : "in";
    var lang = langSel ? langSel.value : "en";
    if (countryEl) countryEl.textContent = COUNTRY_TRIGGER[country] || COUNTRY_TRIGGER.in;
    if (langEl) langEl.textContent = LANG_LABEL[lang] || LANG_LABEL.en;
  }

  function closeLoc() {
    var els = locEls();
    if (els.panel) {
      els.panel.hidden = true;
      els.panel.classL