import { motion } from 'framer-motion';

const ANTON = "'Anton', sans-serif";
const MONO = "'Geist Mono', monospace";

const provenance = [
  { k: 'Observed', d: 'Resolved from the API key.', note: 'Forgeable — anything with the key.', accent: false },
  { k: 'Asserted', d: 'The caller said so.', note: 'Forgeable — anyone can name a valid one.', accent: false },
  { k: 'Attested', d: 'A runtime we trust signed it.', note: 'The trust anchor. Cannot be forged.', accent: true },
];

export function FirewallProofSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 55% 55% at 50% 45%, rgba(249,115,22,0.08) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-10 lg:py-12 gap-6 lg:gap-7">

        {/* Header */}
        <div className="shrink-0">
          <motion.h1
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#fefefe] text-[32px] sm:text-[48px] lg:text-[66px] xl:text-[76px] leading-[0.95] tracking-tight uppercase"
            style={{ fontFamily: ANTON }}
          >
            Proof, <span className="text-orange-400">not logs.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="mt-2.5 text-[#fefefe]/80 text-base lg:text-xl max-w-5xl leading-relaxed"
            style={{ fontFamily: MONO }}
          >
            Export any event and prove it’s untampered — <span className="text-orange-400">without trusting us.</span>
          </motion.p>
        </div>

        {/* Provenance ladder */}
        <div className="shrink-0">
          <p className="text-[#fefefe]/45 text-[11px] lg:text-sm tracking-[0.22em] uppercase font-bold mb-3" style={{ fontFamily: MONO }}>
            Who is the agent, really?
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-4">
            {provenance.map((p, i) => (
              <motion.div
                key={p.k}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 + i * 0.1, duration: 0.5 }}
                className="rounded-xl p-4 lg:p-5"
                style={
                  p.accent
                    ? { border: '2px solid #f97316', background: 'rgba(249,115,22,0.07)', boxShadow: '0 0 24px rgba(249,115,22,0.14)' }
                    : { border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.02)' }
                }
              >
                <p className={`text-2xl lg:text-3xl leading-none uppercase ${p.accent ? 'text-orange-400' : 'text-[#fefefe]/85'}`} style={{ fontFamily: ANTON }}>{p.k}</p>
                <p className="text-[#fefefe]/85 text-sm lg:text-base mt-2 leading-snug" style={{ fontFamily: MONO }}>{p.d}</p>
                <p className={`text-xs lg:text-sm mt-1.5 leading-snug ${p.accent ? 'text-orange-400/90' : 'text-[#fefefe]/45'}`} style={{ fontFamily: MONO }}>{p.note}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Two supporting pillars */}
        <div className="shrink-0 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.10)' }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="flex gap-3"
          >
            <span className="text-orange-400 shrink-0 mt-0.5">→</span>
            <div>
              <p className="text-[#fefefe] text-base lg:text-lg font-bold leading-snug" style={{ fontFamily: MONO }}>Receipts, not logs</p>
              <p className="text-[#fefefe]/65 text-sm lg:text-base leading-snug mt-1" style={{ fontFamily: MONO }}>
                Every decision signed and hash-chained. An offline verifier confirms any exported event is untampered — the SOC & compliance story.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex gap-3"
          >
            <span className="text-orange-400 shrink-0 mt-0.5">→</span>
            <div>
              <p className="text-[#fefefe] text-base lg:text-lg font-bold leading-snug" style={{ fontFamily: MONO }}>Commit attestation</p>
              <p className="text-[#fefefe]/65 text-sm lg:text-base leading-snug mt-1" style={{ fontFamily: MONO }}>
                Prove a commit passed through a governed agent — a small, verifiable, time-anchored claim. The Unicity / KSI proof heritage, exactly where it fits.
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
