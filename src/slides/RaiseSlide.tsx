import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect } from 'react';
import splashVideoUrl from '/kling_20260226_VIDEO_Take_Image_1650_0.mp4';
import unicityLogoUrl from '/UnicityLogo.svg';

function CountUp({ target, delay = 0 }: { target: number; delay?: number }) {
  const count = useMotionValue(0);
  const display = useTransform(count, (v) => `$${Math.round(v)}M`);

  useEffect(() => {
    const controls = animate(count, target, {
      duration: 2,
      delay,
      ease: [0.25, 0.1, 0.25, 1],
    });
    return controls.stop;
  }, [target, delay, count]);

  return <motion.span>{display}</motion.span>;
}

export function RaiseSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-y-auto">
      {/* Video background */}
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
        <video className="w-full h-full object-cover opacity-40" autoPlay muted loop playsInline src={splashVideoUrl} />
        <div className="absolute inset-0 bg-[#060606]/20" />
      </div>

      <div className="relative z-10 h-full flex flex-col px-6 sm:px-10 lg:px-16 py-10 sm:py-14 lg:py-16">

        {/* Header */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-orange-400 text-[10px] sm:text-xs tracking-[0.4em] uppercase"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            Now Raising
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[40px] sm:text-[56px] lg:text-[72px] leading-[0.95] tracking-tight mt-1"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            THE <span className="text-orange-400">RAISE</span>
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-[2px] w-32 sm:w-48 bg-gradient-to-r from-orange-500 to-transparent origin-left mt-2"
          />
        </div>

        {/* Center content */}
        <div className="flex-1 flex flex-col items-center justify-center">

        {/* Big number */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="relative text-center"
        >
          {/* Glow behind number */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-orange-500/15 rounded-full blur-[100px] pointer-events-none" />

          <h1
            className="relative text-[100px] sm:text-[140px] lg:text-[200px] leading-none font-black text-[#fefefe]"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            <CountUp target={30} delay={0.5} />
          </h1>
        </motion.div>

        {/* USD label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-[#fefefe]/50 text-sm sm:text-base lg:text-lg tracking-[0.3em] uppercase -mt-2"
          style={{ fontFamily: "'Geist Mono', monospace" }}
        >
          USD
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="h-[2px] w-40 sm:w-56 bg-gradient-to-r from-transparent via-orange-500 to-transparent mt-6 mb-6 origin-center"
        />

        {/* Series A + Token Warrants */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="text-center"
        >
          <h2
            className="text-[#fefefe] text-[28px] sm:text-[36px] lg:text-[44px] tracking-tight"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            SERIES A
          </h2>
          <div className="flex items-center justify-center gap-3 mt-2">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '2rem' }}
              transition={{ delay: 1.2, duration: 0.4 }}
              className="h-[1px] bg-orange-500/40"
            />
            <p
              className="text-orange-400/80 text-xs sm:text-sm tracking-widest uppercase"
              style={{ fontFamily: "'Geist Mono', monospace" }}
            >
              equity plus token warrants
            </p>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: '2rem' }}
              transition={{ delay: 1.2, duration: 0.4 }}
              className="h-[1px] bg-orange-500/40"
            />
          </div>
        </motion.div>

        </div>

        {/* Seed round backers + logo */}
        <div className="shrink-0 flex items-end justify-between">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
          >
            <p
              className="text-[#fefefe]/30 text-[10px] tracking-[0.3em] uppercase mb-2"
              style={{ fontFamily: "'Geist Mono', monospace" }}
            >
              Seed Round Backers
            </p>
            <div className="flex items-center gap-4 sm:gap-6">
              {['Blockchange Capital', 'Outlier Ventures', 'Tawasal'].map((name, i) => (
                <motion.span
                  key={name}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.6 + i * 0.1 }}
                  className="text-[#fefefe]/60 text-xs sm:text-sm font-semibold"
                >
                  {name}
                </motion.span>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>
            <img src={unicityLogoUrl} alt="Unicity" className="h-5 opacity-60" />
          </motion.div>
        </div>

      </div>
    </div>
  );
}
