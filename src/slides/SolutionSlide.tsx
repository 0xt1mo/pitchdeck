import { motion } from 'framer-motion';
import splashVideoUrl from '/kling_20260226_VIDEO_Take_Image_1650_0.mp4';
import unicityLogoUrl from '/UnicityLogo.svg';

const modules = [
  { title: 'SKILLS', items: ['OpenClaw', 'MCP Tools', 'Custom'], color: '#f59e0b' },
  { title: 'PAYMENTS', items: ['Unicity L1', '300M++ TPS', '1 sec finality'], color: '#f97316' },
  { title: 'ORCHESTRATION', items: ['ReAct', 'Plan-Execute', 'ToT / Debate'], color: '#ec4899' },
  { title: 'SECURITY', items: ['Semantic Intercept Fabric', 'Policy Engine'], color: '#a855f7' },
  { title: 'NETWORKING', items: ['A2A Messaging', 'Groups', 'Discovery', 'Marketplaces'], color: '#6366f1' },
  { title: 'INFERENCE', items: ['Anthropic', 'OpenAI', 'Ollama'], color: '#3b82f6' },
];

const kernelItems = ['Event Bus', 'Sandbox', 'Permissions', 'Audit'];

// Base sizes — used at lg+. Scaled down for smaller screens via CSS transform.
const KERNEL_R = 80;
const SAT_R = 70;
const GAP = 6;
const ORBIT = KERNEL_R + SAT_R + GAP;
const DIAGRAM_SIZE = ORBIT * 2 + SAT_R * 2 + 20;

// 6 satellites evenly spaced starting from top
const ANGLES = [-90, -30, 30, 90, 150, 210];

export function SolutionSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-y-auto">
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
        <video className="w-full h-full object-cover opacity-15" autoPlay muted loop playsInline src={splashVideoUrl} />
        <div className="absolute inset-0 bg-[#060606]/50" />
      </div>

      {/* Header — absolute so it doesn't affect centering */}
      <div className="fixed z-20 top-6 sm:top-8 left-6 sm:left-10 lg:left-16 pointer-events-none">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          className="text-orange-400 text-[10px] sm:text-xs tracking-[0.4em] uppercase"
          style={{ fontFamily: "'Geist Mono', monospace" }}>
          Our Solution
        </motion.p>
        <motion.h1 initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="text-[#fefefe] text-[28px] sm:text-[44px] lg:text-[56px] leading-[0.95] tracking-tight mt-1"
          style={{ fontFamily: "'Anton', sans-serif" }}>
          THE UNICITY{' '}<span className="text-orange-400">PLATFORM</span>
        </motion.h1>
        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-[2px] w-32 sm:w-48 bg-gradient-to-r from-orange-500 to-transparent origin-left mt-2" />
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-[#fefefe]/70 text-xs sm:text-sm mt-3"
          style={{ fontFamily: "'Geist Mono', monospace" }}>
          The open-source stack for autonomous agent trading and commerce
        </motion.p>
      </div>

      {/* Layout: stacked on mobile, two-column on lg+ */}
      <div className="relative z-10 h-full flex flex-col lg:grid lg:grid-cols-2">

        {/* Left — orbital diagram centered, scaled for viewport */}
        <div className="relative flex items-center justify-center flex-1 lg:flex-none pt-24 sm:pt-28 lg:pt-0">
          <div
            className="relative origin-center"
            style={{
              width: `${DIAGRAM_SIZE}px`,
              height: `${DIAGRAM_SIZE}px`,
              transform: 'scale(var(--diagram-scale))',
            }}
          >

            {/* Center KERNEL */}
            <div className="absolute z-20"
              style={{
                left: '50%', top: '50%',
                transform: 'translate(-50%, -50%)',
                width: `${KERNEL_R * 2}px`, height: `${KERNEL_R * 2}px`,
              }}>
              <div className="absolute inset-[-40%] rounded-full bg-orange-500/[0.06] blur-[40px] pointer-events-none" />
              <div className="absolute inset-0 rounded-full border border-orange-500/30" />
              <div className="absolute inset-[6%] rounded-full border-2 border-orange-500/50 bg-gradient-to-br from-orange-500/[0.1] via-orange-900/[0.05] to-transparent" />
              <div className="absolute inset-[6%] rounded-full flex flex-col items-center justify-center">
                <h3 className="text-orange-400 text-xl sm:text-2xl"
                  style={{ fontFamily: "'Anton', sans-serif", letterSpacing: '0.12em' }}>
                  KERNEL
                </h3>
                <div className="mt-1">
                  {kernelItems.map((item) => (
                    <p key={item} className="text-[#fefefe]/80 text-[10px] sm:text-xs text-center leading-snug"
                      style={{ fontFamily: "'Geist Mono', monospace" }}>
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            {/* Satellites */}
            {modules.map((m, i) => {
              const rad = (ANGLES[i] * Math.PI) / 180;
              const cx = Math.cos(rad) * ORBIT;
              const cy = Math.sin(rad) * ORBIT;
              return (
                <motion.div
                  key={m.title}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + i * 0.08, duration: 0.4 }}
                  className="absolute z-10"
                  style={{
                    left: `calc(50% + ${cx}px - ${SAT_R}px)`,
                    top: `calc(50% + ${cy}px - ${SAT_R}px)`,
                    width: `${SAT_R * 2}px`, height: `${SAT_R * 2}px`,
                  }}>
                  <div className="absolute inset-[-15%] rounded-full blur-[25px] pointer-events-none"
                    style={{ background: m.color, opacity: 0.05 }} />
                  <div className="absolute inset-0 rounded-full"
                    style={{ border: `1px solid ${m.color}40` }} />
                  <div className="absolute inset-[2px] rounded-full"
                    style={{ background: `${m.color}08` }} />
                  <div className="absolute inset-0 rounded-full flex flex-col items-center justify-center px-2">
                    <h3 className="text-sm sm:text-base leading-tight text-center font-bold"
                      style={{ fontFamily: "'Anton', sans-serif", letterSpacing: '0.05em', color: m.color }}>
                      {m.title}
                    </h3>
                    <div className="mt-0.5">
                      {m.items.map((item) => (
                        <p key={item} className="text-[#fefefe]/80 text-[10px] sm:text-xs text-center leading-snug"
                          style={{ fontFamily: "'Geist Mono', monospace" }}>
                          {item}
                        </p>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}

          </div>
        </div>

        {/* Right — text content */}
        <div className="flex flex-col justify-center px-6 sm:px-10 lg:px-12 pb-12 lg:pb-0">
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}>
            <h2 className="text-[#fefefe] text-[24px] sm:text-[36px] lg:text-[44px] leading-[0.95] tracking-tight"
              style={{ fontFamily: "'Anton', sans-serif" }}>
              3 MAJOR <span className="text-orange-400">INNOVATIONS</span>
            </h2>
            <div className="mt-3 sm:mt-4 space-y-3 sm:space-y-4">
              <div>
                <p className="text-orange-400 text-[10px] sm:text-xs tracking-[0.3em] uppercase mb-1"
                  style={{ fontFamily: "'Geist Mono', monospace" }}>
                  Astrid — Agentic Kernel
                </p>
                <p className="text-[#fefefe]/70 text-[11px] sm:text-xs lg:text-sm leading-relaxed"
                  style={{ fontFamily: "'Geist Mono', monospace" }}>
                  <span className="text-orange-400 mr-2">→</span>A hardened event bus <span className="text-orange-400">kernel</span> where skills (OpenClaw, Claude,…), prompting frameworks (ReAct, CoT, ToT…) and inference (Claude, Ollama,…) are pluggable, composable and isolated — switch any component without rewriting apps
                </p>
              </div>
              <div>
                <p className="text-orange-400 text-[10px] sm:text-xs tracking-[0.3em] uppercase mb-1"
                  style={{ fontFamily: "'Geist Mono', monospace" }}>
                  Unicity — L1 Blockchain
                </p>
                <p className="text-[#fefefe]/70 text-[11px] sm:text-xs lg:text-sm leading-relaxed"
                  style={{ fontFamily: "'Geist Mono', monospace" }}>
                  <span className="text-orange-400 mr-2">→</span>We make <span className="text-orange-400">Satoshi's vision</span> real by delivering P2P electronic cash. Massive throughput, low latency, private transactions
                </p>
              </div>
              <div>
                <p className="text-orange-400 text-[10px] sm:text-xs tracking-[0.3em] uppercase mb-1"
                  style={{ fontFamily: "'Geist Mono', monospace" }}>
                  Semantic Intercept Fabric
                </p>
                <p className="text-[#fefefe]/70 text-[11px] sm:text-xs lg:text-sm leading-relaxed"
                  style={{ fontFamily: "'Geist Mono', monospace" }}>
                  <span className="text-orange-400 mr-2">→</span>A new security architecture based on <span className="text-orange-400">neurosymbolic</span> AI providing cryptographic guarantees for execution, safety and explainability
                </p>
              </div>
            </div>
          </motion.div>
        </div>

      </div>

      {/* Logo */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
        className="fixed bottom-6 right-6 sm:right-10 lg:right-16 z-20 pointer-events-none">
        <img src={unicityLogoUrl} alt="Unicity" className="h-5 opacity-60" />
      </motion.div>

      {/* Responsive diagram scaling */}
      <style>{`
        :root {
          --diagram-scale: 0.7;
        }
        @media (min-width: 640px) {
          :root { --diagram-scale: 0.85; }
        }
        @media (min-width: 1024px) {
          :root { --diagram-scale: 1.05; }
        }
        @media (min-width: 1280px) {
          :root { --diagram-scale: 1.25; }
        }
      `}</style>
    </div>
  );
}
