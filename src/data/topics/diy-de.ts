import type { Topic } from './types';

// Anleitungen zum Selbermachen auf Deutsch: wie Sie eine Arbeit selbst angehen, was Sie wählen,
// wo Sie Material kaufen, welche Genehmigung Sie brauchen und wann ein Fachmann besser ist.
export const diyDe: Topic[] = [
  {
    key: 'zwembad',
    slug: 'pool-selber-bauen',
    title: 'Einen Pool in Spanien selber bauen: alle Schritte',
    seoTitle: 'Pool selber bauen in Spanien: Schritte, Auswahl und Genehmigung',
    short: 'Pool selber bauen',
    description: 'Einen Pool an Ihrem Haus in der Axarquía selber bauen? Die Schritte von der Genehmigung bis zum Befüllen, welchen Pooltyp Sie selbst bauen können und wo Sie das Material kaufen.',
    lead: 'Ein Pool ist der Traum fast jedes Hausbesitzers in der Axarquía, und einen guten Teil der Arbeit können Sie selbst machen. Wer aber die Genehmigung oder den Aushub unterschätzt, zahlt später doppelt.',
    keyword: 'pool selber bauen spanien',
    dienst: 'zwembad',
    onderwerp: 'Ich möchte einen Pool bauen und suche Hilfe für (einen Teil) der Arbeit.',
    answer: 'Einen <strong>Aufstellpool</strong> stellen Sie ganz allein auf. Einen eingelassenen Pool aus <strong>Schalsteinen mit Folie</strong> oder ein <strong>fertiges GFK-Becken</strong> können Sie größtenteils selbst bauen, wenn Sie Aushub, Elektrik und gegebenenfalls den Kran vergeben. Für jeden eingelassenen Pool brauchen Sie in Andalusien eine <strong>Baugenehmigung mit Projekt</strong>.',
    sections: [
      {
        id: 'erlaubt',
        h: 'Zuerst: Darf hier ein Pool hin?',
        html: `<p>Fangen Sie nicht an zu graben, bevor Sie das wissen. Ein eingelassener Pool ist in Andalusien eine <em>obra mayor</em>: Sie beantragen bei der Gemeinde eine Baugenehmigung (<em>licencia de obra</em>) mit einem Projekt eines Architekten oder technischen Ingenieurs. Achten Sie auf drei Dinge:</p>
<ul>
<li><strong>Art des Grundstücks.</strong> Auf ländlichem Boden (<em>suelo rústico</em>) gelten strengere Regeln als in einem Wohngebiet. Fragen Sie beim Ayuntamiento, was auf Ihrem Grundstück erlaubt ist.</li>
<li><strong>Der Status Ihres Hauses.</strong> Hat Ihr Haus AFO-Status oder keine vollständige Genehmigung, dürfen Sie oft nichts anbauen. Lesen Sie zuerst unseren Ratgeber zu <a href="/de/ratgeber/afo-legalisierung-andalusien/">AFO und Legalisierung</a>.</li>
<li><strong>Wasser.</strong> Ein Pool von 8 × 4 Metern fasst 40 bis 50 m³ Wasser. In trockenen Jahren haben Gemeinden in der Axarquía das Befüllen von Pools eingeschränkt oder verboten. Fragen Sie vor dem Bau nach und rechnen Sie für die erste Füllung mit einem Tankwagen (<em>camión cisterna</em>).</li>
</ul>
<p>Wie es in Ihrer Gemeinde läuft, lesen Sie zum Beispiel unter <a href="/de/orte/competa/baugenehmigung/">Baugenehmigung in Cómpeta</a> oder <a href="/de/orte/nerja/baugenehmigung/">in Nerja</a>.</p>`,
      },
      {
        id: 'auswahl',
        h: 'Welchen Pool können Sie selbst bauen?',
        table: {
          head: ['Typ', 'Selbst machbar?'],
          rows: [
            ['Aufstellpool aus Stahl oder Harz auf einer Betonplatte', 'Vollständig'],
            ['Bausatz aus Schalsteinen (<em>bloques de encofrado</em>) mit Folie', 'Größtenteils, Aushub und Elektrik vergeben'],
            ['Schalsteine mit Gresite-Mosaik', 'Ja, mit Erfahrung im Mauern und Fliesen'],
            ['Fertiges GFK-Becken', 'Teilweise: Aushub und Einsetzen mit einem Kran'],
            ['Spritzbeton (Gunite)', 'Nein, dafür braucht es eine Fachfirma'],
          ],
        },
        after: '<p>Auf einer Finca mit schmaler Bergstraße ist ein GFK-Becken oft keine Option: Lkw und Kran kommen nicht hin. Einen Steinpool können Sie überall bauen, weil alles in kleinen Teilen angeliefert wird.</p>',
      },
      {
        id: 'schritte',
        h: 'Schritt für Schritt',
        html: `<ol>
<li><strong>Standort und Entwurf.</strong> Wählen Sie einen Platz mit Nachmittagssonne, windgeschützt und mit Zufahrt für einen Minibagger. Halten Sie Abstand zur Grundstücksgrenze; wie viel, schreibt Ihre Gemeinde vor.</li>
<li><strong>Genehmigung.</strong> Lassen Sie das Projekt zeichnen und beantragen Sie die Genehmigung. Rechnen Sie mit einigen Wochen bis einigen Monaten.</li>
<li><strong>Abstecken und ausheben.</strong> Mieten Sie einen Minibagger mit Fahrer oder machen Sie es selbst, wenn Sie Erfahrung haben. Klären Sie vorher, wohin die Erde kommt; Abfuhr kostet Geld. Stoßen Sie auf Fels, brauchen Sie einen Abbruchhammer.</li>
<li><strong>Boden.</strong> Eine Kiesschicht, darauf eine bewehrte Betonplatte mit Gefälle zum Bodenablauf.</li>
<li><strong>Wände.</strong> Setzen Sie die Schalsteine mit Bewehrung und verfüllen Sie sie mit Beton. Prüfen Sie jede Lage mit der Wasserwaage.</li>
<li><strong>Leitungen.</strong> Skimmer, Bodenablauf, Einlaufdüsen und die Leitungen zum Technikraum. Machen Sie eine Druckprobe, bevor Sie die Leitungen zuschütten.</li>
<li><strong>Oberfläche.</strong> Eine Folie, oder Putz mit Gresite-Mosaik.</li>
<li><strong>Technik.</strong> Pumpe, Sandfilter (oder Glasfilter) und eventuell eine Salzelektrolyse. Die Elektrik lassen Sie von einem zugelassenen Installateur (<em>instalador autorizado</em>) anschließen, der auch das Zertifikat ausstellt.</li>
<li><strong>Rand und Terrasse.</strong> Setzen Sie die Randsteine (<em>coronación</em>), verfüllen Sie rundherum und legen Sie die Terrasse an.</li>
<li><strong>Befüllen und einstellen.</strong> Füllen Sie den Pool, starten Sie den Filter und bringen Sie pH-Wert und Chlor oder Salz ins Gleichgewicht.</li>
</ol>`,
      },
      {
        id: 'kaufen',
        h: 'Wo kaufen Sie das Material?',
        html: `<ul>
<li><strong>Bausätze und Aufstellpools</strong>: in den großen Baumärkten in Málaga und bei Online-Händlern in Spanien, die auch über eine Bergstraße liefern, wenn Sie das vorher sagen.</li>
<li><strong>Steine, Beton, Bewehrung und Kies</strong>: beim Baustoffhandel (<em>almacén de materiales de construcción</em>) in Vélez-Málaga, Torre del Mar oder Nerja. Er liefert mit kleinen Lkw, auch in die Dörfer.</li>
<li><strong>Pumpe, Filter, Folie und Chemie</strong>: im Poolgeschäft (<em>tienda de piscinas</em>), das Sie auch zur Pumpengröße berät.</li>
<li><strong>Minibagger oder Betonmischer</strong>: beim Maschinenverleih (<em>alquiler de maquinaria</em>).</li>
</ul>`,
      },
      {
        id: 'fachmann',
        h: 'Wann ist ein Fachmann besser?',
        html: `<ul>
<li>Der Pool liegt am Hang und braucht eine Stützmauer.</li>
<li>Der Boden ist Fels oder der Platz ist schlecht erreichbar.</li>
<li>Sie möchten Spritzbeton, eine Überlaufrinne oder eine besondere Form.</li>
<li>Die Elektrik und das Zertifikat: Das darf nur ein zugelassener Installateur.</li>
<li>Sie sind selbst nicht in Spanien, um die Arbeiten zu begleiten.</li>
</ul>
<p>Viele Eigentümer wählen einen Mittelweg: Der Fachmann macht Aushub, Rohbau und Technik, Sie machen Terrasse und Ausbau selbst.</p>`,
      },
    ],
    faq: [
      { q: 'Brauche ich für einen Aufstellpool eine Genehmigung?', a: 'Ein Aufstellpool, den Sie wieder abbauen können, braucht in den meisten Gemeinden keine Baugenehmigung. Ein eingelassener oder halb eingelassener Pool oder eine dauerhafte Betonplatte meistens schon. Fragen Sie beim Ayuntamiento nach.' },
      { q: 'Kann ich einen Teil selbst machen und den Rest machen lassen?', a: 'Ja, und das machen viele Eigentümer. Wir übernehmen zum Beispiel Aushub, Rohbau und Technik, und Sie legen die Terrasse und machen den Ausbau selbst. Sagen Sie uns, was Sie selbst machen möchten, dann planen wir den Rest drumherum.' },
      { q: 'Wie lange dauert es, einen Pool selbst zu bauen?', a: 'Neben der Genehmigung rechnen Sie mit vier bis zehn Wochenenden oder zwei bis vier Wochen in Vollzeit, je nach Erfahrung und Boden.' },
    ],
    links: [
      { href: '/de/pool/', label: 'Poolbau und Poolpflege' },
      { href: '/de/kosten/pool-bauen/', label: 'Was kostet es, einen Pool bauen zu lassen?' },
      { href: '/de/ratgeber/afo-legalisierung-andalusien/', label: 'Ratgeber: AFO und Legalisierung' },
      { href: '/de/probleme/legionellen/', label: 'Legionellen in Pool und Leitungen' },
    ],
    related: ['costs:zwembad', 'diy:dak', 'problems:legionella'],
    sources: [
      { name: 'Junta de Andalucía, Ley 7/2021 de impulso para la sostenibilidad del territorio (LISTA)', url: 'https://www.juntadeandalucia.es/boja/2021/233/1' },
      { name: 'Código Técnico de la Edificación (CTE)', url: 'https://www.codigotecnico.org/' },
      { name: 'Reglamento electrotécnico para baja tensión (REBT)', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2002-18099' },
    ],
    ctaTitle: 'Lieber (einen Teil) machen lassen?',
    ctaText: 'Möchten Sie den Pool bauen lassen, ganz oder teilweise? Wir helfen Ihnen, ihn umzusetzen, von der Genehmigung bis zum ersten Schwimmen.',
    minutes: 7,
    published: '2026-11-05',
  },
  {
    key: 'dak',
    slug: 'dach-selbst-reparieren',
    title: 'Dach reparieren oder erneuern in Spanien: was Sie selbst machen können',
    seoTitle: 'Dach selbst reparieren in Spanien: Ziegel, Dachterrasse und wann ein Fachmann',
    short: 'Dach selbst reparieren',
    description: 'Dachziegel austauschen, eine Dachterrasse neu abdichten oder das ganze Dach erneuern? Was Sie selbst machen können, welches Material Sie wählen und wann die Arbeit etwas für einen Fachmann ist.',
    lead: 'Die meisten undichten Dächer in der Axarquía fangen klein an: ein verrutschter Ziegel, ein verstopfter Ablauf oder eine gerissene Schicht auf der Dachterrasse. Vieles davon beheben Sie selbst, wenn Sie sicher arbeiten.',
    keyword: 'dach reparieren spanien',
    dienst: 'onderhoud',
    onderwerp: 'Ich möchte mein Dach oder meine Dachterrasse reparieren oder erneuern lassen.',
    answer: 'Einen <strong>kaputten Ziegel austauschen</strong>, <strong>Rinnen und Abläufe reinigen</strong> und eine <strong>Dachterrasse neu beschichten</strong> mit Flüssigkunststoff können Sie selbst. Balken oder eine Dachplatte ersetzen, das Dach erhöhen oder ein komplett neues Dach ist genehmigungspflichtige Arbeit für einen Fachmann. Ein Dach aus <strong>Uralita</strong> (Asbestzement) fassen Sie nie selbst an.',
    sections: [
      {
        id: 'welches-dach',
        h: 'Welches Dach haben Sie?',
        table: {
          head: ['Dach', 'Erkennen', 'Achtung'],
          rows: [
            ['Schrägdach mit Mönch-Nonne-Ziegeln (<em>teja árabe</em>)', 'Rote oder braune gebogene Ziegel, oft in Mörtel verlegt', 'Ziegel verrutschen durch Wind und Hitze; die Schicht darunter ist oft alt'],
            ['Flachdach oder Dachterrasse (<em>azotea</em>)', 'Gefliest oder beschichtet, mit Abläufen in den Ecken', 'Undicht meist an Fugen, Rändern und Abläufen'],
            ['Wellplatten aus <em>Uralita</em>', 'Graue Wellplatten, oft auf Nebengebäuden', 'Enthält fast immer Asbest: nur ein zugelassenes Unternehmen darf es entfernen'],
          ],
        },
      },
      {
        id: 'selbst',
        h: 'Was können Sie selbst machen?',
        table: {
          head: ['Arbeit', 'Selbst?'],
          rows: [
            ['Rinnen und Abläufe reinigen', 'Ja, jeden Herbst'],
            ['Kaputten oder verrutschten Ziegel austauschen', 'Ja'],
            ['Fugen und Anschlüsse abdichten oder abkleben', 'Ja'],
            ['Dachterrasse mit Flüssigkunststoff beschichten (<em>membrana líquida</em>)', 'Ja'],
            ['Einen Teil des Daches neu eindecken', 'Mit Erfahrung'],
            ['Balken, Dachplatte oder das ganze Dach erneuern', 'Nein'],
          ],
        },
      },
      {
        id: 'dachterrasse',
        h: 'So dichten Sie eine Dachterrasse neu ab',
        html: `<ol>
<li>Fegen und spülen Sie die Terrasse und lassen Sie sie vollständig trocknen.</li>
<li>Entfernen Sie lose Beschichtung und Mörtel und füllen Sie Risse mit Reparaturmörtel oder Dichtstoff.</li>
<li>Machen Sie die Abläufe frei und prüfen Sie, ob das Wasser wirklich dorthin läuft.</li>
<li>Tragen Sie eine Grundierung auf, nach Vorschrift der Beschichtung.</li>
<li>Legen Sie in Ecken, Ränder und Fugen ein Armierungsgewebe (<em>malla</em>) in die erste Schicht ein.</li>
<li>Tragen Sie mindestens zwei Schichten über Kreuz auf, mit Trockenzeit dazwischen.</li>
</ol>
<p>Arbeiten Sie im Frühjahr oder Herbst: In der vollen Sommersonne trocknet die Beschichtung zu schnell, und im Winter ist die Regengefahr zu groß. Liegen Fliesen auf der Terrasse, die Sie behalten möchten, gibt es eine transparente Beschichtung, die aber weniger haltbar ist. Müssen die Fliesen herunter, ist es Arbeit für einen Fachmann.</p>`,
      },
      {
        id: 'sicher',
        h: 'Sicher arbeiten auf dem Dach',
        html: `<ul>
<li>Arbeiten Sie nie allein und nie bei Wind oder nach Regen.</li>
<li>Benutzen Sie auf einem Schrägdach einen Auffanggurt mit Anschlagpunkt und eine Leiter, die mindestens einen Meter über die Dachkante reicht.</li>
<li>Laufen Sie nicht ohne Brett über alte Ziegel: Sie brechen, und die Konstruktion darunter ist manchmal schwächer, als Sie denken.</li>
<li>Kommen Leiter, Gerüst oder Container auf die Straße, brauchen Sie eine Genehmigung für die Nutzung der öffentlichen Straße (<em>ocupación de la vía pública</em>).</li>
</ul>`,
      },
      {
        id: 'genehmigung',
        h: 'Genehmigung',
        html: '<p>Reparaturen mit denselben Materialien gelten meist als kleine Bauarbeiten (<em>obra menor</em>), mit einer Anzeige (<em>declaración responsable</em>) bei der Gemeinde. Ändern Sie Konstruktion, Höhe oder Form des Daches, ist es eine <em>obra mayor</em> mit einem Projekt eines Architekten. In den historischen Ortskernen von Dörfern wie Frigiliana oder Cómpeta gibt es oft Vorgaben zu Art und Farbe der Ziegel.</p>',
      },
      {
        id: 'fachmann',
        h: 'Wann ist ein Fachmann besser?',
        html: `<ul>
<li>Die Decke hängt durch, die Balken haben Risse oder es gibt Holzwurm oder Termiten.</li>
<li>Es ist undicht, obwohl Ziegel oder Beschichtung gut aussehen: Dann liegt das Problem darunter.</li>
<li>Das ganze Dach muss erneuert werden, mit Dämmung.</li>
<li>Auf dem Dach liegt Uralita oder anderer Asbest.</li>
</ul>`,
      },
    ],
    faq: [
      { q: 'Wann arbeite ich am besten am Dach?', a: 'Im Frühjahr und im Herbst. Im Juli und August wird ein Dach zu heiß, um sicher zu arbeiten, und Beschichtungen trocknen zu schnell. Kontrollieren Sie das Dach jeden Herbst, vor den Regenfällen im Oktober und November.' },
      { q: 'Kann ich alte Ziegel wiederverwenden?', a: 'Ja, und in historischen Ortskernen ist das oft sogar erwünscht. Alte Teja árabe ist gefragt und manchmal teurer als neue. Nehmen Sie die ganzen Ziegel für die obere Lage und die weniger guten für die untere.' },
      { q: 'Darf ich Uralita selbst entfernen?', a: 'Nein. Asbest darf in Spanien nur von einem Unternehmen entfernt werden, das im Register für Asbestarbeiten (RERA) eingetragen ist. Lassen Sie es liegen, bis es fachgerecht entfernt wird.' },
    ],
    links: [
      { href: '/de/probleme/undichtes-dach/', label: 'Undichtes Dach: Ursache und Lösung' },
      { href: '/de/ratgeber/asbest-uralita-dach-spanien/', label: 'Ratgeber: Asbest und Uralita auf dem Dach' },
      { href: '/de/kosten/dach-und-dachterrasse/', label: 'Was kostet ein neues Dach oder eine Dachterrasse?' },
      { href: '/de/instandhaltung/', label: 'Instandhaltung und Reparaturen' },
    ],
    related: ['problems:daklekkage', 'costs:dak', 'diy:witten'],
    sources: [
      { name: 'Código Técnico de la Edificación (CTE), DB HS 1 Feuchteschutz', url: 'https://www.codigotecnico.org/' },
      { name: 'Real Decreto 396/2006 über Arbeiten mit Asbest', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2006-6474' },
    ],
    ctaTitle: 'Undichtes Dach, oder muss es ganz neu?',
    ctaText: 'Muss das Dach repariert oder erneuert werden? Wir kümmern uns darum, auch wenn Sie selbst nicht in Spanien sind.',
    minutes: 7,
    published: '2026-11-05',
  },
  {
    key: 'ramen',
    slug: 'fenster-austauschen',
    title: 'Fenster austauschen in Spanien: was Sie wählen und wie Sie sie selbst einbauen',
    seoTitle: 'Fenster austauschen in Spanien: Aluminium oder Kunststoff, Glas und Einbau',
    short: 'Fenster austauschen',
    description: 'Neue Fenster für Ihr Haus in der Axarquía? Aluminium oder Kunststoff, welches Glas, Schiebe- oder Dreh-Kipp-Fenster, wie Sie messen und einbauen, wo Sie sie kaufen und welche Genehmigung nötig ist.',
    lead: 'Alte Fenster mit Einfachglas lassen im Winter die Kälte und im Sommer die Hitze herein. Neue Fenster gehören zu den besten Verbesserungen für ein spanisches Haus, und mit etwas Geschick bauen Sie sie selbst ein.',
    keyword: 'fenster austauschen spanien',
    dienst: 'renovatie',
    onderwerp: 'Ich möchte meine Fenster austauschen lassen.',
    answer: 'Die meisten Eigentümer in der Axarquía wählen <strong>Aluminium mit thermischer Trennung</strong> (<em>RPT</em>) oder <strong>Kunststoff (PVC)</strong>, mit <strong>Doppelverglasung</strong> und Sonnenschutzglas auf der Süd- und Westseite. Sie lassen sie von einer örtlichen <em>carpintería</em> nach Maß fertigen und können sie selbst einbauen, wenn die Öffnung gleich bleibt.',
    sections: [
      {
        id: 'material',
        h: 'Aluminium, Kunststoff oder Holz?',
        table: {
          head: ['Material', 'Vorteile', 'Nachteile'],
          rows: [
            ['Aluminium mit thermischer Trennung (RPT)', 'Stabil, schlankes Profil, beständig gegen Sonne und Seeluft, viele Farben', 'Etwas weniger dämmend als Kunststoff'],
            ['Kunststoff (PVC)', 'Dämmt am besten, günstiger', 'Dunkle Farben können sich in praller Sonne verziehen; dickeres Profil'],
            ['Holz', 'Schön und passend zu alten Häusern', 'Viel Pflege bei Sonne und Regen; teurer'],
          ],
        },
      },
      {
        id: 'glas',
        h: 'Glas, Öffnungsart und Extras',
        html: `<ul>
<li><strong>Doppelverglasung</strong> (<em>doble acristalamiento</em>, in Spanien oft <em>Climalit</em> genannt) ist Standard. Auf der Süd- und Westseite wählen Sie Sonnenschutzglas (<em>control solar</em>), auf der Nordseite Wärmeschutzglas (<em>bajo emisivo</em>).</li>
<li><strong>Sicherheitsglas</strong> (<em>laminado</em>) im Erdgeschoss und bei bodentiefen Türen.</li>
<li><strong>Dreh-Kipp-Fenster</strong> (<em>oscilobatiente</em>) schließen und dämmen am besten. <strong>Schiebefenster</strong> (<em>correderas</em>) brauchen keinen Platz, lassen aber mehr Zugluft und Staub durch.</li>
<li><strong>Extras</strong>: Rollläden (<em>persianas</em>), Fensterläden (<em>contraventanas</em> oder <em>mallorquinas</em>), Fliegengitter (<em>mosquiteras</em>) und Gitter (<em>rejas</em>) für Häuser, die lange leer stehen.</li>
</ul>`,
      },
      {
        id: 'messen',
        h: 'So messen Sie',
        html: `<ol>
<li>Messen Sie die Breite der Öffnung in drei Höhen und die Höhe an drei Stellen.</li>
<li>Nehmen Sie jeweils das kleinste Maß und ziehen Sie etwa 1 cm für die Fuge rundherum ab.</li>
<li>Prüfen Sie über die Diagonalen, ob die Öffnung rechtwinklig ist. Eine Abweichung von mehr als einem Zentimeter gleichen Sie mit dem Abschluss aus.</li>
<li>Notieren Sie die Öffnungsrichtung, wo der Rollladenkasten hinkommt und ob Sie eine Fensterbank brauchen.</li>
</ol>
<p>Im Zweifel lassen Sie die carpintería selbst messen. Das kostet wenig oder nichts, und dann trägt sie die Verantwortung für das Maß.</p>`,
      },
      {
        id: 'einbau',
        h: 'Einbau Schritt für Schritt',
        html: `<ol>
<li>Nehmen Sie die alten Flügel heraus. Den alten Rahmen entfernen Sie, oder Sie lassen ihn stehen und setzen einen Renovierungsrahmen darüber. Das spart Stemm- und Putzarbeit, aber die Glasfläche wird etwas kleiner.</li>
<li>Säubern und begradigen Sie die Öffnung.</li>
<li>Setzen Sie den neuen Rahmen auf Keile, waagerecht und rechtwinklig.</li>
<li>Befestigen Sie ihn mit Rahmenschrauben oder Ankern in der Wand, ohne den Rahmen zu verziehen.</li>
<li>Füllen Sie die Fuge rundherum mit PU-Schaum und schneiden Sie ihn nach dem Aushärten ab.</li>
<li>Dichten Sie außen mit einem wetterfesten Dichtstoff (MS-Polymer) ab und schließen Sie innen mit einer Leiste oder Putz ab.</li>
<li>Hängen Sie die Flügel wieder ein und stellen Sie Bänder und Beschläge ein.</li>
</ol>`,
      },
      {
        id: 'kaufen',
        h: 'Wo kaufen Sie Fenster?',
        html: '<p>Fenster nach Maß kaufen Sie bei einer örtlichen Aluminium- oder Kunststoffwerkstatt (<em>carpintería de aluminio</em> oder <em>de PVC</em>). Die gibt es in Vélez-Málaga, Torre del Mar, Nerja und in vielen Dörfern. Holen Sie zwei oder drei Angebote ein und fragen Sie nach Marke und Serie des Profils und nach der Glasart, damit Sie vergleichen können. Fenster in Standardmaßen finden Sie in den Baumärkten in Málaga, aber alte spanische Häuser haben selten Standardmaße.</p>',
      },
      {
        id: 'genehmigung',
        h: 'Genehmigung',
        html: '<p>Fenster in derselben Öffnung auszutauschen gilt meist als kleine Bauarbeit, mit einer Anzeige (<em>declaración responsable</em>) bei der Gemeinde. Im historischen Ortskern vieler weißer Dörfer gibt es Vorgaben zu Farbe, Modell und Material, zum Beispiel Holz oder Holzoptik. Fragen Sie vor der Bestellung nach. Vergrößern Sie eine Öffnung oder setzen Sie ein neues Fenster in eine Wand, ist das ein Eingriff in die Konstruktion, und Sie brauchen einen Fachmann und eine Genehmigung.</p>',
      },
    ],
    faq: [
      { q: 'Wie lange dauert es, bis Fenster nach Maß fertig sind?', a: 'Meist zwei bis vier Wochen nach dem Aufmaß. Im Frühjahr, wenn viele ihr Haus für den Sommer vorbereiten, kann es länger dauern.' },
      { q: 'Lösen neue Fenster Feuchtigkeit und Schimmel?', a: 'Sie verringern Zugluft und kalte Stellen, aber ein gut abgedichtetes Haus braucht mehr Lüftung. Ohne Lüftung kann Kondenswasser sogar zunehmen. Lesen Sie mehr über Feuchtigkeit und Schimmel.' },
      { q: 'Kann ich Fenster ohne Erfahrung selbst einbauen?', a: 'Ein Fenster in einer vorhandenen Öffnung auszutauschen ist für Geschickte gut machbar. Eine große Schiebetür oder Fenster in der Höhe bauen besser zwei Fachleute ein: Sie sind schwer und müssen genau passen.' },
    ],
    links: [
      { href: '/de/renovierung/', label: 'Renovierung und Umbau' },
      { href: '/de/probleme/feuchtigkeit-und-schimmel/', label: 'Feuchtigkeit und Schimmel im Haus' },
      { href: '/de/instandhaltung/', label: 'Instandhaltung und Reparaturen' },
    ],
    related: ['diy:kachel', 'problems:vocht', 'costs:airco'],
    sources: [
      { name: 'Código Técnico de la Edificación (CTE), DB HE Energieeinsparung', url: 'https://www.codigotecnico.org/' },
    ],
    ctaTitle: 'Fenster lieber einbauen lassen?',
    ctaText: 'Möchten Sie neue Fenster einbauen lassen? Wir regeln das für Sie, vom Aufmaß bis zur Montage.',
    minutes: 7,
    published: '2026-11-05',
  },
  {
    key: 'kachel',
    slug: 'kaminofen-einbauen',
    title: 'Einen Kaminofen und Schornstein in Spanien einbauen: so machen Sie es selbst',
    seoTitle: 'Kaminofen einbauen in Spanien: Ofen wählen, Rauchrohr und Regeln',
    short: 'Kaminofen einbauen',
    description: 'Ein Holz- oder Pelletofen in Ihrem Haus in der Axarquía? Welchen Ofen Sie wählen, wie Sie Rauchrohr und Dachdurchführung einbauen, wo Sie Holz kaufen und was Sie regeln müssen.',
    lead: 'Winterabende in den Bergen der Axarquía sind kälter, als viele denken, und die meisten alten Häuser haben keine Heizung. Ein guter Ofen macht den Unterschied.',
    keyword: 'kaminofen spanien',
    dienst: 'renovatie',
    onderwerp: 'Ich möchte einen Kaminofen oder Pelletofen einbauen lassen.',
    answer: 'Einen <strong>Kaminofen</strong> oder <strong>Heizeinsatz</strong> bauen Sie selbst ein, wenn Sie ein <strong>doppelwandiges, isoliertes Rauchrohr</strong> verwenden, die Abstände des Herstellers einhalten und die Dachdurchführung gut abdichten. Bewahren Sie die Rechnungen auf und lassen Sie die Anlage prüfen: Ihre Versicherung kann danach fragen.',
    sections: [
      {
        id: 'auswahl',
        h: 'Welchen Ofen wählen Sie?',
        table: {
          head: ['Typ', 'Geeignet für'],
          rows: [
            ['Kaminofen (<em>estufa de leña</em>)', 'Wohnzimmer, Haus ohne zuverlässigen Strom, die Atmosphäre echten Feuers'],
            ['Heizeinsatz (<em>insert</em> oder <em>cassette</em>)', 'Ein vorhandener offener Kamin, der vor allem den Himmel heizt'],
            ['Pelletofen (<em>estufa de pellets</em>)', 'Wer es bequem mag: Thermostat, Zeitschaltung, per Fernbedienung zu starten'],
          ],
        },
        after: '<p>Ein offener Kamin heizt vor allem den Schornstein: Bis zu 80 % der Wärme gehen verloren. Ein Heizeinsatz im selben Kamin gibt mit demselben Holz drei- bis viermal so viel Wärme. Ein Pelletofen braucht Strom und funktioniert bei einem Stromausfall nicht.</p>',
      },
      {
        id: 'rauchrohr',
        h: 'Das Rauchrohr',
        html: `<ul>
<li>Verwenden Sie im Raum einwandiges Rohr und ab der Decke, durch das Dach und draußen <strong>doppelwandiges, isoliertes Edelstahlrohr</strong> (<em>tubo de doble pared</em>).</li>
<li>Halten Sie den Abstand zu Holz, Balken und Schilf (<em>cañizo</em>) ein, den der Hersteller vorschreibt. An Decke und Dach verwenden Sie eine Durchführungsplatte.</li>
<li>Lassen Sie das Rohr mindestens einen Meter über das Dach ragen, und über den First, wenn es nahe daran steht. Ein zu kurzes Rohr ist der Hauptgrund, warum ein Ofen schlecht zieht.</li>
<li>Verwenden Sie so wenige Bögen wie möglich, nie mehr als zwei.</li>
<li>Nutzen Sie einen vorhandenen Schornstein, lassen Sie ihn zuerst kehren und prüfen. Oft ist ein Edelstahl-Innenrohr nötig.</li>
</ul>`,
      },
      {
        id: 'schritte',
        h: 'Schritt für Schritt',
        html: `<ol>
<li>Wählen Sie den Platz: In der Mitte des Hauses verteilt sich die Wärme am besten, und das Rohr muss gerade nach oben gehen können.</li>
<li>Legen Sie eine nicht brennbare Bodenplatte aus Stein, Fliese oder Stahl unter und vor den Ofen.</li>
<li>Machen Sie das Loch in Decke und Dach, mit dem Abstand zu Holz, den die Anleitung nennt.</li>
<li>Bauen Sie das Rohr von unten nach oben ein, mit den Verbindungen so, dass Kondensat nach innen läuft.</li>
<li>Dichten Sie die Dachdurchführung mit einer Bleischürze oder flexiblen Manschette und Dichtstoff ab und legen Sie die Ziegel sauber darum.</li>
<li>Sorgen Sie für Luftzufuhr im Raum, besonders in einem Haus mit neuen Fenstern.</li>
<li>Hängen Sie einen Kohlenmonoxidmelder auf und heizen Sie den Ofen beim ersten Mal ruhig ein.</li>
</ol>`,
      },
      {
        id: 'holz',
        h: 'Wo kaufen Sie Ofen und Holz?',
        html: '<p>Öfen und Rauchrohre finden Sie in den Baumärkten in Málaga und bei Ofengeschäften in der Region, die auch das Rohr nach Maß liefern. Holz kaufen Sie bei örtlichen Holzhändlern (<em>venta de leña</em>): Oliven- und Mandelholz brennen lange und heiß. Kaufen Sie es im Frühjahr, dann ist es im Winter trocken. Pellets gibt es sackweise oder auf Paletten in Baumärkten, landwirtschaftlichen Genossenschaften und an manchen Tankstellen.</p>',
      },
      {
        id: 'regeln',
        h: 'Genehmigung, Versicherung und Wartung',
        html: `<ul>
<li>Ein Ofen mit Rohr durch das Dach gilt in den meisten Gemeinden als kleine Bauarbeit, mit einer Anzeige (<em>declaración responsable</em>). In einer Wohnung brauchen Sie auch die Zustimmung der Eigentümergemeinschaft (<em>comunidad</em>) für das Rohr an der Fassade oder durch das Dach.</li>
<li>Melden Sie den Ofen Ihrer Versicherung. Nach einem Brand fragt sie oft nach Rechnungen und danach, wer die Anlage eingebaut hat.</li>
<li>Lassen Sie das Rohr jedes Jahr vor der Heizsaison kehren.</li>
</ul>`,
      },
    ],
    faq: [
      { q: 'Reicht ein Kaminofen, um mein Haus zu heizen?', a: 'Für das Wohnzimmer und die Räume drumherum ja. Ein Haus mit mehreren Etagen oder getrennten Zimmern wird damit nicht ganz warm. Viele Eigentümer kombinieren den Ofen mit einer Klimaanlage mit Wärmepumpe für die Schlafzimmer.' },
      { q: 'Darf ich im Sommer heizen?', a: 'Drinnen ja. Aber Feuer im Freien und das Verbrennen von Gartenabfällen ist in Andalusien von Juni bis Mitte Oktober in und nahe dem Wald verboten. Der Ofen selbst fällt nicht darunter, aber achten Sie bei Trockenheit auf Funkenflug aus dem Schornstein.' },
      { q: 'Warum qualmt mein Ofen zurück?', a: 'Meist ist das Rohr zu kurz, hat zu viele Bögen, oder es kommt zu wenig Luft in den Raum. Auch nasses Holz und ein verschmutztes Rohr verursachen Rauch. Beginnen Sie mit trockenem Holz und einem gekippten Fenster.' },
    ],
    links: [
      { href: '/de/renovierung/', label: 'Renovierung und Umbau' },
      { href: '/de/kosten/klimaanlage-und-waermepumpe/', label: 'Was kosten Klimaanlage oder Wärmepumpe?' },
      { href: '/de/instandhaltung/', label: 'Instandhaltung und Reparaturen' },
    ],
    related: ['diy:ramen', 'diy:dak', 'costs:airco'],
    sources: [
      { name: 'Código Técnico de la Edificación (CTE), DB HS 3 Raumluftqualität', url: 'https://www.codigotecnico.org/' },
      { name: 'Junta de Andalucía, Plan INFOCA: Brandschutz und Sperrzeit', url: 'https://www.juntadeandalucia.es/medioambiente/portal/areas-tematicas/incendios-forestales' },
    ],
    ctaTitle: 'Ofen lieber einbauen lassen?',
    ctaText: 'Möchten Sie einen Ofen einbauen lassen? Wir kümmern uns um Ofen, Rauchrohr und eine sichere Installation.',
    minutes: 6,
    published: '2026-11-05',
  },
  {
    key: 'witten',
    slug: 'haus-kalken',
    title: 'Ihr Haus mit Kalk weißen: so macht man es in Andalusien',
    seoTitle: 'Fassade kalken in Spanien: Material, Schritte und Vorschriften',
    short: 'Mit Kalk weißen',
    description: 'Ihre Fassade weißen wie in den weißen Dörfern der Axarquía? Kalk oder Fassadenfarbe, wie Sie ihn auftragen, was die Gemeinde vorschreibt und wie Sie Feuchtigkeit vorbeugen.',
    lead: 'Die weißen Dörfer verdanken ihre Farbe dem Kalk. Kalken (<em>encalar</em>) ist eine der einfachsten Arbeiten zum Selbermachen, und es hält alte Mauern gesund.',
    keyword: 'fassade kalken',
    dienst: 'onderhoud',
    onderwerp: 'Ich möchte meine Fassade kalken oder streichen lassen.',
    answer: 'Für alte Mauern aus Stein und Kalkmörtel wählen Sie <strong>Kalk</strong> (<em>cal</em>): Er atmet, sodass Feuchtigkeit entweichen kann. Fassadenfarbe schließt Feuchtigkeit ein und blättert dann ab. Sie tragen drei oder vier <strong>dünne Schichten</strong> auf eine feuchte Wand auf, nicht in der prallen Sonne. Kalk ist außerdem die günstigste Lösung.',
    sections: [
      {
        id: 'auswahl',
        h: 'Kalk oder Fassadenfarbe?',
        table: {
          head: ['', 'Kalk (<em>cal</em>)', 'Fassadenfarbe (<em>pintura plástica</em> oder <em>elástica</em>)'],
          rows: [
            ['Geeignet für', 'Alte Mauern aus Stein, Lehm und Kalkmörtel', 'Neue Mauern aus Ziegel und Zement'],
            ['Feuchtigkeit', 'Atmet: Feuchtigkeit kann entweichen', 'Dichtet ab: Feuchtigkeit bleibt hinter der Farbe'],
            ['Haltbarkeit', 'Alle ein bis drei Jahre eine neue Schicht', 'Fünf bis zehn Jahre'],
          ],
        },
        after: '<p>Ist auf einer alten Mauer schon Fassadenfarbe, die abblättert, entfernen Sie so viel wie möglich, bevor Sie kalken. Kalk haftet schlecht auf Farbe.</p>',
      },
      {
        id: 'schritte',
        h: 'Schritt für Schritt',
        html: `<ol>
<li>Bürsten Sie losen Kalk, Schmutz und Moos mit einer Drahtbürste von der Wand.</li>
<li>Reparieren Sie Risse und Löcher mit Kalkmörtel, nicht mit Zement.</li>
<li>Machen Sie die Wand mit einer Sprühflasche oder dem Gartenschlauch nass. Auf einer trockenen Wand trocknet der Kalk zu schnell, und Sie bekommen Streifen und feine Risse.</li>
<li>Rühren Sie den Sumpfkalk (<em>cal en pasta</em>) mit Wasser an, bis er so dünn ist wie Vollmilch.</li>
<li>Tragen Sie eine dünne Schicht mit einem breiten Pinsel (<em>brocha</em>) oder einer Rolle über Kreuz auf.</li>
<li>Lassen Sie jede Schicht einen Tag trocknen und befeuchten Sie die Wand vor der nächsten erneut. Nach drei oder vier Schichten ist die Wand gleichmäßig weiß.</li>
</ol>
<p>Arbeiten Sie im Frühjahr oder Herbst, oder frühmorgens im Schatten. In der prallen Sonne und bei starkem Wind trocknet Kalk zu schnell und kreidet ab.</p>`,
      },
      {
        id: 'sicher',
        h: 'Sicher arbeiten mit Kalk',
        html: '<p>Kalk ist ätzend. Tragen Sie Schutzbrille, Handschuhe und lange Ärmel, und spülen Sie Spritzer auf der Haut oder in den Augen sofort mit viel Wasser aus. Decken Sie Fenster, Türen und Pflanzen ab. Verwenden Sie gelöschten Kalk (<em>cal apagada</em>), keinen Branntkalk (<em>cal viva</em>): Der wird heiß, wenn Sie Wasser zugeben.</p>',
      },
      {
        id: 'kaufen',
        h: 'Wo kaufen Sie Kalk?',
        html: '<p>Sumpfkalk und Kalkpulver gibt es in jedem Baustoffhandel (<em>almacén de materiales</em>) und Eisenwarenladen (<em>ferretería</em>) in der Axarquía und in den Baumärkten in Málaga. Pinsel und Verlängerungsstangen bekommen Sie dort auch. Für Fassaden am Meer gibt es Kalk mit Zusätzen, der Salz und Regen besser standhält.</p>',
      },
      {
        id: 'vorschriften',
        h: 'Was schreibt die Gemeinde vor?',
        html: '<p>In vielen Dörfern der Axarquía ist Weiß Pflicht, manchmal auch die Farbe von Türen, Fenstern und Einfassungen. Eine Fassade in derselben Farbe zu kalken gilt meist als kleine Bauarbeit. Stellen Sie Gerüst, Leiter oder Container auf die Straße, brauchen Sie eine Genehmigung für die Nutzung der öffentlichen Straße. Fragen Sie beides beim Ayuntamiento nach.</p>',
      },
      {
        id: 'fachmann',
        h: 'Wann ist ein Fachmann besser?',
        html: `<ul>
<li>Die Wand hat Feuchtigkeitsflecken, die nach dem Kalken immer wiederkommen: Suchen Sie zuerst die Ursache, siehe <a href="/de/probleme/feuchtigkeit-und-schimmel/">Feuchtigkeit und Schimmel</a>.</li>
<li>Risse laufen durch die Wand und werden breiter: siehe <a href="/de/probleme/risse-in-waenden/">Risse in Wänden</a>.</li>
<li>Die Fassade ist hoch und Sie brauchen ein Gerüst.</li>
</ul>`,
      },
    ],
    faq: [
      { q: 'Kann ich Kalk auch innen verwenden?', a: 'Ja. Kalk innen wirkt gegen Schimmel und passt gut zu alten Mauern. Auf Wänden, die früher mit Dispersionsfarbe gestrichen wurden, haftet er allerdings schlecht.' },
      { q: 'Wie oft muss ich kalken?', a: 'Eine Fassade in Sonne und Regen alle ein bis drei Jahre. Viele Eigentümer in den Dörfern kalken jedes Frühjahr, vor dem Sommer und den Fiestas.' },
      { q: 'Darf ich mein Haus in einer anderen Farbe streichen?', a: 'In den historischen Ortskernen meist nicht. Außerhalb gibt es oft mehr Freiheit, aber auch dann hat die Gemeinde manchmal Vorgaben. Fragen Sie vorher nach.' },
    ],
    links: [
      { href: '/de/probleme/feuchtigkeit-und-schimmel/', label: 'Feuchtigkeit und Schimmel im Haus' },
      { href: '/de/probleme/risse-in-waenden/', label: 'Risse in Wänden' },
      { href: '/de/instandhaltung/', label: 'Instandhaltung und Reparaturen' },
    ],
    related: ['problems:vocht', 'problems:scheuren', 'diy:dak'],
    sources: [
      { name: 'Código Técnico de la Edificación (CTE), DB HS 1 Feuchteschutz', url: 'https://www.codigotecnico.org/' },
    ],
    ctaTitle: 'Fassade lieber kalken lassen?',
    ctaText: 'Möchten Sie die Fassade ausbessern und kalken lassen? Wir machen das für Sie, auch wenn sie hoch ist.',
    minutes: 5,
    published: '2026-11-05',
  },
  {
    key: 'watertank',
    slug: 'wassertank-einbauen-und-anschliessen',
    title: 'Einen Wassertank auf Ihrer Finca einbauen und anschließen',
    seoTitle: 'Wassertank einbauen in Spanien: Anschluss, Wasservertrag und Trinkwasser',
    short: 'Wassertank einbauen',
    description: 'Ein Wassertank (depósito oder aljibe) an Ihrer Finca in der Axarquía? Woher Ihr Wasser kommt, worauf Sie bei einem Wasservertrag achten, wie Sie den Tank einbauen und anschließen und wie Sie Trinkwasser daraus machen.',
    lead: 'Viele Häuser außerhalb der Dörfer in der Axarquía hängen nicht am Wassernetz. Sie bekommen Wasser von einer Comunidad de regantes oder einem Tankwagen oder haben einen eigenen Brunnen. Ein eigener Wassertank ist dann das Herz des Hauses.',
    keyword: 'wassertank finca spanien',
    dienst: 'onderhoud',
    onderwerp: 'Ich möchte einen Wassertank einbauen und anschließen lassen.',
    answer: 'Ein <strong>Wassertank</strong> (<em>depósito</em> oder <em>aljibe</em>) fängt das Wasser auf, das Sie bekommen, und eine <strong>Druckpumpe</strong> bringt es zu den Wasserhähnen. Außerhalb des Dorfes schließen Sie oft einen <strong>Vertrag über eine feste Wassermenge pro Woche</strong> ab, zum Beispiel mit der Comunidad de regantes. Ein <strong>Schwimmerventil</strong> stoppt den Zulauf, wenn der Tank voll ist. Haben Sie einen <strong>eigenen Brunnen</strong>, brauchen Sie keinen solchen Vertrag. Wasser, das nicht aus dem Netz kommt, machen Sie mit <strong>Filtern und einer UV-Lampe</strong> trinkbar.',
    sections: [
      {
        id: 'quellen',
        h: 'Woher kommt Ihr Wasser?',
        table: {
          head: ['Quelle', 'So funktioniert es', 'Achtung'],
          rows: [
            ['Öffentliches Wassernetz', 'Anschluss mit Zähler; der Tank ist dann nur eine Reserve', 'Nur in und um die Dörfer und in Wohngebieten'],
            ['Comunidad de regantes (Bewässerungswasser)', 'Sie schließen einen Vertrag über eine Menge pro Woche ab; das Wasser kommt zu festen Zeiten (<em>turno</em>) über einen Zähler in Ihren Tank', 'Für die Landwirtschaft gedacht, kein Trinkwasser; in trockenen Jahren kann die Menge sinken'],
            ['Tankwagen (<em>camión cisterna</em>)', 'Sie bestellen eine Ladung Wasser, wenn der Tank leer wird', 'Der Wagen muss bis zum Tank kommen'],
            ['Eigener Brunnen oder Quelle (<em>pozo</em>)', 'Eine Pumpe fördert das Wasser und füllt den Tank', 'Kein Vertrag nötig, aber eine Registrierung oder Genehmigung; lassen Sie das Wasser testen'],
            ['Regenwasser', 'Aufgefangen vom Dach in einer alten oder neuen <em>aljibe</em>', 'Gute Ergänzung, im Sommer nicht genug'],
          ],
        },
      },
      {
        id: 'vertrag',
        h: 'Worauf achten Sie bei einem Wasservertrag?',
        html: `<p>Wie es genau läuft, ist je nach Comunidad und Gebiet verschieden. Manchmal ist es viel Wasser, manchmal wenig. Sorgen Sie vorher für Klarheit in diesen Punkten:</p>
<ul>
<li><strong>Wie viel Wasser</strong> Sie pro Woche bekommen und ob Sie später mehr abnehmen können. Rechnen Sie für einen Haushalt mit 100 bis 150 Litern pro Person und Tag, dazu Garten und gegebenenfalls Pool.</li>
<li><strong>Wann</strong> das Wasser kommt: an einem festen Tag und zu einer festen Zeit (<em>turno</em>) oder durchgehend.</li>
<li><strong>Was bei Dürre passiert</strong>: 2023 und 2024 bekamen viele Nutzer in der Axarquía weniger Wasser. Fragen Sie, wie das geregelt ist.</li>
<li><strong>Wer die Leitung</strong> bis zu Ihrem Tank unterhält und wo der Zähler (<em>contador</em>) steht.</li>
<li><strong>Beim Kauf einer Finca</strong>: Ist das Wasserrecht an das Grundstück gebunden, und wird es auf Ihren Namen umgeschrieben? Fragen Sie bei der Comunidad und Ihrem Anwalt nach. Lesen Sie auch den Ratgeber <a href="/de/ratgeber/finca-kaufen-spanien/">Finca kaufen in Spanien</a>.</li>
</ul>`,
      },
      {
        id: 'stopp',
        h: 'Ein Stopp am Tank',
        html: `<p>Ohne Stopp läuft der Tank bei jeder Lieferung über, oder es läuft Wasser weiter, das Sie bezahlen. Deshalb bauen Sie einen Stopp ein:</p>
<ul>
<li>Ein <strong>Schwimmerventil</strong> (<em>válvula de boya</em> oder <em>flotador</em>) schließt den Zulauf, sobald der Tank voll ist.</li>
<li>Ein <strong>Absperrhahn</strong> am Zulauf, damit Sie den Tank absperren können, wenn Sie weg sind oder ihn reinigen.</li>
<li>Ein <strong>Überlauf</strong> mit Ableitung weg vom Haus, falls der Schwimmer einmal hängen bleibt.</li>
</ul>`,
      },
      {
        id: 'auswahl',
        h: 'Welchen Tank wählen Sie?',
        table: {
          head: ['Typ', 'Geeignet für', 'Achtung'],
          rows: [
            ['Kunststofftank (Polyethylen), oberirdisch', 'Schnell aufgestellt, auch an schwer erreichbaren Stellen', 'Wählen Sie einen dunklen, lichtundurchlässigen Tank gegen Algen, für Trinkwasser geeignet (<em>apto uso alimentario</em>)'],
            ['Kunststofftank, eingegraben', 'Unsichtbar, das Wasser bleibt kühl', 'Erdarbeiten; der Tank muss zum Eingraben geeignet sein'],
            ['Gemauerte oder betonierte <em>aljibe</em>', 'Großer Vorrat, traditionell auf Fincas', 'Oft schon vorhanden; lassen Sie eine alte Aljibe prüfen und neu abdichten'],
          ],
        },
        after: '<p>Wählen Sie die Größe nach Ihrem Verbrauch zwischen zwei Lieferungen, plus eine Reserve für eine Woche ohne Wasser. Für ein Paar ohne Pool reichen oft ein paar tausend Liter; mit Garten, Gästen oder Vermietung brauchen Sie schnell zehn- bis zwanzigtausend Liter.</p>',
      },
      {
        id: 'schritte',
        h: 'Einbauen und anschließen, Schritt für Schritt',
        html: `<ol>
<li><strong>Standort.</strong> Höher als das Haus gibt von selbst etwas Druck; tiefer geht auch, mit einer Druckpumpe. Sorgen Sie dafür, dass Lieferant oder Tankwagen hinkommen.</li>
<li><strong>Untergrund.</strong> Eine ebene, bewehrte Betonplatte. Je 1.000 Liter wiegen 1.000 Kilo.</li>
<li><strong>Zulauf.</strong> Schließen Sie die Leitung vom Zähler mit Absperrhahn und Schwimmerventil an den Tank an.</li>
<li><strong>Überlauf und Entlüftung.</strong> Ein Überlauf mit Ableitung und eine Entlüftung mit Insektengitter.</li>
<li><strong>Ablauf.</strong> Ein Absperrhahn, ein Rückschlagventil und eine Saugleitung zur Pumpe.</li>
<li><strong>Druckpumpe.</strong> Eine Pumpe mit Druckkessel oder mit Frequenzregelung, in einem trockenen, schattigen Häuschen. Den Strom lassen Sie von einem zugelassenen Installateur anschließen.</li>
<li><strong>Filter.</strong> Ein Sedimentfilter vor dem Haus und für Trinkwasser ein Aktivkohlefilter und eine UV-Lampe.</li>
<li><strong>Leitungen.</strong> Graben Sie sie ein oder schützen Sie sie vor der Sonne; Kunststoffleitungen werden in der Sonne spröde, und das Wasser wird warm.</li>
</ol>`,
      },
      {
        id: 'trinkwasser',
        h: 'Trinkwasser aus dem Tank',
        html: '<p>Wasser von einer Comunidad de regantes, aus einem Brunnen oder vom Regen ist kein Trinkwasser, solange es nicht aufbereitet ist. Welche Filter Sie brauchen, hängt von der Quelle ab; meist sind es ein Sedimentfilter, ein Aktivkohlefilter und eine UV-Lampe. Lassen Sie es regelmäßig testen. Reinigen Sie den Tank jedes Jahr und halten Sie ihn geschlossen und dunkel: Stehendes, warmes Wasser birgt ein Risiko für <a href="/de/probleme/legionellen/">Legionellen</a>.</p>',
      },
      {
        id: 'genehmigung',
        h: 'Genehmigung',
        html: '<p>Einen Kunststofftank aufzustellen gilt meist als kleine Bauarbeit, mit einer Anzeige (<em>declaración responsable</em>) bei der Gemeinde. Eine große gemauerte oder betonierte Aljibe kann eine Baugenehmigung brauchen, besonders auf ländlichem Boden. Einen eigenen Brunnen zu bohren oder zu nutzen, müssen Sie bei der Wasserbehörde der Junta de Andalucía anzeigen oder genehmigen lassen. Fragen Sie vorher nach.</p>',
      },
    ],
    faq: [
      { q: 'Wie viel Wasser brauche ich pro Woche?', a: 'Rechnen Sie im Haus mit 100 bis 150 Litern pro Person und Tag, für zwei Personen also etwa 1.500 bis 2.000 Liter pro Woche. Garten, Gäste oder ein Pool können das vervielfachen, vor allem im Sommer.' },
      { q: 'Kann ich das Wasser der Regantes trinken?', a: 'Nicht ohne Weiteres. Es ist für die Landwirtschaft gedacht und wird nicht als Trinkwasser kontrolliert. Mit Filtern und einer UV-Lampe können Sie es trinkbar machen; lassen Sie es regelmäßig testen.' },
      { q: 'Brauche ich einen Vertrag, wenn ich einen eigenen Brunnen habe?', a: 'Nein, dann kommt das Wasser aus Ihrer eigenen Quelle. Viele Eigentümer haben trotzdem einen Tank als Puffer, damit die Pumpe nicht ständig anspringt und Sie einen Vorrat haben, wenn der Brunnen im Sommer weniger gibt.' },
    ],
    links: [
      { href: '/de/ratgeber/wasserfilter-spanien/', label: 'Ratgeber: Wasserfilter für Tank und Brunnen' },
      { href: '/de/ratgeber/wasserschaden-spanien/', label: 'Ratgeber: Wasserschaden' },
      { href: '/de/ratgeber/finca-kaufen-spanien/', label: 'Ratgeber: Finca kaufen in Spanien' },
      { href: '/de/probleme/legionellen/', label: 'Legionellen in Tank und Leitungen' },
      { href: '/de/hausbetreuung/', label: 'Hausbetreuung: Tank und Pumpe im Blick, während Sie weg sind' },
    ],
    related: ['costs:water', 'problems:legionella', 'diy:zwembad'],
    sources: [
      { name: 'Real Decreto Legislativo 1/2001, Ley de Aguas (u. a. eigene Brunnen)', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2001-14276' },
      { name: 'Real Decreto 3/2023 über die Trinkwasserqualität', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2023-628' },
    ],
    ctaTitle: 'Wassertank einbauen lassen?',
    ctaText: 'Wir bauen den Tank für Sie ein und schließen ihn an, mit Schwimmer, Pumpe und Filtern, und denken beim Wasseranschluss mit.',
    minutes: 7,
    published: '2026-11-05',
  },
];
