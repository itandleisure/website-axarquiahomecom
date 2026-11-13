// Gidsen bij de diensten: zwembadonderhoud en een aannemer aan de Costa del Sol kiezen.
// Eigen bestand, zodat andere gidsen in guides.ts kunnen groeien zonder conflicten.
// In nl, en en de staan de gidsen op dezelfde positie (achter de lijsten uit guides.ts en guides-wegen.ts);
// de Zweedse versies staan in guides-sv.ts en zijn gekoppeld via `of`.
// Zoekwoorden uit Ubersuggest (november 2026): 'zwembad onderhoud spanje' en 'aannemer costa del sol'.
// Let op kannibalisatie: de dienstpagina /nl/zwembad/ mikt op bouwen en renoveren, deze gids op onderhoud.
// /nl/renovatie/ mikt op 'nederlandse aannemer spanje', de gids verbouwen-op-afstand op offertes en betalen.
import type { GuideMeta } from './guides';

const published = '2026-11-06';

export const dienstenNl: GuideMeta[] = [
  {
    slug: 'zwembad-onderhoud-spanje',
    title: 'Zwembad onderhoud in Spanje: wat er per week en per seizoen moet gebeuren',
    seoTitle: 'Zwembad onderhoud in Spanje: schema en tips',
    short: 'Zwembad onderhoud',
    description: 'Zwembad onderhoud in Spanje: wat u wekelijks en per seizoen doet, hoe u kalk, algen en waterverlies voorkomt en wie het bad bijhoudt als u in Nederland bent.',
    lead: 'Een zwembad in de Axarquía staat in de zomer onder zware druk van zon, stof en verdamping, en in de winter vaak maandenlang zonder eigenaar. Met een vast schema blijft het water helder en de techniek heel.',
    keyword: 'zwembad onderhoud spanje',
    minutes: 8,
    published,
  },
  {
    slug: 'aannemer-costa-del-sol',
    title: 'Een aannemer aan de Costa del Sol vinden: zo kiest u goed',
    seoTitle: 'Aannemer Costa del Sol: zo vindt u een goede',
    short: 'Aannemer Costa del Sol',
    description: 'Een aannemer zoeken aan de Costa del Sol of in de Axarquía? Zo controleert u een bouwbedrijf, herkent u waarschuwingssignalen en plant u de verbouwing slim.',
    lead: 'Aan de Costa del Sol zijn honderden aannemers actief, van grote constructoras tot klusjesmannen met een busje. Het verschil zit in papieren, verzekering en afspraken. Zo vindt u er een die u kunt vertrouwen.',
    keyword: 'aannemer costa del sol',
    minutes: 9,
    published,
  },
];

export const dienstenEn: GuideMeta[] = [
  {
    slug: 'pool-maintenance-spain',
    title: 'Pool maintenance in Spain: what to do each week and each season',
    seoTitle: 'Pool maintenance in Spain: schedule and tips',
    short: 'Pool maintenance',
    description: 'Pool maintenance in Spain: weekly and seasonal tasks, how to prevent limescale, algae and water loss, and who looks after the pool while you are away.',
    lead: 'A pool in the Axarquía works hard in summer, with sun, dust and evaporation, and in winter it often sits for months without its owner. A fixed routine keeps the water clear and the equipment working.',
    keyword: 'pool maintenance spain',
    minutes: 8,
    published,
  },
  {
    slug: 'builders-costa-del-sol',
    title: 'Finding a builder on the Costa del Sol: how to choose well',
    seoTitle: 'Builders on the Costa del Sol: how to find a good one',
    short: 'Builders Costa del Sol',
    description: 'Looking for a builder on the Costa del Sol or in the Axarquía? How to check a building company, spot the warning signs and plan your renovation sensibly.',
    lead: 'Hundreds of builders work on the Costa del Sol, from large constructoras to one-man bands with a van. The difference lies in paperwork, insurance and clear agreements. Here is how to find one you can trust.',
    keyword: 'builders costa del sol',
    minutes: 9,
    published,
  },
];

export const dienstenDe: GuideMeta[] = [
  {
    slug: 'poolpflege-spanien',
    title: 'Poolpflege in Spanien: was jede Woche und jede Saison zu tun ist',
    seoTitle: 'Poolpflege in Spanien: Plan und Tipps',
    short: 'Poolpflege',
    description: 'Poolpflege in Spanien: was Sie wöchentlich und je Saison tun, wie Sie Kalk, Algen und Wasserverlust vermeiden und wer den Pool betreut, wenn Sie weg sind.',
    lead: 'Ein Pool in der Axarquía hat es im Sommer schwer, mit Sonne, Staub und Verdunstung, und im Winter steht er oft monatelang ohne Eigentümer. Mit einem festen Plan bleibt das Wasser klar und die Technik intakt.',
    keyword: 'poolpflege spanien',
    minutes: 8,
    published,
  },
  {
    slug: 'bauunternehmen-costa-del-sol',
    title: 'Ein Bauunternehmen an der Costa del Sol finden: so wählen Sie gut',
    seoTitle: 'Bauunternehmen an der Costa del Sol finden',
    short: 'Bauunternehmen Costa del Sol',
    description: 'Sie suchen ein Bauunternehmen an der Costa del Sol oder in der Axarquía? So prüfen Sie eine Firma, erkennen Warnsignale und planen Ihre Renovierung klug.',
    lead: 'An der Costa del Sol arbeiten Hunderte Bauunternehmen, von großen Constructoras bis zum Handwerker mit Kleintransporter. Der Unterschied liegt in Papieren, Versicherung und klaren Absprachen. So finden Sie eines, dem Sie vertrauen können.',
    keyword: 'bauunternehmen costa del sol',
    minutes: 9,
    published,
  },
];
