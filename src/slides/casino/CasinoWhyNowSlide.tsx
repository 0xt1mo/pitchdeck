import { motion } from 'framer-motion';

const eras = [
  {
    tag: '01 · The First Wave',
    name: 'Web',
    year: '1995',
    arrival: 'The browser arrives.',
    fact: <>InterCasino launches 1995. Bet365 founded 2000. Online gambling reaches $1bn by 2003.</>,
    impact: <>Winners: operators who treated the web as the platform. Losers: high-street bookmakers who treated it as a side channel.</>,
    state: 'past' as const,
  },
  {
    tag: '02 · The Second Wave',
    name: 'Mobile',
    year: '2008',
    arrival: 'The smartphone arrives.',
    fact: <>App Store launches 2008. Mobile overtakes desktop in regulated markets by 2014. FanDuel and DraftKings build $5bn+ businesses on the new interface.</>,
    impact: <>Winners: operators who built mobile-first. Losers: operators who ported the website.</>,
    state: 'past' as const,
  },
  {
    tag: '03 · The Third Wave',
    name: 'AI',
    year: '2026 · Now',
    arrival: 'The agent arrives.',
    fact: (
      <>
        <span className="text-[#fefefe] font-semibold">Agents are the fastest-growing channel in commerce.</span> The infrastructure is in production: Mastercard and Santander cleared Europe's first live agent-initiated bank payment in March. Visa Intelligent Commerce and Mastercard Agent Pay are rolling out across US cardholders.{' '}
        <span className="text-orange-400 font-semibold">The category is six months old and already real.</span>
      </>
    ),
    impact: (
      <>
        Winners: operators who are agent-readable first.{' '}
        <span className="text-orange-400 font-semibold">The window is three years. It just opened.</span>
      </>
    ),
    state: 'now' as const,
  },
];

export function CasinoWhyNowSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col px-12 lg:px-20 py-10 lg:py-14 justify-center gap-7">

        {/* Header */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-orange-400 text-xs sm:text-sm tracking-[0.32em] uppercase font-semibold"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            Nº 11 · Why Now
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[28px] sm:text-[40px] lg:text-[52px] leading-[0.98] tracking-tight mt-3 uppercase"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            Every twenty years, the interface changes.{' '}
            <span className="text-orange-400">The operator who moves first defines the era.</span>
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-[2px] w-24 lg:w-32 bg-orange-500 origin-left mt-5"
            style={{ boxShadow: '0 0 8px rgba(249,115,22,0.7)' }}
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-4 text-[#fefefe]/75 text-sm lg:text-base leading-relaxed max-w-5xl"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            Two interfaces shaped this industry — the web and the mobile app. Each had a window of about three years where the early movers became the giants of the next two decades. The third interface is here.
          </motion.p>
        </div>

        {/* Three eras */}
        <div
          className="grid grid-cols-[1fr_1fr_1.15fr] gap-8 lg:gap-10 pt-7 shrink-0"
          style={{ borderTop: '1px solid rgba(255,255,255,0.10)' }}
        >
          {eras.map((e, i) => {
            const isNow = e.state === 'now';
            return (
              <motion.div
                key={e.name}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.12, duration: 0.55 }}
                className="relative pt-6 flex flex-col gap-3"
              >
                <span
                  className="absolute top-0 left-0 h-[2px] w-12"
                  style={{
                    background: isNow ? '#FF6A1F' : 'rgba(254,254,254,0.38)',
                    boxShadow: isNow ? '0 0 8px rgba(249,115,22,0.8)' : 'none',
                  }}
                />
                <p
                  className={isNow ? 'text-orange-400' : 'text-[#fefefe]/40'}
                  style={{
                    fontFamily: "'Geist Mono', monospace",
                    fontSize: '13px',
                    letterSpacing: '0.32em',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                  }}
                >
                  {e.tag}
                </p>
                <h3
                  className="leading-[0.92] uppercase"
                  style={{
                    fontFamily: "'Anton', sans-serif",
                    fontSize: 'clamp(56px, 7vw, 96px)',
                    letterSpacing: '0.02em',
                    color: isNow ? '#FEFEFE' : 'rgba(254,254,254,0.40)',
                  }}
                >
                  {e.name}
                </h3>
                <p
                  className={isNow ? 'text-orange-400 font-semibold' : 'text-[#fefefe]/30'}
                  style={{
                    fontFamily: "'Geist Mono', monospace",
                    fontSize: '15px',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                  }}
                >
                  {e.year}
                </p>
                <div
                  className="h-[1px] w-8 my-1"
                  style={{
                    background: isNow ? '#FF6A1F' : 'rgba(254,254,254,0.30)',
                    boxShadow: isNow ? '0 0 6px rgba(249,115,22,0.7)' : 'none',
                  }}
                />
                <p
                  className="leading-tight uppercase"
                  style={{
                    fontFamily: "'Anton', sans-serif",
                    fontSize: '20px',
                    letterSpacing: '0.06em',
                    color: isNow ? '#FEFEFE' : 'rgba(254,254,254,0.45)',
                  }}
                >
                  {e.arrival}
                </p>
                <p
                  className="leading-[1.6]"
                  style={{
                    fontFamily: "'Geist Mono', monospace",
                    fontSize: '14px',
                    color: isNow ? 'rgba(254,254,254,0.85)' : 'rgba(254,254,254,0.45)',
                  }}
                >
                  {e.fact}
                </p>
                <p
                  className="leading-[1.55] mt-auto pt-3"
                  style={{
                    fontFamily: "'Geist Mono', monospace",
                    fontSize: '13px',
                    color: isNow ? 'rgba(254,254,254,0.75)' : 'rgba(254,254,254,0.36)',
                    borderTop: '1px dashed rgba(254,254,254,0.10)',
                  }}
                >
                  {e.impact}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
