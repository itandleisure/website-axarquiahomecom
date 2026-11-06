import { t, D2, N, type PlaceFiestas } from '../types';

const f: PlaceFiestas = {
  intro: t(
    'Colmenar, de poort van de Axarquía richting Málaga, begint het jaar met de Candelaria en San Blas en sluit af met een feest van jonge wijn en worst in december, in de tijd van de traditionele slacht.',
    'Colmenar, the gateway to the Axarquía from Málaga, starts the year with the Candelaria and San Blas and ends it with a festival of young wine and cured meats in December, the traditional pig-killing season.',
    'Colmenar, das Tor zur Axarquía von Málaga aus, beginnt das Jahr mit Candelaria und San Blas und beendet es im Dezember, zur Zeit der traditionellen Schlachtung, mit einem Fest aus jungem Wein und Wurst.',
    'Colmenar, porten till Axarquía från Málaga, börjar året med Candelaria och San Blas och avslutar det i december med en fest för ungt vin och korv, under den traditionella slaktsäsongen.',
  ),
  events: [
    { name: 'Virgen de la Candelaria y San Blas', when: D2(2, 3, 2), text: t('feest van de beschermheiligen, met processies en vuurwerk, vanaf eind januari.', 'the patron saints’ fiesta, with processions and fireworks, starting in late January.', 'Fest der Schutzheiligen mit Prozessionen und Feuerwerk, ab Ende Januar.', 'skyddshelgonens fest med processioner och fyrverkerier, från slutet av januari.') },
    { name: 'Feria de agosto', when: N(2, 'week', 8), kind: 'feria', text: t('vier dagen zomerfeest.', 'four days of summer fair.', 'vier Tage Sommerfest.', 'fyra dagars sommarfest.') },
    { name: 'Fiesta del Mosto y la Chacina', when: N(2, 'sunday', 12), highlight: true, text: t('proeverij van jonge wijn (<em>mosto</em>) en lokale vleeswaren.', 'tastings of young wine (<em>mosto</em>) and local cured meats.', 'Verkostung von jungem Wein (<em>Mosto</em>) und Wurstwaren aus dem Ort.', 'provsmakning av ungt vin (<em>mosto</em>) och lokala charkuterier.') },
  ],
  sources: ['https://es.wikipedia.org/wiki/Colmenar_(Málaga)', 'https://www.festivalesdeespana.com/festival/fiestas-patronales-virgen-candelaria-san-blas-colmenar'],
};
export default f;
