import { t, D, N, type PlaceFiestas } from '../types';

const f: PlaceFiestas = {
  intro: t(
    'Alfarnatejo is een van de kleinste gemeenten van de Axarquía. Het bekendste feest is de Fiesta del Gazpacho in augustus, als het dorp vol loopt met bezoekers.',
    'Alfarnatejo is one of the smallest municipalities in the Axarquía. Its best-known fiesta is the Fiesta del Gazpacho in August, when the village fills with visitors.',
    'Alfarnatejo ist eine der kleinsten Gemeinden der Axarquía. Das bekannteste Fest ist die Fiesta del Gazpacho im August, wenn sich das Dorf mit Besuchern füllt.',
    'Alfarnatejo är en av Axarquías minsta kommuner. Den mest kända festen är Fiesta del Gazpacho i augusti, då byn fylls av besökare.',
  ),
  events: [
    { name: 'San Marcos', when: D(25, 4), text: t('traditionele dag op het land, met eten buiten.', 'a traditional day out in the countryside, eating outdoors.', 'traditioneller Tag auf dem Land mit Essen im Freien.', 'traditionell dag ute på landet med mat utomhus.') },
    { name: 'San Isidro', when: D(15, 5), kind: 'romeria', text: t('feest van de patroon van de boeren.', 'the feast of the farmers’ patron saint.', 'Fest des Schutzpatrons der Bauern.', 'böndernas skyddshelgons dag.') },
    { name: 'Fiesta del Gazpacho', when: N(1, 'weekend', 8), highlight: true, text: t('het dorp maakt grote hoeveelheden gazpacho en deelt die uit, met muziek en feest.', 'the village makes gazpacho in large quantities and hands it out, with music and dancing.', 'das Dorf bereitet Gazpacho in großen Mengen zu und verteilt ihn, mit Musik und Tanz.', 'byn gör gazpacho i stora mängder och delar ut, med musik och dans.') },
    { name: 'San Miguel en Santo Cristo de Cabrilla', when: D(29, 9), text: t('het najaarsfeest van het dorp.', 'the village’s autumn fiesta.', 'das Herbstfest des Dorfes.', 'byns höstfest.') },
  ],
  sources: ['https://es.wikipedia.org/wiki/Alfarnatejo'],
};
export default f;
