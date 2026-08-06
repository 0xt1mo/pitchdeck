// Deck config — DDN partnership. Bespoke 7-slide partnership pitch (partnership thesis
// up front, then just enough proof, close on deal-shaped ask). New slides under
// src/slides/ddn/; reuses AosDensitySlide (slide 4) and AosMergedSlide (slide 6).
import { DdnIntroSlide } from '../slides/ddn/DdnIntroSlide';
import { DdnTitleSlide } from '../slides/ddn/DdnTitleSlide';
import { DdnGapSlide } from '../slides/ddn/DdnGapSlide';
import { AosDensitySlide } from '../slides/AosDensitySlide';
import { DdnStorageSlide } from '../slides/ddn/DdnStorageSlide';
import { DdnSecureSlide } from '../slides/ddn/DdnSecureSlide';
import { AosMergedSlide } from '../slides/AosMergedSlide';
import { DdnCloseSlide } from '../slides/ddn/DdnCloseSlide';

export const ddnDeck = [
  DdnIntroSlide,       // 1. Co-branded intro cover — Unicity Labs × DDN
  DdnTitleSlide,       // 2. Title / thesis
  DdnGapSlide,         // 3. The gap
  AosDensitySlide,     // 4. What a multi-tenant agent OS buys (reused)
  DdnStorageSlide,     // 5. Agent-native storage
  DdnSecureSlide,      // 6. Secure by construction
  AosMergedSlide,      // 7. Operating systems beat harnesses (reused)
  DdnCloseSlide,       // 8. Close
];
