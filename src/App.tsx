import { useEffect, useCallback, useState } from 'react';
import './sphereInit'; // Start SDK initialization eagerly on page load
import { IntroSlide } from './slides/IntroSlide';
import { CoverSlide } from './slides/CoverSlide';
import { GregShiftSlide, GregGapSlide, GregTrilemmaSlide, GregIncumbentsSlide, GregBearerSlide, GregOracleSlide, GregArchitectureSlide, GregReceiveSlide, GregPrivacySlide, GregNoBridgeSlide, GregSwapSlide, GregX402Slide, GregMarketSlide, GregDACSlide, GregAskSlide } from './slides/GregDeck';
import { GregAnswerSlide, GregPortfolioSlide, GregHowDividerSlide } from './slides/GregOptionB';
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
import { DeploymentModelSlide } from './slides/DeploymentModelSlide';
import { DeploymentModelHtmlSlide } from './slides/DeploymentModelHtmlSlide';
import { ConciergeSlide } from './slides/ConciergeSlide';
import { OperatorPayoffSlide } from './slides/OperatorPayoffSlide';
import { TelecomUseCasesSlide } from './slides/TelecomUseCasesSlide';
import { UseCasesAppendixSlide } from './slides/UseCasesAppendixSlide';
import { WhyDifferentSlide } from './slides/WhyDifferentSlide';
import { TelecomOpportunitySlide } from './slides/TelecomOpportunitySlide';
import { TetherOpportunitySlide } from './slides/TetherOpportunitySlide';
import { TetherWhyNowSlide } from './slides/TetherWhyNowSlide';
import { TetherMechanismSlide } from './slides/TetherMechanismSlide';
import { WhoWeAreSlide } from './slides/WhoWeAreSlide';
import { ContactSlide } from './slides/ContactSlide';
import { TetherContactSlide } from './slides/TetherContactSlide';
import { TechnicalAppendixDividerSlide } from './slides/TechnicalAppendixDividerSlide';
import { SlideNavigation } from './components/SlideNavigation';

const slides = [
  // ── THE PITCH (everything we want to say, by slide 9) ──
  CoverSlide,                // 1 · Securing the Agentic Economy (for Greg Kidd / Hard Yaka)
  GregShiftSlide,            // 2 · the macro shift — machine commerce requires machine trust
  GregGapSlide,              // 3 · two are solved, one never was — identity is the permission to act
  GregTrilemmaSlide,         // 4 · the stablecoin trilemma (protocol claim — front half per Greg)
  GregIncumbentsSlide,       // 5 · the incumbents validate the diagnosis
  GregAnswerSlide,           // 6 · the answer — identity, compliance, settlement inside the asset
  GregPortfolioSlide,        // 7 · Hard Yaka funds the infrastructure of fair access
  WhoWeAreSlide,             // 8 · the team
  GregAskSlide,              // 9 · the next step — ship the first compliant dollar
  // ── THE HOW (technical appendix — our protocol proposition) ──
  GregHowDividerSlide,       // 10 · "The How" divider
  GregBearerSlide,           // 11 · from ledger entries to bearer instruments
  GregOracleSlide,           // 12 · the uniqueness oracle
  GregArchitectureSlide,     // 13 · a minimal chain, an economy off it
  GregReceiveSlide,          // 14 · protocol-enforced compliance — the receive predicate
  GregPrivacySlide,          // 15 · privacy by construction
  GregNoBridgeSlide,         // 16 · no bridge, nothing to hack
  GregSwapSlide,             // 17 · the atomic swap
  GregX402Slide,             // 18 · x402 — twelve steps to five
  GregMarketSlide,           // 19 · the machine market
  GregDACSlide,              // 20 · the agentic corporation
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

  void isMobile; // responsive: slides now reflow on phone/tablet — no desktop gate

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
