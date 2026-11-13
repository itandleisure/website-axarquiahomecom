// Alle gratis checklists (lead magnets): teksten, foto's voor de pdf en onder welke gidsen ze staan.
// Nieuwe checklist? Voeg hem hier toe, maak per taal een landingspagina (src/pages/<taal>/<pad>.astro)
// en een route in src/i18n.ts, en zet de pdf-mail in apps-script/Code.gs (CHECKLISTS).
import type { Lang } from '../i18n';
import { langs } from '../i18n';
import { checklist, type ChecklistText } from './checklist';
import { renoveren } from './checklist-renoveren';
import { onderhoud } from './checklist-onderhoud';
import { emigreren } from './checklist-emigreren';
import { verkopen } from './checklist-verkopen';
import { guidesBy, guideAt } from './guides';

export type ChecklistId = 'kopen' | 'renoveren' | 'onderhoud' | 'emigreren' | 'verkopen';

export const checklists: Record<ChecklistId, Partial<Record<Lang, ChecklistText>>> = {
  kopen: checklist,
  renoveren,
  onderhoud,
  emigreren,
  verkopen,
};

export const checklistIds = Object.keys(checklists) as ChecklistId[];

/**
 * Foto's in de pdf (jpg's in public/images/print/). cover en cta zijn bewerkte versies met de
 * donkere of terracotta overloop al in de foto; coverPhoto is de originele foto (voor het bijschrift).
 */
export interface PrintPhotos {
  cover: string;
  coverPhoto: string;
  strip: [string, string, string];
  /** Sfeerfoto boven elk hoofdstuk, in volgorde van sections */
  banners: string[];
  questions: string;
  spot: [string, string];
  /** Na welk hoofdstuk (index in sections) het blok met de twee probleemfoto's komt */
  spotAt: number;
  cta: string;
  /** Zoekterm voor de link naar de bijbehorende gids op de landingspagina (NL-slug) */
  guide: string;
}

export const printPhotos: Record<ChecklistId, PrintPhotos> = {
  kopen: {
    cover: 'omslag-competa', coverPhoto: 'competa-panorama-sierra-almijara',
    strip: ['frigiliana-blauwe-deuren', 'nerja-baai-strand-kliffen', 'canillas-de-albaida-balkons-bloemen'],
    banners: ['nerja-strand-kustlijn', 'canillas-de-albaida-pleintje-kerk', 'competa-kerktoren-dorp', 'canillas-de-albaida-uitzicht-dal', 'frigiliana-panorama-witte-dorp'],
    questions: 'frigiliana-trappen-oude-wijk',
    spot: ['vocht-afbladderende-verf-muur', 'lekkage-vlek-plafond-hoek'], spotAt: 1,
    cta: 'slot-nerja',
    guide: 'finca-kopen-in-spanje',
  },
  renoveren: {
    cover: 'omslag-renoveren', coverPhoto: 'frigiliana-steegje-mozaiek',
    strip: ['competa-panorama-sierra-almijara', 'frigiliana-dorpsplein', 'nerja-uitzicht-bougainville'],
    banners: ['competa-kerktoren-dorp', 'frigiliana-winkelstraatje', 'canillas-de-albaida-steegje-bloempotten', 'nerja-witte-huizen-zee', 'canillas-de-albaida-uitzicht-dal'],
    questions: 'frigiliana-blauwe-deuren',
    spot: ['schimmel-onderaan-muur-plint', 'isolatie-steenwol-tussen-balken'], spotAt: 0,
    cta: 'slot-renoveren',
    guide: 'kosten-huis-renoveren-spanje',
  },
  onderhoud: {
    cover: 'omslag-onderhoud', coverPhoto: 'canillas-de-albaida-steegje-bloempotten',
    strip: ['frigiliana-panorama-witte-dorp', 'nerja-uitkijkpunt-kliffen', 'competa-wit-straatje'],
    banners: ['canillas-de-albaida-balkons-bloemen', 'frigiliana-trappen-oude-wijk', 'frigiliana-blauwe-deuren', 'competa-panorama-sierra-almijara', 'nerja-witte-huizen-zee'],
    questions: 'canillas-de-albaida-pleintje-kerk',
    spot: ['lekkage-vlek-plafond-hoek', 'condens-schimmel-raam'], spotAt: 2,
    cta: 'slot-onderhoud',
    guide: 'huis-winterklaar-spanje',
  },
  emigreren: {
    cover: 'omslag-emigreren', coverPhoto: 'nerja-strand-kustlijn',
    strip: ['frigiliana-dorpsplein', 'torre-del-mar-boulevard-luchtfoto', 'canillas-de-albaida-balkons-bloemen'],
    banners: ['competa-panorama-sierra-almijara', 'frigiliana-winkelstraatje', 'nerja-uitzicht-bougainville', 'canillas-de-albaida-pleintje-kerk', 'torre-del-mar-strand-luchtfoto'],
    questions: 'frigiliana-blauwe-deuren',
    spot: ['isolatie-steenwol-tussen-balken', 'condens-schimmel-raam'], spotAt: 4,
    cta: 'slot-emigreren',
    guide: 'emigreren-naar-spanje',
  },
  verkopen: {
    cover: 'omslag-verkopen', coverPhoto: 'frigiliana-panorama-witte-dorp',
    strip: ['nerja-witte-huizen-zee', 'competa-kerktoren-dorp', 'frigiliana-steegje-mozaiek'],
    banners: ['canillas-de-albaida-pleintje-kerk', 'competa-wit-straatje', 'nerja-baai-strand-kliffen', 'frigiliana-trappen-oude-wijk', 'torre-del-mar-strand-luchtfoto'],
    questions: 'nerja-uitkijkpunt-kliffen',
    spot: ['vocht-afbladderende-verf-muur', 'lekkage-vlek-plafond-hoek'], spotAt: 1,
    cta: 'slot-verkopen',
    guide: 'huis-verkopen-spanje',
  },
};

/** Onder welke gidsen (NL-slug) welk inschrijfblok staat. Vertalingen volgen via guideAt. */
const byNlSlug: Record<string, ChecklistId> = {};
const add = (id: ChecklistId, slugs: string[]) => slugs.forEach((s) => (byNlSlug[s] = id));
add('kopen', [
  'finca-kopen-in-spanje', 'kosten-koper-spanje', 'huis-kopen-malaga-andalusie', 'afo-legaliseren-andalusie',
  'finca-appartement-of-dorpshuis', 'finca-appartement-of-dorpshuis-gezinnen', 'finca-appartement-of-dorpshuis-gepensioneerden',
  'finca-appartement-of-dorpshuis-bed-and-breakfast', 'finca-appartement-of-dorpshuis-vakantiehuis',
  'huis-kopen-in-spanje', 'huis-kopen-in-spanje-checklist', 'huis-kopen-in-spanje-bed-and-breakfast', 'huis-flippen-spanje',
]);
add('renoveren', [
  'kosten-huis-renoveren-spanje', 'bouwen-op-eigen-grond-spanje', 'bouwen-op-eigen-grond-carport-en-pergola',
  'bouwen-op-eigen-grond-pergola-bouwen', 'bouwen-op-eigen-grond-garage', 'bouwen-op-eigen-grond-gastenverblijf',
  'bouwen-op-eigen-grond-buitenkeuken', 'bouwen-op-eigen-grond-barbecue-appartement', 'bouwen-op-eigen-grond-uitbouw-en-terras-dichtmaken',
  'vergunning-verbouwen-andalusie', 'vloer-kiezen-spanje', 'badkamer-douche-of-bad', 'levensloopbestendig-maken-spanje',
  'verbouwen-op-afstand-spanje', 'dorpshuis-renoveren-spanje', 'asbest-uralita-dak-spanje', 'huis-isoleren-spanje',
  'leidingen-en-boiler-vervangen-spanje', 'renovatie-factuur-of-cash-spanje', '3d-ontwerp-verbouwing', 'aannemer-costa-del-sol',
  'subsidie-verduurzamen-spanje', 'energielabel-spanje', 'verwarmen-en-koelen-spanje',
]);
add('onderhoud', [
  'huis-winterklaar-spanje', 'verzekering-huis-spanje', 'waterfilter-spanje', 'waterlekkage-spanje', 'gevel-witten-schilderen-spanje',
  'zonwering-rolluiken-horren-spanje', 'beveiliging-huis-spanje', 'tuin-en-perceel-spanje', 'toegangsweg-finca-spanje',
  'zwembad-onderhoud-spanje', 'ongedierte-bestrijden-spanje', 'off-grid-wonen-spanje', 'virtuele-batterij-spanje',
  'energieleveranciers-spanje-vergelijken',
]);
add('emigreren', [
  'emigreren-naar-spanje', 'wonen-in-de-axarquia', 'overwinteren-in-spanje', 'belastingkalender-spanje', 'autoverzekering-spanje',
  'met-huisdier-naar-spanje',
]);
add('verkopen', ['huis-verkopen-spanje', 'huis-verkopen-spanje-papieren', 'huis-verkopen-spanje-opknappen', 'woning-verhuren-spanje']);

/** Slugs uit byNlSlug die niet (meer) bestaan; wordt bij de build gemeld. */
export const unknownChecklistSlugs = Object.keys(byNlSlug).filter((s) => !guidesBy.nl.some((g) => g.slug === s));

const bySlug = new Map<string, ChecklistId>();
guidesBy.nl.forEach((g, i) => {
  const id = byNlSlug[g.slug];
  if (!id) return;
  for (const lang of langs) {
    const t = guideAt(lang, i);
    if (t) bySlug.set(`${lang}:${t.slug}`, id);
  }
});

/** De checklist die onder deze gids hoort, als die in deze taal bestaat. */
export const checklistFor = (lang: Lang, slug: string): ChecklistId | undefined => {
  const id = bySlug.get(`${lang}:${slug}`);
  return id && checklists[id][lang] ? id : undefined;
};

/** De gids (NL-slug) die bij een checklist hoort, in de gevraagde taal. */
export const checklistGuide = (lang: Lang, id: ChecklistId) => {
  const i = guidesBy.nl.findIndex((g) => g.slug === printPhotos[id].guide);
  return i >= 0 ? guideAt(lang, i) : undefined;
};
