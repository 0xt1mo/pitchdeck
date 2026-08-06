import { motion } from 'framer-motion';
import { tr } from '../i18n';

const mono = "'Geist Mono', monospace";
const display = "'Anton', sans-serif";

const T = tr({
  en: {
    kicker: 'For the security architect',
    headLead: 'INTEGRATION:',
    headAccent: 'IT USES THE CONTROLS YOU HAVE.',
    sub: 'Designed to slot into the controls you already run — identity, logging, and keys stay yours.',
    items: [
      { label: 'SSO / SAML', body: 'Your existing IdP — no new directory to manage.' },
      { label: 'SCIM provisioning', body: 'Users and groups sync; deprovisioning is automatic.' },
      { label: 'Identity binding', body: 'Agent identity binds to Okta / Entra — every agent maps to a human owner.' },
      { label: 'SIEM export', body: 'Events stream to Splunk / Sentinel, where your SOC already looks.' },
      { label: 'Key management', body: 'Bring your own KMS / HSM. Keys never leave your control.' },
      { label: 'RBAC & audit', body: 'Role-based console access; every admin action is logged and attributable.' },
    ],
  },
  pt: {
    kicker: 'Para o arquiteto de segurança',
    headLead: 'INTEGRAÇÃO:',
    headAccent: 'USA OS CONTROLES QUE VOCÊ JÁ TEM.',
    sub: 'Projetado para se encaixar nos controles que você já opera — identidade, logs e chaves continuam sendo seus.',
    items: [
      { label: 'SSO / SAML', body: 'Seu IdP existente — nenhum novo diretório para gerenciar.' },
      { label: 'Provisionamento SCIM', body: 'Usuários e grupos sincronizam; o desprovisionamento é automático.' },
      { label: 'Vínculo de identidade', body: 'A identidade do agente se vincula ao Okta / Entra — cada agente mapeia para um dono humano.' },
      { label: 'Exportação para SIEM', body: 'Os eventos fluem para o Splunk / Sentinel, onde seu SOC já monitora.' },
      { label: 'Gerenciamento de chaves', body: 'Traga seu próprio KMS / HSM. As chaves nunca saem do seu controle.' },
      { label: 'RBAC e auditoria', body: 'Acesso ao console baseado em papéis; cada ação de admin é registrada e atribuível.' },
    ],
  },
});

export function AosSecuritySlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      <div className="relative z-10 h-full flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-8 lg:py-11 gap-6 lg:gap-8">

        {/* Header */}
        <div className="shrink-0">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-orange-400 text-xs sm:text-sm lg:text-base tracking-[0.4em] uppercase font-bold"
            style={{ fontFamily: mono }}
          >
            {T.kicker}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-[#fefefe] text-[34px] sm:text-[52px] lg:text-[70px] xl:text-[82px] leading-[0.95] tracking-tight uppercase mt-2"
            style={{ fontFamily: display }}
          >
            {T.headLead} <span className="text-orange-400">{T.headAccent}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-[#fefefe]/75 text-base sm:text-lg lg:text-xl leading-snug mt-3 max-w-6xl"
            style={{ fontFamily: mono }}
          >
            {T.sub}
          </motion.p>
        </div>

        {/* Grid */}
        <div className="shrink-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {T.items.map((it, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.06, duration: 0.4 }}
              className="rounded-xl px-5 py-4 lg:py-5"
              style={{ border: '1px solid rgba(255,255,255,0.12)', background: 'rgba(255,255,255,0.015)', borderLeft: '3px solid #f97316' }}
            >
              <p className="text-[#fefefe] text-base lg:text-xl font-bold tracking-[0.1em] uppercase" style={{ fontFamily: mono }}>{it.label}</p>
              <p className="text-[#fefefe]/70 text-sm lg:text-base leading-snug mt-1.5" style={{ fontFamily: mono }}>{it.body}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
