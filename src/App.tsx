import { useEffect, useCallback, useState } from 'react';
import './sphereInit'; // Start SDK initialization eagerly on page load
import { CoverSlide } from './slides/CoverSlide';
import { ProblemSlide } from './slides/ProblemSlide';
import { AutonomyStackSlide } from './slides/AutonomyStackSlide';
import { AstridSlide } from './slides/AstridSlide';
import { AstridComparisonSlide } from './slides/AstridComparisonSlide';
import { InterceptFabricSlide } from './slides/InterceptFabricSlide';
import { AstridUseCasesSlide } from './slides/AstridUseCasesSlide';
import { AgentsSlide } from './slides/AgentsSlide';
import { BlockchainArchSlide } from './slides/BlockchainArchSlide';
import { ZKOracleSlide } from './slides/ZKOracleSlide';
import { PermissionlessSlide } from './slides/PermissionlessSlide';
import { SettlementSlide } from './slides/SettlementSlide';
import { AgentsSmartContractsSlide } from './slides/AgentsSmartContractsSlide';
import { DeploymentModelHtmlSlide } from './slides/DeploymentModelHtmlSlide';
import { ChainAgnosticSlide } from './slides/ChainAgnosticSlide';
import { CompetitiveLandscapeSlide } from './slides/CompetitiveLandscapeSlide';
import { CompetitionSlide } from './slides/CompetitionSlide';
import { ThankYouChatSlide } from './slides/ThankYouChatSlide';
import { KernelDividerSlide, BlockchainDividerSlide } from './slides/SectionDividerSlide';
import { SlideNavigation } from './components/SlideNavigation';

const slides = [
  // ── Act I — Why new infra ──
  CoverSlide,                  // 1. Cover — Technology Overview
  ProblemSlide,                // 2. The Fourth Rebuild
  AutonomyStackSlide,          // 3. The Protocol Stack (OS + Blockchain)
  DeploymentModelHtmlSlide,    // 4. Deployment inside enterprise infra

  // ── Act II — The OS ──
  KernelDividerSlide,          // 5. Divider — THE OPERATING SYSTEM
  AstridSlide,                 // 6. AOS kernel intro
  AstridComparisonSlide,       // 7. Why AOS vs alternatives
  AstridUseCasesSlide,         // 8. Swap Capsule — capsule arch in action
  InterceptFabricSlide,        // 9. Security fabric / policy interception

  // ── Act III — The Blockchain ──
  BlockchainDividerSlide,      // 10. Divider — THE BLOCKCHAIN
  AgentsSlide,                 // 11. Why a purpose-built L1
  BlockchainArchSlide,         // 12. Protocol stack
  ZKOracleSlide,               // 13. ZK Oracle
  PermissionlessSlide,         // 14. Hierarchical scaling
  SettlementSlide,             // 15. Settlement / state finality
  AgentsSmartContractsSlide,   // 16. Agents-as-smart-contracts

  // ── Act IV — Differentiation ──
  ChainAgnosticSlide,          // 15. Chain-agnostic operations
  CompetitiveLandscapeSlide,   // 16. OS, not chain. Private state.
  CompetitionSlide,            // 17. Architectural arc / why it is different

  ThankYouChatSlide,           // 18. Thank you
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
