import { motion } from 'framer-motion';

export function AgentSphereDashboardSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col px-6 sm:px-8 lg:px-10 py-8 sm:py-10 lg:py-12 justify-center gap-5">

        {/* Header */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-orange-400 text-sm tracking-[0.4em] uppercase"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            The Enterprise Console
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[24px] sm:text-[32px] lg:text-[40px] leading-[1.05] tracking-tight mt-1"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            ONE PANE OF GLASS FOR <span className="text-orange-400">EVERY AGENT, EVERY POLICY, EVERY PAYMENT</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-3 text-[#fefefe]/85 text-sm sm:text-base lg:text-lg max-w-5xl leading-relaxed"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            Identity, delegation, policy, settlement and audit — unified into a single operator surface.
            Provision agents, set guardrails, monitor traffic across protocols, and reconcile payments —
            without standing up four separate stacks.
          </motion.p>
        </div>

        {/* Dashboard screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="rounded-xl overflow-hidden border border-white/[0.08] shrink-0 mx-auto h-[460px] lg:h-[520px] max-w-[1200px] w-full"
        >
          <img
            src="/agentsphere-dashboard.jpeg"
            alt="Agent Sphere overview dashboard"
            className="w-full h-full object-contain object-top"
          />
        </motion.div>

      </div>
    </div>
  );
}
