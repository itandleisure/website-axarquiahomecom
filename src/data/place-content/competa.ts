import type { PlaceContent } from './types';

// Feitenblad Cómpeta (november 2026)
// - Inwoners: 3.824 (INE, 1 januari 2025); circa 47% buitenlandse nationaliteit (INE 2022), een van de hoogste aandelen van de provincie.
// - Hoogte 638 m, aan de voet van de Sierra Almijara; circa 51 km naar Málaga; La Maroma (2.065 m) is de hoogste top van de streek.
// - Iglesia de Nuestra Señora de la Asunción (16e eeuw, mudéjar toren van circa 30 m) aan de Plaza Almijara.
// - Wijnbouw: moscatel en zoete wijn, rozijnen.
// - Fiesta's: Cruces de Mayo (3 mei), zomerferia (juli), Noche del Vino (15 augustus, sinds 1973).
// - Woningprijzen: circa € 2.000 per m² appartementen, € 2.500 per m² huizen (RealAdvisor, oktober 2026).
const content: PlaceContent = {
  sources: [
    'https://es.hispanopedia.com/wiki/Cómpeta',
    'https://realadvisor.es/es/precios-viviendas/municipio-competa',
  ],
  nl: {
    title: 'Cómpeta: wonen en kopen in het bergdorp van de Axarquía',
    description: 'Alles over Cómpeta: wit bergdorp op 640 meter, internationale gemeenschap, Noche del Vino, woningprijzen en wat kopen en verbouwen in de bergen vraagt.',
    lead: 'Op 640 meter hoogte, aan de voet van de Sierra Almijara, ligt Cómpeta: een wit bergdorp met wijngaarden, uitzicht tot aan zee en bijna de helft buitenlandse inwoners.',
    intro: [
      'Cómpeta ligt hoog in het oosten van de Axarquía, tegen de bergen van het natuurpark Sierras de Tejeda, Almijara y Alhama. Vanaf het dorp kijkt u over de heuvels met wijngaarden en olijfbomen naar de zee. De kust bij Torrox en Algarrobo is ongeveer een halfuur rijden over een bochtige weg.',
      'Het dorp heeft zo’n 3.800 inwoners, van wie bijna de helft een buitenlandse nationaliteit heeft. Dat is een van de hoogste aandelen van de provincie. Britten, Nederlanders, Belgen, Duitsers en Scandinaviërs wonen er het hele jaar, en het dorp heeft daardoor een levendig verenigingsleven.',
      'Het hart van het dorp is de Plaza Almijara met de kerk van de Asunción en haar hoge mudéjartoren. De streek staat bekend om moscatelwijn en rozijnen.',
    ],
    facts: [
      ['Inwoners', 'circa 3.800 (2025)'],
      ['Buitenlandse inwoners', 'bijna de helft'],
      ['Ligging', 'bergen, circa 640 m hoog'],
      ['Naar de kust', 'circa 30 minuten'],
      ['Málaga (luchthaven)', 'circa een uur rijden'],
      ['Prijsniveau', 'gemiddeld, lager dan aan de kust'],
    ],
    forWhom: 'Voor wie rust, natuur en uitzicht zoekt, en het niet erg vindt om voor het strand een halfuur te rijden. Cómpeta trekt mensen die er het hele jaar wonen: in het dorp is alles dichtbij en er is een grote internationale gemeenschap.',
    see: {
      title: 'Zien en doen in Cómpeta: wijn, bergen en de Noche del Vino',
      description: 'Wat te doen in Cómpeta: de Plaza Almijara, wandelen naar La Maroma en in de Sierra Almijara, de wijnmakerijen en de Noche del Vino op 15 augustus.',
      lead: 'Cómpeta is een uitvalsbasis voor de bergen, en een plek om op een plein te zitten met een glas zoete wijn uit de streek.',
      items: [
        { name: 'Plaza Almijara en de kerk', text: 'Het plein voor de zestiende-eeuwse kerk van Nuestra Señora de la Asunción, met haar slanke toren in mudéjarstijl, is het hart van het dorp. Rondom liggen terrassen en smalle witte straatjes.' },
        { name: 'Wijn en rozijnen', text: 'Rond Cómpeta worden moscateldruiven verbouwd voor zoete wijn en rozijnen. In en rond het dorp kunt u bij kleine wijnmakerijen proeven en kopen.' },
        { name: 'La Maroma', text: 'De hoogste top van de streek, 2.065 meter, is vanuit de omgeving van Cómpeta en Canillas de Albaida te beklimmen. Het is een lange, zware tocht; neem voldoende water mee en ga niet in de zomerhitte.' },
        { name: 'Wandelen in de Sierra Almijara', text: 'Rond het dorp lopen veel paden de bergen in, onder meer naar de Puerto de Cómpeta en richting Canillas de Albaida en Árchez.' },
      ],
      fiestas: [
        { name: 'Cruces de Mayo', when: '3 mei', text: 'met kruisen van bloemen in het dorp.' },
        { name: 'Zomerferia', when: 'juli', text: 'het dorpsfeest.' },
        { name: 'Noche del Vino', when: '15 augustus', text: 'sinds 1973 het grote wijnfeest, met gratis wijn, flamenco en het traditionele druiven treden op het plein.' },
      ],
    },
    living: {
      title: 'Wonen in Cómpeta: dorpshuizen, villa’s, finca’s en prijzen',
      description: 'Een huis kopen in Cómpeta? Welke woningen er zijn, wat ze kosten, voorzieningen in het dorp en waar u op let bij huizen in de bergen.',
      lead: 'In Cómpeta krijgt u meer ruimte voor uw geld dan aan de kust. Wat u moet meewegen: de rijtijd, de winters op hoogte en de staat van oudere huizen.',
      sections: [
        { h: 'Wat voor woningen er zijn', p: [
          'In het dorp traditionele dorpshuizen, vaak met dakterras en uitzicht. Aan de randen en op de hellingen villa’s met zwembad. In het buitengebied finca’s en <em>cortijos</em> met wijngaarden, olijfbomen en soms een eigen waterbron.',
        ] },
        { h: 'Wat een woning kost', p: [
          'In oktober 2026 lag de gemiddelde vraagprijs rond de € 2.000 per m² voor appartementen en € 2.500 per m² voor huizen (RealAdvisor). Dat is duidelijk lager dan in <a href="/nl/plaatsen/nerja/">Nerja</a> of <a href="/nl/plaatsen/frigiliana/">Frigiliana</a>. Reken op ongeveer 10% <a href="/nl/gidsen/kosten-koper-spanje/">kosten koper</a> en houd rekening met een verbouwbudget.',
        ] },
        { h: 'Voorzieningen', p: [
          'Cómpeta heeft een gezondheidscentrum, apotheek, supermarkten, banken, een basisschool en veel restaurants. Voor de middelbare school, grote supermarkten en het ziekenhuis gaat u naar Torrox, Torre del Mar of Vélez-Málaga.',
        ] },
        { h: 'Let op in de bergen', p: [
          'Op 640 meter kan het ’s winters koud en vochtig zijn; goede isolatie en verwarming zijn geen luxe. Bij finca’s buiten het dorp zijn de toegangsweg, water en elektriciteit en de juridische status van het huis de belangrijkste punten. Lees onze gidsen over <a href="/nl/gidsen/finca-kopen-in-spanje/">finca kopen</a> en <a href="/nl/gidsen/afo-legaliseren-andalusie/">AFO en legaliseren</a>.',
        ] },
        { h: 'Verbouwen in Cómpeta', p: [
          'Veel huizen in en rond Cómpeta zijn oud en zijn in de loop der jaren stap voor stap uitgebouwd. Typische klussen zijn daken en terrassen waterdicht maken, vocht in muren aanpakken, isoleren en verwarming aanleggen. In het dorp zijn de straatjes smal, wat aanvoer van materiaal lastiger maakt. Laat een huis vóór aankoop <a href="/nl/aankoopkeuring/">keuren</a>.',
        ] },
      ],
    },
    faq: [
      { q: 'Hoe ver is Cómpeta van het strand?', a: 'Ongeveer een halfuur rijden over een bochtige bergweg naar de kust bij Torrox Costa of Algarrobo Costa.' },
      { q: 'Is het koud in Cómpeta in de winter?', a: 'Overdag is het meestal zonnig en mild, maar ’s nachts kan het op 640 meter flink afkoelen. Goede isolatie en verwarming zijn nodig.' },
      { q: 'Wonen er veel buitenlanders in Cómpeta?', a: 'Ja, bijna de helft van de inwoners heeft een buitenlandse nationaliteit, onder meer Britten, Nederlanders, Belgen en Duitsers.' },
    ],
  },
  en: {
    title: 'Cómpeta: living and buying in a mountain village',
    description: 'All about Cómpeta: white mountain village at 640 metres, its international community, the Noche del Vino, property prices and renovating in the hills.',
    lead: 'At 640 metres, at the foot of the Sierra Almijara, lies Cómpeta: a white mountain village with vineyards, views to the sea and nearly half its residents from abroad.',
    intro: [
      'Cómpeta sits high in the east of the Axarquía, against the mountains of the Sierras de Tejeda, Almijara y Alhama natural park. From the village you look over hills of vines and olive trees to the sea. The coast at Torrox and Algarrobo is about half an hour away on a winding road.',
      'The village has around 3,800 residents, nearly half of them foreign nationals, one of the highest shares in the province. British, Dutch, Belgian, German and Scandinavian people live there all year, which gives the village a lively social life.',
      'Its heart is the Plaza Almijara with the church of the Asunción and its tall Mudéjar tower. The area is known for moscatel wine and raisins.',
    ],
    facts: [
      ['Population', 'about 3,800 (2025)'],
      ['Foreign residents', 'nearly half'],
      ['Setting', 'mountains, about 640 m up'],
      ['To the coast', 'about 30 minutes'],
      ['Málaga airport', 'about an hour by car'],
      ['Price level', 'average, below the coast'],
    ],
    forWhom: 'People looking for peace, nature and views, who do not mind driving half an hour to the beach. Cómpeta attracts year-round residents: everything is close by in the village and there is a large international community.',
    see: {
      title: 'Things to do in Cómpeta: wine, hiking, Noche del Vino',
      description: 'What to do in Cómpeta: the Plaza Almijara, walking up La Maroma and in the Sierra Almijara, the wineries and the Noche del Vino on 15 August.',
      lead: 'Cómpeta is a base for the mountains, and a place to sit on a square with a glass of the local sweet wine.',
      items: [
        { name: 'Plaza Almijara and the church', text: 'The square in front of the sixteenth-century church of Nuestra Señora de la Asunción, with its slender Mudéjar-style tower, is the heart of the village, surrounded by terraces and narrow white lanes.' },
        { name: 'Wine and raisins', text: 'Moscatel grapes are grown around Cómpeta for sweet wine and raisins. In and around the village you can taste and buy at small wineries.' },
        { name: 'La Maroma', text: 'The highest peak in the area, 2,065 metres, can be climbed from around Cómpeta and Canillas de Albaida. It is a long, hard hike; take plenty of water and avoid the summer heat.' },
        { name: 'Walking in the Sierra Almijara', text: 'Many paths lead from the village into the mountains, including to the Puerto de Cómpeta and towards Canillas de Albaida and Árchez.' },
      ],
      fiestas: [
        { name: 'Cruces de Mayo', when: '3 May', text: 'with crosses of flowers around the village.' },
        { name: 'Summer feria', when: 'July', text: 'the village fair.' },
        { name: 'Noche del Vino', when: '15 August', text: 'the big wine festival since 1973, with free wine, flamenco and traditional grape treading on the square.' },
      ],
    },
    living: {
      title: 'Living in Cómpeta: village houses, villas, fincas and prices',
      description: 'Buying a home in Cómpeta? The types of property, what they cost, facilities in the village and what to watch for with houses in the mountains.',
      lead: 'In Cómpeta you get more space for your money than on the coast. What to weigh up: driving time, winters at altitude and the condition of older houses.',
      sections: [
        { h: 'Types of property', p: [
          'In the village, traditional village houses, often with a roof terrace and views. On the edges and the slopes, villas with pools. In the countryside, fincas and <em>cortijos</em> with vines, olive trees and sometimes their own water source.',
        ] },
        { h: 'What a home costs', p: [
          'In October 2026 average asking prices were around €2,000 per m² for apartments and €2,500 per m² for houses (RealAdvisor), clearly below <a href="/en/places/nerja/">Nerja</a> or <a href="/en/places/frigiliana/">Frigiliana</a>. Allow around 10% for <a href="/en/guides/buying-costs-in-spain/">buying costs</a> and budget for renovation.',
        ] },
        { h: 'Facilities', p: [
          'Cómpeta has a health centre, pharmacy, supermarkets, banks, a primary school and plenty of restaurants. For secondary school, large supermarkets and the hospital you go to Torrox, Torre del Mar or Vélez-Málaga.',
        ] },
        { h: 'Watch out in the mountains', p: [
          'At 640 metres winters can be cold and damp; good insulation and heating are not a luxury. With fincas outside the village, the access track, water and electricity and the legal status of the house are the key points. Read our guides to <a href="/en/guides/buying-a-finca-in-spain/">buying a finca</a> and <a href="/en/guides/afo-legalisation-andalusia/">AFO and legalisation</a>.',
        ] },
        { h: 'Renovating in Cómpeta', p: [
          'Many houses in and around Cómpeta are old and have been extended step by step over the years. Typical jobs are waterproofing roofs and terraces, tackling damp walls, insulating and installing heating. The village lanes are narrow, which makes deliveries harder. Have a house <a href="/en/property-survey/">surveyed</a> before you buy.',
        ] },
      ],
    },
    faq: [
      { q: 'How far is Cómpeta from the beach?', a: 'About half an hour on a winding mountain road to the coast at Torrox Costa or Algarrobo Costa.' },
      { q: 'Is Cómpeta cold in winter?', a: 'Days are usually sunny and mild, but nights at 640 metres can get chilly. Good insulation and heating are needed.' },
      { q: 'Do many foreigners live in Cómpeta?', a: 'Yes, nearly half of residents are foreign nationals, including British, Dutch, Belgian and German people.' },
    ],
  },
  de: {
    title: 'Cómpeta: Wohnen und Kaufen im Bergdorf der Axarquía',
    description: 'Alles über Cómpeta: weißes Bergdorf auf 640 Metern, internationale Gemeinschaft, Noche del Vino, Immobilienpreise und Kaufen und Renovieren in den Bergen.',
    lead: 'Auf 640 Metern, am Fuß der Sierra Almijara, liegt Cómpeta: ein weißes Bergdorf mit Weinbergen, Blick bis zum Meer und fast zur Hälfte ausländischen Einwohnern.',
    intro: [
      'Cómpeta liegt hoch im Osten der Axarquía, an den Bergen des Naturparks Sierras de Tejeda, Almijara y Alhama. Vom Dorf aus blicken Sie über Hügel mit Reben und Olivenbäumen bis zum Meer. Die Küste bei Torrox und Algarrobo ist etwa eine halbe Stunde über eine kurvige Straße entfernt.',
      'Das Dorf hat rund 3.800 Einwohner, fast die Hälfte davon mit ausländischer Staatsangehörigkeit, einer der höchsten Anteile der Provinz. Briten, Niederländer, Belgier, Deutsche und Skandinavier leben hier das ganze Jahr, was für ein lebendiges Vereinsleben sorgt.',
      'Das Herz des Dorfes ist die Plaza Almijara mit der Kirche der Asunción und ihrem hohen Mudéjar-Turm. Die Gegend ist bekannt für Moscatel-Wein und Rosinen.',
    ],
    facts: [
      ['Einwohner', 'etwa 3.800 (2025)'],
      ['Ausländische Einwohner', 'fast die Hälfte'],
      ['Lage', 'Berge, etwa 640 m hoch'],
      ['Zur Küste', 'etwa 30 Minuten'],
      ['Flughafen Málaga', 'etwa eine Stunde mit dem Auto'],
      ['Preisniveau', 'durchschnittlich, unter der Küste'],
    ],
    forWhom: 'Für alle, die Ruhe, Natur und Aussicht suchen und für den Strand gern eine halbe Stunde fahren. Cómpeta zieht Menschen an, die das ganze Jahr hier leben: Im Dorf ist alles nah und es gibt eine große internationale Gemeinschaft.',
    see: {
      title: 'Sehenswertes in Cómpeta: Wein, Berge und die Noche del Vino',
      description: 'Was man in Cómpeta unternehmen kann: die Plaza Almijara, Wandern auf La Maroma und in der Sierra Almijara, die Weinkellereien und die Noche del Vino am 15.',
      lead: 'Cómpeta ist ein Ausgangspunkt für die Berge und ein Ort, um mit einem Glas süßem Wein aus der Gegend auf einem Platz zu sitzen.',
      items: [
        { name: 'Plaza Almijara und Kirche', text: 'Der Platz vor der Kirche Nuestra Señora de la Asunción aus dem 16. Jahrhundert mit ihrem schlanken Turm im Mudéjar-Stil ist das Herz des Dorfes, umgeben von Terrassen und engen weißen Gassen.' },
        { name: 'Wein und Rosinen', text: 'Rund um Cómpeta werden Moscatel-Trauben für Süßwein und Rosinen angebaut. Im und um das Dorf können Sie bei kleinen Kellereien probieren und kaufen.' },
        { name: 'La Maroma', text: 'Der höchste Gipfel der Gegend, 2.065 Meter, lässt sich von der Umgebung von Cómpeta und Canillas de Albaida aus besteigen. Eine lange, anstrengende Tour; nehmen Sie genug Wasser mit und meiden Sie die Sommerhitze.' },
        { name: 'Wandern in der Sierra Almijara', text: 'Vom Dorf führen viele Wege in die Berge, unter anderem zum Puerto de Cómpeta und Richtung Canillas de Albaida und Árchez.' },
      ],
      fiestas: [
        { name: 'Cruces de Mayo', when: '3. Mai', text: 'mit Blumenkreuzen im Dorf.' },
        { name: 'Sommerferia', when: 'Juli', text: 'das Dorffest.' },
        { name: 'Noche del Vino', when: '15. August', text: 'seit 1973 das große Weinfest mit kostenlosem Wein, Flamenco und traditionellem Traubentreten auf dem Platz.' },
      ],
    },
    living: {
      title: 'Wohnen in Cómpeta: Dorfhäuser, Villen, Fincas und Preise',
      description: 'Ein Haus in Cómpeta kaufen? Welche Immobilien es gibt, was sie kosten, die Versorgung im Dorf und worauf Sie bei Häusern in den Bergen achten sollten.',
      lead: 'In Cómpeta bekommen Sie mehr Platz für Ihr Geld als an der Küste. Abzuwägen sind die Fahrzeit, die Winter in der Höhe und der Zustand älterer Häuser.',
      sections: [
        { h: 'Welche Immobilien es gibt', p: [
          'Im Dorf traditionelle Dorfhäuser, oft mit Dachterrasse und Aussicht. Am Rand und an den Hängen Villen mit Pool. Im Außenbereich Fincas und <em>cortijos</em> mit Reben, Olivenbäumen und manchmal eigener Wasserquelle.',
        ] },
        { h: 'Was eine Immobilie kostet', p: [
          'Im Oktober 2026 lagen die durchschnittlichen Angebotspreise bei rund 2.000 € pro m² für Wohnungen und 2.500 € pro m² für Häuser (RealAdvisor), deutlich unter <a href="/de/orte/nerja/">Nerja</a> oder <a href="/de/orte/frigiliana/">Frigiliana</a>. Rechnen Sie mit rund 10% <a href="/de/ratgeber/kaufnebenkosten-spanien/">Kaufnebenkosten</a> und einem Renovierungsbudget.',
        ] },
        { h: 'Versorgung', p: [
          'Cómpeta hat ein Gesundheitszentrum, eine Apotheke, Supermärkte, Banken, eine Grundschule und viele Restaurants. Für weiterführende Schulen, große Supermärkte und das Krankenhaus fahren Sie nach Torrox, Torre del Mar oder Vélez-Málaga.',
        ] },
        { h: 'Vorsicht in den Bergen', p: [
          'Auf 640 Metern können die Winter kalt und feucht sein; gute Dämmung und Heizung sind kein Luxus. Bei Fincas außerhalb des Dorfes sind Zufahrt, Wasser und Strom sowie der rechtliche Status des Hauses die wichtigsten Punkte. Lesen Sie unsere Ratgeber <a href="/de/ratgeber/finca-kaufen-spanien/">Finca kaufen</a> und <a href="/de/ratgeber/afo-legalisierung-andalusien/">AFO und Legalisierung</a>.',
        ] },
        { h: 'Renovieren in Cómpeta', p: [
          'Viele Häuser in und um Cómpeta sind alt und wurden über die Jahre Schritt für Schritt erweitert. Typische Arbeiten sind das Abdichten von Dächern und Terrassen, feuchte Wände, Dämmung und der Einbau einer Heizung. Die Gassen im Dorf sind eng, was Materiallieferungen erschwert. Lassen Sie ein Haus vor dem Kauf <a href="/de/immobiliengutachten/">begutachten</a>.',
        ] },
      ],
    },
    faq: [
      { q: 'Wie weit ist Cómpeta vom Strand entfernt?', a: 'Etwa eine halbe Stunde über eine kurvige Bergstraße zur Küste bei Torrox Costa oder Algarrobo Costa.' },
      { q: 'Ist es in Cómpeta im Winter kalt?', a: 'Tagsüber ist es meist sonnig und mild, aber nachts kann es auf 640 Metern deutlich abkühlen. Gute Dämmung und Heizung sind nötig.' },
      { q: 'Leben viele Ausländer in Cómpeta?', a: 'Ja, fast die Hälfte der Einwohner hat eine ausländische Staatsangehörigkeit, darunter Briten, Niederländer, Belgier und Deutsche.' },
    ],
  },
  sv: {
    title: 'Cómpeta: bo och köpa i Axarquías bergsby',
    description: 'Allt om Cómpeta: vit bergsby på 640 meter, internationell gemenskap, Noche del Vino, bostadspriser och vad köp och renovering i bergen innebär.',
    lead: 'På 640 meters höjd, vid foten av Sierra Almijara, ligger Cómpeta: en vit bergsby med vinodlingar, utsikt ner till havet och nästan hälften av invånarna från utlandet.',
    intro: [
      'Cómpeta ligger högt upp i östra Axarquía, mot bergen i naturparken Sierras de Tejeda, Almijara y Alhama. Från byn ser du ut över kullar med vinrankor och olivträd ända ner till havet. Kusten vid Torrox och Algarrobo når du på cirka en halvtimme längs en slingrig väg.',
      'Byn har cirka 3 800 invånare, och nästan hälften har utländskt medborgarskap, en av de högsta andelarna i provinsen. Britter, nederländare, belgare, tyskar och skandinaver bor här året runt, vilket ger byn ett livligt socialt liv.',
      'Hjärtat är Plaza Almijara med kyrkan Asunción och dess höga mudéjartorn. Trakten är känd för moscatelvin och russin.',
    ],
    facts: [
      ['Invånare', 'cirka 3 800 (2025)'],
      ['Utländska invånare', 'nästan hälften'],
      ['Läge', 'berg, cirka 640 m'],
      ['Till kusten', 'cirka 30 minuter'],
      ['Málaga (flygplats)', 'cirka en timme med bil'],
      ['Prisnivå', 'medel, under kusten'],
    ],
    forWhom: 'För dig som söker lugn, natur och utsikt och inte har något emot att köra en halvtimme till stranden. Cómpeta lockar dem som bor här året runt: allt finns nära i byn och det finns en stor internationell gemenskap.',
    see: {
      title: 'Se och göra i Cómpeta: vin, berg och Noche del Vino',
      description: 'Vad du kan göra i Cómpeta: Plaza Almijara, vandra upp på La Maroma och i Sierra Almijara, vingårdarna och Noche del Vino den 15 augusti.',
      lead: 'Cómpeta är en bas för bergen, och en plats där du sätter dig på torget med ett glas av det lokala söta vinet.',
      items: [
        { name: 'Plaza Almijara och kyrkan', text: 'Torget framför 1500-talskyrkan Nuestra Señora de la Asunción, med sitt slanka torn i mudéjarstil, är byns hjärta, omgivet av uteserveringar och smala vita gränder.' },
        { name: 'Vin och russin', text: 'Runt Cómpeta odlas moscateldruvor för sött vin och russin. I och runt byn kan du provsmaka och köpa på små vingårdar.' },
        { name: 'La Maroma', text: 'Traktens högsta topp, 2 065 meter, kan bestigas från trakten kring Cómpeta och Canillas de Albaida. Det är en lång och tung vandring; ta med gott om vatten och undvik sommarhettan.' },
        { name: 'Vandra i Sierra Almijara', text: 'Många stigar går från byn upp i bergen, bland annat till Puerto de Cómpeta och mot Canillas de Albaida och Árchez.' },
      ],
      fiestas: [
        { name: 'Cruces de Mayo', when: '3 maj', text: 'med kors av blommor runt om i byn.' },
        { name: 'Sommarferian', when: 'juli', text: 'byns feria.' },
        { name: 'Noche del Vino', when: '15 augusti', text: 'den stora vinfesten sedan 1973, med gratis vin, flamenco och traditionell druvtrampning på torget.' },
      ],
    },
    living: {
      title: 'Bo i Cómpeta: byhus, villor, fincor och priser',
      description: 'Köpa hus i Cómpeta? Vilka bostäder som finns, vad de kostar, service i byn och vad du ska tänka på med hus i bergen.',
      lead: 'I Cómpeta får du mer utrymme för pengarna än vid kusten. Det du ska väga in: körtiden, vintrarna på höjd och skicket på äldre hus.',
      sections: [
        { h: 'Vilka bostäder som finns', p: [
          'I byn traditionella byhus, ofta med takterrass och utsikt. I utkanterna och på sluttningarna villor med pool. På landsbygden fincor och <em>cortijos</em> med vinrankor, olivträd och ibland en egen vattenkälla.',
        ] },
        { h: 'Vad en bostad kostar', p: [
          'I oktober 2026 låg det genomsnittliga utgångspriset kring 2 000 € per m² för lägenheter och 2 500 € per m² för hus (RealAdvisor), klart under <a href="/sv/orter/nerja/">Nerja</a> och <a href="/sv/orter/frigiliana/">Frigiliana</a>. Räkna med cirka 10 % i <a href="/sv/guider/kopa-hus-i-spanien-kostnader/">köpkostnader</a> och en renoveringsbudget.',
        ] },
        { h: 'Service', p: [
          'Cómpeta har vårdcentral, apotek, livsmedelsbutiker, banker, en grundskola och gott om restauranger. För gymnasium, stora stormarknader och sjukhuset åker du till Torrox, Torre del Mar eller Vélez-Málaga.',
        ] },
        { h: 'Se upp i bergen', p: [
          'På 640 meters höjd kan vintrarna vara kalla och fuktiga; god isolering och uppvärmning är ingen lyx. För fincor utanför byn är tillfartsvägen, vatten och el och husets rättsliga status det viktigaste. Läs våra guider om att <a href="/sv/guider/kopa-finca-i-spanien/">köpa finca</a> och om <a href="/sv/guider/afo-andalusien/">AFO och legalisering</a>.',
        ] },
        { h: 'Renovera i Cómpeta', p: [
          'Många hus i och runt Cómpeta är gamla och har byggts ut steg för steg genom åren. Typiska jobb är att täta tak och terrasser, åtgärda fuktiga väggar, isolera och installera värme. Byns gränder är smala, vilket gör leveranser svårare. Låt <a href="/sv/besiktning/">besiktiga</a> huset före köpet.',
        ] },
      ],
    },
    faq: [
      { q: 'Hur långt är det från Cómpeta till stranden?', a: 'Cirka en halvtimme längs en slingrig bergsväg till kusten vid Torrox Costa eller Algarrobo Costa.' },
      { q: 'Är det kallt i Cómpeta på vintern?', a: 'Dagarna är oftast soliga och milda, men nätterna på 640 meter kan bli kyliga. God isolering och uppvärmning behövs.' },
      { q: 'Bor det många utlänningar i Cómpeta?', a: 'Ja, nästan hälften av invånarna har utländskt medborgarskap, bland annat britter, nederländare, belgare, tyskar och skandinaver.' },
    ],
  },
};
export default content;
