import { t, N, type PlaceFiestas } from '../types';

const f: PlaceFiestas = {
  intro: t(
    'Árchez telt een paar honderd inwoners. De feesten zijn klein en hartelijk: San Antón in de winter en de patroonsfeesten in augustus, met een ruiterwedstrijd door de straten.',
    'Árchez has a few hundred residents. Its fiestas are small and warm: San Antón in winter and the patron saint’s fiesta in August, with a horseback contest through the streets.',
    'Árchez hat einige hundert Einwohner. Die Feste sind klein und herzlich: San Antón im Winter und das Patronatsfest im August mit einem Reiterwettbewerb durch die Straßen.',
    'Árchez har några hundra invånare. Festerna är små och hjärtliga: San Antón på vintern och skyddshelgonfesten i augusti, med en ryttartävling genom gatorna.',
  ),
  events: [
    { name: 'San Antón', when: N(-1, 'sunday', 1), text: t('feest van de heilige van de dieren.', 'the feast of the patron saint of animals.', 'Fest des Schutzheiligen der Tiere.', 'djurens skyddshelgons dag.') },
    { name: 'Fiestas de Nuestra Señora de la Encarnación', when: N(2, 'week', 8), highlight: true, kind: 'feria', text: t(
      'de patroonsfeesten, met een <em>carrera de cintas</em> te paard, een processie en ’s avonds muziek op het plein.',
      'the patron saint’s fiesta, with a <em>carrera de cintas</em> on horseback, a procession and evening music on the square.',
      'das Patronatsfest mit einer <em>carrera de cintas</em> zu Pferd, einer Prozession und abends Musik auf dem Platz.',
      'skyddshelgonfesten, med <em>carrera de cintas</em> till häst, procession och musik på torget på kvällen.',
    ) },
  ],
  sources: ['https://es.wikipedia.org/wiki/Árchez', 'https://www.festivalesdeespana.com/festival/fiestas-patronales-virgen-encarnacion-archez'],
};
export default f;
