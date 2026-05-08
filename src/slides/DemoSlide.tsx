import { motion } from 'framer-motion';
import splashVideoUrl from '/kling_20260226_VIDEO_Take_Image_1650_0.mp4';
import unicityLogoUrl from '/UnicityLogo.svg';

export function DemoSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      {/* Video background */}
      <div className="fixed inset-0 w-full h-full z-0">
        <video className="w-full h-full object-cover opacity-20" autoPlay muted loop playsInline src={splashVideoUrl} />
        <div className="absolute inset-0 bg-[#060606]/50" />
      </div>

      <div className="relative z-10 h-full flex flex-col px-6 sm:px-10 lg:px-16 py-6 sm:py-8">

        {/* Header */}
        <div className="shrink-0">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-orange-400 text-[10px] sm:text-xs tracking-[0.4em] uppercase"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            Appendix — Product Demo
          </motion.p>
          <motion.h1 initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[24px] sm:text-[36px] lg:text-[48px] leading-[0.95] tracking-tight mt-1"
            style={{ fontFamily: "'Anton', sans-serif" }}>
            DEMO: USDT MOVING A2A AT{' '}
            <span className="text-orange-400">3M TPS</span>
            {' '}— EDGE MICROSERVICES
          </motion.h1>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-[2px] w-32 sm:w-48 bg-gradient-to-r from-orange-500 to-transparent origin-left mt-2" />
        </div>

        {/* Video thumbnail link */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="flex-1 mt-4 sm:mt-6 min-h-0 flex flex-col items-center justify-center gap-4"
        >
          <a
            href="https://www.youtube.com/watch?v=tz4NBRRNLRo"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-5xl relative rounded-xl overflow-hidden border border-orange-500/30 shadow-[0_0_60px_rgba(249,115,22,0.12)] block group cursor-pointer"
          >
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <img
                src="/demo-thumbnail.jpg"
                alt="Unicity Labs Edge Microservices demo"
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-orange-500/90 group-hover:bg-orange-500 flex items-center justify-center shadow-2xl transition-all">
                  <svg viewBox="0 0 24 24" className="w-10 h-10 sm:w-12 sm:h-12 ml-1" fill="#fff">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
          </a>
          <a
            href="https://www.youtube.com/watch?v=tz4NBRRNLRo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-orange-400 text-sm sm:text-base font-bold hover:underline cursor-pointer"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            youtube.com/watch?v=tz4NBRRNLRo →
          </a>
        </motion.div>

        {/* Logo */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
          className="shrink-0 mt-3 flex justify-end">
          <img src={unicityLogoUrl} alt="Unicity" className="h-5 opacity-60" />
        </motion.div>

      </div>
    </div>
  );
}
