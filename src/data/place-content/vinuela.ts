import type { PlaceContent } from './types';

// Feitenblad Viñuela (november 2026)
// - Inwoners: 2.044 (INE, 1 januari 2025); 27,2 km²; hoogte circa 150 m; 48 km naar Málaga.
// - Kernen: Viñuela, Los Romanes, Los Gómez.
// - Buitenlandse inwoners (2022): 895 van 2.106 (42%), van wie 537 Britten.
// - Embalse de La Viñuela: grootste stuwmeer van de provincie, 170 hm³, aan de Guaro; in februari 2026 weer boven het niveau van voor de droogte (El Español).
// - Bezienswaardigheden: kerk San José, Ermita de la Virgen de las Angustias, Torre de la Atalaya, Museo de los Verdiales (Los Romanes).
// - Fiesta's: San José (maart), romería bij het stuwmeer (eind mei, sinds 1991), Feria de Los Gómez (half juli), Feria de Viñuela (eind juli/begin augustus),
//   Feria de Los Romanes (half augustus), Feria de la Pasa (half september).
// - Woningprijzen: circa € 1.600 per m² appartementen, € 2.050 per m² huizen (RealAdvisor, oktober 2026).
const content: PlaceContent = {
  sources: [
    'https://es.hispanopedia.com/wiki/La_Viñuela',
    'https://www.iagua.es/data/infraestructuras/embalses/vinuela',
    'https://realadvisor.es/es/precios-viviendas/municipio-vinuela',
  ],
  nl: {
    title: 'Viñuela: wonen en kopen aan het meer van de Axarquía',
    description: 'Alles over Viñuela: het stuwmeer, de dorpen Viñuela, Los Romanes en Los Gómez, de grote Britse gemeenschap, woningprijzen en waar u op let bij landelijke huizen.',
    lead: 'Midden in de Axarquía ligt het grootste meer van de provincie Málaga, met daaromheen glooiende heuvels, olijfbomen en het dorp Viñuela. Hier krijgt u veel ruimte voor uw geld.',
    intro: [
      'Viñuela is een kleine gemeente van ruim 2.000 inwoners in het binnenland, ongeveer twintig minuten van de kust bij Torre del Mar. Het dorp ligt op zo’n 150 meter hoogte aan de oever van het Embalse de La Viñuela, het grootste stuwmeer van de provincie. Daarachter rijst de bergrug van La Maroma op.',
      'Bijna de helft van de inwoners heeft een buitenlandse nationaliteit, de meesten Britten. Velen wonen in landhuizen en villa’s verspreid over de heuvels rond het meer, en in de kernen Los Romanes en Los Gómez.',
      'In droge jaren stond het meer bijna leeg; na de regen van 2025 en 2026 is het weer goed gevuld.',
    ],
    facts: [
      ['Inwoners', 'ruim 2.000 (2025)'],
      ['Buitenlandse inwoners', 'circa 42%, vooral Britten'],
      ['Ligging', 'binnenland, circa 150 m'],
      ['Naar de kust', 'circa 20 minuten'],
      ['Málaga (luchthaven)', 'circa 50 minuten rijden'],
      ['Prijsniveau', 'laag tot gemiddeld'],
    ],
    forWhom: 'Voor wie ruimte, rust en natuur zoekt en een auto heeft. Ideaal voor een villa of landhuis met zwembad en grond, met de kust en Vélez-Málaga op twintig minuten.',
    see: {
      title: 'Zien en doen in Viñuela: het meer, wandelen en verdiales',
      description: 'Wat te doen in Viñuela: rond het Embalse de La Viñuela wandelen en fietsen, kajakken, het Museo de los Verdiales in Los Romanes en de feria’s van de drie dorpen.',
      lead: 'In Viñuela draait alles om het meer: wandelen langs de oever, picknicken onder de pijnbomen of het water op met een kajak.',
      items: [
        { name: 'Embalse de La Viñuela', text: 'Het grootste stuwmeer van de provincie, met turquoise water tegen de achtergrond van La Maroma. Rond het meer liggen picknickplaatsen en wandel- en fietsroutes; op het water kunt u kajakken en suppen.' },
        { name: 'Het dorp Viñuela', text: 'Een klein wit dorp met de kerk van San José en de kapel van de Virgen de las Angustias.' },
        { name: 'Museo de los Verdiales', text: 'In Los Romanes staat een museum over de verdiales, de oude volksmuziek van de bergen achter Málaga, met kleurrijke hoeden en violen.' },
        { name: 'Torre de la Atalaya', text: 'Een oude uitkijktoren uit de Moorse tijd op een heuvel in de gemeente.' },
      ],
      fiestas: [
        { name: 'San José', when: 'maart', text: 'feest van de beschermheilige.' },
        { name: 'Romería', when: 'eind mei', text: 'een bedevaart naar het meer met de drie dorpen samen.' },
        { name: 'Feria’s van Los Gómez, Viñuela en Los Romanes', when: 'juli en augustus', text: 'elk dorp heeft zijn eigen zomerfeest.' },
        { name: 'Feria de la Pasa', when: 'half september', text: 'het feest van de rozijnenoogst.' },
      ],
    },
    living: {
      title: 'Wonen in Viñuela: villa’s, landhuizen en prijzen',
      description: 'Een huis kopen in Viñuela? Welke woningen er zijn, wat ze kosten, voorzieningen en waar u op let bij landelijke huizen rond het meer.',
      lead: 'Viñuela is een van de betaalbaarste plekken in de Axarquía voor een vrijstaand huis met grond. De keerzijde: u bent afhankelijk van de auto.',
      sections: [
        { h: 'Wat voor woningen er zijn', p: [
          'Vooral vrijstaande villa’s en landhuizen (<em>cortijos</em>) op de heuvels rond het meer, vaak met zwembad, terrassen en een stuk grond met olijf- of amandelbomen. In de dorpen dorpshuizen en een paar nieuwere rijtjeshuizen.',
        ] },
        { h: 'Wat een woning kost', p: [
          'In oktober 2026 lag de gemiddelde vraagprijs rond de € 2.050 per m² voor huizen (RealAdvisor), ver onder de kust. Reken op ongeveer 10% <a href="/nl/gidsen/kosten-koper-spanje/">kosten koper</a> en op een budget voor onderhoud of renovatie.',
        ] },
        { h: 'Voorzieningen', p: [
          'In Viñuela en Los Romanes zijn kleine winkels, een gezondheidspost, een basisschool en restaurants. Voor grote supermarkten, het ziekenhuis en de middelbare school rijdt u naar Vélez-Málaga, ongeveer een kwartier.',
        ] },
        { h: 'Let op in het buitengebied', p: [
          'Veel huizen rond het meer liggen op landelijke grond (<em>suelo rústico</em>) en zijn in de loop der jaren uitgebreid. Controleer de juridische status van huis, zwembad en bijgebouwen, de toegangsweg en de wateraansluiting. Lees onze gidsen over <a href="/nl/gidsen/finca-kopen-in-spanje/">finca kopen</a> en <a href="/nl/gidsen/afo-legaliseren-andalusie/">AFO en legaliseren</a>.',
        ] },
        { h: 'Verbouwen in Viñuela', p: [
          'Typische klussen zijn daken en terrassen waterdicht maken, zwembaden renoveren, keermuren herstellen en isoleren. Voor eigenaren die niet het hele jaar in Spanje zijn, is <a href="/nl/sleutelbeheer/">sleutelbeheer</a> hier extra belangrijk: een huis op het platteland staat er alleen voor. Laat een woning vóór aankoop <a href="/nl/aankoopkeuring/">keuren</a>.',
        ] },
      ],
    },
    faq: [
      { q: 'Kun je zwemmen in het meer van Viñuela?', a: 'Het meer is een drinkwaterreservoir. Kajakken en suppen kan; kijk ter plaatse naar de borden voor wat wel en niet mag.' },
      { q: 'Hoe ver is Viñuela van de kust?', a: 'Ongeveer twintig minuten met de auto naar Torre del Mar en Vélez-Málaga.' },
      { q: 'Wonen er veel buitenlanders in Viñuela?', a: 'Ja, ruim 40% van de inwoners, vooral Britten. Daarnaast wonen er onder meer Duitsers en Fransen.' },
    ],
  },
  en: {
    title: 'Viñuela: living and buying by the Axarquía’s lake',
    description: 'All about Viñuela: the reservoir, the villages of Viñuela, Los Romanes and Los Gómez, the large British community, property prices and what to watch for with rural homes.',
    lead: 'In the middle of the Axarquía lies the largest lake in the province of Málaga, surrounded by rolling hills, olive trees and the village of Viñuela. Here you get plenty of space for your money.',
    intro: [
      'Viñuela is a small inland municipality of just over 2,000 residents, about twenty minutes from the coast at Torre del Mar. The village sits at about 150 metres on the shore of the Embalse de La Viñuela, the largest reservoir in the province, with the La Maroma ridge rising behind it.',
      'Nearly half of residents are foreign nationals, most of them British. Many live in country houses and villas spread over the hills around the lake, and in the hamlets of Los Romanes and Los Gómez.',
      'In dry years the lake was almost empty; after the rain of 2025 and 2026 it is well filled again.',
    ],
    facts: [
      ['Population', 'just over 2,000 (2025)'],
      ['Foreign residents', 'about 42%, mostly British'],
      ['Setting', 'inland, about 150 m'],
      ['To the coast', 'about 20 minutes'],
      ['Málaga airport', 'about 50 minutes by car'],
      ['Price level', 'low to average'],
    ],
    forWhom: 'People looking for space, peace and nature who have a car. Ideal for a villa or country house with a pool and land, with the coast and Vélez-Málaga twenty minutes away.',
    see: {
      title: 'Things to do in Viñuela: the lake, walking and verdiales',
      description: 'What to do in Viñuela: walking and cycling around the Embalse de La Viñuela, kayaking, the Museo de los Verdiales in Los Romanes and the ferias of the three villages.',
      lead: 'In Viñuela everything revolves around the lake: walking along the shore, picnicking under the pines or getting out on the water in a kayak.',
      items: [
        { name: 'Embalse de La Viñuela', text: 'The largest reservoir in the province, with turquoise water against the backdrop of La Maroma. Around the lake are picnic areas and walking and cycling routes; on the water you can kayak and paddleboard.' },
        { name: 'Viñuela village', text: 'A small white village with the church of San José and the chapel of the Virgen de las Angustias.' },
        { name: 'Museo de los Verdiales', text: 'Los Romanes has a museum about verdiales, the old folk music of the mountains behind Málaga, with colourful hats and violins.' },
        { name: 'Torre de la Atalaya', text: 'An old Moorish-era watchtower on a hill in the municipality.' },
      ],
      fiestas: [
        { name: 'San José', when: 'March', text: 'the patron saint’s day.' },
        { name: 'Romería', when: 'late May', text: 'a pilgrimage to the lake with the three villages together.' },
        { name: 'Ferias of Los Gómez, Viñuela and Los Romanes', when: 'July and August', text: 'each village has its own summer fair.' },
        { name: 'Feria de la Pasa', when: 'mid-September', text: 'the raisin harvest festival.' },
      ],
    },
    living: {
      title: 'Living in Viñuela: villas, country houses and prices',
      description: 'Buying a home in Viñuela? The types of property, what they cost, facilities and what to watch for with rural houses around the lake.',
      lead: 'Viñuela is one of the most affordable places in the Axarquía for a detached house with land. The downside: you depend on the car.',
      sections: [
        { h: 'Types of property', p: [
          'Mostly detached villas and country houses (<em>cortijos</em>) on the hills around the lake, often with a pool, terraces and land with olive or almond trees. In the villages, village houses and a few newer townhouses.',
        ] },
        { h: 'What a home costs', p: [
          'In October 2026 average asking prices were around €2,050 per m² for houses (RealAdvisor), well below the coast. Allow around 10% for <a href="/en/guides/buying-costs-in-spain/">buying costs</a> and a budget for maintenance or renovation.',
        ] },
        { h: 'Facilities', p: [
          'Viñuela and Los Romanes have small shops, a health post, a primary school and restaurants. For large supermarkets, the hospital and secondary school you drive to Vélez-Málaga, about a quarter of an hour.',
        ] },
        { h: 'Watch out in the countryside', p: [
          'Many houses around the lake are on rural land (<em>suelo rústico</em>) and have been extended over the years. Check the legal status of the house, pool and outbuildings, the access track and the water connection. Read our guides to <a href="/en/guides/buying-a-finca-in-spain/">buying a finca</a> and <a href="/en/guides/afo-legalisation-andalusia/">AFO and legalisation</a>.',
        ] },
        { h: 'Renovating in Viñuela', p: [
          'Typical jobs are waterproofing roofs and terraces, renovating pools, repairing retaining walls and insulating. For owners who are not in Spain all year, <a href="/en/key-holding/">key holding</a> matters even more here: a country house stands on its own. Have a property <a href="/en/property-survey/">surveyed</a> before you buy.',
        ] },
      ],
    },
    faq: [
      { q: 'Can you swim in the Viñuela lake?', a: 'The lake is a drinking-water reservoir. Kayaking and paddleboarding are possible; check the signs on site for what is allowed.' },
      { q: 'How far is Viñuela from the coast?', a: 'About twenty minutes by car to Torre del Mar and Vélez-Málaga.' },
      { q: 'Do many foreigners live in Viñuela?', a: 'Yes, over 40% of residents, mostly British, along with Germans and French.' },
    ],
  },
  de: {
    title: 'Viñuela: Wohnen und Kaufen am See der Axarquía',
    description: 'Alles über Viñuela: der Stausee, die Dörfer Viñuela, Los Romanes und Los Gómez, die große britische Gemeinschaft, Immobilienpreise und worauf Sie bei ländlichen Häusern achten sollten.',
    lead: 'Mitten in der Axarquía liegt der größte See der Provinz Málaga, umgeben von sanften Hügeln, Olivenbäumen und dem Dorf Viñuela. Hier bekommen Sie viel Platz für Ihr Geld.',
    intro: [
      'Viñuela ist eine kleine Gemeinde im Landesinneren mit gut 2.000 Einwohnern, etwa zwanzig Minuten von der Küste bei Torre del Mar. Das Dorf liegt auf etwa 150 Metern am Ufer des Embalse de La Viñuela, des größten Stausees der Provinz, dahinter erhebt sich der Bergrücken von La Maroma.',
      'Fast die Hälfte der Einwohner hat eine ausländische Staatsangehörigkeit, die meisten sind Briten. Viele wohnen in Landhäusern und Villen, die über die Hügel rund um den See verteilt sind, und in den Weilern Los Romanes und Los Gómez.',
      'In trockenen Jahren war der See fast leer; nach dem Regen von 2025 und 2026 ist er wieder gut gefüllt.',
    ],
    facts: [
      ['Einwohner', 'gut 2.000 (2025)'],
      ['Ausländische Einwohner', 'etwa 42%, vor allem Briten'],
      ['Lage', 'Landesinneres, etwa 150 m'],
      ['Zur Küste', 'etwa 20 Minuten'],
      ['Flughafen Málaga', 'etwa 50 Minuten mit dem Auto'],
      ['Preisniveau', 'niedrig bis durchschnittlich'],
    ],
    forWhom: 'Für alle, die Platz, Ruhe und Natur suchen und ein Auto haben. Ideal für eine Villa oder ein Landhaus mit Pool und Grundstück, mit der Küste und Vélez-Málaga zwanzig Minuten entfernt.',
    see: {
      title: 'Sehenswertes in Viñuela: der See, Wandern und Verdiales',
      description: 'Was man in Viñuela unternehmen kann: Wandern und Radfahren am Embalse de La Viñuela, Kajak, das Museo de los Verdiales in Los Romanes und die Ferias der drei Dörfer.',
      lead: 'In Viñuela dreht sich alles um den See: am Ufer wandern, unter Pinien picknicken oder mit dem Kajak aufs Wasser.',
      items: [
        { name: 'Embalse de La Viñuela', text: 'Der größte Stausee der Provinz, mit türkisfarbenem Wasser vor der Kulisse von La Maroma. Rund um den See gibt es Picknickplätze sowie Wander- und Radwege; auf dem Wasser können Sie Kajak fahren und stehpaddeln.' },
        { name: 'Das Dorf Viñuela', text: 'Ein kleines weißes Dorf mit der Kirche San José und der Kapelle der Virgen de las Angustias.' },
        { name: 'Museo de los Verdiales', text: 'In Los Romanes steht ein Museum über die Verdiales, die alte Volksmusik der Berge hinter Málaga, mit bunten Hüten und Geigen.' },
        { name: 'Torre de la Atalaya', text: 'Ein alter Wachturm aus maurischer Zeit auf einem Hügel der Gemeinde.' },
      ],
      fiestas: [
        { name: 'San José', when: 'März', text: 'Fest des Schutzpatrons.' },
        { name: 'Romería', when: 'Ende Mai', text: 'eine Wallfahrt zum See, mit allen drei Dörfern.' },
        { name: 'Ferias von Los Gómez, Viñuela und Los Romanes', when: 'Juli und August', text: 'jedes Dorf hat sein eigenes Sommerfest.' },
        { name: 'Feria de la Pasa', when: 'Mitte September', text: 'das Fest der Rosinenernte.' },
      ],
    },
    living: {
      title: 'Wohnen in Viñuela: Villen, Landhäuser und Preise',
      description: 'Ein Haus in Viñuela kaufen? Welche Immobilien es gibt, was sie kosten, die Versorgung und worauf Sie bei ländlichen Häusern am See achten sollten.',
      lead: 'Viñuela ist einer der günstigsten Orte der Axarquía für ein freistehendes Haus mit Grundstück. Die Kehrseite: Sie sind auf das Auto angewiesen.',
      sections: [
        { h: 'Welche Immobilien es gibt', p: [
          'Vor allem freistehende Villen und Landhäuser (<em>cortijos</em>) auf den Hügeln rund um den See, oft mit Pool, Terrassen und Land mit Oliven- oder Mandelbäumen. In den Dörfern Dorfhäuser und einige neuere Reihenhäuser.',
        ] },
        { h: 'Was eine Immobilie kostet', p: [
          'Im Oktober 2026 lagen die durchschnittlichen Angebotspreise bei rund 2.050 € pro m² für Häuser (RealAdvisor), weit unter der Küste. Rechnen Sie mit rund 10% <a href="/de/ratgeber/kaufnebenkosten-spanien/">Kaufnebenkosten</a> und einem Budget für Instandhaltung oder Renovierung.',
        ] },
        { h: 'Versorgung', p: [
          'In Viñuela und Los Romanes gibt es kleine Geschäfte, eine Gesundheitsstation, eine Grundschule und Restaurants. Für große Supermärkte, das Krankenhaus und weiterführende Schulen fahren Sie etwa eine Viertelstunde nach Vélez-Málaga.',
        ] },
        { h: 'Vorsicht im Außenbereich', p: [
          'Viele Häuser am See stehen auf ländlichem Boden (<em>suelo rústico</em>) und wurden über die Jahre erweitert. Prüfen Sie den rechtlichen Status von Haus, Pool und Nebengebäuden, die Zufahrt und den Wasseranschluss. Lesen Sie unsere Ratgeber <a href="/de/ratgeber/finca-kaufen-spanien/">Finca kaufen</a> und <a href="/de/ratgeber/afo-legalisierung-andalusien/">AFO und Legalisierung</a>.',
        ] },
        { h: 'Renovieren in Viñuela', p: [
          'Typische Arbeiten sind das Abdichten von Dächern und Terrassen, Poolsanierung, Stützmauern und Dämmung. Für Eigentümer, die nicht das ganze Jahr in Spanien sind, ist <a href="/de/hausbetreuung/">Hausbetreuung</a> hier besonders wichtig: Ein Landhaus steht allein. Lassen Sie eine Immobilie vor dem Kauf <a href="/de/immobiliengutachten/">begutachten</a>.',
        ] },
      ],
    },
    faq: [
      { q: 'Kann man im See von Viñuela schwimmen?', a: 'Der See ist ein Trinkwasserspeicher. Kajak und Stehpaddeln sind möglich; achten Sie vor Ort auf die Schilder, was erlaubt ist.' },
      { q: 'Wie weit ist Viñuela von der Küste entfernt?', a: 'Etwa zwanzig Minuten mit dem Auto nach Torre del Mar und Vélez-Málaga.' },
      { q: 'Leben viele Ausländer in Viñuela?', a: 'Ja, über 40% der Einwohner, vor allem Briten, dazu Deutsche und Franzosen.' },
    ],
  },
  sv: {
    title: 'Viñuela: bo och köpa vid Axarquías sjö',
    description: 'Allt om Viñuela: reservoaren, byarna Viñuela, Los Romanes och Los Gómez, den stora brittiska gemenskapen, bostadspriser och vad du ska tänka på med hus på landet.',
    lead: 'Mitt i Axarquía ligger den största sjön i provinsen Málaga, omgiven av böljande kullar, olivträd och byn Viñuela. Här får du mycket utrymme för pengarna.',
    intro: [
      'Viñuela är en liten inlandskommun med drygt 2 000 invånare, cirka tjugo minuter från kusten vid Torre del Mar. Byn ligger på cirka 150 meters höjd vid stranden av Embalse de La Viñuela, provinsens största reservoar, med bergskammen La Maroma bakom.',
      'Nästan hälften av invånarna har utländskt medborgarskap, de flesta brittiskt. Många bor i hus på landet och villor utspridda över kullarna runt sjön, och i småorterna Los Romanes och Los Gómez.',
      'Under torra år var sjön nästan tom; efter regnen 2025 och 2026 är den åter väl fylld.',
    ],
    facts: [
      ['Invånare', 'drygt 2 000 (2025)'],
      ['Utländska invånare', 'cirka 42 %, mest britter'],
      ['Läge', 'inland, cirka 150 m'],
      ['Till kusten', 'cirka 20 minuter'],
      ['Málaga (flygplats)', 'cirka 50 minuter med bil'],
      ['Prisnivå', 'låg till medel'],
    ],
    forWhom: 'För dig som söker utrymme, lugn och natur och har bil. Perfekt för en villa eller ett hus på landet med pool och mark, med kusten och Vélez-Málaga tjugo minuter bort.',
    see: {
      title: 'Se och göra i Viñuela: sjön, vandringar och verdiales',
      description: 'Vad du kan göra i Viñuela: vandra och cykla runt Embalse de La Viñuela, paddla kajak, Museo de los Verdiales i Los Romanes och de tre byarnas ferior.',
      lead: 'I Viñuela kretsar allt kring sjön: promenera längs stranden, ha picknick under tallarna eller ge dig ut på vattnet i kajak.',
      items: [
        { name: 'Embalse de La Viñuela', text: 'Provinsens största reservoar, med turkost vatten mot La Maroma i bakgrunden. Runt sjön finns picknickplatser och vandrings- och cykelleder; på vattnet kan du paddla kajak och SUP.' },
        { name: 'Byn Viñuela', text: 'En liten vit by med kyrkan San José och kapellet Virgen de las Angustias.' },
        { name: 'Museo de los Verdiales', text: 'I Los Romanes finns ett museum om verdiales, den gamla folkmusiken från bergen bakom Málaga, med färgglada hattar och fioler.' },
        { name: 'Torre de la Atalaya', text: 'Ett gammalt vakttorn från den moriska tiden på en kulle i kommunen.' },
      ],
      fiestas: [
        { name: 'San José', when: 'mars', text: 'skyddshelgonets dag.' },
        { name: 'Romería', when: 'slutet av maj', text: 'en vallfärd till sjön med de tre byarna tillsammans.' },
        { name: 'Ferior i Los Gómez, Viñuela och Los Romanes', when: 'juli och augusti', text: 'varje by har sin egen sommarfest.' },
        { name: 'Feria de la Pasa', when: 'mitten av september', text: 'russinskördens fest.' },
      ],
    },
    living: {
      title: 'Bo i Viñuela: villor, hus på landet och priser',
      description: 'Köpa hus i Viñuela? Vilka bostäder som finns, vad de kostar, service och vad du ska tänka på med hus på landet runt sjön.',
      lead: 'Viñuela är en av de billigaste orterna i Axarquía för ett fristående hus med mark. Nackdelen: du är beroende av bilen.',
      sections: [
        { h: 'Vilka bostäder som finns', p: [
          'Mest fristående villor och hus på landet (<em>cortijos</em>) på kullarna runt sjön, ofta med pool, terrasser och mark med oliv- eller mandelträd. I byarna byhus och några nyare radhus.',
        ] },
        { h: 'Vad en bostad kostar', p: [
          'I oktober 2026 låg det genomsnittliga utgångspriset kring 2 050 € per m² för hus (RealAdvisor), långt under kusten. Räkna med cirka 10 % i <a href="/sv/guider/kopa-hus-i-spanien-kostnader/">köpkostnader</a> och en budget för underhåll eller renovering.',
        ] },
        { h: 'Service', p: [
          'Viñuela och Los Romanes har små affärer, en vårdmottagning, en grundskola och restauranger. För stora stormarknader, sjukhuset och gymnasiet kör du till Vélez-Málaga, cirka en kvart.',
        ] },
        { h: 'Se upp på landsbygden', p: [
          'Många hus runt sjön ligger på landsbygdsmark (<em>suelo rústico</em>) och har byggts ut genom åren. Kontrollera den rättsliga statusen för hus, pool och uthus, tillfartsvägen och vattenanslutningen. Läs våra guider om att <a href="/sv/guider/kopa-finca-i-spanien/">köpa finca</a> och om <a href="/sv/guider/afo-andalusien/">AFO och legalisering</a>.',
        ] },
        { h: 'Renovera i Viñuela', p: [
          'Typiska jobb är att täta tak och terrasser, renovera pooler, laga stödmurar och isolera. För ägare som inte är i Spanien hela året är <a href="/sv/tillsyn/">tillsyn av huset</a> ännu viktigare här: ett hus på landet står ensamt. Låt <a href="/sv/besiktning/">besiktiga</a> bostaden före köpet.',
        ] },
      ],
    },
    faq: [
      { q: 'Kan man bada i sjön vid Viñuela?', a: 'Sjön är en dricksvattenreservoar. Kajak och SUP går bra; kontrollera skyltarna på plats för vad som är tillåtet.' },
      { q: 'Hur långt är det från Viñuela till kusten?', a: 'Cirka tjugo minuter med bil till Torre del Mar och Vélez-Málaga.' },
      { q: 'Bor det många utlänningar i Viñuela?', a: 'Ja, över 40 % av invånarna, mest britter, men också tyskar och fransmän.' },
    ],
  },
};
export default content;
