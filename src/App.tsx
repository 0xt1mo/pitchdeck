import { useEffect, useCallback, useState } from 'react';
import { CasinoCoverSlide } from './slides/casino/CasinoCoverSlide';
import { CasinoOnboardingSlide } from './slides/casino/CasinoOnboardingSlide';
import { CasinoRetentionSlide } from './slides/casino/CasinoRetentionSlide';
import { CasinoLoyaltySlide } from './slides/casino/CasinoLoyaltySlide';
import { CasinoCostSlide } from './slides/casino/CasinoCostSlide';
import { CasinoTeamSlide } from './slides/casino/CasinoTeamSlide';
import { CasinoPlatformSlide } from './slides/casino/CasinoPlatformSlide';
import { CasinoAutonomyStackSlide } from './slides/casino/CasinoAutonomyStackSlide';
import { CasinoWhyNowSlide } from './slides/casino/CasinoWhyNowSlide';
import { CasinoIntroducingUnicitySlide } from './slides/casino/CasinoIntroducingUnicitySlide';
import { CasinoAskSlide } from './slides/casino/CasinoAskSlide';
import { CasinoDashboardSlide } from './slides/casino/CasinoDashboardSlide';
import { SalesIntroSlide } from './slides/sales/SalesIntroSlide';
import { SalesAgentsComingSlide } from './slides/sales/SalesAgentsComingSlide';
import { SalesPilotPurgatorySlide } from './slides/sales/SalesPilotPurgatorySlide';
import { SalesOverviewSlide } from './slides/sales/SalesOverviewSlide';
import { SalesAgentHostSlide } from './slides/sales/SalesAgentHostSlide';
import { SalesInterceptFabricSlide } from './slides/sales/SalesInterceptFabricSlide';
import { SalesAgentSphereSlide } from './slides/sales/SalesAgentSphereSlide';
import { SalesDeploymentSlide } from './slides/sales/SalesDeploymentSlide';
import { SalesAboutSlide } from './slides/sales/SalesAboutSlide';
import { SalesContactSlide } from './slides/sales/SalesContactSlide';
import { SlideNavigation } from './components/SlideNavigation';

const slides = [
  CasinoCoverSlide,             // 1. Cover — Your next million customers won't arrive as humans
  CasinoWhyNowSlide,            // 2. Why Now — Web → Mobile → Agentic
  CasinoIntroducingUnicitySlide,// 3. Introducing Unicity — secure agentic OS for gaming
  CasinoOnboardingSlide,        // 4. Onboarding — signup funnel was built for humans
  CasinoCostSlide,              // 5. Cost — Thirty years of on-ramp friction
  CasinoRetentionSlide,         // 6. Retention — 92% ignored
  CasinoLoyaltySlide,           // 7. Loyalty — Personalisation that actually personalises
  // CasinoComplianceSlide,     // hidden — Your regulatory moat, built into the rail
  CasinoAutonomyStackSlide,     // 8. The Stack — operating system for autonomous AI
  CasinoDashboardSlide,         // 9. Enterprise Console — pillar dashboards
  CasinoPlatformSlide,          // 10. What Unicity Is — 6 platform pillars
  // CasinoArchitectureSlide,   // hidden — Player wallet to operator wallet
  CasinoAskSlide,               // 11. The Ask — 45 days to production
  CasinoTeamSlide,              // 12. Who We Are — team + globe
  SalesContactSlide,            // 13. See It In Action / Contact
  SalesIntroSlide,              // 14. Intro
  SalesAgentsComingSlide,       // 15. Agents are coming
  SalesPilotPurgatorySlide,     // 16. Agentic AI not ready for production
  SalesOverviewSlide,           // 17. Security, Safety, Verifiability — 3 products
  SalesAgentHostSlide,          // 18. AgentHost / ASTRID OS
  SalesInterceptFabricSlide,    // 19. Semantic Intercept Fabric
  SalesAgentSphereSlide,        // 20. AgentSphere
  SalesDeploymentSlide,         // 21. Deployment Models
  SalesAboutSlide,              // 22. About Us
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const goToSlide = useCallback((index: number) => {
    if (index >= 0 && index < slides.length) {
      setCurrentSlide(index);
    }
  }, []);

  // Expose for PDF export script
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
