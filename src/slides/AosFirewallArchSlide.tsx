import { motion } from 'framer-motion';
import { tr } from '../i18n';

const ANTON = "'Anton', sans-serif";
const MONO = "'Geist Mono', monospace";

const T = tr({
  en: {
    titleAccent: 'Agentic security architecture',
    leftHeader: 'Developer Endpoint',
    leftSub: 'Workspace / cloud sandbox',
    ideTitle: 'IDE & AI Coding Agent',
    arrow1: 'Action / tool execution attempts',
    localAgentSub: 'Execution hooks & file-config monitoring',
    guardrailsTitle: 'Inline Guardrails',
    guardrailsSub: 'Regex / fast blocks',
    failOpenTitle: 'Fail-Open Engine',
    failOpenSub: 'Async routing',
    arrow2: 'Enforced access controls',
    sysResourcesTitle: 'System Resources',
    sysResourcesSub: 'MCP servers · Local files · Host CLI',
    syncLabel: (<>Sync logic<br />updates</>),
    asyncLabel: (<>Async traffic<br />analysis</>),
    rightHeader: 'AOS Central Platform',
    policiesTitle: 'Global Policies (MDM / Push)',
    policiesSub: 'OWASP rules · custom best practices',
    threatTitle: 'Deep AI Threat Analysis',
    threatSub: 'Context validation & intent mismatches',
    inventoryTitle: 'Inventory & Telemetry',
    inventorySub: 'Monitors extensions, skills, anomalies',
    gitTitle: 'Git / CI Repository Hooks',
    gitSub: ' — validates the AOS-Firewall agent is present before allowing commits',
  },
  pt: {
    titleAccent: 'Arquitetura de segurança agêntica',
    leftHeader: 'Endpoint do Desenvolvedor',
    leftSub: 'Workspace / sandbox na nuvem',
    ideTitle: 'IDE & Agente de código IA',
    arrow1: 'Tentativas de execução de ação / ferramenta',
    localAgentSub: 'Hooks de execução & monitoramento de arquivos de config',
    guardrailsTitle: 'Guardrails inline',
    guardrailsSub: 'Regex / bloqueios rápidos',
    failOpenTitle: 'Motor Fail-Open',
    failOpenSub: 'Roteamento assíncrono',
    arrow2: 'Controles de acesso impostos',
    sysResourcesTitle: 'Recursos do Sistema',
    sysResourcesSub: 'Servidores MCP · Arquivos locais · CLI do host',
    syncLabel: (<>Atualizações de<br />lógica de sync</>),
    asyncLabel: (<>Análise assíncrona<br />de tráfego</>),
    rightHeader: 'Plataforma Central AOS',
    policiesTitle: 'Políticas Globais (MDM / Push)',
    policiesSub: 'Regras OWASP · boas práticas customizadas',
    threatTitle: 'Análise Profunda de Ameaças com IA',
    threatSub: 'Validação de contexto & divergências de intenção',
    inventoryTitle: 'Inventário & Telemetria',
    inventorySub: 'Monitora extensões, skills, anomalias',
    gitTitle: 'Hooks de Repositório Git / CI',
    gitSub: ' — valida que o agente AOS-Firewall está presente antes de permitir commits',
  },
});

function Card({
  title,
  sub,
  color,
  emphasize,
  children,
}: {
  title: string;
  sub?: string;
  color: string;
  emphasize?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <div
      className="rounded-lg px-3.5 py-2.5 lg:px-4 lg:py-3"
      style={{
        border: `1px solid ${color}`,
        background: emphasize ? `${color}1f` : `${color}12`,
        boxShadow: emphasize ? `0 0 24px ${color}33` : 'none',
      }}
    >
      <p className="text-[#fefefe] text-sm lg:text-lg font-bold leading-tight" style={{ fontFamily: MONO }}>{title}</p>
      {sub && <p className="text-[#fefefe]/55 text-[11px] lg:text-sm leading-snug mt-0.5" style={{ fontFamily: MONO }}>{sub}</p>}
      {children}
    </div>
  );
}

function DownArrow({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-center gap-2 py-1">
      <span className="text-orange-400 text-lg leading-none">↓</span>
      <span className="text-[#fefefe]/50 text-[10px] lg:text-xs uppercase tracking-wide" style={{ fontFamily: MONO }}>{label}</span>
    </div>
  );
}

export function AosFirewallArchSlide() {
  const BLUE = '#3b82f6';
  const ORANGE = '#f97316';
  const PURPLE = '#a855f7';
  const GREEN = '#22c55e';

  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-8 lg:py-10 gap-5 lg:gap-6">

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="shrink-0 text-[#fefefe] text-[24px] sm:text-[34px] lg:text-[46px] leading-[0.98] tracking-tight uppercase"
          style={{ fontFamily: ANTON }}
        >
          AOS-Firewall: <span className="text-orange-400">{T.titleAccent}</span>
        </motion.h1>

        {/* Diagram */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.6 }}
          className="shrink-0 grid items-center gap-3 lg:gap-4"
          style={{ gridTemplateColumns: '1fr 150px 1fr' }}
        >
          {/* LEFT — Developer Endpoint */}
          <div className="rounded-xl p-3.5 lg:p-4" style={{ border: '1px solid rgba(255,255,255,0.14)', background: 'rgba(255,255,255,0.015)' }}>
            <p className="text-[#fefefe]/80 text-xs lg:text-sm tracking-[0.2em] uppercase font-bold" style={{ fontFamily: MONO }}>{T.leftHeader}</p>
            <p className="text-[#fefefe]/40 text-[10px] lg:text-xs mb-2.5" style={{ fontFamily: MONO }}>{T.leftSub}</p>

            <Card title={T.ideTitle} sub="Cursor · Claude Code · Copilot" color={BLUE} />
            <DownArrow label={T.arrow1} />
            <Card title="AOS-Firewall Local Agent" sub={T.localAgentSub} color={ORANGE} emphasize>
              <div className="grid grid-cols-2 gap-2 mt-2.5">
                <div className="rounded-md px-2.5 py-1.5" style={{ border: `1px solid ${ORANGE}55`, background: `${ORANGE}10` }}>
                  <p className="text-[#fefefe] text-[11px] lg:text-sm font-bold leading-tight" style={{ fontFamily: MONO }}>{T.guardrailsTitle}</p>
                  <p className="text-[#fefefe]/50 text-[9px] lg:text-xs" style={{ fontFamily: MONO }}>{T.guardrailsSub}</p>
                </div>
                <div className="rounded-md px-2.5 py-1.5" style={{ border: `1px solid ${ORANGE}55`, background: `${ORANGE}10` }}>
                  <p className="text-[#fefefe] text-[11px] lg:text-sm font-bold leading-tight" style={{ fontFamily: MONO }}>{T.failOpenTitle}</p>
                  <p className="text-[#fefefe]/50 text-[9px] lg:text-xs" style={{ fontFamily: MONO }}>{T.failOpenSub}</p>
                </div>
              </div>
            </Card>
            <DownArrow label={T.arrow2} />
            <Card title={T.sysResourcesTitle} sub={T.sysResourcesSub} color={PURPLE} />
          </div>

          {/* CENTER — cross links */}
          <div className="flex flex-col items-center justify-center gap-8">
            <div className="text-center">
              <div className="flex items-center gap-1.5">
                <span style={{ color: GREEN }} className="text-lg leading-none">←</span>
                <span className="h-px w-8" style={{ background: GREEN }} />
              </div>
              <p className="text-[#fefefe]/50 text-[9px] lg:text-[11px] uppercase tracking-wide mt-1" style={{ fontFamily: MONO }}>{T.syncLabel}</p>
            </div>
            <div className="text-center">
              <div className="flex items-center gap-1.5">
                <span className="h-px w-8" style={{ background: BLUE, opacity: 0.7, backgroundImage: `repeating-linear-gradient(90deg, ${BLUE}, ${BLUE} 3px, transparent 3px, transparent 6px)` }} />
                <span style={{ color: BLUE }} className="text-lg leading-none">→</span>
              </div>
              <p className="text-[#fefefe]/50 text-[9px] lg:text-[11px] uppercase tracking-wide mt-1" style={{ fontFamily: MONO }}>{T.asyncLabel}</p>
            </div>
          </div>

          {/* RIGHT — AOS Central Platform */}
          <div className="rounded-xl p-3.5 lg:p-4 flex flex-col gap-2.5" style={{ border: `1px solid ${GREEN}55`, background: `${GREEN}0c` }}>
            <p className="text-[#fefefe]/80 text-xs lg:text-sm tracking-[0.2em] uppercase font-bold mb-0.5" style={{ fontFamily: MONO }}>{T.rightHeader}</p>
            <Card title={T.policiesTitle} sub={T.policiesSub} color={GREEN} />
            <Card title={T.threatTitle} sub={T.threatSub} color={GREEN} />
            <Card title={T.inventoryTitle} sub={T.inventorySub} color={GREEN} />
          </div>
        </motion.div>

        {/* BOTTOM — Git / CI hooks */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="shrink-0 rounded-lg px-4 py-3 text-center"
          style={{ border: '1px dashed rgba(255,255,255,0.22)', background: 'rgba(255,255,255,0.02)' }}
        >
          <p className="text-[#fefefe]/85 text-sm lg:text-base font-bold" style={{ fontFamily: MONO }}>
            {T.gitTitle}
            <span className="text-[#fefefe]/45 font-normal">{T.gitSub}</span>
          </p>
        </motion.div>

      </div>
    </div>
  );
}
