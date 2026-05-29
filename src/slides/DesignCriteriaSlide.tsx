import { motion } from 'framer-motion';

const mono = { fontFamily: "'Geist Mono', monospace" };
const anton = { fontFamily: "'Anton', sans-serif" };
const nodeFill = { backgroundColor: 'rgba(249,115,22,0.06)' };

function Criterion({ n, title, caption, delay }: { n: string; title: string; caption: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 0.45 }}
      className="flex items-start gap-5 lg:gap-7"
    >
      <span
        className="text-orange-500/25 text-[44px] lg:text-[64px] leading-[0.8] shrink-0 tabular-nums"
        style={anton}
      >
        {n}
      </span>
      <div className="pt-1">
        <h3 className="text-[#fefefe] text-[26px] lg:text-[38px] leading-[0.9]" style={anton}>
          {title}
        </h3>
        <p className="text-orange-400 text-sm lg:text-lg mt-1.5" style={mono}>
          {caption}
        </p>
      </div>
    </motion.div>
  );
}

export function DesignCriteriaSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col px-8 sm:px-12 lg:px-20 py-10 sm:py-14 lg:py-16 justify-center gap-10 lg:gap-14">

        {/* Header */}
        <div className="shrink-0">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[42px] sm:text-[64px] lg:text-[80px] leading-[0.98] tracking-tight"
            style={anton}
          >
            DESIGN <span className="text-orange-400">CRITERIA</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-[#fefefe]/80 text-lg sm:text-xl lg:text-2xl leading-relaxed mt-4"
            style={mono}
          >
            What a peer-to-peer financial network has to be.
          </motion.p>
        </div>

        {/* Two columns */}
        <div className="shrink-0 flex gap-10 lg:gap-20">
          {/* Left — 01–04 */}
          <div className="flex-1 flex flex-col gap-7 lg:gap-9">
            <Criterion n="01" title="PRIVACY" caption="by default" delay={0.45} />
            <Criterion n="02" title="THROUGHPUT" caption="no bottleneck" delay={0.55} />
            <Criterion n="03" title="COMPLIANCE" caption="as needed" delay={0.65} />
            <Criterion n="04" title="COMPOSABLE" caption="functions" delay={0.75} />
          </div>

          {/* Divider */}
          <div className="w-px bg-orange-500/25 self-stretch" />

          {/* Right — 05–07 + callout */}
          <div className="flex-1 flex flex-col gap-7 lg:gap-9">
            <Criterion n="05" title="LOCAL" caption="no bridge risk" delay={0.5} />
            <Criterion n="06" title="FAST" caption="machine speed" delay={0.6} />
            <Criterion n="07" title="DECENTRALIZED" caption="no trusted operator" delay={0.7} />
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.95, duration: 0.5 }}
              className="rounded-2xl border border-orange-500/70 px-8 py-6 text-center mt-1"
              style={nodeFill}
            >
              <p className="text-[#fefefe] text-lg lg:text-2xl leading-snug" style={mono}>
                No shared-ledger chain <span className="text-orange-400">meets all seven.</span>
              </p>
            </motion.div>
          </div>
        </div>

      </div>
    </div>
  );
}
