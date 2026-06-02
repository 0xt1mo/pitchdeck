import { motion } from 'framer-motion';
import { SlideFrame } from '../../components/SlideFrame';

const fontTitle = "'Anton', sans-serif";
const fontMono = "'Geist Mono', monospace";
const EASE_OUT = [0.16, 1, 0.3, 1] as const;
const STAMP_OVERSHOOT = [0.34, 1.56, 0.64, 1] as const;

/**
 * Six Autonomy Requirements — direct port of Mike's investor-deck
 * ProblemSlide content, elevated with a custom animated hexagonal seal
 * that constructs itself one side at a time as each requirement
 * reveals. When all six are in, the center "ALL SIX" mark settles in.
 *
 * The slide becomes its own punchline: you can SEE the requirements
 * compose into a single complete shape.
 */

const pillars = [
  { numeral: 'I',   title: 'IDENTITY',             punch: 'Cryptographic identity, not API keys.' },
  { numeral: 'II',  title: 'DELEGATION',           punch: 'Verifiable authority. Scoped and revocable.' },
  { numeral: 'III', title: 'VERIFIABLE EXECUTION', punch: 'Prove what the agent actually did.' },
  { numeral: 'IV',  title: 'POLICY ENFORCEMENT',   punch: 'Governance at runtime, not in code review.' },
  { numeral: 'V',   title: 'SETTLEMENT',           punch: 'Machine-speed transactions at machine-scale cost.' },
  { numeral: 'VI',  title: 'INTEROPERABILITY',     punch: 'MCP, A2A, AP2, x402 — agents already span them all.' },
];

const PILLAR_DELAY_BASE = 0.4;
const PILLAR_DELAY_STEP = 0.18;

export function SalesAutonomyRequirementsSlide() {
  const allSixDelay = PILLAR_DELAY_BASE + 6 * PILLAR_DELAY_STEP + 0.3;

  return (
    <SlideFrame
      title="WHAT AUTONOMY"
      accent="ACTUALLY REQUIRES."
      subtitle={
        <>
          No government or enterprise will deploy autonomous agents that spend money, execute
          contracts, or access sensitive data —{' '}
          <span className="text-orange-400/90 font-bold">
            unless every one of the following is in place.
          </span>
        </>
      }
      bodyGap="gap-5"
    >
        <div className="grid grid-cols-[1fr_auto] gap-12 lg:gap-16 items-center shrink-0">
          {/* LEFT — Six pillars */}
          <div className="flex flex-col">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: PILLAR_DELAY_BASE + i * PILLAR_DELAY_STEP, ease: EASE_OUT }}
                className="grid grid-cols-[44px_minmax(0,260px)_minmax(0,1fr)] gap-4 lg:gap-6 items-baseline py-2 lg:py-2.5"
                style={{
                  borderBottom:
                    i < pillars.length - 1 ? '1px solid rgba(249,115,22,0.10)' : 'none',
                }}
              >
                {/* Roman numeral — stamp-overshoot */}
                <motion.span
                  initial={{ opacity: 0, scale: 0.6, rotate: -10 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: PILLAR_DELAY_BASE + i * PILLAR_DELAY_STEP + 0.05,
                    ease: STAMP_OVERSHOOT,
                  }}
                  className="text-orange-400/70 text-[14px] lg:text-[16px] tracking-[0.22em] font-bold tabular-nums inline-block origin-center"
                  style={{ fontFamily: fontMono }}
                >
                  {p.numeral}
                </motion.span>

                <h3
                  className="text-orange-400 text-[22px] sm:text-[26px] lg:text-[30px] leading-none tracking-tight"
                  style={{ fontFamily: fontTitle, letterSpacing: '0.02em' }}
                >
                  {p.title}
                </h3>
                <p
                  className="text-[#fefefe] text-[13px] sm:text-[15px] lg:text-[17px] font-bold leading-snug"
                  style={{ fontFamily: fontMono }}
                >
                  {p.punch}
                </p>
              </motion.div>
            ))}
          </div>

          {/* RIGHT — animated hexagonal seal builds side-by-side */}
          <SixSeal allSixDelay={allSixDelay} />
        </div>

        {/* Closer */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: allSixDelay + 0.6, duration: 0.6, ease: EASE_OUT }}
          className="rounded-md px-5 py-3.5 shrink-0 grid grid-cols-[auto_1fr_auto] items-center gap-5 mt-2"
          style={{
            background: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.10)',
            borderLeft: '3px solid rgba(249,115,22,0.85)',
          }}
        >
          <p
            className="text-orange-400 text-[10px] lg:text-[11px] uppercase tracking-[0.32em] font-bold whitespace-nowrap"
            style={{ fontFamily: fontMono }}
          >
            Verdict
          </p>
          <p
            className="text-[#fefefe] text-[15px] lg:text-[18px] leading-snug font-bold"
            style={{ fontFamily: fontMono }}
          >
            No security vendor meets{' '}
            <span className="text-orange-400">all six</span>. No agent framework meets all six.
            No legacy infrastructure meets all six.
          </p>
          <p
            className="text-[#fefefe]/40 text-[10px] lg:text-[11px] uppercase tracking-[0.22em] whitespace-nowrap"
            style={{ fontFamily: fontMono }}
          >
            One platform · six requirements
          </p>
        </motion.div>
    </SlideFrame>
  );
}

/**
 * Hexagonal seal — six sides draw in one at a time, synchronized with
 * each pillar's reveal. When all six are in, the center "ALL SIX" stamp
 * settles in with overshoot.
 *
 * Geometry: regular hexagon centered at (0,0), radius R. Vertex i at
 * angle (60° * i - 90°). Side i connects vertex i to vertex i+1.
 */
function SixSeal({ allSixDelay }: { allSixDelay: number }) {
  const R = 90;
  const cx = 110;
  const cy = 110;

  const vertex = (i: number) => {
    const ang = ((Math.PI / 3) * i - Math.PI / 2);
    return {
      x: cx + Math.cos(ang) * R,
      y: cy + Math.sin(ang) * R,
    };
  };

  // Side labels mapped to their pillar index — short forms
  const sideLabels = [
    'IDENTITY',
    'DELEGATION',
    'VERIFY',
    'POLICY',
    'SETTLE',
    'INTEROP',
  ];

  return (
    <div className="relative">
      <svg width={220} height={220} viewBox="0 0 220 220" aria-hidden="true">
        <defs>
          <filter id="sealGlow">
            <feGaussianBlur stdDeviation="3" />
          </filter>
        </defs>

        {/* Outer scaffold ring — appears first, faint */}
        <motion.circle
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: EASE_OUT }}
          cx={cx}
          cy={cy}
          r={R + 8}
          fill="none"
          stroke="rgba(249,115,22,0.18)"
          strokeWidth={0.6}
          strokeDasharray="2 6"
          style={{ transformOrigin: `${cx}px ${cy}px`, transformBox: 'fill-box' }}
        />

        {/* Six sides — each draws in at its pillar's delay */}
        {Array.from({ length: 6 }).map((_, i) => {
          const a = vertex(i);
          const b = vertex((i + 1) % 6);
          const sideDelay = PILLAR_DELAY_BASE + i * PILLAR_DELAY_STEP + 0.1;
          return (
            <g key={`side-${i}`}>
              <motion.line
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 0.55, delay: sideDelay, ease: EASE_OUT }}
                x1={a.x}
                y1={a.y}
                x2={b.x}
                y2={b.y}
                stroke="#fb923c"
                strokeWidth={2}
                strokeLinecap="round"
                filter="url(#sealGlow)"
              />
              {/* Vertex stamp */}
              <motion.circle
                initial={{ opacity: 0, scale: 0.4 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: sideDelay + 0.1, ease: STAMP_OVERSHOOT }}
                cx={a.x}
                cy={a.y}
                r={3}
                fill="#fb923c"
                style={{ transformOrigin: `${a.x}px ${a.y}px`, transformBox: 'fill-box' }}
              />
              {/* Side label — small numeric mark outside the hexagon */}
              <SideLabel sideIndex={i} delay={sideDelay + 0.15} label={sideLabels[i]} />
            </g>
          );
        })}

        {/* Hexagon fill — only after all six sides done */}
        <motion.polygon
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: allSixDelay - 0.1, ease: EASE_OUT }}
          points={Array.from({ length: 6 })
            .map((_, i) => {
              const v = vertex(i);
              return `${v.x},${v.y}`;
            })
            .join(' ')}
          fill="rgba(249,115,22,0.08)"
        />

        {/* Center "ALL SIX" check mark */}
        <motion.g
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, delay: allSixDelay, ease: STAMP_OVERSHOOT }}
          style={{ transformOrigin: `${cx}px ${cy}px`, transformBox: 'fill-box' }}
        >
          <circle cx={cx} cy={cy} r={28} fill="rgba(249,115,22,0.16)" stroke="#fb923c" strokeWidth={1.5} />
          <path
            d={`M ${cx - 11} ${cy} L ${cx - 3} ${cy + 8} L ${cx + 12} ${cy - 8}`}
            fill="none"
            stroke="#fb923c"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.g>

        {/* "ALL SIX" label */}
        <motion.text
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: allSixDelay + 0.2 }}
          x={cx}
          y={cy + 56}
          textAnchor="middle"
          fontSize="11"
          fontFamily={fontMono}
          fill="#fb923c"
          letterSpacing="0.32em"
          fontWeight="bold"
        >
          ALL SIX
        </motion.text>
      </svg>
    </div>
  );
}

/**
 * Tiny numeric/text label outside each hexagon side, marking which
 * requirement maps to that side. Index → outward-radial position.
 */
function SideLabel({
  sideIndex,
  delay,
  label,
}: {
  sideIndex: number;
  delay: number;
  label: string;
}) {
  const R_LABEL = 108;
  const cx = 110;
  const cy = 110;
  // Side-mid angle = midpoint of vertex i and vertex i+1
  const ang = (Math.PI / 3) * sideIndex - Math.PI / 2 + Math.PI / 6;
  const x = cx + Math.cos(ang) * R_LABEL;
  const y = cy + Math.sin(ang) * R_LABEL;

  return (
    <motion.text
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay }}
      x={x}
      y={y}
      textAnchor="middle"
      fontSize="7.5"
      fontFamily={fontMono}
      fill="rgba(251,146,60,0.65)"
      letterSpacing="0.18em"
      fontWeight="bold"
      style={{ dominantBaseline: 'middle' }}
    >
      {label}
    </motion.text>
  );
}
