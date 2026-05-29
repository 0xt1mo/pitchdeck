import { motion } from 'framer-motion';

const mono = { fontFamily: "'Geist Mono', monospace" };
const anton = { fontFamily: "'Anton', sans-serif" };

type AxisKey = 'speed' | 'throughput' | 'privacy';

const config: Record<AxisKey, {
  n: string; title: string; win: string; points: string[]; cost: string;
}> = {
  speed: {
    n: '01',
    title: 'SPEED',
    win: 'Settlement is instant.',
    points: [
      'The recipient verifies locally, in milliseconds',
      'No global consensus to wait on',
      '~1-second finality on the proof layer',
    ],
    cost: 'You trade global ordering for local verification.',
  },
  throughput: {
    n: '02',
    title: 'THROUGHPUT',
    win: 'Unlimited parallelism.',
    points: [
      'No shared validator set — every transaction is independent',
      '10,000+ proofs/sec per shard on a single CPU',
      'ZK aggregation scales it further',
    ],
    cost: 'Clients hold and verify their own state — more work at the edge.',
  },
  privacy: {
    n: '03',
    title: 'PRIVACY',
    win: 'Private by default.',
    points: [
      'The network only ever sees an opaque commitment',
      'Never amounts, parties, or balances',
      'State is shared only between the parties who need it',
    ],
    cost: 'You custody your own tokens and proofs.',
  },
};

function AxisSlide({ axis }: { axis: AxisKey }) {
  const c = config[axis];
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div
        className="fixed inset-0 z-[1] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 30% 40%, rgba(249,115,22,0.07) 0%, transparent 70%)' }}
      />
      <div className="relative z-10 h-full flex flex-col px-8 sm:px-12 lg:px-20 py-10 sm:py-14 lg:py-16 justify-center gap-7 lg:gap-9">

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="shrink-0 text-[#fefefe]/40 text-[11px] lg:text-xs tracking-[0.3em] uppercase"
          style={mono}
        >
          Tradeoff · {c.n}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="shrink-0 text-orange-400 text-[56px] sm:text-[88px] lg:text-[120px] leading-[0.9] tracking-tight"
          style={anton}
        >
          {c.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.6 }}
          className="shrink-0 text-[#fefefe] text-2xl sm:text-3xl lg:text-4xl leading-none"
          style={anton}
        >
          {c.win}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="shrink-0 flex flex-col gap-2.5 lg:gap-3"
        >
          {c.points.map((pt) => (
            <p key={pt} className="text-[#fefefe]/75 text-base sm:text-lg lg:text-xl leading-snug" style={mono}>
              <span className="text-orange-400">→</span> {pt}
            </p>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="shrink-0 text-[#fefefe]/45 text-sm lg:text-lg leading-snug pt-4 mt-1"
          style={{ ...mono, borderTop: '1px solid rgba(249,115,22,0.3)' }}
        >
          <span className="text-orange-400/80 tracking-[0.2em] uppercase text-xs lg:text-sm">The Cost&nbsp;&nbsp;</span>
          {c.cost}
        </motion.p>

      </div>
    </div>
  );
}

export function SpeedSlide() { return <AxisSlide axis="speed" />; }

const observers = [
  {
    n: '01',
    name: 'THE NETWORK',
    sub: 'the Unicity service itself',
    claim: 'Sees only opaque commitments — never amounts, parties, or balances.',
    explain: 'A request is a hash of a state and a hash of transaction data. The nonce that chains one state to the next is hidden by a perfectly hiding commitment — so the service cannot link two consecutive transactions of the same token.',
  },
  {
    n: '02',
    name: 'THE SENDER',
    sub: 'the person who paid you',
    claim: 'Cannot watch when you later spend what they sent.',
    explain: "Once a token reaches you, the previous owner has no way to compute the registry entry your next spend will create. The next state derives from a secret only you hold. Send it, then they're out.",
  },
  {
    n: '03',
    name: 'ANYONE WHO KNOWS YOUR ADDRESS',
    sub: 'counterparties, partners, ex-employers',
    claim: 'Cannot link two payments to the same recipient — even when both went to you.',
    explain: 'You publish one persistent public key. Every sender derives a fresh, indistinguishable transaction key against it. No correlation, no UX overhead, no one-time-address management.',
  },
];

export function PrivacySlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col px-8 sm:px-12 lg:px-20 py-7 sm:py-9 lg:py-10 justify-center gap-5 lg:gap-6">

        {/* Header */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
            className="text-[#fefefe]/45 text-[11px] lg:text-xs tracking-[0.3em] uppercase"
            style={mono}
          >
            Tradeoff · 03
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
            className="text-orange-400 text-[44px] sm:text-[68px] lg:text-[84px] leading-[0.9] tracking-tight"
            style={anton}
          >
            PRIVACY
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25, duration: 0.6 }}
            className="text-[#fefefe] text-lg sm:text-2xl lg:text-3xl leading-snug mt-2"
            style={anton}
          >
            THREE OBSERVERS. NONE CAN LEARN ANYTHING.
          </motion.p>
        </div>

        {/* Observers */}
        <motion.div
          initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }}
          className="shrink-0 flex flex-col gap-4 lg:gap-5"
        >
          {observers.map((o) => (
            <div key={o.n} className="grid grid-cols-[1fr_2.2fr] gap-5 lg:gap-8 border-l-2 border-orange-500 pl-5 lg:pl-6">
              <div>
                <p className="text-orange-400/70 text-[10px] lg:text-xs tracking-[0.25em] uppercase" style={mono}>Observer {o.n}</p>
                <h3 className="text-orange-400 text-lg lg:text-2xl leading-none mt-1.5" style={anton}>{o.name}</h3>
                <p className="text-[#fefefe]/50 text-[11px] lg:text-sm mt-1.5" style={mono}>{o.sub}</p>
              </div>
              <div>
                <p className="text-[#fefefe] text-sm lg:text-lg font-semibold leading-snug" style={mono}>{o.claim}</p>
                <p className="text-[#fefefe]/55 text-[11px] lg:text-sm leading-snug mt-1.5" style={mono}>{o.explain}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9, duration: 0.6 }}
          className="shrink-0 text-xs lg:text-sm tracking-[0.2em] uppercase pt-3"
          style={{ ...mono, borderTop: '1px solid rgba(249,115,22,0.3)' }}
        >
          <span className="text-orange-400">The Cost&nbsp;&nbsp;</span>
          <span className="text-[#fefefe]/45">You custody your own tokens and proofs · lose them, lose the asset</span>
        </motion.p>

      </div>
    </div>
  );
}

const monoF = "'Geist Mono', monospace";
const antonF = "'Anton', sans-serif";

function Stat({ big, unit, label, desc }: { big: string; unit: string; label: string; desc: string }) {
  return (
    <div className="border-l-2 border-orange-500 pl-5 lg:pl-6">
      <div className="flex items-baseline gap-2.5">
        <span className="text-orange-400 text-5xl lg:text-7xl leading-none" style={anton}>{big}</span>
        <span className="text-[#fefefe]/70 text-lg lg:text-2xl" style={mono}>{unit}</span>
      </div>
      <p className="text-orange-400/70 text-[10px] lg:text-xs tracking-[0.2em] uppercase mt-2" style={mono}>{label}</p>
      <p className="text-[#fefefe]/60 text-xs lg:text-sm leading-snug mt-1.5" style={mono}>{desc}</p>
    </div>
  );
}

function ScaleDiagram() {
  const ORANGE = '#f97316';
  const GREY = 'rgba(254,254,254,0.5)';
  const shards: [string, number, number][] = [
    ['SHARD 1', 8, 150],
    ['SHARD 2', 152, 210],
    ['SHARD N', 296, 270],
  ];
  return (
    <svg viewBox="0 0 420 168" className="w-full h-auto">
      <defs>
        <marker id="thAr" viewBox="0 0 10 10" refX="7" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M2 1L8 5L2 9" fill="none" stroke={ORANGE} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </marker>
      </defs>
      {/* consensus */}
      <rect x="110" y="8" width="200" height="44" rx="8" fill="rgba(249,115,22,0.1)" stroke={ORANGE} strokeWidth="1.3" />
      <text x="210" y="27" textAnchor="middle" fontFamily={antonF} fontSize="13" fill={ORANGE}>CONSENSUS LAYER</text>
      <text x="210" y="42" textAnchor="middle" fontFamily={monoF} fontSize="9" fill={GREY}>certifies one root per round</text>
      <text x="118" y="74" fontFamily={monoF} fontSize="9" fill={GREY}>ZK proof</text>
      {/* shards */}
      {shards.map(([name, x, ax]) => (
        <g key={name}>
          <line x1={x + 58} y1="100" x2={ax} y2="54" stroke={ORANGE} strokeWidth="1.5" markerEnd="url(#thAr)" />
          <rect x={x} y="100" width="116" height="48" rx="7" fill="rgba(255,255,255,0.04)" stroke="rgba(254,254,254,0.2)" strokeWidth="1" />
          <text x={x + 58} y="120" textAnchor="middle" fontFamily={antonF} fontSize="12" fill="#fefefe">{name}</text>
          <text x={x + 58} y="134" textAnchor="middle" fontFamily={monoF} fontSize="8.5" fill={GREY}>30K tx/sec</text>
          <text x={x + 58} y="145" textAnchor="middle" fontFamily={monoF} fontSize="8.5" fill={GREY}>1 CPU</text>
        </g>
      ))}
      <text x="210" y="164" textAnchor="middle" fontFamily={monoF} fontSize="9" fill={GREY}>…add another shard, add another 30K tx/sec</text>
    </svg>
  );
}

export function ThroughputSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col px-8 sm:px-12 lg:px-20 py-7 sm:py-9 lg:py-10 justify-center gap-5 lg:gap-7">

        {/* Header */}
        <div className="shrink-0">
          <motion.h1
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
            className="text-orange-400 text-[44px] sm:text-[68px] lg:text-[88px] leading-[0.9] tracking-tight"
            style={anton}
          >
            THROUGHPUT
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.25, duration: 0.6 }}
            className="text-[#fefefe]/85 text-base sm:text-lg lg:text-2xl leading-snug mt-2 max-w-5xl"
            style={mono}
          >
            The chain never validates transactions. Cost per tx collapses; throughput scales horizontally.
          </motion.p>
        </div>

        {/* Body */}
        <div className="shrink-0 grid grid-cols-[1fr_1fr] gap-7 lg:gap-12 items-stretch">

          {/* Left — stats */}
          <motion.div
            initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-col justify-between gap-5 lg:gap-7"
          >
            <Stat big="30,000" unit="tx/sec" label="Per Shard" desc="on a single consumer-class CPU · Plonky3 AIR + Poseidon2" />
            <Stat big="<1" unit="microcent / tx" label="Sub-cent · Sub-millicent · Sub-microcent" desc="the chain certifies one consistency proof per round — not each transaction" />
            <Stat big="∞" unit="shards" label="Horizontal Scale" desc="each shard adds another 30K tx/sec · proofs stay succinct" />
          </motion.div>

          {/* Right — how it scales */}
          <motion.div
            initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.5, duration: 0.5 }}
            className="rounded-2xl border border-[#fefefe]/12 bg-[#fefefe]/[0.02] p-5 lg:p-6 flex flex-col gap-3.5"
          >
            <p className="text-orange-400/80 text-[10px] lg:text-xs tracking-[0.3em] uppercase" style={mono}>How It Scales</p>
            <ScaleDiagram />
            <div className="border-t border-[#fefefe]/12 pt-3.5 space-y-2.5">
              <p className="text-[#fefefe]/70 text-xs lg:text-sm leading-snug" style={mono}>
                <span className="text-orange-400 font-semibold">Why it's cheap. </span>
                The chain never re-executes a transaction — it certifies one prior-state-preservation proof per round: a single SNARK, ~45 ms to verify.
              </p>
              <p className="text-[#fefefe]/70 text-xs lg:text-sm leading-snug" style={mono}>
                <span className="text-orange-400 font-semibold">Why it scales. </span>
                Each shard is independent. No global ordering, no shared validator set, no cross-shard consensus needed.
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
