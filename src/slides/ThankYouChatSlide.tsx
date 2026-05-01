import { motion } from 'framer-motion';

export function ThankYouChatSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-8 sm:px-12 lg:px-20 py-12 lg:py-16 gap-10">

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

        {/* Contact details */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="flex flex-col items-center gap-5"
        >
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
              style={{
                background: 'rgba(245,158,11,0.10)',
                border: '1px solid rgba(245,158,11,0.30)',
              }}
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="rgba(245,158,11,0.9)">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </div>
            <a
              href="mailto:info@unicity.ai"
              className="text-orange-400 text-lg lg:text-2xl font-bold"
              style={{ fontFamily: "'Geist Mono', monospace" }}
            >
              info@unicity.ai
            </a>
          </div>
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
              style={{
                background: 'rgba(245,158,11,0.10)',
                border: '1px solid rgba(245,158,11,0.30)',
              }}
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="rgba(245,158,11,0.9)">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
              </svg>
            </div>
            <a
              href="https://unicity.ai"
              className="text-orange-400 text-lg lg:text-2xl font-bold"
              style={{ fontFamily: "'Geist Mono', monospace" }}
            >
              unicity.ai
            </a>
          </div>
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
              style={{
                background: 'rgba(245,158,11,0.10)',
                border: '1px solid rgba(245,158,11,0.30)',
              }}
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="rgba(245,158,11,0.9)">
                <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56-.35-.12-.74-.03-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
              </svg>
            </div>
            <a
              href="tel:+971508843756"
              className="text-orange-400 text-lg lg:text-2xl font-bold"
              style={{ fontFamily: "'Geist Mono', monospace" }}
            >
              +971 50 884 3756
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
