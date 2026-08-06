import { motion } from 'framer-motion';
import { tr } from '../../i18n';

const mono = "'Geist Mono', monospace";
const display = "'Anton', sans-serif";

// Image sources stay outside the translation map.
const quadrantImgs = [
  '/dashboards/security.png',
  '/dashboards/governance.png',
  '/dashboards/networking.png',
  '/dashboards/payments.png',
];

const T = tr({
  en: {
    eyebrow: 'The operator console',
    headLead: 'ONE PANE OF GLASS.',
    headAccent: 'EVERY REGULATED ACTION.',
    panelSuffix: 'panel',
    quadrants: [
      {
        label: 'SECURITY',
        role: 'Intercept',
        detail: 'Every regulated action stopped in-path before it happens.',
      },
      {
        label: 'GOVERNANCE',
        role: 'Policies · Approvals · Sealed audit',
        detail: 'Who can do what, human sign-off, and a tamper-evident record.',
      },
      {
        label: 'NETWORKING',
        role: 'Cross-border · Egress control',
        detail: 'Data residency enforced; nothing leaves the region unbidden.',
      },
      {
        label: 'COMPLIANCE',
        role: 'Proof & reporting',
        detail: 'One definitive answer per agent action, ready for a regulator.',
      },
    ],
    caption: (
      <>
        <span className="text-orange-400 font-bold">Live</span> — one definitive record across every agent action, ready for a regulator.
      </>
    ),
  },
  pt: {
    eyebrow: 'O console do operador',
    headLead: 'UM ÚNICO PAINEL.',
    headAccent: 'TODA AÇÃO REGULADA.',
    panelSuffix: 'painel',
    quadrants: [
      {
        label: 'SEGURANÇA',
        role: 'Interceptar',
        detail: 'Toda ação regulada interrompida no caminho antes de acontecer.',
      },
      {
        label: 'GOVERNANÇA',
        role: 'Políticas · Aprovações · Auditoria selada',
        detail: 'Quem pode fazer o quê, aprovação humana e um registro à prova de adulteração.',
      },
      {
        label: 'REDE',
        role: 'Transfronteiriça · Controle de saída',
        detail: 'Residência de dados imposta; nada sai da região sem autorização.',
      },
      {
        label: 'CONFORMIDADE',
        role: 'Provas e relatórios',
        detail: 'Uma resposta definitiva por ação do agente, pronta para um regulador.',
      },
    ],
    caption: (
      <>
        <span className="text-orange-400 font-bold">Ao vivo</span> — um registro definitivo em cada ação do agente, pronto para um regulador.
      </>
    ),
  },
});

export function ComplianceConsoleSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">

      <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-6 lg:py-8 gap-4 lg:gap-6">

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
            className="text-[#fefefe] text-[30px] sm:text-[46px] lg:text-[64px] xl:text-[74px] leading-[0.95] tracking-tight uppercase mt-2"
            style={{ fontFamily: display }}
          >
            {T.headLead} <span className="text-orange-400">{T.headAccent}</span>
          </motion.h1>
        </div>

        {/* 2×2 quadrants */}
        <div className="grid grid-cols-2 gap-4 lg:gap-5 shrink-0">
          {T.quadrants.map((q, i) => (
            <motion.div
              key={q.label}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
              className="rounded-2xl p-4 lg:p-5 flex gap-4 lg:gap-5"
              style={{
                background: 'rgba(255,255,255,0.015)',
                border: '1px solid rgba(249,115,22,0.35)',
              }}
            >
              {/* Text */}
              <div className="flex flex-col flex-1 min-w-0">
                <div className="flex items-baseline gap-3">
                  <span className="text-[#fefefe]/30 text-sm lg:text-base" style={{ fontFamily: mono }}>0{i + 1}</span>
                  <h3 className="text-[22px] lg:text-[30px] leading-none tracking-tight text-orange-400" style={{ fontFamily: display }}>
                    {q.label}
                  </h3>
                </div>
                <p className="text-[#fefefe]/55 text-[10px] lg:text-xs tracking-[0.16em] uppercase font-bold mt-2" style={{ fontFamily: mono }}>
                  {q.role}
                </p>
                <p className="text-[#fefefe]/80 text-xs lg:text-sm leading-snug mt-2" style={{ fontFamily: mono }}>
                  {q.detail}
                </p>
              </div>

              {/* Mock panel */}
              <div
                className="w-[38%] shrink-0 rounded-lg overflow-hidden self-stretch"
                style={{ border: '1px solid rgba(249,115,22,0.30)', background: '#0a0a0f', minHeight: '92px' }}
              >
                <img src={quadrantImgs[i]} alt={`${q.label} ${T.panelSuffix}`} className="w-full h-full object-cover object-top" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Caption */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="shrink-0 flex items-center gap-3 text-[#fefefe]/85 text-sm sm:text-base lg:text-xl leading-snug"
          style={{ fontFamily: mono }}
        >
          <span className="w-2 h-2 rounded-full bg-orange-400 shrink-0 animate-pulse" />
          <span>
            {T.caption}
          </span>
        </motion.p>

      </div>
    </div>
  );
}
