import type { PlaceContent } from './types';

// Feitenblad Canillas de Albaida (november 2026)
// - Inwoners: 807 (INE, 1 januari 2025); 274 buitenlandse inwoners in 2022 (34%). 584 in het dorp, de rest verspreid.
// - Oppervlakte 33,2 km²; hoogte circa 600 m; 54 km naar Málaga; circa 2 km van Cómpeta (3 km over de weg). In het natuurpark Tejeda, Almijara y Alhama.
// - Hoogste punt: Albucaz (1.756 m). Buurtschappen: Santa Ana, Los Barreros, Los Llanos, La Hoya Lavá, El Cerrillo, gehucht Fogarate.
// - Monumenten: kerk Nuestra Señora de la Expectación (16e-17e eeuw), Ermita de Santa Ana (16e eeuw), Ermita de San Antón (17e eeuw),
//   Puente Cuestas (middeleeuwse brug op het Camino de las Cuestas). Fábrica de la Luz: recreatiegebied aan de Turvilla, kleine waterkrachtcentrale tot de jaren 1970.
// - Geschiedenis: alquería Albaida; morisken deden mee aan de opstand van 1569 (Peñón de Frigiliana).
// - Fiesta's: San Antón (half januari), Virgen de las Salves (februari, sinds de aardbeving van 1884), San Juan (24 juni, picknick buiten),
//   feria Virgen del Rosario (eerste week augustus), Candelarias (7-8 september, einde druivenoogst).
// - Moscatelwijn. Woningprijzen: circa € 2.050 per m² (RealAdvisor, oktober 2026).
const content: PlaceContent = {
  sources: [
    'https://es.wikipedia.org/wiki/Canillas_de_Albaida',
    'https://realadvisor.es/es/precios-viviendas/municipio-canillas-de-albaida',
  ],
  nl: {
    title: 'Canillas de Albaida: wonen in het buurdorp van Cómpeta',
    description: 'Alles over Canillas de Albaida: wit dorp naast Cómpeta, de Fábrica de la Luz, wandelen in het natuurpark, woningprijzen en kopen in de bergen.',
    lead: 'Canillas de Albaida ligt op een paar kilometer van Cómpeta, maar voelt als een andere wereld: kleiner, stiller en dieper in de bergen. Een derde van de inwoners komt uit het buitenland.',
    intro: [
      'Canillas de Albaida ligt op ongeveer 600 meter hoogte in het natuurpark Sierras de Tejeda, Almijara y Alhama, op twee kilometer hemelsbreed van <a href="/nl/plaatsen/competa/">Cómpeta</a> en ongeveer 54 kilometer van Málaga. Boven het dorp rijzen de bergen tot de Albucaz op, 1.756 meter hoog.',
      'Het dorp is ontstaan als een Moorse boerennederzetting met de naam Albaida. In 1569 sloten de morisken uit het dorp zich aan bij de opstand die bij de Peñón de Frigiliana werd neergeslagen. Het witte dorp met zijn trapstraatjes, kerk en kapellen is daarna nauwelijks gegroeid.',
      'Er wonen ongeveer 800 mensen, van wie een derde een buitenlandse nationaliteit heeft. Een deel woont in het dorp, de rest in buurtschappen en finca’s op de hellingen, zoals Santa Ana en Los Llanos.',
    ],
    facts: [
      ['Inwoners', 'circa 800 (2025)'],
      ['Buitenlandse inwoners', 'circa een derde'],
      ['Ligging', 'bergen, circa 600 m hoog'],
      ['Cómpeta', 'circa 3 km over de weg'],
      ['Málaga', 'circa 54 km'],
      ['Prijsniveau', 'laag tot middel, circa € 2.050 per m²'],
    ],
    forWhom: 'Voor wie de sfeer en de voorzieningen van Cómpeta dichtbij wil hebben, maar zelf liever in een stiller dorp woont. Canillas de Albaida past bij natuurliefhebbers en wandelaars die een dorpshuis of een finca in de bergen zoeken.',
    see: {
      title: 'Zien en doen in Canillas de Albaida: bergwandelingen',
      description: 'Wat te doen in Canillas de Albaida: de Fábrica de la Luz, de Ermita de Santa Ana, de middeleeuwse brug en wandelen in het natuurpark.',
      lead: 'Canillas de Albaida is een dorp om te wandelen: door de straatjes, langs de rivier en de bergen in.',
      items: [
        { name: 'Fábrica de la Luz', text: 'Een recreatiegebied aan de rivier de Turvilla, waar tot in de jaren zeventig een kleine waterkrachtcentrale stond. Er zijn picknickplaatsen en het is het vertrekpunt van wandelingen het natuurpark in.' },
        { name: 'Ermita de Santa Ana', text: 'Een kapel uit de zestiende eeuw aan de rand van het dorp, een van de oudste gebouwen van Canillas.' },
        { name: 'Kerk en Ermita de San Antón', text: 'De dorpskerk Nuestra Señora de la Expectación uit de zestiende en zeventiende eeuw en de zeventiende-eeuwse kapel van San Antón.' },
        { name: 'Puente Cuestas', text: 'Een middeleeuwse brug op het Camino de las Cuestas, een oud pad dat al in de Moorse tijd werd gebruikt.' },
        { name: 'Wandelen naar Cómpeta en de bergen', text: 'Een pad verbindt Canillas met Cómpeta, en vanaf het dorp lopen routes omhoog richting de toppen van de Sierra de Almijara.' },
      ],
      fiestas: [
        { name: 'San Antón', when: 'half januari', text: 'feest van de dierenheilige.' },
        { name: 'Virgen de las Salves', when: 'februari', text: 'herdenking van de gebeden na de aardbeving van 1884.' },
        { name: 'San Juan', when: '24 juni', text: 'het dorp trekt erop uit voor een picknick op het land.' },
        { name: 'Feria Virgen del Rosario', when: 'eerste week van augustus', text: 'het zomerfeest ter ere van de beschermheilige.' },
        { name: 'Candelarias', when: '7 en 8 september', text: 'kaarsen bij de deuren van de boerderijen aan het einde van de druivenoogst.' },
      ],
    },
    living: {
      title: 'Wonen in Canillas de Albaida: woningen en prijzen',
      description: 'Een huis kopen in Canillas de Albaida? Woningen, prijzen, voorzieningen in het dorp en in Cómpeta, en waar u op let bij finca’s in het natuurpark.',
      lead: 'Canillas de Albaida is goedkoper dan Cómpeta, terwijl de winkels en restaurants van Cómpeta op een paar minuten liggen.',
      sections: [
        { h: 'Wat voor woningen er zijn', p: [
          'In het dorp kleine witte dorpshuizen met dakterras, vaak met uitzicht over het dal naar zee. Op de hellingen finca’s en landhuizen met wijnstokken, olijven en amandelbomen, sommige met zwembad.',
        ] },
        { h: 'Wat een woning kost', p: [
          'In oktober 2026 lag de gemiddelde vraagprijs rond de € 2.050 per m² (RealAdvisor). Dat is lager dan in Cómpeta. Reken op ongeveer 10% <a href="/nl/gidsen/kosten-koper-spanje/">kosten koper</a> en, bij een oud dorpshuis, een <a href="/nl/gidsen/kosten-huis-renoveren-spanje/">verbouwbudget</a>.',
        ] },
        { h: 'Voorzieningen', p: [
          'Het dorp zelf heeft weinig: een consultorio, een paar bars en een kleine winkel. Voor de dagelijkse boodschappen, restaurants en de apotheek gaan de meeste bewoners naar Cómpeta, een paar minuten rijden. Voor het ziekenhuis gaat u naar Vélez-Málaga.',
        ] },
        { h: 'Let op bij finca’s', p: [
          'De gemeente ligt grotendeels in het natuurpark. Nieuwbouw en uitbreiding zijn daar sterk beperkt, en niet elke finca is volledig legaal. Laat de status, de toegangsweg en de watervoorziening vóór aankoop controleren. Lees onze gidsen over <a href="/nl/gidsen/finca-kopen-in-spanje/">finca kopen</a> en <a href="/nl/gidsen/afo-legaliseren-andalusie/">AFO en legaliseren</a>.',
        ] },
        { h: 'Verbouwen in Canillas de Albaida', p: [
          'De straatjes in het dorp zijn smal en steil, dus materiaal gaat met kleine wagens of met de hand naar binnen. Oude huizen hebben vaak vocht in de muren en daken die aan vervanging toe zijn. Laat een woning vóór aankoop <a href="/nl/aankoopkeuring/">keuren</a>.',
        ] },
      ],
    },
    faq: [
      { q: 'Hoe ver is Canillas de Albaida van Cómpeta?', a: 'Ongeveer drie kilometer over de weg, een paar minuten rijden. Er loopt ook een wandelpad tussen de twee dorpen.' },
      { q: 'Is Canillas de Albaida goedkoper dan Cómpeta?', a: 'Ja, de gemiddelde vraagprijs ligt lager, terwijl u de voorzieningen van Cómpeta om de hoek hebt.' },
      { q: 'Wat is de Fábrica de la Luz?', a: 'Een recreatiegebied aan de rivier de Turvilla, op de plek van een oude waterkrachtcentrale, met picknickplaatsen en wandelpaden.' },
    ],
  },
  en: {
    title: 'Canillas de Albaida: living in Cómpeta’s quiet neighbour',
    description: 'All about Canillas de Albaida: white village next to Cómpeta, the Fábrica de la Luz, walking in the natural park, property prices and buying.',
    lead: 'Canillas de Albaida is a few kilometres from Cómpeta, but feels like another world: smaller, quieter and deeper in the mountains. A third of its residents come from abroad.',
    intro: [
      'Canillas de Albaida lies at about 600 metres in the Sierras de Tejeda, Almijara y Alhama natural park, two kilometres as the crow flies from <a href="/en/places/competa/">Cómpeta</a> and about 54 kilometres from Málaga. Above the village the mountains rise to the Albucaz, 1,756 metres high.',
      'The village began as a Moorish farming settlement called Albaida. In 1569 its Moriscos joined the uprising that was crushed at the Peñón de Frigiliana. The white village of stepped lanes, church and chapels has barely grown since.',
      'About 800 people live here, a third of them foreign nationals. Some live in the village, the rest in hamlets and fincas on the slopes, such as Santa Ana and Los Llanos.',
    ],
    facts: [
      ['Population', 'about 800 (2025)'],
      ['Foreign residents', 'about a third'],
      ['Setting', 'mountains, about 600 m up'],
      ['Cómpeta', 'about 3 km by road'],
      ['Málaga', 'about 54 km'],
      ['Price level', 'low to mid, about €2,050 per m²'],
    ],
    forWhom: 'People who want Cómpeta’s atmosphere and facilities close by but would rather live in a quieter village themselves. Canillas de Albaida suits nature lovers and walkers looking for a village house or a finca in the mountains.',
    see: {
      title: 'Things to do in Canillas de Albaida: mountain walks',
      description: 'What to do in Canillas de Albaida: the Fábrica de la Luz, the Ermita de Santa Ana, the medieval bridge and walking in the natural park.',
      lead: 'Canillas de Albaida is a village for walking: through the lanes, along the river and up into the mountains.',
      items: [
        { name: 'Fábrica de la Luz', text: 'A recreation area on the Turvilla river, where a small hydroelectric plant stood until the 1970s. There are picnic spots and it is the starting point for walks into the natural park.' },
        { name: 'Ermita de Santa Ana', text: 'A sixteenth-century chapel on the edge of the village, one of the oldest buildings in Canillas.' },
        { name: 'Church and Ermita de San Antón', text: 'The village church of Nuestra Señora de la Expectación from the sixteenth and seventeenth centuries, and the seventeenth-century chapel of San Antón.' },
        { name: 'Puente Cuestas', text: 'A medieval bridge on the Camino de las Cuestas, an old path already in use in Moorish times.' },
        { name: 'Walking to Cómpeta and the mountains', text: 'A path links Canillas with Cómpeta, and routes climb from the village towards the peaks of the Sierra de Almijara.' },
      ],
      fiestas: [
        { name: 'San Antón', when: 'mid-January', text: 'feast of the patron saint of animals.' },
        { name: 'Virgen de las Salves', when: 'February', text: 'commemorating the prayers after the 1884 earthquake.' },
        { name: 'San Juan', when: '24 June', text: 'the village heads out for a picnic in the countryside.' },
        { name: 'Feria Virgen del Rosario', when: 'first week of August', text: 'the summer fiesta in honour of the patron saint.' },
        { name: 'Candelarias', when: '7 and 8 September', text: 'candles at farmhouse doors to mark the end of the grape harvest.' },
      ],
    },
    living: {
      title: 'Living in Canillas de Albaida: homes and prices',
      description: 'Buying a home in Canillas de Albaida? Types of property, prices, facilities in the village and Cómpeta, and what to watch for with fincas.',
      lead: 'Canillas de Albaida is cheaper than Cómpeta, while Cómpeta’s shops and restaurants are a few minutes away.',
      sections: [
        { h: 'Types of property', p: [
          'In the village, small white village houses with roof terraces, often looking across the valley to the sea. On the slopes, fincas and country houses with vines, olives and almond trees, some with a pool.',
        ] },
        { h: 'What a home costs', p: [
          'In October 2026 average asking prices were around €2,050 per m² (RealAdvisor), lower than in Cómpeta. Allow around 10% for <a href="/en/guides/buying-costs-in-spain/">buying costs</a> and, for an old village house, a <a href="/en/guides/renovation-costs-spain/">renovation budget</a>.',
        ] },
        { h: 'Facilities', p: [
          'The village itself has little: a consultorio, a few bars and a small shop. For daily shopping, restaurants and the pharmacy most residents go to Cómpeta, a few minutes’ drive. For the hospital you go to Vélez-Málaga.',
        ] },
        { h: 'Watch out with fincas', p: [
          'Most of the municipality lies in the natural park. New building and extensions are heavily restricted there, and not every finca is fully legal. Have the status, the access track and the water supply checked before you buy. Read our guides to <a href="/en/guides/buying-a-finca-in-spain/">buying a finca</a> and <a href="/en/guides/afo-legalisation-andalusia/">AFO and legalisation</a>.',
        ] },
        { h: 'Renovating in Canillas de Albaida', p: [
          'The village lanes are narrow and steep, so materials go in on small carts or by hand. Old houses often have damp walls and roofs that need replacing. Have a property <a href="/en/property-survey/">surveyed</a> before you buy.',
        ] },
      ],
    },
    faq: [
      { q: 'How far is Canillas de Albaida from Cómpeta?', a: 'About three kilometres by road, a few minutes’ drive. There is also a footpath between the two villages.' },
      { q: 'Is Canillas de Albaida cheaper than Cómpeta?', a: 'Yes, average asking prices are lower, while Cómpeta’s facilities are around the corner.' },
      { q: 'What is the Fábrica de la Luz?', a: 'A recreation area on the Turvilla river, on the site of an old hydroelectric plant, with picnic spots and footpaths.' },
    ],
  },
  de: {
    title: 'Canillas de Albaida: Wohnen im Nachbardorf von Cómpeta',
    description: 'Alles über Canillas de Albaida: weißes Dorf neben Cómpeta, Fábrica de la Luz, Wandern im Naturpark, Immobilienpreise und Kaufen in den Bergen.',
    lead: 'Canillas de Albaida liegt nur wenige Kilometer von Cómpeta entfernt, fühlt sich aber wie eine andere Welt an: kleiner, stiller und tiefer in den Bergen. Ein Drittel der Einwohner kommt aus dem Ausland.',
    intro: [
      'Canillas de Albaida liegt auf etwa 600 Metern im Naturpark Sierras de Tejeda, Almijara y Alhama, zwei Kilometer Luftlinie von <a href="/de/orte/competa/">Cómpeta</a> und etwa 54 Kilometer von Málaga entfernt. Über dem Dorf steigen die Berge bis zum Albucaz auf, 1.756 Meter hoch.',
      'Das Dorf entstand als maurische Bauernsiedlung namens Albaida. 1569 schlossen sich die Morisken des Dorfes dem Aufstand an, der am Peñón de Frigiliana niedergeschlagen wurde. Das weiße Dorf mit seinen Treppengassen, Kirche und Kapellen ist seitdem kaum gewachsen.',
      'Hier leben rund 800 Menschen, ein Drittel davon mit ausländischer Staatsangehörigkeit. Ein Teil wohnt im Dorf, der Rest in Weilern und Fincas an den Hängen, etwa in Santa Ana und Los Llanos.',
    ],
    facts: [
      ['Einwohner', 'rund 800 (2025)'],
      ['Ausländische Einwohner', 'etwa ein Drittel'],
      ['Lage', 'Berge, etwa 600 m hoch'],
      ['Cómpeta', 'etwa 3 km über die Straße'],
      ['Málaga', 'etwa 54 km'],
      ['Preisniveau', 'niedrig bis mittel, rund 2.050 € pro m²'],
    ],
    forWhom: 'Für alle, die die Atmosphäre und die Einrichtungen von Cómpeta in der Nähe haben, selbst aber lieber in einem stilleren Dorf wohnen möchten. Canillas de Albaida passt zu Naturfreunden und Wanderern, die ein Dorfhaus oder eine Finca in den Bergen suchen.',
    see: {
      title: 'Canillas de Albaida: Fábrica de la Luz und Bergpfade',
      description: 'Was man in Canillas de Albaida unternehmen kann: Fábrica de la Luz, Ermita de Santa Ana, die mittelalterliche Brücke und Wandern im Naturpark.',
      lead: 'Canillas de Albaida ist ein Dorf zum Wandern: durch die Gassen, am Fluss entlang und hinauf in die Berge.',
      items: [
        { name: 'Fábrica de la Luz', text: 'Ein Erholungsgebiet am Fluss Turvilla, wo bis in die 1970er-Jahre ein kleines Wasserkraftwerk stand. Es gibt Picknickplätze, und hier beginnen Wanderungen in den Naturpark.' },
        { name: 'Ermita de Santa Ana', text: 'Eine Kapelle aus dem 16. Jahrhundert am Dorfrand, eines der ältesten Gebäude von Canillas.' },
        { name: 'Kirche und Ermita de San Antón', text: 'Die Dorfkirche Nuestra Señora de la Expectación aus dem 16. und 17. Jahrhundert und die Kapelle San Antón aus dem 17. Jahrhundert.' },
        { name: 'Puente Cuestas', text: 'Eine mittelalterliche Brücke am Camino de las Cuestas, einem alten Weg, der schon in maurischer Zeit genutzt wurde.' },
        { name: 'Wandern nach Cómpeta und in die Berge', text: 'Ein Pfad verbindet Canillas mit Cómpeta, und vom Dorf führen Routen hinauf zu den Gipfeln der Sierra de Almijara.' },
      ],
      fiestas: [
        { name: 'San Antón', when: 'Mitte Januar', text: 'Fest des Schutzheiligen der Tiere.' },
        { name: 'Virgen de las Salves', when: 'Februar', text: 'Gedenken an die Gebete nach dem Erdbeben von 1884.' },
        { name: 'San Juan', when: '24. Juni', text: 'das Dorf zieht zum Picknick aufs Land.' },
        { name: 'Feria Virgen del Rosario', when: 'erste Augustwoche', text: 'das Sommerfest zu Ehren der Schutzpatronin.' },
        { name: 'Candelarias', when: '7. und 8. September', text: 'Kerzen an den Türen der Höfe zum Ende der Weinlese.' },
      ],
    },
    living: {
      title: 'Wohnen in Canillas de Albaida: Dorfhäuser, Fincas und Preise',
      description: 'Haus in Canillas de Albaida kaufen? Welche Immobilien es gibt, was sie kosten, die Versorgung und worauf Sie bei Fincas im Naturpark achten sollten.',
      lead: 'Canillas de Albaida ist günstiger als Cómpeta, während die Geschäfte und Restaurants von Cómpeta nur wenige Minuten entfernt sind.',
      sections: [
        { h: 'Welche Immobilien es gibt', p: [
          'Im Dorf kleine weiße Dorfhäuser mit Dachterrasse, oft mit Blick über das Tal bis zum Meer. An den Hängen Fincas und Landhäuser mit Reben, Oliven und Mandelbäumen, manche mit Pool.',
        ] },
        { h: 'Was eine Immobilie kostet', p: [
          'Im Oktober 2026 lagen die durchschnittlichen Angebotspreise bei rund 2.050 € pro m² (RealAdvisor), niedriger als in Cómpeta. Rechnen Sie mit rund 10% <a href="/de/ratgeber/kaufnebenkosten-spanien/">Kaufnebenkosten</a> und bei einem alten Dorfhaus mit einem <a href="/de/ratgeber/renovierungskosten-spanien/">Renovierungsbudget</a>.',
        ] },
        { h: 'Versorgung', p: [
          'Das Dorf selbst hat wenig: ein Consultorio, einige Bars und einen kleinen Laden. Für den täglichen Einkauf, Restaurants und die Apotheke fahren die meisten Bewohner nach Cómpeta, wenige Minuten entfernt. Ins Krankenhaus fahren Sie nach Vélez-Málaga.',
        ] },
        { h: 'Vorsicht bei Fincas', p: [
          'Die Gemeinde liegt größtenteils im Naturpark. Neubau und Erweiterungen sind dort stark eingeschränkt, und nicht jede Finca ist vollständig legal. Lassen Sie Status, Zufahrtsweg und Wasserversorgung vor dem Kauf prüfen. Lesen Sie unsere Ratgeber <a href="/de/ratgeber/finca-kaufen-spanien/">Finca kaufen</a> und <a href="/de/ratgeber/afo-legalisierung-andalusien/">AFO und Legalisierung</a>.',
        ] },
        { h: 'Renovieren in Canillas de Albaida', p: [
          'Die Gassen im Dorf sind eng und steil, Material kommt mit kleinen Karren oder von Hand ins Haus. Alte Häuser haben oft feuchte Mauern und Dächer, die erneuert werden müssen. Lassen Sie eine Immobilie vor dem Kauf <a href="/de/immobiliengutachten/">begutachten</a>.',
        ] },
      ],
    },
    faq: [
      { q: 'Wie weit ist Canillas de Albaida von Cómpeta entfernt?', a: 'Etwa drei Kilometer über die Straße, wenige Minuten mit dem Auto. Es gibt auch einen Wanderweg zwischen den beiden Dörfern.' },
      { q: 'Ist Canillas de Albaida günstiger als Cómpeta?', a: 'Ja, die durchschnittlichen Angebotspreise sind niedriger, während die Einrichtungen von Cómpeta um die Ecke liegen.' },
      { q: 'Was ist die Fábrica de la Luz?', a: 'Ein Erholungsgebiet am Fluss Turvilla, an der Stelle eines alten Wasserkraftwerks, mit Picknickplätzen und Wanderwegen.' },
    ],
  },
  sv: {
    title: 'Canillas de Albaida: bo i Cómpetas lugna granne',
    description: 'Allt om Canillas de Albaida: den lilla vita byn bredvid Cómpeta, Fábrica de la Luz, vandring i naturparken, bostadspriser och att köpa och renovera i bergen.',
    lead: 'Canillas de Albaida ligger några kilometer från Cómpeta, men känns som en annan värld: mindre, lugnare och djupare in i bergen. En tredjedel av invånarna kommer från utlandet.',
    intro: [
      'Canillas de Albaida ligger på cirka 600 meters höjd i naturparken Sierras de Tejeda, Almijara y Alhama, två kilometer fågelvägen från <a href="/sv/orter/competa/">Cómpeta</a> och cirka 54 kilometer från Málaga. Ovanför byn reser sig bergen till Albucaz, 1 756 meter högt.',
      'Byn började som en morisk jordbruksbosättning som hette Albaida. År 1569 anslöt sig dess morisker till upproret som slogs ned vid Peñón de Frigiliana. Den vita byn med trappgränder, kyrka och kapell har knappt vuxit sedan dess.',
      'Här bor cirka 800 personer, och en tredjedel har utländskt medborgarskap. En del bor i byn, resten i småbyar och på fincor på sluttningarna, som Santa Ana och Los Llanos.',
    ],
    facts: [
      ['Invånare', 'cirka 800 (2025)'],
      ['Utländska invånare', 'cirka en tredjedel'],
      ['Läge', 'berg, cirka 600 m'],
      ['Cómpeta', 'cirka 3 km längs vägen'],
      ['Málaga', 'cirka 54 km'],
      ['Prisnivå', 'låg till medel, cirka 2 050 € per m²'],
    ],
    forWhom: 'För dig som vill ha Cómpetas atmosfär och service nära men själv hellre bor i en lugnare by. Canillas de Albaida passar naturälskare och vandrare som söker ett byhus eller en finca i bergen.',
    see: {
      title: 'Se och göra i Canillas de Albaida: bergsvandring',
      description: 'Vad du kan göra i Canillas de Albaida: Fábrica de la Luz, Ermita de Santa Ana, den medeltida bron och vandring i naturparken.',
      lead: 'Canillas de Albaida är en by för att vandra: genom gränderna, längs floden och upp i bergen.',
      items: [
        { name: 'Fábrica de la Luz', text: 'Ett rekreationsområde vid floden Turvilla, där ett litet vattenkraftverk låg fram till 1970-talet. Här finns picknickplatser och startpunkten för vandringar in i naturparken.' },
        { name: 'Ermita de Santa Ana', text: 'Ett kapell från 1500-talet i utkanten av byn, en av de äldsta byggnaderna i Canillas.' },
        { name: 'Kyrkan och Ermita de San Antón', text: 'Byns kyrka Nuestra Señora de la Expectación från 1500- och 1600-talen, och kapellet San Antón från 1600-talet.' },
        { name: 'Puente Cuestas', text: 'En medeltida bro på Camino de las Cuestas, en gammal stig som användes redan under morisk tid.' },
        { name: 'Vandra till Cómpeta och bergen', text: 'En stig förbinder Canillas med Cómpeta, och leder går från byn upp mot topparna i Sierra de Almijara.' },
      ],
      fiestas: [
        { name: 'San Antón', when: 'mitten av januari', text: 'festen för djurens skyddshelgon.' },
        { name: 'Virgen de las Salves', when: 'februari', text: 'till minne av bönerna efter jordbävningen 1884.' },
        { name: 'San Juan', when: '24 juni', text: 'byn beger sig ut på picknick på landet.' },
        { name: 'Feria Virgen del Rosario', when: 'första veckan i augusti', text: 'sommarfesten till ära för skyddshelgonet.' },
        { name: 'Candelarias', when: '7 och 8 september', text: 'ljus vid gårdarnas dörrar för att markera slutet på vinskörden.' },
      ],
    },
    living: {
      title: 'Bo i Canillas de Albaida: byhus, fincor och priser',
      description: 'Köpa bostad i Canillas de Albaida? Vilka bostäder som finns, vad de kostar, service i byn och i Cómpeta, och vad du ska tänka på med fincor i naturparken.',
      lead: 'Canillas de Albaida är billigare än Cómpeta, samtidigt som Cómpetas affärer och restauranger ligger några minuter bort.',
      sections: [
        { h: 'Vilka bostäder som finns', p: [
          'I byn små vita byhus med takterrass, ofta med utsikt över dalen mot havet. På sluttningarna fincor och lanthus med vinrankor, oliv- och mandelträd, en del med pool.',
        ] },
        { h: 'Vad en bostad kostar', p: [
          'I oktober 2026 låg det genomsnittliga utgångspriset kring 2 050 € per m² (RealAdvisor), lägre än i Cómpeta. Räkna med cirka 10 % i <a href="/sv/guider/kopa-hus-i-spanien-kostnader/">köpkostnader</a> och, för ett gammalt byhus, en <a href="/sv/guider/renovera-hus-i-spanien-kostnad/">renoveringsbudget</a>.',
        ] },
        { h: 'Service', p: [
          'Själva byn har inte mycket: en consultorio, några barer och en liten affär. För vardagsinköp, restauranger och apotek åker de flesta invånare till Cómpeta, några minuter med bil. Till sjukhuset åker du till Vélez-Málaga.',
        ] },
        { h: 'Se upp med fincor', p: [
          'Större delen av kommunen ligger i naturparken. Nybyggen och tillbyggnader är kraftigt begränsade där, och inte alla fincor är helt lagliga. Låt kontrollera status, tillfartsväg och vattenförsörjning innan du köper. Läs våra guider om att <a href="/sv/guider/kopa-finca-i-spanien/">köpa finca</a> och om <a href="/sv/guider/afo-andalusien/">AFO och legalisering</a>.',
        ] },
        { h: 'Renovera i Canillas de Albaida', p: [
          'Byns gränder är smala och branta, så material körs in på små kärror eller bärs för hand. Gamla hus har ofta fuktiga väggar och tak som behöver bytas. Låt <a href="/sv/besiktning/">besiktiga</a> huset innan du köper.',
        ] },
      ],
    },
    faq: [
      { q: 'Hur långt är det från Canillas de Albaida till Cómpeta?', a: 'Cirka tre kilometer längs vägen, några minuter med bil. Det finns också en gångstig mellan byarna.' },
      { q: 'Är Canillas de Albaida billigare än Cómpeta?', a: 'Ja, de genomsnittliga utgångspriserna är lägre, samtidigt som Cómpetas service finns runt hörnet.' },
      { q: 'Vad är Fábrica de la Luz?', a: 'Ett rekreationsområde vid floden Turvilla, där ett gammalt vattenkraftverk låg, med picknickplatser och vandringsleder.' },
    ],
  },
};
export default content;
