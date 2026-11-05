import type { PlaceContent } from './types';

// Feitenblad Algarrobo (november 2026)
// - Inwoners: 7.103 (INE, 1 januari 2025); 9,73 km². Dorp circa 3,5 km van de kust; circa 39 km naar Málaga.
// - Kernen: Algarrobo Pueblo, Algarrobo Costa, Mezquitilla.
// - Fenicische necropool van Trayamar en nederzetting Morro de Mezquitilla; uitkijktorens Torre Ladeada en Torre Derecha.
// - Fiesta's: San Sebastián (20 januari), feria (eerste week van augustus), Quema de Algarrobo (derde weekend van september).
// - Woningprijzen: circa € 3.450 per m² appartementen, € 2.400 per m² huizen (RealAdvisor, oktober 2026).
const content: PlaceContent = {
  sources: [
    'https://es.hispanopedia.com/wiki/Algarrobo_(Málaga)',
    'https://realadvisor.es/es/precios-viviendas/municipio-algarrobo',
  ],
  nl: {
    title: 'Algarrobo: wonen en kopen tussen wit dorp en Algarrobo Costa',
    description: 'Alles over Algarrobo: het witte dorp, Algarrobo Costa en Mezquitilla, de Fenicische geschiedenis, woningprijzen en waar u op let bij kopen en verbouwen.',
    lead: 'Algarrobo is een kleine gemeente met twee gezichten: een wit dorp tussen de avocadobomen en, drie kilometer verder, een rustige kust met appartementen en een strand.',
    intro: [
      'Algarrobo ligt tussen <a href="/nl/plaatsen/torrox/">Torrox</a> en <a href="/nl/plaatsen/velez-malaga/">Vélez-Málaga</a>. Het dorp zelf ligt ongeveer drieënhalve kilometer landinwaarts, met smalle witte straatjes en een kerk op een heuveltje. Aan zee liggen Algarrobo Costa en het vissersdorpje Mezquitilla, direct naast <a href="/nl/plaatsen/caleta-de-velez/">Caleta de Vélez</a> en de haven.',
      'De gemeente heeft ruim 7.000 inwoners. Algarrobo Costa trekt veel overwinteraars en mensen met een tweede huis; het dorp is vooral Spaans, met een groeiende groep buitenlandse bewoners in de huizen eromheen.',
      'Bij Mezquitilla en Trayamar zijn belangrijke Fenicische vondsten gedaan: resten van een handelsnederzetting en graven van bijna drieduizend jaar oud.',
    ],
    facts: [
      ['Inwoners', 'ruim 7.000 (2025)'],
      ['Ligging', 'kust en heuvels'],
      ['Dorp tot strand', 'circa 3,5 km'],
      ['Málaga (luchthaven)', 'circa 45 minuten rijden'],
      ['Haven en ziekenhuis', 'Caleta en Vélez op 5 tot 10 minuten'],
      ['Prijsniveau', 'gemiddeld'],
    ],
    forWhom: 'Voor wie rustig aan zee wil wonen, met de voorzieningen van Torre del Mar en Vélez-Málaga dichtbij. Het dorp en de heuvels eromheen passen bij wie een Spaans dorp en uitzicht zoekt, op korte afstand van het strand.',
    see: {
      title: 'Zien en doen in Algarrobo: Fenicische geschiedenis, stranden en de Quema',
      description: 'Wat te doen in Algarrobo: het witte dorp, de Fenicische vindplaatsen bij Mezquitilla en Trayamar, de uitkijktorens aan de kust en de feesten.',
      lead: 'Algarrobo is klein, maar heeft een van de oudste geschiedenissen van de kust.',
      items: [
        { name: 'Het witte dorp', text: 'Smalle straatjes, kleine pleinen en de kerk van Santa Ana. Vanaf de hoger gelegen punten kijkt u over de avocadoplantages naar zee.' },
        { name: 'Fenicische vindplaatsen', text: 'Bij Morro de Mezquitilla lag een Fenicische handelsnederzetting, en de graven van Trayamar zijn van de belangrijkste van het westelijke Middellandse Zeegebied. Op de plekken zelf is weinig te zien; vondsten liggen in musea.' },
        { name: 'Uitkijktorens aan de kust', text: 'De Torre Ladeada (de scheve toren) en de Torre Derecha zijn zestiende-eeuwse wachttorens tegen piraten.' },
        { name: 'Stranden', text: 'Het strand van Algarrobo Costa en Mezquitilla is rustig, met een boulevard en strandtenten. Wandel of fiets over de kust naar Torre del Mar of naar Torrox.' },
      ],
      fiestas: [
        { name: 'San Sebastián', when: '20 januari', text: 'feest van de beschermheilige.' },
        { name: 'Feria', when: 'eerste week van augustus', text: 'het zomerfeest van het dorp.' },
        { name: 'Quema de Algarrobo', when: 'derde weekend van september', text: 'een feest met vuur en muziek dat de zomer afsluit.' },
      ],
    },
    living: {
      title: 'Wonen in Algarrobo: appartementen aan zee, dorpshuizen en villa’s',
      description: 'Een huis kopen in Algarrobo of Algarrobo Costa? Welke woningen er zijn, wat ze kosten, voorzieningen en waar u op let bij kopen en verbouwen.',
      lead: 'Algarrobo is wat betaalbaarder dan Torrox en Nerja, met een kust die rustiger is dan Torre del Mar.',
      sections: [
        { h: 'Wat voor woningen er zijn', p: [
          'In Algarrobo Costa en Mezquitilla appartementen en rijtjeshuizen in complexen, vaak met gemeenschappelijk zwembad. In het dorp dorpshuizen. In de heuvels villa’s met zeezicht en landhuizen tussen de avocado’s en mango’s.',
        ] },
        { h: 'Wat een woning kost', p: [
          'In oktober 2026 lag de gemiddelde vraagprijs rond de € 3.450 per m² voor appartementen en € 2.400 per m² voor huizen (RealAdvisor). Reken op ongeveer 10% <a href="/nl/gidsen/kosten-koper-spanje/">kosten koper</a>.',
        ] },
        { h: 'Voorzieningen', p: [
          'In het dorp en aan de kust zijn een gezondheidscentrum, supermarkten, een basisschool en restaurants. Voor het ziekenhuis, de middelbare school en grote winkels bent u in vijf tot tien minuten in Torre del Mar of Vélez-Málaga.',
        ] },
        { h: 'Let op bij kopen', p: [
          'Bij landhuizen in de heuvels: controleer de juridische status, de toegangsweg en het water. Bij complexen aan de kust: de staat van het gebouw en de kosten van de vereniging van eigenaren. Lees ook onze gids over <a href="/nl/gidsen/afo-legaliseren-andalusie/">AFO en legaliseren</a>.',
        ] },
        { h: 'Verbouwen in Algarrobo', p: [
          'Aan de kust vooral appartementen moderniseren; in het dorp en de heuvels daken, vocht, terrassen en zwembaden. Laat een woning vóór aankoop <a href="/nl/aankoopkeuring/">keuren</a>.',
        ] },
      ],
    },
    faq: [
      { q: 'Wat is het verschil tussen Algarrobo en Algarrobo Costa?', a: 'Algarrobo Pueblo is het oude dorp, ongeveer drieënhalve kilometer landinwaarts. Algarrobo Costa is het deel aan zee. Beide horen bij dezelfde gemeente.' },
      { q: 'Is Algarrobo Costa rustig?', a: 'Ja, rustiger dan Torre del Mar of Torrox Costa. In de zomer is het drukker door vakantiegangers.' },
    ],
  },
  en: {
    title: 'Algarrobo: living and buying between the white village and Algarrobo Costa',
    description: 'All about Algarrobo: the white village, Algarrobo Costa and Mezquitilla, the Phoenician history, property prices and what to know about buying and renovating.',
    lead: 'Algarrobo is a small municipality with two faces: a white village among the avocado trees and, three kilometres on, a quiet coast with apartments and a beach.',
    intro: [
      'Algarrobo lies between <a href="/en/places/torrox/">Torrox</a> and <a href="/en/places/velez-malaga/">Vélez-Málaga</a>. The village itself is about three and a half kilometres inland, with narrow white lanes and a church on a hillock. On the sea are Algarrobo Costa and the fishing hamlet of Mezquitilla, right next to <a href="/en/places/caleta-de-velez/">Caleta de Vélez</a> and its harbour.',
      'The municipality has just over 7,000 residents. Algarrobo Costa draws many winter residents and second-home owners; the village is mainly Spanish, with a growing number of foreign residents in the houses around it.',
      'Important Phoenician finds have been made at Mezquitilla and Trayamar: the remains of a trading settlement and tombs almost three thousand years old.',
    ],
    facts: [
      ['Population', 'just over 7,000 (2025)'],
      ['Setting', 'coast and hills'],
      ['Village to beach', 'about 3.5 km'],
      ['Málaga airport', 'about 45 minutes by car'],
      ['Harbour and hospital', 'Caleta and Vélez 5 to 10 minutes away'],
      ['Price level', 'average'],
    ],
    forWhom: 'People who want to live quietly by the sea, with the facilities of Torre del Mar and Vélez-Málaga close by. The village and the hills around it suit people looking for a Spanish village and views, a short drive from the beach.',
    see: {
      title: 'Things to do in Algarrobo: Phoenician history, beaches and the Quema',
      description: 'What to do in Algarrobo: the white village, the Phoenician sites at Mezquitilla and Trayamar, the coastal watchtowers and the fiestas.',
      lead: 'Algarrobo is small, but has one of the oldest histories on the coast.',
      items: [
        { name: 'The white village', text: 'Narrow lanes, small squares and the church of Santa Ana. From the higher points you look over the avocado plantations to the sea.' },
        { name: 'Phoenician sites', text: 'Morro de Mezquitilla was a Phoenician trading settlement, and the Trayamar tombs are among the most important in the western Mediterranean. There is little to see on site; the finds are in museums.' },
        { name: 'Coastal watchtowers', text: 'The Torre Ladeada (the leaning tower) and the Torre Derecha are sixteenth-century watchtowers built against pirates.' },
        { name: 'Beaches', text: 'The beach at Algarrobo Costa and Mezquitilla is quiet, with a promenade and beach bars. Walk or cycle along the coast to Torre del Mar or Torrox.' },
      ],
      fiestas: [
        { name: 'San Sebastián', when: '20 January', text: 'the patron saint’s day.' },
        { name: 'Feria', when: 'first week of August', text: 'the village summer fair.' },
        { name: 'Quema de Algarrobo', when: 'third weekend of September', text: 'a festival of fire and music that closes the summer.' },
      ],
    },
    living: {
      title: 'Living in Algarrobo: seaside apartments, village houses and villas',
      description: 'Buying a home in Algarrobo or Algarrobo Costa? The types of property, what they cost, facilities and what to watch for when buying and renovating.',
      lead: 'Algarrobo is a little more affordable than Torrox and Nerja, with a coast that is quieter than Torre del Mar.',
      sections: [
        { h: 'Types of property', p: [
          'In Algarrobo Costa and Mezquitilla, apartments and townhouses in complexes, often with a communal pool. In the village, village houses. In the hills, villas with sea views and country houses among the avocados and mangoes.',
        ] },
        { h: 'What a home costs', p: [
          'In October 2026 average asking prices were around €3,450 per m² for apartments and €2,400 per m² for houses (RealAdvisor). Allow around 10% for <a href="/en/guides/buying-costs-in-spain/">buying costs</a>.',
        ] },
        { h: 'Facilities', p: [
          'The village and the coast have a health centre, supermarkets, a primary school and restaurants. For the hospital, secondary school and large shops, Torre del Mar and Vélez-Málaga are five to ten minutes away.',
        ] },
        { h: 'Watch out when buying', p: [
          'With country houses in the hills, check the legal status, the access track and the water. With complexes on the coast, the condition of the building and the owners’ association costs. See also our guide to <a href="/en/guides/afo-legalisation-andalusia/">AFO and legalisation</a>.',
        ] },
        { h: 'Renovating in Algarrobo', p: [
          'On the coast, mostly modernising apartments; in the village and the hills, roofs, damp, terraces and pools. Have a property <a href="/en/property-survey/">surveyed</a> before you buy.',
        ] },
      ],
    },
    faq: [
      { q: 'What is the difference between Algarrobo and Algarrobo Costa?', a: 'Algarrobo Pueblo is the old village, about three and a half kilometres inland. Algarrobo Costa is the part by the sea. Both belong to the same municipality.' },
      { q: 'Is Algarrobo Costa quiet?', a: 'Yes, quieter than Torre del Mar or Torrox Costa. It gets busier in summer with holidaymakers.' },
    ],
  },
  de: {
    title: 'Algarrobo: Wohnen und Kaufen zwischen weißem Dorf und Algarrobo Costa',
    description: 'Alles über Algarrobo: das weiße Dorf, Algarrobo Costa und Mezquitilla, die phönizische Geschichte, Immobilienpreise und was Sie zu Kauf und Renovierung wissen sollten.',
    lead: 'Algarrobo ist eine kleine Gemeinde mit zwei Gesichtern: ein weißes Dorf zwischen Avocadobäumen und, drei Kilometer weiter, eine ruhige Küste mit Apartments und Strand.',
    intro: [
      'Algarrobo liegt zwischen <a href="/de/orte/torrox/">Torrox</a> und <a href="/de/orte/velez-malaga/">Vélez-Málaga</a>. Das Dorf selbst liegt etwa dreieinhalb Kilometer landeinwärts, mit engen weißen Gassen und einer Kirche auf einem Hügel. Am Meer liegen Algarrobo Costa und das Fischerdorf Mezquitilla, direkt neben <a href="/de/orte/caleta-de-velez/">Caleta de Vélez</a> und seinem Hafen.',
      'Die Gemeinde hat gut 7.000 Einwohner. Algarrobo Costa zieht viele Überwinterer und Zweitwohnungsbesitzer an; das Dorf ist vor allem spanisch, mit einer wachsenden Zahl ausländischer Bewohner in den Häusern ringsum.',
      'Bei Mezquitilla und Trayamar wurden wichtige phönizische Funde gemacht: Reste einer Handelssiedlung und fast dreitausend Jahre alte Gräber.',
    ],
    facts: [
      ['Einwohner', 'gut 7.000 (2025)'],
      ['Lage', 'Küste und Hügel'],
      ['Dorf bis Strand', 'etwa 3,5 km'],
      ['Flughafen Málaga', 'etwa 45 Minuten mit dem Auto'],
      ['Hafen und Krankenhaus', 'Caleta und Vélez in 5 bis 10 Minuten'],
      ['Preisniveau', 'durchschnittlich'],
    ],
    forWhom: 'Für alle, die ruhig am Meer wohnen möchten, mit den Einrichtungen von Torre del Mar und Vélez-Málaga in der Nähe. Das Dorf und die Hügel ringsum passen zu allen, die ein spanisches Dorf und Aussicht suchen, nicht weit vom Strand.',
    see: {
      title: 'Sehenswertes in Algarrobo: phönizische Geschichte, Strände und die Quema',
      description: 'Was man in Algarrobo unternehmen kann: das weiße Dorf, die phönizischen Fundstätten bei Mezquitilla und Trayamar, die Wachtürme an der Küste und die Feste.',
      lead: 'Algarrobo ist klein, hat aber eine der ältesten Geschichten der Küste.',
      items: [
        { name: 'Das weiße Dorf', text: 'Enge Gassen, kleine Plätze und die Kirche Santa Ana. Von den höheren Punkten blicken Sie über die Avocadoplantagen aufs Meer.' },
        { name: 'Phönizische Fundstätten', text: 'Am Morro de Mezquitilla lag eine phönizische Handelssiedlung, und die Gräber von Trayamar gehören zu den bedeutendsten im westlichen Mittelmeer. Vor Ort ist wenig zu sehen; die Funde liegen in Museen.' },
        { name: 'Wachtürme an der Küste', text: 'Die Torre Ladeada (der schiefe Turm) und die Torre Derecha sind Wachtürme aus dem 16. Jahrhundert zum Schutz vor Piraten.' },
        { name: 'Strände', text: 'Der Strand von Algarrobo Costa und Mezquitilla ist ruhig, mit Promenade und Strandbars. Wandern oder radeln Sie an der Küste nach Torre del Mar oder Torrox.' },
      ],
      fiestas: [
        { name: 'San Sebastián', when: '20. Januar', text: 'Fest des Schutzpatrons.' },
        { name: 'Feria', when: 'erste Augustwoche', text: 'das Sommerfest des Dorfes.' },
        { name: 'Quema de Algarrobo', when: 'drittes Septemberwochenende', text: 'ein Fest mit Feuer und Musik zum Abschluss des Sommers.' },
      ],
    },
    living: {
      title: 'Wohnen in Algarrobo: Apartments am Meer, Dorfhäuser und Villen',
      description: 'Ein Haus in Algarrobo oder Algarrobo Costa kaufen? Welche Immobilien es gibt, was sie kosten, die Versorgung und worauf Sie bei Kauf und Renovierung achten sollten.',
      lead: 'Algarrobo ist etwas günstiger als Torrox und Nerja, mit einer Küste, die ruhiger ist als Torre del Mar.',
      sections: [
        { h: 'Welche Immobilien es gibt', p: [
          'In Algarrobo Costa und Mezquitilla Apartments und Reihenhäuser in Anlagen, oft mit Gemeinschaftspool. Im Dorf Dorfhäuser. In den Hügeln Villen mit Meerblick und Landhäuser zwischen Avocados und Mangos.',
        ] },
        { h: 'Was eine Immobilie kostet', p: [
          'Im Oktober 2026 lagen die durchschnittlichen Angebotspreise bei rund 3.450 € pro m² für Wohnungen und 2.400 € pro m² für Häuser (RealAdvisor). Rechnen Sie mit rund 10% <a href="/de/ratgeber/kaufnebenkosten-spanien/">Kaufnebenkosten</a>.',
        ] },
        { h: 'Versorgung', p: [
          'Im Dorf und an der Küste gibt es ein Gesundheitszentrum, Supermärkte, eine Grundschule und Restaurants. Krankenhaus, weiterführende Schule und große Geschäfte sind in Torre del Mar und Vélez-Málaga in fünf bis zehn Minuten erreichbar.',
        ] },
        { h: 'Worauf Sie beim Kauf achten sollten', p: [
          'Bei Landhäusern in den Hügeln: rechtlicher Status, Zufahrt und Wasser. Bei Anlagen an der Küste: Zustand des Gebäudes und Kosten der Eigentümergemeinschaft. Lesen Sie auch unseren Ratgeber <a href="/de/ratgeber/afo-legalisierung-andalusien/">AFO und Legalisierung</a>.',
        ] },
        { h: 'Renovieren in Algarrobo', p: [
          'An der Küste vor allem die Modernisierung von Apartments; im Dorf und in den Hügeln Dächer, Feuchtigkeit, Terrassen und Pools. Lassen Sie eine Immobilie vor dem Kauf <a href="/de/immobiliengutachten/">begutachten</a>.',
        ] },
      ],
    },
    faq: [
      { q: 'Was ist der Unterschied zwischen Algarrobo und Algarrobo Costa?', a: 'Algarrobo Pueblo ist das alte Dorf, etwa dreieinhalb Kilometer landeinwärts. Algarrobo Costa ist der Teil am Meer. Beide gehören zur selben Gemeinde.' },
      { q: 'Ist Algarrobo Costa ruhig?', a: 'Ja, ruhiger als Torre del Mar oder Torrox Costa. Im Sommer ist es durch Urlauber voller.' },
    ],
  },
  sv: {
    title: 'Algarrobo: bo och köpa mellan den vita byn och Algarrobo Costa',
    description: 'Allt om Algarrobo: den vita byn, Algarrobo Costa och Mezquitilla, den feniciska historien, bostadspriser och vad du ska veta om köp och renovering.',
    lead: 'Algarrobo är en liten kommun med två ansikten: en vit by bland avokadoträden och, tre kilometer bort, en lugn kust med lägenheter och strand.',
    intro: [
      'Algarrobo ligger mellan <a href="/sv/orter/torrox/">Torrox</a> och <a href="/sv/orter/velez-malaga/">Vélez-Málaga</a>. Själva byn ligger cirka tre och en halv kilometer inåt landet, med smala vita gränder och en kyrka på en kulle. Vid havet ligger Algarrobo Costa och fiskebyn Mezquitilla, alldeles intill <a href="/sv/orter/caleta-de-velez/">Caleta de Vélez</a> och dess hamn.',
      'Kommunen har drygt 7 000 invånare. Algarrobo Costa lockar många som övervintrar och fritidshusägare; byn är främst spansk, med ett växande antal utländska invånare i husen runt omkring.',
      'Vid Mezquitilla och Trayamar har viktiga feniciska fynd gjorts: resterna av en handelsplats och gravar som är nästan tretusen år gamla.',
    ],
    facts: [
      ['Invånare', 'drygt 7 000 (2025)'],
      ['Läge', 'kust och kullar'],
      ['Byn till stranden', 'cirka 3,5 km'],
      ['Málaga (flygplats)', 'cirka 45 minuter med bil'],
      ['Hamn och sjukhus', 'Caleta och Vélez 5 till 10 minuter bort'],
      ['Prisnivå', 'medel'],
    ],
    forWhom: 'För dig som vill bo lugnt vid havet, med servicen i Torre del Mar och Vélez-Málaga nära. Byn och kullarna runt omkring passar dig som söker en spansk by och utsikt, en kort bilresa från stranden.',
    see: {
      title: 'Se och göra i Algarrobo: fenicisk historia, stränder och Quema',
      description: 'Vad du kan göra i Algarrobo: den vita byn, de feniciska fyndplatserna vid Mezquitilla och Trayamar, vakttornen vid kusten och fiestorna.',
      lead: 'Algarrobo är litet, men har en av de äldsta historierna längs kusten.',
      items: [
        { name: 'Den vita byn', text: 'Smala gränder, små torg och kyrkan Santa Ana. Från de högre punkterna ser du ut över avokadoodlingarna mot havet.' },
        { name: 'Feniciska fyndplatser', text: 'Morro de Mezquitilla var en fenicisk handelsplats, och gravarna i Trayamar hör till de viktigaste i västra Medelhavet. På plats finns lite att se; fynden finns på museer.' },
        { name: 'Vakttornen vid kusten', text: 'Torre Ladeada (det lutande tornet) och Torre Derecha är vakttorn från 1500-talet som byggdes mot pirater.' },
        { name: 'Stränder', text: 'Stranden vid Algarrobo Costa och Mezquitilla är lugn, med strandpromenad och strandbarer. Gå eller cykla längs kusten till Torre del Mar eller Torrox.' },
      ],
      fiestas: [
        { name: 'San Sebastián', when: '20 januari', text: 'skyddshelgonets dag.' },
        { name: 'Feria', when: 'första veckan i augusti', text: 'byns sommarfest.' },
        { name: 'Quema de Algarrobo', when: 'tredje helgen i september', text: 'en fest med eld och musik som avslutar sommaren.' },
      ],
    },
    living: {
      title: 'Bo i Algarrobo: lägenheter vid havet, byhus och villor',
      description: 'Köpa bostad i Algarrobo eller Algarrobo Costa? Vilka bostäder som finns, vad de kostar, service och vad du ska tänka på vid köp och renovering.',
      lead: 'Algarrobo är något billigare än Torrox och Nerja, med en kust som är lugnare än Torre del Mar.',
      sections: [
        { h: 'Vilka bostäder som finns', p: [
          'I Algarrobo Costa och Mezquitilla lägenheter och radhus i komplex, ofta med gemensam pool. I byn byhus. I kullarna villor med havsutsikt och hus på landet bland avokado- och mangoträden.',
        ] },
        { h: 'Vad en bostad kostar', p: [
          'I oktober 2026 låg det genomsnittliga utgångspriset kring 3 450 € per m² för lägenheter och 2 400 € per m² för hus (RealAdvisor). Räkna med cirka 10 % i <a href="/sv/guider/kopa-hus-i-spanien-kostnader/">köpkostnader</a>.',
        ] },
        { h: 'Service', p: [
          'I byn och vid kusten finns vårdcentral, livsmedelsbutiker, en grundskola och restauranger. Till sjukhuset, gymnasiet och de stora affärerna i Torre del Mar och Vélez-Málaga är det fem till tio minuter.',
        ] },
        { h: 'Se upp vid köp', p: [
          'För hus på landet i kullarna, kontrollera den rättsliga statusen, tillfartsvägen och vattnet. För komplex vid kusten, byggnadens skick och avgifterna till samfälligheten. Läs också vår guide om <a href="/sv/guider/afo-andalusien/">AFO och legalisering</a>.',
        ] },
        { h: 'Renovera i Algarrobo', p: [
          'Vid kusten mest modernisering av lägenheter; i byn och kullarna tak, fukt, terrasser och pooler. Låt <a href="/sv/besiktning/">besiktiga</a> bostaden före köpet.',
        ] },
      ],
    },
    faq: [
      { q: 'Vad är skillnaden mellan Algarrobo och Algarrobo Costa?', a: 'Algarrobo Pueblo är den gamla byn, cirka tre och en halv kilometer inåt landet. Algarrobo Costa är delen vid havet. Båda hör till samma kommun.' },
      { q: 'Är Algarrobo Costa lugnt?', a: 'Ja, lugnare än Torre del Mar och Torrox Costa. På sommaren blir det livligare med semesterfirare.' },
    ],
  },
};
export default content;
