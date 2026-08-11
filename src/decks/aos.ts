// Deck config — Unicity AOS product deck. Rebuilt to lead with the machine-internet
// thesis, the OS technical proof, the Codewall firewall product, then where it lands
// (AI infra / telco / government) and editions. Slides live single-source in ../slides.

// — Open —
import { TitleSlide } from '../slides/TitleSlide';
import { CoverSlide } from '../slides/CoverSlide';
import { EvolutionSlide } from '../slides/EvolutionSlide';

// — The OS —
import { AutonomyStackSlide } from '../slides/AutonomyStackSlide';
import { AosDensitySlide } from '../slides/AosDensitySlide';
import { AosMergedSlide } from '../slides/AosMergedSlide';
import { AosEngineSlide } from '../slides/AosEngineSlide';
import { AosProofSystemSlide } from '../slides/AosProofSystemSlide';

// — Secure + Codewall (the firewall for coding agents) —
import { AosSecuritySlide } from '../slides/AosSecuritySlide';
import { CodewallProblemSlide } from '../slides/CodewallProblemSlide';
import { AgentFirewallSlide } from '../slides/AgentFirewallSlide';
import { FailClosedSlide } from '../slides/FailClosedSlide';
import { FirewallProofSlide } from '../slides/FirewallProofSlide';

// — Edge —
import { CompetitionMinimalSlide } from '../slides/CompetitionMinimalSlide';

// — Where it lands —
import { AiInfraSlide } from '../slides/AiInfraSlide';
import { ConciergeSlide } from '../slides/ConciergeSlide';
import { GoToMarketSlide } from '../slides/GoToMarketSlide';
import { GtmEditionsSlide } from '../slides/GtmEditionsSlide';

// — Close —
import { VisionSlide } from '../slides/VisionSlide';
import { TeamSlide } from '../slides/TeamSlide';
import { AosThankYouSlide } from '../slides/AosThankYouSlide';

export const aosDeck = [
  // Open
  TitleSlide,             // Cover — the operating system for autonomous AI
  CoverSlide,             // Thesis — the internet machines need doesn't exist yet
  EvolutionSlide,         // Why now — AI agents speedrunning compute history

  // The OS
  AutonomyStackSlide,     // Unicity AOS: an OS built for autonomous agents
  AosDensitySlide,        // What a multi-tenant agent OS buys
  AosMergedSlide,         // Operating systems beat harnesses
  AosEngineSlide,         // Everything else is a capsule
  AosProofSystemSlide,    // Verifiable execution — the proof system

  // Secure + Codewall
  AosSecuritySlide,       // Secure by construction — uses the controls you have
  CodewallProblemSlide,   // Coding agents are the new attack surface
  AgentFirewallSlide,     // AOS Codewall — the firewall for coding agents (BLOCKED demo)
  FailClosedSlide,        // Fail-closed by default
  FirewallProofSlide,     // Proof of every step

  // Edge
  CompetitionMinimalSlide, // Why we win

  // Where it lands
  AiInfraSlide,           // The OS inside sovereign AI data centers (OEM channel)
  ConciergeSlide,         // Telco — a personal agent for high-ARPU subscribers
  GoToMarketSlide,        // Government — the agentic state
  GtmEditionsSlide,       // Editions — Community / Enterprise / Industry + pricing

  // Close
  VisionSlide,            // Our vision — autonomous, verifiable AI, secure by construction
  TeamSlide,              // The team
  AosThankYouSlide,       // Thank you
];
