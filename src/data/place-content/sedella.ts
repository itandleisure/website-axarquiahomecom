import type { PlaceContent } from './types';

// Feitenblad Sedella (november 2026)
// - Inwoners: 607 (INE, 1 januari 2025); 207 buitenlandse inwoners in 2022 (35%).
// - Oppervlakte 31,6 km²; hoogte 646 m; 61 km naar Málaga. Aan de voet van de Sierra de Tejeda, tussen Canillas de Aceituno en Salares.
// - Monumenten: Casa Torreón (huis met mudéjartoren), kerk San Andrés (toren 16e eeuw), Ermita de la Virgen de la Esperanza (met resten van een Arabisch kasteel),
//   openbare wasplaatsen, klein stenen bruggetje (mogelijk Romeins).
// - Fiesta's: San Antón (weekend rond 17 januari), Semana Santa (ratels in plaats van klokken), Corpus Christi (altaren in de straten),
//   feria Virgen de la Esperanza Coronada (eerste weekend van augustus).
// - Keuken: migas, chivo al ajillo, roscos tontos.
// - Woningprijzen: circa € 1.800 per m² (RealAdvisor, oktober 2026).
// Golf B zonder aparte pagina Zien en doen; bezienswaardigheden staan in het overzicht.
const content: PlaceContent = {
  sources: [
    'https://es.wikipedia.org/wiki/Sedella',
    'https://realadvisor.es/es/precios-viviendas/municipio-sedella',
  ],
  nl: {
    title: 'Sedella: wonen in een stil bergdorp onder de Maroma',
    description: 'Alles over Sedella: het kleine witte bergdorp onder de Sierra de Tejeda, de Casa Torreón, de internationale gemeenschap, woningprijzen en kopen en verbouwen op 650 meter.',
    lead: 'Sedella ligt op 650 meter tegen de Sierra de Tejeda, met de top van La Maroma erboven en de Axarquía aan zijn voeten. Een klein, verzorgd dorp waar een derde van de inwoners uit het buitenland komt.',
    intro: [
      'Sedella ligt in het natuurpark Sierras de Tejeda, Almijara y Alhama, tussen <a href="/nl/plaatsen/canillas-de-aceituno/">Canillas de Aceituno</a> en Salares, ongeveer 61 kilometer van Málaga. Vanaf het dorp kijkt u over de heuvels van de Axarquía tot aan zee.',
      'Het dorp is klein en wit, met steile straatjes en twee opvallende torens: die van de kerk San Andrés uit de zestiende eeuw en die van de Casa Torreón, een oud woonhuis met een mudéjartoren. Bij de kapel van de Virgen de la Esperanza zijn nog resten van een Moors kasteel te zien, en onderaan het dorp liggen de oude wasplaatsen en een stenen bruggetje dat mogelijk uit de Romeinse tijd stamt.',
      'Sedella telt ongeveer 600 inwoners, van wie een derde een buitenlandse nationaliteit heeft. Het dorp is bekend om zijn tradities: in de Goede Week zwijgen de klokken en gaan er houten ratels rond, en met Corpus Christi bouwen de bewoners altaren in de straten.',
    ],
    facts: [
      ['Inwoners', 'circa 600 (2025)'],
      ['Buitenlandse inwoners', 'circa een derde'],
      ['Ligging', 'bergen, 646 m hoog'],
      ['Málaga', 'circa 61 km'],
      ['Buurdorpen', 'Canillas de Aceituno, Salares'],
      ['Prijsniveau', 'laag, circa € 1.800 per m²'],
    ],
    forWhom: 'Voor wie stilte, berglucht en wandelpaden vanaf de voordeur zoekt en geen voorzieningen om de hoek nodig heeft. Sedella past bij mensen die een dorpshuis of een finca in de bergen willen en een kleine, hechte gemeenschap waarderen.',
    living: {
      title: 'Wonen in Sedella: dorpshuizen, finca’s en prijzen',
      description: 'Een huis kopen in Sedella? Welke woningen er zijn, wat ze kosten, waar u de voorzieningen vindt en waar u op let bij finca’s en verbouwen in het natuurpark.',
      lead: 'Sedella is betaalbaar en mooi gelegen, maar ver van alles. Wie hier koopt, kiest bewust voor het bergleven.',
      sections: [
        { h: 'Wat voor woningen er zijn', p: [
          'In het dorp dorpshuizen op meerdere verdiepingen, vaak met dakterras en uitzicht. Op de hellingen eromheen finca’s en landhuizen met olijf- en amandelbomen.',
        ] },
        { h: 'Wat een woning kost', p: [
          'In oktober 2026 lag de gemiddelde vraagprijs rond de € 1.800 per m² (RealAdvisor), ongeveer de helft van de kust. Reken op ongeveer 10% <a href="/nl/gidsen/kosten-koper-spanje/">kosten koper</a> en, bij een oud huis, een <a href="/nl/gidsen/kosten-huis-renoveren-spanje/">verbouwbudget</a>.',
        ] },
        { h: 'Voorzieningen', p: [
          'Sedella heeft weinig voorzieningen: een paar bars en een kleine winkel. Voor boodschappen en de huisarts gaat u naar Canillas de Aceituno of naar de dorpen rond het stuwmeer van La Viñuela, voor het ziekenhuis naar Vélez-Málaga. Een auto is onmisbaar.',
        ] },
        { h: 'Let op bij finca’s', p: [
          'De gemeente ligt grotendeels in het natuurpark. Bouwen en uitbreiden zijn daar streng geregeld. Laat de legale status, de toegangsweg en de watervoorziening vóór aankoop controleren. Lees onze gidsen over <a href="/nl/gidsen/finca-kopen-in-spanje/">finca kopen</a> en <a href="/nl/gidsen/afo-legaliseren-andalusie/">AFO en legaliseren</a>.',
        ] },
        { h: 'Verbouwen in Sedella', p: [
          'Op 650 meter zijn de winters koel en kan het flink regenen. Een goed dak, isolatie en verwarming zijn bij een renovatie belangrijk. De straatjes zijn smal en steil, wat het aanvoeren van materiaal lastiger maakt. Laat een woning vóór aankoop <a href="/nl/aankoopkeuring/">keuren</a>.',
        ] },
      ],
    },
    faq: [
      { q: 'Wat is er te zien in Sedella?', a: 'De Casa Torreón met zijn mudéjartoren, de kerk San Andrés, de resten van het Moorse kasteel bij de kapel van de Virgen de la Esperanza en de oude wasplaatsen. Daarnaast is het een goed vertrekpunt voor wandelingen in de Sierra de Tejeda.' },
      { q: 'Wonen er buitenlanders in Sedella?', a: 'Ja, in 2022 had ongeveer een derde van de inwoners een buitenlandse nationaliteit.' },
      { q: 'Wanneer is het dorpsfeest van Sedella?', a: 'Op het eerste weekend van augustus, ter ere van de Virgen de la Esperanza.' },
    ],
  },
  en: {
    title: 'Sedella: living in a quiet mountain village below La Maroma',
    description: 'All about Sedella: the small white mountain village below the Sierra de Tejeda, the Casa Torreón, its international community, property prices and buying and renovating at 650 metres.',
    lead: 'Sedella sits at 650 metres against the Sierra de Tejeda, with the summit of La Maroma above it and the Axarquía at its feet. A small, well-kept village where a third of the residents come from abroad.',
    intro: [
      'Sedella lies in the Sierras de Tejeda, Almijara y Alhama natural park, between <a href="/en/places/canillas-de-aceituno/">Canillas de Aceituno</a> and Salares, about 61 kilometres from Málaga. From the village you look across the hills of the Axarquía to the sea.',
      'The village is small and white, with steep lanes and two striking towers: that of the sixteenth-century San Andrés church and that of the Casa Torreón, an old house with a Mudéjar tower. By the chapel of the Virgen de la Esperanza are remains of a Moorish castle, and at the bottom of the village are the old washhouses and a stone bridge that may date from Roman times.',
      'Sedella has about 600 residents, a third of them foreign nationals. The village is known for its traditions: in Holy Week the bells fall silent and wooden rattles go round instead, and at Corpus Christi residents build altars in the streets.',
    ],
    facts: [
      ['Population', 'about 600 (2025)'],
      ['Foreign residents', 'about a third'],
      ['Setting', 'mountains, 646 m up'],
      ['Málaga', 'about 61 km'],
      ['Neighbouring villages', 'Canillas de Aceituno, Salares'],
      ['Price level', 'low, about €1,800 per m²'],
    ],
    forWhom: 'People looking for silence, mountain air and walking trails from the front door, who do not need facilities around the corner. Sedella suits those who want a village house or a finca in the mountains and value a small, close-knit community.',
    living: {
      title: 'Living in Sedella: village houses, fincas and prices',
      description: 'Buying a home in Sedella? The types of property, what they cost, where to find facilities and what to watch for with fincas and renovation in the natural park.',
      lead: 'Sedella is affordable and beautifully set, but far from everything. Those who buy here deliberately choose mountain life.',
      sections: [
        { h: 'Types of property', p: [
          'In the village, village houses on several floors, often with a roof terrace and a view. On the slopes around it, fincas and country houses with olive and almond trees.',
        ] },
        { h: 'What a home costs', p: [
          'In October 2026 average asking prices were around €1,800 per m² (RealAdvisor), about half the coastal level. Allow around 10% for <a href="/en/guides/buying-costs-in-spain/">buying costs</a> and, for an old house, a <a href="/en/guides/renovation-costs-spain/">renovation budget</a>.',
        ] },
        { h: 'Facilities', p: [
          'Sedella has few facilities: a couple of bars and a small shop. For shopping and the doctor you go to Canillas de Aceituno or the villages around La Viñuela reservoir, and to Vélez-Málaga for the hospital. A car is essential.',
        ] },
        { h: 'Watch out with fincas', p: [
          'Most of the municipality lies in the natural park, where building and extending are strictly regulated. Have the legal status, the access track and the water supply checked before you buy. Read our guides to <a href="/en/guides/buying-a-finca-in-spain/">buying a finca</a> and <a href="/en/guides/afo-legalisation-andalusia/">AFO and legalisation</a>.',
        ] },
        { h: 'Renovating in Sedella', p: [
          'At 650 metres winters are cool and it can rain heavily. A sound roof, insulation and heating matter in a renovation. The lanes are narrow and steep, which makes getting materials in harder. Have a property <a href="/en/property-survey/">surveyed</a> before you buy.',
        ] },
      ],
    },
    faq: [
      { q: 'What is there to see in Sedella?', a: 'The Casa Torreón with its Mudéjar tower, San Andrés church, the remains of the Moorish castle by the chapel of the Virgen de la Esperanza and the old washhouses. It is also a good starting point for walks in the Sierra de Tejeda.' },
      { q: 'Do foreigners live in Sedella?', a: 'Yes, in 2022 about a third of residents were foreign nationals.' },
      { q: 'When is Sedella’s village fiesta?', a: 'On the first weekend of August, in honour of the Virgen de la Esperanza.' },
    ],
  },
  de: {
    title: 'Sedella: Wohnen in einem stillen Bergdorf unter der Maroma',
    description: 'Alles über Sedella: das kleine weiße Bergdorf unter der Sierra de Tejeda, die Casa Torreón, die internationale Gemeinschaft, Immobilienpreise sowie Kauf und Renovierung auf 650 Metern.',
    lead: 'Sedella liegt auf 650 Metern an der Sierra de Tejeda, mit dem Gipfel der Maroma darüber und der Axarquía zu seinen Füßen. Ein kleines, gepflegtes Dorf, in dem ein Drittel der Einwohner aus dem Ausland kommt.',
    intro: [
      'Sedella liegt im Naturpark Sierras de Tejeda, Almijara y Alhama, zwischen <a href="/de/orte/canillas-de-aceituno/">Canillas de Aceituno</a> und Salares, etwa 61 Kilometer von Málaga entfernt. Vom Dorf blicken Sie über die Hügel der Axarquía bis zum Meer.',
      'Das Dorf ist klein und weiß, mit steilen Gassen und zwei auffälligen Türmen: dem der Kirche San Andrés aus dem 16. Jahrhundert und dem der Casa Torreón, eines alten Wohnhauses mit Mudéjar-Turm. An der Kapelle der Virgen de la Esperanza sind noch Reste einer maurischen Burg zu sehen, und unten im Dorf liegen die alten Waschplätze und eine kleine Steinbrücke, die möglicherweise aus römischer Zeit stammt.',
      'Sedella hat rund 600 Einwohner, ein Drittel davon mit ausländischer Staatsangehörigkeit. Das Dorf ist bekannt für seine Traditionen: In der Karwoche schweigen die Glocken und hölzerne Ratschen gehen herum, und an Fronleichnam bauen die Bewohner Altäre in den Gassen.',
    ],
    facts: [
      ['Einwohner', 'rund 600 (2025)'],
      ['Ausländische Einwohner', 'etwa ein Drittel'],
      ['Lage', 'Berge, 646 m hoch'],
      ['Málaga', 'etwa 61 km'],
      ['Nachbardörfer', 'Canillas de Aceituno, Salares'],
      ['Preisniveau', 'niedrig, rund 1.800 € pro m²'],
    ],
    forWhom: 'Für alle, die Stille, Bergluft und Wanderwege ab der Haustür suchen und keine Einrichtungen um die Ecke brauchen. Sedella passt zu Menschen, die ein Dorfhaus oder eine Finca in den Bergen möchten und eine kleine, enge Gemeinschaft schätzen.',
    living: {
      title: 'Wohnen in Sedella: Dorfhäuser, Fincas und Preise',
      description: 'Ein Haus in Sedella kaufen? Welche Immobilien es gibt, was sie kosten, wo Sie die Versorgung finden und worauf Sie bei Fincas und Renovierungen im Naturpark achten sollten.',
      lead: 'Sedella ist bezahlbar und schön gelegen, aber weit weg von allem. Wer hier kauft, entscheidet sich bewusst für das Bergleben.',
      sections: [
        { h: 'Welche Immobilien es gibt', p: [
          'Im Dorf Dorfhäuser über mehrere Etagen, oft mit Dachterrasse und Aussicht. An den Hängen ringsum Fincas und Landhäuser mit Oliven- und Mandelbäumen.',
        ] },
        { h: 'Was eine Immobilie kostet', p: [
          'Im Oktober 2026 lagen die durchschnittlichen Angebotspreise bei rund 1.800 € pro m² (RealAdvisor), etwa die Hälfte der Küste. Rechnen Sie mit rund 10% <a href="/de/ratgeber/kaufnebenkosten-spanien/">Kaufnebenkosten</a> und bei einem alten Haus mit einem <a href="/de/ratgeber/renovierungskosten-spanien/">Renovierungsbudget</a>.',
        ] },
        { h: 'Versorgung', p: [
          'Sedella hat wenige Einrichtungen: ein paar Bars und einen kleinen Laden. Zum Einkaufen und zum Arzt fahren Sie nach Canillas de Aceituno oder in die Dörfer rund um den Stausee La Viñuela, ins Krankenhaus nach Vélez-Málaga. Ein Auto ist unverzichtbar.',
        ] },
        { h: 'Vorsicht bei Fincas', p: [
          'Die Gemeinde liegt größtenteils im Naturpark, wo Bauen und Erweitern streng geregelt sind. Lassen Sie rechtlichen Status, Zufahrtsweg und Wasserversorgung vor dem Kauf prüfen. Lesen Sie unsere Ratgeber <a href="/de/ratgeber/finca-kaufen-spanien/">Finca kaufen</a> und <a href="/de/ratgeber/afo-legalisierung-andalusien/">AFO und Legalisierung</a>.',
        ] },
        { h: 'Renovieren in Sedella', p: [
          'Auf 650 Metern sind die Winter kühl, und es kann kräftig regnen. Ein dichtes Dach, Dämmung und Heizung sind bei einer Renovierung wichtig. Die Gassen sind eng und steil, was die Materialanlieferung erschwert. Lassen Sie eine Immobilie vor dem Kauf <a href="/de/immobiliengutachten/">begutachten</a>.',
        ] },
      ],
    },
    faq: [
      { q: 'Was gibt es in Sedella zu sehen?', a: 'Die Casa Torreón mit ihrem Mudéjar-Turm, die Kirche San Andrés, die Reste der maurischen Burg an der Kapelle der Virgen de la Esperanza und die alten Waschplätze. Außerdem ist das Dorf ein guter Ausgangspunkt für Wanderungen in der Sierra de Tejeda.' },
      { q: 'Wohnen Ausländer in Sedella?', a: 'Ja, 2022 hatte etwa ein Drittel der Einwohner eine ausländische Staatsangehörigkeit.' },
      { q: 'Wann ist das Dorffest von Sedella?', a: 'Am ersten Augustwochenende, zu Ehren der Virgen de la Esperanza.' },
    ],
  },
  sv: {
    title: 'Sedella: bo i en lugn bergsby nedanför La Maroma',
    description: 'Allt om Sedella: den lilla vita bergsbyn nedanför Sierra de Tejeda, Casa Torreón, den internationella gemenskapen, bostadspriser och att köpa och renovera på 650 meter.',
    lead: 'Sedella ligger på 650 meters höjd mot Sierra de Tejeda, med toppen av La Maroma ovanför och Axarquía nedanför. En liten, välskött by där en tredjedel av invånarna kommer från utlandet.',
    intro: [
      'Sedella ligger i naturparken Sierras de Tejeda, Almijara y Alhama, mellan <a href="/sv/orter/canillas-de-aceituno/">Canillas de Aceituno</a> och <a href="/sv/orter/salares/">Salares</a>, cirka 61 kilometer från Málaga. Från byn ser du ut över Axarquías kullar mot havet.',
      'Byn är liten och vit, med branta gränder och två iögonfallande torn: kyrkan San Andrés från 1500-talet och Casa Torreón, ett gammalt hus med ett mudéjartorn. Vid kapellet för Virgen de la Esperanza finns rester av en morisk borg, och längst ner i byn ligger de gamla tvättplatserna och en stenbro som kan vara från romersk tid.',
      'Sedella har cirka 600 invånare, och en tredjedel har utländskt medborgarskap. Byn är känd för sina traditioner: under påskveckan tystnar klockorna och träskallror går runt i stället, och på Kristi lekamens dag bygger invånarna altare på gatorna.',
    ],
    facts: [
      ['Invånare', 'cirka 600 (2025)'],
      ['Utländska invånare', 'cirka en tredjedel'],
      ['Läge', 'berg, 646 m'],
      ['Málaga', 'cirka 61 km'],
      ['Grannbyar', 'Canillas de Aceituno, Salares'],
      ['Prisnivå', 'låg, cirka 1 800 € per m²'],
    ],
    forWhom: 'För dig som söker tystnad, bergsluft och vandringsleder från ytterdörren, och som inte behöver service runt hörnet. Sedella passar dig som vill ha ett byhus eller en finca i bergen och uppskattar en liten, sammansvetsad gemenskap.',
    living: {
      title: 'Bo i Sedella: byhus, fincor och priser',
      description: 'Köpa bostad i Sedella? Vilka bostäder som finns, vad de kostar, var du hittar service och vad du ska tänka på med fincor och renovering i naturparken.',
      lead: 'Sedella är prisvärt och vackert beläget, men långt från allt. Den som köper här väljer medvetet bergslivet.',
      sections: [
        { h: 'Vilka bostäder som finns', p: [
          'I byn byhus i flera våningar, ofta med takterrass och utsikt. På sluttningarna runt omkring fincor och lanthus med oliv- och mandelträd.',
        ] },
        { h: 'Vad en bostad kostar', p: [
          'I oktober 2026 låg det genomsnittliga utgångspriset kring 1 800 € per m² (RealAdvisor), ungefär hälften av nivån vid kusten. Räkna med cirka 10 % i <a href="/sv/guider/kopa-hus-i-spanien-kostnader/">köpkostnader</a> och, för ett gammalt hus, en <a href="/sv/guider/renovera-hus-i-spanien-kostnad/">renoveringsbudget</a>.',
        ] },
        { h: 'Service', p: [
          'Sedella har lite service: ett par barer och en liten affär. För att handla och gå till läkaren åker du till Canillas de Aceituno eller byarna runt La Viñuela-sjön, och till Vélez-Málaga för sjukhuset. Bil är ett måste.',
        ] },
        { h: 'Se upp med fincor', p: [
          'Större delen av kommunen ligger i naturparken, där det är strikta regler för att bygga och bygga ut. Låt kontrollera den rättsliga statusen, tillfartsvägen och vattenförsörjningen innan du köper. Läs våra guider om att <a href="/sv/guider/kopa-finca-i-spanien/">köpa finca</a> och om <a href="/sv/guider/afo-andalusien/">AFO och legalisering</a>.',
        ] },
        { h: 'Renovera i Sedella', p: [
          'På 650 meter är vintrarna svala och det kan regna kraftigt. Ett tätt tak, isolering och uppvärmning är viktigt vid en renovering. Gränderna är smala och branta, vilket gör det svårare att få in material. Låt <a href="/sv/besiktning/">besiktiga</a> huset innan du köper.',
        ] },
      ],
    },
    faq: [
      { q: 'Vad finns att se i Sedella?', a: 'Casa Torreón med sitt mudéjartorn, kyrkan San Andrés, resterna av den moriska borgen vid kapellet för Virgen de la Esperanza och de gamla tvättplatserna. Byn är också en bra utgångspunkt för vandringar i Sierra de Tejeda.' },
      { q: 'Bor det utlänningar i Sedella?', a: 'Ja, 2022 hade cirka en tredjedel av invånarna utländskt medborgarskap.' },
      { q: 'När är Sedellas byfest?', a: 'Den första helgen i augusti, till ära för Virgen de la Esperanza.' },
    ],
  },
};
export default content;
