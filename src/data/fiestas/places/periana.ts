import { t, P, R, type PlaceFiestas } from '../types';

const f: PlaceFiestas = {
  intro: t(
    'Periana is het perzikendorp van de Axarquía. Het feestjaar volgt de oogst, met in juli de Feria del Melocotón als het fruit op zijn best is.',
    'Periana is the peach village of the Axarquía. Its fiesta year follows the harvest, with the Feria del Melocotón in July when the fruit is at its best.',
    'Periana ist das Pfirsichdorf der Axarquía. Das Festjahr folgt der Ernte, mit der Feria del Melocotón im Juli, wenn die Früchte am besten sind.',
    'Periana är Axarquías persikoby. Feståret följer skörden, med Feria del Melocotón i juli när frukten är som bäst.',
  ),
  events: [
    { name: 'San Isidro Labrador', when: R(15, 5), kind: 'feria', text: t('feria van enkele dagen ter ere van de patroon van de boeren.', 'a fair of several days in honour of the farmers’ patron saint.', 'mehrtägige Feria zu Ehren des Schutzpatrons der Bauern.', 'flera dagars feria till ära för böndernas skyddshelgon.') },
    { name: 'Romería', when: P('begin', 6), kind: 'romeria', text: t('bedevaart naar de oevers van het stuwmeer van La Viñuela.', 'a pilgrimage to the shores of La Viñuela reservoir.', 'Wallfahrt an das Ufer des Stausees La Viñuela.', 'vallfärd till stranden av La Viñuela-sjön.') },
    { name: 'Feria del Melocotón', when: R(25, 7), highlight: true, text: t('het perzikenfeest, als de oogst op zijn hoogtepunt is.', 'the peach festival, at the height of the harvest.', 'das Pfirsichfest auf dem Höhepunkt der Ernte.', 'persikofesten, mitt i skörden.') },
    { name: 'Feria de agosto', when: P('end', 8), kind: 'feria', text: t('het zomerfeest van het dorp.', 'the village’s summer fair.', 'das Sommerfest des Dorfes.', 'byns sommarfest.') },
  ],
  sources: ['https://es.wikipedia.org/wiki/Periana'],
};
export default f;
