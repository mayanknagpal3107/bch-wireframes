/* BCH series / order-code family index — brochure ranges only, not fake SKUs */
(function () {
  function root() {
    if (window.__BCH_ROOT__) return window.__BCH_ROOT__;
    var scripts = document.getElementsByTagName("script");
    for (var i = 0; i < scripts.length; i++) {
      if (scripts[i].src && /catalog-index\.js(\?|#|$)/.test(scripts[i].src)) {
        return scripts[i].src.replace(/[^/]*catalog-index\.js(\?.*)?(#.*)?$/, "");
      }
    }
    return "";
  }
  var R = root();
  window.BCH_PART_INDEX = [
    { codes: ["BCHX10", "X10"], name: "MCB X10 Series", range: "6–63 A · SP / SPN / DP / TP / TPN / FP", href: R + "products/power-control.html#mcb", dl: "https://bchindia.com/wp-content/uploads/2025/02/fdp.pdf", family: "Power" },
    { codes: ["BCHXDCSP", "XDC"], name: "DC MCB BCHXDCSP", range: "35–125 A · 1.5 kA / 125 V DC", href: R + "products/power-control.html#mcb", dl: "https://bchindia.com/wp-content/uploads/2018/02/MCB_Leaflet.pdf", family: "Power" },
    { codes: ["BCHRCBR", "BCHRCB", "RCCB-R10"], name: "RCCB R10 / RCCB", range: "25 / 40 / 63 A · 30 / 100 / 300 mA · 2P / 4P", href: R + "products/power-control.html#rccb", dl: "https://bchindia.com/wp-content/uploads/2018/02/RCCB_Leaflet.pdf", family: "Power" },
    { codes: ["BCHPSPNSD", "BCHPHTPNSD", "Prime"], name: "Prime distribution boards", range: "4–16 way SPN / TPN · IP 42", href: R + "products/power-control.html", dl: "https://bchindia.com/wp-content/uploads/2025/02/fdp.pdf", family: "Power" },
    { codes: ["Resilient", "MCCB"], name: "Resilient MCCB", range: "16–630 A · 10–50 kA (E–V)", href: R + "products/power-control.html#mccb", dl: "https://bchindia.com/wp-content/uploads/2018/02/Resilient-MCCB-Catalogue.pdf", family: "Power" },
    { codes: ["Ultra Power", "UltraPower", "BU-BTX"], name: "Ultra Power ACB", range: "800–6300 A · 50–100 kA", href: R + "products/power-control/ultra-power-acb.html", dl: "https://bchindia.com/wp-content/uploads/2021/12/ACB-Ultra-Power.pdf", family: "Power" },
    { codes: ["TemPower-2", "TemPower", "Tempower"], name: "TemPower-2 ACB", range: "80–6300 A · 3P / 4P", href: R + "products/power-control.html#acb", dl: "https://bchindia.com/wp-content/uploads/2017/06/Tempower-2-ACB_Catalogue.pdf", family: "Power" },
    { codes: ["MPE", "MPE-16", "MPE-01", "MPH", "MS32"], name: "MPCB MPE / MPH / MS32", range: "0.1–25 A · 0.06–11 kW", href: R + "products/motor-control.html#mpcb", dl: "https://bchindia.com/wp-content/uploads/2018/02/BCH-MPCB-catalogue-MPE-series.pdf", family: "Motor control" },
    { codes: ["TCE061804", "TCE081804", "TCE101804", "TCE"], name: "TCE series enclosures", range: "IP66 / IK10 (single) · IP65 / IK10 (double)", href: R + "products/enclosures.html#tce", dl: "https://bchindia.com/wp-content/uploads/2020/10/tce-series-enclosure-catalogue-final-22.01.2026.pdf", family: "Enclosures" },
    { codes: ["Bhartia", "Bhartia 2.0"], name: "Bhartia 2.0 terminal box", range: "IP 66 / IK10", href: R + "products/enclosures/bhartia-2.html", dl: "https://bchindia.com/wp-content/uploads/2024/11/BHARTIA-ENCLOSURE-2.O.pdf", family: "Enclosures" },
    { codes: ["Citation"], name: "Citation starters", range: "0.5–20 HP typical · family fractional–250 HP", href: R + "products/motor-starters/citation-fasd-dol.html", dl: "https://bchindia.com/wp-content/uploads/2018/02/BCH-Citation-starters.pdf", family: "Starters" },
    { codes: ["FASD", "SASD", "DOL"], name: "Industrial DOL / FASD / SASD", range: "DOL 20–40 HP · FASD to 35–150 HP by size", href: R + "products/motor-starters/citation-fasd-dol.html", dl: "https://bchindia.com/wp-content/uploads/2018/02/BCH_INDUSTRIAL-DOL.pdf", family: "Starters" },
    { codes: ["Shakti"], name: "Shakti auto-start DOL", range: "Typical 3–20 HP · wide-band coil 190–400 V / 275–420 V", href: R + "products/motor-starters.html#shakti", dl: "https://bchindia.com/wp-content/uploads/2018/02/BCH_SHAKTI-Starters.pdf", family: "Starters" },
    { codes: ["Freedom"], name: "Freedom contactors", range: "AC-3 power contactors (not a starter range)", href: R + "products/motor-control.html#contactors", dl: "https://bchindia.com/wp-content/uploads/2018/02/Vacuum-Contactor-Catalogue.pdf", family: "Motor control" },
    { codes: ["NHD", "CPG"], name: "NHD / CPG contactors", range: "4-pole & 2-pole · 20 A AC-3 class", href: R + "products/motor-control.html#contactors", dl: "https://bchindia.com/wp-content/uploads/2018/02/BCH-Citation-starters.pdf", family: "Motor control" },
    { codes: ["SINUS PENTA", "SINUS", "PENTA"], name: "SINUS PENTA AC drive", range: "4.5–3000 kW · 380–415 V", href: R + "products/all.html#automation", dl: "https://bchindia.com/wp-content/uploads/2018/02/SINUS_PENTA_AC-DRIVE.pdf", family: "Drives" },
    { codes: ["ASAB", "ASAC"], name: "ASAB / ASAC soft starters", range: "ASAB 7–800 kW · 23–1600 A", href: R + "products/motor-starters.html#asab", dl: "https://bchindia.com/wp-content/uploads/2018/02/ASAB-Soft-starter.pdf", family: "Starters" }
  ];
  window.BCH_looksLikeCode = function (q) {
    var s = String(q || "").trim();
    if (!s) return false;
    if (/^(bch|tce|mpe|mph|ms32|sinus|asab|asac|nhd|cpg|x10|rccb)/i.test(s.replace(/\s+/g, ""))) return true;
    if (/[A-Za-z]{2,}[A-Za-z0-9-]{2,}/.test(s) && /\d/.test(s)) return true;
    return false;
  };
  window.BCH_filterParts = function (q) {
    var s = String(q || "").trim().toLowerCase();
    var idx = window.BCH_PART_INDEX || [];
    if (!s) return idx.slice();
    return idx.filter(function (row) {
      var hay = (row.codes.join(" ") + " " + row.name + " " + row.range + " " + row.family).toLowerCase();
      return hay.indexOf(s) !== -1 || row.codes.some(function (c) { return c.toLowerCase().indexOf(s) !== -1; });
    });
  };
})();
