/* BCH Electric Wireframe — nearest support (24 live sales offices + resident-engineer cities) */
(function () {
  if (window.__BCH_OFFICES__) return;
  window.__BCH_OFFICES__ = true;

  function officeRoot() {
    if (window.__BCH_ROOT__) return window.__BCH_ROOT__;
    var scripts = document.getElementsByTagName("script");
    for (var i = 0; i < scripts.length; i++) {
      if (scripts[i].src && /offices\.js(\?|#|$)/.test(scripts[i].src)) {
        return scripts[i].src.replace(/[^/]*offices\.js(\?.*)?(#.*)?$/, "");
      }
    }
    return "";
  }


  var HELPLINE = "1800 103 9262";
  var HELPLINE_MAIL = "customercare@bchindia.com";

  /*
   * Resident-engineer cities (live sales-offices page lists names only, no street addresses)
   * resolve to the nearest FULL sales office:
   *   Baddi → Chandigarh
   *   Bardhman, Durgapur → Kolkata
   *   Bhilai, Korba → Raipur
   *   Bhiwadi, Kota, Udaipur → Jaipur
   *   Bhopal, Gwalior → Indore
   *   Haldwani, Haridwar → Dehradun
   *   Jalandhar → Ludhiana
   *   Muzaffarnagar → Delhi 1
   *   Mysore → Bangalore
   *   Nashik, Navi Mumbai → Mumbai
   *   Nagpur → Pune  (same-state MH; Raipur is the other candidate)
   *   Puducherry, Thiruvananthapuram → Chennai
   *   Rajkot → Ahmedabad
   *   Rajahmundry → Hyderabad
   *   Ranchi → Jamshedpur
   *   Rourkela → Bhubaneswar
   *   Solapur → Pune
   *   Salem → Coimbatore
   *   Varanasi → Lucknow
   *   Warangal → Hyderabad
   * Patna is a full sales office (also listed in the resident-engineer city list).
   */

  var OFFICES = [
    { id: "delhi-1", name: "Delhi 1", city: "Delhi", state: "Delhi", region: "North", address: "801, Akash Deep Building, 26A, Barakhamba Road, New Delhi – 110 001", phone: "011-23313878 / 66307065", email: "delhi@bchindia.com" },
    { id: "delhi-2", name: "Delhi 2", city: "Delhi", state: "Delhi", region: "North", address: "701 Deepali Building, 92 Nehru Place, New Delhi- 110019", phone: "011-45720334", email: "delhi2@bchindia.com" },
    { id: "chandigarh", name: "Chandigarh", city: "Chandigarh", state: "Haryana", region: "North", address: "SCO-270, 2nd Floor, Sector-16, Panchkula, Haryana - 134113", phone: "0172-5078957 / 5049905", email: "chandigarh@bchindia.com" },
    { id: "faridabad", name: "Faridabad", city: "Faridabad", state: "Haryana", region: "North", address: "20/4, Mathura Road, Faridabad – 121 006 (Haryana)", phone: "0129-2304016", email: "faridabad@bchindia.com" },
    { id: "dehradun", name: "Dehradun", city: "Dehradun", state: "Uttarakhand", region: "North", address: "Plot No. 8, Co-Operative Industrial Estate, Patel Nagar, Dehradun - 248 001", phone: "", email: "dehradun@bchindia.com" },
    { id: "jaipur", name: "Jaipur", city: "Jaipur", state: "Rajasthan", region: "North", address: "25, Hathroi, Gopalbari, Jaipur – 302 001", phone: "0141-5104521", email: "jaipur@bchindia.com" },
    { id: "lucknow", name: "Lucknow", city: "Lucknow", state: "Uttar Pradesh", region: "North", address: "Shop No. 3, First Floor, Tower T-10, Millennium Place IBB - 2, Sushant Golf City, Sultanpur Road, Lucknow U.P. - 226030", phone: "0522-4025597 / 4025997", email: "lucknow@bchindia.com" },
    { id: "ludhiana", name: "Ludhiana", city: "Ludhiana", state: "Punjab", region: "North", address: "S.C.O.- 18, 2nd Floor, Feroze Gandhi Market, Ludhiana – 140 001", phone: "0161-5021807 / 5022808", email: "ludhiana@bchindia.com" },
    { id: "ahmedabad", name: "Ahmedabad", city: "Ahmedabad", state: "Gujarat", region: "West", address: "401, Shilp Zeveri, Beside Shyamal iconic, Above Westside, Shyamal Cross Road, Ellisbridge, Ahmedabad - 380015", phone: "079 46047740, 9909909249", email: "ahmedabad@bchindia.com" },
    { id: "vadodara", name: "Vadodara", city: "Vadodara", state: "Gujarat", region: "West", address: "301, Third Floor, “Florence Classic”, 10, Ashapuri Co-Op. Hsg. Soc. Ltd., Opp. VUDA Housing, Near Cow Circle, Akota, Vadodara (Gujarat) – 390 020", phone: "+91-265-6548444 / 2345068 / 2345069", email: "vadodara@bchindia.com" },
    { id: "indore", name: "Indore", city: "Indore", state: "Madhya Pradesh", region: "West", address: "330-331, Indraprastha Tower, 3rd Floor, 6, M.G. Road, Indore – 452 001", phone: "0731-2510011", email: "indore@bchindia.com" },
    { id: "mumbai", name: "Mumbai", city: "Mumbai", state: "Maharashtra", region: "West", address: "A-151, Mittal Tower, Nariman Point, Mumbai – 400 021", phone: "022-22822947 / 22850162", email: "mumbai@bchindia.com" },
    { id: "pune", name: "Pune", city: "Pune", state: "Maharashtra", region: "West", address: "S. No. – 38/4A/1FP Flat No.-A, 605 Kumar Surabhi Building, Opposite Sai Baba Mandir, Satara Road – Pune Maharashtra - 411009", phone: "9890012945", email: "pune@bchindia.com" },
    { id: "raipur", name: "Raipur", city: "Raipur", state: "Chhattisgarh", region: "West", address: "6th Floor, Office No-607, Babylon Capital Near Oswal Petrol Pump, VIP Chowk, G.E. Road, Raipur (C.G.) – 492006", phone: "0771-4020213 / 0771-4045053", email: "raipur@bchindia.com" },
    { id: "bangalore", name: "Bangalore", city: "Bangalore", state: "Karnataka", region: "South", address: "130/5, 2nd Floor KH Road (Double road) Behind GK Printers, Bangalore - 560027", phone: "9845594079, 08022236759", email: "bangalore@bchindia.com" },
    { id: "chennai", name: "Chennai", city: "Chennai", state: "Tamil Nadu", region: "South", address: "Flat No: 3A, 3rd Floor Sree Apartments, No: 508 TTK Road, Alwarpet, Chennai – 600 018", phone: "044-24337046 / 24337047", email: "chennai@bchindia.com" },
    { id: "coimbatore", name: "Coimbatore", city: "Coimbatore", state: "Tamil Nadu", region: "South", address: "87, Dr. Nanjappa Road, Coimbatore – 641 018", phone: "0422-2305311", email: "coimbatore@bchindia.com" },
    { id: "trichy", name: "Trichy", city: "Trichy", state: "Tamil Nadu", region: "South", address: "2B, Kannagi Street, Ayyappa Nagar, K.K. Nagar, Trichy – 620021, Tamil Nadu", phone: "0431-4040497", email: "trichy@bchindia.com" },
    { id: "madurai", name: "Madurai", city: "Madurai", state: "Tamil Nadu", region: "South", address: "12, Parvathi Plaza-3rd Floor, 70 Feet Road, Ellis Nagar Madurai-625016 Tamil Nadu", phone: "", email: "madurai@bchindia.com" },
    { id: "hyderabad", name: "Hyderabad", city: "Hyderabad", state: "Telangana", region: "South", address: "1-8-303/48/13/102, Arya One, 2nd Floor, P. G. Road, Secunderabad – 500 003", phone: "040-66206263 / 27890306", email: "hyderabad@bchindia.com" },
    { id: "bhubaneswar", name: "Bhubaneswar", city: "Bhubaneswar", state: "Odisha", region: "East", address: "Mallick Commercial Complex Plot No. - A/67, Unit - 3 Bhubaneswar - 751 001", phone: "0674-2380988", email: "bhubaneswar@bchindia.com" },
    { id: "jamshedpur", name: "Jamshedpur", city: "Jamshedpur", state: "Jharkhand", region: "East", address: "A.J. Tower 2B, 2nd Floor R-Road, Bistupur Jamshedpur-831001", phone: "0657-2321097 / 2321481", email: "jamshedpur@bchindia.com" },
    { id: "kolkata", name: "Kolkata", city: "Kolkata", state: "West Bengal", region: "East", address: "Block 1E, 1st Floor 216, A.J.C Bose Road, Kolkata (West Bengal)-700017", phone: "033-22871728", email: "kolkata@bchindia.com" },
    { id: "patna", name: "Patna", city: "Patna", state: "Bihar", region: "East", address: "No. 703, Seventh Floor, Luv – Kush Tower, Exhibition Road, Patna, Bihar - 800001", phone: "", email: "" }
  ];

  /* Extra selectable cities (office aliases + resident-engineer). officeId = nearest full office. */
  var CITIES = [
    { state: "Delhi", city: "Delhi 1", officeId: "delhi-1" },
    { state: "Delhi", city: "Delhi 2", officeId: "delhi-2" },
    { state: "Delhi", city: "New Delhi", officeId: "delhi-1", also: "delhi-2" },
    { state: "Haryana", city: "Chandigarh", officeId: "chandigarh" },
    { state: "Haryana", city: "Panchkula", officeId: "chandigarh" },
    { state: "Haryana", city: "Faridabad", officeId: "faridabad" },
    { state: "Himachal Pradesh", city: "Baddi", officeId: "chandigarh" },
    { state: "Uttarakhand", city: "Dehradun", officeId: "dehradun" },
    { state: "Uttarakhand", city: "Haldwani", officeId: "dehradun" },
    { state: "Uttarakhand", city: "Haridwar", officeId: "dehradun" },
    { state: "Rajasthan", city: "Jaipur", officeId: "jaipur" },
    { state: "Rajasthan", city: "Kota", officeId: "jaipur" },
    { state: "Rajasthan", city: "Udaipur", officeId: "jaipur" },
    { state: "Rajasthan", city: "Bhiwadi", officeId: "jaipur" },
    { state: "Uttar Pradesh", city: "Lucknow", officeId: "lucknow" },
    { state: "Uttar Pradesh", city: "Varanasi", officeId: "lucknow" },
    { state: "Uttar Pradesh", city: "Muzaffarnagar", officeId: "delhi-1" },
    { state: "Punjab", city: "Ludhiana", officeId: "ludhiana" },
    { state: "Punjab", city: "Jalandhar", officeId: "ludhiana" },
    { state: "Gujarat", city: "Ahmedabad", officeId: "ahmedabad" },
    { state: "Gujarat", city: "Vadodara", officeId: "vadodara" },
    { state: "Gujarat", city: "Rajkot", officeId: "ahmedabad" },
    { state: "Madhya Pradesh", city: "Indore", officeId: "indore" },
    { state: "Madhya Pradesh", city: "Bhopal", officeId: "indore" },
    { state: "Madhya Pradesh", city: "Gwalior", officeId: "indore" },
    { state: "Maharashtra", city: "Mumbai", officeId: "mumbai" },
    { state: "Maharashtra", city: "Navi Mumbai", officeId: "mumbai" },
    { state: "Maharashtra", city: "Nashik", officeId: "mumbai" },
    { state: "Maharashtra", city: "Pune", officeId: "pune" },
    { state: "Maharashtra", city: "Solapur", officeId: "pune" },
    { state: "Maharashtra", city: "Nagpur", officeId: "pune" },
    { state: "Chhattisgarh", city: "Raipur", officeId: "raipur" },
    { state: "Chhattisgarh", city: "Bhilai", officeId: "raipur" },
    { state: "Chhattisgarh", city: "Korba", officeId: "raipur" },
    { state: "Karnataka", city: "Bangalore", officeId: "bangalore" },
    { state: "Karnataka", city: "Mysore", officeId: "bangalore" },
    { state: "Tamil Nadu", city: "Chennai", officeId: "chennai" },
    { state: "Tamil Nadu", city: "Coimbatore", officeId: "coimbatore" },
    { state: "Tamil Nadu", city: "Trichy", officeId: "trichy" },
    { state: "Tamil Nadu", city: "Madurai", officeId: "madurai" },
    { state: "Tamil Nadu", city: "Salem", officeId: "coimbatore" },
    { state: "Puducherry", city: "Puducherry", officeId: "chennai" },
    { state: "Kerala", city: "Thiruvananthapuram", officeId: "chennai" },
    { state: "Telangana", city: "Hyderabad", officeId: "hyderabad" },
    { state: "Telangana", city: "Warangal", officeId: "hyderabad" },
    { state: "Andhra Pradesh", city: "Rajahmundry", officeId: "hyderabad" },
    { state: "Odisha", city: "Bhubaneswar", officeId: "bhubaneswar" },
    { state: "Odisha", city: "Rourkela", officeId: "bhubaneswar" },
    { state: "Jharkhand", city: "Jamshedpur", officeId: "jamshedpur" },
    { state: "Jharkhand", city: "Ranchi", officeId: "jamshedpur" },
    { state: "West Bengal", city: "Kolkata", officeId: "kolkata" },
    { state: "West Bengal", city: "Bardhman", officeId: "kolkata" },
    { state: "West Bengal", city: "Durgapur", officeId: "kolkata" },
    { state: "Bihar", city: "Patna", officeId: "patna" }
  ];

  var STATE_ORDER = [
    "Delhi", "Haryana", "Himachal Pradesh", "Uttarakhand", "Rajasthan", "Uttar Pradesh", "Punjab",
    "Gujarat", "Madhya Pradesh", "Maharashtra", "Chhattisgarh",
    "Karnataka", "Tamil Nadu", "Puducherry", "Kerala", "Telangana", "Andhra Pradesh",
    "Odisha", "Jharkhand", "West Bengal", "Bihar"
  ];

  function byId(id) {
    for (var i = 0; i < OFFICES.length; i++) if (OFFICES[i].id === id) return OFFICES[i];
    return null;
  }

  function citiesForState(state) {
    var out = [];
    var seen = {};
    CITIES.forEach(function (c) {
      if (c.state !== state || seen[c.city]) return;
      seen[c.city] = 1;
      out.push(c);
    });
    out.sort(function (a, b) { return a.city.localeCompare(b.city); });
    return out;
  }

  function officesInState(state) {
    return OFFICES.filter(function (o) { return o.state === state; });
  }

  function pageKind() {
    var p = (document.body && document.body.getAttribute("data-page")) || "";
    if (p === "contact" || p === "sales-offices" || p === "find-dealer") return p;
    return "";
  }

  function escapeHtml(s) {
    return String(s || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function cardHTML(office, kind, resolvedFrom) {
    var email = office.email
      ? '<div class="email"><a href="mailto:' + escapeHtml(office.email) + '">' + escapeHtml(office.email) + "</a></div>"
      : "";
    var phone = office.phone ? '<div class="tel">' + escapeHtml(office.phone) + "</div>" : "";
    var note = "";
    if (kind === "find-dealer") {
      note = "<p class=\"ns-note\">This sales office can connect you to an authorised dealer. A public dealer directory is not on the live site.</p>";
    }
    if (resolvedFrom) {
      note += "<p class=\"ns-note\">Resident-engineer city “" + escapeHtml(resolvedFrom) + "” — nearest full sales office.</p>";
    }
    var mailCta = office.email
      ? '<a class="btn" href="mailto:' + escapeHtml(office.email) + '">Email office</a>'
      : "";
    return (
      '<article class="ns-card office-card is-nearest" data-office-id="' + escapeHtml(office.id) + '">' +
      '<span class="tag">' + escapeHtml(office.region) + "</span>" +
      "<h3>" + escapeHtml(office.name) + "</h3>" +
      '<p class="ns-city">' + escapeHtml(office.city) + " · " + escapeHtml(office.state) + "</p>" +
      (kind === "find-dealer" ? "" : "<address>" + escapeHtml(office.address) + "</address>") +
      phone + email + note +
      '<div class="btn-row">' +
      '<a class="btn btn-fill" href="' + officeRoot() + 'contact/index.html">Enquire</a>' +
      mailCta +
      "</div>" +
      "</article>"
    );
  }

  function highlightOfficeCards(ids) {
    var cards = document.querySelectorAll(".office-card");
    if (!cards.length) return;
    var set = {};
    (ids || []).forEach(function (id) { set[id] = 1; });
    var hasFilter = ids && ids.length;
    cards.forEach(function (card) {
      if (card.closest("#nearest-support")) return;
      var h = card.querySelector("h3");
      var name = h ? h.textContent.trim() : "";
      var match = OFFICES.filter(function (o) { return o.name === name; })[0];
      var id = match ? match.id : "";
      var on = !hasFilter || (id && set[id]);
      card.classList.toggle("is-nearest", hasFilter && on);
      card.classList.toggle("is-dimmed", hasFilter && !on);
      card.hidden = hasFilter ? !on : false;
    });
  }

  function renderResults(wrap, offices, kind, resolvedFrom) {
    var box = wrap.querySelector("#ns-results");
    if (!box) return;
    if (!offices.length) {
      box.hidden = false;
      box.innerHTML = '<p class="ns-empty">No sales office in that selection. Use the helpline below.</p>';
      highlightOfficeCards([]);
      return;
    }
    var title = offices.length === 1 ? "Nearest support" : "Sales offices in this state";
    box.hidden = false;
    box.innerHTML =
      '<span class="section-label">' + title + "</span>" +
      offices.map(function (o) { return cardHTML(o, kind, resolvedFrom); }).join("");
    highlightOfficeCards(offices.map(function (o) { return o.id; }));
  }

  function bind(wrap) {
    if (!wrap || wrap.getAttribute("data-ns-bound") === "1") return;
    wrap.setAttribute("data-ns-bound", "1");
    var stateSel = wrap.querySelector("#ns-state");
    var citySel = wrap.querySelector("#ns-city");
    var form = wrap.querySelector("form");
    var kind = pageKind();

    STATE_ORDER.forEach(function (st) {
      var opt = document.createElement("option");
      opt.value = st;
      opt.textContent = st;
      stateSel.appendChild(opt);
    });

    function fillCities() {
      var st = stateSel.value;
      citySel.innerHTML = '<option value="">Select city</option>';
      if (!st) {
        citySel.disabled = true;
        return;
      }
      citySel.disabled = false;
      citiesForState(st).forEach(function (c) {
        var opt = document.createElement("option");
        opt.value = c.city;
        opt.textContent = c.city;
        citySel.appendChild(opt);
      });
    }

    function currentOffices() {
      var st = stateSel.value;
      var city = citySel.value;
      if (!st) return { offices: [], from: "" };
      if (!city) return { offices: officesInState(st).length ? officesInState(st) : nearestForState(st), from: "" };
      var hit = null;
      citiesForState(st).forEach(function (c) {
        if (c.city === city) hit = c;
      });
      if (!hit) return { offices: officesInState(st), from: "" };
      var list = [];
      var a = byId(hit.officeId);
      if (a) list.push(a);
      if (hit.also) {
        var b = byId(hit.also);
        if (b) list.push(b);
      }
      var isOfficeCity = OFFICES.some(function (o) { return o.city === city || o.name === city; });
      return { offices: list, from: isOfficeCity ? "" : city };
    }

    function nearestForState(st) {
      var cities = citiesForState(st);
      var ids = {};
      var out = [];
      cities.forEach(function (c) {
        if (ids[c.officeId]) return;
        ids[c.officeId] = 1;
        var o = byId(c.officeId);
        if (o) out.push(o);
      });
      return out;
    }

    function update() {
      var r = currentOffices();
      if (!stateSel.value) {
        var box = wrap.querySelector("#ns-results");
        if (box) {
          box.hidden = true;
          box.innerHTML = "";
        }
        highlightOfficeCards(null);
        return;
      }
      renderResults(wrap, r.offices, kind, r.from);
    }

    stateSel.addEventListener("change", function () {
      fillCities();
      citySel.value = "";
      update();
    });
    citySel.addEventListener("change", update);
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        update();
      });
    }
    fillCities();
  }

  function widgetHTML(kind) {
    var extra = kind === "find-dealer"
      ? '<p class="lead">The live site does not publish a public dealer directory. Pick a state and city — we show the sales office that can connect you to an authorised dealer.</p>'
      : '<p class="lead">Pick a state and city. Toll-free 1800 103 9262 · customercare@bchindia.com.</p>';
    return (
      '<section id="nearest-support" class="nearest-support" aria-label="Nearest support">' +
      '<form data-wireframe-form data-nearest-form novalidate>' +
      '<span class="section-label">Support near you</span>' +
      "<h2>Where do you need support?</h2>" +
      extra +
      '<div class="form-grid ns-grid">' +
      '<div class="field"><label for="ns-state">State</label>' +
      '<select id="ns-state" name="state"><option value="">Select state</option></select></div>' +
      '<div class="field"><label for="ns-city">City</label>' +
      '<select id="ns-city" name="city" disabled><option value="">Select city</option></select></div>' +
      "</div>" +
      '<div class="btn-row"><button type="submit" class="btn btn-fill">Find support</button></div>' +
      '<div class="form-note" hidden></div>' +
      "</form>" +
      '<div id="ns-results" class="ns-results" hidden></div>' +
      '<p class="helpline-meta">Helpline <strong>' + HELPLINE + '</strong> · <a href="mailto:' + HELPLINE_MAIL + '">' + HELPLINE_MAIL + "</a></p>" +
      "</section>"
    );
  }

  function mount() {
    var kind = pageKind();
    if (!kind) return;
    var existing = document.getElementById("nearest-support");
    if (!existing) {
      var wrap = document.createElement("div");
      wrap.innerHTML = widgetHTML(kind);
      existing = wrap.firstChild;
      var header = document.querySelector(".page-header");
      if (header && header.parentNode) {
        if (header.nextSibling) header.parentNode.insertBefore(existing, header.nextSibling);
        else header.parentNode.appendChild(existing);
      } else {
        var main = document.querySelector("main .container") || document.querySelector("main");
        if (main) main.insertBefore(existing, main.firstChild);
      }
    }
    bind(existing);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", mount);
  } else {
    mount();
  }
})();
