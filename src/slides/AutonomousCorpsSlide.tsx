import { motion } from 'framer-motion';

const mono = { fontFamily: "'Geist Mono', monospace" };
const monoS = "'Geist Mono', monospace";
const anton = { fontFamily: "'Anton', sans-serif" };

const ORANGE = '#f97316';
const ORANGE_SOFT = 'rgba(249,115,22,0.5)';
const NODE_LABEL = '#fb923c';
const GREY = 'rgba(254,254,254,0.5)';
const FLOW = 'rgba(251,146,60,0.85)';

type Ring = { label: string; cx: number; cy: number; r: number };
type Agent = { id: string; role: string; x: number; y: number };

const rings: Ring[] = [
  { label: 'CAPITAL', cx: 235, cy: 300, r: 185 },
  { label: 'UNDERWRITING', cx: 640, cy: 300, r: 195 },
  { label: 'CESSION', cx: 1045, cy: 300, r: 185 },
];

const agents: Agent[] = [
  // Capital
  { id: 'C1', role: 'treasury', x: 180, y: 190 },
  { id: 'C2', role: 'deposits', x: 285, y: 180 },
  { id: 'C3', role: 'LP tokens', x: 145, y: 290 },
  { id: 'C4', role: 'accounting', x: 290, y: 305 },
  { id: 'C5', role: 'payout', x: 170, y: 400 },
  { id: 'C6', role: 'governance', x: 280, y: 420 },
  // Underwriting
  { id: 'U1', role: 'risk model', x: 530, y: 190 },
  { id: 'U2', role: 'pricing', x: 630, y: 165 },
  { id: 'U3', role: 'reserves', x: 735, y: 215 },
  { id: 'U4', role: 'policy issuance', x: 545, y: 310 },
  { id: 'U5', role: 'trigger oracle', x: 680, y: 325 },
  { id: 'U6', role: 'claims', x: 520, y: 420 },
  { id: 'U7', role: 'audit', x: 630, y: 450 },
  { id: 'U8', role: 'solvency', x: 735, y: 415 },
  // Cession
  { id: 'D1', role: 'intake', x: 930, y: 190 },
  { id: 'D2', role: 'cedent KYC', x: 1035, y: 170 },
  { id: 'D3', role: 'contract', x: 955, y: 305 },
  { id: 'D4', role: 'premium', x: 1065, y: 325 },
  { id: 'D5', role: 'loss adj.', x: 920, y: 415 },
  { id: 'D6', role: 'payout', x: 1030, y: 430 },
];

function Flow({ x1, x2, y, dots }: { x1: number; x2: number; y: number; dots: number[] }) {
  return (
    <g>
      <line x1={x1} y1={y} x2={x2} y2={y} stroke={ORANGE_SOFT} strokeWidth="2" strokeLinecap="round" />
      {dots.map((dx, i) => (
        <g key={i}>
          <circle cx={dx} cy={y} r="6" fill="rgba(249,115,22,0.2)" />
          <circle cx={dx} cy={y} r="2.6" fill={ORANGE} />
        </g>
      ))}
    </g>
  );
}

function CorpDiagram() {
  return (
    <svg viewBox="0 0 1280 540" className="w-full h-auto max-h-[46vh]">
      <defs>
        <filter id="ringBlur" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="7" />
        </filter>
      </defs>

      {/* Rings + section labels */}
      {rings.map((r) => (
        <g key={r.label}>
          {/* halo */}
          <circle cx={r.cx} cy={r.cy} r={r.r} fill="none" stroke={ORANGE} strokeWidth="4" opacity="0.45" filter="url(#ringBlur)" />
          {/* crisp ring */}
          <circle cx={r.cx} cy={r.cy} r={r.r} fill="rgba(249,115,22,0.012)" stroke={ORANGE_SOFT} strokeWidth="1.6" />
          {/* section label */}
          <text x={r.cx} y={r.cy - r.r - 28} textAnchor="middle" fontFamily={monoS} fontSize="16" fill={GREY} letterSpacing="4">{r.label}</text>
          <line x1={r.cx - 42} y1={r.cy - r.r - 18} x2={r.cx + 42} y2={r.cy - r.r - 18} stroke="rgba(254,254,254,0.18)" strokeWidth="1" />
        </g>
      ))}

      {/* Inter-ring flows */}
      <Flow x1={408} x2={472} y={300} dots={[420, 440, 460]} />
      <text x={440} y={278} textAnchor="middle" fontFamily={monoS} fontSize="13" fill={FLOW}>capacity →</text>

      <Flow x1={822} x2={878} y={285} dots={[832, 850, 868]} />
      <text x={850} y={262} textAnchor="middle" fontFamily={monoS} fontSize="13" fill={FLOW}>premiums →</text>
      <Flow x1={822} x2={878} y={320} dots={[832, 850, 868]} />
      <text x={850} y={344} textAnchor="middle" fontFamily={monoS} fontSize="13" fill={FLOW}>← claims</text>

      {/* Agent nodes */}
      {agents.map((a) => (
        <g key={a.id}>
          <circle cx={a.x} cy={a.y} r="19" fill="#140f0a" stroke={ORANGE} strokeWidth="1.4" />
          <text x={a.x} y={a.y} textAnchor="middle" dominantBaseline="central" fontFamily={monoS} fontWeight="bold" fontSize="14" fill={NODE_LABEL}>{a.id}</text>
          <text x={a.x} y={a.y + 33} textAnchor="middle" fontFamily={monoS} fontSize="11.5" fill={GREY}>{a.role}</text>
        </g>
      ))}
    </svg>
  );
}

export function AutonomousCorpsSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div
        className="fixed inset-0 z-[1] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 55% at 50% 62%, rgba(249,115,22,0.06) 0%, transparent 70%)' }}
      />
      <div className="relative z-10 h-full flex flex-col px-8 sm:px-12 lg:px-20 py-7 sm:py-9 lg:py-10 justify-center gap-4 lg:gap-5">

        {/* Header */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
            className="text-orange-400 text-[11px] lg:text-sm tracking-[0.35em] uppercase mb-2"
            style={mono}
          >
            Building on Unicity
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
            className="text-[30px] sm:text-[44px] lg:text-[54px] leading-[0.95] tracking-tight"
            style={anton}
          >
            <span className="text-[#fefefe]">DECENTRALIZED</span>{' '}
            <span className="text-orange-400">AUTONOMOUS CORPORATIONS.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.6 }}
            className="text-[#fefefe]/65 text-sm sm:text-base lg:text-xl leading-relaxed mt-3 max-w-5xl"
            style={mono}
          >
            A whole company — capital, underwriting, distribution — run by a swarm of agents.{' '}
            <span className="text-orange-400 font-semibold">Example: autonomous reinsurance.</span>
          </motion.p>
        </div>

        {/* Corporation diagram */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.6 }}
          className="shrink-0 rounded-2xl border border-white/[0.08] w-full max-w-7xl mx-auto px-4 py-3"
          style={{ background: 'rgba(255,255,255,0.012)' }}
        >
          <CorpDiagram />
        </motion.div>

      </div>
    </div>
  );
}
