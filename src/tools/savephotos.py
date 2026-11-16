import json,base64,sys
t=json.load(open(sys.argv[1]))
d,_=json.JSONDecoder().raw_decode(t[0]["text"])
if isinstance(d,str): d=json.loads(d)
from PIL import Image
for k,v in d.items(): open(f"/home/claude/pp/assets/img/{k}.jpg","wb").write(base64.b64decode(v.split(",")[1]))
ims=[Image.open(f'/home/claude/pp/assets/img/{k}.jpg') for k in d]
c=Image.new('RGB',(760*len(ims),570));[c.paste(im,(i*760,0)) for i,im in enumerate(ims)];c.resize((380*len(ims),285)).save('/home/claude/work/sheet.jpg')
print(list(d))
