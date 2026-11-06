import type { Topic } from './types';

// Zelf-doen-gidsen in het Nederlands: hoe u een klus zelf aanpakt, wat u moet kiezen,
// waar u materiaal koopt, welke vergunning nodig is en wanneer u beter een vakman vraagt.
export const diyNl: Topic[] = [
  {
    key: 'zwembad',
    slug: 'zwembad-zelf-aanleggen',
    title: 'Zelf een zwembad aanleggen in Spanje: alle stappen',
    seoTitle: 'Zelf een zwembad aanleggen in Spanje: stappenplan',
    short: 'Zwembad zelf aanleggen',
    description: 'Zelf een zwembad bouwen in de Axarquía? Het stappenplan van vergunning tot vullen, welk type u zelf kunt bouwen en wat het materiaal kost.',
    lead: 'Een zwembad is de droom van bijna elke huiseigenaar in de Axarquía, en een flink deel van het werk kunt u zelf doen. Maar wie de vergunning of het graafwerk onderschat, betaalt dat later dubbel.',
    keyword: 'zelf zwembad aanleggen',
    dienst: 'zwembad',
    onderwerp: 'Ik wil een zwembad aanleggen en zoek hulp bij (een deel van) het werk.',
    answer: 'Een <strong>opzetbad</strong> zet u helemaal zelf neer. Een ingegraven bad van <strong>betonblokken met een liner</strong> of een <strong>prefab polyester kuip</strong> kunt u grotendeels zelf bouwen, als u het graafwerk, de elektra en eventueel de kraan uitbesteedt. Voor elk ingegraven bad heeft u in Andalusië een <strong>bouwvergunning met een project</strong> nodig.',
    sections: [
      {
        id: 'mag-het',
        h: 'Eerst: mag hier een zwembad komen?',
        html: `<p>Begin niet met graven voordat u dit weet. Een ingegraven zwembad is in Andalusië een <em>obra mayor</em>: u vraagt een bouwvergunning (<em>licencia de obra</em>) aan bij de gemeente, met een project van een architect of technisch ingenieur. Let op drie dingen:</p>
<ul>
<li><strong>Soort grond.</strong> Op landelijke grond (<em>suelo rústico</em>) zijn de regels strenger dan in een woonwijk. Vraag bij het ayuntamiento wat er op uw perceel mag.</li>
<li><strong>De status van uw huis.</strong> Heeft uw huis AFO-status of geen volledige vergunning, dan mag u vaak niets bijbouwen. Lees eerst de gids over <a href="/nl/gidsen/afo-legaliseren-andalusie/">AFO en legaliseren</a>.</li>
<li><strong>Water.</strong> Een bad van 8 × 4 meter bevat 40 tot 50 m³ water. In droge jaren hebben gemeentes in de Axarquía het vullen van zwembaden beperkt of verboden. Vraag ernaar voordat u bouwt, en reken op een tankwagen (<em>camión cisterna</em>) voor de eerste vulling.</li>
</ul>
<p>Hoe het in uw gemeente gaat, leest u bijvoorbeeld op <a href="/nl/plaatsen/competa/bouwvergunning/">bouwvergunning in Cómpeta</a> of <a href="/nl/plaatsen/nerja/bouwvergunning/">in Nerja</a>.</p>`,
      },
      {
        id: 'kiezen',
        h: 'Welk zwembad kunt u zelf bouwen?',
        table: {
          head: ['Type', 'Zelf te doen?'],
          rows: [
            ['Opzetbad van staal of hars, op een betonplaat', 'Helemaal'],
            ['Bouwpakket van betonblokken (<em>bloques de encofrado</em>) met liner', 'Grotendeels, graafwerk en elektra uitbesteden'],
            ['Betonblokken met gresite-mozaïek', 'Ja, met ervaring in metsel- en tegelwerk'],
            ['Prefab polyester kuip', 'Deels: graven en plaatsen met een kraan'],
            ['Gespoten beton (gunite)', 'Nee, vraagt een gespecialiseerd bedrijf'],
          ],
        },
        after: '<p>Op een finca met een smalle bergweg is een prefab kuip vaak geen optie: de vrachtwagen en de kraan komen er niet. Een blokkenbad kunt u overal bouwen, want alles komt in kleine delen aan.</p>',
      },
      {
        id: 'stappen',
        h: 'Stap voor stap',
        html: `<ol>
<li><strong>Plek en ontwerp.</strong> Kies een plek met zon in de middag, uit de wind en met toegang voor een minigraver. Houd afstand tot de erfgrens; uw gemeente schrijft voor hoeveel.</li>
<li><strong>Vergunning.</strong> Laat het project tekenen en vraag de vergunning aan. Reken op enkele weken tot enkele maanden.</li>
<li><strong>Uitzetten en graven.</strong> Huur een minigraver met machinist of doe het zelf als u ervaring heeft. Regel vooraf waar de grond heen gaat; afvoeren kost geld. Stuit u op rots, dan is een breekhamer nodig.</li>
<li><strong>Bodem.</strong> Een laag grind, daarop een gewapende betonvloer met afschot naar de bodemput.</li>
<li><strong>Wanden.</strong> Stapel de blokken met wapening en stort ze vol met beton. Controleer elke laag met de waterpas.</li>
<li><strong>Leidingen.</strong> Skimmers, bodemput, inlaten en de leidingen naar de technische ruimte. Doe een druktest voordat u de leidingen afdekt.</li>
<li><strong>Afwerking.</strong> Een liner, of pleisterwerk met gresite-mozaïek.</li>
<li><strong>Techniek.</strong> Pomp, zandfilter (of glasfilter) en eventueel zoutelektrolyse. De elektra laat u aansluiten door een erkend installateur (<em>instalador autorizado</em>), die er ook het certificaat voor afgeeft.</li>
<li><strong>Rand en terras.</strong> Plaats de randstenen (<em>coronación</em>), vul aan rondom en leg het terras.</li>
<li><strong>Vullen en inregelen.</strong> Vul het bad, start de filter en breng het water op pH en chloor of zout.</li>
</ol>`,
      },
      {
        id: 'kopen',
        h: 'Waar koopt u het materiaal?',
        html: `<ul>
<li><strong>Bouwpakketten en opzetbaden</strong>: bij de grote bouwmarkten in Málaga en bij online leveranciers in Spanje, die ook op een bergweg leveren als u dat vooraf meldt.</li>
<li><strong>Blokken, beton, wapening en grind</strong>: bij een bouwmateriaalhandel (<em>almacén de materiales de construcción</em>) in Vélez-Málaga, Torre del Mar of Nerja. Zij leveren met kleine vrachtwagens, ook in de dorpen.</li>
<li><strong>Pomp, filter, liner en chemicaliën</strong>: bij een zwembadwinkel (<em>tienda de piscinas</em>). Die geven vaak ook advies over de maat van de pomp.</li>
<li><strong>Minigraver of betonmolen</strong>: bij een verhuurbedrijf (<em>alquiler de maquinaria</em>).</li>
</ul>`,
      },
      {
        id: 'vakman',
        h: 'Wanneer beter een vakman?',
        html: `<ul>
<li>Het bad komt op een helling en heeft een keermuur nodig.</li>
<li>De grond is rots of de plek is slecht bereikbaar.</li>
<li>U wilt een bad van gespoten beton, een overloop of een bijzondere vorm.</li>
<li>De elektra en het certificaat: dat mag alleen een erkend installateur doen.</li>
<li>U bent zelf niet in Spanje om het werk te volgen.</li>
</ul>
<p>Veel eigenaren kiezen een tussenweg: de vakman doet graafwerk, ruwbouw en techniek, en u doet zelf het terras en de afwerking.</p>`,
      },
    ],
    faq: [
      { q: 'Heb ik een vergunning nodig voor een opzetbad?', a: 'Een opzetbad dat u weer kunt weghalen valt in de meeste gemeentes niet onder een bouwvergunning. Een ingegraven of half ingegraven bad, of een betonplaat die blijft liggen, meestal wel. Vraag het na bij het ayuntamiento.' },
      { q: 'Kan ik een deel zelf doen en de rest laten doen?', a: 'Ja, en dat doen veel eigenaren. Wij doen bijvoorbeeld het graafwerk, de ruwbouw en de techniek, en u legt zelf het terras en doet de afwerking. Vertel ons wat u zelf wilt doen, dan plannen we de rest eromheen.' },
      { q: 'Hoelang duurt het om zelf een zwembad te bouwen?', a: 'Reken naast de vergunning op vier tot tien weekenden of twee tot vier weken voltijds, afhankelijk van uw ervaring en de grond.' },
    ],
    links: [
      { href: '/nl/zwembad/', label: 'Zwembad laten bouwen of onderhouden' },
      { href: '/nl/kosten/zwembad-laten-bouwen/', label: 'Wat kost een zwembad laten bouwen?' },
      { href: '/nl/gidsen/afo-legaliseren-andalusie/', label: 'Gids: AFO en legaliseren' },
      { href: '/nl/problemen/legionella/', label: 'Legionella in zwembad en leidingen' },
    ],
    related: ['costs:zwembad', 'diy:dak', 'problems:legionella'],
    sources: [
      { name: 'Junta de Andalucía, Ley 7/2021 de impulso para la sostenibilidad del territorio (LISTA)', url: 'https://www.juntadeandalucia.es/boja/2021/233/1' },
      { name: 'Código Técnico de la Edificación (CTE)', url: 'https://www.codigotecnico.org/' },
      { name: 'Reglamento electrotécnico para baja tensión (REBT)', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2002-18099' },
    ],
    ctaTitle: 'Liever (een deel) laten doen?',
    ctaText: 'Wilt u het zwembad laten bouwen, helemaal of voor een deel? Wij helpen u het te realiseren, van vergunning tot het eerste zwemmen.',
    minutes: 7,
    published: '2026-11-05',
  },
  {
    key: 'dak',
    slug: 'dak-zelf-repareren-of-vervangen',
    title: 'Dak repareren of vervangen in Spanje: wat u zelf kunt doen',
    seoTitle: 'Dak zelf repareren in Spanje: pannen en dakterras',
    short: 'Dak zelf repareren',
    description: 'Dakpannen vervangen, dakterras waterdicht maken of een nieuw dak? Wat u zelf kunt doen, welke materialen u kiest en wanneer u een vakman inschakelt.',
    lead: 'De meeste daklekkages in de Axarquía beginnen klein: een verschoven pan, een verstopte afvoer of een gescheurde laag op het dakterras. Veel daarvan lost u zelf op, als u veilig werkt.',
    keyword: 'dak repareren spanje',
    dienst: 'onderhoud',
    onderwerp: 'Ik wil mijn dak of dakterras laten repareren of vernieuwen.',
    answer: 'Een <strong>gebroken pan vervangen</strong>, <strong>goten en afvoeren schoonmaken</strong> en een <strong>dakterras opnieuw coaten</strong> met vloeibaar rubber kunt u zelf. Balken of een dakplaat vervangen, het dak verhogen of een volledig nieuw dak is vergunningplichtig werk voor een vakman. Een dak van <strong>uralita</strong> (asbestcement) raakt u nooit zelf aan.',
    sections: [
      {
        id: 'welk-dak',
        h: 'Welk dak heeft u?',
        table: {
          head: ['Dak', 'Herkennen', 'Let op'],
          rows: [
            ['Schuin dak met holle pannen (<em>teja árabe</em>)', 'Rode of bruine gebogen pannen, vaak op mortel gelegd', 'Pannen schuiven door wind en hitte; de laag eronder is vaak oud'],
            ['Plat dak of dakterras (<em>azotea</em>)', 'Betegeld of gecoat, met afvoeren in de hoeken', 'Lekt meestal bij naden, randen en afvoeren'],
            ['Golfplaten van <em>uralita</em>', 'Grijze golfplaten, vaak op bijgebouwen', 'Bevat bijna altijd asbest: alleen een erkend bedrijf mag het verwijderen'],
          ],
        },
      },
      {
        id: 'zelf',
        h: 'Wat kunt u zelf doen?',
        table: {
          head: ['Klus', 'Zelf?'],
          rows: [
            ['Goten en afvoeren schoonmaken', 'Ja, elk najaar'],
            ['Gebroken of verschoven pan vervangen', 'Ja'],
            ['Naden en aansluitingen kitten of afplakken', 'Ja'],
            ['Dakterras coaten met vloeibaar rubber (<em>membrana líquida</em>)', 'Ja'],
            ['Een deel van het dak opnieuw pannen', 'Met ervaring'],
            ['Balken, dakplaat of hele dak vernieuwen', 'Nee'],
          ],
        },
      },
      {
        id: 'dakterras',
        h: 'Zo maakt u een dakterras opnieuw waterdicht',
        html: `<ol>
<li>Veeg en spoel het terras schoon en laat het helemaal drogen.</li>
<li>Haal losse stukken coating en mortel weg en vul scheuren met een reparatiemortel of kit.</li>
<li>Maak de afvoeren vrij en controleer of het water er echt heen loopt.</li>
<li>Breng een primer aan, volgens het voorschrift van de coating.</li>
<li>Zet hoeken, randen en naden eerst in met wapeningsweefsel (<em>malla</em>) in de eerste laag.</li>
<li>Breng minstens twee lagen aan, kruiselings, met de droogtijd ertussen.</li>
</ol>
<p>Werk in het voorjaar of najaar: in de volle zomerzon droogt de coating te snel, en in de winter is de kans op regen te groot. Zitten er tegels op het terras die u wilt houden, dan is er een transparante coating, maar die is minder sterk. Moeten de tegels eraf, dan is het werk voor een vakman.</p>`,
      },
      {
        id: 'veilig',
        h: 'Veilig werken op het dak',
        html: `<ul>
<li>Werk nooit alleen en nooit bij wind of na regen.</li>
<li>Gebruik een harnas met een ankerpunt op een schuin dak, en een ladder die minstens een meter boven de dakrand uitsteekt.</li>
<li>Loop niet op oude pannen zonder plank: ze breken, en de constructie eronder is soms zwakker dan u denkt.</li>
<li>Komt er een ladder, steiger of container op straat, dan heeft u een vergunning voor het gebruik van de openbare weg nodig (<em>ocupación de la vía pública</em>).</li>
</ul>`,
      },
      {
        id: 'vergunning',
        h: 'Vergunning',
        html: '<p>Herstel met dezelfde materialen valt meestal onder kleine werken (<em>obra menor</em>), met een melding (<em>declaración responsable</em>) bij de gemeente. Verandert u de constructie, de hoogte of de vorm van het dak, dan is het een <em>obra mayor</em> met een project van een architect. In de historische kernen van dorpen als Frigiliana of Cómpeta zijn er vaak regels voor het soort en de kleur van de pannen.</p>',
      },
      {
        id: 'vakman',
        h: 'Wanneer beter een vakman?',
        html: `<ul>
<li>Het plafond buigt door, er zitten scheuren in de balken of er is houtworm of termiet.</li>
<li>Het lekt terwijl de pannen of de coating er goed uitzien: dan zit het probleem eronder.</li>
<li>Het dak moet helemaal vernieuwd worden, met isolatie.</li>
<li>Er zit uralita of ander asbest op het dak.</li>
</ul>`,
      },
    ],
    faq: [
      { q: 'Wanneer kan ik het beste aan het dak werken?', a: 'In het voorjaar en najaar. In juli en augustus wordt een dak te heet om veilig te werken en drogen coatings te snel. Controleer het dak elk najaar, vóór de regens van oktober en november.' },
      { q: 'Kan ik oude pannen hergebruiken?', a: 'Ja, en in historische kernen is dat vaak juist gewenst. Oude teja árabe is gewild en soms duurder dan nieuwe. Gebruik hele pannen voor de bovenlaag en de mindere voor de onderlaag.' },
      { q: 'Mag ik uralita zelf weghalen?', a: 'Nee. Asbest mag in Spanje alleen worden verwijderd door een bedrijf dat in het register voor asbestwerk (RERA) staat. Laat het liggen tot het professioneel wordt gedaan.' },
    ],
    links: [
      { href: '/nl/problemen/daklekkage/', label: 'Daklekkage: oorzaak en oplossing' },
      { href: '/nl/gidsen/asbest-uralita-dak-spanje/', label: 'Gids: asbest en uralita op het dak' },
      { href: '/nl/kosten/dak-en-dakterras/', label: 'Wat kost een nieuw dak of dakterras?' },
      { href: '/nl/onderhoud/', label: 'Onderhoud en reparaties' },
    ],
    related: ['problems:daklekkage', 'costs:dak', 'diy:witten'],
    sources: [
      { name: 'Código Técnico de la Edificación (CTE), DB HS 1 bescherming tegen vocht', url: 'https://www.codigotecnico.org/' },
      { name: 'Real Decreto 396/2006 over werken met asbest', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2006-6474' },
    ],
    ctaTitle: 'Lekt het dak, of moet het helemaal opnieuw?',
    ctaText: 'Moet het dak gerepareerd of vernieuwd worden? Wij pakken het voor u aan, ook als u zelf niet in Spanje bent.',
    minutes: 7,
    published: '2026-11-05',
  },
  {
    key: 'ramen',
    slug: 'ramen-zelf-vervangen',
    title: 'Ramen vervangen in Spanje: wat u kiest en hoe u het zelf doet',
    seoTitle: 'Ramen zelf vervangen in Spanje: aluminium of PVC',
    short: 'Ramen vervangen',
    description: 'Nieuwe ramen in de Axarquía? Aluminium of PVC, welk glas, schuif- of draai-kiepraam, hoe u meet en plaatst en welke vergunning nodig is.',
    lead: 'Oude ramen met enkel glas laten in de winter de kou binnen en in de zomer de hitte. Nieuwe ramen zijn een van de beste verbeteringen voor een Spaans huis, en met wat handigheid plaatst u ze zelf.',
    keyword: 'ramen vervangen spanje',
    dienst: 'renovatie',
    onderwerp: 'Ik wil mijn ramen laten vervangen.',
    answer: 'De meeste eigenaren in de Axarquía kiezen <strong>aluminium met thermische onderbreking</strong> (<em>RPT</em>) of <strong>PVC</strong>, met <strong>dubbel glas</strong> en zonwerend glas aan de zuid- en westkant. U laat ze op maat maken door een lokale <em>carpintería</em> en kunt ze zelf plaatsen als de opening gelijk blijft.',
    sections: [
      {
        id: 'materiaal',
        h: 'Aluminium, PVC of hout?',
        table: {
          head: ['Materiaal', 'Voordelen', 'Nadelen'],
          rows: [
            ['Aluminium met thermische onderbreking (RPT)', 'Sterk, slank profiel, bestand tegen zon en zeelucht, veel kleuren', 'Iets minder isolerend dan PVC'],
            ['PVC', 'Isoleert het best, goedkoper', 'Donkere kleuren kunnen in felle zon vervormen; dikker profiel'],
            ['Hout', 'Mooi en passend bij oude huizen', 'Veel onderhoud in zon en regen; duurder'],
          ],
        },
      },
      {
        id: 'glas',
        h: 'Glas, openen en extra’s',
        html: `<ul>
<li><strong>Dubbel glas</strong> (<em>doble acristalamiento</em>, in Spanje vaak <em>Climalit</em> genoemd) is de standaard. Aan de zuid- en westkant kiest u zonwerend glas (<em>control solar</em>), aan de noordkant isolerend glas (<em>bajo emisivo</em>).</li>
<li><strong>Veiligheidsglas</strong> (<em>laminado</em>) op de begane grond en bij deuren tot de vloer.</li>
<li><strong>Draai-kiep</strong> (<em>oscilobatiente</em>) sluit het best en isoleert het best. <strong>Schuiframen</strong> (<em>correderas</em>) nemen geen ruimte in, maar laten meer tocht en stof door.</li>
<li><strong>Extra’s</strong>: rolluiken (<em>persianas</em>), luiken (<em>contraventanas</em> of <em>mallorquinas</em>), horren (<em>mosquiteras</em>) en tralies (<em>rejas</em>) voor huizen die lang leegstaan.</li>
</ul>`,
      },
      {
        id: 'meten',
        h: 'Zo meet u op',
        html: `<ol>
<li>Meet de breedte van de opening op drie hoogtes en de hoogte op drie plekken.</li>
<li>Neem steeds de kleinste maat en trek er ongeveer 1 cm af voor de speling rondom.</li>
<li>Kijk of de opening haaks is door de diagonalen te meten. Een verschil van meer dan een centimeter vangt u op met de afwerking.</li>
<li>Noteer de draairichting, waar de rolluikkast komt en of u een vensterbank nodig heeft.</li>
</ol>
<p>Twijfelt u, laat de carpintería dan zelf meten. Dat kost weinig of niets en dan ligt de verantwoordelijkheid voor de maat bij hen.</p>`,
      },
      {
        id: 'plaatsen',
        h: 'Stap voor stap plaatsen',
        html: `<ol>
<li>Haal de oude vleugels eruit. Het oude kozijn haalt u eruit, of u laat het zitten en plaatst er een renovatiekozijn over. Dat scheelt hak- en stucwerk, maar het glas wordt iets kleiner.</li>
<li>Maak de opening schoon en vlak.</li>
<li>Zet het nieuwe kozijn op stelwiggen, waterpas en haaks.</li>
<li>Bevestig het met kozijnschroeven of ankers in de muur, zonder het kozijn krom te trekken.</li>
<li>Vul de naad rondom met PU-schuim en snijd het na het uitharden af.</li>
<li>Kit de buitenkant af met een weerbestendige kit (MS-polymeer) en werk de binnenkant af met een lat of stucwerk.</li>
<li>Hang de vleugels terug en stel het hang- en sluitwerk af.</li>
</ol>`,
      },
      {
        id: 'kopen',
        h: 'Waar koopt u ramen?',
        html: '<p>Ramen op maat koopt u bij een lokale aluminium- of PVC-werkplaats (<em>carpintería de aluminio</em> of <em>de PVC</em>). Die zitten in Vélez-Málaga, Torre del Mar, Nerja en in veel dorpen. Vraag twee of drie offertes en vraag naar het merk en de serie van het profiel en het soort glas, zodat u kunt vergelijken. Ramen in standaardmaten vindt u bij de bouwmarkten in Málaga, maar oude Spaanse huizen hebben zelden standaardmaten.</p>',
      },
      {
        id: 'vergunning',
        h: 'Vergunning',
        html: '<p>Ramen vervangen in dezelfde opening valt meestal onder kleine werken, met een melding (<em>declaración responsable</em>) bij de gemeente. In de historische kern van veel witte dorpen gelden regels voor kleur, model en materiaal, bijvoorbeeld hout of houtkleur. Vraag dit na vóór u bestelt. Maakt u een opening groter of zet u een nieuw raam in een muur, dan is dat een ingreep in de constructie en heeft u een vakman en een vergunning nodig.</p>',
      },
    ],
    faq: [
      { q: 'Hoelang duurt het voordat ramen op maat klaar zijn?', a: 'Meestal twee tot vier weken na het opmeten. In het voorjaar, als veel mensen hun huis klaarmaken voor de zomer, kan het langer duren.' },
      { q: 'Lossen nieuwe ramen vocht en schimmel op?', a: 'Ze verminderen tocht en koude plekken, maar een goed afgesloten huis heeft wel meer ventilatie nodig. Zonder ventilatie kan condens juist toenemen. Lees meer over vocht en schimmel.' },
      { q: 'Kan ik zelf ramen plaatsen als ik geen ervaring heb?', a: 'Een raam in een bestaande opening vervangen is goed te doen voor wie handig is. Een grote schuifpui of ramen op hoogte plaatst u beter met twee vakmensen: ze zijn zwaar en moeten precies passen.' },
    ],
    links: [
      { href: '/nl/renovatie/', label: 'Renovatie en verbouwing' },
      { href: '/nl/problemen/vocht-en-schimmel/', label: 'Vocht en schimmel in huis' },
      { href: '/nl/onderhoud/', label: 'Onderhoud en reparaties' },
    ],
    related: ['diy:kachel', 'problems:vocht', 'costs:airco'],
    sources: [
      { name: 'Código Técnico de la Edificación (CTE), DB HE energiebesparing', url: 'https://www.codigotecnico.org/' },
    ],
    ctaTitle: 'Ramen liever laten plaatsen?',
    ctaText: 'Wilt u nieuwe ramen laten plaatsen? Wij regelen het voor u, van opmeten tot montage.',
    minutes: 7,
    published: '2026-11-05',
  },
  {
    key: 'kachel',
    slug: 'houtkachel-en-schoorsteen-plaatsen',
    title: 'Een houtkachel en schoorsteen plaatsen in Spanje: zo doet u het zelf',
    seoTitle: 'Houtkachel plaatsen in Spanje: kachel en rookkanaal',
    short: 'Houtkachel plaatsen',
    description: 'Een hout- of pelletkachel in de Axarquía? Welke kachel u kiest, hoe u rookkanaal en dakdoorvoer plaatst, waar u hout koopt en wat u moet regelen.',
    lead: 'Winteravonden in de bergen van de Axarquía zijn kouder dan veel mensen denken, en de meeste oude huizen hebben geen verwarming. Een goede kachel maakt het verschil.',
    keyword: 'houtkachel plaatsen spanje',
    dienst: 'renovatie',
    onderwerp: 'Ik wil een houtkachel of pelletkachel laten plaatsen.',
    answer: 'Een <strong>houtkachel</strong> of <strong>inzethaard</strong> plaatst u zelf als u een <strong>dubbelwandig geïsoleerd rookkanaal</strong> gebruikt, de afstanden van de fabrikant aanhoudt en de dakdoorvoer goed waterdicht maakt. Bewaar de facturen en laat de installatie controleren: uw verzekeraar kan erom vragen.',
    sections: [
      {
        id: 'kiezen',
        h: 'Welke kachel kiest u?',
        table: {
          head: ['Type', 'Geschikt voor'],
          rows: [
            ['Houtkachel (<em>estufa de leña</em>)', 'Woonkamer, huis zonder vaste stroom, de sfeer van vuur'],
            ['Inzethaard (<em>insert</em> of <em>cassette</em>)', 'Een bestaande open haard die vooral warmte naar buiten stookt'],
            ['Pelletkachel (<em>estufa de pellets</em>)', 'Wie gemak wil: thermostaat, timer, op afstand aan te zetten'],
          ],
        },
        after: '<p>Een open haard verwarmt vooral de schoorsteen: tot 80% van de warmte gaat verloren. Een inzethaard in dezelfde haard geeft drie tot vier keer meer warmte met hetzelfde hout.</p>',
      },
      {
        id: 'kanaal',
        h: 'Het rookkanaal',
        html: `<ul>
<li>Gebruik binnen in de ruimte enkelwandige pijp, en <strong>dubbelwandig geïsoleerd RVS</strong> (<em>tubo de doble pared</em>) vanaf het plafond, door het dak en buiten.</li>
<li>Houd de afstand tot hout, balken en riet (<em>cañizo</em>) aan die de fabrikant voorschrijft. Bij het plafond en dak gebruikt u een doorvoerplaat.</li>
<li>Laat het kanaal minstens een meter boven het dak uitsteken, en boven de nok uit als het er dichtbij staat. Te kort is de belangrijkste oorzaak van een kachel die slecht trekt.</li>
<li>Gebruik zo min mogelijk bochten en nooit meer dan twee.</li>
<li>Gebruikt u een bestaande schoorsteen, laat die dan eerst vegen en controleren. Vaak is een RVS-binnenpijp nodig.</li>
</ul>`,
      },
      {
        id: 'stappen',
        h: 'Stap voor stap',
        html: `<ol>
<li>Kies de plek: midden in het huis verdeelt de warmte het best, en het kanaal moet recht omhoog kunnen.</li>
<li>Leg een onbrandbare vloerplaat van steen, tegel of staal onder en voor de kachel.</li>
<li>Maak het gat in plafond en dak, met de afstand tot hout die het voorschrift noemt.</li>
<li>Plaats het kanaal van onder naar boven, met de verbindingen zo dat condens naar binnen loopt.</li>
<li>Maak de dakdoorvoer waterdicht met een loodslab of een flexibele doorvoer en kit, en leg de pannen er netjes omheen.</li>
<li>Zorg voor luchttoevoer in de ruimte, zeker in een huis met nieuwe ramen.</li>
<li>Hang een koolmonoxidemelder op en stook de kachel de eerste keer rustig in.</li>
</ol>`,
      },
      {
        id: 'hout',
        h: 'Waar koopt u kachel en hout?',
        html: '<p>Kachels en rookkanaal vindt u bij de bouwmarkten in Málaga en bij kachelwinkels in de regio, die ook het kanaal op maat leveren. Hout koopt u bij lokale houthandels (<em>venta de leña</em>): olijf- en amandelhout branden lang en heet. Koop het in het voorjaar, dan is het in de winter droog. Pellets koopt u per zak of per pallet bij bouwmarkten, landbouwcoöperaties en sommige tankstations.</p>',
      },
      {
        id: 'regels',
        h: 'Vergunning, verzekering en onderhoud',
        html: `<ul>
<li>Een kachel met een kanaal door het dak valt in de meeste gemeentes onder kleine werken, met een melding (<em>declaración responsable</em>). In een appartement heeft u ook toestemming van de vereniging van eigenaren (<em>comunidad</em>) nodig voor het kanaal over de gevel of door het dak.</li>
<li>Meld de kachel bij uw verzekeraar. Bij brand vraagt die vaak naar facturen en naar wie de installatie heeft geplaatst.</li>
<li>Laat het kanaal elk jaar vegen, vóór het stookseizoen.</li>
</ul>`,
      },
    ],
    faq: [
      { q: 'Is een houtkachel genoeg om mijn huis te verwarmen?', a: 'Voor de woonkamer en de ruimtes eromheen wel. Een huis met meerdere verdiepingen of losse kamers krijgt u er niet helemaal mee warm. Veel eigenaren combineren een kachel met airco met warmtepomp voor de slaapkamers.' },
      { q: 'Mag ik in de zomer de kachel stoken?', a: 'Binnen wel, maar buiten vuur maken en snoeihout verbranden is in Andalusië van juni tot half oktober verboden in en bij het bos. De kachel zelf valt daar niet onder, maar let op vonken uit de schoorsteen bij droog weer.' },
      { q: 'Waarom rookt mijn kachel terug?', a: 'Meestal is het kanaal te kort, heeft het te veel bochten of komt er te weinig lucht in de ruimte. Ook nat hout en een vuil kanaal geven rook. Begin met droog hout en een raam op een kier.' },
    ],
    links: [
      { href: '/nl/renovatie/', label: 'Renovatie en verbouwing' },
      { href: '/nl/kosten/airco-en-warmtepomp/', label: 'Wat kost airco of een warmtepomp?' },
      { href: '/nl/onderhoud/', label: 'Onderhoud en reparaties' },
    ],
    related: ['diy:ramen', 'diy:dak', 'costs:airco'],
    sources: [
      { name: 'Código Técnico de la Edificación (CTE), DB HS 3 luchtkwaliteit', url: 'https://www.codigotecnico.org/' },
      { name: 'Junta de Andalucía, Plan INFOCA: brandpreventie en verboden periode', url: 'https://www.juntadeandalucia.es/medioambiente/portal/areas-tematicas/incendios-forestales' },
    ],
    ctaTitle: 'Kachel liever laten plaatsen?',
    ctaText: 'Wilt u een kachel laten plaatsen? Wij zorgen voor kachel, rookkanaal en een veilige installatie.',
    minutes: 6,
    published: '2026-11-05',
  },
  {
    key: 'witten',
    slug: 'gevel-witten-met-kalk',
    title: 'Uw huis witten met kalk: zo doen ze het in Andalusië',
    seoTitle: 'Gevel witten met kalk in Spanje: materiaal en stappen',
    short: 'Witten met kalk',
    description: 'Uw gevel witten zoals in de witte dorpen? Kalk of gevelverf, hoe u het aanbrengt, wat de gemeente voorschrijft en hoe u vocht voorkomt.',
    lead: 'De witte dorpen danken hun kleur aan kalk. Witten (<em>encalar</em>) is een van de makkelijkste klussen om zelf te doen, en het houdt oude muren gezond.',
    keyword: 'gevel witten kalk',
    dienst: 'onderhoud',
    onderwerp: 'Ik wil mijn gevel laten witten of schilderen.',
    answer: 'Voor oude muren van steen en kalkmortel kiest u <strong>kalk</strong> (<em>cal</em>): die ademt, zodat vocht eruit kan. Gevelverf sluit vocht op en bladdert dan af. U brengt drie of vier <strong>dunne lagen</strong> aan op een vochtige muur, niet in de volle zon. Kalk is bovendien het goedkoopst.',
    sections: [
      {
        id: 'kiezen',
        h: 'Kalk of gevelverf?',
        table: {
          head: ['', 'Kalk (<em>cal</em>)', 'Gevelverf (<em>pintura plástica</em> of <em>elástica</em>)'],
          rows: [
            ['Geschikt voor', 'Oude muren van steen, leem en kalkmortel', 'Nieuwe muren van baksteen en cement'],
            ['Vocht', 'Ademt: vocht kan eruit', 'Sluit af: vocht blijft achter de verf'],
            ['Duurzaamheid', 'Elke één tot drie jaar een nieuwe laag', 'Vijf tot tien jaar'],
          ],
        },
        after: '<p>Zit er al gevelverf op een oude muur en bladdert die af, haal hem dan zo veel mogelijk weg voordat u gaat witten. Kalk hecht niet goed op verf.</p>',
      },
      {
        id: 'stappen',
        h: 'Stap voor stap',
        html: `<ol>
<li>Borstel losse kalk, vuil en mos van de muur met een staalborstel.</li>
<li>Herstel scheuren en gaten met kalkmortel, niet met cement.</li>
<li>Maak de muur nat met een plantenspuit of tuinslang. Op een droge muur droogt de kalk te snel en krijgt u vegen en scheurtjes.</li>
<li>Roer de kalkpasta (<em>cal en pasta</em>) aan met water tot hij zo dun is als volle melk.</li>
<li>Breng een dunne laag aan met een brede kwast (<em>brocha</em>) of een roller, kruiselings.</li>
<li>Laat elke laag een dag drogen en maak de muur opnieuw vochtig voor de volgende laag. Na drie of vier lagen is de muur egaal wit.</li>
</ol>
<p>Werk in het voorjaar of najaar, of in de schaduw in de vroege ochtend. In de volle zon en bij harde wind droogt kalk te snel en poedert hij af.</p>`,
      },
      {
        id: 'veilig',
        h: 'Veilig werken met kalk',
        html: '<p>Kalk is bijtend. Draag een veiligheidsbril, handschoenen en lange mouwen, en spoel spatten op de huid of in de ogen direct met veel water. Dek ramen, deuren en planten af. Gebruik gebluste kalk (<em>cal apagada</em>) en geen ongebluste kalk (<em>cal viva</em>): die wordt heet als u er water bij doet.</p>',
      },
      {
        id: 'kopen',
        h: 'Waar koopt u kalk?',
        html: '<p>Kalkpasta en kalkpoeder vindt u bij elke bouwmateriaalhandel (<em>almacén de materiales</em>) en ijzerwarenwinkel (<em>ferretería</em>) in de Axarquía, en bij de bouwmarkten in Málaga. Kwasten en verlengstelen koopt u er ook. Voor gevels aan zee bestaat er kalk met toevoegingen die beter tegen zout en regen kan.</p>',
      },
      {
        id: 'regels',
        h: 'Wat schrijft de gemeente voor?',
        html: '<p>In veel dorpen in de Axarquía is wit verplicht, en soms ook de kleur van deuren, ramen en randen. Een gevel witten in dezelfde kleur valt meestal onder kleine werken. Zet u een steiger, ladder of container op straat, dan heeft u een vergunning voor het gebruik van de openbare weg nodig. Vraag beide na bij het ayuntamiento.</p>',
      },
      {
        id: 'vakman',
        h: 'Wanneer beter een vakman?',
        html: `<ul>
<li>De muur heeft vochtplekken die na het witten steeds terugkomen: zoek eerst de oorzaak, zie <a href="/nl/problemen/vocht-en-schimmel/">vocht en schimmel</a>.</li>
<li>Er lopen scheuren door de muur die breder worden: zie <a href="/nl/problemen/scheuren-in-muren/">scheuren in muren</a>.</li>
<li>De gevel is hoog en u heeft een steiger nodig.</li>
</ul>`,
      },
    ],
    faq: [
      { q: 'Kan ik kalk ook binnen gebruiken?', a: 'Ja. Kalk binnen gaat schimmel tegen en past goed bij oude muren. Op muren die eerder met latexverf zijn geschilderd hecht hij wel slecht.' },
      { q: 'Hoe vaak moet ik witten?', a: 'Een gevel in de zon en regen elke één tot drie jaar. Veel eigenaren in de dorpen witten elk voorjaar, voor de zomer en de fiestas.' },
      { q: 'Mag ik mijn huis een andere kleur geven?', a: 'In de historische kernen meestal niet. Daarbuiten is er vaak meer vrijheid, maar ook dan heeft de gemeente soms regels. Vraag het na voordat u begint.' },
    ],
    links: [
      { href: '/nl/problemen/vocht-en-schimmel/', label: 'Vocht en schimmel in huis' },
      { href: '/nl/problemen/scheuren-in-muren/', label: 'Scheuren in muren' },
      { href: '/nl/onderhoud/', label: 'Onderhoud en reparaties' },
    ],
    related: ['problems:vocht', 'problems:scheuren', 'diy:dak'],
    sources: [
      { name: 'Código Técnico de la Edificación (CTE), DB HS 1 bescherming tegen vocht', url: 'https://www.codigotecnico.org/' },
    ],
    ctaTitle: 'Gevel liever laten witten?',
    ctaText: 'Wilt u de gevel laten herstellen en witten? Wij doen het voor u, ook als hij hoog is.',
    minutes: 5,
    published: '2026-11-05',
  },
  {
    key: 'watertank',
    slug: 'watertank-plaatsen-en-aansluiten',
    title: 'Een watertank plaatsen en aansluiten op uw finca',
    seoTitle: 'Watertank plaatsen in Spanje: aansluiten en drinkwater',
    short: 'Watertank plaatsen',
    description: 'Een watertank (depósito of aljibe) bij uw finca? Waar uw water vandaan komt, waar u op let bij een watercontract en hoe u de tank plaatst en aansluit.',
    lead: 'Veel huizen buiten de dorpen in de Axarquía hangen niet aan het waterleidingnet. Ze krijgen water van een comunidad de regantes of een tankwagen, of hebben een eigen put. Een eigen watertank is dan het hart van het huis.',
    keyword: 'watertank finca spanje',
    dienst: 'onderhoud',
    onderwerp: 'Ik wil een watertank laten plaatsen en aansluiten.',
    answer: 'Een <strong>watertank</strong> (<em>depósito</em> of <em>aljibe</em>) vangt het water op dat u krijgt, en een <strong>drukpomp</strong> brengt het naar de kranen. Buiten het dorp sluit u vaak een <strong>contract voor een vaste hoeveelheid water per week</strong> af, bijvoorbeeld bij de comunidad de regantes. Met een <strong>vlotterkraan</strong> stopt de toevoer als de tank vol is. Heeft u een <strong>eigen put</strong>, dan is zo’n contract niet nodig. Water dat niet uit het net komt, maakt u met <strong>filters en een uv-lamp</strong> geschikt om te drinken.',
    sections: [
      {
        id: 'bronnen',
        h: 'Waar komt uw water vandaan?',
        table: {
          head: ['Bron', 'Hoe het werkt', 'Let op'],
          rows: [
            ['Waterleidingnet van de gemeente', 'Aansluiting met meter; de tank is dan alleen een reserve', 'Alleen in en rond de dorpen en in woonwijken'],
            ['Comunidad de regantes (irrigatiewater)', 'U sluit een contract af voor een hoeveelheid per week; het water komt op vaste momenten (<em>turno</em>) via een meter in uw tank', 'Bedoeld voor de landbouw, geen drinkwater; in droge jaren kan de hoeveelheid omlaag'],
            ['Tankwagen (<em>camión cisterna</em>)', 'U bestelt een vracht water als de tank leeg raakt', 'De wagen moet tot bij de tank kunnen komen'],
            ['Eigen put of bron (<em>pozo</em>)', 'Een pomp haalt het water op en vult de tank', 'Geen contract nodig, wel een registratie of vergunning; laat het water testen'],
            ['Regenwater', 'Opvang van het dak in een oude of nieuwe <em>aljibe</em>', 'Mooi als aanvulling, in de zomer niet genoeg'],
          ],
        },
      },
      {
        id: 'contract',
        h: 'Waar let u op bij een watercontract?',
        html: `<p>Hoe het precies gaat, verschilt per comunidad en per gebied. Soms is het veel water, soms weinig. Zorg dat u vooraf helderheid heeft over deze punten:</p>
<ul>
<li><strong>Hoeveel water</strong> u per week krijgt, en of u later meer kunt afnemen. Reken voor een huishouden op 100 tot 150 liter per persoon per dag, plus de tuin en een eventueel zwembad.</li>
<li><strong>Wanneer</strong> het water komt: een vaste dag en tijd (<em>turno</em>), of doorlopend.</li>
<li><strong>Wat er gebeurt bij droogte</strong>: in 2023 en 2024 kregen veel gebruikers in de Axarquía minder water. Vraag hoe dat geregeld is.</li>
<li><strong>Wie de leiding onderhoudt</strong> tot aan uw tank, en waar de meter (<em>contador</em>) staat.</li>
<li><strong>Bij aankoop van een finca</strong>: staat het recht op water op het perceel, en wordt het op uw naam gezet? Vraag het na bij de comunidad en uw advocaat. Lees ook de gids <a href="/nl/gidsen/finca-kopen-in-spanje/">finca kopen in Spanje</a>.</li>
</ul>`,
      },
      {
        id: 'stop',
        h: 'Een stop op de tank',
        html: `<p>Zonder stop loopt de tank bij elke levering over, of blijft er water lopen dat u wel betaalt. Daarom zet u er een stop op:</p>
<ul>
<li>Een <strong>vlotterkraan</strong> (<em>válvula de boya</em> of <em>flotador</em>) sluit de toevoer zodra de tank vol is.</li>
<li>Een <strong>afsluiter</strong> op de toevoer, zodat u de tank kunt afsluiten als u weg bent of als u hem schoonmaakt.</li>
<li>Een <strong>overloop</strong> met afvoer weg van het huis, voor als de vlotter ooit blijft hangen.</li>
</ul>`,
      },
      {
        id: 'kiezen',
        h: 'Welke tank kiest u?',
        table: {
          head: ['Type', 'Geschikt voor', 'Let op'],
          rows: [
            ['Kunststof tank (polyethyleen), bovengronds', 'Snel te plaatsen, ook op moeilijk bereikbare plekken', 'Kies een donkere, ondoorzichtige tank tegen algen, geschikt voor drinkwater (<em>apto uso alimentario</em>)'],
            ['Kunststof tank, ingegraven', 'Uit het zicht, water blijft koel', 'Graafwerk; de tank moet geschikt zijn om in te graven'],
            ['Gemetselde of betonnen <em>aljibe</em>', 'Grote voorraad, traditioneel op fincas', 'Vaak al aanwezig; laat een oude aljibe controleren en opnieuw waterdicht maken'],
          ],
        },
        after: '<p>Kies de maat op uw verbruik tussen twee leveringen, plus een reserve voor een week zonder water. Voor een stel zonder zwembad volstaat vaak een paar duizend liter; met tuin, gasten of verhuur heeft u al snel tien- tot twintigduizend liter nodig.</p>',
      },
      {
        id: 'stappen',
        h: 'Plaatsen en aansluiten, stap voor stap',
        html: `<ol>
<li><strong>Plek kiezen.</strong> Hoger dan het huis geeft vanzelf wat druk; lager kan ook, met een drukpomp. Zorg dat de leverancier of de tankwagen er kan komen.</li>
<li><strong>Ondergrond.</strong> Een vlakke, gewapende betonplaat. Elke 1.000 liter weegt 1.000 kilo.</li>
<li><strong>Toevoer.</strong> Sluit de leiding van de meter aan op de tank, met afsluiter en vlotterkraan.</li>
<li><strong>Overloop en ontluchting.</strong> Een overloop met afvoer en een ontluchting met een hor tegen insecten.</li>
<li><strong>Uitgang.</strong> Een afsluiter, een terugslagklep en een zuigleiding naar de pomp.</li>
<li><strong>Drukpomp.</strong> Een pomp met drukvat of een pomp met frequentieregeling, in een droog en schaduwrijk hokje. De stroom laat u aansluiten door een erkend installateur.</li>
<li><strong>Filters.</strong> Een sedimentfilter vóór het huis, en voor drinkwater een koolfilter en een uv-lamp.</li>
<li><strong>Leidingen.</strong> Graaf ze in of scherm ze af tegen zon; kunststof leidingen in de zon worden bros en het water wordt warm.</li>
</ol>`,
      },
      {
        id: 'drinkwater',
        h: 'Drinkwater uit de tank',
        html: '<p>Water van een comunidad de regantes, een put of regen is geen drinkwater zolang het niet is gefilterd. Welke filters u nodig heeft, hangt af van de bron; meestal is dat een sedimentfilter, een koolfilter en een uv-lamp. Laat het water af en toe testen. Maak de tank elk jaar schoon en houd hem dicht en donker: stilstaand, warm water geeft kans op <a href="/nl/problemen/legionella/">legionella</a>.</p>',
      },
      {
        id: 'vergunning',
        h: 'Vergunning',
        html: '<p>Een kunststof tank plaatsen valt meestal onder kleine werken, met een melding (<em>declaración responsable</em>) bij de gemeente. Een grote gemetselde of betonnen aljibe kan een bouwvergunning nodig hebben, zeker op landelijke grond. Een eigen put boren of in gebruik nemen moet u melden of laten vergunnen bij de waterautoriteit van de Junta de Andalucía. Vraag het na voordat u begint.</p>',
      },
    ],
    faq: [
      { q: 'Hoeveel water heb ik per week nodig?', a: 'Reken op 100 tot 150 liter per persoon per dag in huis, dus voor twee personen ongeveer 1.500 tot 2.000 liter per week. Een tuin, gasten of een zwembad kunnen dat verveelvoudigen, vooral in de zomer.' },
      { q: 'Kan ik het water van de regantes drinken?', a: 'Niet zonder meer. Het is bedoeld voor de landbouw en wordt niet gecontroleerd als drinkwater. Met filters en een uv-lamp kunt u het geschikt maken, en laat het af en toe testen.' },
      { q: 'Heb ik een contract nodig als ik een eigen put heb?', a: 'Nee, dan komt het water uit uw eigen bron. Veel eigenaren nemen wel een tank als buffer, zodat de pomp niet steeds aanslaat en u een voorraad heeft als de put in de zomer minder geeft.' },
    ],
    links: [
      { href: '/nl/gidsen/waterfilter-spanje/', label: 'Gids: waterfilters voor tank en put' },
      { href: '/nl/gidsen/waterlekkage-spanje/', label: 'Gids: waterlekkage' },
      { href: '/nl/gidsen/finca-kopen-in-spanje/', label: 'Gids: finca kopen in Spanje' },
      { href: '/nl/problemen/legionella/', label: 'Legionella in tank en leidingen' },
      { href: '/nl/sleutelbeheer/', label: 'Sleutelbeheer: tank en pomp in de gaten houden als u weg bent' },
    ],
    related: ['costs:water', 'problems:legionella', 'diy:zwembad'],
    sources: [
      { name: 'Real Decreto Legislativo 1/2001, Ley de Aguas (o.a. eigen putten)', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2001-14276' },
      { name: 'Real Decreto 3/2023 over de kwaliteit van drinkwater', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2023-628' },
    ],
    ctaTitle: 'Watertank laten plaatsen?',
    ctaText: 'Wij plaatsen en sluiten de tank voor u aan, met vlotter, pomp en filters, en denken mee over de wateraansluiting.',
    minutes: 7,
    published: '2026-11-05',
  },
];
