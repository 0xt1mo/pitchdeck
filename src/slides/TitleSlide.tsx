import { useState } from 'react';
import { motion } from 'framer-motion';
import splashVideoUrl from '/kling_20260226_VIDEO_Take_Image_1650_0.mp4';

export function TitleSlide({ onNext }: { onNext?: () => void }) {
  const [isExploreHovered, setIsExploreHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-50 bg-[#060606] overflow-hidden"
    >
      {/* Video background — full bloom, centered sphere */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <video
          className="w-full h-full object-cover"
          autoPlay muted loop playsInline
          src={splashVideoUrl}
        />
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(to top, rgba(6,6,6,0.85) 0%, rgba(6,6,6,0.3) 35%, transparent 60%)',
        }} />
      </div>

      {/* Top-left: brand mark */}
      <div className="absolute top-0 left-0 z-20 px-8 sm:px-12 lg:px-16 py-6 sm:py-8">
        <motion.img
          src="/UnicityLogo.svg"
          alt="Unicity"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="h-6 sm:h-7 opacity-90"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center">

        {/* Center: Title + tagline */}
        <div className="flex-1 flex flex-col items-center justify-center px-6">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-orange-400/80 text-xs sm:text-sm tracking-[0.5em] uppercase mb-5"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            ⎯⎯⎯⎯  Unicity  ⎯⎯⎯⎯
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-[#fefefe] text-[56px] sm:text-[80px] lg:text-[112px] leading-[0.9] tracking-[-0.02em] select-none text-center"
            style={{
              fontFamily: "'Anton', sans-serif",
              textShadow: '0 0 60px rgba(249,115,22,0.3)',
            }}
          >
            <span className="text-orange-400">INTRODUCTION</span>
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="h-[2px] w-32 sm:w-48 lg:w-64 mt-6 origin-center"
            style={{ background: 'linear-gradient(to right, transparent, rgba(249,115,22,0.8), transparent)' }}
          />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-[#fefefe]/80 text-base sm:text-lg lg:text-xl mt-6 text-center max-w-3xl leading-relaxed"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            The infrastructure layer for <span className="text-orange-400">autonomous AI</span>.
          </motion.p>
        </div>

        {/* Bottom: Enter button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="pb-[15vh] flex flex-col items-center gap-2.5"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onNext?.()}
            onHoverStart={() => setIsExploreHovered(true)}
            onHoverEnd={() => setIsExploreHovered(false)}
            className="h-10 px-5 cursor-pointer relative overflow-hidden"
            style={{
              borderRadius: '50px',
              fontFamily: "'Geist Mono', monospace",
              background: 'rgba(255,255,255,0.07)',
              border: '1px solid rgba(255,255,255,0.1)',
              backdropFilter: 'blur(12px)',
            }}
          >
            <motion.div
              className="absolute inset-0"
              initial={{ y: '100%' }}
              animate={{ y: isExploreHovered ? '0%' : '100%' }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              style={{ background: 'rgba(249,115,22,0.25)', borderRadius: 'inherit' }}
            />
            <motion.span
              animate={{ color: isExploreHovered ? '#f97316' : 'rgba(254,254,254,0.5)' }}
              transition={{ duration: 0.2 }}
              className="relative z-10 text-sm"
            >
              Enter
            </motion.span>
          </motion.button>
        </motion.div>

      </div>

      {/* Bottom corners: confidential + date */}
      <div className="absolute bottom-0 left-0 right-0 z-20 flex items-end justify-between px-8 sm:px-12 lg:px-16 pb-6 sm:pb-8 pointer-events-none">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-[#fefefe]/40 text-[10px] sm:text-xs tracking-[0.3em] uppercase"
          style={{ fontFamily: "'Geist Mono', monospace" }}
        >
          Confidential
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="text-[#fefefe]/40 text-[10px] sm:text-xs tracking-[0.3em] uppercase"
          style={{ fontFamily: "'Geist Mono', monospace" }}
        >
          unicity.network
        </motion.p>
      </div>
    </motion.div>
  );
}
