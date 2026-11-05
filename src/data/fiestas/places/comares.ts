import { t, D, N, type PlaceFiestas } from '../types';

const f: PlaceFiestas = {
  intro: t(
    'Comares, het “balkon van de Axarquía”, viert zijn beschermheilige San Hilario twee keer: op zijn naamdag in januari en met de grote patroonsfeesten in augustus, waar de verdiales niet ontbreken.',
    'Comares, the “balcony of the Axarquía”, celebrates its patron San Hilario twice: on his feast day in January and with the big patron saint’s fiesta in August, where verdiales music is never missing.',
    'Comares, der „Balkon der Axarquía“, feiert seinen Schutzpatron San Hilario zweimal: an seinem Namenstag im Januar und mit dem großen Patronatsfest im August, bei dem die Verdiales nie fehlen.',
    'Comares, ”Axarquías balkong”, firar sitt skyddshelgon San Hilario två gånger: på hans dag i januari och med den stora skyddshelgonfesten i augusti, där verdiales alltid finns med.',
  ),
  events: [
    { name: 'San Hilario', when: D(13, 1), text: t('feest van de beschermheilige.', 'the patron saint’s day.', 'Fest des Schutzpatrons.', 'skyddshelgonets dag.') },
    { name: 'Fiestas patronales', when: N(-2, 'weekend', 8), highlight: true, kind: 'feria', text: t('het zomerfeest met een processie van San Hilario en verdiales.', 'the summer fiesta, with a procession of San Hilario and verdiales music.', 'das Sommerfest mit einer Prozession des San Hilario und Verdiales.', 'sommarfesten, med procession för San Hilario och verdiales.') },
  ],
  sources: ['https://es.wikipedia.org/wiki/Comares', 'https://www.festivalesdeespana.com/festival/fiestas-patronales-comares'],
};
export default f;
