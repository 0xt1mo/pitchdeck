import { motion } from 'framer-motion';
import splashVideoUrl from '/kling_20260226_VIDEO_Take_Image_1650_0.mp4';
import unicityLogoUrl from '/UnicityLogo.svg';

const rows = [
  { category: 'Architecture', solana: 'Shared ledger', unicity: 'No ledger — bearer tokens', win: true },
  { category: 'Programmability', solana: 'Smart contracts', unicity: 'Agents', win: false },
  { category: 'Max TPS', solana: '~65,000', unicity: '300M+', win: true },
  { category: 'Private TPS', solana: '~10-100 (coming 2026)', unicity: '300M+', win: true },
  { category: 'Finality', solana: '12.8 seconds', unicity: '1 second', win: true },
  { category: 'Fees', solana: '~$0.00025 (variable)', unicity: '$0.00000001 (fixed)', win: true },
];

export function ComparisonSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="fixed inset-0 w-full h-full z-0">
        <video className="w-full h-full object-cover opacity-15" autoPlay muted loop playsInline src={splashVideoUrl} />
        <div className="absolute inset-0 bg-[#060606]/50" />
      </div>

      <div className="relative z-10 h-full flex flex-col px-6 sm:px-10 lg:px-16 py-6 sm:py-8">

        {/* Header */}
        <div className="shrink-0">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-orange-400 text-[10px] sm:text-xs tracking-[0.4em] uppercase"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            Appendix — Comparison
          </motion.p>
          <motion.h1 initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[32px] sm:text-[44px] lg:text-[56px] leading-[0.95] tracking-tight mt-1"
            style={{ fontFamily: "'Anton', sans-serif" }}>
            SOLANA VS{' '}
            <span className="text-orange-400">UNICITY</span>
          </motion.h1>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-[2px] w-32 sm:w-48 bg-gradient-to-r from-orange-500 to-transparent origin-left mt-2" />
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-3 text-[#fefefe]/70 text-xs sm:text-sm leading-relaxed max-w-3xl"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            Solana is the highest throughput shared-ledger blockchain — and still fundamentally limited by its architecture.
            Unicity eliminates the shared ledger entirely: tokens are <span className="text-orange-400">self-authenticating bearer instruments</span> that
            move P2P across the internet, with the chain providing only double-spend protection.
            The result is orders-of-magnitude improvements in throughput, finality, privacy and cost.
          </motion.p>
        </div>

        {/* Table */}
        <div className="flex-1 flex items-center justify-center mt-4">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="w-full max-w-3xl">
            <table className="w-full border-collapse" style={{ fontFamily: "'Geist Mono', monospace" }}>
              <thead>
                <tr className="border-b border-white/[0.08]">
                  <th className="text-left py-3 pr-4 text-[#fefefe]/50 text-[10px] sm:text-xs uppercase tracking-wider w-[22%]">
                    Category
                  </th>
                  <th className="text-center py-3 px-4 text-[10px] sm:text-xs uppercase tracking-wider w-[39%]"
                    style={{ color: '#a855f7' }}>
                    Solana
                  </th>
                  <th className="text-center py-3 pl-4 text-[10px] sm:text-xs uppercase tracking-wider w-[39%]"
                    style={{ color: '#f97316' }}>
                    Unicity
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <motion.tr key={row.category}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.08 }}
                    className="border-b border-white/[0.04]">
                    <td className="py-3.5 pr-4 text-[#fefefe]/90 text-xs sm:text-sm font-bold">
                      {row.category}
                    </td>
                    <td className="py-3.5 px-4 text-[#fefefe]/60 text-xs sm:text-sm text-center">
                      {row.solana}
                    </td>
                    <td className="py-3.5 pl-4 text-center">
                      <span className={`text-xs sm:text-sm font-bold ${row.win ? 'text-orange-400' : 'text-[#fefefe]/80'}`}>
                        {row.unicity}
                      </span>
                      {row.win && (
                        <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 ml-2 align-middle" />
                      )}
                    </td>
                  </motion.tr>
                ))}
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
