import { motion } from 'framer-motion';

const layers = [
  {
    label: 'Security & Governance',
    products: ['AOS9 KERNEL'],
    text: 'Secure runtime. Every message inspected. Policy enforced below the model.',
  },
  {
    label: 'Settlement & Identity',
    products: ['UNICITY L1'],
    text: 'The substrate. Bearer-token chain. Cryptographic identity, delegation, and settlement. No shared ledger.',
  },
  {
    label: 'Networking & Payments',
    products: ['AGENTSPHERE SDK'],
    text: 'Multi-protocol comms and payments. A2A, Nostr, x402, MCP — neutral by design.',
  },
];

const requirements = [
  'Identity',
  'Delegation',
  'Verifiable Execution',
  'Policy Enforcement',
  'Settlement',
  'Interoperability',
];

export function AutonomyStackSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col px-8 sm:px-12 lg:px-20 py-10 sm:py-14 lg:py-16 justify-center gap-6">

        {/* Header */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-orange-400 text-sm tracking-[0.4em] uppercase"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            The Platform
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[32px] sm:text-[44px] lg:text-[56px] leading-[1.05] tracking-tight mt-2"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            THE PLATFORM FOR{' '}
            <span className="text-orange-400">SECURE AUTONOMOUS AI</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-3 text-[#fefefe]/85 text-base sm:text-lg lg:text-xl max-w-5xl leading-relaxed"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            <span className="text-orange-400 font-bold">Security</span> gets us in the door. <span className="text-orange-400 font-bold">Network effects</span> keep us there.
          </motion.p>
        </div>

        {/* Stack */}
        <div className="grid grid-cols-[200px_1fr] lg:grid-cols-[240px_1fr] gap-x-10 shrink-0">
          {/* Side labels */}
          <div className="flex flex-col">
            {layers.map((layer, i) => (
              <motion.p
                key={layer.label}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.15 }}
                className="flex-1 flex items-center text-orange-400 text-sm lg:text-base tracking-[0.25em] uppercase font-bold leading-snug"
                style={{ fontFamily: "'Geist Mono', monospace" }}
              >
                {layer.label}
              </motion.p>
            ))}
          </div>

          {/* Stacked frame */}
          <motion.div
            initial={{ opacity: 0, scaleY: 0.95 }}
            animate={{ opacity: 1, scaleY: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="rounded-md overflow-hidden flex flex-col origin-top"
            style={{ border: '1px solid rgba(249,115,22,0.5)' }}
          >
            {layers.map((layer, i) => (
              <motion.div
                key={layer.label}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.15 }}
                className="px-6 lg:px-8 py-5 lg:py-6"
                style={{
                  borderTop: i > 0 ? '1px solid rgba(249,115,22,0.5)' : 'none',
                }}
              >
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                  {layer.products.map((prod, idx) => (
                    <span key={prod} className="flex items-center gap-4">
                      {idx > 0 && (
                        <span
                          className="text-[#fefefe]/40 text-2xl font-bold"
                          style={{ fontFamily: "'Geist Mono', monospace" }}
                        >
                          +
                        </span>
                      )}
                      <span
                        className="text-[#fefefe] text-[22px] sm:text-[26px] lg:text-[32px] leading-none tracking-tight"
                        style={{ fontFamily: "'Anton', sans-serif" }}
                      >
                        {prod}
                      </span>
                    </span>
                  ))}
                </div>
                <p
                  className="text-[#fefefe]/80 text-sm sm:text-base lg:text-lg leading-relaxed mt-2"
                  style={{ fontFamily: "'Geist Mono', monospace" }}
                >
                  {layer.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Requirements box */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="rounded-md px-6 py-5 shrink-0"
          style={{ border: '1px solid rgba(249,115,22,0.30)' }}
        >
          <p
            className="text-[#fefefe]/55 text-xs lg:text-sm tracking-[0.25em] uppercase font-bold mb-3"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            Every Autonomy Requirement, Delivered
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {requirements.map((r, i) => (
              <span key={r} className="flex items-center">
                <span className="flex items-center gap-2">
                  <span className="text-orange-400 text-base lg:text-lg font-bold">✓</span>
                  <span
                    className="text-[#fefefe] text-sm lg:text-base tracking-[0.18em] uppercase font-bold"
                    style={{ fontFamily: "'Geist Mono', monospace" }}
                  >
                    {r}
                  </span>
                </span>
                {i < requirements.length - 1 && (
                  <span className="text-[#fefefe]/30 ml-5 hidden lg:inline">·</span>
                )}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="text-orange-400 text-[20px] sm:text-[26px] lg:text-[32px] leading-[0.95] tracking-tight pt-4 shrink-0"
          style={{
            fontFamily: "'Anton', sans-serif",
            borderTop: '1px solid rgba(249,115,22,0.25)',
          }}
        >
          SIX REQUIREMENTS. ONE PLATFORM. BUILT FROM FIRST PRINCIPLES.
        </motion.p>

      </div>
    </div>
  );
}
