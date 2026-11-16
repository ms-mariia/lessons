# Lesson sources

Every page in the repo root (`podium.html`, `make-my-day.html` …) is **self-contained**: engine, styles and the lesson
content are inside the one file. The quickest way to change a lesson is to open its HTML and edit the `LESSON = { … }`
object near the bottom (plain JavaScript), then commit. GitHub Pages republishes in ~1 minute:
`https://ms-mariia.github.io/lessons/<name>.html`.

This folder keeps the parts the pages are built from, so a new lesson can be made the same way.

```
src/engine/   engine.js + renderers (dd_render: drag words, sort_render: boxes, bd_render: cake / wheel / gifts / balloons,
              tm_render: block timer, vid_render: video T/F), body_head.html (page frame), base.css (shared styles)
src/themes/   one CSS file per lesson design (colors, fonts, background)
src/lessons/  one LESSON object per lesson (<prefix>_lesson.js)
src/tools/    build.py (build a page), le_test.py (Playwright auto-solve test), shot.py (screenshots),
              files.js (list emoji/images a page uses), savephotos.py (save canvas photos), legacy/ (older build scripts)
```

## Build a page

```
python3 src/tools/build.py src/lessons/cs_lesson.js src/themes/cs.extra.css now-or-always.html "Now or always?" \
  "family=Gabarito:wght@500;700;800&family=Atkinson+Hyperlegible:wght@400;700&family=Sometype+Mono:wght@400;600" \
  --aux "am / is / are" --verb "Verb + -ing"
```

`--aux` / `--verb` are the slot labels of the question builder (`type: "build"`): e.g. `do / does` + `Does what?`,
`have / has` + `Verb (V3)`. Pages from Life in the Extreme onward rebuild byte-for-byte with build.py; older pages were
made with the scripts in `tools/legacy/` (absolute paths of the original workspace) — edit those pages in the HTML.

Emoji names in a lesson (`icon`, `sticker`, `stickers`, `confetti`) = files `assets/emoji/<name>.png`
(Microsoft Fluent Emoji 3D, 160 px). Photos = `assets/img/<file>.jpg` (Wikimedia Commons, 760×570, credit under the photo).

## Section types (LESSON.sections)

part · rule (theory card, `html`) · gapfill (`[[answer|alt]]`, optional `text` intro) · mcq (`options`, `answer` index)
· match (`pairs`) · dragwords · correct (`wrong`, `answers`) · rephrase · tf2 (true/false + fix, `text` reading) · sort
(`categories`) · build (question cards: `qw aux who freq does what where when`, `wrong`, `end`) · drill (`cue`,
`prompt`, `answers`, each right twice) · write (`checks`: pattern+min / words / sentences, `sample`) · review
(auto list of the day’s mistakes) · wheel · gifts · balloons · cake · tfopen (video statements, no auto-check).
