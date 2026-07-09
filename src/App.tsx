import { useEffect, useCallback, useState } from 'react';
import './sphereInit'; // Start SDK initialization eagerly on page load
import { CoverSlide } from './slides/CoverSlide';
import { WhyNowMagicAgentSlide } from './slides/WhyNowMagicAgentSlide';
import { TheTrapSlide } from './slides/TheTrapSlide';
import { FailureNarrativeSlide } from './slides/FailureNarrativeSlide';
import { CostOfFailureSlide } from './slides/CostOfFailureSlide';
import { KernelReframeSlide } from './slides/KernelReframeSlide';
import { AutonomyStackSlide } from './slides/AutonomyStackSlide';
import { DeploymentModelHtmlSlide } from './slides/DeploymentModelHtmlSlide';
import { WhyDifferentSlide } from './slides/WhyDifferentSlide';
import { EfficiencyPayoffSlide } from './slides/EfficiencyPayoffSlide';
import { ComplianceConsoleSlide } from './slides/ComplianceConsoleSlide';
import { WhoWeAreSlide } from './slides/WhoWeAreSlide';
import { ContactSlide } from './slides/ContactSlide';
// ── Appendix ──
import { UseCasesAppendixSlide } from './slides/UseCasesAppendixSlide';
import { ShadowAISlide } from './slides/ShadowAISlide';
import { DLPSlide } from './slides/DLPSlide';
import { RunawayComputeSlide } from './slides/RunawayComputeSlide';
import { IntelligentRoutingSlide } from './slides/IntelligentRoutingSlide';
import { TechnicalAppendixDividerSlide } from './slides/TechnicalAppendixDividerSlide';
import { AstridSlide } from './slides/AstridSlide';
import { AstridComparisonSlide } from './slides/AstridComparisonSlide';
import { AstridUseCasesSlide } from './slides/AstridUseCasesSlide';
import { InterceptFabricSlide } from './slides/InterceptFabricSlide';
import { SlideNavigation } from './components/SlideNavigation';

const slides = [
  // ══ HEALTHCARE DECK ══
  // ── The tension (build it, don't resolve) ──
  CoverSlide,                // 1. Cover — The Secure Agentic Compute Platform for Healthcare
  WhyNowMagicAgentSlide,     // 2. Why now — The Magic Agent has arrived
  TheTrapSlide,              // 3. The trap — the most regulated behaviors on earth
  FailureNarrativeSlide,     // 4. How it breaks — It's 2AM. No one is on the line. (CENTERPIECE)
  CostOfFailureSlide,        // 5. The cost of failure — Four regimes. Each with teeth.

  // ── The resolution (problem → platform) ──
  KernelReframeSlide,        // 6. The opportunity — Prompts aren't a boundary. Kernels are.
  AutonomyStackSlide,        // 7. The platform — Unicity: the secure AI compute platform
  DeploymentModelHtmlSlide,  // 8. Deployment — Runs inside your infrastructure
  WhyDifferentSlide,         // 9. Why we're different — securely, efficiently, provably
  EfficiencyPayoffSlide,     // 10. The payoff — Now you can actually deploy it
  ComplianceConsoleSlide,    // 11. The console — One pane of glass. Every regulated action.

  // ── The close ──
  WhoWeAreSlide,             // 12. Team — Built by infrastructure veterans
  ContactSlide,              // 13. CTA — See an agent hit a regulated boundary — and get stopped

  // ── APPENDIX — additional use cases ──
  UseCasesAppendixSlide,     // Appendix divider — Additional Use Cases
  ShadowAISlide,             // Agent Sprawl & Shadow AI
  DLPSlide,                  // PHI Exfiltration Prevention
  RunawayComputeSlide,       // Cost Control
  IntelligentRoutingSlide,   // Intelligent Routing

  // ── TECHNICAL APPENDIX — Kernel & Security deep-dives ──
  TechnicalAppendixDividerSlide, // Technical Appendix divider
  AstridSlide,               // AOS: The Kernel
  AstridComparisonSlide,     // Why AOS — comparison table
  AstridUseCasesSlide,       // Swap a Capsule. Change Everything.
  InterceptFabricSlide,      // Semantic Intercept Fabric
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

  const CurrentSlideComponent = slides[currentSlide] as React.ComponentType<{
    onNext?: () => void;
    goToSlide?: (index: number) => void;
  }>;

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
      <CurrentSlideComponent onNext={() => { goToSlide(currentSlide + 1); }} goToSlide={goToSlide} />
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
