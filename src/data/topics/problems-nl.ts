import type { Topic } from './types';

// Probleempagina's in het Nederlands.
export const problemsNl: Topic[] = [
  {
    key: 'vocht',
    slug: 'vocht-en-schimmel',
    title: 'Vocht en schimmel in uw huis in Spanje: oorzaak en oplossing',
    seoTitle: 'Vocht en schimmel in huis in Spanje: oplossingen',
    short: 'Vocht en schimmel',
    description: 'Vochtplekken, schimmel of een muffe lucht in uw huis in de Axarquía? Zo herkent u opstijgend vocht, condens en lekkage, en wat de oplossing kost.',
    lead: 'Veel mensen verwachten het niet in een zonnig land, maar vocht is een van de meest voorkomende klachten in huizen in de Axarquía. Vooral in dorpshuizen, huizen tegen een helling en huizen die maanden leegstaan.',
    keyword: 'vocht in huis spanje',
    dienst: 'onderhoud',
    onderwerp: 'Ik heb last van vocht of schimmel in mijn huis.',
    answer: 'Vocht in een Spaans huis heeft bijna altijd een van drie oorzaken: <strong>condens</strong> (een gesloten, koud huis zonder ventilatie), <strong>opstijgend of doorslaand vocht</strong> (oude muren zonder isolatie of een muur tegen de helling) of <strong>een lekkage</strong> (dak, leiding, afvoer). Eerst de oorzaak vinden, dan pas schilderen.',
    sections: [
      {
        id: 'herkennen',
        h: 'Welk vocht heeft u?',
        table: {
          head: ['Wat u ziet', 'Waarschijnlijke oorzaak'],
          rows: [
            ['Zwarte puntjes in hoeken, achter kasten, op koude muren; erger in de winter', 'Condens: te weinig ventilatie en koude muren'],
            ['Vochtrand en afbladderende verf onderaan de muur, tot ± 1 meter hoog, zoutkristallen', 'Opstijgend vocht uit de grond'],
            ['Natte muur aan de kant van de helling of onder het terras', 'Doorslaand vocht: grond en regenwater tegen de muur'],
            ['Plek op plafond of muur die groter wordt na regen', 'Lekkage van dak of dakterras'],
            ['Plek die altijd nat is, ook bij droog weer', 'Lekkende waterleiding of afvoer'],
          ],
        },
      },
      {
        id: 'zelf',
        h: 'Wat u zelf kunt doen',
        html: `<ul>
<li>Ventileer elke dag, ook in de winter, en zet ramen op een kier als u kookt of doucht.</li>
<li>Gebruik een ontvochtiger. In een leegstaand huis kan dat met een slang naar de afvoer, zodat de bak niet volloopt.</li>
<li>Zet kasten tien centimeter van de buitenmuur.</li>
<li>Verwarm een beetje in de winter: een huis dat helemaal afkoelt, slaat vocht neer.</li>
<li>Verwijder schimmel met een schimmelreiniger of verdunde bleek. Schilderen zonder de oorzaak aan te pakken helpt maar een paar maanden.</li>
</ul>`,
      },
      {
        id: 'oplossing',
        h: 'De oplossing en wat die kost',
        table: {
          head: ['Oplossing', 'Bij', 'Indicatie'],
          rows: [
            ['Mechanische ventilatie of ventilatieroosters', 'Condens', '€ 300 – € 2.500'],
            ['Injectie tegen opstijgend vocht', 'Opstijgend vocht', '€ 60 – € 120 per strekkende meter muur'],
            ['Kalkpleister of saneerpleister in plaats van cement', 'Opstijgend vocht in oude muren', '€ 40 – € 80 per m²'],
            ['Drainage en waterdichte laag aan de buitenkant', 'Muur tegen de helling', '€ 150 – € 400 per strekkende meter'],
            ['Lekkage zoeken en repareren', 'Leiding of dak', '€ 300 – € 1.500'],
          ],
          note: 'Indicaties exclusief btw. Bij een finca tegen een helling is drainage vaak de enige blijvende oplossing.',
        },
      },
      {
        id: 'leeg',
        h: 'Vocht in een leegstaand vakantiehuis',
        html: '<p>Een huis dat van november tot maart dicht zit, ruikt bij aankomst vaak muf. Matrassen, kussens en kleding kunnen gaan schimmelen. Laat het huis regelmatig luchten en de ontvochtiger controleren. Dat is precies wat <a href="/nl/sleutelbeheer/">sleutelbeheer</a> doet: vaste bezoeken, ramen open, foto’s, en direct actie als er een vochtplek verschijnt.</p>',
      },
    ],
    faq: [
      { q: 'Waarom zijn Spaanse huizen zo vochtig in de winter?', a: 'Veel huizen zijn gebouwd om koel te blijven in de zomer: dikke stenen muren, tegelvloeren, geen isolatie en geen centrale verwarming. In de winter koelen de muren af en slaat het vocht uit de lucht erop neer.' },
      { q: 'Is schimmel gevaarlijk?', a: 'Schimmel kan klachten geven aan luchtwegen en is vooral voor mensen met astma of allergie een probleem. Pak het daarom snel aan, en slaap niet in een kamer met veel schimmel.' },
      { q: 'Moet ik vocht melden als ik mijn huis verkoop?', a: 'Een bekend gebrek hoort u te melden aan de koper. Andersom: laat bij een aankoop het huis keuren. Een vochtmeter laat zien wat een frisse verflaag verbergt.' },
    ],
    links: [
      { href: '/nl/onderhoud/', label: 'Onderhoud en reparaties' },
      { href: '/nl/sleutelbeheer/', label: 'Sleutelbeheer en toezicht' },
      { href: '/nl/aankoopkeuring/', label: 'Aankoopkeuring' },
    ],
    related: ['problems:daklekkage', 'costs:dak', 'costs:airco'],
    sources: [
      { name: 'Código Técnico de la Edificación, DB HS 1 Protección frente a la humedad', url: 'https://www.codigotecnico.org/' },
      { name: 'CYPE, Generador de Precios (bouwprijzen Spanje)', url: 'https://generadordeprecios.info/' },
    ],
    ctaTitle: 'Vocht of schimmel in huis?',
    ctaText: 'Stuur foto’s van de plekken en vertel waar het huis staat. We zoeken de oorzaak en geven een prijs voor de oplossing.',
    minutes: 5,
    published: '2026-11-05',
  },
  {
    key: 'daklekkage',
    slug: 'daklekkage',
    title: 'Daklekkage in uw huis in Spanje: wat nu?',
    seoTitle: 'Daklekkage in Spanje: eerste stappen, oorzaken en kosten',
    short: 'Daklekkage',
    description: 'Lekt het dak of dakterras van uw huis in de Axarquía? Wat u direct doet, ook vanuit Nederland, waar de lekkage meestal vandaan komt en wat de reparatie kost.',
    lead: 'Na een flinke bui komt het bericht van de buren: er loopt water langs de muur. Lekkages zijn in de Axarquía het meest voorkomende probleem, vooral na de eerste najaarsstormen. Zo pakt u het aan.',
    keyword: 'daklekkage spanje',
    dienst: 'onderhoud',
    onderwerp: 'Mijn dak of dakterras lekt.',
    answer: 'Bij een daklekkage: <strong>stop de schade</strong> (emmers, meubels weg, stroom uit bij water in de buurt van elektra), <strong>maak foto’s</strong> voor de verzekering en laat <strong>de afvoeren op het dak controleren</strong>: verstopte putjes zijn de meest voorkomende oorzaak. Een lokale reparatie kost € 300 tot € 1.500; een dakterras opnieuw waterdicht maken € 30 tot € 130 per m².',
    sections: [
      {
        id: 'direct',
        h: 'Wat u direct doet',
        html: `<ol>
<li>Zet emmers neer en haal meubels, kleden en elektrische apparaten weg.</li>
<li>Komt het water bij lampen of stopcontacten? Zet die groep uit in de meterkast.</li>
<li>Maak foto’s en filmpjes van de schade binnen en, als het veilig kan, van het dak.</li>
<li>Meld de schade bij uw woonverzekering. Veel Spaanse polissen hebben een spoedlijn voor waterschade.</li>
<li>Zijn de afvoerputjes op het dakterras verstopt? Maak ze vrij. Vaak loopt het water dan direct weg.</li>
</ol>
<p>Bent u zelf niet in Spanje? Dan is het fijn als iemand met een sleutel binnen een paar uur kan gaan kijken. Daarvoor is <a href="/nl/sleutelbeheer/">sleutelbeheer</a> bedoeld.</p>`,
      },
      {
        id: 'oorzaken',
        h: 'Waar komt de lekkage meestal vandaan?',
        html: `<ul>
<li><strong>Verstopte afvoeren</strong> op het dakterras, door blad, zand of Saharastof (<em>calima</em>). Het water blijft staan en zoekt een weg naar binnen.</li>
<li><strong>Versleten waterdichte laag</strong> onder of op de tegels van het dakterras. Na 15 tot 25 jaar is die vaak op.</li>
<li><strong>Losse of gebroken pannen</strong> op een schuin dak, bijvoorbeeld na storm.</li>
<li><strong>Aansluitingen</strong> bij schoorsteen, opstaande randen en dakdoorvoeren van airco of zonnepanelen.</li>
<li><strong>Scheuren</strong> in de gevel of dakrand, waardoor regen schuin naar binnen slaat.</li>
</ul>`,
      },
      {
        id: 'kosten',
        h: 'Wat kost de reparatie?',
        table: {
          head: ['Reparatie', 'Indicatie'],
          rows: [
            ['Afvoeren en goten vrijmaken en herstellen', '€ 150 – € 600'],
            ['Lokale lekkage zoeken en dichten', '€ 300 – € 1.500'],
            ['Dakterras coaten (vloeibare laag)', '€ 30 – € 50 per m²'],
            ['Dakterras: nieuw membraan en nieuwe tegels', '€ 70 – € 130 per m²'],
            ['Pannendak opnieuw leggen', '€ 60 – € 110 per m²'],
            ['Waterschade binnen herstellen (pleister, schilderwerk)', '€ 300 – € 2.000'],
          ],
          note: 'Indicaties exclusief btw. Meer uitleg en een rekenvoorbeeld staan op de pagina over de kosten van dak en dakterras.',
        },
      },
      {
        id: 'voorkomen',
        h: 'Voorkomen',
        html: '<p>Laat het dak elk jaar in september of oktober nakijken, vóór de najaarsbuien en de <em>gota fría</em>, en na elke storm of calima. Dat kost weinig en voorkomt de meeste lekkages. Zie ook <a href="/nl/kosten/dak-en-dakterras/">de kosten van dak en dakterras</a>.</p>',
      },
    ],
    faq: [
      { q: 'Betaalt mijn verzekering een daklekkage?', a: 'De meeste woonverzekeringen betalen de waterschade binnen. De reparatie van het dak zelf wordt vaak niet vergoed als de lekkage door slijtage of achterstallig onderhoud komt. Bij stormschade (vaak vanaf een bepaalde windsnelheid) soms wel. Kijk uw polis na.' },
      { q: 'Wie betaalt bij een appartement?', a: 'Het dak is meestal gemeenschappelijk eigendom. De vereniging van eigenaren (comunidad) is dan verantwoordelijk voor de reparatie. Bij een privédakterras kan dat anders zijn; dat staat in de statuten.' },
      { q: 'Kan het dak in de winter gerepareerd worden?', a: 'Ja, tussen de buien door. Coatings en membranen hebben wel een paar droge dagen nodig. Een tijdelijke afdekking voorkomt verdere schade tot het weer meezit.' },
    ],
    links: [
      { href: '/nl/kosten/dak-en-dakterras/', label: 'Kosten van dak en dakterras' },
      { href: '/nl/onderhoud/', label: 'Onderhoud en reparaties' },
      { href: '/nl/sleutelbeheer/', label: 'Sleutelbeheer en toezicht' },
    ],
    related: ['costs:dak', 'problems:vocht', 'problems:scheuren'],
    sources: [
      { name: 'AEMET, waarschuwingen voor regen en gota fría (DANA)', url: 'https://www.aemet.es/' },
      { name: 'Ley 49/1960 de Propiedad Horizontal (comunidad en gemeenschappelijke delen)', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1960-10906' },
      { name: 'CYPE, Generador de Precios (bouwprijzen Spanje)', url: 'https://generadordeprecios.info/' },
    ],
    ctaTitle: 'Lekt uw dak?',
    ctaText: 'Stuur foto’s van de schade. We gaan kijken, ook als u zelf niet in Spanje bent.',
    minutes: 5,
    published: '2026-11-05',
  },
  {
    key: 'scheuren',
    slug: 'scheuren-in-muren',
    title: 'Scheuren in muren: wanneer moet u zich zorgen maken?',
    seoTitle: 'Scheuren in muren in Spanje: onschuldig of gevaarlijk?',
    short: 'Scheuren in muren',
    description: 'Scheuren in de muren van uw huis in de Axarquía? Het verschil tussen een krimpscheur en een verzakking, en wat onderzoek en herstel kosten.',
    lead: 'Bijna elk huis in de Axarquía heeft ergens een scheur. Meestal is het onschuldig. Maar op de kleigrond in de heuvels kunnen huizen ook echt verzakken. Zo ziet u het verschil.',
    keyword: 'scheuren in muur huis spanje',
    dienst: 'onderhoud',
    onderwerp: 'Ik heb scheuren in de muren van mijn huis.',
    answer: 'Haarscheurtjes in pleisterwerk (minder dan 1 mm) zijn meestal onschuldig: krimp en temperatuur. Laat een scheur onderzoeken als hij <strong>breder is dan 3 mm, schuin loopt vanaf een raam- of deurhoek, trapsgewijs door het metselwerk gaat, of groeit</strong>, en als deuren en ramen gaan klemmen. Een onderzoek door een bouwkundige (<em>aparejador</em>) kost € 300 tot € 800.',
    sections: [
      {
        id: 'soorten',
        h: 'Onschuldig of niet?',
        table: {
          head: ['Scheur', 'Wat het meestal betekent'],
          rows: [
            ['Haarscheurtjes in een netpatroon in het pleisterwerk', 'Krimp van pleister. Cosmetisch.'],
            ['Rechte scheur waar oud en nieuw werk elkaar raken', 'Aansluiting tussen twee bouwdelen. Meestal onschuldig, wel dichten tegen regen.'],
            ['Horizontale scheur onder het dak of dakterras', 'Uitzetting van het dak door hitte. Opvolgen.'],
            ['Schuine scheur vanuit de hoek van een raam of deur', 'Mogelijke zetting van de fundering. Laten onderzoeken.'],
            ['Trapsgewijze scheur door de voegen, breder dan 3 mm', 'Verzakking. Laten onderzoeken.'],
            ['Scheur die groeit, deuren die klemmen, scheve vloer', 'Actieve beweging. Snel laten onderzoeken.'],
          ],
        },
      },
      {
        id: 'axarquia',
        h: 'Waarom huizen in de Axarquía scheuren',
        html: `<ul>
<li><strong>Kleigrond.</strong> In delen van de heuvels zit klei die uitzet als hij nat wordt en krimpt bij droogte. Na een lange droge periode gevolgd door zware regen bewegen funderingen.</li>
<li><strong>Hellingen.</strong> Huizen en terrassen op een helling hebben keermuren nodig. Als die het water niet goed afvoeren, gaan ze schuiven.</li>
<li><strong>Uitbreidingen.</strong> Een aanbouw op een andere fundering dan het oude huis zakt anders. Op de aansluiting ontstaat dan een scheur.</li>
<li><strong>Lekkende leidingen.</strong> Een lekkende afvoer onder het huis spoelt de grond onder de fundering weg.</li>
<li><strong>Aardbevingen.</strong> De provincie Málaga kent lichte aardbevingen. Die veroorzaken zelden schade, maar kunnen bestaande scheuren laten groeien.</li>
</ul>`,
      },
      {
        id: 'volgen',
        h: 'Een scheur volgen',
        html: '<p>Twijfelt u? Zet een potloodstreep aan beide uiteinden van de scheur met de datum, en meet de breedte. Of laat een scheurmeter (<em>fisurómetro</em> of <em>testigo</em>) plaatsen. Kijk na een paar maanden of de scheur langer of breder is geworden. Wie er niet is, laat dit meenemen bij de vaste controles van het <a href="/nl/sleutelbeheer/">sleutelbeheer</a>.</p>',
      },
      {
        id: 'kosten',
        h: 'Wat kost onderzoek en herstel?',
        table: {
          head: ['Werk', 'Indicatie'],
          rows: [
            ['Onderzoek en rapport door bouwkundige (aparejador of arquitecto técnico)', '€ 300 – € 800'],
            ['Cosmetische scheuren dichten en schilderen', '€ 200 – € 1.000'],
            ['Scheuren nieten met rvs-ankers (grapado) en herstel pleisterwerk', '€ 1.000 – € 5.000'],
            ['Drainage langs de fundering of keermuur', '€ 150 – € 400 per strekkende meter'],
            ['Fundering versterken met micropalen', '€ 15.000 – € 60.000+'],
          ],
          note: 'Indicaties exclusief btw. Ernstige verzakkingen zijn zeldzaam, maar dan is eerst een rapport met een berekening nodig.',
        },
      },
    ],
    faq: [
      { q: 'Moet ik scheuren laten onderzoeken voordat ik een huis koop?', a: 'Ja. Scheuren zijn een van de belangrijkste dingen om naar te kijken bij een aankoopkeuring, zeker bij een finca op een helling of een huis met een aanbouw. Een frisse verflaag kan scheuren verbergen.' },
      { q: 'Betaalt de verzekering herstel van scheuren?', a: 'Meestal niet als het gaat om zetting of slijtage. Schade door een aardbeving valt in Spanje onder het Consorcio de Compensación de Seguros, als u een woonverzekering heeft.' },
    ],
    links: [
      { href: '/nl/aankoopkeuring/', label: 'Aankoopkeuring' },
      { href: '/nl/onderhoud/', label: 'Onderhoud en reparaties' },
      { href: '/nl/gidsen/finca-kopen-in-spanje/', label: 'Gids: finca kopen in Spanje' },
    ],
    related: ['problems:vocht', 'problems:termieten', 'problems:daklekkage'],
    sources: [
      { name: 'Instituto Geográfico Nacional, aardbevingen in Spanje', url: 'https://www.ign.es/web/ign/portal/sis-area-sismicidad' },
      { name: 'Consorcio de Compensación de Seguros, schade door natuurrampen', url: 'https://www.consorseguros.es/' },
      { name: 'IGME, kaart van uitzettende klei in Spanje (arcillas expansivas)', url: 'https://www.igme.es/' },
    ],
    ctaTitle: 'Scheuren in uw muren?',
    ctaText: 'Stuur foto’s met een liniaal of munt ernaast voor de schaal. We vertellen u of het onderzocht moet worden.',
    minutes: 5,
    published: '2026-11-05',
  },
  {
    key: 'termieten',
    slug: 'termieten',
    title: 'Termieten in uw huis in Spanje: herkennen en bestrijden',
    seoTitle: 'Termieten in Spanje: herkennen, bestrijden en kosten',
    short: 'Termieten',
    description: 'Termieten in Andalusië: zo herkent u ze, het verschil met houtworm, bestrijding met lokaas, de kosten en wat u controleert voor u een huis koopt.',
    lead: 'In Andalusië komen ondergrondse termieten op veel plekken voor, ook in de Axarquía. Ze eten houten balken, deurkozijnen en plinten van binnenuit op, vaak jarenlang ongezien. Zo herkent en bestrijdt u ze.',
    keyword: 'termieten spanje',
    dienst: 'onderhoud',
    onderwerp: 'Ik vermoed termieten of houtworm in mijn huis.',
    answer: 'U herkent termieten aan <strong>moddergangetjes</strong> op muren en funderingen, <strong>hout dat hol klinkt</strong> of verkruimelt, en <strong>zwermen gevleugelde insecten</strong> in het voorjaar. Bestrijding met lokaas (<em>cebos</em>) kost meestal <strong>€ 900 tot € 2.000</strong>, een chemische barrière € 300 tot € 600. Aangetaste balken vervangen komt daar bovenop.',
    sections: [
      {
        id: 'herkennen',
        h: 'Zo herkent u termieten',
        html: `<ul>
<li><strong>Moddergangetjes</strong>: smalle bruine buisjes van aarde langs funderingen, muren of achter plinten. Termieten bouwen ze om vochtig en in het donker te blijven.</li>
<li><strong>Hol hout</strong>: klop op deurkozijnen, plinten en balken. Klinkt het hol of drukt u er makkelijk een schroevendraaier in, dan is het van binnen leeggegeten.</li>
<li><strong>Zwermen</strong>: in het voorjaar (februari tot mei), vaak na regen, vliegen er gevleugelde termieten uit. Daarna vindt u losse vleugeltjes op de vensterbank.</li>
<li><strong>Bladderende verf</strong> of golvend hout zonder duidelijke reden.</li>
</ul>`,
      },
      {
        id: 'houtworm',
        h: 'Termieten of houtworm?',
        table: {
          head: ['', 'Ondergrondse termieten', 'Houtworm (carcoma)'],
          rows: [
            ['Wat u ziet', 'Moddergangetjes, geen gaatjes aan de buitenkant', 'Ronde gaatjes van 1 – 3 mm en fijn boormeel'],
            ['Waar', 'Hout dat contact heeft met vochtige muren of de grond', 'Droog hout, meubels, balken'],
            ['Snelheid', 'Snel, kan constructief gevaarlijk zijn', 'Langzaam, jarenlang'],
            ['Aanpak', 'Kolonie bestrijden met lokaas of barrière', 'Hout injecteren of behandelen'],
          ],
        },
      },
      {
        id: 'bestrijding',
        h: 'Bestrijding en kosten',
        table: {
          head: ['Behandeling', 'Wat het inhoudt', 'Indicatie'],
          rows: [
            ['Inspectie', 'Controle van huis en tuin, met vochtmeter', '€ 100 – € 250'],
            ['Chemische barrière', 'Injecties in de grond en muren rondom het huis', '€ 300 – € 600'],
            ['Lokaassysteem (cebos)', 'Lokaasstations rondom het huis, controle gedurende maanden tot de kolonie dood is', '€ 900 – € 2.000'],
            ['Houten balken of kozijnen vervangen', 'Na de bestrijding, afhankelijk van de schade', '€ 500 – € 10.000+'],
          ],
          note: 'Laat bestrijding doen door een erkend bedrijf (ingeschreven in het ROESB-register in Andalusië). Indicaties exclusief btw.',
        },
        after: '<p>Een lokaassysteem werkt langzamer, maar pakt de hele kolonie aan. Onderzoek van het CSIC in Andalusië liet zien dat kolonies met lokaas en goede opvolging volledig verdwenen.</p>',
      },
      {
        id: 'voorkomen',
        h: 'Voorkomen en kopen',
        html: '<p>Termieten houden van vocht en hout tegen de grond. Houd brandhout en oude balken weg van het huis, los lekkages en vocht op en laat houten balken bij een renovatie behandelen. Koopt u een oud dorpshuis of een finca? Laat dan bij de <a href="/nl/aankoopkeuring/">aankoopkeuring</a> ook op termieten controleren.</p>',
      },
    ],
    faq: [
      { q: 'Komen termieten veel voor in de Axarquía?', a: 'Ondergrondse termieten komen in grote delen van Andalusië voor, zowel in dorpskernen als op het platteland. Niet elk huis heeft ze, maar in oude huizen met houten balken en vocht is controle verstandig.' },
      { q: 'Zijn termieten gevaarlijk voor de constructie?', a: 'Ze kunnen houten balken in vloeren en daken zo verzwakken dat ze doorbuigen of breken. Bij de meeste moderne huizen met betonnen vloeren blijft de schade beperkt tot kozijnen, deuren en plinten.' },
      { q: 'Kan ik termieten zelf bestrijden?', a: 'Spuitbussen uit de bouwmarkt doden alleen de termieten die u ziet. De kolonie zit in de grond en blijft. Voor een blijvend resultaat is een professioneel lokaassysteem of barrière nodig.' },
    ],
    links: [
      { href: '/nl/aankoopkeuring/', label: 'Aankoopkeuring' },
      { href: '/nl/renovatie/', label: 'Renovatie en verbouwing' },
      { href: '/nl/problemen/vocht-en-schimmel/', label: 'Vocht en schimmel in huis' },
    ],
    related: ['problems:vocht', 'problems:scheuren', 'costs:dak'],
    sources: [
      { name: 'CSIC (IPNA), studie naar bestrijding van termieten met lokaas in Andalusië (2025)', url: 'https://www.ipna.csic.es/sites/default/files/2025-04/20250421%20NP%20Estudio%20tratamiento%20pionero%20eliminaci%C3%B3n%20termitas.pdf' },
      { name: 'Habitissimo, prijsgids houtworm en termieten bestrijden', url: 'https://www.habitissimo.es/presupuestos/tratar-carcoma-y-o-termitas' },
      { name: 'Decreto 60/2012 van de Junta de Andalucía, register van bestrijdingsbedrijven (ROESB)', url: 'https://cdn.juntadeandalucia.es/boja/2012/60/d1.pdf' },
    ],
    ctaTitle: 'Termieten of houtworm?',
    ctaText: 'Stuur foto’s van het hout en eventuele gangetjes. We regelen inspectie, bestrijding en herstel.',
    minutes: 5,
    published: '2026-11-05',
  },
  {
    key: 'legionella',
    slug: 'legionella',
    title: 'Legionella in uw vakantiehuis, zwembad of jacuzzi',
    seoTitle: 'Legionella in een vakantiehuis in Spanje voorkomen',
    short: 'Legionella',
    description: 'Hoe groot is het risico op legionella in een leegstaand vakantiehuis of jacuzzi in Spanje? Waar de bacterie groeit en wat u doet bij aankomst.',
    lead: 'Legionella groeit in stilstaand lauw water. Een vakantiehuis dat maanden leegstaat in een warm klimaat is daarom een risico, vaker dan het zwembad zelf. Zo voorkomt u het.',
    keyword: 'legionella vakantiehuis spanje',
    dienst: 'sleutelbeheer',
    onderwerp: 'Ik wil graag dat de waterleiding, boiler of jacuzzi van mijn huis wordt doorgespoeld en gecontroleerd.',
    answer: 'Het grootste risico zit niet in een goed gechloreerd zwembad, maar in <strong>leidingen, boiler, watertank en douchekoppen</strong> van een huis dat lang leegstaat, en in <strong>jacuzzi’s en bubbelbaden</strong>. Laat bij aankomst alle kranen en douches enkele minuten doorlopen, zet de boiler op minimaal 60 °C en laat watertank en jacuzzi jaarlijks reinigen.',
    sections: [
      {
        id: 'waar',
        h: 'Waar groeit legionella?',
        table: {
          head: ['Plek', 'Risico', 'Waarom'],
          rows: [
            ['Leidingen en douches in een leegstaand huis', 'Hoog', 'Water staat weken stil en wordt in de zomer lauw'],
            ['Elektrische boiler onder 50 °C', 'Hoog', 'Ideale temperatuur voor de bacterie'],
            ['Watertank (depósito of aljibe) op een finca', 'Middel tot hoog', 'Stilstaand water, warmte, aanslag'],
            ['Jacuzzi of bubbelbad', 'Hoog', 'Warm water dat vernevelt'],
            ['Zwembad met goed chloor- of zoutniveau', 'Laag', 'Desinfectie doodt de bacterie'],
            ['Tuinsproeiers en buitendouche', 'Middel', 'Lauw water in slangen, verneveling'],
          ],
        },
        after: '<p>U raakt besmet door kleine druppeltjes in te ademen, bijvoorbeeld onder de douche. Drinken van het water is geen besmettingsweg. Ouderen, rokers en mensen met een verminderde weerstand lopen het meeste risico.</p>',
      },
      {
        id: 'aankomst',
        h: 'Wat u doet bij aankomst',
        html: `<ol>
<li>Zet de boiler aan op minimaal 60 °C en laat hem een paar uur opwarmen.</li>
<li>Laat alle kranen en douches (warm en koud) enkele minuten doorlopen, met een open raam. Zet de douchekop daarbij laag of haal hem eraf.</li>
<li>Laat ook de buitendouche en tuinslangen doorlopen.</li>
<li>Ontkalk douchekoppen en perlators een keer per jaar, of vervang ze.</li>
</ol>
<p>Komt u pas na maanden terug? Laat het doorspoelen dan een paar dagen eerder doen. Bij <a href="/nl/sleutelbeheer/">sleutelbeheer</a> lopen we bij elk bezoek de kranen door.</p>`,
      },
      {
        id: 'verhuur',
        h: 'Als u verhuurt',
        html: '<p>Verhuurt u uw huis aan toeristen, dan bent u verantwoordelijk voor veilig water voor uw gasten. Legionella-uitbraken in vakantiewoningen komen in het nieuws en kunnen leiden tot claims. Zorg voor een vast schema: doorspoelen vóór elke aankomst, boiler op temperatuur, jaarlijkse reiniging van tank en jacuzzi en desgewenst een watertest.</p>',
      },
      {
        id: 'kosten',
        h: 'Wat kost controle en reiniging?',
        table: {
          head: ['Werk', 'Indicatie'],
          rows: [
            ['Watertest op legionella in een erkend laboratorium', '€ 60 – € 150 per monster'],
            ['Watertank (depósito, aljibe) reinigen en desinfecteren', '€ 150 – € 400'],
            ['Jacuzzi reinigen en desinfecteren', '€ 100 – € 250'],
            ['Thermische of chemische desinfectie van de installatie', '€ 300 – € 800'],
            ['Doorspoelen bij elk bezoek', 'onderdeel van sleutelbeheer'],
          ],
          note: 'Indicaties exclusief btw.',
        },
      },
    ],
    faq: [
      { q: 'Kan ik legionella krijgen van mijn zwembad?', a: 'Bij een zwembad met de juiste hoeveelheid chloor of zout is het risico laag. Een zwembad dat maanden zonder onderhoud staat, kan wel andere problemen geven, zoals algen. Een jacuzzi of bubbelbad is een groter risico, omdat het water warm is en vernevelt.' },
      { q: 'Wat zijn de klachten van legionella?', a: 'Legionella kan een longontsteking geven (veteranenziekte) met koorts, hoesten en spierpijn, twee tot tien dagen na besmetting. Heeft u deze klachten na een verblijf, ga dan naar een arts en vertel waar u bent geweest.' },
      { q: 'Geldt de Spaanse legionella-wet voor mijn huis?', a: 'De Spaanse regels voor legionellapreventie (Real Decreto 487/2022) gelden vooral voor installaties met een hoger risico, zoals hotels, zwembaden met publieke toegang en grote watersystemen. Een gewoon woonhuis valt er grotendeels buiten, maar de maatregelen zijn ook thuis verstandig.' },
    ],
    links: [
      { href: '/nl/sleutelbeheer/', label: 'Sleutelbeheer en toezicht' },
      { href: '/nl/zwembad/', label: 'Zwembad bouwen en onderhoud' },
      { href: '/nl/gidsen/overwinteren-in-spanje/', label: 'Gids: overwinteren in Spanje' },
    ],
    related: ['costs:zwembad', 'problems:inbraak', 'problems:vocht'],
    sources: [
      { name: 'Real Decreto 487/2022, requisitos sanitarios para la prevención de la legionelosis', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2022-10297' },
      { name: 'Ministerio de Sanidad, legionelose', url: 'https://www.sanidad.gob.es/areas/sanidadAmbiental/calidadAguas/legionelosis/home.htm' },
      { name: 'RIVM, legionella', url: 'https://www.rivm.nl/legionella' },
    ],
    ctaTitle: 'Uw huis veilig bij aankomst?',
    ctaText: 'Wij spoelen leidingen door, controleren de boiler en reinigen tank en jacuzzi, zodat alles klaar is als u komt.',
    minutes: 5,
    published: '2026-11-05',
  },
  {
    key: 'inbraak',
    slug: 'inbraak-en-kraak-leeg-huis',
    title: 'Inbraak en krakers in een leegstaand huis in Spanje voorkomen',
    seoTitle: 'Inbraak en krakers in uw vakantiehuis in Spanje voorkomen',
    short: 'Inbraak en krakers',
    description: 'Hoe beschermt u uw vakantiehuis in de Axarquía tegen inbraak en krakers (okupas)? Wat werkt, wat het kost en wat u doet na een inbraak.',
    lead: 'Een huis dat maanden leegstaat, valt op: dichte luiken, een volle brievenbus, geen licht. In de Axarquía is het risico kleiner dan in grote steden, maar het gebeurt. Zo verkleint u de kans en weet u wat te doen.',
    keyword: 'inbraak vakantiehuis spanje',
    dienst: 'sleutelbeheer',
    onderwerp: 'Ik wil mijn huis beter beveiligen en laten controleren als ik weg ben.',
    answer: 'De beste bescherming is een huis dat <strong>niet leeg lijkt</strong> en waar <strong>snel iemand bij is</strong> als er iets gebeurt. Combineer een alarm met meldkamer (€ 30 – € 50 per maand), goede sloten of een veiligheidsdeur en vaste controles door iemand met een sleutel. Ontdekt u krakers binnen een paar dagen, bel dan direct de Guardia Civil of Policía Local.',
    sections: [
      {
        id: 'maatregelen',
        h: 'Wat werkt, en wat het kost',
        table: {
          head: ['Maatregel', 'Indicatie'],
          rows: [
            ['Alarm met meldkamer en camera’s (abonnement)', '€ 30 – € 50 per maand'],
            ['Veiligheidsdeur (puerta acorazada of blindada)', '€ 1.000 – € 2.500'],
            ['Anti-inbraakcilinders voor bestaande deuren', '€ 100 – € 250 per deur'],
            ['Tralies (rejas) voor ramen op de begane grond', '€ 150 – € 400 per raam'],
            ['Tijdschakelaars, slimme lampen en verlichting met bewegingsmelder', '€ 100 – € 500'],
            ['Vaste controle door sleutelbeheer, met foto’s', 'zie sleutelbeheer'],
          ],
          note: 'Indicaties inclusief installatie, exclusief btw.',
        },
      },
      {
        id: 'niet-leeg',
        h: 'Zorg dat het huis niet leeg lijkt',
        html: `<ul>
<li>Laat de brievenbus legen en reclame weghalen.</li>
<li>Laat de tuin en het zwembad onderhouden. Een verwilderde tuin verraadt dat er niemand is.</li>
<li>Gebruik tijdschakelaars of slimme lampen, en laat luiken af en toe open en dicht doen.</li>
<li>Vertel uw buren wie er langskomt, en geef hen een telefoonnummer.</li>
<li>Zet geen bericht op sociale media dat u vertrekt.</li>
</ul>
<p>Met <a href="/nl/sleutelbeheer/">sleutelbeheer</a> komt er op vaste momenten iemand langs die dit allemaal regelt, en die bij een alarm of storm direct gaat kijken.</p>`,
      },
      {
        id: 'krakers',
        h: 'Krakers (okupas): wat zegt de wet?',
        html: '<p>Een gemeubileerd tweede huis of vakantiehuis geldt in Spanje als woning (<em>morada</em>). Wie daar zonder toestemming binnengaat, pleegt huisvredebreuk (<em>allanamiento de morada</em>). Als u dat snel ontdekt en meldt, kan de politie direct optreden. Hoe langer krakers er zitten, hoe moeilijker het wordt en hoe vaker er een rechter nodig is. Daarnaast kan een particuliere eigenaar sinds 2018 via een versnelde civiele procedure (Ley 5/2018) ontruiming vragen. Snel ontdekken is dus het belangrijkste.</p>',
      },
      {
        id: 'na-inbraak',
        h: 'Wat te doen na een inbraak',
        html: `<ol>
<li>Ga niet naar binnen als u denkt dat er nog iemand is. Bel 112 of de Guardia Civil (062).</li>
<li>Doe aangifte (<em>denuncia</em>) bij de Guardia Civil of Policía Nacional. Dat kan ook deels online. U heeft de aangifte nodig voor de verzekering.</li>
<li>Maak foto’s van de schade en maak een lijst van wat er weg is.</li>
<li>Laat sloten en ramen direct herstellen, zodat het huis weer dicht is.</li>
<li>Meld de schade bij uw verzekering.</li>
</ol>`,
      },
    ],
    faq: [
      { q: 'Hoe vaak wordt er ingebroken in de Axarquía?', a: 'Minder vaak dan in grote steden en drukke toeristenplaatsen, maar vakantiehuizen die lang leegstaan, zijn een bekend doelwit. Vooral in de wintermaanden en op afgelegen fincas.' },
      { q: 'Betaalt de verzekering bij inbraak in een leeg huis?', a: 'Veel polissen stellen eisen, bijvoorbeeld een minimum aan sloten of een maximaal aantal dagen leegstand. Lees de voorwaarden (vaak onder “deshabitación”) goed na en vertel uw verzekeraar dat het een tweede huis is.' },
      { q: 'Kan ik zelf krakers uit mijn huis zetten?', a: 'Nee. Doe dat nooit zelf: u kunt dan zelf strafbaar zijn. Bel de politie en schakel een advocaat in. Hoe sneller u het meldt, hoe sneller het opgelost is.' },
    ],
    links: [
      { href: '/nl/sleutelbeheer/', label: 'Sleutelbeheer en toezicht' },
      { href: '/nl/gidsen/overwinteren-in-spanje/', label: 'Gids: overwinteren in Spanje' },
      { href: '/nl/onderhoud/', label: 'Onderhoud en reparaties' },
    ],
    related: ['problems:legionella', 'problems:daklekkage', 'costs:buitenkeuken'],
    sources: [
      { name: 'Código Penal, art. 202 (allanamiento de morada) en art. 245 (usurpación)', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1995-25444' },
      { name: 'Ley 5/2018, versnelde ontruiming bij bezetting van een woning', url: 'https://www.boe.es/buscar/doc.php?id=BOE-A-2018-8575' },
      { name: 'Guardia Civil, aangifte doen (denuncia)', url: 'https://www.guardiacivil.es/' },
    ],
    ctaTitle: 'Uw huis in goede handen als u weg bent',
    ctaText: 'Vaste controles, foto’s en direct iemand ter plaatse bij een alarm. Vraag naar de mogelijkheden.',
    minutes: 6,
    published: '2026-11-05',
  },
  {
    key: 'stroom',
    slug: 'stroom-valt-uit',
    title: 'Stroom valt steeds uit in uw huis in Spanje: oorzaak en oplossing',
    seoTitle: 'Stroom valt steeds uit in huis in Spanje: oplossingen',
    short: 'Stroom valt uit',
    description: 'Valt de stroom in uw huis in de Axarquía steeds uit? Te laag vermogen, een aardlekschakelaar die afslaat of een netstoring, en wat de oplossing kost.',
    lead: 'De waterkoker aan, de airco aan, en het huis is donker. Of de stroom valt uit na een regenbui terwijl u in Nederland bent. Bijna altijd zit er een van vier oorzaken achter.',
    keyword: 'stroom valt uit spanje',
    dienst: 'energie',
    onderwerp: 'De stroom valt steeds uit in mijn huis.',
    answer: 'Valt de stroom uit als u veel apparaten tegelijk aanzet, dan is uw <strong>aansluitvermogen te laag</strong>. Slaat de <strong>aardlekschakelaar</strong> af, vaak na regen, dan lekt er ergens stroom naar de aarde, meestal via buitenverlichting, een boiler of een vochtige contactdoos. Is het hele dorp donker, dan is het een <strong>storing op het net</strong>.',
    sections: [
      {
        id: 'herkennen',
        h: 'Waarom valt de stroom uit?',
        table: {
          head: ['Wat u ziet', 'Waarschijnlijke oorzaak'],
          rows: [
            ['Stroom valt uit als airco, oven en waterkoker tegelijk aan staan', 'Te laag aansluitvermogen (potencia contratada) of een overbelaste groep'],
            ['Aardlekschakelaar (diferencial) slaat af, vaak na regen of ’s nachts', 'Lekstroom: vocht in buitenlampen, contactdozen of een apparaat'],
            ['Eén groep slaat steeds af als één apparaat aan gaat', 'Defect apparaat, bijvoorbeeld boiler, zwembadpomp of koelkast'],
            ['Stroom valt uit bij onweer of storm', 'Overspanning of storing op het net'],
            ['Het hele huis en de buren zijn donker', 'Storing bij de netbeheerder (in de Axarquía meestal e-distribución)'],
          ],
        },
      },
      {
        id: 'zelf',
        h: 'Wat u zelf kunt doen',
        html: `<ul>
<li>Kijk in de groepenkast welke schakelaar omlaag staat: de hoofdschakelaar (te veel vermogen), de aardlekschakelaar of één groep.</li>
<li>Slaat de aardlekschakelaar af: zet alle groepen uit, de aardlekschakelaar aan, en zet de groepen één voor één weer aan. Bij de groep waarbij hij weer afslaat, zit het probleem.</li>
<li>Trek bij die groep alle stekkers eruit en probeer opnieuw. Zo vindt u het apparaat dat lekt.</li>
<li>Is het hele dorp donker, meld de storing bij de netbeheerder. Het nummer staat op uw stroomrekening.</li>
<li>Werk nooit zelf aan de groepenkast of aan natte contactdozen.</li>
</ul>`,
      },
      {
        id: 'oplossing',
        h: 'De oplossing en wat die kost',
        table: {
          head: ['Oplossing', 'Bij', 'Indicatie'],
          rows: [
            ['Storing zoeken door een elektricien', 'Aardlekschakelaar die blijft afslaan', '€ 80 – € 250'],
            ['Waterdichte buitenlampen en contactdozen', 'Lekstroom na regen', '€ 60 – € 150 per punt'],
            ['Aansluitvermogen verhogen, met boletín', 'Te laag vermogen', '€ 150 – € 500'],
            ['Extra groep of nieuwe groepenkast', 'Overbelaste groep', '€ 150 – € 1.000'],
            ['Overspanningsbeveiliging', 'Storing bij onweer', '€ 150 – € 400'],
            ['Complete elektra vernieuwen', 'Oude installatie zonder aarding', 'zie <a href="/nl/kosten/elektra-vernieuwen/">kosten elektra</a>'],
          ],
          note: 'Indicaties exclusief btw.',
        },
      },
      {
        id: 'leeg',
        h: 'Stroomuitval in een leegstaand huis',
        html: '<p>Valt de stroom uit terwijl u er niet bent, dan ontdooit de vriezer, stopt de zwembadpomp en valt het alarm na een tijd uit. Twee dingen helpen: een slimme meter of stroomsensor die u een melding stuurt, en iemand die snel ter plaatse kan zijn. Met <a href="/nl/sleutelbeheer/">sleutelbeheer</a> komt er iemand langs die de groepenkast weer aanzet en kijkt wat de oorzaak was.</p>',
      },
    ],
    faq: [
      { q: 'Wat betekent ICP in mijn groepenkast?', a: 'De ICP (Interruptor de Control de Potencia) was de schakelaar die het vermogen begrensde. Tegenwoordig doet de slimme meter van de netbeheerder dat. Bij te veel vermogen schakelt de meter uit en na een paar seconden vaak vanzelf weer in.' },
      { q: 'Hoeveel vermogen heb ik nodig?', a: 'Voor een appartement zonder airco is 3,45 tot 4,6 kW meestal genoeg. Met airco en inductie 5,75 kW, en met een warmtepomp, zwembadpomp of laadpaal 7 tot 9,2 kW.' },
      { q: 'Mag ik het vermogen verhogen zonder nieuw boletín?', a: 'Soms. Als de installatie al voor het nieuwe vermogen is goedgekeurd, gaat het met een telefoontje naar de leverancier. Is ze ouder dan twintig jaar of niet geschikt, dan vraagt de netbeheerder om een nieuw boletín.' },
    ],
    links: [
      { href: '/nl/onderhoud/', label: 'Onderhoud en reparaties' },
      { href: '/nl/sleutelbeheer/', label: 'Sleutelbeheer en toezicht' },
      { href: '/nl/kosten/zonnepanelen/', label: 'Kosten zonnepanelen' },
    ],
    related: ['costs:elektra', 'problems:vocht', 'problems:inbraak'],
    sources: [
      { name: 'e-distribución, storing melden', url: 'https://www.edistribucion.com/es/averias.html' },
      { name: 'CNMC, het boletín eléctrico: wat het is en waarvoor', url: 'https://cnmc.es/sites/default/files/editor_contenidos/Energia/Consumidores/3.2%20Bolet%C3%ADn%20el%C3%A9ctrico%2C%20qu%C3%A9%20es%20y%20para%20qu%C3%A9%20sirve.pdf' },
    ],
    ctaTitle: 'Stroom valt steeds uit?',
    ctaText: 'Stuur een foto van uw groepenkast en vertel wanneer het gebeurt. Een elektricien zoekt de oorzaak.',
    minutes: 5,
    published: '2026-11-05',
  },
  {
    key: 'waterdruk',
    slug: 'geen-water-of-waterdruk',
    title: 'Geen water of te weinig waterdruk in uw huis in Spanje',
    seoTitle: 'Geen water of lage waterdruk in Spanje: oplossingen',
    short: 'Geen water of waterdruk',
    description: 'Weinig of geen water uit de kraan in de Axarquía? Storing, lege tank, droge put, kapotte pomp of lekkage: zo vindt u de oorzaak en wat de oplossing kost.',
    lead: 'U komt aan, draait de kraan open en er komt niets, of alleen een dun straaltje. Op een finca met tank of put, maar ook in een dorpshuis aan de waterleiding, gebeurt dat vaker dan u denkt.',
    keyword: 'geen water spanje huis',
    dienst: 'onderhoud',
    onderwerp: 'Ik heb geen water of te weinig waterdruk in mijn huis.',
    answer: 'Bij een huis aan de waterleiding is het meestal een <strong>storing of onderbreking in het dorp</strong>, een dichte hoofdkraan of een lekkage. Op een finca met tank of put is het vaak een <strong>lege tank</strong>, een <strong>kapotte of drooggelopen pomp</strong>, een <strong>vol filter</strong> of een put die in de zomer minder geeft.',
    sections: [
      {
        id: 'herkennen',
        h: 'Waar ligt het aan?',
        table: {
          head: ['Wat u ziet', 'Waarschijnlijke oorzaak'],
          rows: [
            ['Geen water, en de buren ook niet', 'Storing of geplande onderbreking van het waterbedrijf'],
            ['Geen water na lange afwezigheid', 'Hoofdkraan dicht, of afgesloten wegens een onbetaalde rekening'],
            ['Pomp slaat steeds aan en af', 'Drukvat zonder lucht, of een lek in de leiding'],
            ['Pomp draait, maar er komt geen water', 'Tank of put leeg, of de pomp trekt lucht'],
            ['Druk langzaam minder, water troebel', 'Filter vol of kalk in leidingen en kranen'],
            ['Hoge waterrekening of natte plek in de tuin', 'Lekkage in de toevoerleiding'],
          ],
        },
      },
      {
        id: 'zelf',
        h: 'Wat u zelf kunt doen',
        html: `<ul>
<li>Vraag de buren of het gemeentelijk waterbedrijf of er een storing is.</li>
<li>Controleer de hoofdkraan bij de watermeter en de kraan na de tank.</li>
<li>Kijk in de tank hoeveel water er nog in zit. Bestel op tijd een tankwagen bij.</li>
<li>Zet de pomp uit als hij droog draait, anders brandt hij door.</li>
<li>Kijk of de watermeter draait terwijl alle kranen dicht zijn: dan is er een lek.</li>
</ul>`,
      },
      {
        id: 'oplossing',
        h: 'De oplossing en wat die kost',
        table: {
          head: ['Oplossing', 'Bij', 'Indicatie'],
          rows: [
            ['Lekkage zoeken en repareren', 'Lek in de leiding', '€ 200 – € 1.000'],
            ['Drukvat vervangen of op druk brengen', 'Pomp die steeds aanslaat', '€ 150 – € 500'],
            ['Nieuwe pomp met drukvat', 'Kapotte pomp', '€ 600 – € 1.500'],
            ['Filter vervangen, ontkalker plaatsen', 'Lage druk, kalk', '€ 150 – € 1.500'],
            ['Grotere of extra watertank', 'Tank steeds leeg', 'zie <a href="/nl/kosten/watertank-en-beerput/">kosten watertank</a>'],
            ['Droogloopbeveiliging en niveaumelder', 'Pomp beschermen, melding bij lege tank', '€ 150 – € 400'],
          ],
          note: 'Indicaties exclusief btw.',
        },
      },
      {
        id: 'leeg',
        h: 'Als u er niet bent',
        html: '<p>Een lek in een leeg huis kan maanden doorlopen, en een pomp die droog draait gaat kapot. Sluit bij vertrek de hoofdkraan en zet de pomp uit, tenzij de tuin water nodig heeft. Met <a href="/nl/sleutelbeheer/">sleutelbeheer</a> kijkt iemand regelmatig naar de meter, de tank en de pomp, en wordt het huis vóór uw komst weer klaargezet.</p>',
      },
    ],
    faq: [
      { q: 'Waarom valt het water in de zomer soms uit?', a: 'Na droge jaren kunnen gemeenten in de Axarquía het water ’s nachts of op bepaalde uren afsluiten om te besparen. Een kleine buffertank met pomp vangt dat op.' },
      { q: 'Wat kost een tankwagen water?', a: 'Reken op € 4 tot € 10 per m³ inclusief transport, afhankelijk van de afstand en de toegangsweg.' },
      { q: 'Kan ik mijn put dieper laten boren?', a: 'Soms, maar daar is een vergunning voor nodig en het is geen garantie op meer water. Laat eerst kijken of de pomp en de leiding in orde zijn.' },
    ],
    links: [
      { href: '/nl/onderhoud/', label: 'Onderhoud en reparaties' },
      { href: '/nl/kosten/watertank-en-beerput/', label: 'Kosten watertank, boorput en beerput' },
      { href: '/nl/gidsen/off-grid-wonen-spanje/', label: 'Gids: off-grid wonen in Spanje' },
    ],
    related: ['costs:water', 'problems:beerput', 'problems:stroom'],
    sources: [
      { name: 'Junta de Andalucía, water en waterrechten', url: 'https://www.juntadeandalucia.es/medioambiente/portal/areas-tematicas/agua' },
    ],
    ctaTitle: 'Geen water of te weinig druk?',
    ctaText: 'Vertel ons hoe uw huis aan water komt en wat er gebeurt. Een loodgieter zoekt de oorzaak.',
    minutes: 5,
    published: '2026-11-05',
  },
  {
    key: 'beerput',
    slug: 'beerput-vol-of-stinkt',
    title: 'Beerput vol of stinkt: wat nu?',
    seoTitle: 'Beerput vol of stinkt in Spanje: oplossing en kosten',
    short: 'Beerput',
    description: 'Ruikt het naar riool of loopt de afvoer traag? Zo herkent u een volle of kapotte beerput (fosa séptica) en wat legen of vervangen kost in de Axarquía.',
    lead: 'Op veel fincas en in sommige dorpshuizen gaat het afvalwater naar een beerput in de tuin. Zolang hij werkt, denkt niemand eraan. Tot het gaat stinken of de wc niet meer doorspoelt.',
    keyword: 'beerput spanje',
    dienst: 'onderhoud',
    onderwerp: 'Mijn beerput is vol of stinkt.',
    answer: 'Stank, een trage afvoer of borrelende putten wijzen meestal op een <strong>volle beerput</strong>: laten legen kost € 150 tot € 300. Blijft het probleem, of staat er water op de grond boven de put, dan is het <strong>infiltratieveld verstopt</strong> of de put kapot. Een nieuwe septic tank kost € 2.500 tot € 6.000.',
    sections: [
      {
        id: 'herkennen',
        h: 'Wat is er aan de hand?',
        table: {
          head: ['Wat u ziet of ruikt', 'Waarschijnlijke oorzaak'],
          rows: [
            ['Rioollucht in de tuin, wc spoelt traag', 'Beerput vol'],
            ['Natte, groene of stinkende plek boven de put', 'Infiltratieveld verstopt of put lekt'],
            ['Rioollucht binnen, vooral in de badkamer', 'Sifon drooggevallen of ontluchting ontbreekt'],
            ['Borrelende afvoer of gootsteen', 'Verstopping of volle put'],
            ['Probleem kort na verhuur of een feest', 'Te veel water of vet in korte tijd'],
          ],
        },
      },
      {
        id: 'zelf',
        h: 'Wat u zelf kunt doen',
        html: `<ul>
<li>Laat na een lange afwezigheid alle kranen en de douche even lopen: een opgedroogde sifon laat rioollucht door.</li>
<li>Spoel geen vochtige doekjes, vet of bleek in grote hoeveelheden door: dat doodt de bacteriën in de put.</li>
<li>Rijd en parkeer niet boven de put of het infiltratieveld.</li>
<li>Noteer wanneer de put voor het laatst is geleegd.</li>
</ul>`,
      },
      {
        id: 'oplossing',
        h: 'De oplossing en wat die kost',
        table: {
          head: ['Oplossing', 'Bij', 'Indicatie'],
          rows: [
            ['Beerput legen', 'Volle put', '€ 150 – € 300'],
            ['Afvoer ontstoppen', 'Verstopte leiding', '€ 100 – € 300'],
            ['Ontluchting plaatsen', 'Rioollucht binnen', '€ 200 – € 600'],
            ['Infiltratieveld vernieuwen', 'Natte plek boven het veld', '€ 1.500 – € 4.000'],
            ['Nieuwe septic tank of zuivering', 'Kapotte of te kleine put', 'zie <a href="/nl/kosten/watertank-en-beerput/">kosten beerput</a>'],
          ],
          note: 'Indicaties exclusief btw.',
        },
      },
      {
        id: 'verhuur',
        h: 'Bij verhuur en verkoop',
        html: '<p>Verhuurt u het huis, dan gebruikt een vol huis in een week net zoveel water als u in een maand. Laat de put vóór het seizoen controleren. Bij verkoop vraagt een goede koper naar de afvoer: een kapotte of niet-toegestane beerput is een reden om over de prijs te praten. Lees ook de gids <a href="/nl/gidsen/huis-verkopen-spanje/">huis verkopen in Spanje</a>.</p>',
      },
    ],
    faq: [
      { q: 'Moet een beerput regelmatig geleegd worden?', a: 'Ja, meestal eens per twee tot vier jaar. Wacht niet tot hij overloopt: dan raakt ook het infiltratieveld verstopt.' },
      { q: 'Zijn beerputstarters of bacteriën nodig?', a: 'Meestal niet. Een gezonde put houdt zichzelf op gang. Ze kunnen helpen na een periode met veel bleek of schoonmaakmiddel.' },
      { q: 'Is mijn oude beerput nog toegestaan?', a: 'Een gemetselde put zonder bodem, waar het afvalwater direct de grond in loopt, voldoet meestal niet aan de huidige regels. Bij een verbouwing of klacht kan vervanging worden geëist.' },
    ],
    links: [
      { href: '/nl/onderhoud/', label: 'Onderhoud en reparaties' },
      { href: '/nl/kosten/watertank-en-beerput/', label: 'Kosten watertank, boorput en beerput' },
      { href: '/nl/aankoopkeuring/', label: 'Aankoopkeuring' },
    ],
    related: ['costs:water', 'problems:waterdruk', 'problems:vocht'],
    sources: [
      { name: 'Junta de Andalucía, lozingen en afvalwater', url: 'https://www.juntadeandalucia.es/medioambiente/portal/areas-tematicas/agua' },
    ],
    ctaTitle: 'Problemen met de beerput?',
    ctaText: 'Vertel ons wat u ziet en ruikt, en stuur een foto van de plek. We regelen legen, reparatie of vervanging.',
    minutes: 4,
    published: '2026-11-05',
  },
  {
    key: 'wateroverlast',
    slug: 'wateroverlast-en-keermuur',
    title: 'Wateroverlast na zware regen en een scheurende keermuur',
    seoTitle: 'Wateroverlast en keermuur: wat doen na een DANA?',
    short: 'Wateroverlast en keermuur',
    description: 'Water tegen of in uw huis na zware regen, een weggespoelde toegangsweg of een keermuur die scheurt of helt?',
    lead: 'In de herfst kan in een paar uur meer regen vallen dan in de hele zomer. Op een helling zoekt dat water de kortste weg naar beneden, en die loopt soms tegen of door uw huis.',
    keyword: 'wateroverlast spanje',
    dienst: 'onderhoud',
    onderwerp: 'Ik heb wateroverlast of een keermuur die scheurt.',
    answer: 'Wateroverlast op een helling komt bijna altijd door <strong>afwatering die ontbreekt of verstopt is</strong>: water van de helling, het terras of de weg dat geen uitweg heeft. Een keermuur die scheurt, bol staat of helt, heeft meestal <strong>geen drainage</strong> erachter. Laat dat snel nakijken: na de volgende bui kan hij bezwijken.',
    sections: [
      {
        id: 'herkennen',
        h: 'Signalen',
        table: {
          head: ['Wat u ziet', 'Wat het betekent'],
          rows: [
            ['Modder of water tegen de achtermuur na regen', 'Water van de helling heeft geen afvoer langs het huis'],
            ['Natte muur binnen na regen, aan de bergkant', 'Doorslaand vocht: grond en water tegen de muur'],
            ['Keermuur staat bol, helt of heeft schuine scheuren', 'Druk van water achter de muur, risico op bezwijken'],
            ['Water komt uit de voegen onderaan de muur', 'Muur draineert, dat is goed; geen water is juist een risico'],
            ['Geulen in de toegangsweg', 'Afstromend water zonder goot of dwarsdrempel'],
          ],
        },
      },
      {
        id: 'direct',
        h: 'Wat u direct doet',
        html: `<ul>
<li>Houd afstand van een keermuur die beweegt of scheurt, en parkeer er niet onder of boven.</li>
<li>Maak goten, putjes en roosters vrij van bladeren en modder.</li>
<li>Leid water tijdelijk af met zandzakken of een greppel, weg van het huis.</li>
<li>Maak foto’s van de schade, met datum, voor de verzekering.</li>
<li>Bij gevaar of grote schade na een storm: bel 112.</li>
</ul>`,
      },
      {
        id: 'oplossing',
        h: 'De oplossing en wat die kost',
        table: {
          head: ['Oplossing', 'Bij', 'Indicatie'],
          rows: [
            ['Drainage langs de achtermuur', 'Water en vocht aan de bergkant', '€ 40 – € 80 per m'],
            ['Afwateringsgoot op terras of oprit', 'Water dat naar het huis loopt', '€ 60 – € 150 per m'],
            ['Drainage achter een bestaande keermuur', 'Muur zonder afvoer', '€ 80 – € 200 per m'],
            ['Keermuur herstellen of herbouwen', 'Scheurende of ingestorte muur', 'zie <a href="/nl/kosten/keermuur-en-afwatering/">kosten keermuur</a>'],
            ['Toegangsweg herstellen met goten', 'Weggespoelde weg', '€ 40 – € 70 per m²'],
          ],
          note: 'Indicaties exclusief btw.',
        },
      },
      {
        id: 'verzekering',
        h: 'Verzekering en het Consorcio',
        html: '<p>Schade door uitzonderlijke regen, overstroming of storm wordt in Spanje vaak niet door de verzekeraar zelf betaald, maar door het <em>Consorcio de Compensación de Seguros</em>, een staatsfonds. Daarvoor moet u wel een opstal- of inboedelverzekering hebben. Meld de schade zo snel mogelijk en bewaar foto’s en facturen.</p>',
      },
    ],
    faq: [
      { q: 'Wat is een DANA?', a: 'Een koudeluchtbel hoog in de atmosfeer die vooral in september tot november korte, zware regenbuien geeft. In een paar uur kan dan meer dan 100 mm vallen.' },
      { q: 'Wie is verantwoordelijk voor een keermuur op de grens?', a: 'Dat hangt af van wie de muur heeft gebouwd en welke grond hij tegenhoudt. Kijk in de eigendomsakte en het kadaster, en overleg met de buren voordat u gaat herstellen.' },
      { q: 'Kan ik dit voorkomen?', a: 'Ja. Laat vóór het najaar goten, putten en de drainage controleren en schoonmaken. Dat is een vast onderdeel van onderhoud en sleutelbeheer.' },
    ],
    links: [
      { href: '/nl/onderhoud/', label: 'Onderhoud en reparaties' },
      { href: '/nl/sleutelbeheer/', label: 'Sleutelbeheer en toezicht' },
      { href: '/nl/weer/september/', label: 'Het weer in september: DANA en eerste regen' },
    ],
    related: ['costs:keermuur', 'problems:daklekkage', 'problems:scheuren'],
    sources: [
      { name: 'Consorcio de Compensación de Seguros, schade door uitzonderlijke gebeurtenissen', url: 'https://www.consorseguros.es/' },
      { name: 'AEMET, wat is een DANA', url: 'https://www.aemet.es/' },
    ],
    ctaTitle: 'Wateroverlast of een keermuur die scheurt?',
    ctaText: 'Stuur foto’s van de muur of de plek waar het water heen loopt. We komen kijken en geven een prijs.',
    minutes: 5,
    published: '2026-11-05',
  },
  {
    key: 'schoorsteen',
    slug: 'schoorsteen-rookt-terug',
    title: 'Schoorsteen rookt terug of trekt slecht: oorzaak en oplossing',
    seoTitle: 'Schoorsteen of houtkachel rookt terug: oplossingen',
    short: 'Schoorsteen rookt terug',
    description: 'Rook in de kamer bij uw open haard of houtkachel? Koud kanaal, nat hout, te weinig lucht, wind of een vuile schoorsteen, en wat de oplossing kost.',
    lead: 'U steekt de haard aan en binnen een paar minuten hangt de kamer vol rook. Bij een huis dat maanden dicht heeft gezeten komt dat vaak voor. Meestal zit er een van vijf oorzaken achter, en de meeste zijn eenvoudig op te lossen.',
    keyword: 'schoorsteen rookt terug',
    dienst: 'schoorsteen',
    onderwerp: 'Mijn schoorsteen of kachel rookt terug.',
    answer: 'Rookt de haard alleen bij het aansteken, dan is het <strong>kanaal nog koud</strong>. Rookt hij steeds, dan is de schoorsteen vaak <strong>vuil of verstopt</strong> door roet of een nest, komt er <strong>te weinig lucht</strong> in de kamer, of <strong>blaast de wind</strong> de rook terug. Laat de schoorsteen eerst vegen en controleren: dat kost € 60 tot € 120 en lost het vaak al op.',
    sections: [
      {
        id: 'oorzaak',
        h: 'Waarom rookt de schoorsteen terug?',
        table: {
          head: ['Wat u ziet', 'Waarschijnlijke oorzaak'],
          rows: [
            ['Rook alleen bij het aansteken', 'Koud rookkanaal, vooral bij een buitenmuur of na lang stilstaan'],
            ['Rook steeds, ook als het vuur goed brandt', 'Vuil of verstopt kanaal: roet, teer, een nest of losse stenen'],
            ['Beter als er een raam op een kier staat', 'Te weinig luchttoevoer: een goed afgesloten huis of een afzuigkap die lucht wegzuigt'],
            ['Alleen bij wind uit één richting', 'Wind die de rook terugdrukt, door een hogere buur, een helling of een te korte schoorsteen'],
            ['Veel rook, sissend en zwart vuur', 'Nat hout'],
            ['Rookgeur in een andere kamer of bij de buren', 'Scheur in het kanaal: laat dit direct controleren'],
          ],
        },
      },
      {
        id: 'zelf',
        h: 'Wat u zelf kunt doen',
        html: `<ul>
<li><strong>Warm het kanaal voor</strong> met een prop brandende krant onder in de schoorsteen, en begin met klein, droog aanmaakhout.</li>
<li><strong>Zet een raam op een kier</strong> in de kamer en zet de afzuigkap in de keuken uit.</li>
<li><strong>Stook droog hout</strong> met minder dan 20% vocht, zoals olijf- of amandelhout dat een jaar heeft gedroogd.</li>
<li><strong>Kijk omhoog</strong> met een zaklamp als de haard koud is: ziet u geen licht, dan zit er iets in het kanaal.</li>
<li><strong>Hang een koolmonoxidemelder</strong> op in de kamer met de haard of kachel. Die kost € 25 tot € 50.</li>
</ul>`,
      },
      {
        id: 'oplossing',
        h: 'Oplossingen en kosten',
        table: {
          head: ['Oplossing', 'Wanneer', 'Indicatie'],
          rows: [
            ['Schoorsteen vegen en controleren', 'Altijd de eerste stap', '€ 60 – € 120'],
            ['Windkap of trekkap plaatsen', 'Bij terugslag door wind', '€ 150 – € 400'],
            ['Schoorsteen verlengen', 'Als de schoorsteen te laag boven het dak of de nok uitkomt', '€ 300 – € 1.200'],
            ['Luchtrooster of buitenluchtaansluiting', 'Bij te weinig luchttoevoer', '€ 100 – € 400'],
            ['Rvs-binnenbuis plaatsen', 'Bij een te wijd, gescheurd of lekkend kanaal', '€ 1.000 – € 2.500'],
          ],
          note: 'Meer prijzen voor vegen, herstel en een nieuwe kachel: zie <a href="/nl/kosten/schoorsteen-en-houtkachel/">kosten schoorsteen en houtkachel</a>.',
        },
      },
      {
        id: 'gevaar',
        h: 'Wanneer is het gevaarlijk?',
        html: '<p>Rook in huis is hinderlijk, maar koolmonoxide ziet en ruikt u niet. Krijgt u hoofdpijn, wordt u duizelig of misselijk bij de haard, ga dan naar buiten en stook niet meer tot de schoorsteen is gecontroleerd. Ruikt u rook in een andere kamer of bij de buren, of ziet u roetvlekken op een muur, dan is het kanaal waarschijnlijk gescheurd.</p>',
      },
    ],
    faq: [
      { q: 'Waarom rookt de haard alleen in het begin van de winter?', a: 'Een kanaal dat maanden koud en vochtig is geweest, trekt slecht tot het opgewarmd is. Ook kan er in het voorjaar een nest in zijn gebouwd. Laat de schoorsteen in september of oktober vegen.' },
      { q: 'Helpt een windkap altijd?', a: 'Alleen als de wind de oorzaak is. Bij een vuil kanaal of te weinig luchttoevoer helpt een windkap niet. Laat daarom eerst de oorzaak vaststellen.' },
      { q: 'Kan een houtkachel in een oude open haard?', a: 'Ja, vaak wel, met een rvs-binnenbuis door de bestaande schoorsteen. Dat lost meteen de meeste rookproblemen op en geeft veel meer warmte.' },
    ],
    links: [
      { href: '/nl/kosten/schoorsteen-en-houtkachel/', label: 'Kosten schoorsteen en houtkachel' },
      { href: '/nl/gidsen/huis-winterklaar-spanje/', label: 'Gids: huis winterklaar maken' },
      { href: '/nl/onderhoud/', label: 'Onderhoud en reparaties' },
    ],
    related: ['costs:schoorsteen', 'problems:tocht', 'problems:vocht'],
    sources: [
      { name: 'BOE, RITE (installaties voor verwarming)', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2007-15820' },
    ],
    ctaTitle: 'Schoorsteen rookt terug?',
    ctaText: 'Stuur een foto van de haard of kachel en van de schoorsteen op het dak, en vertel wanneer het gebeurt. U krijgt advies en een prijs.',
    minutes: 4,
    published: '2026-11-05',
  },
  {
    key: 'tocht',
    slug: 'tocht-en-condens-bij-ramen',
    title: 'Tocht en condens bij ramen in uw huis in Spanje: oorzaak en oplossing',
    seoTitle: 'Tocht en condens bij ramen in Spanje: oplossingen',
    short: 'Tocht en condens bij ramen',
    description: 'Druppelen uw ramen in de winter en tocht het? Zo komt het door enkel glas en koude aluminium kozijnen, en dit kosten nieuwe ramen of nieuw glas.',
    lead: 'Spaanse huizen zijn gebouwd voor de zomer. In de winter zit u achter enkel glas in dunne aluminium kozijnen, met een koude tocht langs de vloer en ’s ochtends plassen water op de vensterbank. Dat is niet alleen onprettig, het leidt ook tot schimmel.',
    keyword: 'condens ramen spanje',
    dienst: 'ramen',
    onderwerp: 'Ik heb last van tocht of condens bij mijn ramen.',
    answer: 'Condens op ramen komt door <strong>vochtige binnenlucht op een koud oppervlak</strong>: enkel glas en aluminium kozijnen zonder thermische onderbreking. Tocht komt meestal door <strong>versleten afdichting en kieren</strong> rond kozijnen en rolluikkasten. Ventileren en kitten helpen een eind; de echte oplossing is dubbel glas in een geïsoleerd kozijn, vanaf ongeveer € 400 per raam.',
    sections: [
      {
        id: 'oorzaak',
        h: 'Waar komt het door?',
        table: {
          head: ['Wat u ziet', 'Waarschijnlijke oorzaak'],
          rows: [
            ['Druppels op het glas, vooral ’s ochtends', 'Enkel glas en vochtige lucht van slapen, koken en douchen'],
            ['Water en zwarte plekjes op het kozijn', 'Aluminium kozijn zonder thermische onderbreking: het metaal is ijskoud'],
            ['Tocht langs het raam', 'Versleten borstels of rubbers, kieren tussen kozijn en muur'],
            ['Koude lucht uit de rolluikkast', 'Ongeïsoleerde rolluikkast (cajón de persiana)'],
            ['Schimmel in de hoek rond het raam', 'Koudebrug in de muur en te weinig ventilatie'],
          ],
        },
      },
      {
        id: 'zelf',
        h: 'Wat u zelf kunt doen',
        html: `<ul>
<li><strong>Ventileer elke dag</strong> tien minuten met de ramen tegen elkaar open, ook in de winter.</li>
<li><strong>Veeg condens ’s ochtends weg</strong> zodat het niet in het kozijn of de muur trekt.</li>
<li><strong>Gebruik een ontvochtiger</strong> in slaapkamers en in een huis dat leegstaat.</li>
<li><strong>Vervang tochtborstels en rubbers</strong> van schuiframen en kit kieren tussen kozijn en muur.</li>
<li><strong>Isoleer de rolluikkast</strong> met isolatieplaat en tochtstrip.</li>
</ul>`,
      },
      {
        id: 'oplossing',
        h: 'Oplossingen en kosten',
        table: {
          head: ['Oplossing', 'Toelichting', 'Indicatie'],
          rows: [
            ['Afdichting en kitwerk vernieuwen', 'Per raam, borstels, rubbers en kit', '€ 50 – € 150'],
            ['Rolluikkast isoleren', 'Per kast', '€ 80 – € 200'],
            ['Dubbel glas in bestaand kozijn', 'Als het kozijn nog goed en geschikt is', '€ 100 – € 250 per m²'],
            ['Nieuw raam met dubbel glas', 'Aluminium RPT of PVC, ongeveer 120 × 120 cm', '€ 350 – € 800'],
          ],
          note: 'Meer over materialen, glas en vergunning: zie <a href="/nl/kosten/ramen-en-kozijnen/">kosten ramen en kozijnen</a>.',
        },
      },
    ],
    faq: [
      { q: 'Is condens op ramen erg?', a: 'Een beetje condens op een koude ochtend is normaal. Druppelt het elke dag en wordt het kozijn of de muur zwart, dan ontstaat schimmel. Dan is meer ventilatie of beter glas nodig.' },
      { q: 'Lost dubbel glas alle condens op?', a: 'Het meeste wel, omdat het glas aan de binnenkant warmer blijft. Is de lucht in huis heel vochtig, dan blijft ventileren nodig. Zie ook vocht en schimmel.' },
      { q: 'Helpen nieuwe ramen ook in de zomer?', a: 'Ja. Met zonwerend dubbel glas en rolluiken blijft het huis koeler, zodat de airco minder hoeft te draaien.' },
    ],
    links: [
      { href: '/nl/kosten/ramen-en-kozijnen/', label: 'Kosten ramen en kozijnen' },
      { href: '/nl/problemen/vocht-en-schimmel/', label: 'Vocht en schimmel' },
      { href: '/nl/gidsen/huis-winterklaar-spanje/', label: 'Gids: huis winterklaar maken' },
    ],
    related: ['costs:ramen', 'problems:vocht', 'costs:airco'],
    sources: [
      { name: 'Código Técnico de la Edificación, DB HE (energiebesparing)', url: 'https://www.codigotecnico.org/DocumentosCTE/AhorroEnergia.html' },
      { name: 'IDAE, subsidies voor energiebesparing in woningen', url: 'https://www.idae.es/ayudas-y-financiacion' },
    ],
    ctaTitle: 'Last van tocht of condens?',
    ctaText: 'Stuur foto’s van uw ramen en de plekken met condens of schimmel. U krijgt advies en een prijs.',
    minutes: 4,
    published: '2026-11-05',
  },
];
