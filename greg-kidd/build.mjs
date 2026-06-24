import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
const DIR=path.dirname(fileURLToPath(import.meta.url));
const ROOT=path.resolve(DIR,'..');
const R=path.resolve(ROOT,'node_modules');
const puppeteer=(await import(pathToFileURL(R+'/puppeteer/lib/cjs/puppeteer/puppeteer.js').href)).default;
const { PDFDocument }=await import(pathToFileURL(R+'/pdf-lib/cjs/index.js').href);
const defs=fs.readFileSync(DIR+'/assets/logo-defs.html','utf8');
const DG={}; for(const k of ['xform','oracle','compliance','nobridge','swap','dac','trilemma','archstack']){
  let s=fs.readFileSync(`${DIR}/diagrams/${k}.svg`,'utf8').replace(/max-height:\s*\d+px/g,'height:auto');
  if(k==='xform') s=s.replace(/font-size="38"/g,'font-size="22"');
  if(k==='swap'){ s=s.replace(/<text x="0" y="38"[\s\S]*?<\/text>/,'').replace(/<text x="0" y="74"[\s\S]*?<\/text>/,'').replace('viewBox="0 0 1000 560"','viewBox="0 100 1000 462"'); }
  DG[k]=s;
}
const dia=(k)=>`<div class="dia">${DG[k]}</div>`;

const CSS=`
:root{--bg:#060606;--ink:#FEFEFE;--o:#FF6A1F;--dim:#B6B6B0;--faint:#74746E;--rule:#262624;--card:#101010;--owash:rgba(255,106,31,.06);--oline:rgba(255,106,31,.4);--bad:#8a8a84;--mx:88px;}
*{margin:0;padding:0;box-sizing:border-box}
body{background:#000}
.slide{position:relative;width:1600px;height:900px;background:var(--bg);color:var(--ink);overflow:hidden;font-family:"Geist Mono",monospace;-webkit-font-smoothing:antialiased}
.grid{position:absolute;inset:0;z-index:0;background-image:linear-gradient(rgba(255,255,255,.018) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.018) 1px,transparent 1px);background-size:64px 64px}
.glow{position:absolute;inset:0;z-index:0;background:radial-gradient(ellipse 58% 50% at 50% 48%,rgba(255,106,31,.07),transparent 70%)}
.pad{position:relative;z-index:2;height:100%;padding:52px var(--mx) 80px;display:flex;flex-direction:column;justify-content:center}
.pad.cover{align-items:center;text-align:center}
.hmain{font-family:"Anton",sans-serif;font-weight:400;text-transform:uppercase;font-size:46px;line-height:1.12;letter-spacing:.006em;color:var(--ink);text-wrap:balance}
.hmain .o{color:var(--o)}
.hsub{font-size:25px;line-height:1.4;color:var(--ink);font-weight:500;margin-top:11px;max-width:98ch;letter-spacing:.005em}
.core{font-size:26px;line-height:1.5;color:var(--dim);margin-top:18px;max-width:none}
.core b{color:var(--ink);font-weight:600}.core .o{color:var(--o);font-weight:600}
.rule{height:1px;width:64px;background:var(--o);margin-top:24px;opacity:.8}
.crule{height:1px;width:300px;background:linear-gradient(90deg,transparent,var(--oline),transparent);margin:46px auto 42px}
.ctitle{font-family:"Anton",sans-serif;text-transform:uppercase;font-size:62px;line-height:1.08;letter-spacing:.01em}
.ctitle .o{color:var(--o)}
.csub{font-size:19px;letter-spacing:.22em;text-transform:uppercase;color:var(--faint);margin-top:26px}
.ccore{font-size:26px;line-height:1.55;color:var(--dim);margin-top:30px;max-width:74ch}
.ccore b{color:var(--ink);font-weight:600}
.two{display:flex;gap:50px;align-items:center;margin-top:20px}
.two .cL{flex:0 0 44%;max-width:44%}.two .cL .core{margin-top:0;max-width:none}
.two .cR{flex:1;min-width:0;display:flex;justify-content:center}
.dia{width:100%}.dia svg{display:block;width:100%;height:auto;max-height:360px}
.diafull{margin-top:16px;display:flex;justify-content:center}.diafull svg{display:block;width:100%;max-width:1340px;height:auto;max-height:392px}
.diastack{width:100%;display:flex;justify-content:center}.diastack svg{display:block;width:100%;height:auto;max-height:470px}
.statrow{display:flex;gap:52px;align-items:flex-start;margin-top:40px}
.mega{font-family:"Anton",sans-serif;font-size:150px;line-height:.8;color:var(--o);letter-spacing:-.01em;flex:none}
.megacap{font-size:20px;letter-spacing:.05em;text-transform:uppercase;color:var(--faint);margin-top:12px;max-width:30ch;line-height:1.5}
.statrow .core{margin-top:0}
.cells{display:flex;gap:16px;margin-top:18px}
.cell{flex:1;border:1px solid var(--rule);border-top:2px solid var(--o);border-radius:8px;background:var(--card);padding:18px 18px}
.cell .ct{font-family:"Anton",sans-serif;font-size:21px;letter-spacing:.05em;text-transform:uppercase;color:var(--o)}
.cell .ck{font-size:19px;color:var(--dim);margin-top:10px;line-height:1.55}.cell .ck b{color:var(--ink)}
.pts{margin-top:16px}
.pt{display:flex;align-items:baseline;gap:26px;padding:15px 0;border-top:1px solid var(--rule)}
.pt:last-of-type{border-bottom:1px solid var(--rule)}
.pt .n{font-family:"Anton",sans-serif;font-size:25px;color:var(--o);flex:none;width:42px}
.pt .b{flex:1}
.pt .bt{font-family:"Anton",sans-serif;font-size:24px;letter-spacing:.02em;text-transform:uppercase;color:var(--ink)}
.pt .bd{font-size:20px;color:var(--dim);margin-top:5px;line-height:1.5}
.pt .s{margin-left:auto;font-size:16px;letter-spacing:.16em;text-transform:uppercase;white-space:nowrap;align-self:center}
.pt .s.ok{color:var(--faint)} .pt .s.no{color:var(--o)}
.close{margin-top:20px;font-size:25px;color:var(--ink);font-weight:600}.close .o{color:var(--o)}
.obs{margin-top:16px}
.o1{display:flex;align-items:baseline;gap:28px;padding:12px 0;border-top:1px solid var(--rule)}
.o1:last-child{border-bottom:1px solid var(--rule)}
.o1 .ol{font-family:"Anton",sans-serif;font-size:22px;text-transform:uppercase;color:var(--ink);width:330px;flex:none}
.o1 .od{font-size:20px;color:var(--dim);line-height:1.5}
.o1 .tg{margin-left:auto;font-size:16px;letter-spacing:.14em;text-transform:uppercase;color:var(--o)}
.tbl{margin-top:18px;border:1px solid var(--rule);border-radius:8px;overflow:hidden}
.trow{display:grid;border-bottom:1px solid var(--rule)}.trow:last-child{border-bottom:none}
.trow.head{background:rgba(255,255,255,.025)}
.tc{padding:13px 18px;font-size:21px;line-height:1.4;border-right:1px solid var(--rule)}.tc:last-child{border-right:none}
.trow.head .tc{font-family:"Anton",sans-serif;text-transform:uppercase;letter-spacing:.04em;font-size:17px;color:var(--faint)}
.trow.head .tc.u{color:var(--o)}
.tc.lbl{color:var(--dim);font-family:"Anton",sans-serif;font-size:19px;letter-spacing:.02em;text-transform:uppercase}
.tc.mut{color:var(--faint)} .tc.win{color:var(--o)} .trow .tc.ucol{background:rgba(255,106,31,.05)}
/* x402 panels */
.x4{display:flex;gap:30px;margin-top:16px;align-items:stretch}
.x4 .pan{flex:1;border:1px solid var(--rule);border-radius:9px;background:var(--card);padding:18px 20px}
.x4 .pan.u{border-color:var(--oline);background:linear-gradient(180deg,var(--owash),transparent)}
.x4 .ph{font-family:"Anton",sans-serif;text-transform:uppercase;font-size:19px;letter-spacing:.03em;color:var(--faint);display:flex;justify-content:space-between;align-items:baseline}
.x4 .pan.u .ph{color:var(--o)}
.x4 .pn{font-family:"Anton",sans-serif;font-size:19px;color:var(--ink)}.x4 .pan.u .pn{color:var(--o)}
.x4 .stp{font-size:19px;color:var(--dim);padding:7px 0;border-top:1px solid rgba(255,255,255,.05);display:flex;gap:12px}
.x4 .stp:first-of-type{border-top:none}
.x4 .stp .i{color:var(--faint);width:18px;flex:none}
.x4 .stp.gone{color:#5a5a55;text-decoration:line-through;text-decoration-color:rgba(255,106,31,.4)}
.x4 .elim{margin-top:14px;font-family:"Anton",sans-serif;font-size:23px;color:var(--o);text-transform:uppercase;letter-spacing:.02em}
.x4 .elsub{font-size:19px;color:var(--dim);margin-top:6px}
/* timeline */
.tl{display:flex;gap:20px;margin-top:16px}
.tlc{flex:1;border-top:1px solid var(--rule);padding-top:14px}.tlc.last{border-top-color:var(--o)}
.tlc .yr{font-family:"Anton",sans-serif;font-size:18px;letter-spacing:.08em;color:var(--faint)}.tlc.last .yr{color:var(--o)}
.tlc .nm{font-family:"Anton",sans-serif;font-size:23px;text-transform:uppercase;color:var(--ink);margin-top:6px}.tlc.last .nm{color:var(--o)}
.tlc .ds{font-size:19px;color:var(--dim);margin-top:7px;line-height:1.45}
.askbox{margin-top:18px;border:1px solid var(--oline);border-radius:10px;background:linear-gradient(180deg,var(--owash),transparent);padding:24px 28px}
.askbox .big{font-family:"Anton",sans-serif;font-size:34px;color:var(--ink)}.askbox .big .o{color:var(--o)}
.askbox .ml{font-size:22px;color:var(--dim);margin-top:12px;line-height:1.6;max-width:104ch}.askbox .ml b{color:var(--ink)}
.foot{position:absolute;left:var(--mx);right:var(--mx);bottom:32px;z-index:2;display:flex;justify-content:space-between;align-items:center;border-top:1px solid var(--rule);padding-top:13px;font-size:16px;letter-spacing:.16em;text-transform:uppercase;color:var(--faint)}
.foot .lg svg{height:13px;width:auto;opacity:.8}
`;

let T=19;
const foot=(n)=>`<div class="foot"><span class="lg"><svg viewBox="0 0 641 128"><use href="#ulogo"/></svg></span><span>Unicity · Seed proposal · Confidential — for Greg Kidd</span><span>${String(n).padStart(2,'0')} / ${T}</span></div>`;
const head=(hmain,hsub)=>`<div class="hmain">${hmain}</div><div class="hsub">${hsub}</div>`;
const SLD=(n,inner,cover='')=>`<div class="slide"><div class="grid"></div><div class="glow"></div><div class="pad${cover}">${inner}</div>${cover?'':foot(n)}</div>`;
const diaslide=(n,hm,hs,core,k)=>SLD(n,`${head(hm,hs)}<div class="core">${core}</div><div class="diafull">${dia(k)}</div>`);

const SL=[
// 1 COVER
()=>SLD(1,`
  <svg viewBox="0 0 641 128" style="height:80px;width:auto"><use href="#ulogo"/></svg>
  <div class="crule"></div>
  <div class="ctitle">Securing the <span class="o">Agentic Economy</span></div>
  <div class="csub">A strategic seed proposal for Greg Kidd</div>
  <div class="ccore">The machine economy cannot run on human infrastructure. Unicity embeds <b>identity, permissions, and settlement</b> directly into the digital asset.</div>
`,' cover'),
// 2 MARKET SHIFT
()=>SLD(2,`${head('The macro shift: <span class="o">machine commerce requires machine trust</span>','Autonomous agents now initiate high-frequency, micro-value transactions at scale.')}
  <div class="statrow"><div style="flex:none"><div class="mega">57.5%</div><div class="megacap">of web requests are automated, not human — Cloudflare, 2026</div></div>
  <div class="core">Legacy networks cannot verify an agent's authority or enforce a budget without a centralized bottleneck. Unicity forces the <b>proof of authority to travel natively with the money</b>.</div></div>`),
// 3 BOTTLENECK
()=>SLD(3,`${head('The structural bottleneck: <span class="o">the shared ledger</span>','The shared ledger is a permanent ceiling on scale and privacy.')}
  <div class="core">Every node must broadcast, order, validate, and record every transaction. Machine-speed commerce requires eliminating the <b>shared ledger</b> entirely.</div>
  <div class="cells">
    <div class="cell"><div class="ct">Broadcast</div><div class="ck">Every node hears every transaction.</div></div>
    <div class="cell"><div class="ct">Order</div><div class="ck">Global agreement on the sequence of all of them.</div></div>
    <div class="cell"><div class="ct">Validate</div><div class="ck">Every node re-runs every one.</div></div>
    <div class="cell"><div class="ct">Record</div><div class="ck">Every node stores the whole state, forever.</div></div>
  </div>`),
// 4 TRILEMMA (new)
()=>SLD(4,`${head('The stablecoin trilemma: <span class="o">pick two</span>','Every digital-dollar design has been forced to sacrifice compliance, privacy, or throughput.')}
  <div class="two"><div class="cL"><div class="core">Every design so far sacrifices one of the three, and the whole payment landscape is trapped in the trade-off. Unicity solves <b>all three at once</b> — it never places the transaction on a shared ledger to begin with.</div></div><div class="cR">${dia('trilemma')}</div></div>`),
// 5 INFRASTRUCTURE GAP
()=>SLD(5,`${head('The final infrastructure gap: <span class="o">embedded identity</span>','We solved disintermediation and digital value. Counterparty verification remains broken.')}
  <div class="pts">
    <div class="pt"><div class="n">01</div><div class="b"><div class="bt">Disintermediation</div><div class="bd">Open infrastructure bypassed the legacy financial middleman.</div></div><div class="s ok">solved</div></div>
    <div class="pt"><div class="n">02</div><div class="b"><div class="bt">Digital value</div><div class="bd">Stablecoins now settle tens of trillions of dollars a year.</div></div><div class="s ok">solved</div></div>
    <div class="pt"><div class="n">03</div><div class="b"><div class="bt">Cryptographic identity</div><div class="bd">No blockchain can natively verify a recipient's legal or operational standing before a transaction executes.</div></div><div class="s no">unsolved</div></div>
  </div>
  <div class="close">Unicity was engineered to close <span class="o">this final gap</span>.</div>`),
// 6 SIDE-CAR TO PROTOCOL
()=>SLD(6,`${head('From side-car to protocol: <span class="o">evolving digital identity</span>','Verification must be built into the asset, not layered on as an optional application check.')}
  <div class="core" style="font-size:15.5px;max-width:106ch">Self-sovereign identity stalled because the credential sat beside the transaction, and a check that can be skipped gets skipped. Unicity puts identity <b>inside the asset</b> and makes it enforceable across any jurisdiction.</div>
  <div class="rule"></div>`),
// 7 BEARER INSTRUMENTS
()=>diaslide(7,'From ledger entries to <span class="o">bearer instruments</span>','Off-chain settlement restores the properties of physical cash to digital stablecoins.',
  `Unicity converts an on-chain stablecoin into a <b>self-contained, self-proving bearer instrument</b>. It carries its own proof and moves <b>peer-to-peer</b> over any channel — HTTP, QR, NOSTR — with zero ledger lookups.`,'xform'),
// 8 ORACLE + UNBUNDLING TIMELINE
()=>SLD(8,`${head('The uniqueness oracle: <span class="o">unbundling consensus</span>','Each generation of consensus removed work from the network. Unicity keeps only the irreducible function.')}
  <div class="two" style="margin-top:22px"><div class="cL"><div class="core">The <b>Uniqueness Oracle</b> attests to one thing: has this token been spent? It never re-executes transactions or reads payloads, so throughput scales horizontally — <b>by design, 30,000 tx/sec per shard</b>.</div></div><div class="cR">${dia('oracle')}</div></div>
  <div class="tl">
    <div class="tlc"><div class="yr">2009 · BITCOIN</div><div class="nm">Correctness + ordering</div><div class="ds">Every node certifies every transaction and agrees the global order.</div></div>
    <div class="tlc"><div class="yr">2023 · SUI · FASTPAY</div><div class="nm">Correctness only</div><div class="ds">Global ordering dropped for assets that share no state.</div></div>
    <div class="tlc last"><div class="yr">2026 · UNICITY</div><div class="nm">Uniqueness only</div><div class="ds">The network attests one thing. Correctness moves to the edge.</div></div>
  </div>`),
// 9 THE ARCHITECTURE / THE STACK
()=>SLD(9,`${head('The architecture: <span class="o">a minimal chain, an economy off it</span>','Consensus stays minimal on-chain; everything an agent touches runs off-chain.')}
  <div class="two" style="margin-top:26px"><div class="cL"><div class="core">Proof-of-work, BFT finality, and the ZK oracle keep the chain minimal. Everything an agent touches runs off-chain — the SDK and the agent execution layer. <b>The chain does one job; the economy runs beside it.</b></div></div><div class="cR"><div class="diastack">${DG['archstack']}</div></div></div>`),
// 10 RECEIVE PREDICATE
()=>diaslide(9,'Protocol-enforced compliance: <span class="o">the receive predicate</span>','Cryptographically gating asset transfers without sacrificing peer-to-peer privacy.',
  `The <b>Receive Predicate</b> programs KYC, jurisdiction, and accreditation directly into the asset. If the recipient cannot satisfy it locally, the transfer mathematically fails — <b>the asset enforces its own compliance</b>.`,'compliance'),
// 10 PRIVACY
()=>SLD(10,`${head('Privacy by construction: <span class="o">proven against every observer</span>','Absolute confidentiality is the prerequisite for institutional capital flows.')}
  <div class="core">Confidentiality is a founding property of the protocol — mathematically proven against all three observers.</div>
  <div class="obs">
    <div class="o1"><div class="ol">The network</div><div class="od">Sees only opaque commitments. It cannot read amounts, parties, or balances, nor link one transfer to the next.</div><div class="tg">proven</div></div>
    <div class="o1"><div class="ol">The sender</div><div class="od">Cannot watch where or when the recipient later spends what was sent.</div><div class="tg">proven</div></div>
    <div class="o1"><div class="ol">Anyone with the address</div><div class="od">Sees one published key; every sender derives a fresh, indistinguishable transaction key.</div><div class="tg">proven</div></div>
  </div>`),
// 11 NO BRIDGE
()=>diaslide(11,'No bridge, <span class="o">nothing to hack</span>','Eliminating the largest loss category in digital finance.',
  `Bridges concentrate risk: they hold value and relay a forgeable message. Unicity holds nothing — a locked source-chain asset becomes a self-contained token the recipient verifies directly against the source contract.`,'nobridge'),
// 12 ATOMIC SWAP
()=>diaslide(12,'The atomic swap: <span class="o">settlement without an intermediary</span>','Trustless atomic swaps between self-contained bearer assets.',
  `The old fix is a timed lock, and the clock is the attack surface — one side stalls and walks. Unicity removes it with <b style="white-space:nowrap">Predicate Swaps</b>: both commit independently, and the swap forms for both at once or not at all.`,'swap'),
// 13 X402 (new)
()=>SLD(13,`${head('X402, rebuilt: <span class="o">twelve steps to five</span>','Eliminating the network friction that operators spend billions trying to solve.')}
  <div class="core" style="max-width:none">Today x402 still routes settlement through a facilitator and a public chain. Unicity embeds authorization and proof in the token and cuts the handshake from <b>twelve steps to five</b>.</div>
  <div class="x4">
    <div class="pan"><div class="ph"><span>Traditional x402</span><span class="pn">12 steps</span></div>
      <div class="stp"><span class="i">1</span>Client requests the resource</div>
      <div class="stp"><span class="i">2</span>Server returns 402 Payment Required</div>
      <div class="stp"><span class="i">3</span>Client signs and submits payment</div>
      <div class="stp gone"><span class="i">4</span>Server forwards to facilitator</div>
      <div class="stp gone"><span class="i">5</span>Facilitator verifies on-chain balance</div>
      <div class="stp gone"><span class="i">6</span>Settle on the shared ledger</div>
      <div class="stp gone"><span class="i">7</span>Await block confirmation</div>
      <div class="stp gone"><span class="i">8</span>Facilitator confirms to server</div>
      <div class="stp"><span class="i">…</span>then deliver the resource</div></div>
    <div class="pan u"><div class="ph"><span>Unicity x402</span><span class="pn">5 steps</span></div>
      <div class="stp"><span class="i">1</span>Client requests the resource</div>
      <div class="stp"><span class="i">2</span>Server returns 402 Payment Required</div>
      <div class="stp"><span class="i">3</span>Client pays with a bearer token (auth + proof inside)</div>
      <div class="stp"><span class="i">4</span>Server verifies the token locally</div>
      <div class="stp"><span class="i">5</span>Server delivers the resource</div>
      <div class="elim">7 steps eliminated</div>
      <div class="elsub">No facilitator. No shared ledger. No block wait.</div></div>
  </div>`),
// 14 MACHINE MARKET
()=>SLD(14,`${head('The machine market: <span class="o">venue-free trading</span>','CEX speed, DEX custody, with native privacy and compliance.')}
  <div class="core" style="max-width:none">Legacy venues force a compromise. Unicity delivers exchange speed, self-custody, privacy, and compliance — with <b>no venue at all</b>.</div>
  <div class="tbl">
    <div class="trow head" style="grid-template-columns:1.3fr 1.2fr 1.2fr 1.2fr"><div class="tc"></div><div class="tc">Legacy CEX</div><div class="tc">Legacy DEX</div><div class="tc u">Unicity</div></div>
    <div class="trow" style="grid-template-columns:1.3fr 1.2fr 1.2fr 1.2fr"><div class="tc lbl">Speed</div><div class="tc">sub-second</div><div class="tc mut">block time</div><div class="tc win ucol">sub-second</div></div>
    <div class="trow" style="grid-template-columns:1.3fr 1.2fr 1.2fr 1.2fr"><div class="tc lbl">Custody</div><div class="tc mut">custodial</div><div class="tc">self-custodial</div><div class="tc win ucol">self-custodial</div></div>
    <div class="trow" style="grid-template-columns:1.3fr 1.2fr 1.2fr 1.2fr"><div class="tc lbl">Privacy</div><div class="tc mut">operator sees all</div><div class="tc mut">fully public</div><div class="tc win ucol">unlinkable</div></div>
    <div class="trow" style="grid-template-columns:1.3fr 1.2fr 1.2fr 1.2fr"><div class="tc lbl">Compliance</div><div class="tc mut">off-chain</div><div class="tc mut">none</div><div class="tc win ucol">in the asset</div></div>
  </div>`),
// 15 AGENTIC DAC
()=>diaslide(15,'What gets built: <span class="o">the agentic corporation</span>','Agents become the new smart contracts, executing verifiable logic directly on bearer assets.',
  `Unicity built a decentralized autonomous corporation for BlackRock — a parametric insurer whose capital, underwriting, and cession all run as agents. Settlement is only the entry point: <b>the same protocol runs the whole corporation</b>.`,'dac'),
// 16 INCUMBENTS VALIDATE
()=>SLD(16,`${head('The incumbents validate <span class="o">the diagnosis</span>','The market is spending billions to optimize the ledger. We eliminated it.')}
  <div class="core" style="max-width:none">The incumbents are spending billions to work around the ledger they built, splitting the proof across separate layers. <b>Unicity keeps authorization, settlement, and the audit trail whole, inside the asset.</b></div>
  <div class="tbl">
    <div class="trow head" style="grid-template-columns:1.1fr 2.4fr 1fr"><div class="tc">Player</div><div class="tc">Their move</div><div class="tc u">Approach</div></div>
    <div class="trow" style="grid-template-columns:1.1fr 2.4fr 1fr"><div class="tc lbl">Circle</div><div class="tc">Pivoted to infrastructure — the Arc L1, a $222M presale, bought Malachite.</div><div class="tc mut">optimise the ledger</div></div>
    <div class="trow" style="grid-template-columns:1.1fr 2.4fr 1fr"><div class="tc lbl">Solana</div><div class="tc">Alpenglow cut finality to ~150ms; its co-founder concedes a physical ceiling.</div><div class="tc mut">optimise the ledger</div></div>
    <div class="trow" style="grid-template-columns:1.1fr 2.4fr 1fr"><div class="tc lbl">AP2 · x402</div><div class="tc">Authorize in one layer, settle in another — the proof splits across the stack.</div><div class="tc mut">split the proof</div></div>
    <div class="trow" style="grid-template-columns:1.1fr 2.4fr 1fr"><div class="tc lbl" style="color:var(--o)">Unicity</div><div class="tc win ucol">Keeps authorization, settlement, and the audit trail inside the asset.</div><div class="tc win ucol">keep it whole</div></div>
  </div>`),
// 17 TEAM
()=>SLD(17,`${head('The team: <span class="o">sovereign-grade verification</span>','Shipping nation-scale cryptographic infrastructure before agentic finance had a name.')}
  <div class="cells" style="margin-top:30px">
    <div class="cell"><div class="ct">The team</div><div class="ck">Built Guardtime's <b>KSI</b> — the verification layer deployed with the Estonian Government, Lockheed Martin, Boeing and NATO. In production since 2012, eIDAS-grade. That lineage sustained <b>300,000 tx/sec</b> in Eesti Pank's 2021 test (heritage, not a live Unicity figure).</div></div>
    <div class="cell"><div class="ct">The proof</div><div class="ck">Three mathematical papers prove the <b>privacy</b> and <b>no-double-spend</b> guarantees. Drop them into any model and they check. All public on github.com/unicitynetwork. The proof is verifiable today, not asserted.</div></div>
    <div class="cell"><div class="ct">The alignment</div><div class="ck">Identity, speed, and peer-to-peer settlement, bound into one instrument — the fair-access infrastructure Hard Yaka has backed across a generation of payments companies.</div></div>
  </div>`),
// 18 ASK
()=>SLD(18,`${head('The ask: <span class="o">$5M to settle the first compliant dollar</span>','Accelerating the deployment of compliant, peer-to-peer stablecoins.')}
  <div class="askbox"><div class="big"><span class="o">$5M Seed</span> · $25M cap / $50M token FDV · SAFE + token warrant</div>
  <div class="ml">We will partner with a regulated issuer to ship a compliant dollar that settles peer-to-peer the moment the Receive Predicate is satisfied — binding <b>identity, speed, and settlement</b> into one instrument.</div></div>
  <div class="close" style="margin-top:26px">Institutions rely on walled gardens for compliance. <span class="o">Unicity embeds that compliance directly into the dollar.</span></div>`),
];

const S=SL.map((f,i)=>f(i+1));
const html=`<!DOCTYPE html><html><head><meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Anton&family=Geist+Mono:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>${CSS}</style></head><body>${defs}
<div style="display:flex;flex-direction:column;align-items:center;gap:24px;padding:24px;background:#000">${S.join('\n')}</div></body></html>`;
const OUT=DIR;
fs.mkdirSync(OUT+'/slides',{recursive:true});
fs.writeFileSync(OUT+'/index.html',html);
const b=await puppeteer.launch({headless:'new',args:['--no-sandbox']});
const p=await b.newPage(); await p.setViewport({width:1680,height:960,deviceScaleFactor:2});
await p.goto('file://'+OUT+'/index.html',{waitUntil:'networkidle0'}); await new Promise(r=>setTimeout(r,900));
const chk=await p.evaluate(()=>Array.from(document.querySelectorAll('.slide')).map((s,i)=>{const pad=s.querySelector('.pad');const foot=s.querySelector('.foot');const sr=s.getBoundingClientRect();const ft=foot?foot.getBoundingClientRect().top-sr.top:900;let mb=0;pad.querySelectorAll('*').forEach(e=>{const r=e.getBoundingClientRect();if(r.height>2)mb=Math.max(mb,r.bottom-sr.top);});return{n:i+1,oflow:pad.scrollHeight>pad.clientHeight?pad.scrollHeight-pad.clientHeight:0,gap:Math.round(ft-mb)};}).filter(x=>x.oflow>2||x.gap<14));
console.log('overflow/collide:',JSON.stringify(chk));
const els=await p.$$('.slide'); const pngs=[];
for(let i=0;i<els.length;i++){const fp=`${OUT}/slides/slide-${String(i+1).padStart(2,'0')}.png`;await els[i].screenshot({path:fp});pngs.push(fp);}
await b.close();
const pdf=await PDFDocument.create();
for(const fp of pngs){const img=await pdf.embedPng(fs.readFileSync(fp));const pg=pdf.addPage([1600,900]);pg.drawImage(img,{x:0,y:0,width:1600,height:900});}
fs.writeFileSync(OUT+'/Unicity_HardYaka_Seed_Deck.pdf',await pdf.save());
console.log('wrote',pngs.length,'PNGs + PDF');
