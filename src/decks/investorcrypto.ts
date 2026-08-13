// Deck config — investor deck for crypto-native audiences (the full/superset deck).
// The general-audience `investor` deck is derived from this one by removing the
// crypto-only slides and swapping in the crypto-free traction slide (see investor.ts).
import { AgentFirewallSlide } from '../slides/AgentFirewallSlide';
import { AiInfraSlide } from '../slides/AiInfraSlide';
import { AosDensitySlide } from '../slides/AosDensitySlide';
import { AosMergedSlide } from '../slides/AosMergedSlide';
import { AutonomyStackSlide } from '../slides/AutonomyStackSlide';
import { BearerTokensSlide } from '../slides/BearerTokensSlide';
import { CompetitionMinimalSlide } from '../slides/CompetitionMinimalSlide';
import { ConciergeSlide } from '../slides/ConciergeSlide';
import { CoverSlide } from '../slides/CoverSlide';
import { EvolutionSlide } from '../slides/EvolutionSlide';
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

export const investorCryptoDeck = [
  TitleSlide,             // Cover — the operating system for autonomous AI
  CoverSlide,             // Thesis — the internet machines need doesn't exist yet
  EvolutionSlide,         // Why now — AI agents speedrunning compute history
  AutonomyStackSlide,     // AOS: an OS built for autonomous agents
  AosDensitySlide,        // What a multi-tenant agent OS buys
  MarketSlide,            // Market — AI infrastructure
  MarketBlockchainSlide,  // Market — blockchain / crypto  [crypto-only]
  AosMergedSlide,
  CompetitionMinimalSlide,
  BearerTokensSlide,      // Bearer tokens — integrated blockchain  [crypto-only]
  GtmEditionsSlide,
  ConciergeSlide,         // Telco
  HealthGatewaySlide,     // Healthcare — the AI compliance gateway
  GoToMarketSlide,        // Government
  AiInfraSlide,           // AI infra OEM channel
  AgentFirewallSlide,
  TractionSlide,          // Traction — with testnet wallets/apps  [crypto]
  TeamSlide,
  InvestmentSlide,
  TokenSlide,             // Token  [crypto-only]
  TokenRebuildSlide,      // Token rebuild  [crypto-only]
  VisionSlide,
  ThankYouChatSlide,
];
