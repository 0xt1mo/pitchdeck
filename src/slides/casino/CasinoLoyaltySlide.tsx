import { motion } from 'framer-motion';

const movements = [
  {
    num: '01',
    title: 'What you have today.',
    text: (
      <>
        Telemetry. Anonymous behavioral signal. CRM segments built from clicks and deposits. Send-time optimization that fires at the moment your CRM thinks is best — not the moment the player is paying attention.
      </>
    ),
    dim: true,
  },
  {
    num: '02',
    title: 'What the agent delivers.',
    text: (
      <>
        <span className="text-[#fefefe] font-semibold">Attention.</span> The agent is in conversation with the player. It knows when the player is <span className="text-[#fefefe] font-semibold">actually present</span> — not because it reads their mind, but because the player just spoke to it.{' '}
        <span className="text-orange-400 font-semibold">A signal you cannot get from any other channel.</span>
      </>
    ),
  },
  {
    num: '03',
    title: 'What you do with it.',
    text: (
      <>
        A reload bonus that arrives in <span className="text-[#fefefe] font-semibold">a live conversation</span>. Delivered at the moment of real attention, where the player already is.{' '}
        <span className="text-orange-400 font-semibold">Personalization by timing — the only personalisation that has ever worked.</span>
      </>
    ),
  },
];

export function CasinoLoyaltySlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col px-12 lg:px-20 py-10 lg:py-14 justify-center gap-8">

        {/* Header */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-orange-400 text-xs sm:text-sm tracking-[0.32em] uppercase font-semibold"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            Nº 05 · Loyalty
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[32px] sm:text-[44px] lg:text-[60px] leading-[0.98] tracking-tight mt-3 uppercase"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            Personalization that{' '}
            <span className="text-orange-400">actually personalizes.</span>
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-[2px] w-24 lg:w-32 bg-orange-500 origin-left mt-5"
            style={{ boxShadow: '0 0 8px rgba(249,115,22,0.7)' }}
          />
        </div>

        {/* Three movements */}
        <div className="flex flex-col shrink-0">
          {movements.map((m, i) => (
            <motion.div
              key={m.num}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.12, duration: 0.5 }}
              className="grid grid-cols-[100px_1fr] items-start gap-x-8 lg:gap-x-12 py-5 lg:py-6"
              style={{
                borderTop: '1px solid rgba(255,255,255,0.10)',
                ...(i === movements.length - 1
                  ? { borderBottom: '1px solid rgba(255,255,255,0.10)' }
                  : {}),
              }}
            >
              <div
                className="text-[52px] sm:text-[60px] lg:text-[72px] leading-none"
                style={{
                  fontFamily: "'Anton', sans-serif",
                  letterSpacing: '0.02em',
                  color: m.dim ? 'rgba(254,254,254,0.38)' : '#FF6A1F',
                }}
              >
                {m.num}
              </div>
              <div className="flex flex-col gap-2">
                <h3
                  className="text-[26px] sm:text-[30px] lg:text-[36px] leading-[1.05] tracking-[0.04em] uppercase"
                  style={{
                    fontFamily: "'Anton', sans-serif",
                    color: m.dim ? 'rgba(254,254,254,0.38)' : '#fefefe',
                  }}
                >
                  {m.title}
                </h3>
                <p
                  className="text-base lg:text-lg leading-[1.55]"
                  style={{
                    fontFamily: "'Geist Mono', monospace",
                    color: m.dim ? 'rgba(254,254,254,0.50)' : 'rgba(254,254,254,0.78)',
                  }}
                >
                  {m.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="text-[#fefefe]/65 text-[22px] sm:text-[28px] lg:text-[36px] leading-tight tracking-tight uppercase pt-5 shrink-0"
          style={{
            fontFamily: "'Anton', sans-serif",
            borderTop: '1px solid rgba(249,115,22,0.25)',
          }}
        >
          Personalization has been a marketing word for thirty years.{' '}
          <span className="text-orange-400">The agent makes it a real one.</span>
        </motion.p>
      </div>
    </div>
  );
}
