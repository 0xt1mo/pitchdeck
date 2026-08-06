import { motion } from 'framer-motion';
import { tr } from '../../i18n';

const mono = "'Geist Mono', monospace";
const display = "'Anton', sans-serif";

const T = tr({
  en: {
    eyebrow: 'Why now',
    headLead: 'THE MAGIC AGENT',
    headAccent: 'HAS ARRIVED.',
    capabilities: ['BOOKING', 'MESSAGING', 'TRIAGE', 'FOLLOW-UP', 'AVAILABLE 24/7'],
    body: "A swarm of vendors is promising an agent that just handles the work — booking, messaging, triage, follow-up, around the clock. It's a genuinely compelling pitch.",
    tensionLead: 'BUT THIS WORK TOUCHES',
    tensionAccent: 'DATA, RECORDS, AND PATIENTS.',
  },
  pt: {
    eyebrow: 'Por que agora',
    headLead: 'O AGENTE MÁGICO',
    headAccent: 'CHEGOU.',
    capabilities: ['AGENDAMENTO', 'MENSAGENS', 'TRIAGEM', 'ACOMPANHAMENTO', 'DISPONÍVEL 24/7'],
    body: 'Um enxame de fornecedores promete um agente que simplesmente cuida do trabalho — agendamento, mensagens, triagem, acompanhamento, o tempo todo. É uma proposta genuinamente convincente.',
    tensionLead: 'MAS ESSE TRABALHO TOCA',
    tensionAccent: 'DADOS, PRONTUÁRIOS E PACIENTES.',
  },
});

export function WhyNowMagicAgentSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">

      {/* Warm glow, top-center — the appeal */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(60% 50% at 50% -5%, rgba(249,115,22,0.12), transparent 70%)' }}
      />

      <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-12 lg:px-20 py-10 lg:py-14 gap-6 lg:gap-9">

        {/* Header */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-orange-400 text-[10px] sm:text-xs lg:text-sm tracking-[0.4em] uppercase font-bold"
            style={{ fontFamily: mono }}
          >
            {T.eyebrow}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[40px] sm:text-[64px] lg:text-[92px] xl:text-[108px] leading-[0.95] tracking-tight uppercase mt-2"
            style={{ fontFamily: display }}
          >
            {T.headLead} <span className="text-orange-400">{T.headAccent}</span>
          </motion.h1>
        </div>

        {/* Capability chips */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="shrink-0 flex flex-wrap gap-3 lg:gap-4"
        >
          {T.capabilities.map((c, i) => (
            <motion.span
              key={c}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 + i * 0.08, duration: 0.4 }}
              className="rounded-full border border-orange-500/50 bg-orange-500/[0.06] px-5 py-2.5 text-orange-300 text-sm lg:text-base tracking-[0.14em] uppercase"
              style={{ fontFamily: mono }}
            >
              {c}
            </motion.span>
          ))}
        </motion.div>

        {/* Body */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="shrink-0 text-[#fefefe]/80 text-lg sm:text-xl lg:text-2xl leading-relaxed max-w-5xl"
          style={{ fontFamily: mono }}
        >
          {T.body}
        </motion.p>

        {/* Tension line */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.85, duration: 0.6 }}
          className="shrink-0 flex items-start gap-4 pl-5 lg:pl-6 max-w-5xl"
          style={{ borderLeft: '3px solid rgba(249,115,22,0.85)' }}
        >
          <p
            className="text-[#fefefe] text-xl sm:text-2xl lg:text-3xl leading-snug"
            style={{ fontFamily: display }}
          >
            {T.tensionLead}{' '}
            <span className="text-orange-400">{T.tensionAccent}</span>
          </p>
        </motion.div>

      </div>
    </div>
  );
}
