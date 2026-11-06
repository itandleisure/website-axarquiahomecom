import { t, D, D2, N, type PlaceFiestas } from '../types';

const f: PlaceFiestas = {
  intro: t(
    'Alcaucín viert zijn beschermheilige in januari, trekt in mei de bergen in voor San Isidro en sluit het jaar af met het kastanjefeest, als de tamme kastanjes van de Sierra de Tejeda rijp zijn.',
    'Alcaucín honours its patron saint in January, heads into the mountains for San Isidro in May and ends the year with its chestnut festival, when the sweet chestnuts of the Sierra de Tejeda are ripe.',
    'Alcaucín feiert im Januar seinen Schutzpatron, zieht im Mai zu San Isidro in die Berge und beschließt das Jahr mit dem Kastanienfest, wenn die Esskastanien der Sierra de Tejeda reif sind.',
    'Alcaucín firar sitt skyddshelgon i januari, drar upp i bergen för San Isidro i maj och avslutar året med kastanjefesten, när ätkastanjerna i Sierra de Tejeda är mogna.',
  ),
  events: [
    { name: 'San Sebastián', when: D(20, 1), text: t('feest van de beschermheilige van het dorp.', 'the feast of the village’s patron saint.', 'Fest des Schutzpatrons des Dorfes.', 'byns skyddshelgons dag.') },
    { name: 'Romería de San Isidro', when: D(15, 5), kind: 'romeria', text: t('bedevaart naar het recreatiegebied El Alcázar in de bergen, met picknick.', 'a pilgrimage to the El Alcázar recreation area in the mountains, with a picnic.', 'Wallfahrt zum Erholungsgebiet El Alcázar in den Bergen, mit Picknick.', 'vallfärd till friluftsområdet El Alcázar i bergen, med picknick.') },
    { name: 'Feria de Puente Don Manuel', when: N(-1, 'weekend', 6), kind: 'feria', text: t('het zomerfeest van de kern Puente Don Manuel aan de weg naar Vélez.', 'the summer fair of Puente Don Manuel, the hamlet on the road to Vélez.', 'Sommerfest des Ortsteils Puente Don Manuel an der Straße nach Vélez.', 'sommarfesten i Puente Don Manuel, byn vid vägen mot Vélez.') },
    { name: 'Feria de Alcaucín', when: N(1, 'weekend', 8), kind: 'feria', text: t('vijf dagen dorpsfeest, met een flamencofestival.', 'five days of village fiesta, including a flamenco festival.', 'fünf Tage Dorffest, mit einem Flamencofestival.', 'fem dagars byfest, med en flamencofestival.') },
    { name: 'Candelarias', when: D2(7, 8, 9), text: t('vreugdevuren in het dorp aan het eind van de zomer.', 'bonfires in the village at the end of summer.', 'Freudenfeuer im Dorf zum Ende des Sommers.', 'brasor i byn när sommaren tar slut.') },
    { name: 'Fiesta de la Castaña', when: N(1, 'weekend', 11), highlight: true, kind: 'halloween', text: t(
      'op het plein worden honderden kilo’s kastanjes geroosterd. Het feest komt voort uit de oude gewoonte dat jongeren rond Allerzielen langs de huizen gingen om kastanjes en zoete aardappelen.',
      'hundreds of kilos of chestnuts are roasted on the square. The fiesta grew out of the old custom of young people going from house to house around All Souls’ Day asking for chestnuts and sweet potatoes.',
      'auf dem Platz werden Hunderte Kilo Kastanien geröstet. Das Fest geht auf den alten Brauch zurück, dass Jugendliche um Allerseelen von Haus zu Haus zogen und um Kastanien und Süßkartoffeln baten.',
      'hundratals kilo kastanjer rostas på torget. Festen bygger på en gammal sed där ungdomar kring alla själars dag gick runt till husen och bad om kastanjer och sötpotatis.',
    ) },
  ],
  sources: [
    'https://es.wikipedia.org/wiki/Alcaucín',
    'https://www.eldebate.com/espana/andalucia/malaga/20251108/horarios-disfrutar-fiesta-castana-alcaucin-repartiran-400-kilos-este-fruto-seco_352743.html',
  ],
};
export default f;
