import { motion } from 'framer-motion';

const pillars = [
  { title: 'Security', desc: 'Kernel-level enforcement.', color: '#fbbf24', bg: 'rgba(245,158,11,0.10)', border: 'rgba(245,158,11,0.35)' },
  { title: 'Safety', desc: 'Cryptographic isolation.', color: '#60a5fa', bg: 'rgba(59,130,246,0.10)', border: 'rgba(59,130,246,0.30)' },
  { title: 'Verifiability', desc: 'Verifiable execution.', color: '#34d399', bg: 'rgba(16,185,129,0.10)', border: 'rgba(16,185,129,0.30)' },
];

const products = [
  {
    name: 'AOS-9',
    role: 'The Platform',
    desc: 'Secure multi-tenant hosting. Any agent framework or harness. Plug-and-play OpenClaw plugins and Hermes memory — with security guaranteed.',
    color: '#fbbf24',
    bg: 'rgba(245,158,11,0.08)',
    border: 'rgba(245,158,11,0.30)',
  },
  {
    name: 'AGENTSTACK',
    role: 'The Toolkit',
    desc: 'Semantic Intercept Fabric — transport-layer security the model cannot see or bypass. Any LLM, any framework.',
    color: '#60a5fa',
    bg: 'rgba(59,130,246,0.08)',
    border: 'rgba(59,130,246,0.30)',
  },
  {
    name: 'AGENTSPHERE',
    role: 'The Network',
    desc: 'Agents discover each other and settle on the Unicity L1. Intent-based trading at scale.',
    color: '#34d399',
    bg: 'rgba(16,185,129,0.08)',
    border: 'rgba(16,185,129,0.30)',
  },
];

export function SalesOverviewSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#0a0a0f] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col px-10 lg:px-20 py-12 lg:py-16 justify-center gap-10">

        <div className="shrink-0">
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[32px] sm:text-[44px] lg:text-[56px] leading-[1.05] tracking-tight"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            UNICITY:{' '}
            <span className="text-orange-400">SECURITY. SAFETY. VERIFIABILITY.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-[#fefefe]/85 text-lg lg:text-xl max-w-4xl leading-relaxed"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            The Unicity platform enables <span className="text-orange-400 font-bold">security, safety and verifiability</span> for agentic operations.
          </motion.p>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-3 gap-4 shrink-0">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="rounded-md px-5 py-4 text-center"
              style={{ background: p.bg, border: `1px solid ${p.border}` }}
            >
              <p
                className="text-base lg:text-lg uppercase tracking-[0.2em] font-bold mb-1"
                style={{ color: p.color, fontFamily: "'Geist Mono', monospace" }}
              >
                {p.title}
              </p>
              <p
                className="text-sm lg:text-base leading-snug text-[#fefefe]/75"
                style={{ fontFamily: "'Geist Mono', monospace" }}
              >
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Products */}
        <div className="grid grid-cols-3 gap-5 shrink-0">
          {products.map((prod, i) => (
            <motion.div
              key={prod.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + i * 0.12, duration: 0.5 }}
              className="rounded-lg p-6 flex flex-col"
              style={{ background: prod.bg, border: `1px solid ${prod.border}` }}
            >
              <h2
                className="text-[34px] lg:text-[44px] leading-none tracking-tight"
                style={{ color: prod.color, fontFamily: "'Anton', sans-serif" }}
              >
                {prod.name}
              </h2>
              <p
                className="text-xs lg:text-sm uppercase tracking-[0.2em] mt-2 mb-4 pb-3 text-[#fefefe]/65 font-bold"
                style={{
                  fontFamily: "'Geist Mono', monospace",
                  borderBottom: '1px solid rgba(255,255,255,0.12)',
                }}
              >
                {prod.role}
              </p>
              <p
                className="text-base lg:text-lg leading-relaxed text-[#fefefe]/85"
                style={{ fontFamily: "'Geist Mono', monospace" }}
              >
                {prod.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
