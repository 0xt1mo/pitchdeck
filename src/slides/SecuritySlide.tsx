import { motion } from 'framer-motion';
import splashVideoUrl from '/kling_20260226_VIDEO_Take_Image_1650_0.mp4';
import unicityLogoUrl from '/UnicityLogo.svg';

/* Small arrow helpers */
const ArrowDown = ({ className = '' }: { className?: string }) => (
  <div className={`flex flex-col items-center ${className}`}>
    <svg width="12" height="18" viewBox="0 0 12 18" className="text-orange-400/60">
      <path d="M6 0v14M2 11l4 5 4-5" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </svg>
  </div>
);

const ArrowBidi = ({ className = '' }: { className?: string }) => (
  <div className={`flex flex-col items-center ${className}`}>
    <svg width="12" height="22" viewBox="0 0 12 22" className="text-orange-400/60">
      <path d="M2 5l4-4 4 4M6 1v20M2 17l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </svg>
  </div>
);

const ArrowRight = ({ className = '' }: { className?: string }) => (
  <svg width="20" height="12" viewBox="0 0 20 12" className={`text-orange-400/60 ${className}`}>
    <path d="M0 6h16M13 2l5 4-5 4" stroke="currentColor" strokeWidth="1.5" fill="none" />
  </svg>
);

/* Service box */
function ServiceBox({ label, variant = 'dark' }: { label: string; variant?: 'dark' | 'orange' }) {
  const border = variant === 'orange' ? 'border-orange-500/30' : 'border-white/10';
  const bg = variant === 'orange' ? 'bg-orange-500/[0.06]' : 'bg-white/[0.04]';
  return (
    <div className={`px-2 py-1.5 sm:px-3 sm:py-2 rounded-md border ${border} ${bg} text-center`}>
      <span className="text-[#fefefe]/80 text-[8px] sm:text-[9px] lg:text-[10px] uppercase tracking-wider leading-tight"
        style={{ fontFamily: "'Geist Mono', monospace" }}>
        {label}
      </span>
    </div>
  );
}

/* Pipeline box (inner LLM components) */
function PipelineBox({ label, tag, className = '' }: { label: string; tag?: string; className?: string }) {
  return (
    <div className={`relative px-3 py-2 sm:px-4 sm:py-2.5 rounded-md border border-white/15 bg-white/[0.05] text-center ${className}`}>
      <span className="text-[#fefefe]/80 text-[9px] sm:text-[10px] uppercase tracking-wider"
        style={{ fontFamily: "'Geist Mono', monospace" }}>
        {label}
      </span>
      {tag && (
        <span className="absolute -bottom-1 right-1 text-[7px] text-red-400/80 font-bold"
          style={{ fontFamily: "'Geist Mono', monospace" }}>
          {tag}
        </span>
      )}
    </div>
  );
}

const bullets = [
  'All agents are first class citizens, assigned a unique identity (ephemeral or persistent, depending on context).',
  'Agents, intents, and tool services are composed and permissioned dynamically, giving consistent reliable behaviour, with full explainability and audit trail.',
  'All user and agent-agent messaging is converted to semantically consistent flow formats, ensuring that all intents and data flows are consistently and reliably scrutinised, with faster interventions and superior explainability.',
  'All messages are intercepted for strict policy enforcement. We apply multi-lavel semantic processing techniques, grounded by domain specific ontologies, using signal detection and ensemble models, helping mitigate emerging prompt injection and data leakage threats.', 
  'All agents are monitored for suspicious and anomalous behavior, to assist detecting and intercepting new types of agentic threat, misconfiguration, and compromised systems.', 
  'Finally, our secure runtime and trusted execution contexts help constrain rogue and undesirable behaviour. delivering safer, more reliable, deterministic workflows and results.',
];

export function SecuritySlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      {/* Video background */}
      <div className="fixed inset-0 w-full h-full z-0">
        <video className="w-full h-full object-cover opacity-15" autoPlay muted loop playsInline src={splashVideoUrl} />
        <div className="absolute inset-0 bg-[#060606]/50" />
      </div>

      <div className="relative z-10 h-full flex flex-col px-6 sm:px-10 lg:px-16 py-6 sm:py-8">

        {/* Header */}
        <div className="shrink-0">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-orange-400 text-[10px] sm:text-xs tracking-[0.4em] uppercase"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            Appendix — Security
          </motion.p>
          <motion.h1 initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[28px] sm:text-[40px] lg:text-[52px] leading-[0.95] tracking-tight mt-1"
            style={{ fontFamily: "'Anton', sans-serif" }}>
            SECURITY:{' '}
            <span className="text-orange-400">SEMANTIC INTERCEPT FABRIC</span>
          </motion.h1>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-[2px] w-32 sm:w-48 bg-gradient-to-r from-orange-500 to-transparent origin-left mt-1.5" />
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="mt-1.5 text-[#fefefe]/60 text-[11px] sm:text-xs lg:text-sm max-w-3xl leading-relaxed"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            At the core of our zero trust architecture — unparalleled security and control for autonomous agentic systems, ensuring safer, reliable, compliant & explainable operations within enterprise environments.
          </motion.p>
        </div>

        {/* Main content: diagram + bullets */}
        <div className="flex-1 grid grid-cols-2 gap-4 sm:gap-8 mt-4 sm:mt-5 min-h-0">

          {/* ── Left: Architecture Diagram ── */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col min-h-0 justify-center">

            {/* Top services row */}
            <div className="grid grid-cols-4 gap-1.5 sm:gap-2">
              <ServiceBox label="Orchestration & Identity" variant="orange" />
              <ServiceBox label="Discovery & Reputation" variant="orange" />
              <ServiceBox label="Payments & Tokens" variant="orange" />
              <ServiceBox label="Marketplace" variant="orange" />
            </div>

            {/* Bidi arrows */}
            <div className="grid grid-cols-4 gap-1.5 sm:gap-2">
              {[0, 1, 2, 3].map(i => <ArrowBidi key={i} className="py-1" />)}
            </div>

            {/* ── LLM Pipeline (dashed container) ── */}
            <div className="relative border border-dashed border-orange-500/20 rounded-lg p-2 sm:p-3">

              {/* System prompt label */}
              <div className="flex items-center gap-1.5 mb-2">
                <span className="text-orange-400/50 text-[8px] sm:text-[9px] italic"
                  style={{ fontFamily: "'Geist Mono', monospace" }}>system prompt</span>
                <ArrowDown className="scale-75" />
              </div>

              {/* Main pipeline row */}
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="text-orange-400/50 text-[8px] sm:text-[9px] italic shrink-0"
                  style={{ fontFamily: "'Geist Mono', monospace" }}>user prompt</span>
                <ArrowRight />
                <PipelineBox label="encoder" tag="N" />
                <ArrowRight />

                {/* Reasoning column (state / reasoning / planning) */}
                <div className="flex flex-col items-center gap-1">
                  <PipelineBox label="state" className="!py-1 !px-2 text-[8px]" />
                  <PipelineBox label="reasoning" tag="S" />
                  <PipelineBox label="planning" tag="NS" />
                </div>

                <ArrowRight />
                <PipelineBox label="decoder" tag="N" />
                <ArrowRight />
                <span className="text-orange-400/50 text-[8px] sm:text-[9px] italic shrink-0"
                  style={{ fontFamily: "'Geist Mono', monospace" }}>output</span>
              </div>

              {/* API / MCP / RAG label */}
              <div className="mt-2 flex items-center gap-1.5">
                <span className="text-orange-400/40 text-[8px] sm:text-[9px] italic"
                  style={{ fontFamily: "'Geist Mono', monospace" }}>
                  API, MCP, RAG
                </span>
                <span className="text-[#fefefe]/20 text-[7px] ml-auto"
                  style={{ fontFamily: "'Geist Mono', monospace" }}>
                  tool responses, acquired knowledge
                </span>
              </div>
            </div>

            {/* Bidi arrows */}
            <div className="grid grid-cols-4 gap-1.5 sm:gap-2">
              {[0, 1, 2, 3].map(i => <ArrowBidi key={i} className="py-1" />)}
            </div>

            {/* Bottom security row */}
            <div className="grid grid-cols-4 gap-1.5 sm:gap-2">
              <ServiceBox label="Policy & Guardrails" />
              <ServiceBox label="Dynamic Access Controls" />
              <ServiceBox label="Suspicious Behaviour Monitoring" />
              <ServiceBox label="Trusted Execution Environments" />
            </div>
          </motion.div>

          {/* ── Right: Bullet points ── */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-col justify-center">

            <p className="text-[#fefefe]/80 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6"
              style={{ fontFamily: "'Geist Mono', monospace" }}>
              
Unicity's Semantic Intercept fabric is purpose-built to help orchestrate secure, autonomous, explainable agentic systems, aligned with zero trust principles.
            </p>

            <div className="space-y-3 sm:space-y-4">
              {bullets.map((b, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 + i * 0.1, duration: 0.4 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-400/60 mt-1.5 shrink-0" />
                  <p className="text-[#fefefe]/70 text-[11px] sm:text-xs leading-relaxed"
                    style={{ fontFamily: "'Geist Mono', monospace" }}>
                    {b}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Logo */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }}
          className="shrink-0 mt-3 flex justify-end">
          <img src={unicityLogoUrl} alt="Unicity" className="h-5 opacity-60" />
        </motion.div>

      </div>
    </div>
  );
}
