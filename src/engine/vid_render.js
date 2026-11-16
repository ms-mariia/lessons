
/* ---------- open T/F (checked together, no auto score) ---------- */
RENDER.tfopen = (sec, s, body) => {
  const v = s.v || (s.v = {});
  const list = h("ol", { class: "tfo" });
  sec.items.forEach((q, i) => {
    const btns = ["T", "F"].map(L => {
      const b = h("button", { type: "button", class: "opt" + (v[i] === L ? " sel" : "") }, L);
      b.addEventListener("click", () => { v[i] = L; persist(); btns.forEach(x => x.classList.toggle("sel", x === b)); });
      return b;
    });
    list.append(h("li", {}, h("span", { html: q }), h("span", { class: "tfo-b" }, btns[0], btns[1])));
  });
  body.append(list);
  if (sec.note) body.append(h("p", { class: "wq-tip", html: sec.note }));
  return { noFoot: true, total: 0, check(){ return []; }, reveal(){}, reset(){} };
};
