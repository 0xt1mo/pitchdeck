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
.gx .o{color:#FF6A1F}
.gx b{color:#FEFEFE;font-weight:600}
.gx .lblc{font-family:'Anton',sans-serif}
.gx .dia svg{display:block;width:100%;height:auto}
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
const ACT2 = 'Act II · Why the rails fail';
const ACT2G = 'Act II · The gap';
const ACT2S = 'Act II · The stakes';
const ACT3 = 'Act III · The answer';
const ACT4 = 'Act IV · The proof';
const ACT4A = 'Act IV · The ask';

/* ════════ ACT I — THE SHIFT ════════ */
export function GregShiftSlide() {
  return (
    <Shell>
      <H act={ACT1} main='The agents are here. <span class="o">The rails are not.</span>' sub="Most of the internet is already machines — and they have started to pay, at software speed." />
      <div className="shrink-0 flex items-start gap-10 lg:gap-14 mt-8">
        <div className="shrink-0">
          <div className="text-orange-400 leading-[0.8]" style={{ fontFamily: anton, fontSize: 'min(150px, 15vw)' }}>57.5%</div>
          <div className="text-[#9E9E96] uppercase tracking-wide text-sm lg:text-base mt-3 max-w-[30ch] leading-snug">of web requests are automated, not human — Cloudflare, 2026</div>
        </div>
        <Core className="mt-0" html="Legacy networks cannot verify an agent's authority or hold it to a budget without a centralized chokepoint. For machines to transact, the <b>proof of authority has to travel with the money</b>." />
      </div>
    </Shell>
  );
}

/* ════════ ACT II — WHY THE RAILS FAIL ════════ */
const bottleneck = [
  ['Broadcast', 'Every node hears every transaction.'],
  ['Order', 'Global agreement on the sequence of all of them.'],
  ['Validate', 'Every node re-runs every one.'],
  ['Record', 'Every node stores the whole state, forever.'],
];
export function GregBottleneckSlide() {
  return (
    <Shell>
      <H act={ACT2} main='A machine cannot wait for <span class="o">a shared ledger.</span>' sub="The 17-year-old design behind every blockchain is a permanent ceiling on scale and privacy." />
      <Core html="To add one transaction, every node must broadcast, order, validate, and record it. Machine-speed commerce requires removing the <b>shared ledger</b> entirely." />
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
      <H act={ACT2} main='Every digital dollar <span class="o">gives one up.</span>' sub="Compliance, privacy, throughput — every design so far has been forced to pick two." />
      <Two
        left={<Core className="mt-0" html="The whole payment landscape is trapped in the trade-off. Unicity is the first to hold <b>all three at once</b> — because it never places the transaction on a shared ledger to begin with." />}
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
      <H act={ACT2G} main='Fair access still lacks <span class="o">one thing.</span>' sub="Disintermediation and digital value are solved. Proving who is on the other end was never built." />
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
      <p className="shrink-0 mt-6 text-[#fefefe] font-semibold text-xl lg:text-2xl">Unicity was engineered to close <span className="text-orange-400">this final gap</span>.</p>
    </Shell>
  );
}

export function GregSidecarSlide() {
  return (
    <Shell>
      <H act={ACT2G} main='Which is why identity <span class="o">keeps failing.</span>' sub="Bolt-on verification sits beside the transaction — and a check that can be skipped gets skipped." />
      <Core html="Self-sovereign identity stalled because the credential sat beside the transaction. Identity has to live <b>inside the asset</b> — enforceable across any jurisdiction, not optional at the application layer." />
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
      <H act={ACT2S} main='The market is spending billions — <span class="o">and still missing it.</span>' sub="Everyone is optimizing the ledger or splitting the proof across layers. No one keeps it whole." />
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
      <H act={ACT3} main='So take the dollar <span class="o">off the ledger.</span>' sub="Off-chain settlement restores the properties of physical cash to a digital stablecoin." />
      <Core html="Unicity converts an on-chain stablecoin into a <b>self-contained, self-proving bearer instrument</b>. It carries its own proof and moves <b>peer-to-peer</b> over any channel — HTTP, QR, NOSTR — with zero ledger lookups." />
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
      <H act={ACT3} main='So the network attests <span class="o">one thing.</span>' sub="Each generation of consensus removed work from the network. Unicity keeps only the irreducible function." />
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
      <H act={ACT3} main='So the chain does <span class="o">one job.</span>' sub="Consensus stays minimal on-chain; everything an agent touches runs off-chain." />
      <Two
        left={<Core className="mt-0" html="Proof-of-work, BFT finality, and the ZK oracle keep the chain minimal — the SDK and the agent execution layer run beside it. <b>The chain does one job; the economy runs off it.</b>" />}
        right={<Dia k="archstack" max="56vh" />}
      />
    </Shell>
  );
}

export function GregReceiveSlide() {
  return (
    <Shell>
      <H act={ACT3} main='Now compliance needs <span class="o">no middleman.</span>' sub="Gate a transfer cryptographically, without surrendering peer-to-peer privacy." />
      <Core html="The <b>Receive Predicate</b> programs KYC, jurisdiction, and accreditation directly into the asset. If the recipient cannot satisfy it locally, the transfer mathematically fails — <b>the asset enforces its own compliance</b>." />
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
      <H act={ACT3} main='And the open ledger <span class="o">goes dark.</span>' sub="Absolute confidentiality is the prerequisite for institutional capital flows." />
      <Core html="Privacy is a founding property of the protocol, not an afterthought — mathematically proven against all three observers." />
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
      <H act={ACT3} main='No bridge, <span class="o">nothing to hack.</span>' sub="The largest loss category in digital finance — designed out, not patched." />
      <Core html="Bridges concentrate risk: they hold value and relay a forgeable message. Unicity holds nothing — a locked source-chain asset becomes a self-contained token the recipient verifies directly against the source contract." />
      <div className="shrink-0 mt-6 flex justify-center"><div className="w-full max-w-[1340px]"><Dia k="nobridge" max="40vh" /></div></div>
    </Shell>
  );
}

export function GregSwapSlide() {
  return (
    <Shell>
      <H act={ACT3} main='Settlement with <span class="o">no intermediary.</span>' sub="Trustless atomic swaps between self-contained bearer assets." />
      <Core html='The old fix is a timed lock, and the clock is the attack surface — one side stalls and walks. Unicity removes it with <b style="white-space:nowrap">Predicate Swaps</b>: both commit independently, and the swap forms for both at once or not at all.' />
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
      <H act={ACT3} main='Twelve steps <span class="o">become five.</span>' sub="The same friction operators spend billions trying to solve — gone." />
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

export function GregMarketSlide() {
  return (
    <Shell>
      <H act={ACT3} main='A market with <span class="o">no venue.</span>' sub="CEX speed and DEX custody, with native privacy and compliance — at once." />
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

export function GregDACSlide() {
  return (
    <Shell>
      <H act={ACT3} main='And a whole company <span class="o">run by agents.</span>' sub="Agents become the new smart contracts, executing verifiable logic directly on bearer assets." />
      <Core html="Unicity built a decentralized autonomous corporation for BlackRock — a parametric insurer whose capital, underwriting, and cession all run as agents. Settlement is only the entry point: <b>the same protocol runs the whole corporation</b>." />
      <div className="shrink-0 mt-5 flex justify-center"><div className="w-full max-w-[1340px]"><Dia k="dac" max="56vh" /></div></div>
    </Shell>
  );
}

/* ════════ ACT IV — PROOF & ASK ════════ */
const team = [
  ['The team', "Built Guardtime's <b>KSI</b> — the verification layer deployed with the Estonian Government, Lockheed Martin, Boeing and NATO. In production since 2012, eIDAS-grade. That lineage sustained <b>300,000 tx/sec</b> in Eesti Pank's 2021 test (heritage, not a live Unicity figure)."],
  ['The proof', 'Three mathematical papers prove the <b>privacy</b> and <b>no-double-spend</b> guarantees. Drop them into any model and they check. All public on github.com/unicitynetwork. The proof is verifiable today, not asserted.'],
  ['The alignment', 'Identity, speed, and peer-to-peer settlement, bound into one instrument — the fair-access infrastructure Hard Yaka has backed across a generation of payments companies.'],
];
export function GregTeamSlide() {
  return (
    <Shell>
      <H act={ACT4} main='We have built sovereign-grade <span class="o">before.</span>' sub="Nation-scale cryptographic infrastructure, shipping since 2012 — before agentic finance had a name." />
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
      <H act={ACT4A} main='$5M to settle the <span class="o">first compliant dollar.</span>' sub="Accelerating the deployment of compliant, peer-to-peer stablecoins." />
      <div className="shrink-0 mt-7 rounded-xl p-6 lg:p-8" style={{ border: '1px solid rgba(255,106,31,0.4)', background: 'linear-gradient(180deg, rgba(255,106,31,0.06), transparent)' }}>
        <div className="text-[#fefefe] text-2xl lg:text-4xl" style={{ fontFamily: anton }}><span className="text-orange-400">$5M Seed</span> · $25M cap / $50M token FDV · SAFE + token warrant</div>
        <p className="text-[#D6D6D0] text-base lg:text-2xl mt-4 leading-relaxed max-w-[104ch]" dangerouslySetInnerHTML={{ __html: 'We will partner with a regulated issuer to ship a compliant dollar that settles peer-to-peer the moment the Receive Predicate is satisfied — binding <b style="color:#fefefe">identity, speed, and settlement</b> into one instrument.' }} />
      </div>
      <p className="shrink-0 mt-7 text-[#fefefe] font-semibold text-xl lg:text-2xl">Institutions rely on walled gardens for compliance. <span className="text-orange-400">Unicity embeds that compliance directly into the dollar.</span></p>
    </Shell>
  );
}
