import { motion } from 'framer-motion';
import splashVideoUrl from '/kling_20260226_VIDEO_Take_Image_1650_0.mp4';
import unicityLogoUrl from '/UnicityLogo.svg';

const cards: { title: string; color: string; text: React.ReactNode }[] = [
  {
    title: 'Off-Chain Architecture',
    color: '#f59e0b',
    text: <>Agents are the equivalent of smart contracts — verifiable code living entirely off-chain, operating on tokens bound to conditional ownership rules. They leverage Unicity's infrastructure to prove <span className="text-orange-400">unique</span> state.</>,
  },
  {
    title: 'Token Operations',
    color: '#f59e0b',
    text: 'Through the Unicity SDK, agents can mint, transfer, and burn tokens with minimal overhead — sophisticated financial applications without blockchain constraints.',
  },
  {
    title: 'Shared State',
    color: '#ef4444',
    text: <>When <span className="text-orange-400">shared state</span> is needed (e.g., atomic multi-token settlement), users install programmable ownership rules before transferring tokens to agents. State is only shared amongst <span className="italic">interested</span> parties — maximum efficiency with full cryptographic guarantees.</>,
  },
];

export function AgentsSlide() {
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
            Appendix — Architecture
          </motion.p>
          <motion.h1 initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[28px] sm:text-[40px] lg:text-[52px] leading-[0.95] tracking-tight mt-1"
            style={{ fontFamily: "'Anton', sans-serif" }}>
            <span className="text-orange-400">AGENTS:</span>{' '}
            THE NEW SMART CONTRACTS
          </motion.h1>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-[2px] w-32 sm:w-48 bg-gradient-to-r from-orange-500 to-transparent origin-left mt-2" />
        </div>

        {/* Intro paragraph */}
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="shrink-0 mt-3 text-[#fefefe]/70 text-xs sm:text-sm leading-relaxed max-w-4xl"
          style={{ fontFamily: "'Geist Mono', monospace" }}>
          The lesson from the last 10 years is clear: <span className="text-orange-400">global ordering and "everyone validating everything" cannot scale</span>.
          Unicity eliminates globally shared state entirely — agents execute off-chain, verification is done by interested parties only, independent of other transactions.
          State is still shared, but only amongst those who need it, achieving censorship resistance, privacy, and unparalleled efficiency.
          Like physical cash, state is <span className="text-orange-400">locally verifiable</span> — every layer presents a cryptographic proof of correctness to the layer above.
        </motion.p>

        {/* Two-column: diagram left, cards right */}
        <div className="flex-1 grid grid-cols-[1.2fr_1fr] gap-6 sm:gap-8 mt-5 min-h-0 items-center">

          {/* Left — SVG diagram, filling available space */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex items-center justify-center h-full min-h-0">
            <object type="image/svg+xml" data="/agents_smartcontracts.svg"
              className="w-full h-full object-contain max-h-full">
              Agents architecture diagram
            </object>
          </motion.div>

          {/* Right — stacked cards */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col gap-4 justify-center">
            {cards.map((card, i) => (
              <motion.div key={card.title}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + i * 0.15, duration: 0.4 }}
                className="rounded-lg border p-4 sm:p-5"
                style={{ borderColor: `${card.color}30`, background: `${card.color}06` }}>
                <h3 className="text-[#fefefe] text-sm sm:text-base mb-1.5"
                  style={{ fontFamily: "'Anton', sans-serif", letterSpacing: '0.02em' }}>
                  {card.title}
                </h3>
                <p className="text-[#fefefe]/60 text-[10px] sm:text-xs leading-relaxed"
                  style={{ fontFamily: "'Geist Mono', monospace" }}>
                  {card.text}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>

        {/* Logo */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
          className="shrink-0 mt-3 flex justify-end">
          <img src={unicityLogoUrl} alt="Unicity" className="h-5 opacity-60" />
        </motion.div>

      </div>
    </div>
  );
}
