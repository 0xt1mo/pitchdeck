import { motion } from 'framer-motion';
import { tr } from '../i18n';

type Competitor = {
  name: string;
  pos: 'top' | 'top-l' | 'top-r' | 'mid-l' | 'mid-r';
};

const competitors: Competitor[] = [
  { name: 'NeMo', pos: 'top' },
  { name: 'Lakera', pos: 'top-l' },
  { name: 'Kong', pos: 'top-r' },
  { name: 'Palo Alto AIRS', pos: 'mid-l' },
  { name: 'F5 · CalypsoAI', pos: 'mid-r' },
];

const agents = ['Codex', 'Claude Code', 'Cursor'];

const T = tr({
  en: {
    head1: 'THEY WATCH THE TRAFFIC.',
    head2: 'WE ARE THE RUNTIME BENEATH THEM.',
    sub: (
      <>
        Gateways and firewalls watch traffic from the outside. We are the runtime the agent executes on —{' '}
        <span className="text-[#fefefe] font-bold">the layer everything else depends on and nothing can bypass.</span>{' '}
        They see requests; <span className="text-orange-400 font-bold">we control execution.</span>
      </>
    ),
    tags: ['guardrail SDK', 'prompt firewall', 'API gateway', 'model scanning', 'inference proxy'],
    notes: ['watches prompts', 'watches content', 'watches traffic', 'watches models', 'watches inference'],
    aosKernel: 'The kernel every agent runs on',
    aosVerify: 'Cryptographic verification of execution',
  },
  pt: {
    head1: 'ELES OBSERVAM O TRÁFEGO.',
    head2: 'NÓS SOMOS O RUNTIME ABAIXO DELES.',
    sub: (
      <>
        Gateways e firewalls observam o tráfego de fora. Nós somos o runtime em que o agente executa —{' '}
        <span className="text-[#fefefe] font-bold">a camada da qual todo o resto depende e que nada consegue burlar.</span>{' '}
        Eles veem requisições; <span className="text-orange-400 font-bold">nós controlamos a execução.</span>
      </>
    ),
    tags: ['SDK de guardrail', 'firewall de prompt', 'gateway de API', 'varredura de modelos', 'proxy de inferência'],
    notes: ['observa prompts', 'observa conteúdo', 'observa tráfego', 'observa modelos', 'observa inferência'],
    aosKernel: 'O kernel em que cada agente roda',
    aosVerify: 'Verificação criptográfica da execução',
  },
});

export function CompetitionMinimalCodewallSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col px-8 sm:px-12 lg:px-16 py-7 sm:py-9 lg:py-11 justify-center gap-5 lg:gap-7">

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-[28px] sm:text-[40px] lg:text-[56px] xl:text-[64px] leading-[0.98] tracking-tight uppercase shrink-0"
          style={{ fontFamily: "'Anton', sans-serif" }}
        >
          <span className="text-[#fefefe]">{T.head1}</span>
          <br />
          <span className="text-orange-400">{T.head2}</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="text-[#fefefe]/85 text-base sm:text-lg lg:text-xl leading-snug shrink-0 max-w-6xl"
          style={{ fontFamily: "'Geist Mono', monospace" }}
        >
          {T.sub}
        </motion.p>

        {/* Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="relative shrink-0 mx-auto w-full max-w-[920px] h-[440px] lg:h-[480px]"
        >
          {/* dashed connection lines */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 880 460"
            preserveAspectRatio="none"
          >
            {/* competitors watching the agent cluster (dashed, from outside) */}
            <line x1="440" y1="74" x2="440" y2="116" stroke="rgba(255,255,255,0.20)" strokeWidth="1.5" strokeDasharray="4 4" />
            <line x1="190" y1="122" x2="252" y2="150" stroke="rgba(255,255,255,0.20)" strokeWidth="1.5" strokeDasharray="4 4" />
            <line x1="690" y1="122" x2="628" y2="150" stroke="rgba(255,255,255,0.20)" strokeWidth="1.5" strokeDasharray="4 4" />
            <line x1="190" y1="262" x2="252" y2="234" stroke="rgba(255,255,255,0.20)" strokeWidth="1.5" strokeDasharray="4 4" />
            <line x1="690" y1="262" x2="628" y2="234" stroke="rgba(255,255,255,0.20)" strokeWidth="1.5" strokeDasharray="4 4" />
            {/* each agent runs on AOS (solid orange, one per box) */}
            <line x1="282" y1="266" x2="282" y2="356" stroke="#f97316" strokeWidth="3" />
            <line x1="440" y1="266" x2="440" y2="356" stroke="#f97316" strokeWidth="3" />
            <line x1="598" y1="266" x2="598" y2="356" stroke="#f97316" strokeWidth="3" />
          </svg>

          {/* Competitor pills */}
          {competitors.map((c, ci) => {
            const posStyle: Record<string, React.CSSProperties> = {
              top: { top: 0, left: '50%', transform: 'translateX(-50%)' },
              'top-l': { top: '18%', left: 0 },
              'top-r': { top: '18%', right: 0 },
              'mid-l': { top: '48%', left: 0 },
              'mid-r': { top: '48%', right: 0 },
            };
            return (
              <div
                key={c.name}
                className="absolute w-[180px] sm:w-[200px] rounded-lg px-4 py-3 text-center"
                style={{
                  ...posStyle[c.pos],
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.20)',
                }}
              >
                <p
                  className="text-[#fefefe] text-sm sm:text-base lg:text-lg font-bold"
                  style={{ fontFamily: "'Geist Mono', monospace" }}
                >
                  {c.name}
                </p>
                <p
                  className="text-[#fefefe]/55 text-[11px] sm:text-xs lg:text-sm mt-0.5"
                  style={{ fontFamily: "'Geist Mono', monospace" }}
                >
                  {T.tags[ci]}
                </p>
                <p
                  className="text-orange-400/85 text-[11px] sm:text-xs lg:text-sm font-bold mt-1.5"
                  style={{ fontFamily: "'Geist Mono', monospace" }}
                >
                  {T.notes[ci]}
                </p>
              </div>
            );
          })}

          {/* Agent boxes (center) — any harness runs on the same runtime */}
          <div
            className="absolute flex justify-center gap-3 lg:gap-4"
            style={{
              top: '26%',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '480px',
            }}
          >
            {agents.map((a) => (
              <div
                key={a}
                className="flex-1 min-w-0 rounded-xl flex items-center justify-center text-center px-2"
                style={{
                  height: '150px',
                  background: 'rgba(255,255,255,0.04)',
                  border: '2px solid rgba(255,255,255,0.40)',
                }}
              >
                <p
                  className="text-[#fefefe] text-[20px] sm:text-[24px] lg:text-[30px] leading-[0.95] tracking-tight uppercase"
                  style={{ fontFamily: "'Anton', sans-serif" }}
                >
                  {a}
                </p>
              </div>
            ))}
          </div>

          {/* AOS bar (bottom) */}
          <div
            className="absolute left-0 right-0 rounded-xl flex items-center justify-between px-6 lg:px-8 py-4 lg:py-5"
            style={{
              bottom: 0,
              background: 'rgba(249,115,22,0.10)',
              border: '1.5px solid rgba(249,115,22,0.70)',
            }}
          >
            <p
              className="text-orange-400 text-[26px] sm:text-[34px] lg:text-[42px] leading-none tracking-tight uppercase"
              style={{ fontFamily: "'Anton', sans-serif" }}
            >
              Unicity AOS
            </p>
            <div className="text-right">
              <p
                className="text-[#fefefe] text-base sm:text-lg lg:text-xl font-bold leading-tight"
                style={{ fontFamily: "'Geist Mono', monospace" }}
              >
                {T.aosKernel}
              </p>
              <p
                className="text-[#fefefe]/65 text-xs sm:text-sm lg:text-base font-medium mt-1 leading-tight"
                style={{ fontFamily: "'Geist Mono', monospace" }}
              >
                {T.aosVerify}
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
