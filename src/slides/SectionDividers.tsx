import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

const mono = { fontFamily: "'Geist Mono', monospace" };
const anton = { fontFamily: "'Anton', sans-serif" };

function Divider({ eyebrow, titleWhite, titleOrange, subtitle, rule = true }: {
  eyebrow?: string; titleWhite?: ReactNode; titleOrange: ReactNode; subtitle?: ReactNode; rule?: boolean;
}) {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div
        className="fixed inset-0 z-[1] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 55% 55% at 50% 50%, rgba(249,115,22,0.1) 0%, transparent 70%)' }}
      />
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-8 sm:px-12 lg:px-20 gap-6 lg:gap-8">
        {eyebrow && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-orange-400 text-xs lg:text-sm tracking-[0.45em] uppercase"
            style={mono}
          >
            {eyebrow}
          </motion.p>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-[#fefefe] text-[44px] sm:text-[72px] lg:text-[100px] leading-[0.95] tracking-tight"
          style={anton}
        >
          {titleWhite && (
            <>
              {titleWhite}
              <br />
            </>
          )}
          <span className="text-orange-400">{titleOrange}</span>
        </motion.h1>
        {rule && (
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="h-[2px] w-40 sm:w-56 lg:w-72 bg-gradient-to-r from-transparent via-orange-500 to-transparent origin-center"
          />
        )}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-[#fefefe]/70 text-base sm:text-lg lg:text-2xl leading-relaxed max-w-4xl"
            style={mono}
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </div>
  );
}

export function IntroducingUnicityDivider() {
  return (
    <Divider
      eyebrow="The Solution"
      titleWhite="INTRODUCING"
      titleOrange="UNICITY"
      subtitle="New Foundations"
    />
  );
}

export function TradeoffsDivider() {
  return (
    <Divider
      titleWhite="FIVE WINS."
      titleOrange="ONE HARD PROBLEM."
      subtitle="Every architecture has a cost. Ours buys us five things — and leaves us one hard problem to solve."
    />
  );
}

export function AtomicityProblemDivider() {
  return (
    <Divider
      eyebrow="The Hard Part"
      titleWhite="ONE HARD PROBLEM:"
      titleOrange="ATOMICITY."
      subtitle={'Free in any shared-state model — the database, the global ledger, the world computer all give it by default. Without shared state, "all or nothing" has to be enforced by the tokens themselves.'}
    />
  );
}

export function MathWorthItDivider() {
  return (
    <Divider
      titleWhite="THE MATH IS HARDER."
      titleOrange="BUT IT'S WORTH IT."
      rule={false}
    />
  );
}

export function NewFinancialSystemDivider() {
  return (
    <Divider
      eyebrow="What You Get"
      titleWhite="A NEW"
      titleOrange="FINANCIAL SYSTEM."
      subtitle="Massively parallel. Private. Decentralized."
    />
  );
}

export function EmissionDivider() {
  return (
    <Divider
      eyebrow="Tokenomics"
      titleOrange="EMISSION"
      subtitle="How new supply enters the network."
    />
  );
}
