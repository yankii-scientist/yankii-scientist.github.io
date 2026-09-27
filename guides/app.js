(function () {
  var guides = Array.isArray(window.GUIDES) ? window.GUIDES.filter(function (g) { return g && g.title; }) : [];
  var $ = function (id) { return document.getElementById(id); };
  var grid = $('grid'), empty = $('empty'), nomatch = $('nomatch'), filters = $('filters'), count = $('count');
  var selTopic = $('f-topic'), selTool = $('f-tool');
  if (!guides.length) return; // empty state stays visible

  empty.hidden = true;
  filters.hidden = false;

  function uniq(key) {
    var seen = {};
    guides.forEach(function (g) { if (g[key]) seen[g[key]] = 1; });
    return Object.keys(seen).sort(function (a, b) { return a.localeCompare(b); });
  }
  function fill(sel, values) {
    values.forEach(function (v) { var o = document.createElement('option'); o.value = o.textContent = v; sel.appendChild(o); });
  }
  fill(selTopic, uniq('topic'));
  fill(selTool, uniq('tool'));

  function el(tag, cls, text) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (text != null) e.textContent = text;
    return e;
  }
  function safeUrl(u) { return /^https?:\/\//i.test(u || '') ? u : ''; }

  function card(g) {
    var li = el('li'), c = el('article', 'gcard');
    c.appendChild(el('h3', '', g.title));
    var tags = el('div', 'tags');
    if (g.topic) tags.appendChild(el('span', 'tag', g.topic));
    if (g.tool) tags.appendChild(el('span', 'tag tool', g.tool));
    c.appendChild(tags);
    if (g.description) c.appendChild(el('p', '', g.description));
    if (g.keyword) {
      var k = el('div', 'kw', 'Comment '); k.appendChild(el('b', '', g.keyword));
      c.appendChild(k);
    }
    var url = safeUrl(g.link);
    if (url) { var a = el('a', 'get', 'Open the guide'); a.href = url; c.appendChild(a); }
    li.appendChild(c);
    return li;
  }

  function render() {
    var t = selTopic.value, tl = selTool.value;
    var shown = guides.filter(function (g) { return (!t || g.topic === t) && (!tl || g.tool === tl); });
    grid.textContent = '';
    shown.forEach(function (g) { grid.appendChild(card(g)); });
    nomatch.hidden = shown.length > 0;
    count.hidden = false;
    count.textContent = shown.length + (shown.length === 1 ? ' guide' : ' guides');
  }
  selTopic.addEventListener('change', render);
  selTool.addEventListener('change', render);
  render();
})();
