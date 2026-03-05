import splashVideoUrl from '/kling_20260226_VIDEO_Take_Image_1650_0.mp4';
import unicityLogoUrl from '/UnicityLogo.svg';

const partners = [
  {
    segment: 'CONSUMERS',
    color: '#f97316',
    name: 'Tawasal',
    what: 'MENA super app',
    scale: '6M daily active users',
    geography: 'UAE, MENA, Asia',
    role: 'A2A marketplace infra',
  },
  {
    segment: 'ENTERPRISE',
    color: '#3b82f6',
    name: 'Aleria',
    what: "Sovereign AI platform",
    scale: '$400B+ ecosystem (UAE)',
    geography: 'UAE → GCC → Global',
    role: 'A2A marketplace infra',
  },
  {
    segment: 'MERCHANTS',
    color: '#10b981',
    name: 'EasyTransac',
    what: 'Omnichannel payment acceptance',
    scale: '60K+ merchants',
    geography: 'Europe',
    role: 'A2A marketplace infra',
  },
  {
    segment: 'DEVELOPERS',
    color: '#a855f7',
    name: 'PadUp Ventures',
    what: 'Startup incubator',
    scale: '112K+ startup ecosystem',
    geography: 'India',
    role: 'Agentic commerce dev track',
  },
];

export function GTMSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-y-auto">
      {/* Video background */}
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
        <video className="w-full h-full object-cover opacity-20" autoPlay muted loop playsInline src={splashVideoUrl} />
        <div className="absolute inset-0 bg-[#060606]/50" />
      </div>

      <div className="relative z-10 h-full flex flex-col px-6 sm:px-10 lg:px-16 py-6 sm:py-8">

        {/* Header */}
        <div className="shrink-0">
          <p
            className="text-orange-400 text-[10px] sm:text-xs tracking-[0.4em] uppercase"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            Strategy
          </p>
          <h1
            className="text-[#fefefe] text-[32px] sm:text-[44px] lg:text-[56px] leading-[0.95] tracking-tight mt-1"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            DISTRIBUTION
          </h1>
          <div className="h-[2px] w-32 sm:w-48 bg-gradient-to-r from-orange-500 to-transparent origin-left mt-2" />
          <p
            className="text-[#fefefe]/70 text-xs sm:text-sm mt-3 max-w-3xl"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            Our initial distribution is through <span className="text-orange-400">strategic investors</span> deploying infrastructure for both consumer and enterprise <span className="text-orange-400">agent commerce</span>.
          </p>
        </div>

        {/* Partner cards */}
        <div className="mt-6 sm:mt-8 grid grid-cols-4 gap-3 sm:gap-4 shrink-0">
          {partners.map((p) => (
            <div
              key={p.segment}
              className="rounded-xl overflow-hidden flex flex-col"
              style={{
                border: `1px solid ${p.color}30`,
                background: `linear-gradient(170deg, ${p.color}12 0%, transparent 40%)`,
              }}
            >
              {/* Segment header */}
              <div
                className="px-4 sm:px-5 pt-4 sm:pt-5 pb-3"
                style={{ borderBottom: `1px solid ${p.color}20` }}
              >
                <p
                  className="text-[10px] sm:text-xs tracking-[0.2em] uppercase mb-1"
                  style={{ fontFamily: "'Geist Mono', monospace", color: `${p.color}90` }}
                >
                  {p.segment}
                </p>
                <h3
                  className="text-lg sm:text-xl lg:text-2xl leading-tight"
                  style={{ fontFamily: "'Anton', sans-serif", color: p.color }}
                >
                  {p.name}
                </h3>
              </div>

              {/* Data rows */}
              <div className="flex-1 px-4 sm:px-5 py-3 space-y-3" style={{ fontFamily: "'Geist Mono', monospace" }}>
                {[
                  { label: 'What', value: p.what },
                  { label: 'Scale', value: p.scale },
                  { label: 'Geo', value: p.geography },
                  { label: 'A2A Infra', value: p.role },
                ].map((row) => (
                  <div key={row.label}>
                    <p className="text-[#fefefe]/30 text-[9px] sm:text-[10px] uppercase tracking-wider mb-0.5">
                      {row.label}
                    </p>
                    <p className="text-[#fefefe]/80 text-[11px] sm:text-xs leading-snug">
                      {row.value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Proof points — horizontal flow */}
        <div className="shrink-0 mt-4 sm:mt-5 grid grid-cols-4 gap-3 sm:gap-4">
          {[
            { partner: 'Tawasal', proves: 'Consumer Settlement', color: '#f97316' },
            { partner: 'Aleria', proves: 'Enterprise AI Execution', color: '#3b82f6' },
            { partner: 'EasyTransac', proves: 'Merchant Acceptance', color: '#10b981' },
            { partner: 'PadUp', proves: 'Developer Pipeline', color: '#a855f7' },
          ].map((p, i) => (
            <div key={p.partner} className="flex items-center gap-2.5">
              <div className="w-1 h-8 rounded-full shrink-0" style={{ background: p.color }} />
              <div style={{ fontFamily: "'Geist Mono', monospace" }}>
                <p className="text-[#fefefe]/80 text-[10px] sm:text-xs font-bold">{p.partner}</p>
                <p className="text-[10px] sm:text-[11px]" style={{ color: p.color }}>{p.proves}</p>
              </div>
              {i < 3 && (
                <svg viewBox="0 0 12 12" className="w-3 h-3 ml-auto shrink-0 text-[#fefefe]/15">
                  <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </div>
          ))}
        </div>

        {/* Target banner */}
        <div
          className="shrink-0 mt-4 sm:mt-5 rounded-xl px-6 sm:px-8 py-4 sm:py-5 flex items-center gap-6 sm:gap-10"
          style={{
            background: 'linear-gradient(135deg, rgba(249,115,22,0.06) 0%, rgba(249,115,22,0.02) 100%)',
            border: '1px solid rgba(249,115,22,0.2)',
          }}
        >
          <h2
            className="text-[#fefefe]/50 text-sm sm:text-base lg:text-lg uppercase tracking-wider whitespace-nowrap"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            SERIES A<br />TARGET
          </h2>
          <div className="h-10 w-px bg-orange-500/20 shrink-0" />
          <div className="flex items-baseline gap-2">
            <span className="text-[#fefefe] text-[28px] sm:text-[36px] lg:text-[44px] leading-none" style={{ fontFamily: "'Anton', sans-serif" }}>100K</span>
            <span className="text-orange-400 text-sm sm:text-base lg:text-lg" style={{ fontFamily: "'Geist Mono', monospace" }}>DAA</span>
          </div>
          <div className="text-[#fefefe]/15 text-2xl" style={{ fontFamily: "'Anton', sans-serif" }}>|</div>
          <div className="flex items-baseline gap-2">
            <span className="text-[#fefefe] text-[28px] sm:text-[36px] lg:text-[44px] leading-none" style={{ fontFamily: "'Anton', sans-serif" }}>1K</span>
            <span className="text-orange-400 text-sm sm:text-base lg:text-lg" style={{ fontFamily: "'Geist Mono', monospace" }}>TPS</span>
          </div>
          <div className="ml-auto text-[#fefefe]/60 text-[10px] sm:text-xs text-right leading-relaxed" style={{ fontFamily: "'Geist Mono', monospace" }}>
            Daily Active Agents<br />Transactions Per Second
          </div>
        </div>

        <div className="flex-1" />

        {/* Logo */}
        <div className="shrink-0 mt-3 flex justify-end">
          <img src={unicityLogoUrl} alt="Unicity" className="h-5 opacity-60" />
        </div>

      </div>
    </div>
  );
}
