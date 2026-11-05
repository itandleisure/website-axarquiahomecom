import type { Topic } from './types';

// Kostenseiten auf Deutsch. Beträge: Richtwerte Axarquía, inkl. Material und Arbeit, ohne MwSt.
export const costsDe: Topic[] = [
  {
    key: 'badkamer',
    slug: 'bad-renovieren',
    title: 'Was kostet eine Badsanierung in Spanien?',
    seoTitle: 'Bad renovieren in Spanien: Kosten in der Axarquía (2026)',
    short: 'Bad',
    description: 'Was kostet ein neues Bad in der Axarquía? Preise für eine Auffrischung, eine Komplettsanierung und eine bodengleiche Dusche, dazu was den Preis bestimmt.',
    lead: 'Ein neues Bad ist der Umbau, den wir in der Axarquía am häufigsten machen. Hier sehen Sie, was es kostet, von neuen Sanitärobjekten bis zum kompletten Bad mit bodengleicher Dusche.',
    keyword: 'bad renovieren spanien kosten',
    dienst: 'badkamer-keuken',
    onderwerp: 'Ich hätte gern ein Angebot für die Renovierung meines Badezimmers.',
    answer: 'Ein komplettes Bad mit 4 bis 6 m² kostet in der Axarquía meist <strong>6.000 bis 12.000 €</strong> ohne MwSt., inklusive Abbruch, Leitungen, Fliesen und Sanitär. Nur Sanitärobjekte und Armaturen tauschen gibt es ab etwa 2.500 €. Ein großes Bad mit Maßanfertigungen kostet bis zu 18.000 – 25.000 €.',
    sections: [
      {
        id: 'preise',
        h: 'Preise nach Art der Badrenovierung',
        html: '<p>Richtwerte für 2026, inklusive Material und Arbeit, ohne Mehrwertsteuer.</p>',
        table: {
          head: ['Arbeit', 'Was dazugehört', 'Richtwert'],
          rows: [
            ['Auffrischen', 'Neues WC, Waschbecken und Armaturen, Silikonfugen, Anstrich. Fliesen bleiben.', '2.500 – 5.000 €'],
            ['Badewanne raus, bodengleiche Dusche rein', 'Wanne entfernen, ebenerdiger Duschboden, Glaswand, Fliesen im Duschbereich', '3.000 – 6.000 €'],
            ['Komplettsanierung, kleines Bad (4–6 m²)', 'Alles raus, neue Leitungen und Abflüsse, Boden- und Wandfliesen, Sanitär Mittelklasse', '6.000 – 12.000 €'],
            ['Komplettsanierung, großes Bad', 'Mehr Fläche, Doppelwaschtisch, Unterputzarmaturen, bessere Fliesen', '12.000 – 18.000 €'],
            ['Luxus oder Maßanfertigung', 'Naturstein oder Mikrozement, Maßmöbel, Fußbodenheizung', '18.000 – 25.000 €+'],
          ],
          note: 'Ein zusätzliches Bad (neue Abflüsse, eventuell Genehmigung) beginnt meist bei rund 10.000 €.',
        },
      },
      {
        id: 'faktoren',
        h: 'Was bestimmt den Preis?',
        html: `<ul>
<li><strong>Leitungen und Abflüsse.</strong> In älteren Dorfhäusern liegen oft noch Blei- oder Eisenrohre und enge Abflüsse. Bei einer Komplettsanierung tauscht man sie gleich mit aus. Das kostet mehr, verhindert aber spätere Lecks.</li>
<li><strong>Feuchtigkeit hinter den Fliesen.</strong> Beim Abbruch kommt regelmäßig Feuchtigkeit oder ein morscher Unterboden zum Vorschein. Planen Sie 10 % Puffer ein.</li>
<li><strong>Fliesen und Sanitär.</strong> Spanische Fliesen und Sanitärobjekte sind gut und günstig. Großformate, Mikrozement oder deutsche Marken kosten mehr, auch bei der Arbeit.</li>
<li><strong>Zugang.</strong> In einer engen Gasse in Frigiliana oder Cómpeta wird der gesamte Schutt von Hand oder mit einem kleinen Dumper abtransportiert. Das summiert sich.</li>
<li><strong>Warmwasser.</strong> Ein alter Elektroboiler lässt sich gut gleich ersetzen, zum Beispiel durch einen Wärmepumpenboiler.</li>
</ul>`,
      },
      {
        id: 'beispiel',
        h: 'Rechenbeispiel: Bad in einem Dorfhaus',
        html: '<p>Ein 5 m² großes Bad im ersten Stock eines Dorfhauses in Torrox. Die Wanne weicht einer bodengleichen Dusche von 90 × 120 cm, Leitungen und Abflüsse werden erneuert, Boden und Wände mit spanischen Fliesen belegt, dazu neues WC und Waschtischmöbel.</p>',
        table: {
          head: ['Posten', 'Richtwert'],
          rows: [
            ['Abbruch und Schuttabfuhr', '800 – 1.200 €'],
            ['Leitungen, Abflüsse und Elektrik', '1.500 – 2.500 €'],
            ['Fliesen Boden und Wände (± 25 m²)', '2.000 – 3.000 €'],
            ['Sanitär, Armaturen, Duschwand, Möbel', '2.000 – 3.500 €'],
            ['Abschlussarbeiten, Anstrich, Fugen', '400 – 800 €'],
            ['<strong>Gesamt</strong>', '<strong>6.700 – 11.000 €</strong>'],
          ],
        },
        after: '<p>Dauer: zwei bis drei Wochen. Für eine Badsanierung ohne Eingriff in die Statik genügt in den meisten Gemeinden eine Anzeige (<em>declaración responsable</em>).</p>',
      },
      {
        id: 'mwst',
        h: 'Mehrwertsteuer, Genehmigung und Bezahlung',
        html: '<p>Für Renovierungsarbeiten an einer privat genutzten Wohnung gilt unter Bedingungen der ermäßigte Mehrwertsteuersatz von 10 % statt 21 %, wenn das Material nicht mehr als 40 % der Gesamtsumme ausmacht. Lassen Sie sich ein Angebot nach Posten geben und zahlen Sie in Raten nach Baufortschritt. Mehr dazu in unserem Ratgeber <a href="/de/ratgeber/renovierungskosten-spanien/">Renovierungskosten in Spanien</a>.</p>',
      },
    ],
    faq: [
      { q: 'Wie lange dauert ein neues Bad?', a: 'Ein komplettes Bad mittlerer Größe dauert meist zwei bis drei Wochen. Bei Maßanfertigungen oder wenn Fliesen oder Möbel bestellt werden müssen, etwas länger.' },
      { q: 'Geht das, während ich in Deutschland bin?', a: 'Ja. Sie wählen Fliesen und Sanitär vorab anhand von Fotos oder bei einem Besuch im Ausstellungsraum aus und erhalten während der Arbeiten wöchentlich Fotos.' },
      { q: 'Ist eine bodengleiche Dusche teurer als eine Wanne?', a: 'Nicht unbedingt. Eine ebenerdige Dusche braucht aber ein sauberes Gefälle und eine Abdichtung unter den Fliesen, und diese Arbeit muss gut gemacht sein. Dadurch ist sie etwas teurer als eine Standard-Duschwanne.' },
    ],
    links: [
      { href: '/de/renovierung/', label: 'Renovierung und Umbau' },
      { href: '/de/ratgeber/renovierungskosten-spanien/', label: 'Ratgeber: Was kostet es, ein Haus in Spanien zu renovieren?' },
      { href: '/de/probleme/feuchtigkeit-und-schimmel/', label: 'Feuchtigkeit und Schimmel im Haus' },
    ],
    related: ['costs:keuken', 'costs:dak', 'problems:vocht'],
    sources: [
      { name: 'Habitissimo, Preisratgeber Badrenovierung (reformar baño)', url: 'https://www.habitissimo.es/presupuestos/reformar-bano' },
      { name: 'Cronoshare, Preise Badsanierung in Vélez-Málaga', url: 'https://www.cronoshare.com/servicios/presupuesto-reforma-integral-bano/malaga/velez-malaga' },
      { name: 'El Español, „Ein Bad zu renovieren kostet jetzt über 7.000 Euro“ (Mai 2026)', url: 'https://www.elespanol.com/mujer/interiorismo/20260514/expertos-coinciden-reformar-bano-costaba-euros-ahora-supera-espana/1003744232504_0.amp.html' },
      { name: 'Ley 37/1992 del IVA, Art. 91: ermäßigter Steuersatz für Renovierung', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1992-28740' },
    ],
    ctaTitle: 'Ein Preis für Ihr Bad?',
    ctaText: 'Schicken Sie ein paar Fotos und die Maße. Sie erhalten ein Angebot nach Posten.',
    minutes: 5,
    published: '2026-11-05',
  },
  {
    key: 'keuken',
    slug: 'kueche-renovieren',
    title: 'Was kostet eine neue Küche in Spanien?',
    seoTitle: 'Neue Küche in Spanien: Kosten in der Axarquía (2026)',
    short: 'Küche',
    description: 'Was kostet eine neue Küche in der Axarquía? Preise für neue Fronten, eine komplette Küche und eine Maßküche mit Kochinsel, dazu Arbeitsplatten, Geräte und Installationen.',
    lead: 'Viele Häuser in der Axarquía haben noch eine Küche aus den Neunzigern, mit Fliesen bis unter die Decke. Eine neue Küche verändert das ganze Haus. So sieht die Rechnung aus.',
    keyword: 'neue küche spanien kosten',
    dienst: 'badkamer-keuken',
    onderwerp: 'Ich hätte gern ein Angebot für eine neue Küche.',
    answer: 'Eine komplette neue Küche mit 8 bis 10 m² kostet in der Axarquía meist <strong>8.000 bis 15.000 €</strong> ohne MwSt., inklusive Abbruch, Installationen, Schränke, Arbeitsplatte und Fliesen. Geräte kommen oft hinzu. Nur Fronten und Arbeitsplatte tauschen gibt es ab etwa 3.000 €; eine Maßküche mit Kochinsel kostet bis zu 30.000 €.',
    sections: [
      {
        id: 'preise',
        h: 'Preise nach Art der Küchenrenovierung',
        table: {
          head: ['Arbeit', 'Was dazugehört', 'Richtwert'],
          rows: [
            ['Auffrischen', 'Neue Fronten, Griffe und Arbeitsplatte auf den vorhandenen Korpussen', '3.000 – 6.000 €'],
            ['Komplette Küche, Mittelklasse', 'Abbruch, neue Leitungen und Elektrik, Schränke, Arbeitsplatte, Wandfliesen', '8.000 – 15.000 €'],
            ['Größere Küche oder höhere Ausstattung', 'Mehr Schränke, Quarz- oder Keramikplatte, besseres Beschlagsystem', '15.000 – 22.000 €'],
            ['Maßküche mit Kochinsel', 'Insel mit Abfluss und Strom im Boden, offene Küche, Wand entfernt', '22.000 – 30.000 €+'],
            ['Geräte (separat)', 'Backofen, Kochfeld, Dunstabzug, Spülmaschine, Kühlschrank', '2.000 – 6.000 €'],
          ],
          note: 'Wird für eine offene Küche eine tragende Wand entfernt, braucht es eine Statikberechnung durch einen Architekten und meist eine Baugenehmigung.',
        },
      },
      {
        id: 'arbeitsplatten',
        h: 'Arbeitsplatten: was wählen die meisten?',
        table: {
          head: ['Arbeitsplatte', 'Pro laufendem Meter (montiert)'],
          rows: [
            ['Laminat', '100 – 200 €'],
            ['Granit (spanisch)', '200 – 400 €'],
            ['Quarzkomposit (z. B. Silestone)', '300 – 600 €'],
            ['Keramik (z. B. Dekton)', '400 – 800 €'],
          ],
        },
        after: '<p>Granit und Quarzkomposit kommen oft aus Spanien selbst (die Region Almería ist ein großes Zentrum für Naturstein) und sind deshalb hier relativ günstig.</p>',
      },
      {
        id: 'faktoren',
        h: 'Was bestimmt den Preis?',
        html: `<ul>
<li><strong>Grundriss.</strong> Bleiben Spüle und Kochfeld an derselben Stelle, spart das Installationsarbeit.</li>
<li><strong>Elektrik.</strong> Alte Küchen haben oft zu wenige Stromkreise für Induktion, Backofen und Spülmaschine gleichzeitig. Ein neuer Sicherungskasten oder eine höhere Anschlussleistung (<em>potencia contratada</em>) kann nötig sein.</li>
<li><strong>Abzug.</strong> Eine Dunstabzugshaube mit Abluft nach draußen ist besser als Umluft, braucht aber einen Durchbruch durch Wand oder Dach.</li>
<li><strong>Boden.</strong> Ein neuer Boden durchgehend bis ins Wohnzimmer sieht besser aus, ist aber mehr Arbeit.</li>
</ul>`,
      },
      {
        id: 'planung',
        h: 'Planung und Dauer',
        html: '<p>Rechnen Sie mit vier bis sechs Wochen Lieferzeit für Schränke und Arbeitsplatte (die Platte wird erst ausgemessen, wenn die Schränke stehen) und ein bis zwei Wochen Arbeit vor Ort. Während des Umbaus haben Sie keine Küche: Planen Sie ihn also am besten, wenn Sie nicht in Spanien sind.</p>',
      },
    ],
    faq: [
      { q: 'Kann ich eine Küche in Deutschland oder bei IKEA kaufen und montieren lassen?', a: 'Das geht. Sie zahlen dann nur Montage, Installationen und Abschlussarbeiten. Anschlüsse und Maße unterscheiden sich manchmal zwischen Deutschland und Spanien. Sprechen Sie es vorher an, dann berücksichtigen wir es.' },
      { q: 'Brauche ich eine Genehmigung für eine neue Küche?', a: 'Für den Austausch einer Küche ohne Eingriff in die Statik genügt meist eine Anzeige (declaración responsable) bei der Gemeinde. Wird eine tragende Wand entfernt, ist eine Genehmigung mit Projekt nötig.' },
      { q: 'Was kostet nur eine neue Arbeitsplatte?', a: 'Für eine durchschnittliche Küche mit 3 bis 4 Metern Arbeitsplatte rechnen Sie je nach Material mit 1.000 bis 2.500 € inklusive Montage und Ausschnitten.' },
    ],
    links: [
      { href: '/de/renovierung/', label: 'Renovierung und Umbau' },
      { href: '/de/kosten/aussenkueche/', label: 'Kosten einer Außenküche' },
      { href: '/de/ratgeber/renovierungskosten-spanien/', label: 'Ratgeber: Was kostet es, ein Haus in Spanien zu renovieren?' },
    ],
    related: ['costs:badkamer', 'costs:buitenkeuken', 'costs:airco'],
    sources: [
      { name: 'Habitissimo, Preisratgeber Küchenrenovierung (reformar cocina)', url: 'https://www.habitissimo.es/presupuestos/reformar-cocina' },
      { name: 'Cronoshare, was kostet eine Küchenrenovierung', url: 'https://www.cronoshare.com/blog/?p=1304' },
      { name: 'El Español, „Eine Küche zu renovieren kostet jetzt über 10.000 Euro“ (Juli 2026)', url: 'https://www.elespanol.com/mujer/interiorismo/20260723/arquitecto-reformar-cocina-costaba-euros-ahora-supera-espana/1003744328876_0.html' },
    ],
    ctaTitle: 'Eine neue Küche?',
    ctaText: 'Schicken Sie Fotos und die Maße Ihrer Küche. Sie erhalten einen Vorschlag und einen Preis nach Posten.',
    minutes: 5,
    published: '2026-11-05',
  },
  {
    key: 'zwembad',
    slug: 'pool-bauen',
    title: 'Was kostet es, einen Pool in Spanien zu bauen?',
    seoTitle: 'Pool bauen in Spanien: Kosten in der Axarquía (2026)',
    short: 'Pool',
    description: 'Was kostet ein Pool in der Axarquía? Preise für ein Fertigbecken, ein Betonbecken von 8 × 4 Metern und einen kompletten Pool mit Terrasse, dazu Genehmigung und laufende Kosten.',
    lead: 'Ein Pool gehört zum Haus in der Sonne, und er macht eine Immobilie besser vermiet- und verkaufbar. Aber am Hang in der Axarquía ist es mehr als ein Loch graben. Das kostet es.',
    keyword: 'pool bauen spanien kosten',
    dienst: 'zwembad',
    onderwerp: 'Ich hätte gern ein Angebot für einen neuen Pool.',
    answer: 'Ein Betonpool von 8 × 4 Metern mit Filteranlage kostet in der Axarquía meist <strong>20.000 bis 30.000 €</strong> ohne MwSt. Komplett mit Terrasse, Beleuchtung und Salzanlage rechnen Sie mit <strong>30.000 bis 50.000 €</strong>. Am Hang mit Stützmauern kommen oft 5.000 bis 20.000 € hinzu.',
    sections: [
      {
        id: 'preise',
        h: 'Preise nach Pooltyp',
        table: {
          head: ['Typ', 'Was dazugehört', 'Richtwert'],
          rows: [
            ['Fertigbecken aus Polyester (± 7 × 3,5 m)', 'Fertiges Becken, Aushub, Einbau, Filter', '15.000 – 25.000 €'],
            ['Betonbecken 8 × 4 m (Spritzbeton)', 'Aushub, Spritzbeton, Gresite-Mosaik, Filter und Pumpe', '20.000 – 30.000 €'],
            ['Kompletter Pool', 'Betonbecken plus Terrasse rundum, Beleuchtung, Salzelektrolyse, Treppe', '30.000 – 50.000 €'],
            ['Überlaufrinne oder Infinity-Kante', 'Zusätzlicher Ausgleichsbehälter, Technik und Ausführung', '+ 10.000 – 25.000 €'],
            ['Bestehenden Pool sanieren', 'Neues Gresite oder Beschichtung, neue Pumpe und Filter, Lecks abdichten', '5.000 – 15.000 €'],
          ],
          note: 'Aushub im Fels, Anlieferung über einen schmalen Bergweg oder Stützmauern am Hang können den Preis deutlich erhöhen.',
        },
      },
      {
        id: 'nebenkosten',
        h: 'Zusätzliche Kosten',
        table: {
          head: ['Posten', 'Richtwert'],
          rows: [
            ['Projekt durch Architekt oder technischen Ingenieur', '1.500 – 3.500 €'],
            ['Bausteuer (ICIO) und Genehmigung der Gemeinde', 'meist 2 % – 4 % der Bausumme'],
            ['Zaun oder Abdeckung (empfohlen bei Kindern oder Vermietung)', '1.500 – 5.000 €'],
            ['Wärmepumpe für die Poolheizung', '3.000 – 6.000 €'],
          ],
        },
      },
      {
        id: 'jaehrlich',
        h: 'Was kostet ein Pool pro Jahr?',
        html: '<p>Für ein Becken von 8 × 4 Metern rechnen Sie mit etwa <strong>1.200 bis 2.500 € pro Jahr</strong>: Pflege durch einen Poolservice (im Sommer wöchentlich, im Winter seltener), Chemikalien oder Salz, Strom für die Pumpe und Nachfüllwasser. Bei Dürre können Gemeinden das Befüllen von Pools einschränken; fragen Sie bei Ihrer Gemeinde nach. Wenn Sie nicht in Spanien sind, kombinieren Sie die Poolpflege mit der <a href="/de/hausbetreuung/">Hausbetreuung</a>.</p>',
      },
      {
        id: 'genehmigung',
        h: 'Genehmigung und Grundstück',
        html: '<p>Für einen neuen Pool brauchen Sie eine Baugenehmigung (<em>licencia de obra</em>) mit Projekt. Auf ländlichem Grund (<em>suelo no urbanizable</em>) gelten strengere Regeln, und bei einem Haus mit AFO-Status darf oft gar nicht angebaut werden. Lesen Sie zuerst unseren Ratgeber <a href="/de/ratgeber/afo-legalisierung-andalusien/">AFO und Legalisierung</a> und prüfen Sie, was Ihre Gemeinde verlangt, zum Beispiel die <a href="/de/orte/competa/baugenehmigung/">Baugenehmigung in Cómpeta</a> oder <a href="/de/orte/nerja/baugenehmigung/">in Nerja</a>.</p>',
      },
    ],
    faq: [
      { q: 'Wie lange dauert der Bau eines Pools?', a: 'Die Arbeiten selbst dauern vier bis acht Wochen. Die Genehmigung kann je nach Gemeinde einige Wochen bis einige Monate dauern. Wer im Sommer schwimmen will, beginnt im Herbst mit dem Antrag.' },
      { q: 'Fertigbecken oder Beton?', a: 'Ein Fertigbecken ist schneller und oft günstiger, aber Größe und Form sind festgelegt und das Becken muss über die Straße angeliefert werden. Bei einer Finca mit schmaler Zufahrt ist das manchmal unmöglich. Beton ist in der Form frei und passt überall hin.' },
      { q: 'Steigert ein Pool den Wert meines Hauses?', a: 'In der Axarquía suchen viele Käufer und Feriengäste ein Haus mit Pool. Für die Ferienvermietung ist er fast Pflicht. Er verbessert also vor allem die Verkäuflichkeit und die Mieteinnahmen.' },
    ],
    links: [
      { href: '/de/pool/', label: 'Poolbau und Poolpflege' },
      { href: '/de/probleme/legionellen/', label: 'Legionellen in Pool, Whirlpool und Leitungen' },
      { href: '/de/ratgeber/afo-legalisierung-andalusien/', label: 'Ratgeber: AFO-Status und Legalisierung' },
    ],
    related: ['costs:buitenkeuken', 'problems:legionella', 'costs:airco'],
    sources: [
      { name: 'Habitissimo, Preisratgeber Poolbau (construir piscina)', url: 'https://www.habitissimo.es/presupuestos/construir-piscina' },
      { name: 'Cronoshare, was kostet der Bau eines Pools', url: 'https://www.cronoshare.com/blog/construir-una-piscina/' },
      { name: 'Junta de Andalucía, Ley 7/2021 (LISTA) zu Raumordnung und Bauen', url: 'https://www.juntadeandalucia.es/boja/2021/233/1' },
    ],
    ctaTitle: 'Pläne für einen Pool?',
    ctaText: 'Schicken Sie Fotos der Stelle und erzählen Sie, was Sie sich vorstellen. Sie erhalten eine erste Preisindikation und Rat zur Genehmigung.',
    minutes: 6,
    published: '2026-11-05',
  },
  {
    key: 'airco',
    slug: 'klimaanlage-und-waermepumpe',
    title: 'Was kostet eine Klimaanlage oder Wärmepumpe in Spanien?',
    seoTitle: 'Klimaanlage oder Wärmepumpe in Spanien: Kosten (Axarquía, 2026)',
    short: 'Klimaanlage und Wärmepumpe',
    description: 'Was kostet eine Klimaanlage in der Axarquía? Preise für Split-Gerät, Multisplit und Kanalsystem sowie für eine Luft-Wasser-Wärmepumpe (Aerotermia) für Heizung und Warmwasser.',
    lead: 'Im Sommer kühlen, im Winter heizen. Denn auch in der Axarquía sind Häuser im Januar kalt. Moderne Klimageräte können beides. So sieht die Rechnung aus.',
    keyword: 'klimaanlage spanien kosten',
    dienst: 'anders',
    onderwerp: 'Ich hätte gern ein Angebot für eine Klimaanlage oder Wärmepumpe.',
    answer: 'Ein Split-Klimagerät (Kühlen und Heizen) für ein Schlaf- oder Wohnzimmer kostet montiert etwa <strong>900 bis 1.800 €</strong>. Drei Räume mit einem Multisplit: <strong>3.500 bis 6.000 €</strong>. Eine Luft-Wasser-Wärmepumpe (Aerotermia) für Heizung und Warmwasser kostet meist <strong>8.000 bis 15.000 €</strong>. Beträge ohne MwSt.',
    sections: [
      {
        id: 'preise',
        h: 'Preise nach System',
        table: {
          head: ['System', 'Geeignet für', 'Richtwert (montiert)'],
          rows: [
            ['Split-Gerät 2,5 – 3,5 kW', 'Ein Raum bis ± 30 m²', '900 – 1.800 €'],
            ['Multisplit, 1 Außen- und 3 Innengeräte', 'Wohnung oder kleines Haus', '3.500 – 6.000 €'],
            ['Kanalsystem (conductos)', 'Ganzes Haus, unsichtbar in abgehängter Decke', '6.000 – 12.000 €'],
            ['Luft-Wasser-Wärmepumpe (Aerotermia)', 'Heizung über Heizkörper oder Fußboden, plus Warmwasser', '8.000 – 15.000 €'],
            ['Aerotermia mit neuer Fußbodenheizung', 'Im Rahmen einer Kernsanierung', '12.000 – 20.000 €'],
            ['Wärmepumpenboiler (nur Warmwasser)', 'Ersatz für den Elektroboiler', '2.000 – 4.500 €'],
          ],
          note: 'Wartung: rechnen Sie mit 80 – 150 € pro Jahr und System für Filterreinigung und Kontrolle.',
        },
      },
      {
        id: 'wahl',
        h: 'Welches System passt zu Ihrem Haus?',
        html: `<ul>
<li><strong>Wohnung an der Küste:</strong> Split-Geräte oder ein Multisplit reichen meist aus. Beachten Sie die Regeln der Eigentümergemeinschaft (<em>comunidad</em>) für Außengeräte an der Fassade.</li>
<li><strong>Dorfhaus mit dicken Mauern:</strong> bleibt im Sommer lange kühl, ist im Winter aber feucht und kalt. Eine Klimaanlage mit Heizfunktion plus gute Lüftung hilft gegen Feuchtigkeit.</li>
<li><strong>Finca oder Villa, ganzjährig genutzt:</strong> eine Wärmepumpe mit Fußbodenheizung ist am komfortabelsten, vor allem in Kombination mit einer Solaranlage.</li>
</ul>`,
      },
      {
        id: 'strom',
        h: 'Stromanschluss und Solaranlage',
        html: '<p>Viele ältere Häuser haben eine niedrige Anschlussleistung (<em>potencia contratada</em>), zum Beispiel 3,45 kW. Mit Klimaanlage, Induktion und Wärmepumpe brauchen Sie oft 5,75 kW oder mehr. Die Erhöhung läuft über den Stromanbieter und kann eine Prüfbescheinigung der Anlage (<em>boletín eléctrico</em>) erfordern. Mit einer Solaranlage erzeugen Sie einen großen Teil des Stroms für die Kühlung tagsüber selbst.</p>',
      },
      {
        id: 'foerderung',
        h: 'Förderung',
        html: '<p>Für Wärmepumpen und Energieeinsparung gab es in den letzten Jahren spanische und europäische (Next Generation) Förderprogramme, und manche Gemeinden gewähren einen Nachlass auf die Grundsteuer (IBI) bei Solarenergie. Die Programme ändern sich oft und sind manchmal schnell ausgeschöpft. Fragen Sie beim Angebot nach, was gerade läuft.</p>',
      },
    ],
    faq: [
      { q: 'Kann eine Klimaanlage auch heizen?', a: 'Ja. Fast alle modernen Split-Geräte sind Wärmepumpen, die kühlen und heizen. Bei den milden Wintern in der Axarquía ist das eine sparsame Art zu heizen.' },
      { q: 'Brauche ich eine Genehmigung für ein Außengerät?', a: 'Meist nicht von der Gemeinde, in einer Wohnanlage aber die Zustimmung oder die Regeln der comunidad. In geschützten Ortskernen kann die Gemeinde Vorgaben für sichtbare Außengeräte an der Fassade machen.' },
      { q: 'Wie viel Strom verbraucht eine Klimaanlage?', a: 'Ein modernes Split-Gerät mit 3,5 kW verbraucht beim Kühlen im Schnitt 0,8 bis 1,2 kW pro Stunde. Bei einigen Stunden am Tag im Sommer sind das einige zehn Euro pro Monat und Raum.' },
    ],
    links: [
      { href: '/de/instandhaltung/', label: 'Instandhaltung und Reparaturen' },
      { href: '/de/renovierung/', label: 'Renovierung und Umbau' },
      { href: '/de/probleme/feuchtigkeit-und-schimmel/', label: 'Feuchtigkeit und Schimmel im Haus' },
    ],
    related: ['costs:dak', 'problems:vocht', 'costs:keuken'],
    sources: [
      { name: 'Merca2, Preis der Aerotermia 2025', url: 'https://www.merca2.es/2025/08/11/precio-de-la-aerotermia-en-2025-la-climatizacion-eficiente-estabiliza-sus-costes-y-acelera-su-amortizacion-2221769/' },
      { name: 'Autosolar, was kostet die Installation einer Aerotermia', url: 'https://autosolar.es/instalacion-aerotermia/cuanto-cuesta-instalar-aerotermia' },
      { name: 'IDAE, Förderprogramme für Energieeinsparung und erneuerbare Energien', url: 'https://www.idae.es/ayudas-y-financiacion' },
    ],
    ctaTitle: 'Kühl im Sommer, warm im Winter',
    ctaText: 'Sagen Sie uns, wie groß Ihr Haus ist und wie Sie es nutzen. Sie erhalten Rat zum passenden System und einen Preis.',
    minutes: 5,
    published: '2026-11-05',
  },
  {
    key: 'dak',
    slug: 'dach-und-dachterrasse',
    title: 'Was kostet die Reparatur von Dach oder Dachterrasse in Spanien?',
    seoTitle: 'Dach oder Dachterrasse abdichten in Spanien: Kosten pro m² (2026)',
    short: 'Dach und Dachterrasse',
    description: 'Was kostet es, ein Flachdach oder eine Dachterrasse in der Axarquía abzudichten? Preise pro m² für Beschichtung, Abdichtungsbahn, Ziegeldach und ein komplett neues Dach.',
    lead: 'Die meisten Undichtigkeiten in der Axarquía kommen vom Dach: eine Dachterrasse, deren Abdichtung am Ende ist, oder ein Ziegeldach mit verrutschten Ziegeln. So sieht die Rechnung aus.',
    keyword: 'dachterrasse abdichten spanien kosten',
    dienst: 'onderhoud',
    onderwerp: 'Ich hätte gern ein Angebot für die Reparatur oder Abdichtung meines Daches oder meiner Dachterrasse.',
    answer: 'Eine Dachterrasse neu abzudichten kostet in der Axarquía <strong>30 bis 50 € pro m²</strong> mit einer Flüssigbeschichtung und <strong>70 bis 130 € pro m²</strong>, wenn die Fliesen für eine neue Abdichtungsbahn und neue Fliesen herausmüssen. Ein Ziegeldach neu eindecken kostet 60 bis 110 € pro m². Beträge ohne MwSt.',
    sections: [
      {
        id: 'preise',
        h: 'Preise pro m²',
        table: {
          head: ['Arbeit', 'Was dazugehört', 'Pro m²'],
          rows: [
            ['Flüssigbeschichtung auf der Dachterrasse', 'Reinigen, Risse schließen, Polyurethan oder Acryl in mehreren Schichten', '30 – 50 €'],
            ['Neue Abdichtungsbahn und neue Fliesen', 'Alte Fliesen raus, Gefälle herstellen, Bitumen- oder PVC-Bahn, neue Fliesen', '70 – 130 €'],
            ['Ziegeldach neu eindecken', 'Ziegel runter, Unterdeckbahn, Ziegel wieder drauf (wo nötig ergänzt)', '60 – 110 €'],
            ['Neues Dach mit Dämmung', 'Neue Balken oder Platte, Dämmung, Abdichtung, Ziegel', '150 – 300 €'],
          ],
        },
      },
      {
        id: 'klein',
        h: 'Kleinere Reparaturen',
        table: {
          head: ['Reparatur', 'Richtwert'],
          rows: [
            ['Lokales Leck suchen und abdichten', '300 – 1.500 €'],
            ['Abläufe und Rinnen freimachen und reparieren', '150 – 600 €'],
            ['Lose oder gebrochene Ziegel ersetzen', '200 – 800 €'],
            ['Anschluss an Schornstein oder Aufkantung reparieren', '400 – 1.500 €'],
          ],
          note: 'Gerüst, Hubsteiger oder Schuttabfuhr in einer engen Dorfgasse kommen manchmal hinzu.',
        },
      },
      {
        id: 'beispiel',
        h: 'Rechenbeispiel: Dachterrasse mit 40 m²',
        html: '<p>Eine 40 m² große Dachterrasse auf einem Dorfhaus in Cómpeta ist bei jedem kräftigen Regen undicht. Die Fliesen sind lose und das Wasser bleibt stehen. Eine Beschichtung reicht hier nicht: Die Fliesen kommen heraus, das Gefälle wird hergestellt, eine neue Abdichtungsbahn und neue Fliesen kommen darauf. Rechnen Sie mit <strong>2.800 bis 5.200 €</strong> plus eventuell Schuttabfuhr. Bei einer Terrasse, die nur porös ist, ohne lose Fliesen, kann eine Beschichtung für 1.200 bis 2.000 € genügen.</p>',
      },
      {
        id: 'zeitpunkt',
        h: 'Der richtige Zeitpunkt',
        html: '<p>Lassen Sie das Dach im September oder Oktober prüfen, vor den Herbstregen und der <em>gota fría</em>. Dann werden auch die Abläufe von Laub und Saharastaub (<em>calima</em>) befreit. Wer sein Haus nicht selbst im Blick behalten kann, lässt das im Rahmen der <a href="/de/hausbetreuung/">Hausbetreuung</a> erledigen.</p>',
      },
    ],
    faq: [
      { q: 'Wie lange hält eine Beschichtung?', a: 'Eine gute Polyurethanbeschichtung hält bei normaler Nutzung acht bis zwölf Jahre. Eine Abdichtungsbahn unter neuen Fliesen hält zwanzig Jahre oder länger.' },
      { q: 'Brauche ich eine Genehmigung?', a: 'Für das Abdichten oder Neueindecken eines Daches ohne Eingriff in die Konstruktion genügt meist eine Anzeige (declaración responsable). Bei einer neuen Dachkonstruktion ist eine Genehmigung mit Projekt nötig.' },
      { q: 'Zahlt die Versicherung die Reparatur?', a: 'Eine Wohngebäude- oder Hausratversicherung zahlt oft den Wasserschaden innen, aber selten die Reparatur eines Daches, das durch Verschleiß undicht ist. Prüfen Sie Ihre Police und melden Sie Schäden schnell, mit Fotos.' },
    ],
    links: [
      { href: '/de/probleme/undichtes-dach/', label: 'Undichtes Dach: was tun?' },
      { href: '/de/instandhaltung/', label: 'Instandhaltung und Reparaturen' },
      { href: '/de/hausbetreuung/', label: 'Hausbetreuung und Schlüsselservice' },
    ],
    related: ['problems:daklekkage', 'problems:vocht', 'costs:airco'],
    sources: [
      { name: 'CYPE, Generador de Precios (Baupreise Spanien, Region Andalusien)', url: 'https://generadordeprecios.info/' },
      { name: 'Habitissimo, Preisratgeber Dachterrasse abdichten (impermeabilizar azotea)', url: 'https://www.habitissimo.es/presupuestos/impermeabilizar-azotea' },
      { name: 'AEMET, spanischer Wetterdienst: gota fría und Herbstunwetter', url: 'https://www.aemet.es/' },
    ],
    ctaTitle: 'Ist Ihr Dach undicht?',
    ctaText: 'Schicken Sie Fotos vom Dach und von der Stelle innen, an der das Wasser sichtbar ist. Sie erhalten schnell einen Preis.',
    minutes: 5,
    published: '2026-11-05',
  },
  {
    key: 'buitenkeuken',
    slug: 'aussenkueche',
    title: 'Was kostet eine Außenküche in Spanien?',
    seoTitle: 'Außenküche bauen in Spanien: Kosten (2026)',
    short: 'Außenküche',
    description: 'Was kostet eine gemauerte Außenküche mit Grill in der Axarquía? Preise von einfach bis komplett mit Überdachung, Wasser, Strom und Kühlschrank, dazu die Genehmigung.',
    lead: 'In der Axarquía lebt man einen großen Teil des Jahres draußen. Eine Außenküche am Pool oder auf der Terrasse ist deshalb ein beliebter Umbau. Das kostet sie.',
    keyword: 'außenküche spanien',
    dienst: 'renovatie',
    onderwerp: 'Ich hätte gern ein Angebot für eine Außenküche.',
    answer: 'Eine einfache gemauerte Außenküche mit Grill und Arbeitsfläche kostet in der Axarquía <strong>2.500 bis 5.000 €</strong>. Mit Spüle, Wasser, Strom und Kühlschrank rechnen Sie mit <strong>6.000 bis 12.000 €</strong>. Mit Überdachung und Premium-Geräten <strong>12.000 bis 25.000 €</strong>. Beträge ohne MwSt.',
    sections: [
      {
        id: 'preise',
        h: 'Preise nach Ausführung',
        table: {
          head: ['Ausführung', 'Was dazugehört', 'Richtwert'],
          rows: [
            ['Einfach', 'Gemauerter Block mit Holzkohlegrill und Arbeitsfläche aus Fliesen oder Stein', '2.500 – 5.000 €'],
            ['Komplett', 'Dazu Spüle mit Wasser und Abfluss, Steckdosen, Schränke, Kühlschrank', '6.000 – 12.000 €'],
            ['Luxus', 'Dazu Pizzaofen oder Gasgrill, Naturstein, Beleuchtung, Überdachung', '12.000 – 25.000 €'],
            ['Pergola oder Überdachung (separat)', 'Holz, Aluminium oder Lamellendach', '3.000 – 10.000 €'],
          ],
        },
      },
      {
        id: 'faktoren',
        h: 'Was bestimmt den Preis?',
        html: `<ul>
<li><strong>Wasser und Abfluss.</strong> Je weiter von den vorhandenen Leitungen entfernt, desto teurer. Auf einer Finca mit Klärgrube muss der Abfluss richtig angeschlossen werden.</li>
<li><strong>Materialien.</strong> Außenküchen müssen Sonne, Salz (an der Küste) und Regen aushalten. Wählen Sie Edelstahl 316, Naturstein oder Keramik, kein gewöhnliches Holz.</li>
<li><strong>Fundament.</strong> Auf einer bestehenden Terrasse oder ein neuer Untergrund am Hang.</li>
<li><strong>Strom.</strong> Außensteckdosen müssen wasserdicht und separat abgesichert sein.</li>
</ul>`,
      },
      {
        id: 'genehmigung',
        h: 'Genehmigung',
        html: '<p>Ein freistehender Grill oder gemauerter Block fällt meist unter eine Anzeige (<em>declaración responsable</em>). Eine Überdachung mit festem Dach zählt in vielen Gemeinden als bebaute Fläche und braucht eine Genehmigung. Auf ländlichem Grund und bei einem Haus mit AFO-Status ist das oft nicht erlaubt. Prüfen Sie, was Ihre Gemeinde verlangt, zum Beispiel <a href="/de/orte/frigiliana/baugenehmigung/">in Frigiliana</a> oder <a href="/de/orte/torrox/baugenehmigung/">in Torrox</a>, und lesen Sie den Ratgeber <a href="/de/ratgeber/afo-legalisierung-andalusien/">AFO und Legalisierung</a>.</p>',
      },
    ],
    faq: [
      { q: 'Darf ich im Sommer grillen?', a: 'In Andalusien gilt vom 1. Juni bis 15. Oktober hohe Waldbrandgefahr. Grillen mit offenem Feuer ist dann in und nahe Wald- und Naturgebieten verboten, und auf ländlichen Grundstücken gelten strenge Regeln. In einem Wohngebiet oder bei einem Haus an der Küste ist ein fester Grill meist erlaubt. Ein Gas- oder Elektrogrill ist sicherer und auf einer Finca oft die beste Wahl.' },
      { q: 'Wie lange dauert der Bau?', a: 'Eine einfache Außenküche steht in ein bis zwei Wochen. Mit Leitungen und Überdachung drei bis vier Wochen.' },
    ],
    links: [
      { href: '/de/renovierung/', label: 'Renovierung und Umbau' },
      { href: '/de/kosten/pool-bauen/', label: 'Kosten eines Pools' },
      { href: '/de/kosten/kueche-renovieren/', label: 'Kosten einer neuen Küche' },
    ],
    related: ['costs:zwembad', 'costs:keuken', 'problems:inbraak'],
    sources: [
      { name: 'Habitissimo, Preisratgeber Grill und Außenküche bauen', url: 'https://www.habitissimo.es/presupuestos/construir-barbacoa' },
      { name: 'Junta de Andalucía, Plan INFOCA und Regeln zur Waldbrandgefahr', url: 'https://www.juntadeandalucia.es/medioambiente/portal/areas-tematicas/incendios-forestales' },
    ],
    ctaTitle: 'Eine Außenküche am Pool?',
    ctaText: 'Schicken Sie ein Foto der Stelle und sagen Sie uns, was Sie möchten. Sie erhalten einen Entwurf und einen Preis.',
    minutes: 4,
    published: '2026-11-05',
  },
  {
    key: 'zonnepanelen',
    slug: 'solaranlage',
    title: 'Was kostet eine Solaranlage in Spanien?',
    seoTitle: 'Solaranlage in Spanien: Kosten, Batteriespeicher und Regeln in der Axarquía (2026)',
    short: 'Solaranlage',
    description: 'Was kostet eine Photovoltaikanlage auf Ihrem Haus in der Axarquía? Preise für 3 bis 8 kWp, einen Batteriespeicher, eine Solarthermie-Anlage und eine Finca ohne Stromnetz, dazu Genehmigung, Förderung und Amortisation.',
    lead: 'Die Axarquía hat mehr als 300 Sonnentage im Jahr. Eine Solaranlage bringt hier rund anderthalbmal so viel wie in Deutschland. So sieht die Rechnung aus, auch wenn Sie nur einen Teil des Jahres in Spanien sind.',
    keyword: 'solaranlage spanien kosten',
    dienst: 'energie',
    onderwerp: 'Ich hätte gern ein Angebot für eine Solaranlage auf meinem Haus.',
    answer: 'Eine Anlage mit 4 bis 5 kWp (10 bis 12 Module) für ein Wohnhaus kostet in der Axarquía meist <strong>4.500 bis 7.000 €</strong> ohne Mehrwertsteuer, inklusive Wechselrichter, Montage und Anmeldung. Ein Batteriespeicher mit 5 kWh kommt mit <strong>3.000 bis 5.000 €</strong> dazu. Eine Finca ohne Netzanschluss braucht eine größere Inselanlage mit Speicher: <strong>10.000 bis 18.000 €</strong>.',
    sections: [
      {
        id: 'prijzen',
        h: 'Preise je Anlage',
        html: '<p>Richtwerte für 2026, inklusive Module, Wechselrichter, Montagesystem, Verkabelung, Installation und Anmeldung, ohne Mehrwertsteuer.</p>',
        table: {
          head: ['Anlage', 'Geeignet für', 'Richtwert'],
          rows: [
            ['3 kWp, 7 – 8 Module', 'Wohnung mit eigenem Dach oder kleines Haus, vor allem Verbrauch tagsüber', '3.500 – 5.000 €'],
            ['4 – 5 kWp, 10 – 12 Module', 'Wohnhaus mit Klimaanlage und Induktionsherd', '4.500 – 7.000 €'],
            ['6 – 8 kWp, 14 – 20 Module', 'Villa mit Poolpumpe, Wärmepumpe oder Wallbox', '6.500 – 10.000 €'],
            ['Batteriespeicher 5 kWh', 'Solarstrom vom Tag am Abend nutzen', '+ 3.000 – 5.000 €'],
            ['Batteriespeicher 10 kWh', 'Hoher Verbrauch oder viel Verbrauch am Abend', '+ 5.500 – 9.000 €'],
            ['Solarthermie (termosifón), 150 – 300 Liter', 'Nur Warmwasser', '1.500 – 3.500 €'],
            ['Finca ohne Stromnetz (aislada), 3 – 5 kWp mit 10 – 15 kWh Speicher', 'Landhaus ohne Netzanschluss', '10.000 – 18.000 €'],
          ],
          note: 'Module auf dem Boden oder auf einem Carport kosten 500 – 2.000 € mehr für Gestell und Fundament.',
        },
      },
      {
        id: 'factoren',
        h: 'Was bestimmt den Preis?',
        html: `<ul>
<li><strong>Das Dach.</strong> Eine flache Dachterrasse ist einfach. Ein altes Ziegeldach muss manchmal zuerst geprüft oder repariert werden, sonst ist es nach dem Bohren undicht. Machen Sie beides in einem Zug: siehe <a href="/de/kosten/dach-und-dachterrasse/">Kosten für Dach und Dachterrasse</a>.</li>
<li><strong>Die Elektrik.</strong> Eine alte Installation ohne Erdung oder mit zu kleinem Sicherungskasten muss zuerst in Ordnung gebracht werden. Lesen Sie, <a href="/de/kosten/elektrik-erneuern/">was eine neue Elektrik kostet</a>.</li>
<li><strong>Zugang.</strong> Module durch eine enge Gasse in Frigiliana oder Cómpeta zu tragen, dauert länger als bei einer Villa mit Zufahrt.</li>
<li><strong>Mit oder ohne Speicher.</strong> Ein Speicher verdoppelt fast den Preis. Er lohnt sich vor allem, wenn Sie das ganze Jahr dort wohnen oder abends viel verbrauchen.</li>
<li><strong>Geschützte Ortskerne.</strong> In manchen historischen Ortskernen stellt die Gemeinde Auflagen für sichtbare Module.</li>
</ul>`,
      },
      {
        id: 'afwezig',
        h: 'Lohnt sich eine Solaranlage, wenn Sie nur einen Teil des Jahres in Spanien sind?',
        html: '<p>Ja, aber anders als in Deutschland. Strom, den Sie nicht selbst verbrauchen, geht ins Netz. In Spanien bekommen Sie dafür über die <em>compensación simplificada</em> eine Gutschrift auf der Stromrechnung. Sie ist niedriger als der Strompreis, und die Rechnung kann nie unter null fallen. Eine feste Einspeisevergütung wie früher in Deutschland gibt es nicht. Ein paar Tipps:</p><ul><li>Wählen Sie eine kleinere Anlage, die zum Verbrauch passt, wenn Sie nicht da sind: Kühlschrank, Poolpumpe, Alarmanlage, Luftentfeuchter.</li><li>Fragen Sie Ihren Stromanbieter nach einer virtuellen Batterie (<em>batería virtual</em>): Damit sparen Sie das Guthaben für die Monate, in denen Sie da sind.</li><li>Vermieten Sie das Haus, nutzen die Gäste den Strom im Sommer und die Anlage amortisiert sich schneller.</li></ul>',
      },
      {
        id: 'terugverdienen',
        h: 'Rechenbeispiel und Amortisation',
        html: '<p>Eine Villa in Torrox, die das ganze Jahr bewohnt wird, mit Klimaanlage, Induktion und Poolpumpe. Verbrauch rund 7.000 kWh im Jahr.</p>',
        table: {
          head: ['Posten', 'Richtwert'],
          rows: [
            ['5 kWp, 12 Module, Hybrid-Wechselrichter', '6.000 €'],
            ['Ertrag pro Jahr in der Axarquía', 'ca. 8.000 kWh'],
            ['Eigenverbrauch (ca. 50 %) zu 0,18 € pro kWh', 'ca. 720 € im Jahr'],
            ['Gutschrift für Einspeisung zu 0,06 € pro kWh', 'ca. 240 € im Jahr'],
            ['<strong>Ersparnis pro Jahr</strong>', '<strong>ca. 960 €</strong>'],
            ['<strong>Amortisation</strong>', '<strong>6 bis 7 Jahre</strong>'],
          ],
          note: 'Module halten 25 bis 30 Jahre. Der Wechselrichter muss meist nach 10 bis 15 Jahren ersetzt werden (800 – 1.500 €).',
        },
      },
      {
        id: 'regels',
        h: 'Genehmigung, Anmeldung und Förderung',
        html: `<ul>
<li><strong>Genehmigung.</strong> Module auf dem Dach eines bestehenden, legalen Hauses brauchen in Andalusien meist nur eine einfache Meldung (<em>declaración responsable</em>) bei der Gemeinde. Für Anlagen auf dem Boden, eine Finca im Außenbereich oder ein Haus mit AFO-Status kann die Gemeinde mehr verlangen. Siehe die Seite <em>Baugenehmigung</em> Ihrer Gemeinde unter <a href="/de/orte/">Orte</a>.</li>
<li><strong>Anmeldung.</strong> Der Installateur meldet die Anlage bei der Junta de Andalucía an und stellt das Elektro-Zertifikat (<em>boletín</em>) aus. Danach beantragen Sie bei Ihrem Anbieter die Gutschrift für die Einspeisung.</li>
<li><strong>Steuerermäßigung.</strong> Viele Gemeinden gewähren für einige Jahre einen Nachlass auf die Grundsteuer (<em>bonificación del IBI</em>) und auf die Bausteuer (ICIO). Die Höhe ist je Gemeinde verschieden.</li>
<li><strong>Förderung.</strong> Spanische und europäische Förderprogramme für Eigenverbrauch ändern sich oft und sind manchmal schnell ausgeschöpft. Fragen Sie beim Angebot, was gerade läuft.</li>
</ul>`,
      },
      {
        id: 'slim',
        h: 'Tipp: intelligentes Energiemanagement',
        html: '<p>Lassen Sie Module, Speicher, Wallbox, Boiler und Poolpumpe zusammenarbeiten. Mit <a href="/de/kosten/intelligentes-energiemanagement/">intelligentem Energiemanagement</a> laufen sie automatisch, wenn die Sonne scheint oder der Strom günstig ist. Mit einem variablen Tarif bringt das oft zusätzlich 150 bis 400 € im Jahr, und Sie verfolgen alles auf dem Handy.</p>',
      },
    ],
    faq: [
      { q: 'Wie viele Module brauche ich?', a: 'Als Faustregel: pro 1.000 kWh Jahresverbrauch etwa 0,7 kWp, also zwei Module. Ein Haus mit 5.000 kWh Verbrauch kommt mit 3,5 bis 4 kWp aus, etwa 9 bis 10 Module.' },
      { q: 'Funktioniert die Anlage bei einem Stromausfall?', a: 'Eine normale Anlage schaltet bei einem Stromausfall ab, zum Schutz der Techniker am Netz. Wenn Sie dann Strom haben wollen, brauchen Sie einen Hybrid-Wechselrichter mit Speicher und Notstromfunktion.' },
      { q: 'Wer reinigt die Module?', a: 'Staub und Saharasand (calima) kosten Ertrag. Zwei- bis dreimal im Jahr abspritzen reicht. Das kann Teil der Instandhaltung oder der Hausbetreuung sein.' },
      { q: 'Kann ich eine Solaranlage mit Wärmepumpe oder Klimaanlage kombinieren?', a: 'Ja, das ist die beste Kombination. Klimaanlage und Wärmepumpe laufen vor allem an Sommertagen, genau dann, wenn die Module am meisten liefern.' },
    ],
    links: [
      { href: '/de/renovierung/', label: 'Renovierung und Umbau' },
      { href: '/de/kosten/klimaanlage-und-waermepumpe/', label: 'Kosten Klimaanlage und Wärmepumpe' },
      { href: '/de/ratgeber/autark-leben-spanien/', label: 'Ratgeber: autark leben in Spanien' },
    ],
    related: ['costs:thuisbatterij', 'costs:laadpaal', 'costs:energiebeheer'],
    sources: [
      { name: 'Selectra, Preise für Solaranlagen auf Einfamilienhäusern (2026)', url: 'https://selectra.es/autoconsumo/instalacion/vivienda-unifamiliar' },
      { name: 'Autosolar, Solaranlagen in Málaga installieren', url: 'https://autosolar.es/mi-experiencia-placas-solares/instalacion-placas-solares-malaga' },
      { name: 'Real Decreto 244/2019, Eigenverbrauch und Einspeisevergütung', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2019-5089' },
      { name: 'IDAE, Förderung für Energieeinsparung und erneuerbare Energien', url: 'https://www.idae.es/ayudas-y-financiacion' },
    ],
    ctaTitle: 'Ein Angebot für eine Solaranlage?',
    ctaText: 'Schicken Sie ein Foto Ihres Dachs und Ihre letzte Stromrechnung. Sie erhalten einen passenden Vorschlag und einen Preis.',
    minutes: 6,
    published: '2026-11-05',
  },
  {
    key: 'elektra',
    slug: 'elektrik-erneuern',
    title: 'Was kostet es, die Elektrik in Spanien zu erneuern?',
    seoTitle: 'Elektrik erneuern in Spanien: Kosten, Boletín und mehr Leistung (2026)',
    short: 'Elektrik',
    description: 'Was kostet eine neue Elektroinstallation für Ihr Haus in der Axarquía? Preise für einen neuen Sicherungskasten, Erdung, das Elektro-Zertifikat (boletín) und mehr Anschlussleistung.',
    lead: 'In vielen älteren Häusern in der Axarquía wurde die Elektrik nie erneuert: keine Erdung, ein zu kleiner Sicherungskasten und ein Anschluss, der abschaltet, sobald Klimaanlage und Wasserkocher gleichzeitig laufen. So sieht die Rechnung aus.',
    keyword: 'elektrik erneuern spanien kosten',
    dienst: 'energie',
    onderwerp: 'Ich hätte gern ein Angebot für die Erneuerung oder Erweiterung der Elektrik.',
    answer: 'Die komplette Elektrik einer Wohnung oder eines kleinen Hauses (70 – 100 m²) zu erneuern, kostet in der Axarquía meist <strong>3.500 bis 6.500 €</strong> ohne Mehrwertsteuer. Ein Dorfhaus oder eine Villa mit 120 – 200 m²: <strong>6.500 bis 12.000 €</strong>. Nur ein neuer Sicherungskasten kostet 400 – 1.000 €, das Elektro-Zertifikat (<em>boletín</em>) 100 – 300 €.',
    sections: [
      {
        id: 'prijzen',
        h: 'Preise je Arbeit',
        table: {
          head: ['Arbeit', 'Was dazugehört', 'Richtwert'],
          rows: [
            ['Elektro-Zertifikat (boletín, CIE)', 'Prüfung und Zertifikat durch einen zugelassenen Elektriker', '100 – 300 €'],
            ['Neuer Sicherungskasten (cuadro)', 'Hauptschalter, FI-Schalter, Stromkreise', '400 – 1.000 €'],
            ['Erdung (toma de tierra)', 'Erder und Erdungsleitung zum Sicherungskasten', '300 – 800 €'],
            ['Zusätzlicher Stromkreis, etwa für Klimaanlage oder Induktion', 'Neue Leitung ab Sicherungskasten', '150 – 400 € je Stromkreis'],
            ['Komplette Elektrik, Wohnung 70 – 100 m²', 'Alle Leitungen, Schalter und Steckdosen neu, inklusive boletín', '3.500 – 6.500 €'],
            ['Komplette Elektrik, Haus 120 – 200 m²', 'Ebenso, mit mehr Stromkreisen und Außenbeleuchtung', '6.500 – 12.000 €'],
            ['Wallbox fürs Auto', '7 kW mit eigenem Stromkreis', '900 – 1.800 €'],
          ],
          note: 'Bei einer Komplettsanierung wird die Elektrik mit Abbruch- und Putzarbeiten erneuert. Das ist günstiger als nachträglich Schlitze zu fräsen.',
        },
      },
      {
        id: 'vermogen',
        h: 'Mehr Leistung (potencia contratada)',
        html: '<p>In Spanien wählen Sie selbst, wie viele Kilowatt Sie gleichzeitig nutzen dürfen. Viele ältere Häuser haben 3,45 oder 4,6 kW. Mit Klimaanlage, Induktion, Wärmepumpe oder Poolpumpe brauchen Sie oft 5,75 bis 9,2 kW. Sie erhöhen die Leistung über Ihren Stromanbieter. Ist die Installation älter als zwanzig Jahre oder ändert sich viel, verlangt der Netzbetreiber (in der Axarquía meist e-distribución) ein neues boletín. Der Netzbetreiber berechnet einmalige Anschlusskosten von einigen Dutzend bis einigen Hundert Euro. Beachten Sie: Mehr Leistung bedeutet auch einen höheren Grundpreis auf der Rechnung.</p>',
      },
      {
        id: 'wanneer',
        h: 'Wann muss die Elektrik erneuert werden?',
        html: `<ul>
<li>Es gibt keine Erdung, oder die Steckdosen haben keinen Schutzkontakt.</li>
<li>Der Sicherungskasten hat noch Schmelzsicherungen oder keinen FI-Schalter.</li>
<li>Der Strom fällt immer wieder aus. Lesen Sie, <a href="/de/probleme/strom-faellt-aus/">was Sie tun, wenn der Strom ständig ausfällt</a>.</li>
<li>Sie sehen verschmorte Steckdosen, lose Drähte oder Leitungen mit Stoffisolierung.</li>
<li>Sie kaufen das Haus, vermieten es oder lassen den Anschluss auf Ihren Namen umschreiben: Dann brauchen Sie ein gültiges boletín.</li>
</ul>`,
      },
      {
        id: 'koop',
        h: 'Beim Hauskauf',
        html: '<p>Die Elektrik gehört zu den Punkten, die wir bei einem <a href="/de/immobiliengutachten/">Gutachten vor dem Kauf</a> immer prüfen. Eine komplette Erneuerung kann schnell 5.000 bis 10.000 € kosten. Das ist ein gutes Argument bei der Preisverhandlung.</p>',
      },
    ],
    faq: [
      { q: 'Was ist ein boletín eléctrico?', a: 'Das Certificado de Instalación Eléctrica (CIE) bescheinigt, dass die Elektrik den spanischen Vorschriften entspricht. Nur ein zugelassener Elektriker darf es ausstellen. Sie brauchen es für einen neuen Anschluss, mehr Leistung oder um den Vertrag auf Ihren Namen umzuschreiben, wenn der Anschluss lange nicht genutzt wurde.' },
      { q: 'Wie lange dauert die Erneuerung der Elektrik?', a: 'Eine Wohnung dauert meist ein bis zwei Wochen, ein größeres Haus zwei bis vier Wochen. Danach folgen Putz- und Malerarbeiten, wenn sie nicht Teil einer Sanierung sind.' },
      { q: 'Geht das, während ich nicht in Spanien bin?', a: 'Ja. Sie legen vorab anhand eines Grundrisses fest, wo Steckdosen und Lampen hinkommen, und Sie erhalten während der Arbeiten Fotos.' },
    ],
    links: [
      { href: '/de/renovierung/', label: 'Renovierung und Umbau' },
      { href: '/de/immobiliengutachten/', label: 'Gutachten vor dem Kauf' },
      { href: '/de/ratgeber/renovierungskosten-spanien/', label: 'Ratgeber: Was kostet es, ein Haus in Spanien zu renovieren?' },
    ],
    related: ['problems:stroom', 'costs:zonnepanelen', 'costs:airco'],
    sources: [
      { name: 'Habitissimo, Preisübersicht Elektrik erneuern (reformar instalación eléctrica)', url: 'https://www.habitissimo.es/presupuestos/reformar-instalacion-electrica-vivienda-o-local' },
      { name: 'CNMC, das boletín eléctrico: was es ist und wofür', url: 'https://cnmc.es/sites/default/files/editor_contenidos/Energia/Consumidores/3.2%20Bolet%C3%ADn%20el%C3%A9ctrico%2C%20qu%C3%A9%20es%20y%20para%20qu%C3%A9%20sirve.pdf' },
      { name: 'Reglamento Electrotécnico para Baja Tensión (REBT)', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2002-18099' },
    ],
    ctaTitle: 'Elektrik in Ordnung?',
    ctaText: 'Schicken Sie ein Foto Ihres Sicherungskastens und sagen Sie uns, was Sie anschließen möchten. Sie erhalten eine Beratung und einen Preis.',
    minutes: 5,
    published: '2026-11-05',
  },
  {
    key: 'thuisbatterij',
    slug: 'batteriespeicher',
    title: 'Was kostet ein Batteriespeicher in Spanien?',
    seoTitle: 'Batteriespeicher in Spanien: Kosten, Amortisation und Notstrom (2026)',
    short: 'Batteriespeicher',
    description: 'Was kostet ein Batteriespeicher für Ihre Solaranlage in der Axarquía? Preise für 5, 10 und 15 kWh, Notstrom bei Stromausfall, der richtige Standort und wann sich ein Speicher lohnt.',
    lead: 'Seit dem großen Stromausfall im April 2025, als ganz Spanien stundenlang ohne Strom war, fragen viele Eigentümer nach einem Batteriespeicher. Was kostet er, wann lohnt er sich, und worauf achten Sie im spanischen Klima?',
    keyword: 'batteriespeicher spanien',
    dienst: 'energie',
    onderwerp: 'Ich hätte gern ein Angebot für einen Batteriespeicher.',
    answer: 'Ein Batteriespeicher mit 5 kWh kostet in der Axarquía installiert etwa <strong>3.000 bis 5.000 €</strong>, einer mit 10 kWh <strong>5.500 bis 9.000 €</strong>, ohne Mehrwertsteuer. Haben Sie schon eine Solaranlage mit normalem Wechselrichter, kommt oft ein Hybrid-Wechselrichter dazu: <strong>1.000 bis 2.000 €</strong>. Mit Speicher nutzen Sie 70 bis 80 % Ihres Solarstroms selbst statt 30 bis 50 %.',
    sections: [
      {
        id: 'prijzen',
        h: 'Preise je Speicher',
        html: '<p>Richtwerte für 2026 für einen Lithium-Eisenphosphat-Speicher (LiFePO4), inklusive Aufstellung und Anschluss, ohne Mehrwertsteuer.</p>',
        table: {
          head: ['Speicher', 'Geeignet für', 'Richtwert'],
          rows: [
            ['5 kWh', 'Wohnung oder kleines Haus, Verbrauch am Abend', '3.000 – 5.000 €'],
            ['10 kWh', 'Wohnhaus mit Klimaanlage und Induktion', '5.500 – 9.000 €'],
            ['15 kWh', 'Villa oder Haus mit Wärmepumpe', '8.000 – 12.000 €'],
            ['Hybrid-Wechselrichter dazu', 'Wenn Sie schon Module mit normalem Wechselrichter haben', '+ 1.000 – 2.000 €'],
            ['Notstromfunktion (Backup)', 'Strom behalten bei einer Netzstörung', '+ 300 – 800 €'],
          ],
          note: 'Speicher und Module gleichzeitig zu installieren ist günstiger als nachzurüsten. Siehe auch die Kosten einer <a href="/de/kosten/solaranlage/">Solaranlage</a>.',
        },
      },
      {
        id: 'loont',
        h: 'Wann lohnt sich ein Batteriespeicher?',
        html: `<ul>
<li><strong>Sie wohnen ganzjährig oder den Großteil des Jahres dort.</strong> Dann nutzen Sie den gespeicherten Strom jeden Abend, und der Speicher amortisiert sich in 8 bis 12 Jahren.</li>
<li><strong>Sie wollen bei einem Ausfall Strom haben.</strong> Mit Notstrom laufen Kühlschrank, Licht, Internet, Alarmanlage und Wasserpumpe weiter. Auf dem Land, wo Ausfälle häufiger sind, ist das der wichtigste Grund.</li>
<li><strong>Ihre Finca hat keinen Netzanschluss.</strong> Dann ist ein Speicher keine Wahl, sondern Pflicht. Lesen Sie den Ratgeber <a href="/de/ratgeber/autark-leben-spanien/">autark leben</a>.</li>
<li><strong>Sie sind nur wenige Wochen im Jahr dort.</strong> Dann lohnt sich ein Speicher finanziell meist nicht. Eine virtuelle Batterie bei Ihrem Anbieter ist günstiger.</li>
</ul>`,
      },
      {
        id: 'plek',
        h: 'Wo steht der Speicher?',
        html: '<p>Ein Speicher hält länger, wenn er kühl steht, am besten zwischen 10 und 30 Grad. In der Axarquía ist das wichtig: Im Juli wird ein Schuppen oder eine Dachterrasse in der Sonne viel zu heiß. Ein Innenraum, ein Keller oder ein belüfteter Technikraum an der Nordseite ist am besten. Der Speicher muss außerdem gut zugänglich sein und darf nicht in einem feuchten Raum stehen.</p>',
      },
      {
        id: 'voorbeeld',
        h: 'Rechenbeispiel',
        html: '<p>Ein Haus in Torre del Mar, ganzjährig bewohnt, mit 5 kWp Solarmodulen und einem Verbrauch von 6.000 kWh im Jahr.</p>',
        table: {
          head: ['', 'Ohne Speicher', 'Mit 10 kWh Speicher'],
          rows: [
            ['Selbst genutzter Solarstrom', 'ca. 2.700 kWh', 'ca. 4.800 kWh'],
            ['Ersparnis beim Strom (0,18 € pro kWh)', 'ca. 490 €', 'ca. 860 €'],
            ['Gutschrift für Einspeisung (0,06 € pro kWh)', 'ca. 320 €', 'ca. 190 €'],
            ['<strong>Ersparnis pro Jahr gesamt</strong>', '<strong>ca. 810 €</strong>', '<strong>ca. 1.050 €</strong>'],
          ],
          note: 'Der Speicher bringt in diesem Beispiel rund 240 € im Jahr zusätzlich. Bei 7.000 € für den Speicher ist das vor allem eine Investition in Sicherheit und Unabhängigkeit, mit einer Amortisation nahe der Lebensdauer. Steigen die Strompreise, geht es schneller.',
        },
      },
      {
        id: 'subsidie',
        h: 'Förderung und Steuerermäßigung',
        html: '<p>Für Speicher bei Eigenverbrauch gibt es in Andalusien und vom spanischen Staat regelmäßig Förderprogramme, und viele Gemeinden gewähren einen Nachlass auf die IBI bei Solarenergie. Die Programme ändern sich oft. Fragen Sie beim Angebot, was gerade läuft.</p>',
      },
      {
        id: 'slim',
        h: 'Tipp: intelligentes Energiemanagement',
        html: '<p>Lassen Sie Module, Speicher, Wallbox, Boiler und Poolpumpe zusammenarbeiten. Mit <a href="/de/kosten/intelligentes-energiemanagement/">intelligentem Energiemanagement</a> laufen sie automatisch, wenn die Sonne scheint oder der Strom günstig ist. Mit einem variablen Tarif bringt das oft zusätzlich 150 bis 400 € im Jahr, und Sie verfolgen alles auf dem Handy.</p>',
      },
    ],
    faq: [
      { q: 'Wie lange hält ein Batteriespeicher?', a: 'Ein Lithium-Eisenphosphat-Speicher hält 6.000 Zyklen oder mehr, also 12 bis 15 Jahre bei täglicher Nutzung. Die Hersteller geben meist 10 Jahre Garantie.' },
      { q: 'Springt der Speicher bei einem Stromausfall automatisch ein?', a: 'Nur wenn die Anlage eine Notstromfunktion (Backup oder EPS) hat. Ohne sie schaltet auch der Speicher bei einem Ausfall ab. Fragen Sie ausdrücklich danach.' },
      { q: 'Kann ich meine bestehende Solaranlage mit einem Speicher nachrüsten?', a: 'Ja. Mit einem Hybrid-Wechselrichter oder einem eigenen Batteriewechselrichter geht das bei fast jeder Anlage. Manchmal ist der vorhandene Wechselrichter schon geeignet.' },
      { q: 'Ist ein Batteriespeicher sicher?', a: 'Lithium-Eisenphosphat ist der sicherste Typ und wird fast überall verwendet. Lassen Sie ihn von einem zugelassenen Installateur einbauen, mit der richtigen Absicherung und an einem kühlen, trockenen Ort.' },
    ],
    links: [
      { href: '/de/kosten/solaranlage/', label: 'Kosten Solaranlage' },
      { href: '/de/ratgeber/autark-leben-spanien/', label: 'Ratgeber: autark leben in Spanien' },
      { href: '/de/probleme/strom-faellt-aus/', label: 'Strom fällt ständig aus' },
    ],
    related: ['costs:zonnepanelen', 'costs:laadpaal', 'costs:energiebeheer'],
    sources: [
      { name: 'Selectra, Solaranlagen mit Speicher: Preise 2026', url: 'https://selectra.es/autoconsumo/instalacion/vivienda-unifamiliar' },
      { name: 'Red Eléctrica, Bericht zum Stromausfall vom 28. April 2025', url: 'https://www.ree.es/es/sala-de-prensa' },
      { name: 'IDAE, Förderung für Energieeinsparung und erneuerbare Energien', url: 'https://www.idae.es/ayudas-y-financiacion' },
    ],
    ctaTitle: 'Ein Batteriespeicher für Ihre Anlage?',
    ctaText: 'Schicken Sie ein Foto Ihres Wechselrichters oder Ihres Dachs und Ihre letzte Stromrechnung. Sie erhalten eine Beratung zum passenden Speicher und einen Preis.',
    minutes: 5,
    published: '2026-11-05',
  },
  {
    key: 'water',
    slug: 'wassertank-und-klaergrube',
    title: 'Was kosten Wassertank, Brunnen und Klärgrube in Spanien?',
    seoTitle: 'Wasser und Abwasser auf einer Finca in Spanien: Kosten für Wassertank, Brunnen und Klärgrube (2026)',
    short: 'Wassertank und Klärgrube',
    description: 'Was kosten Wasser und Abwasser auf einer Finca in der Axarquía? Preise für einen Wassertank, die Sanierung einer Zisterne (aljibe), einen Brunnen, Pumpe und Filter sowie eine Klärgrube oder Kleinkläranlage.',
    lead: 'Viele Fincas in der Axarquía hängen nicht an Wasserleitung oder Kanalisation. Nach der Dürre der letzten Jahre wollen Eigentümer mehr Sicherheit beim Wasser, und alte Klärgruben entsprechen oft nicht mehr den Vorschriften. So sieht die Rechnung aus.',
    keyword: 'wassertank finca spanien',
    dienst: 'onderhoud',
    onderwerp: 'Ich hätte gern ein Angebot für Wasser oder Abwasser auf meiner Finca (Wassertank, Brunnen oder Klärgrube).',
    answer: 'Ein Kunststofftank mit 10.000 Litern kostet aufgestellt und angeschlossen <strong>1.500 bis 4.000 €</strong>. Eine Pumpe mit Druckkessel <strong>600 bis 1.500 €</strong>. Eine neue Klärgrube <strong>2.500 bis 6.000 €</strong>, eine Kleinkläranlage <strong>4.000 bis 9.000 €</strong>. Ein Brunnen mit Genehmigung kommt schnell auf <strong>10.000 bis 30.000 €</strong>. Beträge ohne Mehrwertsteuer.',
    sections: [
      {
        id: 'prijzen',
        h: 'Preise Wasser',
        table: {
          head: ['Was', 'Was dazugehört', 'Richtwert'],
          rows: [
            ['Kunststofftank 5.000 Liter', 'Oberirdisch, auf Betonplatte, angeschlossen', '900 – 2.000 €'],
            ['Kunststofftank 10.000 – 20.000 Liter', 'Oberirdisch oder halb eingegraben', '1.500 – 5.000 €'],
            ['Gemauerte Zisterne (aljibe) sanieren', 'Reinigen, Risse schließen, Abdichtung', '2.000 – 8.000 €'],
            ['Neue unterirdische Zisterne', 'Beton, 20 – 40 m³, mit Dachwasser', '8.000 – 20.000 €'],
            ['Pumpe mit Druckkessel', 'Konstanter Druck im Haus', '600 – 1.500 €'],
            ['Filter und UV-Lampe', 'Trinkwasser aus Tank oder Brunnen', '800 – 2.000 €'],
            ['Brunnen (pozo)', 'Genehmigung, Bohrung, Pumpe, Leitung', '10.000 – 30.000 €'],
          ],
          note: 'Bohren kostet meist 100 – 200 € pro Meter, und in der Axarquía sind 80 bis 150 Meter Tiefe nicht ungewöhnlich. Es gibt keine Garantie, dass Sie Wasser finden.',
        },
      },
      {
        id: 'afvoer',
        h: 'Preise Abwasser',
        table: {
          head: ['Was', 'Was dazugehört', 'Richtwert'],
          rows: [
            ['Klärgrube leeren', 'Saugwagen, Entsorgung bei einem zugelassenen Betrieb', '150 – 300 €'],
            ['Neue Klärgrube (fosa séptica)', '2.000 – 4.000 Liter, mit Versickerung oder Filter', '2.500 – 6.000 €'],
            ['Kleinkläranlage (depuradora)', 'Biologische Reinigung, saubereres Abwasser', '4.000 – 9.000 €'],
            ['Anschluss an die Kanalisation', 'Wenn ein Kanal in der Nähe liegt', '1.500 – 6.000 €'],
          ],
          note: 'Eine alte, gemauerte Grube ohne Boden entspricht meist nicht den Vorschriften. Gemeinde oder Junta können bei einem Umbau oder einer Beschwerde den Ersatz verlangen.',
        },
      },
      {
        id: 'regels',
        h: 'Genehmigungen und Regeln',
        html: `<ul>
<li><strong>Brunnen:</strong> Sie brauchen eine Genehmigung oder Eintragung bei der Wasserbehörde der Junta de Andalucía. Ein Brunnen ohne Papiere kann beim Verkauf oder bei einer Kontrolle Probleme machen. Für kleine Entnahmen zum Eigenbedarf ist das Verfahren einfacher.</li>
<li><strong>Abwasser:</strong> Eine Klärgrube oder Kläranlage muss dicht sein und darf Grund- oder Flusswasser nicht verschmutzen. Für die Versickerung kann eine Genehmigung nötig sein.</li>
<li><strong>Beim Kauf:</strong> Lassen Sie Wasserquelle und Klärgrube immer im <a href="/de/immobiliengutachten/">Gutachten vor dem Kauf</a> prüfen.</li>
</ul>`,
      },
    ],
    faq: [
      { q: 'Wie groß muss mein Wassertank sein?', a: 'Rechnen Sie mit 100 bis 150 Litern pro Person und Tag, plus Garten und Pool. Zwei Personen ohne Pool verbrauchen etwa 1.000 Liter pro Woche oder mehr. Ein Tank mit 10.000 Litern gibt dann einige Wochen Puffer zwischen den Lieferungen.' },
      { q: 'Wie oft muss eine Klärgrube geleert werden?', a: 'Meist alle zwei bis vier Jahre, je nach Größe und wie oft das Haus bewohnt ist. Bei Vermietung öfter.' },
      { q: 'Ist Wasser aus einem Tank trinkbar?', a: 'Nur mit einem guten Filter und eventuell einer UV-Lampe, und wenn der Tank sauber und geschlossen ist. Lassen Sie das Wasser ab und zu testen.' },
    ],
    links: [
      { href: '/de/ratgeber/autark-leben-spanien/', label: 'Ratgeber: autark leben in Spanien' },
      { href: '/de/ratgeber/finca-kaufen-spanien/', label: 'Ratgeber: Finca kaufen in Spanien' },
      { href: '/de/instandhaltung/', label: 'Instandhaltung und Reparaturen' },
    ],
    related: ['problems:waterdruk', 'problems:beerput', 'costs:keermuur'],
    sources: [
      { name: 'CYPE, Generador de Precios (Baupreise Spanien)', url: 'https://generadordeprecios.info/' },
      { name: 'Junta de Andalucía, Wasser und Wasserrechte', url: 'https://www.juntadeandalucia.es/medioambiente/portal/areas-tematicas/agua' },
    ],
    ctaTitle: 'Wasser oder Abwasser auf Ihrer Finca regeln?',
    ctaText: 'Sagen Sie uns, wie das Haus jetzt an Wasser kommt und wohin das Abwasser geht. Sie erhalten einen Vorschlag und einen Preis.',
    minutes: 5,
    published: '2026-11-05',
  },
  {
    key: 'keermuur',
    slug: 'stuetzmauer-und-entwaesserung',
    title: 'Was kostet eine Stützmauer oder Entwässerung in Spanien?',
    seoTitle: 'Stützmauer und Entwässerung in Spanien: Kosten für Mauern, Drainage und Zufahrt (2026)',
    short: 'Stützmauer und Entwässerung',
    description: 'Was kostet eine Stützmauer, eine Drainage oder eine betonierte Zufahrt auf einer Finca in der Axarquía? Preise für Beton, Naturstein und Gabionen, und was Sie nach Sturmschäden tun.',
    lead: 'In der Axarquía stehen viele Häuser am Hang. Eine Stützmauer, die nachgibt, Wasser, das nach einem Sturm gegen das Haus läuft, oder ein Weg, der weggespült wird: Das sind große Arbeiten, die sich mit guter Entwässerung vermeiden lassen.',
    keyword: 'stützmauer spanien kosten',
    dienst: 'onderhoud',
    onderwerp: 'Ich hätte gern ein Angebot für eine Stützmauer, Drainage oder die Zufahrt.',
    answer: 'Eine Stützmauer aus Beton mit 1,5 bis 2 Metern Höhe kostet in der Axarquía meist <strong>400 bis 1.200 € pro laufendem Meter</strong>, inklusive Fundament und Drainage. Eine Natursteinmauer <strong>150 bis 350 € pro m²</strong> Mauerfläche. Eine Entwässerungsrinne <strong>60 bis 150 € pro Meter</strong>, eine Betonzufahrt <strong>40 bis 70 € pro m²</strong>. Beträge ohne Mehrwertsteuer.',
    sections: [
      {
        id: 'prijzen',
        h: 'Preise je Arbeit',
        table: {
          head: ['Arbeit', 'Was dazugehört', 'Richtwert'],
          rows: [
            ['Stützmauer aus Beton 1,5 – 2 m', 'Fundament, Stahlbeton, Drainage dahinter', '400 – 1.200 € pro m'],
            ['Natursteinmauer', 'Gemauert oder trocken geschichtet, im örtlichen Stil', '150 – 350 € pro m²'],
            ['Gabionen (gaviones)', 'Stahlkörbe mit Steinen, schnell und wasserdurchlässig', '120 – 250 € pro m²'],
            ['Eingestürzte Mauer wiederaufbauen', 'Schutt räumen, neues Fundament, neu aufbauen', '2.000 – 10.000 €+'],
            ['Drainage hinter einer Mauer oder am Haus', 'Drainrohr, Kies, Filtervlies', '40 – 80 € pro m'],
            ['Entwässerungsrinne (canaleta)', 'Rinne mit Gitter quer über Terrasse oder Einfahrt', '60 – 150 € pro m'],
            ['Zufahrt aus Beton', 'Erdarbeiten, Bewehrung, Beton mit Profil', '40 – 70 € pro m²'],
          ],
          note: 'Für eine Stützmauer über etwa 1,5 Metern oder direkt am Haus verlangt die Gemeinde meist eine Baugenehmigung mit Berechnung durch einen Architekten oder Ingenieur.',
        },
      },
      {
        id: 'waarom',
        h: 'Warum Stützmauern versagen',
        html: `<ul>
<li><strong>Keine Drainage.</strong> Regenwasser staut sich hinter der Mauer und drückt sie um. Das ist mit Abstand die häufigste Ursache.</li>
<li><strong>Zu schwaches Fundament</strong> oder eine Mauer ohne Bewehrung, oft ohne Berechnung gebaut.</li>
<li><strong>Starkregen nach Trockenheit.</strong> Eine DANA im Herbst bringt in wenigen Stunden mehr Wasser, als der Boden aufnehmen kann.</li>
<li><strong>Wurzeln und Bewuchs</strong>, die die Mauer auseinanderdrücken.</li>
</ul>
<p>Lesen Sie auch, <a href="/de/probleme/wasserschaden-und-stuetzmauer/">was Sie bei Wasserschäden oder einer reißenden Stützmauer tun</a>.</p>`,
      },
      {
        id: 'vergunning',
        h: 'Genehmigung und Außenbereich',
        html: '<p>Auf ländlichem Grund gelten strenge Regeln. Die Reparatur einer bestehenden Mauer geht meist mit einer Meldung, eine neue Mauer oder ein neuer Weg braucht oft eine Genehmigung. Bei einem Haus mit AFO-Status sind nur Arbeiten für Sicherheit und Instandhaltung erlaubt. Siehe die Seite <em>Baugenehmigung</em> Ihrer Gemeinde unter <a href="/de/orte/">Orte</a> und den Ratgeber <a href="/de/ratgeber/afo-legalisierung-andalusien/">AFO und Legalisierung</a>.</p>',
      },
    ],
    faq: [
      { q: 'Zahlt die Versicherung eine eingestürzte Stützmauer?', a: 'Manchmal. Viele Gebäudeversicherungen decken Sturmschäden, schließen aber Schäden durch mangelnde Instandhaltung oder fehlende Drainage aus. Bei außergewöhnlichem Regen kann das Consorcio de Compensación de Seguros zahlen. Lesen Sie den Ratgeber zu Versicherung und Schäden.' },
      { q: 'Kann eine alte Natursteinmauer stehen bleiben?', a: 'Oft ja, wenn sie noch gerade steht und Wasser durch die Fugen kann. Eine Ausbeulung, verschobene Steine oder Risse sind Gründe, sie prüfen zu lassen.' },
      { q: 'Wann lässt man diese Arbeiten am besten machen?', a: 'Im Frühjahr oder Sommer, wenn der Boden trocken ist. Nach einem Sturm muss es manchmal sofort sein, um weitere Schäden zu vermeiden.' },
    ],
    links: [
      { href: '/de/instandhaltung/', label: 'Instandhaltung und Reparaturen' },
      { href: '/de/ratgeber/finca-kaufen-spanien/', label: 'Ratgeber: Finca kaufen in Spanien' },
      { href: '/de/wetter/oktober/', label: 'Das Wetter im Oktober: der erste Starkregen' },
    ],
    related: ['problems:wateroverlast', 'costs:water', 'problems:scheuren'],
    sources: [
      { name: 'CYPE, Generador de Precios (Baupreise Spanien)', url: 'https://generadordeprecios.info/' },
      { name: 'Código Técnico de la Edificación, DB SE-C Cimientos (Fundamente und Stützmauern)', url: 'https://www.codigotecnico.org/' },
    ],
    ctaTitle: 'Eine Stützmauer oder Entwässerung nötig?',
    ctaText: 'Schicken Sie Fotos der Mauer oder der Stelle, wo das Wasser hinläuft. Sie erhalten eine Beratung und einen Preis.',
    minutes: 5,
    published: '2026-11-05',
  },
  {
    key: 'laadpaal',
    slug: 'wallbox',
    title: 'Was kostet eine Wallbox in Spanien?',
    seoTitle: 'Wallbox in Spanien: Kosten, Laden mit Solarstrom und Regeln (2026)',
    short: 'Wallbox',
    description: 'Was kostet eine Wallbox an Ihrem Haus in der Axarquía? Preise je Situation, Laden mit Solaranlage und Batteriespeicher, autarkes Laden und die Regeln in einer Wohnanlage.',
    lead: 'Ein Elektroauto laden Sie am günstigsten zu Hause, und in der Axarquía am liebsten mit eigenem Solarstrom. Was kostet eine Wallbox, was muss am Anschluss passieren, und geht das auch auf einer Finca ohne Stromnetz?',
    keyword: 'wallbox spanien',
    dienst: 'energie',
    onderwerp: 'Ich möchte ein Angebot für eine Wallbox.',
    answer: 'Eine Wallbox mit 7,4 kW kostet in der Axarquía installiert meist <strong>900 bis 1.800 €</strong> zzgl. MwSt., mit eigenem Stromkreis und Absicherung. Liegt der Stellplatz weit vom Zähler entfernt, etwa in der Tiefgarage einer Wohnanlage, sind es <strong>1.500 bis 3.000 €</strong>. Mit einer Solaranlage laden Sie tagsüber fast kostenlos.',
    sections: [
      {
        id: 'prijzen',
        h: 'Preise je Situation',
        html: '<p>Richtwerte für 2026, mit Wallbox, Kabel, Absicherung und Anmeldung, zzgl. MwSt.</p>',
        table: {
          head: ['Situation', 'Erläuterung', 'Richtwert'],
          rows: [
            ['Wallbox 7,4 kW am Haus', 'Einfahrt oder Carport nah am Sicherungskasten', '900 – 1.800 €'],
            ['Wallbox in einer Tiefgarage', 'Langes Kabel ab Ihrem Zähler, in einer Wohnanlage', '1.500 – 3.000 €'],
            ['Smarte Wallbox für Solarstrom', 'Lädt mit dem Überschuss Ihrer Module', '+ 200 – 500 €'],
            ['Höhere Anschlussleistung', 'Von 4,6 auf 7 kW oder mehr beim Netzbetreiber', '100 – 300 € einmalig, höhere Grundgebühr'],
            ['Zusätzliche Module fürs Auto', '1,5 bis 2 kWp, genug für 10.000 km im Jahr', '2.000 – 3.500 €'],
          ],
          note: 'Lassen Sie die Wallbox zusammen mit der Solaranlage oder neuer Elektrik einbauen: Das spart Stemm- und Putzarbeiten. Siehe die Kosten für eine <a href="/de/kosten/solaranlage/">Solaranlage</a> und <a href="/de/kosten/elektrik-erneuern/">neue Elektrik</a>.',
        },
      },
      {
        id: 'zon',
        h: 'Laden mit Solaranlage und Batteriespeicher',
        html: `<p>Ein durchschnittliches Elektroauto verbraucht 15 bis 18 kWh pro 100 km. Bei 10.000 km im Jahr sind das etwa 1.500 bis 1.800 kWh. In der Axarquía erzeugt 1 kWp Module rund 1.600 kWh im Jahr, 1 bis 2 zusätzliche kWp decken also den Großteil.</p>
<ul>
<li><strong>Tagsüber laden.</strong> Eine smarte Wallbox passt die Ladeleistung an den aktuellen Überschuss der Module an. Wer zu Hause arbeitet oder im Ruhestand ist, lädt so fast komplett mit Sonne.</li>
<li><strong>Lieber nicht aus dem Hausspeicher laden.</strong> Ein Autoakku mit 60 kWh ist viel größer als ein Hausspeicher mit 10 kWh. Stellen Sie ein, dass die Wallbox den Speicher nicht leert, damit Sie abends Strom haben.</li>
<li><strong>Nachts günstig aus dem Netz.</strong> Mit einem Tarif mit günstigem Nachtzeitraum laden Sie außerhalb der Sonnenstunden für einen Bruchteil des Tagespreises.</li>
</ul>`,
      },
      {
        id: 'offgrid',
        h: 'Laden auf einer Finca ohne Stromnetz',
        html: `<p>Autarkes Laden geht, braucht aber eine größere Anlage. Das Auto lädt dann vor allem an sonnigen Nachmittagen, mit geringerer Leistung von 2 bis 3,7 kW, damit der Wechselrichter auch den Rest des Hauses versorgen kann.</p>
<ul>
<li>Rechnen Sie mit <strong>2 bis 3 kWp zusätzlichen Modulen</strong> fürs Auto, weil Sie im Winter weniger erzeugen und kein Netz als Reserve haben.</li>
<li>Wählen Sie einen <strong>Wechselrichter mit genug Leistung</strong> für Wallbox, Wasserpumpe und Klimaanlage gleichzeitig.</li>
<li>Lassen Sie die Wallbox <strong>nur mit Überschuss laden</strong>, damit der Hausspeicher für die Nacht voll ist.</li>
</ul>
<p>Mehr dazu im Ratgeber <a href="/de/ratgeber/autark-leben-spanien/">autark leben in Spanien</a>.</p>`,
      },
      {
        id: 'regels',
        h: 'Regeln und Anmeldung',
        html: `<ul>
<li><strong>Zugelassener Installateur:</strong> Ein Ladepunkt fällt unter die spanischen Installationsvorschriften (ITC-BT-52). Ein zugelassener Installateur baut ihn ein und meldet ihn bei der Junta an.</li>
<li><strong>In einer Wohnanlage:</strong> Für eine Wallbox auf Ihrem eigenen Stellplatz brauchen Sie keine Zustimmung der Eigentümergemeinschaft (<em>comunidad</em>). Sie teilen es vorab schriftlich mit und zahlen Einbau und Strom selbst.</li>
<li><strong>Leistung:</strong> Viele Häuser haben 4,6 oder 5,75 kW. Mit Wallbox sind 7 kW oder mehr angenehm, oder eine Wallbox mit dynamischem Lastmanagement, die zurückregelt, wenn der Backofen läuft.</li>
<li><strong>Förderung:</strong> Es gibt regelmäßig staatliche Programme für Ladepunkte und einen Abzug bei der Einkommensteuer (IRPF). Die Bedingungen ändern sich; fragen Sie beim Angebot, was gerade läuft.</li>
</ul>`,
      },
      {
        id: 'slim',
        h: 'Tipp: intelligentes Energiemanagement',
        html: '<p>Lassen Sie Module, Speicher, Wallbox, Boiler und Poolpumpe zusammenarbeiten. Mit <a href="/de/kosten/intelligentes-energiemanagement/">intelligentem Energiemanagement</a> laufen sie automatisch, wenn die Sonne scheint oder der Strom günstig ist. Mit einem variablen Tarif bringt das oft zusätzlich 150 bis 400 € im Jahr, und Sie verfolgen alles auf dem Handy.</p>',
      },
    ],
    faq: [
      { q: 'Kann ich nicht einfach an der Steckdose laden?', a: 'Ab und zu ja, aber eine normale Steckdose ist nicht für stundenlang 2,3 kW gemacht. Sie wird warm und lädt langsam: 10 bis 12 km pro Stunde. Eine Wallbox ist sicherer und dreimal so schnell.' },
      { q: 'Was kostet eine volle Ladung zu Hause?', a: 'Einen 60-kWh-Akku zu 0,18 € pro kWh voll zu laden kostet etwa 11 €, im Nachtzeitraum oft die Hälfte und mit eigener Solaranlage fast nichts.' },
      { q: 'Muss meine Anschlussleistung erhöht werden?', a: 'Meist sind 7 kW oder mehr zu empfehlen. Mit einer smarten Wallbox, die bei hohem Verbrauch zurückregelt, reicht manchmal Ihre jetzige Leistung.' },
      { q: 'Kann ich autark elektrisch fahren?', a: 'Ja, mit genug zusätzlichen Modulen und einem passenden Wechselrichter. Sie laden dann vor allem an sonnigen Nachmittagen. Für lange Winterwochen ist ein Schnelllader unterwegs eine gute Ergänzung.' },
    ],
    links: [
      { href: '/de/kosten/solaranlage/', label: 'Kosten Solaranlage' },
      { href: '/de/kosten/batteriespeicher/', label: 'Kosten Batteriespeicher' },
      { href: '/de/ratgeber/autark-leben-spanien/', label: 'Ratgeber: autark leben in Spanien' },
    ],
    related: ['costs:zonnepanelen', 'costs:thuisbatterij', 'costs:energiebeheer'],
    sources: [
      { name: 'BOE, Ley de Propiedad Horizontal, Artikel 17.5 (Ladepunkte in einer comunidad)', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1960-10906' },
      { name: 'BOE, ITC-BT-52, Anlagen zum Laden von Elektrofahrzeugen', url: 'https://www.boe.es/buscar/doc.php?id=BOE-A-2014-13681' },
      { name: 'IDAE, Förderung für Elektromobilität', url: 'https://www.idae.es/ayudas-y-financiacion' },
    ],
    ctaTitle: 'Eine Wallbox an Ihrem Haus?',
    ctaText: 'Schicken Sie ein Foto Ihres Sicherungskastens und des Stellplatzes. Sie erhalten Beratung und ein Angebot, auch zusammen mit einer Solaranlage.',
    minutes: 5,
    published: '2026-11-05',
  },
  {
    key: 'energiebeheer',
    slug: 'intelligentes-energiemanagement',
    title: 'Intelligentes Energiemanagement: automatisch niedrigere Stromkosten',
    seoTitle: 'Intelligentes Energiemanagement in Spanien: Solar, Speicher und Wallbox automatisch steuern (2026)',
    short: 'Energiemanagement',
    description: 'Mit intelligentem Energiemanagement steuert Ihr Haus in Spanien Solaranlage, Batteriespeicher, Wallbox, Boiler und Poolpumpe selbst. Fester oder variabler Stromtarif, was es bringt und was es kostet.',
    lead: 'Solaranlage, Batteriespeicher und Wallbox bringen am meisten, wenn sie zusammenarbeiten. Mit intelligentem Energiemanagement regelt Ihr Haus das selbst: Geräte laufen, wenn die Sonne scheint oder der Strom günstig ist, und Sie sehen alles auf dem Handy, auch wenn Sie nicht in Spanien sind.',
    keyword: 'energiemanagement spanien',
    dienst: 'energiebeheer',
    onderwerp: 'Ich möchte eine Beratung zu intelligentem Energiemanagement.',
    answer: 'Intelligentes Energiemanagement kostet einmalig meist <strong>400 bis 1.500 €</strong>, je nachdem, wie viele Geräte Sie einbinden. Mit Solaranlage, Speicher und variablem Stromtarif sparen Sie damit oft zusätzlich <strong>150 bis 400 € im Jahr</strong>, zusätzlich zu dem, was die Module schon bringen.',
    sections: [
      {
        id: 'wat',
        h: 'Was macht intelligentes Energiemanagement?',
        html: `<p>Ein kleines Gerät im Sicherungskasten verbindet alles, was Strom erzeugt, speichert oder viel verbraucht. Das System schaut auf Sonne, Strompreis und Ladestand und entscheidet jede Viertelstunde, was passiert:</p>
<ul>
<li><strong>Boiler und Poolpumpe</strong> laufen mittags, mit eigenem Solarstrom.</li>
<li>Das <strong>Auto</strong> lädt mit dem Überschuss der Module oder nachts in den günstigsten Stunden.</li>
<li>Der <strong>Batteriespeicher</strong> lädt in günstigen Stunden und liefert Strom in den teuren Abendstunden.</li>
<li>Die <strong>Klimaanlage</strong> kühlt das Haus mit Solarstrom vor, bevor Sie nach Hause kommen.</li>
<li>Sie erhalten eine <strong>Meldung</strong> bei Stromausfall, leerem Speicher, niedrigem Wassertank oder einem Leck, auch wenn Sie in Deutschland sind.</li>
</ul>
<p>Wir arbeiten mit offenen Systemen wie Home Assistant, die mit fast jeder Marke von Wechselrichter, Speicher und Wallbox zusammenarbeiten. Sie sind also nicht an einen Hersteller oder die App eines Anbieters gebunden.</p>`,
      },
      {
        id: 'contract',
        h: 'Fester oder variabler Stromtarif?',
        html: `<p>In Spanien wählen Sie grob zwischen zwei Arten von Vertrag:</p>
<ul>
<li><strong>Festpreis</strong> auf dem freien Markt (<em>mercado libre</em>): jede Stunde derselbe Preis pro kWh, oder ein fester Preis je Zeitzone. Sie wissen, woran Sie sind.</li>
<li><strong>Variabler Preis</strong>, etwa der regulierte PVPC-Tarif: Der Preis ändert sich jede Stunde und wird am Vortag veröffentlicht. Mittags und nachts ist Strom oft günstig, abends teuer.</li>
</ul>
<p>Ein Festpreis passt zu einem Ferienhaus ohne Speicher oder Wallbox. Können Sie Verbrauch verschieben, bringt ein variabler Tarif mehr: Das System liest die Stundenpreise von morgen und plant Speicher, Auto, Boiler und Poolpumpe in die günstigsten Stunden. Je mehr Sie verschieben können, desto größer der Unterschied.</p>`,
      },
      {
        id: 'prijzen',
        h: 'Was kostet es?',
        html: '<p>Richtwerte für 2026, mit Installation und Einrichtung, zzgl. MwSt.</p>',
        table: {
          head: ['Paket', 'Was Sie bekommen', 'Richtwert'],
          rows: [
            ['Überblick', 'Energiezähler, Übersicht auf dem Handy, Meldungen bei Störungen', '400 – 700 €'],
            ['Intelligent steuern', 'Plus Anbindung von Wechselrichter, Speicher, Boiler und Poolpumpe', '700 – 1.200 €'],
            ['Komplett', 'Plus Wallbox, Klimaanlage und Steuerung nach Stundenpreisen', '1.000 – 1.500 €'],
            ['Betreuung aus der Ferne', 'Updates, Anpassungen und Hilfe, wenn etwas nicht funktioniert', '10 – 25 € im Monat'],
          ],
          note: 'Noch keine Solaranlage oder Speicher? Siehe die Kosten für eine <a href="/de/kosten/solaranlage/">Solaranlage</a>, einen <a href="/de/kosten/batteriespeicher/">Batteriespeicher</a> und eine <a href="/de/kosten/wallbox/">Wallbox</a>.',
        },
      },
      {
        id: 'offgrid',
        h: 'Auf einer Finca ohne Stromnetz',
        html: '<p>Autark ist intelligentes Energiemanagement noch wichtiger, weil kein Netz als Reserve da ist. Das System schaltet große Verbraucher erst ein, wenn der Speicher voll genug ist, lädt das Auto nur mit Überschuss, warnt bei niedrigem Speicher oder Wassertank und zeigt Ihnen aus der Ferne, dass alles funktioniert. Siehe den Ratgeber <a href="/de/ratgeber/autark-leben-spanien/">autark leben in Spanien</a>.</p>',
      },
    ],
    faq: [
      { q: 'Brauche ich eine Solaranlage für intelligentes Energiemanagement?', a: 'Nicht unbedingt. Schon mit einem variablen Tarif können Boiler, Poolpumpe und Auto in günstigen Stunden laufen. Mit Modulen und Speicher bringt es aber am meisten.' },
      { q: 'Funktioniert es mit meinem Wechselrichter oder Speicher?', a: 'Fast immer. Offene Systeme wie Home Assistant arbeiten mit den gängigen Marken. Beim Angebot prüfen wir, was Sie haben.' },
      { q: 'Kann ich alles von Deutschland aus verfolgen?', a: 'Ja. Auf dem Handy sehen Sie, was die Module erzeugen, was das Haus verbraucht und wie voll der Speicher ist, und Sie erhalten eine Meldung, wenn etwas nicht stimmt.' },
      { q: 'Was passiert, wenn das Internet ausfällt?', a: 'Das System läuft lokal im Haus und steuert weiter. Nur der Blick aus der Ferne fällt aus, bis das Internet wieder da ist.' },
    ],
    links: [
      { href: '/de/kosten/solaranlage/', label: 'Kosten Solaranlage' },
      { href: '/de/kosten/batteriespeicher/', label: 'Kosten Batteriespeicher' },
      { href: '/de/kosten/wallbox/', label: 'Kosten Wallbox' },
    ],
    related: ['costs:zonnepanelen', 'costs:thuisbatterij', 'costs:laadpaal'],
    sources: [
      { name: 'Red Eléctrica, Stundenpreise des PVPC-Tarifs', url: 'https://www.ree.es/es/datos/mercados/precio-voluntario-pequeno-consumidor' },
      { name: 'CNMC, Vergleichsrechner für Stromtarife', url: 'https://comparador.cnmc.gob.es/' },
      { name: 'Home Assistant, offene Smart-Home-Plattform', url: 'https://www.home-assistant.io/' },
    ],
    ctaTitle: 'Stromkosten automatisch senken?',
    ctaText: 'Sagen Sie uns, welche Module, welchen Speicher oder welche Wallbox Sie haben und welchen Stromtarif. Sie erhalten eine Beratung, was Sie einbinden können und was es bringt.',
    minutes: 5,
    published: '2026-11-05',
  },
];
