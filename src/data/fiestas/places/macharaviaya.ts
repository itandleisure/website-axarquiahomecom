import { t, D, N, type PlaceFiestas } from '../types';

const f: PlaceFiestas = {
  intro: t(
    'Macharaviaya viert als enige dorp in Spanje 4 juli, de Amerikaanse onafhankelijkheidsdag. Dat komt door Bernardo de Gálvez, zoon van het dorp, die de Amerikanen in hun onafhankelijkheidsoorlog hielp.',
    'Macharaviaya is the only village in Spain to celebrate the Fourth of July, American Independence Day. That is down to Bernardo de Gálvez, a son of the village, who helped the Americans in their War of Independence.',
    'Macharaviaya feiert als einziges Dorf Spaniens den 4. Juli, den amerikanischen Unabhängigkeitstag. Das liegt an Bernardo de Gálvez, einem Sohn des Dorfes, der den Amerikanern im Unabhängigkeitskrieg half.',
    'Macharaviaya är den enda byn i Spanien som firar 4 juli, USA:s självständighetsdag. Det beror på Bernardo de Gálvez, en son till byn, som hjälpte amerikanerna i deras frihetskrig.',
  ),
  events: [
    { name: { nl: '4 juli', en: 'Fourth of July', de: '4. Juli', sv: '4 juli' }, when: D(4, 7), highlight: true, text: t(
      'Amerikaanse onafhankelijkheidsdag, met een naspel van de slag bij Pensacola, meestal op de zaterdag ervoor of erna.',
      'American Independence Day, with a re-enactment of the Battle of Pensacola, usually on the Saturday before or after.',
      'amerikanischer Unabhängigkeitstag, mit einer Nachstellung der Schlacht von Pensacola, meist am Samstag davor oder danach.',
      'USA:s självständighetsdag, med en återskapning av slaget vid Pensacola, oftast lördagen före eller efter.',
    ) },
    { name: 'San Bernardo', when: N(1, 'weekend', 8), kind: 'feria', text: t('het zomerfeest van het dorp.', 'the village’s summer fiesta.', 'das Sommerfest des Dorfes.', 'byns sommarfest.') },
    { name: 'Virgen del Rosario', when: N(1, 'weekend', 9), text: t('feest van de beschermheilige.', 'the patron saint’s fiesta.', 'Fest der Schutzpatronin.', 'skyddshelgonets fest.') },
    { name: 'Pastorales de Benaque', when: N(1, 'sunday', 12), text: t('kerstliederen in Benaque ter ere van de dichter Salvador Rueda.', 'Christmas carols in Benaque in honour of the poet Salvador Rueda.', 'Weihnachtslieder in Benaque zu Ehren des Dichters Salvador Rueda.', 'julsånger i Benaque till ära för poeten Salvador Rueda.') },
  ],
  sources: ['https://es.wikipedia.org/wiki/Macharaviaya'],
};
export default f;
