import type { PlaceContent } from './types';

// Feitenblad Árchez (november 2026)
// - Inwoners: 441 (INE, 1 januari 2025); 115 buitenlandse inwoners in 2022 (29%).
// - Oppervlakte 4,79 km², de kleinste gemeente van de provincie Málaga. Dorp op circa 435 m aan de rivier de Turvilla; 21 km naar Vélez-Málaga, 52 km naar Málaga.
// - Mudéjarminaret (Almohadische tijd) als toren van de kerk Nuestra Señora de la Encarnación; oude molens. Ligt op de Ruta Mudéjar.
// - In 1487 christelijk; later deel van het markiezaat Comares. Druifluis verwoestte eind 19e eeuw de wijngaarden.
// - Bevolking daalde van 858 (1920) naar 353 (2001). Economie: olijven en wijnstokken.
// - Fiesta: San Antón (laatste zondag van januari).
// - Woningprijzen: circa € 2.000 per m² (RealAdvisor, oktober 2026).
// Golf B zonder aparte pagina Zien en doen: te weinig voor een eigen pagina; de minaret staat in het overzicht.
const content: PlaceContent = {
  sources: [
    'https://es.wikipedia.org/wiki/Árchez',
    'https://realadvisor.es/es/precios-viviendas/municipio-archez',
  ],
  nl: {
    title: 'Árchez: wonen in het kleinste dorp van de provincie Málaga',
    description: 'Alles over Árchez: dorp aan de rivier met een van de mooiste mudéjarminaretten van Andalusië, tussen Cómpeta en Sayalonga, en woningprijzen.',
    lead: 'Árchez is de kleinste gemeente van de provincie Málaga: een handvol witte straatjes in een dal aan de rivier, met een Moorse minaret als kerktoren. Rustiger wordt het in de Axarquía niet.',
    intro: [
      'Árchez ligt op ongeveer 435 meter hoogte in het dal van de Turvilla, tussen <a href="/nl/plaatsen/competa/">Cómpeta</a>, <a href="/nl/plaatsen/canillas-de-albaida/">Canillas de Albaida</a> en <a href="/nl/plaatsen/sayalonga/">Sayalonga</a>. Naar Vélez-Málaga is het ongeveer 21 kilometer, naar Málaga 52. Met een oppervlakte van nog geen vijf vierkante kilometer is het de kleinste gemeente van de provincie.',
      'De bekendste bezienswaardigheid is de toren van de kerk: een minaret uit de Moorse tijd, versierd met geometrisch metselwerk in de stijl van de Almohaden. Het dorp ligt op de Ruta Mudéjar, de route langs de Moorse torens en kerken van de oostelijke Axarquía. Langs de rivier staan nog oude molens.',
      'Er wonen ruim 400 mensen, van wie bijna een derde uit het buitenland. Rond het dorp liggen terrassen met olijfbomen en wijnstokken, en een paar landhuizen op de hellingen.',
    ],
    facts: [
      ['Inwoners', 'ruim 400 (2025)'],
      ['Buitenlandse inwoners', 'bijna een derde'],
      ['Ligging', 'bergen, circa 435 m, aan de rivier'],
      ['Vélez-Málaga', 'circa 21 km'],
      ['Málaga', 'circa 52 km'],
      ['Prijsniveau', 'laag tot middel, circa € 2.000 per m²'],
    ],
    forWhom: 'Voor wie echt rust zoekt in een klein dorp, met Cómpeta en Sayalonga als buurdorpen voor de dagelijkse dingen. Árchez past bij mensen die een dorpshuis of een klein landhuis zoeken en het niet erg vinden dat het aanbod beperkt is.',
    living: {
      title: 'Wonen in Árchez: dorpshuizen, landhuizen en prijzen',
      description: 'Een huis kopen in Árchez? Welke woningen er zijn, wat ze kosten, waar u de voorzieningen vindt en waar u op let bij verbouwen in een klein bergdorp.',
      lead: 'In Árchez komt maar zelden een huis te koop. Wie hier woont, kiest voor stilte en neemt de rit naar Cómpeta of de kust voor lief.',
      sections: [
        { h: 'Wat voor woningen er zijn', p: [
          'In het dorp oude dorpshuizen, vaak met dikke muren en een terras aan de rivierkant. Daarbuiten een beperkt aantal landhuizen en finca’s op de terrassen. Door de kleine oppervlakte van de gemeente is het aanbod klein.',
        ] },
        { h: 'Wat een woning kost', p: [
          'In oktober 2026 lag de gemiddelde vraagprijs rond de € 2.000 per m² (RealAdvisor). Omdat er weinig wordt verkocht, zeggen gemiddelden hier minder dan in grotere plaatsen. Reken op ongeveer 10% <a href="/nl/gidsen/kosten-koper-spanje/">kosten koper</a> en, bij een oud huis, een <a href="/nl/gidsen/kosten-huis-renoveren-spanje/">verbouwbudget</a>.',
        ] },
        { h: 'Voorzieningen', p: [
          'Árchez zelf heeft bijna geen voorzieningen. Voor boodschappen, de huisarts en restaurants gaat u naar Cómpeta of Sayalonga, voor grotere supermarkten naar de kust en voor het ziekenhuis naar Vélez-Málaga. Een auto is onmisbaar.',
        ] },
        { h: 'Let op bij landhuizen', p: [
          'Controleer bij een huis buiten het dorp of het legaal is, hoe de toegangsweg erbij ligt en waar het water vandaan komt. Lees onze gidsen over <a href="/nl/gidsen/finca-kopen-in-spanje/">finca kopen</a> en <a href="/nl/gidsen/afo-legaliseren-andalusie/">AFO en legaliseren</a>.',
        ] },
        { h: 'Verbouwen in Árchez', p: [
          'Huizen in het dal en dicht bij de rivier hebben vaker last van vocht in muren en vloeren. Goede afwatering, ventilatie en een droge fundering verdienen bij een renovatie de eerste aandacht. Laat een woning vóór aankoop <a href="/nl/aankoopkeuring/">keuren</a>.',
        ] },
      ],
    },
    faq: [
      { q: 'Wat is er te zien in Árchez?', a: 'Vooral de kerktoren, een minaret uit de Moorse tijd met geometrisch metselwerk. Het dorp ligt op de Ruta Mudéjar en langs de rivier lopen wandelpaden naar de buurdorpen.' },
      { q: 'Is Árchez echt de kleinste gemeente van Málaga?', a: 'Ja, met een oppervlakte van 4,8 vierkante kilometer is Árchez de kleinste gemeente van de provincie.' },
      { q: 'Waar doe je boodschappen als je in Árchez woont?', a: 'In Cómpeta of Sayalonga voor de dagelijkse boodschappen, en aan de kust of in Vélez-Málaga voor grotere supermarkten.' },
    ],
  },
  en: {
    title: 'Árchez: living in the smallest village in Málaga province',
    description: 'All about Árchez: riverside village with one of the finest Mudéjar minarets in Andalusia, between Cómpeta and Sayalonga, and property prices.',
    lead: 'Árchez is the smallest municipality in the province of Málaga: a handful of white lanes in a river valley, with a Moorish minaret for a church tower. The Axarquía does not get quieter than this.',
    intro: [
      'Árchez lies at about 435 metres in the Turvilla valley, between <a href="/en/places/competa/">Cómpeta</a>, <a href="/en/places/canillas-de-albaida/">Canillas de Albaida</a> and <a href="/en/places/sayalonga/">Sayalonga</a>. Vélez-Málaga is about 21 kilometres away, Málaga 52. With an area of under five square kilometres, it is the smallest municipality in the province.',
      'Its best-known sight is the church tower: a minaret from the Moorish period, decorated with geometric brickwork in the Almohad style. The village is on the Ruta Mudéjar, the route past the Moorish towers and churches of the eastern Axarquía. Old mills still stand along the river.',
      'Just over 400 people live here, nearly a third of them from abroad. Around the village are terraces of olive trees and vines, and a few country houses on the slopes.',
    ],
    facts: [
      ['Population', 'just over 400 (2025)'],
      ['Foreign residents', 'nearly a third'],
      ['Setting', 'mountains, about 435 m, by the river'],
      ['Vélez-Málaga', 'about 21 km'],
      ['Málaga', 'about 52 km'],
      ['Price level', 'low to mid, about €2,000 per m²'],
    ],
    forWhom: 'People looking for real peace in a small village, with Cómpeta and Sayalonga as neighbours for everyday needs. Árchez suits those looking for a village house or small country house who do not mind that the choice is limited.',
    living: {
      title: 'Living in Árchez: village houses, country houses and prices',
      description: 'Buying a home in Árchez? The types of property, what they cost, where to find facilities and what to watch for when renovating in a mountain village.',
      lead: 'Houses rarely come up for sale in Árchez. Those who live here choose silence and accept the drive to Cómpeta or the coast.',
      sections: [
        { h: 'Types of property', p: [
          'In the village, old village houses, often with thick walls and a terrace on the river side. Outside it, a limited number of country houses and fincas on the terraces. Because the municipality is so small, supply is small too.',
        ] },
        { h: 'What a home costs', p: [
          'In October 2026 average asking prices were around €2,000 per m² (RealAdvisor). Because few homes are sold, averages say less here than in larger places. Allow around 10% for <a href="/en/guides/buying-costs-in-spain/">buying costs</a> and, for an old house, a <a href="/en/guides/renovation-costs-spain/">renovation budget</a>.',
        ] },
        { h: 'Facilities', p: [
          'Árchez itself has almost no facilities. For shopping, the doctor and restaurants you go to Cómpeta or Sayalonga, for larger supermarkets to the coast, and to Vélez-Málaga for the hospital. A car is essential.',
        ] },
        { h: 'Watch out with country houses', p: [
          'For a house outside the village, check that it is legal, what state the access track is in and where the water comes from. Read our guides to <a href="/en/guides/buying-a-finca-in-spain/">buying a finca</a> and <a href="/en/guides/afo-legalisation-andalusia/">AFO and legalisation</a>.',
        ] },
        { h: 'Renovating in Árchez', p: [
          'Houses in the valley and close to the river are more prone to damp in walls and floors. Good drainage, ventilation and dry foundations deserve first attention in a renovation. Have a property <a href="/en/property-survey/">surveyed</a> before you buy.',
        ] },
      ],
    },
    faq: [
      { q: 'What is there to see in Árchez?', a: 'Above all the church tower, a Moorish-era minaret with geometric brickwork. The village is on the Ruta Mudéjar, and footpaths along the river lead to the neighbouring villages.' },
      { q: 'Is Árchez really the smallest municipality in Málaga?', a: 'Yes, with an area of 4.8 square kilometres, Árchez is the smallest municipality in the province.' },
      { q: 'Where do you shop if you live in Árchez?', a: 'In Cómpeta or Sayalonga for daily shopping, and on the coast or in Vélez-Málaga for larger supermarkets.' },
    ],
  },
  de: {
    title: 'Árchez: Wohnen im kleinsten Dorf der Provinz Málaga',
    description: 'Alles über Árchez: kleines Dorf am Fluss mit einem der schönsten Mudéjar-Minarette Andalusiens, zwischen Cómpeta und Sayalonga, und Immobilienpreise.',
    lead: 'Árchez ist die kleinste Gemeinde der Provinz Málaga: eine Handvoll weißer Gassen in einem Flusstal, mit einem maurischen Minarett als Kirchturm. Ruhiger wird es in der Axarquía nicht.',
    intro: [
      'Árchez liegt auf etwa 435 Metern im Tal der Turvilla, zwischen <a href="/de/orte/competa/">Cómpeta</a>, <a href="/de/orte/canillas-de-albaida/">Canillas de Albaida</a> und <a href="/de/orte/sayalonga/">Sayalonga</a>. Nach Vélez-Málaga sind es etwa 21 Kilometer, nach Málaga 52. Mit einer Fläche von nicht einmal fünf Quadratkilometern ist es die kleinste Gemeinde der Provinz.',
      'Die bekannteste Sehenswürdigkeit ist der Kirchturm: ein Minarett aus maurischer Zeit, verziert mit geometrischem Mauerwerk im Stil der Almohaden. Das Dorf liegt an der Ruta Mudéjar, der Route entlang der maurischen Türme und Kirchen der östlichen Axarquía. Am Fluss stehen noch alte Mühlen.',
      'Hier leben gut 400 Menschen, fast ein Drittel davon aus dem Ausland. Rund um das Dorf liegen Terrassen mit Olivenbäumen und Reben und einige Landhäuser an den Hängen.',
    ],
    facts: [
      ['Einwohner', 'gut 400 (2025)'],
      ['Ausländische Einwohner', 'fast ein Drittel'],
      ['Lage', 'Berge, etwa 435 m, am Fluss'],
      ['Vélez-Málaga', 'etwa 21 km'],
      ['Málaga', 'etwa 52 km'],
      ['Preisniveau', 'niedrig bis mittel, rund 2.000 € pro m²'],
    ],
    forWhom: 'Für alle, die echte Ruhe in einem kleinen Dorf suchen, mit Cómpeta und Sayalonga als Nachbarn für den Alltag. Árchez passt zu Menschen, die ein Dorfhaus oder ein kleines Landhaus suchen und sich nicht daran stören, dass das Angebot begrenzt ist.',
    living: {
      title: 'Wohnen in Árchez: Dorfhäuser, Landhäuser und Preise',
      description: 'Haus in Árchez kaufen? Welche Immobilien es gibt, was sie kosten, wo Sie die Versorgung finden und worauf Sie bei einer Renovierung im Bergdorf achten.',
      lead: 'In Árchez kommt nur selten ein Haus auf den Markt. Wer hier wohnt, entscheidet sich für Stille und nimmt die Fahrt nach Cómpeta oder an die Küste in Kauf.',
      sections: [
        { h: 'Welche Immobilien es gibt', p: [
          'Im Dorf alte Dorfhäuser, oft mit dicken Mauern und einer Terrasse zur Flussseite. Außerhalb eine begrenzte Zahl von Landhäusern und Fincas auf den Terrassen. Weil die Gemeinde so klein ist, ist auch das Angebot klein.',
        ] },
        { h: 'Was eine Immobilie kostet', p: [
          'Im Oktober 2026 lagen die durchschnittlichen Angebotspreise bei rund 2.000 € pro m² (RealAdvisor). Weil wenig verkauft wird, sagen Durchschnittswerte hier weniger aus als in größeren Orten. Rechnen Sie mit rund 10% <a href="/de/ratgeber/kaufnebenkosten-spanien/">Kaufnebenkosten</a> und bei einem alten Haus mit einem <a href="/de/ratgeber/renovierungskosten-spanien/">Renovierungsbudget</a>.',
        ] },
        { h: 'Versorgung', p: [
          'Árchez selbst hat fast keine Einrichtungen. Zum Einkaufen, zum Arzt und ins Restaurant fahren Sie nach Cómpeta oder Sayalonga, für größere Supermärkte an die Küste und ins Krankenhaus nach Vélez-Málaga. Ein Auto ist unverzichtbar.',
        ] },
        { h: 'Vorsicht bei Landhäusern', p: [
          'Prüfen Sie bei einem Haus außerhalb des Dorfes, ob es legal ist, in welchem Zustand der Zufahrtsweg ist und woher das Wasser kommt. Lesen Sie unsere Ratgeber <a href="/de/ratgeber/finca-kaufen-spanien/">Finca kaufen</a> und <a href="/de/ratgeber/afo-legalisierung-andalusien/">AFO und Legalisierung</a>.',
        ] },
        { h: 'Renovieren in Árchez', p: [
          'Häuser im Tal und in Flussnähe haben häufiger Feuchtigkeit in Wänden und Böden. Gute Entwässerung, Belüftung und ein trockenes Fundament verdienen bei einer Renovierung die erste Aufmerksamkeit. Lassen Sie eine Immobilie vor dem Kauf <a href="/de/immobiliengutachten/">begutachten</a>.',
        ] },
      ],
    },
    faq: [
      { q: 'Was gibt es in Árchez zu sehen?', a: 'Vor allem den Kirchturm, ein Minarett aus maurischer Zeit mit geometrischem Mauerwerk. Das Dorf liegt an der Ruta Mudéjar, und am Fluss führen Wanderwege zu den Nachbardörfern.' },
      { q: 'Ist Árchez wirklich die kleinste Gemeinde von Málaga?', a: 'Ja, mit einer Fläche von 4,8 Quadratkilometern ist Árchez die kleinste Gemeinde der Provinz.' },
      { q: 'Wo kauft man ein, wenn man in Árchez wohnt?', a: 'In Cómpeta oder Sayalonga für den täglichen Bedarf, an der Küste oder in Vélez-Málaga für größere Supermärkte.' },
    ],
  },
  sv: {
    title: 'Árchez: bo i provinsen Málagas minsta kommun',
    description: 'Allt om Árchez: den lilla flodbyn med en av Andalusiens vackraste mudéjarminareter, läget mellan Cómpeta och Sayalonga, bostadspriser och att köpa och renovera.',
    lead: 'Árchez är den minsta kommunen i provinsen Málaga: en handfull vita gränder i en floddal, med en morisk minaret som kyrktorn. Lugnare än så här blir det inte i Axarquía.',
    intro: [
      'Árchez ligger på cirka 435 meters höjd i Turvilladalen, mellan <a href="/sv/orter/competa/">Cómpeta</a>, <a href="/sv/orter/canillas-de-albaida/">Canillas de Albaida</a> och <a href="/sv/orter/sayalonga/">Sayalonga</a>. Vélez-Málaga ligger cirka 21 kilometer bort, Málaga 52. Med en yta på under fem kvadratkilometer är det provinsens minsta kommun.',
      'Den mest kända sevärdheten är kyrktornet: en minaret från morisk tid, dekorerad med geometriskt tegelmönster i almohadisk stil. Byn ligger längs Ruta Mudéjar, vägen förbi de moriska tornen och kyrkorna i östra Axarquía. Längs floden står fortfarande gamla kvarnar.',
      'Här bor drygt 400 personer, nästan en tredjedel från utlandet. Runt byn finns terrasser med olivträd och vinrankor, och några lanthus på sluttningarna.',
    ],
    facts: [
      ['Invånare', 'drygt 400 (2025)'],
      ['Utländska invånare', 'nästan en tredjedel'],
      ['Läge', 'berg, cirka 435 m, vid floden'],
      ['Vélez-Málaga', 'cirka 21 km'],
      ['Málaga', 'cirka 52 km'],
      ['Prisnivå', 'låg till medel, cirka 2 000 € per m²'],
    ],
    forWhom: 'För dig som söker verkligt lugn i en liten by, med Cómpeta och Sayalonga som grannar för vardagsbehoven. Árchez passar dig som söker ett byhus eller ett litet lanthus och inte har något emot att utbudet är begränsat.',
    living: {
      title: 'Bo i Árchez: byhus, lanthus och priser',
      description: 'Köpa bostad i Árchez? Vilka bostäder som finns, vad de kostar, var du hittar service och vad du ska tänka på vid renovering i en liten bergsby vid floden.',
      lead: 'Det är sällan hus kommer ut till försäljning i Árchez. Den som bor här väljer tystnaden och accepterar bilresan till Cómpeta eller kusten.',
      sections: [
        { h: 'Vilka bostäder som finns', p: [
          'I byn gamla byhus, ofta med tjocka väggar och en terrass mot floden. Utanför byn ett begränsat antal lanthus och fincor på terrasserna. Eftersom kommunen är så liten är utbudet också litet.',
        ] },
        { h: 'Vad en bostad kostar', p: [
          'I oktober 2026 låg det genomsnittliga utgångspriset kring 2 000 € per m² (RealAdvisor). Eftersom få bostäder säljs säger genomsnitten mindre här än på större orter. Räkna med cirka 10 % i <a href="/sv/guider/kopa-hus-i-spanien-kostnader/">köpkostnader</a> och, för ett gammalt hus, en <a href="/sv/guider/renovera-hus-i-spanien-kostnad/">renoveringsbudget</a>.',
        ] },
        { h: 'Service', p: [
          'Árchez har nästan ingen service själv. För att handla, gå till läkaren och äta ute åker du till Cómpeta eller Sayalonga, för större livsmedelsbutiker till kusten och till Vélez-Málaga för sjukhuset. Bil är ett måste.',
        ] },
        { h: 'Se upp med lanthus', p: [
          'För ett hus utanför byn, kontrollera att det är lagligt, i vilket skick tillfartsvägen är och varifrån vattnet kommer. Läs våra guider om att <a href="/sv/guider/kopa-finca-i-spanien/">köpa finca</a> och om <a href="/sv/guider/afo-andalusien/">AFO och legalisering</a>.',
        ] },
        { h: 'Renovera i Árchez', p: [
          'Hus i dalen och nära floden är mer utsatta för fukt i väggar och golv. God dränering, ventilation och torra grunder förtjänar mest uppmärksamhet vid en renovering. Låt <a href="/sv/besiktning/">besiktiga</a> huset innan du köper.',
        ] },
      ],
    },
    faq: [
      { q: 'Vad finns att se i Árchez?', a: 'Framför allt kyrktornet, en minaret från morisk tid med geometriskt tegelmönster. Byn ligger längs Ruta Mudéjar, och gångstigar längs floden leder till grannbyarna.' },
      { q: 'Är Árchez verkligen den minsta kommunen i Málaga?', a: 'Ja, med en yta på 4,8 kvadratkilometer är Árchez provinsens minsta kommun.' },
      { q: 'Var handlar man om man bor i Árchez?', a: 'I Cómpeta eller Sayalonga för vardagsinköp, och vid kusten eller i Vélez-Málaga för större livsmedelsbutiker.' },
    ],
  },
};
export default content;
