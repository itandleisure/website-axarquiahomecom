import type { PlaceContent } from './types';

// Feitenblad Canillas de Aceituno (november 2026)
// - Inwoners: 1.801 (INE, 1 januari 2025); 455 buitenlandse inwoners in 2022 (26%).
// - Oppervlakte 42 km²; aan de voet van de Sierra de Tejeda; 61 km naar Málaga. Aldeas: Rubite, Posada de Granadillo.
// - La Maroma (2.068 m), hoogste top van de provincie Málaga; klassieke klimroute vanuit het dorp.
// - Monumenten: Casa de los Diezmos of Casa de la Reina Mora (16e eeuw, mudéjartoren), kerk Nuestra Señora del Rosario (gotisch-mudéjar, op de plek van een moskee),
//   Casa Esgrafiada, resten van het kasteel; Cueva de la Fájara op circa 4 km.
// - Fiesta's: Día de la Morcilla (laatste zondag van april, met de Virgen de la Cabeza), romería San Isidro (half mei), feria in augustus.
// - Woningprijzen: circa € 1.800 per m² (RealAdvisor, oktober 2026).
const content: PlaceContent = {
  sources: [
    'https://es.wikipedia.org/wiki/Canillas_de_Aceituno',
    'https://realadvisor.es/es/precios-viviendas/municipio-canillas-de-aceituno',
  ],
  nl: {
    title: 'Canillas de Aceituno: wonen aan de voet van La Maroma',
    description: 'Alles over Canillas de Aceituno: het bergdorp onder de hoogste top van de provincie Málaga, de Casa de los Diezmos, de Dag van de Morcilla, woningprijzen en kopen in de bergen.',
    lead: 'Canillas de Aceituno ligt tegen de flank van de Sierra de Tejeda, recht onder La Maroma, met 2.068 meter de hoogste berg van de provincie Málaga. Het is een echt bergdorp met mudéjarbogen, steile straatjes en uitzicht tot aan zee.',
    intro: [
      'Canillas de Aceituno ligt in het natuurpark Sierras de Tejeda, Almijara y Alhama, boven het stuwmeer van <a href="/nl/plaatsen/vinuela/">La Viñuela</a> en op ongeveer 60 kilometer van Málaga. Boven het dorp rijst La Maroma op, de top die wandelaars uit de hele regio vanaf hier beklimmen.',
      'Het dorp is ontstaan in de Moorse tijd en heeft dat nog goed bewaard: smalle witte straatjes, overwelfde doorgangen en de Casa de los Diezmos, een zestiende-eeuws huis met een mudéjartoren dat in de volksmond Casa de la Reina Mora heet. De kerk is gebouwd op de plek van de oude moskee.',
      'Canillas telt ongeveer 1.800 inwoners, van wie een kwart een buitenlandse nationaliteit heeft. Bij het dorp horen ook de gehuchten Rubite en Posada de Granadillo.',
    ],
    facts: [
      ['Inwoners', 'circa 1.800 (2025)'],
      ['Buitenlandse inwoners', 'circa een kwart'],
      ['Ligging', 'bergen, onder La Maroma (2.068 m)'],
      ['Málaga', 'circa 60 km'],
      ['Stuwmeer La Viñuela', 'circa 10 minuten'],
      ['Prijsniveau', 'laag, circa € 1.800 per m²'],
    ],
    forWhom: 'Voor wandelaars en natuurliefhebbers die in een levend Spaans dorp willen wonen, met de bergen achter de deur en de kust op drie kwartier. Wie het dorpsleven zoekt, kijkt naar een dorpshuis; wie ruimte wil, naar een finca op de hellingen.',
    see: {
      title: 'Zien en doen in Canillas de Aceituno: La Maroma, mudéjar en morcilla',
      description: 'Wat te doen in Canillas de Aceituno: de beklimming van La Maroma, de Casa de los Diezmos, de kerk van de Rozenkrans, de Cueva de la Fájara en de Dag van de Morcilla.',
      lead: 'Canillas is het startpunt voor de bekendste bergtocht van de Axarquía, maar ook zonder klimmen is er genoeg te zien.',
      items: [
        { name: 'La Maroma', text: 'De beklimming van de hoogste top van de provincie (2.068 m) begint in het dorp. Het is een lange, zware dagtocht met veel hoogteverschil. Wie de top haalt, ziet bij helder weer de Sierra Nevada en de Afrikaanse kust. Ga niet in de zomerhitte en neem genoeg water mee.' },
        { name: 'Casa de los Diezmos', text: 'Het zestiende-eeuwse tiendenhuis, ook Casa de la Reina Mora genoemd, met een mudéjartoren van blinde bogen. Het is het bekendste gebouw van het dorp.' },
        { name: 'Kerk Nuestra Señora del Rosario', text: 'Een gotisch-mudéjarkerk op de plek waar ooit de moskee stond.' },
        { name: 'Casa Esgrafiada en het kasteel', text: 'Een mudéjarhuis met gekraste gevelversiering en, hoger in het dorp, de resten van het oude kasteel.' },
        { name: 'Cueva de la Fájara', text: 'Een grot op ongeveer vier kilometer van het dorp, met sporen van prehistorische bewoning.' },
      ],
      fiestas: [
        { name: 'Día de la Morcilla', when: 'laatste zondag van april', text: 'het dorp deelt zijn bloedworst uit tijdens het feest van de Virgen de la Cabeza. Dan komen er duizenden bezoekers.' },
        { name: 'Romería de San Isidro', when: 'half mei', text: 'bedevaart met versierde wagens het land in.' },
        { name: 'Feria', when: 'augustus', text: 'het zomerfeest van het dorp.' },
      ],
    },
    living: {
      title: 'Wonen in Canillas de Aceituno: dorpshuizen, finca’s en prijzen',
      description: 'Een huis kopen in Canillas de Aceituno? Welke woningen er zijn, wat ze kosten, de voorzieningen in het dorp en waar u op let bij een finca of een renovatie in de bergen.',
      lead: 'Canillas de Aceituno is een van de betaalbaarste bergdorpen van de Axarquía. U woont hier tussen Spanjaarden, met een kleine internationale gemeenschap en de natuur om u heen.',
      sections: [
        { h: 'Wat voor woningen er zijn', p: [
          'In het dorp oude dorpshuizen, vaak smal en hoog, met een dakterras of een binnenplaats. Op de hellingen eromheen finca’s en cortijos met olijf- en amandelbomen en uitzicht over het stuwmeer naar zee.',
        ] },
        { h: 'Wat een woning kost', p: [
          'In oktober 2026 lag de gemiddelde vraagprijs rond de € 1.800 per m² (RealAdvisor). Dat is ongeveer de helft van Nerja of Frigiliana. Reken op ongeveer 10% <a href="/nl/gidsen/kosten-koper-spanje/">kosten koper</a> en, bij een oud dorpshuis, een <a href="/nl/gidsen/kosten-huis-renoveren-spanje/">verbouwbudget</a>.',
        ] },
        { h: 'Voorzieningen', p: [
          'In het dorp zijn een consultorio, apotheek, kleine winkels, bars en een basisschool. Voor de grote boodschappen, middelbare school en het ziekenhuis gaat u naar Vélez-Málaga, ongeveer een half uur rijden.',
        ] },
        { h: 'Let op bij finca’s', p: [
          'Het grootste deel van de gemeente ligt in of tegen het natuurpark. Bouwen en uitbreiden is daar streng geregeld, en niet elk huis buiten het dorp is volledig legaal. Laat de status van de woning, de toegangsweg en de watervoorziening vóór aankoop nagaan. Lees onze gidsen over <a href="/nl/gidsen/finca-kopen-in-spanje/">finca kopen</a> en <a href="/nl/gidsen/afo-legaliseren-andalusie/">AFO en legaliseren</a>.',
        ] },
        { h: 'Verbouwen in Canillas de Aceituno', p: [
          'De straatjes in het oude dorp zijn smal en steil. Grote vrachtwagens kunnen er niet in, dus materiaal gaat met kleinere wagens of met de hand naar binnen. Oude huizen hebben vaak dikke muren van steen en leem die vocht vasthouden. Laat een woning vóór aankoop <a href="/nl/aankoopkeuring/">keuren</a>.',
        ] },
      ],
    },
    faq: [
      { q: 'Kun je La Maroma vanuit Canillas de Aceituno beklimmen?', a: 'Ja, de klassieke route naar de top begint in het dorp. Reken op een lange en zware dagtocht met veel hoogteverschil.' },
      { q: 'Wat is de Dag van de Morcilla?', a: 'Op de laatste zondag van april deelt het dorp bloedworst uit tijdens het feest van de Virgen de la Cabeza. Het is het drukste feest van het jaar.' },
      { q: 'Hoe ver is Canillas de Aceituno van de kust?', a: 'Naar Torre del Mar is het ongeveer drie kwartier rijden, via het stuwmeer van La Viñuela en Vélez-Málaga.' },
    ],
  },
  en: {
    title: 'Canillas de Aceituno: living at the foot of La Maroma',
    description: 'All about Canillas de Aceituno: the mountain village below the highest peak in Málaga province, the Casa de los Diezmos, the Morcilla Day, property prices and buying in the mountains.',
    lead: 'Canillas de Aceituno clings to the side of the Sierra de Tejeda, right below La Maroma, at 2,068 metres the highest mountain in the province of Málaga. It is a true mountain village of Mudéjar arches, steep lanes and views down to the sea.',
    intro: [
      'Canillas de Aceituno lies in the Sierras de Tejeda, Almijara y Alhama natural park, above <a href="/en/places/vinuela/">La Viñuela</a> reservoir and about 60 kilometres from Málaga. Above the village rises La Maroma, the peak walkers from across the region climb from here.',
      'The village dates from Moorish times and has kept that character well: narrow white lanes, covered passageways and the Casa de los Diezmos, a sixteenth-century house with a Mudéjar tower known locally as the Casa de la Reina Mora. The church was built on the site of the old mosque.',
      'Canillas has about 1,800 residents, a quarter of them foreign nationals. The hamlets of Rubite and Posada de Granadillo also belong to the municipality.',
    ],
    facts: [
      ['Population', 'about 1,800 (2025)'],
      ['Foreign residents', 'about a quarter'],
      ['Setting', 'mountains, below La Maroma (2,068 m)'],
      ['Málaga', 'about 60 km'],
      ['La Viñuela reservoir', 'about 10 minutes'],
      ['Price level', 'low, about €1,800 per m²'],
    ],
    forWhom: 'Walkers and nature lovers who want to live in a living Spanish village, with the mountains on the doorstep and the coast 45 minutes away. If you want village life, look at a village house; if you want space, at a finca on the slopes.',
    see: {
      title: 'Things to do in Canillas de Aceituno: La Maroma, Mudéjar and morcilla',
      description: 'What to do in Canillas de Aceituno: the climb up La Maroma, the Casa de los Diezmos, the Rosary church, the Cueva de la Fájara and the Morcilla Day.',
      lead: 'Canillas is the starting point for the best-known mountain hike in the Axarquía, but there is plenty to see without climbing.',
      items: [
        { name: 'La Maroma', text: 'The climb up the highest peak in the province (2,068 m) starts in the village. It is a long, demanding day hike with a lot of ascent. From the top, on a clear day, you can see the Sierra Nevada and the African coast. Avoid the summer heat and carry plenty of water.' },
        { name: 'Casa de los Diezmos', text: 'The sixteenth-century tithe house, also called the Casa de la Reina Mora, with a Mudéjar tower of blind arches. It is the best-known building in the village.' },
        { name: 'Nuestra Señora del Rosario church', text: 'A Gothic-Mudéjar church on the site where the mosque once stood.' },
        { name: 'Casa Esgrafiada and the castle', text: 'A Mudéjar house with sgraffito decoration on its facade and, higher in the village, the remains of the old castle.' },
        { name: 'Cueva de la Fájara', text: 'A cave about four kilometres from the village, with traces of prehistoric occupation.' },
      ],
      fiestas: [
        { name: 'Día de la Morcilla', when: 'last Sunday of April', text: 'the village hands out its black pudding during the feast of the Virgen de la Cabeza. Thousands of visitors come.' },
        { name: 'Romería de San Isidro', when: 'mid-May', text: 'a pilgrimage into the countryside with decorated carts.' },
        { name: 'Feria', when: 'August', text: 'the village summer fiesta.' },
      ],
    },
    living: {
      title: 'Living in Canillas de Aceituno: village houses, fincas and prices',
      description: 'Buying a home in Canillas de Aceituno? The types of property, what they cost, the village facilities and what to watch for with a finca or a renovation in the mountains.',
      lead: 'Canillas de Aceituno is one of the most affordable mountain villages in the Axarquía. You live among Spaniards, with a small international community and nature all around.',
      sections: [
        { h: 'Types of property', p: [
          'In the village, old village houses, often narrow and tall, with a roof terrace or a patio. On the slopes around it, fincas and cortijos with olive and almond trees and views across the reservoir to the sea.',
        ] },
        { h: 'What a home costs', p: [
          'In October 2026 average asking prices were around €1,800 per m² (RealAdvisor), about half the level of Nerja or Frigiliana. Allow around 10% for <a href="/en/guides/buying-costs-in-spain/">buying costs</a> and, for an old village house, a <a href="/en/guides/renovation-costs-spain/">renovation budget</a>.',
        ] },
        { h: 'Facilities', p: [
          'The village has a consultorio, pharmacy, small shops, bars and a primary school. For the big shop, secondary school and hospital you go to Vélez-Málaga, about half an hour’s drive.',
        ] },
        { h: 'Watch out with fincas', p: [
          'Most of the municipality lies in or next to the natural park. Building and extending there is strictly regulated, and not every house outside the village is fully legal. Have the status of the property, the access track and the water supply checked before you buy. Read our guides to <a href="/en/guides/buying-a-finca-in-spain/">buying a finca</a> and <a href="/en/guides/afo-legalisation-andalusia/">AFO and legalisation</a>.',
        ] },
        { h: 'Renovating in Canillas de Aceituno', p: [
          'The lanes of the old village are narrow and steep. Large lorries cannot get in, so materials arrive on smaller vehicles or by hand. Old houses often have thick stone and earth walls that hold damp. Have a property <a href="/en/property-survey/">surveyed</a> before you buy.',
        ] },
      ],
    },
    faq: [
      { q: 'Can you climb La Maroma from Canillas de Aceituno?', a: 'Yes, the classic route to the summit starts in the village. Expect a long and demanding day hike with a lot of ascent.' },
      { q: 'What is the Morcilla Day?', a: 'On the last Sunday of April the village hands out black pudding during the feast of the Virgen de la Cabeza. It is the busiest fiesta of the year.' },
      { q: 'How far is Canillas de Aceituno from the coast?', a: 'Torre del Mar is about 45 minutes’ drive, via La Viñuela reservoir and Vélez-Málaga.' },
    ],
  },
  de: {
    title: 'Canillas de Aceituno: Wohnen am Fuß der Maroma',
    description: 'Alles über Canillas de Aceituno: das Bergdorf unter dem höchsten Gipfel der Provinz Málaga, die Casa de los Diezmos, der Tag der Morcilla, Immobilienpreise und Kaufen in den Bergen.',
    lead: 'Canillas de Aceituno liegt an der Flanke der Sierra de Tejeda, direkt unter der Maroma, mit 2.068 Metern der höchste Berg der Provinz Málaga. Es ist ein echtes Bergdorf mit Mudéjar-Bögen, steilen Gassen und Blick bis zum Meer.',
    intro: [
      'Canillas de Aceituno liegt im Naturpark Sierras de Tejeda, Almijara y Alhama, oberhalb des Stausees von <a href="/de/orte/vinuela/">La Viñuela</a> und etwa 60 Kilometer von Málaga entfernt. Über dem Dorf erhebt sich die Maroma, der Gipfel, den Wanderer aus der ganzen Region von hier aus besteigen.',
      'Das Dorf entstand in maurischer Zeit und hat diesen Charakter gut bewahrt: schmale weiße Gassen, überwölbte Durchgänge und die Casa de los Diezmos, ein Haus aus dem 16. Jahrhundert mit Mudéjar-Turm, im Volksmund Casa de la Reina Mora genannt. Die Kirche wurde an der Stelle der alten Moschee gebaut.',
      'Canillas hat rund 1.800 Einwohner, ein Viertel davon mit ausländischer Staatsangehörigkeit. Zur Gemeinde gehören auch die Weiler Rubite und Posada de Granadillo.',
    ],
    facts: [
      ['Einwohner', 'rund 1.800 (2025)'],
      ['Ausländische Einwohner', 'etwa ein Viertel'],
      ['Lage', 'Berge, unter der Maroma (2.068 m)'],
      ['Málaga', 'etwa 60 km'],
      ['Stausee La Viñuela', 'etwa 10 Minuten'],
      ['Preisniveau', 'niedrig, rund 1.800 € pro m²'],
    ],
    forWhom: 'Für Wanderer und Naturfreunde, die in einem lebendigen spanischen Dorf wohnen möchten, mit den Bergen vor der Tür und der Küste in einer Dreiviertelstunde. Wer Dorfleben sucht, schaut nach einem Dorfhaus; wer Platz möchte, nach einer Finca an den Hängen.',
    see: {
      title: 'Sehenswertes in Canillas de Aceituno: Maroma, Mudéjar und Morcilla',
      description: 'Was man in Canillas de Aceituno unternehmen kann: die Besteigung der Maroma, die Casa de los Diezmos, die Rosenkranzkirche, die Cueva de la Fájara und der Tag der Morcilla.',
      lead: 'Canillas ist der Ausgangspunkt der bekanntesten Bergtour der Axarquía, doch auch ohne Gipfel gibt es genug zu sehen.',
      items: [
        { name: 'La Maroma', text: 'Der Aufstieg auf den höchsten Gipfel der Provinz (2.068 m) beginnt im Dorf. Es ist eine lange, anstrengende Tagestour mit vielen Höhenmetern. Vom Gipfel sehen Sie bei klarem Wetter die Sierra Nevada und die afrikanische Küste. Meiden Sie die Sommerhitze und nehmen Sie genug Wasser mit.' },
        { name: 'Casa de los Diezmos', text: 'Das Zehnthaus aus dem 16. Jahrhundert, auch Casa de la Reina Mora genannt, mit einem Mudéjar-Turm aus Blendbögen. Es ist das bekannteste Gebäude des Dorfes.' },
        { name: 'Kirche Nuestra Señora del Rosario', text: 'Eine gotisch-mudéjare Kirche an der Stelle, an der einst die Moschee stand.' },
        { name: 'Casa Esgrafiada und die Burg', text: 'Ein Mudéjar-Haus mit Sgraffito-Verzierung an der Fassade und, weiter oben im Dorf, die Reste der alten Burg.' },
        { name: 'Cueva de la Fájara', text: 'Eine Höhle etwa vier Kilometer vom Dorf entfernt, mit Spuren prähistorischer Besiedlung.' },
      ],
      fiestas: [
        { name: 'Día de la Morcilla', when: 'letzter Sonntag im April', text: 'das Dorf verteilt seine Blutwurst beim Fest der Virgen de la Cabeza. Dann kommen Tausende Besucher.' },
        { name: 'Romería de San Isidro', when: 'Mitte Mai', text: 'Wallfahrt mit geschmückten Wagen hinaus aufs Land.' },
        { name: 'Feria', when: 'August', text: 'das Sommerfest des Dorfes.' },
      ],
    },
    living: {
      title: 'Wohnen in Canillas de Aceituno: Dorfhäuser, Fincas und Preise',
      description: 'Ein Haus in Canillas de Aceituno kaufen? Welche Immobilien es gibt, was sie kosten, die Versorgung im Dorf und worauf Sie bei einer Finca oder Renovierung in den Bergen achten sollten.',
      lead: 'Canillas de Aceituno gehört zu den günstigsten Bergdörfern der Axarquía. Sie wohnen hier unter Spaniern, mit einer kleinen internationalen Gemeinschaft und viel Natur ringsum.',
      sections: [
        { h: 'Welche Immobilien es gibt', p: [
          'Im Dorf alte Dorfhäuser, oft schmal und hoch, mit Dachterrasse oder Innenhof. An den Hängen ringsum Fincas und Cortijos mit Oliven- und Mandelbäumen und Blick über den Stausee bis zum Meer.',
        ] },
        { h: 'Was eine Immobilie kostet', p: [
          'Im Oktober 2026 lagen die durchschnittlichen Angebotspreise bei rund 1.800 € pro m² (RealAdvisor), etwa die Hälfte von Nerja oder Frigiliana. Rechnen Sie mit rund 10% <a href="/de/ratgeber/kaufnebenkosten-spanien/">Kaufnebenkosten</a> und bei einem alten Dorfhaus mit einem <a href="/de/ratgeber/renovierungskosten-spanien/">Renovierungsbudget</a>.',
        ] },
        { h: 'Versorgung', p: [
          'Im Dorf gibt es ein Consultorio, eine Apotheke, kleine Läden, Bars und eine Grundschule. Für den Großeinkauf, weiterführende Schulen und das Krankenhaus fahren Sie nach Vélez-Málaga, etwa eine halbe Stunde.',
        ] },
        { h: 'Vorsicht bei Fincas', p: [
          'Der größte Teil der Gemeinde liegt im oder am Naturpark. Bauen und Erweitern ist dort streng geregelt, und nicht jedes Haus außerhalb des Dorfes ist vollständig legal. Lassen Sie den Status der Immobilie, den Zufahrtsweg und die Wasserversorgung vor dem Kauf prüfen. Lesen Sie unsere Ratgeber <a href="/de/ratgeber/finca-kaufen-spanien/">Finca kaufen</a> und <a href="/de/ratgeber/afo-legalisierung-andalusien/">AFO und Legalisierung</a>.',
        ] },
        { h: 'Renovieren in Canillas de Aceituno', p: [
          'Die Gassen im alten Dorf sind eng und steil. Große Lkw kommen nicht hinein, Material kommt mit kleineren Fahrzeugen oder von Hand. Alte Häuser haben oft dicke Mauern aus Stein und Lehm, die Feuchtigkeit halten. Lassen Sie eine Immobilie vor dem Kauf <a href="/de/immobiliengutachten/">begutachten</a>.',
        ] },
      ],
    },
    faq: [
      { q: 'Kann man die Maroma von Canillas de Aceituno aus besteigen?', a: 'Ja, die klassische Route zum Gipfel beginnt im Dorf. Rechnen Sie mit einer langen, anstrengenden Tagestour mit vielen Höhenmetern.' },
      { q: 'Was ist der Tag der Morcilla?', a: 'Am letzten Sonntag im April verteilt das Dorf beim Fest der Virgen de la Cabeza Blutwurst. Es ist das größte Fest des Jahres.' },
      { q: 'Wie weit ist Canillas de Aceituno von der Küste entfernt?', a: 'Nach Torre del Mar sind es etwa 45 Minuten mit dem Auto, über den Stausee La Viñuela und Vélez-Málaga.' },
    ],
  },
  sv: {
    title: 'Canillas de Aceituno: bo vid foten av La Maroma',
    description: 'Allt om Canillas de Aceituno: bergsbyn nedanför den högsta toppen i provinsen Málaga, Casa de los Diezmos, Blodkorvens dag, bostadspriser och att köpa i bergen.',
    lead: 'Canillas de Aceituno klamrar sig fast på sidan av Sierra de Tejeda, precis nedanför La Maroma, som med 2 068 meter är provinsen Málagas högsta berg. Det är en äkta bergsby med mudéjarvalv, branta gränder och utsikt ner mot havet.',
    intro: [
      'Canillas de Aceituno ligger i naturparken Sierras de Tejeda, Almijara y Alhama, ovanför <a href="/sv/orter/vinuela/">La Viñuela</a>-sjön och cirka 60 kilometer från Málaga. Ovanför byn reser sig La Maroma, toppen som vandrare från hela regionen bestiger härifrån.',
      'Byn härstammar från morisk tid och har behållit den karaktären väl: smala vita gränder, överbyggda passager och Casa de los Diezmos, ett hus från 1500-talet med ett mudéjartorn som lokalt kallas Casa de la Reina Mora. Kyrkan byggdes där den gamla moskén låg.',
      'Canillas har cirka 1 800 invånare, och en fjärdedel har utländskt medborgarskap. Byarna Rubite och Posada de Granadillo hör också till kommunen.',
    ],
    facts: [
      ['Invånare', 'cirka 1 800 (2025)'],
      ['Utländska invånare', 'cirka en fjärdedel'],
      ['Läge', 'berg, nedanför La Maroma (2 068 m)'],
      ['Málaga', 'cirka 60 km'],
      ['La Viñuela-sjön', 'cirka 10 minuter'],
      ['Prisnivå', 'låg, cirka 1 800 € per m²'],
    ],
    forWhom: 'För vandrare och naturälskare som vill bo i en levande spansk by, med bergen utanför dörren och kusten 45 minuter bort. Vill du ha byliv, titta på ett byhus; vill du ha utrymme, på en finca på sluttningarna.',
    see: {
      title: 'Se och göra i Canillas de Aceituno: La Maroma, mudéjar och blodkorv',
      description: 'Vad du kan göra i Canillas de Aceituno: bestigningen av La Maroma, Casa de los Diezmos, kyrkan Rosario, Cueva de la Fájara och Blodkorvens dag.',
      lead: 'Canillas är startpunkten för den mest kända bergsvandringen i Axarquía, men det finns mycket att se utan att klättra.',
      items: [
        { name: 'La Maroma', text: 'Bestigningen av provinsens högsta topp (2 068 m) börjar i byn. Det är en lång och krävande dagsvandring med mycket stigning. Från toppen ser du en klar dag Sierra Nevada och Afrikas kust. Undvik sommarhettan och ta med gott om vatten.' },
        { name: 'Casa de los Diezmos', text: 'Tiondehuset från 1500-talet, även kallat Casa de la Reina Mora, med ett mudéjartorn med blindvalv. Det är byns mest kända byggnad.' },
        { name: 'Kyrkan Nuestra Señora del Rosario', text: 'En gotisk mudéjarkyrka på platsen där moskén en gång stod.' },
        { name: 'Casa Esgrafiada och borgen', text: 'Ett mudéjarhus med sgraffitodekor på fasaden och, högre upp i byn, resterna av den gamla borgen.' },
        { name: 'Cueva de la Fájara', text: 'En grotta cirka fyra kilometer från byn, med spår av förhistorisk bosättning.' },
      ],
      fiestas: [
        { name: 'Día de la Morcilla', when: 'sista söndagen i april', text: 'byn bjuder på sin blodkorv under festen för Virgen de la Cabeza. Tusentals besökare kommer.' },
        { name: 'Romería de San Isidro', when: 'mitten av maj', text: 'en vallfärd ut på landsbygden med dekorerade vagnar.' },
        { name: 'Feria', when: 'augusti', text: 'byns sommarfest.' },
      ],
    },
    living: {
      title: 'Bo i Canillas de Aceituno: byhus, fincor och priser',
      description: 'Köpa bostad i Canillas de Aceituno? Vilka bostäder som finns, vad de kostar, service i byn och vad du ska tänka på med en finca eller en renovering i bergen.',
      lead: 'Canillas de Aceituno är en av de mest prisvärda bergsbyarna i Axarquía. Du bor bland spanjorer, med en liten internationell gemenskap och natur runt omkring.',
      sections: [
        { h: 'Vilka bostäder som finns', p: [
          'I byn gamla byhus, ofta smala och höga, med takterrass eller patio. På sluttningarna runt omkring fincor och cortijos med oliv- och mandelträd och utsikt över sjön mot havet.',
        ] },
        { h: 'Vad en bostad kostar', p: [
          'I oktober 2026 låg det genomsnittliga utgångspriset kring 1 800 € per m² (RealAdvisor), ungefär hälften av nivån i Nerja eller Frigiliana. Räkna med cirka 10 % i <a href="/sv/guider/kopa-hus-i-spanien-kostnader/">köpkostnader</a> och, för ett gammalt byhus, en <a href="/sv/guider/renovera-hus-i-spanien-kostnad/">renoveringsbudget</a>.',
        ] },
        { h: 'Service', p: [
          'Byn har en consultorio, apotek, små affärer, barer och en grundskola. För storhandling, gymnasium och sjukhus åker du till Vélez-Málaga, ungefär en halvtimme med bil.',
        ] },
        { h: 'Se upp med fincor', p: [
          'Större delen av kommunen ligger i eller intill naturparken. Att bygga och bygga ut där är strikt reglerat, och inte alla hus utanför byn är helt lagliga. Låt kontrollera fastighetens status, tillfartsvägen och vattenförsörjningen innan du köper. Läs våra guider om att <a href="/sv/guider/kopa-finca-i-spanien/">köpa finca</a> och om <a href="/sv/guider/afo-andalusien/">AFO och legalisering</a>.',
        ] },
        { h: 'Renovera i Canillas de Aceituno', p: [
          'Gränderna i den gamla byn är smala och branta. Stora lastbilar kommer inte in, så material levereras med mindre fordon eller bärs in för hand. Gamla hus har ofta tjocka väggar av sten och lera som håller kvar fukt. Låt <a href="/sv/besiktning/">besiktiga</a> huset innan du köper.',
        ] },
      ],
    },
    faq: [
      { q: 'Kan man bestiga La Maroma från Canillas de Aceituno?', a: 'Ja, den klassiska leden till toppen börjar i byn. Räkna med en lång och krävande dagsvandring med mycket stigning.' },
      { q: 'Vad är Blodkorvens dag?', a: 'Den sista söndagen i april bjuder byn på blodkorv (morcilla) under festen för Virgen de la Cabeza. Det är årets mest välbesökta fest.' },
      { q: 'Hur långt är det från Canillas de Aceituno till kusten?', a: 'Till Torre del Mar är det cirka 45 minuter med bil, via La Viñuela-sjön och Vélez-Málaga.' },
    ],
  },
};
export default content;
