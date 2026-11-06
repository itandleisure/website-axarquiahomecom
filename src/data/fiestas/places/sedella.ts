import { t, E, N, W, type PlaceFiestas } from '../types';

const f: PlaceFiestas = {
  intro: t(
    'Sedella is een stil bergdorp onder La Maroma met oude gebruiken: in de Goede Week klinken er ratels in plaats van klokken, en met Corpus Christi staan er altaren in de straten.',
    'Sedella is a quiet mountain village below La Maroma with old customs: in Holy Week wooden rattles replace the bells, and at Corpus Christi altars stand in the streets.',
    'Sedella ist ein stilles Bergdorf unterhalb der Maroma mit alten Bräuchen: In der Karwoche erklingen Ratschen statt Glocken, und zu Fronleichnam stehen Altäre in den Straßen.',
    'Sedella är en lugn bergsby nedanför La Maroma med gamla seder: under påskveckan hörs skallror i stället för klockor, och vid Corpus Christi står altare på gatorna.',
  ),
  events: [
    { name: 'San Antón', when: W(1, t('weekend rond 17 januari', 'the weekend around 17 January', 'Wochenende um den 17. Januar', 'helgen kring 17 januari')), text: t('feest van de heilige van de dieren.', 'the feast of the patron saint of animals.', 'Fest des Schutzheiligen der Tiere.', 'djurens skyddshelgons dag.') },
    { name: 'Semana Santa', when: E('holy-week'), kind: 'semana-santa', text: t('ratels in plaats van klokken, een oud gebruik van het dorp.', 'wooden rattles instead of bells, an old village custom.', 'Ratschen statt Glocken, ein alter Brauch des Dorfes.', 'skallror i stället för klockor, en gammal sed i byn.') },
    { name: 'Corpus Christi', when: W(6, t('mei of juni', 'May or June', 'Mai oder Juni', 'maj eller juni')), text: t('versierde altaren in de straten langs de processie.', 'decorated altars in the streets along the procession route.', 'geschmückte Altäre entlang des Prozessionswegs.', 'smyckade altare längs processionsvägen.') },
    { name: 'Feria Virgen de la Esperanza Coronada', when: N(1, 'weekend', 8), highlight: true, kind: 'feria', text: t('het zomerfeest ter ere van de beschermheilige.', 'the summer fair in honour of the patron saint.', 'das Sommerfest zu Ehren der Schutzpatronin.', 'sommarfesten till skyddshelgonets ära.') },
  ],
  sources: ['https://es.wikipedia.org/wiki/Sedella'],
};
export default f;
