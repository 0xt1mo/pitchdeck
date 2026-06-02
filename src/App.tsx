import { useEffect, useCallback, useState } from 'react';

// ── INTRO (Telecom intro logic) + THE PLATFORM (run · manage · contain · secure agents) ──
import { CoverSlide } from './slides/CoverSlide';
import { TelecomOpportunitySlide } from './slides/TelecomOpportunitySlide';
import { ProblemSlide } from './slides/ProblemSlide';
import { MarketSlide } from './slides/MarketSlide';
import { AutonomyStackSlide } from './slides/AutonomyStackSlide';
import { WhyDifferentSlide } from './slides/WhyDifferentSlide';
import { ShadowAISlide } from './slides/ShadowAISlide';
import { DLPSlide } from './slides/DLPSlide';
import { RunawayComputeSlide } from './slides/RunawayComputeSlide';
import { IntelligentRoutingSlide } from './slides/IntelligentRoutingSlide';
import { DeploymentModelHtmlSlide } from './slides/DeploymentModelHtmlSlide';
import { SalesTrackRecordSlide } from './slides/sales/SalesTrackRecordSlide';
import { ContactSlide } from './slides/ContactSlide';

// ── TECHNICAL APPENDIX — how the platform works (supporting tech) ──
import { TechnicalAppendixDividerSlide } from './slides/TechnicalAppendixDividerSlide';
import { AstridSlide } from './slides/AstridSlide';
import { AstridComparisonSlide } from './slides/AstridComparisonSlide';
import { AstridUseCasesSlide } from './slides/AstridUseCasesSlide';
import { InterceptFabricSlide } from './slides/InterceptFabricSlide';
import { ProofPapersSlide } from './slides/ProofPapersSlide';

import { SlideNavigation } from './components/SlideNavigation';

const slides = [
  // ── ACT I — THE SETUP (the shift → the opportunity → the scale) ──
  CoverSlide,                 // 1.  Cover — The secure agentic compute platform for Enterprise
  ProblemSlide,               // 2.  The Shift — the fourth rebuild of computing
  TelecomOpportunitySlide,    // 3.  The Opportunity — every enterprise runs thousands of agents
  MarketSlide,                // 4.  And it's a trillion-dollar layer (NVIDIA · Gartner · McKinsey)

  // ── ACT II — THE PLATFORM ──
  AutonomyStackSlide,         // 5.  Unicity: the secure AI compute platform (the platform stack)
  WhyDifferentSlide,          // 6.  Secure · efficient · provable

  // ── ACT III — THE PLATFORM IN ACTION (run · manage · contain · secure) ──
  ShadowAISlide,              // 7.  See every agent — agent sprawl & shadow AI (manage)
  DLPSlide,                   // 8.  Data Loss Prevention (secure)
  RunawayComputeSlide,        // 9.  Cost control — every agent gets a budget (manage)
  IntelligentRoutingSlide,    // 10. Intelligent routing — right model per task (run)

  // ── ACT IV — PROOF IT'S READY ──
  DeploymentModelHtmlSlide,   // 11. Runs inside your infrastructure
  SalesTrackRecordSlide,      // 12. The team's track record — Guardtime / 0 breaches
  ContactSlide,               // 13. Let us show you. 20 minutes. One working flow.

  // ── TECHNICAL APPENDIX — how the platform works (supporting) ──
  TechnicalAppendixDividerSlide, // 14. Technical Appendix divider
  AstridSlide,                // 15. AOS: the kernel (runs agents)
  AstridComparisonSlide,      // 16. Why AOS
  AstridUseCasesSlide,        // 17. Swap a capsule (contains agents)
  InterceptFabricSlide,       // 18. Semantic Intercept Fabric (secures agents)
  ProofPapersSlide,           // 19. The proof underneath — here's the math
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
