import { motion } from 'framer-motion';
import { Fragment } from 'react';

const mono = "'Geist Mono', monospace";
const anton = "'Anton', sans-serif";

const items = [
  {
    num: '01',
    title: 'ASTRID OS · WDK',
    desc: 'Secure agent payments — WDK, with a Ledger device holding the keys.',
  },
  {
    num: '02',
    title: 'AGENT VERIFIABLE EXECUTION',
    desc: 'Tokens as native data types — provable execution, not just a log.',
  },
  {
    num: '03',
    title: 'SCALING PLASMA FOR A2A',
    desc: 'USDT to millions of TPS — privacy and compliance in the protocol.',
  },
];

export function DemoAgendaSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      {/* Warm glow, top-left */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(50% 45% at 25% 0%, rgba(249,115,22,0.10), transparent 70%)' }}
      />

      <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-12 lg:px-20 py-10 lg:py-14 gap-8 lg:gap-12">

        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="shrink-0 text-[34px] sm:text-[52px] lg:text-[72px] leading-[0.95] tracking-tight uppercase"
          style={{ fontFamily: anton }}
        >
          <span className="text-[#fefefe]">What we'll demo</span>{' '}
          <span className="text-orange-400">today.</span>
        </motion.h1>

        {/* Items */}
        <div className="shrink-0 flex flex-col">
          {items.map((it, i) => (
            <Fragment key={it.num}>
              {i > 0 && <div className="h-px w-full bg-[#fefefe]/12" />}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.15, duration: 0.5 }}
                className="flex items-center gap-6 lg:gap-12 py-6 lg:py-9"
              >
                <span
                  className="shrink-0 text-orange-400 text-5xl sm:text-6xl lg:text-8xl leading-none w-[1.6em] text-center"
                  style={{ fontFamily: anton }}
                >
                  {it.num}
                </span>
                <div className="min-w-0">
                  <p
                    className="text-[#fefefe] text-2xl sm:text-4xl lg:text-6xl leading-[0.98] uppercase"
                    style={{ fontFamily: anton }}
                  >
                    {it.title}
                  </p>
                  <p
                    className="text-[#fefefe]/80 text-base sm:text-lg lg:text-2xl leading-snug mt-2 lg:mt-3"
                    style={{ fontFamily: mono }}
                  >
                    {it.desc}
                  </p>
                </div>
              </motion.div>
            </Fragment>
          ))}
        </div>

      </div>
    </div>
  );
}
