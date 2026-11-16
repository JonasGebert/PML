/* PML lernen – App-Logik (ohne Abhängigkeiten, läuft auch lokal per Doppelklick) */
(function () {
  'use strict';
  var D = window.PML;
  var main = document.getElementById('main');
  var nav = document.getElementById('nav');
  var KEY = 'pml1';

  /* ---------- Helfer ---------- */
  function el(tag, attrs) {
    var n = document.createElement(tag), i, k;
    if (attrs) for (k in attrs) {
      if (attrs[k] == null || attrs[k] === false) continue;
      if (k === 'class') n.className = attrs[k];
      else if (k === 'html') n.innerHTML = attrs[k];
      else if (k === 'text') n.textContent = attrs[k];
      else if (k.slice(0, 2) === 'on') n.addEventListener(k.slice(2), attrs[k]);
      else n.setAttribute(k, attrs[k] === true ? '' : attrs[k]);
    }
    for (i = 2; i < arguments.length; i++) add(n, arguments[i]);
    return n;
  }
  function add(n, c) {
    if (c == null || c === false) return;
    if (Array.isArray(c)) c.forEach(function (x) { add(n, x); });
    else n.appendChild(typeof c === 'object' ? c : document.createTextNode(String(c)));
  }
  function shuffle(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; }
    return a;
  }
  function hash(s) { var h = 5381; for (var i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) | 0; return (h >>> 0).toString(36); }
  function fmt(n, d) { return Number(n).toLocaleString('de-DE', { minimumFractionDigits: d || 0, maximumFractionDigits: d == null ? 2 : d }); }
  function pct(x) { return Math.round(x * 100) + ' %'; }
  function chapter(id) { return D.chapters.filter(function (c) { return c.id === id; })[0]; }
  function chLabel(id) { var c = chapter(id); return c ? c.nr + ' ' + c.short : id; }

  /* ---------- Speicher ---------- */
  var S = { theme: null, read: {}, cards: {}, drag: {}, exams: [], calc: {} };
  try { var raw = JSON.parse(localStorage.getItem(KEY) || '{}'); for (var k in raw) S[k] = raw[k]; } catch (e) {}
  function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} }

  /* ---------- Theme ---------- */
  document.getElementById('themeBtn').addEventListener('click', function () {
    var t = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = t; S.theme = t; save();
  });

  /* ---------- Karten-Daten ---------- */
  var CARDS = D.cards.map(function (c) { return { c: c[0], f: c[1], b: c[2], id: hash(c[0] + c[1]) }; });
  function cardStats(cid) {
    var list = CARDS.filter(function (c) { return !cid || c.c === cid; });
    var known = list.filter(function (c) { return (S.cards[c.id] || 0) >= 2; }).length;
    return { total: list.length, known: known };
  }

  /* ---------- Navigation ---------- */
  var ICON = {
    start: 'M3 11 12 3l9 8v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z',
    lesen: 'M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2zm0 0v16m4-13h7m-7 4h7',
    karten: 'M3 7h13v11H3zM7 7V4h14v11h-5',
    ueben: 'M4 4h7v7H4zm9 9h7v7h-7zM4 17l3 3 5-6M14 5h6m-6 4h4',
    pruefung: 'M12 8v5l3 2M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM9 1h6'
  };
  function icon(name) {
    return el('span', { html: '<svg class="nav-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="' + ICON[name] + '" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/></svg>' }).firstChild;
  }
  function renderNav(route) {
    nav.innerHTML = '';
    var top = route[0] || '';
    function link(href, label, ic, key) {
      return el('a', { href: href, class: 'nav-main', 'aria-current': top === key ? 'page' : null }, icon(ic), el('span', { text: label }));
    }
    add(nav, link('#/', 'Start', 'start', ''));
    add(nav, el('a', { href: '#/kapitel', class: 'nav-main only-mobile', 'aria-current': top === 'kapitel' ? 'page' : null }, icon('lesen'), el('span', { text: 'Lesen' })));
    add(nav, link('#/karten', 'Karteikarten', 'karten', 'karten'));
    add(nav, link('#/ueben', 'Übungen', 'ueben', 'ueben'));
    add(nav, link('#/pruefung', 'Probeprüfung', 'pruefung', 'pruefung'));
    add(nav, el('div', { class: 'nav-group', text: 'Kapitel' }));
    D.chapters.forEach(function (c) {
      add(nav, el('a', { href: '#/kapitel/' + c.id, class: 'nav-ch', 'aria-current': top === 'kapitel' && route[1] === c.id ? 'page' : null },
        el('span', { class: 'nr', text: c.nr }), el('span', { text: c.short }),
        el('span', { class: 'lamp' + (S.read[c.id] ? ' on' : ''), title: S.read[c.id] ? 'gelesen' : 'noch nicht gelesen' })));
    });
  }

  /* ================= Aufgaben-Bausteine ================= */
  // Jede Aufgabe: {kind, c, mount(el), score() 0..1, answered(), reveal()}

  function mcItem(q) {
    var opts = q[2].map(function (t, i) { return { t: t.replace(/^\*/, ''), ok: t.charAt(0) === '*', i: i }; });
    var nOk = opts.filter(function (o) { return o.ok; }).length;
    var multi = nOk > 1;
    var st = { order: shuffle(opts), sel: {}, shown: false };
    var it = { kind: 'mc', c: q[0], title: q[1] };
    it.answered = function () { return Object.keys(st.sel).some(function (k) { return st.sel[k]; }); };
    it.score = function () {
      var hit = 0, miss = 0;
      opts.forEach(function (o) { if (st.sel[o.i]) { if (o.ok) hit++; else miss++; } });
      if (!multi) return hit === 1 && miss === 0 ? 1 : 0;
      return Math.max(0, (hit - miss) / nOk);
    };
    it.reveal = function () { st.shown = true; if (it.root) it.mount(it.root); };
    it.mount = function (root) {
      it.root = root; root.innerHTML = '';
      add(root, el('div', { class: 'q-text', text: q[1] }));
      add(root, el('div', { class: 'hint', text: multi ? 'Mehrere Antworten sind richtig.' : 'Genau eine Antwort ist richtig.' }));
      var box = el('div', { class: 'opts' + (st.shown ? ' revealed' : ''), role: multi ? 'group' : 'radiogroup' });
      var name = 'q' + Math.random().toString(36).slice(2);
      st.order.forEach(function (o) {
        var inp = el('input', { type: multi ? 'checkbox' : 'radio', name: name, disabled: st.shown });
        inp.checked = !!st.sel[o.i];
        var cls = 'opt' + (st.sel[o.i] ? ' sel' : '');
        var mark = null;
        if (st.shown) {
          if (o.ok) { cls += ' right'; mark = el('span', { class: 'mark', text: st.sel[o.i] ? '✓ richtig' : '✓ wäre richtig' }); }
          else if (st.sel[o.i]) { cls += ' wrong'; mark = el('span', { class: 'mark', text: '✗ falsch' }); }
        }
        var lab = el('label', { class: cls }, inp, el('span', { text: o.t }), mark);
        inp.addEventListener('change', function () {
          if (!multi) st.sel = {};
          st.sel[o.i] = inp.checked;
          Array.prototype.forEach.call(box.children, function (l) { l.classList.toggle('sel', l.querySelector('input').checked); });
          if (it.onchange) it.onchange();
        });
        add(box, lab);
      });
      add(root, box);
      if (st.shown && q[3]) add(root, el('div', { class: 'explain' }, el('b', { text: 'Warum? ' }), q[3]));
    };
    return it;
  }

  function parseNum(s) {
    s = String(s).trim().replace(/\s/g, '');
    if (!s) return NaN;
    if (s.indexOf(',') >= 0) s = s.replace(/\./g, '').replace(',', '.');
    return Number(s);
  }
  function calcItem(spec) {
    var inst = spec.gen();
    var st = { val: '', shown: false };
    var it = { kind: 'calc', c: spec.c, title: spec.title };
    it.answered = function () { return st.val.trim() !== ''; };
    it.score = function () { var v = parseNum(st.val); return !isNaN(v) && Math.abs(v - inst.answer) <= inst.tol + 1e-9 ? 1 : 0; };
    it.reveal = function () { st.shown = true; if (it.root) it.mount(it.root); };
    it.mount = function (root) {
      it.root = root; root.innerHTML = '';
      add(root, el('div', { class: 'q-text', text: inst.text }));
      if (inst.given) add(root, el('ul', { class: 'given' }, inst.given.map(function (g) { return el('li', { text: g }); })));
      var inp = el('input', { type: 'text', inputmode: 'decimal', autocomplete: 'off', 'aria-label': 'Dein Ergebnis', placeholder: 'Ergebnis', disabled: st.shown });
      inp.value = st.val;
      inp.addEventListener('input', function () { st.val = inp.value; if (it.onchange) it.onchange(); });
      inp.addEventListener('keydown', function (e) { if (e.key === 'Enter' && it.onenter) it.onenter(); });
      if (st.shown) inp.className = it.score() ? 'right' : 'wrong';
      add(root, el('div', { class: 'calc-in' }, inp, el('span', { text: inst.unit })));
      add(root, el('div', { class: 'hint', style: 'margin-top:.5rem', text: 'Runde auf ' + inst.round + '. Komma oder Punkt sind beide in Ordnung.' }));
      if (st.shown) add(root, el('div', { class: 'explain' }, el('b', { text: 'Lösung: ' + fmt(inst.answer, inst.dec) + ' ' + inst.unit }), el('div', { html: inst.solution })));
    };
    return it;
  }

  // Drag and drop: Zuordnen (assign), Reihenfolge (order), Paare (match)
  function dragItem(spec) {
    var items, zones, cap1 = false, rows = false, slots = false;
    if (spec.type === 'order') {
      items = spec.items.map(function (t, i) { return { t: t, z: i }; });
      zones = spec.items.map(function (_, i) { return (i + 1) + '.'; }); cap1 = rows = slots = true;
    } else if (spec.type === 'match') {
      items = spec.pairs.map(function (p, i) { return { t: p[1], z: i }; });
      zones = spec.pairs.map(function (p) { return p[0]; }); cap1 = rows = true;
    } else {
      items = spec.items.map(function (p) { return { t: p[0], z: p[1] }; });
      zones = spec.buckets;
    }
    var st = { place: items.map(function () { return -1; }), order: shuffle(items.map(function (_, i) { return i; })), shown: false, picked: -1 };
    var it = { kind: 'drag', c: spec.c, title: spec.title };
    it.answered = function () { return st.place.some(function (p) { return p >= 0; }); };
    it.score = function () { var ok = 0; items.forEach(function (x, i) { if (st.place[i] === x.z) ok++; }); return ok / items.length; };
    it.reveal = function () { st.shown = true; st.picked = -1; if (it.root) it.mount(it.root); };
    function put(i, z) {
      if (st.shown) return;
      if (z >= 0 && cap1) st.place.forEach(function (p, j) { if (p === z && j !== i) st.place[j] = st.place[i] >= 0 ? st.place[i] : -1; });
      st.place[i] = z; st.picked = -1;
      it.mount(it.root); if (it.onchange) it.onchange();
    }
    it.mount = function (root) {
      it.root = root; root.innerHTML = '';
      add(root, el('div', { class: 'q-text', text: spec.prompt }));
      var wrap = el('div', { class: 'dnd' + (st.shown ? ' revealed' : '') });
      if (!st.shown) add(wrap, el('p', { class: 'dnd-help', text: 'Ziehen und ablegen – oder Kärtchen antippen und danach das Zielfeld.' }));
      var pool = el('div', { class: 'pool', 'data-zone': '-1', tabindex: st.shown ? null : '0', 'aria-label': 'Vorrat' });
      var zoneEls = zones.map(function (z, zi) {
        var ze = el('div', { class: 'zone', 'data-zone': zi, tabindex: st.shown ? null : '0' }, el('div', { class: 'z-title', text: z }), el('div', { class: 'z-items' }));
        return ze;
      });
      function target(z) { return z < 0 ? pool : zoneEls[z].querySelector('.z-items'); }
      st.order.forEach(function (i) {
        var x = items[i];
        var chip = el('button', { type: 'button', class: 'dchip' + (st.picked === i ? ' picked' : ''), 'data-i': i, disabled: st.shown }, x.t);
        if (st.shown) {
          var good = st.place[i] === x.z;
          chip.className += good ? ' right' : ' wrong';
          if (!good) add(chip, el('span', { class: 'sol', text: '→ richtig: ' + zones[x.z] }));
        } else bindDrag(chip, i);
        add(target(st.place[i]), chip);
      });
      if (!pool.children.length) pool.classList.add('empty');
      [pool].concat(zoneEls).forEach(function (ze) {
        function place() { if (st.picked >= 0) put(st.picked, Number(ze.getAttribute('data-zone'))); }
        ze.addEventListener('click', function (e) { if (!e.target.closest('.dchip')) place(); });
        ze.addEventListener('keydown', function (e) { if ((e.key === 'Enter' || e.key === ' ') && e.target === ze) { e.preventDefault(); place(); } });
      });
      add(wrap, pool);
      add(wrap, el('div', { class: 'zones' + (rows ? ' rows' : '') + (slots ? ' slots' : '') }, zoneEls));
      add(root, wrap);
      if (st.shown && spec.explain) add(root, el('div', { class: 'explain' }, el('b', { text: 'Merke: ' }), spec.explain));

      function bindDrag(chip, i) {
        var sx, sy, ghost = null, over = null, ox, oy, moved = false, down = false;
        chip.addEventListener('pointerdown', function (e) {
          if (e.button) return;
          down = true; moved = false; sx = e.clientX; sy = e.clientY;
          try { chip.setPointerCapture(e.pointerId); } catch (err) {}
        });
        chip.addEventListener('pointermove', function (e) {
          if (!down) return;
          if (!moved && Math.abs(e.clientX - sx) + Math.abs(e.clientY - sy) < 7) return;
          if (!moved) {
            moved = true;
            var r = chip.getBoundingClientRect(); ox = sx - r.left; oy = sy - r.top;
            ghost = chip.cloneNode(true); ghost.classList.add('ghost'); ghost.style.width = r.width + 'px';
            document.body.appendChild(ghost); chip.classList.add('dragging');
          }
          ghost.style.left = (e.clientX - ox) + 'px'; ghost.style.top = (e.clientY - oy) + 'px';
          var under = document.elementFromPoint(e.clientX, e.clientY);
          var z = under && under.closest ? under.closest('[data-zone]') : null;
          if (z && !wrap.contains(z)) z = null;
          if (z !== over) { if (over) over.classList.remove('over'); over = z; if (over) over.classList.add('over'); }
          var m = 60; // am Bildschirmrand mitscrollen
          if (e.clientY < m + 50) window.scrollBy(0, -12); else if (e.clientY > window.innerHeight - m) window.scrollBy(0, 12);
        });
        function end(e) {
          if (!down) return; down = false;
          if (ghost) { ghost.remove(); ghost = null; }
          chip.classList.remove('dragging');
          if (moved) {
            var z = over; if (over) over.classList.remove('over'); over = null;
            if (z && e.type !== 'pointercancel') put(i, Number(z.getAttribute('data-zone')));
          }
        }
        chip.addEventListener('pointerup', end);
        chip.addEventListener('pointercancel', end);
        chip.addEventListener('click', function (e) {
          e.stopPropagation();
          if (moved) { moved = false; return; }
          // Antippen: auswählen; liegt schon ein Kärtchen in der Hand, wird im Feld dieses Kärtchens abgelegt
          if (st.picked >= 0 && st.picked !== i) { put(st.picked, st.place[i]); return; }
          st.picked = st.picked === i ? -1 : i;
          Array.prototype.forEach.call(wrap.querySelectorAll('.dchip'), function (c) { c.classList.toggle('picked', Number(c.getAttribute('data-i')) === st.picked); });
        });
      }
    };
    return it;
  }

  function kindLabel(it) { return it.kind === 'mc' ? 'Auswahl' : it.kind === 'calc' ? 'Rechnen' : 'Zuordnen'; }
  function itemHead(it, nr, total) {
    return el('div', { class: 'q-meta' },
      nr ? el('span', { class: 'tag', text: 'Frage ' + nr + (total ? ' von ' + total : '') }) : null,
      el('span', { class: 'tag', text: 'Kapitel ' + chLabel(it.c) }),
      el('span', { class: 'tag', text: kindLabel(it) }));
  }
  function verdict(s) {
    if (s >= 0.999) return el('p', { class: 'feedback-line ok', text: 'Richtig.' });
    if (s > 0) return el('p', { class: 'feedback-line part', text: 'Teilweise richtig (' + pct(s) + ').' });
    return el('p', { class: 'feedback-line no', text: 'Noch nicht richtig.' });
  }

  /* ================= Ansichten ================= */

  function viewStart() {
    var w = el('div', { class: 'wrap' });
    var readN = D.chapters.filter(function (c) { return S.read[c.id]; }).length;
    var cs = cardStats();
    var last = S.exams[S.exams.length - 1];
    add(w, el('div', { class: 'hero' },
      el('h1', { text: 'Produktionsmittel und\u00a0\u2011logistik' }),
      el('p', { text: 'Zehn Kapitel entlang der Planungskette: vom Ziel der Produktion über Fertigungsverfahren und Werkzeugmaschinen bis zur Materialversorgung am Band. Erst lesen, dann mit Karteikarten und Übungen festigen, zum Schluss die Probeprüfung.' })));
    var next = D.chapters.filter(function (c) { return !S.read[c.id]; })[0];
    add(w, el('div', { class: 'btn-row', style: 'margin-bottom:2rem' },
      el('a', { class: 'btn primary', href: next ? '#/kapitel/' + next.id : '#/pruefung', text: next ? (readN ? 'Weiterlesen: Kapitel ' + next.nr : 'Mit Kapitel 1 anfangen') : 'Probeprüfung starten' }),
      el('a', { class: 'btn', href: '#/karten', text: 'Karteikarten lernen' })));

    add(w, el('h2', { class: 'section-title', text: 'Die Kapitel' }));
    var line = el('ol', { class: 'line' });
    D.chapters.forEach(function (c) {
      var st = cardStats(c.id);
      line.appendChild(el('li', { class: 'station' + (S.read[c.id] ? ' done' : '') },
        el('a', { href: '#/kapitel/' + c.id },
          el('span', { class: 'dot', text: S.read[c.id] ? '✓' : c.nr }),
          el('div', { class: 'st-body' },
            el('h3', { text: c.short }),
            el('span', { class: 'small muted', text: c.teaser }),
            el('div', { class: 'st-meta' }, el('span', { text: c.min + ' min lesen' }), el('span', { text: st.known + '/' + st.total + ' Karten' }))))));
    });
    add(w, line);

    add(w, el('h2', { class: 'section-title', text: 'Dein Stand' }));
    add(w, el('div', { class: 'tiles' },
      el('a', { class: 'panel tile', href: '#/kapitel' }, el('span', { class: 'big', text: readN + ' von ' + D.chapters.length }), el('p', { text: 'Kapitel gelesen' }), el('div', { class: 'meter' }, el('i', { style: 'width:' + (100 * readN / D.chapters.length) + '%' }))),
      el('a', { class: 'panel tile', href: '#/karten' }, el('span', { class: 'big', text: cs.known + ' von ' + cs.total }), el('p', { text: 'Karteikarten sicher gewusst' }), el('div', { class: 'meter' }, el('i', { style: 'width:' + (100 * cs.known / cs.total) + '%' }))),
      el('a', { class: 'panel tile', href: '#/pruefung' }, el('span', { class: 'big', text: last ? pct(last.score) : '–' }), el('p', { text: last ? 'letzte Probeprüfung (' + S.exams.length + ' insgesamt)' : 'Noch keine Probeprüfung gemacht' }))));

    add(w, el('h2', { class: 'section-title', text: 'Zum Wissenstest' }));
    add(w, el('div', { class: 'panel narrow' },
      el('ul', { class: 'info-list' },
        el('li', { text: 'Der Wissenstest läuft online am PC und fragt den kompletten Vorlesungsstoff ab.' }),
        el('li', { text: 'Er zählt 20 % der Modulnote, die Projektarbeit mit den Reviews 80 %.' }),
        el('li', { text: 'Jeder Prüfungsteil muss für sich bestanden sein.' }),
        el('li', { text: 'Organisatorisches (Termine, Gruppen, Literatur) ist hier bewusst kein Lern- oder Prüfungsstoff.' })),
      el('p', { class: 'small muted', style: 'margin:.8rem 0 0', text: 'Dein Lernstand wird nur in diesem Browser gespeichert.' })));
    return w;
  }

  function viewChapterList() {
    var w = el('div', { class: 'wrap' });
    add(w, el('div', { class: 'page-head' }, el('h1', { text: 'Kapitel' }), el('p', { text: 'Jedes Kapitel ist so kurz wie möglich gehalten und deckt genau den Stoff des passenden Skripts ab.' })));
    var list = el('div', { class: 'ex-list' });
    D.chapters.forEach(function (c) {
      add(list, el('a', { class: 'panel ex-row', href: '#/kapitel/' + c.id, style: 'text-decoration:none;color:inherit' },
        el('span', { class: 'tag', text: c.nr }), el('span', { class: 'grow' }, el('strong', { text: c.title }), el('br'), el('span', { class: 'small muted', text: c.teaser })),
        el('span', { class: 'best' + (S.read[c.id] ? ' full' : ''), text: S.read[c.id] ? '✓ gelesen' : c.min + ' min' })));
    });
    add(w, list);
    return w;
  }

  function viewChapter(id) {
    var c = chapter(id);
    if (!c) return viewChapterList();
    var idx = D.chapters.indexOf(c);
    var w = el('article', { class: 'reader' });
    add(w, el('div', { class: 'kicker', text: 'Kapitel ' + c.nr + ', etwa ' + c.min + ' Minuten Lesezeit' }));
    add(w, el('h1', { text: c.title }));
    var body = el('div', { html: c.html });
    // Inhaltsverzeichnis aus den Zwischenüberschriften
    var toc = el('ul', { class: 'toc' });
    Array.prototype.forEach.call(body.querySelectorAll('h2'), function (h, i) {
      h.id = 'abschnitt-' + (i + 1);
      add(toc, el('li', null, el('a', { href: '#', text: h.textContent, onclick: function (e) { e.preventDefault(); h.scrollIntoView(); } })));
    });
    Array.prototype.forEach.call(body.querySelectorAll('table'), function (t) {
      var s = el('div', { class: 'table-scroll' }); t.parentNode.insertBefore(s, t); s.appendChild(t);
    });
    var lead = body.querySelector('.lead');
    if (lead) { w.appendChild(lead); }
    add(w, toc);
    add(w, body);

    var prev = D.chapters[idx - 1], next = D.chapters[idx + 1];
    var readBtn = el('button', { type: 'button', class: 'btn ' + (S.read[id] ? '' : 'primary') });
    function label() { readBtn.textContent = S.read[id] ? '✓ Als gelesen markiert' : 'Als gelesen markieren'; readBtn.className = 'btn ' + (S.read[id] ? '' : 'primary'); }
    label();
    readBtn.addEventListener('click', function () { S.read[id] = !S.read[id]; if (!S.read[id]) delete S.read[id]; save(); label(); renderNav(['kapitel', id]); });
    var nQ = D.questions.filter(function (q) { return q[0] === id; }).length;
    add(w, el('div', { class: 'chapter-end' },
      el('div', { class: 'btn-row' }, readBtn,
        el('a', { class: 'btn', href: '#/karten/' + id, text: 'Karteikarten zu diesem Kapitel' }),
        el('a', { class: 'btn', href: '#/ueben/quiz/' + id, text: 'Schnelltest (' + Math.min(10, nQ) + ' Fragen)' })),
      el('div', { class: 'pager' },
        prev ? el('a', { href: '#/kapitel/' + prev.id, text: '‹ ' + prev.nr + ' ' + prev.short }) : el('span'),
        next ? el('a', { href: '#/kapitel/' + next.id, text: next.nr + ' ' + next.short + ' ›' }) : el('a', { href: '#/pruefung', text: 'Zur Probeprüfung ›' }))));
    return w;
  }

  /* ---------- Karteikarten ---------- */
  function viewCards(cid) {
    var w = el('div', { class: 'wrap' });
    if (cid === undefined) {
      add(w, el('div', { class: 'page-head' }, el('h1', { text: 'Karteikarten' }),
        el('p', { text: 'Karte ansehen, Antwort im Kopf geben, umdrehen, ehrlich bewerten. Was du nicht wusstest, kommt in derselben Runde wieder. Eine Karte gilt als sicher, wenn du sie zweimal hintereinander gewusst hast.' })));
      var all = cardStats();
      var grid = el('div', { class: 'deck-grid' });
      add(grid, el('a', { class: 'panel deck', href: '#/karten/alle', style: 'text-decoration:none;color:inherit' },
        el('span', { class: 'nr', text: 'Gemischt' }), el('strong', { text: 'Alle Kapitel' }),
        el('div', { class: 'meter' }, el('i', { style: 'width:' + (100 * all.known / all.total) + '%' })),
        el('span', { class: 'counts', text: all.known + ' von ' + all.total + ' sicher' })));
      D.chapters.forEach(function (c) {
        var s = cardStats(c.id);
        add(grid, el('a', { class: 'panel deck', href: '#/karten/' + c.id, style: 'text-decoration:none;color:inherit' },
          el('span', { class: 'nr', text: 'Kapitel ' + c.nr }), el('strong', { text: c.short }),
          el('div', { class: 'meter' }, el('i', { style: 'width:' + (100 * s.known / s.total) + '%' })),
          el('span', { class: 'counts', text: s.known + ' von ' + s.total + ' sicher' })));
      });
      add(w, grid);
      return w;
    }
    var pool = CARDS.filter(function (c) { return cid === 'alle' || c.c === cid; });
    var open = pool.filter(function (c) { return (S.cards[c.id] || 0) < 2; });
    var queue = shuffle(open.length ? open : pool);
    if (cid === 'alle') queue = queue.slice(0, 30);
    var total = queue.length, done = 0, flipped = false;
    var title = cid === 'alle' ? 'Alle Kapitel gemischt' : 'Kapitel ' + chLabel(cid);
    var box = el('div', { class: 'flash-wrap' });
    add(w, box);

    function show() {
      box.innerHTML = '';
      add(box, el('div', { class: 'flash-bar' }, el('a', { href: '#/karten', text: '‹ Alle Stapel' }), el('span', { text: title })));
      if (!queue.length) {
        var s = cardStats(cid === 'alle' ? undefined : cid);
        add(box, el('div', { class: 'panel', style: 'margin-top:1rem' },
          el('h2', { text: 'Runde geschafft' }),
          el('p', { style: 'margin-top:.5rem', text: s.known + ' von ' + s.total + ' Karten dieses Stapels sitzen sicher.' }),
          el('div', { class: 'btn-row' },
            el('button', { type: 'button', class: 'btn primary', text: 'Noch eine Runde', onclick: function () { route(); } }),
            el('a', { class: 'btn', href: '#/karten', text: 'Anderen Stapel wählen' }))));
        return;
      }
      var c = queue[0]; flipped = false;
      var card = el('button', { type: 'button', class: 'flash', 'aria-label': 'Karte umdrehen' },
        el('div', { class: 'flash-inner' },
          el('div', { class: 'face front' }, el('div', { class: 'side', text: 'Frage aus Kapitel ' + chLabel(c.c) }), el('div', { class: 'txt', text: c.f })),
          el('div', { class: 'face back' }, el('div', { class: 'side', text: 'Antwort' }), el('div', { class: 'txt', html: c.b }))));
      var actions = el('div', { class: 'flash-actions' });
      function flip() {
        flipped = !flipped; card.classList.toggle('flipped', flipped);
        actions.innerHTML = '';
        if (flipped) {
          add(actions, el('button', { type: 'button', class: 'btn again', text: 'Nochmal (1)', onclick: function () { rate(false); } }));
          add(actions, el('button', { type: 'button', class: 'btn known', text: 'Gewusst (2)', onclick: function () { rate(true); } }));
        } else add(actions, el('button', { type: 'button', class: 'btn primary', style: 'grid-column:1/-1', text: 'Antwort zeigen (Leertaste)', onclick: flip }));
      }
      function rate(ok) {
        queue.shift();
        if (ok) { S.cards[c.id] = Math.min(3, (S.cards[c.id] || 0) + 1); done++; }
        else { S.cards[c.id] = 0; queue.splice(Math.min(queue.length, 3), 0, c); }
        save(); show();
      }
      card.addEventListener('click', flip);
      box._key = function (e) {
        if (e.key === ' ' || e.key === 'Enter') { if (document.activeElement && document.activeElement.tagName === 'BUTTON' && document.activeElement !== card) return; e.preventDefault(); flip(); }
        else if (flipped && e.key === '1') rate(false);
        else if (flipped && e.key === '2') rate(true);
      };
      add(box, card);
      flip(); flip(); // Startzustand: Vorderseite mit passendem Knopf
      add(box, actions);
      add(box, el('div', { class: 'flash-bar', style: 'margin-top:1rem' },
        el('span', { text: done + ' von ' + total + ' gewusst' }), el('span', { text: 'noch ' + queue.length + ' im Stapel' })));
      add(box, el('div', { class: 'meter', style: 'margin-top:.4rem' }, el('i', { style: 'width:' + (100 * done / total) + '%' })));
    }
    keyHandler = function (e) { if (box._key) box._key(e); };
    show();
    return w;
  }

  /* ---------- Übungen ---------- */
  function exTabs(active) {
    var t = el('div', { class: 'tabs', role: 'tablist' });
    [['drag', 'Drag and drop'], ['rechnen', 'Rechnen'], ['quiz', 'Schnelltest']].forEach(function (x) {
      add(t, el('a', { href: '#/ueben/' + x[0], 'aria-current': active === x[0] ? 'page' : null, text: x[1] }));
    });
    return t;
  }
  function chapterFilter(sel, onpick, counts) {
    var box = el('div', { class: 'chips', style: 'margin-bottom:1rem' });
    [{ id: '', nr: 'Alle' }].concat(D.chapters).forEach(function (c) {
      if (c.id && counts && !counts[c.id]) return;
      add(box, el('button', { type: 'button', class: 'chip-toggle', 'aria-pressed': sel === c.id ? 'true' : 'false', text: c.id ? c.nr + ' ' + c.short : 'Alle', onclick: function () { onpick(c.id); } }));
    });
    return box;
  }
  var exFilter = '';

  function viewPractice(tab, arg) {
    tab = tab || 'drag';
    var w = el('div', { class: 'wrap' });
    add(w, el('div', { class: 'page-head' }, el('h1', { text: 'Übungen' }),
      el('p', { text: 'Hier bekommst du sofort Rückmeldung mit Erklärung. In der Probeprüfung dagegen erst am Ende.' })));
    add(w, exTabs(tab));
    var body = el('div'); add(w, body);
    if (tab === 'drag') practiceDrag(body, arg);
    else if (tab === 'rechnen') practiceCalc(body, arg);
    else practiceQuiz(body, arg);
    return w;
  }

  function practiceDrag(body, arg) {
    if (arg != null && D.drags[Number(arg)]) return runSingle(body, function () { return dragItem(D.drags[Number(arg)]); }, '#/ueben/drag', function (s) {
      var id = 'd' + hash(D.drags[Number(arg)].title); S.drag[id] = Math.max(S.drag[id] || 0, s); save();
    }, Number(arg) + 1 < D.drags.length ? '#/ueben/drag/' + (Number(arg) + 1) : null);
    var counts = {}; D.drags.forEach(function (d) { counts[d.c] = 1; });
    add(body, chapterFilter(exFilter, function (id) { exFilter = id; route(); }, counts));
    var list = el('div', { class: 'ex-list' });
    D.drags.forEach(function (d, i) {
      if (exFilter && d.c !== exFilter) return;
      var best = S.drag['d' + hash(d.title)];
      add(list, el('a', { class: 'panel ex-row', href: '#/ueben/drag/' + i, style: 'text-decoration:none;color:inherit' },
        el('span', { class: 'tag', text: chapter(d.c).nr }),
        el('span', { class: 'grow' }, el('strong', { text: d.title }), el('br'), el('span', { class: 'small muted', text: d.type === 'order' ? 'Reihenfolge herstellen' : d.type === 'match' ? 'Paare bilden' : 'In Gruppen einsortieren' })),
        el('span', { class: 'best' + (best >= 0.999 ? ' full' : ''), text: best == null ? 'neu' : best >= 0.999 ? '✓ gelöst' : 'bester Versuch ' + pct(best) })));
    });
    add(body, list);
  }

  function practiceCalc(body, arg) {
    if (arg != null && D.calcs[Number(arg)]) return runSingle(body, function () { return calcItem(D.calcs[Number(arg)]); }, '#/ueben/rechnen', function (s) {
      if (s >= 0.999) { var id = 'c' + hash(D.calcs[Number(arg)].title); S.calc[id] = (S.calc[id] || 0) + 1; save(); }
    }, null, true);
    var counts = {}; D.calcs.forEach(function (d) { counts[d.c] = 1; });
    add(body, el('p', { class: 'muted', text: 'Jede Aufgabe bekommt bei jedem Start neue Zahlen. Rechne so oft, bis der Weg sitzt.' }));
    add(body, chapterFilter(exFilter, function (id) { exFilter = id; route(); }, counts));
    var list = el('div', { class: 'ex-list' });
    D.calcs.forEach(function (d, i) {
      if (exFilter && d.c !== exFilter) return;
      var n = S.calc['c' + hash(d.title)] || 0;
      add(list, el('a', { class: 'panel ex-row', href: '#/ueben/rechnen/' + i, style: 'text-decoration:none;color:inherit' },
        el('span', { class: 'tag', text: chapter(d.c).nr }), el('span', { class: 'grow' }, el('strong', { text: d.title })),
        el('span', { class: 'best' + (n ? ' full' : ''), text: n ? n + '× richtig gerechnet' : 'neu' })));
    });
    add(body, list);
  }

  // Eine einzelne Aufgabe mit „Prüfen“-Knopf
  function runSingle(body, make, backHref, onScore, nextHref, again) {
    var it = make();
    var panel = el('div', { class: 'panel item' });
    var slot = el('div'), fb = el('div'), row = el('div', { class: 'btn-row', style: 'margin-top:1rem' });
    add(body, el('p', null, el('a', { href: backHref, text: '‹ Zur Übersicht' })));
    add(panel, itemHead(it)); add(panel, slot); add(panel, fb); add(panel, row); add(body, panel);
    function fresh() {
      it = make(); fb.innerHTML = ''; row.innerHTML = '';
      it.mount(slot);
      var check = el('button', { type: 'button', class: 'btn primary', text: 'Prüfen', onclick: doCheck });
      it.onenter = doCheck;
      add(row, check);
      add(row, el('button', { type: 'button', class: 'btn ghost', text: 'Lösung zeigen', onclick: function () { it.reveal(); done(null); } }));
    }
    function doCheck() {
      if (!it.answered()) { fb.innerHTML = ''; add(fb, el('p', { class: 'feedback-line part', text: 'Erst antworten, dann prüfen.' })); return; }
      var s = it.score(); it.reveal(); onScore(s); done(s);
    }
    function done(s) {
      fb.innerHTML = ''; if (s != null) add(fb, verdict(s));
      row.innerHTML = '';
      add(row, el('button', { type: 'button', class: 'btn primary', text: again ? 'Neue Zahlen' : 'Nochmal versuchen', onclick: fresh }));
      if (nextHref) add(row, el('a', { class: 'btn', href: nextHref, text: 'Nächste Übung' }));
      add(row, el('a', { class: 'btn ghost', href: backHref, text: 'Zur Übersicht' }));
    }
    fresh();
  }

  function practiceQuiz(body, cid) {
    if (cid === undefined) {
      add(body, el('p', { class: 'muted', text: 'Zehn Auswahlfragen aus einem Kapitel, jede mit sofortiger Auflösung.' }));
      var list = el('div', { class: 'ex-list' });
      [{ id: 'alle', nr: '∑', title: 'Alle Kapitel gemischt' }].concat(D.chapters).forEach(function (c) {
        var n = D.questions.filter(function (q) { return c.id === 'alle' || q[0] === c.id; }).length;
        add(list, el('a', { class: 'panel ex-row', href: '#/ueben/quiz/' + c.id, style: 'text-decoration:none;color:inherit' },
          el('span', { class: 'tag', text: c.nr }), el('span', { class: 'grow' }, el('strong', { text: c.title })), el('span', { class: 'best', text: n + ' Fragen im Pool' })));
      });
      add(body, list); return;
    }
    var pool = shuffle(D.questions.filter(function (q) { return cid === 'alle' || q[0] === cid; })).slice(0, 10).map(mcItem);
    var i = 0, sum = 0;
    var panel = el('div', { class: 'panel item' }); add(body, el('p', null, el('a', { href: '#/ueben/quiz', text: '‹ Zur Übersicht' }))); add(body, panel);
    function step() {
      panel.innerHTML = '';
      if (i >= pool.length) {
        add(panel, el('h2', { text: 'Schnelltest beendet' }));
        add(panel, el('p', { style: 'margin-top:.5rem', text: fmt(sum, 1) + ' von ' + pool.length + ' Punkten (' + pct(sum / pool.length) + ').' }));
        add(panel, el('div', { class: 'btn-row' },
          el('button', { type: 'button', class: 'btn primary', text: 'Neue Runde', onclick: function () { route(); } }),
          cid !== 'alle' ? el('a', { class: 'btn', href: '#/kapitel/' + cid, text: 'Kapitel nachlesen' }) : null,
          el('a', { class: 'btn ghost', href: '#/ueben/quiz', text: 'Zur Übersicht' })));
        return;
      }
      var it = pool[i], slot = el('div'), fb = el('div'), row = el('div', { class: 'btn-row', style: 'margin-top:1rem' });
      add(panel, itemHead(it, i + 1, pool.length)); add(panel, slot); add(panel, fb); add(panel, row);
      it.mount(slot);
      add(row, el('button', { type: 'button', class: 'btn primary', text: 'Prüfen', onclick: function () {
        if (!it.answered()) { fb.innerHTML = ''; add(fb, el('p', { class: 'feedback-line part', text: 'Wähle zuerst eine Antwort.' })); return; }
        var s = it.score(); sum += s; it.reveal(); fb.innerHTML = ''; add(fb, verdict(s));
        row.innerHTML = '';
        var nb = el('button', { type: 'button', class: 'btn primary', text: i + 1 < pool.length ? 'Weiter' : 'Auswertung', onclick: function () { i++; step(); window.scrollTo(0, 0); } });
        add(row, nb); nb.focus();
      } }));
    }
    step();
  }

  /* ---------- Probeprüfung ---------- */
  var examCfg = { n: 30, chapters: null };
  var examTimer = null;

  function buildExam(n, chs) {
    function inCh(c) { return !chs || chs[c]; }
    var nCalc = Math.round(n * 0.15), nDrag = Math.round(n * 0.15);
    var calcs = shuffle(D.calcs.filter(function (x) { return inCh(x.c); })).slice(0, nCalc).map(calcItem);
    var drags = shuffle(D.drags.filter(function (x) { return inCh(x.c); })).slice(0, nDrag).map(dragItem);
    var need = n - calcs.length - drags.length;
    // Auswahlfragen gleichmäßig über die Kapitel ziehen
    var by = {}; D.questions.forEach(function (q) { if (inCh(q[0])) (by[q[0]] = by[q[0]] || []).push(q); });
    var keys = shuffle(Object.keys(by)); keys.forEach(function (k) { by[k] = shuffle(by[k]); });
    var mcs = [], guard = 0;
    while (mcs.length < need && keys.length && guard++ < 5000) {
      for (var i = 0; i < keys.length && mcs.length < need; i++) {
        var q = by[keys[i]].pop(); if (q) mcs.push(mcItem(q));
      }
      keys = keys.filter(function (k) { return by[k].length; });
    }
    return shuffle(mcs.concat(calcs, drags));
  }

  function viewExam() {
    var w = el('div', { class: 'wrap' });
    add(w, el('div', { class: 'page-head' }, el('h1', { text: 'Probeprüfung' }),
      el('p', { text: 'Gemischte Fragen aus allen Kapiteln unter Zeitdruck: Auswahlfragen, Zuordnungen per Drag and drop und kurze Rechnungen. Die Auflösung kommt erst nach der Abgabe.' })));
    var form = el('div', { class: 'panel form-grid narrow' });
    var seg = el('div', { class: 'seg', role: 'group', 'aria-label': 'Umfang' });
    [[15, 'Kurz: 15 Fragen, 15 min'], [30, 'Standard: 30 Fragen, 30 min'], [50, 'Lang: 50 Fragen, 50 min']].forEach(function (o) {
      add(seg, el('button', { type: 'button', 'aria-pressed': examCfg.n === o[0] ? 'true' : 'false', text: o[1], onclick: function () {
        examCfg.n = o[0]; Array.prototype.forEach.call(seg.children, function (b) { b.setAttribute('aria-pressed', b.textContent === o[1] ? 'true' : 'false'); });
      } }));
    });
    add(form, el('div', { class: 'field' }, el('span', { class: 'lbl', text: 'Umfang' }), seg));
    var chs = {}; D.chapters.forEach(function (c) { chs[c.id] = !examCfg.chapters || !!examCfg.chapters[c.id]; });
    var chipBox = el('div', { class: 'chips' });
    D.chapters.forEach(function (c) {
      var b = el('button', { type: 'button', class: 'chip-toggle', 'aria-pressed': chs[c.id] ? 'true' : 'false', text: c.nr + ' ' + c.short });
      b.addEventListener('click', function () { chs[c.id] = !chs[c.id]; b.setAttribute('aria-pressed', chs[c.id] ? 'true' : 'false'); });
      add(chipBox, b);
    });
    add(form, el('div', { class: 'field' }, el('span', { class: 'lbl', text: 'Kapitel' }), chipBox,
      el('p', { class: 'small muted', style: 'margin:.5rem 0 0', text: 'Im echten Test kommt alles dran. Kapitel abwählen lohnt sich nur zum gezielten Üben.' })));
    var msg = el('p', { class: 'feedback-line no', style: 'margin:0' });
    add(form, el('div', { class: 'btn-row' }, el('button', { type: 'button', class: 'btn primary', text: 'Prüfung starten', onclick: function () {
      if (!D.chapters.some(function (c) { return chs[c.id]; })) { msg.textContent = 'Wähle mindestens ein Kapitel.'; return; }
      examCfg.chapters = chs; runExam(w, buildExam(examCfg.n, chs), examCfg.n * 60);
    } }), msg));
    add(w, form);

    if (S.exams.length) {
      add(w, el('h2', { class: 'section-title', style: 'margin-top:2.5rem', text: 'Bisherige Versuche' }));
      var t = el('table', { class: 'hist' }, el('tr', null, el('th', { text: 'Datum' }), el('th', { text: 'Fragen' }), el('th', { text: 'Ergebnis' }), el('th', { text: 'Zeit' })));
      S.exams.slice(-8).reverse().forEach(function (x) {
        add(t, el('tr', null, el('td', { text: new Date(x.d).toLocaleString('de-DE', { dateStyle: 'short', timeStyle: 'short' }) }), el('td', { text: x.n }), el('td', { text: pct(x.score) }), el('td', { text: Math.round(x.t / 60) + ' min' })));
      });
      add(w, el('div', { class: 'panel narrow' }, t));
    }
    return w;
  }

  function runExam(w, items, seconds) {
    w.innerHTML = '';
    var cur = 0, flags = {}, left = seconds, started = Date.now();
    var timerEl = el('span', { class: 'timer', role: 'timer' });
    var bar = el('div', { class: 'exam-bar' }, timerEl, el('span', { class: 'muted small', id: 'examCount' }),
      el('button', { type: 'button', class: 'btn', style: 'margin-left:auto', text: 'Abgeben', onclick: function () {
        var open = items.filter(function (it) { return !it.answered(); }).length;
        if (!open || confirmBox(open)) finish();
      } }));
    var panel = el('div', { class: 'panel item' }), qnav = el('div', { class: 'qnav', 'aria-label': 'Fragenübersicht' });
    add(w, bar); add(w, panel); add(w, qnav);
    add(w, el('p', { class: 'small muted', text: 'Grün hinterlegt = beantwortet, gelber Balken = markiert.' }));
    function confirmBox(open) { return window.confirm(open + ' Frage(n) sind noch offen. Trotzdem abgeben?'); }
    function tick() {
      var m = Math.floor(left / 60), s = left % 60;
      timerEl.textContent = m + ':' + (s < 10 ? '0' : '') + s;
      timerEl.classList.toggle('low', left <= 120);
    }
    function drawNav() {
      qnav.innerHTML = '';
      items.forEach(function (it, i) {
        add(qnav, el('button', { type: 'button', class: (it.answered() ? 'answered ' : '') + (flags[i] ? 'flag ' : '') + (i === cur ? 'cur' : ''), text: i + 1, 'aria-label': 'Frage ' + (i + 1), onclick: function () { cur = i; draw(); } }));
      });
      var a = items.filter(function (it) { return it.answered(); }).length;
      bar.querySelector('#examCount').textContent = a + ' von ' + items.length + ' beantwortet';
    }
    function draw() {
      panel.innerHTML = '';
      var it = items[cur], slot = el('div');
      add(panel, itemHead(it, cur + 1, items.length)); add(panel, slot);
      it.onchange = drawNav; it.onenter = null; it.mount(slot);
      add(panel, el('div', { class: 'btn-row', style: 'margin-top:1.2rem' },
        el('button', { type: 'button', class: 'btn', text: '‹ Zurück', disabled: cur === 0, onclick: function () { cur--; draw(); } }),
        el('button', { type: 'button', class: 'btn primary', text: cur + 1 < items.length ? 'Weiter ›' : 'Zur Abgabe', onclick: function () { if (cur + 1 < items.length) { cur++; draw(); } else { var open = items.filter(function (x) { return !x.answered(); }).length; if (!open || confirmBox(open)) finish(); } } }),
        el('button', { type: 'button', class: 'btn ghost', text: flags[cur] ? 'Markierung entfernen' : 'Für später markieren', onclick: function () { flags[cur] = !flags[cur]; draw(); } })));
      drawNav();
    }
    function finish() {
      clearInterval(examTimer); examTimer = null; leaveGuard = null;
      var scores = items.map(function (it) { return it.score(); });
      var total = scores.reduce(function (a, b) { return a + b; }, 0) / items.length;
      S.exams.push({ d: Date.now(), n: items.length, score: total, t: Math.round((Date.now() - started) / 1000) }); if (S.exams.length > 30) S.exams.shift(); save();
      showResult(w, items, scores, total, Math.round((Date.now() - started) / 1000));
    }
    tick(); draw();
    clearInterval(examTimer);
    examTimer = setInterval(function () { left--; tick(); if (left <= 0) finish(); }, 1000);
    leaveGuard = function () { return window.confirm('Die laufende Prüfung abbrechen?'); };
    window.scrollTo(0, 0);
  }

  function showResult(w, items, scores, total, secs) {
    w.innerHTML = '';
    var pass = total >= 0.5;
    add(w, el('div', { class: 'page-head' }, el('h1', { text: 'Auswertung' })));
    add(w, el('div', { class: 'panel' },
      el('div', { class: 'score ' + (pass ? 'pass' : 'fail') },
        el('span', { class: 'pct', text: pct(total) }),
        el('div', null, el('strong', { text: fmt(scores.reduce(function (a, b) { return a + b; }, 0), 1) + ' von ' + items.length + ' Punkten' }), el('br'),
          el('span', { class: 'muted', text: 'in ' + Math.floor(secs / 60) + ' min ' + (secs % 60) + ' s. ' + (total >= 0.8 ? 'Sehr sicher.' : pass ? 'Über der Hälfte, aber mit Lücken.' : 'Unter der Hälfte – die schwachen Kapitel unten zuerst nachlesen.') }))),
      (function () {
        var by = {}; items.forEach(function (it, i) { (by[it.c] = by[it.c] || []).push(scores[i]); });
        var bars = el('div', { class: 'bars' });
        D.chapters.forEach(function (c) {
          if (!by[c.id]) return;
          var v = by[c.id].reduce(function (a, b) { return a + b; }, 0) / by[c.id].length;
          add(bars, el('div', { class: 'bar-row' }, el('a', { href: '#/kapitel/' + c.id, text: c.nr + ' ' + c.short }),
            el('div', { class: 'meter' }, el('i', { class: v < 0.5 ? 'lo' : v < 0.8 ? 'mid' : '', style: 'width:' + Math.max(2, 100 * v) + '%' })), el('span', { class: 'num', text: pct(v) })));
        });
        return bars;
      })(),
      el('div', { class: 'btn-row', style: 'margin-top:1.2rem' },
        el('a', { class: 'btn primary', href: '#/pruefung', text: 'Neue Prüfung', onclick: function () { setTimeout(route, 0); } }),
        el('a', { class: 'btn', href: '#/', text: 'Zur Startseite' }))));
    add(w, el('h2', { class: 'section-title', style: 'margin-top:2rem', text: 'Alle Fragen mit Lösung' }));
    var only = false;
    var list = el('div');
    var toggle = el('button', { type: 'button', class: 'chip-toggle', 'aria-pressed': 'false', text: 'Nur Fehler zeigen', onclick: function () { only = !only; toggle.setAttribute('aria-pressed', only ? 'true' : 'false'); draw(); } });
    add(w, el('div', { class: 'chips', style: 'margin-bottom:.5rem' }, toggle));
    add(w, list);
    function draw() {
      list.innerHTML = '';
      items.forEach(function (it, i) {
        if (only && scores[i] >= 0.999) return;
        var slot = el('div'), p = el('div', { class: 'panel item review-item' });
        add(p, itemHead(it, i + 1, items.length)); add(p, slot); it.onchange = null; it.reveal(); it.mount(slot); add(p, verdict(scores[i]));
        add(list, p);
      });
      if (!list.children.length) add(list, el('p', { class: 'muted', text: 'Keine Fehler. Stark.' }));
    }
    draw();
    window.scrollTo(0, 0);
  }

  /* ---------- Router ---------- */
  var keyHandler = null, leaveGuard = null, lastHash = location.hash;
  document.addEventListener('keydown', function (e) { if (keyHandler && !e.ctrlKey && !e.metaKey && !e.altKey) keyHandler(e); });

  function route() {
    var parts = decodeURIComponent(location.hash.replace(/^#\/?/, '')).split('/').filter(Boolean);
    keyHandler = null;
    if (examTimer) { clearInterval(examTimer); examTimer = null; }
    var v;
    switch (parts[0]) {
      case 'kapitel': v = parts[1] ? viewChapter(parts[1]) : viewChapterList(); break;
      case 'karten': v = viewCards(parts[1]); break;
      case 'ueben': v = viewPractice(parts[1], parts[2]); break;
      case 'pruefung': v = viewExam(); break;
      default: parts = []; v = viewStart();
    }
    main.innerHTML = ''; main.appendChild(v);
    renderNav(parts);
    var c = parts[0] === 'kapitel' && parts[1] ? chapter(parts[1]) : null;
    document.title = (c ? c.nr + ' ' + c.short + ' – ' : '') + 'PML lernen';
    window.scrollTo(0, 0);
  }
  window.addEventListener('hashchange', function () {
    if (leaveGuard) {
      if (!leaveGuard()) { history.replaceState(null, '', lastHash || '#/pruefung'); return; }
      leaveGuard = null;
    }
    lastHash = location.hash; route();
  });
  window.addEventListener('beforeunload', function (e) { if (leaveGuard) { e.preventDefault(); e.returnValue = ''; } });
  route();
})();
