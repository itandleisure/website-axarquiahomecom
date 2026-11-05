import type { PlaceContent } from './types';

// Feitenblad Colmenar (november 2026)
// - Inwoners: 3.626 (INE, 1 januari 2025). Oppervlakte 65,9 km²; hoogte 696 m; circa 32 km naar Málaga, 44 km naar Vélez-Málaga.
// - Ligt aan de noordkant van de Montes de Málaga.
// - Monumenten: Ermita de la Candelaria (17e eeuw, lokaal monument sinds 1982, uitzicht tot Sierra Nevada), kerk La Asunción (16e eeuw, barok camarín),
//   Puerta de la Cruz, Museo de la Miel (honingmuseum).
// - Economie: olijven, druiven, graan; honing, wijn en vleeswaren (chacinas, embutidos).
// - Fiesta's: Virgen de la Candelaria en San Blas (begin februari), Semana Santa, Feria de agosto (vier dagen),
//   Fiesta del mosto y la chacina (tweede zondag van december).
// - Woningprijzen: circa € 1.750 per m² (RealAdvisor, oktober 2026).
const content: PlaceContent = {
  sources: [
    'https://es.wikipedia.org/wiki/Colmenar_(Málaga)',
    'https://realadvisor.es/es/precios-viviendas/municipio-colmenar',
  ],
  nl: {
    title: 'Colmenar: wonen in de bergen op een half uur van Málaga',
    description: 'Alles over Colmenar: het bergdorp achter de Montes de Málaga, de Ermita de la Candelaria, honing en vleeswaren, woningprijzen en wat u moet weten over kopen en verbouwen.',
    lead: 'Colmenar ligt op bijna 700 meter achter de Montes de Málaga. Het is een van de grootste dorpen in het binnenland van de Axarquía, met Málaga op ongeveer een half uur rijden.',
    intro: [
      'Colmenar ligt in het westen van de Axarquía, aan de noordkant van het natuurpark Montes de Málaga, ongeveer 32 kilometer van Málaga. Het dorp ligt op een helling op 696 meter, tussen olijfgaarden, wijngaarden en graanvelden.',
      'De naam komt van de bijenkorven (<em>colmenas</em>), en honing is hier nog steeds een bekend product, naast wijn, olijfolie en vleeswaren. Boven het dorp staat de Ermita de la Candelaria, een zeventiende-eeuwse kapel met uitzicht tot aan de Sierra de Tejeda en, bij helder weer, de Sierra Nevada.',
      'Met ruim 3.600 inwoners heeft Colmenar meer voorzieningen dan de meeste bergdorpen. Door de korte rit naar Málaga wonen hier ook mensen die in de stad werken.',
    ],
    facts: [
      ['Inwoners', 'ruim 3.600 (2025)'],
      ['Ligging', 'binnenland, 696 m hoog'],
      ['Málaga', 'circa 32 km, ongeveer een half uur'],
      ['Vélez-Málaga', 'circa 44 km'],
      ['Bekend om', 'honing, wijn en vleeswaren'],
      ['Prijsniveau', 'laag, circa € 1.750 per m²'],
    ],
    forWhom: 'Voor wie in de bergen wil wonen maar Málaga, de luchthaven en de ziekenhuizen van de stad binnen bereik wil houden. Colmenar past bij mensen die een betaalbaar huis met ruimte zoeken en het koelere klimaat van het binnenland niet erg vinden.',
    see: {
      title: 'Zien en doen in Colmenar: de Candelaria, honing en de Montes de Málaga',
      description: 'Wat te doen in Colmenar: de Ermita de la Candelaria, de kerk La Asunción, het honingmuseum, wandelen in de Montes de Málaga en het feest van de most en de worst.',
      lead: 'Colmenar is een goed vertrekpunt voor de Montes de Málaga en heeft zelf een paar plekken die een bezoek waard zijn.',
      items: [
        { name: 'Ermita de la Candelaria', text: 'De kapel uit de zeventiende eeuw op de heuvel boven het dorp is een lokaal monument. Het uitzicht reikt over de Axarquía tot aan de Sierra de Tejeda en de Sierra Nevada.' },
        { name: 'Kerk La Asunción', text: 'De dorpskerk werd in de zestiende eeuw begonnen en heeft een barokke <em>camarín</em>, een rijk versierde kapel achter het altaar.' },
        { name: 'Museo de la Miel', text: 'Het honingmuseum vertelt over de imkerij waaraan het dorp zijn naam dankt. U kunt er ook lokale honing kopen.' },
        { name: 'Montes de Málaga', text: 'Het natuurpark tussen Colmenar en Málaga heeft wandelpaden door dennenbossen en oude wijnboerderijen, en ventas langs de oude weg waar u kunt eten.' },
      ],
      fiestas: [
        { name: 'Virgen de la Candelaria en San Blas', when: 'begin februari', text: 'feest van de beschermheiligen bij de kapel boven het dorp.' },
        { name: 'Feria de agosto', when: 'augustus', text: 'vier dagen zomerfeest.' },
        { name: 'Fiesta del mosto y la chacina', when: 'tweede zondag van december', text: 'proeverij van jonge wijn en lokale vleeswaren, in de tijd van de traditionele slacht.' },
      ],
    },
    living: {
      title: 'Wonen in Colmenar: dorpshuizen, landhuizen en prijzen',
      description: 'Een huis kopen in Colmenar? Welke woningen er zijn, wat ze kosten, de voorzieningen in het dorp en waar u op let bij landelijke huizen en verbouwen op 700 meter.',
      lead: 'Colmenar combineert lage prijzen met Málaga op een half uur. Dat is in de Axarquía een zeldzame combinatie.',
      sections: [
        { h: 'Wat voor woningen er zijn', p: [
          'In het dorp dorpshuizen en enkele nieuwere woningen en appartementen. Daarbuiten landhuizen en cortijos met olijfbomen, wijnstokken of akkers, vaak met veel grond.',
        ] },
        { h: 'Wat een woning kost', p: [
          'In oktober 2026 lag de gemiddelde vraagprijs rond de € 1.750 per m² (RealAdvisor), ongeveer de helft van de kust. Reken op ongeveer 10% <a href="/nl/gidsen/kosten-koper-spanje/">kosten koper</a> en, bij een oud huis, een <a href="/nl/gidsen/kosten-huis-renoveren-spanje/">verbouwbudget</a>.',
        ] },
        { h: 'Voorzieningen', p: [
          'Colmenar heeft een gezondheidscentrum, apotheken, supermarkten, banken en scholen. Voor het ziekenhuis en grotere winkels rijdt u naar Málaga.',
        ] },
        { h: 'Let op bij landelijke huizen', p: [
          'Controleer bij een huis buiten het dorp de legale status, de toegangsweg en de watervoorziening. Lees onze gidsen over <a href="/nl/gidsen/finca-kopen-in-spanje/">finca kopen</a> en <a href="/nl/gidsen/afo-legaliseren-andalusie/">AFO en legaliseren</a>.',
        ] },
        { h: 'Verbouwen in Colmenar', p: [
          'Op 700 meter kan het ’s winters echt koud worden. Isolatie, dubbele beglazing en een goede verwarming zijn bij een renovatie hier belangrijk, net als een dak dat regen en kou buitenhoudt. Laat een woning vóór aankoop <a href="/nl/aankoopkeuring/">keuren</a>.',
        ] },
      ],
    },
    faq: [
      { q: 'Hoe ver is Colmenar van Málaga?', a: 'Ongeveer 32 kilometer, zo’n half uur rijden. Daarmee is Colmenar een van de best bereikbare bergdorpen vanuit de stad.' },
      { q: 'Is het koud in Colmenar?', a: 'In de winter wel kouder dan aan de kust, door de hoogte van bijna 700 meter. In de zomer is het er juist aangenamer dan beneden.' },
      { q: 'Kun je vanuit Colmenar wandelen in de Montes de Málaga?', a: 'Ja, het natuurpark begint ten zuiden van het dorp. Er lopen paden door dennenbossen en langs oude wijnboerderijen richting Málaga.' },
    ],
  },
  en: {
    title: 'Colmenar: mountain living half an hour from Málaga',
    description: 'All about Colmenar: the mountain village behind the Montes de Málaga, the Ermita de la Candelaria, honey and cured meats, property prices and what to know about buying and renovating.',
    lead: 'Colmenar sits at almost 700 metres behind the Montes de Málaga. It is one of the largest villages in the Axarquía’s interior, with Málaga about half an hour’s drive away.',
    intro: [
      'Colmenar lies in the west of the Axarquía, on the northern side of the Montes de Málaga natural park, about 32 kilometres from Málaga. The village sits on a slope at 696 metres, among olive groves, vineyards and grain fields.',
      'Its name comes from beehives (<em>colmenas</em>), and honey is still a well-known product here, along with wine, olive oil and cured meats. Above the village stands the Ermita de la Candelaria, a seventeenth-century chapel with views to the Sierra de Tejeda and, on clear days, the Sierra Nevada.',
      'With just over 3,600 residents, Colmenar has more facilities than most mountain villages. Thanks to the short drive to Málaga, people who work in the city also live here.',
    ],
    facts: [
      ['Population', 'just over 3,600 (2025)'],
      ['Setting', 'inland, 696 m up'],
      ['Málaga', 'about 32 km, roughly half an hour'],
      ['Vélez-Málaga', 'about 44 km'],
      ['Known for', 'honey, wine and cured meats'],
      ['Price level', 'low, about €1,750 per m²'],
    ],
    forWhom: 'People who want to live in the mountains but keep Málaga, the airport and the city’s hospitals within reach. Colmenar suits those looking for an affordable home with space who do not mind the cooler inland climate.',
    see: {
      title: 'Things to do in Colmenar: the Candelaria, honey and the Montes de Málaga',
      description: 'What to do in Colmenar: the Ermita de la Candelaria, La Asunción church, the honey museum, walking in the Montes de Málaga and the festival of new wine and sausages.',
      lead: 'Colmenar is a good base for the Montes de Málaga and has a few places of its own worth a visit.',
      items: [
        { name: 'Ermita de la Candelaria', text: 'The seventeenth-century chapel on the hill above the village is a local monument. The view stretches across the Axarquía to the Sierra de Tejeda and the Sierra Nevada.' },
        { name: 'La Asunción church', text: 'The village church was begun in the sixteenth century and has a Baroque <em>camarín</em>, a richly decorated chapel behind the altar.' },
        { name: 'Museo de la Miel', text: 'The honey museum tells the story of the beekeeping that gave the village its name. You can also buy local honey there.' },
        { name: 'Montes de Málaga', text: 'The natural park between Colmenar and Málaga has walking trails through pine forests and past old wine farms, and ventas along the old road where you can eat.' },
      ],
      fiestas: [
        { name: 'Virgen de la Candelaria and San Blas', when: 'early February', text: 'the patron saints’ fiesta at the chapel above the village.' },
        { name: 'Feria de agosto', when: 'August', text: 'a four-day summer fair.' },
        { name: 'Fiesta del mosto y la chacina', when: 'second Sunday of December', text: 'tasting of new wine and local cured meats, at the time of the traditional slaughter.' },
      ],
    },
    living: {
      title: 'Living in Colmenar: village houses, country houses and prices',
      description: 'Buying a home in Colmenar? The types of property, what they cost, the village facilities and what to watch for with country houses and renovation at 700 metres.',
      lead: 'Colmenar combines low prices with Málaga half an hour away. In the Axarquía that is a rare combination.',
      sections: [
        { h: 'Types of property', p: [
          'In the village, village houses and some newer homes and apartments. Outside it, country houses and cortijos with olive trees, vines or fields, often with a lot of land.',
        ] },
        { h: 'What a home costs', p: [
          'In October 2026 average asking prices were around €1,750 per m² (RealAdvisor), about half the coastal level. Allow around 10% for <a href="/en/guides/buying-costs-in-spain/">buying costs</a> and, for an old house, a <a href="/en/guides/renovation-costs-spain/">renovation budget</a>.',
        ] },
        { h: 'Facilities', p: [
          'Colmenar has a health centre, pharmacies, supermarkets, banks and schools. For the hospital and bigger shops you drive to Málaga.',
        ] },
        { h: 'Watch out with country houses', p: [
          'For a house outside the village, check the legal status, the access track and the water supply. Read our guides to <a href="/en/guides/buying-a-finca-in-spain/">buying a finca</a> and <a href="/en/guides/afo-legalisation-andalusia/">AFO and legalisation</a>.',
        ] },
        { h: 'Renovating in Colmenar', p: [
          'At 700 metres it can get properly cold in winter. Insulation, double glazing and good heating matter in a renovation here, as does a roof that keeps out rain and cold. Have a property <a href="/en/property-survey/">surveyed</a> before you buy.',
        ] },
      ],
    },
    faq: [
      { q: 'How far is Colmenar from Málaga?', a: 'About 32 kilometres, roughly half an hour by car. That makes Colmenar one of the most accessible mountain villages from the city.' },
      { q: 'Is it cold in Colmenar?', a: 'In winter it is colder than on the coast, because of the altitude of almost 700 metres. In summer it is more pleasant than down below.' },
      { q: 'Can you walk in the Montes de Málaga from Colmenar?', a: 'Yes, the natural park begins south of the village. Trails lead through pine forests and past old wine farms towards Málaga.' },
    ],
  },
  de: {
    title: 'Colmenar: Wohnen in den Bergen, eine halbe Stunde von Málaga',
    description: 'Alles über Colmenar: das Bergdorf hinter den Montes de Málaga, die Ermita de la Candelaria, Honig und Wurstwaren, Immobilienpreise und was Sie zu Kauf und Renovierung wissen sollten.',
    lead: 'Colmenar liegt auf fast 700 Metern hinter den Montes de Málaga. Es ist eines der größten Dörfer im Hinterland der Axarquía, Málaga ist etwa eine halbe Stunde entfernt.',
    intro: [
      'Colmenar liegt im Westen der Axarquía, an der Nordseite des Naturparks Montes de Málaga, etwa 32 Kilometer von Málaga entfernt. Das Dorf liegt an einem Hang auf 696 Metern, zwischen Olivenhainen, Weinbergen und Getreidefeldern.',
      'Der Name kommt von den Bienenstöcken (<em>colmenas</em>), und Honig ist hier bis heute ein bekanntes Produkt, neben Wein, Olivenöl und Wurstwaren. Über dem Dorf steht die Ermita de la Candelaria, eine Kapelle aus dem 17. Jahrhundert mit Blick bis zur Sierra de Tejeda und bei klarem Wetter zur Sierra Nevada.',
      'Mit gut 3.600 Einwohnern hat Colmenar mehr Einrichtungen als die meisten Bergdörfer. Wegen der kurzen Fahrt nach Málaga wohnen hier auch Menschen, die in der Stadt arbeiten.',
    ],
    facts: [
      ['Einwohner', 'gut 3.600 (2025)'],
      ['Lage', 'Hinterland, 696 m hoch'],
      ['Málaga', 'etwa 32 km, rund eine halbe Stunde'],
      ['Vélez-Málaga', 'etwa 44 km'],
      ['Bekannt für', 'Honig, Wein und Wurstwaren'],
      ['Preisniveau', 'niedrig, rund 1.750 € pro m²'],
    ],
    forWhom: 'Für alle, die in den Bergen wohnen, aber Málaga, den Flughafen und die Krankenhäuser der Stadt in Reichweite behalten möchten. Colmenar passt zu Menschen, die ein bezahlbares Haus mit Platz suchen und das kühlere Klima des Hinterlands nicht scheuen.',
    see: {
      title: 'Sehenswertes in Colmenar: Candelaria, Honig und die Montes de Málaga',
      description: 'Was man in Colmenar unternehmen kann: die Ermita de la Candelaria, die Kirche La Asunción, das Honigmuseum, Wandern in den Montes de Málaga und das Fest von Most und Wurst.',
      lead: 'Colmenar ist ein guter Ausgangspunkt für die Montes de Málaga und hat selbst einige Orte, die einen Besuch lohnen.',
      items: [
        { name: 'Ermita de la Candelaria', text: 'Die Kapelle aus dem 17. Jahrhundert auf dem Hügel über dem Dorf ist ein lokales Denkmal. Der Blick reicht über die Axarquía bis zur Sierra de Tejeda und zur Sierra Nevada.' },
        { name: 'Kirche La Asunción', text: 'Die Dorfkirche wurde im 16. Jahrhundert begonnen und hat einen barocken <em>Camarín</em>, eine reich verzierte Kapelle hinter dem Altar.' },
        { name: 'Museo de la Miel', text: 'Das Honigmuseum erzählt von der Imkerei, der das Dorf seinen Namen verdankt. Dort können Sie auch Honig aus der Gegend kaufen.' },
        { name: 'Montes de Málaga', text: 'Der Naturpark zwischen Colmenar und Málaga hat Wanderwege durch Kiefernwälder und an alten Weingütern vorbei, dazu Ventas an der alten Straße, in denen Sie essen können.' },
      ],
      fiestas: [
        { name: 'Virgen de la Candelaria und San Blas', when: 'Anfang Februar', text: 'Fest der Schutzpatrone an der Kapelle über dem Dorf.' },
        { name: 'Feria de agosto', when: 'August', text: 'vier Tage Sommerfest.' },
        { name: 'Fiesta del mosto y la chacina', when: 'zweiter Sonntag im Dezember', text: 'Verkostung von jungem Wein und Wurstwaren aus dem Ort, zur Zeit der traditionellen Schlachtung.' },
      ],
    },
    living: {
      title: 'Wohnen in Colmenar: Dorfhäuser, Landhäuser und Preise',
      description: 'Ein Haus in Colmenar kaufen? Welche Immobilien es gibt, was sie kosten, die Versorgung im Dorf und worauf Sie bei Landhäusern und Renovierungen auf 700 Metern achten sollten.',
      lead: 'Colmenar verbindet niedrige Preise mit Málaga in einer halben Stunde. In der Axarquía ist das eine seltene Kombination.',
      sections: [
        { h: 'Welche Immobilien es gibt', p: [
          'Im Dorf Dorfhäuser und einige neuere Häuser und Wohnungen. Außerhalb Landhäuser und Cortijos mit Olivenbäumen, Reben oder Feldern, oft mit viel Land.',
        ] },
        { h: 'Was eine Immobilie kostet', p: [
          'Im Oktober 2026 lagen die durchschnittlichen Angebotspreise bei rund 1.750 € pro m² (RealAdvisor), etwa die Hälfte der Küste. Rechnen Sie mit rund 10% <a href="/de/ratgeber/kaufnebenkosten-spanien/">Kaufnebenkosten</a> und bei einem alten Haus mit einem <a href="/de/ratgeber/renovierungskosten-spanien/">Renovierungsbudget</a>.',
        ] },
        { h: 'Versorgung', p: [
          'Colmenar hat ein Gesundheitszentrum, Apotheken, Supermärkte, Banken und Schulen. Für das Krankenhaus und größere Geschäfte fahren Sie nach Málaga.',
        ] },
        { h: 'Vorsicht bei Landhäusern', p: [
          'Prüfen Sie bei einem Haus außerhalb des Dorfes den rechtlichen Status, den Zufahrtsweg und die Wasserversorgung. Lesen Sie unsere Ratgeber <a href="/de/ratgeber/finca-kaufen-spanien/">Finca kaufen</a> und <a href="/de/ratgeber/afo-legalisierung-andalusien/">AFO und Legalisierung</a>.',
        ] },
        { h: 'Renovieren in Colmenar', p: [
          'Auf 700 Metern kann es im Winter richtig kalt werden. Dämmung, Doppelverglasung und eine gute Heizung sind bei einer Renovierung hier wichtig, ebenso ein Dach, das Regen und Kälte abhält. Lassen Sie eine Immobilie vor dem Kauf <a href="/de/immobiliengutachten/">begutachten</a>.',
        ] },
      ],
    },
    faq: [
      { q: 'Wie weit ist Colmenar von Málaga entfernt?', a: 'Etwa 32 Kilometer, rund eine halbe Stunde mit dem Auto. Damit ist Colmenar eines der am besten erreichbaren Bergdörfer von der Stadt aus.' },
      { q: 'Ist es kalt in Colmenar?', a: 'Im Winter kälter als an der Küste, wegen der Höhe von fast 700 Metern. Im Sommer ist es dafür angenehmer als unten.' },
      { q: 'Kann man von Colmenar aus in den Montes de Málaga wandern?', a: 'Ja, der Naturpark beginnt südlich des Dorfes. Wege führen durch Kiefernwälder und an alten Weingütern vorbei in Richtung Málaga.' },
    ],
  },
  sv: {
    title: 'Colmenar: bergsliv en halvtimme från Málaga',
    description: 'Allt om Colmenar: bergsbyn bakom Montes de Málaga, Ermita de la Candelaria, honung och charkuterier, bostadspriser och vad du ska veta om att köpa och renovera.',
    lead: 'Colmenar ligger på nästan 700 meters höjd bakom Montes de Málaga. Det är en av de största byarna i Axarquías inland, med Málaga cirka en halvtimme bort med bil.',
    intro: [
      'Colmenar ligger i västra Axarquía, på norra sidan av naturparken Montes de Málaga, cirka 32 kilometer från Málaga. Byn ligger i en sluttning på 696 meter, bland olivlundar, vingårdar och sädesfält.',
      'Namnet kommer från bikupor (<em>colmenas</em>), och honung är fortfarande en känd produkt här, liksom vin, olivolja och charkuterier. Ovanför byn står Ermita de la Candelaria, ett kapell från 1600-talet med utsikt mot Sierra de Tejeda och, klara dagar, Sierra Nevada.',
      'Med drygt 3 600 invånare har Colmenar mer service än de flesta bergsbyar. Tack vare den korta bilresan till Málaga bor här också människor som arbetar i staden.',
    ],
    facts: [
      ['Invånare', 'drygt 3 600 (2025)'],
      ['Läge', 'inland, 696 m'],
      ['Málaga', 'cirka 32 km, ungefär en halvtimme'],
      ['Vélez-Málaga', 'cirka 44 km'],
      ['Känt för', 'honung, vin och charkuterier'],
      ['Prisnivå', 'låg, cirka 1 750 € per m²'],
    ],
    forWhom: 'För dig som vill bo i bergen men ha Málaga, flygplatsen och stadens sjukhus inom räckhåll. Colmenar passar dig som söker en prisvärd bostad med utrymme och inte har något emot inlandets svalare klimat.',
    see: {
      title: 'Se och göra i Colmenar: Candelaria, honung och Montes de Málaga',
      description: 'Vad du kan göra i Colmenar: Ermita de la Candelaria, kyrkan La Asunción, honungsmuseet, vandra i Montes de Málaga och festen för nytt vin och korv.',
      lead: 'Colmenar är en bra bas för Montes de Málaga och har några egna platser som är värda ett besök.',
      items: [
        { name: 'Ermita de la Candelaria', text: 'Kapellet från 1600-talet på kullen ovanför byn är ett lokalt monument. Utsikten sträcker sig över Axarquía till Sierra de Tejeda och Sierra Nevada.' },
        { name: 'Kyrkan La Asunción', text: 'Byns kyrka påbörjades på 1500-talet och har en barock <em>camarín</em>, ett rikt dekorerat kapell bakom altaret.' },
        { name: 'Museo de la Miel', text: 'Honungsmuseet berättar om biodlingen som gav byn dess namn. Där kan du också köpa lokal honung.' },
        { name: 'Montes de Málaga', text: 'Naturparken mellan Colmenar och Málaga har vandringsleder genom tallskog och förbi gamla vingårdar, och ventas längs den gamla vägen där du kan äta.' },
      ],
      fiestas: [
        { name: 'Virgen de la Candelaria och San Blas', when: 'början av februari', text: 'skyddshelgonens fest vid kapellet ovanför byn.' },
        { name: 'Feria de agosto', when: 'augusti', text: 'en sommarferia i fyra dagar.' },
        { name: 'Fiesta del mosto y la chacina', when: 'andra söndagen i december', text: 'provsmakning av nytt vin och lokala charkuterier, vid tiden för den traditionella slakten.' },
      ],
    },
    living: {
      title: 'Bo i Colmenar: byhus, lanthus och priser',
      description: 'Köpa bostad i Colmenar? Vilka bostäder som finns, vad de kostar, service i byn och vad du ska tänka på med lanthus och renovering på 700 meter.',
      lead: 'Colmenar kombinerar låga priser med Málaga en halvtimme bort. I Axarquía är det en ovanlig kombination.',
      sections: [
        { h: 'Vilka bostäder som finns', p: [
          'I byn byhus och några nyare bostäder och lägenheter. Utanför byn lanthus och cortijos med olivträd, vinrankor eller åkrar, ofta med mycket mark.',
        ] },
        { h: 'Vad en bostad kostar', p: [
          'I oktober 2026 låg det genomsnittliga utgångspriset kring 1 750 € per m² (RealAdvisor), ungefär hälften av nivån vid kusten. Räkna med cirka 10 % i <a href="/sv/guider/kopa-hus-i-spanien-kostnader/">köpkostnader</a> och, för ett gammalt hus, en <a href="/sv/guider/renovera-hus-i-spanien-kostnad/">renoveringsbudget</a>.',
        ] },
        { h: 'Service', p: [
          'Colmenar har vårdcentral, apotek, livsmedelsbutiker, banker och skolor. För sjukhus och större affärer kör du till Málaga.',
        ] },
        { h: 'Se upp med lanthus', p: [
          'För ett hus utanför byn, kontrollera den rättsliga statusen, tillfartsvägen och vattenförsörjningen. Läs våra guider om att <a href="/sv/guider/kopa-finca-i-spanien/">köpa finca</a> och om <a href="/sv/guider/afo-andalusien/">AFO och legalisering</a>.',
        ] },
        { h: 'Renovera i Colmenar', p: [
          'På 700 meter kan det bli riktigt kallt på vintern. Isolering, dubbelglas och bra uppvärmning är viktigt vid en renovering här, liksom ett tak som håller ute regn och kyla. Låt <a href="/sv/besiktning/">besiktiga</a> huset innan du köper.',
        ] },
      ],
    },
    faq: [
      { q: 'Hur långt är det från Colmenar till Málaga?', a: 'Cirka 32 kilometer, ungefär en halvtimme med bil. Det gör Colmenar till en av de bergsbyar som är lättast att nå från staden.' },
      { q: 'Är det kallt i Colmenar?', a: 'På vintern är det kallare än vid kusten, på grund av höjden på nästan 700 meter. På sommaren är det behagligare än nere vid havet.' },
      { q: 'Kan man vandra i Montes de Málaga från Colmenar?', a: 'Ja, naturparken börjar söder om byn. Leder går genom tallskog och förbi gamla vingårdar mot Málaga.' },
    ],
  },
};
export default content;
