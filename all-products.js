/* All products — tab switch + category rail filter. No search / sort / counts. */
(function () {
  var TABS = ["starters", "motor-control", "enclosures", "power-control", "solutions", "automation", "brakes-cables"];

  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }

  function showTab(id) {
    if (TABS.indexOf(id) === -1) return;
    $$(".ap-tabs [data-tab]").forEach(function (btn) {
      var on = btn.getAttribute("data-tab") === id;
      btn.classList.toggle("is-active", on);
      btn.setAttribute("aria-selected", on ? "true" : "false");
    });
    $$(".ap-panel").forEach(function (p) {
      p.hidden = p.getAttribute("data-panel") !== id;
    });
    var panel = $('.ap-panel[data-panel="' + id + '"]');
    if (panel) filterRail(panel, "all");
  }

  function filterRail(panel, fid) {
    $$(".ap-rail a[data-filter]", panel).forEach(function (a) {
      a.classList.toggle("is-active", a.getAttribute("data-filter") === fid);
    });
    $$(".ap-card-unit", panel).forEach(function (unit) {
      unit.hidden = fid !== "all" && unit.getAttribute("data-id") !== fid;
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    $$(".ap-tabs [data-tab]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var id = btn.getAttribute("data-tab");
        showTab(id);
        if (history.replaceState) history.replaceState(null, "", "#" + id);
      });
    });
    $$(".ap-rail a[data-filter]").forEach(function (a) {
      a.addEventListener("click", function (e) {
        e.preventDefault();
        var panel = a.closest(".ap-panel");
        if (panel) filterRail(panel, a.getAttribute("data-filter"));
      });
    });
    var hash = (location.hash || "").replace(/^#/, "");
    if (hash === "az") {
      var el = document.getElementById("az");
      if (el) el.scrollIntoView();
    } else if (TABS.indexOf(hash) !== -1) {
      showTab(hash);
    }
  });
})();
