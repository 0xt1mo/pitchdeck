import { useEffect, useCallback, useState } from 'react';
import './sphereInit'; // Start SDK initialization eagerly on page load
// import { IntroSlide } from './slides/IntroSlide'; // hidden
import { CoverSlide } from './slides/CoverSlide';
import { PromiseSlide } from './slides/PromiseSlide';
import { SharedLedgerSlide } from './slides/SharedLedgerSlide';
import { AgentsSlide } from './slides/AgentsSlide';
// import { EdgePayoffSlide } from './slides/EdgePayoffSlide'; // hidden — appendix
import { UnbundledPayoffSlide } from './slides/UnbundledPayoffSlide';
import { RetrofitSlide } from './slides/RetrofitSlide';
// import { CompetitionSlide } from './slides/CompetitionSlide'; // hidden — appendix
import { MarketSlide } from './slides/MarketSlide';
import { BusinessModelPricingSlide } from './slides/BusinessModelPricingSlide';
import { CompetitionMinimalSlide } from './slides/CompetitionMinimalSlide';
import { DefensibilitySlide } from './slides/DefensibilitySlide';
import { ResourcesSlide } from './slides/ResourcesSlide';
import { ProblemSlide } from './slides/ProblemSlide';
import { AutonomyStackSlide } from './slides/AutonomyStackSlide';
import { CompleteAutonomyStackSlide } from './slides/CompleteAutonomyStackSlide';
import { SolutionIntroSlide } from './slides/SolutionIntroSlide';
import { ArchitectureStackSlide } from './slides/ArchitectureStackSlide';
// import { CompetitiveLandscapeSlide } from './slides/CompetitiveLandscapeSlide'; // hidden — appendix
import { SecurityNetworkSlide } from './slides/SecurityNetworkSlide';
import { UseCasesSlide } from './slides/UseCasesSlide';
import { AgentSphereDashboardSlide } from './slides/AgentSphereDashboardSlide';
import { AgentSprawlSlide } from './slides/AgentSprawlSlide';
import { WedgeSlide } from './slides/WedgeSlide';
import { ProtocolSlide } from './slides/ProtocolSlide';
import { ConciergeSlide } from './slides/ConciergeSlide';
import { ShadowAISlide } from './slides/ShadowAISlide';
import { DLPSlide } from './slides/DLPSlide';
import { RunawayComputeSlide } from './slides/RunawayComputeSlide';
import { IntelligentRoutingSlide } from './slides/IntelligentRoutingSlide';
import { GoToMarketSlide } from './slides/GoToMarketSlide';
import { ProjectionsSlide } from './slides/ProjectionsSlide';
import { TokenSlide } from './slides/TokenSlide';
import { BusinessModelSlide } from './slides/BusinessModelSlide';
import { IntellectualArcSlide } from './slides/IntellectualArcSlide';
// import { AppendixDividerSlide } from './slides/AppendixDividerSlide'; // hidden — appendix
import { ThePathSlide } from './slides/ThePathSlide';
import { TeamSlide } from './slides/TeamSlide';
import { RaiseSlide } from './slides/RaiseSlide';
import { InvestmentSlide } from './slides/InvestmentSlide';
import { ThankYouChatSlide } from './slides/ThankYouChatSlide';
import { AppendixSlide } from './slides/AppendixSlide';
import { KernelDividerSlide, BlockchainDividerSlide, ProductDividerSlide } from './slides/SectionDividerSlide';
// import { AstridSlide } from './slides/AstridSlide'; // hidden — appendix
// import { AstridComparisonSlide } from './slides/AstridComparisonSlide'; // hidden — appendix
// import { AstridUseCasesSlide } from './slides/AstridUseCasesSlide'; // hidden — appendix
// import { BlockchainArchSlide } from './slides/BlockchainArchSlide'; // hidden — appendix
// import { ZKOracleSlide } from './slides/ZKOracleSlide'; // hidden — appendix
// import { PermissionlessSlide } from './slides/PermissionlessSlide'; // hidden — appendix
// import { SettlementSlide } from './slides/SettlementSlide'; // hidden — appendix
// import { AgentsSmartContractsSlide } from './slides/AgentsSmartContractsSlide'; // hidden — appendix
// import { ChainAgnosticSlide } from './slides/ChainAgnosticSlide'; // hidden — appendix
import { DemoSlide } from './slides/DemoSlide';
// import { InterceptFabricSlide } from './slides/InterceptFabricSlide'; // hidden — appendix
// import { PapersSlide } from './slides/PapersSlide'; // hidden — appendix
import { SlideNavigation } from './components/SlideNavigation';

const slides = [
  CoverSlide,              // 1. Cover — Unicity logo + Seed Round Extension
  // IntroSlide,           // hidden — Thesis — Autonomous AI needs an internet built for machines
  // ── Architecture arc (3–8) ──
  ProblemSlide,            // 3. What Autonomy Demands — The Fourth Rebuild
  // SolutionIntroSlide,   // hidden — Unicity OS: A Secure OS for AI Agents
  AutonomyStackSlide,      // 4. The Protocol Stack for the Agentic Internet
  // CompleteAutonomyStackSlide, // hidden — The First Complete Stack Built For Machines
  TeamSlide,               // 6. Founders
  // ArchitectureStackSlide, // hidden — The Secure OS for Agents
  // AgentsSlide,          // appendix — The Unicity Blockchain: Why a Purpose Built Chain
  // EdgePayoffSlide,      // appendix — What This Unlocks
  // CompetitiveLandscapeSlide, // appendix — We're Betting on a Different Architecture
  // ── Commercial arc (9–14) ──
  // WedgeSlide,           // hidden — Wedge content folded into UseCasesSlide title
  UseCasesSlide,           // 9. Land on Security. Revenue Today.
  ProtocolSlide,           // Case Study — x402 Live Demo
  ConciergeSlide,          // Case Study — Subscriber Concierge (Telco)
  MarketSlide,             // 11. Market Opportunity — trillion-dollar rebuild
  AgentsSlide,             // The Unicity Blockchain — Why A Purpose Built Chain
  CompetitionMinimalSlide, // 12. Competition — Everyone else watches the agent. We run it.
  DefensibilitySlide,      // 12b. Defensibility — patented today, verified-by-construction tomorrow
  BusinessModelPricingSlide, // 13. Business Model — Open Core / Per Agent Pricing
  GoToMarketSlide,         // 13. Beachhead: The UAE
  // SecurityNetworkSlide, // hidden — Zero Trust Enterprise Network
  // AgentSprawlSlide,     // hidden — Case Study: Agent Sprawl
  // ThePathSlide,         // hidden — Current Status and How We Win
  InvestmentSlide,         // 15. The Investment — $5M seed, Q3 2026, 18 mo runway
  TokenSlide,              // 16. Token Design and Tokenomics
  ResourcesSlide,          // 17. Resources
  ThankYouChatSlide,       // 18. Thank You
  // ── Appendix — additional use cases ──
  ShadowAISlide,           // Appendix — Agent Sprawl & Shadow AI
  DLPSlide,                // Appendix — Data Loss Prevention
  RunawayComputeSlide,     // Appendix — Cost Control / Every Agent Gets a Budget
  IntelligentRoutingSlide, // Appendix — Intelligent Routing
  // ── Appendix — technical deep-dives (hidden) ──
  // AppendixDividerSlide,    // Appendix · Technology — section break
  // CompetitionSlide,        // Competition — Why It Is Different (architectural arc)
  // CompetitiveLandscapeSlide, // We're Betting on a Different Architecture
  // EdgePayoffSlide,         // What This Unlocks
  // BlockchainArchSlide,     // Protocol Stack
  // ZKOracleSlide,           // ZK Oracle
  // PermissionlessSlide,     // Hierarchical Scaling
  // SettlementSlide,         // Settlement
  // ChainAgnosticSlide,      // Chain-Agnostic Operations
  // AgentsSmartContractsSlide, // Agents-as-Smart-Contracts
  // AstridSlide,             // AOS kernel
  // AstridComparisonSlide,   // Why AOS
  // AstridUseCasesSlide,     // Swap Capsule
  // InterceptFabricSlide,    // Security Fabric
  // PapersSlide,             // Validate — Don't Take Our Word For It (3 formal papers)
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
