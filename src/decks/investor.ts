// Deck config — investor deck (full: includes the crypto slides). This is the
// authoritative deck; edit membership/order here. The crypto-free `investorclean`
// deck is derived from this one (see investorclean.ts).
import { AgentFirewallSlide } from '../slides/AgentFirewallSlide';
import { AiInfraSlide } from '../slides/AiInfraSlide';
import { AosDensitySlide } from '../slides/AosDensitySlide';
// import { AosMergedSlide } from '../slides/AosMergedSlide'; // removed — 'operating systems beat harnesses'
import { AutonomyStackSlide } from '../slides/AutonomyStackSlide';
import { BearerTokensSlide } from '../slides/BearerTokensSlide';
// import { CompetitionMinimalSlide } from '../slides/CompetitionMinimalSlide'; // removed — replaced by WhyWeWinSlide
import { ConciergeSlide } from '../slides/ConciergeSlide';
import { CoverSlide } from '../slides/CoverSlide';
import { EvolutionSlide } from '../slides/EvolutionSlide';
import { FinancialModelSlide } from '../slides/FinancialModelSlide';
import { GoToMarketSlide } from '../slides/GoToMarketSlide';
import { GtmEditionsSlide } from '../slides/GtmEditionsSlide';
import { HealthGatewaySlide } from '../slides/HealthGatewaySlide';
import { InvestmentSlide } from '../slides/InvestmentSlide';
import { MarketBlockchainSlide } from '../slides/MarketBlockchainSlide';
import { MarketSlide } from '../slides/MarketSlide';
import { TeamSlide } from '../slides/TeamSlide';
import { ThankYouChatSlide } from '../slides/ThankYouChatSlide';
import { TitleSlide } from '../slides/TitleSlide';
import { TokenRebuildSlide } from '../slides/TokenRebuildSlide';
import { TokenSlide } from '../slides/TokenSlide';
import { TractionSlide } from '../slides/TractionSlide';
import { VisionSlide } from '../slides/VisionSlide';
import { WhyWeWinSlide } from '../slides/WhyWeWinSlide';

export const investorDeck = [
  TitleSlide,             // Cover — the operating system for autonomous AI
  CoverSlide,             // Thesis — the internet machines need doesn't exist yet
  EvolutionSlide,         // Why now — AI agents speedrunning compute history
  AutonomyStackSlide,     // AOS: an OS built for autonomous agents
  AosDensitySlide,        // What a multi-tenant agent OS buys
  MarketSlide,            // Market — AI infrastructure
  MarketBlockchainSlide,  // Market — blockchain / crypto  [crypto-only]
  // AosMergedSlide,      // removed — 'operating systems beat harnesses'
  // CompetitionMinimalSlide, // removed — replaced by WhyWeWinSlide
  WhyWeWinSlide,          // Competition — industrial scale + safety/security baked into the OS
  BearerTokensSlide,      // Bearer tokens — integrated blockchain  [crypto-only]
  GtmEditionsSlide,
  ConciergeSlide,         // Telco
  HealthGatewaySlide,     // Healthcare — the AI compliance gateway
  GoToMarketSlide,        // Government
  AiInfraSlide,           // AI infra OEM channel
  AgentFirewallSlide,
  TractionSlide,          // Traction — with testnet wallets/apps  [crypto]
  FinancialModelSlide,    // Financial model — Concierge unit economics + ARR ramp
  TeamSlide,
  InvestmentSlide,
  TokenSlide,             // Token  [crypto-only]
  TokenRebuildSlide,      // Token rebuild  [crypto-only]
  VisionSlide,
  ThankYouChatSlide,
];
