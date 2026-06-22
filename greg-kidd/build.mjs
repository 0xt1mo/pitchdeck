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
h2{font-family:"Anton",sans-serif;font-weight:400;text-transform:uppercase;font-size:40px;line-height:1.03;letter-spacing:.006em;margin-top:13px;max-width:27ch}
h2 .o{color:var(--o)}
.lead{margin-top:14px;font-size:15px;line-height:1.6;color:var(--dim);max-width:88ch}
.lead b{color:var(--ink);font-weight:600}
.lead .o{color:var(--o);font-weight:600}
.cl{margin-top:9px;font-size:14px;line-height:1.55;color:var(--dim)}
.cl b{color:var(--ink);font-weight:600}
.punch{margin-top:24px;padding:13px 0 0 16px;border-left:2px solid var(--o);font-size:15.5px;line-height:1.45;color:var(--ink);font-weight:500}
.punch .o{color:var(--o)}
.cols{display:flex;gap:48px;align-items:center;padding-top:22px}
.col{flex:1;min-width:0}
.mega{font-family:"Anton",sans-serif;font-size:160px;line-height:.84;color:var(--o);letter-spacing:-.01em}
.megaq{font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:var(--faint);margin-top:8px}
.principle .pr{display:flex;align-items:baseline;gap:16px;padding:16px 0;border-top:1px solid var(--rule)}
.principle .pr:last-child{border-bottom:1px solid var(--rule)}
.principle .a{color:var(--o);font-family:"Anton",sans-serif;font-size:16px}
.principle .t{color:var(--dim);font-size:15px}.principle .t b{color:var(--ink);font-weight:600}
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
.steel{border:1px solid var(--oline);border-radius:8px;background:linear-gradient(180deg,var(--owash),transparent);padding:15px 20px;margin-top:14px}
.steel .sl{font-size:10.5px;letter-spacing:.18em;text-transform:uppercase;color:var(--o)}
.steel .st{font-size:15px;color:var(--ink);margin-top:8px;line-height:1.5;font-weight:500}
.reb{display:flex;flex-direction:column;gap:11px;margin-top:14px}
.reb .ri{display:flex;gap:14px}.reb .n{font-family:"Anton",sans-serif;color:var(--o);font-size:17px;flex:none}.reb .x{font-size:13.5px;line-height:1.55;color:var(--dim)}.reb .x b{color:var(--ink);font-weight:600}
.askbox{margin-top:14px;border:1px solid var(--oline);border-radius:8px;background:linear-gradient(180deg,var(--owash),transparent);padding:18px 24px}
.askbox .big{font-family:"Anton",sans-serif;font-size:22px;color:var(--ink)}.askbox .big .o{color:var(--o)}
.askbox .ml{font-size:13px;color:var(--dim);margin-top:9px;line-height:1.5}.askbox .ml b{color:var(--ink)}
.closer{margin-top:18px;font-family:"Anton",sans-serif;font-size:25px;line-height:1.08;text-transform:uppercase;color:var(--ink);max-width:32ch}
.closer .o{color:var(--o)}
.tag{margin-top:13px;font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:var(--o)}
.src{margin-top:8px;font-size:9.5px;letter-spacing:.06em;color:var(--faint)}
.spine{display:flex;align-items:stretch;gap:0;margin-top:16px}
.node{flex:1;border-top:2px solid var(--rule);padding:14px 10px 0;position:relative}
.node:last-child{border-top-color:var(--o)}
.node::before{content:"";position:absolute;top:-6px;left:0;width:9px;height:9px;border-radius:50%;background:var(--card);border:1px solid var(--o)}
.node:last-child::before{background:var(--o)}
.node .nn{font-family:"Anton",sans-serif;font-size:12px;letter-spacing:.03em;text-transform:uppercase;color:var(--ink)}
.node:last-child .nn{color:var(--o)}
.node .nd{font-size:10px;line-height:1.4;color:var(--faint);margin-top:6px}
.pull{margin-top:16px;border-left:2px solid var(--oline);padding:6px 0 6px 16px;font-size:14px;color:var(--dim)}
.pull b{color:var(--ink);font-weight:600}.pull .o{color:var(--o)}
`;

const kick=(n,t)=>`<div class="kick">${String(n).padStart(2,'0')} · ${t}</div>`;
let T=0;
const foot=(n)=>`<div class="foot"><span class="lg"><svg viewBox="0 0 641 128"><use href="#ulogo"/></svg></span><span>Unicity · Seed proposal · Confidential — Greg Kidd / Hard Yaka</span><span>${String(n).padStart(2,'0')} / ${T}</span></div>`;

const SL=[
// 1 COVER
n=>`<div class="slide"><div class="grid"></div><div class="glow"></div>
<div class="pad" style="align-items:center;justify-content:center;text-align:center">
  <svg viewBox="0 0 641 128" style="height:58px;width:auto;margin-bottom:28px"><use href="#ulogo"/></svg>
  <div class="kick">Unicity Labs &middot; a settlement substrate &middot; Seed</div>
  <h2 class="anton" style="font-size:52px;max-width:30ch;margin-top:22px;text-align:center">The first rail where the credential lives <span class="o">inside</span> the transfer.</h2>
  <div class="lead" style="text-align:center;max-width:80ch">A thirty-year campaign to give people fair access — cut the middleman, prove the identity, move the value freely. One piece was always missing: a settlement layer where the credential is <b>inside the transaction, not beside it</b>. That layer now exists.</div>
  <div style="margin-top:40px;font-size:10.5px;letter-spacing:.24em;text-transform:uppercase;color:var(--faint)">Tallinn · Zug · Abu Dhabi</div>
</div></div>`,

// 2 THROUGHLINE
n=>`<div class="slide"><div class="grid"></div><div class="pad">${kick(n,'THE THROUGHLINE · <b>FAIR ACCESS</b>')}
  <h2>Every bet assumed a layer <span class="o">none of them own</span>.</h2>
  <div class="cols"><div class="col" style="flex:1.2">
    <div class="principle">
      <div class="pr"><span class="a">→</span><div class="t"><b>Cut the middleman</b> — value moves directly, no slow intermediary</div><div class="r ok">shipped</div></div>
      <div class="pr"><span class="a">→</span><div class="t"><b>Move the value</b> — at the speed of a message, 24/7</div><div class="r ok">shipped</div></div>
      <div class="pr"><span class="a">→</span><div class="t"><b>Prove the identity</b> — SSI / verifiable credentials, a generation of attempts</div><div class="r no">never load-bearing</div></div>
    </div>
  </div><div class="col">
    <div class="lead" style="margin-top:0">Fair access needs three things to be real. Two have been shipped for decades. The third — identity that <b>cannot be skipped</b> — is the piece the rails themselves never carried.</div>
  </div></div>
  <div class="punch">The credential always sat next to the transaction. <span class="o">Nothing broke if you skipped it.</span></div>
</div>${foot(n)}`,

// 3 TEAM
n=>`<div class="slide"><div class="grid"></div><div class="pad">${kick(n,'THE TEAM · <b>TALLINN</b>')}
  <h2>The team that built the <span class="o">backbone a nation runs on</span>.</h2>
  <div class="cols"><div class="col"><div class="lead" style="margin-top:0">The team built Guardtime / KSI — the cryptographic backbone running across Estonian e-government since 2012, eIDAS-aligned. The same KSI architecture sustained <b>300,000+ payments per second</b> in the Eesti Pank 2021 CBDC experiment.</div>
    <div class="punch" style="margin-top:22px;border:none;padding-left:0">Settlement infrastructure proven at the scale of a state — <span class="o">not a throughput claim about Unicity</span>.</div>
  </div><div class="col"><div class="stats">
    <div class="stat"><div class="v">2012</div><div class="k">KSI live across Estonian e-government — in production since</div></div>
    <div class="stat"><div class="v"><span class="o">300,000+</span> tx/sec</div><div class="k">Eesti Pank 2021 CBDC test — the team's KSI lineage</div></div>
    <div class="stat"><div class="v">eIDAS-aligned</div><div class="k">EU trust-services environment — government-grade</div></div>
  </div></div></div>
</div>${foot(n)}`,

// 4 WHY NOW
n=>`<div class="slide"><div class="grid"></div><div class="glow"></div><div class="pad">${kick(n,'WHY NOW · <b>THE BUYER</b>')}
  <h2>The buyer that forces the layer <span class="o">has arrived</span>.</h2>
  <div class="cols"><div class="col" style="flex:none"><div class="mega">57.5%</div><div class="megaq">of web requests are automated — not on-chain (Cloudflare, 2026)</div></div>
  <div class="col"><div class="cl" style="font-size:15px"><b>Two facts, kept separate.</b> The majority actor on the internet is already a machine. And those machines have started paying — roughly <b>100M x402 transactions on Base in nine months</b> (Chainalysis); real volume still tiny.</div>
    <div class="cl" style="font-size:14px">x402 works — but it is fifteen steps of facilitators and settlement. When the asset moves peer-to-peer, <b>the message is the settlement</b>.</div>
    <div class="punch" style="margin-top:18px">An agent cannot round-trip a centralized check. <span class="o">It verifies in-band, at the edge — or it cannot transact at all.</span></div>
  </div></div>
</div>${foot(n)}`,

// 5 DIAGNOSIS
n=>`<div class="slide"><div class="grid"></div><div class="pad">${kick(n,'THE DIAGNOSIS · <b>RIGHT, BUT EARLY</b>')}
  <h2>Right thesis. <span class="o">No forcing function</span>.</h2>
  <div class="cols" style="align-items:center"><div class="col" style="flex:1.25">
    <div class="cl">Self-sovereign identity was correct, and early.</div>
    <div class="cl">It did not fail on cryptography. It stalled because the credential always sat <b>next to</b> the transaction — never inside it.</div>
    <div class="cl">Skip the check and nothing breaks — there was never an economic reason to carry the credential.</div>
    <div class="cl">Microsoft retired <b>did:ion</b> in December 2023. Trinsic wound down before a single credential was ever reused. SSI scaled linearly, then flattened.</div>
    <div class="cl">GlobaliD never reached escape velocity; its mission migrated forward into USBC. Not a failure of the idea — a failure of the rails to make the idea <b>unskippable</b>.</div>
  </div><div class="col">
    <svg width="100%" height="240" viewBox="0 0 420 240">
      <line x1="40" y1="200" x2="400" y2="200" stroke="#2a2a26"/><line x1="40" y1="40" x2="40" y2="200" stroke="#2a2a26"/>
      <path d="M40 196 L150 150 L240 120 L320 112 L400 110" fill="none" stroke="var(--bad)" stroke-width="2"/>
      <circle cx="240" cy="120" r="4" fill="#0E0E0C" stroke="var(--bad)"/><text x="240" y="104" fill="var(--faint)" font-family="Geist Mono" font-size="12" text-anchor="middle">did:ion retired</text>
      <circle cx="320" cy="112" r="4" fill="#0E0E0C" stroke="var(--bad)"/><text x="338" y="100" fill="var(--faint)" font-family="Geist Mono" font-size="12">Trinsic wound down</text>
      <text x="220" y="228" fill="var(--faint)" font-family="Geist Mono" font-size="12" text-anchor="middle">SSI adoption — linear, then flat</text>
    </svg>
  </div></div>
  <div class="punch">The missing piece was never better identity. <span class="o">It was a settlement layer where the asset refuses to move without it.</span></div>
</div>${foot(n)}`,

// 6 PORTFOLIO MAP
n=>`<div class="slide"><div class="grid"></div><div class="pad">${kick(n,'THE PORTFOLIO MAP · <b>WHERE WE SIT</b>')}
  <h2>The floor under <span class="o">250 bets</span>.</h2>
  <div class="lead" style="margin-top:6px;max-width:96ch">Bets across identity, payments, exchanges, compute, and banking — each one assuming a settlement layer it does not own.</div>
  <div class="bands">
    <div class="band"><div class="bl">Identity<span>who can act</span></div><div class="bc">GlobaliD · Indicio · Terminal 3</div></div>
    <div class="band"><div class="bl">Payments &amp; Rails<span>how value moves</span></div><div class="bc">Ripple · Square · Robinhood</div></div>
    <div class="band"><div class="bl">Exchanges &amp; Custody<span>where value is held</span></div><div class="bc">Coinbase · Uphold</div></div>
    <div class="band"><div class="bl">Data · Compute · Speed<span>what it runs on</span></div><div class="bc">Filecoin · Solana · Brave</div></div>
    <div class="band"><div class="bl">Banking &amp; Tokenized Money<span>money with rules inside</span></div><div class="bc">Vast Bank · USBC</div></div>
    <div class="band sub"><div class="bl">Settlement Substrate<span>what it all settles on</span></div><div class="bc">UNICITY — the layer none of the bets occupy, and the one they all silently assume</div></div>
  </div>
</div>${foot(n)}`,

// 7 THE TRADEOFF (trilemma)
n=>`<div class="slide"><div class="grid"></div><div class="pad">${kick(n,'THE TRADEOFF · <b>A SHARED LEDGER</b>')}
  <h2>Privacy, compliance, throughput. <span class="o">Pick two.</span></h2>
  <div class="cols" style="align-items:center;padding-top:18px"><div class="col">
    <div class="cl" style="font-size:15px">On a shared ledger every transaction is public — easy to audit, impossible to keep private.</div>
    <div class="cl">Add cryptography to win privacy back and throughput collapses — down to one transaction a second. The privacy tech kills the speed.</div>
    <div class="cl">Machine-speed money needs all three at once. On a shared ledger, you cannot have them.</div>
    <div class="punch" style="margin-top:18px">So we didn't optimize the ledger. <span class="o">We removed the thing that forces the tradeoff.</span></div>
  </div><div class="col">${dia('trilemma',470,0)}</div></div>
</div>${foot(n)}`,

// 8 THE MOVE (xform)
n=>`<div class="slide"><div class="grid"></div><div class="pad">${kick(n,'THE MOVE · <b>STOP MAINTAINING THE MONEY</b>')}
  <h2>Make the money a thing you <span class="o">hold</span> — not an entry someone keeps.</h2>
  <div class="lead" style="margin-top:8px;max-width:104ch">Today a stablecoin is a row on a shared ledger — every participant maintains it, every transfer asks the ledger's permission. The move is simple: take that entry and make the asset a <b>self-contained file</b>. A native data type, not a row. It moves agent-to-agent like cash — and the chain's only remaining job is to prove it wasn't spent twice.</div>
  ${dia('xform',1180,18)}
  <div class="punch">Satoshi titled it peer-to-peer electronic cash. <span class="o">Seventeen years later it is neither. This is.</span></div>
</div>${foot(n)}`,

// 9 LIKE CASH (bearer)
n=>`<div class="slide"><div class="grid"></div><div class="pad">${kick(n,'PEER TO PEER · <b>LIKE CASH</b>')}
  <h2>Verify it yourself. <span class="o">Like cash.</span></h2>
  <div class="lead" style="margin-top:8px;max-width:106ch">When someone hands you a $10 note, you don't send it to a committee to ask if it's real — you check it yourself. A Unicity token works the same way: it carries its own proof. It moves agent-to-agent, and the recipient verifies it <b>on arrival</b> — no chain to call, no ledger to ask.</div>
  ${dia('bearer',920,26)}
  <div class="punch">The proof travels with the asset. <span class="o">The transfer needs no one's permission.</span></div>
</div>${foot(n)}`,

// 10 THE CHAIN'S ONLY JOB (oracle)
n=>`<div class="slide"><div class="grid"></div><div class="pad">${kick(n,'THE ARCHITECTURE · <b>ONE IRREDUCIBLE JOB</b>')}
  <h2>The chain's only job is to <span class="o">prevent double-spending</span>.</h2>
  <div class="cols" style="align-items:center;padding-top:18px"><div class="col" style="flex:1.05">
    <div class="cl" style="font-size:15px">That was always the point — not validation, not global order. Just one question: <b>has this token been spent?</b> The uniqueness oracle answers yes or no, and never sees the transaction.</div>
    <div class="cl">It isn't validating transactions anymore, so the work collapses — and the burden of proof moves to the recipient.</div>
    <div class="cl">Three layers: consensus secures the base, the oracle stores only uniqueness proofs, execution happens client-side and off-chain.</div>
    <div class="punch" style="margin-top:18px">A blockchain reduced to its <span class="o">one irreducible job</span>.</div>
  </div><div class="col" style="flex:.95">${dia('oracle',560,0)}</div></div>
</div>${foot(n)}`,

// 11 COMPLIANCE BY CONSTRUCTION (compliance)
n=>`<div class="slide"><div class="grid"></div><div class="pad">${kick(n,'THE FORCING FUNCTION · <b>THE RECEIVE PREDICATE</b>')}
  <h2>Compliance by construction. <span class="o">Not a guy in the middle</span>.</h2>
  <div class="lead" style="margin-top:6px;max-width:108ch">Coinbase's agent-payment standard works — with a facilitator in the middle, watching every transaction. We put the rule <b>inside the token</b>. Each token carries its own predicate — who may receive it: KYC, jurisdiction, accreditation. The transfer will not complete unless the recipient satisfies it. No monitor, no middleman to bypass. The predicate checks a self-contained attestation in-band — no issuer callback at settlement.</div>
  ${dia('compliance',1020,14)}
  <div class="punch">The credential isn't checked at the door. <span class="o">It is the door.</span></div>
</div>${foot(n)}`,

// 12 THE SWAP (swap)
n=>`<div class="slide"><div class="grid"></div><div class="pad">${kick(n,'MARKET MICROSTRUCTURE · <b>THE SWAP</b>')}
  <div class="lead" style="margin-top:0;max-width:104ch">On a shared ledger, atomicity is free — a contract executes or it doesn't. Off-chain, both legs must settle with no middleman holding the float. The HTLC's answer is a timer and a griefing window. Ours: both parties commit independently — the swap completes, or everyone keeps their token.</div>
  ${dia('swap',880,12)}
</div>${foot(n)}`,

// 13 LIFE ARC
n=>`<div class="slide"><div class="grid"></div><div class="pad">${kick(n,'THE LIFE ARC · <b>IDENTITY INSIDE THE MONEY</b>')}
  <h2>You already reached this conclusion. <span class="o">You built it inside one bank.</span></h2>
  <div class="spine">
    <div class="node"><div class="nn">dNet</div><div class="nd">cut the middleman</div></div>
    <div class="node"><div class="nn">The Fed</div><div class="nd">settlement lags the message</div></div>
    <div class="node"><div class="nn">Promontory</div><div class="nd">manage risk, don't avoid it</div></div>
    <div class="node"><div class="nn">Ripple</div><div class="nd">value at message speed — but who's on the other end?</div></div>
    <div class="node"><div class="nn">GlobaliD</div><div class="nd">identity is permission to act — but it stayed optional</div></div>
    <div class="node"><div class="nn">USBC</div><div class="nd">identity inside the money, on one charter</div></div>
    <div class="node"><div class="nn">Unicity</div><div class="nd">the same move, generalized — no charter required</div></div>
  </div>
  <div class="pull">“Identity in itself is not that interesting. It's what you can do with it.” &nbsp;→&nbsp; <b>A credential only does something if the asset cannot move without it.</b></div>
  <div class="cl" style="margin-top:14px;max-width:104ch">USBC's tokenized deposit is a U.S.-dollar bank deposit with identity embedded in it — identity inside the money, on an OCC-chartered bank, explicitly not a synthetic stablecoin. <b>That is the receive predicate, discovered the hard way, on a single charter.</b></div>
</div>${foot(n)}`,

// 14 PROOF
n=>`<div class="slide"><div class="grid"></div><div class="pad">${kick(n,'THE PROOF · <b>PUBLIC & FORMAL</b>')}
  <h2>Don't take our word for it. <span class="o">Here's the math.</span></h2>
  <div class="lead" style="margin-top:6px;max-width:104ch">The white paper is marketing — we cringe at it. These three are math. Drop them into any model and it will prove the protocol to you: no double-spend, service- and user-side privacy, trustless swaps.</div>
  <div class="cardrow">
    <div class="c3"><div class="ct">Systems engineering</div><div class="cb"><b>Unicity Infrastructure: the Aggregation Layer</b> — off-chain &amp; offline tokens; ZK proofs, no trusted setup.</div><div class="cb" style="color:var(--faint);margin-top:10px">github.com/unicitynetwork/aggr-layer-paper</div></div>
    <div class="c3"><div class="ct">Security proof</div><div class="cb"><b>The Unicity Execution Layer</b> — no double-spend; no blocking; service &amp; user-side privacy.</div><div class="cb" style="color:var(--faint);margin-top:10px">github.com/unicitynetwork/execution-model-tex</div></div>
    <div class="c3"><div class="ct">Predicates &amp; swaps</div><div class="cb"><b>Unicity: Predicates &amp; Atomic Swaps</b> — programmable predicates; trustless atomic swaps.</div><div class="cb" style="color:var(--faint);margin-top:10px">github.com/unicitynetwork/unicity-predicates-tex</div></div>
  </div>
  <div class="punch">What's proven is <span class="o">privacy and no-double-spend</span>. Scalability is by sharding — stated as the design, not claimed as a benchmark.</div>
</div>${foot(n)}`,

// 15 THE BOUNDARY
n=>`<div class="slide"><div class="grid"></div><div class="pad">${kick(n,'THE BOUNDARY · <b>WHAT A CHARTER CANNOT CROSS</b>')}
  <h2>A charter settles for its members.<br>The space <span class="o">between charters</span> has to be built.</h2>
  <div class="steel"><div class="sl">The strongest version of the argument</div><div class="st">“A permissioned chain on one bank charter already puts identity inside the money — USBC proves it works. Why generalize?”</div></div>
  <div class="reb">
    <div class="ri"><span class="n">1</span><span class="x">USBC proves the conclusion: identity belongs inside the money. <b>It works.</b></span></div>
    <div class="ri"><span class="n">2</span><span class="x">A charter settles for the parties on that charter. Value can't round-trip to a counterparty banking somewhere else without a trusted middle — <b>the boundary a charter cannot cross by construction</b>.</span></div>
    <div class="ri"><span class="n">3</span><span class="x">An agent at machine speed cannot phone any single charter's verifier in-band. Cross-charter, cross-agent settlement is the one thing a charter structurally can't do — <b>no matter how good the charter</b>.</span></div>
  </div>
  <div class="punch">Unicity is the layer that lets a USBC deposit settle to a counterparty on a different charter. <span class="o">USBC reached it on one charter; this generalizes the move — it doesn't replace it.</span></div>
</div>${foot(n)}`,

// 16 LIVE + AGENTIC (hub)
n=>`<div class="slide"><div class="grid"></div><div class="pad">${kick(n,'THE STATE OF PLAY · <b>LIVE</b>')}
  <h2>Agents discover, transact, and settle <span class="o">today</span>.</h2>
  <div class="cols" style="align-items:center;padding-top:16px"><div class="col" style="flex:1.05">
    <div class="cl" style="font-size:15px">A running demonstration, not a forecast — agents post intents to a shared board, transact peer-to-peer, and settle on the substrate now.</div>
    <div class="cl">The uniqueness oracle is live and open-source; the repos are public — and honestly, a bit of a mess. <b>We're protocol engineers — we'll show you exactly what runs and what's still being built.</b></div>
    <div class="cl" style="color:var(--faint)">Pipeline: sovereign and stablecoin-issuer engagements in confidential discussions — references on request.</div>
    <div class="punch" style="margin-top:16px">The architecture isn't a roadmap slide. <span class="o">The primitive runs.</span></div>
  </div><div class="col" style="flex:.95">${dia('hub',520,0)}</div></div>
</div>${foot(n)}`,

// 17 CLOSE + ASK
n=>`<div class="slide"><div class="grid"></div><div class="glow"></div><div class="pad">${kick(n,'THE ASK · <b>A CO-BUILD</b>')}
  <h2>One layer down from where the thesis <span class="o">already arrived</span>.</h2>
  <div class="lead" style="margin-top:8px;max-width:102ch">Identity inside the money. Compliance that travels with the asset. Settlement with no shared ledger. The conclusion USBC reached on one bank charter — generalized to a layer any issuer can settle on. Not a vendor. Not another L1 chasing throughput. The settlement layer for machine commerce — the chain only prevents double-spend; everything below it is the substrate.</div>
  <div class="askbox">
    <div class="big">Raising <span class="o">$5M Seed</span> · $25M cap / $50M token FDV · SAFE + token warrant.</div>
    <div class="ml">The proof is the partnership: a <b>Vast / USBC tokenized deposit whose receive predicate is a USBC attestation</b> — identity inside the money, settling on a layer that enforces it. One layer down.</div>
  </div>
  <div class="closer">The idea is already validated &mdash; on one charter. <span class="o">This is the layer that lets it hold everywhere.</span></div>
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
console.log('wrote Unicity_HardYaka_Seed_Deck_v4.pdf');
