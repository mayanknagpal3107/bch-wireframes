rySelectorAll("[data-acc]").forEach(function (btn) {
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
    inp.addEventListener("input", function () {
      var q = (inp.value || "").toLowerCase().trim();
      document.querySelectorAll(".doc-table tbody tr").forEach(function (tr) {
        var text = tr.textContent.toLowerCase();
        tr.hidden = q ? text.indexOf(q) === -1 : false;
      });
      document.querySelectorAll(".acc-item").forEach(function (item) {
        var rows = item.querySelectorAll(".doc-table tbody tr");
        if (!rows.length) return;
        var any = false;
        rows.forEach(function (tr) { if (!tr.hidden) any = true; });
        item.style.display = any || !q ? "" : "none";
      });
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
