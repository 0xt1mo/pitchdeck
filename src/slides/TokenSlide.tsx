import { motion } from 'framer-motion';
import { useState } from 'react';
import { ResponsivePie } from '@nivo/pie';
import { tr } from '../i18n';

const T = tr({
  en: {
    supplyLabel: 'SUPPLY',
    sliceLabels: [
      'Foundation',
      'Ecosystem Grants',
      'Investors',
      'Team & contributors',
      'Community',
      'Exchange Liquidity',
    ],
    chain: [
      {
        num: '01',
        title: 'Access',
        desc: 'Every agent needs Unicity native currency tokens to transact.',
      },
      {
        num: '02',
        title: 'Validator yield',
        desc: 'pre-paid gas flows to Oracle operators who secure the network.',
      },
      {
        num: '03',
        title: 'Stake to operate',
        desc: "Running an Oracle node requires staked token; a node's value rises with the revenue it earns.",
      },
      {
        num: '04',
        title: 'Demand locks supply',
        desc: 'More subscribers → more revenue → more token staked and locked. Demand scales with subscriber count.',
      },
    ],
    headLead: 'TOKEN DEMAND SCALES WITH',
    headAccent: 'NETWORK REVENUE',
    subhead:
      'Every agent needs Unicity native currency tokens to transact. The token is gas, not a means of payment — so demand scales directly with network usage.',
    chainLabel: 'The Mechanical Chain',
    allocationLabel: 'Allocation — Initial 10B Supply',
    vestingLabel: 'Vesting',
    vestingBody:
      'Uncapped supply, 5%→2% inflation tail funding validators. Standard cliffs and linear vesting for team and investors; full schedule in the tokenomics doc.',
    takeaway: (
      <>
        The result: token demand is a function of <span className="text-orange-400 font-bold">network revenue</span> — not speculation. More usage → more token staked and locked.
      </>
    ),
  },
  pt: {
    supplyLabel: 'OFERTA',
    sliceLabels: [
      'Fundação',
      'Grants de Ecossistema',
      'Investidores',
      'Time e contribuidores',
      'Comunidade',
      'Liquidez em Exchanges',
    ],
    chain: [
      {
        num: '01',
        title: 'Acesso',
        desc: 'Todo agente precisa dos tokens da moeda nativa da Unicity para transacionar.',
      },
      {
        num: '02',
        title: 'Rendimento do validador',
        desc: 'o gas pré-pago flui para os operadores de Oracle que protegem a rede.',
      },
      {
        num: '03',
        title: 'Stake para operar',
        desc: 'Rodar um nó Oracle exige token em stake; o valor de um nó cresce com a receita que ele gera.',
      },
      {
        num: '04',
        title: 'A demanda trava a oferta',
        desc: 'Mais assinantes → mais receita → mais token em stake e travado. A demanda escala com o número de assinantes.',
      },
    ],
    headLead: 'A DEMANDA POR TOKEN ESCALA COM A',
    headAccent: 'RECEITA DA REDE',
    subhead:
      'Todo agente precisa dos tokens da moeda nativa da Unicity para transacionar. O token é gas, não um meio de pagamento — então a demanda escala diretamente com o uso da rede.',
    chainLabel: 'A Cadeia Mecânica',
    allocationLabel: 'Alocação — Oferta Inicial de 10B',
    vestingLabel: 'Vesting',
    vestingBody:
      'Oferta sem teto, cauda de inflação de 5%→2% financiando validadores. Cliffs padrão e vesting linear para o time e investidores; cronograma completo no documento de tokenomics.',
    takeaway: (
      <>
        O resultado: a demanda por token é função da <span className="text-orange-400 font-bold">receita da rede</span> — não de especulação. Mais uso → mais token em stake e travado.
      </>
    ),
  },
});

const slices = [
  { id: T.sliceLabels[0], value: 23, color: '#9ca3af' },
  { id: T.sliceLabels[1], value: 23, color: '#f97316' },
  { id: T.sliceLabels[2], value: 20, color: '#fefefe' },
  { id: T.sliceLabels[3], value: 15, color: '#e5e7eb' },
  { id: T.sliceLabels[4], value: 15, color: '#6b7280' },
  { id: T.sliceLabels[5], value: 4, color: '#4b5563' },
];

function CenterLabel({ centerX, centerY }: { centerX: number; centerY: number }) {
  return (
    <g>
      <text x={centerX} y={centerY - 6} textAnchor="middle" dominantBaseline="central"
        fill="#fefefe" fontSize="22" fontFamily="Anton, sans-serif" letterSpacing="0.05em">10B</text>
      <text x={centerX} y={centerY + 14} textAnchor="middle" dominantBaseline="central"
        fill="rgba(254,254,254,0.5)" fontSize="9" fontFamily="Geist Mono, monospace">{T.supplyLabel}</text>
    </g>
  );
}

function InteractiveDonut({ onHover }: { onHover: (id: string | null) => void }) {
  return (
    <ResponsivePie
      data={slices}
      colors={{ datum: 'data.color' }}
      margin={{ top: 5, right: 5, bottom: 5, left: 5 }}
      innerRadius={0.62}
      padAngle={1.2}
      cornerRadius={2}
      activeOuterRadiusOffset={6}
      activeInnerRadiusOffset={3}
      borderWidth={0}
      enableArcLinkLabels={false}
      enableArcLabels={false}
      motionConfig="wobbly"
      transitionMode="pushIn"
      onMouseEnter={(datum) => onHover(datum.id as string)}
      onMouseLeave={() => onHover(null)}
      tooltip={({ datum }) => (
        <div style={{
          background: 'rgba(6,6,6,0.92)', border: `1px solid ${datum.color}`,
          borderRadius: '8px', padding: '8px 14px', fontFamily: "'Geist Mono', monospace",
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: datum.color }} />
            <span style={{ color: '#fefefe', fontFamily: "'Anton', sans-serif", fontSize: 13 }}>{datum.id}</span>
          </div>
          <div style={{ color: datum.color, fontFamily: "'Anton', sans-serif", fontSize: 24, marginTop: 2 }}>{datum.value}%</div>
        </div>
      )}
      theme={{ tooltip: { container: { background: 'transparent', boxShadow: 'none', padding: 0 } } }}
      layers={['arcs', 'arcLabels', 'arcLinkLabels', 'legends', CenterLabel]}
    />
  );
}

export function TokenSlide() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col px-8 sm:px-12 lg:px-16 py-6 sm:py-8 lg:py-10 justify-center gap-4">

        {/* Header */}
        <div className="shrink-0">
          <motion.h1 initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[30px] sm:text-[44px] lg:text-[56px] xl:text-[64px] leading-[0.98] tracking-tight uppercase"
            style={{ fontFamily: "'Anton', sans-serif" }}>
            {T.headLead} <span className="text-orange-400">{T.headAccent}</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="mt-3 text-[#fefefe]/85 text-base sm:text-lg lg:text-xl max-w-5xl leading-relaxed"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            {T.subhead}
          </motion.p>
        </div>

        {/* Top section: mechanical chain + allocation */}
        <div className="grid grid-cols-2 gap-8 lg:gap-12 shrink-0">

          {/* Left — Mechanical chain */}
          <div className="flex flex-col gap-3">
            <p className="text-orange-400 text-[10px] sm:text-xs tracking-[0.3em] uppercase font-bold"
              style={{ fontFamily: "'Geist Mono', monospace" }}>
              {T.chainLabel}
            </p>
            <div className="flex flex-col gap-3">
              {T.chain.map((c, i) => (
                <motion.div
                  key={c.num}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.08, duration: 0.4 }}
                  className="flex gap-4 items-start"
                >
                  <span className="text-orange-400 text-sm sm:text-base font-bold shrink-0 w-6"
                    style={{ fontFamily: "'Geist Mono', monospace" }}>
                    {c.num}
                  </span>
                  <div className="flex-1">
                    <p className="text-[#fefefe] text-base sm:text-lg leading-tight"
                      style={{ fontFamily: "'Geist Mono', monospace" }}>
                      {c.title}
                    </p>
                    <p className="text-[#fefefe]/60 text-xs sm:text-sm leading-relaxed mt-0.5"
                      style={{ fontFamily: "'Geist Mono', monospace" }}>
                      {c.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right — Allocation + vesting */}
          <div className="flex flex-col gap-3">
            <p className="text-orange-400 text-[10px] sm:text-xs tracking-[0.3em] uppercase font-bold"
              style={{ fontFamily: "'Geist Mono', monospace" }}>
              {T.allocationLabel}
            </p>

            <div className="flex items-center gap-4 lg:gap-6">
              {/* Donut */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="shrink-0 w-[160px] h-[160px] sm:w-[180px] sm:h-[180px] lg:w-[200px] lg:h-[200px]"
              >
                <InteractiveDonut onHover={setHoveredId} />
              </motion.div>

              {/* Legend */}
              <div className="flex-1 grid grid-cols-[1fr_auto] gap-x-3 gap-y-1.5">
                {slices.map((slice, i) => {
                  const isHovered = hoveredId === slice.id;
                  return (
                    <motion.div
                      key={slice.id}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + i * 0.05, duration: 0.3 }}
                      className="contents"
                      style={{ filter: hoveredId && !isHovered ? 'brightness(0.4)' : 'brightness(1)' }}
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <div className="w-2 h-2 rounded-full shrink-0"
                          style={{ backgroundColor: slice.color, boxShadow: isHovered ? `0 0 8px ${slice.color}` : 'none' }} />
                        <span className="text-[#fefefe]/85 text-xs sm:text-sm leading-snug truncate"
                          style={{ fontFamily: "'Geist Mono', monospace" }}>
                          {slice.id}
                        </span>
                      </div>
                      <span className="text-[#fefefe] text-xs sm:text-sm font-bold tabular-nums"
                        style={{ fontFamily: "'Geist Mono', monospace" }}>
                        {`${slice.value}%`}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Vesting */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="pt-2 border-t border-white/[0.08]"
            >
              <p className="text-orange-400 text-[10px] sm:text-xs tracking-[0.3em] uppercase font-bold"
                style={{ fontFamily: "'Geist Mono', monospace" }}>
                {T.vestingLabel}
              </p>
              <p className="text-[#fefefe]/75 text-xs sm:text-sm leading-relaxed mt-1.5"
                style={{ fontFamily: "'Geist Mono', monospace" }}>
                {T.vestingBody}
              </p>
            </motion.div>
          </div>
        </div>

        {/* Investor takeaway */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="shrink-0 text-[#fefefe]/85 text-base sm:text-lg lg:text-2xl leading-snug pt-5 mt-1"
          style={{ fontFamily: "'Geist Mono', monospace", borderTop: '1px solid rgba(255,255,255,0.10)' }}
        >
          {T.takeaway}
        </motion.p>

      </div>
    </div>
  );
}
