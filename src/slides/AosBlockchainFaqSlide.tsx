import { motion } from 'framer-motion';

const mono = "'Geist Mono', monospace";
const display = "'Anton', sans-serif";

const qa = [
  { q: 'Who operates the network?', a: 'The Unicity proof network — you never run nodes or hold a wallet. It behaves like managed attestation infrastructure.' },
  { q: "What's the trust model?", a: 'Proofs are verifiable by anyone, cryptographically. No trusted third party ever holds your data or can rewrite your records.' },
  { q: 'What leaves your boundary?', a: 'Only opaque commitments — hashes. Never prompts, payloads, or the content of a decision.' },
  { q: 'What about latency?', a: 'Verification is local and off the critical path; anchoring happens asynchronously. Your agents are never blocked on a chain.' },
];

const notList = [
  'No cryptocurrency exposure — nothing to buy, hold, or price.',
  'Nothing readable on a public chain — commitments are opaque.',
  'Not a ledger that stores your data — the token travels with the record.',
];

export function AosBlockchainFaqSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-8 lg:py-11 gap-6 lg:gap-8">

        {/* Header */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-orange-400 text-xs sm:text-sm lg:text-base tracking-[0.4em] uppercase font-bold"
            style={{ fontFamily: mono }}
          >
            Appendix · FAQ
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[34px] sm:text-[52px] lg:text-[70px] xl:text-[80px] leading-[0.95] tracking-tight uppercase mt-2"
            style={{ fontFamily: display }}
          >
            "SO IS THIS A <span className="text-orange-400">BLOCKCHAIN?"</span>
          </motion.h1>
        </div>

        {/* Q&A grid */}
        <div className="shrink-0 grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6">
          {qa.map((item, i) => (
            <motion.div
              key={item.q}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 + i * 0.08, duration: 0.4 }}
              className="pl-4"
              style={{ borderLeft: '2px solid #f97316' }}
            >
              <p className="text-[#fefefe] text-base lg:text-xl font-bold leading-tight" style={{ fontFamily: mono }}>{item.q}</p>
              <p className="text-[#fefefe]/70 text-sm lg:text-lg leading-snug mt-1.5" style={{ fontFamily: mono }}>{item.a}</p>
            </motion.div>
          ))}
        </div>

        {/* What it is NOT */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.45 }}
          className="shrink-0 rounded-xl px-6 py-4 lg:py-5"
          style={{ border: '1px solid rgba(249,115,22,0.30)', background: 'rgba(249,115,22,0.04)' }}
        >
          <p className="text-orange-400 text-sm lg:text-lg tracking-[0.14em] uppercase font-bold mb-2" style={{ fontFamily: mono }}>What it is not</p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-4">
            {notList.map((n) => (
              <p key={n} className="flex gap-2 text-[#fefefe]/80 text-sm lg:text-base leading-snug" style={{ fontFamily: mono }}>
                <span className="text-orange-400 shrink-0">✕</span>{n}
              </p>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
}
