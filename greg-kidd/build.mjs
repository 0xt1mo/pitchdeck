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
const dia=(k,maxw,mt=32)=>`<div style="width:100%;max-width:${maxw}px;margin:${mt}px auto 0">${DG[k]}</div>`;

const CSS=`
:root{--bg:#060606;--ink:#FEFEFE;--o:#FF6A1F;--dim:#B8B8B2;--faint:#74746E;--rule:#242422;--card:#101010;--owash:rgba(255,106,31,.07);--oline:rgba(255,106,31,.42);--bad:#8a8a84;
--s1:8px;--s2:16px;--s3:24px;--s4:32px;--s5:48px;--s6:64px;--mx:84px;--mt:60px;--mb:96px;}
*{margin:0;padding:0;box-sizing:border-box}
body{background:#000}
.slide{position:relative;width:1600px;height:900px;background:var(--bg);color:var(--ink);overflow:hidden;font-family:"Geist Mono",monospace;-webkit-font-smoothing:antialiased}
.grid{position:absolute;inset:0;z-index:0;background-image:linear-gradient(rgba(255,255,255,.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.02) 1px,transparent 1px);background-size:64px 64px}
.glow{position:absolute;inset:0;z-index:0;background:radial-gradient(ellipse 60% 50% at 50% 46%,rgba(255,106,31,.08),transparent 70%)}
.pad{position:relative;z-index:2;height:100%;padding:var(--mt) var(--mx) var(--mb);display:flex;flex-direction:column;justify-content:flex-start}
.pad.cover{justify-content:center;align-items:center;text-align:center}
.head{flex:0 0 auto;min-height:150px}
.body{flex:1 1 auto;display:flex;flex-direction:column;justify-content:flex-start;padding-top:var(--s4)}
.anton{font-family:"Anton",sans-serif;font-weight:400;text-transform:uppercase;letter-spacing:.01em}
.kick{font-size:12px;letter-spacing:.3em;text-transform:uppercase;color:var(--faint)}
.kick b{color:var(--o);font-weight:400}
h2{font-family:"Anton",sans-serif;font-weight:400;text-transform:uppercase;font-size:38px;line-height:1.04;letter-spacing:.004em;margin-top:var(--s2);max-width:24ch;text-wrap:balance}
h2 .o{color:var(--o)}
.lead{margin-top:0;font-size:15px;line-height:1.6;color:var(--dim);max-width:72ch}
.lead b{color:var(--ink);font-weight:600}.lead .o{color:var(--o);font-weight:600}
.punch{margin-top:var(--s3);padding:0 0 0 var(--s2);border-left:2px solid var(--o);font-size:16.5px;line-height:1.45;color:var(--ink);font-weight:500;max-width:74ch}
.punch .o{color:var(--o)}
.cols{display:flex;gap:var(--s6);align-items:flex-start;padding-top:0}
.col{flex:1;min-width:0}
.mega{font-family:"Anton",sans-serif;font-size:168px;line-height:.82;color:var(--o);letter-spacing:-.01em}
.megaq{font-size:12.5px;letter-spacing:.1em;text-transform:uppercase;color:var(--faint);margin-top:var(--s2);max-width:30ch;line-height:1.4}
.principle{margin-top:0;max-width:none}
.principle .pr{display:flex;align-items:baseline;gap:var(--s3);padding:var(--s2) 0;border-top:1px solid var(--rule)}
.principle .pr:last-child{border-bottom:1px solid var(--rule)}
.principle .a{color:var(--o);font-family:"Anton",sans-serif;font-size:16px}
.principle .t{color:var(--dim);font-size:15px}.principle .t b{color:var(--ink);font-weight:600;display:block;font-size:17px;margin-bottom:3px;font-family:"Anton",sans-serif;letter-spacing:.01em;text-transform:uppercase}
.principle .r{margin-left:auto;font-size:11px;letter-spacing:.12em;text-transform:uppercase;white-space:nowrap}
.ok{color:#9a9a92} .open{color:var(--o)}
.note{margin-top:var(--s3);font-size:12.5px;color:var(--faint);letter-spacing:.02em}
.stats{display:flex;flex-direction:column;gap:var(--s2)}
.stat{border:1px solid var(--rule);border-radius:7px;background:var(--card);padding:15px 17px}
.stat .v{font-family:"Anton",sans-serif;font-size:22px;color:var(--ink)}.stat .v .o{color:var(--o)}
.stat .k{font-size:11px;color:var(--faint);margin-top:5px;letter-spacing:.04em;line-height:1.45}
.foot{position:absolute;left:var(--mx);right:var(--mx);bottom:28px;z-index:2;display:flex;justify-content:space-between;align-items:center;border-top:1px solid var(--rule);padding-top:13px;font-size:9.5px;letter-spacing:.16em;text-transform:uppercase;color:var(--faint)}
.foot .lg svg{height:13px;width:auto;opacity:.8}
.cardrow{display:flex;gap:var(--s2);margin-top:var(--s4)}
.c3{flex:1;border:1px solid var(--rule);border-left:2px solid var(--o);border-radius:6px;background:var(--card);padding:16px 18px}
.c3 .ct{font-family:"Anton",sans-serif;font-size:14px;letter-spacing:.04em;text-transform:uppercase;color:var(--o)}
.c3 .cb{font-size:12.5px;line-height:1.5;color:var(--dim);margin-top:9px}.c3 .cb b{color:var(--ink);font-weight:600}
.askbox{margin-top:0;border:1px solid var(--oline);border-radius:8px;background:linear-gradient(180deg,var(--owash),transparent);padding:20px 26px}
.askbox .big{font-family:"Anton",sans-serif;font-size:22px;color:var(--ink)}.askbox .big .o{color:var(--o)}
.askbox .ml{font-size:13px;color:var(--dim);margin-top:9px;line-height:1.55}.askbox .ml b{color:var(--ink)}
.recap{margin-top:var(--s3);font-size:15px;color:var(--dim);line-height:1.6;max-width:84ch}.recap b{color:var(--ink)}
.finale{margin-top:var(--s3);font-family:"Anton",sans-serif;text-transform:uppercase;font-size:28px;line-height:1.08;letter-spacing:.003em;color:var(--ink);max-width:34ch;text-wrap:balance}
.finale .o{color:var(--o)}
.src{position:absolute;left:var(--mx);bottom:54px;font-size:9.5px;letter-spacing:.06em;color:var(--faint);z-index:2}
/* cover */
.cover-stack{display:flex;flex-direction:column;align-items:center;gap:var(--s5)}
.cover-stack .rule{height:1px;width:240px;background:linear-gradient(90deg,transparent,var(--oline),transparent)}
.cover-stack h2{font-size:50px;line-height:1.02;letter-spacing:-.004em;max-width:22ch;margin-top:0;text-align:center}
.cover-stack .sub{font-size:14px;line-height:1.6;color:var(--dim);max-width:52ch}
.cover-stack .fp{margin-top:var(--s2);font-size:10.5px;letter-spacing:.24em;text-transform:uppercase;color:var(--faint)}
`;

const kick=(n,t)=>`<div class="kick">${String(n).padStart(2,'0')} · ${t}</div>`;
let T=0;
const foot=(n)=>`<div class="foot"><span class="lg"><svg viewBox="0 0 641 128"><use href="#ulogo"/></svg></span><span>Unicity · Seed proposal · Confidential — for Greg Kidd</span><span>${String(n).padStart(2,'0')} / ${T}</span></div>`;
// body-slide wrapper: fixed header zone (kicker+h2) + content zone
const S2=(n,kk,h,bodyHtml,hStyle='')=>`<div class="slide"><div class="grid"></div><div class="pad"><div class="head">${kick(n,kk)}<h2${hStyle?` style="${hStyle}"`:''}>${h}</h2></div><div class="body">${bodyHtml}</div></div>${foot(n)}</div>`;

const SL=[
// 1 COVER — four tiers, one rhythm
n=>`<div class="slide"><div class="grid"></div><div class="glow"></div>
<div class="pad cover"><div class="cover-stack">
  <svg viewBox="0 0 641 128" style="height:58px;width:auto"><use href="#ulogo"/></svg>
  <div class="rule"></div>
  <h2 class="anton">Fair access has always come down to <span class="o">three problems</span>. The third is still open.</h2>
  <div class="sub">The first two were solved a decade ago. The third is the part Unicity builds.</div>
  <div class="fp">Tallinn · Zug · Abu Dhabi</div>
</div></div></div>`,

// 2 THE THREE PROBLEMS
n=>S2(n,'FAIR ACCESS · <b>THE THREE PROBLEMS</b>',
  'Two were solved a decade ago.<br>The third is <span class="o">the hard one</span>.',
  `<div class="principle">
    <div class="pr"><span class="a">→</span><div class="t"><b>Cut out the middleman</b>A decade of open infrastructure settled it.</div><div class="r ok">solved</div></div>
    <div class="pr"><span class="a">→</span><div class="t"><b>Let value move freely</b>Stablecoins now move hundreds of billions a year.</div><div class="r ok">solved</div></div>
    <div class="pr"><span class="a">→</span><div class="t"><b>Prove who is on the other end</b>So the money itself knows who may receive it.</div><div class="r open">still open</div></div>
  </div>
  <div class="note">We come back to the third with the money, the math, and the team.</div>`),

// 3 THE FIELD
n=>S2(n,'THE FIELD · <b>IDENTITY, AND WHERE IT STOPPED</b>',
  'Identity reached the right architecture<br><span class="o">before the market could carry it</span>.',
  `<div class="cols">
    <div class="col" style="flex:1.1">
      <div class="lead">GlobaliD had it early; the field stalled at the same wall — Microsoft retired did:ion in 2023, Trinsic wound down. The credential lived beside the transaction, and a check that can be skipped gets skipped.</div>
      <div class="lead" style="margin-top:var(--s3)">USBC drew the right conclusion: put identity inside the dollar. Inside one charter it settles. Across strangers, it does not.</div>
    </div>
    <div class="col" style="flex:.9">
      <svg width="100%" height="240" viewBox="0 0 460 240" style="margin-top:var(--s1)">
        <line x1="46" y1="196" x2="430" y2="196" stroke="#2a2a26"/><line x1="46" y1="40" x2="46" y2="196" stroke="#2a2a26"/>
        <path d="M46 192 L170 146 L270 116 L350 107 L430 104" fill="none" stroke="var(--bad)" stroke-width="2"/>
        <circle cx="270" cy="116" r="4" fill="#0E0E0C" stroke="var(--bad)"/><text x="270" y="100" fill="var(--faint)" font-family="Geist Mono" font-size="12" text-anchor="middle">did:ion retired, 2023</text>
        <circle cx="350" cy="107" r="4" fill="#0E0E0C" stroke="var(--bad)"/><text x="350" y="91" fill="var(--faint)" font-family="Geist Mono" font-size="12" text-anchor="middle">Trinsic winds down</text>
        <text x="238" y="224" fill="var(--faint)" font-family="Geist Mono" font-size="12" text-anchor="middle">digital identity — climbs, then flattens</text>
      </svg>
    </div>
  </div>`),

// 4 THE MACHINE ECONOMY
n=>S2(n,'WHAT CHANGED · <b>THE MACHINE ECONOMY</b>',
  'Most of the traffic online is already machines<br><span class="o">and they have started paying each other</span>.',
  `<div class="cols" style="align-items:center">
    <div class="col" style="flex:none;padding-right:var(--s2)"><div class="mega">57.5%</div><div class="megaq">of web requests are automated, not human — Cloudflare, 2026</div></div>
    <div class="col" style="flex:1">
      <div class="lead">Those machines have begun settling value directly — roughly <b>100 million payments on Base in nine months</b> (Chainalysis). A machine cannot wait on hold while an intermediary clears it.</div>
      <div class="punch">At machine speed, <span class="o">the check has to travel with the money.</span></div>
    </div>
  </div>`),

// 5 OFF THE LEDGER
n=>S2(n,'HOW IT WORKS · <b>OFF THE LEDGER</b>',
  'A dollar on-chain is a row in<br><span class="o">a ledger someone else keeps</span>.',
  `<div class="lead">Unicity makes it a bearer file: it carries its own value, moves directly between two parties the way cash changes hands, and the recipient verifies it on arrival against the token alone — no ledger to query, no clearer in the middle.</div>
  ${dia('xform',1180,32)}`),

// 6 ONE QUESTION
n=>S2(n,'HOW IT WORKS · <b>ONE QUESTION</b>',
  'The only job a chain ever had:<br><span class="o">has this been spent?</span>',
  `<div class="cols" style="align-items:center">
    <div class="col" style="flex:1.1"><div class="lead">Every other job a blockchain took on was built on top of that one answer. The oracle holds a proof that each token state is unique — it returns spent or unspent, and never sees the payment.</div></div>
    <div class="col" style="flex:.9">${dia('oracle',540,0)}</div>
  </div>`),

// 7 THE RULE INSIDE THE TOKEN
n=>S2(n,'HOW IT WORKS · <b>THE RULE INSIDE THE TOKEN</b>',
  'The rule lives <span class="o">inside the token</span>.',
  `<div class="lead">Each token carries its own receive-condition — KYC, jurisdiction, sanctions. A transfer to a party that fails it cannot be constructed: there is no issuer to call, and no monitor reading the flow afterward.</div>
  ${dia('compliance',1020,32)}
  <div class="punch">Manage the risk inside the asset, and <span class="o">there is no flow left to catch afterward.</span></div>`),

// 8 THE TRADEOFF
n=>S2(n,'THE CONSEQUENCE · <b>THE TRADEOFF DISSOLVES</b>',
  'Privacy, compliance, and speed pull against<br>each other <span class="o">on a shared ledger</span>.',
  `<div class="cols" style="align-items:center">
    <div class="col" style="flex:1.1"><div class="lead">Make payments private and the auditors go blind; add the cryptography that lets them see again and throughput collapses toward one a second. Remove the shared ledger, and the three have nothing left to contend over.</div></div>
    <div class="col" style="flex:.9">${dia('trilemma',460,0)}</div>
  </div>`),

// 9 THE TRADE
n=>S2(n,'THE CONSEQUENCE · <b>THE TRADE</b>',
  'The hard part of cash-like money<br>is <span class="o">the trade</span>.',
  `<div class="lead">Two parties swap with no one in the middle to hold both legs. The old fix is a timed lock, and the clock is the attack surface — one side stalls and walks. Unicity drops the clock: both commit independently, and the swap forms for both at once or never.</div>
  ${dia('swap',880,32)}`),

// 10 THE MACHINE MARKET
n=>S2(n,'WHERE IT LEADS · <b>THE MACHINE MARKET</b>',
  'When two agents settle directly,<br><span class="o">the exchange in the middle has nothing left to do</span>.',
  `<div class="cols" style="align-items:center">
    <div class="col" style="flex:1"><div class="lead">At volume, trustless transfers compose into a market that coordinates itself. Agentic data reaches scale first — an agent buys a dataset, an attestation, a unit of compute, and the payment settles in the same step that proves what it is.</div></div>
    <div class="col" style="flex:1">${dia('hub',540,0)}</div>
  </div>`,
  'font-size:33px;max-width:none'),

// 11 THE TEAM
n=>S2(n,'WHO WE ARE · <b>THE KSI TEAM</b>',
  'The team that built the system<br><span class="o">Estonia\'s e-government runs on</span>.',
  `<div class="cols" style="align-items:center">
    <div class="col" style="flex:1.1">
      <div class="lead">KSI has secured Estonia's e-government records in production since 2012, eIDAS-grade. The same design held 300,000 transactions a second in Eesti Pank's 2021 digital-currency test — the lineage we come from.</div>
      <div class="punch">The core is live and open-source, the repos are rough, full credential support is still being built. <span class="o">We are protocol engineers, not lawyers.</span></div>
    </div>
    <div class="col" style="flex:.9"><div class="stats">
      <div class="stat"><div class="v">2012</div><div class="k">securing Estonia's e-government records in production since</div></div>
      <div class="stat"><div class="v"><span class="o">300,000</span> / sec</div><div class="k">held in Eesti Pank's 2021 digital-currency test — the team's KSI design</div></div>
      <div class="stat"><div class="v">eIDAS-grade</div><div class="k">built to the EU's trust-services standard</div></div>
    </div></div>
  </div>`),

// 12 PROOF
n=>S2(n,'PROOF · <b>READ THE MATH</b>',
  'The white paper is marketing.<br><span class="o">The work is three math papers</span>.',
  `<div class="lead">The substance is three papers on GitHub — drop them into any model and it will check the proofs: privacy on both sides, no double-spend. Throughput is a sharding result.</div>
  <div class="cardrow">
    <div class="c3"><div class="ct">Aggregation</div><div class="cb">Off-chain and offline tokens; zero-knowledge proofs, no trusted setup.</div><div class="cb" style="color:var(--faint);margin-top:10px">github.com/unicitynetwork/aggr-layer-paper</div></div>
    <div class="c3"><div class="ct">Execution</div><div class="cb">No double-spend; privacy held service-side and user-side.</div><div class="cb" style="color:var(--faint);margin-top:10px">github.com/unicitynetwork/execution-model-tex</div></div>
    <div class="c3"><div class="ct">Predicates &amp; swaps</div><div class="cb">The rule lives in the token; two parties trade with no one between them.</div><div class="cb" style="color:var(--faint);margin-top:10px">github.com/unicitynetwork/unicity-predicates-tex</div></div>
  </div>
  <div class="punch">Public on GitHub, <span class="o">open to anyone who wants to read the proofs.</span></div>`),

// 13 THE ASK
n=>`<div class="slide"><div class="grid"></div><div class="glow"></div><div class="pad"><div class="head">${kick(n,'THE ASK · <b>CO-BUILD</b>')}<h2>Put the rule where the money is,<br>and make it hold <span class="o">between strangers</span>.</h2></div><div class="body">
  <div class="askbox">
    <div class="big">Raising <span class="o">$5M Seed</span> · $25M cap / $50M token FDV · SAFE + token warrant.</div>
    <div class="ml">First build: a <b>USBC dollar that settles the moment the credential checks out</b> — the rule travels inside the money, so a transfer that cannot satisfy it is never constructed.</div>
  </div>
  <div class="recap">The first two problems were solved a decade ago. The third — <b>money that knows who may receive it, between strangers, at machine speed</b> — is the part we built.</div>
  <div class="finale">A single charter settles at home. <span class="o">This is the layer that carries the same rule between two banks, or two machines, that share nothing else.</span></div>
</div></div>
<div class="src">Cloudflare · Chainalysis · Eesti Pank · USBC press · github.com/unicitynetwork</div></div>`,
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
// acceptance test: kicker top edge identical across body slides
const kickTops=await p.evaluate(()=>Array.from(document.querySelectorAll('.slide')).map(s=>{const k=s.querySelector('.kick');return k?Math.round(k.getBoundingClientRect().top - s.getBoundingClientRect().top):null;}));
console.log('kicker tops:', JSON.stringify(kickTops));
const els=await p.$$('.slide'); const pngs=[];
for(let i=0;i<els.length;i++){const fp=`${DIR}/slides/slide-${String(i+1).padStart(2,'0')}.png`;await els[i].screenshot({path:fp});pngs.push(fp);}
await b.close(); console.log('rendered',pngs.length,'PNGs');
const pdf=await PDFDocument.create();
for(const fp of pngs){const img=await pdf.embedPng(fs.readFileSync(fp));const pg=pdf.addPage([1600,900]);pg.drawImage(img,{x:0,y:0,width:1600,height:900});}
fs.writeFileSync(DIR+'/Unicity_HardYaka_Seed_Deck.pdf',await pdf.save());
console.log('wrote Unicity_HardYaka_Seed_Deck_v8.pdf');
