import { motion } from 'framer-motion';
import splashVideoUrl from '/kling_20260226_VIDEO_Take_Image_1650_0.mp4';
import unicityLogoUrl from '/UnicityLogo.svg';

const topModules = [
  { title: 'AGENT SKILLS', items: ['OpenClaw', 'MCP Tools', 'Custom'], color: '#f59e0b' },
  { title: 'PAYMENTS', items: ['Unicity L1', '300M+ TPS', 'Sub-second'], color: '#f97316' },
  { title: 'AGENT ORCHESTRATION', items: ['ReAct', 'Plan-Execute', 'ToT / Debate'], color: '#ec4899' },
];

const bottomModules = [
  { title: 'AGENT SECURITY', items: ['Semantic Firewalls', 'Policy Engine'], color: '#a855f7' },
  { title: 'AGENT NETWORKING', items: ['A2A Messaging', 'Groups', 'Discovery', 'Public/Private Marketplaces'], color: '#6366f1' },
  { title: 'INFERENCE', items: ['Anthropic', 'OpenAI', 'Ollama'], color: '#3b82f6' },
];

const kernelItems = ['Event Bus', 'Sandbox', 'Permissions', 'Audit'];

function ModuleCard({ title, items, color, delay, flip }: {
  title: string; items: string[]; color: string; delay: number; flip?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: flip ? -20 : 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className="flex-1 rounded-lg overflow-hidden"
      style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
    >
      <div className="flex h-full">
        {/* Colored left accent */}
        <div className="w-1 shrink-0" style={{ background: color }} />
        <div className="p-3 sm:p-4">
          <h3
            className="text-sm sm:text-base lg:text-lg mb-2"
            style={{ fontFamily: "'Anton', sans-serif", letterSpacing: '0.06em', color }}
          >
            {title}
          </h3>
          {items.map((item) => (
            <p
              key={item}
              className="text-[#fefefe]/60 text-[11px] sm:text-xs leading-relaxed"
              style={{ fontFamily: "'Geist Mono', monospace" }}
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function SolutionSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      {/* Video background */}
      <div className="fixed inset-0 w-full h-full z-0">
        <video className="w-full h-full object-cover opacity-15" autoPlay muted loop playsInline src={splashVideoUrl} />
        <div className="absolute inset-0 bg-[#060606]/50" />
      </div>

      <div className="relative z-10 h-full flex flex-col px-6 sm:px-10 lg:px-16 py-6 sm:py-8">

        {/* Header */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-orange-400 text-[10px] sm:text-xs tracking-[0.4em] uppercase"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            Our Solution
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[32px] sm:text-[44px] lg:text-[56px] leading-[0.95] tracking-tight mt-1"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            THE UNICITY{' '}
            <span className="text-orange-400">PLATFORM</span>
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-[2px] w-32 sm:w-48 bg-gradient-to-r from-orange-500 to-transparent origin-left mt-2"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-2 text-[#fefefe]/60 text-[11px] sm:text-xs"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            TBD
          </motion.p>
        </div>

        {/* Architecture */}
        <div className="flex-1 flex flex-col justify-center mt-2 min-h-0 max-w-5xl mx-auto w-full relative">

          {/* SVG connection lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" preserveAspectRatio="none">
            <defs>
              <linearGradient id="lineDown" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#f97316" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#f97316" stopOpacity="0.1" />
              </linearGradient>
              <linearGradient id="lineUp" x1="0" y1="1" x2="0" y2="0">
                <stop offset="0%" stopColor="#f97316" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#f97316" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            {/* Top → kernel */}
            {[16.67, 50, 83.33].map((x, i) => (
              <line key={`t${i}`} x1={`${x}%`} y1="22%" x2="50%" y2="42%" stroke="url(#lineDown)" strokeWidth="1" />
            ))}
            {/* Kernel → bottom */}
            {[16.67, 50, 83.33].map((x, i) => (
              <line key={`b${i}`} x1="50%" y1="58%" x2={`${x}%`} y2="78%" stroke="url(#lineUp)" strokeWidth="1" />
            ))}
          </svg>

          {/* Top row */}
          <div className="relative z-10 flex gap-3 sm:gap-4">
            {topModules.map((m, i) => (
              <ModuleCard key={m.title} {...m} delay={0.3 + i * 0.08} />
            ))}
          </div>

          {/* Kernel — orbital core */}
          <div className="relative z-10 flex justify-center my-3 sm:my-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative"
              style={{ width: 'clamp(200px, 24vw, 280px)', height: 'clamp(200px, 24vw, 280px)' }}
            >
              {/* Glow */}
              <div className="absolute inset-[-30%] rounded-full bg-orange-500/[0.07] blur-[60px] pointer-events-none" />

              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border border-orange-500/25" />

              {/* Inner ring */}
              <div className="absolute inset-[12%] rounded-full border-2 border-orange-500/50 bg-gradient-to-br from-orange-500/[0.1] via-orange-900/[0.05] to-transparent" />

              {/* Core content */}
              <div className="absolute inset-[12%] rounded-full flex flex-col items-center justify-center">
                <h3
                  className="text-orange-400 text-lg sm:text-xl lg:text-2xl"
                  style={{ fontFamily: "'Anton', sans-serif", letterSpacing: '0.15em' }}
                >
                  KERNEL
                </h3>
                <p
                  className="text-[#fefefe]/40 text-[9px] sm:text-[10px] mt-0.5 mb-2"
                  style={{ fontFamily: "'Geist Mono', monospace" }}
                >
                  AstridOS
                </p>
                <div className="space-y-0.5">
                  {kernelItems.map((item) => (
                    <p
                      key={item}
                      className="text-[#fefefe]/60 text-[9px] sm:text-[10px] text-center"
                      style={{ fontFamily: "'Geist Mono', monospace" }}
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom row */}
          <div className="relative z-10 flex gap-3 sm:gap-4">
            {bottomModules.map((m, i) => (
              <ModuleCard key={m.title} {...m} delay={0.9 + i * 0.08} flip />
            ))}
          </div>

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
