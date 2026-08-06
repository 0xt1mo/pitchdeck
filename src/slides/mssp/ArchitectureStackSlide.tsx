import { motion } from 'framer-motion';

type Layer = {
  label: string;
  caption: string;
  boxes: string[];
  highlight: boolean;
};

const layers: Layer[] = [
  {
    label: 'USER SPACE',
    caption: 'User-facing tools & agent frameworks',
    boxes: ['Claude Code', 'OpenClaw', 'LangChain', 'Custom Agents'],
    highlight: false,
  },
  {
    label: 'AOS KERNEL',
    caption: 'User-space microkernel · enforcement layer',
    boxes: ['Security Interceptor', 'WASM Sandbox', 'Capsule Engine', 'Audit & Budgets', 'IPC Message Bus'],
    highlight: true,
  },
  {
    label: 'UNICITY PROOF SYSTEM',
    caption: 'Settlement layer · execution, identity, networking',
    boxes: ['Verifiable Execution', 'Cryptographic Identity', 'A2A Networking', 'A2A Settlement'],
    highlight: true,
  },
  {
    label: 'HOST OS',
    caption: 'Underlying operating system',
    boxes: ['Linux', 'macOS', 'Container Runtimes'],
    highlight: false,
  },
];

export function ArchitectureStackSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col px-8 sm:px-12 lg:px-16 py-5 sm:py-7 lg:py-8 justify-center gap-4 lg:gap-5">

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-orange-400 text-xs sm:text-sm lg:text-base tracking-[0.4em] uppercase font-bold shrink-0"
          style={{ fontFamily: "'Geist Mono', monospace" }}
        >
          Architecture
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-[32px] sm:text-[48px] lg:text-[64px] xl:text-[72px] leading-[0.95] tracking-tight uppercase shrink-0 -mt-1"
          style={{ fontFamily: "'Anton', sans-serif" }}
        >
          <span className="text-[#fefefe]">THE SECURE OS</span>{' '}
          <span className="text-orange-400">FOR AGENTS.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-[#fefefe]/85 text-sm sm:text-base lg:text-lg leading-snug shrink-0 max-w-6xl"
          style={{ fontFamily: "'Geist Mono', monospace" }}
        >
          Frameworks run on the AOS kernel. The kernel talks to Unicity Proof System for settlement.{' '}
          <span className="text-orange-400">Everything below the kernel is ours.</span>
        </motion.p>

        {/* Stack — constrained width to mirror appendix diagram */}
        <div className="flex flex-col gap-1.5 lg:gap-2 shrink-0 mt-1 mx-auto w-full max-w-3xl">
          {layers.map((layer, i) => (
            <div key={layer.label} className="flex flex-col items-center gap-1.5 lg:gap-2">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.45 }}
                className="rounded-md w-full px-4 lg:px-5 py-2.5 lg:py-3"
                style={{
                  background: layer.highlight
                    ? 'rgba(249,115,22,0.06)'
                    : 'rgba(255,255,255,0.025)',
                  border: layer.highlight
                    ? '1px solid rgba(249,115,22,0.55)'
                    : '1px solid rgba(125,211,252,0.30)',
                }}
              >
                {/* Layer header */}
                <div className="flex items-baseline gap-3 lg:gap-4 mb-2">
                  <h3
                    className="text-[20px] sm:text-[24px] lg:text-[28px] leading-none tracking-tight uppercase"
                    style={{
                      fontFamily: "'Anton', sans-serif",
                      color: layer.highlight ? '#f97316' : '#bae6fd',
                    }}
                  >
                    {layer.label}
                  </h3>
                  <p
                    className="text-[#fefefe]/55 text-[11px] lg:text-xs tracking-[0.04em]"
                    style={{ fontFamily: "'Geist Mono', monospace" }}
                  >
                    {layer.caption}
                  </p>
                </div>

                {/* Sub-boxes — fixed-share grid, compact */}
                <div
                  className="grid gap-1.5 lg:gap-2"
                  style={{ gridTemplateColumns: `repeat(${layer.boxes.length}, minmax(0, 1fr))` }}
                >
                  {layer.boxes.map((box) => (
                    <div
                      key={box}
                      className="rounded px-2 lg:px-3 py-1.5 lg:py-2 text-center"
                      style={{
                        background: '#0a0a0f',
                        border: layer.highlight
                          ? '1px solid rgba(249,115,22,0.45)'
                          : '1px solid rgba(125,211,252,0.30)',
                      }}
                    >
                      <p
                        className={`text-xs lg:text-sm leading-tight font-bold ${
                          layer.highlight ? 'text-[#fefefe]' : 'text-[#fefefe]/90'
                        }`}
                        style={{ fontFamily: "'Geist Mono', monospace" }}
                      >
                        {box}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Down arrow between layers */}
              {i < layers.length - 1 && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 + i * 0.1, duration: 0.3 }}
                  className="text-orange-400/55 text-sm leading-none"
                  style={{ fontFamily: "'Geist Mono', monospace" }}
                >
                  ↓
                </motion.span>
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
