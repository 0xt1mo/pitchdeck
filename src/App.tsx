import { useEffect, useCallback, useState } from 'react';
import './sphereInit'; // Start SDK initialization eagerly on page load
import { IntroSlide } from './slides/IntroSlide';
import { CoverSlide } from './slides/CoverSlide';
import { CompanyIntroCoverSlide } from './slides/CompanyIntroCoverSlide';
import { PromiseSlide } from './slides/PromiseSlide';
import { SharedLedgerSlide } from './slides/SharedLedgerSlide';
import { AgentsSlide } from './slides/AgentsSlide';
import { TokenObjectSlide } from './slides/TokenObjectSlide';
import { BearerTokensSlide } from './slides/BearerTokensSlide';
import { MedicalCaseSlide } from './slides/MedicalCaseSlide';
import { GtmEditionsSlide } from './slides/GtmEditionsSlide';
import { IGamingRetentionSlide } from './slides/IGamingRetentionSlide';
import { AgentFirewallSlide } from './slides/AgentFirewallSlide';
import { FailClosedSlide } from './slides/FailClosedSlide';
import { FirewallMoneyMomentSlide } from './slides/FirewallMoneyMomentSlide';
import { AosFirewallArchSlide } from './slides/AosFirewallArchSlide';
import { VerifiableRoadmapSlide } from './slides/VerifiableRoadmapSlide';
// import { EdgePayoffSlide } from './slides/EdgePayoffSlide'; // hidden — appendix
import { UnbundledPayoffSlide } from './slides/UnbundledPayoffSlide';
import { RetrofitSlide } from './slides/RetrofitSlide';
// import { CompetitionSlide } from './slides/CompetitionSlide'; // hidden — appendix
import { MarketSlide } from './slides/MarketSlide';
// import { BusinessModelPricingSlide } from './slides/BusinessModelPricingSlide'; // hidden
import { CompetitionMinimalSlide } from './slides/CompetitionMinimalSlide';
import { AosThesisSlide } from './slides/AosThesisSlide';
import { AosMergedSlide } from './slides/AosMergedSlide';
import { AosNotMetaphorSlide } from './slides/AosNotMetaphorSlide';
// import { DefensibilitySlide } from './slides/DefensibilitySlide'; // hidden
import { ResourcesSlide } from './slides/ResourcesSlide';
import { ProblemSlide } from './slides/ProblemSlide';
import { AutonomyStackSlide } from './slides/AutonomyStackSlide';
import { CompleteAutonomyStackSlide } from './slides/CompleteAutonomyStackSlide';
import { SolutionIntroSlide } from './slides/SolutionIntroSlide';
import { ArchitectureStackSlide } from './slides/ArchitectureStackSlide';
// import { CompetitiveLandscapeSlide } from './slides/CompetitiveLandscapeSlide'; // hidden — appendix
import { SecurityNetworkSlide } from './slides/SecurityNetworkSlide';
// import { UseCasesSlide } from './slides/UseCasesSlide'; // hidden
import { DeploymentModelHtmlSlide } from './slides/DeploymentModelHtmlSlide';
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
import { TractionSlide } from './slides/TractionSlide';
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
  CoverSlide,              // 1a. Cover — INVESTOR DECK  (delete one of the two covers per audience)
  CompanyIntroCoverSlide,  // 1b. Cover — COMPANY INTRO · "Building verifiable AI"
  IntroSlide,              // 2.  Vision — autonomous AI needs an internet built for machines
  ProblemSlide,            // 3.  The Fourth Rebuild of Compute
  MarketSlide,             // 4.  Market Opportunity
  AutonomyStackSlide,      // 4.  Product Stack — Protocol Stack for the Agentic Internet
  AosMergedSlide,          // 5.  OS beats harnesses (merged table + primitives footer)
  CompetitionMinimalSlide, // 6.  Runtime beneath — we are the runtime beneath them
  BearerTokensSlide,       // 7.  Blockchain — the OS has an integrated blockchain
  GtmEditionsSlide,        // 8.  Go To Market — Community / Enterprise / Industry Solutions
  // ── Case studies ──
  ConciergeSlide,          // Telecom — subscriber concierge
  MedicalCaseSlide,        // Medical — Padra / autonomous patient journey
  GoToMarketSlide,         // Agentic State — Government / Aleria (UAE)
  IGamingRetentionSlide,   // iGaming — agentic CRM
  AgentFirewallSlide,      // Codewall — AOS Codewall (developer firewall)
  TractionSlide,           // Traction — devs, testnet, pipeline, signed channel
  TeamSlide,               // 14. Team — right before the ask
  InvestmentSlide,         // 15. The Investment — seed extension
  TokenSlide,              // 16. Tokenomics
  VerifiableRoadmapSlide,  // 17. Where this goes — roadmap to Verifiable AI
  ThankYouChatSlide,       // 18. Thank You — contact + X + LinkedIn
  // ── Dropped from this order (kept for reference) ──
  // AosNotMetaphorSlide,  // OS beats harnesses (6-card primitives grid)
  // AosThesisSlide,       // OS beats harnesses (thesis table)
  // FailClosedSlide,      // firewall — fail closed, not fail open
  // FirewallMoneyMomentSlide, // firewall — model said yes, OS said no
  // AosFirewallArchSlide, // firewall — architecture diagram
  // ResourcesSlide,       // Essential Resources (social links moved to Thank You)
  // ── Appendix — additional use cases (all hidden) ──
  // ShadowAISlide,           // Appendix — Agent Sprawl & Shadow AI
  // DLPSlide,                // Appendix — Data Loss Prevention
  // RunawayComputeSlide,     // Appendix — Cost Control / Every Agent Gets a Budget
  // IntelligentRoutingSlide, // Appendix — Intelligent Routing
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
