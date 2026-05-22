import { motion } from 'framer-motion';

export function ThankYouChatSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-8 sm:px-12 lg:px-20 py-12 lg:py-16">

        {/* Heading */}
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-[#fefefe] text-[64px] sm:text-[96px] lg:text-[140px] leading-none tracking-tight"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            THANK <span className="text-orange-400">YOU</span>
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="h-[2px] w-32 sm:w-48 bg-gradient-to-r from-transparent via-orange-500 to-transparent origin-center mx-auto mt-5"
          />
        </div>
      </div>
    </div>
  );
}
