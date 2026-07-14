import { motion } from 'framer-motion';

const mono = "'Geist Mono', monospace";
const display = "'Anton', sans-serif";

type Column = {
  keyLead: string;
  keyRest: string;
  badge?: string;
  headline: string;
  quoteLabel: string;
  quote: string;
  bullets: (string | { lead: string; bold: string; tail?: string })[];
  accent: 'orange' | 'neutral';
};

const columns: Column[] = [
  {
    keyLead: 'Today',
    keyRest: 'cryptographic proof of execution.',
    headline: 'The agent trace, tokenized.',
    quoteLabel: 'LIVE · UNICITY PROOF SYSTEM',
    quote: 'Every decision becomes a signed, hash-linked token — proof, not a log.',
    bullets: [
      'Every prompt, tool call, and decision is tokenized into a tamper-evident chain',
      { lead: 'Anchored on the ', bold: 'Unicity blockchain', tail: ' — verifiable by anyone, rewritable by no one' },
      'Competitors infer behaviour from logs. Unicity AOS proves execution cryptographically.',
    ],
    accent: 'orange',
  },
  {
    keyLead: 'Tomorrow',
    keyRest: 'agents verified by construction.',
    badge: 'IN DEVELOPMENT',
    headline: 'The IDE for verified agent development.',
    quoteLabel: 'FULL DEV PIPELINE',
    quote: 'Write → verify → deploy → prove. End-to-end.',
    bullets: [
      'Formal verification language and tooling — practical, not academic',
      'Mathematical guarantees of agent behavior, not statistical detection',
    ],
    accent: 'neutral',
  },
];

export function AosDefensibilitySlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col px-8 sm:px-12 lg:px-16 py-8 sm:py-10 lg:py-12 justify-center gap-6 lg:gap-8">

        {/* Eyebrow + headline */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-orange-400 text-xs lg:text-lg tracking-[0.4em] uppercase font-bold"
            style={{ fontFamily: mono }}
          >
            Roadmap
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[32px] sm:text-[48px] lg:text-[64px] xl:text-[72px] leading-[0.95] tracking-tight uppercase mt-2"
            style={{ fontFamily: display }}
          >
            <span className="text-[#fefefe]">ROADMAP:</span>{' '}
            <span className="text-orange-400">AGENTS VERIFIABLE BY CONSTRUCTION.</span>
          </motion.h1>
        </div>

        {/* Two columns, each with its key line above the box */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-8 shrink-0 items-start">
          {columns.map((c, i) => {
            const isOrange = c.accent === 'orange';
            return (
              <motion.div
                key={c.keyLead}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.12, duration: 0.5 }}
                className="flex flex-col gap-3 lg:gap-4"
              >
                {/* Key line over the box */}
                <p className="text-[#fefefe] text-xl sm:text-2xl lg:text-[32px] leading-[1.05] uppercase tracking-tight" style={{ fontFamily: display }}>
                  {c.keyLead}: <span className="text-orange-400">{c.keyRest}</span>
                </p>

                {/* Box */}
                <div
                  className="rounded-xl px-6 lg:px-8 py-5 lg:py-7 flex flex-col gap-4 lg:gap-5"
                  style={{
                    background: isOrange ? 'rgba(249,115,22,0.05)' : 'rgba(255,255,255,0.025)',
                    border: isOrange ? '1px solid rgba(249,115,22,0.35)' : '1px solid rgba(255,255,255,0.12)',
                  }}
                >
                  {/* Headline + optional badge */}
                  <div className="flex items-start justify-between gap-3">
                    <p className="text-[#fefefe] text-[22px] sm:text-[24px] lg:text-[30px] leading-[1.1] tracking-tight font-bold" style={{ fontFamily: mono }}>
                      {c.headline}
                    </p>
                    {c.badge && (
                      <span className="shrink-0 mt-1 rounded-full border border-[#fefefe]/25 px-2.5 py-0.5 text-[#fefefe]/60 text-xs tracking-[0.16em] uppercase" style={{ fontFamily: mono }}>
                        {c.badge}
                      </span>
                    )}
                  </div>

                  {/* Quote callout */}
                  <div
                    className="px-4 lg:px-5 py-3 lg:py-4"
                    style={{ background: 'rgba(0,0,0,0.30)', borderLeft: isOrange ? '2px solid #f97316' : '2px solid rgba(255,255,255,0.40)' }}
                  >
                    <p className="text-[#fefefe]/60 text-xs lg:text-lg tracking-[0.2em] uppercase font-bold mb-1.5" style={{ fontFamily: mono }}>
                      {c.quoteLabel}
                    </p>
                    <p className="text-[#fefefe] text-sm sm:text-base lg:text-2xl font-bold leading-snug" style={{ fontFamily: mono }}>
                      {c.quote}
                    </p>
                  </div>

                  {/* Bullets */}
                  <div className="flex flex-col gap-3 lg:gap-3.5">
                    {c.bullets.map((b, j) => (
                      <div key={j} className="flex items-start gap-3">
                        <span className={`text-sm lg:text-xl font-bold shrink-0 ${isOrange ? 'text-orange-400' : 'text-[#fefefe]/70'}`} style={{ fontFamily: mono }}>
                          →
                        </span>
                        <p className="text-[#fefefe]/85 text-sm lg:text-xl leading-snug" style={{ fontFamily: mono }}>
                          {typeof b === 'string' ? (
                            b
                          ) : (
                            <>
                              {b.lead}
                              <span className="text-[#fefefe] font-bold">{b.bold}</span>
                              {b.tail}
                            </>
                          )}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
