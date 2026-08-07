// Deck config — DDN partnership. Deal up front, then Unicity credibility, the AOS
// technical proof, durability, team/momentum, and a deal-shaped ask. Bespoke slides
// live under src/slides/ddnbrand/; the rest are reused single-source AOS/company slides.
import { DdnIntroSlide } from '../slides/ddnbrand/DdnIntroSlide';
// import { DdnTitleSlide } from '../slides/ddnbrand/DdnTitleSlide'; // hidden — redundant with the intro cover tagline
// import { DdnGapSlide } from '../slides/ddnbrand/DdnGapSlide'; // hidden
import { DdnEvolutionSlide } from '../slides/ddnbrand/DdnEvolutionSlide';
import { WhoWeAreSlide } from '../slides/WhoWeAreSlide';
import { AutonomyStackSlide } from '../slides/AutonomyStackSlide';
// import { ArchitectureStackSlide } from '../slides/ArchitectureStackSlide'; // hidden
import { AosEngineSlide } from '../slides/AosEngineSlide';
import { AosDensitySlide } from '../slides/AosDensitySlide';
import { DdnStorageSlide } from '../slides/ddnbrand/DdnStorageSlide';
// import { AosProofSystemSlide } from '../slides/AosProofSystemSlide'; // hidden
import { DdnSecureSlide } from '../slides/ddnbrand/DdnSecureSlide';
import { DdnAgenticFirewallSlide } from '../slides/ddnbrand/DdnAgenticFirewallSlide';
// import { AosSecuritySlide } from '../slides/AosSecuritySlide'; // hidden
import { DdnCodewallSlide } from '../slides/ddnbrand/DdnCodewallSlide';
import { AosMergedSlide } from '../slides/AosMergedSlide';
import { DdnVisionSlide } from '../slides/ddnbrand/DdnVisionSlide';
// import { DdnCloseSlide } from '../slides/ddnbrand/DdnCloseSlide'; // hidden
import { DdnAskSlide } from '../slides/ddnbrand/DdnAskSlide';
// import { DdnRoiSlide } from '../slides/ddnbrand/DdnRoiSlide'; // hidden
import { DdnUpsideSlide } from '../slides/ddnbrand/DdnUpsideSlide';
import { DdnThankYouSlide } from '../slides/ddnbrand/DdnThankYouSlide';

export const ddnbrandDeck = [
  // — The deal —
  DdnIntroSlide,          // 1. Co-branded intro cover
  // DdnTitleSlide,       // hidden — redundant with the intro cover tagline
  DdnEvolutionSlide,      // 2. Why now — agents recapitulating computing history
  // DdnGapSlide,         // hidden — "The AI factory stops at the GPU"
  // — What AOS is (technical proof) —
  AutonomyStackSlide,     // 4. An OS built for autonomous agents
  // ArchitectureStackSlide, // hidden — "The secure OS for agents"
  AosDensitySlide,        // 5. What a multi-tenant agent OS buys
  AosMergedSlide,         // Operating systems beat harnesses
  AosEngineSlide,         // 6. Everything else is a capsule
  DdnStorageSlide,        // 7. Agent-native storage
  // AosProofSystemSlide, // hidden — "Unicity Proof System — verifiable execution"
  // — Secure & enterprise-ready —
  DdnSecureSlide,         // 12. Secure by construction
  DdnAgenticFirewallSlide, // 13. Product: Agentic Firewall (SIF egress gate)
  DdnCodewallSlide,       // 14. Product: Codewall (right after the firewall)
  // AosSecuritySlide,    // hidden — It uses the controls you have (RBAC / SSO / SIEM)
  // — Vision —
  DdnVisionSlide,         // Our vision — autonomous, verifiable AI, secure by construction
  // — Team & ask —
  WhoWeAreSlide,          // The team
  // DdnCloseSlide,       // hidden — Close "agents per node"
  // DdnRoiSlide,         // hidden — The economics, three multipliers
  DdnUpsideSlide,         // The upside — infrastructure + OS pairs (inspire)
  DdnAskSlide,            // The ask — $2M + product partnership (penultimate)
  DdnThankYouSlide,       // Thank you + contact
];
