import { motion } from 'framer-motion';
import { tr } from '../i18n';

const mono = "'Geist Mono', monospace";
const display = "'Anton', sans-serif";

// Non-text stage metadata (index, highlight flag) stays outside the translation map.
const stageMeta = [
  { n: '01', highlight: false },
  { n: '02', highlight: false },
  { n: '03', highlight: false },
  { n: '04', highlight: true },
];

const T = tr({
  en: {
    eyebrow: 'The vision · Earned autonomy',
    headLead: 'THE OS LEARNS.',
    headAccent: 'AGENTS EARN AUTONOMY.',
    shippedLabel: '● Shipped',
    ladderIntro: 'Every human approval becomes learned authority:',
    ladder: ['once', 'session', 'workspace'],
    ladderFinal: 'always — a signed, expiring token',
    stages: [
      { name: 'HIRED', desc: 'Persistent identity from day one. Permissions scoped to the job.' },
      { name: 'SUPERVISED', desc: 'Every action observed; every decision attributed to the human who authorised it.' },
      { name: 'REVIEWED', desc: 'Performance over months, against its baseline. Did it hit the goal? What did it cost?' },
      { name: 'PROMOTED — OR CONTAINED', desc: 'Earn a track record, autonomy widens. Drift, and permissions narrow — automatically.' },
    ],
    closingBody: (
      <>
        This is how enterprises actually adopt autonomy: start with humans in every loop, let agents{' '}
        <span className="text-orange-400">earn their way out of supervision</span> — with the evidence to justify every step.
      </>
    ),
  },
  pt: {
    eyebrow: 'A visão · Autonomia conquistada',
    headLead: 'O OS APRENDE.',
    headAccent: 'AGENTES CONQUISTAM AUTONOMIA.',
    shippedLabel: '● Disponível',
    ladderIntro: 'Cada aprovação humana se torna autoridade aprendida:',
    ladder: ['uma vez', 'sessão', 'workspace'],
    ladderFinal: 'sempre — um token assinado e com validade',
    stages: [
      { name: 'CONTRATADO', desc: 'Identidade persistente desde o primeiro dia. Permissões delimitadas à função.' },
      { name: 'SUPERVISIONADO', desc: 'Toda ação observada; toda decisão atribuída ao humano que a autorizou.' },
      { name: 'AVALIADO', desc: 'Desempenho ao longo de meses, contra sua baseline. Atingiu a meta? Quanto custou?' },
      { name: 'PROMOVIDO — OU CONTIDO', desc: 'Construa um histórico e a autonomia se amplia. Desvie, e as permissões se estreitam — automaticamente.' },
    ],
    closingBody: (
      <>
        É assim que empresas de fato adotam autonomia: comece com humanos em cada loop, deixe os agentes{' '}
        <span className="text-orange-400">conquistarem sua saída da supervisão</span> — com a evidência para justificar cada passo.
      </>
    ),
  },
});

export function AosEarnAutonomySlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-8 lg:py-10 gap-5 lg:gap-6">

        {/* Header */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-orange-400 text-xs lg:text-sm tracking-[0.4em] uppercase font-bold"
            style={{ fontFamily: mono }}
          >
            {T.eyebrow}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[30px] sm:text-[46px] lg:text-[64px] xl:text-[74px] leading-[0.98] tracking-tight uppercase mt-2"
            style={{ fontFamily: display }}
          >
            {T.headLead} <span className="text-orange-400">{T.headAccent}</span>
          </motion.h1>
        </div>

        {/* Loop Zero — shipped authority ladder */}
        <motion.div
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25, duration: 0.45 }}
          className="shrink-0 rounded-xl px-5 lg:px-7 py-4 lg:py-5"
          style={{ border: '1px solid #f97316', background: '#160d05' }}
        >
          <div className="flex items-center gap-4 flex-wrap">
            <span className="text-xs lg:text-sm tracking-[0.14em] uppercase" style={{ fontFamily: mono, color: '#4ade80' }}>{T.shippedLabel}</span>
            <span className="text-[#e8e8e8] text-sm lg:text-lg" style={{ fontFamily: mono }}>{T.ladderIntro}</span>
            <div className="flex items-center gap-2 lg:gap-2.5 flex-wrap text-sm lg:text-base" style={{ fontFamily: mono }}>
              {T.ladder.map((l, li) => (
                <span key={li} className="contents">
                  <span className="rounded px-3 py-1 text-[#e8e8e8]" style={{ border: '1px solid #3a3a3a', background: '#111' }}>{l}</span>
                  <span className="text-[#5f5f5f]">→</span>
                </span>
              ))}
              <span className="rounded px-3 py-1 text-orange-400 font-bold" style={{ border: '1px solid #f97316', background: '#1d1005' }}>{T.ladderFinal}</span>
            </div>
          </div>
        </motion.div>

        {/* Lifecycle */}
        <div className="shrink-0 flex flex-col lg:flex-row items-stretch gap-3 lg:gap-2.5">
          {T.stages.map((s, i) => {
            const meta = stageMeta[i];
            return (
              <div key={i} className="contents">
                <motion.div
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 + i * 0.08, duration: 0.4 }}
                  className="flex-1 rounded-xl px-5 py-4 lg:py-5 flex flex-col"
                  style={{
                    border: meta.highlight ? '1.5px solid #f97316' : '1px solid #2e2e2e',
                    background: meta.highlight ? '#160d05' : '#111',
                    flexGrow: meta.highlight ? 1.2 : 1,
                  }}
                >
                  <p className="text-sm lg:text-base tracking-[0.14em]" style={{ fontFamily: mono, color: meta.highlight ? '#f97316' : '#5f5f5f' }}>{meta.n}</p>
                  <p className="text-[#fefefe] text-base lg:text-xl font-bold leading-tight mt-1.5" style={{ fontFamily: mono }}>{s.name}</p>
                  <p className="text-sm lg:text-base leading-snug mt-2" style={{ fontFamily: mono, color: meta.highlight ? '#c9a583' : '#a8a8a8' }}>{s.desc}</p>
                </motion.div>
                {i < T.stages.length - 1 && <span className="hidden lg:flex items-center text-[#5f5f5f] text-xl">→</span>}
              </div>
            );
          })}
        </div>

        {/* Closing line */}
        <motion.p
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.75, duration: 0.5 }}
          className="shrink-0 text-[#c9c9c9] text-sm lg:text-xl leading-snug max-w-6xl pt-3"
          style={{ fontFamily: mono, borderTop: '1px solid #262626' }}
        >
          {T.closingBody}
        </motion.p>

      </div>
    </div>
  );
}
