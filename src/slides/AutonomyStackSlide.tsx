import { motion } from 'framer-motion';

const layers = [
  {
    label: 'Security',
    layerNum: 'Layer 3',
    products: ['ASTRIDOS', 'SEMANTIC INTERCEPT FABRIC'],
    text: 'Secure runtime. Every message inspected. Policy enforced below the model.',
  },
  {
    label: 'Settlement',
    layerNum: 'Layer 2',
    products: ['UNICITY L1'],
    text: 'Bearer-token chain. Cryptographic identity, delegation, and settlement. No shared ledger.',
  },
  {
    label: 'Connectivity',
    layerNum: 'Layer 1',
    products: ['AGENTSPHERE SDK'],
    text: 'Multi-protocol comms and payments. A2A, Nostr, x402, MCP — neutral by design.',
  },
];

export function AutonomyStackSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col px-8 sm:px-12 lg:px-20 py-10 sm:py-14 lg:py-16 justify-center gap-8">

        {/* Header */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-orange-400 text-sm tracking-[0.4em] uppercase"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            The Solution
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[32px] sm:text-[44px] lg:text-[56px] leading-[0.95] tracking-tight mt-2"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            THE UNICITY <span className="text-orange-400">AUTONOMY STACK</span>
          </motion.h1>
        </div>

        {/* Stack body */}
        <div className="grid grid-cols-[180px_1fr] lg:grid-cols-[220px_1fr] gap-x-10 shrink-0">

          {/* Side labels column */}
          <div className="flex flex-col">
            {layers.map((layer, i) => (
              <motion.div
                key={layer.label}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.15 }}
                className="flex-1 flex flex-col justify-center"
              >
                <p
                  className="text-orange-400 text-sm lg:text-base tracking-[0.28em] uppercase font-bold"
                  style={{ fontFamily: "'Geist Mono', monospace" }}
                >
                  {layer.label}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Stacked frame */}
          <motion.div
            initial={{ opacity: 0, scaleY: 0.92 }}
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
                className="px-7 lg:px-9 py-6 lg:py-7"
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
                        className="text-[#fefefe] text-[24px] sm:text-[28px] lg:text-[34px] leading-none tracking-tight"
                        style={{ fontFamily: "'Anton', sans-serif" }}
                      >
                        {prod}
                      </span>
                    </span>
                  ))}
                </div>
                <p
                  className="text-[#fefefe]/80 text-base lg:text-lg leading-relaxed mt-3"
                  style={{ fontFamily: "'Geist Mono', monospace" }}
                >
                  {layer.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="text-[#fefefe] text-base sm:text-lg lg:text-xl font-bold pt-5 shrink-0"
          style={{
            fontFamily: "'Geist Mono', monospace",
            borderTop: '1px solid rgba(249,115,22,0.25)',
          }}
        >
          The only stack that meets <span className="text-orange-400">all six requirements</span>.
        </motion.p>

      </div>
    </div>
  );
}
