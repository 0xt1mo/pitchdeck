import { motion } from 'framer-motion';
import { tr } from '../i18n';

const mono = "'Geist Mono', monospace";
const display = "'Anton', sans-serif";

const T = tr({
  en: {
    eyebrow: 'Editions',
    headLead: 'ONE OS.',
    headAccent: 'TWO EDITIONS.',
    communityLabel: 'Free · open',
    enterpriseLabel: 'Composed on top',
    community: ['Free, full OS on the open engine', 'Installers & distributions', 'Capsule registry', 'Rust capsule SDK'],
    enterprise: ['The same engine — no fork', 'Proprietary capsules: guardrail / SIF packs', 'Governance console & compliance packs', 'Deploys in your VPC or on-prem', 'Per-agent licensing · support & SLAs'],
    bodyLead: 'Enterprise runs the exact same open runtime as Community.',
    bodyAccent: 'The difference is what’s composed on top.',
    trust: 'The open engine is committed to neutral governance as adoption matures — enterprises can audit, and eventually help govern, the enforcement layer they run on.',
  },
  pt: {
    eyebrow: 'Edições',
    headLead: 'UM OS.',
    headAccent: 'DUAS EDIÇÕES.',
    communityLabel: 'Gratuito · aberto',
    enterpriseLabel: 'Composto por cima',
    community: ['OS completo e gratuito sobre o engine aberto', 'Instaladores e distribuições', 'Registro de capsules', 'SDK de capsules em Rust'],
    enterprise: ['O mesmo engine — sem fork', 'Capsules proprietárias: pacotes de guardrail / SIF', 'Console de governança e pacotes de compliance', 'Implanta na sua VPC ou on-prem', 'Licenciamento por agente · suporte e SLAs'],
    bodyLead: 'Enterprise roda exatamente o mesmo runtime aberto que a Community.',
    bodyAccent: 'A diferença é o que é composto por cima.',
    trust: 'O engine aberto tem compromisso com uma governança neutra à medida que a adoção amadurece — empresas podem auditar, e eventualmente ajudar a governar, a camada de enforcement sobre a qual operam.',
  },
});

export function AosEditionsSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-8 lg:py-11 gap-5 lg:gap-7">

        {/* Header */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-orange-400 text-xs sm:text-xs lg:text-lg tracking-[0.4em] uppercase font-bold"
            style={{ fontFamily: mono }}
          >
            {T.eyebrow}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[34px] sm:text-[52px] lg:text-[70px] xl:text-[82px] leading-[0.95] tracking-tight uppercase mt-2"
            style={{ fontFamily: display }}
          >
            {T.headLead} <span className="text-orange-400">{T.headAccent}</span>
          </motion.h1>
        </div>

        {/* Two editions */}
        <div className="shrink-0 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="rounded-2xl border border-[#fefefe]/14 bg-[#fefefe]/[0.02] p-6 lg:p-7"
          >
            <p className="text-[#fefefe] text-2xl lg:text-3xl leading-none uppercase" style={{ fontFamily: display }}>Unicity AOS Community</p>
            <p className="text-[#fefefe]/45 text-xs lg:text-lg tracking-[0.16em] uppercase mt-2" style={{ fontFamily: mono }}>{T.communityLabel}</p>
            <div className="flex flex-col gap-2 mt-4">
              {T.community.map((c, ci) => (
                <p key={ci} className="flex gap-2.5 text-[#fefefe]/80 text-sm lg:text-xl leading-snug" style={{ fontFamily: mono }}>
                  <span className="text-[#fefefe]/40 shrink-0">—</span>{c}
                </p>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="rounded-2xl border-2 border-orange-500 bg-orange-500/[0.06] p-6 lg:p-7"
            style={{ boxShadow: '0 0 28px rgba(249,115,22,0.14)' }}
          >
            <p className="text-[#fefefe] text-2xl lg:text-3xl leading-none uppercase" style={{ fontFamily: display }}>Unicity AOS Enterprise</p>
            <p className="text-orange-400 text-xs lg:text-lg tracking-[0.16em] uppercase mt-2" style={{ fontFamily: mono }}>{T.enterpriseLabel}</p>
            <div className="flex flex-col gap-2 mt-4">
              {T.enterprise.map((c, ci) => (
                <p key={ci} className="flex gap-2.5 text-[#fefefe]/90 text-sm lg:text-xl leading-snug" style={{ fontFamily: mono }}>
                  <span className="text-orange-400 shrink-0">+</span>{c}
                </p>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Body + trust line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="shrink-0 text-[#fefefe]/85 text-base sm:text-lg lg:text-2xl leading-snug pt-3"
          style={{ fontFamily: mono, borderTop: '1px solid rgba(255,255,255,0.10)' }}
        >
          {T.bodyLead} <span className="text-orange-400">{T.bodyAccent}</span>
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75, duration: 0.5 }}
          className="shrink-0 text-[#fefefe]/45 text-sm lg:text-lg leading-snug"
          style={{ fontFamily: mono }}
        >
          {T.trust}
        </motion.p>

      </div>
    </div>
  );
}
