ist.remove("is-open");
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
    var page = pageKey();
    if (page === "support" || page === "find-dealer") return;
    var existing = document.getElementById("bch-inquiry");
    var i18 = t();
    if (existing) {
      var h2 = existing.querySelector("[data-inquiry-h2], h2");
      var lead = existing.querySelector("[data-inquiry-lead], .lead");
      if (h2) h2.textContent = i18.inquiryH2;
      if (lead) lead.textContent = i18.inquiryLead;
      return;
    }
    var footer = document.querySelector(".site-footer");
    if (!footer) return;
    var wrap = document.createElement("div");
    wrap.innerHTML = inquiryHTML();
    footer.parentNode.insertBefore(wrap.firstChild, footer);
    var form = document.querySelector("form[data-inquiry-form]");
    if (!form) return;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      e.stopImmediatePropagation();
      var note = form.querySelector(".inquiry-note");
      if (note) {
        note.hidden = false;
        note.textContent = "Thank you — we’ll be in touch.";
      }
    });
  }

  function unlinkVigil() {
    document.querySelectorAll('a[href="vigil.html"], a[href*="vigil.html"]').forEach(function (a) {
      a.remove();
    });
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
          '<a href="https://www.facebook.com/bchelectric" target="_blank" rel="noopener">Facebook</a>';
        brand.parentNode.appendChild(soc);
      }
    });
    document.querySelectorAll(".footer-col h5").forEach(function (h) {
      var k = h.getAttribute("data-en") || h.textContent.trim();
      if (!h.getAttribute("data-en")) h.setAttribute("data-en", k);
      var map = { Products: i18.nav.products, Solutions: i18.nav.solutions, Support: i18.nav.support, Company: i18.nav.company };
      if (map[h.getAttribute("data-en")]) h.textContent = map[h.getAttribute("data-en")];
    });
    var legal = document.querySelector(".footer-legal");
    if (legal) {
      legal.innerHTML =
        '<a href="' + href("legal/privacy.html") + '">Privacy</a>' +
        '<a href="' + href("legal/terms.html") + '">Terms</a>' +
        '<a href="' + href("legal/data-privacy.html") + '">Data privacy</a>' +
        '<span class="footer-copy">© BCH Electric Limited 2026</span>' +
        '<a href="' + href("company/public-notices.html") + '">Public notices</a>' +
        '<a href="' + href("company/careers.html") + '">Careers</a>';
    }
    var grid = document.querySelector(".footer-grid");
    if (grid && !grid.querySelector("[data-footer-auth]")) {
      var auth = document.createElement("div");
      auth.className = "footer-col";
      auth.setAttribute("data-footer-auth", "1");
      auth.innerHTML =
        "<h5>Authenticity</h5>" +
        '<a href="' + href("support/verify-product.html") + '">Validate your product</a>' +
        '<a href="' + href("support/report-counterfeit.html") + '">Report a counterfeit</a>';
      grid.appendChild(auth);
    }
    document.querySelectorAll(".footer-col:not([data-footer-auth]) a").forEach(function (a) {
      var h = (a.getAttribute("href") || "").toLowerCase();
      if (h.indexOf("verify-product") !== -1 || h.indexOf("report-counterfeit") !== -1) {
        a.remove();
      }
    });
    document.querySelectorAll(".footer-col").forEach(function (col) {
      var h = col.querySelector("h5");
      if (!h) return;
      var en = (h.getAttribute("data-en") || h.textContent || "").toLowerCase();
      function addLink(path, label, needle) {
        if (col.querySelector('a[href*="' + needle + '"]')) return;
        var x = document.createElement("a");
        x.href = href(path);
        x.textContent = label;
        col.appendChild(x);
      }
      if (en.indexOf("product") !== -1) {
        addLink("products/combo-kits.html", "Combo kits", "combo-kits");
      }
      if (en.indexOf("solution") !== -1) {
        addLink("solutions/custom-panels.html", "Custom panels", "custom-panels");
      }
      if (en.indexOf("support") !== -1 || en.indexOf("सहायता") !== -1 || en.indexOf("service") !== -1) {
        addLink("support/dealer-tools.html", "Dealer tools", "dealer-tools");
        addLink("support/download-center.html", "Download Center", "download-center");
        addLink("support/digital-ecosystem.html", "Digital ecosystem", "digital-ecosystem");
      }
      if (/company/i.test(h.textContent)) {
        col.querySelectorAll("a").forEach(function (a) {
          var hrf = (a.getAttribute("href") || "").toLowerCase();
          if (hrf.indexOf("inventory") !== -1) { a.remove(); return; }
          if (hrf.indexOf("board.html") !== -1) {
            a.setAttribute("href", href("company/leadership.html"));
            a.textContent = "Leadership";
          }
          if (hrf.indexOf("research.html") !== -1) {
            a.remove();
            return;
          }
          if (hrf.indexOf("manufacturing.html") !== -1) {
            a.textContent = "Manufacturing & R&D";
          }
          if (hrf.indexOf("careers") !== -1) {
            a.setAttribute("href", href("company/careers.html"));
            a.removeAttribute("target");
            a.removeAttribute("rel");
          }
        });
        if (!col.querySelector('a[href*="leadership"]')) {
  