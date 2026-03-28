import { motion } from 'framer-motion';
import splashVideoUrl from '/kling_20260226_VIDEO_Take_Image_1650_0.mp4';
import unicityLogoUrl from '/UnicityLogo.svg';

const columns = [
  'Single user local dev',
  'Multi-user shared runtime',
  'Swappable LLM',
  'Swappable agentic loop',
  'Audit trail',
  'Extension sandboxing',
];

const rows = [
  { approach: 'System prompt', values: ['Yes', 'No', 'No', 'No', 'No', 'No'] },
  { approach: 'Confirmation prompt', values: ['Yes', 'No', 'No', 'No', 'No', 'No'] },
  { approach: 'MCP + process isolation', values: ['Yes', 'Sort of', 'No', 'No', 'No', 'Partial'] },
  { approach: 'Policy engine (OPA/Cedar)', values: ['Yes', 'Yes', 'No', 'No', 'Yes', 'No'] },
  { approach: 'Container/VM', values: ['Yes', 'Yes', 'No', 'No', 'Partial', 'Yes'] },
  { approach: 'WASM plugins', values: ['Yes', 'Yes', 'No', 'No', 'No', 'Yes'] },
];

const astridRow = { approach: 'Astrid', values: ['Yes', 'Yes', 'Yes', 'Yes', 'Yes', 'Yes'] };

function CellValue({ value }: { value: string }) {
  if (value === 'Yes') return <span className="text-emerald-400 font-bold">{value}</span>;
  if (value === 'No') return <span className="text-red-400/60">{value}</span>;
  return <span className="text-yellow-400/70">{value}</span>;
}

export function AstridComparisonSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-y-auto">
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
        <video className="w-full h-full object-cover opacity-15" autoPlay muted loop playsInline src={splashVideoUrl} />
        <div className="absolute inset-0 bg-[#060606]/50" />
      </div>

      <div className="relative z-10 h-full flex flex-col px-6 sm:px-10 lg:px-16 py-6 sm:py-8">

        {/* Header */}
        <div className="shrink-0">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-orange-400 text-[10px] sm:text-xs tracking-[0.4em] uppercase"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            Appendix — Kernel
          </motion.p>
          <motion.h1 initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[28px] sm:text-[40px] lg:text-[52px] leading-[0.95] tracking-tight mt-1"
            style={{ fontFamily: "'Anton', sans-serif" }}>
            WHY{' '}<span className="text-orange-400">ASTRID OS</span>
          </motion.h1>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-[2px] w-32 sm:w-48 bg-gradient-to-r from-orange-500 to-transparent origin-left mt-2" />
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-3 text-[#fefefe]/70 text-xs sm:text-sm leading-relaxed max-w-4xl"
            style={{ fontFamily: "'Geist Mono', monospace" }}>

            Existing approaches each solve part of the problem — system prompts control behaviour, containers isolate execution, policy engines enforce rules. But none deliver the full stack: <span className="text-orange-400">multi-user isolation, swappable components, audit, and sandboxing</span> in a single runtime.
            Today's agent frameworks give you a customizable brain with <span className="text-orange-400">the keys to the house</span>. Astrid gives you a pluggable brain in a padded room with a mail slot — the loop is <span className="text-orange-400">isolated from everything it controls</span>. It can't bypass the sandbox, skip the audit, or access tools it hasn't been granted. Swap it without touching anything else, because it communicates through a standard bus, not direct function calls.
          </motion.p>
        </div>

        {/* Table */}
        <div className="flex-1 flex items-center justify-center mt-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="w-full max-w-4xl">
            <table className="w-full border-collapse" style={{ fontFamily: "'Geist Mono', monospace" }}>
              <thead>
                <tr className="border-b border-white/[0.08]">
                  <th className="text-left py-3 pr-4 text-[#fefefe]/50 text-[9px] sm:text-[10px] uppercase tracking-wider w-[18%]">
                    Approach
                  </th>
                  {columns.map((col) => (
                    <th key={col} className="text-center py-3 px-2 text-[#fefefe]/40 text-[8px] sm:text-[9px] uppercase tracking-wider">
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <motion.tr key={row.approach}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.06 }}
                    className="border-b border-white/[0.04]">
                    <td className="py-3 pr-4 text-[#fefefe]/70 text-[10px] sm:text-xs">
                      {row.approach}
                    </td>
                    {row.values.map((val, j) => (
                      <td key={j} className="py-3 px-2 text-[10px] sm:text-xs text-center">
                        <CellValue value={val} />
                      </td>
                    ))}
                  </motion.tr>
                ))}

                {/* Astrid row — highlighted */}
                <motion.tr
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9, duration: 0.4 }}
                  className="border-t-2 border-orange-500/30 bg-orange-500/[0.06]">
                  <td className="py-3.5 pr-4 text-orange-400 text-xs sm:text-sm font-bold">
                    {astridRow.approach}
                  </td>
                  {astridRow.values.map((val, j) => (
                    <td key={j} className="py-3.5 px-2 text-center">
                      <span className="text-orange-400 text-xs sm:text-sm font-bold">{val}</span>
                    </td>
                  ))}
                </motion.tr>
              </tbody>
            </table>
          </motion.div>
        </div>

        {/* Logo */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
          className="shrink-0 mt-3 flex justify-end">
          <img src={unicityLogoUrl} alt="Unicity" className="h-5 opacity-60" />
        </motion.div>

      </div>
    </div>
  );
}
