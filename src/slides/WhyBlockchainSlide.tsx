import { motion } from 'framer-motion';

const reasons = [
  {
    title: 'NO PLATFORM RISK',
    punch: 'Centralised rails mean centralised pricing.',
    text: 'No one can reprice the rails underneath you.',
  },
  {
    title: 'VERIFIABLE',
    punch: 'Cryptographic proof of what agents did.',
    text: 'The same guarantee that makes smart contracts trusted with billions.',
  },
  {
    title: 'PROGRAMMABLE',
    punch: 'Money as programmable as the agents.',
    text: 'Conditional payments, escrow, splits, micropayment streaming — native to blockchain.',
  },
  {
    title: 'PERMISSIONLESS',
    punch: "Agents can't open bank accounts.",
    text: "Blockchain is the only financial infrastructure where an autonomous agent can participate without human permission.",
  },
];

export function WhyBlockchainSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col px-8 sm:px-12 lg:px-20 py-10 sm:py-14 lg:py-16">

        {/* Header */}
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-orange-400 text-[10px] sm:text-xs tracking-[0.4em] uppercase"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            The Case for Blockchain
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[32px] sm:text-[44px] lg:text-[56px] leading-[0.95] tracking-tight mt-2"
            style={{ fontFamily: "'Anton', sans-serif" }}>
            WHY AGENTS NEED <span className="text-orange-400">BLOCKCHAIN</span>
          </motion.h1>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="mt-3 max-w-3xl">
            <p className="text-[#fefefe]/70 text-xs sm:text-sm leading-relaxed italic"
              style={{ fontFamily: "'Geist Mono', monospace" }}>
              "If we want an internet where AI agents can operate without destroying trust, blockchains are not optional infrastructure. They are the missing layer that makes an AI-native internet work."
            </p>
            <p className="text-orange-400/60 text-xs mt-1"
              style={{ fontFamily: "'Geist Mono', monospace" }}>
              — a16z crypto, February 2026
            </p>
          </motion.div>
        </div>

        {/* Rows */}
        <div className="flex flex-col mt-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              className="flex items-center gap-5 lg:gap-8 py-2 lg:py-2.5"
              style={{ borderBottom: i < reasons.length - 1 ? '1px solid rgba(249,115,22,0.1)' : 'none' }}
            >
              <h3
                className="text-orange-400 text-[24px] sm:text-[30px] lg:text-[36px] leading-none tracking-tight w-[220px] lg:w-[280px] shrink-0"
                style={{ fontFamily: "'Anton', sans-serif" }}>
                {r.title}
              </h3>
              <div>
                <p className="text-[#fefefe] text-sm sm:text-base font-bold"
                  style={{ fontFamily: "'Geist Mono', monospace" }}>
                  {r.punch}
                </p>
                <p className="text-[#fefefe]/60 text-xs sm:text-sm leading-relaxed mt-1"
                  style={{ fontFamily: "'Geist Mono', monospace" }}>
                  {r.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
