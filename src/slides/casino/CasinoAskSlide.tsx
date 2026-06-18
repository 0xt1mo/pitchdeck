import { motion } from 'framer-motion';

const movements = [
  {
    num: '01',
    week: 'Semana 1–3',
    title: 'Instalar.',
    text: (
      <>
        O Unicity AOS é implantado <strong className="text-[#fefefe] font-semibold">na sua plataforma</strong>, junto à sua carteira e motor de jogo existentes. Sem substituição, sem migração. Seus sistemas atuais continuam funcionando.
      </>
    ),
    production: false,
  },
  {
    num: '02',
    week: 'Semana 4–6',
    title: 'Integrar.',
    text: (
      <>
        Handshake em sandbox com agente de referência. Valide <strong className="text-[#fefefe] font-semibold">sessões assinadas, liquidação por aposta, trilha de auditoria</strong>. Revisões de conformidade e segurança ocorrem em paralelo.
      </>
    ),
    production: false,
  },
  {
    num: '03',
    week: 'Semana 7',
    title: 'Produção.',
    text: (
      <>
        Tráfego de agentes ao vivo. A primeira sessão assinada é liquidada. Auditoria limpa.{' '}
        <span className="text-orange-400 font-semibold">Você começa a integrar agentes em escala.</span>
      </>
    ),
    production: true,
  },
];

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
            Nº 12 · O Pedido
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[32px] sm:text-[44px] lg:text-[60px] leading-[0.98] tracking-tight mt-3 uppercase"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            Quarenta e cinco dias para produção.{' '}
            <span className="text-orange-400">Depois, comece a integrar agentes.</span>
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
            Uma integração. Um sprint. Um operador regulado no rail ao vivo. Quarenta e cinco dias do kickoff até a implantação em produção do Unicity AOS dentro da sua stack — então você começa a receber agentes.
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
                {m.title}
              </h3>
              <p
                className="text-[#fefefe]/85 text-base sm:text-lg lg:text-xl leading-[1.55]"
                style={{ fontFamily: "'Geist Mono', monospace" }}
              >
                {m.text}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
