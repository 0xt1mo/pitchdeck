import { motion } from 'framer-motion';
import splashVideoUrl from '/kling_20260226_VIDEO_Take_Image_1650_0.mp4';

export function IntroSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      {/* Video background — atmospheric watermark */}
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
        <video className="w-full h-full object-cover opacity-[0.12]" autoPlay muted loop playsInline src={splashVideoUrl} />
      </div>

      {/* Subtle radial glow behind text */}
      <div className="fixed inset-0 z-[1] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(249,115,22,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 sm:px-10 lg:px-16">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center"
        >
          <h1
            className="text-[#fefefe] text-[48px] sm:text-[72px] lg:text-[100px] xl:text-[120px] leading-[0.9] tracking-[-0.02em]"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            AUTONOMOUS AI
            <br />
            <span className="text-orange-400">NEEDS AN INTERNET</span>
            <br />
            BUILT FOR MACHINES
          </h1>
        </motion.div>

        {/* Accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="h-[1px] w-32 sm:w-48 lg:w-64 bg-gradient-to-r from-transparent via-orange-500/60 to-transparent origin-center mt-6 sm:mt-8"
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="mt-6 sm:mt-8 text-[#fefefe]/40 text-lg sm:text-xl lg:text-2xl text-center max-w-4xl leading-relaxed"
          style={{ fontFamily: "'Geist Mono', monospace" }}
        >
          Billions of machine intelligences are coming.
          <br />
          <span className="text-[#fefefe]/60">We're building the infrastructure to make them autonomous.</span>
        </motion.p>

      </div>
    </div>
  );
}
