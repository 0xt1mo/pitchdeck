import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
const DIR=path.dirname(fileURLToPath(import.meta.url));
const ROOT=path.resolve(DIR,'..');
const R=path.resolve(ROOT,'node_modules');
const puppeteer=(await import(pathToFileURL(R+'/puppeteer/lib/cjs/puppeteer/puppeteer.js').href)).default;
const { PDFDocument }=await import(pathToFileURL(R+'/pdf-lib/cjs/index.js').href);
const defs=fs.readFileSync(DIR+'/assets/logo-defs.html','utf8');
const DG={}; for(const k of ['xform','oracle','compliance','nobridge','swap','dac','trilemma']){
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
.hmain{font-family:"Anton",sans-serif;font-weight:400;text-transform:uppercase;font-size:38px;line-height:1.12;letter-spacing:.006em;color:var(--ink);text-wrap:balance}
.hmain .o{color:var(--o)}
.hsub{font-size:20px;line-height:1.45;color:var(--ink);font-weight:500;margin-top:11px;max-width:98ch;letter-spacing:.005em}
.core{font-size:18.5px;line-height:1.65;color:var(--dim);margin-top:16px;max-width:90ch;text-wrap:balance}
.core b{color:var(--ink);font-weight:600}.core .o{color:var(--o);font-weight:600}
.rule{height:1px;width:64px;background:var(--o);margin-top:24px;opacity:.8}
.crule{height:1px;width:300px;background:linear-gradient(90deg,transparent,var(--oline),transparent);margin:46px auto 42px}
.ctitle{font-family:"Anton",sans-serif;text-transform:uppercase;font-size:54px;line-height:1.08;letter-spacing:.01em}
.ctitle .o{color:var(--o)}
.csub{font-size:15.5px;letter-spacing:.22em;text-transform:uppercase;color:var(--faint);margin-top:26px}
.ccore{font-size:19px;line-height:1.7;color:var(--dim);margin-top:30px;max-width:78ch}
.ccore b{color:var(--ink);font-weight:600}
.two{display:flex;gap:50px;align-items:center;margin-top:20px}
.two .cL{flex:0 0 44%;max-width:44%}.two .cL .core{margin-top:0;max-width:none}
.two .cR{flex:1;min-width:0;display:flex;justify-content:center}
.dia{width:100%}.dia svg{display:block;width:100%;height:auto;max-height:400px}
.diafull{margin-top:22px;display:flex;justify-content:center}.diafull svg{display:block;width:100%;max-width:1340px;height:auto;max-height:482px}
.statrow{display:flex;gap:52px;align-items:center;margin-top:20px}
.mega{font-family:"Anton",sans-serif;font-size:168px;line-height:.8;color:var(--o);letter-spacing:-.01em;flex:none}
.megacap{font-size:15.5px;letter-spacing:.05em;text-transform:uppercase;color:var(--faint);margin-top:12px;max-width:30ch;line-height:1.5}
.statrow .core{margin-top:0}
.cells{display:flex;gap:16px;margin-top:18px}
.cell{flex:1;border:1px solid var(--rule);border-top:2px solid var(--o);border-radius:8px;background:var(--card);padding:18px 18px}
.cell .ct{font-family:"Anton",sans-serif;font-size:16px;letter-spacing:.05em;text-transform:uppercase;color:var(--o)}
.cell .ck{font-size:15.5px;color:var(--dim);margin-top:10px;line-height:1.55}.cell .ck b{color:var(--ink)}
.pts{margin-top:16px}
.pt{display:flex;align-items:baseline;gap:26px;padding:15px 0;border-top:1px solid var(--rule)}
.pt:last-of-type{border-bottom:1px solid var(--rule)}
.pt .n{font-family:"Anton",sans-serif;font-size:20px;color:var(--o);flex:none;width:34px}
.pt .b{flex:1}
.pt .bt{font-family:"Anton",sans-serif;font-size:19px;letter-spacing:.02em;text-transform:uppercase;color:var(--ink)}
.pt .bd{font-size:16.5px;color:var(--dim);margin-top:5px;line-height:1.5}
.pt .s{margin-left:auto;font-size:13px;letter-spacing:.16em;text-transform:uppercase;white-space:nowrap;align-self:center}
.pt .s.ok{color:var(--faint)} .pt .s.no{color:var(--o)}
.close{margin-top:18px;font-size:19px;color:var(--ink);font-weight:600}.close .o{color:var(--o)}
.obs{margin-top:16px}
.o1{display:flex;align-items:baseline;gap:28px;padding:12px 0;border-top:1px solid var(--rule)}
.o1:last-child{border-bottom:1px solid var(--rule)}
.o1 .ol{font-family:"Anton",sans-serif;font-size:17.5px;text-transform:uppercase;color:var(--ink);width:280px;flex:none}
.o1 .od{font-size:16.5px;color:var(--dim);line-height:1.5}
.o1 .tg{margin-left:auto;font-size:12.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--o)}
.tbl{margin-top:18px;border:1px solid var(--rule);border-radius:8px;overflow:hidden}
.trow{display:grid;border-bottom:1px solid var(--rule)}.trow:last-child{border-bottom:none}
.trow.head{background:rgba(255,255,255,.025)}
.tc{padding:10px 16px;font-size:16px;line-height:1.4;border-right:1px solid var(--rule)}.tc:last-child{border-right:none}
.trow.head .tc{font-family:"Anton",sans-serif;text-transform:uppercase;letter-spacing:.04em;font-size:14px;color:var(--faint)}
.trow.head .tc.u{color:var(--o)}
.tc.lbl{color:var(--dim);font-family:"Anton",sans-serif;font-size:15.5px;letter-spacing:.02em;text-transform:uppercase}
.tc.mut{color:var(--faint)} .tc.win{color:var(--o)} .trow .tc.ucol{background:rgba(255,106,31,.05)}
/* x402 panels */
.x4{display:flex;gap:30px;margin-top:16px;align-items:stretch}
.x4 .pan{flex:1;border:1px solid var(--rule);border-radius:9px;background:var(--card);padding:18px 20px}
.x4 .pan.u{border-color:var(--oline);background:linear-gradient(180deg,var(--owash),transparent)}
.x4 .ph{font-family:"Anton",sans-serif;text-transform:uppercase;font-size:15.5px;letter-spacing:.03em;color:var(--faint);display:flex;justify-content:space-between;align-items:baseline}
.x4 .pan.u .ph{color:var(--o)}
.x4 .pn{font-family:"Anton",sans-serif;font-size:15.5px;color:var(--ink)}.x4 .pan.u .pn{color:var(--o)}
.x4 .stp{font-size:15px;color:var(--dim);padding:5px 0;border-top:1px solid rgba(255,255,255,.05);display:flex;gap:12px}
.x4 .stp:first-of-type{border-top:none}
.x4 .stp .i{color:var(--faint);width:18px;flex:none}
.x4 .stp.gone{color:#5a5a55;text-decoration:line-through;text-decoration-color:rgba(255,106,31,.4)}
.x4 .elim{margin-top:12px;font-family:"Anton",sans-serif;font-size:18px;color:var(--o);text-transform:uppercase;letter-spacing:.02em}
.x4 .elsub{font-size:15px;color:var(--dim);margin-top:6px}
/* timeline */
.tl{display:flex;gap:20px;margin-top:16px}
.tlc{flex:1;border-top:1px solid var(--rule);padding-top:14px}.tlc.last{border-top-color:var(--o)}
.tlc .yr{font-family:"Anton",sans-serif;font-size:14.5px;letter-spacing:.08em;color:var(--faint)}.tlc.last .yr{color:var(--o)}
.tlc .nm{font-family:"Anton",sans-serif;font-size:18px;text-transform:uppercase;color:var(--ink);margin-top:6px}.tlc.last .nm{color:var(--o)}
.tlc .ds{font-size:15.5px;color:var(--dim);margin-top:7px;line-height:1.45}
.askbox{margin-top:18px;border:1px solid var(--oline);border-radius:10px;background:linear-gradient(180deg,var(--owash),transparent);padding:24px 28px}
.askbox .big{font-family:"Anton",sans-serif;font-size:28px;color:var(--ink)}.askbox .big .o{color:var(--o)}
.askbox .ml{font-size:17px;color:var(--dim);margin-top:12px;line-height:1.6;max-width:104ch}.askbox .ml b{color:var(--ink)}
.foot{position:absolute;left:var(--mx);right:var(--mx);bottom:32px;z-index:2;display:flex;justify-content:space-between;align-items:center;border-top:1px solid var(--rule);padding-top:13px;font-size:12.5px;letter-spacing:.16em;text-transform:uppercase;color:var(--faint)}
.foot .lg svg{height:13px;width:auto;opacity:.8}
`;

let T=18;
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
  <div class="core">Automated systems already generate the majority of web requests. Legacy networks cannot verify an AI agent's authority or enforce a budget without centralized bottlenecks. Unicity forces the cryptographic <b>proof of authority to travel natively with the money</b>.</div></div>`),
// 3 BOTTLENECK
()=>SLD(3,`${head('The structural bottleneck: <span class="o">the shared ledger</span>','The shared ledger is a permanent ceiling on scale and privacy.')}
  <div class="core">Traditional blockchains require every node to broadcast, order, validate, and record every transaction. Forcing billions of micro-transactions through a global queue guarantees network collapse. True <b>peer-to-peer settlement</b> requires eliminating the shared ledger entirely.</div>
  <div class="cells">
    <div class="cell"><div class="ct">Broadcast</div><div class="ck">Every node hears every transaction.</div></div>
    <div class="cell"><div class="ct">Order</div><div class="ck">Global agreement on the sequence of all of them.</div></div>
    <div class="cell"><div class="ct">Validate</div><div class="ck">Every node re-runs every one.</div></div>
    <div class="cell"><div class="ct">Record</div><div class="ck">Every node stores the whole state, forever.</div></div>
  </div>`),
// 4 TRILEMMA (new)
()=>SLD(4,`${head('The stablecoin trilemma: <span class="o">pick two</span>','Every digital-dollar design has been forced to sacrifice compliance, privacy, or throughput.')}
  <div class="two"><div class="cL"><div class="core">A public ledger delivers compliance and throughput, but exposes every balance and counterparty. Add zero-knowledge proofs and privacy returns, but throughput collapses under the proving cost. The current payment landscape is trapped in this trade-off. Unicity is the first protocol to solve <b>all three simultaneously</b>, because it never places the transaction on a shared ledger to begin with.</div></div><div class="cR">${dia('trilemma')}</div></div>`),
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
  <div class="core" style="font-size:15.5px;max-width:106ch">Early self-sovereign identity stalled because the credential sat parallel to the transaction, and checks that can be skipped get skipped. Identity and compliance must reside <b>inside the dollar itself</b>. Unicity supplies the underlying protocol that makes embedded identity strictly enforceable across any jurisdiction.</div>
  <div class="rule"></div>`),
// 7 BEARER INSTRUMENTS
()=>diaslide(7,'From ledger entries to <span class="o">bearer instruments</span>','Off-chain settlement restores the properties of physical cash to digital stablecoins.',
  `On-chain stablecoins are just ledger entries. Unicity converts them into <b>self-contained, self-proving bearer instruments</b>. The asset carries its own proof of validity, moving <b>peer-to-peer</b> across any transport layer (HTTP, QR, NOSTR) with zero ledger lookups.`,'xform'),
// 8 ORACLE + UNBUNDLING TIMELINE
()=>SLD(8,`${head('The uniqueness oracle: <span class="o">unbundling consensus</span>','Each generation of consensus removed work from the network. Unicity keeps only the irreducible function.')}
  <div class="two" style="margin-top:22px"><div class="cL"><div class="core">Unicity introduces the <b>Uniqueness Oracle</b>, which attests to one thing only: has this token been spent? Because the Oracle never re-executes transactions or reads payloads, throughput scales horizontally — <b>by design, 30,000 transactions per second per shard</b>.</div></div><div class="cR">${dia('oracle')}</div></div>
  <div class="tl">
    <div class="tlc"><div class="yr">2009 · BITCOIN</div><div class="nm">Correctness + ordering</div><div class="ds">Every node certifies every transaction and agrees the global order.</div></div>
    <div class="tlc"><div class="yr">2023 · SUI · FASTPAY</div><div class="nm">Correctness only</div><div class="ds">Global ordering dropped for assets that share no state.</div></div>
    <div class="tlc last"><div class="yr">2026 · UNICITY</div><div class="nm">Uniqueness only</div><div class="ds">The network attests one thing. Correctness moves to the edge.</div></div>
  </div>`),
// 9 RECEIVE PREDICATE
()=>diaslide(9,'Protocol-enforced compliance: <span class="o">the receive predicate</span>','Cryptographically gating asset transfers without sacrificing peer-to-peer privacy.',
  `Compliance should not require a central facilitator. Unicity introduces the <b>Receive Predicate</b>. KYC, jurisdiction, and accreditation are programmed directly into the asset. If the recipient cannot satisfy the predicate locally, the transfer mathematically fails. <b style="white-space:nowrap">The asset enforces its own compliance.</b>`,'compliance'),
// 10 PRIVACY
()=>SLD(10,`${head('Privacy by construction: <span class="o">proven against every observer</span>','Absolute confidentiality is the prerequisite for institutional capital flows.')}
  <div class="core">Confidentiality is a founding property of the protocol, not an application-layer afterthought. Privacy is mathematically proven against all three observers.</div>
  <div class="obs">
    <div class="o1"><div class="ol">The network</div><div class="od">Sees only opaque commitments. It cannot read amounts, parties, or balances, nor link one transfer to the next.</div><div class="tg">proven</div></div>
    <div class="o1"><div class="ol">The sender</div><div class="od">Cannot watch where or when the recipient later spends what was sent.</div><div class="tg">proven</div></div>
    <div class="o1"><div class="ol">Anyone with the address</div><div class="od">Sees one published key; every sender derives a fresh, indistinguishable transaction key.</div><div class="tg">proven</div></div>
  </div>`),
// 11 NO BRIDGE
()=>diaslide(11,'No bridge, <span class="o">nothing to hack</span>','Eliminating the largest loss category in digital finance.',
  `A cross-chain bridge concentrates risk by holding value and trusting a relayed instruction. Unicity eliminates bridges entirely. A locked source-chain asset becomes a self-contained bearer token, and the recipient verifies the lock directly against the source contract. No cross-chain message exists to forge, no pooled liquidity to drain, and no custodian to compromise.`,'nobridge'),
// 12 ATOMIC SWAP
()=>diaslide(12,'The atomic swap: <span class="o">settlement without an intermediary</span>','Trustless atomic swaps between self-contained bearer assets.',
  `The conventional fix for trustless exchange is a timed lock (HTLC), but the clock becomes an attack surface where one side can stall and walk away. Unicity removes the clock using <b style="white-space:nowrap">Predicate Swaps</b>: both parties commit independently, and the swap forms for both at once or not at all. Settlement runs off-chain at machine speed with <b style="white-space:nowrap">no mempool and no MEV</b>.`,'swap'),
// 13 X402 (new)
()=>SLD(13,`${head('X402, rebuilt: <span class="o">twelve steps to five</span>','Eliminating the network friction that operators spend billions trying to solve.')}
  <div class="core" style="max-width:none">The x402 standard enables machine payments over HTTP, but legacy models still route settlement through a slow facilitator and a public chain. By embedding authorization and proof directly into the bearer token, Unicity cuts the payment handshake from 12 steps to 5. The transaction clears instantly between client and server.</div>
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
  <div class="core" style="max-width:none">Legacy venues force institutional compromises. Unicity is the only protocol delivering sub-second settlement and strict self-custody, while maintaining unlinkable privacy and protocol-enforced compliance, with no venue at all.</div>
  <div class="tbl">
    <div class="trow head" style="grid-template-columns:1.3fr 1.2fr 1.2fr 1.2fr"><div class="tc"></div><div class="tc">Legacy CEX</div><div class="tc">Legacy DEX</div><div class="tc u">Unicity</div></div>
    <div class="trow" style="grid-template-columns:1.3fr 1.2fr 1.2fr 1.2fr"><div class="tc lbl">Speed</div><div class="tc">sub-second</div><div class="tc mut">block time</div><div class="tc win ucol">sub-second</div></div>
    <div class="trow" style="grid-template-columns:1.3fr 1.2fr 1.2fr 1.2fr"><div class="tc lbl">Custody</div><div class="tc mut">custodial</div><div class="tc">self-custodial</div><div class="tc win ucol">self-custodial</div></div>
    <div class="trow" style="grid-template-columns:1.3fr 1.2fr 1.2fr 1.2fr"><div class="tc lbl">Privacy</div><div class="tc mut">operator sees all</div><div class="tc mut">fully public</div><div class="tc win ucol">unlinkable</div></div>
    <div class="trow" style="grid-template-columns:1.3fr 1.2fr 1.2fr 1.2fr"><div class="tc lbl">Compliance</div><div class="tc mut">off-chain</div><div class="tc mut">none</div><div class="tc win ucol">in the asset</div></div>
  </div>`),
// 15 AGENTIC DAC
()=>diaslide(15,'What gets built: <span class="o">the agentic corporation</span>','Agents become the new smart contracts, executing verifiable logic directly on bearer assets.',
  `Unicity engineered a decentralized autonomous corporation for BlackRock: a weather-based parametric insurer. Capital provisioning, underwriting, and reinsurance cession all run as autonomous agents transacting in Unicity tokens. Settlement is only the entry point. <b style="white-space:nowrap">The same protocol orchestrates the entire corporation.</b>`,'dac'),
// 16 INCUMBENTS VALIDATE
()=>SLD(16,`${head('The incumbents validate <span class="o">the diagnosis</span>','The market is spending billions to optimize the ledger. We eliminated it.')}
  <div class="core" style="max-width:none">The largest players are spending billions to work around the ledger they built. Each holds only a fragment of the proof: authorization here, settlement there, the audit trail reconstructed across systems. <b>Unicity keeps authorization, settlement, and the audit trail whole, inside the asset.</b></div>
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
  <div class="ml">The immediate objective is to partner with a regulated issuer to ship a compliant dollar that settles peer-to-peer the moment the Receive Predicate is satisfied. This binds <b>identity, speed, and settlement</b> into a single instrument.</div></div>
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
