import { t, D, D2, M, P, N, type PlaceFiestas } from '../types';

const f: PlaceFiestas = {
  intro: t(
    'Canillas de Albaida is een wijndorp in de bergen. De feesten volgen het boerenjaar, van de gebeden na de aardbeving van 1884 tot de kaarsen bij de boerderijen als de druivenoogst klaar is.',
    'Canillas de Albaida is a wine village in the mountains. Its fiestas follow the farming year, from the prayers after the 1884 earthquake to the candles at the farmhouses when the grape harvest is in.',
    'Canillas de Albaida ist ein Weindorf in den Bergen. Die Feste folgen dem bäuerlichen Jahr, von den Gebeten nach dem Erdbeben von 1884 bis zu den Kerzen an den Höfen nach der Weinlese.',
    'Canillas de Albaida är en vinby i bergen. Festerna följer bondeåret, från bönerna efter jordbävningen 1884 till ljusen vid gårdarna när vinskörden är klar.',
  ),
  events: [
    { name: 'San Antón', when: P('mid', 1), text: t('feest van de heilige van de dieren.', 'the feast of the patron saint of animals.', 'Fest des Schutzheiligen der Tiere.', 'djurens skyddshelgons dag.') },
    { name: 'Virgen de las Salves', when: M(2), text: t('herdenking van de gebeden na de aardbeving van 1884.', 'remembering the prayers said after the 1884 earthquake.', 'Gedenken an die Gebete nach dem Erdbeben von 1884.', 'minne av bönerna efter jordbävningen 1884.') },
    { name: 'San Juan', when: D(24, 6), kind: 'san-juan', text: t('het dorp trekt erop uit voor een picknick op het land.', 'the village heads out for a picnic in the countryside.', 'das Dorf zieht zum Picknick aufs Land.', 'byn ger sig ut på picknick på landet.') },
    { name: 'Feria Virgen del Rosario', when: N(1, 'week', 8), highlight: true, kind: 'feria', text: t('het zomerfeest ter ere van de beschermheilige.', 'the summer fair in honour of the patron saint.', 'das Sommerfest zu Ehren der Schutzpatronin.', 'sommarfesten till skyddshelgonets ära.') },
    { name: 'Candelarias', when: D2(7, 8, 9), text: t('kaarsen en vuren bij de boerderijen aan het einde van de druivenoogst.', 'candles and fires at the farmhouses at the end of the grape harvest.', 'Kerzen und Feuer an den Höfen zum Ende der Weinlese.', 'ljus och eldar vid gårdarna när vinskörden är slut.') },
  ],
  sources: ['https://es.wikipedia.org/wiki/Canillas_de_Albaida'],
};
export default f;
