import { useEffect, useCallback, useState } from 'react';
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
  SalesIntroSlide,         // 1. Intro
  SalesAgentsComingSlide,  // 2. Agents are coming
  SalesPilotPurgatorySlide,// 3. Agentic AI not ready for production
  SalesOverviewSlide,      // 4. Security, Safety, Verifiability — 3 products
  SalesAgentHostSlide,     // 5. AgentHost / ASTRID OS
  SalesInterceptFabricSlide,// 6. Semantic Intercept Fabric
  SalesAgentSphereSlide,   // 7. AgentSphere
  SalesDeploymentSlide,    // 8. Deployment Models
  SalesAboutSlide,         // 9. About Us
  SalesContactSlide,       // 10. See It In Action / Contact
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
