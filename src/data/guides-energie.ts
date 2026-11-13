// Gids subsidie en regels voor verduurzamen (IRPF, Junta de Andalucía, IBI, CAE en de Europese gebouwenrichtlijn).
// Eigen bestand, zodat andere gidsen in guides.ts kunnen groeien zonder conflicten.
// In nl, en en de staan de gidsen op dezelfde positie (achter de lijsten uit guides-diensten.ts).
// Feiten gecontroleerd op 6 november 2026; zie de bronnenlijst onderaan elke gids.
import type { GuideMeta } from './guides';

const published = '2026-11-06';

export const energieNl: GuideMeta[] = [
  {
    slug: 'subsidie-verduurzamen-spanje',
    title: 'Subsidie voor verduurzamen in Spanje: wat er in 2026 kan in de Axarquía',
    seoTitle: 'Subsidie verduurzamen in Spanje 2026: regels en aftrek',
    short: 'Subsidie verduurzamen',
    description: 'Subsidie en belastingaftrek voor isolatie, warmtepomp en zonnepanelen in de Axarquía in 2026, en wat de EU-regels echt eisen. Met voorwaarden en termijnen.',
    lead: 'Isoleren, nieuwe ramen, een warmtepomp of zonnepanelen: in Spanje kunt u daar in 2026 nog flink voordeel op krijgen. En moet uw huis straks echt label D hebben? We zochten het voor u uit.',
    keyword: 'subsidie verduurzamen spanje',
    minutes: 11,
    published,
  },
];

export const energieEn: GuideMeta[] = [
  {
    slug: 'energy-efficiency-grants-spain',
    title: 'Energy efficiency grants in Spain: what is available in the Axarquía in 2026',
    seoTitle: 'Energy efficiency grants in Spain 2026: rules and tax relief',
    short: 'Energy efficiency grants',
    description: 'Grants and tax relief for insulation, heat pumps and solar panels in the Axarquía in 2026, and what the EU rules really require. With conditions and deadlines.',
    lead: 'Insulation, new windows, a heat pump or solar panels: in Spain you can still get a good part of the cost back in 2026. And will your home really need a D rating soon? We looked into it.',
    keyword: 'energy efficiency grants spain',
    minutes: 11,
    published,
  },
];

export const energieDe: GuideMeta[] = [
  {
    slug: 'foerderung-energetische-sanierung-spanien',
    title: 'Förderung für energetische Sanierung in Spanien: was 2026 in der Axarquía möglich ist',
    seoTitle: 'Förderung energetische Sanierung Spanien 2026',
    short: 'Förderung Sanierung',
    description: 'Zuschüsse und Steuerabzug für Dämmung, Wärmepumpe und Solaranlage in der Axarquía 2026, und was die EU-Regeln wirklich verlangen. Mit Bedingungen und Fristen.',
    lead: 'Dämmung, neue Fenster, Wärmepumpe oder Solaranlage: In Spanien bekommen Sie 2026 noch einen guten Teil der Kosten zurück. Und muss Ihr Haus bald wirklich Klasse D haben? Wir haben es geprüft.',
    keyword: 'förderung energetische sanierung spanien',
    minutes: 11,
    published,
  },
];
