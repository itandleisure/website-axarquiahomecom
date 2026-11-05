import type { Topic } from './types';

// Problemseiten auf Deutsch.
export const problemsDe: Topic[] = [
  {
    key: 'vocht',
    slug: 'feuchtigkeit-und-schimmel',
    title: 'Feuchtigkeit und Schimmel in Ihrem Haus in Spanien: Ursache und Lösung',
    seoTitle: 'Feuchtigkeit und Schimmel im Haus in Spanien: Ursachen, Lösungen, Kosten',
    short: 'Feuchtigkeit und Schimmel',
    description: 'Feuchte Flecken, Schimmel oder muffiger Geruch in Ihrem Haus in der Axarquía? So unterscheiden Sie aufsteigende Feuchte, Kondenswasser und Lecks, was Sie selbst tun und was die Lösung kostet.',
    lead: 'In einem sonnigen Land erwarten es viele nicht, aber Feuchtigkeit ist eine der häufigsten Klagen in Häusern der Axarquía. Vor allem in Dorfhäusern, Häusern am Hang und Häusern, die monatelang leer stehen.',
    keyword: 'feuchtigkeit haus spanien',
    dienst: 'onderhoud',
    onderwerp: 'Ich habe Feuchtigkeit oder Schimmel in meinem Haus.',
    answer: 'Feuchtigkeit in einem spanischen Haus hat fast immer eine von drei Ursachen: <strong>Kondenswasser</strong> (ein geschlossenes, kaltes Haus ohne Lüftung), <strong>aufsteigende oder seitlich eindringende Feuchte</strong> (alte, ungedämmte Mauern oder eine Wand am Hang) oder <strong>ein Leck</strong> (Dach, Leitung, Abfluss). Erst die Ursache finden, dann streichen.',
    sections: [
      {
        id: 'erkennen',
        h: 'Welche Feuchtigkeit haben Sie?',
        table: {
          head: ['Was Sie sehen', 'Wahrscheinliche Ursache'],
          rows: [
            ['Schwarze Punkte in Ecken, hinter Schränken, an kalten Wänden; schlimmer im Winter', 'Kondenswasser: zu wenig Lüftung und kalte Wände'],
            ['Feuchtrand und abblätternde Farbe unten an der Wand, bis ± 1 Meter, Salzkristalle', 'Aufsteigende Feuchtigkeit aus dem Boden'],
            ['Nasse Wand auf der Hangseite oder unter der Terrasse', 'Seitlich eindringende Feuchte: Erde und Regenwasser an der Wand'],
            ['Fleck an Decke oder Wand, der nach Regen größer wird', 'Undichtes Dach oder Dachterrasse'],
            ['Fleck, der immer nass ist, auch bei trockenem Wetter', 'Undichte Wasserleitung oder Abfluss'],
          ],
        },
      },
      {
        id: 'selbst',
        h: 'Was Sie selbst tun können',
        html: `<ul>
<li>Lüften Sie täglich, auch im Winter, und öffnen Sie beim Kochen oder Duschen ein Fenster.</li>
<li>Nutzen Sie einen Luftentfeuchter. In einem leerstehenden Haus geht das mit einem Schlauch zum Abfluss, damit der Behälter nicht vollläuft.</li>
<li>Stellen Sie Schränke zehn Zentimeter von der Außenwand weg.</li>
<li>Heizen Sie im Winter ein wenig: Ein Haus, das ganz auskühlt, zieht Feuchtigkeit an.</li>
<li>Entfernen Sie Schimmel mit Schimmelentferner oder verdünnter Bleiche. Streichen, ohne die Ursache anzugehen, hilft nur ein paar Monate.</li>
</ul>`,
      },
      {
        id: 'loesung',
        h: 'Die Lösung und was sie kostet',
        table: {
          head: ['Lösung', 'Bei', 'Richtwert'],
          rows: [
            ['Mechanische Lüftung oder Lüftungsgitter', 'Kondenswasser', '300 – 2.500 €'],
            ['Injektion gegen aufsteigende Feuchte', 'Aufsteigende Feuchtigkeit', '60 – 120 € pro laufendem Meter Wand'],
            ['Kalk- oder Sanierputz statt Zementputz', 'Aufsteigende Feuchte in alten Mauern', '40 – 80 € pro m²'],
            ['Drainage und Abdichtung von außen', 'Wand am Hang', '150 – 400 € pro laufendem Meter'],
            ['Leck suchen und reparieren', 'Leitung oder Dach', '300 – 1.500 €'],
          ],
          note: 'Richtwerte ohne MwSt. Bei einer Finca am Hang ist eine Drainage oft die einzige dauerhafte Lösung.',
        },
      },
      {
        id: 'leer',
        h: 'Feuchtigkeit in einem leerstehenden Ferienhaus',
        html: '<p>Ein Haus, das von November bis März verschlossen ist, riecht bei der Ankunft oft muffig. Matratzen, Kissen und Kleidung können schimmeln. Lassen Sie das Haus regelmäßig lüften und den Entfeuchter kontrollieren. Genau das macht die <a href="/de/hausbetreuung/">Hausbetreuung</a>: feste Besuche, Fenster auf, Fotos und sofortiges Handeln, wenn ein feuchter Fleck auftaucht.</p>',
      },
    ],
    faq: [
      { q: 'Warum sind spanische Häuser im Winter so feucht?', a: 'Viele Häuser sind gebaut, um im Sommer kühl zu bleiben: dicke Steinmauern, Fliesenböden, keine Dämmung und keine Zentralheizung. Im Winter kühlen die Wände ab und die Feuchtigkeit der Luft schlägt sich darauf nieder.' },
      { q: 'Ist Schimmel gefährlich?', a: 'Schimmel kann Atemwegsbeschwerden verursachen und ist vor allem für Menschen mit Asthma oder Allergien ein Problem. Gehen Sie ihn deshalb schnell an und schlafen Sie nicht in einem stark verschimmelten Raum.' },
      { q: 'Muss ich Feuchtigkeit beim Verkauf angeben?', a: 'Bekannte Mängel sollten Sie dem Käufer mitteilen. Umgekehrt gilt: Lassen Sie beim Kauf ein Gutachten machen. Ein Feuchtemessgerät zeigt, was ein frischer Anstrich verbirgt.' },
    ],
    links: [
      { href: '/de/instandhaltung/', label: 'Instandhaltung und Reparaturen' },
      { href: '/de/hausbetreuung/', label: 'Hausbetreuung und Schlüsselservice' },
      { href: '/de/immobiliengutachten/', label: 'Gutachten vor dem Kauf' },
    ],
    related: ['problems:daklekkage', 'costs:dak', 'costs:airco'],
    sources: [
      { name: 'Código Técnico de la Edificación, DB HS 1 Schutz vor Feuchtigkeit', url: 'https://www.codigotecnico.org/' },
      { name: 'CYPE, Generador de Precios (Baupreise Spanien)', url: 'https://generadordeprecios.info/' },
    ],
    ctaTitle: 'Feuchtigkeit oder Schimmel im Haus?',
    ctaText: 'Schicken Sie Fotos der Stellen und sagen Sie uns, wo das Haus steht. Wir finden die Ursache und nennen einen Preis für die Lösung.',
    minutes: 5,
    published: '2026-11-05',
  },
  {
    key: 'daklekkage',
    slug: 'undichtes-dach',
    title: 'Undichtes Dach an Ihrem Haus in Spanien: was tun?',
    seoTitle: 'Undichtes Dach in Spanien: erste Schritte, Ursachen und Kosten',
    short: 'Undichtes Dach',
    description: 'Ist das Dach oder die Dachterrasse Ihres Hauses in der Axarquía undicht? Was Sie sofort tun, auch aus Deutschland, woher das Leck meist kommt und was die Reparatur kostet.',
    lead: 'Nach einem kräftigen Regenguss kommt die Nachricht der Nachbarn: Wasser läuft die Wand herunter. Undichtigkeiten sind in der Axarquía das häufigste Problem, vor allem nach den ersten Herbststürmen. So gehen Sie vor.',
    keyword: 'undichtes dach spanien',
    dienst: 'onderhoud',
    onderwerp: 'Mein Dach oder meine Dachterrasse ist undicht.',
    answer: 'Bei einem undichten Dach: <strong>Schaden begrenzen</strong> (Eimer, Möbel weg, Strom aus, wenn Wasser in der Nähe der Elektrik ist), <strong>Fotos machen</strong> für die Versicherung und <strong>die Dachabläufe prüfen lassen</strong>: verstopfte Abläufe sind die häufigste Ursache. Eine lokale Reparatur kostet 300 bis 1.500 €; eine Dachterrasse neu abdichten 30 bis 130 € pro m².',
    sections: [
      {
        id: 'sofort',
        h: 'Was Sie sofort tun',
        html: `<ol>
<li>Stellen Sie Eimer auf und räumen Sie Möbel, Teppiche und Elektrogeräte weg.</li>
<li>Kommt das Wasser an Lampen oder Steckdosen? Schalten Sie diesen Stromkreis im Sicherungskasten ab.</li>
<li>Machen Sie Fotos und Videos vom Schaden innen und, wenn es sicher ist, vom Dach.</li>
<li>Melden Sie den Schaden Ihrer Versicherung. Viele spanische Policen haben eine Notrufnummer für Wasserschäden.</li>
<li>Sind die Abläufe auf der Dachterrasse verstopft? Machen Sie sie frei. Oft läuft das Wasser dann sofort ab.</li>
</ol>
<p>Sie sind nicht selbst in Spanien? Dann ist es gut, wenn jemand mit Schlüssel innerhalb weniger Stunden nachsehen kann. Dafür gibt es die <a href="/de/hausbetreuung/">Hausbetreuung</a>.</p>`,
      },
      {
        id: 'ursachen',
        h: 'Woher kommt das Leck meistens?',
        html: `<ul>
<li><strong>Verstopfte Abläufe</strong> auf der Dachterrasse, durch Laub, Sand oder Saharastaub (<em>calima</em>). Das Wasser bleibt stehen und sucht sich einen Weg nach innen.</li>
<li><strong>Verschlissene Abdichtung</strong> unter oder auf den Fliesen der Dachterrasse. Nach 15 bis 25 Jahren ist sie oft am Ende.</li>
<li><strong>Lose oder gebrochene Ziegel</strong> auf einem Schrägdach, zum Beispiel nach einem Sturm.</li>
<li><strong>Anschlüsse</strong> an Schornstein, Aufkantungen und Dachdurchführungen für Klimaanlage oder Solaranlage.</li>
<li><strong>Risse</strong> in Fassade oder Dachrand, durch die Schlagregen eindringt.</li>
</ul>`,
      },
      {
        id: 'kosten',
        h: 'Was kostet die Reparatur?',
        table: {
          head: ['Reparatur', 'Richtwert'],
          rows: [
            ['Abläufe und Rinnen freimachen und reparieren', '150 – 600 €'],
            ['Lokales Leck suchen und abdichten', '300 – 1.500 €'],
            ['Dachterrasse beschichten (Flüssigabdichtung)', '30 – 50 € pro m²'],
            ['Dachterrasse: neue Abdichtungsbahn und neue Fliesen', '70 – 130 € pro m²'],
            ['Ziegeldach neu eindecken', '60 – 110 € pro m²'],
            ['Wasserschaden innen beheben (Putz, Anstrich)', '300 – 2.000 €'],
          ],
          note: 'Richtwerte ohne MwSt. Mehr Details und ein Rechenbeispiel auf der Seite zu den Kosten für Dach und Dachterrasse.',
        },
      },
      {
        id: 'vorbeugen',
        h: 'Vorbeugen',
        html: '<p>Lassen Sie das Dach jedes Jahr im September oder Oktober prüfen, vor den Herbstregen und der <em>gota fría</em>, und nach jedem Sturm oder jeder Calima. Das kostet wenig und verhindert die meisten Lecks. Siehe auch <a href="/de/kosten/dach-und-dachterrasse/">Kosten für Dach und Dachterrasse</a>.</p>',
      },
    ],
    faq: [
      { q: 'Zahlt meine Versicherung ein undichtes Dach?', a: 'Die meisten Wohnversicherungen zahlen den Wasserschaden innen. Die Reparatur des Daches selbst wird oft nicht erstattet, wenn das Leck durch Verschleiß oder mangelnde Wartung entstanden ist. Bei Sturmschäden (oft ab einer bestimmten Windgeschwindigkeit) manchmal schon. Prüfen Sie Ihre Police.' },
      { q: 'Wer zahlt bei einer Wohnung?', a: 'Das Dach ist meist Gemeinschaftseigentum. Dann ist die Eigentümergemeinschaft (comunidad) für die Reparatur zuständig. Bei einer privaten Dachterrasse kann das anders sein; das steht in der Teilungserklärung.' },
      { q: 'Kann das Dach im Winter repariert werden?', a: 'Ja, zwischen den Regenschauern. Beschichtungen und Abdichtungsbahnen brauchen aber ein paar trockene Tage. Eine provisorische Abdeckung verhindert weitere Schäden, bis das Wetter mitspielt.' },
    ],
    links: [
      { href: '/de/kosten/dach-und-dachterrasse/', label: 'Kosten für Dach und Dachterrasse' },
      { href: '/de/instandhaltung/', label: 'Instandhaltung und Reparaturen' },
      { href: '/de/hausbetreuung/', label: 'Hausbetreuung und Schlüsselservice' },
    ],
    related: ['costs:dak', 'problems:vocht', 'problems:scheuren'],
    sources: [
      { name: 'AEMET, Unwetterwarnungen für Regen und gota fría (DANA)', url: 'https://www.aemet.es/' },
      { name: 'Ley 49/1960 de Propiedad Horizontal (Eigentümergemeinschaft und Gemeinschaftseigentum)', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1960-10906' },
      { name: 'CYPE, Generador de Precios (Baupreise Spanien)', url: 'https://generadordeprecios.info/' },
    ],
    ctaTitle: 'Ist Ihr Dach undicht?',
    ctaText: 'Schicken Sie Fotos vom Schaden. Wir sehen nach, auch wenn Sie nicht in Spanien sind.',
    minutes: 5,
    published: '2026-11-05',
  },
  {
    key: 'scheuren',
    slug: 'risse-in-waenden',
    title: 'Risse in Wänden: wann müssen Sie sich Sorgen machen?',
    seoTitle: 'Risse in den Wänden Ihres Hauses in Spanien: harmlos oder gefährlich?',
    short: 'Risse in Wänden',
    description: 'Risse in den Wänden Ihres Hauses in der Axarquía? So unterscheiden Sie einen harmlosen Schwindriss von einer Setzung, was ein Gutachten kostet und was die Sanierung kostet.',
    lead: 'Fast jedes Haus in der Axarquía hat irgendwo einen Riss. Meist ist er harmlos. Auf den Tonböden in den Hügeln können Häuser aber auch wirklich absacken. So erkennen Sie den Unterschied.',
    keyword: 'risse in der wand haus spanien',
    dienst: 'onderhoud',
    onderwerp: 'Ich habe Risse in den Wänden meines Hauses.',
    answer: 'Haarrisse im Putz (unter 1 mm) sind meist harmlos: Schwinden und Temperatur. Lassen Sie einen Riss untersuchen, wenn er <strong>breiter als 3 mm ist, schräg von einer Fenster- oder Türecke verläuft, treppenförmig durch das Mauerwerk geht oder wächst</strong>, und wenn Türen und Fenster klemmen. Ein Gutachten durch einen Bausachverständigen (<em>aparejador</em>) kostet 300 bis 800 €.',
    sections: [
      {
        id: 'arten',
        h: 'Harmlos oder nicht?',
        table: {
          head: ['Riss', 'Was er meist bedeutet'],
          rows: [
            ['Netzartige Haarrisse im Putz', 'Schwinden des Putzes. Kosmetisch.'],
            ['Gerader Riss, wo alter und neuer Bauteil aufeinandertreffen', 'Anschluss zweier Bauteile. Meist harmlos, aber gegen Regen schließen.'],
            ['Waagerechter Riss unter dem Dach oder der Dachterrasse', 'Ausdehnung des Daches durch Hitze. Beobachten.'],
            ['Schräger Riss aus der Ecke eines Fensters oder einer Tür', 'Mögliche Setzung des Fundaments. Untersuchen lassen.'],
            ['Treppenförmiger Riss durch die Fugen, breiter als 3 mm', 'Setzung. Untersuchen lassen.'],
            ['Riss, der wächst, klemmende Türen, schiefer Boden', 'Aktive Bewegung. Schnell untersuchen lassen.'],
          ],
        },
      },
      {
        id: 'axarquia',
        h: 'Warum Häuser in der Axarquía reißen',
        html: `<ul>
<li><strong>Tonboden.</strong> In Teilen der Hügel gibt es Ton, der bei Nässe quillt und bei Trockenheit schrumpft. Nach einer langen Trockenperiode mit anschließendem Starkregen bewegen sich Fundamente.</li>
<li><strong>Hanglagen.</strong> Häuser und Terrassen am Hang brauchen Stützmauern. Wenn diese das Wasser nicht gut ableiten, beginnen sie zu rutschen.</li>
<li><strong>Anbauten.</strong> Ein Anbau auf einem anderen Fundament als das alte Haus setzt sich anders. Am Anschluss entsteht dann ein Riss.</li>
<li><strong>Undichte Leitungen.</strong> Ein undichter Abfluss unter dem Haus spült die Erde unter dem Fundament weg.</li>
<li><strong>Erdbeben.</strong> In der Provinz Málaga gibt es leichte Erdbeben. Sie verursachen selten Schäden, können bestehende Risse aber vergrößern.</li>
</ul>`,
      },
      {
        id: 'beobachten',
        h: 'Einen Riss beobachten',
        html: '<p>Unsicher? Ziehen Sie an beiden Enden des Risses einen Bleistiftstrich mit Datum und messen Sie die Breite. Oder lassen Sie einen Rissmonitor (<em>fisurómetro</em> oder <em>testigo</em>) anbringen. Prüfen Sie nach einigen Monaten, ob der Riss länger oder breiter geworden ist. Wer nicht vor Ort ist, lässt das bei den regelmäßigen Kontrollen der <a href="/de/hausbetreuung/">Hausbetreuung</a> mit erledigen.</p>',
      },
      {
        id: 'kosten',
        h: 'Was kosten Gutachten und Sanierung?',
        table: {
          head: ['Arbeit', 'Richtwert'],
          rows: [
            ['Untersuchung und Bericht durch Bausachverständigen (aparejador oder arquitecto técnico)', '300 – 800 €'],
            ['Kosmetische Risse schließen und streichen', '200 – 1.000 €'],
            ['Risse mit Edelstahlankern vernadeln (grapado) und Putz ausbessern', '1.000 – 5.000 €'],
            ['Drainage entlang Fundament oder Stützmauer', '150 – 400 € pro laufendem Meter'],
            ['Fundament mit Mikropfählen verstärken', '15.000 – 60.000 €+'],
          ],
          note: 'Richtwerte ohne MwSt. Schwere Setzungen sind selten, aber dann ist zuerst ein Gutachten mit Berechnung nötig.',
        },
      },
    ],
    faq: [
      { q: 'Sollte ich Risse vor dem Hauskauf prüfen lassen?', a: 'Ja. Risse gehören zu den wichtigsten Punkten bei einem Gutachten vor dem Kauf, vor allem bei einer Finca am Hang oder einem Haus mit Anbau. Ein frischer Anstrich kann Risse verbergen.' },
      { q: 'Zahlt die Versicherung die Sanierung von Rissen?', a: 'Meist nicht, wenn es um Setzung oder Verschleiß geht. Erdbebenschäden werden in Spanien vom Consorcio de Compensación de Seguros übernommen, sofern Sie eine Wohnversicherung haben.' },
    ],
    links: [
      { href: '/de/immobiliengutachten/', label: 'Gutachten vor dem Kauf' },
      { href: '/de/instandhaltung/', label: 'Instandhaltung und Reparaturen' },
      { href: '/de/ratgeber/finca-kaufen-spanien/', label: 'Ratgeber: Finca kaufen in Spanien' },
    ],
    related: ['problems:vocht', 'problems:termieten', 'problems:daklekkage'],
    sources: [
      { name: 'Instituto Geográfico Nacional, Erdbeben in Spanien', url: 'https://www.ign.es/web/ign/portal/sis-area-sismicidad' },
      { name: 'Consorcio de Compensación de Seguros, Schäden durch Naturereignisse', url: 'https://www.consorseguros.es/' },
      { name: 'IGME, Karte quellfähiger Tone in Spanien (arcillas expansivas)', url: 'https://www.igme.es/' },
    ],
    ctaTitle: 'Risse in Ihren Wänden?',
    ctaText: 'Schicken Sie Fotos mit einem Lineal oder einer Münze daneben für den Maßstab. Wir sagen Ihnen, ob es untersucht werden sollte.',
    minutes: 5,
    published: '2026-11-05',
  },
  {
    key: 'termieten',
    slug: 'termiten',
    title: 'Termiten in Ihrem Haus in Spanien: erkennen und bekämpfen',
    seoTitle: 'Termiten in Spanien (Andalusien): erkennen, bekämpfen und Kosten',
    short: 'Termiten',
    description: 'Termiten in Andalusien: So erkennen Sie sie, der Unterschied zum Holzwurm, wie die Bekämpfung mit Ködern funktioniert, was sie kostet und was Sie vor dem Hauskauf prüfen.',
    lead: 'Unterirdische Termiten kommen in Andalusien vielerorts vor, auch in der Axarquía. Sie fressen Holzbalken, Türrahmen und Sockelleisten von innen auf, oft jahrelang unbemerkt. So erkennen und bekämpfen Sie sie.',
    keyword: 'termiten spanien',
    dienst: 'onderhoud',
    onderwerp: 'Ich vermute Termiten oder Holzwurm in meinem Haus.',
    answer: 'Sie erkennen Termiten an <strong>Lehmröhren</strong> an Wänden und Fundamenten, <strong>Holz, das hohl klingt</strong> oder zerbröselt, und <strong>schwärmenden geflügelten Insekten</strong> im Frühjahr. Eine Bekämpfung mit Ködern (<em>cebos</em>) kostet meist <strong>900 bis 2.000 €</strong>, eine chemische Barriere 300 bis 600 €. Der Austausch befallener Balken kommt hinzu.',
    sections: [
      {
        id: 'erkennen',
        h: 'So erkennen Sie Termiten',
        html: `<ul>
<li><strong>Lehmröhren</strong>: schmale braune Röhrchen aus Erde an Fundamenten, Wänden oder hinter Sockelleisten. Termiten bauen sie, um feucht und im Dunkeln zu bleiben.</li>
<li><strong>Hohles Holz</strong>: Klopfen Sie auf Türrahmen, Sockelleisten und Balken. Klingt es hohl oder lässt sich ein Schraubenzieher leicht hineindrücken, ist es von innen ausgefressen.</li>
<li><strong>Schwärme</strong>: Im Frühjahr (Februar bis Mai), oft nach Regen, fliegen geflügelte Termiten aus. Danach finden Sie lose Flügel auf der Fensterbank.</li>
<li><strong>Blasige Farbe</strong> oder welliges Holz ohne erkennbaren Grund.</li>
</ul>`,
      },
      {
        id: 'holzwurm',
        h: 'Termiten oder Holzwurm?',
        table: {
          head: ['', 'Unterirdische Termiten', 'Holzwurm (carcoma)'],
          rows: [
            ['Was Sie sehen', 'Lehmröhren, keine Löcher an der Oberfläche', 'Runde Löcher von 1 – 3 mm und feines Bohrmehl'],
            ['Wo', 'Holz, das Kontakt mit feuchten Wänden oder dem Boden hat', 'Trockenes Holz, Möbel, Balken'],
            ['Tempo', 'Schnell, kann statisch gefährlich werden', 'Langsam, über Jahre'],
            ['Vorgehen', 'Kolonie mit Ködern oder Barriere bekämpfen', 'Holz injizieren oder behandeln'],
          ],
        },
      },
      {
        id: 'bekaempfung',
        h: 'Bekämpfung und Kosten',
        table: {
          head: ['Behandlung', 'Was dazugehört', 'Richtwert'],
          rows: [
            ['Inspektion', 'Kontrolle von Haus und Garten, mit Feuchtemessgerät', '100 – 250 €'],
            ['Chemische Barriere', 'Injektionen in Boden und Wände rund um das Haus', '300 – 600 €'],
            ['Ködersystem (cebos)', 'Köderstationen rund um das Haus, Kontrolle über Monate, bis die Kolonie tot ist', '900 – 2.000 €'],
            ['Holzbalken oder Rahmen ersetzen', 'Nach der Bekämpfung, je nach Schaden', '500 – 10.000 €+'],
          ],
          note: 'Beauftragen Sie ein zugelassenes Unternehmen (eingetragen im ROESB-Register in Andalusien). Richtwerte ohne MwSt.',
        },
        after: '<p>Ein Ködersystem wirkt langsamer, erfasst aber die ganze Kolonie. Untersuchungen des CSIC in Andalusien zeigten, dass Kolonien mit Ködern und guter Nachkontrolle vollständig verschwanden.</p>',
      },
      {
        id: 'vorbeugen',
        h: 'Vorbeugen und kaufen',
        html: '<p>Termiten lieben Feuchtigkeit und Holz mit Bodenkontakt. Halten Sie Brennholz und alte Balken vom Haus fern, beheben Sie Lecks und Feuchtigkeit und lassen Sie Holzbalken bei einer Renovierung behandeln. Kaufen Sie ein altes Dorfhaus oder eine Finca? Lassen Sie beim <a href="/de/immobiliengutachten/">Gutachten vor dem Kauf</a> auch auf Termiten prüfen.</p>',
      },
    ],
    faq: [
      { q: 'Sind Termiten in der Axarquía häufig?', a: 'Unterirdische Termiten kommen in großen Teilen Andalusiens vor, in Ortskernen wie auf dem Land. Nicht jedes Haus ist betroffen, aber in alten Häusern mit Holzbalken und Feuchtigkeit ist eine Kontrolle sinnvoll.' },
      { q: 'Sind Termiten gefährlich für die Statik?', a: 'Sie können Holzbalken in Decken und Dächern so schwächen, dass sie durchhängen oder brechen. Bei den meisten modernen Häusern mit Betondecken beschränkt sich der Schaden auf Rahmen, Türen und Sockelleisten.' },
      { q: 'Kann ich Termiten selbst bekämpfen?', a: 'Sprays aus dem Baumarkt töten nur die Termiten, die Sie sehen. Die Kolonie lebt im Boden weiter. Für ein dauerhaftes Ergebnis braucht es ein professionelles Ködersystem oder eine Barriere.' },
    ],
    links: [
      { href: '/de/immobiliengutachten/', label: 'Gutachten vor dem Kauf' },
      { href: '/de/renovierung/', label: 'Renovierung und Umbau' },
      { href: '/de/probleme/feuchtigkeit-und-schimmel/', label: 'Feuchtigkeit und Schimmel im Haus' },
    ],
    related: ['problems:vocht', 'problems:scheuren', 'costs:dak'],
    sources: [
      { name: 'CSIC (IPNA), Studie zur Termitenbekämpfung mit Ködern in Andalusien (2025)', url: 'https://www.ipna.csic.es/sites/default/files/2025-04/20250421%20NP%20Estudio%20tratamiento%20pionero%20eliminaci%C3%B3n%20termitas.pdf' },
      { name: 'Habitissimo, Preisratgeber Holzwurm- und Termitenbekämpfung', url: 'https://www.habitissimo.es/presupuestos/tratar-carcoma-y-o-termitas' },
      { name: 'Decreto 60/2012 (Junta de Andalucía), Register der Schädlingsbekämpfer (ROESB)', url: 'https://cdn.juntadeandalucia.es/boja/2012/60/d1.pdf' },
    ],
    ctaTitle: 'Termiten oder Holzwurm?',
    ctaText: 'Schicken Sie Fotos vom Holz und von eventuellen Röhren. Wir organisieren Inspektion, Bekämpfung und Reparatur.',
    minutes: 5,
    published: '2026-11-05',
  },
  {
    key: 'legionella',
    slug: 'legionellen',
    title: 'Legionellen in Ferienhaus, Pool oder Whirlpool',
    seoTitle: 'Legionellen im Ferienhaus in Spanien: Risiko und Vorbeugung',
    short: 'Legionellen',
    description: 'Wie groß ist das Legionellenrisiko in einem leerstehenden Ferienhaus, Pool oder Whirlpool in Spanien? Wo die Bakterien wachsen, was Sie bei der Ankunft tun und was Kontrollen kosten.',
    lead: 'Legionellen wachsen in stehendem lauwarmem Wasser. Ein Ferienhaus, das in einem warmen Klima monatelang leer steht, ist daher ein Risiko, öfter als der Pool selbst. So beugen Sie vor.',
    keyword: 'legionellen ferienhaus spanien',
    dienst: 'sleutelbeheer',
    onderwerp: 'Ich möchte die Wasserleitungen, den Boiler oder den Whirlpool meines Hauses spülen und prüfen lassen.',
    answer: 'Das größte Risiko liegt nicht in einem richtig gechlorten Pool, sondern in <strong>Leitungen, Boiler, Wassertank und Duschköpfen</strong> eines Hauses, das lange leer steht, und in <strong>Whirlpools</strong>. Lassen Sie bei der Ankunft alle Hähne und Duschen einige Minuten laufen, stellen Sie den Boiler auf mindestens 60 °C und lassen Sie Tank und Whirlpool jährlich reinigen.',
    sections: [
      {
        id: 'wo',
        h: 'Wo wachsen Legionellen?',
        table: {
          head: ['Ort', 'Risiko', 'Warum'],
          rows: [
            ['Leitungen und Duschen in einem leerstehenden Haus', 'Hoch', 'Wasser steht wochenlang und wird im Sommer lauwarm'],
            ['Elektroboiler unter 50 °C', 'Hoch', 'Ideale Temperatur für die Bakterien'],
            ['Wassertank (depósito oder aljibe) auf einer Finca', 'Mittel bis hoch', 'Stehendes Wasser, Wärme, Ablagerungen'],
            ['Whirlpool oder Sprudelbad', 'Hoch', 'Warmes Wasser, das vernebelt'],
            ['Pool mit richtigem Chlor- oder Salzgehalt', 'Niedrig', 'Die Desinfektion tötet die Bakterien'],
            ['Gartensprenger und Außendusche', 'Mittel', 'Lauwarmes Wasser in Schläuchen, Vernebelung'],
          ],
        },
        after: '<p>Man steckt sich an, indem man feine Tröpfchen einatmet, zum Beispiel unter der Dusche. Trinken des Wassers ist kein Übertragungsweg. Ältere Menschen, Raucher und Menschen mit geschwächter Abwehr sind am stärksten gefährdet.</p>',
      },
      {
        id: 'ankunft',
        h: 'Was Sie bei der Ankunft tun',
        html: `<ol>
<li>Schalten Sie den Boiler auf mindestens 60 °C und lassen Sie ihn einige Stunden aufheizen.</li>
<li>Lassen Sie alle Hähne und Duschen (warm und kalt) einige Minuten bei offenem Fenster laufen. Halten Sie den Duschkopf dabei tief oder nehmen Sie ihn ab.</li>
<li>Lassen Sie auch Außendusche und Gartenschläuche laufen.</li>
<li>Entkalken Sie Duschköpfe und Strahlregler einmal im Jahr oder ersetzen Sie sie.</li>
</ol>
<p>Kommen Sie erst nach Monaten zurück? Lassen Sie das Spülen dann ein paar Tage vorher erledigen. Bei der <a href="/de/hausbetreuung/">Hausbetreuung</a> lassen wir bei jedem Besuch die Hähne laufen.</p>`,
      },
      {
        id: 'vermietung',
        h: 'Wenn Sie vermieten',
        html: '<p>Vermieten Sie Ihr Haus an Feriengäste, sind Sie für sicheres Wasser verantwortlich. Legionellenausbrüche in Ferienwohnungen kommen in die Nachrichten und können zu Forderungen führen. Sorgen Sie für einen festen Ablauf: Spülen vor jeder Ankunft, Boiler auf Temperatur, jährliche Reinigung von Tank und Whirlpool und auf Wunsch ein Wassertest.</p>',
      },
      {
        id: 'kosten',
        h: 'Was kosten Kontrolle und Reinigung?',
        table: {
          head: ['Arbeit', 'Richtwert'],
          rows: [
            ['Wassertest auf Legionellen in einem zugelassenen Labor', '60 – 150 € pro Probe'],
            ['Wassertank (depósito, aljibe) reinigen und desinfizieren', '150 – 400 €'],
            ['Whirlpool reinigen und desinfizieren', '100 – 250 €'],
            ['Thermische oder chemische Desinfektion der Anlage', '300 – 800 €'],
            ['Spülen bei jedem Besuch', 'Teil der Hausbetreuung'],
          ],
          note: 'Richtwerte ohne MwSt.',
        },
      },
    ],
    faq: [
      { q: 'Kann ich mich im Pool mit Legionellen anstecken?', a: 'Bei einem Pool mit dem richtigen Chlor- oder Salzgehalt ist das Risiko gering. Ein Pool, der monatelang ohne Pflege steht, kann andere Probleme verursachen, etwa Algen. Ein Whirlpool ist ein größeres Risiko, weil das Wasser warm ist und vernebelt.' },
      { q: 'Welche Beschwerden verursachen Legionellen?', a: 'Legionellen können eine Lungenentzündung (Legionärskrankheit) mit Fieber, Husten und Muskelschmerzen verursachen, zwei bis zehn Tage nach der Ansteckung. Haben Sie diese Beschwerden nach einem Aufenthalt, gehen Sie zum Arzt und sagen Sie, wo Sie waren.' },
      { q: 'Gilt das spanische Legionellen-Gesetz für mein Haus?', a: 'Die spanischen Vorschriften zur Legionellenprävention (Real Decreto 487/2022) gelten vor allem für Anlagen mit höherem Risiko wie Hotels, öffentliche Bäder und große Wassersysteme. Ein normales Wohnhaus fällt größtenteils nicht darunter, aber die Maßnahmen sind auch zu Hause sinnvoll.' },
    ],
    links: [
      { href: '/de/hausbetreuung/', label: 'Hausbetreuung und Schlüsselservice' },
      { href: '/de/pool/', label: 'Poolbau und Poolpflege' },
      { href: '/de/ratgeber/ueberwintern-in-spanien/', label: 'Ratgeber: Überwintern in Spanien' },
    ],
    related: ['costs:zwembad', 'problems:inbraak', 'problems:vocht'],
    sources: [
      { name: 'Real Decreto 487/2022, Anforderungen zur Legionellenprävention', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2022-10297' },
      { name: 'Ministerio de Sanidad, Legionellose', url: 'https://www.sanidad.gob.es/areas/sanidadAmbiental/calidadAguas/legionelosis/home.htm' },
      { name: 'Robert Koch-Institut, Legionellose', url: 'https://www.rki.de/DE/Themen/Infektionskrankheiten/Infektionskrankheiten-A-Z/L/Legionellose/legionellose-node.html' },
    ],
    ctaTitle: 'Ein sicheres Haus bei der Ankunft?',
    ctaText: 'Wir spülen die Leitungen, prüfen den Boiler und reinigen Tank und Whirlpool, damit alles bereit ist, wenn Sie kommen.',
    minutes: 5,
    published: '2026-11-05',
  },
  {
    key: 'inbraak',
    slug: 'einbruch-und-hausbesetzer',
    title: 'Einbruch und Hausbesetzer in einem leerstehenden Haus in Spanien verhindern',
    seoTitle: 'Ferienhaus in Spanien vor Einbruch und Hausbesetzern (okupas) schützen',
    short: 'Einbruch und Hausbesetzer',
    description: 'Wie schützen Sie Ihr Ferienhaus in der Axarquía vor Einbruch und Hausbesetzern (okupas)? Was wirkt, was es kostet, was Sie nach einem Einbruch tun und wie schnell Besetzer raus müssen.',
    lead: 'Ein Haus, das monatelang leer steht, fällt auf: geschlossene Rollläden, ein voller Briefkasten, kein Licht. In der Axarquía ist das Risiko geringer als in Großstädten, aber es kommt vor. So senken Sie das Risiko und wissen, was zu tun ist.',
    keyword: 'ferienhaus spanien einbruchschutz',
    dienst: 'sleutelbeheer',
    onderwerp: 'Ich möchte mein Haus besser sichern und kontrollieren lassen, wenn ich weg bin.',
    answer: 'Der beste Schutz ist ein Haus, das <strong>nicht leer aussieht</strong> und bei dem <strong>schnell jemand vor Ort ist</strong>, wenn etwas passiert. Kombinieren Sie eine Alarmanlage mit Leitstelle (30 – 50 € pro Monat), gute Schlösser oder eine Sicherheitstür und regelmäßige Kontrollen durch jemanden mit Schlüssel. Entdecken Sie Besetzer innerhalb weniger Tage, rufen Sie sofort die Guardia Civil oder Policía Local.',
    sections: [
      {
        id: 'massnahmen',
        h: 'Was wirkt, und was es kostet',
        table: {
          head: ['Maßnahme', 'Richtwert'],
          rows: [
            ['Alarmanlage mit Leitstelle und Kameras (Abonnement)', '30 – 50 € pro Monat'],
            ['Sicherheitstür (puerta acorazada oder blindada)', '1.000 – 2.500 €'],
            ['Einbruchhemmende Schließzylinder für vorhandene Türen', '100 – 250 € pro Tür'],
            ['Fenstergitter (rejas) im Erdgeschoss', '150 – 400 € pro Fenster'],
            ['Zeitschaltuhren, smarte Lampen und Bewegungsmelder', '100 – 500 €'],
            ['Regelmäßige Kontrolle durch die Hausbetreuung, mit Fotos', 'siehe Hausbetreuung'],
          ],
          note: 'Richtwerte inklusive Montage, ohne MwSt.',
        },
      },
      {
        id: 'nicht-leer',
        h: 'Sorgen Sie dafür, dass das Haus nicht leer aussieht',
        html: `<ul>
<li>Lassen Sie den Briefkasten leeren und Werbung entfernen.</li>
<li>Lassen Sie Garten und Pool pflegen. Ein verwilderter Garten verrät, dass niemand da ist.</li>
<li>Nutzen Sie Zeitschaltuhren oder smarte Lampen und lassen Sie die Rollläden ab und zu öffnen und schließen.</li>
<li>Sagen Sie Ihren Nachbarn, wer vorbeikommt, und geben Sie ihnen eine Telefonnummer.</li>
<li>Posten Sie in sozialen Medien nicht, dass Sie abreisen.</li>
</ul>
<p>Mit der <a href="/de/hausbetreuung/">Hausbetreuung</a> kommt zu festen Zeiten jemand vorbei, der all das erledigt und bei einem Alarm oder Sturm sofort nachsieht.</p>`,
      },
      {
        id: 'besetzer',
        h: 'Hausbesetzer (okupas): was sagt das Gesetz?',
        html: '<p>Ein möbliertes Zweit- oder Ferienhaus gilt in Spanien als Wohnung (<em>morada</em>). Wer dort ohne Erlaubnis eindringt, begeht Hausfriedensbruch (<em>allanamiento de morada</em>). Wenn Sie das schnell entdecken und melden, kann die Polizei sofort eingreifen. Je länger Besetzer bleiben, desto schwieriger wird es und desto öfter ist ein Gericht nötig. Außerdem können private Eigentümer seit 2018 über ein beschleunigtes Zivilverfahren (Ley 5/2018) die Räumung beantragen. Schnell entdecken ist also das Wichtigste.</p>',
      },
      {
        id: 'nach-einbruch',
        h: 'Was nach einem Einbruch zu tun ist',
        html: `<ol>
<li>Gehen Sie nicht hinein, wenn Sie glauben, dass noch jemand drinnen ist. Rufen Sie 112 oder die Guardia Civil (062).</li>
<li>Erstatten Sie Anzeige (<em>denuncia</em>) bei der Guardia Civil oder Policía Nacional. Das geht teilweise auch online. Sie brauchen die Anzeige für die Versicherung.</li>
<li>Fotografieren Sie den Schaden und machen Sie eine Liste der fehlenden Dinge.</li>
<li>Lassen Sie Schlösser und Fenster sofort reparieren, damit das Haus wieder sicher ist.</li>
<li>Melden Sie den Schaden Ihrer Versicherung.</li>
</ol>`,
      },
    ],
    faq: [
      { q: 'Wie oft wird in der Axarquía eingebrochen?', a: 'Seltener als in Großstädten und belebten Urlaubsorten, aber Ferienhäuser, die lange leer stehen, sind ein bekanntes Ziel. Vor allem in den Wintermonaten und bei abgelegenen Fincas.' },
      { q: 'Zahlt die Versicherung bei einem Einbruch in ein leeres Haus?', a: 'Viele Policen stellen Bedingungen, etwa Mindeststandards für Schlösser oder eine maximale Zahl von Tagen Leerstand. Lesen Sie die Bedingungen (oft unter „deshabitación“) genau und sagen Sie Ihrem Versicherer, dass es ein Zweitwohnsitz ist.' },
      { q: 'Darf ich Besetzer selbst hinauswerfen?', a: 'Nein. Tun Sie das nie selbst: Sie können sich sonst selbst strafbar machen. Rufen Sie die Polizei und beauftragen Sie einen Anwalt. Je schneller Sie es melden, desto schneller ist es gelöst.' },
    ],
    links: [
      { href: '/de/hausbetreuung/', label: 'Hausbetreuung und Schlüsselservice' },
      { href: '/de/ratgeber/ueberwintern-in-spanien/', label: 'Ratgeber: Überwintern in Spanien' },
      { href: '/de/instandhaltung/', label: 'Instandhaltung und Reparaturen' },
    ],
    related: ['problems:legionella', 'problems:daklekkage', 'costs:buitenkeuken'],
    sources: [
      { name: 'Código Penal, Art. 202 (allanamiento de morada) und Art. 245 (usurpación)', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1995-25444' },
      { name: 'Ley 5/2018, beschleunigte Räumung besetzter Wohnungen', url: 'https://www.boe.es/buscar/doc.php?id=BOE-A-2018-8575' },
      { name: 'Guardia Civil, Anzeige erstatten (denuncia)', url: 'https://www.guardiacivil.es/' },
    ],
    ctaTitle: 'Ihr Haus in guten Händen, wenn Sie weg sind',
    ctaText: 'Regelmäßige Kontrollen, Fotos und schnell jemand vor Ort bei einem Alarm. Fragen Sie nach den Möglichkeiten.',
    minutes: 6,
    published: '2026-11-05',
  },
];
