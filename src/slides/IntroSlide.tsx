import { motion } from 'framer-motion';
import splashVideoUrl from '/kling_20260226_VIDEO_Take_Image_1650_0.mp4';
import unicityLogoUrl from '/UnicityLogo.svg';

export function IntroSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      {/* Video background */}
      <div className="fixed inset-0 w-full h-full z-0">
        <video className="w-full h-full object-cover opacity-30" autoPlay muted loop playsInline src={splashVideoUrl} />
        <div className="absolute inset-0 bg-[#060606]/40" />
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 sm:px-10 lg:px-16">

        {/* Logo */}
        <motion.img
          src={unicityLogoUrl}
          alt="Unicity"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="h-10 sm:h-14 lg:h-16 mb-6 sm:mb-8"
        />

        {/* Tagline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-[#fefefe] text-[36px] sm:text-[52px] lg:text-[68px] leading-[0.95] tracking-tight text-center"
          style={{ fontFamily: "'Anton', sans-serif" }}
        >
          INFRASTRUCTURE FOR THE
          <br />
          <span className="text-orange-400">AGENTIC ECONOMY</span>
        </motion.h1>

        {/* Accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="h-[2px] w-24 sm:w-36 bg-gradient-to-r from-transparent via-orange-500 to-transparent origin-center mt-5 sm:mt-6"
        />

        {/* Subtitle lines */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="mt-6 sm:mt-8 text-[#fefefe]/70 text-sm sm:text-base lg:text-xl text-center"
          style={{ fontFamily: "'Geist Mono', monospace" }}
        >
          Agent security, networking and trading at machine speed
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.5 }}
          className="mt-3 sm:mt-4 text-orange-400/80 text-xs sm:text-sm lg:text-base text-center tracking-wide"
          style={{ fontFamily: "'Geist Mono', monospace" }}
        >
          Linux for AI Agents
        </motion.p>

      </div>
    </div>
  );
}
