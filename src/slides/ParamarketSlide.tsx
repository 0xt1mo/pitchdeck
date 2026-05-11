import splashVideoUrl from '/kling_20260226_VIDEO_Take_Image_1650_0.mp4';

export function ParamarketSlide() {
  return (
    <div className="fixed inset-0 z-50 bg-[#060606] overflow-y-auto">
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
            Use Case: Enterprise
          </p>
          <h1
            className="text-[#fefefe] text-[28px] sm:text-[40px] lg:text-[52px] leading-[0.95] tracking-tight mt-1"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            PARAMETRIC <span className="text-orange-400">INSURANCE</span>
          </h1>
          <p className="text-[#fefefe]/60 text-sm sm:text-base mt-2 max-w-2xl" style={{ fontFamily: "'Geist Mono', monospace" }}>
            Built for a leading reinsurance company, ParaMarket is an insurance company operated by autonomous agents.
          </p>
        </div>

        {/* Iframe */}
        <div className="flex-1 mt-4 min-h-0 rounded-xl overflow-hidden border border-orange-500/15 relative">
          <div className="absolute inset-0 bg-orange-500/[0.03]" />
          <iframe
            src="https://paramarket.netlify.app"
            className="w-full h-full relative z-10"
            style={{ border: 'none', background: '#060606' }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
          />
        </div>
      </div>
    </div>
  );
}
