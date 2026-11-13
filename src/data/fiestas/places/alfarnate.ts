import { t, M, W, type PlaceFiestas } from '../types';

const f: PlaceFiestas = {
  intro: t(
    'In Alfarnate, op de hoogvlakte in het noorden van de Axarquía, draait het feestjaar om de kersen: eerst de bloesem in het voorjaar, dan de oogst. In september speelt het dorp de strijd tussen Moren en christenen na.',
    'In Alfarnate, on the high plain in the north of the Axarquía, the fiesta year revolves around cherries: first the blossom in spring, then the harvest. In September the village re-enacts the battle between Moors and Christians.',
    'In Alfarnate, auf der Hochebene im Norden der Axarquía, dreht sich das Festjahr um die Kirschen: erst die Blüte im Frühjahr, dann die Ernte. Im September spielt das Dorf den Kampf zwischen Mauren und Christen nach.',
    'I Alfarnate, på högslätten i norra Axarquía, kretsar feståret kring körsbären: först blomningen på våren, sedan skörden. I september spelar byn upp striden mellan morer och kristna.',
  ),
  events: [
    { name: 'Sakura Alfarnate', when: W(4, t('voorjaar, als de kersen bloeien', 'spring, when the cherry trees blossom', 'im Frühjahr zur Kirschblüte', 'på våren när körsbärsträden blommar')), text: t('wandelingen en activiteiten tussen de bloeiende kersenbomen.', 'walks and activities among the blossoming cherry trees.', 'Wanderungen und Veranstaltungen zwischen blühenden Kirschbäumen.', 'promenader och aktiviteter bland blommande körsbärsträd.') },
    { name: 'Feria de San Antonio', when: M(6), kind: 'feria', text: t('een van de twee drukste feesten van het dorp, met een processie van de Virgen de Monsalud.', 'one of the village’s two busiest fiestas, with a procession of the Virgen de Monsalud.', 'eines der beiden größten Feste des Dorfes, mit einer Prozession der Virgen de Monsalud.', 'en av byns två största fester, med procession för Virgen de Monsalud.') },
    { name: 'Día de la Cereza', when: W(6, t('tijdens de kersenoogst, begin van de zomer', 'during the cherry harvest, early summer', 'zur Kirschernte im Frühsommer', 'under körsbärsskörden, försommaren')), text: t('het kersenfeest, sinds 2006, met proeverijen en verkoop van de oogst.', 'the cherry festival, held since 2006, with tastings and the new harvest for sale.', 'das Kirschfest, seit 2006, mit Verkostungen und Verkauf der Ernte.', 'körsbärsfesten sedan 2006, med provsmakning och försäljning av skörden.') },
    { name: 'Fiesta de septiembre', when: M(9), highlight: true, kind: 'feria', text: t('het najaarsfeest, met de Embajada de Moros y Cristianos: een opvoering van de strijd tussen Moren en christenen.', 'the autumn fiesta, with the Embajada de Moros y Cristianos, a staged battle between Moors and Christians.', 'das Herbstfest mit der Embajada de Moros y Cristianos, einem nachgespielten Kampf zwischen Mauren und Christen.', 'höstfesten med Embajada de Moros y Cristianos, en uppvisning av striden mellan morer och kristna.') },
  ],
  sources: ['https://es.wikipedia.org/wiki/Alfarnate', 'https://andaluciamia.com/en/calendar-of-ferias-in-andalucia-costa-del-sol-axarquia-nerja'],
};
export default f;
