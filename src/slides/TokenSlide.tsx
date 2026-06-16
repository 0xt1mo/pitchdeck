import { motion } from 'framer-motion';
import { useState } from 'react';
import { ResponsivePie } from '@nivo/pie';

const slices = [
  { id: 'Foundation', value: 23, color: '#9ca3af' },
  { id: 'Ecosystem Grants', value: 23, color: '#f97316' },
  { id: 'Investors', value: 20, color: '#fefefe' },
  { id: 'Team & contributors', value: 15, color: '#e5e7eb' },
  { id: 'Community', value: 15, color: '#6b7280' },
  { id: 'Exchange Liquidity', value: 4, color: '#4b5563' },
];

const chain = [
  {
    num: '01',
    title: 'Subscription = access',
    desc: 'Every agent buys a token-denominated subscription to transact.',
  },
  {
    num: '02',
    title: 'Validator yield',
    desc: 'Subscription revenue flows to the validators and Oracle operators who secure the network.',
  },
  {
    num: '03',
    title: 'Stake to operate',
    desc: "Running a validator slot requires staked token; a slot's value rises with the revenue it earns.",
  },
  {
    num: '04',
    title: 'Demand locks supply',
    desc: 'More subscribers → more revenue → more token staked and locked. Demand scales with subscriber count.',
  },
];

const phases = [
  {
    label: 'PHASE 1 — PRE-TGE',
    title: 'Centralized operation',
    desc: 'Unicity Labs operates BFT validators and Oracle. Network is free to use. No token.',
    active: false,
  },
  {
    label: 'PHASE 2 — TGE @ ADOPTION THRESHOLDS',
    title: 'Permissionless validators',
    desc: 'Token launches. Validator slots open to permissionless operators. Subscription monetization activates.',
    active: true,
  },
  {
    label: 'PHASE 3 — POST-TGE',
    title: 'Permissionless oracle',
    desc: 'Oracle nodes decentralize. Foundation becomes one operator among many. Slashing live.',
    active: false,
  },
];

function CenterLabel({ centerX, centerY }: { centerX: number; centerY: number }) {
  return (
    <g>
      <text x={centerX} y={centerY - 6} textAnchor="middle" dominantBaseline="central"
        fill="#fefefe" fontSize="22" fontFamily="Anton, sans-serif" letterSpacing="0.05em">10B</text>
      <text x={centerX} y={centerY + 14} textAnchor="middle" dominantBaseline="central"
        fill="rgba(254,254,254,0.5)" fontSize="9" fontFamily="Geist Mono, monospace">SUPPLY</text>
    </g>
  );
}

function InteractiveDonut({ onHover }: { onHover: (id: string | null) => void }) {
  return (
    <ResponsivePie
      data={slices}
      colors={{ datum: 'data.color' }}
      margin={{ top: 5, right: 5, bottom: 5, left: 5 }}
      innerRadius={0.62}
      padAngle={1.2}
      cornerRadius={2}
      activeOuterRadiusOffset={6}
      activeInnerRadiusOffset={3}
      borderWidth={0}
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
      <div className="relative z-10 h-full flex flex-col px-8 sm:px-12 lg:px-16 py-6 sm:py-8 lg:py-10 justify-center gap-4">

        {/* Header */}
        <div className="shrink-0">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-orange-400 text-[10px] sm:text-xs tracking-[0.4em] uppercase"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            Token Design and Tokenomics
          </motion.p>
          <motion.h1 initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[24px] sm:text-[32px] lg:text-[40px] leading-[1.05] tracking-tight mt-1"
            style={{ fontFamily: "'Anton', sans-serif" }}>
            TOKEN DEMAND SCALES WITH <span className="text-orange-400">NETWORK REVENUE</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="mt-2 text-[#fefefe]/85 text-xs sm:text-sm lg:text-base max-w-5xl leading-relaxed"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            Every agent needs a token-denominated subscription to transact. The token is gas, not a means of payment — so demand scales directly with network usage.
          </motion.p>
        </div>

        {/* Top section: mechanical chain + allocation */}
        <div className="grid grid-cols-2 gap-8 lg:gap-12 shrink-0">

          {/* Left — Mechanical chain */}
          <div className="flex flex-col gap-3">
            <p className="text-orange-400 text-[10px] sm:text-xs tracking-[0.3em] uppercase font-bold"
              style={{ fontFamily: "'Geist Mono', monospace" }}>
              The Mechanical Chain
            </p>
            <div className="flex flex-col gap-3">
              {chain.map((c, i) => (
                <motion.div
                  key={c.num}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.08, duration: 0.4 }}
                  className="flex gap-4 items-start"
                >
                  <span className="text-orange-400 text-sm sm:text-base font-bold shrink-0 w-6"
                    style={{ fontFamily: "'Geist Mono', monospace" }}>
                    {c.num}
                  </span>
                  <div className="flex-1">
                    <p className="text-[#fefefe] text-base sm:text-lg leading-tight"
                      style={{ fontFamily: "'Geist Mono', monospace" }}>
                      {c.title}
                    </p>
                    <p className="text-[#fefefe]/60 text-xs sm:text-sm leading-relaxed mt-0.5"
                      style={{ fontFamily: "'Geist Mono', monospace" }}>
                      {c.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right — Allocation + vesting */}
          <div className="flex flex-col gap-3">
            <p className="text-orange-400 text-[10px] sm:text-xs tracking-[0.3em] uppercase font-bold"
              style={{ fontFamily: "'Geist Mono', monospace" }}>
              Allocation — Initial 10B Supply
            </p>

            <div className="flex items-center gap-4 lg:gap-6">
              {/* Donut */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="shrink-0 w-[160px] h-[160px] sm:w-[180px] sm:h-[180px] lg:w-[200px] lg:h-[200px]"
              >
                <InteractiveDonut onHover={setHoveredId} />
              </motion.div>

              {/* Legend */}
              <div className="flex-1 grid grid-cols-[1fr_auto] gap-x-3 gap-y-1.5">
                {slices.map((slice, i) => {
                  const isHovered = hoveredId === slice.id;
                  return (
                    <motion.div
                      key={slice.id}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + i * 0.05, duration: 0.3 }}
                      className="contents"
                      style={{ filter: hoveredId && !isHovered ? 'brightness(0.4)' : 'brightness(1)' }}
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <div className="w-2 h-2 rounded-full shrink-0"
                          style={{ backgroundColor: slice.color, boxShadow: isHovered ? `0 0 8px ${slice.color}` : 'none' }} />
                        <span className="text-[#fefefe]/85 text-xs sm:text-sm leading-snug truncate"
                          style={{ fontFamily: "'Geist Mono', monospace" }}>
                          {slice.id}
                        </span>
                      </div>
                      <span className="text-[#fefefe] text-xs sm:text-sm font-bold tabular-nums"
                        style={{ fontFamily: "'Geist Mono', monospace" }}>
                        {`${slice.value}%`}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Vesting */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="pt-2 border-t border-white/[0.08]"
            >
              <p className="text-orange-400 text-[10px] sm:text-xs tracking-[0.3em] uppercase font-bold"
                style={{ fontFamily: "'Geist Mono', monospace" }}>
                Vesting
              </p>
              <p className="text-[#fefefe]/75 text-xs sm:text-sm leading-relaxed mt-1.5"
                style={{ fontFamily: "'Geist Mono', monospace" }}>
                Uncapped supply, 5%→2% inflation tail funding validators. Standard cliffs and linear vesting for team and investors; full schedule in the tokenomics doc.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Path to decentralization */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.5 }}
          className="shrink-0"
        >
          <p className="text-orange-400 text-[10px] sm:text-xs tracking-[0.3em] uppercase font-bold mb-3"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            Path to Decentralization
          </p>

          <div className="grid grid-cols-3 gap-4 lg:gap-5">
            {phases.map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 + i * 0.1, duration: 0.4 }}
                className="rounded-lg p-3 lg:p-4"
                style={{
                  background: p.active ? 'rgba(249,115,22,0.07)' : 'rgba(255,255,255,0.025)',
                  border: p.active ? '1px solid rgba(249,115,22,0.5)' : '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <div className="flex items-center gap-2">
                  <span
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{
                      background: p.active ? '#f97316' : 'rgba(254,254,254,0.3)',
                      boxShadow: p.active ? '0 0 8px rgba(249,115,22,0.5)' : 'none',
                    }}
                  />
                  <p
                    className="text-[10px] sm:text-xs tracking-[0.18em] font-bold uppercase"
                    style={{
                      fontFamily: "'Geist Mono', monospace",
                      color: p.active ? '#f97316' : 'rgba(254,254,254,0.5)',
                    }}
                  >
                    {p.label}
                  </p>
                </div>
                <p
                  className="text-[#fefefe] text-base sm:text-lg lg:text-xl tracking-tight mt-1.5"
                  style={{ fontFamily: "'Anton', sans-serif", letterSpacing: '0.02em' }}
                >
                  {p.title.toUpperCase()}
                </p>
                <p
                  className="text-[#fefefe]/65 text-[11px] sm:text-xs leading-relaxed mt-1.5"
                  style={{ fontFamily: "'Geist Mono', monospace" }}
                >
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
}
