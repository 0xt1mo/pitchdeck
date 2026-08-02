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
import { TechnicalAppendixDividerSlide } from './slides/TechnicalAppendixDividerSlide';
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
import { WhoWeAreSlide } from './slides/WhoWeAreSlide';
import { ContactSlide } from './slides/ContactSlide';
// ── AOS category deck ──
import { AosCoverSlide } from './slides/AosCoverSlide';
import { CodewallCoverSlide } from './slides/CodewallCoverSlide';
import { CodewallProblemSlide } from './slides/CodewallProblemSlide';
import { AosNoOsSlide } from './slides/AosNoOsSlide';
import { AosHistorySlide } from './slides/AosHistorySlide';
import { AosThesisSlide } from './slides/AosThesisSlide';
import { AosMergedSlide } from './slides/AosMergedSlide';
import { AosResolutionSlide } from './slides/AosResolutionSlide';
import { AosEngineSlide } from './slides/AosEngineSlide';
import { AosCapsuleSlide } from './slides/AosCapsuleSlide';
import { AosPowerNarrowsSlide } from './slides/AosPowerNarrowsSlide';
import { AosProofSlide } from './slides/AosProofSlide';
import { AosSwapSlide } from './slides/AosSwapSlide';
import { AosSeatsSlide } from './slides/AosSeatsSlide';
import { AosRealTodaySlide } from './slides/AosRealTodaySlide';
import { AosRoadmapShippedSlide, AosRoadmapBuildingSlide, AosRoadmapHorizonSlide } from './slides/AosRoadmapSlides';
import { AosEditionsSlide } from './slides/AosEditionsSlide';
import { AosCtaSlide } from './slides/AosCtaSlide';
import { AosExtensibilitySlide } from './slides/AosExtensibilitySlide';
import { AosNotMetaphorSlide } from './slides/AosNotMetaphorSlide';
import { AosVerifiedIdeSlide } from './slides/AosVerifiedIdeSlide';
import { AosDefensibilitySlide } from './slides/AosDefensibilitySlide';
import { AosLearningLoopSlide } from './slides/AosLearningLoopSlide';
import { AosLearningLoopBehaviorSlide } from './slides/AosLearningLoopBehaviorSlide';
import { AosAccountableEmployeesSlide } from './slides/AosAccountableEmployeesSlide';
import { AosThankYouSlide } from './slides/AosThankYouSlide';
import { AosProofSystemSlide } from './slides/AosProofSystemSlide';
import { AosEnforcedSlide } from './slides/AosEnforcedSlide';
import { AosCostControlSlide } from './slides/AosCostControlSlide';
import { AosEarnAutonomySlide } from './slides/AosEarnAutonomySlide';
import { AosSecuritySlide } from './slides/AosSecuritySlide';
import { AosTractionSlide } from './slides/AosTractionSlide';
import { AosBlockchainFaqSlide } from './slides/AosBlockchainFaqSlide';
import { AosEngagementSlide } from './slides/AosEngagementSlide';
import { AosIndustriesSlide } from './slides/AosIndustriesSlide';
import { AosWhyOsSlide } from './slides/AosWhyOsSlide';
import { AosEngineOsSlide } from './slides/AosEngineOsSlide';
import { AgentFirewallSlide } from './slides/AgentFirewallSlide';
import { FailClosedSlide } from './slides/FailClosedSlide';
import { AosFirewallArchSlide } from './slides/AosFirewallArchSlide';
import { FirewallPricingSlide } from './slides/FirewallPricingSlide';
import { FirewallMoneyMomentSlide } from './slides/FirewallMoneyMomentSlide';
import { FirewallProofSlide } from './slides/FirewallProofSlide';
import { SlideNavigation } from './components/SlideNavigation';

// ── AOS CODEWALL — product sales deck (active on this branch) ──
const slides = [
  CodewallCoverSlide,        // 1. Cover — AOS Codewall
  CodewallProblemSlide,      // 2. Problem — coding agents are the new attack surface
  AgentFirewallSlide,        // 3. What it does — IDE interception mockup
  AosFirewallArchSlide,      // 4. How it works — agentic security architecture
  FailClosedSlide,           // 5. Fail closed, not fail open
  FirewallMoneyMomentSlide,  // 6. The money moment — model said yes, OS said no
  FirewallProofSlide,        // 7. Proof & verifiable audit
  FirewallPricingSlide,      // 8. Pricing — free / team ($15) / enterprise
  AosCtaSlide,               // 9. How to start · contact
];

// ── Full AOS deck (kept for reference; not active on this branch) ──
const _aosSlides = [
  // ══ WHY UNICITY AOS — the category deck ══
  // ══ WHY UNICITY AOS — enterprise restructure (pain → product → proof → thesis) ══

  // ── CORE ──
  AosCoverSlide,             // 1. Title
  AosNoOsSlide,              // 2. The problem — you run agents, can't govern them
  AutonomyStackSlide,        // 3. An OS built for the day no one is watching (what AOS is)
  AosNotMetaphorSlide,       // 4. An actual OS — not just orchestration (the checklist)
  AosMergedSlide,            // 5. Operating systems beat harnesses (merged table + primitives footer)
  // AosThesisSlide,         // replaced by AosMergedSlide
  AosResolutionSlide,        // 5. Owned by no model vendor. Running all of them.
  DeploymentModelHtmlSlide,  // 6. Runs inside your infrastructure
  AosSecuritySlide,          // 6. Security & integration — boring on purpose
  AosRoadmapShippedSlide,    // 7. Core functionality — shipped
  // AosTractionSlide,       // hidden — design partner placeholder (industries slide carries traction)
  // UseCasesAppendixSlide,  // removed — redundant "AOS Enterprise" divider (whole deck is enterprise)
  ShadowAISlide,             // 9. Use case: Agent sprawl & shadow AI
  DLPSlide,                  // 11. Use case: DLP
  AosCostControlSlide,       // 12. Use case: Cost control + routing
  // ── Agent Firewall (developer / enterprise) ──
  AgentFirewallSlide,        // Use case: The Agent Firewall (what it does)
  FailClosedSlide,           // Why it wins: fail closed, not fail open
  FirewallMoneyMomentSlide,  // The money moment: model said yes, OS said no
  AosFirewallArchSlide,      // How it works: agentic security architecture
  FirewallProofSlide,        // Proof & verifiable audit (attested identity, receipts)
  FirewallPricingSlide,      // Pricing: free → team ($15) → enterprise
  AosIndustriesSlide,        // 13. Who this is for — high-stakes industries (real engagements)
  AosProofSystemSlide,       // 14. Proof system — tokens, not ledger entries
  AosEarnAutonomySlide,      // 14. The OS learns + agents earn autonomy
  AosLearningLoopBehaviorSlide, // 15. Next, it learns behavior (per-agent flow graph, anomaly detection)
  CompetitionMinimalSlide,   // 16. How it fits your stack — coexistence
  AosRoadmapBuildingSlide,   // 16. Roadmap — compliance-led
  AosEditionsSlide,          // 17. Editions — Community / Enterprise
  AosCtaSlide,               // 18. How to start
  WhoWeAreSlide,             // 19. Team
  AosThankYouSlide,          // 20. Close — thank you

  // ── APPENDIX (deep-dive / reference) ──
  AosExtensibilitySlide,        // A. Capsule shelf — what runs on the OS
  AosEngineSlide,               // A. One microkernel, everything else a capsule
  AosDefensibilitySlide,        // A. Defensibility — today & tomorrow (absorbed into core proof + roadmap)
  InterceptFabricSlide,         // A. Semantic Intercept — domain ontologies
  // AosBlockchainFaqSlide,     // removed
  // AosEngagementSlide,        // removed

  // ── Dropped / merged (kept in source, out of deck) ──
  // AosEnforcedSlide,             // retired — reverted to full AosThesisSlide + AosResolutionSlide
  // AosLearningLoopSlide,         // merged into AosEarnAutonomySlide
  // AosAccountableEmployeesSlide, // merged into AosEarnAutonomySlide
  // RunawayComputeSlide,          // merged into AosCostControlSlide
  // IntelligentRoutingSlide,      // merged into AosCostControlSlide
  // AosRoadmapHorizonSlide,       // merged into roadmap

  // ── Hidden (other) ──
  // CompetitionMinimalSlide, // Competition / Everyone else watches the agent
  // SemanticFirewallSlide,  // The Semantic Firewall
  // DeploymentModelSlide,   // earlier all-SVG version
  // EnterpriseDeploymentSlide, // older MSSP version
  // UseCasesSlide,          // Enterprise Case Studies (replaced by TelecomUseCasesSlide)
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
      <div
        className="fixed bottom-4 right-6 sm:right-10 lg:right-16 z-[101] text-[#fefefe]/40 text-[11px] sm:text-xs tracking-[0.18em] uppercase select-none pointer-events-none"
        style={{ fontFamily: "'Geist Mono', monospace" }}
      >
        August 2026 · Unicity Labs — Confidential
      </div>
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
