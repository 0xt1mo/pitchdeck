// Self-contained build for the Unicity x Greg Kidd / Hard Yaka seed deck.
// Requires puppeteer + pdf-lib in the repo-root node_modules. Run: node greg-kidd/build.mjs
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

const CSS=`
:root{--bg:#060606;--ink:#FEFEFE;--o:#FF6A1F;--dim:#B5B5AF;--faint:#74746E;--rule:#242422;--card:#101010;--owash:rgba(255,106,31,.07);--oline:rgba(255,106,31,.42);--bad:#8a8a84;}
*{margin:0;padding:0;box-sizing:border-box}
body{background:#000}
.slide{position:relative;width:1600px;height:900px;background:var(--bg);color:var(--ink);overflow:hidden;font-family:"Geist Mono",monospace;-webkit-font-smoothing:antialiased}
.grid{position:absolute;inset:0;z-index:0;background-image:linear-gradient(rgba(255,255,255,.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.02) 1px,transparent 1px);background-size:64px 64px}
.glow{position:absolute;inset:0;z-index:0;background:radial-gradient(ellipse 60% 50% at 50% 46%,rgba(255,106,31,.08),transparent 70%)}
.pad{position:relative;z-index:2;height:100%;padding:58px 80px 66px;display:flex;flex-direction:column;justify-content:center}
.anton{font-family:"Anton",sans-serif;font-weight:400;text-transform:uppercase;letter-spacing:.01em}
.kick{font-size:12px;letter-spacing:.32em;text-transform:uppercase;color:var(--faint)}
.kick b{color:var(--o);font-weight:400}
h2{font-family:"Anton",sans-serif;font-weight:400;text-transform:uppercase;font-size:42px;line-height:1.03;letter-spacing:.006em;margin-top:14px;max-width:26ch}
h2 .o{color:var(--o)}
.lead{margin-top:15px;font-size:15.5px;line-height:1.62;color:var(--dim);max-width:84ch}
.lead b{color:var(--ink);font-weight:600}
.lead .o{color:var(--o);font-weight:600}
.cl{margin-top:9px;font-size:14.5px;line-height:1.55;color:var(--dim)}
.cl b{color:var(--ink);font-weight:600}
.punch{margin-top:30px;padding:14px 0 0 16px;border-left:2px solid var(--o);font-size:16px;line-height:1.45;color:var(--ink);font-weight:500}
.punch .o{color:var(--o)}
.cols{display:flex;gap:54px;align-items:flex-start;padding-top:30px}
.col{flex:1;min-width:0}
.mega{font-family:"Anton",sans-serif;font-size:170px;line-height:.84;color:var(--o);letter-spacing:-.01em}
.megaq{font-size:12.5px;letter-spacing:.14em;text-transform:uppercase;color:var(--faint);margin-top:8px}
.principle .pr{display:flex;align-items:baseline;gap:16px;padding:13px 0;border-top:1px solid var(--rule)}
.principle .pr:last-child{border-bottom:1px solid var(--rule)}
.principle .a{color:var(--o);font-family:"Anton",sans-serif;font-size:16px}
.principle .t{color:var(--dim);font-size:14px}.principle .t b{color:var(--ink);font-weight:600}
.principle .r{margin-left:auto;font-size:11px;letter-spacing:.12em;text-transform:uppercase}
.ok{color:var(--o)} .no{color:#9a9a92;white-space:nowrap}
.stats{display:flex;flex-direction:column;gap:12px}
.stat{border:1px solid var(--rule);border-radius:7px;background:var(--card);padding:14px 16px}
.stat .v{font-family:"Anton",sans-serif;font-size:22px;color:var(--ink)}.stat .v .o{color:var(--o)}
.stat .k{font-size:11px;color:var(--faint);margin-top:5px;letter-spacing:.04em}
.foot{position:absolute;left:80px;right:80px;bottom:28px;z-index:2;display:flex;justify-content:space-between;align-items:center;border-top:1px solid var(--rule);padding-top:13px;font-size:9.5px;letter-spacing:.16em;text-transform:uppercase;color:var(--faint)}
.foot .lg svg{height:13px;width:auto;opacity:.8}
.cardrow{display:flex;gap:16px;margin-top:6px}
.c3{flex:1;border:1px solid var(--rule);border-left:2px solid var(--o);border-radius:6px;background:var(--card);padding:16px 18px}
.c3 .ct{font-family:"Anton",sans-serif;font-size:14px;letter-spacing:.04em;text-transform:uppercase;color:var(--o)}
.c3 .cb{font-size:12.5px;line-height:1.5;color:var(--dim);margin-top:9px}.c3 .cb b{color:var(--ink);font-weight:600}
.bands{display:flex;flex-direction:column;gap:7px;margin-top:8px}
.band{display:flex;align-items:center;gap:20px;border:1px solid var(--rule);border-radius:6px;background:var(--card);padding:13px 18px}
.band .bl{font-family:"Anton",sans-serif;font-size:15px;letter-spacing:.03em;text-transform:uppercase;color:var(--ink);width:300px;flex:none}
.band .bl span{display:block;font-family:"Geist Mono",monospace;font-size:10.5px;letter-spacing:.1em;color:var(--dim);text-transform:uppercase;margin-top:3px;font-weight:400}
.band .bc{font-size:12.5px;color:var(--dim);letter-spacing:.04em}
.band.sub{border-color:var(--oline);background:linear-gradient(90deg,var(--owash),transparent)}
.band.sub .bl{color:var(--o)} .band.sub .bc{color:var(--o)}
.steel{border:1px solid var(--oline);border-radius:8px;background:linear-gradient(180deg,var(--owash),transparent);padding:16px 20px;margin-top:6px}
.steel .sl{font-size:10.5px;letter-spacing:.18em;text-transform:uppercase;color:var(--o)}
.steel .st{font-size:15px;color:var(--ink);margin-top:8px;line-height:1.5;font-weight:500}
.reb{display:flex;flex-direction:column;gap:11px;margin-top:16px}
.reb .ri{display:flex;gap:14px}.reb .n{font-family:"Anton",sans-serif;color:var(--o);font-size:17px;flex:none}.reb .x{font-size:13.5px;line-height:1.55;color:var(--dim)}.reb .x b{color:var(--ink);font-weight:600}
.askbox{margin-top:16px;border:1px solid var(--oline);border-radius:8px;background:linear-gradient(180deg,var(--owash),transparent);padding:20px 24px}
.askbox .big{font-family:"Anton",sans-serif;font-size:22px;color:var(--ink)}.askbox .big .o{color:var(--o)}
.askbox .ml{font-size:13px;color:var(--dim);margin-top:9px;line-height:1.5}.askbox .ml b{color:var(--ink)}
.closer{margin-top:22px;font-family:"Anton",sans-serif;font-size:26px;line-height:1.08;text-transform:uppercase;color:var(--ink);max-width:30ch}
.closer .o{color:var(--o)}
.tag{margin-top:14px;font-size:11px;letter-spacing:.18em;text-transform:uppercase;color:var(--o)}
.src{margin-top:8px;font-size:9.5px;letter-spacing:.06em;color:var(--faint)}
.ico{fill:none;stroke:currentColor;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round}
.spine{display:flex;align-items:stretch;gap:0;margin-top:10px}
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

const T=14;
const foot=(n)=>`<div class="foot"><span class="lg"><svg viewBox="0 0 641 128"><use href="#ulogo"/></svg></span><span>Unicity · Seed proposal · Confidential — Greg Kidd / Hard Yaka</span><span>${String(n).padStart(2,'0')} / ${T}</span></div>`;
const kick=(t)=>`<div class="kick">${t}</div>`;
const S=[];

// 1 COVER
S.push(`<div class="slide"><div class="grid"></div><div class="glow"></div>
<div class="pad" style="align-items:center;justify-content:center;text-align:center">
  <svg viewBox="0 0 641 128" style="height:60px;width:auto;margin-bottom:30px"><use href="#ulogo"/></svg>
  <div class="kick">Unicity Labs &middot; a settlement substrate &middot; Seed</div>
  <h2 class="anton" style="font-size:54px;max-width:30ch;margin-top:24px;text-align:center">The first rail where the credential lives <span class="o">inside</span> the transfer.</h2>
  <div class="lead" style="text-align:center;max-width:80ch">A thirty-year campaign to give people fair access — cut the middleman, prove the identity, move the value freely. One piece was always missing: a settlement rail where the credential is <b>inside the transaction, not beside it</b>. That rail now exists.</div>
  <div style="margin-top:42px;font-size:10.5px;letter-spacing:.24em;text-transform:uppercase;color:var(--faint)">Tallinn · Zug · Abu Dhabi</div>
</div></div>`);

// 2 PATTERN UNDER THE PORTFOLIO (3rd person)
S.push(`<div class="slide"><div class="grid"></div><div class="pad">${kick('02 · THE THROUGHLINE · <b>FAIR ACCESS</b>')}
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
</div>${foot(2)}</div>`);

// 3 TEAM (early)
S.push(`<div class="slide"><div class="grid"></div><div class="pad">${kick('03 · THE TEAM · <b>TALLINN</b>')}
  <h2>The team that built a nation's <span class="o">settlement plumbing</span>.</h2>
  <div class="cols"><div class="col"><div class="lead" style="margin-top:0">The team built Guardtime / KSI — the cryptographic backbone running across Estonian e-government since 2012, eIDAS-aligned. The same KSI architecture sustained <b>300,000+ payments per second</b> in the Eesti Pank 2021 CBDC experiment.</div>
    <div class="punch" style="margin-top:26px;border:none;padding-left:0">This is settlement plumbing proven at the scale of a state — <span class="o">not a throughput claim about Unicity</span>.</div>
  </div><div class="col"><div class="stats">
    <div class="stat"><div class="v">2012</div><div class="k">KSI live across Estonian e-government — in production since</div></div>
    <div class="stat"><div class="v"><span class="o">300,000+</span> tx/sec</div><div class="k">Eesti Pank 2021 CBDC test — the team's KSI lineage</div></div>
    <div class="stat"><div class="v">eIDAS-aligned</div><div class="k">EU trust-services environment — government-grade</div></div>
  </div></div></div>
</div>${foot(3)}</div>`);

// 4 WHY NOW
S.push(`<div class="slide"><div class="grid"></div><div class="glow"></div><div class="pad">${kick('04 · WHY NOW · <b>THE BUYER</b>')}
  <h2>The buyer that forces the rail <span class="o">has arrived</span>.</h2>
  <div class="cols"><div class="col" style="flex:none"><div class="mega">57.5%</div><div class="megaq">of web requests are automated — not on-chain (Cloudflare, 2026)</div></div>
  <div class="col"><div class="cl" style="font-size:15px"><b>Two facts, kept separate.</b> The majority actor on the internet is already a machine. And those machines have started paying — roughly <b>100M x402 transactions on Base in nine months</b> (Chainalysis); real volume still tiny.</div>
    <div class="punch" style="margin-top:22px">An agent cannot round-trip a centralized check. <span class="o">It must verify in-band, at the edge — or it cannot transact at all.</span></div>
  </div></div>
</div>${foot(4)}</div>`);

// 5 POST-MORTEM (meeting winner)
S.push(`<div class="slide"><div class="grid"></div><div class="pad">${kick('05 · THE DIAGNOSIS · <b>RIGHT, BUT EARLY</b>')}
  <h2>Right thesis. <span class="o">No forcing function</span>.</h2>
  <div class="cols"><div class="col" style="flex:1.25">
    <div class="cl">Self-sovereign identity was correct, and early.</div>
    <div class="cl">It did not fail on cryptography. It stalled because the credential always sat <b>next to</b> the transaction — never inside it.</div>
    <div class="cl">Skip the check and nothing breaks — there was never an economic reason to carry the credential.</div>
    <div class="cl">Microsoft retired <b>did:ion</b> in December 2023. Trinsic wound down before a single credential was ever reused. SSI scaled linearly, then flattened.</div>
    <div class="cl">GlobaliD never reached escape velocity; its mission migrated forward into USBC. Not a failure of the idea — a failure of the rails to make the idea <b>unskippable</b>.</div>
  </div><div class="col">
    <svg width="100%" height="240" viewBox="0 0 420 240">
      <line x1="40" y1="200" x2="400" y2="200" stroke="#2a2a26"/><line x1="40" y1="40" x2="40" y2="200" stroke="#2a2a26"/>
      <path d="M40 196 L150 150 L240 120 L320 112 L400 110" fill="none" stroke="var(--bad)" stroke-width="2"/>
      <circle cx="240" cy="120" r="4" fill="#0E0E0C" stroke="var(--bad)"/><text x="240" y="104" fill="var(--faint)" font-family="Geist Mono" font-size="10" text-anchor="middle">did:ion retired</text>
      <circle cx="320" cy="112" r="4" fill="#0E0E0C" stroke="var(--bad)"/><text x="338" y="100" fill="var(--faint)" font-family="Geist Mono" font-size="10">Trinsic wound down</text>
      <text x="220" y="228" fill="var(--faint)" font-family="Geist Mono" font-size="10" text-anchor="middle">SSI adoption — linear, then flat</text>
    </svg>
  </div></div>
  <div class="punch">The missing piece was never better identity. <span class="o">It was a rail where the asset refuses to move without it.</span></div>
</div>${foot(5)}</div>`);

// 6 PORTFOLIO MAP (3rd person)
S.push(`<div class="slide"><div class="grid"></div><div class="pad">${kick('06 · THE PORTFOLIO MAP · <b>WHERE WE SIT</b>')}
  <h2>The floor under <span class="o">250 bets</span>.</h2>
  <div class="lead" style="margin-top:8px;max-width:96ch">Bets across identity, payments, exchanges, compute, and banking — each one assuming a settlement layer it does not own.</div>
  <div class="bands">
    <div class="band"><div class="bl">Identity<span>who can act</span></div><div class="bc">GlobaliD · Indicio · Terminal 3</div></div>
    <div class="band"><div class="bl">Payments &amp; Rails<span>how value moves</span></div><div class="bc">Ripple · Square · Robinhood</div></div>
    <div class="band"><div class="bl">Exchanges &amp; Custody<span>where value is held</span></div><div class="bc">Coinbase · Uphold</div></div>
    <div class="band"><div class="bl">Data · Compute · Speed<span>what it runs on</span></div><div class="bc">Filecoin · Solana · Brave</div></div>
    <div class="band"><div class="bl">Banking &amp; Tokenized Money<span>money with rules inside</span></div><div class="bc">Vast Bank · USBC</div></div>
    <div class="band sub"><div class="bl">Settlement Substrate<span>what it all settles on</span></div><div class="bc">UNICITY — the layer none of the bets occupy, and the one they all silently assume</div></div>
  </div>
</div>${foot(6)}</div>`);

// 7 RECEIVE PREDICATE
S.push(`<div class="slide"><div class="grid"></div><div class="pad">${kick('07 · THE PRIMITIVE · <b>THE RECEIVE PREDICATE</b>')}
  <h2>Compliance the asset <span class="o">enforces on itself</span>.</h2>
  <div class="cols" style="padding-top:10px"><div class="col" style="flex:none;width:430px">
    <svg width="430" height="250" viewBox="0 0 430 250">
      <rect x="10" y="100" width="96" height="50" rx="7" fill="#0E0E0C" stroke="#3a3a34"/><text x="58" y="130" fill="var(--dim)" font-family="Geist Mono" font-size="11" text-anchor="middle">SENDER</text>
      <line x1="106" y1="125" x2="170" y2="125" stroke="#555"/>
      <rect x="170" y="92" width="96" height="66" rx="8" fill="#0E0E0C" stroke="var(--o)"/><text x="218" y="120" fill="var(--ink)" font-family="Anton" font-size="13" text-anchor="middle">TOKEN</text>
      <rect x="178" y="62" width="80" height="22" rx="4" fill="#000" stroke="var(--o)"/><text x="218" y="77" fill="var(--o)" font-family="Geist Mono" font-size="8" text-anchor="middle">RECEIVE PREDICATE</text>
      <line x1="218" y1="84" x2="218" y2="92" stroke="var(--o)"/>
      <path d="M266 110 L340 70" stroke="var(--o)" stroke-width="1.4"/><path d="M266 140 L340 185" stroke="#8a8a84" stroke-width="1.2" stroke-dasharray="3 4"/>
      <rect x="340" y="52" width="80" height="40" rx="6" fill="#0E0E0C" stroke="var(--o)"/><text x="380" y="70" fill="var(--ink)" font-family="Geist Mono" font-size="9.5" text-anchor="middle">VERIFIED</text><text x="380" y="83" fill="var(--o)" font-family="Geist Mono" font-size="8" text-anchor="middle">✓ received</text>
      <rect x="340" y="168" width="80" height="40" rx="6" fill="#0E0E0C" stroke="#8a8a84"/><text x="380" y="186" fill="var(--faint)" font-family="Geist Mono" font-size="9.5" text-anchor="middle">UNVERIFIED</text><text x="380" y="199" fill="var(--faint)" font-family="Geist Mono" font-size="8" text-anchor="middle">✗ rejected</text>
      <text x="218" y="180" fill="var(--faint)" font-family="Geist Mono" font-size="8.5" text-anchor="middle">KYC · JURISDICTION · ACCREDITATION</text>
    </svg>
  </div><div class="col">
    <div class="cl" style="font-size:14px">A receive predicate is a rule the bearer asset carries and applies to its own transfer — <b>inside the money, not beside it</b>.</div>
    <div class="cl">The predicate checks a self-contained attestation <b>in-band</b> — no issuer call at settlement time.</div>
    <div class="cl">Revocation rides in the attestation: short-lived attestations, accumulator proofs. Stale credential, no settlement. <b>Freshness is the issuer's cadence, not the settlement's bottleneck.</b></div>
    <div class="punch" style="margin-top:20px">The credential isn't checked at the door. <span class="o">It is the door.</span></div>
  </div></div>
</div>${foot(7)}</div>`);

// 8 ARCHITECTURE
S.push(`<div class="slide"><div class="grid"></div><div class="pad">${kick('08 · THE MODEL · <b>VALIDATE AT THE EDGE</b>')}
  <h2>Tokens move P2P.<br>The chain <span class="o">just proves</span>.</h2>
  <div class="cols" style="padding-top:8px"><div class="col">
    <div class="lead" style="margin-top:0">Tokens are self-contained and move peer-to-peer with validation at the edge. The chain provides a proof of single-spend — <b>without ever seeing the transaction</b>.</div>
    <div class="cardrow" style="margin-top:18px">
      <div class="c3"><div class="ct">Self-contained</div><div class="cb">value lives in the object</div></div>
      <div class="c3"><div class="ct">Self-proving</div><div class="cb">carries its own proof</div></div>
      <div class="c3"><div class="ct">Peer-to-peer</div><div class="cb">moves with no ledger lookup</div></div>
    </div>
  </div><div class="col" style="flex:none;width:380px">
    <div style="display:flex;flex-direction:column;gap:8px">
      <div class="stat"><div class="v" style="font-size:15px">CONSENSUS &amp; EMISSION</div><div class="k">decentralized base security</div></div>
      <div style="text-align:center;color:var(--dim);font-size:12px">↓ certified state root</div>
      <div class="stat" style="border-color:var(--oline);background:linear-gradient(180deg,var(--owash),transparent)"><div class="v" style="font-size:15px;color:var(--o)">UNIQUENESS ORACLE</div><div class="k">stores only proofs that token states are unique</div></div>
      <div style="text-align:center;color:var(--dim);font-size:12px">↓ inclusion proofs</div>
      <div class="stat"><div class="v" style="font-size:15px">EXECUTION LAYER</div><div class="k">agents transact client-side, off-chain</div></div>
    </div>
  </div></div>
  <div class="punch">A blockchain with no transactions — <span class="o">it certifies uniqueness, and nothing else.</span></div>
</div>${foot(8)}</div>`);

// 9 ATOMIC SWAP
S.push(`<div class="slide"><div class="grid"></div><div class="pad">${kick('09 · THE COORDINATION PROOF · <b>NO CALLBACK</b>')}
  <h2>Both parties commit. <span class="o">Nobody chases a timeout</span>.</h2>
  <div class="cols" style="padding-top:10px;align-items:stretch">
    <div class="col"><div class="c3" style="border-left-color:var(--bad);height:100%"><div class="ct" style="color:var(--bad)">Hashed Timelock (HTLC)</div>
      <div class="cb">A locks &amp; reveals a hash · B locks against it · A claims, revealing the preimage · <b style="color:var(--ink)">B must claim before the timeout.</b></div>
      <div class="cb" style="margin-top:12px;color:var(--bad)">THE TIMING TRAP — B is late on the last step, a dropped connection, and A keeps both.</div></div></div>
    <div class="col"><div class="c3" style="height:100%"><div class="ct">Unicity Predicate Swap</div>
      <div class="cb">A commits &amp; B commits — independently — against one shared reference.</div>
      <div class="cb" style="margin-top:12px"><b>Both locked → the swap completes. Either walked away → both refunded.</b> No deadlines, no chasing.</div></div></div>
  </div>
  <div class="punch">The same structure answers the freshness question — <span class="o">verification is self-contained and in-band; no issuer to call back, no clock to lose.</span></div>
</div>${foot(9)}</div>`);

// 10 LIFE ARC (the one "you")
S.push(`<div class="slide"><div class="grid"></div><div class="pad">${kick('10 · THE LIFE ARC · <b>IDENTITY INSIDE THE MONEY</b>')}
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
</div>${foot(10)}</div>`);

// 11 PROOF (papers, no arXiv)
S.push(`<div class="slide"><div class="grid"></div><div class="pad">${kick('11 · THE PROOF · <b>PUBLIC & FORMAL</b>')}
  <h2>Don't take our word for it — <span class="o">here's the math</span>.</h2>
  <div class="lead" style="margin-top:8px">Three formal papers, public on GitHub. The security claims are proven, not asserted.</div>
  <div class="cardrow" style="margin-top:18px">
    <div class="c3"><div class="ct">Systems engineering</div><div class="cb"><b>Unicity Infrastructure: the Aggregation Layer</b> — off-chain &amp; offline tokens; ZK proofs, no trusted setup.</div><div class="cb" style="color:var(--faint);margin-top:10px">github.com/unicitynetwork/aggr-layer-paper</div></div>
    <div class="c3"><div class="ct">Security proof</div><div class="cb"><b>The Unicity Execution Layer</b> — no double-spend; no blocking; service &amp; user-side privacy.</div><div class="cb" style="color:var(--faint);margin-top:10px">github.com/unicitynetwork/execution-model-tex</div></div>
    <div class="c3"><div class="ct">Predicates &amp; swaps</div><div class="cb"><b>Unicity: Predicates &amp; Atomic Swaps</b> — programmable predicates; trustless atomic swaps.</div><div class="cb" style="color:var(--faint);margin-top:10px">github.com/unicitynetwork/unicity-predicates-tex</div></div>
  </div>
  <div class="punch">What's proven is <span class="o">privacy and no-double-spend</span>. Scalability is by sharding — stated as the design, not claimed as a benchmark.</div>
</div>${foot(11)}</div>`);

// 12 OBJECTION (R1 inverted)
S.push(`<div class="slide"><div class="grid"></div><div class="pad">${kick('12 · THE BOUNDARY · <b>WHAT A CHARTER CANNOT CROSS</b>')}
  <h2>A charter settles for its members.<br>The space <span class="o">between charters</span> has to be built.</h2>
  <div class="steel"><div class="sl">The strongest version of the argument</div><div class="st">“A permissioned chain on one bank charter already puts identity inside the money — USBC proves it works. Why generalize?”</div></div>
  <div class="reb">
    <div class="ri"><span class="n">1</span><span class="x">USBC proves the conclusion: identity belongs inside the money. <b>It works.</b></span></div>
    <div class="ri"><span class="n">2</span><span class="x">A charter settles for the parties on that charter. Value can't round-trip to a counterparty banking somewhere else without a trusted middle — <b>the boundary a charter cannot cross by construction</b>.</span></div>
    <div class="ri"><span class="n">3</span><span class="x">An agent at machine speed cannot phone any single charter's verifier in-band. Cross-charter, cross-agent settlement is the one thing a charter structurally can't do — <b>no matter how good the charter</b>.</span></div>
  </div>
  <div class="punch">Unicity is the rail that lets a USBC deposit settle to a counterparty on a different charter. <span class="o">USBC reached it on one charter; this generalizes the move — it doesn't replace it.</span></div>
</div>${foot(12)}</div>`);

// 13 TRACTION
S.push(`<div class="slide"><div class="grid"></div><div class="pad">${kick('13 · THE STATE OF PLAY · <b>LIVE</b>')}
  <h2>Agents discover, transact, and settle on Unicity <span class="o">today</span>.</h2>
  <div class="cols" style="padding-top:10px"><div class="col">
    <div class="lead" style="margin-top:0">A running demonstration, not a forecast — agents post intents, transact peer-to-peer, and settle on the substrate now.</div>
    <div class="cl" style="margin-top:16px;color:var(--faint)">Pipeline: sovereign and stablecoin-issuer engagements in confidential discussions — references on request.</div>
    <div class="punch" style="margin-top:22px">The architecture isn't a roadmap slide. <span class="o">The primitive runs.</span></div>
  </div><div class="col" style="flex:none;width:380px">
    <svg width="380" height="280" viewBox="0 0 380 280">
      <circle cx="190" cy="140" r="46" fill="#0E0E0C" stroke="var(--o)"/><text x="190" y="136" fill="var(--o)" font-family="Anton" font-size="12" text-anchor="middle">BULLETIN</text><text x="190" y="152" fill="var(--o)" font-family="Anton" font-size="12" text-anchor="middle">BOARD</text>
      ${[['USER',190,30],['CLOB',330,90],['AMM',330,200],['BANK·DAC',190,255],['LENDING',50,200],['ORACLE',50,90]].map(([t,x,y])=>`<line x1="190" y1="140" x2="${x}" y2="${y}" stroke="#3d3d3a"/><circle cx="${x}" cy="${y}" r="20" fill="#0E0E0C" stroke="#6f6f68"/><text x="${x}" y="${y+3}" fill="var(--dim)" font-family="Geist Mono" font-size="9.5" text-anchor="middle">${t}</text>`).join('')}
    </svg>
  </div></div>
</div>${foot(13)}</div>`);

// 14 CLOSE + ASK
S.push(`<div class="slide"><div class="grid"></div><div class="glow"></div><div class="pad">${kick('14 · THE ASK · <b>A CO-BUILD</b>')}
  <h2>One layer down from where the thesis <span class="o">already arrived</span>.</h2>
  <div class="lead" style="margin-top:10px;max-width:100ch">Identity inside the money. Compliance that travels with the asset. Settlement with no shared ledger. The conclusion USBC reached on one bank charter — generalized to a rail any issuer can settle on. Not a vendor. Not another L1 chasing throughput. The settlement layer for machine commerce — the chain only prevents double-spend; everything below it is the substrate.</div>
  <div class="askbox">
    <div class="big">Raising <span class="o">$5M Seed</span> · $25M cap / $50M token FDV · SAFE + token warrant.</div>
    <div class="ml">The proof is the partnership: a <b>Vast / USBC tokenized deposit whose receive predicate is a USBC attestation</b> — identity inside the money, settling on a rail that enforces it. One layer down.</div>
  </div>
  <div class="closer">The idea is already validated &mdash; on one charter. <span class="o">This is the rail that lets it hold everywhere.</span></div>
  <div class="tag">Architecture, not policy · Proof, not promises.</div>
  <div class="src">Cloudflare · Chainalysis · Eesti Pank · USBC press · github.com/unicitynetwork</div>
</div>${foot(14)}</div>`);

const html=`<!DOCTYPE html><html><head><meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Anton&family=Geist+Mono:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>${CSS}</style></head><body>${defs}
<div style="display:flex;flex-direction:column;align-items:center;gap:24px;padding:24px;background:#000">${S.join('\n')}</div></body></html>`;
fs.writeFileSync(DIR+'/index.html',html);
console.log('wrote HardYaka-Deck-v2.html ('+S.length+' slides)');

const b=await puppeteer.launch({headless:'new',args:['--no-sandbox']});
const p=await b.newPage(); await p.setViewport({width:1680,height:960,deviceScaleFactor:2});
await p.goto('file://'+DIR+'/index.html',{waitUntil:'networkidle0'}); await new Promise(r=>setTimeout(r,800));
const els=await p.$$('.slide'); const pngs=[];
for(let i=0;i<els.length;i++){const fp=`${DIR}/slides/slide-${String(i+1).padStart(2,'0')}.png`;await els[i].screenshot({path:fp});pngs.push(fp);}
await b.close(); console.log('rendered',pngs.length,'PNGs');
const pdf=await PDFDocument.create();
for(const fp of pngs){const img=await pdf.embedPng(fs.readFileSync(fp));const pg=pdf.addPage([1600,900]);pg.drawImage(img,{x:0,y:0,width:1600,height:900});}
fs.writeFileSync(DIR+'/Unicity_HardYaka_Seed_Deck.pdf',await pdf.save());
console.log('wrote Unicity_HardYaka_Seed_Deck_v2.pdf');
