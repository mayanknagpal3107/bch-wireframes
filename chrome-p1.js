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
  var COUNTRIES = { in: 1, de: 1, export: 1 };
  var LANGS = { en: 1, hi: 1, de: 1 };
  var COUNTRY_TRIGGER = { in: "India", de: "Germany", export: "Export" };
  var COUNTRY_OPTION = { in: "India (Global)", de: "Germany", export: "Export" };
  var LANG_LABEL = { en: "English", hi: "हिंदी", de: "Deutsch" };
  var LANG_CODE = { en: "EN", hi: "HI", de: "DE" };

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
    var country = obj && COUNTRIES[obj.country] ? obj.country : "in";
    var lang = obj && LANGS[obj.lang] ? obj.lang : "en";
    return { country: country, lang: lang };
  }

  function locFromLegacyView(v) {
    if (v === "global") return { country: "export", lang: "en" };
    if (v === "hi") return { country: "in", lang: "hi" };
    if (v === "de") return { country: "de", lang: "de" };
    if (v === "en") return { country: "in", lang: "en" };
    return defaultLoc();
  }

  function deriveView(loc) {
    if (loc.country === "de") return "de";
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
    if (loc.country === "de" || loc.country === "export") return "Current and Beyond";
    return "har haal mein";
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
    var lang = loc.lang === "hi" ? "hi" : loc.lang === "de" ? "de" : "en";
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
      footerLine: "Industrial switchgear since 1965. Select · Spec · Download · Enquire. Cutler-Hammer heritage.",
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
      chip: "Global",
      footerLine: "Industrial switchgear since 1965. India and export — exports@bchindia.com.",
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
      footerLine: "1965 से औद्योगिक स्विचगियर। चयन · स्पेक · डाउनलोड · पूछताछ।",
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
        applications: "