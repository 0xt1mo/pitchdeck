import { motion } from 'framer-motion';

const mono = "'Geist Mono', monospace";
const display = "'Anton', sans-serif";

const pillars = [
  { n: '01', name: 'DISCOVER', body: 'Cryptographic identity for every agent. Inventory the shadow AI already running.' },
  { n: '02', name: 'ENFORCE', body: 'Intercept every action in-path. Block the bad one — not just alert on it.' },
  { n: '03', name: 'ISOLATE', body: 'Multi-tenant by design. Every client sealed, one console across all of them.' },
  { n: '04', name: 'PROVE', body: 'A tamper-evident record of every agent action, ready for your clients’ auditors.' },
];

export function NewServiceSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(55% 45% at 50% 0%, rgba(249,115,22,0.10), transparent 70%)' }}
      />

      <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-12 lg:px-20 py-10 lg:py-12 gap-6 lg:gap-9">

        {/* Header */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-orange-400 text-[10px] sm:text-xs lg:text-sm tracking-[0.4em] uppercase font-bold"
            style={{ fontFamily: mono }}
          >
            The opportunity
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[34px] sm:text-[52px] lg:text-[74px] xl:text-[86px] leading-[0.95] tracking-tight uppercase mt-2"
            style={{ fontFamily: display }}
          >
            A NEW SERVICE{' '}
            <span className="text-orange-400">ONLY YOU CAN SELL.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="text-[#fefefe]/85 text-sm sm:text-base lg:text-xl leading-snug mt-4 max-w-5xl"
            style={{ fontFamily: mono }}
          >
            <span className="text-orange-400 font-bold">Agent Security &amp; Governance</span> — a managed service you deliver
            on Unicity, from one pane of glass. The controls your clients can&apos;t build themselves.
          </motion.p>
        </div>

        {/* Pillars */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 shrink-0">
          {pillars.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 + i * 0.1, duration: 0.5 }}
              className="rounded-2xl px-5 lg:px-6 py-5 lg:py-6 flex flex-col"
              style={{ background: 'rgba(255,106,0,0.05)', border: '1px solid rgba(255,106,0,0.4)' }}
            >
              <p className="text-orange-400/60 text-xs lg:text-sm tracking-[0.2em] font-bold" style={{ fontFamily: mono }}>
                {p.n}
              </p>
              <p className="text-[#fefefe] text-xl lg:text-2xl leading-none uppercase mt-2" style={{ fontFamily: display }}>
                {p.name}
              </p>
              <p className="text-[#fefefe]/75 text-xs lg:text-sm leading-snug mt-3" style={{ fontFamily: mono }}>
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Takeaway */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85, duration: 0.6 }}
          className="shrink-0 text-[#fefefe]/85 text-base sm:text-lg lg:text-2xl leading-snug max-w-6xl pt-4"
          style={{ fontFamily: mono, borderTop: '1px solid rgba(255,255,255,0.10)' }}
        >
          Not another tool to resell — <span className="text-orange-400">a category your competitors don&apos;t offer yet.</span>
        </motion.p>

      </div>
    </div>
  );
}
