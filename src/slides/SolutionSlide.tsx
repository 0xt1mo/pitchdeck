import { motion } from 'framer-motion';
import splashVideoUrl from '/kling_20260226_VIDEO_Take_Image_1650_0.mp4';
import unicityLogoUrl from '/UnicityLogo.svg';

export function SolutionSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-y-auto">
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
        <video className="w-full h-full object-cover opacity-25" autoPlay muted loop playsInline src={splashVideoUrl} />
        <div className="absolute inset-0 bg-[#060606]/40" />
      </div>

      {/* Header — absolute so it doesn't affect centering */}
      <div className="fixed z-20 top-6 sm:top-8 left-6 sm:left-10 lg:left-16 pointer-events-none">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="text-orange-400 text-[10px] sm:text-xs tracking-[0.4em] uppercase"
          style={{ fontFamily: "'Geist Mono', monospace" }}>
          Our Solution
        </motion.p>
        <motion.h1 initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="text-[#fefefe] text-[28px] sm:text-[40px] lg:text-[52px] leading-[0.95] tracking-tight mt-1"
          style={{ fontFamily: "'Anton', sans-serif" }}>
          THE UNICITY{' '}<span className="text-orange-400">PLATFORM</span>
        </motion.h1>
        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-[2px] w-32 sm:w-48 bg-gradient-to-r from-orange-500 to-transparent origin-left mt-2" />
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-[#fefefe]/70 text-sm sm:text-base mt-3 max-w-3xl leading-relaxed"
          style={{ fontFamily: "'Geist Mono', monospace" }}>
          Today's agents are stitched together from guardrails, frameworks, and shared ledgers that weren't designed for autonomous operation. Unicity is an integrated stack — security, runtime, and settlement — purpose-built for agents that need to act, transact, and settle at machine speed without human supervision.
        </motion.p>
      </div>

      {/* Layout: stacked on mobile, two-column on lg+ */}
      <div className="relative z-10 h-full flex flex-col lg:grid lg:grid-cols-2">

        {/* Left — vertical stack architecture diagram */}
        <div className="relative flex items-center justify-center flex-1 lg:flex-none pt-24 sm:pt-28 lg:pt-0 px-6 sm:px-10 lg:px-12">
          <div className="w-full max-w-[480px] flex flex-col items-center gap-0">

            {/* Connector label */}
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
              className="text-[#fefefe]/70 text-xs sm:text-sm tracking-[0.2em] uppercase mb-3"
              style={{ fontFamily: "'Geist Mono', monospace" }}>
              All agent traffic passes through one layer
            </motion.p>

            {/* Layer 1: Agent Frameworks */}
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="w-full rounded-xl border border-blue-400/20 bg-blue-500/[0.06] backdrop-blur-sm py-4 sm:py-5">
              <p className="text-blue-400 text-sm sm:text-lg font-bold text-center"
                style={{ fontFamily: "'Anton', sans-serif", letterSpacing: '0.08em' }}>
                Agent Frameworks
              </p>
              <p className="text-blue-300/50 text-[10px] sm:text-xs text-center mt-1"
                style={{ fontFamily: "'Geist Mono', monospace" }}>
                OpenClaw · LangChain · Claude Code · ADK · ReAct
              </p>
            </motion.div>

            {/* Arrow */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}
              className="text-[#fefefe]/20 text-lg leading-none py-1.5">▼</motion.div>

            {/* Layer 2: SIF */}
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="w-full rounded-xl border border-purple-400/20 bg-purple-500/[0.06] backdrop-blur-sm py-4 sm:py-5">
              <p className="text-purple-400 text-sm sm:text-lg font-bold text-center"
                style={{ fontFamily: "'Anton', sans-serif", letterSpacing: '0.08em' }}>
                Semantic Intercept Fabric
              </p>
            </motion.div>

            {/* Arrow */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 }}
              className="text-[#fefefe]/20 text-lg leading-none py-1.5">▼</motion.div>

            {/* Layer 3: Astrid OS */}
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.5 }}
              className="w-full rounded-xl border border-orange-400/25 bg-orange-500/[0.06] backdrop-blur-sm py-4 sm:py-5">
              <p className="text-orange-400 text-sm sm:text-lg font-bold text-center"
                style={{ fontFamily: "'Anton', sans-serif", letterSpacing: '0.08em' }}>
                Astrid OS
              </p>
            </motion.div>

            {/* Arrow */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }}
              className="text-[#fefefe]/20 text-lg leading-none py-1.5">▼</motion.div>

            {/* Layer 4: Unicity L1 */}
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3, duration: 0.5 }}
              className="w-full rounded-xl border border-emerald-400/20 bg-emerald-500/[0.06] backdrop-blur-sm py-4 sm:py-5">
              <p className="text-emerald-400 text-sm sm:text-lg font-bold text-center"
                style={{ fontFamily: "'Anton', sans-serif", letterSpacing: '0.08em' }}>
                Unicity L1
              </p>
            </motion.div>

          </div>
        </div>

        {/* Right — text content */}
        <div className="flex flex-col justify-center px-6 sm:px-10 lg:px-12 pb-12 lg:pb-0">
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}>
            <h2 className="text-[#fefefe] text-[24px] sm:text-[36px] lg:text-[44px] leading-[0.95] tracking-tight"
              style={{ fontFamily: "'Anton', sans-serif" }}>
              3 MAJOR <span className="text-orange-400">INNOVATIONS</span>
            </h2>
            <div className="mt-3 sm:mt-4 space-y-3 sm:space-y-4">
              <div>
                <p className="text-purple-400 text-[10px] sm:text-xs tracking-[0.3em] uppercase mb-1"
                  style={{ fontFamily: "'Geist Mono', monospace" }}>
                  Semantic Intercept Fabric — Agent Firewall
                </p>
                <p className="text-[#fefefe]/70 text-[11px] sm:text-xs lg:text-sm leading-relaxed"
                  style={{ fontFamily: "'Geist Mono', monospace" }}>
                  <span className="text-purple-400 mr-2">→</span>Every message — user↔agent, agent↔agent, agent↔tool — intercepted <span className="text-purple-400">before</span> it reaches the model. Sub-20ms classification. Prompt injection, data leakage, PII detection. The enforcement layer the model <span className="text-purple-400">cannot override</span>
                </p>
              </div>
              <div>
                <p className="text-orange-400 text-[10px] sm:text-xs tracking-[0.3em] uppercase mb-1"
                  style={{ fontFamily: "'Geist Mono', monospace" }}>
                  Astrid OS — Agent Runtime Microkernel
                </p>
                <p className="text-[#fefefe]/70 text-[11px] sm:text-xs lg:text-sm leading-relaxed"
                  style={{ fontFamily: "'Geist Mono', monospace" }}>
                  <span className="text-orange-400 mr-2">→</span>Agents run <span className="text-orange-400">on top</span> of it, not alongside it. WASM sandbox, Ed25519 auth, immutable audit, budget enforcement — all <span className="text-orange-400">kernel primitives</span>. You cannot prompt-inject past a kernel boundary
                </p>
              </div>
              <div>
                <p className="text-emerald-400 text-[10px] sm:text-xs tracking-[0.3em] uppercase mb-1"
                  style={{ fontFamily: "'Geist Mono', monospace" }}>
                  Unicity — L1 Blockchain
                </p>
                <p className="text-[#fefefe]/70 text-[11px] sm:text-xs lg:text-sm leading-relaxed"
                  style={{ fontFamily: "'Geist Mono', monospace" }}>
                  <span className="text-emerald-400 mr-2">→</span>No shared ledger. Assets live off-chain; the chain only prevents <span className="text-emerald-400">double-spending</span>. Chain-agnostic, unlimited throughput, one-second finality, <span className="text-emerald-400">gasless validation at the edge</span>
                </p>
              </div>
            </div>
          </motion.div>
        </div>

      </div>

      {/* Logo */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
        className="fixed bottom-6 right-6 sm:right-10 lg:right-16 z-20 pointer-events-none">
        <img src={unicityLogoUrl} alt="Unicity" className="h-5 opacity-60" />
      </motion.div>

    </div>
  );
}
