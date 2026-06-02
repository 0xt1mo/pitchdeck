import { motion } from 'framer-motion';
import { SlideFrame } from '../../components/SlideFrame';

const fontTitle = "'Anton', sans-serif";
const fontMono = "'Geist Mono', monospace";

/**
 * Category-beat slide.
 *
 * The argument is the slide. Three columns — HUMANS, SOFTWARE, AGENTS —
 * compared on the same three controls a CISO already trusts (Access,
 * Detection, Posture). Columns 1 and 2 show ✓ / works. Column 3 is the
 * AGENTS column, dominant in orange, with red ✗ on every row and the
 * one-line reason underneath. The visible gap is the slide.
 */

interface ControlRow {
  label: string;
  pass: { status: 'pass'; note: string };
  fail: { status: 'fail'; reason: string };
}

const controls: ControlRow[] = [
  {
    label: 'Access control',
    pass: { status: 'pass', note: 'deny what the role can do' },
    fail: { status: 'fail', reason: 'auth passes — authorisation is satisfied' },
  },
  {
    label: 'Detection',
    pass: { status: 'pass', note: 'signatures, heuristics, EDR' },
    fail: { status: 'fail', reason: 'the action already executed' },
  },
  {
    label: 'Posture',
    pass: { status: 'pass', note: 'baseline before execution' },
    fail: { status: 'fail', reason: 'no stable baseline persists between scans' },
  },
];

// ─────────────── Column glyphs ───────────────
function HumanGlyph({ color }: { color: string }) {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true">
      <circle cx={20} cy={13} r={5.5} fill="none" stroke={color} strokeWidth={1.6} />
      <path
        d="M9 33 C 9 24, 31 24, 31 33"
        fill="none"
        stroke={color}
        strokeWidth={1.6}
        strokeLinecap="round"
      />
    </svg>
  );
}

function SoftwareGlyph({ color }: { color: string }) {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" aria-hidden="true">
      <path
        d="M14 12 L6 20 L14 28"
        fill="none"
        stroke={color}
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26 12 L34 20 L26 28"
        fill="none"
        stroke={color}
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1={23}
        y1={9}
        x2={17}
        y2={31}
        stroke={color}
        strokeWidth={1.6}
        strokeLinecap="round"
        opacity={0.65}
      />
    </svg>
  );
}

function AgentGlyph({ color }: { color: string }) {
  const r = 16;
  const points = Array.from({ length: 6 })
    .map((_, i) => {
      const ang = (Math.PI / 3) * i - Math.PI / 2;
      return `${(20 + Math.cos(ang) * r).toFixed(1)},${(20 + Math.sin(ang) * r).toFixed(1)}`;
    })
    .join(' ');
  return (
    <svg width="44" height="44" viewBox="0 0 40 40" aria-hidden="true">
      <polygon points={points} fill={`${color}18`} stroke={color} strokeWidth={1.8} />
      <circle cx={20} cy={20} r={3.5} fill={color} />
      <circle cx={20} cy={20} r={6} fill="none" stroke={color} strokeWidth={1} opacity={0}>
        <animate attributeName="r" from="6" to="18" dur="2.4s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.7;0" dur="2.4s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

// ─────────────── Status marks ───────────────
function CheckMark() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
      <motion.path
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        d="M2 7.5 L5.5 11 L12 3.5"
        fill="none"
        stroke="#34d399"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CrossMark() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
      <motion.path
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        d="M3 3 L11 11"
        fill="none"
        stroke="#f87171"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <motion.path
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        d="M11 3 L3 11"
        fill="none"
        stroke="#f87171"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </svg>
  );
}

// ─────────────── Column ───────────────
interface ColumnProps {
  glyph: 'human' | 'software' | 'agent';
  label: string;
  identity: string;
  rows: { control: string; status: 'pass' | 'fail'; note: string }[];
  emphasis?: boolean;
  delayBase?: number;
}

function Column({ glyph, label, identity, rows, emphasis, delayBase = 0.4 }: ColumnProps) {
  const accent = emphasis ? '#fb923c' : 'rgba(255,255,255,0.55)';
  const titleColor = emphasis ? '#fb923c' : '#fefefe';

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delayBase, duration: 0.55 }}
      className="rounded-lg p-5 lg:p-6 flex flex-col gap-4 relative overflow-hidden"
      style={{
        background: emphasis ? 'rgba(249,115,22,0.07)' : 'rgba(255,255,255,0.025)',
        border: emphasis
          ? '1px solid rgba(249,115,22,0.45)'
          : '1px solid rgba(255,255,255,0.08)',
        boxShadow: emphasis
          ? '0 0 0 1px rgba(249,115,22,0.15) inset, 0 18px 60px -20px rgba(249,115,22,0.30)'
          : 'none',
      }}
    >
      {/* Top accent bar for emphasized column */}
      {emphasis && (
        <div
          className="absolute top-0 left-0 right-0 h-[3px]"
          style={{
            background:
              'linear-gradient(90deg, rgba(249,115,22,0) 0%, rgba(249,115,22,0.95) 50%, rgba(249,115,22,0) 100%)',
          }}
        />
      )}

      {/* Glyph + label row */}
      <div className="flex items-center gap-3">
        {glyph === 'human' && <HumanGlyph color={accent} />}
        {glyph === 'software' && <SoftwareGlyph color={accent} />}
        {glyph === 'agent' && <AgentGlyph color={accent} />}
        <div className="flex-1 min-w-0">
          <p
            className="text-[26px] lg:text-[34px] leading-none tracking-tight"
            style={{ color: titleColor, fontFamily: fontTitle, letterSpacing: '0.03em' }}
          >
            {label}
          </p>
          <p
            className="text-[10px] lg:text-[11px] uppercase tracking-[0.22em] font-bold mt-1.5"
            style={{
              color: emphasis ? 'rgba(251,146,60,0.85)' : 'rgba(255,255,255,0.45)',
              fontFamily: fontMono,
            }}
          >
            {identity}
          </p>
        </div>
      </div>

      {/* Divider */}
      <div
        className="h-px w-full"
        style={{
          background: emphasis
            ? 'linear-gradient(to right, rgba(249,115,22,0.35), transparent)'
            : 'rgba(255,255,255,0.08)',
        }}
      />

      {/* Control rows */}
      <div className="flex flex-col gap-3">
        {rows.map((r, i) => (
          <motion.div
            key={r.control}
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: delayBase + 0.25 + i * 0.08 }}
            className="grid grid-cols-[18px_1fr] gap-3 items-start"
          >
            <div className="pt-[3px]">
              {r.status === 'pass' ? <CheckMark /> : <CrossMark />}
            </div>
            <div className="min-w-0">
              <p
                className="text-[#fefefe] text-[12.5px] lg:text-[14px] font-bold leading-tight"
                style={{ fontFamily: fontMono }}
              >
                {r.control}
              </p>
              <p
                className="text-[10.5px] lg:text-[12px] leading-snug mt-1"
                style={{
                  color: r.status === 'pass'
                    ? 'rgba(254,254,254,0.55)'
                    : 'rgba(248,113,113,0.85)',
                  fontFamily: fontMono,
                }}
              >
                {r.note}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export function SalesAgentReachSlide() {
  return (
    <SlideFrame
      title="BUILT FOR HUMANS. BUILT FOR SOFTWARE."
      accent="AGENTS ARE NEITHER."
      subtitle={
        <>
          A human can be denied access. Software can be patched.{' '}
          <span className="text-orange-400 font-bold">
            An agent authenticates legitimately, decides on its own, and behaves unpredictably between audits.
          </span>
        </>
      }
      bodyGap="gap-6 lg:gap-7"
    >
        {/* Three-column hero — the argument */}
        <div className="grid grid-cols-[1fr_1fr_1.35fr] gap-4 lg:gap-5 shrink-0">
          <Column
            glyph="human"
            label="HUMANS"
            identity="bound to a person"
            delayBase={0.35}
            rows={[
              { control: controls[0].label, status: 'pass', note: controls[0].pass.note },
              { control: controls[1].label, status: 'pass', note: controls[1].pass.note },
              { control: controls[2].label, status: 'pass', note: controls[2].pass.note },
            ]}
          />
          <Column
            glyph="software"
            label="SOFTWARE"
            identity="bound to a binary"
            delayBase={0.5}
            rows={[
              { control: controls[0].label, status: 'pass', note: controls[0].pass.note },
              { control: controls[1].label, status: 'pass', note: controls[1].pass.note },
              { control: controls[2].label, status: 'pass', note: controls[2].pass.note },
            ]}
          />
          <Column
            glyph="agent"
            label="AGENTS"
            identity="authenticated · autonomous · behaviour shifts"
            emphasis
            delayBase={0.65}
            rows={[
              { control: controls[0].label, status: 'fail', note: controls[0].fail.reason },
              { control: controls[1].label, status: 'fail', note: controls[1].fail.reason },
              { control: controls[2].label, status: 'fail', note: controls[2].fail.reason },
            ]}
          />
        </div>

        {/* Closer — single line, weaves Windows 95 hook + punch */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.25 }}
          className="rounded-md px-5 py-4 shrink-0 grid grid-cols-[auto_1fr_auto] items-center gap-5"
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
            Where we are
          </p>
          <p
            className="text-[#fefefe] text-sm lg:text-[17px] leading-snug"
            style={{ fontFamily: fontMono }}
          >
            Today&apos;s agent stack is{' '}
            <span className="text-orange-400 font-bold">Windows 95 in 1995</span> —{' '}
            <span className="text-[#fefefe]/75">connected to the network before anyone built the controls underneath.</span>
          </p>
          <p
            className="text-[#fefefe]/40 text-[10px] lg:text-[11px] uppercase tracking-[0.22em] whitespace-nowrap"
            style={{ fontFamily: fontMono }}
          >
            Your existing security stack can&apos;t catch it.
          </p>
        </motion.div>
    </SlideFrame>
  );
}
