import { motion } from 'framer-motion';

type Column = {
  n: string;
  label: string;
  timing: string;
  body: string;
  callout: string;
  wedge?: boolean;
};

const columns: Column[] = [
  {
    n: '1',
    label: 'SECURITY',
    timing: 'The Wedge · Urgent Today',
    body: 'Every enterprise running agents hits the compliance wall today.',
    callout: 'SOC2, HIPAA, EU AI Act pass by design.',
    wedge: true,
  },
  {
    n: '2',
    label: 'GOVERNANCE',
    timing: 'Activated Next',
    body: 'Same substrate delivers audit, policy, and identity for free.',
    callout: 'No second procurement cycle required.',
    wedge: true,
  },
  {
    n: '3',
    label: 'NETWORKING',
    timing: 'Compounds',
    body: 'Once agents are governed, they connect to each other.',
    callout: 'MCP, A2A, x402 routing inside the substrate.',
  },
  {
    n: '4',
    label: 'PAYMENTS',
    timing: 'Future Revenue',
    body: 'A2A settlement materializes as the network of governed agents matures.',
    callout: 'Machine-economics revenue accrual.',
  },
];

export function WedgeSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col px-8 sm:px-12 lg:px-20 py-8 sm:py-10 lg:py-12 justify-center gap-6 lg:gap-8">

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-orange-400 text-xs sm:text-sm lg:text-base tracking-[0.4em] uppercase font-bold shrink-0"
          style={{ fontFamily: "'Geist Mono', monospace" }}
        >
          The Expand · One Procurement, Four Revenue Lines
        </motion.p>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-[40px] sm:text-[60px] lg:text-[80px] xl:text-[92px] leading-[0.95] tracking-tight uppercase shrink-0 -mt-2"
          style={{ fontFamily: "'Anton', sans-serif" }}
        >
          <span className="text-[#fefefe]">LAND ON SECURITY.</span>{' '}
          <span className="text-orange-400">REVENUE TODAY.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-lg sm:text-xl lg:text-2xl leading-snug shrink-0 max-w-6xl"
          style={{ fontFamily: "'Geist Mono', monospace" }}
        >
          <span className="text-[#fefefe]/90">Security and Governance are hair on fire problems today.</span>
          <br />
          <span className="text-orange-400">Networking and payments compound as the market matures.</span>
        </motion.p>

        {/* Numbered timeline */}
        <div className="relative grid grid-cols-4 shrink-0 mt-1">
          <div
            className="absolute left-0 right-0 top-[16px] h-[2px] z-0"
            style={{
              background: 'linear-gradient(to right, rgba(249,115,22,0.45), rgba(249,115,22,0.25))',
            }}
          />
          {columns.map((c, i) => (
            <motion.div
              key={`num-${c.n}`}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + i * 0.08, duration: 0.4 }}
              className="relative z-10 flex items-center justify-start"
            >
              <span
                className="flex items-center justify-center w-8 h-8 rounded-full text-[#060606] text-base font-bold"
                style={{
                  background: '#f97316',
                  fontFamily: "'Geist Mono', monospace",
                }}
              >
                {c.n}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Four columns */}
        <div className="grid grid-cols-4 gap-6 lg:gap-10 shrink-0">
          {columns.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.08, duration: 0.5 }}
              className="flex flex-col gap-3 lg:gap-4"
            >
              <h3
                className={`text-[26px] sm:text-[34px] lg:text-[42px] leading-none tracking-tight uppercase ${
                  c.wedge ? 'text-orange-400' : 'text-[#fefefe]'
                }`}
                style={{ fontFamily: "'Anton', sans-serif" }}
              >
                {c.label}
              </h3>
              <p
                className="text-[#fefefe]/55 text-xs sm:text-sm lg:text-base tracking-[0.18em] uppercase font-bold"
                style={{ fontFamily: "'Geist Mono', monospace" }}
              >
                {c.timing}
              </p>
              <p
                className="text-[#fefefe] text-sm sm:text-base lg:text-lg leading-snug"
                style={{ fontFamily: "'Geist Mono', monospace" }}
              >
                {c.body}
              </p>
              <p
                className="text-orange-400 text-sm sm:text-base lg:text-lg font-bold leading-snug"
                style={{ fontFamily: "'Geist Mono', monospace" }}
              >
                → {c.callout}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
