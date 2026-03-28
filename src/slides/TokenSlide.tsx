import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ResponsivePie } from '@nivo/pie';
import splashVideoUrl from '/kling_20260226_VIDEO_Take_Image_1650_0.mp4';
import unicityLogoUrl from '/UnicityLogo.svg';

const slices = [
  { id: 'Ecosystem', value: 39.3, color: '#f59e0b' },
  { id: 'Investors', value: 20, color: '#f97316' },
  { id: 'Unicity Foundation', value: 20, color: '#ec4899' },
  { id: 'Founding Team', value: 5.5, color: '#a855f7' },
  { id: 'Liquidity', value: 4, color: '#6366f1' },
  { id: 'Community Miners', value: 11.2, color: '#3b82f6' },
];

const otherL1 = [
  'Gas fees on every transaction',
  'Unpredictable costs',
  'Punishes high-frequency agents',
  'Consensus overhead = cost floor',
];

const unicityModel = [
  'Monthly fee per agent',
  'Unlimited transactions included',
  'Predictable, budgetable cost',
  'No consensus = no gas overhead',
];

const whyPossible = [
  {
    title: 'No shared ledger, validation at the edge',
    desc: 'The chain only prevents double-spending. No block production, validation at the edge, no gas market.',
  },
  {
    title: 'Marginal cost of next tx ≈ zero',
    desc: 'Once an agent is subscribed, every additional transaction is pure network throughput — no incremental cost to the chain.',
  },
  {
    title: 'Enterprise-friendly pricing',
    desc: 'Enterprises budget monthly SaaS, not volatile gas. Subscription unlocks procurement teams that gas models never reach.',
  },
];

function AnimatedPct({ value, delay }: { value: number; delay: number }) {
  const count = useMotionValue(0);
  const display = useTransform(count, (v) => {
    if (Number.isInteger(value)) return `${Math.round(v)}%`;
    return `${v.toFixed(1)}%`;
  });
  useEffect(() => {
    const c = animate(count, value, { duration: 1.5, delay, ease: [0.25, 0.1, 0.25, 1] });
    return c.stop;
  }, [value, delay, count]);
  return <motion.span>{display}</motion.span>;
}

function InteractiveDonut({ onHover }: { onHover: (id: string | null) => void }) {
  return (
    <ResponsivePie
      data={slices}
      colors={{ datum: 'data.color' }}
      margin={{ top: 6, right: 6, bottom: 6, left: 6 }}
      innerRadius={0.55}
      padAngle={1.5}
      cornerRadius={3}
      activeOuterRadiusOffset={10}
      activeInnerRadiusOffset={4}
      borderWidth={1}
      borderColor={{ from: 'color', modifiers: [['brighter', 0.3]] }}
      enableArcLinkLabels={false}
      enableArcLabels={false}
      motionConfig="wobbly"
      transitionMode="pushIn"
      onMouseEnter={(datum) => onHover(datum.id as string)}
      onMouseLeave={() => onHover(null)}
      tooltip={({ datum }) => (
        <div
          style={{
            background: 'rgba(6,6,6,0.92)',
            border: `1px solid ${datum.color}`,
            borderRadius: '8px',
            padding: '8px 14px',
            fontFamily: "'Geist Mono', monospace",
            backdropFilter: 'blur(12px)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: datum.color, boxShadow: `0 0 8px ${datum.color}` }} />
            <span style={{ color: '#fefefe', fontFamily: "'Geist Mono', monospace", fontSize: 13, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              {datum.id}
            </span>
          </div>
          <div style={{ color: datum.color, fontFamily: "'Geist Mono', monospace", fontWeight: 700, fontSize: 24, marginTop: 2 }}>
            {datum.value}%
          </div>
          <div style={{ color: 'rgba(254,254,254,0.4)', fontSize: 9, marginTop: 1 }}>
            {((datum.value / 100) * 10_000_000_000).toLocaleString()} tokens
          </div>
        </div>
      )}
      theme={{ tooltip: { container: { background: 'transparent', boxShadow: 'none', padding: 0 } } }}
      layers={['arcs', 'arcLabels', 'arcLinkLabels', 'legends', CenterLabel]}
    />
  );
}

function CenterLabel({ centerX, centerY }: { centerX: number; centerY: number }) {
  return (
    <g>
      <text x={centerX} y={centerY - 6} textAnchor="middle" dominantBaseline="central"
        fill="#fefefe" fontSize="28" fontFamily="Geist Mono, monospace" fontWeight="700" letterSpacing="0.05em">
        10B
      </text>
      <text x={centerX} y={centerY + 16} textAnchor="middle" dominantBaseline="central"
        fill="rgba(254,254,254,0.5)" fontSize="9" fontFamily="Geist Mono, monospace" letterSpacing="0.1em">
        TOTAL SUPPLY
      </text>
    </g>
  );
}

export function TokenSlide() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-y-auto">
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
        <video className="w-full h-full object-cover opacity-15" autoPlay muted loop playsInline src={splashVideoUrl} />
        <div className="absolute inset-0 bg-[#060606]/50" />
      </div>

      <div className="relative z-10 flex flex-col px-6 sm:px-10 lg:px-16 py-6 sm:py-8">

        {/* Header */}
        <div className="shrink-0">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-orange-400 text-[10px] sm:text-xs tracking-[0.4em] uppercase"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            Tokenomics
          </motion.p>
          <motion.h1 initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[28px] sm:text-[40px] lg:text-[52px] leading-[0.95] tracking-tight mt-1"
            style={{ fontFamily: "'Anton', sans-serif" }}>
            NO GAS.{' '}
            <span className="text-orange-400">SUBSCRIPTION PER AGENT.</span>
          </motion.h1>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-[2px] w-32 sm:w-48 bg-gradient-to-r from-orange-500 to-transparent origin-left mt-2" />
        </div>

        {/* Two-column: Economic Model (left) + Token Allocation (right) */}
        <div className="shrink-0 grid mt-14 gap-10" style={{ gridTemplateColumns: '1fr 1fr' }}>

          {/* ── LEFT: Economic Model ── */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-[#fefefe]/30 text-[10px] tracking-[0.3em] uppercase mb-4"
              style={{ fontFamily: "'Geist Mono', monospace" }}
            >
              Economic Model
            </motion.p>

            {/* Side-by-side comparison cards */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="grid grid-cols-2 gap-3"
            >
              {/* Every Other L1 */}
              <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] px-4 py-3.5">
                <p className="text-red-400 text-[9px] tracking-[0.2em] uppercase mb-2"
                  style={{ fontFamily: "'Geist Mono', monospace" }}>
                  Every Other L1
                </p>
                <p className="text-red-400 text-base font-bold mb-2.5"
                  style={{ fontFamily: "'Geist Mono', monospace" }}>
                  Pay per tx
                </p>
                <div className="space-y-1.5">
                  {otherL1.map((item) => (
                    <p key={item} className="text-[#fefefe]/35 text-[10px] sm:text-[11px] leading-relaxed"
                      style={{ fontFamily: "'Geist Mono', monospace" }}>
                      <span className="text-[#fefefe]/15 mr-1.5">·</span>{item}
                    </p>
                  ))}
                </div>
              </div>

              {/* Unicity */}
              <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/[0.04] px-4 py-3.5">
                <p className="text-emerald-400 text-[9px] tracking-[0.2em] uppercase mb-2"
                  style={{ fontFamily: "'Geist Mono', monospace" }}>
                  Unicity
                </p>
                <p className="text-emerald-400 text-base font-bold mb-2.5"
                  style={{ fontFamily: "'Geist Mono', monospace" }}>
                  Flat subscription
                </p>
                <div className="space-y-1.5">
                  {unicityModel.map((item) => (
                    <p key={item} className="text-[#fefefe]/35 text-[10px] sm:text-[11px] leading-relaxed"
                      style={{ fontFamily: "'Geist Mono', monospace" }}>
                      <span className="text-[#fefefe]/15 mr-1.5">·</span>{item}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Why This Is Possible */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-[#fefefe]/30 text-[10px] tracking-[0.3em] uppercase mt-6 mb-3"
              style={{ fontFamily: "'Geist Mono', monospace" }}
            >
              Why This Is Possible
            </motion.p>

            <div className="space-y-3.5">
              {whyPossible.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + i * 0.1, duration: 0.4 }}
                  className="flex gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-orange-400 shrink-0 mt-1.5" />
                  <div>
                    <p className="text-[#fefefe]/90 text-sm font-bold"
                      style={{ fontFamily: "'Geist Mono', monospace" }}>
                      {item.title}
                    </p>
                    <p className="text-[#fefefe]/40 text-[10px] sm:text-[11px] mt-1 leading-relaxed"
                      style={{ fontFamily: "'Geist Mono', monospace" }}>
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Token Allocation ── */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-[#fefefe]/30 text-[10px] tracking-[0.3em] uppercase mb-4"
              style={{ fontFamily: "'Geist Mono', monospace" }}
            >
              Token Allocation
            </motion.p>

            {/* Donut */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: 0.5, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative mx-auto"
              style={{ width: 240, height: 240 }}
            >
              <div className="absolute inset-0 bg-orange-500/[0.04] rounded-full blur-[40px] pointer-events-none" />
              <InteractiveDonut onHover={setHoveredId} />
            </motion.div>

            {/* Allocation list */}
            <div className="mt-5 space-y-2 max-w-sm mx-auto">
              {slices.map((slice, i) => {
                const isHovered = hoveredId === slice.id;
                return (
                  <motion.div
                    key={slice.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0, scale: isHovered ? 1.02 : 1 }}
                    transition={isHovered ? { scale: { duration: 0.15 } } : { delay: 0.7 + i * 0.08, duration: 0.4 }}
                    className="flex items-center gap-2.5"
                    style={{
                      filter: hoveredId && !isHovered ? 'brightness(0.4)' : 'brightness(1)',
                      transition: 'filter 0.2s ease',
                    }}
                  >
                    <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: slice.color }} />
                    <span className="text-[#fefefe]/80 text-xs flex-1"
                      style={{ fontFamily: "'Geist Mono', monospace" }}>
                      {slice.id}
                    </span>
                    <span className="text-[#fefefe] text-sm font-bold shrink-0"
                      style={{ fontFamily: "'Geist Mono', monospace" }}>
                      <AnimatedPct value={slice.value} delay={0.9 + i * 0.08} />
                    </span>
                  </motion.div>
                );
              })}
            </div>

            {/* Total supply */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
              className="text-[#fefefe]/30 text-[10px] mt-4 tracking-wider text-center"
              style={{ fontFamily: "'Geist Mono', monospace" }}
            >
              Total supply: <span className="text-[#fefefe]/55">10,000,000,000</span>
            </motion.p>
          </div>
        </div>

      </div>

      {/* Logo — fixed bottom right */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}
        className="fixed bottom-6 right-6 sm:right-10 lg:right-16 z-20">
        <img src={unicityLogoUrl} alt="Unicity" className="h-5 opacity-60" />
      </motion.div>
    </div>
  );
}
