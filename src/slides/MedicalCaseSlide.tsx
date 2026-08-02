import { motion } from 'framer-motion';

const ease = [0.16, 1, 0.3, 1] as const;
const ANTON = "'Anton', sans-serif";
const MONO = "'Geist Mono', monospace";

const cards = [
  {
    src: '/case-medical/padra-chat.png',
    alt: 'Padra patient concierge chat',
    kind: 'phone' as const,
    label: 'Patient Concierge',
    desc: (
      <>
        <span className="text-orange-400">“I&apos;m not going to guess at a diagnosis.”</span> Safety-bounded — routes to a specialist.
      </>
    ),
  },
  {
    src: '/case-medical/padra-timeline.png',
    alt: 'Padra recovery timeline',
    kind: 'phone' as const,
    label: 'Recovery Timeline',
    desc: 'Day-by-day post-op guidance, on the patient’s phone.',
  },
  {
    src: '/case-medical/padra-dashboard.png',
    alt: 'Padra AOS governance dashboard',
    kind: 'dash' as const,
    label: 'AOS Governance',
    desc: 'Every agent governed — prompt-injection, DLP & compliance blocked and logged.',
  },
];

export function MedicalCaseSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      {/* ambient grid */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      {/* ambient glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 55%, rgba(249,115,22,0.09) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-10 lg:py-12 gap-7">

        {/* Header */}
        <div className="shrink-0">
          <motion.h1
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#fefefe] text-[28px] sm:text-[40px] lg:text-[56px] xl:text-[64px] leading-[0.95] tracking-tight uppercase"
            style={{ fontFamily: ANTON }}
          >
            Example Solution: <span className="text-orange-400">Autonomous patient journey</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="mt-2.5 text-[#fefefe]/80 text-base lg:text-lg max-w-6xl leading-relaxed"
            style={{ fontFamily: MONO }}
          >
            Healthcare's biggest blocker is compliance — and the fear of hallucinations. <span className="text-orange-400 font-bold">AOS enforces compliance at the kernel</span>, with proofs of every agent execution.  
          </motion.p>
        </div>

        {/* Three framed cards */}
        <div className="flex justify-center items-start gap-6 lg:gap-8">
          {cards.map((c, i) => (
            <motion.figure
              key={c.label}
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 + i * 0.14, duration: 0.6, ease }}
              className="flex flex-col items-center"
            >
              {c.kind === 'phone' ? (
                <img
                  src={c.src}
                  alt={c.alt}
                  className="h-[380px] lg:h-[440px] w-auto"
                  style={{ filter: 'drop-shadow(0 22px 44px rgba(0,0,0,0.6))' }}
                />
              ) : (
                <div
                  className="rounded-xl overflow-hidden"
                  style={{ border: '1px solid rgba(255,255,255,0.12)', boxShadow: '0 22px 60px rgba(0,0,0,0.55)' }}
                >
                  <img src={c.src} alt={c.alt} className="h-[380px] lg:h-[440px] w-auto block" />
                </div>
              )}
              <figcaption className="mt-4 text-center max-w-[260px]">
                <p className="text-orange-400 text-sm lg:text-base font-bold tracking-[0.15em] uppercase" style={{ fontFamily: MONO }}>
                  {c.label}
                </p>
                <p className="text-[#fefefe]/60 text-xs lg:text-sm leading-snug mt-1.5" style={{ fontFamily: MONO }}>
                  {c.desc}
                </p>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </div>
  );
}
