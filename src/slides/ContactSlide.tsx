import { motion } from 'framer-motion';

const mono = "'Geist Mono', monospace";
const display = "'Anton', sans-serif";

export function ContactSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">

      {/* Background grid texture — consistent across the deck */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* RIGHT — full-height rainbow splash (clean transparent-bg PNG)
          Left edge faded with a mask so the image blends into the black background */}
      <img
        src="/close-splash.png"
        alt="Unicity — agentic compute"
        className="absolute right-0 top-0 h-full w-auto pointer-events-none"
        style={{
          maxWidth: '55%',
          objectFit: 'contain',
          objectPosition: 'right center',
          maskImage:
            'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.4) 18%, #000 45%)',
          WebkitMaskImage:
            'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.4) 18%, #000 45%)',
        }}
      />

      {/* LEFT — get-started copy + CTA */}
      <div
        className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-12 lg:px-20 py-10 lg:py-14 gap-5 lg:gap-7"
        style={{ maxWidth: '58%' }}
      >

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-orange-400 text-xs sm:text-sm lg:text-base tracking-[0.4em] uppercase font-bold shrink-0"
          style={{ fontFamily: mono }}
        >
          The Ask · See Permission, Then Proof
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-[#fefefe] text-[36px] sm:text-[56px] lg:text-[80px] xl:text-[96px] leading-[0.96] tracking-tight uppercase shrink-0"
          style={{ fontFamily: display }}
        >
          LET US{' '}
          <span className="text-orange-400">SHOW YOU.</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-[#fefefe]/85 text-sm sm:text-base lg:text-lg leading-relaxed shrink-0 max-w-2xl"
          style={{ fontFamily: mono }}
        >
          An agent acting inside your policy — intercepted, settled, and proven. 20 minutes. One working flow. Your team can decide from there.
        </motion.p>

        {/* CTA button */}
        <motion.a
          href="mailto:info@unicity.ai?subject=Book%20a%20live%20demo"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.5 }}
          className="shrink-0 inline-flex items-center gap-3 self-start rounded-full px-6 py-3 lg:px-8 lg:py-4 text-[#060606] font-bold transition-transform hover:scale-[1.02]"
          style={{ background: '#FF6A00', fontFamily: mono }}
        >
          <span className="text-sm sm:text-base lg:text-lg tracking-[0.18em] uppercase">
            Book a live demo
          </span>
          <span className="text-base lg:text-lg">→</span>
        </motion.a>

        {/* Team contacts — two symmetric cards, native to the deck's card system */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="shrink-0 mt-3 lg:mt-5 grid grid-cols-2 gap-3 lg:gap-4 max-w-2xl"
          style={{ fontFamily: mono }}
        >
          {[
            { name: 'Mike Gault', role: 'CEO', email: 'mike@unicity.ai' },
            { name: 'Alan Radi', role: 'Head of AI Strategy', email: 'alan@unicity-labs.com' },
          ].map((p) => (
            <div
              key={p.name}
              className="rounded-xl px-4 lg:px-5 py-3.5 lg:py-4 flex flex-col"
              style={{
                background: 'rgba(255,255,255,0.045)',
                border: '1px solid #363636',
              }}
            >
              <p className="text-[#fefefe] text-sm sm:text-base lg:text-lg font-bold tracking-tight leading-none">
                {p.name}
              </p>
              <p className="text-[#fefefe]/40 text-[10px] lg:text-xs tracking-[0.2em] uppercase mt-1.5">
                {p.role}
              </p>
              <a
                href={`mailto:${p.email}`}
                className="text-orange-400/90 text-xs lg:text-sm mt-3 hover:underline break-all"
              >
                {p.email}
              </a>
            </div>
          ))}
        </motion.div>

      </div>

      {/* Bottom HUD bar */}
      <div className="absolute bottom-6 left-8 lg:left-12 right-8 lg:right-12 z-20 flex items-center justify-between pointer-events-none">
        <a
          href="https://unicity.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#fefefe]/40 text-[10px] sm:text-xs lg:text-sm tracking-[0.32em] uppercase hover:text-[#fefefe]/70 transition-colors pointer-events-auto"
          style={{ fontFamily: mono }}
        >
          unicity.ai
        </a>
        <span
          className="text-[#fefefe]/35 text-[10px] sm:text-xs lg:text-sm tracking-[0.32em] uppercase font-bold"
          style={{ fontFamily: mono }}
        >
          Unicity
        </span>
      </div>
    </div>
  );
}
