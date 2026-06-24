import { DIAGRAMS } from '../gregDiagrams';

/* ============================================================
   OUR canonical HardYaka deck (greg-kidd/build.mjs, v12) rendered
   in the May-30 Tether frame. Copy is verbatim from the canonical
   build; emphasis markup (<b>, <span class="o">) preserved via the
   .gx scope. Diagrams are our own SVGs, inlined so they inherit the
   app's Anton / Geist Mono fonts.
   ============================================================ */

const mono = "'Geist Mono', monospace";
const anton = "'Anton', sans-serif";

const SCOPE = `
.gx .o{color:#FF6A1F}
.gx b{color:#FEFEFE;font-weight:600}
.gx .dia svg, .gx .diafull svg, .gx .diastack svg{display:block;width:100%;height:auto}
`;

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="gx fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <style>{SCOPE}</style>
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)', backgroundSize: '64px 64px' }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 58% 50% at 50% 48%, rgba(255,106,31,0.07), transparent 70%)' }} />
      <div className="relative z-10 h-full flex flex-col justify-center px-12 sm:px-16 lg:px-24 py-14 lg:py-20">
        {children}
      </div>
    </div>
  );
}

function H({ main, sub }: { main: string; sub: string }) {
  return (
    <div className="shrink-0">
      <h1 className="text-[#fefefe] uppercase text-[30px] sm:text-[40px] lg:text-[52px] leading-[1.08] tracking-tight" style={{ fontFamily: anton }} dangerouslySetInnerHTML={{ __html: main }} />
      <p className="text-[#fefefe] font-medium text-base sm:text-lg lg:text-2xl mt-3 max-w-[98ch] leading-snug" dangerouslySetInnerHTML={{ __html: sub }} />
    </div>
  );
}

function Core({ html, className = '' }: { html: string; className?: string }) {
  return <p className={`text-[#D6D6D0] text-base sm:text-lg lg:text-2xl leading-[1.5] mt-5 ${className}`} dangerouslySetInnerHTML={{ __html: html }} />;
}

function Dia({ k, max = '42vh' }: { k: string; max?: string }) {
  return <div className="dia w-full flex justify-center" style={{ maxHeight: max }} dangerouslySetInnerHTML={{ __html: DIAGRAMS[k] }} />;
}

function Two({ left, right }: { left: React.ReactNode; right: React.ReactNode }) {
  return (
    <div className="flex items-center gap-8 lg:gap-12 mt-5">
      <div className="shrink-0 basis-[44%] max-w-[44%]">{left}</div>
      <div className="flex-1 min-w-0 flex justify-center">{right}</div>
    </div>
  );
}

const cellCls = 'flex-1 rounded-lg border border-[#2c2c2a] border-t-2 border-t-orange-500 bg-[#101010] p-4 lg:p-5';
const ctCls = 'text-orange-400 uppercase tracking-wide text-base lg:text-xl';
const ckCls = 'text-[#D6D6D0] text-sm lg:text-lg mt-2 leading-snug';

/* ── 2 · macro shift ── */
export function GregShiftSlide() {
  return (
    <Shell>
      <H main='The macro shift: <span class="o">machine commerce requires machine trust</span>' sub="Autonomous agents now initiate high-frequency, micro-value transactions at scale." />
      <div className="shrink-0 flex items-start gap-10 lg:gap-14 mt-8">
        <div className="shrink-0">
          <div className="text-orange-400 leading-[0.8]" style={{ fontFamily: anton, fontSize: 'min(150px, 15vw)' }}>57.5%</div>
          <div className="text-[#9E9E96] uppercase tracking-wide text-sm lg:text-base mt-3 max-w-[30ch] leading-snug">of web requests are automated, not human — Cloudflare, 2026</div>
        </div>
        <Core className="mt-0" html="Legacy networks cannot verify an agent's authority or enforce a budget without a centralized bottleneck. Unicity forces the <b>proof of authority to travel natively with the money</b>." />
      </div>
    </Shell>
  );
}

/* ── 3 · bottleneck ── */
const bottleneck = [
  ['Broadcast', 'Every node hears every transaction.'],
  ['Order', 'Global agreement on the sequence of all of them.'],
  ['Validate', 'Every node re-runs every one.'],
  ['Record', 'Every node stores the whole state, forever.'],
];
export function GregBottleneckSlide() {
  return (
    <Shell>
      <H main='The structural bottleneck: <span class="o">the shared ledger</span>' sub="The shared ledger is a permanent ceiling on scale and privacy." />
      <Core html="Every node must broadcast, order, validate, and record every transaction. Machine-speed commerce requires eliminating the <b>shared ledger</b> entirely." />
      <div className="shrink-0 flex gap-4 mt-7">
        {bottleneck.map(([t, d]) => (
          <div key={t} className={cellCls}><div className={ctCls}>{t}</div><div className={ckCls}>{d}</div></div>
        ))}
      </div>
    </Shell>
  );
}

/* ── 4 · trilemma ── */
export function GregTrilemmaSlide() {
  return (
    <Shell>
      <H main='The stablecoin trilemma: <span class="o">pick two</span>' sub="Every digital-dollar design has been forced to sacrifice compliance, privacy, or throughput." />
      <Two
        left={<Core className="mt-0" html="Every design so far sacrifices one of the three, and the whole payment landscape is trapped in the trade-off. Unicity solves <b>all three at once</b> — it never places the transaction on a shared ledger to begin with." />}
        right={<Dia k="trilemma" max="46vh" />}
      />
    </Shell>
  );
}

/* ── 5 · infrastructure gap ── */
const gap = [
  ['01', 'Disintermediation', 'Open infrastructure bypassed the legacy financial middleman.', 'solved', false],
  ['02', 'Digital value', 'Stablecoins now settle tens of trillions of dollars a year.', 'solved', false],
  ['03', 'Cryptographic identity', "No blockchain can natively verify a recipient's legal or operational standing before a transaction executes.", 'unsolved', true],
];
export function GregGapSlide() {
  return (
    <Shell>
      <H main='The final infrastructure gap: <span class="o">embedded identity</span>' sub="We solved disintermediation and digital value. Counterparty verification remains broken." />
      <div className="shrink-0 mt-6">
        {gap.map(([n, t, d, s, open], i) => (
          <div key={n as string} className={`flex items-baseline gap-6 py-4 border-t border-[#2c2c2a] ${i === gap.length - 1 ? 'border-b' : ''}`}>
            <span className="text-orange-400 shrink-0 w-11 text-2xl lg:text-3xl" style={{ fontFamily: anton }}>{n}</span>
            <div className="flex-1">
              <div className="text-[#fefefe] uppercase text-xl lg:text-2xl" style={{ fontFamily: anton }}>{t}</div>
              <div className="text-[#D6D6D0] text-sm lg:text-lg mt-1 leading-snug">{d}</div>
            </div>
            <span className={`ml-auto self-center uppercase tracking-[0.16em] text-sm lg:text-base whitespace-nowrap ${open ? 'text-orange-400' : 'text-[#9E9E96]'}`} style={{ fontFamily: mono }}>{s}</span>
          </div>
        ))}
      </div>
      <p className="shrink-0 mt-6 text-[#fefefe] font-semibold text-xl lg:text-2xl">Unicity was engineered to close <span className="text-orange-400">this final gap</span>.</p>
    </Shell>
  );
}

/* ── 6 · side-car to protocol ── */
export function GregSidecarSlide() {
  return (
    <Shell>
      <H main='From side-car to protocol: <span class="o">evolving digital identity</span>' sub="Verification must be built into the asset, not layered on as an optional application check." />
      <Core html="Self-sovereign identity stalled because the credential sat beside the transaction, and a check that can be skipped gets skipped. Unicity puts identity <b>inside the asset</b> and makes it enforceable across any jurisdiction." />
      <div className="h-px w-16 bg-orange-500/80 mt-7" />
    </Shell>
  );
}

/* ── 7 · bearer instruments ── */
export function GregBearerSlide() {
  return (
    <Shell>
      <H main='From ledger entries to <span class="o">bearer instruments</span>' sub="Off-chain settlement restores the properties of physical cash to digital stablecoins." />
      <Core html="Unicity converts an on-chain stablecoin into a <b>self-contained, self-proving bearer instrument</b>. It carries its own proof and moves <b>peer-to-peer</b> over any channel — HTTP, QR, NOSTR — with zero ledger lookups." />
      <div className="shrink-0 mt-6 flex justify-center"><div className="w-full max-w-[1340px]"><Dia k="xform" max="50vh" /></div></div>
    </Shell>
  );
}

/* ── 8 · oracle + unbundling timeline ── */
const timeline = [
  ['2009 · BITCOIN', 'Correctness + ordering', 'Every node certifies every transaction and agrees the global order.', false],
  ['2023 · SUI · FASTPAY', 'Correctness only', 'Global ordering dropped for assets that share no state.', false],
  ['2026 · UNICITY', 'Uniqueness only', 'The network attests one thing. Correctness moves to the edge.', true],
];
export function GregOracleSlide() {
  return (
    <Shell>
      <H main='The uniqueness oracle: <span class="o">unbundling consensus</span>' sub="Each generation of consensus removed work from the network. Unicity keeps only the irreducible function." />
      <Two
        left={<Core className="mt-0" html="The <b>Uniqueness Oracle</b> attests to one thing: has this token been spent? It never re-executes transactions or reads payloads, so throughput scales horizontally — <b>by design, 30,000 tx/sec per shard</b>." />}
        right={<Dia k="oracle" max="38vh" />}
      />
      <div className="shrink-0 flex gap-5 mt-6">
        {timeline.map(([yr, nm, ds, last]) => (
          <div key={yr as string} className={`flex-1 pt-3.5 border-t ${last ? 'border-orange-500' : 'border-[#2c2c2a]'}`}>
            <div className={`text-sm lg:text-base tracking-[0.08em] ${last ? 'text-orange-400' : 'text-[#9E9E96]'}`} style={{ fontFamily: anton }}>{yr}</div>
            <div className={`uppercase text-lg lg:text-2xl mt-1.5 ${last ? 'text-orange-400' : 'text-[#fefefe]'}`} style={{ fontFamily: anton }}>{nm}</div>
            <div className="text-[#D6D6D0] text-sm lg:text-lg mt-1.5 leading-snug">{ds}</div>
          </div>
        ))}
      </div>
    </Shell>
  );
}

/* ── 9 · architecture ── */
export function GregArchitectureSlide() {
  return (
    <Shell>
      <H main='The architecture: <span class="o">a minimal chain, an economy off it</span>' sub="Consensus stays minimal on-chain; everything an agent touches runs off-chain." />
      <Two
        left={<Core className="mt-0" html="Proof-of-work, BFT finality, and the ZK oracle keep the chain minimal. Everything an agent touches runs off-chain — the SDK and the agent execution layer. <b>The chain does one job; the economy runs beside it.</b>" />}
        right={<Dia k="archstack" max="52vh" />}
      />
    </Shell>
  );
}

/* ── 10 · receive predicate ── */
export function GregReceiveSlide() {
  return (
    <Shell>
      <H main='Protocol-enforced compliance: <span class="o">the receive predicate</span>' sub="Cryptographically gating asset transfers without sacrificing peer-to-peer privacy." />
      <Core html="The <b>Receive Predicate</b> programs KYC, jurisdiction, and accreditation directly into the asset. If the recipient cannot satisfy it locally, the transfer mathematically fails — <b>the asset enforces its own compliance</b>." />
      <div className="shrink-0 mt-6 flex justify-center"><div className="w-full max-w-[1340px]"><Dia k="compliance" max="50vh" /></div></div>
    </Shell>
  );
}

/* ── 11 · privacy ── */
const observers = [
  ['The network', 'Sees only opaque commitments. It cannot read amounts, parties, or balances, nor link one transfer to the next.'],
  ['The sender', 'Cannot watch where or when the recipient later spends what was sent.'],
  ['Anyone with the address', 'Sees one published key; every sender derives a fresh, indistinguishable transaction key.'],
];
export function GregPrivacySlide() {
  return (
    <Shell>
      <H main='Privacy by construction: <span class="o">proven against every observer</span>' sub="Absolute confidentiality is the prerequisite for institutional capital flows." />
      <Core html="Confidentiality is a founding property of the protocol — mathematically proven against all three observers." />
      <div className="shrink-0 mt-5">
        {observers.map(([ol, od], i) => (
          <div key={ol} className={`flex items-baseline gap-7 py-3 border-t border-[#2c2c2a] ${i === observers.length - 1 ? 'border-b' : ''}`}>
            <span className="uppercase text-[#fefefe] w-[300px] shrink-0 text-lg lg:text-2xl" style={{ fontFamily: anton }}>{ol}</span>
            <span className="text-[#D6D6D0] text-base lg:text-xl leading-snug">{od}</span>
            <span className="ml-auto uppercase tracking-[0.14em] text-orange-400 text-sm lg:text-base" style={{ fontFamily: mono }}>proven</span>
          </div>
        ))}
      </div>
    </Shell>
  );
}

/* ── 12 · no bridge ── */
export function GregNoBridgeSlide() {
  return (
    <Shell>
      <H main='No bridge, <span class="o">nothing to hack</span>' sub="Eliminating the largest loss category in digital finance." />
      <Core html="Bridges concentrate risk: they hold value and relay a forgeable message. Unicity holds nothing — a locked source-chain asset becomes a self-contained token the recipient verifies directly against the source contract." />
      <div className="shrink-0 mt-6 flex justify-center"><div className="w-full max-w-[1340px]"><Dia k="nobridge" max="50vh" /></div></div>
    </Shell>
  );
}

/* ── 13 · atomic swap ── */
export function GregSwapSlide() {
  return (
    <Shell>
      <H main='The atomic swap: <span class="o">settlement without an intermediary</span>' sub="Trustless atomic swaps between self-contained bearer assets." />
      <Core html='The old fix is a timed lock, and the clock is the attack surface — one side stalls and walks. Unicity removes it with <b style="white-space:nowrap">Predicate Swaps</b>: both commit independently, and the swap forms for both at once or not at all.' />
      <div className="shrink-0 mt-6 flex justify-center"><div className="w-full max-w-[1340px]"><Dia k="swap" max="50vh" /></div></div>
    </Shell>
  );
}

/* ── 14 · x402 ── */
const x402old = [
  ['1', 'Client requests the resource', false],
  ['2', 'Server returns 402 Payment Required', false],
  ['3', 'Client signs and submits payment', false],
  ['4', 'Server forwards to facilitator', true],
  ['5', 'Facilitator verifies on-chain balance', true],
  ['6', 'Settle on the shared ledger', true],
  ['7', 'Await block confirmation', true],
  ['8', 'Facilitator confirms to server', true],
  ['…', 'then deliver the resource', false],
];
const x402new = [
  ['1', 'Client requests the resource'],
  ['2', 'Server returns 402 Payment Required'],
  ['3', 'Client pays with a bearer token (auth + proof inside)'],
  ['4', 'Server verifies the token locally'],
  ['5', 'Server delivers the resource'],
];
export function GregX402Slide() {
  return (
    <Shell>
      <H main='X402, rebuilt: <span class="o">twelve steps to five</span>' sub="Eliminating the network friction that operators spend billions trying to solve." />
      <Core html="Today x402 still routes settlement through a facilitator and a public chain. Unicity embeds authorization and proof in the token and cuts the handshake from <b>twelve steps to five</b>." />
      <div className="shrink-0 flex gap-7 mt-5 items-stretch">
        <div className="flex-1 rounded-lg border border-[#2c2c2a] bg-[#101010] p-4 lg:p-5">
          <div className="flex justify-between items-baseline uppercase tracking-wide text-[#9E9E96] text-base lg:text-lg" style={{ fontFamily: anton }}><span>Traditional x402</span><span className="text-[#fefefe]">12 steps</span></div>
          {x402old.map(([i, t, gone]) => (
            <div key={i as string} className={`flex gap-3 py-1.5 text-sm lg:text-lg border-t border-white/5 first:border-t-0 ${gone ? 'text-[#5a5a55] line-through' : 'text-[#D6D6D0]'}`}><span className="text-[#9E9E96] w-4 shrink-0 no-underline">{i}</span>{t}</div>
          ))}
        </div>
        <div className="flex-1 rounded-lg p-4 lg:p-5" style={{ border: '1px solid rgba(255,106,31,0.4)', background: 'linear-gradient(180deg, rgba(255,106,31,0.06), transparent)' }}>
          <div className="flex justify-between items-baseline uppercase tracking-wide text-orange-400 text-base lg:text-lg" style={{ fontFamily: anton }}><span>Unicity x402</span><span>5 steps</span></div>
          {x402new.map(([i, t]) => (
            <div key={i} className="flex gap-3 py-1.5 text-sm lg:text-lg border-t border-white/5 first:border-t-0 text-[#D6D6D0]"><span className="text-[#9E9E96] w-4 shrink-0">{i}</span>{t}</div>
          ))}
          <div className="mt-3 uppercase tracking-wide text-orange-400 text-lg lg:text-2xl" style={{ fontFamily: anton }}>7 steps eliminated</div>
          <div className="text-[#D6D6D0] text-sm lg:text-lg mt-1.5">No facilitator. No shared ledger. No block wait.</div>
        </div>
      </div>
    </Shell>
  );
}

/* ── table helper for market / incumbents ── */
function Table({ cols, head, rows }: { cols: string; head: string[]; rows: (string | { v: string; cls?: string })[][] }) {
  const cell = (c: string | { v: string; cls?: string }, key: number, isHead = false) => {
    const v = typeof c === 'string' ? c : c.v;
    const cls = typeof c === 'string' ? '' : c.cls || '';
    return <div key={key} className={`px-4 lg:px-5 py-2.5 lg:py-3 text-base lg:text-xl leading-snug border-r border-[#2c2c2a] last:border-r-0 ${isHead ? 'uppercase tracking-wide text-[#9E9E96] text-sm lg:text-base' : ''} ${cls}`} style={isHead ? { fontFamily: anton } : undefined}>{v}</div>;
  };
  return (
    <div className="shrink-0 mt-5 border border-[#2c2c2a] rounded-lg overflow-hidden">
      <div className="grid border-b border-[#2c2c2a] bg-white/[0.025]" style={{ gridTemplateColumns: cols }}>{head.map((h, i) => cell(i === head.length - 1 ? { v: h, cls: 'text-orange-400' } : h, i, true))}</div>
      {rows.map((r, ri) => (
        <div key={ri} className="grid border-b border-[#2c2c2a] last:border-b-0" style={{ gridTemplateColumns: cols }}>{r.map((c, ci) => cell(c, ci))}</div>
      ))}
    </div>
  );
}

const win = (v: string) => ({ v, cls: 'text-orange-400 bg-orange-500/[0.05]' });
const mut = (v: string) => ({ v, cls: 'text-[#9E9E96]' });
const lbl = (v: string) => ({ v, cls: 'text-[#D6D6D0] uppercase' });

/* ── 15 · machine market ── */
export function GregMarketSlide() {
  return (
    <Shell>
      <H main='The machine market: <span class="o">venue-free trading</span>' sub="CEX speed, DEX custody, with native privacy and compliance." />
      <Core html="Legacy venues force a compromise. Unicity delivers exchange speed, self-custody, privacy, and compliance — with <b>no venue at all</b>." />
      <Table cols="1.3fr 1.2fr 1.2fr 1.2fr"
        head={['', 'Legacy CEX', 'Legacy DEX', 'Unicity']}
        rows={[
          [lbl('Speed'), 'sub-second', mut('block time'), win('sub-second')],
          [lbl('Custody'), mut('custodial'), 'self-custodial', win('self-custodial')],
          [lbl('Privacy'), mut('operator sees all'), mut('fully public'), win('unlinkable')],
          [lbl('Compliance'), mut('off-chain'), mut('none'), win('in the asset')],
        ]}
      />
    </Shell>
  );
}

/* ── 16 · agentic DAC ── */
export function GregDACSlide() {
  return (
    <Shell>
      <H main='What gets built: <span class="o">the agentic corporation</span>' sub="Agents become the new smart contracts, executing verifiable logic directly on bearer assets." />
      <Core html="Unicity built a decentralized autonomous corporation for BlackRock — a parametric insurer whose capital, underwriting, and cession all run as agents. Settlement is only the entry point: <b>the same protocol runs the whole corporation</b>." />
      <div className="shrink-0 mt-6 flex justify-center"><div className="w-full max-w-[1340px]"><Dia k="dac" max="48vh" /></div></div>
    </Shell>
  );
}

/* ── 17 · incumbents ── */
export function GregIncumbentsSlide() {
  return (
    <Shell>
      <H main='The incumbents validate <span class="o">the diagnosis</span>' sub="The market is spending billions to optimize the ledger. We eliminated it." />
      <Core html="The incumbents are spending billions to work around the ledger they built, splitting the proof across separate layers. <b>Unicity keeps authorization, settlement, and the audit trail whole, inside the asset.</b>" />
      <Table cols="1.1fr 2.4fr 1fr"
        head={['Player', 'Their move', 'Approach']}
        rows={[
          [lbl('Circle'), 'Pivoted to infrastructure — the Arc L1, a $222M presale, bought Malachite.', mut('optimise the ledger')],
          [lbl('Solana'), 'Alpenglow cut finality to ~150ms; its co-founder concedes a physical ceiling.', mut('optimise the ledger')],
          [lbl('AP2 · x402'), 'Authorize in one layer, settle in another — the proof splits across the stack.', mut('split the proof')],
          [{ v: 'Unicity', cls: 'text-orange-400 uppercase' }, win('Keeps authorization, settlement, and the audit trail inside the asset.'), win('keep it whole')],
        ]}
      />
    </Shell>
  );
}

/* ── 18 · team ── */
const team = [
  ['The team', "Built Guardtime's <b>KSI</b> — the verification layer deployed with the Estonian Government, Lockheed Martin, Boeing and NATO. In production since 2012, eIDAS-grade. That lineage sustained <b>300,000 tx/sec</b> in Eesti Pank's 2021 test (heritage, not a live Unicity figure)."],
  ['The proof', 'Three mathematical papers prove the <b>privacy</b> and <b>no-double-spend</b> guarantees. Drop them into any model and they check. All public on github.com/unicitynetwork. The proof is verifiable today, not asserted.'],
  ['The alignment', 'Identity, speed, and peer-to-peer settlement, bound into one instrument — the fair-access infrastructure Hard Yaka has backed across a generation of payments companies.'],
];
export function GregTeamSlide() {
  return (
    <Shell>
      <H main='The team: <span class="o">sovereign-grade verification</span>' sub="Shipping nation-scale cryptographic infrastructure before agentic finance had a name." />
      <div className="shrink-0 flex gap-5 mt-8">
        {team.map(([t, d]) => (
          <div key={t} className={cellCls}>
            <div className={ctCls}>{t}</div>
            <div className={ckCls} dangerouslySetInnerHTML={{ __html: d }} />
          </div>
        ))}
      </div>
    </Shell>
  );
}

/* ── 19 · ask ── */
export function GregAskSlide() {
  return (
    <Shell>
      <H main='The ask: <span class="o">$5M to settle the first compliant dollar</span>' sub="Accelerating the deployment of compliant, peer-to-peer stablecoins." />
      <div className="shrink-0 mt-7 rounded-xl p-6 lg:p-8" style={{ border: '1px solid rgba(255,106,31,0.4)', background: 'linear-gradient(180deg, rgba(255,106,31,0.06), transparent)' }}>
        <div className="text-[#fefefe] text-2xl lg:text-4xl" style={{ fontFamily: anton }}><span className="text-orange-400">$5M Seed</span> · $25M cap / $50M token FDV · SAFE + token warrant</div>
        <p className="text-[#D6D6D0] text-base lg:text-2xl mt-4 leading-relaxed max-w-[104ch]" dangerouslySetInnerHTML={{ __html: 'We will partner with a regulated issuer to ship a compliant dollar that settles peer-to-peer the moment the Receive Predicate is satisfied — binding <b style="color:#fefefe">identity, speed, and settlement</b> into one instrument.' }} />
      </div>
      <p className="shrink-0 mt-7 text-[#fefefe] font-semibold text-xl lg:text-2xl">Institutions rely on walled gardens for compliance. <span className="text-orange-400">Unicity embeds that compliance directly into the dollar.</span></p>
    </Shell>
  );
}
