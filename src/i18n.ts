// Language selection: ?lang=en | pt  (defaults to en). Read once at load.
export type Lang = 'en' | 'pt';

export const lang: Lang =
  new URLSearchParams(window.location.search).get('lang') === 'pt' ? 'pt' : 'en';

/**
 * Pick the current language's value from a co-located { en, pt } map.
 * Layout lives once in the slide; only the strings swap. Brand names,
 * acronyms and attributed quotes should stay identical across both maps.
 */
export function tr<T>(dict: { en: T; pt: T }): T {
  return dict[lang] ?? dict.en;
}
