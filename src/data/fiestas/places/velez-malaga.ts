import { t, D, E, M, N, P, W, type PlaceFiestas } from '../types';

const f: PlaceFiestas = {
  intro: t(
    'Vélez-Málaga is de hoofdstad van de Axarquía en heeft de belangrijkste Semana Santa van de streek, erkend als fiesta van nationaal toeristisch belang. In de zomer feest de kust: Torre del Mar en Caleta de Vélez met de Virgen del Carmen en de feria van Torre del Mar.',
    'Vélez-Málaga is the capital of the Axarquía and has the most important Semana Santa in the area, recognised as a fiesta of national tourist interest. In summer the coast takes over: Torre del Mar and Caleta de Vélez with the Virgen del Carmen and the Torre del Mar fair.',
    'Vélez-Málaga ist die Hauptstadt der Axarquía und hat die wichtigste Semana Santa der Gegend, als Fest von nationalem touristischem Interesse anerkannt. Im Sommer feiert die Küste: Torre del Mar und Caleta de Vélez mit der Virgen del Carmen und der Feria von Torre del Mar.',
    'Vélez-Málaga är Axarquías huvudort och har traktens viktigaste Semana Santa, erkänd som fest av nationellt turistiskt intresse. På sommaren tar kusten över: Torre del Mar och Caleta de Vélez med Virgen del Carmen och ferian i Torre del Mar.',
  ),
  events: [
    { name: 'Carnaval', when: M(2), kind: 'carnaval', text: t('optochten en verkleden, in Vélez en Torre del Mar.', 'parades and fancy dress, in Vélez and Torre del Mar.', 'Umzüge und Verkleidung, in Vélez und Torre del Mar.', 'parader och utklädnad, i Vélez och Torre del Mar.') },
    { name: 'Semana Santa', when: E('holy-week'), highlight: true, kind: 'semana-santa', text: t(
      'van Palmzondag tot Pasen trekken negentien broederschappen door de stad, met Witte Donderdag en Goede Vrijdag als hoogtepunten.',
      'from Palm Sunday to Easter nineteen brotherhoods process through the town, peaking on Maundy Thursday and Good Friday.',
      'von Palmsonntag bis Ostern ziehen neunzehn Bruderschaften durch die Stadt, mit Gründonnerstag und Karfreitag als Höhepunkten.',
      'från palmsöndagen till påsk tågar nitton brödraskap genom staden, med skärtorsdagen och långfredagen som höjdpunkter.',
    ) },
    { name: 'El Paso de Cajiz', when: E('good-friday'), kind: 'semana-santa', text: t('levend passiespel in het dorpje Cajiz.', 'a living passion play in the hamlet of Cajiz.', 'lebendiges Passionsspiel im Weiler Cajiz.', 'levande passionsspel i byn Cajiz.') },
    { name: 'Noche de San Juan', when: D(23, 6), kind: 'san-juan', text: t('op het strand van El Copo in Torre del Mar: het verbranden van de <em>júas</em>, sardines aan het spit en om middernacht vuurwerk.', 'on El Copo beach in Torre del Mar: the burning of the <em>júas</em>, sardine skewers and fireworks at midnight.', 'am Strand El Copo in Torre del Mar: Verbrennung der <em>Júas</em>, Sardinenspieße und um Mitternacht Feuerwerk.', 'på El Copo-stranden i Torre del Mar: bränningen av <em>júas</em>, sardiner på spett och fyrverkeri vid midnatt.') },
    { name: 'Virgen del Carmen', when: D(16, 7), text: t('processies over zee met versierde boten en vuurwerk in Torre del Mar en Caleta de Vélez.', 'sea processions with decorated boats and fireworks in Torre del Mar and Caleta de Vélez.', 'Seeprozessionen mit geschmückten Booten und Feuerwerk in Torre del Mar und Caleta de Vélez.', 'sjöprocessioner med smyckade båtar och fyrverkeri i Torre del Mar och Caleta de Vélez.') },
    { name: 'Feria de Torre del Mar', when: P('end', 7), kind: 'feria', text: t('vier of vijf dagen feria ter ere van Santiago en Santa Ana.', 'four or five days of fair in honour of Santiago and Santa Ana.', 'vier oder fünf Tage Feria zu Ehren von Santiago und Santa Ana.', 'fyra eller fem dagars feria till ära för Santiago och Santa Ana.') },
    { name: 'Real Feria de San Miguel', when: W(9.5, t('eind september, begin oktober', 'late September to early October', 'Ende September bis Anfang Oktober', 'slutet av september till början av oktober')), highlight: true, kind: 'feria', text: t('de grote feria van de stad: vijf dagen, van woensdag tot zondag.', 'the town’s big fair: five days, from Wednesday to Sunday.', 'die große Feria der Stadt: fünf Tage, von Mittwoch bis Sonntag.', 'stadens stora feria: fem dagar, från onsdag till söndag.') },
    { name: 'Halloween', when: D(31, 10), kind: 'halloween', text: t('de gemeente organiseert meestal een programma in Vélez, Torre del Mar en Caleta de Vélez.', 'the town hall usually organises a programme in Vélez, Torre del Mar and Caleta de Vélez.', 'die Gemeinde organisiert meist ein Programm in Vélez, Torre del Mar und Caleta de Vélez.', 'kommunen ordnar oftast ett program i Vélez, Torre del Mar och Caleta de Vélez.') },
    { name: 'Belén Viviente de Almayate', when: N(-1, 'weekend', 12), text: t('een levende kerststal in Almayate, met honderden figuranten.', 'a living nativity scene in Almayate, with hundreds of performers.', 'eine lebende Krippe in Almayate mit Hunderten Mitwirkenden.', 'en levande julkrubba i Almayate, med hundratals medverkande.') },
  ],
  sources: [
    'https://es.wikipedia.org/wiki/Vélez-Málaga',
    'https://www.festivalesdeespana.com/festival/noche-de-san-juan-nerja',
    'https://euroweeklynews.com/2026/10/30/halloween-plans-change-axarquia-and-costa-tropical-events-moved/',
  ],
};
export default f;
