function similarity(a, b){
  const A = norm(a).split(" ").filter(Boolean), B = norm(b).split(" ").filter(Boolean);
  if (!A.length || !B.length) return 0;
  const pool = B.slice(); let hit = 0;
  for (const w of A){ const i = pool.indexOf(w); if (i > -1){ hit++; pool.splice(i, 1); } }
  return hit / Math.max(A.length, B.length);
}

RENDER.mcq = (sec, s, body) => {
  const v = s.v || (s.v = {}); const qs = [];
  sec.items.forEach((it, i) => {
    const q = h("div", { class: "q" });
    const text = h("div", { class: "q-text" }, h("span", { class: "q-num" }, pad(i)));
    it.q.split("___").forEach((part, k) => { if (k) text.append(h("span", { class: "blank" })); text.append(h("span", { html: part })); });
    const opts = h("div", { class: "opts", role: "radiogroup" });
    const btns = it.options.map((o, j) => {
      const b = h("button", { class: "opt", type: "button", role: "radio", html: o });
      b.addEventListener("click", () => { v[i] = j; persist(); paint(); fire(body); });
      opts.append(b); return b;
    });
    function paint(){ btns.forEach((b, j) => { b.classList.toggle("sel", v[i] === j); b.classList.remove("ok", "bad", "answer"); b.setAttribute("aria-checked", v[i] === j); }); }
    paint(); q.append(text, opts); body.append(q); qs.push({ it, btns, i, paint });
  });
  return {
    total: qs.length,
    check(){ return qs.map(({ it, btns, i, paint }) => { paint(); if (v[i] === undefined) return null; const ok = v[i] === it.answer; btns[v[i]].classList.add(ok ? "ok" : "bad"); return ok; }); },
    reveal(){ qs.forEach(({ it, btns, i }) => { if (v[i] !== it.answer) btns[it.answer].classList.add("answer"); }); },
    reset(){ clear(v); qs.forEach(({ paint }) => paint()); }
  };
};

RENDER.match = (sec, s, body) => {
  const v = s.v || (s.v = {}); const B = Board(body, v); const rows = [];
  const grid = h("div", { class: "match" });
  sec.pairs.forEach((p, i) => {
    const slot = h("div", { class: "slot", role: "button", "aria-label": "drop zone" });
    B.register(slot, slot, "m" + i, true);
    grid.append(h("div", { class: "mrow" }, h("div", { class: "left", "data-n": pad(i), html: p[0] }), slot));
    rows.push(slot);
  });
  shuffle(sec.pairs.map((p, i) => i), LESSON.id + sec.title).forEach(i => B.chip("r" + i, sec.pairs[i][1], String(i)));
  body.append(B.bank, grid); B.restore();
  return {
    total: rows.length,
    check(){ return rows.map((slot, i) => { const c = slot.querySelector(".chip");
      if (!c){ slot.classList.remove("ok", "bad"); return null; }
      const ok = c.dataset.value === String(i); slot.classList.toggle("ok", ok); slot.classList.toggle("bad", !ok); return ok; }); },
    reveal(){ B.resetAll(); rows.forEach((slot, i) => B.place(B.chips["r" + i], "m" + i)); },
    reset(){ B.resetAll(); persist(); }
  };
};

RENDER.dragwords = (sec, s, body) => {
  const v = s.v || (s.v = {}); const B = Board(body, v); const slots = []; const words = [];
  const list = h("ol", { class: "lines" });
  sec.items.forEach((it, i) => {
    const line = h("li", { class: "line" });
    parseGaps(it).forEach((p, j) => {
      if (p.text != null){ line.append(h("span", { html: p.text })); return; }
      const slot = h("span", { class: "slot", role: "button", "aria-label": "drop zone" });
      B.register(slot, slot, "g" + i + "-" + j, true);
      slots.push({ slot, answers: p.answers }); words.push(p.answers[0]); line.append(slot);
    });
    list.append(line);
  });
  (sec.extra || []).forEach(w => words.push(w));
  shuffle(words.map((w, k) => ({ id: "c" + k, w })), LESSON.id + sec.title).forEach(o => B.chip(o.id, o.w, o.w));
  if (sec.text) body.append(h("div", { class: "story", html: sec.text }));
  body.append(B.bank, list); B.restore();
  return {
    total: slots.length,
    check(){ return slots.map(o => {
      const c = o.slot.querySelector(".chip"); if (!c){ o.slot.classList.remove("ok", "bad"); return null; }
      const ok = matches(c.dataset.value, o.answers); o.slot.classList.toggle("ok", ok); o.slot.classList.toggle("bad", !ok); return ok;
    }); },
    reveal(){
      B.resetAll(); const used = new Set();
      slots.forEach(o => { const c = Object.values(B.chips).find(ch => !used.has(ch) && matches(ch.dataset.value, o.answers));
        if (c){ used.add(c); B.place(c, o.slot.dataset.zone); } });
    },
    reset(){ B.resetAll(); persist(); }
  };
};

RENDER.correct = (sec, s, body) => {
  const v = s.v || (s.v = {}); const rows = [];
  sec.items.forEach((it, i) => {
    const input = h("input", { class: "full", type: "text", autocomplete: "off", autocapitalize: "sentences", spellcheck: "false", "aria-label": "corrected sentence " + (i + 1) });
    input.value = v[i] != null ? v[i] : it.wrong;
    input.addEventListener("input", () => { v[i] = input.value; persist(); input.classList.remove("ok", "bad"); });
    const row = h("div", { class: "row" }, h("div", { class: "row-label" }, h("span", { class: "q-num" }, pad(i)), h("s", {}, it.wrong)), input);
    body.append(row); rows.push({ it, input, row });
  });
  return {
    total: rows.length,
    check(){ return rows.map(r => {
      if (norm(r.input.value) === norm(r.it.wrong) || !r.input.value.trim()){ r.input.classList.remove("ok", "bad"); return null; }
      const ok = matches(r.input.value, r.it.answers); r.input.classList.toggle("ok", ok); r.input.classList.toggle("bad", !ok); return ok; }); },
    reveal(){ rows.forEach(r => { if (!r.input.classList.contains("ok") && !r.row.querySelector(".model")) r.row.append(h("div", { class: "model" }, "✓ " + r.it.answers[0])); }); },
    reset(){ clear(v); rows.forEach(r => { r.input.value = r.it.wrong; r.input.classList.remove("ok", "bad"); }); }
  };
};

RENDER.rephrase = (sec, s, body) => {
  const v = s.v || (s.v = {}); const rows = [];
  sec.items.forEach((it, i) => {
    const input = h("input", { class: "full", type: "text", autocomplete: "off", autocapitalize: "sentences", spellcheck: "false", placeholder: "Type the full sentence…", "aria-label": "answer " + (i + 1) });
    input.value = v[i] || "";
    const prompt = h("div", { class: "prompt" }, h("span", { class: "num" }, pad(i)), h("span", { html: it.prompt }));
    if (it.key) prompt.append(h("span", { class: "key" }, it.key));
    const row = h("div", { class: "row" }, prompt, input);
    input.addEventListener("input", () => { v[i] = input.value; persist(); input.classList.remove("ok", "bad", "close"); const m = row.querySelector(".model"); if (m) m.remove(); });
    body.append(row); rows.push({ it, input, row });
  });
  return {
    total: rows.length,
    check(){ return rows.map(r => {
      const old = r.row.querySelector(".model"); if (old) old.remove();
      r.input.classList.remove("ok", "bad", "close");
      if (!r.input.value.trim()) return null;
      if (matches(r.input.value, r.it.answers)){ r.input.classList.add("ok"); return true; }
      const best = Math.max(...r.it.answers.map(a => similarity(r.input.value, a)));
      if (best >= .7){ r.input.classList.add("close"); r.row.append(h("div", { class: "model close" }, "Almost! Check the form of the words.")); }
      else r.input.classList.add("bad");
      return false;
    }); },
    reveal(){ rows.forEach(r => { const old = r.row.querySelector(".model"); if (old) old.remove(); if (!r.input.classList.contains("ok")) r.row.append(h("div", { class: "model" }, "✓ " + r.it.answers[0])); }); },
    reset(){ clear(v); rows.forEach(r => { r.input.value = ""; r.input.classList.remove("ok", "bad", "close"); }); }
  };
};

RENDER.write = (sec, s, body) => {
  const v = s.v || (s.v = {});
  let box = null;
  if (sec.words){ box = h("div", { class: "wordbox" }); sec.words.forEach(w => box.append(h("span", { "data-w": w }, w))); body.append(box); }
  const ta = h("textarea", { class: "full", rows: 8, spellcheck: "true", placeholder: "Write here…", "aria-label": "your text" });
  ta.value = v.text || "";
  const ul = h("ul", { class: "checks" });
  const lis = (sec.checks || []).map(c => { const li = h("li", {}, c.label); ul.append(li); return { c, li }; });
  body.append(ta, ul);
  function usedWords(t){ return (sec.words || []).filter(w => new RegExp("\\b" + w.replace(/\s+/g, "\\s+(?:\\w+\\s+)?"), "i").test(t)); }
  function run(){ const tx = ta.value.replace(/[’‘]/g, "'");
    const used = usedWords(tx);
    if (box) box.querySelectorAll("span").forEach(sp => sp.classList.toggle("used", used.includes(sp.dataset.w)));
    lis.forEach(({ c, li }) => {
      let ok = false;
      if (c.pattern){ const n = (tx.match(new RegExp(c.pattern, "gi")) || []).length; ok = n >= (c.min || 1); }
      if (c.words) ok = used.length >= c.words;
      if (c.sentences) ok = tx.split(/[.!?]+|\n+/).filter(x => x.trim().split(/\s+/).length >= 3).length >= c.sentences;
      li.classList.toggle("done", ok);
    });
  }
  ta.addEventListener("input", () => { v.text = ta.value; persist(); run(); });
  run();
  return {
    total: 0, revealLabel: "👀 See an example", alwaysShow: true,
    check(){ run(); return []; },
    reveal(){ if (!body.querySelector(".model")) body.append(h("div", { class: "model" }, "Example: " + sec.sample)); },
    reset(){ clear(v); ta.value = ""; run(); }
  };
};

/* automaticity drill: every item must be typed correctly twice; mistakes come back */
RENDER.drill = (sec, s, body) => {
  const items = sec.items; const NEED = sec.need || 2;
  const box = h("div", { class: "drill" }); body.append(box);
  let q, hits, cur, t0, tick, mistakes;
  function fmt(ms){ const t = Math.floor(ms / 1000); return Math.floor(t / 60) + ":" + String(t % 60).padStart(2, "0"); }
  function intro(){
    clearInterval(tick); box.innerHTML = "";
    box.append(h("div", { class: "dtop" }, h("span", {}, items.length + " phrases × " + NEED), h("span", {}, s.best ? "best time " + fmt(s.best) : "no best time yet")));
    box.append(h("div", { class: "dprompt" }, h("small", {}, "how it works"), "Type each answer fast. Mistakes come back until you get them right twice."));
    const go = h("button", { class: "start", type: "button" }, "Start the dive ↓"); go.addEventListener("click", start); box.append(go);
  }
  function start(){
    q = shuffle(items.map((_, i) => i), "d" + Date.now()); hits = items.map(() => 0); mistakes = 0; t0 = Date.now();
    box.innerHTML = "";
    const dots = h("div", { class: "dots" }, items.map(() => h("i")));
    const timer = h("span", { class: "timer" }, "0:00");
    const prompt = h("div", { class: "dprompt" });
    const input = h("input", { type: "text", autocomplete: "off", autocapitalize: "sentences", spellcheck: "false", "aria-label": "your answer" });
    const go = h("button", { class: "go", type: "button" }, "↵");
    const fb = h("div", { class: "dfb" });
    box.append(h("div", { class: "dtop" }, dots, timer), prompt, h("div", { class: "drow" }, input, go), fb);
    tick = setInterval(() => { timer.textContent = fmt(Date.now() - t0); }, 250);
    function paintDots(){ [...dots.children].forEach((d, i) => { d.className = hits[i] >= NEED ? "full" : hits[i] > 0 ? "half" : ""; }); }
    function next(){
      if (!q.length){ finish(); return; }
      cur = q.shift(); const it = items[cur];
      prompt.innerHTML = ""; prompt.append(h("small", {}, it.cue), h("span", { html: it.prompt }));
      input.value = ""; input.focus({ preventScroll: true });
    }
    function submit(){
      if (cur == null || !input.value.trim()) return;
      const it = items[cur]; const ok = matches(input.value, it.answers);
      box.classList.remove("flash-ok", "flash-bad"); void box.offsetWidth; box.classList.add(ok ? "flash-ok" : "flash-bad");
      if (ok){ hits[cur]++; fb.className = "dfb ok"; fb.textContent = "✓ " + it.answers[0]; if (hits[cur] < NEED) q.splice(Math.min(q.length, 3 + Math.floor(Math.random() * 3)), 0, cur); }
      else { mistakes++; hits[cur] = 0; fb.className = "dfb bad"; fb.textContent = "✗ " + it.answers[0]; q.splice(Math.min(q.length, 2), 0, cur); }
      paintDots(); next();
    }
    go.addEventListener("click", submit);
    input.addEventListener("keydown", e => { if (e.key === "Enter"){ e.preventDefault(); submit(); } });
    paintDots(); next();
  }
  function finish(){
    clearInterval(tick); const ms = Date.now() - t0; const best = !s.best || ms < s.best;
    if (best){ s.best = ms; persist(); }
    box.innerHTML = "";
    const again = h("button", { class: "start", type: "button" }, "Dive again");
    again.addEventListener("click", start);
    box.append(h("div", { class: "done" }, h("small", {}, "your time"), h("b", {}, fmt(ms)),
      h("div", {}, (best ? "New best time! " : "Best: " + fmt(s.best) + ". ") + (mistakes ? mistakes + " slip" + (mistakes > 1 ? "s" : "") + " on the way." : "No mistakes at all!"))), again);
    burst(again);
  }
  intro();
  return { noFoot: true, total: 0 };
};

