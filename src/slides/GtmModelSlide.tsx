import { motion } from 'framer-motion';
import { tr } from '../i18n';

const ANTON = "'Anton', sans-serif";
const MONO = "'Geist Mono', monospace";

type Tier = { tag: string; name: string; desc: string; hot?: boolean };
type Payoff = { k: string; d: string };

const T = tr({
  en: {
    eyebrow: 'Go-to-market · the model',
    headLead: 'Sell the platform.',
    headAccent: 'Reach every customer.',
    subtitle:
      'We sell the OS to businesses — telcos, banks, hospitals, governments. They run their own agents with safety guarantees, and give every customer a personal agent: a daily touchpoint they never had.',
    tiers: [
      { tag: 'The platform', name: 'Unicity AOS', desc: 'Verifiable, safe by construction. Multi-tenant, licensed per node.' },
      { tag: 'The buyer', name: 'Business', desc: 'Telco · bank · hospital · government. Runs its agents — and ships a personal agent to every customer.', hot: true },
      { tag: 'The reach', name: 'Their customers', desc: 'A personal agent each — a daily touchpoint the business never had.' },
    ] as Tier[],
    sell: 'we sell',
    distribute: 'they distribute',
    payoffs: [
      { k: 'Run agents, safely', d: 'Every internal agent bounded, proven and compliant — the OS enforces it, at industrial scale.' },
      { k: 'Reach every customer', d: 'A personal agent per customer: new ARPU, engagement and retention — under the business’s brand.' },
    ] as Payoff[],
  },
  pt: {
    eyebrow: 'Go-to-market · o modelo',
    headLead: 'Venda a plataforma.',
    headAccent: 'Alcance cada cliente.',
    subtitle:
      'Vendemos o OS para empresas — telecoms, bancos, hospitais, governos. Elas rodam seus próprios agentes com garantias de segurança e dão a cada cliente um agente pessoal: um ponto de contato diário que nunca tiveram.',
    tiers: [
      { tag: 'A plataforma', name: 'Unicity AOS', desc: 'Verificável, segura por construção. Multi-tenant, licenciada por nó.' },
      { tag: 'O comprador', name: 'Empresa', desc: 'Telecom · banco · hospital · governo. Roda seus agentes — e entrega um agente pessoal a cada cliente.', hot: true },
      { tag: 'O alcance', name: 'Os clientes deles', desc: 'Um agente pessoal para cada um — um ponto de contato diário que a empresa nunca teve.' },
    ] as Tier[],
    sell: 'nós vendemos',
    distribute: 'eles distribuem',
    payoffs: [
      { k: 'Rode agentes, com segurança', d: 'Cada agente interno limitado, comprovado e em conformidade — o OS impõe, em escala industrial.' },
      { k: 'Alcance cada cliente', d: 'Um agente pessoal por cliente: novo ARPU, engajamento e retenção — sob a marca da empresa.' },
    ] as Payoff[],
  },
});

function FlowArrow({ label }: { label: string }) {
  return (
    <div className="shrink-0 flex flex-col items-center justify-center px-1 lg:px-3">
      <span className="text-orange-400/70 text-2xl lg:text-4xl leading-none" style={{ fontFamily: ANTON }}>→</span>
      <span className="text-[#fefefe]/40 text-[9px] lg:text-[11px] tracking-[0.14em] uppercase mt-1.5 whitespace-nowrap" style={{ fontFamily: MONO }}>{label}</span>
    </div>
  );
}

export function GtmModelSlide() {
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
        style={{ background: 'radial-gradient(ellipse 55% 55% at 50% 46%, rgba(249,115,22,0.09) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-8 lg:py-10 gap-6 lg:gap-8">

        {/* Header */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-orange-400 text-xs lg:text-sm tracking-[0.22em] uppercase mb-3"
            style={{ fontFamily: MONO }}
          >
            {T.eyebrow}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.06, duration: 0.6 }}
            className="text-[28px] sm:text-[40px] lg:text-[54px] xl:text-[62px] leading-[0.98] tracking-tight uppercase"
            style={{ fontFamily: ANTON }}
          >
            <span className="text-[#fefefe]">{T.headLead}</span> <span className="text-orange-400">{T.headAccent}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="text-[#fefefe]/70 text-sm sm:text-base lg:text-lg leading-snug mt-3 max-w-5xl"
            style={{ fontFamily: MONO }}
          >
            {T.subtitle}
          </motion.p>
        </div>

        {/* Flow: platform -> business -> customers */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="flex items-stretch"
        >
          {T.tiers.map((t, i) => (
            <div key={t.name} className="flex items-stretch flex-1">
              {i > 0 && <FlowArrow label={i === 1 ? T.sell : T.distribute} />}
              <div
                className="flex-1 rounded-xl p-5 lg:p-6 flex flex-col"
                style={
                  t.hot
                    ? { border: '1px solid rgba(249,115,22,0.45)', borderLeft: '4px solid #f97316', background: 'rgba(249,115,22,0.07)' }
                    : { border: '1px solid rgba(255,255,255,0.10)', background: 'rgba(255,255,255,0.02)' }
                }
              >
                <p className={`text-[10px] lg:text-xs tracking-[0.18em] uppercase ${t.hot ? 'text-orange-400' : 'text-[#fefefe]/40'}`} style={{ fontFamily: MONO }}>{t.tag}</p>
                <p className={`text-2xl lg:text-4xl uppercase leading-none mt-2 ${t.hot ? 'text-orange-400' : 'text-[#fefefe]'}`} style={{ fontFamily: ANTON }}>{t.name}</p>
                <p className="text-[#fefefe]/60 text-xs lg:text-sm leading-snug mt-3" style={{ fontFamily: MONO }}>{t.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Two payoffs for the business */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5 shrink-0">
          {T.payoffs.map((p, i) => (
            <motion.div
              key={p.k}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
              className="rounded-xl border border-white/10 bg-white/[0.02] p-5 lg:p-6"
            >
              <p className="text-orange-400 text-lg lg:text-2xl uppercase leading-none" style={{ fontFamily: ANTON }}>{p.k}</p>
              <p className="text-[#fefefe]/70 text-sm lg:text-base leading-snug mt-3" style={{ fontFamily: MONO }}>{p.d}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
