import { motion } from 'framer-motion';

const mono = "'Geist Mono', monospace";
const display = "'Anton', sans-serif";

const spectrum = [
  { label: 'CAPTIVE · CLOSED', body: "A vendor's harness exists to serve the vendor's model. Yours is the workload; theirs is the business.", highlight: false },
  { label: 'CAPTIVE · OPEN', body: "Open code, vendor's agenda. Open isn't the same as neutral.", highlight: false },
  { label: 'NEUTRAL · HARNESS', body: "Nobody's model — but still an application that trusts its own code. No kernel, no floor.", highlight: false },
  { label: 'NEUTRAL · OS', body: "Nobody's model, and a kernel beneath every one of them. The freedom to choose — with a floor.", highlight: true },
];

export function AosNeutralSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(60% 50% at 85% 50%, rgba(249,115,22,0.10), transparent 70%)' }}
      />

      <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-10 lg:py-14 gap-6 lg:gap-9">

        {/* Header */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-orange-400 text-xs lg:text-lg tracking-[0.4em] uppercase font-bold"
            style={{ fontFamily: mono }}
          >
            The landlord problem
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[32px] sm:text-[48px] lg:text-[68px] xl:text-[78px] leading-[0.98] tracking-tight uppercase mt-2"
            style={{ fontFamily: display }}
          >
            WHY THE SEAT UNDERNEATH{' '}
            <span className="text-orange-400">IS EMPTY.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="text-[#fefefe]/80 text-sm sm:text-base lg:text-2xl leading-snug mt-3 max-w-5xl"
            style={{ fontFamily: mono }}
          >
            From captive to neutral — only one option runs <span className="text-orange-400">under</span> every harness.
          </motion.p>
        </div>

        {/* Spectrum */}
        <div className="shrink-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {spectrum.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 + i * 0.1, duration: 0.45 }}
              className="rounded-2xl p-5 lg:p-6 flex flex-col"
              style={{
                background: c.highlight ? 'rgba(249,115,22,0.08)' : 'rgba(255,255,255,0.015)',
                border: c.highlight ? '1.5px solid #f97316' : '1px solid #2c2c2c',
                boxShadow: c.highlight ? '0 0 28px rgba(249,115,22,0.14)' : 'none',
              }}
            >
              <p className={`text-sm lg:text-xl tracking-[0.12em] uppercase font-bold ${c.highlight ? 'text-orange-400' : 'text-[#fefefe]/50'}`} style={{ fontFamily: mono }}>
                {c.label}
              </p>
              <p className={`text-sm lg:text-2xl leading-snug mt-3 ${c.highlight ? 'text-[#fefefe]' : 'text-[#fefefe]/75'}`} style={{ fontFamily: mono }}>
                {c.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Punchline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85, duration: 0.6 }}
          className="shrink-0 text-[#fefefe] text-xl sm:text-2xl lg:text-[38px] leading-none uppercase tracking-tight"
          style={{ fontFamily: display }}
        >
          ONLY AN OS OWNED BY NO MODEL VENDOR{' '}
          <span className="text-orange-400">CAN RUN THEM ALL.</span>
        </motion.p>

      </div>
    </div>
  );
}
