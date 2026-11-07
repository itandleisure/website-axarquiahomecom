// Foto's bij gidsen en kosten-, probleem- en zelf-doen-pagina's (stockfoto's uit Canva Pro,
// commercieel gebruik toegestaan; geen eigen projecten).
// Bestanden: public/images/onderwerpen/<naam>-<480|800|1200>.webp en public/images/og/<naam>.jpg.
import type { Lang } from '../i18n';
import { photoWidths } from './place-photos';

interface TopicPhoto { alt: Record<Lang, string>; }

const photos: Record<string, TopicPhoto> = {
  'isolatie-steenwol-tussen-balken': { alt: {
    nl: 'Isolatiedeken van minerale wol wordt met werkhandschoenen tussen houten balken gelegd',
    en: 'Mineral wool insulation being laid between timber joists by hands in work gloves',
    de: 'Mineralwolle-Dämmung wird mit Arbeitshandschuhen zwischen Holzbalken verlegt',
    sv: 'Isolering av mineralull läggs mellan träbjälkar med arbetshandskar',
  } },
  'isolatie-glaswol-close-up': { alt: {
    nl: 'Close-up van gele glaswol-isolatie, zoals gebruikt in een voorzetwand of op zolder',
    en: 'Close-up of yellow glass wool insulation, as used in an internal wall lining or loft',
    de: 'Nahaufnahme gelber Glaswolle-Dämmung, wie sie in Vorsatzschalen oder auf dem Dachboden verwendet wird',
    sv: 'Närbild av gul glasull, som används i en isolerad innervägg eller på vinden',
  } },
  'vocht-afbladderende-verf-muur': { alt: {
    nl: 'Afbladderende verf en losgeraakt pleisterwerk op een muur door vocht',
    en: 'Paint flaking and plaster coming away from a wall because of damp',
    de: 'Abblätternde Farbe und loser Putz an einer Wand durch Feuchtigkeit',
    sv: 'Flagnande färg och lossnande puts på en vägg på grund av fukt',
  } },
  'lekkage-vlek-plafond-hoek': { alt: {
    nl: 'Waterschade in de hoek van een plafond: een vochtvlek met bladderende verf na een lekkage',
    en: 'Water damage in the corner of a ceiling: a damp stain with peeling paint after a leak',
    de: 'Wasserschaden in einer Deckenecke: ein Feuchtigkeitsfleck mit abblätternder Farbe nach einem Leck',
    sv: 'Vattenskada i ett hörn av taket: en fuktfläck med flagnande färg efter ett läckage',
  } },
  'schimmel-onderaan-muur-plint': { alt: {
    nl: 'Zwarte schimmelvlekken onderaan een witte binnenmuur, vlak boven de plint',
    en: 'Black mould spots at the bottom of a white interior wall, just above the skirting board',
    de: 'Schwarze Schimmelflecken unten an einer weißen Innenwand, direkt über der Sockelleiste',
    sv: 'Svarta mögelfläckar längst ner på en vit innervägg, strax ovanför golvlisten',
  } },
  'condens-schimmel-raam': { alt: {
    nl: 'Condens op het glas en schimmel in de hoek naast een raam, met een doek op de vensterbank tegen het water',
    en: 'Condensation on the glass and mould in the corner beside a window, with a cloth on the sill to catch the water',
    de: 'Kondenswasser an der Scheibe und Schimmel in der Ecke neben einem Fenster, mit einem Tuch gegen das Wasser',
    sv: 'Kondens på glaset och mögel i hörnet bredvid ett fönster, med en trasa som fångar upp vattnet',
  } },
  'zonnepanelen-pannendak': { alt: {
    nl: 'Zonnepanelen op een dak met rode dakpannen en gemetselde schoorstenen',
    en: 'Solar panels on a roof with red clay tiles and brick chimneys',
    de: 'Solarmodule auf einem Dach mit roten Tonziegeln und gemauerten Schornsteinen',
    sv: 'Solpaneler på ett tak med röda tegelpannor och murade skorstenar',
  } },
  'zonnepaneel-off-grid-paal': { alt: {
    nl: 'Los zonnepaneel op een paal met een kastje voor de aansluiting, tegen een blauwe lucht',
    en: 'Stand-alone solar panel on a pole with a connection box, against a blue sky',
    de: 'Einzelnes Solarmodul an einem Mast mit Anschlusskasten vor blauem Himmel',
    sv: 'Fristående solpanel på en stolpe med en kopplingslåda, mot en blå himmel',
  } },
  'zonnepanelen-schoonmaken-borstel': { alt: {
    nl: 'Zonnepanelen worden met een borstel en water schoongemaakt',
    en: 'Solar panels being cleaned with a brush and water',
    de: 'Solarmodule werden mit Bürste und Wasser gereinigt',
    sv: 'Solpaneler rengörs med en borste och vatten',
  } },
  'zonnepanelen-stof-schoonmaken': { alt: {
    nl: 'Stoffig zonnepaneel wordt met een wisser aan een steel schoongemaakt',
    en: 'A dusty solar panel being cleaned with a squeegee on a pole',
    de: 'Ein staubiges Solarmodul wird mit einem Wischer an einer Stange gereinigt',
    sv: 'En dammig solpanel rengörs med en skrapa på ett skaft',
  } },
  'laadpaal-installeren-meterkast': { alt: {
    nl: 'Elektricien sluit een laadpaal voor de auto aan in de meterkast, met de laadkabel aan de muur',
    en: 'Electrician wiring a home EV charger into the consumer unit, with the charging cable on the wall',
    de: 'Elektriker schließt eine Wallbox im Sicherungskasten an, daneben das Ladekabel an der Wand',
    sv: 'Elektriker kopplar in en laddbox för bilen i elcentralen, med laddkabeln på väggen',
  } },
  'elektrische-auto-laadpaal-buiten': { alt: {
    nl: 'Elektrische auto aan een laadpaal buiten, voor een bakstenen muur',
    en: 'Electric car plugged into an outdoor charging post in front of a brick wall',
    de: 'Elektroauto an einer Ladesäule im Freien vor einer Backsteinmauer',
    sv: 'Elbil kopplad till en laddstolpe utomhus framför en tegelvägg',
  } },
  'elektrische-auto-laadstekker': { alt: {
    nl: 'Laadstekker in de laadklep van een elektrische auto',
    en: 'Charging plug in the charging port of an electric car',
    de: 'Ladestecker in der Ladebuchse eines Elektroautos',
    sv: 'Laddkontakt i laddluckan på en elbil',
  } },
};

interface Placement { lead: string; /** Tweede foto direct onder de kop van de sectie met dit volgnummer (vanaf 0; ids verschillen per taal) */ inline?: { section: number; photo: string }; }

/** Kosten-, probleem- en zelf-doen-pagina's, per `kind:key` (geldt voor alle talen). */
const topicPlacements: Record<string, Placement> = {
  'problems:vocht': { lead: 'schimmel-onderaan-muur-plint', inline: { section: 0, photo: 'vocht-afbladderende-verf-muur' } },
  'problems:tocht': { lead: 'condens-schimmel-raam' },
  'problems:daklekkage': { lead: 'lekkage-vlek-plafond-hoek' },
  'costs:ramen': { lead: 'condens-schimmel-raam' },
  'costs:dak': { lead: 'lekkage-vlek-plafond-hoek' },
  'diy:witten': { lead: 'vocht-afbladderende-verf-muur' },
  'diy:ramen': { lead: 'condens-schimmel-raam' },
  'costs:zonnepanelen': { lead: 'zonnepanelen-pannendak', inline: { section: 2, photo: 'zonnepanelen-stof-schoonmaken' } },
  'costs:thuisbatterij': { lead: 'zonnepanelen-pannendak' },
  'costs:energiebeheer': { lead: 'zonnepanelen-pannendak' },
  'costs:laadpaal': { lead: 'laadpaal-installeren-meterkast', inline: { section: 2, photo: 'elektrische-auto-laadpaal-buiten' } },
};

/** Gidsen, per slug. De tweede foto staat in de gidspagina zelf (component ArticlePhoto). */
const guidePlacements: Record<string, string> = {
  'huis-isoleren-spanje': 'isolatie-steenwol-tussen-balken',
  'insulating-your-house-in-spain': 'isolatie-steenwol-tussen-balken',
  'haus-daemmen-spanien': 'isolatie-steenwol-tussen-balken',
  'waterlekkage-spanje': 'lekkage-vlek-plafond-hoek',
  'water-leak-spain': 'lekkage-vlek-plafond-hoek',
  'wasserschaden-spanien': 'lekkage-vlek-plafond-hoek',
  'off-grid-wonen-spanje': 'zonnepaneel-off-grid-paal',
  'off-grid-living-spain': 'zonnepaneel-off-grid-paal',
  'virtuele-batterij-spanje': 'zonnepanelen-pannendak',
  'virtual-battery-spain': 'zonnepanelen-pannendak',
  'virtuelle-batterie-spanien': 'zonnepanelen-pannendak',
  'energieleveranciers-spanje-vergelijken': 'zonnepanelen-pannendak',
  'stromanbieter-spanien-vergleich': 'zonnepanelen-pannendak',
  'subsidie-verduurzamen-spanje': 'zonnepanelen-pannendak',
  'energy-efficiency-grants-spain': 'zonnepanelen-pannendak',
  'foerderung-energetische-sanierung-spanien': 'zonnepanelen-pannendak',
};

export interface ArticleImage { alt: string; src: string; srcset: string; og: string; }

export function topicPhoto(name: string, lang: Lang): ArticleImage | undefined {
  const p = photos[name];
  if (!p) return undefined;
  const base = `/images/onderwerpen/${name}`;
  return { alt: p.alt[lang], src: `${base}-800.webp`, srcset: photoWidths.map((w) => `${base}-${w}.webp ${w}w`).join(', '), og: `/images/og/${name}.jpg` };
}

export function topicPhotos(kind: string, key: string, lang: Lang) {
  const pl = topicPlacements[`${kind}:${key}`];
  if (!pl) return { lead: undefined, inline: undefined };
  return {
    lead: topicPhoto(pl.lead, lang),
    inline: pl.inline ? { section: pl.inline.section, photo: topicPhoto(pl.inline.photo, lang)! } : undefined,
  };
}

export const guidePhoto = (slug: string, lang: Lang) => (guidePlacements[slug] ? topicPhoto(guidePlacements[slug], lang) : undefined);
