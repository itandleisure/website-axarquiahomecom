import type { PlaceContent } from './types';

// Feitenblad Nerja (november 2026)
// - Inwoners: 22.132 (INE, 1 januari 2025); circa 27% buitenlandse nationaliteit (INE 2022).
// - Oppervlakte 85 km²; circa 52 km ten oosten van Málaga-stad, ruim een uur naar de luchthaven via de A-7.
// - Stranden: Burriana, Calahonda, Carabeillo, Carabeo, Chorrillo, El Salón, Caletilla, La Torrecilla, El Playazo, El Chucho; in Maro de baai van Maro.
// - Cueva de Nerja: ontdekt 1959, open sinds 1960, Bien de Interés Cultural sinds 1985.
// - Verano Azul (tv-serie, 1981–1982) opgenomen in Nerja.
// - Virgen del Carmen 15–17 juli, met processie over zee naar Calahonda.
// - Woningprijzen: gemiddeld ca. € 5.200/m² appartementen en ca. € 4.400/m² huizen (RealAdvisor, oktober 2026).
const content: PlaceContent = {
  sources: [
    'https://es.hispanopedia.com/wiki/Nerja',
    'https://realadvisor.es/es/precios-viviendas/municipio-nerja',
  ],
  nl: {
    title: 'Nerja: wonen, huis kopen en verbouwen aan de kust',
    description: 'Alles over Nerja: ligging, sfeer, stranden, de grotten, woningprijzen en wat u moet weten als u er een huis wilt kopen of verbouwen.',
    lead: 'Het bekendste kustplaatsje van de Axarquía: witte straatjes rond het Balcón de Europa, kleine baaien onder de rotsen en een groot internationaal gezelschap dat er het hele jaar woont.',
    intro: [
      'Nerja ligt helemaal in het oosten van de provincie Málaga, waar de bergen van de Sierra Almijara bijna tot aan zee lopen. Daardoor is de kust hier rotsachtig, met kleine stranden in baaien in plaats van een lange boulevard. Het oude centrum rond het <em>Balcón de Europa</em> is autoluw, met terrassen, winkels en de kerk van El Salvador.',
      'Met ruim 22.000 inwoners is Nerja een echte kleine stad met alle voorzieningen. Ongeveer een op de vier inwoners heeft een buitenlandse nationaliteit, en daaronder veel Britten, Scandinaviërs, Nederlanders en Duitsers. Anders dan in veel badplaatsen blijft het leven in de winter gewoon doorgaan.',
      'Bij de gemeente horen ook het dorpje <a href="/nl/plaatsen/maro/">Maro</a>, met de beroemde grotten, en het beschermde kustgebied van de kliffen van Maro. Op zes kilometer landinwaarts ligt <a href="/nl/plaatsen/frigiliana/">Frigiliana</a>.',
    ],
    facts: [
      ['Inwoners', 'ruim 22.000 (2025)'],
      ['Buitenlandse inwoners', 'circa een kwart'],
      ['Ligging', 'kust, oostkant van de Axarquía'],
      ['Málaga (luchthaven)', 'ruim een uur rijden'],
      ['Ziekenhuis', 'Vélez-Málaga, circa 30 minuten'],
      ['Prijsniveau', 'hoogste van de Axarquía'],
    ],
    forWhom: 'Voor wie aan zee wil wonen met alles op loopafstand: winkels, restaurants, artsen en een grote internationale gemeenschap. Ook geschikt als u geen auto wilt gebruiken. Wie rust en ruimte zoekt, kijkt eerder naar de dorpen in de heuvels erachter.',
    see: {
      title: 'Zien en doen in Nerja: grotten, stranden, Balcón de Europa',
      description: 'De mooiste bezienswaardigheden in Nerja: de Cueva de Nerja, het Balcón de Europa, Burriana, de kliffen van Maro, Río Chíllar en de fiesta’s door het jaar.',
      lead: 'Grotten met misschien wel de oudste schilderingen van Europa, een uitzichtpunt boven zee en een wandeling door een rivier. Nerja heeft genoeg voor meer dan een lang weekend.',
      items: [
        { name: 'Balcón de Europa', text: 'Het uitzichtpunt op een rots midden in het centrum, met palmen, een kanon van vroeger en uitzicht over de kust tot ver naar het westen. Vanaf hier lopen trappen naar de strandjes van Calahonda en El Salón.' },
        { name: 'Cueva de Nerja', text: 'Een enorm grottenstelsel bij <a href="/nl/plaatsen/maro/">Maro</a>, in 1959 ontdekt door vijf jongens en sinds 1960 open voor publiek. Naast de zalen met druipsteen zijn er schilderingen van robben, die volgens sommige onderzoekers zo’n 42.000 jaar oud zijn. In de zomer zijn er concerten in de grot.' },
        { name: 'Playa de Burriana', text: 'Het grootste en drukste strand van Nerja, met strandtenten, watersport en de beroemde paella van de chiringuitos. Rustiger zijn de kleine baaien zoals Carabeillo en El Chorrillo.' },
        { name: 'Kliffen van Maro-Cerro Gordo', text: 'Een beschermd natuurgebied met steile rotsen, watervallen en kleine baaien ten oosten van Maro. Het mooist vanaf het water: met een kajak of op een suptocht vanaf het strand van Burriana of Maro.' },
        { name: 'Río Chíllar', text: 'Vanaf de rand van Nerja loopt u door het water van de rivier landinwaarts, tot in smalle kloven (<em>cahorros</em>). Reken op vier tot zes uur heen en terug en neem schoenen mee die nat mogen worden.' },
        { name: 'Het oude centrum en Verano Azul', text: 'De smalle straatjes rond de Plaza de España en de kerk van El Salvador. In het park Verano Azul staat de boot uit de Spaanse tv-serie die hier rond 1980 werd opgenomen; voor veel Spanjaarden nog altijd de reden om naar Nerja te komen.' },
        { name: 'Acueducto del Águila', text: 'Een aquaduct uit de negentiende eeuw met vier rijen bogen, gebouwd om water naar een suikerfabriek te brengen. Het staat langs de oude weg naar Maro.' },
      ],
      fiestas: [
        { name: 'Semana Santa', when: 'Pasen', text: 'processies door het oude centrum.' },
        { name: 'Romería de San Isidro', when: 'half mei', text: 'met versierde karren en paarden naar de picknickplaats bij de grotten.' },
        { name: 'Virgen del Carmen', when: '15 tot 17 juli', text: 'de beschermheilige van de vissers wordt over zee naar het strand van Calahonda gebracht.' },
        { name: 'Feria de Nerja', when: 'oktober', text: 'de grote jaarlijkse feria met kermis, muziek en dans.' },
      ],
    },
    living: {
      title: 'Wonen in Nerja: woningen, prijzen, wijken en voorzieningen',
      description: 'Een huis kopen in Nerja? Welke woningen er zijn, wat ze ongeveer kosten, welke wijken passen en wat u moet weten over verbouwen en vakantieverhuur.',
      lead: 'Nerja is de duurste plaats van de Axarquía, maar ook de plaats waar u het makkelijkst zonder auto woont. Een overzicht voor kopers en eigenaren.',
      sections: [
        { h: 'Wat voor woningen er zijn', p: [
          'In en rond het centrum vooral appartementen uit de jaren zeventig tot negentig, vaak met gemeenschappelijk zwembad, en hier en daar een oud dorpshuis in de straatjes achter het Balcón de Europa. Aan de randen liggen urbanisaties met rijtjeshuizen en villa’s, zoals bij Capistrano en Punta Lara, en op de hellingen landinwaarts villa’s en finca’s met zeezicht.',
        ] },
        { h: 'Wat een woning kost', p: [
          'Nerja is de duurste plaats van de Axarquía. In oktober 2026 lag de gemiddelde vraagprijs rond de € 5.200 per m² voor appartementen en € 4.400 per m² voor huizen (RealAdvisor). Een appartement met zeezicht in het centrum kost dus al snel meer dan in Torre del Mar of Torrox Costa. Reken daarbij op ongeveer 10% <a href="/nl/gidsen/kosten-koper-spanje/">kosten koper</a>.',
        ] },
        { h: 'Voorzieningen', p: [
          'Alles is aanwezig: supermarkten, een wekelijkse markt, banken, een gezondheidscentrum en privéklinieken met Engels- en soms Nederlandstalige artsen. Het streekziekenhuis staat in Vélez-Málaga, op ongeveer een halfuur rijden. Er zijn openbare scholen en kinderdagverblijven; voor internationaal onderwijs rijden ouders meestal naar de westkant van de provincie.',
        ] },
        { h: 'Vakantieverhuur', p: [
          'Veel kopers willen hun woning deels verhuren. Andalusië heeft gemeenten sinds 2024 meer ruimte gegeven om nieuwe vakantieverhuur te beperken, en ook de vereniging van eigenaren van een appartementencomplex kan het verbieden. Vraag dit na vóór u koopt, en controleer of een woning al een registratienummer heeft.',
        ] },
        { h: 'Verbouwen in Nerja', p: [
          'De meeste appartementen en huizen zijn dertig jaar of ouder. Veel voorkomend werk: badkamer en keuken vernieuwen, elektra aanpassen aan de huidige normen, platte daken en terrassen opnieuw waterdicht maken en enkel glas vervangen. In het oude centrum zijn de straten smal en is parkeren lastig, wat de aanvoer van materiaal duurder maakt. Laat een woning vóór aankoop <a href="/nl/aankoopkeuring/">keuren</a>, dan weet u vooraf wat er moet gebeuren.',
        ] },
      ],
    },
    faq: [
      { q: 'Is Nerja duur om te wonen?', a: 'Voor de Axarquía wel: woningen kosten er per m² het meest. Dagelijkse uitgaven zoals boodschappen en uit eten zijn vergelijkbaar met de rest van de streek en lager dan in Nederland.' },
      { q: 'Is Nerja in de winter uitgestorven?', a: 'Nee. Nerja heeft ruim 22.000 vaste inwoners en veel overwinteraars. Restaurants, winkels en de markt blijven open, al is het buiten de zomer duidelijk rustiger op de stranden.' },
      { q: 'Hoe ver is Nerja van de luchthaven van Málaga?', a: 'Ruim een uur rijden over de A-7, afhankelijk van het verkeer rond Málaga. Er rijdt ook een bus, met overstap in Málaga.' },
    ],
  },
  en: {
    title: 'Nerja: living, buying and renovating on the coast',
    description: 'All about Nerja: setting, character, beaches, the caves, property prices and what to know if you want to buy or renovate a home there.',
    lead: 'The best-known town on the Axarquía coast: white streets around the Balcón de Europa, small coves below the cliffs and a large international community that lives here all year round.',
    intro: [
      'Nerja lies at the far eastern end of Málaga province, where the Sierra Almijara mountains run almost down to the sea. That makes the coast rocky, with small beaches in coves rather than one long promenade. The old centre around the <em>Balcón de Europa</em> is largely pedestrianised, with terraces, shops and the church of El Salvador.',
      'With more than 22,000 residents, Nerja is a proper small town with every facility. About one in four residents is a foreign national, many of them British, Scandinavian, Dutch and German. Unlike many resorts, life carries on as normal through the winter.',
      'The municipality also includes the village of <a href="/en/places/maro/">Maro</a>, home of the famous caves, and the protected cliffs of Maro. Six kilometres inland lies <a href="/en/places/frigiliana/">Frigiliana</a>.',
    ],
    facts: [
      ['Population', 'over 22,000 (2025)'],
      ['Foreign residents', 'about a quarter'],
      ['Setting', 'coast, eastern Axarquía'],
      ['Málaga airport', 'just over an hour by car'],
      ['Hospital', 'Vélez-Málaga, about 30 minutes'],
      ['Price level', 'highest in the Axarquía'],
    ],
    forWhom: 'People who want to live by the sea with everything within walking distance: shops, restaurants, doctors and a large international community. It also works if you would rather not drive. If you want peace and space, look at the villages in the hills behind instead.',
    see: {
      title: 'Things to do in Nerja: caves, beaches, Balcón de Europa',
      description: 'The best things to do in Nerja: the Nerja caves, Balcón de Europa, Burriana beach, the Maro cliffs, the Río Chíllar walk and fiestas through the year.',
      lead: 'Caves with what may be the oldest paintings in Europe, a viewpoint above the sea and a walk up a river. Nerja has enough for more than a long weekend.',
      items: [
        { name: 'Balcón de Europa', text: 'The viewpoint on a rock in the heart of town, with palm trees, an old cannon and views along the coast far to the west. Steps lead down from here to the small beaches of Calahonda and El Salón.' },
        { name: 'Cueva de Nerja', text: 'A vast cave system near <a href="/en/places/maro/">Maro</a>, discovered in 1959 by five boys and open to visitors since 1960. Besides the halls of stalactites there are paintings of seals that some researchers date to around 42,000 years ago. Concerts are held inside the cave in summer.' },
        { name: 'Burriana beach', text: 'Nerja’s largest and busiest beach, with beach bars, water sports and the famous paella of the chiringuitos. For something quieter, try small coves such as Carabeillo and El Chorrillo.' },
        { name: 'Maro-Cerro Gordo cliffs', text: 'A protected natural area of sheer cliffs, waterfalls and small coves east of Maro. Best seen from the water, by kayak or on a paddleboard tour from Burriana or Maro beach.' },
        { name: 'Río Chíllar', text: 'From the edge of Nerja you walk upstream in the river itself into narrow gorges (<em>cahorros</em>). Allow four to six hours there and back, and wear shoes that can get wet.' },
        { name: 'The old town and Verano Azul', text: 'The narrow streets around Plaza de España and the church of El Salvador. In Verano Azul park stands the boat from the Spanish TV series filmed here around 1980, which for many Spaniards is still the reason to visit Nerja.' },
        { name: 'Acueducto del Águila', text: 'A nineteenth-century aqueduct with four tiers of arches, built to carry water to a sugar mill. It stands beside the old road to Maro.' },
      ],
      fiestas: [
        { name: 'Semana Santa', when: 'Easter', text: 'processions through the old town.' },
        { name: 'Romería de San Isidro', when: 'mid-May', text: 'decorated carts and horses head out to the picnic area near the caves.' },
        { name: 'Virgen del Carmen', when: '15 to 17 July', text: 'the fishermen’s patron saint is carried by boat to Calahonda beach.' },
        { name: 'Feria de Nerja', when: 'October', text: 'the town’s big annual fair, with fairground, music and dancing.' },
      ],
    },
    living: {
      title: 'Living in Nerja: homes, prices, areas and facilities',
      description: 'Buying a home in Nerja? The types of property, roughly what they cost, which areas suit whom and what to know about renovating and holiday lets.',
      lead: 'Nerja is the most expensive place in the Axarquía, but also the easiest place to live without a car. An overview for buyers and owners.',
      sections: [
        { h: 'Types of property', p: [
          'In and around the centre you mostly find apartments from the 1970s to 1990s, often with a communal pool, plus the odd old townhouse in the streets behind the Balcón de Europa. On the edges are urbanisations with townhouses and villas, such as around Capistrano and Punta Lara, and on the slopes inland villas and fincas with sea views.',
        ] },
        { h: 'What a home costs', p: [
          'Nerja is the most expensive place in the Axarquía. In October 2026 average asking prices were around €5,200 per m² for apartments and €4,400 per m² for houses (RealAdvisor). An apartment with sea views in the centre costs noticeably more than in Torre del Mar or Torrox Costa. Allow around 10% on top for <a href="/en/guides/buying-costs-in-spain/">buying costs</a>.',
        ] },
        { h: 'Facilities', p: [
          'Everything is here: supermarkets, a weekly market, banks, a health centre and private clinics with English-speaking doctors. The regional hospital is in Vélez-Málaga, about half an hour away. There are state schools and nurseries; for international schooling, families usually look to the western side of the province.',
        ] },
        { h: 'Holiday lets', p: [
          'Many buyers want to let their home for part of the year. Since 2024 Andalusia has given town halls more scope to limit new holiday lets, and the community of owners in an apartment block can also ban them. Check before you buy, and find out whether the property already has a registration number.',
        ] },
        { h: 'Renovating in Nerja', p: [
          'Most apartments and houses are thirty years old or more. Typical work: new bathrooms and kitchens, bringing the electrics up to current standards, re-waterproofing flat roofs and terraces, and replacing single glazing. In the old town the streets are narrow and parking is hard, which makes getting materials in more expensive. Have a property <a href="/en/property-survey/">surveyed</a> before you buy, so you know what needs doing.',
        ] },
      ],
    },
    faq: [
      { q: 'Is Nerja expensive to live in?', a: 'For the Axarquía, yes: property costs the most per m² here. Day-to-day costs such as groceries and eating out are similar to the rest of the area and lower than in the UK.' },
      { q: 'Is Nerja dead in winter?', a: 'No. Nerja has over 22,000 permanent residents and many winter visitors. Restaurants, shops and the market stay open, although the beaches are much quieter outside summer.' },
      { q: 'How far is Nerja from Málaga airport?', a: 'Just over an hour by car on the A-7, depending on traffic around Málaga. There is also a bus, changing in Málaga.' },
    ],
  },
  de: {
    title: 'Nerja: Wohnen, Kaufen und Renovieren an der Küste',
    description: 'Alles über Nerja: Lage, Charakter, Strände, die Höhle, Immobilienpreise und was Sie wissen sollten, wenn Sie dort ein Haus kaufen oder renovieren möchten.',
    lead: 'Der bekannteste Küstenort der Axarquía: weiße Gassen rund um den Balcón de Europa, kleine Buchten unter den Felsen und eine große internationale Gemeinschaft, die das ganze Jahr hier lebt.',
    intro: [
      'Nerja liegt ganz im Osten der Provinz Málaga, wo die Berge der Sierra Almijara fast bis ans Meer reichen. Deshalb ist die Küste hier felsig, mit kleinen Stränden in Buchten statt einer langen Promenade. Die Altstadt rund um den <em>Balcón de Europa</em> ist weitgehend autofrei, mit Terrassen, Geschäften und der Kirche El Salvador.',
      'Mit über 22.000 Einwohnern ist Nerja eine echte Kleinstadt mit allen Einrichtungen. Etwa jeder vierte Einwohner hat eine ausländische Staatsangehörigkeit, darunter viele Briten, Skandinavier, Niederländer und Deutsche. Anders als in vielen Badeorten geht das Leben im Winter ganz normal weiter.',
      'Zur Gemeinde gehören auch das Dorf <a href="/de/orte/maro/">Maro</a> mit der berühmten Höhle und die geschützte Steilküste von Maro. Sechs Kilometer landeinwärts liegt <a href="/de/orte/frigiliana/">Frigiliana</a>.',
    ],
    facts: [
      ['Einwohner', 'über 22.000 (2025)'],
      ['Ausländische Einwohner', 'etwa ein Viertel'],
      ['Lage', 'Küste, Osten der Axarquía'],
      ['Flughafen Málaga', 'gut eine Stunde mit dem Auto'],
      ['Krankenhaus', 'Vélez-Málaga, etwa 30 Minuten'],
      ['Preisniveau', 'das höchste der Axarquía'],
    ],
    forWhom: 'Für alle, die am Meer wohnen möchten und alles zu Fuß erreichen wollen: Geschäfte, Restaurants, Ärzte und eine große internationale Gemeinschaft. Auch ohne Auto gut machbar. Wer Ruhe und Platz sucht, schaut sich eher die Dörfer in den Hügeln dahinter an.',
    see: {
      title: 'Sehenswertes in Nerja: Höhle, Strände und Balcón de Europa',
      description: 'Die schönsten Sehenswürdigkeiten in Nerja: Höhle von Nerja, Balcón de Europa, Strand Burriana, Steilküste von Maro, Río Chíllar und die Feste im Jahr.',
      lead: 'Eine Höhle mit vielleicht den ältesten Malereien Europas, ein Aussichtspunkt über dem Meer und eine Wanderung durch einen Fluss. Nerja hat genug für mehr als ein langes Wochenende.',
      items: [
        { name: 'Balcón de Europa', text: 'Der Aussichtspunkt auf einem Felsen mitten im Zentrum, mit Palmen, einer alten Kanone und Blick weit die Küste entlang nach Westen. Von hier führen Treppen zu den kleinen Stränden Calahonda und El Salón.' },
        { name: 'Cueva de Nerja', text: 'Ein riesiges Höhlensystem bei <a href="/de/orte/maro/">Maro</a>, 1959 von fünf Jungen entdeckt und seit 1960 für Besucher geöffnet. Neben den Tropfsteinsälen gibt es Malereien von Robben, die manche Forscher auf rund 42.000 Jahre datieren. Im Sommer finden Konzerte in der Höhle statt.' },
        { name: 'Strand Burriana', text: 'Der größte und belebteste Strand von Nerja, mit Strandbars, Wassersport und der berühmten Paella der Chiringuitos. Ruhiger sind kleine Buchten wie Carabeillo und El Chorrillo.' },
        { name: 'Steilküste Maro-Cerro Gordo', text: 'Ein Naturschutzgebiet mit steilen Felsen, Wasserfällen und kleinen Buchten östlich von Maro. Am schönsten vom Wasser aus: mit dem Kajak oder auf einer SUP-Tour vom Strand Burriana oder Maro.' },
        { name: 'Río Chíllar', text: 'Vom Ortsrand von Nerja wandern Sie im Wasser des Flusses landeinwärts bis in enge Schluchten (<em>cahorros</em>). Rechnen Sie mit vier bis sechs Stunden hin und zurück und nehmen Sie Schuhe mit, die nass werden dürfen.' },
        { name: 'Altstadt und Verano Azul', text: 'Die engen Gassen rund um die Plaza de España und die Kirche El Salvador. Im Park Verano Azul steht das Boot aus der spanischen Fernsehserie, die hier um 1980 gedreht wurde; für viele Spanier bis heute der Grund, nach Nerja zu kommen.' },
        { name: 'Acueducto del Águila', text: 'Ein Aquädukt aus dem 19. Jahrhundert mit vier Bogenreihen, gebaut, um Wasser zu einer Zuckerfabrik zu bringen. Es steht an der alten Straße nach Maro.' },
      ],
      fiestas: [
        { name: 'Semana Santa', when: 'Ostern', text: 'Prozessionen durch die Altstadt.' },
        { name: 'Romería de San Isidro', when: 'Mitte Mai', text: 'mit geschmückten Wagen und Pferden zum Picknickplatz bei der Höhle.' },
        { name: 'Virgen del Carmen', when: '15. bis 17. Juli', text: 'die Schutzpatronin der Fischer wird übers Meer zum Strand Calahonda gebracht.' },
        { name: 'Feria de Nerja', when: 'Oktober', text: 'das große jährliche Volksfest mit Kirmes, Musik und Tanz.' },
      ],
    },
    living: {
      title: 'Wohnen in Nerja: Immobilien, Preise, Viertel und Versorgung',
      description: 'Haus in Nerja kaufen? Welche Immobilien es gibt, was sie ungefähr kosten, welche Viertel passen und was Sie über Renovierung und Ferienvermietung wissen.',
      lead: 'Nerja ist der teuerste Ort der Axarquía, aber auch der Ort, an dem man am leichtesten ohne Auto lebt. Ein Überblick für Käufer und Eigentümer.',
      sections: [
        { h: 'Welche Immobilien es gibt', p: [
          'In und um das Zentrum vor allem Wohnungen aus den 1970er bis 1990er Jahren, oft mit Gemeinschaftspool, und hier und da ein altes Stadthaus in den Gassen hinter dem Balcón de Europa. Am Rand liegen Urbanisationen mit Reihenhäusern und Villen, etwa bei Capistrano und Punta Lara, und an den Hängen landeinwärts Villen und Fincas mit Meerblick.',
        ] },
        { h: 'Was eine Immobilie kostet', p: [
          'Nerja ist der teuerste Ort der Axarquía. Im Oktober 2026 lagen die durchschnittlichen Angebotspreise bei rund 5.200 € pro m² für Wohnungen und 4.400 € pro m² für Häuser (RealAdvisor). Eine Wohnung mit Meerblick im Zentrum kostet also deutlich mehr als in Torre del Mar oder Torrox Costa. Rechnen Sie dazu rund 10% <a href="/de/ratgeber/kaufnebenkosten-spanien/">Kaufnebenkosten</a>.',
        ] },
        { h: 'Versorgung', p: [
          'Alles ist vorhanden: Supermärkte, ein Wochenmarkt, Banken, ein Gesundheitszentrum und Privatkliniken mit englisch- und teils deutschsprachigen Ärzten. Das Kreiskrankenhaus steht in Vélez-Málaga, etwa eine halbe Stunde entfernt. Es gibt öffentliche Schulen und Kindergärten; für internationale Schulen fahren Familien meist in den Westen der Provinz.',
        ] },
        { h: 'Ferienvermietung', p: [
          'Viele Käufer möchten ihre Immobilie teilweise vermieten. Andalusien gibt den Gemeinden seit 2024 mehr Spielraum, neue Ferienvermietungen zu begrenzen, und auch die Eigentümergemeinschaft einer Wohnanlage kann sie verbieten. Klären Sie das vor dem Kauf und prüfen Sie, ob die Immobilie schon eine Registrierungsnummer hat.',
        ] },
        { h: 'Renovieren in Nerja', p: [
          'Die meisten Wohnungen und Häuser sind dreißig Jahre oder älter. Typische Arbeiten: Bad und Küche erneuern, die Elektrik auf den heutigen Stand bringen, Flachdächer und Terrassen neu abdichten und Einfachverglasung ersetzen. In der Altstadt sind die Gassen eng und Parkplätze knapp, was den Materialtransport verteuert. Lassen Sie eine Immobilie vor dem Kauf <a href="/de/immobiliengutachten/">begutachten</a>, dann wissen Sie vorher, was zu tun ist.',
        ] },
      ],
    },
    faq: [
      { q: 'Ist das Leben in Nerja teuer?', a: 'Für die Axarquía ja: Immobilien kosten hier pro m² am meisten. Laufende Ausgaben wie Lebensmittel und Restaurantbesuche sind ähnlich wie in der übrigen Region und niedriger als in Deutschland.' },
      { q: 'Ist Nerja im Winter ausgestorben?', a: 'Nein. Nerja hat über 22.000 feste Einwohner und viele Überwinterer. Restaurants, Geschäfte und der Markt bleiben geöffnet, auch wenn es außerhalb des Sommers an den Stränden deutlich ruhiger ist.' },
      { q: 'Wie weit ist Nerja vom Flughafen Málaga entfernt?', a: 'Gut eine Stunde mit dem Auto über die A-7, je nach Verkehr rund um Málaga. Es gibt auch einen Bus mit Umstieg in Málaga.' },
    ],
  },
  sv: {
    title: 'Nerja: bo, köpa och renovera hus vid kusten',
    description: 'Allt om Nerja: läge, stämning, stränder, grottorna, bostadspriser och vad du behöver veta om du vill köpa eller renovera ett hus där.',
    lead: 'Axarquías mest kända kustort: vita gränder kring Balcón de Europa, små vikar under klipporna och en stor internationell gemenskap som bor här året runt.',
    intro: [
      'Nerja ligger längst österut i provinsen Málaga, där bergen i Sierra Almijara når nästan ända ner till havet. Därför är kusten här klippig, med små stränder i vikar i stället för en lång strandpromenad. Den gamla stadskärnan kring <em>Balcón de Europa</em> är nästan bilfri, med uteserveringar, affärer och kyrkan El Salvador.',
      'Med drygt 22 000 invånare är Nerja en riktig liten stad med all service. Ungefär var fjärde invånare har utländskt medborgarskap, och här bor fler svenskar än någon annanstans i Axarquía. Till skillnad från många badorter fortsätter livet som vanligt även på vintern.',
      'Till kommunen hör också byn <a href="/sv/orter/maro/">Maro</a>, med de berömda grottorna, och det skyddade kustområdet vid Maros klippor. Sex kilometer inåt landet ligger <a href="/sv/orter/frigiliana/">Frigiliana</a>.',
    ],
    facts: [
      ['Invånare', 'drygt 22 000 (2025)'],
      ['Utländska invånare', 'cirka en fjärdedel'],
      ['Läge', 'kust, östra Axarquía'],
      ['Málaga (flygplats)', 'drygt en timme med bil'],
      ['Sjukhus', 'Vélez-Málaga, cirka 30 minuter'],
      ['Prisnivå', 'högst i Axarquía'],
    ],
    forWhom: 'För dig som vill bo vid havet med allt på gångavstånd: affärer, restauranger, läkare och en stor internationell gemenskap. Passar också om du inte vill vara beroende av bil. Söker du lugn och utrymme är byarna i kullarna bakom ett bättre val.',
    see: {
      title: 'Se och göra i Nerja: grottor, stränder och Balcón de Europa',
      description: 'Det bästa att se i Nerja: Cueva de Nerja, Balcón de Europa, Burriana, klipporna vid Maro, Río Chíllar och fiestorna under året.',
      lead: 'Grottor med kanske Europas äldsta målningar, en utsiktsplats över havet och en vandring genom en flod. Nerja räcker till mer än en långhelg.',
      items: [
        { name: 'Balcón de Europa', text: 'Utsiktsplatsen på en klippa mitt i centrum, med palmer, en gammal kanon och utsikt längs kusten långt västerut. Härifrån går trappor ner till de små stränderna Calahonda och El Salón.' },
        { name: 'Cueva de Nerja', text: 'Ett enormt grottsystem vid <a href="/sv/orter/maro/">Maro</a>, upptäckt 1959 av fem pojkar och öppet för allmänheten sedan 1960. Förutom salarna med droppsten finns målningar av sälar som enligt vissa forskare är omkring 42 000 år gamla. På sommaren hålls konserter i grottan.' },
        { name: 'Playa de Burriana', text: 'Nerjas största och livligaste strand, med strandbarer, vattensport och chiringuitornas berömda paella. Lugnare är de små vikarna som Carabeillo och El Chorrillo.' },
        { name: 'Klipporna vid Maro-Cerro Gordo', text: 'Ett skyddat naturområde med branta klippor, vattenfall och små vikar öster om Maro. Vackrast från vattnet: med kajak eller på en SUP-tur från stranden i Burriana eller Maro.' },
        { name: 'Río Chíllar', text: 'Från utkanten av Nerja går du i flodens vatten inåt landet, ända in i smala raviner (<em>cahorros</em>). Räkna med fyra till sex timmar fram och tillbaka och ta skor som tål att bli blöta.' },
        { name: 'Gamla stan och Verano Azul', text: 'De smala gränderna kring Plaza de España och kyrkan El Salvador. I parken Verano Azul står båten från den spanska tv-serien som spelades in här kring 1980; för många spanjorer fortfarande anledningen att åka till Nerja.' },
        { name: 'Acueducto del Águila', text: 'En akvedukt från 1800-talet med fyra rader valv, byggd för att leda vatten till en sockerfabrik. Den står längs den gamla vägen till Maro.' },
      ],
      fiestas: [
        { name: 'Semana Santa', when: 'påsk', text: 'processioner genom gamla stan.' },
        { name: 'Romería de San Isidro', when: 'mitten av maj', text: 'med dekorerade vagnar och hästar till picknickplatsen vid grottorna.' },
        { name: 'Virgen del Carmen', when: '15 till 17 juli', text: 'fiskarnas skyddshelgon förs över havet till stranden Calahonda.' },
        { name: 'Feria de Nerja', when: 'oktober', text: 'den stora årliga ferian med tivoli, musik och dans.' },
      ],
    },
    living: {
      title: 'Bo i Nerja: bostäder, priser, områden och service',
      description: 'Köpa hus i Nerja? Vilka bostäder som finns, vad de ungefär kostar, vilka områden som passar och vad du behöver veta om renovering och korttidsuthyrning.',
      lead: 'Nerja är den dyraste orten i Axarquía, men också den där det är lättast att bo utan bil. En översikt för köpare och ägare.',
      sections: [
        { h: 'Vilka bostäder som finns', p: [
          'I och runt centrum mest lägenheter från 1970- till 1990-talet, ofta med gemensam pool, och här och där ett gammalt byhus i gränderna bakom Balcón de Europa. I utkanterna ligger urbanisationer med radhus och villor, till exempel vid Capistrano och Punta Lara, och på sluttningarna inåt landet villor och fincor med havsutsikt.',
        ] },
        { h: 'Vad en bostad kostar', p: [
          'Nerja är den dyraste orten i Axarquía. I oktober 2026 låg det genomsnittliga utgångspriset kring 5 200 € per m² för lägenheter och 4 400 € per m² för hus (RealAdvisor). En lägenhet med havsutsikt i centrum kostar alltså lätt mer än i Torre del Mar eller Torrox Costa. Räkna dessutom med cirka 10 % i <a href="/sv/guider/kopa-hus-i-spanien-kostnader/">köpkostnader</a>.',
        ] },
        { h: 'Service', p: [
          'Allt finns: stormarknader, en veckomarknad, banker, en vårdcentral och privata kliniker med engelsktalande läkare. Regionsjukhuset ligger i Vélez-Málaga, ungefär en halvtimme bort. Det finns kommunala skolor och förskolor; för internationell skola åker familjer oftast till den västra delen av provinsen, där även de svenska skolorna på Costa del Sol ligger.',
        ] },
        { h: 'Korttidsuthyrning', p: [
          'Många köpare vill hyra ut sin bostad en del av tiden. Sedan 2024 har Andalusien gett kommunerna mer utrymme att begränsa ny korttidsuthyrning, och samfälligheten i ett lägenhetskomplex kan också förbjuda det. Kontrollera detta innan du köper, och se om bostaden redan har ett registreringsnummer.',
        ] },
        { h: 'Renovera i Nerja', p: [
          'De flesta lägenheter och hus är trettio år eller äldre. Vanliga arbeten: nytt badrum och kök, el som anpassas till dagens regler, nytt tätskikt på platta tak och terrasser och byte av enkelglas. I gamla stan är gatorna smala och parkering svår, vilket gör materialtransporter dyrare. Låt <a href="/sv/besiktning/">besiktiga</a> bostaden före köpet, så vet du i förväg vad som behöver göras.',
        ] },
      ],
    },
    faq: [
      { q: 'Är det dyrt att bo i Nerja?', a: 'För att vara Axarquía, ja: bostäderna kostar mest per m². Vardagliga utgifter som mat och restaurangbesök är ungefär som i resten av regionen och lägre än i Sverige.' },
      { q: 'Är Nerja öde på vintern?', a: 'Nej. Nerja har drygt 22 000 fasta invånare och många som övervintrar. Restauranger, affärer och marknaden håller öppet, även om det är klart lugnare på stränderna utanför sommaren.' },
      { q: 'Hur långt är det från Nerja till Málagas flygplats?', a: 'Drygt en timme med bil på A-7, beroende på trafiken kring Málaga. Det går också buss, med byte i Málaga.' },
    ],
  },
};
export default content;
