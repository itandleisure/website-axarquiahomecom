// Overzicht van alle gidsen. Volgorde = volgorde op /nl/gidsen/.
export interface GuideMeta {
  slug: string;
  title: string;
  seoTitle?: string;
  short: string; // voor kruimelpad
  description: string;
  lead: string;
  keyword: string; // hoofdzoekwoord (Ubersuggest, Google NL)
  minutes: number;
  published: string;
  updated?: string;
}

export const guides: GuideMeta[] = [
  {
    slug: 'emigreren-naar-spanje',
    title: 'Emigreren naar Spanje: de complete gids voor de Axarquía en Costa del Sol',
    seoTitle: 'Emigreren naar Spanje (Costa del Sol en Axarquía): stappenplan 2026',
    short: 'Emigreren naar Spanje',
    description: 'Stap voor stap emigreren naar Spanje: NIE, inschrijving, belasting, zorg, wonen en een huis vinden in de Axarquía en aan de Costa del Sol.',
    lead: 'Elk jaar verhuizen duizenden Nederlanders naar de zon. Deze gids zet alle stappen op een rij, van het eerste papierwerk tot een huis dat klaar is om in te wonen.',
    keyword: 'emigreren naar spanje',
    minutes: 11,
    published: '2026-11-05',
  },
  {
    slug: 'finca-kopen-in-spanje',
    title: 'Finca kopen in Spanje: legaliteit, water, toegang en keuring',
    seoTitle: 'Finca kopen in Spanje: waar u op moet letten (checklist)',
    short: 'Finca kopen',
    description: 'Een finca kopen in Andalusië? Lees waar u op let: vergunningen en AFO, water en put, toegangsweg, septische put, keuring en verbouwkosten.',
    lead: 'Een finca in de heuvels van de Axarquía is voor veel kopers de droom. Maar bij een landelijke woning is er meer te controleren dan bij een appartement aan de kust.',
    keyword: 'finca kopen spanje',
    minutes: 10,
    published: '2026-11-05',
  },
  {
    slug: 'kosten-koper-spanje',
    title: 'Kosten koper in Spanje: wat u bovenop de prijs betaalt (en wat verbouwen kost)',
    seoTitle: 'Kosten koper Spanje 2026: belasting, notaris en verbouwen',
    short: 'Kosten koper Spanje',
    description: 'Wat betaalt u bovenop de koopprijs van een huis in Spanje? Overdrachtsbelasting in Andalusië, notaris, register, advocaat, jaarlijkse lasten en verbouwkosten.',
    lead: 'Reken bij een huis in Andalusië op ongeveer 10% bovenop de koopprijs, en vaak nog een flink bedrag voor opknappen. Hier ziet u waar dat geld heen gaat.',
    keyword: 'kosten koper spanje',
    minutes: 8,
    published: '2026-11-05',
  },
  {
    slug: 'kosten-huis-renoveren-spanje',
    title: 'Wat kost een huis renoveren in Spanje?',
    seoTitle: 'Wat kost een huis renoveren in Spanje? Prijzen per m² (2026)',
    short: 'Kosten renoveren',
    description: 'Prijsindicaties voor renoveren in de Axarquía: per m², badkamer, keuken, dak, zwembad en finca. Plus waar de kosten vandaan komen en hoe u ze beperkt.',
    lead: 'De vraag die elke koper stelt: wat gaat het opknappen kosten? Een eerlijk antwoord begint met “dat hangt ervan af”, maar we kunnen u wel goede bandbreedtes geven.',
    keyword: 'huis renoveren spanje kosten',
    minutes: 8,
    published: '2026-11-05',
  },
  {
    slug: 'wonen-in-de-axarquia',
    title: 'Wonen in de Axarquía: dorpen, kosten, zorg en klimaat',
    seoTitle: 'Wonen in Spanje: de Axarquía bij Málaga (dorpen, kosten, zorg)',
    short: 'Wonen in de Axarquía',
    description: 'Hoe is het om te wonen in de Axarquía, ten oosten van Málaga? De dorpen vergeleken, kosten van levensonderhoud, zorg, klimaat en bereikbaarheid.',
    lead: 'Witte dorpen tegen de bergen, avocado’s en mango’s op de hellingen en de zee op twintig minuten. Wat maakt de Axarquía zo geliefd, en welk dorp past bij u?',
    keyword: 'wonen in spanje',
    minutes: 9,
    published: '2026-11-05',
  },
  {
    slug: 'overwinteren-in-spanje',
    title: 'Overwinteren in Spanje: zo regelt u het, en zo blijft uw huis in orde',
    seoTitle: 'Overwinteren in Spanje: tips voor de Costa del Sol en uw huis',
    short: 'Overwinteren',
    description: 'Overwinteren aan de Costa del Sol: hoelang mag het, wat betekent het voor belasting en zorg, en hoe houdt u uw huis in orde als u weer in Nederland bent?',
    lead: 'De winter in de Axarquía is mild en zonnig. Steeds meer Nederlanders brengen er een paar maanden door. Wat moet u regelen, en wie houdt uw huis in de gaten als u weg bent?',
    keyword: 'overwinteren spanje',
    minutes: 7,
    published: '2026-11-05',
  },
  {
    slug: 'huis-kopen-malaga-andalusie',
    title: 'Huis kopen in Málaga en Andalusië: gebieden, prijzen en het koopproces',
    seoTitle: 'Huis kopen in Málaga en Andalusië: gebieden, prijzen, stappen',
    short: 'Huis kopen in Málaga',
    description: 'Een huis kopen in de provincie Málaga: welke gebieden er zijn, wat huizen ongeveer kosten en hoe het koopproces in Spanje stap voor stap verloopt.',
    lead: 'De provincie Málaga is een van de populairste plekken in Europa om een tweede huis te kopen. Van Marbella in het westen tot Nerja in het oosten: zo vindt u uw weg.',
    keyword: 'huis kopen malaga',
    minutes: 10,
    published: '2026-11-05',
  },
  {
    slug: 'afo-legaliseren-andalusie',
    title: 'AFO en legaliseren in Andalusië uitgelegd',
    seoTitle: 'AFO-status in Andalusië: wat betekent het en wat mag wel en niet?',
    short: 'AFO en legaliseren',
    description: 'Wat betekent AFO (asimilado a fuera de ordenación) bij een huis in Andalusië? Wat mag u wel en niet, hoe verloopt de procedure en waar let u op als koper?',
    lead: 'Naar schatting 300.000 woningen in Andalusië zijn niet volledig vergund. Veel daarvan staan op het platteland, ook in de Axarquía. Wat betekent dat voor u als koper of eigenaar?',
    keyword: 'afo andalusie',
    minutes: 8,
    published: '2026-11-05',
  },
];
