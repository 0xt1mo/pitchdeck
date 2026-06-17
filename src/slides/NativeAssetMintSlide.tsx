import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';

const mono = { fontFamily: "'Geist Mono', monospace" };
const anton = { fontFamily: "'Anton', sans-serif" };

function Step({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[#fefefe]/45 text-[10px] lg:text-xs tracking-[0.3em] uppercase text-center" style={mono}>
      {children}
    </p>
  );
}

function FlowArrow({ label }: { label?: string }) {
  return (
    <div className="flex flex-col items-center justify-center px-1">
      {label && <span className="text-[#fefefe]/55 text-[11px] lg:text-sm mb-1.5" style={mono}>{label}</span>}
      <ArrowRight className="w-6 h-6 lg:w-8 lg:h-8 text-orange-400" strokeWidth={2} />
    </div>
  );
}

export function NativeAssetMintSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col px-8 sm:px-12 lg:px-20 py-8 sm:py-10 lg:py-12 justify-center gap-8 lg:gap-12">

        {/* Header */}
        <div className="shrink-0">
          <motion.h1
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}
            className="text-[34px] sm:text-[54px] lg:text-[72px] leading-[1.0] tracking-tight mt-2"
            style={anton}
          >
            <span className="text-[#fefefe]">NATIVE TOKENS: </span>
            <span className="text-orange-400">OFF-CHAIN MINTING</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.6 }}
            className="text-[#fefefe]/65 text-sm sm:text-base lg:text-xl leading-relaxed mt-2 max-w-5xl"
            style={mono}
          >
            No PoW, no miner, no external chain. A creator defines the asset and registers its genesis with the Uniqueness Oracle. <span className="text-orange-400">The token exists.</span>
          </motion.p>
        </div>

        {/* Pipeline */}
        <motion.div
          initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.45, duration: 0.6 }}
          className="shrink-0 grid items-center gap-x-3 lg:gap-x-4 gap-y-3"
          style={{ gridTemplateColumns: 'auto auto 1fr auto 1fr auto 1fr' }}
        >
          {/* Row 1 — flow */}
          <div className="w-28 h-28 lg:w-36 lg:h-36 rounded-full border border-[#fefefe]/20 bg-[#fefefe]/[0.03] flex flex-col items-center justify-center text-center">
            <span className="text-[#fefefe] text-lg lg:text-2xl leading-none" style={anton}>Creator</span>
            <span className="text-[#fefefe]/55 text-xs lg:text-sm mt-1.5" style={mono}>any user</span>
          </div>

          <FlowArrow label="defines" />

          <div className="rounded-2xl border border-[#fefefe]/12 bg-[#fefefe]/[0.03] px-5 lg:px-6 py-5 text-center">
            <h3 className="text-[#fefefe] text-lg lg:text-2xl leading-none" style={anton}>Genesis transaction</h3>
            <p className="text-[#fefefe]/60 text-xs lg:text-base leading-snug mt-2.5" style={mono}>asset type · supply · rules</p>
            <p className="text-[#fefefe]/60 text-xs lg:text-base leading-snug" style={mono}>signed by the creator</p>
          </div>

          <FlowArrow label="registers" />

          <div className="rounded-2xl border border-[#fefefe]/12 bg-[#fefefe]/[0.03] px-5 lg:px-6 py-5 text-center">
            <h3 className="text-[#fefefe] text-lg lg:text-2xl leading-none" style={anton}>Uniqueness Oracle</h3>
            <p className="text-[#fefefe]/60 text-xs lg:text-base leading-snug mt-2.5" style={mono}>returns the Unicity proof</p>
            <p className="text-[#fefefe]/60 text-xs lg:text-base leading-snug" style={mono}>no conflicting version</p>
          </div>

          <FlowArrow />

          <div
            className="rounded-2xl border-2 border-orange-500 px-5 lg:px-6 py-5 text-center"
            style={{ background: 'linear-gradient(160deg, rgba(249,115,22,0.18), rgba(249,115,22,0.03))', boxShadow: '0 0 50px rgba(249,115,22,0.28)' }}
          >
            <p className="text-orange-400/90 text-[10px] lg:text-xs tracking-[0.25em] uppercase" style={mono}>Native Asset</p>
            <h3 className="text-orange-400 text-2xl lg:text-4xl leading-none mt-1.5" style={anton}>off-chain</h3>
            <div className="flex justify-center mt-2.5">
              <Check className="w-5 h-5 lg:w-7 lg:h-7 text-orange-400" strokeWidth={2.5} />
            </div>
          </div>

          {/* Row 2 — step labels */}
          <Step>Step 1</Step>
          <div />
          <Step>Step 2</Step>
          <div />
          <Step>Step 3</Step>
          <div />
          <div />
        </motion.div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0, duration: 0.6 }}
          className="shrink-0 text-[#fefefe]/45 text-xs lg:text-base tracking-[0.25em] uppercase text-center"
          style={mono}
        >
          No Miner&nbsp;&nbsp;·&nbsp;&nbsp;No Source Chain&nbsp;&nbsp;·&nbsp;&nbsp;Just an Asset and an Oracle
        </motion.p>

      </div>
    </div>
  );
}
