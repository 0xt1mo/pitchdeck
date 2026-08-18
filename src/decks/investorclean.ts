// Deck config — crypto-free investor deck for general audiences. Derived from the
// authoritative `investor` deck: crypto-only slides are filtered out and the traction
// slide is swapped to the crypto-free variant. Edit membership/order in investor.ts.
import { investorDeck } from './investor';
import { BearerTokensSlide } from '../slides/BearerTokensSlide';
import { InvestmentSlide } from '../slides/InvestmentSlide';
import { InvestmentCleanSlide } from '../slides/InvestmentCleanSlide';
import { MarketBlockchainSlide } from '../slides/MarketBlockchainSlide';
import { MarketSlide } from '../slides/MarketSlide';
import { TokenRebuildSlide } from '../slides/TokenRebuildSlide';
import { TractionSlide } from '../slides/TractionSlide';
import { TractionCleanSlide } from '../slides/TractionCleanSlide';

// Slides shown only to crypto-native audiences (kept in the investor deck).
const CRYPTO_ONLY = new Set<unknown>([
  BearerTokensSlide,
  TokenRebuildSlide,
]);

// Crypto-flavoured slides swapped for their crypto-free variants.
const CLEAN_SWAP = new Map<unknown, unknown>([
  [TractionSlide, TractionCleanSlide],
  [InvestmentSlide, InvestmentCleanSlide],
  [MarketBlockchainSlide, MarketSlide], // crypto Stripe market slide → AI-infra market slide
]);

export const investorCleanDeck = investorDeck
  .filter((slide) => !CRYPTO_ONLY.has(slide))
  .map((slide) => (CLEAN_SWAP.get(slide) ?? slide) as typeof slide);
