import { motion } from 'framer-motion';
import splashVideoUrl from '/kling_20260226_VIDEO_Take_Image_1650_0.mp4';

type ArrowStep = { num: number; label: string; from: number; to: number };
type SelfStep = { num: number; label: string; at: number };
type Step = ArrowStep | SelfStep;

function isSelf(s: Step): s is SelfStep {
  return 'at' in s;
}

const TRAD_PARTICIPANTS = ['Client', 'Server', 'Facilitator', 'Blockchain'];
const TRAD_STEPS: Step[] = [
  { num: 1, from: 0, to: 1, label: 'GET /api' },
  { num: 2, from: 1, to: 0, label: '402 - Payment Required' },
  { num: 3, at: 0, label: 'Select payment method' },
  { num: 4, from: 0, to: 1, label: 'X-PAYMENT: b64 payload' },
  { num: 5, from: 1, to: 2, label: '/verify' },
  { num: 6, from: 2, to: 3, label: 'verification' },
  { num: 7, at: 1, label: 'Fulfill request' },
  { num: 8, from: 1, to: 2, label: '/settle' },
  { num: 9, from: 2, to: 3, label: 'Submit tx to contract' },
  { num: 10, from: 3, to: 2, label: 'Tx confirmed' },
  { num: 11, from: 2, to: 1, label: 'settled' },
  { num: 12, from: 1, to: 0, label: 'X-PAYMENT-RESPONSE' },
];

const UNI_PARTICIPANTS = ['Client', 'Server'];
const UNI_STEPS: Step[] = [
  { num: 1, from: 0, to: 1, label: 'GET /api' },
  { num: 2, from: 1, to: 0, label: '402 - Payment Required' },
  { num: 3, at: 0, label: 'Select payment method' },
  { num: 4, from: 0, to: 1, label: 'X-PAYMENT: b64 payload' },
  { num: 5, from: 1, to: 0, label: 'X-PAYMENT-RESPONSE' },
];

const ROW_H = 38;
const HEAD_H = 48;
const VB_W = 460;
const VB_H = HEAD_H + 12 * ROW_H + 24;

function Diagram({
  participants,
  steps,
  accent,
  id,
  showEliminated,
}: {
  participants: string[];
  steps: Step[];
  accent: string;
  id: string;
  showEliminated?: boolean;
}) {
  const n = participants.length;
  const gap = n > 2 ? (VB_W - 100) / (n - 1) : 200;
  const offset = n > 2 ? 50 : (VB_W - gap) / 2;
  const cx = (i: number) => offset + i * gap;

  return (
    <svg viewBox={`0 0 ${VB_W} ${VB_H}`} className="w-full h-full" preserveAspectRatio="xMidYMin meet">
      <defs>
        <marker id={`ar-${id}`} markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <path d="M0,0.5 L7,3 L0,5.5" fill={accent} />
        </marker>
        <marker id={`al-${id}`} markerWidth="8" markerHeight="6" refX="1" refY="3" orient="auto-start-reverse">
          <path d="M0,0.5 L7,3 L0,5.5" fill={accent} />
        </marker>
      </defs>

      {/* Participant headers + lifelines */}
      {participants.map((p, i) => {
        const x = cx(i);
        return (
          <g key={p}>
            <rect x={x - 38} y={6} width={76} height={28} rx={5}
              fill="rgba(255,255,255,0.05)" stroke={accent} strokeWidth={0.8} />
            <text x={x} y={25} textAnchor="middle" fill="#fefefe" fontSize="10"
              fontFamily="Geist Mono, monospace" style={{ opacity: 0.9 }}>{p}</text>
            <line x1={x} y1={38} x2={x} y2={VB_H - 8}
              stroke="rgba(255,255,255,0.25)" strokeDasharray="4 3" />
          </g>
        );
      })}

      {/* Steps */}
      {steps.map((step, idx) => {
        const y = HEAD_H + idx * ROW_H;

        if (isSelf(step)) {
          const x = cx(step.at);
          return (
            <g key={step.num}>
              <rect x={x - 6} y={y + 4} width={12} height={22} rx={3}
                fill="rgba(255,255,255,0.04)" stroke={accent} strokeWidth={0.6} />
              <circle cx={x - 20} cy={y + 15} r={9} fill="rgba(255,255,255,0.06)" stroke={accent} strokeWidth={0.4} />
              <text x={x - 20} y={y + 19} textAnchor="middle" fill={accent}
                fontSize="8.5" fontWeight="bold">{step.num}</text>
              <text x={x + 16} y={y + 18} fill="rgba(254,254,254,0.7)" fontSize="9"
                fontFamily="Geist Mono, monospace">{step.label}</text>
            </g>
          );
        }

        const x1 = cx(step.from);
        const x2 = cx(step.to);
        const right = x2 > x1;
        const mid = (x1 + x2) / 2;
        const arrowY = y + 24;

        return (
          <g key={step.num}>
            {/* Label above arrow */}
            <text x={mid} y={y + 10} textAnchor="middle" fill="rgba(254,254,254,0.65)"
              fontSize="8.5" fontFamily="Geist Mono, monospace">{step.label}</text>
            {/* Arrow line */}
            <line
              x1={right ? x1 + 5 : x1 - 5} y1={arrowY}
              x2={right ? x2 - 5 : x2 + 5} y2={arrowY}
              stroke={accent} strokeWidth={1.2}
              markerEnd={`url(#${right ? `ar-${id}` : `al-${id}`})`}
            />
            {/* Number badge on arrow */}
            <circle cx={mid} cy={arrowY} r={9} fill="rgba(6,6,6,0.9)" stroke={accent} strokeWidth={0.5} />
            <text x={mid} y={arrowY + 3.5} textAnchor="middle" fill={accent}
              fontSize="8" fontWeight="bold">{step.num}</text>
          </g>
        );
      })}

      {/* Eliminated steps zone (Unicity only) */}
      {showEliminated && (
        <g>
          <rect x={35} y={HEAD_H + 5 * ROW_H + 12} width={VB_W - 70} height={6.5 * ROW_H}
            rx={12} fill="rgba(249,115,22,0.06)" stroke={accent} strokeWidth={2} strokeDasharray="8 5" opacity={0.6} />
          <text x={VB_W / 2} y={HEAD_H + 5 * ROW_H + 2.8 * ROW_H} textAnchor="middle"
            fill={accent} fontSize="26" fontFamily="Anton, sans-serif" letterSpacing="0.08em" opacity={0.9}>
            7 STEPS ELIMINATED
          </text>
          <text x={VB_W / 2} y={HEAD_H + 5 * ROW_H + 3.8 * ROW_H + 4} textAnchor="middle"
            fill="rgba(254,254,254,0.5)" fontSize="11" fontFamily="Geist Mono, monospace">
            No facilitator · No shared ledger
          </text>
        </g>
      )}
    </svg>
  );
}

export function ProtocolSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-y-auto">
      {/* Video background */}
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
        <video className="w-full h-full object-cover opacity-40" autoPlay muted loop playsInline src={splashVideoUrl} />
        <div className="absolute inset-0 bg-[#060606]/30" />
      </div>

      <div className="relative z-10 h-full flex flex-col px-6 sm:px-10 lg:px-16 py-6 sm:py-8">
        {/* Header */}
        <div className="shrink-0">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-orange-400 text-[10px] sm:text-xs tracking-[0.4em] uppercase"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            Scaling Agentic Payments
          </motion.p>
          <motion.h1 initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[24px] sm:text-[36px] lg:text-[48px] leading-[0.95] tracking-tight mt-1"
            style={{ fontFamily: "'Anton', sans-serif" }}>
            X402/MPP —{' '}
            <span className="text-orange-400">THE MESSAGE IS THE PAYMENT</span>
          </motion.h1>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-[2px] w-32 sm:w-48 bg-gradient-to-r from-orange-500 to-transparent origin-left mt-1.5" />
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="mt-1.5 text-[#fefefe]/70 text-xs sm:text-sm"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            We don't compete with agentic protocols — we SCALE them.
          </motion.p>
        </div>

        {/* Diagrams */}
        <div className="flex-1 grid grid-cols-2 gap-4 sm:gap-6 mt-4 min-h-0">
          {/* Traditional */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col min-h-0">
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-[#fefefe]/80 text-sm sm:text-base tracking-[0.1em] uppercase"
                style={{ fontFamily: "'Anton', sans-serif" }}>
                Traditional Blockchain X402
              </h2>
              <span className="px-2 py-0.5 rounded-full bg-red-500/15 border border-red-500/25 text-red-400 text-[10px] tracking-wider uppercase font-semibold"
                style={{ fontFamily: "'Geist Mono', monospace" }}>12 steps</span>
            </div>
            <div className="flex-1 rounded-xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-sm p-2 sm:p-3 min-h-0 overflow-hidden">
              <Diagram participants={TRAD_PARTICIPANTS} steps={TRAD_STEPS}
                accent="rgba(254,254,254,0.5)" id="trad" />
            </div>
          </motion.div>

          {/* Unicity */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-col min-h-0">
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-orange-400 text-sm sm:text-base tracking-[0.1em] uppercase"
                style={{ fontFamily: "'Anton', sans-serif" }}>
                Unicity Frictionless X402
              </h2>
              <span className="px-2 py-0.5 rounded-full bg-orange-500/15 border border-orange-500/25 text-orange-400 text-[10px] tracking-wider uppercase font-semibold"
                style={{ fontFamily: "'Geist Mono', monospace" }}>5 steps</span>
            </div>
            <div className="flex-1 rounded-xl border border-orange-500/20 bg-orange-500/[0.03] backdrop-blur-sm p-2 sm:p-3 min-h-0 overflow-hidden">
              <Diagram participants={UNI_PARTICIPANTS} steps={UNI_STEPS}
                accent="#f97316" id="uni" showEliminated />
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
      </div>
    </div>
  );
}
