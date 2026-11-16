from playwright.sync_api import sync_playwright
import re
S = "/home/claude/work"
with sync_playwright() as p:
    b = p.chromium.launch()
    pg = b.new_page(viewport={"width": 390, "height": 860}); errs=[]
    pg.on("pageerror", lambda e: errs.append(str(e)))
    pg.goto("file:///home/claude/pp/life-in-the-extreme.html"); pg.wait_for_timeout(600)
    print("390 scrollW", pg.evaluate("document.documentElement.scrollWidth"))
    secs = pg.evaluate("LESSON.sections.filter(s=>s.type!=='part').map(s=>({type:s.type,title:s.title,items:s.items||null,pairs:s.pairs||null}))")
    cards = pg.locator(".card")
    for k, s in enumerate(secs):
        c = cards.nth(k); t = s["type"]
        if t == "gapfill":
            ans = [m.split("|")[0] for it in s["items"] for m in re.findall(r"\[\[(.+?)\]\]", it["text"] if isinstance(it, dict) else it)]
            for i, a in enumerate(ans): c.locator("input.gap").nth(i).fill(a.replace("'", "’"))
        elif t == "mcq":
            for i, it in enumerate(s["items"]): c.locator(".q").nth(i).locator(".opt").nth(it["answer"]).click()
        elif t == "tf2":
            for i, it in enumerate(s["items"]):
                q = c.locator(".q").nth(i); q.get_by_text("True" if it["answer"] else "False", exact=True).click()
                if not it["answer"]: q.locator(".fixbox .opt").nth(it["fixAnswer"]).click()
        elif t in ("rephrase", "correct"):
            for i, it in enumerate(s["items"]): c.locator("input.full").nth(i).fill(it["answers"][-1])
        elif t in ("match", "dragwords", "sort"):
            c.get_by_text("Check", exact=True).click(); c.get_by_text("Check", exact=True).click()
            c.locator("text=Show answers").click()
        elif t == "build":
            for i, it in enumerate(s["items"]):
                bi = c.locator(".bitem").nth(i)
                for r in ["qw","aux","who","freq","does","what","where","when"]:
                    if r in it:
                        bi.locator(".bank .chip", has_text=it[r]).filter(has_text=it[r]).first.click() if False else bi.locator(f'.bank .chip[data-value="{r}"]').click()
                        bi.locator(f".bslot.c-{r}").click()
        else: continue
        c.get_by_text("Check", exact=True).click()
        print(s["title"][:30], c.locator(".score").inner_text())
    print("total", pg.inner_text("#pScore"), "/", pg.inner_text("#pTotal"), errs)
    pg.evaluate("window.scrollTo(0, 1400)"); pg.wait_for_timeout(300)
    pg.screenshot(path=S+"/ms-bar.png", clip={"x":0,"y":0,"width":390,"height":120})
    pg.locator(".card", has_text="Words for extreme places").screenshot(path=S+"/ms-words.png"); pg.evaluate("window.scrollTo(0,0)"); pg.wait_for_timeout(200); pg.screenshot(path=S+"/ms-top.png")
    b.close()
