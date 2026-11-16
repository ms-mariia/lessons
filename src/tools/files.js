// usage: node files.js <prefix> <out.html> img1,img2,...
const fs=require("fs");const [pre,out,imgs]=process.argv.slice(2);
eval(fs.readFileSync(pre+"_lesson.js","utf8").replace("const LESSON","global.LESSON").replace("const IMG","global.IMG").replace("const H =","global.H ="));
const n=new Set([...LESSON.stickers,...LESSON.confetti,"star","check"]);LESSON.sections.forEach(s=>{if(s.icon)n.add(s.icon);if(s.sticker)n.add(s.sticker);if(s.type==="gifts")n.add(s.icon||"gift")});
const o=[{as:"index.html",path:"/home/claude/pp/"+out}];[...n].forEach(k=>{const p="/home/claude/pp/assets/emoji/"+k+".png";if(!fs.existsSync(p))console.error("MISSING",k);o.push({as:"assets/emoji/"+k+".png",path:p})});
(imgs||"").split(",").filter(Boolean).forEach(k=>o.push({as:"assets/img/"+k+".jpg",path:"/home/claude/pp/assets/img/"+k+".jpg"}));
console.log(JSON.stringify(o));
