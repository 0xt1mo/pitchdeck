import { motion } from 'framer-motion';
import { tr } from '../i18n';

const ANTON = "'Anton', sans-serif";
const MONO = "'Geist Mono', monospace";

// Non-text structure: accent flag only. Display text lives in T.provenance.
const provenance = [
  { accent: false },
  { accent: false },
  { accent: true },
];

const T = tr({
  en: {
    headLead: 'Proof,',
    headAccent: 'not logs.',
    sub: (
      <>
        Export any event and prove it’s untampered — <span className="text-orange-400">without trusting us.</span>
      </>
    ),
    ladderLabel: 'Who is the agent, really?',
    provenance: [
      { k: 'Observed', d: 'Resolved from the API key.', note: 'Forgeable — anything with the key.' },
      { k: 'Asserted', d: 'The caller said so.', note: 'Forgeable — anyone can name a valid one.' },
      { k: 'Attested', d: 'A runtime we trust signed it.', note: 'The trust anchor. Cannot be forged.' },
    ],
    pillar1Title: 'Receipts, not logs',
    pillar1Body: 'Every decision signed and hash-chained. An offline verifier confirms any exported event is untampered — the SOC & compliance story.',
    pillar2Title: 'Commit attestation',
    pillar2Body: 'Prove a commit passed through a governed agent — a small, verifiable, time-anchored claim. The Unicity / KSI proof heritage, exactly where it fits.',
  },
  pt: {
    headLead: 'Prova,',
    headAccent: 'não logs.',
    sub: (
      <>
        Exporte qualquer evento e prove que não foi adulterado — <span className="text-orange-400">sem confiar em nós.</span>
      </>
    ),
    ladderLabel: 'Quem é o agente, na verdade?',
    provenance: [
      { k: 'Observado', d: 'Resolvido a partir da API key.', note: 'Falsificável — qualquer coisa com a chave.' },
      { k: 'Afirmado', d: 'O chamador disse que é.', note: 'Falsificável — qualquer um pode citar uma válida.' },
      { k: 'Atestado', d: 'Um runtime em que confiamos assinou.', note: 'A âncora de confiança. Não pode ser falsificada.' },
    ],
    pillar1Title: 'Comprovantes, não logs',
    pillar1Body: 'Cada decisão assinada e encadeada por hash. Um verificador offline confirma que qualquer evento exportado não foi adulterado — a história de SOC & compliance.',
    pillar2Title: 'Atestação de commit',
    pillar2Body: 'Prove que um commit passou por um agente governado — uma afirmação pequena, verificável e ancorada no tempo. A herança de provas Unicity / KSI, exatamente onde ela se encaixa.',
  },
});

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
            {T.headLead} <span className="text-orange-400">{T.headAccent}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="mt-2.5 text-[#fefefe]/80 text-base lg:text-xl max-w-5xl leading-relaxed"
            style={{ fontFamily: MONO }}
          >
            {T.sub}
          </motion.p>
        </div>

        {/* Provenance ladder */}
        <div className="shrink-0">
          <p className="text-[#fefefe]/45 text-[11px] lg:text-sm tracking-[0.22em] uppercase font-bold mb-3" style={{ fontFamily: MONO }}>
            {T.ladderLabel}
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-4">
            {provenance.map((p, i) => (
              <motion.div
                key={i}
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
                <p className={`text-2xl lg:text-3xl leading-none uppercase ${p.accent ? 'text-orange-400' : 'text-[#fefefe]/85'}`} style={{ fontFamily: ANTON }}>{T.provenance[i].k}</p>
                <p className="text-[#fefefe]/85 text-sm lg:text-base mt-2 leading-snug" style={{ fontFamily: MONO }}>{T.provenance[i].d}</p>
                <p className={`text-xs lg:text-sm mt-1.5 leading-snug ${p.accent ? 'text-orange-400/90' : 'text-[#fefefe]/45'}`} style={{ fontFamily: MONO }}>{T.provenance[i].note}</p>
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
              <p className="text-[#fefefe] text-base lg:text-lg font-bold leading-snug" style={{ fontFamily: MONO }}>{T.pillar1Title}</p>
              <p className="text-[#fefefe]/65 text-sm lg:text-base leading-snug mt-1" style={{ fontFamily: MONO }}>
                {T.pillar1Body}
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
              <p className="text-[#fefefe] text-base lg:text-lg font-bold leading-snug" style={{ fontFamily: MONO }}>{T.pillar2Title}</p>
              <p className="text-[#fefefe]/65 text-sm lg:text-base leading-snug mt-1" style={{ fontFamily: MONO }}>
                {T.pillar2Body}
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  );
}
