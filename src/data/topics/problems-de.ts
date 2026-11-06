import type { Topic } from './types';

// Problemseiten auf Deutsch.
export const problemsDe: Topic[] = [
  {
    key: 'vocht',
    slug: 'feuchtigkeit-und-schimmel',
    title: 'Feuchtigkeit und Schimmel in Ihrem Haus in Spanien: Ursache und Lösung',
    seoTitle: 'Feuchtigkeit und Schimmel im Haus in Spanien: Lösungen',
    short: 'Feuchtigkeit und Schimmel',
    description: 'Feuchte Flecken oder Schimmel im Haus in der Axarquía? So unterscheiden Sie aufsteigende Feuchte, Kondenswasser und Lecks, und was die Lösung kostet.',
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
    seoTitle: 'Undichtes Dach in Spanien: Ursachen und Kosten',
    short: 'Undichtes Dach',
    description: 'Dach oder Dachterrasse in der Axarquía undicht? Was Sie sofort tun, auch aus Deutschland, woher das Leck meist kommt und was die Reparatur kostet.',
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
    seoTitle: 'Risse in den Wänden in Spanien: harmlos oder gefährlich?',
    short: 'Risse in Wänden',
    description: 'Risse in den Wänden Ihres Hauses in der Axarquía? So unterscheiden Sie einen Schwindriss von einer Setzung und was Gutachten und Sanierung kosten.',
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
    seoTitle: 'Termiten in Spanien: erkennen, bekämpfen und Kosten',
    short: 'Termiten',
    description: 'Termiten in Andalusien: So erkennen Sie sie, der Unterschied zum Holzwurm, die Bekämpfung mit Ködern, die Kosten und was Sie vor dem Kauf prüfen.',
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
    description: 'Wie groß ist das Legionellenrisiko in einem leerstehenden Ferienhaus, Pool oder Whirlpool in Spanien?',
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
    seoTitle: 'Ferienhaus in Spanien vor Einbruch und Okupas schützen',
    short: 'Einbruch und Hausbesetzer',
    description: 'Wie schützen Sie Ihr Ferienhaus in der Axarquía vor Einbruch und Hausbesetzern (okupas)? Was wirkt, was es kostet und was Sie nach einem Einbruch tun.',
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
  {
    key: 'stroom',
    slug: 'strom-faellt-aus',
    title: 'Strom fällt ständig aus in Ihrem Haus in Spanien: Ursache und Lösung',
    seoTitle: 'Strom fällt ständig aus im Haus in Spanien: Lösungen',
    short: 'Strom fällt aus',
    description: 'Fällt in Ihrem Haus in der Axarquía immer wieder der Strom aus? Zu niedrige Anschlussleistung, FI-Schalter oder Netzstörung, und was die Lösung kostet.',
    lead: 'Wasserkocher an, Klimaanlage an, und das Haus ist dunkel. Oder der Strom fällt nach einem Regenschauer aus, während Sie in Deutschland sind. Fast immer steckt eine von vier Ursachen dahinter.',
    keyword: 'strom fällt aus spanien',
    dienst: 'energie',
    onderwerp: 'In meinem Haus fällt ständig der Strom aus.',
    answer: 'Fällt der Strom aus, wenn Sie mehrere Geräte gleichzeitig einschalten, ist Ihre <strong>Anschlussleistung zu niedrig</strong>. Löst der <strong>FI-Schalter (diferencial)</strong> aus, oft nach Regen, fließt irgendwo Strom zur Erde ab, meist über Außenleuchten, einen Boiler oder eine feuchte Steckdose. Ist das ganze Dorf dunkel, ist es eine <strong>Störung im Netz</strong>.',
    sections: [
      {
        id: 'herkennen',
        h: 'Warum fällt der Strom aus?',
        table: {
          head: ['Was Sie sehen', 'Wahrscheinliche Ursache'],
          rows: [
            ['Strom fällt aus, wenn Klimaanlage, Backofen und Wasserkocher gleichzeitig laufen', 'Zu niedrige Anschlussleistung (potencia contratada) oder überlasteter Stromkreis'],
            ['FI-Schalter (diferencial) löst aus, oft nach Regen oder nachts', 'Fehlerstrom: Feuchtigkeit in Außenleuchten, Steckdosen oder einem Gerät'],
            ['Ein Stromkreis fällt jedes Mal aus, wenn ein bestimmtes Gerät angeht', 'Defektes Gerät, etwa Boiler, Poolpumpe oder Kühlschrank'],
            ['Strom fällt bei Gewitter aus', 'Überspannung oder Netzstörung'],
            ['Das ganze Haus und die Nachbarn sind dunkel', 'Störung beim Netzbetreiber (in der Axarquía meist e-distribución)'],
          ],
        },
      },
      {
        id: 'zelf',
        h: 'Was Sie selbst tun können',
        html: `<ul>
<li>Sehen Sie im Sicherungskasten nach, welcher Schalter unten ist: der Hauptschalter (zu viel Leistung), der FI-Schalter oder ein einzelner Stromkreis.</li>
<li>Löst der FI-Schalter aus: alle Stromkreise aus, FI-Schalter ein, dann die Stromkreise einzeln wieder einschalten. Bei dem Stromkreis, bei dem er erneut auslöst, liegt das Problem.</li>
<li>Ziehen Sie in diesem Stromkreis alle Stecker und versuchen Sie es noch einmal. So finden Sie das Gerät mit dem Fehler.</li>
<li>Ist das ganze Dorf dunkel, melden Sie die Störung beim Netzbetreiber. Die Nummer steht auf Ihrer Stromrechnung.</li>
<li>Arbeiten Sie nie selbst am Sicherungskasten oder an nassen Steckdosen.</li>
</ul>`,
      },
      {
        id: 'oplossing',
        h: 'Die Lösung und was sie kostet',
        table: {
          head: ['Lösung', 'Bei', 'Richtwert'],
          rows: [
            ['Fehlersuche durch einen Elektriker', 'FI-Schalter löst immer wieder aus', '80 – 250 €'],
            ['Wasserdichte Außenleuchten und Steckdosen', 'Fehlerstrom nach Regen', '60 – 150 € je Punkt'],
            ['Anschlussleistung erhöhen, mit boletín', 'Zu niedrige Leistung', '150 – 500 €'],
            ['Zusätzlicher Stromkreis oder neuer Sicherungskasten', 'Überlasteter Stromkreis', '150 – 1.000 €'],
            ['Überspannungsschutz', 'Ausfall bei Gewitter', '150 – 400 €'],
            ['Komplette Elektrik erneuern', 'Alte Installation ohne Erdung', 'siehe <a href="/de/kosten/elektrik-erneuern/">Kosten Elektrik</a>'],
          ],
          note: 'Richtwerte ohne Mehrwertsteuer.',
        },
      },
      {
        id: 'leeg',
        h: 'Stromausfall in einem leerstehenden Haus',
        html: '<p>Fällt der Strom aus, während Sie nicht da sind, taut der Gefrierschrank ab, die Poolpumpe steht still und die Alarmanlage fällt irgendwann aus. Zwei Dinge helfen: ein smarter Zähler oder Stromsensor, der Ihnen eine Meldung schickt, und jemand, der schnell vor Ort ist. Mit der <a href="/de/hausbetreuung/">Hausbetreuung</a> kommt jemand vorbei, schaltet den Sicherungskasten wieder ein und prüft die Ursache.</p>',
      },
    ],
    faq: [
      { q: 'Was bedeutet ICP in meinem Sicherungskasten?', a: 'Der ICP (Interruptor de Control de Potencia) war der Schalter, der die Leistung begrenzte. Heute macht das der smarte Zähler des Netzbetreibers. Bei zu viel Leistung schaltet er ab und nach einigen Sekunden oft von selbst wieder ein.' },
      { q: 'Wie viel Leistung brauche ich?', a: 'Für eine Wohnung ohne Klimaanlage reichen meist 3,45 bis 4,6 kW. Mit Klimaanlage und Induktion 5,75 kW, mit Wärmepumpe, Poolpumpe oder Wallbox 7 bis 9,2 kW.' },
      { q: 'Kann ich die Leistung ohne neues boletín erhöhen?', a: 'Manchmal. Ist die Installation bereits für die höhere Leistung zugelassen, genügt ein Anruf beim Anbieter. Ist sie älter als zwanzig Jahre oder nicht geeignet, verlangt der Netzbetreiber ein neues boletín.' },
    ],
    links: [
      { href: '/de/instandhaltung/', label: 'Instandhaltung und Reparaturen' },
      { href: '/de/hausbetreuung/', label: 'Hausbetreuung und Schlüsselservice' },
      { href: '/de/kosten/solaranlage/', label: 'Kosten Solaranlage' },
    ],
    related: ['costs:elektra', 'problems:vocht', 'problems:inbraak'],
    sources: [
      { name: 'e-distribución, Störung melden', url: 'https://www.edistribucion.com/es/averias.html' },
      { name: 'CNMC, das boletín eléctrico: was es ist und wofür', url: 'https://cnmc.es/sites/default/files/editor_contenidos/Energia/Consumidores/3.2%20Bolet%C3%ADn%20el%C3%A9ctrico%2C%20qu%C3%A9%20es%20y%20para%20qu%C3%A9%20sirve.pdf' },
    ],
    ctaTitle: 'Strom fällt ständig aus?',
    ctaText: 'Schicken Sie ein Foto Ihres Sicherungskastens und sagen Sie uns, wann es passiert. Ein Elektriker findet die Ursache.',
    minutes: 5,
    published: '2026-11-05',
  },
  {
    key: 'waterdruk',
    slug: 'kein-wasser-oder-wasserdruck',
    title: 'Kein Wasser oder zu wenig Wasserdruck in Ihrem Haus in Spanien',
    seoTitle: 'Kein Wasser oder wenig Wasserdruck in Spanien: Lösungen',
    short: 'Kein Wasser oder Wasserdruck',
    description: 'Kaum Wasser aus dem Hahn in Ihrem Haus in der Axarquía? Störung, leerer Tank, trockener Brunnen, defekte Pumpe oder Leck, und was die Lösung kostet.',
    lead: 'Sie kommen an, drehen den Hahn auf und es kommt nichts, oder nur ein dünner Strahl. Auf einer Finca mit Tank oder Brunnen, aber auch in einem Dorfhaus mit Wasserleitung passiert das öfter, als man denkt.',
    keyword: 'kein wasser haus spanien',
    dienst: 'onderhoud',
    onderwerp: 'Ich habe kein Wasser oder zu wenig Wasserdruck im Haus.',
    answer: 'Bei einem Haus mit Wasserleitung ist es meist eine <strong>Störung oder Unterbrechung im Ort</strong>, ein geschlossener Haupthahn oder ein Leck. Auf einer Finca mit Tank oder Brunnen ist es oft ein <strong>leerer Tank</strong>, eine <strong>defekte oder trocken gelaufene Pumpe</strong>, ein <strong>verstopfter Filter</strong> oder ein Brunnen, der im Sommer weniger liefert.',
    sections: [
      {
        id: 'herkennen',
        h: 'Woran liegt es?',
        table: {
          head: ['Was Sie sehen', 'Wahrscheinliche Ursache'],
          rows: [
            ['Kein Wasser, und die Nachbarn auch nicht', 'Störung oder geplante Unterbrechung des Wasserversorgers'],
            ['Kein Wasser nach langer Abwesenheit', 'Haupthahn zu, oder gesperrt wegen einer offenen Rechnung'],
            ['Pumpe schaltet ständig ein und aus', 'Druckkessel ohne Luft, oder ein Leck in der Leitung'],
            ['Pumpe läuft, aber es kommt kein Wasser', 'Tank oder Brunnen leer, oder die Pumpe zieht Luft'],
            ['Druck sinkt langsam, Wasser trüb', 'Filter verstopft oder Kalk in Leitungen und Hähnen'],
            ['Hohe Wasserrechnung oder nasse Stelle im Garten', 'Leck in der Zuleitung'],
          ],
        },
      },
      {
        id: 'zelf',
        h: 'Was Sie selbst tun können',
        html: `<ul>
<li>Fragen Sie die Nachbarn oder den Wasserversorger der Gemeinde, ob es eine Störung gibt.</li>
<li>Prüfen Sie den Haupthahn am Wasserzähler und den Hahn nach dem Tank.</li>
<li>Sehen Sie nach, wie viel Wasser noch im Tank ist. Bestellen Sie rechtzeitig einen Tankwagen.</li>
<li>Schalten Sie die Pumpe aus, wenn sie trocken läuft, sonst brennt sie durch.</li>
<li>Prüfen Sie, ob der Zähler läuft, während alle Hähne zu sind: Dann gibt es ein Leck.</li>
</ul>`,
      },
      {
        id: 'oplossing',
        h: 'Die Lösung und was sie kostet',
        table: {
          head: ['Lösung', 'Bei', 'Richtwert'],
          rows: [
            ['Leck suchen und reparieren', 'Undichte Leitung', '200 – 1.000 €'],
            ['Druckkessel ersetzen oder neu befüllen', 'Pumpe, die ständig anspringt', '150 – 500 €'],
            ['Neue Pumpe mit Druckkessel', 'Defekte Pumpe', '600 – 1.500 €'],
            ['Filter ersetzen, Entkalker einbauen', 'Niedriger Druck, Kalk', '150 – 1.500 €'],
            ['Größerer oder zusätzlicher Tank', 'Tank ständig leer', 'siehe <a href="/de/kosten/wassertank-und-klaergrube/">Kosten Wassertank</a>'],
            ['Trockenlaufschutz und Füllstandsmelder', 'Pumpe schützen, Meldung bei leerem Tank', '150 – 400 €'],
          ],
          note: 'Richtwerte ohne Mehrwertsteuer.',
        },
      },
      {
        id: 'leeg',
        h: 'Wenn Sie nicht da sind',
        html: '<p>Ein Leck in einem leeren Haus kann monatelang laufen, und eine trocken laufende Pumpe geht kaputt. Schließen Sie bei der Abreise den Haupthahn und schalten Sie die Pumpe aus, es sei denn, der Garten braucht Wasser. Mit der <a href="/de/hausbetreuung/">Hausbetreuung</a> prüft jemand regelmäßig Zähler, Tank und Pumpe und bereitet das Haus vor Ihrer Ankunft vor.</p>',
      },
    ],
    faq: [
      { q: 'Warum fällt im Sommer manchmal das Wasser aus?', a: 'Nach trockenen Jahren können Gemeinden in der Axarquía das Wasser nachts oder zu bestimmten Zeiten abstellen, um zu sparen. Ein kleiner Puffertank mit Pumpe gleicht das aus.' },
      { q: 'Was kostet ein Tankwagen Wasser?', a: 'Rechnen Sie mit 4 bis 10 € pro m³ inklusive Lieferung, je nach Entfernung und Zufahrt.' },
      { q: 'Kann ich meinen Brunnen tiefer bohren lassen?', a: 'Manchmal, aber dafür ist eine Genehmigung nötig, und es ist keine Garantie für mehr Wasser. Lassen Sie zuerst Pumpe und Leitung prüfen.' },
    ],
    links: [
      { href: '/de/instandhaltung/', label: 'Instandhaltung und Reparaturen' },
      { href: '/de/kosten/wassertank-und-klaergrube/', label: 'Kosten Wassertank, Brunnen und Klärgrube' },
      { href: '/de/ratgeber/autark-leben-spanien/', label: 'Ratgeber: autark leben in Spanien' },
    ],
    related: ['costs:water', 'problems:beerput', 'problems:stroom'],
    sources: [
      { name: 'Junta de Andalucía, Wasser und Wasserrechte', url: 'https://www.juntadeandalucia.es/medioambiente/portal/areas-tematicas/agua' },
    ],
    ctaTitle: 'Kein Wasser oder zu wenig Druck?',
    ctaText: 'Sagen Sie uns, wie Ihr Haus an Wasser kommt und was passiert. Ein Installateur findet die Ursache.',
    minutes: 5,
    published: '2026-11-05',
  },
  {
    key: 'beerput',
    slug: 'klaergrube-voll-oder-riecht',
    title: 'Klärgrube voll oder riecht: was tun?',
    seoTitle: 'Klärgrube voll oder riecht in Spanien: Lösung und Kosten',
    short: 'Klärgrube',
    description: 'Riecht es nach Abwasser oder läuft der Abfluss langsam? So erkennen Sie eine volle oder defekte Klärgrube (fosa séptica) und was Leeren oder Ersetzen kostet.',
    lead: 'Auf vielen Fincas und in manchen Dorfhäusern läuft das Abwasser in eine Klärgrube im Garten. Solange sie funktioniert, denkt niemand daran. Bis es riecht oder die Toilette nicht mehr abläuft.',
    keyword: 'klärgrube spanien',
    dienst: 'onderhoud',
    onderwerp: 'Meine Klärgrube ist voll oder riecht.',
    answer: 'Geruch, ein langsamer Abfluss oder gluckernde Rohre deuten meist auf eine <strong>volle Klärgrube</strong>: Leeren kostet 150 bis 300 €. Bleibt das Problem, oder steht Wasser auf dem Boden über der Grube, ist die <strong>Versickerung verstopft</strong> oder die Grube defekt. Eine neue Klärgrube kostet 2.500 bis 6.000 €.',
    sections: [
      {
        id: 'herkennen',
        h: 'Was ist los?',
        table: {
          head: ['Was Sie sehen oder riechen', 'Wahrscheinliche Ursache'],
          rows: [
            ['Abwassergeruch im Garten, Toilette läuft langsam ab', 'Klärgrube voll'],
            ['Nasse, grüne oder riechende Stelle über der Grube', 'Versickerung verstopft oder Grube undicht'],
            ['Abwassergeruch im Haus, vor allem im Bad', 'Siphon ausgetrocknet oder fehlende Entlüftung'],
            ['Gluckernder Abfluss oder Spüle', 'Verstopfung oder volle Grube'],
            ['Problem kurz nach Vermietung oder einem Fest', 'Zu viel Wasser oder Fett in kurzer Zeit'],
          ],
        },
      },
      {
        id: 'zelf',
        h: 'Was Sie selbst tun können',
        html: `<ul>
<li>Lassen Sie nach langer Abwesenheit alle Hähne und die Dusche kurz laufen: Ein ausgetrockneter Siphon lässt Abwassergeruch durch.</li>
<li>Spülen Sie keine Feuchttücher, kein Fett und nicht viel Bleiche herunter: Das tötet die Bakterien in der Grube.</li>
<li>Fahren und parken Sie nicht über der Grube oder der Versickerung.</li>
<li>Notieren Sie, wann die Grube zuletzt geleert wurde.</li>
</ul>`,
      },
      {
        id: 'oplossing',
        h: 'Die Lösung und was sie kostet',
        table: {
          head: ['Lösung', 'Bei', 'Richtwert'],
          rows: [
            ['Klärgrube leeren', 'Volle Grube', '150 – 300 €'],
            ['Abfluss freimachen', 'Verstopfte Leitung', '100 – 300 €'],
            ['Entlüftung einbauen', 'Geruch im Haus', '200 – 600 €'],
            ['Versickerung erneuern', 'Nasse Stelle über der Versickerung', '1.500 – 4.000 €'],
            ['Neue Klärgrube oder Kläranlage', 'Defekte oder zu kleine Grube', 'siehe <a href="/de/kosten/wassertank-und-klaergrube/">Kosten Klärgrube</a>'],
          ],
          note: 'Richtwerte ohne Mehrwertsteuer.',
        },
      },
      {
        id: 'verhuur',
        h: 'Bei Vermietung und Verkauf',
        html: '<p>Vermieten Sie das Haus, verbraucht ein volles Haus in einer Woche so viel Wasser wie Sie in einem Monat. Lassen Sie die Grube vor der Saison prüfen. Beim Verkauf fragt ein guter Käufer nach dem Abwasser: Eine defekte oder unzulässige Grube ist ein Grund, über den Preis zu reden. Lesen Sie auch den Ratgeber <a href="/de/ratgeber/haus-verkaufen-spanien/">Haus verkaufen in Spanien</a>.</p>',
      },
    ],
    faq: [
      { q: 'Muss eine Klärgrube regelmäßig geleert werden?', a: 'Ja, meist alle zwei bis vier Jahre. Warten Sie nicht, bis sie überläuft: Dann verstopft auch die Versickerung.' },
      { q: 'Brauche ich Klärgrubenstarter oder Bakterien?', a: 'Meist nicht. Eine gesunde Grube hält sich selbst in Gang. Sie können nach einer Zeit mit viel Bleiche oder Reinigungsmittel helfen.' },
      { q: 'Ist meine alte Grube noch zulässig?', a: 'Eine gemauerte Grube ohne Boden, aus der das Abwasser direkt in den Boden läuft, entspricht meist nicht den heutigen Regeln. Bei einem Umbau oder einer Beschwerde kann der Ersatz verlangt werden.' },
    ],
    links: [
      { href: '/de/instandhaltung/', label: 'Instandhaltung und Reparaturen' },
      { href: '/de/kosten/wassertank-und-klaergrube/', label: 'Kosten Wassertank, Brunnen und Klärgrube' },
      { href: '/de/immobiliengutachten/', label: 'Gutachten vor dem Kauf' },
    ],
    related: ['costs:water', 'problems:waterdruk', 'problems:vocht'],
    sources: [
      { name: 'Junta de Andalucía, Einleitungen und Abwasser', url: 'https://www.juntadeandalucia.es/medioambiente/portal/areas-tematicas/agua' },
    ],
    ctaTitle: 'Probleme mit der Klärgrube?',
    ctaText: 'Sagen Sie uns, was Sie sehen und riechen, und schicken Sie ein Foto der Stelle. Wir organisieren Leeren, Reparatur oder Ersatz.',
    minutes: 4,
    published: '2026-11-05',
  },
  {
    key: 'wateroverlast',
    slug: 'wasserschaden-und-stuetzmauer',
    title: 'Wasser am Haus nach Starkregen und eine reißende Stützmauer',
    seoTitle: 'Wasserschaden und Stützmauer: was tun nach einer DANA?',
    short: 'Wasserschaden und Stützmauer',
    description: 'Wasser am oder im Haus nach Starkregen, eine weggespülte Zufahrt oder eine Stützmauer, die reißt oder sich neigt?',
    lead: 'Im Herbst kann in wenigen Stunden mehr Regen fallen als im ganzen Sommer. Am Hang sucht sich das Wasser den kürzesten Weg nach unten, und der führt manchmal gegen oder durch Ihr Haus.',
    keyword: 'wasserschaden haus spanien',
    dienst: 'onderhoud',
    onderwerp: 'Ich habe Wasser am Haus oder eine Stützmauer, die reißt.',
    answer: 'Wasser am Haus am Hang kommt fast immer von <strong>fehlender oder verstopfter Entwässerung</strong>: Wasser vom Hang, von der Terrasse oder vom Weg, das keinen Abfluss hat. Eine Stützmauer, die reißt, sich ausbeult oder neigt, hat meist <strong>keine Drainage</strong> dahinter. Lassen Sie das schnell prüfen: Beim nächsten Starkregen kann sie nachgeben.',
    sections: [
      {
        id: 'herkennen',
        h: 'Warnzeichen',
        table: {
          head: ['Was Sie sehen', 'Was es bedeutet'],
          rows: [
            ['Schlamm oder Wasser an der Rückwand nach Regen', 'Wasser vom Hang hat keinen Abfluss am Haus'],
            ['Nasse Wand innen nach Regen, auf der Hangseite', 'Eindringende Feuchtigkeit: Erde und Wasser an der Wand'],
            ['Stützmauer beult aus, neigt sich oder hat schräge Risse', 'Wasserdruck hinter der Mauer, Einsturzgefahr'],
            ['Wasser tritt unten aus den Fugen der Mauer', 'Die Mauer entwässert, das ist gut; gar kein Wasser ist das Risiko'],
            ['Rinnen in der Zufahrt', 'Abfließendes Wasser ohne Rinne oder Querablauf'],
          ],
        },
      },
      {
        id: 'direct',
        h: 'Was Sie sofort tun',
        html: `<ul>
<li>Halten Sie Abstand von einer Stützmauer, die sich bewegt oder reißt, und parken Sie nicht darunter oder darüber.</li>
<li>Machen Sie Rinnen, Abläufe und Gitter frei von Laub und Schlamm.</li>
<li>Leiten Sie Wasser vorübergehend mit Sandsäcken oder einem Graben vom Haus weg.</li>
<li>Machen Sie datierte Fotos der Schäden für die Versicherung.</li>
<li>Bei Gefahr oder großen Schäden nach einem Sturm: Rufen Sie 112 an.</li>
</ul>`,
      },
      {
        id: 'oplossing',
        h: 'Die Lösung und was sie kostet',
        table: {
          head: ['Lösung', 'Bei', 'Richtwert'],
          rows: [
            ['Drainage entlang der Rückwand', 'Wasser und Feuchtigkeit auf der Hangseite', '40 – 80 € pro m'],
            ['Entwässerungsrinne auf Terrasse oder Einfahrt', 'Wasser, das zum Haus läuft', '60 – 150 € pro m'],
            ['Drainage hinter einer bestehenden Stützmauer', 'Mauer ohne Entwässerung', '80 – 200 € pro m'],
            ['Stützmauer reparieren oder neu bauen', 'Reißende oder eingestürzte Mauer', 'siehe <a href="/de/kosten/stuetzmauer-und-entwaesserung/">Kosten Stützmauer</a>'],
            ['Zufahrt mit Rinnen instand setzen', 'Weggespülter Weg', '40 – 70 € pro m²'],
          ],
          note: 'Richtwerte ohne Mehrwertsteuer.',
        },
      },
      {
        id: 'verzekering',
        h: 'Versicherung und das Consorcio',
        html: '<p>In Spanien zahlt bei Schäden durch außergewöhnlichen Regen, Überschwemmung oder Sturm oft nicht der Versicherer selbst, sondern das <em>Consorcio de Compensación de Seguros</em>, ein staatlicher Fonds. Dafür brauchen Sie aber eine Gebäude- oder Hausratversicherung. Melden Sie den Schaden so schnell wie möglich und bewahren Sie Fotos und Rechnungen auf.</p>',
      },
    ],
    faq: [
      { q: 'Was ist eine DANA?', a: 'Ein Kaltlufttropfen in großer Höhe, der vor allem von September bis November kurze, heftige Regengüsse bringt. In wenigen Stunden können dann über 100 mm fallen.' },
      { q: 'Wer ist für eine Stützmauer an der Grundstücksgrenze verantwortlich?', a: 'Das hängt davon ab, wer die Mauer gebaut hat und wessen Boden sie hält. Sehen Sie in die Eigentumsurkunde und das Kataster und sprechen Sie mit den Nachbarn, bevor Sie reparieren.' },
      { q: 'Kann ich vorbeugen?', a: 'Ja. Lassen Sie Rinnen, Abläufe und Drainage vor dem Herbst prüfen und reinigen. Das gehört fest zur Instandhaltung und Hausbetreuung.' },
    ],
    links: [
      { href: '/de/instandhaltung/', label: 'Instandhaltung und Reparaturen' },
      { href: '/de/hausbetreuung/', label: 'Hausbetreuung und Schlüsselservice' },
      { href: '/de/wetter/september/', label: 'Das Wetter im September: DANA und erster Regen' },
    ],
    related: ['costs:keermuur', 'problems:daklekkage', 'problems:scheuren'],
    sources: [
      { name: 'Consorcio de Compensación de Seguros, Schäden durch außergewöhnliche Ereignisse', url: 'https://www.consorseguros.es/' },
      { name: 'AEMET, was ist eine DANA', url: 'https://www.aemet.es/' },
    ],
    ctaTitle: 'Wasser am Haus oder eine reißende Stützmauer?',
    ctaText: 'Schicken Sie Fotos der Mauer oder der Stelle, wo das Wasser hinläuft. Wir sehen es uns an und nennen Ihnen einen Preis.',
    minutes: 5,
    published: '2026-11-05',
  },
  {
    key: 'schoorsteen',
    slug: 'kamin-raucht',
    title: 'Kamin raucht zurück oder zieht schlecht: Ursache und Lösung',
    seoTitle: 'Kamin oder Kaminofen raucht: Ursachen und Lösungen',
    short: 'Kamin raucht zurück',
    description: 'Raucht Ihr Kamin oder Kaminofen in der Axarquía ins Zimmer? Kaltes Rohr, feuchtes Holz, zu wenig Luft oder ein verschmutzter Schornstein, und die Lösung.',
    lead: 'Sie zünden den Kamin an und nach wenigen Minuten ist das Zimmer voller Rauch. In einem Haus, das monatelang geschlossen war, passiert das oft. Meist steckt eine von fünf Ursachen dahinter, und die meisten lassen sich einfach beheben.',
    keyword: 'kamin raucht',
    dienst: 'schoorsteen',
    onderwerp: 'Mein Kamin oder Ofen raucht zurück.',
    answer: 'Raucht der Kamin nur beim Anzünden, ist das <strong>Rohr noch kalt</strong>. Raucht er ständig, ist der Schornstein oft <strong>verschmutzt oder verstopft</strong> durch Ruß oder ein Nest, es kommt <strong>zu wenig Luft</strong> ins Zimmer, oder <strong>der Wind</strong> drückt den Rauch zurück. Lassen Sie den Schornstein zuerst fegen und prüfen: Das kostet 60 bis 120 € und löst es oft schon.',
    sections: [
      {
        id: 'oorzaak',
        h: 'Warum raucht der Kamin zurück?',
        table: {
          head: ['Was Sie sehen', 'Wahrscheinliche Ursache'],
          rows: [
            ['Rauch nur beim Anzünden', 'Kaltes Rauchrohr, vor allem an einer Außenwand oder nach langem Stillstand'],
            ['Ständig Rauch, auch bei gutem Feuer', 'Verschmutztes oder verstopftes Rohr: Ruß, Teer, ein Nest oder lose Steine'],
            ['Besser mit gekipptem Fenster', 'Zu wenig Luftzufuhr: ein dichtes Haus oder eine Dunstabzugshaube, die Luft absaugt'],
            ['Nur bei Wind aus einer Richtung', 'Wind drückt den Rauch zurück, durch einen höheren Nachbarn, einen Hang oder einen zu kurzen Schornstein'],
            ['Viel Rauch, zischendes, schwarzes Feuer', 'Feuchtes Holz'],
            ['Rauchgeruch in einem anderen Raum oder beim Nachbarn', 'Riss im Rohr: sofort prüfen lassen'],
          ],
        },
      },
      {
        id: 'zelf',
        h: 'Was Sie selbst tun können',
        html: `<ul>
<li><strong>Rohr vorwärmen</strong> mit brennendem Zeitungspapier unten im Schornstein, und mit kleinem, trockenem Anzündholz beginnen.</li>
<li><strong>Ein Fenster kippen</strong> und die Dunstabzugshaube in der Küche ausschalten.</li>
<li><strong>Trockenes Holz verbrennen</strong> mit weniger als 20 % Feuchte, etwa Oliven- oder Mandelholz, das ein Jahr getrocknet ist.</li>
<li><strong>Nach oben schauen</strong> mit einer Taschenlampe, wenn der Kamin kalt ist: Sehen Sie kein Licht, steckt etwas im Rohr.</li>
<li><strong>Einen Kohlenmonoxidmelder</strong> im Raum mit Kamin oder Ofen anbringen. Er kostet 25 bis 50 €.</li>
</ul>`,
      },
      {
        id: 'oplossing',
        h: 'Lösungen und Kosten',
        table: {
          head: ['Lösung', 'Wann', 'Richtwert'],
          rows: [
            ['Schornstein fegen und prüfen', 'Immer der erste Schritt', '60 – 120 €'],
            ['Windhaube oder Zughaube', 'Bei Rückstau durch Wind', '150 – 400 €'],
            ['Schornstein verlängern', 'Wenn er zu niedrig über Dach oder First endet', '300 – 1.200 €'],
            ['Lüftungsgitter oder Außenluftanschluss', 'Bei zu wenig Luftzufuhr', '100 – 400 €'],
            ['Edelstahl-Innenrohr', 'Bei einem zu weiten, gerissenen oder undichten Rohr', '1.000 – 2.500 €'],
          ],
          note: 'Mehr Preise für Fegen, Reparatur und einen neuen Ofen: siehe <a href="/de/kosten/schornstein-und-kaminofen/">Kosten Schornstein und Kaminofen</a>.',
        },
      },
      {
        id: 'gevaar',
        h: 'Wann ist es gefährlich?',
        html: '<p>Rauch im Haus ist lästig, aber Kohlenmonoxid können Sie weder sehen noch riechen. Bekommen Sie am Kamin Kopfschmerzen, Schwindel oder Übelkeit, gehen Sie nach draußen und heizen Sie nicht mehr, bis der Schornstein geprüft ist. Riechen Sie Rauch in einem anderen Raum oder beim Nachbarn, oder sehen Sie Rußflecken an einer Wand, ist das Rohr wahrscheinlich gerissen.</p>',
      },
    ],
    faq: [
      { q: 'Warum raucht der Kamin nur zu Beginn des Winters?', a: 'Ein Rohr, das monatelang kalt und feucht war, zieht schlecht, bis es warm ist. Auch kann im Frühjahr ein Nest gebaut worden sein. Lassen Sie den Schornstein im September oder Oktober fegen.' },
      { q: 'Hilft eine Windhaube immer?', a: 'Nur wenn der Wind die Ursache ist. Bei einem verschmutzten Rohr oder zu wenig Luft hilft sie nicht. Lassen Sie daher zuerst die Ursache feststellen.' },
      { q: 'Kann ein Kaminofen in einen alten offenen Kamin?', a: 'Oft ja, mit einem Edelstahl-Innenrohr durch den bestehenden Schornstein. Das löst die meisten Rauchprobleme sofort und gibt viel mehr Wärme.' },
    ],
    links: [
      { href: '/de/kosten/schornstein-und-kaminofen/', label: 'Kosten Schornstein und Kaminofen' },
      { href: '/de/ratgeber/haus-winterfest-spanien/', label: 'Ratgeber: Haus winterfest machen' },
      { href: '/de/instandhaltung/', label: 'Instandhaltung und Reparaturen' },
    ],
    related: ['costs:schoorsteen', 'problems:tocht', 'problems:vocht'],
    sources: [
      { name: 'BOE, RITE (Heizungsanlagen)', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2007-15820' },
    ],
    ctaTitle: 'Kamin raucht zurück?',
    ctaText: 'Schicken Sie ein Foto von Kamin oder Ofen und vom Schornstein auf dem Dach, und sagen Sie, wann es passiert. Sie erhalten Rat und einen Preis.',
    minutes: 4,
    published: '2026-11-05',
  },
  {
    key: 'tocht',
    slug: 'zugluft-und-kondenswasser-an-fenstern',
    title: 'Zugluft und Kondenswasser an Fenstern in Ihrem Haus in Spanien: Ursache und Lösung',
    seoTitle: 'Zugluft und Kondenswasser an Fenstern in Spanien',
    short: 'Zugluft und Kondenswasser',
    description: 'Laufen Ihre Fenster im Winter an und zieht es? Warum Einfachglas und kalte Aluminiumrahmen das verursachen und was neue Fenster oder Glas kosten.',
    lead: 'Spanische Häuser sind für den Sommer gebaut. Im Winter sitzen Sie hinter Einfachglas in dünnen Aluminiumrahmen, mit kalter Zugluft am Boden und morgens Pfützen auf der Fensterbank. Das ist nicht nur unangenehm, es führt auch zu Schimmel.',
    keyword: 'kondenswasser fenster spanien',
    dienst: 'ramen',
    onderwerp: 'Ich habe Zugluft oder Kondenswasser an meinen Fenstern.',
    answer: 'Kondenswasser an Fenstern entsteht durch <strong>feuchte Raumluft auf einer kalten Fläche</strong>: Einfachglas und Aluminiumrahmen ohne thermische Trennung. Zugluft kommt meist von <strong>verschlissenen Dichtungen und Fugen</strong> an Rahmen und Rollladenkästen. Lüften und Abdichten helfen viel; die eigentliche Lösung ist Doppelverglasung in einem gedämmten Rahmen, ab etwa 400 € pro Fenster.',
    sections: [
      {
        id: 'oorzaak',
        h: 'Woher kommt es?',
        table: {
          head: ['Was Sie sehen', 'Wahrscheinliche Ursache'],
          rows: [
            ['Tropfen auf dem Glas, vor allem morgens', 'Einfachglas und feuchte Luft vom Schlafen, Kochen und Duschen'],
            ['Wasser und schwarze Punkte am Rahmen', 'Aluminiumrahmen ohne thermische Trennung: Das Metall ist eiskalt'],
            ['Zugluft am Fenster', 'Verschlissene Bürsten oder Dichtungen, Fugen zwischen Rahmen und Wand'],
            ['Kalte Luft aus dem Rollladenkasten', 'Ungedämmter Rollladenkasten (cajón de persiana)'],
            ['Schimmel in der Ecke am Fenster', 'Wärmebrücke in der Wand und zu wenig Lüftung'],
          ],
        },
      },
      {
        id: 'zelf',
        h: 'Was Sie selbst tun können',
        html: `<ul>
<li><strong>Jeden Tag lüften</strong>, zehn Minuten Querlüften, auch im Winter.</li>
<li><strong>Kondenswasser morgens abwischen</strong>, damit es nicht in Rahmen oder Wand zieht.</li>
<li><strong>Einen Luftentfeuchter verwenden</strong> in Schlafzimmern und in einem leerstehenden Haus.</li>
<li><strong>Bürsten und Dichtungen</strong> von Schiebefenstern erneuern und Fugen zwischen Rahmen und Wand abdichten.</li>
<li><strong>Den Rollladenkasten dämmen</strong> mit Dämmplatte und Dichtband.</li>
</ul>`,
      },
      {
        id: 'oplossing',
        h: 'Lösungen und Kosten',
        table: {
          head: ['Lösung', 'Erläuterung', 'Richtwert'],
          rows: [
            ['Dichtungen und Fugen erneuern', 'Pro Fenster, Bürsten, Dichtungen und Fugenmasse', '50 – 150 €'],
            ['Rollladenkasten dämmen', 'Pro Kasten', '80 – 200 €'],
            ['Doppelverglasung im bestehenden Rahmen', 'Wenn der Rahmen gut und geeignet ist', '100 – 250 € pro m²'],
            ['Neues doppelt verglastes Fenster', 'Aluminium RPT oder Kunststoff, etwa 120 × 120 cm', '350 – 800 €'],
          ],
          note: 'Mehr zu Material, Glas und Genehmigung: siehe <a href="/de/kosten/fenster-und-rahmen/">Kosten Fenster und Rahmen</a>.',
        },
      },
    ],
    faq: [
      { q: 'Ist Kondenswasser an Fenstern schlimm?', a: 'Etwas Kondenswasser an einem kalten Morgen ist normal. Läuft es jeden Tag und wird der Rahmen oder die Wand schwarz, entsteht Schimmel. Dann braucht es mehr Lüftung oder besseres Glas.' },
      { q: 'Verhindert Doppelverglasung jedes Kondenswasser?', a: 'Das meiste, weil die innere Scheibe wärmer bleibt. Ist die Luft im Haus sehr feucht, müssen Sie weiter lüften. Siehe auch Feuchtigkeit und Schimmel.' },
      { q: 'Helfen neue Fenster auch im Sommer?', a: 'Ja. Mit Sonnenschutz-Doppelverglasung und Rollläden bleibt das Haus kühler, sodass die Klimaanlage weniger laufen muss.' },
    ],
    links: [
      { href: '/de/kosten/fenster-und-rahmen/', label: 'Kosten Fenster und Rahmen' },
      { href: '/de/probleme/feuchtigkeit-und-schimmel/', label: 'Feuchtigkeit und Schimmel' },
      { href: '/de/ratgeber/haus-winterfest-spanien/', label: 'Ratgeber: Haus winterfest machen' },
    ],
    related: ['costs:ramen', 'problems:vocht', 'costs:airco'],
    sources: [
      { name: 'Código Técnico de la Edificación, DB HE (Energieeinsparung)', url: 'https://www.codigotecnico.org/DocumentosCTE/AhorroEnergia.html' },
      { name: 'IDAE, Förderung für Energieeinsparung in Wohnungen', url: 'https://www.idae.es/ayudas-y-financiacion' },
    ],
    ctaTitle: 'Probleme mit Zugluft oder Kondenswasser?',
    ctaText: 'Schicken Sie Fotos Ihrer Fenster und der Stellen mit Kondenswasser oder Schimmel. Sie erhalten Rat und einen Preis.',
    minutes: 4,
    published: '2026-11-05',
  },
];
