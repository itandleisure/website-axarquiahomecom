import { t, D, E, M, type PlaceFiestas } from '../types';

const f: PlaceFiestas = {
  intro: t(
    'Iznate is een klein muskaatdorp in de heuvels boven Vélez. Het hoofdfeest valt op een bijzondere dag: de Viernes de Dolores, de vrijdag vóór de Goede Week.',
    'Iznate is a small moscatel village in the hills above Vélez. Its main fiesta falls on an unusual day: Viernes de Dolores, the Friday before Holy Week.',
    'Iznate ist ein kleines Muskatellerdorf in den Hügeln oberhalb von Vélez. Das Hauptfest fällt auf einen besonderen Tag: den Viernes de Dolores, den Freitag vor der Karwoche.',
    'Iznate är en liten muskatby i kullarna ovanför Vélez. Huvudfesten infaller en speciell dag: Viernes de Dolores, fredagen före påskveckan.',
  ),
  events: [
    { name: 'Viernes de Dolores', when: E('dolores'), highlight: true, kind: 'semana-santa', text: t('het grootste feest van het dorp, ter ere van de Virgen de los Dolores.', 'the village’s biggest fiesta, in honour of the Virgen de los Dolores.', 'das größte Fest des Dorfes, zu Ehren der Virgen de los Dolores.', 'byns största fest, till ära för Virgen de los Dolores.') },
    { name: 'San Antonio de Padua', when: D(13, 6), text: t('feest van de heilige Antonius.', 'the feast of Saint Anthony.', 'Fest des heiligen Antonius.', 'den helige Antonius dag.') },
    { name: 'Día de la Uva Moscatel', when: M(8), text: t('feest van de muskaatdruif, met proeverijen.', 'a celebration of the moscatel grape, with tastings.', 'Fest der Muskatellertraube, mit Verkostungen.', 'muskatdruvans fest, med provsmakning.') },
  ],
  sources: ['https://es.wikipedia.org/wiki/Iznate', 'https://andaluciamia.com/en/calendar-of-ferias-in-andalucia-costa-del-sol-axarquia-nerja'],
};
export default f;
