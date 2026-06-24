import { useEffect, useCallback, useState } from 'react';
import './sphereInit'; // Start SDK initialization eagerly on page load
import { IntroSlide } from './slides/IntroSlide';
import { CoverSlide } from './slides/CoverSlide';
import { GregOpportunitySlide, GregGapSlide, GregIdentitySlide, GregTeamSlide, GregAskSlide } from './slides/GregSlides';
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
  CoverSlide,                // 1. Cover — Securing the Agentic Economy (prepared for Greg Kidd)
  GregOpportunitySlide,      // 2. The machines have started paying each other (57.5%)
  SharedLedgerSlide,         // 3. The shared-ledger bottleneck
  StateOfArtSlide,           // 4. The stablecoin trilemma
  GregGapSlide,              // 5. Fair access — the third problem (the Greg hook)
  GregIdentitySlide,         // 6. From side-car to protocol (GlobaliD -> USBC)
  BearerObjectSlide,         // 7. Tokens as bearer objects
  AgentsSlide,               // 8. The chain only generates proofs (architecture)
  MonolithSlide,             // 9. Proves uniqueness; the rest off-chain
  ComplianceSlide,           // 10. Protocol-enforced compliance — the receive predicate
  PrivacySlide,              // 11. Privacy by construction
  NoBridgeRiskSlide,         // 12. No bridge, nothing to hack
  CoreOperationSlide,        // 13. The core operation — the atomic swap
  AtomicSwapsSlide,          // 14. HTLC vs predicate swap
  ProtocolSlide,             // 15. x402 — twelve steps to five
  ClobComparisonSlide,       // 16. The machine market — CEX speed, DEX custody, private
  AgenticDACSlide,           // 17. What gets built — the agentic corporation
  CompetitionSlide,          // 18. The incumbents validate the diagnosis
  ProofPapersSlide,          // 19. The proof — the math
  GregTeamSlide,             // 20. The team — we built this before
  GregAskSlide,              // 21. The ask — $5M
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
