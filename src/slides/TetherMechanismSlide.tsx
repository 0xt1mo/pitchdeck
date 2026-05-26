import { motion } from 'framer-motion';

type Card = {
  title: string;
  body: string[];
  label: string;
  highlight?: boolean;
};

const cards: Card[] = [
  {
    title: 'QVAC',
    body: [
      'The agent runs on the user’s device.',
      'It reads the task, uses local context,',
      'and prepares the next action.',
    ],
    label: 'Local AI',
  },
  {
    title: 'Astrid OS',
    body: [
      'Astrid checks permissions, limits,',
      'wallet access, tools, and approval rules',
      'before the action runs.',
    ],
    label: 'Action Control',
    highlight: true,
  },
  {
    title: 'WDK + USDT',
    body: [
      'WDK handles the approved wallet action.',
      'Keys stay self-custodial.',
      'USDT moves.',
    ],
    label: 'Wallet Execution',
  },
];

export function TetherMechanismSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">

      {/* Background grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 h-full flex flex-col justify-center gap-6 lg:gap-8 px-8 sm:px-12 lg:px-16 py-8 sm:py-10 lg:py-12">

        {/* Header */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-orange-400 text-[10px] sm:text-xs tracking-[0.4em] uppercase"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            How it works
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[40px] sm:text-[60px] lg:text-[88px] xl:text-[104px] leading-[0.95] tracking-tight uppercase mt-2"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            <span className="text-[#fefefe] block">QVAC RUNS LOCALLY.</span>
            <span className="text-orange-400">ASTRID CHECKS THE ACTION.</span>
          </motion.h1>
        </div>

        {/* Three mechanism cards */}
        <div className="grid grid-cols-3 gap-4 lg:gap-5 shrink-0 items-stretch">
          {cards.map((c, i) => (
            <MechanismCard key={c.title} card={c} delay={0.4 + i * 0.12} />
          ))}
        </div>

        {/* Bottom thesis bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.95, duration: 0.5 }}
          className="shrink-0 flex items-stretch gap-4 rounded-lg px-5 py-4 lg:px-6 lg:py-5"
          style={{
            border: '1px solid rgba(255,255,255,0.08)',
            background:
              'linear-gradient(180deg, rgba(249,115,22,0.04) 0%, rgba(10,10,15,0.6) 100%)',
          }}
        >
          <div className="shrink-0 w-[3px] lg:w-[4px] bg-orange-500 rounded-full" />
          <p
            className="text-[#fefefe]/90 text-sm sm:text-base lg:text-lg leading-[1.5]"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            <span className="text-orange-400 font-bold">Together:</span>{' '}
            local AI agents that can use self-custodial wallets with{' '}
            <span className="text-[#fefefe] font-bold">limits, approvals, and proof</span>{' '}
            of what happened.
          </p>
        </motion.div>

      </div>
    </div>
  );
}

function MechanismCard({ card, delay }: { card: Card; delay: number }) {
  const border = card.highlight
    ? '1px solid rgba(249,115,22,0.65)'
    : '1px solid rgba(255,255,255,0.10)';
  const background = card.highlight
    ? 'linear-gradient(180deg, rgba(249,115,22,0.06) 0%, rgba(10,10,15,0.6) 100%)'
    : '#0a0a0f';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      className="rounded-xl flex flex-col p-5 lg:p-6"
      style={{ border, background }}
    >
      {/* Title */}
      <p
        className={`${card.highlight ? 'text-orange-400' : 'text-[#fefefe]'} text-[28px] sm:text-[34px] lg:text-[44px] leading-none tracking-tight uppercase`}
        style={{ fontFamily: "'Anton', sans-serif" }}
      >
        {card.title}
      </p>

      {/* Body */}
      <div className="mt-5 lg:mt-6 flex flex-col gap-1">
        {card.body.map((line, i) => (
          <p
            key={i}
            className="text-[#fefefe]/90 text-xs sm:text-sm lg:text-base leading-[1.5]"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            {line}
          </p>
        ))}
      </div>

      {/* Spacer */}
      <div className="flex-1" />

      {/* Divider */}
      <div
        className="mt-5 lg:mt-6"
        style={{
          borderTop: card.highlight
            ? '1px solid rgba(249,115,22,0.65)'
            : '1px solid rgba(255,255,255,0.10)',
        }}
      />

      {/* Bottom label */}
      <p
        className={`${card.highlight ? 'text-orange-400' : 'text-[#fefefe]/70'} text-[11px] sm:text-xs lg:text-sm mt-4 tracking-[0.32em] uppercase font-bold`}
        style={{ fontFamily: "'Geist Mono', monospace" }}
      >
        {card.label}
      </p>
    </motion.div>
  );
}
