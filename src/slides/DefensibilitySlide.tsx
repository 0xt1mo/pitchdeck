import { motion } from 'framer-motion';

type Column = {
  eyebrow: string;
  badge?: string;
  headline: string;
  quoteLabel: string;
  quote: string;
  bullets: (string | { lead: string; bold: string; tail?: string })[];
  accent: 'orange' | 'neutral';
};

const columns: Column[] = [
  {
    eyebrow: 'TODAY',
    headline: 'Patent portfolio in flight.',
    quoteLabel: 'PATENT FILED · EU + US',
    quote: '"System and Method for Secure, Off-Chain Transactions"',
    bullets: [
      'Novel cryptographic architecture, not derived from existing chains',
      { lead: 'ZK research team — ', bold: 'Taltech', tail: ' · ex Matter Labs · ex Guardtime' },
      'Competitors use behavioral inference. AOS provides cryptographic proof.',
    ],
    accent: 'orange',
  },
  {
    eyebrow: 'TOMORROW',
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

export function DefensibilitySlide() {
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
            Defensibility
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[32px] sm:text-[48px] lg:text-[64px] xl:text-[72px] leading-[0.95] tracking-tight uppercase mt-2"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            <span className="text-[#fefefe]">DEFENSIBILITY:</span>{' '}
            <span className="text-orange-400">TODAY AND TOMORROW.</span>
          </motion.h1>
        </div>

        {/* 2-column comparison */}
        <div className="grid grid-cols-2 gap-6 lg:gap-8 shrink-0">
          {columns.map((c, i) => {
            const isOrange = c.accent === 'orange';
            return (
              <motion.div
                key={c.eyebrow}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 + i * 0.12, duration: 0.5 }}
                className="rounded-xl px-6 lg:px-8 py-6 lg:py-8 flex flex-col gap-5 lg:gap-6"
                style={{
                  background: isOrange ? 'rgba(249,115,22,0.05)' : 'rgba(255,255,255,0.025)',
                  border: isOrange
                    ? '1px solid rgba(249,115,22,0.35)'
                    : '1px solid rgba(255,255,255,0.12)',
                }}
              >
                {/* Eyebrow row with divider + optional badge */}
                <div className="flex items-center gap-3 lg:gap-4">
                  <p
                    className={`text-[10px] sm:text-xs lg:text-sm tracking-[0.3em] uppercase font-bold shrink-0 ${isOrange ? 'text-orange-400' : 'text-[#fefefe]/60'}`}
                    style={{ fontFamily: "'Geist Mono', monospace" }}
                  >
                    {c.eyebrow}
                  </p>
                  <div
                    className="h-px flex-1"
                    style={{
                      background: isOrange ? 'rgba(249,115,22,0.30)' : 'rgba(255,255,255,0.15)',
                    }}
                  />
                  {c.badge && (
                    <p
                      className="text-[9px] sm:text-[10px] lg:text-xs tracking-[0.2em] uppercase font-bold text-[#fefefe]/50 shrink-0"
                      style={{ fontFamily: "'Geist Mono', monospace" }}
                    >
                      {c.badge}
                    </p>
                  )}
                </div>

                {/* Headline */}
                <p
                  className="text-[#fefefe] text-[20px] sm:text-[24px] lg:text-[30px] leading-[1.1] tracking-tight font-bold"
                  style={{ fontFamily: "'Geist Mono', monospace" }}
                >
                  {c.headline}
                </p>

                {/* Quote callout */}
                <div
                  className="px-4 lg:px-5 py-3 lg:py-4"
                  style={{
                    background: 'rgba(0,0,0,0.30)',
                    borderLeft: isOrange ? '2px solid #f97316' : '2px solid rgba(255,255,255,0.40)',
                  }}
                >
                  <p
                    className="text-[#fefefe]/60 text-[10px] sm:text-xs lg:text-sm tracking-[0.2em] uppercase font-bold mb-1.5"
                    style={{ fontFamily: "'Geist Mono', monospace" }}
                  >
                    {c.quoteLabel}
                  </p>
                  <p
                    className="text-[#fefefe] text-sm sm:text-base lg:text-lg font-bold leading-snug"
                    style={{ fontFamily: "'Geist Mono', monospace" }}
                  >
                    {c.quote}
                  </p>
                </div>

                {/* Bullets */}
                <div className="flex flex-col gap-3 lg:gap-3.5">
                  {c.bullets.map((b, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <span
                        className={`text-sm lg:text-base font-bold shrink-0 ${isOrange ? 'text-orange-400' : 'text-[#fefefe]/70'}`}
                        style={{ fontFamily: "'Geist Mono', monospace" }}
                      >
                        →
                      </span>
                      <p
                        className="text-[#fefefe]/85 text-xs sm:text-sm lg:text-base leading-snug"
                        style={{ fontFamily: "'Geist Mono', monospace" }}
                      >
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
              </motion.div>
            );
          })}
        </div>

        {/* Bottom takeaway */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="shrink-0 text-center pt-4 lg:pt-5"
          style={{ borderTop: '1px solid rgba(255,255,255,0.10)' }}
        >
          <p
            className="text-[#fefefe]/90 text-base sm:text-lg lg:text-xl leading-snug font-bold"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            Today: <span className="text-orange-400">cryptographic proof of execution.</span>{' '}
            Tomorrow: <span className="text-orange-400">agents verified by construction.</span>
          </p>
        </motion.div>

      </div>
    </div>
  );
}
