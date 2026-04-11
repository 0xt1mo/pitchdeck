import { motion } from 'framer-motion';

const products = [
  {
    name: 'AGENT',
    highlight: 'STACK',
    target: 'For Developers',
    tagline: 'Full toolkit — identity, sandbox, settlement, memory.',
    features: [
      'Mix & match capabilities of any framework',
      'Bring your own LLM — swap providers in one line',
      'Kernel-level security via AstridOS',
      'Built-in X402, identity, A2A communication',
      'Run offline, air-gapped, or in the cloud',
    ],
    screenshot: '/sif-dashboard.png',
    pdfLink: '/agentstack-product-sheet.pdf',
  },
  {
    name: 'AGENT',
    highlight: 'SPHERE',
    target: 'For Agents',
    tagline: 'The agent economy layer — discover, collaborate, trade.',
    features: [
      'Identity & discovery — agents find each other',
      'P2P messaging via NOSTR relays',
      'Intent-based trading marketplace',
      'Chain-agnostic settlement',
      'Permissionless and private',
    ],
    screenshot: '/sphere-screenshot.png',
    link: 'https://sphere.unicity.network',
  },
];

export function WhyUnicityProductSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col px-8 sm:px-12 lg:px-20 py-8 sm:py-10 lg:py-12">

        {/* Header */}
        <div>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-orange-400 text-[10px] sm:text-xs tracking-[0.4em] uppercase"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            Product Strategy
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[32px] sm:text-[44px] lg:text-[56px] leading-[0.95] tracking-tight mt-2"
            style={{ fontFamily: "'Anton', sans-serif" }}>
            SECURITY IS THE <span className="text-orange-400">GAPING CHEST WOUND.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="mt-3 text-[#fefefe] text-sm sm:text-base max-w-5xl leading-relaxed font-bold"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            No enterprise will deploy autonomous agents that can spend money, sign contracts, or access sensitive data without verifiable security. This is the single biggest blocker to production agent deployments today.
          </motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
            className="mt-3 text-[#fefefe]/80 text-sm sm:text-base max-w-5xl leading-relaxed"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            <span className="text-orange-400 font-bold">AgentStack</span> is the security product that gets us in the door. <span className="text-orange-400 font-bold">AgentSphere</span> provides the network effect that keeps us there. Both use the protocol for token generation.
          </motion.p>
        </div>

        {/* Two products */}
        <div className="flex-1 grid grid-cols-2 gap-5 lg:gap-8 mt-5 min-h-0">
          {products.map((p, pi) => (
            <motion.div
              key={p.highlight}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + pi * 0.15, duration: 0.5 }}
              className="flex flex-col rounded-xl p-5 lg:p-6"
              style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(249,115,22,0.15)' }}
            >
              {/* Name + badge */}
              <div className="flex items-center justify-between">
                <h2 className="text-[24px] sm:text-[30px] lg:text-[36px] leading-none tracking-tight"
                  style={{ fontFamily: "'Anton', sans-serif" }}>
                  <span className="text-[#fefefe]">{p.name}</span>
                  <span className="text-orange-400">{p.highlight}</span>
                </h2>
                <span className="px-2.5 py-1 rounded-full text-xs tracking-wider uppercase"
                  style={{
                    fontFamily: "'Geist Mono', monospace",
                    background: 'rgba(249,115,22,0.12)',
                    border: '1px solid rgba(249,115,22,0.25)',
                    color: '#f97316',
                  }}>
                  {p.target}
                </span>
              </div>

              {/* Tagline */}
              <p className="mt-2 text-[#fefefe]/80 text-sm sm:text-base leading-relaxed"
                style={{ fontFamily: "'Geist Mono', monospace" }}>
                {p.tagline}
              </p>

              {/* Features */}
              <div className="mt-3 space-y-1.5">
                {p.features.map((f, i) => (
                  <div key={i} className="flex gap-2">
                    <span className="text-orange-400/60 mt-0.5 text-xs" style={{ fontFamily: "'Geist Mono', monospace" }}>→</span>
                    <p className="text-[#fefefe]/70 text-sm leading-relaxed"
                      style={{ fontFamily: "'Geist Mono', monospace" }}>{f}</p>
                  </div>
                ))}
              </div>

              {/* Screenshot */}
              {p.screenshot && (
                <div className="mt-3 rounded-lg overflow-hidden border border-orange-500/20 flex-1 min-h-0">
                  <img src={p.screenshot} alt={p.highlight} className="w-full h-full object-cover object-top" />
                </div>
              )}

              {/* Links */}
              <div className="mt-2 flex items-center gap-2">
                {p.link && (
                  <a href={p.link} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-bold transition-all hover:scale-105 cursor-pointer"
                    style={{ fontFamily: "'Geist Mono', monospace", background: 'rgba(249,115,22,0.1)', border: '1px solid rgba(249,115,22,0.25)', color: '#f97316' }}>
                    Enter The Sphere →
                  </a>
                )}
                {p.pdfLink && (
                  <a href={p.pdfLink} download
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-bold transition-all hover:scale-105 cursor-pointer"
                    style={{ fontFamily: "'Geist Mono', monospace", background: 'rgba(249,115,22,0.1)', border: '1px solid rgba(249,115,22,0.25)', color: '#f97316' }}>
                    <svg viewBox="0 0 16 16" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M8 2v9M4 8l4 4 4-4M2 14h12" />
                    </svg>
                    Product Brief
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
