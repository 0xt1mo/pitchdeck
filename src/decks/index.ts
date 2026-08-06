import { investorDeck } from './investor';
import { aosDeck } from './aos';

export const decks = {
  investor: investorDeck,
  aos: aosDeck,
} as const;

export type DeckName = keyof typeof decks;
export const DEFAULT_DECK: DeckName = 'investor';
