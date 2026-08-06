// Deck config — DDN partnership. Deal up front, then Unicity credibility, the AOS
// technical proof, durability, team/momentum, and a deal-shaped ask. Bespoke slides
// live under src/slides/ddn/; the rest are reused single-source AOS/company slides.
import { DdnIntroSlide } from '../slides/ddn/DdnIntroSlide';
// import { DdnTitleSlide } from '../slides/ddn/DdnTitleSlide'; // hidden — redundant with the intro cover tagline
import { DdnGapSlide } from '../slides/ddn/DdnGapSlide';
import { DdnEvolutionSlide } from '../slides/ddn/DdnEvolutionSlide';
import { WhoWeAreSlide } from '../slides/WhoWeAreSlide';
import { AutonomyStackSlide } from '../slides/AutonomyStackSlide';
// import { ArchitectureStackSlide } from '../slides/ArchitectureStackSlide'; // hidden
import { AosEngineSlide } from '../slides/AosEngineSlide';
import { AosDensitySlide } from '../slides/AosDensitySlide';
import { DdnStorageSlide } from '../slides/ddn/DdnStorageSlide';
// import { AosProofSystemSlide } from '../slides/AosProofSystemSlide'; // hidden
import { DdnSecureSlide } from '../slides/ddn/DdnSecureSlide';
import { DdnAgenticFirewallSlide } from '../slides/ddn/DdnAgenticFirewallSlide';
import { AosSecuritySlide } from '../slides/AosSecuritySlide';
import { DdnCodewallSlide } from '../slides/ddn/DdnCodewallSlide';
import { AosMergedSlide } from '../slides/AosMergedSlide';
import { DdnCloseSlide } from '../slides/ddn/DdnCloseSlide';
import { DdnAskSlide } from '../slides/ddn/DdnAskSlide';
import { DdnUpsideSlide } from '../slides/ddn/DdnUpsideSlide';

export const ddnDeck = [
  // — The deal —
  DdnIntroSlide,          // 1. Co-branded intro cover
  // DdnTitleSlide,       // hidden — redundant with the intro cover tagline
  // DdnGapSlide,         // hidden — "The AI factory stops at the GPU"
  DdnEvolutionSlide,      // 2. Why now — agents recapitulating computing history
  DdnGapSlide,            // 3. The AI factory stops at the GPU
  // — What AOS is (technical proof) —
  AutonomyStackSlide,     // 4. An OS built for autonomous agents
  // ArchitectureStackSlide, // hidden — "The secure OS for agents"
  AosDensitySlide,        // 5. What a multi-tenant agent OS buys
  AosEngineSlide,         // 6. Everything else is a capsule
  DdnStorageSlide,        // 7. Agent-native storage
  // AosProofSystemSlide, // hidden — "Unicity Proof System — verifiable execution"
  // — Secure & enterprise-ready —
  DdnSecureSlide,         // 12. Secure by construction
  DdnAgenticFirewallSlide, // 13. Product: Agentic Firewall (SIF egress gate)
  DdnCodewallSlide,       // 14. Product: Codewall (right after the firewall)
  AosSecuritySlide,       // 15. It uses the controls you have (RBAC / SSO / SIEM)
  // — Durability —
  AosMergedSlide,         // 16. Operating systems beat harnesses
  // — Team & ask —
  WhoWeAreSlide,          // The team
  DdnCloseSlide,          // Close — "agents per node"
  DdnAskSlide,            // The ask — $2M + product partnership
  DdnUpsideSlide,         // The upside — infrastructure + OS pairs (inspire)
];
