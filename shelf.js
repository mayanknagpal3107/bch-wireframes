/* Counter-shelf filter: HP / type / phase / amp / pole / curve */
(function () {
  function qs(sel, root) { return (root || document).querySelector(sel); }
  function qsa(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  var root = qs("[data-shelf]");
  if (!root) return;

  function params() {
    var u = new URL(location.href);
    return {
      hp: u.searchParams.get("hp") || "",
      type: u.searchParams.get("type") || "",
      phase: u.searchParams.get("phase") || "",
      amp: u.searchParams.get("amp") || "",
      pole: u.searchParams.get("pole") || "",
      curve: u.searchParams.get("curve") || ""
    };
  }

  function setParam(key, val) {
    var u = new URL(location.href);
    if (val) u.searchParams.set(key, val);
    else u.searchParams.delete(key);
    history.replaceState(null, "", u.pathname + u.search + u.hash);
  }

  function coversHp(range, hp) {
    if (!hp) return true;
    var n = parseFloat(hp);
    if (!isFinite(n)) return true;
    var m = String(range || "").match(/([\d.]+)\s*[-–]\s*([\d.]+)/);
    if (!m) return true;
    return n >= parseFloat(m[1]) && n <= parseFloat(m[2]);
  }

  function apply() {
    var p = params();
    qsa("[data-shelf-hp] .shelf-box, [data-shelf-hp] .shelf-chip").forEach(function (el) {
      el.classList.toggle("is-on", el.getAttribute("data-val") === p.hp);
    });
    qsa("[data-shelf-type] .shelf-chip").forEach(function (el) {
      el.classList.toggle("is-on", el.getAttribute("data-val") === p.type);
    });
    qsa("[data-shelf-phase] .shelf-chip").forEach(function (el) {
      el.classList.toggle("is-on", el.getAttribute("data-val") === p.phase);
    });
    qsa("[data-shelf-amp] .shelf-box").forEach(function (el) {
      el.classList.toggle("is-on", el.getAttribute("data-val") === p.amp);
    });
    qsa("[data-shelf-pole] .shelf-chip").forEach(function (el) {
      el.classList.toggle("is-on", el.getAttribute("data-val") === p.pole);
    });
    qsa("[data-shelf-curve] .shelf-chip").forEach(function (el) {
      el.classList.toggle("is-on", el.getAttribute("data-val") === p.curve);
    });
    var shown = 0;
    qsa("[data-shelf-item]", root).forEach(function (item) {
      var ok = true;
      if (p.type && item.getAttribute("data-type") && item.getAttribute("data-type").indexOf(p.type) === -1) ok = false;
      if (p.phase && item.getAttribute("data-phase") && item.getAttribute("data-phase").indexOf(p.phase) === -1) ok = false;
      if (p.pole && item.getAttribute("data-pole") && item.getAttribute("data-pole").indexOf(p.pole) === -1) ok = false;
      if (p.curve && item.getAttribute("data-curve") && item.getAttribute("data-curve").indexOf(p.curve) === -1) ok = false;
      if (p.hp && !coversHp(item.getAttribute("data-hp"), p.hp)) ok = false;
      if (p.amp) {
        var ar = item.getAttribute("data-amp");
        if (ar && !coversHp(ar.replace("A", "").replace(/ /g, ""), p.amp)) ok = false;
      }
      item.classList.toggle("is-off", !ok);
      if (ok) shown++;
    });
    var empty = qs("[data-shelf-empty]", root);
    if (empty) empty.classList.toggle("is-show", shown === 0);
  }

  function bind(group, key) {
    qsa(group + " .shelf-box, " + group + " .shelf-chip", root).forEach(function (el) {
      el.addEventListener("click", function (e) {
        e.preventDefault();
        var val = el.getAttribute("data-val");
        var cur = params()[key];
        setParam(key, cur === val ? "" : val);
        apply();
      });
    });
  }

  bind("[data-shelf-hp]", "hp");
  bind("[data-shelf-type]", "type");
  bind("[data-shelf-phase]", "phase");
  bind("[data-shelf-amp]", "amp");
  bind("[data-shelf-pole]", "pole");
  bind("[data-shelf-curve]", "curve");
  apply();
})();
