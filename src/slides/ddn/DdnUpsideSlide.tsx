import { motion } from 'framer-motion';

const ANTON = "'Anton', sans-serif";
const MONO = "'Geist Mono', monospace";

const pairs: { era: string; name: React.ReactNode; now?: boolean }[] = [
  { era: 'The PC era', name: <>x86 + <span className="text-[#fefefe] font-bold">Windows</span></> },
  { era: 'The cloud era', name: <>commodity servers + <span className="text-[#fefefe] font-bold">Linux</span></> },
  { era: 'The AI era', name: <>GPUs + <span className="text-[#fefefe] font-bold">CUDA</span></> },
  { era: 'The agent era', name: <>Alerix + <span className="text-orange-400 font-bold">Unicity AOS</span></>, now: true },
];

const ups: { num: string; title: string; text: React.ReactNode; tail: string }[] = [
  {
    num: '01',
    title: 'Every AI factory becomes an agent factory',
    text: <>Agents <span className="text-[#fefefe] font-bold">hammer the data layer harder than any human workload.</span> The OS sells your infrastructure; your infrastructure ships our OS.</>,
    tail: 'flywheel, not a feature',
  },
  {
    num: '02',
    title: 'The sovereign agent stack',
    text: <>Every government's AI factory needs agents it can <span className="text-[#fefefe] font-bold">prove things about.</span> Your sovereign accounts, our audited runtime — the stack nations standardize on.</>,
    tail: 'a category with two seats',
  },
  {
    num: '03',
    title: 'Industry solutions on top',
    text: <>Codewall, the Agentic Firewall, compliance consoles — <span className="text-[#fefefe] font-bold">vertical products packaged on the OS.</span> Each lifts ACV with the regulated buyers — banks, hospitals, governments — you already sell to.</>,
    tail: 'higher ACV in regulated accounts',
  },
];

export function DdnUpsideSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />
      <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-8 lg:py-9 gap-5 lg:gap-6">

        {/* Header */}
        <div className="shrink-0">
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.6 }}
            className="text-[#fefefe] text-[32px] sm:text-[46px] lg:text-[58px] xl:text-[66px] leading-[1.0] tracking-tight uppercase"
            style={{ fontFamily: ANTON }}
          >
            What a <span className="text-orange-400">partnership</span> looks like.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-2.5 text-[#fefefe]/70 text-sm sm:text-base lg:text-lg leading-snug max-w-5xl"
            style={{ fontFamily: MONO }}
          >
            Every era of computing was won by an <span className="text-[#fefefe] font-bold">infrastructure + OS pair.</span>
          </motion.p>
        </div>

        {/* Era pairs strip */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="shrink-0 flex items-stretch"
        >
          {pairs.map((p, i) => (
            <div key={p.era} className="flex items-stretch flex-1">
              {i > 0 && <div className="flex items-center px-2 lg:px-3 text-[#fefefe]/30 text-lg shrink-0" style={{ fontFamily: ANTON }}>→</div>}
              <div
                className="flex-1 rounded-lg px-4 py-2.5"
                style={
                  p.now
                    ? { border: '1.5px solid rgba(249,115,22,0.7)', background: 'rgba(249,115,22,0.06)' }
                    : { border: '1px solid rgba(255,255,255,0.10)', background: 'rgba(255,255,255,0.02)' }
                }
              >
                <p className={`text-[10px] lg:text-xs tracking-[0.16em] uppercase mb-1.5 ${p.now ? 'text-orange-400' : 'text-[#fefefe]/40'}`} style={{ fontFamily: MONO }}>{p.era}</p>
                <p className="text-[#fefefe]/75 text-sm lg:text-base" style={{ fontFamily: MONO }}>{p.name}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Upside blocks */}
        <div className="flex gap-4 lg:gap-5 items-stretch">
          {ups.map((u, i) => (
            <motion.div
              key={u.num}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 + i * 0.12, duration: 0.5 }}
              className="flex-1 rounded-xl border border-white/10 bg-white/[0.02] border-t-[3px] border-t-orange-500 px-5 py-4 lg:px-6 lg:py-5 flex flex-col"
            >
              <p className="text-orange-400 text-xs lg:text-sm tracking-[0.2em] mb-3" style={{ fontFamily: MONO }}>{u.num}</p>
              <p className="text-[#fefefe] text-xl lg:text-[26px] uppercase leading-tight mb-3" style={{ fontFamily: ANTON }}>{u.title}</p>
              <p className="text-[#fefefe]/70 text-sm lg:text-[17px] leading-snug flex-1" style={{ fontFamily: MONO }}>{u.text}</p>
              <p className="text-orange-400 text-xs lg:text-sm mt-3 pt-3" style={{ fontFamily: MONO, borderTop: '1px solid rgba(255,255,255,0.10)' }}>{u.tail}</p>
            </motion.div>
          ))}
        </div>

        {/* Kicker */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.75, duration: 0.5 }}
          className="shrink-0 text-xl sm:text-3xl lg:text-[38px] leading-tight pt-4"
          style={{ fontFamily: ANTON, borderTop: '1px solid rgba(255,255,255,0.10)' }}
        >
          <span className="text-[#fefefe]/60">The agent era hasn't picked its pair yet.</span> <span className="text-orange-400">Let's be it.</span>
        </motion.p>
      </div>
    </div>
  );
}
