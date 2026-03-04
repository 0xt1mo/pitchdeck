import { motion } from 'framer-motion';
import splashVideoUrl from '/kling_20260226_VIDEO_Take_Image_1650_0.mp4';
import unicityLogoUrl from '/UnicityLogo.svg';

const sections = [
  {
    title: 'KERNEL',
    color: '#f97316',
    items: [
      { label: 'Astrid: The Agent Runtime', slideIndex: 19 },
      { label: 'Why Astrid', slideIndex: 20 },
      { label: 'Swap a Capsule', slideIndex: 21 },
    ],
  },
  {
    title: 'SECURITY',
    color: '#a855f7',
    items: [
      { label: 'Semantic Intercept Fabric', slideIndex: 23 },
      { label: 'Zero Trust Network', slideIndex: 24 },
    ],
  },
  {
    title: 'BLOCKCHAIN',
    color: '#3b82f6',
    items: [
      { label: 'Unicity Protocol Stack', slideIndex: 26 },
      { label: 'Agents vs Smart Contracts', slideIndex: 27 },
      { label: 'A2A Micropayments', slideIndex: 28 },
      { label: 'Unicity X402', slideIndex: 29 },
      { label: 'Solana vs Unicity', slideIndex: 30 },
    ],
  },
  {
    title: 'DEMO AGENTS',
    color: '#ec4899',
    items: [
      { label: 'IPL Cricket', slideIndex: 31 },
      { label: 'AI Companions', slideIndex: 32 },
    ],
  },
  {
    title: 'RESOURCES',
    color: '#10b981',
    items: [
      { label: 'Essential Resources', slideIndex: 33 },
    ],
  },
];

export function AppendixSlide({ goToSlide }: { goToSlide?: (index: number) => void; [key: string]: unknown }) {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="fixed inset-0 w-full h-full z-0">
        <video className="w-full h-full object-cover opacity-40" autoPlay muted loop playsInline src={splashVideoUrl} />
        <div className="absolute inset-0 bg-[#060606]/20" />
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 sm:px-10 lg:px-16">

        {/* Title */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          className="h-[2px] w-24 bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto mb-6 origin-center"
        />
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-[#fefefe] text-[64px] sm:text-[100px] lg:text-[140px] leading-none tracking-tight"
          style={{ fontFamily: "'Anton', sans-serif" }}>
          APPENDIX
        </motion.h1>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="h-[2px] w-24 bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto mt-6 origin-center"
        />

        {/* Section grid */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="grid grid-cols-5 gap-6 sm:gap-8 mt-10 sm:mt-14 w-full max-w-6xl">
          {sections.map((section, si) => (
            <div key={section.title}>
              <h3 className="text-sm sm:text-base lg:text-lg tracking-[0.12em] mb-3"
                style={{ fontFamily: "'Anton', sans-serif", color: section.color }}>
                {section.title}
              </h3>
              <div className="space-y-2">
                {section.items.map((item, ii) => (
                  <motion.button
                    key={item.label}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + si * 0.1 + ii * 0.05 }}
                    onClick={() => goToSlide?.(item.slideIndex)}
                    className="block text-left w-full group"
                    style={{ cursor: 'pointer' }}>
                    <span className="text-[#fefefe]/60 text-[11px] sm:text-xs leading-relaxed group-hover:text-orange-400 transition-colors"
                      style={{ fontFamily: "'Geist Mono', monospace" }}>
                      <span className="text-orange-400/60 mr-1.5">→</span>
                      {item.label}
                    </span>
                  </motion.button>
                ))}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Logo */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
          className="absolute bottom-8 right-6 sm:right-10 lg:right-16">
          <img src={unicityLogoUrl} alt="Unicity" className="h-5 opacity-60" />
        </motion.div>

      </div>
    </div>
  );
}
