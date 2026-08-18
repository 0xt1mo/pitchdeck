import { InvestmentSlide } from './InvestmentSlide';

// Crypto-free variant of InvestmentSlide — drops the "+ token warrants" from the
// runway line. Used by the investorclean deck.
export function InvestmentCleanSlide() {
  return <InvestmentSlide clean />;
}
