import { motion } from 'framer-motion';

type Layer = {
  label: string;
  title: string;
  detail: string;
  wedge?: boolean;
};

// Top → bottom of the visual stack.
const layers: Layer[] = [
  {
    label: 'SECURITY',
    title: 'Kernel-level enforcement',
    detail: 'cryptographic proof of every action',
    wedge: true,
  },
  {
    label: 'COMPLIANCE',
    title: 'Semantic Intercept Fabric',
    detail: 'defended below the prompt',
  },
  {
    label: 'IDENTITY',
    title: 'Cryptographic agent ID',
    detail: 'scoped, revocable — not API keys',
  },
  {
    label: 'OS',
    title: 'Multi-tenant agent runtime',
    detail: 'sandboxed at machine speed',
  },
  {
    label: 'PAYMENTS',
    title: 'A2A payments over Unicity Blockchain',
    detail: 'peer-to-peer · no shared ledger',
  },
];

export function CompleteAutonomyStackSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">

      <div className="relative z-10 h-full flex flex-col px-8 sm:px-12 lg:px-20 py-8 sm:py-10 lg:py-12 justify-center gap-7 lg:gap-9">

        {/* Hero statement */}
        <div className="shrink-0 flex flex-col gap-4 lg:gap-5">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[28px] sm:text-[40px] lg:text-[52px] xl:text-[60px] leading-[1.1] tracking-tight max-w-6xl"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            THE FIRST COMPLETE STACK{' '}
            <span className="text-orange-400">BUILT FOR MACHINES</span>{' '}
            <span className="text-[#fefefe]/70">— NOT ADAPTED FROM ONE BUILT FOR HUMANS.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-[#fefefe]/90 text-lg sm:text-xl lg:text-2xl leading-snug max-w-6xl"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            Five layers on one cryptographic substrate.{' '}
            <span className="text-orange-400">Verifiable execution, end to end.</span>
            <br />
            The Unicity blockchain is <span className="text-orange-400">integrated</span> into the OS.
          </motion.p>
        </div>

        {/* Stacked slabs — centered, compressed width */}
        <div className="flex justify-center shrink-0">
          <div className="flex flex-col gap-2 lg:gap-2.5 w-full max-w-4xl">
            {layers.map((l, i) => (
              <Slab key={l.label} layer={l} index={i} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}

function Slab({ layer, index }: { layer: Layer; index: number }) {
  const isWedge = layer.wedge;

  const gradient = isWedge
    ? 'linear-gradient(180deg, rgba(249,115,22,0.30) 0%, rgba(249,115,22,0.12) 100%)'
    : 'linear-gradient(180deg, rgba(255,255,255,0.09) 0%, rgba(255,255,255,0.04) 100%)';

  const border = isWedge
    ? '1px solid rgba(249,115,22,0.65)'
    : '1px solid rgba(255,255,255,0.22)';

  const edge = isWedge ? 'rgba(249,115,22,0.65)' : 'rgba(255,255,255,0.25)';

  const shadow = '0 6px 0 -2px rgba(0,0,0,0.6), 0 8px 18px -8px rgba(0,0,0,0.7)';

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.45, delay: 0.4 + index * 0.08 }}
      className="relative"
    >
      <div
        className={`relative grid grid-cols-[160px_1fr] lg:grid-cols-[200px_1fr] items-center gap-5 lg:gap-7 px-5 lg:px-7 rounded-md ${
          isWedge ? 'py-4 lg:py-5' : 'py-3 lg:py-3.5'
        }`}
        style={{ background: gradient, border, boxShadow: shadow }}
      >
        {/* right-edge depth strip */}
        <div
          className="absolute right-0 top-2 bottom-2 w-[3px] rounded-r-md pointer-events-none"
          style={{ background: edge }}
        />
        <h3
          className={`text-[22px] sm:text-[28px] lg:text-[34px] leading-none tracking-tight uppercase ${
            isWedge ? 'text-orange-400' : 'text-[#fefefe]'
          }`}
          style={{ fontFamily: "'Anton', sans-serif" }}
        >
          {layer.label}
        </h3>
        <div className="flex flex-col gap-0.5">
          <p
            className={`text-base sm:text-lg lg:text-xl font-bold leading-snug ${
              isWedge ? 'text-[#fefefe]' : 'text-[#fefefe]/95'
            }`}
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            {layer.title}
          </p>
          <p
            className={`text-sm sm:text-base lg:text-base leading-snug ${
              isWedge ? 'text-orange-400/90' : 'text-[#fefefe]/65'
            }`}
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            {layer.detail}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
