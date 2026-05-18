import { motion } from 'framer-motion';
import splashVideoUrl from '/kling_20260226_VIDEO_Take_Image_1650_0.mp4';

export function AgentsSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
        <video className="w-full h-full object-cover opacity-15" autoPlay muted loop playsInline src={splashVideoUrl} />
        <div className="absolute inset-0 bg-[#060606]/60" />
      </div>

      <div className="relative z-10 h-full flex flex-col px-6 sm:px-10 lg:px-16 py-5 sm:py-7 lg:py-8 justify-center gap-4 lg:gap-5">

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-[32px] sm:text-[48px] lg:text-[68px] leading-[0.95] tracking-tight uppercase shrink-0"
          style={{ fontFamily: "'Anton', sans-serif" }}
        >
          <span className="text-[#fefefe]">THE UNICITY L1:</span>{' '}
          <span className="text-orange-400">WHY A PURPOSE BUILT CHAIN?</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="text-[#fefefe]/90 text-xl sm:text-2xl lg:text-[28px] leading-snug shrink-0 max-w-6xl"
          style={{ fontFamily: "'Geist Mono', monospace" }}
        >
          Unicity is the logical conclusion of a decade of network unbundling:{' '}
          <span className="text-orange-400">the network attests uniqueness, nothing else. Tokens self-authenticate and move P2P with transaction validation at the edge.</span>
        </motion.p>

        {/* Architecture diagram */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex items-center justify-center shrink-0 mt-1"
        >
          <UnicityArchitectureDiagram />
        </motion.div>

      </div>
    </div>
  );
}

function UnicityArchitectureDiagram() {
  const W = 900;
  const H = 380;

  // Layout coordinates
  const consensusY = 18;
  const consensusH = 48;
  const oracleY = 84;
  const oracleH = 88;
  const agentRowY = 270;
  const agentR = 42;
  const agentAx = 120;
  const agentBx = W - 120;
  const tokenW = 220;
  const tokenH = 56;
  const tokenX = W / 2 - tokenW / 2;
  const tokenY = agentRowY - tokenH / 2;

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      className="w-full h-auto max-w-[1080px]"
    >
      <title>Unicity architecture — peer-to-peer with a uniqueness oracle</title>

      <defs>
        {/* Arrow marker */}
        <marker
          id="arr"
          viewBox="0 0 10 10"
          refX="9"
          refY="5"
          markerWidth="7"
          markerHeight="7"
          orient="auto-start-reverse"
        >
          <path d="M2 1L8 5L2 9" fill="none" stroke="#f97316" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </marker>

        {/* Gradients */}
        <linearGradient id="oracleGrad" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="rgba(249,115,22,0.18)" />
          <stop offset="100%" stopColor="rgba(249,115,22,0.06)" />
        </linearGradient>
        <radialGradient id="agentGrad" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="rgba(249,115,22,0.30)" />
          <stop offset="100%" stopColor="rgba(249,115,22,0.06)" />
        </radialGradient>

        {/* Subtle grid */}
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.025)" strokeWidth="0.5" />
        </pattern>
      </defs>

      <rect x="0" y="0" width={W} height={H} fill="url(#grid)" />

      {/* Layer 1 — Oracle Consensus (the dim layer that's being unbundled) */}
      <g>
        <rect
          x={W / 2 - 280}
          y={consensusY}
          width="560"
          height={consensusH}
          rx="4"
          fill="rgba(255,255,255,0.08)"
          stroke="rgba(255,255,255,0.45)"
          strokeWidth="1.2"
          strokeDasharray="4 3"
        />
        <text
          x={W / 2}
          y={consensusY + consensusH / 2 + 8}
          textAnchor="middle"
          fontFamily="Anton, sans-serif"
          fontSize="24"
          letterSpacing="2"
          fill="rgba(255,255,255,0.85)"
        >
          CONSENSUS (ON ORACLE STATE)
        </text>
      </g>

      {/* Layer 2 — ZK Uniqueness Oracle (bright, what Unicity needs) */}
      <g>
        <rect
          x={W / 2 - 280}
          y={oracleY}
          width="560"
          height={oracleH}
          rx="6"
          fill="url(#oracleGrad)"
          stroke="#f97316"
          strokeWidth="1.5"
        />
        <text
          x={W / 2}
          y={oracleY + 36}
          textAnchor="middle"
          fontFamily="Anton, sans-serif"
          fontSize="26"
          letterSpacing="1.5"
          fill="#f97316"
        >
          ZK UNIQUENESS ORACLE
        </text>
        <text
          x={W / 2}
          y={oracleY + 66}
          textAnchor="middle"
          fontFamily="Geist Mono, monospace"
          fontSize="16"
          fill="rgba(254,254,254,0.85)"
          fontStyle="italic"
        >
          "has this token been spent?" — yes / no
        </text>
      </g>

      {/* Commit ↑ arrow */}
      <g>
        <line
          x1={W / 2 - 40}
          y1={tokenY - 6}
          x2={W / 2 - 40}
          y2={oracleY + oracleH + 4}
          stroke="#f97316"
          strokeWidth="1.4"
          markerEnd="url(#arr)"
        />
        <text
          x={W / 2 - 50}
          y={(tokenY + oracleY + oracleH) / 2 + 6}
          textAnchor="end"
          fontFamily="Geist Mono, monospace"
          fontSize="15"
          fill="#f97316"
        >
          commit
        </text>
      </g>

      {/* Proof ↓ arrow */}
      <g>
        <line
          x1={W / 2 + 40}
          y1={oracleY + oracleH + 4}
          x2={W / 2 + 40}
          y2={tokenY - 6}
          stroke="#f97316"
          strokeWidth="1.4"
          markerEnd="url(#arr)"
        />
        <text
          x={W / 2 + 50}
          y={(tokenY + oracleY + oracleH) / 2 + 6}
          textAnchor="start"
          fontFamily="Geist Mono, monospace"
          fontSize="15"
          fill="#f97316"
        >
          proof
        </text>
      </g>

      {/* P2P flow lane background */}
      <line
        x1={agentAx + agentR + 10}
        y1={agentRowY}
        x2={agentBx - agentR - 10}
        y2={agentRowY}
        stroke="rgba(249,115,22,0.15)"
        strokeWidth="20"
        strokeLinecap="round"
      />

      {/* Agent A */}
      <g>
        <circle cx={agentAx} cy={agentRowY} r={agentR + 8} fill="rgba(249,115,22,0.08)" />
        <circle cx={agentAx} cy={agentRowY} r={agentR} fill="url(#agentGrad)" stroke="#f97316" strokeWidth="2" />
        <text x={agentAx} y={agentRowY + 10} textAnchor="middle" fontFamily="Anton, sans-serif" fontSize="32" fill="#f97316">
          A
        </text>
        <text x={agentAx} y={agentRowY + agentR + 28} textAnchor="middle" fontFamily="Geist Mono, monospace" fontSize="14" fill="rgba(254,254,254,0.65)" letterSpacing="2">
          AGENT
        </text>
      </g>

      {/* Token + Proof packet */}
      <g>
        <rect
          x={tokenX}
          y={tokenY}
          width={tokenW}
          height={tokenH}
          rx="6"
          fill="#0a0a0f"
          stroke="#f97316"
          strokeWidth="2"
        />
        <text
          x={tokenX + 56}
          y={tokenY + tokenH / 2 + 7}
          textAnchor="middle"
          fontFamily="Anton, sans-serif"
          fontSize="20"
          fill="#fefefe"
          letterSpacing="1"
        >
          TOKEN
        </text>
        <line
          x1={tokenX + 110}
          y1={tokenY + 8}
          x2={tokenX + 110}
          y2={tokenY + tokenH - 8}
          stroke="#f97316"
          strokeWidth="0.8"
          strokeDasharray="2 2"
        />
        <text
          x={tokenX + 165}
          y={tokenY + tokenH / 2 + 6}
          textAnchor="middle"
          fontFamily="Geist Mono, monospace"
          fontSize="15"
          fill="#f97316"
          letterSpacing="1.2"
        >
          + PROOF
        </text>
      </g>

      {/* P2P arrows */}
      <line
        x1={agentAx + agentR + 10}
        y1={agentRowY}
        x2={tokenX - 8}
        y2={agentRowY}
        stroke="#f97316"
        strokeWidth="1.5"
        markerEnd="url(#arr)"
      />
      <line
        x1={tokenX + tokenW + 8}
        y1={agentRowY}
        x2={agentBx - agentR - 10}
        y2={agentRowY}
        stroke="#f97316"
        strokeWidth="1.5"
        markerEnd="url(#arr)"
      />

      {/* P2P label */}
      <text
        x={W / 2}
        y={agentRowY + 52}
        textAnchor="middle"
        fontFamily="Geist Mono, monospace"
        fontSize="14"
        letterSpacing="3"
        fill="rgba(249,115,22,0.85)"
      >
        PEER-TO-PEER · NO SHARED LEDGER
      </text>

      {/* Agent B */}
      <g>
        <circle cx={agentBx} cy={agentRowY} r={agentR + 8} fill="rgba(249,115,22,0.08)" />
        <circle cx={agentBx} cy={agentRowY} r={agentR} fill="url(#agentGrad)" stroke="#f97316" strokeWidth="2" />
        <text x={agentBx} y={agentRowY + 10} textAnchor="middle" fontFamily="Anton, sans-serif" fontSize="32" fill="#f97316">
          B
        </text>
        <text x={agentBx} y={agentRowY + agentR + 28} textAnchor="middle" fontFamily="Geist Mono, monospace" fontSize="14" fill="rgba(254,254,254,0.65)" letterSpacing="2">
          AGENT
        </text>
      </g>

    </svg>
  );
}
