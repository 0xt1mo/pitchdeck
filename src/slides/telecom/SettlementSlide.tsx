import { motion } from 'framer-motion';

type ArrowStep = { num: number; label: string; from: number; to: number; highlight?: boolean };
type SelfStep = { num: number; label: string; at: number; highlight?: boolean };
type Step = ArrowStep | SelfStep;

function isSelf(s: Step): s is SelfStep {
  return 'at' in s;
}

const PARTICIPANTS = ['Buyer', 'Oracle', 'Seller'];
const STEPS: Step[] = [
  { num: 1, from: 0, to: 2, label: 'token + transaction' },
  { num: 2, from: 2, to: 1, label: 'state transition request' },
  { num: 3, from: 1, to: 2, label: 'exclusion proof — immediate', highlight: true },
  { num: 4, at: 2, label: 'release', highlight: true },
  { num: 5, from: 1, to: 2, label: 'inclusion proof — finality (~1s)' },
];

const ROW_H = 40;
const HEAD_H = 36;
const VB_W = 740;

function FlowDiagram() {
  const n = PARTICIPANTS.length;
  const gap = (VB_W - 100) / (n - 1);
  const offset = 50;
  const cx = (i: number) => offset + i * gap;
  const vbH = HEAD_H + STEPS.length * ROW_H + 24;

  return (
    <svg viewBox={`0 0 ${VB_W} ${vbH}`} className="w-full h-auto">
      <defs>
        <marker id="ar-set" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <path d="M0,0.5 L7,3 L0,5.5" fill="rgba(254,254,254,0.5)" />
        </marker>
        <marker id="al-set" markerWidth="8" markerHeight="6" refX="1" refY="3" orient="auto-start-reverse">
          <path d="M0,0.5 L7,3 L0,5.5" fill="rgba(254,254,254,0.5)" />
        </marker>
        <marker id="ar-set-h" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
          <path d="M0,0.5 L7,3 L0,5.5" fill="#f97316" />
        </marker>
        <marker id="al-set-h" markerWidth="8" markerHeight="6" refX="1" refY="3" orient="auto-start-reverse">
          <path d="M0,0.5 L7,3 L0,5.5" fill="#f97316" />
        </marker>
      </defs>

      {/* Participant headers + lifelines */}
      {PARTICIPANTS.map((p, i) => {
        const x = cx(i);
        return (
          <g key={p}>
            <text x={x} y={20} textAnchor="middle" fill="#fefefe" fontSize="11"
              fontFamily="Geist Mono, monospace" style={{ opacity: 0.85 }}>{p}</text>
            <line x1={x} y1={32} x2={x} y2={vbH - 8}
              stroke="rgba(255,255,255,0.18)" strokeDasharray="4 3" />
          </g>
        );
      })}

      {/* Steps */}
      {STEPS.map((step, idx) => {
        const y = HEAD_H + idx * ROW_H;
        const accent = step.highlight ? '#f97316' : 'rgba(254,254,254,0.55)';
        const labelColor = step.highlight ? '#f97316' : 'rgba(254,254,254,0.7)';

        if (isSelf(step)) {
          const x = cx(step.at);
          return (
            <g key={step.num}>
              {/* Number badge */}
              <circle cx={offset - 30} cy={y + 18} r={10}
                fill={step.highlight ? '#f97316' : 'rgba(255,255,255,0.05)'}
                stroke={step.highlight ? '#f97316' : 'rgba(254,254,254,0.4)'} strokeWidth={0.8} />
              <text x={offset - 30} y={y + 22} textAnchor="middle"
                fill={step.highlight ? '#fff' : 'rgba(254,254,254,0.7)'} fontSize="9"
                fontFamily="Geist Mono, monospace" fontWeight="bold">{step.num}</text>
              {/* Self-action box — slim button to the left of seller lifeline */}
              <rect x={x - 84} y={y + 8} width={70} height={22} rx={4}
                fill={step.highlight ? 'rgba(249,115,22,0.18)' : 'rgba(255,255,255,0.06)'}
                stroke={step.highlight ? '#f97316' : 'rgba(254,254,254,0.3)'} strokeWidth={1} />
              <text x={x - 49} y={y + 23} textAnchor="middle" fill={step.highlight ? '#fff' : 'rgba(254,254,254,0.85)'}
                fontSize="10" fontFamily="Geist Mono, monospace" fontWeight="bold">{step.label}</text>
            </g>
          );
        }

        const x1 = cx(step.from);
        const x2 = cx(step.to);
        const right = x2 > x1;
        const mid = (x1 + x2) / 2;
        const arrowY = y + 22;

        return (
          <g key={step.num}>
            {/* Number badge */}
            <circle cx={offset - 30} cy={arrowY} r={10}
              fill={step.highlight ? '#f97316' : 'rgba(255,255,255,0.05)'}
              stroke={step.highlight ? '#f97316' : 'rgba(254,254,254,0.4)'} strokeWidth={0.8} />
            <text x={offset - 30} y={arrowY + 4} textAnchor="middle"
              fill={step.highlight ? '#fff' : 'rgba(254,254,254,0.7)'} fontSize="9"
              fontFamily="Geist Mono, monospace" fontWeight="bold">{step.num}</text>

            {/* Label */}
            <text x={mid} y={y + 12} textAnchor="middle" fill={labelColor}
              fontSize="9.5" fontFamily="Geist Mono, monospace">{step.label}</text>
            {/* Arrow */}
            <line
              x1={right ? x1 + 5 : x1 - 5} y1={arrowY}
              x2={right ? x2 - 5 : x2 + 5} y2={arrowY}
              stroke={accent} strokeWidth={1.2}
              markerEnd={`url(#${right ? (step.highlight ? 'ar-set-h' : 'ar-set') : (step.highlight ? 'al-set-h' : 'al-set')})`}
            />
          </g>
        );
      })}
    </svg>
  );
}

export function SettlementSlide() {
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
            SETTLEMENT AT <span className="text-orange-400">MACHINE SPEED</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="mt-2 text-[#fefefe]/85 text-xs sm:text-sm lg:text-base max-w-5xl leading-relaxed"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            Tokens transfer directly between parties. The recipient obtains an immediate exclusion proof from the Oracle and releases on receipt. Inclusion proof confirms finality ~1 second later. No mempool, no consensus wait, no settlement delay.
          </motion.p>
        </div>

        {/* Flow diagram */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="shrink-0 rounded-xl p-4 lg:p-5"
          style={{
            border: '1px solid rgba(249,115,22,0.5)',
            background: '#0a0a0f',
          }}
        >
          <p className="text-orange-400 text-[10px] sm:text-xs tracking-[0.3em] uppercase font-bold mb-1"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            Default Transaction Flow
          </p>
          <FlowDiagram />
        </motion.div>

      </div>
    </div>
  );
}
