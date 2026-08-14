import { motion } from 'framer-motion';
import { tr } from '../i18n';

const ANTON = "'Anton', sans-serif";
const MONO = "'Geist Mono', monospace";

type Product = { name: string; tag: string; desc: string; price?: string; ghost?: boolean };

const T = tr({
  en: {
    eyebrow: 'Platform',
    headLead: 'One verifiable OS.',
    headAccent: 'Products on top.',
    subtitle:
      'Unicity AOS is the base — multi-tenant, secure by construction, proof of every execution. Each product inherits those guarantees; we just build the vertical on top.',
    products: [
      { name: 'Concierge', tag: 'Telco', desc: 'A personal agent for every subscriber.', price: '$5 / sub' },
      { name: 'Codewall', tag: 'Developer security', desc: 'The firewall for coding agents.', price: '$15 / dev' },
      { name: 'Health Gateway', tag: 'Healthcare', desc: 'AI compliance gateway for PHI.', price: 'HIPAA-safe' },
      { name: '+ Your industry', tag: 'Partner-led', desc: 'Build & ship on AOS. Revenue share.', ghost: true },
    ] as Product[],
    baseName: 'Unicity AOS',
    baseTag: 'The verifiable OS',
    baseFeatures: ['Multi-tenant', 'Secure by construction', 'Proof of every execution'],
  },
  pt: {
    eyebrow: 'Plataforma',
    headLead: 'Um OS verificável.',
    headAccent: 'Produtos por cima.',
    subtitle:
      'O Unicity AOS é a base — multi-tenant, seguro por construção, prova de cada execução. Cada produto herda essas garantias; nós só construímos a vertical por cima.',
    products: [
      { name: 'Concierge', tag: 'Telecom', desc: 'Um agente pessoal para cada assinante.', price: '$5 / assin.' },
      { name: 'Codewall', tag: 'Segurança dev', desc: 'O firewall para agentes de programação.', price: '$15 / dev' },
      { name: 'Health Gateway', tag: 'Saúde', desc: 'Gateway de conformidade de IA para PHI.', price: 'HIPAA' },
      { name: '+ Sua indústria', tag: 'Via parceiros', desc: 'Construa e lance no AOS. Divisão de receita.', ghost: true },
    ] as Product[],
    baseName: 'Unicity AOS',
    baseTag: 'O OS verificável',
    baseFeatures: ['Multi-tenant', 'Seguro por construção', 'Prova de cada execução'],
  },
});

export function ProductsSlide() {
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
        style={{ background: 'radial-gradient(ellipse 65% 45% at 50% 78%, rgba(249,115,22,0.12) 0%, transparent 70%)' }}
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
            className="text-[#fefefe]/70 text-sm sm:text-base lg:text-lg leading-snug mt-3 max-w-5xl"
            style={{ fontFamily: MONO }}
          >
            {T.subtitle}
          </motion.p>
        </div>

        {/* Product tiles */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 shrink-0">
          {T.products.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 + i * 0.09, duration: 0.5 }}
              className="rounded-xl p-4 lg:p-5 flex flex-col"
              style={
                p.ghost
                  ? { border: '1px dashed rgba(255,255,255,0.22)', background: 'transparent' }
                  : { border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.02)' }
              }
            >
              <p className={`text-[10px] lg:text-xs tracking-[0.18em] uppercase ${p.ghost ? 'text-[#fefefe]/40' : 'text-orange-400'}`} style={{ fontFamily: MONO }}>{p.tag}</p>
              <p className={`text-xl lg:text-3xl uppercase leading-[0.95] mt-2 ${p.ghost ? 'text-[#fefefe]/55' : 'text-[#fefefe]'}`} style={{ fontFamily: ANTON }}>{p.name}</p>
              <p className="text-[#fefefe]/60 text-xs lg:text-sm leading-snug mt-2.5 flex-1" style={{ fontFamily: MONO }}>{p.desc}</p>
              {p.price && (
                <p className="text-[#fefefe]/80 text-sm lg:text-base mt-3" style={{ fontFamily: ANTON }}>{p.price}</p>
              )}
            </motion.div>
          ))}
        </div>

        {/* "built on" connector */}
        <div className="shrink-0 flex justify-center -my-1 text-orange-400/60 text-xl" style={{ fontFamily: ANTON }}>▾</div>

        {/* OS foundation */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.55 }}
          className="shrink-0 rounded-xl px-6 py-5 lg:px-8 lg:py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          style={{ border: '1px solid rgba(249,115,22,0.5)', borderTop: '3px solid #f97316', background: 'rgba(249,115,22,0.08)', boxShadow: '0 -10px 40px rgba(249,115,22,0.12)' }}
        >
          <div className="flex items-baseline gap-3 flex-wrap">
            <span className="text-orange-400 text-3xl lg:text-5xl leading-none uppercase" style={{ fontFamily: ANTON }}>{T.baseName}</span>
            <span className="text-[#fefefe]/70 text-sm lg:text-lg" style={{ fontFamily: MONO }}>— {T.baseTag}</span>
          </div>
          <div className="flex flex-wrap items-center gap-2.5 lg:gap-3">
            {T.baseFeatures.map((f) => (
              <span key={f} className="rounded-full border border-white/20 text-[#fefefe]/80 text-[11px] lg:text-sm tracking-[0.06em] uppercase px-3 py-1.5" style={{ fontFamily: MONO }}>{f}</span>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
}
