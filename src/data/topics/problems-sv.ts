import type { Topic } from './types';

// Problemsidor på svenska.
export const problemsSv: Topic[] = [
  {
    key: 'vocht',
    slug: 'fukt-och-mogel',
    title: 'Fukt och mögel i ditt hus i Spanien: orsak och lösning',
    seoTitle: 'Fukt och mögel i huset i Spanien: orsaker och lösningar',
    short: 'Fukt och mögel',
    description: 'Fuktfläckar eller mögel i huset i Axarquía? Så skiljer du på uppstigande fukt, kondens och läckor, och vad lösningen kostar.',
    lead: 'I ett soligt land väntar man sig det inte, men fukt är ett av de vanligaste klagomålen i hus i Axarquía. Särskilt i byhus, hus i sluttningar och hus som står tomma i månader.',
    keyword: 'fukt i huset spanien',
    dienst: 'onderhoud',
    onderwerp: 'Jag har fukt eller mögel i mitt hus.',
    answer: 'Fukt i ett spanskt hus har nästan alltid en av tre orsaker: <strong>kondens</strong> (ett stängt, kallt hus utan ventilation), <strong>uppstigande eller inträngande fukt</strong> (gamla, oisolerade väggar eller en vägg mot en sluttning) eller <strong>en läcka</strong> (tak, rör, avlopp). Hitta orsaken först, måla sedan.',
    sections: [
      {
        id: 'kanna-igen',
        h: 'Vilken sorts fukt har du?',
        table: {
          head: ['Det du ser', 'Trolig orsak'],
          rows: [
            ['Svarta prickar i hörn, bakom skåp, på kalla väggar; värre på vintern', 'Kondens: för lite ventilation och kalla väggar'],
            ['Fuktrand och flagnande färg längst ner på väggen, upp till ± 1 meter, saltkristaller', 'Uppstigande fukt från marken'],
            ['Blöt vägg på sluttningssidan eller under terrassen', 'Inträngande fukt: jord och regnvatten mot väggen'],
            ['Fläck i tak eller på vägg som växer efter regn', 'Läckande tak eller takterrass'],
            ['Fläck som alltid är blöt, även när det är torrt ute', 'Läckande vattenrör eller avlopp'],
          ],
        },
      },
      {
        id: 'sjalv',
        h: 'Det här kan du göra själv',
        html: `<ul>
<li>Vädra varje dag, även på vintern, och öppna ett fönster när du lagar mat eller duschar.</li>
<li>Använd en avfuktare. I ett tomt hus går det med en slang till avloppet, så att behållaren inte blir full.</li>
<li>Ställ skåp tio centimeter från ytterväggen.</li>
<li>Värm lite på vintern: ett hus som kyls ner helt drar till sig fukt.</li>
<li>Ta bort mögel med mögelborttagning eller utspädd klorin. Att måla utan att åtgärda orsaken hjälper bara några månader.</li>
</ul>`,
      },
      {
        id: 'losning',
        h: 'Lösningen och vad den kostar',
        table: {
          head: ['Lösning', 'Vid', 'Riktpris'],
          rows: [
            ['Mekanisk ventilation eller ventilationsgaller', 'Kondens', '300 – 2 500 €'],
            ['Injektering mot uppstigande fukt', 'Uppstigande fukt', '60 – 120 € per löpmeter vägg'],
            ['Kalkputs eller saneringsputs i stället för cementputs', 'Uppstigande fukt i gamla väggar', '40 – 80 € per m²'],
            ['Dränering och tätskikt utvändigt', 'Vägg mot en sluttning', '150 – 400 € per löpmeter'],
            ['Hitta och laga läckan', 'Rör eller tak', '300 – 1 500 €'],
          ],
          note: 'Riktpriser exklusive moms. För en finca i en sluttning är dränering ofta den enda varaktiga lösningen.',
        },
      },
      {
        id: 'tomt',
        h: 'Fukt i ett tomt fritidshus',
        html: '<p>Ett hus som står stängt från november till mars luktar ofta unket när du kommer. Madrasser, kuddar och kläder kan mögla. Låt vädra huset regelbundet och kontrollera avfuktaren. Det är precis vad <a href="/sv/tillsyn/">tillsyn av huset</a> gör: fasta besök, fönstren upp, foton och åtgärd direkt om en fuktfläck dyker upp.</p>',
      },
    ],
    faq: [
      { q: 'Varför är spanska hus så fuktiga på vintern?', a: 'Många hus är byggda för att hålla sig svala på sommaren: tjocka stenväggar, klinkergolv, ingen isolering och ingen centralvärme. På vintern kyls väggarna ner och luftens fukt fälls ut på dem. Den som är van vid svenska välisolerade hus blir ofta förvånad.' },
      { q: 'Är mögel farligt?', a: 'Mögel kan ge besvär i luftvägarna och är framför allt ett problem för personer med astma eller allergi. Åtgärda det därför snabbt och sov inte i ett rum med mycket mögel.' },
      { q: 'Måste jag berätta om fukt när jag säljer?', a: 'Kända fel bör du berätta om för köparen. Omvänt gäller: låt göra en besiktning när du köper. En fuktmätare visar vad ett nytt lager färg döljer.' },
    ],
    links: [
      { href: '/sv/underhall/', label: 'Underhåll och reparationer' },
      { href: '/sv/tillsyn/', label: 'Tillsyn och nyckelservice' },
      { href: '/sv/besiktning/', label: 'Besiktning före köp' },
      { href: '/sv/guider/isolera-hus-i-spanien/', label: 'Guide: isolera ditt hus i Spanien' },
    ],
    related: ['problems:daklekkage', 'costs:dak', 'costs:airco'],
    sources: [
      { name: 'Código Técnico de la Edificación, DB HS 1 skydd mot fukt', url: 'https://www.codigotecnico.org/' },
      { name: 'CYPE, Generador de Precios (byggpriser Spanien)', url: 'https://generadordeprecios.info/' },
    ],
    ctaTitle: 'Fukt eller mögel i huset?',
    ctaText: 'Skicka foton av fläckarna och berätta var huset ligger. Vi hittar orsaken och ger ett pris på lösningen.',
    minutes: 5,
    published: '2026-11-21',
  },
  {
    key: 'daklekkage',
    slug: 'taklacka',
    title: 'Takläcka i ditt hus i Spanien: vad gör du?',
    seoTitle: 'Takläcka i Spanien: orsaker och kostnad för reparation',
    short: 'Takläcka',
    description: 'Läcker taket eller takterrassen i Axarquía? Vad du gör direkt, även från Sverige, var läckan oftast kommer ifrån och vad reparationen kostar.',
    lead: 'Efter ett kraftigt skyfall kommer meddelandet från grannarna: vatten rinner längs väggen. Läckor är det vanligaste problemet i Axarquía, särskilt efter höstens första stormar. Så här gör du.',
    keyword: 'takläcka spanien',
    dienst: 'onderhoud',
    onderwerp: 'Mitt tak eller min takterrass läcker.',
    answer: 'Vid en takläcka: <strong>begränsa skadan</strong> (hinkar, flytta möbler, slå av strömmen om vattnet är nära elen), <strong>ta foton</strong> för försäkringen och <strong>låt kontrollera takbrunnarna</strong>: igensatta brunnar är den vanligaste orsaken. En lokal reparation kostar 300 till 1 500 €; att täta om en takterrass 30 till 130 € per m².',
    sections: [
      {
        id: 'direkt',
        h: 'Det här gör du direkt',
        html: `<ol>
<li>Ställ fram hinkar och flytta möbler, mattor och elektronik.</li>
<li>Når vattnet lampor eller uttag? Slå av den säkringsgruppen i elcentralen.</li>
<li>Ta foton och filma skadan inne och, om det är säkert, taket.</li>
<li>Anmäl skadan till ditt försäkringsbolag. Många spanska försäkringar har ett jourtelefonnummer för vattenskador.</li>
<li>Är brunnarna på takterrassen igensatta? Rensa dem. Ofta rinner vattnet undan direkt.</li>
</ol>
<p>Är du inte själv i Spanien? Då är det bra om någon med nyckel kan titta till huset inom några timmar. Det är vad <a href="/sv/tillsyn/">tillsyn av huset</a> är till för.</p>`,
      },
      {
        id: 'orsaker',
        h: 'Var kommer läckan oftast ifrån?',
        html: `<ul>
<li><strong>Igensatta brunnar</strong> på takterrassen, av löv, sand eller saharadamm (<em>calima</em>). Vattnet blir stående och letar sig in.</li>
<li><strong>Utslitet tätskikt</strong> under eller på takterrassens plattor. Efter 15 till 25 år är det ofta slut.</li>
<li><strong>Lösa eller trasiga takpannor</strong> på ett sadeltak, till exempel efter en storm.</li>
<li><strong>Anslutningar</strong> mot skorsten, uppstående kanter och takgenomföringar för luftkonditionering eller solceller.</li>
<li><strong>Sprickor</strong> i fasaden eller takkanten där slagregn tränger in.</li>
</ul>`,
      },
      {
        id: 'kostnad',
        h: 'Vad kostar reparationen?',
        table: {
          head: ['Reparation', 'Riktpris'],
          rows: [
            ['Rensa och laga brunnar och hängrännor', '150 – 600 €'],
            ['Hitta och täta en lokal läcka', '300 – 1 500 €'],
            ['Flytande tätskikt på takterrassen', '30 – 50 € per m²'],
            ['Takterrass: nytt membran och nya plattor', '70 – 130 € per m²'],
            ['Lägga om tegeltak', '60 – 110 € per m²'],
            ['Åtgärda vattenskada inne (puts, målning)', '300 – 2 000 €'],
          ],
          note: 'Riktpriser exklusive moms. Mer detaljer och ett räkneexempel på sidan om kostnader för tak och takterrass.',
        },
      },
      {
        id: 'forebygga',
        h: 'Förebygg',
        html: '<p>Låt kontrollera taket varje år i september eller oktober, före höstregnen och <em>gota fría</em>, och efter varje storm eller calima. Det kostar lite och förhindrar de flesta läckor. Se också <a href="/sv/kostnader/tak-och-takterrass/">kostnader för tak och takterrass</a>.</p>',
      },
    ],
    faq: [
      { q: 'Betalar min försäkring en takläcka?', a: 'De flesta hemförsäkringar betalar vattenskadan inne. Reparationen av själva taket ersätts ofta inte om läckan beror på slitage eller bristande underhåll. Vid stormskador (ofta från en viss vindhastighet) ibland. Kontrollera din försäkring.' },
      { q: 'Vem betalar i en lägenhet?', a: 'Taket är oftast gemensam egendom. Då ansvarar samfälligheten (comunidad) för reparationen. För en privat takterrass kan det vara annorlunda; det står i stadgarna.' },
      { q: 'Kan taket lagas på vintern?', a: 'Ja, mellan regnskurarna. Tätskikt och membran behöver dock några torra dagar. En provisorisk täckning förhindrar fler skador tills vädret tillåter.' },
    ],
    links: [
      { href: '/sv/kostnader/tak-och-takterrass/', label: 'Kostnader för tak och takterrass' },
      { href: '/sv/gor-det-sjalv/laga-taket-sjalv/', label: 'Laga taket själv' },
      { href: '/sv/underhall/', label: 'Underhåll och reparationer' },
      { href: '/sv/tillsyn/', label: 'Tillsyn och nyckelservice' },
    ],
    related: ['costs:dak', 'problems:vocht', 'problems:scheuren'],
    sources: [
      { name: 'AEMET, varningar för regn och gota fría (DANA)', url: 'https://www.aemet.es/' },
      { name: 'Ley 49/1960 de Propiedad Horizontal (samfällighet och gemensam egendom)', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1960-10906' },
      { name: 'CYPE, Generador de Precios (byggpriser Spanien)', url: 'https://generadordeprecios.info/' },
    ],
    ctaTitle: 'Läcker ditt tak?',
    ctaText: 'Skicka foton av skadan. Vi tittar till huset, även när du inte är i Spanien.',
    minutes: 5,
    published: '2026-11-21',
  },
  {
    key: 'scheuren',
    slug: 'sprickor-i-vaggar',
    title: 'Sprickor i väggarna: när ska du oroa dig?',
    seoTitle: 'Sprickor i väggen i Spanien: ofarliga eller allvarliga?',
    short: 'Sprickor i väggar',
    description: 'Sprickor i väggarna i ditt hus i Axarquía? Så skiljer du en krympspricka från en sättning och vad utredning och åtgärd kostar.',
    lead: 'Nästan varje hus i Axarquía har en spricka någonstans. Oftast är den ofarlig. På lerjordarna i kullarna kan hus dock faktiskt sätta sig. Så här ser du skillnaden.',
    keyword: 'sprickor i väggen spanien',
    dienst: 'onderhoud',
    onderwerp: 'Jag har sprickor i väggarna i mitt hus.',
    answer: 'Hårfina sprickor i putsen (under 1 mm) är oftast ofarliga: krympning och temperatur. Låt undersöka en spricka om den är <strong>bredare än 3 mm, går snett från ett fönster- eller dörrhörn, går trappstegsformat genom murverket eller växer</strong>, och om dörrar och fönster kärvar. En utredning av en byggnadstekniker (<em>aparejador</em>) kostar 300 till 800 €.',
    sections: [
      {
        id: 'typer',
        h: 'Ofarlig eller inte?',
        table: {
          head: ['Spricka', 'Vad den oftast betyder'],
          rows: [
            ['Nätformade hårfina sprickor i putsen', 'Putsen har krympt. Kosmetiskt.'],
            ['Rak spricka där gammal och ny del möts', 'Skarv mellan två byggdelar. Oftast ofarligt, men täta mot regn.'],
            ['Vågrät spricka under taket eller takterrassen', 'Taket utvidgas av värmen. Håll koll.'],
            ['Sned spricka från hörnet av ett fönster eller en dörr', 'Möjlig sättning i grunden. Låt undersöka.'],
            ['Trappstegsformad spricka genom fogarna, bredare än 3 mm', 'Sättning. Låt undersöka.'],
            ['Spricka som växer, dörrar som kärvar, snett golv', 'Aktiv rörelse. Låt undersöka snabbt.'],
          ],
        },
      },
      {
        id: 'axarquia',
        h: 'Därför spricker hus i Axarquía',
        html: `<ul>
<li><strong>Lerjord.</strong> I delar av kullarna finns lera som sväller när den blir blöt och krymper när den torkar. Efter en lång torrperiod följd av kraftigt regn rör sig grunderna.</li>
<li><strong>Sluttningar.</strong> Hus och terrasser i sluttningar behöver stödmurar. Leder de inte bort vattnet ordentligt börjar de glida.</li>
<li><strong>Tillbyggnader.</strong> En tillbyggnad på en annan grund än det gamla huset sätter sig på ett annat sätt. Vid skarven uppstår då en spricka.</li>
<li><strong>Läckande rör.</strong> Ett läckande avlopp under huset spolar bort jorden under grunden.</li>
<li><strong>Jordbävningar.</strong> I provinsen Málaga förekommer lätta jordbävningar. De orsakar sällan skador, men kan göra befintliga sprickor större.</li>
</ul>`,
      },
      {
        id: 'folja',
        h: 'Så följer du en spricka',
        html: '<p>Osäker? Dra ett blyertsstreck med datum i båda ändarna av sprickan och mät bredden. Eller låt sätta upp en sprickmätare (<em>fisurómetro</em> eller <em>testigo</em>). Kontrollera efter några månader om sprickan blivit längre eller bredare. Är du inte på plats kan det göras vid de regelbundna kontrollerna inom <a href="/sv/tillsyn/">tillsyn av huset</a>.</p>',
      },
      {
        id: 'kostnad',
        h: 'Vad kostar utredning och åtgärd?',
        table: {
          head: ['Arbete', 'Riktpris'],
          rows: [
            ['Undersökning och rapport av byggnadstekniker (aparejador eller arquitecto técnico)', '300 – 800 €'],
            ['Laga kosmetiska sprickor och måla', '200 – 1 000 €'],
            ['Sy ihop sprickor med rostfria ankare (grapado) och laga putsen', '1 000 – 5 000 €'],
            ['Dränering längs grund eller stödmur', '150 – 400 € per löpmeter'],
            ['Förstärka grunden med mikropålar', '15 000 – 60 000 €+'],
          ],
          note: 'Riktpriser exklusive moms. Allvarliga sättningar är sällsynta, men då krävs först en utredning med beräkning.',
        },
      },
    ],
    faq: [
      { q: 'Ska jag låta kontrollera sprickor innan jag köper hus?', a: 'Ja. Sprickor hör till de viktigaste punkterna vid en besiktning före köp, särskilt för en finca i en sluttning eller ett hus med tillbyggnad. Ett nytt lager färg kan dölja sprickor.' },
      { q: 'Betalar försäkringen åtgärden av sprickor?', a: 'Oftast inte när det gäller sättningar eller slitage. Jordbävningsskador ersätts i Spanien av Consorcio de Compensación de Seguros, förutsatt att du har en hemförsäkring.' },
    ],
    links: [
      { href: '/sv/besiktning/', label: 'Besiktning före köp' },
      { href: '/sv/underhall/', label: 'Underhåll och reparationer' },
      { href: '/sv/guider/kopa-finca-i-spanien/', label: 'Guide: köpa finca i Spanien' },
    ],
    related: ['problems:vocht', 'problems:termieten', 'problems:daklekkage'],
    sources: [
      { name: 'Instituto Geográfico Nacional, jordbävningar i Spanien', url: 'https://www.ign.es/web/ign/portal/sis-area-sismicidad' },
      { name: 'Consorcio de Compensación de Seguros, skador av naturhändelser', url: 'https://www.consorseguros.es/' },
      { name: 'IGME, karta över svällande lera i Spanien (arcillas expansivas)', url: 'https://www.igme.es/' },
    ],
    ctaTitle: 'Sprickor i dina väggar?',
    ctaText: 'Skicka foton med en linjal eller ett mynt bredvid för skalan. Vi säger om det bör undersökas.',
    minutes: 5,
    published: '2026-11-21',
  },
  {
    key: 'termieten',
    slug: 'termiter',
    title: 'Termiter i ditt hus i Spanien: känna igen och bekämpa',
    seoTitle: 'Termiter i Spanien: känna igen, bekämpa och kostnad',
    short: 'Termiter',
    description: 'Termiter i Andalusien: så känner du igen dem, skillnaden mot trämask, bekämpning med beten, kostnaden och vad du kontrollerar före köp.',
    lead: 'Underjordiska termiter finns på många håll i Andalusien, även i Axarquía. De äter upp träbjälkar, dörrkarmar och golvlister inifrån, ofta i åratal utan att någon märker det. Så känner du igen och bekämpar dem.',
    keyword: 'termiter spanien',
    dienst: 'onderhoud',
    onderwerp: 'Jag misstänker termiter eller trämask i mitt hus.',
    answer: 'Du känner igen termiter på <strong>lergångar</strong> på väggar och grund, <strong>trä som låter ihåligt</strong> eller smular sönder och <strong>svärmande bevingade insekter</strong> på våren. Bekämpning med beten (<em>cebos</em>) kostar oftast <strong>900 till 2 000 €</strong>, en kemisk barriär 300 till 600 €. Att byta angripna bjälkar tillkommer.',
    sections: [
      {
        id: 'kanna-igen',
        h: 'Så känner du igen termiter',
        html: `<ul>
<li><strong>Lergångar</strong>: smala bruna rör av jord på grunden, väggarna eller bakom golvlister. Termiterna bygger dem för att hålla sig fuktiga och i mörker.</li>
<li><strong>Ihåligt trä</strong>: knacka på dörrkarmar, golvlister och bjälkar. Låter det ihåligt eller går en skruvmejsel lätt in är det uppätet inifrån.</li>
<li><strong>Svärmar</strong>: på våren (februari till maj), ofta efter regn, flyger bevingade termiter ut. Efteråt hittar du lösa vingar på fönsterbänken.</li>
<li><strong>Bubblig färg</strong> eller vågigt trä utan synlig orsak.</li>
</ul>`,
      },
      {
        id: 'tramask',
        h: 'Termiter eller trämask?',
        table: {
          head: ['', 'Underjordiska termiter', 'Trämask (carcoma)'],
          rows: [
            ['Det du ser', 'Lergångar, inga hål på ytan', 'Runda hål på 1 – 3 mm och fint borrmjöl'],
            ['Var', 'Trä som har kontakt med fuktiga väggar eller marken', 'Torrt trä, möbler, bjälkar'],
            ['Tempo', 'Snabbt, kan bli farligt för konstruktionen', 'Långsamt, under flera år'],
            ['Åtgärd', 'Bekämpa kolonin med beten eller barriär', 'Injicera eller behandla träet'],
          ],
        },
      },
      {
        id: 'bekampning',
        h: 'Bekämpning och kostnad',
        table: {
          head: ['Behandling', 'Vad som ingår', 'Riktpris'],
          rows: [
            ['Inspektion', 'Kontroll av hus och trädgård, med fuktmätare', '100 – 250 €'],
            ['Kemisk barriär', 'Injektioner i mark och väggar runt huset', '300 – 600 €'],
            ['Betessystem (cebos)', 'Betesstationer runt huset, kontroll under månader tills kolonin är död', '900 – 2 000 €'],
            ['Byta träbjälkar eller karmar', 'Efter bekämpningen, beroende på skadan', '500 – 10 000 €+'],
          ],
          note: 'Anlita ett godkänt företag (registrerat i ROESB-registret i Andalusien). Riktpriser exklusive moms.',
        },
        after: '<p>Ett betessystem verkar långsammare, men når hela kolonin. Undersökningar av CSIC i Andalusien visade att kolonier med beten och god uppföljning försvann helt.</p>',
      },
      {
        id: 'forebygga',
        h: 'Förebygga och köpa',
        html: '<p>Termiter älskar fukt och trä med markkontakt. Håll ved och gamla bjälkar borta från huset, åtgärda läckor och fukt och låt behandla träbjälkar vid en renovering. Köper du ett gammalt byhus eller en finca? Låt också kontrollera termiter vid <a href="/sv/besiktning/">besiktningen före köp</a>.</p>',
      },
    ],
    faq: [
      { q: 'Är termiter vanliga i Axarquía?', a: 'Underjordiska termiter finns i stora delar av Andalusien, både i bykärnor och på landsbygden. Alla hus drabbas inte, men i gamla hus med träbjälkar och fukt är en kontroll klok.' },
      { q: 'Är termiter farliga för konstruktionen?', a: 'De kan försvaga träbjälkar i bjälklag och tak så mycket att de hänger ner eller går av. I de flesta moderna hus med betongbjälklag begränsas skadan till karmar, dörrar och golvlister.' },
      { q: 'Kan jag bekämpa termiter själv?', a: 'Sprayer från byggvaruhuset dödar bara de termiter du ser. Kolonin lever vidare i marken. För ett varaktigt resultat krävs ett professionellt betessystem eller en barriär.' },
    ],
    links: [
      { href: '/sv/besiktning/', label: 'Besiktning före köp' },
      { href: '/sv/renovering/', label: 'Renovering och ombyggnad' },
      { href: '/sv/guider/skadedjur-spanien/', label: 'Guide: skadedjur i ditt hus i Spanien' },
      { href: '/sv/problem/fukt-och-mogel/', label: 'Fukt och mögel i huset' },
    ],
    related: ['problems:vocht', 'problems:scheuren', 'costs:dak'],
    sources: [
      { name: 'CSIC (IPNA), studie om termitbekämpning med beten i Andalusien (2025)', url: 'https://www.ipna.csic.es/sites/default/files/2025-04/20250421%20NP%20Estudio%20tratamiento%20pionero%20eliminaci%C3%B3n%20termitas.pdf' },
      { name: 'Habitissimo, prisguide bekämpning av trämask och termiter', url: 'https://www.habitissimo.es/presupuestos/tratar-carcoma-y-o-termitas' },
      { name: 'Decreto 60/2012 (Junta de Andalucía), register över skadedjursföretag (ROESB)', url: 'https://cdn.juntadeandalucia.es/boja/2012/60/d1.pdf' },
    ],
    ctaTitle: 'Termiter eller trämask?',
    ctaText: 'Skicka foton av träet och av eventuella lergångar. Vi ordnar inspektion, bekämpning och reparation.',
    minutes: 5,
    published: '2026-11-21',
  },
  {
    key: 'legionella',
    slug: 'legionella',
    title: 'Legionella i fritidshus, pool eller bubbelpool',
    seoTitle: 'Legionella i fritidshuset i Spanien: risk och förebyggande',
    short: 'Legionella',
    description: 'Hur stor är risken för legionella i ett tomt fritidshus, en pool eller en bubbelpool i Spanien? Var bakterierna växer och vad du gör när du kommer.',
    lead: 'Legionella växer i stillastående ljummet vatten. Ett fritidshus som står tomt i månader i ett varmt klimat är därför en risk, oftare än själva poolen. Så förebygger du.',
    keyword: 'legionella fritidshus',
    dienst: 'sleutelbeheer',
    onderwerp: 'Jag vill få vattenledningarna, varmvattenberedaren eller bubbelpoolen i mitt hus spolade och kontrollerade.',
    answer: 'Den största risken finns inte i en korrekt klorerad pool, utan i <strong>rör, varmvattenberedare, vattentank och duschmunstycken</strong> i ett hus som stått tomt länge, och i <strong>bubbelpooler</strong>. Låt alla kranar och duschar rinna några minuter när du kommer, ställ varmvattenberedaren på minst 60 °C och låt rengöra tank och bubbelpool varje år.',
    sections: [
      {
        id: 'var',
        h: 'Var växer legionella?',
        table: {
          head: ['Plats', 'Risk', 'Varför'],
          rows: [
            ['Rör och duschar i ett tomt hus', 'Hög', 'Vattnet står i veckor och blir ljummet på sommaren'],
            ['Elektrisk varmvattenberedare under 50 °C', 'Hög', 'Idealisk temperatur för bakterierna'],
            ['Vattentank (depósito eller aljibe) på en finca', 'Medel till hög', 'Stillastående vatten, värme, avlagringar'],
            ['Bubbelpool eller spabad', 'Hög', 'Varmt vatten som finfördelas i luften'],
            ['Pool med rätt klor- eller salthalt', 'Låg', 'Desinfektionen dödar bakterierna'],
            ['Vattenspridare och utedusch', 'Medel', 'Ljummet vatten i slangar, finfördelning'],
          ],
        },
        after: '<p>Man smittas genom att andas in små droppar, till exempel i duschen. Att dricka vattnet är ingen smittväg. Äldre, rökare och personer med nedsatt immunförsvar löper störst risk.</p>',
      },
      {
        id: 'ankomst',
        h: 'Det här gör du när du kommer',
        html: `<ol>
<li>Ställ varmvattenberedaren på minst 60 °C och låt den värmas upp i några timmar.</li>
<li>Låt alla kranar och duschar (varmt och kallt) rinna några minuter med ett fönster öppet. Håll duschmunstycket lågt eller ta av det.</li>
<li>Låt även uteduschen och trädgårdsslangarna rinna.</li>
<li>Avkalka duschmunstycken och perlatorer en gång om året, eller byt dem.</li>
</ol>
<p>Kommer du tillbaka först efter flera månader? Låt då spola några dagar innan. Inom <a href="/sv/tillsyn/">tillsyn av huset</a> låter vi kranarna rinna vid varje besök.</p>`,
      },
      {
        id: 'uthyrning',
        h: 'Om du hyr ut',
        html: '<p>Hyr du ut ditt hus till semestergäster ansvarar du för att vattnet är säkert. Utbrott av legionella i semesterbostäder hamnar i nyheterna och kan leda till skadeståndskrav. Ha en fast rutin: spolning före varje ankomst, varmvattenberedaren på rätt temperatur, årlig rengöring av tank och bubbelpool och vid behov ett vattenprov.</p>',
      },
      {
        id: 'kostnad',
        h: 'Vad kostar kontroll och rengöring?',
        table: {
          head: ['Arbete', 'Riktpris'],
          rows: [
            ['Vattenprov för legionella i ett ackrediterat laboratorium', '60 – 150 € per prov'],
            ['Rengöra och desinficera vattentank (depósito, aljibe)', '150 – 400 €'],
            ['Rengöra och desinficera bubbelpool', '100 – 250 €'],
            ['Termisk eller kemisk desinfektion av installationen', '300 – 800 €'],
            ['Spolning vid varje besök', 'Ingår i tillsynen'],
          ],
          note: 'Riktpriser exklusive moms.',
        },
      },
    ],
    faq: [
      { q: 'Kan jag smittas av legionella i poolen?', a: 'I en pool med rätt klor- eller salthalt är risken låg. En pool som stått i månader utan skötsel kan ge andra problem, som alger. En bubbelpool är en större risk, eftersom vattnet är varmt och finfördelas.' },
      { q: 'Vilka besvär ger legionella?', a: 'Legionella kan ge lunginflammation (legionärssjuka) med feber, hosta och muskelvärk, två till tio dagar efter smittan. Får du de här besvären efter en vistelse, sök vård och berätta var du har varit.' },
      { q: 'Gäller den spanska legionellalagen för mitt hus?', a: 'De spanska reglerna för att förebygga legionella (Real Decreto 487/2022) gäller främst anläggningar med högre risk som hotell, offentliga bad och stora vattensystem. Ett vanligt bostadshus omfattas till största delen inte, men åtgärderna är kloka även hemma.' },
    ],
    links: [
      { href: '/sv/tillsyn/', label: 'Tillsyn och nyckelservice' },
      { href: '/sv/pool/', label: 'Poolbygge och poolskötsel' },
      { href: '/sv/guider/overvintra-i-spanien/', label: 'Guide: övervintra i Spanien' },
      { href: '/sv/guider/vattenfilter-spanien/', label: 'Guide: vattenfilter i Spanien' },
    ],
    related: ['costs:zwembad', 'problems:inbraak', 'problems:vocht'],
    sources: [
      { name: 'Real Decreto 487/2022, krav för att förebygga legionella', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2022-10297' },
      { name: 'Ministerio de Sanidad, legionellos', url: 'https://www.sanidad.gob.es/areas/sanidadAmbiental/calidadAguas/legionelosis/home.htm' },
      { name: 'Folkhälsomyndigheten, legionellainfektion', url: 'https://www.folkhalsomyndigheten.se/smittskydd-beredskap/smittsamma-sjukdomar/legionellainfektion/' },
    ],
    ctaTitle: 'Ett säkert hus när du kommer?',
    ctaText: 'Vi spolar ledningarna, kontrollerar varmvattenberedaren och rengör tank och bubbelpool, så att allt är klart när du kommer.',
    minutes: 5,
    published: '2026-11-21',
  },
  {
    key: 'inbraak',
    slug: 'inbrott-och-ockupation',
    title: 'Inbrott och husockupanter i ditt fritidshus i Spanien',
    seoTitle: 'Inbrott och ockupanter (okupas) i Spanien: skydda ditt hus',
    short: 'Inbrott och ockupation',
    description: 'Så skyddar du ditt fritidshus i Axarquía mot inbrott och ockupanter (okupas): larm, säkerhetsdörr, ett hus som ser bebott ut och vad du gör efteråt.',
    lead: 'Ett hus som står tomt i månader lockar inbrottstjuvar och, ibland, ockupanter. Den goda nyheten: med några enkla åtgärder och någon som regelbundet tittar till huset minskar risken kraftigt.',
    keyword: 'inbrott fritidshus spanien',
    dienst: 'sleutelbeheer',
    onderwerp: 'Jag vill skydda mitt hus mot inbrott och ockupanter.',
    answer: 'Det bästa skyddet är ett hus som <strong>inte ser tomt ut</strong>, en <strong>säkerhetsdörr</strong> och ett <strong>larm med larmcentral</strong> (30 – 50 € per månad). Upptäcker du ett inbrott eller ockupanter: gå inte in själv, ring <strong>Guardia Civil (062)</strong> eller 112 och gör en polisanmälan (<em>denuncia</em>). Ju snabbare du agerar, desto enklare.',
    sections: [
      {
        id: 'atgarder',
        h: 'Åtgärder och vad de kostar',
        table: {
          head: ['Åtgärd', 'Riktpris'],
          rows: [
            ['Larm med larmcentral och kameror (abonnemang)', '30 – 50 € per månad'],
            ['Säkerhetsdörr (puerta acorazada eller blindada)', '1 000 – 2 500 €'],
            ['Inbrottssäkra låscylindrar för befintliga dörrar', '100 – 250 € per dörr'],
            ['Fönstergaller (rejas) på bottenvåningen', '150 – 400 € per fönster'],
            ['Timer, smarta lampor och rörelsesensorer', '100 – 500 €'],
            ['Regelbunden kontroll inom tillsynen, med foton', 'se tillsyn'],
          ],
          note: 'Riktpriser inklusive montering, exklusive moms.',
        },
      },
      {
        id: 'inte-tomt',
        h: 'Se till att huset inte ser tomt ut',
        html: `<ul>
<li>Låt tömma brevlådan och ta bort reklam.</li>
<li>Låt sköta trädgård och pool. En igenvuxen trädgård avslöjar att ingen är där.</li>
<li>Använd timer eller smarta lampor och låt persiennerna öppnas och stängas då och då.</li>
<li>Berätta för grannarna vem som kommer förbi och ge dem ett telefonnummer.</li>
<li>Skriv inte i sociala medier att du reser hem.</li>
</ul>
<p>Med <a href="/sv/tillsyn/">tillsyn av huset</a> kommer någon förbi på fasta tider, sköter allt detta och åker direkt dit vid ett larm eller en storm.</p>`,
      },
      {
        id: 'ockupanter',
        h: 'Ockupanter (okupas): vad säger lagen?',
        html: '<p>Ett möblerat fritidshus räknas i Spanien som en bostad (<em>morada</em>). Den som tar sig in utan lov gör sig skyldig till olaga intrång (<em>allanamiento de morada</em>). Upptäcker och anmäler du det snabbt kan polisen ingripa direkt. Ju längre ockupanterna stannar, desto svårare blir det och desto oftare krävs en domstol. Sedan 2018 kan privata ägare dessutom begära avhysning i ett snabbare civilrättsligt förfarande (Ley 5/2018). Att upptäcka det snabbt är alltså det viktigaste.</p>',
      },
      {
        id: 'efter-inbrott',
        h: 'Det här gör du efter ett inbrott',
        html: `<ol>
<li>Gå inte in om du tror att någon fortfarande är kvar. Ring 112 eller Guardia Civil (062).</li>
<li>Gör en polisanmälan (<em>denuncia</em>) hos Guardia Civil eller Policía Nacional. Det går delvis också online. Du behöver anmälan för försäkringen.</li>
<li>Fotografera skadan och gör en lista över det som saknas.</li>
<li>Låt laga lås och fönster direkt, så att huset blir säkert igen.</li>
<li>Anmäl skadan till ditt försäkringsbolag.</li>
</ol>`,
      },
    ],
    faq: [
      { q: 'Hur vanligt är inbrott i Axarquía?', a: 'Mindre vanligt än i storstäder och livliga turistorter, men fritidshus som står tomma länge är ett känt mål. Särskilt under vintermånaderna och för avsides belägna fincor.' },
      { q: 'Betalar försäkringen vid inbrott i ett tomt hus?', a: 'Många försäkringar ställer villkor, till exempel krav på lås eller ett högsta antal dagar som huset får stå tomt. Läs villkoren noga (ofta under ”deshabitación”) och berätta för försäkringsbolaget att det är ett fritidshus.' },
      { q: 'Får jag själv kasta ut ockupanter?', a: 'Nej. Gör aldrig det själv: du kan då själv göra dig skyldig till brott. Ring polisen och anlita en advokat. Ju snabbare du anmäler, desto snabbare är det löst.' },
    ],
    links: [
      { href: '/sv/tillsyn/', label: 'Tillsyn och nyckelservice' },
      { href: '/sv/guider/overvintra-i-spanien/', label: 'Guide: övervintra i Spanien' },
      { href: '/sv/guider/inbrottsskydd-hus-spanien/', label: 'Guide: inbrottsskydd för huset' },
      { href: '/sv/underhall/', label: 'Underhåll och reparationer' },
    ],
    related: ['problems:legionella', 'problems:daklekkage', 'costs:buitenkeuken'],
    sources: [
      { name: 'Código Penal, art. 202 (allanamiento de morada) och art. 245 (usurpación)', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1995-25444' },
      { name: 'Ley 5/2018, snabbare avhysning från ockuperade bostäder', url: 'https://www.boe.es/buscar/doc.php?id=BOE-A-2018-8575' },
      { name: 'Guardia Civil, göra en polisanmälan (denuncia)', url: 'https://www.guardiacivil.es/' },
    ],
    ctaTitle: 'Ditt hus i goda händer när du är borta',
    ctaText: 'Regelbundna kontroller, foton och snabbt någon på plats vid ett larm. Fråga om möjligheterna.',
    minutes: 6,
    published: '2026-11-21',
  },
  {
    key: 'stroom',
    slug: 'stromavbrott',
    title: 'Strömmen går hela tiden i ditt hus i Spanien: orsak och lösning',
    seoTitle: 'Strömmen går hela tiden i huset i Spanien: lösningar',
    short: 'Strömavbrott',
    description: 'Går strömmen hela tiden i ditt hus i Axarquía? För låg abonnerad effekt, jordfelsbrytare eller nätstörning, och vad lösningen kostar.',
    lead: 'Vattenkokaren på, luftkonditioneringen på, och huset blir mörkt. Eller strömmen går efter en regnskur medan du är i Sverige. Nästan alltid ligger en av fyra orsaker bakom.',
    keyword: 'strömavbrott spanien',
    dienst: 'energie',
    onderwerp: 'Strömmen går hela tiden i mitt hus.',
    answer: 'Går strömmen när du slår på flera apparater samtidigt är din <strong>abonnerade effekt för låg</strong>. Löser <strong>jordfelsbrytaren (diferencial)</strong> ut, ofta efter regn, läcker ström till jord någonstans, oftast via utebelysning, en varmvattenberedare eller ett fuktigt uttag. Är hela byn mörk är det en <strong>störning i nätet</strong>.',
    sections: [
      {
        id: 'kanna-igen',
        h: 'Varför går strömmen?',
        table: {
          head: ['Det du ser', 'Trolig orsak'],
          rows: [
            ['Strömmen går när luftkonditionering, ugn och vattenkokare är på samtidigt', 'För låg abonnerad effekt (potencia contratada) eller överbelastad säkringsgrupp'],
            ['Jordfelsbrytaren (diferencial) löser ut, ofta efter regn eller på natten', 'Jordfel: fukt i utebelysning, uttag eller en apparat'],
            ['En säkringsgrupp går varje gång en viss apparat startar', 'Trasig apparat, till exempel varmvattenberedare, poolpump eller kylskåp'],
            ['Strömmen går vid åska', 'Överspänning eller nätstörning'],
            ['Hela huset och grannarna är mörka', 'Störning hos nätägaren (i Axarquía oftast e-distribución)'],
          ],
        },
      },
      {
        id: 'sjalv',
        h: 'Det här kan du göra själv',
        html: `<ul>
<li>Titta i elcentralen vilken brytare som är nere: huvudbrytaren (för mycket effekt), jordfelsbrytaren eller en enskild säkringsgrupp.</li>
<li>Löser jordfelsbrytaren ut: slå av alla säkringsgrupper, slå på jordfelsbrytaren och slå sedan på grupperna en i taget. Där den löser ut igen ligger problemet.</li>
<li>Dra ur alla kontakter i den gruppen och försök igen. Så hittar du apparaten med felet.</li>
<li>Är hela byn mörk, anmäl störningen till nätägaren. Numret står på elräkningen.</li>
<li>Arbeta aldrig själv i elcentralen eller med blöta uttag.</li>
</ul>`,
      },
      {
        id: 'losning',
        h: 'Lösningen och vad den kostar',
        table: {
          head: ['Lösning', 'Vid', 'Riktpris'],
          rows: [
            ['Felsökning av elektriker', 'Jordfelsbrytaren löser ut gång på gång', '80 – 250 €'],
            ['Vattentät utebelysning och vattentäta uttag', 'Jordfel efter regn', '60 – 150 € per punkt'],
            ['Höja abonnerad effekt, med boletín', 'För låg effekt', '150 – 500 €'],
            ['Extra säkringsgrupp eller ny elcentral', 'Överbelastad grupp', '150 – 1 000 €'],
            ['Överspänningsskydd', 'Avbrott vid åska', '150 – 400 €'],
            ['Byta hela elsystemet', 'Gammal installation utan jord', 'se <a href="/sv/kostnader/byta-elsystem/">kostnader för elsystem</a>'],
          ],
          note: 'Riktpriser exklusive moms.',
        },
      },
      {
        id: 'tomt',
        h: 'Strömavbrott i ett tomt hus',
        html: '<p>Går strömmen medan du inte är där tinar frysen, poolpumpen står still och larmet slutar till slut att fungera. Två saker hjälper: en smart mätare eller strömsensor som skickar ett meddelande, och någon som snabbt kan vara på plats. Med <a href="/sv/tillsyn/">tillsyn av huset</a> kommer någon förbi, slår på elcentralen igen och kontrollerar orsaken.</p>',
      },
    ],
    faq: [
      { q: 'Vad betyder ICP i min elcentral?', a: 'ICP (Interruptor de Control de Potencia) var brytaren som begränsade effekten. I dag gör nätägarens smarta mätare det. Vid för hög effekt slår den av och efter några sekunder ofta på igen av sig själv.' },
      { q: 'Hur mycket effekt behöver jag?', a: 'För en lägenhet utan luftkonditionering räcker oftast 3,45 till 4,6 kW. Med luftkonditionering och induktionshäll 5,75 kW, med värmepump, poolpump eller laddbox 7 till 9,2 kW.' },
      { q: 'Kan jag höja effekten utan ett nytt boletín?', a: 'Ibland. Är installationen redan godkänd för den högre effekten räcker ett samtal till elbolaget. Är den äldre än tjugo år eller inte lämplig kräver nätägaren ett nytt boletín.' },
    ],
    links: [
      { href: '/sv/underhall/', label: 'Underhåll och reparationer' },
      { href: '/sv/tillsyn/', label: 'Tillsyn och nyckelservice' },
      { href: '/sv/kostnader/solceller/', label: 'Kostnader för solceller' },
      { href: '/sv/guider/elbolag-i-spanien-jamforelse/', label: 'Guide: elbolag i Spanien' },
    ],
    related: ['costs:elektra', 'problems:vocht', 'problems:inbraak'],
    sources: [
      { name: 'e-distribución, anmäla en störning', url: 'https://www.edistribucion.com/es/averias.html' },
      { name: 'CNMC, boletín eléctrico: vad det är och vad det används till', url: 'https://cnmc.es/sites/default/files/editor_contenidos/Energia/Consumidores/3.2%20Bolet%C3%ADn%20el%C3%A9ctrico%2C%20qu%C3%A9%20es%20y%20para%20qu%C3%A9%20sirve.pdf' },
    ],
    ctaTitle: 'Går strömmen hela tiden?',
    ctaText: 'Skicka ett foto av din elcentral och berätta när det händer. En elektriker hittar orsaken.',
    minutes: 5,
    published: '2026-11-21',
  },
  {
    key: 'waterdruk',
    slug: 'inget-vatten-eller-lagt-vattentryck',
    title: 'Inget vatten eller lågt vattentryck i ditt hus i Spanien',
    seoTitle: 'Inget vatten eller lågt vattentryck i Spanien: lösningar',
    short: 'Inget vatten eller lågt tryck',
    description: 'Kommer det knappt något vatten ur kranen i ditt hus i Axarquía? Störning, tom tank, torr brunn, trasig pump eller läcka, och vad lösningen kostar.',
    lead: 'Du kommer fram, öppnar kranen och ingenting kommer, eller bara en tunn stråle. På en finca med tank eller brunn, men också i ett byhus med kommunalt vatten, händer det oftare än man tror.',
    keyword: 'inget vatten hus spanien',
    dienst: 'onderhoud',
    onderwerp: 'Jag har inget vatten eller för lågt vattentryck i huset.',
    answer: 'I ett hus med kommunalt vatten är det oftast en <strong>störning eller ett avbrott i byn</strong>, en stängd huvudkran eller en läcka. På en finca med tank eller brunn är det ofta en <strong>tom tank</strong>, en <strong>trasig eller torrkörd pump</strong>, ett <strong>igensatt filter</strong> eller en brunn som ger mindre på sommaren.',
    sections: [
      {
        id: 'kanna-igen',
        h: 'Vad beror det på?',
        table: {
          head: ['Det du ser', 'Trolig orsak'],
          rows: [
            ['Inget vatten, och inte hos grannarna heller', 'Störning eller planerat avbrott hos vattenbolaget'],
            ['Inget vatten efter lång bortavaro', 'Huvudkranen stängd, eller avstängt på grund av en obetald räkning'],
            ['Pumpen startar och stannar hela tiden', 'Tryckkärlet saknar luft, eller läcka i ledningen'],
            ['Pumpen går men inget vatten kommer', 'Tank eller brunn tom, eller pumpen suger luft'],
            ['Trycket sjunker långsamt, grumligt vatten', 'Igensatt filter eller kalk i rör och kranar'],
            ['Hög vattenräkning eller blöt fläck i trädgården', 'Läcka i inkommande ledning'],
          ],
        },
      },
      {
        id: 'sjalv',
        h: 'Det här kan du göra själv',
        html: `<ul>
<li>Fråga grannarna eller kommunens vattenbolag om det är en störning.</li>
<li>Kontrollera huvudkranen vid vattenmätaren och kranen efter tanken.</li>
<li>Se efter hur mycket vatten som finns kvar i tanken. Beställ tankbil i god tid.</li>
<li>Stäng av pumpen om den går torr, annars brinner den.</li>
<li>Kontrollera om mätaren snurrar när alla kranar är stängda: då finns det en läcka.</li>
</ul>`,
      },
      {
        id: 'losning',
        h: 'Lösningen och vad den kostar',
        table: {
          head: ['Lösning', 'Vid', 'Riktpris'],
          rows: [
            ['Hitta och laga läckan', 'Läckande ledning', '200 – 1 000 €'],
            ['Byta eller fylla på tryckkärl', 'Pump som startar hela tiden', '150 – 500 €'],
            ['Ny pump med tryckkärl', 'Trasig pump', '600 – 1 500 €'],
            ['Byta filter, installera avkalkare', 'Lågt tryck, kalk', '150 – 1 500 €'],
            ['Större eller extra tank', 'Tanken är alltid tom', 'se <a href="/sv/kostnader/vattentank-och-avloppsbrunn/">kostnader för vattentank</a>'],
            ['Torrkörningsskydd och nivålarm', 'Skydda pumpen, larm vid tom tank', '150 – 400 €'],
          ],
          note: 'Riktpriser exklusive moms.',
        },
      },
      {
        id: 'borta',
        h: 'När du inte är där',
        html: '<p>En läcka i ett tomt hus kan pågå i månader, och en pump som går torr går sönder. Stäng huvudkranen och slå av pumpen när du åker, om inte trädgården behöver vatten. Med <a href="/sv/tillsyn/">tillsyn av huset</a> kontrollerar någon regelbundet mätare, tank och pump och förbereder huset inför din ankomst.</p>',
      },
    ],
    faq: [
      { q: 'Varför försvinner vattnet ibland på sommaren?', a: 'Efter torra år kan kommuner i Axarquía stänga av vattnet på natten eller vissa tider för att spara. En liten bufferttank med pump jämnar ut det.' },
      { q: 'Vad kostar en tankbil med vatten?', a: 'Räkna med 4 till 10 € per m³ inklusive leverans, beroende på avstånd och tillfartsväg.' },
      { q: 'Kan jag låta borra min brunn djupare?', a: 'Ibland, men det kräver tillstånd och är ingen garanti för mer vatten. Låt först kontrollera pump och ledning.' },
    ],
    links: [
      { href: '/sv/underhall/', label: 'Underhåll och reparationer' },
      { href: '/sv/kostnader/vattentank-och-avloppsbrunn/', label: 'Kostnader för vattentank, brunn och avlopp' },
      { href: '/sv/guider/bo-off-grid-i-spanien/', label: 'Guide: bo off grid i Spanien' },
    ],
    related: ['costs:water', 'problems:beerput', 'problems:stroom'],
    sources: [
      { name: 'Junta de Andalucía, vatten och vattenrättigheter', url: 'https://www.juntadeandalucia.es/medioambiente/portal/areas-tematicas/agua' },
    ],
    ctaTitle: 'Inget vatten eller för lågt tryck?',
    ctaText: 'Berätta hur ditt hus får vatten och vad som händer. En rörmokare hittar orsaken.',
    minutes: 5,
    published: '2026-11-21',
  },
  {
    key: 'beerput',
    slug: 'avloppsbrunn-full-eller-luktar',
    title: 'Avloppsbrunnen är full eller luktar: vad gör du?',
    seoTitle: 'Avloppsbrunn (fosa séptica) full eller luktar i Spanien',
    short: 'Avloppsbrunn',
    description: 'Luktar det avlopp eller rinner vattnet undan långsamt? Så känner du igen en full eller trasig avloppsbrunn (fosa séptica) och vad tömning eller byte kostar.',
    lead: 'På många fincor och i en del byhus går avloppet till en avloppsbrunn (slamavskiljare) i trädgården. Så länge den fungerar tänker ingen på den. Tills det luktar eller toaletten inte spolar undan.',
    keyword: 'fosa septica spanien',
    dienst: 'onderhoud',
    onderwerp: 'Min avloppsbrunn är full eller luktar.',
    answer: 'Lukt, långsamt avlopp eller kluckande rör tyder oftast på en <strong>full avloppsbrunn</strong>: tömning kostar 150 till 300 €. Kvarstår problemet, eller står det vatten på marken ovanför brunnen, är <strong>infiltrationen igensatt</strong> eller brunnen trasig. En ny avloppsbrunn kostar 2 500 till 6 000 €.',
    sections: [
      {
        id: 'kanna-igen',
        h: 'Vad är det som är fel?',
        table: {
          head: ['Det du ser eller känner', 'Trolig orsak'],
          rows: [
            ['Avloppslukt i trädgården, toaletten spolar undan långsamt', 'Avloppsbrunnen full'],
            ['Blöt, grön eller luktande fläck ovanför brunnen', 'Infiltrationen igensatt eller brunnen läcker'],
            ['Avloppslukt inne, särskilt i badrummet', 'Vattenlås som torkat ut eller saknad avluftning'],
            ['Kluckande golvbrunn eller diskho', 'Stopp eller full brunn'],
            ['Problem strax efter uthyrning eller en fest', 'För mycket vatten eller fett på kort tid'],
          ],
        },
      },
      {
        id: 'sjalv',
        h: 'Det här kan du göra själv',
        html: `<ul>
<li>Låt alla kranar och duschen rinna en stund efter lång bortavaro: ett uttorkat vattenlås släpper igenom avloppslukt.</li>
<li>Spola inte ner våtservetter, fett eller mycket klorin: det dödar bakterierna i brunnen.</li>
<li>Kör och parkera inte ovanpå brunnen eller infiltrationen.</li>
<li>Anteckna när brunnen senast tömdes.</li>
</ul>`,
      },
      {
        id: 'losning',
        h: 'Lösningen och vad den kostar',
        table: {
          head: ['Lösning', 'Vid', 'Riktpris'],
          rows: [
            ['Tömma avloppsbrunnen', 'Full brunn', '150 – 300 €'],
            ['Rensa avloppet', 'Stopp i ledningen', '100 – 300 €'],
            ['Installera avluftning', 'Lukt inne', '200 – 600 €'],
            ['Förnya infiltrationen', 'Blöt fläck ovanför infiltrationen', '1 500 – 4 000 €'],
            ['Ny avloppsbrunn eller minireningsverk', 'Trasig eller för liten brunn', 'se <a href="/sv/kostnader/vattentank-och-avloppsbrunn/">kostnader för avloppsbrunn</a>'],
          ],
          note: 'Riktpriser exklusive moms.',
        },
      },
      {
        id: 'uthyrning',
        h: 'Vid uthyrning och försäljning',
        html: '<p>Hyr du ut huset förbrukar ett fullt hus på en vecka lika mycket vatten som du gör på en månad. Låt kontrollera brunnen före säsongen. Vid försäljning frågar en noggrann köpare om avloppet: en trasig eller otillåten brunn är ett skäl att förhandla om priset. Läs också guiden <a href="/sv/guider/salja-hus-i-spanien/">sälja hus i Spanien</a>.</p>',
      },
    ],
    faq: [
      { q: 'Måste en avloppsbrunn tömmas regelbundet?', a: 'Ja, oftast vartannat till vart fjärde år. Vänta inte tills den svämmar över: då sätts även infiltrationen igen.' },
      { q: 'Behöver jag bakterier eller startmedel?', a: 'Oftast inte. En frisk brunn håller sig själv igång. Det kan hjälpa efter en period med mycket klorin eller rengöringsmedel.' },
      { q: 'Är min gamla brunn fortfarande tillåten?', a: 'En murad brunn utan botten, där avloppsvattnet går rakt ner i marken, uppfyller oftast inte dagens regler. Vid en ombyggnad eller ett klagomål kan ett byte krävas.' },
    ],
    links: [
      { href: '/sv/underhall/', label: 'Underhåll och reparationer' },
      { href: '/sv/kostnader/vattentank-och-avloppsbrunn/', label: 'Kostnader för vattentank, brunn och avlopp' },
      { href: '/sv/besiktning/', label: 'Besiktning före köp' },
    ],
    related: ['costs:water', 'problems:waterdruk', 'problems:vocht'],
    sources: [
      { name: 'Junta de Andalucía, utsläpp och avloppsvatten', url: 'https://www.juntadeandalucia.es/medioambiente/portal/areas-tematicas/agua' },
    ],
    ctaTitle: 'Problem med avloppsbrunnen?',
    ctaText: 'Berätta vad du ser och känner och skicka ett foto av platsen. Vi ordnar tömning, reparation eller byte.',
    minutes: 4,
    published: '2026-11-21',
  },
  {
    key: 'wateroverlast',
    slug: 'vattenskador-och-stodmur',
    title: 'Vatten mot huset efter skyfall och en stödmur som spricker',
    seoTitle: 'Vattenskador och stödmur: vad gör du efter en DANA?',
    short: 'Vattenskador och stödmur',
    description: 'Vatten mot eller i huset efter skyfall, en bortspolad tillfartsväg eller en stödmur som spricker eller lutar? Varningstecken, åtgärder och kostnader.',
    lead: 'På hösten kan det på några timmar falla mer regn än under hela sommaren. I en sluttning tar vattnet den kortaste vägen ner, och den går ibland mot eller genom ditt hus.',
    keyword: 'vattenskada hus spanien',
    dienst: 'onderhoud',
    onderwerp: 'Jag har vatten mot huset eller en stödmur som spricker.',
    answer: 'Vatten mot ett hus i en sluttning beror nästan alltid på <strong>saknad eller igensatt dränering</strong>: vatten från sluttningen, terrassen eller vägen som inte har någonstans att ta vägen. En stödmur som spricker, buktar ut eller lutar har oftast <strong>ingen dränering</strong> bakom sig. Låt kontrollera det snabbt: vid nästa skyfall kan den ge vika.',
    sections: [
      {
        id: 'kanna-igen',
        h: 'Varningstecken',
        table: {
          head: ['Det du ser', 'Vad det betyder'],
          rows: [
            ['Lera eller vatten mot bakväggen efter regn', 'Vatten från sluttningen har ingen avrinning vid huset'],
            ['Blöt vägg inne efter regn, på sluttningssidan', 'Inträngande fukt: jord och vatten mot väggen'],
            ['Stödmuren buktar ut, lutar eller har sneda sprickor', 'Vattentryck bakom muren, risk för ras'],
            ['Vatten kommer ut ur fogarna längst ner i muren', 'Muren dränerar, och det är bra; inget vatten alls är risken'],
            ['Fåror i tillfartsvägen', 'Vatten som rinner av utan ränna eller tvärränna'],
          ],
        },
      },
      {
        id: 'direkt',
        h: 'Det här gör du direkt',
        html: `<ul>
<li>Håll avstånd från en stödmur som rör sig eller spricker, och parkera inte under eller ovanför den.</li>
<li>Rensa rännor, brunnar och galler från löv och lera.</li>
<li>Led tillfälligt bort vattnet från huset med sandsäckar eller ett dike.</li>
<li>Ta daterade foton av skadorna för försäkringen.</li>
<li>Vid fara eller stora skador efter en storm: ring 112.</li>
</ul>`,
      },
      {
        id: 'losning',
        h: 'Lösningen och vad den kostar',
        table: {
          head: ['Lösning', 'Vid', 'Riktpris'],
          rows: [
            ['Dränering längs bakväggen', 'Vatten och fukt på sluttningssidan', '40 – 80 € per meter'],
            ['Avvattningsränna på terrass eller uppfart', 'Vatten som rinner mot huset', '60 – 150 € per meter'],
            ['Dränering bakom en befintlig stödmur', 'Mur utan avvattning', '80 – 200 € per meter'],
            ['Laga eller bygga om stödmuren', 'Mur som spricker eller har rasat', 'se <a href="/sv/kostnader/stodmur-och-dranering/">kostnader för stödmur</a>'],
            ['Laga tillfartsvägen med rännor', 'Bortspolad väg', '40 – 70 € per m²'],
          ],
          note: 'Riktpriser exklusive moms.',
        },
      },
      {
        id: 'forsakring',
        h: 'Försäkringen och Consorcio',
        html: '<p>I Spanien betalar ofta inte försäkringsbolaget självt vid skador av extremt regn, översvämning eller storm, utan <em>Consorcio de Compensación de Seguros</em>, en statlig fond. Men då måste du ha en byggnads- eller hemförsäkring. Anmäl skadan så snabbt som möjligt och spara foton och fakturor. Läs mer i guiden <a href="/sv/guider/hemforsakring-i-spanien/">hemförsäkring i Spanien</a>.</p>',
      },
    ],
    faq: [
      { q: 'Vad är en DANA?', a: 'En kall luftmassa på hög höjd som framför allt från september till november ger korta, mycket kraftiga skyfall. På några timmar kan det då falla över 100 mm.' },
      { q: 'Vem ansvarar för en stödmur vid tomtgränsen?', a: 'Det beror på vem som byggde muren och vems mark den håller uppe. Titta i lagfarten och fastighetsregistret (catastro) och prata med grannarna innan du lagar den.' },
      { q: 'Kan jag förebygga?', a: 'Ja. Låt kontrollera och rensa rännor, brunnar och dränering före hösten. Det ingår i underhåll och tillsyn.' },
    ],
    links: [
      { href: '/sv/underhall/', label: 'Underhåll och reparationer' },
      { href: '/sv/tillsyn/', label: 'Tillsyn och nyckelservice' },
      { href: '/sv/vader/september/', label: 'Vädret i september: DANA och första regnet' },
      { href: '/sv/tillfartsvag/', label: 'Tillfartsväg och mark' },
    ],
    related: ['costs:keermuur', 'problems:daklekkage', 'problems:scheuren'],
    sources: [
      { name: 'Consorcio de Compensación de Seguros, skador av extraordinära händelser', url: 'https://www.consorseguros.es/' },
      { name: 'AEMET, vad är en DANA', url: 'https://www.aemet.es/' },
    ],
    ctaTitle: 'Vatten mot huset eller en stödmur som spricker?',
    ctaText: 'Skicka foton av muren eller platsen dit vattnet rinner. Vi tittar på det och ger dig ett pris.',
    minutes: 5,
    published: '2026-11-21',
  },
  {
    key: 'schoorsteen',
    slug: 'kaminen-ryker-in',
    title: 'Kaminen ryker in eller drar dåligt: orsak och lösning',
    seoTitle: 'Öppen spis eller braskamin ryker in: orsaker och lösningar',
    short: 'Kaminen ryker in',
    description: 'Ryker din öppna spis eller braskamin in i rummet i Axarquía? Kall skorsten, fuktig ved, för lite luft eller en smutsig skorsten, och lösningen.',
    lead: 'Du tänder brasan och efter några minuter är rummet fullt av rök. I ett hus som varit stängt i månader händer det ofta. Oftast ligger en av fem orsaker bakom, och de flesta är enkla att åtgärda.',
    keyword: 'kaminen ryker in',
    dienst: 'schoorsteen',
    onderwerp: 'Min öppna spis eller braskamin ryker in.',
    answer: 'Ryker det bara när du tänder är <strong>skorstenen fortfarande kall</strong>. Ryker det hela tiden är skorstenen ofta <strong>smutsig eller igensatt</strong> av sot eller ett fågelbo, det kommer <strong>för lite luft</strong> in i rummet, eller <strong>vinden</strong> trycker tillbaka röken. Låt först sota och kontrollera skorstenen: det kostar 60 till 120 € och löser ofta problemet.',
    sections: [
      {
        id: 'orsak',
        h: 'Varför ryker kaminen in?',
        table: {
          head: ['Det du ser', 'Trolig orsak'],
          rows: [
            ['Rök bara när du tänder', 'Kall rökkanal, särskilt mot en yttervägg eller efter lång tid utan eld'],
            ['Rök hela tiden, även med en bra eld', 'Smutsig eller igensatt rökkanal: sot, tjära, ett bo eller lösa stenar'],
            ['Bättre med ett fönster på glänt', 'För lite tilluft: ett tätt hus eller en köksfläkt som suger ut luft'],
            ['Bara vid vind från ett visst håll', 'Vinden trycker tillbaka röken, på grund av en högre granne, en sluttning eller en för kort skorsten'],
            ['Mycket rök, fräsande, svart eld', 'Fuktig ved'],
            ['Röklukt i ett annat rum eller hos grannen', 'Spricka i rökkanalen: låt kontrollera direkt'],
          ],
        },
      },
      {
        id: 'sjalv',
        h: 'Det här kan du göra själv',
        html: `<ul>
<li><strong>Förvärm skorstenen</strong> med brinnande tidningspapper längst ner i rökkanalen, och börja med finkluven, torr tändved.</li>
<li><strong>Öppna ett fönster på glänt</strong> och stäng av köksfläkten.</li>
<li><strong>Elda torr ved</strong> med under 20 % fukt, till exempel oliv- eller mandelträ som torkat ett år.</li>
<li><strong>Titta uppåt</strong> med en ficklampa när spisen är kall: ser du inget ljus sitter något i kanalen.</li>
<li><strong>Sätt upp en kolmonoxidvarnare</strong> i rummet med öppen spis eller kamin. Den kostar 25 till 50 €.</li>
</ul>`,
      },
      {
        id: 'losning',
        h: 'Lösningar och kostnader',
        table: {
          head: ['Lösning', 'När', 'Riktpris'],
          rows: [
            ['Sota och kontrollera skorstenen', 'Alltid första steget', '60 – 120 €'],
            ['Skorstenshuv eller dragförstärkare', 'När vinden trycker tillbaka röken', '150 – 400 €'],
            ['Förlänga skorstenen', 'När den slutar för lågt över tak eller nock', '300 – 1 200 €'],
            ['Ventilationsgaller eller uteluftsanslutning', 'Vid för lite tilluft', '100 – 400 €'],
            ['Insatsrör i rostfritt stål', 'Vid en för vid, sprucken eller otät kanal', '1 000 – 2 500 €'],
          ],
          note: 'Fler priser för sotning, reparation och en ny kamin: se <a href="/sv/kostnader/skorsten-och-braskamin/">kostnader för skorsten och braskamin</a>.',
        },
      },
      {
        id: 'fara',
        h: 'När är det farligt?',
        html: '<p>Rök i huset är besvärligt, men kolmonoxid kan du varken se eller känna lukten av. Får du huvudvärk, yrsel eller illamående vid brasan, gå ut och elda inte mer förrän skorstenen är kontrollerad. Känner du röklukt i ett annat rum eller hos grannen, eller ser du sotfläckar på en vägg, är kanalen troligen sprucken.</p>',
      },
    ],
    faq: [
      { q: 'Varför ryker det bara i början av vintern?', a: 'En rökkanal som varit kall och fuktig i månader drar dåligt tills den blivit varm. Ett fågelbo kan också ha byggts på våren. Låt sota skorstenen i september eller oktober.' },
      { q: 'Hjälper en skorstenshuv alltid?', a: 'Bara om vinden är orsaken. Vid en smutsig kanal eller för lite luft hjälper den inte. Låt därför först fastställa orsaken.' },
      { q: 'Kan en braskamin sättas i en gammal öppen spis?', a: 'Ofta ja, med ett insatsrör i rostfritt stål genom den befintliga skorstenen. Det löser de flesta rökproblem direkt och ger mycket mer värme.' },
    ],
    links: [
      { href: '/sv/kostnader/skorsten-och-braskamin/', label: 'Kostnader för skorsten och braskamin' },
      { href: '/sv/gor-det-sjalv/installera-braskamin/', label: 'Installera braskamin' },
      { href: '/sv/guider/forbereda-huset-for-vintern-i-spanien/', label: 'Guide: förbereda huset för vintern' },
      { href: '/sv/underhall/', label: 'Underhåll och reparationer' },
    ],
    related: ['costs:schoorsteen', 'problems:tocht', 'problems:vocht'],
    sources: [
      { name: 'BOE, RITE (värmeinstallationer i byggnader)', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2007-15820' },
    ],
    ctaTitle: 'Ryker kaminen in?',
    ctaText: 'Skicka ett foto av spisen eller kaminen och av skorstenen på taket, och berätta när det händer. Du får råd och ett pris.',
    minutes: 4,
    published: '2026-11-21',
  },
  {
    key: 'tocht',
    slug: 'drag-och-kondens-vid-fonster',
    title: 'Drag och kondens vid fönstren i ditt hus i Spanien: orsak och lösning',
    seoTitle: 'Drag och kondens på fönster i Spanien: orsak och lösning',
    short: 'Drag och kondens',
    description: 'Immar dina fönster igen på vintern och drar det? Varför enkelglas och kalla aluminiumkarmar orsakar det och vad nya fönster eller nytt glas kostar.',
    lead: 'Spanska hus är byggda för sommaren. På vintern sitter du bakom enkelglas i tunna aluminiumkarmar, med kallt drag längs golvet och vattenpölar på fönsterbänken på morgonen. Det är inte bara obehagligt, det leder också till mögel.',
    keyword: 'kondens på fönster spanien',
    dienst: 'ramen',
    onderwerp: 'Jag har drag eller kondens vid mina fönster.',
    answer: 'Kondens på fönster uppstår när <strong>fuktig inomhusluft möter en kall yta</strong>: enkelglas och aluminiumkarmar utan köldbryggsbrytning. Drag kommer oftast från <strong>slitna tätningslister och fogar</strong> runt karmar och rullgardinslådor. Vädring och tätning hjälper mycket; den egentliga lösningen är tvåglasfönster i en isolerad karm, från omkring 400 € per fönster.',
    sections: [
      {
        id: 'orsak',
        h: 'Var kommer det ifrån?',
        table: {
          head: ['Det du ser', 'Trolig orsak'],
          rows: [
            ['Droppar på glaset, särskilt på morgonen', 'Enkelglas och fuktig luft från sömn, matlagning och dusch'],
            ['Vatten och svarta prickar på karmen', 'Aluminiumkarm utan köldbryggsbrytning: metallen är iskall'],
            ['Drag vid fönstret', 'Slitna borstlister eller tätningar, glipor mellan karm och vägg'],
            ['Kall luft från persiennlådan', 'Oisolerad persiennlåda (cajón de persiana)'],
            ['Mögel i hörnet vid fönstret', 'Köldbrygga i väggen och för lite ventilation'],
          ],
        },
      },
      {
        id: 'sjalv',
        h: 'Det här kan du göra själv',
        html: `<ul>
<li><strong>Vädra varje dag</strong>, tio minuter korsdrag, även på vintern.</li>
<li><strong>Torka bort kondensen på morgonen</strong>, så att den inte tränger in i karm eller vägg.</li>
<li><strong>Använd en avfuktare</strong> i sovrummen och i ett tomt hus.</li>
<li><strong>Byt borstlister och tätningar</strong> på skjutfönster och täta glipor mellan karm och vägg.</li>
<li><strong>Isolera persiennlådan</strong> med isolerskiva och tätningslist.</li>
</ul>`,
      },
      {
        id: 'losning',
        h: 'Lösningar och kostnader',
        table: {
          head: ['Lösning', 'Förklaring', 'Riktpris'],
          rows: [
            ['Byta tätningar och fogar', 'Per fönster, borstlister, tätningar och fogmassa', '50 – 150 €'],
            ['Isolera persiennlåda', 'Per låda', '80 – 200 €'],
            ['Tvåglas i befintlig karm', 'Om karmen är bra och lämplig', '100 – 250 € per m²'],
            ['Nytt tvåglasfönster', 'Aluminium RPT eller PVC, omkring 120 × 120 cm', '350 – 800 €'],
          ],
          note: 'Mer om material, glas och tillstånd: se <a href="/sv/kostnader/fonster-och-karmar/">kostnader för fönster och karmar</a>.',
        },
      },
    ],
    faq: [
      { q: 'Är kondens på fönstren farligt?', a: 'Lite kondens en kall morgon är normalt. Rinner det varje dag och blir karmen eller väggen svart uppstår mögel. Då behövs mer ventilation eller bättre glas.' },
      { q: 'Förhindrar tvåglas all kondens?', a: 'Det mesta, eftersom den inre rutan förblir varmare. Är luften i huset mycket fuktig måste du fortsätta vädra. Se även fukt och mögel.' },
      { q: 'Hjälper nya fönster också på sommaren?', a: 'Ja. Med solskyddsglas och persienner håller sig huset svalare, så att luftkonditioneringen behöver gå mindre.' },
    ],
    links: [
      { href: '/sv/kostnader/fonster-och-karmar/', label: 'Kostnader för fönster och karmar' },
      { href: '/sv/gor-det-sjalv/byta-fonster-sjalv/', label: 'Byta fönster själv' },
      { href: '/sv/problem/fukt-och-mogel/', label: 'Fukt och mögel' },
      { href: '/sv/guider/forbereda-huset-for-vintern-i-spanien/', label: 'Guide: förbereda huset för vintern' },
    ],
    related: ['costs:ramen', 'problems:vocht', 'costs:airco'],
    sources: [
      { name: 'Código Técnico de la Edificación, DB HE (energibesparing)', url: 'https://www.codigotecnico.org/DocumentosCTE/AhorroEnergia.html' },
      { name: 'IDAE, bidrag för energibesparing i bostäder', url: 'https://www.idae.es/ayudas-y-financiacion' },
    ],
    ctaTitle: 'Problem med drag eller kondens?',
    ctaText: 'Skicka foton av dina fönster och av ställena med kondens eller mögel. Du får råd och ett pris.',
    minutes: 4,
    published: '2026-11-21',
  },
];
