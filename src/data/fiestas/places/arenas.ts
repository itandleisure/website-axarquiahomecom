import { t, D, E, N, type PlaceFiestas } from '../types';

const f: PlaceFiestas = {
  intro: t(
    'Arenas ligt onder het kasteel van Bentomiz. Het dorp heeft een opvallend rijke Semana Santa voor zijn grootte, een feria in augustus en in oktober een feest rond de muilezel.',
    'Arenas lies below Bentomiz castle. For its size the village has a notably rich Semana Santa, an August fair and, in October, a fiesta around the mule.',
    'Arenas liegt unterhalb der Burg Bentomiz. Für seine Größe hat das Dorf eine bemerkenswert reiche Semana Santa, eine Feria im August und im Oktober ein Fest rund um das Maultier.',
    'Arenas ligger nedanför borgen Bentomiz. Byn har för sin storlek en ovanligt rik Semana Santa, en feria i augusti och i oktober en fest kring mulåsnan.',
  ),
  events: [
    { name: 'Semana Santa', when: E('holy-week'), kind: 'semana-santa', text: t('vier processies door het dorp.', 'four processions through the village.', 'vier Prozessionen durch das Dorf.', 'fyra processioner genom byn.') },
    { name: 'Feria de agosto', when: N(2, 'weekend', 8), kind: 'feria', text: t('het zomerfeest van het dorp.', 'the village’s summer fair.', 'das Sommerfest des Dorfes.', 'byns sommarfest.') },
    { name: 'Feria de la Mula', when: D(12, 10), highlight: true, text: t('feest rond de muilezel, het oude werkdier van de streek, waarmee bezoekers nog naar Bentomiz kunnen rijden.', 'a fiesta around the mule, the area’s old working animal, on which visitors can still ride up to Bentomiz.', 'Fest rund um das Maultier, das alte Arbeitstier der Gegend, mit dem Besucher noch nach Bentomiz reiten können.', 'fest kring mulåsnan, traktens gamla arbetsdjur, som besökare fortfarande kan rida upp till Bentomiz på.') },
  ],
  sources: ['https://es.wikipedia.org/wiki/Arenas_(Málaga)'],
};
export default f;
