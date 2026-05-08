import { motion } from 'framer-motion';

const properties = [
  {
    title: 'Permissionless',
    desc: 'Aggregators join freely. Algorithmically assigned to sub-trees by network demand. No gatekeepers.',
  },
  {
    title: 'Stake-secured',
    desc: 'Aggregators stake to participate. Slashing on misbehavior. Rewards from transaction fees scale with network capacity.',
  },
  {
    title: 'Redundant by design',
    desc: 'Multiple Aggregators process each sub-tree in parallel. Failure of any one Aggregator is recoverable.',
  },
  {
    title: 'Asynchronous parallelism',
    desc: 'Sub-trees operate independently. No global coordination, no shared bottleneck.',
  },
];

function HierarchyDiagram() {
  const W = 520;
  const H = 320;
  const font = "'Geist Mono', monospace";
  const cx = W / 2;

  const consensusY = 18;
  const rootY = 88;
  const midY = 158;
  const leafY = 228;
  const consensusH = 36;
  const boxH = 32;

  const midL = cx - 100;
  const midR = cx + 100;

  const leafGroups: { parent: number; x: number; w: number }[] = [
    { parent: midL, x: 85, w: 90 },
    { parent: midR, x: 240, w: 64 },
    { parent: midR, x: 305, w: 64 },
    { parent: midR, x: 445, w: 76 },
  ];

  const dotGroups = [
    { x: 85, count: 2 },
    { x: 240, count: 4 },
    { x: 305, count: 4 },
    { x: 445, count: 2 },
  ];

  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto">
      {/* Consensus layer */}
      <rect x={cx - 95} y={consensusY} width={190} height={consensusH} rx={6}
        fill="rgba(249,115,22,0.06)" stroke="rgba(249,115,22,0.55)" strokeWidth={1} />
      <text x={cx} y={consensusY + 14} textAnchor="middle"
        fill="#fefefe" fontSize="10" fontWeight="bold" fontFamily={font} letterSpacing="0.5">
        CONSENSUS LAYER
      </text>
      <text x={cx} y={consensusY + 27} textAnchor="middle"
        fill="rgba(254,254,254,0.6)" fontSize="8" fontFamily={font}>
        PoW + BFT finality
      </text>

      {/* root proof line */}
      <line x1={cx} y1={consensusY + consensusH} x2={cx} y2={rootY - 1}
        stroke="rgba(249,115,22,0.5)" strokeWidth={1} strokeDasharray="2 2" />
      <text x={cx + 12} y={consensusY + consensusH + 14}
        fill="rgba(249,115,22,0.85)" fontSize="8" fontFamily={font}>root proof</text>

      {/* Root SMT */}
      <rect x={cx - 60} y={rootY} width={120} height={boxH + 6} rx={5}
        fill="rgba(249,115,22,0.05)" stroke="rgba(249,115,22,0.5)" strokeWidth={1} />
      <text x={cx} y={rootY + 14} textAnchor="middle"
        fill="#fefefe" fontSize="9.5" fontWeight="bold" fontFamily={font}>Root SMT</text>
      <text x={cx} y={rootY + 27} textAnchor="middle"
        fill="rgba(254,254,254,0.6)" fontSize="8" fontFamily={font}>+ ZK Prover</text>

      {/* Lines from Root SMT to mid sub-trees */}
      {[midL, midR].map((mx, i) => (
        <line key={`r-${i}`} x1={cx} y1={rootY + boxH + 6} x2={mx} y2={midY - 1}
          stroke="rgba(255,255,255,0.2)" strokeWidth={0.8} />
      ))}

      {/* Mid SMT sub-trees */}
      {[midL, midR].map((mx, i) => (
        <g key={`mid-${i}`}>
          <rect x={mx - 55} y={midY} width={110} height={boxH + 6} rx={5}
            fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.25)" strokeWidth={0.8} />
          <text x={mx} y={midY + 14} textAnchor="middle"
            fill="#fefefe" fontSize="9" fontWeight="bold" fontFamily={font}>SMT Sub-tree</text>
          <text x={mx} y={midY + 27} textAnchor="middle"
            fill="rgba(254,254,254,0.55)" fontSize="8" fontFamily={font}>+ ZK Prover</text>
        </g>
      ))}

      {/* Leaves */}
      {leafGroups.map((leaf, i) => (
        <g key={`leaf-${i}`}>
          <line x1={leaf.parent} y1={midY + boxH + 6} x2={leaf.x} y2={leafY - 1}
            stroke="rgba(255,255,255,0.18)" strokeWidth={0.7}
            strokeDasharray={i === leafGroups.length - 1 ? '2 2' : undefined} />
          <rect x={leaf.x - leaf.w / 2} y={leafY} width={leaf.w} height={boxH} rx={4}
            fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.2)" strokeWidth={0.7} />
          <text x={leaf.x} y={leafY + 13} textAnchor="middle"
            fill="rgba(254,254,254,0.85)" fontSize="9" fontFamily={font}>Sub-tree</text>
          <text x={leaf.x} y={leafY + 25} textAnchor="middle"
            fill="rgba(249,115,22,0.85)" fontSize="8" fontFamily={font}>10K tx/s</text>
        </g>
      ))}

      {/* Ellipsis between leaf 3 and last leaf */}
      <text x={375} y={leafY + 22} textAnchor="middle"
        fill="rgba(254,254,254,0.5)" fontSize="14" fontFamily={font}>...</text>

      {/* User request dots */}
      {dotGroups.map((g, gi) => (
        <g key={`dots-${gi}`}>
          {Array.from({ length: g.count }).map((_, di) => {
            const dotX = g.x - ((g.count - 1) * 7) / 2 + di * 7;
            return (
              <circle key={di} cx={dotX} cy={leafY + boxH + 12} r={2.5}
                fill="none" stroke="rgba(254,254,254,0.4)" strokeWidth={0.8} />
            );
          })}
        </g>
      ))}

      {/* User request label */}
      <text x={cx} y={leafY + boxH + 38} textAnchor="middle"
        fill="rgba(254,254,254,0.55)" fontSize="8" fontFamily={font} letterSpacing="1">
        USER REQUESTS · DIRECT TO LOCAL SUB-TREE
      </text>

      {/* Horizontal scale callout */}
      <text x={20} y={H - 6}
        fill="rgba(249,115,22,0.95)" fontSize="9" fontWeight="bold" fontFamily={font} letterSpacing="0.5">
        + NEW SUB-TREE → HORIZONTAL SCALE
      </text>
    </svg>
  );
}

export function PermissionlessSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col px-6 sm:px-10 lg:px-16 py-6 sm:py-8 lg:py-10 justify-center gap-4">

        {/* Header */}
        <div className="shrink-0">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-orange-400 text-[10px] sm:text-xs tracking-[0.4em] uppercase"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            Appendix — Blockchain
          </motion.p>
          <motion.h1 initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[26px] sm:text-[36px] lg:text-[44px] leading-[1.05] tracking-tight mt-1"
            style={{ fontFamily: "'Anton', sans-serif" }}>
            PERMISSIONLESS, <span className="text-orange-400">DECENTRALIZED</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="mt-2 text-[#fefefe]/85 text-xs sm:text-sm lg:text-base max-w-5xl leading-relaxed"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            The Oracle is a hierarchy of SMT sub-trees, each operated by independent Aggregators. Sub-trees run asynchronously in parallel. Recursive ZK proofs aggregate up to the consensus layer. Capacity scales by adding sub-trees, not by raising limits.
          </motion.p>
        </div>

        {/* Two-column body */}
        <div className="grid grid-cols-2 gap-6 lg:gap-10 shrink-0">

          {/* Left — Recursive aggregation diagram */}
          <div className="flex flex-col">
            <p className="text-orange-400 text-[10px] sm:text-xs tracking-[0.3em] uppercase font-bold mb-2"
              style={{ fontFamily: "'Geist Mono', monospace" }}>
              Recursive Aggregation
            </p>
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="rounded-lg p-3 lg:p-4"
              style={{
                border: '1px solid rgba(255,255,255,0.08)',
                background: 'rgba(255,255,255,0.025)',
              }}>
              <HierarchyDiagram />
            </motion.div>
          </div>

          {/* Right — Decentralization properties */}
          <div className="flex flex-col">
            <p className="text-orange-400 text-[10px] sm:text-xs tracking-[0.3em] uppercase font-bold mb-2"
              style={{ fontFamily: "'Geist Mono', monospace" }}>
              Decentralization Properties
            </p>
            <div className="flex flex-col gap-2">
              {properties.map((p, i) => (
                <motion.div
                  key={p.title}
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.08, duration: 0.4 }}
                  className="rounded-lg p-3 lg:p-3.5"
                  style={{
                    border: '1px solid rgba(255,255,255,0.08)',
                    background: 'rgba(255,255,255,0.025)',
                  }}
                >
                  <p className="text-[#fefefe] text-sm sm:text-base font-bold"
                    style={{ fontFamily: "'Geist Mono', monospace" }}>
                    {p.title}
                  </p>
                  <p className="text-[#fefefe]/65 text-[11px] sm:text-xs leading-relaxed mt-1"
                    style={{ fontFamily: "'Geist Mono', monospace" }}>
                    {p.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
