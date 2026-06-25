/* ============================================================
   Option 2 — extra slides for the Tether-structure Greg deck:
   the "answer" positioning beat, the Hard Yaka portfolio /
   fair-access alignment, and the "THE HOW" appendix divider.
   Matches the GregDeck dark / orange-400 / Anton+Geist Mono look.
   ============================================================ */

const mono = "'Geist Mono', monospace";
const anton = "'Anton', sans-serif";

const SCOPE = `
.gxb{font-family:'Geist Mono',monospace}
.gxb .o{color:var(--color-orange-400)}
.gxb b{color:#FEFEFE;font-weight:600}
`;

function Shell({ children, center = false }: { children: React.ReactNode; center?: boolean }) {
  return (
    <div className="gxb fixed inset-0 z-50 bg-[#060606] overflow-y-auto lg:overflow-hidden">
      <style>{SCOPE}</style>
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)', backgroundSize: '64px 64px' }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 58% 50% at 50% 48%, rgba(255,137,4,0.07), transparent 70%)' }} />
      <div className={`relative z-10 min-h-full lg:h-full flex flex-col justify-start lg:justify-center px-6 sm:px-12 lg:px-24 py-14 sm:py-16 lg:py-20 ${center ? 'items-center text-center' : ''}`}>
        {children}
      </div>
    </div>
  );
}

/* ── The answer — one-line positioning (bridge from problem to the how) ── */
export function GregAnswerSlide() {
  return (
    <Shell>
      <h1 className="text-[#fefefe] uppercase text-[30px] sm:text-[40px] lg:text-[52px] leading-[1.06] tracking-tight" style={{ fontFamily: anton }}>
        The answer: <span className="text-orange-400">identity, compliance, and settlement — inside the asset.</span>
      </h1>
      <p className="text-[#fefefe] font-medium text-base sm:text-lg lg:text-xl mt-3 max-w-[92ch] leading-snug">A digital dollar that carries its own proof of who may hold it, and settles peer-to-peer the moment that proof checks out.</p>
      <div className="shrink-0 grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-7 mt-7 lg:mt-9">
        {[
          ['Identity', 'The Receive Predicate decides who may receive — KYC, jurisdiction, and accreditation, programmed into the asset.'],
          ['Compliance', 'Enforced by the asset itself. If the recipient cannot satisfy the rule, the transfer simply does not form.'],
          ['Settlement', 'Off-chain, peer-to-peer, final in sub-seconds — no shared ledger, no venue, no facilitator in the middle.'],
        ].map(([t, d]) => (
          <div key={t} className="rounded-lg border border-[#2c2c2a] border-t-2 border-t-orange-500 bg-[#101010] p-5 lg:p-6">
            <div className="text-orange-400 uppercase tracking-wide text-lg lg:text-2xl" style={{ fontFamily: anton }}>{t}</div>
            <div className="text-[#D6D6D0] text-sm lg:text-lg mt-2.5 leading-snug">{d}</div>
          </div>
        ))}
      </div>
    </Shell>
  );
}

/* ── Hard Yaka portfolio / fair-access alignment ── */
const portfolio = [
  'Ripple', 'Coinbase', 'Square', 'Robinhood', 'Brave', 'Uphold', 'USBC', 'Chainalysis',
  'Ledger', 'Custodia', 'Binance', '21.co', 'Marqeta', 'Bitso', 'BiLira', 'Rain',
  'Blockdaemon', 'VetraFi', 'AiPrise', 'arf', 'emerge',
];
export function GregPortfolioSlide() {
  return (
    <Shell>
      <div className="shrink-0">
        <h1 className="text-[#fefefe] uppercase text-[30px] sm:text-[40px] lg:text-[52px] leading-[1.06] tracking-tight" style={{ fontFamily: anton }}>
          Hard Yaka funds the <span className="text-orange-400">infrastructure of fair access.</span>
        </h1>
        <p className="text-[#fefefe] font-medium text-base sm:text-lg lg:text-xl mt-3 max-w-[92ch] leading-snug">250+ companies across payments, identity, and banking — the open building blocks of an inclusive financial system.</p>
      </div>
      <div className="shrink-0 mt-8 lg:mt-10 grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-x-6 gap-y-5">
        {portfolio.map((name) => (
          <span key={name} className="text-[#D6D6D0] text-base lg:text-2xl leading-none" style={{ fontFamily: anton, opacity: 0.9 }}>{name}</span>
        ))}
      </div>
      <p className="shrink-0 mt-10 text-[#9E9E96] text-sm lg:text-base tracking-wide leading-relaxed" style={{ fontFamily: mono }}>Identity and compliant value on open infrastructure — the thesis behind Ripple, GlobaliD, and USBC. <span className="text-[#D6D6D0]">Unicity shares it, focused on one frontier: trust between machines.</span></p>
    </Shell>
  );
}

/* ── "THE HOW" appendix divider ── */
export function GregHowDividerSlide() {
  return (
    <Shell center>
      <p className="text-orange-400 text-xs sm:text-sm lg:text-base tracking-[0.4em] uppercase" style={{ fontFamily: mono }}>Appendix</p>
      <h1 className="text-[#fefefe] uppercase text-[56px] sm:text-[88px] lg:text-[128px] leading-[0.9] tracking-tight mt-4" style={{ fontFamily: anton }}>
        The <span className="text-orange-400">How.</span>
      </h1>
      <div className="h-[2px] w-40 lg:w-56 bg-gradient-to-r from-orange-500 to-transparent mt-6" />
      <p className="text-[#D6D6D0] text-base sm:text-lg lg:text-2xl mt-6 max-w-[70ch] leading-snug" style={{ fontFamily: mono }}>The protocol behind every claim — the mechanism, the math, and the guarantees.</p>
    </Shell>
  );
}
