import { motion } from 'framer-motion';

const mono = { fontFamily: "'Geist Mono', monospace" };
const anton = { fontFamily: "'Anton', sans-serif" };

const rows = [
  {
    give: ['No global composability', 'no atomic cross-contract calls on one ledger'],
    get: ['Unlimited parallelism', 'no global state to synchronize'],
  },
  {
    give: ['No validators in the path', 'the recipient verifies, not a validator set'],
    get: ['No gatekeeper', 'no censorship, front-running, or gas market'],
  },
  {
    give: ['Client-side validation', 'more engineering than a node that trusts the chain'],
    get: ['Cash-like assets', 'bearer objects move peer-to-peer, off-chain'],
  },
  {
    give: ['No public ledger to query', 'no global lookup of who holds what'],
    get: ['Private by default', 'state shared only between the parties who need it'],
  },
];

function Arrow() {
  return (
    <div className="flex items-center justify-center px-1 lg:px-2">
      <svg width="30" height="14" viewBox="0 0 30 14" fill="none">
        <line x1="1" y1="7" x2="22" y2="7" stroke="rgba(254,254,254,0.35)" strokeWidth="1.8" />
        <path d="M19 2L25 7L19 12" stroke="rgba(254,254,254,0.35)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </svg>
    </div>
  );
}

export function TradeOffSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col px-8 sm:px-12 lg:px-20 py-8 sm:py-10 lg:py-12 justify-center gap-6 lg:gap-8">

        {/* Header */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-[#fefefe]/40 text-[11px] lg:text-xs tracking-[0.3em] uppercase mb-3"
            style={mono}
          >
            The Trade
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[30px] sm:text-[46px] lg:text-[60px] leading-[1.0] tracking-tight"
            style={anton}
          >
            HARDER TO BUILD. <span className="text-orange-400">CORRECT BY DESIGN.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-[#fefefe]/70 text-sm sm:text-base lg:text-xl leading-relaxed mt-3 max-w-5xl"
            style={mono}
          >
            Dropping the shared ledger costs us properties chains take for granted. Each cost buys a property decentralized finance actually needs.
          </motion.p>
        </div>

        {/* Give up → Get */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="shrink-0 grid grid-cols-[1fr_auto_1fr] gap-x-3 lg:gap-x-5 gap-y-3 lg:gap-y-4 items-stretch"
        >
          {/* column headers */}
          <p className="text-[#fefefe]/40 text-[10px] lg:text-xs tracking-[0.3em] uppercase" style={mono}>What We Give Up</p>
          <div />
          <p className="text-orange-400/80 text-[10px] lg:text-xs tracking-[0.3em] uppercase" style={mono}>What We Get</p>

          {rows.map((row) => (
            <Row key={row.give[0]} give={row.give} get={row.get} />
          ))}
        </motion.div>

        {/* Footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="shrink-0 text-[#fefefe]/40 text-xs lg:text-sm tracking-[0.25em] uppercase text-center"
          style={mono}
        >
          The Engineering Is Harder&nbsp;&nbsp;·&nbsp;&nbsp;Right For Decentralized Finance
        </motion.p>

      </div>
    </div>
  );
}

function Row({ give, get }: { give: string[]; get: string[] }) {
  return (
    <>
      <div className="rounded-2xl border border-[#fefefe]/12 bg-[#fefefe]/[0.025] px-5 py-3.5">
        <h3 className="text-[#fefefe] text-base lg:text-xl leading-tight" style={anton}>{give[0]}</h3>
        <p className="text-[#fefefe]/45 text-xs lg:text-sm leading-snug mt-1" style={mono}>{give[1]}</p>
      </div>
      <Arrow />
      <div className="rounded-2xl px-5 py-3.5" style={{ border: '1px solid rgba(249,115,22,0.4)', background: 'rgba(249,115,22,0.06)' }}>
        <h3 className="text-orange-400 text-base lg:text-xl leading-tight" style={anton}>{get[0]}</h3>
        <p className="text-xs lg:text-sm leading-snug mt-1" style={{ ...mono, color: 'rgba(249,180,130,0.7)' }}>{get[1]}</p>
      </div>
    </>
  );
}
