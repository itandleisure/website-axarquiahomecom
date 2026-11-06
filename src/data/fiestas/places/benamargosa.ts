import { t, D, M, W, type PlaceFiestas } from '../types';

const f: PlaceFiestas = {
  intro: t(
    'Benamargosa ligt aan de rivier met dezelfde naam, tussen de avocado- en mangoboomgaarden. Het hoogtepunt is de romería in het voorjaar, als het dorp een nacht aan de rivier doorbrengt.',
    'Benamargosa lies on the river of the same name, among avocado and mango orchards. The highlight is the spring romería, when the village spends a night by the river.',
    'Benamargosa liegt am gleichnamigen Fluss zwischen Avocado- und Mangoplantagen. Höhepunkt ist die Romería im Frühjahr, wenn das Dorf eine Nacht am Fluss verbringt.',
    'Benamargosa ligger vid floden med samma namn, bland avokado- och mangoodlingar. Höjdpunkten är vårens romería, då byn tillbringar en natt vid floden.',
  ),
  events: [
    { name: 'San Sebastián', when: D(20, 1), text: t('feest van de beschermheilige.', 'the patron saint’s day.', 'Fest des Schutzpatrons.', 'skyddshelgonets dag.') },
    { name: 'Feria del Campo', when: W(4, t('een zondag in april', 'a Sunday in April', 'ein Sonntag im April', 'en söndag i april')), text: t('een dag op het land, met eten en muziek.', 'a day in the countryside with food and music.', 'ein Tag auf dem Land mit Essen und Musik.', 'en dag på landet med mat och musik.') },
    { name: 'Romería de la Purísima', when: W(5.5, t('eind mei of begin juni', 'late May or early June', 'Ende Mai oder Anfang Juni', 'slutet av maj eller början av juni')), highlight: true, kind: 'romeria', text: t('bedevaart naar de rivier, waar het dorp een nacht blijft met muziek en eten.', 'a pilgrimage to the river, where the village stays the night with music and food.', 'Wallfahrt zum Fluss, wo das Dorf mit Musik und Essen übernachtet.', 'vallfärd till floden, där byn stannar över natten med musik och mat.') },
    { name: 'Feria de agosto', when: M(8), kind: 'feria', text: t('het zomerfeest, met ook een flamencofestival.', 'the summer fair, with a flamenco festival too.', 'das Sommerfest, auch mit einem Flamencofestival.', 'sommarfesten, även med en flamencofestival.') },
  ],
  sources: ['https://es.wikipedia.org/wiki/Benamargosa', 'https://andaluciamia.com/en/calendar-of-ferias-in-andalucia-costa-del-sol-axarquia-nerja'],
};
export default f;
