import { motion } from 'framer-motion';

const mono = { fontFamily: "'Geist Mono', monospace" };
const anton = { fontFamily: "'Anton', sans-serif" };

const GREEN = '#5ee79a';
const ORANGE = '#f97316';
const AMBER = '#d9a441';

type Status = 'good' | 'bad' | 'half' | 'win';

function Dot({ kind }: { kind: Status }) {
  const common = { width: 15, height: 15, viewBox: '0 0 15 15', className: 'shrink-0 mt-[3px]' };
  if (kind === 'bad')
    return (
      <svg {...common}>
        <circle cx="7.5" cy="7.5" r="5.5" fill="none" stroke="rgba(254,254,254,0.3)" strokeWidth="1.5" />
      </svg>
    );
  if (kind === 'half')
    return (
      <svg {...common}>
        <circle cx="7.5" cy="7.5" r="5.5" fill="none" stroke={AMBER} strokeWidth="1.5" />
        <path d="M7.5 2 A5.5 5.5 0 0 0 7.5 13 Z" fill={AMBER} />
      </svg>
    );
  return (
    <svg {...common}>
      <circle cx="7.5" cy="7.5" r="5.5" fill={kind === 'win' ? ORANGE : GREEN} />
    </svg>
  );
}

type Cell = { s: Status; t: string };
type Row = { prop: string; binance: Cell; uniswap: Cell; unicity: Cell };

const rows: Row[] = [
  { prop: 'Match speed', binance: { s: 'good', t: '<1 ms' }, uniswap: { s: 'bad', t: '12 s block' }, unicity: { s: 'win', t: '<1 ms' } },
  { prop: 'Gas per trade', binance: { s: 'good', t: '$0' }, uniswap: { s: 'bad', t: '$5–$50' }, unicity: { s: 'win', t: '$0' } },
  { prop: 'Self-custody', binance: { s: 'bad', t: 'Exchange-held' }, uniswap: { s: 'good', t: 'Smart contract' }, unicity: { s: 'win', t: 'You hold the keys' } },
  { prop: 'Privacy', binance: { s: 'bad', t: 'Operator sees all' }, uniswap: { s: 'bad', t: 'Fully public' }, unicity: { s: 'win', t: 'Unlinkable' } },
  { prop: 'MEV / sandwich', binance: { s: 'half', t: 'Internal front-run' }, uniswap: { s: 'bad', t: 'Public mempool' }, unicity: { s: 'win', t: 'No mempool' } },
  { prop: 'Settlement', binance: { s: 'bad', t: 'Internal IOU' }, uniswap: { s: 'good', t: 'On-chain' }, unicity: { s: 'win', t: 'Sub-second, trustless' } },
];

function valueClass(s: Status) {
  if (s === 'win') return 'text-orange-400';
  if (s === 'bad') return 'text-[#fefefe]/40';
  if (s === 'half') return '';
  return 'text-[#fefefe]/90';
}

function ValueCell({ cell, last }: { cell: Cell; last?: boolean }) {
  return (
    <div
      className={`relative z-10 flex items-start gap-2.5 px-4 lg:px-6 py-3 lg:py-4 ${last ? '' : 'border-b border-white/[0.07]'}`}
    >
      <Dot kind={cell.s} />
      <span
        className={`text-sm sm:text-base lg:text-lg leading-snug ${valueClass(cell.s)}`}
        style={{ ...mono, color: cell.s === 'half' ? AMBER : undefined }}
      >
        {cell.t}
      </span>
    </div>
  );
}

export function ClobComparisonSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col px-8 sm:px-12 lg:px-20 py-7 sm:py-9 lg:py-10 justify-center gap-5 lg:gap-7">

        {/* Header */}
        <div className="shrink-0">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[30px] sm:text-[46px] lg:text-[60px] leading-[0.95] tracking-tight"
            style={anton}
          >
            <span className="text-[#fefefe]">CEX SPEED. DEX CUSTODY.</span>{' '}
            <span className="text-orange-400">DARK-POOL PRIVACY.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-[#fefefe]/70 text-base sm:text-lg lg:text-xl leading-relaxed mt-3 max-w-5xl"
            style={mono}
          >
            Binance has the first. Uniswap has the second. Neither has the third.{' '}
            <span className="text-orange-400">Unicity has all three.</span>
          </motion.p>
        </div>

        {/* Comparison table */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="shrink-0 relative grid w-full max-w-6xl mx-auto"
          style={{ gridTemplateColumns: '30% 22% 22% 26%' }}
        >
          {/* highlight panel behind Unicity column */}
          <div
            className="absolute inset-y-0 right-0 w-[26%] rounded-2xl border z-0"
            style={{ borderColor: 'rgba(249,115,22,0.45)', background: 'rgba(249,115,22,0.06)' }}
          />

          {/* header row */}
          {['PROPERTY', 'BINANCE', 'UNISWAP', 'UNICITY CLOB'].map((h, i) => (
            <div
              key={h}
              className="relative z-10 px-4 lg:px-6 py-3 border-b border-white/20"
            >
              <span
                className={`text-[11px] sm:text-xs lg:text-sm tracking-[0.25em] uppercase ${i === 3 ? 'text-orange-400' : 'text-[#fefefe]/45'}`}
                style={mono}
              >
                {h}
              </span>
            </div>
          ))}

          {/* data rows */}
          {rows.map((r, ri) => {
            const last = ri === rows.length - 1;
            return [
              <div
                key={`${r.prop}-prop`}
                className={`relative z-10 flex items-center px-4 lg:px-6 py-3 lg:py-4 ${last ? '' : 'border-b border-white/[0.07]'}`}
              >
                <span className="text-[#fefefe] text-base sm:text-lg lg:text-xl font-semibold leading-tight" style={mono}>
                  {r.prop}
                </span>
              </div>,
              <ValueCell key={`${r.prop}-b`} cell={r.binance} last={last} />,
              <ValueCell key={`${r.prop}-u`} cell={r.uniswap} last={last} />,
              <ValueCell key={`${r.prop}-x`} cell={r.unicity} last={last} />,
            ];
          })}
        </motion.div>

      </div>
    </div>
  );
}
