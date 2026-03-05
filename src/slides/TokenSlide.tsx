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
      margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
      innerRadius={0.5}
      padAngle={1.5}
      cornerRadius={4}
      activeOuterRadiusOffset={14}
      activeInnerRadiusOffset={6}
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
            padding: '10px 16px',
            fontFamily: "'Geist Mono', monospace",
            backdropFilter: 'blur(12px)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div
              style={{
                width: 10,
                height: 10,
                borderRadius: '50%',
                backgroundColor: datum.color,
                boxShadow: `0 0 8px ${datum.color}`,
              }}
            />
            <span style={{ color: '#fefefe', fontFamily: "'Anton', sans-serif", fontSize: 14, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              {datum.id}
            </span>
          </div>
          <div style={{ color: datum.color, fontFamily: "'Anton', sans-serif", fontSize: 28, marginTop: 4 }}>
            {datum.value}%
          </div>
          <div style={{ color: 'rgba(254,254,254,0.4)', fontSize: 10, marginTop: 2 }}>
            {((datum.value / 100) * 10_000_000_000).toLocaleString()} tokens
          </div>
        </div>
      )}
      theme={{
        tooltip: {
          container: {
            background: 'transparent',
            boxShadow: 'none',
            padding: 0,
          },
        },
      }}
      layers={['arcs', 'arcLabels', 'arcLinkLabels', 'legends', CenterLabel]}
    />
  );
}

function CenterLabel({ centerX, centerY }: { centerX: number; centerY: number }) {
  return (
    <g>
      <text
        x={centerX}
        y={centerY - 8}
        textAnchor="middle"
        dominantBaseline="central"
        fill="#fefefe"
        fontSize="36"
        fontFamily="Anton, sans-serif"
        letterSpacing="0.05em"
      >
        10B
      </text>
      <text
        x={centerX}
        y={centerY + 22}
        textAnchor="middle"
        dominantBaseline="central"
        fill="rgba(254,254,254,0.5)"
        fontSize="12"
        fontFamily="Geist Mono, monospace"
      >
        TOTAL SUPPLY
      </text>
    </g>
  );
}

export function TokenSlide() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-y-auto">
      {/* Video background */}
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
        <video className="w-full h-full object-cover opacity-40" autoPlay muted loop playsInline src={splashVideoUrl} />
        <div className="absolute inset-0 bg-[#060606]/20" />
      </div>

      <div className="relative z-10 h-full flex flex-col px-6 sm:px-10 lg:px-16 py-6 sm:py-8">

        {/* Header */}
        <div className="shrink-0">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-orange-400 text-[10px] sm:text-xs tracking-[0.4em] uppercase"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            Tokenomics
          </motion.p>
          <motion.h1 initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[32px] sm:text-[44px] lg:text-[56px] leading-[0.95] tracking-tight mt-1"
            style={{ fontFamily: "'Anton', sans-serif" }}>
            GENESIS{' '}
            <span className="text-orange-400">TOKEN ALLOCATION</span>
          </motion.h1>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-[2px] w-32 sm:w-48 bg-gradient-to-r from-orange-500 to-transparent origin-left mt-2" />
        </div>

        {/* Main: chart + breakdown */}
        <div className="flex-1 flex items-center gap-8 sm:gap-12 lg:gap-16 mt-4 min-h-0">

          {/* Donut chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -20 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="shrink-0 w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] lg:w-[400px] lg:h-[400px] relative"
          >
            {/* Background glow */}
            <div className="absolute inset-0 bg-orange-500/[0.06] rounded-full blur-[60px] pointer-events-none" />
            <InteractiveDonut onHover={setHoveredId} />
          </motion.div>

          {/* Allocation breakdown */}
          <div className="flex-1 space-y-3 sm:space-y-4">
            {slices.map((slice, i) => {
              const isHovered = hoveredId === slice.id;
              return (
                <motion.div
                  key={slice.id}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    scale: isHovered ? 1.03 : 1,
                  }}
                  transition={isHovered
                    ? { scale: { duration: 0.2 } }
                    : { delay: 0.6 + i * 0.1, duration: 0.5 }
                  }
                  className="flex items-center gap-4 transition-all duration-200"
                  style={{
                    filter: hoveredId && !isHovered ? 'brightness(0.4)' : 'brightness(1)',
                    transition: 'filter 0.2s ease',
                  }}
                >
                  {/* Color dot */}
                  <div
                    className="w-3 h-3 rounded-full shrink-0 transition-all duration-200"
                    style={{
                      backgroundColor: slice.color,
                      boxShadow: isHovered ? `0 0 12px ${slice.color}` : 'none',
                    }}
                  />

                  {/* Bar + label */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline justify-between mb-1">
                      <span className="text-[#fefefe]/90 text-sm sm:text-base uppercase tracking-wide"
                        style={{ fontFamily: "'Anton', sans-serif" }}>
                        {slice.id}
                      </span>
                      <span className="text-[#fefefe] text-lg sm:text-xl font-black ml-3"
                        style={{ fontFamily: "'Anton', sans-serif" }}>
                        <AnimatedPct value={slice.value} delay={0.8 + i * 0.1} />
                      </span>
                    </div>
                    {/* Progress bar */}
                    <div className="h-1.5 w-full rounded-full bg-white/[0.05] overflow-hidden">
                      <motion.div
                        className="h-full rounded-full transition-shadow duration-200"
                        style={{
                          backgroundColor: slice.color,
                          boxShadow: isHovered ? `0 0 10px ${slice.color}` : 'none',
                        }}
                        initial={{ width: '0%' }}
                        animate={{ width: `${slice.value}%` }}
                        transition={{ delay: 0.8 + i * 0.1, duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Total supply callout */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.8 }}
              className="pt-3 sm:pt-4 border-t border-white/[0.06]"
            >
              <p className="text-[#fefefe]/40 text-[11px] sm:text-xs tracking-wider"
                style={{ fontFamily: "'Geist Mono', monospace" }}>
                Total Genesis Supply:{' '}
                <span className="text-[#fefefe]/70">10,000,000,000 tokens</span>
              </p>
            </motion.div>
          </div>

        </div>

        {/* Logo */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }}
          className="shrink-0 mt-3 flex justify-end">
          <img src={unicityLogoUrl} alt="Unicity" className="h-5 opacity-60" />
        </motion.div>

      </div>
    </div>
  );
}
