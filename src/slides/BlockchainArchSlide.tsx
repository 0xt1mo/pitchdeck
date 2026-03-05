import { motion } from 'framer-motion';
import splashVideoUrl from '/kling_20260226_VIDEO_Take_Image_1650_0.mp4';
import unicityLogoUrl from '/UnicityLogo.svg';

function StackDiagram() {
  const W = 520;
  const H = 440;
  const cx = W / 2;
  const bw = 340;
  const bh = 48;
  const font = "'Geist Mono', monospace";
  const fontTitle = "'Anton', sans-serif";

  const y0 = 20;
  const y1 = y0 + bh + 12;
  const y2 = y1 + bh + 12;
  const yDiv = y2 + bh + 28;
  const y3 = yDiv + 28;
  const yA = y3 + bh + 45;

  const agents = [
    { x: cx - 80, y: yA + 12 },
    { x: cx - 15, y: yA - 8 },
    { x: cx + 50, y: yA + 18 },
    { x: cx + 110, y: yA - 4 },
    { x: cx - 45, y: yA + 48 },
    { x: cx + 25, y: yA + 55 },
    { x: cx + 85, y: yA + 44 },
  ];
  const links = [
    [0, 1], [1, 2], [2, 3], [1, 4], [4, 5], [5, 6], [2, 6], [0, 4], [3, 6], [1, 5],
  ];

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto">
      <defs>
        <filter id="sdkGlow">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
        <linearGradient id="conG" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="rgba(99,102,241,0.12)" />
          <stop offset="100%" stopColor="rgba(99,102,241,0.04)" />
        </linearGradient>
        <linearGradient id="sdkG" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="rgba(249,115,22,0.15)" />
          <stop offset="100%" stopColor="rgba(249,115,22,0.05)" />
        </linearGradient>
      </defs>

      {/* Consensus bracket — covers PoW + BFT only */}
      <path
        d={`M${cx - bw / 2 - 16},${y0 - 4} Q${cx - bw / 2 - 26},${y0 - 4} ${cx - bw / 2 - 26},${y0 + 8}
            L${cx - bw / 2 - 26},${(y0 + y1 + bh) / 2 - 7}
            Q${cx - bw / 2 - 26},${(y0 + y1 + bh) / 2} ${cx - bw / 2 - 34},${(y0 + y1 + bh) / 2}
            Q${cx - bw / 2 - 26},${(y0 + y1 + bh) / 2} ${cx - bw / 2 - 26},${(y0 + y1 + bh) / 2 + 7}
            L${cx - bw / 2 - 26},${y1 + bh - 8}
            Q${cx - bw / 2 - 26},${y1 + bh + 4} ${cx - bw / 2 - 16},${y1 + bh + 4}`}
        fill="none" stroke="rgba(99,102,241,0.35)" strokeWidth={1.5}
      />
      <text x={cx - bw / 2 - 46} y={(y0 + y1 + bh) / 2}
        textAnchor="middle" fill="#6366f1" fontSize="10" fontFamily={fontTitle}
        letterSpacing="0.1em"
        transform={`rotate(-90, ${cx - bw / 2 - 46}, ${(y0 + y1 + bh) / 2})`}>
        CONSENSUS
      </text>

      {/* Proof of Work */}
      <rect x={cx - bw / 2} y={y0} width={bw} height={bh} rx={8}
        fill="url(#conG)" stroke="rgba(99,102,241,0.35)" strokeWidth={1.5} />
      <text x={cx} y={y0 + bh / 2 + 5} textAnchor="middle" fill="#c7d2fe"
        fontSize="14" fontFamily={fontTitle} letterSpacing="0.06em">PROOF OF WORK</text>

      <line x1={cx} y1={y0 + bh} x2={cx} y2={y1} stroke="rgba(99,102,241,0.2)" strokeWidth={1.5} />
      <polygon points={`${cx - 3},${y1 - 3} ${cx + 3},${y1 - 3} ${cx},${y1}`} fill="rgba(99,102,241,0.25)" />

      {/* BFT Finality */}
      <rect x={cx - bw / 2} y={y1} width={bw} height={bh} rx={8}
        fill="url(#conG)" stroke="rgba(99,102,241,0.35)" strokeWidth={1.5} />
      <text x={cx} y={y1 + bh / 2 + 5} textAnchor="middle" fill="#c7d2fe"
        fontSize="14" fontFamily={fontTitle} letterSpacing="0.06em">BFT FINALITY</text>

      <line x1={cx} y1={y1 + bh} x2={cx} y2={y2} stroke="rgba(99,102,241,0.2)" strokeWidth={1.5} />
      <polygon points={`${cx - 3},${y2 - 3} ${cx + 3},${y2 - 3} ${cx},${y2}`} fill="rgba(99,102,241,0.25)" />

      {/* Uniqueness Oracle */}
      <rect x={cx - bw / 2} y={y2} width={bw} height={bh} rx={8}
        fill="url(#conG)" stroke="rgba(99,102,241,0.45)" strokeWidth={1.5} />
      <text x={cx} y={y2 + bh / 2 + 5} textAnchor="middle" fill="#c7d2fe"
        fontSize="14" fontFamily={fontTitle} letterSpacing="0.06em">UNIQUENESS ORACLE</text>

      {/* Divider */}
      <line x1={cx - bw / 2} y1={yDiv} x2={cx + bw / 2} y2={yDiv}
        stroke="rgba(254,254,254,0.2)" strokeWidth={1} strokeDasharray="6 3" />
      <text x={cx - bw / 2 - 8} y={yDiv - 7} textAnchor="end" fill="rgba(254,254,254,0.4)"
        fontSize="9" fontFamily={font}>On-Chain</text>
      <text x={cx - bw / 2 - 8} y={yDiv + 13} textAnchor="end" fill="rgba(254,254,254,0.4)"
        fontSize="9" fontFamily={font}>Off-Chain</text>

      {/* Double arrow */}
      <line x1={cx} y1={y2 + bh + 2} x2={cx} y2={y3 - 2}
        stroke="rgba(249,115,22,0.3)" strokeWidth={1.5} />
      <polygon points={`${cx - 3},${y2 + bh + 5} ${cx + 3},${y2 + bh + 5} ${cx},${y2 + bh + 1}`}
        fill="rgba(249,115,22,0.3)" />
      <polygon points={`${cx - 3},${y3 - 5} ${cx + 3},${y3 - 5} ${cx},${y3 - 1}`}
        fill="rgba(249,115,22,0.3)" />

      {/* Token Operations SDK */}
      <g filter="url(#sdkGlow)">
        <rect x={cx - bw / 2 - 3} y={y3 - 3} width={bw + 6} height={bh + 6} rx={10}
          fill="rgba(249,115,22,0.04)" stroke="rgba(249,115,22,0.12)" strokeWidth={1} />
        <rect x={cx - bw / 2} y={y3} width={bw} height={bh} rx={8}
          fill="url(#sdkG)" stroke="rgba(249,115,22,0.5)" strokeWidth={2} />
      </g>
      <text x={cx} y={y3 + bh / 2 + 5} textAnchor="middle" fill="#f97316"
        fontSize="14" fontWeight="bold" fontFamily={fontTitle} letterSpacing="0.08em">
        TOKEN OPERATIONS SDK
      </text>

      {/* Arrows to agents */}
      {[-40, 0, 40].map((off, i) => (
        <g key={`sa${i}`}>
          <line x1={cx + off} y1={y3 + bh + 2} x2={cx + off} y2={yA - 20}
            stroke="rgba(6,182,212,0.15)" strokeWidth={1} />
          <polygon points={`${cx + off - 3},${yA - 22} ${cx + off + 3},${yA - 22} ${cx + off},${yA - 18}`}
            fill="rgba(6,182,212,0.2)" />
          <polygon points={`${cx + off - 3},${y3 + bh + 5} ${cx + off + 3},${y3 + bh + 5} ${cx + off},${y3 + bh + 1}`}
            fill="rgba(6,182,212,0.2)" />
        </g>
      ))}

      {/* Agent mesh */}
      {links.map(([a, b], i) => (
        <line key={`al${i}`} x1={agents[a].x} y1={agents[a].y} x2={agents[b].x} y2={agents[b].y}
          stroke="rgba(6,182,212,0.12)" strokeWidth={1} />
      ))}
      {links.slice(0, 5).map(([a, b], i) => (
        <circle key={`ap${i}`} r="2.5" fill="#06b6d4" opacity="0">
          <animateMotion dur={`${2.5 + i * 0.4}s`} repeatCount="indefinite" begin={`${i * 0.6}s`}
            path={`M${agents[a].x},${agents[a].y} L${agents[b].x},${agents[b].y}`} />
          <animate attributeName="opacity" values="0;0.7;0"
            dur={`${2.5 + i * 0.4}s`} repeatCount="indefinite" begin={`${i * 0.6}s`} />
        </circle>
      ))}
      {agents.map((ag, i) => (
        <g key={`ag${i}`}>
          <circle cx={ag.x} cy={ag.y} r={14} fill="rgba(6,182,212,0.06)" />
          <circle cx={ag.x} cy={ag.y} r={9} fill="rgba(6,6,6,0.8)"
            stroke="rgba(6,182,212,0.4)" strokeWidth={1} />
          <path d={`M${ag.x - 3},${ag.y - 1.5} A4,4 0 1,1 ${ag.x + 1.5},${ag.y + 3}`}
            fill="none" stroke="rgba(6,182,212,0.7)" strokeWidth={1} strokeLinecap="round" />
          <polygon points={`${ag.x + 1.5},${ag.y + 1} ${ag.x + 3.5},${ag.y + 3.5} ${ag.x + 0.5},${ag.y + 3.5}`}
            fill="rgba(6,182,212,0.7)" />
          <path d={`M${ag.x + 3},${ag.y + 1.5} A4,4 0 1,1 ${ag.x - 1.5},${ag.y - 3}`}
            fill="none" stroke="rgba(6,182,212,0.7)" strokeWidth={1} strokeLinecap="round" />
          <polygon points={`${ag.x - 1.5},${ag.y - 1} ${ag.x - 3.5},${ag.y - 3.5} ${ag.x - 0.5},${ag.y - 3.5}`}
            fill="rgba(6,182,212,0.7)" />
        </g>
      ))}
      <text x={cx} y={yA + 80} textAnchor="middle" fill="#06b6d4"
        fontSize="12" fontFamily={fontTitle} letterSpacing="0.08em">AGENT EXECUTION LAYER</text>
    </svg>
  );
}

const keyPoints = [
  {
    title: 'Proof of Work',
    color: '#6366f1',
    text: 'Custom built using RandomX. 2-hour block times, no transactions on-chain. The chain exists to allow cash-like properties of off-chain tokens.',
  },
  {
    title: 'BFT Finality',
    color: '#6366f1',
    text: 'Custom built chained Hotstuff consensus. Provides fast 1 second finality.',
  },
  {
    title: 'Uniqueness Oracle',
    color: '#6366f1',
    text: 'Custom built using ZK + hash-chain proofs. Pevents double-spending of off-chain assets.',
  },
  {
    title: 'Token Operations SDK',
    color: '#f97316',
    text: 'Custom built client libraries in JavaScript, Java, and Rust. The thin bridge between off-chain agents and on-chain proofs.',
  },
  {
    title: 'Agent Execution Layer',
    color: '#06b6d4',
    text: 'Fully off-chain. Transport (I2P, TCP/IP), messaging (NOSTR), storage, runtime, and verifiable execution — all peer-to-peer.',
  },
];

export function BlockchainArchSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-y-auto">
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
        <video className="w-full h-full object-cover opacity-15" autoPlay muted loop playsInline src={splashVideoUrl} />
        <div className="absolute inset-0 bg-[#060606]/50" />
      </div>

      <div className="relative z-10 h-full flex flex-col px-6 sm:px-10 lg:px-16 py-6 sm:py-8">

        {/* Header */}
        <div className="shrink-0">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-orange-400 text-[10px] sm:text-xs tracking-[0.4em] uppercase"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            Appendix — Blockchain
          </motion.p>
          <motion.h1 initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[28px] sm:text-[40px] lg:text-[52px] leading-[0.95] tracking-tight mt-1"
            style={{ fontFamily: "'Anton', sans-serif" }}>
            UNICITY{' '}
            <span className="text-orange-400">PROTOCOL STACK</span>
          </motion.h1>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-[2px] w-32 sm:w-48 bg-gradient-to-r from-orange-500 to-transparent origin-left mt-2" />
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-3 text-[#fefefe]/70 text-xs sm:text-sm leading-relaxed max-w-3xl"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            A purpose-built stack where <span className="text-orange-400">consensus stays minimal</span> and agents execute off-chain — connected to the ledger through a thin Token Operations SDK.
          </motion.p>
        </div>

        {/* Two-column: diagram left, descriptions right */}
        <div className="flex-1 grid grid-cols-[1.1fr_1fr] gap-6 sm:gap-10 mt-5 min-h-0 items-start pt-2">

          {/* Left — SVG */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex items-center justify-center">
            <StackDiagram />
          </motion.div>

          {/* Right — Key points */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col gap-4 sm:gap-5">
            {keyPoints.map((point, i) => (
              <motion.div key={point.title}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + i * 0.1, duration: 0.4 }}
                className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                  style={{ background: `${point.color}99` }} />
                <div>
                  <h3 className="text-[#fefefe]/90 text-xs sm:text-sm font-bold"
                    style={{ fontFamily: "'Anton', sans-serif", letterSpacing: '0.02em', color: point.color }}>
                    {point.title}
                  </h3>
                  <p className="text-[#fefefe]/50 text-[10px] sm:text-xs leading-relaxed mt-0.5"
                    style={{ fontFamily: "'Geist Mono', monospace" }}>
                    {point.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>

        {/* Logo */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
          className="shrink-0 mt-3 flex justify-end">
          <img src={unicityLogoUrl} alt="Unicity" className="h-5 opacity-60" />
        </motion.div>

      </div>
    </div>
  );
}
