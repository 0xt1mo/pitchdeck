import { motion } from 'framer-motion';
import { tr } from '../i18n';

const ANTON = "'Anton', sans-serif";
const MONO = "'Geist Mono', monospace";

const T = tr({
  en: {
    headLead: 'Fail closed,',
    headAccent: 'not fail open.',
    sub: 'When the cloud is slow, everyone else waves traffic through. We can’t — the edge enforces deterministically.',
    themLabel: 'Everyone else',
    themSub: 'Regex filters + hooks',
    themQuote: '“A hook can be bypassed.”',
    themVerdict: 'Fail open',
    usLabel: 'AOS-Firewall',
    usSub: 'Capability runtime',
    usQuote: '“A missing grant cannot.”',
    usVerdict: 'Fail closed',
    them: [
      'Local layer is regex — it can’t be the last line of defence',
      'So the cloud has to be',
      'Cloud slow or unreachable? Traffic is waved through',
    ],
    us: [
      'Signed, scoped, expiring capability grants',
      'No grant = no action — structural, not a string match',
      'Enforced at the edge: zero latency, no cloud in the loop',
    ],
    killer: (
      <>
        The whole inversion: the centre can stay <span className="text-orange-400">advisory</span> because the edge is <span className="text-orange-400">already safe.</span>
      </>
    ),
  },
  pt: {
    headLead: 'Falha fechada,',
    headAccent: 'não falha aberta.',
    sub: 'Quando a nuvem está lenta, todos os outros deixam o tráfego passar. Nós não podemos — a borda impõe de forma determinística.',
    themLabel: 'Todos os outros',
    themSub: 'Filtros regex + hooks',
    themQuote: '“Um hook pode ser contornado.”',
    themVerdict: 'Falha aberta',
    usLabel: 'AOS-Firewall',
    usSub: 'Runtime de capacidade',
    usQuote: '“Uma concessão ausente não pode.”',
    usVerdict: 'Falha fechada',
    them: [
      'A camada local é regex — não pode ser a última linha de defesa',
      'Então a nuvem tem que ser',
      'Nuvem lenta ou inacessível? O tráfego passa direto',
    ],
    us: [
      'Concessões de capacidade assinadas, com escopo e expiração',
      'Sem concessão = sem ação — estrutural, não uma correspondência de string',
      'Imposto na borda: latência zero, sem nuvem no caminho',
    ],
    killer: (
      <>
        A inversão completa: o centro pode permanecer <span className="text-orange-400">consultivo</span> porque a borda já está <span className="text-orange-400">segura.</span>
      </>
    ),
  },
});

export function FailClosedSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 55% 55% at 75% 55%, rgba(249,115,22,0.10) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-10 lg:py-12 gap-7">

        {/* Header */}
        <div className="shrink-0">
          <motion.h1
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#fefefe] text-[32px] sm:text-[48px] lg:text-[68px] xl:text-[78px] leading-[0.95] tracking-tight uppercase"
            style={{ fontFamily: ANTON }}
          >
            {T.headLead} <span className="text-orange-400">{T.headAccent}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="mt-3 text-[#fefefe]/85 text-base lg:text-xl max-w-5xl leading-relaxed"
            style={{ fontFamily: MONO }}
          >
            {T.sub}
          </motion.p>
        </div>

        {/* Two columns */}
        <div className="shrink-0 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">

          {/* THEM */}
          <motion.div
            initial={{ opacity: 0, x: -14 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
            className="rounded-2xl p-5 lg:p-7 flex flex-col"
            style={{ border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.02)' }}
          >
            <p className="text-[#fefefe]/50 text-xs lg:text-sm tracking-[0.22em] uppercase font-bold" style={{ fontFamily: MONO }}>{T.themLabel}</p>
            <p className="text-[#fefefe]/40 text-[11px] lg:text-sm mb-4" style={{ fontFamily: MONO }}>{T.themSub}</p>
            <div className="flex flex-col gap-2.5 flex-1">
              {T.them.map((t) => (
                <p key={t} className="flex gap-2.5 text-[#fefefe]/75 text-sm lg:text-base leading-snug" style={{ fontFamily: MONO }}>
                  <span className="text-[#fefefe]/30 shrink-0">—</span>{t}
                </p>
              ))}
            </div>
            <div className="mt-5 pt-4 flex items-center justify-between gap-3" style={{ borderTop: '1px solid rgba(255,255,255,0.10)' }}>
              <p className="text-[#fefefe]/45 text-sm lg:text-base italic" style={{ fontFamily: MONO }}>{T.themQuote}</p>
              <p className="text-red-400 text-2xl lg:text-4xl leading-none uppercase" style={{ fontFamily: ANTON }}>{T.themVerdict}</p>
            </div>
          </motion.div>

          {/* US */}
          <motion.div
            initial={{ opacity: 0, x: 14 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.45, duration: 0.5 }}
            className="rounded-2xl p-5 lg:p-7 flex flex-col"
            style={{ border: '2px solid #f97316', background: 'rgba(249,115,22,0.06)', boxShadow: '0 0 28px rgba(249,115,22,0.14)' }}
          >
            <p className="text-orange-400 text-xs lg:text-sm tracking-[0.22em] uppercase font-bold" style={{ fontFamily: MONO }}>{T.usLabel}</p>
            <p className="text-[#fefefe]/50 text-[11px] lg:text-sm mb-4" style={{ fontFamily: MONO }}>{T.usSub}</p>
            <div className="flex flex-col gap-2.5 flex-1">
              {T.us.map((t) => (
                <p key={t} className="flex gap-2.5 text-[#fefefe]/90 text-sm lg:text-base leading-snug" style={{ fontFamily: MONO }}>
                  <span className="text-orange-400 shrink-0">+</span>{t}
                </p>
              ))}
            </div>
            <div className="mt-5 pt-4 flex items-center justify-between gap-3" style={{ borderTop: '1px solid rgba(249,115,22,0.30)' }}>
              <p className="text-[#fefefe]/85 text-sm lg:text-base italic" style={{ fontFamily: MONO }}>{T.usQuote}</p>
              <p className="text-orange-400 text-2xl lg:text-4xl leading-none uppercase" style={{ fontFamily: ANTON }}>{T.usVerdict}</p>
            </div>
          </motion.div>
        </div>

        {/* Killer line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="shrink-0 text-[#fefefe]/85 text-base sm:text-lg lg:text-2xl leading-snug pt-4"
          style={{ fontFamily: MONO, borderTop: '1px solid rgba(255,255,255,0.10)' }}
        >
          {T.killer}
        </motion.p>

      </div>
    </div>
  );
}
