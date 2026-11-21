import type { Topic } from './types';

// Kostnadssidor på svenska. Belopp: riktpriser Axarquía, inkl. material och arbete, exkl. moms.
// Hoofdzoekwoorden met "spanien" erachter: Zweden zoeken op "renovera badrum kostnad" vooral voor
// een huis in Zweden; wij richten ons op eigenaren met een huis in Spanje.
export const costsSv: Topic[] = [
  {
    key: 'badkamer',
    slug: 'renovera-badrum',
    title: 'Vad kostar det att renovera badrum i Spanien?',
    seoTitle: 'Renovera badrum i Spanien: kostnad i Axarquía (2026)',
    short: 'Badrum',
    description: 'Vad kostar ett nytt badrum i Axarquía? Priser för en uppfräschning, en totalrenovering och en golvdusch, och vad som styr priset.',
    lead: 'Ett nytt badrum är den renovering vi gör oftast i Axarquía. Här ser du vad det kostar, från nytt porslin till ett helt nytt badrum med golvdusch.',
    keyword: 'renovera badrum spanien kostnad',
    dienst: 'badkamer-keuken',
    onderwerp: 'Jag vill gärna ha en offert på renovering av mitt badrum.',
    answer: 'Ett komplett badrum på 4 till 6 m² kostar i Axarquía oftast <strong>6 000 till 12 000 €</strong> exklusive moms, inklusive rivning, rör, kakel och porslin. Att bara byta porslin och blandare går från cirka 2 500 €. Ett stort badrum med måttbeställda lösningar kostar upp till 18 000 – 25 000 €.',
    sections: [
      {
        id: 'priser',
        h: 'Priser per typ av badrumsrenovering',
        html: '<p>Riktpriser för 2026, inklusive material och arbete, exklusive moms.</p>',
        table: {
          head: ['Arbete', 'Vad som ingår', 'Riktpris'],
          rows: [
            ['Uppfräschning', 'Ny toalett, handfat och blandare, nya silikonfogar, målning. Kaklet sitter kvar.', '2 500 – 5 000 €'],
            ['Badkaret ut, golvdusch in', 'Badkaret rivs, plant duschgolv, glasvägg, kakel i duschen', '3 000 – 6 000 €'],
            ['Totalrenovering, litet badrum (4–6 m²)', 'Allt rivs ut, nya rör och avlopp, kakel på golv och väggar, porslin i mellanklass', '6 000 – 12 000 €'],
            ['Totalrenovering, stort badrum', 'Större yta, dubbla handfat, inbyggda blandare, bättre kakel', '12 000 – 18 000 €'],
            ['Lyx eller måttbeställt', 'Natursten eller mikrocement, måttbeställd kommod, golvvärme', '18 000 – 25 000 €+'],
          ],
          note: 'Ett extra badrum (nya avlopp, ibland tillstånd) börjar oftast runt 10 000 €.',
        },
      },
      {
        id: 'faktorer',
        h: 'Vad styr priset?',
        html: `<ul>
<li><strong>Rör och avlopp.</strong> I äldre byhus finns ofta kvar bly- eller järnrör och smala avlopp. Vid en totalrenovering byter man dem samtidigt. Det kostar mer, men förhindrar läckor senare.</li>
<li><strong>Fukt bakom kaklet.</strong> Vid rivningen dyker det regelbundet upp fukt eller ett ruttet undergolv. Räkna med 10 % i marginal.</li>
<li><strong>Kakel och porslin.</strong> Spanskt kakel och porslin är bra och prisvärt. Stora format, mikrocement eller nordiska märken kostar mer, även i arbete.</li>
<li><strong>Åtkomst.</strong> I en smal gränd i Frigiliana eller Cómpeta bärs allt rivningsavfall ut för hand eller med en liten dumper. Det märks på notan.</li>
<li><strong>Varmvatten.</strong> En gammal elektrisk varmvattenberedare kan med fördel bytas samtidigt, till exempel mot en beredare med värmepump.</li>
</ul>`,
      },
      {
        id: 'exempel',
        h: 'Räkneexempel: badrum i ett byhus',
        html: '<p>Ett badrum på 5 m² på första våningen i ett byhus i Torrox. Badkaret ersätts med en golvdusch på 90 × 120 cm, rör och avlopp byts, golv och väggar får spanskt kakel och det blir ny toalett och ny kommod.</p>',
        table: {
          head: ['Post', 'Riktpris'],
          rows: [
            ['Rivning och bortforsling', '800 – 1 200 €'],
            ['Rör, avlopp och el', '1 500 – 2 500 €'],
            ['Kakel på golv och väggar (± 25 m²)', '2 000 – 3 000 €'],
            ['Porslin, blandare, duschvägg, kommod', '2 000 – 3 500 €'],
            ['Slutarbeten, målning, fogar', '400 – 800 €'],
            ['<strong>Totalt</strong>', '<strong>6 700 – 11 000 €</strong>'],
          ],
        },
        after: '<p>Tid: två till tre veckor. För en badrumsrenovering utan ingrepp i konstruktionen räcker i de flesta kommuner en anmälan (<em>declaración responsable</em>).</p>',
      },
      {
        id: 'moms',
        h: 'Moms, tillstånd och betalning',
        html: '<p>För renovering av en bostad för privat bruk gäller under vissa villkor reducerad moms på 10 % i stället för 21 %, om materialet inte är mer än 40 % av totalbeloppet. Be om en offert uppdelad per post och betala i etapper efter hur arbetet går framåt. Läs mer i vår guide <a href="/sv/guider/renovera-hus-i-spanien-kostnad/">vad kostar det att renovera hus i Spanien</a>.</p>',
      },
      {
        id: 'mattbestallt',
        h: 'Badrum efter mått',
        html: `<p>Små eller sneda badrum, snedtak och nischer i tjocka väggar: i Axarquía passar ett standardbadrum sällan exakt. Ett <strong>badrum efter mått</strong> använder varje centimeter: en kommod som passar precis i nischen, en golvdusch över hela bredden, hyllor i väggen och fogfria väggar av mikrocement eller stora plattor.</p>
<ul>
<li><strong>Pris:</strong> ett måttbeställt badrum på 4 till 6 m² kostar oftast 12 000 till 25 000 € plus moms.</li>
<li><strong>Populärt:</strong> mikrocement, natursten, golvdusch, en vägghängd kommod och golvvärme för vintern.</li>
<li><strong>Tid:</strong> tre till fem veckor, längre om möbler eller sten tillverkas efter mått.</li>
</ul>`,
      },
    ],
    faq: [
      { q: 'Hur lång tid tar ett nytt badrum?', a: 'Ett komplett badrum av medelstorlek tar oftast två till tre veckor. Med måttbeställda delar, eller om kakel eller möbler måste beställas, något längre.' },
      { q: 'Går det medan jag är i Sverige?', a: 'Ja. Du väljer kakel och porslin i förväg utifrån foton eller vid ett besök i en utställning, och under arbetet får du foton varje vecka.' },
      { q: 'Är en golvdusch dyrare än ett badkar?', a: 'Inte nödvändigtvis. En golvdusch kräver däremot ett korrekt fall och ett tätskikt under kaklet, och det arbetet måste göras ordentligt. Därför blir den något dyrare än ett vanligt duschkar.' },
    ],
    links: [
      { href: '/sv/renovering/', label: 'Renovering och ombyggnad' },
      { href: '/sv/guider/renovera-hus-i-spanien-kostnad/', label: 'Guide: vad kostar det att renovera hus i Spanien?' },
      { href: '/sv/guider/dusch-eller-badkar/', label: 'Guide: dusch eller badkar?' },
      { href: '/sv/problem/fukt-och-mogel/', label: 'Fukt och mögel i huset' },
    ],
    related: ['costs:keuken', 'costs:dak', 'problems:vocht'],
    sources: [
      { name: 'Habitissimo, prisguide badrumsrenovering (reformar baño)', url: 'https://www.habitissimo.es/presupuestos/reformar-bano' },
      { name: 'Cronoshare, priser badrumsrenovering i Vélez-Málaga', url: 'https://www.cronoshare.com/servicios/presupuesto-reforma-integral-bano/malaga/velez-malaga' },
      { name: 'El Español, ”Att renovera ett badrum kostar nu över 7 000 euro” (maj 2026)', url: 'https://www.elespanol.com/mujer/interiorismo/20260514/expertos-coinciden-reformar-bano-costaba-euros-ahora-supera-espana/1003744232504_0.amp.html' },
      { name: 'Ley 37/1992 del IVA, art. 91: reducerad moms vid renovering', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1992-28740' },
    ],
    ctaTitle: 'Ett pris på ditt badrum?',
    ctaText: 'Skicka några foton och måtten. Du får en offert uppdelad per post.',
    minutes: 5,
    published: '2026-11-21',
  },
  {
    key: 'keuken',
    slug: 'renovera-kok',
    title: 'Vad kostar ett nytt kök i Spanien?',
    seoTitle: 'Renovera kök i Spanien: kostnad i Axarquía (2026)',
    short: 'Kök',
    description: 'Vad kostar ett nytt kök i Axarquía? Priser för nya luckor, ett komplett kök och ett måttbeställt kök med köksö, plus bänkskivor och vitvaror.',
    lead: 'Många hus i Axarquía har fortfarande ett kök från nittiotalet, med kakel upp till taket. Ett nytt kök förändrar hela huset. Så här ser kalkylen ut.',
    keyword: 'renovera kök spanien kostnad',
    dienst: 'badkamer-keuken',
    onderwerp: 'Jag vill gärna ha en offert på ett nytt kök.',
    answer: 'Ett komplett nytt kök på 8 till 10 m² kostar i Axarquía oftast <strong>8 000 till 15 000 €</strong> exklusive moms, inklusive rivning, installationer, skåp, bänkskiva och kakel. Vitvaror tillkommer ofta. Att bara byta luckor och bänkskiva går från cirka 3 000 €; ett måttbeställt kök med köksö kostar upp till 30 000 €.',
    sections: [
      {
        id: 'priser',
        h: 'Priser per typ av köksrenovering',
        table: {
          head: ['Arbete', 'Vad som ingår', 'Riktpris'],
          rows: [
            ['Uppfräschning', 'Nya luckor, handtag och bänkskiva på befintliga stommar', '3 000 – 6 000 €'],
            ['Komplett kök, mellanklass', 'Rivning, nya rör och ny el, skåp, bänkskiva, väggkakel', '8 000 – 15 000 €'],
            ['Större kök eller högre standard', 'Fler skåp, bänkskiva i kvarts eller keramik, bättre beslag', '15 000 – 22 000 €'],
            ['Måttbeställt kök med köksö', 'Köksö med avlopp och el i golvet, öppen planlösning, vägg borttagen', '22 000 – 30 000 €+'],
            ['Vitvaror (separat)', 'Ugn, häll, köksfläkt, diskmaskin, kylskåp', '2 000 – 6 000 €'],
          ],
          note: 'Tas en bärande vägg bort för ett öppet kök krävs en konstruktionsberäkning av en arkitekt och oftast bygglov.',
        },
      },
      {
        id: 'bankskivor',
        h: 'Bänkskivor: vad väljer de flesta?',
        table: {
          head: ['Bänkskiva', 'Per löpmeter (monterad)'],
          rows: [
            ['Laminat', '100 – 200 €'],
            ['Granit (spansk)', '200 – 400 €'],
            ['Kvartskomposit (t.ex. Silestone)', '300 – 600 €'],
            ['Keramik (t.ex. Dekton)', '400 – 800 €'],
          ],
        },
        after: '<p>Granit och kvartskomposit kommer ofta från Spanien självt (regionen Almería är ett stort centrum för natursten) och är därför relativt billiga här.</p>',
      },
      {
        id: 'faktorer',
        h: 'Vad styr priset?',
        html: `<ul>
<li><strong>Planlösning.</strong> Står diskho och häll kvar på samma plats sparar du installationsarbete.</li>
<li><strong>El.</strong> Gamla kök har ofta för få säkringsgrupper för induktion, ugn och diskmaskin samtidigt. En ny elcentral eller högre abonnerad effekt (<em>potencia contratada</em>) kan behövas.</li>
<li><strong>Köksfläkt.</strong> En fläkt med utsug till det fria är bättre än en kolfilterfläkt, men kräver ett hål genom vägg eller tak.</li>
<li><strong>Golv.</strong> Ett nytt golv som löper vidare in i vardagsrummet ser bättre ut, men är mer arbete.</li>
</ul>`,
      },
      {
        id: 'planering',
        h: 'Planering och tid',
        html: '<p>Räkna med fyra till sex veckors leveranstid för skåp och bänkskiva (skivan mäts först när skåpen står på plats) och en till två veckors arbete på plats. Under ombyggnaden har du inget kök: planera det därför helst när du inte är i Spanien.</p>',
      },
      {
        id: 'mattbestallt',
        h: 'Kök efter mått',
        html: `<p>I ett gammalt byhus eller en finca är ingen vägg rak och ingen nisch lika stor. Ett standardkök lämnar då konstiga springor och förlorade hörn. Ett <strong>kök efter mått</strong> mäts upp och byggs för ditt rum: skåp ända upp till taket, en bänkskiva som följer en sned vägg exakt, en köksö som passar ditt sätt att laga mat och plats för ett stort kylskåp eller ett vinkylskåp.</p>
<ul>
<li><strong>Pris:</strong> ett måttbeställt kök på 8 till 10 m² kostar oftast 12 000 till 30 000 € plus moms och vitvaror.</li>
<li><strong>Material:</strong> massivt trä, lackerade luckor, natursten, keramik eller kvartskomposit. Välj material som tål värme och fukt.</li>
<li><strong>Leveranstid:</strong> efter ritningen fyra till åtta veckors tillverkning, därefter en till två veckors montering.</li>
</ul>`,
      },
    ],
    faq: [
      { q: 'Kan jag köpa ett kök i Sverige eller på IKEA och få det monterat?', a: 'Det går. Du betalar då bara montering, installationer och slutarbeten. Anslutningar och mått skiljer sig ibland mellan Sverige och Spanien. Nämn det i förväg, så tar vi hänsyn till det.' },
      { q: 'Behöver jag tillstånd för ett nytt kök?', a: 'För att byta kök utan ingrepp i konstruktionen räcker oftast en anmälan (declaración responsable) hos kommunen. Tas en bärande vägg bort krävs tillstånd med ritningar.' },
      { q: 'Vad kostar bara en ny bänkskiva?', a: 'För ett genomsnittligt kök med 3 till 4 meter bänkskiva räknar du, beroende på material, med 1 000 till 2 500 € inklusive montering och urtag.' },
    ],
    links: [
      { href: '/sv/renovering/', label: 'Renovering och ombyggnad' },
      { href: '/sv/kostnader/utekok/', label: 'Kostnad för ett utekök' },
      { href: '/sv/guider/renovera-hus-i-spanien-kostnad/', label: 'Guide: vad kostar det att renovera hus i Spanien?' },
    ],
    related: ['costs:badkamer', 'costs:buitenkeuken', 'costs:airco'],
    sources: [
      { name: 'Habitissimo, prisguide köksrenovering (reformar cocina)', url: 'https://www.habitissimo.es/presupuestos/reformar-cocina' },
      { name: 'Cronoshare, vad kostar en köksrenovering', url: 'https://www.cronoshare.com/blog/?p=1304' },
      { name: 'El Español, ”Att renovera ett kök kostar nu över 10 000 euro” (juli 2026)', url: 'https://www.elespanol.com/mujer/interiorismo/20260723/arquitecto-reformar-cocina-costaba-euros-ahora-supera-espana/1003744328876_0.html' },
    ],
    ctaTitle: 'Ett nytt kök?',
    ctaText: 'Skicka foton och måtten på ditt kök. Du får ett förslag och ett pris uppdelat per post.',
    minutes: 5,
    published: '2026-11-21',
  },
  {
    key: 'zwembad',
    slug: 'bygga-pool',
    title: 'Vad kostar det att bygga pool i Spanien?',
    seoTitle: 'Bygga pool i Spanien: kostnad i Axarquía (2026)',
    short: 'Pool',
    description: 'Vad kostar en pool i Axarquía? Priser för färdig pool, betongpool på 8 × 4 meter och pool med terrass, plus bygglov och löpande kostnader.',
    lead: 'En pool hör till huset i solen, och den gör bostaden lättare att hyra ut och sälja. Men i en sluttning i Axarquía är det mer än att gräva en grop. Det här kostar det.',
    keyword: 'bygga pool spanien kostnad',
    dienst: 'zwembad',
    onderwerp: 'Jag vill gärna ha en offert på en ny pool.',
    answer: 'En betongpool på 8 × 4 meter med reningsverk kostar i Axarquía oftast <strong>20 000 till 30 000 €</strong> exklusive moms. Komplett med terrass, belysning och saltsystem räknar du med <strong>30 000 till 50 000 €</strong>. I en sluttning med stödmurar tillkommer ofta 5 000 till 20 000 €.',
    sections: [
      {
        id: 'priser',
        h: 'Priser per pooltyp',
        table: {
          head: ['Typ', 'Vad som ingår', 'Riktpris'],
          rows: [
            ['Färdig polyesterpool (± 7 × 3,5 m)', 'Färdigt poolskal, grävning, montering, filter', '15 000 – 25 000 €'],
            ['Betongpool 8 × 4 m (sprutbetong)', 'Grävning, sprutbetong, gresite-mosaik, filter och pump', '20 000 – 30 000 €'],
            ['Komplett pool', 'Betongpool plus terrass runt om, belysning, saltelektrolys, trappa', '30 000 – 50 000 €'],
            ['Bräddavlopp eller infinitykant', 'Extra utjämningstank, teknik och utförande', '+ 10 000 – 25 000 €'],
            ['Renovera befintlig pool', 'Ny gresite eller beläggning, ny pump och filter, täta läckor', '5 000 – 15 000 €'],
          ],
          note: 'Grävning i berg, leverans via en smal bergsväg eller stödmurar i en sluttning kan höja priset rejält.',
        },
      },
      {
        id: 'extra',
        h: 'Extra kostnader',
        table: {
          head: ['Post', 'Riktpris'],
          rows: [
            ['Ritningar av arkitekt eller teknisk ingenjör', '1 500 – 3 500 €'],
            ['Byggskatt (ICIO) och bygglov från kommunen', 'oftast 2 % – 4 % av byggkostnaden'],
            ['Staket eller poolskydd (rekommenderas med barn eller vid uthyrning)', '1 500 – 5 000 €'],
            ['Värmepump för poolvärme', '3 000 – 6 000 €'],
          ],
        },
      },
      {
        id: 'per-ar',
        h: 'Vad kostar en pool per år?',
        html: '<p>För en pool på 8 × 4 meter räknar du med cirka <strong>1 200 till 2 500 € per år</strong>: skötsel av en poolservice (varje vecka på sommaren, mer sällan på vintern), kemikalier eller salt, el till pumpen och påfyllningsvatten. Vid torka kan kommunerna begränsa påfyllning av pooler; fråga din kommun. Är du inte i Spanien kan du kombinera poolskötseln med <a href="/sv/tillsyn/">tillsyn av huset</a>.</p>',
      },
      {
        id: 'bygglov',
        h: 'Bygglov och tomt',
        html: '<p>För en ny pool behöver du bygglov (<em>licencia de obra</em>) med ritningar. På landsbygdsmark (<em>suelo no urbanizable</em>) gäller strängare regler, och för ett hus med AFO-status får man ofta inte bygga till alls. Läs först vår guide om <a href="/sv/guider/afo-andalusien/">AFO och legalisering</a> och kontrollera vad din kommun kräver, till exempel <a href="/sv/orter/competa/bygglov/">bygglov i Cómpeta</a> eller <a href="/sv/orter/nerja/bygglov/">i Nerja</a>.</p>',
      },
    ],
    faq: [
      { q: 'Hur lång tid tar det att bygga en pool?', a: 'Själva arbetet tar fyra till åtta veckor. Bygglovet kan beroende på kommun ta några veckor till några månader. Vill du bada till sommaren, börja med ansökan på hösten.' },
      { q: 'Färdig pool eller betong?', a: 'En färdig pool går fortare och är ofta billigare, men storlek och form är bestämda och poolskalet måste levereras på väg. Till en finca med smal tillfart är det ibland omöjligt. Betong är fri i formen och passar överallt.' },
      { q: 'Ökar en pool värdet på mitt hus?', a: 'I Axarquía letar många köpare och semestergäster efter ett hus med pool. För semesteruthyrning är den nästan ett måste. Den gör alltså framför allt huset lättare att sälja och ger högre hyresintäkter.' },
    ],
    links: [
      { href: '/sv/pool/', label: 'Poolbygge och poolskötsel' },
      { href: '/sv/problem/legionella/', label: 'Legionella i pool, bubbelpool och rör' },
      { href: '/sv/gor-det-sjalv/bygga-pool-sjalv/', label: 'Bygga pool själv: alla steg' },
      { href: '/sv/guider/afo-andalusien/', label: 'Guide: AFO-status och legalisering' },
    ],
    related: ['costs:buitenkeuken', 'problems:legionella', 'costs:airco'],
    sources: [
      { name: 'Habitissimo, prisguide poolbygge (construir piscina)', url: 'https://www.habitissimo.es/presupuestos/construir-piscina' },
      { name: 'Cronoshare, vad kostar det att bygga en pool', url: 'https://www.cronoshare.com/blog/construir-una-piscina/' },
      { name: 'Junta de Andalucía, Ley 7/2021 (LISTA) om planering och byggande', url: 'https://www.juntadeandalucia.es/boja/2021/233/1' },
    ],
    ctaTitle: 'Planerar du en pool?',
    ctaText: 'Skicka foton av platsen och berätta vad du tänker dig. Du får ett första riktpris och råd om bygglovet.',
    minutes: 6,
    published: '2026-11-21',
  },
  {
    key: 'airco',
    slug: 'luftkonditionering-och-varmepump',
    title: 'Vad kostar luftkonditionering eller värmepump i Spanien?',
    seoTitle: 'Luftkonditionering eller värmepump i Spanien: kostnad',
    short: 'Luftkonditionering och värmepump',
    description: 'Vad kostar luftkonditionering i Axarquía? Priser för split, multisplit och kanalsystem samt en luft-vatten-värmepump (aerotermia) för värme och varmvatten.',
    lead: 'Kyla på sommaren, värme på vintern. För även i Axarquía är husen kalla i januari. Moderna aggregat klarar båda. Så här ser kalkylen ut.',
    keyword: 'luftkonditionering spanien kostnad',
    dienst: 'anders',
    onderwerp: 'Jag vill gärna ha en offert på luftkonditionering eller värmepump.',
    answer: 'Ett splitaggregat (kyla och värme) för ett sovrum eller vardagsrum kostar monterat cirka <strong>900 till 1 800 €</strong>. Tre rum med en multisplit: <strong>3 500 till 6 000 €</strong>. En luft-vatten-värmepump (aerotermia) för värme och varmvatten kostar oftast <strong>8 000 till 15 000 €</strong>. Belopp exklusive moms.',
    sections: [
      {
        id: 'priser',
        h: 'Priser per system',
        table: {
          head: ['System', 'Passar för', 'Riktpris (monterat)'],
          rows: [
            ['Splitaggregat 2,5 – 3,5 kW', 'Ett rum upp till ± 30 m²', '900 – 1 800 €'],
            ['Multisplit, 1 utedel och 3 innedelar', 'Lägenhet eller mindre hus', '3 500 – 6 000 €'],
            ['Kanalsystem (conductos)', 'Hela huset, dolt i ett nedsänkt innertak', '6 000 – 12 000 €'],
            ['Luft-vatten-värmepump (aerotermia)', 'Värme via element eller golv, plus varmvatten', '8 000 – 15 000 €'],
            ['Aerotermia med ny golvvärme', 'Som del av en totalrenovering', '12 000 – 20 000 €'],
            ['Varmvattenberedare med värmepump (bara varmvatten)', 'Ersätter den elektriska beredaren', '2 000 – 4 500 €'],
          ],
          note: 'Service: räkna med 80 – 150 € per år och system för rengöring av filter och kontroll.',
        },
      },
      {
        id: 'val',
        h: 'Vilket system passar ditt hus?',
        html: `<ul>
<li><strong>Lägenhet vid kusten:</strong> splitaggregat eller en multisplit räcker oftast. Tänk på samfällighetens (<em>comunidad</em>) regler för utedelar på fasaden.</li>
<li><strong>Byhus med tjocka väggar:</strong> håller sig svalt länge på sommaren, men är fuktigt och kallt på vintern. Luftkonditionering med värmefunktion plus god ventilation hjälper mot fukten.</li>
<li><strong>Finca eller villa som används året runt:</strong> en värmepump med golvvärme är bekvämast, särskilt i kombination med solceller.</li>
</ul>`,
      },
      {
        id: 'el',
        h: 'Elanslutning och solceller',
        html: '<p>Många äldre hus har en låg abonnerad effekt (<em>potencia contratada</em>), till exempel 3,45 kW. Med luftkonditionering, induktion och värmepump behöver du ofta 5,75 kW eller mer. Höjningen görs via elbolaget och kan kräva ett intyg om installationen (<em>boletín eléctrico</em>). Med solceller producerar du själv en stor del av elen till kylan på dagen.</p>',
      },
      {
        id: 'bidrag',
        h: 'Bidrag',
        html: '<p>För värmepumpar och energibesparing har det de senaste åren funnits spanska och europeiska (Next Generation) bidragsprogram, och vissa kommuner ger rabatt på fastighetsskatten (IBI) vid solenergi. Programmen ändras ofta och tar ibland snabbt slut. Fråga när du ber om offert vad som gäller just nu.</p>',
      },
    ],
    faq: [
      { q: 'Kan luftkonditionering också värma?', a: 'Ja. Nästan alla moderna splitaggregat är värmepumpar som både kyler och värmer. Med de milda vintrarna i Axarquía är det ett billigt sätt att värma huset.' },
      { q: 'Behöver jag tillstånd för en utedel?', a: 'Oftast inte från kommunen, men i ett flerfamiljshus behövs samfällighetens godkännande eller så gäller dess regler. I skyddade bykärnor kan kommunen ställa krav på synliga utedelar på fasaden.' },
      { q: 'Hur mycket el drar luftkonditioneringen?', a: 'Ett modernt splitaggregat på 3,5 kW drar vid kylning i snitt 0,8 till 1,2 kW per timme. Med några timmar om dagen på sommaren blir det några tiotal euro per månad och rum.' },
    ],
    links: [
      { href: '/sv/guider/varme-och-kyla-i-spanien/', label: 'Guide: värme och kyla jämförda' },
      { href: '/sv/underhall/', label: 'Underhåll och reparationer' },
      { href: '/sv/renovering/', label: 'Renovering och ombyggnad' },
      { href: '/sv/problem/fukt-och-mogel/', label: 'Fukt och mögel i huset' },
    ],
    related: ['costs:dak', 'problems:vocht', 'costs:keuken'],
    sources: [
      { name: 'Merca2, priset på aerotermia 2025', url: 'https://www.merca2.es/2025/08/11/precio-de-la-aerotermia-en-2025-la-climatizacion-eficiente-estabiliza-sus-costes-y-acelera-su-amortizacion-2221769/' },
      { name: 'Autosolar, vad kostar det att installera aerotermia', url: 'https://autosolar.es/instalacion-aerotermia/cuanto-cuesta-instalar-aerotermia' },
      { name: 'IDAE, bidragsprogram för energibesparing och förnybar energi', url: 'https://www.idae.es/ayudas-y-financiacion' },
    ],
    ctaTitle: 'Svalt på sommaren, varmt på vintern',
    ctaText: 'Berätta hur stort ditt hus är och hur du använder det. Du får råd om rätt system och ett pris.',
    minutes: 5,
    published: '2026-11-21',
  },
  {
    key: 'dak',
    slug: 'tak-och-takterrass',
    title: 'Vad kostar det att laga tak eller takterrass i Spanien?',
    seoTitle: 'Täta tak eller takterrass i Spanien: kostnad per m²',
    short: 'Tak och takterrass',
    description: 'Täta ett platt tak eller en takterrass i Axarquía? Priser per m² för flytande tätskikt, tätskiktsmembran, tegeltak och ett helt nytt tak.',
    lead: 'De flesta läckor i Axarquía kommer från taket: en takterrass där tätskiktet är slut, eller ett tegeltak med pannor som glidit. Så här ser kalkylen ut.',
    keyword: 'takterrass spanien',
    dienst: 'onderhoud',
    onderwerp: 'Jag vill gärna ha en offert på reparation eller tätning av mitt tak eller min takterrass.',
    answer: 'Att täta om en takterrass kostar i Axarquía <strong>30 till 50 € per m²</strong> med ett flytande tätskikt och <strong>70 till 130 € per m²</strong> om plattorna måste bort för ett nytt membran och nya plattor. Att lägga om ett tegeltak kostar 60 till 110 € per m². Belopp exklusive moms.',
    sections: [
      {
        id: 'priser',
        h: 'Priser per m²',
        table: {
          head: ['Arbete', 'Vad som ingår', 'Per m²'],
          rows: [
            ['Flytande tätskikt på takterrassen', 'Rengöring, laga sprickor, polyuretan eller akryl i flera lager', '30 – 50 €'],
            ['Nytt tätskiktsmembran och nya plattor', 'Gamla plattor bort, rätt fall, bitumen- eller PVC-membran, nya plattor', '70 – 130 €'],
            ['Lägga om tegeltak', 'Pannorna av, underlagstäckning, pannorna tillbaka (kompletteras vid behov)', '60 – 110 €'],
            ['Nytt tak med isolering', 'Nya bjälkar eller ny bärande skiva, isolering, tätskikt, pannor', '150 – 300 €'],
          ],
        },
      },
      {
        id: 'mindre',
        h: 'Mindre reparationer',
        table: {
          head: ['Reparation', 'Riktpris'],
          rows: [
            ['Hitta och täta en lokal läcka', '300 – 1 500 €'],
            ['Rensa och laga brunnar och hängrännor', '150 – 600 €'],
            ['Byta lösa eller trasiga takpannor', '200 – 800 €'],
            ['Laga anslutning mot skorsten eller uppstående kant', '400 – 1 500 €'],
          ],
          note: 'Byggställning, skylift eller bortforsling i en smal bygränd tillkommer ibland.',
        },
      },
      {
        id: 'exempel',
        h: 'Räkneexempel: takterrass på 40 m²',
        html: '<p>En takterrass på 40 m² på ett byhus i Cómpeta läcker vid varje kraftigt regn. Plattorna sitter löst och vattnet blir stående. Ett flytande tätskikt räcker inte här: plattorna tas bort, fallet rättas till och ett nytt membran och nya plattor läggs. Räkna med <strong>2 800 till 5 200 €</strong> plus eventuell bortforsling. Är terrassen bara porös, utan lösa plattor, kan ett tätskikt för 1 200 till 2 000 € räcka.</p>',
      },
      {
        id: 'tidpunkt',
        h: 'Rätt tidpunkt',
        html: '<p>Låt kontrollera taket i september eller oktober, före höstregnen och <em>gota fría</em>. Då rensas också brunnarna från löv och saharadamm (<em>calima</em>). Kan du inte själv hålla koll på huset, låt det skötas inom ramen för <a href="/sv/tillsyn/">tillsyn av huset</a>.</p>',
      },
    ],
    faq: [
      { q: 'Hur länge håller ett flytande tätskikt?', a: 'Ett bra tätskikt av polyuretan håller vid normal användning åtta till tolv år. Ett membran under nya plattor håller tjugo år eller längre.' },
      { q: 'Behöver jag tillstånd?', a: 'För att täta eller lägga om ett tak utan ingrepp i konstruktionen räcker oftast en anmälan (declaración responsable). För en ny takkonstruktion krävs bygglov med ritningar.' },
      { q: 'Betalar försäkringen reparationen?', a: 'En hemförsäkring betalar ofta vattenskadan inne, men sällan reparationen av ett tak som läcker på grund av slitage. Kontrollera din försäkring och anmäl skador snabbt, med foton.' },
    ],
    links: [
      { href: '/sv/problem/taklacka/', label: 'Takläcka: vad gör du?' },
      { href: '/sv/gor-det-sjalv/laga-taket-sjalv/', label: 'Laga taket själv' },
      { href: '/sv/underhall/', label: 'Underhåll och reparationer' },
      { href: '/sv/tillsyn/', label: 'Tillsyn och nyckelservice' },
    ],
    related: ['problems:daklekkage', 'problems:vocht', 'costs:airco'],
    sources: [
      { name: 'CYPE, Generador de Precios (byggpriser Spanien, Andalusien)', url: 'https://generadordeprecios.info/' },
      { name: 'Habitissimo, prisguide täta takterrass (impermeabilizar azotea)', url: 'https://www.habitissimo.es/presupuestos/impermeabilizar-azotea' },
      { name: 'AEMET, spanska vädertjänsten: gota fría och höstoväder', url: 'https://www.aemet.es/' },
    ],
    ctaTitle: 'Läcker ditt tak?',
    ctaText: 'Skicka foton av taket och av stället inne där vattnet syns. Du får snabbt ett pris.',
    minutes: 5,
    published: '2026-11-21',
  },
  {
    key: 'buitenkeuken',
    slug: 'utekok',
    title: 'Vad kostar ett utekök i Spanien?',
    seoTitle: 'Bygga utekök i Spanien: kostnad (2026)',
    short: 'Utekök',
    description: 'Vad kostar ett murat utekök med grill i Axarquía? Priser från enkelt till komplett med tak, vatten och el, plus vilket tillstånd som behövs.',
    lead: 'I Axarquía lever man ute en stor del av året. Ett utekök vid poolen eller på terrassen är därför en populär ombyggnad. Det här kostar det.',
    keyword: 'utekök spanien',
    dienst: 'renovatie',
    onderwerp: 'Jag vill gärna ha en offert på ett utekök.',
    answer: 'Ett enkelt murat utekök med grill och arbetsyta kostar i Axarquía <strong>2 500 till 5 000 €</strong>. Med diskho, vatten, el och kylskåp räknar du med <strong>6 000 till 12 000 €</strong>. Med tak och vitvaror i premiumklass <strong>12 000 till 25 000 €</strong>. Belopp exklusive moms.',
    sections: [
      {
        id: 'priser',
        h: 'Priser per utförande',
        table: {
          head: ['Utförande', 'Vad som ingår', 'Riktpris'],
          rows: [
            ['Enkelt', 'Murat block med kolgrill och arbetsyta av kakel eller sten', '2 500 – 5 000 €'],
            ['Komplett', 'Plus diskho med vatten och avlopp, eluttag, skåp, kylskåp', '6 000 – 12 000 €'],
            ['Lyx', 'Plus pizzaugn eller gasolgrill, natursten, belysning, tak', '12 000 – 25 000 €'],
            ['Pergola eller tak (separat)', 'Trä, aluminium eller lamelltak', '3 000 – 10 000 €'],
          ],
        },
      },
      {
        id: 'faktorer',
        h: 'Vad styr priset?',
        html: `<ul>
<li><strong>Vatten och avlopp.</strong> Ju längre från befintliga ledningar, desto dyrare. På en finca med avloppsbrunn måste avloppet anslutas rätt.</li>
<li><strong>Material.</strong> Ett utekök måste tåla sol, salt (vid kusten) och regn. Välj rostfritt stål 316, natursten eller keramik, inte vanligt trä.</li>
<li><strong>Grund.</strong> På en befintlig terrass, eller ett nytt underlag i en sluttning.</li>
<li><strong>El.</strong> Uttag utomhus måste vara vattentäta och ha en egen säkringsgrupp.</li>
</ul>`,
      },
      {
        id: 'tillstand',
        h: 'Tillstånd',
        html: '<p>En fristående grill eller ett murat block omfattas oftast av en anmälan (<em>declaración responsable</em>). Ett fast tak räknas i många kommuner som bebyggd yta och kräver bygglov. På landsbygdsmark och för ett hus med AFO-status är det ofta inte tillåtet. Kontrollera vad din kommun kräver, till exempel <a href="/sv/orter/frigiliana/bygglov/">i Frigiliana</a> eller <a href="/sv/orter/torrox/bygglov/">i Torrox</a>, och läs guiden om <a href="/sv/guider/afo-andalusien/">AFO och legalisering</a>.</p>',
      },
    ],
    faq: [
      { q: 'Får jag grilla på sommaren?', a: 'I Andalusien gäller hög brandrisk från 1 juni till 15 oktober. Grillning med öppen eld är då förbjuden i och nära skog och naturområden, och på landsbygdstomter gäller stränga regler. I ett bostadsområde eller vid ett hus vid kusten är en fast grill oftast tillåten. En gasol- eller elgrill är säkrare och ofta det bästa valet på en finca.' },
      { q: 'Hur lång tid tar bygget?', a: 'Ett enkelt utekök står klart på en till två veckor. Med ledningar och tak tre till fyra veckor.' },
    ],
    links: [
      { href: '/sv/renovering/', label: 'Renovering och ombyggnad' },
      { href: '/sv/kostnader/bygga-pool/', label: 'Kostnad för en pool' },
      { href: '/sv/kostnader/renovera-kok/', label: 'Kostnad för ett nytt kök' },
      { href: '/sv/guider/bygga-pa-egen-tomt-i-spanien/utekok/', label: 'Guide: bygga utekök på din tomt' },
    ],
    related: ['costs:zwembad', 'costs:keuken', 'problems:inbraak'],
    sources: [
      { name: 'Habitissimo, prisguide bygga grill och utekök', url: 'https://www.habitissimo.es/presupuestos/construir-barbacoa' },
      { name: 'Junta de Andalucía, Plan INFOCA och regler vid brandrisk', url: 'https://www.juntadeandalucia.es/medioambiente/portal/areas-tematicas/incendios-forestales' },
    ],
    ctaTitle: 'Ett utekök vid poolen?',
    ctaText: 'Skicka ett foto av platsen och berätta vad du vill ha. Du får en skiss och ett pris.',
    minutes: 4,
    published: '2026-11-21',
  },
  {
    key: 'zonnepanelen',
    slug: 'solceller',
    title: 'Vad kostar solceller i Spanien?',
    seoTitle: 'Solceller i Spanien: kostnad och regler (2026)',
    short: 'Solceller',
    description: 'Vad kostar solceller i Axarquía? Priser för 3 till 8 kWp, batteri och finca utan elnät, plus tillstånd, bidrag och återbetalningstid.',
    lead: 'Axarquía har mer än 300 soldagar om året. Solceller ger här ungefär dubbelt så mycket som i Mellansverige. Så här ser kalkylen ut, även om du bara är i Spanien en del av året.',
    keyword: 'solceller spanien kostnad',
    dienst: 'energie',
    onderwerp: 'Jag vill gärna ha en offert på solceller till mitt hus.',
    answer: 'En anläggning på 4 till 5 kWp (10 till 12 paneler) för ett bostadshus kostar i Axarquía oftast <strong>4 500 till 7 000 €</strong> exklusive moms, inklusive växelriktare, montering och anmälan. Ett batteri på 5 kWh tillkommer med <strong>3 000 till 5 000 €</strong>. En finca utan elnät behöver en större fristående anläggning med batteri: <strong>10 000 till 18 000 €</strong>.',
    sections: [
      {
        id: 'priser',
        h: 'Priser per anläggning',
        html: '<p>Riktpriser för 2026, inklusive paneler, växelriktare, montagesystem, kablar, installation och anmälan, exklusive moms.</p>',
        table: {
          head: ['Anläggning', 'Passar för', 'Riktpris'],
          rows: [
            ['3 kWp, 7 – 8 paneler', 'Lägenhet med eget tak eller litet hus, främst förbrukning dagtid', '3 500 – 5 000 €'],
            ['4 – 5 kWp, 10 – 12 paneler', 'Bostadshus med luftkonditionering och induktionshäll', '4 500 – 7 000 €'],
            ['6 – 8 kWp, 14 – 20 paneler', 'Villa med poolpump, värmepump eller laddbox', '6 500 – 10 000 €'],
            ['Batteri 5 kWh', 'Använda dagens solel på kvällen', '+ 3 000 – 5 000 €'],
            ['Batteri 10 kWh', 'Hög förbrukning eller mycket förbrukning på kvällen', '+ 5 500 – 9 000 €'],
            ['Solfångare (termosifón), 150 – 300 liter', 'Bara varmvatten', '1 500 – 3 500 €'],
            ['Finca utan elnät (aislada), 3 – 5 kWp med 10 – 15 kWh batteri', 'Lantställe utan elanslutning', '10 000 – 18 000 €'],
          ],
          note: 'Paneler på marken eller på en carport kostar 500 – 2 000 € mer för ställning och fundament.',
        },
      },
      {
        id: 'faktorer',
        h: 'Vad styr priset?',
        html: `<ul>
<li><strong>Taket.</strong> En platt takterrass är enkel. Ett gammalt tegeltak måste ibland först kontrolleras eller lagas, annars läcker det efter borrningen. Gör båda i ett svep: se <a href="/sv/kostnader/tak-och-takterrass/">kostnader för tak och takterrass</a>.</li>
<li><strong>Elen.</strong> En gammal installation utan jordning eller med för liten elcentral måste först åtgärdas. Läs <a href="/sv/kostnader/byta-elsystem/">vad det kostar att dra om elen</a>.</li>
<li><strong>Åtkomst.</strong> Att bära paneler genom en smal gränd i Frigiliana eller Cómpeta tar längre tid än till en villa med uppfart.</li>
<li><strong>Med eller utan batteri.</strong> Ett batteri nästan fördubblar priset. Det lönar sig främst om du bor där året runt eller förbrukar mycket på kvällen.</li>
<li><strong>Skyddade bykärnor.</strong> I vissa historiska bykärnor ställer kommunen krav på synliga paneler.</li>
</ul>`,
      },
      {
        id: 'borta',
        h: 'Lönar sig solceller om du bara är i Spanien en del av året?',
        html: '<p>Ja, men på ett annat sätt än i Sverige. El som du inte använder själv går ut på nätet. I Spanien får du för den en kreditering på elräkningen via <em>compensación simplificada</em>. Den är lägre än elpriset och räkningen kan aldrig gå under noll. Någon fast ersättning per såld kWh som hos vissa svenska elbolag finns inte. Några tips:</p><ul><li>Välj en mindre anläggning som passar förbrukningen när du inte är där: kylskåp, poolpump, larm, avfuktare.</li><li>Fråga ditt elbolag om ett virtuellt batteri (<em>batería virtual</em>): då sparar du krediten till de månader du är där. Läs guiden om <a href="/sv/guider/virtuellt-batteri-spanien/">virtuellt batteri</a>.</li><li>Hyr du ut huset använder gästerna elen på sommaren och anläggningen betalar sig snabbare.</li></ul>',
      },
      {
        id: 'aterbetalning',
        h: 'Räkneexempel och återbetalningstid',
        html: '<p>En villa i Torrox som bebos året runt, med luftkonditionering, induktion och poolpump. Förbrukning cirka 7 000 kWh per år.</p>',
        table: {
          head: ['Post', 'Riktpris'],
          rows: [
            ['5 kWp, 12 paneler, hybridväxelriktare', '6 000 €'],
            ['Produktion per år i Axarquía', 'ca 8 000 kWh'],
            ['Egen förbrukning (ca 50 %) à 0,18 € per kWh', 'ca 720 € per år'],
            ['Kreditering för överskott à 0,06 € per kWh', 'ca 240 € per år'],
            ['<strong>Besparing per år</strong>', '<strong>ca 960 €</strong>'],
            ['<strong>Återbetalningstid</strong>', '<strong>6 till 7 år</strong>'],
          ],
          note: 'Panelerna håller 25 till 30 år. Växelriktaren behöver oftast bytas efter 10 till 15 år (800 – 1 500 €).',
        },
      },
      {
        id: 'regler',
        h: 'Tillstånd, anmälan och bidrag',
        html: `<ul>
<li><strong>Tillstånd.</strong> Paneler på taket av ett befintligt, lagligt hus kräver i Andalusien oftast bara en enkel anmälan (<em>declaración responsable</em>) hos kommunen. För anläggningar på marken, en finca på landsbygden eller ett hus med AFO-status kan kommunen kräva mer. Se sidan <em>Bygglov</em> för din kommun under <a href="/sv/orter/">Orter</a>.</li>
<li><strong>Anmälan.</strong> Installatören anmäler anläggningen till Junta de Andalucía och utfärdar elintyget (<em>boletín</em>). Därefter ansöker du hos ditt elbolag om kreditering för överskottet.</li>
<li><strong>Skatterabatt.</strong> Många kommuner ger under några år rabatt på fastighetsskatten (<em>bonificación del IBI</em>) och på byggskatten (ICIO). Hur mycket skiljer sig mellan kommunerna.</li>
<li><strong>Bidrag.</strong> Spanska och europeiska bidrag för egenproduktion ändras ofta och tar ibland snabbt slut. Läs vad som gäller 2026 i guiden om <a href="/sv/guider/bidrag-energieffektivisering-spanien/">bidrag för energieffektivisering</a>.</li>
</ul>`,
      },
      {
        id: 'smart',
        h: 'Tips: smart energistyrning',
        html: '<p>Låt paneler, batteri, laddbox, varmvattenberedare och poolpump samarbeta. Med <a href="/sv/kostnader/smart-energistyrning/">smart energistyrning</a> går de automatiskt när solen skiner eller elen är billig. Med ett rörligt elpris ger det ofta 150 till 400 € extra per år, och du följer allt i mobilen.</p>',
      },
    ],
    faq: [
      { q: 'Hur många paneler behöver jag?', a: 'Som tumregel: cirka 0,7 kWp, alltså två paneler, per 1 000 kWh årsförbrukning. Ett hus som förbrukar 5 000 kWh klarar sig med 3,5 till 4 kWp, ungefär 9 till 10 paneler.' },
      { q: 'Fungerar anläggningen vid strömavbrott?', a: 'En vanlig anläggning stängs av vid strömavbrott, för att skydda dem som arbetar på nätet. Vill du ha ström då behöver du en hybridväxelriktare med batteri och reservkraftfunktion.' },
      { q: 'Vem rengör panelerna?', a: 'Damm och saharasand (calima) sänker produktionen. Att spola av dem två till tre gånger om året räcker. Det kan ingå i underhållet eller i tillsynen av huset.' },
      { q: 'Kan jag kombinera solceller med värmepump eller luftkonditionering?', a: 'Ja, det är den bästa kombinationen. Luftkonditionering och värmepump går mest under sommardagar, precis när panelerna producerar mest.' },
    ],
    links: [
      { href: '/sv/renovering/', label: 'Renovering och ombyggnad' },
      { href: '/sv/kostnader/luftkonditionering-och-varmepump/', label: 'Kostnad för luftkonditionering och värmepump' },
      { href: '/sv/guider/bo-off-grid-i-spanien/', label: 'Guide: bo off grid i Spanien' },
      { href: '/sv/guider/virtuellt-batteri-spanien/', label: 'Guide: virtuellt batteri och kreditering för solel' },
      { href: '/sv/guider/elbolag-i-spanien-jamforelse/', label: 'Guide: elbolag i Spanien jämförda' },
    ],
    related: ['costs:thuisbatterij', 'costs:laadpaal', 'costs:energiebeheer'],
    sources: [
      { name: 'Selectra, priser för solceller på villor (2026)', url: 'https://selectra.es/autoconsumo/instalacion/vivienda-unifamiliar' },
      { name: 'Autosolar, installera solceller i Málaga', url: 'https://autosolar.es/mi-experiencia-placas-solares/instalacion-placas-solares-malaga' },
      { name: 'Real Decreto 244/2019, egenproduktion och kreditering', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2019-5089' },
      { name: 'IDAE, bidrag för energibesparing och förnybar energi', url: 'https://www.idae.es/ayudas-y-financiacion' },
    ],
    ctaTitle: 'En offert på solceller?',
    ctaText: 'Skicka ett foto av ditt tak och din senaste elräkning. Du får ett förslag som passar och ett pris.',
    minutes: 6,
    published: '2026-11-21',
  },
  {
    key: 'elektra',
    slug: 'byta-elsystem',
    title: 'Vad kostar det att dra om elen i Spanien?',
    seoTitle: 'Dra om elen i Spanien: kostnad och boletín (2026)',
    short: 'El',
    description: 'Vad kostar en ny elinstallation i Axarquía? Priser för elcentral, jordning, elintyg (boletín) och högre abonnerad effekt.',
    lead: 'I många äldre hus i Axarquía har elen aldrig bytts: ingen jordning, en för liten elcentral och ett abonnemang som löser ut så fort luftkonditioneringen och vattenkokaren går samtidigt. Så här ser kalkylen ut.',
    keyword: 'dra om el spanien',
    dienst: 'energie',
    onderwerp: 'Jag vill gärna ha en offert på att byta eller bygga ut elen.',
    answer: 'Att dra om hela elen i en lägenhet eller ett mindre hus (70 – 100 m²) kostar i Axarquía oftast <strong>3 500 till 6 500 €</strong> exklusive moms. Ett byhus eller en villa på 120 – 200 m²: <strong>6 500 till 12 000 €</strong>. Bara en ny elcentral kostar 400 – 1 000 €, elintyget (<em>boletín</em>) 100 – 300 €.',
    sections: [
      {
        id: 'priser',
        h: 'Priser per arbete',
        table: {
          head: ['Arbete', 'Vad som ingår', 'Riktpris'],
          rows: [
            ['Elintyg (boletín, CIE)', 'Kontroll och intyg av en behörig elektriker', '100 – 300 €'],
            ['Ny elcentral (cuadro)', 'Huvudbrytare, jordfelsbrytare, säkringsgrupper', '400 – 1 000 €'],
            ['Jordning (toma de tierra)', 'Jordspett och jordledning till elcentralen', '300 – 800 €'],
            ['Extra säkringsgrupp, till exempel för luftkonditionering eller induktion', 'Ny ledning från elcentralen', '150 – 400 € per grupp'],
            ['Hela elen, lägenhet 70 – 100 m²', 'Alla ledningar, strömbrytare och uttag nya, inklusive boletín', '3 500 – 6 500 €'],
            ['Hela elen, hus 120 – 200 m²', 'Samma, med fler grupper och utomhusbelysning', '6 500 – 12 000 €'],
            ['Laddbox för bilen', '7 kW med egen säkringsgrupp', '900 – 1 800 €'],
          ],
          note: 'Vid en totalrenovering byts elen samtidigt med rivning och putsarbeten. Det är billigare än att fräsa spår i efterhand.',
        },
      },
      {
        id: 'effekt',
        h: 'Högre effekt (potencia contratada)',
        html: '<p>I Spanien väljer du själv hur många kilowatt du får använda samtidigt. Många äldre hus har 3,45 eller 4,6 kW. Med luftkonditionering, induktion, värmepump eller poolpump behöver du ofta 5,75 till 9,2 kW. Du höjer effekten via ditt elbolag. Är installationen äldre än tjugo år eller ändras mycket kräver nätägaren (i Axarquía oftast e-distribución) ett nytt boletín. Nätägaren tar ut en engångsavgift på några tiotal till några hundra euro. Tänk på: högre effekt betyder också en högre fast avgift på räkningen.</p>',
      },
      {
        id: 'nar',
        h: 'När behöver elen bytas?',
        html: `<ul>
<li>Det finns ingen jordning, eller uttagen saknar jord.</li>
<li>Elcentralen har fortfarande proppar eller saknar jordfelsbrytare.</li>
<li>Strömmen går om och om igen. Läs <a href="/sv/problem/stromavbrott/">vad du gör när strömmen ständigt går</a>.</li>
<li>Du ser brända uttag, lösa trådar eller ledningar med tygisolering.</li>
<li>Du köper huset, hyr ut det eller skriver över abonnemanget på ditt namn: då behöver du ett giltigt boletín.</li>
</ul>`,
      },
      {
        id: 'kop',
        h: 'Vid husköp',
        html: '<p>Elen hör till det vi alltid kontrollerar vid en <a href="/sv/besiktning/">besiktning före köp</a>. Att byta allt kan lätt kosta 5 000 till 10 000 €. Det är ett bra argument i prisförhandlingen.</p>',
      },
    ],
    faq: [
      { q: 'Vad är ett boletín eléctrico?', a: 'Certificado de Instalación Eléctrica (CIE) intygar att elen uppfyller de spanska reglerna. Bara en behörig elektriker får utfärda det. Du behöver det för en ny anslutning, högre effekt eller för att skriva över abonnemanget på ditt namn om anslutningen inte använts på länge.' },
      { q: 'Hur lång tid tar det att dra om elen?', a: 'En lägenhet tar oftast en till två veckor, ett större hus två till fyra veckor. Därefter följer puts och målning, om det inte ingår i en renovering.' },
      { q: 'Går det medan jag inte är i Spanien?', a: 'Ja. Du bestämmer i förväg på en planritning var uttag och lampor ska sitta, och under arbetet får du foton.' },
    ],
    links: [
      { href: '/sv/renovering/', label: 'Renovering och ombyggnad' },
      { href: '/sv/besiktning/', label: 'Besiktning före köp' },
      { href: '/sv/guider/renovera-hus-i-spanien-kostnad/', label: 'Guide: vad kostar det att renovera hus i Spanien?' },
    ],
    related: ['problems:stroom', 'costs:zonnepanelen', 'costs:airco'],
    sources: [
      { name: 'Habitissimo, prisöversikt byta elinstallation (reformar instalación eléctrica)', url: 'https://www.habitissimo.es/presupuestos/reformar-instalacion-electrica-vivienda-o-local' },
      { name: 'CNMC, boletín eléctrico: vad det är och vad det används till', url: 'https://cnmc.es/sites/default/files/editor_contenidos/Energia/Consumidores/3.2%20Bolet%C3%ADn%20el%C3%A9ctrico%2C%20qu%C3%A9%20es%20y%20para%20qu%C3%A9%20sirve.pdf' },
      { name: 'Reglamento Electrotécnico para Baja Tensión (REBT)', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2002-18099' },
    ],
    ctaTitle: 'Är elen i ordning?',
    ctaText: 'Skicka ett foto av din elcentral och berätta vad du vill ansluta. Du får råd och ett pris.',
    minutes: 5,
    published: '2026-11-21',
  },
  {
    key: 'thuisbatterij',
    slug: 'solcellsbatteri',
    title: 'Vad kostar ett solcellsbatteri i Spanien?',
    seoTitle: 'Solcellsbatteri i Spanien: kostnad och återbetalning',
    short: 'Solcellsbatteri',
    description: 'Vad kostar ett batteri till dina solceller i Axarquía? Priser för 5, 10 och 15 kWh, reservkraft och när ett batteri lönar sig.',
    lead: 'Sedan det stora strömavbrottet i april 2025, när hela Spanien var utan ström i flera timmar, frågar många ägare efter ett batteri. Vad kostar det, när lönar det sig och vad ska du tänka på i det spanska klimatet?',
    keyword: 'solcellsbatteri spanien',
    dienst: 'energie',
    onderwerp: 'Jag vill gärna ha en offert på ett solcellsbatteri.',
    answer: 'Ett batteri på 5 kWh kostar installerat i Axarquía cirka <strong>3 000 till 5 000 €</strong>, ett på 10 kWh <strong>5 500 till 9 000 €</strong>, exklusive moms. Har du redan solceller med en vanlig växelriktare tillkommer ofta en hybridväxelriktare: <strong>1 000 till 2 000 €</strong>. Med batteri använder du 70 till 80 % av din solel själv i stället för 30 till 50 %.',
    sections: [
      {
        id: 'priser',
        h: 'Priser per batteri',
        html: '<p>Riktpriser för 2026 för ett litiumjärnfosfatbatteri (LiFePO4), inklusive placering och anslutning, exklusive moms.</p>',
        table: {
          head: ['Batteri', 'Passar för', 'Riktpris'],
          rows: [
            ['5 kWh', 'Lägenhet eller litet hus, förbrukning på kvällen', '3 000 – 5 000 €'],
            ['10 kWh', 'Bostadshus med luftkonditionering och induktion', '5 500 – 9 000 €'],
            ['15 kWh', 'Villa eller hus med värmepump', '8 000 – 12 000 €'],
            ['Hybridväxelriktare till', 'Om du redan har paneler med vanlig växelriktare', '+ 1 000 – 2 000 €'],
            ['Reservkraftfunktion (backup)', 'Behålla strömmen vid ett nätfel', '+ 300 – 800 €'],
          ],
          note: 'Att installera batteri och paneler samtidigt är billigare än att komplettera senare. Se också kostnaden för <a href="/sv/kostnader/solceller/">solceller</a>.',
        },
      },
      {
        id: 'lonar',
        h: 'När lönar sig ett batteri?',
        html: `<ul>
<li><strong>Du bor där året runt eller större delen av året.</strong> Då använder du den lagrade elen varje kväll, och batteriet betalar sig på 8 till 12 år.</li>
<li><strong>Du vill ha ström vid ett avbrott.</strong> Med reservkraft fortsätter kylskåp, lampor, internet, larm och vattenpump att gå. På landsbygden, där avbrott är vanligare, är det det viktigaste skälet.</li>
<li><strong>Din finca saknar elnät.</strong> Då är ett batteri inget val, utan ett måste. Läs guiden om att <a href="/sv/guider/bo-off-grid-i-spanien/">bo off grid</a>.</li>
<li><strong>Du är där bara några veckor om året.</strong> Då lönar sig ett batteri oftast inte ekonomiskt. Ett virtuellt batteri hos ditt elbolag är billigare.</li>
</ul>`,
      },
      {
        id: 'plats',
        h: 'Var står batteriet?',
        html: '<p>Ett batteri håller längre om det står svalt, helst mellan 10 och 30 grader. I Axarquía är det viktigt: i juli blir ett förråd eller en takterrass i solen alldeles för varm. Ett rum inomhus, en källare eller ett ventilerat teknikrum på norrsidan är bäst. Batteriet måste också vara lätt att komma åt och får inte stå i ett fuktigt utrymme.</p>',
      },
      {
        id: 'exempel',
        h: 'Räkneexempel',
        html: '<p>Ett hus i Torre del Mar, bebott året runt, med 5 kWp solceller och en förbrukning på 6 000 kWh per år.</p>',
        table: {
          head: ['', 'Utan batteri', 'Med batteri 10 kWh'],
          rows: [
            ['Egen använd solel', 'ca 2 700 kWh', 'ca 4 800 kWh'],
            ['Besparing på elen (0,18 € per kWh)', 'ca 490 €', 'ca 860 €'],
            ['Kreditering för överskott (0,06 € per kWh)', 'ca 320 €', 'ca 190 €'],
            ['<strong>Total besparing per år</strong>', '<strong>ca 810 €</strong>', '<strong>ca 1 050 €</strong>'],
          ],
          note: 'Batteriet ger i det här exemplet cirka 240 € extra per år. Med 7 000 € för batteriet är det framför allt en investering i trygghet och oberoende, med en återbetalningstid nära livslängden. Stiger elpriserna går det fortare.',
        },
      },
      {
        id: 'bidrag',
        h: 'Bidrag och skatterabatt',
        html: '<p>För batterier vid egenproduktion finns det regelbundet bidragsprogram i Andalusien och från spanska staten, och många kommuner ger rabatt på IBI vid solenergi. Programmen ändras ofta. Fråga när du ber om offert vad som gäller just nu.</p>',
      },
      {
        id: 'smart',
        h: 'Tips: smart energistyrning',
        html: '<p>Låt paneler, batteri, laddbox, varmvattenberedare och poolpump samarbeta. Med <a href="/sv/kostnader/smart-energistyrning/">smart energistyrning</a> går de automatiskt när solen skiner eller elen är billig. Med ett rörligt elpris ger det ofta 150 till 400 € extra per år, och du följer allt i mobilen.</p>',
      },
    ],
    faq: [
      { q: 'Hur länge håller ett solcellsbatteri?', a: 'Ett litiumjärnfosfatbatteri klarar 6 000 cykler eller mer, alltså 12 till 15 år vid daglig användning. Tillverkarna ger oftast 10 års garanti.' },
      { q: 'Tar batteriet över automatiskt vid strömavbrott?', a: 'Bara om anläggningen har reservkraftfunktion (backup eller EPS). Utan den stängs även batteriet av vid ett avbrott. Fråga uttryckligen efter det.' },
      { q: 'Kan jag komplettera mina befintliga solceller med ett batteri?', a: 'Ja. Med en hybridväxelriktare eller en separat batteriväxelriktare går det med nästan alla anläggningar. Ibland är den befintliga växelriktaren redan lämplig.' },
      { q: 'Är ett solcellsbatteri säkert?', a: 'Litiumjärnfosfat är den säkraste typen och används nästan överallt. Låt en behörig installatör montera det, med rätt säkringar och på en sval, torr plats.' },
    ],
    links: [
      { href: '/sv/kostnader/solceller/', label: 'Kostnad för solceller' },
      { href: '/sv/guider/bo-off-grid-i-spanien/', label: 'Guide: bo off grid i Spanien' },
      { href: '/sv/problem/stromavbrott/', label: 'Strömmen går hela tiden' },
      { href: '/sv/guider/virtuellt-batteri-spanien/', label: 'Guide: virtuellt batteri och kreditering för solel' },
      { href: '/sv/guider/elbolag-i-spanien-jamforelse/', label: 'Guide: elbolag i Spanien jämförda' },
    ],
    related: ['costs:zonnepanelen', 'costs:laadpaal', 'costs:energiebeheer'],
    sources: [
      { name: 'Selectra, solceller med batteri: priser 2026', url: 'https://selectra.es/autoconsumo/instalacion/vivienda-unifamiliar' },
      { name: 'Red Eléctrica, rapport om strömavbrottet den 28 april 2025', url: 'https://www.ree.es/es/sala-de-prensa' },
      { name: 'IDAE, bidrag för energibesparing och förnybar energi', url: 'https://www.idae.es/ayudas-y-financiacion' },
    ],
    ctaTitle: 'Ett batteri till din anläggning?',
    ctaText: 'Skicka ett foto av din växelriktare eller ditt tak och din senaste elräkning. Du får råd om rätt batteri och ett pris.',
    minutes: 5,
    published: '2026-11-21',
  },
  {
    key: 'water',
    slug: 'vattentank-och-avloppsbrunn',
    title: 'Vad kostar vattentank, brunn och avloppsbrunn i Spanien?',
    seoTitle: 'Vattentank, brunn och avlopp på en finca i Spanien: kostnad',
    short: 'Vattentank och avlopp',
    description: 'Vatten och avlopp på en finca i Axarquía: priser för vattentank, cistern (aljibe), brunn, pump och filter samt avloppsbrunn och minireningsverk.',
    lead: 'Många fincor i Axarquía är inte anslutna till kommunalt vatten eller avlopp. Efter de senaste årens torka vill ägare ha tryggare vattenförsörjning, och gamla avloppsbrunnar uppfyller ofta inte längre reglerna. Så här ser kalkylen ut.',
    keyword: 'vattentank finca spanien',
    dienst: 'onderhoud',
    onderwerp: 'Jag vill gärna ha en offert på vatten eller avlopp till min finca (vattentank, brunn eller avloppsbrunn).',
    answer: 'En plasttank på 10 000 liter kostar uppställd och ansluten <strong>1 500 till 4 000 €</strong>. En pump med tryckkärl <strong>600 till 1 500 €</strong>. En ny avloppsbrunn <strong>2 500 till 6 000 €</strong>, ett minireningsverk <strong>4 000 till 9 000 €</strong>. En borrad brunn med tillstånd kommer lätt upp i <strong>10 000 till 30 000 €</strong>. Belopp exklusive moms.',
    sections: [
      {
        id: 'priser',
        h: 'Priser för vatten',
        table: {
          head: ['Vad', 'Vad som ingår', 'Riktpris'],
          rows: [
            ['Plasttank 5 000 liter', 'Ovan mark, på betongplatta, ansluten', '900 – 2 000 €'],
            ['Plasttank 10 000 – 20 000 liter', 'Ovan mark eller delvis nedgrävd', '1 500 – 5 000 €'],
            ['Renovera murad cistern (aljibe)', 'Rengöring, laga sprickor, tätskikt', '2 000 – 8 000 €'],
            ['Ny nedgrävd cistern', 'Betong, 20 – 40 m³, med takvatten', '8 000 – 20 000 €'],
            ['Pump med tryckkärl', 'Jämnt tryck i huset', '600 – 1 500 €'],
            ['Filter och UV-lampa', 'Dricksvatten från tank eller brunn', '800 – 2 000 €'],
            ['Borrad brunn (pozo)', 'Tillstånd, borrning, pump, ledning', '10 000 – 30 000 €'],
          ],
          note: 'Borrning kostar oftast 100 – 200 € per meter, och i Axarquía är 80 till 150 meters djup inte ovanligt. Det finns ingen garanti att du hittar vatten.',
        },
      },
      {
        id: 'avlopp',
        h: 'Priser för avlopp',
        table: {
          head: ['Vad', 'Vad som ingår', 'Riktpris'],
          rows: [
            ['Tömma avloppsbrunnen', 'Slambil, omhändertagande hos godkänt företag', '150 – 300 €'],
            ['Ny avloppsbrunn (fosa séptica)', '2 000 – 4 000 liter, med infiltration eller filter', '2 500 – 6 000 €'],
            ['Minireningsverk (depuradora)', 'Biologisk rening, renare avloppsvatten', '4 000 – 9 000 €'],
            ['Anslutning till kommunalt avlopp', 'Om det finns en ledning i närheten', '1 500 – 6 000 €'],
          ],
          note: 'En gammal murad brunn utan botten uppfyller oftast inte reglerna. Kommunen eller Junta kan kräva att den byts vid en ombyggnad eller efter ett klagomål.',
        },
      },
      {
        id: 'regler',
        h: 'Tillstånd och regler',
        html: `<ul>
<li><strong>Borrad brunn:</strong> du behöver tillstånd eller registrering hos vattenmyndigheten vid Junta de Andalucía. En brunn utan papper kan ge problem vid försäljning eller kontroll. För små uttag för eget bruk är förfarandet enklare.</li>
<li><strong>Avlopp:</strong> en avloppsbrunn eller ett reningsverk måste vara tätt och får inte förorena grund- eller flodvatten. För infiltration kan tillstånd behövas.</li>
<li><strong>Vid köp:</strong> låt alltid kontrollera vattenkällan och avloppet vid en <a href="/sv/besiktning/">besiktning före köp</a>.</li>
</ul>`,
      },
    ],
    faq: [
      { q: 'Hur stor måste min vattentank vara?', a: 'Räkna med 100 till 150 liter per person och dag, plus trädgård och pool. Två personer utan pool förbrukar cirka 1 000 liter per vecka eller mer. En tank på 10 000 liter ger då några veckors marginal mellan leveranserna.' },
      { q: 'Hur ofta måste en avloppsbrunn tömmas?', a: 'Oftast vartannat till vart fjärde år, beroende på storlek och hur ofta huset används. Vid uthyrning oftare.' },
      { q: 'Kan man dricka vattnet från en tank?', a: 'Bara med ett bra filter och eventuellt en UV-lampa, och om tanken är ren och sluten. Låt testa vattnet då och då.' },
    ],
    links: [
      { href: '/sv/guider/bo-off-grid-i-spanien/', label: 'Guide: bo off grid i Spanien' },
      { href: '/sv/guider/kopa-finca-i-spanien/', label: 'Guide: köpa finca i Spanien' },
      { href: '/sv/gor-det-sjalv/installera-vattentank/', label: 'Installera och koppla in en vattentank själv' },
      { href: '/sv/underhall/', label: 'Underhåll och reparationer' },
    ],
    related: ['problems:waterdruk', 'problems:beerput', 'costs:keermuur'],
    sources: [
      { name: 'CYPE, Generador de Precios (byggpriser Spanien)', url: 'https://generadordeprecios.info/' },
      { name: 'Junta de Andalucía, vatten och vattenrättigheter', url: 'https://www.juntadeandalucia.es/medioambiente/portal/areas-tematicas/agua' },
    ],
    ctaTitle: 'Ordna vatten eller avlopp på din finca?',
    ctaText: 'Berätta hur huset får vatten i dag och vart avloppet går. Du får ett förslag och ett pris.',
    minutes: 5,
    published: '2026-11-21',
  },
  {
    key: 'keermuur',
    slug: 'stodmur-och-dranering',
    title: 'Vad kostar en stödmur eller dränering i Spanien?',
    seoTitle: 'Stödmur och dränering i Spanien: kostnad (2026)',
    short: 'Stödmur och dränering',
    description: 'Vad kostar en stödmur, en dränering eller en betongväg på en finca i Axarquía? Priser per meter och vad som krävs i tillstånd.',
    lead: 'I Axarquía står många hus i en sluttning. En stödmur som ger efter, vatten som rinner mot huset efter en storm eller en väg som spolas bort: det är stora arbeten som går att undvika med bra avvattning.',
    keyword: 'stödmur spanien',
    dienst: 'onderhoud',
    onderwerp: 'Jag vill gärna ha en offert på en stödmur, dränering eller tillfartsvägen.',
    answer: 'En stödmur i betong på 1,5 till 2 meters höjd kostar i Axarquía oftast <strong>400 till 1 200 € per löpmeter</strong>, inklusive fundament och dränering. En naturstensmur <strong>150 till 350 € per m²</strong> väggyta. En avvattningsränna <strong>60 till 150 € per meter</strong>, en betongväg <strong>40 till 70 € per m²</strong>. Belopp exklusive moms.',
    sections: [
      {
        id: 'priser',
        h: 'Priser per arbete',
        table: {
          head: ['Arbete', 'Vad som ingår', 'Riktpris'],
          rows: [
            ['Stödmur i betong 1,5 – 2 m', 'Fundament, armerad betong, dränering bakom', '400 – 1 200 € per m'],
            ['Naturstensmur', 'Murad eller torrstensmur, i lokal stil', '150 – 350 € per m²'],
            ['Gabioner (gaviones)', 'Stålkorgar med sten, snabbt och vattengenomsläppligt', '120 – 250 € per m²'],
            ['Bygga upp en rasad mur', 'Röja rasmassor, nytt fundament, bygga upp igen', '2 000 – 10 000 €+'],
            ['Dränering bakom en mur eller vid huset', 'Dränrör, makadam, fiberduk', '40 – 80 € per m'],
            ['Avvattningsränna (canaleta)', 'Ränna med galler tvärs över terrass eller uppfart', '60 – 150 € per m'],
            ['Tillfartsväg i betong', 'Markarbete, armering, betong med räfflor', '40 – 70 € per m²'],
          ],
          note: 'För en stödmur över cirka 1,5 meter eller direkt intill huset kräver kommunen oftast bygglov med beräkning av en arkitekt eller ingenjör.',
        },
      },
      {
        id: 'varfor',
        h: 'Därför ger stödmurar efter',
        html: `<ul>
<li><strong>Ingen dränering.</strong> Regnvatten blir stående bakom muren och trycker omkull den. Det är överlägset den vanligaste orsaken.</li>
<li><strong>För svagt fundament</strong> eller en mur utan armering, ofta byggd utan beräkning.</li>
<li><strong>Kraftigt regn efter torka.</strong> En DANA på hösten ger på några timmar mer vatten än marken kan ta emot.</li>
<li><strong>Rötter och växtlighet</strong> som trycker isär muren.</li>
</ul>
<p>Läs också <a href="/sv/problem/vattenskador-och-stodmur/">vad du gör vid vattenskador eller en stödmur som spricker</a>.</p>`,
      },
      {
        id: 'tillstand',
        h: 'Tillstånd och landsbygdsmark',
        html: '<p>På landsbygdsmark gäller stränga regler. Att laga en befintlig mur går oftast med en anmälan, en ny mur eller en ny väg kräver ofta tillstånd. För ett hus med AFO-status är bara arbeten för säkerhet och underhåll tillåtna. Se sidan <em>Bygglov</em> för din kommun under <a href="/sv/orter/">Orter</a> och guiden om <a href="/sv/guider/afo-andalusien/">AFO och legalisering</a>.</p>',
      },
    ],
    faq: [
      { q: 'Betalar försäkringen en rasad stödmur?', a: 'Ibland. Många byggnadsförsäkringar täcker stormskador, men undantar skador på grund av bristande underhåll eller saknad dränering. Vid exceptionellt regn kan Consorcio de Compensación de Seguros betala. Läs guiden om hemförsäkring och skador.' },
      { q: 'Kan en gammal naturstensmur stå kvar?', a: 'Ofta ja, om den fortfarande står rakt och vattnet kan rinna ut genom fogarna. En utbuktning, stenar som flyttat sig eller sprickor är skäl att låta kontrollera den.' },
      { q: 'När är det bäst att göra de här arbetena?', a: 'På våren eller sommaren, när marken är torr. Efter en storm måste det ibland göras direkt för att undvika fler skador.' },
    ],
    links: [
      { href: '/sv/underhall/', label: 'Underhåll och reparationer' },
      { href: '/sv/tillfartsvag/', label: 'Bygga eller laga tillfartsväg' },
      { href: '/sv/guider/kopa-finca-i-spanien/', label: 'Guide: köpa finca i Spanien' },
      { href: '/sv/vader/oktober/', label: 'Vädret i oktober: det första kraftiga regnet' },
    ],
    related: ['problems:wateroverlast', 'costs:water', 'problems:scheuren'],
    sources: [
      { name: 'CYPE, Generador de Precios (byggpriser Spanien)', url: 'https://generadordeprecios.info/' },
      { name: 'Código Técnico de la Edificación, DB SE-C Cimientos (fundament och stödmurar)', url: 'https://www.codigotecnico.org/' },
    ],
    ctaTitle: 'Behöver du en stödmur eller dränering?',
    ctaText: 'Skicka foton av muren eller av stället där vattnet rinner. Du får råd och ett pris.',
    minutes: 5,
    published: '2026-11-21',
  },
  {
    key: 'laadpaal',
    slug: 'laddbox',
    title: 'Vad kostar en laddbox i Spanien?',
    seoTitle: 'Laddbox i Spanien: kostnad, ladda med solel och regler',
    short: 'Laddbox',
    description: 'Vad kostar en laddbox i Axarquía? Priser per situation, laddning med solceller och batteri och reglerna i ett flerfamiljshus.',
    lead: 'En elbil laddar du billigast hemma, och i Axarquía helst med egen solel. Vad kostar en laddbox, vad måste göras med anslutningen och går det även på en finca utan elnät?',
    keyword: 'laddbox spanien',
    dienst: 'energie',
    onderwerp: 'Jag vill gärna ha en offert på en laddbox.',
    answer: 'En laddbox på 7,4 kW kostar installerad i Axarquía oftast <strong>900 till 1 800 €</strong> plus moms, med egen säkringsgrupp och skydd. Ligger parkeringsplatsen långt från elmätaren, till exempel i garaget i ett flerfamiljshus, blir det <strong>1 500 till 3 000 €</strong>. Med solceller laddar du nästan gratis på dagen.',
    sections: [
      {
        id: 'priser',
        h: 'Priser per situation',
        html: '<p>Riktpriser för 2026, med laddbox, kabel, skydd och anmälan, plus moms.</p>',
        table: {
          head: ['Situation', 'Förklaring', 'Riktpris'],
          rows: [
            ['Laddbox 7,4 kW vid huset', 'Uppfart eller carport nära elcentralen', '900 – 1 800 €'],
            ['Laddbox i ett garage under huset', 'Lång kabel från din mätare, i ett flerfamiljshus', '1 500 – 3 000 €'],
            ['Smart laddbox för solel', 'Laddar med överskottet från dina paneler', '+ 200 – 500 €'],
            ['Högre abonnerad effekt', 'Från 4,6 till 7 kW eller mer hos nätägaren', '100 – 300 € en gång, högre fast avgift'],
            ['Extra paneler för bilen', '1,5 till 2 kWp, räcker till 1 000 mil per år', '2 000 – 3 500 €'],
          ],
          note: 'Låt installera laddboxen samtidigt med solcellerna eller ny el: det sparar håltagning och puts. Se kostnaderna för <a href="/sv/kostnader/solceller/">solceller</a> och <a href="/sv/kostnader/byta-elsystem/">ny el</a>.',
        },
      },
      {
        id: 'elbolag',
        h: 'Laddbox via ditt elbolag',
        html: `<p>Många spanska elbolag säljer en laddbox som paket, ofta till fast pris eller med månadsbetalning tillsammans med elavtalet. Kontrollera vad standardinstallationen innehåller:</p>
<ul>
<li><strong>En begränsad kabellängd</strong>, ofta 15 till 20 meter mellan elcentral och laddbox. Varje extra meter kostar mer, ofta 20 till 40 € per meter.</li>
<li><strong>Extra arbeten</strong> som grävning, håltagning, en egen mätare i garaget eller högre effekt debiteras separat.</li>
<li><strong>Ett avtal</strong>: ibland är du bunden ett eller två år, eller så gäller det låga priset bara med bolagets eltaxa.</li>
</ul>
<p>Står bilen långt från elcentralen, till exempel på en finca eller i ett flerfamiljshus, blir paketet ofta dyrare än väntat. Be då också om en offert från en oberoende installatör och jämför totalpriset.</p>`,
      },
      {
        id: 'sol',
        h: 'Ladda med solceller och batteri',
        html: `<p>En genomsnittlig elbil drar 15 till 18 kWh per 100 km. Med 1 000 mil per år blir det cirka 1 500 till 1 800 kWh. I Axarquía producerar 1 kWp paneler cirka 1 600 kWh per år, så 1 till 2 extra kWp täcker största delen.</p>
<ul>
<li><strong>Ladda på dagen.</strong> En smart laddbox anpassar laddeffekten efter panelernas aktuella överskott. Arbetar du hemifrån eller är pensionär laddar du så nästan helt med sol.</li>
<li><strong>Ladda hellre inte från husets batteri.</strong> Ett bilbatteri på 60 kWh är mycket större än ett husbatteri på 10 kWh. Ställ in att laddboxen inte tömmer batteriet, så att du har el på kvällen.</li>
<li><strong>Billigt från nätet på natten.</strong> Med en taxa med billig nattperiod laddar du utanför soltimmarna för en bråkdel av dagpriset.</li>
</ul>`,
      },
      {
        id: 'offgrid',
        h: 'Ladda på en finca utan elnät',
        html: `<p>Att ladda off grid går, men kräver en större anläggning. Bilen laddar då främst soliga eftermiddagar, med lägre effekt på 2 till 3,7 kW, så att växelriktaren också kan försörja resten av huset.</p>
<ul>
<li>Räkna med <strong>2 till 3 kWp extra paneler</strong> för bilen, eftersom du producerar mindre på vintern och inte har något nät som reserv.</li>
<li>Välj en <strong>växelriktare med tillräcklig effekt</strong> för laddbox, vattenpump och luftkonditionering samtidigt.</li>
<li>Låt laddboxen <strong>bara ladda med överskott</strong>, så att husbatteriet är fullt till natten.</li>
</ul>
<p>Läs mer i guiden om att <a href="/sv/guider/bo-off-grid-i-spanien/">bo off grid i Spanien</a>.</p>`,
      },
      {
        id: 'regler',
        h: 'Regler och anmälan',
        html: `<ul>
<li><strong>Behörig installatör:</strong> en laddpunkt omfattas av de spanska installationsreglerna (ITC-BT-52). En behörig installatör monterar den och anmäler den till Junta.</li>
<li><strong>I ett flerfamiljshus:</strong> för en laddbox på din egen parkeringsplats behöver du inte samfällighetens (<em>comunidad</em>) godkännande. Du meddelar det skriftligen i förväg och betalar själv installation och el.</li>
<li><strong>Effekt:</strong> många hus har 4,6 eller 5,75 kW. Med laddbox är 7 kW eller mer bekvämt, eller en laddbox med dynamisk lastbalansering som sänker effekten när ugnen går.</li>
<li><strong>Bidrag:</strong> det finns regelbundet statliga program för laddpunkter och ett avdrag i den spanska inkomstskatten (IRPF). Villkoren ändras; fråga när du ber om offert vad som gäller.</li>
</ul>`,
      },
      {
        id: 'smart',
        h: 'Tips: smart energistyrning',
        html: '<p>Låt paneler, batteri, laddbox, varmvattenberedare och poolpump samarbeta. Med <a href="/sv/kostnader/smart-energistyrning/">smart energistyrning</a> går de automatiskt när solen skiner eller elen är billig. Med ett rörligt elpris ger det ofta 150 till 400 € extra per år, och du följer allt i mobilen.</p>',
      },
    ],
    faq: [
      { q: 'Kan jag inte bara ladda i ett vanligt uttag?', a: 'Ibland, men ett vanligt uttag är inte gjort för 2,3 kW i timmar. Det blir varmt och laddar långsamt: 10 till 12 km per timme. En laddbox är säkrare och tre gånger så snabb.' },
      { q: 'Vad kostar en full laddning hemma?', a: 'Att ladda ett batteri på 60 kWh fullt till 0,18 € per kWh kostar cirka 11 €, under nattperioden ofta hälften och med egna solceller nästan ingenting.' },
      { q: 'Måste min abonnerade effekt höjas?', a: 'Oftast rekommenderas 7 kW eller mer. Med en smart laddbox som sänker effekten vid hög förbrukning räcker ibland din nuvarande effekt.' },
      { q: 'Kan jag köra elbil helt off grid?', a: 'Ja, med tillräckligt många extra paneler och en passande växelriktare. Du laddar då främst soliga eftermiddagar. För långa vinterveckor är en snabbladdare på vägen ett bra komplement.' },
    ],
    links: [
      { href: '/sv/kostnader/solceller/', label: 'Kostnad för solceller' },
      { href: '/sv/kostnader/solcellsbatteri/', label: 'Kostnad för solcellsbatteri' },
      { href: '/sv/guider/bo-off-grid-i-spanien/', label: 'Guide: bo off grid i Spanien' },
      { href: '/sv/guider/elbolag-i-spanien-jamforelse/#laddbox', label: 'Guide: laddbox via elbolaget' },
    ],
    related: ['costs:zonnepanelen', 'costs:thuisbatterij', 'costs:energiebeheer'],
    sources: [
      { name: 'BOE, Ley de Propiedad Horizontal, artikel 17.5 (laddpunkter i en comunidad)', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1960-10906' },
      { name: 'BOE, ITC-BT-52, installationer för laddning av elfordon', url: 'https://www.boe.es/buscar/doc.php?id=BOE-A-2014-13681' },
      { name: 'IDAE, bidrag för elektromobilitet', url: 'https://www.idae.es/ayudas-y-financiacion' },
    ],
    ctaTitle: 'En laddbox vid ditt hus?',
    ctaText: 'Skicka ett foto av din elcentral och parkeringsplatsen. Du får råd och en offert, även tillsammans med solceller.',
    minutes: 5,
    published: '2026-11-21',
  },
  {
    key: 'energiebeheer',
    slug: 'smart-energistyrning',
    title: 'Smart energistyrning: lägre elkostnad automatiskt',
    seoTitle: 'Smart energistyrning i Spanien: solel, batteri och laddbox',
    short: 'Smart energistyrning',
    description: 'Med smart energistyrning styr ditt hus i Spanien själv solceller, batteri, laddbox, varmvattenberedare och poolpump. Kostnad och vad det ger.',
    lead: 'Solceller, batteri och laddbox ger mest när de samarbetar. Med smart energistyrning sköter huset det själv: apparater går när solen skiner eller elen är billig, och du ser allt i mobilen, även när du är i Sverige.',
    keyword: 'smart energistyrning',
    dienst: 'energiebeheer',
    onderwerp: 'Jag vill gärna ha råd om smart energistyrning.',
    answer: 'Smart energistyrning kostar oftast <strong>400 till 1 500 €</strong> en gång, beroende på hur många apparater du kopplar in. Med solceller, batteri och rörligt elpris sparar du ofta <strong>150 till 400 € extra per år</strong>, utöver det panelerna redan ger.',
    sections: [
      {
        id: 'vad',
        h: 'Vad gör smart energistyrning?',
        html: `<p>En liten enhet i elcentralen kopplar ihop allt som producerar, lagrar eller drar mycket el. Systemet tittar på solen, elpriset och batteriets laddning och bestämmer varje kvart vad som ska hända:</p>
<ul>
<li><strong>Varmvattenberedare och poolpump</strong> går mitt på dagen, med egen solel.</li>
<li><strong>Bilen</strong> laddar med överskottet från panelerna eller på natten under de billigaste timmarna.</li>
<li><strong>Batteriet</strong> laddas under billiga timmar och levererar el under de dyra kvällstimmarna.</li>
<li><strong>Luftkonditioneringen</strong> förkyler huset med solel innan du kommer hem.</li>
<li>Du får ett <strong>meddelande</strong> vid strömavbrott, tomt batteri, låg nivå i vattentanken eller en läcka, även när du är i Sverige.</li>
</ul>
<p>Vi arbetar med öppna system som Home Assistant, som fungerar med nästan alla märken av växelriktare, batterier och laddboxar. Du är alltså inte bunden till en tillverkare eller ett elbolags app.</p>`,
      },
      {
        id: 'avtal',
        h: 'Fast eller rörligt elpris?',
        html: `<p>I Spanien väljer du ungefär mellan två sorters avtal:</p>
<ul>
<li><strong>Fast pris</strong> på den fria marknaden (<em>mercado libre</em>): samma pris per kWh varje timme, eller ett fast pris per tidszon. Du vet vad du får.</li>
<li><strong>Rörligt pris</strong>, till exempel den reglerade PVPC-taxan: priset ändras varje timme och publiceras dagen innan, ungefär som timpris i Sverige. Mitt på dagen och på natten är elen ofta billig, på kvällen dyr.</li>
</ul>
<p>Ett fast pris passar ett fritidshus utan batteri eller laddbox. Kan du flytta förbrukning ger ett rörligt pris mer: systemet läser morgondagens timpriser och lägger batteri, bil, varmvatten och poolpump i de billigaste timmarna. Ju mer du kan flytta, desto större skillnad.</p>`,
      },
      {
        id: 'priser',
        h: 'Vad kostar det?',
        html: '<p>Riktpriser för 2026, med installation och inställning, plus moms.</p>',
        table: {
          head: ['Paket', 'Vad du får', 'Riktpris'],
          rows: [
            ['Överblick', 'Energimätare, överblick i mobilen, meddelanden vid störningar', '400 – 700 €'],
            ['Smart styrning', 'Plus koppling av växelriktare, batteri, varmvattenberedare och poolpump', '700 – 1 200 €'],
            ['Komplett', 'Plus laddbox, luftkonditionering och styrning efter timpris', '1 000 – 1 500 €'],
            ['Support på distans', 'Uppdateringar, justeringar och hjälp på distans när något inte fungerar', '15 – 25 € per månad'],
            ['Support med service på plats', 'Plus snabb hjälp på plats vid störningar och en årlig kontroll', '40 – 60 € per månad'],
          ],
          note: 'Har du ännu inga solceller eller batteri? Se kostnaderna för <a href="/sv/kostnader/solceller/">solceller</a>, ett <a href="/sv/kostnader/solcellsbatteri/">solcellsbatteri</a> och en <a href="/sv/kostnader/laddbox/">laddbox</a>.',
        },
      },
      {
        id: 'offgrid',
        h: 'På en finca utan elnät',
        html: '<p>Off grid är smart energistyrning ännu viktigare, eftersom det inte finns något nät som reserv. Systemet slår på stora förbrukare först när batteriet är tillräckligt fullt, laddar bilen bara med överskott, varnar vid lågt batteri eller låg vattentank och visar på distans att allt fungerar. Se guiden om att <a href="/sv/guider/bo-off-grid-i-spanien/">bo off grid i Spanien</a>.</p>',
      },
    ],
    faq: [
      { q: 'Behöver jag solceller för smart energistyrning?', a: 'Inte nödvändigtvis. Redan med ett rörligt elpris kan varmvattenberedare, poolpump och bil gå under billiga timmar. Med paneler och batteri ger det dock mest.' },
      { q: 'Fungerar det med min växelriktare eller mitt batteri?', a: 'Nästan alltid. Öppna system som Home Assistant fungerar med de vanliga märkena. När vi gör offerten kontrollerar vi vad du har.' },
      { q: 'Kan jag följa allt från Sverige?', a: 'Ja. I mobilen ser du vad panelerna producerar, vad huset drar och hur fullt batteriet är, och du får ett meddelande om något inte stämmer.' },
      { q: 'Vad händer om internet går ner?', a: 'Systemet körs lokalt i huset och fortsätter att styra. Bara överblicken på distans försvinner tills internet är tillbaka.' },
    ],
    links: [
      { href: '/sv/kostnader/solceller/', label: 'Kostnad för solceller' },
      { href: '/sv/kostnader/solcellsbatteri/', label: 'Kostnad för solcellsbatteri' },
      { href: '/sv/kostnader/laddbox/', label: 'Kostnad för laddbox' },
      { href: '/sv/guider/elbolag-i-spanien-jamforelse/', label: 'Guide: elbolag i Spanien jämförda' },
      { href: '/sv/guider/virtuellt-batteri-spanien/', label: 'Guide: virtuellt batteri och kreditering för solel' },
    ],
    related: ['costs:zonnepanelen', 'costs:thuisbatterij', 'costs:laadpaal'],
    sources: [
      { name: 'Red Eléctrica, timpriser för PVPC-taxan', url: 'https://www.ree.es/es/datos/mercados/precio-voluntario-pequeno-consumidor' },
      { name: 'CNMC, jämförelsetjänst för eltaxor', url: 'https://comparador.cnmc.gob.es/' },
      { name: 'Home Assistant, öppen plattform för smarta hem', url: 'https://www.home-assistant.io/' },
    ],
    ctaTitle: 'Sänka elkostnaden automatiskt?',
    ctaText: 'Berätta vilka paneler, vilket batteri eller vilken laddbox du har och vilken eltaxa. Du får råd om vad du kan koppla in och vad det ger.',
    minutes: 5,
    published: '2026-11-21',
  },
  {
    key: 'schoorsteen',
    slug: 'skorsten-och-braskamin',
    title: 'Vad kostar sotning, skorstensreparation eller braskamin i Spanien?',
    seoTitle: 'Skorsten och braskamin i Spanien: kostnad (2026)',
    short: 'Skorsten och braskamin',
    description: 'Vad kostar det att sota eller laga skorstenen, eller att installera en braskamin eller pelletskamin, i Axarquía?',
    lead: 'På vintern är en öppen spis eller braskamin härlig i Axarquía, särskilt i ett byhus med tjocka väggar. Men en skorsten som inte sotats på flera år drar dåligt, läcker vid regn och kan börja brinna. Vad kostar sotning, reparation eller en ny kamin?',
    keyword: 'braskamin spanien',
    dienst: 'schoorsteen',
    onderwerp: 'Jag vill få min skorsten sotad eller kontrollerad.',
    answer: 'Sotning kostar i Axarquía oftast <strong>60 till 120 €</strong>, med kamerainspektion <strong>120 till 250 €</strong>. En braskamin med nytt rökrör i rostfritt stål kostar installerad <strong>2 500 till 6 000 €</strong> plus moms. Att laga en gammal murad skorsten går från några hundra euro för en huv till 3 000 € eller mer.',
    sections: [
      {
        id: 'priser',
        h: 'Priser per arbete',
        html: '<p>Riktpriser för 2026, med material och arbete, plus moms.</p>',
        table: {
          head: ['Arbete', 'Förklaring', 'Riktpris'],
          rows: [
            ['Sotning', 'Öppen spis eller braskamin, med kontroll', '60 – 120 €'],
            ['Sotning med kamerainspektion', 'Vid köp, efter lång tid utan användning eller efter en soteld', '120 – 250 €'],
            ['Regnhuv eller vindhuv', 'Mot regn, fåglar och rök som slår tillbaka', '150 – 400 €'],
            ['Laga anslutningen vid taket', 'Läckage runt skorstenen', '400 – 1 500 €'],
            ['Laga murad skorsten', 'Fogning, puts, mura om toppen', '800 – 3 000 €'],
            ['Insatsrör i rostfritt stål i befintlig skorsten', 'För en kamin i en gammal eller otät skorsten', '1 000 – 2 500 €'],
            ['Braskamin med nytt rökrör', 'Kamin, dubbelväggigt rör i rostfritt stål och takgenomföring', '2 500 – 6 000 €'],
            ['Pelletskamin', 'Kamin och rökrör, med termostat och timer', '3 000 – 7 000 €'],
          ],
          note: 'Läcker taket runt skorstenen? Se också kostnaderna för <a href="/sv/kostnader/tak-och-takterrass/">tak och takterrass</a>.',
        },
      },
      {
        id: 'sotning',
        h: 'Hur ofta ska skorstenen sotas?',
        html: `<p>Eldar du regelbundet, låt sota skorstenen <strong>varje år</strong>, helst i september eller oktober före eldningssäsongen. Eldar du bara några veckor om året räcker oftast vartannat år, med en kontroll av bon och lösa stenar. I Spanien finns ingen kommunal sotning som i Sverige: du beställer den själv.</p>
<ul>
<li><strong>Sot och tjära:</strong> i Axarquía eldar man mycket oliv- och tallved. Tallved och fuktig ved lämnar mycket tjära (glanssot) i röret, den vanligaste orsaken till soteld.</li>
<li><strong>Fågelbon:</strong> en skorsten som inte använts på månader är på våren ofta igensatt av fågelbon.</li>
<li><strong>Försäkring:</strong> vissa försäkringsbolag kräver efter en brand bevis på att skorstenen sotats. Spara fakturan.</li>
</ul>`,
      },
      {
        id: 'kamin',
        h: 'Installera braskamin eller pelletskamin',
        html: `<p>En sluten braskamin ger tre till fyra gånger så mycket värme av samma ved som en öppen spis. En pelletskamin är renare och fungerar med termostat och timer, praktiskt om du vill värma upp huset på distans. Tänk på:</p>
<ul>
<li><strong>Rökröret</strong> måste passa kaminen och gå tillräckligt högt över taket. En gammal murad skorsten får ofta ett insatsrör i rostfritt stål.</li>
<li><strong>Avstånd till trä</strong>, bjälkar och vasstak (<em>cañizo</em>) är viktigt. I gamla byhus går röret ofta genom ett trätak; då krävs en isolerad genomföring.</li>
<li><strong>I ett flerfamiljshus</strong> behöver du för ett rör genom fasad eller tak oftast samfällighetens (<em>comunidad</em>) godkännande.</li>
<li><strong>Värme med luftkonditionering</strong> är vid kusten ofta billigare. En kamin är framför allt fin i bergsbyarna och för stämningen. Se <a href="/sv/kostnader/luftkonditionering-och-varmepump/">luftkonditionering och värmepump</a>.</li>
</ul>`,
      },
    ],
    faq: [
      { q: 'Kan jag sota skorstenen själv?', a: 'Med ett sotarset går det, men en fackman ser också sprickor, lösa stenar och tjärbeläggningar och ger dig ett intyg för försäkringen. På ett högt eller brant tak är det inte att rekommendera att göra det själv.' },
      { q: 'Hur känner jag igen en soteld?', a: 'Ett dånande ljud, mycket rök eller gnistor ur skorstenen och en mycket het skorstensvägg. Stäng kaminens luftintag, gå ut och ring 112. Låt kontrollera skorstenen innan du eldar igen.' },
      { q: 'Vilken ved brinner bäst?', a: 'Torr lövved som oliv eller mandel med under 20 % fukt. Låt färsk ved torka minst ett år. Tall och fuktig ved ger mer sot och tjära.' },
    ],
    links: [
      { href: '/sv/guider/varme-och-kyla-i-spanien/', label: 'Guide: värme och kyla jämförda' },
      { href: '/sv/problem/kaminen-ryker-in/', label: 'Kaminen ryker in' },
      { href: '/sv/gor-det-sjalv/installera-braskamin/', label: 'Installera braskamin och skorsten själv' },
      { href: '/sv/guider/forbereda-huset-for-vintern-i-spanien/', label: 'Guide: förbered huset för vintern' },
      { href: '/sv/underhall/', label: 'Underhåll och reparationer' },
    ],
    related: ['problems:schoorsteen', 'costs:ramen', 'costs:airco'],
    sources: [
      { name: 'BOE, RITE (värmeinstallationer), IT 1.3 och IT 3', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2007-15820' },
    ],
    ctaTitle: 'Sotning eller en ny kamin?',
    ctaText: 'Skicka ett foto av din spis eller kamin och av skorstenen på taket. Du får ett pris på sotning, reparation eller en ny kamin.',
    minutes: 5,
    published: '2026-11-21',
  },
  {
    key: 'ramen',
    slug: 'fonster-och-karmar',
    title: 'Vad kostar nya fönster i Spanien?',
    seoTitle: 'Byta fönster i Spanien: priser och kostnad (2026)',
    short: 'Fönster',
    description: 'Vad kostar nya fönster i Axarquía? Priser per fönster i aluminium, PVC och trä, tvåglas, skjutdörrar och rullgardiner.',
    lead: 'Många hus i Axarquía har fortfarande enkelglas i tunna aluminiumkarmar. På sommaren kommer värmen in, på vintern är det kallt och dragigt och kondensen rinner nerför rutorna. Nya fönster gör stor skillnad för komforten och elräkningen.',
    keyword: 'byta fönster spanien',
    dienst: 'ramen',
    onderwerp: 'Jag vill gärna ha en offert på nya fönster.',
    answer: 'Ett nytt fönster på cirka 120 × 120 cm med tvåglas kostar monterat oftast <strong>400 till 800 €</strong> i aluminium med köldbrygga och <strong>350 till 700 €</strong> i PVC, plus moms. En skjutdörr till terrassen kostar <strong>1 200 till 3 000 €</strong>. För ett helt hus med åtta till tolv fönster räknar du med 5 000 till 12 000 €.',
    sections: [
      {
        id: 'priser',
        h: 'Priser per fönster',
        html: '<p>Riktpriser för 2026 för ett fönster på cirka 120 × 120 cm, med demontering av det gamla fönstret, montering och putsning runt om, plus moms.</p>',
        table: {
          head: ['Typ', 'Förklaring', 'Riktpris'],
          rows: [
            ['Aluminium med bruten köldbrygga (RPT)', 'Vanligast i Spanien, smalt och stabilt', '400 – 800 €'],
            ['PVC', 'Isolerar bra, välj en kvalitet som tål sol', '350 – 700 €'],
            ['Trä eller trä-aluminium', 'För ett byhus eller en skyddad bykärna', '700 – 1 400 €'],
            ['Skjutdörr till terrassen', '2 till 3 meter bred, tvåglas', '1 200 – 3 000 €'],
            ['Bara byta glaset', 'Tvåglas i en bra befintlig karm', '100 – 250 € per m²'],
            ['Rullgardin utvändig (persiana)', 'Aluminium, manuell eller elektrisk', '250 – 600 €'],
            ['Myggnät (mosquitera)', 'Fast, rullbart eller skjutbart', '60 – 150 €'],
          ],
          note: 'Fönster går bra att planera in i en större renovering: se <a href="/sv/renovering/">renovering</a>.',
        },
      },
      {
        id: 'val',
        h: 'Vilket fönster och vilket glas?',
        html: `<ul>
<li><strong>Aluminium med bruten köldbrygga (<em>RPT</em>):</strong> karmen har en isolerande list, så att insidan inte längre blir kall och blöt. Underhållsfritt och i alla färger.</li>
<li><strong>PVC:</strong> bäst isolering för pengarna. Välj en profil för stark sol, annars kan en mörk färg slå sig.</li>
<li><strong>Glas:</strong> tvåglas med 12 till 16 mm mellanrum är standard. På söder- och västsidan hjälper solskyddsglas (<em>control solar</em>) mot värmen. På bottenvåningen rekommenderas laminerat säkerhetsglas. Treglas som i Sverige behövs sällan här.</li>
<li><strong>Rullgardiner och myggnät:</strong> en utvändig rullgardin håller värmen ute på sommaren och ger trygghet när du är borta. Myggnät är nästan oumbärliga i Axarquía.</li>
</ul>`,
      },
      {
        id: 'tillstand',
        h: 'Tillstånd och regler',
        html: `<ul>
<li><strong>Byta fönster i samma storlek</strong> är oftast en enkel anmälan hos kommunen (<em>declaración responsable</em> eller <em>obra menor</em>).</li>
<li><strong>I en historisk bykärna</strong>, till exempel i Frigiliana eller Cómpeta, gäller ofta regler för färg och material, till exempel trä eller en träfärg.</li>
<li><strong>I ett flerfamiljshus</strong> måste fasaden vara enhetlig. Fråga samfälligheten (<em>comunidad</em>) vilken färg och modell som är tillåten.</li>
<li><strong>Bidrag:</strong> för energieffektivisering finns regelbundet program och ett avdrag i den spanska inkomstskatten (IRPF). Läs vad som gäller 2026 i guiden om <a href="/sv/guider/bidrag-energieffektivisering-spanien/">bidrag för energieffektivisering</a>.</li>
</ul>`,
      },
    ],
    faq: [
      { q: 'Hur lång tid tar det att byta fönster?', a: 'Fönstren tillverkas efter mått, vilket oftast tar tre till sex veckor. Monteringen tar ungefär en halv dag per fönster, ett helt hus två till fyra dagar.' },
      { q: 'Hjälper nya fönster mot kondens och mögel?', a: 'Ofta ja. Med tvåglas och en isolerad karm blir insidan mycket mindre kall, så det bildas mindre kondens. Fortsätt ändå att vädra. Se drag och kondens vid fönster.' },
      { q: 'Kan jag bara byta glaset?', a: 'Om karmarna är bra och djupa nog för tvåglas, ja. Med gamla tunna aluminiumkarmar utan bruten köldbrygga förblir karmen kall, och då lönar sig ett nytt fönster mer.' },
    ],
    links: [
      { href: '/sv/problem/drag-och-kondens-vid-fonster/', label: 'Drag och kondens vid fönster' },
      { href: '/sv/problem/fukt-och-mogel/', label: 'Fukt och mögel' },
      { href: '/sv/gor-det-sjalv/byta-fonster-sjalv/', label: 'Byta fönster själv' },
      { href: '/sv/renovering/', label: 'Renovering' },
    ],
    related: ['problems:tocht', 'costs:airco', 'problems:vocht'],
    sources: [
      { name: 'Código Técnico de la Edificación, DB HE (energibesparing)', url: 'https://www.codigotecnico.org/DocumentosCTE/AhorroEnergia.html' },
      { name: 'IDAE, bidrag för energibesparing i bostäder', url: 'https://www.idae.es/ayudas-y-financiacion' },
    ],
    ctaTitle: 'Nya fönster till ditt hus?',
    ctaText: 'Skicka foton av dina fönster och ungefärliga mått. Du får råd om material och glas och ett pris per fönster.',
    minutes: 5,
    published: '2026-11-21',
  },
];
