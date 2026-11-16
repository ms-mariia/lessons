RENDER.sort = (sec, s, body) => {
  const v = s.v || (s.v = {}); const B = Board(body, v);
  const wrap = h("div", { class: "buckets" }); const all = [];
  sec.categories.forEach((cat, ci) => {
    const zone = h("div", { class: "bucket-zone" }); B.register(zone, zone, "b" + ci, false);
    wrap.append(h("div", { class: "bucket" }, h("h3", { html: cat.name }), zone));
    cat.words.forEach((w, wi) => all.push({ id: "w" + ci + "-" + wi, w, ci }));
  });
  shuffle(all, LESSON.id + sec.title).forEach(o => B.chip(o.id, o.w, String(o.ci)));
  body.append(B.bank, wrap); B.restore();
  const order = all.map(o => o.id);
  return {
    total: all.length,
    check(){ return order.map(id => { const c = B.chips[id]; const z = B.zoneOf(c);
      c.classList.remove("ok", "bad"); if (z === "bank") return null;
      const ok = z === "b" + c.dataset.value; c.classList.add(ok ? "ok" : "bad"); return ok; }); },
    reveal(){ order.forEach(id => { const c = B.chips[id]; if (B.zoneOf(c) !== "b" + c.dataset.value) B.place(c, "b" + c.dataset.value); }); },
    reset(){ B.resetAll(); persist(); }
  };
};
LABEL.sort = "sort";
