import type { PlaceContent } from './types';

// Feitenblad Vélez-Málaga (november 2026)
// - Inwoners: circa 85.400 (volkstelling 2023); hoofdplaats van de Axarquía. Kernen: Torre del Mar (23.481), Caleta de Vélez (4.169),
//   Benajarafe (3.863), plus Almayate, Chilches, Lagos, Trapiche, Cajiz e.a.
// - Circa 37 km naar Málaga. Ziekenhuis Hospital Comarcal de la Axarquía.
// - Fortaleza (Moorse burcht), Santa María la Mayor, San Juan Bautista; Caleta de Vélez: enige haven van de oostelijke Costa del Sol (236 ligplaatsen, vissersvloot).
// - Circa 10.900 buitenlandse inwoners (2022), vooral Marokkanen, Britten, Roemenen, Italianen, Duitsers.
// - Woningprijzen: circa € 3.200 per m² appartementen, € 2.500 per m² huizen; Torre del Mar (29740) € 3.850 / € 2.900 (RealAdvisor, oktober 2026).
const content: PlaceContent = {
  sources: [
    'https://es.hispanopedia.com/wiki/Vélez-Málaga',
    'https://realadvisor.es/es/precios-viviendas/municipio-velez-malaga',
    'https://epa.com.es/padron/malaga/nacionalidades-en-velez-malaga/',
  ],
  nl: {
    title: 'Vélez-Málaga: wonen en kopen in de hoofdstad van de Axarquía',
    description: 'Alles over Vélez-Málaga: de stad, de kustplaatsen Torre del Mar, Caleta de Vélez en Benajarafe, voorzieningen, woningprijzen en waar u op let bij kopen en verbouwen.',
    lead: 'Vélez-Málaga is de hoofdstad van de Axarquía: een echte Spaanse stad met ziekenhuis, markten en winkels, en aan zee de badplaatsen Torre del Mar, Caleta de Vélez en Benajarafe.',
    intro: [
      'De gemeente Vélez-Málaga is met ruim 85.000 inwoners veruit de grootste van de Axarquía. De stad zelf ligt een paar kilometer landinwaarts, op een heuvel met de Moorse burcht, de Fortaleza. Aan de kust liggen <a href="/nl/plaatsen/torre-del-mar/">Torre del Mar</a>, met zijn lange boulevard, de vissershaven van <a href="/nl/plaatsen/caleta-de-velez/">Caleta de Vélez</a> en <a href="/nl/plaatsen/benajarafe/">Benajarafe</a>, met rustigere stranden richting Málaga.',
      'Anders dan in Nerja of Torrox is Vélez vooral een Spaanse stad: het aandeel buitenlanders is lager, en het leven draait om werk, school en familie. Voor wie in Spanje wil wonen en niet alleen overwinteren, is dat een voordeel. Alles is er: het ziekenhuis van de Axarquía, scholen, grote winkels, een busstation en de snelweg naar Málaga (ongeveer 37 kilometer).',
      'Tussen de stad en de bergen liggen dorpjes als Trapiche, Cajiz en Lagos, met avocado- en mangoplantages en landelijke huizen.',
    ],
    facts: [
      ['Inwoners', 'ruim 85.000'],
      ['Buitenlandse inwoners', 'circa 13%'],
      ['Ligging', 'kust, stad en heuvels'],
      ['Stad tot strand', 'circa 4 km'],
      ['Málaga (luchthaven)', 'circa 40 minuten rijden'],
      ['Prijsniveau', 'gemiddeld'],
    ],
    forWhom: 'Voor wie het hele jaar in Spanje woont en alle voorzieningen dichtbij wil, met een Spaans karakter. Torre del Mar is populair bij overwinteraars en gezinnen; de dorpjes in het binnenland bij wie ruimte zoekt.',
    see: {
      title: 'Zien en doen in Vélez-Málaga: Fortaleza, Torre del Mar en de haven van Caleta',
      description: 'Wat te doen in Vélez-Málaga: de Fortaleza en de oude stad, de boulevard van Torre del Mar, de vissershaven van Caleta de Vélez, stranden en feesten.',
      lead: 'Vélez combineert een historische stad met een lange kust. In één dag ziet u een Moorse burcht, een vismarkt en een strand.',
      items: [
        { name: 'De Fortaleza en de oude stad', text: 'Boven de stad staan de toren en muren van de Moorse burcht, met uitzicht over de vallei en de zee. Daaronder liggen de oude wijken met de kerken Santa María la Mayor en San Juan Bautista.' },
        { name: 'Boulevard van Torre del Mar', text: 'Een lange boulevard met palmen, terrassen en strandtenten. ’s Avonds is het een van de levendigste plekken van de kust.' },
        { name: 'Haven van Caleta de Vélez', text: 'De enige haven van de oostelijke Costa del Sol, met een jachthaven en een grote vissersvloot. Rond de haven zitten visrestaurants waar de vangst van de dag op tafel komt.' },
        { name: 'Stranden', text: 'Van Benajarafe tot Torre del Mar: brede zand- en kiezelstranden, met onder meer Valle Niza. Rustiger dan het centrum van Torre del Mar zijn de stranden van Almayate en Benajarafe.' },
      ],
      fiestas: [
        { name: 'Semana Santa', when: 'maart of april', text: 'de processies in Vélez-Málaga zijn de belangrijkste van de Axarquía.' },
        { name: 'Virgen del Carmen', when: 'juli', text: 'processies over zee in Torre del Mar en Caleta de Vélez.' },
        { name: 'Feria de San Miguel', when: 'eind september', text: 'de grote feria van de stad.' },
      ],
    },
    living: {
      title: 'Wonen in Vélez-Málaga: stad, kust en platteland',
      description: 'Een huis kopen in Vélez-Málaga, Torre del Mar of Caleta? Welke woningen er zijn, wat ze kosten, voorzieningen en waar u op let bij kopen en verbouwen.',
      lead: 'Vélez-Málaga heeft het grootste aanbod van de Axarquía, van appartementen aan zee tot rijtjeshuizen in de stad en landhuizen tussen de avocado’s.',
      sections: [
        { h: 'Wat voor woningen er zijn', p: [
          'In Torre del Mar en Caleta vooral appartementen, van oudere complexen tot nieuwbouw. In de stad Vélez appartementen en rijtjeshuizen, vaak goedkoper dan aan de kust. In het buitengebied landhuizen en villa’s met grond, soms met een avocado- of mangoplantage.',
        ] },
        { h: 'Wat een woning kost', p: [
          'In oktober 2026 lag de gemiddelde vraagprijs in de gemeente rond de € 3.200 per m² voor appartementen en € 2.500 per m² voor huizen. In Torre del Mar ligt het voor appartementen hoger, rond de € 3.850 per m² (RealAdvisor). Reken op ongeveer 10% <a href="/nl/gidsen/kosten-koper-spanje/">kosten koper</a>.',
        ] },
        { h: 'Voorzieningen', p: [
          'Hier zit het ziekenhuis van de Axarquía, met daarnaast gezondheidscentra in de stad en de kustplaatsen, middelbare scholen, grote supermarkten, een overdekte markt en een busstation. Málaga en de luchthaven zijn via de A-7 binnen ongeveer 40 minuten bereikbaar.',
        ] },
        { h: 'Let op in het buitengebied', p: [
          'Tussen de plantages staan veel huizen die in fases zijn gebouwd of uitgebreid. Controleer de juridische status, de toegangsweg en het water: in droge jaren is irrigatiewater in de Axarquía schaars. Lees onze gidsen over <a href="/nl/gidsen/finca-kopen-in-spanje/">finca kopen</a> en <a href="/nl/gidsen/afo-legaliseren-andalusie/">AFO en legaliseren</a>.',
        ] },
        { h: 'Verbouwen in Vélez-Málaga', p: [
          'Aan de kust gaat het vooral om het moderniseren van appartementen: keuken, badkamer, vloeren en airco. In de stad en op het platteland om daken, vocht, isolatie en uitbreidingen. Een vergunning vraagt u aan bij de gemeente Vélez-Málaga, ook voor de kustplaatsen. Laat een woning vóór aankoop <a href="/nl/aankoopkeuring/">keuren</a>.',
        ] },
      ],
    },
    faq: [
      { q: 'Horen Torre del Mar en Caleta de Vélez bij Vélez-Málaga?', a: 'Ja. Torre del Mar, Caleta de Vélez, Benajarafe, Almayate en een aantal dorpjes in het binnenland vallen allemaal onder de gemeente Vélez-Málaga.' },
      { q: 'Waar is het ziekenhuis van de Axarquía?', a: 'Het Hospital Comarcal de la Axarquía ligt in Vélez-Málaga, tussen de stad en Torre del Mar.' },
      { q: 'Wonen er veel buitenlanders in Vélez-Málaga?', a: 'Minder dan in Nerja of Torrox: rond de 13% van de inwoners. In Torre del Mar en Caleta wonen meer buitenlanders dan in de stad zelf.' },
    ],
  },
  en: {
    title: 'Vélez-Málaga: living and buying in the capital of the Axarquía',
    description: 'All about Vélez-Málaga: the town, the coastal resorts of Torre del Mar, Caleta de Vélez and Benajarafe, facilities, property prices and what to know about buying and renovating.',
    lead: 'Vélez-Málaga is the capital of the Axarquía: a real Spanish town with a hospital, markets and shops, and on the sea the resorts of Torre del Mar, Caleta de Vélez and Benajarafe.',
    intro: [
      'With over 85,000 residents, Vélez-Málaga is by far the largest municipality in the Axarquía. The town itself lies a few kilometres inland, on a hill topped by the Moorish fortress, the Fortaleza. On the coast are <a href="/en/places/torre-del-mar/">Torre del Mar</a>, with its long promenade, the fishing port of <a href="/en/places/caleta-de-velez/">Caleta de Vélez</a> and <a href="/en/places/benajarafe/">Benajarafe</a>, with quieter beaches towards Málaga.',
      'Unlike Nerja or Torrox, Vélez is mainly a Spanish town: the share of foreigners is lower and life revolves around work, school and family. For anyone who wants to live in Spain rather than just spend the winter, that is an advantage. Everything is here: the Axarquía’s hospital, schools, large shops, a bus station and the motorway to Málaga (about 37 kilometres).',
      'Between the town and the mountains are hamlets such as Trapiche, Cajiz and Lagos, with avocado and mango plantations and country houses.',
    ],
    facts: [
      ['Population', 'over 85,000'],
      ['Foreign residents', 'about 13%'],
      ['Setting', 'coast, town and hills'],
      ['Town to beach', 'about 4 km'],
      ['Málaga airport', 'about 40 minutes by car'],
      ['Price level', 'average'],
    ],
    forWhom: 'People who live in Spain year-round and want every facility close by, with a Spanish character. Torre del Mar is popular with winter residents and families; the inland hamlets with those looking for space.',
    see: {
      title: 'Things to do in Vélez-Málaga: the Fortaleza, Torre del Mar and Caleta harbour',
      description: 'What to do in Vélez-Málaga: the Fortaleza and old town, the Torre del Mar promenade, the Caleta de Vélez fishing port, beaches and fiestas.',
      lead: 'Vélez combines a historic town with a long coastline. In one day you can see a Moorish fortress, a fish market and a beach.',
      items: [
        { name: 'The Fortaleza and the old town', text: 'Above the town stand the tower and walls of the Moorish fortress, with views over the valley and the sea. Below are the old quarters with the churches of Santa María la Mayor and San Juan Bautista.' },
        { name: 'Torre del Mar promenade', text: 'A long promenade with palm trees, terraces and beach bars. In the evening it is one of the liveliest spots on the coast.' },
        { name: 'Caleta de Vélez harbour', text: 'The only port on the eastern Costa del Sol, with a marina and a large fishing fleet. Around the harbour are fish restaurants serving the day’s catch.' },
        { name: 'Beaches', text: 'From Benajarafe to Torre del Mar: wide sand and shingle beaches, including Valle Niza. The beaches of Almayate and Benajarafe are quieter than central Torre del Mar.' },
      ],
      fiestas: [
        { name: 'Semana Santa', when: 'March or April', text: 'the processions in Vélez-Málaga are the most important in the Axarquía.' },
        { name: 'Virgen del Carmen', when: 'July', text: 'processions at sea in Torre del Mar and Caleta de Vélez.' },
        { name: 'Feria de San Miguel', when: 'late September', text: 'the town’s big feria.' },
      ],
    },
    living: {
      title: 'Living in Vélez-Málaga: town, coast and countryside',
      description: 'Buying a home in Vélez-Málaga, Torre del Mar or Caleta? The types of property, what they cost, facilities and what to watch for when buying and renovating.',
      lead: 'Vélez-Málaga has the widest choice in the Axarquía, from seaside apartments to townhouses and country houses among the avocado trees.',
      sections: [
        { h: 'Types of property', p: [
          'In Torre del Mar and Caleta, mostly apartments, from older complexes to new builds. In the town of Vélez, apartments and townhouses, often cheaper than on the coast. In the countryside, country houses and villas with land, sometimes with an avocado or mango plantation.',
        ] },
        { h: 'What a home costs', p: [
          'In October 2026 average asking prices in the municipality were around €3,200 per m² for apartments and €2,500 per m² for houses. Apartments in Torre del Mar cost more, around €3,850 per m² (RealAdvisor). Allow around 10% for <a href="/en/guides/buying-costs-in-spain/">buying costs</a>.',
        ] },
        { h: 'Facilities', p: [
          'The Axarquía’s hospital is here, along with health centres in the town and on the coast, secondary schools, large supermarkets, a covered market and a bus station. Málaga and the airport are about 40 minutes away on the A-7.',
        ] },
        { h: 'Watch out in the countryside', p: [
          'Among the plantations are many houses built or extended in stages. Check the legal status, the access track and the water: in dry years irrigation water is scarce in the Axarquía. Read our guides to <a href="/en/guides/buying-a-finca-in-spain/">buying a finca</a> and <a href="/en/guides/afo-legalisation-andalusia/">AFO and legalisation</a>.',
        ] },
        { h: 'Renovating in Vélez-Málaga', p: [
          'On the coast it is mostly about modernising apartments: kitchen, bathroom, floors and air conditioning. In the town and countryside it is roofs, damp, insulation and extensions. Permits come from Vélez-Málaga town hall, also for the coastal resorts. Have a property <a href="/en/property-survey/">surveyed</a> before you buy.',
        ] },
      ],
    },
    faq: [
      { q: 'Are Torre del Mar and Caleta de Vélez part of Vélez-Málaga?', a: 'Yes. Torre del Mar, Caleta de Vélez, Benajarafe, Almayate and several inland hamlets all belong to the municipality of Vélez-Málaga.' },
      { q: 'Where is the Axarquía’s hospital?', a: 'The Hospital Comarcal de la Axarquía is in Vélez-Málaga, between the town and Torre del Mar.' },
      { q: 'Do many foreigners live in Vélez-Málaga?', a: 'Fewer than in Nerja or Torrox: about 13% of residents. Torre del Mar and Caleta have more foreign residents than the town itself.' },
    ],
  },
  de: {
    title: 'Vélez-Málaga: Wohnen und Kaufen in der Hauptstadt der Axarquía',
    description: 'Alles über Vélez-Málaga: die Stadt, die Küstenorte Torre del Mar, Caleta de Vélez und Benajarafe, Versorgung, Immobilienpreise und was Sie zu Kauf und Renovierung wissen sollten.',
    lead: 'Vélez-Málaga ist die Hauptstadt der Axarquía: eine echte spanische Stadt mit Krankenhaus, Märkten und Geschäften, und am Meer die Badeorte Torre del Mar, Caleta de Vélez und Benajarafe.',
    intro: [
      'Mit gut 85.000 Einwohnern ist Vélez-Málaga die mit Abstand größte Gemeinde der Axarquía. Die Stadt selbst liegt einige Kilometer landeinwärts auf einem Hügel mit der maurischen Burg, der Fortaleza. An der Küste liegen <a href="/de/orte/torre-del-mar/">Torre del Mar</a> mit seiner langen Promenade, der Fischerhafen <a href="/de/orte/caleta-de-velez/">Caleta de Vélez</a> und <a href="/de/orte/benajarafe/">Benajarafe</a> mit ruhigeren Stränden Richtung Málaga.',
      'Anders als Nerja oder Torrox ist Vélez vor allem eine spanische Stadt: Der Ausländeranteil ist niedriger, und das Leben dreht sich um Arbeit, Schule und Familie. Wer in Spanien leben und nicht nur überwintern möchte, hat davon einen Vorteil. Alles ist da: das Krankenhaus der Axarquía, Schulen, große Geschäfte, ein Busbahnhof und die Autobahn nach Málaga (etwa 37 Kilometer).',
      'Zwischen Stadt und Bergen liegen Weiler wie Trapiche, Cajiz und Lagos, mit Avocado- und Mangoplantagen und Landhäusern.',
    ],
    facts: [
      ['Einwohner', 'gut 85.000'],
      ['Ausländische Einwohner', 'etwa 13%'],
      ['Lage', 'Küste, Stadt und Hügel'],
      ['Stadt bis Strand', 'etwa 4 km'],
      ['Flughafen Málaga', 'etwa 40 Minuten mit dem Auto'],
      ['Preisniveau', 'durchschnittlich'],
    ],
    forWhom: 'Für alle, die das ganze Jahr in Spanien leben und alle Einrichtungen in der Nähe haben möchten, mit spanischem Charakter. Torre del Mar ist bei Überwinterern und Familien beliebt; die Weiler im Hinterland bei allen, die Platz suchen.',
    see: {
      title: 'Sehenswertes in Vélez-Málaga: Fortaleza, Torre del Mar und der Hafen von Caleta',
      description: 'Was man in Vélez-Málaga unternehmen kann: Fortaleza und Altstadt, die Promenade von Torre del Mar, der Fischerhafen von Caleta de Vélez, Strände und Feste.',
      lead: 'Vélez verbindet eine historische Stadt mit einer langen Küste. An einem Tag sehen Sie eine maurische Burg, einen Fischmarkt und einen Strand.',
      items: [
        { name: 'Fortaleza und Altstadt', text: 'Über der Stadt stehen Turm und Mauern der maurischen Burg, mit Blick über das Tal und das Meer. Darunter liegen die alten Viertel mit den Kirchen Santa María la Mayor und San Juan Bautista.' },
        { name: 'Promenade von Torre del Mar', text: 'Eine lange Promenade mit Palmen, Terrassen und Strandbars. Abends einer der lebendigsten Orte der Küste.' },
        { name: 'Hafen von Caleta de Vélez', text: 'Der einzige Hafen der östlichen Costa del Sol, mit Jachthafen und großer Fischereiflotte. Rund um den Hafen servieren Fischrestaurants den Fang des Tages.' },
        { name: 'Strände', text: 'Von Benajarafe bis Torre del Mar: breite Sand- und Kiesstrände, darunter Valle Niza. Die Strände von Almayate und Benajarafe sind ruhiger als das Zentrum von Torre del Mar.' },
      ],
      fiestas: [
        { name: 'Semana Santa', when: 'März oder April', text: 'die Prozessionen in Vélez-Málaga sind die wichtigsten der Axarquía.' },
        { name: 'Virgen del Carmen', when: 'Juli', text: 'Prozessionen auf dem Meer in Torre del Mar und Caleta de Vélez.' },
        { name: 'Feria de San Miguel', when: 'Ende September', text: 'die große Feria der Stadt.' },
      ],
    },
    living: {
      title: 'Wohnen in Vélez-Málaga: Stadt, Küste und Land',
      description: 'Ein Haus in Vélez-Málaga, Torre del Mar oder Caleta kaufen? Welche Immobilien es gibt, was sie kosten, die Versorgung und worauf Sie bei Kauf und Renovierung achten sollten.',
      lead: 'Vélez-Málaga hat das größte Angebot der Axarquía, von Apartments am Meer über Reihenhäuser in der Stadt bis zu Landhäusern zwischen Avocadobäumen.',
      sections: [
        { h: 'Welche Immobilien es gibt', p: [
          'In Torre del Mar und Caleta vor allem Apartments, von älteren Anlagen bis zu Neubauten. In der Stadt Vélez Wohnungen und Reihenhäuser, oft günstiger als an der Küste. Im Außenbereich Landhäuser und Villen mit Grundstück, manchmal mit Avocado- oder Mangoplantage.',
        ] },
        { h: 'Was eine Immobilie kostet', p: [
          'Im Oktober 2026 lagen die durchschnittlichen Angebotspreise in der Gemeinde bei rund 3.200 € pro m² für Wohnungen und 2.500 € pro m² für Häuser. In Torre del Mar sind Wohnungen teurer, rund 3.850 € pro m² (RealAdvisor). Rechnen Sie mit rund 10% <a href="/de/ratgeber/kaufnebenkosten-spanien/">Kaufnebenkosten</a>.',
        ] },
        { h: 'Versorgung', p: [
          'Hier liegt das Krankenhaus der Axarquía, dazu Gesundheitszentren in der Stadt und an der Küste, weiterführende Schulen, große Supermärkte, eine Markthalle und ein Busbahnhof. Málaga und der Flughafen sind über die A-7 in etwa 40 Minuten erreichbar.',
        ] },
        { h: 'Vorsicht im Außenbereich', p: [
          'Zwischen den Plantagen stehen viele Häuser, die in Etappen gebaut oder erweitert wurden. Prüfen Sie den rechtlichen Status, die Zufahrt und das Wasser: In trockenen Jahren ist Bewässerungswasser in der Axarquía knapp. Lesen Sie unsere Ratgeber <a href="/de/ratgeber/finca-kaufen-spanien/">Finca kaufen</a> und <a href="/de/ratgeber/afo-legalisierung-andalusien/">AFO und Legalisierung</a>.',
        ] },
        { h: 'Renovieren in Vélez-Málaga', p: [
          'An der Küste geht es vor allem um die Modernisierung von Apartments: Küche, Bad, Böden und Klimaanlage. In der Stadt und auf dem Land um Dächer, Feuchtigkeit, Dämmung und Anbauten. Genehmigungen erteilt die Gemeinde Vélez-Málaga, auch für die Küstenorte. Lassen Sie eine Immobilie vor dem Kauf <a href="/de/immobiliengutachten/">begutachten</a>.',
        ] },
      ],
    },
    faq: [
      { q: 'Gehören Torre del Mar und Caleta de Vélez zu Vélez-Málaga?', a: 'Ja. Torre del Mar, Caleta de Vélez, Benajarafe, Almayate und mehrere Weiler im Hinterland gehören alle zur Gemeinde Vélez-Málaga.' },
      { q: 'Wo ist das Krankenhaus der Axarquía?', a: 'Das Hospital Comarcal de la Axarquía liegt in Vélez-Málaga, zwischen der Stadt und Torre del Mar.' },
      { q: 'Leben viele Ausländer in Vélez-Málaga?', a: 'Weniger als in Nerja oder Torrox: etwa 13% der Einwohner. In Torre del Mar und Caleta leben mehr Ausländer als in der Stadt selbst.' },
    ],
  },
  sv: {
    title: 'Vélez-Málaga: bo och köpa i Axarquías huvudort',
    description: 'Allt om Vélez-Málaga: staden, kustorterna Torre del Mar, Caleta de Vélez och Benajarafe, service, bostadspriser och vad du ska veta om köp och renovering.',
    lead: 'Vélez-Málaga är Axarquías huvudort: en riktig spansk stad med sjukhus, marknader och affärer, och vid havet orterna Torre del Mar, Caleta de Vélez och Benajarafe.',
    intro: [
      'Med över 85 000 invånare är Vélez-Málaga den överlägset största kommunen i Axarquía. Själva staden ligger några kilometer inåt landet, på en kulle med den moriska borgen Fortaleza överst. Vid kusten ligger <a href="/sv/orter/torre-del-mar/">Torre del Mar</a> med sin långa strandpromenad, fiskehamnen <a href="/sv/orter/caleta-de-velez/">Caleta de Vélez</a> och <a href="/sv/orter/benajarafe/">Benajarafe</a> med lugnare stränder mot Málaga.',
      'Till skillnad från Nerja och Torrox är Vélez framför allt en spansk stad: andelen utlänningar är lägre och livet kretsar kring arbete, skola och familj. För den som vill bo i Spanien och inte bara övervintra är det en fördel. Här finns allt: Axarquías sjukhus, skolor, stora affärer, en busstation och motorvägen till Málaga (cirka 37 kilometer).',
      'Mellan staden och bergen ligger småorter som Trapiche, Cajiz och Lagos, med avokado- och mangoodlingar och hus på landet.',
    ],
    facts: [
      ['Invånare', 'över 85 000'],
      ['Utländska invånare', 'cirka 13 %'],
      ['Läge', 'kust, stad och kullar'],
      ['Staden till stranden', 'cirka 4 km'],
      ['Málaga (flygplats)', 'cirka 40 minuter med bil'],
      ['Prisnivå', 'medel'],
    ],
    forWhom: 'För dig som bor i Spanien året runt och vill ha all service nära, i en spansk miljö. Torre del Mar är populärt bland dem som övervintrar och bland barnfamiljer; småorterna i inlandet bland dem som söker utrymme.',
    see: {
      title: 'Se och göra i Vélez-Málaga: Fortaleza, Torre del Mar och hamnen i Caleta',
      description: 'Vad du kan göra i Vélez-Málaga: Fortaleza och gamla stan, strandpromenaden i Torre del Mar, fiskehamnen i Caleta de Vélez, stränder och fiestor.',
      lead: 'Vélez kombinerar en historisk stad med en lång kustremsa. På en dag hinner du se en morisk borg, en fiskmarknad och en strand.',
      items: [
        { name: 'Fortaleza och gamla stan', text: 'Ovanför staden står tornet och murarna från den moriska borgen, med utsikt över dalen och havet. Nedanför ligger de gamla kvarteren med kyrkorna Santa María la Mayor och San Juan Bautista.' },
        { name: 'Strandpromenaden i Torre del Mar', text: 'En lång strandpromenad med palmer, uteserveringar och strandbarer. På kvällen är det en av de livligaste platserna längs kusten.' },
        { name: 'Hamnen i Caleta de Vélez', text: 'Den enda hamnen på östra Costa del Sol, med småbåtshamn och en stor fiskeflotta. Runt hamnen ligger fiskrestauranger som serverar dagens fångst.' },
        { name: 'Stränder', text: 'Från Benajarafe till Torre del Mar: breda sand- och stenstränder, bland annat Valle Niza. Stränderna vid Almayate och Benajarafe är lugnare än centrala Torre del Mar.' },
      ],
      fiestas: [
        { name: 'Semana Santa', when: 'mars eller april', text: 'processionerna i Vélez-Málaga är de viktigaste i Axarquía.' },
        { name: 'Virgen del Carmen', when: 'juli', text: 'processioner till sjöss i Torre del Mar och Caleta de Vélez.' },
        { name: 'Feria de San Miguel', when: 'slutet av september', text: 'stadens stora feria.' },
      ],
    },
    living: {
      title: 'Bo i Vélez-Málaga: stad, kust och landsbygd',
      description: 'Köpa bostad i Vélez-Málaga, Torre del Mar eller Caleta? Vilka bostäder som finns, vad de kostar, service och vad du ska tänka på vid köp och renovering.',
      lead: 'Vélez-Málaga har det bredaste utbudet i Axarquía, från lägenheter vid havet till stadshus och hus på landet bland avokadoträden.',
      sections: [
        { h: 'Vilka bostäder som finns', p: [
          'I Torre del Mar och Caleta mest lägenheter, från äldre komplex till nyproduktion. I staden Vélez lägenheter och radhus, ofta billigare än vid kusten. På landsbygden hus och villor med mark, ibland med en avokado- eller mangoodling.',
        ] },
        { h: 'Vad en bostad kostar', p: [
          'I oktober 2026 låg det genomsnittliga utgångspriset i kommunen kring 3 200 € per m² för lägenheter och 2 500 € per m² för hus. Lägenheter i Torre del Mar kostar mer, cirka 3 850 € per m² (RealAdvisor). Räkna med cirka 10 % i <a href="/sv/guider/kopa-hus-i-spanien-kostnader/">köpkostnader</a>.',
        ] },
        { h: 'Service', p: [
          'Här ligger Axarquías sjukhus, och här finns vårdcentraler i staden och vid kusten, gymnasieskolor, stora stormarknader, en saluhall och en busstation. Málaga och flygplatsen ligger cirka 40 minuter bort via A-7.',
        ] },
        { h: 'Se upp på landsbygden', p: [
          'Bland odlingarna finns många hus som byggts eller byggts ut i omgångar. Kontrollera den rättsliga statusen, tillfartsvägen och vattnet: under torra år är bevattningsvattnet knappt i Axarquía. Läs våra guider om att <a href="/sv/guider/kopa-finca-i-spanien/">köpa finca</a> och om <a href="/sv/guider/afo-andalusien/">AFO och legalisering</a>.',
        ] },
        { h: 'Renovera i Vélez-Málaga', p: [
          'Vid kusten handlar det mest om att modernisera lägenheter: kök, badrum, golv och luftkonditionering. I staden och på landet om tak, fukt, isolering och tillbyggnader. Tillstånd ges av Vélez-Málagas kommun, även för kustorterna. Låt <a href="/sv/besiktning/">besiktiga</a> bostaden före köpet.',
        ] },
      ],
    },
    faq: [
      { q: 'Hör Torre del Mar och Caleta de Vélez till Vélez-Málaga?', a: 'Ja. Torre del Mar, Caleta de Vélez, Benajarafe, Almayate och flera småorter i inlandet hör alla till kommunen Vélez-Málaga.' },
      { q: 'Var ligger Axarquías sjukhus?', a: 'Hospital Comarcal de la Axarquía ligger i Vélez-Málaga, mellan staden och Torre del Mar.' },
      { q: 'Bor det många utlänningar i Vélez-Málaga?', a: 'Färre än i Nerja och Torrox: cirka 13 % av invånarna. I Torre del Mar och Caleta bor fler utlänningar än i själva staden.' },
    ],
  },
};
export default content;
