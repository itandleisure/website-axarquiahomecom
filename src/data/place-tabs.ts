// De tabs bovenaan een plaatspagina: Overzicht, Zien en doen, Wonen, Bouwvergunning, Praktisch.
// Bouwvergunning en Praktisch bestaan alleen voor gemeenten; een kern linkt naar de pagina's van zijn gemeente.
import type { Lang } from '../i18n';
import { placeBySlug, placeHref, type Place, type PlacePage } from './places';
import { placeContent } from './place-content';
import { municipalSlugFor } from './municipal';
import { municipalLangs, type MunicipalLang } from './municipal-text';
import { fiestaHref, fiestaSlugFor } from './fiestas';
import { weatherPlaceBySlug, weatherPlaceHref, type WLang } from './weather';
const weatherLabels: Record<WLang, string> = { nl: 'Weer', en: 'Weather', de: 'Wetter' };

export type PlaceTab = PlacePage | 'fiestas' | 'weather';
const fiestaLabels: Record<Lang, string> = { nl: 'Feesten', en: 'Fiestas', de: 'Feste', sv: 'Fester' };

export const tabLabels: Record<Lang, Record<PlacePage, string>> = {
  nl: { overview: 'Overzicht', see: 'Zien en doen', living: 'Wonen', permit: 'Bouwvergunning', practical: 'Praktisch' },
  en: { overview: 'Overview', see: 'Things to do', living: 'Living', permit: 'Building permit', practical: 'Practical' },
  de: { overview: 'Überblick', see: 'Sehenswertes', living: 'Wohnen', permit: 'Baugenehmigung', practical: 'Praktisches' },
  sv: { overview: 'Översikt', see: 'Se och göra', living: 'Bo', permit: 'Bygglov', practical: 'Praktiskt' },
};

/** Heeft deze gemeente pagina's Bouwvergunning en Praktisch in deze taal? */
export const hasMunicipalPages = (lang: Lang, p: Place) =>
  p.built && p.kind === 'gemeente' && municipalLangs.includes(lang as MunicipalLang) && !!municipalSlugFor(p) && !!placeContent[p.slug]?.[lang];

export function placeTabs(lang: Lang, place: Place): { page: PlaceTab; label: string; href: string }[] {
  const c = placeContent[place.slug]?.[lang];
  const L = tabLabels[lang];
  const tabs: { page: PlaceTab; label: string; href: string }[] = [{ page: 'overview', label: L.overview, href: placeHref(lang, place) }];
  if (c?.see) tabs.push({ page: 'see', label: L.see, href: placeHref(lang, place, 'see') });
  if (c?.living) tabs.push({ page: 'living', label: L.living, href: placeHref(lang, place, 'living') });
  const muni = hasMunicipalPages(lang, place) ? place : place.municipality ? placeBySlug(place.municipality) : undefined;
  if (muni && hasMunicipalPages(lang, muni)) {
    tabs.push({ page: 'permit', label: L.permit, href: placeHref(lang, muni, 'permit') });
    tabs.push({ page: 'practical', label: L.practical, href: placeHref(lang, muni, 'practical') });
  }
  // Feesten: eigen pagina, of bij een kern die van de gemeente
  const fiestaSlug = fiestaSlugFor(place.slug, place.municipality);
  if (fiestaSlug && (lang === 'nl' || lang === 'en' || lang === 'de' || lang === 'sv')) {
    tabs.push({ page: 'fiestas', label: fiestaLabels[lang], href: fiestaHref(lang, fiestaSlug) });
  }
  // Weer: alleen voor plaatsen met een eigen weerpagina (NL/EN/DE)
  if (weatherPlaceBySlug(place.slug) && (lang === 'nl' || lang === 'en' || lang === 'de')) {
    tabs.push({ page: 'weather', label: weatherLabels[lang], href: weatherPlaceHref(lang, place.slug) });
  }
  return tabs;
}
