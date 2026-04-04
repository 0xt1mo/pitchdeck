import { motion } from 'framer-motion';

const solutions = [
  {
    need: 'Frictionless Rails',
    product: 'UNICITY L1',
    punch: 'Extreme throughput. Sub-second finality. No trade-offs.',
    desc: 'Extreme throughput without sacrificing decentralization or security.',
  },
  {
    need: 'Near-Zero Cost',
    product: 'SUBSCRIPTION MODEL',
    punch: 'Gas-free by design.',
    desc: 'A single permissionless subscription replaces per-transaction pricing.',
  },
  {
    need: 'Permissionless',
    product: 'ASTRID OS',
    punch: 'The Linux for AI agents.',
    desc: 'One universal runtime underneath every framework.',
  },
  {
    need: 'Identity',
    product: 'AGENT IDENTITY',
    punch: 'Cryptographic identity for every agent.',
    desc: 'Verifiable credentials that prove who, what, and why.',
  },
  {
    need: 'Enforcement',
    product: 'SEMANTIC INTERCEPT',
    punch: 'Security built in. Not bolted on.',
    desc: 'Enforcement below the model. The model cannot override it.',
  },
];

export function SolutionSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col px-8 sm:px-12 lg:px-20 py-10 sm:py-14 lg:py-16">

        {/* Header */}
        <div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-orange-400 text-[10px] sm:text-xs tracking-[0.4em] uppercase"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            The Autonomy Stack — The Solution
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[32px] sm:text-[44px] lg:text-[56px] leading-[0.95] tracking-tight mt-2"
            style={{ fontFamily: "'Anton', sans-serif" }}>
            UNICITY: THE COMPLETE <span className="text-orange-400">AUTONOMY STACK</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="mt-3 text-[#fefefe]/80 text-base sm:text-lg max-w-3xl"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            One integrated stack — built from first principles for autonomous AI. Agent economics that actually work, with security integrated into the design.
          </motion.p>
        </div>

        {/* Solutions — matches Autonomy Stack layout */}
        <div className="flex flex-col mt-4">
          {solutions.map((s, i) => (
            <motion.div
              key={s.product}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              className="flex items-center gap-5 lg:gap-8 py-2 lg:py-2.5"
              style={{ borderBottom: i < solutions.length - 1 ? '1px solid rgba(249,115,22,0.1)' : 'none' }}
            >
              {/* Title */}
              <div className="w-[220px] lg:w-[280px] shrink-0">
                <p className="text-[#fefefe]/40 text-[10px] sm:text-xs tracking-[0.2em] uppercase" style={{ fontFamily: "'Geist Mono', monospace" }}>
                  {s.need}
                </p>
                <h3 className="text-orange-400 text-[24px] sm:text-[30px] lg:text-[36px] leading-none tracking-tight mt-1"
                  style={{ fontFamily: "'Anton', sans-serif" }}>
                  {s.product}
                </h3>
              </div>

              {/* Punch + Description */}
              <div>
                <p className="text-[#fefefe] text-sm sm:text-base font-bold"
                  style={{ fontFamily: "'Geist Mono', monospace" }}>
                  {s.punch}
                </p>
                <p className="text-[#fefefe]/60 text-xs sm:text-sm leading-relaxed mt-1"
                  style={{ fontFamily: "'Geist Mono', monospace" }}>
                  {s.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Logo bottom right */}

      </div>
    </div>
  );
}
