import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

const mono = { fontFamily: "'Geist Mono', monospace" };
const anton = "'Anton', sans-serif";

type Card = {
  label: string;
  title: string;
  theorem?: string;
  image?: string;
  captions: [string, string];
  href: string;
};

const cards: Card[] = [
  {
    label: 'SYSTEMS ENGINEERING',
    title: 'Unicity Infrastructure: the Aggregation Layer',
    image: '/papers/aggregation-layer-p1.png',
    captions: ['off-chain & offline tokens', 'ZK proofs · no trusted setup'],
    href: 'https://github.com/unicitynetwork/aggr-layer-paper',
  },
  {
    label: 'SECURITY PROOF',
    title: 'The Unicity Execution Layer',
    image: '/papers/execution-layer-p1.png',
    captions: ['no double-spend · no blocking', 'service & user-side privacy'],
    href: 'https://github.com/unicitynetwork/execution-model-tex',
  },
  {
    label: 'PREDICATES & SWAPS',
    title: 'Unicity: Predicates & Atomic Swaps',
    image: '/papers/predicates-p1.png',
    captions: ['programmable predicates', 'trustless atomic swaps'],
    href: 'https://github.com/unicitynetwork/unicity-predicates-tex',
  },
];

function PaperThumbnail({ theorem }: { theorem?: string }) {
  const bodyRows = theorem ? 3 : 7;
  const bodyStart = theorem ? 96 : 68;
  return (
    <svg viewBox="0 0 132 172" className="w-[140px] lg:w-[164px] h-auto">
      {/* sheet */}
      <rect x="0" y="0" width="132" height="172" rx="4" fill="#f4efe6" stroke="#7a6c58" strokeWidth="1" />
      {/* header */}
      <rect x="0" y="0" width="132" height="26" rx="4" fill="#1f1206" />
      <rect x="0" y="14" width="132" height="12" fill="#1f1206" />
      {/* abstract lines */}
      <g fill="#3a3530">
        <rect x="12" y="38" width="108" height="3.5" rx="1.5" />
        <rect x="12" y="46" width="108" height="3.5" rx="1.5" />
        <rect x="12" y="54" width="84" height="3.5" rx="1.5" />
      </g>
      {/* theorem block */}
      {theorem && (
        <>
          <rect x="12" y="66" width="108" height="22" rx="2" fill="#e4ddd0" />
          <text x="17" y="80" fontFamily="'Geist Mono', monospace" fontSize="5.6" fill="#4a443c" fontStyle="italic">
            {theorem}
          </text>
        </>
      )}
      {/* body lines (two columns) */}
      <g fill="#9a9183">
        {Array.from({ length: bodyRows }).map((_, i) => {
          const y = bodyStart + i * 7;
          const last = i === bodyRows - 1;
          return (
            <g key={i}>
              <rect x="12" y={y} width={last ? 34 : 50} height="2.6" rx="1" />
              {!last && <rect x="70" y={y} width="50" height="2.6" rx="1" />}
            </g>
          );
        })}
      </g>
    </svg>
  );
}

function PaperCard({ card, delay }: { card: Card; delay: number }) {
  return (
    <motion.a
      href={card.href}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="group flex flex-col items-center gap-3 lg:gap-4"
    >
      <p className="text-orange-400 text-[10px] lg:text-xs tracking-[0.25em] uppercase" style={mono}>
        {card.label}
      </p>

      {/* paper thumbnail — real screenshot or drawn placeholder */}
      <div className="relative transition-transform duration-300 group-hover:-translate-y-1">
        {card.image ? (
          <img
            src={card.image}
            alt={card.title}
            className="block w-[190px] lg:w-[232px] h-auto rounded-md border border-[#fefefe]/15"
          />
        ) : (
          <>
            <PaperThumbnail theorem={card.theorem} />
            <span
              className="absolute top-0 left-0 right-0 h-[26px] flex items-center justify-center px-1 text-orange-400 text-[7.5px] lg:text-[8.5px] leading-none text-center"
              style={{ fontFamily: anton, letterSpacing: '0.02em' }}
            >
              {card.title}
            </span>
          </>
        )}
      </div>

      <div className="text-center" style={mono}>
        <p className="text-[#fefefe]/55 text-[11px] lg:text-xs leading-snug">{card.captions[0]}</p>
        <p className="text-[#fefefe]/55 text-[11px] lg:text-xs leading-snug">{card.captions[1]}</p>
      </div>

      <span className="inline-flex items-center gap-2 rounded-full border border-orange-500/70 bg-[#1c150e] px-4 py-1.5 transition-colors duration-300 group-hover:bg-[#241a0e]">
        <Github className="w-3.5 h-3.5 text-orange-400" strokeWidth={1.4} />
        <span className="text-orange-400 text-[11px]" style={mono}>github.com/unicitynetwork</span>
      </span>
    </motion.a>
  );
}

export function ProofPapersSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      {/* Radial glow */}
      <div
        className="fixed inset-0 z-[1] pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 34%, rgba(249,115,22,0.07) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 h-full flex flex-col px-8 sm:px-12 lg:px-20 py-10 sm:py-14 lg:py-16 justify-center gap-10 lg:gap-14">

        {/* Header */}
        <div className="shrink-0">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[36px] sm:text-[54px] lg:text-[68px] leading-[1.0] tracking-tight"
            style={{ fontFamily: anton }}
          >
            DON'T TAKE OUR WORD FOR IT —
            <br />
            <span className="text-orange-400">HERE'S THE MATH</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-[#fefefe]/80 text-base sm:text-lg lg:text-xl leading-relaxed mt-4"
            style={mono}
          >
            Three formal papers <span className="text-orange-400">(LLM Friendly)</span>. Every claim is proven and public.
          </motion.p>
        </div>

        {/* Three paper cards */}
        <div className="shrink-0 flex justify-center gap-8 sm:gap-10 lg:gap-16">
          {cards.map((card, i) => (
            <PaperCard key={card.title} card={card} delay={0.5 + i * 0.15} />
          ))}
        </div>

      </div>
    </div>
  );
}
