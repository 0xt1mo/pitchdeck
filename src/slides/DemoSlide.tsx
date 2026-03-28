import { motion } from 'framer-motion';
import splashVideoUrl from '/kling_20260226_VIDEO_Take_Image_1650_0.mp4';
import unicityLogoUrl from '/UnicityLogo.svg';

export function DemoSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-y-auto">
      {/* Video background */}
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
        <video className="w-full h-full object-cover opacity-15" autoPlay muted loop playsInline src={splashVideoUrl} />
        <div className="absolute inset-0 bg-[#060606]/50" />
      </div>

      <div className="relative z-10 h-full flex flex-col px-6 sm:px-10 lg:px-16 py-6 sm:py-8">

        {/* Header */}
        <div className="shrink-0">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-orange-400 text-[10px] sm:text-xs tracking-[0.4em] uppercase"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            Product
          </motion.p>
          <motion.h1 initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[28px] sm:text-[40px] lg:text-[52px] leading-[0.95] tracking-tight mt-1"
            style={{ fontFamily: "'Anton', sans-serif" }}>
            ENTERPRISE:{' '}
            <span className="text-orange-400">PRIVATE MARKETPLACES</span>
          </motion.h1>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-[2px] w-32 sm:w-48 bg-gradient-to-r from-orange-500 to-transparent origin-left mt-2" />
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-[#fefefe]/70 text-xs sm:text-sm mt-3"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            Initial deployments for inter-enterprise <span className="text-orange-400">A2A discovery</span>, <span className="text-orange-400">execution</span> and <span className="text-orange-400">settlement</span>
          </motion.p>
        </div>

        {/* Demo video — full width, centered */}
        <div className="flex-1 mt-4 flex flex-col items-center justify-center min-h-0">
          <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-[#fefefe]/80 text-sm sm:text-lg mb-2"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            Demo of USDT tokens moving at <span className="text-orange-400 font-bold">3M TPS</span>. Agent to Agent. Across the Internet.
          </motion.p>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-[#fefefe]/50 text-xs sm:text-sm mb-5"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            Demo prepared with <span className="text-orange-400">Mimik AI</span> for IOT deployments.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.7 }}
            className="w-full max-w-3xl rounded-xl overflow-hidden border border-orange-500/20 shadow-[0_0_60px_rgba(249,115,22,0.08)]"
          >
            <video
              className="w-full"
              controls
              autoPlay
              muted
              loop
              playsInline
              src="/demo.webm"
            />
          </motion.div>
        </div>

        {/* Logo */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
          className="shrink-0 mt-3 flex justify-end">
          <img src={unicityLogoUrl} alt="Unicity" className="h-5 opacity-60" />
        </motion.div>

      </div>
    </div>
  );
}
