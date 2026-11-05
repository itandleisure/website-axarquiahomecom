import { t, D, E, M, R, type PlaceFiestas } from '../types';

const f: PlaceFiestas = {
  intro: t(
    'Rincón de la Victoria bestaat uit Rincón, La Cala del Moral, Benagalbón en Torre de Benagalbón, en elk heeft zijn eigen feria. De grootste momenten zijn de Virgen del Carmen in juli en de Virgen de la Victoria in september, met het feest van de boquerón.',
    'Rincón de la Victoria is made up of Rincón, La Cala del Moral, Benagalbón and Torre de Benagalbón, and each has its own fair. The biggest moments are the Virgen del Carmen in July and the Virgen de la Victoria in September, with the anchovy festival.',
    'Rincón de la Victoria besteht aus Rincón, La Cala del Moral, Benagalbón und Torre de Benagalbón, und jeder Ort hat seine eigene Feria. Die Höhepunkte sind die Virgen del Carmen im Juli und die Virgen de la Victoria im September, mit dem Fest des Boquerón.',
    'Rincón de la Victoria består av Rincón, La Cala del Moral, Benagalbón och Torre de Benagalbón, och var och en har sin egen feria. Höjdpunkterna är Virgen del Carmen i juli och Virgen de la Victoria i september, med ansjovisfesten.',
  ),
  events: [
    { name: 'Feria de Benagalbón', when: R(2, 2), kind: 'feria', text: t('feria ter ere van Nuestra Señora de la Candelaria.', 'a fair in honour of Nuestra Señora de la Candelaria.', 'Feria zu Ehren von Nuestra Señora de la Candelaria.', 'feria till ära för Nuestra Señora de la Candelaria.') },
    { name: 'Carnaval', when: M(2), kind: 'carnaval', text: t('optocht en verkleden langs de kust.', 'a parade and fancy dress along the coast.', 'Umzug und Verkleidung an der Küste.', 'parad och utklädnad längs kusten.') },
    { name: 'Semana Santa', when: E('holy-week'), kind: 'semana-santa', text: t('processies in Rincón en La Cala del Moral.', 'processions in Rincón and La Cala del Moral.', 'Prozessionen in Rincón und La Cala del Moral.', 'processioner i Rincón och La Cala del Moral.') },
    { name: 'Virgen del Carmen', when: D(16, 7), highlight: true, text: t(
      'de beschermheilige van de vissers gaat over het strand en per boot over zee. Rond deze dagen zijn ook de feria’s van Rincón en La Cala del Moral en de roeiwedstrijden met <em>jábegas</em>.',
      'the fishermen’s patron saint is carried across the beach and out to sea by boat. The fairs of Rincón and La Cala del Moral and the <em>jábega</em> rowing races take place around the same days.',
      'die Schutzpatronin der Fischer wird über den Strand und per Boot aufs Meer getragen. Um diese Tage finden auch die Ferias von Rincón und La Cala del Moral und die Ruderregatten mit <em>Jábegas</em> statt.',
      'fiskarnas skyddshelgon bärs över stranden och ut på havet med båt. Kring samma dagar hålls ferian i Rincón och La Cala del Moral och roddtävlingar med <em>jábegas</em>.',
    ) },
    { name: 'Feria de Torre de Benagalbón', when: M(8), kind: 'feria', text: t('het zomerfeest van Torre de Benagalbón.', 'the summer fair of Torre de Benagalbón.', 'das Sommerfest von Torre de Benagalbón.', 'sommarfesten i Torre de Benagalbón.') },
    { name: 'Virgen de la Victoria y Fiesta del Boquerón Victoriano', when: R(8, 9), highlight: true, text: t(
      'de feesten van de beschermheilige, met proeverijen van de bekende ansjovis van Rincón. In september is er in Benagalbón ook een verdiales-wedstrijd tot in de ochtend.',
      'the patron saint’s fiesta, with tastings of Rincón’s famous anchovies. In September Benagalbón also holds a verdiales contest that runs until morning.',
      'das Fest der Schutzpatronin, mit Verkostungen der berühmten Sardellen von Rincón. Im September gibt es in Benagalbón außerdem einen Verdiales-Wettbewerb bis in den Morgen.',
      'skyddshelgonets fest, med provsmakning av Rincóns kända ansjovis. I september hålls också en verdialestävling i Benagalbón som pågår till morgonen.',
    ) },
    { name: 'Halloween', when: D(31, 10), kind: 'halloween', text: t('de gemeente organiseert meestal activiteiten in Rincón, La Cala del Moral en Benagalbón.', 'the town hall usually organises activities in Rincón, La Cala del Moral and Benagalbón.', 'die Gemeinde organisiert meist Veranstaltungen in Rincón, La Cala del Moral und Benagalbón.', 'kommunen ordnar oftast aktiviteter i Rincón, La Cala del Moral och Benagalbón.') },
  ],
  sources: [
    'https://es.wikipedia.org/wiki/Rincón_de_la_Victoria',
    'https://turismoenrincon.es/sites/default/files/2025-09/recetario_boqueron_2025_21x21cm_open.pdf',
    'https://euroweeklynews.com/2026/10/30/halloween-plans-change-axarquia-and-costa-tropical-events-moved/',
  ],
};
export default f;
