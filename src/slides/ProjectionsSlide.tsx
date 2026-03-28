import { motion } from 'framer-motion';
import splashVideoUrl from '/kling_20260226_VIDEO_Take_Image_1650_0.mp4';
import unicityLogoUrl from '/UnicityLogo.svg';

const years = ["H2 '26", '2027', '2028', '2029'];

const protocolTable = [
  { label: 'Daily active agents', values: ['1M', '20M', '100M', '500M'] },
  { label: 'Subscription', values: ['$1/mo', '$1/mo', '$1/mo', '$1/mo'] },
];
const protocolRevenue = ['$6M', '$240M', '$1.2B', '$6B'];

const enterpriseTable = [
  { label: 'Enterprise customers', values: ['5', '25', '80', '200'] },
  { label: 'Avg. contract value', values: ['$50K', '$80K', '$100K', '$120K'] },
];
const enterpriseRevenue = ['$0.15M', '$2M', '$8M', '$24M'];

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
            TWO{' '}
            <span className="text-orange-400">REVENUE ENGINES.</span>
          </motion.h1>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-[2px] w-32 sm:w-48 bg-gradient-to-r from-orange-500 to-transparent origin-left mt-2" />
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-[#fefefe]/60 text-sm sm:text-base mt-3"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            One funds the business. The other defines the upside.
          </motion.p>
        </div>

        {/* Two-column layout */}
        <div className="shrink-0 grid mt-6 gap-8" style={{ gridTemplateColumns: '1fr 1fr' }}>

          {/* ── LEFT: Protocol Economy ── */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <p className="text-blue-400/70 text-[10px] tracking-[0.3em] uppercase mb-1"
              style={{ fontFamily: "'Geist Mono', monospace" }}>
              Protocol Economy
            </p>
            <h3 className="text-blue-400 text-lg sm:text-xl font-bold"
              style={{ fontFamily: "'Geist Mono', monospace" }}>
              Agent Subscriptions
            </h3>
            <p className="text-[#fefefe]/50 text-xs mt-1 leading-relaxed"
              style={{ fontFamily: "'Geist Mono', monospace" }}>
              Paid in <span className="text-[#fefefe]/80 font-bold">native token</span>. Permissionless. Scales with every agent on the network.
            </p>

            {/* Price card */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-4 rounded-lg px-4 py-3 flex items-center gap-4"
              style={{
                background: 'rgba(59,130,246,0.06)',
                border: '1px solid rgba(59,130,246,0.15)',
              }}
            >
              <span className="text-3xl sm:text-4xl font-black text-amber-500"
                style={{ fontFamily: "'Anton', sans-serif" }}>
                $1<span className="text-lg text-amber-500/60">/mo</span>
              </span>
              <p className="text-[#fefefe]/60 text-[11px] leading-relaxed"
                style={{ fontFamily: "'Geist Mono', monospace" }}>
                Per agent. <span className="font-bold text-[#fefefe]/80">Unlimited transactions.</span> No gas. An active agent on Solana pays $500+/mo in fees. On Unicity: $1 flat.
              </p>
            </motion.div>

            {/* Table */}
            <div className="mt-4">
              {/* Header row */}
              <div className="grid items-center pb-2 border-b border-white/[0.06]"
                style={{ gridTemplateColumns: '140px repeat(4, 1fr)' }}>
                <div />
                {years.map((y) => (
                  <span key={y} className="text-[#fefefe]/40 text-[10px] text-right tracking-[0.1em]"
                    style={{ fontFamily: "'Geist Mono', monospace" }}>
                    {y}
                  </span>
                ))}
              </div>

              {/* Data rows */}
              {protocolTable.map((row) => (
                <div key={row.label} className="grid items-center py-2 border-b border-white/[0.04]"
                  style={{ gridTemplateColumns: '140px repeat(4, 1fr)' }}>
                  <span className="text-[#fefefe]/50 text-[11px]"
                    style={{ fontFamily: "'Geist Mono', monospace" }}>
                    {row.label}
                  </span>
                  {row.values.map((v, vi) => (
                    <span key={vi} className="text-[#fefefe]/60 text-xs text-right"
                      style={{ fontFamily: "'Geist Mono', monospace" }}>
                      {v}
                    </span>
                  ))}
                </div>
              ))}

              {/* Revenue row */}
              <div className="grid items-center py-2 border-t border-white/[0.08]"
                style={{ gridTemplateColumns: '140px repeat(4, 1fr)' }}>
                <span className="text-blue-400 text-[11px] font-bold"
                  style={{ fontFamily: "'Geist Mono', monospace" }}>
                  Protocol revenue
                </span>
                {protocolRevenue.map((v, vi) => (
                  <span key={vi} className="text-blue-400 text-xs sm:text-sm text-right font-bold"
                    style={{ fontFamily: "'Geist Mono', monospace" }}>
                    {v}
                  </span>
                ))}
              </div>
            </div>

            {/* Benchmark note */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-4 rounded-lg px-4 py-3"
              style={{
                background: 'rgba(59,130,246,0.04)',
                border: '1px solid rgba(59,130,246,0.1)',
              }}
            >
              <p className="text-[#fefefe]/70 text-xs sm:text-sm leading-relaxed"
                style={{ fontFamily: "'Geist Mono', monospace" }}>
                <span className="text-amber-500 font-bold">Benchmark:</span> Solana generated $1.4B in protocol revenue in 2025 with 3.2M daily active wallets. Even at sub-cent base fees, per-transaction pricing punishes high-frequency agents. Subscription pricing eliminates that cost entirely — making agents 30-300x cheaper while generating predictable protocol revenue at scale.
              </p>
            </motion.div>
          </motion.div>

          {/* ── RIGHT: Enterprise Business ── */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <p className="text-blue-400/70 text-[10px] tracking-[0.3em] uppercase mb-1"
              style={{ fontFamily: "'Geist Mono', monospace" }}>
              Enterprise Business
            </p>
            <h3 className="text-blue-400 text-lg sm:text-xl font-bold"
              style={{ fontFamily: "'Geist Mono', monospace" }}>
              Platform Licenses
            </h3>
            <p className="text-[#fefefe]/50 text-xs mt-1 leading-relaxed"
              style={{ fontFamily: "'Geist Mono', monospace" }}>
              Paid in <span className="text-[#fefefe]/80 font-bold">fiat</span>. Annual contracts. Astrid OS + Semantic Intercept Fabric + support & SLAs.
            </p>

            {/* Price card */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="mt-4 rounded-lg px-4 py-3 flex items-center gap-4"
              style={{
                background: 'rgba(59,130,246,0.06)',
                border: '1px solid rgba(59,130,246,0.15)',
              }}
            >
              <span className="text-3xl sm:text-4xl font-black text-amber-500"
                style={{ fontFamily: "'Anton', sans-serif" }}>
                $120K<span className="text-lg text-amber-500/60">/yr</span>
              </span>
              <p className="text-[#fefefe]/60 text-[11px] leading-relaxed"
                style={{ fontFamily: "'Geist Mono', monospace" }}>
                Average contract value at scale. Channel-partner led. <span className="font-bold text-[#fefefe]/80">Traditional enterprise sales motion.</span>
              </p>
            </motion.div>

            {/* Table */}
            <div className="mt-4">
              {/* Header row */}
              <div className="grid items-center pb-2 border-b border-white/[0.06]"
                style={{ gridTemplateColumns: '140px repeat(4, 1fr)' }}>
                <div />
                {years.map((y) => (
                  <span key={y} className="text-[#fefefe]/40 text-[10px] text-right tracking-[0.1em]"
                    style={{ fontFamily: "'Geist Mono', monospace" }}>
                    {y}
                  </span>
                ))}
              </div>

              {/* Data rows */}
              {enterpriseTable.map((row) => (
                <div key={row.label} className="grid items-center py-2 border-b border-white/[0.04]"
                  style={{ gridTemplateColumns: '140px repeat(4, 1fr)' }}>
                  <span className="text-[#fefefe]/50 text-[11px]"
                    style={{ fontFamily: "'Geist Mono', monospace" }}>
                    {row.label}
                  </span>
                  {row.values.map((v, vi) => (
                    <span key={vi} className="text-[#fefefe]/60 text-xs text-right"
                      style={{ fontFamily: "'Geist Mono', monospace" }}>
                      {v}
                    </span>
                  ))}
                </div>
              ))}

              {/* Revenue row */}
              <div className="grid items-center py-2 border-t border-white/[0.08]"
                style={{ gridTemplateColumns: '140px repeat(4, 1fr)' }}>
                <span className="text-blue-400 text-[11px] font-bold"
                  style={{ fontFamily: "'Geist Mono', monospace" }}>
                  Enterprise revenue
                </span>
                {enterpriseRevenue.map((v, vi) => (
                  <span key={vi} className="text-blue-400 text-xs sm:text-sm text-right font-bold"
                    style={{ fontFamily: "'Geist Mono', monospace" }}>
                    {v}
                  </span>
                ))}
              </div>
            </div>

            {/* Enterprise note */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1 }}
              className="mt-4 rounded-lg px-4 py-3"
              style={{
                background: 'rgba(59,130,246,0.04)',
                border: '1px solid rgba(59,130,246,0.1)',
              }}
            >
              <p className="text-[#fefefe]/70 text-xs sm:text-sm leading-relaxed"
                style={{ fontFamily: "'Geist Mono', monospace" }}>
                <span className="text-amber-500 font-bold">This is the bankable base.</span> Predictable fiat revenue, enterprise contracts, 75%+ gross margin. Funds operations while the protocol economy scales.
              </p>
            </motion.div>
          </motion.div>

        </div>

      </div>

      {/* Logo — fixed bottom right */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}
        className="fixed bottom-6 right-6 sm:right-10 lg:right-16 z-20">
        <img src={unicityLogoUrl} alt="Unicity" className="h-5 opacity-60" />
      </motion.div>
    </div>
  );
}
