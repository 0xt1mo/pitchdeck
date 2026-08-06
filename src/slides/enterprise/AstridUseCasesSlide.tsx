import { motion } from 'framer-motion';
import { tr } from '../../i18n';
import splashVideoUrl from '/kling_20260226_VIDEO_Take_Image_1650_0.mp4';
import unicityLogoUrl from '/UnicityLogo.svg';

// Non-text data: stable ids + accent colors stay outside the translation map.
const useCases = [
  { id: 'offline', color: '#10b981' },
  { id: 'novel-arch', color: '#3b82f6' },
  { id: 'caching', color: '#f59e0b' },
  { id: 'overnight', color: '#ec4899' },
  { id: 'mix-match', color: '#a855f7' },
  { id: 'distros', color: '#6366f1' },
];

const T = tr({
  en: {
    eyebrow: 'Appendix — Kernel',
    headLead: 'SWAP A CAPSULE.',
    headAccent: 'CHANGE EVERYTHING.',
    intro: (
      <>
        Because intelligence is no longer baked into the OS, anyone can change how Astrid thinks without touching a single line of core code. <span className="text-orange-400">Swap a capsule, change the config, restart.</span> That's it.
      </>
    ),
    useCases: [
      {
        title: 'Run Completely Offline',
        audience: 'Finance, healthcare, defence',
        desc: 'Swap the cloud provider capsule for a local one (Ollama, vLLM). Everything else keeps working. One-line config change, fully air-gapped.',
      },
      {
        title: 'Novel Agent Architectures',
        audience: 'AI researchers, startups',
        desc: 'Plug in a debate system, MCTS planner, or chain-of-verification loop. The rest of the OS — tools, sandboxing, audit — works unchanged.',
      },
      {
        title: 'Transparent LLM Caching',
        audience: 'Teams running agents at scale',
        desc: 'Drop in a caching capsule as middleware. 30–60% fewer API calls for repetitive workloads. No code changes, no redeployment.',
      },
      {
        title: 'Autonomous Overnight Agents',
        audience: 'Development teams',
        desc: 'Swap the orchestrator for an autonomous worker capsule. It writes code, runs tests, self-corrects — same sandbox, same audit trail.',
      },
      {
        title: 'Mix & Match Providers',
        audience: 'Teams using multiple models',
        desc: 'Install multiple provider capsules with a routing capsule. Direct each request to the best model by complexity, cost, or latency.',
      },
      {
        title: 'Ship Custom Distros',
        audience: 'Platform teams, SaaS companies',
        desc: 'One codebase, infinite configurations. Each customer gets a different capsule set. Security patches ship to everyone simultaneously.',
      },
    ],
  },
  pt: {
    eyebrow: 'Apêndice — Kernel',
    headLead: 'TROQUE UMA CÁPSULA.',
    headAccent: 'MUDE TUDO.',
    intro: (
      <>
        Como a inteligência não está mais embutida no OS, qualquer um pode mudar como a Astrid pensa sem tocar em uma única linha do código central. <span className="text-orange-400">Troque uma cápsula, mude a config, reinicie.</span> É isso.
      </>
    ),
    useCases: [
      {
        title: 'Rode Completamente Offline',
        audience: 'Finanças, saúde, defesa',
        desc: 'Troque a cápsula de provedor em nuvem por uma local (Ollama, vLLM). Todo o resto continua funcionando. Mudança de config de uma linha, totalmente isolado da rede.',
      },
      {
        title: 'Arquiteturas de Agentes Inovadoras',
        audience: 'Pesquisadores de IA, startups',
        desc: 'Conecte um sistema de debate, um planejador MCTS ou um loop de chain-of-verification. O resto do OS — ferramentas, sandboxing, auditoria — funciona sem mudanças.',
      },
      {
        title: 'Cache de LLM Transparente',
        audience: 'Times rodando agentes em escala',
        desc: 'Insira uma cápsula de cache como middleware. 30–60% menos chamadas de API para cargas repetitivas. Sem mudanças de código, sem redeploy.',
      },
      {
        title: 'Agentes Autônomos Durante a Noite',
        audience: 'Times de desenvolvimento',
        desc: 'Troque o orquestrador por uma cápsula de worker autônomo. Ela escreve código, roda testes, se autocorrige — mesmo sandbox, mesma trilha de auditoria.',
      },
      {
        title: 'Combine Provedores',
        audience: 'Times usando múltiplos modelos',
        desc: 'Instale várias cápsulas de provedor com uma cápsula de roteamento. Direcione cada requisição ao melhor modelo por complexidade, custo ou latência.',
      },
      {
        title: 'Entregue Distros Personalizadas',
        audience: 'Times de plataforma, empresas SaaS',
        desc: 'Uma base de código, infinitas configurações. Cada cliente recebe um conjunto de cápsulas diferente. Patches de segurança chegam a todos simultaneamente.',
      },
    ],
  },
});

export function AstridUseCasesSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-y-auto">
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
        <video className="w-full h-full object-cover opacity-15" autoPlay muted loop playsInline src={splashVideoUrl} />
        <div className="absolute inset-0 bg-[#060606]/50" />
      </div>

      <div className="relative z-10 h-full flex flex-col px-6 sm:px-10 lg:px-16 py-6 sm:py-8">

        {/* Header */}
        <div className="shrink-0">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-orange-400 text-[10px] sm:text-xs tracking-[0.4em] uppercase"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            {T.eyebrow}
          </motion.p>
          <motion.h1 initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[28px] sm:text-[40px] lg:text-[52px] leading-[0.95] tracking-tight mt-1"
            style={{ fontFamily: "'Anton', sans-serif" }}>
            {T.headLead}{' '}
            <span className="text-orange-400">{T.headAccent}</span>
          </motion.h1>
          <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-[2px] w-32 sm:w-48 bg-gradient-to-r from-orange-500 to-transparent origin-left mt-2" />
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-3 text-[#fefefe]/70 text-xs sm:text-sm leading-relaxed max-w-4xl"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            {T.intro}
          </motion.p>
        </div>

        {/* Use case grid */}
        <div className="flex-1 grid grid-cols-3 grid-rows-2 gap-3 sm:gap-4 mt-5 min-h-0">
          {useCases.map((uc, i) => (
            <motion.div key={uc.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.08, duration: 0.4 }}
              className="rounded-xl border p-4 sm:p-5 flex flex-col"
              style={{
                borderColor: `${uc.color}25`,
                background: `${uc.color}06`,
              }}>
              <h3 className="text-base sm:text-lg lg:text-xl mb-1"
                style={{ fontFamily: "'Anton', sans-serif", letterSpacing: '0.02em', color: uc.color }}>
                {T.useCases[i].title}
              </h3>
              <p className="text-[#fefefe]/35 text-[9px] sm:text-[10px] mb-2"
                style={{ fontFamily: "'Geist Mono', monospace" }}>
                {T.useCases[i].audience}
              </p>
              <p className="text-[#fefefe]/60 text-[10px] sm:text-xs leading-relaxed flex-1"
                style={{ fontFamily: "'Geist Mono', monospace" }}>
                {T.useCases[i].desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Logo */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
          className="shrink-0 mt-3 flex justify-end">
          <img src={unicityLogoUrl} alt="Unicity" className="h-5 opacity-60" />
        </motion.div>

      </div>
    </div>
  );
}
