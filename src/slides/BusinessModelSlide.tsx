import { motion } from 'framer-motion';

const surfaces = [
  {
    title: 'OPEN SOURCE',
    punch: 'AOS',
    detail: 'Developer mindshare and standards-setting.',
  },
  {
    title: 'ENTERPRISE',
    punch: 'Managed platform with SLAs, governance, verifiable execution.',
    detail: 'License and subscription. Where most revenue lives.',
  },
  {
    title: 'SETTLEMENT',
    punch: 'Unicity L1 subscription — unlimited transactions.',
    detail: '',
  },
  {
    title: 'SERVICES',
    punch: 'Co-development with sovereign and enterprise lead customers.',
    detail: 'Earns integration depth.',
  },
];

export function BusinessModelSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">

      <div className="relative z-10 h-full flex flex-col px-8 sm:px-12 lg:px-20 py-10 sm:py-14 lg:py-16 justify-center gap-8">

        {/* Header */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-orange-400 text-sm tracking-[0.4em] uppercase"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            Business Model
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[32px] sm:text-[44px] lg:text-[56px] leading-[0.95] tracking-tight mt-2"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            BUSINESS <span className="text-orange-400">MODEL.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-4 text-[#fefefe]/85 text-lg sm:text-xl lg:text-2xl max-w-5xl leading-relaxed"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            Open-source distribution. Enterprise revenue. Protocol-level value capture. Customer-funded depth.
          </motion.p>
        </div>

        {/* Surfaces — pillar layout */}
        <div className="flex flex-col shrink-0">
          {surfaces.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              className="flex items-center gap-5 lg:gap-8 py-3 lg:py-4"
              style={{ borderBottom: i < surfaces.length - 1 ? '1px solid rgba(249,115,22,0.1)' : 'none' }}
            >
              <h3
                className="text-orange-400 text-[24px] sm:text-[32px] lg:text-[40px] leading-none tracking-tight w-[240px] lg:w-[340px] shrink-0"
                style={{ fontFamily: "'Anton', sans-serif" }}
              >
                {s.title}
              </h3>
              <div>
                <p
                  className="text-[#fefefe] text-base sm:text-lg lg:text-xl font-bold leading-snug"
                  style={{ fontFamily: "'Geist Mono', monospace" }}
                >
                  {s.punch}
                </p>
                {s.detail && (
                  <p
                    className="text-[#fefefe]/60 text-sm lg:text-base leading-snug mt-1"
                    style={{ fontFamily: "'Geist Mono', monospace" }}
                  >
                    {s.detail}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
