// Deck config — Unicity AOS deck. The full AOS product story, now extended with the
// machine-internet opener (title + thesis + evolution), the sovereign AI-infra / telco /
// government "where it lands" cluster, and the company vision. Slides live in ../slides.

// — New narrative slides folded in from the investor/DDN work —
import { TitleSlide } from '../slides/TitleSlide';
import { CoverSlide } from '../slides/CoverSlide';
import { EvolutionSlide } from '../slides/EvolutionSlide';
import { AiInfraSlide } from '../slides/AiInfraSlide';
import { ConciergeSlide } from '../slides/ConciergeSlide';
import { GoToMarketSlide } from '../slides/GoToMarketSlide';
import { VisionSlide } from '../slides/VisionSlide';

// — Original AOS slides —
import { AgentFirewallSlide } from '../slides/AgentFirewallSlide';
import { AosCostControlSlide } from '../slides/AosCostControlSlide';
// import { AosCoverSlide } from '../slides/AosCoverSlide'; // superseded by TitleSlide + thesis
import { AosCtaSlide } from '../slides/AosCtaSlide';
import { AosDefensibilitySlide } from '../slides/AosDefensibilitySlide';
import { AosDensitySlide } from '../slides/AosDensitySlide';
import { AosEarnAutonomySlide } from '../slides/AosEarnAutonomySlide';
import { AosEditionsSlide } from '../slides/AosEditionsSlide';
import { AosEngineSlide } from '../slides/AosEngineSlide';
import { AosExtensibilitySlide } from '../slides/AosExtensibilitySlide';
import { AosFirewallArchSlide } from '../slides/AosFirewallArchSlide';
import { AosIndustriesSlide } from '../slides/AosIndustriesSlide';
import { AosLearningLoopBehaviorSlide } from '../slides/AosLearningLoopBehaviorSlide';
import { AosMergedSlide } from '../slides/AosMergedSlide';
import { AosNoOsSlide } from '../slides/AosNoOsSlide';
import { AosNotMetaphorSlide } from '../slides/AosNotMetaphorSlide';
import { AosProofSystemSlide } from '../slides/AosProofSystemSlide';
import { AosResolutionSlide } from '../slides/AosResolutionSlide';
import { AosRoadmapShippedSlide, AosRoadmapBuildingSlide } from '../slides/AosRoadmapSlides';
import { AosSecuritySlide } from '../slides/AosSecuritySlide';
import { AosThankYouSlide } from '../slides/AosThankYouSlide';
import { AutonomyStackSlide } from '../slides/AutonomyStackSlide';
import { CompetitionMinimalSlide } from '../slides/CompetitionMinimalSlide';
import { DLPSlide } from '../slides/DLPSlide';
import { DeploymentModelHtmlSlide } from '../slides/DeploymentModelHtmlSlide';
import { FailClosedSlide } from '../slides/FailClosedSlide';
import { FirewallMoneyMomentSlide } from '../slides/FirewallMoneyMomentSlide';
import { FirewallPricingSlide } from '../slides/FirewallPricingSlide';
import { FirewallProofSlide } from '../slides/FirewallProofSlide';
import { InterceptFabricSlide } from '../slides/InterceptFabricSlide';
import { ShadowAISlide } from '../slides/ShadowAISlide';
import { WhoWeAreSlide } from '../slides/WhoWeAreSlide';

export const aosDeck = [
  // — Open (new) —
  TitleSlide,             // Cover — the operating system for autonomous AI
  CoverSlide,             // Thesis — the internet machines need doesn't exist yet
  EvolutionSlide,         // Why now — AI agents speedrunning compute history
  // AosCoverSlide,       // superseded by TitleSlide + thesis

  // — What AOS is —
  AosNoOsSlide,
  AutonomyStackSlide,
  AosNotMetaphorSlide,
  AosMergedSlide,
  AosDensitySlide,
  AosResolutionSlide,
  DeploymentModelHtmlSlide,

  // — Secure + Codewall (the firewall for coding agents) —
  AosSecuritySlide,
  AosRoadmapShippedSlide,
  ShadowAISlide,
  DLPSlide,
  AosCostControlSlide,
  AgentFirewallSlide,
  FailClosedSlide,
  FirewallMoneyMomentSlide,
  AosFirewallArchSlide,
  FirewallProofSlide,
  FirewallPricingSlide,

  // — Where it lands —
  AosIndustriesSlide,
  AiInfraSlide,           // new — the OS inside sovereign AI data centers
  ConciergeSlide,         // new — telco: a personal agent for high-ARPU subscribers
  GoToMarketSlide,        // new — government: the agentic state

  // — Proof, behavior, durability —
  AosProofSystemSlide,
  AosEarnAutonomySlide,
  AosLearningLoopBehaviorSlide,
  CompetitionMinimalSlide,

  // — Roadmap + commercials —
  AosRoadmapBuildingSlide,
  AosEditionsSlide,

  // — Close —
  VisionSlide,            // new — our vision: autonomous, verifiable AI
  AosCtaSlide,
  WhoWeAreSlide,
  AosThankYouSlide,

  // — Appendix —
  AosExtensibilitySlide,
  AosEngineSlide,
  AosDefensibilitySlide,
  InterceptFabricSlide,
];
