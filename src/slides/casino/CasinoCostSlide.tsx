import { motion } from 'framer-motion';

const items = [
  { name: 'Card Processing',        today: '2.5–3.5% of deposit volume',          after: '0',        zero: true  },
  { name: 'Chargebacks & Disputes', today: '0.5–1.0% of deposits + per-dispute',  after: '0',        zero: true  },
  { name: 'PSP Integration Stack',  today: '5+ vendors per geography',            after: '1 rail',   zero: false },
  { name: 'Deposit Funnel',         today: '30% abandon at first attempt',        after: '0 funnel', zero: false },
];

export function CasinoCostSlide() {
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
            Nº 07 · Cost
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[32px] sm:text-[44px] lg:text-[60px] leading-[0.98] tracking-tight mt-3 uppercase"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            Thirty years of on-ramp friction.{' '}
            <span className="text-orange-400">Gone.</span>
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
            Card processing, chargebacks, PSP integrations, deposit funnels — the apparatus that exists to get money into your platform. Agents arrive with the money. They've already KYC'd upstream.
          </motion.p>
        </div>

        {/* Two columns: items going to zero (left) + composite stat (right) */}
        <div className="grid grid-cols-[1.4fr_1fr] gap-12 lg:gap-16 items-stretch shrink-0">

          {/* Left — five line items */}
          <div className="flex flex-col">
            {items.map((it, i) => (
              <motion.div
                key={it.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
                className="grid grid-cols-[1.5fr_60px_0.7fr] items-center gap-4 py-3 lg:py-4"
                style={{
                  borderTop: '1px solid rgba(255,255,255,0.10)',
                  ...(i === items.length - 1
                    ? { borderBottom: '1px solid rgba(255,255,255,0.10)' }
                    : {}),
                }}
              >
                <div>
                  <div
                    className="text-[#fefefe] text-[18px] sm:text-[20px] lg:text-[24px] tracking-[0.04em] uppercase leading-tight"
                    style={{ fontFamily: "'Anton', sans-serif" }}
                  >
                    {it.name}
                  </div>
                  <div
                    className="text-[#fefefe]/40 text-[11px] lg:text-[13px] mt-1"
                    style={{ fontFamily: "'Geist Mono', monospace" }}
                  >
                    {it.today}
                  </div>
                </div>
                <div
                  className="text-[#fefefe]/30 text-center text-base lg:text-lg"
                  style={{ fontFamily: "'Geist Mono', monospace" }}
                >
                  →
                </div>
                <div
                  className="text-orange-400 text-right uppercase leading-none"
                  style={{
                    fontFamily: "'Anton', sans-serif",
                    letterSpacing: '0.02em',
                    fontSize: it.zero ? undefined : undefined,
                  }}
                >
                  <span className={it.zero ? 'text-[44px] lg:text-[56px]' : 'text-[22px] lg:text-[28px]'}>
                    {it.after}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right — composite stat + architecture */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col justify-center gap-7 lg:gap-8 pl-8 lg:pl-10"
            style={{ borderLeft: '1px solid rgba(255,255,255,0.10)' }}
          >
            <div className="flex flex-col gap-1">
              <div
                className="text-[#fefefe]/40 text-[11px] lg:text-[13px] tracking-[0.32em] uppercase font-semibold"
                style={{ fontFamily: "'Geist Mono', monospace" }}
              >
                Composite On-Ramp Cost · Today
              </div>
              <h3
                className="text-orange-400 text-[88px] sm:text-[112px] lg:text-[132px] leading-[0.92] tracking-[-0.005em] uppercase"
                style={{ fontFamily: "'Anton', sans-serif" }}
              >
                15–35%
              </h3>
              <div
                className="text-[#fefefe] text-[24px] sm:text-[28px] lg:text-[34px] leading-tight tracking-[0.04em] uppercase"
                style={{ fontFamily: "'Anton', sans-serif" }}
              >
                Of GGR.
              </div>
              <div
                className="text-[#fefefe]/40 text-[10px] lg:text-xs tracking-[0.12em] uppercase mt-2"
                style={{ fontFamily: "'Geist Mono', monospace" }}
              >
                Edgar Dunn · Aeropay · EPI · 2025–26
              </div>
            </div>

            <p
              className="text-[#fefefe]/78 text-sm lg:text-base leading-[1.6] pt-5"
              style={{
                fontFamily: "'Geist Mono', monospace",
                borderTop: '1px solid rgba(255,255,255,0.10)',
              }}
            >
              Players hold regulated stablecoins — <span className="text-[#fefefe] font-semibold">USDC, EURC, MiCA-compliant</span> — in agent wallets, KYC'd upstream by regulated issuers and exchanges. When the agent opens a session, the money is already there.{' '}
              <span className="text-orange-400 font-semibold">No card network. No PSP stack. No deposit funnel.</span> Once the wager arrives, your platform runs exactly as it does today.
            </p>
          </motion.div>
        </div>

        {/* Closing footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="text-[#fefefe]/65 text-[22px] sm:text-[26px] lg:text-[32px] leading-tight tracking-tight uppercase pt-5 shrink-0"
          style={{
            fontFamily: "'Anton', sans-serif",
            borderTop: '1px solid rgba(249,115,22,0.25)',
          }}
        >
          The agentic interface{' '}
          <span className="text-orange-400">solves your on-ramp problem.</span>
        </motion.p>
      </div>
    </div>
  );
}
