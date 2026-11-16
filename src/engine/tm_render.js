
/* ---------- block timer (visible countdown, 5/7/8 min) ---------- */
(function blockTimer(){
  let left = 0, total = 0, iv = 0;
  const face = h("button", { type: "button", class: "bt-face", title: "Block timer: 5, 7 or 8 minutes" }, "⏱ Timer");
  const presets = h("div", { class: "bt-presets" });
  const box = h("div", { class: "bt" }, face, presets);
  [5, 7, 8].forEach(m => { const b = h("button", { type: "button" }, m + " min"); b.addEventListener("click", () => start(m)); presets.append(b); });
  face.addEventListener("click", () => { box.classList.toggle("open"); paint(); });
  const stop = h("button", { type: "button", class: "bt-stop" }, "■ stop"); stop.addEventListener("click", reset); presets.append(stop);
  function fmt(){ const m = Math.floor(left / 60), s = left % 60; return m + ":" + String(s).padStart(2, "0"); }
  function paint(){ face.textContent = left ? "⏱ " + fmt() : (box.classList.contains("open") ? "⏱ Timer ▸" : "⏱ Timer"); box.style.setProperty("--p", total ? (1 - left / total) : 0); box.classList.toggle("run", !!left); box.classList.toggle("low", left > 0 && left <= 60); }
  function start(m){ box.classList.remove("open"); clearInterval(iv); total = left = m * 60; paint(); iv = setInterval(() => { left--; if (left <= 0){ left = 0; clearInterval(iv); box.classList.add("ring"); setTimeout(() => box.classList.remove("ring"), 2600); burst(box); } paint(); }, 1000); }
  function reset(){ clearInterval(iv); left = total = 0; paint(); }
  document.body.append(box); paint();
})();
