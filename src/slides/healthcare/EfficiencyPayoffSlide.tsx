import { motion } from 'framer-motion';
import { tr } from '../../i18n';

const mono = "'Geist Mono', monospace";
const display = "'Anton', sans-serif";

// Figures and highlight flags stay outside the translation map.
const stats: { value: string; highlight?: boolean }[] = [
  { value: '+30.7%' },
  { value: '−21.2%' },
  { value: '−27%' },
  { value: '−41%', highlight: true },
];

const T = tr({
  en: {
    eyebrow: "The payoff · once it's contained",
    headLead: 'NOW YOU CAN',
    headAccent: 'ACTUALLY DEPLOY IT.',
    subhead: (
      <>
        Containment is what <span className="text-orange-400">unlocks</span> the upside. Once the agent is safe to run,
        the same platform delivers the documentation-burden and clinician-retention wins.
      </>
    ),
    statLabels: [
      'Documentation-related wellbeing after ambient documentation',
      'Burnout prevalence after 84 days',
      'Time spent on notes per appointment',
      'Physician clerical time in live autonomous-documentation deployments',
    ],
    statSources: ['Emory Healthcare', 'Mass General Brigham', 'Intermountain', 'Industry deployments'],
    cfo: (
      <>
        Replacing a single physician costs <span className="text-orange-400">~$500K–$1M</span>.
        Cutting documentation burden is a retention strategy with a hard financial case.
      </>
    ),
    human: (
      <>
        The clinician stays the final arbiter — the platform <span className="text-orange-400">enforces</span> that,
        and every AI action is source-linked and verifiable.
      </>
    ),
  },
  pt: {
    eyebrow: 'O retorno · uma vez contido',
    headLead: 'AGORA VOCÊ PODE',
    headAccent: 'REALMENTE IMPLANTÁ-LO.',
    subhead: (
      <>
        A contenção é o que <span className="text-orange-400">desbloqueia</span> o ganho. Uma vez que o agente é seguro para rodar,
        a mesma plataforma entrega os ganhos de carga de documentação e retenção de clínicos.
      </>
    ),
    statLabels: [
      'Bem-estar relacionado à documentação após documentação ambiente',
      'Prevalência de burnout após 84 dias',
      'Tempo gasto em anotações por consulta',
      'Tempo administrativo do médico em implantações ao vivo de documentação autônoma',
    ],
    statSources: ['Emory Healthcare', 'Mass General Brigham', 'Intermountain', 'Implantações do setor'],
    cfo: (
      <>
        Substituir um único médico custa <span className="text-orange-400">~$500K–$1M</span>.
        Reduzir a carga de documentação é uma estratégia de retenção com um caso financeiro sólido.
      </>
    ),
    human: (
      <>
        O clínico permanece o árbitro final — a plataforma <span className="text-orange-400">impõe</span> isso,
        e toda ação de IA é vinculada à fonte e verificável.
      </>
    ),
  },
});

export function EfficiencyPayoffSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">

      <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-8 lg:py-12 gap-5 lg:gap-7">

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
            className="text-[#fefefe] text-[34px] sm:text-[52px] lg:text-[74px] xl:text-[84px] leading-[0.95] tracking-tight uppercase mt-2"
            style={{ fontFamily: display }}
          >
            {T.headLead} <span className="text-orange-400">{T.headAccent}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="text-[#fefefe]/85 text-sm sm:text-base lg:text-xl leading-snug mt-4 max-w-5xl"
            style={{ fontFamily: mono }}
          >
            {T.subhead}
          </motion.p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 shrink-0">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
              className="rounded-2xl px-5 lg:px-6 py-5 lg:py-6 flex flex-col"
              style={{
                background: s.highlight ? 'rgba(255,106,0,0.06)' : 'rgba(255,255,255,0.015)',
                border: s.highlight ? '1px solid rgba(255,106,0,0.55)' : '1px solid #2c2c2c',
              }}
            >
              <p
                className={`text-[44px] lg:text-[60px] leading-none ${s.highlight ? 'text-orange-400' : 'text-[#fefefe]'}`}
                style={{ fontFamily: display }}
              >
                {s.value}
              </p>
              <p className="text-[#fefefe]/75 text-xs lg:text-sm leading-snug mt-3 flex-1" style={{ fontFamily: mono }}>
                {T.statLabels[i]}
              </p>
              <p className="text-[#fefefe]/40 text-[10px] lg:text-xs tracking-[0.14em] uppercase mt-3 pt-3" style={{ fontFamily: mono, borderTop: '1px solid #1e1e1e' }}>
                {T.statSources[i]}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CFO case + human-in-loop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85, duration: 0.6 }}
          className="shrink-0 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 pt-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.10)' }}
        >
          <p className="text-[#fefefe]/85 text-sm sm:text-base lg:text-lg leading-snug" style={{ fontFamily: mono }}>
            {T.cfo}
          </p>
          <p className="text-[#fefefe]/70 text-sm sm:text-base lg:text-lg leading-snug lg:pl-8" style={{ fontFamily: mono, borderLeft: '1px solid rgba(255,255,255,0.10)' }}>
            {T.human}
          </p>
        </motion.div>

      </div>
    </div>
  );
}
