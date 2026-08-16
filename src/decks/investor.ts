// Deck config — investor deck (full: includes the crypto slides). This is the
// authoritative deck; edit membership/order here. The crypto-free `investorclean`
// deck is derived from this one (see investorclean.ts).
// import { AgentFirewallSlide } from '../slides/AgentFirewallSlide'; // removed — 'Example solution: AOS Codewall'
// import { AiInfraSlide } from '../slides/AiInfraSlide'; // removed from investor deck
import { AosDensitySlide } from '../slides/AosDensitySlide';
// import { AosMergedSlide } from '../slides/AosMergedSlide'; // removed — 'operating systems beat harnesses'
import { AutonomyStackSlide } from '../slides/AutonomyStackSlide';
import { BankingSlide } from '../slides/BankingSlide';
import { BearerTokensSlide } from '../slides/BearerTokensSlide';
// import { CompetitionMinimalSlide } from '../slides/CompetitionMinimalSlide'; // removed — replaced by WhyWeWinSlide
import { ConciergeSlide } from '../slides/ConciergeSlide';
import { CoverSlide } from '../slides/CoverSlide';
import { EvolutionSlide } from '../slides/EvolutionSlide';
import { FinancialModelSlide } from '../slides/FinancialModelSlide';
import { GoToMarketSlide } from '../slides/GoToMarketSlide';
import { GtmEditionsSlide } from '../slides/GtmEditionsSlide';
import { GtmModelSlide } from '../slides/GtmModelSlide';
// import { MarketVerticalsSlide } from '../slides/MarketVerticalsSlide'; // removed — 'One platform. Every vertical.' dropped
// import { HealthGatewaySlide } from '../slides/HealthGatewaySlide'; // removed from investor deck
import { InvestmentSlide } from '../slides/InvestmentSlide';
import { MarketBlockchainSlide } from '../slides/MarketBlockchainSlide';
import { MarketSlide } from '../slides/MarketSlide';
// import { ProductsSlide } from '../slides/ProductsSlide'; // folded into the bottom of VisionSlide
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
  AutonomyStackSlide,     // AOS: an OS built for autonomous agents
  EvolutionSlide,         // Why now — AI agents speedrunning compute history
  AosDensitySlide,        // What a multi-tenant agent OS buys
  // AosMergedSlide,      // removed — 'operating systems beat harnesses'
  // CompetitionMinimalSlide, // removed — replaced by WhyWeWinSlide
  WhyWeWinSlide,          // Competition — industrial scale + safety/security baked into the OS
  BearerTokensSlide,      // Bearer tokens — integrated blockchain  [crypto-only]
  // MarketVerticalsSlide, // removed — 'One platform. Every vertical.' dropped
  GtmModelSlide,          // GTM — our customers: safety buyers + personal-agent distribution
  GtmEditionsSlide,
  ConciergeSlide,         // Telco
  BankingSlide,           // Banking — a better customer experience (video hero)
  FinancialModelSlide,    // Financial model — Concierge unit economics + ARR ramp
  // HealthGatewaySlide,  // removed from investor deck
  GoToMarketSlide,        // Government
  // AiInfraSlide,        // removed from investor deck
  // AgentFirewallSlide,  // removed — 'Example solution: AOS Codewall'
  TractionSlide,          // Traction — with testnet wallets/apps  [crypto]
  MarketSlide,            // Market opportunity — AI infrastructure
  MarketBlockchainSlide,  // Market opportunity — blockchain / crypto  [crypto-only]
  TeamSlide,
  InvestmentSlide,
  TokenSlide,             // Token  [crypto-only]
  TokenRebuildSlide,      // Token rebuild  [crypto-only]
  VisionSlide,
  ThankYouChatSlide,
];
