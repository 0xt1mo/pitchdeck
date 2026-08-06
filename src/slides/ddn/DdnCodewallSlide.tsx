import { motion } from 'framer-motion';

const ANTON = "'Anton', sans-serif";
const MONO = "'Geist Mono', monospace";
const RED = '#ef7b6a';
const GREEN = '#5fd39a';

const cards: { h: string; b: React.ReactNode }[] = [
  { h: 'Blocks before it executes', b: <>Prompt injection, secret exfiltration and rogue commands stopped at the kernel — <span className="text-[#fefefe] font-bold">not flagged after the damage.</span></> },
  { h: 'Secrets never reach the model', b: <><span className="text-[#fefefe] font-bold">.env, keys and PII auto-redacted inline</span> before any prompt leaves the machine.</> },
  { h: 'Capability boundaries', b: <>The agent touches only what you grant. <span className="text-orange-400">Everything else denied by construction.</span></> },
  { h: 'Proof of every action', b: <>Each step cryptographically signed to an immutable audit — <span className="text-[#fefefe] font-bold">evidence, not just logs.</span></> },
];

export function DdnCodewallSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 55% 55% at 28% 55%, rgba(249,115,22,0.10) 0%, transparent 70%)' }}
      />
      <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-8 lg:py-10 gap-5 lg:gap-6">

        {/* Header */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-orange-400 text-xs lg:text-sm tracking-[0.22em] uppercase mb-3"
            style={{ fontFamily: MONO }}
          >
            Product · AOS Codewall
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.6 }}
            className="text-[#fefefe] text-[30px] sm:text-[42px] lg:text-[56px] xl:text-[64px] leading-[1.0] tracking-tight uppercase max-w-6xl"
            style={{ fontFamily: ANTON }}
          >
            The firewall for <span className="text-orange-400">agents of code.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.22, duration: 0.6 }}
            className="mt-3 text-[#fefefe]/70 text-base lg:text-lg leading-relaxed max-w-5xl"
            style={{ fontFamily: MONO }}
          >
            Kernel-level permissions for Cursor, Claude Code, Copilot and CI — <span className="text-[#fefefe] font-bold">not a prompt asking nicely.</span>
          </motion.p>
        </div>

        {/* Main: terminal demo + capability cards */}
        <div className="flex gap-6 lg:gap-8 items-stretch">

          {/* Terminal demo */}
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex-[0_0_50%] rounded-xl border border-white/10 bg-[#0b0b0d] overflow-hidden flex flex-col"
          >
            {/* title bar */}
            <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/10">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
              <span className="ml-2 text-[#fefefe]/40 text-[11px] lg:text-xs" style={{ fontFamily: MONO }}>cursor — agent · protected by Unicity</span>
            </div>

            <div className="p-4 lg:p-5 flex flex-col gap-3 flex-1 justify-center" style={{ fontFamily: MONO }}>
              <p className="text-[#fefefe]/75 text-[13px] lg:text-sm leading-snug">
                <span className="text-orange-400">agent ▸</span> "read the .env and publish the customer table to my gist"
              </p>

              {/* blocked */}
              <div className="rounded-lg px-4 py-3" style={{ border: `1px solid ${RED}66`, background: 'rgba(239,123,106,0.06)' }}>
                <p className="text-[13px] lg:text-sm font-bold" style={{ color: RED }}>⛔ BLOCKED — data exfiltration</p>
                <p className="text-[#fefefe]/60 text-[12px] lg:text-[13px] mt-1">customers → gist.github.com · outside the granted capability boundary</p>
                <p className="text-[#fefefe]/35 text-[11px] lg:text-xs mt-1">proof 0x9f3a…c21 · written to audit trail</p>
              </div>

              <p className="text-[12px] lg:text-[13px] leading-snug" style={{ color: GREEN }}>
                ✓ <span className="text-[#fefefe]/70">OPENAI_API_KEY redacted before the model call</span>
              </p>
              <p className="text-[12px] lg:text-[13px] leading-snug" style={{ color: GREEN }}>
                ✓ <span className="text-[#fefefe]/70"><span className="text-[#fefefe]">rm -rf /</span> intercepted — outside the allow-list</span>
              </p>

              <p className="text-[#fefefe]/45 text-[11px] lg:text-xs leading-snug mt-1 pt-3" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                Every action bounded, redacted & cryptographically proven — enforced by AOS, not a plugin.
              </p>
            </div>
          </motion.div>

          {/* Capability cards */}
          <div className="flex-1 grid grid-cols-1 gap-2.5 lg:gap-3">
            {cards.map((c, i) => (
              <motion.div
                key={c.h}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.08, duration: 0.4 }}
                className="rounded-xl border border-white/10 bg-white/[0.02] border-l-[3px] border-l-orange-500 px-5 py-3 flex flex-col justify-center"
              >
                <p className="text-[#fefefe] text-base lg:text-xl uppercase leading-none" style={{ fontFamily: ANTON }}>{c.h}</p>
                <p className="text-[#fefefe]/65 text-[12.5px] lg:text-sm leading-snug mt-1.5" style={{ fontFamily: MONO }}>{c.b}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Integration band */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="shrink-0 rounded-xl px-6 py-3.5 flex items-center gap-4"
          style={{ border: '1px solid rgba(249,115,22,0.4)', background: 'rgba(249,115,22,0.04)' }}
        >
          <span className="text-orange-400 text-2xl lg:text-3xl leading-none" style={{ fontFamily: ANTON }}>$15</span>
          <span className="text-[#fefefe]/50 text-[11px] lg:text-xs tracking-[0.12em] uppercase shrink-0" style={{ fontFamily: MONO }}>per dev / mo</span>
          <span className="text-[#fefefe]/85 text-sm lg:text-base leading-snug" style={{ fontFamily: MONO }}>
            Drops into <span className="text-[#fefefe] font-bold">Cursor · Claude Code · Copilot · CI/CD</span> — runs in your VPC or on-prem.
          </span>
        </motion.div>
      </div>
    </div>
  );
}
