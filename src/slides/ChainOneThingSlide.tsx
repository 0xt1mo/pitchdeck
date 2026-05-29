import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

const mono = { fontFamily: "'Geist Mono', monospace" };
const anton = { fontFamily: "'Anton', sans-serif" };

const cards = [
  {
    title: 'COMMUNICATION',
    desc: 'the asset carries its own proof — the wire just moves bytes',
    pills: ['NOSTR', 'EMAIL', 'SOCIAL'],
  },
  {
    title: 'STORAGE',
    desc: 'state lives with the owner, not on every node',
    pills: ['BROWSER', 'IPFS', 'DEVICE'],
  },
  {
    title: 'VALIDATION',
    desc: 'the recipient verifies — no validator set in the path',
    pills: ['CLIENT-SIDE', 'IN PARALLEL'],
  },
];

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="rounded-md border border-[#fefefe]/20 px-2.5 py-1 text-[10px] lg:text-xs tracking-wide text-[#fefefe]/70"
      style={mono}
    >
      {children}
    </span>
  );
}

export function ChainOneThingSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col px-8 sm:px-12 lg:px-20 py-7 sm:py-9 lg:py-11 justify-center gap-6 lg:gap-7">

        {/* Header */}
        <div className="shrink-0">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[30px] sm:text-[46px] lg:text-[62px] leading-[1.0] tracking-tight"
            style={anton}
          >
            THE REST CAN BE HANDLED WITH <span className="text-orange-400">TRADITIONAL TOOLS</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-[#fefefe]/70 text-sm sm:text-base lg:text-xl leading-relaxed mt-3 max-w-5xl"
            style={mono}
          >
            Transaction validation, storage and P2P communication all move <span className="text-orange-400">off-chain</span>.
          </motion.p>
        </div>

        {/* Three edge cards */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.5 }}
          className="shrink-0 grid grid-cols-3 gap-4 lg:gap-6"
        >
          {cards.map((card) => (
            <div key={card.title} className="rounded-2xl border border-[#fefefe]/12 bg-[#fefefe]/[0.03] p-5 lg:p-6 flex flex-col">
              <h3 className="text-[#fefefe] text-2xl lg:text-3xl leading-none" style={anton}>{card.title}</h3>
              <p className="text-[#fefefe]/55 text-xs lg:text-sm leading-snug mt-2.5 mb-4" style={mono}>{card.desc}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {card.pills.map((pill) => <Pill key={pill}>{pill}</Pill>)}
              </div>
            </div>
          ))}
        </motion.div>

        {/* See for yourself */}
        <motion.a
          href="https://github.com/unicity-sphere/sphere-sdk"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="shrink-0 self-start inline-flex items-center gap-2.5 rounded-full border border-orange-500/70 bg-orange-500/[0.08] px-5 py-2.5 transition-colors duration-300 hover:bg-orange-500/[0.16]"
        >
          <Github className="w-4 h-4 text-orange-400" strokeWidth={1.5} />
          <span className="text-orange-400 text-sm lg:text-base" style={mono}>
            See for yourself — github.com/unicity-sphere/sphere-sdk
          </span>
        </motion.a>

      </div>
    </div>
  );
}
