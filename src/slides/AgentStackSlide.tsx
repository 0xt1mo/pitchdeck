import { motion } from 'framer-motion';
import splashVideoUrl from '/kling_20260226_VIDEO_Take_Image_1650_0.mp4';
import unicityLogoUrl from '/UnicityLogo.svg';

const features = [
  {
    title: 'Astrid OS',
    desc: 'Agent runtime microkernel — WASM sandbox, Ed25519 auth, immutable audit, budget enforcement.',
    color: '#f97316',
  },
  {
    title: 'Semantic Intercept Fabric',
    desc: 'Transport-layer security below the model. Every message inspected before it reaches the agent.',
    color: '#ef4444',
  },
  {
    title: 'Unicity Settlement',
    desc: 'No shared ledger. Chain-agnostic, unlimited throughput, one-second finality, gasless validation.',
    color: '#3b82f6',
  },
  {
    title: 'A2A Networking',
    desc: 'Agent discovery, group formation, marketplace integration. Built into the kernel.',
    color: '#10b981',
  },
];

export function AgentStackSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-y-auto">
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
        <video className="w-full h-full object-cover opacity-15" autoPlay muted loop playsInline src={splashVideoUrl} />
        <div className="absolute inset-0 bg-[#060606]/50" />
      </div>

      <div className="relative z-10 h-full flex flex-col px-6 sm:px-10 lg:px-16 py-6 sm:py-8">

        {/* Header */}
        <div className="shrink-0">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-orange-400 text-[10px] sm:text-xs tracking-[0.4em] uppercase"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            Product
          </motion.p>
          <motion.h1 initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[28px] sm:text-[40px] lg:text-[52px] leading-[0.95] tracking-tight mt-1"
            style={{ fontFamily: "'Anton', sans-serif" }}>
            AGENT<span className="text-orange-400">STACK</span>
          </motion.h1>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-[2px] w-32 sm:w-48 bg-gradient-to-r from-orange-500 to-transparent origin-left mt-2" />
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-[#fefefe]/60 text-sm sm:text-base mt-3 max-w-3xl"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            The complete infrastructure stack for production AI agents. Open source core, enterprise license.
          </motion.p>
        </div>

        {/* Content: features + PDF download */}
        <div className="flex-1 flex items-center mt-6">
          <div className="grid w-full gap-8" style={{ gridTemplateColumns: '1fr 1fr' }}>

            {/* Left: Feature cards */}
            <div className="flex flex-col gap-4">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
                  className="rounded-lg px-5 py-3.5"
                  style={{
                    borderLeft: `3px solid ${f.color}`,
                    background: `${f.color}08`,
                  }}
                >
                  <p className="text-sm sm:text-base font-bold"
                    style={{ fontFamily: "'Geist Mono', monospace", color: f.color }}>
                    {f.title}
                  </p>
                  <p className="text-[#fefefe]/50 text-[11px] sm:text-xs mt-1 leading-relaxed"
                    style={{ fontFamily: "'Geist Mono', monospace" }}>
                    {f.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Right: PDF download */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="flex flex-col items-center justify-center"
            >
              <div className="rounded-xl px-8 py-10 flex flex-col items-center text-center"
                style={{
                  background: 'linear-gradient(135deg, rgba(249,115,22,0.06) 0%, rgba(249,115,22,0.02) 100%)',
                  border: '1px solid rgba(249,115,22,0.15)',
                }}
              >
                {/* PDF icon */}
                <svg viewBox="0 0 48 48" className="w-16 h-16 mb-4" fill="none">
                  <rect x="8" y="4" width="32" height="40" rx="3" stroke="rgba(249,115,22,0.5)" strokeWidth="2" />
                  <path d="M16 18h16M16 24h16M16 30h10" stroke="rgba(254,254,254,0.3)" strokeWidth="1.5" strokeLinecap="round" />
                  <rect x="28" y="4" width="12" height="12" rx="1" fill="rgba(249,115,22,0.15)" stroke="rgba(249,115,22,0.4)" strokeWidth="1.5" />
                  <text x="34" y="13" textAnchor="middle" fill="#f97316" fontSize="6" fontFamily="Geist Mono, monospace" fontWeight="bold">PDF</text>
                </svg>

                <h3 className="text-[#fefefe]/90 text-lg font-bold"
                  style={{ fontFamily: "'Geist Mono', monospace" }}>
                  Product Brief
                </h3>
                <p className="text-[#fefefe]/40 text-xs mt-2 max-w-xs leading-relaxed"
                  style={{ fontFamily: "'Geist Mono', monospace" }}>
                  Architecture overview, pricing model, deployment options, and integration guide.
                </p>

                <a
                  href="/agentstack-product-sheet.pdf"
                  download
                  className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-bold transition-all hover:scale-105"
                  style={{
                    fontFamily: "'Geist Mono', monospace",
                    background: 'rgba(249,115,22,0.15)',
                    border: '1px solid rgba(249,115,22,0.3)',
                    color: '#f97316',
                  }}
                >
                  <svg viewBox="0 0 16 16" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M8 2v9M4 8l4 4 4-4M2 14h12" />
                  </svg>
                  Download PDF
                </a>
              </div>
            </motion.div>

          </div>
        </div>

      </div>

      {/* Logo — fixed bottom right */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}
        className="fixed bottom-6 right-6 sm:right-10 lg:right-16 z-20">
        <img src={unicityLogoUrl} alt="Unicity" className="h-5 opacity-60" />
      </motion.div>
    </div>
  );
}
