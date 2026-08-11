import { motion } from 'framer-motion';
import { tr } from '../i18n';

const ANTON = "'Anton', sans-serif";
const MONO = "'Geist Mono', monospace";

type Layer = { name: string; desc: string; tag?: string; ours?: boolean };
type Point = { k: string; d: string };

const T = tr({
  en: {
    eyebrow: 'Go-to-market · AI infrastructure',
    headLead: 'AI INFRASTRUCTURE:',
    headAccent: 'the OS inside sovereign AI data centers.',
    subtitle:
      'Nations and enterprises are building sovereign AI factories. Unicity AOS ships as the agent runtime — embedded OEM in the infrastructure, licensed per node.',
    layers: [
      { name: 'Sovereign AI services', desc: 'Agents for government, finance, healthcare, defense — in-country.' },
      { name: 'Unicity AOS', desc: 'The agent runtime — multi-tenant, isolated, auditable. Embedded in the provider’s SKU.', tag: 'Our layer', ours: true },
      { name: 'AI-infra provider', desc: 'GPUs · compute · sovereign data center.' },
    ] as Layer[],
    points: [
      { k: 'OEM · per node', d: 'Shipped inside the infrastructure SKU — a license on every agentic node deployed.' },
      { k: 'Sovereign by construction', d: 'Data stays in-country. Regulated buyers can finally run agents on infra they trust.' },
      { k: 'Their accounts, our runtime', d: 'Providers already sell to sovereigns. Every AI factory becomes an agent factory.' },
    ] as Point[],
  },
  pt: {
    eyebrow: 'Go-to-market · Infraestrutura de IA',
    headLead: 'INFRAESTRUTURA DE IA:',
    headAccent: 'o OS dentro dos data centers de IA soberana.',
    subtitle:
      'Nações e empresas estão construindo fábricas de IA soberana. O Unicity AOS entra como o runtime dos agentes — embarcado em modelo OEM na infraestrutura, licenciado por nó.',
    layers: [
      { name: 'Serviços de IA soberana', desc: 'Agentes para governo, finanças, saúde, defesa — no país.' },
      { name: 'Unicity AOS', desc: 'O runtime dos agentes — multi-tenant, isolado, auditável. Embarcado no SKU do provedor.', tag: 'Nossa camada', ours: true },
      { name: 'Provedor de infra de IA', desc: 'GPUs · computação · data center soberano.' },
    ] as Layer[],
    points: [
      { k: 'OEM · por nó', d: 'Embarcado no SKU da infraestrutura — uma licença por nó agêntico implantado.' },
      { k: 'Soberano por construção', d: 'Os dados ficam no país. Compradores regulados finalmente rodam agentes em infra confiável.' },
      { k: 'As contas deles, nosso runtime', d: 'Os provedores já vendem para soberanos. Toda fábrica de IA vira uma fábrica de agentes.' },
    ] as Point[],
  },
});

export function AiInfraSlide() {
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
        style={{ background: 'radial-gradient(ellipse 60% 55% at 62% 46%, rgba(249,115,22,0.08) 0%, transparent 70%)' }}
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
            className="text-[#fefefe] text-[28px] sm:text-[40px] lg:text-[54px] xl:text-[60px] leading-[0.98] tracking-tight uppercase max-w-6xl"
            style={{ fontFamily: ANTON }}
          >
            {T.headLead} <span className="text-orange-400">{T.headAccent}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="text-[#fefefe]/70 text-sm sm:text-base lg:text-lg leading-snug mt-3 max-w-4xl"
            style={{ fontFamily: MONO }}
          >
            {T.subtitle}
          </motion.p>
        </div>

        {/* Layered OEM stack */}
        <div className="flex flex-col gap-2.5 lg:gap-3">
          {T.layers.map((l, i) => (
            <motion.div
              key={l.name}
              initial={{ opacity: 0, x: l.ours ? 0 : (i === 0 ? 20 : -20) }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.12, duration: 0.5 }}
              className="rounded-xl px-5 lg:px-7 flex items-center justify-between gap-6"
              style={
                l.ours
                  ? { border: '1px solid rgba(249,115,22,0.45)', borderLeft: '4px solid #f97316', background: 'rgba(249,115,22,0.07)', paddingTop: '1.15rem', paddingBottom: '1.15rem' }
                  : { border: '1px solid rgba(255,255,255,0.10)', background: 'rgba(255,255,255,0.02)', paddingTop: '0.85rem', paddingBottom: '0.85rem' }
              }
            >
              <div className="flex items-center gap-3.5 shrink-0">
                <span
                  className={`uppercase leading-none ${l.ours ? 'text-orange-400 text-2xl lg:text-4xl' : 'text-[#fefefe] text-xl lg:text-3xl'}`}
                  style={{ fontFamily: ANTON }}
                >
                  {l.name}
                </span>
                {l.tag && (
                  <span
                    className="rounded-full border border-orange-500/50 text-orange-300 text-[10px] lg:text-[11px] tracking-[0.18em] uppercase px-2.5 py-1"
                    style={{ fontFamily: MONO }}
                  >
                    {l.tag}
                  </span>
                )}
              </div>
              <span
                className={`text-right text-xs lg:text-sm leading-snug max-w-xl ${l.ours ? 'text-[#fefefe]/80' : 'text-[#fefefe]/55'}`}
                style={{ fontFamily: MONO }}
              >
                {l.desc}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Economics band */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 lg:gap-4 shrink-0">
          {T.points.map((p, i) => (
            <motion.div
              key={p.k}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + i * 0.1, duration: 0.5 }}
              className="rounded-xl border border-white/10 bg-white/[0.02] p-4 lg:p-5"
            >
              <p className="text-orange-400 text-sm lg:text-base uppercase tracking-wide leading-none mb-2" style={{ fontFamily: ANTON }}>{p.k}</p>
              <p className="text-[#fefefe]/65 text-xs lg:text-sm leading-snug" style={{ fontFamily: MONO }}>{p.d}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
