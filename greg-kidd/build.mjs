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
const DG={}; for(const k of ['xform','oracle','compliance','swap','archstack','nobridge','dac','shards']){
  let s=fs.readFileSync(`${DIR}/diagrams/${k}.svg`,'utf8').replace(/max-height:\s*\d+px/g,'height:auto');
  if(k==='xform') s=s.replace(/font-size="38"/g,'font-size="21"');
  if(k==='swap'){ s=s.replace(/<text x="0" y="38"[\s\S]*?<\/text>/,'').replace(/<text x="0" y="74"[\s\S]*?<\/text>/,'').replace('viewBox="0 0 1000 560"','viewBox="0 100 1000 462"'); }
  DG[k]=s;
}
const dia=(k,maxw)=>`<div style="width:100%;max-width:${maxw}px;margin:0 auto">${DG[k]}</div>`;
const mech=(c)=>'<div class="mech">'+c.map(x=>'<div class="m"><div class="ml2">'+x[0]+'</div><div class="md">'+x[1]+'</div></div>').join('')+'</div>';

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
.kick{font-size:12.5px;letter-spacing:.3em;text-transform:uppercase;color:var(--faint)}
.kick b{color:var(--o);font-weight:400}
h2{font-family:"Anton",sans-serif;font-weight:400;text-transform:uppercase;font-size:33px;line-height:1.1;letter-spacing:.005em;margin-top:13px}
h2 .o{color:var(--o)}
.lead{margin-top:16px;font-size:16px;line-height:1.68;color:var(--dim);max-width:92ch}
.lead b{color:var(--ink);font-weight:600}.lead .o{color:var(--o);font-weight:600}
.dwrap{margin-top:26px;display:flex;justify-content:center}.dwrap svg{display:block;width:100%;height:auto;max-height:356px}
.punch{margin-top:var(--s4);padding:0 0 0 var(--s2);border-left:2px solid var(--o);font-size:16.5px;line-height:1.45;color:var(--ink);font-weight:500;max-width:90ch}
.punch .o{color:var(--o)}
.cols{display:flex;gap:56px;align-items:center;margin-top:34px}
.col{flex:1;min-width:0}
.statline{display:flex;align-items:center;gap:48px;margin-top:40px}
.mega{font-family:"Anton",sans-serif;font-size:188px;line-height:.8;color:var(--o);letter-spacing:-.01em}
.megaq{font-size:14px;letter-spacing:.06em;text-transform:uppercase;color:var(--faint);margin-top:10px;max-width:30ch;line-height:1.5}
.principle{margin-top:34px}
.principle .pr{display:flex;align-items:center;gap:var(--s4);padding:26px 0;border-top:1px solid var(--rule)}
.principle .pr:last-child{border-bottom:1px solid var(--rule)}
.principle .a{color:var(--o);font-family:"Anton",sans-serif;font-size:18px;flex:none;width:32px}
.principle .t{color:var(--dim);font-size:15px}.principle .t b{color:var(--ink);font-weight:600;display:block;font-size:19px;margin-bottom:4px;font-family:"Anton",sans-serif;letter-spacing:.01em;text-transform:uppercase}
.principle .r{margin-left:auto;font-size:11.5px;letter-spacing:.14em;text-transform:uppercase;white-space:nowrap}
.ok{color:#9a9a92} .open{color:var(--o)}
.note{margin-top:var(--s4);font-size:14px;color:var(--faint);letter-spacing:.02em}
/* mechanics band */
.mech{display:flex;gap:46px;margin-top:26px}
.mech .m{flex:1;border-left:2px solid var(--o);padding-left:18px}
.mech .ml2{font-family:"Anton",sans-serif;font-size:15px;letter-spacing:.03em;text-transform:uppercase;color:var(--o)}
.mech .md{font-size:14px;line-height:1.5;color:var(--dim);margin-top:9px}
/* boxed cards row (3 or 4) */
.row3{display:flex;gap:18px;margin-top:36px}
.cell{flex:1;border:1px solid var(--rule);border-top:2px solid var(--o);border-radius:8px;background:var(--card);padding:22px 20px}
.cell .v{font-family:"Anton",sans-serif;font-size:28px;color:var(--ink)}.cell .v .o{color:var(--o)}
.cell .ct{font-family:"Anton",sans-serif;font-size:15px;letter-spacing:.04em;text-transform:uppercase;color:var(--o)}
.cell .k{font-size:13.5px;color:var(--dim);margin-top:11px;letter-spacing:.02em;line-height:1.5}
.cell .repo{font-size:12.5px;color:var(--faint);margin-top:13px}
/* timeline 3-col */
.tl{display:flex;gap:22px;margin-top:38px}
.tlc{flex:1;border-top:1px solid var(--rule);padding-top:18px}
.tlc.last{border-top-color:var(--o)}
.tlc .yr{font-family:"Anton",sans-serif;font-size:15px;letter-spacing:.1em;color:var(--faint)}
.tlc.last .yr{color:var(--o)}
.tlc .nm{font-family:"Anton",sans-serif;font-size:22px;text-transform:uppercase;color:var(--ink);margin-top:8px}
.tlc.last .nm{color:var(--o)}
.tlc .ds{font-size:14px;color:var(--dim);margin-top:10px;line-height:1.55}
/* observer rows */
.obs{margin-top:30px}
.obs .o1{display:flex;align-items:baseline;gap:var(--s4);padding:22px 0;border-top:1px solid var(--rule)}
.obs .o1:last-child{border-bottom:1px solid var(--rule)}
.obs .ol{font-family:"Anton",sans-serif;font-size:18px;text-transform:uppercase;color:var(--ink);width:340px;flex:none}
.obs .od{font-size:15px;color:var(--dim);line-height:1.55}.obs .od b{color:var(--ink)}
.obs .tag{margin-left:auto;font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--o);white-space:nowrap}
/* comparison table */
.tbl{margin-top:34px;border:1px solid var(--rule);border-radius:8px;overflow:hidden}
.trow{display:grid;border-bottom:1px solid var(--rule)}
.trow:last-child{border-bottom:none}
.trow.head{background:rgba(255,255,255,.025)}
.tc{padding:13px 16px;font-size:13.5px;line-height:1.4;border-right:1px solid var(--rule)}
.tc:last-child{border-right:none}
.trow.head .tc{font-family:"Anton",sans-serif;text-transform:uppercase;letter-spacing:.04em;font-size:12.5px;color:var(--faint)}
.trow.head .tc.u{color:var(--o)}
.tc.lbl{color:var(--dim);font-family:"Anton",sans-serif;font-size:13.5px;letter-spacing:.02em;text-transform:uppercase}
.tc.mut{color:var(--faint)}
.tc.win{color:var(--o)}
.trow .tc.ucol{background:rgba(255,106,31,.05)}
/* statement */
.statement{font-family:"Anton",sans-serif;text-transform:uppercase;font-size:60px;line-height:1.04;letter-spacing:.004em;text-align:center}
.statement .o{color:var(--o)}
.crule{height:1px;width:280px;background:linear-gradient(90deg,transparent,var(--oline),transparent);margin:36px auto}
.sub{font-size:15px;line-height:1.6;color:var(--dim);max-width:72ch;text-align:center;margin:0 auto}
.fp{margin-top:44px;font-size:10.5px;letter-spacing:.26em;text-transform:uppercase;color:var(--faint)}
.foot{position:absolute;left:var(--mx);right:var(--mx);bottom:30px;z-index:2;display:flex;justify-content:space-between;align-items:center;border-top:1px solid var(--rule);padding-top:14px;font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:var(--faint)}
.foot .lg svg{height:13px;width:auto;opacity:.8}
.askbox{margin-top:30px;border:1px solid var(--oline);border-radius:10px;background:linear-gradient(180deg,var(--owash),transparent);padding:22px 26px}
.askbox .big{font-family:"Anton",sans-serif;font-size:22px;color:var(--ink)}.askbox .big .o{color:var(--o)}
.askbox .ml{font-size:14px;color:var(--dim);margin-top:10px;line-height:1.55;max-width:110ch}.askbox .ml b{color:var(--ink)}
.finale{margin-top:26px;font-family:"Anton",sans-serif;text-transform:uppercase;font-size:25px;line-height:1.1;letter-spacing:.003em;color:var(--ink);max-width:none}
.finale .o{color:var(--o)}
.src{position:absolute;left:var(--mx);bottom:54px;font-size:11px;letter-spacing:.06em;color:var(--faint);z-index:2}
`;

const kick=(n,t)=>`<div class="kick">${String(n).padStart(2,'0')} · ${t}</div>`;
let T=0;
const foot=(n)=>`<div class="foot"><span class="lg"><svg viewBox="0 0 641 128"><use href="#ulogo"/></svg></span><span>Unicity · Seed proposal · Confidential — for Greg Kidd</span><span>${String(n).padStart(2,'0')} / ${T}</span></div>`;
const DS=(n,kk,h,lead,diagram,extra='')=>`<div class="slide"><div class="grid"></div><div class="pad"><div class="hdr">${kick(n,kk)}<h2>${h}</h2><div class="lead">${lead}</div></div><div class="dwrap">${diagram}</div>${extra}</div>${foot(n)}</div>`;
const HD=(n,kk,h,body)=>`<div class="slide"><div class="grid"></div><div class="pad"><div class="hdr">${kick(n,kk)}<h2>${h}</h2></div>${body}</div>${foot(n)}</div>`;

const SL=[
// 1 COVER
n=>`<div class="slide"><div class="grid"></div><div class="glow"></div><div class="pad cover">
  <svg viewBox="0 0 641 128" style="height:96px;width:auto"><use href="#ulogo"/></svg>
  <div class="crule" style="margin:52px auto 48px"></div>
  <div class="statement" style="font-size:56px;line-height:1.05">Securing the<br><span class="o">Agentic Economy.</span></div>
  <div class="sub" style="margin-top:38px;max-width:80ch">Machines pay each other across cards, wallets, APIs and stablecoins — authority, permission and settlement evidence stay scattered. Unicity makes the proof travel with the payment.</div>
  <div class="fp">A seed proposal for Greg Kidd</div>
</div></div>`,

// 2 THREE PROBLEMS
n=>HD(n,'FAIR ACCESS · <b>THE THREE PROBLEMS</b>','Fair access takes three things. <span class="o">The third was never built.</span>',
  `<div class="principle">
    <div class="pr"><span class="a">01</span><div class="t"><b>Cut out the middleman</b>A decade of open infrastructure settled it.</div><div class="r ok">solved</div></div>
    <div class="pr"><span class="a">02</span><div class="t"><b>Let value move freely</b>Stablecoins now settle tens of trillions a year.</div><div class="r ok">solved</div></div>
    <div class="pr"><span class="a">03</span><div class="t"><b>Prove who is on the other end</b>The payment itself knows who may receive it.</div><div class="r open">still open</div></div>
  </div>
  <div class="note">The third is the problem that decides fair access. It is the one Unicity builds.</div>`),

// 3 THE FIELD
n=>`<div class="slide"><div class="grid"></div><div class="pad"><div class="hdr">${kick(n,'THE FIELD · <b>IDENTITY, AND WHERE IT STOPPED</b>')}<h2>Identity reached the right architecture <span class="o">before the market could carry it.</span></h2></div>
  <div class="cols"><div class="col" style="flex:1.15">
    <div class="lead" style="margin-top:0;max-width:none">Self-sovereign identity had the third problem right, early: identity is permission to act. The field stalled at the same wall — did:ion retired in 2023, Trinsic wound down. The credential sat beside the transaction, and a check that can be skipped gets skipped.</div>
    <div class="lead" style="max-width:none">USBC drew the right conclusion: put identity inside the dollar. On one charter it settles. Between charters — between strangers — it cannot. Closing that gap is the build.</div>
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

// 4 MACHINE ECONOMY
n=>`<div class="slide"><div class="grid"></div><div class="glow"></div><div class="pad"><div class="hdr">${kick(n,'THE ACTOR CHANGED · <b>THE AGENTIC ECONOMY</b>')}<h2>Agentic payments are no longer a demo. <span class="o">The machines have started paying each other directly.</span></h2></div>
  <div class="statline"><div style="flex:none"><div class="mega">57.5%</div><div class="megaq">of web requests are automated, not human — Cloudflare, 2026</div></div>
  <div style="flex:1">
    <div class="lead" style="margin-top:0;max-width:none;font-size:16px">More than <b>100 million on-chain payments</b> have crossed Base in nine months (Chainalysis), and Mastercard now builds payment infrastructure for machines. The amounts are small. The frequency is high. The path may cross cards, wallets, APIs and stablecoins. The problem is trust.</div>
    <div class="punch" style="margin-top:26px">Who authorised it, who may receive it, the limit, why it settles — <span class="o">the proof rides with the money.</span></div>
  </div></div>
</div>${foot(n)}</div>`,

// 5 WHY EVERY SHARED LEDGER HITS A WALL
n=>HD(n,'THE STRUCTURAL LIMIT · <b>THE SHARED LEDGER</b>','A shared ledger was built for humans. <span class="o">Machines don\'t work that way.</span>',
  `<div class="lead" style="max-width:90ch">Slow, sequential, contested — that is human finance, and the shared ledger is built for it. Proof-of-work, proof-of-stake, DPoS: each one must broadcast, order, validate and record every transaction, for everyone. When billions of sub-cent machine payments arrive, every node still processes every one.</div>
  <div class="row3">
    <div class="cell"><div class="ct">Broadcast</div><div class="k">Every node hears every transaction.</div></div>
    <div class="cell"><div class="ct">Order</div><div class="k">Global agreement on the sequence of all of them.</div></div>
    <div class="cell"><div class="ct">Validate</div><div class="k">Every node re-runs every transaction.</div></div>
    <div class="cell"><div class="ct">Record</div><div class="k">Every node stores the whole global state, forever.</div></div>
  </div>
  <div class="punch">The bottleneck is the design, not the implementation. <span class="o">So Unicity removes the shared ledger.</span></div>`),

// 6 OFF THE LEDGER
n=>DS(n,'HOW IT WORKS · <b>OFF THE LEDGER</b>',
  'A dollar on-chain is a row in <span class="o">a ledger someone else keeps.</span>',
  'Unicity makes it cash. The dollar becomes a bearer object — a native data type the system holds, like a file. It carries its own value and its own proof, moves directly between two parties, and verifies on arrival against the token alone. No chain to call.',
  dia('xform',1040),
  mech([['Self-contained','The value lives in the object, not a row a network keeps for it.'],['Self-proving','It carries its own proof of validity, minted against a locked source-chain asset.'],['Verifies on arrival','The recipient checks it locally, offline, over any channel, with no chain to call.']])),

// 7 ONE QUESTION
n=>DS(n,'HOW IT WORKS · <b>ONE QUESTION</b>',
  'The only job a chain ever had: <span class="o">has this been spent?</span>',
  'Take everything else away and one job remains — stop the same money being spent twice. The network receives an opaque commitment and answers exactly that: spent, or unspent. Never the data, the parties, or the amount. Hard cryptography — one trivial question.',
  dia('oracle',560),
  mech([['Opaque commitment','The oracle sees only spent or unspent, never the trade itself.'],['Proves the tree, not the trade','A zero-knowledge proof attests the sparse-Merkle-tree state transition, not each payment.'],['Three proof types','Inclusion (registered, eternal), exclusion (low-latency settlement), unicity (the tree has not forked).']])),

// 8 NOTHING ELSE — what moves to the edge
n=>HD(n,'THE ARCHITECTURE · <b>WHAT MOVES TO THE EDGE</b>','Everything else moves to the edge. <span class="o">Only uniqueness stays.</span>',
  `<div class="lead" style="max-width:90ch">Everything a normal blockchain does for everyone — communication, storage, validation — moves to the parties who actually care, handled with ordinary tools. Each transaction is verified on its own, independent of every other one. That relocation, not a throughput number, is why it scales.</div>
  <div class="row3">
    <div class="cell"><div class="ct">Communication</div><div class="k">The asset carries its own proof; the wire just moves bytes — NOSTR, email, QR.</div></div>
    <div class="cell"><div class="ct">Storage</div><div class="k">State lives with the owner, not on every node — browser, device, IPFS.</div></div>
    <div class="cell"><div class="ct">Validation</div><div class="k">The recipient verifies; no validator set in the path — client-side, in parallel.</div></div>
  </div>
  <div class="note">A named primitive, not a novelty: client-side validation and single-use seals (Bitcoin Optech, RGB, Nervos CKB).</div>`),

// 9 THE INEVITABLE UNBUNDLING
n=>HD(n,'THE ARC · <b>WHY THIS WAS COMING</b>','The unbundling of the blockchain. <span class="o">We took it to the end.</span>',
  `<div class="lead" style="max-width:90ch">Each generation of consensus removed work from the network. This is the next step, not a departure.</div>
  <div class="tl">
    <div class="tlc"><div class="yr">2009 · BITCOIN</div><div class="nm">Correctness<br>+ ordering</div><div class="ds">Every node certifies every transaction and agrees on the order.</div></div>
    <div class="tlc"><div class="yr">2023 · SUI · FASTPAY</div><div class="nm">Correctness<br>only</div><div class="ds">Global ordering removed for assets that share no state.</div></div>
    <div class="tlc last"><div class="yr">2026 · UNICITY</div><div class="nm">Uniqueness<br>only</div><div class="ds">The network attests one thing — has this been spent. Correctness moves to the edge.</div></div>
  </div>
  <div class="punch"><span class="o">The logical endpoint of a decade of consensus research</span> — not a competitor to chains.</div>`),

// 10 THE ARCHITECTURE STACK
n=>DS(n,'WHO BUILT IT · <b>THE STACK</b>',
  'A minimal chain, <span class="o">and an economy that runs off it.</span>',
  'The consensus layer stays deliberately small. Everything a user touches is off-chain, joined by a thin SDK. The chain uses proof-of-work for one reason — to copy Bitcoin\'s trust model: trust no one.',
  dia('archstack',520),
  mech([['On-chain, minimal','RandomX proof-of-work, then chained HotStuff for ~1s finality, then the uniqueness oracle.'],['The SDK','A thin bridge in JS, Java and Rust between off-chain agents and on-chain proofs.'],['Agent execution layer','Transport (I2P, TCP/IP), messaging (NOSTR), storage, runtime — all peer-to-peer.']])),

// 11 THE RULE INSIDE THE TOKEN
n=>DS(n,'COMPLIANCE · <b>THE RULE INSIDE THE TOKEN</b>',
  'The rule lives <span class="o">inside the money.</span>',
  'Each token carries its own receive-condition — who may receive it, the jurisdiction, the limit. A transfer that fails it cannot be constructed. The asset attests its own compliance, never the private data behind it. The proof travels with the payment.',
  dia('compliance',980),
  mech([['Programmable','Signature, multi-sig, k-of-n threshold or time-lock, written once and travelling with the token.'],['Protocol-enforced','The check lives in the asset, not an app or custodian — no intermediary to bypass.'],['Risk managed, not avoided','The issuer sets who may hold the token; a rogue counterparty is on the platform and contained, not kept out.']])),

// 12 THREE OBSERVERS
n=>HD(n,'PRIVACY · <b>PROVEN, NOT ASSERTED</b>','Total privacy by default — <span class="o">against three observers, proven.</span>',
  `<div class="lead" style="max-width:90ch">Privacy was a founding principle of the design, not a setting added later. The papers prove it — against three concrete adversaries.</div>
  <div class="obs">
    <div class="o1"><div class="ol">The network</div><div class="od">Sees only opaque, perfectly-hiding commitments — never amounts, parties, or balances — and cannot link two consecutive transactions of the same token.</div><div class="tag">proven</div></div>
    <div class="o1"><div class="ol">The sender</div><div class="od">Cannot watch when, or to whom, the recipient later spends what was sent.</div><div class="tag">proven</div></div>
    <div class="o1"><div class="ol">Anyone with the address</div><div class="od">One published key; every sender derives a fresh, indistinguishable transaction key against it.</div><div class="tag">proven</div></div>
  </div>`),

// 13 NO BRIDGE
n=>DS(n,'RISK · <b>NO BRIDGE, NOTHING TO HACK</b>',
  'No bridge. <span class="o">Nothing to hack.</span>',
  'Bridge hacks are the largest loss category in crypto — a bridge holds the asset and forwards a message, and a message can be forged. Unicity holds nothing. A locked source-chain asset becomes a self-contained token, and the recipient verifies the lock directly against the source contract.',
  dia('nobridge',1080),
  mech([['No bridge','There is no cross-chain message to forge and no pooled liquidity to drain.'],['No custodian','No third party holds the asset between chains; the holder verifies the lock itself.'],['Nothing to hack','The most dangerous middleman in crypto is structurally gone.']])),

// 14 FIVE WINS, ONE HARD PROBLEM
n=>`<div class="slide"><div class="grid"></div><div class="pad cover">
  <div class="statement" style="font-size:64px">Five wins.<br><span class="o">One hard problem.</span></div>
  <div class="crule"></div>
  <div class="sub" style="max-width:80ch">Remove the shared ledger and five things follow — speed, scale, privacy, compliance, no bridge. One remains. With no shared state, the tokens themselves must enforce atomicity — and that is the trade.</div>
</div>${foot(n)}</div>`,

// 15 THE TRADE
n=>DS(n,'MARKET MICROSTRUCTURE · <b>THE TRADE</b>',
  'The hard part of cash-like money is <span class="o">the trade.</span>',
  'Two parties swap, with no one in the middle to hold both legs. The old fix is a timed lock — and the clock is the attack surface, because one side can stall and walk. Unicity drops the clock: both commit independently, and the swap forms for both at once, or not at all.',
  dia('swap',840),
  mech([['No clock','Both commit independently against a shared reference: no deadline, no refund timer.'],['Both or neither','Both locked, the swap completes; either walks away, both keep their token. Capital is never trapped.'],['No mempool, no MEV','It runs off-chain at machine speed, immune to front-running and mempool games.']])),

// 16 SCALE BY ADDING SHARDS
n=>DS(n,'SCALABILITY · <b>HORIZONTAL BY DESIGN</b>',
  'The oracle validates nothing. <span class="o">Throughput is added, not rationed.</span>',
  'The oracle re-executes nothing — it certifies one consistency proof per round, not each payment. Cost per transaction collapses. Capacity grows the way servers do: add a shard. Permissionless and redundant, so it is not a new chokepoint.',
  dia('shards',1080),
  mech([['Add a shard, +30,000 tx/sec','A design figure on a single consumer CPU — Plonky3 AIR, no trusted setup. Stated, not a live benchmark.'],['Sub-microcent per proof','Each new shard adds capacity; the proofs stay succinct.'],['Permissionless, redundant','Independent staked aggregators join freely; sub-trees run in parallel, with no global bottleneck.']])),

// 17 THE MACHINE MARKET — CLOB matrix
n=>HD(n,'THE PAYOFF · <b>THE MACHINE MARKET</b>','CEX speed. DEX custody. <span class="o">Private and compliant.</span>',
  `<div class="lead" style="max-width:90ch">When two agents settle directly, the venue has nothing left to do. Binance has the speed. Uniswap has the custody. Neither has the privacy, and neither was built for a machine payment. Unicity has all of it, with no venue at all.</div>
  <div class="tbl">
    <div class="trow head" style="grid-template-columns:1.5fr 1fr 1fr 1fr 1.1fr"><div class="tc"></div><div class="tc">Binance</div><div class="tc">Uniswap</div><div class="tc">Hyperliquid</div><div class="tc u">Unicity</div></div>
    <div class="trow" style="grid-template-columns:1.5fr 1fr 1fr 1fr 1.1fr"><div class="tc lbl">Speed</div><div class="tc">sub-second</div><div class="tc mut">block time</div><div class="tc">fast</div><div class="tc win ucol">sub-second</div></div>
    <div class="trow" style="grid-template-columns:1.5fr 1fr 1fr 1fr 1.1fr"><div class="tc lbl">Self-custody</div><div class="tc mut">custodial</div><div class="tc">you hold keys</div><div class="tc">you hold keys</div><div class="tc win ucol">you hold keys</div></div>
    <div class="trow" style="grid-template-columns:1.5fr 1fr 1fr 1fr 1.1fr"><div class="tc lbl">Privacy</div><div class="tc mut">operator sees all</div><div class="tc mut">fully public</div><div class="tc mut">public positions</div><div class="tc win ucol">unlinkable</div></div>
    <div class="trow" style="grid-template-columns:1.5fr 1fr 1fr 1fr 1.1fr"><div class="tc lbl">MEV</div><div class="tc mut">operator order</div><div class="tc mut">sandwiched</div><div class="tc mut">mempool</div><div class="tc win ucol">no mempool</div></div>
    <div class="trow" style="grid-template-columns:1.5fr 1fr 1fr 1fr 1.1fr"><div class="tc lbl">Compliance</div><div class="tc">off-chain KYC</div><div class="tc mut">none</div><div class="tc mut">none</div><div class="tc win ucol">in the asset</div></div>
  </div>`),

// 18 WHAT GETS BUILT — the DAC
n=>DS(n,'WHAT GETS BUILT · <b>AN ECONOMY OF MACHINES</b>',
  'A whole company, <span class="o">run by a swarm of agents.</span>',
  'Not a roadmap — we built one. A decentralized autonomous corporation for BlackRock: a weather-based parametric insurer whose capital, underwriting and cession all run by agents transacting in Unicity tokens. Agents are the new smart contracts — verifiable code, off-chain, on bearer assets.',
  dia('dac',1000),
  mech([['Capital','Capacity is committed and tracked on-chain-proven bearer tokens.'],['Underwriting','Premiums priced and bound by predicate to the policy\'s receive-condition.'],['Cession','Claims and reinsurance settle agent-to-agent, with no venue in the middle.']])),

// 19 VISION OF THE TITANS
n=>HD(n,'EXTERNAL VALIDATION · <b>EVERYONE CONFIRMS THE DIAGNOSIS</b>','The serious players are spending billions <span class="o">to escape the ledgers they built.</span>',
  `<div class="lead" style="max-width:90ch">AP2 authorises, x402 settles, the players below optimise the ledger — the mandate and the audit trail scatter across layers. They split the proof. Unicity keeps it in the asset.</div>
  <div class="tbl">
    <div class="trow head" style="grid-template-columns:1.1fr 2.4fr 1fr"><div class="tc">Player</div><div class="tc">Their move</div><div class="tc u">Approach</div></div>
    <div class="trow" style="grid-template-columns:1.1fr 2.4fr 1fr"><div class="tc lbl">Circle</div><div class="tc">Pivoted to infrastructure — the Arc L1, a $222M presale, bought Malachite.</div><div class="tc mut">optimise the ledger</div></div>
    <div class="trow" style="grid-template-columns:1.1fr 2.4fr 1fr"><div class="tc lbl">Solana</div><div class="tc">Alpenglow cut finality to ~150ms — and its own co-founder concedes a physical ceiling.</div><div class="tc mut">optimise the ledger</div></div>
    <div class="trow" style="grid-template-columns:1.1fr 2.4fr 1fr"><div class="tc lbl">Cardano</div><div class="tc">Midnight adds zero-knowledge selective-disclosure privacy.</div><div class="tc mut">optimise the ledger</div></div>
    <div class="trow" style="grid-template-columns:1.1fr 2.4fr 1fr"><div class="tc lbl">USBC · Greg Kidd</div><div class="tc">Put identity inside the dollar — the right conclusion, on one charter.</div><div class="tc mut">the right idea</div></div>
    <div class="trow" style="grid-template-columns:1.1fr 2.4fr 1fr"><div class="tc lbl" style="color:var(--o)">Unicity</div><div class="tc win ucol">Removes the shared ledger at the data-structure level.</div><div class="tc win ucol">eliminate it</div></div>
  </div>`),

// 20 TEAM + PROOF + ASK
n=>`<div class="slide"><div class="grid"></div><div class="glow"></div><div class="pad"><div class="hdr">${kick(n,'THE TEAM, THE PROOF & THE ASK · <b>CO-BUILD</b>')}<h2>We built this once before. <span class="o">Now make it hold between strangers.</span></h2></div>
  <div class="row3" style="margin-top:30px">
    <div class="cell"><div class="ct">The team</div><div class="k">The cryptographers behind Unicity built Guardtime / KSI — sovereign-grade verification deployed with the Estonian Government, Lockheed Martin, Boeing and NATO. In production since 2012, eIDAS-grade. KSI held <b style="color:var(--ink)">300,000 tx/sec</b> in Eesti Pank's 2021 test — the lineage, not a live Unicity number.</div></div>
    <div class="cell"><div class="ct">The proof</div><div class="k">Three math papers prove what matters — privacy and no-double-spend. Drop them in any model and they check. Throughput is a sharding design result, named as such. All public on github.com/unicitynetwork.</div></div>
    <div class="cell"><div class="ct">The ask</div><div class="k"><b style="color:var(--ink)">$5M Seed</b> · $25M cap / $50M token FDV · SAFE + token warrant. First build: a USBC dollar that settles the moment the credential checks out — Unicity brings the settlement; the partner brings the regulatory layer we openly lack.</div></div>
  </div>
  <div class="finale">One charter settles at home. <span class="o">This is the layer that carries the rule and the proof between two banks — or two machines — that share nothing else.</span></div>
</div>${foot(n)}</div>`,
];

T=SL.length;
const ORDER=[0,3,4,1,2,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
const S=ORDER.map((idx,pos)=>SL[idx](pos+1));
const html=`<!DOCTYPE html><html><head><meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Anton&family=Geist+Mono:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>${CSS}</style></head><body>${defs}
<div style="display:flex;flex-direction:column;align-items:center;gap:24px;padding:24px;background:#000">${S.join('\n')}</div></body></html>`;
fs.writeFileSync(DIR+'/index.html',html);
console.log('wrote index.html ('+S.length+' slides)');
const b=await puppeteer.launch({headless:'new',args:['--no-sandbox']});
const p=await b.newPage(); await p.setViewport({width:1680,height:960,deviceScaleFactor:2});
await p.goto('file://'+DIR+'/index.html',{waitUntil:'networkidle0'}); await new Promise(r=>setTimeout(r,1000));
const over=await p.evaluate(()=>Array.from(document.querySelectorAll('.slide')).map((s,i)=>{const pad=s.querySelector('.pad');const foot=s.querySelector('.foot');const sr=s.getBoundingClientRect();const ft=foot?foot.getBoundingClientRect().top-sr.top:900;let mb=0;pad.querySelectorAll('*').forEach(e=>{const r=e.getBoundingClientRect();if(r.height>2)mb=Math.max(mb,r.bottom-sr.top);});return{n:i+1,oflow:pad.scrollHeight>pad.clientHeight?pad.scrollHeight-pad.clientHeight:0,gap:Math.round(ft-mb)};}).filter(x=>x.oflow>2||x.gap<16));
console.log('overflow/collide:',JSON.stringify(over));
const els=await p.$$('.slide'); const pngs=[];
for(let i=0;i<els.length;i++){const fp=`${DIR}/slides/slide-${String(i+1).padStart(2,'0')}.png`;await els[i].screenshot({path:fp});pngs.push(fp);}
await b.close(); console.log('rendered',pngs.length,'PNGs');
const pdf=await PDFDocument.create();
for(const fp of pngs){const img=await pdf.embedPng(fs.readFileSync(fp));const pg=pdf.addPage([1600,900]);pg.drawImage(img,{x:0,y:0,width:1600,height:900});}
fs.writeFileSync(DIR+'/Unicity_HardYaka_Seed_Deck.pdf',await pdf.save());
console.log('wrote Unicity_HardYaka_Seed_Deck.pdf');
