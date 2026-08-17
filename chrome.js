/* BCH Electric Wireframe — shared chrome: Siemens loc drawer, logo/tagline, Liberate mega nav, footer inquiry */
(function () {
  if (window.__BCH_CHROME__) return;
  window.__BCH_CHROME__ = true;

  function computeRoot() {
    var src = "";
    if (document.currentScript && document.currentScript.src) {
      src = document.currentScript.src;
    } else {
      var scripts = document.getElementsByTagName("script");
      for (var i = 0; i < scripts.length; i++) {
        if (scripts[i].src && /chrome\.js(\?|#|$)/.test(scripts[i].src)) {
          src = scripts[i].src;
          break;
        }
      }
    }
    if (src) return src.replace(/[^/]*chrome\.js(\?.*)?(#.*)?$/, "");
    return "";
  }
  var ROOT = computeRoot();
  window.__BCH_ROOT__ = ROOT;
  function href(path) {
    path = String(path || "").replace(/^\//, "");
    return ROOT + path;
  }



  var GATE_KEY = "bch-wf-desktop-ok";

  function isPhoneLike() {
    var ua = navigator.userAgent || "";
    var phoneUA = /iPhone|Android.+Mobile|webOS|BlackBerry|IEMobile|Opera Mini/i.test(ua)
      && !/iPad|Tablet|Nexus 7|Nexus 10/i.test(ua);
    var narrow = false;
    var noHover = false;
    try {
      narrow = window.matchMedia("(max-width: 768px)").matches;
      noHover = window.matchMedia("(hover: none)").matches;
    } catch (e) {}
    // Phones: mobile UA, or a narrow coarse screen. Desktop resized-narrow
    // still has hover, so DevTools/desktop windows are not blocked.
    return phoneUA || (narrow && noHover);
  }

  function injectGateStyles() {
    if (document.getElementById("bch-gate-css")) return;
    var s = document.createElement("style");
    s.id = "bch-gate-css";
    s.textContent = "html.bch-gate-lock,html.bch-gate-lock body{overflow:hidden!important}"
      + "#bch-desktop-gate{position:fixed;inset:0;z-index:10000;background:#111;color:#f4f4f4;"
      + "display:flex;align-items:center;justify-content:center;padding:28px 22px;"
      + "font-family:Helvetica Neue,Helvetica,Arial,Noto Sans Devanagari,system-ui,sans-serif}"
      + "#bch-desktop-gate .gate-card{max-width:28rem;width:100%;text-align:left;border:1px solid #333;"
      + "background:#1a1a1a;padding:28px 24px}"
      + "#bch-desktop-gate .gate-kicker{font-size:10px;letter-spacing:.16em;text-transform:uppercase;"
      + "color:#999;margin:0 0 12px}"
      + "#bch-desktop-gate h1{font-size:22px;font-weight:600;line-height:1.25;color:#fff;margin:0 0 12px}"
      + "#bch-desktop-gate p{color:#bbb;font-size:14px;line-height:1.5;margin:0 0 10px;max-width:none}"
      + "#bch-desktop-gate .gate-hi{color:#888;font-size:13px}"
      + "#bch-desktop-gate [data-gate-continue]{margin-top:20px;border:1px solid #f4f4f4;background:transparent;"
      + "color:#f4f4f4;padding:10px 16px;font-size:13px;letter-spacing:.04em}"
      + "#bch-desktop-gate [data-gate-continue]:hover,#bch-desktop-gate [data-gate-continue]:focus{"
      + "background:#f4f4f4;color:#111}";
    (document.head || document.documentElement).appendChild(s);
  }

  function showDesktopGate() {
    try { if (sessionStorage.getItem(GATE_KEY) === "1") return true; } catch (e) {}
    if (!isPhoneLike()) return true;
    if (document.getElementById("bch-desktop-gate")) return true;
    var host = document.body;
    if (!host) return false;
    injectGateStyles();
    document.documentElement.classList.add("bch-gate-lock");
    var el = document.createElement("div");
    el.id = "bch-desktop-gate";
    el.setAttribute("role", "dialog");
    el.setAttribute("aria-modal", "true");
    el.setAttribute("aria-labelledby", "bch-gate-title");
    el.innerHTML = '<div class="gate-card">'
      + '<p class="gate-kicker">Wireframe · Desktop only</p>'
      + '<h1 id="bch-gate-title">This wireframe is desktop-ready only</h1>'
      + '<p>Please open it on a desktop or laptop. The layout is not designed for phones.</p>'
      + '<p class="gate-hi">यह वायरफ्रेम डेस्कटॉप के लिए है। कृपया डेस्कटॉप पर खोलें।</p>'
      + '<button type="button" data-gate-continue>Continue anyway</button>'
      + "</div>";
    host.appendChild(el);
    var btn = el.querySelector("[data-gate-continue]");
    if (btn) {
      btn.addEventListener("click", function () {
        try { sessionStorage.setItem(GATE_KEY, "1"); } catch (e) {}
        el.remove();
        document.documentElement.classList.remove("bch-gate-lock");
      });
      setTimeout(function () { try { btn.focus(); } catch (e) {} }, 0);
    }
    return true;
  }

  if (!showDesktopGate()) {
    document.addEventListener("DOMContentLoaded", showDesktopGate);
  }

  var LOC_KEY = "bch-loc";
  var VIEW_KEY = "bch-view";
  var COUNTRIES = { in: 1, export: 1 };
  var LANGS = { en: 1, hi: 1 };
  var COUNTRY_TRIGGER = { in: "India", export: "Global (Export)" };
  var COUNTRY_OPTION = { in: "India", export: "Global (Export)" };
  var LANG_LABEL = { en: "English", hi: "हिंदी" };
  var LANG_CODE = { en: "EN", hi: "HI" };

  function pageKey() {
    var el = document.body && document.body.getAttribute("data-page");
    if (el) return el;
    var path = (location.pathname.split("/").pop() || "index.html").replace(/\.html?$/i, "");
    return path === "index" || path === "" ? "home" : path;
  }

  function defaultLoc() {
    return { country: "in", lang: "en" };
  }

  function normalizeLoc(obj) {
    var country = obj && obj.country;
    if (country === "de") country = "in"; /* Germany region retired */
    country = COUNTRIES[country] ? country : "in";
    var lang = obj && obj.lang;
    if (lang === "de") lang = "en";
    lang = LANGS[lang] ? lang : "en";
    return { country: country, lang: lang };
  }

  function locFromLegacyView(v) {
    if (v === "global") return { country: "export", lang: "en" };
    if (v === "hi") return { country: "in", lang: "hi" };
    if (v === "de") return { country: "in", lang: "en" }; /* DE retired */
    if (v === "en") return { country: "in", lang: "en" };
    return defaultLoc();
  }

  function deriveView(loc) {
    if (loc.country === "export") return "global";
    return loc.lang;
  }

  function getLoc() {
    try {
      var raw = localStorage.getItem(LOC_KEY);
      if (raw) {
        var parsed = JSON.parse(raw);
        if (parsed && typeof parsed === "object") return normalizeLoc(parsed);
      }
      var legacy = localStorage.getItem(VIEW_KEY);
      if (legacy) return locFromLegacyView(legacy);
    } catch (e) {}
    return defaultLoc();
  }

  function persistLoc(loc) {
    loc = normalizeLoc(loc);
    try {
      localStorage.setItem(LOC_KEY, JSON.stringify(loc));
      localStorage.setItem(VIEW_KEY, deriveView(loc));
    } catch (e) {}
    return loc;
  }

  function setLoc(loc) {
    persistLoc(loc);
    location.reload();
  }

  function brandTagline() {
    var loc = getLoc();
    if (loc.country === "export") return "Current and Beyond";
    if (loc.lang === "hi") return "हर हाल में";
    return "Har haal mein";
  }

  function applyTaglines() {
    var line = brandTagline();
    document.querySelectorAll(".nav-tagline, .footer-tagline").forEach(function (el) {
      el.textContent = line;
    });
  }

  function applyLoc(loc) {
    loc = normalizeLoc(loc);
    var html = document.documentElement;
    var lang = loc.lang === "hi" ? "hi" : "en";
    html.setAttribute("lang", lang);
    html.setAttribute("data-country", loc.country);
    html.setAttribute("data-lang", loc.lang);
    html.setAttribute("data-view", deriveView(loc));
  }

  function t() {
    var loc = getLoc();
    var base = I18N[loc.lang] || I18N.en;
    var i18 = {
      nav: base.nav,
      mega: base.mega,
      util: base.util,
      loc: base.loc,
      inquiryH2: base.inquiryH2,
      inquiryLead: base.inquiryLead,
      searchPh: base.searchPh,
      searchAria: base.searchAria,
      searchBtn: base.searchBtn,
      chip: base.chip,
      footerLine: base.footerLine,
      download: base.download,
      appAgri: base.appAgri,
      appMotor: base.appMotor,
      appPower: base.appPower,
      appSense: base.appSense,
      appCrane: base.appCrane,
      appPanel: base.appPanel
    };
    if (loc.country === "de") {
      i18.nav = I18N.de.nav;
      i18.mega = {
        starters: I18N.de.mega.starters,
        control: I18N.de.mega.control,
        enclosures: I18N.de.mega.enclosures,
        power: I18N.de.mega.power,
        engineered: base.mega.engineered,
        industries: base.mega.industries,
        applications: base.mega.applications,
        company: base.mega.company,
        people: base.mega.people,
        featured: base.mega.featured,
        featuredH: base.mega.featuredH,
        featuredP: base.mega.featuredP,
        allProducts: base.mega.allProducts,
        work: base.mega.work,
        workH: base.mega.workH,
        workP: base.mega.workP,
        partner: base.mega.partner,
        reach: base.mega.reach,
        reachH: base.mega.reachH,
        reachP: base.mega.reachP,
        contact: base.mega.contact
      };
    }
    if (loc.country === "export") {
      i18.mega = {
        starters: i18.mega.starters,
        control: i18.mega.control,
        enclosures: i18.mega.enclosures,
        power: i18.mega.power,
        engineered: i18.mega.engineered,
        industries: i18.mega.industries,
        applications: i18.mega.applications,
        company: i18.mega.company,
        people: i18.mega.people,
        featured: i18.mega.featured,
        featuredH: i18.mega.featuredH,
        featuredP: I18N.global.mega.featuredP,
        allProducts: i18.mega.allProducts,
        work: i18.mega.work,
        workH: i18.mega.workH,
        workP: i18.mega.workP,
        partner: i18.mega.partner,
        reach: i18.mega.reach,
        reachH: i18.mega.reachH,
        reachP: i18.mega.reachP,
        contact: i18.mega.contact
      };
      i18.inquiryLead = I18N.global.inquiryLead;
      i18.footerLine = I18N.global.footerLine;
    }
    return i18;
  }

  var I18N = {
    en: {
      nav: { products: "Products", solutions: "Solutions", support: "Support", company: "Company", contact: "Contact", resources: "Resources", contactUs: "Contact us" },
      mega: {
        starters: "Motor starters",
        control: "Motor control",
        enclosures: "Enclosures",
        power: "Power control",
        engineered: "Custom panels",
        industries: "Industries",
        applications: "Applications",
        company: "Company",
        people: "People & news",
        featured: "Featured product",
        featuredH: "Citation starters",
        featuredP: "Citation · 0.5–20 HP · 110–415 V. Product detail for the range — not a SKU.",
        allProducts: "All products →",
        work: "Work with us",
        workH: "Partner / Enquire",
        workP: "Dealers, panel builders, OEMs and export partners — tell us the duty.",
        partner: "Partner →",
        reach: "Reach us",
        reachH: "Contact / Verify product",
        reachP: "Enquire, find a dealer, or check authenticity — no prices on the site.",
        contact: "Contact →"
      },
      util: { selector: "Product selector", dealer: "Find a dealer", enquire: "Enquire", support: "Support" },
      loc: {
        title: "Region and language",
        country: "Select region",
        language: "Select language",
        confirm: "Confirm selection",
        close: "Close"
      },
      inquiryH2: "Let’s explore how we can help",
      inquiryLead: "Tell us what you need. We’ll get in touch.",
      searchPh: "Ask AI — product, duty, range…",
      searchAria: "AI product search",
      searchBtn: "Ask",
      chip: "English",
      footerLine: "Since 1965",
      download: "Download Center",
      appAgri: "Agriculture &amp; pump sets",
      appMotor: "Motor control &amp; protection",
      appPower: "Power control &amp; protection",
      appSense: "Detection &amp; sensing",
      appCrane: "Heavy machinery &amp; crane",
      appPanel: "Panel systems"
    },
    global: {
      nav: { products: "Products", solutions: "Solutions", support: "Support", company: "Company", contact: "Contact", resources: "Resources", contactUs: "Contact us" },
      mega: {
        starters: "Motor starters",
        control: "Motor control",
        enclosures: "Enclosures",
        power: "Power control",
        engineered: "Engineered",
        industries: "Industries",
        applications: "Applications",
        company: "Company",
        people: "People & news",
        featured: "Featured range",
        featuredH: "Citation starters",
        featuredP: "Citation · 0.5–20 HP · 110–415 V. Export: exports@bchindia.com.",
        allProducts: "All products →",
        work: "Work with us",
        workH: "Partner / Enquire",
        workP: "Dealers, panel builders, OEMs — tell us the duty, we route the board or the catalogue range.",
        partner: "Partner →",
        reach: "Reach us",
        reachH: "Contact / Verify product",
        reachP: "Enquire, find a dealer, or check authenticity — no prices on the site.",
        contact: "Contact →"
      },
      util: { selector: "Product selector", dealer: "Find a dealer", enquire: "Enquire", support: "Support" },
      loc: {
        title: "Region and language",
        country: "Select region",
        language: "Select language",
        confirm: "Confirm selection",
        close: "Close"
      },
      inquiryH2: "Let’s explore how we can help",
      inquiryLead: "Export and domestic enquiries. Export: exports@bchindia.com — no overseas branch list on this site.",
      searchPh: "Ask AI — product, duty, range…",
      searchAria: "AI product search",
      searchBtn: "Ask",
      chip: "Global (Export)",
      footerLine: "Since 1965",
      download: "Download Center",
      appAgri: "Agriculture &amp; pump sets",
      appMotor: "Motor control &amp; protection",
      appPower: "Power control &amp; protection",
      appSense: "Detection &amp; sensing",
      appCrane: "Heavy machinery &amp; crane",
      appPanel: "Panel systems"
    },
    hi: {
      nav: { products: "उत्पाद", solutions: "समाधान", support: "सहायता", company: "कंपनी", contact: "संपर्क", resources: "संसाधन", contactUs: "संपर्क करें" },
      mega: {
        starters: "मोटर स्टार्टर",
        control: "मोटर नियंत्रण",
        enclosures: "एनक्लोजर",
        power: "पावर नियंत्रण",
        engineered: "कस्टम पैनल",
        industries: "उद्योग",
        applications: "अनुप्रयोग",
        company: "कंपनी",
        people: "लोग और समाचार",
        featured: "विशेष रेंज",
        featuredH: "Citation स्टार्टर",
        featuredP: "Citation · 0.5–20 HP · 110–415 V। प्रोडक्ट डिटेल — एक SKU नहीं।",
        allProducts: "सभी उत्पाद →",
        work: "हमारे साथ काम करें",
        workH: "पार्टनर / पूछताछ",
        workP: "डीलर, पैनल बिल्डर, OEM — ड्यूटी बताएँ, हम बोर्ड या कैटलॉग रेंज रूट करते हैं।",
        partner: "पार्टनर →",
        reach: "संपर्क",
        reachH: "संपर्क / उत्पाद सत्यापन",
        reachP: "पूछताछ, डीलर, या प्रामाणिकता — साइट पर कीमत नहीं।",
        contact: "संपर्क →"
      },
      util: { selector: "उत्पाद चयनकर्ता", dealer: "डीलर खोजें", enquire: "पूछताछ", support: "सहायता" },
      loc: {
        title: "क्षेत्र और भाषा",
        country: "क्षेत्र चुनें",
        language: "भाषा चुनें",
        confirm: "चयन की पुष्टि करें",
        close: "बंद करें"
      },
      inquiryH2: "आइए देखें कि हम कैसे मदद कर सकते हैं",
      inquiryLead: "ज़रूरत बताएँ। हम संपर्क करेंगे।",
      searchPh: "AI से पूछें — उत्पाद, ड्यूटी, रेंज…",
      searchAria: "AI उत्पाद खोज",
      searchBtn: "पूछें",
      chip: "हिंदी दृश्य · wireframe",
      footerLine: "1965 से",
      download: "डाउनलोड केंद्र",
      appAgri: "कृषि और पंप सेट",
      appMotor: "मोटर नियंत्रण और सुरक्षा",
      appPower: "पावर नियंत्रण और सुरक्षा",
      appSense: "डिटेक्शन और सेंसिंग",
      appCrane: "हेवी मशीनरी और क्रेन",
      appPanel: "पैनल सिस्टम"
    },
    de: {
      nav: { products: "Produkte", solutions: "Lösungen", support: "Service", company: "Unternehmen", contact: "Kontakt", resources: "Ressourcen", contactUs: "Kontakt" },
      mega: {
        starters: "Motorstarter",
        control: "Motorsteuerung",
        enclosures: "Gehäuse",
        power: "Niederspannung",
        engineered: "Sonderanlagen",
        industries: "Branchen",
        applications: "Anwendungen",
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
      footerLine: "Seit 1965",
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
      '<a class="mega-h" href="' + href("company/index.html") + '">' + m.company + "</a>" +
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
      '<a class="mega-h" href="' + href("support/download-center.html") + '">Resources</a>' +
      l2(href("blogs/index.html"), "BL", "Blog") +
      l2(href("company/news.html"), "NW", "News &amp; events") +
      l2(href("company/media.html"), "MD", "Media") +
      l2(href("solutions/case-studies.html"), "CS", "Case studies") +
      l2(href("sitemap.html"), "SM", "Sitemap") +
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

  function ensureNavDrawer(nav) {
    if (!nav || nav.querySelector(".nav-drawer")) return;
    var links = nav.querySelector(".nav-links");
    var search = nav.querySelector("form.nav-search");
    var cta = nav.querySelector(".nav-cta");
    var toggle = nav.querySelector(".nav-toggle");
    if (!links) return;
    var drawer = document.createElement("div");
    drawer.className = "nav-drawer";
    drawer.id = "nav-drawer";
    if (cta) nav.insertBefore(drawer, cta);
    else if (toggle && toggle.nextSibling) nav.insertBefore(drawer, toggle.nextSibling);
    else nav.appendChild(drawer);
    drawer.appendChild(links);
    if (search) drawer.appendChild(search);
    if (cta && !drawer.querySelector(".nav-cta-drawer")) {
      var ctaClone = cta.cloneNode(true);
      ctaClone.classList.add("nav-cta-drawer");
      ctaClone.removeAttribute("id");
      drawer.appendChild(ctaClone);
    }
    if (toggle) {
      toggle.setAttribute("aria-controls", "nav-drawer");
      toggle.setAttribute("aria-expanded", "false");
    }
    ensureNavAiBtn(nav, toggle);
  }

  function ensureNavAiBtn(nav, toggle) {
    if (!nav || nav.querySelector(".nav-ai-btn")) return;
    var btn = document.createElement("button");
    btn.type = "button";
    btn.className = "nav-ai-btn";
    btn.setAttribute("aria-label", "Ask AI search");
    btn.innerHTML = '<span class="ask-mark" aria-hidden="true">AI</span>';
    if (toggle) nav.insertBefore(btn, toggle);
    else nav.appendChild(btn);
    btn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      if (typeof window.openAskBCH === "function") {
        window.openAskBCH();
        return;
      }
      var fab = document.getElementById("ask-bch-fab");
      if (fab) {
        fab.click();
        return;
      }
      location.href = href("search.html");
    });
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
    links.appendChild(wrapMega(href("company/index.html"), "company", labels.company, aboutMega()));
    links.appendChild(wrapMega(href("support/download-center.html"), "resources", labels.resources || "Resources", resourcesMega()));
    ensureNavDrawer(nav);
    var drawerCta = nav.querySelector(".nav-cta-drawer");
    if (drawerCta) {
      drawerCta.setAttribute("href", href("contact/index.html"));
      drawerCta.textContent = t().nav.contactUs || "Contact us";
    }
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
      company: "company",
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
      els.panel.classList.remove("is-open");
      els.panel.setAttribute("aria-hidden", "true");
    }
    if (els.dim) {
      els.dim.hidden = true;
      els.dim.classList.remove("is-open");
      els.dim.setAttribute("aria-hidden", "true");
    }
    if (els.trigger) els.trigger.setAttribute("aria-expanded", "false");
    document.documentElement.classList.remove("loc-open");
    document.body.classList.remove("loc-open");
  }

  function openLoc() {
    var els = locEls();
    var loc = getLoc();
    var panel = els.panel;
    if (!panel) return;
    var countrySel = panel.querySelector("#loc-country");
    var langSel = panel.querySelector("#loc-lang");
    if (countrySel) countrySel.value = loc.country;
    if (langSel) langSel.value = loc.lang;
    syncLocCurrent(panel);
    panel.hidden = false;
    panel.classList.add("is-open");
    panel.setAttribute("aria-hidden", "false");
    if (els.dim) {
      els.dim.hidden = false;
      els.dim.classList.add("is-open");
      els.dim.setAttribute("aria-hidden", "false");
    }
    if (els.trigger) els.trigger.setAttribute("aria-expanded", "true");
    document.documentElement.classList.add("loc-open");
    document.body.classList.add("loc-open");
    var closeBtn = panel.querySelector(".loc-close");
    if (closeBtn) closeBtn.focus();
  }

  function locPanelHTML(L, loc) {
    return (
      '<div class="loc-head">' +
      '<h3 id="loc-panel-title">' +
      L.title +
      "</h3>" +
      '<button type="button" class="loc-close" aria-label="' +
      L.close +
      '">✕</button>' +
      "</div>" +
      '<div class="loc-current">' +
      '<div class="loc-current-country">' +
      COUNTRY_TRIGGER[loc.country] +
      "</div>" +
      '<div class="loc-current-lang">' +
      LANG_LABEL[loc.lang] +
      "</div>" +
      "</div>" +
      '<label for="loc-country">' +
      L.country +
      "</label>" +
      '<select id="loc-country">' +
      locOptions(COUNTRY_OPTION, loc.country) +
      "</select>" +
      '<label for="loc-lang">' +
      L.language +
      "</label>" +
      '<select id="loc-lang">' +
      locOptions(LANG_LABEL, loc.lang) +
      "</select>" +
      '<button type="button" class="btn btn-fill loc-confirm">' +
      L.confirm +
      "</button>"
    );
  }

  function ensureLocOverlay(L, loc) {
    var dim = document.querySelector(".loc-dim");
    if (dim) dim.remove();
    dim = document.createElement("div");
    dim.className = "loc-dim";
    dim.hidden = true;
    dim.setAttribute("aria-hidden", "true");
    document.body.appendChild(dim);
    var panel = document.getElementById("loc-panel");
    if (panel) panel.remove();
    panel = document.createElement("div");
    panel.className = "loc-panel";
    panel.id = "loc-panel";
    panel.hidden = true;
    panel.setAttribute("role", "dialog");
    panel.setAttribute("aria-modal", "true");
    panel.setAttribute("aria-labelledby", "loc-panel-title");
    panel.setAttribute("aria-hidden", "true");
    panel.innerHTML = locPanelHTML(L, loc);
    document.body.appendChild(panel);
    return { dim: dim, panel: panel };
  }

  function enhanceUtilityBar() {
    var bar = document.querySelector(".utility-bar");
    if (!bar) return;
    var page = pageKey();
    var loc = getLoc();
    var i18 = t();
    var u = i18.util;
    var L = i18.loc || I18N.en.loc;
    var triggerText = locTriggerText(loc);
    function emph(key) {
      return page === key ? ' class="is-emph"' : "";
    }
    bar.innerHTML =
      '<div class="util-left">' +
      '<a href="' + href("products/selector.html") + '"' +
      emph("selector") +
      ">" +
      u.selector +
      "</a>" +
      '<a href="' + href("support/find-a-dealer.html") + '"' +
      emph("find-dealer") +
      ">" +
      u.dealer +
      "</a>" +
      '<a href="' + href("contact/index.html") + '"' +
      emph("contact") +
      ">" +
      u.enquire +
      "</a>" +
      "</div>" +
      '<div class="loc-wrap">' +
      '<a class="util-support" href="' + href("support/index.html") + '">' +
      (u.support || "Support") +
      "</a>" +
      '<button type="button" class="loc-trigger" aria-haspopup="dialog" aria-expanded="false" aria-controls="loc-panel" aria-label="' +
      L.title +
      ": " +
      triggerText +
      '">' +
      globeSVG() +
      '<span class="loc-label">' +
      triggerText +
      "</span>" +
      "</button>" +
      "</div>";

    var overlay = ensureLocOverlay(L, loc);
    var wrap = bar.querySelector(".loc-wrap");
    var trigger = wrap.querySelector(".loc-trigger");
    var panel = overlay.panel;
    var dim = overlay.dim;

    trigger.addEventListener("click", function (e) {
      e.stopPropagation();
      if (panel.hidden) openLoc();
      else closeLoc();
    });
    panel.querySelector(".loc-close").addEventListener("click", function (e) {
      e.stopPropagation();
      closeLoc();
    });
    panel.querySelector(".loc-confirm").addEventListener("click", function () {
      setLoc({
        country: panel.querySelector("#loc-country").value,
        lang: panel.querySelector("#loc-lang").value
      });
    });
    panel.querySelector("#loc-country").addEventListener("change", function () {
      syncLocCurrent(panel);
    });
    panel.querySelector("#loc-lang").addEventListener("change", function () {
      syncLocCurrent(panel);
    });
    panel.addEventListener("click", function (e) {
      e.stopPropagation();
    });
    dim.addEventListener("click", function () {
      closeLoc();
    });
    if (document.documentElement.getAttribute("data-loc-bound") === "1") return;
    document.documentElement.setAttribute("data-loc-bound", "1");
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeLoc();
    });
  }

  function enhanceSearch() {
    var i18 = t();
    document.querySelectorAll("form.nav-search").forEach(function (form) {
      form.setAttribute("action", href("search.html"));
      form.classList.add("is-ai");
      var inp = form.querySelector('input[type="search"]');
      var btn = form.querySelector('button[type="submit"]');
      var lab = form.querySelector("label");
      if (lab) lab.textContent = i18.searchAria;
      if (inp) {
        inp.setAttribute("placeholder", i18.searchPh);
        inp.setAttribute("aria-label", i18.searchAria);
        if (!form.querySelector(".ask-mark")) {
          var mark = document.createElement("span");
          mark.className = "ask-mark";
          mark.setAttribute("aria-hidden", "true");
          mark.textContent = "AI";
          form.insertBefore(mark, inp);
        }
      }
      if (btn) btn.textContent = i18.searchBtn;
    });
  }

  function removeViewChip() {
    document.querySelectorAll("[data-view-chip], .view-chip").forEach(function (el) {
      el.remove();
    });
  }

  function inquiryHTML() {
    var i18 = t();
    return (
      '<section class="inquiry-band" id="bch-inquiry" aria-label="Enquiry">' +
      '<div class="container">' +
      "<h2 data-inquiry-h2>" +
      i18.inquiryH2 +
      "</h2>" +
      '<p class="lead" data-inquiry-lead>' +
      i18.inquiryLead +
      "</p>" +
      '<form class="inquiry-form" data-wireframe-form data-inquiry-form novalidate>' +
      '<div class="form-grid inquiry-grid">' +
      '<div class="field"><label for="inq-first">First name *</label><input id="inq-first" name="first" type="text" required /></div>' +
      '<div class="field"><label for="inq-last">Last name *</label><input id="inq-last" name="last" type="text" required /></div>' +
      '<div class="field"><label for="inq-mobile">Mobile (optional, +91)</label><input id="inq-mobile" name="mobile" type="tel" placeholder="+91" /></div>' +
      '<div class="field"><label for="inq-email">Business email *</label><input id="inq-email" name="email" type="email" required /></div>' +
      '<div class="field"><label for="inq-company">Company name *</label><input id="inq-company" name="company" type="text" required /></div>' +
      '<div class="field"><label for="inq-role">I am a *</label>' +
      '<select id="inq-role" name="role" required>' +
      '<option value="">Select</option>' +
      "<option>Farmer</option>" +
      "<option>Electrician</option>" +
      "<option>Dealer</option>" +
      "<option>Panel builder</option>" +
      "<option>OEM</option>" +
      "<option>Other</option>" +
      "</select></div>" +
      '<div class="field"><label for="inq-country">Country *</label>' +
      '<select id="inq-country" name="country" required>' +
      '<option value="India" selected>India</option>' +
      "<option>United Arab Emirates</option>" +
      "<option>Saudi Arabia</option>" +
      "<option>Bangladesh</option>" +
      "<option>Nepal</option>" +
      "<option>Sri Lanka</option>" +
      "<option>Other</option>" +
      "</select></div>" +
      '<div class="field"><label for="inq-hear">How did you hear about us? *</label>' +
      '<select id="inq-hear" name="hear" required>' +
      "<option value=\"\">Select</option>" +
      "<option>Website</option>" +
      "<option>Dealer / partner</option>" +
      "<option>Exhibition</option>" +
      "<option>Search</option>" +
      "<option>Referral</option>" +
      "<option>Other</option>" +
      "</select></div>" +
      '<div class="field full"><label for="inq-looking">What are you looking for? *</label>' +
      '<select id="inq-looking" name="looking" required>' +
      "<option value=\"\">Select</option>" +
      "<option>Enquire</option>" +
      "<option>Datasheet</option>" +
      "<option>Dealer</option>" +
      "<option>Support</option>" +
      "<option>Other</option>" +
      "</select></div>" +
      '<div class="field full"><label for="inq-desc">Description</label><textarea id="inq-desc" name="description" placeholder="Duty, range, site — not a price request."></textarea></div>' +
      '<div class="field full"><label for="inq-file">Add attachment</label><input id="inq-file" name="file" type="file" /></div>' +
      "</div>" +
      '<div class="btn-row"><button type="submit" class="btn btn-fill">Submit →</button></div>' +
      '<div class="form-note inquiry-note" hidden></div>' +
      "</form>" +
      "</div>" +
      "</section>"
    );
  }


  function injectHelpline() {
    document.querySelectorAll(".site-helpline").forEach(function (el) {
      el.remove();
    });
  }

  function injectInquiry() {
    /* Global enquiry band retired — canonical form is contact/index.html. */
    document.querySelectorAll("#bch-inquiry, .inquiry-band").forEach(function (el) {
      el.remove();
    });
  }

  function unlinkVigil() {
    /* Vigil stays linked under Investor / governance — do not strip. */
  }


  function enhanceWfBanner() {
    var b = document.querySelector(".wf-banner");
    if (!b) return;
    if (b.querySelector('a[href*="sitemap"]')) return;
    b.appendChild(document.createTextNode(" · "));
    var a = document.createElement("a");
    a.href = href("sitemap.html");
    a.textContent = "Sitemap";
    a.style.color = "inherit";
    a.style.textDecoration = "underline";
    b.appendChild(a);
  }


  function injectIndustryHero() {
    var page = pageKey();
    var title = (document.body && document.body.getAttribute("data-page-title")) || "";
    var isIndustry = page === "industries" || page.indexOf("industry-") === 0;
    if (!isIndustry) return;
    var main = document.querySelector("main");
    if (!main || main.querySelector(".industry-load-photo")) return;
    var label = "Photo";
    if (page === "industries") label = "Photo · Industries";
    else if (page.indexOf("agriculture") !== -1) label = "Photo · Agriculture / field";
    else if (page.indexOf("mining") !== -1) label = "Photo · Mining / plant";
    else if (title) label = "Photo · " + title.replace(/^Industry\s+[—-]\s+/i, "");
    var hero = document.createElement("div");
    hero.className = "industry-load-photo";
    hero.setAttribute("aria-hidden", "true");
    hero.innerHTML = '<div class="ph">' + label + "</div>";
    main.insertBefore(hero, main.firstChild);
  }

  function enhanceFooter() {
    var i18 = t();
    document.querySelectorAll(".footer-brand").forEach(function (brand) {
      if (!brand.parentNode.querySelector(".footer-tagline")) {
        var tag = document.createElement("div");
        tag.className = "footer-tagline";
        tag.textContent = brandTagline();
        if (brand.nextSibling) brand.parentNode.insertBefore(tag, brand.nextSibling);
        else brand.parentNode.appendChild(tag);
      }
      var p = brand.parentNode.querySelector("p");
      if (p && i18.footerLine) p.textContent = i18.footerLine;
      if (!brand.parentNode.querySelector(".footer-social")) {
        var soc = document.createElement("div");
        soc.className = "footer-social";
        soc.setAttribute("aria-label", "BCH on social");
        soc.innerHTML =
          '<a href="https://www.linkedin.com/company/bch-electric-ltd-faridabad" target="_blank" rel="noopener">LinkedIn</a>' +
          '<a href="https://www.instagram.com/bchelectric/" target="_blank" rel="noopener">Instagram</a>' +
          '<a href="https://wa.me/9118001039262" target="_blank" rel="noopener">WhatsApp</a>';
        brand.parentNode.appendChild(soc);
      }
    });
    var grid = document.querySelector(".footer-grid");
    if (grid) {
      var brandBlock = grid.children[0] ? grid.children[0].outerHTML : "";
      grid.innerHTML =
        brandBlock +
        '<div class="footer-col"><h5 data-en="Products">' + (i18.nav.products || "Products") + "</h5>" +
        '<a href="' + href("products/motor-starters.html") + '">Motor starters</a>' +
        '<a href="' + href("products/motor-control.html") + '">Industrial products</a>' +
        '<a href="' + href("products/enclosures.html") + '">Industrial enclosures</a>' +
        '<a href="' + href("solutions/custom-panels.html") + '">Industrial solutions</a>' +
        "</div>" +
        '<div class="footer-col"><h5 data-en="Solutions">' + (i18.nav.solutions || "Solutions") + "</h5>" +
        '<a href="' + href("solutions/index.html") + '">Solutions hub</a>' +
        '<a href="' + href("solutions/applications.html") + '">Applications</a>' +
        '<a href="' + href("solutions/custom-panels.html") + '">Custom panels</a>' +
        '<a href="' + href("solutions/industries.html") + '">Industries</a>' +
        '<a href="' + href("solutions/partners.html") + '">Partners</a>' +
        '<a href="' + href("solutions/case-studies.html") + '">Case studies</a>' +
        "</div>" +
        '<div class="footer-col"><h5 data-en="Support">' + (i18.nav.support || "Support") + "</h5>" +
        '<a href="' + href("support/index.html") + '">Support hub</a>' +
        '<a href="' + href("support/find-a-dealer.html") + '">Find a dealer</a>' +
        '<a href="' + href("support/verify-product.html") + '">Verify product</a>' +
        '<a href="' + href("support/report-counterfeit.html") + '">Report Counterfeit</a>' +
        '<a href="' + href("support/faqs.html") + '">FAQ</a>' +
        '<a href="' + href("contact/index.html") + '">Enquire</a>' +
        "</div>" +
        '<div class="footer-col"><h5 data-en="Company">' + (i18.nav.company || "Company") + "</h5>" +
        '<a href="' + href("company/index.html") + '">Company hub</a>' +
        '<a href="' + href("company/about.html") + '">About</a>' +
        '<a href="' + href("company/leadership.html") + '">Leadership</a>' +
        '<a href="' + href("company/investor.html") + '">Investor</a>' +
        '<a href="' + href("company/careers.html") + '">Careers</a>' +
        '<a href="' + href("blogs/index.html") + '">Blog</a>' +
        '<a href="' + href("company/news.html") + '">News</a>' +
        "</div>";
    }
    var legal = document.querySelector(".footer-legal");
    if (legal) {
      legal.innerHTML =
        '<a href="' + href("legal/privacy.html") + '">Privacy</a>' +
        '<a href="' + href("legal/terms.html") + '">Terms</a>' +
        '<a href="' + href("company/public-notices.html") + '">Public notices</a>' +
        '<a href="' + href("company/vigil.html") + '">Vigil</a>';
    }
    document.querySelectorAll(".footer-bottom").forEach(function (el, i) {
      if (i > 0) el.remove();
      else el.innerHTML = "<span>© BCH Electric Limited · Wireframe IA v3</span><span>Grayscale · BrandClef</span>";
    });
  }



  var LOGO_CUSTOMERS = [
    ["STL", "Steel mill"],
    ["AGR", "Agriculture"],
    ["MIN", "Mining"],
    ["RLY", "Railways"],
    ["CRN", "Crane OEM"],
    ["PNL", "Panel builder"],
    ["PMP", "Pump OEM"],
    ["INF", "Infrastructure"]
  ];

  function logoTileHtml(pair) {
    return '<div class="logo-tile" aria-hidden="true"><span class="mark">' + pair[0] + '</span><span class="sub">' + pair[1] + '</span></div>';
  }


  function injectBefikar() {
    var page = pageKey();
    var isStarter =
      page === "motor-starters" ||
      page === "citation-fasd-dol" ||
      page === "shakti" ||
      page === "submersible" ||
      page === "oil-immersed" ||
      page === "ats";
    if (!isStarter) return;
    if (document.querySelector(".befikar")) return;
    var h1 = document.querySelector("main h1");
    if (!h1 || !h1.parentNode) return;
    var p = document.createElement("p");
    p.className = "befikar";
    p.textContent = "Befikar chalta hai.";
    if (h1.nextSibling) h1.parentNode.insertBefore(p, h1.nextSibling);
    else h1.parentNode.appendChild(p);
  }

  function injectLogoMarquee() {
    var page = pageKey();
    if (page !== "industries") return;
    if (document.querySelector(".logo-marquee")) return;
    var tiles = LOGO_CUSTOMERS.map(logoTileHtml).join("");
    var wrap = document.createElement("section");
    wrap.className = "logo-marquee";
    wrap.setAttribute("aria-label", "Customer logos");
    wrap.innerHTML =
      '<div class="container">' +
        '<div class="logo-marquee-head">' +
          '<div><span class="section-label">Customers</span><h2>Trusted in the field</h2></div>' +
          '<p>Logo placeholders — replace with approved customer marks.</p>' +
        '</div>' +
      '</div>' +
      '<div class="logo-marquee-viewport">' +
        '<div class="logo-marquee-track">' + tiles + tiles + '</div>' +
      '</div>';
    var main = document.querySelector("main");
    if (!main) return;
    main.appendChild(wrap);
  }


  function injectArticleTools() {
    var page = document.body.getAttribute("data-page") || "";
    var articlePages = {
      "blog-post": 1,
      "news-post": 1,
      "media-post": 1
    };
    if (!articlePages[page]) return;
    if (document.querySelector(".article-layout")) return;
    if (document.body.getAttribute("data-article-shell") === "1") return;
    var header = document.querySelector(".page-header");
    if (!header) return;
    /* Shell posts: short body — skip empty TOC / Explore-with-AI rail */
    var mainProbe = document.querySelector("main .container") || document.querySelector("main");
    if (mainProbe) {
      var proseLen = (mainProbe.textContent || "").replace(/\s+/g, " ").trim().length;
      if (proseLen < 1200 && page === "blog-post") return;
    }
    var container = header.parentNode;
    if (!container) return;

    var h1 = header.querySelector("h1");
    var lead = header.querySelector(".lead");
    var title = ((h1 && h1.textContent) || document.title || "").replace(/\s+/g, " ").trim();
    var summary = ((lead && lead.textContent) || title).replace(/\s+/g, " ").trim();
    var live = container.querySelector('a[href*="bchindia.com"]');
    var liveUrl = live ? live.getAttribute("href") : (window.location.href || "");
    var prompt = "Read this BCH Electric article and answer only from it. Title: " + title + ". URL: " + liveUrl;
    var q = encodeURIComponent(prompt);
    var pageUrl = window.location.href || "";
    var shareQ = encodeURIComponent(pageUrl);
    var shareText = encodeURIComponent(title + " " + pageUrl);

    function esc(str) {
      return String(str || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
    }
    function slugify(text) {
      var id = String(text || "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 64);
      return id || "section";
    }

    var toMove = [];
    var node = header.nextSibling;
    while (node) {
      var next = node.nextSibling;
      if (node.nodeType === 1) {
        var cls = node.className || "";
        if (
          node.id === "bch-inquiry" ||
          (typeof cls === "string" && (cls.indexOf("inquiry-band") !== -1 || cls.indexOf("site-helpline") !== -1 || cls.indexOf("site-footer") !== -1))
        ) {
          node = next;
          continue;
        }
      }
      toMove.push(node);
      node = next;
    }

    var layout = document.createElement("div");
    layout.className = "article-layout";
    var rail = document.createElement("aside");
    rail.className = "article-rail";
    rail.setAttribute("aria-label", "Article tools");
    var main = document.createElement("div");
    main.className = "article-main";

    var existingPull = null;
    toMove.forEach(function (el) {
      if (el.nodeType !== 1) return;
      if (el.classList && el.classList.contains("article-pull")) existingPull = el;
      else if (el.querySelector) {
        var found = el.querySelector(".article-pull");
        if (found) existingPull = found;
      }
    });
    if (!existingPull && summary) {
      var pull = document.createElement("blockquote");
      pull.className = "article-pull";
      var lab = document.createElement("span");
      lab.className = "section-label";
      lab.textContent = "Quick answer";
      var pp = document.createElement("p");
      pp.textContent = summary;
      pull.appendChild(lab);
      pull.appendChild(pp);
      main.appendChild(pull);
    }
    if (lead) lead.hidden = true;

    toMove.forEach(function (el) {
      main.appendChild(el);
    });

    var used = {};
    var tocItems = [];
    main.querySelectorAll("h2").forEach(function (h) {
      var text = (h.textContent || "").replace(/\s+/g, " ").trim();
      if (!text) return;
      if (/^summary$/i.test(text) || /^related/i.test(text) || /^latest updates$/i.test(text)) return;
      if (!h.id) {
        var id = slugify(text);
        var base = id;
        var n = 2;
        while (used[id] || document.getElementById(id)) {
          id = base + "-" + n;
          n += 1;
        }
        h.id = id;
      }
      used[h.id] = 1;
      tocItems.push({ id: h.id, text: text });
    });

    var tocHtml = '<nav class="article-toc" aria-label="Contents"><h2 class="article-toc-title">Content</h2><ol>';
    tocItems.forEach(function (item) {
      tocHtml += '<li><a href="#' + item.id + '">' + esc(item.text) + "</a></li>";
    });
    tocHtml += "</ol></nav>";

    var tools = document.createElement("div");
    tools.className = "article-tools";
    tools.innerHTML =
      tocHtml +
      '<section class="article-share" aria-label="Share">' +
        '<span class="article-share-label">Share</span>' +
        '<div class="article-share-row">' +
          '<a target="_blank" rel="noopener" href="https://www.linkedin.com/sharing/share-offsite/?url=' + shareQ + '">LinkedIn</a>' +
          '<a target="_blank" rel="noopener" href="https://wa.me/?text=' + shareText + '">WhatsApp</a>' +
          '<button type="button" data-copy-link>Copy link</button>' +
        "</div>" +
      "</section>";
    rail.appendChild(tools);

    if (!main.querySelector(".article-related")) {
      var rel = buildRelatedBlock(page, pageUrl);
      if (rel) main.appendChild(rel);
    }

    layout.appendChild(rail);
    layout.appendChild(main);
    container.insertBefore(layout, header.nextSibling);

    var copyBtn = tools.querySelector("[data-copy-link]");
    if (copyBtn) {
      copyBtn.addEventListener("click", function () {
        function done() {
          copyBtn.textContent = "Copied";
        }
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(pageUrl).then(done).catch(function () {
            window.prompt("Copy link", pageUrl);
          });
        } else {
          window.prompt("Copy link", pageUrl);
        }
      });
    }

    bindTocActive(rail, main);
  }

  function relatedCatalog(page) {
    if (page === "blog-post") {
      return [
        ["blogs/dol-starter-wiring-diagram.html", "DOL starter wiring diagram and sequence of operation explained"],
        ["blogs/reversing-contactor-interlocking.html", "Reversing Contactor Electrical and Mechanical Interlocking"],
        ["blogs/how-to-select-mpcb-for-motor.html", "How to Select an MPCB by Motor Current and Duty"],
        ["blogs/choosing-star-delta-starter.html", "Choosing Star-Delta Starter for Industrial Motors: A Buyer’s Guide"],
        ["blogs/mpcb-vs-mcb-vs-overload-relay.html", "MPCB vs MCB vs Overload Relay for Motor Protection"],
        ["blogs/mpcb-trip-settings-contactor-coordination.html", "MPCB Trip Settings and Contactor Coordination Guide"],
        ["blogs/30-ma-vs-100-ma-vs-300-ma-rccb-selection-a-practical-guide.html", "30 mA vs 100 mA vs 300 mA RCCB Selection: A Practical Guide"],
        ["blogs/limit-switch-wiring-no-nc-and-changeover-contact-examples.html", "Limit Switch Wiring: NO, NC and Changeover Contact Examples"]
      ];
    }
    if (page === "news-post") {
      return [
        ["company/news/head-sales-marketing-mr-kapil-grover-interview-to-industrial-product-finder-ipf-magazine.html", "Head Sales & Marketing, Mr. Kapil Grover interview to Industrial Product Finder ( IPF) magazine"],
        ["company/news/product-demo-at-hindalco-belur-june-2018.html", "Product Demo at Hindalco, Belur : June 2018"],
        ["company/news/bch-electric-opens-new-branch-office-at-dehradun.html", "BCH Electric opens new branch office at Dehradun"],
        ["company/news/bch-participated-in-elecrama-exhibition-2020-at-greater-noida-ncr-india.html", "BCH participated in ELECRAMA Exhibition, 2020 at Greater Noida, NCR, India"],
        ["company/news/bch-participated-in-elasia-2024-exhibition-at-bangalore.html", "BCH PARTICIPATED IN ELASIA 2024 EXHIBITION AT BANGALORE"]
      ];
    }
    if (page === "media-post") {
      return [
        ["company/media/kapil-grover-ipf-interview.html", "Kapil Grover interview — Industrial Product Finder"],
        ["company/media/elecrama-2020.html", "ELECRAMA 2020 coverage"],
        ["company/media/dehradun-branch.html", "Dehradun branch opening"]
      ];
    }
    if (page === "case-study-post") {
      return [
        ["solutions/case-studies/pump-set-field.html", "Pump-set starters in the field"],
        ["solutions/case-studies/pune-line-support.html", "Four-hour line support in Pune"],
        ["solutions/case-studies/chennai-oem-export.html", "Export OEM panel platform · Chennai"]
      ];
    }
    return [];
  }

  function buildRelatedBlock(page, pageUrl) {
    var items = relatedCatalog(page);
    var picked = [];
    items.forEach(function (pair) {
      if (picked.length >= 3) return;
      var path = pair[0];
      if (pageUrl && pageUrl.indexOf(path.split("/").pop()) !== -1) return;
      picked.push(pair);
    });
    if (!picked.length) return null;
    var wrap = document.createElement("section");
    wrap.className = "article-related";
    var html = '<span class="section-label">Related</span><h2>Related articles</h2><div class="grid-3">';
    picked.forEach(function (pair) {
      html +=
        '<a class="card" href="' +
        href(pair[0]) +
        '"><div class="ph ph-card">Article</div><div class="body"><h3>' +
        pair[1].replace(/</g, "&lt;") +
        '</h3><span class="arrow">Read →</span></div></a>';
    });
    html += "</div>";
    wrap.innerHTML = html;
    return wrap;
  }

  function bindTocActive(rail, main) {
    var links = rail.querySelectorAll(".article-toc a");
    if (!links.length) return;
    var heads = [];
    links.forEach(function (a) {
      var id = (a.getAttribute("href") || "").replace(/^#/, "");
      var el = id ? document.getElementById(id) : null;
      if (el) heads.push({ el: el, a: a });
    });
    if (!heads.length) return;
    function setActive() {
      var mark = window.scrollY + 140;
      var current = heads[0];
      heads.forEach(function (item) {
        if (item.el.getBoundingClientRect().top + window.scrollY - 160 <= mark) current = item;
      });
      links.forEach(function (a) {
        a.parentNode.classList.remove("is-active");
      });
      if (current) current.a.parentNode.classList.add("is-active");
    }
    window.addEventListener("scroll", setActive, { passive: true });
    setActive();
  }


  function injectSeo() {
    var titleEl = document.querySelector("h1");
    var leadEl = document.querySelector(".page-header .lead, .hero-banner-overlay .lead, main .lead");
    var h1 = titleEl ? titleEl.textContent.replace(/\s+/g, " ").trim() : "";
    var lead = leadEl ? leadEl.textContent.replace(/\s+/g, " ").trim() : "";
    var pageTitle = document.body.getAttribute("data-page-title") || h1 || "BCH Electric";
    var brand = "BCH Electric";
    var fullTitle = /BCH Electric/i.test(pageTitle) ? pageTitle.replace(/\s*[—\-]\s*BCH Electric.*$/i, "") + " | " + brand : pageTitle + " | " + brand;
    fullTitle = fullTitle.replace(/\s*\(Wireframe\)/gi, "");
    document.title = fullTitle;
    function upsertMeta(attr, key, val) {
      if (!val) return;
      var sel = 'meta[' + attr + '="' + key + '"]';
      var el = document.head.querySelector(sel);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", val.slice(0, 220));
    }
    var desc = lead || (h1 ? h1 + " — BCH Electric, Indian switchgear since 1965." : "BCH Electric — motor starters and industrial switchgear. Since 1965.");
    upsertMeta("name", "description", desc);
    upsertMeta("name", "robots", "noindex, nofollow");
    upsertMeta("name", "googlebot", "noindex, nofollow");
    upsertMeta("property", "og:title", fullTitle);
    upsertMeta("property", "og:description", desc);
    upsertMeta("property", "og:type", document.body.getAttribute("data-page") === "blog-post" ? "article" : "website");
    upsertMeta("property", "og:site_name", brand);
    var ogImg = href("og-image.png");
    var absOg = ogImg;
    try {
      if (location.protocol.indexOf("http") === 0) {
        absOg = new URL(ogImg, location.href).href;
      }
    } catch (e) {}
    upsertMeta("property", "og:image", absOg);
    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", fullTitle);
    upsertMeta("name", "twitter:description", desc);
    upsertMeta("name", "twitter:image", absOg);
    function upsertLink(rel, hrefVal, attrs) {
      var el = document.head.querySelector('link[rel="' + rel + '"]');
      if (!el) {
        el = document.createElement("link");
        el.rel = rel;
        document.head.appendChild(el);
      }
      el.href = hrefVal;
      if (attrs) Object.keys(attrs).forEach(function (k) { el.setAttribute(k, attrs[k]); });
    }
    upsertLink("icon", href("favicon.svg"), { type: "image/svg+xml" });
    upsertLink("alternate icon", href("favicon.ico"));
    upsertLink("apple-touch-icon", href("apple-touch-icon.png"));
    var path = (location.pathname || "/").replace(/index\.html$/, "").replace(/\.html$/, "/");
    if (path.length > 1 && path.slice(-1) !== "/") path += "/";
    var canonHref = (location.origin || "") + path;
    var link = document.head.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement("link");
      link.rel = "canonical";
      document.head.appendChild(link);
    }
    if (canonHref) link.href = canonHref;
    if (document.getElementById("bch-jsonld")) return;
    var crumbs = [];
    document.querySelectorAll(".breadcrumb a, .breadcrumb").forEach(function (n, i) {
      if (n.tagName === "A") crumbs.push({ "@type": "ListItem", position: crumbs.length + 1, name: n.textContent.trim(), item: n.href });
    });
    if (h1) crumbs.push({ "@type": "ListItem", position: crumbs.length + 1, name: h1 });
    var graph = [
      {
        "@type": "Organization",
        name: "BCH Electric Limited",
        url: "https://bchindia.com/",
        telephone: "1800 103 9262",
        email: "customercare@bchindia.com",
        foundingDate: "1965",
        address: { "@type": "PostalAddress", addressCountry: "IN" }
      }
    ];
    if (crumbs.length) {
      graph.push({ "@type": "BreadcrumbList", itemListElement: crumbs });
    }
    var page = document.body.getAttribute("data-page") || "";
    if (page === "blog-post" || page === "news-post" || page === "media-post" || page === "case-study-post") {
      graph.push({ "@type": "Article", headline: h1, description: desc, author: { "@type": "Organization", name: brand } });
    }
    if (page.indexOf("citation") !== -1 || page === "shakti" || page.indexOf("starter") !== -1) {
      graph.push({ "@type": "Product", name: h1 || pageTitle, brand: { "@type": "Brand", name: brand }, description: desc });
    }
    var s = document.createElement("script");
    s.type = "application/ld+json";
    s.id = "bch-jsonld";
    s.textContent = JSON.stringify({ "@context": "https://schema.org", "@graph": graph });
    document.head.appendChild(s);
  }

  function bindAccordions() {
    document.querySelectorAll("[data-acc]").forEach(function (btn) {
      if (btn.getAttribute("data-acc-bound") === "1") return;
      btn.setAttribute("data-acc-bound", "1");
      btn.addEventListener("click", function () {
        var item = btn.closest(".acc-item");
        if (!item) return;
        var open = item.classList.contains("is-open");
        var group = item.parentNode;
        if (group && group.hasAttribute("data-acc-group")) {
          group.querySelectorAll(".acc-item.is-open").forEach(function (other) {
            if (other !== item) {
              other.classList.remove("is-open");
              var b = other.querySelector("[data-acc]");
              if (b) b.setAttribute("aria-expanded", "false");
            }
          });
        }
        item.classList.toggle("is-open", !open);
        btn.setAttribute("aria-expanded", open ? "false" : "true");
      });
    });
  }

  function bindDownloadSearch() {
    var inp = document.getElementById("dl-search");
    if (!inp || inp.getAttribute("data-dl-bound") === "1") return;
    inp.setAttribute("data-dl-bound", "1");
    var zero = document.getElementById("dl-zero");
    if (!zero) {
      zero = document.createElement("p");
      zero.id = "dl-zero";
      zero.className = "note-box";
      zero.hidden = true;
      zero.innerHTML = 'No catalogues match that search. Try another title or catalogue number, or <a href="' + href("contact/index.html") + '">Enquire</a>.';
      var folders = document.getElementById("folders");
      if (folders) folders.parentNode.insertBefore(zero, folders);
    }
    inp.addEventListener("input", function () {
      var q = (inp.value || "").toLowerCase().replace(/\s+/g, " ").trim();
      var anyMatch = false;
      document.querySelectorAll(".doc-table tbody tr").forEach(function (tr) {
        var text = tr.textContent.toLowerCase();
        var match = !q || text.indexOf(q) !== -1;
        tr.hidden = !match;
        if (match && q) anyMatch = true;
      });
      document.querySelectorAll(".acc-item").forEach(function (item) {
        var rows = item.querySelectorAll(".doc-table tbody tr");
        if (!rows.length) {
          item.style.display = q ? "none" : "";
          item.hidden = !!q;
          return;
        }
        var vis = 0;
        rows.forEach(function (tr) { if (!tr.hidden) vis++; });
        var show = !q || vis > 0;
        item.style.display = show ? "" : "none";
        item.hidden = !show;
        if (q && vis > 0) {
          item.classList.add("is-open");
          var btn = item.querySelector("[data-acc]");
          if (btn) btn.setAttribute("aria-expanded", "true");
        }
      });
      if (zero) zero.hidden = !(q && !anyMatch);
    });
  }

  function enhanceAll(fromSwitch) {
    enhanceUtilityBar();
    enhanceWfBanner();
    document.querySelectorAll(".site-nav").forEach(enhanceNav);
    enhanceSearch();
    removeViewChip();
    injectInquiry();
    injectHelpline();
    injectLogoMarquee();
    injectIndustryHero();
    injectBefikar();
    injectArticleTools();
    bindAccordions();
    bindDownloadSearch();
    injectSeo();
    if (!fromSwitch) {
      unlinkVigil();
      enhanceFooter();
    }
    applyTaglines();
  }

  function init() {
    var loc = persistLoc(getLoc());
    applyLoc(loc);
    enhanceAll(false);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
