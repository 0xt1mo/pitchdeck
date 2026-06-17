import { motion } from 'framer-motion';
import splashVideoUrl from '/kling_20260226_VIDEO_Take_Image_1650_0.mp4';

const mono = "'Geist Mono', monospace";
const anton = "'Anton', sans-serif";
const ORANGE = '#f97316';
const GREY = '#b8a896';
const GREY_DIM = '#7d6d5c';

function UnicityArchitectureDiagram() {
  return (
    <svg viewBox="0 0 1000 410" className="w-full h-auto max-h-[58vh]">
      <defs>
        <marker id="arO" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto">
          <path d="M2 1L8 5L2 9" fill="none" stroke={ORANGE} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </marker>
        <marker id="arG" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto">
          <path d="M2 1L8 5L2 9" fill="none" stroke={GREY_DIM} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </marker>
        <radialGradient id="oracleGlow" cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="rgba(249,115,22,0.2)" />
          <stop offset="100%" stopColor="rgba(249,115,22,0)" />
        </radialGradient>
      </defs>

      {/* glow behind blockchain */}
      <circle cx="500" cy="70" r="135" fill="url(#oracleGlow)" />

      {/* ===== BLOCKCHAIN (centered top, dominant) ===== */}
      <rect x="270" y="10" width="460" height="126" rx="20" fill="rgba(249,115,22,0.08)" stroke={ORANGE} strokeWidth="2.2" />
      <text x="500" y="68" textAnchor="middle" fontFamily={anton} fontSize="36" fill={ORANGE} letterSpacing="0.04em">UNIQUENESS ORACLE</text>
      <text x="500" y="110" textAnchor="middle" fontFamily={mono} fontSize="17" fill="#e4ded6" fontStyle="italic">"has this token been spent?" — yes / no</text>

      {/* ===== commit ↑ / proof ↓ channel (compact) ===== */}
      <line x1="448" y1="244" x2="448" y2="136" stroke={ORANGE} strokeWidth="2.2" markerEnd="url(#arO)" />
      <line x1="552" y1="136" x2="552" y2="244" stroke={GREY_DIM} strokeWidth="2" markerEnd="url(#arG)" />
      <text x="438" y="178" textAnchor="end" fontFamily={mono} fontSize="19" fill={GREY}>commit</text>
      <text x="438" y="201" textAnchor="end" fontFamily={mono} fontSize="15" fill={GREY_DIM}>0x9f… (opaque)</text>
      <text x="562" y="178" textAnchor="start" fontFamily={mono} fontSize="19" fill={GREY}>proof</text>
      <text x="562" y="201" textAnchor="start" fontFamily={mono} fontSize="15" fill={GREY_DIM}>spent? y / n</text>

      {/* ===== A → TOKEN+PROOF → B (the real transfer) ===== */}
      {/* A */}
      <circle cx="120" cy="296" r="54" fill="rgba(249,115,22,0.08)" stroke={ORANGE} strokeWidth="3" />
      <text x="120" y="296" textAnchor="middle" dominantBaseline="central" fontFamily={anton} fontSize="44" fill={ORANGE}>A</text>
      {/* B */}
      <circle cx="880" cy="296" r="54" fill="rgba(249,115,22,0.08)" stroke={ORANGE} strokeWidth="3" />
      <text x="880" y="296" textAnchor="middle" dominantBaseline="central" fontFamily={anton} fontSize="44" fill={ORANGE}>B</text>
      <text x="880" y="376" textAnchor="middle" fontFamily={mono} fontSize="18" fill={ORANGE}>✓ verifies on arrival</text>
      <text x="880" y="399" textAnchor="middle" fontFamily={mono} fontSize="14" fill={GREY_DIM}>no chain to call</text>

      {/* transfer arrows */}
      <line x1="180" y1="296" x2="386" y2="296" stroke={ORANGE} strokeWidth="2.6" markerEnd="url(#arO)" />
      <line x1="614" y1="296" x2="822" y2="296" stroke={ORANGE} strokeWidth="2.6" markerEnd="url(#arO)" />

      {/* token in middle */}
      <rect x="390" y="255" width="220" height="82" rx="14" fill="#0f0a06" stroke={ORANGE} strokeWidth="2.5" />
      <line x1="500" y1="267" x2="500" y2="325" stroke={ORANGE} strokeWidth="1.2" strokeDasharray="4 4" opacity="0.6" />
      <text x="446" y="296" textAnchor="middle" dominantBaseline="central" fontFamily={anton} fontSize="21" fill="#ffffff">TOKEN</text>
      <text x="556" y="296" textAnchor="middle" dominantBaseline="central" fontFamily={mono} fontSize="18" fill={ORANGE}>+ PROOF</text>

    </svg>
  );
}

export function AgentsSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
        <video className="w-full h-full object-cover opacity-[0.12]" autoPlay muted loop playsInline src={splashVideoUrl} />
        <div className="absolute inset-0 bg-[#060606]/70" />
      </div>

      <div className="relative z-10 h-full flex flex-col px-8 sm:px-12 lg:px-20 py-8 sm:py-10 lg:py-12 justify-center gap-4 lg:gap-6">

        {/* Header */}
        <div className="shrink-0">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[30px] sm:text-[44px] lg:text-[58px] leading-[0.95] tracking-tight uppercase"
            style={{ fontFamily: anton }}
          >
            <span className="text-[#fefefe]">UNICITY GENERATES</span>{' '}
            <span className="text-orange-400">PROOFS OF UNIQUENESS (SINGLE SPEND)</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="text-[#fefefe]/80 text-base sm:text-lg lg:text-2xl leading-snug mt-3 max-w-5xl"
            style={{ fontFamily: mono }}
          >
            Our invention is a <span className="text-orange-400">Uniqueness Oracle</span> — decentralized infrastructure that <span className="text-orange-400">proves the absence of double-spend without seeing transactions</span>.
          </motion.p>
        </div>

        {/* Architecture diagram */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6 }}
          className="shrink-0 flex items-center justify-center w-full max-w-7xl mx-auto"
        >
          <UnicityArchitectureDiagram />
        </motion.div>

      </div>
    </div>
  );
}
