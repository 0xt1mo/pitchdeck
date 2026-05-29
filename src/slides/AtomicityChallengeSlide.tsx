import { motion } from 'framer-motion';

const mono = { fontFamily: "'Geist Mono', monospace" };
const anton = { fontFamily: "'Anton', sans-serif" };

export function AtomicityChallengeSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col px-8 sm:px-12 lg:px-20 py-8 sm:py-10 lg:py-12 justify-center gap-7 lg:gap-9">

        {/* Header */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-[#fefefe]/40 text-[11px] lg:text-xs tracking-[0.3em] uppercase mb-3"
            style={mono}
          >
            The Hard Engineering Problem
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[30px] sm:text-[46px] lg:text-[60px] leading-[1.0] tracking-tight"
            style={anton}
          >
            <span className="text-[#fefefe]">IN DEFI, THE ATOMIC OPERATION IS THE</span>{' '}
            <span className="text-orange-400">SWAP</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-[#fefefe]/65 text-sm sm:text-base lg:text-xl leading-relaxed mt-3 max-w-5xl"
            style={mono}
          >
            Two assets change hands at once — <span className="text-[#fefefe] font-semibold">all-or-nothing</span>. No half-completed trade where one side pays and the other vanishes.
          </motion.p>
        </div>

        {/* Trivial vs Genuinely hard */}
        <div className="shrink-0 grid grid-cols-2 gap-6 lg:gap-10 items-stretch">

          {/* On a shared ledger — trivial */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.45, duration: 0.5 }}
            className="rounded-2xl border border-[#fefefe]/12 bg-[#fefefe]/[0.02] p-6 lg:p-8"
          >
            <p className="text-[#fefefe]/40 text-[11px] lg:text-xs tracking-[0.3em] uppercase mb-3" style={mono}>On a Shared Ledger</p>
            <h3 className="text-[#fefefe] text-3xl lg:text-5xl leading-none" style={anton}>TRIVIAL</h3>
            <p className="text-[#fefefe]/60 text-sm lg:text-lg leading-relaxed mt-4" style={mono}>
              One ledger orders both legs in a single block. The chain referees the swap — atomicity comes for free.
            </p>
          </motion.div>

          {/* With P2P bearer tokens — genuinely hard */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.55, duration: 0.5 }}
            className="rounded-2xl border-2 border-orange-500 p-6 lg:p-8"
            style={{
              background: 'linear-gradient(160deg, rgba(249,115,22,0.12), rgba(249,115,22,0.02))',
              boxShadow: '0 0 45px rgba(249,115,22,0.18)',
            }}
          >
            <p className="text-orange-400/80 text-[11px] lg:text-xs tracking-[0.3em] uppercase mb-3" style={mono}>With P2P Bearer Tokens</p>
            <h3 className="text-orange-400 text-3xl lg:text-5xl leading-none" style={anton}>GENUINELY HARD</h3>
            <p className="text-[#fefefe]/80 text-sm lg:text-lg leading-relaxed mt-4" style={mono}>
              No shared ledger, no referee. Two objects, two holders — yet the swap must still be all-or-nothing. This is the problem we solved.
            </p>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="shrink-0 text-[#fefefe]/40 text-xs lg:text-sm tracking-[0.25em] uppercase text-center"
          style={mono}
        >
          Easy With a Referee&nbsp;&nbsp;·&nbsp;&nbsp;Hard Without One
        </motion.p>

      </div>
    </div>
  );
}
