# usage: python3 shot.py file.html "card title 1" "card title 2" ...
import sys
from playwright.sync_api import sync_playwright
from PIL import Image
f=sys.argv[1]; titles=sys.argv[2:]
S="/home/claude/work/"
with sync_playwright() as p:
    b=p.chromium.launch(); pg=b.new_page(viewport={"width":390,"height":860}); errs=[]
    pg.on("pageerror", lambda e: errs.append(str(e)))
    pg.goto("file:///home/claude/pp/"+f); pg.evaluate("localStorage.clear()"); pg.reload(); pg.wait_for_timeout(700)
    pg.screenshot(path=S+"s0.png"); files=[S+"s0.png"]
    for i,t in enumerate(titles):
        pg.locator(".card",has_text=t).first.screenshot(path=S+f"s{i+1}.png"); files.append(S+f"s{i+1}.png")
    print("errors:",errs); b.close()
ims=[Image.open(x) for x in files]; ims=[im.crop((0,0,im.width,min(im.height,1400))) for im in ims]
c=Image.new("RGB",(sum(i.width for i in ims)+10*len(ims),max(i.height for i in ims)),"white");x=0
for i in ims: c.paste(i,(x,0)); x+=i.width+10
c.save(S+"shot.png")
