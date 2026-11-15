/* SIGNAL/90 demo reel scenes. Uses globals from signal90/signal90.js. */
const SCENES=[
/* =================== SOURCE STUDIES =================== */
{name:'BOOT / CLASSIFIED',build(el,c){
  el.innerHTML=`<div class="fill boot"><pre id="b"></pre></div><div class="abs tc" style="left:3cqw;top:2.4cqw" id="tc"></div>
   <div class="fill center" id="cl" style="display:none;background:#000">
     <div class="abs dump" id="dw" style="inset:0;--dump-size:.8cqw;color:var(--red);opacity:.18;padding:1cqw"></div>
     <div class="brk" style="color:var(--red);--l:2.4cqw;--w:.3cqw;padding:3cqw 5cqw;display:flex;flex-direction:column;align-items:center;position:relative;background:#000">
       <div class="mincho glow strobe-in" style="color:var(--red);font-size:8cqw;border:.5cqw solid var(--red);padding:0 2cqw;line-height:1.15;letter-spacing:.3em;text-indent:.3em">機密</div>
       <div class="chain glow" style="color:var(--red);font-size:2.6cqw;margin-top:1.6cqw"><div class="cell"><small class="hx">File</small><span class="cond">0417</span></div><div class="cell"><small class="hx">Clearance</small><span class="cond">Level 5</span></div><div class="cell"><small class="hx">Copy</small><span class="cond">03/12</span></div></div>
       <div class="tag strobe-in" style="color:var(--red);font-size:2cqw;margin-top:1.4cqw">Classified</div></div></div>`;
  const lines=['SIGNAL/90 BIOS  (C) 1997 ORBITAL HYDROLOGY INST.','CO-CPU ........... CHECK   OK','I/O CONTROLLER .... CHECK   OK','MEMORY 256MEG .... CHECK   OK','','SYSTEM CONFIGURATION ---------------','ADDR  PSP  BLKS  SIZE   OWNER','0000  0008   1    7344  KERNEL','0D2F  0D2F   2   12640  TRIAD.SYS','1A40  1A40   3   45120  VOTE.DRV','2C10  2C10   1    8192  TELEMETRY','','LOADING ORACLE//ARGUS//VESTA//JANUS ...'];
  let i=0;const pre=el.querySelector('#b');
  c.every(AF,()=>{for(let k=0;k<3&&i<lines.length;k++)pre.textContent+=lines[i++]+'\n'});
  const t0=performance.now();c.loop(t=>{el.querySelector('#tc').textContent=timecode(t-t0)},24);
  el.querySelector('#dw').textContent=dumpText(60);
  c.after(AF*6,()=>{const cl=el.querySelector('#cl');cl.style.display='flex';stretchAll(cl)});
}},
{name:'EMERGENCY MARQUEE',build(el){
  const w='<span class="tall glow" style="padding-right:4cqw">EMERGENCY</span>';
  const band=(down)=>`<div style="position:relative"><div class="chev ${down?'down':''} fill" style="font-size:2.6cqw"></div>
      <div class="fill center"><span class="mincho strobe" style="color:var(--red);background:#000;font-size:5cqw;letter-spacing:.5em;padding:0 .5em 0 1em;border:.3cqw solid var(--red);line-height:1.25">非常事態</span></div></div>`;
  el.innerHTML=`<div class="fill" style="background:#000;display:grid;grid-template-rows:27% 46% 27%">${band(false)}
    <div style="display:flex;align-items:center;overflow:hidden;border-top:.4cqw solid var(--red);border-bottom:.4cqw solid var(--red)">
      <div class="marq" style="color:#ff5a1f;font-size:30cqw;animation:marq 2.6s linear infinite">${w}${w}${w}${w}</div></div>${band(true)}</div>`;
}},
{name:'DANGER / ALERT',build(el){
  const wall=wallHTML('Danger',70,'3.4cqw','rgba(0,0,0,.17)','padding:.4cqw 0 0 .6cqw');
  el.innerHTML=`<div class="fill" style="background:var(--red);display:grid;grid-template-rows:1fr auto 1fr">
   <div style="position:relative;overflow:hidden">${wall}<span class="tag strobe" style="position:absolute;left:3cqw;top:2.5cqw;color:#fff;font-size:2.4cqw;background:var(--red)">ALERT</span>
     <div class="center fill"><span class="mincho" style="color:#000;font-size:5cqw;border:.35cqw solid #000;padding:0 1cqw;background:var(--red)">危険</span></div></div>
   <div class="center" style="background:#000;padding:1.2cqw 0;border-top:.4cqw solid #000"><div class="wide strobe" data-o="c" style="color:var(--red);font-size:16cqw;text-shadow:0 0 2cqw rgba(255,26,46,.6)">DANGER</div></div>
   <div style="position:relative;overflow:hidden">${wall}<span class="tag strobe" style="position:absolute;right:3cqw;bottom:2.5cqw;color:#fff;font-size:2.4cqw;background:var(--red)">ALERT</span>
     <div class="center fill"><span class="mincho" style="color:#000;font-size:5cqw;border:.35cqw solid #000;padding:0 1cqw;background:var(--red)">危険</span></div></div></div>`;
}},
{name:'FIELD DETECTED',build(el,c){
  const bin=()=>Array.from({length:44},()=>dumpLine(2).slice(0,17)).join('\n');
  el.innerHTML=`<div class="fill" style="background:#000;color:var(--amber)">
   <div class="abs dump glow" id="bL" style="left:1.5cqw;top:0;bottom:0;width:11cqw;--dump-size:1.05cqw;opacity:.7"></div>
   <div class="abs dump glow" id="bR" style="right:1.5cqw;top:0;bottom:0;width:11cqw;--dump-size:1.05cqw;opacity:.7;text-align:right"></div>
   <div class="abs" style="left:15cqw;top:5cqw"><div class="chain glow" style="font-size:4.4cqw">
      <div class="cell"><small class="hx">Object</small><span class="cond">15th</span></div>
      <div class="cell"><small class="hx">Operator : none</small><span class="cond">Unit-02</span></div>
      <div class="cell"><small class="hx">Operator : K.Ross</small><span class="cond">Unit-01</span></div></div></div>
   <div class="abs" style="left:15cqw;top:17cqw"><span class="cond glow" style="font-size:3.4cqw">Lower shaft · sector 9</span><br><span class="tall glow" style="font-size:14cqw">Barrier field</span></div>
   <div class="abs" style="left:15cqw;top:36cqw;display:flex;align-items:flex-end;gap:2cqw"><span class="cond glow" style="font-size:4cqw">Generation</span><span class="tag dbl glow strobe" style="color:var(--red);font-size:7cqw">Detected</span></div>
   <div class="abs mono" style="left:15cqw;bottom:2.5cqw;font-size:1.3cqw">ENERGY LEVEL: HIGHEST EVER RECORDED · VERIFIED TRIAD-1·2·3</div></div>`;
  const bL=el.querySelector('#bL'),bR=el.querySelector('#bR');const upd=()=>{bL.textContent=bin();bR.textContent=bin()};upd();c.every(AF,upd);
}},
{name:'HEX CORE / ROD BUNDLE',build(el,c){
  const Rr=8,s=25,cx=600,cy=480;let poly='',cells=[];
  for(let q=-Rr;q<=Rr;q++)for(let r=Math.max(-Rr,-q-Rr);r<=Math.min(Rr,-q+Rr);r++){
    const x=cx+s*1.732*(q+r/2),y=cy+s*1.5*r;let p='';
    for(let k=0;k<6;k++){const a=Math.PI/180*(60*k-30);p+=`${(x+s*.88*Math.cos(a)).toFixed(1)},${(y+s*.88*Math.sin(a)).toFixed(1)} `}
    cells.push({y,i:cells.length});poly+=`<polygon points="${p}" fill="var(--mint)"/>`}
  let g=`<g stroke="${AMB}" fill="none" opacity=".45">`;for(let k=1;k<8;k++)g+=`<circle cx="${cx}" cy="${cy}" r="${k*60}" stroke-width="1"/>`;for(let k=0;k<24;k++){const a=k*Math.PI/12;g+=`<line x1="${cx}" y1="${cy}" x2="${cx+Math.cos(a)*440}" y2="${cy+Math.sin(a)*440}" stroke-width="1"/>`}g+='</g>';
  const labels=['FUEL ROD BUNDLE','SPACER','PELLET','CLADDING','PRESSURE','CONTROL ROD 1','CONTROL ROD 2','CONTROL ROD 3','CONTROL ROD 4','CONTROL ROD 5','END CAP','END PLATE'];
  let L='';labels.forEach((l,i)=>{const y=150+i*56;L+=box(1190,y,350,40,AMB,2.5,'#000')+svgT(1204,y+29,l,24,AMB,'start',.84)+wire(`M1190 ${y+20} H1130`,AMB,2.5)+dot(1130,y+20,AMB,5)});
  L+=wire(`M1130 170 V${150+11*56+20}`,AMB,3)+wire(`M1130 ${cy} H970`,AMB,3)+dot(970,cy,AMB,7);
  const head=chainS(40,36,[['CORE','07',130],['ASSEMBLY','ROD BUNDLE',300],['OUTPUT','1.2 GW',190]],AMB,72)+tab(1190,110,'ASSEMBLY INDEX',AMB,24);
  el.innerHTML=sv(g+`<g id="hx">${poly}</g>`+L+head+`<g id="ct" style="visibility:hidden">${tagS(40,820,'CONTAMINATION SPREADING',30,RED,{cls:'strobe'})}</g>`,'radial-gradient(70% 90% at 38% 55%,#4a1208,#160404 60%,#050404)');
  drawWires(el,c.every,4);
  const polys=[...el.querySelectorAll('#hx polygon')];const order=cells.map(o=>({i:o.i,k:-o.y+R(0,180)})).sort((a,b)=>a.k-b.k);let n=0;
  c.after(AF*2,()=>{el.querySelector('#ct').style.visibility='';c.every(AF,()=>{for(let j=0;j<16&&n<order.length;j++)polys[order[n++].i].setAttribute('fill','var(--red)')})});
}},
{name:'DEFENSE SCHEMATIC',build(el,c){
  const A=AMB,M=MNT,Rd=RED;
  let s=chamfer(20,20,1560,860,40,A,4)+chamfer(38,38,1524,824,28,A,1.5);
  s+=wire('M60 118 H600 V170',A)+wire('M1540 118 H1000 V170',A);
  s+=`<rect x="70" y="96" width="240" height="44" fill="#000" stroke="${A}" stroke-width="3"/>`+svgT(84,130,'SUPPORT LINE',30,A);
  s+=`<rect x="1290" y="96" width="240" height="44" fill="#000" stroke="${A}" stroke-width="3"/>`+svgT(1516,130,'SUPPORT LINE',30,A,'end');
  const cluster=(cx,name,cls='')=>`<g class="${cls}">${diamond(cx,290,92,'1',A)+diamond(cx-82,395,92,'3',A)+diamond(cx+82,395,92,'2',A)}</g>
    <rect x="${cx-150}" y="190" width="300" height="290" fill="none" stroke="${A}" stroke-width="1.5" stroke-dasharray="8 8"/>${svgT(cx,530,name,34,A,'middle')}
    ${chamfer(cx-140,610,280,110,16,A,3)}${svgT(cx,660,'RELAY 0'+(cls?'7':'4'),34,A,'middle')}${svgT(cx,700,cls?'OSPREY':'KESTREL',24,A,'middle')}${wire(`M${cx} 480 V610`,A)}`;
  s+=cluster(330,'WEST FLANK')+cluster(1270,'EAST FLANK','flipper');
  s+=chamfer(600,170,400,650,26,A,3)+svgT(800,222,'1st DEFENSE LINE',30,A,'middle');
  [['1',640],['2',755],['3',870]].forEach(([n,x])=>{s+=box(x,245,90,90,A)+svgT(x+45,318,n,74,A,'middle',.9)});
  s+=`<rect x="620" y="370" width="360" height="54" fill="${A}"/>`+svgT(800,410,'MAIN BARRIER',36,'#000','middle');
  s+=chamfer(645,460,310,320,18,M,2.5)+svgT(800,525,'HUB-3',58,M,'middle',.75);
  [['2',675],['1',765],['3',855]].forEach(([n,x],i)=>{s+=`<g class="${i==1?'strobe':''}">${box(x,590,70,70,i==1?Rd:M,3,i==1?Rd:'none')}${svgT(x+35,645,n,56,i==1?'#000':M,'middle',.9)}</g>`});
  s+=svgT(800,730,'CORE 01',30,M,'middle');
  s+=wire('M480 395 H550 V290 H640',A)+wire('M1120 395 H1050 V290 H960',A)+wire('M470 665 H560 V625 H675',M)+wire('M1130 665 H1040 V625 H925',M);
  s+=dot(480,395,A)+dot(640,290,A)+dot(1120,395,A)+dot(960,290,A)+dot(470,665,M)+dot(675,625,M)+dot(1130,665,M)+dot(925,625,M);
  s+=`<g class="strobe">${chamfer(1150,770,280,56,12,Rd,3,'#000')}${svgT(1290,808,'COLLAPSING',32,Rd,'middle')}</g>`+svgT(70,840,'SCHEMATIC 04-B · OPERATING',22,A);
  el.innerHTML=sv(s);drawWires(el,c.every);
  const dias=[...el.querySelectorAll('.flipper .dia rect')];
  c.every(AF*3,()=>{const d=pick(dias);const hot=d.getAttribute('fill')==='none';d.setAttribute('fill',hot?RED:'none');d.setAttribute('stroke',hot?RED:AMB)});
}},
{name:'COUNTDOWN / RESERVE CELL',build(el,c){
  el.innerHTML=`<div class="fill" style="background:#050404">
   ${overlay(chamfer(190,130,1050,580,30,AMB,3)+chamfer(206,146,1018,548,22,AMB,1)+tab(240,130,'RESERVE CELL 2',AMB,24)+brkS(1270,230,290,480,AMB,30,3)+monoT(1290,280,'CELL MAP',20,AMB)+gridS(1290,300,250,380,50,38,AMB,.35))}
   <div class="abs wedge" style="left:0;top:0;width:9%;height:100%;opacity:.85"></div>
   <div class="abs" style="left:13%;top:5%;color:var(--amber);display:flex;align-items:baseline;gap:1.5cqw"><span class="mincho glow" style="font-size:3.4cqw">予備電源</span><span class="cond" style="font-size:2cqw">TIME TO DEPLETION :</span></div>
   <div class="abs" style="right:3%;top:4%;text-align:right;color:var(--red)"><div class="mincho glow" style="font-size:5cqw;line-height:1">外部</div><div class="wide" data-o="r" style="font-size:2.2cqw;color:#fff">EXTERNAL</div></div>
   <div class="abs hazard" style="right:3%;bottom:4%;width:20%;height:3cqw;font-size:1.4cqw"></div>
   <div class="abs glow" id="tm" style="left:14%;top:27%;color:#ff6a1a;font-size:16cqw;line-height:1"></div>
   <div class="abs chain" style="left:14%;top:67%;color:#6f3a12;font-size:2.4cqw">${['HOLD','LOW','NOMINAL','OVERDRIVE'].map((m,i)=>`<div class="cell" style="${i==3?'background:var(--red);color:#000;border-color:var(--red)':''};padding:.3cqw 1.2cqw"><span class="cond">${m}</span></div>`).join('')}</div>
   <div class="abs tag strobe" style="left:13%;bottom:4%;color:var(--red);font-size:2.2cqw">DANGER · EMERGENCY</div></div>`;
  const tm=el.querySelector('#tm');const t0=performance.now();const start=59990;
  c.loop(t=>{const r=Math.max(0,start-(t-t0)*9);tm.innerHTML=seg7(`${pad(r/60000)}:${pad(r/1000%60)}:${pad(r/10%100)}`)},24);
}},
{name:'TRIAD VOTE',build(el,c){
  const panel=(n,name,col,clip,pos)=>`<div class="abs" data-p="${n}" data-c="${col}" style="${pos};background:${col};clip-path:${clip};display:flex;flex-direction:column;justify-content:center;padding:0 3cqw"><span class="cond" style="font-size:3.4cqw;color:#062">${name}</span><span class="mincho st" style="font-size:4.4cqw;color:#063">承認</span></div>`;
  const w=overlay(wire('M800 432 V500',AMB)+wire('M736 700 H770 V580',AMB)+wire('M864 700 H830 V580',AMB)+dot(800,432,AMB)+dot(736,700,AMB)+dot(864,700,AMB)+chamfer(720,500,160,80,12,AMB,3,'#000')+brkS(560,40,480,820,AMB,40,2));
  el.innerHTML=`<div class="fill" style="background:#000">${w}
    <div class="abs mincho glow" style="left:4cqw;top:3cqw;color:var(--amber);font-size:5cqw">提訴</div>
    <div class="abs chain glow" style="left:4cqw;top:12cqw;color:var(--amber);font-size:2.2cqw;flex-direction:column;align-items:flex-start">
      <div class="cell" style="margin:0 0 -.1em 0;width:100%"><small class="hx">Code</small><span class="cond" id="code">239</span></div>
      <div class="cell" style="margin:0 0 -.1em 0;width:100%"><small class="hx">File</small><span class="cond">TRIAD_SYS</span></div>
      <div class="cell" style="margin:0 0 -.1em 0;width:100%"><small class="hx">Extention</small><span class="cond">4096</span></div>
      <div class="cell" style="margin:0;width:100%"><small class="hx">Priority</small><span class="cond">AAA</span></div></div>
    <div class="abs mincho glow" style="right:4cqw;top:3cqw;color:var(--amber);font-size:5cqw">決議</div>
    <div class="abs tag strobe" style="right:4cqw;top:12cqw;color:var(--red);font-size:2.6cqw;font-family:var(--f-mincho)">審議中</div>
    ${panel(1,'VESTA·2','var(--sky)','polygon(0 0,100% 0,100% 70%,50% 100%,0 70%)','left:37%;top:8%;width:26%;height:40%')}
    ${panel(2,'JANUS·3','var(--mint)','polygon(0 0,80% 0,100% 35%,100% 100%,0 100%)','left:18%;top:56%;width:28%;height:36%')}
    ${panel(3,'ARGUS·1','var(--mint)','polygon(20% 0,100% 0,100% 100%,0 100%,0 35%)','left:54%;top:56%;width:28%;height:36%')}
    <div class="abs cond glow" data-o="c" style="left:50%;top:57.6%;translate:-50% 0;color:var(--amber);font-size:3cqw">TRIAD</div></div>`;
  drawWires(el,c.every,4);
  const ps=[...el.querySelectorAll('[data-p]')];let code=239;
  const set=(p,ok)=>{p.style.background=ok?p.dataset.c:RED;const st=p.querySelector('.st');st.textContent=ok?'承認':'否定';st.style.color=ok?'#063':'#fff';st.classList.toggle('strobe',!ok)};
  c.every(AF*3,()=>{set(pick(ps),Math.random()>.5);el.querySelector('#code').textContent=++code});
}},
{name:'WAVEFORM / 5 CHANNEL',build(el,c){
  el.innerHTML=`<div class="fill" style="background:#000"><canvas class="fill" style="width:100%;height:100%"></canvas>
   <div class="abs" style="inset:0;display:grid;grid-template-columns:repeat(5,1fr);padding:0 6%">${['CORTEX','HIPPOCAMPUS','PARIETAL','MOTOR','SENSORY'].map((n,i)=>`<div style="position:relative"><span class="abs mono glow" style="right:6%;top:9cqw;writing-mode:vertical-rl;color:var(--red);font-size:1.25cqw">CH-0${i+1} ${n}</span><span class="abs mono" style="left:0;bottom:1.2cqw;color:var(--red);font-size:1.3cqw">-0${i+1}</span></div>`).join('')}</div>
   <div class="abs brk" style="inset:1.2cqw;color:var(--amber);--l:3cqw;--w:.25cqw"></div>
   <div class="abs chain glow" style="left:3cqw;top:2.6cqw;color:var(--amber);font-size:2cqw;background:#000"><div class="cell"><small class="hx">Monitor</small><span class="cond">EEG</span></div><div class="cell"><small class="hx">Subject</small><span class="cond">02</span></div><div class="cell"><small class="hx">Sync ratio</small><span class="cond" id="sr">41.3%</span></div></div></div>`;
  const cv=el.querySelector('canvas');const g=fitCanvas(cv);const W=cv.width,H=cv.height;const t0=performance.now();
  c.loop(t=>{const T=(t-t0)/1000;g.fillStyle='#000';g.fillRect(0,0,W,H);const cw=W*.88/5;
    for(let k=0;k<5;k++){const x0=W*.06+k*cw;
      const gr=g.createLinearGradient(0,0,0,H);['#ff1a2e','#ff8a1c','#ffd21a','#39ff6a','#2a7bff','#6e3cff'].forEach((col,i)=>gr.addColorStop(i/5,col));
      g.globalAlpha=.55;g.fillStyle=gr;g.fillRect(x0+cw*.3,0,cw*.22,H);g.globalAlpha=1;
      g.strokeStyle='#e8fff0';g.lineWidth=Math.max(1.5,W/700);g.shadowColor='#7df5b4';g.shadowBlur=8;g.beginPath();
      for(let y=0;y<=H;y+=3){const v=Math.sin(y*.05+T*(9+k))*.35+Math.sin(y*.013*(k+1)-T*12)*.5+(Math.random()-.5)*(k==2?1.2:.25);const x=x0+cw*.42+v*cw*.32;y?g.lineTo(x,y):g.moveTo(x,y)}
      g.stroke();g.shadowBlur=0;for(let y=H*.08;y<H*.92;y+=H/40){g.fillStyle='#ff1a2e';g.fillRect(x0+cw*.05,y,cw*.06,1)}}
    g.fillStyle='#ff1a2e';g.fillRect(0,H*.47,W,Math.max(2,H/300));
    el.querySelector('#sr').textContent=(41+Math.random()*2).toFixed(1)+'%';
  },12);
}},
{name:'TOPOGRAPHIC SCAN',build(el,c){
  el.innerHTML=`<div class="fill" style="background:#000"><canvas class="fill" style="width:100%;height:100%"></canvas>
   ${overlay(chamfer(16,16,1568,868,30,PHO,2.5)+`<line id="ld" x1="300" y1="118" x2="300" y2="118" stroke="${RED}" stroke-width="3"/><polyline id="ld2" points="" fill="none" stroke="${RED}" stroke-width="3"/>`+chainS(48,44,[['TARGET','07',110],['GRID','',260,'gr']],RED,74))}
   <div class="abs tag dbl glow" style="right:4cqw;bottom:4cqw;color:var(--phosphor);font-size:2.3cqw;background:#000">SECTOR-3 TOPOGRAPHICAL MAP</div>
   <div class="abs" id="ret" style="width:12cqw;height:12cqw;border:.25cqw solid var(--red);border-radius:50%;box-shadow:0 0 1cqw var(--red)"><div class="fill" style="background:linear-gradient(var(--red),var(--red)) 50% 0/2px 100% no-repeat,linear-gradient(var(--red),var(--red)) 0 50%/100% 2px no-repeat;opacity:.8"></div><span class="abs tag strobe" style="left:110%;top:0;color:var(--red);font-size:1.4cqw;background:#000">TARGET LOCK</span></div></div>`;
  const cv=el.querySelector('canvas');const g=fitCanvas(cv,1100);const W=cv.width,H=cv.height;
  const GX=150,GY=84,f=new Float32Array((GX+1)*(GY+1));const blobs=[...Array(10)].map(()=>({x:R(0,1),y:R(0,1),r:R(.08,.25),a:R(-1,1)}));
  const ret=el.querySelector('#ret'),ld2=el.querySelector('#ld2'),gr=el.querySelector('#gr');const t0=performance.now();
  const jump=()=>{const lx=15+Math.floor(R(1,6))*10,ly=25+Math.floor(R(0,4))*12;ret.style.left=lx+'%';ret.style.top=ly+'%';
    const cx=lx*16+96,cy=ly*9+96;ld2.setAttribute('points',`418,81 ${cx},81 ${cx},${cy-96}`);gr.textContent=`${(34+ly/10).toFixed(1)}N ${(139+lx/10).toFixed(1)}E`};
  jump();
  c.loop(t=>{const T=(t-t0)/1000;
    for(let j=0;j<=GY;j++)for(let i=0;i<=GX;i++){const x=i/GX,y=j/GY;let v=Math.sin(x*7+T*.6)*.25+Math.cos(y*9-x*3)*.2+Math.sin((x+y)*13+T*.4)*.08;for(const b of blobs)v+=b.a*Math.exp(-((x-b.x)**2+(y-b.y)**2)/(b.r*b.r));f[j*(GX+1)+i]=v}
    g.fillStyle='#000';g.fillRect(0,0,W,H);const sx=W/GX,sy=H/GY;g.lineWidth=Math.max(1,W/900);
    for(let L=-1.4;L<1.5;L+=.065){const hot=Math.abs(L-.36)<.03;g.strokeStyle=hot?'#ff1a2e':'#39ff6a';g.globalAlpha=hot?1:.75;g.beginPath();
      for(let j=0;j<GY;j++)for(let i=0;i<GX;i++){const a=f[j*(GX+1)+i],b=f[j*(GX+1)+i+1],cc=f[(j+1)*(GX+1)+i+1],d=f[(j+1)*(GX+1)+i];
        const A=a>L,B=b>L,C=cc>L,D=d>L;if(A===B&&B===C&&C===D)continue;const p=[];const e=(v1,v2)=>(L-v1)/(v2-v1);
        if(A!==B)p.push([i+e(a,b),j]);if(B!==C)p.push([i+1,j+e(b,cc)]);if(D!==C)p.push([i+e(d,cc),j+1]);if(A!==D)p.push([i,j+e(a,d)]);
        for(let k=0;k+1<p.length;k+=2){g.moveTo(p[k][0]*sx,p[k][1]*sy);g.lineTo(p[k+1][0]*sx,p[k+1][1]*sy)}}
      g.stroke()}
    g.globalAlpha=1;if(Math.floor(T*12)%6===0)jump();
  },12);
}},
{name:'INDEX TRACE',build(el,c){
  // strict module grid: pitch P on both axes → bar starts sit on an exact 45° diagonal
  const P=56,X0=60,Y0=96,BW=420,BH=32,N=12,RAIL=1180,SLOTS=20;
  let s=gridS(0,0,1600,900,P/2,P/2,'#000',.09)+`<line x1="${X0-P}" y1="${Y0-P+BH/2}" x2="${X0+N*P}" y2="${Y0+N*P+BH/2}" stroke="#000" stroke-width="2" stroke-dasharray="6 8"/>`;
  s+=`<line x1="${RAIL}" y1="${Y0}" x2="${RAIL}" y2="${Y0+(N-1)*P+BH}" stroke="#000" stroke-width="4"/>`;
  const tgt=[];
  for(let i=0;i<N;i++){const x=X0+i*P,y=Y0+i*P;tgt.push(4+Math.round(Math.abs(Math.sin(i*1.3))*14));
    let ticks='';for(let k=0;k<SLOTS;k++)ticks+=`<rect x="${x+12+k*20}" y="${y+8}" width="10" height="16" fill="${DIMG}"/>`;
    s+=`<g class="row" style="visibility:hidden">${box(x,y,BW,BH,'#000',0,'#000')}<g class="tk">${ticks}</g>${wire(`M${x+BW} ${y+BH/2} H${RAIL}`,'#000',3)}<rect x="${x+BW-4}" y="${y+BH/2-4}" width="8" height="8" fill="#000"/><rect x="${RAIL-8}" y="${y+BH/2-8}" width="16" height="16" fill="#000"/>${monoT(RAIL+22,y+BH/2+9,pad(223+i,5),26,'#000')}</g>`}
  s+=tagS(1560,30,'INDEX TRACE · CH 07',28,'#000',{anchor:'end',bg:'none'});
  [['SCAN','LINEAR'],['PITCH','56 U'],['DEPTH','12']].forEach(([k,v],i)=>{s+=box(1380,300+i*96,180,80,'#000',3)+svgT(1392,324+i*96,k,16,'#000','start',.84)+svgT(1392,366+i*96,v,36,'#000','start',.74)});
  s+=svgTi('cnt',X0,860,'00223',250,'#000','start',.56)+monoT(X0+4,640,'TRACE COUNT',22,'#000');
  el.innerHTML=sv(s,'#d65f0e','',false);
  const rows=[...el.querySelectorAll('.row')],tks=rows.map(r=>[...r.querySelectorAll('.tk rect')]);const cur=Array(N).fill(0);let i=0,n=223;
  c.every(AF,()=>{for(let k=0;k<2&&i<N;k++)rows[i++].style.visibility='visible';
    for(let r=0;r<i;r++){if(cur[r]<tgt[r]){cur[r]=Math.min(tgt[r],cur[r]+3);tks[r].forEach((t,k)=>t.setAttribute('fill',k<cur[r]?'var(--phosphor)':DIMG))}}
    el.querySelector('#cnt').textContent=pad(n=Math.min(n+1,240),5)});
}},
{name:'ENERGY OBSERVATION',build(el,c){
  const N=40;let lines='';for(let k=0;k<=6;k++){const y=720-k*89.3;lines+=`<line x1="48" y1="${y}" x2="1552" y2="${y}" stroke="${AMB}" stroke-width="1" opacity=".3"/>`+monoT(56,y-6,'+'+k*16,16,AMB)}
  el.innerHTML=`<div class="fill" style="background:#000">${overlay(lines+chamfer(30,130,1540,610,20,AMB,2)+tab(60,130,'CHANNEL 07 · 40 BANDS',AMB,22))}
   <div class="abs" style="left:3cqw;top:2.5cqw;display:flex;gap:2cqw;align-items:center"><span class="tag glow" style="color:var(--amber);font-size:2cqw">ENERGY OBSERVATION DATA</span><span class="tag blink" style="color:var(--amber);font-size:1.6cqw">ANALYZING</span></div>
   <div class="abs mono" style="right:3cqw;top:2.6cqw;color:var(--amber);font-size:1.2cqw;text-align:right;line-height:1.5">SIGNATURE ...... <span style="color:var(--red)">NEGATIVE</span><br>PATTERN ........ <span style="color:var(--red)">NEGATIVE</span></div>
   <div class="abs" id="bars" style="left:6cqw;right:3cqw;top:18%;bottom:20%;display:flex;align-items:flex-end;gap:.25cqw"></div>
   <div class="abs" style="left:3cqw;right:3cqw;bottom:11%;display:flex;gap:.5cqw">${Array(10).fill(0).map((_,i)=>`<div style="flex:1;height:2.2cqw;background:${i%3==1?'var(--amber)':'#2a1a10'}"></div>`).join('')}</div>
   <div class="abs mono" style="left:3cqw;right:3cqw;bottom:4%;display:flex;justify-content:space-between;color:var(--amber);font-size:1.2cqw"><span>HIGH-ENERGY FIELD APPROACHING</span><span>CENTRAL SHAFT · POINT 00</span><span>OBSERVED BY VESTA</span></div></div>`;
  const bars=el.querySelector('#bars');const tgt=[],cur=[];
  for(let i=0;i<N;i++){tgt.push(Math.round((20+60*Math.abs(Math.sin(i*.37))+R(0,20))/16)*16);cur.push(0);const d=document.createElement('div');d.style.cssText='flex:1;background:linear-gradient(#7df5b4,#1d7a3e);box-shadow:0 0 .8cqw rgba(57,255,106,.35);height:0';bars.appendChild(d)}
  const ds=[...bars.children];
  c.every(AF,()=>{for(let i=0;i<N;i++){if(cur[i]<tgt[i]&&Math.random()>.25)cur[i]+=16;ds[i].style.height=Math.min(cur[i],100)+'%'}});
}},
{name:'ORACLE POWER-ON',build(el,c){
  el.innerHTML=`<div class="fill" style="background:#000;color:var(--mint)">
   <div class="abs dump" id="bg" style="inset:0;--dump-size:.78cqw;color:var(--mint);opacity:.13;padding:.6cqw"></div>
   <div class="abs flick-on" style="left:0;right:0;top:12%;background:#000">
     <div style="text-align:right;padding-right:5cqw"><span class="cond glow" data-o="r" style="font-size:4.4cqw">TRIAD system-1</span></div>
     <div style="height:.5cqw;background:var(--mint);box-shadow:0 0 1cqw var(--mint)"></div>
     <div style="padding-left:4cqw"><span class="tall glow" style="font-size:26cqw">ORACLE</span></div>
     <div style="height:.5cqw;background:var(--mint);box-shadow:0 0 1cqw var(--mint)"></div>
     <div class="mono" id="code" style="font-size:1.6cqw;line-height:1.3;padding:1cqw 4cqw;white-space:nowrap;text-transform:none;opacity:.85;overflow:hidden"></div></div></div>`;
  const code=el.querySelector('#code'),bg=el.querySelector('#bg');const pi='31415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679';let k=0;
  const buf=Array.from({length:70},()=>dumpLine(pick([0,1,2])));
  c.every(AF,()=>{k=(k+7)%80;code.innerHTML=`&lt;head&gt;TRIAD system-1 ORACLE&lt;/head&gt;<br>&lt;body&gt;&lt;a&gt;${pi.slice(k)}${pi.slice(0,k)}<br>${pi.slice(k*2%90)}…`;for(let j=0;j<4;j++){buf.shift();buf.push(dumpLine(pick([0,1,2])))}bg.textContent=buf.join('\n')});
}},
{name:'KEEP OUT',build(el){
  const warn=Array.from({length:40},(_,i)=>Array(12).fill(i%2?'NO ENTRY · 立入禁止 · LEVEL 1 · ':'CLEARANCE REQUIRED · 許可なき立入を禁ず · ').join('')).join('\n');
  el.innerHTML=`<div class="fill" style="background:#050000;display:flex;flex-direction:column">
     <div class="dump" style="flex:1;--dump-size:.95cqw;color:var(--red);opacity:.3;padding-top:.4cqw">${warn}</div>
     <div style="height:.35cqw;background:var(--amber);box-shadow:0 0 1cqw var(--amber)"></div>
     <div style="padding:1.5cqw 0 0 0;margin-left:-3cqw;white-space:nowrap"><span class="wide glow strobe-in" style="color:var(--red);font-size:19cqw">KEEP OUT</span></div>
     <div style="padding-left:5cqw;display:flex;align-items:baseline;gap:3cqw"><span class="mincho glow" style="color:var(--red);font-size:4.5cqw;line-height:1.3">立入禁止区域</span><span class="cond" style="color:var(--red);font-size:2.6cqw">LOWER SHAFT : LEVEL 1 · SECTOR 2</span></div>
     <div class="mono" style="color:var(--red);font-size:1.15cqw;padding:0 0 1.5cqw 5cqw;opacity:.8">TRESPASSERS ENTERING WITHOUT CLEARANCE WILL BE DETAINED. NO EXCEPTIONS. NO EXCEPTIONS.</div>
     <div style="height:.35cqw;background:var(--amber);box-shadow:0 0 1cqw var(--amber)"></div>
     <div class="dump" style="flex:1;--dump-size:.95cqw;color:var(--red);opacity:.3;padding-top:.4cqw">${warn}</div></div>`;
}},
{name:'REPORT / UNKNOWN',build(el){
  el.innerHTML=`<div class="fill center" style="background:#000;color:var(--mint);text-align:center">
   <div style="position:absolute;left:0;right:0;top:20%;height:.4cqw;background:var(--mint);box-shadow:0 0 1cqw var(--mint)"></div>
   <div style="position:absolute;left:0;right:0;bottom:17%;height:.4cqw;background:var(--mint);box-shadow:0 0 1cqw var(--mint)"></div>
   <span class="tall glow" data-o="c" style="font-size:5cqw;line-height:1;margin-top:-4cqw">REPORT ON SIGNAL DISCHARGE<br>RECEIVED FROM OBJECT 15 AGAINST UNIT-02:</span>
   <div class="brk" style="color:var(--red);--l:2cqw;--w:.25cqw;padding:1.4cqw 3cqw;margin-top:2.2cqw;display:flex;flex-direction:column;align-items:center">
     <span class="tag dbl glow strobe" style="color:var(--red);font-size:6.4cqw;margin-bottom:1.2cqw">UNKNOWN</span>
     <span class="cond glow" data-o="c" style="font-size:2.6cqw;color:var(--mint)">POSSIBLE SIMILARITY WITH BARRIER FIELD</span>
     <span class="tag dbl glow strobe" style="color:var(--red);font-size:3.6cqw;margin-top:1.2cqw;animation-delay:var(--frame)">RECALCULATING</span></div>
   <div class="chain glow" style="position:absolute;bottom:4%;left:50%;translate:-50% 0;font-size:2.2cqw"><div class="cell"><small class="hx">Checked by</small><span class="cond">VESTA-2</span></div><div class="cell"><small class="hx">Pass</small><span class="cond">04/09</span></div><div class="cell"><small class="hx">Confidence</small><span class="cond">LOW</span></div></div></div>`;
}},
{name:'SEVERED WALL',build(el,c){
  el.innerHTML=`<div class="abs wall" style="inset:0 0 0 -7cqw;background:#000;color:var(--red);padding-top:.6cqw;gap:0 2.2cqw">${Array.from({length:44},(_,i)=>`<span class="tall glow" style="font-size:9cqw;line-height:.95;opacity:${[1,.75,.9][i%3]}">Severed</span>`).join('')}</div>`;
  const ws=[...el.querySelectorAll('.tall')];
  c.every(AF*2,()=>{ws.forEach(w=>w.classList.remove('strobe'));for(let k=0;k<3;k++)pick(ws).classList.add('strobe')});
}},
{name:'LIVE FEED / OBJECT 15',build(el,c){
  el.innerHTML=`<div class="fill" style="background:#000"><canvas class="fill" style="width:100%;height:100%"></canvas><div class="abs" id="lat" style="inset:0"></div>
   <div class="abs chain" style="left:3cqw;top:3cqw;color:#fff;font-size:2.2cqw;background:rgba(0,0,0,.35)"><div class="cell"><small class="hx">Object</small><span class="cond">15</span></div><div class="cell"><small class="hx">Feed</small><span class="cond">LIVE</span></div><div class="cell"><small class="hx">Direct connection</small><span class="cond">NO. 316</span></div></div>
   <div class="abs tag solid blink" style="right:3cqw;top:3cqw;color:var(--red);font-size:2cqw">● REC</div>
   <div class="abs brk" style="left:30%;top:30%;width:40%;height:40%;color:#fff;--l:2.2cqw;--w:.25cqw"></div>
   <div class="abs tag" style="right:3cqw;bottom:3cqw;color:#fff;font-size:3cqw">x05</div>
   <div class="abs mono" id="tc" style="left:3cqw;bottom:3cqw;color:#fff;font-size:2cqw"></div></div>`;
  const lat=el.querySelector('#lat');let h='';
  for(let y=1;y<5;y++)for(let x=1;x<8;x++)h+=`<span class="abs" style="left:${x*12.5}%;top:${y*20}%;width:2.4cqw;height:2.4cqw;transform:translate(-50%,-50%);background:linear-gradient(#fff,#fff) 50% 0/2px 100% no-repeat,linear-gradient(#fff,#fff) 0 50%/100% 2px no-repeat;opacity:.75"></span>`;
  for(let k=0;k<7;k++)h+=`<span class="abs mono xm" style="color:#fff;font-size:2.4cqw;transform:translate(-50%,-50%)">×</span>`;
  lat.innerHTML=h;const xs=[...lat.querySelectorAll('.xm')].map(e=>({e,x:R(10,90),y:R(15,85),vx:R(-6,6),vy:R(-4,4)}));
  const cv=el.querySelector('canvas');const g=fitCanvas(cv,480);const W=cv.width,H=cv.height;const t0=performance.now();
  c.loop(t=>{const T=(t-t0)/1000;
    const gr=g.createLinearGradient(0,0,0,H);gr.addColorStop(0,'#3a4f8f');gr.addColorStop(.5,'#c9a4d8');gr.addColorStop(.55,'#f0d7b0');gr.addColorStop(1,'#2a2440');g.fillStyle=gr;g.fillRect(0,0,W,H);
    g.globalAlpha=.6;for(let k=0;k<4;k++){g.fillStyle=k%2?'#1a1530':'#fff2e0';g.beginPath();g.ellipse(W*(.3+k*.15)+Math.sin(T*2+k)*20,H*(.55+.05*k),W*.12,H*.08,0,0,7);g.fill()}
    g.globalAlpha=1;const id=g.getImageData(0,0,W,H),d=id.data;for(let i=0;i<d.length;i+=4){const n=(Math.random()-.5)*40;d[i]+=n;d[i+1]+=n;d[i+2]+=n}g.putImageData(id,0,0);
    for(const o of xs){o.x+=o.vx*.25;o.y+=o.vy*.25;if(o.x<5||o.x>95)o.vx*=-1;if(o.y<10||o.y>90)o.vy*=-1;o.e.style.left=o.x+'%';o.e.style.top=o.y+'%'}
    el.querySelector('#tc').textContent=timecode(t-t0,7*3600000+23*60000);
  },12);
}},
{name:'J.S.T. CLOCK (INVERSE)',build(el,c){
  el.innerHTML=`<div class="fill" style="background:var(--paper);color:#0b0b0b">
   ${overlay(brkS(60,190,1480,500,'#0b0b0b',40,4))}
   <div class="abs" style="left:5cqw;top:4cqw;display:flex;align-items:flex-end;gap:1cqw"><span class="mincho" style="font-size:4.4cqw;border:.3cqw solid #000;padding:0 .8cqw;line-height:1.2">日本標準時</span><span class="cond" style="font-size:2.6cqw">J.S.T.</span></div>
   <div class="abs" id="clk" style="left:7cqw;top:27%;font-size:21cqw;line-height:1"></div>
   <div class="abs" style="left:5cqw;bottom:5cqw;display:flex;align-items:center;gap:1.5cqw"><span class="mincho" style="font-size:2.4cqw;border:.25cqw solid #000;padding:0 .5cqw">あと</span><span id="rem" style="font-size:6cqw"></span></div>
   <span class="abs mincho" style="right:5cqw;bottom:5cqw;font-size:3.4cqw;border:.3cqw solid #000;padding:0 .6cqw">予想時間</span></div>`;
  const clk=el.querySelector('#clk'),rem=el.querySelector('#rem');const t0=performance.now();
  c.loop(t=>{const d=new Date(Date.now()+9*3600000);clk.innerHTML=seg7(`${pad(d.getUTCHours())}:${pad(d.getUTCMinutes())}:${pad(d.getUTCSeconds())}`,{ghost:false});
    const r=35428000-(t-t0)*1000/12;rem.innerHTML=seg7(`${pad(r/3600000)}:${pad(r/60000%60)}:${pad(r/1000%60)}`,{ghost:false})},12);
}},
{name:'REFUSED',build(el){
  el.innerHTML=`<div class="fill" style="background:var(--red)">
   <div class="abs hazard" style="--c1:#000;--c2:transparent;left:0;top:0;bottom:0;width:14%;font-size:3cqw;opacity:.6"></div>
   <div class="abs hazard" style="--c1:#000;--c2:transparent;right:0;top:0;bottom:0;width:14%;font-size:3cqw;opacity:.6"></div>
   <div class="fill center">
     <span class="cond" data-o="c" style="font-size:4cqw;letter-spacing:.3em;color:#3b0006">WARNING</span>
     <div style="width:70%;height:.5cqw;background:#3b0006;margin:.6cqw 0"></div>
     <span class="wide strobe-in" data-o="c" style="font-size:14cqw;color:var(--red);-webkit-text-stroke:.35cqw #3b0006;text-shadow:.5cqw .5cqw 0 #3b0006">REFUSED</span>
     <div style="width:70%;height:.5cqw;background:#3b0006;margin:.6cqw 0"></div>
     <span class="cond" data-o="c" style="font-size:4cqw;letter-spacing:.2em;color:#3b0006">AUTOPILOT · UNIT-00</span></div></div>`;
}},
{name:'PHASE STATUS',build(el,c){
  let h='';for(let col=0;col<3;col++){h+=`<div style="display:flex;flex-direction:column;gap:1.1cqw;border-left:.25cqw solid var(--amber);position:relative"><span class="tag" style="position:absolute;top:-4cqw;left:-.25cqw;color:var(--amber);font-size:1.6cqw;background:#000">BUS ${'ABC'[col]}</span>`;
    for(let r=0;r<10;r++)h+=`<div style="display:flex;align-items:center;gap:1cqw"><span style="width:1.4cqw;height:.25cqw;background:var(--amber)"></span><span class="mono" style="color:var(--amber);font-size:1.15cqw;width:6cqw">PHASE ${pad(r+3)}</span><span class="pb" style="flex:1;height:2.2cqw;background:var(--red);box-shadow:0 0 .8cqw rgba(255,26,46,.4)"></span></div>`;h+='</div>'}
  el.innerHTML=`<div class="fill" style="background:#000;padding:6cqw 4cqw 3cqw;display:grid;grid-template-columns:repeat(3,1fr);gap:3cqw;align-content:center">${h}</div>
   <div class="abs tag glow" style="right:4cqw;top:1.4cqw;color:var(--amber);font-size:1.6cqw">SYNC SEQUENCE · ALL CHANNELS</div>`;
  const pbs=[...el.querySelectorAll('.pb')];let i=0;
  c.every(AF,()=>{for(let k=0;k<3&&i<10;k++,i++)for(let col=0;col<3;col++){const p=pbs[col*10+i];p.style.background='var(--mint)';p.style.boxShadow='0 0 .8cqw rgba(125,245,180,.5)'}});
}},
{name:'MEMORY DUMP',build(el,c){
  const kinds=[0,1,0,2],ROWS=54;
  el.innerHTML=`<div class="fill" style="background:#000;display:grid;grid-template-columns:repeat(4,1fr);gap:1.2cqw;padding:1.5cqw">${kinds.map((k,i)=>`<div class="dump glow" style="--dump-size:.82cqw;color:${i==2?'var(--amber)':'var(--phosphor)'};opacity:.85"></div>`).join('')}</div>
   <div class="abs" id="hl" style="left:26%;width:24%;height:8%;border:.25cqw solid var(--red);box-shadow:0 0 1cqw var(--red);background:rgba(255,26,46,.15)"></div>
   <div class="abs glow" style="right:3cqw;top:2cqw;background:#000;padding:0 1cqw;color:var(--red)"><span class="tall" style="font-size:8cqw;text-transform:none">0x7F3A12C0</span></div>
   <div class="abs" style="left:3cqw;bottom:3cqw;display:flex;gap:1.2cqw;align-items:center;background:#000;padding:.6cqw"><span class="tag solid" style="color:var(--red);font-size:2.4cqw">Intruder trace path</span><span class="tag strobe" style="color:var(--red);font-size:2.4cqw">Breach · node 7F3A</span></div>`;
  const cols=[...el.querySelectorAll('.dump')];const buf=kinds.map(k=>Array.from({length:ROWS},()=>dumpLine(k)));
  const draw=()=>cols.forEach((col,i)=>col.textContent=buf[i].join('\n'));draw();const hl=el.querySelector('#hl');
  c.every(AF,()=>{buf.forEach((b,i)=>{for(let k=0;k<3;k++){b.shift();b.push(dumpLine(kinds[i]))}});draw();if(Math.random()<.3){hl.style.top=R(8,70)+'%';hl.style.left=pick(['2%','26%','50%','74%'])}});
}},
{name:'CLEARANCE DOCUMENT',build(el){
  let lat='';for(let k=-3;k<=3;k++)lat+=`<ellipse rx="${Math.abs(Math.cos(k/3.5*1.4))*48}" ry="48" fill="none" stroke="#fff" stroke-width="1.6"/>`;
  for(let k=-2;k<=2;k++){const w=Math.sqrt(48*48-(k*18)**2);lat+=`<line x1="${-w}" x2="${w}" y1="${k*18}" y2="${k*18}" stroke="#fff" stroke-width="1.6"/>`}
  el.innerHTML=`<div class="fill center" style="background:var(--doc-blue);color:#fff;text-align:center">
   ${overlay(chamfer(30,30,1540,840,30,'#fff',2)+chamfer(44,44,1512,812,22,'#fff',.8))}
   <span class="wide" data-o="c" style="font-size:5.5cqw">TOP SECRET</span><span class="cond" data-o="c" style="font-size:1.8cqw;letter-spacing:.2em">EYES ONLY</span>
   <svg viewBox="-70 -60 140 120" style="width:14cqw;margin:1.4cqw 0"><circle r="48" fill="none" stroke="#fff" stroke-width="2.5"/>${lat}<path d="M-62 30 Q-70 -10 -50 -45 M62 30 Q70 -10 50 -45" stroke="#fff" stroke-width="3" fill="none"/></svg>
   <div style="font:700 2cqw var(--f-helv)">Report of the Orbital Hydrology Oversight Council</div>
   <div style="font:1.2cqw/1.4 var(--f-helv);max-width:54cqw;margin-top:1.2cqw;opacity:.9">Viewing this document requires Level Five clearance and written permission of the Council. Unauthorised possession is punishable under Article 9 of the Charter, regardless of whether the contents have been examined.</div></div>`;
}},

/* =================== NEVER EVOLVED: modern UIs, 1997 forever =================== */
{name:'TRAFFIC MONITOR (ANALYTICS)',set:'modern',build(el,c){
  // 90s hit counter: one odometer dominates; everything else is small and stacked
  let s=chainS(40,22,[['SITE','KESTREL.NET',290],['RANGE','24 H',140],['MODE','REALTIME',210]],AMB,70)+tagS(1560,30,'● LIVE',30,RED,{anchor:'end',solid:true,cls:'blink'});
  s+=chamfer(40,112,1060,368,22,MNT,4)+chamfer(56,128,1028,336,16,MNT,1.2)+tab(80,112,'VISITOR NO.',MNT,30);
  s+=`<g id="hero"></g>`+svgT(80,446,'YOU ARE VISITOR NUMBER · SINCE 04.1997',26,MNT,'start',.74)+svgTi('hd',1070,446,'',30,MNT,'end',.74);
  const K=[['SESSIONS',MNT],['CONV. RATE',AMB],['BOUNCE RATE',RED]];
  K.forEach(([k,col],i)=>{const y=112+i*124;s+=chamfer(1130,y,430,110,12,col,3)+svgT(1146,y+30,k,22,col,'start',.84)+`<g id="kv${i}"></g>`+svgTi('kd'+i,1544,y+98,'',20,col,'end',.84)});
  s+=`<g id="anom" class="strobe" style="visibility:hidden">${tagS(1544,368,'ANOMALY',20,RED,{anchor:'end',solid:true})}</g>`;
  // chart with real axes
  const PX0=130,PX1=1070,PY0=548,PY1=800,MAXV=500;
  s+=chamfer(40,500,1060,380,18,AMB,2.5)+tab(70,500,'SESSIONS / HOUR',AMB,24);
  s+=gridS(PX0,PY0,PX1-PX0,PY1-PY0,(PX1-PX0)/24,(PY1-PY0)/5,AMB,.14);
  s+=`<defs><clipPath id="plot"><rect x="${PX0}" y="${PY0}" width="${PX1-PX0}" height="${PY1-PY0}"/></clipPath></defs>`;
  s+=`<g clip-path="url(#plot)"><path id="ar" fill="var(--mint)" opacity=".14"/><path id="ln" fill="none" stroke="${MNT}" stroke-width="4"/></g>`;
  s+=`<line x1="${PX0}" y1="${PY0-10}" x2="${PX0}" y2="${PY1}" stroke="${AMB}" stroke-width="3"/><line x1="${PX0}" y1="${PY1}" x2="${PX1+10}" y2="${PY1}" stroke="${AMB}" stroke-width="3"/>`;
  for(let h=0;h<=24;h++){const x=PX0+h*(PX1-PX0)/24;s+=`<line x1="${x}" y1="${PY1}" x2="${x}" y2="${PY1+(h%4?8:18)}" stroke="${AMB}" stroke-width="2"/>`;if(h%4===0)s+=monoT(x,PY1+40,pad(h)+'H',18,AMB,'middle')}
  for(let k=0;k<=5;k++){const y=PY1-k*(PY1-PY0)/5;s+=`<line x1="${PX0-14}" y1="${y}" x2="${PX0}" y2="${y}" stroke="${AMB}" stroke-width="2"/>`+monoT(PX0-20,y+6,String(k*MAXV/5),18,AMB,'end')}
  s+=monoT(PX1+10,PY1+40,'T',18,AMB,'end')+monoT(PX0-20,PY0-18,'SESS',16,AMB,'end');
  s+=`<line id="cur" y1="${PY0}" y2="${PY1}" stroke="${AMB}" stroke-width="2" stroke-dasharray="4 6"/>`;
  // sources
  s+=chamfer(1130,500,430,380,18,AMB,2.5)+tab(1155,500,'TOP SOURCES',AMB,22);
  const src=[['DIRECT',12],['SEARCH',10],['WEBRING',8],['GUESTBOOK',5],['NEWSGROUP',3],['BOOKMARK',2],['OTHER',1]];
  src.forEach(([n],i)=>{const y=540+i*46;s+=svgT(1150,y+28,n,22,AMB,'start',.8);for(let k=0;k<12;k++)s+=`<rect class="sb${i}" x="${1330+k*18}" y="${y+8}" width="13" height="24" fill="${DIMA}"/>`});
  el.innerHTML=sv(s);
  let hits=48213;const vals=[12408,3.42,38.9];const data=Array.from({length:24},(_,i)=>Math.round(170+130*Math.sin(i/3.2)+i*7+R(0,50)));let shown=0,fill=0;
  const X=i=>PX0+i*(PX1-PX0)/24,Y=v=>PY1-Math.min(v,MAXV)/MAXV*(PY1-PY0);
  c.every(AF,()=>{
    hits+=R(1,9)|0;el.querySelector('#hero').innerHTML=seg(84,160,228,pad(hits,7),MNT);el.querySelector('#hd').textContent='▲ 10.0% VS PREV 24H';
    vals[0]+=Math.random()<.4?1:0;vals[1]=+(vals[1]+R(-.02,.02)).toFixed(2);vals[2]=+(vals[2]+R(-.4,.6)).toFixed(1);
    vals.forEach((v,i)=>{el.querySelector('#kv'+i).innerHTML=seg(1146,112+i*124+40,60,i?v.toFixed(i==1?2:1):String(v),K[i][1]);el.querySelector('#kd'+i).textContent=i==2?'▲ '+(v-35).toFixed(1)+' PTS':'▲ '+(11.7-i).toFixed(1)+'%'});
    el.querySelector('#anom').style.visibility=vals[2]>40?'':'hidden';
    shown=Math.min(24,shown+3);let d=`M${X(0)} ${Y(data[0])}`;for(let i=1;i<shown;i++)d+=` H${X(i)} V${Y(data[i])}`;d+=` H${X(shown)}`;
    el.querySelector('#ln').setAttribute('d',d);el.querySelector('#ar').setAttribute('d',d+` V${PY1} H${X(0)} Z`);
    const cu=el.querySelector('#cur');cu.setAttribute('x1',X(shown));cu.setAttribute('x2',X(shown));
    fill=Math.min(12,fill+1);src.forEach(([,v],i)=>el.querySelectorAll('.sb'+i).forEach((r,k)=>r.setAttribute('fill',k<Math.min(v,fill)?(i==0?MNT:AMB):DIMA)));
  });
}},
{name:'SERVICE STATUS',set:'modern',build(el,c){
  const names=['AUTH','API GATEWAY','DATABASE','CDN EDGE','QUEUE','SEARCH','BILLING','MAIL RELAY'];
  let s=svgTi('hdr',40,130,'ALL SYSTEMS OPERATIONAL',100,MNT,'start',.56)+chainS(1150,40,[['REGION','APAC-2',170],['UPDATED','00:00:00',240,'upd']],AMB,72);
  s+=monoT(640,182,'90 DAYS AGO',18,AMB)+monoT(1480,182,'TODAY',18,AMB,'end')+monoT(1560,182,'UPTIME',18,AMB,'end');
  names.forEach((n,i)=>{const y=196+i*80;s+=`<line x1="40" y1="${y+70}" x2="1560" y2="${y+70}" stroke="${AMB}" stroke-width="1" opacity=".3"/>`+svgT(40,y+46,n,34,AMB,'start',.74)+`<g id="st${i}"></g>`;
    for(let j=0;j<90;j++)s+=`<rect class="u${i}" x="${640+j*9.33}" y="${y+12}" width="7" height="46" fill="${MNT}"/>`;s+=monoT(1560,y+44,'99.98%',24,AMB,'end','pc'+i)});
  el.innerHTML=sv(s);
  const hist=names.map(()=>Array.from({length:90},()=>Math.random()<.04?(Math.random()<.3?RED:AMB):MNT));const state=names.map(()=>'OPERATIONAL');let t=0;
  const tagFor=(st,i)=>{const col=st==='OPERATIONAL'?MNT:st==='DEGRADED'?AMB:RED;return tagS(360,196+i*80+12,st,26,col,{solid:st!=='OPERATIONAL',cls:st==='OUTAGE'?'strobe':''})};
  const draw=()=>names.forEach((_,i)=>{el.querySelector('#st'+i).innerHTML=tagFor(state[i],i);el.querySelectorAll('.u'+i).forEach((r,j)=>r.setAttribute('fill',hist[i][j]));const ok=hist[i].filter(x=>x===MNT).length;el.querySelector('#pc'+i).textContent=(99+ok/90).toFixed(2)+'%'});
  draw();
  c.every(AF*2,()=>{t++;if(t===3)state[2]='DEGRADED';if(t===5)state[2]='OUTAGE';if(t===6)state[5]='DEGRADED';
    hist.forEach((h,i)=>{h.shift();h.push(state[i]==='OUTAGE'?RED:state[i]==='DEGRADED'?AMB:MNT)});draw();
    const hdr=el.querySelector('#hdr');const bad=state.includes('OUTAGE');hdr.textContent=bad?'PARTIAL OUTAGE':'ALL SYSTEMS OPERATIONAL';hdr.setAttribute('fill',bad?RED:MNT);hdr.classList.toggle('strobe',bad);
    el.querySelector('#upd').textContent=`00:00:${pad(t*2)}`});
}},
{name:'MARKET TERMINAL',set:'modern',build(el,c){
  let s=svgT(40,150,'KSTL',150,AMB,'start',.56)+svgT(40,196,'KESTREL HYDRO INDUSTRIES · NSE',28,AMB,'start',.74)+`<g id="px"></g>`+svgTi('chg',1240,180,'',40,MNT,'end',.74);
  s+=chamfer(40,230,1200,600,18,AMB,2.5)+gridS(60,250,1160,420,1160/40*5,84,AMB,.2)+tab(70,230,'1 MIN · CANDLE',AMB,22)+`<g id="cs"></g><g id="vol"></g>`+`<line x1="60" y1="690" x2="1220" y2="690" stroke="${AMB}" stroke-width="2"/>`+monoT(70,820,'VOLUME',18,AMB);
  s+=chamfer(1270,230,290,600,18,AMB,2.5)+tab(1295,230,'ORDER BOOK',AMB,22)+`<g id="ob"></g>`;
  const tick=['ORBT ▲1.20','HYDR ▼0.42','KSTL ▲2.31','VSTA ▲0.08','JNUS ▼3.10','ARGS ▲0.77','OSPR ▼0.19','TRIA ▲5.02'].join('   ·   ');
  el.innerHTML=sv(s,'#000',`<div class="abs" style="left:0;right:0;bottom:0;height:5.4cqw;background:#000;border-top:.25cqw solid var(--amber);overflow:hidden;display:flex;align-items:center;z-index:2"><div class="marq mono glow" style="color:var(--amber);font-size:2.4cqw;animation:marq 6s linear infinite"><span style="padding-right:4cqw">${tick}</span><span style="padding-right:4cqw">${tick}</span></div></div>`);
  let p=184.2;const cs=Array.from({length:40},()=>{const o=p;p+=R(-2,2.1);const cl=p;return {o,c:cl,h:Math.max(o,cl)+R(0,1.2),l:Math.min(o,cl)-R(0,1.2),v:R(.2,1)}});
  const draw=()=>{const hi=Math.max(...cs.map(k=>k.h)),lo=Math.min(...cs.map(k=>k.l));const Y=v=>660-(v-lo)/(hi-lo||1)*390;let g='',vv='';
    cs.forEach((k,i)=>{const x=60+i*29;const up=k.c>=k.o;const col=up?MNT:RED;g+=`<line x1="${x+10}" y1="${Y(k.h)}" x2="${x+10}" y2="${Y(k.l)}" stroke="${col}" stroke-width="2"/><rect x="${x+2}" y="${Math.min(Y(k.o),Y(k.c))}" width="16" height="${Math.max(3,Math.abs(Y(k.o)-Y(k.c)))}" fill="${up?'#000':col}" stroke="${col}" stroke-width="2"/>`;vv+=`<rect x="${x+2}" y="${800-k.v*90}" width="16" height="${k.v*90}" fill="${col}" opacity=".6"/>`});
    el.querySelector('#cs').innerHTML=g;el.querySelector('#vol').innerHTML=vv;const last=cs[cs.length-1].c,first=cs[0].o;
    el.querySelector('#px').innerHTML=seg(430,46,120,last.toFixed(2),last>=first?MNT:RED);const ch=el.querySelector('#chg');ch.textContent=`${last>=first?'▲':'▼'} ${(last-first).toFixed(2)} / ${((last-first)/first*100).toFixed(2)}%`;ch.setAttribute('fill',last>=first?MNT:RED);
    let ob='';for(let i=0;i<7;i++){ob+=monoT(1290,290+i*34,(last+.05*(7-i)).toFixed(2),22,RED)+monoT(1540,290+i*34,String(R(100,9000)|0),22,RED,'end')}
    ob+=`<rect x="1286" y="${290+7*34-24}" width="258" height="34" fill="${AMB}"/>`+monoT(1415,290+7*34,last.toFixed(2)+' MID',22,'#000','middle');
    for(let i=0;i<7;i++){ob+=monoT(1290,290+(i+8)*34,(last-.05*(i+1)).toFixed(2),22,MNT)+monoT(1540,290+(i+8)*34,String(R(100,9000)|0),22,MNT,'end')}
    el.querySelector('#ob').innerHTML=ob};
  draw();let k=0;
  c.every(AF,()=>{const last=cs[cs.length-1];last.c+=R(-.4,.42);last.h=Math.max(last.h,last.c);last.l=Math.min(last.l,last.c);if(++k%3===0){cs.shift();cs.push({o:last.c,c:last.c,h:last.c,l:last.c,v:R(.2,1)})}draw()});
}},
{name:'VITALS (FITNESS RINGS)',set:'modern',build(el,c){
  const rings=[[300,RED,DIMR,28],[226,MNT,DIMG,29],[152,SKY,'#16233a',30]],SEGS=40,cx=420,cy=470;let s='';
  rings.forEach(([r,col,dim],ri)=>{for(let k=0;k<SEGS;k++){const a0=-Math.PI/2+k*2*Math.PI/SEGS+.025,a1=a0+2*Math.PI/SEGS-.05;s+=`<path class="rg${ri}" d="${arcP(cx,cy,r,a0,a1)}" stroke="${dim}" stroke-width="58" fill="none"/>`}});
  s+=svgT(cx,cy-40,'DAY',30,AMB,'middle',.84)+seg(cx-87,cy-20,90,'214',AMB,false)+brkS(80,120,680,700,AMB,40,2);
  s+=chainS(820,40,[['MOVE','420/600 KCAL',280,'m0'],['EXERCISE','22/30 MIN',240],['STAND','09/12 HR',200]],AMB,76);
  s+=svgT(820,180,'HEART RATE',30,RED,'start',.8)+`<g id="bpm"></g>`+svgT(1220,400,'BPM',50,RED,'start',.74)+`<rect id="hb" x="1220" y="300" width="40" height="40" fill="${RED}"/>`;
  s+=chamfer(820,460,740,300,16,RED,2.5)+gridS(840,480,700,260,35,35,RED,.18)+tab(850,460,'ECG · LEAD II',RED,22)+`<polyline id="ecg" fill="none" stroke="${RED}" stroke-width="4"/>`;
  s+=chainS(820,790,[['STEPS','08412',190],['DISTANCE','6.2 KM',200],['SLEEP','7H 12M',200],['VO2 MAX','48',150]],SKY,74);
  el.innerHTML=sv(s);
  const segs=rings.map((_,ri)=>[...el.querySelectorAll('.rg'+ri)]);let f=0;
  const beat=i=>{const p=i%34;return p===10?.25:p===12?-.3:p===13?1.6:p===14?-.55:p>17&&p<22?.22:p>4&&p<8?.12:0};
  const buf=Array.from({length:140},(_,i)=>beat(i));let n=140,b=72;
  c.every(AF,()=>{f+=2;rings.forEach(([, col,,tg],ri)=>segs[ri].forEach((p,k)=>p.setAttribute('stroke',k<Math.min(f,tg)?col:rings[ri][2])));
    for(let j=0;j<6;j++){buf.shift();buf.push(beat(n++)+R(-.03,.03))}
    el.querySelector('#ecg').setAttribute('points',buf.map((v,i)=>`${840+i*5},${640-v*110}`).join(' '));
    const hot=buf.slice(-6).some(v=>v>1);el.querySelector('#hb').setAttribute('opacity',hot?1:.25);if(hot)b=70+R(0,6)|0;el.querySelector('#bpm').innerHTML=seg(820,200,170,pad(b,3),RED)});
}},
{name:'WEATHER STATION',set:'modern',build(el,c){
  let s=tagS(40,36,'SECTOR-3 · COASTAL',28,AMB)+`<g id="tmp"></g>`+svgT(420,290,'°C',90,AMB,'start',.74)+mincT(560,290,'晴',120,AMB)+svgT(40,350,'CLEAR · WIND NE 12 KT',34,AMB,'start',.74);
  s+=chainS(40,380,[['HIGH','27',130],['LOW','18',130],['HUMIDITY','64%',170],['UV','06',110]],AMB,74);
  s+=svgT(40,520,'PRESSURE 1013 HPA',28,AMB,'start',.8)+rulerS(40,540,560,AMB,10,true);
  s+=chamfer(700,36,860,560,18,PHO,2.5)+tab(730,36,'WIND FIELD · 850 HPA',PHO,22)+gridS(720,60,820,520,82,87,PHO,.15);
  let ar='';for(let j=0;j<6;j++)for(let i=0;i<10;i++)ar+=`<g class="ar" data-x="${i}" data-y="${j}" transform="translate(${761+i*82},${103+j*87})"><line x1="-24" y1="0" x2="16" y2="0" stroke-width="4"/><polygon points="28,0 12,-10 12,10"/></g>`;
  s+=`<g id="arrows">${ar}</g>`;
  const days=[['MON','晴',27,18],['TUE','曇',25,17],['WED','雨',21,16],['THU','雨',20,15],['FRI','曇',23,16],['SAT','晴',26,18],['SUN','雪',3,-2]];
  days.forEach(([d,k,hi,lo],i)=>{const x=40+i*217;s+=box(x,640,217,220,AMB,3,'#000')+svgT(x+16,680,d,30,AMB,'start',.84)+mincT(x+108,780,k,80,k==='雨'?SKY:k==='雪'?'#fff':AMB,'middle')+monoT(x+16,840,`${hi}° / ${lo}°`,26,AMB)});
  s+=`<g class="strobe">${tagS(1560-12,652,'FROST WARNING',22,RED,{anchor:'end',solid:true})}</g>`;
  el.innerHTML=sv(s);
  const ars=[...el.querySelectorAll('.ar')];let t=0,temp=23;
  const draw=()=>{ars.forEach(a=>{const x=+a.dataset.x,y=+a.dataset.y;const ang=Math.round((Math.sin(x*.5+t*.3)+Math.cos(y*.7-t*.2))*2.2*4)/4*45;const mag=Math.abs(Math.sin(x*.4+y*.3+t*.2));const col=mag>.8?RED:mag>.45?AMB:PHO;
    a.setAttribute('transform',`translate(${761+x*82},${103+y*87}) rotate(${ang})`);a.setAttribute('stroke',col);a.setAttribute('fill',col)});
    el.querySelector('#tmp').innerHTML=seg(40,96,200,pad(temp),AMB)};
  draw();c.every(AF*2,()=>{t++;if(t%4===0)temp+=pick([-1,0,1]);draw()});
}},
{name:'NOW PLAYING',set:'modern',build(el,c){
  const B=32,SG=16;let s=svgT(40,150,'SIGNAL DECAY',150,AMB,'start',.56)+svgT(40,200,'THE ORBITAL HYDROLOGISTS',36,AMB,'start',.74);
  s+=chainS(40,226,[['TRACK','04/11',140],['FORMAT','DAT 48K',190],['BPM','172',120],['KEY','F# MIN',160]],AMB,70);
  s+=chamfer(40,320,1080,450,18,AMB,2.5)+tab(70,320,'SPECTRUM · 32 BAND',AMB,22);
  for(let b=0;b<B;b++)for(let k=0;k<SG;k++)s+=`<rect class="sp" data-b="${b}" data-k="${k}" x="${62+b*32.8}" y="${740-k*25}" width="27" height="20" fill="#120a06"/>`;
  for(let b=0;b<B;b++)s+=`<rect class="pk" x="${62+b*32.8}" y="740" width="27" height="5" fill="#fff"/>`;
  s+=`<g id="tm"></g>`+svgT(1560,450,'/ 04:51',40,AMB,'end',.74);
  s+=box(1160,486,100,80,AMB,3,'#000')+svgT(1210,540,'◀◀',38,AMB,'middle')+box(1257,486,100,80,AMB,3,AMB)+svgT(1307,540,'▶',38,'#000','middle')+box(1354,486,100,80,AMB,3,'#000')+svgT(1404,540,'▶▶',38,AMB,'middle')+box(1451,486,109,80,AMB,3,'#000')+svgT(1505,536,'RPT',30,AMB,'middle');
  s+=brkS(1160,600,400,170,AMB,24,2)+monoT(1180,640,'NEXT  05 · HALF-LIFE',22,AMB)+monoT(1180,680,'      06 · COOLANT LOOP',22,AMB)+monoT(1180,720,'      07 · PRESSURE SEAL',22,AMB)+monoT(1180,755,'QUEUE 08 TRACKS · 31:07',18,AMB);
  s+=box(40,800,1520,34,AMB,3)+`<rect id="pg" x="43" y="803" width="0" height="28" fill="${AMB}"/>`+rulerS(40,846,1520,AMB,30,false);
  el.innerHTML=sv(s);
  const cells=[...el.querySelectorAll('.sp')],pks=[...el.querySelectorAll('.pk')];const lv=Array(B).fill(0),pk=Array(B).fill(0);let sec=137;
  const colAt=k=>k>12?RED:k>8?AMB:PHO;
  c.every(AF,()=>{for(let b=0;b<B;b++){const tgt=Math.max(0,Math.round((Math.sin(b*.35+performance.now()/300)*.5+.6)*(1-b/48)*SG*R(.6,1.1)));lv[b]=tgt>lv[b]?tgt:Math.max(0,lv[b]-2);pk[b]=Math.max(lv[b],pk[b]-.5)}
    cells.forEach(r=>{const b=+r.dataset.b,k=+r.dataset.k;r.setAttribute('fill',k<lv[b]?colAt(k):'#120a06')});
    pks.forEach((p,b)=>p.setAttribute('y',740-Math.round(pk[b])*25+20));
    sec+=1/12;el.querySelector('#tm').innerHTML=seg(1160,330,110,`${pad(sec/60)}:${pad(sec%60)}`,AMB);el.querySelector('#pg').setAttribute('width',(sec/291*1514).toFixed(1))});
}},
{name:'NAVIGATION',set:'modern',build(el,c){
  const xs=[80,200,280,440,560,720,800,960,1040],ys=[80,180,300,380,520,640,760,840];let s='';
  xs.forEach(x=>s+=`<line x1="${x}" y1="40" x2="${x}" y2="870" stroke="${AMB}" stroke-width="${x===440?7:2.5}" opacity="${x===440?.7:.35}"/>`);
  ys.forEach(y=>s+=`<line x1="40" y1="${y}" x2="1090" y2="${y}" stroke="${AMB}" stroke-width="${y===380?7:2.5}" opacity="${y===380?.7:.35}"/>`);
  for(let i=0;i<14;i++){const x=pick(xs.slice(0,-1)),y=pick(ys.slice(0,-1));s+=monoT(x+10,y+26,'BLK '+pad(R(1,99)|0),15,AMB)}
  s+=svgT(450,470,'KANAL ST.',26,AMB,'start',.8)+svgT(300,372,'RING RD.',26,AMB,'start',.8);
  s+=`<path id="route" class="wire" d="M80 840 H440 V520 H800 V180 H1040" fill="none" stroke="${MNT}" stroke-width="12"/>`;
  s+=chamfer(1010,140,60,80,10,RED,4,'#000')+svgT(1040,192,'B',40,RED,'middle')+tagS(1040,236,'DEST',22,RED,{anchor:'middle'});
  s+=`<g id="me" class="blink">${diamond(0,0,36,'',MNT,MNT)}</g>`;
  s+=chamfer(1120,40,440,820,20,AMB,3)+chamfer(1150,80,380,300,14,AMB,2)+`<path d="M1250 330 V190 H1400" fill="none" stroke="${AMB}" stroke-width="26"/><polygon points="1450,190 1395,145 1395,235" fill="${AMB}"/>`;
  s+=svgT(1150,450,'TURN RIGHT',70,AMB,'start',.56)+svgT(1150,490,'ONTO KANAL ST.',30,AMB,'start',.8)+`<g id="dist"></g>`+svgT(1430,640,'KM',44,AMB,'start',.74);
  s+=chainS(1150,690,[['ETA','14:32',180],['REMAIN','12 MIN',200]],AMB,74)+chainS(1150,770,[['UNIT','07',100],['OPERATOR','K.ROSS',280]],SKY,64);
  s+=rulerS(60,40,240,AMB,2,false)+monoT(60,30,'0       250 M     500 M',16,AMB);
  el.innerHTML=sv(s,'#000','',true);drawWires(el,c.every,8);
  const route=el.querySelector('#route'),me=el.querySelector('#me');const L=route.getTotalLength();let d=0,km=2.4;
  c.every(AF,()=>{d=Math.min(L,d+L/60);const p=route.getPointAtLength(d);me.setAttribute('transform',`translate(${p.x},${p.y})`);km=Math.max(.1,km-.02);el.querySelector('#dist').innerHTML=seg(1150,520,120,km.toFixed(1),AMB)});
}},
{name:'COMMS CHANNEL (CHAT)',set:'modern',build(el,c){
  const chans=[['#OPS',3],['#TELEMETRY',0],['#MAINTENANCE',12],['#SECURITY',1],['#GENERAL',0],['@K.ROSS',2]];
  el.innerHTML=`<div class="fill" style="background:#000;display:grid;grid-template-columns:24cqw 1fr;color:var(--amber)">
   <div style="border-right:.25cqw solid var(--amber);padding:2.5cqw 1.5cqw;display:flex;flex-direction:column;gap:.8cqw">
     <span class="tag" style="font-size:1.8cqw;align-self:flex-start;margin-bottom:1cqw">Channels</span>
     ${chans.map(([n,u],i)=>`<div style="display:flex;align-items:center;justify-content:space-between;padding:.5cqw .8cqw;${i==0?'background:var(--amber);color:#000':''}"><span class="cond" style="font-size:2.4cqw">${n}</span>${u?`<span class="tag ${i==3?'strobe':''}" style="font-size:1.5cqw;${i==3?'color:var(--red)':''}">${pad(u)}</span>`:''}</div>`).join('')}
     <div class="dump" style="margin-top:auto;--dump-size:.8cqw;opacity:.5">${dumpText(6,1)}</div></div>
   <div style="display:flex;flex-direction:column;padding:2.5cqw 3cqw 2cqw;min-width:0">
     <div class="chain" style="font-size:2.2cqw;margin-bottom:1.6cqw"><div class="cell"><small class="hx">Channel</small><span class="cond">#OPS</span></div><div class="cell"><small class="hx">Members</small><span class="cond">14</span></div><div class="cell"><small class="hx">Link</small><span class="cond">ENCRYPTED AES-256</span></div></div>
     <div id="log" style="flex:1;display:flex;flex-direction:column;justify-content:flex-end;overflow:hidden;gap:.9cqw"></div>
     <div class="mono blink" style="font-size:1.3cqw;margin:1cqw 0 .6cqw;opacity:.8">J.OKADA IS TYPING ...</div>
     <div style="border:.2cqw solid var(--amber);padding:.8cqw 1cqw;font:1.6cqw var(--f-mono)">&gt; <span id="inp"></span><span class="blink" style="background:var(--amber)">&nbsp;</span></div></div></div>`;
  const msgs=[['K.ROSS',AMB,'PRESSURE SEAL ON LOOP 3 HOLDING AT 98.2%'],['J.OKADA',SKY,'COPY. ROTATING CREW TO SHAFT 2 AT 14:40'],['SYSTEM',RED,'INTRUSION ATTEMPT BLOCKED · NODE 7F3A'],['M.VANCE',MNT,'TELEMETRY FEED BACK ONLINE'],['K.ROSS',AMB,'WHO HAS THE KEY FOR LOCKER 12'],['J.OKADA',SKY,'CHECK THE BOARD. ALWAYS THE BOARD.'],['SYSTEM',RED,'CONTAINMENT CHECK DUE IN 00:05:00'],['M.VANCE',MNT,'ON IT']];
  const log=el.querySelector('#log');let i=0,clock=14*3600+2*60;const reply='ACKNOWLEDGED. STANDING BY';let ti=0;
  const add=()=>{const [who,col,txt]=msgs[i%msgs.length];i++;clock+=R(4,40)|0;const sys=who==='SYSTEM';
    const d=document.createElement('div');d.style.cssText='display:flex;gap:1.2cqw;align-items:baseline';
    d.innerHTML=`<span class="tag ${sys?'solid strobe-in':''}" style="color:${col};font-size:1.5cqw;flex:none">${who}</span><span class="mono" style="font-size:1.45cqw;color:${sys?'var(--red)':'#e9e0d6'};flex:1">${txt}</span><span class="mono" style="font-size:1.2cqw;opacity:.6">${pad(clock/3600)}:${pad(clock/60%60)}:${pad(clock%60)}</span>`;
    log.appendChild(d);stretchAll(d);while(log.children.length>9)log.firstChild.remove()};
  for(let k=0;k<4;k++)add();c.every(AF*3,add);c.every(AF,()=>{ti=(ti+1)%(reply.length+12);el.querySelector('#inp').textContent=reply.slice(0,ti)});
}},
{name:'DEPLOY PIPELINE (CI/CD)',set:'modern',build(el,c){
  const stg=[['SOURCE',40,180],['BUILD',280,180],['UNIT',600,180],['INTEGRATION',600,180],['E2E',600,180],['SCAN',920,180],['STAGING',1160,180],['DEPLOY',1400,160]];
  let s=chainS(40,30,[['PIPELINE','#4127',190],['BRANCH','MAIN',150],['COMMIT','7F3A12C',220],['TRIGGER','PUSH',150]],AMB,72)+svgT(1400,60,'ELAPSED',22,AMB,'start',.84)+`<g id="el"></g>`;
  s+=chamfer(540,140,300,390,14,AMB,1.5)+tab(560,140,'TEST MATRIX',AMB,20);
  const pos=[[40,270],[280,270],[600,160],[600,290],[600,420],[920,270],[1160,270],[1400,270]];
  stg.forEach(([n,,w],i)=>{const [x,y]=pos[i];s+=`<g id="sg${i}">${chamfer(x,y,w,100,12,'#5a3a20',3,'#000')}${svgT(x+14,y+40,n,30,'#8a6a50','start',.74)}${svgTi('ss'+i,x+14,y+82,'QUEUED',22,'#8a6a50','start',.84)}</g>`});
  s+=wire('M220 320 H280',AMB)+wire('M460 320 H560 V210 H600',AMB)+wire('M560 320 H600',AMB)+wire('M560 320 V470 H600',AMB)+wire('M780 210 H820 V320 H920',AMB)+wire('M780 340 H820',AMB)+wire('M780 470 H820 V320',AMB)+wire('M1100 320 H1160',AMB)+wire('M1340 320 H1400',AMB);
  [[220,320],[280,320],[460,320],[1100,320],[1160,320],[1340,320],[1400,320]].forEach(([x,y])=>s+=dot(x,y,AMB,5));
  s+=`<g id="halt" class="strobe" style="visibility:hidden">${tagS(1560,440,'PIPELINE HALTED',30,RED,{anchor:'end',solid:true})}</g>`;
  s+=chamfer(40,570,1520,300,16,AMB,2)+tab(70,570,'JOB LOG · E2E',AMB,20)+`<g id="lg"></g>`;
  el.innerHTML=sv(s);drawWires(el,c.every,6);
  const order=[0,1,2,3,4,5,6,7],fail=4;let step=0,sub=0,t=0;const lines=[];
  const setS=(i,st)=>{const col=st==='PASS'?MNT:st==='FAIL'?RED:st==='RUNNING'?AMB:'#8a6a50';const g=el.querySelector('#sg'+i);g.querySelector('polygon').setAttribute('stroke',col);g.querySelectorAll('text').forEach(tx=>tx.setAttribute('fill',col));el.querySelector('#ss'+i).textContent=st;g.classList.toggle('blink',st==='RUNNING');g.classList.toggle('strobe',st==='FAIL')};
  c.every(AF,()=>{t++;el.querySelector('#el').innerHTML=seg(1400,70,60,`${pad(t/12/60)}:${pad(t/12%60)}`,AMB);
    lines.push(`[${pad(t,4)}] ${pick(['RUN','ASSERT','FETCH','EXEC','WAIT'])} ${dumpLine(1).slice(14,60)}`);if(lines.length>8)lines.shift();
    el.querySelector('#lg').innerHTML=lines.map((l,i)=>monoT(64,620+i*30,l,20,i===lines.length-1&&step>fail?RED:AMB)).join('');
    if(step>fail)return;sub++;const cur=order[step];setS(cur,'RUNNING');
    if(sub>=2){sub=0;if(cur===fail){setS(cur,'FAIL');el.querySelector('#halt').style.visibility='';lines.push('E2E · SPEC 14/31 · TIMEOUT WAITING FOR PRESSURE SEAL');step=fail+1}else{setS(cur,'PASS');step++}}});
}},
{name:'BRANCH GRAPH (VERSION CONTROL)',set:'modern',build(el,c){
  const lane={main:[200,AMB],'feat/seal':[330,MNT],'feat/telemetry':[460,SKY],'hotfix/7f3a':[590,RED]};let s='';
  Object.entries(lane).forEach(([n,[y,col]])=>{s+=`<line x1="250" y1="${y}" x2="1560" y2="${y}" stroke="${col}" stroke-width="1" opacity=".25" stroke-dasharray="4 8"/>`+tagS(40,y-22,n.toUpperCase(),24,col)});
  const W=(d,col)=>wire(d,col,5);
  s+=W('M260 200 H1560',AMB)+W('M370 200 V330 H700 V200',MNT)+W('M590 200 V460 H1030 V200',SKY)+W('M920 200 V590 H1250 V200',RED);
  const node=(x,y,col,h,sq=true,cls='')=>`<g class="${cls}">${sq?box(x-14,y-14,28,28,col,4,'#000'):diamond(x,y,30,'',col,'#000')}${monoT(x,y+40,h,15,col,'middle')}</g>`;
  [[260,'a3f9c21'],[370,'b81d004'],[480,'c02e9f1'],[590,'d44a7b0'],[810,'e19c3d2'],[920,'f0b2a18'],[1140,'0c7d5e3'],[1360,'19a8f40'],[1470,'2b6e0c9']].forEach(([x,h])=>s+=node(x,200,AMB,h));
  [[480,'7d21aa0'],[590,'8e04f13']].forEach(([x,h])=>s+=node(x,330,MNT,h));s+=node(700,200,MNT,'merge',false);
  [[700,'4fa0c11'],[810,'5b39e72'],[920,'6c88d05']].forEach(([x,h])=>s+=node(x,460,SKY,h));
  s+=node(1030,200,RED,'CONFLICT',false,'strobe')+tagS(1030,96,'MERGE CONFLICT · 3 FILES',24,RED,{anchor:'middle',solid:true,cls:'strobe'});
  s+=node(1030,590,RED,'9d10e7a')+node(1250,200,RED,'hotfix',false);
  s+=chamfer(40,660,1520,210,14,AMB,2)+tab(70,660,'LOG · MAIN',AMB,20)+`<g id="cl"></g>`;
  el.innerHTML=sv(s);drawWires(el,c.every,8);
  const who=['K.ROSS','J.OKADA','M.VANCE'],what=['FIX SEAL PRESSURE CALC','ADD TELEMETRY RETRY','BUMP KERNEL TO 2.0.36','REMOVE DEAD RELAY CODE','TUNE STROBE TO 12 HZ','REVERT LOOP 3 PATCH','DOCUMENT VOTE PROTOCOL'];
  const rows=Array.from({length:5},()=>[hx(7).toLowerCase(),pick(who),pick(what)]);
  const draw=()=>el.querySelector('#cl').innerHTML=rows.map(([h,w,m],i)=>monoT(64,712+i*34,`${h}  ${w.padEnd(8)}  ${m}`,22,i===0?MNT:AMB)).join('');
  draw();c.every(AF*3,()=>{rows.unshift([hx(7).toLowerCase(),pick(who),pick(what)]);rows.pop();draw()});
}},
{name:'SYSTEM MONITOR',set:'modern',build(el,c){
  let s=chainS(40,30,[['NODE','KESTREL-07',260],['KERNEL','2.0.36',170],['UPTIME','412D 07H',220]],AMB,72);
  s+=chamfer(40,130,740,430,16,AMB,2.5)+tab(70,130,'CPU · 16 CORE',AMB,22);
  for(let k=0;k<16;k++){for(let j=0;j<14;j++)s+=`<rect class="cp" data-k="${k}" data-j="${j}" x="${66+k*44}" y="${490-j*24}" width="34" height="19" fill="${DIMG}"/>`;s+=monoT(83+k*44,540,'C'+pad(k),14,AMB,'middle')}
  s+=chamfer(820,130,740,330,16,AMB,2.5)+tab(850,130,'MEMORY · 64 GB',AMB,22);
  for(let j=0;j<9;j++)for(let i=0;i<32;i++)s+=`<rect class="mm" x="${842+i*22.4}" y="${168+j*30}" width="18" height="24" fill="${DIMA}"/>`;
  [['WIRED',RED],['ACTIVE',AMB],['CACHED',SKY],['FREE',DIMA]].forEach(([n,col],i)=>s+=box(842+i*175,446-0,18,18,col,0,col)+monoT(868+i*175,462,n,18,AMB));
  s+=chamfer(820,500,740,370,16,AMB,2.5)+tab(850,500,'PROCESSES',AMB,22)+monoT(842,546,'  PID  NAME              CPU%   MEM',20,AMB)+`<line x1="842" y1="556" x2="1540" y2="556" stroke="${AMB}" stroke-width="2"/><g id="ps"></g>`;
  s+=chamfer(40,600,740,270,16,AMB,2.5)+tab(70,600,'NET · IN / OUT',AMB,22)+gridS(60,630,700,220,70,55,AMB,.15)+`<path id="ni" fill="none" stroke="${MNT}" stroke-width="3"/><path id="no" fill="none" stroke="${SKY}" stroke-width="3"/>`;
  s+=svgT(740,62,'PKG TEMP',22,AMB,'start',.84)+svgT(740,96,'°C',26,AMB,'start',.84)+`<g id="tp"></g>`+`<g id="th" class="strobe" style="visibility:hidden">${tagS(1000,46,'THERMAL LIMIT',22,RED,{solid:true})}</g>`;
  el.innerHTML=sv(s);
  const cps=[...el.querySelectorAll('.cp')],mms=[...el.querySelectorAll('.mm')];const load=Array.from({length:16},()=>R(2,10)|0);
  const inN=Array(29).fill(0).map(()=>R(.2,.6)),outN=inN.map(v=>v*.5);let temp=72;
  const procs=['kestreld','telemetry','vote.drv','oracle','relay-07','sealmon','indexer','cron','shell','netd'].map((n,i)=>({pid:100+i*37,n,cpu:R(0,40),mem:R(10,900)|0}));
  c.every(AF,()=>{load.forEach((v,k)=>load[k]=Math.max(1,Math.min(14,v+(R(-2,2.4)|0))));
    cps.forEach(r=>{const k=+r.dataset.k,j=+r.dataset.j;r.setAttribute('fill',j<load[k]?(j>11?RED:j>8?AMB:PHO):DIMG)});
    const w=60+(R(0,6)|0),a=90+(R(0,10)|0),ca=50+(R(0,8)|0);mms.forEach((m,i)=>m.setAttribute('fill',i<w?RED:i<w+a?AMB:i<w+a+ca?SKY:DIMA));
    inN.shift();inN.push(R(.1,1));outN.shift();outN.push(R(.05,.6));const st=(arr,base)=>{let d=`M60 ${850-arr[0]*200}`;arr.forEach((v,i)=>{if(i)d+=` H${60+i*25} V${850-v*200}`});return d};
    el.querySelector('#ni').setAttribute('d',st(inN));el.querySelector('#no').setAttribute('d',st(outN));
    temp=Math.max(60,Math.min(96,temp+R(-1.5,2.2)));el.querySelector('#tp').innerHTML=seg(860,28,76,pad(temp|0),temp>85?RED:AMB);el.querySelector('#th').style.visibility=temp>85?'':'hidden';
    procs.forEach(p=>{p.cpu=Math.max(0,Math.min(99,p.cpu+R(-6,6)))});const top=[...procs].sort((a,b)=>b.cpu-a.cpu).slice(0,9);
    el.querySelector('#ps').innerHTML=top.map((p,i)=>monoT(842,590+i*30,`${String(p.pid).padStart(5)}  ${p.n.toUpperCase().padEnd(16)} ${p.cpu.toFixed(1).padStart(5)}  ${String(p.mem).padStart(4)}M`,20,p.cpu>60?RED:i==0?MNT:AMB)).join('')});
}},
{name:'AUTHENTICATE (2FA)',set:'modern',build(el,c){
  const wall=wallHTML('Authorization required',24,'4.2cqw','rgba(255,26,46,.13)','padding:.6cqw;gap:.4cqw 2cqw');
  let s=chamfer(470,90,660,720,30,AMB,3,'#000')+chamfer(486,106,628,688,22,AMB,1)+tab(520,90,'TERMINAL 07',AMB,24);
  s+=svgT(800,230,'IDENTIFY',120,AMB,'middle',.56);
  s+=chainS(540,270,[['OPERATOR','K.ROSS',300],['CLEARANCE','LEVEL 3',220]],AMB,76);
  s+=svgT(540,410,'ONE-TIME CODE',24,AMB,'start',.84);
  for(let i=0;i<6;i++)s+=box(540+i*90,430,76,96,AMB,3,'#000')+svgTi('d'+i,578+i*90,500,'',64,AMB,'middle',.9);
  s+=svgTi('st',800,600,'AWAITING INPUT',40,AMB,'middle',.74)+`<g id="deny" style="visibility:hidden"><g class="strobe">${box(520,630,560,90,RED,4,RED)}${svgT(800,692,'ACCESS DENIED',62,'#000','middle',.6)}</g>${monoT(800,760,'ATTEMPT 3/3 · LOCKOUT 00:05:00',22,RED,'middle')}</g>`;
  el.innerHTML=`<div class="fill" style="background:#000;overflow:hidden">${wall}</div>`+sv(s,'transparent');
  let t=0;const st=el.querySelector('#st');
  c.every(AF,()=>{t++;if(t<=6){el.querySelector('#d'+(t-1)).textContent=String(R(0,10)|0)}
    else if(t<=9){st.textContent='VERIFYING'+'.'.repeat(t-6);st.classList.add('blink')}
    else if(t===10){st.textContent='';el.querySelector('#deny').style.visibility='';for(let i=0;i<6;i++)el.querySelector('#d'+i).setAttribute('fill',RED)}});
}},
{name:'SCHEDULE (CALENDAR)',set:'modern',build(el,c){
  // departure-board timeline: days are rows, hours are columns, amber only
  const A=AMB,V='var(--void)',H0=6,H1=22,X0=230,X1=1440,Y0=170,RH=74,CW=(X1-X0)/(H1-H0),TODAY=2,NOW=14.27;
  const XT=h=>X0+(h-H0)*CW;
  const days=[['MON','月'],['TUE','火'],['WED','水'],['THU','木'],['FRI','金'],['SAT','土'],['SUN','日']];
  let s=`<defs><pattern id="ht" width="12" height="12" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="4" height="12" fill="${A}"/></pattern><pattern id="dt" width="10" height="10" patternUnits="userSpaceOnUse"><rect x="4" y="4" width="2" height="2" fill="${A}" opacity=".45"/></pattern></defs>`;
  s+=chainS(40,20,[['WEEK','46',100],['MONTH','NOV',120],['YEAR','2026',130],['ZONE','JST',110]],A,70);
  s+=chamfer(820,20,740,70,12,A,2.5)+svgT(840,52,'DEPARTURES · OPERATIONS BOARD 03',24,A,'start',.84)+monoT(840,78,'SOLID = CONFIRMED  OUTLINE = TENTATIVE  HATCH = BLOCKED',16,A);
  // hour header with minor ticks
  for(let h=H0;h<=H1;h++){const x=XT(h);s+=`<line x1="${x}" y1="${Y0-30}" x2="${x}" y2="${Y0-6}" stroke="${A}" stroke-width="2"/>`;if(h<H1){s+=monoT(x+6,Y0-12,pad(h),20,A);for(let q=1;q<4;q++)s+=`<line x1="${x+q*CW/4}" y1="${Y0-14}" x2="${x+q*CW/4}" y2="${Y0-6}" stroke="${A}" stroke-width="1.5"/>`}}
  s+=`<line x1="${X0}" y1="${Y0-6}" x2="${X1}" y2="${Y0-6}" stroke="${A}" stroke-width="3"/>`;
  const names=['STANDUP','SEAL AUDIT','1:1','LOOP 3 MAINT.','VOTE REVIEW','RELAY TESTS','DRILL','SHIFT HANDOVER','BRIEFING','CALIBRATION','INVENTORY','REPORT DUE','TRAINING','PATROL'];
  let rows='';const today=[];
  days.forEach(([d,k],r)=>{const y=Y0+r*RH,on=r===TODAY;
    rows+=`<g class="row" style="visibility:hidden">`;
    rows+=box(40,y+4,180,RH-8,A,3,on?A:'#000')+svgT(56,y+48,d,36,on?'#000':A,'start',.74)+mincT(206,y+50,k,34,on?'#000':A,'end');
    rows+=`<rect x="${X0}" y="${y+6}" width="${X1-X0}" height="${RH-12}" fill="url(#dt)"/>`;
    let t=H0+pick([0,.25,.5]);let n=0;
    while(t<H1-.5){const dur=Math.min(pick([.5,.75,1,1,1.5,2,3]),H1-t);const kind=r>=5&&Math.random()<.6?'h':pick(['s','s','o','h']);
      const crit=on&&!today.some(e=>e.crit)&&t>=14.5;const name=crit?'CONTAINMENT CHECK':pick(names);
      const x=XT(t)+2,w=dur*CW-4,yy=y+8,hh=RH-16;const fill=crit||kind==='s'?A:kind==='h'?'url(#ht)':V;const ink=crit||kind==='s'?'#000':A;
      rows+=`<g class="${crit?'strobe':''}">${box(x,yy,w,hh,A,2.5,fill)}`;
      const fits=name.length*22*.6*.74+16<w;const lab=fits?name:name.slice(0,2);
      if(kind==='h'&&!crit)rows+=`<rect x="${x+6}" y="${yy+8}" width="${Math.min(w-12,lab.length*10+16)}" height="${30}" fill="#000"/>`;
      rows+=svgT(x+10,yy+30,lab,22,ink,'start',.74)+(w>70?monoT(x+10,yy+hh-8,`${pad(t)}:${pad((t%1)*60)}`,15,ink):'')+'</g>';
      if(on)today.push({t,name,dur,crit});t+=dur+pick([0,0,.25,.5,1]);n++}
    rows+=monoT(1560,y+34,pad(n)+' EV',20,A,'end')+monoT(1560,y+60,'LOAD '+(55+R(0,40)|0)+'%',16,A,'end')+'</g>'});
  s+=rows+`<g id="now"></g>`;
  s+=chamfer(40,712,860,170,14,A,2.5)+tab(66,712,'TODAY · WED 水',A,22)+`<g id="ag"></g>`;
  s+=chamfer(930,712,630,170,14,A,2.5)+tab(956,712,'NEXT · CONTAINMENT CHECK',A,22)+`<g id="nx"></g>`;
  el.innerHTML=sv(s);
  const rs=[...el.querySelectorAll('.row')];let i=0,nowH=NOW,rem=43*60+12;
  el.querySelector('#ag').innerHTML=today.slice(0,5).map((e,k)=>monoT(64,758+k*25,`${pad(e.t)}:${pad((e.t%1)*60)}  ${e.name.padEnd(18)} ${(e.dur*60|0)} MIN${e.crit?'  ** CRITICAL **':''}`,19,A)).join('');
  c.every(AF,()=>{for(let k=0;k<2&&i<rs.length;k++)rs[i++].style.visibility='visible';
    nowH+=.002;rem=Math.max(0,rem-1);const x=XT(nowH);
    el.querySelector('#now').innerHTML=`<line x1="${x}" y1="${Y0-34}" x2="${x}" y2="${Y0+7*RH}" stroke="${A}" stroke-width="4"/>`+`<rect x="${x-62}" y="${Y0-64}" width="124" height="30" fill="${A}"/>`+svgT(x,Y0-42,'NOW 14:16',22,'#000','middle',.84)+`<rect x="${x-7}" y="${Y0+TODAY*RH+RH/2-7}" width="14" height="14" fill="#000" stroke="${A}" stroke-width="3"/>`;
    el.querySelector('#nx').innerHTML=seg(956,746,110,`${pad(rem/3600)}:${pad(rem/60%60)}:${pad(rem%60)}`,A)});
}}

];
