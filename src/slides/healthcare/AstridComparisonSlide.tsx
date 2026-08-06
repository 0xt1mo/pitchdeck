import { motion } from 'framer-motion';
import { tr } from '../../i18n';

// Values are semantic flags used for cell coloring — kept as stable English keys.
const rows = [
  { values: ['Yes', 'No', 'No', 'No', 'No', 'No'] },
  { values: ['Yes', 'No', 'No', 'No', 'No', 'No'] },
  { values: ['Yes', 'Sort of', 'No', 'No', 'No', 'Partial'] },
  { values: ['Yes', 'Yes', 'No', 'No', 'Yes', 'No'] },
  { values: ['Yes', 'Yes', 'No', 'No', 'Partial', 'Yes'] },
  { values: ['Yes', 'Yes', 'No', 'No', 'No', 'Yes'] },
];

const astridRow = { approach: 'AOS', values: ['Yes', 'Yes', 'Yes', 'Yes', 'Yes', 'Yes'] };

const T = tr({
  en: {
    eyebrow: 'Appendix — Kernel',
    headLead: 'WHY',
    approachHeader: 'Approach',
    columns: [
      'Single user local dev',
      'Multi-user shared runtime',
      'Swappable LLM',
      'Swappable agentic loop',
      'Audit trail',
      'Extension sandboxing',
    ],
    approaches: [
      'System prompt',
      'Confirmation prompt',
      'MCP + process isolation',
      'Policy engine (OPA/Cedar)',
      'Container/VM',
      'WASM plugins',
    ],
    cellLabels: { Yes: 'Yes', No: 'No', 'Sort of': 'Sort of', Partial: 'Partial' } as Record<string, string>,
    intro: (
      <>
        Existing approaches each solve part of the problem — system prompts control behaviour, containers isolate execution, policy engines enforce rules. But none deliver the full stack:{' '}
        <span className="text-orange-400 font-bold">multi-user isolation, swappable components, audit, and sandboxing</span>{' '}
        in a single runtime. AOS gives you a pluggable brain in a padded room with a mail slot — the loop is{' '}
        <span className="text-orange-400 font-bold">isolated from everything it controls</span>.
        It can't bypass the sandbox, skip the audit, or access tools it hasn't been granted.
      </>
    ),
  },
  pt: {
    eyebrow: 'Apêndice — Kernel',
    headLead: 'POR QUE',
    approachHeader: 'Abordagem',
    columns: [
      'Dev local monousuário',
      'Runtime compartilhado multiusuário',
      'LLM intercambiável',
      'Loop agêntico intercambiável',
      'Trilha de auditoria',
      'Sandbox de extensões',
    ],
    approaches: [
      'Prompt de sistema',
      'Prompt de confirmação',
      'MCP + isolamento de processo',
      'Motor de políticas (OPA/Cedar)',
      'Contêiner/VM',
      'Plugins WASM',
    ],
    cellLabels: { Yes: 'Sim', No: 'Não', 'Sort of': 'Mais ou menos', Partial: 'Parcial' } as Record<string, string>,
    intro: (
      <>
        As abordagens existentes resolvem cada uma parte do problema — prompts de sistema controlam o comportamento, contêineres isolam a execução, motores de políticas impõem regras. Mas nenhuma entrega a pilha completa:{' '}
        <span className="text-orange-400 font-bold">isolamento multiusuário, componentes intercambiáveis, auditoria e sandboxing</span>{' '}
        em um único runtime. O AOS oferece um cérebro plugável em uma sala acolchoada com uma fresta de correio — o loop é{' '}
        <span className="text-orange-400 font-bold">isolado de tudo que ele controla</span>.
        Ele não pode contornar o sandbox, pular a auditoria ou acessar ferramentas que não lhe foram concedidas.
      </>
    ),
  },
});

function CellValue({ value }: { value: string }) {
  const label = T.cellLabels[value] ?? value;
  if (value === 'Yes') return <span className="text-emerald-400 font-bold">{label}</span>;
  if (value === 'No') return <span className="text-red-400/55">{label}</span>;
  return <span className="text-yellow-400/75">{label}</span>;
}

export function AstridComparisonSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">

      {/* Background grid texture — match the rest of the deck */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 h-full flex flex-col px-8 sm:px-12 lg:px-16 pt-8 pb-14 lg:pt-10 lg:pb-16 justify-center gap-6 lg:gap-8">

        {/* Header */}
        <div className="shrink-0">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-orange-400 text-[10px] sm:text-xs lg:text-sm tracking-[0.4em] uppercase font-bold"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            {T.eyebrow}
          </motion.p>
          <motion.h1 initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[36px] sm:text-[54px] lg:text-[72px] xl:text-[84px] leading-[0.95] tracking-tight uppercase mt-2"
            style={{ fontFamily: "'Anton', sans-serif" }}>
            {T.headLead} <span className="text-orange-400">AOS</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-4 lg:mt-5 text-[#fefefe]/80 text-xs sm:text-sm lg:text-base leading-[1.55]"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            {T.intro}
          </motion.p>
        </div>

        {/* Table — full width */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="shrink-0 w-full">
          <div
            className="rounded-xl overflow-hidden"
            style={{ border: '1px solid rgba(255,255,255,0.08)' }}
          >
            <table className="w-full border-collapse" style={{ fontFamily: "'Geist Mono', monospace" }}>
              <thead>
                <tr style={{ background: 'rgba(255,255,255,0.02)' }}>
                  <th className="text-left py-4 pl-5 pr-4 text-[#fefefe]/55 text-[10px] sm:text-[11px] lg:text-xs uppercase tracking-[0.18em] font-bold w-[22%]">
                    {T.approachHeader}
                  </th>
                  {T.columns.map((col, ci) => (
                    <th key={ci} className="text-center py-4 px-2 text-[#fefefe]/45 text-[9px] sm:text-[10px] lg:text-[11px] uppercase tracking-[0.14em] font-bold">
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <motion.tr key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.06 }}
                    style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                    <td className="py-3.5 pl-5 pr-4 text-[#fefefe]/80 text-[11px] sm:text-xs lg:text-sm">
                      {T.approaches[i]}
                    </td>
                    {row.values.map((val, j) => (
                      <td key={j} className="py-3.5 px-2 text-[11px] sm:text-xs lg:text-sm text-center">
                        <CellValue value={val} />
                      </td>
                    ))}
                  </motion.tr>
                ))}

                {/* AOS row — strongly highlighted */}
                <motion.tr
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9, duration: 0.4 }}
                  style={{
                    background: 'linear-gradient(90deg, rgba(249,115,22,0.14) 0%, rgba(249,115,22,0.06) 100%)',
                    borderTop: '2px solid rgba(249,115,22,0.55)',
                  }}>
                  <td
                    className="py-4 pl-5 pr-4 text-orange-400 text-sm sm:text-base lg:text-lg font-bold tracking-[0.1em]"
                    style={{ fontFamily: "'Anton', sans-serif", letterSpacing: '0.06em' }}
                  >
                    AOS
                  </td>
                  {astridRow.values.map((val, j) => (
                    <td key={j} className="py-4 px-2 text-center">
                      <span className="text-orange-400 text-xs sm:text-sm lg:text-base font-bold">{T.cellLabels[val] ?? val}</span>
                    </td>
                  ))}
                </motion.tr>
              </tbody>
            </table>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
