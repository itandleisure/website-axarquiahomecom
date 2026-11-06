// Link naar een plaats op naam: naar de gevraagde subpagina (bijv. Wonen) als die bestaat,
// anders naar de overzichtspagina van de plaats, en als die er nog niet is naar het overzicht van alle plaatsen.
import type { Lang } from '../i18n';
import { places, placeHref, placeBase, type PlacePage } from './places';
import { placeContent } from './place-content';

export function placeLinkByName(lang: Lang, name: string, page: PlacePage = 'overview'): string {
  const p = places.find((x) => x.name === name);
  const c = p && p.built ? placeContent[p.slug]?.[lang] : undefined;
  if (!p || !c) return placeBase[lang];
  if (page !== 'overview' && c[page]) return placeHref(lang, p, page);
  return placeHref(lang, p);
}

/** Zelfde als placeLinkByName, maar geeft undefined als de plaats (nog) geen eigen pagina heeft. */
export function placeLinkIfExists(lang: Lang, name: string, page: PlacePage = 'overview'): string | undefined {
  const p = places.find((x) => x.name === name);
  return p && p.built && placeContent[p.slug]?.[lang] ? placeLinkByName(lang, name, page) : undefined;
}
