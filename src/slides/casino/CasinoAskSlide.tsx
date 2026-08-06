import { motion } from 'framer-motion';
import { tr } from '../../i18n';

// Stable numbering and production flag stay identical across languages.
const movements = [
  { num: '01', production: false },
  { num: '02', production: false },
  { num: '03', production: true },
];

const T = tr({
  en: {
    eyebrow: 'Nº 12 · The Ask',
    h1Lead: 'Forty-five days to production.',
    h1Accent: 'Then start onboarding agents.',
    subhead:
      'One integration. One sprint. One regulated operator on the live rail. Forty-five days from kickoff to production deployment of Unicity AOS inside your stack — then you start receiving agents.',
    movements: [
      {
        week: 'Week 1–3',
        title: 'Install.',
        text: (
          <>
            Unicity AOS deploys <strong className="text-[#fefefe] font-semibold">into your platform</strong>, alongside your existing wallet and game engine. No replacement, no migration. Your existing systems keep running.
          </>
        ),
      },
      {
        week: 'Week 4–6',
        title: 'Integrate.',
        text: (
          <>
            Sandbox handshake with reference agent. Validate <strong className="text-[#fefefe] font-semibold">signed sessions, per-wager settlement, audit trail</strong>. Compliance and security review run in parallel.
          </>
        ),
      },
      {
        week: 'Week 7',
        title: 'Production.',
        text: (
          <>
            Live agent traffic. First signed session settles. Audit clean.{' '}
            <span className="text-orange-400 font-semibold">You start onboarding agents at scale.</span>
          </>
        ),
      },
    ],
  },
  pt: {
    eyebrow: 'Nº 12 · O Pedido',
    h1Lead: 'Quarenta e cinco dias para produção.',
    h1Accent: 'Depois, comece a integrar agentes.',
    subhead:
      'Uma integração. Um sprint. Um operador regulado no rail ao vivo. Quarenta e cinco dias do kickoff até a implantação em produção do Unicity AOS dentro da sua stack — então você começa a receber agentes.',
    movements: [
      {
        week: 'Semana 1–3',
        title: 'Instalar.',
        text: (
          <>
            O Unicity AOS é implantado <strong className="text-[#fefefe] font-semibold">na sua plataforma</strong>, junto à sua carteira e motor de jogo existentes. Sem substituição, sem migração. Seus sistemas atuais continuam funcionando.
          </>
        ),
      },
      {
        week: 'Semana 4–6',
        title: 'Integrar.',
        text: (
          <>
            Handshake em sandbox com agente de referência. Valide <strong className="text-[#fefefe] font-semibold">sessões assinadas, liquidação por aposta, trilha de auditoria</strong>. Revisões de conformidade e segurança ocorrem em paralelo.
          </>
        ),
      },
      {
        week: 'Semana 7',
        title: 'Produção.',
        text: (
          <>
            Tráfego de agentes ao vivo. A primeira sessão assinada é liquidada. Auditoria limpa.{' '}
            <span className="text-orange-400 font-semibold">Você começa a integrar agentes em escala.</span>
          </>
        ),
      },
    ],
  },
});

export function CasinoAskSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col px-12 lg:px-20 py-10 lg:py-14 justify-center gap-7">

        {/* Header */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-orange-400 text-xs sm:text-sm tracking-[0.32em] uppercase font-semibold"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            {T.eyebrow}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[32px] sm:text-[44px] lg:text-[60px] leading-[0.98] tracking-tight mt-3 uppercase"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            {T.h1Lead}{' '}
            <span className="text-orange-400">{T.h1Accent}</span>
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-[2px] w-24 lg:w-32 bg-orange-500 origin-left mt-5"
            style={{ boxShadow: '0 0 8px rgba(249,115,22,0.7)' }}
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-4 text-[#fefefe]/75 text-sm lg:text-base leading-relaxed max-w-5xl"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            {T.subhead}
          </motion.p>
        </div>

        {/* Three movements */}
        <div className="flex flex-col shrink-0">
          {movements.map((m, i) => (
            <motion.div
              key={m.num}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
              className="grid grid-cols-[320px_1fr] items-center gap-x-8 lg:gap-x-12 py-5 lg:py-6"
              style={{
                borderTop: '1px solid rgba(255,255,255,0.10)',
                ...(i === movements.length - 1
                  ? { borderBottom: '1px solid rgba(255,255,255,0.10)' }
                  : {}),
              }}
            >
              <h3
                className="text-[#fefefe] text-[36px] sm:text-[44px] lg:text-[52px] leading-none tracking-[0.04em] uppercase"
                style={{ fontFamily: "'Anton', sans-serif" }}
              >
                {T.movements[i].title}
              </h3>
              <p
                className="text-[#fefefe]/85 text-base sm:text-lg lg:text-xl leading-[1.55]"
                style={{ fontFamily: "'Geist Mono', monospace" }}
              >
                {T.movements[i].text}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
