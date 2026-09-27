(function () {
  var c = window.CONTACT || {}, list = document.getElementById('find');
  function add(label, text, href) {
    var li = document.createElement('li'), a = document.createElement('a');
    a.href = href;
    var k = document.createElement('span'); k.className = 'k'; k.textContent = label;
    var v = document.createElement('span'); v.className = 'v'; v.textContent = text;
    a.appendChild(k); a.appendChild(v); li.appendChild(a); list.appendChild(li);
  }
  function handle(u) { var m = /([^\/?#]+)\/?(?:[?#].*)?$/.exec(u); return m ? m[1] : u; }
  var ok = function (u) { return /^https?:\/\//i.test(u || ''); };
  if (ok(c.tiktok)) add('TikTok', handle(c.tiktok), c.tiktok);
  if (ok(c.youtube)) add('YouTube', handle(c.youtube), c.youtube);
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c.email || '')) add('Email', c.email, 'mailto:' + c.email);
})();
