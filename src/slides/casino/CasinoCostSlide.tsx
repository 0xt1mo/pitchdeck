import { motion } from 'framer-motion';
import { CasinoPhone, PHONE } from './CasinoPhone';

const items = [
  { name: 'Card Processing',     today: '2.5–3.5% of deposit volume',           after: '0',       zero: true  },
  { name: 'Chargebacks & Disputes', today: '0.5–1.0% of deposits + per dispute', after: '0',       zero: true  },
  { name: 'PSP Integration Stack', today: '5+ providers per region',            after: '1 path',  zero: false },
  { name: 'Deposit Funnel',      today: '30% drop on first attempt',            after: '0 funnel', zero: false },
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
            No. 07 · Cost
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[32px] sm:text-[44px] lg:text-[60px] leading-[0.98] tracking-tight mt-3 uppercase"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            Agents collapse{' '}
            <span className="text-orange-400">payment friction.</span>
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
            Card processing, chargebacks, PSP integrations, deposit funnels — the apparatus that exists to move money onto your platform. Agents arrive with the money. They cleared KYC upstream.
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

          {/* Right — agent wallet screenshot */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="relative flex items-center justify-center pl-8 lg:pl-10"
            style={{ borderLeft: '1px solid rgba(255,255,255,0.10)' }}
          >
            {/* Bracket corners */}
            <span className="absolute top-0 left-8 lg:left-10 w-5 h-5 border-l-2 border-t-2 border-orange-500" />
            <span className="absolute top-0 right-0 w-5 h-5 border-r-2 border-t-2 border-orange-500" />
            <span className="absolute bottom-0 left-8 lg:left-10 w-5 h-5 border-l-2 border-b-2 border-orange-500" />
            <span className="absolute bottom-0 right-0 w-5 h-5 border-r-2 border-b-2 border-orange-500" />

            <div className="mx-auto w-full max-w-[340px]" style={{ filter: 'drop-shadow(0 28px 55px rgba(0,0,0,0.55))' }}><CasinoPhone {...PHONE.wallet} /></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
