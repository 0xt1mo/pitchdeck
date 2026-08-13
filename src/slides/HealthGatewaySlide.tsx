import { motion } from 'framer-motion';
import { tr } from '../i18n';

const ANTON = "'Anton', sans-serif";
const MONO = "'Geist Mono', monospace";

// Regulatory coverage — brand/standard names, identical across languages.
const CHIPS = ['HIPAA', 'HITRUST', 'SOC 2', 'BAA', '21 CFR Part 11', 'GDPR'];

const T = tr({
  en: {
    eyebrow: 'Go-to-market · Healthcare',
    headLead: 'HEALTHCARE:',
    headAccent: 'the AI compliance gateway.',
    subtitle:
      'Clinical AI can’t touch patient data without HIPAA liability. Unicity AOS sits as one gate between every agent and the PHI estate — redacting, enforcing consent, and proving every action.',
    leftTitle: 'AI agents & models',
    leftDesc: 'Clinical copilots, ambient scribes, triage & prior-auth agents. Any model.',
    gateTitle: 'AOS Compliance Gateway',
    gateTag: 'One gate',
    funcs: [
      'PHI redaction before any prompt leaves',
      'Consent & minimum-necessary enforced',
      'De-identification on egress',
      'Immutable cryptographic audit',
    ],
    rightTitle: 'Patient-data estate',
    rightDesc: 'EHR · imaging · labs · claims.',
    proof: 'Every AI touch on patient data passes one gate — HIPAA-safe by construction.',
  },
  pt: {
    eyebrow: 'Go-to-market · Saúde',
    headLead: 'SAÚDE:',
    headAccent: 'o gateway de conformidade para IA.',
    subtitle:
      'A IA clínica não pode tocar dados de pacientes sem risco de HIPAA. O Unicity AOS entra como um único portão entre cada agente e o estado de PHI — redigindo, impondo consentimento e comprovando cada ação.',
    leftTitle: 'Agentes & modelos de IA',
    leftDesc: 'Copilotos clínicos, escribas, triagem e agentes de pré-autorização. Qualquer modelo.',
    gateTitle: 'AOS Compliance Gateway',
    gateTag: 'Um portão',
    funcs: [
      'Redação de PHI antes de qualquer prompt sair',
      'Consentimento & mínimo-necessário impostos',
      'Des-identificação na saída',
      'Auditoria criptográfica imutável',
    ],
    rightTitle: 'Estado de dados do paciente',
    rightDesc: 'EHR · imagem · laboratórios · sinistros.',
    proof: 'Todo toque de IA nos dados do paciente passa por um portão — HIPAA por construção.',
  },
});

function SideCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="flex-1 rounded-xl border border-white/10 bg-white/[0.02] p-5 lg:p-6 flex flex-col justify-center">
      <p className="text-[#fefefe] text-lg lg:text-2xl uppercase leading-none" style={{ fontFamily: ANTON }}>{title}</p>
      <p className="text-[#fefefe]/55 text-xs lg:text-sm leading-snug mt-3" style={{ fontFamily: MONO }}>{desc}</p>
    </div>
  );
}

function Arrow() {
  return (
    <div className="shrink-0 flex items-center text-orange-400/70 text-2xl lg:text-4xl px-1 lg:px-2" style={{ fontFamily: ANTON }}>→</div>
  );
}

export function HealthGatewaySlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 55% 55% at 50% 48%, rgba(249,115,22,0.09) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-8 lg:py-10 gap-6 lg:gap-8">

        {/* Header */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-orange-400 text-xs lg:text-sm tracking-[0.22em] uppercase mb-3"
            style={{ fontFamily: MONO }}
          >
            {T.eyebrow}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06, duration: 0.6 }}
            className="text-[#fefefe] text-[28px] sm:text-[40px] lg:text-[54px] xl:text-[60px] leading-[0.98] tracking-tight uppercase max-w-6xl"
            style={{ fontFamily: ANTON }}
          >
            {T.headLead} <span className="text-orange-400">{T.headAccent}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="text-[#fefefe]/70 text-sm sm:text-base lg:text-lg leading-snug mt-3 max-w-5xl"
            style={{ fontFamily: MONO }}
          >
            {T.subtitle}
          </motion.p>
        </div>

        {/* Gateway flow: AI → gate → PHI estate */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="flex items-stretch"
        >
          <SideCard title={T.leftTitle} desc={T.leftDesc} />
          <Arrow />

          {/* The gate */}
          <div
            className="flex-[1.4] rounded-xl p-5 lg:p-6 flex flex-col"
            style={{ border: '1px solid rgba(249,115,22,0.45)', borderLeft: '4px solid #f97316', background: 'rgba(249,115,22,0.07)' }}
          >
            <div className="flex items-center gap-3 mb-3">
              <p className="text-orange-400 text-xl lg:text-3xl uppercase leading-none" style={{ fontFamily: ANTON }}>{T.gateTitle}</p>
              <span
                className="rounded-full border border-orange-500/50 text-orange-300 text-[10px] lg:text-[11px] tracking-[0.18em] uppercase px-2.5 py-1"
                style={{ fontFamily: MONO }}
              >
                {T.gateTag}
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
              {T.funcs.map((f) => (
                <p key={f} className="text-[#fefefe]/85 text-xs lg:text-sm leading-snug flex gap-2" style={{ fontFamily: MONO }}>
                  <span className="text-orange-400 shrink-0">✓</span>
                  <span>{f}</span>
                </p>
              ))}
            </div>
          </div>

          <Arrow />
          <SideCard title={T.rightTitle} desc={T.rightDesc} />
        </motion.div>

        {/* Compliance chips + proof line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="shrink-0 flex flex-col gap-4 pt-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.10)' }}
        >
          <div className="flex flex-wrap items-center gap-2.5 lg:gap-3">
            {CHIPS.map((c) => (
              <span
                key={c}
                className="rounded-full border border-white/15 text-[#fefefe]/70 text-[11px] lg:text-xs tracking-[0.12em] uppercase px-3 py-1.5"
                style={{ fontFamily: MONO }}
              >
                {c}
              </span>
            ))}
          </div>
          <p className="text-[#fefefe] text-base sm:text-lg lg:text-2xl leading-snug" style={{ fontFamily: ANTON }}>
            {T.proof}
          </p>
        </motion.div>

      </div>
    </div>
  );
}
