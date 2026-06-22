// Self-contained build for the Unicity x Greg Kidd / Hard Yaka seed deck. Run: node greg-kidd/build.mjs
import fs from 'node:fs';
import { pathToFileURL, fileURLToPath } from 'node:url';
import path from 'node:path';
const DIR=path.dirname(fileURLToPath(import.meta.url));
const ROOT=path.resolve(DIR,'..');
const R=path.resolve(ROOT,'node_modules');
const puppeteer=(await import(pathToFileURL(R+'/puppeteer/lib/cjs/puppeteer/puppeteer.js').href)).default;
const { PDFDocument }=await import(pathToFileURL(R+'/pdf-lib/cjs/index.js').href);
const defs=fs.readFileSync(path.join(DIR,'assets','logo-defs.html'),'utf8');
fs.mkdirSync(path.join(DIR,'slides'),{recursive:true});
const DG={}; for(const k of ['xform','oracle','compliance','swap','hub','trilemma']){
  let s=fs.readFileSync(`${DIR}/diagrams/${k}.svg`,'utf8').replace(/max-height:\s*\d+px/g,'height:auto');
  if(k==='xform') s=s.replace(/font-size="38"/g,'font-size="21"');
  if(k==='swap'){ s=s.replace(/<text x="0" y="38"[\s\S]*?<\/text>/,'').replace(/<text x="0" y="74"[\s\S]*?<\/text>/,'').replace('viewBox="0 0 1000 560"','viewBox="0 100 1000 462"'); }
  DG[k]=s;
}
const dia=(k,maxw)=>`<div style="width:100%;max-width:${maxw}px;margin:0 auto">${DG[k]}</div>`;

const CSS=`
:root{--bg:#060606;--ink:#FEFEFE;--o:#FF6A1F;--dim:#B8B8B2;--faint:#74746E;--rule:#242422;--card:#101010;--owash:rgba(255,106,31,.07);--oline:rgba(255,106,31,.42);--bad:#8a8a84;
--s2:16px;--s3:24px;--s4:32px;--s5:48px;--mx:80px;}
*{margin:0;padding:0;box-sizing:border-box}
body{background:#000}
.slide{position:relative;width:1600px;height:900px;background:var(--bg);color:var(--ink);overflow:hidden;font-family:"Geist Mono",monospace;-webkit-font-smoothing:antialiased}
.grid{position:absolute;inset:0;z-index:0;background-image:linear-gradient(rgba(255,255,255,.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.02) 1px,transparent 1px);background-size:64px 64px}
.glow{position:absolute;inset:0;z-index:0;background:radial-gradient(ellipse 60% 50% at 50% 50%,rgba(255,106,31,.08),transparent 70%)}
.pad{position:relative;z-index:2;height:100%;padding:54px var(--mx) 84px;display:flex;flex-direction:column;justify-content:center}
.pad.cover{align-items:center;text-align:center}
.kick{font-size:12px;letter-spacing:.3em;text-transform:uppercase;color:var(--faint)}
.kick b{color:var(--o);font-weight:400}
h2{font-family:"Anton",sans-serif;font-weight:400;text-transform:uppercase;font-size:33px;line-height:1.1;letter-spacing:.005em;margin-top:13px}
h2 .o{color:var(--o)}
.lead{margin-top:16px;font-size:15px;line-height:1.62;color:var(--dim);max-width:98ch}
.lead b{color:var(--ink);font-weight:600}.lead .o{color:var(--o);font-weight:600}
.dwrap{margin-top:40px;display:flex;justify-content:center}
.punch{margin-top:var(--s4);padding:0 0 0 var(--s2);border-left:2px solid var(--o);font-size:16.5px;line-height:1.45;color:var(--ink);font-weight:500;max-width:78ch}
.punch .o{color:var(--o)}
.cols{display:flex;gap:56px;align-items:center;margin-top:40px}
.col{flex:1;min-width:0}
/* big stat */
.statline{display:flex;align-items:center;gap:48px;margin-top:44px}
.mega{font-family:"Anton",sans-serif;font-size:200px;line-height:.8;color:var(--o);letter-spacing:-.01em}
.megaq{font-size:13px;letter-spacing:.06em;text-transform:uppercase;color:var(--faint);margin-top:10px;max-width:30ch;line-height:1.5}
/* principle rows */
.principle{margin-top:40px}
.principle .pr{display:flex;align-items:center;gap:var(--s4);padding:30px 0;border-top:1px solid var(--rule)}
.principle .pr:last-child{border-bottom:1px solid var(--rule)}
.principle .a{color:var(--o);font-family:"Anton",sans-serif;font-size:18px}
.principle .t{color:var(--dim);font-size:15px}.principle .t b{color:var(--ink);font-weight:600;display:block;font-size:19px;margin-bottom:4px;font-family:"Anton",sans-serif;letter-spacing:.01em;text-transform:uppercase}
.principle .r{margin-left:auto;font-size:11.5px;letter-spacing:.14em;text-transform:uppercase;white-space:nowrap}
.ok{color:#9a9a92} .open{color:var(--o)}
.note{margin-top:var(--s4);font-size:13px;color:var(--faint);letter-spacing:.02em}
/* 3-col row (team stats / proof cards) */
.row3{display:flex;gap:18px;margin-top:44px}
.cell{flex:1;border:1px solid var(--rule);border-top:2px solid var(--o);border-radius:8px;background:var(--card);padding:24px 22px}
.cell .v{font-family:"Anton",sans-serif;font-size:30px;color:var(--ink)}.cell .v .o{color:var(--o)}
.cell .ct{font-family:"Anton",sans-serif;font-size:15px;letter-spacing:.04em;text-transform:uppercase;color:var(--o)}
.cell .k{font-size:12px;color:var(--dim);margin-top:12px;letter-spacing:.02em;line-height:1.5}
.cell .repo{font-size:11px;color:var(--faint);margin-top:14px}
.foot{position:absolute;left:var(--mx);right:var(--mx);bottom:30px;z-index:2;display:flex;justify-content:space-between;align-items:center;border-top:1px solid var(--rule);padding-top:14px;font-size:9.5px;letter-spacing:.16em;text-transform:uppercase;color:var(--faint)}
.foot .lg svg{height:13px;width:auto;opacity:.8}
.askbox{margin-top:40px;border:1px solid var(--oline);border-radius:10px;background:linear-gradient(180deg,var(--owash),transparent);padding:26px 30px}
.askbox .big{font-family:"Anton",sans-serif;font-size:26px;color:var(--ink)}.askbox .big .o{color:var(--o)}
.askbox .ml{font-size:14px;color:var(--dim);margin-top:12px;line-height:1.55;max-width:104ch}.askbox .ml b{color:var(--ink)}
.recap{margin-top:var(--s4);font-size:15px;color:var(--dim);line-height:1.6;max-width:none}.recap b{color:var(--ink)}
/* statement slide */
.statement{font-family:"Anton",sans-serif;text-transform:uppercase;font-size:60px;line-height:1.04;letter-spacing:.004em;text-align:center}
.statement .o{color:var(--o)}
.crule{height:1px;width:280px;background:linear-gradient(90deg,transparent,var(--oline),transparent);margin:36px auto}
.sub{font-size:15px;line-height:1.6;color:var(--dim);max-width:64ch;text-align:center;margin:0 auto}
.fp{margin-top:44px;font-size:10.5px;letter-spacing:.26em;text-transform:uppercase;color:var(--faint)}
`;

const kick=(n,t)=>`<div class="kick">${String(n).padStart(2,'0')} · ${t}</div>`;
let T=0;
const foot=(n)=>`<div class="foot"><span class="lg"><svg viewBox="0 0 641 128"><use href="#ulogo"/></svg></span><span>Unicity · Seed proposal · Confidential — for Greg Kidd</span><span>${String(n).padStart(2,'0')} / ${T}</span></div>`;
// diagram slide: header (kicker + 1-line headline + 1 lead) then a BIG diagram that fills
const DS=(n,kk,h,lead,diagram,punch='')=>`<div class="slide"><div class="grid"></div><div class="pad"><div class="hdr">${kick(n,kk)}<h2>${h}</h2><div class="lead">${lead}</div></div><div class="dwrap">${diagram}</div>${punch?`<div class="punch">${punch}</div>`:''}</div>${foot(n)}</div>`;

const SL=[
// 1 COVER — statement
n=>`<div class="slide"><div class="grid"></div><div class="glow"></div>
<div class="pad cover">
  <svg viewBox="0 0 641 128" style="height:96px;width:auto"><use href="#ulogo"/></svg>
  <div class="crule" style="margin:52px auto 48px"></div>
  <div class="statement" style="font-size:46px;line-height:1.16">Cut out the middleman.<br>Move the value freely.<br><span class="o">Prove who is on the other end.</span></div>
  <div class="sub" style="margin-top:42px;max-width:74ch">Fair access takes all three. The first two were solved a decade ago. The third — a dollar that knows who may receive it — is what Unicity builds.</div>
  <div class="fp">Tallinn · Zug · Abu Dhabi</div>
</div></div>`,

// 2 THE THREE PROBLEMS — big full-width rows fill
n=>`<div class="slide"><div class="grid"></div><div class="pad"><div class="hdr">${kick(n,'FAIR ACCESS · <b>THE THREE PROBLEMS</b>')}<h2>The hard one: <span class="o">proving who is on the other end.</span></h2></div>
  <div class="principle">
    <div class="pr"><span class="a">01</span><div class="t"><b>Cut out the middleman</b>A decade of open infrastructure settled it.</div><div class="r ok">solved</div></div>
    <div class="pr"><span class="a">02</span><div class="t"><b>Let value move freely</b>Stablecoins now move hundreds of billions a year.</div><div class="r ok">solved</div></div>
    <div class="pr"><span class="a">03</span><div class="t"><b>Prove who is on the other end</b>So the money itself knows who may receive it.</div><div class="r open">still open</div></div>
  </div>
  <div class="note">The rest of this is how the money proves it — with the math, and the team behind it.</div>
</div>${foot(n)}</div>`,

// 3 THE FIELD — 2-col text + chart
n=>`<div class="slide"><div class="grid"></div><div class="pad"><div class="hdr">${kick(n,'THE FIELD · <b>IDENTITY, AND WHERE IT STOPPED</b>')}<h2>Identity reached the right architecture <span class="o">before the market could carry it.</span></h2></div>
  <div class="cols"><div class="col" style="flex:1.15">
    <div class="lead" style="margin-top:0;max-width:none">GlobaliD had it early; the field stalled at the same wall — Microsoft retired did:ion in 2023, Trinsic wound down. The credential lived beside the transaction, and a check that can be skipped gets skipped.</div>
    <div class="lead" style="max-width:none">USBC drew the right conclusion: put identity inside the dollar. Inside one charter it settles. Across strangers, it does not.</div>
  </div><div class="col" style="flex:1">
    <svg width="100%" viewBox="0 0 520 300" style="height:auto">
      <line x1="52" y1="252" x2="492" y2="252" stroke="#2a2a26"/><line x1="52" y1="44" x2="52" y2="252" stroke="#2a2a26"/>
      <path d="M52 246 L190 184 L300 142 L398 130 L492 126" fill="none" stroke="var(--bad)" stroke-width="2.5"/>
      <circle cx="300" cy="142" r="5" fill="#0E0E0C" stroke="var(--bad)" stroke-width="1.5"/><text x="300" y="122" fill="var(--faint)" font-family="Geist Mono" font-size="13" text-anchor="middle">did:ion retired, 2023</text>
      <circle cx="398" cy="130" r="5" fill="#0E0E0C" stroke="var(--bad)" stroke-width="1.5"/><text x="398" y="110" fill="var(--faint)" font-family="Geist Mono" font-size="13" text-anchor="middle">Trinsic winds down</text>
      <text x="272" y="282" fill="var(--faint)" font-family="Geist Mono" font-size="13" text-anchor="middle">digital identity — climbs, then flattens</text>
    </svg>
  </div></div>
</div>${foot(n)}</div>`,

// 4 THE MACHINE ECONOMY — big mega
n=>`<div class="slide"><div class="grid"></div><div class="glow"></div><div class="pad"><div class="hdr">${kick(n,'WHAT CHANGED · <b>THE MACHINE ECONOMY</b>')}<h2>Most of the traffic online is already machines — <span class="o">and they have started paying each other.</span></h2></div>
  <div class="statline"><div style="flex:none"><div class="mega">57.5%</div><div class="megaq">of web requests are automated, not human — Cloudflare, 2026</div></div>
  <div style="flex:1">
    <div class="lead" style="margin-top:0;max-width:none;font-size:16px">Those machines have begun settling value directly — roughly <b>100 million payments on Base in nine months</b> (Chainalysis). A machine cannot wait on hold while an intermediary clears it.</div>
    <div class="punch" style="margin-top:28px">At machine speed, <span class="o">the check has to travel with the money.</span></div>
  </div></div>
</div>${foot(n)}</div>`,

// 5 OFF THE LEDGER — big xform
n=>DS(n,'HOW IT WORKS · <b>OFF THE LEDGER</b>',
  'A dollar on-chain is a row in <span class="o">a ledger someone else keeps.</span>',
  'Unicity makes it a bearer file: it carries its own value, moves directly between two parties the way cash changes hands, and the recipient verifies it on arrival against the token alone.',
  dia('xform',1360)),

// 6 ONE QUESTION — 2-col text + oracle
n=>`<div class="slide"><div class="grid"></div><div class="pad"><div class="hdr">${kick(n,'HOW IT WORKS · <b>ONE QUESTION</b>')}<h2>The only job a chain ever had: <span class="o">has this been spent?</span></h2></div>
  <div class="cols"><div class="col" style="flex:1.05">
    <div class="lead" style="margin-top:0;max-width:none;font-size:16px">Every other job a blockchain took on was built on top of that one answer.</div>
    <div class="lead" style="max-width:none">The oracle holds a proof that each token state is unique — it returns spent or unspent, and never sees the payment.</div>
  </div><div class="col" style="flex:1.1">${dia('oracle',640)}</div></div>
</div>${foot(n)}</div>`,

// 7 THE RULE INSIDE THE TOKEN — big compliance
n=>DS(n,'HOW IT WORKS · <b>THE RULE INSIDE THE TOKEN</b>',
  'The rule lives <span class="o">inside the token.</span>',
  'Each token carries its own receive-condition — KYC, jurisdiction, sanctions. A transfer to a party that fails it cannot be constructed: there is no issuer to call, and no monitor reading the flow afterward.',
  dia('compliance',1280),
  'Manage the risk inside the asset, and <span class="o">there is no flow left to catch afterward.</span>'),

// 8 THE TRADEOFF — 2-col text + trilemma
n=>`<div class="slide"><div class="grid"></div><div class="pad"><div class="hdr">${kick(n,'THE CONSEQUENCE · <b>THE TRADEOFF DISSOLVES</b>')}<h2>Privacy, compliance, and speed pull against each other <span class="o">on a shared ledger.</span></h2></div>
  <div class="cols"><div class="col" style="flex:1.1">
    <div class="lead" style="margin-top:0;max-width:none;font-size:16px">Make payments private and the auditors go blind; add the cryptography that lets them see again and throughput collapses toward one a second.</div>
    <div class="lead" style="max-width:none">Remove the shared ledger, and the three have nothing left to contend over.</div>
  </div><div class="col" style="flex:.9">${dia('trilemma',560)}</div></div>
</div>${foot(n)}</div>`,

// 9 THE TRADE — big swap
n=>DS(n,'THE CONSEQUENCE · <b>THE TRADE</b>',
  'The hard part of cash-like money is <span class="o">the trade.</span>',
  'Two parties swap with no one in the middle to hold both legs. The old fix is a timed lock, and the clock is the attack surface — one side stalls and walks. Unicity drops the clock: both commit independently, and the swap forms for both at once or never.',
  dia('swap',1180)),

// 10 THE MACHINE MARKET — big hub
n=>DS(n,'WHERE IT LEADS · <b>THE MACHINE MARKET</b>',
  'When two agents settle directly, <span class="o">the exchange in the middle has nothing left to do.</span>',
  'At volume, trustless transfers compose into a market that coordinates itself. Agentic data reaches scale first — an agent buys a dataset, an attestation, a unit of compute, and the payment settles in the same step that proves what it is.',
  dia('hub',1080)),

// 11 THE TEAM — header + body + 3-col stat row
n=>`<div class="slide"><div class="grid"></div><div class="pad"><div class="hdr">${kick(n,'WHO WE ARE · <b>THE KSI TEAM</b>')}<h2>The team that built the system <span class="o">Estonia's e-government runs on.</span></h2>
  <div class="lead">KSI has secured Estonia's e-government records in production since 2012. The same design held 300,000 transactions a second in Eesti Pank's 2021 digital-currency test — the lineage we come from. The core is live and open-source; full credential support is still being built. We are protocol engineers, not lawyers.</div></div>
  <div class="row3">
    <div class="cell"><div class="v">2012</div><div class="k">KSI securing Estonia's e-government records in production, eIDAS-grade</div></div>
    <div class="cell"><div class="v"><span class="o">300,000</span>/s</div><div class="k">held in Eesti Pank's 2021 digital-currency test — the team's KSI design</div></div>
    <div class="cell"><div class="v">Open source</div><div class="k">the core runs today; we will show you exactly what is built and what is not</div></div>
  </div>
</div>${foot(n)}</div>`,

// 12 PROOF — header + body + 3-col cards
n=>`<div class="slide"><div class="grid"></div><div class="pad"><div class="hdr">${kick(n,'PROOF · <b>READ THE MATH</b>')}<h2>The white paper is marketing. <span class="o">The work is three math papers.</span></h2>
  <div class="lead">Drop them into any model and it will check the proofs: privacy on both sides, no double-spend. Throughput is a sharding result. Public on GitHub, open to anyone who wants to read them.</div></div>
  <div class="row3">
    <div class="cell"><div class="ct">Aggregation</div><div class="k">Off-chain and offline tokens; zero-knowledge proofs, no trusted setup.</div><div class="repo">github.com/unicitynetwork/aggr-layer-paper</div></div>
    <div class="cell"><div class="ct">Execution</div><div class="k">No double-spend; privacy held service-side and user-side.</div><div class="repo">github.com/unicitynetwork/execution-model-tex</div></div>
    <div class="cell"><div class="ct">Predicates &amp; swaps</div><div class="k">The rule lives in the token; two parties trade with no one between them.</div><div class="repo">github.com/unicitynetwork/unicity-predicates-tex</div></div>
  </div>
</div>${foot(n)}</div>`,

// 13 THE ASK — header + ask box + recap + big finale
n=>`<div class="slide"><div class="grid"></div><div class="glow"></div><div class="pad"><div class="hdr">${kick(n,'THE ASK · <b>CO-BUILD</b>')}<h2>Put the rule where the money is, <span class="o">and make it hold between strangers.</span></h2></div>
  <div class="askbox">
    <div class="big">Raising <span class="o">$5M Seed</span> · $25M cap / $50M token FDV · SAFE + token warrant.</div>
    <div class="ml">First build: a <b>USBC dollar that settles the moment the credential checks out</b> — the rule travels inside the money, so a transfer that cannot satisfy it is never constructed.</div>
  </div>
  <div class="recap">The first two problems were solved a decade ago. The third — <b>money that knows who may receive it, between strangers, at machine speed</b> — is the part we built.</div>
  <div class="statement" style="font-size:34px;text-align:left;margin-top:40px;max-width:none">A single charter settles at home.<br><span class="o">This is the layer that carries the same rule between two banks, or two machines, that share nothing else.</span></div>
</div>${foot(n)}</div>`,
];

T=SL.length;
const S=SL.map((f,i)=>f(i+1));

const html=`<!DOCTYPE html><html><head><meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Anton&family=Geist+Mono:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>${CSS}</style></head><body>${defs}
<div style="display:flex;flex-direction:column;align-items:center;gap:24px;padding:24px;background:#000">${S.join('\n')}</div></body></html>`;
fs.writeFileSync(DIR+'/index.html',html);
console.log('wrote index.html ('+S.length+' slides)');

const b=await puppeteer.launch({headless:'new',args:['--no-sandbox']});
const p=await b.newPage(); await p.setViewport({width:1680,height:960,deviceScaleFactor:2});
await p.goto('file://'+DIR+'/index.html',{waitUntil:'networkidle0'}); await new Promise(r=>setTimeout(r,900));
const wraps=await p.evaluate(()=>Array.from(document.querySelectorAll('.pad:not(.cover) > .hdr > h2, .pad > .hdr h2')).map(h=>({t:h.textContent.slice(0,24),lines:Math.round(h.getBoundingClientRect().height/(parseFloat(getComputedStyle(h).lineHeight)))})));
console.log('headline line-counts:', JSON.stringify(wraps));
const els=await p.$$('.slide'); const pngs=[];
for(let i=0;i<els.length;i++){const fp=`${DIR}/slides/slide-${String(i+1).padStart(2,'0')}.png`;await els[i].screenshot({path:fp});pngs.push(fp);}
await b.close(); console.log('rendered',pngs.length,'PNGs');
const pdf=await PDFDocument.create();
for(const fp of pngs){const img=await pdf.embedPng(fs.readFileSync(fp));const pg=pdf.addPage([1600,900]);pg.drawImage(img,{x:0,y:0,width:1600,height:900});}
fs.writeFileSync(DIR+'/Unicity_HardYaka_Seed_Deck.pdf',await pdf.save());
console.log('wrote Unicity_HardYaka_Seed_Deck_v9.pdf');
