import { t, D, M, N, type PlaceFiestas } from '../types';

const f: PlaceFiestas = {
  intro: t(
    'Moclinejo is een wijndorp. Het grootste feest is de Fiesta de Viñeros in september, als de wijnboeren de oogst vieren met muziek en wijn.',
    'Moclinejo is a wine village. Its biggest fiesta is the Fiesta de Viñeros in September, when the winegrowers celebrate the harvest with music and wine.',
    'Moclinejo ist ein Weindorf. Das größte Fest ist die Fiesta de Viñeros im September, wenn die Winzer die Ernte mit Musik und Wein feiern.',
    'Moclinejo är en vinby. Den största festen är Fiesta de Viñeros i september, då vinodlarna firar skörden med musik och vin.',
  ),
  events: [
    { name: { nl: 'Driekoningen', en: 'Three Kings', de: 'Heilige Drei Könige', sv: 'Trettondagsafton' }, when: D(5, 1), text: t('optocht van de koningen met snoep voor de kinderen.', 'the Three Kings’ parade with sweets for the children.', 'Umzug der Heiligen Drei Könige mit Süßigkeiten für die Kinder.', 'de tre vise männens parad med godis till barnen.') },
    { name: 'Carnaval', when: M(2), kind: 'carnaval', text: t('verkleden en optocht.', 'fancy dress and a parade.', 'Verkleidung und Umzug.', 'utklädnad och parad.') },
    { name: 'Feria de agosto', when: M(8), kind: 'feria', text: t('het zomerfeest van het dorp.', 'the village’s summer fair.', 'das Sommerfest des Dorfes.', 'byns sommarfest.') },
    { name: 'Fiesta de Viñeros', when: N(2, 'sunday', 9), highlight: true, text: t('feest van de wijnboeren, met wijn, verdiales en traditioneel eten.', 'the winegrowers’ festival, with wine, verdiales and traditional food.', 'Fest der Winzer, mit Wein, Verdiales und traditionellem Essen.', 'vinodlarnas fest, med vin, verdiales och traditionell mat.') },
  ],
  sources: ['https://es.wikipedia.org/wiki/Moclinejo', 'https://andaluciamia.com/en/calendar-of-ferias-in-andalucia-costa-del-sol-axarquia-nerja'],
};
export default f;
