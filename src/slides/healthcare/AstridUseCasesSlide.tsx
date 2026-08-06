import { motion } from 'framer-motion';
import { tr } from '../../i18n';

// Card accent colors are language-independent.
const useCases = [
  { color: '#10b981' },
  { color: '#3b82f6' },
  { color: '#f59e0b' },
  { color: '#ec4899' },
  { color: '#a855f7' },
  { color: '#6366f1' },
];

const T = tr({
  en: {
    eyebrow: 'Appendix — Kernel',
    headLead: 'SWAP A CAPSULE.',
    headAccent: 'CHANGE EVERYTHING.',
    intro: (
      <>
        Because intelligence is no longer baked into the OS, anyone can change how AOS thinks without touching a single line of core code.{' '}
        <span className="text-orange-400 font-bold">Swap a capsule, change the config, restart.</span>{' '}
        That's it.
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
        Como a inteligência não está mais embutida no OS, qualquer um pode mudar como o AOS pensa sem tocar em uma única linha de código central.{' '}
        <span className="text-orange-400 font-bold">Troque uma cápsula, mude a configuração, reinicie.</span>{' '}
        É só isso.
      </>
    ),
    useCases: [
      {
        title: 'Rode Completamente Offline',
        audience: 'Finanças, saúde, defesa',
        desc: 'Troque a cápsula de provedor de nuvem por uma local (Ollama, vLLM). Todo o resto continua funcionando. Mudança de configuração de uma linha, totalmente isolado da rede.',
      },
      {
        title: 'Arquiteturas de Agentes Inovadoras',
        audience: 'Pesquisadores de IA, startups',
        desc: 'Conecte um sistema de debate, um planejador MCTS ou um loop de cadeia de verificação. O resto do OS — ferramentas, sandboxing, auditoria — funciona sem alterações.',
      },
      {
        title: 'Cache de LLM Transparente',
        audience: 'Equipes executando agentes em escala',
        desc: 'Adicione uma cápsula de cache como middleware. 30–60% menos chamadas de API para cargas repetitivas. Sem mudanças de código, sem reimplantação.',
      },
      {
        title: 'Agentes Autônomos Durante a Noite',
        audience: 'Equipes de desenvolvimento',
        desc: 'Troque o orquestrador por uma cápsula de trabalhador autônomo. Ela escreve código, executa testes, se autocorrige — mesmo sandbox, mesma trilha de auditoria.',
      },
      {
        title: 'Combine Provedores',
        audience: 'Equipes usando múltiplos modelos',
        desc: 'Instale várias cápsulas de provedor com uma cápsula de roteamento. Direcione cada requisição ao melhor modelo por complexidade, custo ou latência.',
      },
      {
        title: 'Entregue Distros Personalizadas',
        audience: 'Equipes de plataforma, empresas SaaS',
        desc: 'Uma base de código, infinitas configurações. Cada cliente recebe um conjunto de cápsulas diferente. Patches de segurança são entregues a todos simultaneamente.',
      },
    ],
  },
});

export function AstridUseCasesSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">

      {/* Background grid texture — match the rest of the deck */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 h-full flex flex-col px-8 sm:px-12 lg:px-16 pt-8 pb-14 lg:pt-10 lg:pb-16 justify-center gap-6 lg:gap-8">

        {/* Header */}
        <div className="shrink-0">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            className="text-orange-400 text-[10px] sm:text-xs lg:text-sm tracking-[0.4em] uppercase font-bold"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            {T.eyebrow}
          </motion.p>
          <motion.h1 initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[36px] sm:text-[54px] lg:text-[72px] xl:text-[84px] leading-[0.95] tracking-tight uppercase mt-2"
            style={{ fontFamily: "'Anton', sans-serif" }}>
            {T.headLead}{' '}
            <span className="text-orange-400">{T.headAccent}</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-4 lg:mt-5 text-[#fefefe]/80 text-xs sm:text-sm lg:text-base leading-[1.55]"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            {T.intro}
          </motion.p>
        </div>

        {/* Use case grid — 3 cols × 2 rows */}
        <div className="grid grid-cols-3 grid-rows-2 gap-3 sm:gap-4 lg:gap-5 shrink-0">
          {useCases.map((uc, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.07, duration: 0.4 }}
              className="rounded-xl p-4 lg:p-5 flex flex-col"
              style={{
                borderLeft: `3px solid ${uc.color}`,
                border: `1px solid ${uc.color}28`,
                borderLeftWidth: '3px',
                borderLeftColor: uc.color,
                background: `linear-gradient(180deg, ${uc.color}08 0%, rgba(10,10,15,0.5) 100%)`,
              }}>
              <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-[26px] leading-[1.05] tracking-tight uppercase mb-1.5"
                style={{ fontFamily: "'Anton', sans-serif", color: uc.color }}>
                {T.useCases[i].title}
              </h3>
              <p className="text-[#fefefe]/40 text-[9px] sm:text-[10px] lg:text-[11px] mb-3 tracking-[0.2em] uppercase font-bold"
                style={{ fontFamily: "'Geist Mono', monospace" }}>
                {T.useCases[i].audience}
              </p>
              <p className="text-[#fefefe]/70 text-[10px] sm:text-[11px] lg:text-xs leading-[1.55] flex-1"
                style={{ fontFamily: "'Geist Mono', monospace" }}>
                {T.useCases[i].desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
