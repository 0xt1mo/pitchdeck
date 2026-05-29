import { motion } from 'framer-motion';

const mono = "'Geist Mono', monospace";
const anton = "'Anton', sans-serif";
const ORANGE = '#f97316';
const GREY = 'rgba(254,254,254,0.55)';
const GREY_DIM = 'rgba(254,254,254,0.4)';

function SpatialFlowDiagram() {
  return (
    <svg viewBox="0 0 1000 470" className="w-full h-auto max-h-[54vh]">
      <defs>
        <marker id="setArO" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto">
          <path d="M2 1L8 5L2 9" fill="none" stroke={ORANGE} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </marker>
        <radialGradient id="setGlow" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="rgba(249,115,22,0.22)" />
          <stop offset="100%" stopColor="rgba(249,115,22,0)" />
        </radialGradient>
      </defs>

      {/* glow behind recipient */}
      <circle cx="810" cy="350" r="165" fill="url(#setGlow)" />

      {/* ===== UNIQUENESS ORACLE — top center ===== */}
      <rect x="280" y="20" width="440" height="96" rx="16" fill="#0e0e12" stroke="rgba(254,254,254,0.22)" strokeWidth="1.3" />
      <text x="500" y="54" textAnchor="middle" fontFamily={mono} fontSize="16" fill={GREY} letterSpacing="3">UNIQUENESS ORACLE</text>
      <text x="500" y="86" textAnchor="middle" fontFamily={mono} fontSize="19" fill="#fefefe">certifies that no other spend exists</text>

      {/* ===== SENDER — bottom left ===== */}
      <rect x="55" y="285" width="290" height="130" rx="16" fill="#0e0e12" stroke="rgba(254,254,254,0.22)" strokeWidth="1.3" />
      <text x="200" y="323" textAnchor="middle" fontFamily={mono} fontSize="16" fill={GREY} letterSpacing="3">SENDER</text>
      <text x="200" y="361" textAnchor="middle" fontFamily={mono} fontSize="23" fill="#fefefe">holds the token</text>
      <text x="200" y="393" textAnchor="middle" fontFamily={mono} fontSize="15" fill={GREY}>signs the transaction</text>

      {/* ===== RECIPIENT — bottom right (highlight) ===== */}
      <rect x="675" y="285" width="270" height="130" rx="16" fill="rgba(249,115,22,0.08)" stroke={ORANGE} strokeWidth="2" />
      <text x="810" y="323" textAnchor="middle" fontFamily={mono} fontSize="16" fill="rgba(251,146,60,0.9)" letterSpacing="3">RECIPIENT</text>
      <text x="810" y="361" textAnchor="middle" fontFamily={mono} fontSize="23" fill={ORANGE} fontWeight="bold">verifies locally</text>
      <text x="810" y="393" textAnchor="middle" fontFamily={mono} fontSize="15" fill={GREY}>accepts the token</text>

      {/* ===== diagonal channel: claim ↑ (left) / proof ↓ (right) ===== */}
      <line x1="315" y1="283" x2="445" y2="120" stroke={ORANGE} strokeWidth="2" markerEnd="url(#setArO)" />
      <line x1="500" y1="120" x2="370" y2="283" stroke={ORANGE} strokeWidth="2" markerEnd="url(#setArO)" />
      <text x="330" y="205" textAnchor="end" fontFamily={mono} fontSize="17" fill={GREY}>claim uniqueness</text>
      <text x="490" y="205" textAnchor="start" fontFamily={mono} fontSize="17" fill={GREY}>uniqueness proof</text>

      {/* ===== horizontal send: token + tx + proof ===== */}
      <line x1="345" y1="350" x2="675" y2="350" stroke={ORANGE} strokeWidth="2.2" markerEnd="url(#setArO)" />
      <text x="510" y="330" textAnchor="middle" fontFamily={mono} fontSize="17" fill={ORANGE}>token + transaction + proof</text>
      <text x="500" y="450" textAnchor="middle" fontFamily={mono} fontSize="14" fill={GREY_DIM}>any transport — email, NOSTR, QR, direct</text>

      {/* ===== step badges ===== */}
      {[
        { n: 1, x: 380, y: 201 },
        { n: 2, x: 435, y: 201 },
        { n: 3, x: 510, y: 350 },
      ].map(({ n, x, y }) => (
        <g key={n}>
          <circle cx={x} cy={y} r="15" fill={ORANGE} />
          <text x={x} y={y + 1} textAnchor="middle" dominantBaseline="central" fontFamily={mono} fontSize="16" fontWeight="bold" fill="#0a0a0a">{n}</text>
        </g>
      ))}
    </svg>
  );
}

export function SettlementSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div
        className="fixed inset-0 z-[1] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 30% 35%, rgba(249,115,22,0.07) 0%, transparent 70%)' }}
      />
      <div className="relative z-10 h-full flex flex-col px-8 sm:px-12 lg:px-20 py-7 sm:py-9 lg:py-10 justify-center gap-5 lg:gap-6">

        {/* Header */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
            className="text-[#fefefe]/45 text-[11px] lg:text-xs tracking-[0.3em] uppercase"
            style={{ fontFamily: mono }}
          >
            Tradeoff · 01
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
            className="text-orange-400 text-[44px] sm:text-[68px] lg:text-[84px] leading-[0.9] tracking-tight"
            style={{ fontFamily: anton }}
          >
            SPEED
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 0.6 }}
            className="text-[#fefefe] text-lg sm:text-2xl lg:text-3xl leading-snug mt-2"
            style={{ fontFamily: anton }}
          >
            FAST SETTLEMENT, NO BOTTLENECKS
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.6 }}
            className="text-[#fefefe]/80 text-sm sm:text-base lg:text-xl leading-relaxed mt-3 max-w-5xl"
            style={{ fontFamily: mono }}
          >
            Transactions move directly between parties. <span className="text-orange-400">No shared validator set</span>, so every spend runs independently of every other.
          </motion.p>
        </div>

        {/* Flow diagram */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="shrink-0 flex items-center justify-center w-full max-w-6xl mx-auto"
        >
          <SpatialFlowDiagram />
        </motion.div>

      </div>
    </div>
  );
}
