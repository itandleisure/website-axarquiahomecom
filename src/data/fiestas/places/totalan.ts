import { t, M, N, type PlaceFiestas } from '../types';

const f: PlaceFiestas = {
  intro: t(
    'Totalán is een klein dorp vlak bij Málaga. Het bekendste feest is de Fiesta de la Chanfaina eind november, rond het typische gerecht van het dorp.',
    'Totalán is a small village close to Málaga. Its best-known fiesta is the Fiesta de la Chanfaina in late November, built around the village’s signature dish.',
    'Totalán ist ein kleines Dorf nahe Málaga. Das bekannteste Fest ist die Fiesta de la Chanfaina Ende November, rund um das typische Gericht des Dorfes.',
    'Totalán är en liten by nära Málaga. Den mest kända festen är Fiesta de la Chanfaina i slutet av november, kring byns typiska rätt.',
  ),
  events: [
    { name: 'Fiestas de la Virgen del Rosario', when: N(-1, 'week', 5), kind: 'feria', text: t('de patroonsfeesten van het dorp.', 'the village’s patron saint’s fiesta.', 'das Patronatsfest des Dorfes.', 'byns skyddshelgonfest.') },
    { name: 'Fiesta de la Chanfaina', when: N(-1, 'sunday', 11), highlight: true, text: t('proeverij van <em>chanfaina</em>, een stoofpot van het dorp, met verdiales. Erkend als feest van provinciaal toeristisch belang.', 'tastings of <em>chanfaina</em>, the village stew, with verdiales. Recognised as a fiesta of provincial tourist interest.', 'Verkostung von <em>Chanfaina</em>, dem Eintopf des Dorfes, mit Verdiales. Als Fest von touristischem Interesse der Provinz anerkannt.', 'provsmakning av <em>chanfaina</em>, byns gryta, med verdiales. Erkänd som fest av turistiskt intresse i provinsen.') },
    { name: 'Belenes y pastorales', when: M(12), text: t('kerstliederen door het dorp en in de kerk van Santa Ana.', 'Christmas carols through the village and in the church of Santa Ana.', 'Weihnachtslieder im Dorf und in der Kirche Santa Ana.', 'julsånger i byn och i Santa Ana-kyrkan.') },
  ],
  sources: ['https://es.wikipedia.org/wiki/Totalán', 'https://www.festivalesdeespana.com/festival/fiestas-patronales-virgen-del-rosario-totalan'],
};
export default f;
