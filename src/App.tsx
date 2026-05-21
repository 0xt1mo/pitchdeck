import { useEffect, useCallback, useState } from 'react';
import './sphereInit'; // Start SDK initialization eagerly on page load
import { IntroSlide } from './slides/IntroSlide';
import { CoverSlide } from './slides/CoverSlide';
import { PromiseSlide } from './slides/PromiseSlide';
import { SharedLedgerSlide } from './slides/SharedLedgerSlide';
import { AgentsSlide } from './slides/AgentsSlide';
import { EdgePayoffSlide } from './slides/EdgePayoffSlide';
import { UnbundledPayoffSlide } from './slides/UnbundledPayoffSlide';
import { RetrofitSlide } from './slides/RetrofitSlide';
import { CompetitionSlide } from './slides/CompetitionSlide';
import { MarketSlide } from './slides/MarketSlide';
import { ResourcesSlide } from './slides/ResourcesSlide';
import { ProblemSlide } from './slides/ProblemSlide';
import { AutonomyStackSlide } from './slides/AutonomyStackSlide';
import { CompleteAutonomyStackSlide } from './slides/CompleteAutonomyStackSlide';
import { SolutionIntroSlide } from './slides/SolutionIntroSlide';
import { ArchitectureStackSlide } from './slides/ArchitectureStackSlide';
import { CompetitiveLandscapeSlide } from './slides/CompetitiveLandscapeSlide';
import { SecurityNetworkSlide } from './slides/SecurityNetworkSlide';
import { UseCasesSlide } from './slides/UseCasesSlide';
import { SemanticFirewallSlide } from './slides/SemanticFirewallSlide';
import { IndirectInjectionSlide } from './slides/IndirectInjectionSlide';
import { ShadowAISlide } from './slides/ShadowAISlide';
import { DLPSlide } from './slides/DLPSlide';
import { RunawayComputeSlide } from './slides/RunawayComputeSlide';
import { IntelligentRoutingSlide } from './slides/IntelligentRoutingSlide';
import { AgentSphereDashboardSlide } from './slides/AgentSphereDashboardSlide';
import { AgentSprawlSlide } from './slides/AgentSprawlSlide';
import { WedgeSlide } from './slides/WedgeSlide';
import { ProtocolSlide } from './slides/ProtocolSlide';
import { GoToMarketSlide } from './slides/GoToMarketSlide';
import { ProjectionsSlide } from './slides/ProjectionsSlide';
import { TokenSlide } from './slides/TokenSlide';
import { BusinessModelSlide } from './slides/BusinessModelSlide';
import { IntellectualArcSlide } from './slides/IntellectualArcSlide';
import { AppendixDividerSlide } from './slides/AppendixDividerSlide';
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
import { CompetitionMinimalSlide } from './slides/CompetitionMinimalSlide';
import { EnterpriseDeploymentSlide } from './slides/EnterpriseDeploymentSlide';
import { WhoWeAreSlide } from './slides/WhoWeAreSlide';
import { ContactSlide } from './slides/ContactSlide';
import { SlideNavigation } from './components/SlideNavigation';

const slides = [
  CoverSlide,                // 1. Cover — Unicity X CyberKnight
  ProblemSlide,              // 2. The Fourth Rebuild of Compute
  MarketSlide,               // 3. Market Opportunity
  AutonomyStackSlide,        // 4. The Secure AI Compute Platform
  AstridSlide,               // 5. AOS Kernel Architecture
  CompetitionMinimalSlide,   // 6. Competition — Everyone else watches the agent
  SemanticFirewallSlide,     // 7. The Semantic Firewall
  EnterpriseDeploymentSlide, // 8. Enterprise Deployment — Inside the Firewall
  UseCasesSlide,             // 9. Enterprise Case Studies (index)
  ShadowAISlide,             // 10. Agent Sprawl & Shadow AI
  DLPSlide,                  // 11. Data Loss Prevention
  RunawayComputeSlide,       // 12. Cost Control
  IntelligentRoutingSlide,   // 13. Intelligent Routing
  WhoWeAreSlide,             // 14. Who We Are (globe + clients)
  ContactSlide,              // 15. See It In Action — Contact
  ThankYouChatSlide,         // 16. Thank You
  // ── Hidden ──
  // IntroSlide,             // Autonomous AI needs an internet built for machines
  // SolutionIntroSlide,     // Unicity OS: A Secure OS for AI Agents
  // CompleteAutonomyStackSlide, // The First Complete Stack Built For Machines
  // GoToMarketSlide,        // Beachhead: The UAE
  // TeamSlide,              // Founders Who've Done This Before (replaced by WhoWeAreSlide)
  // ArchitectureStackSlide, // The Secure OS for Agents
  // AgentsSlide,            // The Unicity L1
  // EdgePayoffSlide,        // What This Unlocks
  // CompetitiveLandscapeSlide, // We're Betting on a Different Architecture
  // WedgeSlide,             // Wedge content folded into UseCasesSlide
  // SecurityNetworkSlide,   // Zero Trust Enterprise Network
  // ProtocolSlide,          // x402 Live Demo
  // AgentSprawlSlide,       // Case Study: Agent Sprawl
  // ThePathSlide,           // Current Status and How We Win
  // RaiseSlide,             // From Mainnet Launch to Initial Scale
  // IndirectInjectionSlide, // Stopping the Indirect Injection
  // UnbundledPayoffSlide,   // merged Unbundling + Unlocks attempt
  // ProjectionsSlide,       // The World If We Win
  // BusinessModelSlide,     // Business Model — Four Surfaces. One Platform.
  // ResourcesSlide,         // Essential Resources
  // ── Appendix — all hidden ──
  // AppendixDividerSlide,    // hidden — Appendix · Technology section break
  // CompetitionSlide,        // hidden — Competition / architectural arc
  // SharedLedgerSlide,       // hidden — Every blockchain from Bitcoin to MegaETH is the same 17-year-old design
  // IntellectualArcSlide,    // hidden — Unbundling what the network has to do
  // PromiseSlide,            // hidden — Satoshi: Peer-to-Peer Electronic Cash
  // BlockchainArchSlide,     // hidden — Protocol Stack
  // ZKOracleSlide,           // hidden — ZK Oracle
  // PermissionlessSlide,     // hidden — Hierarchical Scaling
  // SettlementSlide,         // hidden — Settlement
  // ChainAgnosticSlide,      // hidden — Chain-Agnostic Operations
  // AgentsSmartContractsSlide, // hidden — Agents-as-Smart-Contracts
  // TokenSlide,              // hidden — Tokenomics
  // AstridComparisonSlide,   // hidden — Why AOS
  // AstridUseCasesSlide,     // hidden — Swap Capsule
  // InterceptFabricSlide,    // hidden — Security Fabric
  // AgentSphereDashboardSlide, // hidden — original 4-pillar enterprise dashboard
  // RetrofitSlide,           // hidden — You Can't Retrofit an EVM into Autonomous AI
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
