import splashVideoUrl from '/kling_20260226_VIDEO_Take_Image_1650_0.mp4';
import unicityLogoUrl from '/UnicityLogo.svg';

export function UniclawSlide() {
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
            Marketplace
          </p>
          <h1
            className="text-[#fefefe] text-[32px] sm:text-[44px] lg:text-[56px] leading-[0.95] tracking-tight mt-1"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            MARKETPLACE 2:{' '}
            <span className="text-orange-400">UNICLAW</span>
          </h1>
          <div className="h-[2px] w-32 sm:w-48 bg-gradient-to-r from-orange-500 to-transparent origin-left mt-2" />
        </div>

        {/* Iframe */}
        <div className="flex-1 mt-4 min-h-0 rounded-xl overflow-hidden border border-orange-500/15 relative">
          <div className="absolute inset-0 bg-orange-500/[0.03]" />
          <iframe
            src="https://uniclaw.app/"
            className="w-full h-full relative z-10"
            style={{ border: 'none', background: '#060606' }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
          />
        </div>

        {/* Logo */}
        <div className="shrink-0 mt-3 flex justify-end">
          <img src={unicityLogoUrl} alt="Unicity" className="h-5 opacity-60" />
        </div>

      </div>
    </div>
  );
}
