import { motion } from 'framer-motion';

const mono = "'Geist Mono', monospace";
const display = "'Anton', sans-serif";

const chain = [
  { who: 'YOU', keys: 'ALL', detail: 'You hold every key.', n: 4 },
  { who: 'YOUR AGENT', keys: '3', detail: 'Files · web · commands — never your passwords.', n: 3 },
  { who: 'ITS HELPER', keys: '2', detail: 'A subset of what the agent held.', n: 2 },
  { who: "HELPER'S HELPER", keys: '1', detail: 'One key. That is all it can ever do.', n: 1 },
];

export function AosPowerNarrowsSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-9 lg:py-12 gap-6 lg:gap-9">

        {/* Header */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-orange-400 text-xs sm:text-xs lg:text-lg tracking-[0.4em] uppercase font-bold"
            style={{ fontFamily: mono }}
          >
            The architecture · capabilities
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[34px] sm:text-[52px] lg:text-[74px] xl:text-[86px] leading-[0.95] tracking-tight uppercase mt-2"
            style={{ fontFamily: display }}
          >
            POWER ONLY <span className="text-orange-400">NARROWS.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="text-[#fefefe]/80 text-sm sm:text-base lg:text-2xl leading-snug mt-4 max-w-5xl"
            style={{ fontFamily: mono }}
          >
            Capabilities are <span className="text-orange-400 font-bold">signed tokens, not prompt instructions.</span> You cut your agent a few keys;
            it cuts its helper fewer; down the whole chain, keys only get fewer.
          </motion.p>
        </div>

        {/* Key-cutting chain */}
        <div className="shrink-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] items-stretch gap-3 lg:gap-2">
          {chain.map((node, i) => (
            <div key={node.who} className="contents">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 + i * 0.14, duration: 0.45 }}
                className="rounded-2xl p-4 lg:p-5 flex flex-col"
                style={{
                  background: i === 0 ? 'rgba(249,115,22,0.08)' : 'rgba(255,255,255,0.015)',
                  border: i === 0 ? '1.5px solid rgba(249,115,22,0.6)' : '1px solid rgba(255,255,255,0.14)',
                }}
              >
                <div className="flex items-center justify-between">
                  <p className="text-[#fefefe] text-xs sm:text-sm lg:text-xl font-bold tracking-[0.08em] uppercase" style={{ fontFamily: mono }}>
                    {node.who}
                  </p>
                  <span className="text-orange-400 text-xs lg:text-lg font-bold" style={{ fontFamily: mono }}>{node.keys}</span>
                </div>
                {/* key glyphs */}
                <div className="flex gap-1 mt-2.5">
                  {Array.from({ length: 4 }).map((_, k) => (
                    <span key={k} className={`text-base lg:text-2xl leading-none ${k < node.n ? 'text-orange-400' : 'text-[#fefefe]/12'}`}>⚿</span>
                  ))}
                </div>
                <p className="text-[#fefefe]/65 text-xs lg:text-xl leading-snug mt-3" style={{ fontFamily: mono }}>
                  {node.detail}
                </p>
              </motion.div>
              {i < chain.length - 1 && (
                <div className="hidden lg:flex items-center justify-center">
                  <span className="text-orange-400/60 text-xl">→</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Closing + OS tag */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.95, duration: 0.6 }}
          className="shrink-0 text-[#fefefe]/85 text-base sm:text-lg lg:text-2xl leading-snug pt-3"
          style={{ fontFamily: mono, borderTop: '1px solid rgba(255,255,255,0.10)' }}
        >
          Not a promise in a prompt. <span className="text-orange-400">This is how the machine is built.</span>
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          className="shrink-0 text-[#fefefe]/35 text-xs lg:text-xl tracking-[0.3em] uppercase"
          style={{ fontFamily: mono }}
        >
          This is what makes it an OS.
        </motion.p>

      </div>
    </div>
  );
}
