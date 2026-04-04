import { motion } from 'framer-motion';
import splashVideoUrl from '/kling_20260226_VIDEO_Take_Image_1650_0.mp4';

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
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-y-auto">
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
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
            className="text-[#fefefe] text-[28px] sm:text-[40px] lg:text-[52px] leading-[0.95] tracking-tight mt-1"
            style={{ fontFamily: "'Anton', sans-serif" }}>
            AGENT{' '}<span className="text-orange-400">MARKETPLACE</span>
          </motion.h1>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-[2px] w-32 sm:w-48 bg-gradient-to-r from-orange-500 to-transparent origin-left mt-2" />
        </div>

        {/* Subheader */}
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="shrink-0 mt-3 text-[#fefefe]/60 text-sm sm:text-base"
          style={{ fontFamily: "'Geist Mono', monospace" }}>
          Zero-trust A2A discovery, trading and settlement at scale.
        </motion.p>

        {/* Content */}
        <div className="flex-1 mt-4 min-h-0 flex items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="grid grid-cols-2 gap-8 sm:gap-12 w-full">

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
