import { motion } from 'framer-motion';

const movements = [
  {
    num: '01',
    week: 'Track 01',
    title: 'EU AI Act.',
    text: (
      <>
        Compliance infrastructure for high-risk AI under Annex III. <span className="text-orange-400 font-semibold">Articles 12 and 13 obligations met by architecture.</span>
      </>
    ),
    production: false,
  },
  {
    num: '02',
    week: 'Track 02',
    title: 'Sovereign Registry.',
    text: (
      <>
        Every agent registered, scoped, governed, revocable. <span className="text-orange-400 font-semibold">The single source of truth Article 26 requires.</span>
      </>
    ),
    production: false,
  },
  {
    num: '03',
    week: 'Track 03',
    title: 'Enterprise Service.',
    text: (
      <>
        Managed service for DORA-regulated enterprise customers — closing the evidence gap. <span className="text-orange-400 font-semibold">Trust as a billable line.</span>
      </>
    ),
    production: true,
  },
];

export function CasinoAskSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col px-12 lg:px-20 py-10 lg:py-14 justify-center gap-7">

        {/* Header */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-orange-400 text-xs sm:text-sm tracking-[0.32em] uppercase font-semibold"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            Nº 09 · The Pilot
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[28px] sm:text-[40px] lg:text-[54px] leading-[0.98] tracking-tight mt-3 uppercase"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            Forty-five days. One integration.{' '}
            <span className="text-orange-400">Operator-held evidence.</span>
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-[2px] w-24 lg:w-32 bg-orange-500 origin-left mt-5"
            style={{ boxShadow: '0 0 8px rgba(249,115,22,0.7)' }}
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-4 text-[#fefefe]/75 text-sm lg:text-base leading-relaxed max-w-5xl"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            Deploys alongside existing BSS and OSS — <span className="text-[#fefefe] font-semibold">no replacement, no migration</span>.{' '}
            <span className="text-orange-400 font-semibold">REGISTER → INTERCEPT → ENFORCE → PROVE.</span> Three tracks from day one.
          </motion.p>
        </div>

        {/* Three movements */}
        <div className="flex flex-col shrink-0">
          {movements.map((m, i) => (
            <motion.div
              key={m.num}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
              className="grid grid-cols-[320px_1fr] items-center gap-x-8 lg:gap-x-12 py-5 lg:py-6"
              style={{
                borderTop: '1px solid rgba(255,255,255,0.10)',
                ...(i === movements.length - 1
                  ? { borderBottom: '1px solid rgba(255,255,255,0.10)' }
                  : {}),
              }}
            >
              <h3
                className="text-[#fefefe] text-[36px] sm:text-[44px] lg:text-[52px] leading-none tracking-[0.04em] uppercase"
                style={{ fontFamily: "'Anton', sans-serif" }}
              >
                {m.title}
              </h3>
              <p
                className="text-[#fefefe]/85 text-base sm:text-lg lg:text-xl leading-[1.55]"
                style={{ fontFamily: "'Geist Mono', monospace" }}
              >
                {m.text}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
