import { motion } from 'framer-motion';

const mono = "'Geist Mono', monospace";
const display = "'Anton', sans-serif";

type Offer = {
  label: string;
  name: string;
  desc: string;
};

const offers: Offer[] = [
  {
    label: 'Offer 01',
    name: 'Concierge',
    desc: 'Personal agent on every subscriber line.',
  },
  {
    label: 'Offer 02',
    name: 'Agent Cloud',
    desc: 'Managed agent hosting for enterprises.',
  },
];

type NumberedGroup = {
  n: string;
  title: string;
  body: string;
};

const groups: NumberedGroup[] = [
  {
    n: '01',
    title: 'Governance',
    body: 'Agent identity & registry · Compliance & audit.',
  },
  {
    n: '02',
    title: 'Cost management',
    body: 'Intelligent routing · Agent sprawl & cost control.',
  },
  {
    n: '03',
    title: 'Protect',
    body: 'Prompt injection defense · Data loss prevention.',
  },
  {
    n: '04',
    title: 'Transact',
    body: 'A2A payments — private, compliant settlement.',
  },
  {
    n: '05',
    title: 'Deploy',
    body: 'Sovereign hosting — in-country, on your infrastructure.',
  },
];

export function TelecomUseCasesSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">

      {/* Subtle dotted background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '34px 34px',
        }}
      />

      <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-8 lg:py-10 gap-4 lg:gap-5">

        {/* Header */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-orange-400 text-[10px] sm:text-xs lg:text-sm tracking-[0.4em] uppercase font-bold"
            style={{ fontFamily: mono }}
          >
            The internal payoff · the operator console
          </motion.p>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[40px] sm:text-[60px] lg:text-[88px] xl:text-[104px] leading-[0.95] tracking-tight uppercase mt-2"
            style={{
              fontFamily: display,
              WebkitFontSmoothing: 'antialiased',
              backfaceVisibility: 'hidden',
              textRendering: 'geometricPrecision',
            }}
          >
            CONCIERGE IS{' '}
            <span className="text-orange-400">JUST ONE OFFER.</span>
          </motion.h1>
        </div>

        {/* Body — 2 columns: offers + capabilities left, console screenshot right */}
        <div className="shrink-0 flex gap-6 lg:gap-10 items-center">

          {/* LEFT — offers + grouped capabilities */}
          <div className="flex flex-col" style={{ width: '37%' }}>

            {/* Two headline offer cards */}
            <div className="grid grid-cols-2 gap-3 lg:gap-4">
              {offers.map((o, i) => (
                <motion.div
                  key={o.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.08, duration: 0.5 }}
                  className="rounded-lg px-3 lg:px-4 py-3 lg:py-4"
                  style={{
                    border: '1px solid rgba(255,106,0,0.50)',
                    background: 'rgba(255,106,0,0.05)',
                  }}
                >
                  <p
                    className="text-orange-400 text-[9px] sm:text-[10px] lg:text-xs tracking-[0.24em] uppercase"
                    style={{ fontFamily: mono }}
                  >
                    {o.label}
                  </p>
                  <p
                    className="text-[#fefefe] text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold leading-tight mt-1"
                    style={{ fontFamily: display }}
                  >
                    {o.name}
                  </p>
                  <p
                    className="text-[#e0b893] text-[10px] sm:text-xs lg:text-sm leading-snug mt-1"
                    style={{ fontFamily: mono }}
                  >
                    {o.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-[#c4c4c4] text-sm sm:text-base lg:text-lg leading-relaxed mt-4 lg:mt-5"
              style={{
                fontFamily:
                  '"Helvetica Neue", Helvetica, Arial, sans-serif',
              }}
            >
              Both ship as your own infrastructure — or white-labeled and resold to your enterprise customers. Core use cases:
            </motion.p>

            {/* Numbered capability list — matches UseCasesSlide style */}
            <div className="flex flex-col gap-3 lg:gap-4 mt-3 lg:mt-4">
              {groups.map((g, i) => (
                <motion.div
                  key={g.title}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.07, duration: 0.4 }}
                  className="flex items-start gap-4 lg:gap-6"
                >
                  <span
                    className="text-orange-400/80 text-[10px] sm:text-xs lg:text-sm font-bold mt-1 shrink-0 w-5 lg:w-7"
                    style={{ fontFamily: mono }}
                  >
                    {g.n}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3
                      className="text-[#fefefe]/90 text-[15px] sm:text-[17px] lg:text-[19px] xl:text-[21px] leading-[1.15] tracking-tight uppercase font-bold"
                      style={{
                        fontFamily:
                          '"Helvetica Neue", Helvetica, Arial, sans-serif',
                      }}
                    >
                      {g.title}
                    </h3>
                    <p
                      className="text-[#fefefe]/65 text-[12px] sm:text-[13px] lg:text-[14px] xl:text-[15px] leading-snug mt-1"
                      style={{
                        fontFamily:
                          '"Helvetica Neue", Helvetica, Arial, sans-serif',
                      }}
                    >
                      {g.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>

          {/* RIGHT — operator console screenshot */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="flex-1 flex flex-col justify-center min-w-0"
          >
            <img
              src="/dashboards/use-cases-console.png"
              alt="Unicity operator console"
              className="w-full rounded-[11px] border border-[#2a2a2a]"
              style={{ boxShadow: '0 22px 56px rgba(0,0,0,0.6)' }}
            />
            <p
              className="text-[#a4a4a4] italic text-[10px] sm:text-xs lg:text-sm mt-2"
              style={{ fontFamily: mono }}
            >
              Live: one pane of glass across every agent workload — internal or resold.
            </p>
          </motion.div>

        </div>

      </div>
    </div>
  );
}
