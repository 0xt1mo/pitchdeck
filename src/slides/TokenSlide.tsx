import { motion } from 'framer-motion';
import { useState } from 'react';
import { ResponsivePie } from '@nivo/pie';

const slices = [
  { id: 'Ecosystem', value: 39.3, color: '#f59e0b' },
  { id: 'Investors', value: 20, color: '#f97316' },
  { id: 'Foundation', value: 20, color: '#ec4899' },
  { id: 'Community', value: 11.2, color: '#3b82f6' },
  { id: 'Founding Team', value: 5.5, color: '#a855f7' },
  { id: 'Liquidity', value: 4, color: '#6366f1' },
];

const pillars = [
  { title: 'ACCESS', desc: 'Agents subscribe in native token.\nStaking unlocks capacity and reduced fees.', color: '#f59e0b' },
  { title: 'DECENTRALISATION', desc: 'Validators and oracles compensated in token. Incentives aligned with growth.', color: '#3b82f6' },
  { title: 'VALUE ACCRUAL', desc: 'Every new agent increases utility demand. Token value tracks active agent count.', color: '#22c55e' },
];


function CenterLabel({ centerX, centerY }: { centerX: number; centerY: number }) {
  return (
    <g>
      <text x={centerX} y={centerY - 8} textAnchor="middle" dominantBaseline="central"
        fill="#fefefe" fontSize="22" fontFamily="Anton, sans-serif" letterSpacing="0.05em">10B</text>
      <text x={centerX} y={centerY + 14} textAnchor="middle" dominantBaseline="central"
        fill="rgba(254,254,254,0.5)" fontSize="9" fontFamily="Geist Mono, monospace">TOTAL SUPPLY</text>
    </g>
  );
}

function InteractiveDonut({ onHover }: { onHover: (id: string | null) => void }) {
  return (
    <ResponsivePie
      data={slices}
      colors={{ datum: 'data.color' }}
      margin={{ top: 5, right: 5, bottom: 5, left: 5 }}
      innerRadius={0.5}
      padAngle={1.5}
      cornerRadius={4}
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
        <div style={{
          background: 'rgba(6,6,6,0.92)', border: `1px solid ${datum.color}`,
          borderRadius: '8px', padding: '8px 14px', fontFamily: "'Geist Mono', monospace",
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: datum.color }} />
            <span style={{ color: '#fefefe', fontFamily: "'Anton', sans-serif", fontSize: 13 }}>{datum.id}</span>
          </div>
          <div style={{ color: datum.color, fontFamily: "'Anton', sans-serif", fontSize: 24, marginTop: 2 }}>{datum.value}%</div>
        </div>
      )}
      theme={{ tooltip: { container: { background: 'transparent', boxShadow: 'none', padding: 0 } } }}
      layers={['arcs', 'arcLabels', 'arcLinkLabels', 'legends', CenterLabel]}
    />
  );
}

export function TokenSlide() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col px-8 sm:px-12 lg:px-20 py-8 sm:py-10 lg:py-12">

        {/* Header */}
        <div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-orange-400 text-[10px] sm:text-xs tracking-[0.4em] uppercase"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            Tokenomics
          </motion.p>
          <motion.h1 initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[32px] sm:text-[44px] lg:text-[56px] leading-[0.95] tracking-tight mt-2"
            style={{ fontFamily: "'Anton', sans-serif" }}>
            TOKEN <span className="text-orange-400">MODEL & ALLOCATION</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="mt-2 text-[#fefefe]/70 text-xs sm:text-sm max-w-3xl"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            Utility primitive, not a speculative asset. Agents pay a subscription that can be settled in stables or native token — paying in native token unlocks more capacity and value. Subscription revenue is redistributed to network participants.
          </motion.p>
        </div>

        {/* Main content: three pillars left, donut + breakdown right */}
        <div className="flex-1 flex gap-8 lg:gap-12 mt-5 min-h-0">

          {/* Left — token model */}
          <div className="flex flex-col justify-center gap-5" style={{ width: '40%' }}>
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.12, duration: 0.5 }}
                className="pl-4 border-l-[3px]"
                style={{ borderColor: p.color }}
              >
                <h3 className="text-[20px] sm:text-[24px] lg:text-[28px] leading-none tracking-tight"
                  style={{ fontFamily: "'Anton', sans-serif", color: p.color }}>
                  {p.title}
                </h3>
                <p className="text-[#fefefe]/55 text-[11px] sm:text-xs leading-relaxed mt-2 whitespace-pre-line"
                  style={{ fontFamily: "'Geist Mono', monospace" }}>
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Right — donut + breakdown */}
          <div className="flex-1 flex items-center gap-6 lg:gap-8 min-h-0">

            {/* Donut */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="shrink-0 w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] lg:w-[300px] lg:h-[300px] relative"
            >
              <div className="absolute inset-0 bg-orange-500/[0.04] rounded-full blur-[40px] pointer-events-none" />
              <InteractiveDonut onHover={setHoveredId} />
            </motion.div>

            {/* Breakdown */}
            <div className="flex-1 space-y-2.5">
              {slices.map((slice, i) => {
                const isHovered = hoveredId === slice.id;
                return (
                  <motion.div
                    key={slice.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + i * 0.08, duration: 0.4 }}
                    className="flex items-center gap-3 transition-all duration-200"
                    style={{ filter: hoveredId && !isHovered ? 'brightness(0.4)' : 'brightness(1)', transition: 'filter 0.2s ease' }}
                  >
                    <div className="w-2.5 h-2.5 rounded-full shrink-0"
                      style={{ backgroundColor: slice.color, boxShadow: isHovered ? `0 0 10px ${slice.color}` : 'none' }} />
                    <span className="text-[#fefefe]/80 text-xs sm:text-sm uppercase tracking-wide flex-1"
                      style={{ fontFamily: "'Anton', sans-serif" }}>
                      {slice.id}
                    </span>
                    <span className="text-[#fefefe] text-sm sm:text-base font-black"
                      style={{ fontFamily: "'Anton', sans-serif" }}>
                      {Number.isInteger(slice.value) ? `${slice.value}%` : `${slice.value}%`}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
