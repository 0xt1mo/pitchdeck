import { motion } from 'framer-motion';

const mono = { fontFamily: "'Geist Mono', monospace" };
const anton = { fontFamily: "'Anton', sans-serif" };
const nodeFill = { backgroundColor: 'rgba(249,115,22,0.06)' };

function AgentNode({ letter, delay }: { letter: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5 }}
      className="shrink-0"
    >
      <div
        className="w-24 h-24 lg:w-28 lg:h-28 rounded-full border-2 border-orange-500/70 flex items-center justify-center"
        style={nodeFill}
      >
        <span className="text-orange-400 text-3xl lg:text-4xl" style={anton}>
          {letter}
        </span>
      </div>
    </motion.div>
  );
}

export function AtomOfFinanceSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      {/* Radial glow */}
      <div
        className="fixed inset-0 z-[1] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 55%, rgba(249,115,22,0.07) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 h-full flex flex-col px-8 sm:px-12 lg:px-20 py-10 sm:py-14 lg:py-16 justify-center gap-10 lg:gap-14">

        {/* Header */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-orange-400 text-sm tracking-[0.4em] uppercase mb-4"
            style={mono}
          >
            No shared ledger. No gatekeepers.
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="text-[#fefefe] text-[42px] sm:text-[64px] lg:text-[80px] leading-[0.98] tracking-tight"
            style={anton}
          >
            JUST A SELF-CONTAINED
            <br />
            <span className="text-orange-400">ATOM OF FINANCE</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-[#fefefe]/80 text-lg sm:text-xl lg:text-2xl leading-relaxed mt-5"
            style={mono}
          >
            Like cash, it carries its own proof and moves peer to peer.
          </motion.p>
        </div>

        {/* Diagram: A ── [TOKEN] ──▶ B */}
        <div className="shrink-0 flex flex-col items-center gap-6 lg:gap-8">
          <div className="w-full max-w-4xl mx-auto flex items-center">
            <AgentNode letter="A" delay={0.5} />

            {/* connector A → token */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.7, duration: 0.4 }}
              className="flex-1 h-[2px] bg-orange-500/60 origin-left"
            />

            {/* Token */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="shrink-0 rounded-2xl border-2 border-orange-500/80 px-8 py-5 lg:px-10 lg:py-6 flex flex-col items-center gap-1"
              style={nodeFill}
            >
              <span className="text-orange-400 text-2xl lg:text-3xl tracking-wide" style={anton}>
                TOKEN
              </span>
              <span className="text-[#fefefe]/60 text-xs lg:text-sm" style={mono}>
                sealed · self-verifying
              </span>
            </motion.div>

            {/* connector token → B with arrowhead */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.4 }}
              className="flex-1 flex items-center"
            >
              <div className="flex-1 h-[2px] bg-orange-500/60" />
              <div className="w-0 h-0 border-y-[7px] border-y-transparent border-l-[11px] border-l-orange-500/80" />
            </motion.div>

            <AgentNode letter="B" delay={1.1} />
          </div>

          {/* Caption */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="text-[#fefefe]/85 text-base sm:text-lg lg:text-xl leading-relaxed text-center"
            style={mono}
          >
            Verifies on arrival — <span className="text-orange-400">no chain to call, no ledger to ask.</span>
          </motion.p>
        </div>

        {/* Footer tags */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="shrink-0 text-[#fefefe]/45 text-xs sm:text-sm tracking-[0.3em] uppercase text-center"
          style={mono}
        >
          Peer-to-Peer&nbsp;&nbsp;·&nbsp;&nbsp;Bearer&nbsp;&nbsp;·&nbsp;&nbsp;No Chain Dependency
        </motion.p>

      </div>
    </div>
  );
}
