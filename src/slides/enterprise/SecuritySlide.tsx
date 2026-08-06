import { motion } from 'framer-motion';
import { tr } from '../../i18n';
import splashVideoUrl from '/kling_20260226_VIDEO_Take_Image_1650_0.mp4';
import unicityLogoUrl from '/UnicityLogo.svg';

/* Small arrow helpers */
const ArrowDown = ({ className = '' }: { className?: string }) => (
  <div className={`flex flex-col items-center ${className}`}>
    <svg width="12" height="18" viewBox="0 0 12 18" className="text-orange-400/60">
      <path d="M6 0v14M2 11l4 5 4-5" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </svg>
  </div>
);

const ArrowBidi = ({ className = '' }: { className?: string }) => (
  <div className={`flex flex-col items-center ${className}`}>
    <svg width="12" height="22" viewBox="0 0 12 22" className="text-orange-400/60">
      <path d="M2 5l4-4 4 4M6 1v20M2 17l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </svg>
  </div>
);

const ArrowRight = ({ className = '' }: { className?: string }) => (
  <svg width="20" height="12" viewBox="0 0 20 12" className={`text-orange-400/60 ${className}`}>
    <path d="M0 6h16M13 2l5 4-5 4" stroke="currentColor" strokeWidth="1.5" fill="none" />
  </svg>
);

/* Service box */
function ServiceBox({ label, variant = 'dark' }: { label: string; variant?: 'dark' | 'orange' }) {
  const border = variant === 'orange' ? 'border-orange-500/30' : 'border-white/10';
  const bg = variant === 'orange' ? 'bg-orange-500/[0.06]' : 'bg-white/[0.04]';
  return (
    <div className={`px-2 py-1.5 sm:px-3 sm:py-2 rounded-md border ${border} ${bg} text-center`}>
      <span className="text-[#fefefe]/80 text-[10px] sm:text-xs lg:text-sm uppercase tracking-wider leading-tight"
        style={{ fontFamily: "'Geist Mono', monospace" }}>
        {label}
      </span>
    </div>
  );
}

/* Pipeline box (inner LLM components) */
function PipelineBox({ label, tag, className = '' }: { label: string; tag?: string; className?: string }) {
  return (
    <div className={`relative px-3 py-2 sm:px-4 sm:py-2.5 rounded-md border border-white/15 bg-white/[0.05] text-center ${className}`}>
      <span className="text-[#fefefe]/80 text-[11px] sm:text-xs lg:text-sm uppercase tracking-wider"
        style={{ fontFamily: "'Geist Mono', monospace" }}>
        {label}
      </span>
      {tag && (
        <span className="absolute -bottom-1 right-1 text-[9px] text-red-400/80 font-bold"
          style={{ fontFamily: "'Geist Mono', monospace" }}>
          {tag}
        </span>
      )}
    </div>
  );
}

const T = tr({
  en: {
    eyebrow: 'Appendix — Security',
    headLead: 'SECURITY:',
    headAccent: 'SEMANTIC INTERCEPT FABRIC',
    subHead: 'At the core of our zero trust architecture — unparalleled security and control for autonomous agentic systems, ensuring safer, reliable, compliant & explainable operations within enterprise environments.',
    svcOrchestration: 'Orchestration & Identity',
    svcDiscovery: 'Discovery & Reputation',
    svcPayments: 'Payments & Tokens',
    svcMarketplace: 'Marketplace',
    secPolicy: 'Policy & Guardrails',
    secAccess: 'Dynamic Access Controls',
    secMonitoring: 'Suspicious Behaviour Monitoring',
    secTEE: 'Trusted Execution Environments',
    pipeSystemPrompt: 'system prompt',
    pipeUserPrompt: 'user prompt',
    pipeOutput: 'output',
    pipeApiMcpRag: 'API, MCP, RAG',
    pipeToolResponses: 'tool responses, acquired knowledge',
    boxEncoder: 'encoder',
    boxState: 'state',
    boxReasoning: 'reasoning',
    boxPlanning: 'planning',
    boxDecoder: 'decoder',
    bullets: [
      <>All agents are first class citizens, assigned a <span className="text-orange-400">unique identity</span> (ephemeral or persistent, depending on context).</>,
      <>Agents, intents, and tool services are <span className="text-orange-400">composed and permissioned dynamically</span>, giving consistent reliable behaviour, with full <span className="text-orange-400">explainability and audit trail</span>.</>,
      <>All user and agent-agent messaging is converted to <span className="text-orange-400">semantically consistent flow formats</span>, ensuring that all intents and data flows are consistently and reliably scrutinised, with faster interventions and superior explainability.</>,
      <>All messages are intercepted for <span className="text-orange-400">strict policy enforcement</span>. We apply multi-level semantic processing techniques, grounded by domain specific ontologies, using <span className="text-orange-400">signal detection and ensemble models</span>, helping mitigate emerging prompt injection and data leakage threats.</>,
      <>All agents are monitored for <span className="text-orange-400">suspicious and anomalous behavior</span>, to assist detecting and intercepting new types of agentic threat, misconfiguration, and compromised systems.</>,
      <>Finally, our <span className="text-orange-400">secure runtime and trusted execution contexts</span> help constrain rogue and undesirable behaviour, delivering safer, more reliable, <span className="text-orange-400">deterministic workflows</span> and results.</>,
    ],
  },
  pt: {
    eyebrow: 'Apêndice — Segurança',
    headLead: 'SEGURANÇA:',
    headAccent: 'SEMANTIC INTERCEPT FABRIC',
    subHead: 'No núcleo da nossa arquitetura zero trust — segurança e controle incomparáveis para sistemas agênticos autônomos, garantindo operações mais seguras, confiáveis, em conformidade e explicáveis dentro de ambientes corporativos.',
    svcOrchestration: 'Orquestração e Identidade',
    svcDiscovery: 'Descoberta e Reputação',
    svcPayments: 'Pagamentos e Tokens',
    svcMarketplace: 'Marketplace',
    secPolicy: 'Políticas e Guardrails',
    secAccess: 'Controles de Acesso Dinâmicos',
    secMonitoring: 'Monitoramento de Comportamento Suspeito',
    secTEE: 'Ambientes de Execução Confiáveis',
    pipeSystemPrompt: 'prompt de sistema',
    pipeUserPrompt: 'prompt de usuário',
    pipeOutput: 'saída',
    pipeApiMcpRag: 'API, MCP, RAG',
    pipeToolResponses: 'respostas de ferramentas, conhecimento adquirido',
    boxEncoder: 'encoder',
    boxState: 'estado',
    boxReasoning: 'raciocínio',
    boxPlanning: 'planejamento',
    boxDecoder: 'decoder',
    bullets: [
      <>Todos os agentes são cidadãos de primeira classe, recebendo uma <span className="text-orange-400">identidade única</span> (efêmera ou persistente, dependendo do contexto).</>,
      <>Agentes, intenções e serviços de ferramentas são <span className="text-orange-400">compostos e permissionados dinamicamente</span>, proporcionando comportamento consistente e confiável, com total <span className="text-orange-400">explicabilidade e trilha de auditoria</span>.</>,
      <>Todas as mensagens de usuário e entre agentes são convertidas em <span className="text-orange-400">formatos de fluxo semanticamente consistentes</span>, garantindo que todas as intenções e fluxos de dados sejam escrutinados de forma consistente e confiável, com intervenções mais rápidas e explicabilidade superior.</>,
      <>Todas as mensagens são interceptadas para <span className="text-orange-400">aplicação rígida de políticas</span>. Aplicamos técnicas de processamento semântico em múltiplos níveis, fundamentadas por ontologias específicas de domínio, usando <span className="text-orange-400">detecção de sinais e modelos de ensemble</span>, ajudando a mitigar ameaças emergentes de prompt injection e vazamento de dados.</>,
      <>Todos os agentes são monitorados quanto a <span className="text-orange-400">comportamento suspeito e anômalo</span>, para ajudar a detectar e interceptar novos tipos de ameaça agêntica, configurações incorretas e sistemas comprometidos.</>,
      <>Por fim, nosso <span className="text-orange-400">runtime seguro e contextos de execução confiáveis</span> ajudam a restringir comportamentos maliciosos e indesejados, entregando fluxos de trabalho mais seguros, mais confiáveis e <span className="text-orange-400">determinísticos</span>, e resultados.</>,
    ],
  },
});

export function SecuritySlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-y-auto">
      {/* Video background */}
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
            className="h-[2px] w-32 sm:w-48 bg-gradient-to-r from-orange-500 to-transparent origin-left mt-1.5" />
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="mt-1.5 text-[#fefefe]/60 text-[11px] sm:text-xs lg:text-sm max-w-3xl leading-relaxed"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            {T.subHead}
          </motion.p>
        </div>

        {/* Main content: diagram + bullets */}
        <div className="flex-1 grid grid-cols-2 gap-4 sm:gap-8 mt-4 sm:mt-5 min-h-0">

          {/* ── Left: Architecture Diagram ── */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col min-h-0 justify-center">

            {/* Top services row */}
            <div className="grid grid-cols-4 gap-1.5 sm:gap-2">
              <ServiceBox label={T.svcOrchestration} variant="orange" />
              <ServiceBox label={T.svcDiscovery} variant="orange" />
              <ServiceBox label={T.svcPayments} variant="orange" />
              <ServiceBox label={T.svcMarketplace} variant="orange" />
            </div>

            {/* Bidi arrows */}
            <div className="grid grid-cols-4 gap-1.5 sm:gap-2">
              {[0, 1, 2, 3].map(i => <ArrowBidi key={i} className="py-1" />)}
            </div>

            {/* ── LLM Pipeline (dashed container) ── */}
            <div className="relative border border-dashed border-orange-500/20 rounded-lg p-2 sm:p-3">

              {/* System prompt label */}
              <div className="flex items-center gap-1.5 mb-2">
                <span className="text-orange-400/80 text-xs sm:text-sm italic"
                  style={{ fontFamily: "'Geist Mono', monospace" }}>{T.pipeSystemPrompt}</span>
                <ArrowDown className="scale-75" />
              </div>

              {/* Main pipeline row */}
              <div className="flex items-center gap-1.5 sm:gap-2">
                <span className="text-orange-400/80 text-xs sm:text-sm italic shrink-0"
                  style={{ fontFamily: "'Geist Mono', monospace" }}>{T.pipeUserPrompt}</span>
                <ArrowRight />
                <PipelineBox label={T.boxEncoder} tag="N" />
                <ArrowRight />

                {/* Reasoning column (state / reasoning / planning) */}
                <div className="flex flex-col items-center gap-1">
                  <PipelineBox label={T.boxState} className="!py-1 !px-2" />
                  <PipelineBox label={T.boxReasoning} tag="S" />
                  <PipelineBox label={T.boxPlanning} tag="NS" />
                </div>

                <ArrowRight />
                <PipelineBox label={T.boxDecoder} tag="N" />
                <ArrowRight />
                <span className="text-orange-400/80 text-xs sm:text-sm italic shrink-0"
                  style={{ fontFamily: "'Geist Mono', monospace" }}>{T.pipeOutput}</span>
              </div>

              {/* API / MCP / RAG label */}
              <div className="mt-2 flex items-center gap-1.5">
                <span className="text-orange-400/80 text-xs sm:text-sm italic"
                  style={{ fontFamily: "'Geist Mono', monospace" }}>
                  {T.pipeApiMcpRag}
                </span>
                <span className="text-[#fefefe]/60 text-xs sm:text-sm ml-auto"
                  style={{ fontFamily: "'Geist Mono', monospace" }}>
                  {T.pipeToolResponses}
                </span>
              </div>
            </div>

            {/* Bidi arrows */}
            <div className="grid grid-cols-4 gap-1.5 sm:gap-2">
              {[0, 1, 2, 3].map(i => <ArrowBidi key={i} className="py-1" />)}
            </div>

            {/* Bottom security row */}
            <div className="grid grid-cols-4 gap-1.5 sm:gap-2">
              <ServiceBox label={T.secPolicy} />
              <ServiceBox label={T.secAccess} />
              <ServiceBox label={T.secMonitoring} />
              <ServiceBox label={T.secTEE} />
            </div>
          </motion.div>

          {/* ── Right: Bullet points ── */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-col justify-center">

            <div className="space-y-3 sm:space-y-4">
              {T.bullets.map((b, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 + i * 0.1, duration: 0.4 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-400/60 mt-1.5 shrink-0" />
                  <p className="text-[#fefefe]/70 text-[11px] sm:text-xs leading-relaxed"
                    style={{ fontFamily: "'Geist Mono', monospace" }}>
                    {b}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Logo */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }}
          className="shrink-0 mt-3 flex justify-end">
          <img src={unicityLogoUrl} alt="Unicity" className="h-5 opacity-60" />
        </motion.div>

      </div>
    </div>
  );
}
