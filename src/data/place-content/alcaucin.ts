import type { PlaceContent } from './types';

// Feitenblad Alcaucín (november 2026)
// - Inwoners: 2.671 (INE, 1 januari 2025); 1.050 buitenlandse inwoners in 2022 (42%), van wie 683 Britten en 44 Duitsers.
// - Oppervlakte 45 km²; hoogte 510 m; 54 km naar Málaga. Barriada Puente Don Manuel (oude suikerfabriek); recreatiegebied El Alcázar op circa 5 km in het natuurpark.
// - Monumenten: Castillo de Zalía (ruïne, Fenicische oorsprong, door de Arabieren herbouwd, in 1485 veroverd), kerk Nuestra Señora del Rosario (18e eeuw),
//   Ermita de Jesús del Calvario (17e eeuw), Fuente de los Cinco Caños. Neanderthalervondsten bij de Boquete de Zafarraya (1983).
// - Fiesta's: San Sebastián (20 januari), romería San Isidro naar El Alcázar (15 mei), feria van Puente Don Manuel (laatste weekend juni),
//   dorpsfeesten (eerste weekend augustus), Candelarias (7-8 september), kastanjefeest (eerste weekend november).
// - In de jaren 2000 in het nieuws door woningen die in het buitengebied zonder geldige vergunning waren gebouwd (Operación Arcos, 2009: burgemeester en anderen aangehouden;
//   de gemeente schatte later 1.600 tot 1.800 onregelmatige woningen in het buitengebied).
// - Woningprijzen: circa € 1.800 per m² (RealAdvisor, oktober 2026).
const content: PlaceContent = {
  sources: [
    'https://es.wikipedia.org/wiki/Alcaucín',
    'https://realadvisor.es/es/precios-viviendas/municipio-alcaucin',
    'https://www.spanishpropertyinsight.com/2009/02/28/town-hall-corruption-bust-in-alcaucin-malaga-la-axarquia-region/',
  ],
  nl: {
    title: 'Alcaucín: wonen onder de Sierra de Tejeda',
    description: 'Alles over Alcaucín: het bergdorp met een grote Britse gemeenschap, het Castillo de Zalía, El Alcázar, woningprijzen en waar u extra op let bij een huis in het buitengebied.',
    lead: 'Alcaucín ligt tegen de Sierra de Tejeda, met de rotswanden van het natuurpark recht achter het dorp en het stuwmeer van La Viñuela beneden. Ruim vier op de tien inwoners komen uit het buitenland, de meesten uit Groot-Brittannië.',
    intro: [
      'Alcaucín ligt op 510 meter hoogte aan de noordoostkant van de Axarquía, ongeveer 54 kilometer van Málaga en vlak boven het stuwmeer van <a href="/nl/plaatsen/vinuela/">La Viñuela</a>. Achter het dorp begint het natuurpark Sierras de Tejeda, Almijara y Alhama, en de weg naar Granada loopt hier over de pas van Zafarraya.',
      'Het dorp heeft ongeveer 2.700 inwoners. In 2022 had 42% een buitenlandse nationaliteit, voor het grootste deel Britten. De meesten wonen niet in het dorp zelf maar in villa’s en landhuizen verspreid over de hellingen.',
      'Juist dat buitengebied heeft Alcaucín ook een bekende naam gegeven: in de jaren 2000 kwam het dorp in het nieuws omdat er huizen waren gebouwd zonder geldige vergunning. Voor kopers betekent dat: hier is goed juridisch onderzoek extra belangrijk.',
    ],
    facts: [
      ['Inwoners', 'circa 2.700 (2025)'],
      ['Buitenlandse inwoners', 'circa 42%, vooral Britten'],
      ['Ligging', 'bergen, 510 m hoog'],
      ['Málaga', 'circa 54 km'],
      ['Stuwmeer La Viñuela', 'een paar minuten'],
      ['Prijsniveau', 'laag, circa € 1.800 per m²'],
    ],
    forWhom: 'Voor wie in de bergen wil wonen met een Engelstalige gemeenschap om zich heen, veel natuur en ruime huizen voor een lage prijs. Alcaucín past bij wie een villa of landhuis met uitzicht zoekt en bereid is de papieren grondig te laten controleren.',
    see: {
      title: 'Zien en doen in Alcaucín: Castillo de Zalía, El Alcázar en de Tejeda',
      description: 'Wat te doen in Alcaucín: de ruïne van het Castillo de Zalía, het recreatiegebied El Alcázar, wandelen in de Sierra de Tejeda, de Fuente de los Cinco Caños en het kastanjefeest.',
      lead: 'Alcaucín is een dorp voor buitenmensen: wandelen, picknicken en klimmen staan hier voorop.',
      items: [
        { name: 'Castillo de Zalía', text: 'De resten van een vesting die al in de oudheid bestond en door de Moren werd herbouwd. De katholieke koningen veroverden haar in 1485. De ruïne ligt op een heuvel met uitzicht over het dal van de Guaro.' },
        { name: 'El Alcázar', text: 'Een recreatiegebied op ongeveer vijf kilometer van het dorp, midden in het natuurpark, met picknickplaatsen onder de bomen en het vertrekpunt van wandelingen naar de toppen van de Sierra de Tejeda.' },
        { name: 'Het dorp', text: 'In het centrum staan de achttiende-eeuwse kerk Nuestra Señora del Rosario, de Ermita de Jesús del Calvario uit de zeventiende eeuw en de Fuente de los Cinco Caños, de fontein met vijf kranen.' },
        { name: 'Boquete de Zafarraya', text: 'Bij de pas naar Granada zijn in 1983 resten van neanderthalers gevonden. De pas zelf biedt een indrukwekkend uitzicht over de Axarquía.' },
      ],
      fiestas: [
        { name: 'San Sebastián', when: '20 januari', text: 'feest van de beschermheilige.' },
        { name: 'Romería de San Isidro', when: '15 mei', text: 'bedevaart naar El Alcázar in de bergen.' },
        { name: 'Dorpsfeesten', when: 'eerste weekend van augustus', text: 'vijf dagen feest, met een flamencofestival.' },
        { name: 'Candelarias', when: '7 en 8 september', text: 'vreugdevuren in het dorp.' },
        { name: 'Fiesta de la Castaña', when: 'eerste weekend van november', text: 'het kastanjefeest.' },
      ],
    },
    living: {
      title: 'Wonen in Alcaucín: villa’s, landhuizen en prijzen',
      description: 'Een huis kopen in Alcaucín? Welke woningen er zijn, wat ze kosten, de voorzieningen en waarom u bij een huis in het buitengebied de vergunningen extra goed moet laten controleren.',
      lead: 'In Alcaucín krijgt u veel ruimte en uitzicht voor uw geld. Maar nergens in de Axarquía is goed onderzoek naar de legale status van een huis zo belangrijk als hier.',
      sections: [
        { h: 'Wat voor woningen er zijn', p: [
          'Het grootste deel van het aanbod bestaat uit villa’s en landhuizen in het buitengebied, vaak met zwembad, terrassen en uitzicht over het stuwmeer. In het dorp zelf staan dorpshuizen en in Puente Don Manuel, beneden aan de weg, gewone woonhuizen.',
        ] },
        { h: 'Wat een woning kost', p: [
          'In oktober 2026 lag de gemiddelde vraagprijs rond de € 1.800 per m² (RealAdvisor), ongeveer de helft van de kust. Huizen in het buitengebied met een twijfelachtige status worden soms opvallend goedkoop aangeboden. Reken op ongeveer 10% <a href="/nl/gidsen/kosten-koper-spanje/">kosten koper</a>.',
        ] },
        { h: 'Vergunningen eerst', p: [
          'Alcaucín kwam in de jaren 2000 in het nieuws door woningen die in het buitengebied zonder geldige vergunning waren gebouwd. Laat daarom vóór aankoop door een onafhankelijke advocaat nagaan of het huis is ingeschreven, of er een AFO of andere erkenning is en of er procedures lopen. Lees onze gids over <a href="/nl/gidsen/afo-legaliseren-andalusie/">AFO en legaliseren</a> en over <a href="/nl/gidsen/finca-kopen-in-spanje/">finca kopen</a>.',
        ] },
        { h: 'Voorzieningen', p: [
          'In het dorp zijn een consultorio, een apotheek, een paar winkels en bars en een basisschool. Voor supermarkten gaat u naar Puente Don Manuel of Viñuela, voor het ziekenhuis naar Vélez-Málaga.',
        ] },
        { h: 'Verbouwen in Alcaucín', p: [
          'Bij een huis in het buitengebied mag u vaak alleen onderhoud doen en niet uitbreiden. Vraag daarom eerst na wat er mag, voordat u plannen maakt voor een extra kamer of een zwembad. Villa’s van twintig jaar en ouder hebben vaak onderhoud nodig aan dak, terrassen en installaties. Laat een woning vóór aankoop <a href="/nl/aankoopkeuring/">keuren</a>.',
        ] },
      ],
    },
    faq: [
      { q: 'Wonen er veel Britten in Alcaucín?', a: 'Ja. In 2022 had 42% van de inwoners een buitenlandse nationaliteit, en de grootste groep daarvan kwam uit het Verenigd Koninkrijk.' },
      { q: 'Is het veilig om een huis in Alcaucín te kopen?', a: 'Ja, mits u vooraf laat controleren of het huis legaal is gebouwd en ingeschreven. Juist hier is onafhankelijk juridisch advies geen overbodige luxe.' },
      { q: 'Hoe ver is Alcaucín van de kust?', a: 'Naar Vélez-Málaga en Torre del Mar is het ongeveer drie kwartier rijden, via het stuwmeer van La Viñuela.' },
    ],
  },
  en: {
    title: 'Alcaucín: living below the Sierra de Tejeda',
    description: 'All about Alcaucín: the mountain village with a large British community, the Castillo de Zalía, El Alcázar, property prices and what to watch especially closely with a house in the countryside.',
    lead: 'Alcaucín sits against the Sierra de Tejeda, with the natural park’s rock faces right behind the village and La Viñuela reservoir below. More than four in ten residents come from abroad, most of them from Britain.',
    intro: [
      'Alcaucín lies at 510 metres on the north-eastern side of the Axarquía, about 54 kilometres from Málaga and just above <a href="/en/places/vinuela/">La Viñuela</a> reservoir. Behind the village begins the Sierras de Tejeda, Almijara y Alhama natural park, and the road to Granada crosses the Zafarraya pass here.',
      'The village has about 2,700 residents. In 2022, 42% were foreign nationals, the majority British. Most of them live not in the village itself but in villas and country houses spread over the slopes.',
      'It is that countryside that also gave Alcaucín its reputation: in the 2000s the village made the news because houses had been built without valid planning permission. For buyers that means thorough legal checks matter even more here.',
    ],
    facts: [
      ['Population', 'about 2,700 (2025)'],
      ['Foreign residents', 'about 42%, mostly British'],
      ['Setting', 'mountains, 510 m up'],
      ['Málaga', 'about 54 km'],
      ['La Viñuela reservoir', 'a few minutes'],
      ['Price level', 'low, about €1,800 per m²'],
    ],
    forWhom: 'People who want to live in the mountains among an English-speaking community, with plenty of nature and spacious houses at a low price. Alcaucín suits those looking for a villa or country house with a view who are willing to have the paperwork checked thoroughly.',
    see: {
      title: 'Things to do in Alcaucín: Castillo de Zalía, El Alcázar and the Tejeda',
      description: 'What to do in Alcaucín: the ruins of the Castillo de Zalía, the El Alcázar recreation area, walking in the Sierra de Tejeda, the Fuente de los Cinco Caños and the chestnut festival.',
      lead: 'Alcaucín is a village for outdoor people: walking, picnics and climbing come first here.',
      items: [
        { name: 'Castillo de Zalía', text: 'The remains of a fortress that already existed in antiquity and was rebuilt by the Moors. The Catholic Monarchs took it in 1485. The ruin stands on a hill overlooking the Guaro valley.' },
        { name: 'El Alcázar', text: 'A recreation area about five kilometres from the village, in the heart of the natural park, with picnic spots under the trees and the starting point for walks to the peaks of the Sierra de Tejeda.' },
        { name: 'The village', text: 'In the centre are the eighteenth-century Nuestra Señora del Rosario church, the seventeenth-century Ermita de Jesús del Calvario and the Fuente de los Cinco Caños, the five-spout fountain.' },
        { name: 'Boquete de Zafarraya', text: 'Neanderthal remains were found in 1983 near the pass to Granada. The pass itself offers an impressive view over the Axarquía.' },
      ],
      fiestas: [
        { name: 'San Sebastián', when: '20 January', text: 'the patron saint’s day.' },
        { name: 'Romería de San Isidro', when: '15 May', text: 'a pilgrimage to El Alcázar in the mountains.' },
        { name: 'Village fiestas', when: 'first weekend of August', text: 'five days of celebrations, including a flamenco festival.' },
        { name: 'Candelarias', when: '7 and 8 September', text: 'bonfires in the village.' },
        { name: 'Fiesta de la Castaña', when: 'first weekend of November', text: 'the chestnut festival.' },
      ],
    },
    living: {
      title: 'Living in Alcaucín: villas, country houses and prices',
      description: 'Buying a home in Alcaucín? The types of property, what they cost, the facilities and why the permits on a country house need checking especially carefully.',
      lead: 'In Alcaucín you get a lot of space and view for your money. But nowhere in the Axarquía are checks on a house’s legal status as important as here.',
      sections: [
        { h: 'Types of property', p: [
          'Most homes for sale are villas and country houses in the countryside, often with a pool, terraces and views over the reservoir. In the village itself there are village houses, and in Puente Don Manuel, down by the road, ordinary family homes.',
        ] },
        { h: 'What a home costs', p: [
          'In October 2026 average asking prices were around €1,800 per m² (RealAdvisor), about half the coastal level. Country houses with a doubtful legal status are sometimes offered at strikingly low prices. Allow around 10% for <a href="/en/guides/buying-costs-in-spain/">buying costs</a>.',
        ] },
        { h: 'Permits first', p: [
          'In the 2000s Alcaucín made the news over homes built in the countryside without valid planning permission. Before buying, have an independent lawyer check that the house is registered, whether it has an AFO or other recognition, and whether any proceedings are pending. Read our guides to <a href="/en/guides/afo-legalisation-andalusia/">AFO and legalisation</a> and <a href="/en/guides/buying-a-finca-in-spain/">buying a finca</a>.',
        ] },
        { h: 'Facilities', p: [
          'The village has a consultorio, a pharmacy, a few shops and bars and a primary school. For supermarkets you go to Puente Don Manuel or Viñuela, and to Vélez-Málaga for the hospital.',
        ] },
        { h: 'Renovating in Alcaucín', p: [
          'With a country house you are often only allowed to carry out maintenance, not to extend. So find out what is permitted before planning an extra room or a pool. Villas twenty years old or more often need work on the roof, terraces and installations. Have a property <a href="/en/property-survey/">surveyed</a> before you buy.',
        ] },
      ],
    },
    faq: [
      { q: 'Do many British people live in Alcaucín?', a: 'Yes. In 2022, 42% of residents were foreign nationals, and the largest group came from the United Kingdom.' },
      { q: 'Is it safe to buy a house in Alcaucín?', a: 'Yes, provided you have it checked beforehand that the house was built legally and is registered. Here in particular, independent legal advice is no luxury.' },
      { q: 'How far is Alcaucín from the coast?', a: 'Vélez-Málaga and Torre del Mar are about 45 minutes’ drive, via La Viñuela reservoir.' },
    ],
  },
  de: {
    title: 'Alcaucín: Wohnen unter der Sierra de Tejeda',
    description: 'Alles über Alcaucín: das Bergdorf mit großer britischer Gemeinschaft, das Castillo de Zalía, El Alcázar, Immobilienpreise und worauf Sie bei einem Haus im Außenbereich besonders achten sollten.',
    lead: 'Alcaucín liegt an der Sierra de Tejeda, mit den Felswänden des Naturparks direkt hinter dem Dorf und dem Stausee La Viñuela darunter. Mehr als vier von zehn Einwohnern kommen aus dem Ausland, die meisten aus Großbritannien.',
    intro: [
      'Alcaucín liegt auf 510 Metern an der Nordostseite der Axarquía, etwa 54 Kilometer von Málaga entfernt und direkt oberhalb des Stausees von <a href="/de/orte/vinuela/">La Viñuela</a>. Hinter dem Dorf beginnt der Naturpark Sierras de Tejeda, Almijara y Alhama, und die Straße nach Granada führt hier über den Pass von Zafarraya.',
      'Das Dorf hat rund 2.700 Einwohner. 2022 hatten 42% eine ausländische Staatsangehörigkeit, die meisten davon Briten. Die meisten wohnen nicht im Dorf selbst, sondern in Villen und Landhäusern, die über die Hänge verstreut liegen.',
      'Gerade dieser Außenbereich hat Alcaucín auch bekannt gemacht: In den 2000er-Jahren kam das Dorf in die Schlagzeilen, weil Häuser ohne gültige Baugenehmigung gebaut worden waren. Für Käufer heißt das: Eine gründliche rechtliche Prüfung ist hier besonders wichtig.',
    ],
    facts: [
      ['Einwohner', 'rund 2.700 (2025)'],
      ['Ausländische Einwohner', 'etwa 42%, vor allem Briten'],
      ['Lage', 'Berge, 510 m hoch'],
      ['Málaga', 'etwa 54 km'],
      ['Stausee La Viñuela', 'wenige Minuten'],
      ['Preisniveau', 'niedrig, rund 1.800 € pro m²'],
    ],
    forWhom: 'Für alle, die in den Bergen wohnen möchten, mit einer englischsprachigen Gemeinschaft, viel Natur und geräumigen Häusern zu niedrigen Preisen. Alcaucín passt zu allen, die eine Villa oder ein Landhaus mit Aussicht suchen und bereit sind, die Unterlagen gründlich prüfen zu lassen.',
    see: {
      title: 'Sehenswertes in Alcaucín: Castillo de Zalía, El Alcázar und die Tejeda',
      description: 'Was man in Alcaucín unternehmen kann: die Ruine des Castillo de Zalía, das Erholungsgebiet El Alcázar, Wandern in der Sierra de Tejeda, die Fuente de los Cinco Caños und das Kastanienfest.',
      lead: 'Alcaucín ist ein Dorf für Naturmenschen: Wandern, Picknick und Klettern stehen hier an erster Stelle.',
      items: [
        { name: 'Castillo de Zalía', text: 'Die Reste einer Festung, die schon in der Antike bestand und von den Mauren wieder aufgebaut wurde. Die Katholischen Könige eroberten sie 1485. Die Ruine liegt auf einem Hügel mit Blick über das Tal des Guaro.' },
        { name: 'El Alcázar', text: 'Ein Erholungsgebiet etwa fünf Kilometer vom Dorf entfernt, mitten im Naturpark, mit Picknickplätzen unter Bäumen und Ausgangspunkt für Wanderungen zu den Gipfeln der Sierra de Tejeda.' },
        { name: 'Das Dorf', text: 'Im Zentrum stehen die Kirche Nuestra Señora del Rosario aus dem 18. Jahrhundert, die Ermita de Jesús del Calvario aus dem 17. Jahrhundert und die Fuente de los Cinco Caños, der Brunnen mit fünf Röhren.' },
        { name: 'Boquete de Zafarraya', text: 'Am Pass nach Granada wurden 1983 Reste von Neandertalern gefunden. Der Pass selbst bietet einen beeindruckenden Blick über die Axarquía.' },
      ],
      fiestas: [
        { name: 'San Sebastián', when: '20. Januar', text: 'Fest des Schutzpatrons.' },
        { name: 'Romería de San Isidro', when: '15. Mai', text: 'Wallfahrt nach El Alcázar in die Berge.' },
        { name: 'Dorffeste', when: 'erstes Augustwochenende', text: 'fünf Tage Fest, mit einem Flamencofestival.' },
        { name: 'Candelarias', when: '7. und 8. September', text: 'Freudenfeuer im Dorf.' },
        { name: 'Fiesta de la Castaña', when: 'erstes Novemberwochenende', text: 'das Kastanienfest.' },
      ],
    },
    living: {
      title: 'Wohnen in Alcaucín: Villen, Landhäuser und Preise',
      description: 'Ein Haus in Alcaucín kaufen? Welche Immobilien es gibt, was sie kosten, die Versorgung und warum Sie die Genehmigungen bei einem Haus im Außenbereich besonders gründlich prüfen lassen sollten.',
      lead: 'In Alcaucín bekommen Sie viel Platz und Aussicht für Ihr Geld. Aber nirgends in der Axarquía ist die Prüfung des rechtlichen Status eines Hauses so wichtig wie hier.',
      sections: [
        { h: 'Welche Immobilien es gibt', p: [
          'Der größte Teil des Angebots sind Villen und Landhäuser im Außenbereich, oft mit Pool, Terrassen und Blick über den Stausee. Im Dorf selbst gibt es Dorfhäuser und in Puente Don Manuel, unten an der Straße, normale Wohnhäuser.',
        ] },
        { h: 'Was eine Immobilie kostet', p: [
          'Im Oktober 2026 lagen die durchschnittlichen Angebotspreise bei rund 1.800 € pro m² (RealAdvisor), etwa die Hälfte der Küste. Landhäuser mit zweifelhaftem Status werden manchmal auffällig günstig angeboten. Rechnen Sie mit rund 10% <a href="/de/ratgeber/kaufnebenkosten-spanien/">Kaufnebenkosten</a>.',
        ] },
        { h: 'Genehmigungen zuerst', p: [
          'Alcaucín kam in den 2000er-Jahren in die Schlagzeilen wegen Häusern, die im Außenbereich ohne gültige Baugenehmigung gebaut worden waren. Lassen Sie deshalb vor dem Kauf von einem unabhängigen Anwalt prüfen, ob das Haus eingetragen ist, ob es eine AFO oder eine andere Anerkennung gibt und ob Verfahren laufen. Lesen Sie unsere Ratgeber <a href="/de/ratgeber/afo-legalisierung-andalusien/">AFO und Legalisierung</a> und <a href="/de/ratgeber/finca-kaufen-spanien/">Finca kaufen</a>.',
        ] },
        { h: 'Versorgung', p: [
          'Im Dorf gibt es ein Consultorio, eine Apotheke, einige Läden und Bars und eine Grundschule. Zum Supermarkt fahren Sie nach Puente Don Manuel oder Viñuela, ins Krankenhaus nach Vélez-Málaga.',
        ] },
        { h: 'Renovieren in Alcaucín', p: [
          'Bei einem Haus im Außenbereich dürfen Sie oft nur Instandhaltung betreiben und nicht erweitern. Klären Sie deshalb zuerst, was erlaubt ist, bevor Sie ein zusätzliches Zimmer oder einen Pool planen. Villen ab zwanzig Jahren brauchen oft Arbeiten an Dach, Terrassen und Installationen. Lassen Sie eine Immobilie vor dem Kauf <a href="/de/immobiliengutachten/">begutachten</a>.',
        ] },
      ],
    },
    faq: [
      { q: 'Wohnen viele Briten in Alcaucín?', a: 'Ja. 2022 hatten 42% der Einwohner eine ausländische Staatsangehörigkeit, die größte Gruppe davon aus dem Vereinigten Königreich.' },
      { q: 'Ist es sicher, in Alcaucín ein Haus zu kaufen?', a: 'Ja, wenn Sie vorher prüfen lassen, ob das Haus legal gebaut und eingetragen ist. Gerade hier ist unabhängige Rechtsberatung kein Luxus.' },
      { q: 'Wie weit ist Alcaucín von der Küste entfernt?', a: 'Nach Vélez-Málaga und Torre del Mar sind es etwa 45 Minuten mit dem Auto, über den Stausee La Viñuela.' },
    ],
  },
  sv: {
    title: 'Alcaucín: bo nedanför Sierra de Tejeda',
    description: 'Allt om Alcaucín: bergsbyn med en stor brittisk gemenskap, Castillo de Zalía, El Alcázar, bostadspriser och vad du ska kontrollera extra noga med ett hus på landsbygden.',
    lead: 'Alcaucín ligger mot Sierra de Tejeda, med naturparkens klippväggar precis bakom byn och La Viñuela-sjön nedanför. Mer än fyra av tio invånare kommer från utlandet, de flesta från Storbritannien.',
    intro: [
      'Alcaucín ligger på 510 meters höjd i nordöstra Axarquía, cirka 54 kilometer från Málaga och strax ovanför <a href="/sv/orter/vinuela/">La Viñuela</a>-sjön. Bakom byn börjar naturparken Sierras de Tejeda, Almijara y Alhama, och vägen till Granada går här över passet vid Zafarraya.',
      'Byn har cirka 2 700 invånare. År 2022 hade 42 % utländskt medborgarskap, de flesta brittiskt. De flesta av dem bor inte i själva byn utan i villor och lanthus utspridda över sluttningarna.',
      'Det är just den landsbygden som också gett Alcaucín dess rykte: på 2000-talet hamnade byn i nyheterna eftersom hus hade byggts utan giltigt bygglov. För köpare betyder det att en grundlig juridisk kontroll är ännu viktigare här.',
    ],
    facts: [
      ['Invånare', 'cirka 2 700 (2025)'],
      ['Utländska invånare', 'cirka 42 %, mest britter'],
      ['Läge', 'berg, 510 m'],
      ['Málaga', 'cirka 54 km'],
      ['La Viñuela-sjön', 'några minuter'],
      ['Prisnivå', 'låg, cirka 1 800 € per m²'],
    ],
    forWhom: 'För dig som vill bo i bergen bland en engelskspråkig gemenskap, med mycket natur och rymliga hus till lågt pris. Alcaucín passar dig som söker en villa eller ett lanthus med utsikt och är beredd att låta kontrollera papperen grundligt.',
    see: {
      title: 'Se och göra i Alcaucín: Castillo de Zalía, El Alcázar och Tejeda',
      description: 'Vad du kan göra i Alcaucín: ruinerna av Castillo de Zalía, rekreationsområdet El Alcázar, vandra i Sierra de Tejeda, Fuente de los Cinco Caños och kastanjefesten.',
      lead: 'Alcaucín är en by för friluftsmänniskor: vandring, picknick och klättring kommer först här.',
      items: [
        { name: 'Castillo de Zalía', text: 'Resterna av en fästning som fanns redan under antiken och byggdes om av morerna. De katolska monarkerna intog den 1485. Ruinen står på en kulle med utsikt över Guarodalen.' },
        { name: 'El Alcázar', text: 'Ett rekreationsområde cirka fem kilometer från byn, mitt i naturparken, med picknickplatser under träden och startpunkt för vandringar till topparna i Sierra de Tejeda.' },
        { name: 'Byn', text: 'I centrum finns kyrkan Nuestra Señora del Rosario från 1700-talet, kapellet Ermita de Jesús del Calvario från 1600-talet och Fuente de los Cinco Caños, fontänen med fem pipar.' },
        { name: 'Boquete de Zafarraya', text: 'Nära passet mot Granada hittades 1983 lämningar efter neandertalare. Själva passet bjuder på en imponerande utsikt över Axarquía.' },
      ],
      fiestas: [
        { name: 'San Sebastián', when: '20 januari', text: 'skyddshelgonets dag.' },
        { name: 'Romería de San Isidro', when: '15 maj', text: 'en vallfärd till El Alcázar i bergen.' },
        { name: 'Byfesterna', when: 'första helgen i augusti', text: 'fem dagars firande, bland annat en flamencofestival.' },
        { name: 'Candelarias', when: '7 och 8 september', text: 'brasor i byn.' },
        { name: 'Fiesta de la Castaña', when: 'första helgen i november', text: 'kastanjefesten.' },
      ],
    },
    living: {
      title: 'Bo i Alcaucín: villor, lanthus och priser',
      description: 'Köpa bostad i Alcaucín? Vilka bostäder som finns, vad de kostar, service och varför tillstånden för ett lanthus måste kontrolleras extra noga.',
      lead: 'I Alcaucín får du mycket utrymme och utsikt för pengarna. Men ingenstans i Axarquía är kontrollen av husets rättsliga status lika viktig som här.',
      sections: [
        { h: 'Vilka bostäder som finns', p: [
          'De flesta bostäder till salu är villor och lanthus på landsbygden, ofta med pool, terrasser och utsikt över sjön. I själva byn finns byhus, och i Puente Don Manuel, nere vid vägen, vanliga familjebostäder.',
        ] },
        { h: 'Vad en bostad kostar', p: [
          'I oktober 2026 låg det genomsnittliga utgångspriset kring 1 800 € per m² (RealAdvisor), ungefär hälften av nivån vid kusten. Lanthus med tveksam rättslig status bjuds ibland ut till påfallande låga priser. Räkna med cirka 10 % i <a href="/sv/guider/kopa-hus-i-spanien-kostnader/">köpkostnader</a>.',
        ] },
        { h: 'Tillstånden först', p: [
          'På 2000-talet hamnade Alcaucín i nyheterna för bostäder som byggts på landsbygden utan giltigt bygglov. Låt före köpet en oberoende advokat kontrollera att huset är registrerat, om det har en AFO eller annat erkännande och om det pågår några ärenden. Läs våra guider om <a href="/sv/guider/afo-andalusien/">AFO och legalisering</a> och om att <a href="/sv/guider/kopa-finca-i-spanien/">köpa finca</a>.',
        ] },
        { h: 'Service', p: [
          'Byn har en consultorio, ett apotek, några affärer och barer och en grundskola. För livsmedelsbutiker åker du till Puente Don Manuel eller Viñuela, och till Vélez-Málaga för sjukhuset.',
        ] },
        { h: 'Renovera i Alcaucín', p: [
          'Med ett lanthus får du ofta bara utföra underhåll, inte bygga ut. Ta därför reda på vad som är tillåtet innan du planerar ett extra rum eller en pool. Villor som är tjugo år eller äldre behöver ofta åtgärder på tak, terrasser och installationer. Låt <a href="/sv/besiktning/">besiktiga</a> huset innan du köper.',
        ] },
      ],
    },
    faq: [
      { q: 'Bor det många britter i Alcaucín?', a: 'Ja. 2022 hade 42 % av invånarna utländskt medborgarskap, och den största gruppen kom från Storbritannien.' },
      { q: 'Är det säkert att köpa hus i Alcaucín?', a: 'Ja, förutsatt att du i förväg låter kontrollera att huset är lagligt byggt och registrerat. Just här är oberoende juridisk rådgivning ingen lyx.' },
      { q: 'Hur långt är det från Alcaucín till kusten?', a: 'Till Vélez-Málaga och Torre del Mar är det cirka 45 minuter med bil, via La Viñuela-sjön.' },
    ],
  },
};
export default content;
