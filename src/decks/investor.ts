// Deck config — ordered list of slides. Edit membership/order here; slide source lives in ../slides.
import { AgentFirewallSlide } from '../slides/AgentFirewallSlide';
import { AiInfraSlide } from '../slides/AiInfraSlide';
import { AosDensitySlide } from '../slides/AosDensitySlide';
import { AosMergedSlide } from '../slides/AosMergedSlide';
import { AutonomyStackSlide } from '../slides/AutonomyStackSlide';
import { BearerTokensSlide } from '../slides/BearerTokensSlide';
import { CompetitionMinimalSlide } from '../slides/CompetitionMinimalSlide';
import { ConciergeSlide } from '../slides/ConciergeSlide';
import { CoverSlide } from '../slides/CoverSlide';
import { GoToMarketSlide } from '../slides/GoToMarketSlide';
import { GtmEditionsSlide } from '../slides/GtmEditionsSlide';
import { IGamingRetentionSlide } from '../slides/IGamingRetentionSlide';
// import { IntroSlide } from '../slides/IntroSlide'; // folded into CoverSlide thesis
import { InvestmentSlide } from '../slides/InvestmentSlide';
import { MarketBlockchainSlide } from '../slides/MarketBlockchainSlide';
import { MarketSlide } from '../slides/MarketSlide';
// import { MedicalCaseSlide } from '../slides/MedicalCaseSlide'; // removed — didn't fit
import { EvolutionSlide } from '../slides/EvolutionSlide';
import { TeamSlide } from '../slides/TeamSlide';
import { ThankYouChatSlide } from '../slides/ThankYouChatSlide';
import { TokenRebuildSlide } from '../slides/TokenRebuildSlide';
import { TokenSlide } from '../slides/TokenSlide';
import { TractionSlide } from '../slides/TractionSlide';
import { VisionSlide } from '../slides/VisionSlide';

export const investorDeck = [
  CoverSlide,
  // IntroSlide,          // folded into CoverSlide thesis
  EvolutionSlide,         // Why now — agents recapitulating computing history (data center)
  AutonomyStackSlide,     // Unicity AOS: an OS built for autonomous agents
  AosDensitySlide,        // What a multi-tenant agent OS buys
  MarketSlide,
  MarketBlockchainSlide,
  AosMergedSlide,
  CompetitionMinimalSlide,
  BearerTokensSlide,
  GtmEditionsSlide,
  ConciergeSlide,
  // MedicalCaseSlide,    // removed — didn't fit
  GoToMarketSlide,
  AiInfraSlide,           // AI infra OEM channel — the OS inside sovereign AI data centers
  IGamingRetentionSlide,
  AgentFirewallSlide,
  TractionSlide,
  TeamSlide,
  InvestmentSlide,
  TokenSlide,
  TokenRebuildSlide,
  VisionSlide,
  ThankYouChatSlide,
];
