import { useEffect, useCallback, useState } from 'react';
import './sphereInit'; // Start SDK initialization eagerly on page load
import { TitleSlide } from './slides/TitleSlide';
import { IntroSlide } from './slides/IntroSlide';
import { TeamSlide } from './slides/TeamSlide';
import { ProblemSlide } from './slides/ProblemSlide';
import { SolutionSlide } from './slides/SolutionSlide';
import { ParadigmOverviewSlide } from './slides/ParadigmOverviewSlide';
import { MarketSlide } from './slides/MarketSlide';
import { RaiseSlide } from './slides/RaiseSlide';
import { AppendixSlide } from './slides/AppendixSlide';
import { ProtocolSlide } from './slides/ProtocolSlide';
import { WhyDecentralizedSlide } from './slides/WhyDecentralizedSlide';
import { ResourcesSlide } from './slides/ResourcesSlide';
import { AgentsSlide } from './slides/AgentsSlide';
import { ThankYouChatSlide } from './slides/ThankYouChatSlide';
import { WalletSlide } from './slides/WalletSlide';
import { SecurityNetworkSlide } from './slides/SecurityNetworkSlide';
import { KernelDividerSlide, SecurityDividerSlide, BlockchainDividerSlide } from './slides/SectionDividerSlide';
import { AstridSlide } from './slides/AstridSlide';
import { AstridComparisonSlide } from './slides/AstridComparisonSlide';
import { AstridUseCasesSlide } from './slides/AstridUseCasesSlide';
import { BlockchainArchSlide } from './slides/BlockchainArchSlide';
import { RoadmapSlide } from './slides/RoadmapSlide';
import { ProjectionsSlide } from './slides/ProjectionsSlide';
import { CompetitionSlide } from './slides/CompetitionSlide';
import { TokenSlide } from './slides/TokenSlide';
import { InterceptFabricSlide } from './slides/InterceptFabricSlide';
import { SIFDashboardSlide } from './slides/SIFDashboardSlide';
import { WhyUnicityProductSlide } from './slides/WhyUnicityProductSlide';
import { SlideNavigation } from './components/SlideNavigation';

const slides = [
  TitleSlide,              // 1. Cover
  IntroSlide,              // 2. Thesis — agents are coming
  ProblemSlide,            // 3. What autonomy actually requires
  SolutionSlide,           // 4. The complete autonomy stack
  WalletSlide,             // 5. P2P settlement is the unlock
  AgentsSlide,             // 6. The magic sauce — agents as smart contracts
  WhyUnicityProductSlide,  // 7. Security is the wedge, network is the moat
  WhyDecentralizedSlide,   // 8. Why decentralized. Why Unicity.
  ProtocolSlide,           // 9. Scaling agentic payments
  CompetitionSlide,        // 10. Why us / competition
  ProjectionsSlide,        // 11. Projections
  RoadmapSlide,            // 12. Roadmap
  TeamSlide,               // 13. The people
  MarketSlide,             // 14. Market opportunity
  TokenSlide,              // 15. Tokenomics
  RaiseSlide,              // 16. The raise
  ResourcesSlide,          // 17. Resources
  ThankYouChatSlide,       // 18. Thank you
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
