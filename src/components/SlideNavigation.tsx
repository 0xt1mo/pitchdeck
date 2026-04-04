import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SlideNavigationProps {
  current: number;
  total: number;
  onNavigate: (index: number) => void;
}

export function SlideNavigation({ current, total, onNavigate }: SlideNavigationProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] flex items-center justify-center gap-4 py-3 bg-gradient-to-t from-[#060606] via-[#060606]/90 to-transparent">
      <img src="/UnicityLogo.svg" alt="Unicity" className="h-5 opacity-50 absolute right-6 sm:right-10 lg:right-16" />
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => onNavigate(current - 1)}
        disabled={current === 0}
        className="p-2 rounded-full bg-neutral-800/50 backdrop-blur-sm text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-neutral-700/50 transition-colors"
      >
        <ChevronLeft className="w-5 h-5" />
      </motion.button>

      <div className="flex items-center gap-2">
        {Array.from({ length: total }, (_, i) => (
          <button
            key={i}
            onClick={() => onNavigate(i)}
            className={`w-2 h-2 rounded-full transition-all ${
              i === current
                ? 'bg-orange-500 w-6'
                : 'bg-neutral-500/50 hover:bg-neutral-400/50'
            }`}
          />
        ))}
      </div>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => onNavigate(current + 1)}
        disabled={current === total - 1}
        className="p-2 rounded-full bg-neutral-800/50 backdrop-blur-sm text-white disabled:opacity-30 disabled:cursor-not-allowed hover:bg-neutral-700/50 transition-colors"
      >
        <ChevronRight className="w-5 h-5" />
      </motion.button>
    </div>
  );
}
