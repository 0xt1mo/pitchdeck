import { useEffect, useCallback, useState } from 'react';
import './sphereInit'; // Start SDK initialization eagerly on page load
import { IntroSlide } from './slides/IntroSlide';
import { CoverSlide } from './slides/CoverSlide';
import { PromiseSlide } from './slides/PromiseSlide';
import { SharedLedgerSlide } from './slides/SharedLedgerSlide';
import { AtomOfFinanceSlide } from './slides/AtomOfFinanceSlide';
import { DesignCriteriaSlide } from './slides/DesignCriteriaSlide';
import { StateOfArtSlide } from './slides/StateOfArtSlide';
import { BearerObjectSlide } from './slides/BearerObjectSlide';
import { EdgeModelSlide } from './slides/EdgeModelSlide';
import { ProofPapersSlide } from './slides/ProofPapersSlide';
import { NoBridgeRiskSlide } from './slides/NoBridgeRiskSlide';
import { MonolithSlide } from './slides/MonolithSlide';
import { ChainOneThingSlide } from './slides/ChainOneThingSlide';
import { TradeOffSlide } from './slides/TradeOffSlide';
import { CoreOperationSlide } from './slides/CoreOperationSlide';
import { DeFiDividerSlide } from './slides/DeFiDividerSlide';
import { AtomicityChallengeSlide } from './slides/AtomicityChallengeSlide';
import { IntroducingUnicityDivider, TradeoffsDivider, AtomicityProblemDivider, MathWorthItDivider, NewFinancialSystemDivider, EmissionDivider } from './slides/SectionDividers';
import { ProgrammableTokensSlide } from './slides/ProgrammableTokensSlide';
import { SpeedSlide, ThroughputSlide, PrivacySlide } from './slides/AxisTradeoffSlides';
import { NoTransactionsSlide } from './slides/NoTransactionsSlide';
import { GenesisMintSlide } from './slides/GenesisMintSlide';
import { NativeAssetMintSlide } from './slides/NativeAssetMintSlide';
import { MintFromChainsSlide } from './slides/MintFromChainsSlide';
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
import { AgenticDeFiSlide } from './slides/AgenticDeFiSlide';
import { AutonomousCorpsSlide } from './slides/AutonomousCorpsSlide';
import { ChainAgnosticSlide } from './slides/ChainAgnosticSlide';
import { DemoSlide } from './slides/DemoSlide';
import { InterceptFabricSlide } from './slides/InterceptFabricSlide';
import { SlideNavigation } from './components/SlideNavigation';

const slides = [
  // ── Problem ──
  CoverSlide,                // 1. Cover — Rebuilding the Foundations of Decentralized Finance
  PromiseSlide,              // 2. Satoshi: P2P Electronic Cash — every chain since strayed to ledgers
  SharedLedgerSlide,         // 3. The Industry — every blockchain is the same 17-year-old shared-ledger design
  StateOfArtSlide,           // 4. The Trilemma — Unicity claims the center
  // ── Introducing Unicity ──
  IntroducingUnicityDivider, // 5. Divider — Introducing Unicity
  BearerObjectSlide,         // 6. Tokens as Bearer Objects
  ProgrammableTokensSlide,   // 7. Tokens are programmable (predicates)
  AgentsSlide,               // 8. Unicity L1 — a chain that only generates proofs (architecture)
  MonolithSlide,             // 9. Historically, blockchains did four things. Unicity does one.
  ChainOneThingSlide,        // 10. The edge does the rest — unlimited parallelism
  CompetitionSlide,          // 11. The Inevitable Endpoint for Blockchain
  ProofPapersSlide,          // 12. Here's the Math — three formal papers
  NoTransactionsSlide,       // 13. A blockchain with no transactions — 3 layers + core idea
  // ── Tradeoffs ──
  TradeoffsDivider,          // 13. Divider — What are the Tradeoffs
  SettlementSlide,           // 14. Speed — Settlement at machine speed (transaction sequence diagram)
  ThroughputSlide,           // 15. Throughput / Friction
  PrivacySlide,              // 16. Privacy
  NoBridgeRiskSlide,         // 17. Trustless Bridges: Local Verifiability — Unicity SOL
  // ── Building DeFi ──
  AtomicityProblemDivider,   // 18. One Hard Problem: Atomicity (the hard problem from the tradeoffs divider)
  CoreOperationSlide,        // 19. The Core Operation of DeFi — the atomic swap
  AtomicSwapsSlide,          // 20. The Unicity Trustless Atomic Swap — HTLC vs predicate swap
  DeFiDividerSlide,          // 21. Divider — What can you build? (composable protocols, leads into examples)
  // AgentsSmartContractsSlide, // (hidden — Agents: the new smart contracts; re-add later)
  ClobComparisonSlide,       // 22. CEX speed · DEX custody · dark-pool privacy (Unicity CLOB)
  AgenticDeFiSlide,          // 24. Agentic DeFi — an economy of machines (agent mesh)
  // AutonomousCorpsSlide,   // (hidden — Decentralized Autonomous Corporations / autonomous reinsurance; re-add later)
  MathWorthItDivider,        // 25. The math is harder. But it's worth it.
  NewFinancialSystemDivider, // 26. What you get: massively parallel · private · decentralized
  // ── Emission ──
  EmissionDivider,           // 22. Divider — Emission (tokenomics)
  GenesisMintSlide,          // 23. Genesis: minting a token off-chain (3 facts → genesis token)
  NativeAssetMintSlide,      // 24. Anyone can mint. Trivially. (native non-currency assets)
  MintFromChainsSlide,       // 25. Minting from other chains (Unicity SOL — cross-chain, no bridge)
  // ── Close ──
  ResourcesSlide,            // 23. Resources
  ThankYouChatSlide,         // 24. Thank You
  // ── Hidden ──
  // TradeOffSlide,         // The Trade — give up / get (replaced by Speed/Throughput/Privacy)
  // AtomicityChallengeSlide, // merged into CoreOperationSlide header
  // EdgeModelSlide, AtomOfFinanceSlide, DesignCriteriaSlide, EdgePayoffSlide, ProtocolSlide,
  // IntroSlide, ProblemSlide, AutonomyStackSlide, TeamSlide, CompetitiveLandscapeSlide,
  // UseCasesSlide, MarketSlide, GoToMarketSlide, ThePathSlide, RaiseSlide — older slides
  // ── Appendix — technical deep-dives (all hidden) ──
  // AppendixDividerSlide,    // Appendix · Technology — section break
  // IntellectualArcSlide,    // Unbundling what the network has to do
  // BlockchainArchSlide,     // Protocol Stack
  // ZKOracleSlide,           // ZK Oracle
  // PermissionlessSlide,     // Hierarchical Scaling
  // SettlementSlide,         // Settlement
  // ChainAgnosticSlide,      // Chain-Agnostic Operations
  // AgentsSmartContractsSlide, // Agents-as-Smart-Contracts
  // TokenSlide,              // Tokenomics
  // AstridSlide,             // AOS kernel
  // AstridComparisonSlide,   // Why AOS
  // AstridUseCasesSlide,     // Swap Capsule
  // InterceptFabricSlide,    // Security Fabric
  // AgentSphereDashboardSlide, // original 4-pillar enterprise dashboard
  // RetrofitSlide,           // You Can't Retrofit an EVM into Autonomous AI
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
