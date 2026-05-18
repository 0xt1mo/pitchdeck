import { motion } from 'framer-motion';

const points = [
  {
    title: 'Seed round closed September 2025',
    sub: 'Blockchange · Outlier Ventures · Tawasal Al Khaleej',
  },
  {
    title: 'Core protocol built',
    sub: 'L1 consensus + ZK Uniqueness Oracle + AOS kernel + AgentSphere SDK',
  },
  {
    title: 'Whitepaper, ZK bluepaper, security proofs published',
  },
  {
    title: 'Distribution partner integration ready to deploy at mainnet',
  },
  {
    title: 'Mainnet launching June 2026',
  },
];

export function CurrentStateSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col px-8 sm:px-12 lg:px-20 py-10 sm:py-14 lg:py-16 justify-center gap-7">

        {/* Header */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-orange-400 text-sm tracking-[0.4em] uppercase"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            Status
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[32px] sm:text-[44px] lg:text-[56px] leading-[0.95] tracking-tight mt-2"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            WHERE WE ARE <span className="text-orange-400">TODAY</span>
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-[2px] w-32 sm:w-48 bg-gradient-to-r from-orange-500 to-transparent origin-left mt-3"
          />
        </div>

        {/* Points list */}
        <div className="shrink-0 flex flex-col gap-4 sm:gap-5">
          {points.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="flex gap-3 items-start"
            >
              <span className="shrink-0 mt-2 w-2 h-2 rounded-full bg-orange-400" />
              <div>
                <p
                  className="text-[#fefefe] text-lg sm:text-xl lg:text-2xl leading-snug"
                  style={{ fontFamily: "'Geist Mono', monospace" }}
                >
                  {p.title}
                </p>
                {p.sub && (
                  <p
                    className="text-[#fefefe]/60 text-sm sm:text-base leading-relaxed mt-1"
                    style={{ fontFamily: "'Geist Mono', monospace" }}
                  >
                    ↳ {p.sub}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="shrink-0 text-orange-400 text-[20px] sm:text-[26px] lg:text-[30px] leading-tight tracking-tight pt-5"
          style={{
            fontFamily: "'Anton', sans-serif",
            borderTop: '1px solid rgba(249,115,22,0.25)',
          }}
        >
          THIS ROUND FUNDS THE TRANSITION FROM <span className="text-[#fefefe]">INFRASTRUCTURE</span> → <span className="text-[#fefefe]">LIVE NETWORK.</span>
        </motion.p>

      </div>
    </div>
  );
}
