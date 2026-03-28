import { motion } from 'framer-motion';
import splashVideoUrl from '/kling_20260226_VIDEO_Take_Image_1650_0.mp4';
import unicityLogoUrl from '/UnicityLogo.svg';

const rows = [
  {
    label: 'SECURITY',
    color: '#ef4444',
    competitors: ['Lakera', 'NeMo Guardrails', 'HiddenLayer', 'Protect AI'],
    note: null as string | null,
    empty: null as string | null,
    product: 'Semantic Intercept Fabric',
    desc: 'Transport-layer intercept **below the model**. Every message inspected before it reaches the model and before it leaves. The enforcement layer the model cannot override.',
  },
  {
    label: 'RUNTIME',
    color: '#eab308',
    competitors: [],
    note: null as string | null,
    empty: 'No equivalent',
    product: 'Astrid OS',
    desc: 'The **Linux for AI agents**. One universal runtime underneath every framework. WASM sandbox, Ed25519 auth, immutable audit — all kernel primitives. You cannot prompt-inject past a kernel boundary.',
  },
  {
    label: 'SETTLEMENT',
    color: '#6366f1',
    competitors: ['Galadriel', 'Phala', 'Fetch.ai', 'Autonolas', 'Kite.ai', 'Near.AI'],
    note: '→ all shared ledger',
    empty: null as string | null,
    product: 'Unicity L1',
    desc: '**No shared ledger**. Assets live off-chain; the chain only prevents double-spending. Unlimited throughput, 1-second finality, a microcent per transaction.',
  },
];

function RichText({ text }: { text: string }) {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return (
    <>
      {parts.map((part, i) =>
        i % 2 === 1 ? (
          <span key={i} className="font-bold text-[#fefefe]/90">{part}</span>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </>
  );
}

export function CompetitionSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-y-auto">
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
        <video className="w-full h-full object-cover opacity-40" autoPlay muted loop playsInline src={splashVideoUrl} />
        <div className="absolute inset-0 bg-[#060606]/20" />
      </div>

      <div className="relative z-10 flex flex-col px-6 sm:px-10 lg:px-16 py-6 sm:py-8">

        {/* Header */}
        <div className="shrink-0">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-orange-400 text-[10px] sm:text-xs tracking-[0.4em] uppercase"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            Competition
          </motion.p>
          <motion.h1 initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[28px] sm:text-[40px] lg:text-[52px] leading-[0.95] tracking-tight mt-1"
            style={{ fontFamily: "'Anton', sans-serif" }}>
            PRODUCTION AGENTS NEED{' '}
            <span className="text-orange-400">PRODUCTION INFRASTRUCTURE.</span>
          </motion.h1>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-[2px] w-32 sm:w-48 bg-gradient-to-r from-orange-500 to-transparent origin-left mt-2" />
        </div>

        {/* Column headers */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-8 grid mb-3"
          style={{ gridTemplateColumns: '1fr 40px 1fr' }}
        >
          <p className="text-[#fefefe]/60 text-xs tracking-[0.3em] uppercase"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            Point Solutions
          </p>
          <div />
          <p className="text-orange-400/80 text-xs tracking-[0.3em] uppercase"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            Unicity
          </p>
        </motion.div>

        {/* Rows */}
        <div className="flex flex-col gap-4">
          {rows.map((row, i) => (
            <motion.div
              key={row.label}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.12, duration: 0.5 }}
              className="grid items-stretch"
              style={{ gridTemplateColumns: '1fr 40px 1fr' }}
            >
              {/* Left — competitors */}
              <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] px-5 py-4 flex flex-col gap-2.5">
                <p className="text-xs tracking-[0.2em] uppercase font-bold"
                  style={{ fontFamily: "'Geist Mono', monospace", color: row.color }}>
                  {row.label}
                </p>
                <div className="flex flex-wrap items-center gap-1.5">
                  {row.competitors.map((name) => (
                    <span key={name}
                      className="text-xs px-2.5 py-1 rounded-md border text-[#fefefe]/60"
                      style={{
                        fontFamily: "'Geist Mono', monospace",
                        borderColor: 'rgba(255,255,255,0.12)',
                        background: 'rgba(255,255,255,0.03)',
                      }}>
                      {name}
                    </span>
                  ))}
                  {row.empty && (
                    <span className="text-[#fefefe]/30 text-xs italic"
                      style={{ fontFamily: "'Geist Mono', monospace" }}>
                      {row.empty}
                    </span>
                  )}
                </div>
                {row.note && (
                  <span className="text-[#fefefe]/25 text-[11px]"
                    style={{ fontFamily: "'Geist Mono', monospace" }}>
                    {row.note}
                  </span>
                )}
              </div>

              {/* Center — arrow */}
              <div className="flex items-center justify-center">
                <span className="text-[#fefefe]/20 text-lg">→</span>
              </div>

              {/* Right — Unicity product */}
              <div className="rounded-xl px-5 py-4"
                style={{
                  background: `${row.color}08`,
                  borderLeft: `3px solid ${row.color}`,
                }}>
                <p className="text-base sm:text-lg font-bold mb-1.5"
                  style={{ fontFamily: "'Geist Mono', monospace", color: row.color }}>
                  {row.product}
                </p>
                <p className="text-[#fefefe]/50 text-xs sm:text-[13px] leading-relaxed"
                  style={{ fontFamily: "'Geist Mono', monospace" }}>
                  <RichText text={row.desc} />
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom paragraphs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-6 flex flex-col gap-3"
        >
          <p className="text-[#fefefe]/70 text-xs sm:text-sm leading-relaxed"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            <span className="text-indigo-400 font-bold text-sm sm:text-base">Settlement</span> — The closest competitors — Near.AI (sharded L1) and Kite.ai (EVM + state channels) — remain shackled to shared ledger architectures. Sharding partitions the bottleneck; state channels defer it. Neither eliminates it. Every protocol in this space was built for human finance. Machine finance needs a <span className="text-[#fefefe] font-bold">fundamentally different primitive</span>.
          </p>
          <p className="text-[#fefefe]/70 text-xs sm:text-sm leading-relaxed"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            <span className="text-red-400 font-bold text-sm sm:text-base">Security</span> — Check Point's $300M acquisition of Lakera in 2025 validated enterprise demand for agentic security. But every solution in this space is a bolt-on: an API wrapper filtering at the application layer. Unicity can <span className="text-[#fefefe] font-bold">integrate security directly into the runtime kernel</span>. Not a guardrail — an enforcement layer the model cannot override.
          </p>
        </motion.div>

      </div>

      {/* Logo — fixed bottom right */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}
        className="fixed bottom-6 right-6 sm:right-10 lg:right-16 z-20">
        <img src={unicityLogoUrl} alt="Unicity" className="h-5 opacity-60" />
      </motion.div>
    </div>
  );
}
