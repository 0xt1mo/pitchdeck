import { motion } from 'framer-motion';

const mono = "'Geist Mono', monospace";
const display = "'Anton', sans-serif";

export function ContactSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">

      {/* RIGHT — full-height rainbow splash (clean transparent-bg PNG)
          Left edge faded with a mask so the image blends into the black background */}
      <img
        src="/close-splash.png"
        alt="Subscriber concierge — color splash"
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
          Get Started
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-[#fefefe] text-[36px] sm:text-[56px] lg:text-[80px] xl:text-[96px] leading-[0.96] tracking-tight uppercase shrink-0"
          style={{ fontFamily: display }}
        >
          SEE AN AGENT HIT A REGULATED BOUNDARY —{' '}
          <span className="text-orange-400">AND GET STOPPED.</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-[#fefefe]/85 text-sm sm:text-base lg:text-lg leading-relaxed shrink-0 max-w-2xl"
          style={{ fontFamily: mono }}
        >
          Watch an agent attempt a prescription, a cross-border transfer, an unconsented store — and get intercepted in-path, live, on your own infrastructure.
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

        {/* Contact line */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-orange-400/90 text-xs sm:text-sm lg:text-base shrink-0 mt-2 lg:mt-4"
          style={{ fontFamily: mono }}
        >
          <a href="mailto:info@unicity.ai" className="hover:underline">info@unicity.ai</a>
          <span className="text-[#fefefe]/40">  ·  </span>
          <a href="https://unicity.ai" target="_blank" rel="noopener noreferrer" className="hover:underline">unicity.ai</a>
          <span className="text-[#fefefe]/40">  ·  </span>
          <a href="tel:+971508843756" className="hover:underline">+971 50 884 3756</a>
        </motion.p>

      </div>

      {/* Bottom HUD bar */}
      <div className="absolute bottom-6 left-8 lg:left-12 right-8 lg:right-12 z-20 flex items-center justify-between pointer-events-none">
        <span
          className="text-[#fefefe]/40 text-[10px] sm:text-xs lg:text-sm tracking-[0.32em] uppercase"
          style={{ fontFamily: mono }}
        >
          Unicity · Get Started
        </span>
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
