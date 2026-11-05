import { t, M, P, N, type PlaceFiestas } from '../types';

const f: PlaceFiestas = {
  intro: t(
    'Canillas de Aceituno, aan de voet van La Maroma, is in de hele streek bekend om één dag: de Día de la Morcilla in april, als het dorp zijn bloedworst uitdeelt aan duizenden bezoekers.',
    'Canillas de Aceituno, at the foot of La Maroma, is known across the area for one day: the Día de la Morcilla in April, when the village hands out its black pudding to thousands of visitors.',
    'Canillas de Aceituno am Fuß der Maroma ist in der ganzen Gegend für einen Tag bekannt: den Día de la Morcilla im April, wenn das Dorf seine Blutwurst an Tausende Besucher verteilt.',
    'Canillas de Aceituno vid foten av La Maroma är känt i hela trakten för en dag: Día de la Morcilla i april, då byn delar ut sin blodkorv till tusentals besökare.',
  ),
  events: [
    { name: 'Día de la Morcilla', when: N(-1, 'sunday', 4), highlight: true, text: t('bloedworst voor iedereen, tijdens het feest van de Virgen de la Cabeza.', 'black pudding for everyone, during the fiesta of the Virgen de la Cabeza.', 'Blutwurst für alle, während des Festes der Virgen de la Cabeza.', 'blodkorv åt alla, under festen för Virgen de la Cabeza.') },
    { name: 'Romería de San Isidro', when: P('mid', 5), kind: 'romeria', text: t('bedevaart met versierde wagens het land in.', 'a pilgrimage with decorated carts into the countryside.', 'Wallfahrt mit geschmückten Wagen hinaus aufs Land.', 'vallfärd med smyckade vagnar ut på landet.') },
    { name: 'Feria de agosto', when: M(8), kind: 'feria', text: t('het zomerfeest van het dorp.', 'the village’s summer fair.', 'das Sommerfest des Dorfes.', 'byns sommarfest.') },
  ],
  sources: ['https://es.wikipedia.org/wiki/Canillas_de_Aceituno'],
};
export default f;
