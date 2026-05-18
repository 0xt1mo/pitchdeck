import { motion } from 'framer-motion';

const steps = [
  {
    name: 'BITCOIN',
    sub: '2009',
    role: 'Correctness + Global Ordering',
    text: 'Every node certifies every transaction. Every node agrees on order.',
  },
  {
    name: 'FASTPAY',
    sub: '(Sui, Linera)',
    role: 'Correctness Without Ordering',
    text: 'Validators certify correctness. Ordering goes.',
  },
  {
    name: 'UNICITY',
    sub: '2026',
    role: 'Uniqueness Only',
    text: 'The network attests uniqueness. Correctness moves to the edge.',
  },
];

export function IntellectualArcSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col px-8 sm:px-12 lg:px-20 py-10 sm:py-14 lg:py-16 justify-center gap-7">

        {/* Header */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-orange-400 text-sm tracking-[0.4em] uppercase"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            Appendix · The Intellectual Arc
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[32px] sm:text-[44px] lg:text-[56px] leading-[0.95] tracking-tight mt-2"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            UNBUNDLING WHAT THE NETWORK <span className="text-orange-400">HAS TO DO.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-4 text-[#fefefe]/85 text-lg sm:text-xl lg:text-2xl max-w-5xl leading-relaxed"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            Each step removes work the network was assumed to require.
          </motion.p>
        </div>

        {/* Three steps */}
        <div className="flex flex-col shrink-0">
          {steps.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.12 }}
              className="grid grid-cols-[220px_320px_1fr] lg:grid-cols-[300px_400px_1fr] items-center gap-5 lg:gap-8 py-4 lg:py-5"
              style={{ borderBottom: i < steps.length - 1 ? '1px solid rgba(249,115,22,0.1)' : 'none' }}
            >
              <div>
                <h3
                  className="text-orange-400 text-[28px] sm:text-[36px] lg:text-[48px] leading-none tracking-tight"
                  style={{ fontFamily: "'Anton', sans-serif" }}
                >
                  {s.name}
                </h3>
                <p
                  className="text-[#fefefe]/45 text-xs sm:text-sm lg:text-base tracking-[0.18em] uppercase mt-1.5"
                  style={{ fontFamily: "'Geist Mono', monospace" }}
                >
                  {s.sub}
                </p>
              </div>
              <p
                className="text-[#fefefe] text-sm sm:text-base lg:text-lg tracking-[0.18em] uppercase font-bold"
                style={{ fontFamily: "'Geist Mono', monospace" }}
              >
                {s.role}
              </p>
              <p
                className="text-[#fefefe]/80 text-sm sm:text-base lg:text-lg leading-snug"
                style={{ fontFamily: "'Geist Mono', monospace" }}
              >
                {s.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Closing paragraph */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="text-[#fefefe]/80 text-base sm:text-lg lg:text-xl leading-relaxed pt-5 shrink-0 max-w-6xl"
          style={{
            fontFamily: "'Geist Mono', monospace",
            borderTop: '1px solid rgba(249,115,22,0.25)',
          }}
        >
          Ethereum first went the <span className="text-[#fefefe] font-bold">other</span> direction — adding general computation on top of correctness and ordering. The unbundling reaction has been the dominant intellectual move of the last five years. FastPay started removing things.{' '}
          <span className="text-[#fefefe] font-bold">We took the unbundling to its logical endpoint.</span>
        </motion.p>

      </div>
    </div>
  );
}
