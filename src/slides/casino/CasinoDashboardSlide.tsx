import { motion } from 'framer-motion';
import { tr } from '../../i18n';

// Image src and accent colour stay identical across languages; label/desc swap.
const pillars = [
  { id: 'security',   img: '/dashboards/security.png',   accent: '#ef4444' },
  { id: 'governance', img: '/dashboards/governance.png', accent: '#22c55e' },
  { id: 'networking', img: '/dashboards/networking.png', accent: '#a855f7' },
  { id: 'payments',   img: '/dashboards/payments.png',   accent: '#f59e0b' },
];

const T = tr({
  en: {
    eyebrow: 'The Enterprise Console',
    h1Lead: 'One pane of glass for',
    h1Accent: 'every agent, every policy, every payment.',
    subhead:
      'Identity, delegation, policy, settlement and audit — unified into a single operator surface. Not rip and replace. A control plane that sits under any agent deployment.',
    pillars: [
      { label: 'Security', desc: 'Semantic intercept fabric — every payload checked at runtime.' },
      { label: 'Governance', desc: 'Live policy library, approvals, and full audit ledger.' },
      { label: 'Networking', desc: 'Open lanes across A2A, MCP, x402 — counterparty-aware.' },
      { label: 'Payments', desc: 'Cash flow, rail balances and per-agent budgets in real time.' },
    ],
  },
  pt: {
    eyebrow: 'O Console Empresarial',
    h1Lead: 'Um único painel para',
    h1Accent: 'cada agente, cada política, cada pagamento.',
    subhead:
      'Identidade, delegação, política, liquidação e auditoria — unificadas em uma única superfície para o operador. Não é arrancar e substituir. Um plano de controle que fica abaixo de qualquer implantação de agentes.',
    pillars: [
      { label: 'Segurança', desc: 'Malha de interceptação semântica — cada payload verificado em tempo de execução.' },
      { label: 'Governança', desc: 'Biblioteca de políticas ao vivo, aprovações e registro de auditoria completo.' },
      { label: 'Redes', desc: 'Canais abertos em A2A, MCP, x402 — cientes da contraparte.' },
      { label: 'Pagamentos', desc: 'Fluxo de caixa, saldos de rails e orçamentos por agente em tempo real.' },
    ],
  },
});

export function CasinoDashboardSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col px-6 sm:px-8 lg:px-10 py-6 sm:py-8 lg:py-10 justify-center gap-4">

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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[28px] sm:text-[40px] lg:text-[52px] leading-[1.05] tracking-tight mt-3 uppercase"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            {T.h1Lead}{' '}
            <span className="text-orange-400">{T.h1Accent}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-2 text-[#fefefe]/85 text-xs sm:text-sm max-w-5xl leading-relaxed"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            {T.subhead}
          </motion.p>
        </div>

        {/* Pillar dashboards — 4-column strip */}
        <div className="grid grid-cols-4 gap-3 lg:gap-4 shrink-0 h-[460px] lg:h-[500px]">
          {pillars.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.08, duration: 0.5 }}
              className="rounded-lg overflow-hidden border relative"
              style={{
                borderColor: `${p.accent}66`,
                background: '#0a0a0f',
              }}
            >
              <img
                src={p.img}
                alt={`${T.pillars[i].label} dashboard`}
                className="w-full h-full object-contain object-top"
              />
              <div
                className="absolute top-2 left-3 text-[10px] sm:text-xs tracking-[0.25em] uppercase font-bold px-2 py-1 rounded"
                style={{
                  fontFamily: "'Geist Mono', monospace",
                  color: p.accent,
                  background: 'rgba(6,6,6,0.78)',
                  border: `1px solid ${p.accent}80`,
                }}
              >
                {T.pillars[i].label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pillar captions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="grid grid-cols-4 gap-3 sm:gap-4 shrink-0"
        >
          {pillars.map((p, i) => (
            <div key={`cap-${p.id}`} className="flex items-start gap-2">
              <span
                className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                style={{ background: p.accent }}
              />
              <div>
                <p
                  className="text-xs sm:text-sm font-bold tracking-[0.18em] uppercase"
                  style={{ fontFamily: "'Geist Mono', monospace", color: p.accent }}
                >
                  {T.pillars[i].label}
                </p>
                <p
                  className="text-[#fefefe]/70 text-[11px] sm:text-xs leading-snug mt-0.5"
                  style={{ fontFamily: "'Geist Mono', monospace" }}
                >
                  {T.pillars[i].desc}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </div>
  );
}
