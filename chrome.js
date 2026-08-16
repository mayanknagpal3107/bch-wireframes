/* BCH chrome loader — fetches split chunks then evals original IIFE */
(function () {
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
  var parts = ["chrome-p1.js", "chrome-p2.js", "chrome-p3.js", "chrome-p4.js", "chrome-p5.js"];
  function load(i, acc) {
    if (i >= parts.length) {
      (0, eval)(acc);
      return;
    }
    var xhr = new XMLHttpRequest();
    xhr.open("GET", ROOT + parts[i], false);
    xhr.send();
    load(i + 1, acc + xhr.responseText);
  }
  load(0, "");
})();
