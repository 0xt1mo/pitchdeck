import { motion } from 'framer-motion';

type Card = {
  title: string;
  body: string;
  closer: string;
  closerHighlight: string;
};

const cards: Card[] = [
  {
    title: 'PRIVACY · COMPLIANCE · THROUGHPUT',
    body: 'The three properties no public chain delivers together. Bearer-token settlement, peer-to-peer, at machine speed.',
    closer: '',
    closerHighlight: 'State is only shared amongst counterparties.',
  },
  {
    title: 'NATIVE OS INTEGRATION',
    body: 'Every action — model output, tool call, decision — is verifiable and portable.',
    closer: "Execution and identity remain inside the operator's perimeter.",
    closerHighlight: 'No transactions on the public network.',
  },
];

export function EdgePayoffSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col px-8 sm:px-12 lg:px-20 py-8 sm:py-10 lg:py-12 justify-center gap-6 lg:gap-8">

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-[32px] sm:text-[48px] lg:text-[68px] xl:text-[80px] leading-[0.95] tracking-tight uppercase shrink-0"
          style={{ fontFamily: "'Anton', sans-serif" }}
        >
          <span className="text-[#fefefe]">WHAT THIS</span>{' '}
          <span className="text-orange-400">UNLOCKS.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-[#fefefe]/90 text-lg sm:text-xl lg:text-2xl leading-snug shrink-0 max-w-6xl -mt-2"
          style={{ fontFamily: "'Geist Mono', monospace" }}
        >
          The unbundling unlocks capabilities no public chain has delivered before.
        </motion.p>

        {/* Two cards */}
        <div className="grid grid-cols-2 gap-6 lg:gap-8 shrink-0">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + i * 0.15 }}
              className="rounded-lg p-7 lg:p-10 flex flex-col gap-5 lg:gap-6"
              style={{
                background: 'rgba(249,115,22,0.04)',
                border: '1px solid rgba(249,115,22,0.55)',
              }}
            >
              <h3
                className="text-orange-400 text-[24px] sm:text-[32px] lg:text-[40px] leading-[1.05] tracking-tight uppercase"
                style={{ fontFamily: "'Anton', sans-serif" }}
              >
                {c.title}
              </h3>
              <p
                className="text-[#fefefe]/90 text-base sm:text-lg lg:text-xl leading-relaxed"
                style={{ fontFamily: "'Geist Mono', monospace" }}
              >
                {c.body}
              </p>
              <p
                className="text-base sm:text-lg lg:text-xl leading-relaxed"
                style={{ fontFamily: "'Geist Mono', monospace" }}
              >
                {c.closer && (
                  <span className="text-[#fefefe]/65">
                    {c.closer}{' '}
                  </span>
                )}
                <span className="text-orange-400">{c.closerHighlight}</span>
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom anchor */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="shrink-0 pt-4 lg:pt-5"
          style={{ borderTop: '1px solid rgba(249,115,22,0.4)' }}
        >
          <p
            className="text-[#fefefe]/90 text-xl sm:text-2xl lg:text-[28px] leading-snug"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            Unicity is public and permissionless.{' '}
            <span className="text-orange-400">Agent state is private.</span>
          </p>
        </motion.div>

      </div>
    </div>
  );
}
