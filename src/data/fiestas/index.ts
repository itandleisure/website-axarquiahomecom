import type { PlaceFiestas, FLang } from './types';
// Elke gemeente heeft een eigen bestand in ./places/<slug>.ts
const files = import.meta.glob<{ default: PlaceFiestas }>('./places/*.ts', { eager: true });
export const fiestas: Record<string, PlaceFiestas> = Object.fromEntries(
  Object.entries(files).map(([f, m]) => [f.replace(/^\.\/places\/|\.ts$/g, ''), m.default]),
);

/** Paden van de feestpagina's per taal */
export const fiestaSub: Record<FLang, string> = { nl: 'feesten', en: 'fiestas', de: 'feste', sv: 'fester' };
export const fiestaPlaceBase: Record<FLang, string> = { nl: '/nl/plaatsen/', en: '/en/places/', de: '/de/orte/', sv: '/sv/orter/' };
export const fiestaHref = (lang: FLang, slug: string) => `${fiestaPlaceBase[lang]}${slug}/${fiestaSub[lang]}/`;
/** Regionale kalender met alle feesten van de Axarquía */
export const fiestaCalendar: Record<FLang, string> = { nl: '/nl/feesten/', en: '/en/fiestas/', de: '/de/feste/', sv: '/sv/fester/' };
/** Voor een kern: de gemeente waarvan de feestpagina de feesten van de kern beschrijft */
export const fiestaSlugFor = (slug: string, municipality?: string) => (fiestas[slug] ? slug : municipality && fiestas[municipality] ? municipality : undefined);
