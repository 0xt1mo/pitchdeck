// Deck config — general-audience investor deck. Derived from the crypto superset
// (investorcrypto.ts): crypto-only slides are filtered out and the traction slide is
// swapped to the crypto-free variant. Edit membership/order in investorcrypto.ts.
import { investorCryptoDeck } from './investorcrypto';
import { MarketBlockchainSlide } from '../slides/MarketBlockchainSlide';
import { TractionSlide } from '../slides/TractionSlide';
import { TractionCleanSlide } from '../slides/TractionCleanSlide';

// Slides shown only to crypto-native audiences (kept in the investorcrypto deck).
const CRYPTO_ONLY = new Set<unknown>([
  MarketBlockchainSlide,
]);

export const investorDeck = investorCryptoDeck
  .filter((slide) => !CRYPTO_ONLY.has(slide))
  .map((slide) => (slide === TractionSlide ? TractionCleanSlide : slide));
