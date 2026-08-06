import { motion } from 'framer-motion';
import { tr } from '../../i18n';
import splashVideoUrl from '/kling_20260226_VIDEO_Take_Image_1650_0.mp4';
import unicityLogoUrl from '/UnicityLogo.svg';

// Non-text data: stable ids + win flags stay outside; display cells in T.
const rows = [
  { id: 'architecture', win: true },
  { id: 'programmability', win: false },
  { id: 'max-tps', win: true },
  { id: 'private-tps', win: true },
  { id: 'finality', win: true },
  { id: 'fees', win: true },
];

const T = tr({
  en: {
    eyebrow: 'Appendix — Comparison',
    headLead: 'SOLANA VS',
    headAccent: 'UNICITY',
    subHead: (
      <>
        Solana is the highest throughput shared-ledger blockchain — and still fundamentally limited by its architecture.
        Unicity eliminates the shared ledger entirely: tokens are <span className="text-orange-400">self-authenticating bearer instruments</span> that
        move P2P across the internet, with the chain providing only double-spend protection.
        The result is orders-of-magnitude improvements in throughput, finality, privacy and cost.
      </>
    ),
    categoryCol: 'Category',
    solanaCol: 'Solana',
    unicityCol: 'Unicity',
    rows: [
      { category: 'Architecture', solana: 'Shared ledger', unicity: 'No ledger — bearer tokens' },
      { category: 'Programmability', solana: 'Smart contracts', unicity: 'Agents' },
      { category: 'Max TPS', solana: '~65,000', unicity: '300M+' },
      { category: 'Private TPS', solana: '~10-100 (coming 2026)', unicity: '300M+' },
      { category: 'Finality', solana: '12.8 seconds', unicity: '1 second' },
      { category: 'Fees', solana: '~$0.00025 (variable)', unicity: '$0.00000001 (fixed)' },
    ],
  },
  pt: {
    eyebrow: 'Apêndice — Comparação',
    headLead: 'SOLANA VS',
    headAccent: 'UNICITY',
    subHead: (
      <>
        Solana é a blockchain de ledger compartilhado com maior throughput — e ainda assim fundamentalmente limitada por sua arquitetura.
        A Unicity elimina o ledger compartilhado por completo: os tokens são <span className="text-orange-400">instrumentos ao portador autoautenticáveis</span> que
        se movem P2P pela internet, com a cadeia fornecendo apenas proteção contra gasto duplo.
        O resultado são melhorias de ordens de magnitude em throughput, finalidade, privacidade e custo.
      </>
    ),
    categoryCol: 'Categoria',
    solanaCol: 'Solana',
    unicityCol: 'Unicity',
    rows: [
      { category: 'Arquitetura', solana: 'Ledger compartilhado', unicity: 'Sem ledger — bearer tokens' },
      { category: 'Programabilidade', solana: 'Smart contracts', unicity: 'Agentes' },
      { category: 'TPS máx.', solana: '~65,000', unicity: '300M+' },
      { category: 'TPS privado', solana: '~10-100 (chega em 2026)', unicity: '300M+' },
      { category: 'Finalidade', solana: '12.8 segundos', unicity: '1 segundo' },
      { category: 'Taxas', solana: '~$0.00025 (variável)', unicity: '$0.00000001 (fixo)' },
    ],
  },
});

export function ComparisonSlide() {
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
            {T.eyebrow}
          </motion.p>
          <motion.h1 initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[32px] sm:text-[44px] lg:text-[56px] leading-[0.95] tracking-tight mt-1"
            style={{ fontFamily: "'Anton', sans-serif" }}>
            {T.headLead}{' '}
            <span className="text-orange-400">{T.headAccent}</span>
          </motion.h1>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-[2px] w-32 sm:w-48 bg-gradient-to-r from-orange-500 to-transparent origin-left mt-2" />
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-3 text-[#fefefe]/70 text-xs sm:text-sm leading-relaxed max-w-3xl"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            {T.subHead}
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
                    {T.categoryCol}
                  </th>
                  <th className="text-center py-3 px-4 text-[10px] sm:text-xs uppercase tracking-wider w-[39%]"
                    style={{ color: '#a855f7' }}>
                    {T.solanaCol}
                  </th>
                  <th className="text-center py-3 pl-4 text-[10px] sm:text-xs uppercase tracking-wider w-[39%]"
                    style={{ color: '#f97316' }}>
                    {T.unicityCol}
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <motion.tr key={row.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.08 }}
                    className="border-b border-white/[0.04]">
                    <td className="py-3.5 pr-4 text-[#fefefe]/90 text-xs sm:text-sm font-bold">
                      {T.rows[i].category}
                    </td>
                    <td className="py-3.5 px-4 text-[#fefefe]/60 text-xs sm:text-sm text-center">
                      {T.rows[i].solana}
                    </td>
                    <td className="py-3.5 pl-4 text-center">
                      <span className={`text-xs sm:text-sm font-bold ${row.win ? 'text-orange-400' : 'text-[#fefefe]/80'}`}>
                        {T.rows[i].unicity}
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
