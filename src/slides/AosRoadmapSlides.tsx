import { motion } from 'framer-motion';

const mono = "'Geist Mono', monospace";
const display = "'Anton', sans-serif";

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
  return (
    <RoadmapSlide
      phase={{
        kicker: '✓ Shipped',
        badge: 'Shipped',
        accent: '#f97316',
        headLead: 'CORE',
        headAccent: 'FUNCTIONALITY',
        sub: 'Demonstrable today — nothing here that isn’t already running.',
        cols: 3,
        items: [
          { title: 'Agent discovery & inventory', desc: 'Every agent on Unicity AOS is visible, uniquely identified, and enumerable in-platform.' },
          { title: 'Agent identity & permissions', desc: 'Persistent unique IDs; granular capability grants incl. disk/network; groups.' },
          { title: 'Observability', desc: 'Every prompt, plan, and tool call crosses the bus and is capturable — including external LLM traffic.' },
          { title: 'Verifiable Audit', desc: 'Signed, hash-linked decision evidence with human-authority attribution.', weight: true },
          { title: 'Core guardrails', desc: 'Semantic Intercept Fabric as a capsule: prompt injection, PII, DLP.' },
          { title: 'Budget enforcement', desc: 'Engine-level spend limits per agent.' },
          { title: 'Governance console', desc: 'One pane of glass: agents up, policies, decisions, kill/downgrade controls.' },
          { title: 'Policy engine', desc: 'Hard deterministic rules: token, time and spend ceilings; dynamic permission downgrade.' },
          { title: 'Cost & token telemetry', desc: 'FinOps-grade per-agent tracking.' },
        ],
      }}
    />
  );
}

/* 14 · BUILDING — H2 2026 */
export function AosRoadmapBuildingSlide() {
  return (
    <RoadmapSlide
      phase={{
        kicker: '◐ On the roadmap',
        badge: 'Building',
        accent: '#f97316',
        headLead: 'COMING IN',
        headAccent: 'H2 2026',
        sub: 'Landing across H2 2026 and beyond.',
        items: [
          { title: 'Compliance mapping', desc: 'NIST CSF first; HIPAA and EU AI Act packs to follow — mapped to your controls.', weight: true },
          { title: 'Continuous risk scoring', desc: 'Live risk posture per agent and workflow.' },
          { title: 'Formal verification & IDE', desc: 'In development: write → verify → deploy → prove. Mathematical guarantees of agent behavior, not statistical detection.' },
          { title: 'Cross-instance A2A', desc: 'Agents discoverable and callable across Unicity AOS deployments.' },
          { title: 'Extension marketplace', desc: 'Signed capsules, paid distribution; the registry as commercial channel.' },
          { title: 'Beyond the platform', desc: 'Instrumenting agents built elsewhere: sidecars, endpoints, the full enterprise estate.' },
        ],
      }}
    />
  );
}

/* 15 · HORIZON */
export function AosRoadmapHorizonSlide() {
  return (
    <RoadmapSlide
      phase={{
        kicker: '○ Horizon',
        badge: 'Horizon',
        accent: '#f97316',
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
      }}
    />
  );
}
