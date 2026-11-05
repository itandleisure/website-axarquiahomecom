import type { Topic } from './types';

// Kostenpagina's in het Nederlands. Bedragen: indicaties Axarquía, incl. materiaal en arbeid, excl. btw.
export const costsNl: Topic[] = [
  {
    key: 'badkamer',
    slug: 'badkamer-renoveren',
    title: 'Wat kost een badkamer renoveren in Spanje?',
    seoTitle: 'Badkamer renoveren in Spanje: kosten in de Axarquía (2026)',
    short: 'Badkamer',
    description: 'Wat kost een nieuwe badkamer in de Axarquía? Prijzen voor opfrissen, een complete renovatie en een inloopdouche, plus wat de prijs bepaalt en waar u op let.',
    lead: 'Een nieuwe badkamer is de verbouwing die we het vaakst doen in de Axarquía. Hier ziet u wat het kost, van alleen nieuw sanitair tot een complete badkamer met inloopdouche.',
    keyword: 'badkamer renoveren spanje kosten',
    dienst: 'badkamer-keuken',
    onderwerp: 'Ik wil graag een prijs voor het renoveren van mijn badkamer.',
    answer: 'Een complete badkamer van 4 tot 6 m² kost in de Axarquía meestal <strong>€ 6.000 tot € 12.000</strong> exclusief btw, inclusief sloopwerk, leidingen, tegels en sanitair. Alleen sanitair en kranen vervangen kan vanaf ongeveer € 2.500. Een ruime badkamer met maatwerk loopt op tot € 18.000 – € 25.000.',
    sections: [
      {
        id: 'prijzen',
        h: 'Prijzen per type badkamerrenovatie',
        html: '<p>De bedragen zijn indicaties voor 2026, inclusief materiaal en arbeid en exclusief btw.</p>',
        table: {
          head: ['Wat', 'Wat het inhoudt', 'Indicatie'],
          rows: [
            ['Opfrissen', 'Nieuw toilet, wastafel en kranen, kitwerk, schilderwerk. Tegels blijven.', '€ 2.500 – € 5.000'],
            ['Bad eruit, inloopdouche erin', 'Bad slopen, douchevloer op niveau, glazen wand, tegels in de douchehoek', '€ 3.000 – € 6.000'],
            ['Complete renovatie, kleine badkamer (4–6 m²)', 'Alles eruit, nieuwe leidingen en afvoer, tegels vloer en wand, sanitair middensegment', '€ 6.000 – € 12.000'],
            ['Complete renovatie, ruime badkamer', 'Groter oppervlak, dubbele wastafel, inbouwkranen, betere tegels', '€ 12.000 – € 18.000'],
            ['Luxe of maatwerk', 'Natuursteen of microcement, maatwerkmeubel, vloerverwarming', '€ 18.000 – € 25.000+'],
          ],
          note: 'Extra badkamer bijbouwen (nieuwe afvoer, eventueel vergunning) begint meestal rond € 10.000.',
        },
      },
      {
        id: 'factoren',
        h: 'Wat bepaalt de prijs?',
        html: `<ul>
<li><strong>Leidingen en afvoer.</strong> In oudere dorpshuizen liggen vaak nog loden of ijzeren leidingen en smalle afvoeren. Die vervangt u bij een complete renovatie direct mee. Dat kost meer, maar voorkomt lekkages later.</li>
<li><strong>Vocht achter de tegels.</strong> Bij het slopen komt regelmatig vocht of rotte ondervloer tevoorschijn. Houd 10% buffer aan.</li>
<li><strong>Tegels en sanitair.</strong> Spaanse tegels en sanitair zijn goed en betaalbaar. Grote formaten, microcement of Noord-Europese merken kosten meer, ook in arbeid.</li>
<li><strong>Bereikbaarheid.</strong> In een smal straatje in Frigiliana of Cómpeta gaat al het puin met de hand of een kleine dumper weg. Dat telt op.</li>
<li><strong>Warm water.</strong> Een oude elektrische boiler is een goed moment om te vervangen, bijvoorbeeld door een warmtepompboiler.</li>
</ul>`,
      },
      {
        id: 'voorbeeld',
        h: 'Rekenvoorbeeld: badkamer in een dorpshuis',
        html: '<p>Een badkamer van 5 m² op de eerste verdieping van een dorpshuis in Torrox. Het bad gaat eruit voor een inloopdouche van 90 × 120 cm, leidingen en afvoer worden vernieuwd, vloer en wanden betegeld met Spaanse tegels, nieuw toilet en badmeubel.</p>',
        table: {
          head: ['Onderdeel', 'Indicatie'],
          rows: [
            ['Slopen en puin afvoeren', '€ 800 – € 1.200'],
            ['Leidingen, afvoer en elektra', '€ 1.500 – € 2.500'],
            ['Tegelwerk vloer en wanden (± 25 m²)', '€ 2.000 – € 3.000'],
            ['Sanitair, kranen, douchewand, meubel', '€ 2.000 – € 3.500'],
            ['Afwerking, schilderwerk, kitwerk', '€ 400 – € 800'],
            ['<strong>Totaal</strong>', '<strong>€ 6.700 – € 11.000</strong>'],
          ],
        },
        after: '<p>Doorlooptijd: twee tot drie weken. Voor een badkamerrenovatie zonder wijziging van de constructie volstaat in de meeste gemeentes een melding (<em>declaración responsable</em>).</p>',
      },
      {
        id: 'btw',
        h: 'Btw, vergunning en betalen',
        html: '<p>Over renovatiewerk aan een woning voor particulier gebruik geldt onder voorwaarden het verlaagde btw-tarief van 10% in plaats van 21%, als de materialen niet meer dan 40% van het totaal uitmaken. Vraag om een offerte per onderdeel en betaal in termijnen per afgerond onderdeel. Lees meer in onze gids over <a href="/nl/gidsen/kosten-huis-renoveren-spanje/">de kosten van een huis renoveren</a>.</p>',
      },
    ],
    faq: [
      { q: 'Hoelang duurt een nieuwe badkamer?', a: 'Een complete badkamer van gemiddelde grootte duurt meestal twee tot drie weken. Bij maatwerk of als er tegels of meubels besteld moeten worden, iets langer.' },
      { q: 'Kan het terwijl ik in Nederland ben?', a: 'Ja. U kiest vooraf tegels en sanitair aan de hand van foto’s of een showroombezoek, en u krijgt tijdens het werk wekelijks foto’s.' },
      { q: 'Is een inloopdouche duurder dan een bad?', a: 'Niet per se. Een douche op vloerniveau vraagt wel goed afschot en een waterdichte laag onder de tegels, en dat werk moet goed gebeuren. Daardoor is het iets duurder dan een standaard douchebak.' },
    ],
    links: [
      { href: '/nl/renovatie/', label: 'Renovatie en verbouwing' },
      { href: '/nl/gidsen/kosten-huis-renoveren-spanje/', label: 'Gids: wat kost een huis renoveren in Spanje?' },
      { href: '/nl/problemen/vocht-en-schimmel/', label: 'Vocht en schimmel in huis' },
    ],
    related: ['costs:keuken', 'costs:dak', 'problems:vocht'],
    sources: [
      { name: 'Habitissimo, prijsgids badkamer renoveren (reformar baño)', url: 'https://www.habitissimo.es/presupuestos/reformar-bano' },
      { name: 'Cronoshare, prijzen badkamerrenovatie in Vélez-Málaga', url: 'https://www.cronoshare.com/servicios/presupuesto-reforma-integral-bano/malaga/velez-malaga' },
      { name: 'El Español, “reformar un baño ya supera los 7.000 euros” (mei 2026)', url: 'https://www.elespanol.com/mujer/interiorismo/20260514/expertos-coinciden-reformar-bano-costaba-euros-ahora-supera-espana/1003744232504_0.amp.html' },
      { name: 'Ley 37/1992 del IVA, art. 91: verlaagd btw-tarief voor renovatie', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1992-28740' },
    ],
    ctaTitle: 'Een prijs voor uw badkamer?',
    ctaText: 'Stuur een paar foto’s en de maten. U krijgt een offerte per onderdeel.',
    minutes: 5,
    published: '2026-11-05',
  },
  {
    key: 'keuken',
    slug: 'keuken-renoveren',
    title: 'Wat kost een nieuwe keuken in Spanje?',
    seoTitle: 'Nieuwe keuken in Spanje: kosten in de Axarquía (2026)',
    short: 'Keuken',
    description: 'Wat kost een nieuwe keuken in de Axarquía? Prijzen voor nieuwe fronten, een complete keuken en maatwerk met kookeiland, plus werkbladen, apparatuur en installaties.',
    lead: 'Veel huizen in de Axarquía hebben nog een keuken uit de jaren negentig, met tegels tot aan het plafond. Een nieuwe keuken verandert het huis. Zo ziet de rekening eruit.',
    keyword: 'nieuwe keuken spanje kosten',
    dienst: 'badkamer-keuken',
    onderwerp: 'Ik wil graag een prijs voor een nieuwe keuken.',
    answer: 'Een complete nieuwe keuken van 8 tot 10 m² kost in de Axarquía meestal <strong>€ 8.000 tot € 15.000</strong> exclusief btw, inclusief slopen, installaties, kasten, werkblad en tegelwerk. Apparatuur komt daar vaak bij. Alleen fronten en werkblad vervangen kan vanaf ongeveer € 3.000; maatwerk met kookeiland loopt op tot € 30.000.',
    sections: [
      {
        id: 'prijzen',
        h: 'Prijzen per type keukenrenovatie',
        table: {
          head: ['Wat', 'Wat het inhoudt', 'Indicatie'],
          rows: [
            ['Opfrissen', 'Nieuwe fronten, greepjes en werkblad op de bestaande kasten', '€ 3.000 – € 6.000'],
            ['Complete keuken, middensegment', 'Slopen, nieuwe leidingen en elektra, kasten, werkblad, wandtegels', '€ 8.000 – € 15.000'],
            ['Grotere keuken of hoger segment', 'Meer kasten, kwarts- of keramisch werkblad, betere beslag', '€ 15.000 – € 22.000'],
            ['Maatwerk met kookeiland', 'Eiland met afvoer en stroom in de vloer, open keuken, muur eruit', '€ 22.000 – € 30.000+'],
            ['Apparatuur (los)', 'Oven, kookplaat, afzuigkap, vaatwasser, koelkast', '€ 2.000 – € 6.000'],
          ],
          note: 'Een muur weghalen voor een open keuken vraagt bij een dragende muur een berekening van een architect of constructeur en meestal een vergunning.',
        },
      },
      {
        id: 'werkblad',
        h: 'Werkbladen: wat kiezen de meeste mensen?',
        table: {
          head: ['Werkblad', 'Per strekkende meter (geplaatst)'],
          rows: [
            ['Laminaat', '€ 100 – € 200'],
            ['Graniet (Spaans)', '€ 200 – € 400'],
            ['Kwartscomposiet (zoals Silestone)', '€ 300 – € 600'],
            ['Keramisch (zoals Dekton)', '€ 400 – € 800'],
          ],
        },
        after: '<p>Graniet en kwartscomposiet komen vaak uit Spanje zelf (de regio Almería is een groot centrum voor steen). Daardoor zijn ze hier relatief betaalbaar.</p>',
      },
      {
        id: 'factoren',
        h: 'Wat bepaalt de prijs?',
        html: `<ul>
<li><strong>Indeling.</strong> Als spoelbak en kookplaat op dezelfde plek blijven, scheelt dat leidingwerk.</li>
<li><strong>Elektra.</strong> Oude keukens hebben vaak te weinig groepen voor inductie, oven en vaatwasser tegelijk. Een nieuwe groepenkast of een hoger vermogen (<em>potencia contratada</em>) kan nodig zijn.</li>
<li><strong>Afzuiging.</strong> Een afzuigkap met afvoer naar buiten is beter dan recirculatie, maar vraagt een doorvoer door gevel of dak.</li>
<li><strong>Vloer.</strong> Komt de keuken op een nieuwe vloer of blijft de oude liggen? Een nieuwe vloer in één keer door de woonkamer is mooier, maar groter werk.</li>
</ul>`,
      },
      {
        id: 'planning',
        h: 'Planning en doorlooptijd',
        html: '<p>Reken op vier tot zes weken levertijd voor kasten en werkblad (het werkblad wordt pas ingemeten als de kasten staan) en één tot twee weken werk op locatie. Tijdens de verbouwing heeft u geen keuken: plan het dus bij voorkeur als u niet in Spanje bent.</p>',
      },
    ],
    faq: [
      { q: 'Kan ik een keuken uit Nederland of bij IKEA kopen en laten plaatsen?', a: 'Dat kan. U betaalt dan alleen voor montage, installaties en afwerking. Let op dat Nederlandse en Spaanse aansluitingen en maten soms verschillen. Bespreek het vooraf, dan houden we er rekening mee.' },
      { q: 'Heb ik een vergunning nodig voor een nieuwe keuken?', a: 'Voor het vervangen van een keuken zonder constructieve wijziging volstaat meestal een melding (declaración responsable) bij de gemeente. Gaat er een dragende muur uit, dan is een vergunning met een project nodig.' },
      { q: 'Wat kost alleen een nieuw werkblad?', a: 'Voor een gemiddelde keuken met 3 tot 4 meter werkblad rekent u op € 1.000 tot € 2.500 inclusief plaatsing en uitsparingen, afhankelijk van het materiaal.' },
    ],
    links: [
      { href: '/nl/renovatie/', label: 'Renovatie en verbouwing' },
      { href: '/nl/kosten/buitenkeuken/', label: 'Kosten van een buitenkeuken' },
      { href: '/nl/gidsen/kosten-huis-renoveren-spanje/', label: 'Gids: wat kost een huis renoveren in Spanje?' },
    ],
    related: ['costs:badkamer', 'costs:buitenkeuken', 'costs:airco'],
    sources: [
      { name: 'Habitissimo, prijsgids keuken renoveren (reformar cocina)', url: 'https://www.habitissimo.es/presupuestos/reformar-cocina' },
      { name: 'Cronoshare, wat kost het om een keuken te renoveren', url: 'https://www.cronoshare.com/blog/?p=1304' },
      { name: 'El Español, “reformar la cocina ya supera los 10.000 euros” (juli 2026)', url: 'https://www.elespanol.com/mujer/interiorismo/20260723/arquitecto-reformar-cocina-costaba-euros-ahora-supera-espana/1003744328876_0.html' },
    ],
    ctaTitle: 'Een nieuwe keuken?',
    ctaText: 'Stuur foto’s en de maten van uw keuken. U krijgt een voorstel en een prijs per onderdeel.',
    minutes: 5,
    published: '2026-11-05',
  },
  {
    key: 'zwembad',
    slug: 'zwembad-laten-bouwen',
    title: 'Wat kost een zwembad laten bouwen in Spanje?',
    seoTitle: 'Zwembad laten bouwen in Spanje: kosten in de Axarquía (2026)',
    short: 'Zwembad',
    description: 'Wat kost een zwembad in de Axarquía? Prijzen voor een prefab bad, een betonnen bad van 8 × 4 meter en een compleet zwembad met terras, plus vergunning en jaarlijkse kosten.',
    lead: 'Een zwembad hoort bij een huis in de zon, en het maakt een woning beter verhuurbaar en verkoopbaar. Maar op een helling in de Axarquía is het meer dan een gat graven. Dit kost het.',
    keyword: 'zwembad laten bouwen spanje kosten',
    dienst: 'zwembad',
    onderwerp: 'Ik wil graag een prijs voor een nieuw zwembad.',
    answer: 'Een betonnen zwembad van 8 × 4 meter met filterinstallatie kost in de Axarquía meestal <strong>€ 20.000 tot € 30.000</strong> exclusief btw. Compleet met terras, verlichting en zoutsysteem rekent u op <strong>€ 30.000 tot € 50.000</strong>. Op een helling met keermuren komt er vaak € 5.000 tot € 20.000 bij.',
    sections: [
      {
        id: 'prijzen',
        h: 'Prijzen per type zwembad',
        table: {
          head: ['Type', 'Wat het inhoudt', 'Indicatie'],
          rows: [
            ['Prefab polyester (± 7 × 3,5 m)', 'Kant-en-klare kuip, graafwerk, plaatsing, filter', '€ 15.000 – € 25.000'],
            ['Betonnen bad 8 × 4 m (gunite)', 'Graafwerk, gespoten beton, gresite-mozaïek, filter en pomp', '€ 20.000 – € 30.000'],
            ['Compleet zwembad', 'Betonnen bad plus terras rondom, verlichting, zoutelektrolyse, trap', '€ 30.000 – € 50.000'],
            ['Overloopbad of infinity-rand', 'Extra buffertank, techniek en afwerking', '+ € 10.000 – € 25.000'],
            ['Bestaand bad renoveren', 'Nieuwe gresite of coating, nieuwe pomp en filter, lekkages dichten', '€ 5.000 – € 15.000'],
          ],
          note: 'Graafwerk in rots, aanvoer over een smalle bergweg of keermuren op een helling kunnen de prijs flink verhogen.',
        },
      },
      {
        id: 'bijkomend',
        h: 'Bijkomende kosten',
        table: {
          head: ['Post', 'Indicatie'],
          rows: [
            ['Project van een architect of technisch ingenieur', '€ 1.500 – € 3.500'],
            ['Bouwleges (ICIO) en vergunning gemeente', 'meestal 2% – 4% van de bouwsom'],
            ['Hek of afdekking (aanbevolen bij kinderen of verhuur)', '€ 1.500 – € 5.000'],
            ['Warmtepomp voor zwembadverwarming', '€ 3.000 – € 6.000'],
          ],
        },
      },
      {
        id: 'jaarlijks',
        h: 'Wat kost een zwembad per jaar?',
        html: '<p>Reken voor een bad van 8 × 4 meter op ongeveer <strong>€ 1.200 tot € 2.500 per jaar</strong>: onderhoud door een zwembadman (wekelijks in de zomer, minder in de winter), chemicaliën of zout, stroom voor de pomp en water bijvullen. Bij droogte kunnen gemeentes het vullen van zwembaden beperken; vraag ernaar bij uw gemeente. Als u niet in Spanje bent, combineert u het onderhoud met <a href="/nl/sleutelbeheer/">sleutelbeheer</a>.</p>',
      },
      {
        id: 'vergunning',
        h: 'Vergunning en grond',
        html: '<p>Voor een nieuw zwembad heeft u een bouwvergunning nodig (<em>licencia de obra</em>) met een project. Op landelijke grond (<em>suelo no urbanizable</em>) gelden strengere regels, en bij een woning met AFO-status mag u vaak niets bijbouwen. Lees eerst onze gids over <a href="/nl/gidsen/afo-legaliseren-andalusie/">AFO en legaliseren</a> en kijk wat uw gemeente vraagt, bijvoorbeeld <a href="/nl/plaatsen/competa/bouwvergunning/">bouwvergunning in Cómpeta</a> of <a href="/nl/plaatsen/nerja/bouwvergunning/">in Nerja</a>.</p>',
      },
    ],
    faq: [
      { q: 'Hoelang duurt het bouwen van een zwembad?', a: 'Het werk zelf duurt vier tot acht weken. De vergunning kan, afhankelijk van de gemeente, enkele weken tot enkele maanden duren. Wie in de zomer wil zwemmen, begint in het najaar met de aanvraag.' },
      { q: 'Prefab of beton?', a: 'Prefab is sneller en vaak goedkoper, maar de maat en vorm liggen vast en de kuip moet over de weg aangevoerd worden. Op een finca met een smalle toegangsweg is dat soms onmogelijk. Beton is vrij in vorm en past op elke plek.' },
      { q: 'Wordt mijn huis meer waard met een zwembad?', a: 'In de Axarquía zoeken veel kopers en huurders een huis met zwembad. Voor vakantieverhuur is het bijna een vereiste. Het verhoogt dus vooral de verkoopbaarheid en de huurinkomsten.' },
    ],
    links: [
      { href: '/nl/zwembad/', label: 'Zwembad bouwen en onderhoud' },
      { href: '/nl/problemen/legionella/', label: 'Legionella in zwembad, jacuzzi en leidingen' },
      { href: '/nl/gidsen/afo-legaliseren-andalusie/', label: 'Gids: AFO en legaliseren' },
    ],
    related: ['costs:buitenkeuken', 'problems:legionella', 'costs:airco'],
    sources: [
      { name: 'Habitissimo, prijsgids zwembad bouwen (construir piscina)', url: 'https://www.habitissimo.es/presupuestos/construir-piscina' },
      { name: 'Cronoshare, wat kost het om een zwembad te bouwen', url: 'https://www.cronoshare.com/blog/construir-una-piscina/' },
      { name: 'Junta de Andalucía, Ley 7/2021 de impulso para la sostenibilidad del territorio (LISTA)', url: 'https://www.juntadeandalucia.es/boja/2021/233/1' },
    ],
    ctaTitle: 'Plannen voor een zwembad?',
    ctaText: 'Stuur foto’s van de plek en vertel wat u voor ogen heeft. U krijgt een eerste prijsindicatie en advies over de vergunning.',
    minutes: 6,
    published: '2026-11-05',
  },
  {
    key: 'airco',
    slug: 'airco-en-warmtepomp',
    title: 'Wat kost airco of een warmtepomp in Spanje?',
    seoTitle: 'Airco of warmtepomp in Spanje: kosten in de Axarquía (2026)',
    short: 'Airco en warmtepomp',
    description: 'Wat kost airco in de Axarquía? Prijzen voor een split-unit, multisplit en kanalensysteem, en voor een lucht-waterwarmtepomp (aerotermia) voor verwarming en warm water.',
    lead: 'In de zomer koelt u, in de winter verwarmt u. Want ook in de Axarquía zijn huizen in januari koud. Moderne airco’s doen allebei. Zo ziet de rekening eruit.',
    keyword: 'airco spanje kosten',
    dienst: 'anders',
    onderwerp: 'Ik wil graag een prijs voor airco of een warmtepomp.',
    answer: 'Eén split-airco (koelen en verwarmen) voor een slaap- of woonkamer kost geplaatst ongeveer <strong>€ 900 tot € 1.800</strong>. Drie ruimtes met een multisplit: <strong>€ 3.500 tot € 6.000</strong>. Een lucht-waterwarmtepomp (aerotermia) voor verwarming en warm water kost meestal <strong>€ 8.000 tot € 15.000</strong>. Bedragen exclusief btw.',
    sections: [
      {
        id: 'prijzen',
        h: 'Prijzen per systeem',
        table: {
          head: ['Systeem', 'Geschikt voor', 'Indicatie (geplaatst)'],
          rows: [
            ['Split-unit 2,5 – 3,5 kW', 'Eén kamer tot ± 30 m²', '€ 900 – € 1.800'],
            ['Multisplit, 1 buitendeel en 3 binnendelen', 'Appartement of kleine woning', '€ 3.500 – € 6.000'],
            ['Kanalensysteem (conductos)', 'Hele woning, onzichtbaar in verlaagd plafond', '€ 6.000 – € 12.000'],
            ['Lucht-waterwarmtepomp (aerotermia)', 'Verwarming via radiatoren of vloer, plus warm water', '€ 8.000 – € 15.000'],
            ['Aerotermia met nieuwe vloerverwarming', 'Bij een totaalrenovatie', '€ 12.000 – € 20.000'],
            ['Warmtepompboiler (alleen warm water)', 'Vervanger van de elektrische boiler', '€ 2.000 – € 4.500'],
          ],
          note: 'Onderhoud: reken op € 80 – € 150 per jaar per systeem voor reinigen van filters en controle.',
        },
      },
      {
        id: 'kiezen',
        h: 'Welk systeem past bij uw huis?',
        html: `<ul>
<li><strong>Appartement aan de kust:</strong> split-units of een multisplit zijn meestal genoeg. Let op de regels van de vereniging van eigenaren (<em>comunidad</em>) voor buitendelen op de gevel.</li>
<li><strong>Dorpshuis met dikke muren:</strong> blijft lang koel in de zomer, maar is vochtig en koud in de winter. Airco met verwarmingsfunctie plus goede ventilatie helpt tegen vocht.</li>
<li><strong>Finca of villa die u het hele jaar gebruikt:</strong> een warmtepomp met vloerverwarming is het meest comfortabel, zeker in combinatie met zonnepanelen.</li>
</ul>`,
      },
      {
        id: 'stroom',
        h: 'Stroom en zonnepanelen',
        html: '<p>Veel oudere huizen hebben een laag aansluitvermogen (<em>potencia contratada</em>), bijvoorbeeld 3,45 kW. Met airco, inductie en een warmtepomp heeft u vaak 5,75 kW of meer nodig. Verhogen gaat via de energieleverancier en kan een keuring van de installatie (<em>boletín eléctrico</em>) vragen. Met zonnepanelen haalt u een groot deel van de stroom voor koelen overdag zelf van het dak.</p>',
      },
      {
        id: 'subsidie',
        h: 'Subsidie',
        html: '<p>Voor warmtepompen en energiebesparing waren er de afgelopen jaren Spaanse en Europese (Next Generation) subsidies, en sommige gemeentes geven korting op de onroerendgoedbelasting (IBI) bij zonne-energie. De regelingen wisselen vaak en zijn soms snel op. Vraag bij de offerte wat er op dat moment loopt.</p>',
      },
    ],
    faq: [
      { q: 'Kan een airco ook verwarmen?', a: 'Ja. Vrijwel alle moderne split-units zijn warmtepompen die zowel koelen als verwarmen. Bij de milde winters in de Axarquía is dat een zuinige manier van verwarmen.' },
      { q: 'Heb ik een vergunning nodig voor een buitendeel?', a: 'Meestal niet van de gemeente, maar in een appartementencomplex wel toestemming of regels van de comunidad. In beschermde dorpskernen kan de gemeente eisen stellen aan zichtbare buitendelen op de gevel.' },
      { q: 'Wat kost airco aan stroom?', a: 'Een moderne split-unit van 3,5 kW verbruikt bij koelen gemiddeld 0,8 tot 1,2 kW per uur. Met een paar uur per dag in de zomer is dat enkele tientallen euro’s per maand per kamer.' },
    ],
    links: [
      { href: '/nl/onderhoud/', label: 'Onderhoud en reparaties' },
      { href: '/nl/renovatie/', label: 'Renovatie en verbouwing' },
      { href: '/nl/problemen/vocht-en-schimmel/', label: 'Vocht en schimmel in huis' },
    ],
    related: ['costs:dak', 'problems:vocht', 'costs:keuken'],
    sources: [
      { name: 'Merca2, prijs van aerotermia in 2025', url: 'https://www.merca2.es/2025/08/11/precio-de-la-aerotermia-en-2025-la-climatizacion-eficiente-estabiliza-sus-costes-y-acelera-su-amortizacion-2221769/' },
      { name: 'Autosolar, wat kost aerotermia installeren', url: 'https://autosolar.es/instalacion-aerotermia/cuanto-cuesta-instalar-aerotermia' },
      { name: 'IDAE, subsidies voor energiebesparing en hernieuwbare energie', url: 'https://www.idae.es/ayudas-y-financiacion' },
    ],
    ctaTitle: 'Koel in de zomer, warm in de winter',
    ctaText: 'Vertel ons hoe groot uw huis is en hoe u het gebruikt. U krijgt advies over het juiste systeem en een prijs.',
    minutes: 5,
    published: '2026-11-05',
  },
  {
    key: 'dak',
    slug: 'dak-en-dakterras',
    title: 'Wat kost een dak of dakterras repareren in Spanje?',
    seoTitle: 'Dak of dakterras repareren in Spanje: kosten per m² (2026)',
    short: 'Dak en dakterras',
    description: 'Wat kost het om een plat dak of dakterras waterdicht te maken in de Axarquía? Prijzen per m² voor coating, membraan, pannendak en een compleet nieuw dak.',
    lead: 'De meeste lekkages in de Axarquía komen van het dak: een plat dakterras waarvan de waterdichte laag op is, of een pannendak met verschoven pannen. Zo ziet de rekening eruit.',
    keyword: 'dakterras waterdicht maken spanje kosten',
    dienst: 'onderhoud',
    onderwerp: 'Ik wil graag een prijs voor het repareren of waterdicht maken van mijn dak of dakterras.',
    answer: 'Een plat dakterras opnieuw waterdicht maken kost in de Axarquía <strong>€ 30 tot € 50 per m²</strong> met een vloeibare coating, en <strong>€ 70 tot € 130 per m²</strong> als de tegels eraf moeten voor een nieuw membraan en nieuwe tegels. Een pannendak opnieuw leggen kost € 60 tot € 110 per m². Bedragen exclusief btw.',
    sections: [
      {
        id: 'prijzen',
        h: 'Prijzen per m²',
        table: {
          head: ['Werk', 'Wat het inhoudt', 'Per m²'],
          rows: [
            ['Vloeibare coating op dakterras', 'Reinigen, scheuren dichten, polyurethaan of acryl in meerdere lagen', '€ 30 – € 50'],
            ['Nieuw membraan en nieuwe tegels', 'Oude tegels eruit, afschot herstellen, bitumen- of PVC-membraan, nieuwe tegels', '€ 70 – € 130'],
            ['Pannendak opnieuw leggen', 'Pannen eraf, onderdak of folie, pannen terug (aanvullen waar nodig)', '€ 60 – € 110'],
            ['Nieuw dak met isolatie', 'Nieuwe balken of plaat, isolatie, waterdichte laag, pannen', '€ 150 – € 300'],
          ],
        },
      },
      {
        id: 'klein',
        h: 'Kleinere reparaties',
        table: {
          head: ['Reparatie', 'Indicatie'],
          rows: [
            ['Lokale lekkage zoeken en dichten', '€ 300 – € 1.500'],
            ['Afvoerputjes en goten vrijmaken en herstellen', '€ 150 – € 600'],
            ['Losse of gebroken pannen vervangen', '€ 200 – € 800'],
            ['Aansluiting schoorsteen of opstaande rand herstellen', '€ 400 – € 1.500'],
          ],
          note: 'Steiger, hoogwerker of puin afvoeren in een smalle dorpsstraat komt er soms bij.',
        },
      },
      {
        id: 'voorbeeld',
        h: 'Rekenvoorbeeld: dakterras van 40 m²',
        html: '<p>Een dakterras van 40 m² op een dorpshuis in Cómpeta lekt bij elke stevige regenbui. De tegels zitten los en het water blijft staan. Een coating is hier niet genoeg: de tegels gaan eruit, het afschot wordt hersteld, er komt een nieuw membraan op en nieuwe tegels. Reken op <strong>€ 2.800 tot € 5.200</strong> plus eventueel puin afvoeren. Bij een terras dat alleen poreus is, zonder losse tegels, kan een coating voor € 1.200 tot € 2.000 volstaan.</p>',
      },
      {
        id: 'moment',
        h: 'Het juiste moment',
        html: '<p>Laat het dak in september of oktober nakijken, vóór de najaarsbuien en de <em>gota fría</em>. Dan zijn ook de afvoeren schoon van blad en Saharazand (<em>calima</em>). Wie zijn huis niet zelf in de gaten kan houden, laat dit meenemen in het <a href="/nl/sleutelbeheer/">sleutelbeheer</a>.</p>',
      },
    ],
    faq: [
      { q: 'Hoelang gaat een coating mee?', a: 'Een goede polyurethaancoating gaat bij normaal gebruik acht tot twaalf jaar mee. Een membraan onder nieuwe tegels gaat twintig jaar of langer mee.' },
      { q: 'Heb ik een vergunning nodig?', a: 'Voor het waterdicht maken of opnieuw leggen van een dak zonder de constructie te wijzigen volstaat meestal een melding (declaración responsable). Bij een nieuwe dakconstructie is een vergunning met project nodig.' },
      { q: 'Betaalt de verzekering de reparatie?', a: 'Een woonverzekering betaalt vaak de waterschade binnen, maar zelden de reparatie van een dak dat door slijtage lekt. Kijk uw polis na en meld schade snel, met foto’s.' },
    ],
    links: [
      { href: '/nl/problemen/daklekkage/', label: 'Daklekkage: wat nu?' },
      { href: '/nl/onderhoud/', label: 'Onderhoud en reparaties' },
      { href: '/nl/sleutelbeheer/', label: 'Sleutelbeheer en toezicht' },
    ],
    related: ['problems:daklekkage', 'problems:vocht', 'costs:airco'],
    sources: [
      { name: 'CYPE, Generador de Precios (bouwprijzen Spanje, regio Andalusië)', url: 'https://generadordeprecios.info/' },
      { name: 'Habitissimo, prijsgids dakterras waterdicht maken (impermeabilizar azotea)', url: 'https://www.habitissimo.es/presupuestos/impermeabilizar-azotea' },
      { name: 'AEMET, gota fría en najaarsbuien', url: 'https://www.aemet.es/' },
    ],
    ctaTitle: 'Lekt uw dak of dakterras?',
    ctaText: 'Stuur foto’s van het dak en van de plek binnen waar het water zichtbaar is. U krijgt snel een prijs.',
    minutes: 5,
    published: '2026-11-05',
  },
  {
    key: 'buitenkeuken',
    slug: 'buitenkeuken',
    title: 'Wat kost een buitenkeuken in Spanje?',
    seoTitle: 'Buitenkeuken laten bouwen in Spanje: kosten (2026)',
    short: 'Buitenkeuken',
    description: 'Wat kost een gemetselde buitenkeuken met barbecue in de Axarquía? Prijzen van eenvoudig tot compleet met overkapping, water, stroom en koelkast, plus de vergunning.',
    lead: 'In de Axarquía leeft u een groot deel van het jaar buiten. Een buitenkeuken bij het zwembad of op het terras is daarom een populaire verbouwing. Dit kost het.',
    keyword: 'buitenkeuken spanje',
    dienst: 'renovatie',
    onderwerp: 'Ik wil graag een prijs voor een buitenkeuken.',
    answer: 'Een eenvoudige gemetselde buitenkeuken met barbecue en werkblad kost in de Axarquía <strong>€ 2.500 tot € 5.000</strong>. Met spoelbak, water, stroom en koelkast rekent u op <strong>€ 6.000 tot € 12.000</strong>. Met overkapping en premium apparatuur <strong>€ 12.000 tot € 25.000</strong>. Bedragen exclusief btw.',
    sections: [
      {
        id: 'prijzen',
        h: 'Prijzen per uitvoering',
        table: {
          head: ['Uitvoering', 'Wat het inhoudt', 'Indicatie'],
          rows: [
            ['Eenvoudig', 'Gemetseld blok met houtskoolbarbecue en tegels of steen als werkblad', '€ 2.500 – € 5.000'],
            ['Compleet', 'Plus spoelbak met water en afvoer, stroompunten, kastjes, koelkast', '€ 6.000 – € 12.000'],
            ['Luxe', 'Plus pizzaoven of gasgrill, natuursteen, verlichting, overkapping', '€ 12.000 – € 25.000'],
            ['Pergola of overkapping (los)', 'Hout, aluminium of lamellendak', '€ 3.000 – € 10.000'],
          ],
        },
      },
      {
        id: 'factoren',
        h: 'Wat bepaalt de prijs?',
        html: `<ul>
<li><strong>Water en afvoer.</strong> Hoe verder van de bestaande leidingen, hoe duurder. Op een finca met septische put moet de afvoer daar goed op aansluiten.</li>
<li><strong>Materialen.</strong> Buitenkeukens moeten tegen zon, zout (aan de kust) en regen kunnen. Kies rvs 316, natuursteen of keramiek, geen gewoon hout.</li>
<li><strong>Fundering.</strong> Op een bestaand terras of een nieuwe ondergrond op een helling.</li>
<li><strong>Stroom.</strong> Buitenstopcontacten moeten waterdicht en apart beveiligd zijn.</li>
</ul>`,
      },
      {
        id: 'vergunning',
        h: 'Vergunning',
        html: '<p>Een losse barbecue of gemetseld blok valt meestal onder een melding (<em>declaración responsable</em>). Een overkapping met een dicht dak telt in veel gemeentes mee als bebouwde oppervlakte en vraagt een vergunning. Op landelijke grond en bij een woning met AFO-status is dat vaak niet toegestaan. Kijk wat uw gemeente vraagt, bijvoorbeeld <a href="/nl/plaatsen/frigiliana/bouwvergunning/">in Frigiliana</a> of <a href="/nl/plaatsen/torrox/bouwvergunning/">in Torrox</a>, en lees de gids over <a href="/nl/gidsen/afo-legaliseren-andalusie/">AFO en legaliseren</a>.</p>',
      },
    ],
    faq: [
      { q: 'Mag ik in de zomer barbecueën?', a: 'In Andalusië geldt van 1 juni tot 15 oktober een hoog brandrisico. Barbecueën met vuur is dan verboden in en vlak bij bos en natuurgebied, en op landelijke percelen gelden strenge regels. In een woonwijk of bij een huis aan de kust is een vaste barbecue meestal wel toegestaan. Een gas- of elektrische grill is veiliger en vaak de beste keuze voor een finca.' },
      { q: 'Hoelang duurt de bouw?', a: 'Een eenvoudige buitenkeuken staat in een tot twee weken. Met leidingwerk en overkapping drie tot vier weken.' },
    ],
    links: [
      { href: '/nl/renovatie/', label: 'Renovatie en verbouwing' },
      { href: '/nl/kosten/zwembad-laten-bouwen/', label: 'Kosten van een zwembad' },
      { href: '/nl/kosten/keuken-renoveren/', label: 'Kosten van een nieuwe keuken' },
    ],
    related: ['costs:zwembad', 'costs:keuken', 'problems:inbraak'],
    sources: [
      { name: 'Habitissimo, prijsgids barbecue en buitenkeuken bouwen', url: 'https://www.habitissimo.es/presupuestos/construir-barbacoa' },
      { name: 'Junta de Andalucía, Plan INFOCA en regels voor brandrisico', url: 'https://www.juntadeandalucia.es/medioambiente/portal/areas-tematicas/incendios-forestales' },
    ],
    ctaTitle: 'Een buitenkeuken bij het zwembad?',
    ctaText: 'Stuur een foto van de plek en vertel wat u wilt. U krijgt een ontwerpvoorstel en een prijs.',
    minutes: 4,
    published: '2026-11-05',
  },
];
