// Deck config — DDN partnership. Bespoke 7-slide partnership pitch (partnership thesis
// up front, then just enough proof, close on deal-shaped ask). New slides under
// src/slides/ddn/; reuses AosDensitySlide (slide 4) and AosMergedSlide (slide 6).
import { DdnTitleSlide } from '../slides/ddn/DdnTitleSlide';
import { DdnGapSlide } from '../slides/ddn/DdnGapSlide';
import { AosDensitySlide } from '../slides/AosDensitySlide';
import { DdnStorageSlide } from '../slides/ddn/DdnStorageSlide';
import { DdnSecureSlide } from '../slides/ddn/DdnSecureSlide';
import { AosMergedSlide } from '../slides/AosMergedSlide';
import { DdnCloseSlide } from '../slides/ddn/DdnCloseSlide';

export const ddnDeck = [
  DdnTitleSlide,       // 1. Title / thesis
  DdnGapSlide,         // 2. The gap
  AosDensitySlide,     // 3. What a multi-tenant agent OS buys (reused)
  DdnStorageSlide,     // 4. Agent-native storage
  DdnSecureSlide,      // 5. Secure by construction
  AosMergedSlide,      // 6. Operating systems beat harnesses (reused)
  DdnCloseSlide,       // 7. Close
];
