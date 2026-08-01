import { motion } from 'framer-motion';

const mono = "'Geist Mono', monospace";
const anton = "'Anton', sans-serif";

const stats = [
  { value: '3,500', label: 'DEVELOPER SIGN-UPS' },
  { value: '1,500', label: 'COMMUNITY TESTNET APPS' },
  { value: '80K+', label: 'LIVE TESTNET WALLETS' },
  { value: 'LIVE', label: "SOFT LAUNCH · JUL '26", sub: "GA · AUG '26", highlight: true },
];

const cards = [
  {
    eyebrow: 'SOVEREIGN CHANNEL',
    badge: 'SIGNED',
    title: 'ALERIA',
    title2: 'OEM',
    highlight: true,
    body: (
      <>
        <strong className="text-[#fefefe] font-bold">Revenue share</strong> with UAE Sovereign
        AI provider — distribution reach across Middle East and Africa.
      </>
    ),
  },
];

export function TractionSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      {/* Warm glow, top */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(55% 45% at 32% 0%, rgba(249,115,22,0.12), transparent 70%)' }}
      />

      <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-12 lg:px-20 py-8 lg:py-12 gap-6 lg:gap-9">

        {/* Header */}
        <div className="shrink-0">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[56px] sm:text-[80px] lg:text-[104px] leading-[0.9] tracking-tight uppercase"
            style={{ fontFamily: anton }}
          >
            <span className="text-[#fefefe]">TRACTION</span><span className="text-orange-400">.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-[#fefefe]/85 text-base sm:text-lg lg:text-xl leading-snug mt-3 max-w-5xl"
            style={{ fontFamily: mono }}
          >
            <span className="text-orange-400 font-bold">Soft-launched July '26, GA in August.</span> A growing developer base, a signed sovereign channel, and a commercial pipeline lined up for go-live.
          </motion.p>
        </div>

        {/* Stat row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="shrink-0 grid grid-cols-2 lg:grid-cols-4 border-y border-[#fefefe]/12"
        >
          {stats.map((s, i) => (
            <div
              key={s.value}
              className={`px-4 lg:px-7 py-5 lg:py-7 ${i % 4 !== 0 ? 'lg:border-l' : ''} ${i % 2 !== 0 ? 'border-l' : ''} border-[#fefefe]/12`}
            >
              <p
                className="text-4xl lg:text-6xl leading-none"
                style={{ fontFamily: anton, color: s.highlight ? '#f97316' : '#fefefe' }}
              >
                {s.value}
              </p>
              <p
                className="text-[#fefefe]/45 text-[11px] lg:text-sm tracking-[0.12em] uppercase mt-3 leading-snug"
                style={{ fontFamily: mono }}
              >
                {s.label}
                {s.sub && (
                  <>
                    <br />
                    {s.sub}
                  </>
                )}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Cards */}
        <div className="shrink-0 flex flex-col lg:flex-row gap-4 lg:gap-5">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
              className={`rounded-xl border p-5 lg:p-7 w-full lg:max-w-[520px] ${c.highlight
                ? 'border-orange-500/70 bg-orange-500/[0.06]'
                : 'border-[#fefefe]/12 bg-[#fefefe]/[0.02]'
                }`}
              style={c.highlight ? { boxShadow: '0 0 28px rgba(249,115,22,0.15)' } : undefined}
            >
              <div className="flex items-center justify-between gap-3">
                <span
                  className={`text-[11px] lg:text-xs tracking-[0.15em] uppercase ${c.highlight ? 'text-orange-400' : 'text-[#fefefe]/40'
                    }`}
                  style={{ fontFamily: mono }}
                >
                  {c.eyebrow}
                </span>
                {c.badge && (
                  <span
                    className="rounded border border-orange-500/70 text-orange-400 text-[10px] lg:text-xs px-2 py-0.5 tracking-[0.15em] uppercase"
                    style={{ fontFamily: mono }}
                  >
                    {c.badge}
                  </span>
                )}
              </div>
              <p
                className="text-[#fefefe] text-2xl lg:text-3xl leading-[0.95] uppercase mt-4"
                style={{ fontFamily: anton }}
              >
                {c.title}
                <br />
                {c.title2}
              </p>
              <p
                className="text-[#fefefe]/65 text-sm lg:text-base leading-snug mt-4"
                style={{ fontFamily: mono }}
              >
                {c.body}
              </p>
            </motion.div>
          ))}

          {/* Commercial pipeline */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="rounded-xl border border-[#fefefe]/12 bg-[#fefefe]/[0.02] p-5 lg:p-7 w-full lg:max-w-[520px]"
          >
            <div className="flex items-center justify-between gap-3">
              <span className="text-[#fefefe]/40 text-[11px] lg:text-xs tracking-[0.15em] uppercase" style={{ fontFamily: mono }}>
                Commercial Pipeline
              </span>
              <span className="rounded border border-[#fefefe]/25 text-[#fefefe]/60 text-[10px] lg:text-xs px-2 py-0.5 tracking-[0.15em] uppercase" style={{ fontFamily: mono }}>
                Awaiting GA
              </span>
            </div>
            <div className="mt-4 flex flex-col gap-2.5">
              {[['15', 'Telecom operators'], ['10', 'iGaming operators'], ['10', 'Clinics']].map(([n, l]) => (
                <div key={l} className="flex items-baseline gap-3">
                  <span className="text-orange-400 text-2xl lg:text-3xl leading-none w-10 lg:w-12 shrink-0" style={{ fontFamily: anton }}>{n}</span>
                  <span className="text-[#fefefe]/85 text-sm lg:text-base" style={{ fontFamily: mono }}>{l}</span>
                </div>
              ))}
            </div>
            <p className="text-[#fefefe]/55 text-xs lg:text-sm leading-snug mt-4" style={{ fontFamily: mono }}>
              Engaged — awaiting general availability.
            </p>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
