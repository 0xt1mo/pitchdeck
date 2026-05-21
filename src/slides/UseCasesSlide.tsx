import { motion } from 'framer-motion';

type UseCase = {
  n: string;
  title: string;
  detail: string;
};

const cases: UseCase[] = [
  {
    n: '01',
    title: 'INTELLIGENT ROUTING',
    detail: 'Route every agent request to the right model, tool, or capsule.',
  },
  {
    n: '02',
    title: 'BRING YOUR OWN CODING AGENT',
    detail: 'Organizational freedom for any framework with security and strict cost control.',
  },
  {
    n: '03',
    title: 'AGENT SPRAWL COST CONTROL',
    detail: 'Budget enforcement and token accounting per agent and per workflow.',
  },
  {
    n: '04',
    title: 'DATA LOSS PREVENTION',
    detail: 'Semantic intercept fabric blocks exfiltration before it leaves the perimeter.',
  },
  {
    n: '05',
    title: 'X402 PAYMENTS',
    detail: 'Private, compliant A2A settlement over Unicity Proof System.',
  },
];

export function UseCasesSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col px-8 sm:px-12 lg:px-16 py-6 sm:py-8 lg:py-10 justify-center gap-5 lg:gap-6">

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-orange-400 text-xs sm:text-sm lg:text-base tracking-[0.4em] uppercase font-bold shrink-0"
          style={{ fontFamily: "'Geist Mono', monospace" }}
        >
          Product
        </motion.p>

        {/* Headline + subtitle */}
        <div className="shrink-0 flex flex-col gap-3 -mt-1">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[32px] sm:text-[44px] lg:text-[60px] xl:text-[68px] leading-[0.95] tracking-tight uppercase"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            <span className="text-[#fefefe]">ENTERPRISE</span>{' '}
            <span className="text-orange-400">CASE STUDIES.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="text-[#fefefe]/85 text-sm sm:text-base lg:text-lg leading-snug max-w-6xl"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            Unicity's secure compute platform delivers what enterprises need today —{' '}
            <span className="text-orange-400">from DLP to cost control and developer freedom.</span>
          </motion.p>
        </div>

        {/* Body — 2 columns: use cases left, dashboard right */}
        <div className="grid grid-cols-[1.15fr_1fr] gap-6 lg:gap-10 shrink-0 items-start">

          {/* 5 stacked use cases */}
          <div className="flex flex-col gap-3 lg:gap-4">
            {cases.map((c, i) => (
              <motion.div
                key={c.n}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.35 + i * 0.07 }}
                className="flex items-start gap-4 lg:gap-6"
              >
                <span
                  className="text-orange-400/80 text-[10px] sm:text-xs lg:text-sm font-bold mt-1 shrink-0 w-5 lg:w-7"
                  style={{ fontFamily: "'Geist Mono', monospace" }}
                >
                  {c.n}
                </span>
                <div className="flex-1 min-w-0">
                  <h3
                    className="text-[#fefefe]/90 text-[15px] sm:text-[17px] lg:text-[19px] xl:text-[21px] leading-[1.15] tracking-tight uppercase font-bold"
                    style={{
                      fontFamily:
                        '"Helvetica Neue", Helvetica, Arial, sans-serif',
                    }}
                  >
                    {c.title}
                  </h3>
                  <p
                    className="text-[#fefefe]/65 text-[12px] sm:text-[13px] lg:text-[14px] xl:text-[15px] leading-snug mt-1"
                    style={{
                      fontFamily:
                        '"Helvetica Neue", Helvetica, Arial, sans-serif',
                    }}
                  >
                    {c.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Dashboard preview */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col gap-2"
          >
            <div
              className="rounded-lg overflow-hidden w-full"
              style={{
                border: '1px solid rgba(249,115,22,0.45)',
                background: '#0a0a0f',
                aspectRatio: '16 / 11',
              }}
            >
              <img
                src="/dashboards/overview.png"
                alt="Unicity operator console"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <p
              className="text-[#fefefe]/65 text-xs lg:text-sm italic tracking-[0.12em]"
              style={{ fontFamily: "'Geist Mono', monospace" }}
            >
              Live: Unicity operator console — one pane of glass across every agent workload.
            </p>
          </motion.div>

        </div>

      </div>
    </div>
  );
}
