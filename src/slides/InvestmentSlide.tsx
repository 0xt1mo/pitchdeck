import { motion } from 'framer-motion';

const useOfFunds = [
  { pct: 70, label: 'Engineering', strong: 1.0 },
  { pct: 15, label: 'Sales & GTM', strong: 0.7 },
  { pct: 15, label: 'Ops, corporate & legal', strong: 0.4 },
];

const backers = ['Blockchange Capital', 'Outlier Ventures', 'Tawasal Al Khaleej'];

export function InvestmentSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      {/* Top-right orange wash */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '-100px',
          right: '-200px',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(249,115,22,0.12) 0%, transparent 60%)',
        }}
      />

      <div className="relative z-10 h-full flex flex-col px-8 sm:px-12 lg:px-16 py-8 sm:py-10 lg:py-12 justify-center gap-6 lg:gap-8">

        {/* Headline */}
        <div className="shrink-0">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[44px] sm:text-[64px] lg:text-[88px] xl:text-[100px] leading-[0.95] tracking-tight uppercase"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            <span className="text-[#fefefe]">THE</span>{' '}
            <span className="text-orange-400">INVESTMENT.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="text-[#fefefe]/85 text-base sm:text-lg lg:text-xl mt-3 max-w-5xl leading-relaxed"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            An <span className="text-orange-400 font-bold">extension of our seed round</span> — revenue generation to prepare for Series A.
          </motion.p>
        </div>

        {/* Hero: $3M + path to Series A */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="grid items-center shrink-0 gap-8 lg:gap-14"
          style={{ gridTemplateColumns: '0.9fr 1.1fr' }}
        >
          {/* $3M block */}
          <div>
            <p
              className="text-[#fefefe]/55 text-[10px] sm:text-xs lg:text-sm tracking-[0.25em] uppercase font-bold mb-2 lg:mb-3"
              style={{ fontFamily: "'Geist Mono', monospace" }}
            >
              Q4 2026
            </p>
            <p
              className="text-[#fefefe] text-[68px] sm:text-[96px] lg:text-[120px] xl:text-[132px] leading-[0.88] tracking-[-0.04em]"
              style={{ fontFamily: "'Anton', sans-serif" }}
            >
              $3M
            </p>
            <p
              className="text-[#fefefe]/70 text-xs sm:text-sm lg:text-base mt-3 lg:mt-4 leading-relaxed"
              style={{ fontFamily: "'Geist Mono', monospace" }}
            >
              SAFE + token warrants · 18 months runway
            </p>
          </div>

          {/* Path to Series A */}
          <div>
            <p
              className="text-orange-400 text-[10px] sm:text-xs lg:text-sm tracking-[0.25em] uppercase font-bold mb-3 lg:mb-4"
              style={{ fontFamily: "'Geist Mono', monospace" }}
            >
              The path to Series A
            </p>
            <div className="flex flex-col gap-3 lg:gap-4">
              {[
                { label: 'LAUNCH', primary: 'GA in August', sub: 'mainnet live, product shipped' },
                { label: 'REVENUE', primary: 'First paying deployments', sub: 'Aleria channel + paying clients in telecom, health & iGaming' },
                { label: 'SERIES A', primary: 'Repeatable revenue', sub: 'the metrics for a priced round' },
              ].map((m, i, arr) => (
                <div
                  key={m.label}
                  className="flex items-baseline gap-4 lg:gap-5 pb-3 lg:pb-3.5"
                  style={{ borderBottom: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.10)' : 'none' }}
                >
                  <p
                    className="text-orange-400 text-[22px] sm:text-[30px] lg:text-[38px] leading-none tracking-[-0.01em] min-w-[110px] lg:min-w-[140px] font-bold"
                    style={{ fontFamily: "'Anton', sans-serif" }}
                  >
                    {m.label}
                  </p>
                  <div className="flex flex-col gap-1">
                    <p className="text-[#fefefe] text-base sm:text-lg lg:text-xl font-bold leading-snug" style={{ fontFamily: "'Geist Mono', monospace" }}>
                      {m.primary}
                    </p>
                    <p className="text-[#fefefe]/60 text-xs sm:text-sm lg:text-base leading-snug" style={{ fontFamily: "'Geist Mono', monospace" }}>
                      {m.sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom row: Use of funds + Backed by */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85, duration: 0.5 }}
          className="grid items-end shrink-0 pt-5 lg:pt-6 gap-8 lg:gap-12"
          style={{
            gridTemplateColumns: '1.6fr 1fr',
            borderTop: '1px solid rgba(255,255,255,0.12)',
          }}
        >
          {/* Use of funds */}
          <div>
            <p
              className="text-orange-400 text-[10px] sm:text-xs lg:text-sm tracking-[0.25em] uppercase font-bold mb-3 lg:mb-4"
              style={{ fontFamily: "'Geist Mono', monospace" }}
            >
              Use of Funds
            </p>
            <div
              className="flex gap-[6px] rounded-[4px] overflow-hidden mb-2 lg:mb-3"
              style={{ height: '36px' }}
            >
              {useOfFunds.map((f) => (
                <div
                  key={f.label}
                  className="flex items-center justify-center text-xs lg:text-sm font-bold text-[#060606]"
                  style={{
                    flex: f.pct,
                    background:
                      f.strong === 1.0
                        ? '#f97316'
                        : `rgba(249,115,22,${f.strong})`,
                    fontFamily: "'Geist Mono', monospace",
                  }}
                >
                  {f.pct}%
                </div>
              ))}
            </div>
            <div className="flex gap-[6px]">
              {useOfFunds.map((f) => (
                <div
                  key={f.label}
                  className="text-[#fefefe]/80 text-[10px] sm:text-xs lg:text-sm"
                  style={{ flex: f.pct, fontFamily: "'Geist Mono', monospace" }}
                >
                  {f.label}
                </div>
              ))}
            </div>
            <p
              className="text-[#fefefe]/55 text-[11px] sm:text-xs lg:text-sm mt-3 leading-snug"
              style={{ fontFamily: "'Geist Mono', monospace" }}
            >
              Existing engineering team carried flat — <span className="text-orange-400">100% of incremental spend is commercial.</span>
            </p>
          </div>

          {/* Backed By */}
          <div className="text-right">
            <p
              className="text-orange-400 text-[10px] sm:text-xs lg:text-sm tracking-[0.25em] uppercase font-bold mb-3 lg:mb-4"
              style={{ fontFamily: "'Geist Mono', monospace" }}
            >
              Backed By
            </p>
            <div className="flex flex-col gap-1.5">
              {backers.map((name) => (
                <span
                  key={name}
                  className="text-[#fefefe] text-sm sm:text-base lg:text-lg font-bold"
                  style={{ fontFamily: "'Geist Mono', monospace" }}
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
