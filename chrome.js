/* BCH Electric Wireframe — shared chrome */
(function () {
  if (window.__BCH_CHROME__) return;
  window.__BCH_CHROME__ = true;
  var GATE_KEY = "bch-wf-desktop-ok";
  function isPhoneLike() {
    var ua = navigator.userAgent || "";
    var phoneUA = /iPhone|Android.+Mobile|webOS|BlackBerry|IEMobile|Opera Mini/i.test(ua) && !/iPad|Tablet|Nexus 7|Nexus 10/i.test(ua);
    var narrow = false, noHover = false;
    try { narrow = window.matchMedia("(max-width: 768px)").matches; noHover = window.matchMedia("(hover: none)").matches; } catch (e) {}
    return phoneUA || (narrow && noHover);
  }
  function injectGateStyles() {
    if (document.getElementById("bch-gate-css")) return;
    var s = document.createElement("style");
    s.id = "bch-gate-css";
    s.textContent = "html.bch-gate-lock,html.bch-gate-lock body{overflow:hidden!important}#bch-desktop-gate{position:fixed;inset:0;z-index:10000;background:#111;color:#f4f4f4;display:flex;align-items:center;justify-content:center;padding:28px 22px;font-family:Helvetica Neue,Helvetica,Arial,Noto Sans Devanagari,system-ui,sans-serif}#bch-desktop-gate .gate-card{max-width:28rem;width:100%;text-align:left;border:1px solid #333;background:#1a1a1a;padding:28px 24px}#bch-desktop-gate .gate-kicker{font-size:10px;letter-spacing:.16em;text-transform:uppercase;color:#999;margin:0 0 12px}#bch-desktop-gate h1{font-size:22px;font-weight:600;line-height:1.25;color:#fff;margin:0 0 12px}#bch-desktop-gate p{color:#bbb;font-size:14px;line-height:1.5;margin:0 0 10px;max-width:none}#bch-desktop-gate .gate-hi{color:#888;font-size:13px}#bch-desktop-gate [data-gate-continue]{margin-top:20px;border:1px solid #f4f4f4;background:transparent;color:#f4f4f4;padding:10px 16px;font-size:13px;letter-spacing:.04em}#bch-desktop-gate [data-gate-continue]:hover,#bch-desktop-gate [data-gate-continue]:focus{background:#f4f4f4;color:#111}";
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
    el.innerHTML = '<div class="gate-card"><p class="gate-kicker">Wireframe \u00b7 Desktop only</p><h1 id="bch-gate-title">This wireframe is desktop-ready only</h1><p>Please open it on a desktop or laptop. The layout is not designed for phones.</p><p class="gate-hi">\u092f\u0939 \u0935\u093e\u092f\u0930\u092b\u094d\u0930\u0947\u092e \u0921\u0947\u0938\u094d\u0915\u091f\u0949\u092a \u0915\u0947 \u0932\u093f\u090f \u0939\u0948\u0964 \u0915\u0943\u092a\u092f\u093e \u0921\u0947\u0938\u094d\u0915\u091f\u0949\u092a \u092a\u0930 \u0916\u094b\u0932\u0947\u0902\u0964</p><button type="button" data-gate-continue>Continue anyway</button></div>';
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
  if (!showDesktopGate()) document.addEventListener("DOMContentLoaded", showDesktopGate);
})();
