import type { Topic } from './types';

// Gör det själv-guider på svenska: hur du tar dig an ett jobb, vad du väljer,
// var du köper material, vilket tillstånd du behöver och när en fackman är bättre.
export const diySv: Topic[] = [
  {
    key: 'zwembad',
    slug: 'bygga-pool-sjalv',
    title: 'Bygga pool själv i Spanien: alla steg',
    seoTitle: 'Bygga pool själv i Spanien: steg, material och bygglov',
    short: 'Bygga pool själv',
    description: 'Bygga pool själv i Axarquía? Stegen från bygglov till fyllning, vilken pooltyp du kan bygga själv och var du köper material.',
    lead: 'En pool är nästan varje husägares dröm i Axarquía, och en stor del av arbetet kan du göra själv. Men den som underskattar bygglovet eller schaktningen betalar dubbelt senare.',
    keyword: 'bygga pool själv',
    dienst: 'zwembad',
    onderwerp: 'Jag vill bygga en pool och söker hjälp med (en del av) arbetet.',
    answer: 'En <strong>ovanmarkspool</strong> ställer du upp helt själv. En nedgrävd pool av <strong>formblock med liner</strong> eller en <strong>färdig glasfiberpool</strong> kan du till stor del bygga själv om du lämnar bort schaktning, el och eventuellt kranen. För varje nedgrävd pool behöver du i Andalusien ett <strong>bygglov med projekt</strong>.',
    sections: [
      {
        id: 'tillatet',
        h: 'Först: får det byggas en pool här?',
        html: `<p>Börja inte gräva innan du vet det. En nedgrävd pool är i Andalusien en <em>obra mayor</em>: du ansöker om bygglov (<em>licencia de obra</em>) hos kommunen med ett projekt från en arkitekt eller byggnadsingenjör. Tänk på tre saker:</p>
<ul>
<li><strong>Typ av mark.</strong> På landsbygdsmark (<em>suelo rústico</em>) gäller strängare regler än i ett bostadsområde. Fråga kommunen (Ayuntamiento) vad som är tillåtet på din tomt.</li>
<li><strong>Husets status.</strong> Har huset AFO-status eller inget fullständigt bygglov får du ofta inte bygga till något. Läs först vår guide om <a href="/sv/guider/afo-andalusien/">AFO och legalisering</a>.</li>
<li><strong>Vatten.</strong> En pool på 8 × 4 meter rymmer 40 till 50 m³ vatten. Under torra år har kommuner i Axarquía begränsat eller förbjudit poolfyllning. Fråga innan du bygger och räkna med en tankbil (<em>camión cisterna</em>) för den första fyllningen.</li>
</ul>
<p>Hur det fungerar i din kommun läser du till exempel under <a href="/sv/orter/competa/bygglov/">bygglov i Cómpeta</a> eller <a href="/sv/orter/nerja/bygglov/">i Nerja</a>.</p>`,
      },
      {
        id: 'val',
        h: 'Vilken pool kan du bygga själv?',
        table: {
          head: ['Typ', 'Går att göra själv?'],
          rows: [
            ['Ovanmarkspool av stål eller harts på en betongplatta', 'Helt'],
            ['Byggsats av formblock (<em>bloques de encofrado</em>) med liner', 'Till största delen, lämna bort schaktning och el'],
            ['Formblock med gresite-mosaik', 'Ja, med erfarenhet av murning och kakling'],
            ['Färdig glasfiberpool', 'Delvis: schaktning och lyft med kran'],
            ['Sprutbetong (gunite)', 'Nej, det kräver ett specialföretag'],
          ],
        },
        after: '<p>På en finca med en smal bergsväg är en glasfiberpool ofta inget alternativ: lastbil och kran kommer inte fram. En pool av block kan du bygga överallt, eftersom allt levereras i små delar.</p>',
      },
      {
        id: 'steg',
        h: 'Steg för steg',
        html: `<ol>
<li><strong>Plats och ritning.</strong> Välj en plats med eftermiddagssol, i lä och med åtkomst för en minigrävare. Håll avstånd till tomtgränsen; hur mycket bestämmer kommunen.</li>
<li><strong>Bygglov.</strong> Låt rita projektet och ansök om lovet. Räkna med några veckor till några månader.</li>
<li><strong>Märk ut och schakta.</strong> Hyr en minigrävare med förare eller gör det själv om du har erfarenhet. Bestäm i förväg vart jorden ska; bortforsling kostar. Stöter du på berg behöver du en bilningshammare.</li>
<li><strong>Botten.</strong> Ett lager grus och på det en armerad betongplatta med fall mot bottenbrunnen.</li>
<li><strong>Väggar.</strong> Sätt formblocken med armering och fyll dem med betong. Kontrollera varje skift med vattenpass.</li>
<li><strong>Rör.</strong> Skimmer, bottenbrunn, inloppsmunstycken och rören till teknikrummet. Gör ett tryckprov innan du fyller igen.</li>
<li><strong>Yta.</strong> En liner, eller puts med gresite-mosaik.</li>
<li><strong>Teknik.</strong> Pump, sandfilter (eller glasfilter) och eventuellt saltklorinator. El ansluts av en behörig installatör (<em>instalador autorizado</em>), som också utfärdar intyget.</li>
<li><strong>Kant och terrass.</strong> Lägg kantstenarna (<em>coronación</em>), fyll igen runt om och anlägg terrassen.</li>
<li><strong>Fyll och ställ in.</strong> Fyll poolen, starta filtret och få pH och klor eller salt i balans.</li>
</ol>`,
      },
      {
        id: 'kopa',
        h: 'Var köper du materialet?',
        html: `<ul>
<li><strong>Byggsatser och ovanmarkspooler</strong>: i de stora byggvaruhusen i Málaga och hos nätbutiker i Spanien, som också levererar uppför en bergsväg om du säger det i förväg.</li>
<li><strong>Block, betong, armering och grus</strong>: hos bygghandeln (<em>almacén de materiales de construcción</em>) i Vélez-Málaga, Torre del Mar eller Nerja. De levererar med små lastbilar, även upp till byarna.</li>
<li><strong>Pump, filter, liner och kemikalier</strong>: i poolbutiken (<em>tienda de piscinas</em>), som också ger råd om pumpens storlek.</li>
<li><strong>Minigrävare eller betongblandare</strong>: hos maskinuthyrningen (<em>alquiler de maquinaria</em>).</li>
</ul>`,
      },
      {
        id: 'fackman',
        h: 'När är en fackman bättre?',
        html: `<ul>
<li>Poolen ligger i en sluttning och behöver en stödmur.</li>
<li>Marken är berg eller platsen är svår att nå.</li>
<li>Du vill ha sprutbetong, en överströmningsränna eller en speciell form.</li>
<li>El och intyg: det får bara en behörig installatör göra.</li>
<li>Du är inte själv i Spanien för att följa arbetet.</li>
</ul>
<p>Många ägare väljer en mellanväg: fackmannen gör schaktning, råbygge och teknik, och du gör terrassen och finishen själv.</p>`,
      },
    ],
    faq: [
      { q: 'Behöver jag tillstånd för en ovanmarkspool?', a: 'En ovanmarkspool som du kan montera ner igen behöver i de flesta kommuner inget bygglov. En nedgrävd eller halvt nedgrävd pool eller en permanent betongplatta behöver det oftast. Fråga kommunen.' },
      { q: 'Kan jag göra en del själv och låta göra resten?', a: 'Ja, det gör många ägare. Vi tar till exempel schaktning, råbygge och teknik, och du lägger terrassen och gör finishen själv. Berätta vad du vill göra själv, så planerar vi resten runt det.' },
      { q: 'Hur lång tid tar det att bygga en pool själv?', a: 'Utöver bygglovet räknar du med fyra till tio helger eller två till fyra veckor på heltid, beroende på erfarenhet och mark.' },
    ],
    links: [
      { href: '/sv/pool/', label: 'Poolbygge och poolskötsel' },
      { href: '/sv/kostnader/bygga-pool/', label: 'Vad kostar det att låta bygga en pool?' },
      { href: '/sv/guider/afo-andalusien/', label: 'Guide: AFO och legalisering' },
      { href: '/sv/problem/legionella/', label: 'Legionella i pool och ledningar' },
    ],
    related: ['costs:zwembad', 'diy:dak', 'problems:legionella'],
    sources: [
      { name: 'Junta de Andalucía, Ley 7/2021 de impulso para la sostenibilidad del territorio (LISTA)', url: 'https://www.juntadeandalucia.es/boja/2021/233/1' },
      { name: 'Código Técnico de la Edificación (CTE)', url: 'https://www.codigotecnico.org/' },
      { name: 'Reglamento electrotécnico para baja tensión (REBT)', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2002-18099' },
    ],
    ctaTitle: 'Hellre låta göra (en del)?',
    ctaText: 'Vill du låta bygga poolen, helt eller delvis? Vi hjälper dig att genomföra den, från bygglov till första doppet.',
    minutes: 7,
    published: '2026-11-21',
  },
  {
    key: 'dak',
    slug: 'laga-taket-sjalv',
    title: 'Laga eller byta tak i Spanien: det här kan du göra själv',
    seoTitle: 'Laga taket själv i Spanien: takpannor och takterrass',
    short: 'Laga taket själv',
    description: 'Byta takpannor, täta takterrassen eller lägga om taket? Vad du kan göra själv, vilket material som passar och när det behövs en fackman.',
    lead: 'De flesta läckande tak i Axarquía börjar smått: en takpanna som glidit, en igensatt brunn eller ett sprucket skikt på takterrassen. Mycket av det åtgärdar du själv, om du arbetar säkert.',
    keyword: 'laga taket själv',
    dienst: 'onderhoud',
    onderwerp: 'Jag vill laga eller byta mitt tak eller min takterrass.',
    answer: '<strong>Byta en trasig takpanna</strong>, <strong>rensa hängrännor och brunnar</strong> och <strong>belägga en takterrass på nytt</strong> med flytande tätskikt kan du göra själv. Byta bjälkar eller takbjälklag, höja taket eller ett helt nytt tak är tillståndspliktigt arbete för en fackman. Ett tak av <strong>uralita</strong> (asbestcement, eternit) rör du aldrig själv.',
    sections: [
      {
        id: 'vilket-tak',
        h: 'Vilket tak har du?',
        table: {
          head: ['Tak', 'Känns igen på', 'Se upp'],
          rows: [
            ['Sadeltak med munk- och nunnetegel (<em>teja árabe</em>)', 'Röda eller bruna böjda takpannor, ofta lagda i bruk', 'Pannorna glider av vind och värme; skiktet under är ofta gammalt'],
            ['Platt tak eller takterrass (<em>azotea</em>)', 'Klinkerlagt eller belagt, med brunnar i hörnen', 'Läcker oftast vid fogar, kanter och brunnar'],
            ['Korrugerade plattor av <em>uralita</em>', 'Grå korrugerade plattor, ofta på uthus', 'Innehåller nästan alltid asbest: bara ett godkänt företag får ta bort det'],
          ],
        },
      },
      {
        id: 'sjalv',
        h: 'Vad kan du göra själv?',
        table: {
          head: ['Arbete', 'Själv?'],
          rows: [
            ['Rensa hängrännor och brunnar', 'Ja, varje höst'],
            ['Byta en trasig eller förskjuten takpanna', 'Ja'],
            ['Täta eller tejpa fogar och anslutningar', 'Ja'],
            ['Belägga takterrassen med flytande tätskikt (<em>membrana líquida</em>)', 'Ja'],
            ['Lägga om en del av taket', 'Med erfarenhet'],
            ['Byta bjälkar, takbjälklag eller hela taket', 'Nej'],
          ],
        },
      },
      {
        id: 'takterrass',
        h: 'Så tätar du en takterrass på nytt',
        html: `<ol>
<li>Sopa och spola terrassen och låt den torka helt.</li>
<li>Ta bort löst skikt och bruk och fyll sprickor med reparationsbruk eller fogmassa.</li>
<li>Rensa brunnarna och kontrollera att vattnet verkligen rinner dit.</li>
<li>Stryk på en primer, enligt tillverkarens anvisning.</li>
<li>Lägg ett armeringsnät (<em>malla</em>) i det första lagret i hörn, kanter och fogar.</li>
<li>Stryk minst två lager i kors, med torktid emellan.</li>
</ol>
<p>Arbeta på våren eller hösten: i full sommarsol torkar skiktet för snabbt och på vintern är risken för regn för stor. Har terrassen klinker du vill behålla finns ett transparent skikt, men det håller sämre. Måste klinkern bort är det ett jobb för en fackman.</p>`,
      },
      {
        id: 'sakert',
        h: 'Arbeta säkert på taket',
        html: `<ul>
<li>Arbeta aldrig ensam och aldrig när det blåser eller efter regn.</li>
<li>Använd på ett sadeltak en fallskyddssele med förankringspunkt och en stege som når minst en meter över takfoten.</li>
<li>Gå inte på gamla takpannor utan en planka: de spricker, och konstruktionen under är ibland svagare än du tror.</li>
<li>Hamnar stege, ställning eller container på gatan behöver du tillstånd för att använda allmän plats (<em>ocupación de la vía pública</em>).</li>
</ul>`,
      },
      {
        id: 'tillstand',
        h: 'Tillstånd',
        html: '<p>Reparationer med samma material räknas oftast som mindre byggarbete (<em>obra menor</em>), med en anmälan (<em>declaración responsable</em>) till kommunen. Ändrar du takets konstruktion, höjd eller form är det en <em>obra mayor</em> med ett projekt från en arkitekt. I de historiska bykärnorna i till exempel Frigiliana eller Cómpeta finns ofta regler om takpannornas typ och färg.</p>',
      },
      {
        id: 'fackman',
        h: 'När är en fackman bättre?',
        html: `<ul>
<li>Taket hänger ner, bjälkarna har sprickor eller det finns trämask eller termiter.</li>
<li>Det läcker trots att pannorna eller skiktet ser bra ut: då ligger problemet under.</li>
<li>Hela taket måste läggas om, med isolering.</li>
<li>Det finns uralita eller annan asbest på taket.</li>
</ul>`,
      },
    ],
    faq: [
      { q: 'När är det bäst att arbeta på taket?', a: 'På våren och hösten. I juli och augusti blir taket för varmt för att arbeta säkert och tätskikt torkar för snabbt. Kontrollera taket varje höst, före regnen i oktober och november.' },
      { q: 'Kan jag återanvända gamla takpannor?', a: 'Ja, och i historiska bykärnor är det ofta till och med önskvärt. Gammal teja árabe är eftertraktad och ibland dyrare än ny. Använd de hela pannorna i det övre lagret och de sämre i det undre.' },
      { q: 'Får jag ta bort uralita själv?', a: 'Nej. Asbest får i Spanien bara tas bort av ett företag som är registrerat i registret för asbestarbeten (RERA). Låt det ligga tills det tas bort på rätt sätt.' },
    ],
    links: [
      { href: '/sv/problem/taklacka/', label: 'Takläcka: orsak och lösning' },
      { href: '/sv/guider/asbest-eternit-tak-spanien/', label: 'Guide: asbest och eternit på taket' },
      { href: '/sv/kostnader/tak-och-takterrass/', label: 'Vad kostar ett nytt tak eller en takterrass?' },
      { href: '/sv/underhall/', label: 'Underhåll och reparationer' },
    ],
    related: ['problems:daklekkage', 'costs:dak', 'diy:witten'],
    sources: [
      { name: 'Código Técnico de la Edificación (CTE), DB HS 1 skydd mot fukt', url: 'https://www.codigotecnico.org/' },
      { name: 'Real Decreto 396/2006 om arbete med asbest', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2006-6474' },
    ],
    ctaTitle: 'Läcker taket, eller måste det läggas om?',
    ctaText: 'Behöver taket lagas eller läggas om? Vi tar hand om det, även när du inte själv är i Spanien.',
    minutes: 7,
    published: '2026-11-21',
  },
  {
    key: 'ramen',
    slug: 'byta-fonster-sjalv',
    title: 'Byta fönster i Spanien: vad du väljer och hur du monterar dem själv',
    seoTitle: 'Byta fönster själv i Spanien: glas, karm och montering',
    short: 'Byta fönster själv',
    description: 'Nya fönster i Axarquía? Aluminium eller PVC, vilket glas, skjutfönster eller dreh-kipp, hur du mäter och monterar och vilket tillstånd du behöver.',
    lead: 'Gamla fönster med enkelglas släpper in kylan på vintern och värmen på sommaren. Nya fönster hör till de bästa förbättringarna i ett spanskt hus, och med lite händighet monterar du dem själv.',
    keyword: 'byta fönster själv',
    dienst: 'renovatie',
    onderwerp: 'Jag vill byta mina fönster.',
    answer: 'De flesta ägare i Axarquía väljer <strong>aluminium med köldbryggsbrytning</strong> (<em>RPT</em>) eller <strong>PVC</strong>, med <strong>tvåglas</strong> och solskyddsglas mot söder och väster. Du låter en lokal <em>carpintería</em> tillverka dem efter mått och kan montera dem själv om öppningen förblir densamma.',
    sections: [
      {
        id: 'material',
        h: 'Aluminium, PVC eller trä?',
        table: {
          head: ['Material', 'Fördelar', 'Nackdelar'],
          rows: [
            ['Aluminium med köldbryggsbrytning (RPT)', 'Stabilt, smal profil, tål sol och havsluft, många färger', 'Isolerar något sämre än PVC'],
            ['PVC', 'Isolerar bäst, billigare', 'Mörka färger kan slå sig i stark sol; tjockare profil'],
            ['Trä', 'Vackert och passar gamla hus', 'Mycket underhåll i sol och regn; dyrare'],
          ],
        },
      },
      {
        id: 'glas',
        h: 'Glas, öppningssätt och tillval',
        html: `<ul>
<li><strong>Tvåglas</strong> (<em>doble acristalamiento</em>, i Spanien ofta kallat <em>Climalit</em>) är standard. Mot söder och väster väljer du solskyddsglas (<em>control solar</em>), mot norr lågemissionsglas (<em>bajo emisivo</em>).</li>
<li><strong>Säkerhetsglas</strong> (<em>laminado</em>) på bottenvåningen och vid glasdörrar ända ner till golvet.</li>
<li><strong>Dreh-kipp-fönster</strong> (<em>oscilobatiente</em>) sluter tätast och isolerar bäst. <strong>Skjutfönster</strong> (<em>correderas</em>) tar ingen plats men släpper in mer drag och damm.</li>
<li><strong>Tillval</strong>: persienner (<em>persianas</em>), fönsterluckor (<em>contraventanas</em> eller <em>mallorquinas</em>), myggnät (<em>mosquiteras</em>) och galler (<em>rejas</em>) för hus som står tomma länge.</li>
</ul>`,
      },
      {
        id: 'mata',
        h: 'Så mäter du',
        html: `<ol>
<li>Mät öppningens bredd på tre höjder och höjden på tre ställen.</li>
<li>Ta det minsta måttet och dra av omkring 1 cm för fogen runt om.</li>
<li>Kontrollera med diagonalerna om öppningen är vinkelrät. En avvikelse på mer än en centimeter tar du upp med foder och list.</li>
<li>Anteckna öppningsriktning, var persiennlådan ska sitta och om du behöver en fönsterbänk.</li>
</ol>
<p>Är du osäker, låt carpintería mäta själv. Det kostar lite eller inget, och då ansvarar de för måttet.</p>`,
      },
      {
        id: 'montering',
        h: 'Montering steg för steg',
        html: `<ol>
<li>Ta ut de gamla bågarna. Den gamla karmen tar du bort, eller låter sitta och sätter en renoveringskarm över. Det sparar bilning och putsarbete, men glasytan blir något mindre.</li>
<li>Rengör och räta upp öppningen.</li>
<li>Ställ den nya karmen på kilar, i våg och vinkel.</li>
<li>Fäst den med karmskruv eller ankare i väggen, utan att karmen slår sig.</li>
<li>Fyll fogen runt om med PU-skum och skär av det när det härdat.</li>
<li>Täta utvändigt med en väderbeständig fogmassa (MS-polymer) och avsluta invändigt med en list eller puts.</li>
<li>Häng tillbaka bågarna och justera gångjärn och beslag.</li>
</ol>`,
      },
      {
        id: 'kopa',
        h: 'Var köper du fönster?',
        html: '<p>Fönster efter mått köper du hos en lokal aluminium- eller PVC-verkstad (<em>carpintería de aluminio</em> eller <em>de PVC</em>). De finns i Vélez-Málaga, Torre del Mar, Nerja och i många byar. Ta in två eller tre offerter och fråga efter märke och serie på profilen och efter glastyp, så att du kan jämföra. Fönster i standardmått finns i byggvaruhusen i Málaga, men gamla spanska hus har sällan standardmått.</p>',
      },
      {
        id: 'tillstand',
        h: 'Tillstånd',
        html: '<p>Att byta fönster i samma öppning räknas oftast som mindre byggarbete, med en anmälan (<em>declaración responsable</em>) till kommunen. I den historiska kärnan i många vita byar finns regler om färg, modell och material, till exempel trä eller trälook. Fråga innan du beställer. Förstorar du en öppning eller tar upp ett nytt fönster i en vägg är det ett ingrepp i konstruktionen, och då behöver du en fackman och ett bygglov.</p>',
      },
    ],
    faq: [
      { q: 'Hur lång tid tar det innan fönster efter mått är klara?', a: 'Oftast två till fyra veckor efter uppmätningen. På våren, när många förbereder huset för sommaren, kan det ta längre tid.' },
      { q: 'Löser nya fönster fukt och mögel?', a: 'De minskar drag och kalla ytor, men ett tätt hus behöver mer ventilation. Utan ventilation kan kondensen till och med öka. Läs mer om fukt och mögel.' },
      { q: 'Kan jag montera fönster själv utan erfarenhet?', a: 'Att byta ett fönster i en befintlig öppning går bra för den som är händig. En stor skjutdörr eller fönster högt upp monteras hellre av två fackmän: de är tunga och måste passa exakt.' },
    ],
    links: [
      { href: '/sv/renovering/', label: 'Renovering och ombyggnad' },
      { href: '/sv/kostnader/fonster-och-karmar/', label: 'Vad kostar nya fönster?' },
      { href: '/sv/problem/drag-och-kondens-vid-fonster/', label: 'Drag och kondens vid fönster' },
      { href: '/sv/problem/fukt-och-mogel/', label: 'Fukt och mögel i huset' },
    ],
    related: ['diy:kachel', 'problems:vocht', 'costs:airco'],
    sources: [
      { name: 'Código Técnico de la Edificación (CTE), DB HE energibesparing', url: 'https://www.codigotecnico.org/' },
    ],
    ctaTitle: 'Hellre låta montera fönstren?',
    ctaText: 'Vill du låta montera nya fönster? Vi ordnar det åt dig, från uppmätning till montering.',
    minutes: 7,
    published: '2026-11-21',
  },
  {
    key: 'kachel',
    slug: 'installera-braskamin',
    title: 'Installera braskamin och skorsten i Spanien: så gör du själv',
    seoTitle: 'Installera braskamin i Spanien: kamin, rökrör och regler',
    short: 'Installera braskamin',
    description: 'Ved- eller pelletskamin i Axarquía? Vilken kamin du väljer, hur du monterar rökrör och takgenomföring och vad du behöver ordna.',
    lead: 'Vinterkvällarna i bergen i Axarquía är kallare än många tror, och de flesta gamla hus saknar värme. En bra kamin gör hela skillnaden.',
    keyword: 'installera braskamin',
    dienst: 'renovatie',
    onderwerp: 'Jag vill installera en braskamin eller pelletskamin.',
    answer: 'En <strong>braskamin</strong> eller <strong>kassett</strong> installerar du själv om du använder ett <strong>dubbelväggigt, isolerat rökrör</strong>, håller tillverkarens avstånd och tätar takgenomföringen väl. Spara fakturorna och låt kontrollera installationen: försäkringsbolaget kan fråga efter det.',
    sections: [
      {
        id: 'val',
        h: 'Vilken kamin väljer du?',
        table: {
          head: ['Typ', 'Passar för'],
          rows: [
            ['Braskamin (<em>estufa de leña</em>)', 'Vardagsrummet, hus utan pålitlig el, känslan av riktig eld'],
            ['Kassett eller insats (<em>insert</em> eller <em>cassette</em>)', 'En befintlig öppen spis som mest värmer himlen'],
            ['Pelletskamin (<em>estufa de pellets</em>)', 'Den som vill ha det bekvämt: termostat, timer, start med fjärrkontroll'],
          ],
        },
        after: '<p>En öppen spis värmer mest skorstenen: upp till 80 % av värmen går förlorad. En insats i samma spis ger tre till fyra gånger så mycket värme med samma ved. En pelletskamin behöver el och fungerar inte vid strömavbrott.</p>',
      },
      {
        id: 'rokror',
        h: 'Rökröret',
        html: `<ul>
<li>Använd enkelväggigt rör i rummet och från taket, genom yttertaket och ute <strong>dubbelväggigt, isolerat rör i rostfritt stål</strong> (<em>tubo de doble pared</em>).</li>
<li>Håll det avstånd till trä, bjälkar och vass (<em>cañizo</em>) som tillverkaren anger. I innertak och yttertak använder du en genomföringsplåt.</li>
<li>Låt röret gå minst en meter över taket, och över nocken om det sitter nära den. Ett för kort rör är huvudorsaken till att en kamin drar dåligt.</li>
<li>Använd så få böjar som möjligt, aldrig fler än två.</li>
<li>Använder du en befintlig skorsten, låt först sota och kontrollera den. Ofta behövs ett insatsrör i rostfritt stål.</li>
</ul>`,
      },
      {
        id: 'steg',
        h: 'Steg för steg',
        html: `<ol>
<li>Välj plats: mitt i huset sprids värmen bäst, och röret måste kunna gå rakt upp.</li>
<li>Lägg en obrännbar golvplatta av sten, klinker eller stål under och framför kaminen.</li>
<li>Gör hålet i innertak och yttertak, med det avstånd till trä som anvisningen anger.</li>
<li>Montera röret nerifrån och upp, med skarvarna så att kondensvatten rinner inåt.</li>
<li>Täta takgenomföringen med en blyplåt eller flexibel manschett och fogmassa och lägg pannorna snyggt runt om.</li>
<li>Se till att det kommer in tilluft i rummet, särskilt i ett hus med nya fönster.</li>
<li>Sätt upp en kolmonoxidvarnare och elda försiktigt första gången.</li>
</ol>`,
      },
      {
        id: 'ved',
        h: 'Var köper du kamin och ved?',
        html: '<p>Kaminer och rökrör hittar du i byggvaruhusen i Málaga och hos kaminbutiker i området, som också levererar rör efter mått. Ved köper du hos lokala vedhandlare (<em>venta de leña</em>): oliv- och mandelträ brinner länge och varmt. Köp den på våren, så är den torr till vintern. Pellets finns i säckar eller på pall i byggvaruhus, jordbrukskooperativ och på en del bensinstationer.</p>',
      },
      {
        id: 'regler',
        h: 'Tillstånd, försäkring och underhåll',
        html: `<ul>
<li>En kamin med rör genom taket räknas i de flesta kommuner som mindre byggarbete, med en anmälan (<em>declaración responsable</em>). I en lägenhet behöver du också samfällighetens (<em>comunidad</em>) godkännande för röret på fasaden eller genom taket.</li>
<li>Anmäl kaminen till ditt försäkringsbolag. Efter en brand frågar de ofta efter fakturor och vem som installerade den.</li>
<li>Låt sota röret varje år före eldningssäsongen.</li>
</ul>`,
      },
    ],
    faq: [
      { q: 'Räcker en braskamin för att värma huset?', a: 'För vardagsrummet och rummen runt omkring, ja. Ett hus med flera våningar eller avskilda rum blir inte helt varmt. Många ägare kombinerar kaminen med en luftvärmepump för sovrummen.' },
      { q: 'Får jag elda på sommaren?', a: 'Inomhus, ja. Men eld utomhus och eldning av trädgårdsavfall är i Andalusien förbjudet från juni till mitten av oktober i och nära skog. Kaminen omfattas inte, men var uppmärksam på gnistor från skorstenen vid torka.' },
      { q: 'Varför ryker min kamin in?', a: 'Oftast är röret för kort, har för många böjar eller så kommer det in för lite luft i rummet. Även blöt ved och ett smutsigt rör ger rök. Börja med torr ved och ett fönster på glänt.' },
    ],
    links: [
      { href: '/sv/kostnader/skorsten-och-braskamin/', label: 'Vad kostar skorsten och braskamin?' },
      { href: '/sv/problem/kaminen-ryker-in/', label: 'Kaminen ryker in: orsak och lösning' },
      { href: '/sv/kostnader/luftkonditionering-och-varmepump/', label: 'Vad kostar luftkonditionering eller värmepump?' },
      { href: '/sv/renovering/', label: 'Renovering och ombyggnad' },
    ],
    related: ['diy:ramen', 'diy:dak', 'costs:airco'],
    sources: [
      { name: 'Código Técnico de la Edificación (CTE), DB HS 3 luftkvalitet inomhus', url: 'https://www.codigotecnico.org/' },
      { name: 'Junta de Andalucía, Plan INFOCA: brandskydd och eldningsförbud', url: 'https://www.juntadeandalucia.es/medioambiente/portal/areas-tematicas/incendios-forestales' },
    ],
    ctaTitle: 'Hellre låta installera kaminen?',
    ctaText: 'Vill du låta installera en kamin? Vi tar hand om kamin, rökrör och en säker installation.',
    minutes: 6,
    published: '2026-11-21',
  },
  {
    key: 'witten',
    slug: 'kalka-fasaden',
    title: 'Kalka ditt hus vitt: så gör man i Andalusien',
    seoTitle: 'Kalka fasaden i Spanien: material och steg för steg',
    short: 'Kalka fasaden',
    description: 'Vill du kalka fasaden som i de vita byarna? Kalk eller fasadfärg, hur du stryker, vad kommunen kräver och hur du förebygger fukt.',
    lead: 'De vita byarna har kalken att tacka för sin färg. Att kalka (<em>encalar</em>) är ett av de enklaste jobben att göra själv, och det håller gamla väggar friska.',
    keyword: 'kalka fasad',
    dienst: 'onderhoud',
    onderwerp: 'Jag vill kalka eller måla min fasad.',
    answer: 'För gamla väggar av sten och kalkbruk väljer du <strong>kalk</strong> (<em>cal</em>): den andas, så att fukt kan ta sig ut. Fasadfärg stänger in fukten och flagnar sedan. Du stryker tre eller fyra <strong>tunna lager</strong> på en fuktad vägg, inte i stark sol. Kalk är dessutom den billigaste lösningen.',
    sections: [
      {
        id: 'val',
        h: 'Kalk eller fasadfärg?',
        table: {
          head: ['', 'Kalk (<em>cal</em>)', 'Fasadfärg (<em>pintura plástica</em> eller <em>elástica</em>)'],
          rows: [
            ['Passar för', 'Gamla väggar av sten, lera och kalkbruk', 'Nya väggar av tegel och cement'],
            ['Fukt', 'Andas: fukt kan ta sig ut', 'Tätar: fukten blir kvar bakom färgen'],
            ['Hållbarhet', 'Ett nytt lager vart till vart tredje år', 'Fem till tio år'],
          ],
        },
        after: '<p>Finns det redan fasadfärg som flagnar på en gammal vägg, ta bort så mycket som möjligt innan du kalkar. Kalk fäster dåligt på färg.</p>',
      },
      {
        id: 'steg',
        h: 'Steg för steg',
        html: `<ol>
<li>Borsta bort lös kalk, smuts och mossa med en stålborste.</li>
<li>Laga sprickor och hål med kalkbruk, inte med cement.</li>
<li>Blöt väggen med en sprayflaska eller trädgårdsslangen. På en torr vägg torkar kalken för snabbt och du får ränder och fina sprickor.</li>
<li>Rör ut kalkdegen (<em>cal en pasta</em>) med vatten tills den är tunn som standardmjölk.</li>
<li>Stryk ett tunt lager i kors med en bred pensel (<em>brocha</em>) eller en roller.</li>
<li>Låt varje lager torka en dag och fukta väggen igen före nästa. Efter tre eller fyra lager är väggen jämnt vit.</li>
</ol>
<p>Arbeta på våren eller hösten, eller tidigt på morgonen i skuggan. I stark sol och hård vind torkar kalken för snabbt och kritar.</p>`,
      },
      {
        id: 'sakert',
        h: 'Arbeta säkert med kalk',
        html: '<p>Kalk är frätande. Använd skyddsglasögon, handskar och långärmat, och skölj direkt stänk på huden eller i ögonen med mycket vatten. Täck fönster, dörrar och växter. Använd släckt kalk (<em>cal apagada</em>), inte bränd kalk (<em>cal viva</em>): den blir het när du tillsätter vatten.</p>',
      },
      {
        id: 'kopa',
        h: 'Var köper du kalk?',
        html: '<p>Kalkdeg och kalkpulver finns i varje bygghandel (<em>almacén de materiales</em>) och järnhandel (<em>ferretería</em>) i Axarquía och i byggvaruhusen i Málaga. Penslar och förlängningsskaft hittar du där också. För fasader nära havet finns kalk med tillsatser som tål salt och regn bättre.</p>',
      },
      {
        id: 'regler',
        h: 'Vad kräver kommunen?',
        html: '<p>I många byar i Axarquía är vitt ett krav, ibland också färgen på dörrar, fönster och omfattningar. Att kalka en fasad i samma färg räknas oftast som mindre byggarbete. Ställer du ställning, stege eller container på gatan behöver du tillstånd för att använda allmän plats. Fråga om båda hos kommunen (Ayuntamiento).</p>',
      },
      {
        id: 'fackman',
        h: 'När är en fackman bättre?',
        html: `<ul>
<li>Väggen har fuktfläckar som kommer tillbaka efter varje kalkning: hitta först orsaken, se <a href="/sv/problem/fukt-och-mogel/">fukt och mögel</a>.</li>
<li>Sprickor går genom väggen och blir bredare: se <a href="/sv/problem/sprickor-i-vaggar/">sprickor i väggar</a>.</li>
<li>Fasaden är hög och du behöver en ställning.</li>
</ul>`,
      },
    ],
    faq: [
      { q: 'Kan jag använda kalk inomhus också?', a: 'Ja. Kalk inomhus motverkar mögel och passar bra på gamla väggar. På väggar som tidigare målats med plastfärg fäster den däremot dåligt.' },
      { q: 'Hur ofta måste jag kalka?', a: 'En fasad i sol och regn vart till vart tredje år. Många ägare i byarna kalkar varje vår, före sommaren och fiestorna.' },
      { q: 'Får jag måla huset i en annan färg?', a: 'I de historiska bykärnorna oftast inte. Utanför är friheten ofta större, men även där har kommunen ibland regler. Fråga först.' },
    ],
    links: [
      { href: '/sv/problem/fukt-och-mogel/', label: 'Fukt och mögel i huset' },
      { href: '/sv/problem/sprickor-i-vaggar/', label: 'Sprickor i väggar' },
      { href: '/sv/guider/kalka-och-mala-fasad-spanien/', label: 'Guide: kalka och måla fasaden' },
      { href: '/sv/underhall/', label: 'Underhåll och reparationer' },
    ],
    related: ['problems:vocht', 'problems:scheuren', 'diy:dak'],
    sources: [
      { name: 'Código Técnico de la Edificación (CTE), DB HS 1 skydd mot fukt', url: 'https://www.codigotecnico.org/' },
    ],
    ctaTitle: 'Hellre låta kalka fasaden?',
    ctaText: 'Vill du låta laga och kalka fasaden? Vi gör det åt dig, även om den är hög.',
    minutes: 5,
    published: '2026-11-21',
  },
  {
    key: 'watertank',
    slug: 'installera-vattentank',
    title: 'Installera och ansluta en vattentank på din finca',
    seoTitle: 'Installera vattentank i Spanien: anslutning och dricksvatten',
    short: 'Installera vattentank',
    description: 'Vattentank (depósito eller aljibe) på din finca? Var vattnet kommer ifrån, vad du ska tänka på i vattenavtalet och hur du installerar och ansluter tanken.',
    lead: 'Många hus utanför byarna i Axarquía är inte anslutna till det kommunala vattennätet. De får vatten från en bevattningsförening (comunidad de regantes) eller en tankbil, eller har en egen brunn. En egen vattentank är då husets hjärta.',
    keyword: 'installera vattentank finca',
    dienst: 'onderhoud',
    onderwerp: 'Jag vill installera och ansluta en vattentank.',
    answer: 'En <strong>vattentank</strong> (<em>depósito</em> eller <em>aljibe</em>) samlar upp vattnet du får, och en <strong>tryckpump</strong> för det till kranarna. Utanför byn tecknar du ofta ett <strong>avtal om en fast mängd vatten per vecka</strong>, till exempel med bevattningsföreningen. En <strong>flottörventil</strong> stänger tillflödet när tanken är full. Har du en <strong>egen brunn</strong> behöver du inget sådant avtal. Vatten som inte kommer från nätet gör du drickbart med <strong>filter och en UV-lampa</strong>.',
    sections: [
      {
        id: 'kallor',
        h: 'Var kommer ditt vatten ifrån?',
        table: {
          head: ['Källa', 'Så fungerar det', 'Se upp'],
          rows: [
            ['Kommunalt vattennät', 'Anslutning med mätare; tanken är då bara en reserv', 'Bara i och runt byarna och i bostadsområden'],
            ['Comunidad de regantes (bevattningsvatten)', 'Du tecknar ett avtal om en mängd per vecka; vattnet kommer på fasta tider (<em>turno</em>) via en mätare till din tank', 'Avsett för jordbruk, inte dricksvatten; under torra år kan mängden minska'],
            ['Tankbil (<em>camión cisterna</em>)', 'Du beställer en last vatten när tanken börjar bli tom', 'Bilen måste kunna komma fram till tanken'],
            ['Egen brunn eller källa (<em>pozo</em>)', 'En pump tar upp vattnet och fyller tanken', 'Inget avtal behövs, men registrering eller tillstånd; låt testa vattnet'],
            ['Regnvatten', 'Samlas upp från taket i en gammal eller ny <em>aljibe</em>', 'Bra komplement, räcker inte på sommaren'],
          ],
        },
      },
      {
        id: 'avtal',
        h: 'Vad ska du tänka på i ett vattenavtal?',
        html: `<p>Exakt hur det fungerar skiljer sig mellan föreningar och områden. Ibland är det mycket vatten, ibland lite. Se till att du vet följande i förväg:</p>
<ul>
<li><strong>Hur mycket vatten</strong> du får per vecka och om du kan ta mer senare. Räkna med 100 till 150 liter per person och dag för ett hushåll, plus trädgård och eventuell pool.</li>
<li><strong>När</strong> vattnet kommer: på en fast dag och tid (<em>turno</em>) eller hela tiden.</li>
<li><strong>Vad som händer vid torka</strong>: 2023 och 2024 fick många användare i Axarquía mindre vatten. Fråga hur det är reglerat.</li>
<li><strong>Vem som underhåller ledningen</strong> fram till din tank och var mätaren (<em>contador</em>) sitter.</li>
<li><strong>När du köper en finca</strong>: är vattenrätten knuten till tomten, och skrivs den över på dig? Fråga föreningen och din advokat. Läs också guiden <a href="/sv/guider/kopa-finca-i-spanien/">köpa finca i Spanien</a>.</li>
</ul>`,
      },
      {
        id: 'stopp',
        h: 'Ett stopp vid tanken',
        html: `<p>Utan stopp svämmar tanken över vid varje leverans, eller så fortsätter vatten att rinna som du betalar för. Därför monterar du ett stopp:</p>
<ul>
<li>En <strong>flottörventil</strong> (<em>válvula de boya</em> eller <em>flotador</em>) stänger tillflödet så fort tanken är full.</li>
<li>En <strong>avstängningskran</strong> på tillflödet, så att du kan stänga av tanken när du är borta eller rengör den.</li>
<li>Ett <strong>bräddavlopp</strong> som leder bort vattnet från huset, om flottören någon gång fastnar.</li>
</ul>`,
      },
      {
        id: 'val',
        h: 'Vilken tank väljer du?',
        table: {
          head: ['Typ', 'Passar för', 'Se upp'],
          rows: [
            ['Plasttank (polyeten), ovan mark', 'Snabbt på plats, även på svåråtkomliga ställen', 'Välj en mörk, ljustät tank mot alger, godkänd för dricksvatten (<em>apto uso alimentario</em>)'],
            ['Plasttank, nedgrävd', 'Osynlig, vattnet hålls svalt', 'Markarbete; tanken måste vara gjord för att grävas ner'],
            ['Murad eller gjuten <em>aljibe</em>', 'Stort förråd, traditionellt på fincor', 'Finns ofta redan; låt kontrollera och täta en gammal aljibe'],
          ],
        },
        after: '<p>Välj storlek efter din förbrukning mellan två leveranser, plus en reserv för en vecka utan vatten. För ett par utan pool räcker ofta några tusen liter; med trädgård, gäster eller uthyrning behöver du snabbt tio till tjugo tusen liter.</p>',
      },
      {
        id: 'steg',
        h: 'Installera och ansluta, steg för steg',
        html: `<ol>
<li><strong>Plats.</strong> Högre än huset ger lite tryck av sig självt; lägre går också, med en tryckpump. Se till att leverantören eller tankbilen kommer fram.</li>
<li><strong>Underlag.</strong> En plan, armerad betongplatta. Varje 1 000 liter väger 1 000 kilo.</li>
<li><strong>Tillflöde.</strong> Anslut ledningen från mätaren till tanken, med avstängningskran och flottörventil.</li>
<li><strong>Bräddavlopp och luftning.</strong> Ett bräddavlopp med avledning och en luftning med insektsnät.</li>
<li><strong>Utlopp.</strong> En avstängningskran, en backventil och en sugledning till pumpen.</li>
<li><strong>Tryckpump.</strong> En pump med tryckkärl eller med frekvensstyrning, i ett torrt, skuggigt pumphus. El ansluts av en behörig installatör.</li>
<li><strong>Filter.</strong> Ett sedimentfilter före huset och för dricksvatten ett kolfilter och en UV-lampa.</li>
<li><strong>Ledningar.</strong> Gräv ner dem eller skydda dem mot solen; plastledningar blir spröda i solen och vattnet blir varmt.</li>
</ol>`,
      },
      {
        id: 'dricksvatten',
        h: 'Dricksvatten från tanken',
        html: '<p>Vatten från en bevattningsförening, en brunn eller regn är inte dricksvatten förrän det har renats. Vilka filter du behöver beror på källan; oftast ett sedimentfilter, ett kolfilter och en UV-lampa. Läs mer i guiden <a href="/sv/guider/vattenfilter-spanien/">vattenfilter i Spanien</a>. Låt testa vattnet regelbundet. Rengör tanken varje år och håll den stängd och mörk: stillastående varmt vatten innebär en risk för <a href="/sv/problem/legionella/">legionella</a>.</p>',
      },
      {
        id: 'tillstand',
        h: 'Tillstånd',
        html: '<p>Att ställa upp en plasttank räknas oftast som mindre byggarbete, med en anmälan (<em>declaración responsable</em>) till kommunen. En stor murad eller gjuten aljibe kan kräva bygglov, särskilt på landsbygdsmark. Att borra eller använda en egen brunn måste du anmäla till eller få tillstånd för hos Junta de Andalucías vattenmyndighet. Fråga först.</p>',
      },
    ],
    faq: [
      { q: 'Hur mycket vatten behöver jag per vecka?', a: 'Räkna med 100 till 150 liter per person och dag i huset, för två personer alltså omkring 1 500 till 2 000 liter per vecka. Trädgård, gäster eller en pool kan mångdubbla det, särskilt på sommaren.' },
      { q: 'Kan jag dricka bevattningsvattnet?', a: 'Inte utan vidare. Det är avsett för jordbruk och kontrolleras inte som dricksvatten. Med filter och en UV-lampa kan du göra det drickbart; låt testa det regelbundet.' },
      { q: 'Behöver jag ett avtal om jag har en egen brunn?', a: 'Nej, då kommer vattnet från din egen källa. Många ägare har ändå en tank som buffert, så att pumpen inte startar hela tiden och du har ett förråd när brunnen ger mindre på sommaren.' },
    ],
    links: [
      { href: '/sv/guider/vattenfilter-spanien/', label: 'Guide: vattenfilter för tank och brunn' },
      { href: '/sv/guider/vattenlacka-spanien/', label: 'Guide: vattenläcka och vattenskada' },
      { href: '/sv/guider/kopa-finca-i-spanien/', label: 'Guide: köpa finca i Spanien' },
      { href: '/sv/problem/legionella/', label: 'Legionella i tank och ledningar' },
      { href: '/sv/tillsyn/', label: 'Tillsyn: koll på tank och pump när du är borta' },
    ],
    related: ['costs:water', 'problems:legionella', 'diy:zwembad'],
    sources: [
      { name: 'Real Decreto Legislativo 1/2001, Ley de Aguas (bland annat egna brunnar)', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2001-14276' },
      { name: 'Real Decreto 3/2023 om dricksvattenkvalitet', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2023-628' },
    ],
    ctaTitle: 'Låta installera en vattentank?',
    ctaText: 'Vi installerar och ansluter tanken åt dig, med flottör, pump och filter, och tänker med kring vattenanslutningen.',
    minutes: 7,
    published: '2026-11-21',
  },
];
