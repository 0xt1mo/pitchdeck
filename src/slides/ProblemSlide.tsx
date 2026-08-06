import { motion } from 'framer-motion';
import { tr } from '../i18n';

const ANTON = "'Anton', sans-serif";
const MONO = "'Geist Mono', monospace";

const T = tr({
  en: {
    eyebrow: 'The fourth rebuild of compute',
    headLead: 'Autonomy breaks',
    headAccent: 'trust.',
    introPre: 'Every era of compute kept a ',
    introBold: 'human in the loop',
    introPost: ' to keep it safe — to log in, approve the action, and stand accountable. Autonomy removes the human. Safety has to be built into the machine.',
    payoffLead: 'Autonomous AI is only as safe as it is verifiable —',
    payoffAccent: 'so we make it verifiable by construction.',
    pillars: [
      { q: 'Who acted?', a: 'Cryptographic identity — not a shared login.' },
      { q: 'What did it do?', a: 'Every action verifiable — not asserted.' },
      { q: 'Was it allowed?', a: 'Boundaries enforced below the agent — not prompted.' },
      { q: 'Can you prove it?', a: 'An immutable, attestable record of every step.' },
    ],
  },
  pt: {
    eyebrow: 'A quarta reconstrução da computação',
    headLead: 'A autonomia quebra',
    headAccent: 'a confiança.',
    introPre: 'Cada era da computação manteve um ',
    introBold: 'humano no circuito',
    introPost: ' para mantê-la segura — para fazer login, aprovar a ação e responder por ela. A autonomia remove o humano. A segurança precisa ser construída dentro da máquina.',
    payoffLead: 'A IA autônoma é apenas tão segura quanto é verificável —',
    payoffAccent: 'por isso a tornamos verificável por construção.',
    pillars: [
      { q: 'Quem agiu?', a: 'Identidade criptográfica — não um login compartilhado.' },
      { q: 'O que ele fez?', a: 'Toda ação é verificável — não apenas afirmada.' },
      { q: 'Era permitido?', a: 'Limites impostos abaixo do agente — não via prompt.' },
      { q: 'Você consegue provar?', a: 'Um registro imutável e atestável de cada passo.' },
    ],
  },
});

export function ProblemSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">

      <div className="relative z-10 h-full flex flex-col px-8 sm:px-12 lg:px-16 py-10 lg:py-12 justify-center gap-6 lg:gap-8">

        {/* Header */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-orange-400 text-xs sm:text-sm lg:text-base tracking-[0.32em] uppercase font-bold"
            style={{ fontFamily: MONO }}
          >
            {T.eyebrow}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mt-2 text-[42px] sm:text-[64px] lg:text-[88px] xl:text-[100px] leading-[0.92] tracking-tight uppercase"
            style={{ fontFamily: ANTON }}
          >
            <span className="text-[#fefefe]">{T.headLead}</span>{' '}
            <span className="text-orange-400">{T.headAccent}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-3 text-[#fefefe]/80 text-base lg:text-xl max-w-6xl leading-relaxed"
            style={{ fontFamily: MONO }}
          >
            {T.introPre}<span className="text-[#fefefe] font-bold">{T.introBold}</span>{T.introPost}
          </motion.p>
        </div>

        {/* Four verifiability questions */}
        <div className="shrink-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
          {T.pillars.map((p, i) => (
            <motion.div
              key={p.q}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.09, duration: 0.45 }}
              className="rounded-xl p-4 lg:p-5 flex flex-col"
              style={{ background: 'rgba(255,255,255,0.015)', border: '1px solid #2c2c2c', borderTop: '2px solid rgba(249,115,22,0.7)' }}
            >
              <p className="text-orange-400 text-xl lg:text-2xl leading-tight uppercase" style={{ fontFamily: ANTON }}>
                {p.q}
              </p>
              <p className="text-[#fefefe]/70 text-sm lg:text-base leading-snug mt-3" style={{ fontFamily: MONO }}>
                {p.a}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Payoff */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85, duration: 0.5 }}
          className="shrink-0 text-lg sm:text-2xl lg:text-[30px] leading-snug"
          style={{ fontFamily: ANTON }}
        >
          <span className="text-[#fefefe]/70">{T.payoffLead}</span>{' '}
          <span className="text-orange-400">{T.payoffAccent}</span>
        </motion.p>

      </div>
    </div>
  );
}
