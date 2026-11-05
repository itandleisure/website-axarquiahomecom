import type { PlaceContent } from './types';

// Feitenblad Rincón de la Victoria (november 2026)
// - Inwoners: 52.454 (INE, 1 januari 2025); 28,5 km²; circa 16 km naar het centrum van Málaga. Tot 1949 heette de gemeente Benagalbón.
// - Kernen: Rincón de la Victoria, La Cala del Moral, Torre de Benagalbón, Benagalbón (binnenland), Añoreta.
// - Cueva del Tesoro (grot van mariene oorsprong, BIC); Casa Fuerte de Bezmiliana (18e eeuw); Romeinse villa bij Torre de Benagalbón.
// - Stranden: La Cala del Moral (1,3 km), Rincón (3,6 km), Torre de Benagalbón (circa 700 m), Los Rubios (1,1 km).
// - Paseo marítimo met de tunnels van de oude spoorlijn Málaga–Vélez.
// - Fiesta's: Virgen del Carmen (16 juli), Virgen de la Victoria (september), verdiales in Benagalbón.
// - Woningprijzen: circa € 3.900 per m² appartementen, € 3.050 per m² huizen (RealAdvisor, oktober 2026).
const content: PlaceContent = {
  sources: [
    'https://es.hispanopedia.com/wiki/Rincón_de_la_Victoria',
    'https://realadvisor.es/es/precios-viviendas/municipio-rincon-de-la-victoria',
  ],
  nl: {
    title: 'Rincón de la Victoria: wonen en kopen aan zee, vlak bij Málaga',
    description: 'Alles over Rincón de la Victoria: stranden, de Cueva del Tesoro, de ligging op een kwartier van Málaga, woningprijzen en waar u op let bij kopen en verbouwen.',
    lead: 'Rincón de la Victoria is de eerste plaats van de Axarquía als u vanuit Málaga naar het oosten rijdt: een kuststad met een lange boulevard, op een kwartier van de stad.',
    intro: [
      'Rincón ligt aan de westkant van de Axarquía, ongeveer zestien kilometer van het centrum van Málaga. De gemeente telt ruim 52.000 inwoners en is de afgelopen decennia hard gegroeid, vooral door gezinnen die in Málaga werken. Bij de kust horen <a href="/nl/plaatsen/la-cala-del-moral/">La Cala del Moral</a>, Rincón zelf en Torre de Benagalbón; in de heuvels ligt het oude dorp Benagalbón, waar de gemeente tot 1949 naar vernoemd was.',
      'Het aandeel buitenlanders is hier lager dan in het oosten van de Axarquía. Wie in Rincón woont, heeft de voorzieningen van een middelgrote Spaanse stad en Málaga, met de luchthaven, het station en de ziekenhuizen, binnen handbereik.',
      'De bekendste bezienswaardigheid is de Cueva del Tesoro, een grot die door de zee is uitgesleten en als cultureel erfgoed is beschermd.',
    ],
    facts: [
      ['Inwoners', 'ruim 52.000 (2025)'],
      ['Buitenlandse inwoners', 'relatief weinig'],
      ['Ligging', 'kust, heuvels erachter'],
      ['Strand', 'circa 7 km kust'],
      ['Málaga (luchthaven)', 'circa 25 minuten rijden'],
      ['Prijsniveau', 'midden tot hoog'],
    ],
    forWhom: 'Voor wie aan zee wil wonen en Málaga dichtbij wil hebben, voor werk, school, cultuur of de luchthaven. Populair bij gezinnen en bij mensen die vaak heen en weer vliegen.',
    see: {
      title: 'Zien en doen in Rincón de la Victoria: Cueva del Tesoro, stranden en de boulevard',
      description: 'Wat te doen in Rincón de la Victoria: de Cueva del Tesoro, de Casa Fuerte de Bezmiliana, de stranden en de boulevard met de oude spoortunnels.',
      lead: 'Rincón is een plek voor strand en boulevard, met een paar bezienswaardigheden die verder weinig mensen kennen.',
      items: [
        { name: 'Cueva del Tesoro', text: 'Een grot die niet door regenwater maar door de zee is uitgesleten, een zeldzaamheid. Volgens de legende verborg een Moorse koning er een schat. De grot is te bezoeken met een rondleiding.' },
        { name: 'Casa Fuerte de Bezmiliana', text: 'Een achttiende-eeuws fort tegen piraten aan de kust, nu een cultureel centrum met tentoonstellingen.' },
        { name: 'Boulevard en spoortunnels', text: 'De boulevard loopt deels door de tunnels van de oude spoorlijn tussen Málaga en Vélez-Málaga. Te voet of op de fiets komt u langs alle stranden van de gemeente.' },
        { name: 'Stranden', text: 'De stranden van La Cala del Moral, Rincón, Torre de Benagalbón en Los Rubios, samen ruim zes kilometer. Rond de boulevard zitten veel <em>chiringuitos</em>, bekend om sardines aan het spit (<em>espetos</em>).' },
      ],
      fiestas: [
        { name: 'Virgen del Carmen', when: '16 juli', text: 'processie over zee met de vissersboten.' },
        { name: 'Virgen de la Victoria', when: 'september', text: 'de feria van Rincón.' },
        { name: 'Verdiales', when: 'door het jaar', text: 'in Benagalbón wordt de oude volksmuziek van de streek levend gehouden.' },
      ],
    },
    living: {
      title: 'Wonen in Rincón de la Victoria: appartementen, rijtjeshuizen en villa’s',
      description: 'Een huis kopen in Rincón de la Victoria? Welke woningen er zijn, wat ze kosten, voorzieningen en waar u op let bij kopen en verbouwen.',
      lead: 'Rincón is gewild door de nabijheid van Málaga. Er is veel nieuwbouw, en de prijzen zijn de laatste jaren flink gestegen.',
      sections: [
        { h: 'Wat voor woningen er zijn', p: [
          'Aan de boulevard en in het centrum appartementen, van oudere flats tot nieuwe complexen met zwembad. In wijken als Añoreta en tegen de heuvels rijtjeshuizen en villa’s, vaak met zeezicht. Rond Benagalbón landelijke huizen met grond.',
        ] },
        { h: 'Wat een woning kost', p: [
          'In oktober 2026 lag de gemiddelde vraagprijs rond de € 3.900 per m² voor appartementen en € 3.050 per m² voor huizen (RealAdvisor). Nieuwbouw aan de eerste lijn ligt daar ruim boven. Reken op ongeveer 10% <a href="/nl/gidsen/kosten-koper-spanje/">kosten koper</a>.',
        ] },
        { h: 'Voorzieningen', p: [
          'Rincón heeft gezondheidscentra, scholen tot en met de middelbare school, grote supermarkten en een volledig winkelaanbod. Ziekenhuizen, de luchthaven en het hogesnelheidsstation liggen in Málaga.',
        ] },
        { h: 'Let op bij kopen', p: [
          'Bij oudere complexen aan de boulevard spelen dezelfde punten als elders aan de kust: de staat van gevels, daken en leidingen en geplande kosten van de vereniging van eigenaren. Bij huizen in de heuvels: controleer of uitbreidingen en zwembaden vergund zijn.',
        ] },
        { h: 'Verbouwen in Rincón', p: [
          'Veel kopers moderniseren een appartement of rijtjeshuis: keuken, badkamer, vloeren, ramen en airco. Bij villa’s op de hellingen gaat het vaker om terrassen, keermuren en zwembaden. Laat een woning vóór aankoop <a href="/nl/aankoopkeuring/">keuren</a>.',
        ] },
      ],
    },
    faq: [
      { q: 'Hoe ver is Rincón de la Victoria van Málaga?', a: 'Ongeveer zestien kilometer naar het centrum, een kwartier tot twintig minuten met de auto. Er rijden ook stadsbussen.' },
      { q: 'Hoort Rincón de la Victoria bij de Axarquía?', a: 'Ja, het is de meest westelijke kustgemeente van de Axarquía, direct naast de stad Málaga.' },
      { q: 'Is Rincón geschikt voor gezinnen?', a: 'Ja. Er zijn veel scholen en sportvoorzieningen, en veel inwoners werken in Málaga.' },
    ],
  },
  en: {
    title: 'Rincón de la Victoria: living and buying by the sea, close to Málaga',
    description: 'All about Rincón de la Victoria: beaches, the Cueva del Tesoro, its location a quarter of an hour from Málaga, property prices and what to know about buying and renovating.',
    lead: 'Rincón de la Victoria is the first town in the Axarquía as you drive east from Málaga: a seaside town with a long promenade, a quarter of an hour from the city.',
    intro: [
      'Rincón lies on the western edge of the Axarquía, about sixteen kilometres from central Málaga. The municipality has over 52,000 residents and has grown fast in recent decades, mainly through families who work in Málaga. On the coast are <a href="/en/places/la-cala-del-moral/">La Cala del Moral</a>, Rincón itself and Torre de Benagalbón; in the hills is the old village of Benagalbón, which gave the municipality its name until 1949.',
      'The share of foreign residents is lower here than in the east of the Axarquía. Living in Rincón gives you the facilities of a mid-sized Spanish town, with Málaga, its airport, station and hospitals, within easy reach.',
      'Its best-known sight is the Cueva del Tesoro, a cave carved out by the sea and protected as cultural heritage.',
    ],
    facts: [
      ['Population', 'over 52,000 (2025)'],
      ['Foreign residents', 'relatively few'],
      ['Setting', 'coast, hills behind'],
      ['Beach', 'about 7 km of coastline'],
      ['Málaga airport', 'about 25 minutes by car'],
      ['Price level', 'medium to high'],
    ],
    forWhom: 'People who want to live by the sea with Málaga close by, for work, school, culture or the airport. Popular with families and with people who fly back and forth often.',
    see: {
      title: 'Things to do in Rincón de la Victoria: Cueva del Tesoro, beaches and the promenade',
      description: 'What to do in Rincón de la Victoria: the Cueva del Tesoro, the Casa Fuerte de Bezmiliana, the beaches and the promenade with the old railway tunnels.',
      lead: 'Rincón is a place for beach and promenade, with a few sights that few people know about.',
      items: [
        { name: 'Cueva del Tesoro', text: 'A cave carved not by rainwater but by the sea, which is rare. Legend has it that a Moorish king hid treasure here. You can visit it on a guided tour.' },
        { name: 'Casa Fuerte de Bezmiliana', text: 'An eighteenth-century fort built against pirates on the coast, now a cultural centre with exhibitions.' },
        { name: 'Promenade and railway tunnels', text: 'The promenade runs partly through the tunnels of the old railway between Málaga and Vélez-Málaga. On foot or by bike you pass all the municipality’s beaches.' },
        { name: 'Beaches', text: 'The beaches of La Cala del Moral, Rincón, Torre de Benagalbón and Los Rubios, more than six kilometres together. Along the promenade are many <em>chiringuitos</em>, known for sardines grilled on skewers (<em>espetos</em>).' },
      ],
      fiestas: [
        { name: 'Virgen del Carmen', when: '16 July', text: 'procession at sea with the fishing boats.' },
        { name: 'Virgen de la Victoria', when: 'September', text: 'Rincón’s feria.' },
        { name: 'Verdiales', when: 'throughout the year', text: 'Benagalbón keeps the area’s old folk music alive.' },
      ],
    },
    living: {
      title: 'Living in Rincón de la Victoria: apartments, townhouses and villas',
      description: 'Buying a home in Rincón de la Victoria? The types of property, what they cost, facilities and what to watch for when buying and renovating.',
      lead: 'Rincón is in demand because Málaga is so close. There is a lot of new building, and prices have risen sharply in recent years.',
      sections: [
        { h: 'Types of property', p: [
          'On the promenade and in the centre, apartments, from older blocks to new complexes with pools. In areas such as Añoreta and against the hills, townhouses and villas, often with sea views. Around Benagalbón, country houses with land.',
        ] },
        { h: 'What a home costs', p: [
          'In October 2026 average asking prices were around €3,900 per m² for apartments and €3,050 per m² for houses (RealAdvisor). Front-line new builds cost well above that. Allow around 10% for <a href="/en/guides/buying-costs-in-spain/">buying costs</a>.',
        ] },
        { h: 'Facilities', p: [
          'Rincón has health centres, schools up to secondary level, large supermarkets and a full range of shops. Hospitals, the airport and the high-speed rail station are in Málaga.',
        ] },
        { h: 'Watch out when buying', p: [
          'With older complexes on the promenade the same points apply as elsewhere on the coast: the condition of façades, roofs and pipes and planned costs of the owners’ association. With houses in the hills, check that extensions and pools have permits.',
        ] },
        { h: 'Renovating in Rincón', p: [
          'Many buyers modernise an apartment or townhouse: kitchen, bathroom, floors, windows and air conditioning. With villas on the slopes it is more often terraces, retaining walls and pools. Have a property <a href="/en/property-survey/">surveyed</a> before you buy.',
        ] },
      ],
    },
    faq: [
      { q: 'How far is Rincón de la Victoria from Málaga?', a: 'About sixteen kilometres to the centre, fifteen to twenty minutes by car. There are also city buses.' },
      { q: 'Is Rincón de la Victoria part of the Axarquía?', a: 'Yes, it is the westernmost coastal municipality of the Axarquía, right next to the city of Málaga.' },
      { q: 'Is Rincón good for families?', a: 'Yes. There are plenty of schools and sports facilities, and many residents work in Málaga.' },
    ],
  },
  de: {
    title: 'Rincón de la Victoria: Wohnen und Kaufen am Meer, nahe Málaga',
    description: 'Alles über Rincón de la Victoria: Strände, die Cueva del Tesoro, die Lage eine Viertelstunde von Málaga, Immobilienpreise und was Sie zu Kauf und Renovierung wissen sollten.',
    lead: 'Rincón de la Victoria ist der erste Ort der Axarquía, wenn Sie von Málaga nach Osten fahren: eine Küstenstadt mit langer Promenade, eine Viertelstunde von der Stadt.',
    intro: [
      'Rincón liegt am Westrand der Axarquía, etwa sechzehn Kilometer vom Zentrum Málagas. Die Gemeinde hat gut 52.000 Einwohner und ist in den letzten Jahrzehnten stark gewachsen, vor allem durch Familien, die in Málaga arbeiten. An der Küste liegen <a href="/de/orte/la-cala-del-moral/">La Cala del Moral</a>, Rincón selbst und Torre de Benagalbón; in den Hügeln das alte Dorf Benagalbón, nach dem die Gemeinde bis 1949 benannt war.',
      'Der Ausländeranteil ist hier niedriger als im Osten der Axarquía. Wer in Rincón wohnt, hat die Einrichtungen einer mittelgroßen spanischen Stadt und Málaga mit Flughafen, Bahnhof und Krankenhäusern in Reichweite.',
      'Die bekannteste Sehenswürdigkeit ist die Cueva del Tesoro, eine vom Meer ausgewaschene Höhle, die als Kulturgut geschützt ist.',
    ],
    facts: [
      ['Einwohner', 'gut 52.000 (2025)'],
      ['Ausländische Einwohner', 'relativ wenige'],
      ['Lage', 'Küste, Hügel dahinter'],
      ['Strand', 'etwa 7 km Küste'],
      ['Flughafen Málaga', 'etwa 25 Minuten mit dem Auto'],
      ['Preisniveau', 'mittel bis hoch'],
    ],
    forWhom: 'Für alle, die am Meer wohnen und Málaga in der Nähe haben möchten, für Arbeit, Schule, Kultur oder den Flughafen. Beliebt bei Familien und bei Menschen, die oft hin- und herfliegen.',
    see: {
      title: 'Sehenswertes in Rincón de la Victoria: Cueva del Tesoro, Strände und Promenade',
      description: 'Was man in Rincón de la Victoria unternehmen kann: die Cueva del Tesoro, die Casa Fuerte de Bezmiliana, die Strände und die Promenade mit den alten Bahntunneln.',
      lead: 'Rincón ist ein Ort für Strand und Promenade, mit einigen Sehenswürdigkeiten, die nur wenige kennen.',
      items: [
        { name: 'Cueva del Tesoro', text: 'Eine Höhle, die nicht vom Regenwasser, sondern vom Meer ausgewaschen wurde, eine Seltenheit. Der Legende nach versteckte ein maurischer König hier einen Schatz. Besichtigung mit Führung.' },
        { name: 'Casa Fuerte de Bezmiliana', text: 'Eine Festung aus dem 18. Jahrhundert zum Schutz vor Piraten, heute ein Kulturzentrum mit Ausstellungen.' },
        { name: 'Promenade und Bahntunnel', text: 'Die Promenade führt teilweise durch die Tunnel der alten Bahnlinie zwischen Málaga und Vélez-Málaga. Zu Fuß oder mit dem Rad kommen Sie an allen Stränden der Gemeinde vorbei.' },
        { name: 'Strände', text: 'Die Strände von La Cala del Moral, Rincón, Torre de Benagalbón und Los Rubios, zusammen über sechs Kilometer. An der Promenade gibt es viele <em>chiringuitos</em>, bekannt für Sardinen am Spieß (<em>espetos</em>).' },
      ],
      fiestas: [
        { name: 'Virgen del Carmen', when: '16. Juli', text: 'Prozession auf dem Meer mit den Fischerbooten.' },
        { name: 'Virgen de la Victoria', when: 'September', text: 'die Feria von Rincón.' },
        { name: 'Verdiales', when: 'das ganze Jahr', text: 'in Benagalbón wird die alte Volksmusik der Gegend lebendig gehalten.' },
      ],
    },
    living: {
      title: 'Wohnen in Rincón de la Victoria: Apartments, Reihenhäuser und Villen',
      description: 'Ein Haus in Rincón de la Victoria kaufen? Welche Immobilien es gibt, was sie kosten, die Versorgung und worauf Sie bei Kauf und Renovierung achten sollten.',
      lead: 'Rincón ist wegen der Nähe zu Málaga gefragt. Es wird viel neu gebaut, und die Preise sind in den letzten Jahren stark gestiegen.',
      sections: [
        { h: 'Welche Immobilien es gibt', p: [
          'An der Promenade und im Zentrum Wohnungen, von älteren Blocks bis zu neuen Anlagen mit Pool. In Vierteln wie Añoreta und an den Hügeln Reihenhäuser und Villen, oft mit Meerblick. Rund um Benagalbón Landhäuser mit Grundstück.',
        ] },
        { h: 'Was eine Immobilie kostet', p: [
          'Im Oktober 2026 lagen die durchschnittlichen Angebotspreise bei rund 3.900 € pro m² für Wohnungen und 3.050 € pro m² für Häuser (RealAdvisor). Neubauten in erster Linie liegen deutlich darüber. Rechnen Sie mit rund 10% <a href="/de/ratgeber/kaufnebenkosten-spanien/">Kaufnebenkosten</a>.',
        ] },
        { h: 'Versorgung', p: [
          'Rincón hat Gesundheitszentren, Schulen bis zur Oberstufe, große Supermärkte und ein vollständiges Einkaufsangebot. Krankenhäuser, Flughafen und Hochgeschwindigkeitsbahnhof liegen in Málaga.',
        ] },
        { h: 'Worauf Sie beim Kauf achten sollten', p: [
          'Bei älteren Anlagen an der Promenade gilt dasselbe wie überall an der Küste: Zustand von Fassaden, Dächern und Leitungen und geplante Kosten der Eigentümergemeinschaft. Bei Häusern in den Hügeln: Prüfen Sie, ob Anbauten und Pools genehmigt sind.',
        ] },
        { h: 'Renovieren in Rincón', p: [
          'Viele Käufer modernisieren eine Wohnung oder ein Reihenhaus: Küche, Bad, Böden, Fenster und Klimaanlage. Bei Villen an den Hängen geht es öfter um Terrassen, Stützmauern und Pools. Lassen Sie eine Immobilie vor dem Kauf <a href="/de/immobiliengutachten/">begutachten</a>.',
        ] },
      ],
    },
    faq: [
      { q: 'Wie weit ist Rincón de la Victoria von Málaga entfernt?', a: 'Etwa sechzehn Kilometer bis ins Zentrum, fünfzehn bis zwanzig Minuten mit dem Auto. Es fahren auch Stadtbusse.' },
      { q: 'Gehört Rincón de la Victoria zur Axarquía?', a: 'Ja, es ist die westlichste Küstengemeinde der Axarquía, direkt neben der Stadt Málaga.' },
      { q: 'Ist Rincón für Familien geeignet?', a: 'Ja. Es gibt viele Schulen und Sportanlagen, und viele Einwohner arbeiten in Málaga.' },
    ],
  },
  sv: {
    title: 'Rincón de la Victoria: bo och köpa vid havet, nära Málaga',
    description: 'Allt om Rincón de la Victoria: stränder, Cueva del Tesoro, läget en kvart från Málaga, bostadspriser och vad du ska veta om köp och renovering.',
    lead: 'Rincón de la Victoria är den första orten i Axarquía när du kör österut från Málaga: en kuststad med lång strandpromenad, en kvart från storstaden.',
    intro: [
      'Rincón ligger i västra utkanten av Axarquía, cirka sexton kilometer från Málagas centrum. Kommunen har över 52 000 invånare och har vuxit snabbt de senaste årtiondena, främst genom familjer som arbetar i Málaga. Vid kusten ligger <a href="/sv/orter/la-cala-del-moral/">La Cala del Moral</a>, själva Rincón och Torre de Benagalbón; i kullarna den gamla byn Benagalbón, som gav kommunen dess namn fram till 1949.',
      'Andelen utländska invånare är lägre här än i östra Axarquía. I Rincón får du servicen i en medelstor spansk stad, med Málaga, flygplatsen, järnvägsstationen och sjukhusen inom bekvämt avstånd.',
      'Den mest kända sevärdheten är Cueva del Tesoro, en grotta som havet har format och som är skyddad som kulturarv.',
    ],
    facts: [
      ['Invånare', 'över 52 000 (2025)'],
      ['Utländska invånare', 'relativt få'],
      ['Läge', 'kust, kullar bakom'],
      ['Strand', 'cirka 7 km kustlinje'],
      ['Málaga (flygplats)', 'cirka 25 minuter med bil'],
      ['Prisnivå', 'medel till hög'],
    ],
    forWhom: 'För dig som vill bo vid havet med Málaga nära, för arbete, skola, kultur eller flygplatsen. Populärt bland barnfamiljer och bland dem som ofta flyger fram och tillbaka.',
    see: {
      title: 'Se och göra i Rincón de la Victoria: Cueva del Tesoro, stränder och strandpromenaden',
      description: 'Vad du kan göra i Rincón de la Victoria: Cueva del Tesoro, Casa Fuerte de Bezmiliana, stränderna och strandpromenaden med de gamla järnvägstunnlarna.',
      lead: 'Rincón är en plats för strand och strandpromenad, med några sevärdheter som få känner till.',
      items: [
        { name: 'Cueva del Tesoro', text: 'En grotta som inte formats av regnvatten utan av havet, vilket är ovanligt. Enligt legenden gömde en morisk kung en skatt här. Du kan besöka den med guide.' },
        { name: 'Casa Fuerte de Bezmiliana', text: 'Ett fort från 1700-talet som byggdes mot pirater vid kusten, i dag ett kulturhus med utställningar.' },
        { name: 'Strandpromenaden och järnvägstunnlarna', text: 'Strandpromenaden går delvis genom tunnlarna på den gamla järnvägen mellan Málaga och Vélez-Málaga. Till fots eller på cykel passerar du alla kommunens stränder.' },
        { name: 'Stränder', text: 'Stränderna i La Cala del Moral, Rincón, Torre de Benagalbón och Los Rubios, sammanlagt över sex kilometer. Längs strandpromenaden ligger många <em>chiringuitos</em>, kända för sardiner grillade på spett (<em>espetos</em>).' },
      ],
      fiestas: [
        { name: 'Virgen del Carmen', when: '16 juli', text: 'procession till sjöss med fiskebåtarna.' },
        { name: 'Virgen de la Victoria', when: 'september', text: 'Rincóns feria.' },
        { name: 'Verdiales', when: 'hela året', text: 'i Benagalbón lever traktens gamla folkmusik kvar.' },
      ],
    },
    living: {
      title: 'Bo i Rincón de la Victoria: lägenheter, radhus och villor',
      description: 'Köpa bostad i Rincón de la Victoria? Vilka bostäder som finns, vad de kostar, service och vad du ska tänka på vid köp och renovering.',
      lead: 'Rincón är eftertraktat eftersom Málaga ligger så nära. Det byggs mycket nytt, och priserna har stigit kraftigt de senaste åren.',
      sections: [
        { h: 'Vilka bostäder som finns', p: [
          'Längs strandpromenaden och i centrum lägenheter, från äldre hus till nya komplex med pool. I områden som Añoreta och mot kullarna radhus och villor, ofta med havsutsikt. Runt Benagalbón hus på landet med mark.',
        ] },
        { h: 'Vad en bostad kostar', p: [
          'I oktober 2026 låg det genomsnittliga utgångspriset kring 3 900 € per m² för lägenheter och 3 050 € per m² för hus (RealAdvisor). Nyproduktion i första raden kostar betydligt mer. Räkna med cirka 10 % i <a href="/sv/guider/kopa-hus-i-spanien-kostnader/">köpkostnader</a>.',
        ] },
        { h: 'Service', p: [
          'Rincón har vårdcentraler, skolor upp till gymnasienivå, stora stormarknader och ett komplett utbud av affärer. Sjukhus, flygplats och höghastighetstågens station finns i Málaga.',
        ] },
        { h: 'Se upp vid köp', p: [
          'För äldre komplex längs strandpromenaden gäller samma sak som på andra håll vid kusten: skicket på fasader, tak och rör och planerade kostnader i samfälligheten (<em>comunidad</em>). För hus i kullarna, kontrollera att tillbyggnader och pool har tillstånd.',
        ] },
        { h: 'Renovera i Rincón', p: [
          'Många köpare moderniserar en lägenhet eller ett radhus: kök, badrum, golv, fönster och luftkonditionering. För villor på sluttningarna handlar det oftare om terrasser, stödmurar och pooler. Låt <a href="/sv/besiktning/">besiktiga</a> bostaden före köpet.',
        ] },
      ],
    },
    faq: [
      { q: 'Hur långt är det från Rincón de la Victoria till Málaga?', a: 'Cirka sexton kilometer till centrum, femton till tjugo minuter med bil. Det går också stadsbussar.' },
      { q: 'Hör Rincón de la Victoria till Axarquía?', a: 'Ja, det är Axarquías västligaste kustkommun, alldeles intill staden Málaga.' },
      { q: 'Passar Rincón för barnfamiljer?', a: 'Ja. Här finns gott om skolor och idrottsanläggningar, och många invånare arbetar i Málaga.' },
    ],
  },
};
export default content;
