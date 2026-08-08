// Deck config — video scenes. Full-bleed animated shots to screen-record for the
// AOS launch video (paired with the AutonomyStack 'stack' shot + orb hero clips).
import { AutonomyStackSlide } from '../slides/AutonomyStackSlide';
import { AosKernelScene } from '../slides/video/AosKernelScene';

export const videoDeck = [
  AutonomyStackSlide,   // the stack: AGENT → AOS → PROOF SYSTEM
  AosKernelScene,       // one shared kernel, thousands of agents flashing
];
