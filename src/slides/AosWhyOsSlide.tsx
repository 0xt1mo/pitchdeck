import { motion } from 'framer-motion';

const mono = "'Geist Mono', monospace";
const display = "'Anton', sans-serif";

const cols = ['Enforce', 'Isolate', 'Swap', 'Audit', 'Neutral'];

// 2 = full, 1 = partial, 0 = none
const rows: { name: string; cells: number[]; highlight?: boolean }[] = [
  { name: 'System prompt', cells: [0, 0, 0, 0, 0] },
  { name: 'Confirmation prompt', cells: [1, 0, 0, 0, 0] },
  { name: 'MCP + isolation', cells: [0, 1, 0, 0, 0] },
  { name: 'Policy engine', cells: [2, 0, 0, 1, 0] },
  { name: 'Container', cells: [0, 2, 0, 0, 0] },
  { name: 'WASM plugins', cells: [0, 0, 2, 0, 0] },
  { name: 'Unicity AOS', cells: [2, 2, 2, 2, 2], highlight: true },
];

function Cell({ v, highlight }: { v: number; highlight?: boolean }) {
  if (v === 2) return <span className={highlight ? 'text-orange-400' : 'text-[#fefefe]/70'}>●</span>;
  if (v === 1) return <span className="text-[#fefefe]/45">◐</span>;
  return <span className="text-[#fefefe]/15">○</span>;
}

export function AosWhyOsSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-12 lg:px-20 py-9 lg:py-12 gap-6 lg:gap-8">

        {/* Header */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-orange-400 text-xs sm:text-xs lg:text-lg tracking-[0.4em] uppercase font-bold"
            style={{ fontFamily: mono }}
          >
            Appendix
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[34px] sm:text-[52px] lg:text-[70px] xl:text-[80px] leading-[0.95] tracking-tight uppercase mt-2"
            style={{ fontFamily: display }}
          >
            WHY AN <span className="text-orange-400">OS.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="text-[#fefefe]/75 text-sm sm:text-base lg:text-2xl leading-snug mt-3 max-w-5xl"
            style={{ fontFamily: mono }}
          >
            Every partial approach does one job. Only an OS does all of them at once.
          </motion.p>
        </div>

        {/* Matrix */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="shrink-0"
        >
          {/* Column header */}
          <div className="grid grid-cols-[1.6fr_repeat(5,1fr)] gap-2 pb-2">
            <span />
            {cols.map((c) => (
              <span key={c} className="text-[#fefefe]/50 text-xs lg:text-lg tracking-[0.14em] uppercase text-center" style={{ fontFamily: mono }}>
                {c}
              </span>
            ))}
          </div>

          {rows.map((r) => (
            <div
              key={r.name}
              className="grid grid-cols-[1.6fr_repeat(5,1fr)] gap-2 items-center py-2.5"
              style={{
                borderTop: '1px solid rgba(255,255,255,0.08)',
                background: r.highlight ? 'rgba(249,115,22,0.06)' : 'transparent',
              }}
            >
              <span
                className={`text-xs sm:text-sm lg:text-2xl ${r.highlight ? 'text-orange-400 font-bold' : 'text-[#fefefe]/80'}`}
                style={{ fontFamily: mono }}
              >
                {r.name}
              </span>
              {r.cells.map((v, i) => (
                <span key={i} className="text-center text-base lg:text-2xl leading-none">
                  <Cell v={v} highlight={r.highlight} />
                </span>
              ))}
            </div>
          ))}
        </motion.div>

        {/* Legend */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="shrink-0 text-[#fefefe]/40 text-xs lg:text-xl tracking-[0.14em]"
          style={{ fontFamily: mono }}
        >
          ● full · ◐ partial · ○ none
        </motion.p>

      </div>
    </div>
  );
}
