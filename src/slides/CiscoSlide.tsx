import { motion } from 'framer-motion';

const cards = [
  { eyebrow: 'Land', label: 'SECURITY', highlight: true },
  { eyebrow: 'Control', label: 'GOVERNANCE', highlight: false, eyebrowMuted: true },
  { eyebrow: 'Moat', label: 'NETWORKING', highlight: false },
  { eyebrow: 'Monetize', label: 'PAYMENTS', highlight: false },
];

export function CiscoSlide() {
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
            Go-to-Market
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[32px] sm:text-[44px] lg:text-[56px] leading-[0.95] tracking-tight mt-2"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            THE CISCO FOR THE <span className="text-orange-400">AGENTIC INTERNET</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-4 text-[#fefefe]/85 text-lg sm:text-xl lg:text-2xl max-w-5xl leading-relaxed"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            Our product is an enterprise compute platform built around the Unicity L1. Security gets us in the door. Networking and payments keep us there.
          </motion.p>
        </div>

        {/* Platform frame with overlapping label */}
        <motion.div
          initial={{ opacity: 0, scaleY: 0.95 }}
          animate={{ opacity: 1, scaleY: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="relative shrink-0 origin-top rounded-md p-6 lg:p-8"
          style={{ border: '1px solid rgba(249,115,22,0.55)' }}
        >
          {/* Frame label */}
          <p
            className="absolute -top-[10px] left-8 px-3 text-orange-400 text-xs lg:text-sm tracking-[0.3em] uppercase font-bold"
            style={{
              fontFamily: "'Geist Mono', monospace",
              background: '#060606',
            }}
          >
            AgentSphere — The Platform
          </p>

          {/* Four cards */}
          <div className="grid grid-cols-4 gap-4 lg:gap-5">
            {cards.map((c, i) => (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.6 + i * 0.1 }}
                className="rounded-md py-7 lg:py-9 px-4 flex flex-col items-center justify-center text-center"
                style={{
                  border: `1px solid ${c.highlight ? 'rgba(249,115,22,0.7)' : 'rgba(249,115,22,0.30)'}`,
                  background: c.highlight ? 'rgba(249,115,22,0.10)' : 'rgba(249,115,22,0.02)',
                  boxShadow: c.highlight ? '0 0 24px -6px rgba(249,115,22,0.45)' : 'none',
                }}
              >
                <p
                  className="text-xs lg:text-sm tracking-[0.3em] uppercase font-bold mb-3"
                  style={{
                    fontFamily: "'Geist Mono', monospace",
                    color: c.eyebrowMuted ? 'rgba(255,255,255,0.35)' : 'rgba(249,115,22,0.85)',
                  }}
                >
                  {c.eyebrow}
                </p>
                <p
                  className="text-[#fefefe] text-[20px] sm:text-[24px] lg:text-[30px] leading-none tracking-tight"
                  style={{ fontFamily: "'Anton', sans-serif" }}
                >
                  {c.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="text-orange-400 text-[20px] sm:text-[26px] lg:text-[32px] leading-[0.95] tracking-tight pt-5 shrink-0"
          style={{
            fontFamily: "'Anton', sans-serif",
            borderTop: '1px solid rgba(249,115,22,0.25)',
          }}
        >
          LAND WITH SECURITY. EXPAND WITH THE NETWORK.
        </motion.p>

      </div>
    </div>
  );
}
