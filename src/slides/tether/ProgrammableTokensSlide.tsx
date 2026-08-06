import { motion } from 'framer-motion';
import { Coins, GitBranch, Fingerprint, Users, UserCheck, Clock, ArrowRight } from 'lucide-react';

const mono = { fontFamily: "'Geist Mono', monospace" };
const anton = { fontFamily: "'Anton', sans-serif" };

const rules = [
  { Icon: Fingerprint, title: 'SIGNATURE', desc: 'one key signs' },
  { Icon: Users, title: 'MULTI-SIG', desc: 'all n keys sign' },
  { Icon: UserCheck, title: 'THRESHOLD', desc: 'any k-of-n sign' },
  { Icon: Clock, title: 'TIME-LOCK', desc: 'only after τ₀' },
];

function Arrow() {
  return (
    <div className="flex items-center justify-center px-1">
      <ArrowRight className="w-6 h-6 lg:w-8 lg:h-8 text-[#fefefe]/35" strokeWidth={1.6} />
    </div>
  );
}

export function ProgrammableTokensSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col px-8 sm:px-12 lg:px-20 py-7 sm:py-9 lg:py-11 justify-center gap-5 lg:gap-7">

        {/* Header */}
        <div className="shrink-0">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[34px] sm:text-[52px] lg:text-[68px] leading-[1.0] tracking-tight"
            style={anton}
          >
            <span className="text-[#fefefe]">EVERY TOKEN IS </span>
            <span className="text-orange-400">PROGRAMMABLE.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-[#fefefe]/65 text-sm sm:text-base lg:text-xl leading-relaxed mt-3 max-w-5xl"
            style={mono}
          >
            Each token carries its own spending rule — a <span className="text-orange-400">predicate</span> — so transfers can be <span className="text-[#fefefe] font-semibold">conditional</span>.
          </motion.p>
        </div>

        {/* Flow: token → condition → new owner */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="shrink-0 grid grid-cols-[1fr_auto_1.25fr_auto_1fr] items-stretch gap-2 lg:gap-3"
        >
          {/* A token */}
          <div className="rounded-2xl border-t-2 border-orange-500 border-x border-b border-[#fefefe]/10 bg-[#fefefe]/[0.02] px-4 lg:px-6 py-5 lg:py-6 flex flex-col items-center text-center">
            <Coins className="w-7 h-7 lg:w-9 lg:h-9 text-orange-400" strokeWidth={1.6} />
            <p className="text-orange-400 text-[10px] lg:text-xs tracking-[0.25em] uppercase mt-3" style={mono}>A Token</p>
            <p className="text-[#fefefe]/70 text-xs lg:text-sm mt-1.5" style={mono}>carries its own logic</p>
          </div>

          <Arrow />

          {/* The condition (highlight) */}
          <div
            className="rounded-2xl border-2 border-orange-500 px-4 lg:px-6 py-5 lg:py-6 flex flex-col items-center text-center justify-center"
            style={{ background: 'linear-gradient(160deg, rgba(249,115,22,0.16), rgba(249,115,22,0.03))', boxShadow: '0 0 40px rgba(249,115,22,0.18)' }}
          >
            <p className="text-orange-400/80 text-[10px] lg:text-xs tracking-[0.25em] uppercase" style={mono}>The Condition</p>
            <h3 className="text-[#fefefe] text-2xl lg:text-4xl leading-none mt-2" style={anton}>A SPENDING RULE</h3>
            <p className="text-[#fefefe]/65 text-xs lg:text-sm mt-2.5 leading-snug" style={mono}>updated by users during transactions</p>
          </div>

          <Arrow />

          {/* New owner */}
          <div className="rounded-2xl border-t-2 border-orange-500 border-x border-b border-[#fefefe]/10 bg-[#fefefe]/[0.02] px-4 lg:px-6 py-5 lg:py-6 flex flex-col items-center text-center">
            <GitBranch className="w-7 h-7 lg:w-9 lg:h-9 text-orange-400" strokeWidth={1.6} />
            <p className="text-orange-400 text-[10px] lg:text-xs tracking-[0.25em] uppercase mt-3" style={mono}>The New Owner</p>
            <p className="text-[#fefefe]/70 text-xs lg:text-sm mt-1.5" style={mono}>who receives and satisfies the predicate</p>
          </div>
        </motion.div>

        {/* Rules */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.6 }}
          className="shrink-0"
        >
          <p className="text-orange-400/80 text-sm lg:text-lg tracking-[0.3em] uppercase mb-4" style={mono}>A Few of the Rules You Can Set</p>
          <div className="grid grid-cols-4 gap-3 lg:gap-4">
            {rules.map(({ Icon, title, desc }) => (
              <div key={title} className="border-l-2 border-orange-500 bg-[#fefefe]/[0.02] rounded-r-lg pl-4 pr-3 py-4 lg:py-5">
                <div className="flex items-center gap-2.5">
                  <Icon className="w-5 h-5 lg:w-7 lg:h-7 text-orange-400 shrink-0" strokeWidth={1.7} />
                  <h4 className="text-[#fefefe] text-base lg:text-2xl leading-none" style={anton}>{title}</h4>
                </div>
                <p className="text-[#fefefe]/60 text-xs lg:text-base mt-2.5" style={mono}>{desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
}
