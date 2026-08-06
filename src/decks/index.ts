import { investorDeck } from './investor';
import { corporateDeck } from './corporate';
import { ddnDeck } from './ddn';
import { aosDeck } from './aos';
import { codewallDeck } from './codewall';
import { salesdeckDeck } from './salesdeck';
import { casinoDeck } from './casino';
import { healthcareDeck } from './healthcare';
import { enterpriseDeck } from './enterprise';
import { msspDeck } from './mssp';
import { telecomDeck } from './telecom';
import { tetherDeck } from './tether';

export const decks = {
  investor: investorDeck,
  corporate: corporateDeck,
  ddn: ddnDeck,
  aos: aosDeck,
  codewall: codewallDeck,
  salesdeck: salesdeckDeck,
  casino: casinoDeck,
  healthcare: healthcareDeck,
  enterprise: enterpriseDeck,
  mssp: msspDeck,
  telecom: telecomDeck,
  tether: tetherDeck,
} as const;

export type DeckName = keyof typeof decks;
export const DEFAULT_DECK: DeckName = 'investor';
