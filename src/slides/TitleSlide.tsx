import { useState } from 'react';
import { motion } from 'framer-motion';
import unicityLogoUrl from '/UnicityLogo.svg';
import splashVideoUrl from '/kling_20260226_VIDEO_Take_Image_1650_0.mp4';

export function TitleSlide({ onNext }: { onNext?: () => void }) {
  const [isExploreHovered, setIsExploreHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-50 bg-[#060606] overflow-y-auto"
    >
      {/* ── Video Background (sphere) ── */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <video
          className="w-full h-full object-cover"
          style={{ transform: 'scale(1.15)' }}
          autoPlay
          muted
          loop
          playsInline
          src={splashVideoUrl}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* ── Content layer ── */}
      <div className="relative z-20 h-full flex flex-col">

        {/* ── Top: UNICITY logo + decorative line ── */}
        <div className="flex items-center px-6 sm:px-10 lg:px-[23%] pt-5 sm:pt-7 lg:pt-14">
          <motion.img
            src={unicityLogoUrl}
            alt="Unicity"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="h-[18px] sm:h-[22px] lg:h-[26px] w-auto shrink-0 select-none"
          />
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
            className="h-0.5 bg-[#fefefe] rounded-[10px] ml-2 sm:ml-3 origin-left"
            style={{ flex: '1 1 0', maxWidth: '750px' }}
          />
        </div>

        {/* ── Center: title / tagline / button ── */}
        <div className="flex-1 flex flex-col items-center justify-center text-center px-4 mt-6 sm:mt-4 lg:mt-2">
          <div className="flex flex-col items-center">

            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-[#fefefe] text-[40px] sm:text-[56px] md:text-[68px] lg:text-[82px] font-normal leading-[0.95] select-none text-center"
              style={{ fontFamily: "'Anton', sans-serif" }}
            >
              INFRASTRUCTURE FOR THE
              <br />
              <motion.span
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="text-orange-400"
              >
                AGENTIC ECONOMY
              </motion.span>
            </motion.h1>

            {/* Accent line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="h-[2px] w-24 sm:w-36 bg-gradient-to-r from-transparent via-orange-500 to-transparent origin-center mt-4 sm:mt-5"
            />

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
              className="mt-4 sm:mt-5 text-[#fefefe]/70 text-sm sm:text-base lg:text-xl text-center"
              style={{ fontFamily: "'Geist Mono', monospace" }}
            >
              Agent security, networking and trading at machine speed
            </motion.p>

            {/* Explore button — flat top, rounded bottom, fill animation on hover */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={onNext}
              onHoverStart={() => setIsExploreHovered(true)}
              onHoverEnd={() => setIsExploreHovered(false)}
              className="mt-2 sm:mt-3 w-40 sm:w-[190px] lg:w-[210px] h-[38px] sm:h-[42px] lg:h-[46px] cursor-pointer shadow-lg hover:shadow-xl relative overflow-hidden"
              style={{
                borderRadius: '5px 5px 50px 50px',
                fontFamily: "'Geist Mono', 'SF Mono', 'Fira Code', monospace",
                background: 'white',
              }}
            >
              {/* Orange fill layer — animates from bottom */}
              <motion.div
                className="absolute inset-0"
                initial={{ y: '100%' }}
                animate={{ y: isExploreHovered ? '0%' : '100%' }}
                transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                style={{
                  background: '#FF6F00',
                  borderRadius: 'inherit',
                }}
              />
              <motion.span
                animate={{
                  color: isExploreHovered ? '#ffffff' : '#1d0900',
                }}
                transition={{ duration: 0.25 }}
                className="relative z-10 text-sm sm:text-base lg:text-lg font-medium"
              >
                Enter
              </motion.span>
            </motion.button>

          </div>
        </div>

        {/* Bottom spacer */}
        <div className="shrink-0 pb-6 sm:pb-8 lg:pb-[60px]" />

      </div>
    </motion.div>
  );
}
