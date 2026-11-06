import type { PlaceContent } from './types';

// Feitenblad Frigiliana (november 2026)
// - Inwoners: 3.383 (INE, 1 januari 2025); circa 33% buitenlandse nationaliteit (INE 2022).
// - Oppervlakte 40 km²; hoogte circa 300–320 m; 6 km van Nerja; circa 60 km naar de luchthaven van Málaga.
// - Mudéjarwijk, ruïne Castillo de Lízar, El Ingenio (16e-eeuws paleis van de graven van Frigiliana, later suikerrietstroopfabriek),
//   kerk San Antonio (1676), Fuente Vieja (17e eeuw), Reales Pósitos (1767), tegeltableaus (1982) over de Morisco-opstand en de slag bij de Peñón (1569).
// - Fiesta's: San Sebastián 20 januari, Día de la Cruz 3 mei, San Antonio 13 juni (feria), Festival Frigiliana 3 Culturas eind augustus.
// - Woningprijzen: circa € 3.800 per m² appartementen, € 3.900 per m² huizen (RealAdvisor, oktober 2026).
const content: PlaceContent = {
  sources: [
    'https://es.hispanopedia.com/wiki/Frigiliana',
    'https://realadvisor.es/es/precios-viviendas/municipio-frigiliana',
  ],
  nl: {
    title: 'Frigiliana: wonen en kopen in het bekendste witte dorp',
    description: 'Alles over Frigiliana: de Moorse wijk, ligging boven Nerja, woningprijzen, dorpshuizen en finca’s, en wat u moet weten over kopen en verbouwen.',
    lead: 'Witte huizen tegen een steile helling, straatjes van kiezels met bloempotten en op zes kilometer de zee. Frigiliana is het dorp op de ansichtkaart van de Axarquía.',
    intro: [
      'Frigiliana ligt op ongeveer 300 meter hoogte aan de rand van het natuurpark van de Sierras de Tejeda, Almijara y Alhama, zes kilometer landinwaarts van <a href="/nl/plaatsen/nerja/">Nerja</a>. Het oude deel, de Moorse of mudéjarwijk, bestaat uit steile trapstraatjes waar geen auto komt. Tegeltableaus aan de gevels vertellen het verhaal van de Morisco-opstand en de slag bij de Peñón de Frigiliana in 1569.',
      'Het dorp heeft ruim 3.300 inwoners, van wie ongeveer een derde een buitenlandse nationaliteit heeft. Daardoor is er een levendige internationale gemeenschap, met restaurants en winkels die het hele jaar open zijn. Overdag komen er veel bezoekers; ’s avonds en buiten het seizoen is het een rustig dorp.',
      'Rond het dorp liggen villa’s op de hellingen en finca’s in het buitengebied (<em>campo</em>), vaak met uitzicht tot aan zee.',
    ],
    facts: [
      ['Inwoners', 'ruim 3.300 (2025)'],
      ['Buitenlandse inwoners', 'circa een derde'],
      ['Ligging', 'heuvels, circa 300 m hoog'],
      ['Nerja en het strand', '6 km, circa 10 minuten'],
      ['Málaga (luchthaven)', 'ruim een uur rijden'],
      ['Prijsniveau', 'hoog, na Nerja het duurst'],
    ],
    forWhom: 'Voor wie een echt Andalusisch dorp zoekt, met de zee en de voorzieningen van Nerja om de hoek. Een dorpshuis in de oude wijk is ideaal als u van sfeer houdt en geen auto voor de deur nodig hebt; wie ruimte en een zwembad wil, kijkt naar villa’s en finca’s rond het dorp.',
    see: {
      title: 'Zien en doen in Frigiliana: Moorse wijk en wandelingen',
      description: 'Wat te doen in Frigiliana: de mudéjarwijk, El Ingenio, het Festival 3 Culturas, wandelingen in het natuurpark en een tocht naar El Acebuchal.',
      lead: 'Frigiliana is klein, maar u kunt er makkelijk een dag doorbrengen: eerst de oude wijk, dan een terras, en daarna de bergen in.',
      items: [
        { name: 'De mudéjarwijk', text: 'De oude Moorse wijk met steile, gekalkte straatjes en trappen, versierd met bloempotten. Volg de tegeltableaus aan de gevels: samen vertellen ze de geschiedenis van de opstand van 1569.' },
        { name: 'El Ingenio', text: 'Het zestiende-eeuwse paleis van de graven van Frigiliana aan de ingang van het dorp. Later werd hier suikerrietstroop (<em>miel de caña</em>) gemaakt, een product dat bij de streek hoort.' },
        { name: 'Kerk van San Antonio en de Fuente Vieja', text: 'De kerk uit 1676 en de oude fontein uit de zeventiende eeuw zijn twee van de vaste stops op een wandeling door het dorp.' },
        { name: 'Castillo de Lízar', text: 'Boven het dorp liggen de resten van het Moorse kasteel, dat na de opstand van 1569 werd verwoest. Het uitzicht over het dorp en de kust is de klim waard.' },
        { name: 'Wandelen in het natuurpark', text: 'Vanuit Frigiliana lopen paden het natuurpark in, onder meer naar de Río Higuerón en naar El Acebuchal, een gehucht in de bergen dat na jaren van verlatenheid is herbouwd en een bekend eindpunt is voor wandelaars.' },
      ],
      fiestas: [
        { name: 'San Sebastián', when: '20 januari', text: 'feest van de beschermheilige.' },
        { name: 'Día de la Cruz', when: '3 mei', text: 'met kruisen van bloemen in de straten.' },
        { name: 'San Antonio', when: 'rond 13 juni', text: 'de feria van het dorp, met een romería.' },
        { name: 'Festival Frigiliana 3 Culturas', when: 'eind augustus', text: 'muziek, markten en eten rond de joodse, islamitische en christelijke geschiedenis van het dorp.' },
      ],
    },
    living: {
      title: 'Wonen in Frigiliana: dorpshuizen, villa’s en prijzen',
      description: 'Een huis kopen in Frigiliana? Welke woningen er zijn, wat ze kosten, waar u op moet letten in de oude wijk en in het buitengebied, en wat verbouwen hier vraagt.',
      lead: 'Frigiliana is na Nerja de duurste plaats van de Axarquía. Wat u krijgt: sfeer, uitzicht en de zee om de hoek. Waar u op moet letten: bereikbaarheid en vergunningen.',
      sections: [
        { h: 'Wat voor woningen er zijn', p: [
          'In de oude wijk smalle, hoge dorpshuizen met dikke muren en een dakterras, vaak alleen te voet bereikbaar. Aan de randen van het dorp nieuwere huizen en appartementen met parkeerplaats. Op de hellingen eromheen villa’s met zwembad en in het buitengebied finca’s met land, olijf- en avocadobomen.',
        ] },
        { h: 'Wat een woning kost', p: [
          'In oktober 2026 lag de gemiddelde vraagprijs rond de € 3.800 per m² voor appartementen en € 3.900 per m² voor huizen (RealAdvisor). Een gerenoveerd dorpshuis met dakterras en zeezicht is snel duurder dan het gemiddelde. Reken op ongeveer 10% <a href="/nl/gidsen/kosten-koper-spanje/">kosten koper</a> en, bij oudere huizen, een verbouwbudget.',
        ] },
        { h: 'Voorzieningen', p: [
          'In het dorp zijn een gezondheidscentrum, apotheek, kleine supermarkten, banken, een basisschool en veel restaurants. Voor grotere boodschappen, middelbare school en specialisten gaat u naar Nerja (tien minuten) of Vélez-Málaga en Torre del Mar.',
        ] },
        { h: 'Let op in het buitengebied', p: [
          'Veel finca’s rond Frigiliana zijn in de loop der jaren uitgebreid zonder vergunning. Controleer bij aankoop de status van het huis, de toegangsweg en de waterbron. Lees onze gidsen over <a href="/nl/gidsen/finca-kopen-in-spanje/">finca kopen</a> en <a href="/nl/gidsen/afo-legaliseren-andalusie/">AFO en legaliseren</a>.',
        ] },
        { h: 'Verbouwen in Frigiliana', p: [
          'In de oude wijk is alles handwerk: materiaal gaat met kleine wagens of op de schouder naar binnen, en een container voor de deur kan vaak niet. Dat maakt een renovatie hier duurder en trager dan aan de kust. Oude dorpshuizen hebben vaak last van vocht in de muren, houten balken die vervangen moeten worden en daken of terrassen die lekken. Laat een woning vóór aankoop <a href="/nl/aankoopkeuring/">keuren</a>.',
        ] },
      ],
    },
    faq: [
      { q: 'Kun je met de auto in het oude centrum van Frigiliana komen?', a: 'In de mudéjarwijk niet: de straatjes zijn te steil en te smal. Bewoners parkeren in de garages en op de parkeerplaatsen aan de rand van het oude dorp.' },
      { q: 'Hoe ver is Frigiliana van het strand?', a: 'Ongeveer zes kilometer, zo’n tien minuten met de auto naar de stranden van Nerja. Er rijdt ook een bus tussen Frigiliana en Nerja.' },
      { q: 'Is Frigiliana druk?', a: 'Overdag, en zeker in de zomer, komen er veel dagjesmensen. ’s Avonds en buiten het hoogseizoen is het een rustig dorp met een vaste internationale gemeenschap.' },
    ],
  },
  en: {
    title: 'Frigiliana: living and buying in a famous white village',
    description: 'All about Frigiliana: the Moorish quarter, its setting above Nerja, property prices, village houses and fincas, and what to know about buying and renovating.',
    lead: 'White houses on a steep hillside, cobbled lanes lined with flowerpots and the sea six kilometres away. Frigiliana is the village on the Axarquía postcard.',
    intro: [
      'Frigiliana sits at about 300 metres on the edge of the Sierras de Tejeda, Almijara y Alhama natural park, six kilometres inland from <a href="/en/places/nerja/">Nerja</a>. The old part, the Moorish or Mudéjar quarter, is a maze of steep stepped lanes where no car can go. Tile panels on the walls tell the story of the Morisco uprising and the battle of the Peñón de Frigiliana in 1569.',
      'The village has just over 3,300 residents, about a third of them foreign nationals. That gives it a lively international community, with restaurants and shops open all year. During the day there are plenty of visitors; in the evening and out of season it is a quiet village.',
      'Around the village are villas on the slopes and fincas in the countryside (<em>campo</em>), often with views down to the sea.',
    ],
    facts: [
      ['Population', 'just over 3,300 (2025)'],
      ['Foreign residents', 'about a third'],
      ['Setting', 'hills, about 300 m up'],
      ['Nerja and the beach', '6 km, about 10 minutes'],
      ['Málaga airport', 'just over an hour by car'],
      ['Price level', 'high, second only to Nerja'],
    ],
    forWhom: 'People looking for a real Andalusian village with the sea and Nerja’s facilities close by. A village house in the old quarter is ideal if you love atmosphere and do not need a car at the door; if you want space and a pool, look at the villas and fincas around the village.',
    see: {
      title: 'Things to do in Frigiliana: old town, fiestas, walks',
      description: 'What to do in Frigiliana: the Mudéjar quarter, El Ingenio, the 3 Cultures festival, walks in the natural park and a hike to El Acebuchal.',
      lead: 'Frigiliana is small, but it easily fills a day: the old quarter first, then a terrace, then up into the mountains.',
      items: [
        { name: 'The Mudéjar quarter', text: 'The old Moorish quarter of steep whitewashed lanes and steps, decorated with flowerpots. Follow the tile panels on the walls: together they tell the story of the 1569 uprising.' },
        { name: 'El Ingenio', text: 'The sixteenth-century palace of the Counts of Frigiliana at the entrance to the village. It later produced sugar-cane syrup (<em>miel de caña</em>), a product closely tied to the area.' },
        { name: 'San Antonio church and the Fuente Vieja', text: 'The church from 1676 and the old seventeenth-century fountain are two regular stops on a walk through the village.' },
        { name: 'Castillo de Lízar', text: 'Above the village are the remains of the Moorish castle, destroyed after the uprising of 1569. The view over the village and the coast is worth the climb.' },
        { name: 'Walking in the natural park', text: 'Paths lead from Frigiliana into the natural park, including along the Río Higuerón and to El Acebuchal, a mountain hamlet rebuilt after years of abandonment and a popular destination for walkers.' },
      ],
      fiestas: [
        { name: 'San Sebastián', when: '20 January', text: 'the patron saint’s day.' },
        { name: 'Día de la Cruz', when: '3 May', text: 'with crosses of flowers in the streets.' },
        { name: 'San Antonio', when: 'around 13 June', text: 'the village feria, with a romería.' },
        { name: 'Festival Frigiliana 3 Culturas', when: 'late August', text: 'music, markets and food celebrating the village’s Jewish, Muslim and Christian history.' },
      ],
    },
    living: {
      title: 'Living in Frigiliana: houses, villas, fincas, prices',
      description: 'Buying a home in Frigiliana? The types of property, what they cost, what to watch for in the old quarter and the countryside, and what renovation involves here.',
      lead: 'After Nerja, Frigiliana is the most expensive place in the Axarquía. What you get: character, views and the sea nearby. What to watch: access and permits.',
      sections: [
        { h: 'Types of property', p: [
          'In the old quarter, narrow, tall village houses with thick walls and a roof terrace, often reachable only on foot. On the edges of the village, newer houses and apartments with parking. On the slopes around it, villas with pools, and in the countryside fincas with land and olive or avocado trees.',
        ] },
        { h: 'What a home costs', p: [
          'In October 2026 average asking prices were around €3,800 per m² for apartments and €3,900 per m² for houses (RealAdvisor). A renovated village house with a roof terrace and sea views will cost more than the average. Allow around 10% for <a href="/en/guides/buying-costs-in-spain/">buying costs</a> and, for older houses, a renovation budget.',
        ] },
        { h: 'Facilities', p: [
          'The village has a health centre, pharmacy, small supermarkets, banks, a primary school and plenty of restaurants. For a big shop, secondary school and specialists you go to Nerja (ten minutes) or Vélez-Málaga and Torre del Mar.',
        ] },
        { h: 'Watch out in the countryside', p: [
          'Many fincas around Frigiliana have been extended over the years without permission. When buying, check the legal status of the house, the access track and the water source. Read our guides to <a href="/en/guides/buying-a-finca-in-spain/">buying a finca</a> and <a href="/en/guides/afo-legalisation-andalusia/">AFO and legalisation</a>.',
        ] },
        { h: 'Renovating in Frigiliana', p: [
          'In the old quarter everything is done by hand: materials go in on small carts or on someone’s shoulder, and a skip at the door is often impossible. That makes renovation slower and more expensive than on the coast. Old village houses often suffer from damp walls, timber beams that need replacing and leaking roofs or terraces. Have a property <a href="/en/property-survey/">surveyed</a> before you buy.',
        ] },
      ],
    },
    faq: [
      { q: 'Can you drive into Frigiliana’s old quarter?', a: 'Not into the Mudéjar quarter: the lanes are too steep and narrow. Residents use the garages and car parks on the edge of the old village.' },
      { q: 'How far is Frigiliana from the beach?', a: 'About six kilometres, roughly ten minutes by car to Nerja’s beaches. There is also a bus between Frigiliana and Nerja.' },
      { q: 'Is Frigiliana busy?', a: 'During the day, especially in summer, there are many day visitors. In the evening and outside high season it is a quiet village with a settled international community.' },
    ],
  },
  de: {
    title: 'Frigiliana: Wohnen und Kaufen im bekanntesten weißen Dorf',
    description: 'Alles über Frigiliana: maurisches Viertel, Lage oberhalb von Nerja, Immobilienpreise, Dorfhäuser und Fincas und Tipps zu Kauf und Renovierung.',
    lead: 'Weiße Häuser an einem steilen Hang, Kieselgassen voller Blumentöpfe und sechs Kilometer bis zum Meer. Frigiliana ist das Dorf auf der Postkarte der Axarquía.',
    intro: [
      'Frigiliana liegt auf etwa 300 Metern am Rand des Naturparks Sierras de Tejeda, Almijara y Alhama, sechs Kilometer landeinwärts von <a href="/de/orte/nerja/">Nerja</a>. Der alte Teil, das maurische oder Mudéjar-Viertel, besteht aus steilen Treppengassen, in die kein Auto kommt. Fliesenbilder an den Fassaden erzählen die Geschichte des Morisken-Aufstands und der Schlacht am Peñón de Frigiliana im Jahr 1569.',
      'Das Dorf hat gut 3.300 Einwohner, etwa ein Drittel davon mit ausländischer Staatsangehörigkeit. Das sorgt für eine lebendige internationale Gemeinschaft, mit Restaurants und Geschäften, die das ganze Jahr geöffnet sind. Tagsüber kommen viele Besucher; abends und außerhalb der Saison ist es ein ruhiges Dorf.',
      'Rund um das Dorf liegen Villen an den Hängen und Fincas im Außenbereich (<em>campo</em>), oft mit Blick bis zum Meer.',
    ],
    facts: [
      ['Einwohner', 'gut 3.300 (2025)'],
      ['Ausländische Einwohner', 'etwa ein Drittel'],
      ['Lage', 'Hügel, etwa 300 m hoch'],
      ['Nerja und Strand', '6 km, etwa 10 Minuten'],
      ['Flughafen Málaga', 'gut eine Stunde mit dem Auto'],
      ['Preisniveau', 'hoch, nach Nerja das teuerste'],
    ],
    forWhom: 'Für alle, die ein echtes andalusisches Dorf suchen, mit dem Meer und den Einrichtungen von Nerja in der Nähe. Ein Dorfhaus im alten Viertel ist ideal, wenn Sie Atmosphäre lieben und kein Auto vor der Tür brauchen; wer Platz und einen Pool möchte, schaut sich Villen und Fincas rund um das Dorf an.',
    see: {
      title: 'Sehenswertes in Frigiliana: Altstadt, Feste, Wandern',
      description: 'Was man in Frigiliana unternehmen kann: das Mudéjar-Viertel, El Ingenio, das Festival 3 Culturas, Wanderungen im Naturpark und ein Ausflug nach El Acebuchal.',
      lead: 'Frigiliana ist klein, füllt aber leicht einen Tag: erst das alte Viertel, dann eine Terrasse und danach in die Berge.',
      items: [
        { name: 'Das Mudéjar-Viertel', text: 'Das alte maurische Viertel mit steilen, gekalkten Gassen und Treppen, geschmückt mit Blumentöpfen. Folgen Sie den Fliesenbildern an den Fassaden: Zusammen erzählen sie die Geschichte des Aufstands von 1569.' },
        { name: 'El Ingenio', text: 'Der Palast der Grafen von Frigiliana aus dem 16. Jahrhundert am Ortseingang. Später wurde hier Zuckerrohrsirup (<em>miel de caña</em>) hergestellt, ein typisches Produkt der Region.' },
        { name: 'Kirche San Antonio und Fuente Vieja', text: 'Die Kirche von 1676 und der alte Brunnen aus dem 17. Jahrhundert gehören zu den festen Stationen eines Rundgangs durch das Dorf.' },
        { name: 'Castillo de Lízar', text: 'Oberhalb des Dorfes liegen die Reste der maurischen Burg, die nach dem Aufstand von 1569 zerstört wurde. Der Blick über das Dorf und die Küste lohnt den Aufstieg.' },
        { name: 'Wandern im Naturpark', text: 'Von Frigiliana führen Wege in den Naturpark, unter anderem entlang des Río Higuerón und nach El Acebuchal, einem Weiler in den Bergen, der nach Jahren der Verlassenheit wieder aufgebaut wurde und ein beliebtes Wanderziel ist.' },
      ],
      fiestas: [
        { name: 'San Sebastián', when: '20. Januar', text: 'Fest des Schutzpatrons.' },
        { name: 'Día de la Cruz', when: '3. Mai', text: 'mit Blumenkreuzen in den Gassen.' },
        { name: 'San Antonio', when: 'um den 13. Juni', text: 'das Dorffest mit einer Romería.' },
        { name: 'Festival Frigiliana 3 Culturas', when: 'Ende August', text: 'Musik, Märkte und Essen rund um die jüdische, muslimische und christliche Geschichte des Dorfes.' },
      ],
    },
    living: {
      title: 'Wohnen in Frigiliana: Dorfhäuser, Villen, Fincas und Preise',
      description: 'Haus in Frigiliana kaufen? Welche Immobilien es gibt, was sie kosten, worauf Sie in der Altstadt und im Außenbereich achten und was eine Renovierung bedeutet.',
      lead: 'Nach Nerja ist Frigiliana der teuerste Ort der Axarquía. Was Sie bekommen: Atmosphäre, Aussicht und das Meer in der Nähe. Worauf Sie achten sollten: Zufahrt und Genehmigungen.',
      sections: [
        { h: 'Welche Immobilien es gibt', p: [
          'Im alten Viertel schmale, hohe Dorfhäuser mit dicken Mauern und Dachterrasse, oft nur zu Fuß erreichbar. Am Dorfrand neuere Häuser und Wohnungen mit Parkplatz. An den Hängen ringsum Villen mit Pool und im Außenbereich Fincas mit Land, Oliven- und Avocadobäumen.',
        ] },
        { h: 'Was eine Immobilie kostet', p: [
          'Im Oktober 2026 lagen die durchschnittlichen Angebotspreise bei rund 3.800 € pro m² für Wohnungen und 3.900 € pro m² für Häuser (RealAdvisor). Ein renoviertes Dorfhaus mit Dachterrasse und Meerblick liegt schnell darüber. Rechnen Sie mit rund 10% <a href="/de/ratgeber/kaufnebenkosten-spanien/">Kaufnebenkosten</a> und bei älteren Häusern mit einem Renovierungsbudget.',
        ] },
        { h: 'Versorgung', p: [
          'Im Dorf gibt es ein Gesundheitszentrum, eine Apotheke, kleine Supermärkte, Banken, eine Grundschule und viele Restaurants. Für den Großeinkauf, weiterführende Schulen und Fachärzte fahren Sie nach Nerja (zehn Minuten) oder nach Vélez-Málaga und Torre del Mar.',
        ] },
        { h: 'Vorsicht im Außenbereich', p: [
          'Viele Fincas rund um Frigiliana wurden über die Jahre ohne Genehmigung erweitert. Prüfen Sie beim Kauf den rechtlichen Status des Hauses, den Zufahrtsweg und die Wasserquelle. Lesen Sie unsere Ratgeber <a href="/de/ratgeber/finca-kaufen-spanien/">Finca kaufen</a> und <a href="/de/ratgeber/afo-legalisierung-andalusien/">AFO und Legalisierung</a>.',
        ] },
        { h: 'Renovieren in Frigiliana', p: [
          'Im alten Viertel ist alles Handarbeit: Material kommt mit kleinen Karren oder auf der Schulter ins Haus, und ein Container vor der Tür ist oft nicht möglich. Das macht eine Renovierung hier langsamer und teurer als an der Küste. Alte Dorfhäuser haben oft feuchte Wände, Holzbalken, die ersetzt werden müssen, und undichte Dächer oder Terrassen. Lassen Sie eine Immobilie vor dem Kauf <a href="/de/immobiliengutachten/">begutachten</a>.',
        ] },
      ],
    },
    faq: [
      { q: 'Kann man mit dem Auto in die Altstadt von Frigiliana fahren?', a: 'Ins Mudéjar-Viertel nicht: Die Gassen sind zu steil und zu eng. Bewohner parken in Garagen und auf Parkplätzen am Rand des alten Dorfes.' },
      { q: 'Wie weit ist Frigiliana vom Strand entfernt?', a: 'Etwa sechs Kilometer, rund zehn Minuten mit dem Auto zu den Stränden von Nerja. Es gibt auch einen Bus zwischen Frigiliana und Nerja.' },
      { q: 'Ist Frigiliana überlaufen?', a: 'Tagsüber, vor allem im Sommer, kommen viele Tagesgäste. Abends und außerhalb der Hochsaison ist es ein ruhiges Dorf mit einer festen internationalen Gemeinschaft.' },
    ],
  },
  sv: {
    title: 'Frigiliana: bo och köpa i Axarquías mest kända vita by',
    description: 'Allt om Frigiliana: det moriska kvarteret, läget ovanför Nerja, bostadspriser, byhus och fincor och vad du ska veta om köp och renovering.',
    lead: 'Vita hus på en brant sluttning, kullerstensgränder med blomkrukor och havet sex kilometer bort. Frigiliana är byn på Axarquías vykort.',
    intro: [
      'Frigiliana ligger på cirka 300 meters höjd i utkanten av naturparken Sierras de Tejeda, Almijara y Alhama, sex kilometer inåt landet från <a href="/sv/orter/nerja/">Nerja</a>. Den gamla delen, det moriska eller mudéjarkvarteret, består av branta trappgränder dit ingen bil kommer. Kakelplattor på husväggarna berättar historien om moriskernas uppror och slaget vid Peñón de Frigiliana 1569.',
      'Byn har drygt 3 300 invånare, och ungefär en tredjedel har utländskt medborgarskap. Det ger en livlig internationell gemenskap, med restauranger och affärer som är öppna året runt. På dagen kommer många besökare; på kvällen och utanför säsongen är det en lugn by.',
      'Runt byn ligger villor på sluttningarna och fincor på landsbygden (<em>campo</em>), ofta med utsikt ända ner till havet.',
    ],
    facts: [
      ['Invånare', 'drygt 3 300 (2025)'],
      ['Utländska invånare', 'cirka en tredjedel'],
      ['Läge', 'kullar, cirka 300 m'],
      ['Nerja och stranden', '6 km, cirka 10 minuter'],
      ['Málaga (flygplats)', 'drygt en timme med bil'],
      ['Prisnivå', 'hög, näst dyrast efter Nerja'],
    ],
    forWhom: 'För dig som söker en riktig andalusisk by, med havet och Nerjas service nära. Ett byhus i gamla kvarteret passar om du älskar stämning och inte behöver bilen utanför dörren; vill du ha utrymme och pool tittar du på villorna och fincorna runt byn.',
    see: {
      title: 'Se och göra i Frigiliana: gamla stan, fiestor, vandring',
      description: 'Vad du kan göra i Frigiliana: mudéjarkvarteret, El Ingenio, festivalen 3 Culturas, vandringar i naturparken och en tur till El Acebuchal.',
      lead: 'Frigiliana är litet men fyller lätt en dag: först gamla kvarteret, sedan en uteservering och därefter upp i bergen.',
      items: [
        { name: 'Mudéjarkvarteret', text: 'Det gamla moriska kvarteret med branta, vitkalkade gränder och trappor, prydda med blomkrukor. Följ kakeltavlorna på husväggarna: tillsammans berättar de historien om upproret 1569.' },
        { name: 'El Ingenio', text: 'Grevarna av Frigilianas palats från 1500-talet vid infarten till byn. Senare tillverkades här sockerrörssirap (<em>miel de caña</em>), en produkt som hör till trakten.' },
        { name: 'Kyrkan San Antonio och Fuente Vieja', text: 'Kyrkan från 1676 och den gamla fontänen från 1600-talet är två självklara stopp på en promenad genom byn.' },
        { name: 'Castillo de Lízar', text: 'Ovanför byn ligger resterna av den moriska borgen, som förstördes efter upproret 1569. Utsikten över byn och kusten är värd klättringen.' },
        { name: 'Vandring i naturparken', text: 'Från Frigiliana går stigar in i naturparken, bland annat längs Río Higuerón och till El Acebuchal, en by i bergen som byggts upp igen efter år av övergivenhet och är ett populärt mål för vandrare.' },
      ],
      fiestas: [
        { name: 'San Sebastián', when: '20 januari', text: 'skyddshelgonets dag.' },
        { name: 'Día de la Cruz', when: '3 maj', text: 'med kors av blommor i gränderna.' },
        { name: 'San Antonio', when: 'kring 13 juni', text: 'byns feria, med en romería.' },
        { name: 'Festival Frigiliana 3 Culturas', when: 'slutet av augusti', text: 'musik, marknader och mat kring byns judiska, muslimska och kristna historia.' },
      ],
    },
    living: {
      title: 'Bo i Frigiliana: byhus, villor, fincor och priser',
      description: 'Köpa hus i Frigiliana? Vilka bostäder som finns, vad de kostar, vad du ska tänka på i gamla kvarteret och på landsbygden, och vad renovering innebär här.',
      lead: 'Efter Nerja är Frigiliana den dyraste orten i Axarquía. Det du får: stämning, utsikt och havet nära. Det du ska se upp med: åtkomst och tillstånd.',
      sections: [
        { h: 'Vilka bostäder som finns', p: [
          'I gamla kvarteret smala, höga byhus med tjocka murar och takterrass, ofta bara nåbara till fots. I byns utkanter nyare hus och lägenheter med parkering. På sluttningarna runt omkring villor med pool och på landsbygden fincor med mark, oliv- och avokadoträd.',
        ] },
        { h: 'Vad en bostad kostar', p: [
          'I oktober 2026 låg det genomsnittliga utgångspriset kring 3 800 € per m² för lägenheter och 3 900 € per m² för hus (RealAdvisor). Ett renoverat byhus med takterrass och havsutsikt kostar snabbt mer än genomsnittet. Räkna med cirka 10 % i <a href="/sv/guider/kopa-hus-i-spanien-kostnader/">köpkostnader</a> och, för äldre hus, en renoveringsbudget.',
        ] },
        { h: 'Service', p: [
          'I byn finns vårdcentral, apotek, små livsmedelsbutiker, banker, en grundskola och många restauranger. För större inköp, gymnasium och specialister åker du till Nerja (tio minuter) eller till Vélez-Málaga och Torre del Mar.',
        ] },
        { h: 'Se upp på landsbygden', p: [
          'Många fincor runt Frigiliana har byggts ut genom åren utan tillstånd. Kontrollera husets status, tillfartsvägen och vattenkällan när du köper. Läs våra guider om att <a href="/sv/guider/kopa-finca-i-spanien/">köpa finca</a> och om <a href="/sv/guider/afo-andalusien/">AFO och legalisering</a>.',
        ] },
        { h: 'Renovera i Frigiliana', p: [
          'I gamla kvarteret är allt handarbete: material bärs in med små vagnar eller på axeln, och en container utanför dörren går ofta inte. Det gör en renovering här dyrare och långsammare än vid kusten. Gamla byhus har ofta fukt i väggarna, träbjälkar som måste bytas och tak eller terrasser som läcker. Låt <a href="/sv/besiktning/">besiktiga</a> bostaden före köpet.',
        ] },
      ],
    },
    faq: [
      { q: 'Kan man köra bil in i gamla Frigiliana?', a: 'Inte in i mudéjarkvarteret: gränderna är för branta och smala. De boende parkerar i garagen och på parkeringarna i utkanten av den gamla byn.' },
      { q: 'Hur långt är det från Frigiliana till stranden?', a: 'Ungefär sex kilometer, cirka tio minuter med bil till Nerjas stränder. Det går också buss mellan Frigiliana och Nerja.' },
      { q: 'Är det mycket folk i Frigiliana?', a: 'På dagen, särskilt på sommaren, kommer många dagsbesökare. På kvällen och utanför högsäsong är det en lugn by med en fast internationell gemenskap.' },
    ],
  },
};
export default content;
