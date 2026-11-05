import { t, P, N, W, type PlaceFiestas } from '../types';

const f: PlaceFiestas = {
  intro: t(
    'Benamocarra viert in mei San Isidro en heeft in oktober zijn grootste feest, vier dagen ter ere van de Cristo de la Salud.',
    'Benamocarra celebrates San Isidro in May, and its biggest fiesta comes in October: four days in honour of the Cristo de la Salud.',
    'Benamocarra feiert im Mai San Isidro; das größte Fest folgt im Oktober: vier Tage zu Ehren des Cristo de la Salud.',
    'Benamocarra firar San Isidro i maj, och den största festen kommer i oktober: fyra dagar till ära för Cristo de la Salud.',
  ),
  events: [
    { name: 'San Isidro', when: W(5, t('zondag rond 15 mei', 'the Sunday around 15 May', 'Sonntag um den 15. Mai', 'söndagen kring 15 maj')), text: t('feest van de patroon van de boeren.', 'the feast of the farmers’ patron saint.', 'Fest des Schutzpatrons der Bauern.', 'böndernas skyddshelgons dag.') },
    { name: 'Romería de San Isidro', when: P('end', 5), kind: 'romeria', text: t('bedevaart met versierde wagens het land in.', 'a pilgrimage with decorated carts into the countryside.', 'Wallfahrt mit geschmückten Wagen hinaus aufs Land.', 'vallfärd med smyckade vagnar ut på landet.') },
    { name: 'Cristo de la Salud', when: N(-2, 'weekend', 10), highlight: true, kind: 'feria', text: t('vier dagen feest met processie, muziek en kermis.', 'four days of fiesta with a procession, music and a funfair.', 'vier Tage Fest mit Prozession, Musik und Jahrmarkt.', 'fyra dagars fest med procession, musik och tivoli.') },
  ],
  sources: ['https://es.wikipedia.org/wiki/Benamocarra'],
};
export default f;
