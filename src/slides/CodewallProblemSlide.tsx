import { motion } from 'framer-motion';

const mono = "'Geist Mono', monospace";
const display = "'Anton', sans-serif";

const threats = [
  { h: 'Prompt injection', b: 'A poisoned file or web page hijacks the agent — now it works for the attacker, inside your repo.' },
  { h: 'Secret exfiltration', b: '.env, API keys and customer data read straight into a prompt and posted to the outside.' },
  { h: 'Rogue commands', b: '“rm -rf”, dropping a database, pushing to prod — one hallucinated step, real damage.' },
  { h: 'Rogue MCP servers', b: 'Tools the agent connects to are unvetted code with your credentials and your network.' },
  { h: '“YOLO” execution', b: 'Auto-approve is on. The agent acts faster than any human can review or intervene.' },
  { h: 'Shadow AI', b: 'Every developer wires up their own agents and tools. Security has no boundary to enforce.' },
];

export function CodewallProblemSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      {/* ambient grid */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 55% 55% at 50% 40%, rgba(239,68,68,0.08) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-9 lg:py-12 gap-6 lg:gap-8">

        {/* Header */}
        <div className="shrink-0">
          <motion.h1
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#fefefe] text-[30px] sm:text-[44px] lg:text-[60px] xl:text-[68px] leading-[0.95] tracking-tight uppercase"
            style={{ fontFamily: display }}
          >
            Coding agents are the <span className="text-orange-400">new attack surface.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="mt-3 text-[#fefefe]/80 text-base lg:text-xl max-w-6xl leading-relaxed"
            style={{ fontFamily: mono }}
          >
            Cursor, Claude Code and Copilot read your repo, your secrets, and run commands on your machine.{' '}
            <span className="text-[#fefefe] font-bold">You gave an agent a shell</span> — and hoped it behaves.
          </motion.p>
        </div>

        {/* Threat grid */}
        <div className="shrink-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
          {threats.map((t, i) => (
            <motion.div
              key={t.h}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.07, duration: 0.4 }}
              className="rounded-xl p-4 lg:p-5 flex flex-col"
              style={{ background: 'rgba(239,68,68,0.04)', border: '1px solid rgba(239,68,68,0.28)' }}
            >
              <p className="text-red-400 text-base lg:text-lg font-bold leading-snug" style={{ fontFamily: mono }}>
                {t.h}
              </p>
              <p className="text-[#fefefe]/70 text-sm lg:text-base leading-snug mt-2" style={{ fontFamily: mono }}>
                {t.b}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85, duration: 0.5 }}
          className="shrink-0 text-[#fefefe]/85 text-base sm:text-lg lg:text-2xl leading-snug pt-4"
          style={{ fontFamily: mono, borderTop: '1px solid rgba(255,255,255,0.10)' }}
        >
          Today's tools flag it <span className="text-[#fefefe]/50">after the fact.</span>{' '}
          <span className="text-orange-400 font-bold">Nothing stops the action before it runs.</span>
        </motion.p>

      </div>
    </div>
  );
}
