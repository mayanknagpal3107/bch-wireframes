/* BCH PDP chrome — sticky tabs + document type filters (IA v3.1) */
(function () {
  function activateTab(id, pushHash) {
    var tabs = document.querySelectorAll("[data-tab]");
    var panels = document.querySelectorAll("[data-panel]");
    if (!tabs.length) return;
    var found = false;
    tabs.forEach(function (t) {
      var on = t.getAttribute("data-tab") === id;
      t.classList.toggle("is-active", on);
      if (on) found = true;
    });
    if (!found) return;
    panels.forEach(function (p) {
      p.classList.toggle("is-active", p.getAttribute("data-panel") === id);
    });
    if (pushHash) {
      try {
        history.replaceState(null, "", "#" + id);
      } catch (e) {}
    }
  }

  function initTabs() {
    var tabs = document.querySelectorAll("[data-tab]");
    if (!tabs.length) return;
    tabs.forEach(function (t) {
      t.addEventListener("click", function () {
        activateTab(t.getAttribute("data-tab"), true);
      });
    });
    document.querySelectorAll("[data-open-tab]").forEach(function (el) {
      el.addEventListener("click", function (e) {
        e.preventDefault();
        var id = el.getAttribute("data-open-tab");
        activateTab(id, true);
        var bar = document.querySelector(".pdp-tabs-sticky");
        if (bar) bar.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });
    var hash = (location.hash || "").replace(/^#/, "");
    var map = {
      docs: "documents",
      documents: "documents",
      overview: "overview",
      specs: "specs",
      specifications: "specs",
      accessories: "accessories",
      compatible: "accessories",
      support: "support",
      cases: "cases",
      "case-studies": "cases"
    };
    if (hash && map[hash]) activateTab(map[hash], false);
  }

  function initDocFilters() {
    var filters = document.querySelectorAll("[data-doc-filter]");
    var rows = document.querySelectorAll("[data-doc-type]");
    if (!filters.length || !rows.length) return;
    var countEl = document.querySelector("[data-doc-count]");

    function apply(type) {
      var n = 0;
      rows.forEach(function (row) {
        var t = row.getAttribute("data-doc-type") || "";
        var show = type === "all" || t === type;
        row.classList.toggle("is-hidden", !show);
        if (show) n++;
      });
      filters.forEach(function (f) {
        f.classList.toggle("is-active", f.getAttribute("data-doc-filter") === type);
      });
      if (countEl) countEl.textContent = n + " document" + (n === 1 ? "" : "s");
    }

    filters.forEach(function (f) {
      f.addEventListener("click", function () {
        apply(f.getAttribute("data-doc-filter"));
      });
    });
    apply("all");
  }

  function initCompatCounts() {
    var chips = document.querySelectorAll("[data-compat]");
    var groups = document.querySelectorAll("[data-compat-group]");
    if (!chips.length || !groups.length) return;
    chips.forEach(function (c) {
      c.addEventListener("click", function () {
        var id = c.getAttribute("data-compat");
        chips.forEach(function (x) {
          x.classList.toggle("is-active", x === c);
        });
        groups.forEach(function (g) {
          var show = id === "all" || g.getAttribute("data-compat-group") === id;
          g.style.display = show ? "" : "none";
        });
      });
    });
  }

  function initDownloadFilters() {
    var wrap = document.querySelector("[data-dl-filters]");
    if (!wrap) return;
    var chips = wrap.querySelectorAll("[data-doc-filter]");
    var rows = document.querySelectorAll("table.doc-table tbody tr");
    chips.forEach(function (f) {
      f.addEventListener("click", function () {
        var type = f.getAttribute("data-doc-filter");
        chips.forEach(function (x) {
          x.classList.toggle("is-active", x === f);
        });
        rows.forEach(function (row) {
          var cell = row.querySelector(".type");
          var t = cell ? cell.textContent.trim().toLowerCase() : "";
          var show = type === "all";
          if (!show) {
            if (type === "cad") show = t.indexOf("cad") !== -1 || t.indexOf("drawing") !== -1;
            else if (type === "presentation") show = t.indexOf("presentation") !== -1 || t.indexOf("profile") !== -1 || t.indexOf("leaflet") !== -1;
            else if (type === "price list" || type === "price") show = t.indexOf("price") !== -1;
            else show = t === type || t.indexOf(type) !== -1;
          }
          row.style.display = show ? "" : "none";
        });
      });
    });
  }


  function initGallery() {
    var thumbs = document.querySelectorAll(".pdp-thumb[data-label]");
    var stage = document.querySelector("[data-pdp-stage]");
    if (!thumbs.length || !stage) return;
    function setActive(label) {
      thumbs.forEach(function (t) {
        t.classList.toggle("is-active", t.getAttribute("data-label") === label);
      });
      stage.textContent = label;
    }
    thumbs.forEach(function (t) {
      t.addEventListener("click", function () {
        setActive(t.getAttribute("data-label"));
      });
    });
    document.querySelectorAll("[data-pdp-view]").forEach(function (a) {
      a.addEventListener("click", function (e) {
        e.preventDefault();
        setActive(a.getAttribute("data-pdp-view"));
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initTabs();
    initDocFilters();
    initCompatCounts();
    initDownloadFilters();
    initGallery();
  });
})();
