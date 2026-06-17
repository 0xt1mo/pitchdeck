import { motion } from 'framer-motion';

const mono = { fontFamily: "'Geist Mono', monospace" };
const anton = { fontFamily: "'Anton', sans-serif" };

const ORANGE = '#f97316';
const ORANGE_DIM = 'rgba(249,115,22,0.5)';

type Node = { x: number; y: number; r: number; name: string; user?: boolean };

const N: Record<string, Node> = {
  userL:     { x: 92,  y: 215, r: 46, name: 'USER AGENT', user: true },
  clob:      { x: 235, y: 80,  r: 48, name: 'CLOB AGENT' },
  amm:       { x: 500, y: 60,  r: 48, name: 'AMM AGENT' },
  bank:      { x: 765, y: 80,  r: 48, name: 'BANK AGENT · DAC' },
  lending:   { x: 320, y: 378, r: 48, name: 'LENDING AGENT · DAC' },
  insurance: { x: 680, y: 378, r: 48, name: 'INSURANCE AGENT · DAC' },
  userR:     { x: 908, y: 215, r: 46, name: 'USER AGENT', user: true },
};

const BOARD = { x: 500, y: 215, hw: 124, hh: 46 };

// DACs ↔ board (read intents); users ↔ board (post intents);
// CLOB & AMM are direct trading venues — users transact with them, not the board
const EDGES: [string, string][] = [
  ['bank', 'board'], ['lending', 'board'], ['insurance', 'board'],
  ['userL', 'board'], ['userR', 'board'],
  ['userL', 'clob'], ['userL', 'amm'], ['userL', 'lending'],
  ['userR', 'amm'], ['userR', 'bank'], ['userR', 'insurance'],
];

function center(id: string) {
  return id === 'board' ? { x: BOARD.x, y: BOARD.y } : { x: N[id].x, y: N[id].y };
}

function boundary(id: string, toward: string, pad = 5) {
  const a = center(id), b = center(toward);
  const dx = b.x - a.x, dy = b.y - a.y;
  const L = Math.hypot(dx, dy) || 1;
  const ux = dx / L, uy = dy / L;
  if (id === 'board') {
    const t = Math.min(BOARD.hw / (Math.abs(ux) || 1e-6), BOARD.hh / (Math.abs(uy) || 1e-6));
    return { x: a.x + ux * t, y: a.y + uy * t };
  }
  return { x: a.x + ux * (N[id].r + pad), y: a.y + uy * (N[id].r + pad) };
}

function Glyph({ icon, cx, cy }: { icon: string; cx: number; cy: number }) {
  const s = { stroke: ORANGE, strokeWidth: 2, fill: 'none' as const, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  switch (icon) {
    case 'user': // user agent — person
      return (
        <g {...s} strokeWidth={2.4}>
          <circle cx={cx} cy={cy - 9} r="7.5" />
          <path d={`M${cx - 13},${cy + 17} a13,12 0 0 1 26,0`} />
        </g>
      );
    case 'clob': // order book — bid / ask ladder
      return (
        <g {...s} strokeWidth={2.4}>
          <line x1={cx - 14} y1={cy - 10} x2={cx - 3} y2={cy - 10} />
          <line x1={cx - 14} y1={cy - 3} x2={cx - 7} y2={cy - 3} />
          <line x1={cx - 14} y1={cy + 4} x2={cx - 10} y2={cy + 4} />
          <line x1={cx + 3} y1={cy - 7} x2={cx + 14} y2={cy - 7} />
          <line x1={cx + 7} y1={cy} x2={cx + 14} y2={cy} />
          <line x1={cx + 9} y1={cy + 7} x2={cx + 14} y2={cy + 7} />
        </g>
      );
    case 'amm': // liquidity pool — x·y=k bonding curve
      return (
        <g fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d={`M${cx - 14},${cy - 13} L${cx - 14},${cy + 13} L${cx + 14},${cy + 13}`} stroke="rgba(249,115,22,0.4)" strokeWidth={1.6} />
          <path d={`M${cx - 11},${cy + 12} C ${cx - 3},${cy - 4} ${cx + 5},${cy - 12} ${cx + 13},${cy - 12}`} stroke={ORANGE} strokeWidth={2.6} />
        </g>
      );
    case 'bank': // bank façade
      return (
        <g {...s}>
          <path d={`M${cx - 15},${cy - 4} L${cx},${cy - 15} L${cx + 15},${cy - 4}`} />
          <line x1={cx - 10} y1={cy - 1} x2={cx - 10} y2={cy + 11} />
          <line x1={cx} y1={cy - 1} x2={cx} y2={cy + 11} />
          <line x1={cx + 10} y1={cy - 1} x2={cx + 10} y2={cy + 11} />
          <line x1={cx - 15} y1={cy + 13} x2={cx + 15} y2={cy + 13} strokeWidth={2.6} />
        </g>
      );
    case 'lending': // stacked coins
      return (
        <g stroke={ORANGE} strokeWidth={2} fill="rgba(249,115,22,0.14)" strokeLinejoin="round">
          <ellipse cx={cx} cy={cy + 8} rx="13" ry="4.6" />
          <ellipse cx={cx} cy={cy + 1} rx="13" ry="4.6" />
          <ellipse cx={cx} cy={cy - 6} rx="13" ry="4.6" />
        </g>
      );
    case 'insurance': // shield + check
      return (
        <g {...s}>
          <path d={`M${cx},${cy - 15} L${cx + 13},${cy - 9} L${cx + 13},${cy + 1} Q ${cx + 13},${cy + 11} ${cx},${cy + 16} Q ${cx - 13},${cy + 11} ${cx - 13},${cy + 1} L${cx - 13},${cy - 9} Z`} />
          <path d={`M${cx - 6},${cy} L${cx - 1},${cy + 5} L${cx + 7},${cy - 6}`} />
        </g>
      );
    default:
      return null;
  }
}

function Hub() {
  return (
    <svg viewBox="0 0 1000 460" className="w-full h-auto max-h-[50vh]">
      <defs>
        <radialGradient id="hbBoardGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(249,115,22,0.3)" />
          <stop offset="100%" stopColor="rgba(249,115,22,0)" />
        </radialGradient>
      </defs>

      {/* board glow */}
      <ellipse cx={BOARD.x} cy={BOARD.y} rx="220" ry="150" fill="url(#hbBoardGlow)" />

      {/* edges */}
      {EDGES.map(([a, b], i) => {
        const p1 = boundary(a, b);
        const p2 = boundary(b, a);
        return (
          <g key={`e${i}`}>
            <motion.line
              x1={p1.x} y1={p1.y} x2={p2.x} y2={p2.y}
              stroke={ORANGE_DIM} strokeWidth="1.7"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 0.7 + i * 0.06, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            />
            <motion.circle
              r="4.5" fill={ORANGE}
              initial={{ cx: p1.x, cy: p1.y, opacity: 0 }}
              animate={{ cx: [p1.x, p2.x], cy: [p1.y, p2.y], opacity: [0, 1, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 1.3 + i * 0.18 }}
              style={{ filter: 'drop-shadow(0 0 4px rgba(249,115,22,0.9))' }}
            />
          </g>
        );
      })}

      {/* central bulletin board */}
      <motion.g
        style={{ transformOrigin: `${BOARD.x}px ${BOARD.y}px` }}
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <rect x={BOARD.x - BOARD.hw} y={BOARD.y - BOARD.hh} width={BOARD.hw * 2} height={BOARD.hh * 2} rx={BOARD.hh}
          fill="rgba(249,115,22,0.08)" stroke={ORANGE} strokeWidth="2" />
        <text x={BOARD.x} y={BOARD.y + 10} textAnchor="middle" fontFamily="Anton, sans-serif" fontSize="30" fill={ORANGE} letterSpacing="0.03em">BULLETIN BOARD</text>
      </motion.g>

      {/* nodes */}
      {Object.entries(N).map(([id, n], i) => (
        <motion.g
          key={id}
          style={{ transformOrigin: `${n.x}px ${n.y}px` }}
          initial={{ opacity: 0, scale: 0.3 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.45 + i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <circle
            cx={n.x} cy={n.y} r={n.r}
            fill={n.user ? '#0d0d0d' : '#140f0a'}
            stroke={ORANGE} strokeWidth={n.user ? 1.8 : 2}
            strokeDasharray={n.user ? '4 4' : undefined}
          />
          <Glyph icon={n.user ? 'user' : id} cx={n.x} cy={n.y - (n.user ? 2 : 0)} />
          <text x={n.x} y={n.y + n.r + 22} textAnchor="middle" fontFamily="Anton, sans-serif" fontSize="17" fill="#fefefe" letterSpacing="0.02em">{n.name}</text>
        </motion.g>
      ))}
    </svg>
  );
}

export function AgenticDACSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div
        className="fixed inset-0 z-[1] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 55% at 50% 58%, rgba(249,115,22,0.06) 0%, transparent 70%)' }}
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
            className="text-[#fefefe]/70 text-sm sm:text-base lg:text-xl leading-relaxed mt-3 max-w-5xl"
            style={mono}
          >
            <span className="text-orange-400 font-semibold">Frictionless. Massive throughput. Private. Compliant.</span><br />
            <span className="text-[#fefefe] font-semibold">A financial system built for machines.</span>
          </motion.p>
        </div>

        {/* Hub */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }}
          className="shrink-0 w-full max-w-6xl mx-auto"
        >
          <Hub />
        </motion.div>

      </div>
    </div>
  );
}
