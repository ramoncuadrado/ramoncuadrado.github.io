(function () {
  // Citations per year from Google Scholar. Update together with the date in index.html.
  var CITES = [
    { year: 2019, n: 57 },
    { year: 2020, n: 60 },
    { year: 2021, n: 113 },
    { year: 2022, n: 148 },
    { year: 2023, n: 162 },
    { year: 2024, n: 200 },
    { year: 2025, n: 278 },
    { year: 2026, n: 292, partial: true }
  ];

  /* Publications ------------------------------------------------------- */

  var list = document.getElementById("pub-list");
  var count = document.getElementById("pub-count");
  var buttons = document.querySelectorAll("[data-filter]");
  var summaryToggle = document.getElementById("summary-toggle");

  var filters = {
    all: function () { return true; },
    selected: function (p) { return p.selected; },
    first: function (p) { return p.first; }
  };

  function boldMe(authors) {
    return authors.replace(/R\. Cuadrado/g, "<strong>R. Cuadrado</strong>");
  }

  function links(p) {
    var out = [];
    if (p.doi) out.push('<a href="https://doi.org/' + p.doi + '" target="_blank" rel="noopener">DOI</a>');
    if (p.arxiv) out.push('<a href="https://arxiv.org/abs/' + p.arxiv + '" target="_blank" rel="noopener">arXiv</a>');
    return out.join("");
  }

  function tags(p) {
    var out = "";
    if (p.status) out += '<span class="tag tag-status">' + p.status + "</span>";
    if (p.first) out += '<span class="tag">First author</span>';
    if (p.corr) out += '<span class="tag">Corresponding</span>';
    if (p.cites) out += '<span class="tag tag-cites">' + p.cites + " citations</span>";
    return out;
  }

  function render(name) {
    var items = PUBLICATIONS.filter(filters[name]);
    var html = "";
    var year = null;
    items.forEach(function (p) {
      if (p.year !== year) {
        if (year !== null) html += "</ol>";
        year = p.year;
        html += '<h3 class="pub-year">' + year + '</h3><ol class="pubs">';
      }
      html +=
        '<li class="pub" id="pub-' + p.n + '">' +
        '<span class="pub-n">' + p.n + "</span>" +
        '<div class="pub-body">' +
        '<p class="pub-title">' + p.title + "</p>" +
        '<p class="pub-authors">' + boldMe(p.authors) + "</p>" +
        '<p class="pub-meta"><span class="pub-venue">' + p.venue + (p.status ? "" : " (" + p.year + ")") + "</span>" +
        tags(p) + links(p) + "</p>" +
        (p.summary ? '<p class="pub-summary">' + p.summary + "</p>" : "") +
        "</div></li>";
    });
    if (year !== null) html += "</ol>";
    list.innerHTML = html;
    count.textContent = items.length + (items.length === 1 ? " paper" : " papers");
    buttons.forEach(function (b) {
      b.setAttribute("aria-pressed", b.dataset.filter === name ? "true" : "false");
    });
  }

  buttons.forEach(function (b) {
    b.addEventListener("click", function () { render(b.dataset.filter); });
  });

  function setSummaries(on) {
    list.classList.toggle("hide-summaries", !on);
    summaryToggle.setAttribute("aria-pressed", on ? "true" : "false");
    try { localStorage.setItem("summaries", on ? "1" : "0"); } catch (e) {}
  }

  summaryToggle.addEventListener("click", function () {
    setSummaries(summaryToggle.getAttribute("aria-pressed") !== "true");
  });

  var stored = null;
  try { stored = localStorage.getItem("summaries"); } catch (e) {}
  setSummaries(stored !== "0");

  render("all");

  // Links to a paper (e.g. from the timeline) must work whatever filter is active.
  function showPaper() {
    var m = location.hash.match(/^#pub-(\d+)$/);
    if (!m) return;
    var n = Number(m[1]);
    var visible = document.getElementById("pub-" + n);
    if (!visible) render("all");
    var el = document.getElementById("pub-" + n);
    document.querySelectorAll(".pub.is-target").forEach(function (x) { x.classList.remove("is-target"); });
    if (el) { el.classList.add("is-target"); el.scrollIntoView(); }
  }
  window.addEventListener("hashchange", showPaper);
  if (location.hash.indexOf("#pub-") === 0) showPaper();

  /* Citations chart ------------------------------------------------------ */

  function citesChart() {
    var host = document.getElementById("cites-chart");
    var tbody = document.querySelector("#cites-table tbody");
    if (!host) return;

    var W = 520, H = 210, padL = 34, padR = 8, padT = 22, padB = 26;
    var max = 300, ticks = [0, 100, 200, 300];
    var plotW = W - padL - padR, plotH = H - padT - padB;
    var band = plotW / CITES.length;
    var barW = Math.min(24, band * 0.5);
    var ns = "http://www.w3.org/2000/svg";

    function y(v) { return padT + plotH - (v / max) * plotH; }

    var svg = '<svg viewBox="0 0 ' + W + " " + H + '" role="img" aria-label="Citations per year, 2019 to 2026, rising from 57 to 292">';
    ticks.forEach(function (t) {
      svg += '<line class="' + (t === 0 ? "c-base" : "c-grid") + '" x1="' + padL + '" x2="' + (W - padR) + '" y1="' + y(t) + '" y2="' + y(t) + '"/>';
      svg += '<text class="c-tick" x="' + (padL - 8) + '" y="' + (y(t) + 4) + '" text-anchor="end">' + t + "</text>";
    });

    var label = { 2019: true, 2025: true, 2026: true };
    CITES.forEach(function (d, i) {
      var cx = padL + band * i + band / 2;
      var x0 = cx - barW / 2, top = y(d.n), base = y(0), r = 4;
      var path = "M" + x0 + "," + base + "V" + (top + r) + "Q" + x0 + "," + top + " " + (x0 + r) + "," + top +
        "H" + (x0 + barW - r) + "Q" + (x0 + barW) + "," + top + " " + (x0 + barW) + "," + (top + r) + "V" + base + "Z";
      svg += '<g class="c-col" data-i="' + i + '">';
      svg += '<rect class="c-hit" x="' + (cx - band / 2) + '" y="' + padT + '" width="' + band + '" height="' + plotH + '"/>';
      svg += '<path class="c-bar' + (d.partial ? " is-partial" : "") + '" d="' + path + '"/>';
      svg += "</g>";
      if (label[d.year]) svg += '<text class="c-val" x="' + cx + '" y="' + (top - 6) + '" text-anchor="middle">' + d.n + "</text>";
      svg += '<text class="c-year" x="' + cx + '" y="' + (H - 8) + '" text-anchor="middle">' + d.year + "</text>";
      tbody.insertAdjacentHTML("beforeend", "<tr><td>" + d.year + "</td><td>" + d.n + (d.partial ? " (in progress)" : "") + "</td></tr>");
    });
    svg += "</svg>";
    host.innerHTML = svg + '<div class="c-tip" role="presentation"></div>';

    var tip = host.querySelector(".c-tip");
    var svgEl = host.querySelector("svg");
    host.querySelectorAll(".c-col").forEach(function (g) {
      g.addEventListener("mouseenter", function () {
        var d = CITES[Number(g.dataset.i)];
        var box = svgEl.getBoundingClientRect();
        var scale = box.width / W;
        var i = Number(g.dataset.i);
        tip.textContent = d.year + ": " + d.n + " citations" + (d.partial ? " so far" : "");
        tip.style.left = (padL + band * i + band / 2) * scale + "px";
        tip.style.top = y(d.n) * scale + "px";
        tip.classList.add("is-on");
      });
      g.addEventListener("mouseleave", function () { tip.classList.remove("is-on"); });
    });
    void ns;
  }
  citesChart();

  /* Current section in the navigation ----------------------------------- */

  var navLinks = document.querySelectorAll(".site-header nav a");
  if ("IntersectionObserver" in window) {
    var map = {};
    navLinks.forEach(function (a) { map[a.getAttribute("href").slice(1)] = a; });
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        navLinks.forEach(function (a) { a.classList.remove("is-current"); });
        if (map[e.target.id]) map[e.target.id].classList.add("is-current");
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    Object.keys(map).forEach(function (id) {
      var el = document.getElementById(id);
      if (el) obs.observe(el);
    });
  }
})();
