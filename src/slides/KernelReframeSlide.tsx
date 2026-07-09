import { motion } from 'framer-motion';

const mono = "'Geist Mono', monospace";
const display = "'Anton', sans-serif";

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
            The opportunity
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[38px] sm:text-[58px] lg:text-[84px] xl:text-[98px] leading-[0.95] tracking-tight uppercase mt-2"
            style={{ fontFamily: display }}
          >
            PROMPTS AREN&apos;T A BOUNDARY.{' '}
            <span className="text-orange-400">KERNELS ARE.</span>
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
              Guardrails in the prompt
            </p>
            <p className="text-[#fefefe] text-2xl lg:text-3xl leading-none uppercase mt-2" style={{ fontFamily: display }}>
              Bypassable
            </p>
            <p className="text-[#fefefe]/70 text-sm lg:text-base leading-snug mt-4" style={{ fontFamily: mono }}>
              A clever patient, a strange edge case, or hallucinated confidence
              will eventually talk its way around a sentence of instructions.
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
              Enforcement in the kernel
            </p>
            <p className="text-[#fefefe] text-2xl lg:text-3xl leading-none uppercase mt-2" style={{ fontFamily: display }}>
              Unbypassable
            </p>
            <p className="text-[#fefefe]/85 text-sm lg:text-base leading-snug mt-4" style={{ fontFamily: mono }}>
              Every regulated action is intercepted in-path by an enforcement
              kernel the agent cannot talk around. It cannot break the kernel.
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
          The villain isn&apos;t the Magic Agent — it&apos;s that its guardrails live in prompt engineering.
          Unicity is the layer the agent <span className="text-orange-400">runs on</span>: bring any agent, any framework, any vendor —{' '}
          <span className="text-orange-400">we make it safe to deploy.</span>
        </motion.p>

      </div>
    </div>
  );
}
