import { t, D, N, W, type PlaceFiestas } from '../types';

const f: PlaceFiestas = {
  intro: t(
    'Salares heeft een minaret en een Romeinse brug, en viert dat verleden in september met een Arabisch-Andalusisch festival. Daarvoor komen San Antón, de romería in mei en Santa Ana in juli.',
    'Salares has a minaret and a Roman bridge, and celebrates that past in September with an Arab-Andalusian festival. Before that come San Antón, the May romería and Santa Ana in July.',
    'Salares hat ein Minarett und eine Römerbrücke und feiert diese Vergangenheit im September mit einem arabisch-andalusischen Festival. Davor gibt es San Antón, die Romería im Mai und Santa Ana im Juli.',
    'Salares har en minaret och en romersk bro, och firar det förflutna i september med en arabisk-andalusisk festival. Dessförinnan kommer San Antón, romerían i maj och Santa Ana i juli.',
  ),
  events: [
    { name: 'San Antón', when: D(17, 1), text: t('feest van de heilige van de dieren.', 'the feast of the patron saint of animals.', 'Fest des Schutzheiligen der Tiere.', 'djurens skyddshelgons dag.') },
    { name: 'Romería Virgen de Fátima', when: N(1, 'sunday', 5), kind: 'romeria', text: t('bedevaart het land in.', 'a pilgrimage into the countryside.', 'Wallfahrt hinaus aufs Land.', 'vallfärd ut på landet.') },
    { name: 'Santa Ana', when: D(26, 7), kind: 'feria', text: t('het zomerfeest van het dorp.', 'the village’s summer fiesta.', 'das Sommerfest des Dorfes.', 'byns sommarfest.') },
    { name: 'Festival Árabe Andalusí', when: W(9, t('rond 20 tot 22 september', 'around 20–22 September', 'um den 20. bis 22. September', 'kring 20–22 september')), highlight: true, text: t('markt, muziek en eten rond het Moorse verleden van het dorp.', 'a market, music and food celebrating the village’s Moorish past.', 'Markt, Musik und Essen rund um die maurische Vergangenheit des Dorfes.', 'marknad, musik och mat kring byns moriska förflutna.') },
  ],
  sources: ['https://es.wikipedia.org/wiki/Salares'],
};
export default f;
