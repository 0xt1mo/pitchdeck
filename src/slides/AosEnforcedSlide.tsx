import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

const mono = "'Geist Mono', monospace";
const display = "'Anton', sans-serif";

const rows: [string, ReactNode][] = [
  ['asks nicely — rules live in prompts', <>enforces — rules live in the <span className="text-orange-400">kernel</span>, below the agent</>],
  ["wraps one vendor's model", <>runs <span className="text-orange-400">any</span> model — no vendor is the landlord</>],
  ['ships features', <>ships <span className="text-orange-400">guarantees</span></>],
];

export function AosEnforcedSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-8 lg:py-11 gap-5 lg:gap-7">

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
            className="text-[#fefefe] text-[34px] sm:text-[52px] lg:text-[72px] xl:text-[84px] leading-[0.95] tracking-tight uppercase mt-2"
            style={{ fontFamily: display }}
          >
            OPERATING SYSTEMS BEAT <span className="text-orange-400">HARNESSES.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="text-[#fefefe]/80 text-base sm:text-lg lg:text-2xl leading-snug mt-3 max-w-6xl"
            style={{ fontFamily: mono }}
          >
            Rules live in the kernel, below the agent — <span className="text-[#fefefe] font-bold">not in prompts the agent can edit, ignore, or be argued out of.</span> That's the difference between an application and an operating system.
          </motion.p>
        </div>

        {/* Contrast table — 3 rows */}
        <div className="shrink-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="grid grid-cols-2 gap-6 lg:gap-14 pb-2"
          >
            <p className="text-[#fefefe]/45 text-2xl lg:text-4xl uppercase pl-7 lg:pl-9" style={{ fontFamily: display }}>A harness…</p>
            <p className="text-orange-400 text-2xl lg:text-4xl uppercase pl-7 lg:pl-9" style={{ fontFamily: display }}>An OS…</p>
          </motion.div>

          {rows.map(([left, right], i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -14 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.1, duration: 0.4 }}
              className="grid grid-cols-2 gap-6 lg:gap-14 py-3 lg:py-4 items-start"
              style={{ borderTop: '1px solid rgba(255,255,255,0.10)' }}
            >
              <div className="flex gap-3 lg:gap-4">
                <span className="text-[#fefefe]/25 text-xl lg:text-3xl leading-tight shrink-0">✕</span>
                <p className="text-[#fefefe]/55 text-base sm:text-lg lg:text-2xl leading-snug" style={{ fontFamily: mono }}>
                  {left}
                </p>
              </div>
              <div className="flex gap-3 lg:gap-4">
                <span className="text-orange-400 text-xl lg:text-3xl leading-tight shrink-0">✓</span>
                <p className="text-[#fefefe] text-base sm:text-lg lg:text-2xl leading-snug" style={{ fontFamily: mono }}>
                  {right}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Multi-harness callout */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="shrink-0 rounded-xl px-6 py-4 lg:px-8 lg:py-5"
          style={{ border: '1px solid rgba(249,115,22,0.35)', background: 'rgba(249,115,22,0.05)' }}
        >
          <p className="text-[#fefefe] text-base sm:text-lg lg:text-2xl leading-snug" style={{ fontFamily: mono }}>
            One rulebook over <span className="text-orange-400 font-bold">Claude Code, Codex, and whatever your teams adopt next.</span>
          </p>
        </motion.div>

      </div>
    </div>
  );
}
