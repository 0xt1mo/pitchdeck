import { motion } from 'framer-motion';
import { tr } from '../../i18n';

const font = "'Geist Mono', monospace";
const fontTitle = "'Anton', sans-serif";

const T = tr({
  en: {
    headLead: 'AGENTSTACK:',
    headAccent: 'SEMANTIC INTERCEPT FABRIC',
    subtitle: 'A semantic firewall — content-aware, not just action-based.',
    controlsIntro: (
      <>
        <span className="text-orange-400 font-bold">Semantic</span> controls — prompt injection, data leakage, exfiltration — with domain-specific ontologies.
      </>
    ),
    layeredModel: 'A layered model:',
    ruleItem: (
      <>
        <span className="text-orange-400 font-bold">Rule engine</span> — high-performance pattern matching with dynamic rule updates.
      </>
    ),
    mlItem: (
      <>
        <span className="text-orange-400 font-bold">ML detection</span> — low-latency inference, anomaly detection, ONNX-compatible plugins.
      </>
    ),
    dlpItem: (
      <>
        <span className="text-orange-400 font-bold">DLP scanning</span> — secrets, PII, IP exfiltration via pattern matching + NER.
      </>
    ),
    rustNote: 'Rust implementation. Sub-20ms classification tuned to risk tolerance and content depth.',
    policyDashboard: 'Policy Dashboard',
    unifiedServer: 'Unified Server (HTTP)',
    unifiedServerSub: 'normalisation · cleanup · scrubbing',
    ruleEngine: 'Rule Engine',
    ruleEngineSub: 'fast matching',
    mlDetection: 'ML Detection',
    mlDetectionSub: 'anomaly detection',
    dlpScanner: 'DLP Scanner',
    dlpScannerSub: 'secrets, PII',
    decisionEngine: 'Decision Engine',
    decisionEngineSub: 'scoring · thresholds',
    auditLayer: 'Cryptographic Audit Layer',
    allow: 'Allow',
    block: 'Block',
    flag: 'Flag',
  },
  pt: {
    headLead: 'AGENTSTACK:',
    headAccent: 'SEMANTIC INTERCEPT FABRIC',
    subtitle: 'Um firewall semântico — ciente do conteúdo, não apenas baseado em ações.',
    controlsIntro: (
      <>
        Controles <span className="text-orange-400 font-bold">semânticos</span> — injeção de prompt, vazamento de dados, exfiltração — com ontologias específicas de domínio.
      </>
    ),
    layeredModel: 'Um modelo em camadas:',
    ruleItem: (
      <>
        <span className="text-orange-400 font-bold">Motor de regras</span> — correspondência de padrões de alta performance com atualizações dinâmicas de regras.
      </>
    ),
    mlItem: (
      <>
        <span className="text-orange-400 font-bold">Detecção por ML</span> — inferência de baixa latência, detecção de anomalias, plugins compatíveis com ONNX.
      </>
    ),
    dlpItem: (
      <>
        <span className="text-orange-400 font-bold">Varredura DLP</span> — segredos, PII, exfiltração de IP via correspondência de padrões + NER.
      </>
    ),
    rustNote: 'Implementação em Rust. Classificação sub-20ms ajustada à tolerância a risco e à profundidade do conteúdo.',
    policyDashboard: 'Painel de Políticas',
    unifiedServer: 'Servidor Unificado (HTTP)',
    unifiedServerSub: 'normalização · limpeza · depuração',
    ruleEngine: 'Motor de Regras',
    ruleEngineSub: 'correspondência rápida',
    mlDetection: 'Detecção por ML',
    mlDetectionSub: 'detecção de anomalias',
    dlpScanner: 'Scanner DLP',
    dlpScannerSub: 'segredos, PII',
    decisionEngine: 'Motor de Decisão',
    decisionEngineSub: 'pontuação · limiares',
    auditLayer: 'Camada de Auditoria Criptográfica',
    allow: 'Permitir',
    block: 'Bloquear',
    flag: 'Sinalizar',
  },
});

function Box({ label, sub, variant = 'white' }: { label: string; sub?: string; variant?: 'white' | 'orange' | 'yellow' }) {
  const colors = {
    white: { border: 'rgba(255,255,255,0.30)', bg: 'rgba(255,255,255,0.06)', text: '#fefefe' },
    orange: { border: 'rgba(249,115,22,0.5)', bg: 'rgba(249,115,22,0.10)', text: '#fb923c' },
    yellow: { border: 'rgba(234,179,8,0.5)', bg: 'rgba(234,179,8,0.10)', text: '#facc15' },
  }[variant];
  return (
    <div className="px-4 py-2 rounded-md text-center w-full" style={{ border: `1px solid ${colors.border}`, background: colors.bg }}>
      <p className="text-sm font-bold" style={{ fontFamily: font, color: colors.text }}>{label}</p>
      {sub && <p className="text-[11px] mt-0.5 opacity-70" style={{ fontFamily: font, color: colors.text }}>{sub}</p>}
    </div>
  );
}

function Arrow() {
  return (
    <div className="flex justify-center py-1">
      <svg width="12" height="16" viewBox="0 0 10 14" className="text-yellow-400/70">
        <path d="M5 0v10M2 8l3 4 3-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeDasharray="3 3" />
      </svg>
    </div>
  );
}

export function SalesInterceptFabricSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#0a0a0f] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col px-10 lg:px-20 py-12 lg:py-16 justify-center gap-7">

        <div className="shrink-0">
          <motion.h1
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[32px] sm:text-[44px] lg:text-[56px] leading-[1.05] tracking-tight"
            style={{ fontFamily: fontTitle }}
          >
            {T.headLead}{' '}
            <span className="text-orange-400">{T.headAccent}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-[#fefefe]/65 text-base lg:text-lg mt-2 italic"
            style={{ fontFamily: font }}
          >
            {T.subtitle}
          </motion.p>
        </div>

        <div className="grid grid-cols-[1fr_1.1fr] gap-10 lg:gap-14 shrink-0 items-start">

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col gap-5"
          >
            <p className="text-[#fefefe]/85 text-base lg:text-lg leading-relaxed" style={{ fontFamily: font }}>
              {T.controlsIntro}
            </p>

            <div>
              <p className="text-[#fefefe] text-base lg:text-lg font-bold mb-3" style={{ fontFamily: font }}>
                {T.layeredModel}
              </p>
              <ol className="space-y-3 list-decimal list-inside">
                <li className="text-[#fefefe]/85 text-sm lg:text-base leading-relaxed" style={{ fontFamily: font }}>
                  {T.ruleItem}
                </li>
                <li className="text-[#fefefe]/85 text-sm lg:text-base leading-relaxed" style={{ fontFamily: font }}>
                  {T.mlItem}
                </li>
                <li className="text-[#fefefe]/85 text-sm lg:text-base leading-relaxed" style={{ fontFamily: font }}>
                  {T.dlpItem}
                </li>
              </ol>
            </div>

            <p className="text-[#fefefe]/65 text-sm lg:text-base leading-relaxed" style={{ fontFamily: font }}>
              {T.rustNote}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-col items-center gap-0"
          >
            <Box label={T.policyDashboard} variant="yellow" />
            <Arrow />
            <Box label={T.unifiedServer} sub={T.unifiedServerSub} variant="white" />
            <Arrow />

            <div className="grid grid-cols-3 gap-2 w-full">
              <Box label={T.ruleEngine} sub={T.ruleEngineSub} variant="white" />
              <Box label={T.mlDetection} sub={T.mlDetectionSub} variant="white" />
              <Box label={T.dlpScanner} sub={T.dlpScannerSub} variant="white" />
            </div>
            <Arrow />

            <div className="flex items-center gap-4 w-full">
              <div className="flex-1">
                <Box label={T.decisionEngine} sub={T.decisionEngineSub} variant="white" />
              </div>
              <svg width="32" height="12" viewBox="0 0 30 10" className="shrink-0 text-[#fefefe]/50">
                <path d="M0 5h24M21 2l4 3-4 3" stroke="currentColor" strokeWidth="1.5" fill="none" strokeDasharray="3 3" />
              </svg>
              <div className="shrink-0 flex flex-col gap-0.5 text-sm font-bold leading-tight" style={{ fontFamily: font }}>
                <span className="text-green-400">{T.allow}</span>
                <span className="text-red-400">{T.block}</span>
                <span className="text-yellow-400">{T.flag}</span>
              </div>
            </div>
            <Arrow />

            <Box label={T.auditLayer} variant="yellow" />
          </motion.div>

        </div>
      </div>
    </div>
  );
}
