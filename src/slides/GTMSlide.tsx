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
    role: 'Settlement for consumer agents',
  },
  {
    segment: 'ENTERPRISE',
    color: '#3b82f6',
    name: 'Aleria',
    what: "Sovereign AI platform",
    scale: '$400B+ ecosystem (UAE)',
    geography: 'UAE → GCC → Global',
    role: 'Settlement for enterprise AI agents',
  },
  {
    segment: 'MERCHANTS',
    color: '#10b981',
    name: 'EasyTransac',
    what: 'Omnichannel payment acceptance',
    scale: '60K+ merchants',
    geography: 'Europe',
    role: 'Settlement for merchant acceptance',
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

const rows = [
  { label: 'Partner', key: 'name' as const },
  { label: 'What They Do', key: 'what' as const },
  { label: 'Scale', key: 'scale' as const },
  { label: 'Geography', key: 'geography' as const },
  { label: 'Unicity Role', key: 'role' as const },
];

export function GTMSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-hidden">
      {/* Video background */}
      <div className="fixed inset-0 w-full h-full z-0">
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

        {/* Table */}
        <div className="mt-8 sm:mt-10 overflow-auto">
          <table className="w-full border-collapse" style={{ fontFamily: "'Geist Mono', monospace" }}>
            {/* Column headers — segment names */}
            <thead>
              <tr>
                <th className="w-[140px]" />
                {partners.map((p) => (
                  <th key={p.segment} className="text-left px-4 pb-3">
                    <span
                      className="text-xs sm:text-sm tracking-[0.15em] font-bold"
                      style={{ fontFamily: "'Anton', sans-serif", color: p.color }}
                    >
                      {p.segment}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.label} className="border-t border-white/[0.06]">
                  <td className="py-3 pr-4 text-[#fefefe]/40 text-[10px] sm:text-xs uppercase tracking-wider align-top whitespace-nowrap">
                    {row.label}
                  </td>
                  {partners.map((p) => (
                    <td key={p.segment} className="py-3 px-4 text-[#fefefe]/80 text-[11px] sm:text-xs lg:text-sm align-top">
                      {row.key === 'name' ? (
                        <span className="font-bold" style={{ color: p.color }}>{p[row.key]}</span>
                      ) : (
                        p[row.key]
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom quote */}
        <div className="shrink-0 mt-6 sm:mt-8">
          <p
            className="text-[#fefefe]/60 text-xs sm:text-sm leading-relaxed max-w-4xl"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            These partnerships let us prove the model before we scale it. Tawasal proves <span className="text-orange-400">consumer agent settlement</span>. Aleria proves <span className="text-orange-400">enterprise AI execution</span>. EasyTransac proves <span className="text-orange-400">merchant acceptance</span>. PadUp proves the <span className="text-orange-400">developer pipeline</span>. With all four live, we shift from partner-driven distribution to organic developer growth — new agents, new use cases, new markets — all settling on infrastructure that's already battle-tested.
          </p>
        </div>

        {/* Target stats */}
        <div className="shrink-0 mt-6 sm:mt-8">
          <h2
            className="text-[#fefefe] text-[24px] sm:text-[32px] lg:text-[40px] leading-[1] tracking-tight"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            TARGET FOR SERIES A<span className="text-[#fefefe]/20 mx-3 sm:mx-4">—</span>100K <span className="text-orange-400">DAA</span><span className="text-[#fefefe]/20 mx-2 sm:mx-3">|</span>1K <span className="text-orange-400">TPS</span>
          </h2>
          <p
            className="text-[#fefefe]/40 text-[10px] sm:text-xs mt-1.5"
            style={{ fontFamily: "'Geist Mono', monospace" }}
          >
            Daily Active Agents &nbsp;&nbsp;·&nbsp;&nbsp; Transactions Per Second
          </p>
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
