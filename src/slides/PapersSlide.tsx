import { motion } from 'framer-motion';

type Paper = {
  tag: string;
  title: string;
  detail: string;
  proves: string;
  href?: string;
};

const papers: Paper[] = [
  {
    tag: 'PROOF · SCALING',
    title: 'THE AGGREGATION LAYER',
    detail:
      'ZK non-deletion proofs over a sharded Sparse Merkle Tree. Local verifiability, linear scale.',
    proves: 'scalability & "no shared ledger"',
  },
  {
    tag: 'PROOF · SECURITY',
    title: 'THE EXECUTION LAYER',
    detail:
      'Exact-security proofs: no double-spend, no blocking, service-side privacy. Off-chain, trustless.',
    proves: 'the core security guarantees',
  },
  {
    tag: 'PROOF · PROGRAMMABILITY',
    title: 'PREDICATES & SWAPS',
    detail:
      'Smart-contract-like ownership executed off-chain, plus a registry-anchored trustless atomic swap.',
    proves: 'programmability & interop',
  },
];

export function PapersSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col px-8 sm:px-12 lg:px-16 py-8 sm:py-10 lg:py-12 justify-center gap-7 lg:gap-9">

        {/* Eyebrow + headline */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-orange-400 text-xs sm:text-sm lg:text-base tracking-[0.4em] uppercase font-bold"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            Validate
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[40px] sm:text-[56px] lg:text-[80px] xl:text-[92px] leading-[0.95] tracking-tight uppercase mt-2"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            <span className="text-[#fefefe]">DON'T TAKE </span>
            <span className="text-orange-400">OUR WORD</span>
            <span className="text-[#fefefe]"> FOR IT.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="text-[#fefefe]/85 text-sm sm:text-base lg:text-lg leading-snug mt-4 lg:mt-6 max-w-5xl"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            Three formal papers back the architecture.{' '}
            <span className="text-[#fefefe] font-bold">
              Download them. Run them through any LLM. Interrogate every claim.
            </span>
          </motion.p>
        </div>

        {/* 3-paper grid */}
        <div className="grid grid-cols-3 gap-5 lg:gap-7 shrink-0">
          {papers.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.href || '#'}
              target={p.href ? '_blank' : undefined}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              className="rounded-xl px-6 lg:px-7 py-6 lg:py-7 flex flex-col gap-4 lg:gap-5 transition-colors hover:bg-[rgba(249,115,22,0.04)]"
              style={{
                background: 'rgba(255,255,255,0.02)',
                border: '1px solid rgba(249,115,22,0.35)',
              }}
            >
              <p
                className="text-orange-400 text-[10px] sm:text-xs lg:text-sm tracking-[0.3em] uppercase font-bold"
                style={{ fontFamily: "'Geist Mono', monospace" }}
              >
                {p.tag}
              </p>
              <h3
                className="text-[#fefefe] text-[22px] sm:text-[26px] lg:text-[32px] leading-[1.05] tracking-tight uppercase"
                style={{ fontFamily: "'Anton', sans-serif" }}
              >
                {p.title}
              </h3>
              <p
                className="text-[#fefefe]/80 text-xs sm:text-sm lg:text-base leading-snug"
                style={{ fontFamily: "'Geist Mono', monospace" }}
              >
                {p.detail}
              </p>
              <div
                className="flex items-baseline gap-2 mt-auto pt-3"
                style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
              >
                <p
                  className="text-[#fefefe]/55 text-[10px] sm:text-xs lg:text-sm tracking-[0.2em] uppercase font-bold"
                  style={{ fontFamily: "'Geist Mono', monospace" }}
                >
                  Proves
                </p>
                <span className="text-orange-400/70 text-xs lg:text-sm">→</span>
                <p
                  className="text-[#fefefe]/80 text-xs sm:text-sm lg:text-base leading-snug"
                  style={{ fontFamily: "'Geist Mono', monospace" }}
                >
                  {p.proves}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Download footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85, duration: 0.5 }}
          className="flex items-baseline gap-4 lg:gap-6 shrink-0 pt-4 lg:pt-5"
          style={{ borderTop: '1px solid rgba(255,255,255,0.10)' }}
        >
          <p
            className="text-orange-400 text-[10px] sm:text-xs lg:text-sm tracking-[0.3em] uppercase font-bold shrink-0"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            Download
          </p>
          <p
            className="text-[#fefefe]/75 text-sm sm:text-base lg:text-lg leading-snug"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            All three papers + a starter prompt at{' '}
            <a
              href="https://unicity.network/papers"
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 font-bold hover:underline"
            >
              unicity.network/papers
            </a>
          </p>
        </motion.div>

      </div>
    </div>
  );
}
