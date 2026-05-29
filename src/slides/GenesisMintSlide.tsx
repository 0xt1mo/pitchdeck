import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight, ArrowLeft, Check } from 'lucide-react';

const mono = { fontFamily: "'Geist Mono', monospace" };
const anton = { fontFamily: "'Anton', sans-serif" };

function SideCard({ eyebrow, title, desc }: { eyebrow: string; title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-[#fefefe]/12 bg-[#fefefe]/[0.03] px-5 lg:px-6 py-4 lg:py-5">
      <p className="text-orange-400/70 text-[11px] lg:text-sm tracking-[0.25em] uppercase" style={mono}>{eyebrow}</p>
      <h3 className="text-[#fefefe] text-2xl lg:text-3xl leading-none mt-2" style={anton}>{title}</h3>
      <p className="text-[#fefefe]/75 text-sm lg:text-lg leading-snug mt-2" style={mono}>{desc}</p>
    </div>
  );
}

export function GenesisMintSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col px-8 sm:px-12 lg:px-20 py-7 sm:py-9 lg:py-10 justify-center gap-5 lg:gap-7">

        {/* Header */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}
            className="text-orange-400 text-[11px] lg:text-sm tracking-[0.35em] uppercase"
            style={mono}
          >
            Minting Path · 1 of 3 <span className="text-[#fefefe]/55">· Token Genesis · Native Currency</span>
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
            className="text-[32px] sm:text-[48px] lg:text-[62px] leading-[1.0] tracking-tight mt-2"
            style={anton}
          >
            <span className="text-[#fefefe]">NATIVE CURRENCY GENESIS: MINTING </span>
            <span className="text-orange-400">OFF-CHAIN</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.6 }}
            className="text-[#fefefe]/65 text-sm sm:text-base lg:text-lg leading-relaxed mt-2 max-w-5xl"
            style={mono}
          >
            A token is minted by combining three independent cryptographic artifacts — together they make it <span className="text-orange-400">self-authenticating</span>, verifiable by anyone, forever.
          </motion.p>
        </div>

        {/* Convergence diagram */}
        <motion.div
          initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 0.6 }}
          className="shrink-0 flex flex-col items-center gap-2"
        >
          {/* Top — PoW header chain */}
          <div className="rounded-2xl border border-[#fefefe]/12 bg-[#fefefe]/[0.03] px-6 py-4 w-full max-w-lg text-center">
            <p className="text-orange-400/70 text-[11px] lg:text-sm tracking-[0.25em] uppercase mb-2.5" style={mono}>From the Consensus Layer</p>
            <div className="flex items-center justify-center gap-1.5">
              <Block label="⋯" dim />
              <Block label="block N-2" highlight tag="reward" />
              <Block label="block N-1" dim />
              <Block label="block N" dim />
            </div>
            <p className="text-[#fefefe] text-lg lg:text-2xl mt-3" style={anton}>POW HEADER CHAIN</p>
            <p className="text-[#fefefe]/70 text-xs lg:text-base" style={mono}>accumulated work anchors the token</p>
          </div>

          <ArrowDown className="w-5 h-5 lg:w-6 lg:h-6 text-orange-400" strokeWidth={2} />

          {/* Middle row */}
          <div className="grid grid-cols-[1fr_auto_1.1fr_auto_1fr] items-center gap-2 lg:gap-3 w-full">
            <SideCard eyebrow="From the Block-Reward Winner" title="Digital signature" desc="miner authorizes the off-chain mint" />
            <ArrowRight className="w-5 h-5 lg:w-7 lg:h-7 text-orange-400 mx-auto" strokeWidth={2} />

            {/* Genesis token — hero */}
            <div
              className="rounded-2xl border-2 border-orange-500 px-5 lg:px-7 py-6 lg:py-8 text-center"
              style={{ background: 'linear-gradient(160deg, rgba(249,115,22,0.18), rgba(249,115,22,0.03))', boxShadow: '0 0 55px rgba(249,115,22,0.3)' }}
            >
              <p className="text-orange-400/90 text-[11px] lg:text-sm tracking-[0.25em] uppercase" style={mono}>Genesis Token</p>
              <h3 className="text-orange-400 text-3xl lg:text-5xl leading-none mt-1.5" style={anton}>OFF-CHAIN</h3>
              <div className="flex justify-center mt-3">
                <Check className="w-6 h-6 lg:w-8 lg:h-8 text-orange-400" strokeWidth={2.5} />
              </div>
            </div>

            <ArrowLeft className="w-5 h-5 lg:w-7 lg:h-7 text-orange-400 mx-auto" strokeWidth={2} />
            <SideCard eyebrow="From the Uniqueness Oracle" title="Unicity proof" desc="no conflicting version exists" />
          </div>
        </motion.div>

      </div>
    </div>
  );
}

function Block({ label, tag, dim, highlight }: { label: string; tag?: string; dim?: boolean; highlight?: boolean }) {
  return (
    <div className="flex flex-col items-center">
      <div
        className="rounded-md px-3 py-2 text-xs lg:text-sm leading-none"
        style={{
          ...mono,
          border: highlight ? '1.5px solid #f97316' : '1px solid rgba(254,254,254,0.2)',
          background: highlight ? 'rgba(249,115,22,0.12)' : 'rgba(255,255,255,0.04)',
          color: highlight ? '#fb923c' : dim ? 'rgba(254,254,254,0.6)' : 'rgba(254,254,254,0.85)',
        }}
      >
        {label}
      </div>
      {tag && <span className="text-orange-400/90 text-[10px] lg:text-xs mt-1.5" style={mono}>{tag}</span>}
    </div>
  );
}
