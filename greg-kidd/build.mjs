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
:root{--bg:#060606;--ink:#FEFEFE;--o:#FF6A1F;--dim:#B5B5AF;--faint:#74746E;--rule:#242422;--card:#101010;--owash:rgba(255,106,31,.07);--oline:rgba(255,106,31,.42);--bad:#8a8a84;}
*{margin:0;padding:0;box-sizing:border-box}
body{background:#000}
.slide{position:relative;width:1600px;height:900px;background:var(--bg);color:var(--ink);overflow:hidden;font-family:"Geist Mono",monospace;-webkit-font-smoothing:antialiased}
.grid{position:absolute;inset:0;z-index:0;background-image:linear-gradient(rgba(255,255,255,.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.02) 1px,transparent 1px);background-size:64px 64px}
.glow{position:absolute;inset:0;z-index:0;background:radial-gradient(ellipse 60% 50% at 50% 46%,rgba(255,106,31,.08),transparent 70%)}
.pad{position:relative;z-index:2;height:100%;padding:56px 80px 64px;display:flex;flex-direction:column;justify-content:center}
.anton{font-family:"Anton",sans-serif;font-weight:400;text-transform:uppercase;letter-spacing:.01em}
.kick{font-size:12px;letter-spacing:.32em;text-transform:uppercase;color:var(--faint)}
.kick b{color:var(--o);font-weight:400}
h2{font-family:"Anton",sans-serif;font-weight:400;text-transform:uppercase;font-size:40px;line-height:1.04;letter-spacing:.006em;margin-top:13px;max-width:28ch}
h2 .o{color:var(--o)}
.lead{margin-top:14px;font-size:15px;line-height:1.62;color:var(--dim);max-width:90ch}
.lead b{color:var(--ink);font-weight:600}
.lead .o{color:var(--o);font-weight:600}
.cl{margin-top:10px;font-size:14.5px;line-height:1.56;color:var(--dim)}
.cl b{color:var(--ink);font-weight:600}
.cl .o{color:var(--o)}
.punch{margin-top:24px;padding:13px 0 0 16px;border-left:2px solid var(--o);font-size:16px;line-height:1.45;color:var(--ink);font-weight:500}
.punch .o{color:var(--o)}
.cols{display:flex;gap:48px;align-items:center;padding-top:22px}
.col{flex:1;min-width:0}
.mega{font-family:"Anton",sans-serif;font-size:158px;line-height:.84;color:var(--o);letter-spacing:-.01em}
.megaq{font-size:12px;letter-spacing:.1em;text-transform:uppercase;color:var(--faint);margin-top:8px;max-width:30ch}
.principle .pr{display:flex;align-items:baseline;gap:16px;padding:16px 0;border-top:1px solid var(--rule)}
.principle .pr:last-child{border-bottom:1px solid var(--rule)}
.principle .a{color:var(--o);font-family:"Anton",sans-serif;font-size:16px}
.principle .t{color:var(--dim);font-size:14.5px}.principle .t b{color:var(--ink);font-weight:600;display:block;font-size:15px;margin-bottom:2px}
.principle .r{margin-left:auto;font-size:11px;letter-spacing:.12em;text-transform:uppercase;white-space:nowrap}
.ok{color:var(--o)} .no{color:#9a9a92}
.stats{display:flex;flex-direction:column;gap:12px}
.stat{border:1px solid var(--rule);border-radius:7px;background:var(--card);padding:14px 16px}
.stat .v{font-family:"Anton",sans-serif;font-size:21px;color:var(--ink)}.stat .v .o{color:var(--o)}
.stat .k{font-size:11px;color:var(--faint);margin-top:5px;letter-spacing:.04em}
.foot{position:absolute;left:80px;right:80px;bottom:26px;z-index:2;display:flex;justify-content:space-between;align-items:center;border-top:1px solid var(--rule);padding-top:12px;font-size:9.5px;letter-spacing:.16em;text-transform:uppercase;color:var(--faint)}
.foot .lg svg{height:13px;width:auto;opacity:.8}
.cardrow{display:flex;gap:16px;margin-top:14px}
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
.askbox{margin-top:14px;border:1px solid var(--oline);border-radius:8px;background:linear-gradient(180deg,var(--owash),transparent);padding:18px 24px}
.askbox .big{font-family:"Anton",sans-serif;font-size:22px;color:var(--ink)}.askbox .big .o{color:var(--o)}
.askbox .ml{font-size:13px;color:var(--dim);margin-top:9px;line-height:1.5}.askbox .ml b{color:var(--ink)}
.closer{margin-top:18px;font-family:"Anton",sans-serif;font-size:25px;line-height:1.1;text-transform:uppercase;color:var(--ink);max-width:34ch}
.closer .o{color:var(--o)}
.tag{margin-top:13px;font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:var(--o)}
.src{margin-top:8px;font-size:9.5px;letter-spacing:.06em;color:var(--faint)}
`;

const kick=(n,t)=>`<div class="kick">${String(n).padStart(2,'0')} · ${t}</div>`;
let T=0;
const foot=(n)=>`<div class="foot"><span class="lg"><svg viewBox="0 0 641 128"><use href="#ulogo"/></svg></span><span>Unicity · Seed proposal · Confidential — for Greg Kidd</span><span>${String(n).padStart(2,'0')} / ${T}</span></div>`;

const SL=[
// 1 COVER — the hero's quest
n=>`<div class="slide"><div class="grid"></div><div class="glow"></div>
<div class="pad" style="align-items:center;justify-content:center;text-align:center">
  <svg viewBox="0 0 641 128" style="height:56px;width:auto;margin-bottom:30px"><use href="#ulogo"/></svg>
  <div class="kick">Unicity &middot; a seed proposal for Greg Kidd</div>
  <h2 class="anton" style="font-size:52px;max-width:24ch;margin-top:24px;text-align:center">Thirty years, one fight: <span class="o">a fair shot at your own money.</span></h2>
  <div class="lead" style="text-align:center;max-width:82ch">Cut out the middleman. Prove who's really on the other end. Let the money move. You shipped the first two for a generation — and the third never held. This is the piece that was always missing, and the team that finally built it.</div>
  <div style="margin-top:40px;font-size:10.5px;letter-spacing:.24em;text-transform:uppercase;color:var(--faint)">Tallinn · Zug · Abu Dhabi</div>
</div></div>`,

// 2 THE QUEST — three things
n=>`<div class="slide"><div class="grid"></div><div class="pad">${kick(n,'THE QUEST · <b>FAIR ACCESS</b>')}
  <h2>Fair access always came down to <span class="o">three things</span>.</h2>
  <div class="cols"><div class="col" style="flex:1.25">
    <div class="principle">
      <div class="pr"><span class="a">→</span><div class="t"><b>Cut out the middleman</b>Square, Dwolla, the whole peer-to-peer wave — you backed it.</div><div class="r ok">done</div></div>
      <div class="pr"><span class="a">→</span><div class="t"><b>Move the money freely</b>Solana, Ripple — value at the speed of a message.</div><div class="r ok">done</div></div>
      <div class="pr"><span class="a">→</span><div class="t"><b>Prove who's really there</b>Every attempt to make identity actually count has stalled.</div><div class="r no">still open</div></div>
    </div>
  </div><div class="col">
    <div class="lead" style="margin-top:0">Two of these changed the world. The third — proving who's on the other end in a way that <b>counts</b> — is still open. It's the hardest one. And it's the piece everything else has been quietly waiting on.</div>
  </div></div>
  <div class="punch">You backed all three. <span class="o">Only one is still unfinished.</span></div>
</div>${foot(n)}`,

// 3 THE WOUND — GlobaliD
n=>`<div class="slide"><div class="grid"></div><div class="pad">${kick(n,'THE PIECE THAT NEVER HELD · <b>GLOBALID</b>')}
  <h2>You bet your career on it. It was right. <span class="o">It was early.</span></h2>
  <div class="cols" style="align-items:center"><div class="col" style="flex:1.3">
    <div class="cl">GlobaliD wasn't wrong about identity. It was years ahead of everyone.</div>
    <div class="cl">It didn't stall on the cryptography. It stalled because nobody ever <b>had</b> to use it.</div>
    <div class="cl">You could always skip the check and nothing broke — so people skipped it.</div>
    <div class="cl">And it wasn't just you. Microsoft shut its identity chain in 2023. Trinsic folded before one credential was ever reused. The whole field hit the same wall.</div>
  </div><div class="col">
    <svg width="100%" height="230" viewBox="0 0 420 230">
      <line x1="40" y1="190" x2="400" y2="190" stroke="#2a2a26"/><line x1="40" y1="34" x2="40" y2="190" stroke="#2a2a26"/>
      <path d="M40 186 L150 142 L240 114 L320 106 L400 104" fill="none" stroke="var(--bad)" stroke-width="2"/>
      <circle cx="240" cy="114" r="4" fill="#0E0E0C" stroke="var(--bad)"/><text x="240" y="98" fill="var(--faint)" font-family="Geist Mono" font-size="12" text-anchor="middle">Microsoft did:ion, 2023</text>
      <circle cx="320" cy="106" r="4" fill="#0E0E0C" stroke="var(--bad)"/><text x="336" y="94" fill="var(--faint)" font-family="Geist Mono" font-size="12">Trinsic folds</text>
      <text x="220" y="218" fill="var(--faint)" font-family="Geist Mono" font-size="12" text-anchor="middle">digital identity — climbs, then flattens</text>
    </svg>
  </div></div>
  <div class="punch">The problem was never better identity. <span class="o">It was that nothing ever forced anyone to carry it.</span></div>
</div>${foot(n)}`,

// 4 HIS ANSWER — USBC
n=>`<div class="slide"><div class="grid"></div><div class="pad">${kick(n,'WHAT YOU DID NEXT · <b>USBC</b>')}
  <h2>So you stopped bolting identity on. <span class="o">You put it inside the money.</span></h2>
  <div class="lead" style="max-width:96ch">USBC: a real dollar, in a real bank, that knows who's allowed to hold it. Identity stopped being a checkbox sitting next to the payment — it became part of the dollar itself. You found the answer the hard way, and you proved it works. On one bank charter.</div>
  <div class="cols" style="padding-top:18px"><div class="col">
    <div class="cl"><b>The instinct is exactly right.</b> Put the rule where the money is, not in a system off to the side that everyone can route around.</div>
  </div><div class="col">
    <div class="cl">The only question left is how to make it true <b>everywhere</b> — for a counterparty who doesn't bank where you bank, at a speed no bank can keep up with.</div>
  </div></div>
  <div class="punch">You already know the answer. <span class="o">We built the part that makes it work past your own four walls.</span></div>
</div>${foot(n)}`,

// 5 THE DRAGON — machines
n=>`<div class="slide"><div class="grid"></div><div class="glow"></div><div class="pad">${kick(n,'WHAT CHANGED · <b>THE BUYER SHOWED UP</b>')}
  <h2>Something arrived that the old system <span class="o">was never built to serve</span>.</h2>
  <div class="cols"><div class="col" style="flex:none"><div class="mega">57.5%</div><div class="megaq">of the internet's traffic is already machines, not people — and climbing (Cloudflare, 2026)</div></div>
  <div class="col"><div class="cl" style="font-size:15px">And they've started paying each other — roughly <b>100 million machine payments on Base in nine months</b>.</div>
    <div class="cl">A machine can't sit on hold while a middleman checks it. It has to prove who it is <b>inside</b> the payment, or it doesn't move at all.</div>
    <div class="punch" style="margin-top:18px">For the first time there's a buyer that <span class="o">can't skip the check</span> — the one your identity thesis was always waiting for.</div>
  </div></div>
</div>${foot(n)}`,

// 6 SHOW — take it off the ledger (xform)
n=>`<div class="slide"><div class="grid"></div><div class="pad">${kick(n,'HOW IT WORKS · <b>TAKE IT OFF THE LEDGER</b>')}
  <h2>Take the dollar off the ledger. <span class="o">Make it a file you hold.</span></h2>
  <div class="lead" style="max-width:104ch">Today a stablecoin is a row in a database somebody else keeps, and every move asks that database for permission. We turn the dollar into a self-contained file — yours to hold, yours to hand over. It goes straight from you to me, like passing cash, and the chain's only job is to make sure you didn't already spend it.</div>
  ${dia('xform',1180,18)}
  <div class="punch">Off the ledger. <span class="o">Into your hands.</span></div>
</div>${foot(n)}`,

// 7 SHOW — check it yourself (bearer)
n=>`<div class="slide"><div class="grid"></div><div class="pad">${kick(n,'HOW IT WORKS · <b>CHECK IT YOURSELF</b>')}
  <h2>Hand someone a ten-dollar bill — <span class="o">they don't phone a committee.</span></h2>
  <div class="lead" style="max-width:106ch">They check it themselves, in a second, in their hand. A Unicity token works the same way: it carries its own proof. I hand it to you, you check it on the spot — no chain to call, no ledger to ask, nobody standing in the middle of the two of us.</div>
  ${dia('bearer',920,26)}
  <div class="punch">The proof travels with the money. <span class="o">The handoff needs nobody's permission.</span></div>
</div>${foot(n)}`,

// 8 SHOW — one question (oracle + reframe)
n=>`<div class="slide"><div class="grid"></div><div class="pad">${kick(n,'HOW IT WORKS · <b>ONE QUESTION</b>')}
  <h2>The only job a chain ever had: <span class="o">stop you spending the same dollar twice.</span></h2>
  <div class="cols" style="align-items:center;padding-top:18px"><div class="col" style="flex:1.05">
    <div class="cl" style="font-size:15px">Not to validate the world. Not to put everything in global order. One question: <b>has this been spent — yes or no?</b></div>
    <div class="cl">Everyone built cathedrals on top of that one question. We didn't. We built the thing that answers only it — and it never even sees your payment.</div>
    <div class="cl">Three thin layers: secure the base, store the yes-or-no, and let everyone transact off to the side.</div>
    <div class="punch" style="margin-top:18px">A blockchain with almost nothing left to do. <span class="o">That's the whole point.</span></div>
  </div><div class="col" style="flex:.95">${dia('oracle',560,0)}</div></div>
</div>${foot(n)}`,

// 9 THE GIFT — compliance in the money (heals the wound)
n=>`<div class="slide"><div class="grid"></div><div class="pad">${kick(n,'THE MISSING PIECE · <b>NOW IT LIVES IN THE MONEY</b>')}
  <h2>The dollar checks who's allowed to hold it — <span class="o">by itself.</span></h2>
  <div class="lead" style="max-width:108ch">Write the rule into the file: who can receive this — KYC, jurisdiction, sanctions. The money won't move to someone who doesn't pass. Not because a monitor catches it afterward — because the transfer simply can't happen. This is the exact piece GlobaliD never had, and the reason it stalled. You can't skip it. The money won't let you.</div>
  ${dia('compliance',1020,14)}
  <div class="punch">The credential isn't checked at the door. <span class="o">It is the door.</span></div>
</div>${foot(n)}`,

// 10 TRILEMMA — why not fix the old thing
n=>`<div class="slide"><div class="grid"></div><div class="pad">${kick(n,'WHY NOT JUST FIX THE OLD THING · <b>THE TRADEOFF</b>')}
  <h2>On a shared ledger you get two of three. <span class="o">Never all three.</span></h2>
  <div class="cols" style="align-items:center;padding-top:18px"><div class="col">
    <div class="cl" style="font-size:15px">Privacy. Compliance. Speed.</div>
    <div class="cl">Make it private and you blind the auditors. Add the cryptography to satisfy them, and the speed dies — down to one payment a second.</div>
    <div class="cl">Everyone's been stuck picking two. We're not — because we threw out the shared ledger that forces the choice in the first place.</div>
    <div class="punch" style="margin-top:18px">We didn't win the tradeoff. <span class="o">We deleted the thing that causes it.</span></div>
  </div><div class="col">${dia('trilemma',470,0)}</div></div>
</div>${foot(n)}`,

// 11 SWAP — you can trade on it
n=>`<div class="slide"><div class="grid"></div><div class="pad">${kick(n,'IT IS NOT A TOY · <b>YOU CAN TRADE ON IT</b>')}
  <h2>Two strangers trade. No middleman holding the money. <span class="o">No timer to miss.</span></h2>
  <div class="lead" style="max-width:106ch">The hard part of cash-like money is the trade: how do two people swap without someone in the middle holding both sides? The old fix is a countdown clock — claim in time or lose everything. Ours: both sides lock in, and either the trade happens or everyone walks away with what they came with. No deadline. No chasing.</div>
  ${dia('swap',880,12)}
</div>${foot(n)}`,

// 12 HUB — what it becomes
n=>`<div class="slide"><div class="grid"></div><div class="pad">${kick(n,'WHAT IT BECOMES · <b>MACHINES RUN THE MARKET</b>')}
  <h2>Once a trade needs no middleman, <span class="o">the market runs itself.</span></h2>
  <div class="cols" style="align-items:center;padding-top:16px"><div class="col" style="flex:1.05">
    <div class="cl" style="font-size:15px">Stack trustless trades and you get something new: agents posting what they want, finding each other, and settling directly — no exchange in the middle, no human in the loop.</div>
    <div class="cl">This is the economy your Trace Labs bet was pointing at. It has been missing one thing the whole time: a place to settle.</div>
    <div class="punch" style="margin-top:16px">The agents are coming. <span class="o">They need somewhere to settle.</span></div>
  </div><div class="col" style="flex:.95">${dia('hub',520,0)}</div></div>
</div>${foot(n)}`,

// 13 TEAM — who we are
n=>`<div class="slide"><div class="grid"></div><div class="pad">${kick(n,'WHO WE ARE · <b>NOT A CRYPTO TEAM</b>')}
  <h2>The team a government <span class="o">already trusts with its records</span>.</h2>
  <div class="cols"><div class="col"><div class="cl" style="margin-top:0">We built KSI — the system Estonia's government has run on since 2012. eIDAS-grade.</div>
    <div class="cl">The same design held <b>300,000 payments a second</b> in the central bank's own digital-currency test.</div>
    <div class="cl">And we'll tell you straight: the core is live and open-source, the repos are a bit of a mess, and full credential support is still being built. We're protocol engineers, not lawyers — we'll show you exactly what runs.</div>
    <div class="punch" style="margin-top:18px">Fifteen years building infrastructure regulators already rely on. <span class="o">Not a casino.</span></div>
  </div><div class="col"><div class="stats">
    <div class="stat"><div class="v">2012</div><div class="k">KSI live across Estonia's e-government — in production since</div></div>
    <div class="stat"><div class="v"><span class="o">300,000+</span> / sec</div><div class="k">payments held in the Eesti Pank 2021 digital-currency test (the team's KSI design)</div></div>
    <div class="stat"><div class="v">eIDAS-grade</div><div class="k">built for the EU's trust-services rules — government-grade</div></div>
  </div></div></div>
</div>${foot(n)}`,

// 14 PROOF — trust the math
n=>`<div class="slide"><div class="grid"></div><div class="pad">${kick(n,'DO NOT TRUST THE PITCH · <b>TRUST THE MATH</b>')}
  <h2>The white paper is marketing. I cringe at it. <span class="o">These are the real thing.</span></h2>
  <div class="lead" style="max-width:104ch">Three math papers. Drop them into any model you like and it'll check our work for you — no double-spend, real privacy, trustless trades. What's actually proven is the privacy and the no-double-spend. The speed is by design — not a benchmark we're waving around.</div>
  <div class="cardrow">
    <div class="c3"><div class="ct">The plumbing</div><div class="cb"><b>Unicity Infrastructure: the Aggregation Layer</b> — off-chain &amp; offline tokens; zero-knowledge proofs, no trusted setup.</div><div class="cb" style="color:var(--faint);margin-top:10px">github.com/unicitynetwork/aggr-layer-paper</div></div>
    <div class="c3"><div class="ct">The security proof</div><div class="cb"><b>The Unicity Execution Layer</b> — no double-spend; nothing blocks; privacy on both the service and the user side.</div><div class="cb" style="color:var(--faint);margin-top:10px">github.com/unicitynetwork/execution-model-tex</div></div>
    <div class="c3"><div class="ct">Rules &amp; trades</div><div class="cb"><b>Unicity: Predicates &amp; Atomic Swaps</b> — the rule that lives in the token, and trustless trades.</div><div class="cb" style="color:var(--faint);margin-top:10px">github.com/unicitynetwork/unicity-predicates-tex</div></div>
  </div>
  <div class="punch">Proof, <span class="o">not promises.</span></div>
</div>${foot(n)}`,

// 15 BOUNDARY — back to USBC
n=>`<div class="slide"><div class="grid"></div><div class="pad">${kick(n,'BACK TO USBC · <b>WHAT ONE BANK CANNOT DO</b>')}
  <h2>A charter only settles for <span class="o">its own members.</span></h2>
  <div class="cols" style="align-items:center;padding-top:16px"><div class="col" style="flex:1.2">
    <div class="cl" style="font-size:15px">USBC proves the whole idea: identity belongs inside the money. <b>It works.</b></div>
    <div class="cl">But a dollar in your Tulsa bank can't settle with someone who banks somewhere else — not without a trusted middleman in between. And a machine moving at machine speed can't stop to phone your bank for permission.</div>
    <div class="cl">The space between banks — and between machines — is the one thing a single charter can't build for itself.</div>
  </div><div class="col"><div style="border:1px solid var(--oline);border-radius:8px;background:linear-gradient(180deg,var(--owash),transparent);padding:22px 24px">
    <div style="font-family:'Anton',sans-serif;font-size:17px;color:var(--ink);line-height:1.2">USBC<br><span style="color:var(--faint);font-size:12px;font-family:'Geist Mono',monospace;letter-spacing:.04em">identity inside the money · one charter</span></div>
    <div style="text-align:center;color:var(--o);font-family:'Anton',sans-serif;font-size:22px;margin:12px 0">↓</div>
    <div style="font-family:'Anton',sans-serif;font-size:17px;color:var(--o);line-height:1.2">UNICITY<br><span style="color:var(--faint);font-size:12px;font-family:'Geist Mono',monospace;letter-spacing:.04em">the same idea · every counterparty, every speed</span></div>
  </div></div></div>
  <div class="punch">We're not replacing what you built. <span class="o">We're what lets it reach everyone else.</span></div>
</div>${foot(n)}`,

// 16 MAP — where it sits
n=>`<div class="slide"><div class="grid"></div><div class="pad">${kick(n,'WHERE THIS SITS · <b>UNDER EVERYTHING YOU HAVE FUNDED</b>')}
  <h2>Every bet you made assumed this layer <span class="o">was already there</span>.</h2>
  <div class="lead" style="margin-top:6px;max-width:98ch">It wasn't. Identity, payments, exchanges, compute, banking — 250 companies, each one quietly counting on a place to settle that nobody had actually built.</div>
  <div class="bands">
    <div class="band"><div class="bl">Identity<span>who can act</span></div><div class="bc">GlobaliD · Indicio · Terminal 3</div></div>
    <div class="band"><div class="bl">Payments<span>how value moves</span></div><div class="bc">Ripple · Square · Robinhood</div></div>
    <div class="band"><div class="bl">Exchanges &amp; Custody<span>where value is held</span></div><div class="bc">Coinbase · Uphold</div></div>
    <div class="band"><div class="bl">Data · Compute · Speed<span>what it runs on</span></div><div class="bc">Filecoin · Solana · Brave</div></div>
    <div class="band"><div class="bl">Banking &amp; Tokenized Money<span>money with rules inside</span></div><div class="bc">Vast Bank · USBC</div></div>
    <div class="band sub"><div class="bl">Where it settles<span>the piece nobody built</span></div><div class="bc">UNICITY — the layer all 250 bets assumed was there</div></div>
  </div>
</div>${foot(n)}`,

// 17 ASK — finish what you started
n=>`<div class="slide"><div class="grid"></div><div class="glow"></div><div class="pad">${kick(n,'THE ASK · <b>FINISH WHAT YOU STARTED</b>')}
  <h2>You started this thirty years ago. <span class="o">This is the piece that finishes it.</span></h2>
  <div class="lead" style="max-width:102ch">Speed — you funded it. Peer-to-peer — you funded it. Identity inside the money — you're building it. The only thing missing was a place for all of it to settle, where the rule travels with the money and nothing moves without it. That's what we built.</div>
  <div class="askbox">
    <div class="big">Raising <span class="o">$5M Seed</span> · $25M cap / $50M token FDV · SAFE + token warrant.</div>
    <div class="ml">The first build is the obvious one: a <b>USBC dollar that settles the instant the credential checks out</b> — identity inside the money, everywhere, not just inside one bank.</div>
  </div>
  <div class="closer">You proved it on one charter. <span class="o">Let's make it true everywhere.</span></div>
  <div class="tag">Architecture, not policy · Proof, not promises.</div>
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
console.log('wrote Unicity_HardYaka_Seed_Deck_v5.pdf');
