
/* ---------- birthday widgets: cake, wheel, gifts ---------- */
RENDER.cake = (sec, s, body) => {
  const N = sec.candles || 16; const list = [];
  const stage = h("div", { class: "cake-stage" });
  const candles = h("div", { class: "candles" });
  for (let i = 0; i < N; i++){
    const c = h("button", { class: "candle lit", type: "button", "aria-label": "candle " + (i + 1), style: "--i:" + i }, h("i", { class: "flame" }), h("i", { class: "smoke" }));
    c.addEventListener("click", () => { if (c.classList.contains("lit")){ c.classList.remove("lit"); after(); } });
    candles.append(c); list.push(c);
  }
  stage.append(candles, h("div", { class: "cake" }, h("div", { class: "tier t2" }, h("span", {}, sec.top || "")), h("div", { class: "tier t1" }), h("div", { class: "plate" })));
  const left = h("span", { class: "cake-left" });
  const btnMic = h("button", { class: "btn btn-check", type: "button" }, "🎤 Blow into the mic");
  const btnRelight = h("button", { class: "btn", type: "button" }, "🕯️ Light them again");
  const msg = h("div", { class: "cake-msg", html: sec.done || "" }); msg.hidden = true;
  body.append(h("div", { class: "cake-banner", html: sec.banner || "" }), stage,
    h("p", { class: "cake-hint", html: sec.hint || "" }), h("div", { class: "cake-ctr" }, btnMic, btnRelight, left), msg);
  const lit = () => list.filter(c => c.classList.contains("lit"));
  function after(){
    const n = lit().length; left.textContent = n ? n + (n === 1 ? " candle left" : " candles left") : "";
    if (!n && msg.hidden){ msg.hidden = false; stopMic(); [0, 260, 560, 900].forEach(t => setTimeout(() => burst(stage), t)); }
  }
  btnRelight.addEventListener("click", () => { list.forEach(c => c.classList.add("lit")); msg.hidden = true; after(); });
  let stream = null, raf = 0, ctx = null;
  function stopMic(){
    cancelAnimationFrame(raf);
    if (stream) stream.getTracks().forEach(t => t.stop()); stream = null;
    if (ctx){ try { ctx.close(); } catch (e) {} ctx = null; }
    btnMic.textContent = "🎤 Blow into the mic";
  }
  btnMic.addEventListener("click", async () => {
    if (stream){ stopMic(); return; }
    try { stream = await navigator.mediaDevices.getUserMedia({ audio: true }); }
    catch (e){ btnMic.textContent = "🎤 No mic — tap the candles"; return; }
    ctx = new (window.AudioContext || window.webkitAudioContext)();
    const an = ctx.createAnalyser(); an.fftSize = 512; ctx.createMediaStreamSource(stream).connect(an);
    const buf = new Uint8Array(an.fftSize); let hot = 0, last = 0;
    btnMic.textContent = "⏹ Stop the mic";
    const loop = t => {
      an.getByteTimeDomainData(buf); let sum = 0;
      for (const x of buf){ const d = (x - 128) / 128; sum += d * d; }
      hot = Math.sqrt(sum / buf.length) > 0.12 ? hot + 1 : 0;
      if (hot > 3 && t - last > 110){ last = t; const L = lit(); if (L.length){ L[Math.floor(Math.random() * L.length)].classList.remove("lit"); after(); } }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
  });
  after();
  return { noFoot: true, total: 0, check(){ return []; }, reveal(){}, reset(){} };
};

RENDER.wheel = (sec, s, body) => {
  const qs = sec.items, n = qs.length; const used = s.used || (s.used = []);
  const colors = sec.colors || ["#FF7FA8", "#FFC857", "#B8A1FF", "#7ED6C3"];
  const R = 146, C = 150; let svg = '<svg viewBox="0 0 300 300" class="wheel-svg" aria-hidden="true">';
  for (let i = 0; i < n; i++){
    const a0 = i / n * 2 * Math.PI - Math.PI / 2, a1 = (i + 1) / n * 2 * Math.PI - Math.PI / 2, am = (a0 + a1) / 2;
    const p = a => (C + R * Math.cos(a)).toFixed(1) + "," + (C + R * Math.sin(a)).toFixed(1);
    const tx = (C + R * .7 * Math.cos(am)).toFixed(1), ty = (C + R * .7 * Math.sin(am)).toFixed(1);
    svg += `<path d="M${C},${C} L${p(a0)} A${R},${R} 0 0 1 ${p(a1)} Z" fill="${colors[i % colors.length]}" stroke="#fff" stroke-width="2.5"/>`;
    svg += `<text x="${tx}" y="${ty}" text-anchor="middle" dominant-baseline="central" font-size="22" transform="rotate(${(am * 180 / Math.PI + 90).toFixed(1)} ${tx} ${ty})">${qs[i].icon || i + 1}</text>`;
  }
  svg += '<circle cx="150" cy="150" r="24" fill="#fff" stroke="#3B1F3A" stroke-width="3"/></svg>';
  const rot = h("div", { class: "wheel-rot", html: svg });
  const btn = h("button", { class: "btn btn-check", type: "button" }, "🎡 Spin the wheel");
  const card = h("div", { class: "wheel-q" }, h("p", { class: "wq-tip" }, sec.start || "Spin the wheel!"));
  const done = h("div", { class: "wheel-done" });
  body.append(h("div", { class: "wheel-wrap" }, h("div", { class: "wheel" }, h("div", { class: "wheel-pin" }), rot), h("div", { class: "wheel-side" }, btn, card)), done);
  let angle = s.angle || 0; rot.style.transform = `rotate(${angle}deg)`;
  function paintDone(){ done.innerHTML = ""; used.forEach(i => done.append(h("span", { class: "wd" }, (qs[i].icon || "") + " " + qs[i].short))); }
  function show(i){
    card.innerHTML = "";
    card.append(h("div", { class: "wq-n" }, "question " + (used.indexOf(i) + 1) + " of " + n), h("div", { class: "wq", html: qs[i].q }));
    if (qs[i].tip) card.append(h("div", { class: "wq-tip", html: qs[i].tip }));
  }
  btn.addEventListener("click", () => {
    let free = qs.map((q, i) => i).filter(i => !used.includes(i));
    if (!free.length){ used.length = 0; free = qs.map((q, i) => i); }
    const i = free[Math.floor(Math.random() * free.length)];
    const center = (i + .5) / n * 360;
    angle = Math.ceil(angle / 360) * 360 + 1440 + (360 - center);
    rot.style.transition = "transform 3.2s cubic-bezier(.17,.67,.2,1)"; rot.style.transform = `rotate(${angle}deg)`;
    btn.disabled = true;
    setTimeout(() => { used.push(i); s.angle = angle; persist(); show(i); paintDone(); btn.disabled = false; burst(card); }, 3300);
  });
  paintDone(); if (used.length) show(used[used.length - 1]);
  return { noFoot: true, total: 0, check(){ return []; }, reveal(){}, reset(){} };
};

RENDER.gifts = (sec, s, body) => {
  const v = s.v || (s.v = {}); const o = s.o || (s.o = {}); const items = [];
  const grid = h("div", { class: "gifts" });
  sec.items.forEach((it, i) => {
    const box = h("div", { class: "gift" + (o[i] ? " open" : ""), style: "--g:" + i });
    const lid = h("button", { class: "gift-closed", type: "button", "aria-label": "open present " + (i + 1) }, emo(sec.icon || "gift"), h("span", { class: "gift-n" }, pad(i)));
    const text = h("div", { class: "q-text" }, h("span", { class: "q-num" }, pad(i)));
    it.q.split("___").forEach((part, k) => { if (k) text.append(h("span", { class: "blank" })); text.append(h("span", { html: part })); });
    const opts = h("div", { class: "opts" });
    const btns = it.options.map((op, j) => { const b = h("button", { class: "opt", type: "button", html: op }); b.addEventListener("click", () => { v[i] = j; persist(); paint(); fire(body); }); opts.append(b); return b; });
    function paint(){ btns.forEach((b, j) => { b.classList.toggle("sel", v[i] === j); b.classList.remove("ok", "bad", "answer"); }); }
    lid.addEventListener("click", () => { o[i] = 1; persist(); box.classList.add("open"); burst(box); });
    box.append(lid, h("div", { class: "gift-in" }, text, opts)); grid.append(box); paint();
    items.push({ it, btns, i, paint, box });
  });
  body.append(grid);
  return {
    total: items.length,
    check(){ return items.map(({ it, btns, i, paint }) => { paint(); if (v[i] === undefined) return null; const ok = v[i] === it.answer; btns[v[i]].classList.add(ok ? "ok" : "bad"); return ok; }); },
    reveal(){ items.forEach(({ it, btns, i, box }) => { box.classList.add("open"); o[i] = 1; if (v[i] !== it.answer) btns[it.answer].classList.add("answer"); }); persist(); },
    reset(){ clear(v); clear(o); items.forEach(({ paint, box }) => { paint(); box.classList.remove("open"); }); }
  };
};

RENDER.balloons = (sec, s, body) => {
  const items = sec.items; const popped = s.p || (s.p = {});
  const colors = ["#FF4F8B", "#7B5CFF", "#FFC857", "#2EC4B6"];
  const grid = h("div", { class: "balloons" }); const els = [];
  const left = h("span", { class: "cake-left" });
  items.forEach((q, i) => {
    const b = h("button", { class: "bln" + (popped[i] ? " popped" : ""), type: "button", style: `--c:${colors[i % 4]};--d:${(i % 5) * .35}s`, "aria-label": "balloon " + (i + 1) },
      h("span", { class: "bln-body" }, h("b", {}, String(i + 1))), h("span", { class: "bln-q", html: q }));
    b.addEventListener("click", () => { if (popped[i]) return; popped[i] = 1; persist(); b.classList.add("popped"); burst(b); count(); });
    grid.append(b); els.push(b);
  });
  const again = h("button", { class: "btn", type: "button" }, "🎈 Blow them up again");
  again.addEventListener("click", () => { clear(popped); persist(); els.forEach(b => b.classList.remove("popped")); count(); });
  function count(){ const n = items.length - Object.keys(popped).length; left.textContent = n ? n + " balloons left" : "🎉 All popped!"; }
  body.append(h("div", { class: "cake-banner", html: sec.banner || "" }), grid, h("div", { class: "cake-ctr" }, again, left));
  count();
  return { noFoot: true, total: 0, check(){ return []; }, reveal(){}, reset(){} };
};

RENDER.letter = (sec, s, body) => {
  const env = h("button", { class: "env", type: "button", "aria-label": "open the envelope" },
    h("span", { class: "env-back" }), h("span", { class: "env-letter" }), h("span", { class: "env-front" }), h("span", { class: "env-flap" }),
    h("span", { class: "env-seal" }, emo(sec.seal || "loveletter")), h("span", { class: "env-to", html: sec.to || "" }));
  const letter = h("div", { class: "letter", html: sec.html }); letter.hidden = true;
  const hint = h("p", { class: "cake-hint" }, sec.hint || "Tap the envelope to open it.");
  env.addEventListener("click", () => {
    if (env.classList.contains("open")) return;
    env.classList.add("open"); hint.hidden = true;
    setTimeout(() => { letter.hidden = false; letter.classList.add("in"); [0, 300, 650].forEach(t => setTimeout(() => burst(env), t)); }, 700);
  });
  body.append(h("div", { class: "env-wrap" }, env), hint, letter);
  return { noFoot: true, total: 0, check(){ return []; }, reveal(){}, reset(){} };
};
