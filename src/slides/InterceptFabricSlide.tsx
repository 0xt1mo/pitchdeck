import { motion } from 'framer-motion';

const font = "'Geist Mono', monospace";
const fontTitle = "'Anton', sans-serif";

function Box({ label, sub, variant = 'white' }: { label: string; sub?: string; variant?: 'white' | 'orange' | 'yellow' }) {
  const colors = {
    white: { border: 'rgba(255,255,255,0.2)', bg: 'rgba(255,255,255,0.04)', text: '#fefefe' },
    orange: { border: 'rgba(249,115,22,0.4)', bg: 'rgba(249,115,22,0.08)', text: '#f97316' },
    yellow: { border: 'rgba(234,179,8,0.4)', bg: 'rgba(234,179,8,0.08)', text: '#eab308' },
  }[variant];
  return (
    <div className="px-3 py-1.5 rounded-md text-center" style={{ border: `1px solid ${colors.border}`, background: colors.bg }}>
      <p className="text-xs font-bold" style={{ fontFamily: font, color: colors.text }}>{label}</p>
      {sub && <p className="text-[9px] mt-0.5 opacity-50" style={{ fontFamily: font, color: colors.text }}>({sub})</p>}
    </div>
  );
}

function Arrow() {
  return (
    <div className="flex justify-center py-0.5">
      <svg width="10" height="14" viewBox="0 0 10 14" className="text-yellow-500/50">
        <path d="M5 0v10M2 8l3 4 3-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeDasharray="3 3" />
      </svg>
    </div>
  );
}

export function InterceptFabricSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col px-8 sm:px-12 lg:px-20 py-8 sm:py-10 lg:py-12">

        {/* Header */}
        <div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-orange-400 text-[10px] sm:text-xs tracking-[0.4em] uppercase"
            style={{ fontFamily: font }}>
            Appendix — Security
          </motion.p>
          <motion.h1 initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[28px] sm:text-[40px] lg:text-[52px] leading-[0.95] tracking-tight mt-1"
            style={{ fontFamily: fontTitle }}>
            SECURITY: SEMANTIC INTERCEPT <span className="text-orange-400">FABRIC</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            className="text-[#fefefe]/50 text-sm sm:text-base mt-1"
            style={{ fontFamily: font, fontStyle: 'italic' }}>
            "semantic firewall"
          </motion.p>
        </div>

        {/* Main: text left, diagram right */}
        <div className="flex-1 grid grid-cols-[1fr_1.2fr] gap-8 lg:gap-12 mt-5 min-h-0">

          {/* Left — description */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="flex flex-col justify-center gap-5">

            <div>
              <p className="text-[#fefefe]/70 text-xs sm:text-sm leading-relaxed" style={{ fontFamily: font }}>
                Goes beyond <span className="text-[#fefefe] underline">action based</span> policies to include <span className="text-[#fefefe] italic">content</span> based <span className="text-[#fefefe] italic">semantic</span> security controls (prompt injection, indirect prompt injection, data leakage etc.), with domain specific ontologies.
              </p>
            </div>

            <div>
              <p className="text-[#fefefe]/80 text-sm font-bold mb-2" style={{ fontFamily: font }}>Mandates a layered model:</p>
              <ol className="space-y-2.5 list-decimal list-inside">
                <li className="text-[#fefefe]/60 text-xs leading-relaxed" style={{ fontFamily: font }}>
                  <span className="text-[#fefefe]/80 font-bold">Rule engine</span> — high performance pattern matching, candidate identification, rule evaluation using optimised algos. Dynamic rule updates.
                </li>
                <li className="text-[#fefefe]/60 text-xs leading-relaxed" style={{ fontFamily: font }}>
                  <span className="text-[#fefefe]/80 font-bold">ML Detection</span> — low latency inference and anomaly detection. Plugin expandable (ONNX compatible) model loading.
                </li>
                <li className="text-[#fefefe]/60 text-xs leading-relaxed" style={{ fontFamily: font }}>
                  <span className="text-[#fefefe]/80 font-bold">DLP scanning</span> — for secrets/IP exfiltration (pattern matching + name entity recognition etc).
                </li>
              </ol>
            </div>

            <div>
              <p className="text-[#fefefe]/50 text-[11px] leading-relaxed" style={{ fontFamily: font }}>
                Rust based implementation with optimised search and rule algos. Targets low latency classification, depending on context (risk tolerance, industry sector) message type, and depth of content screening required.
              </p>
            </div>
          </motion.div>

          {/* Right — flow diagram */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col justify-center items-center">

            <Box label="Policy Dashboard" variant="yellow" />
            <Arrow />
            <Box label="Unified Server (HTTP)" sub="normalisation, cleanup, scrubbing" variant="white" />
            <Arrow />

            {/* Three parallel engines */}
            <div className="grid grid-cols-3 gap-2 w-full">
              <Box label="Rule Engine" sub="fast matching, rule evaluation" variant="white" />
              <Box label="ML Detection" sub="anomaly detection, classification" variant="white" />
              <Box label="DLP Scanner" sub="secrets, PII, credentials" variant="white" />
            </div>
            <Arrow />

            {/* Decision engine + outcomes */}
            <div className="flex items-center gap-3 w-full">
              <div className="flex-1">
                <Box label="Decision Engine" sub="scoring, thresholds" variant="white" />
              </div>
              <svg width="30" height="10" viewBox="0 0 30 10" className="shrink-0 text-[#fefefe]/30">
                <path d="M0 5h24M21 2l4 3-4 3" stroke="currentColor" strokeWidth="1.5" fill="none" strokeDasharray="3 3" />
              </svg>
              <div className="shrink-0 flex flex-col gap-0 text-[10px] font-bold leading-tight" style={{ fontFamily: font }}>
                <span className="text-green-400">Allow</span>
                <span className="text-red-400">Block</span>
                <span className="text-yellow-400">Flag</span>
                <span className="text-[#fefefe]/30">···</span>
              </div>
            </div>
            <Arrow />

            <Box label="Unicity token audit, Metrics" variant="yellow" />
          </motion.div>

        </div>
      </div>
    </div>
  );
}
