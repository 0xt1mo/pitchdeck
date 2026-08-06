import { motion } from 'framer-motion';
import { tr } from '../../i18n';
import splashVideoUrl from '/kling_20260226_VIDEO_Take_Image_1650_0.mp4';
import unicityLogoUrl from '/UnicityLogo.svg';

// Non-text data: stable row ids + logic tokens ('Yes'/'No'/'Sort of'/'Partial')
// drive cell colouring in CellValue and stay outside the translation map.
const rows = [
  { id: 'system-prompt', values: ['Yes', 'No', 'No', 'No', 'No', 'No'] },
  { id: 'confirmation-prompt', values: ['Yes', 'No', 'No', 'No', 'No', 'No'] },
  { id: 'mcp', values: ['Yes', 'Sort of', 'No', 'No', 'No', 'Partial'] },
  { id: 'policy-engine', values: ['Yes', 'Yes', 'No', 'No', 'Yes', 'No'] },
  { id: 'container-vm', values: ['Yes', 'Yes', 'No', 'No', 'Partial', 'Yes'] },
  { id: 'wasm', values: ['Yes', 'Yes', 'No', 'No', 'No', 'Yes'] },
];

const astridRow = { values: ['Yes', 'Yes', 'Yes', 'Yes', 'Yes', 'Yes'] };

const T = tr({
  en: {
    eyebrow: 'Appendix — Kernel',
    headLead: 'WHY',
    headAccent: 'ASTRID',
    intro: (
      <>
        Existing approaches each solve part of the problem — system prompts control behaviour, containers isolate execution, policy engines enforce rules. But none deliver the full stack: <span className="text-orange-400">multi-user isolation, swappable components, audit, and sandboxing</span> in a single runtime.
        Today's agent frameworks give you a customizable brain with <span className="text-orange-400">the keys to the house</span>. Astrid gives you a pluggable brain in a padded room with a mail slot — the loop is <span className="text-orange-400">isolated from everything it controls</span>. It can't bypass the sandbox, skip the audit, or access tools it hasn't been granted. Swap it without touching anything else, because it communicates through a standard bus, not direct function calls.
      </>
    ),
    approachCol: 'Approach',
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
    astridApproach: 'Astrid',
    cellText: { Yes: 'Yes', No: 'No', 'Sort of': 'Sort of', Partial: 'Partial' } as Record<string, string>,
  },
  pt: {
    eyebrow: 'Apêndice — Kernel',
    headLead: 'POR QUE',
    headAccent: 'ASTRID',
    intro: (
      <>
        Cada abordagem existente resolve parte do problema — system prompts controlam o comportamento, containers isolam a execução, motores de políticas impõem regras. Mas nenhuma entrega a stack completa: <span className="text-orange-400">isolamento multiusuário, componentes substituíveis, auditoria e sandboxing</span> em um único runtime.
        Os frameworks de agentes atuais te dão um cérebro personalizável com <span className="text-orange-400">as chaves da casa</span>. A Astrid te dá um cérebro plugável em uma sala acolchoada com uma fresta de correio — o loop fica <span className="text-orange-400">isolado de tudo que ele controla</span>. Ele não pode burlar o sandbox, pular a auditoria ou acessar ferramentas que não lhe foram concedidas. Troque-o sem tocar em mais nada, porque ele se comunica por um barramento padrão, não por chamadas de função diretas.
      </>
    ),
    approachCol: 'Abordagem',
    columns: [
      'Dev local de usuário único',
      'Runtime compartilhado multiusuário',
      'LLM substituível',
      'Loop agêntico substituível',
      'Trilha de auditoria',
      'Sandboxing de extensões',
    ],
    approaches: [
      'Prompt de sistema',
      'Prompt de confirmação',
      'MCP + isolamento de processo',
      'Motor de políticas (OPA/Cedar)',
      'Container/VM',
      'Plugins WASM',
    ],
    astridApproach: 'Astrid',
    cellText: { Yes: 'Sim', No: 'Não', 'Sort of': 'Mais ou menos', Partial: 'Parcial' } as Record<string, string>,
  },
});

function CellValue({ value }: { value: string }) {
  const text = T.cellText[value] ?? value;
  if (value === 'Yes') return <span className="text-emerald-400 font-bold">{text}</span>;
  if (value === 'No') return <span className="text-red-400/60">{text}</span>;
  return <span className="text-yellow-400/70">{text}</span>;
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
            {T.eyebrow}
          </motion.p>
          <motion.h1 initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[28px] sm:text-[40px] lg:text-[52px] leading-[0.95] tracking-tight mt-1"
            style={{ fontFamily: "'Anton', sans-serif" }}>
            {T.headLead}{' '}<span className="text-orange-400">{T.headAccent}</span>
          </motion.h1>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-[2px] w-32 sm:w-48 bg-gradient-to-r from-orange-500 to-transparent origin-left mt-2" />
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-3 text-[#fefefe]/70 text-xs sm:text-sm leading-relaxed max-w-4xl"
            style={{ fontFamily: "'Geist Mono', monospace" }}>

            {T.intro}
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
                    {T.approachCol}
                  </th>
                  {T.columns.map((col, i) => (
                    <th key={i} className="text-center py-3 px-2 text-[#fefefe]/40 text-[8px] sm:text-[9px] uppercase tracking-wider">
                      {col}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <motion.tr key={row.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.06 }}
                    className="border-b border-white/[0.04]">
                    <td className="py-3 pr-4 text-[#fefefe]/70 text-[10px] sm:text-xs">
                      {T.approaches[i]}
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
                    {T.astridApproach}
                  </td>
                  {astridRow.values.map((val, j) => (
                    <td key={j} className="py-3.5 px-2 text-center">
                      <span className="text-orange-400 text-xs sm:text-sm font-bold">{T.cellText[val] ?? val}</span>
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
