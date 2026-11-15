/* SIGNAL/90 design system: runtime helpers. Load after signal90.css.
   Exposes globals (no bundler needed). See signal90/guide.json → js_api. */
const $=s=>document.querySelector(s);
const R=(a,b)=>a+Math.random()*(b-a);
const pick=a=>a[Math.floor(Math.random()*a.length)];
const pad=(n,l=2)=>String(Math.floor(n)).padStart(l,'0');
const FR=1000/24, AF=1000/12;   // film frame, anime frame

/* stretched Helvetica: wrap tag contents, then give back the width scaleX removed */
function stretchAll(root=document){
  root.querySelectorAll('.tag:not([data-w])').forEach(t=>{t.dataset.w=1;const s=document.createElement('span');s.className='hx';while(t.firstChild)s.appendChild(t.firstChild);t.appendChild(s)});
  root.querySelectorAll('.hx,.tall,.cond,.wide').forEach(el=>{
    el.style.marginLeft=el.style.marginRight='';
    const sx=parseFloat(getComputedStyle(el).getPropertyValue('--sx'))||1;const d=(sx-1)*el.offsetWidth;
    if(el.dataset.o==='c'){el.style.marginLeft=el.style.marginRight=d/2+'px'}else if(el.dataset.o==='r'){el.style.marginLeft=d+'px'}else el.style.marginRight=d+'px';
  });
}

/* 7-segment SVG */
const SEG={0:'abcdef',1:'bc',2:'abged',3:'abgcd',4:'fgbc',5:'afgcd',6:'afgedc',7:'abc',8:'abcdefg',9:'abcdfg','-':'g',' ':''};
const hseg=(x1,x2,cy,t=5)=>`${x1},${cy} ${x1+t},${cy-t} ${x2-t},${cy-t} ${x2},${cy} ${x2-t},${cy+t} ${x1+t},${cy+t}`;
const vseg=(cx,y1,y2,t=5)=>`${cx},${y1} ${cx+t},${y1+t} ${cx+t},${y2-t} ${cx},${y2} ${cx-t},${y2-t} ${cx-t},${y1+t}`;
const SEGP={a:hseg(8,42,5),g:hseg(8,42,45),d:hseg(8,42,85),f:vseg(5,8,42),b:vseg(45,8,42),e:vseg(5,48,82),c:vseg(45,48,82)};
function seg7(str,{ghost=true}={}){let x=0,out='';
  for(const ch of String(str)){
    if(ch===':'||ch==='.'){out+=ch===':'?`<rect x="${x+2}" y="24" width="9" height="9"/><rect x="${x+2}" y="60" width="9" height="9"/>`:`<rect x="${x+2}" y="78" width="9" height="9"/>`;x+=17;continue}
    const on=SEG[ch]??'';for(const k in SEGP){if(on.includes(k))out+=`<polygon points="${SEGP[k]}" transform="translate(${x},0)"/>`;else if(ghost)out+=`<polygon class="off" points="${SEGP[k]}" transform="translate(${x},0)"/>`}
    x+=58}
  return `<svg class="seg7" viewBox="-6 -2 ${x+6} 94" fill="currentColor">${out}</svg>`}

/* ornament helpers (SVG) */
function chamfer(x,y,w,h,c,stroke,sw=2,fill='none'){return `<polygon points="${x+c},${y} ${x+w-c},${y} ${x+w},${y+c} ${x+w},${y+h-c} ${x+w-c},${y+h} ${x+c},${y+h} ${x},${y+h-c} ${x},${y+c}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}"/>`}
// stretched Helvetica inside SVG: scale the glyphs, not the position
function svgT(x,y,str,size,fill,anchor='start',sx=.8){return `<text transform="translate(${x},${y}) scale(${sx},1)" text-anchor="${anchor}" font-family="Helvetica Neue,Helvetica,Arimo,Arial,sans-serif" font-weight="700" font-size="${size}" fill="${fill}">${str}</text>`}
function diamond(cx,cy,s,label,col,fill='none'){return `<g class="dia" transform="translate(${cx},${cy})"><rect x="${-s/2}" y="${-s/2}" width="${s}" height="${s}" transform="rotate(45)" fill="${fill}" stroke="${col}" stroke-width="3"/>${svgT(0,s*.22,label,s*.62,col,'middle',.9)}</g>`}
function wire(d,col,sw=3){return `<path class="wire" d="${d}" stroke="${col}" stroke-width="${sw}"/>`}
function dot(x,y,col,r=5){return `<circle cx="${x}" cy="${y}" r="${r}" fill="${col}"/>`}
// draw every .wire under root in `steps` anime frames (no easing)
function drawWires(root,every,steps=6){const ws=[...root.querySelectorAll('.wire')].map(p=>{const L=p.getTotalLength();p.style.strokeDasharray=L;p.style.strokeDashoffset=L;return [p,L]});let k=0;
  every(AF,()=>{if(k>steps)return;k++;ws.forEach(([p,L])=>p.style.strokeDashoffset=Math.max(0,L*(1-k/steps)))})}
const HEX='0123456789ABCDEF';const hx=n=>Array.from({length:n},()=>HEX[Math.random()*16|0]).join('');
const WORDS=['SEGV','TRAP','PID','ACK','NAK','SYN','ROUTE','NODE','SHELL','HOOK','PROC','KERN','IRQ','DMA','MAP','LINK','SEC','AUTH','DENY','TRACE'];
function dumpLine(kind){if(kind===0)return `${hx(8)}  ${Array.from({length:8},()=>hx(2)).join(' ')}  |${Array.from({length:8},()=>pick('.:#%@&*+=-ABCDEFXYZ0123456789')).join('')}|`;
  if(kind===1)return `[${pad(R(0,99999)|0,5)}.${pad(R(0,999)|0,3)}] ${pick(WORDS)}: ${pick(WORDS).toLowerCase()}_${hx(4).toLowerCase()} -> 0x${hx(8)} ${pick(['OK','OK','OK','FAIL','DENIED','RETRY'])}`;
  return Array.from({length:6},()=>Array.from({length:8},()=>Math.random()>.5?1:0).join('')).join(' ')}

/* scene runtime */
function ctx(){const c={timers:[],raf:0,alive:true};
  c.every=(ms,fn)=>{const id=setInterval(fn,ms);c.timers.push(()=>clearInterval(id))};
  c.after=(ms,fn)=>{const id=setTimeout(fn,ms);c.timers.push(()=>clearTimeout(id))};
  c.loop=(fn,fps=12)=>{let last=0;const step=t=>{if(!c.alive)return;if(t-last>=1000/fps-1){last=t;fn(t)}c.raf=requestAnimationFrame(step)};c.raf=requestAnimationFrame(step)};
  c.kill=()=>{c.alive=false;c.timers.forEach(f=>f());cancelAnimationFrame(c.raf)};return c}
function fitCanvas(cv,max=1280){const r=cv.getBoundingClientRect();const w=Math.min(max,Math.round(r.width*Math.min(devicePixelRatio,1.5)));cv.width=w;cv.height=Math.round(w*r.height/r.width);return cv.getContext('2d')}
function timecode(ms,base=3600000){const t=base+ms;return `${pad(t/3600000)}:${pad(t/60000%60)}:${pad(t/1000%60)}:${pad(Math.floor(t/FR)%24)}`}
let S=null; // reserved for scene runners

/* ---------- SVG kit (1600×900 viewBox = 16:9 screen) ---------- */
const AMB='var(--amber)',RED='var(--red)',MNT='var(--mint)',PHO='var(--phosphor)',SKY='var(--sky)',DIMA='#4a2208',DIMG='#0f2a18',DIMR='#3a0610';

/* ---------- SVG kit (1600×900 viewBox = 16:9 stage) ---------- */
function sv(inner,bg='#000',extra='',glow=true){return `<div class="fill" style="background:${bg}">${extra}<svg class="fill" viewBox="0 0 1600 900" style="width:100%;height:100%"><g ${glow?'filter="url(#sglow)"':''}>${inner}</g></svg></div>`}
function overlay(inner){return `<svg class="fill" viewBox="0 0 1600 900" style="width:100%;height:100%;pointer-events:none">${inner}</svg>`}
function box(x,y,w,h,col,sw=3,fill='none',id=''){return `<rect ${id?`id="${id}"`:''} x="${x}" y="${y}" width="${w}" height="${h}" fill="${fill}" stroke="${col}" stroke-width="${sw}"/>`}
function svgTi(id,...a){return svgT(...a).replace('<text ',`<text id="${id}" `)}
function monoT(x,y,str,size,col,anchor='start',id=''){return `<text ${id?`id="${id}"`:''} x="${x}" y="${y}" font-family="Share Tech Mono,monospace" font-size="${size}" fill="${col}" text-anchor="${anchor}" xml:space="preserve">${str}</text>`}
function mincT(x,y,str,size,col,anchor='start'){return `<text x="${x}" y="${y}" font-family="Shippori Mincho B1,Hiragino Mincho ProN,serif" font-weight="800" font-size="${size}" fill="${col}" text-anchor="${anchor}">${str}</text>`}
// 7-segment drawn straight into an SVG: top-left x,y, height h
function seg(x,y,h,str,col,ghost=true){let xx=0,out='';
  for(const ch of String(str)){
    if(ch===':'||ch==='.'){out+=ch===':'?`<rect x="${xx+2}" y="24" width="9" height="9"/><rect x="${xx+2}" y="60" width="9" height="9"/>`:`<rect x="${xx+2}" y="78" width="9" height="9"/>`;xx+=17;continue}
    const on=SEG[ch]??'';for(const k in SEGP){if(on.includes(k))out+=`<polygon points="${SEGP[k]}" transform="translate(${xx},0)"/>`;else if(ghost)out+=`<polygon opacity=".08" points="${SEGP[k]}" transform="translate(${xx},0)"/>`}
    xx+=58}
  return `<g transform="translate(${x},${y}) scale(${(h/94).toFixed(4)})" fill="${col}">${out}</g>`}
function tagS(x,y,str,size,col,o={}){const w=str.length*size*.6+size*.8,h=size*1.32;const x0=o.anchor==='middle'?x-w/2:o.anchor==='end'?x-w:x;
  return `<g class="${o.cls||''}" ${o.id?`id="${o.id}"`:''}>${box(x0,y,w,h,col,o.sw||3,o.solid?col:(o.bg??'#000'))}${svgT(x0+w/2,y+h*.76,str,size,o.solid?'#000':col,'middle',.84)}</g>`}
// cell chain: items [key, value, width, id?]
function chainS(x,y,items,col,h=74){let s='',xx=x;
  for(const [k,v,w,id] of items){s+=box(xx,y,w,h,col,3,'#000');if(k)s+=svgT(xx+10,y+21,k,16,col,'start',.84);s+=(id?svgTi(id,xx+10,y+h-12,v,k?36:44,col,'start',.74):svgT(xx+10,y+h-12,v,k?36:44,col,'start',.74));xx+=w}
  return s}
function brkS(x,y,w,h,col,l=30,sw=3){return `<path d="M${x} ${y+l}V${y}H${x+l}M${x+w-l} ${y}H${x+w}V${y+l}M${x+w} ${y+h-l}V${y+h}H${x+w-l}M${x+l} ${y+h}H${x}V${y+h-l}" fill="none" stroke="${col}" stroke-width="${sw}"/>`}
function gridS(x,y,w,h,sx,sy,col,op=.22){let s=`<g stroke="${col}" stroke-width="1" opacity="${op}">`;for(let g=x;g<=x+w+.1;g+=sx)s+=`<line x1="${g}" y1="${y}" x2="${g}" y2="${y+h}"/>`;for(let g=y;g<=y+h+.1;g+=sy)s+=`<line x1="${x}" y1="${g}" x2="${x+w}" y2="${g}"/>`;return s+'</g>'}
function rulerS(x,y,w,col,n=10,lab=true){let s=`<line x1="${x}" y1="${y}" x2="${x+w}" y2="${y}" stroke="${col}" stroke-width="2"/>`;for(let i=0;i<=n*5;i++){const gx=x+w*i/(n*5);s+=`<line x1="${gx}" y1="${y}" x2="${gx}" y2="${y+(i%5?8:18)}" stroke="${col}" stroke-width="2"/>`;if(lab&&i%5===0){const v=i/5-n/2;s+=monoT(gx,y+40,(v>0?'+':'')+v,18,col,'middle')}}return s}
function tab(x,y,str,col,size=26){const w=str.length*size*.6+size*.8;return `<rect x="${x}" y="${y-size*.7}" width="${w}" height="${size*1.4}" fill="#000"/>`+svgT(x+size*.4,y+size*.36,str,size,col,'start',.84)}
function arcP(cx,cy,r,a0,a1){const P=a=>[(cx+r*Math.cos(a)).toFixed(1),(cy+r*Math.sin(a)).toFixed(1)];const [x0,y0]=P(a0),[x1,y1]=P(a1);return `M${x0} ${y0}A${r} ${r} 0 0 1 ${x1} ${y1}`}
const wallHTML=(word,n,size,col,extra='')=>`<div class="abs wall" style="inset:0;color:${col};gap:0 1.2cqw;${extra}">${Array(n).fill(`<span class="tall" style="font-size:${size};line-height:1">${word}</span>`).join('')}</div>`;
const dumpText=(n,kind)=>Array.from({length:n},()=>dumpLine(kind??pick([0,1]))).join('\n');

