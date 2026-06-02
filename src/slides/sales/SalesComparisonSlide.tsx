import { motion } from 'framer-motion';
import { SlideFrame } from '../../components/SlideFrame';

const fontTitle = "'Anton', sans-serif";
const fontMono = "'Geist Mono', monospace";
const EASE_OUT = [0.16, 1, 0.3, 1] as const;
const STAMP_OVERSHOOT = [0.34, 1.56, 0.64, 1] as const;

/**
 * The Payoff — Mike's page 4 content with custom animated micro-diagrams.
 *
 * Two consequences of validating at the edge:
 *   1. Kernel-Level Verification — micro-diagram shows agent state passing
 *      through a kernel boundary and emerging as a signed token.
 *   2. Peer-to-Peer at Machine Scale — micro-diagram shows multiple agents
 *      transacting in parallel without a central ledger.
 *
 * The diagrams animate after the text settles, giving each panel a
 * second beat where the concept becomes visible. No invented chrome —
 * pure illustrations of the two claims, in the existing brand system.
 */

export function SalesComparisonSlide() {
  return (
    <SlideFrame
      title="THE PAYOFF —"
      accent="WHAT VALIDATION AT THE EDGE UNLOCKS."
      subtitle={
        <>
          Two architectural consequences. What they unlock for{' '}
          <span className="text-orange-400/90 font-bold">
            your security, audit, and finance teams.
          </span>
        </>
      }
      bodyGap="gap-6 lg:gap-8"
    >
        <div className="grid grid-cols-2 gap-6 lg:gap-8 shrink-0">
          {/* Panel 01 — Kernel-Level Verification */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.55, ease: EASE_OUT }}
            className="rounded-lg p-7 lg:p-9 flex flex-col gap-5 relative overflow-hidden"
            style={{
              background: 'rgba(249,115,22,0.08)',
              border: '1px solid rgba(249,115,22,0.40)',
              borderTop: '4px solid #fb923c',
            }}
          >
            <div className="flex items-baseline justify-between">
              <p
                className="text-[10px] lg:text-[11px] uppercase tracking-[0.32em] font-bold"
                style={{ color: '#fb923c', fontFamily: fontMono }}
              >
                Kernel-Level Verification
              </p>
              <motion.span
                initial={{ opacity: 0, scale: 0.7, rotate: -8 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.45, delay: 0.6, ease: STAMP_OVERSHOOT }}
                className="text-[14px] tabular-nums tracking-tight"
                style={{ fontFamily: fontMono, color: '#fb923c' }}
              >
                01
              </motion.span>
            </div>

            <h3
              className="text-[#fefefe] text-[26px] lg:text-[36px] leading-[1.05] tracking-tight"
              style={{ fontFamily: fontTitle, letterSpacing: '0.02em' }}
            >
              AGENT STATE ITSELF BECOMES A TOKEN.
            </h3>

            {/* Micro-diagram: agent → kernel → signed token */}
            <KernelDiagram />

            <p
              className="text-[#fefefe]/85 text-[14px] lg:text-[16px] leading-relaxed"
              style={{ fontFamily: fontMono }}
            >
              Every action — model output, tool call, decision, intermediate
              reasoning — verified cryptographically inside the AI OS.
            </p>
          </motion.div>

          {/* Panel 02 — Peer-to-Peer at Machine Scale */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.55, ease: EASE_OUT }}
            className="rounded-lg p-7 lg:p-9 flex flex-col gap-5 relative overflow-hidden"
            style={{
              background: 'rgba(52,211,153,0.08)',
              border: '1px solid rgba(52,211,153,0.40)',
              borderTop: '4px solid #34d399',
            }}
          >
            <div className="flex items-baseline justify-between">
              <p
                className="text-[10px] lg:text-[11px] uppercase tracking-[0.32em] font-bold"
                style={{ color: '#34d399', fontFamily: fontMono }}
              >
                Peer-to-Peer at Machine Scale
              </p>
              <motion.span
                initial={{ opacity: 0, scale: 0.7, rotate: -8 }}
                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                transition={{ duration: 0.45, delay: 0.75, ease: STAMP_OVERSHOOT }}
                className="text-[14px] tabular-nums tracking-tight"
                style={{ fontFamily: fontMono, color: '#34d399' }}
              >
                02
              </motion.span>
            </div>

            <h3
              className="text-[#fefefe] text-[26px] lg:text-[36px] leading-[1.05] tracking-tight"
              style={{ fontFamily: fontTitle, letterSpacing: '0.02em' }}
            >
              VALUE MOVES AT MACHINE SPEED.
            </h3>

            {/* Micro-diagram: parallel p2p flows, no central ledger */}
            <P2PDiagram />

            <p
              className="text-[#fefefe]/85 text-[14px] lg:text-[16px] leading-relaxed"
              style={{ fontFamily: fontMono }}
            >
              No shared ledger, no per-transaction gas. Predictable
              subscription economics and privacy by design — settlement
              built for agent-to-agent volume.
            </p>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="text-center text-[#fefefe]/55 text-[11px] lg:text-[13px] uppercase tracking-[0.32em] font-bold shrink-0"
          style={{ fontFamily: fontMono }}
        >
          Every action audit-ready · every payment instant · no shared ledger to reconcile
        </motion.p>
    </SlideFrame>
  );
}

/**
 * Kernel-Level Verification micro-diagram.
 *
 * Shows: agent state (left, fading dots) → vertical kernel boundary
 * (animated draw) → emerging signed token (right, hexagon stamp-settle).
 * Three input dots converge into one signed output, demonstrating the
 * cryptographic-aggregation moment.
 */
function KernelDiagram() {
  return (
    <div className="rounded-md py-4 px-2"
      style={{
        background: 'rgba(0,0,0,0.30)',
        border: '1px solid rgba(249,115,22,0.18)',
      }}
    >
      <svg viewBox="0 0 320 90" className="w-full h-auto" aria-hidden="true">
        {/* Left: agent-state dots flowing rightward */}
        {[20, 35, 50].map((y, i) => (
          <motion.circle
            key={i}
            cx={20}
            cy={y + 5}
            r={3}
            fill="rgba(254,254,254,0.85)"
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: [0, 1, 0.4], x: [-8, 0, 80] }}
            transition={{
              duration: 1.6,
              delay: 0.95 + i * 0.12,
              ease: EASE_OUT,
              times: [0, 0.3, 1],
            }}
          />
        ))}
        <motion.text
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
          x={20}
          y={78}
          fontSize="9"
          fontFamily={fontMono}
          fill="rgba(254,254,254,0.45)"
          letterSpacing="0.16em"
        >
          AGENT STATE
        </motion.text>

        {/* Kernel boundary — vertical animated line + glow */}
        <motion.line
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.85, ease: EASE_OUT }}
          x1={140}
          y1={5}
          x2={140}
          y2={62}
          stroke="#fb923c"
          strokeWidth={1.5}
          strokeDasharray="3 3"
        />
        <motion.text
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          x={140}
          y={78}
          textAnchor="middle"
          fontSize="9"
          fontFamily={fontMono}
          fill="#fb923c"
          letterSpacing="0.18em"
          fontWeight="bold"
        >
          KERNEL
        </motion.text>

        {/* Convergence funnel — three lines into one */}
        {[20, 35, 50].map((y, i) => (
          <motion.path
            key={i}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.55 }}
            transition={{ duration: 0.5, delay: 1.4 + i * 0.05 }}
            d={`M 90 ${y + 5} Q 115 ${y + 5} 140 33`}
            fill="none"
            stroke="rgba(251,146,60,0.55)"
            strokeWidth={0.7}
          />
        ))}
        <motion.line
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.45, delay: 1.65, ease: EASE_OUT }}
          x1={140}
          y1={33}
          x2={250}
          y2={33}
          stroke="#fb923c"
          strokeWidth={1.5}
        />

        {/* Right: signed-token hexagon, stamp-settle */}
        <motion.g
          initial={{ opacity: 0, scale: 0.6, rotate: -12 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.5, delay: 1.85, ease: STAMP_OVERSHOOT }}
          style={{ transformOrigin: '275px 33px', transformBox: 'fill-box' }}
        >
          <polygon
            points="275,15 295,25 295,42 275,52 255,42 255,25"
            fill="rgba(251,146,60,0.20)"
            stroke="#fb923c"
            strokeWidth={1.5}
          />
          <text
            x={275}
            y={36}
            textAnchor="middle"
            fontSize="9"
            fontFamily={fontMono}
            fill="#fb923c"
            letterSpacing="0.12em"
            fontWeight="bold"
          >
            TOKEN
          </text>
        </motion.g>
        <motion.text
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.05 }}
          x={275}
          y={78}
          textAnchor="middle"
          fontSize="9"
          fontFamily={fontMono}
          fill="rgba(254,219,177,0.85)"
          letterSpacing="0.14em"
        >
          SIGNED
        </motion.text>
      </svg>
    </div>
  );
}

/**
 * Peer-to-Peer at Machine Scale micro-diagram.
 *
 * Shows: five agent dots arranged around the perimeter, transacting
 * directly with each other via dashed lines that "flow" with animated
 * stroke offset. No central node — that's the architectural claim.
 * Multiple parallel flows emphasize machine-scale concurrency.
 */
function P2PDiagram() {
  // Five agents arranged on a wide ellipse
  const agents = [
    { x: 30, y: 28 },
    { x: 90, y: 14 },
    { x: 160, y: 28 },
    { x: 230, y: 14 },
    { x: 290, y: 28 },
    { x: 60, y: 56 },
    { x: 130, y: 56 },
    { x: 200, y: 56 },
    { x: 260, y: 56 },
  ];
  // Connection pairs — non-central, parallel
  const flows = [
    { from: 0, to: 5 },
    { from: 1, to: 5 },
    { from: 1, to: 6 },
    { from: 2, to: 6 },
    { from: 2, to: 7 },
    { from: 3, to: 7 },
    { from: 3, to: 8 },
    { from: 4, to: 8 },
    { from: 5, to: 6 },
    { from: 7, to: 8 },
  ];

  return (
    <div className="rounded-md py-4 px-2"
      style={{
        background: 'rgba(0,0,0,0.30)',
        border: '1px solid rgba(52,211,153,0.18)',
      }}
    >
      <svg viewBox="0 0 320 80" className="w-full h-auto" aria-hidden="true">
        {/* Connection lines — pathLength draw */}
        {flows.map((f, i) => {
          const a = agents[f.from];
          const b = agents[f.to];
          return (
            <motion.line
              key={i}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.55 }}
              transition={{ duration: 0.5, delay: 1.0 + i * 0.06, ease: EASE_OUT }}
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke="#34d399"
              strokeWidth={0.8}
              strokeDasharray="3 3"
            />
          );
        })}

        {/* Animated traffic dots — perpetual flow per connection */}
        {flows.slice(0, 6).map((f, i) => {
          const a = agents[f.from];
          const b = agents[f.to];
          return (
            <motion.circle
              key={`d${i}`}
              r={1.6}
              fill="#34d399"
              initial={{ opacity: 0 }}
              animate={{
                cx: [a.x, b.x],
                cy: [a.y, b.y],
                opacity: [0, 0.95, 0],
              }}
              transition={{
                duration: 1.6,
                delay: 1.6 + i * 0.18,
                repeat: Infinity,
                repeatDelay: 0.8,
                ease: 'linear',
              }}
            />
          );
        })}

        {/* Agent nodes — stamp-settle in waves */}
        {agents.map((agent, i) => (
          <motion.g
            key={i}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              delay: 0.85 + i * 0.05,
              ease: STAMP_OVERSHOOT,
            }}
            style={{ transformOrigin: `${agent.x}px ${agent.y}px`, transformBox: 'fill-box' }}
          >
            <circle
              cx={agent.x}
              cy={agent.y}
              r={4.5}
              fill="rgba(0,0,0,0.6)"
              stroke="#34d399"
              strokeWidth={1}
            />
            <circle
              cx={agent.x}
              cy={agent.y}
              r={2}
              fill="#34d399"
            />
          </motion.g>
        ))}

        {/* Caption — bottom */}
        <motion.text
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          x={160}
          y={76}
          textAnchor="middle"
          fontSize="9"
          fontFamily={fontMono}
          fill="rgba(167,243,208,0.75)"
          letterSpacing="0.18em"
          fontWeight="bold"
        >
          NO CENTRAL LEDGER · PARALLEL SETTLEMENT
        </motion.text>
      </svg>
    </div>
  );
}
