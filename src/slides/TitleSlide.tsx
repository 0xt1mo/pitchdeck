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

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center">

        {/* Center: Logo + Title */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <motion.img
            src="/UnicityLogo.svg"
            alt="Unicity"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="h-10 sm:h-12 lg:h-14 mb-6"
          />
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-[#fefefe] text-[40px] sm:text-[56px] lg:text-[72px] leading-none tracking-[-0.02em] select-none"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            INVESTOR <span className="text-orange-400">INTRODUCTION</span>
          </motion.h1>
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
    </motion.div>
  );
}
