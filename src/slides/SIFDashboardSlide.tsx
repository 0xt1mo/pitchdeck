import { motion } from 'framer-motion';

export function SIFDashboardSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col px-8 sm:px-12 lg:px-20 py-8 sm:py-10 lg:py-12">

        {/* Header */}
        <div className="shrink-0">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-orange-400 text-[10px] sm:text-xs tracking-[0.4em] uppercase"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            Appendix — Security
          </motion.p>
          <motion.h1 initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[28px] sm:text-[40px] lg:text-[52px] leading-[0.95] tracking-tight mt-1"
            style={{ fontFamily: "'Anton', sans-serif" }}>
            SEMANTIC INTERCEPT <span className="text-orange-400">FIREWALL</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="mt-2 text-[#fefefe]/60 text-xs sm:text-sm"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            Policy dashboard — rule management, threat detection, and audit logging. Every event generates a Unicity token for independent audit.
          </motion.p>
        </div>

        {/* Screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex-1 mt-4 rounded-xl overflow-hidden border border-white/[0.08] min-h-0"
        >
          <img
            src="/sif-dashboard.png"
            alt="Semantic Intercept Firewall Dashboard"
            className="w-full h-full object-contain object-top"
          />
        </motion.div>

      </div>
    </div>
  );
}
