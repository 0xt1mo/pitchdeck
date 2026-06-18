import { motion } from 'framer-motion';

const pillars = [
  { num: '01', name: 'Segurança',   body: <>Execução verificável para <strong className="text-[#fefefe] font-semibold">cada agente</strong> Guardrails, sandboxing e aplicação no kernel do OS</> },
  { num: '02', name: 'Conformidade', body: <>Atestações de KYC, limites de risco, limites de sessão, trilha de auditoria regulatória — <strong className="text-[#fefefe] font-semibold">vinculados ao agente</strong>, aplicados estruturalmente, apresentados por transação.</> },
  { num: '03', name: 'Redes', body: <>Mensageria peer-to-peer entre agentes. <strong className="text-[#fefefe] font-semibold">Sem ledger compartilhado.</strong> Sem roteador central. Menos de um segundo entre contrapartes reguladas.</> },
  { num: '04', name: 'Governança', body: <>Aplicação de políticas no nível do agente. Limites, exclusões, permissões — <strong className="text-[#fefefe] font-semibold">definidos uma vez</strong>, aplicados em cada interação.</> },
  { num: '05', name: 'Pagamentos',    body: <>Transferência P2P de stablecoins reguladas. Privacidade perfeita <strong className="text-[#fefefe] font-semibold">Finalidade criptográfica.</strong> Sem rede de cartões, sem processadora de pagamentos.</> },
  { num: '06', name: 'Auditoria',      body: <>Cada ação assinada e testemunhada. <strong className="text-[#fefefe] font-semibold">A evidência de conformidade é uma consulta</strong>, não um CSV. Reguladores verificam, não confiam.</> },
];

export function CasinoPlatformSlide() {
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
            Nº 09 · O Que É a Unicity
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[32px] sm:text-[44px] lg:text-[60px] leading-[0.98] tracking-tight mt-3 uppercase"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            O que isso significa{' '}
            <span className="text-orange-400">para operadores de gaming.</span>
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
            Tudo o que uma empresa precisa para implantar agentes com segurança em escala — segurança, conformidade, redes, governança, valor, auditoria — em uma única plataforma.
          </motion.p>
        </div>

        {/* 3×2 pillar grid */}
        <div className="grid grid-cols-3 grid-rows-2 gap-4 lg:gap-5 shrink-0">
          {pillars.map((p, i) => (
            <motion.div
              key={p.num}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.07, duration: 0.5 }}
              className="relative px-6 py-5"
              style={{
                border: '1px solid rgba(255,255,255,0.18)',
                borderLeft: '2px solid #FF6A1F',
                background: 'rgba(255,106,31,0.025)',
              }}
            >
              <p
                className="text-[#fefefe]/45 text-[11px] tracking-[0.32em] uppercase font-semibold"
                style={{ fontFamily: "'Geist Mono', monospace" }}
              >
                {p.num}
              </p>
              <h3
                className="text-[#fefefe] text-[26px] sm:text-[32px] lg:text-[40px] leading-none uppercase tracking-[0.04em] mt-1"
                style={{ fontFamily: "'Anton', sans-serif" }}
              >
                {p.name}
              </h3>
              <div
                className="h-[1px] w-8 bg-orange-500 mt-2 mb-2"
                style={{ boxShadow: '0 0 6px rgba(249,115,22,0.7)' }}
              />
              <p
                className="text-[#fefefe]/78 text-sm lg:text-base leading-[1.55]"
                style={{ fontFamily: "'Geist Mono', monospace" }}
              >
                {p.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Closing footer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="text-[#fefefe]/65 text-[22px] sm:text-[28px] lg:text-[36px] leading-tight tracking-tight uppercase pt-5 shrink-0"
          style={{
            fontFamily: "'Anton', sans-serif",
            borderTop: '1px solid rgba(249,115,22,0.25)',
          }}
        >
          Outros fornecedores resolvem uma peça.{' '}
          <span className="text-orange-400">A Unicity é a plataforma.</span>
        </motion.p>
      </div>
    </div>
  );
}
