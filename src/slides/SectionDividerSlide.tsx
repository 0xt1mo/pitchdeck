import { motion } from 'framer-motion';
import splashVideoUrl from '/kling_20260226_VIDEO_Take_Image_1650_0.mp4';
import unicityLogoUrl from '/UnicityLogo.svg';

const modules = [
  { title: 'SKILLS', items: ['OpenClaw', 'MCP Tools', 'Custom'], color: '#f59e0b', id: 'skills' },
  { title: 'PAYMENTS', items: ['Unicity L1', '300M++ TPS', '1 sec finality'], color: '#f97316', id: 'payments' },
  { title: 'ORCHESTRATION', items: ['ReAct', 'Plan-Execute', 'ToT / Debate'], color: '#ec4899', id: 'orchestration' },
  { title: 'SECURITY', items: ['Semantic', 'Intercept Fabric', 'Policy Engine'], color: '#a855f7', id: 'security' },
  { title: 'NETWORKING', items: ['A2A Messaging', 'Groups', 'Discovery', 'Marketplaces'], color: '#6366f1', id: 'networking' },
  { title: 'INFERENCE', items: ['Anthropic', 'OpenAI', 'Ollama'], color: '#3b82f6', id: 'inference' },
];

const kernelItems = ['Event Bus', 'Sandbox', 'Permissions', 'Audit'];

const KERNEL_R = 80;
const SAT_R = 70;
const GAP = 6;
const ORBIT = KERNEL_R + SAT_R + GAP;
const DIAGRAM_SIZE = ORBIT * 2 + SAT_R * 2 + 20;
const ANGLES = [-90, -30, 30, 90, 150, 210];

type SectionId = 'kernel' | 'security' | 'payments';

const sectionConfig: Record<SectionId, {
  label: string;
  subtitle: string;
  highlightIds: string[];
  highlightKernel: boolean;
}> = {
  kernel: {
    label: 'KERNEL',
    subtitle: 'Architecture deep dive',
    highlightIds: ['skills', 'orchestration', 'inference', 'networking'],
    highlightKernel: true,
  },
  security: {
    label: 'SECURITY',
    subtitle: 'Semantic Intercept Fabric',
    highlightIds: ['security'],
    highlightKernel: false,
  },
  payments: {
    label: 'BLOCKCHAIN',
    subtitle: 'The Unicity L1',
    highlightIds: ['payments'],
    highlightKernel: false,
  },
};

export function SectionDividerSlide({ section }: { section: SectionId; [key: string]: unknown }) {
  const config = sectionConfig[section];

  const isHighlighted = (id: string) => config.highlightIds.includes(id);

  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="fixed inset-0 w-full h-full z-0">
        <video className="w-full h-full object-cover opacity-15" autoPlay muted loop playsInline src={splashVideoUrl} />
        <div className="absolute inset-0 bg-[#060606]/50" />
      </div>

      <div className="relative z-10 h-full flex items-center justify-center">

        {/* Diagram */}
        <div
          className="relative origin-center"
          style={{
            width: `${DIAGRAM_SIZE}px`,
            height: `${DIAGRAM_SIZE}px`,
            transform: 'scale(var(--divider-scale))',
          }}
        >
          {/* Center KERNEL */}
          <div className="absolute z-20"
            style={{
              left: '50%', top: '50%',
              transform: 'translate(-50%, -50%)',
              width: `${KERNEL_R * 2}px`, height: `${KERNEL_R * 2}px`,
              opacity: config.highlightKernel ? 1 : 0.15,
              transition: 'opacity 0.6s',
            }}>
            <div className="absolute inset-[-40%] rounded-full bg-orange-500/[0.06] blur-[40px] pointer-events-none" />
            <div className="absolute inset-0 rounded-full border border-orange-500/30" />
            <div className="absolute inset-[6%] rounded-full border-2 border-orange-500/50 bg-gradient-to-br from-orange-500/[0.1] via-orange-900/[0.05] to-transparent" />
            <div className="absolute inset-[6%] rounded-full flex flex-col items-center justify-center">
              <h3 className="text-orange-400 text-xl sm:text-2xl"
                style={{ fontFamily: "'Anton', sans-serif", letterSpacing: '0.12em' }}>
                KERNEL
              </h3>
              <div className="mt-1">
                {kernelItems.map((item) => (
                  <p key={item} className="text-[#fefefe]/80 text-[10px] sm:text-xs text-center leading-snug"
                    style={{ fontFamily: "'Geist Mono', monospace" }}>
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Satellites */}
          {modules.map((m, i) => {
            const rad = (ANGLES[i] * Math.PI) / 180;
            const cx = Math.cos(rad) * ORBIT;
            const cy = Math.sin(rad) * ORBIT;
            const active = isHighlighted(m.id);
            return (
              <motion.div
                key={m.title}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: active ? 1 : 0.15, scale: 1 }}
                transition={{ delay: 0.3 + i * 0.06, duration: 0.4 }}
                className="absolute z-10"
                style={{
                  left: `calc(50% + ${cx}px - ${SAT_R}px)`,
                  top: `calc(50% + ${cy}px - ${SAT_R}px)`,
                  width: `${SAT_R * 2}px`, height: `${SAT_R * 2}px`,
                }}>
                <div className="absolute inset-[-15%] rounded-full blur-[25px] pointer-events-none"
                  style={{ background: m.color, opacity: active ? 0.08 : 0.02 }} />
                <div className="absolute inset-0 rounded-full"
                  style={{ border: `1px solid ${m.color}${active ? '60' : '20'}` }} />
                <div className="absolute inset-[2px] rounded-full"
                  style={{ background: `${m.color}${active ? '10' : '04'}` }} />
                <div className="absolute inset-0 rounded-full flex flex-col items-center justify-center px-2">
                  <h3 className="text-sm sm:text-base leading-tight text-center font-bold"
                    style={{ fontFamily: "'Anton', sans-serif", letterSpacing: '0.05em', color: m.color }}>
                    {m.title}
                  </h3>
                  <div className="mt-0.5">
                    {m.items.map((item) => (
                      <p key={item} className="text-[#fefefe]/80 text-[10px] sm:text-xs text-center leading-snug"
                        style={{ fontFamily: "'Geist Mono', monospace" }}>
                        {item}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Section label — positioned to the right */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="absolute right-10 sm:right-16 lg:right-24 text-right"
        >
          <h1 className="text-[#fefefe] text-[48px] sm:text-[72px] lg:text-[96px] leading-none tracking-tight"
            style={{ fontFamily: "'Anton', sans-serif" }}>
            {config.label}
          </h1>
          <p className="text-[#fefefe]/50 text-xs sm:text-sm mt-2 tracking-wider uppercase"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            {config.subtitle}
          </p>
          <div className="h-[2px] w-24 sm:w-36 bg-gradient-to-l from-orange-500 to-transparent mt-3 ml-auto" />
        </motion.div>

        {/* Logo */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
          className="absolute bottom-6 sm:bottom-8 right-6 sm:right-10 lg:right-16">
          <img src={unicityLogoUrl} alt="Unicity" className="h-5 opacity-60" />
        </motion.div>

      </div>

      <style>{`
        :root {
          --divider-scale: 0.6;
        }
        @media (min-width: 640px) {
          :root { --divider-scale: 0.75; }
        }
        @media (min-width: 1024px) {
          :root { --divider-scale: 0.9; }
        }
        @media (min-width: 1280px) {
          :root { --divider-scale: 1.05; }
        }
      `}</style>
    </div>
  );
}

// Exported slide components for each section
export function KernelDividerSlide(props: Record<string, unknown>) {
  return <SectionDividerSlide section="kernel" {...props} />;
}

export function SecurityDividerSlide(props: Record<string, unknown>) {
  return <SectionDividerSlide section="security" {...props} />;
}

export function BlockchainDividerSlide(props: Record<string, unknown>) {
  return <SectionDividerSlide section="payments" {...props} />;
}
