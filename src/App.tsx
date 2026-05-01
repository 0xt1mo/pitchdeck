import { useEffect, useCallback, useState } from 'react';
import './sphereInit'; // Start SDK initialization eagerly on page load
import { IntroSlide } from './slides/IntroSlide';
import { PromiseSlide } from './slides/PromiseSlide';
import { SharedLedgerSlide } from './slides/SharedLedgerSlide';
import { AgentsSlide } from './slides/AgentsSlide';
import { RetrofitSlide } from './slides/RetrofitSlide';
import { ProblemSlide } from './slides/ProblemSlide';
import { AutonomyStackSlide } from './slides/AutonomyStackSlide';
import { ProtocolSlide } from './slides/ProtocolSlide';
import { CiscoSlide } from './slides/CiscoSlide';
import { ProjectionsSlide } from './slides/ProjectionsSlide';
import { TokenSlide } from './slides/TokenSlide';
import { RoadmapSlide } from './slides/RoadmapSlide';
import { TeamSlide } from './slides/TeamSlide';
import { RaiseSlide } from './slides/RaiseSlide';
import { ThankYouChatSlide } from './slides/ThankYouChatSlide';
import { AppendixSlide } from './slides/AppendixSlide';
import { ParadigmOverviewSlide } from './slides/ParadigmOverviewSlide';
import { SecurityNetworkSlide } from './slides/SecurityNetworkSlide';
import { KernelDividerSlide, SecurityDividerSlide, BlockchainDividerSlide } from './slides/SectionDividerSlide';
import { AstridSlide } from './slides/AstridSlide';
import { AstridComparisonSlide } from './slides/AstridComparisonSlide';
import { AstridUseCasesSlide } from './slides/AstridUseCasesSlide';
import { BlockchainArchSlide } from './slides/BlockchainArchSlide';
import { InterceptFabricSlide } from './slides/InterceptFabricSlide';
import { SIFDashboardSlide } from './slides/SIFDashboardSlide';
import { SlideNavigation } from './components/SlideNavigation';

const slides = [
  IntroSlide,              // 1. Title — Autonomous AI needs a blockchain built for machines
  PromiseSlide,            // 2. The promise — Satoshi's P2P electronic cash
  SharedLedgerSlide,       // 3. The industry — shared ledger is the bottleneck
  AgentsSlide,             // 4. The Unicity L1 — validation at the edge
  RetrofitSlide,           // 5. Competition — wrong substrate, incomplete stack
  ProblemSlide,            // 6. The problem — what autonomy actually requires
  AutonomyStackSlide,      // 7. The solution — the Unicity autonomy stack
  ProtocolSlide,           // 8. Technical proof — scaling x402/MPP
  CiscoSlide,              // 9. Go-to-market — the Cisco for the agentic internet
  ProjectionsSlide,        // 10. Protocol revenue — $600M by 2029
  TokenSlide,              // 11. Tokenomics — token model & allocation
  RoadmapSlide,            // 12. Roadmap & traction — mainnet June '26, $20M pipeline
  TeamSlide,               // 13. Team — 15 years building infra for governments
  RaiseSlide,              // 14. The raise — $12M Series A
  ThankYouChatSlide,       // 15. Thank you — KnowledgeBot
  AppendixSlide,
  KernelDividerSlide,
  AstridSlide,
  AstridComparisonSlide,
  AstridUseCasesSlide,
  SecurityDividerSlide,
  InterceptFabricSlide,
  SIFDashboardSlide,
  SecurityNetworkSlide,
  BlockchainDividerSlide,
  ParadigmOverviewSlide,
  BlockchainArchSlide,
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
