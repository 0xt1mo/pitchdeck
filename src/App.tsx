import { useEffect, useCallback, useState } from 'react';
import { CasinoCoverSlide } from './slides/casino/CasinoCoverSlide';
import { CasinoWhyNowSlide } from './slides/casino/CasinoWhyNowSlide';
import { CasinoRetentionSlide } from './slides/casino/CasinoRetentionSlide';
import { CasinoCostSlide } from './slides/casino/CasinoCostSlide';
import { CasinoOnboardingSlide } from './slides/casino/CasinoOnboardingSlide';
import { CasinoLoyaltySlide } from './slides/casino/CasinoLoyaltySlide';
import { CasinoDashboardSlide } from './slides/casino/CasinoDashboardSlide';
import { CasinoIntroducingUnicitySlide } from './slides/casino/CasinoIntroducingUnicitySlide';
import { CasinoAutonomyStackSlide } from './slides/casino/CasinoAutonomyStackSlide';
import { CasinoProofSlide } from './slides/casino/CasinoProofSlide';
import { CasinoPlatformSlide } from './slides/casino/CasinoPlatformSlide';
import { CasinoAskSlide } from './slides/casino/CasinoAskSlide';
import { CasinoTeamSlide } from './slides/casino/CasinoTeamSlide';
import { CasinoLogosSlide } from './slides/casino/CasinoLogosSlide';
import { SalesContactSlide } from './slides/sales/SalesContactSlide';
import { SlideNavigation } from './components/SlideNavigation';

const slides = [
  CasinoCoverSlide,             //  1. Cover — runtime security layer + audit committee
  CasinoWhyNowSlide,            //  2. Nº 01 The Shift — 3 waves (Generation/Assistance/Action)
  CasinoRetentionSlide,         //  3. Nº 02 The Principle — Limits? Qualifies.
  CasinoCostSlide,              //  4. Nº 03 The New Actor — 4-row table
  CasinoOnboardingSlide,        //  5. Nº 04 Why Projects Stall — 40% / Demonstrate
  CasinoLoyaltySlide,           //  6. Nº 05 SEV — Security · Explainability · Verifiability
  CasinoDashboardSlide,         //  7. Nº 06 Enables — Payments · Access · Agreements · Networking
  CasinoIntroducingUnicitySlide,//  8. Nº 07–08 What Unicity + How It Works — 5 cards Register/Delegate/Enforce/Prove/Move
  CasinoAutonomyStackSlide,     //  9. Nº 09 Architecture — 3 layers
  CasinoProofSlide,             // 10. Nº 10 Proof Travels — 5 advantages
  CasinoPlatformSlide,          // 11. Nº 11 Enterprise & Government — 6 use cases
  CasinoAskSlide,               // 12. Nº 11 First Deployment — 45 days
  CasinoTeamSlide,              // 13. Nº 12 Team — 7 founders + sci/eng/advisors
  CasinoLogosSlide,             // 14. Nº 13 Deployment Ecosystem — 4 categories
  SalesContactSlide,            // 15. Contact — Next Steps + 45 days callout + Globe
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < slides.length) {
      setCurrentSlide(index);
    }
  }, []);

  useEffect(() => {
    (window as any).__goToSlide = goToSlide;
    (window as any).__totalSlides = slides.length;
  }, [goToSlide]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
      if (e.code === 'Space' || e.code === 'ArrowRight') {
        e.preventDefault();
        setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
      } else if (e.code === 'ArrowLeft') {
        e.preventDefault();
        setCurrentSlide((prev) => Math.max(prev - 1, 0));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const [isMobile, setIsMobile] = useState(() => window.innerWidth < 768);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const CurrentSlideComponent = slides[currentSlide];

  if (isMobile) {
    return (
      <div className="h-full w-full flex flex-col items-center justify-center px-8 bg-[#060606]">
        <img src="/UnicityLogo.svg" alt="Unicity" className="h-8 mb-6 opacity-60" />
        <h1
          className="text-[#fefefe] text-2xl text-center leading-tight"
          style={{ fontFamily: "'Anton', sans-serif" }}
        >
          DESKTOP <span className="text-orange-400">ONLY</span>
        </h1>
        <p
          className="text-[#fefefe]/50 text-xs text-center mt-3 max-w-xs"
          style={{ fontFamily: "'Geist Mono', monospace" }}
        >
          This deck is optimized for desktop. Please open it on a larger screen.
        </p>
      </div>
    );
  }

  return (
    <div className="h-full w-full relative">
      <CurrentSlideComponent />
      {currentSlide > 0 && (
        <div
          className="fixed bottom-4 left-6 sm:left-10 lg:left-16 z-[101] text-[#fefefe]/40 text-base sm:text-lg font-medium select-none pointer-events-none"
          style={{ fontFamily: "'Geist Mono', monospace" }}
        >
          {currentSlide} / {slides.length - 1}
        </div>
      )}
      {slides.length > 1 && (
        <SlideNavigation
          current={currentSlide}
          total={slides.length}
          onNavigate={goToSlide}
        />
      )}
    </div>
  );
}
