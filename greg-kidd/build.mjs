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
const DG={}; for(const k of ['xform','oracle','compliance','swap','hub','bearer','trilemma']){let s=fs.readFileSync(`${DIR}/diagrams/${k}.svg`,'utf8');s=s.replace(/max-height:\s*\d+px/g,'height:auto');DG[k]=s;}
const dia=(k,maxw,mt=16)=>`<div style="width:100%;max-width:${maxw}px;margin:${mt}px auto 0">${DG[k]}</div>`;

const CSS=`
:root{--bg:#060606;--ink:#FEFEFE;--o:#FF6A1F;--dim:#B8B8B2;--faint:#74746E;--rule:#242422;--card:#101010;--owash:rgba(255,106,31,.07);--oline:rgba(255,106,31,.42);--bad:#8a8a84;}
*{margin:0;padding:0;box-sizing:border-box}
body{background:#000}
.slide{position:relative;width:1600px;height:900px;background:var(--bg);color:var(--ink);overflow:hidden;font-family:"Geist Mono",monospace;-webkit-font-smoothing:antialiased}
.grid{position:absolute;inset:0;z-index:0;background-image:linear-gradient(rgba(255,255,255,.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.02) 1px,transparent 1px);background-size:64px 64px}
.glow{position:absolute;inset:0;z-index:0;background:radial-gradient(ellipse 60% 50% at 50% 46%,rgba(255,106,31,.08),transparent 70%)}
.pad{position:relative;z-index:2;height:100%;padding:56px 80px 64px;display:flex;flex-direction:column;justify-content:center}
.anton{font-family:"Anton",sans-serif;font-weight:400;text-transform:uppercase;letter-spacing:.01em}
.kick{font-size:12px;letter-spacing:.3em;text-transform:uppercase;color:var(--faint)}
.kick b{color:var(--o);font-weight:400}
h2{font-family:"Anton",sans-serif;font-weight:400;text-transform:uppercase;font-size:35px;line-height:1.08;letter-spacing:.004em;margin-top:13px;max-width:30ch}
h2 .o{color:var(--o)}
.lead{margin-top:15px;font-size:15px;line-height:1.62;color:var(--dim);max-width:92ch}
.lead b{color:var(--ink);font-weight:600}
.lead .o{color:var(--o);font-weight:600}
.cl{margin-top:11px;font-size:14.5px;line-height:1.58;color:var(--dim);max-width:64ch}
.cl b{color:var(--ink);font-weight:600}
.cl .o{color:var(--o)}
.punch{margin-top:24px;padding:13px 0 0 16px;border-left:2px solid var(--o);font-size:16px;line-height:1.46;color:var(--ink);font-weight:500;max-width:80ch}
.punch .o{color:var(--o)}
.cols{display:flex;gap:50px;align-items:center;padding-top:20px}
.col{flex:1;min-width:0}
.mega{font-family:"Anton",sans-serif;font-size:150px;line-height:.84;color:var(--o);letter-spacing:-.01em}
.megaq{font-size:12px;letter-spacing:.1em;text-transform:uppercase;color:var(--faint);margin-top:8px;max-width:32ch}
.principle{margin-top:8px}
.principle .pr{display:flex;align-items:baseline;gap:18px;padding:18px 0;border-top:1px solid var(--rule)}
.principle .pr:last-child{border-bottom:1px solid var(--rule)}
.principle .a{color:var(--o);font-family:"Anton",sans-serif;font-size:16px}
.principle .t{color:var(--dim);font-size:14.5px}.principle .t b{color:var(--ink);font-weight:600;display:block;font-size:16px;margin-bottom:3px;font-family:"Anton",sans-serif;letter-spacing:.01em;text-transform:uppercase}
.principle .r{margin-left:auto;font-size:11px;letter-spacing:.12em;text-transform:uppercase;white-space:nowrap}
.ok{color:var(--o)} .no{color:#9a9a92}
.stats{display:flex;flex-direction:column;gap:12px}
.stat{border:1px solid var(--rule);border-radius:7px;background:var(--card);padding:14px 16px}
.stat .v{font-family:"Anton",sans-serif;font-size:21px;color:var(--ink)}.stat .v .o{color:var(--o)}
.stat .k{font-size:11px;color:var(--faint);margin-top:5px;letter-spacing:.04em;line-height:1.4}
.foot{position:absolute;left:80px;right:80px;bottom:26px;z-index:2;display:flex;justify-content:space-between;align-items:center;border-top:1px solid var(--rule);padding-top:12px;font-size:9.5px;letter-spacing:.16em;text-transform:uppercase;color:var(--faint)}
.foot .lg svg{height:13px;width:auto;opacity:.8}
.cardrow{display:flex;gap:16px;margin-top:16px}
.c3{flex:1;border:1px solid var(--rule);border-left:2px solid var(--o);border-radius:6px;background:var(--card);padding:15px 18px}
.c3 .ct{font-family:"Anton",sans-serif;font-size:14px;letter-spacing:.04em;text-transform:uppercase;color:var(--o)}
.c3 .cb{font-size:12.5px;line-height:1.5;color:var(--dim);margin-top:9px}.c3 .cb b{color:var(--ink);font-weight:600}
.bands{display:flex;flex-direction:column;gap:7px;margin-top:14px}
.band{display:flex;align-items:center;gap:20px;border:1px solid var(--rule);border-radius:6px;background:var(--card);padding:12px 18px}
.band .bl{font-family:"Anton",sans-serif;font-size:15px;letter-spacing:.03em;text-transform:uppercase;color:var(--ink);width:300px;flex:none}
.band .bl span{display:block;font-family:"Geist Mono",monospace;font-size:10.5px;letter-spacing:.1em;color:var(--dim);text-transform:uppercase;margin-top:3px;font-weight:400}
.band .bc{font-size:12.5px;color:var(--dim);letter-spacing:.04em}
.band.sub{border-color:var(--oline);background:linear-gradient(90deg,var(--owash),transparent)}
.band.sub .bl{color:var(--o)} .band.sub .bc{color:var(--o)}
.askbox{margin-top:16px;border:1px solid var(--oline);border-radius:8px;background:linear-gradient(180deg,var(--owash),transparent);padding:18px 24px}
.askbox .big{font-family:"Anton",sans-serif;font-size:21px;color:var(--ink)}.askbox .big .o{color:var(--o)}
.askbox .ml{font-size:13px;color:var(--dim);margin-top:9px;line-height:1.5}.askbox .ml b{color:var(--ink)}
.closer{margin-top:18px;font-size:16px;line-height:1.5;color:var(--ink);font-weight:500;max-width:88ch}
.closer .o{color:var(--o)}
.tag{margin-top:14px;font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:var(--o)}
.src{margin-top:8px;font-size:9.5px;letter-spacing:.06em;color:var(--faint)}
`;

const kick=(n,t)=>`<div class="kick">${String(n).padStart(2,'0')} · ${t}</div>`;
let T=0;
const foot=(n)=>`<div class="foot"><span class="lg"><svg viewBox="0 0 641 128"><use href="#ulogo"/></svg></span><span>Unicity · Seed proposal · Confidential — for Greg Kidd</span><span>${String(n).padStart(2,'0')} / ${T}</span></div>`;

const SL=[
// 1 COVER
n=>`<div class="slide"><div class="grid"></div><div class="glow"></div>
<div class="pad" style="align-items:center;justify-content:center;text-align:center">
  <svg viewBox="0 0 641 128" style="height:56px;width:auto;margin-bottom:30px"><use href="#ulogo"/></svg>
  <div class="kick">Unicity &middot; a seed proposal for Greg Kidd</div>
  <h2 class="anton" style="font-size:46px;max-width:26ch;margin-top:24px;text-align:center;line-height:1.06">Fair access has always come down to <span class="o">three problems</span>. The third is still open.</h2>
  <div class="lead" style="text-align:center;max-width:86ch">Cut out the middleman, prove who is on the other end, let the money move. The first two were solved a decade ago. The third is the hardest — a payment that settles between strangers, carries its own rule, and never lands on someone else's ledger. That is the part Unicity builds.</div>
  <div style="margin-top:26px;font-size:12px;color:var(--faint);max-width:70ch">The cryptography is done and open-source. We will be straight about what is still being built.</div>
  <div style="margin-top:30px;font-size:10.5px;letter-spacing:.24em;text-transform:uppercase;color:var(--faint)">Tallinn · Zug · Abu Dhabi</div>
</div></div>`,

// 2 THE THREE PROBLEMS
n=>`<div class="slide"><div class="grid"></div><div class="pad">${kick(n,'FAIR ACCESS · <b>THE THREE PROBLEMS</b>')}
  <h2>Fair access has always come down to <span class="o">three problems</span>.</h2>
  <div class="principle" style="max-width:108ch">
    <div class="pr"><span class="a">→</span><div class="t"><b>Cut out the middleman</b>A decade of open infrastructure solved that.</div><div class="r ok">solved</div></div>
    <div class="pr"><span class="a">→</span><div class="t"><b>Let value move freely</b>Stablecoins now settle hundreds of billions a year between any two parties.</div><div class="r ok">solved</div></div>
    <div class="pr"><span class="a">→</span><div class="t"><b>Prove who is on the other end</b>So the money itself knows who may receive it. The hardest of the three.</div><div class="r no">still open</div></div>
  </div>
  <div class="punch">Two were solved a decade ago. <span class="o">The third is where the work is now.</span></div>
</div>${foot(n)}`,

// 3 THE WOUND
n=>`<div class="slide"><div class="grid"></div><div class="pad">${kick(n,'THE WOUND · <b>WHY IDENTITY NEVER HELD</b>')}
  <h2>Identity reached the right architecture <span class="o">before the market could carry it</span>.</h2>
  <div class="cols" style="align-items:center"><div class="col" style="flex:1.35">
    <div class="cl" style="max-width:none">GlobaliD had the architecture right early. The market couldn't carry it yet, and the mission moved into USBC.</div>
    <div class="cl" style="max-width:none">The cryptography was solved a decade ago. The gap was structural — the credential lived beside the transaction, so nothing in the system ever required carrying it. A check that can be skipped without breaking the flow gets skipped.</div>
    <div class="cl" style="max-width:none">The whole field stalled at the same place. Microsoft retired did:ion in 2023; Trinsic wound down before a credential was reused twice. Same wall, every time.</div>
  </div><div class="col">
    <svg width="100%" height="220" viewBox="0 0 420 220">
      <line x1="40" y1="184" x2="400" y2="184" stroke="#2a2a26"/><line x1="40" y1="34" x2="40" y2="184" stroke="#2a2a26"/>
      <path d="M40 180 L150 138 L240 112 L320 104 L400 102" fill="none" stroke="var(--bad)" stroke-width="2"/>
      <circle cx="240" cy="112" r="4" fill="#0E0E0C" stroke="var(--bad)"/><text x="240" y="96" fill="var(--faint)" font-family="Geist Mono" font-size="12" text-anchor="middle">Microsoft did:ion, 2023</text>
      <circle cx="320" cy="104" r="4" fill="#0E0E0C" stroke="var(--bad)"/><text x="335" y="92" fill="var(--faint)" font-family="Geist Mono" font-size="12">Trinsic winds down</text>
      <text x="220" y="212" fill="var(--faint)" font-family="Geist Mono" font-size="12" text-anchor="middle">digital identity — climbs, then flattens</text>
    </svg>
  </div></div>
  <div class="punch">Every design put identity alongside the money, <span class="o">where traffic had a way around it.</span></div>
</div>${foot(n)}`,

// 4 USBC
n=>`<div class="slide"><div class="grid"></div><div class="pad">${kick(n,'THE FIELD · <b>USBC</b>')}
  <h2>USBC put identity <span class="o">inside the dollar</span> — the correct conclusion.</h2>
  <div class="cols" style="align-items:flex-start;padding-top:24px"><div class="col">
    <div class="cl" style="max-width:none;margin-top:0">A regulated tokenized deposit: identity carried in the money itself, settled under one OCC charter. The rule lives where the value lives, so there is nothing for traffic to route around.</div>
  </div><div class="col">
    <div class="cl" style="max-width:none;margin-top:0">Inside a single charter it settles cleanly. The open question is what holds the same property across two charters — or between parties who share no trusted middle.</div>
  </div></div>
  <div class="punch">One charter answers it at home. <span class="o">Holding it between strangers, at machine speed, is the part still unbuilt.</span></div>
</div>${foot(n)}`,

// 5 THE MACHINE ECONOMY
n=>`<div class="slide"><div class="grid"></div><div class="glow"></div><div class="pad">${kick(n,'WHAT CHANGED · <b>THE MACHINE ECONOMY</b>')}
  <h2>Most of the traffic online is <span class="o">already machines</span> — and they have started paying each other.</h2>
  <div class="cols"><div class="col" style="flex:none"><div class="mega">57.5%</div><div class="megaq">of web requests are automated, not human — Cloudflare, 2026, and climbing</div></div>
  <div class="col"><div class="cl" style="font-size:15px;max-width:none;margin-top:0">Machines have begun settling value directly — roughly <b>100 million payments on Base in nine months</b> (Chainalysis). Payments are messaging on steroids, and the messaging now runs at machine scale.</div>
    <div class="cl" style="max-width:none">A machine cannot wait on hold while an intermediary clears it. It proves what it is in-band, and the payment settles in the same step.</div>
    <div class="punch" style="margin-top:18px">At machine speed, <span class="o">the check has to travel with the money.</span></div>
  </div></div>
</div>${foot(n)}`,

// 6 XFORM
n=>`<div class="slide"><div class="grid"></div><div class="pad">${kick(n,'HOW IT WORKS · <b>TAKE IT OFF THE LEDGER</b>')}
  <h2>A dollar on-chain is a row in <span class="o">a ledger someone else keeps</span>.</h2>
  <div class="lead" style="max-width:106ch">Every move asks that ledger for permission first — the value lives in the database, not the hand that holds it. Unicity reduces it to a bearer file: the dollar carries its own value and moves directly between two parties, the way cash changes hands. The chain answers one question — has this been spent — and stays blind to the payment around it.</div>
  ${dia('xform',1180,20)}
</div>${foot(n)}`,

// 7 BEARER
n=>`<div class="slide"><div class="grid"></div><div class="pad">${kick(n,'HOW IT WORKS · <b>BEARER VERIFICATION</b>')}
  <h2>A ten-dollar note settles the moment it changes hands — <span class="o">nobody sends it to a committee</span>.</h2>
  <div class="lead" style="max-width:106ch">Cash carries its own proof: the recipient checks the note in hand and the transfer is final — no ledger to query, no clearer in the middle. A Unicity token moves the same way. The proof travels inside it, and the recipient verifies it on arrival, against the token alone.</div>
  ${dia('bearer',920,28)}
  <div class="punch">Settlement happens at the point of receipt, <span class="o">with no third party in the path.</span></div>
</div>${foot(n)}`,

// 8 ORACLE
n=>`<div class="slide"><div class="grid"></div><div class="pad">${kick(n,'HOW IT WORKS · <b>ONE QUESTION</b>')}
  <h2>The only job a chain ever had: <span class="o">has this been spent?</span></h2>
  <div class="cols" style="align-items:center;padding-top:18px"><div class="col" style="flex:1.05">
    <div class="cl" style="font-size:15px;max-width:none;margin-top:0">Global ordering, world state, smart-contract execution — every other job a blockchain took on was built on top of that one answer. Unicity keeps the answer and lets the rest go.</div>
    <div class="cl" style="max-width:none">The oracle holds one thing: a proof that each token state is unique. It returns spent or unspent, and never sees the payment itself.</div>
    <div class="cl" style="max-width:none">Three thin layers — consensus secures the base, the oracle holds the yes-or-no, holders transact client-side.</div>
    <div class="punch" style="margin-top:18px">A chain with almost nothing left to do. <span class="o">That is the design.</span></div>
  </div><div class="col" style="flex:.95">${dia('oracle',560,0)}</div></div>
</div>${foot(n)}`,

// 9 COMPLIANCE
n=>`<div class="slide"><div class="grid"></div><div class="pad">${kick(n,'ARCHITECTURE · <b>THE MISSING PIECE</b>')}
  <h2>The rule lives <span class="o">inside the token</span>.</h2>
  <div class="lead" style="max-width:110ch">Each token carries its own receive-condition — KYC, jurisdiction, sanctions status. A transfer completes only if the recipient satisfies the predicate the token carries. The check happens in the construction of the transfer itself: there is no issuer to call, and no monitor reading the flow after settlement. A transfer to a party that fails the predicate cannot be constructed. This is the piece GlobaliD lacked — identity that binds to the movement of value, instead of sitting to one side where traffic could pass it by.</div>
  ${dia('compliance',1020,14)}
  <div class="punch">Manage the risk inside the asset, and <span class="o">there is no flow left to catch afterward.</span></div>
</div>${foot(n)}`,

// 10 TRILEMMA
n=>`<div class="slide"><div class="grid"></div><div class="pad">${kick(n,'ARCHITECTURE · <b>THE TRADEOFF</b>')}
  <h2>Privacy, compliance, and speed <span class="o">pull against each other</span> on a shared ledger.</h2>
  <div class="cols" style="align-items:center;padding-top:18px"><div class="col">
    <div class="cl" style="font-size:15px;max-width:none;margin-top:0">Make the transactions private and the auditors go blind. Add the cryptography that lets them see again, and throughput collapses toward one payment a second.</div>
    <div class="cl" style="max-width:none">The conflict is structural. As long as every party reads from and writes to the same ledger, two of the three hold at once — never all three.</div>
    <div class="cl" style="max-width:none">Remove the shared ledger, and the three have nothing left to contend over.</div>
    <div class="punch" style="margin-top:18px">Take away the thing they fight on, and <span class="o">the trade-off has nowhere to live.</span></div>
  </div><div class="col">${dia('trilemma',470,0)}</div></div>
</div>${foot(n)}`,

// 11 SWAP
n=>`<div class="slide"><div class="grid"></div><div class="pad">${kick(n,'BUILT FOR TRADE · <b>THE SWAP</b>')}
  <h2>The hard part of cash-like money is <span class="o">the trade</span>.</h2>
  <div class="lead" style="max-width:112ch">Holding a token that carries its own proof is the easy half. The trade is the hard half — two parties swapping value with no one in the middle to hold both legs. The standard fix is a hash-time-locked contract: a countdown, claim inside the window or the swap unwinds. The window is also the attack surface — one side stalls, runs the clock, and walks. That griefing problem has dogged atomic swaps for a decade. Unicity drops the clock: each side commits independently against the other's proof, and the swap forms for both at once, or never forms and each token stays exactly where it sat.</div>
  ${dia('swap',860,14)}
</div>${foot(n)}`,

// 12 HUB
n=>`<div class="slide"><div class="grid"></div><div class="pad">${kick(n,'THE MACHINE MARKET · <b>WHAT IT BECOMES</b>')}
  <h2>When two agents settle directly, <span class="o">the exchange in the middle has nothing left to do</span>.</h2>
  <div class="cols" style="align-items:center;padding-top:16px"><div class="col" style="flex:1.05">
    <div class="cl" style="font-size:15px;max-width:none;margin-top:0">At volume, trustless transfers compose into a market that coordinates itself — agents discover, negotiate, and settle peer to peer, each transfer carrying its own proof and its own receive-condition.</div>
    <div class="cl" style="max-width:none">Agentic data is the first case to reach scale. A model buys a dataset, an attestation, a unit of compute — and the payment settles in the same step that proves what it is.</div>
    <div class="punch" style="margin-top:16px">Settlement is the substrate <span class="o">the machine market runs on.</span></div>
  </div><div class="col" style="flex:.95">${dia('hub',520,0)}</div></div>
</div>${foot(n)}`,

// 13 TEAM
n=>`<div class="slide"><div class="grid"></div><div class="pad">${kick(n,'WHO WE ARE · <b>THE KSI TEAM</b>')}
  <h2>The team that built the system <span class="o">Estonia's e-government runs on</span>.</h2>
  <div class="cols" style="align-items:center"><div class="col">
    <div class="cl" style="max-width:none;margin-top:0">KSI has secured Estonia's e-government records in production since 2012, eIDAS-grade.</div>
    <div class="cl" style="max-width:none">The same KSI design held 300,000 transactions a second in Eesti Pank's 2021 digital-currency test — the lineage, not a live Unicity benchmark.</div>
    <div class="cl" style="max-width:none">We will be straight about the state of it: the core is live and open-source, the repos are rough in places, and full credential support is still being built. We are protocol engineers, not lawyers.</div>
  </div><div class="col"><div class="stats">
    <div class="stat"><div class="v">2012</div><div class="k">KSI securing Estonia's e-government records in production since</div></div>
    <div class="stat"><div class="v"><span class="o">300,000</span> / sec</div><div class="k">held in Eesti Pank's 2021 digital-currency test — the team's KSI design</div></div>
    <div class="stat"><div class="v">eIDAS-grade</div><div class="k">built to the EU's trust-services standard</div></div>
  </div></div></div>
</div>${foot(n)}`,

// 14 PROOF
n=>`<div class="slide"><div class="grid"></div><div class="pad">${kick(n,'PROOF · <b>TRUST THE MATH</b>')}
  <h2>The white paper is marketing. <span class="o">The work is three math papers.</span></h2>
  <div class="lead" style="max-width:108ch">We cringe at the white paper. The substance sits in three papers on GitHub — drop them into any model and it will check the proofs: privacy on both sides, and no double-spend. Throughput is a matter of sharding, by design; it was never claimed as a benchmark.</div>
  <div class="cardrow">
    <div class="c3"><div class="ct">Aggregation</div><div class="cb">Off-chain and offline tokens; zero-knowledge proofs, no trusted setup.</div><div class="cb" style="color:var(--faint);margin-top:10px">github.com/unicitynetwork/aggr-layer-paper</div></div>
    <div class="c3"><div class="ct">Execution</div><div class="cb">No double-spend; privacy held service-side and user-side; nothing waiting on a gatekeeper.</div><div class="cb" style="color:var(--faint);margin-top:10px">github.com/unicitynetwork/execution-model-tex</div></div>
    <div class="c3"><div class="ct">Predicates &amp; swaps</div><div class="cb">The rule lives in the token; two strangers trade with no party between them.</div><div class="cb" style="color:var(--faint);margin-top:10px">github.com/unicitynetwork/unicity-predicates-tex</div></div>
  </div>
  <div class="punch">Public on GitHub, <span class="o">open to anyone who wants to read the proofs.</span></div>
</div>${foot(n)}`,

// 15 BOUNDARY
n=>`<div class="slide"><div class="grid"></div><div class="pad">${kick(n,'BACK TO USBC · <b>THE LIMIT OF ONE CHARTER</b>')}
  <h2>A charter settles cleanly <span class="o">inside its own walls</span>.</h2>
  <div class="cols" style="align-items:center;padding-top:18px"><div class="col" style="flex:1.25">
    <div class="cl" style="font-size:15px;max-width:none;margin-top:0">USBC reaches the right answer: identity inside the dollar, one OCC charter, a real deposit at a real bank. Within its own membership, it holds.</div>
    <div class="cl" style="max-width:none">Across two charters, settlement still wants a trusted party in the middle — and a machine moving at machine speed has no human to clear it.</div>
    <div class="cl" style="max-width:none">The settlement layer across charters, and across machines, is the one thing a charter cannot build for itself.</div>
  </div><div class="col"><div style="border:1px solid var(--oline);border-radius:8px;background:linear-gradient(180deg,var(--owash),transparent);padding:22px 24px">
    <div style="font-family:'Anton',sans-serif;font-size:17px;color:var(--ink);line-height:1.2">USBC<br><span style="color:var(--faint);font-size:12px;font-family:'Geist Mono',monospace;letter-spacing:.04em">identity inside the dollar · one charter</span></div>
    <div style="text-align:center;color:var(--o);font-family:'Anton',sans-serif;font-size:22px;margin:12px 0">↓</div>
    <div style="font-family:'Anton',sans-serif;font-size:17px;color:var(--o);line-height:1.2">UNICITY<br><span style="color:var(--faint);font-size:12px;font-family:'Geist Mono',monospace;letter-spacing:.04em">the same rule · across charters, across machines</span></div>
  </div></div></div>
</div>${foot(n)}`,

// 16 MAP
n=>`<div class="slide"><div class="grid"></div><div class="pad">${kick(n,'WHERE THIS SITS · <b>THE LAYER UNDER THE PORTFOLIO</b>')}
  <h2>A portfolio shaped like this assumes one thing all the way through: <span class="o">a place to settle</span>.</h2>
  <div class="lead" style="margin-top:8px;max-width:104ch">Identity, payments, exchanges, compute, tokenized money — five layers, 250 companies, each one resting on a place where a transfer becomes final with its rule still attached. That layer was assumed, not built.</div>
  <div class="bands">
    <div class="band"><div class="bl">Identity<span>who can act</span></div><div class="bc">GlobaliD · Indicio · Terminal 3</div></div>
    <div class="band"><div class="bl">Payments<span>how value moves</span></div><div class="bc">Ripple · Square · Robinhood</div></div>
    <div class="band"><div class="bl">Exchanges &amp; Custody<span>where value is held</span></div><div class="bc">Coinbase · Uphold</div></div>
    <div class="band"><div class="bl">Data · Compute · Speed<span>what it runs on</span></div><div class="bc">Filecoin · Solana · Brave</div></div>
    <div class="band"><div class="bl">Tokenized Money<span>money with a rule inside</span></div><div class="bc">Vast Bank · USBC</div></div>
    <div class="band sub"><div class="bl">Where it settles<span>the layer assumed all the way through</span></div><div class="bc">UNICITY — where a transfer becomes final with its rule still attached</div></div>
  </div>
</div>${foot(n)}`,

// 17 ASK
n=>`<div class="slide"><div class="grid"></div><div class="glow"></div><div class="pad">${kick(n,'THE ASK · <b>CO-BUILD</b>')}
  <h2>Put the rule where the money is, and make it hold <span class="o">between strangers</span>.</h2>
  <div class="lead" style="max-width:104ch">The first two of the three problems were solved a decade ago. The third — settlement that holds between two parties who share no bank and no trusted middle — is the part we built.</div>
  <div class="askbox">
    <div class="big">Raising <span class="o">$5M Seed</span> · $25M cap / $50M token FDV · SAFE + token warrant.</div>
    <div class="ml">First build: a <b>USBC dollar that settles the moment the credential checks out</b>. The rule travels inside the money — who may receive it, under what jurisdiction — so a transfer that cannot satisfy it is never constructed. Identity inside the dollar, between any two parties, at machine speed.</div>
  </div>
  <div class="closer">A single charter settles at home. <span class="o">This is the layer that carries the same rule between two banks, or two machines, that share nothing else.</span></div>
  <div class="tag">Architecture · proof · public on GitHub</div>
  <div class="src">Cloudflare · Chainalysis · Eesti Pank · USBC press · github.com/unicitynetwork</div>
</div>${foot(n)}`,
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
console.log('wrote Unicity_HardYaka_Seed_Deck_v6.pdf');
