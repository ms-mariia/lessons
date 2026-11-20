S = "/home/claude/work"
e = open(S + "/engine.js").read()
e = e.replace('const ROLES = [\n  ["who", "Who?"]', 'const ROLES = [\n  ["qw", "Question word"], ["aux", "Helper"], ["who", "Who?"]', 1)
e = e.replace('row.append(h("span", { class: "bdot" }, "."));', 'row.append(h("span", { class: "bdot" }, it.end || "."));', 1)
assert '["aux", "Helper"]' in e and "it.end ||" in e
def rep(old, new):
    global e
    assert old in e, old[:60]
    e = e.replace(old, new, 1)
rep("/* ---------- build page ---------- */", open(S + "/dd_render.js").read() + open(S + "/sort_render.js").read() + "\n/* ---------- build page ---------- */")
rep('const LABEL = { rule: "theory",', 'const LABEL = { mcq: "multiple choice", match: "match", dragwords: "drag & drop", correct: "correct the mistakes", rephrase: "rewrite", write: "writing", drill: "speed drill", rule: "theory",')
rep("  const api = RENDER[sec.type] ? RENDER[sec.type](sec, s, body) : null;\n  if (!api) return;",
    "  const api = RENDER[sec.type] ? RENDER[sec.type](sec, s, body) : null;\n  if (!api || api.noFoot) return;")
rep('const btnShow = h("button", { class: "btn btn-soft", type: "button", hidden: true }',
    'const btnShow = h("button", { class: "btn btn-soft", type: "button", hidden: !api.alwaysShow }')
rep("btnShow.hidden = !((s.tries || 0) >= 2 && sc < api.total);", "btnShow.hidden = !api.alwaysShow && !((s.tries || 0) >= 2 && sc < api.total);")
rep("if (s.score == null){ score.textContent", "if (s.score == null || !api.total){ score.textContent")
rep("if (!silent && sc === api.total){", "if (!silent && api.total && sc === api.total){")
rep("btnShow.hidden = true; showScore(); updateAll();", "btnShow.hidden = !api.alwaysShow; showScore(); updateAll();")
# drill/write label use "Check" for write -> fine
bh = open(S + "/body_head.html").read()
bubbles = '<div class="bubbles" aria-hidden="true">' + "".join(
    f'<i style="left:{x}%;width:2px;height:{w*2+8}px;animation-duration:{d}s;animation-delay:-{dl}s;--dx:{dx}px"></i>'
    for x, w, d, dl, dx in [(6,10,14,3,30),(14,6,11,8,-20),(27,14,18,2,40),(41,8,13,10,-30),(55,5,9,4,20),(66,12,16,12,-40),(78,7,12,6,25),(88,16,20,1,-25),(94,6,10,9,15),(35,9,15,14,35)]) + '</div>'
bh = bh.replace('<div class="rgb" aria-hidden="true"><i></i><i></i><i></i></div>', bubbles)
bh = bh.replace('<span class="lbl">progress</span>', '<span class="lbl">score</span>')
bh = bh.replace('<small>Emoji: Microsoft Fluent Emoji (MIT licence)</small>', '<small>Emoji: Microsoft Fluent Emoji (MIT license). Photos: Wikimedia Commons — credits under each photo.</small>')
assert 'class="bubbles"' in bh
head = '''<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Can I Help You?</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Bowlby+One&family=Instrument+Sans:wght@400;500;600;700&family=Courier+Prime:wght@400;700&display=swap" rel="stylesheet">
<!-- LESSON TEMPLATE: edit only the LESSON object. Emoji names → assets/emoji/<name>.png -->
<style>
'''
t = head + open("/home/claude/pp/deep-dive.css.part").read() + open("/home/claude/pp/shop.extra.css").read() + "</style>\n</head>\n" + bh + open(S + "/ms_lesson.js").read() + "</script>\n" + e
open("/home/claude/pp/can-i-help-you.html", "w").write(t)
print("ok", len(t))
