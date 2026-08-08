// Deck config — video scenes. Full-bleed animated shots to screen-record for the
// AOS launch video (paired with the AutonomyStack 'stack' shot + orb hero clips).
import { AosStackScene } from '../slides/video/AosStackScene';
import { AosKernelScene } from '../slides/video/AosKernelScene';

export const videoDeck = [
  AosStackScene,        // title + AGENT → AOS → PROOF SYSTEM stack (no supporting copy)
  AosKernelScene,       // one shared kernel, thousands of agents flashing
];
