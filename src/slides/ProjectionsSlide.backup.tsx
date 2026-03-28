import { motion } from 'framer-motion';
import splashVideoUrl from '/kling_20260226_VIDEO_Take_Image_1650_0.mp4';
import unicityLogoUrl from '/UnicityLogo.svg';

const years = ["H2 '26", '2027', '2028', '2029'];

const streams = [
  { name: 'Infrastructure', color: '#3b82f6', values: [0.3, 2.2, 7, 18] },
  { name: 'Marketplaces', color: '#a855f7', values: [0, 0.4, 3.5, 16] },
  { name: 'Vertical', color: '#10b981', values: [0, 0.2, 1.8, 8] },
];

const totals = [0.3, 2.8, 12, 42];
const maxTotal = 46;
const chartH = 380; // px

const keyMetrics = [
  { label: 'Enterprise customers', value: '150+' },
  { label: 'Active agents (DAA)', value: '3M+' },
  { label: 'Avg. contract value', value: '$120K' },
  { label: 'Gross margin', value: '75%+' },
];

const assumptions = [
  "Infra: 3 design partners H2 '26, channel-led scale from mid-'27",
  "Marketplaces: launch Q1 '27, network effects from ~50K DAA",
  "Vertical: pilot pools '27, regulatory approval drives '28-29 ramp",
  'Does not include token economics or secondary revenue',
];

function formatM(v: number) {
  if (v === 0) return '–';
  return `$${v}M`;
}

export function ProjectionsSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-y-auto">
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
        <video className="w-full h-full object-cover opacity-15" autoPlay muted loop playsInline src={splashVideoUrl} />
        <div className="absolute inset-0 bg-[#060606]/50" />
      </div>

      <div className="relative z-10 h-full flex flex-col px-6 sm:px-10 lg:px-16 py-6 sm:py-8">

        {/* Header */}
        <div className="shrink-0">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-orange-400 text-[10px] sm:text-xs tracking-[0.4em] uppercase"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            Projections
          </motion.p>
          <motion.h1 initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[28px] sm:text-[40px] lg:text-[52px] leading-[0.95] tracking-tight mt-1"
            style={{ fontFamily: "'Anton', sans-serif" }}>
            THREE REVENUE STREAMS.{' '}
            <span className="text-orange-400">DIFFERENT GROWTH PROFILES.</span>
          </motion.h1>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-[2px] w-32 sm:w-48 bg-gradient-to-r from-orange-500 to-transparent origin-left mt-2" />
        </div>

        {/* Two-column layout */}
        <div className="shrink-0 flex mt-6 min-h-0" style={{ gap: '5%' }}>

          {/* ── LEFT: Bar chart ── */}
          <div className="shrink-0 flex flex-col" style={{ width: '42%' }}>

            {/* Chart with fixed pixel height */}
            <div className="relative" style={{ height: chartH, marginLeft: 44 }}>

              {/* Y-axis gridlines */}
              {[10, 20, 30, 40].map((v) => (
                <div key={v} className="absolute left-0 right-0"
                  style={{ bottom: (v / maxTotal) * chartH }}>
                  <div className="border-t border-white/[0.05] w-full" />
                  <span
                    className="absolute right-full mr-2 -translate-y-1/2 text-[#fefefe]/20 text-[10px] whitespace-nowrap"
                    style={{ fontFamily: "'Geist Mono', monospace" }}
                  >
                    ${v}M
                  </span>
                </div>
              ))}

              {/* Bars */}
              <div className="absolute inset-0 flex items-end" style={{ gap: '12%' }}>
                {years.map((year, yi) => {
                  const total = totals[yi];
                  const barPx = (total / maxTotal) * chartH;

                  return (
                    <div key={year} className="flex-1 flex flex-col items-center justify-end h-full">

                      {/* Total label */}
                      <motion.span
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 + yi * 0.15 }}
                        className="text-[#fefefe] mb-2 shrink-0"
                        style={{ fontFamily: "'Geist Mono', monospace", fontSize: 15, fontWeight: 700 }}
                      >
                        ${total}M
                      </motion.span>

                      {/* Stacked bar — fixed pixel height */}
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: barPx }}
                        transition={{ delay: 0.5 + yi * 0.12, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                        className="w-full flex flex-col-reverse rounded-t overflow-hidden shrink-0"
                      >
                        {streams.map((stream, si) => {
                          const segVal = stream.values[yi];
                          if (total === 0 || segVal === 0) return null;
                          const segPct = (segVal / total) * 100;
                          return (
                            <div
                              key={stream.name}
                              className="w-full"
                              style={{
                                height: `${segPct}%`,
                                backgroundColor: stream.color,
                                opacity: 0.65 + yi * 0.08,
                                borderTop: si > 0 ? '2px solid rgba(6,6,6,0.6)' : undefined,
                              }}
                            />
                          );
                        })}
                      </motion.div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Year labels */}
            <div className="flex mt-3" style={{ marginLeft: 44, gap: '12%' }}>
              {years.map((year) => (
                <div key={year} className="flex-1 text-center">
                  <span className="text-[#fefefe]/35 text-[11px]"
                    style={{ fontFamily: "'Geist Mono', monospace" }}>
                    {year}
                  </span>
                </div>
              ))}
            </div>

            {/* Legend */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.4 }}
              className="flex items-center gap-5 mt-5"
              style={{ marginLeft: 44 }}
            >
              {streams.map((s) => (
                <div key={s.name} className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-[2px]" style={{ backgroundColor: s.color, opacity: 0.8 }} />
                  <span className="text-[#fefefe]/35 text-[11px]"
                    style={{ fontFamily: "'Geist Mono', monospace" }}>
                    {s.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: Tables ── */}
          <div className="flex-1 flex flex-col gap-6 min-w-0 mt-10">

            {/* ARR Table */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <p className="text-[#fefefe]/25 text-[10px] tracking-[0.3em] uppercase mb-3"
                style={{ fontFamily: "'Geist Mono', monospace" }}>
                ARR
              </p>

              {/* Column headers */}
              <div className="grid items-center pb-2 mb-1"
                style={{ gridTemplateColumns: '130px repeat(4, 1fr)' }}>
                <div />
                {years.map((y) => (
                  <span key={y} className="text-[#fefefe]/30 text-[10px] text-right tracking-[0.1em]"
                    style={{ fontFamily: "'Geist Mono', monospace" }}>
                    {y}
                  </span>
                ))}
              </div>

              {/* Stream rows */}
              {streams.map((s) => (
                <div key={s.name} className="grid items-center py-2.5 border-b border-white/[0.04]"
                  style={{ gridTemplateColumns: '130px repeat(4, 1fr)' }}>
                  <span className="text-sm font-bold"
                    style={{ fontFamily: "'Geist Mono', monospace", color: s.color }}>
                    {s.name}
                  </span>
                  {s.values.map((v, vi) => (
                    <span key={vi} className="text-[#fefefe]/60 text-xs text-right"
                      style={{ fontFamily: "'Geist Mono', monospace" }}>
                      {formatM(v)}
                    </span>
                  ))}
                </div>
              ))}

              {/* Total row */}
              <div className="grid items-center py-2.5 border-t border-white/[0.08]"
                style={{ gridTemplateColumns: '130px repeat(4, 1fr)' }}>
                <span className="text-[#fefefe]/80 text-sm font-bold"
                  style={{ fontFamily: "'Geist Mono', monospace" }}>
                  Total
                </span>
                {totals.map((t, ti) => (
                  <span key={ti} className="text-[#fefefe] text-xs sm:text-sm text-right font-bold"
                    style={{ fontFamily: "'Geist Mono', monospace" }}>
                    ${t}M
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Key Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              <p className="text-[#fefefe]/25 text-[10px] tracking-[0.3em] uppercase mb-3"
                style={{ fontFamily: "'Geist Mono', monospace" }}>
                Key Metrics by 2029
              </p>
              <div className="grid grid-cols-2 gap-x-8 gap-y-2">
                {keyMetrics.map((m) => (
                  <div key={m.label} className="flex items-baseline justify-between gap-3">
                    <span className="text-[#fefefe]/45 text-[11px]"
                      style={{ fontFamily: "'Geist Mono', monospace" }}>
                      {m.label}
                    </span>
                    <span className="text-[#fefefe] text-sm font-bold shrink-0"
                      style={{ fontFamily: "'Geist Mono', monospace" }}>
                      {m.value}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>

        {/* Key Assumptions — full width */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          className="shrink-0 mt-6 rounded-lg border border-white/[0.06] bg-white/[0.02] px-5 py-4"
        >
          <p className="text-[#fefefe]/25 text-[10px] tracking-[0.3em] uppercase mb-2.5"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            Key Assumptions
          </p>
          <div className="flex flex-wrap gap-x-10 gap-y-2">
            {assumptions.map((a) => (
              <p key={a} className="text-[#fefefe]/70 text-xs sm:text-sm leading-relaxed"
                style={{ fontFamily: "'Geist Mono', monospace" }}>
                <span className="text-orange-400/50 mr-1.5">·</span>{a}
              </p>
            ))}
          </div>
        </motion.div>


      </div>

      {/* Logo — fixed bottom right */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}
        className="fixed bottom-6 right-6 sm:right-10 lg:right-16 z-20">
        <img src={unicityLogoUrl} alt="Unicity" className="h-5 opacity-60" />
      </motion.div>
    </div>
  );
}
