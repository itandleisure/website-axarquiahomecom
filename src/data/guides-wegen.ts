// Gids over de toegangsweg naar een finca: onderhoud, afwatering, verharding en wie betaalt.
// Eigen bestand, zodat andere gidsen in guides.ts kunnen groeien zonder conflicten.
// In nl, en en de staat de gids op dezelfde positie (achter de lijsten uit guides.ts);
// de Zweedse versie staat in guides-sv.ts en is gekoppeld via `of`.
import type { GuideMeta } from './guides';

export const wegenNl: GuideMeta[] = [
  {
    slug: 'toegangsweg-finca-spanje',
    title: 'De toegangsweg naar uw finca: onderhoud, afwatering en wie betaalt',
    seoTitle: 'Toegangsweg finca in Spanje: onderhoud en wie betaalt',
    short: 'Toegangsweg finca',
    description: 'Gaten, geulen of een te steile camino naar uw finca? Zo houdt u de toegangsweg in de Axarquía berijdbaar, en zo zit het met eigendom, buren en vergunning.',
    lead: 'Een finca is zo goed bereikbaar als de weg ernaartoe. Na één flinke regenbui kan een onverharde camino vol geulen liggen. Hier leest u hoe u de weg goed houdt, wat de oplossingen zijn en wie er moet betalen.',
    keyword: 'toegangsweg finca',
    minutes: 9,
    published: '2026-11-06',
  },
];

export const wegenEn: GuideMeta[] = [
  {
    slug: 'finca-access-road-spain',
    title: 'The access road to your finca: maintenance, drainage and who pays',
    seoTitle: 'Finca access road in Spain: repairs, drainage, who pays',
    short: 'Finca access road',
    description: 'Potholes, gullies after the rain or a camino that is too steep? How to keep the track to your finca in the Axarquía passable, and who owns and pays for it.',
    lead: 'A finca is only as accessible as the road that leads to it. One heavy downpour can leave an unpaved camino full of gullies. Here is how to keep the track in shape, what the options are and who has to pay.',
    keyword: 'finca access road spain',
    minutes: 9,
    published: '2026-11-06',
  },
];

export const wegenDe: GuideMeta[] = [
  {
    slug: 'zufahrtsweg-finca-spanien',
    title: 'Der Zufahrtsweg zu Ihrer Finca: Instandhaltung, Entwässerung und wer zahlt',
    seoTitle: 'Zufahrtsweg zur Finca in Spanien: Pflege und Kosten',
    short: 'Zufahrtsweg Finca',
    description: 'Schlaglöcher, Rinnen oder ein zu steiler Camino? So bleibt der Weg zu Ihrer Finca in der Axarquía befahrbar, und so sind Eigentum und Kosten geregelt.',
    lead: 'Eine Finca ist nur so gut erreichbar wie der Weg dorthin. Ein einziger Starkregen kann einen unbefestigten Camino voller Rinnen hinterlassen. Hier lesen Sie, wie Sie den Weg in Schuss halten, welche Lösungen es gibt und wer zahlen muss.',
    keyword: 'zufahrtsweg finca spanien',
    minutes: 9,
    published: '2026-11-06',
  },
];
