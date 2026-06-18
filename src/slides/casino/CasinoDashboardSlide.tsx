import { motion } from 'framer-motion';

const pillars = [
  {
    label: 'Segurança',
    desc: 'Malha de interceptação semântica — cada payload verificado em tempo de execução.',
    img: '/dashboards/security.png',
    accent: '#ef4444',
  },
  {
    label: 'Governança',
    desc: 'Biblioteca de políticas ao vivo, aprovações e registro de auditoria completo.',
    img: '/dashboards/governance.png',
    accent: '#22c55e',
  },
  {
    label: 'Redes',
    desc: 'Canais abertos em A2A, MCP, x402 — cientes da contraparte.',
    img: '/dashboards/networking.png',
    accent: '#a855f7',
  },
  {
    label: 'Pagamentos',
    desc: 'Fluxo de caixa, saldos de rails e orçamentos por agente em tempo real.',
    img: '/dashboards/payments.png',
    accent: '#f59e0b',
  },
];

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
            O Console Empresarial
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[28px] sm:text-[40px] lg:text-[52px] leading-[1.05] tracking-tight mt-3 uppercase"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            Um único painel para{' '}
            <span className="text-orange-400">cada agente, cada política, cada pagamento.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-2 text-[#fefefe]/85 text-xs sm:text-sm max-w-5xl leading-relaxed"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            Identidade, delegação, política, liquidação e auditoria — unificadas em uma única superfície para o operador. Não é arrancar e substituir. Um plano de controle que fica abaixo de qualquer implantação de agentes.
          </motion.p>
        </div>

        {/* Pillar dashboards — 4-column strip */}
        <div className="grid grid-cols-4 gap-3 lg:gap-4 shrink-0 h-[460px] lg:h-[500px]">
          {pillars.map((p, i) => (
            <motion.div
              key={p.label}
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
                alt={`painel de ${p.label}`}
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
                {p.label}
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
          {pillars.map((p) => (
            <div key={`cap-${p.label}`} className="flex items-start gap-2">
              <span
                className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                style={{ background: p.accent }}
              />
              <div>
                <p
                  className="text-xs sm:text-sm font-bold tracking-[0.18em] uppercase"
                  style={{ fontFamily: "'Geist Mono', monospace", color: p.accent }}
                >
                  {p.label}
                </p>
                <p
                  className="text-[#fefefe]/70 text-[11px] sm:text-xs leading-snug mt-0.5"
                  style={{ fontFamily: "'Geist Mono', monospace" }}
                >
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </div>
  );
}
