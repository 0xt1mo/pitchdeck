import { motion } from 'framer-motion';

const advantages = [
  {
    num: '01',
    title: 'Faster execution',
    body: 'No round-trip through a shared system of record. Proof is local to the action.',
  },
  {
    num: '02',
    title: 'Private coordination',
    body: 'Agent-to-agent and agent-to-system without exposing sensitive data to a shared public ledger.',
  },
  {
    num: '03',
    title: 'Verifiable records',
    body: 'Tamper-evidence is a mathematical property of the receipt, not a vendor promise.',
  },
  {
    num: '04',
    title: 'Institution-held evidence',
    body: 'Cryptographic proofs stay under operator custody — verifiable without depending on a vendor system.',
  },
  {
    num: '05',
    title: 'Machine-speed economics',
    body: 'Value moves at the speed of the agent — not the speed of a settlement window.',
  },
];

export function CasinoProofSlide() {
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
            Nº 09 · Proof Travels With The Action
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[28px] sm:text-[40px] lg:text-[54px] leading-[0.98] tracking-tight mt-3 uppercase"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            Validation closer to{' '}
            <span className="text-orange-400">the actor.</span>
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
            Legacy shared-ledger architectures were not designed for machine-speed, private institutional agent activity. They:
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-2 flex flex-wrap gap-x-6 gap-y-1"
          >
            {[
              'Require coordination across a shared system.',
              'Can expose transaction patterns.',
              'Add friction where agents need speed.',
            ].map((t) => (
              <span
                key={t}
                className="text-[#fefefe]/65 text-[12px] lg:text-[13px] leading-snug"
                style={{ fontFamily: "'Geist Mono', monospace" }}
              >
                <span className="text-orange-400">✕</span> {t}
              </span>
            ))}
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-3 text-[#fefefe]/75 text-sm lg:text-base leading-relaxed max-w-5xl"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            Unicity uses <span className="text-[#fefefe] font-semibold">cryptographic proofs</span> so agent actions can be verified <span className="text-[#fefefe] font-semibold">without depending on editable vendor logs</span> or routing every interaction through a shared record. Agents and digital objects carry proof with them. Verification happens at the point of action.
          </motion.p>
        </div>

        {/* 5 advantages — horizontal columns */}
        <div className="grid grid-cols-5 gap-5 lg:gap-6 shrink-0">
          {advantages.map((a, i) => (
            <motion.div
              key={a.num}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.08, duration: 0.5 }}
              className="relative pt-5 flex flex-col gap-2"
            >
              <span
                className="absolute top-0 left-0 h-[2px] w-10"
                style={{
                  background: '#FF6A1F',
                  boxShadow: '0 0 8px rgba(249,115,22,0.7)',
                }}
              />
              <p
                className="text-orange-400 text-[11px] tracking-[0.32em] uppercase font-semibold"
                style={{ fontFamily: "'Geist Mono', monospace" }}
              >
                {a.num}
              </p>
              <h3
                className="text-[#fefefe] text-[18px] sm:text-[20px] lg:text-[22px] leading-[1.1] tracking-[0.02em] uppercase mt-1"
                style={{ fontFamily: "'Anton', sans-serif" }}
              >
                {a.title}
              </h3>
              <div
                className="h-[1px] w-8 my-1 bg-orange-500/60"
              />
              <p
                className="text-[#fefefe]/75 text-[12px] lg:text-[13px] leading-[1.55]"
                style={{ fontFamily: "'Geist Mono', monospace" }}
              >
                {a.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Closing footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="text-[#fefefe]/65 text-[20px] sm:text-[24px] lg:text-[30px] leading-tight tracking-tight uppercase pt-5 shrink-0"
          style={{
            fontFamily: "'Anton', sans-serif",
            borderTop: '1px solid rgba(249,115,22,0.25)',
          }}
        >
          Proof local to the action.{' '}
          <span className="text-orange-400">Not delegated to a shared ledger.</span>
        </motion.p>
      </div>
    </div>
  );
}
