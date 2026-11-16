# usage: python3 mk.py <prefix> <css> <out.html> "<Title>" "<fontsquery>"
import sys,re
pre,css,out,title,fonts=sys.argv[1:6]
s=open("le_assemble.py").read()
s=re.sub(r"<title>.*?</title>","<title>"+title+"</title>",s)
s=s.replace("family=Unbounded:wght@500;600;700&family=Albert+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;600",fonts)
s=s.replace("/home/claude/pp/le.extra.css","/home/claude/pp/"+css).replace('S + "/le_lesson.js"','S + "/'+pre+'_lesson.js"').replace("/home/claude/pp/life-in-the-extreme.html","/home/claude/pp/"+out)
open(pre+"_assemble.py","w").write(s)
t=open("le_test.py").read().replace("life-in-the-extreme.html",out)
open(pre+"_test.py","w").write(t)
