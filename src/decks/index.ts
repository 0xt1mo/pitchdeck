import { investorDeck } from './investor';
import { aosDeck } from './aos';
import { codewallDeck } from './codewall';

export const decks = {
  investor: investorDeck,
  aos: aosDeck,
  codewall: codewallDeck,
} as const;

export type DeckName = keyof typeof decks;
export const DEFAULT_DECK: DeckName = 'investor';
