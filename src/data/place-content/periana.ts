import type { PlaceContent } from './types';

// Feitenblad Periana (november 2026)
// - Inwoners: 3.367 (INE, 1 januari 2025). Oppervlakte 58,7 km²; hoogte 550 m; 58 km naar Málaga.
// - Gehuchten: Mondrón (verdial-olijfolie, olijfbomen van meer dan 1.000 jaar), Baños de Vilo-La Negra, Guaro (bron van de Guaro), La Muela,
//   Marchamonas (1.283 m), Los Marines, Regalón, La Viña, Moya, Río Seco, Las Mayoralas.
// - Economie: olijfolie (verdial) en perziken; ook sinaasappels, citroenen, amandelen.
// - Baños de Vilo: mineraalbronnen, bekend kuuroord in de 18e en 19e eeuw, nu ruïne. Puerto del Sol: bergpas richting Alfarnate.
// - Aardbeving van 1884: 58 doden en 158 verwoeste huizen.
// - Fiesta's: San Isidro (rond 15 mei), romería bij het stuwmeer van La Viñuela (begin juni), Feria del Melocotón (rond 25 juli), feria van augustus.
// - Busverbinding M-364. Woningprijzen: circa € 1.800 per m² (RealAdvisor, oktober 2026).
const content: PlaceContent = {
  sources: [
    'https://es.wikipedia.org/wiki/Periana',
    'https://realadvisor.es/es/precios-viviendas/municipio-periana',
  ],
  nl: {
    title: 'Periana: wonen tussen olijven en perziken boven het meer',
    description: 'Alles over Periana: het dorp boven het stuwmeer van La Viñuela, de verdial-olijfolie en perziken, de gehuchten Mondrón en Guaro, woningprijzen en kopen op het platteland.',
    lead: 'Periana ligt op een uitloper van de Sierra de Alhama, met het stuwmeer van La Viñuela aan de voet. Het is een werkend landbouwdorp, bekend om zijn olijfolie en de beste perziken van Spanje.',
    intro: [
      'Periana ligt op 550 meter hoogte in het noorden van de Axarquía, ongeveer 58 kilometer van Málaga. Vanuit het dorp kijkt u omlaag naar het stuwmeer van <a href="/nl/plaatsen/vinuela/">La Viñuela</a> en over de heuvels tot aan zee. Achter het dorp rijzen de bergen van de Sierra de Alhama en de Sierra de Enmedio op.',
      'Met ruim 3.300 inwoners is Periana een van de grotere dorpen in het binnenland. De gemeente is groot en verspreid: naast het dorp zelf zijn er gehuchten als Mondrón, bekend om zijn olijfbomen van meer dan duizend jaar oud, Guaro, waar de rivier van die naam ontspringt, en Baños de Vilo, met de resten van een oud kuuroord.',
      'Het landschap draait om landbouw. Op de hellingen staan olijfgaarden voor de verdial-olie, en in de zomer worden hier perziken geoogst die in heel Spanje bekend zijn.',
    ],
    facts: [
      ['Inwoners', 'ruim 3.300 (2025)'],
      ['Ligging', 'binnenland, 550 m hoog'],
      ['Málaga', 'circa 58 km'],
      ['Stuwmeer La Viñuela', 'aan de voet van het dorp'],
      ['Bekend om', 'verdial-olijfolie en perziken'],
      ['Prijsniveau', 'laag, circa € 1.800 per m²'],
    ],
    forWhom: 'Voor wie het echte platteland zoekt, met ruimte, een stuk grond en een dorp waar het leven om de oogst draait. Periana past bij mensen die een cortijo of finca met olijfbomen willen en de kust niet elke dag nodig hebben.',
    see: {
      title: 'Zien en doen in Periana: Baños de Vilo, olijfolie en perziken',
      description: 'Wat te doen in Periana: de ruïnes van het kuuroord Baños de Vilo, de duizendjarige olijfbomen van Mondrón, de bergpas Puerto del Sol, het stuwmeer en de perzikenfeesten.',
      lead: 'Periana is geen toeristendorp. Juist daarom is het een goede plek om te zien hoe het binnenland van de Axarquía leeft.',
      items: [
        { name: 'Baños de Vilo', text: 'Mineraalbronnen die in de achttiende en negentiende eeuw een bekend kuuroord waren. Van het badhuis staan nog muren en een bassin, op een mooie plek in het groen.' },
        { name: 'De olijfbomen van Mondrón', text: 'In en rond het gehucht Mondrón staan olijfbomen die meer dan duizend jaar oud zijn. Hier wordt de verdial-olie gemaakt waar Periana om bekendstaat.' },
        { name: 'Puerto del Sol', text: 'De bergpas op de weg naar Alfarnate, met een wijds uitzicht over de Axarquía en het stuwmeer.' },
        { name: 'Stuwmeer van La Viñuela', text: 'Het grootste stuwmeer van de provincie ligt aan de voet van Periana. Langs de oevers lopen wandel- en fietsroutes en er zijn picknickplaatsen.' },
        { name: 'Guaro', text: 'Het gehucht waar de Guaro ontspringt, de rivier die het stuwmeer van La Viñuela voedt.' },
      ],
      fiestas: [
        { name: 'San Isidro Labrador', when: 'rond 15 mei', text: 'feria van enkele dagen ter ere van de patroon van de boeren.' },
        { name: 'Romería', when: 'begin juni', text: 'bedevaart naar de oevers van het stuwmeer van La Viñuela.' },
        { name: 'Feria del Melocotón', when: 'rond 25 juli', text: 'het perzikenfeest, als de oogst op zijn hoogtepunt is.' },
        { name: 'Feria de agosto', when: 'eind augustus', text: 'het zomerfeest van het dorp.' },
      ],
    },
    living: {
      title: 'Wonen in Periana: cortijos, finca’s, dorpshuizen en prijzen',
      description: 'Een huis kopen in Periana? Welke woningen er zijn, wat ze kosten, de voorzieningen in het dorp en waar u op let bij een cortijo of finca in het binnenland.',
      lead: 'In Periana krijgt u veel huis en grond voor uw geld. U woont tussen Spanjaarden, op ongeveer drie kwartier van de kust.',
      sections: [
        { h: 'Wat voor woningen er zijn', p: [
          'In het dorp ruime dorpshuizen, vaak met een binnenplaats. In de gehuchten en het buitengebied cortijos en finca’s met olijf-, amandel- en fruitbomen, van eenvoudige boerderijen tot verbouwde landhuizen met zwembad.',
        ] },
        { h: 'Wat een woning kost', p: [
          'In oktober 2026 lag de gemiddelde vraagprijs rond de € 1.800 per m² (RealAdvisor), ongeveer de helft van de kust. Reken op ongeveer 10% <a href="/nl/gidsen/kosten-koper-spanje/">kosten koper</a> en, bij een oud landhuis, een <a href="/nl/gidsen/kosten-huis-renoveren-spanje/">verbouwbudget</a>.',
        ] },
        { h: 'Voorzieningen', p: [
          'Periana heeft als groter dorp een gezondheidscentrum, apotheek, supermarkten, banken en een basisschool. Er rijdt een bus naar Málaga. Voor het ziekenhuis gaat u naar Vélez-Málaga.',
        ] },
        { h: 'Let op bij landelijke huizen', p: [
          'Een groot deel van de woningen staat in het buitengebied. Controleer bij aankoop of het huis legaal is, hoe de toegangsweg is en waar het water vandaan komt: een eigen bron, een gemeenschappelijke leiding of het net. Lees onze gidsen over <a href="/nl/gidsen/finca-kopen-in-spanje/">finca kopen</a> en <a href="/nl/gidsen/afo-legaliseren-andalusie/">AFO en legaliseren</a>.',
        ] },
        { h: 'Verbouwen in Periana', p: [
          'Op 550 meter zijn de winters koeler dan aan de kust. Isolatie, goede kozijnen en verwarming horen bij een renovatie hier. De streek ligt in een gebied met aardbevingsrisico (in 1884 verwoestte een aardbeving een groot deel van het dorp), dus laat bij oude huizen ook de constructie bekijken. Laat een woning vóór aankoop <a href="/nl/aankoopkeuring/">keuren</a>.',
        ] },
      ],
    },
    faq: [
      { q: 'Hoe ver is Periana van de kust?', a: 'Naar Vélez-Málaga en Torre del Mar is het ongeveer drie kwartier rijden, via het stuwmeer van La Viñuela.' },
      { q: 'Waar staat Periana om bekend?', a: 'Om zijn verdial-olijfolie, met olijfbomen van meer dan duizend jaar oud in Mondrón, en om zijn perziken.' },
      { q: 'Is er openbaar vervoer in Periana?', a: 'Ja, een buslijn verbindt Periana met Málaga. Voor dagelijks gebruik is een auto in de praktijk nodig.' },
    ],
  },
  en: {
    title: 'Periana: living among olives and peaches above the lake',
    description: 'All about Periana: the village above La Viñuela reservoir, its verdial olive oil and peaches, the hamlets of Mondrón and Guaro, property prices and buying in the countryside.',
    lead: 'Periana sits on a spur of the Sierra de Alhama, with La Viñuela reservoir at its feet. It is a working farming village, known for its olive oil and for some of the best peaches in Spain.',
    intro: [
      'Periana lies at 550 metres in the north of the Axarquía, about 58 kilometres from Málaga. From the village you look down on <a href="/en/places/vinuela/">La Viñuela</a> reservoir and across the hills to the sea. Behind it rise the mountains of the Sierra de Alhama and the Sierra de Enmedio.',
      'With just over 3,300 residents, Periana is one of the larger inland villages. The municipality is large and spread out: besides the village itself there are hamlets such as Mondrón, known for olive trees more than a thousand years old, Guaro, where the river of that name rises, and Baños de Vilo, with the remains of an old spa.',
      'The landscape revolves around farming. The slopes are covered in olive groves for verdial oil, and in summer peaches are harvested here that are known throughout Spain.',
    ],
    facts: [
      ['Population', 'just over 3,300 (2025)'],
      ['Setting', 'inland, 550 m up'],
      ['Málaga', 'about 58 km'],
      ['La Viñuela reservoir', 'at the foot of the village'],
      ['Known for', 'verdial olive oil and peaches'],
      ['Price level', 'low, about €1,800 per m²'],
    ],
    forWhom: 'People looking for the real countryside, with space, a piece of land and a village where life follows the harvest. Periana suits those who want a cortijo or finca with olive trees and do not need the coast every day.',
    see: {
      title: 'Things to do in Periana: Baños de Vilo, olive oil and peaches',
      description: 'What to do in Periana: the ruins of the Baños de Vilo spa, the thousand-year-old olive trees of Mondrón, the Puerto del Sol pass, the reservoir and the peach festivals.',
      lead: 'Periana is not a tourist village. That is exactly why it is a good place to see how the Axarquía’s interior lives.',
      items: [
        { name: 'Baños de Vilo', text: 'Mineral springs that were a well-known spa in the eighteenth and nineteenth centuries. Walls and a pool survive from the bathhouse, in a lovely green spot.' },
        { name: 'The olive trees of Mondrón', text: 'In and around the hamlet of Mondrón are olive trees more than a thousand years old. This is where the verdial oil Periana is known for is made.' },
        { name: 'Puerto del Sol', text: 'The mountain pass on the road to Alfarnate, with a sweeping view over the Axarquía and the reservoir.' },
        { name: 'La Viñuela reservoir', text: 'The largest reservoir in the province lies at the foot of Periana. Walking and cycling routes run along its shores, and there are picnic spots.' },
        { name: 'Guaro', text: 'The hamlet where the Guaro rises, the river that feeds La Viñuela reservoir.' },
      ],
      fiestas: [
        { name: 'San Isidro Labrador', when: 'around 15 May', text: 'a fair lasting several days in honour of the farmers’ patron saint.' },
        { name: 'Romería', when: 'early June', text: 'a pilgrimage to the shores of La Viñuela reservoir.' },
        { name: 'Feria del Melocotón', when: 'around 25 July', text: 'the peach festival, at the height of the harvest.' },
        { name: 'Feria de agosto', when: 'late August', text: 'the village summer fiesta.' },
      ],
    },
    living: {
      title: 'Living in Periana: cortijos, fincas, village houses and prices',
      description: 'Buying a home in Periana? The types of property, what they cost, the village facilities and what to watch for with a cortijo or finca in the interior.',
      lead: 'In Periana you get a lot of house and land for your money. You live among Spaniards, about 45 minutes from the coast.',
      sections: [
        { h: 'Types of property', p: [
          'In the village, spacious village houses, often with a patio. In the hamlets and countryside, cortijos and fincas with olive, almond and fruit trees, from simple farmhouses to converted country houses with pools.',
        ] },
        { h: 'What a home costs', p: [
          'In October 2026 average asking prices were around €1,800 per m² (RealAdvisor), about half the level on the coast. Allow around 10% for <a href="/en/guides/buying-costs-in-spain/">buying costs</a> and, for an old country house, a <a href="/en/guides/renovation-costs-spain/">renovation budget</a>.',
        ] },
        { h: 'Facilities', p: [
          'As a larger village, Periana has a health centre, pharmacy, supermarkets, banks and a primary school. A bus runs to Málaga. For the hospital you go to Vélez-Málaga.',
        ] },
        { h: 'Watch out with country houses', p: [
          'Many homes are in the countryside. When buying, check that the house is legal, what the access track is like and where the water comes from: a private spring, a shared supply or the mains. Read our guides to <a href="/en/guides/buying-a-finca-in-spain/">buying a finca</a> and <a href="/en/guides/afo-legalisation-andalusia/">AFO and legalisation</a>.',
        ] },
        { h: 'Renovating in Periana', p: [
          'At 550 metres winters are cooler than on the coast. Insulation, good windows and heating belong in a renovation here. The area is seismically active (in 1884 an earthquake destroyed much of the village), so with old houses have the structure checked as well. Have a property <a href="/en/property-survey/">surveyed</a> before you buy.',
        ] },
      ],
    },
    faq: [
      { q: 'How far is Periana from the coast?', a: 'Vélez-Málaga and Torre del Mar are about 45 minutes’ drive, via La Viñuela reservoir.' },
      { q: 'What is Periana known for?', a: 'Its verdial olive oil, with olive trees over a thousand years old in Mondrón, and its peaches.' },
      { q: 'Is there public transport in Periana?', a: 'Yes, a bus line connects Periana with Málaga. For daily life you will in practice need a car.' },
    ],
  },
  de: {
    title: 'Periana: Wohnen zwischen Oliven und Pfirsichen über dem See',
    description: 'Alles über Periana: das Dorf oberhalb des Stausees La Viñuela, das Verdial-Olivenöl und die Pfirsiche, die Weiler Mondrón und Guaro, Immobilienpreise und Kaufen auf dem Land.',
    lead: 'Periana liegt auf einem Ausläufer der Sierra de Alhama, mit dem Stausee La Viñuela zu seinen Füßen. Es ist ein arbeitendes Bauerndorf, bekannt für sein Olivenöl und einige der besten Pfirsiche Spaniens.',
    intro: [
      'Periana liegt auf 550 Metern im Norden der Axarquía, etwa 58 Kilometer von Málaga entfernt. Vom Dorf blicken Sie hinunter auf den Stausee von <a href="/de/orte/vinuela/">La Viñuela</a> und über die Hügel bis zum Meer. Hinter dem Dorf erheben sich die Berge der Sierra de Alhama und der Sierra de Enmedio.',
      'Mit gut 3.300 Einwohnern ist Periana eines der größeren Dörfer im Hinterland. Die Gemeinde ist groß und weitläufig: Neben dem Dorf selbst gibt es Weiler wie Mondrón, bekannt für über tausend Jahre alte Olivenbäume, Guaro, wo der gleichnamige Fluss entspringt, und Baños de Vilo mit den Resten eines alten Kurbads.',
      'Die Landschaft dreht sich um die Landwirtschaft. An den Hängen stehen Olivenhaine für das Verdial-Öl, und im Sommer werden hier Pfirsiche geerntet, die in ganz Spanien bekannt sind.',
    ],
    facts: [
      ['Einwohner', 'gut 3.300 (2025)'],
      ['Lage', 'Hinterland, 550 m hoch'],
      ['Málaga', 'etwa 58 km'],
      ['Stausee La Viñuela', 'am Fuß des Dorfes'],
      ['Bekannt für', 'Verdial-Olivenöl und Pfirsiche'],
      ['Preisniveau', 'niedrig, rund 1.800 € pro m²'],
    ],
    forWhom: 'Für alle, die das echte Land suchen, mit Platz, einem Stück Grund und einem Dorf, in dem sich das Leben um die Ernte dreht. Periana passt zu Menschen, die einen Cortijo oder eine Finca mit Olivenbäumen möchten und die Küste nicht jeden Tag brauchen.',
    see: {
      title: 'Sehenswertes in Periana: Baños de Vilo, Olivenöl und Pfirsiche',
      description: 'Was man in Periana unternehmen kann: die Ruinen des Kurbads Baños de Vilo, die tausendjährigen Olivenbäume von Mondrón, der Pass Puerto del Sol, der Stausee und die Pfirsichfeste.',
      lead: 'Periana ist kein Touristendorf. Gerade deshalb ist es ein guter Ort, um zu sehen, wie das Hinterland der Axarquía lebt.',
      items: [
        { name: 'Baños de Vilo', text: 'Mineralquellen, die im 18. und 19. Jahrhundert ein bekanntes Kurbad waren. Vom Badehaus stehen noch Mauern und ein Becken, an einem schönen Ort im Grünen.' },
        { name: 'Die Olivenbäume von Mondrón', text: 'In und um den Weiler Mondrón stehen Olivenbäume, die über tausend Jahre alt sind. Hier entsteht das Verdial-Öl, für das Periana bekannt ist.' },
        { name: 'Puerto del Sol', text: 'Der Bergpass an der Straße nach Alfarnate, mit weitem Blick über die Axarquía und den Stausee.' },
        { name: 'Stausee La Viñuela', text: 'Der größte Stausee der Provinz liegt am Fuß von Periana. Entlang der Ufer führen Wander- und Radwege, und es gibt Picknickplätze.' },
        { name: 'Guaro', text: 'Der Weiler, in dem der Guaro entspringt, der Fluss, der den Stausee La Viñuela speist.' },
      ],
      fiestas: [
        { name: 'San Isidro Labrador', when: 'um den 15. Mai', text: 'mehrtägiges Fest zu Ehren des Schutzpatrons der Bauern.' },
        { name: 'Romería', when: 'Anfang Juni', text: 'Wallfahrt an die Ufer des Stausees La Viñuela.' },
        { name: 'Feria del Melocotón', when: 'um den 25. Juli', text: 'das Pfirsichfest auf dem Höhepunkt der Ernte.' },
        { name: 'Feria de agosto', when: 'Ende August', text: 'das Sommerfest des Dorfes.' },
      ],
    },
    living: {
      title: 'Wohnen in Periana: Cortijos, Fincas, Dorfhäuser und Preise',
      description: 'Ein Haus in Periana kaufen? Welche Immobilien es gibt, was sie kosten, die Versorgung im Dorf und worauf Sie bei einem Cortijo oder einer Finca im Hinterland achten sollten.',
      lead: 'In Periana bekommen Sie viel Haus und Land für Ihr Geld. Sie wohnen unter Spaniern, etwa eine Dreiviertelstunde von der Küste entfernt.',
      sections: [
        { h: 'Welche Immobilien es gibt', p: [
          'Im Dorf geräumige Dorfhäuser, oft mit Innenhof. In den Weilern und im Außenbereich Cortijos und Fincas mit Oliven-, Mandel- und Obstbäumen, vom einfachen Bauernhaus bis zum umgebauten Landhaus mit Pool.',
        ] },
        { h: 'Was eine Immobilie kostet', p: [
          'Im Oktober 2026 lagen die durchschnittlichen Angebotspreise bei rund 1.800 € pro m² (RealAdvisor), etwa die Hälfte der Küste. Rechnen Sie mit rund 10% <a href="/de/ratgeber/kaufnebenkosten-spanien/">Kaufnebenkosten</a> und bei einem alten Landhaus mit einem <a href="/de/ratgeber/renovierungskosten-spanien/">Renovierungsbudget</a>.',
        ] },
        { h: 'Versorgung', p: [
          'Als größeres Dorf hat Periana ein Gesundheitszentrum, eine Apotheke, Supermärkte, Banken und eine Grundschule. Ein Bus fährt nach Málaga. Ins Krankenhaus fahren Sie nach Vélez-Málaga.',
        ] },
        { h: 'Vorsicht bei Landhäusern', p: [
          'Viele Häuser liegen im Außenbereich. Prüfen Sie beim Kauf, ob das Haus legal ist, wie der Zufahrtsweg ist und woher das Wasser kommt: eigene Quelle, gemeinsame Leitung oder Netz. Lesen Sie unsere Ratgeber <a href="/de/ratgeber/finca-kaufen-spanien/">Finca kaufen</a> und <a href="/de/ratgeber/afo-legalisierung-andalusien/">AFO und Legalisierung</a>.',
        ] },
        { h: 'Renovieren in Periana', p: [
          'Auf 550 Metern sind die Winter kühler als an der Küste. Dämmung, gute Fenster und eine Heizung gehören hier zur Renovierung. Die Gegend ist erdbebengefährdet (1884 zerstörte ein Erdbeben einen großen Teil des Dorfes), lassen Sie bei alten Häusern deshalb auch die Statik prüfen. Lassen Sie eine Immobilie vor dem Kauf <a href="/de/immobiliengutachten/">begutachten</a>.',
        ] },
      ],
    },
    faq: [
      { q: 'Wie weit ist Periana von der Küste entfernt?', a: 'Nach Vélez-Málaga und Torre del Mar sind es etwa 45 Minuten mit dem Auto, über den Stausee La Viñuela.' },
      { q: 'Wofür ist Periana bekannt?', a: 'Für sein Verdial-Olivenöl, mit über tausend Jahre alten Olivenbäumen in Mondrón, und für seine Pfirsiche.' },
      { q: 'Gibt es in Periana öffentliche Verkehrsmittel?', a: 'Ja, eine Buslinie verbindet Periana mit Málaga. Für den Alltag brauchen Sie in der Praxis ein Auto.' },
    ],
  },
};
export default content;
