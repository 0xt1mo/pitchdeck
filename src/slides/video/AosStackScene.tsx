import { motion } from 'framer-motion';
import { IsoStackDiagram } from '../AutonomyStackSlide';

const ANTON = "'Anton', sans-serif";
const MONO = "'Geist Mono', monospace";

const layers: { name: string; desc: string; accent?: boolean }[] = [
  { name: 'Agent', desc: 'Bring or build any agent.' },
  { name: 'Unicity AOS', desc: 'Multi-tenant secure OS — runs every agent, isolated at the kernel.', accent: true },
  { name: 'Proof System', desc: 'Cryptographic proof of execution.' },
];

// Video hero: title + the AGENT → AOS → PROOF SYSTEM stack, with one big line per layer.
export function AosStackScene() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden flex flex-col justify-center px-10 lg:px-20 gap-8 lg:gap-12">
      {/* ambient glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 55% 55% at 35% 55%, rgba(249,115,22,0.12) 0%, transparent 72%)' }}
      />

      <motion.h1
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 text-[#fefefe] text-[34px] sm:text-[52px] lg:text-[70px] xl:text-[80px] leading-[0.95] tracking-tight uppercase max-w-6xl"
        style={{ fontFamily: ANTON }}
      >
        The world's first <span className="text-orange-400">agentic operating system.</span>
      </motion.h1>

      <div className="relative z-10 flex items-center gap-10 lg:gap-16">
        {/* Stack */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="shrink-0 w-[42%] max-w-[520px]"
        >
          <IsoStackDiagram />
        </motion.div>

        {/* Layer lines */}
        <div className="flex-1 flex flex-col gap-7 lg:gap-9">
          {layers.map((l, i) => (
            <motion.div
              key={l.name}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + i * 0.15, duration: 0.6 }}
            >
              <p className={`text-3xl lg:text-5xl uppercase leading-none ${l.accent ? 'text-orange-400' : 'text-[#fefefe]'}`} style={{ fontFamily: ANTON }}>
                {l.name}
              </p>
              <p className="text-[#fefefe]/70 text-lg lg:text-2xl leading-snug mt-2.5 max-w-xl" style={{ fontFamily: MONO }}>
                {l.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
