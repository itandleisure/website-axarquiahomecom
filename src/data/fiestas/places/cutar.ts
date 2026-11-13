import { t, P, W, type PlaceFiestas } from '../types';

const f: PlaceFiestas = {
  intro: t(
    'Cútar is een klein dorp met Moorse wortels. Die geschiedenis komt in oktober tot leven tijdens de Fiesta del Monfí, met muziek, markt en proeverijen.',
    'Cútar is a small village with Moorish roots. That history comes to life in October during the Fiesta del Monfí, with music, a market and tastings.',
    'Cútar ist ein kleines Dorf mit maurischen Wurzeln. Diese Geschichte wird im Oktober beim Fiesta del Monfí lebendig, mit Musik, Markt und Verkostungen.',
    'Cútar är en liten by med moriska rötter. Den historien väcks till liv i oktober under Fiesta del Monfí, med musik, marknad och provsmakning.',
  ),
  events: [
    { name: 'Nuestra Señora de la Milagrosa', when: P('end', 7), text: t('feest in de buurtschap Salto del Negro.', 'a fiesta in the hamlet of Salto del Negro.', 'Fest im Weiler Salto del Negro.', 'fest i byn Salto del Negro.') },
    { name: 'San Roque', when: W(8, t('weekend rond 17 augustus', 'the weekend around 17 August', 'Wochenende um den 17. August', 'helgen kring 17 augusti')), kind: 'feria', text: t('het zomerfeest van het dorp.', 'the village’s summer fiesta.', 'das Sommerfest des Dorfes.', 'byns sommarfest.') },
    { name: 'Fiesta del Monfí', when: P('mid', 10), highlight: true, text: t(
      'feest rond het Moorse verleden, met flamenco, Sefardische muziek, een markt, workshops en proeverijen.',
      'a celebration of the Moorish past, with flamenco, Sephardic music, a market, workshops and tastings.',
      'Fest rund um die maurische Vergangenheit, mit Flamenco, sephardischer Musik, Markt, Workshops und Verkostungen.',
      'fest kring det moriska förflutna, med flamenco, sefardisk musik, marknad, workshoppar och provsmakning.',
    ) },
  ],
  sources: ['https://es.wikipedia.org/wiki/Cútar', 'https://mivelezmalaga.com/whats-on/whats-on-october-axarquia/'],
};
export default f;
