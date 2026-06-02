import { motion } from 'framer-motion';

const mono = "'Geist Mono', monospace";
const display = "'Anton', sans-serif";

export function ProblemSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">

      {/* Background grid texture — consistent across the deck */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-12 lg:py-16 gap-7 lg:gap-10">

        {/* Header block — eyebrow, headline, era */}
        <div className="flex flex-col gap-4 lg:gap-6 shrink-0">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-orange-400 text-xs sm:text-sm lg:text-base tracking-[0.4em] uppercase font-bold"
            style={{ fontFamily: mono }}
          >
            The Shift
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[40px] sm:text-[60px] lg:text-[88px] xl:text-[104px] leading-[0.92] tracking-tight uppercase"
            style={{ fontFamily: display }}
          >
            <span className="text-[#fefefe]">THE FOURTH REBUILD</span>{' '}
            <span className="text-orange-400">OF COMPUTING.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-base sm:text-lg lg:text-2xl leading-snug text-[#fefefe]/80"
            style={{ fontFamily: mono }}
          >
            Mainframe <span className="text-orange-400">→</span> Client-server{' '}
            <span className="text-orange-400">→</span> Cloud{' '}
            <span className="text-orange-400">→</span> Mobile{' '}
            <span className="text-orange-400">→</span>{' '}
            <span className="text-orange-400">AI agents</span>
          </motion.p>
        </div>

        {/* Body — on the orange bar, calm two-size hierarchy */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="shrink-0 flex items-start gap-5 lg:gap-7 max-w-5xl"
        >
          <div className="shrink-0 w-[3px] lg:w-[4px] self-stretch bg-orange-500 rounded-full" />

          <div className="flex flex-col gap-5 lg:gap-6" style={{ fontFamily: mono }}>
            <p className="text-[#fefefe] text-xl sm:text-2xl lg:text-[28px] leading-[1.35] font-medium">
              Each shift changed how systems are built and controlled.{' '}
              <span className="text-orange-400">This shift changes who takes the action.</span>
            </p>
            <p className="text-[#fefefe]/55 text-sm sm:text-base lg:text-lg leading-[1.6]">
              Agents can now use tools, call APIs, touch data, trigger workflows, and move value — on behalf of people and teams.
            </p>
            <p className="text-[#fefefe]/85 text-sm sm:text-base lg:text-lg leading-[1.6]">
              This creates the need for a setup that manages Identity, Execution, Governance, and Payments —{' '}
              <span className="text-orange-400">before the fact, not after.</span>
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
