import { motion } from 'framer-motion';
import { tr } from '../i18n';

// Crypto/full variant of the traction slide. Mirrors TractionCleanSlide's three-card
// layout, but the Momentum card keeps the testnet-app / testnet-wallet stats as a 2×2 grid.
const mono = "'Geist Mono', monospace";
const anton = "'Anton', sans-serif";

const pipelineCounts = ['11', '6', '4'];

type Stat = { value: string; label: string; hot?: boolean };

const T = tr({
  en: {
    headline: 'TRACTION',
    subHead: (
      <>
        <span className="text-orange-400 font-bold">Soft-launched July '26, GA in August.</span> A growing developer base, a signed sovereign channel, and a commercial pipeline lined up for go-live.
      </>
    ),
    momentumEyebrow: 'Momentum',
    stats: [
      { value: '3,500', label: 'Developer sign-ups' },
      { value: '1,500', label: 'Community testnet apps' },
      { value: '80K+', label: 'Live testnet wallets' },
      { value: 'LIVE', label: "Soft launch · Aug '26", hot: true },
    ] as Stat[],
    channelEyebrow: 'Sovereign channel',
    channelBadge: 'Signed',
    channelBody: (
      <>
        <strong className="text-[#fefefe] font-bold">Revenue share</strong> with UAE Sovereign
        AI provider — global distribution for government data center rollouts.
      </>
    ),
    pipelineTitle: 'Commercial Pipeline',
    pipelineBadge: 'Awaiting GA',
    pipelineRows: ['Telecom operators', 'Financial institutions', 'Healthcare providers'],
    pipelineNote: 'Engaged — awaiting general availability.',
  },
  pt: {
    headline: 'TRAÇÃO',
    subHead: (
      <>
        <span className="text-orange-400 font-bold">Soft launch em julho de '26, GA em agosto.</span> Uma base de desenvolvedores em expansão, um canal soberano já assinado e um pipeline comercial pronto para o go-live.
      </>
    ),
    momentumEyebrow: 'Momento',
    stats: [
      { value: '3,500', label: 'Cadastros de desenvolvedores' },
      { value: '1,500', label: 'Apps na testnet da comunidade' },
      { value: '80K+', label: 'Carteiras ativas na testnet' },
      { value: 'LIVE', label: "Soft launch · Ago '26", hot: true },
    ] as Stat[],
    channelEyebrow: 'Canal soberano',
    channelBadge: 'Assinado',
    channelBody: (
      <>
        <strong className="text-[#fefefe] font-bold">Divisão de receita</strong> com o provedor
        de IA soberano dos Emirados Árabes Unidos — distribuição global para rollouts de data centers governamentais.
      </>
    ),
    pipelineTitle: 'Pipeline Comercial',
    pipelineBadge: 'Aguardando GA',
    pipelineRows: ['Operadoras de telecom', 'Instituições financeiras', 'Provedores de saúde'],
    pipelineNote: 'Em negociação — aguardando a disponibilidade geral.',
  },
});

const eyebrowCls = 'text-xs lg:text-sm tracking-[0.15em] uppercase';
const badgeCls = 'rounded text-xs lg:text-sm px-2 py-0.5 tracking-[0.15em] uppercase';

export function TractionSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      {/* Warm glow, top */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(55% 45% at 32% 0%, rgba(249,115,22,0.12), transparent 70%)' }}
      />

      <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-12 lg:px-20 py-8 lg:py-12 gap-8 lg:gap-12">

        {/* Header */}
        <div className="shrink-0">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[56px] sm:text-[80px] lg:text-[104px] leading-[0.9] tracking-tight uppercase"
            style={{ fontFamily: anton }}
          >
            <span className="text-[#fefefe]">{T.headline}</span><span className="text-orange-400">.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-[#fefefe]/85 text-base sm:text-lg lg:text-xl leading-snug mt-3 max-w-5xl"
            style={{ fontFamily: mono }}
          >
            {T.subHead}
          </motion.p>
        </div>

        {/* Three balanced cards */}
        <div className="shrink-0 grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-5 items-stretch">

          {/* Momentum — testnet stats as a 2×2 grid */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="rounded-xl border border-[#fefefe]/12 bg-[#fefefe]/[0.02] p-5 lg:p-7 flex flex-col"
          >
            <span className={`text-[#fefefe]/40 ${eyebrowCls}`} style={{ fontFamily: mono }}>{T.momentumEyebrow}</span>
            <div className="grid grid-cols-2 gap-x-4 gap-y-5 lg:gap-y-6 mt-5 flex-1 content-center">
              {T.stats.map((s) => (
                <div key={s.label}>
                  <p
                    className="text-3xl lg:text-5xl leading-none uppercase"
                    style={{ fontFamily: anton, color: s.hot ? '#f97316' : '#fefefe' }}
                  >
                    {s.value}
                  </p>
                  <p className="text-[#fefefe]/45 text-xs lg:text-sm tracking-[0.1em] uppercase mt-2 leading-snug" style={{ fontFamily: mono }}>{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Sovereign channel — Aleria (highlight) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="rounded-xl border border-orange-500/70 bg-orange-500/[0.06] p-5 lg:p-7 flex flex-col"
            style={{ boxShadow: '0 0 28px rgba(249,115,22,0.15)' }}
          >
            <div className="flex items-center justify-between gap-3">
              <span className={`text-orange-400 ${eyebrowCls}`} style={{ fontFamily: mono }}>{T.channelEyebrow}</span>
              <span className={`border border-orange-500/70 text-orange-400 ${badgeCls}`} style={{ fontFamily: mono }}>{T.channelBadge}</span>
            </div>
            <p className="text-[#fefefe] text-3xl lg:text-4xl leading-[0.95] uppercase mt-4" style={{ fontFamily: anton }}>
              ALERIA<br />OEM
            </p>
            <p className="text-[#fefefe]/75 text-base lg:text-xl leading-snug mt-4" style={{ fontFamily: mono }}>{T.channelBody}</p>
          </motion.div>

          {/* Commercial pipeline */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="rounded-xl border border-[#fefefe]/12 bg-[#fefefe]/[0.02] p-5 lg:p-7 flex flex-col"
          >
            <div className="flex items-center justify-between gap-3">
              <span className={`text-[#fefefe]/40 ${eyebrowCls}`} style={{ fontFamily: mono }}>{T.pipelineTitle}</span>
              <span className={`border border-[#fefefe]/25 text-[#fefefe]/60 ${badgeCls}`} style={{ fontFamily: mono }}>{T.pipelineBadge}</span>
            </div>
            <div className="mt-4 flex flex-col gap-2.5 flex-1">
              {pipelineCounts.map((n, i) => (
                <div key={T.pipelineRows[i]} className="flex items-baseline gap-3">
                  <span className="text-orange-400 text-3xl lg:text-4xl leading-none w-12 lg:w-14 shrink-0" style={{ fontFamily: anton }}>{n}</span>
                  <span className="text-[#fefefe]/85 text-base lg:text-xl" style={{ fontFamily: mono }}>{T.pipelineRows[i]}</span>
                </div>
              ))}
            </div>
            <p className="text-[#fefefe]/60 text-sm lg:text-base leading-snug mt-4" style={{ fontFamily: mono }}>{T.pipelineNote}</p>
          </motion.div>

        </div>

      </div>
    </div>
  );
}
