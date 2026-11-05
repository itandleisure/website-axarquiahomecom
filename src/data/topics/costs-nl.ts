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
  {
    key: 'zonnepanelen',
    slug: 'zonnepanelen',
    title: 'Wat kosten zonnepanelen in Spanje?',
    seoTitle: 'Zonnepanelen in Spanje: kosten, thuisbatterij en regels in de Axarquía (2026)',
    short: 'Zonnepanelen',
    description: 'Wat kosten zonnepanelen op uw huis in de Axarquía? Prijzen voor 3 tot 8 kWp, een thuisbatterij, een zonneboiler en een finca zonder stroomnet, plus regels, subsidie en terugverdientijd.',
    lead: 'De Axarquía heeft meer dan 300 zonnige dagen per jaar. Zonnepanelen leveren hier ruim anderhalf keer zoveel op als in Nederland of Duitsland. Zo ziet de rekening eruit, ook als u maar een deel van het jaar in Spanje bent.',
    keyword: 'zonnepanelen spanje kosten',
    dienst: 'energie',
    onderwerp: 'Ik wil graag een prijs voor zonnepanelen op mijn huis.',
    answer: 'Een installatie van 4 tot 5 kWp (10 tot 12 panelen) voor een woonhuis kost in de Axarquía meestal <strong>€ 4.500 tot € 7.000</strong> exclusief btw, inclusief omvormer, montage en aanmelding. Een thuisbatterij van 5 kWh komt daar <strong>€ 3.000 tot € 5.000</strong> bij. Een finca zonder aansluiting op het stroomnet heeft een groter systeem met batterijen nodig: <strong>€ 10.000 tot € 18.000</strong>.',
    sections: [
      {
        id: 'prijzen',
        h: 'Prijzen per installatie',
        html: '<p>Indicaties voor 2026, inclusief panelen, omvormer, montagesysteem, bekabeling, installatie en aanmelding, exclusief btw.</p>',
        table: {
          head: ['Installatie', 'Geschikt voor', 'Indicatie'],
          rows: [
            ['3 kWp, 7 – 8 panelen', 'Appartement met eigen dak of klein huis, vooral overdag stroom', '€ 3.500 – € 5.000'],
            ['4 – 5 kWp, 10 – 12 panelen', 'Woonhuis met airco en inductie', '€ 4.500 – € 7.000'],
            ['6 – 8 kWp, 14 – 20 panelen', 'Villa met zwembadpomp, warmtepomp of laadpaal', '€ 6.500 – € 10.000'],
            ['Thuisbatterij 5 kWh', 'Stroom van overdag ’s avonds gebruiken', '+ € 3.000 – € 5.000'],
            ['Thuisbatterij 10 kWh', 'Groot verbruik of veel avondgebruik', '+ € 5.500 – € 9.000'],
            ['Zonneboiler (termosifón), 150 – 300 liter', 'Alleen warm water', '€ 1.500 – € 3.500'],
            ['Finca zonder stroomnet (aislada), 3 – 5 kWp met 10 – 15 kWh batterij', 'Huis op het platteland zonder aansluiting', '€ 10.000 – € 18.000'],
          ],
          note: 'Panelen op de grond of op een pergola (carport) kosten € 500 – € 2.000 meer voor het montagesysteem en de fundering.',
        },
      },
      {
        id: 'factoren',
        h: 'Wat bepaalt de prijs?',
        html: `<ul>
<li><strong>Het dak.</strong> Een plat dakterras is makkelijk. Een oud pannendak moet soms eerst worden nagekeken of hersteld, anders lekt het na het boren. Doe dat in één keer: zie <a href="/nl/kosten/dak-en-dakterras/">de kosten van een dak of dakterras</a>.</li>
<li><strong>De elektra.</strong> Een oude installatie zonder aarding of met een te kleine groepenkast moet eerst op orde. Lees <a href="/nl/kosten/elektra-vernieuwen/">wat elektra vernieuwen kost</a>.</li>
<li><strong>Bereikbaarheid.</strong> Panelen in een smal straatje van Frigiliana of Cómpeta naar boven krijgen, kost meer tijd dan bij een villa met oprit.</li>
<li><strong>Batterij of niet.</strong> Een batterij verdubbelt bijna de prijs. Dat loont vooral als u er het hele jaar woont of ’s avonds veel verbruikt.</li>
<li><strong>Beschermd dorpsgezicht.</strong> In sommige historische kernen stelt de gemeente eisen aan zichtbare panelen.</li>
</ul>`,
      },
      {
        id: 'afwezig',
        h: 'Lonen zonnepanelen als u maar een deel van het jaar in Spanje bent?',
        html: '<p>Ja, maar anders dan in Nederland. Stroom die u niet zelf gebruikt, gaat het net op. In Spanje krijgt u daar via de <em>compensación simplificada</em> een vergoeding voor op de stroomrekening, maar die is lager dan wat u voor stroom betaalt en kan nooit onder nul gaan. Er is geen salderen zoals in Nederland. Een paar tips:</p><ul><li>Kies een kleiner systeem dat past bij wat het huis ook verbruikt als u er niet bent: koelkast, zwembadpomp, alarm, ontvochtiger.</li><li>Vraag naar een virtuele batterij (<em>batería virtual</em>) bij uw energieleverancier: dan spaart u het tegoed op voor de maanden dat u er wel bent.</li><li>Verhuurt u het huis, dan gebruiken de gasten de stroom in de zomer en verdient het systeem zich sneller terug.</li></ul>',
      },
      {
        id: 'terugverdienen',
        h: 'Rekenvoorbeeld en terugverdientijd',
        html: '<p>Een villa in Torrox die u het hele jaar gebruikt, met airco, inductie en een zwembadpomp. Verbruik ongeveer 7.000 kWh per jaar.</p>',
        table: {
          head: ['Onderdeel', 'Indicatie'],
          rows: [
            ['5 kWp, 12 panelen, hybride omvormer', '€ 6.000'],
            ['Opbrengst per jaar in de Axarquía', '± 8.000 kWh'],
            ['Zelf gebruikt (± 50%) tegen € 0,18 per kWh', '± € 720 per jaar'],
            ['Vergoeding voor teruglevering tegen € 0,06 per kWh', '± € 240 per jaar'],
            ['<strong>Besparing per jaar</strong>', '<strong>± € 960</strong>'],
            ['<strong>Terugverdientijd</strong>', '<strong>6 tot 7 jaar</strong>'],
          ],
          note: 'Panelen gaan 25 tot 30 jaar mee. De omvormer moet meestal na 10 tot 15 jaar worden vervangen (€ 800 – € 1.500).',
        },
      },
      {
        id: 'regels',
        h: 'Vergunning, aanmelding en subsidie',
        html: `<ul>
<li><strong>Vergunning.</strong> Panelen op het dak van een bestaande, legale woning vallen in Andalusië meestal onder een eenvoudige melding (<em>declaración responsable</em>) bij de gemeente. Op de grond, op een finca in het buitengebied of op een huis met AFO-status kan de gemeente meer vragen. Zie de pagina <em>Bouwvergunning</em> van uw gemeente onder <a href="/nl/plaatsen/">Plaatsen</a>.</li>
<li><strong>Aanmelding.</strong> De installateur meldt de installatie aan bij de Junta de Andalucía en regelt het keuringsbewijs (<em>boletín</em>). Daarna vraagt u bij uw leverancier de vergoeding voor teruglevering aan.</li>
<li><strong>Belastingkorting.</strong> Veel gemeenten geven een paar jaar korting op de onroerendgoedbelasting (<em>bonificación del IBI</em>) en op de bouwleges (ICIO) bij zonnepanelen. Hoeveel verschilt per gemeente.</li>
<li><strong>Subsidie.</strong> De Spaanse en Europese subsidies voor zelfopwekking wisselen vaak en zijn soms snel op. Vraag bij de offerte wat er op dat moment loopt.</li>
</ul>`,
      },
      {
        id: 'slim',
        h: 'Tip: slim energiebeheer',
        html: '<p>Laat panelen, batterij, laadpaal, boiler en zwembadpomp samenwerken. Met <a href="/nl/kosten/slim-energiebeheer/">slim energiebeheer</a> draaien ze automatisch als de zon schijnt of de stroom goedkoop is. Met een variabel stroomcontract levert dat vaak € 150 tot € 400 per jaar extra op, en u volgt alles op uw telefoon.</p>',
      },
    ],
    faq: [
      { q: 'Hoeveel panelen heb ik nodig?', a: 'Als vuistregel: per 1.000 kWh verbruik per jaar ongeveer 0,7 kWp, dus twee panelen. Een huis met 5.000 kWh verbruik heeft genoeg aan 3,5 tot 4 kWp, ongeveer 9 tot 10 panelen.' },
      { q: 'Werkt het als de stroom uitvalt?', a: 'Een gewone installatie schakelt bij een stroomstoring uit, voor de veiligheid van monteurs op het net. Wilt u bij een storing stroom houden, dan heeft u een hybride omvormer met batterij en noodstroomfunctie nodig.' },
      { q: 'Wie maakt de panelen schoon?', a: 'Stof en Saharazand (calima) kosten opbrengst. Twee tot drie keer per jaar schoonspuiten is genoeg. Dat kan meegenomen worden in het onderhoud of in sleutelbeheer.' },
      { q: 'Kan ik zonnepanelen combineren met een warmtepomp of airco?', a: 'Ja, dat is juist de beste combinatie. Airco en warmtepomp draaien vooral overdag in de zomer, precies als de panelen het meest leveren.' },
    ],
    links: [
      { href: '/nl/renovatie/', label: 'Renovatie en verbouwing' },
      { href: '/nl/kosten/airco-en-warmtepomp/', label: 'Kosten airco en warmtepomp' },
      { href: '/nl/gidsen/off-grid-wonen-spanje/', label: 'Gids: off-grid wonen in Spanje' },
    ],
    related: ['costs:thuisbatterij', 'costs:laadpaal', 'costs:energiebeheer'],
    sources: [
      { name: 'Selectra, prijs zonnepanelen voor een eengezinswoning (2026)', url: 'https://selectra.es/autoconsumo/instalacion/vivienda-unifamiliar' },
      { name: 'Autosolar, zonnepanelen installeren in Málaga', url: 'https://autosolar.es/mi-experiencia-placas-solares/instalacion-placas-solares-malaga' },
      { name: 'Real Decreto 244/2019, zelfopwekking en compensatie van teruglevering', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2019-5089' },
      { name: 'IDAE, subsidies voor energiebesparing en hernieuwbare energie', url: 'https://www.idae.es/ayudas-y-financiacion' },
    ],
    ctaTitle: 'Een prijs voor zonnepanelen?',
    ctaText: 'Stuur een foto van uw dak en uw laatste stroomrekening. U krijgt een voorstel op maat en een prijs.',
    minutes: 6,
    published: '2026-11-05',
  },
  {
    key: 'elektra',
    slug: 'elektra-vernieuwen',
    title: 'Wat kost elektra vernieuwen in Spanje?',
    seoTitle: 'Elektra vernieuwen in Spanje: kosten, boletín en meer vermogen (2026)',
    short: 'Elektra',
    description: 'Wat kost het om de elektrische installatie van uw huis in de Axarquía te vernieuwen? Prijzen voor een nieuwe groepenkast, aarding, het keuringsbewijs (boletín) en meer aansluitvermogen.',
    lead: 'In veel oudere huizen in de Axarquía is de elektra nooit vernieuwd: geen aarding, een te kleine groepenkast en een aansluiting die uitvalt zodra de airco en de waterkoker tegelijk aan gaan. Zo ziet de rekening eruit.',
    keyword: 'elektra vernieuwen spanje kosten',
    dienst: 'energie',
    onderwerp: 'Ik wil graag een prijs voor het vernieuwen of uitbreiden van de elektra.',
    answer: 'De complete elektra van een appartement of klein huis (70 – 100 m²) vernieuwen kost in de Axarquía meestal <strong>€ 3.500 tot € 6.500</strong> exclusief btw. Een dorpshuis of villa van 120 – 200 m²: <strong>€ 6.500 tot € 12.000</strong>. Alleen een nieuwe groepenkast kost € 400 – € 1.000 en het keuringsbewijs (<em>boletín</em>) € 100 – € 300.',
    sections: [
      {
        id: 'prijzen',
        h: 'Prijzen per klus',
        table: {
          head: ['Klus', 'Wat het inhoudt', 'Indicatie'],
          rows: [
            ['Keuringsbewijs (boletín, CIE)', 'Controle en certificaat door een erkend installateur', '€ 100 – € 300'],
            ['Nieuwe groepenkast (cuadro)', 'Hoofdschakelaar, aardlekschakelaars, groepen', '€ 400 – € 1.000'],
            ['Aarding aanleggen (toma de tierra)', 'Aardpen en aardleiding naar de groepenkast', '€ 300 – € 800'],
            ['Extra groep, bijvoorbeeld voor airco of inductie', 'Nieuwe leiding vanaf de groepenkast', '€ 150 – € 400 per groep'],
            ['Complete elektra, appartement 70 – 100 m²', 'Alle leidingen, schakelaars en contactdozen nieuw, inclusief boletín', '€ 3.500 – € 6.500'],
            ['Complete elektra, huis 120 – 200 m²', 'Idem, met meer groepen en buitenverlichting', '€ 6.500 – € 12.000'],
            ['Laadpaal voor de auto', 'Wallbox 7 kW met eigen groep', '€ 900 – € 1.800'],
          ],
          note: 'Bij een complete renovatie gaat de elektra mee in het sloop- en stucwerk. Dat is goedkoper dan achteraf sleuven frezen.',
        },
      },
      {
        id: 'vermogen',
        h: 'Meer vermogen (potencia contratada)',
        html: '<p>In Spanje kiest u zelf hoeveel kilowatt u tegelijk mag gebruiken. Veel oudere huizen hebben 3,45 of 4,6 kW. Met airco, inductie, een warmtepomp of een zwembadpomp is 5,75 tot 9,2 kW vaak nodig. Verhogen gaat via uw energieleverancier. Is de installatie ouder dan twintig jaar of verandert er veel, dan vraagt de netbeheerder (in de Axarquía meestal e-distribución) om een nieuw boletín. De netbeheerder rekent eenmalige aansluitkosten van een paar tientallen tot een paar honderd euro. Let op: een hoger vermogen geeft ook een hoger vast bedrag op de rekening.</p>',
      },
      {
        id: 'wanneer',
        h: 'Wanneer moet de elektra worden vernieuwd?',
        html: `<ul>
<li>Er is geen aarding, of de stopcontacten hebben geen randaarde.</li>
<li>De groepenkast heeft nog smeltzekeringen of geen aardlekschakelaar.</li>
<li>De stroom valt steeds uit. Lees <a href="/nl/problemen/stroom-valt-uit/">wat u doet als de stroom steeds uitvalt</a>.</li>
<li>U ziet zwartgeblakerde stopcontacten, losse draden of leidingen met stoffen isolatie.</li>
<li>U koopt het huis, gaat het verhuren of zet de aansluiting op uw naam: dan heeft u een geldig boletín nodig.</li>
</ul>`,
      },
      {
        id: 'koop',
        h: 'Bij de aankoop van een huis',
        html: '<p>De elektra is een van de punten die we bij een <a href="/nl/aankoopkeuring/">aankoopkeuring</a> altijd bekijken. Een complete vernieuwing kan zo € 5.000 tot € 10.000 kosten. Dat is een goed argument bij de onderhandeling over de prijs.</p>',
      },
    ],
    faq: [
      { q: 'Wat is een boletín eléctrico?', a: 'Het Certificado de Instalación Eléctrica (CIE) is het bewijs dat de elektra aan de Spaanse regels voldoet. Alleen een erkende installateur mag het afgeven. U heeft het nodig voor een nieuwe aansluiting, een hoger vermogen, of om het contract op uw naam te zetten als de aansluiting lang buiten gebruik was.' },
      { q: 'Hoelang duurt het vernieuwen van de elektra?', a: 'Een appartement duurt meestal een tot twee weken, een groter huis twee tot vier weken. Daarna nog het stucwerk en schilderwerk, als dat niet in een renovatie is meegenomen.' },
      { q: 'Kan het terwijl ik niet in Spanje ben?', a: 'Ja. U spreekt vooraf de plaats van stopcontacten en lampen af aan de hand van een plattegrond, en u krijgt tijdens het werk foto’s.' },
    ],
    links: [
      { href: '/nl/renovatie/', label: 'Renovatie en verbouwing' },
      { href: '/nl/aankoopkeuring/', label: 'Aankoopkeuring' },
      { href: '/nl/gidsen/kosten-huis-renoveren-spanje/', label: 'Gids: wat kost een huis renoveren in Spanje?' },
    ],
    related: ['problems:stroom', 'costs:zonnepanelen', 'costs:airco'],
    sources: [
      { name: 'Habitissimo, prijsgids elektra vernieuwen (reformar instalación eléctrica)', url: 'https://www.habitissimo.es/presupuestos/reformar-instalacion-electrica-vivienda-o-local' },
      { name: 'CNMC, het boletín eléctrico: wat het is en waarvoor', url: 'https://cnmc.es/sites/default/files/editor_contenidos/Energia/Consumidores/3.2%20Bolet%C3%ADn%20el%C3%A9ctrico%2C%20qu%C3%A9%20es%20y%20para%20qu%C3%A9%20sirve.pdf' },
      { name: 'Reglamento Electrotécnico para Baja Tensión (REBT)', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2002-18099' },
    ],
    ctaTitle: 'Elektra op orde?',
    ctaText: 'Stuur een foto van uw groepenkast en vertel wat u wilt aansluiten. U krijgt een advies en een prijs.',
    minutes: 5,
    published: '2026-11-05',
  },
  {
    key: 'thuisbatterij',
    slug: 'thuisbatterij',
    title: 'Wat kost een thuisbatterij in Spanje?',
    seoTitle: 'Thuisbatterij in Spanje: kosten, terugverdientijd en noodstroom (2026)',
    short: 'Thuisbatterij',
    description: 'Wat kost een thuisbatterij bij uw zonnepanelen in de Axarquía? Prijzen voor 5, 10 en 15 kWh, noodstroom bij een stroomstoring, de plek in huis en wanneer een batterij loont.',
    lead: 'Sinds de grote stroomstoring van april 2025, toen heel Spanje urenlang zonder stroom zat, vragen veel eigenaren naar een thuisbatterij. Wat kost het, wanneer loont het, en waar let u op in het Spaanse klimaat?',
    keyword: 'thuisbatterij spanje',
    dienst: 'energie',
    onderwerp: 'Ik wil graag een prijs voor een thuisbatterij.',
    answer: 'Een thuisbatterij van 5 kWh kost in de Axarquía geplaatst ongeveer <strong>€ 3.000 tot € 5.000</strong>, een van 10 kWh <strong>€ 5.500 tot € 9.000</strong>, exclusief btw. Heeft u al zonnepanelen met een gewone omvormer, dan komt er vaak een hybride omvormer bij: <strong>€ 1.000 tot € 2.000</strong>. Met een batterij gebruikt u 70 tot 80% van uw zonnestroom zelf, in plaats van 30 tot 50%.',
    sections: [
      {
        id: 'prijzen',
        h: 'Prijzen per batterij',
        html: '<p>Indicaties voor 2026 voor een lithium-ijzerfosfaatbatterij (LiFePO4), inclusief plaatsing en aansluiting, exclusief btw.</p>',
        table: {
          head: ['Batterij', 'Geschikt voor', 'Indicatie'],
          rows: [
            ['5 kWh', 'Appartement of klein huis, avondverbruik', '€ 3.000 – € 5.000'],
            ['10 kWh', 'Woonhuis met airco en inductie', '€ 5.500 – € 9.000'],
            ['15 kWh', 'Villa, of een huis met warmtepomp', '€ 8.000 – € 12.000'],
            ['Hybride omvormer erbij', 'Als u al panelen heeft met een gewone omvormer', '+ € 1.000 – € 2.000'],
            ['Noodstroomfunctie (back-up)', 'Stroom houden bij een storing op het net', '+ € 300 – € 800'],
          ],
          note: 'Batterij en panelen tegelijk laten plaatsen is goedkoper dan achteraf. Zie ook de kosten van <a href="/nl/kosten/zonnepanelen/">zonnepanelen</a>.',
        },
      },
      {
        id: 'loont',
        h: 'Wanneer loont een thuisbatterij?',
        html: `<ul>
<li><strong>U woont er het hele jaar of het grootste deel ervan.</strong> Dan gebruikt u de opgeslagen stroom elke avond, en verdient de batterij zich in 8 tot 12 jaar terug.</li>
<li><strong>U wilt stroom houden bij een storing.</strong> Met noodstroom blijven koelkast, licht, internet, alarm en waterpomp werken. Op het platteland, waar storingen vaker voorkomen, is dat de belangrijkste reden.</li>
<li><strong>Uw finca heeft geen aansluiting.</strong> Dan is een batterij geen keuze maar noodzaak. Lees de gids <a href="/nl/gidsen/off-grid-wonen-spanje/">off-grid wonen</a>.</li>
<li><strong>U bent er maar een paar weken per jaar.</strong> Dan loont een batterij financieel meestal niet. Een virtuele batterij bij uw energieleverancier is dan goedkoper.</li>
</ul>`,
      },
      {
        id: 'plek',
        h: 'Waar komt de batterij?',
        html: '<p>Een batterij gaat langer mee als hij koel staat, bij voorkeur tussen 10 en 30 graden. In de Axarquía is dat belangrijk: in juli wordt een schuur of dakterras in de zon veel te heet. Een binnenruimte, een kelder of een geventileerde technische ruimte aan de noordkant is het beste. De batterij moet ook goed bereikbaar zijn voor onderhoud en niet in een vochtige ruimte staan.</p>',
      },
      {
        id: 'voorbeeld',
        h: 'Rekenvoorbeeld',
        html: '<p>Een huis in Torre del Mar, het hele jaar bewoond, met 5 kWp aan zonnepanelen en een verbruik van 6.000 kWh per jaar.</p>',
        table: {
          head: ['', 'Zonder batterij', 'Met 10 kWh batterij'],
          rows: [
            ['Zelf gebruikte zonnestroom', '± 2.700 kWh', '± 4.800 kWh'],
            ['Besparing op stroom (€ 0,18 per kWh)', '± € 490', '± € 860'],
            ['Vergoeding teruglevering (€ 0,06 per kWh)', '± € 320', '± € 190'],
            ['<strong>Totale besparing per jaar</strong>', '<strong>± € 810</strong>', '<strong>± € 1.050</strong>'],
          ],
          note: 'De batterij levert in dit voorbeeld ± € 240 per jaar extra op. Bij € 7.000 voor de batterij is dat vooral een investering in zekerheid en onafhankelijkheid, met een terugverdientijd rond de levensduur van de batterij. Stijgen de stroomprijzen, dan gaat het sneller.',
        },
      },
      {
        id: 'subsidie',
        h: 'Subsidie en belastingkorting',
        html: '<p>Voor batterijen bij zelfopwekking zijn er in Andalusië en vanuit Madrid regelmatig subsidieregelingen, en veel gemeenten geven korting op de IBI bij zonne-energie. De regelingen wisselen vaak. Vraag bij de offerte wat er op dat moment loopt.</p>',
      },
      {
        id: 'slim',
        h: 'Tip: slim energiebeheer',
        html: '<p>Laat panelen, batterij, laadpaal, boiler en zwembadpomp samenwerken. Met <a href="/nl/kosten/slim-energiebeheer/">slim energiebeheer</a> draaien ze automatisch als de zon schijnt of de stroom goedkoop is. Met een variabel stroomcontract levert dat vaak € 150 tot € 400 per jaar extra op, en u volgt alles op uw telefoon.</p>',
      },
    ],
    faq: [
      { q: 'Hoelang gaat een thuisbatterij mee?', a: 'Een lithium-ijzerfosfaatbatterij gaat 6.000 cycli of meer mee, dat is 12 tot 15 jaar bij dagelijks gebruik. De fabrikant geeft meestal 10 jaar garantie.' },
      { q: 'Werkt de batterij automatisch als de stroom uitvalt?', a: 'Alleen als het systeem een noodstroomfunctie (back-up of EPS) heeft. Zonder die functie schakelt ook de batterij uit bij een storing. Vraag hier expliciet naar.' },
      { q: 'Kan ik een batterij toevoegen aan mijn bestaande zonnepanelen?', a: 'Ja. Met een hybride omvormer of een aparte batterijomvormer kan dat bij vrijwel elk systeem. Soms is de bestaande omvormer al geschikt.' },
      { q: 'Is een thuisbatterij veilig?', a: 'Lithium-ijzerfosfaat is het veiligste type en wordt bijna overal gebruikt. Laat hem plaatsen door een erkende installateur, met de juiste beveiliging en op een koele, droge plek.' },
    ],
    links: [
      { href: '/nl/kosten/zonnepanelen/', label: 'Kosten zonnepanelen' },
      { href: '/nl/gidsen/off-grid-wonen-spanje/', label: 'Gids: off-grid wonen in Spanje' },
      { href: '/nl/problemen/stroom-valt-uit/', label: 'Stroom valt steeds uit' },
    ],
    related: ['costs:zonnepanelen', 'costs:laadpaal', 'costs:energiebeheer'],
    sources: [
      { name: 'Selectra, zonnepanelen met batterij: prijzen 2026', url: 'https://selectra.es/autoconsumo/instalacion/vivienda-unifamiliar' },
      { name: 'Red Eléctrica, rapport over de stroomstoring van 28 april 2025', url: 'https://www.ree.es/es/sala-de-prensa' },
      { name: 'IDAE, subsidies voor energiebesparing en hernieuwbare energie', url: 'https://www.idae.es/ayudas-y-financiacion' },
    ],
    ctaTitle: 'Een thuisbatterij bij uw panelen?',
    ctaText: 'Stuur een foto van uw omvormer of uw dak en uw laatste stroomrekening. U krijgt advies over de juiste batterij en een prijs.',
    minutes: 5,
    published: '2026-11-05',
  },
  {
    key: 'water',
    slug: 'watertank-en-beerput',
    title: 'Wat kosten een watertank, boorput en beerput in Spanje?',
    seoTitle: 'Water en afvoer op een finca in Spanje: kosten watertank, boorput en beerput (2026)',
    short: 'Watertank en beerput',
    description: 'Wat kost water en afvoer op een finca in de Axarquía? Prijzen voor een watertank, het herstellen van een regenbak (aljibe), een boorput, pomp en filter, en een septic tank of kleine zuivering.',
    lead: 'Veel fincas in de Axarquía hangen niet aan de waterleiding of het riool. Na de droogte van de afgelopen jaren willen eigenaren meer zekerheid over hun water, en oude beerputten voldoen vaak niet meer. Zo ziet de rekening eruit.',
    keyword: 'watertank finca spanje',
    dienst: 'onderhoud',
    onderwerp: 'Ik wil graag een prijs voor water of afvoer op mijn finca (watertank, put of beerput).',
    answer: 'Een kunststof watertank van 10.000 liter kost geplaatst en aangesloten <strong>€ 1.500 tot € 4.000</strong>. Een pomp met drukvat <strong>€ 600 tot € 1.500</strong>. Een nieuwe septic tank <strong>€ 2.500 tot € 6.000</strong>, een compacte zuivering <strong>€ 4.000 tot € 9.000</strong>. Een boorput met vergunning loopt al snel op tot <strong>€ 10.000 tot € 30.000</strong>. Bedragen exclusief btw.',
    sections: [
      {
        id: 'prijzen',
        h: 'Prijzen water',
        table: {
          head: ['Wat', 'Wat het inhoudt', 'Indicatie'],
          rows: [
            ['Kunststof watertank 5.000 liter', 'Bovengronds, op een betonvloer, aangesloten', '€ 900 – € 2.000'],
            ['Kunststof watertank 10.000 – 20.000 liter', 'Bovengronds of half ingegraven', '€ 1.500 – € 5.000'],
            ['Gemetselde regenbak (aljibe) herstellen', 'Reinigen, scheuren dichten, waterdichte coating', '€ 2.000 – € 8.000'],
            ['Nieuwe ondergrondse regenbak', 'Beton, 20 – 40 m³, met opvang van het dak', '€ 8.000 – € 20.000'],
            ['Pomp met drukvat', 'Constante druk in huis', '€ 600 – € 1.500'],
            ['Filter en uv-lamp', 'Drinkwater uit tank of put', '€ 800 – € 2.000'],
            ['Boorput (pozo)', 'Vergunning, boren, pomp, leiding', '€ 10.000 – € 30.000'],
          ],
          note: 'Boren kost meestal € 100 – € 200 per meter, en in de Axarquía is 80 tot 150 meter diep niet ongewoon. Er is geen garantie dat u water vindt.',
        },
      },
      {
        id: 'afvoer',
        h: 'Prijzen afvoer',
        table: {
          head: ['Wat', 'Wat het inhoudt', 'Indicatie'],
          rows: [
            ['Beerput legen', 'Zuigwagen, afvoer naar een erkende verwerker', '€ 150 – € 300'],
            ['Nieuwe septic tank (fosa séptica)', '2.000 – 4.000 liter, met infiltratieveld of filter', '€ 2.500 – € 6.000'],
            ['Compacte zuivering (depuradora)', 'Biologische zuivering, schoner effluent', '€ 4.000 – € 9.000'],
            ['Aansluiten op het riool', 'Als er riolering in de buurt ligt', '€ 1.500 – € 6.000'],
          ],
          note: 'Een oude, gemetselde beerput zonder bodem voldoet meestal niet aan de regels. De gemeente of de Junta kan bij een verbouwing of klacht vragen om hem te vervangen.',
        },
      },
      {
        id: 'regels',
        h: 'Vergunningen en regels',
        html: `<ul>
<li><strong>Boorput:</strong> u heeft een vergunning of inschrijving nodig bij de waterautoriteit van de Junta de Andalucía. Een put zonder papieren kan bij verkoop of controle problemen geven. Bij kleine onttrekkingen voor eigen gebruik is de procedure eenvoudiger.</li>
<li><strong>Afvoer:</strong> een septic tank of zuivering moet waterdicht zijn en mag het grond- of rivierwater niet vervuilen. Voor lozen in de bodem kan een vergunning nodig zijn.</li>
<li><strong>Bij aankoop:</strong> laat de waterbron en de beerput altijd meenemen in de <a href="/nl/aankoopkeuring/">aankoopkeuring</a>.</li>
</ul>`,
      },
    ],
    faq: [
      { q: 'Hoe groot moet mijn watertank zijn?', a: 'Reken op 100 tot 150 liter per persoon per dag, plus de tuin en het zwembad. Twee personen zonder zwembad verbruiken zo’n 1.000 liter per week of meer. Een tank van 10.000 liter geeft dan een paar weken buffer tussen leveringen.' },
      { q: 'Hoe vaak moet een beerput geleegd worden?', a: 'Meestal eens per twee tot vier jaar, afhankelijk van het formaat en hoe vaak het huis bewoond is. Bij verhuur vaker.' },
      { q: 'Is water uit een tank drinkbaar?', a: 'Alleen met een goede filter en eventueel een uv-lamp, en als de tank schoon en afgesloten is. Laat het water af en toe testen.' },
    ],
    links: [
      { href: '/nl/gidsen/off-grid-wonen-spanje/', label: 'Gids: off-grid wonen in Spanje' },
      { href: '/nl/gidsen/finca-kopen-in-spanje/', label: 'Gids: finca kopen in Spanje' },
      { href: '/nl/onderhoud/', label: 'Onderhoud en reparaties' },
    ],
    related: ['problems:waterdruk', 'problems:beerput', 'costs:keermuur'],
    sources: [
      { name: 'CYPE, Generador de Precios (bouwprijzen Spanje)', url: 'https://generadordeprecios.info/' },
      { name: 'Junta de Andalucía, water en waterrechten', url: 'https://www.juntadeandalucia.es/medioambiente/portal/areas-tematicas/agua' },
    ],
    ctaTitle: 'Water of afvoer op uw finca regelen?',
    ctaText: 'Vertel ons hoe het huis nu aan water komt en waar het afvalwater heen gaat. U krijgt een voorstel en een prijs.',
    minutes: 5,
    published: '2026-11-05',
  },
  {
    key: 'keermuur',
    slug: 'keermuur-en-afwatering',
    title: 'Wat kost een keermuur of afwatering in Spanje?',
    seoTitle: 'Keermuur en afwatering in Spanje: kosten voor muren, drainage en toegangsweg (2026)',
    short: 'Keermuur en afwatering',
    description: 'Wat kost een keermuur, drainage of een verharde toegangsweg op een finca in de Axarquía? Prijzen voor beton, natuursteen en schanskorven, en wat u doet na stormschade.',
    lead: 'In de Axarquía staan veel huizen tegen een helling. Een keermuur die het begeeft, water dat na een storm tegen het huis loopt of een weg die wegspoelt: het zijn grote klussen, maar met goede afwatering te voorkomen.',
    keyword: 'keermuur spanje',
    dienst: 'onderhoud',
    onderwerp: 'Ik wil graag een prijs voor een keermuur, drainage of de toegangsweg.',
    answer: 'Een betonnen keermuur van 1,5 tot 2 meter hoog kost in de Axarquía meestal <strong>€ 400 tot € 1.200 per strekkende meter</strong>, inclusief fundering en drainage. Een natuurstenen muur <strong>€ 150 tot € 350 per m²</strong> muuroppervlak. Een afwateringsgoot <strong>€ 60 tot € 150 per meter</strong>, een betonnen toegangsweg <strong>€ 40 tot € 70 per m²</strong>. Bedragen exclusief btw.',
    sections: [
      {
        id: 'prijzen',
        h: 'Prijzen per klus',
        table: {
          head: ['Klus', 'Wat het inhoudt', 'Indicatie'],
          rows: [
            ['Betonnen keermuur 1,5 – 2 m', 'Fundering, gewapend beton, drainage erachter', '€ 400 – € 1.200 per m'],
            ['Natuurstenen muur', 'Gemetseld of gestapeld, passend bij de streek', '€ 150 – € 350 per m²'],
            ['Schanskorven (gaviones)', 'Stalen korven met steen, snel en doorlatend', '€ 120 – € 250 per m²'],
            ['Ingestorte muur herstellen', 'Puin ruimen, nieuwe fundering, opnieuw opbouwen', '€ 2.000 – € 10.000+'],
            ['Drainage achter een muur of langs het huis', 'Drainbuis, grind, filterdoek', '€ 40 – € 80 per m'],
            ['Afwateringsgoot (canaleta)', 'Goot met rooster dwars over terras of oprit', '€ 60 – € 150 per m'],
            ['Toegangsweg in beton', 'Grondwerk, wapening, beton met profiel', '€ 40 – € 70 per m²'],
          ],
          note: 'Voor een keermuur van meer dan ongeveer 1,5 meter of bij een woning vraagt de gemeente meestal een bouwvergunning met een berekening van een architect of ingenieur.',
        },
      },
      {
        id: 'waarom',
        h: 'Waarom keermuren bezwijken',
        html: `<ul>
<li><strong>Geen drainage.</strong> Regenwater hoopt zich op achter de muur en drukt hem om. Dit is verreweg de meest voorkomende oorzaak.</li>
<li><strong>Te lichte fundering</strong> of een muur zonder wapening, vaak gebouwd zonder berekening.</li>
<li><strong>Zware regen na droogte.</strong> Een DANA in het najaar brengt in een paar uur meer water dan de grond aankan.</li>
<li><strong>Wortels en begroeiing</strong> die de muur uit elkaar duwen.</li>
</ul>
<p>Lees ook <a href="/nl/problemen/wateroverlast-en-keermuur/">wat u doet bij wateroverlast of een scheurende keermuur</a>.</p>`,
      },
      {
        id: 'vergunning',
        h: 'Vergunning en buitengebied',
        html: '<p>Op landelijke grond gelden strenge regels. Herstel van een bestaande muur kan meestal met een melding, een nieuwe muur of een nieuwe weg vraagt vaak een vergunning. Bij een huis met AFO-status mogen alleen werken die nodig zijn voor veiligheid en onderhoud. Zie de pagina <em>Bouwvergunning</em> van uw gemeente onder <a href="/nl/plaatsen/">Plaatsen</a> en de gids <a href="/nl/gidsen/afo-legaliseren-andalusie/">AFO en legaliseren</a>.</p>',
      },
    ],
    faq: [
      { q: 'Dekt de verzekering een ingestorte keermuur?', a: 'Soms. Veel opstalpolissen dekken stormschade, maar sluiten schade door slecht onderhoud of ontbrekende drainage uit. Bij uitzonderlijke regen kan het Consorcio de Compensación de Seguros betalen. Lees de gids over verzekering en schade.' },
      { q: 'Kan een oude natuurstenen muur blijven staan?', a: 'Vaak wel, als hij nog recht staat en water door de voegen kan. Een bolle muur, verschoven stenen of scheuren zijn signalen om te laten kijken.' },
      { q: 'Wanneer kan ik dit werk het best laten doen?', a: 'In het voorjaar of de zomer, als de grond droog is. Na een storm moet het soms direct, om verdere schade te voorkomen.' },
    ],
    links: [
      { href: '/nl/onderhoud/', label: 'Onderhoud en reparaties' },
      { href: '/nl/gidsen/finca-kopen-in-spanje/', label: 'Gids: finca kopen in Spanje' },
      { href: '/nl/weer/oktober/', label: 'Het weer in oktober: de eerste zware regen' },
    ],
    related: ['problems:wateroverlast', 'costs:water', 'problems:scheuren'],
    sources: [
      { name: 'CYPE, Generador de Precios (bouwprijzen Spanje)', url: 'https://generadordeprecios.info/' },
      { name: 'Código Técnico de la Edificación, DB SE-C Cimientos (funderingen en keermuren)', url: 'https://www.codigotecnico.org/' },
    ],
    ctaTitle: 'Een keermuur of afwatering nodig?',
    ctaText: 'Stuur foto’s van de muur of de plek waar het water heen loopt. U krijgt advies en een prijs.',
    minutes: 5,
    published: '2026-11-05',
  },
  {
    key: 'laadpaal',
    slug: 'laadpaal',
    title: 'Wat kost een laadpaal voor uw auto in Spanje?',
    seoTitle: 'Laadpaal thuis in Spanje: kosten, laden op zonne-energie en regels (2026)',
    short: 'Laadpaal',
    description: 'Wat kost een laadpaal (wallbox) bij uw huis in de Axarquía? Prijzen per situatie, laden op zonnepanelen en thuisbatterij, off-grid laden en de regels in een appartementencomplex.',
    lead: 'Een elektrische auto laadt u het goedkoopst thuis, en in de Axarquía het liefst met uw eigen zonnestroom. Wat kost een laadpaal, wat moet er aan de aansluiting gebeuren en kan het ook op een finca zonder stroomnet?',
    keyword: 'laadpaal spanje',
    dienst: 'energie',
    onderwerp: 'Ik wil graag een prijs voor een laadpaal.',
    answer: 'Een laadpaal (wallbox) van 7,4 kW kost in de Axarquía geplaatst meestal <strong>€ 900 tot € 1.800</strong>, exclusief btw, inclusief een eigen groep en beveiliging. Ligt de parkeerplaats ver van de meterkast, zoals in een parkeergarage van een complex, dan wordt het <strong>€ 1.500 tot € 3.000</strong>. Met zonnepanelen laadt u overdag bijna gratis.',
    sections: [
      {
        id: 'prijzen',
        h: 'Prijzen per situatie',
        html: '<p>Indicaties voor 2026, inclusief laadpaal, kabel, beveiliging en aanmelding, exclusief btw.</p>',
        table: {
          head: ['Situatie', 'Toelichting', 'Indicatie'],
          rows: [
            ['Laadpaal 7,4 kW bij het huis', 'Oprit of carport dicht bij de meterkast', '€ 900 – € 1.800'],
            ['Laadpaal in een parkeergarage', 'Lange kabel vanaf uw meter, in een complex', '€ 1.500 – € 3.000'],
            ['Slimme laadpaal voor zonnestroom', 'Laadt op het overschot van uw panelen', '+ € 200 – € 500'],
            ['Hoger aansluitvermogen', 'Van 4,6 naar 7 kW of meer bij de netbeheerder', '€ 100 – € 300 eenmalig, hoger vast tarief'],
            ['Extra zonnepanelen voor de auto', '1,5 tot 2 kWp, genoeg voor 10.000 km per jaar', '€ 2.000 – € 3.500'],
          ],
          note: 'Laat de laadpaal tegelijk met zonnepanelen of nieuwe elektra plaatsen: dat scheelt hak- en breekwerk. Zie de kosten van <a href="/nl/kosten/zonnepanelen/">zonnepanelen</a> en <a href="/nl/kosten/elektra-vernieuwen/">elektra vernieuwen</a>.',
        },
      },
      {
        id: 'leverancier',
        h: 'Laadpaal via uw energieleverancier',
        html: `<p>Veel Spaanse energieleveranciers verkopen een laadpaal als pakket, vaak met een vaste prijs of in maandtermijnen bij uw stroomcontract. Let op wat er in de standaardinstallatie zit:</p>
<ul>
<li><strong>Een beperkt aantal meters kabel</strong>, meestal 10 tot 15 meter tussen meterkast en laadpaal. Elke meter extra kost bij, vaak € 20 tot € 40 per meter.</li>
<li><strong>Extra werk</strong> zoals sleuven, doorboringen, een eigen meter in een parkeergarage of een hoger aansluitvermogen wordt apart gerekend.</li>
<li><strong>Een contract</strong>: soms zit u een of twee jaar vast aan de leverancier, of geldt de lage prijs alleen bij hun stroomtarief.</li>
</ul>
<p>Staat de auto ver van de meterkast, zoals bij een finca of in een complex, dan valt het pakket vaak duurder uit dan gedacht. Vraag dan ook een offerte van een onafhankelijke installateur en vergelijk de totaalprijs.</p>`,
      },
      {
        id: 'zon',
        h: 'Laden op zonnepanelen en thuisbatterij',
        html: `<p>Een gemiddelde elektrische auto verbruikt 15 tot 18 kWh per 100 km. Rijdt u 10.000 km per jaar, dan is dat zo’n 1.500 tot 1.800 kWh. In de Axarquía levert 1 kWp aan panelen ongeveer 1.600 kWh per jaar, dus 1 tot 2 extra kWp dekt het grootste deel.</p>
<ul>
<li><strong>Laad overdag.</strong> Een slimme laadpaal past de laadsnelheid aan op wat de panelen op dat moment overhouden. Wie thuis werkt of gepensioneerd is, laadt zo bijna helemaal op de zon.</li>
<li><strong>Laad liever niet uit de thuisbatterij.</strong> Een autoaccu van 60 kWh is veel groter dan een thuisbatterij van 10 kWh. Stel in dat de laadpaal de thuisbatterij niet leegtrekt, zodat u ’s avonds stroom houdt.</li>
<li><strong>’s Nachts goedkoop van het net.</strong> Met een tarief met een goedkoop nachtdal laadt u buiten de zon voor een fractie van de dagprijs.</li>
</ul>`,
      },
      {
        id: 'offgrid',
        h: 'Laden op een finca zonder stroomnet',
        html: `<p>Off-grid laden kan, maar vraagt een ruimer systeem. De auto laadt dan vooral op zonnige middagen, op een lager vermogen van 2 tot 3,7 kW, zodat de omvormer ook de rest van het huis aankan.</p>
<ul>
<li>Reken op <strong>2 tot 3 kWp extra panelen</strong> voor de auto, omdat u in de winter minder opwekt en geen net als achtervang heeft.</li>
<li>Kies een <strong>omvormer met genoeg vermogen</strong> voor de laadpaal plus de waterpomp en airco tegelijk.</li>
<li>Laat de laadpaal <strong>alleen laden bij overschot</strong>, zodat de thuisbatterij vol is voor de nacht.</li>
</ul>
<p>Lees meer in de gids <a href="/nl/gidsen/off-grid-wonen-spanje/">off-grid wonen in Spanje</a>.</p>`,
      },
      {
        id: 'regels',
        h: 'Regels en aanmelding',
        html: `<ul>
<li><strong>Erkend installateur:</strong> een laadpunt valt onder de Spaanse installatievoorschriften (ITC-BT-52). Een erkende installateur legt het aan en meldt het aan bij de Junta.</li>
<li><strong>In een appartementencomplex:</strong> voor een laadpaal op uw eigen parkeerplaats heeft u geen toestemming van de vereniging van eigenaren (<em>comunidad</em>) nodig. U meldt het vooraf schriftelijk, en u betaalt de aanleg en de stroom zelf.</li>
<li><strong>Vermogen:</strong> veel huizen hebben 4,6 of 5,75 kW. Met een laadpaal erbij is 7 kW of meer prettig, of een laadpaal met dynamische belastingverdeling die terugschakelt als de oven aan gaat.</li>
<li><strong>Subsidie:</strong> er zijn regelmatig landelijke regelingen voor laadpunten en een belastingaftrek in de IRPF. De voorwaarden wisselen; vraag bij de offerte wat er op dat moment loopt.</li>
</ul>`,
      },
      {
        id: 'slim',
        h: 'Tip: slim energiebeheer',
        html: '<p>Laat panelen, batterij, laadpaal, boiler en zwembadpomp samenwerken. Met <a href="/nl/kosten/slim-energiebeheer/">slim energiebeheer</a> draaien ze automatisch als de zon schijnt of de stroom goedkoop is. Met een variabel stroomcontract levert dat vaak € 150 tot € 400 per jaar extra op, en u volgt alles op uw telefoon.</p>',
      },
    ],
    faq: [
      { q: 'Kan ik niet gewoon aan het stopcontact laden?', a: 'Af en toe wel, maar een gewoon stopcontact is niet gemaakt voor uren achter elkaar 2,3 kW. Het wordt warm en laadt traag: 10 tot 12 km per uur. Een laadpaal is veiliger en drie keer zo snel.' },
      { q: 'Hoeveel kost een volle accu thuis?', a: 'Een accu van 60 kWh vol laden kost tegen € 0,18 per kWh ongeveer € 11, in het nachtdal vaak de helft, en op uw eigen zonnepanelen bijna niets.' },
      { q: 'Moet mijn aansluiting omhoog?', a: 'Meestal is 7 kW of meer aan te raden. Met een slimme laadpaal die terugschakelt als u veel andere apparaten gebruikt, kan het soms met uw huidige vermogen.' },
      { q: 'Kan ik off-grid elektrisch rijden?', a: 'Ja, met genoeg extra panelen en een omvormer die het aankan. U laadt dan vooral op zonnige middagen. Voor lange winterweken is een snellader onderweg een handige aanvulling.' },
    ],
    links: [
      { href: '/nl/kosten/zonnepanelen/', label: 'Kosten zonnepanelen' },
      { href: '/nl/kosten/thuisbatterij/', label: 'Kosten thuisbatterij' },
      { href: '/nl/gidsen/off-grid-wonen-spanje/', label: 'Gids: off-grid wonen in Spanje' },
    ],
    related: ['costs:zonnepanelen', 'costs:thuisbatterij', 'costs:energiebeheer'],
    sources: [
      { name: 'BOE, Ley de Propiedad Horizontal, artikel 17.5 (laadpunten in een comunidad)', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1960-10906' },
      { name: 'BOE, ITC-BT-52, installaties voor het laden van elektrische voertuigen', url: 'https://www.boe.es/buscar/doc.php?id=BOE-A-2014-13681' },
      { name: 'IDAE, subsidies voor elektrische mobiliteit', url: 'https://www.idae.es/ayudas-y-financiacion' },
    ],
    ctaTitle: 'Een laadpaal bij uw huis?',
    ctaText: 'Stuur een foto van uw meterkast en de plek waar de auto staat. U krijgt advies en een prijs, ook in combinatie met zonnepanelen.',
    minutes: 5,
    published: '2026-11-05',
  },
  {
    key: 'energiebeheer',
    slug: 'slim-energiebeheer',
    title: 'Slim energiebeheer: automatisch een lagere energierekening',
    seoTitle: 'Slim energiebeheer in Spanje: zonnepanelen, batterij en laadpaal automatisch sturen (2026)',
    short: 'Slim energiebeheer',
    description: 'Met slim energiebeheer stuurt uw huis in Spanje zelf zonnepanelen, thuisbatterij, laadpaal, boiler en zwembadpomp aan. Vast of variabel stroomcontract, wat het oplevert en wat het kost.',
    lead: 'Zonnepanelen, een thuisbatterij en een laadpaal leveren het meest op als ze samenwerken. Met slim energiebeheer regelt uw huis dat zelf: apparaten draaien als de zon schijnt of de stroom goedkoop is, en u ziet alles op uw telefoon, ook als u niet in Spanje bent.',
    keyword: 'slim energiebeheer',
    dienst: 'energiebeheer',
    onderwerp: 'Ik wil graag advies over slim energiebeheer.',
    answer: 'Slim energiebeheer kost eenmalig meestal <strong>€ 400 tot € 1.500</strong>, afhankelijk van hoeveel apparaten u koppelt. Met zonnepanelen, een batterij en een variabel stroomcontract bespaart u daarmee vaak <strong>€ 150 tot € 400 per jaar</strong> extra, bovenop wat de panelen al opleveren.',
    sections: [
      {
        id: 'wat',
        h: 'Wat doet slim energiebeheer?',
        html: `<p>Een klein kastje in uw meterkast verbindt alles wat stroom opwekt, opslaat of veel verbruikt. Het systeem kijkt naar de zon, de stroomprijs en de stand van de batterij, en beslist per kwartier wat er gebeurt:</p>
<ul>
<li>De <strong>boiler en de zwembadpomp</strong> draaien op het middaguur, op uw eigen zonnestroom.</li>
<li>De <strong>auto</strong> laadt op het overschot van de panelen, of ’s nachts in de goedkoopste uren.</li>
<li>De <strong>thuisbatterij</strong> laadt bij in goedkope uren en levert stroom in de dure avonduren.</li>
<li>De <strong>airco</strong> koelt het huis voor met zonnestroom, voordat u thuiskomt.</li>
<li>U krijgt een <strong>melding</strong> bij een stroomstoring, een lege batterij, een lege watertank of een lekkage, ook als u in Nederland bent.</li>
</ul>
<p>Wij werken met open systemen zoals Home Assistant, die met vrijwel elk merk omvormer, batterij en laadpaal samenwerken. U zit dus niet vast aan één fabrikant of een app van een leverancier.</p>`,
      },
      {
        id: 'contract',
        h: 'Vast of variabel stroomcontract?',
        html: `<p>In Spanje kiest u grofweg tussen twee soorten contract:</p>
<ul>
<li><strong>Vaste prijs</strong> op de vrije markt (<em>mercado libre</em>): elk uur dezelfde prijs per kWh, of een vaste prijs per dagdeel. U weet waar u aan toe bent.</li>
<li><strong>Variabele prijs</strong>, zoals het gereguleerde PVPC-tarief: de prijs is elk uur anders en wordt de dag ervoor bekendgemaakt. Midden op de dag en ’s nachts is stroom vaak goedkoop, ’s avonds duur.</li>
</ul>
<p>Een vast contract past bij een vakantiehuis zonder batterij of laadpaal. Kunt u verbruik verschuiven, dan levert een variabel contract meer op: het systeem leest de uurprijzen van morgen en plant de batterij, de auto, de boiler en de zwembadpomp in de goedkoopste uren. Hoe meer u kunt verschuiven, hoe groter het verschil.</p>`,
      },
      {
        id: 'prijzen',
        h: 'Wat kost het?',
        html: '<p>Indicaties voor 2026, inclusief installatie en instellen, exclusief btw.</p>',
        table: {
          head: ['Pakket', 'Wat u krijgt', 'Indicatie'],
          rows: [
            ['Inzicht', 'Energiemeter, overzicht op uw telefoon, meldingen bij storing', '€ 400 – € 700'],
            ['Slim sturen', 'Plus koppeling met omvormer, batterij, boiler en zwembadpomp', '€ 700 – € 1.200'],
            ['Compleet', 'Plus laadpaal, airco en sturen op uurprijzen', '€ 1.000 – € 1.500'],
            ['Beheer op afstand', 'Updates, aanpassingen en hulp op afstand als iets niet werkt', '€ 15 – € 25 per maand'],
            ['Beheer met service aan huis', 'Plus snelle hulp ter plaatse bij storingen en een jaarlijkse controle', '€ 40 – € 60 per maand'],
          ],
          note: 'Heeft u nog geen zonnepanelen of batterij? Zie de kosten van <a href="/nl/kosten/zonnepanelen/">zonnepanelen</a>, een <a href="/nl/kosten/thuisbatterij/">thuisbatterij</a> en een <a href="/nl/kosten/laadpaal/">laadpaal</a>.',
        },
      },
      {
        id: 'offgrid',
        h: 'Op een finca zonder stroomnet',
        html: '<p>Off-grid is slim energiebeheer nog belangrijker, omdat er geen net is als achtervang. Het systeem zet zware apparaten pas aan als de batterij vol genoeg is, laadt de auto alleen op overschot, waarschuwt bij een lage batterij of een lage watertank, en laat u vanaf afstand zien dat alles werkt. Zie de gids <a href="/nl/gidsen/off-grid-wonen-spanje/">off-grid wonen in Spanje</a>.</p>',
      },
    ],
    faq: [
      { q: 'Heb ik zonnepanelen nodig voor slim energiebeheer?', a: 'Niet per se. Met alleen een variabel contract kunt u de boiler, de zwembadpomp en de auto al in goedkope uren laten draaien. Met panelen en een batterij levert het wel het meest op.' },
      { q: 'Werkt het met mijn merk omvormer of batterij?', a: 'Bijna altijd. Open systemen zoals Home Assistant werken met de gangbare merken. Bij de offerte kijken we wat u heeft.' },
      { q: 'Kan ik alles vanuit Nederland volgen?', a: 'Ja. U ziet op uw telefoon wat de panelen opwekken, wat het huis verbruikt en hoe vol de batterij is, en u krijgt een melding als er iets mis is.' },
      { q: 'Wat gebeurt er als het internet uitvalt?', a: 'Het systeem draait lokaal in huis en blijft gewoon sturen. Alleen het meekijken op afstand stopt tot het internet terug is.' },
    ],
    links: [
      { href: '/nl/kosten/zonnepanelen/', label: 'Kosten zonnepanelen' },
      { href: '/nl/kosten/thuisbatterij/', label: 'Kosten thuisbatterij' },
      { href: '/nl/kosten/laadpaal/', label: 'Kosten laadpaal' },
    ],
    related: ['costs:zonnepanelen', 'costs:thuisbatterij', 'costs:laadpaal'],
    sources: [
      { name: 'Red Eléctrica, uurprijzen van het PVPC-tarief', url: 'https://www.ree.es/es/datos/mercados/precio-voluntario-pequeno-consumidor' },
      { name: 'CNMC, vergelijker van stroomcontracten', url: 'https://comparador.cnmc.gob.es/' },
      { name: 'Home Assistant, open platform voor slim wonen', url: 'https://www.home-assistant.io/' },
    ],
    ctaTitle: 'Uw energierekening automatisch omlaag?',
    ctaText: 'Vertel ons welke panelen, batterij of laadpaal u heeft en welk stroomcontract. U krijgt advies over wat u kunt koppelen en wat het oplevert.',
    minutes: 5,
    published: '2026-11-05',
  },
];
