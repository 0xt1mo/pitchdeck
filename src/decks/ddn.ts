// Deck config — DDN partnership. Bespoke 8-slide partnership pitch (partnership thesis
// up front, then just enough proof). Slides under src/slides/ddn/; reuses shared slides
// (e.g. AosDensitySlide) where the outline maps to them. Built out slide by slide.
import { DdnTitleSlide } from '../slides/ddn/DdnTitleSlide';
import { DdnGapSlide } from '../slides/ddn/DdnGapSlide';

export const ddnDeck = [
  DdnTitleSlide,
  DdnGapSlide,
];
