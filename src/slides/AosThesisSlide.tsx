import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

const mono = "'Geist Mono', monospace";
const display = "'Anton', sans-serif";

const rows: [string, ReactNode][] = [
  ['single-tenant — one agent, one box', <><span className="text-orange-400">multi-tenant</span> — many agents, sealed apart</>],
  ['wraps one model', <>runs <span className="text-orange-400">any</span> model — no vendor is the landlord</>],
  ['asks nicely — rules live in prompts', <>enforces — rules live in the <span className="text-orange-400">kernel</span>, below the agent</>],
  ['trusts its own code', <>isolates everything, including itself — the loop is sandboxed like any capsule</>],
  ['is a silo — own tools, own memory, amnesia on close', <>shares one toolbox, one memory, one identity system</>],
  ['ships features', <>ships <span className="text-orange-400">guarantees</span></>],
];

export function AosThesisSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-7 lg:py-9 gap-4 lg:gap-6">

        {/* Header */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-orange-400 text-xs lg:text-lg tracking-[0.4em] uppercase font-bold"
            style={{ fontFamily: mono }}
          >
            The thesis
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[30px] sm:text-[46px] lg:text-[64px] xl:text-[74px] leading-[0.95] tracking-tight uppercase mt-2"
            style={{ fontFamily: display }}
          >
            OPERATING SYSTEMS BEAT <span className="text-orange-400">HARNESSES.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="text-[#fefefe]/75 text-sm sm:text-base lg:text-2xl leading-snug mt-3 max-w-6xl"
            style={{ fontFamily: mono }}
          >
            Every agent harness is a model wrapped in a loop, tools, and rules. It runs an agent —{' '}
            <span className="text-[#fefefe] font-bold">it can't govern one. That has to come from below.</span>
          </motion.p>
        </div>

        {/* Contrast table */}
        <div className="shrink-0">
          {/* Column headers */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="grid grid-cols-2 gap-6 lg:gap-14 pb-1"
          >
            <p className="text-[#fefefe]/45 text-xl lg:text-3xl uppercase pl-6 lg:pl-8" style={{ fontFamily: display }}>A harness…</p>
            <p className="text-orange-400 text-xl lg:text-3xl uppercase pl-6 lg:pl-8" style={{ fontFamily: display }}>An OS…</p>
          </motion.div>

          {rows.map(([left, right], i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -14 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.09, duration: 0.4 }}
              className="grid grid-cols-2 gap-6 lg:gap-14 py-1.5 lg:py-2 items-start"
              style={{ borderTop: '1px solid rgba(255,255,255,0.10)' }}
            >
              <div className="flex gap-2.5 lg:gap-3">
                <span className="text-[#fefefe]/25 text-base lg:text-lg leading-tight shrink-0 mt-0.5">✕</span>
                <p className="text-[#fefefe]/55 text-sm sm:text-base lg:text-xl leading-snug" style={{ fontFamily: mono }}>
                  {left}
                </p>
              </div>
              <div className="flex gap-2.5 lg:gap-3">
                <span className="text-orange-400 text-base lg:text-lg leading-tight shrink-0 mt-0.5">✓</span>
                <p className="text-[#fefefe] text-sm sm:text-base lg:text-xl leading-snug" style={{ fontFamily: mono }}>
                  {right}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
