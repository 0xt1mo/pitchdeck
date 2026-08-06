import { motion } from 'framer-motion';
import { tr } from '../i18n';

const ANTON = "'Anton', sans-serif";
const MONO = "'Geist Mono', monospace";

const T = tr({
  en: {
    chain: [
      {
        n: '01',
        title: 'Access',
        body: 'Every agent carries prepaid gas for verifiable state proofs and settlement — monthly bundles, burst to 1 TPS.',
      },
      {
        n: '02',
        title: 'Burn',
        body: 'Gas is fiat-quoted, UCT-settled, and burned.',
      },
      {
        n: '03',
        title: 'Operators',
        body: 'Oracle operators stake to run nodes, paid from a declining issuance tail (5% → 2%), proportional to proofs served.',
      },
    ],
    allocLabels: ['Foundation', 'Grants', 'Investors', 'Team', 'Community', 'Liquidity'],
    donutGenesis: 'GENESIS',
    headLead: 'Token demand scales with',
    headAccent: 'agent count',
    subhead: (
      <>
        Every agent needs prepaid gas for verifiable state proofs and settlement. The token is <span className="text-orange-400">gas, not a means of payment</span> — demand is a function of agents, not speculation.
      </>
    ),
    chainLabel: 'The mechanical chain',
    allocLabel: 'Allocation · Genesis 10B',
    allocNote: 'Uncapped supply — 5% → 2% inflation tail funds validators. Cliffs and linear vesting for team and investors.',
    takeaway: (
      <>
        Token demand is a function of <span className="text-orange-400 font-bold">agent count</span> — every agent added burns gas and locks operator stake. More agents → more burned and staked.
      </>
    ),
  },
  pt: {
    chain: [
      {
        n: '01',
        title: 'Acesso',
        body: 'Todo agente carrega gas pré-pago para provas de estado verificáveis e liquidação — pacotes mensais, pico de 1 TPS.',
      },
      {
        n: '02',
        title: 'Queima',
        body: 'O gas é cotado em fiat, liquidado em UCT e queimado.',
      },
      {
        n: '03',
        title: 'Operadores',
        body: 'Operadores de Oracle fazem stake para rodar nós, pagos por uma cauda de emissão decrescente (5% → 2%), proporcional às provas servidas.',
      },
    ],
    allocLabels: ['Fundação', 'Grants', 'Investidores', 'Time', 'Comunidade', 'Liquidez'],
    donutGenesis: 'GÊNESE',
    headLead: 'A demanda por token escala com',
    headAccent: 'a contagem de agentes',
    subhead: (
      <>
        Todo agente precisa de gas pré-pago para provas de estado verificáveis e liquidação. O token é <span className="text-orange-400">gas, não um meio de pagamento</span> — a demanda é função dos agentes, não da especulação.
      </>
    ),
    chainLabel: 'A cadeia mecânica',
    allocLabel: 'Alocação · Gênese 10B',
    allocNote: 'Oferta sem teto — cauda de inflação de 5% → 2% financia validadores. Cliffs e vesting linear para time e investidores.',
    takeaway: (
      <>
        A demanda por token é função da <span className="text-orange-400 font-bold">contagem de agentes</span> — cada agente adicionado queima gas e trava o stake do operador. Mais agentes → mais queimado e travado.
      </>
    ),
  },
});

const alloc = [
  { label: T.allocLabels[0], pct: 23, color: '#f97316' },
  { label: T.allocLabels[1], pct: 23, color: '#fbbf24' },
  { label: T.allocLabels[2], pct: 20, color: '#fb923c' },
  { label: T.allocLabels[3], pct: 15, color: '#9ca3af' },
  { label: T.allocLabels[4], pct: 15, color: '#6b7280' },
  { label: T.allocLabels[5], pct: 4, color: '#4b5563' },
];

function AllocationDonut() {
  const R = 56;
  const C = 2 * Math.PI * R;
  let acc = 0;
  return (
    <svg viewBox="0 0 150 150" className="w-[150px] h-[150px] lg:w-[170px] lg:h-[170px] shrink-0">
      {alloc.map((a) => {
        const dash = (a.pct / 100) * C;
        const offset = -(acc / 100) * C;
        acc += a.pct;
        return (
          <circle
            key={a.label}
            cx="75" cy="75" r={R}
            fill="none" stroke={a.color} strokeWidth="20"
            strokeDasharray={`${dash} ${C - dash}`}
            strokeDashoffset={offset}
            transform="rotate(-90 75 75)"
          />
        );
      })}
      <text x="75" y="71" textAnchor="middle" fill="#fefefe" fontFamily={ANTON} fontSize="22">10B</text>
      <text x="75" y="88" textAnchor="middle" fill="rgba(254,254,254,0.5)" fontFamily={MONO} fontSize="8" letterSpacing="1">{T.donutGenesis}</text>
    </svg>
  );
}

export function TokenRebuildSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-10 lg:py-14 gap-6 lg:gap-8">

        {/* Header */}
        <div className="shrink-0">
          <motion.h1
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#fefefe] text-[28px] sm:text-[40px] lg:text-[52px] leading-[0.98] tracking-tight uppercase"
            style={{ fontFamily: ANTON }}
          >
            {T.headLead} <span className="text-orange-400">{T.headAccent}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-3 text-[#fefefe]/75 text-base lg:text-xl max-w-5xl leading-relaxed"
            style={{ fontFamily: MONO }}
          >
            {T.subhead}
          </motion.p>
        </div>

        {/* Two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-8 lg:gap-14 items-start">

          {/* Left — mechanical chain */}
          <motion.div
            initial={{ opacity: 0, x: -14 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.32, duration: 0.5 }}
          >
            <p className="text-orange-400 text-xs lg:text-sm tracking-[0.25em] uppercase font-bold mb-4" style={{ fontFamily: MONO }}>
              {T.chainLabel}
            </p>
            <div className="flex flex-col gap-4">
              {T.chain.map((c) => (
                <div key={c.n} className="border-l-2 border-orange-500 pl-4">
                  <p className="text-[#fefefe] text-base lg:text-lg font-bold" style={{ fontFamily: MONO }}>
                    <span className="text-orange-400">{c.n}</span> {c.title}
                  </p>
                  <p className="text-[#fefefe]/65 text-sm lg:text-base leading-snug mt-1" style={{ fontFamily: MONO }}>
                    {c.body}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — allocation */}
          <motion.div
            initial={{ opacity: 0, x: 14 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.42, duration: 0.5 }}
          >
            <p className="text-orange-400 text-xs lg:text-sm tracking-[0.25em] uppercase font-bold mb-4" style={{ fontFamily: MONO }}>
              {T.allocLabel}
            </p>
            <div className="flex items-center gap-6 lg:gap-8">
              <AllocationDonut />
              <div className="flex flex-col gap-2">
                {alloc.map((a) => (
                  <div key={a.label} className="flex items-center gap-2.5">
                    <span className="w-3 h-3 rounded-sm shrink-0" style={{ background: a.color }} />
                    <span className="text-[#fefefe]/85 text-sm lg:text-base" style={{ fontFamily: MONO }}>
                      {a.label} <span className="text-[#fefefe]/50">{a.pct}%</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <p className="text-[#fefefe]/45 text-xs lg:text-sm leading-snug mt-4 max-w-md" style={{ fontFamily: MONO }}>
              {T.allocNote}
            </p>
          </motion.div>
        </div>

        {/* Takeaway */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="shrink-0 text-[#fefefe]/85 text-base sm:text-lg lg:text-xl leading-snug pt-4"
          style={{ fontFamily: MONO, borderTop: '1px solid rgba(255,255,255,0.10)' }}
        >
          {T.takeaway}
        </motion.p>

      </div>
    </div>
  );
}
