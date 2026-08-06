import { motion } from 'framer-motion';

const ANTON = "'Anton', sans-serif";
const MONO = "'Geist Mono', monospace";

const ease = [0.16, 1, 0.3, 1] as const;

// agent grid — bright = executing, matches the density slide's capsule motif
const LIT = new Set([0, 3, 6, 10, 15, 19, 22, 25]);

export function DdnTitleSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      {/* faint grid texture */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />
      {/* ambient glow, right side where the stack sits */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 50% 55% at 80% 50%, rgba(249,115,22,0.10) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 h-full flex items-center px-8 sm:px-12 lg:px-16 py-12 gap-10 lg:gap-16">

        {/* Left — thesis */}
        <div className="flex-1 min-w-0 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[13px] lg:text-sm tracking-[0.22em] uppercase text-[#fefefe]/55 mb-6 lg:mb-8"
            style={{ fontFamily: MONO }}
          >
            <span className="text-orange-400">Unicity AOS</span>
            <span className="text-[#fefefe]/30 mx-2.5">×</span>
            Alerix
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7, ease }}
            className="text-[#fefefe] text-[38px] sm:text-[52px] lg:text-[62px] xl:text-[70px] leading-[0.98] tracking-tight uppercase"
            style={{ fontFamily: ANTON }}
          >
            The <span className="text-orange-400">operating system</span> for the agentic AI factory
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-7 lg:mt-9 text-xl sm:text-2xl lg:text-[26px] leading-[1.3]"
            style={{ fontFamily: MONO }}
          >
            <span className="text-[#fefefe]/70">You feed the GPUs.</span><br />
            <span className="text-orange-400 font-bold">We run the agents.</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="mt-6 lg:mt-8 text-[#fefefe]/55 text-sm lg:text-base leading-relaxed max-w-[540px]"
            style={{ fontFamily: MONO }}
          >
            This is a <span className="text-[#fefefe] font-bold">stack conversation, not a vendor pitch</span> — a runtime layer for the infrastructure you already sell, and the customers you already serve.
          </motion.p>
        </div>

        {/* Right — the stack in miniature */}
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.35, duration: 0.6, ease }}
          className="flex-[0_0_38%] max-w-[460px] flex flex-col justify-center"
        >
          <div className="flex flex-col gap-2">

            {/* agents on top */}
            <div className="px-1 pb-1">
              <div className="grid grid-cols-14 gap-1.5 mb-2.5" style={{ gridTemplateColumns: 'repeat(14, 1fr)' }}>
                {Array.from({ length: 28 }).map((_, i) => (
                  <span
                    key={i}
                    className="rounded-[2px]"
                    style={{
                      aspectRatio: '1',
                      background: LIT.has(i) ? '#f97316' : 'rgba(249,115,22,0.22)',
                      border: LIT.has(i) ? '1px solid #f97316' : '1px solid rgba(249,115,22,0.28)',
                    }}
                  />
                ))}
              </div>
              <p className="text-center text-[#fefefe]/40 text-[11px] lg:text-xs" style={{ fontFamily: MONO }}>
                production agents · audited, event-driven
              </p>
            </div>

            {/* AOS — the accent layer */}
            <div
              className="rounded-lg px-5 py-4 border-l-[3px]"
              style={{ background: 'rgba(249,115,22,0.08)', border: '1px solid rgba(249,115,22,0.4)', borderLeft: '3px solid #f97316' }}
            >
              <p className="text-orange-400 text-xs lg:text-[13px] tracking-[0.12em] uppercase" style={{ fontFamily: MONO }}>Unicity AOS</p>
              <p className="text-[#fefefe]/45 text-[11px] lg:text-xs mt-1" style={{ fontFamily: MONO }}>multi-tenant agent runtime · recorded by construction</p>
            </div>

            {/* GPU compute */}
            <div className="rounded-lg px-5 py-4 border border-white/10 bg-white/[0.02]">
              <p className="text-[#fefefe]/60 text-xs lg:text-[13px] tracking-[0.12em] uppercase" style={{ fontFamily: MONO }}>GPU compute</p>
              <p className="text-[#fefefe]/35 text-[11px] lg:text-xs mt-1" style={{ fontFamily: MONO }}>accelerated infrastructure</p>
            </div>

            {/* Alerix base */}
            <div className="rounded-lg px-5 py-4 border border-white/10 bg-white/[0.04]">
              <p className="text-[#fefefe]/60 text-xs lg:text-[13px] tracking-[0.12em] uppercase" style={{ fontFamily: MONO }}>Alerix data intelligence</p>
              <p className="text-[#fefefe]/35 text-[11px] lg:text-xs mt-1" style={{ fontFamily: MONO }}>storage → GPU · data-to-compute, solved</p>
            </div>

            <p className="text-right text-[#fefefe]/35 text-[10.5px] lg:text-[11px] leading-snug mt-2" style={{ fontFamily: MONO }}>
              one stack ·<br />each layer sells the next
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
