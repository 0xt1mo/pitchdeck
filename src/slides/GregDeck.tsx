import { DIAGRAMS } from '../gregDiagrams';

/* ============================================================
   OUR canonical HardYaka deck, reframed PROBLEM-FORWARD (70/30) in
   the May-30 Tether frame. Act eyebrows signal the storyteller arc;
   each headline/lead drives from the problem, the mechanism lands as
   the punchline. Canonical bodies + our own diagrams preserved.
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
    <div className="gx fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <style>{SCOPE}</style>
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)', backgroundSize: '64px 64px' }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 58% 50% at 50% 48%, rgba(255,137,4,0.07), transparent 70%)' }} />
      <div className="relative z-10 h-full flex flex-col justify-center px-12 sm:px-16 lg:px-24 py-14 lg:py-20">
        {children}
      </div>
    </div>
  );
}

function H({ act, main, sub }: { act: string; main: string; sub: string }) {
  return (
    <div className="shrink-0">
      <p className="text-orange-400 text-[11px] sm:text-xs lg:text-sm tracking-[0.3em] uppercase mb-3" style={{ fontFamily: mono }}>{act}</p>
      <h1 className="text-[#fefefe] uppercase text-[30px] sm:text-[40px] lg:text-[52px] leading-[1.06] tracking-tight" style={{ fontFamily: anton }} dangerouslySetInnerHTML={{ __html: main }} />
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
const ctCls = 'text-orange-400 uppercase tracking-wide text-base lg:text-xl lblc';
const ckCls = 'text-[#D6D6D0] text-sm lg:text-lg mt-2 leading-snug';

const ACT1 = 'Act I · The shift';
const ACT2 = 'Act II · Why the design fails';
const ACT2G = 'Act II · The gap';
const ACT2S = 'Act II · The stakes';
const ACT3 = 'Act III · The answer';
const ACT4 = 'Act IV · The lineage';
const ACT4A = 'Act IV · The next step';

/* ════════ ACT I — THE SHIFT ════════ */
export function GregShiftSlide() {
  return (
    <Shell>
      <H act={ACT1} main='The agents are here. <span class="o">Nothing vouches for them.</span>' sub="They pay each other faster than anything built for people can stop to ask who they are — or whether they should." />
      <div className="shrink-0 flex items-start gap-10 lg:gap-14 mt-8">
        <div className="shrink-0">
          <div className="text-orange-400 leading-[0.8]" style={{ fontFamily: anton, fontSize: 'min(150px, 15vw)' }}>57.5%</div>
          <div className="text-[#9E9E96] uppercase tracking-wide text-sm lg:text-base mt-3 max-w-[30ch] leading-snug">of all web requests are now automated — Cloudflare, 2026</div>
        </div>
        <Core className="mt-0" html="Legacy networks cannot verify an agent's authority or hold it to a budget without a centralized chokepoint. For machines to transact, the <b>proof of authority has to travel with the money</b>." />
      </div>
    </Shell>
  );
}

/* ════════ ACT II — WHY THE DESIGN FAILS ════════ */
const bottleneck = [
  ['Broadcast', 'Every node hears every transaction.'],
  ['Order', 'Global agreement on the sequence of all of them.'],
  ['Validate', 'Every node re-runs every one.'],
  ['Record', 'Every node stores the whole state, forever.'],
];
export function GregBottleneckSlide() {
  return (
    <Shell>
      <H act={ACT2} main='A machine cannot wait for <span class="o">a shared ledger.</span>' sub="Before one payment clears, <b>every node on earth</b> must hear it, agree where it falls in line, re-run it, and store it forever — the agent waits on a crowd of strangers reaching consensus." />
      <Core html="Four jobs, repeated on every node, for every transaction — broadcast, order, validate, record. That is the toll the shared ledger charges on every payment, and no machine at machine speed will pay it. The answer is to remove the <b>shared ledger</b> entirely." />
      <div className="shrink-0 flex gap-4 mt-7">
        {bottleneck.map(([t, d]) => (
          <div key={t} className={cellCls}><div className={ctCls}>{t}</div><div className={ckCls}>{d}</div></div>
        ))}
      </div>
    </Shell>
  );
}

export function GregTrilemmaSlide() {
  return (
    <Shell>
      <H act={ACT2} main='Every digital dollar <span class="o">trades one away.</span>' sub="Verified, private, instantly settled — move a dollar in the open and the design forces you to <b>surrender one of the three</b>." />
      <Two
        left={<Core className="mt-0" html="The shared ledger makes that trade for you. Record every transfer in one place, and you get speed, or privacy, or proof of who is on the other end — <b>never all three at once</b>. Every dollar moving today already gave one up." />}
        right={<Dia k="trilemma" max="46vh" />}
      />
    </Shell>
  );
}

const gap = [
  ['01', 'Disintermediation', 'Open infrastructure bypassed the legacy financial middleman.', 'solved', false],
  ['02', 'Digital value', 'Stablecoins now settle tens of trillions of dollars a year.', 'solved', false],
  ['03', 'Cryptographic identity', "No blockchain can natively verify a recipient's legal or operational standing before a transaction executes.", 'unsolved', true],
];
export function GregGapSlide() {
  return (
    <Shell>
      <H act={ACT2G} main='Two are solved. <span class="o">One never was.</span>' sub="Open infrastructure removed the middleman. Stablecoins moved the value. But <b>proving who is on the other end</b> — the question nothing could stop to ask — was never built." />
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
      <p className="shrink-0 mt-6 text-[#fefefe] font-semibold text-xl lg:text-2xl">Unicity was engineered to close <span className="text-orange-400">this last gap</span> — counterparty verification, native to the asset.</p>
    </Shell>
  );
}

export function GregSidecarSlide() {
  return (
    <Shell>
      <H act={ACT2G} main='Which is why identity <span class="o">keeps failing.</span>' sub="Bolt the check onto the side of the transaction, and the money just <b>flows past it</b> — a step that can be skipped gets skipped." />
      <Core html="Every prior fix put identity <b>beside the asset</b> — a credential at the application layer, optional by construction, gone the moment the transfer routes around it. The proof has to live <b>inside the asset</b>, enforced in any jurisdiction, with nothing left to skip." />
      <div className="h-px w-16 bg-orange-500/80 mt-7" />
    </Shell>
  );
}

/* the stakes — incumbents moved up to close the problem act */
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
const lbl = (v: string) => ({ v, cls: 'text-[#D6D6D0] uppercase lblc' });

export function GregIncumbentsSlide() {
  return (
    <Shell>
      <H act={ACT2S} main='The market is spending billions — <span class="o">and still missing it.</span>' sub="Each one optimizes the ledger, or routes around it by splitting the proof across layers. They treat the symptom — the ledger itself is the flaw." />
      <Core html="That spend is the validation: the problem is real and unsolved. <b>Unicity keeps authorization, settlement, and the audit trail whole, inside the asset.</b>" />
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

/* ════════ ACT III — THE ANSWER ════════ */
export function GregBearerSlide() {
  return (
    <Shell>
      <H act={ACT3} main='So take the dollar <span class="o">off the ledger.</span>' sub="Make it carry its own proof — a digital dollar that settles like <b>cash in hand</b>, no ledger to ask permission." />
      <Core html="Unicity turns an on-chain stablecoin into a <b>self-proving bearer instrument</b>. The proof of who holds it, and what it may do, travels inside the asset — so it moves <b>peer-to-peer</b> over any channel, HTTP, QR, NOSTR, with zero ledger lookups." />
      <div className="shrink-0 mt-6 flex justify-center"><div className="w-full max-w-[1340px]"><Dia k="xform" max="40vh" /></div></div>
    </Shell>
  );
}

const timeline = [
  ['2009 · BITCOIN', 'Correctness + ordering', 'Every node certifies every transaction and agrees the global order.', false],
  ['2023 · SUI · FASTPAY', 'Correctness only', 'Global ordering dropped for assets that share no state.', false],
  ['2026 · UNICITY', 'Uniqueness only', 'The network attests one thing. Correctness moves to the edge.', true],
];
export function GregOracleSlide() {
  return (
    <Shell>
      <H act={ACT3} main='So the network attests <span class="o">one thing.</span>' sub="Watch three generations throw work overboard. <b>Bitcoin</b> made every node re-check every transaction. <b>FastPay</b> dropped global ordering. <b>Unicity</b> keeps one question — <b>has this token been spent?</b>" />
      <Two
        left={<Core className="mt-0" html="The <b>Uniqueness Oracle</b> answers one question: has this token been spent? It never re-executes transactions or reads payloads, so throughput scales horizontally — <b>30,000 tx/sec per shard, by design</b>." />}
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

export function GregArchitectureSlide() {
  return (
    <Shell>
      <H act={ACT3} main='So the chain does <span class="o">one job.</span>' sub="Consensus secures the record and nothing more — <b>nothing an agent touches waits on it.</b>" />
      <Two
        left={<Core className="mt-0" html="Proof-of-work, BFT finality, and the ZK oracle keep the chain to a single task — anchoring the record. The SDK and the agent execution layer run beside it, never through it, so a payment, a swap, or a compliance check never queues behind a block. <b>The chain does one job — the economy runs off it.</b>" />}
        right={<Dia k="archstack" max="56vh" />}
      />
    </Shell>
  );
}

export function GregReceiveSlide() {
  return (
    <Shell>
      <H act={ACT3} main='Now compliance needs <span class="o">no middleman.</span>' sub="The asset itself asks <b>whether they should</b> — and refuses the wrong recipient, with no venue in the loop." />
      <Core html="The <b>Receive Predicate</b> writes KYC, jurisdiction, and accreditation into the asset itself. Present it to a recipient who cannot satisfy the rule and the transfer will not resolve — it simply fails to land. <b>The dollar carries its own compliance, and enforces it on arrival.</b>" />
      <div className="shrink-0 mt-6 flex justify-center"><div className="w-full max-w-[1340px]"><Dia k="compliance" max="40vh" /></div></div>
    </Shell>
  );
}

const observers = [
  ['The network', 'Sees only opaque commitments. It cannot read amounts, parties, or balances, nor link one transfer to the next.'],
  ['The sender', 'Cannot watch where or when the recipient later spends what was sent.'],
  ['Anyone with the address', 'Sees one published key; every sender derives a fresh, indistinguishable transaction key.'],
];
export function GregPrivacySlide() {
  return (
    <Shell>
      <H act={ACT3} main='And the open ledger <span class="o">goes dark.</span>' sub="Three observers watch every public chain — the network, the sender, the address. <b>None of them can see in.</b>" />
      <Core html="Privacy is a founding property of the protocol, closed against all three observers. Institutions will not move capital where every balance can be read — this is the floor that lets them move at all." />
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

export function GregNoBridgeSlide() {
  return (
    <Shell>
      <H act={ACT3} main='No bridge, <span class="o">nothing to hack.</span>' sub="Every big crypto theft drains the same place — the bridge that <b>holds the pooled value</b>. So we built without one: <b>designed out at the root.</b>" />
      <Core html="Bridges concentrate risk: they hold value and relay a forgeable message. Unicity holds nothing — a locked source-chain asset becomes a self-contained token the recipient verifies directly against the source contract." />
      <div className="shrink-0 mt-6 flex justify-center"><div className="w-full max-w-[1340px]"><Dia k="nobridge" max="40vh" /></div></div>
    </Shell>
  );
}

export function GregSwapSlide() {
  return (
    <Shell>
      <H act={ACT3} main='So they settle with <span class="o">no clock to attack.</span>' sub="Atomic swaps between self-contained bearer assets — no timed lock, no intermediary." />
      <Core html='Every other swap leans on a timed lock, and the clock is the attack surface — one side stalls, waits it out, and walks with both legs. <b style="white-space:nowrap">Predicate Swaps</b> remove the clock: each side commits independently, and the swap forms for both <b>at once or not at all</b>.' />
      <div className="shrink-0 mt-6 flex justify-center"><div className="w-full max-w-[1340px]"><Dia k="swap" max="40vh" /></div></div>
    </Shell>
  );
}

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
      <H act={ACT3} main='Twelve steps <span class="o">become five.</span>' sub="Watch the handshake collapse — <b>seven steps drop out</b>, and the friction operators spend billions on is simply gone." />
      <Core html="The seven dead steps are the split itself — facilitator, shared ledger, block wait, the proof handed layer to layer. Unicity puts authorization and proof inside the token, so the handshake <b>shrinks from twelve to five</b> and nothing leaves the asset." />
      <div className="shrink-0 flex gap-7 mt-5 items-stretch">
        <div className="flex-1 rounded-lg border border-[#2c2c2a] bg-[#101010] p-4 lg:p-5">
          <div className="flex justify-between items-baseline uppercase tracking-wide text-[#9E9E96] text-base lg:text-lg" style={{ fontFamily: anton }}><span>Traditional x402</span><span className="text-[#fefefe]">12 steps</span></div>
          {x402old.map(([i, t, gone]) => (
            <div key={i as string} className={`flex gap-3 py-1.5 text-sm lg:text-lg border-t border-white/5 first:border-t-0 ${gone ? 'text-[#5a5a55] line-through' : 'text-[#D6D6D0]'}`}><span className="text-[#9E9E96] w-4 shrink-0 no-underline">{i}</span>{t}</div>
          ))}
        </div>
        <div className="flex-1 rounded-lg p-4 lg:p-5" style={{ border: '1px solid rgba(255,137,4,0.4)', background: 'linear-gradient(180deg, rgba(255,137,4,0.06), transparent)' }}>
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

export function GregMarketSlide() {
  return (
    <Shell>
      <H act={ACT3} main='A market with <span class="o">no venue.</span>' sub="Every other column gives one up. <b>Read the last one straight down</b> — nothing does." />
      <Core html="The whole market still has to <b>pick two</b> — speed or custody, privacy or compliance — because a venue sits in the middle. Take the venue out and the trade-off has nowhere to live: <b>one dollar that holds all four at once</b>." />
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

export function GregDACSlide() {
  return (
    <Shell>
      <H act={ACT3} main='And a whole company <span class="o">run by agents.</span>' sub="No desk, no operator — the agents <b>are</b> the company, and the same protocol carrying the dollar carries them." />
      <Core html="Unicity built a decentralized autonomous corporation for BlackRock — a parametric insurer whose capital, underwriting, and cession all run as agents. Settlement is only the entry point: <b>the same protocol runs the whole corporation</b>." />
      <div className="shrink-0 mt-5 flex justify-center"><div className="w-full max-w-[1340px]"><Dia k="dac" max="56vh" /></div></div>
    </Shell>
  );
}

/* ════════ ACT IV — PROOF & ASK ════════ */
const team = [
  ['The team', "Founders built Guardtime's <b>KSI</b> — deployed with the <b>Estonian Government, Lockheed Martin, Boeing and NATO</b>. In production since 2012, eIDAS-grade; that lineage sustained <b>300,000 tx/sec</b> in Eesti Pank's 2021 test (heritage, not a live Unicity figure)."],
  ['The proof', 'Three mathematical papers prove the <b>privacy</b> and <b>no-double-spend</b> guarantees — public on github.com/unicitynetwork. Verifiable today, not asserted.'],
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
      <H act={ACT4} main='Built by <span class="o">infrastructure veterans.</span>' sub="The cryptography behind Unicity has run at nation scale since 2012." />
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

export function GregAskSlide() {
  return (
    <Shell>
      <H act={ACT4A} main='Ship the <span class="o">first compliant dollar.</span>' sub="A regulated dollar that settles peer-to-peer the moment the Receive Predicate is satisfied." />
      <div className="shrink-0 mt-7 rounded-xl p-6 lg:p-8" style={{ border: '1px solid rgba(255,137,4,0.4)', background: 'linear-gradient(180deg, rgba(255,137,4,0.06), transparent)' }}>
        <div className="text-[#fefefe] text-2xl lg:text-3xl" style={{ fontFamily: anton }}>Partner with a regulated issuer to bind <span className="text-orange-400">identity, speed, and settlement</span> into one instrument.</div>
        <p className="text-[#D6D6D0] text-base lg:text-2xl mt-4 leading-relaxed max-w-[104ch]">The first asset where the proof of who you are — and what you may do — travels with the money itself.</p>
      </div>
      <p className="shrink-0 mt-7 text-[#fefefe] font-semibold text-xl lg:text-2xl">Compliance has always lived in a walled garden. <span className="text-orange-400">Put it inside the dollar, and you own the layer the agentic economy settles on.</span></p>
    </Shell>
  );
}
