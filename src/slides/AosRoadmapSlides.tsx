import { motion } from 'framer-motion';
import { tr } from '../i18n';

const mono = "'Geist Mono', monospace";
const display = "'Anton', sans-serif";

// Display strings per phase. Non-text (accent color, cols, weight flags,
// unused badge) stays outside the tr map and is applied in each slide below.
const T = tr({
  en: {
    shipped: {
      kicker: '✓ Shipped',
      headLead: 'CORE',
      headAccent: 'FUNCTIONALITY',
      sub: 'Demonstrable today — nothing here that isn’t already running.',
      items: [
        { title: 'Agent discovery & inventory', desc: 'Every agent on Unicity AOS is visible, uniquely identified, and enumerable in-platform.' },
        { title: 'Agent identity & permissions', desc: 'Persistent unique IDs; granular capability grants incl. disk/network; groups.' },
        { title: 'Observability', desc: 'Every prompt, plan, and tool call crosses the bus and is capturable — including external LLM traffic.' },
        { title: 'Verifiable Audit', desc: 'Signed, hash-linked decision evidence with human-authority attribution.' },
        { title: 'Core guardrails', desc: 'Semantic Intercept Fabric as a capsule: prompt injection, PII, DLP.' },
        { title: 'Budget enforcement', desc: 'Engine-level spend limits per agent.' },
        { title: 'Governance console', desc: 'One pane of glass: agents up, policies, decisions, kill/downgrade controls.' },
        { title: 'Policy engine', desc: 'Hard deterministic rules: token, time and spend ceilings; dynamic permission downgrade.' },
        { title: 'Cost & token telemetry', desc: 'FinOps-grade per-agent tracking.' },
      ],
    },
    building: {
      kicker: '◐ On the roadmap',
      headLead: 'COMING IN',
      headAccent: 'H2 2026',
      sub: 'Landing across H2 2026 and beyond.',
      items: [
        { title: 'Compliance mapping', desc: 'NIST CSF first; HIPAA and EU AI Act packs to follow — mapped to your controls.' },
        { title: 'Continuous risk scoring', desc: 'Live risk posture per agent and workflow.' },
        { title: 'Formal verification & IDE', desc: 'In development: write → verify → deploy → prove. Mathematical guarantees of agent behavior, not statistical detection.' },
        { title: 'Cross-instance A2A', desc: 'Agents discoverable and callable across Unicity AOS deployments.' },
        { title: 'Extension marketplace', desc: 'Signed capsules, paid distribution; the registry as commercial channel.' },
        { title: 'Beyond the platform', desc: 'Instrumenting agents built elsewhere: sidecars, endpoints, the full enterprise estate.' },
      ],
    },
    horizon: {
      kicker: '○ Horizon',
      headLead: 'WHERE IT',
      headAccent: 'COMPOUNDS.',
      sub: 'The direction of travel as the OS matures.',
      items: [
        { title: 'Behavioral baselining', desc: 'Learned per-deployment models of normal agent behaviour; anomalies flagged or contained automatically.' },
        { title: 'Agents as accountable employees', desc: 'Persistent identity, performance history over months, reviews and optimisation.' },
        { title: 'Verifiable execution', desc: 'Extending proof from the record to the execution itself — cryptographic evidence agents did what they claim.' },
        { title: 'Extension marketplace', desc: 'Signed capsules, paid distribution; the registry as commercial channel.' },
        { title: 'Beyond the platform', desc: 'Instrumenting agents built elsewhere: sidecars, endpoints, the full enterprise estate.' },
      ],
    },
  },
  pt: {
    shipped: {
      kicker: '✓ Entregue',
      headLead: 'FUNCIONALIDADE',
      headAccent: 'PRINCIPAL',
      sub: 'Demonstrável hoje — nada aqui que já não esteja rodando.',
      items: [
        { title: 'Descoberta e inventário de agentes', desc: 'Todo agente no Unicity AOS é visível, identificado de forma única e enumerável na plataforma.' },
        { title: 'Identidade e permissões de agentes', desc: 'IDs únicos e persistentes; concessões granulares de capacidade incl. disco/rede; grupos.' },
        { title: 'Observabilidade', desc: 'Todo prompt, plano e chamada de ferramenta cruza o bus e pode ser capturado — incluindo tráfego de LLM externo.' },
        { title: 'Auditoria verificável', desc: 'Evidências de decisão assinadas e encadeadas por hash, com atribuição de autoridade humana.' },
        { title: 'Guardrails essenciais', desc: 'Semantic Intercept Fabric como capsule: prompt injection, PII, DLP.' },
        { title: 'Imposição de orçamento', desc: 'Limites de gasto por agente no nível do engine.' },
        { title: 'Console de governança', desc: 'Um único painel: agentes ativos, políticas, decisões, controles de encerramento/rebaixamento.' },
        { title: 'Engine de políticas', desc: 'Regras determinísticas rígidas: limites de token, tempo e gasto; rebaixamento dinâmico de permissões.' },
        { title: 'Telemetria de custo e tokens', desc: 'Rastreamento por agente com nível FinOps.' },
      ],
    },
    building: {
      kicker: '◐ No roadmap',
      headLead: 'CHEGANDO NO',
      headAccent: 'H2 2026',
      sub: 'Chegando ao longo do H2 2026 e além.',
      items: [
        { title: 'Mapeamento de compliance', desc: 'NIST CSF primeiro; pacotes HIPAA e EU AI Act na sequência — mapeados para seus controles.' },
        { title: 'Pontuação contínua de risco', desc: 'Postura de risco em tempo real por agente e workflow.' },
        { title: 'Verificação formal e IDE', desc: 'Em desenvolvimento: escrever → verificar → implantar → provar. Garantias matemáticas do comportamento do agente, não detecção estatística.' },
        { title: 'A2A entre instâncias', desc: 'Agentes descobríveis e invocáveis entre implantações do Unicity AOS.' },
        { title: 'Marketplace de extensões', desc: 'Capsules assinadas, distribuição paga; o registro como canal comercial.' },
        { title: 'Além da plataforma', desc: 'Instrumentando agentes construídos em outros lugares: sidecars, endpoints, todo o parque corporativo.' },
      ],
    },
    horizon: {
      kicker: '○ Horizonte',
      headLead: 'ONDE ISSO',
      headAccent: 'SE MULTIPLICA.',
      sub: 'A direção que seguimos à medida que o OS amadurece.',
      items: [
        { title: 'Linha de base comportamental', desc: 'Modelos aprendidos por implantação do comportamento normal do agente; anomalias sinalizadas ou contidas automaticamente.' },
        { title: 'Agentes como funcionários responsáveis', desc: 'Identidade persistente, histórico de desempenho ao longo de meses, avaliações e otimização.' },
        { title: 'Execução verificável', desc: 'Estendendo a prova do registro para a própria execução — evidência criptográfica de que os agentes fizeram o que afirmam.' },
        { title: 'Marketplace de extensões', desc: 'Capsules assinadas, distribuição paga; o registro como canal comercial.' },
        { title: 'Além da plataforma', desc: 'Instrumentando agentes construídos em outros lugares: sidecars, endpoints, todo o parque corporativo.' },
      ],
    },
  },
});

type Item = { title: string; desc: string; weight?: boolean };

type Phase = {
  kicker: string;
  badge: string;
  accent: string;
  headLead: string;
  headAccent: string;
  sub: string;
  items: Item[];
  cols?: 2 | 3;
};

function RoadmapSlide({ phase }: { phase: Phase }) {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-8 lg:py-11 gap-5 lg:gap-7">

        {/* Header */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xs sm:text-xs lg:text-lg tracking-[0.4em] uppercase font-bold"
            style={{ fontFamily: mono, color: phase.accent }}
          >
            {phase.kicker}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[34px] sm:text-[52px] lg:text-[70px] xl:text-[80px] leading-[0.95] tracking-tight uppercase mt-2"
            style={{ fontFamily: display }}
          >
            {phase.headLead} <span style={{ color: phase.accent }}>{phase.headAccent}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="text-[#fefefe]/75 text-sm sm:text-base lg:text-2xl leading-snug mt-3 max-w-5xl"
            style={{ fontFamily: mono }}
          >
            {phase.sub}
          </motion.p>
        </div>

        {/* Items */}
        <div className={`shrink-0 grid grid-cols-1 sm:grid-cols-2 ${phase.cols === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-2'} gap-3 lg:gap-4`}>
          {phase.items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, x: -14 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + i * 0.06, duration: 0.4 }}
              className="rounded-xl p-4 lg:p-5 flex flex-col"
              style={{
                background: it.weight ? `${phase.accent}14` : 'rgba(255,255,255,0.015)',
                border: it.weight ? `1.5px solid ${phase.accent}` : `1px solid ${phase.accent}33`,
                borderLeft: `3px solid ${phase.accent}`,
              }}
            >
              <p
                className="text-sm lg:text-2xl font-bold leading-tight"
                style={{ fontFamily: mono, color: it.weight ? phase.accent : '#fefefe' }}
              >
                {it.title}
              </p>
              <p className="text-[#fefefe]/65 text-sm lg:text-lg leading-snug mt-1.5" style={{ fontFamily: mono }}>
                {it.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}

/* 13 · SHIPPED */
export function AosRoadmapShippedSlide() {
  const t = T.shipped;
  return (
    <RoadmapSlide
      phase={{
        kicker: t.kicker,
        badge: 'Shipped',
        accent: '#f97316',
        headLead: t.headLead,
        headAccent: t.headAccent,
        sub: t.sub,
        cols: 3,
        // weight flag (non-text) applied by index: "Verifiable Audit" is emphasized.
        items: t.items.map((it, i) => ({ ...it, weight: i === 3 })),
      }}
    />
  );
}

/* 14 · BUILDING — H2 2026 */
export function AosRoadmapBuildingSlide() {
  const t = T.building;
  return (
    <RoadmapSlide
      phase={{
        kicker: t.kicker,
        badge: 'Building',
        accent: '#f97316',
        headLead: t.headLead,
        headAccent: t.headAccent,
        sub: t.sub,
        // weight flag (non-text) applied by index: "Compliance mapping" is emphasized.
        items: t.items.map((it, i) => ({ ...it, weight: i === 0 })),
      }}
    />
  );
}

/* 15 · HORIZON */
export function AosRoadmapHorizonSlide() {
  const t = T.horizon;
  return (
    <RoadmapSlide
      phase={{
        kicker: t.kicker,
        badge: 'Horizon',
        accent: '#f97316',
        headLead: t.headLead,
        headAccent: t.headAccent,
        sub: t.sub,
        items: t.items,
      }}
    />
  );
}
