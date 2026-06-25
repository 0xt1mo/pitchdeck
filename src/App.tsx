import { useEffect, useCallback, useState } from 'react';
import './sphereInit'; // Start SDK initialization eagerly on page load
import { IntroSlide } from './slides/IntroSlide';
import { CoverSlide } from './slides/CoverSlide';
import { PadraShiftSlide, PadraDangerSlide, PadraAnswerSlide, PadraPolicySlide, PadraWhyUnicitySlide, PadraProposeDividerSlide, PadraOverviewSlide, PadraModule1Slide, PadraModule2Slide, PadraModule3Slide, PadraModule4Slide, PadraModule5Slide, PadraDemoSlide, PadraAskSlide } from './slides/PadraDeck';
import { WhoWeAreSlide } from './slides/WhoWeAreSlide';
import { GregShiftSlide, GregBottleneckSlide, GregTrilemmaSlide, GregGapSlide, GregSidecarSlide, GregBearerSlide, GregOracleSlide, GregArchitectureSlide, GregReceiveSlide, GregPrivacySlide, GregNoBridgeSlide, GregSwapSlide, GregX402Slide, GregMarketSlide, GregDACSlide, GregIncumbentsSlide, GregTeamSlide, GregAskSlide } from './slides/GregDeck';
import { DemoAgendaSlide } from './slides/DemoAgendaSlide';
// import { PromiseSlide } from './slides/PromiseSlide'; // hidden
import { SharedLedgerSlide } from './slides/SharedLedgerSlide';
import { AtomOfFinanceSlide } from './slides/AtomOfFinanceSlide';
import { DesignCriteriaSlide } from './slides/DesignCriteriaSlide';
import { StateOfArtSlide } from './slides/StateOfArtSlide';
import { BearerObjectSlide } from './slides/BearerObjectSlide';
import { EdgeModelSlide } from './slides/EdgeModelSlide';
import { ProofPapersSlide } from './slides/ProofPapersSlide';
import { TokenObjectSlide } from './slides/TokenObjectSlide';
import { NoBridgeRiskSlide } from './slides/NoBridgeRiskSlide';
import { MonolithSlide } from './slides/MonolithSlide';
// import { ChainOneThingSlide } from './slides/ChainOneThingSlide'; // merged into MonolithSlide
import { TradeOffSlide } from './slides/TradeOffSlide';
import { CoreOperationSlide } from './slides/CoreOperationSlide';
// import { DeFiDividerSlide } from './slides/DeFiDividerSlide'; // hidden
import { AtomicityChallengeSlide } from './slides/AtomicityChallengeSlide';
import { TradeoffsDivider, AtomicityProblemDivider, MathWorthItDivider, NewFinancialSystemDivider } from './slides/SectionDividers';
import { ProgrammableTokensSlide } from './slides/ProgrammableTokensSlide';
import { SpeedSlide, ThroughputSlide, PrivacySlide } from './slides/AxisTradeoffSlides';
import { ComplianceSlide } from './slides/ComplianceSlide';
import { CompliantByConstructionSlide } from './slides/CompliantByConstructionSlide';
// import { NoTransactionsSlide } from './slides/NoTransactionsSlide'; // hidden
// import { GenesisMintSlide } from './slides/GenesisMintSlide'; // hidden — emission
// import { NativeAssetMintSlide } from './slides/NativeAssetMintSlide'; // hidden — emission
// import { MintFromChainsSlide } from './slides/MintFromChainsSlide'; // hidden — emission
import { AtomicSwapsSlide } from './slides/AtomicSwapsSlide';
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
import { AgentSphereDashboardSlide } from './slides/AgentSphereDashboardSlide';
import { AgentSprawlSlide } from './slides/AgentSprawlSlide';
import { WedgeSlide } from './slides/WedgeSlide';
import { ProtocolSlide } from './slides/ProtocolSlide';
import { AgenticDACSlide } from './slides/AgenticDACSlide';
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
import { ClobComparisonSlide } from './slides/ClobComparisonSlide';
// import { AgenticDeFiSlide } from './slides/AgenticDeFiSlide'; // hidden — duplicate
import { AutonomousCorpsSlide } from './slides/AutonomousCorpsSlide';
import { ChainAgnosticSlide } from './slides/ChainAgnosticSlide';
import { DemoSlide } from './slides/DemoSlide';
import { InterceptFabricSlide } from './slides/InterceptFabricSlide';
import { SlideNavigation } from './components/SlideNavigation';

const slides = [
  // ── SECTION I · THE PITCH ──
  CoverSlide,                  // 1 · Agents that act. Under control.
  PadraShiftSlide,             // 2 · the patient journey is going agentic
  PadraDangerSlide,            // 3 · the moment an agent acts, it's a liability
  PadraAnswerSlide,            // 4 · Unicity sits between the agent and the systems
  PadraPolicySlide,            // 5 · collect the photo, never the diagnosis
  PadraWhyUnicitySlide,        // 6 · fifteen years of sovereign-grade cryptography
  // ── SECTION II · WHAT WE PROPOSE ──
  PadraProposeDividerSlide,    // 7 · divider
  PadraOverviewSlide,          // 8 · the full call center in five modules
  PadraModule1Slide,           // 9 · Module 1 — Acquisition
  PadraModule2Slide,           // 10 · Module 2 — Consultation & Booking
  PadraModule3Slide,           // 11 · Module 3 — Outbound Voicebot
  PadraModule4Slide,           // 12 · Module 4 — Aftercare
  PadraModule5Slide,           // 13 · Module 5 — Quality Assurance
  PadraDemoSlide,              // 14 · start with Module 1, in 45 days
  // ── CLOSE ──
  WhoWeAreSlide,               // 15 · team (Mike, Tony, Alan)
  PadraAskSlide,               // 16 · the ask
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
