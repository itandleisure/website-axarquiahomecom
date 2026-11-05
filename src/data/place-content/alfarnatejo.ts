import type { PlaceContent } from './types';

// Feitenblad Alfarnatejo (november 2026)
// - Inwoners: 358 (INE, 1 januari 2025). Oppervlakte 20,4 km²; in het noordwesten van de Axarquía; circa 50 km naar Málaga.
//   Hoogte: de bron noemt zowel 703 m als circa 900 m voor de kern; op de pagina staat daarom alleen "hoog in de bergen".
// - Kerk Santo Cristo de Cabrilla (herbouw tweede helft 18e eeuw); Abrigos del Vilo (rotsschuilplaatsen, beschermd cultureel erfgoed, BIC).
// - Fiesta's: San Marcos (25 april), San Isidro (15 mei), Fiesta del Gazpacho (eerste weekend van augustus), Santo Cristo de Cabrilla en San Miguel (29 september).
// - Keuken: morrete de setas, migas, sopa de cachorreñas.
// - Woningprijzen: circa € 1.350 per m² (RealAdvisor, oktober 2026).
// Golf C: één overzichtspagina met wonen en zien en doen samen.
const content: PlaceContent = {
  sources: [
    'https://es.wikipedia.org/wiki/Alfarnatejo',
    'https://realadvisor.es/es/precios-viviendas/municipio-alfarnatejo',
  ],
  nl: {
    title: 'Alfarnatejo: wonen in het stille hoogland van de Axarquía',
    description: 'Alles over Alfarnatejo: het kleine bergdorp naast Alfarnate, de rotsschuilplaatsen van Vilo, het gazpachofeest, de laagste woningprijzen van de Axarquía en kopen en verbouwen in de bergen.',
    lead: 'Alfarnatejo is met ongeveer 350 inwoners een van de kleinste dorpen van de Axarquía, hoog in de bergen in het noordwesten van de streek. Hier vindt u rust, ruimte en de laagste woningprijzen van de regio.',
    intro: [
      'Alfarnatejo ligt hoog in de bergen in het noordwesten van de Axarquía, naast <a href="/nl/plaatsen/alfarnate/">Alfarnate</a> en ongeveer 50 kilometer van Málaga. Het dorp telt ongeveer 350 inwoners en ligt tussen akkers, olijfgaarden en kale bergruggen. Het klimaat is dat van het binnenland: warme zomers, koude winters.',
      'In het dorp staat de kerk van de Santo Cristo de Cabrilla, herbouwd in de tweede helft van de achttiende eeuw. Op het grondgebied liggen de Abrigos del Vilo, rotsschuilplaatsen die als cultureel erfgoed zijn beschermd. Het bekendste feest is de Fiesta del Gazpacho op het eerste weekend van augustus. De keuken is die van de bergen: migas, een stoofpot van paddenstoelen (<em>morrete de setas</em>) en <em>sopa de cachorreñas</em>.',
      'Wie in Alfarnatejo koopt, vindt vooral oude dorpshuizen en boerderijen met grond. In oktober 2026 lag de gemiddelde vraagprijs rond de € 1.350 per m² (RealAdvisor), het laagste niveau van alle gemeenten in de Axarquía. Er wordt weinig verkocht, dus gemiddelden zeggen hier minder. Reken op ongeveer 10% <a href="/nl/gidsen/kosten-koper-spanje/">kosten koper</a> en, bij een oud huis, een flink <a href="/nl/gidsen/kosten-huis-renoveren-spanje/">verbouwbudget</a>.',
      'Voorzieningen zijn er nauwelijks. Voor boodschappen en de huisarts rijdt u naar de grotere dorpen in de buurt, voor het ziekenhuis naar Málaga of Vélez-Málaga. Een renovatie moet hier rekening houden met koude winters: isolatie, een goed dak en verwarming zijn noodzakelijk. Laat een woning vóór aankoop <a href="/nl/aankoopkeuring/">keuren</a>.',
    ],
    facts: [
      ['Inwoners', 'circa 350 (2025)'],
      ['Ligging', 'binnenland, hoog in de bergen'],
      ['Málaga', 'circa 50 km'],
      ['Te zien', 'Abrigos del Vilo'],
      ['Grootste feest', 'Fiesta del Gazpacho (augustus)'],
      ['Prijsniveau', 'het laagst van de Axarquía, circa € 1.350 per m²'],
    ],
    forWhom: 'Voor wie echte stilte en veel ruimte zoekt voor weinig geld, en bereid is ver van de kust en de voorzieningen te wonen.',
    faq: [
      { q: 'Is Alfarnatejo de goedkoopste plaats van de Axarquía?', a: 'Volgens de gemiddelde vraagprijzen van oktober 2026 wel: rond de € 1.350 per m². Omdat er weinig wordt verkocht, kan de prijs per huis sterk verschillen.' },
      { q: 'Wanneer is het gazpachofeest in Alfarnatejo?', a: 'Op het eerste weekend van augustus.' },
    ],
  },
  en: {
    title: 'Alfarnatejo: living in the quiet highlands of the Axarquía',
    description: 'All about Alfarnatejo: the small mountain village next to Alfarnate, the Vilo rock shelters, the gazpacho festival, the lowest property prices in the Axarquía and buying and renovating in the mountains.',
    lead: 'With about 350 residents, Alfarnatejo is one of the smallest villages in the Axarquía, high in the mountains in the north-west of the region. Here you find peace, space and the lowest property prices in the area.',
    intro: [
      'Alfarnatejo lies high in the mountains in the north-west of the Axarquía, next to <a href="/en/places/alfarnate/">Alfarnate</a> and about 50 kilometres from Málaga. The village has about 350 residents and sits among fields, olive groves and bare mountain ridges. The climate is that of the interior: warm summers, cold winters.',
      'In the village stands the church of the Santo Cristo de Cabrilla, rebuilt in the second half of the eighteenth century. On its land are the Abrigos del Vilo, rock shelters protected as cultural heritage. The best-known fiesta is the Fiesta del Gazpacho on the first weekend of August. The food is mountain fare: migas, a mushroom stew (<em>morrete de setas</em>) and <em>sopa de cachorreñas</em>.',
      'Buyers in Alfarnatejo find mainly old village houses and farmhouses with land. In October 2026 average asking prices were around €1,350 per m² (RealAdvisor), the lowest level of any municipality in the Axarquía. Few homes are sold, so averages say less here. Allow around 10% for <a href="/en/guides/buying-costs-in-spain/">buying costs</a> and, for an old house, a solid <a href="/en/guides/renovation-costs-spain/">renovation budget</a>.',
      'There are hardly any facilities. For shopping and the doctor you drive to the larger villages nearby, and to Málaga or Vélez-Málaga for the hospital. A renovation here must allow for cold winters: insulation, a sound roof and heating are essential. Have a property <a href="/en/property-survey/">surveyed</a> before you buy.',
    ],
    facts: [
      ['Population', 'about 350 (2025)'],
      ['Setting', 'inland, high in the mountains'],
      ['Málaga', 'about 50 km'],
      ['To see', 'Abrigos del Vilo'],
      ['Biggest fiesta', 'Fiesta del Gazpacho (August)'],
      ['Price level', 'lowest in the Axarquía, about €1,350 per m²'],
    ],
    forWhom: 'People looking for real silence and plenty of space for little money, who are prepared to live far from the coast and facilities.',
    faq: [
      { q: 'Is Alfarnatejo the cheapest place in the Axarquía?', a: 'On average asking prices in October 2026, yes: around €1,350 per m². Because few homes are sold, the price per house can vary widely.' },
      { q: 'When is the gazpacho festival in Alfarnatejo?', a: 'On the first weekend of August.' },
    ],
  },
  de: {
    title: 'Alfarnatejo: Wohnen im stillen Hochland der Axarquía',
    description: 'Alles über Alfarnatejo: das kleine Bergdorf neben Alfarnate, die Felsunterstände von Vilo, das Gazpacho-Fest, die niedrigsten Immobilienpreise der Axarquía sowie Kauf und Renovierung in den Bergen.',
    lead: 'Mit rund 350 Einwohnern ist Alfarnatejo eines der kleinsten Dörfer der Axarquía, hoch in den Bergen im Nordwesten der Region. Hier finden Sie Ruhe, Platz und die niedrigsten Immobilienpreise der Gegend.',
    intro: [
      'Alfarnatejo liegt hoch in den Bergen im Nordwesten der Axarquía, neben <a href="/de/orte/alfarnate/">Alfarnate</a> und etwa 50 Kilometer von Málaga entfernt. Das Dorf hat rund 350 Einwohner und liegt zwischen Feldern, Olivenhainen und kahlen Bergrücken. Das Klima ist das des Hinterlands: warme Sommer, kalte Winter.',
      'Im Dorf steht die Kirche des Santo Cristo de Cabrilla, wiederaufgebaut in der zweiten Hälfte des 18. Jahrhunderts. Auf dem Gemeindegebiet liegen die Abrigos del Vilo, Felsunterstände, die als Kulturgut geschützt sind. Das bekannteste Fest ist die Fiesta del Gazpacho am ersten Augustwochenende. Die Küche ist die der Berge: Migas, ein Pilzeintopf (<em>morrete de setas</em>) und <em>sopa de cachorreñas</em>.',
      'Wer in Alfarnatejo kauft, findet vor allem alte Dorfhäuser und Bauernhäuser mit Land. Im Oktober 2026 lagen die durchschnittlichen Angebotspreise bei rund 1.350 € pro m² (RealAdvisor), dem niedrigsten Niveau aller Gemeinden der Axarquía. Es wird wenig verkauft, Durchschnittswerte sagen hier also weniger aus. Rechnen Sie mit rund 10% <a href="/de/ratgeber/kaufnebenkosten-spanien/">Kaufnebenkosten</a> und bei einem alten Haus mit einem soliden <a href="/de/ratgeber/renovierungskosten-spanien/">Renovierungsbudget</a>.',
      'Einrichtungen gibt es kaum. Zum Einkaufen und zum Arzt fahren Sie in die größeren Dörfer in der Nähe, ins Krankenhaus nach Málaga oder Vélez-Málaga. Eine Renovierung muss hier kalte Winter berücksichtigen: Dämmung, ein dichtes Dach und eine Heizung sind unverzichtbar. Lassen Sie eine Immobilie vor dem Kauf <a href="/de/immobiliengutachten/">begutachten</a>.',
    ],
    facts: [
      ['Einwohner', 'rund 350 (2025)'],
      ['Lage', 'Hinterland, hoch in den Bergen'],
      ['Málaga', 'etwa 50 km'],
      ['Sehenswert', 'Abrigos del Vilo'],
      ['Größtes Fest', 'Fiesta del Gazpacho (August)'],
      ['Preisniveau', 'das niedrigste der Axarquía, rund 1.350 € pro m²'],
    ],
    forWhom: 'Für alle, die echte Stille und viel Platz für wenig Geld suchen und bereit sind, weit weg von Küste und Einrichtungen zu wohnen.',
    faq: [
      { q: 'Ist Alfarnatejo der günstigste Ort der Axarquía?', a: 'Nach den durchschnittlichen Angebotspreisen vom Oktober 2026 ja: rund 1.350 € pro m². Weil wenig verkauft wird, kann der Preis pro Haus stark schwanken.' },
      { q: 'Wann ist das Gazpacho-Fest in Alfarnatejo?', a: 'Am ersten Augustwochenende.' },
    ],
  },
  sv: {
    title: 'Alfarnatejo: bo i Axarquías lugna högland',
    description: 'Allt om Alfarnatejo: den lilla bergsbyn bredvid Alfarnate, klippskyddet Vilo, gazpachofesten, de lägsta bostadspriserna i Axarquía och att köpa och renovera i bergen.',
    lead: 'Med cirka 350 invånare är Alfarnatejo en av de minsta byarna i Axarquía, högt uppe i bergen i regionens nordvästra del. Här hittar du lugn, utrymme och de lägsta bostadspriserna i området.',
    intro: [
      'Alfarnatejo ligger högt uppe i bergen i nordvästra Axarquía, bredvid <a href="/sv/orter/alfarnate/">Alfarnate</a> och cirka 50 kilometer från Málaga. Byn har cirka 350 invånare och ligger bland åkrar, olivlundar och kala bergskammar. Klimatet är inlandets: varma somrar, kalla vintrar.',
      'I byn står kyrkan Santo Cristo de Cabrilla, ombyggd under andra hälften av 1700-talet. På kommunens mark finns Abrigos del Vilo, klippskydd som är skyddade som kulturarv. Den mest kända festen är Fiesta del Gazpacho den första helgen i augusti. Maten är bergsmat: migas, en svampgryta (<em>morrete de setas</em>) och <em>sopa de cachorreñas</em>.',
      'Köpare i Alfarnatejo hittar främst gamla byhus och gårdar med mark. I oktober 2026 låg det genomsnittliga utgångspriset kring 1 350 € per m² (RealAdvisor), den lägsta nivån av alla kommuner i Axarquía. Få bostäder säljs, så genomsnitten säger mindre här. Räkna med cirka 10 % i <a href="/sv/guider/kopa-hus-i-spanien-kostnader/">köpkostnader</a> och, för ett gammalt hus, en rejäl <a href="/sv/guider/renovera-hus-i-spanien-kostnad/">renoveringsbudget</a>.',
      'Service finns knappt. För att handla och gå till läkaren kör du till de större byarna i närheten, och till Málaga eller Vélez-Málaga för sjukhuset. En renovering här måste ta hänsyn till kalla vintrar: isolering, ett tätt tak och uppvärmning är nödvändigt. Låt <a href="/sv/besiktning/">besiktiga</a> huset innan du köper.',
    ],
    facts: [
      ['Invånare', 'cirka 350 (2025)'],
      ['Läge', 'inland, högt i bergen'],
      ['Málaga', 'cirka 50 km'],
      ['Sevärt', 'Abrigos del Vilo'],
      ['Största fest', 'Fiesta del Gazpacho (augusti)'],
      ['Prisnivå', 'lägst i Axarquía, cirka 1 350 € per m²'],
    ],
    forWhom: 'För dig som söker verklig stillhet och gott om utrymme för lite pengar, och som är beredd att bo långt från kusten och service.',
    faq: [
      { q: 'Är Alfarnatejo den billigaste orten i Axarquía?', a: 'Sett till genomsnittliga utgångspriser i oktober 2026, ja: kring 1 350 € per m². Eftersom få bostäder säljs kan priset per hus variera kraftigt.' },
      { q: 'När är gazpachofesten i Alfarnatejo?', a: 'Den första helgen i augusti.' },
    ],
  },
};
export default content;
