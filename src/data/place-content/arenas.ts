import type { PlaceContent } from './types';

// Feitenblad Arenas (november 2026)
// - Inwoners: 1.291 (INE, 1 januari 2025). Oppervlakte 26,3 km²; hoogte 500 m; circa 10 km naar Vélez-Málaga, 48,5 km naar Málaga.
// - Kernen: Arenas, Daimalos (circa 2 km, mudéjarkerk La Concepción), Los Vados.
// - Castillo de Bentomiz: ruïne van een Moorse vesting op de berg Bentomiz (711 m) tegenover het dorp. Kerk Santa Catalina naast een voormalige minaret.
// - Na de opstand van de morisken herbevolkt met families uit Jaén. Sinds begin jaren 2000 vervangen mango en avocado deels de wijnstokken, amandelen en olijven.
// - Britse en Midden-Europese tweedehuisbezitters (geen percentage in de bron).
// - Fiesta's: Semana Santa (vier processies), feria de agosto (tweede weekend augustus, San Sebastián), Feria de la Mula (12 oktober).
// - Woningprijzen: circa € 2.300 per m² (RealAdvisor, oktober 2026).
// Golf C: één overzichtspagina met wonen en zien en doen samen.
const content: PlaceContent = {
  sources: [
    'https://es.wikipedia.org/wiki/Arenas_(Málaga)',
    'https://realadvisor.es/es/precios-viviendas/municipio-arenas',
  ],
  nl: {
    title: 'Arenas en Daimalos: wonen onder het kasteel van Bentomiz',
    description: 'Alles over Arenas en Daimalos: de ruïne van het Castillo de Bentomiz, de mudéjarkerken, het muilezelfeest, woningprijzen en kopen op tien kilometer van Vélez-Málaga.',
    lead: 'Arenas ligt op 500 meter tegen de berg Bentomiz, met de ruïne van een Moorse burcht erboven en Vélez-Málaga op tien kilometer. Samen met het buurdorpje Daimalos is het een rustige plek dicht bij de kust.',
    intro: [
      'Arenas ligt in de heuvels ten noorden van <a href="/nl/plaatsen/velez-malaga/">Vélez-Málaga</a>, op ongeveer tien kilometer van de stad en 48 kilometer van Málaga. Bij de gemeente horen ook Daimalos, twee kilometer verderop, en het verspreide Los Vados aan de oude weg naar Viñuela. Samen hebben ze ongeveer 1.300 inwoners.',
      'Tegenover het dorp ligt de Bentomiz, een berg van 711 meter met op de top de resten van een Moorse vesting. Het uitzicht vanaf het kasteel reikt over de hele kust. In het dorp staat de kerk Santa Catalina naast een oude minaret, en Daimalos heeft een eigen mudéjarkerk. Arenas is ook het dorp van de Feria de la Mula op 12 oktober, een feest rond de muilezel die hier eeuwenlang het werk op de steile hellingen deed.',
      'Rond Arenas wonen Britten en andere Noord-Europeanen in villa’s en landhuizen op de hellingen, vaak met uitzicht op zee. Waar vroeger wijnstokken en amandelbomen stonden, groeien nu steeds vaker mango’s en avocado’s. In oktober 2026 lag de gemiddelde vraagprijs rond de € 2.300 per m² (RealAdvisor), hoger dan in de bergdorpen verder landinwaarts door de korte afstand tot de kust. Reken op ongeveer 10% <a href="/nl/gidsen/kosten-koper-spanje/">kosten koper</a>.',
      'Voor de dagelijkse boodschappen, het ziekenhuis en scholen bent u in een kwartier in Vélez-Málaga. Bij een landhuis buiten het dorp is het belangrijk om de vergunningen, de toegangsweg en de watervoorziening te laten controleren; lees onze gidsen over <a href="/nl/gidsen/finca-kopen-in-spanje/">finca kopen</a> en <a href="/nl/gidsen/afo-legaliseren-andalusie/">AFO en legaliseren</a>, en laat een woning vóór aankoop <a href="/nl/aankoopkeuring/">keuren</a>.',
    ],
    facts: [
      ['Inwoners', 'circa 1.300 (2025)'],
      ['Kernen', 'Arenas, Daimalos, Los Vados'],
      ['Ligging', 'heuvels, 500 m hoog'],
      ['Vélez-Málaga', 'circa 10 km'],
      ['Te zien', 'Castillo de Bentomiz, mudéjarkerken'],
      ['Prijsniveau', 'middel, circa € 2.300 per m²'],
    ],
    forWhom: 'Voor wie in de heuvels wil wonen met uitzicht op zee en Vélez-Málaga en de stranden van Torre del Mar op een kwartier tot twintig minuten.',
    faq: [
      { q: 'Kun je naar het Castillo de Bentomiz wandelen?', a: 'Ja, de ruïne ligt op de top van de Bentomiz tegenover het dorp. Het uitzicht over de kust en de Axarquía is de klim waard.' },
      { q: 'Wat is de Feria de la Mula?', a: 'Een feest op 12 oktober rond de muilezel, het dier dat eeuwenlang het werk op de steile hellingen rond Arenas deed.' },
      { q: 'Hoe ver is Arenas van de kust?', a: 'Ongeveer tien kilometer naar Vélez-Málaga en iets verder naar de stranden van Torre del Mar.' },
    ],
  },
  en: {
    title: 'Arenas and Daimalos: living below Bentomiz castle',
    description: 'All about Arenas and Daimalos: the ruins of the Castillo de Bentomiz, the Mudéjar churches, the mule fair, property prices and buying ten kilometres from Vélez-Málaga.',
    lead: 'Arenas sits at 500 metres against Mount Bentomiz, with the ruins of a Moorish castle above and Vélez-Málaga ten kilometres away. Together with the neighbouring hamlet of Daimalos, it is a quiet spot close to the coast.',
    intro: [
      'Arenas lies in the hills north of <a href="/en/places/velez-malaga/">Vélez-Málaga</a>, about ten kilometres from the town and 48 kilometres from Málaga. The municipality also includes Daimalos, two kilometres further on, and the scattered Los Vados on the old road to Viñuela. Together they have about 1,300 residents.',
      'Opposite the village rises Bentomiz, a 711-metre mountain topped by the remains of a Moorish fortress. The view from the castle stretches along the whole coast. In the village, Santa Catalina church stands beside an old minaret, and Daimalos has its own Mudéjar church. Arenas is also home to the Feria de la Mula on 12 October, a fair celebrating the mule that for centuries did the work on the steep slopes.',
      'Around Arenas, British and other Northern European owners live in villas and country houses on the slopes, often with sea views. Where vines and almond trees once grew, mangoes and avocados increasingly take their place. In October 2026 average asking prices were around €2,300 per m² (RealAdvisor), higher than in the mountain villages further inland because of the short distance to the coast. Allow around 10% for <a href="/en/guides/buying-costs-in-spain/">buying costs</a>.',
      'For daily shopping, the hospital and schools you are in Vélez-Málaga in a quarter of an hour. With a country house outside the village it is important to have the permits, the access track and the water supply checked; read our guides to <a href="/en/guides/buying-a-finca-in-spain/">buying a finca</a> and <a href="/en/guides/afo-legalisation-andalusia/">AFO and legalisation</a>, and have a property <a href="/en/property-survey/">surveyed</a> before you buy.',
    ],
    facts: [
      ['Population', 'about 1,300 (2025)'],
      ['Villages', 'Arenas, Daimalos, Los Vados'],
      ['Setting', 'hills, 500 m up'],
      ['Vélez-Málaga', 'about 10 km'],
      ['To see', 'Castillo de Bentomiz, Mudéjar churches'],
      ['Price level', 'mid-range, about €2,300 per m²'],
    ],
    forWhom: 'People who want to live in the hills with a sea view, with Vélez-Málaga and the beaches of Torre del Mar fifteen to twenty minutes away.',
    faq: [
      { q: 'Can you walk to the Castillo de Bentomiz?', a: 'Yes, the ruins sit on top of Bentomiz opposite the village. The view over the coast and the Axarquía is worth the climb.' },
      { q: 'What is the Feria de la Mula?', a: 'A fair on 12 October celebrating the mule, the animal that for centuries did the work on the steep slopes around Arenas.' },
      { q: 'How far is Arenas from the coast?', a: 'About ten kilometres to Vélez-Málaga and a little further to the beaches of Torre del Mar.' },
    ],
  },
  de: {
    title: 'Arenas und Daimalos: Wohnen unter der Burg von Bentomiz',
    description: 'Alles über Arenas und Daimalos: die Ruine des Castillo de Bentomiz, die Mudéjar-Kirchen, das Maultierfest, Immobilienpreise und Kaufen zehn Kilometer von Vélez-Málaga.',
    lead: 'Arenas liegt auf 500 Metern am Berg Bentomiz, mit der Ruine einer maurischen Burg darüber und Vélez-Málaga in zehn Kilometern Entfernung. Zusammen mit dem Nachbarweiler Daimalos ist es ein ruhiger Ort nah an der Küste.',
    intro: [
      'Arenas liegt in den Hügeln nördlich von <a href="/de/orte/velez-malaga/">Vélez-Málaga</a>, etwa zehn Kilometer von der Stadt und 48 Kilometer von Málaga entfernt. Zur Gemeinde gehören auch Daimalos, zwei Kilometer weiter, und das verstreute Los Vados an der alten Straße nach Viñuela. Zusammen haben sie rund 1.300 Einwohner.',
      'Gegenüber dem Dorf erhebt sich der Bentomiz, ein 711 Meter hoher Berg mit den Resten einer maurischen Festung auf dem Gipfel. Der Blick von der Burg reicht über die ganze Küste. Im Dorf steht die Kirche Santa Catalina neben einem alten Minarett, und Daimalos hat eine eigene Mudéjar-Kirche. Arenas ist auch das Dorf der Feria de la Mula am 12. Oktober, eines Festes rund um das Maultier, das hier jahrhundertelang die Arbeit an den steilen Hängen erledigte.',
      'Rund um Arenas wohnen Briten und andere Nordeuropäer in Villen und Landhäusern an den Hängen, oft mit Meerblick. Wo früher Reben und Mandelbäume standen, wachsen heute immer öfter Mangos und Avocados. Im Oktober 2026 lagen die durchschnittlichen Angebotspreise bei rund 2.300 € pro m² (RealAdvisor), höher als in den Bergdörfern weiter im Hinterland, weil die Küste so nah ist. Rechnen Sie mit rund 10% <a href="/de/ratgeber/kaufnebenkosten-spanien/">Kaufnebenkosten</a>.',
      'Für den täglichen Einkauf, das Krankenhaus und Schulen sind Sie in einer Viertelstunde in Vélez-Málaga. Bei einem Landhaus außerhalb des Dorfes sollten Sie Genehmigungen, Zufahrtsweg und Wasserversorgung prüfen lassen; lesen Sie unsere Ratgeber <a href="/de/ratgeber/finca-kaufen-spanien/">Finca kaufen</a> und <a href="/de/ratgeber/afo-legalisierung-andalusien/">AFO und Legalisierung</a>, und lassen Sie eine Immobilie vor dem Kauf <a href="/de/immobiliengutachten/">begutachten</a>.',
    ],
    facts: [
      ['Einwohner', 'rund 1.300 (2025)'],
      ['Ortsteile', 'Arenas, Daimalos, Los Vados'],
      ['Lage', 'Hügel, 500 m hoch'],
      ['Vélez-Málaga', 'etwa 10 km'],
      ['Sehenswert', 'Castillo de Bentomiz, Mudéjar-Kirchen'],
      ['Preisniveau', 'mittel, rund 2.300 € pro m²'],
    ],
    forWhom: 'Für alle, die in den Hügeln mit Meerblick wohnen möchten, mit Vélez-Málaga und den Stränden von Torre del Mar in fünfzehn bis zwanzig Minuten.',
    faq: [
      { q: 'Kann man zum Castillo de Bentomiz wandern?', a: 'Ja, die Ruine liegt auf dem Gipfel des Bentomiz gegenüber dem Dorf. Der Blick über die Küste und die Axarquía lohnt den Aufstieg.' },
      { q: 'Was ist die Feria de la Mula?', a: 'Ein Fest am 12. Oktober rund um das Maultier, das jahrhundertelang die Arbeit an den steilen Hängen um Arenas erledigte.' },
      { q: 'Wie weit ist Arenas von der Küste entfernt?', a: 'Etwa zehn Kilometer bis Vélez-Málaga und etwas weiter bis zu den Stränden von Torre del Mar.' },
    ],
  },
  sv: {
    title: 'Arenas och Daimalos: bo nedanför borgen Bentomiz',
    description: 'Allt om Arenas och Daimalos: ruinerna av Castillo de Bentomiz, mudéjarkyrkorna, mulåsnemarknaden, bostadspriser och att köpa tio kilometer från Vélez-Málaga.',
    lead: 'Arenas ligger på 500 meters höjd mot berget Bentomiz, med ruinerna av en morisk borg ovanför och Vélez-Málaga tio kilometer bort. Tillsammans med grannbyn Daimalos är det en lugn plats nära kusten.',
    intro: [
      'Arenas ligger i kullarna norr om <a href="/sv/orter/velez-malaga/">Vélez-Málaga</a>, cirka tio kilometer från staden och 48 kilometer från Málaga. Till kommunen hör också Daimalos, två kilometer längre bort, och det utspridda Los Vados vid den gamla vägen till Viñuela. Tillsammans har de cirka 1 300 invånare.',
      'Mitt emot byn reser sig Bentomiz, ett 711 meter högt berg med resterna av en morisk fästning på toppen. Utsikten från borgen sträcker sig längs hela kusten. I byn står kyrkan Santa Catalina bredvid en gammal minaret, och Daimalos har en egen mudéjarkyrka. I Arenas hålls också Feria de la Mula den 12 oktober, en marknad till mulåsnans ära, djuret som i århundraden gjorde jobbet på de branta sluttningarna.',
      'Runt Arenas bor britter och andra nordeuropéer i villor och lanthus på sluttningarna, ofta med havsutsikt. Där det förr växte vinrankor och mandelträd tar mango och avokado allt oftare över. I oktober 2026 låg det genomsnittliga utgångspriset kring 2 300 € per m² (RealAdvisor), högre än i bergsbyarna längre in i landet tack vare det korta avståndet till kusten. Räkna med cirka 10 % i <a href="/sv/guider/kopa-hus-i-spanien-kostnader/">köpkostnader</a>.',
      'För vardagsinköp, sjukhus och skolor är du i Vélez-Málaga på en kvart. Har du ett lanthus utanför byn är det viktigt att kontrollera tillstånden, tillfartsvägen och vattenförsörjningen; läs våra guider om att <a href="/sv/guider/kopa-finca-i-spanien/">köpa finca</a> och om <a href="/sv/guider/afo-andalusien/">AFO och legalisering</a>, och låt <a href="/sv/besiktning/">besiktiga</a> huset innan du köper.',
    ],
    facts: [
      ['Invånare', 'cirka 1 300 (2025)'],
      ['Byar', 'Arenas, Daimalos, Los Vados'],
      ['Läge', 'kullar, 500 m'],
      ['Vélez-Málaga', 'cirka 10 km'],
      ['Sevärt', 'Castillo de Bentomiz, mudéjarkyrkor'],
      ['Prisnivå', 'medel, cirka 2 300 € per m²'],
    ],
    forWhom: 'För dig som vill bo i kullarna med havsutsikt, med Vélez-Málaga och stränderna i Torre del Mar en kvart till tjugo minuter bort.',
    faq: [
      { q: 'Kan man gå till Castillo de Bentomiz?', a: 'Ja, ruinerna ligger på toppen av Bentomiz mitt emot byn. Utsikten över kusten och Axarquía är värd klättringen.' },
      { q: 'Vad är Feria de la Mula?', a: 'En marknad den 12 oktober till mulåsnans ära, djuret som i århundraden gjorde jobbet på de branta sluttningarna runt Arenas.' },
      { q: 'Hur långt är det från Arenas till kusten?', a: 'Cirka tio kilometer till Vélez-Málaga och lite längre till stränderna i Torre del Mar.' },
    ],
  },
};
export default content;
