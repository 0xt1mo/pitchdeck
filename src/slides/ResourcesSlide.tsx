import splashVideoUrl from '/kling_20260226_VIDEO_Take_Image_1650_0.mp4';
import unicityLogoUrl from '/UnicityLogo.svg';

const resources = [
  {
    title: 'GitHub: Code & Collaboration',
    desc: 'Explore our open-source repositories and contribute to the Unicity ecosystem. Find documentation, development updates, and more.',
    url: 'https://github.com/unicitynetwork',
    urlLabel: 'github.com/unicitynetwork',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    title: 'Discord: Community Hub',
    desc: 'Join our vibrant community for real-time discussions, support, and direct interaction with the Unicity team and fellow enthusiasts.',
    url: 'https://discord.gg/MJrWKntQi',
    urlLabel: 'discord.gg/MJrWKntQi',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.947 2.418-2.157 2.418z" />
      </svg>
    ),
  },
  {
    title: 'Whitepaper: Vision & Strategy',
    desc: 'Dive deep into Unicity\'s foundational vision, innovative technology, and strategic roadmap for the future of digital asset execution.',
    url: 'https://github.com/unicitynetwork/whitepaper/releases/tag/latest',
    urlLabel: 'github.com/.../whitepaper/releases/tag/latest',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zM7 7h10M7 12h10M7 17h6" />
      </svg>
    ),
  },
  {
    title: 'ZK Bluepaper: Technical Deep Dive',
    desc: 'For developers and technical experts — architecture, protocols, and mechanisms driving Unicity\'s P2P execution model.',
    url: 'https://github.com/unicitynetwork/aggr-layer-paper/releases/tag/latest',
    urlLabel: 'github.com/.../aggr-layer-paper/releases/tag/latest',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zM7 7h10M7 12h10M7 17h6" />
      </svg>
    ),
  },
  {
    title: 'Technical FAQ',
    desc: 'Answers to common technical questions about architecture, agents, scalability, and security. Perfect for developers and stakeholders.',
    url: 'https://unicity.network/faq',
    urlLabel: 'unicity.network/faq',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <circle cx="12" cy="12" r="10" />
        <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3M12 17h.01" />
      </svg>
    ),
  },
  {
    title: 'Unicity Block Explorer',
    desc: 'Explore the Unicity testnet in real-time. View transactions, network statistics, and monitor decentralized infrastructure.',
    url: 'https://unicity.network',
    urlLabel: 'unicity.network',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
      </svg>
    ),
  },
  {
    title: 'Security Proofs',
    desc: 'Formal security proofs and cryptographic analysis of Unicity\'s protocols. For security researchers and auditors.',
    url: 'https://github.com/unicitynetwork/execution-model-tex/releases/tag/latest/',
    urlLabel: 'github.com/.../execution-model-tex/releases',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: 'Predicate Language',
    desc: 'Each token has its own execution environment. This paper provides a formal proof of execution.',
    url: 'https://github.com/unicitynetwork/execution-model-tex/releases/tag/latest',
    urlLabel: 'github.com/.../execution-model-tex/releases',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <rect x="4" y="4" width="6" height="6" rx="1" />
        <rect x="14" y="4" width="6" height="6" rx="1" />
        <rect x="4" y="14" width="6" height="6" rx="1" />
        <rect x="14" y="14" width="6" height="6" rx="1" />
      </svg>
    ),
  },
];

export function ResourcesSlide() {
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
          <p className="text-orange-400 text-[10px] sm:text-xs tracking-[0.4em] uppercase"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            Appendix
          </p>
          <h1 className="text-[#fefefe] text-[32px] sm:text-[44px] lg:text-[56px] leading-[0.95] tracking-tight mt-1"
            style={{ fontFamily: "'Anton', sans-serif" }}>
            ESSENTIAL{' '}
            <span className="text-orange-400">RESOURCES</span>
          </h1>
          <div className="h-[2px] w-32 sm:w-48 bg-gradient-to-r from-orange-500 to-transparent origin-left mt-1.5" />
          <p className="mt-2 text-[#fefefe]/60 text-xs sm:text-sm"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            Access all the essential resources to understand, engage with, and contribute to the Unicity project.
          </p>
        </div>

        {/* Resource grid */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-5 sm:mt-6">
          {resources.map((r) => (
            <a
              key={r.title}
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl border border-white/[0.06] bg-white/[0.02] hover:border-orange-500/25 hover:bg-orange-500/[0.03] backdrop-blur-sm p-3 sm:p-4 transition-all duration-300 flex flex-col"
            >
              <div className="text-orange-400/60 group-hover:text-orange-400 transition-colors mb-2">
                {r.icon}
              </div>
              <h3 className="text-[#fefefe]/90 text-xs sm:text-sm font-bold uppercase tracking-wide"
                style={{ fontFamily: "'Anton', sans-serif", letterSpacing: '0.05em' }}>
                {r.title}
              </h3>
              <p className="text-[#fefefe]/50 text-[10px] sm:text-[11px] leading-relaxed mt-1.5 flex-1"
                style={{ fontFamily: "'Geist Mono', monospace" }}>
                {r.desc}
              </p>
              <p className="text-orange-400/60 group-hover:text-orange-400 text-[9px] sm:text-[10px] mt-2 underline underline-offset-2 decoration-orange-500/30 truncate"
                style={{ fontFamily: "'Geist Mono', monospace" }}>
                {r.urlLabel}
              </p>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="shrink-0 mt-5 flex items-end justify-between">
          <p className="text-[#fefefe]/30 text-[10px] sm:text-[11px]"
            style={{ fontFamily: "'Geist Mono', monospace" }}>
            These resources provide comprehensive insights into Unicity's technology, community, and future direction.
          </p>
          <img src={unicityLogoUrl} alt="Unicity" className="h-5 opacity-60 shrink-0 ml-4" />
        </div>

      </div>
    </div>
  );
}
