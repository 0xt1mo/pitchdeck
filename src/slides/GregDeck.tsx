import { DIAGRAMS } from '../gregDiagrams';

/* ============================================================
   The Greg Kidd / Hard Yaka deck, in the May-30 Tether frame.
   Copy is the canonical 0xt1mo spec (label : payoff headlines,
   declarative cores). Diagrams + tables preserved.
   ============================================================ */

const mono = "'Geist Mono', monospace";
const anton = "'Anton', sans-serif";

const SCOPE = `
.gx{font-family:'Geist Mono',monospace}
.gx .o{color:var(--color-orange-400)}
.gx b{color:#FEFEFE;font-weight:600}
.gx .lblc{font-family:'Anton',sans-serif}
.gx .dia svg{display:block;width:100%;height:auto}
`;

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="gx fixed inset-0 z-50 bg-[#060606] overflow-y-auto lg:overflow-hidden">
      <style>{SCOPE}</style>
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)', backgroundSize: '64px 64px' }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 58% 50% at 50% 48%, rgba(255,137,4,0.07), transparent 70%)' }} />
      <div className="relative z-10 min-h-full flex flex-col justify-start lg:justify-center px-6 sm:px-12 lg:px-24 py-14 sm:py-16 lg:py-20">
        {children}
      </div>
    </div>
  );
}

function H({ main, sub }: { main: string; sub: string }) {
  return (
    <div className="shrink-0">
      <h1 className="text-[#fefefe] uppercase text-[30px] sm:text-[40px] lg:text-[52px] leading-[1.06] tracking-tight" style={{ fontFamily: anton }} dangerouslySetInnerHTML={{ __html: main }} />
      <p className="text-[#fefefe] font-medium text-base sm:text-lg lg:text-xl mt-3 max-w-[92ch] leading-snug" dangerouslySetInnerHTML={{ __html: sub }} />
    </div>
  );
}

function Core({ html, className = '' }: { html: string; className?: string }) {
  return <p className={`text-[#D6D6D0] text-base sm:text-lg lg:text-xl leading-[1.55] mt-5 ${className}`} dangerouslySetInnerHTML={{ __html: html }} />;
}

function Dia({ k, max = '42vh' }: { k: string; max?: string }) {
  return <div className="dia w-full flex justify-center" style={{ maxHeight: max }} dangerouslySetInnerHTML={{ __html: DIAGRAMS[k] }} />;
}

function Two({ left, right }: { left: React.ReactNode; right: React.ReactNode }) {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-12 mt-5">
      <div className="lg:basis-[44%] lg:max-w-[44%]">{left}</div>
      <div className="min-w-0 flex justify-center">{right}</div>
    </div>
  );
}

const cellCls = 'flex-1 rounded-lg border border-[#2c2c2a] border-t-2 border-t-orange-500 bg-[#101010] p-4 lg:p-5';
const ctCls = 'text-orange-400 uppercase tracking-wide text-base lg:text-xl lblc';
const ckCls = 'text-[#D6D6D0] text-sm lg:text-lg mt-2 leading-snug';

/* ════════ 2 · MACRO SHIFT ════════ */
export function GregShiftSlide() {
  return (
    <Shell>
      <H main='The counterparty is now <span class="o">a machine.</span>' sub="Agents now negotiate, sign, and settle on their own — no human in the loop." />
      <div className="shrink-0 flex flex-col lg:flex-row lg:items-start gap-5 lg:gap-14 mt-6 lg:mt-8">
        <div className="shrink-0">
          <div className="text-orange-400 leading-[0.8]" style={{ fontFamily: anton, fontSize: 'min(188px, 18vw)' }}>57.5%</div>
          <div className="text-[#9E9E96] uppercase tracking-wide text-sm lg:text-base mt-3 max-w-[30ch] leading-snug">of global web traffic is now automated — Cloudflare, 2026</div>
        </div>
        <Core className="mt-0" html="Legacy networks were built for human finance — they cannot check an agent's authority or hold it to a budget without a central chokepoint. Unicity binds the <b>proof of authority to the money itself</b>. It travels with every payment." />
      </div>
    </Shell>
  );
}

/* ════════ 3 · BOTTLENECK ════════ */
const bottleneck = [
  ['Broadcast', 'Every node hears every transaction.'],
  ['Order', 'Global agreement on the sequence of every one.'],
  ['Validate', 'Every node re-runs every one.'],
  ['Record', 'Every node stores the whole state, forever.'],
];
export function GregBottleneckSlide() {
  return (
    <Shell>
      <H main='Machines cannot wait on <span class="o">a shared ledger.</span>' sub="Shared ledgers were designed for humans — slow, sequential, contested. A permanent ceiling on scale and privacy." />
      <Core html="Every node broadcasts, orders, validates, and records every transaction — one global queue that machine-speed commerce will never clear. Assets have to live off-chain. <b>Remove the shared ledger entirely.</b>" />
      <div className="shrink-0 grid grid-cols-2 lg:flex gap-3 lg:gap-4 mt-7">
        {bottleneck.map(([t, d]) => (
          <div key={t} className={cellCls}><div className={ctCls}>{t}</div><div className={ckCls}>{d}</div></div>
        ))}
      </div>
    </Shell>
  );
}

/* ════════ 4 · TRILEMMA ════════ */
export function GregTrilemmaSlide() {
  return (
    <Shell>
      <H main='Every stablecoin <span class="o">picks two.</span>' sub="Every digital-dollar design has been forced to sacrifice compliance, privacy, or throughput." />
      <Two
        left={<Core className="mt-0" html="A public ledger gives you compliance and throughput — and exposes every balance. Add zero-knowledge and privacy returns, but the proving cost crushes throughput. Unicity holds <b>all three</b> — it never puts the transaction on a shared ledger to begin with." />}
        right={<Dia k="trilemma" max="48vh" />}
      />
    </Shell>
  );
}

/* ════════ 5 · INFRASTRUCTURE GAP ════════ */
const gap = [
  ['01', 'Disintermediation', 'Open infrastructure bypassed the legacy financial middleman.', 'solved', false],
  ['02', 'Digital value', 'Stablecoins now settle tens of trillions of dollars a year.', 'solved', false],
  ['03', 'Cryptographic identity', "No blockchain can natively verify a recipient's legal or operational standing before a transaction executes.", 'unsolved', true],
];
export function GregGapSlide() {
  return (
    <Shell>
      <H main='Identity was <span class="o">never built in.</span>' sub="We solved disintermediation. We solved digital value. We never solved knowing who is on the other end." />
      <div className="shrink-0 mt-6">
        {gap.map(([n, t, d, s, open], i) => (
          <div key={n as string} className={`flex items-baseline gap-6 py-4 border-t border-[#2c2c2a] ${i === gap.length - 1 ? 'border-b' : ''}`}>
            <span className="text-orange-400 shrink-0 w-11 text-2xl lg:text-3xl" style={{ fontFamily: anton }}>{n}</span>
            <div className="flex-1 min-w-0 pr-8">
              <div className="text-[#fefefe] uppercase text-xl lg:text-2xl" style={{ fontFamily: anton }}>{t}</div>
              <div className="text-[#D6D6D0] text-sm lg:text-lg mt-1 leading-snug">{d}</div>
            </div>
            <span className={`ml-auto self-center uppercase tracking-[0.16em] text-sm lg:text-base whitespace-nowrap ${open ? 'text-orange-400' : 'text-[#9E9E96]'}`} style={{ fontFamily: mono }}>{s}</span>
          </div>
        ))}
      </div>
      <p className="shrink-0 mt-6 text-[#fefefe] font-semibold text-xl lg:text-2xl">Identity is the permission to act — <span className="text-orange-400">Unicity makes it enforceable inside the asset</span>.</p>
    </Shell>
  );
}

/* ════════ 6 · COMPETITIVE VALIDATION ════════ */
function Table({ cols, head, rows }: { cols: string; head: string[]; rows: (string | { v: string; cls?: string })[][] }) {
  const cell = (c: string | { v: string; cls?: string }, key: number, isHead = false) => {
    const v = typeof c === 'string' ? c : c.v;
    const cls = typeof c === 'string' ? '' : c.cls || '';
    return <div key={key} className={`px-4 lg:px-5 py-2.5 lg:py-3 text-base lg:text-xl leading-snug border-r border-[#2c2c2a] last:border-r-0 ${isHead ? 'uppercase tracking-wide text-[#9E9E96] text-sm lg:text-base' : ''} ${cls}`} style={isHead ? { fontFamily: anton } : undefined}>{v}</div>;
  };
  return (
    <div className="shrink-0 mt-5 -mx-6 sm:mx-0 overflow-x-auto">
      <div className="border border-[#2c2c2a] rounded-lg overflow-hidden min-w-[620px] sm:min-w-0 mx-6 sm:mx-0">
        <div className="grid border-b border-[#2c2c2a] bg-white/[0.025]" style={{ gridTemplateColumns: cols }}>{head.map((h, i) => cell(i === head.length - 1 ? { v: h, cls: 'text-orange-400' } : h, i, true))}</div>
        {rows.map((r, ri) => (
          <div key={ri} className="grid border-b border-[#2c2c2a] last:border-b-0" style={{ gridTemplateColumns: cols }}>{r.map((c, ci) => cell(c, ci))}</div>
        ))}
      </div>
    </div>
  );
}
const win = (v: string) => ({ v, cls: 'text-orange-400 bg-orange-500/[0.05]' });
const mut = (v: string) => ({ v, cls: 'text-[#9E9E96]' });
const lbl = (v: string) => ({ v, cls: 'text-[#D6D6D0] uppercase lblc' });

export function GregIncumbentsSlide() {
  return (
    <Shell>
      <H main='The incumbents validate <span class="o">the diagnosis.</span>' sub="The market spends billions working around the ledger. We removed it." />
      <Core html="Every incumbent is working around the ledger they built — authorize in one place, settle in another, reconcile the audit trail across both. <b>Unicity keeps authorization, settlement, and the audit trail whole — inside the asset.</b>" />
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

/* ════════ 7 · ASSET REDESIGN — BEARER ════════ */
export function GregBearerSlide() {
  return (
    <Shell>
      <H main='From ledger entries to <span class="o">bearer instruments.</span>' sub="Off-chain settlement gives a digital dollar the properties of physical cash." />
      <Core html="A stablecoin on a ledger is an entry someone else maintains. Unicity makes it a <b>bearer instrument</b> — self-contained, self-proving, carrying its own proof of validity. It moves <b>peer-to-peer</b> over any channel — HTTP, QR, NOSTR — with no ledger to call." />
      <div className="shrink-0 mt-6 flex justify-center"><div className="w-full max-w-[1340px]"><Dia k="ledgerbearer" max="46vh" /></div></div>
    </Shell>
  );
}

/* ════════ 8 · THE ENGINE — UNIQUENESS ORACLE ════════ */
const timeline = [
  ['2009 · BITCOIN', 'Correctness + ordering', 'Every node certifies every transaction and agrees the global order.', false],
  ['2023 · SUI · FASTPAY', 'Correctness only', 'Global ordering dropped for assets that share no state.', false],
  ['2026 · UNICITY', 'Uniqueness only', 'The network attests one thing. Correctness moves to the edge.', true],
];
export function GregOracleSlide() {
  return (
    <Shell>
      <H main='The network attests <span class="o">one thing.</span>' sub="Each generation of consensus removed work from the network. Unicity keeps only the irreducible function." />
      <Two
        left={<Core className="mt-0" html="Everyone validating everything cannot scale. The <b>Uniqueness Oracle</b> attests to one thing — has this token been spent? It never re-runs a transaction or reads its contents. Add shards, add throughput: <b>30,000 transactions per second per shard, by design</b>." />}
        right={<Dia k="oracle" max="42vh" />}
      />
      <div className="shrink-0 flex gap-5 mt-6">
        {timeline.map(([yr, nm, ds, last]) => (
          <div key={yr as string} className={`flex-1 pt-3.5 border-t ${last ? 'border-orange-500' : 'border-[#2c2c2a]'}`}>
            <div className={`text-sm lg:text-base tracking-[0.08em] ${last ? 'text-orange-400' : 'text-[#9E9E96]'}`} style={{ fontFamily: anton }}>{yr}</div>
            <div className={`uppercase text-lg lg:text-2xl mt-1.5 ${last ? 'text-orange-400' : 'text-[#fefefe]'}`} style={{ fontFamily: anton }}>{nm}</div>
            <div className="text-[#D6D6D0] text-sm lg:text-base mt-1.5 leading-snug">{ds}</div>
          </div>
        ))}
      </div>
    </Shell>
  );
}

/* kept defined (not in the live order) — minimal-chain architecture */
export function GregArchitectureSlide() {
  return (
    <Shell>
      <H main='The chain does <span class="o">one job.</span>' sub="Consensus stays minimal on-chain — everything an agent touches runs off-chain." />
      <Two
        left={<Core className="mt-0" html="Proof-of-work, BFT finality, and the ZK oracle keep the chain minimal. Everything an agent touches runs off-chain — the SDK and the agent execution layer. <b>The chain does one job — the economy runs beside it.</b>" />}
        right={<Dia k="archstack" max="56vh" />}
      />
    </Shell>
  );
}

/* ════════ 9 · COMPLIANCE — RECEIVE PREDICATE ════════ */
export function GregReceiveSlide() {
  return (
    <Shell>
      <H main='The asset enforces <span class="o">its own compliance.</span>' sub="Cryptographically gating asset transfers without sacrificing peer-to-peer privacy." />
      <Core html="Compliance does not need a central facilitator. The <b>Receive Predicate</b> programs KYC, jurisdiction, and accreditation into the asset itself. If the recipient cannot satisfy it, the transfer does not form. <b>The asset enforces its own compliance — nothing routes around it.</b>" />
      <div className="shrink-0 mt-6 flex justify-center"><div className="w-full max-w-[1340px]"><Dia k="compliance" max="46vh" /></div></div>
    </Shell>
  );
}

/* ════════ 10 · PRIVACY ════════ */
const observers = [
  ['The network', 'Sees only opaque commitments. It cannot read amounts, parties, or balances, nor link one transfer to the next.'],
  ['The sender', 'Cannot watch where or when the recipient later spends what was sent.'],
  ['Anyone with the address', 'Sees one published key; every sender derives a fresh, indistinguishable transaction key.'],
];
export function GregPrivacySlide() {
  return (
    <Shell>
      <H main='Private against <span class="o">every observer.</span>' sub="Confidentiality is the floor for institutional capital." />
      <Core html="Privacy is a founding property of the protocol — proven against all three observers: the network, the sender, anyone holding the address. Public ledgers expose all three. Unicity closes them by construction." />
      <div className="shrink-0 mt-5">
        {observers.map(([ol, od], i) => (
          <div key={ol} className={`flex flex-col lg:flex-row lg:items-baseline gap-1 lg:gap-7 py-3 border-t border-[#2c2c2a] ${i === observers.length - 1 ? 'border-b' : ''}`}>
            <span className="uppercase text-[#fefefe] w-full lg:w-[300px] shrink-0 text-lg lg:text-2xl" style={{ fontFamily: anton }}>{ol}</span>
            <span className="text-[#D6D6D0] text-base lg:text-xl leading-snug">{od}</span>
            <span className="ml-auto uppercase tracking-[0.14em] text-orange-400 text-sm lg:text-base" style={{ fontFamily: mono }}>proven</span>
          </div>
        ))}
      </div>
    </Shell>
  );
}

/* kept defined (not in the live order) — no-bridge */
export function GregNoBridgeSlide() {
  return (
    <Shell>
      <H main='No bridge, <span class="o">nothing to hack.</span>' sub="Eliminating the largest loss category in digital finance." />
      <Core html="Bridges hold value and relay a forgeable message. Unicity holds nothing — a locked source-chain asset becomes a self-contained token the recipient verifies directly against the source contract." />
      <div className="shrink-0 mt-6 flex justify-center"><div className="w-full max-w-[1340px]"><Dia k="nobridge" max="40vh" /></div></div>
    </Shell>
  );
}

/* ════════ 11 · ATOMIC SWAP ════════ */
export function GregSwapSlide() {
  return (
    <Shell>
      <H main='Settlement with <span class="o">no intermediary.</span>' sub="Trustless atomic swaps between self-contained bearer assets." />
      <Core html='The usual fix is a timed lock — and the clock becomes the attack surface, where one side stalls and walks. <b style="white-space:nowrap">Predicate Swaps</b> remove the clock: both sides commit independently, and the swap forms for both or for neither. Off-chain, at machine speed — <b>no mempool, no MEV</b>.' />
      <div className="shrink-0 mt-6 flex justify-center"><div className="w-full max-w-[1340px]"><Dia k="swap" max="48vh" /></div></div>
    </Shell>
  );
}

/* ════════ 12 · X402 ════════ */
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
      <H main='Twelve steps become <span class="o">five.</span>' sub="Eliminating the network friction that operators spend billions trying to solve." />
      <Core html="x402 moves payment over HTTP — then routes it back through a facilitator and a public chain. Unicity puts the authorization and the proof inside the token. <b>The message is the payment.</b> Twelve steps become five — the friction operators like Square spend billions to solve, gone." />
      <div className="shrink-0 flex flex-col lg:flex-row gap-5 lg:gap-7 mt-5 lg:items-stretch">
        <div className="flex-1 rounded-lg border border-[#2c2c2a] bg-[#101010] p-4 lg:p-5">
          <div className="flex justify-between items-baseline uppercase tracking-wide text-[#9E9E96] text-base lg:text-lg" style={{ fontFamily: anton }}><span>Traditional x402</span><span className="text-[#fefefe]">12 steps</span></div>
          {x402old.map(([i, t, gone]) => (
            <div key={i as string} className={`flex gap-3 py-1 text-sm lg:text-base border-t border-white/5 first:border-t-0 ${gone ? 'text-[#5a5a55] line-through' : 'text-[#D6D6D0]'}`}><span className="text-[#9E9E96] w-4 shrink-0 no-underline">{i}</span>{t}</div>
          ))}
        </div>
        <div className="flex-1 rounded-lg p-4 lg:p-5" style={{ border: '1px solid rgba(255,137,4,0.4)', background: 'linear-gradient(180deg, rgba(255,137,4,0.06), transparent)' }}>
          <div className="flex justify-between items-baseline uppercase tracking-wide text-orange-400 text-base lg:text-lg" style={{ fontFamily: anton }}><span>Unicity x402</span><span>5 steps</span></div>
          {x402new.map(([i, t]) => (
            <div key={i} className="flex gap-3 py-1 text-sm lg:text-base border-t border-white/5 first:border-t-0 text-[#D6D6D0]"><span className="text-[#9E9E96] w-4 shrink-0">{i}</span>{t}</div>
          ))}
          <div className="mt-3 uppercase tracking-wide text-orange-400 text-lg lg:text-2xl" style={{ fontFamily: anton }}>7 steps eliminated</div>
          <div className="text-[#D6D6D0] text-sm lg:text-lg mt-1.5">No facilitator. No shared ledger. No block wait.</div>
        </div>
      </div>
    </Shell>
  );
}

/* ════════ 13 · MARKET LAYER ════════ */
export function GregMarketSlide() {
  return (
    <Shell>
      <H main='A market with <span class="o">no venue.</span>' sub="CEX speed, DEX custody, with native privacy and compliance." />
      <Core html="Every venue forces a trade. A CEX gives you speed and takes custody. A DEX gives you custody and takes privacy. Unicity gives you <b>all four — speed, custody, privacy, compliance</b> — with <b>no venue at all</b>." />
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

/* ════════ 14 · THE EXPANDED VISION — AGENTIC CORPORATION ════════ */
export function GregDACSlide() {
  return (
    <Shell>
      <H main='A company run <span class="o">by agents.</span>' sub="Agents are the new smart contracts — verifiable logic running on the asset itself." />
      <Core html="Unicity built a <b>weather-based parametric insurer</b> with no company behind it — capital, underwriting, and cession all execute as agents transacting in Unicity tokens. Settlement is only the entry point. <b>The same protocol runs the whole firm.</b>" />
      <div className="shrink-0 mt-4 flex justify-center"><div className="w-full max-w-[1340px]"><Dia k="dac" max="50vh" /></div></div>
    </Shell>
  );
}

/* ════════ 15 · TEAM (kept defined; live team slide is WhoWeAreSlide) ════════ */
const team = [
  ['The team', "Founders built Guardtime's <b>KSI</b> — deployed with the <b>Estonian Government, Lockheed Martin, Boeing and NATO</b>. In production since 2012, eIDAS-grade. That lineage sustained <b>300,000 tx/sec</b> in Eesti Pank's 2021 test (heritage, not a live Unicity figure)."],
  ['The proof', 'Three mathematical papers prove the <b>privacy</b> and <b>no-double-spend</b> guarantees — public on github.com/unicitynetwork. Verifiable today.'],
  ['The alignment', 'Identity, speed, and peer-to-peer settlement in one instrument — the fair-access infrastructure Hard Yaka has backed for a generation.'],
];
const lineage = [
  { name: 'NATO', file: 'nato.png', scale: 0.95 },
  { name: 'DARPA', file: 'darpa.png', scale: 1 },
  { name: 'Lockheed', file: 'lockheed.png', scale: 0.85 },
  { name: 'Verizon', file: 'verizon.svg', scale: 0.72 },
  { name: 'BIS', file: 'bis.png', scale: 0.70 },
  { name: 'Maersk', file: 'maersk.png', scale: 0.75 },
  { name: 'ESA', file: 'esa.png', scale: 0.95 },
];
export function GregTeamSlide() {
  return (
    <Shell>
      <H main='The team: <span class="o">sovereign-grade verification.</span>' sub="Shipping nation-scale cryptographic infrastructure before agentic finance had a name." />
      <div className="shrink-0 mt-6">
        <p className="text-[#9E9E96] uppercase tracking-[0.26em] text-xs lg:text-sm mb-4">Guardtime / KSI — deployed with</p>
        <div className="flex items-center gap-8 lg:gap-14">
          {lineage.map((l) => (
            <img key={l.name} src={`/logos/${l.file}`} alt={l.name} className="h-8 lg:h-11 w-auto" style={{ filter: 'brightness(0) invert(1)', opacity: 0.72, transform: `scale(${l.scale})` }} />
          ))}
        </div>
      </div>
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

/* ════════ 16 · THE ASK / NEXT STEP (no money ask at this stage) ════════ */
export function GregAskSlide() {
  return (
    <Shell>
      <H main='Ship the <span class="o">first compliant dollar.</span>' sub="A regulated dollar that settles peer-to-peer the moment the Receive Predicate is satisfied." />
      <div className="shrink-0 mt-7 rounded-xl p-6 lg:p-8" style={{ border: '1px solid rgba(255,137,4,0.4)', background: 'linear-gradient(180deg, rgba(255,137,4,0.06), transparent)' }}>
        <div className="text-[#fefefe] text-2xl lg:text-3xl" style={{ fontFamily: anton }}>Co-design the Receive Predicate with a bank-regulated deposit issuer — <span className="text-orange-400">the first dollar that settles the moment its counterparty clears.</span></div>
        <p className="text-[#D6D6D0] text-base lg:text-2xl mt-4 leading-relaxed max-w-[104ch]">Machines don't transact the way we do. Unicity embeds identity, permissions, and settlement directly into the digital asset.</p>
      </div>
      <p className="shrink-0 mt-7 text-[#fefefe] font-semibold text-xl lg:text-2xl">Compliance has always lived in a walled garden. <span className="text-orange-400">Put it inside the dollar, and you own the layer the agentic economy settles on.</span></p>
    </Shell>
  );
}
