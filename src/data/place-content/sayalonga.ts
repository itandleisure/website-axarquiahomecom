import type { PlaceContent } from './types';

// Feitenblad Sayalonga (november 2026)
// - Inwoners: 1.672 (INE, 1 januari 2025); 737 buitenlandse inwoners in 2022 (45%).
// - Oppervlakte 18,3 km²; hoogte 359 m. Pedanía Corumbela, met een mudéjarminaret uit de 14e eeuw.
// - Cementerio Redondo (een van de weinige ronde begraafplaatsen van Spanje), Mirador del Cementerio (2002),
//   Callejón de la Alcuza (op het smalst circa 56 cm), Ventorrillo del Aljibe (Andalusische waterput, ruim 90.000 liter).
// - Fiesta's: Día del Níspero (eerste zondag van mei, fiesta van toeristisch belang), Candelarias (7 september),
//   romería Virgen del Rosario (7 oktober, patrones), romería San Pedro in Corumbela (eind oktober).
// - Woningprijzen: circa € 2.700 per m² (RealAdvisor, oktober 2026).
const content: PlaceContent = {
  sources: [
    'https://es.wikipedia.org/wiki/Sayalonga',
    'https://realadvisor.es/es/precios-viviendas/municipio-sayalonga',
  ],
  nl: {
    title: 'Sayalonga: wonen in het mispeldorp boven de kust',
    description: 'Alles over Sayalonga en Corumbela: de ronde begraafplaats, de Dag van de Mispel, de internationale gemeenschap, woningprijzen en kopen en verbouwen.',
    lead: 'Sayalonga ligt in een groen dal vol mispel- en avocadobomen, tussen Cómpeta en de kust. Bijna de helft van de inwoners komt uit het buitenland, en toch is het een echt Andalusisch dorp gebleven.',
    intro: [
      'Sayalonga ligt op ongeveer 360 meter hoogte op een heuvelrug tussen <a href="/nl/plaatsen/competa/">Cómpeta</a> en de kust bij <a href="/nl/plaatsen/algarrobo/">Algarrobo</a> en <a href="/nl/plaatsen/torrox/">Torrox</a>. Het dal eromheen staat vol mispelbomen (<em>nísperos</em>), avocado’s en mango’s, en in het voorjaar is het hier groener dan in de meeste dorpen van de streek.',
      'Het dorp is klein en overzichtelijk, met witte straatjes, een kerk en een ronde begraafplaats die bezoekers uit de hele regio trekt. Hoger op de berg ligt Corumbela, het tweede dorp van de gemeente, met een mudéjarminaret uit de veertiende eeuw en een wijds uitzicht.',
      'Sayalonga telt ongeveer 1.700 inwoners. In 2022 had 45% een buitenlandse nationaliteit, een van de hoogste aandelen van de Axarquía. Velen wonen in villa’s en finca’s op de hellingen rond het dorp.',
    ],
    facts: [
      ['Inwoners', 'circa 1.700 (2025)'],
      ['Buitenlandse inwoners', 'circa 45%'],
      ['Ligging', 'heuvels, circa 360 m hoog'],
      ['Kust (Algarrobo, Torrox)', 'circa een kwartier'],
      ['Dorpen', 'Sayalonga en Corumbela'],
      ['Prijsniveau', 'middel, circa € 2.700 per m²'],
    ],
    forWhom: 'Voor wie een dorp in de heuvels zoekt met de zee dichtbij en een grote internationale gemeenschap, maar zonder de drukte van Frigiliana of Cómpeta. Sayalonga past goed bij mensen die een villa of finca met uitzicht willen, op korte afstand van de stranden.',
    see: {
      title: 'Zien en doen in Sayalonga: ronde begraafplaats, Corumbela',
      description: 'Wat te doen in Sayalonga: de ronde begraafplaats, het smalste steegje van de Axarquía, de minaret van Corumbela, wandelen en de Dag van de Mispel.',
      lead: 'Sayalonga is klein, maar heeft een paar bezienswaardigheden die u nergens anders ziet.',
      items: [
        { name: 'Cementerio Redondo', text: 'Een van de weinige ronde begraafplaatsen van Spanje, met de nissen in een cirkel rond een open middenplein. Naast de begraafplaats ligt een uitzichtpunt over het dal.' },
        { name: 'Callejón de la Alcuza', text: 'Een van de smalste steegjes van de Axarquía: op het smalste punt is het maar ongeveer 56 centimeter breed.' },
        { name: 'Ventorrillo del Aljibe', text: 'Een waterput uit de Andalusische tijd, waar ruim 90.000 liter water in past.' },
        { name: 'Corumbela', text: 'Het kleine bergdorp van de gemeente, met een kerk waarvan de toren een mudéjarminaret uit de veertiende eeuw is. Vanaf het plein kijkt u over de hele kust.' },
        { name: 'Wandelen door het dal', text: 'Rond Sayalonga lopen paden door de boomgaarden en langs de rivier naar Corumbela en Árchez. Een mooie route in het voorjaar, als de mispels rijp zijn.' },
      ],
      fiestas: [
        { name: 'Día del Níspero', when: 'eerste zondag van mei', text: 'het dorp viert de mispeloogst met proeverijen, muziek en een markt. Het feest is erkend als fiesta van toeristisch belang.' },
        { name: 'Candelarias', when: '7 september', text: 'vuren en verlichting in het dorp.' },
        { name: 'Romería Virgen del Rosario', when: '7 oktober', text: 'feest van de beschermheilige van Sayalonga.' },
        { name: 'Romería San Pedro', when: 'eind oktober', text: 'het feest van Corumbela.' },
      ],
    },
    living: {
      title: 'Wonen in Sayalonga: villa’s, finca’s, dorpshuizen en prijzen',
      description: 'Een huis kopen in Sayalonga of Corumbela? Welke woningen er zijn, wat ze kosten, de voorzieningen en waar u op let bij een finca of een renovatie in de heuvels.',
      lead: 'Sayalonga ligt in prijs tussen de kust en de bergdorpen in. U betaalt voor de groene omgeving en de korte rit naar zee.',
      sections: [
        { h: 'Wat voor woningen er zijn', p: [
          'In het dorp dorpshuizen met een dakterras, vaak met uitzicht over het dal. Op de hellingen eromheen villa’s met zwembad en finca’s met mispel-, avocado- en olijfbomen. In Corumbela vooral kleine dorpshuizen met veel karakter.',
        ] },
        { h: 'Wat een woning kost', p: [
          'In oktober 2026 lag de gemiddelde vraagprijs rond de € 2.700 per m² (RealAdvisor). Dat is duidelijk meer dan in de bergdorpen verder landinwaarts, maar minder dan in Frigiliana of Nerja. Reken op ongeveer 10% <a href="/nl/gidsen/kosten-koper-spanje/">kosten koper</a>.',
        ] },
        { h: 'Voorzieningen', p: [
          'In het dorp zijn een consultorio, een apotheek, een paar winkels, bars en restaurants en een basisschool. Voor grotere supermarkten en andere voorzieningen rijdt u naar Algarrobo Costa of Torrox Costa, en voor het ziekenhuis naar Vélez-Málaga.',
        ] },
        { h: 'Let op bij finca’s', p: [
          'Op de hellingen rond Sayalonga is veel gebouwd en uitgebreid, niet altijd met vergunning. Laat bij aankoop nagaan of het huis legaal is, hoe de toegangsweg erbij ligt en of er voldoende water is voor tuin en zwembad. Lees onze gidsen over <a href="/nl/gidsen/finca-kopen-in-spanje/">finca kopen</a> en <a href="/nl/gidsen/afo-legaliseren-andalusie/">AFO en legaliseren</a>.',
        ] },
        { h: 'Verbouwen in Sayalonga', p: [
          'Villa’s uit de jaren tachtig en negentig hebben vaak verouderde installaties, lekkende daken of terrassen en zwembaden die toe zijn aan een opknapbeurt. In het oude dorp zijn de straatjes smal, wat het aanvoeren van materiaal lastiger maakt. Laat een woning vóór aankoop <a href="/nl/aankoopkeuring/">keuren</a>.',
        ] },
      ],
    },
    faq: [
      { q: 'Hoe ver is Sayalonga van het strand?', a: 'Ongeveer een kwartier rijden naar de stranden van Algarrobo Costa en Torrox Costa.' },
      { q: 'Wonen er veel buitenlanders in Sayalonga?', a: 'Ja. In 2022 had 45% van de inwoners een buitenlandse nationaliteit, een van de hoogste aandelen in de Axarquía.' },
      { q: 'Wat is de Dag van de Mispel?', a: 'Op de eerste zondag van mei viert Sayalonga de oogst van de mispel (níspero), met proeverijen, muziek en een markt.' },
    ],
  },
  en: {
    title: 'Sayalonga: living in the loquat village above the coast',
    description: 'All about Sayalonga and Corumbela: the round cemetery, Loquat Day, the international community, property prices and tips on buying and renovating.',
    lead: 'Sayalonga sits in a green valley full of loquat and avocado trees, between Cómpeta and the coast. Almost half its residents come from abroad, yet it has remained a real Andalusian village.',
    intro: [
      'Sayalonga lies at about 360 metres on a ridge between <a href="/en/places/competa/">Cómpeta</a> and the coast at <a href="/en/places/algarrobo/">Algarrobo</a> and <a href="/en/places/torrox/">Torrox</a>. The valley around it is full of loquat trees (<em>nísperos</em>), avocados and mangoes, and in spring it is greener here than in most villages in the region.',
      'The village is small and easy to get to know, with white lanes, a church and a round cemetery that draws visitors from across the region. Higher up the mountain is Corumbela, the municipality’s second village, with a fourteenth-century Mudéjar minaret and a sweeping view.',
      'Sayalonga has about 1,700 residents. In 2022, 45% were foreign nationals, one of the highest shares in the Axarquía. Many live in villas and fincas on the slopes around the village.',
    ],
    facts: [
      ['Population', 'about 1,700 (2025)'],
      ['Foreign residents', 'about 45%'],
      ['Setting', 'hills, about 360 m up'],
      ['Coast (Algarrobo, Torrox)', 'about 15 minutes'],
      ['Villages', 'Sayalonga and Corumbela'],
      ['Price level', 'mid-range, about €2,700 per m²'],
    ],
    forWhom: 'People looking for a hill village close to the sea with a large international community, but without the crowds of Frigiliana or Cómpeta. Sayalonga suits those who want a villa or finca with a view, a short drive from the beaches.',
    see: {
      title: 'Things to do in Sayalonga: round cemetery, Corumbela',
      description: 'What to do in Sayalonga: the round cemetery, the narrowest alley in the Axarquía, the Corumbela minaret, walks through the valley and Loquat Day.',
      lead: 'Sayalonga is small, but it has a few sights you will not find anywhere else.',
      items: [
        { name: 'Cementerio Redondo', text: 'One of the few round cemeteries in Spain, with its niches set in a circle around an open central courtyard. Next to it is a viewpoint over the valley.' },
        { name: 'Callejón de la Alcuza', text: 'One of the narrowest alleys in the Axarquía: at its narrowest point it is only about 56 centimetres wide.' },
        { name: 'Ventorrillo del Aljibe', text: 'A cistern from the Al-Andalus period that holds more than 90,000 litres of water.' },
        { name: 'Corumbela', text: 'The municipality’s small mountain village, whose church tower is a fourteenth-century Mudéjar minaret. From the square you look out over the whole coast.' },
        { name: 'Walking the valley', text: 'Paths lead from Sayalonga through the orchards and along the river to Corumbela and Árchez. A lovely route in spring, when the loquats are ripe.' },
      ],
      fiestas: [
        { name: 'Día del Níspero', when: 'first Sunday of May', text: 'the village celebrates the loquat harvest with tastings, music and a market. It is recognised as a fiesta of tourist interest.' },
        { name: 'Candelarias', when: '7 September', text: 'bonfires and lights in the village.' },
        { name: 'Romería Virgen del Rosario', when: '7 October', text: 'feast of Sayalonga’s patron saint.' },
        { name: 'Romería San Pedro', when: 'late October', text: 'the fiesta of Corumbela.' },
      ],
    },
    living: {
      title: 'Living in Sayalonga: villas, fincas and prices',
      description: 'Buying a home in Sayalonga or Corumbela? The types of property, what they cost, the facilities and what to watch for with a finca or a renovation in the hills.',
      lead: 'Sayalonga sits between the coast and the mountain villages on price. You pay for the green surroundings and the short drive to the sea.',
      sections: [
        { h: 'Types of property', p: [
          'In the village, village houses with roof terraces, often looking out over the valley. On the surrounding slopes, villas with pools and fincas with loquat, avocado and olive trees. In Corumbela mainly small village houses full of character.',
        ] },
        { h: 'What a home costs', p: [
          'In October 2026 average asking prices were around €2,700 per m² (RealAdvisor). That is clearly more than in the mountain villages further inland, but less than in Frigiliana or Nerja. Allow around 10% for <a href="/en/guides/buying-costs-in-spain/">buying costs</a>.',
        ] },
        { h: 'Facilities', p: [
          'The village has a consultorio, a pharmacy, a few shops, bars and restaurants and a primary school. For larger supermarkets and other services you drive to Algarrobo Costa or Torrox Costa, and to Vélez-Málaga for the hospital.',
        ] },
        { h: 'Watch out with fincas', p: [
          'A lot has been built and extended on the slopes around Sayalonga, not always with permission. When buying, check that the house is legal, what state the access track is in and whether there is enough water for garden and pool. Read our guides to <a href="/en/guides/buying-a-finca-in-spain/">buying a finca</a> and <a href="/en/guides/afo-legalisation-andalusia/">AFO and legalisation</a>.',
        ] },
        { h: 'Renovating in Sayalonga', p: [
          'Villas from the 1980s and 1990s often have outdated installations, leaking roofs or terraces and pools in need of an overhaul. In the old village the lanes are narrow, which makes getting materials in harder. Have a property <a href="/en/property-survey/">surveyed</a> before you buy.',
        ] },
      ],
    },
    faq: [
      { q: 'How far is Sayalonga from the beach?', a: 'About 15 minutes by car to the beaches of Algarrobo Costa and Torrox Costa.' },
      { q: 'Do many foreigners live in Sayalonga?', a: 'Yes. In 2022, 45% of residents were foreign nationals, one of the highest shares in the Axarquía.' },
      { q: 'What is Loquat Day?', a: 'On the first Sunday of May Sayalonga celebrates the loquat (níspero) harvest with tastings, music and a market.' },
    ],
  },
  de: {
    title: 'Sayalonga: Wohnen im Mispeldorf oberhalb der Küste',
    description: 'Alles über Sayalonga und Corumbela: runder Friedhof, Tag der Mispel, internationale Gemeinschaft, Immobilienpreise und Tipps zu Kauf und Renovierung.',
    lead: 'Sayalonga liegt in einem grünen Tal voller Mispel- und Avocadobäume, zwischen Cómpeta und der Küste. Fast die Hälfte der Einwohner kommt aus dem Ausland, und doch ist es ein echtes andalusisches Dorf geblieben.',
    intro: [
      'Sayalonga liegt auf etwa 360 Metern auf einem Höhenrücken zwischen <a href="/de/orte/competa/">Cómpeta</a> und der Küste bei <a href="/de/orte/algarrobo/">Algarrobo</a> und <a href="/de/orte/torrox/">Torrox</a>. Das Tal ringsum ist voller Mispelbäume (<em>nísperos</em>), Avocados und Mangos, und im Frühjahr ist es hier grüner als in den meisten Dörfern der Region.',
      'Das Dorf ist klein und überschaubar, mit weißen Gassen, einer Kirche und einem runden Friedhof, der Besucher aus der ganzen Region anzieht. Weiter oben am Berg liegt Corumbela, das zweite Dorf der Gemeinde, mit einem Mudéjar-Minarett aus dem 14. Jahrhundert und weitem Blick.',
      'Sayalonga hat rund 1.700 Einwohner. 2022 hatten 45% eine ausländische Staatsangehörigkeit, einer der höchsten Anteile der Axarquía. Viele wohnen in Villen und Fincas an den Hängen rund um das Dorf.',
    ],
    facts: [
      ['Einwohner', 'rund 1.700 (2025)'],
      ['Ausländische Einwohner', 'etwa 45%'],
      ['Lage', 'Hügel, etwa 360 m hoch'],
      ['Küste (Algarrobo, Torrox)', 'etwa 15 Minuten'],
      ['Dörfer', 'Sayalonga und Corumbela'],
      ['Preisniveau', 'mittel, rund 2.700 € pro m²'],
    ],
    forWhom: 'Für alle, die ein Dorf in den Hügeln mit dem Meer in der Nähe und einer großen internationalen Gemeinschaft suchen, aber ohne den Trubel von Frigiliana oder Cómpeta. Sayalonga passt gut zu Menschen, die eine Villa oder Finca mit Aussicht möchten, nicht weit von den Stränden.',
    see: {
      title: 'Sehenswertes in Sayalonga: runder Friedhof, Corumbela',
      description: 'Was man in Sayalonga unternehmen kann: runder Friedhof, die engste Gasse der Axarquía, das Minarett von Corumbela, Wanderungen und der Tag der Mispel.',
      lead: 'Sayalonga ist klein, hat aber ein paar Sehenswürdigkeiten, die Sie nirgendwo sonst finden.',
      items: [
        { name: 'Cementerio Redondo', text: 'Einer der wenigen runden Friedhöfe Spaniens, mit den Grabnischen im Kreis um einen offenen Innenhof. Daneben liegt ein Aussichtspunkt über das Tal.' },
        { name: 'Callejón de la Alcuza', text: 'Eine der engsten Gassen der Axarquía: An der schmalsten Stelle ist sie nur etwa 56 Zentimeter breit.' },
        { name: 'Ventorrillo del Aljibe', text: 'Eine Zisterne aus der Zeit von Al-Andalus, in die mehr als 90.000 Liter Wasser passen.' },
        { name: 'Corumbela', text: 'Das kleine Bergdorf der Gemeinde, dessen Kirchturm ein Mudéjar-Minarett aus dem 14. Jahrhundert ist. Vom Platz aus blicken Sie über die ganze Küste.' },
        { name: 'Wandern durch das Tal', text: 'Von Sayalonga führen Wege durch die Obstgärten und am Fluss entlang nach Corumbela und Árchez. Eine schöne Route im Frühjahr, wenn die Mispeln reif sind.' },
      ],
      fiestas: [
        { name: 'Día del Níspero', when: 'erster Sonntag im Mai', text: 'das Dorf feiert die Mispelernte mit Verkostungen, Musik und einem Markt. Das Fest ist als Fest von touristischem Interesse anerkannt.' },
        { name: 'Candelarias', when: '7. September', text: 'Feuer und Lichter im Dorf.' },
        { name: 'Romería Virgen del Rosario', when: '7. Oktober', text: 'Fest der Schutzpatronin von Sayalonga.' },
        { name: 'Romería San Pedro', when: 'Ende Oktober', text: 'das Fest von Corumbela.' },
      ],
    },
    living: {
      title: 'Wohnen in Sayalonga: Villen, Fincas, Dorfhäuser und Preise',
      description: 'Haus in Sayalonga oder Corumbela kaufen? Immobilien, Preise, Versorgung und worauf Sie bei einer Finca oder Renovierung in den Hügeln achten.',
      lead: 'Sayalonga liegt preislich zwischen der Küste und den Bergdörfern. Sie zahlen für die grüne Umgebung und die kurze Fahrt zum Meer.',
      sections: [
        { h: 'Welche Immobilien es gibt', p: [
          'Im Dorf Dorfhäuser mit Dachterrasse, oft mit Blick über das Tal. An den Hängen ringsum Villen mit Pool und Fincas mit Mispel-, Avocado- und Olivenbäumen. In Corumbela vor allem kleine Dorfhäuser mit viel Charakter.',
        ] },
        { h: 'Was eine Immobilie kostet', p: [
          'Im Oktober 2026 lagen die durchschnittlichen Angebotspreise bei rund 2.700 € pro m² (RealAdvisor). Das ist deutlich mehr als in den Bergdörfern weiter im Hinterland, aber weniger als in Frigiliana oder Nerja. Rechnen Sie mit rund 10% <a href="/de/ratgeber/kaufnebenkosten-spanien/">Kaufnebenkosten</a>.',
        ] },
        { h: 'Versorgung', p: [
          'Im Dorf gibt es ein Consultorio, eine Apotheke, einige Läden, Bars und Restaurants und eine Grundschule. Für größere Supermärkte und weitere Einrichtungen fahren Sie nach Algarrobo Costa oder Torrox Costa, ins Krankenhaus nach Vélez-Málaga.',
        ] },
        { h: 'Vorsicht bei Fincas', p: [
          'An den Hängen rund um Sayalonga wurde viel gebaut und erweitert, nicht immer mit Genehmigung. Lassen Sie beim Kauf prüfen, ob das Haus legal ist, in welchem Zustand der Zufahrtsweg ist und ob genug Wasser für Garten und Pool vorhanden ist. Lesen Sie unsere Ratgeber <a href="/de/ratgeber/finca-kaufen-spanien/">Finca kaufen</a> und <a href="/de/ratgeber/afo-legalisierung-andalusien/">AFO und Legalisierung</a>.',
        ] },
        { h: 'Renovieren in Sayalonga', p: [
          'Villen aus den 1980er- und 1990er-Jahren haben oft veraltete Installationen, undichte Dächer oder Terrassen und Pools, die eine Überholung brauchen. Im alten Dorf sind die Gassen eng, was die Materialanlieferung erschwert. Lassen Sie eine Immobilie vor dem Kauf <a href="/de/immobiliengutachten/">begutachten</a>.',
        ] },
      ],
    },
    faq: [
      { q: 'Wie weit ist Sayalonga vom Strand entfernt?', a: 'Etwa 15 Minuten mit dem Auto zu den Stränden von Algarrobo Costa und Torrox Costa.' },
      { q: 'Wohnen viele Ausländer in Sayalonga?', a: 'Ja. 2022 hatten 45% der Einwohner eine ausländische Staatsangehörigkeit, einer der höchsten Anteile in der Axarquía.' },
      { q: 'Was ist der Tag der Mispel?', a: 'Am ersten Sonntag im Mai feiert Sayalonga die Ernte der Mispel (níspero) mit Verkostungen, Musik und einem Markt.' },
    ],
  },
  sv: {
    title: 'Sayalonga: bo i mispelbyn ovanför kusten',
    description: 'Allt om Sayalonga och Corumbela: den runda kyrkogården, Mispelns dag, den internationella gemenskapen, bostadspriser och att köpa och renovera.',
    lead: 'Sayalonga ligger i en grön dal full av mispel- och avokadoträd, mellan Cómpeta och kusten. Nästan hälften av invånarna kommer från utlandet, men det har förblivit en äkta andalusisk by.',
    intro: [
      'Sayalonga ligger på cirka 360 meters höjd på en ås mellan <a href="/sv/orter/competa/">Cómpeta</a> och kusten vid <a href="/sv/orter/algarrobo/">Algarrobo</a> och <a href="/sv/orter/torrox/">Torrox</a>. Dalen runt byn är full av japanska mispelträd (<em>nísperos</em>), avokado och mango, och på våren är det grönare här än i de flesta byar i regionen.',
      'Byn är liten och lätt att lära känna, med vita gränder, en kyrka och en rund kyrkogård som lockar besökare från hela regionen. Högre upp på berget ligger Corumbela, kommunens andra by, med en mudéjarminaret från 1300-talet och en vidsträckt utsikt.',
      'Sayalonga har cirka 1 700 invånare. År 2022 hade 45 % utländskt medborgarskap, en av de högsta andelarna i Axarquía. Många bor i villor och på fincor på sluttningarna runt byn.',
    ],
    facts: [
      ['Invånare', 'cirka 1 700 (2025)'],
      ['Utländska invånare', 'cirka 45 %'],
      ['Läge', 'kullar, cirka 360 m'],
      ['Kusten (Algarrobo, Torrox)', 'cirka 15 minuter'],
      ['Byar', 'Sayalonga och Corumbela'],
      ['Prisnivå', 'medel, cirka 2 700 € per m²'],
    ],
    forWhom: 'För dig som söker en kullby nära havet med en stor internationell gemenskap, men utan trängseln i Frigiliana eller Cómpeta. Sayalonga passar dig som vill ha en villa eller finca med utsikt, en kort bilresa från stränderna.',
    see: {
      title: 'Se och göra i Sayalonga: runda kyrkogården, Corumbela',
      description: 'Vad du kan göra i Sayalonga: den runda kyrkogården, Axarquías smalaste gränd, minareten i Corumbela, vandringar genom dalen och Mispelns dag.',
      lead: 'Sayalonga är liten, men har några sevärdheter som du inte hittar någon annanstans.',
      items: [
        { name: 'Cementerio Redondo', text: 'En av få runda kyrkogårdar i Spanien, med gravnischerna i en cirkel runt en öppen innergård. Bredvid finns en utsiktsplats över dalen.' },
        { name: 'Callejón de la Alcuza', text: 'En av de smalaste gränderna i Axarquía: på det smalaste stället är den bara cirka 56 centimeter bred.' },
        { name: 'Ventorrillo del Aljibe', text: 'En cistern från al-Andalus-tiden som rymmer över 90 000 liter vatten.' },
        { name: 'Corumbela', text: 'Kommunens lilla bergsby, vars kyrktorn är en mudéjarminaret från 1300-talet. Från torget ser du ut över hela kusten.' },
        { name: 'Vandra i dalen', text: 'Stigar leder från Sayalonga genom odlingarna och längs floden till Corumbela och Árchez. En vacker vandring på våren, när mispeln är mogen.' },
      ],
      fiestas: [
        { name: 'Día del Níspero', when: 'första söndagen i maj', text: 'byn firar mispelskörden med provsmakning, musik och marknad. Festen är erkänd som fest av turistiskt intresse.' },
        { name: 'Candelarias', when: '7 september', text: 'brasor och ljus i byn.' },
        { name: 'Romería Virgen del Rosario', when: '7 oktober', text: 'festen för Sayalongas skyddshelgon.' },
        { name: 'Romería San Pedro', when: 'slutet av oktober', text: 'Corumbelas fest.' },
      ],
    },
    living: {
      title: 'Bo i Sayalonga: villor, fincor, byhus och priser',
      description: 'Köpa bostad i Sayalonga eller Corumbela? Vilka bostäder som finns, vad de kostar, service och vad du ska tänka på med en finca eller en renovering i kullarna.',
      lead: 'Prismässigt ligger Sayalonga mellan kusten och bergsbyarna. Du betalar för den gröna omgivningen och den korta vägen till havet.',
      sections: [
        { h: 'Vilka bostäder som finns', p: [
          'I byn byhus med takterrass, ofta med utsikt över dalen. På sluttningarna runt omkring villor med pool och fincor med mispel-, avokado- och olivträd. I Corumbela främst små byhus med mycket karaktär.',
        ] },
        { h: 'Vad en bostad kostar', p: [
          'I oktober 2026 låg det genomsnittliga utgångspriset kring 2 700 € per m² (RealAdvisor). Det är klart mer än i bergsbyarna längre in i landet, men mindre än i Frigiliana eller Nerja. Räkna med cirka 10 % i <a href="/sv/guider/kopa-hus-i-spanien-kostnader/">köpkostnader</a>.',
        ] },
        { h: 'Service', p: [
          'Byn har en consultorio, ett apotek, några affärer, barer och restauranger och en grundskola. För större stormarknader och annan service kör du till Algarrobo Costa eller Torrox Costa, och till Vélez-Málaga för sjukhuset.',
        ] },
        { h: 'Se upp med fincor', p: [
          'På sluttningarna runt Sayalonga har mycket byggts och byggts ut, inte alltid med tillstånd. Kontrollera vid köpet att huset är lagligt, i vilket skick tillfartsvägen är och om det finns tillräckligt med vatten för trädgård och pool. Läs våra guider om att <a href="/sv/guider/kopa-finca-i-spanien/">köpa finca</a> och om <a href="/sv/guider/afo-andalusien/">AFO och legalisering</a>.',
        ] },
        { h: 'Renovera i Sayalonga', p: [
          'Villor från 1980- och 1990-talen har ofta föråldrade installationer, läckande tak eller terrasser och pooler som behöver renoveras. I den gamla byn är gränderna smala, vilket gör det svårare att få in material. Låt <a href="/sv/besiktning/">besiktiga</a> huset innan du köper.',
        ] },
      ],
    },
    faq: [
      { q: 'Hur långt är det från Sayalonga till stranden?', a: 'Cirka 15 minuter med bil till stränderna i Algarrobo Costa och Torrox Costa.' },
      { q: 'Bor det många utlänningar i Sayalonga?', a: 'Ja. 2022 hade 45 % av invånarna utländskt medborgarskap, en av de högsta andelarna i Axarquía.' },
      { q: 'Vad är Mispelns dag?', a: 'Den första söndagen i maj firar Sayalonga skörden av japansk mispel (níspero) med provsmakning, musik och marknad.' },
    ],
  },
};
export default content;
