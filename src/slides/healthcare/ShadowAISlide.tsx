import { motion } from 'framer-motion';
import { tr } from '../../i18n';

const T = tr({
  en: {
    eyebrow: 'Use Case · Visibility',
    headLead: 'AGENT SPRAWL &',
    headAccent: 'SHADOW AI.',
    intro: (
      <>
        <span className="text-[#fefefe] font-bold">You cannot secure what you cannot see.</span>{' '}
        Shadow AI is present in <span className="text-orange-400">~40% of hospitals</span>, and <span className="text-orange-400">~57% of professionals</span> have used unauthorized tools — PHI pasted into a consumer LLM is an irreversible exposure legacy DLP and SIEM miss. Unicity is the mandatory registration and monitoring layer for all machine identity.
      </>
    ),
    bullets: [
      {
        label: 'CRYPTOGRAPHIC IDENTITY',
        body: 'Every agent is assigned a revocable identity bound to a human principal. Eliminates static API keys.',
      },
      {
        label: 'GLOBAL INVENTORY',
        body: 'Map every active agent and its authorized scopes across the organization.',
      },
      {
        label: 'DRIFT CONTAINMENT',
        body: 'Instantly quarantine rogue agents that deviate from baseline execution patterns.',
      },
    ],
  },
  pt: {
    eyebrow: 'Caso de Uso · Visibilidade',
    headLead: 'PROLIFERAÇÃO DE AGENTES &',
    headAccent: 'SHADOW IA.',
    intro: (
      <>
        <span className="text-[#fefefe] font-bold">Você não pode proteger o que não consegue ver.</span>{' '}
        Shadow IA está presente em <span className="text-orange-400">~40% dos hospitais</span>, e <span className="text-orange-400">~57% dos profissionais</span> já usaram ferramentas não autorizadas — PHI colada em um LLM de consumo é uma exposição irreversível que DLP e SIEM legados não detectam. A Unicity é a camada obrigatória de registro e monitoramento para toda identidade de máquina.
      </>
    ),
    bullets: [
      {
        label: 'IDENTIDADE CRIPTOGRÁFICA',
        body: 'Cada agente recebe uma identidade revogável vinculada a um principal humano. Elimina chaves de API estáticas.',
      },
      {
        label: 'INVENTÁRIO GLOBAL',
        body: 'Mapeie cada agente ativo e seus escopos autorizados em toda a organização.',
      },
      {
        label: 'CONTENÇÃO DE DESVIOS',
        body: 'Coloque em quarentena instantaneamente agentes descontrolados que desviam dos padrões de execução de referência.',
      },
    ],
  },
});

export function ShadowAISlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col px-8 sm:px-12 lg:px-20 py-8 sm:py-10 lg:py-12 justify-center gap-6 lg:gap-7">

        {/* Header */}
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

        {/* 2-column body */}
        <div className="grid grid-cols-[1fr_1fr] gap-8 lg:gap-12 shrink-0 items-start">

          {/* Left — intro + bullets */}
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

          {/* Right — dashboard */}
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
              src="/dashboards/governance.png"
              alt="Agent inventory dashboard"
              className="w-full h-full object-cover object-top"
            />
          </motion.div>

        </div>
      </div>
    </div>
  );
}
