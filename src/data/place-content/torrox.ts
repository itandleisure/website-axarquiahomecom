import type { PlaceContent } from './types';

// Feitenblad Torrox (november 2026)
// - Inwoners: 22.015 (INE, 1 januari 2025); voorlopig 22.523 per 1 januari 2026, daarmee iets groter dan Nerja (Euro Weekly News, september 2026).
// - Circa 37% buitenlandse inwoners, met een grote Duitse gemeenschap.
// - Twee delen: Torrox Pueblo (het witte dorp, circa 4 km landinwaarts) en Torrox Costa (kust, met El Morche en Ferrara).
// - Romeinse resten van Caviclum bij de vuurtoren (Faro de Torrox).
// - Fiesta's: Día de las Migas (laatste zondag voor Kerst), feria eerste weekend van oktober, Virgen del Carmen (Torrox Costa),
//   feria van El Morche tweede week van augustus.
// - Woningprijzen: circa € 3.800 per m² appartementen, € 3.100 per m² huizen (RealAdvisor, oktober 2026).
const content: PlaceContent = {
  sources: [
    'https://es.hispanopedia.com/wiki/Torrox',
    'https://realadvisor.es/es/precios-viviendas/municipio-torrox',
    'https://euroweeklynews.com/',
  ],
  nl: {
    title: 'Torrox: wonen en kopen tussen het witte dorp en Torrox Costa',
    description: 'Alles over Torrox: Torrox Pueblo en Torrox Costa, het klimaat, de grote internationale gemeenschap, woningprijzen en waar u op let bij kopen en verbouwen.',
    lead: 'Torrox wordt vaak het dorp met het beste klimaat van Europa genoemd. Het bestaat uit twee werelden: een wit dorp in de heuvels en een badplaats met boulevard en strand.',
    intro: [
      'De gemeente Torrox ligt tussen <a href="/nl/plaatsen/nerja/">Nerja</a> en <a href="/nl/plaatsen/algarrobo/">Algarrobo</a>. Het oude dorp, Torrox Pueblo, ligt zo’n vier kilometer landinwaarts tegen de heuvels. Aan zee liggen <a href="/nl/plaatsen/torrox-costa/">Torrox Costa</a> en El Morche, met appartementencomplexen, een lange boulevard en brede stranden.',
      'Met ruim 22.000 inwoners is Torrox een van de grotere gemeenten van de Axarquía. Volgens de voorlopige cijfers voor 2026 is het inmiddels iets groter dan Nerja. Ruim een derde van de inwoners heeft een buitenlandse nationaliteit; de Duitse gemeenschap is hier van oudsher groot, met Duitse artsen, winkels en verenigingen.',
      'Bij de vuurtoren liggen de resten van het Romeinse Caviclum, met een badhuis en een necropool. Het slogan “het beste klimaat van Europa” gebruikt Torrox al decennia: milde winters en een zomer die door de zeewind minder heet aanvoelt dan in het binnenland.',
    ],
    facts: [
      ['Inwoners', 'ruim 22.000 (2025)'],
      ['Buitenlandse inwoners', 'ruim een derde, veel Duitsers'],
      ['Ligging', 'kust en heuvels'],
      ['Dorp tot strand', 'circa 4 km'],
      ['Málaga (luchthaven)', 'circa 50 minuten rijden'],
      ['Prijsniveau', 'midden tot hoog'],
    ],
    forWhom: 'Voor wie aan zee wil wonen met alles op loopafstand, of juist in een levendig wit dorp met de kust op een paar minuten. Torrox Costa is populair bij overwinteraars; het dorp en de heuvels eromheen bij wie het hele jaar in Spanje woont.',
    see: {
      title: 'Zien en doen in Torrox: stranden, Romeinen, Migas',
      description: 'Wat te doen in Torrox: de stranden van Torrox Costa en El Morche, de vuurtoren en Caviclum, het witte dorp en de feesten.',
      lead: 'In Torrox wisselt u makkelijk strand en dorp af: ’s ochtends de boulevard, ’s middags de pleinen en steegjes van het oude dorp.',
      items: [
        { name: 'Stranden van Torrox Costa en El Morche', text: 'Brede stranden van donker zand met een boulevard, strandtenten (<em>chiringuitos</em>) en voorzieningen. Ferrara en El Morche zijn wat rustiger dan het centrum van Torrox Costa.' },
        { name: 'Vuurtoren en Caviclum', text: 'Rond de Faro de Torrox liggen de resten van een Romeinse nederzetting met badhuis, villa en necropool. De resten zijn vrij te bekijken vanaf de boulevard.' },
        { name: 'Torrox Pueblo', text: 'Het witte dorp met de Plaza de la Constitución, de kerk Nuestra Señora de la Encarnación en smalle steegjes. Hier was in 1872 de eerste openbare bibliotheek van de provincie Málaga.' },
        { name: 'Wandelen en fietsen', text: 'Vanuit het dorp lopen paden de heuvels in, richting de natuurparken. Langs de kust kunt u over de boulevard en de Senda Litoral wandelen of fietsen richting Nerja en Algarrobo.' },
      ],
      fiestas: [
        { name: 'Feria de El Morche', when: 'tweede week van augustus', text: 'zomerfeest aan zee.' },
        { name: 'Virgen del Carmen', when: 'augustus', text: 'processie in Torrox Costa.' },
        { name: 'Feria de Torrox', when: 'eerste weekend van oktober', text: 'het grote dorpsfeest.' },
        { name: 'Día de las Migas', when: 'laatste zondag voor Kerst', text: 'duizenden porties <em>migas</em>, gratis uitgedeeld op straat, met muziek en wijn.' },
      ],
    },
    living: {
      title: 'Wonen in Torrox: appartementen, dorpshuizen, villa’s',
      description: 'Een huis kopen in Torrox? Het aanbod in Torrox Costa en Torrox Pueblo, de prijzen, voorzieningen en waar u op let bij oudere complexen en landelijke woningen.',
      lead: 'Torrox heeft veel aanbod in alle soorten, met prijzen onder die van Nerja. De meeste buitenlanders kopen een appartement aan de kust of een villa in de heuvels.',
      sections: [
        { h: 'Wat voor woningen er zijn', p: [
          'In Torrox Costa en El Morche vooral appartementen en studio’s in complexen uit de jaren zeventig tot negentig, vaak met gemeenschappelijk zwembad. In het dorp traditionele dorpshuizen en nieuwere rijtjeshuizen. In de heuvels villa’s met zeezicht en verder het binnenland in finca’s.',
        ] },
        { h: 'Wat een woning kost', p: [
          'In oktober 2026 lag de gemiddelde vraagprijs rond de € 3.800 per m² voor appartementen en € 3.100 per m² voor huizen (RealAdvisor). Appartementen aan de eerste lijn zijn duurder; dorpshuizen die opgeknapt moeten worden zijn een stuk goedkoper. Reken op ongeveer 10% <a href="/nl/gidsen/kosten-koper-spanje/">kosten koper</a>.',
        ] },
        { h: 'Voorzieningen', p: [
          'Torrox heeft een gezondheidscentrum in dorp en aan de kust, grote supermarkten, scholen en veel restaurants en winkels die het hele jaar open zijn. Er zijn Duitstalige artsen en dienstverleners. Het ziekenhuis van de Axarquía ligt in Vélez-Málaga.',
        ] },
        { h: 'Let op bij oudere complexen', p: [
          'Veel complexen aan de kust zijn veertig jaar of ouder. Vraag naar de staat van daken, leidingen en gevels en naar geplande renovaties van de vereniging van eigenaren (<em>comunidad</em>), want die betaalt u mee. Kijk ook naar de zeelucht: metalen balkonhekken en beton aan de gevel hebben er last van.',
        ] },
        { h: 'Verbouwen in Torrox', p: [
          'Een appartement moderniseren (keuken, badkamer, vloeren, airco) is in Torrox de meest gevraagde klus. In het dorp en in de heuvels gaat het vaker om dak, vocht en uitbreiding, waarvoor u een vergunning nodig hebt. Laat bij twijfel eerst een <a href="/nl/aankoopkeuring/">aankoopkeuring</a> doen.',
        ] },
      ],
    },
    faq: [
      { q: 'Wat is het verschil tussen Torrox en Torrox Costa?', a: 'Torrox Pueblo is het historische witte dorp, ongeveer vier kilometer landinwaarts. Torrox Costa is het deel aan zee met boulevard, strand en appartementen. Beide vallen onder dezelfde gemeente.' },
      { q: 'Heeft Torrox echt het beste klimaat van Europa?', a: 'Het is een slogan, maar wel een met een kern van waarheid: de winters zijn er mild en zonnig, en de bergen in het noorden houden koude wind tegen.' },
      { q: 'Wonen er veel Duitsers in Torrox?', a: 'Ja. Torrox heeft van oudsher een grote Duitse gemeenschap, met Duitstalige artsen, winkels en verenigingen. Ook Nederlanders, Belgen en Britten wonen er veel.' },
    ],
  },
  en: {
    title: 'Torrox: living and buying in Pueblo and Torrox Costa',
    description: 'All about Torrox: Torrox Pueblo and Torrox Costa, the climate, the large international community, property prices and what to know about buying and renovating.',
    lead: 'Torrox is often called the village with the best climate in Europe. It is two worlds: a white village in the hills and a resort with a promenade and beach.',
    intro: [
      'The municipality of Torrox lies between <a href="/en/places/nerja/">Nerja</a> and <a href="/en/places/algarrobo/">Algarrobo</a>. The old village, Torrox Pueblo, sits about four kilometres inland against the hills. On the sea are <a href="/en/places/torrox-costa/">Torrox Costa</a> and El Morche, with apartment complexes, a long promenade and wide beaches.',
      'With over 22,000 residents, Torrox is one of the larger municipalities in the Axarquía. Provisional figures for 2026 put it slightly ahead of Nerja. More than a third of residents are foreign nationals; the German community has always been large here, with German-speaking doctors, shops and clubs.',
      'Near the lighthouse are the remains of Roman Caviclum, with a bathhouse and a necropolis. Torrox has used the slogan “the best climate in Europe” for decades: mild winters and a summer that feels less hot than inland thanks to the sea breeze.',
    ],
    facts: [
      ['Population', 'over 22,000 (2025)'],
      ['Foreign residents', 'over a third, many Germans'],
      ['Setting', 'coast and hills'],
      ['Village to beach', 'about 4 km'],
      ['Málaga airport', 'about 50 minutes by car'],
      ['Price level', 'medium to high'],
    ],
    forWhom: 'People who want to live by the sea with everything within walking distance, or in a lively white village with the coast a few minutes away. Torrox Costa is popular with winter residents; the village and the hills around it with people who live in Spain year-round.',
    see: {
      title: 'Things to do in Torrox: beaches, Romans, Día de las Migas',
      description: 'What to do in Torrox: the beaches of Torrox Costa and El Morche, the lighthouse and Caviclum, the white village and the fiestas.',
      lead: 'In Torrox it is easy to mix beach and village: the promenade in the morning, the squares and lanes of the old village in the afternoon.',
      items: [
        { name: 'Beaches of Torrox Costa and El Morche', text: 'Wide beaches of dark sand with a promenade, beach bars (<em>chiringuitos</em>) and facilities. Ferrara and El Morche are a little quieter than central Torrox Costa.' },
        { name: 'Lighthouse and Caviclum', text: 'Around the Faro de Torrox are the remains of a Roman settlement with a bathhouse, villa and necropolis. You can see them freely from the promenade.' },
        { name: 'Torrox Pueblo', text: 'The white village with the Plaza de la Constitución, the church of Nuestra Señora de la Encarnación and narrow lanes. It had the first public library in the province of Málaga, opened in 1872.' },
        { name: 'Walking and cycling', text: 'Paths lead from the village into the hills towards the natural parks. Along the coast you can walk or cycle the promenade and the Senda Litoral towards Nerja and Algarrobo.' },
      ],
      fiestas: [
        { name: 'Feria de El Morche', when: 'second week of August', text: 'summer fair by the sea.' },
        { name: 'Virgen del Carmen', when: 'August', text: 'procession in Torrox Costa.' },
        { name: 'Feria de Torrox', when: 'first weekend of October', text: 'the big village fair.' },
        { name: 'Día de las Migas', when: 'last Sunday before Christmas', text: 'thousands of portions of <em>migas</em> handed out free in the street, with music and wine.' },
      ],
    },
    living: {
      title: 'Living in Torrox: apartments, village houses, villas',
      description: 'Buying a home in Torrox? What is on offer in Torrox Costa and Torrox Pueblo, prices, facilities and what to watch for in older complexes and rural homes.',
      lead: 'Torrox has plenty of every type of property, at prices below Nerja. Most foreign buyers choose an apartment on the coast or a villa in the hills.',
      sections: [
        { h: 'Types of property', p: [
          'In Torrox Costa and El Morche, mostly apartments and studios in complexes from the 1970s to the 1990s, often with a communal pool. In the village, traditional village houses and newer townhouses. In the hills, villas with sea views and further inland fincas.',
        ] },
        { h: 'What a home costs', p: [
          'In October 2026 average asking prices were around €3,800 per m² for apartments and €3,100 per m² for houses (RealAdvisor). Front-line apartments cost more; village houses that need work are considerably cheaper. Allow around 10% for <a href="/en/guides/buying-costs-in-spain/">buying costs</a>.',
        ] },
        { h: 'Facilities', p: [
          'Torrox has health centres in both the village and on the coast, large supermarkets, schools and plenty of restaurants and shops open all year. There are German-speaking doctors and service providers. The Axarquía’s hospital is in Vélez-Málaga.',
        ] },
        { h: 'Watch out with older complexes', p: [
          'Many complexes on the coast are forty years old or more. Ask about the state of roofs, pipes and façades and about planned work by the owners’ association (<em>comunidad</em>), because you will share the cost. Mind the sea air too: metal balcony railings and façade concrete suffer from it.',
        ] },
        { h: 'Renovating in Torrox', p: [
          'Modernising an apartment (kitchen, bathroom, floors, air conditioning) is the most common job in Torrox. In the village and the hills it is more often roofs, damp and extensions, which need a permit. If in doubt, have a <a href="/en/property-survey/">property survey</a> done first.',
        ] },
      ],
    },
    faq: [
      { q: 'What is the difference between Torrox and Torrox Costa?', a: 'Torrox Pueblo is the historic white village, about four kilometres inland. Torrox Costa is the part by the sea with the promenade, beach and apartments. Both belong to the same municipality.' },
      { q: 'Does Torrox really have the best climate in Europe?', a: 'It is a slogan, but one with some truth to it: winters are mild and sunny, and the mountains to the north keep out cold winds.' },
      { q: 'Do many Germans live in Torrox?', a: 'Yes. Torrox has long had a large German community, with German-speaking doctors, shops and clubs. Many Dutch, Belgian and British people live there too.' },
    ],
  },
  de: {
    title: 'Torrox: Wohnen und Kaufen in Pueblo und Torrox Costa',
    description: 'Alles über Torrox: Torrox Pueblo und Torrox Costa, das Klima, die große deutsche Gemeinschaft, Immobilienpreise und Tipps zu Kauf und Renovierung.',
    lead: 'Torrox gilt als der Ort mit dem besten Klima Europas. Er besteht aus zwei Welten: einem weißen Dorf in den Hügeln und einem Badeort mit Promenade und Strand.',
    intro: [
      'Die Gemeinde Torrox liegt zwischen <a href="/de/orte/nerja/">Nerja</a> und <a href="/de/orte/algarrobo/">Algarrobo</a>. Das alte Dorf, Torrox Pueblo, liegt etwa vier Kilometer landeinwärts an den Hügeln. Am Meer liegen <a href="/de/orte/torrox-costa/">Torrox Costa</a> und El Morche, mit Apartmentanlagen, einer langen Promenade und breiten Stränden.',
      'Mit gut 22.000 Einwohnern ist Torrox eine der größeren Gemeinden der Axarquía. Nach den vorläufigen Zahlen für 2026 ist sie inzwischen etwas größer als Nerja. Mehr als ein Drittel der Einwohner hat eine ausländische Staatsangehörigkeit; die deutsche Gemeinschaft ist hier traditionell groß, mit deutschsprachigen Ärzten, Geschäften und Vereinen.',
      'Beim Leuchtturm liegen die Reste des römischen Caviclum mit Thermen und einer Nekropole. Den Slogan „das beste Klima Europas“ nutzt Torrox seit Jahrzehnten: milde Winter und ein Sommer, der dank der Meeresbrise weniger heiß ist als im Landesinneren.',
    ],
    facts: [
      ['Einwohner', 'gut 22.000 (2025)'],
      ['Ausländische Einwohner', 'über ein Drittel, viele Deutsche'],
      ['Lage', 'Küste und Hügel'],
      ['Dorf bis Strand', 'etwa 4 km'],
      ['Flughafen Málaga', 'etwa 50 Minuten mit dem Auto'],
      ['Preisniveau', 'mittel bis hoch'],
    ],
    forWhom: 'Für alle, die am Meer wohnen möchten und alles zu Fuß erreichen wollen, oder lieber in einem lebendigen weißen Dorf mit der Küste wenige Minuten entfernt. Torrox Costa ist bei Überwinterern beliebt; das Dorf und die Hügel ringsum bei Menschen, die das ganze Jahr in Spanien leben.',
    see: {
      title: 'Sehenswertes in Torrox: Strände, Römer, Día de las Migas',
      description: 'Was man in Torrox unternehmen kann: die Strände von Torrox Costa und El Morche, Leuchtturm und Caviclum, das weiße Dorf und die Feste.',
      lead: 'In Torrox lassen sich Strand und Dorf leicht verbinden: morgens die Promenade, nachmittags die Plätze und Gassen des alten Dorfes.',
      items: [
        { name: 'Strände von Torrox Costa und El Morche', text: 'Breite Strände mit dunklem Sand, Promenade, Strandbars (<em>chiringuitos</em>) und guter Ausstattung. Ferrara und El Morche sind etwas ruhiger als das Zentrum von Torrox Costa.' },
        { name: 'Leuchtturm und Caviclum', text: 'Rund um den Faro de Torrox liegen die Reste einer römischen Siedlung mit Thermen, Villa und Nekropole. Sie sind von der Promenade aus frei zugänglich.' },
        { name: 'Torrox Pueblo', text: 'Das weiße Dorf mit der Plaza de la Constitución, der Kirche Nuestra Señora de la Encarnación und engen Gassen. Hier eröffnete 1872 die erste öffentliche Bibliothek der Provinz Málaga.' },
        { name: 'Wandern und Radfahren', text: 'Vom Dorf führen Wege in die Hügel Richtung Naturparks. An der Küste können Sie über die Promenade und die Senda Litoral nach Nerja und Algarrobo wandern oder radeln.' },
      ],
      fiestas: [
        { name: 'Feria de El Morche', when: 'zweite Augustwoche', text: 'Sommerfest am Meer.' },
        { name: 'Virgen del Carmen', when: 'August', text: 'Prozession in Torrox Costa.' },
        { name: 'Feria de Torrox', when: 'erstes Oktoberwochenende', text: 'das große Dorffest.' },
        { name: 'Día de las Migas', when: 'letzter Sonntag vor Weihnachten', text: 'Tausende Portionen <em>migas</em>, kostenlos auf der Straße verteilt, mit Musik und Wein.' },
      ],
    },
    living: {
      title: 'Wohnen in Torrox: Apartments am Meer, Dorfhäuser und Villen',
      description: 'Haus in Torrox kaufen? Das Angebot in Torrox Costa und Torrox Pueblo, Preise, Versorgung und worauf Sie bei älteren Anlagen und Landhäusern achten.',
      lead: 'Torrox hat ein großes Angebot aller Art, zu Preisen unter denen von Nerja. Die meisten ausländischen Käufer wählen ein Apartment an der Küste oder eine Villa in den Hügeln.',
      sections: [
        { h: 'Welche Immobilien es gibt', p: [
          'In Torrox Costa und El Morche vor allem Apartments und Studios in Anlagen aus den 1970er- bis 1990er-Jahren, oft mit Gemeinschaftspool. Im Dorf traditionelle Dorfhäuser und neuere Reihenhäuser. In den Hügeln Villen mit Meerblick und weiter im Landesinneren Fincas.',
        ] },
        { h: 'Was eine Immobilie kostet', p: [
          'Im Oktober 2026 lagen die durchschnittlichen Angebotspreise bei rund 3.800 € pro m² für Wohnungen und 3.100 € pro m² für Häuser (RealAdvisor). Apartments in erster Meereslinie sind teurer; renovierungsbedürftige Dorfhäuser deutlich günstiger. Rechnen Sie mit rund 10% <a href="/de/ratgeber/kaufnebenkosten-spanien/">Kaufnebenkosten</a>.',
        ] },
        { h: 'Versorgung', p: [
          'Torrox hat Gesundheitszentren im Dorf und an der Küste, große Supermärkte, Schulen und viele Restaurants und Geschäfte, die das ganze Jahr geöffnet sind. Es gibt deutschsprachige Ärzte und Dienstleister. Das Krankenhaus der Axarquía liegt in Vélez-Málaga.',
        ] },
        { h: 'Vorsicht bei älteren Anlagen', p: [
          'Viele Anlagen an der Küste sind vierzig Jahre oder älter. Fragen Sie nach dem Zustand von Dächern, Leitungen und Fassaden und nach geplanten Arbeiten der Eigentümergemeinschaft (<em>comunidad</em>), denn die Kosten tragen Sie mit. Achten Sie auch auf die Meeresluft: Metallgeländer und Fassadenbeton leiden darunter.',
        ] },
        { h: 'Renovieren in Torrox', p: [
          'Ein Apartment modernisieren (Küche, Bad, Böden, Klimaanlage) ist in Torrox die häufigste Arbeit. Im Dorf und in den Hügeln geht es öfter um Dach, Feuchtigkeit und Anbauten, für die eine Genehmigung nötig ist. Lassen Sie im Zweifel zuerst ein <a href="/de/immobiliengutachten/">Gutachten</a> erstellen.',
        ] },
      ],
    },
    faq: [
      { q: 'Was ist der Unterschied zwischen Torrox und Torrox Costa?', a: 'Torrox Pueblo ist das historische weiße Dorf, etwa vier Kilometer landeinwärts. Torrox Costa ist der Teil am Meer mit Promenade, Strand und Apartments. Beide gehören zur selben Gemeinde.' },
      { q: 'Hat Torrox wirklich das beste Klima Europas?', a: 'Es ist ein Werbeslogan, aber mit wahrem Kern: Die Winter sind mild und sonnig, und die Berge im Norden halten kalte Winde ab.' },
      { q: 'Leben viele Deutsche in Torrox?', a: 'Ja. Torrox hat seit Langem eine große deutsche Gemeinschaft mit deutschsprachigen Ärzten, Geschäften und Vereinen. Auch viele Niederländer, Belgier und Briten wohnen dort.' },
    ],
  },
  sv: {
    title: 'Torrox: bo och köpa mellan den vita byn och Torrox Costa',
    description: 'Allt om Torrox: Torrox Pueblo och Torrox Costa, klimatet, den stora internationella gemenskapen, bostadspriser och vad du ska tänka på vid köp och renovering.',
    lead: 'Torrox kallas ofta orten med Europas bästa klimat. Den består av två världar: en vit by i kullarna och en badort med strandpromenad och strand.',
    intro: [
      'Kommunen Torrox ligger mellan <a href="/sv/orter/nerja/">Nerja</a> och <a href="/sv/orter/algarrobo/">Algarrobo</a>. Den gamla byn, Torrox Pueblo, ligger cirka fyra kilometer inåt landet mot kullarna. Vid havet ligger <a href="/sv/orter/torrox-costa/">Torrox Costa</a> och El Morche, med lägenhetskomplex, en lång strandpromenad och breda stränder.',
      'Med drygt 22 000 invånare är Torrox en av de större kommunerna i Axarquía. Enligt de preliminära siffrorna för 2026 är den nu något större än Nerja. Över en tredjedel av invånarna har utländskt medborgarskap; här finns sedan länge en stor tysk gemenskap, och också många nederländare, belgare och skandinaver.',
      'Vid fyren ligger resterna av romerska Caviclum, med badhus och gravfält. Slogan ”Europas bästa klimat” har Torrox använt i årtionden: milda vintrar och en sommar som känns mindre het än i inlandet tack vare havsbrisen.',
    ],
    facts: [
      ['Invånare', 'drygt 22 000 (2025)'],
      ['Utländska invånare', 'över en tredjedel'],
      ['Läge', 'kust och kullar'],
      ['Byn till stranden', 'cirka 4 km'],
      ['Málaga (flygplats)', 'cirka 50 minuter med bil'],
      ['Prisnivå', 'medel till hög'],
    ],
    forWhom: 'För dig som vill bo vid havet med allt på gångavstånd, eller i en livlig vit by med kusten några minuter bort. Torrox Costa är populärt bland dem som övervintrar; byn och kullarna runt omkring bland dem som bor i Spanien året runt.',
    see: {
      title: 'Se och göra i Torrox: stränder, romare, Día de las Migas',
      description: 'Vad du kan göra i Torrox: stränderna i Torrox Costa och El Morche, fyren och Caviclum, den vita byn och fiestorna.',
      lead: 'I Torrox är det lätt att växla mellan strand och by: strandpromenaden på förmiddagen, torgen och gränderna i gamla byn på eftermiddagen.',
      items: [
        { name: 'Stränderna i Torrox Costa och El Morche', text: 'Breda stränder med mörk sand, strandpromenad, strandbarer (<em>chiringuitos</em>) och service. Ferrara och El Morche är lite lugnare än centrala Torrox Costa.' },
        { name: 'Fyren och Caviclum', text: 'Runt Faro de Torrox ligger resterna av en romersk bosättning med badhus, villa och gravfält. De kan ses fritt från strandpromenaden.' },
        { name: 'Torrox Pueblo', text: 'Den vita byn med Plaza de la Constitución, kyrkan Nuestra Señora de la Encarnación och smala gränder. Här öppnade 1872 det första folkbiblioteket i provinsen Málaga.' },
        { name: 'Vandra och cykla', text: 'Från byn går stigar upp i kullarna mot naturparkerna. Längs kusten kan du gå eller cykla på strandpromenaden och Senda Litoral mot Nerja och Algarrobo.' },
      ],
      fiestas: [
        { name: 'Feria de El Morche', when: 'andra veckan i augusti', text: 'sommarfest vid havet.' },
        { name: 'Virgen del Carmen', when: 'augusti', text: 'procession i Torrox Costa.' },
        { name: 'Feria de Torrox', when: 'första helgen i oktober', text: 'byns stora fest.' },
        { name: 'Día de las Migas', when: 'sista söndagen före jul', text: 'tusentals portioner <em>migas</em> delas ut gratis på gatan, med musik och vin.' },
      ],
    },
    living: {
      title: 'Bo i Torrox: lägenheter vid havet, byhus och villor',
      description: 'Köpa hus i Torrox? Utbudet i Torrox Costa och Torrox Pueblo, priser, service och vad du ska tänka på med äldre komplex och hus på landet.',
      lead: 'Torrox har ett stort utbud av alla slag, till priser under Nerjas. De flesta utländska köpare väljer en lägenhet vid kusten eller en villa i kullarna.',
      sections: [
        { h: 'Vilka bostäder som finns', p: [
          'I Torrox Costa och El Morche mest lägenheter och studios i komplex från 1970- till 1990-talet, ofta med gemensam pool. I byn traditionella byhus och nyare radhus. I kullarna villor med havsutsikt och längre in i landet fincor.',
        ] },
        { h: 'Vad en bostad kostar', p: [
          'I oktober 2026 låg det genomsnittliga utgångspriset kring 3 800 € per m² för lägenheter och 3 100 € per m² för hus (RealAdvisor). Lägenheter i första raden är dyrare; byhus som behöver renoveras betydligt billigare. Räkna med cirka 10 % i <a href="/sv/guider/kopa-hus-i-spanien-kostnader/">köpkostnader</a>.',
        ] },
        { h: 'Service', p: [
          'Torrox har vårdcentraler både i byn och vid kusten, stormarknader, skolor och många restauranger och affärer som är öppna året runt. Regionsjukhuset ligger i Vélez-Málaga.',
        ] },
        { h: 'Se upp med äldre komplex', p: [
          'Många komplex vid kusten är fyrtio år eller äldre. Fråga om skicket på tak, rör och fasader och om planerade arbeten i samfälligheten (<em>comunidad</em>), eftersom du betalar din del. Tänk också på havsluften: balkongräcken av metall och fasadbetong tar skada.',
        ] },
        { h: 'Renovera i Torrox', p: [
          'Att modernisera en lägenhet (kök, badrum, golv, luftkonditionering) är det vanligaste jobbet i Torrox. I byn och i kullarna handlar det oftare om tak, fukt och tillbyggnader, som kräver tillstånd. Låt vid tveksamhet först göra en <a href="/sv/besiktning/">besiktning</a>.',
        ] },
      ],
    },
    faq: [
      { q: 'Vad är skillnaden mellan Torrox och Torrox Costa?', a: 'Torrox Pueblo är den historiska vita byn, cirka fyra kilometer inåt landet. Torrox Costa är delen vid havet med strandpromenad, strand och lägenheter. Båda hör till samma kommun.' },
      { q: 'Har Torrox verkligen Europas bästa klimat?', a: 'Det är en slogan, men med en kärna av sanning: vintrarna är milda och soliga, och bergen i norr stänger ute kalla vindar.' },
      { q: 'Bor det många nordbor i Torrox?', a: 'Ja. Störst är den tyska gemenskapen, men här bor också många nederländare, belgare, svenskar, danskar och norrmän.' },
    ],
  },
};
export default content;
