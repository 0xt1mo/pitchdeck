import { motion } from 'framer-motion';
import { tr } from '../i18n';

const ANTON = "'Anton', sans-serif";
const MONO = "'Geist Mono', monospace";

type Pillar = { k: string; d: string };

const T = tr({
  en: {
    eyebrow: 'Competition · what it means',
    headLead: 'We run agents at industrial scale —',
    headAccent: 'safe & secure by construction.',
    subtitle:
      'Everyone else watches agents from the outside with bolt-on guardrails that break at scale. We build safety and security into the OS the agents run on — so the guarantees hold at industrial scale, not just in a demo.',
    pillars: [
      { k: 'Industrial scale', d: '10,000s of concurrent agents per node. Multi-tenant, isolated at the kernel — density no wrapper can reach.' },
      { k: 'Safe by construction', d: 'Policy, budgets, DLP and prompt-defense enforced below the agent — impossible to bypass or prompt away.' },
      { k: 'Verifiable', d: 'Every execution cryptographically signed. Audit by construction — evidence, not logs written after the fact.' },
    ] as Pillar[],
    kicker: 'Guardrails are a feature.',
    kickerAccent: 'An OS is a moat.',
  },
  pt: {
    eyebrow: 'Concorrência · o que isso significa',
    headLead: 'Rodamos agentes em escala industrial —',
    headAccent: 'seguros por construção.',
    subtitle:
      'Todos os outros vigiam os agentes de fora com guardrails acoplados que quebram em escala. Nós construímos a segurança dentro do OS onde os agentes rodam — então as garantias se mantêm em escala industrial, não só numa demo.',
    pillars: [
      { k: 'Escala industrial', d: 'Milhares de agentes simultâneos por nó. Multi-tenant, isolados no kernel — densidade que nenhum wrapper alcança.' },
      { k: 'Seguro por construção', d: 'Política, budgets, DLP e defesa contra prompt-injection impostos abaixo do agente — impossíveis de contornar.' },
      { k: 'Verificável', d: 'Cada execução assinada criptograficamente. Auditoria por construção — evidência, não logs escritos depois.' },
    ] as Pillar[],
    kicker: 'Guardrails são um recurso.',
    kickerAccent: 'Um OS é um moat.',
  },
});

export function WhyWeWinSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 60% 55% at 50% 44%, rgba(249,115,22,0.09) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-8 lg:py-10 gap-6 lg:gap-8">

        {/* Header */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-orange-400 text-sm lg:text-base tracking-[0.22em] uppercase mb-3"
            style={{ fontFamily: MONO }}
          >
            {T.eyebrow}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06, duration: 0.6 }}
            className="text-[#fefefe] text-[30px] sm:text-[44px] lg:text-[58px] xl:text-[66px] leading-[0.98] tracking-tight uppercase max-w-6xl"
            style={{ fontFamily: ANTON }}
          >
            {T.headLead} <span className="text-orange-400">{T.headAccent}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="text-[#fefefe]/75 text-base sm:text-lg lg:text-2xl leading-snug mt-4 max-w-6xl"
            style={{ fontFamily: MONO }}
          >
            {T.subtitle}
          </motion.p>
        </div>

        {/* Three pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-5 shrink-0">
          {T.pillars.map((p, i) => (
            <motion.div
              key={p.k}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
              className="rounded-xl border border-white/10 bg-white/[0.02] p-5 lg:p-7 flex flex-col"
              style={i === 1 ? { borderColor: 'rgba(249,115,22,0.4)', borderLeft: '3px solid #f97316', background: 'rgba(249,115,22,0.05)' } : undefined}
            >
              <p
                className={`text-2xl lg:text-4xl uppercase leading-none ${i === 1 ? 'text-orange-400' : 'text-[#fefefe]'}`}
                style={{ fontFamily: ANTON }}
              >
                {p.k}
              </p>
              <p className="text-[#fefefe]/70 text-sm lg:text-lg leading-snug mt-3.5" style={{ fontFamily: MONO }}>
                {p.d}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Kicker */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75, duration: 0.5 }}
          className="shrink-0 text-2xl sm:text-3xl lg:text-[40px] leading-tight pt-4"
          style={{ fontFamily: ANTON, borderTop: '1px solid rgba(255,255,255,0.10)' }}
        >
          <span className="text-[#fefefe]/60">{T.kicker}</span> <span className="text-orange-400">{T.kickerAccent}</span>
        </motion.p>

      </div>
    </div>
  );
}
