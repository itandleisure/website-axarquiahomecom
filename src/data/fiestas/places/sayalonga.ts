import { t, D, P, N, type PlaceFiestas } from '../types';

const f: PlaceFiestas = {
  intro: t(
    'Sayalonga is het mispeldorp van de Axarquía. Op de eerste zondag van mei viert het de Día del Níspero, erkend als fiesta van toeristisch belang.',
    'Sayalonga is the loquat village of the Axarquía. On the first Sunday of May it holds the Día del Níspero, recognised as a fiesta of tourist interest.',
    'Sayalonga ist das Mispeldorf der Axarquía. Am ersten Sonntag im Mai feiert es den Día del Níspero, anerkannt als Fest von touristischem Interesse.',
    'Sayalonga är Axarquías mispelby. Första söndagen i maj firas Día del Níspero, erkänd som fest av turistiskt intresse.',
  ),
  events: [
    { name: 'Día del Níspero', when: N(1, 'sunday', 5), highlight: true, text: t('het dorp viert de mispeloogst met proeverijen, muziek en een markt.', 'the village celebrates the loquat harvest with tastings, music and a market.', 'das Dorf feiert die Mispelernte mit Verkostungen, Musik und Markt.', 'byn firar mispelskörden med provsmakning, musik och marknad.') },
    { name: 'Candelarias', when: D(7, 9), text: t('vuren en verlichting in het dorp.', 'bonfires and lights in the village.', 'Feuer und Beleuchtung im Dorf.', 'eldar och ljus i byn.') },
    { name: 'Romería Virgen del Rosario', when: D(7, 10), kind: 'romeria', text: t('feest van de beschermheilige van Sayalonga.', 'the fiesta of Sayalonga’s patron saint.', 'Fest der Schutzpatronin von Sayalonga.', 'Sayalongas skyddshelgons fest.') },
    { name: 'Romería de San Pedro (Corumbela)', when: P('end', 10), kind: 'romeria', text: t('het feest van het bergdorpje Corumbela.', 'the fiesta of the hill hamlet of Corumbela.', 'das Fest des Bergdorfs Corumbela.', 'festen i bergsbyn Corumbela.') },
  ],
  sources: ['https://es.wikipedia.org/wiki/Sayalonga'],
};
export default f;
