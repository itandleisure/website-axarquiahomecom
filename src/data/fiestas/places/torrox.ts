import { t, D, M, N, R, W, type PlaceFiestas } from '../types';

const f: PlaceFiestas = {
  intro: t(
    'Torrox heeft een vol feestjaar, van carnaval in februari tot de Día de las Migas vlak voor Kerst, als het dorp duizenden porties migas uitdeelt. In de zomer feest ook de kust, in Torrox Costa en El Morche.',
    'Torrox has a full fiesta year, from carnival in February to the Día de las Migas just before Christmas, when the town hands out thousands of portions of migas. In summer the coast joins in, in Torrox Costa and El Morche.',
    'Torrox hat ein volles Festjahr, vom Karneval im Februar bis zum Día de las Migas kurz vor Weihnachten, wenn der Ort Tausende Portionen Migas verteilt. Im Sommer feiert auch die Küste, in Torrox Costa und El Morche.',
    'Torrox har ett fullt festår, från karnevalen i februari till Día de las Migas strax före jul, då orten delar ut tusentals portioner migas. På sommaren firar också kusten, i Torrox Costa och El Morche.',
  ),
  events: [
    { name: 'Carnaval', when: M(2), kind: 'carnaval', text: t('met <em>murgas</em>, groepen die satirische liedjes zingen.', 'with <em>murgas</em>, groups singing satirical songs.', 'mit <em>Murgas</em>, Gruppen, die satirische Lieder singen.', 'med <em>murgas</em>, grupper som sjunger satiriska visor.') },
    { name: 'Romería de San Antonio', when: R(13, 6), kind: 'romeria', text: t('bedevaart het land in.', 'a pilgrimage into the countryside.', 'Wallfahrt hinaus aufs Land.', 'vallfärd ut på landet.') },
    { name: 'Noche de San Juan', when: D(23, 6), kind: 'san-juan', text: t('de nacht op het strand doorbrengen, met muziek en vuur.', 'spending the night on the beach, with music and fire.', 'die Nacht am Strand verbringen, mit Musik und Feuer.', 'natten tillbringas på stranden, med musik och eld.') },
    { name: 'Fiesta de los Patrones', when: D(5, 8), text: t('feest van de Virgen de las Nieves en San Roque, met een internationaal festival van volksdans en koren.', 'the fiesta of the Virgen de las Nieves and San Roque, with an international folk dance and choir festival.', 'Fest der Virgen de las Nieves und San Roque, mit einem internationalen Volkstanz- und Chorfestival.', 'fest för Virgen de las Nieves och San Roque, med en internationell folkdans- och körfestival.') },
    { name: 'Feria de El Morche', when: N(2, 'week', 8), kind: 'feria', text: t('zomerfeest aan zee in El Morche.', 'a summer fair by the sea in El Morche.', 'Sommerfest am Meer in El Morche.', 'sommarfest vid havet i El Morche.') },
    { name: 'Virgen del Carmen (Torrox Costa)', when: D(15, 8), text: t('processie over land en over zee in Torrox Costa.', 'a procession on land and at sea in Torrox Costa.', 'Prozession zu Land und zu Wasser in Torrox Costa.', 'procession på land och till sjöss i Torrox Costa.') },
    { name: 'Romería de San Roque', when: D(26, 8), kind: 'romeria', text: t('valt samen met de Día del Turista.', 'held on the same day as the Día del Turista.', 'fällt mit dem Día del Turista zusammen.', 'sammanfaller med Día del Turista.') },
    { name: 'Candelaria', when: W(9, t('eind van de eerste week van september', 'end of the first week of September', 'Ende der ersten Septemberwoche', 'slutet av första veckan i september')), text: t('families komen samen op hun land en steken vuren aan.', 'families gather on their country plots and light bonfires.', 'Familien treffen sich auf ihrem Land und zünden Feuer an.', 'familjer samlas på sina ägor på landet och tänder eldar.') },
    { name: 'Feria de Torrox', when: N(1, 'weekend', 10), kind: 'feria', text: t('het grote dorpsfeest.', 'the big town fair.', 'das große Ortsfest.', 'den stora festen i orten.') },
    { name: 'Halloween', when: D(31, 10), kind: 'halloween', text: t('de gemeente organiseert meestal activiteiten in Torrox en El Morche.', 'the town hall usually organises activities in Torrox and El Morche.', 'die Gemeinde organisiert meist Veranstaltungen in Torrox und El Morche.', 'kommunen ordnar oftast aktiviteter i Torrox och El Morche.') },
    { name: 'Día de las Migas', when: W(12, t('laatste zondag voor Kerst', 'the last Sunday before Christmas', 'letzter Sonntag vor Weihnachten', 'sista söndagen före jul')), highlight: true, text: t(
      'duizenden porties <em>migas</em> gratis op straat, met muziek en wijn. Sinds 1999 erkend als fiesta van toeristisch belang.',
      'thousands of free portions of <em>migas</em> in the street, with music and wine. Recognised as a fiesta of tourist interest since 1999.',
      'Tausende kostenlose Portionen <em>Migas</em> auf der Straße, mit Musik und Wein. Seit 1999 als Fest von touristischem Interesse anerkannt.',
      'tusentals gratis portioner <em>migas</em> på gatan, med musik och vin. Erkänd som fest av turistiskt intresse sedan 1999.',
    ) },
  ],
  sources: ['https://es.wikipedia.org/wiki/Torrox', 'https://euroweeklynews.com/2026/10/30/halloween-plans-change-axarquia-and-costa-tropical-events-moved/'],
};
export default f;
