import { motion } from 'framer-motion';

const mono = "'Geist Mono', monospace";
const display = "'Anton', sans-serif";

const facts = [
  { k: 'Live in a browser tab', v: 'The open Astrid Runtime runs at astridos.org — right now, no install.' },
  { k: 'One-command install', v: 'curl · Homebrew · Cargo. On your machine in a minute.' },
  { k: 'Claude Code plugin shipped', v: 'Codex & OpenClaw next — real harnesses, already resident.' },
  { k: '~200 developers', v: 'On the community build of the Astrid Runtime.' },
  { k: '36-chapter book', v: 'Ships with the OS — the manual for a new layer.' },
  { k: 'Open in the wild', v: 'Public RFCs and a Rust capsule SDK on GitHub.' },
];

export function AosRealTodaySlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-9 lg:py-12 gap-6 lg:gap-8">

        {/* Header */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-orange-400 text-xs sm:text-xs lg:text-lg tracking-[0.4em] uppercase font-bold"
            style={{ fontFamily: mono }}
          >
            Traction
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[36px] sm:text-[56px] lg:text-[80px] xl:text-[92px] leading-[0.95] tracking-tight uppercase mt-2"
            style={{ fontFamily: display }}
          >
            IT&apos;S REAL. <span className="text-orange-400">TODAY.</span>
          </motion.h1>
        </div>

        {/* Facts grid */}
        <div className="shrink-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {facts.map((f, i) => (
            <motion.div
              key={f.k}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }}
              className="rounded-xl p-5 flex flex-col"
              style={{ background: 'rgba(255,255,255,0.015)', border: '1px solid rgba(249,115,22,0.25)' }}
            >
              <p className="text-orange-400 text-sm lg:text-2xl font-bold leading-tight" style={{ fontFamily: mono }}>{f.k}</p>
              <p className="text-[#fefefe]/70 text-xs lg:text-lg leading-snug mt-2" style={{ fontFamily: mono }}>{f.v}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
