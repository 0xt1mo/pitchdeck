import { motion } from 'framer-motion';
import { tr } from '../../i18n';

const T = tr({
  en: {
    eyebrow: 'Use Case · Cost Control',
    headLead: 'COST OPTIMIZATION:',
    headAccent: 'EVERY AGENT GETS A BUDGET.',
    intro: (
      <>
        On thin hospital margins, a poorly engineered agent stuck in a hallucination cycle can burn thousands in token costs.{' '}
        <span className="text-orange-400">We provide the kernel-level circuit breakers.</span>
      </>
    ),
    bullets: [
      {
        label: 'HARD RATE LIMITING',
        body: 'Enforce strict execution thresholds at the kernel level before cost is incurred.',
      },
      {
        label: 'TOKEN QUOTAS',
        body: 'Assign budget limits. The AOS Kernel blocks execution instantly when reached.',
      },
      {
        label: 'ROI ATTRIBUTION',
        body: 'Track exactly how much compute each autonomous workflow consumes.',
      },
    ],
  },
  pt: {
    eyebrow: 'Caso de Uso · Controle de Custos',
    headLead: 'OTIMIZAÇÃO DE CUSTOS:',
    headAccent: 'CADA AGENTE RECEBE UM ORÇAMENTO.',
    intro: (
      <>
        Com as margens apertadas dos hospitais, um agente mal projetado preso em um ciclo de alucinação pode queimar milhares em custos de tokens.{' '}
        <span className="text-orange-400">Fornecemos os disjuntores no nível do kernel.</span>
      </>
    ),
    bullets: [
      {
        label: 'LIMITAÇÃO RÍGIDA DE TAXA',
        body: 'Imponha limites estritos de execução no nível do kernel antes que o custo seja incorrido.',
      },
      {
        label: 'COTAS DE TOKENS',
        body: 'Atribua limites de orçamento. O AOS Kernel bloqueia a execução instantaneamente quando atingidos.',
      },
      {
        label: 'ATRIBUIÇÃO DE ROI',
        body: 'Acompanhe exatamente quanto processamento cada fluxo de trabalho autônomo consome.',
      },
    ],
  },
});

export function RunawayComputeSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col px-8 sm:px-12 lg:px-20 py-8 sm:py-10 lg:py-12 justify-center gap-6 lg:gap-7">

        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-orange-400 text-xs sm:text-sm lg:text-base tracking-[0.4em] uppercase font-bold"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            {T.eyebrow}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[36px] sm:text-[52px] lg:text-[72px] xl:text-[84px] leading-[0.95] tracking-tight uppercase mt-2"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            {T.headLead}{' '}
            <span className="text-orange-400">{T.headAccent}</span>
          </motion.h1>
        </div>

        <div className="grid grid-cols-[1fr_1fr] gap-8 lg:gap-12 shrink-0 items-start">

          <div className="flex flex-col gap-5 lg:gap-6">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-[#fefefe]/90 text-sm sm:text-base lg:text-lg leading-snug"
              style={{ fontFamily: "'Geist Mono', monospace" }}
            >
              {T.intro}
            </motion.p>

            <ul className="flex flex-col gap-3 lg:gap-4">
              {T.bullets.map((b, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + i * 0.08, duration: 0.4 }}
                  className="flex items-start gap-3 lg:gap-4"
                >
                  <span className="text-orange-400/70 text-base lg:text-lg shrink-0 mt-0.5 font-bold">→</span>
                  <div>
                    <p
                      className="text-orange-400 text-xs sm:text-sm lg:text-base tracking-[0.2em] uppercase font-bold"
                      style={{ fontFamily: "'Geist Mono', monospace" }}
                    >
                      {b.label}
                    </p>
                    <p
                      className="text-[#fefefe]/85 text-sm lg:text-base leading-snug mt-1"
                      style={{ fontFamily: "'Geist Mono', monospace" }}
                    >
                      {b.body}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="rounded-lg overflow-hidden"
            style={{
              border: '1px solid rgba(249,115,22,0.45)',
              background: '#0a0a0f',
              aspectRatio: '16 / 10',
            }}
          >
            <img
              src="/dashboards/payments.png"
              alt="Cost / budget dashboard"
              className="w-full h-full object-cover object-top"
            />
          </motion.div>

        </div>
      </div>
    </div>
  );
}
