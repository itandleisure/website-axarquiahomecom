import type { PlaceContent } from './types';

// Feitenblad Comares (november 2026)
// - Inwoners: 1.354 (INE, 1 januari 2025); 516 buitenlandse inwoners in 2022 (39%).
// - Oppervlakte 25,5 km²; hoogte 703 m; circa 25 km naar Vélez-Málaga en 39 km naar Málaga.
// - Bijnaam "Balcón de la Axarquía". Bolwerk van Omar ben Hafsun (9e eeuw); in 1487 aan de christenen overgegeven.
// - Monumenten: kerk La Encarnación (16e eeuw), resten van de alcazaba met Torre del Homenaje en muren, Arabische bogen bij de plaza Verdiales,
//   aljibe en archeologische resten op de Meseta de Mazmúllar (11e eeuw), coracha van de Fuente Gorda.
// - Fiesta's: San Hilario 13 januari, fiestas patronales 23 en 24 augustus.
// - Woningprijzen: circa € 1.700 per m² (RealAdvisor, oktober 2026).
const content: PlaceContent = {
  sources: [
    'https://es.wikipedia.org/wiki/Comares',
    'https://realadvisor.es/es/precios-viviendas/municipio-comares',
  ],
  nl: {
    title: 'Comares: wonen op het balkon van de Axarquía',
    description: 'Alles over Comares: het witte dorp op 700 meter met uitzicht over de hele Axarquía, de Moorse geschiedenis, woningprijzen, finca’s en waar u op let bij kopen en verbouwen.',
    lead: 'Comares ligt als een witte kroon op een bergtop van ruim 700 meter. Vanaf het dorp kijkt u over de hele Axarquía tot aan de zee, en daarom heet het het balkon van de streek.',
    intro: [
      'Comares is een van de hoogst gelegen dorpen van de Axarquía, op 703 meter, ongeveer 25 kilometer boven <a href="/nl/plaatsen/velez-malaga/">Vélez-Málaga</a> en 39 kilometer van Málaga. De weg omhoog slingert door olijfgaarden en amandelbomen, en bovenaan wacht een dorp van smalle witte straatjes rond een kerk en de resten van een Moorse burcht.',
      'In de negende eeuw was Comares een bolwerk van Omar ben Hafsun, de opstandeling die jarenlang het kalifaat van Córdoba trotseerde. Pas in 1487 gaf het dorp zich over aan de christelijke legers. Keramieken voetstappen in de straten leiden bezoekers langs de plekken uit die geschiedenis.',
      'Het dorp telt ongeveer 1.350 inwoners, van wie bijna vier op de tien een buitenlandse nationaliteit hebben. Veel van hen wonen niet in het dorp zelf maar op cortijos en finca’s op de hellingen eromheen.',
    ],
    facts: [
      ['Inwoners', 'circa 1.350 (2025)'],
      ['Buitenlandse inwoners', 'bijna 40%'],
      ['Ligging', 'bergen, 703 m hoog'],
      ['Vélez-Málaga', 'circa 25 km'],
      ['Málaga', 'circa 39 km'],
      ['Prijsniveau', 'laag, circa € 1.700 per m²'],
    ],
    forWhom: 'Voor wie rust, ruimte en uitzicht belangrijker vindt dan het strand om de hoek. Comares past bij mensen die een finca met land zoeken of een dorpshuis met dakterras, en die het niet erg vinden om voor de grote boodschappen naar beneden te rijden.',
    see: {
      title: 'Zien en doen in Comares: uitzichtpunten, Moorse resten en wandelingen',
      description: 'Wat te doen in Comares: het uitzicht vanaf het balkon van de Axarquía, de resten van de alcazaba, de kerk La Encarnación, de route van de voetstappen en de fiesta’s.',
      lead: 'Comares is vooral een plek om rond te kijken: naar het dorp zelf, naar de geschiedenis in de muren en naar het uitzicht over de streek.',
      items: [
        { name: 'Het uitzicht', text: 'Vanaf de pleinen en de rand van het dorp ziet u bij helder weer de hele Axarquía: de heuvels met olijfbomen, het stuwmeer van La Viñuela, de kust en soms zelfs de Sierra Nevada.' },
        { name: 'De alcazaba', text: 'Van de Moorse burcht staan nog de Torre del Homenaje en delen van de muren. Ook de Arabische bogen bij de plaza Verdiales en de resten van de coracha bij de Fuente Gorda horen bij die vesting.' },
        { name: 'Kerk La Encarnación', text: 'De zestiende-eeuwse dorpskerk staat op de plek van de oude Moorse burcht en is het middelpunt van het dorp.' },
        { name: 'Meseta de Mazmúllar', text: 'Op het plateau van Mazmúllar, net boven het dorp, liggen archeologische resten uit de elfde eeuw en een oude waterput (<em>aljibe</em>).' },
        { name: 'Wandelen', text: 'Rond Comares lopen oude muilezelpaden door de olijfgaarden naar de dalen eronder. Ze zijn het mooist in het voorjaar, als de amandelbomen bloeien.' },
      ],
      fiestas: [
        { name: 'San Hilario', when: '13 januari', text: 'feest van de beschermheilige.' },
        { name: 'Fiestas patronales', when: '23 en 24 augustus', text: 'het zomerfeest van het dorp, met muziek en verdiales.' },
      ],
    },
    living: {
      title: 'Wonen in Comares: dorpshuizen, finca’s en prijzen',
      description: 'Een huis kopen in Comares? Welke woningen er zijn, wat ze kosten, hoe bereikbaar het dorp is en waar u op let bij finca’s en verbouwen op 700 meter hoogte.',
      lead: 'Comares is een van de betaalbaarste plaatsen van de Axarquía, met uitzicht dat aan de kust onbetaalbaar zou zijn. Daar staat tegenover dat u voor bijna alles de berg af moet.',
      sections: [
        { h: 'Wat voor woningen er zijn', p: [
          'In het dorp zelf vooral oude dorpshuizen op meerdere verdiepingen, vaak met een dakterras en uitzicht. Daarbuiten cortijos en finca’s met olijfbomen en amandelbomen, van eenvoudige landhuizen tot gerenoveerde villa’s met zwembad.',
        ] },
        { h: 'Wat een woning kost', p: [
          'In oktober 2026 lag de gemiddelde vraagprijs rond de € 1.700 per m² (RealAdvisor), minder dan de helft van Nerja of Frigiliana. Een dorpshuis dat opgeknapt moet worden is er nog voor een bescheiden bedrag. Reken op ongeveer 10% <a href="/nl/gidsen/kosten-koper-spanje/">kosten koper</a> en, bij een oud huis, een flink <a href="/nl/gidsen/kosten-huis-renoveren-spanje/">verbouwbudget</a>.',
        ] },
        { h: 'Voorzieningen en bereikbaarheid', p: [
          'Het dorp heeft een consultorio (huisartsenpost), een paar winkels en bars en een basisschool. Voor een supermarkt, middelbare school en ziekenhuis rijdt u naar Vélez-Málaga, ongeveer een half uur over een bochtige bergweg. Málaga en de luchthaven liggen op ongeveer drie kwartier tot een uur.',
        ] },
        { h: 'Let op bij finca’s', p: [
          'Veel landhuizen rond Comares zijn in de loop der jaren uitgebreid. Controleer bij aankoop of alles legaal is, hoe de toegangsweg erbij ligt en waar het water vandaan komt. Lees onze gidsen over <a href="/nl/gidsen/finca-kopen-in-spanje/">finca kopen</a> en <a href="/nl/gidsen/afo-legaliseren-andalusie/">AFO en legaliseren</a>.',
        ] },
        { h: 'Verbouwen in Comares', p: [
          'Op 700 meter kan het ’s winters koud en vochtig zijn. Isolatie, goede kozijnen en verwarming zijn bij een renovatie hier geen luxe. In het dorp zijn de straatjes smal en steil, dus materiaal aanvoeren kost extra tijd. Laat een woning vóór aankoop <a href="/nl/aankoopkeuring/">keuren</a>, zeker bij oude muren en daken.',
        ] },
      ],
    },
    faq: [
      { q: 'Hoe ver is Comares van de zee?', a: 'Ongeveer 25 kilometer naar Vélez-Málaga en de kust bij Torre del Mar, zo’n half uur rijden over een bochtige weg.' },
      { q: 'Wonen er veel buitenlanders in Comares?', a: 'Ja. In 2022 had bijna 40% van de inwoners een buitenlandse nationaliteit, vooral Britten en Noord-Europeanen, van wie velen op finca’s buiten het dorp wonen.' },
      { q: 'Is Comares goedkoop?', a: 'In vergelijking met de kust wel. De gemiddelde vraagprijs lag in oktober 2026 rond de € 1.700 per m², tegen bijna het dubbele in Frigiliana.' },
    ],
  },
  en: {
    title: 'Comares: living on the balcony of the Axarquía',
    description: 'All about Comares: the white village at 700 metres with views over the whole Axarquía, its Moorish history, property prices, fincas and what to know about buying and renovating.',
    lead: 'Comares sits like a white crown on a mountain top more than 700 metres up. From the village you look out over the whole Axarquía to the sea, which is why it is called the balcony of the region.',
    intro: [
      'Comares is one of the highest villages in the Axarquía, at 703 metres, about 25 kilometres above <a href="/en/places/velez-malaga/">Vélez-Málaga</a> and 39 kilometres from Málaga. The road winds up through olive groves and almond trees, and at the top is a village of narrow white lanes around a church and the remains of a Moorish castle.',
      'In the ninth century Comares was a stronghold of Omar ben Hafsun, the rebel who defied the Caliphate of Córdoba for years. The village did not surrender to the Christian armies until 1487. Ceramic footprints set into the streets lead visitors past the places from that history.',
      'The village has about 1,350 residents, nearly four in ten of them foreign nationals. Many of them live not in the village itself but on cortijos and fincas on the surrounding slopes.',
    ],
    facts: [
      ['Population', 'about 1,350 (2025)'],
      ['Foreign residents', 'nearly 40%'],
      ['Setting', 'mountains, 703 m up'],
      ['Vélez-Málaga', 'about 25 km'],
      ['Málaga', 'about 39 km'],
      ['Price level', 'low, about €1,700 per m²'],
    ],
    forWhom: 'People who value peace, space and views more than having the beach around the corner. Comares suits those looking for a finca with land or a village house with a roof terrace, who do not mind driving down for the big shop.',
    see: {
      title: 'Things to do in Comares: viewpoints, Moorish remains and walks',
      description: 'What to do in Comares: the view from the balcony of the Axarquía, the remains of the alcazaba, La Encarnación church, the footprint trail and the fiestas.',
      lead: 'Comares is above all a place to look around: at the village itself, at the history in its walls and at the view over the region.',
      items: [
        { name: 'The view', text: 'From the squares and the edge of the village you can see, on a clear day, the whole Axarquía: hills of olive trees, La Viñuela reservoir, the coast and sometimes even the Sierra Nevada.' },
        { name: 'The alcazaba', text: 'The Torre del Homenaje and sections of wall survive from the Moorish castle. The Arab arches by the plaza Verdiales and the remains of the coracha by the Fuente Gorda belong to the same fortress.' },
        { name: 'La Encarnación church', text: 'The sixteenth-century village church stands on the site of the old Moorish castle and is the heart of the village.' },
        { name: 'Meseta de Mazmúllar', text: 'On the Mazmúllar plateau just above the village are eleventh-century archaeological remains and an old cistern (<em>aljibe</em>).' },
        { name: 'Walking', text: 'Old mule tracks lead from Comares through the olive groves to the valleys below. They are at their best in spring, when the almond trees are in blossom.' },
      ],
      fiestas: [
        { name: 'San Hilario', when: '13 January', text: 'the patron saint’s day.' },
        { name: 'Fiestas patronales', when: '23 and 24 August', text: 'the village summer fiesta, with music and verdiales.' },
      ],
    },
    living: {
      title: 'Living in Comares: village houses, fincas and prices',
      description: 'Buying a home in Comares? The types of property, what they cost, how accessible the village is and what to watch for with fincas and renovation at 700 metres.',
      lead: 'Comares is one of the most affordable places in the Axarquía, with views that would be priceless on the coast. The trade-off is that you drive down the mountain for almost everything.',
      sections: [
        { h: 'Types of property', p: [
          'In the village itself mainly old village houses on several floors, often with a roof terrace and a view. Outside it, cortijos and fincas with olive and almond trees, from simple country houses to renovated villas with pools.',
        ] },
        { h: 'What a home costs', p: [
          'In October 2026 average asking prices were around €1,700 per m² (RealAdvisor), less than half the level of Nerja or Frigiliana. A village house in need of work can still be had for a modest sum. Allow around 10% for <a href="/en/guides/buying-costs-in-spain/">buying costs</a> and, for an old house, a solid <a href="/en/guides/renovation-costs-spain/">renovation budget</a>.',
        ] },
        { h: 'Facilities and access', p: [
          'The village has a consultorio (GP surgery), a few shops and bars and a primary school. For a supermarket, secondary school and hospital you drive to Vélez-Málaga, about half an hour on a winding mountain road. Málaga and the airport are roughly 45 minutes to an hour away.',
        ] },
        { h: 'Watch out with fincas', p: [
          'Many country houses around Comares have been extended over the years. When buying, check that everything is legal, what state the access track is in and where the water comes from. Read our guides to <a href="/en/guides/buying-a-finca-in-spain/">buying a finca</a> and <a href="/en/guides/afo-legalisation-andalusia/">AFO and legalisation</a>.',
        ] },
        { h: 'Renovating in Comares', p: [
          'At 700 metres winters can be cold and damp. Insulation, good windows and heating are not luxuries in a renovation here. In the village the lanes are narrow and steep, so getting materials in takes extra time. Have a property <a href="/en/property-survey/">surveyed</a> before you buy, especially with old walls and roofs.',
        ] },
      ],
    },
    faq: [
      { q: 'How far is Comares from the sea?', a: 'About 25 kilometres to Vélez-Málaga and the coast at Torre del Mar, roughly half an hour on a winding road.' },
      { q: 'Do many foreigners live in Comares?', a: 'Yes. In 2022 nearly 40% of residents were foreign nationals, mostly British and Northern Europeans, many of whom live on fincas outside the village.' },
      { q: 'Is Comares cheap?', a: 'Compared with the coast, yes. Average asking prices in October 2026 were around €1,700 per m², against nearly double that in Frigiliana.' },
    ],
  },
  de: {
    title: 'Comares: Wohnen auf dem Balkon der Axarquía',
    description: 'Alles über Comares: das weiße Dorf auf 700 Metern mit Blick über die ganze Axarquía, seine maurische Geschichte, Immobilienpreise, Fincas und was Sie zu Kauf und Renovierung wissen sollten.',
    lead: 'Comares liegt wie eine weiße Krone auf einem Berggipfel in gut 700 Metern Höhe. Vom Dorf blicken Sie über die ganze Axarquía bis zum Meer, deshalb heißt es der Balkon der Region.',
    intro: [
      'Comares ist eines der höchstgelegenen Dörfer der Axarquía, auf 703 Metern, etwa 25 Kilometer oberhalb von <a href="/de/orte/velez-malaga/">Vélez-Málaga</a> und 39 Kilometer von Málaga entfernt. Die Straße windet sich durch Oliven- und Mandelhaine nach oben, und oben wartet ein Dorf aus schmalen weißen Gassen rund um eine Kirche und die Reste einer maurischen Burg.',
      'Im 9. Jahrhundert war Comares eine Hochburg von Omar ben Hafsun, dem Rebellen, der jahrelang dem Kalifat von Córdoba trotzte. Erst 1487 ergab sich das Dorf den christlichen Heeren. Keramische Fußspuren in den Gassen führen Besucher an den Orten dieser Geschichte vorbei.',
      'Das Dorf hat rund 1.350 Einwohner, fast vier von zehn mit ausländischer Staatsangehörigkeit. Viele von ihnen wohnen nicht im Dorf selbst, sondern auf Cortijos und Fincas an den Hängen ringsum.',
    ],
    facts: [
      ['Einwohner', 'rund 1.350 (2025)'],
      ['Ausländische Einwohner', 'fast 40%'],
      ['Lage', 'Berge, 703 m hoch'],
      ['Vélez-Málaga', 'etwa 25 km'],
      ['Málaga', 'etwa 39 km'],
      ['Preisniveau', 'niedrig, rund 1.700 € pro m²'],
    ],
    forWhom: 'Für alle, denen Ruhe, Platz und Aussicht wichtiger sind als der Strand um die Ecke. Comares passt zu Menschen, die eine Finca mit Land oder ein Dorfhaus mit Dachterrasse suchen und nichts dagegen haben, für den Großeinkauf ins Tal zu fahren.',
    see: {
      title: 'Sehenswertes in Comares: Aussichtspunkte, maurische Reste und Wanderungen',
      description: 'Was man in Comares unternehmen kann: der Blick vom Balkon der Axarquía, die Reste der Alcazaba, die Kirche La Encarnación, der Weg der Fußspuren und die Feste.',
      lead: 'Comares ist vor allem ein Ort zum Schauen: auf das Dorf selbst, auf die Geschichte in seinen Mauern und auf den Blick über die Region.',
      items: [
        { name: 'Die Aussicht', text: 'Von den Plätzen und vom Dorfrand sehen Sie bei klarem Wetter die ganze Axarquía: Hügel voller Olivenbäume, den Stausee La Viñuela, die Küste und manchmal sogar die Sierra Nevada.' },
        { name: 'Die Alcazaba', text: 'Von der maurischen Burg stehen noch die Torre del Homenaje und Teile der Mauern. Auch die arabischen Bögen an der Plaza Verdiales und die Reste der Coracha an der Fuente Gorda gehören zu dieser Festung.' },
        { name: 'Kirche La Encarnación', text: 'Die Dorfkirche aus dem 16. Jahrhundert steht an der Stelle der alten maurischen Burg und ist der Mittelpunkt des Dorfes.' },
        { name: 'Meseta de Mazmúllar', text: 'Auf dem Plateau von Mazmúllar direkt oberhalb des Dorfes liegen archäologische Reste aus dem 11. Jahrhundert und eine alte Zisterne (<em>aljibe</em>).' },
        { name: 'Wandern', text: 'Rund um Comares führen alte Maultierpfade durch die Olivenhaine in die Täler. Am schönsten sind sie im Frühjahr, wenn die Mandelbäume blühen.' },
      ],
      fiestas: [
        { name: 'San Hilario', when: '13. Januar', text: 'Fest des Schutzpatrons.' },
        { name: 'Fiestas patronales', when: '23. und 24. August', text: 'das Sommerfest des Dorfes, mit Musik und Verdiales.' },
      ],
    },
    living: {
      title: 'Wohnen in Comares: Dorfhäuser, Fincas und Preise',
      description: 'Ein Haus in Comares kaufen? Welche Immobilien es gibt, was sie kosten, wie gut das Dorf erreichbar ist und worauf Sie bei Fincas und Renovierungen auf 700 Metern achten sollten.',
      lead: 'Comares gehört zu den günstigsten Orten der Axarquía, mit einer Aussicht, die an der Küste unbezahlbar wäre. Dafür fahren Sie für fast alles den Berg hinunter.',
      sections: [
        { h: 'Welche Immobilien es gibt', p: [
          'Im Dorf selbst vor allem alte Dorfhäuser über mehrere Etagen, oft mit Dachterrasse und Aussicht. Außerhalb Cortijos und Fincas mit Oliven- und Mandelbäumen, vom einfachen Landhaus bis zur renovierten Villa mit Pool.',
        ] },
        { h: 'Was eine Immobilie kostet', p: [
          'Im Oktober 2026 lagen die durchschnittlichen Angebotspreise bei rund 1.700 € pro m² (RealAdvisor), weniger als die Hälfte von Nerja oder Frigiliana. Ein renovierungsbedürftiges Dorfhaus gibt es hier noch für einen bescheidenen Betrag. Rechnen Sie mit rund 10% <a href="/de/ratgeber/kaufnebenkosten-spanien/">Kaufnebenkosten</a> und bei einem alten Haus mit einem soliden <a href="/de/ratgeber/renovierungskosten-spanien/">Renovierungsbudget</a>.',
        ] },
        { h: 'Versorgung und Erreichbarkeit', p: [
          'Im Dorf gibt es ein Consultorio (Hausarztpraxis), einige Läden und Bars und eine Grundschule. Für Supermarkt, weiterführende Schule und Krankenhaus fahren Sie nach Vélez-Málaga, etwa eine halbe Stunde über eine kurvige Bergstraße. Málaga und der Flughafen liegen etwa eine Dreiviertelstunde bis eine Stunde entfernt.',
        ] },
        { h: 'Vorsicht bei Fincas', p: [
          'Viele Landhäuser rund um Comares wurden über die Jahre erweitert. Prüfen Sie beim Kauf, ob alles legal ist, in welchem Zustand der Zufahrtsweg ist und woher das Wasser kommt. Lesen Sie unsere Ratgeber <a href="/de/ratgeber/finca-kaufen-spanien/">Finca kaufen</a> und <a href="/de/ratgeber/afo-legalisierung-andalusien/">AFO und Legalisierung</a>.',
        ] },
        { h: 'Renovieren in Comares', p: [
          'Auf 700 Metern kann es im Winter kalt und feucht werden. Dämmung, gute Fenster und eine Heizung sind bei einer Renovierung hier kein Luxus. Im Dorf sind die Gassen eng und steil, deshalb dauert die Materialanlieferung länger. Lassen Sie eine Immobilie vor dem Kauf <a href="/de/immobiliengutachten/">begutachten</a>, besonders bei alten Mauern und Dächern.',
        ] },
      ],
    },
    faq: [
      { q: 'Wie weit ist Comares vom Meer entfernt?', a: 'Etwa 25 Kilometer bis Vélez-Málaga und zur Küste bei Torre del Mar, rund eine halbe Stunde über eine kurvige Straße.' },
      { q: 'Wohnen viele Ausländer in Comares?', a: 'Ja. 2022 hatten fast 40% der Einwohner eine ausländische Staatsangehörigkeit, vor allem Briten und Nordeuropäer, von denen viele auf Fincas außerhalb des Dorfes leben.' },
      { q: 'Ist Comares günstig?', a: 'Im Vergleich zur Küste ja. Die durchschnittlichen Angebotspreise lagen im Oktober 2026 bei rund 1.700 € pro m², in Frigiliana fast beim Doppelten.' },
    ],
  },
};
export default content;
