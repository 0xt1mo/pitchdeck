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
  if(k==='xform') s=s.replace(/font-size="38"/g,'font-size="21"');            // calm the baked-in headline labels
  if(k==='swap'){ s=s.replace(/<text x="0" y="38"[\s\S]*?<\/text>/,'');         // delete the 46px embedded title (h2 owns it)
                  s=s.replace('viewBox="0 0 1000 560"','viewBox="0 54 1000 506"'); }
  DG[k]=s;
}
const dia=(k,maxw,mt=16)=>`<div style="width:100%;max-width:${maxw}px;margin:${mt}px auto 0">${DG[k]}</div>`;

const CSS=`
:root{--bg:#060606;--ink:#FEFEFE;--o:#FF6A1F;--dim:#B8B8B2;--faint:#74746E;--rule:#242422;--card:#101010;--owash:rgba(255,106,31,.07);--oline:rgba(255,106,31,.42);--bad:#8a8a84;}
*{margin:0;padding:0;box-sizing:border-box}
body{background:#000}
.slide{position:relative;width:1600px;height:900px;background:var(--bg);color:var(--ink);overflow:hidden;font-family:"Geist Mono",monospace;-webkit-font-smoothing:antialiased}
.grid{position:absolute;inset:0;z-index:0;background-image:linear-gradient(rgba(255,255,255,.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.02) 1px,transparent 1px);background-size:64px 64px}
.glow{position:absolute;inset:0;z-index:0;background:radial-gradient(ellipse 60% 50% at 50% 46%,rgba(255,106,31,.08),transparent 70%)}
.pad{position:relative;z-index:2;height:100%;padding:60px 84px 70px;display:flex;flex-direction:column;justify-content:center}
.anton{font-family:"Anton",sans-serif;font-weight:400;text-transform:uppercase;letter-spacing:.01em}
.kick{font-size:12px;letter-spacing:.3em;text-transform:uppercase;color:var(--faint)}
.kick b{color:var(--o);font-weight:400}
h2{font-family:"Anton",sans-serif;font-weight:400;text-transform:uppercase;font-size:37px;line-height:1.08;letter-spacing:.004em;margin-top:14px;max-width:26ch}
h2 .o{color:var(--o)}
.lead{margin-top:18px;font-size:15.5px;line-height:1.65;color:var(--dim);max-width:62ch}
.lead b{color:var(--ink);font-weight:600}
.lead .o{color:var(--o);font-weight:600}
.punch{margin-top:26px;padding:14px 0 0 17px;border-left:2px solid var(--o);font-size:17px;line-height:1.45;color:var(--ink);font-weight:500;max-width:74ch}
.punch .o{color:var(--o)}
.cols{display:flex;gap:54px;align-items:center;padding-top:22px}
.col{flex:1;min-width:0}
.mega{font-family:"Anton",sans-serif;font-size:172px;line-height:.82;color:var(--o);letter-spacing:-.01em}
.megaq{font-size:12.5px;letter-spacing:.1em;text-transform:uppercase;color:var(--faint);margin-top:10px;max-width:30ch}
.principle{margin-top:14px;max-width:104ch}
.principle .pr{display:flex;align-items:baseline;gap:18px;padding:19px 0;border-top:1px solid var(--rule)}
.principle .pr:last-child{border-bottom:1px solid var(--rule)}
.principle .a{color:var(--o);font-family:"Anton",sans-serif;font-size:16px}
.principle .t{color:var(--dim);font-size:15px}.principle .t b{color:var(--ink);font-weight:600;display:block;font-size:17px;margin-bottom:3px;font-family:"Anton",sans-serif;letter-spacing:.01em;text-transform:uppercase}
.principle .r{margin-left:auto;font-size:11px;letter-spacing:.12em;text-transform:uppercase;white-space:nowrap}
.ok{color:#9a9a92} .open{color:var(--o)}
.note{margin-top:18px;font-size:12.5px;color:var(--faint);letter-spacing:.02em}
.stats{display:flex;flex-direction:column;gap:13px}
.stat{border:1px solid var(--rule);border-radius:7px;background:var(--card);padding:15px 17px}
.stat .v{font-family:"Anton",sans-serif;font-size:22px;color:var(--ink)}.stat .v .o{color:var(--o)}
.stat .k{font-size:11px;color:var(--faint);margin-top:5px;letter-spacing:.04em;line-height:1.45}
.foot{position:absolute;left:84px;right:84px;bottom:28px;z-index:2;display:flex;justify-content:space-between;align-items:center;border-top:1px solid var(--rule);padding-top:13px;font-size:9.5px;letter-spacing:.16em;text-transform:uppercase;color:var(--faint)}
.foot .lg svg{height:13px;width:auto;opacity:.8}
.cardrow{display:flex;gap:18px;margin-top:18px}
.c3{flex:1;border:1px solid var(--rule);border-left:2px solid var(--o);border-radius:6px;background:var(--card);padding:16px 18px}
.c3 .ct{font-family:"Anton",sans-serif;font-size:14px;letter-spacing:.04em;text-transform:uppercase;color:var(--o)}
.c3 .cb{font-size:12.5px;line-height:1.5;color:var(--dim);margin-top:9px}.c3 .cb b{color:var(--ink);font-weight:600}
.askbox{margin-top:18px;border:1px solid var(--oline);border-radius:8px;background:linear-gradient(180deg,var(--owash),transparent);padding:20px 26px}
.askbox .big{font-family:"Anton",sans-serif;font-size:22px;color:var(--ink)}.askbox .big .o{color:var(--o)}
.askbox .ml{font-size:13px;color:var(--dim);margin-top:9px;line-height:1.55}.askbox .ml b{color:var(--ink)}
.recap{margin-top:16px;font-size:14px;color:var(--dim);line-height:1.55;max-width:96ch}.recap b{color:var(--ink)}
.finale{margin-top:22px;font-family:"Anton",sans-serif;text-transform:uppercase;font-size:27px;line-height:1.12;letter-spacing:.005em;color:var(--ink);max-width:34ch}
.finale .o{color:var(--o)}
.src{position:absolute;left:84px;bottom:54px;font-size:9.5px;letter-spacing:.06em;color:var(--faint);z-index:2}
`;

const kick=(n,t)=>`<div class="kick">${String(n).padStart(2,'0')} · ${t}</div>`;
let T=0;
const foot=(n)=>`<div class="foot"><span class="lg"><svg viewBox="0 0 641 128"><use href="#ulogo"/></svg></span><span>Unicity · Seed proposal · Confidential — for Greg Kidd</span><span>${String(n).padStart(2,'0')} / ${T}</span></div>`;

const SL=[
// 1 COVER — poses the question, holds the answer
n=>`<div class="slide"><div class="grid"></div><div class="glow"></div>
<div class="pad" style="align-items:center;justify-content:center;text-align:center">
  <svg viewBox="0 0 641 128" style="height:58px;width:auto;margin-bottom:32px"><use href="#ulogo"/></svg>
  <div class="kick">Unicity &middot; a seed proposal for Greg Kidd</div>
  <h2 class="anton" style="font-size:46px;max-width:26ch;margin-top:24px;text-align:center;line-height:1.08">Fair access has always come down to <span class="o">three problems</span>. The third is still open.</h2>
  <div class="lead" style="text-align:center;max-width:78ch">Cut out the middleman, prove who is on the other end, let the money move. The first two were solved a decade ago. The third is the hardest — and the part Unicity builds.</div>
  <div style="margin-top:26px;font-size:12px;color:var(--faint);max-width:66ch">The cryptography is done and open-source. We will be straight about what is still being built.</div>
  <div style="margin-top:32px;font-size:10.5px;letter-spacing:.24em;text-transform:uppercase;color:var(--faint)">Tallinn · Zug · Abu Dhabi</div>
</div></div>`,

// 2 THE THREE PROBLEMS — the spine
n=>`<div class="slide"><div class="grid"></div><div class="pad">${kick(n,'FAIR ACCESS · <b>THE THREE PROBLEMS</b>')}
  <h2>Two were solved a decade ago. <span class="o">The third is the hard one.</span></h2>
  <div class="principle">
    <div class="pr"><span class="a">→</span><div class="t"><b>Cut out the middleman</b>A decade of open infrastructure settled it.</div><div class="r ok">solved</div></div>
    <div class="pr"><span class="a">→</span><div class="t"><b>Let value move freely</b>Stablecoins now move hundreds of billions a year.</div><div class="r ok">solved</div></div>
    <div class="pr"><span class="a">→</span><div class="t"><b>Prove who is on the other end</b>So the money itself knows who may receive it.</div><div class="r open">still open</div></div>
  </div>
  <div class="note">We come back to the third with the money, the math, and the team.</div>
</div>${foot(n)}`,

// 3 THE FIELD — wound + USBC, merged
n=>`<div class="slide"><div class="grid"></div><div class="pad">${kick(n,'THE FIELD · <b>IDENTITY, AND WHERE IT STOPPED</b>')}
  <h2>Identity reached the right architecture <span class="o">before the market could carry it</span>.</h2>
  <div class="cols" style="align-items:center"><div class="col" style="flex:1.25">
    <div class="lead" style="margin-top:0;max-width:none">GlobaliD had it early; the field stalled at the same wall — Microsoft retired did:ion in 2023, Trinsic wound down. The credential lived beside the transaction, and a check that can be skipped gets skipped.</div>
    <div class="lead" style="max-width:none">USBC drew the right conclusion: put identity inside the dollar. Inside one charter it settles. Across strangers, it does not.</div>
  </div><div class="col" style="flex:.9">
    <svg width="100%" height="210" viewBox="0 0 420 210">
      <line x1="40" y1="176" x2="400" y2="176" stroke="#2a2a26"/><line x1="40" y1="30" x2="40" y2="176" stroke="#2a2a26"/>
      <path d="M40 172 L150 130 L240 106 L320 99 L400 97" fill="none" stroke="var(--bad)" stroke-width="2"/>
      <circle cx="240" cy="106" r="4" fill="#0E0E0C" stroke="var(--bad)"/><text x="240" y="90" fill="var(--faint)" font-family="Geist Mono" font-size="11.5" text-anchor="middle">did:ion retired, 2023</text>
      <circle cx="320" cy="99" r="4" fill="#0E0E0C" stroke="var(--bad)"/><text x="332" y="87" fill="var(--faint)" font-family="Geist Mono" font-size="11.5">Trinsic winds down</text>
      <text x="220" y="202" fill="var(--faint)" font-family="Geist Mono" font-size="11.5" text-anchor="middle">digital identity — climbs, then flattens</text>
    </svg>
  </div></div>
</div>${foot(n)}`,

// 4 THE MACHINE ECONOMY — the turn (KEEP PUNCH)
n=>`<div class="slide"><div class="grid"></div><div class="glow"></div><div class="pad">${kick(n,'WHAT CHANGED · <b>THE MACHINE ECONOMY</b>')}
  <h2>Most of the traffic online is already machines — <span class="o">and they have started paying each other</span>.</h2>
  <div class="cols"><div class="col" style="flex:none"><div class="mega">57.5%</div><div class="megaq">of web requests are automated, not human — Cloudflare, 2026</div></div>
  <div class="col"><div class="lead" style="margin-top:0;max-width:none;font-size:16px">Those machines have begun settling value directly — roughly <b>100 million payments on Base in nine months</b> (Chainalysis). A machine cannot wait on hold while an intermediary clears it.</div>
    <div class="punch" style="margin-top:22px">At machine speed, <span class="o">the check has to travel with the money.</span></div>
  </div></div>
</div>${foot(n)}`,

// 5 OFF THE LEDGER — xform
n=>`<div class="slide"><div class="grid"></div><div class="pad">${kick(n,'HOW IT WORKS · <b>OFF THE LEDGER</b>')}
  <h2>A dollar on-chain is a row in <span class="o">a ledger someone else keeps</span>.</h2>
  <div class="lead" style="max-width:98ch">Unicity makes it a bearer file: it carries its own value, moves directly between two parties the way cash changes hands, and the recipient verifies it on arrival against the token alone — no ledger to query, no clearer in the middle.</div>
  ${dia('xform',1180,22)}
</div>${foot(n)}`,

// 6 ONE QUESTION — oracle
n=>`<div class="slide"><div class="grid"></div><div class="pad">${kick(n,'HOW IT WORKS · <b>ONE QUESTION</b>')}
  <h2>The only job a chain ever had: <span class="o">has this been spent?</span></h2>
  <div class="cols" style="align-items:center;padding-top:20px"><div class="col">
    <div class="lead" style="margin-top:0;max-width:none;font-size:16px">Every other job a blockchain took on was built on top of that one answer. The oracle holds a proof that each token state is unique — it returns spent or unspent, and never sees the payment.</div>
  </div><div class="col">${dia('oracle',560,0)}</div></div>
</div>${foot(n)}`,

// 7 THE RULE INSIDE THE TOKEN — compliance (KEEP PUNCH; refrain payoff)
n=>`<div class="slide"><div class="grid"></div><div class="pad">${kick(n,'HOW IT WORKS · <b>THE RULE INSIDE THE TOKEN</b>')}
  <h2>The rule lives <span class="o">inside the token</span>.</h2>
  <div class="lead" style="max-width:100ch">Each token carries its own receive-condition — KYC, jurisdiction, sanctions. A transfer to a party that fails it cannot be constructed: there is no issuer to call, and no monitor reading the flow afterward.</div>
  ${dia('compliance',1020,16)}
  <div class="punch">Manage the risk inside the asset, and <span class="o">there is no flow left to catch afterward.</span></div>
</div>${foot(n)}`,

// 8 THE TRADEOFF — trilemma (exhale, no punch)
n=>`<div class="slide"><div class="grid"></div><div class="pad">${kick(n,'THE CONSEQUENCE · <b>THE TRADEOFF DISSOLVES</b>')}
  <h2>Privacy, compliance, and speed pull against each other <span class="o">on a shared ledger</span>.</h2>
  <div class="cols" style="align-items:center;padding-top:20px"><div class="col">
    <div class="lead" style="margin-top:0;max-width:none;font-size:16px">Make payments private and the auditors go blind; add the cryptography that lets them see again and throughput collapses toward one a second. Remove the shared ledger, and the three have nothing left to contend over.</div>
  </div><div class="col">${dia('trilemma',460,0)}</div></div>
</div>${foot(n)}`,

// 9 THE SWAP — swap (no punch)
n=>`<div class="slide"><div class="grid"></div><div class="pad">${kick(n,'THE CONSEQUENCE · <b>THE TRADE</b>')}
  <h2>The hard part of cash-like money is <span class="o">the trade</span>.</h2>
  <div class="lead" style="max-width:104ch">Two parties swap with no one in the middle to hold both legs. The old fix is a timed lock, and the clock is the attack surface — one side stalls and walks. Unicity drops the clock: both commit independently, and the swap forms for both at once or never.</div>
  ${dia('swap',900,12)}
</div>${foot(n)}`,

// 10 THE MACHINE MARKET — hub (arrival, no punch)
n=>`<div class="slide"><div class="grid"></div><div class="pad">${kick(n,'WHERE IT LEADS · <b>THE MACHINE MARKET</b>')}
  <h2>When two agents settle directly, <span class="o">the exchange in the middle has nothing left to do</span>.</h2>
  <div class="cols" style="align-items:center;padding-top:18px"><div class="col" style="flex:.95">
    <div class="lead" style="margin-top:0;max-width:none;font-size:16px">At volume, trustless transfers compose into a market that coordinates itself. Agentic data reaches scale first — an agent buys a dataset, an attestation, a unit of compute, and the payment settles in the same step that proves what it is.</div>
  </div><div class="col" style="flex:1.05">${dia('hub',540,0)}</div></div>
</div>${foot(n)}`,

// 11 THE TEAM — stats + honesty punch
n=>`<div class="slide"><div class="grid"></div><div class="pad">${kick(n,'WHO WE ARE · <b>THE KSI TEAM</b>')}
  <h2>The team that built the system <span class="o">Estonia's e-government runs on</span>.</h2>
  <div class="cols" style="align-items:center"><div class="col">
    <div class="lead" style="margin-top:0;max-width:none;font-size:16px">KSI has secured Estonia's e-government records in production since 2012, eIDAS-grade. The same design held 300,000 transactions a second in Eesti Pank's 2021 digital-currency test — the lineage we come from.</div>
    <div class="punch" style="margin-top:22px">The core is live and open-source, the repos are rough, full credential support is still being built. <span class="o">We are protocol engineers, not lawyers.</span></div>
  </div><div class="col"><div class="stats">
    <div class="stat"><div class="v">2012</div><div class="k">securing Estonia's e-government records in production since</div></div>
    <div class="stat"><div class="v"><span class="o">300,000</span> / sec</div><div class="k">held in Eesti Pank's 2021 digital-currency test — the team's KSI design</div></div>
    <div class="stat"><div class="v">eIDAS-grade</div><div class="k">built to the EU's trust-services standard</div></div>
  </div></div></div>
</div>${foot(n)}`,

// 12 PROOF — cards + punch (invitation)
n=>`<div class="slide"><div class="grid"></div><div class="pad">${kick(n,'PROOF · <b>READ THE MATH</b>')}
  <h2>The white paper is marketing. <span class="o">The work is three math papers.</span></h2>
  <div class="lead" style="max-width:100ch">The substance is three papers on GitHub — drop them into any model and it will check the proofs: privacy on both sides, no double-spend. Throughput is a sharding result.</div>
  <div class="cardrow">
    <div class="c3"><div class="ct">Aggregation</div><div class="cb">Off-chain and offline tokens; zero-knowledge proofs, no trusted setup.</div><div class="cb" style="color:var(--faint);margin-top:10px">github.com/unicitynetwork/aggr-layer-paper</div></div>
    <div class="c3"><div class="ct">Execution</div><div class="cb">No double-spend; privacy held service-side and user-side.</div><div class="cb" style="color:var(--faint);margin-top:10px">github.com/unicitynetwork/execution-model-tex</div></div>
    <div class="c3"><div class="ct">Predicates &amp; swaps</div><div class="cb">The rule lives in the token; two parties trade with no one between them.</div><div class="cb" style="color:var(--faint);margin-top:10px">github.com/unicitynetwork/unicity-predicates-tex</div></div>
  </div>
  <div class="punch">Public on GitHub, <span class="o">open to anyone who wants to read the proofs.</span></div>
</div>${foot(n)}`,

// 13 THE ASK — open on the ask; closer is the climax
n=>`<div class="slide"><div class="grid"></div><div class="glow"></div><div class="pad">${kick(n,'THE ASK · <b>CO-BUILD</b>')}
  <h2>Put the rule where the money is, and make it hold <span class="o">between strangers</span>.</h2>
  <div class="askbox">
    <div class="big">Raising <span class="o">$5M Seed</span> · $25M cap / $50M token FDV · SAFE + token warrant.</div>
    <div class="ml">First build: a <b>USBC dollar that settles the moment the credential checks out</b> — the rule travels inside the money, so a transfer that cannot satisfy it is never constructed.</div>
  </div>
  <div class="recap">The first two problems were solved a decade ago. The third — <b>money that knows who may receive it, between strangers, at machine speed</b> — is the part we built.</div>
  <div class="finale">A single charter settles at home. <span class="o">This is the layer that carries the same rule between two banks, or two machines, that share nothing else.</span></div>
</div>
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
const els=await p.$$('.slide'); const pngs=[];
for(let i=0;i<els.length;i++){const fp=`${DIR}/slides/slide-${String(i+1).padStart(2,'0')}.png`;await els[i].screenshot({path:fp});pngs.push(fp);}
await b.close(); console.log('rendered',pngs.length,'PNGs');
const pdf=await PDFDocument.create();
for(const fp of pngs){const img=await pdf.embedPng(fs.readFileSync(fp));const pg=pdf.addPage([1600,900]);pg.drawImage(img,{x:0,y:0,width:1600,height:900});}
fs.writeFileSync(DIR+'/Unicity_HardYaka_Seed_Deck.pdf',await pdf.save());
console.log('wrote Unicity_HardYaka_Seed_Deck_v7.pdf');
