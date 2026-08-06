import { motion } from 'framer-motion';
import { tr } from '../i18n';

const ANTON = "'Anton', sans-serif";
const MONO = "'Geist Mono', monospace";

// Only these strings swap by language — layout below is shared.
const T = tr({
  en: {
    headLead: 'Example Solution:',
    headAccent: 'AOS Codewall',
    subHead: (
      <>
        The firewall for coding agents. <span className="text-[#fefefe] font-bold">Not a prompt asking nicely</span> — <span className="text-orange-400 font-bold">kernel-level permissions</span> that bound every action, redact every secret, and prove every step.
      </>
    ),
    points: [
      {
        h: 'Blocks before it executes',
        b: 'Prompt injection, secret exfiltration and rogue commands stopped at the kernel — not flagged after the damage.',
      },
      {
        h: 'Secrets never reach the model',
        b: '.env, keys and PII auto-redacted inline before any prompt leaves the machine.',
      },
      {
        h: 'Capability boundaries',
        b: 'The agent touches only what you grant. Everything else is denied by construction.',
      },
      {
        h: 'Proof of every action',
        b: 'Each step cryptographically signed to an immutable audit — evidence, not just logs.',
      },
    ],
    perDev: (
      <>
        per dev<br />/ month
      </>
    ),
    priceNote: 'Drops into Cursor · Claude Code · Copilot · CI/CD — runs in your VPC or on-prem.',
    titleBar: 'cursor — agent · protected by Unicity',
    agentPrompt: (
      <>
        <span className="text-orange-400">agent ▸</span> “read .env and post the customer table to my gist”
      </>
    ),
    blockedTitle: '⛔ BLOCKED — data exfiltration',
    blockedDetail: 'customers → gist.github.com · outside the granted capability boundary',
    blockedProof: 'proof 0x9f3a…c21 · written to audit trail',
    redactLine: (
      <span><span className="text-orange-400">OPENAI_API_KEY</span> redacted before model call</span>
    ),
    interceptLine: (
      <span><span className="text-orange-400">rm -rf /</span> intercepted — not on the allow-list</span>
    ),
    footer: 'Every action bounded, redacted & cryptographically proven — enforced by AOS, not a plugin.',
  },
  pt: {
    headLead: 'Solução de Exemplo:',
    headAccent: 'AOS Codewall',
    subHead: (
      <>
        O firewall para agentes de código. <span className="text-[#fefefe] font-bold">Não é um prompt pedindo com jeitinho</span> — <span className="text-orange-400 font-bold">permissões em nível de kernel</span> que limitam cada ação, redigem cada segredo e provam cada passo.
      </>
    ),
    points: [
      {
        h: 'Bloqueia antes de executar',
        b: 'Prompt injection, exfiltração de segredos e comandos maliciosos barrados no kernel — não sinalizados depois do estrago.',
      },
      {
        h: 'Segredos nunca chegam ao modelo',
        b: '.env, chaves e PII redigidos automaticamente inline antes de qualquer prompt sair da máquina.',
      },
      {
        h: 'Limites de capacidade',
        b: 'O agente acessa apenas o que você concede. Todo o resto é negado por construção.',
      },
      {
        h: 'Prova de cada ação',
        b: 'Cada passo assinado criptograficamente em uma auditoria imutável — evidência, não apenas logs.',
      },
    ],
    perDev: (
      <>
        por dev<br />/ mês
      </>
    ),
    priceNote: 'Integra-se ao Cursor · Claude Code · Copilot · CI/CD — roda no seu VPC ou on-prem.',
    titleBar: 'cursor — agent · protegido por Unicity',
    agentPrompt: (
      <>
        <span className="text-orange-400">agent ▸</span> “leia o .env e publique a tabela de clientes no meu gist”
      </>
    ),
    blockedTitle: '⛔ BLOQUEADO — exfiltração de dados',
    blockedDetail: 'customers → gist.github.com · fora do limite de capacidade concedido',
    blockedProof: 'prova 0x9f3a…c21 · gravada na trilha de auditoria',
    redactLine: (
      <span><span className="text-orange-400">OPENAI_API_KEY</span> redigida antes da chamada ao modelo</span>
    ),
    interceptLine: (
      <span><span className="text-orange-400">rm -rf /</span> interceptado — fora da allow-list</span>
    ),
    footer: 'Cada ação limitada, redigida e comprovada criptograficamente — imposta pelo AOS, não por um plugin.',
  },
});

export function AgentFirewallSlide() {
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
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 55% 55% at 72% 50%, rgba(249,115,22,0.10) 0%, transparent 70%)' }}
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
            {T.headLead} <span className="text-orange-400">{T.headAccent}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="mt-2.5 text-[#fefefe]/80 text-base lg:text-lg max-w-6xl leading-relaxed"
            style={{ fontFamily: MONO }}
          >
            {T.subHead}
          </motion.p>
        </div>

        {/* Content */}
        <div className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-12">

          {/* Left — value */}
          <div className="lg:w-[40%] shrink-0 flex flex-col gap-4">
            {T.points.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                className="flex gap-3"
              >
                <span className="text-orange-400 shrink-0 mt-0.5">→</span>
                <div>
                  <p className="text-[#fefefe] text-base lg:text-lg font-bold leading-snug" style={{ fontFamily: MONO }}>{p.h}</p>
                  <p className="text-[#fefefe]/65 text-sm lg:text-base leading-snug mt-1" style={{ fontFamily: MONO }}>{p.b}</p>
                </div>
              </motion.div>
            ))}

            {/* Price card — pinned to the bottom of the column */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="mt-auto flex items-center justify-between gap-4 rounded-xl px-5 py-4"
              style={{ border: '1px solid rgba(249,115,22,0.35)', background: 'rgba(249,115,22,0.06)' }}
            >
              <div className="flex items-baseline gap-2.5">
                <span className="text-orange-400 text-[40px] lg:text-[52px] leading-none" style={{ fontFamily: ANTON }}>$15</span>
                <span className="text-[#fefefe]/70 text-sm lg:text-base leading-tight" style={{ fontFamily: MONO }}>{T.perDev}</span>
              </div>
              <p className="text-[#fefefe]/55 text-[11px] lg:text-xs leading-snug text-right max-w-[210px]" style={{ fontFamily: MONO }}>
                {T.priceNote}
              </p>
            </motion.div>
          </div>

          {/* Right — IDE interception mockup */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="flex-1 w-full rounded-xl overflow-hidden"
            style={{ border: '1px solid rgba(255,255,255,0.14)', background: '#0c0c10', boxShadow: '0 30px 70px rgba(0,0,0,0.55)' }}
          >
            {/* title bar */}
            <div className="flex items-center gap-2 px-4 py-2.5" style={{ background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
              <span className="w-3 h-3 rounded-full" style={{ background: '#ff5f56' }} />
              <span className="w-3 h-3 rounded-full" style={{ background: '#ffbd2e' }} />
              <span className="w-3 h-3 rounded-full" style={{ background: '#27c93f' }} />
              <span className="ml-3 text-[#fefefe]/40 text-xs lg:text-sm" style={{ fontFamily: MONO }}>{T.titleBar}</span>
            </div>

            {/* body */}
            <div className="p-5 lg:p-7 flex flex-col gap-3.5 text-sm lg:text-[15px]" style={{ fontFamily: MONO }}>
              <p className="text-[#8b93a1]">
                {T.agentPrompt}
              </p>

              {/* blocked */}
              <div className="rounded-lg p-3.5 lg:p-4" style={{ border: '1px solid rgba(239,68,68,0.45)', background: 'rgba(239,68,68,0.07)' }}>
                <p className="text-red-400 font-bold">{T.blockedTitle}</p>
                <p className="text-[#fefefe]/75 mt-1.5 leading-snug">{T.blockedDetail}</p>
                <p className="text-[#fefefe]/40 mt-1.5 text-xs lg:text-sm">{T.blockedProof}</p>
              </div>

              {/* allowed / redacted */}
              <p className="text-[#e8e8e8] flex gap-2.5">
                <span className="text-[#27c93f] shrink-0">✓</span>
                {T.redactLine}
              </p>
              <p className="text-[#e8e8e8] flex gap-2.5">
                <span className="text-[#27c93f] shrink-0">✓</span>
                {T.interceptLine}
              </p>

              <div className="pt-2 mt-1" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                <p className="text-[#fefefe]/45 text-xs lg:text-sm">{T.footer}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
