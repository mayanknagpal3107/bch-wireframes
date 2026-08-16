        addLink("company/leadership.html", "Leadership", "leadership");
        }
        if (!col.querySelector('a[href*="brand-media"]')) {
          addLink("company/brand-media.html", "Brand & Media", "brand-media");
        }
        if (!col.querySelector('a[href*="dpdp"]')) {
          var a = document.createElement("a");
          a.href = href("legal/dpdp.html");
          a.textContent = "DPDP compliance";
          col.appendChild(a);
        }
      }
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
      "media-post": 1,
      "case-study-post": 1
    };
    if (!articlePages[page]) return;
    if (document.querySelector(".article-layout")) return;
    var header = document.querySelector(".page-header");
    if (!header) return;
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
      '<section class="article-explore" aria-label="Explore with AI">' +
        '<span class="section-label">Explore with AI</span>' +
        '<div class="article-loader" aria-label="Loader">' +
          '<div class="article-load-track" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0"><i></i></div>' +
          '<p class="article-load-status">Loading article…</p>' +
        "</div>" +
        '<div class="article-open is-wait">' +
          '<div class="article-open-row">' +
            '<a class="btn btn-fill" target="_blank" rel="noopener" href="https://claude.ai/new?q=' + q + '">Claude</a>' +
            '<a class="btn" target="_blank" rel="noopener" href="https://chatgpt.com/?q=' + q + '">ChatGPT</a>' +
            '<a class="btn" href="#flexicity" data-tool="FlexiCity">FlexiCity</a>' +
            '<a class="btn" href="' + esc(liveUrl || "#") + '" target="_blank" rel="noopener">Blog</a>' +
            '<a class="btn" href="#iconetsector" data-tool="IconetSector">IconetSector</a>' +
          "</div>" +
        "</div>" +
      "</section>" +
      '<section class="article-share" aria-label="Share">' +
        '<span class="article-share-label">Share it on</span>' +
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

    var bar = tools.querySelector(".article-load-track i");
    var status = tools.querySelector(".article-load-status");
    var open = tools.querySelector(".article-open");
    var track = tools.querySelector(".article-load-track");
    var n = 0;
    var timer = setInterval(function () {
      n += 8;
      if (n > 100) n = 100;
      if (bar) bar.style.width = n + "%";
      if (track) track.setAttribute("aria-valuenow", String(n));
      if (n >= 100) {
        clearInterval(timer);
        if (status) status.textContent = "Article ready.";
        if (open) open.classList.remove("is-wait");
      }
    }, 40);

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
        ["company/news/product-demo-at-hindalco-belur-june-2018.html", "Product Demo at Hindalco, Belur : June 2018"],
        ["blogs/dol-starter-wiring-diagram.html", "DOL starter wiring diagram and sequence of operation explained"]
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
    document.que