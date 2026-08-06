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
import { DeploymentModelHtmlSlide } from '../slides/DeploymentModelHtmlSlide';
import { AosSecuritySlide } from '../slides/AosSecuritySlide';
import { DdnCodewallSlide } from '../slides/ddn/DdnCodewallSlide';
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
  AutonomyStackSlide,     // 6. An OS built for autonomous agents
  ArchitectureStackSlide, // 7. The secure OS — full architecture
  AosEngineSlide,         // 8. Everything else is a capsule
  AosDensitySlide,        // 9. What a multi-tenant agent OS buys
  DdnStorageSlide,        // 10. Agent-native storage
  AosProofSystemSlide,    // 11. Unicity Proof System — verifiable execution
  // — Secure & enterprise-ready —
  DdnSecureSlide,         // 12. Secure by construction
  DeploymentModelHtmlSlide, // 13. Works inside your infrastructure (SIF egress gate)
  AosSecuritySlide,       // 14. It uses the controls you have (RBAC / SSO / SIEM)
  DdnCodewallSlide,       // 15. Product: AOS Codewall
  // — Durability —
  AosMergedSlide,         // 16. Operating systems beat harnesses
  // — Team & momentum —
  TractionSlide,          // 17. Traction
  TeamSlide,              // 18. Team
  DdnCloseSlide,          // 19. Close
];
