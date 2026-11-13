// Brede gids over wonen in Spanje (niet alleen de Axarquía), voor het grote zoekwoord.
// Eigen bestand, zodat andere gidsen in guides.ts kunnen groeien zonder conflicten.
// In nl, en en de staan de gidsen op dezelfde positie (achter guides-praktisch.ts).
//
// Zoekwoorden (Ubersuggest, 13 november 2026):
// - 'wonen in spanje' 880 NL, 110 BE; nog geen positie. Stond als hoofdzoekwoord op /nl/wonen/,
//   maar die pagina gaat alleen over de Axarquía. /nl/wonen/ mikt nu op 'wonen in de axarquia'
//   en linkt naar deze gids; deze gids linkt terug voor wie de regio wil verkennen.
// - 'living in spain' (UK) en 'leben in spanien' (DE) als vertalingen; EN /en/living/ en DE /de/wohnen/
//   blijven op de Axarquía gericht.
// Afbakening met andere gidsen: emigreren-naar-spanje = het papierwerk stap voor stap;
// deze gids = de afweging (regio's, kosten, voor- en nadelen, huren of kopen).
import type { GuideMeta } from './guides';

const published = '2026-11-13';

export const wonenNl: GuideMeta[] = [
  {
    slug: 'wonen-in-spanje',
    title: 'Wonen in Spanje: regio’s, kosten van levensonderhoud, regels en de voor- en nadelen',
    seoTitle: 'Wonen in Spanje: kosten, regels en regio’s (2026)',
    short: 'Wonen in Spanje',
    description: 'Wonen in Spanje als Nederlander of Belg: welke regio past bij u, wat kost het leven er per maand, welke regels gelden er en wat zijn de voor- en nadelen?',
    lead: 'Zon, ruimte en een rustiger leven: elk jaar verruilen duizenden Nederlanders en Belgen hun huis voor een plek in Spanje. Deze gids helpt u kiezen waar, laat zien wat het kost en zet de regels en valkuilen op een rij.',
    keyword: 'wonen in spanje',
    minutes: 12,
    published,
  },
];

export const wonenEn: GuideMeta[] = [
  {
    slug: 'living-in-spain',
    title: 'Living in Spain: regions, cost of living, rules and the pros and cons',
    seoTitle: 'Living in Spain as a Brit: costs, rules and regions (2026)',
    short: 'Living in Spain',
    description: 'Living in Spain as a British expat: which region suits you, what life costs per month, the rules after Brexit, healthcare and the real pros and cons.',
    lead: 'Sunshine, space and a slower pace of life: every year thousands of Britons make the move to Spain. This guide helps you choose where, shows what it really costs and sets out the rules and the pitfalls.',
    keyword: 'living in spain',
    minutes: 12,
    published,
  },
];

export const wonenDe: GuideMeta[] = [
  {
    slug: 'leben-in-spanien',
    title: 'Leben in Spanien: Regionen, Lebenshaltungskosten, Regeln sowie Vor- und Nachteile',
    seoTitle: 'Leben in Spanien: Kosten, Regeln und Regionen (2026)',
    short: 'Leben in Spanien',
    description: 'Leben in Spanien als Deutscher: welche Region passt, was das Leben im Monat kostet, welche Regeln gelten und welche Vor- und Nachteile es wirklich gibt.',
    lead: 'Sonne, Platz und ein ruhigeres Leben: Jedes Jahr ziehen Tausende Deutsche nach Spanien. Dieser Ratgeber hilft bei der Wahl der Region, zeigt die echten Kosten und fasst Regeln und Stolperfallen zusammen.',
    keyword: 'leben in spanien',
    minutes: 11,
    published,
  },
];
