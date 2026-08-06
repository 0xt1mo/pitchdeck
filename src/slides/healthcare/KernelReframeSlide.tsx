import { motion } from 'framer-motion';
import { tr } from '../../i18n';

const mono = "'Geist Mono', monospace";
const display = "'Anton', sans-serif";

const T = tr({
  en: {
    eyebrow: 'The opportunity',
    headLead: "PROMPTS AREN'T A BOUNDARY.",
    headAccent: 'KERNELS ARE.',
    promptTag: 'Guardrails in the prompt',
    promptTitle: 'Bypassable',
    promptBody: 'A clever patient, a strange edge case, or hallucinated confidence will eventually talk its way around a sentence of instructions.',
    kernelTag: 'Enforcement in the kernel',
    kernelTitle: 'Unbypassable',
    kernelBody: 'Every regulated action is intercepted in-path by an enforcement kernel the agent cannot talk around. It cannot break the kernel.',
    pivot: (
      <>
        The villain isn't the Magic Agent — it's that its guardrails live in prompt engineering.
        Unicity is the layer the agent <span className="text-orange-400">runs on</span>: bring any agent, any framework, any vendor —{' '}
        <span className="text-orange-400">we make it safe to deploy.</span>
      </>
    ),
  },
  pt: {
    eyebrow: 'A oportunidade',
    headLead: 'PROMPTS NÃO SÃO UM LIMITE.',
    headAccent: 'KERNELS SÃO.',
    promptTag: 'Proteções no prompt',
    promptTitle: 'Contornável',
    promptBody: 'Um paciente astuto, um caso extremo estranho ou uma certeza alucinada acabará contornando uma frase de instruções.',
    kernelTag: 'Aplicação no kernel',
    kernelTitle: 'Incontornável',
    kernelBody: 'Toda ação regulada é interceptada no caminho por um kernel de aplicação que o agente não consegue contornar. Ele não consegue quebrar o kernel.',
    pivot: (
      <>
        O vilão não é o Agente Mágico — é que suas proteções vivem na engenharia de prompt.
        A Unicity é a camada sobre a qual o agente <span className="text-orange-400">roda</span>: traga qualquer agente, qualquer framework, qualquer fornecedor —{' '}
        <span className="text-orange-400">nós o tornamos seguro para implantar.</span>
      </>
    ),
  },
});

export function KernelReframeSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">

      <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-12 lg:px-20 py-10 lg:py-12 gap-6 lg:gap-9">

        {/* Header */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-orange-400 text-[10px] sm:text-xs lg:text-sm tracking-[0.4em] uppercase font-bold"
            style={{ fontFamily: mono }}
          >
            {T.eyebrow}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[38px] sm:text-[58px] lg:text-[84px] xl:text-[98px] leading-[0.95] tracking-tight uppercase mt-2"
            style={{ fontFamily: display }}
          >
            {T.headLead}{' '}
            <span className="text-orange-400">{T.headAccent}</span>
          </motion.h1>
        </div>

        {/* Contrast: prompt vs kernel */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 shrink-0">

          {/* Prompt */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="rounded-2xl border border-[#fefefe]/12 bg-[#fefefe]/[0.02] p-6 lg:p-7"
          >
            <p className="text-[#fefefe]/45 text-xs lg:text-sm tracking-[0.2em] uppercase" style={{ fontFamily: mono }}>
              {T.promptTag}
            </p>
            <p className="text-[#fefefe] text-2xl lg:text-3xl leading-none uppercase mt-2" style={{ fontFamily: display }}>
              {T.promptTitle}
            </p>
            <p className="text-[#fefefe]/70 text-sm lg:text-base leading-snug mt-4" style={{ fontFamily: mono }}>
              {T.promptBody}
            </p>
          </motion.div>

          {/* Kernel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="rounded-2xl border-2 border-orange-500 bg-orange-500/[0.06] p-6 lg:p-7"
            style={{ boxShadow: '0 0 28px rgba(249,115,22,0.15)' }}
          >
            <p className="text-orange-400 text-xs lg:text-sm tracking-[0.2em] uppercase" style={{ fontFamily: mono }}>
              {T.kernelTag}
            </p>
            <p className="text-[#fefefe] text-2xl lg:text-3xl leading-none uppercase mt-2" style={{ fontFamily: display }}>
              {T.kernelTitle}
            </p>
            <p className="text-[#fefefe]/85 text-sm lg:text-base leading-snug mt-4" style={{ fontFamily: mono }}>
              {T.kernelBody}
            </p>
          </motion.div>
        </div>

        {/* Pivot line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65, duration: 0.6 }}
          className="shrink-0 text-[#fefefe]/85 text-base sm:text-lg lg:text-2xl leading-snug max-w-6xl"
          style={{ fontFamily: mono }}
        >
          {T.pivot}
        </motion.p>

      </div>
    </div>
  );
}
