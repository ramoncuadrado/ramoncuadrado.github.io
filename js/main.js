(function () {
  var list = document.getElementById("pub-list");
  var count = document.getElementById("pub-count");
  var buttons = document.querySelectorAll("[data-filter]");

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
        '<li class="pub">' +
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

  render("all");
})();
