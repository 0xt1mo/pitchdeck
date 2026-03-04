import { motion } from 'framer-motion';
import splashVideoUrl from '/kling_20260226_VIDEO_Take_Image_1650_0.mp4';
import unicityLogoUrl from '/UnicityLogo.svg';

const takeRates = [
  { platform: 'eBay', rate: '13–15%' },
  { platform: 'Airbnb', rate: '15–20%' },
  { platform: 'Uber', rate: '25–30%' },
  { platform: 'App Store', rate: '15–30%' },
  { platform: 'Upwork', rate: '10–20%' },
  { platform: 'OpenSea', rate: '2.5% + fees' },
];

const markets = [
  { title: 'Crypto OTC', desc: 'Private atomic settlement' },
  { title: 'Prediction Markets', desc: 'No front-running' },
  { title: 'Trading Cards', desc: 'Instant P2P matching' },
  { title: 'Data & APIs', desc: 'Agent-to-agent data exchange' },
  { title: 'Compute', desc: 'On-demand GPU/CPU marketplace' },
  { title: 'Digital Collectibles', desc: 'Verified provenance, instant trade' },
  { title: 'Precious Metals', desc: 'Fractional ownership, P2P' },
  { title: 'Energy Credits', desc: 'Carbon and renewable trading' },
  { title: 'Agent Freelancing', desc: 'Hire agents for tasks' },
  { title: 'Professional Services', desc: 'Consulting, legal, design' },
  { title: 'Group Travel', desc: 'Collective booking power' },
  { title: 'Collective Investment', desc: 'Pool capital, share returns' },
];

export function MarketplaceSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="fixed inset-0 w-full h-full z-0">
        <video className="w-full h-full object-cover opacity-20" autoPlay muted loop playsInline src={splashVideoUrl} />
        <div className="absolute inset-0 bg-[#060606]/50" />
      </div>

      <div className="relative z-10 h-full flex flex-col px-6 sm:px-10 lg:px-16 py-6 sm:py-8">

        {/* Header */}
        <div className="shrink-0">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-orange-400 text-[10px] sm:text-xs tracking-[0.4em] uppercase"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            Product
          </motion.p>
          <motion.h1 initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[32px] sm:text-[44px] lg:text-[56px] leading-[0.95] tracking-tight mt-1"
            style={{ fontFamily: "'Anton', sans-serif" }}>
            PRODUCT{' '}<span className="text-orange-400">MARKETPLACE</span>
          </motion.h1>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-[2px] w-32 sm:w-48 bg-gradient-to-r from-orange-500 to-transparent origin-left mt-2" />
        </div>

        {/* Big statement */}
        <motion.h2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="shrink-0 mt-6 text-[#fefefe] text-[22px] sm:text-[32px] lg:text-[42px] leading-[1] tracking-tight"
          style={{ fontFamily: "'Anton', sans-serif" }}>
          MASSIVE SCALE, LOW LATENCY, ZERO TRUST{' '}
          <span className="text-orange-400">A2A DISCOVERY, TRADING & SETTLEMENT</span>
        </motion.h2>

        {/* Two-column layout */}
        <div className="flex-1 mt-4 grid grid-cols-2 gap-8 sm:gap-12 min-h-0 items-center">

          {/* Left — Take rate table */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}>
            <p className="text-[#fefefe]/80 text-sm sm:text-base leading-relaxed mb-5"
              style={{ fontFamily: "'Geist Mono', monospace" }}>
              Platforms take <span className="text-orange-400">10–30%</span>. Agents take <span className="text-orange-400 text-lg sm:text-xl font-black px-2 py-0.5 rounded bg-orange-500/[0.12] border border-orange-500/25">zero</span>.
            </p>

            <div className="rounded-xl overflow-hidden border border-white/[0.08]">
              {/* Header row */}
              <div className="grid grid-cols-2 px-4 sm:px-5 py-2.5 border-b border-white/[0.08] bg-white/[0.03]">
                <span className="text-[#fefefe]/50 text-[10px] sm:text-xs uppercase tracking-wider"
                  style={{ fontFamily: "'Geist Mono', monospace" }}>Platform</span>
                <span className="text-[#fefefe]/50 text-[10px] sm:text-xs uppercase tracking-wider text-right"
                  style={{ fontFamily: "'Geist Mono', monospace" }}>Take Rate</span>
              </div>
              {/* Platform rows */}
              {takeRates.map((row, i) => (
                <motion.div
                  key={row.platform}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.06 }}
                  className="grid grid-cols-2 px-4 sm:px-5 py-2.5 border-b border-white/[0.04]"
                >
                  <span className="text-[#fefefe]/60 text-xs sm:text-sm"
                    style={{ fontFamily: "'Geist Mono', monospace" }}>{row.platform}</span>
                  <span className="text-red-400/70 text-xs sm:text-sm text-right font-medium"
                    style={{ fontFamily: "'Geist Mono', monospace" }}>{row.rate}</span>
                </motion.div>
              ))}
              {/* Unicity row — highlighted */}
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9, duration: 0.4 }}
                className="grid grid-cols-2 px-4 sm:px-5 py-3 bg-orange-500/[0.08] border-t border-orange-500/20"
              >
                <span className="text-orange-400 text-sm sm:text-base font-bold"
                  style={{ fontFamily: "'Geist Mono', monospace" }}>Unicity</span>
                <motion.span
                  initial={{ scale: 1 }}
                  animate={{ scale: [1, 1.15, 1] }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                  className="text-orange-400 text-lg sm:text-xl font-black text-right"
                  style={{ fontFamily: "'Anton', sans-serif", letterSpacing: '0.05em' }}>
                  0%
                </motion.span>
              </motion.div>
            </div>
          </motion.div>

          {/* Right — Vision + featured markets */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col justify-center">

            {/* For Buyers */}
            <div>
              <p className="text-orange-400 text-[10px] sm:text-xs tracking-[0.3em] uppercase mb-2"
                style={{ fontFamily: "'Geist Mono', monospace" }}>
                For Buyers
              </p>
              <div className="space-y-1.5">
                {[
                  'Agents discover the best price across all sellers automatically',
                  'Private negotiation — no front-running, no price manipulation',
                  'Atomic settlement — no counterparty risk',
                ].map((item) => (
                  <p key={item} className="text-[#fefefe]/70 text-xs sm:text-sm leading-relaxed"
                    style={{ fontFamily: "'Geist Mono', monospace" }}>
                    <span className="text-orange-400 mr-2">→</span>{item}
                  </p>
                ))}
              </div>
            </div>

            {/* For Merchants */}
            <div className="mt-5">
              <p className="text-orange-400 text-[10px] sm:text-xs tracking-[0.3em] uppercase mb-2"
                style={{ fontFamily: "'Geist Mono', monospace" }}>
                For Merchants
              </p>
              <div className="space-y-1.5">
                {[
                  'Zero platform fees — keep 100% of every sale',
                  'Zero CAC — agents are already expressing intent',
                  'No listing fees, no promoted placement, no ad spend',
                ].map((item) => (
                  <p key={item} className="text-[#fefefe]/70 text-xs sm:text-sm leading-relaxed"
                    style={{ fontFamily: "'Geist Mono', monospace" }}>
                    <span className="text-orange-400 mr-2">→</span>{item}
                  </p>
                ))}
              </div>
            </div>

          </motion.div>

        </div>

        {/* Market carousel */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="shrink-0 mt-4 border-t border-white/[0.05] pt-4 overflow-hidden">
          <div className="flex animate-market-scroll whitespace-nowrap">
            {[...markets, ...markets].map((m, i) => (
              <div key={`${m.title}-${i}`}
                className="inline-flex items-center gap-2 mx-4 sm:mx-6 shrink-0 px-4 py-2 rounded-lg border border-orange-500/10 bg-orange-500/[0.03]">
                <div className="w-1 h-6 rounded-full bg-orange-500/40 shrink-0" />
                <div>
                  <p className="text-[#fefefe]/80 text-xs sm:text-sm font-bold whitespace-nowrap">{m.title}</p>
                  <p className="text-[#fefefe]/40 text-[9px] sm:text-[10px] whitespace-nowrap"
                    style={{ fontFamily: "'Geist Mono', monospace" }}>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Logo */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
          className="shrink-0 mt-2 flex justify-end">
          <img src={unicityLogoUrl} alt="Unicity" className="h-5 opacity-60" />
        </motion.div>

      </div>

      <style>{`
        @keyframes market-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-market-scroll {
          animation: market-scroll 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
