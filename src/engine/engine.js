<script>
/* =====================================================================
   ENGINE — no need to edit below this line
   ===================================================================== */
(function(){
"use strict";

function h(tag, props){
  const el = document.createElement(tag);
  if (props) for (const k in props){
    const v = props[k];
    if (v == null || v === false) continue;
    if (k === "class") el.className = v;
    else if (k === "html") el.innerHTML = v;
    else if (k === "style") el.style.cssText = v;
    else if (k.slice(0,2) === "on") el.addEventListener(k.slice(2), v);
    else el.setAttribute(k, v === true ? "" : v);
  }
  for (let i = 2; i < arguments.length; i++){
    const kids = [].concat(arguments[i]);
    for (const kid of kids){
      if (kid == null || kid === false || kid === "") continue;
      el.append(kid.nodeType ? kid : document.createTextNode(kid));
    }
  }
  return el;
}
function clear(obj){ for (const k of Object.keys(obj)) delete obj[k]; }
function emo(x){
  if (!x) return "";
  if (/^[a-z0-9-]+$/.test(x)) return h("img", { src: "assets/emoji/" + x + ".png", alt: "", draggable: "false" });
  return document.createTextNode(x);
}
function norm(s, dWord){
  s = String(s || "").toLowerCase().replace(/[’‘`´]/g, "'").replace(/[“”"«»]/g, "");
  s = s.replace(/\bwon't\b/g, "will not").replace(/\bcan't\b/g, "cannot")
       .replace(/n't\b/g, " not").replace(/'m\b/g, " am").replace(/'re\b/g, " are")
       .replace(/'ve\b/g, " have").replace(/'ll\b/g, " will").replace(/'d\b/g, " " + (dWord || "had"));
  s = s.replace(/[.,!?;:()\[\]–—-]/g, " ").replace(/\s+/g, " ").trim();
  return s;
}
function matches(value, answers){
  const a = answers.map(x => norm(x)); const v1 = norm(value, "had"), v2 = norm(value, "would");
  return v1 !== "" && (a.includes(v1) || a.includes(v2));
}
function parseGaps(str){
  const parts = []; const re = /\[\[(.+?)\]\]/g; let last = 0, m;
  while ((m = re.exec(str))){
    if (m.index > last) parts.push({ text: str.slice(last, m.index) });
    const [ans, hint] = m[1].split(" // ");
    parts.push({ answers: ans.split("|").map(s => s.trim()), hint: hint ? hint.trim() : null });
    last = re.lastIndex;
  }
  if (last < str.length) parts.push({ text: str.slice(last) });
  return parts;
}
function hashStr(s){ let h1 = 1779033703 ^ s.length; for (let i = 0; i < s.length; i++){ h1 = Math.imul(h1 ^ s.charCodeAt(i), 3432918353); h1 = h1 << 13 | h1 >>> 19; } return h1 >>> 0; }
function shuffle(arr, seedStr){
  let seed = hashStr(seedStr);
  const rnd = () => { seed = seed + 0x6D2B79F5 | 0; let t = Math.imul(seed ^ seed >>> 15, 1 | seed); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--){ const j = Math.floor(rnd() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  if (a.length > 1 && a.every((x, i) => x === arr[i])) a.push(a.shift());
  return a;
}
function fire(el){ el.dispatchEvent(new Event("input", { bubbles: true })); }
const pad = i => String(i + 1).padStart(2, "0");

/* ---------- storage ---------- */
const KEY = "lesson:" + LESSON.id;
let SAVE = {};
try { SAVE = JSON.parse(localStorage.getItem(KEY) || "{}") || {}; } catch (e) { SAVE = {}; }
function persist(){ try { localStorage.setItem(KEY, JSON.stringify(SAVE)); } catch (e) {} }

/* ---------- header ---------- */
const root = document.documentElement;
for (const k in (LESSON.theme || {})) root.style.setProperty("--" + k, LESSON.theme[k]);
document.title = LESSON.title;
document.getElementById("kicker").textContent = LESSON.kicker || "";
const tEl = document.getElementById("title");
if (LESSON.titleHTML) tEl.innerHTML = LESSON.titleHTML; else tEl.textContent = LESSON.title;
document.getElementById("sub").textContent = LESSON.subtitle || "";
const st = LESSON.stickers || [];
document.getElementById("sticker1").append(emo(st[0]));
document.getElementById("sticker2").append(emo(st[1]));

function burst(fromEl){
  if (window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const r = fromEl.getBoundingClientRect(); const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
  const set = LESSON.confetti && LESSON.confetti.length ? LESSON.confetti : ["⭐"];
  for (let i = 0; i < 16; i++){
    const s = h("span", { class: "confetti" }, emo(set[i % set.length]));
    document.body.append(s);
    const dx = (Math.random() - .5) * 360, dy = -60 - Math.random() * 230, rot = (Math.random() - .5) * 540;
    const anim = s.animate([
      { transform: `translate(${cx}px, ${cy}px) scale(.5)`, opacity: 1 },
      { transform: `translate(${cx + dx * .6}px, ${cy + dy}px) rotate(${rot / 2}deg) scale(1.1)`, opacity: 1, offset: .55 },
      { transform: `translate(${cx + dx}px, ${cy + dy + 170}px) rotate(${rot}deg) scale(.9)`, opacity: 0 }
    ], { duration: 1150 + Math.random() * 400, easing: "cubic-bezier(.2,.7,.4,1)" });
    anim.onfinish = () => s.remove();
  }
}

/* ---------- drag & drop board (mouse + touch + tap) ---------- */
function Board(scope, v){
  const zones = {}, chips = {}; let selected = null;
  const bank = h("div", { class: "bank" });
  register(bank, bank, "bank", false);
  function register(clickEl, dropEl, id, single){
    clickEl.dataset.zone = id; zones[id] = { el: dropEl, box: clickEl, single };
    clickEl.addEventListener("click", () => { if (selected) place(selected, id); });
  }
  function zoneOf(c){ for (const id in zones){ if (zones[id].el === c.parentElement) return id; } return "bank"; }
  function unselect(){ if (selected) selected.classList.remove("selected"); selected = null; }
  function clearMarks(){ scope.querySelectorAll(".ok,.bad").forEach(n => n.classList.remove("ok", "bad")); }
  function place(c, zid, silent){
    const z = zones[zid]; if (!z) return;
    if (z.single) z.el.querySelectorAll(".chip").forEach(o => { if (o !== c) bank.append(o); });
    z.el.append(c); unselect();
    if (!silent){ clearMarks(); for (const id in chips){ const zz = zoneOf(chips[id]); if (zz === "bank") delete v[id]; else v[id] = zz; } persist(); fire(scope); }
  }
  function tap(c){
    if (zoneOf(c) !== "bank"){ place(c, "bank"); return; }
    if (selected === c){ unselect(); return; }
    unselect(); selected = c; c.classList.add("selected");
  }
  function zoneAt(x, y){
    const el = document.elementFromPoint(x, y); const z = el && el.closest("[data-zone]");
    return z && scope.contains(z) ? z : null;
  }
  let overEl = null;
  function setOver(z){ if (overEl === z) return; if (overEl) overEl.classList.remove("over"); overEl = z; if (z) z.classList.add("over"); }
  function chip(id, label, value){
    const c = h("button", { class: "chip", type: "button", html: label });
    c.dataset.id = id; c.dataset.value = value; chips[id] = c;
    let d = null;
    c.addEventListener("pointerdown", e => {
      if (e.pointerType === "mouse" && e.button !== 0) return;
      d = { x: e.clientX, y: e.clientY, moved: false, ghost: null };
      try { c.setPointerCapture(e.pointerId); } catch (_) {}
    });
    c.addEventListener("pointermove", e => {
      if (!d) return;
      if (!d.moved && Math.hypot(e.clientX - d.x, e.clientY - d.y) > 6){
        d.moved = true; unselect();
        const r = c.getBoundingClientRect(); d.ox = d.x - r.left; d.oy = d.y - r.top;
        d.ghost = c.cloneNode(true); d.ghost.classList.add("ghost"); d.ghost.classList.remove("ok", "bad");
        d.ghost.style.width = r.width + "px"; document.body.append(d.ghost); c.classList.add("dragging");
      }
      if (d.moved){
        e.preventDefault();
        d.ghost.style.left = (e.clientX - d.ox) + "px"; d.ghost.style.top = (e.clientY - d.oy) + "px";
        setOver(zoneAt(e.clientX, e.clientY));
      }
    });
    const end = e => {
      if (!d) return; const was = d; d = null;
      if (!was.moved) return;
      was.ghost.remove(); c.classList.remove("dragging"); setOver(null); c._suppress = true;
      if (e.type === "pointerup"){ const z = zoneAt(e.clientX, e.clientY); if (z) place(c, z.dataset.zone); }
    };
    c.addEventListener("pointerup", end);
    c.addEventListener("pointercancel", end);
    c.addEventListener("click", e => { e.stopPropagation(); if (c._suppress){ c._suppress = false; return; } tap(c); });
    bank.append(c);
    return c;
  }
  function restore(){ for (const id in v){ if (chips[id] && zones[v[id]]) place(chips[id], v[id], true); } }
  function resetAll(){ for (const id in chips) bank.append(chips[id]); clear(v); clearMarks(); unselect(); }
  return { bank, register, chip, place, restore, resetAll, chips, zones, zoneOf };
}

/* ---------- renderers: check() returns one value per item: true / false / null (not answered) ---------- */
const RENDER = {};
const LABEL = { rule: "theory", build: "word order", gapfill: "gap fill", tf2: "true / false", slotwrite: "writing", review: "self-check" };
const ROLES = [
  ["who", "Who?"], ["freq", "How often?"], ["does", "Does what?"], ["what", "What? Whom?"], ["where", "Where?"], ["when", "When?"]
];

RENDER.rule = (sec, s, body) => { body.append(h("div", { class: "rule", html: sec.html })); return null; };

RENDER.build = (sec, s, body) => {
  const v = s.v || (s.v = {}); const items = [];
  sec.items.forEach((it, i) => {
    const vi = v[i] || (v[i] = {});
    const wrap = h("div", { class: "bitem" });
    const state = h("span", { class: "bstate" });
    wrap.append(h("div", { class: "bhead" }, h("span", { class: "bnum" }, pad(i)), state));
    const B = Board(wrap, vi);
    const row = h("div", { class: "brow" }); const slots = [];
    ROLES.forEach(([role, q]) => {
      if (it[role] == null) return;
      const zone = h("div", { class: "bz" });
      const box = h("div", { class: "bslot c-" + role, role: "button", "aria-label": q }, h("span", { class: "bq" }, q), zone);
      B.register(box, zone, "z-" + role, true);
      row.append(box); slots.push({ role, box, zone });
    });
    row.append(h("span", { class: "bdot" }, it.end || "."));
    const chipsData = ROLES.filter(([r]) => it[r] != null).map(([r]) => ({ id: r, label: it[r], value: r }));
    if (it.wrong) chipsData.push({ id: "x", label: it.wrong, value: "x" });
    shuffle(chipsData, LESSON.id + sec.title + i).forEach(c => B.chip(c.id, c.label, c.value));
    wrap.append(B.bank, row); body.append(wrap);
    B.restore();
    items.push({ B, slots, state });
  });
  return {
    total: items.length,
    check(){ return items.map(({ slots, state }) => {
      let filled = 0, ok = true;
      slots.forEach(o => {
        const c = o.zone.querySelector(".chip"); if (c) filled++;
        const good = !!c && c.dataset.value === o.role;
        o.box.classList.toggle("ok", good); o.box.classList.toggle("bad", !good);
        if (!good) ok = false;
      });
      if (!filled){ slots.forEach(o => o.box.classList.remove("ok", "bad")); state.textContent = ""; return null; }
      state.className = "bstate " + (ok ? "ok" : "bad"); state.textContent = ok ? "✓" : "Try again — fix the red slot.";
      return ok;
    }); },
    reveal(){ items.forEach(({ B, slots }) => { B.resetAll(); slots.forEach(o => B.place(B.chips[o.role], "z-" + o.role)); }); },
    reset(){ items.forEach(({ B, state }) => { B.resetAll(); state.textContent = ""; }); persist(); }
  };
};

RENDER.gapfill = (sec, s, body) => {
  const v = s.v || (s.v = {}); const lines = [];
  const list = h("ol", { class: "lines" });
  sec.items.forEach((raw, i) => {
    const it = typeof raw === "string" ? { text: raw } : raw;
    const li = h("li", {}); const line = h("div", { class: "line" }); const gaps = [];
    parseGaps(it.text).forEach((p, j) => {
      if (p.text != null){ line.append(h("span", { html: p.text })); return; }
      const key = i + "-" + j;
      const w = Math.max(5, ...p.answers.map(a => a.length)) + 2;
      const input = h("input", { class: "gap", type: "text", autocomplete: "off", autocapitalize: "off", autocorrect: "off", spellcheck: "false", "aria-label": p.hint ? "gap: " + p.hint : "gap", style: `width:${w}ch` });
      input.value = v[key] || "";
      input.addEventListener("input", () => { v[key] = input.value; persist(); input.classList.remove("ok", "bad"); const y = li.querySelector(".why"); if (y) y.remove(); });
      input.addEventListener("keydown", e => {
        if (e.key !== "Enter") return; e.preventDefault();
        const all = Array.from(body.querySelectorAll("input.gap")); const n = all[all.indexOf(input) + 1];
        if (n) n.focus(); else input.blur();
      });
      const wrap = h("span", { class: "gapwrap" }, input);
      if (p.hint) wrap.append(h("span", { class: "hint" }, "(" + p.hint + ")"));
      line.append(wrap); gaps.push({ input, answers: p.answers, wrap });
    });
    li.append(line); list.append(li); lines.push({ it, li, gaps });
  });
  body.append(list);
  return {
    total: lines.length,
    check(){ return lines.map(({ it, li, gaps }) => {
      const old = li.querySelector(".why"); if (old) old.remove();
      if (gaps.every(g => !g.input.value.trim())){ gaps.forEach(g => g.input.classList.remove("ok", "bad")); return null; }
      let ok = true;
      gaps.forEach(g => { const good = matches(g.input.value, g.answers); g.input.classList.toggle("ok", good); g.input.classList.toggle("bad", !good); if (!good) ok = false; });
      if (it.why) li.append(h("span", { class: "why " + (ok ? "ok" : "bad") }, (ok ? "✓ " : "✗ ") + it.why));
      return ok;
    }); },
    reveal(){ lines.forEach(({ gaps }) => gaps.forEach(g => { if (!g.input.classList.contains("ok") && !g.wrap.querySelector(".reveal")) g.wrap.append(h("span", { class: "reveal" }, "→ " + g.answers[0])); })); },
    reset(){ clear(v); lines.forEach(({ li, gaps }) => { gaps.forEach(g => { g.input.value = ""; g.input.classList.remove("ok", "bad"); }); const y = li.querySelector(".why"); if (y) y.remove(); }); }
  };
};

RENDER.tf2 = (sec, s, body) => {
  const v = s.v || (s.v = {}); const qs = [];
  body.classList.add("tf2");
  if (sec.text) body.append(h("div", { class: "story", html: sec.text }));
  sec.items.forEach((it, i) => {
    const st = v[i] || (v[i] = {});
    const q = h("div", { class: "q" });
    const tfo = h("div", { class: "opts tfo" });
    const bT = h("button", { class: "opt", type: "button" }, "True");
    const bF = h("button", { class: "opt", type: "button" }, "False");
    tfo.append(bT, bF);
    q.append(h("div", { class: "q-top" }, h("div", { class: "q-text" }, h("span", { class: "q-num" }, pad(i)), h("span", { html: it.q })), tfo));
    const fixOpts = h("div", { class: "opts" });
    const fixBtns = it.fix.map((f, j) => { const b = h("button", { class: "opt", type: "button", html: f }); b.addEventListener("click", () => { st.fix = j; persist(); paint(); fire(body); }); fixOpts.append(b); return b; });
    const fixbox = h("div", { class: "fixbox", hidden: true }, h("div", { class: "fl" }, "Correct it:"), fixOpts);
    const warn = h("div", { class: "warnline", hidden: true }, "Choose the correct sentence.");
    q.append(fixbox, warn);
    bT.addEventListener("click", () => { st.tf = true; delete st.fix; persist(); paint(); fire(body); });
    bF.addEventListener("click", () => { st.tf = false; persist(); paint(); fire(body); });
    function paint(){
      [bT, bF, ...fixBtns].forEach(b => b.classList.remove("ok", "bad", "answer"));
      bT.classList.toggle("sel", st.tf === true); bF.classList.toggle("sel", st.tf === false);
      fixbox.hidden = st.tf !== false; warn.hidden = true;
      fixBtns.forEach((b, j) => b.classList.toggle("sel", st.fix === j));
    }
    paint(); body.append(q);
    qs.push({ it, st, bT, bF, fixBtns, fixbox, warn, paint });
  });
  return {
    total: qs.length,
    check(){ return qs.map(o => {
      const { it, st } = o; o.paint();
      if (st.tf === undefined) return null;
      const tfOk = st.tf === it.answer;
      (st.tf ? o.bT : o.bF).classList.add(tfOk ? "ok" : "bad");
      if (st.tf === false && tfOk){
        if (st.fix === undefined){ o.warn.hidden = false; return null; }
        const fixOk = st.fix === it.fixAnswer; o.fixBtns[st.fix].classList.add(fixOk ? "ok" : "bad");
        return fixOk;
      }
      return tfOk;
    }); },
    reveal(){ qs.forEach(o => { const { it, st } = o;
      if (st.tf !== it.answer) (it.answer ? o.bT : o.bF).classList.add("answer");
      if (!it.answer){ o.fixbox.hidden = false; o.fixBtns[it.fixAnswer].classList.add("answer"); }
    }); },
    reset(){ qs.forEach(o => { clear(o.st); o.paint(); }); }
  };
};

RENDER.slotwrite = (sec, s, body) => {
  const v = s.v || (s.v = {}); const rows = [];
  sec.items.forEach((it, i) => {
    const input = h("input", { class: "full", type: "text", autocomplete: "off", autocapitalize: "sentences", spellcheck: "true", placeholder: it.who.split(" / ")[0] + " …", "aria-label": "sentence about " + it.who });
    input.value = v[i] || "";
    const tags = h("div", { class: "sp-tags" },
      h("span", { class: "c-who fill" }, "Who? " + it.who),
      h("span", { class: "c-does" }, "Does what?"), h("span", { class: "c-what" }, "What?"),
      h("span", { class: "c-where" }, "Where?"), h("span", { class: "c-when" }, "When?"));
    const row = h("div", { class: "row" }, h("div", { class: "prompt" }, h("span", { class: "num" }, pad(i))), tags, input);
    row.querySelector(".prompt").append(h("span", {}, ""));
    input.addEventListener("input", () => { v[i] = input.value; persist(); input.classList.remove("ok", "bad"); const m = row.querySelector(".model"); if (m) m.remove(); });
    body.append(row); rows.push({ it, input, row });
  });
  return {
    total: rows.length, revealLabel: "👀 Show examples",
    check(){ return rows.map(r => {
      const old = r.row.querySelector(".model"); if (old) old.remove();
      const txt = r.input.value.trim(); if (!txt){ r.input.classList.remove("ok", "bad"); return null; }
      const words = txt.split(/\s+/).filter(Boolean);
      const verbOk = /^\s*(\S+\s+){1,3}\w*(s)\b/i.test(txt);
      const ok = words.length >= 5 && verbOk;
      r.input.classList.toggle("ok", ok); r.input.classList.toggle("bad", !ok);
      if (!ok) r.row.append(h("div", { class: "model warn" }, !verbOk ? "Check the verb: he / she / it → -s." : "Add more slots: what? where? when?"));
      return ok;
    }); },
    reveal(){ rows.forEach(r => { const old = r.row.querySelector(".model"); if (old) old.remove(); r.row.append(h("div", { class: "model" }, "Example: " + r.it.sample)); }); },
    reset(){ clear(v); rows.forEach(r => { r.input.value = ""; r.input.classList.remove("ok", "bad"); }); }
  };
};

/* ---------- build page ---------- */
const main = document.getElementById("lesson");
const graded = []; let reviewBox = null; let n = 0;

LESSON.sections.forEach((sec, idx) => {
  if (sec.type === "part"){
    main.append(h("div", { class: "part", style: sec.color ? "--pc:" + sec.color : "" },
      h("div", { class: "pi" }, emo(sec.icon)),
      h("div", {}, h("div", { class: "pn" }, "PART " + sec.n), h("h2", {}, sec.title), sec.text ? h("p", {}, sec.text) : null)));
    return;
  }
  const sid = "s" + idx; const s = SAVE[sid] || (SAVE[sid] = {});
  const exercise = sec.type !== "rule" && sec.type !== "review";
  const card = h("section", { class: "card", id: sid });
  card.append(h("div", { class: "winbar", "aria-hidden": "true" }, h("i"), h("i"), h("i"), h("span", {}, sec.label || LABEL[sec.type] || "")));
  if (sec.sticker) card.append(h("div", { class: "deco", "aria-hidden": "true" }, emo(sec.sticker)));
  const inner = h("div", { class: "card-in" }); card.append(inner);
  const num = exercise ? pad(n++) : (sec.type === "review" ? "★" : "i");
  inner.append(h("div", { class: "card-head" }, h("div", { class: "ticket" + (exercise ? "" : " alt") }, num), h("div", {}, h("h2", { class: "t", html: sec.title || "" }))));
  if (sec.instructions) inner.append(h("p", { class: "instr", html: sec.instructions }));
  else inner.append(h("div", { style: "height:14px" }));
  const body = h("div", { class: "card-body" }); inner.append(body);
  main.append(card);

  if (sec.type === "review"){ reviewBox = body; return; }
  const api = RENDER[sec.type] ? RENDER[sec.type](sec, s, body) : null;
  if (!api) return;

  const score = h("span", { class: "score" });
  const btnCheck = h("button", { class: "btn btn-check", type: "button" }, "Check");
  const btnShow = h("button", { class: "btn btn-soft", type: "button", hidden: true }, api.revealLabel || "👀 Show answers");
  const btnReset = h("button", { class: "btn", type: "button" }, "Reset");
  inner.append(h("div", { class: "card-foot" }, btnCheck, btnShow, btnReset, score));
  const g = { sec, s, api, card, num, title: sec.title };
  graded.push(g);

  function showScore(){
    if (s.score == null){ score.textContent = ""; score.classList.remove("perfect"); return; }
    score.textContent = s.score + "/" + api.total + (s.score === api.total ? " ✓" : "");
    score.classList.toggle("perfect", s.score === api.total);
  }
  function doCheck(silent){
    const res = api.check(); const sc = res.filter(x => x === true).length;
    s.score = sc; s.checked = true;
    if (!silent){
      s.tries = (s.tries || 0) + 1;
      s.first = s.first || [];
      s.fixed = s.fixed || [];
      res.forEach((r, i) => {
        if (s.first[i] == null){ if (r !== null) s.first[i] = r; }
        else if (s.first[i] === false && r === true && !s.revealed) s.fixed[i] = true;
      });
    }
    btnShow.hidden = !((s.tries || 0) >= 2 && sc < api.total);
    persist(); showScore(); updateAll();
    if (!silent && sc === api.total){ burst(btnCheck); btnCheck.classList.remove("wiggle"); void btnCheck.offsetWidth; btnCheck.classList.add("wiggle"); }
  }
  g.doCheck = doCheck;
  btnCheck.addEventListener("click", () => doCheck(false));
  btnShow.addEventListener("click", () => { s.revealed = true; persist(); api.reveal(); updateAll(); });
  btnReset.addEventListener("click", () => {
    api.reset(); body.querySelectorAll(".reveal,.model,.why").forEach(x => x.remove());
    delete s.score; delete s.checked; persist(); btnShow.hidden = true; showScore(); updateAll();
  });
  body.addEventListener("input", () => { if (s.score != null){ delete s.score; delete s.checked; persist(); showScore(); updateAll(); } });
  if (s.checked) doCheck(true);
});

/* ---------- progress + self-check ---------- */
function updateAll(){
  let sc = 0, tot = 0, fixed = 0;
  graded.forEach(({ s, api }) => { tot += api.total; if (s.score != null) sc += s.score; (s.fixed || []).forEach(f => { if (f) fixed++; }); });
  document.getElementById("pScore").textContent = sc;
  document.getElementById("pTotal").textContent = tot;
  document.getElementById("pBar").style.width = tot ? (sc / tot * 100) + "%" : "0";
  document.getElementById("pFix").textContent = fixed;
  if (!reviewBox) return;
  reviewBox.innerHTML = "";
  reviewBox.append(h("div", { class: "fixcount" }, emo("star"),
    h("div", {}, h("div", { class: "big" }, "+" + fixed), h("div", { class: "lbl" }, "mistakes you fixed yourself"))));
  const list = h("div", { class: "rv-list" }); let any = false, checkedAny = false;
  graded.forEach(g => {
    const first = g.s.first || []; if (first.length) checkedAny = true;
    const wrong = [], done = [];
    first.forEach((f, i) => { if (f === false){ (g.s.fixed && g.s.fixed[i] ? done : wrong).push(i + 1); } });
    if (!wrong.length && !done.length) return;
    any = true;
    const btn = h("button", { class: "btn", type: "button" }, wrong.length ? "Fix →" : "See →");
    btn.addEventListener("click", () => { g.card.scrollIntoView({ behavior: "smooth", block: "start" }); g.card.classList.remove("flash"); void g.card.offsetWidth; g.card.classList.add("flash"); });
    list.append(h("div", { class: "rv-item" + (wrong.length ? "" : " done") },
      h("div", {}, h("div", { class: "rv-t" }, g.num + " · " + g.title.replace(/<[^>]+>/g, "")),
        h("div", { class: "rv-n" }, wrong.length ? "to fix: " + wrong.join(", ") + (g.s.revealed ? " (answers shown)" : "") : "all fixed ✓")),
      btn));
  });
  if (!any) list.append(h("div", { class: "rv-empty" }, checkedAny ? "No mistakes — wow! 🎉" : "Check some exercises first. Your mistakes will appear here."));
  reviewBox.append(list);
}
updateAll();

document.getElementById("resetAll").addEventListener("click", () => {
  if (!confirm("Clear all your answers in this lesson?")) return;
  SAVE = {}; try { localStorage.removeItem(KEY); } catch (e) {}
  location.reload();
});
})();
</script>
</body>
</html>
