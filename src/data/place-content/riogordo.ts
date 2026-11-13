import type { PlaceContent } from './types';

// Feitenblad Riogordo (november 2026)
// - Inwoners: 2.839 (INE, 1 januari 2025). Oppervlakte 40 km²; hoogte 381 m; circa 36,5 km naar Málaga, 30 km naar Vélez-Málaga.
// - Gesticht in 1552. Omar ben Hafsun zou geboren zijn op de Cortijo de Auta, stroomafwaarts.
// - Tajo de Gómer (1.129 m), hoogste punt van de gemeente. Etnografisch museum El Paso in een oude olijfmolen.
// - Fiesta's: carnaval (februari), El Paso de Riogordo (passiespel op Goede Vrijdag en Stille Zaterdag), Feria de mayo (27-29 mei),
//   Día del Caracol (1 juni), Feria de agosto (14-18 augustus, San Jacinto en Nuestra Señora de Gracia), Fiesta del Candil (7 september).
// - Bekend om slakkenstoofpot (caracoles) en olijfolie van de coöperatie.
// - Woningprijzen: circa € 1.600 per m² (RealAdvisor, oktober 2026).
const content: PlaceContent = {
  sources: [
    'https://es.wikipedia.org/wiki/Riogordo',
    'https://realadvisor.es/es/precios-viviendas/municipio-riogordo',
  ],
  nl: {
    title: 'Riogordo: wonen in het dorp van het passiespel El Paso',
    description: 'Alles over Riogordo: het passiespel El Paso, de Tajo de Gómer, een half uur van Málaga, woningprijzen en kopen en verbouwen in het binnenland.',
    lead: 'Riogordo is een rustig landbouwdorp in het westen van de Axarquía, op een half uur van Málaga. Elk voorjaar speelt het halve dorp het passiespel El Paso, waarvoor bezoekers van heinde en verre komen.',
    intro: [
      'Riogordo ligt op 381 meter hoogte in een dal aan de westkant van de Axarquía, ongeveer 36 kilometer van Málaga en 30 kilometer van <a href="/nl/plaatsen/velez-malaga/">Vélez-Málaga</a>. Rond het dorp liggen olijfgaarden en graanvelden, met de rots van de Tajo de Gómer (1.129 meter) als baken in het landschap.',
      'Het dorp werd in 1552 gesticht, maar de geschiedenis van de streek gaat verder terug: stroomafwaarts ligt de Cortijo de Auta, waar volgens de overlevering Omar ben Hafsun werd geboren, de opstandeling die in de negende eeuw het kalifaat van Córdoba uitdaagde.',
      'Met ruim 2.800 inwoners is Riogordo een levendig dorp met eigen winkels, bars en een sterke dorpsgemeenschap. Het aandeel buitenlanders is kleiner dan in de dorpen bij de kust.',
    ],
    facts: [
      ['Inwoners', 'ruim 2.800 (2025)'],
      ['Ligging', 'binnenland, 381 m hoog'],
      ['Málaga', 'circa 36 km, ruim een half uur'],
      ['Vélez-Málaga', 'circa 30 km'],
      ['Bekend om', 'El Paso, slakken en olijfolie'],
      ['Prijsniveau', 'laag, circa € 1.600 per m²'],
    ],
    forWhom: 'Voor wie een echt Spaans dorp zoekt, met lage prijzen en Málaga dichterbij dan vanuit de meeste dorpen in de Axarquía. Riogordo past bij mensen die rust en ruimte willen en het dorpsleven graag meemaken.',
    see: {
      title: 'Zien en doen in Riogordo: El Paso en Tajo de Gómer',
      description: 'Wat te doen in Riogordo: het passiespel El Paso, het museum in de oude olijfmolen, wandelen naar de Tajo de Gómer en de dorpsfeesten.',
      lead: 'Riogordo is het hele jaar een rustig dorp, met een paar dagen per jaar waarop het helemaal tot leven komt.',
      items: [
        { name: 'El Paso de Riogordo', text: 'Op Goede Vrijdag en Stille Zaterdag speelt het dorp in de open lucht het lijdensverhaal na, met honderden inwoners als acteurs en figuranten. Het is een van de bekendste passiespelen van Andalusië en trekt elk jaar duizenden toeschouwers.' },
        { name: 'Museo Etnográfico', text: 'Het etnografisch museum zit in een oude olijfmolen en laat zien hoe er vroeger op het platteland werd geleefd en gewerkt, met wijnkelders en molens uit de zeventiende en negentiende eeuw.' },
        { name: 'Tajo de Gómer', text: 'De markante rots van 1.129 meter is het hoogste punt van de gemeente. Vanaf de top kijkt u over de hele westelijke Axarquía.' },
        { name: 'Slakken en olijfolie', text: 'Riogordo is bekend om zijn slakkenstoofpot (<em>caracoles</em>) en om de olijfolie van de coöperatie, die u in het dorp kunt kopen.' },
      ],
      fiestas: [
        { name: 'El Paso', when: 'Goede Vrijdag en Stille Zaterdag', text: 'het passiespel in de open lucht.' },
        { name: 'Feria de mayo', when: 'eind mei', text: 'het voorjaarsfeest.' },
        { name: 'Día del Caracol', when: '1 juni', text: 'het dorp deelt slakken uit, in de pot van het huis.' },
        { name: 'Feria de agosto', when: 'half augustus', text: 'het hoofdfeest ter ere van San Jacinto en Nuestra Señora de Gracia.' },
        { name: 'Fiesta del Candil', when: '7 september', text: 'een traditioneel feest met lichtjes in het dorp.' },
      ],
    },
    living: {
      title: 'Wonen in Riogordo: dorpshuizen, cortijos en prijzen',
      description: 'Een huis kopen in Riogordo? Welke woningen er zijn, wat ze kosten, de voorzieningen in het dorp en waar u op let bij een cortijo of een oud dorpshuis.',
      lead: 'Riogordo is een van de goedkoopste plaatsen in de Axarquía, terwijl Málaga op ruim een half uur ligt. Dat maakt het dorp interessant voor wie een groot huis zoekt voor een klein budget.',
      sections: [
        { h: 'Wat voor woningen er zijn', p: [
          'In het dorp vooral ruime dorpshuizen, vaak met een patio of een kleine tuin. Daarbuiten cortijos met olijfbomen en akkers. Er is weinig nieuwbouw en nauwelijks aanbod van villa’s.',
        ] },
        { h: 'Wat een woning kost', p: [
          'In oktober 2026 lag de gemiddelde vraagprijs rond de € 1.600 per m² (RealAdvisor), minder dan de helft van de kust. Reken op ongeveer 10% <a href="/nl/gidsen/kosten-koper-spanje/">kosten koper</a> en, bij een oud huis, een <a href="/nl/gidsen/kosten-huis-renoveren-spanje/">verbouwbudget</a>.',
        ] },
        { h: 'Voorzieningen', p: [
          'Riogordo heeft een gezondheidscentrum, apotheek, supermarkten, bank en een basisschool. Voor het ziekenhuis en grotere winkels gaat u naar Málaga of Vélez-Málaga.',
        ] },
        { h: 'Let op bij cortijos', p: [
          'Bij landelijke huizen moet u de legale status, de toegangsweg en de watervoorziening goed nagaan. Lees onze gidsen over <a href="/nl/gidsen/finca-kopen-in-spanje/">finca kopen</a> en <a href="/nl/gidsen/afo-legaliseren-andalusie/">AFO en legaliseren</a>.',
        ] },
        { h: 'Verbouwen in Riogordo', p: [
          'Oude dorpshuizen hebben vaak muren van steen en leem, houten balkenplafonds en daken die aan vervanging toe zijn. In het binnenland zijn de winters koeler, dus denk bij een renovatie ook aan isolatie en verwarming. Laat een woning vóór aankoop <a href="/nl/aankoopkeuring/">keuren</a>.',
        ] },
      ],
    },
    faq: [
      { q: 'Wanneer wordt El Paso in Riogordo gespeeld?', a: 'Op Goede Vrijdag en Stille Zaterdag, in de week voor Pasen. Kom op tijd, want er komen veel bezoekers.' },
      { q: 'Hoe ver is Riogordo van Málaga?', a: 'Ongeveer 36 kilometer, ruim een half uur rijden. Daarmee ligt Riogordo dichter bij Málaga dan de meeste dorpen in de Axarquía.' },
      { q: 'Is Riogordo goedkoop?', a: 'Ja, de gemiddelde vraagprijs lag in oktober 2026 rond de € 1.600 per m², een van de laagste niveaus in de Axarquía.' },
    ],
  },
  en: {
    title: 'Riogordo: living in the village of the El Paso passion play',
    description: 'All about Riogordo: the El Paso passion play, the Tajo de Gómer, half an hour from Málaga, property prices and tips on buying and renovating.',
    lead: 'Riogordo is a quiet farming village in the west of the Axarquía, half an hour from Málaga. Every spring half the village performs the El Paso passion play, which draws visitors from far and wide.',
    intro: [
      'Riogordo lies at 381 metres in a valley on the western side of the Axarquía, about 36 kilometres from Málaga and 30 kilometres from <a href="/en/places/velez-malaga/">Vélez-Málaga</a>. Around the village are olive groves and grain fields, with the rock of the Tajo de Gómer (1,129 metres) as a landmark.',
      'The village was founded in 1552, but the history of the area goes further back: downriver is the Cortijo de Auta, traditionally held to be the birthplace of Omar ben Hafsun, the rebel who challenged the Caliphate of Córdoba in the ninth century.',
      'With just over 2,800 residents, Riogordo is a lively village with its own shops, bars and a strong community. The share of foreigners is smaller than in the villages near the coast.',
    ],
    facts: [
      ['Population', 'just over 2,800 (2025)'],
      ['Setting', 'inland, 381 m up'],
      ['Málaga', 'about 36 km, just over half an hour'],
      ['Vélez-Málaga', 'about 30 km'],
      ['Known for', 'El Paso, snails and olive oil'],
      ['Price level', 'low, about €1,600 per m²'],
    ],
    forWhom: 'People looking for a real Spanish village, with low prices and Málaga closer than from most villages in the Axarquía. Riogordo suits those who want peace and space and enjoy taking part in village life.',
    see: {
      title: 'Things to do in Riogordo: El Paso and Tajo de Gómer',
      description: 'What to do in Riogordo: the El Paso passion play at Easter, the ethnographic museum in the old olive mill, walking to the Tajo de Gómer and the village fiestas.',
      lead: 'Riogordo is a quiet village all year, with a few days a year when it comes fully to life.',
      items: [
        { name: 'El Paso de Riogordo', text: 'On Good Friday and Holy Saturday the village re-enacts the Passion in the open air, with hundreds of residents as actors and extras. It is one of the best-known passion plays in Andalusia and draws thousands of spectators every year.' },
        { name: 'Museo Etnográfico', text: 'The ethnographic museum is housed in an old olive mill and shows how people used to live and work in the countryside, with wine cellars and mills from the seventeenth and nineteenth centuries.' },
        { name: 'Tajo de Gómer', text: 'The striking 1,129-metre rock is the highest point in the municipality. From the top you look out over the whole western Axarquía.' },
        { name: 'Snails and olive oil', text: 'Riogordo is known for its snail stew (<em>caracoles</em>) and for the olive oil of its cooperative, which you can buy in the village.' },
      ],
      fiestas: [
        { name: 'El Paso', when: 'Good Friday and Holy Saturday', text: 'the open-air passion play.' },
        { name: 'Feria de mayo', when: 'late May', text: 'the spring fair.' },
        { name: 'Día del Caracol', when: '1 June', text: 'the village hands out snails cooked the local way.' },
        { name: 'Feria de agosto', when: 'mid-August', text: 'the main fiesta in honour of San Jacinto and Nuestra Señora de Gracia.' },
        { name: 'Fiesta del Candil', when: '7 September', text: 'a traditional fiesta with lights in the village.' },
      ],
    },
    living: {
      title: 'Living in Riogordo: village houses, cortijos and prices',
      description: 'Buying a home in Riogordo? The types of property, what they cost, the village facilities and what to watch for with a cortijo or an old village house.',
      lead: 'Riogordo is one of the cheapest places in the Axarquía, while Málaga is just over half an hour away. That makes it interesting for anyone looking for a big house on a small budget.',
      sections: [
        { h: 'Types of property', p: [
          'In the village mainly spacious village houses, often with a patio or a small garden. Outside it, cortijos with olive trees and fields. There is little new-build and hardly any villas for sale.',
        ] },
        { h: 'What a home costs', p: [
          'In October 2026 average asking prices were around €1,600 per m² (RealAdvisor), less than half the coastal level. Allow around 10% for <a href="/en/guides/buying-costs-in-spain/">buying costs</a> and, for an old house, a <a href="/en/guides/renovation-costs-spain/">renovation budget</a>.',
        ] },
        { h: 'Facilities', p: [
          'Riogordo has a health centre, pharmacy, supermarkets, a bank and a primary school. For the hospital and bigger shops you go to Málaga or Vélez-Málaga.',
        ] },
        { h: 'Watch out with cortijos', p: [
          'With country houses, check the legal status, the access track and the water supply carefully. Read our guides to <a href="/en/guides/buying-a-finca-in-spain/">buying a finca</a> and <a href="/en/guides/afo-legalisation-andalusia/">AFO and legalisation</a>.',
        ] },
        { h: 'Renovating in Riogordo', p: [
          'Old village houses often have stone and earth walls, timber-beamed ceilings and roofs that need replacing. Inland, winters are cooler, so plan insulation and heating into any renovation. Have a property <a href="/en/property-survey/">surveyed</a> before you buy.',
        ] },
      ],
    },
    faq: [
      { q: 'When is El Paso performed in Riogordo?', a: 'On Good Friday and Holy Saturday, in the week before Easter. Arrive early, as many visitors come.' },
      { q: 'How far is Riogordo from Málaga?', a: 'About 36 kilometres, just over half an hour by car. That makes Riogordo closer to Málaga than most villages in the Axarquía.' },
      { q: 'Is Riogordo cheap?', a: 'Yes, average asking prices in October 2026 were around €1,600 per m², one of the lowest levels in the Axarquía.' },
    ],
  },
  de: {
    title: 'Riogordo: Wohnen im Dorf des Passionsspiels El Paso',
    description: 'Alles über Riogordo: Passionsspiel El Paso, Tajo de Gómer, eine halbe Stunde von Málaga, Immobilienpreise und Tipps zu Kauf und Renovierung.',
    lead: 'Riogordo ist ein ruhiges Bauerndorf im Westen der Axarquía, eine halbe Stunde von Málaga entfernt. Jedes Frühjahr spielt das halbe Dorf das Passionsspiel El Paso, zu dem Besucher von weit her kommen.',
    intro: [
      'Riogordo liegt auf 381 Metern in einem Tal an der Westseite der Axarquía, etwa 36 Kilometer von Málaga und 30 Kilometer von <a href="/de/orte/velez-malaga/">Vélez-Málaga</a> entfernt. Rund um das Dorf liegen Olivenhaine und Getreidefelder, mit dem Felsen des Tajo de Gómer (1.129 Meter) als Wahrzeichen.',
      'Das Dorf wurde 1552 gegründet, doch die Geschichte der Gegend reicht weiter zurück: Flussabwärts liegt der Cortijo de Auta, der Überlieferung nach der Geburtsort von Omar ben Hafsun, dem Rebellen, der im 9. Jahrhundert das Kalifat von Córdoba herausforderte.',
      'Mit gut 2.800 Einwohnern ist Riogordo ein lebendiges Dorf mit eigenen Läden, Bars und einer starken Dorfgemeinschaft. Der Ausländeranteil ist kleiner als in den Dörfern an der Küste.',
    ],
    facts: [
      ['Einwohner', 'gut 2.800 (2025)'],
      ['Lage', 'Hinterland, 381 m hoch'],
      ['Málaga', 'etwa 36 km, gut eine halbe Stunde'],
      ['Vélez-Málaga', 'etwa 30 km'],
      ['Bekannt für', 'El Paso, Schnecken und Olivenöl'],
      ['Preisniveau', 'niedrig, rund 1.600 € pro m²'],
    ],
    forWhom: 'Für alle, die ein echtes spanisches Dorf suchen, mit niedrigen Preisen und Málaga näher als von den meisten Dörfern der Axarquía. Riogordo passt zu Menschen, die Ruhe und Platz möchten und das Dorfleben gern mitmachen.',
    see: {
      title: 'Sehenswertes in Riogordo: El Paso und Tajo de Gómer',
      description: 'Was man in Riogordo unternehmen kann: Passionsspiel El Paso, das Volkskundemuseum in der alten Ölmühle, Wandern zum Tajo de Gómer und die Dorffeste.',
      lead: 'Riogordo ist das ganze Jahr über ein ruhiges Dorf, mit ein paar Tagen im Jahr, an denen es richtig lebendig wird.',
      items: [
        { name: 'El Paso de Riogordo', text: 'Am Karfreitag und Karsamstag spielt das Dorf unter freiem Himmel die Passionsgeschichte nach, mit Hunderten Einwohnern als Darsteller und Statisten. Es ist eines der bekanntesten Passionsspiele Andalusiens und zieht jedes Jahr Tausende Zuschauer an.' },
        { name: 'Museo Etnográfico', text: 'Das Volkskundemuseum befindet sich in einer alten Ölmühle und zeigt, wie man früher auf dem Land lebte und arbeitete, mit Weinkellern und Mühlen aus dem 17. und 19. Jahrhundert.' },
        { name: 'Tajo de Gómer', text: 'Der markante Felsen von 1.129 Metern ist der höchste Punkt der Gemeinde. Vom Gipfel blicken Sie über die ganze westliche Axarquía.' },
        { name: 'Schnecken und Olivenöl', text: 'Riogordo ist bekannt für seinen Schneckeneintopf (<em>caracoles</em>) und für das Olivenöl der Genossenschaft, das Sie im Dorf kaufen können.' },
      ],
      fiestas: [
        { name: 'El Paso', when: 'Karfreitag und Karsamstag', text: 'das Passionsspiel unter freiem Himmel.' },
        { name: 'Feria de mayo', when: 'Ende Mai', text: 'das Frühlingsfest.' },
        { name: 'Día del Caracol', when: '1. Juni', text: 'das Dorf verteilt Schnecken nach örtlicher Art.' },
        { name: 'Feria de agosto', when: 'Mitte August', text: 'das Hauptfest zu Ehren von San Jacinto und Nuestra Señora de Gracia.' },
        { name: 'Fiesta del Candil', when: '7. September', text: 'ein traditionelles Fest mit Lichtern im Dorf.' },
      ],
    },
    living: {
      title: 'Wohnen in Riogordo: Dorfhäuser, Cortijos und Preise',
      description: 'Haus in Riogordo kaufen? Welche Immobilien es gibt, was sie kosten, die Versorgung und worauf Sie bei einem Cortijo oder alten Dorfhaus achten sollten.',
      lead: 'Riogordo gehört zu den günstigsten Orten der Axarquía, während Málaga nur gut eine halbe Stunde entfernt ist. Das macht das Dorf interessant für alle, die ein großes Haus mit kleinem Budget suchen.',
      sections: [
        { h: 'Welche Immobilien es gibt', p: [
          'Im Dorf vor allem geräumige Dorfhäuser, oft mit Patio oder kleinem Garten. Außerhalb Cortijos mit Olivenbäumen und Feldern. Neubauten gibt es wenig, Villen kaum.',
        ] },
        { h: 'Was eine Immobilie kostet', p: [
          'Im Oktober 2026 lagen die durchschnittlichen Angebotspreise bei rund 1.600 € pro m² (RealAdvisor), weniger als die Hälfte der Küste. Rechnen Sie mit rund 10% <a href="/de/ratgeber/kaufnebenkosten-spanien/">Kaufnebenkosten</a> und bei einem alten Haus mit einem <a href="/de/ratgeber/renovierungskosten-spanien/">Renovierungsbudget</a>.',
        ] },
        { h: 'Versorgung', p: [
          'Riogordo hat ein Gesundheitszentrum, eine Apotheke, Supermärkte, eine Bank und eine Grundschule. Für Krankenhaus und größere Geschäfte fahren Sie nach Málaga oder Vélez-Málaga.',
        ] },
        { h: 'Vorsicht bei Cortijos', p: [
          'Bei Landhäusern sollten Sie den rechtlichen Status, den Zufahrtsweg und die Wasserversorgung genau prüfen. Lesen Sie unsere Ratgeber <a href="/de/ratgeber/finca-kaufen-spanien/">Finca kaufen</a> und <a href="/de/ratgeber/afo-legalisierung-andalusien/">AFO und Legalisierung</a>.',
        ] },
        { h: 'Renovieren in Riogordo', p: [
          'Alte Dorfhäuser haben oft Mauern aus Stein und Lehm, Holzbalkendecken und Dächer, die erneuert werden müssen. Im Hinterland sind die Winter kühler, denken Sie bei einer Renovierung also auch an Dämmung und Heizung. Lassen Sie eine Immobilie vor dem Kauf <a href="/de/immobiliengutachten/">begutachten</a>.',
        ] },
      ],
    },
    faq: [
      { q: 'Wann wird El Paso in Riogordo aufgeführt?', a: 'Am Karfreitag und Karsamstag, in der Woche vor Ostern. Kommen Sie früh, es kommen viele Besucher.' },
      { q: 'Wie weit ist Riogordo von Málaga entfernt?', a: 'Etwa 36 Kilometer, gut eine halbe Stunde mit dem Auto. Damit liegt Riogordo näher an Málaga als die meisten Dörfer der Axarquía.' },
      { q: 'Ist Riogordo günstig?', a: 'Ja, die durchschnittlichen Angebotspreise lagen im Oktober 2026 bei rund 1.600 € pro m², einem der niedrigsten Niveaus der Axarquía.' },
    ],
  },
  sv: {
    title: 'Riogordo: bo i byn med passionsspelet El Paso',
    description: 'Allt om Riogordo: passionsspelet El Paso, Tajo de Gómer, en by en halvtimme från Málaga, bostadspriser och vad du ska veta om att köpa och renovera i inlandet.',
    lead: 'Riogordo är en lugn jordbruksby i västra Axarquía, en halvtimme från Málaga. Varje vår spelar halva byn passionsspelet El Paso, som lockar besökare från när och fjärran.',
    intro: [
      'Riogordo ligger på 381 meters höjd i en dal på Axarquías västra sida, cirka 36 kilometer från Málaga och 30 kilometer från <a href="/sv/orter/velez-malaga/">Vélez-Málaga</a>. Runt byn finns olivlundar och sädesfält, med klippan Tajo de Gómer (1 129 meter) som landmärke.',
      'Byn grundades 1552, men traktens historia går längre tillbaka: nedströms ligger Cortijo de Auta, som enligt traditionen är födelseplatsen för Omar ben Hafsun, rebellen som utmanade kalifatet i Córdoba på 800-talet.',
      'Med drygt 2 800 invånare är Riogordo en livlig by med egna affärer, barer och en stark gemenskap. Andelen utlänningar är mindre än i byarna nära kusten.',
    ],
    facts: [
      ['Invånare', 'drygt 2 800 (2025)'],
      ['Läge', 'inland, 381 m'],
      ['Málaga', 'cirka 36 km, drygt en halvtimme'],
      ['Vélez-Málaga', 'cirka 30 km'],
      ['Känt för', 'El Paso, sniglar och olivolja'],
      ['Prisnivå', 'låg, cirka 1 600 € per m²'],
    ],
    forWhom: 'För dig som söker en riktig spansk by, med låga priser och Málaga närmare än från de flesta byar i Axarquía. Riogordo passar dig som vill ha lugn och utrymme och gärna deltar i bylivet.',
    see: {
      title: 'Se och göra i Riogordo: El Paso, museet och Tajo de Gómer',
      description: 'Vad du kan göra i Riogordo: passionsspelet El Paso i påsk, det etnografiska museet i den gamla oljekvarnen, vandra till Tajo de Gómer och byns fester.',
      lead: 'Riogordo är en lugn by året runt, med några dagar om året då den vaknar till liv på riktigt.',
      items: [
        { name: 'El Paso de Riogordo', text: 'På långfredagen och påskaftonen spelar byn upp Kristi lidande utomhus, med hundratals invånare som skådespelare och statister. Det är ett av Andalusiens mest kända passionsspel och lockar tusentals åskådare varje år.' },
        { name: 'Museo Etnográfico', text: 'Det etnografiska museet finns i en gammal oljekvarn och visar hur man förr levde och arbetade på landsbygden, med vinkällare och kvarnar från 1600- och 1800-talen.' },
        { name: 'Tajo de Gómer', text: 'Den iögonfallande klippan på 1 129 meter är kommunens högsta punkt. Från toppen ser du ut över hela västra Axarquía.' },
        { name: 'Sniglar och olivolja', text: 'Riogordo är känt för sin sniggelgryta (<em>caracoles</em>) och för olivoljan från kooperativet, som du kan köpa i byn.' },
      ],
      fiestas: [
        { name: 'El Paso', when: 'långfredagen och påskaftonen', text: 'passionsspelet utomhus.' },
        { name: 'Feria de mayo', when: 'slutet av maj', text: 'vårens feria.' },
        { name: 'Día del Caracol', when: '1 juni', text: 'byn bjuder på sniglar tillagade på traditionellt sätt.' },
        { name: 'Feria de agosto', when: 'mitten av augusti', text: 'huvudfesten till ära för San Jacinto och Nuestra Señora de Gracia.' },
        { name: 'Fiesta del Candil', when: '7 september', text: 'en traditionell fest med ljus i byn.' },
      ],
    },
    living: {
      title: 'Bo i Riogordo: byhus, cortijos och priser',
      description: 'Köpa bostad i Riogordo? Vilka bostäder som finns, vad de kostar, service i byn och vad du ska tänka på med en cortijo eller ett gammalt byhus.',
      lead: 'Riogordo är en av de billigaste orterna i Axarquía, samtidigt som Málaga ligger drygt en halvtimme bort. Det gör byn intressant för dig som söker ett stort hus med liten budget.',
      sections: [
        { h: 'Vilka bostäder som finns', p: [
          'I byn främst rymliga byhus, ofta med patio eller en liten trädgård. Utanför byn cortijos med olivträd och åkrar. Det finns lite nyproduktion och nästan inga villor till salu.',
        ] },
        { h: 'Vad en bostad kostar', p: [
          'I oktober 2026 låg det genomsnittliga utgångspriset kring 1 600 € per m² (RealAdvisor), mindre än hälften av nivån vid kusten. Räkna med cirka 10 % i <a href="/sv/guider/kopa-hus-i-spanien-kostnader/">köpkostnader</a> och, för ett gammalt hus, en <a href="/sv/guider/renovera-hus-i-spanien-kostnad/">renoveringsbudget</a>.',
        ] },
        { h: 'Service', p: [
          'Riogordo har vårdcentral, apotek, livsmedelsbutiker, en bank och en grundskola. För sjukhus och större affärer åker du till Málaga eller Vélez-Málaga.',
        ] },
        { h: 'Se upp med cortijos', p: [
          'För lanthus, kontrollera noga den rättsliga statusen, tillfartsvägen och vattenförsörjningen. Läs våra guider om att <a href="/sv/guider/kopa-finca-i-spanien/">köpa finca</a> och om <a href="/sv/guider/afo-andalusien/">AFO och legalisering</a>.',
        ] },
        { h: 'Renovera i Riogordo', p: [
          'Gamla byhus har ofta väggar av sten och lera, bjälktak av trä och tak som behöver bytas. I inlandet är vintrarna svalare, så planera in isolering och uppvärmning i renoveringen. Låt <a href="/sv/besiktning/">besiktiga</a> huset innan du köper.',
        ] },
      ],
    },
    faq: [
      { q: 'När spelas El Paso i Riogordo?', a: 'På långfredagen och påskaftonen, veckan före påsk. Kom i god tid, för det kommer många besökare.' },
      { q: 'Hur långt är det från Riogordo till Málaga?', a: 'Cirka 36 kilometer, drygt en halvtimme med bil. Det gör Riogordo närmare Málaga än de flesta byar i Axarquía.' },
      { q: 'Är Riogordo billigt?', a: 'Ja, det genomsnittliga utgångspriset låg i oktober 2026 kring 1 600 € per m², en av de lägsta nivåerna i Axarquía.' },
    ],
  },
};
export default content;
