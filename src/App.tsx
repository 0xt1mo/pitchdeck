import { useEffect, useCallback, useState } from 'react';
import './sphereInit'; // Start SDK initialization eagerly on page load
import { IntroSlide } from './slides/IntroSlide';
import { PromiseSlide } from './slides/PromiseSlide';
import { SharedLedgerSlide } from './slides/SharedLedgerSlide';
import { AgentsSlide } from './slides/AgentsSlide';
import { EdgePayoffSlide } from './slides/EdgePayoffSlide';
import { RetrofitSlide } from './slides/RetrofitSlide';
import { CompetitionSlide } from './slides/CompetitionSlide';
import { MarketSlide } from './slides/MarketSlide';
import { ResourcesSlide } from './slides/ResourcesSlide';
import { ProblemSlide } from './slides/ProblemSlide';
import { AutonomyStackSlide } from './slides/AutonomyStackSlide';
import { AgentSphereDashboardSlide } from './slides/AgentSphereDashboardSlide';
import { ProtocolSlide } from './slides/ProtocolSlide';
import { GoToMarketSlide } from './slides/GoToMarketSlide';
import { ProjectionsSlide } from './slides/ProjectionsSlide';
import { TokenSlide } from './slides/TokenSlide';
import { ThePathSlide } from './slides/ThePathSlide';
import { TeamSlide } from './slides/TeamSlide';
import { RaiseSlide } from './slides/RaiseSlide';
import { ThankYouChatSlide } from './slides/ThankYouChatSlide';
import { AppendixSlide } from './slides/AppendixSlide';
import { KernelDividerSlide, BlockchainDividerSlide, ProductDividerSlide } from './slides/SectionDividerSlide';
import { AstridSlide } from './slides/AstridSlide';
import { AstridComparisonSlide } from './slides/AstridComparisonSlide';
import { AstridUseCasesSlide } from './slides/AstridUseCasesSlide';
import { BlockchainArchSlide } from './slides/BlockchainArchSlide';
import { ZKOracleSlide } from './slides/ZKOracleSlide';
import { PermissionlessSlide } from './slides/PermissionlessSlide';
import { SettlementSlide } from './slides/SettlementSlide';
import { AgentsSmartContractsSlide } from './slides/AgentsSmartContractsSlide';
import { ChainAgnosticSlide } from './slides/ChainAgnosticSlide';
import { DemoSlide } from './slides/DemoSlide';
import { InterceptFabricSlide } from './slides/InterceptFabricSlide';
import { SlideNavigation } from './components/SlideNavigation';

const slides = [
  IntroSlide,              // 1. Cover
  PromiseSlide,            // 2. Satoshi: Peer-to-Peer Electronic Cash
  SharedLedgerSlide,       // 3. Every blockchain since Bitcoin is the same 17-year-old design
  ProblemSlide,            // 4. What Autonomy Demands
  TeamSlide,               // 5. Founders — we've assembled the team to build it
  AgentsSlide,             // 6. Validation at the Edge
  EdgePayoffSlide,         // 7. What Validation Unlocks
  AutonomyStackSlide,      // 8. Operating System for AI
  ProtocolSlide,           // 9. Scaling x402/MPP — The Message Is the Settlement
  MarketSlide,             // 10. Market Opportunity — Autonomous AI is Exponential
  // ProjectionsSlide,     // The World If We Win — hidden
  CompetitionSlide,        // 11. Why Us — Competitive Landscape
  GoToMarketSlide,         // 12. Beachhead: The UAE
  ThePathSlide,            // 13. Current Status and How We Win
  TokenSlide,              // 14. Tokenomics
  RaiseSlide,              // 15. Pre-Series A Raise
  ResourcesSlide,          // 17. Resources
  ThankYouChatSlide,       // 18. Thank You
  // ── 19+ Appendix — technical deep-dives ──
  BlockchainArchSlide,     // Protocol Stack
  ZKOracleSlide,           // ZK Oracle
  PermissionlessSlide,     // Hierarchical Scaling
  SettlementSlide,         // Settlement
  ChainAgnosticSlide,      // Chain-Agnostic Operations
  AgentsSmartContractsSlide, // Agents-as-Smart-Contracts
  AstridSlide,             // AOS9 kernel
  AstridComparisonSlide,   // Why AOS9
  AstridUseCasesSlide,     // Swap Capsule
  InterceptFabricSlide,    // Security Fabric
  AgentSphereDashboardSlide, // Enterprise console dashboards
  RetrofitSlide,           // "Wrong Substrate" — every patch in crypto is a hack
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
