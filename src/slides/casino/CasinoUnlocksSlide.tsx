import { motion } from 'framer-motion';

const unlocks = [
  {
    num: '01',
    cat: 'Acquisition',
    old: '25-min funnel · 30% lost',
    next: 'One-tap handshake',
    nextHighlight: 'One-tap',
  },
  {
    num: '02',
    cat: 'Retention',
    old: '8% email open · CRM stack',
    next: '100% delivered in chat',
    nextHighlight: '100%',
  },
  {
    num: '03',
    cat: 'Loyalty',
    old: 'Churn at exit',
    next: 'Memory across operators',
    nextHighlight: 'across operators',
  },
  {
    num: '04',
    cat: 'Compliance',
    old: "Regulator's wishlist",
    next: 'Wallet-bound, structurally enforced',
    nextHighlight: 'structurally enforced',
  },
];

export function CasinoUnlocksSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col px-12 lg:px-20 py-10 lg:py-14 justify-center gap-8">

        {/* Header */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-orange-400 text-xs sm:text-sm tracking-[0.32em] uppercase font-semibold"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            Nº 02 · Why Agents Change the Game
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[28px] sm:text-[40px] lg:text-[52px] leading-[0.95] tracking-tight mt-3 uppercase"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            Four things become possible.{' '}
            <span className="text-orange-400">Today, none of them are.</span>
          </motion.h1>
        </div>

        {/* Before / After rows */}
        <div className="flex flex-col shrink-0">
          {unlocks.map((u, i) => (
            <motion.div
              key={u.num}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
              className="grid grid-cols-[100px_260px_1fr] items-center gap-x-8 lg:gap-x-12 py-5 lg:py-7"
              style={{
                borderTop: '1px solid rgba(255,255,255,0.10)',
                ...(i === unlocks.length - 1
                  ? { borderBottom: '1px solid rgba(255,255,255,0.10)' }
                  : {}),
              }}
            >
              {/* Number */}
              <div
                className="text-orange-400 text-[52px] sm:text-[64px] lg:text-[76px] leading-none"
                style={{ fontFamily: "'Anton', sans-serif", letterSpacing: '0.02em' }}
              >
                {u.num}
              </div>

              {/* Category */}
              <div
                className="text-[#fefefe] text-[26px] lg:text-[34px] tracking-[0.06em] uppercase leading-none"
                style={{ fontFamily: "'Anton', sans-serif" }}
              >
                {u.cat}
              </div>

              {/* Value proposition */}
              <div
                className="text-[#fefefe] text-xl lg:text-3xl leading-snug font-semibold"
                style={{ fontFamily: "'Geist Mono', monospace" }}
              >
                {u.next.split(u.nextHighlight).map((part, idx, arr) => (
                  <span key={idx}>
                    {part}
                    {idx < arr.length - 1 && (
                      <span className="text-orange-400">{u.nextHighlight}</span>
                    )}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="text-orange-400 text-[20px] sm:text-[26px] lg:text-[32px] leading-tight tracking-tight pt-5 shrink-0"
          style={{
            fontFamily: "'Anton', sans-serif",
            borderTop: '1px solid rgba(249,115,22,0.25)',
          }}
        >
          THE FRONT DOOR STAYS.{' '}
          <span className="text-[#fefefe]">THE BUILDING CHANGES.</span>
        </motion.p>
      </div>
    </div>
  );
}
