import { motion } from 'framer-motion';

const mono = { fontFamily: "'Geist Mono', monospace" };
const monoS = "'Geist Mono', monospace";
const anton = { fontFamily: "'Anton', sans-serif" };

const ORANGE = '#f97316';
const ORANGE_DIM = 'rgba(249,115,22,0.55)';
const GREEN = '#5ee79a';
const GREY = 'rgba(254,254,254,0.5)';

type Node = { id: string; role: string; x: number; y: number; r: number; check?: boolean; glow?: boolean };

const nodes: Node[] = [
  { id: 'A1', role: 'research', x: 150, y: 95, r: 24 },
  { id: 'A2', role: 'trade exec', x: 300, y: 180, r: 27 },
  { id: 'A4', role: 'data oracle', x: 430, y: 130, r: 32, check: true },
  { id: 'A5', role: 'liquidity router', x: 700, y: 115, r: 27 },
  { id: 'A9', role: 'portfolio', x: 885, y: 95, r: 24 },
  { id: 'A7', role: 'computation', x: 815, y: 270, r: 32, check: true, glow: true },
  { id: 'A6', role: 'settlement', x: 560, y: 320, r: 30, check: true },
  { id: 'A3', role: 'market maker', x: 270, y: 315, r: 27 },
  { id: 'A8', role: 'analytics', x: 130, y: 320, r: 24 },
];

const solidEdges: { x1: number; y1: number; x2: number; y2: number; dot?: [number, number] }[] = [
  { x1: 329, y1: 169, x2: 393, y2: 144 },
  { x1: 404, y1: 160, x2: 293, y2: 288, dot: [348, 224] },
  { x1: 453, y1: 163, x2: 539, y2: 289, dot: [496, 226] },
  { x1: 792, y1: 239, x2: 721, y2: 143, dot: [756, 191] },
];

const dashedPaths = [
  'M172,98 Q290,55 402,122',
  'M462,126 Q580,98 674,118',
  'M532,332 Q400,378 297,330',
  'M727,110 Q800,92 863,98',
];

const specks: [number, number][] = [[425, 70], [640, 188], [545, 388], [235, 135], [762, 332], [120, 200]];

function AgentMesh() {
  return (
    <svg viewBox="0 0 1000 440" className="w-full h-auto max-h-[42vh]">
      <defs>
        <marker id="agArrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto">
          <path d="M2 1L8 5L2 9" fill="none" stroke={ORANGE} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </marker>
        <radialGradient id="proofGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(94,231,154,0.55)" />
          <stop offset="100%" stopColor="rgba(94,231,154,0)" />
        </radialGradient>
        <radialGradient id="a7Glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(94,231,154,0.32)" />
          <stop offset="100%" stopColor="rgba(94,231,154,0)" />
        </radialGradient>
      </defs>

      {/* background specks */}
      {specks.map(([x, y], i) => (
        <circle key={`s${i}`} cx={x} cy={y} r="2" fill="rgba(254,254,254,0.18)" />
      ))}

      {/* dashed predicate-lock edges */}
      {dashedPaths.map((d, i) => (
        <path key={`d${i}`} d={d} fill="none" stroke={ORANGE_DIM} strokeWidth="1.6" strokeDasharray="2 6" strokeLinecap="round" />
      ))}

      {/* solid settled edges */}
      {solidEdges.map((e, i) => (
        <line key={`e${i}`} x1={e.x1} y1={e.y1} x2={e.x2} y2={e.y2} stroke={ORANGE} strokeWidth="2" markerEnd="url(#agArrow)" />
      ))}

      {/* proof-of-execution dots */}
      {solidEdges.filter((e) => e.dot).map((e, i) => {
        const [x, y] = e.dot!;
        return (
          <g key={`p${i}`}>
            <circle cx={x} cy={y} r="11" fill="url(#proofGlow)" />
            <circle cx={x} cy={y} r="3.5" fill={GREEN} />
          </g>
        );
      })}

      {/* A7 glow (just submitted) */}
      <circle cx="815" cy="270" r="74" fill="url(#a7Glow)" />

      {/* nodes */}
      {nodes.map((n) => (
        <g key={n.id}>
          <circle cx={n.x} cy={n.y} r={n.r} fill="#140f0a" stroke={ORANGE} strokeWidth="1.6" />
          <text x={n.x} y={n.y} textAnchor="middle" dominantBaseline="central" fontFamily={monoS} fontWeight="bold" fontSize={Math.round(n.r * 0.62)} fill={ORANGE}>{n.id}</text>
          <text x={n.x} y={n.y + n.r + 18} textAnchor="middle" fontFamily={monoS} fontSize="13" fill={GREY}>
            {n.role}{n.check ? '  ✓' : ''}
          </text>
        </g>
      ))}
    </svg>
  );
}

function LegendItem({ children, mark }: { children: React.ReactNode; mark: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="shrink-0">{mark}</span>
      <span className="text-[#fefefe]/55 text-xs sm:text-sm lg:text-base leading-tight" style={mono}>{children}</span>
    </div>
  );
}

export function AgenticDeFiSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div
        className="fixed inset-0 z-[1] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 55% at 60% 60%, rgba(249,115,22,0.06) 0%, transparent 70%)' }}
      />
      <div className="relative z-10 h-full flex flex-col px-8 sm:px-12 lg:px-20 py-7 sm:py-9 lg:py-10 justify-center gap-5 lg:gap-6">

        {/* Header */}
        <div className="shrink-0">
          <motion.h1
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
            className="text-[32px] sm:text-[48px] lg:text-[58px] leading-[0.95] tracking-tight"
            style={anton}
          >
            <span className="text-[#fefefe]">AGENTIC DEFI.</span>{' '}
            <span className="text-orange-400">AN ECONOMY OF MACHINES.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.6 }}
            className="text-[#fefefe]/65 text-sm sm:text-base lg:text-xl leading-relaxed mt-3 max-w-5xl"
            style={mono}
          >
            Agents hold tokens, accept predicate-locked payments, and prove execution to release them.{' '}
            <span className="text-orange-400 font-semibold">No escrow, no broker, no censor, no human in the loop.</span>
          </motion.p>
        </div>

        {/* Agent mesh */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.6 }}
          className="shrink-0 rounded-2xl border border-white/[0.08] w-full max-w-6xl mx-auto px-4 py-3"
          style={{ background: 'rgba(255,255,255,0.012)' }}
        >
          <AgentMesh />
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9, duration: 0.6 }}
          className="shrink-0 flex flex-wrap items-center justify-center gap-x-8 lg:gap-x-12 gap-y-2"
        >
          <LegendItem mark={
            <svg width="36" height="10"><line x1="2" y1="5" x2="34" y2="5" stroke={ORANGE_DIM} strokeWidth="2" strokeDasharray="2 5" strokeLinecap="round" /></svg>
          }>token locked by predicate</LegendItem>
          <LegendItem mark={
            <svg width="36" height="10"><line x1="2" y1="5" x2="34" y2="5" stroke={ORANGE} strokeWidth="2.4" strokeLinecap="round" /></svg>
          }>predicate released · settled</LegendItem>
          <LegendItem mark={
            <svg width="18" height="18"><circle cx="9" cy="9" r="8" fill="rgba(94,231,154,0.25)" /><circle cx="9" cy="9" r="3.5" fill={GREEN} /></svg>
          }>proof of execution submitted</LegendItem>
        </motion.div>

      </div>
    </div>
  );
}
