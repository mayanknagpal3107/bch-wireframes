/* BCH Electric Wireframe — Floating feedback drawer (localStorage) */
(function () {
  var STORAGE_KEY = "bch_wireframe_feedback_v2";

  function pageKey() {
    var el = document.body.getAttribute("data-page");
    if (el) return el;
    var path = (location.pathname.split("/").pop() || "index.html").replace(/\.html?$/i, "");
    return path === "index" || path === "" ? "home" : path;
  }

  function pageTitle() {
    return document.body.getAttribute("data-page-title") || pageKey();
  }

  function loadAll() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    } catch (e) {
      return {};
    }
  }

  function saveAll(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function formatTs(d) {
    try {
      return d.toLocaleString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      });
    } catch (e) {
      return d.toISOString();
    }
  }

  function renderComments() {
    var list = document.getElementById("fb-comments");
    if (!list) return;
    var comments = loadAll()[pageKey()] || [];
    if (!comments.length) {
      list.innerHTML = '<p class="comment-empty">No comments yet on this page.</p>';
      return;
    }
    list.innerHTML =
      "<h4>Comments (" +
      comments.length +
      ")</h4>" +
      comments
        .map(function (c) {
          return (
            '<div class="comment"><div class="ts">' +
            escapeHtml(c.ts) +
            "</div><div>" +
            escapeHtml(c.text) +
            "</div></div>"
          );
        })
        .join("");
  }

  function addComment() {
    var ta = document.getElementById("fb-textarea");
    var text = ((ta && ta.value) || "").trim();
    if (!text) {
      if (ta) ta.focus();
      return;
    }
    var key = pageKey();
    var all = loadAll();
    if (!all[key]) all[key] = [];
    all[key].push({ text: text, ts: formatTs(new Date()), iso: new Date().toISOString() });
    saveAll(all);
    ta.value = "";
    renderComments();
  }

  function clearPageComments() {
    var all = loadAll();
    delete all[pageKey()];
    saveAll(all);
    renderComments();
  }

  function openDrawer() {
    var drawer = document.getElementById("fb-drawer");
    var overlay = document.getElementById("fb-overlay");
    if (drawer) drawer.classList.add("is-open");
    if (overlay) overlay.classList.add("is-open");
    document.body.style.overflow = "hidden";
  }

  function closeDrawer() {
    var drawer = document.getElementById("fb-drawer");
    var overlay = document.getElementById("fb-overlay");
    if (drawer) drawer.classList.remove("is-open");
    if (overlay) overlay.classList.remove("is-open");
    document.body.style.overflow = "";
  }

  function injectUI() {
    if (document.getElementById("ask-bch-fab")) return;

    /* Ask BCH — fixed LEFT, shimmer */
    var askFab = document.createElement("button");
    askFab.type = "button";
    askFab.id = "ask-bch-fab";
    askFab.className = "ask-bch-fab";
    askFab.setAttribute("aria-label", "Ask BCH");
    askFab.innerHTML = '<span class="ask-mark">AI</span> Ask BCH';
    document.body.appendChild(askFab);

    var ask = document.createElement("div");
    ask.id = "ask-overlay";
    ask.className = "ask-overlay";
    ask.innerHTML =
      '<div class="ask-modal" role="dialog" aria-label="Ask BCH">' +
      '<div class="ask-modal-head">' +
      '<span class="section-label">Ask BCH · AI search</span>' +
      '<input id="ask-input" type="search" placeholder="Ask about a product, spec, dealer, document…" autocomplete="off" />' +
      "</div>" +
      '<div class="ask-suggest">' +
      '<button type="button" data-q="3–20 HP submersible pump starter datasheet"><span>Product</span>3–20 HP submersible pump starter — datasheet</button>' +
      '<button type="button" data-q="Ultra Power ACB IEC 60947-2 certificate"><span>Certificate</span>Ultra Power ACB · IEC 60947-2 type test</button>' +
      '<button type="button" data-q="nearest dealer Pune"><span>Dealer</span>Nearest dealer in Pune</button>' +
      '<button type="button" data-q="MCC panel IEC 61439"><span>Solution</span>MCC / PCC panels · IEC 61439</button>' +
      "</div>" +
      '<div class="ask-foot">Wireframe: AI searches catalogue, downloads, dealers and FAQs. Esc to close.</div>' +
      "</div>";
    document.body.appendChild(ask);

    /* WhatsApp — fixed RIGHT */
    var wa = document.createElement("div");
    wa.className = "wa-wrap wa-wrap-right";
    wa.id = "wa-wrap";
    wa.innerHTML =
      '<div class="wa-panel wa-panel-right" id="wa-panel">' +
      '<div class="wa-panel-h">WhatsApp support <button type="button" class="fb-close" id="wa-close" aria-label="Close">×</button></div>' +
      '<div class="wa-body">' +
      '<div class="wa-bubble">Hi — BCH support. Ask for a datasheet, dealer, or complaint ticket. Always on.</div>' +
      '<p>Typical: product selection, stock / dispatch, spares, complaint.</p>' +
      "</div>" +
      '<a class="btn btn-fill wa-cta" href="https://wa.me/" target="_blank" rel="noopener">Open WhatsApp</a>' +
      "</div>" +
      '<button type="button" class="wa-fab" id="wa-fab" aria-label="WhatsApp support">' +
      '<span class="wa-dot"></span> WhatsApp support' +
      "</button>";
    document.body.appendChild(wa);
  }

  function bindNavToggle() {
    var toggle = document.querySelector(".nav-toggle");
    var links = document.querySelector(".nav-links");
    if (!toggle || !links) return;
    toggle.addEventListener("click", function () {
      links.classList.toggle("is-open");
    });
  }

  function markActiveNav() {
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
      "case-studies": "solutions",
      support: "support",
      downloads: "support",
      faqs: "support",
      "customer-care": "support",
      "sales-offices": "support",
      "find-dealer": "support",
      resources: "support",
      counterfeit: "support",
      verify: "support",
      about: "company",
      manufacturing: "company",
      rd: "company",
      csr: "company",
      certificates: "company",
      careers: "company",
      board: "company",
      investor: "company",
      "annual-reports": "company",
      "agm-notices": "company",
      "public-notices": "company",
      privacy: "company",
      terms: "company",
      "data-privacy": "company",
      engineering: "company",
      news: "company",
      blog: "company",
      media: "company",
      contact: "contact",
      enquire: "contact",
      search: "support"
    };
    var nav = map[page];
    if (!nav) return;
    document.querySelectorAll(".nav-links a[data-nav]").forEach(function (a) {
      if (a.getAttribute("data-nav") === nav) a.classList.add("is-active");
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    if (!window.__BCH_CHROME__) {
      var s = document.createElement("script");
      var root = window.__BCH_ROOT__ || "";
      if (!root) {
        var scripts = document.getElementsByTagName("script");
        for (var i = 0; i < scripts.length; i++) {
          if (scripts[i].src && /feedback\.js(\?|#|$)/.test(scripts[i].src)) {
            root = scripts[i].src.replace(/[^/]*feedback\.js(\?.*)?(#.*)?$/, "");
            break;
          }
        }
      }
      s.src = root + "chrome.js";
      document.head.appendChild(s);
    }
    injectUI();
    bindNavToggle();
    markActiveNav();

    function openAsk(prefill) {
      var ov = document.getElementById("ask-overlay");
      if (!ov) return;
      ov.classList.add("is-open");
      var inp = document.getElementById("ask-input");
      if (inp) {
        inp.value = typeof prefill === "string" ? prefill : "";
        inp.focus();
      }
    }
    window.openAskBCH = openAsk;
    function closeAsk() {
      var ov = document.getElementById("ask-overlay");
      if (ov) ov.classList.remove("is-open");
    }
    var askBtn = document.getElementById("ask-bch-fab") || document.getElementById("ask-bch-btn");
    if (askBtn) askBtn.addEventListener("click", openAsk);
    var askOv = document.getElementById("ask-overlay");
    if (askOv) {
      askOv.addEventListener("click", function (e) {
        if (e.target === askOv) closeAsk();
      });
      askOv.querySelectorAll(".ask-suggest button").forEach(function (b) {
        b.addEventListener("click", function () {
          var inp = document.getElementById("ask-input");
          if (inp) inp.value = b.getAttribute("data-q") || b.textContent;
        });
      });
    }

    var waFab = document.getElementById("wa-fab");
    var waPanel = document.getElementById("wa-panel");
    if (waFab && waPanel) {
      waFab.addEventListener("click", function () {
        waPanel.classList.toggle("is-open");
      });
    }
    var waClose = document.getElementById("wa-close");
    if (waClose) waClose.addEventListener("click", function () {
      if (waPanel) waPanel.classList.remove("is-open");
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        closeAsk();
        var w = document.getElementById("wa-panel");
        if (w) w.classList.remove("is-open");
      }
    });


    document.querySelectorAll("form[data-nav-search]").forEach(function (form) {
      form.addEventListener("submit", function (e) {
        var field = form.querySelector('input[type="search"]');
        var q = field ? (field.value || "").trim() : "";
        /* Optional: Alt/Option submit opens Ask BCH; default GET goes to search.html */
        if ((e.altKey || e.metaKey) && typeof openAsk === "function") {
          e.preventDefault();
          openAsk(q);
        }
      });
    });

        document.querySelectorAll("form[data-wireframe-form]").forEach(function (form) {
      form.addEventListener("submit", function (e) {
        if (form.hasAttribute("data-nearest-form") || form.closest("#nearest-support")) return;
        e.preventDefault();
        var note = form.querySelector(".form-note") || document.getElementById("form-wireframe-note");
        if (note) {
          note.textContent =
            "Wireframe: submit simulated — no data sent. Production would create an enquiry / RFQ.";
        } else {
          alert("Wireframe: form submit simulated — no data sent.");
        }
      });
    });
  });
})();
