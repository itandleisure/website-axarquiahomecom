import { t, D, E, M, P, type PlaceFiestas } from '../types';

const f: PlaceFiestas = {
  intro: t(
    'El Borge is het rozijnendorp van de Axarquía. In september viert het de Día de la Pasa, en eind oktober houdt het een eigen Noche de Ánimas: het Spaanse antwoord op Halloween, met een processie bij nacht.',
    'El Borge is the raisin village of the Axarquía. In September it holds the Día de la Pasa, and in late October its own Noche de Ánimas: the Spanish answer to Halloween, with a night-time procession.',
    'El Borge ist das Rosinendorf der Axarquía. Im September feiert es den Día de la Pasa, Ende Oktober eine eigene Noche de Ánimas: die spanische Antwort auf Halloween, mit einer nächtlichen Prozession.',
    'El Borge är Axarquías russinby. I september firas Día de la Pasa, och i slutet av oktober en egen Noche de Ánimas: det spanska svaret på halloween, med en procession i mörkret.',
  ),
  events: [
    { name: 'Carnaval', when: M(2), kind: 'carnaval', text: t('verkleden en optocht door het dorp.', 'fancy dress and a parade through the village.', 'Verkleidung und Umzug durch das Dorf.', 'utklädnad och parad genom byn.') },
    { name: 'Fiestas de San Gabriel', when: E('easter'), kind: 'feria', text: t('de patroonsfeesten, een paar dagen rond het paasweekend.', 'the patron saint’s fiesta, a few days around the Easter weekend.', 'das Patronatsfest, einige Tage um das Osterwochenende.', 'skyddshelgonfesten, några dagar kring påskhelgen.') },
    { name: 'San Marcos', when: D(25, 4), text: t('traditionele dag op het land.', 'a traditional day out in the countryside.', 'traditioneller Tag auf dem Land.', 'traditionell dag ute på landet.') },
    { name: 'Día de la Pasa', when: P('mid', 9), highlight: true, text: t('feest van de rozijn, het product van het dorp, met proeverijen en verdiales.', 'a celebration of the raisin, the village’s own product, with tastings and verdiales.', 'Fest der Rosine, des Erzeugnisses des Dorfes, mit Verkostungen und Verdiales.', 'russinets fest, byns egen produkt, med provsmakning och verdiales.') },
    { name: 'Noche de Ánimas', when: D(31, 10), kind: 'halloween', text: t(
      'een week vol activiteiten die eindigt met de processie van de Santa Compaña naar het kerkhof, door verlichte straten, met geroosterde kastanjes en zoete aardappelen.',
      'a week of activities ending with the Santa Compaña procession to the cemetery through lit-up streets, with roasted chestnuts and sweet potatoes.',
      'eine Woche voller Aktivitäten, die mit der Prozession der Santa Compaña zum Friedhof durch beleuchtete Straßen endet, mit gerösteten Kastanien und Süßkartoffeln.',
      'en vecka med aktiviteter som slutar med Santa Compañas procession till kyrkogården genom upplysta gator, med rostade kastanjer och sötpotatis.',
    ) },
  ],
  sources: ['https://es.wikipedia.org/wiki/El_Borge', 'https://www.festivalesdeespana.com/festival/dia-de-la-pasa-el-borge', 'https://www.andaluciamia.com/en/tours/el-borge-with-its-traditional-fiesta-ferias-san-gabriel-in-costa-del-sol/'],
};
export default f;
