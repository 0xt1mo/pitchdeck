import { investorDeck } from './investor';
import { investorCleanDeck } from './investorclean';
import { corporateDeck } from './corporate';
import { ddnDeck } from './ddn';
import { ddnbrandDeck } from './ddnbrand';
import { aosDeck } from './aos';
import { codewallDeck } from './codewall';
import { salesdeckDeck } from './salesdeck';
import { casinoDeck } from './casino';
import { healthcareDeck } from './healthcare';
import { enterpriseDeck } from './enterprise';
import { msspDeck } from './mssp';
import { telecomDeck } from './telecom';
import { tetherDeck } from './tether';
import { videoDeck } from './video';

export const decks = {
  investor: investorDeck,
  investorclean: investorCleanDeck,
  corporate: corporateDeck,
  ddn: ddnDeck,
  ddnbrand: ddnbrandDeck,
  aos: aosDeck,
  codewall: codewallDeck,
  salesdeck: salesdeckDeck,
  casino: casinoDeck,
  healthcare: healthcareDeck,
  enterprise: enterpriseDeck,
  mssp: msspDeck,
  telecom: telecomDeck,
  tether: tetherDeck,
  video: videoDeck,
} as const;

export type DeckName = keyof typeof decks;
export const DEFAULT_DECK: DeckName = 'investor';
