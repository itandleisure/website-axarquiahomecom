import type { PlaceContent } from './types';

// Feitenblad Alfarnate (november 2026)
// - Inwoners: 1.034 (INE, 1 januari 2025). Oppervlakte circa 34 km²; hoogte 888 m (925 m bij de Ermita de Monsalud); circa 54 km naar Málaga, ongeveer een uur rijden.
// - Ligt in een kleine hoogvlakte (semi-polje) omringd door bergen; wordt beschreven als een van de hoogst gelegen dorpen van de provincie Málaga.
// - Venta de Alfarnate aan de A-4152 (km 7,4), aan de oude Camino Real tussen Málaga en Granada; huidig gebouw 17e eeuw, gedocumenteerd sinds 1699;
//   restaurant en museum over de Andalusische bandieten.
// - Fiesta de la Cereza (kersenfeest, sinds 2006, op de oogstdatum) en Sakura Alfarnate in de bloeitijd van de kersen.
// - Woningprijzen: circa € 1.600 per m² (RealAdvisor, oktober 2026).
// Golf C: één overzichtspagina met wonen en zien en doen samen.
const content: PlaceContent = {
  sources: [
    'https://es.wikipedia.org/wiki/Alfarnate',
    'https://realadvisor.es/es/precios-viviendas/municipio-alfarnate',
  ],
  nl: {
    title: 'Alfarnate: wonen op de hoogvlakte tussen de kersenbomen',
    description: 'Alles over Alfarnate: dorp op bijna 900 meter, de historische Venta de Alfarnate, de kersenbloesem, woningprijzen en kopen in het hoogland.',
    lead: 'Alfarnate ligt op bijna 900 meter in een hoogvlakte omringd door bergen, helemaal in het noorden van de Axarquía. In het voorjaar kleuren de kersenbomen de vlakte wit, en aan de oude koninklijke weg naar Granada staat een van de oudste herbergen van Andalusië.',
    intro: [
      'Alfarnate ligt op 888 meter hoogte, een van de hoogst gelegen dorpen van de provincie Málaga. Het dorp ligt in een kleine vlakte tussen de bergen, ongeveer 54 kilometer en een uur rijden van Málaga. Het klimaat is hier heel anders dan aan de kust: koele zomers, koude winters en soms sneeuw.',
      'Aan de weg buiten het dorp staat de Venta de Alfarnate, een herberg aan de oude Camino Real tussen Málaga en Granada. Het huidige gebouw stamt uit de zeventiende eeuw en wordt al in 1699 genoemd. Het is nog steeds een restaurant, met een klein museum over de bandieten die ooit in deze bergen actief waren. Rond het dorp liggen kersenboomgaarden: in het voorjaar bloeien ze massaal, en bij de oogst viert Alfarnate de Fiesta de la Cereza.',
      'Huizen in Alfarnate zijn vooral ruime dorpshuizen en boerderijen met land. In oktober 2026 lag de gemiddelde vraagprijs rond de € 1.600 per m² (RealAdvisor), een van de lagere niveaus van de Axarquía. Reken op ongeveer 10% <a href="/nl/gidsen/kosten-koper-spanje/">kosten koper</a> en, bij een oud huis, een <a href="/nl/gidsen/kosten-huis-renoveren-spanje/">verbouwbudget</a>.',
      'Op deze hoogte is een renovatie een ander verhaal dan aan de kust: goede isolatie, dubbele beglazing, een dak dat sneeuw en regen aankan en een verwarming voor de winter zijn noodzakelijk. Voor de grotere voorzieningen rijdt u naar Málaga of naar Vélez-Málaga via <a href="/nl/plaatsen/periana/">Periana</a>. Laat een woning vóór aankoop <a href="/nl/aankoopkeuring/">keuren</a>.',
    ],
    facts: [
      ['Inwoners', 'circa 1.000 (2025)'],
      ['Ligging', 'binnenland, 888 m hoog'],
      ['Málaga', 'circa 54 km, ongeveer een uur'],
      ['Te zien', 'Venta de Alfarnate'],
      ['Bekend om', 'kersen en kersenbloesem'],
      ['Prijsniveau', 'laag, circa € 1.600 per m²'],
    ],
    forWhom: 'Voor wie het hoogland en vier echte seizoenen zoekt, met veel ruimte en lage prijzen, en geen behoefte heeft aan de kust om de hoek.',
    faq: [
      { q: 'Sneeuwt het in Alfarnate?', a: 'Soms, ja. Op bijna 900 meter zijn de winters koud en valt er af en toe sneeuw. De zomers zijn juist koeler dan aan de kust.' },
      { q: 'Wat is de Venta de Alfarnate?', a: 'Een herberg uit de zeventiende eeuw aan de oude Camino Real tussen Málaga en Granada, nu een restaurant met een museum over de Andalusische bandieten.' },
    ],
  },
  en: {
    title: 'Alfarnate: living on the high plain among the cherry trees',
    description: 'All about Alfarnate: village at almost 900 metres, the historic Venta de Alfarnate, the cherry blossom, property prices and buying in the highlands.',
    lead: 'Alfarnate sits at almost 900 metres on a high plain ringed by mountains, in the far north of the Axarquía. In spring the cherry trees turn the plain white, and on the old royal road to Granada stands one of the oldest inns in Andalusia.',
    intro: [
      'Alfarnate lies at 888 metres, one of the highest villages in the province of Málaga. It sits on a small plain between the mountains, about 54 kilometres and an hour’s drive from Málaga. The climate here is very different from the coast: cool summers, cold winters and occasional snow.',
      'On the road outside the village stands the Venta de Alfarnate, an inn on the old Camino Real between Málaga and Granada. The present building dates from the seventeenth century and is recorded as early as 1699. It is still a restaurant, with a small museum about the bandits who once roamed these mountains. Cherry orchards surround the village: in spring they blossom en masse, and at harvest time Alfarnate holds its Fiesta de la Cereza.',
      'Homes in Alfarnate are mainly spacious village houses and farmhouses with land. In October 2026 average asking prices were around €1,600 per m² (RealAdvisor), among the lower levels in the Axarquía. Allow around 10% for <a href="/en/guides/buying-costs-in-spain/">buying costs</a> and, for an old house, a <a href="/en/guides/renovation-costs-spain/">renovation budget</a>.',
      'At this altitude a renovation is a different story from the coast: good insulation, double glazing, a roof that can cope with snow and rain, and heating for the winter are essential. For larger facilities you drive to Málaga, or to Vélez-Málaga via <a href="/en/places/periana/">Periana</a>. Have a property <a href="/en/property-survey/">surveyed</a> before you buy.',
    ],
    facts: [
      ['Population', 'about 1,000 (2025)'],
      ['Setting', 'inland, 888 m up'],
      ['Málaga', 'about 54 km, roughly an hour'],
      ['To see', 'Venta de Alfarnate'],
      ['Known for', 'cherries and cherry blossom'],
      ['Price level', 'low, about €1,600 per m²'],
    ],
    forWhom: 'People looking for the highlands and four real seasons, with plenty of space and low prices, who do not need the coast around the corner.',
    faq: [
      { q: 'Does it snow in Alfarnate?', a: 'Sometimes, yes. At almost 900 metres winters are cold and snow falls now and then. Summers, in turn, are cooler than on the coast.' },
      { q: 'What is the Venta de Alfarnate?', a: 'A seventeenth-century inn on the old Camino Real between Málaga and Granada, now a restaurant with a museum about the Andalusian bandits.' },
    ],
  },
  de: {
    title: 'Alfarnate: Wohnen auf der Hochebene zwischen Kirschbäumen',
    description: 'Alles über Alfarnate: Dorf auf fast 900 Metern, die historische Venta de Alfarnate, die Kirschblüte, Immobilienpreise sowie Kauf und Renovierung.',
    lead: 'Alfarnate liegt auf fast 900 Metern in einer von Bergen umgebenen Hochebene, ganz im Norden der Axarquía. Im Frühjahr färben die Kirschbäume die Ebene weiß, und an der alten Königsstraße nach Granada steht eines der ältesten Gasthäuser Andalusiens.',
    intro: [
      'Alfarnate liegt auf 888 Metern und ist eines der höchstgelegenen Dörfer der Provinz Málaga. Es liegt in einer kleinen Ebene zwischen den Bergen, etwa 54 Kilometer und eine Autostunde von Málaga entfernt. Das Klima ist hier ganz anders als an der Küste: kühle Sommer, kalte Winter und manchmal Schnee.',
      'An der Straße außerhalb des Dorfes steht die Venta de Alfarnate, ein Gasthaus am alten Camino Real zwischen Málaga und Granada. Das heutige Gebäude stammt aus dem 17. Jahrhundert und wird schon 1699 erwähnt. Es ist bis heute ein Restaurant, mit einem kleinen Museum über die Banditen, die einst in diesen Bergen unterwegs waren. Rund um das Dorf liegen Kirschplantagen: Im Frühjahr blühen sie in Massen, und zur Ernte feiert Alfarnate die Fiesta de la Cereza.',
      'In Alfarnate gibt es vor allem geräumige Dorfhäuser und Bauernhäuser mit Land. Im Oktober 2026 lagen die durchschnittlichen Angebotspreise bei rund 1.600 € pro m² (RealAdvisor), einem der niedrigeren Niveaus der Axarquía. Rechnen Sie mit rund 10% <a href="/de/ratgeber/kaufnebenkosten-spanien/">Kaufnebenkosten</a> und bei einem alten Haus mit einem <a href="/de/ratgeber/renovierungskosten-spanien/">Renovierungsbudget</a>.',
      'In dieser Höhe ist eine Renovierung etwas anderes als an der Küste: gute Dämmung, Doppelverglasung, ein Dach, das Schnee und Regen standhält, und eine Heizung für den Winter sind unverzichtbar. Für größere Einrichtungen fahren Sie nach Málaga oder über <a href="/de/orte/periana/">Periana</a> nach Vélez-Málaga. Lassen Sie eine Immobilie vor dem Kauf <a href="/de/immobiliengutachten/">begutachten</a>.',
    ],
    facts: [
      ['Einwohner', 'rund 1.000 (2025)'],
      ['Lage', 'Hinterland, 888 m hoch'],
      ['Málaga', 'etwa 54 km, rund eine Stunde'],
      ['Sehenswert', 'Venta de Alfarnate'],
      ['Bekannt für', 'Kirschen und Kirschblüte'],
      ['Preisniveau', 'niedrig, rund 1.600 € pro m²'],
    ],
    forWhom: 'Für alle, die das Hochland und vier echte Jahreszeiten suchen, mit viel Platz und niedrigen Preisen, und die Küste nicht um die Ecke brauchen.',
    faq: [
      { q: 'Schneit es in Alfarnate?', a: 'Manchmal, ja. Auf fast 900 Metern sind die Winter kalt, und ab und zu fällt Schnee. Die Sommer sind dafür kühler als an der Küste.' },
      { q: 'Was ist die Venta de Alfarnate?', a: 'Ein Gasthaus aus dem 17. Jahrhundert am alten Camino Real zwischen Málaga und Granada, heute ein Restaurant mit einem Museum über die andalusischen Banditen.' },
    ],
  },
  sv: {
    title: 'Alfarnate: bo på högslätten bland körsbärsträden',
    description: 'Allt om Alfarnate: by på nästan 900 meter, värdshuset Venta de Alfarnate, körsbärsblomningen, bostadspriser och att köpa i höglandet.',
    lead: 'Alfarnate ligger på nästan 900 meters höjd på en högslätt omgiven av berg, längst i norr i Axarquía. På våren färgar körsbärsträden slätten vit, och vid den gamla kungsvägen till Granada står ett av Andalusiens äldsta värdshus.',
    intro: [
      'Alfarnate ligger på 888 meters höjd, en av de högst belägna byarna i provinsen Málaga. Den ligger på en liten slätt mellan bergen, cirka 54 kilometer och en timmes bilresa från Málaga. Klimatet är helt annorlunda än vid kusten: svala somrar, kalla vintrar och ibland snö.',
      'Vid vägen utanför byn står Venta de Alfarnate, ett värdshus vid den gamla Camino Real mellan Málaga och Granada. Dagens byggnad är från 1600-talet och nämns redan 1699. Det är fortfarande en restaurang, med ett litet museum om banditerna som en gång strövade i dessa berg. Körsbärsodlingar omger byn: på våren blommar de i massor, och vid skörden firar Alfarnate sin Fiesta de la Cereza.',
      'Bostäderna i Alfarnate är främst rymliga byhus och gårdar med mark. I oktober 2026 låg det genomsnittliga utgångspriset kring 1 600 € per m² (RealAdvisor), bland de lägre nivåerna i Axarquía. Räkna med cirka 10 % i <a href="/sv/guider/kopa-hus-i-spanien-kostnader/">köpkostnader</a> och, för ett gammalt hus, en <a href="/sv/guider/renovera-hus-i-spanien-kostnad/">renoveringsbudget</a>.',
      'På den här höjden är en renovering något annat än vid kusten: god isolering, dubbelglas, ett tak som klarar snö och regn och uppvärmning för vintern är nödvändigt. För större service kör du till Málaga, eller till Vélez-Málaga via <a href="/sv/orter/periana/">Periana</a>. Låt <a href="/sv/besiktning/">besiktiga</a> huset innan du köper.',
    ],
    facts: [
      ['Invånare', 'cirka 1 000 (2025)'],
      ['Läge', 'inland, 888 m'],
      ['Málaga', 'cirka 54 km, ungefär en timme'],
      ['Sevärt', 'Venta de Alfarnate'],
      ['Känt för', 'körsbär och körsbärsblomning'],
      ['Prisnivå', 'låg, cirka 1 600 € per m²'],
    ],
    forWhom: 'För dig som söker höglandet och fyra riktiga årstider, med gott om utrymme och låga priser, och som inte behöver ha kusten runt hörnet.',
    faq: [
      { q: 'Snöar det i Alfarnate?', a: 'Ibland, ja. På nästan 900 meter är vintrarna kalla och det snöar då och då. Somrarna är i gengäld svalare än vid kusten.' },
      { q: 'Vad är Venta de Alfarnate?', a: 'Ett värdshus från 1600-talet vid den gamla Camino Real mellan Málaga och Granada, i dag en restaurang med ett museum om de andalusiska banditerna.' },
    ],
  },
};
export default content;
