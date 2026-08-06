// Deck config — DDN partnership. Deal up front, then Unicity credibility, the AOS
// technical proof, durability, team/momentum, and a deal-shaped ask. Bespoke slides
// live under src/slides/ddn/; the rest are reused single-source AOS/company slides.
import { DdnIntroSlide } from '../slides/ddn/DdnIntroSlide';
import { DdnTitleSlide } from '../slides/ddn/DdnTitleSlide';
import { DdnGapSlide } from '../slides/ddn/DdnGapSlide';
import { DdnEvolutionSlide } from '../slides/ddn/DdnEvolutionSlide';
import { WhoWeAreSlide } from '../slides/WhoWeAreSlide';
import { AutonomyStackSlide } from '../slides/AutonomyStackSlide';
import { ArchitectureStackSlide } from '../slides/ArchitectureStackSlide';
import { AosEngineSlide } from '../slides/AosEngineSlide';
import { AosDensitySlide } from '../slides/AosDensitySlide';
import { DdnStorageSlide } from '../slides/ddn/DdnStorageSlide';
import { AosProofSystemSlide } from '../slides/AosProofSystemSlide';
import { DdnSecureSlide } from '../slides/ddn/DdnSecureSlide';
import { AosMergedSlide } from '../slides/AosMergedSlide';
import { TractionSlide } from '../slides/TractionSlide';
import { TeamSlide } from '../slides/TeamSlide';
import { DdnCloseSlide } from '../slides/ddn/DdnCloseSlide';

export const ddnDeck = [
  // — The deal —
  DdnIntroSlide,          // 1. Co-branded intro cover
  DdnTitleSlide,          // 2. Title / thesis
  DdnGapSlide,            // 3. The gap
  DdnEvolutionSlide,      // 4. Why now — agents recapitulating computing history
  // — Who Unicity is —
  WhoWeAreSlide,          // 5. Built by infrastructure veterans
  // — What AOS is (technical proof) —
  AutonomyStackSlide,     // 5. An OS built for autonomous agents
  ArchitectureStackSlide, // 6. The secure OS — full architecture
  AosEngineSlide,         // 7. Everything else is a capsule
  AosDensitySlide,        // 8. What a multi-tenant agent OS buys
  DdnStorageSlide,        // 9. Agent-native storage
  AosProofSystemSlide,    // 10. Unicity Proof System — verifiable execution
  DdnSecureSlide,         // 11. Secure by construction
  // — Durability —
  AosMergedSlide,         // 12. Operating systems beat harnesses
  // — Team & momentum —
  TractionSlide,          // 13. Traction
  TeamSlide,              // 14. Team
  DdnCloseSlide,          // 15. Close
];
