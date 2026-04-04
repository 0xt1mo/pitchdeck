import { motion } from 'framer-motion';

const products: { name: string; highlight: string; target: string; tagline: string; features: string[]; color: string; screenshot?: string; link?: string; pdfLink?: string }[] = [
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
    color: '#f97316',
    screenshot: '/sphere-screenshot.png',
    link: 'https://sphere.unicity.network',
  },
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
    color: '#f97316',
    screenshot: '/sif-dashboard.png',
    link: '',
    pdfLink: '/agentstack-product-sheet.pdf',
  },
];

export function ProductSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col px-8 sm:px-12 lg:px-20 py-10 sm:py-14 lg:py-16">

        {/* Header */}
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-orange-400 text-[10px] sm:text-xs tracking-[0.4em] uppercase"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            Product
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[32px] sm:text-[44px] lg:text-[56px] leading-[0.95] tracking-tight mt-2"
            style={{ fontFamily: "'Anton', sans-serif" }}>
            PRODUCT: TWO ENTRY POINTS, <span className="text-orange-400">ONE NETWORK</span>
          </motion.h1>
        </div>

        {/* Two columns */}
        <div className="flex-1 grid grid-cols-2 gap-6 lg:gap-10 mt-6">
          {products.map((p, pi) => (
            <motion.div
              key={p.highlight}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + pi * 0.15, duration: 0.5 }}
              className="flex flex-col rounded-xl p-6 lg:p-8"
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(249,115,22,0.15)',
              }}
            >
              {/* Product name */}
              <h2 className="text-[28px] sm:text-[36px] lg:text-[44px] leading-none tracking-tight"
                style={{ fontFamily: "'Anton', sans-serif" }}>
                <span className="text-[#fefefe]">{p.name}</span>
                <span className="text-orange-400">{p.highlight}</span>
              </h2>

              {/* Target badge */}
              <span className="mt-3 inline-block self-start px-3 py-1 rounded-full text-[11px] tracking-wider uppercase"
                style={{
                  fontFamily: "'Geist Mono', monospace",
                  background: 'rgba(249,115,22,0.12)',
                  border: '1px solid rgba(249,115,22,0.25)',
                  color: '#f97316',
                }}>
                {p.target}
              </span>

              {/* Tagline */}
              <p className="mt-4 text-[#fefefe]/70 text-sm leading-relaxed"
                style={{ fontFamily: "'Geist Mono', monospace" }}>
                {p.tagline}
              </p>

              {/* Features */}
              <div className="mt-5 space-y-2.5 flex-1">
                {p.features.map((f, i) => (
                  <motion.div key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + pi * 0.15 + i * 0.06 }}
                    className="flex gap-2">
                    <span className="text-orange-400/60 mt-0.5 text-sm" style={{ fontFamily: "'Geist Mono', monospace" }}>→</span>
                    <p className="text-[#fefefe]/55 text-xs sm:text-sm leading-relaxed"
                      style={{ fontFamily: "'Geist Mono', monospace" }}>
                      {f}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Screenshot */}
              {p.screenshot && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
                  className="mt-4 rounded-lg overflow-hidden border border-orange-500/20 max-h-[140px]">
                  <img src={p.screenshot} alt={p.highlight} className="w-full h-full object-cover object-top" />
                </motion.div>
              )}

              {/* Links */}
              <div className="mt-3 flex items-center gap-3">
                {p.link && (
                  <a href={p.link} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all hover:scale-105 cursor-pointer"
                    style={{
                      fontFamily: "'Geist Mono', monospace",
                      background: 'rgba(249,115,22,0.1)',
                      border: '1px solid rgba(249,115,22,0.25)',
                      color: '#f97316',
                    }}>
                    Enter The Sphere →
                  </a>
                )}
                {p.pdfLink && (
                  <a href={p.pdfLink} download
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all hover:scale-105 cursor-pointer"
                    style={{
                      fontFamily: "'Geist Mono', monospace",
                      background: 'rgba(249,115,22,0.1)',
                      border: '1px solid rgba(249,115,22,0.25)',
                      color: '#f97316',
                    }}>
                    <svg viewBox="0 0 16 16" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
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
