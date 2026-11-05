import { t, D, E, M, N, W, type PlaceFiestas } from '../types';

const f: PlaceFiestas = {
  intro: t(
    'Nerja heeft twee grote feestmomenten: de Virgen del Carmen in juli, als de beschermheilige van de vissers over zee wordt gevaren, en de feria in oktober. Daartussen zijn er San Juan op het strand, de feria van Maro en Halloween.',
    'Nerja has two big fiesta moments: the Virgen del Carmen in July, when the fishermen’s patron saint is carried by boat, and the October fair. In between come San Juan on the beach, the Maro fair and Halloween.',
    'Nerja hat zwei große Festmomente: die Virgen del Carmen im Juli, wenn die Schutzpatronin der Fischer übers Meer gefahren wird, und die Feria im Oktober. Dazwischen gibt es San Juan am Strand, die Feria von Maro und Halloween.',
    'Nerja har två stora festtillfällen: Virgen del Carmen i juli, då fiskarnas skyddshelgon förs över havet, och ferian i oktober. Däremellan finns San Juan på stranden, ferian i Maro och halloween.',
  ),
  events: [
    { name: 'Carnaval', when: M(2), kind: 'carnaval', text: t('optocht en verkleedwedstrijden.', 'a parade and fancy-dress contests.', 'Umzug und Kostümwettbewerbe.', 'parad och maskeradtävlingar.') },
    { name: 'Semana Santa', when: E('holy-week'), kind: 'semana-santa', text: t('processies door het oude centrum.', 'processions through the old town.', 'Prozessionen durch die Altstadt.', 'processioner genom gamla stan.') },
    { name: 'Romería de San Isidro', when: D(15, 5), kind: 'romeria', text: t('met versierde karren en paarden naar de kapel van San Isidro bij de grotten, met een misa rociera.', 'decorated carts and horses go to the San Isidro chapel near the caves, with a misa rociera.', 'mit geschmückten Wagen und Pferden zur Kapelle San Isidro bei den Höhlen, mit einer Misa Rociera.', 'smyckade vagnar och hästar drar till San Isidros kapell vid grottorna, med en misa rociera.') },
    { name: 'Noche de San Juan', when: D(23, 6), kind: 'san-juan', text: t('op het strand van Burriana: concert, het verbranden van de <em>jua</em> en om middernacht vuurwerk.', 'on Burriana beach: a concert, the burning of the <em>jua</em> and fireworks at midnight.', 'am Strand von Burriana: Konzert, Verbrennung der <em>Jua</em> und um Mitternacht Feuerwerk.', 'på Burrianastranden: konsert, bränningen av <em>jua</em> och fyrverkeri vid midnatt.') },
    { name: 'Virgen del Carmen', when: W(7, t('15 tot 17 juli', '15–17 July', '15. bis 17. Juli', '15–17 juli')), highlight: true, text: t(
      'de beschermheilige van de vissers gaat op 16 juli in processie en per boot naar het strand van Calahonda.',
      'on 16 July the fishermen’s patron saint is carried in procession and by boat to Calahonda beach.',
      'am 16. Juli wird die Schutzpatronin der Fischer in einer Prozession und per Boot zum Strand von Calahonda gebracht.',
      'den 16 juli bärs fiskarnas skyddshelgon i procession och med båt till Calahondastranden.',
    ) },
    { name: 'Feria de las Maravillas (Maro)', when: W(9, t('rond 8 september', 'around 8 September', 'um den 8. September', 'kring 8 september')), kind: 'feria', text: t('het feest van Maro, met een processie, de Día del Choto, ruiterwedstrijden en vuurwerk.', 'Maro’s fiesta, with a procession, the Día del Choto, horseback contests and fireworks.', 'das Fest von Maro, mit Prozession, Día del Choto, Reiterwettbewerben und Feuerwerk.', 'Maros fest, med procession, Día del Choto, ryttartävlingar och fyrverkeri.') },
    { name: 'Feria de Nerja', when: N(2, 'week', 10), highlight: true, kind: 'feria', text: t('de grote feria, meestal van 8 tot 12 of 13 oktober, met kermis, concerten en de verkiezing van de feriakoningin.', 'the big fair, usually from 8 to 12 or 13 October, with a funfair, concerts and the election of the fair queen.', 'die große Feria, meist vom 8. bis 12. oder 13. Oktober, mit Jahrmarkt, Konzerten und der Wahl der Feria-Königin.', 'den stora ferian, oftast 8–12 eller 13 oktober, med tivoli, konserter och val av feriadrottning.') },
    { name: 'Maroween', when: D(31, 10), kind: 'halloween', text: t('in Maro samen met het feest van de kastanje en de zoete aardappel: optocht, verkleedwedstrijd, geroosterde kastanjes en livemuziek.', 'in Maro, combined with the chestnut and sweet potato festival: a parade, fancy-dress contest, roasted chestnuts and live music.', 'in Maro, zusammen mit dem Fest der Kastanie und der Süßkartoffel: Umzug, Kostümwettbewerb, geröstete Kastanien und Livemusik.', 'i Maro, ihop med kastanj- och sötpotatisfesten: parad, maskeradtävling, rostade kastanjer och livemusik.') },
  ],
  sources: [
    'https://es.wikipedia.org/wiki/Nerja',
    'https://www.festivalesdeespana.com/festival/noche-de-san-juan-nerja',
    'https://www.festivalesdeespana.com/festival/feria-de-las-maravillas-de-maro-nerja/2025',
    'https://euroweeklynews.com/2026/10/30/halloween-plans-change-axarquia-and-costa-tropical-events-moved/',
  ],
};
export default f;
