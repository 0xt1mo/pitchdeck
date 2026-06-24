import { motion } from 'framer-motion';

const mono = { fontFamily: "'Geist Mono', monospace" };
const anton = { fontFamily: "'Anton', sans-serif" };

/* Shared shell — matches the May-30 Tether content-slide construction */
function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      <div className="relative z-10 h-full flex flex-col px-8 sm:px-12 lg:px-20 py-12 sm:py-14 lg:py-16 justify-center gap-8 lg:gap-10">
        {children}
      </div>
    </div>
  );
}

function Header({ white, orange, sub }: { white: string; orange: string; sub: string }) {
  return (
    <div className="shrink-0">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-[#fefefe] text-[38px] sm:text-[58px] lg:text-[78px] leading-[0.95] tracking-tight uppercase"
        style={anton}
      >
        {white} <span className="text-orange-400">{orange}</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-[#fefefe]/80 text-lg sm:text-xl lg:text-2xl mt-4 max-w-5xl"
        style={mono}
      >
        {sub}
      </motion.p>
    </div>
  );
}

/* 2. The macro shift */
export function GregOpportunitySlide() {
  return (
    <Shell>
      <Header white="The machines have started" orange="paying each other." sub="Most of the internet is already machines — and they transact at software speed." />
      <motion.div
        initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.6 }}
        className="shrink-0 flex items-center gap-10 lg:gap-16 mt-2"
      >
        <div className="shrink-0">
          <div className="text-orange-400 text-[110px] sm:text-[150px] lg:text-[190px] leading-[0.8]" style={anton}>57.5%</div>
          <p className="text-[#fefefe]/55 text-sm lg:text-base mt-3 max-w-xs" style={mono}>of web requests are automated, not human — Cloudflare, 2026</p>
        </div>
        <p className="text-[#fefefe]/80 text-base sm:text-lg lg:text-2xl leading-relaxed max-w-2xl" style={mono}>
          About <span className="text-[#fefefe] font-semibold">100M on-chain payments</span> crossed Base in nine months, and Mastercard now runs an agent-payment system for machines. The amounts are tiny; the old payment systems cannot carry them. <span className="text-orange-400">The proof has to travel with the money.</span>
        </p>
      </motion.div>
    </Shell>
  );
}

/* 5. The infrastructure gap — fair access */
const gap = [
  { n: '01', t: 'CUT OUT THE MIDDLEMAN', d: 'A decade of open infrastructure settled it.', s: 'SOLVED', open: false },
  { n: '02', t: 'LET VALUE MOVE FREELY', d: 'Stablecoins now settle tens of trillions a year.', s: 'SOLVED', open: false },
  { n: '03', t: 'PROVE WHO IS ON THE OTHER END', d: 'No blockchain can verify a recipient before the transaction executes.', s: 'UNSOLVED', open: true },
];
export function GregGapSlide() {
  return (
    <Shell>
      <Header white="Fair access takes three things." orange="The third was never built." sub="We solved disintermediation and digital value. Counterparty verification remains broken." />
      <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.6 }} className="shrink-0 flex flex-col">
        {gap.map((g) => (
          <div key={g.n} className="flex items-center gap-6 lg:gap-8 py-4 lg:py-5 border-t border-white/10 last:border-b">
            <span className="text-orange-400 text-2xl lg:text-3xl w-12 shrink-0" style={anton}>{g.n}</span>
            <div className="flex-1">
              <h3 className="text-[#fefefe] text-xl lg:text-3xl leading-none" style={anton}>{g.t}</h3>
              <p className="text-[#fefefe]/55 text-sm lg:text-lg mt-1.5" style={mono}>{g.d}</p>
            </div>
            <span className={`text-xs lg:text-sm tracking-[0.18em] shrink-0 ${g.open ? 'text-orange-400' : 'text-[#fefefe]/40'}`} style={mono}>{g.s}</span>
          </div>
        ))}
      </motion.div>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} className="shrink-0 text-[#fefefe] text-lg lg:text-2xl" style={anton}>
        Unicity was engineered to close <span className="text-orange-400">the third gap.</span>
      </motion.p>
    </Shell>
  );
}

/* 6. From side-car to protocol */
export function GregIdentitySlide() {
  return (
    <Shell>
      <Header white="From side-car to" orange="protocol." sub="Identity must live inside the asset, not beside the transaction." />
      <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.6 }} className="shrink-0 grid grid-cols-2 gap-8 lg:gap-14 mt-2">
        <div className="border-l-2 border-white/15 pl-5 lg:pl-6">
          <h3 className="text-[#fefefe]/70 text-xl lg:text-2xl leading-none" style={anton}>THE SIDE-CAR</h3>
          <p className="text-[#fefefe]/55 text-sm lg:text-lg mt-3 leading-relaxed" style={mono}>Self-sovereign identity stalled because the credential sat beside the transaction. A check that can be skipped gets skipped.</p>
        </div>
        <div className="border-l-2 border-orange-500 pl-5 lg:pl-6">
          <h3 className="text-orange-400 text-xl lg:text-2xl leading-none" style={anton}>THE PROTOCOL</h3>
          <p className="text-[#fefefe]/75 text-sm lg:text-lg mt-3 leading-relaxed" style={mono}>USBC drew the right conclusion: put identity inside the dollar. Unicity makes that embedded identity enforceable across any jurisdiction.</p>
        </div>
      </motion.div>
    </Shell>
  );
}

/* The team — heritage */
const team = [
  { t: 'THE TEAM', d: 'Built Guardtime / KSI — sovereign-grade verification with the Estonian Government, Lockheed Martin, Boeing and NATO. In production since 2012, eIDAS-grade. KSI held 300,000 tx/sec in Eesti Pank 2021 — the lineage, not a live Unicity number.' },
  { t: 'THE PROOF', d: 'Three mathematical papers prove privacy and no-double-spend. Drop them into any model and they check. All public on github.com/unicitynetwork.' },
  { t: 'THE ALIGNMENT', d: 'Identity, speed, and peer-to-peer settlement, bound into one instrument — the fair-access infrastructure Hard Yaka has backed across a generation of payments companies.' },
];
export function GregTeamSlide() {
  return (
    <Shell>
      <Header white="We built this" orange="before." sub="Sovereign-grade cryptographic infrastructure, in production since 2012." />
      <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.6 }} className="shrink-0 grid grid-cols-3 gap-5 lg:gap-7 mt-2">
        {team.map((c) => (
          <div key={c.t} className="rounded-lg border border-white/10 border-t-2 border-t-orange-500 bg-white/[0.02] p-5 lg:p-6">
            <h3 className="text-orange-400 text-lg lg:text-xl" style={anton}>{c.t}</h3>
            <p className="text-[#fefefe]/65 text-xs lg:text-sm mt-3 leading-relaxed" style={mono}>{c.d}</p>
          </div>
        ))}
      </motion.div>
    </Shell>
  );
}

/* The ask */
export function GregAskSlide() {
  return (
    <Shell>
      <Header white="The ask:" orange="$5M." sub="A seed to ship a compliant dollar that settles the moment the credential checks out." />
      <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.6 }}
        className="shrink-0 rounded-xl border border-orange-500/40 bg-gradient-to-b from-orange-500/[0.08] to-transparent p-7 lg:p-9 max-w-5xl mt-2">
        <div className="text-[#fefefe] text-2xl lg:text-4xl" style={anton}>
          <span className="text-orange-400">$5M SEED</span> · $25M CAP / $50M TOKEN FDV · SAFE + TOKEN WARRANT
        </div>
        <p className="text-[#fefefe]/70 text-base lg:text-xl mt-5 leading-relaxed" style={mono}>
          First build: a USBC-style dollar that settles peer-to-peer the instant the Receive Predicate is satisfied — binding <span className="text-[#fefefe] font-semibold">identity, speed, and settlement</span> into one instrument.
        </p>
      </motion.div>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }} className="shrink-0 text-[#fefefe] text-lg lg:text-2xl mt-1" style={anton}>
        Institutions rely on walled gardens for compliance. <span className="text-orange-400">Unicity embeds that compliance directly into the dollar.</span>
      </motion.p>
    </Shell>
  );
}
