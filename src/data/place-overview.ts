// Extra blokken op de overzichtspagina van de grootste plaatsen: bereikbaarheid, klimaat en de omgeving.
// Ze staan op de overzichtspagina onder de inleiding. Woningen, prijzen en verbouwen staan op de pagina Wonen,
// bezienswaardigheden op Zien en doen; herhaal dat hier niet.
// Feiten komen uit de feitenbladen in place-content/*.ts en de klimaatgegevens in weather.ts.
import type { Lang } from '../i18n';

export type OverviewSection = { h: string; p: string[] };

export const placeOverview: Record<string, Partial<Record<Lang, OverviewSection[]>>> = {
  nerja: {
    nl: [
      { h: 'Bereikbaarheid en vervoer', p: [
        'Nerja ligt aan de A-7, de snelweg langs de kust. Naar de luchthaven van Málaga rijdt u ruim een uur, naar Granada ongeveer net zo lang via de A-44. De oude kustweg N-340 loopt dwars door de stad en is handig voor korte ritten naar Torrox Costa en Maro.',
        'Er rijden lijnbussen naar Málaga, Torre del Mar, Frigiliana en Granada. In het centrum doet u alles te voet; voor de urbanisaties op de hellingen en voor grote boodschappen is een auto wel prettig. Parkeren in het oude centrum is lastig: de meeste bewoners gebruiken een garage of de openbare parkeergarages aan de rand.',
      ] },
      { h: 'Klimaat door het jaar', p: [
        'De Sierra Almijara houdt de koude noordenwind tegen, waardoor Nerja in de winter een van de zachtste plekken van de Costa del Sol is: overdag vaak rond de 17 graden en veel zon. In de zomer koelt de zeebries de stad af. Het zeewater is van juni tot oktober boven de 20 graden. Per maand leest u meer op <a href="/nl/plaatsen/nerja/weer/">het weer in Nerja</a>.',
      ] },
      { h: 'De omgeving', p: [
        'Binnen tien minuten zit u in het witte bergdorp <a href="/nl/plaatsen/frigiliana/">Frigiliana</a> of bij de baai van <a href="/nl/plaatsen/maro/">Maro</a>. Naar het westen liggen <a href="/nl/plaatsen/torrox-costa/">Torrox Costa</a> en de boulevard van <a href="/nl/plaatsen/torre-del-mar/">Torre del Mar</a>. Het natuurpark Sierras de Tejeda, Almijara y Alhama begint direct achter de stad en is ideaal om te wandelen. Voor een dagje cultuur rijdt u naar Málaga of naar het Alhambra in Granada.',
      ] },
      { h: 'Dagelijks leven', p: [
        'Nerja leeft het hele jaar door. Spanjaarden en buitenlanders wonen hier door elkaar, en in winkels en bij de dokter komt u vaak met Engels verder. Toch loont het om Spaans te leren: taalscholen geven les op elk niveau. Het ritme is Spaans, met een late lunch, de <em>paseo</em> aan het eind van de middag en volle terrassen ’s avonds. In juli en augustus is het druk en is parkeren een opgave; vanaf oktober keert de rust terug en blijven de overwinteraars.',
      ] },
    ],
    en: [
      { h: 'Getting there and getting around', p: [
        'Nerja is on the A-7 coastal motorway. Málaga airport is a little over an hour’s drive, and Granada about the same via the A-44. The old coast road, the N-340, runs right through town and is handy for short trips to Torrox Costa and Maro.',
        'Buses run to Málaga, Torre del Mar, Frigiliana and Granada. In the centre you can do everything on foot; for the urbanisations on the hillsides and for big shopping trips a car is useful. Parking in the old centre is difficult: most residents use a garage or the public car parks on the edge of town.',
      ] },
      { h: 'Climate through the year', p: [
        'The Sierra Almijara holds back cold northerly winds, making Nerja one of the mildest places on the Costa del Sol in winter: often around 17 degrees in the daytime, with plenty of sun. In summer the sea breeze keeps the town cooler. The sea is above 20 degrees from June to October. Month by month, see <a href="/en/places/nerja/weather/">the weather in Nerja</a>.',
      ] },
      { h: 'The surrounding area', p: [
        'Within ten minutes you are in the white mountain village of <a href="/en/places/frigiliana/">Frigiliana</a> or at the bay of <a href="/en/places/maro/">Maro</a>. To the west lie <a href="/en/places/torrox-costa/">Torrox Costa</a> and the promenade of <a href="/en/places/torre-del-mar/">Torre del Mar</a>. The Sierras de Tejeda, Almijara y Alhama natural park starts right behind the town and is perfect for walking. For a day of culture, drive to Málaga or to the Alhambra in Granada.',
      ] },
      { h: 'Everyday life', p: [
        'Nerja is lively all year round. Spaniards and foreigners live side by side, and in shops and at the doctor you can often get by in English. Learning Spanish still pays off: language schools teach every level. The rhythm is Spanish, with a late lunch, the <em>paseo</em> in the late afternoon and busy terraces in the evening. July and August are crowded and parking is a challenge; from October the calm returns and the winter residents stay on.',
      ] },
    ],
    de: [
      { h: 'Anreise und Verkehr', p: [
        'Nerja liegt an der Küstenautobahn A-7. Zum Flughafen Málaga fahren Sie gut eine Stunde, nach Granada über die A-44 etwa genauso lange. Die alte Küstenstraße N-340 führt mitten durch den Ort und ist praktisch für kurze Fahrten nach Torrox Costa und Maro.',
        'Busse fahren nach Málaga, Torre del Mar, Frigiliana und Granada. Im Zentrum erledigen Sie alles zu Fuß; für die Urbanisationen an den Hängen und den Großeinkauf ist ein Auto praktisch. Parken in der Altstadt ist schwierig: Die meisten Bewohner nutzen eine Garage oder die öffentlichen Parkhäuser am Rand.',
      ] },
      { h: 'Klima im Jahresverlauf', p: [
        'Die Sierra Almijara hält kalten Nordwind ab. Deshalb ist Nerja im Winter einer der mildesten Orte der Costa del Sol: tagsüber oft um 17 Grad und viel Sonne. Im Sommer kühlt die Meeresbrise den Ort. Das Meer hat von Juni bis Oktober über 20 Grad. Monat für Monat lesen Sie mehr unter <a href="/de/orte/nerja/wetter/">Wetter in Nerja</a>.',
      ] },
      { h: 'Die Umgebung', p: [
        'In zehn Minuten sind Sie im weißen Bergdorf <a href="/de/orte/frigiliana/">Frigiliana</a> oder an der Bucht von <a href="/de/orte/maro/">Maro</a>. Westlich liegen <a href="/de/orte/torrox-costa/">Torrox Costa</a> und die Promenade von <a href="/de/orte/torre-del-mar/">Torre del Mar</a>. Der Naturpark Sierras de Tejeda, Almijara y Alhama beginnt direkt hinter dem Ort und ist ideal zum Wandern. Für einen Kulturtag fahren Sie nach Málaga oder zur Alhambra in Granada.',
      ] },
      { h: 'Alltag', p: [
        'Nerja lebt das ganze Jahr. Spanier und Ausländer wohnen hier gemischt, und in Geschäften oder beim Arzt kommen Sie oft mit Englisch weiter. Spanisch zu lernen lohnt sich trotzdem: Sprachschulen unterrichten auf jedem Niveau. Der Rhythmus ist spanisch, mit spätem Mittagessen, dem <em>Paseo</em> am späten Nachmittag und vollen Terrassen am Abend. Im Juli und August ist es voll und Parken eine Herausforderung; ab Oktober kehrt Ruhe ein, und die Überwinterer bleiben.',
      ] },
    ],
    sv: [
      { h: 'Hitta hit och ta sig runt', p: [
        'Nerja ligger vid kustmotorvägen A-7. Till flygplatsen i Málaga kör du drygt en timme, till Granada ungefär lika länge via A-44. Den gamla kustvägen N-340 går rakt genom staden och är praktisk för korta turer till Torrox Costa och Maro.',
        'Bussar går till Málaga, Torre del Mar, Frigiliana och Granada. I centrum gör du allt till fots; för områdena på sluttningarna och storhandling är bil bra att ha. Att parkera i gamla stan är svårt: de flesta boende har garage eller använder de allmänna parkeringshusen i utkanten.',
      ] },
      { h: 'Klimatet under året', p: [
        'Sierra Almijara stoppar den kalla nordanvinden, så Nerja är en av de mildaste platserna på Costa del Sol på vintern: ofta runt 17 grader på dagen och mycket sol. På sommaren svalkar havsbrisen. Havet är över 20 grader från juni till oktober. Månad för månad: <a href="/sv/orter/nerja/vader/">vädret i Nerja</a>.',
      ] },
      { h: 'Omgivningen', p: [
        'Inom tio minuter är du i den vita bergsbyn <a href="/sv/orter/frigiliana/">Frigiliana</a> eller vid viken i <a href="/sv/orter/maro/">Maro</a>. Västerut ligger <a href="/sv/orter/torrox-costa/">Torrox Costa</a> och strandpromenaden i <a href="/sv/orter/torre-del-mar/">Torre del Mar</a>. Naturparken Sierras de Tejeda, Almijara y Alhama börjar direkt bakom staden och passar perfekt för vandring. För en kulturdag åker du till Málaga eller till Alhambra i Granada.',
      ] },
      { h: 'Vardagen', p: [
        'Nerja lever hela året. Spanjorer och utlänningar bor blandat, och i affärer och hos läkaren klarar du dig ofta på engelska. Det lönar sig ändå att lära sig spanska: språkskolor undervisar på alla nivåer. Rytmen är spansk, med sen lunch, <em>paseo</em> på eftermiddagen och fulla terrasser på kvällen. I juli och augusti är det trångt och svårt att parkera; från oktober blir det lugnare och övervintrarna stannar kvar.',
      ] },
    ],
  },

  frigiliana: {
    nl: [
      { h: 'Bereikbaarheid en vervoer', p: [
        'Frigiliana ligt zes kilometer boven Nerja, via een goede bochtige weg van ongeveer tien minuten. Naar de luchthaven van Málaga rijdt u iets meer dan een uur. Er rijdt een lijnbus naar Nerja, meerdere keren per dag, met daar aansluiting richting Málaga en Granada.',
        'In het oude dorp zijn de straatjes steil en smal en vaak alleen te voet bereikbaar. Wie in de mudéjarwijk woont, parkeert in de parkeergarage of langs de weg aan de rand. Voor huizen in het buitengebied hebt u een auto nodig, en soms een flinke helling op een smalle toegangsweg.',
      ] },
      { h: 'Klimaat door het jaar', p: [
        'Op ongeveer 300 meter hoogte is het overdag bijna even warm als aan de kust, maar de nachten zijn koeler. In de zomer is dat prettig: het koelt ’s avonds beter af dan in Nerja. In de winter zijn de nachten fris en hebt u verwarming nodig. Lees meer op <a href="/nl/plaatsen/frigiliana/weer/">het weer in Frigiliana</a>.',
      ] },
      { h: 'De omgeving', p: [
        'Het strand van <a href="/nl/plaatsen/nerja/">Nerja</a> ligt op tien minuten, met alle winkels, artsen en restaurants van een kleine stad. Achter het dorp begint het natuurpark Sierras de Tejeda, Almijara y Alhama, met wandelroutes naar El Fuerte en de Río Higuerón. Over de bergweg komt u in <a href="/nl/plaatsen/torrox/">Torrox</a> en verder naar <a href="/nl/plaatsen/competa/">Cómpeta</a>.',
      ] },
      { h: 'Dagelijks leven', p: [
        'Met ruim 3.300 inwoners, van wie ongeveer een derde een buitenlandse nationaliteit heeft, is Frigiliana een klein dorp waar mensen elkaar kennen. Overdag lopen er veel dagjesmensen door de mudéjarwijk; ’s avonds en in de winter is het rustig. Voor dagelijkse boodschappen zijn er kleine winkels, een bakker en een slager, voor de grote supermarkt rijdt u naar Nerja. Hoogtepunt van het jaar is het Festival Frigiliana 3 Culturas eind augustus.',
      ] },
    ],
    en: [
      { h: 'Getting there and getting around', p: [
        'Frigiliana is six kilometres above Nerja, about ten minutes along a good, winding road. Málaga airport is a little over an hour away. A bus runs to Nerja several times a day, with connections there to Málaga and Granada.',
        'In the old village the lanes are steep and narrow and often only reachable on foot. If you live in the Mudéjar quarter, you park in the car park or along the road on the edge of the village. For houses in the countryside you need a car, and sometimes a steep climb up a narrow access track.',
      ] },
      { h: 'Climate through the year', p: [
        'At about 300 metres it is almost as warm as the coast in the daytime, but nights are cooler. In summer that is welcome: it cools down better in the evening than in Nerja. In winter the nights are fresh and you need heating. More on <a href="/en/places/frigiliana/weather/">the weather in Frigiliana</a>.',
      ] },
      { h: 'The surrounding area', p: [
        'The beach at <a href="/en/places/nerja/">Nerja</a> is ten minutes away, with all the shops, doctors and restaurants of a small town. Behind the village the Sierras de Tejeda, Almijara y Alhama natural park begins, with walks to El Fuerte and along the Río Higuerón. The mountain road takes you to <a href="/en/places/torrox/">Torrox</a> and on to <a href="/en/places/competa/">Cómpeta</a>.',
      ] },
      { h: 'Everyday life', p: [
        'With just over 3,300 inhabitants, about a third of them foreign nationals, Frigiliana is a small village where people know each other. In the daytime many day visitors stroll through the Mudéjar quarter; in the evening and in winter it is quiet. For daily shopping there are small shops, a baker and a butcher; for the big supermarket you drive to Nerja. The highlight of the year is the Frigiliana 3 Cultures Festival at the end of August.',
      ] },
    ],
    de: [
      { h: 'Anreise und Verkehr', p: [
        'Frigiliana liegt sechs Kilometer oberhalb von Nerja, etwa zehn Minuten über eine gute, kurvige Straße. Zum Flughafen Málaga fahren Sie gut eine Stunde. Ein Linienbus fährt mehrmals am Tag nach Nerja, mit Anschluss nach Málaga und Granada.',
        'Im alten Dorf sind die Gassen steil und schmal und oft nur zu Fuß erreichbar. Wer im Mudéjar-Viertel wohnt, parkt im Parkhaus oder an der Straße am Ortsrand. Für Häuser außerhalb brauchen Sie ein Auto, manchmal über einen steilen, schmalen Zufahrtsweg.',
      ] },
      { h: 'Klima im Jahresverlauf', p: [
        'Auf etwa 300 Metern ist es tagsüber fast so warm wie an der Küste, aber die Nächte sind kühler. Im Sommer ist das angenehm: Abends kühlt es besser ab als in Nerja. Im Winter sind die Nächte frisch, und Sie brauchen eine Heizung. Mehr unter <a href="/de/orte/frigiliana/wetter/">Wetter in Frigiliana</a>.',
      ] },
      { h: 'Die Umgebung', p: [
        'Der Strand von <a href="/de/orte/nerja/">Nerja</a> ist zehn Minuten entfernt, mit allen Geschäften, Ärzten und Restaurants einer Kleinstadt. Hinter dem Dorf beginnt der Naturpark Sierras de Tejeda, Almijara y Alhama, mit Wanderwegen zum El Fuerte und entlang des Río Higuerón. Über die Bergstraße erreichen Sie <a href="/de/orte/torrox/">Torrox</a> und weiter <a href="/de/orte/competa/">Cómpeta</a>.',
      ] },
      { h: 'Alltag', p: [
        'Mit gut 3.300 Einwohnern, davon etwa ein Drittel mit ausländischer Staatsangehörigkeit, ist Frigiliana ein kleines Dorf, in dem man sich kennt. Tagsüber spazieren viele Tagesgäste durch das Mudéjar-Viertel; abends und im Winter ist es ruhig. Für den täglichen Einkauf gibt es kleine Läden, einen Bäcker und einen Metzger, zum großen Supermarkt fahren Sie nach Nerja. Höhepunkt des Jahres ist das Festival Frigiliana 3 Culturas Ende August.',
      ] },
    ],
    sv: [
      { h: 'Hitta hit och ta sig runt', p: [
        'Frigiliana ligger sex kilometer ovanför Nerja, cirka tio minuter längs en bra men kurvig väg. Till flygplatsen i Málaga kör du drygt en timme. En buss går till Nerja flera gånger om dagen, med anslutning mot Málaga och Granada.',
        'I gamla byn är gränderna branta och smala och ofta bara nåbara till fots. Bor du i morerkvarteret parkerar du i parkeringshuset eller längs vägen i utkanten. För hus på landsbygden behöver du bil, ibland uppför en brant och smal tillfartsväg.',
      ] },
      { h: 'Klimatet under året', p: [
        'På cirka 300 meters höjd är det nästan lika varmt som vid kusten på dagen, men nätterna är svalare. På sommaren är det skönt: det svalnar bättre på kvällen än i Nerja. På vintern är nätterna kyliga och du behöver värme i huset. Mer på <a href="/sv/orter/frigiliana/vader/">vädret i Frigiliana</a>.',
      ] },
      { h: 'Omgivningen', p: [
        'Stranden i <a href="/sv/orter/nerja/">Nerja</a> ligger tio minuter bort, med alla affärer, läkare och restauranger i en småstad. Bakom byn börjar naturparken Sierras de Tejeda, Almijara y Alhama, med vandringar till El Fuerte och längs Río Higuerón. Bergsvägen tar dig till <a href="/sv/orter/torrox/">Torrox</a> och vidare till <a href="/sv/orter/competa/">Cómpeta</a>.',
      ] },
      { h: 'Vardagen', p: [
        'Med drygt 3 300 invånare, varav ungefär en tredjedel utländska medborgare, är Frigiliana en liten by där folk känner varandra. På dagen strövar många dagsbesökare genom morerkvarteret; på kvällen och vintern är det lugnt. För vardagsinköp finns små affärer, bageri och slakteri; till den stora mataffären åker du till Nerja. Årets höjdpunkt är festivalen Frigiliana 3 Culturas i slutet av augusti.',
      ] },
    ],
  },

  competa: {
    nl: [
      { h: 'Bereikbaarheid en vervoer', p: [
        'Cómpeta ligt op ongeveer 640 meter hoogte. Vanaf de A-7 bij Algarrobo of Torrox rijdt u in ongeveer een halfuur over een bochtige bergweg naar het dorp. Naar de luchthaven van Málaga is het ongeveer een uur. Er rijdt een lijnbus naar Torre del Mar en Málaga, maar niet vaak; een auto is hier eigenlijk onmisbaar.',
        'Het dorp zelf is compact en goed te voet te doen, met supermarkten, banken, een gezondheidscentrum en veel restaurants rond de Plaza Almijara. Grote winkels en het ziekenhuis vindt u in Torre del Mar en Vélez-Málaga, op ongeveer 40 minuten.',
      ] },
      { h: 'Klimaat door het jaar', p: [
        'Door de hoogte is het hier een paar graden koeler dan aan de kust en valt er meer regen. In de zomer is dat heerlijk, met koele avonden. In de winter kan het ’s nachts vriezen en ligt er soms sneeuw op La Maroma. Een huis in Cómpeta heeft verwarming en goede ramen nodig. Lees meer op <a href="/nl/plaatsen/competa/weer/">het weer in Cómpeta</a>.',
      ] },
      { h: 'De omgeving', p: [
        'Cómpeta is het grootste dorp in een rij witte bergdorpen. <a href="/nl/plaatsen/canillas-de-albaida/">Canillas de Albaida</a> ligt vlakbij, <a href="/nl/plaatsen/sayalonga/">Sayalonga</a> op weg naar de kust, en de Ruta del Mudéjar voert langs <a href="/nl/plaatsen/archez/">Árchez</a>, <a href="/nl/plaatsen/salares/">Salares</a> en <a href="/nl/plaatsen/sedella/">Sedella</a>. Boven het dorp beginnen wandelroutes de Sierra Almijara in, tot aan de top van La Maroma. Aan de kust bent u in een halfuur in <a href="/nl/plaatsen/torrox-costa/">Torrox Costa</a> of <a href="/nl/plaatsen/nerja/">Nerja</a>.',
      ] },
      { h: 'Dagelijks leven', p: [
        'Bijna de helft van de ongeveer 3.800 inwoners heeft een buitenlandse nationaliteit, een van de hoogste aandelen van de provincie. Er is een levendige internationale gemeenschap met wandelgroepen, muziek en vrijwilligerswerk, en op straat hoort u veel Engels. Tegelijk blijft Cómpeta een Spaans wijndorp: de moscatel en de rozijnen horen erbij, en op 15 augustus viert het hele dorp de Noche del Vino. In de winter is het stiller en zijn sommige restaurants dicht.',
      ] },
    ],
    en: [
      { h: 'Getting there and getting around', p: [
        'Cómpeta sits at about 640 metres. From the A-7 at Algarrobo or Torrox it takes about half an hour along a winding mountain road. Málaga airport is roughly an hour away. A bus runs to Torre del Mar and Málaga, but not often; a car is really essential here.',
        'The village itself is compact and easy to walk, with supermarkets, banks, a health centre and plenty of restaurants around the Plaza Almijara. Large shops and the hospital are in Torre del Mar and Vélez-Málaga, about 40 minutes away.',
      ] },
      { h: 'Climate through the year', p: [
        'Because of the altitude it is a few degrees cooler than the coast, with more rain. In summer that is lovely, with cool evenings. In winter it can freeze at night and there is sometimes snow on La Maroma. A house in Cómpeta needs heating and good windows. More on <a href="/en/places/competa/weather/">the weather in Cómpeta</a>.',
      ] },
      { h: 'The surrounding area', p: [
        'Cómpeta is the largest of a string of white mountain villages. <a href="/en/places/canillas-de-albaida/">Canillas de Albaida</a> is next door, <a href="/en/places/sayalonga/">Sayalonga</a> lies on the way to the coast, and the Ruta del Mudéjar passes through <a href="/en/places/archez/">Árchez</a>, <a href="/en/places/salares/">Salares</a> and <a href="/en/places/sedella/">Sedella</a>. Above the village, walking routes lead into the Sierra Almijara, up to the summit of La Maroma. The coast at <a href="/en/places/torrox-costa/">Torrox Costa</a> or <a href="/en/places/nerja/">Nerja</a> is half an hour away.',
      ] },
      { h: 'Everyday life', p: [
        'Almost half of the roughly 3,800 inhabitants are foreign nationals, one of the highest shares in the province. There is a lively international community with walking groups, music and volunteering, and you hear a lot of English in the street. At the same time Cómpeta remains a Spanish wine village: moscatel and raisins are part of life, and on 15 August the whole village celebrates the Noche del Vino. In winter it is quieter and some restaurants close.',
      ] },
    ],
    de: [
      { h: 'Anreise und Verkehr', p: [
        'Cómpeta liegt auf etwa 640 Metern. Von der A-7 bei Algarrobo oder Torrox fahren Sie etwa eine halbe Stunde über eine kurvige Bergstraße. Zum Flughafen Málaga ist es rund eine Stunde. Ein Bus fährt nach Torre del Mar und Málaga, aber nicht oft; ein Auto ist hier praktisch unverzichtbar.',
        'Das Dorf selbst ist kompakt und gut zu Fuß zu erkunden, mit Supermärkten, Banken, einem Gesundheitszentrum und vielen Restaurants rund um die Plaza Almijara. Große Geschäfte und das Krankenhaus finden Sie in Torre del Mar und Vélez-Málaga, etwa 40 Minuten entfernt.',
      ] },
      { h: 'Klima im Jahresverlauf', p: [
        'Wegen der Höhe ist es hier ein paar Grad kühler als an der Küste, und es regnet mehr. Im Sommer ist das herrlich, mit kühlen Abenden. Im Winter kann es nachts frieren, und auf La Maroma liegt manchmal Schnee. Ein Haus in Cómpeta braucht eine Heizung und gute Fenster. Mehr unter <a href="/de/orte/competa/wetter/">Wetter in Cómpeta</a>.',
      ] },
      { h: 'Die Umgebung', p: [
        'Cómpeta ist das größte Dorf in einer Reihe weißer Bergdörfer. <a href="/de/orte/canillas-de-albaida/">Canillas de Albaida</a> liegt gleich nebenan, <a href="/de/orte/sayalonga/">Sayalonga</a> auf dem Weg zur Küste, und die Ruta del Mudéjar führt durch <a href="/de/orte/archez/">Árchez</a>, <a href="/de/orte/salares/">Salares</a> und <a href="/de/orte/sedella/">Sedella</a>. Oberhalb des Dorfes beginnen Wanderwege in die Sierra Almijara bis zum Gipfel von La Maroma. Die Küste bei <a href="/de/orte/torrox-costa/">Torrox Costa</a> oder <a href="/de/orte/nerja/">Nerja</a> erreichen Sie in einer halben Stunde.',
      ] },
      { h: 'Alltag', p: [
        'Fast die Hälfte der rund 3.800 Einwohner hat eine ausländische Staatsangehörigkeit, einer der höchsten Anteile der Provinz. Es gibt eine lebendige internationale Gemeinschaft mit Wandergruppen, Musik und Ehrenamt, und auf der Straße hören Sie viel Englisch. Zugleich bleibt Cómpeta ein spanisches Weindorf: Moscatel und Rosinen gehören dazu, und am 15. August feiert das ganze Dorf die Noche del Vino. Im Winter ist es stiller, und manche Restaurants schließen.',
      ] },
    ],
    sv: [
      { h: 'Hitta hit och ta sig runt', p: [
        'Cómpeta ligger på cirka 640 meters höjd. Från A-7 vid Algarrobo eller Torrox tar det ungefär en halvtimme längs en kurvig bergsväg. Till flygplatsen i Málaga är det cirka en timme. En buss går till Torre del Mar och Málaga, men inte ofta; bil är egentligen nödvändigt här.',
        'Själva byn är kompakt och lätt att gå i, med mataffärer, banker, vårdcentral och många restauranger runt Plaza Almijara. Större affärer och sjukhuset finns i Torre del Mar och Vélez-Málaga, cirka 40 minuter bort.',
      ] },
      { h: 'Klimatet under året', p: [
        'På grund av höjden är det några grader svalare än vid kusten och det regnar mer. På sommaren är det härligt, med svala kvällar. På vintern kan det frysa på natten och ibland ligger det snö på La Maroma. Ett hus i Cómpeta behöver värme och bra fönster. Mer på <a href="/sv/orter/competa/vader/">vädret i Cómpeta</a>.',
      ] },
      { h: 'Omgivningen', p: [
        'Cómpeta är den största av en rad vita bergsbyar. <a href="/sv/orter/canillas-de-albaida/">Canillas de Albaida</a> ligger alldeles intill, <a href="/sv/orter/sayalonga/">Sayalonga</a> på vägen mot kusten, och Ruta del Mudéjar går genom <a href="/sv/orter/archez/">Árchez</a>, <a href="/sv/orter/salares/">Salares</a> och <a href="/sv/orter/sedella/">Sedella</a>. Ovanför byn börjar vandringsleder in i Sierra Almijara, ända upp till toppen av La Maroma. Kusten vid <a href="/sv/orter/torrox-costa/">Torrox Costa</a> eller <a href="/sv/orter/nerja/">Nerja</a> nås på en halvtimme.',
      ] },
      { h: 'Vardagen', p: [
        'Nästan hälften av de cirka 3 800 invånarna är utländska medborgare, en av de högsta andelarna i provinsen. Det finns en livlig internationell gemenskap med vandringsgrupper, musik och volontärarbete, och på gatan hör du mycket engelska. Samtidigt är Cómpeta en spansk vinby: moscatel och russin hör till, och den 15 augusti firar hela byn Noche del Vino. På vintern är det tystare och vissa restauranger stänger.',
      ] },
    ],
  },

  torrox: {
    nl: [
      { h: 'Bereikbaarheid en vervoer', p: [
        'Torrox Costa ligt direct aan de A-7 en de oude kustweg N-340. Naar de luchthaven van Málaga rijdt u ongeveer 50 minuten, naar Nerja tien minuten. De lijnbussen tussen Málaga en Nerja stoppen aan de kust, en een stadsbus verbindt Torrox Costa met het dorp Torrox, vier kilometer landinwaarts.',
        'Aan de kust kunt u zonder auto: de boulevard, supermarkten, artsen en restaurants liggen dicht bij elkaar. Het dorp Torrox is heuvelachtig, met smalle straatjes rond de Plaza de la Constitución. Voor de urbanisaties op de heuvels en de huizen in het buitengebied hebt u een auto nodig.',
      ] },
      { h: 'Klimaat door het jaar', p: [
        'Torrox noemt zichzelf het dorp met het beste klimaat van Europa. De gemiddelde jaartemperatuur aan de kust ligt rond de 19 graden, met zachte winters en zelden extreme hitte. Het dorp ligt op ongeveer 150 meter hoogte en is ’s nachts een paar graden koeler. Per maand leest u meer op <a href="/nl/plaatsen/torrox/weer/">het weer in Torrox</a>.',
      ] },
      { h: 'De omgeving', p: [
        'Naar het oosten ligt <a href="/nl/plaatsen/nerja/">Nerja</a>, met de grotten en het Balcón de Europa; via de bergweg komt u in <a href="/nl/plaatsen/frigiliana/">Frigiliana</a>. Landinwaarts rijdt u in een halfuur naar <a href="/nl/plaatsen/competa/">Cómpeta</a>. Naar het westen volgen <a href="/nl/plaatsen/algarrobo/">Algarrobo</a> en <a href="/nl/plaatsen/torre-del-mar/">Torre del Mar</a>. Bij de vuurtoren van Torrox liggen de resten van de Romeinse nederzetting Caviclum.',
      ] },
      { h: 'Dagelijks leven', p: [
        'Torrox heeft ruim 22.000 inwoners, van wie ongeveer 37% een buitenlandse nationaliteit heeft, met een grote Duitse gemeenschap. Aan de kust wonen veel overwinteraars en is het in de winter levendiger dan in veel andere badplaatsen. Het dorp Torrox is Spaanser, met bars rond het plein en fiesta’s zoals de Día de las Migas vlak voor Kerst. Wie aan de kust woont en Spaans wil oefenen, vindt dat in het dorp.',
      ] },
    ],
    en: [
      { h: 'Getting there and getting around', p: [
        'Torrox Costa is right on the A-7 and the old N-340 coast road. Málaga airport is about 50 minutes’ drive, Nerja ten minutes. Buses between Málaga and Nerja stop on the coast, and a town bus links Torrox Costa with Torrox village, four kilometres inland.',
        'On the coast you can manage without a car: the promenade, supermarkets, doctors and restaurants are close together. Torrox village is hilly, with narrow lanes around the Plaza de la Constitución. For the urbanisations on the hills and houses in the countryside you need a car.',
      ] },
      { h: 'Climate through the year', p: [
        'Torrox calls itself the village with the best climate in Europe. The average annual temperature on the coast is around 19 degrees, with mild winters and rarely extreme heat. The village sits at about 150 metres and is a few degrees cooler at night. Month by month, see <a href="/en/places/torrox/weather/">the weather in Torrox</a>.',
      ] },
      { h: 'The surrounding area', p: [
        'To the east lies <a href="/en/places/nerja/">Nerja</a>, with its caves and the Balcón de Europa; the mountain road takes you to <a href="/en/places/frigiliana/">Frigiliana</a>. Inland, <a href="/en/places/competa/">Cómpeta</a> is half an hour away. To the west come <a href="/en/places/algarrobo/">Algarrobo</a> and <a href="/en/places/torre-del-mar/">Torre del Mar</a>. By the Torrox lighthouse are the remains of the Roman settlement of Caviclum.',
      ] },
      { h: 'Everyday life', p: [
        'Torrox has over 22,000 inhabitants, about 37% of them foreign nationals, with a large German community. Many winter residents live on the coast, so it is livelier in winter than many other resorts. Torrox village is more Spanish, with bars around the square and fiestas such as the Día de las Migas just before Christmas. If you live on the coast and want to practise your Spanish, the village is the place.',
      ] },
    ],
    de: [
      { h: 'Anreise und Verkehr', p: [
        'Torrox Costa liegt direkt an der A-7 und der alten Küstenstraße N-340. Zum Flughafen Málaga fahren Sie etwa 50 Minuten, nach Nerja zehn Minuten. Die Linienbusse zwischen Málaga und Nerja halten an der Küste, und ein Stadtbus verbindet Torrox Costa mit dem Dorf Torrox, vier Kilometer landeinwärts.',
        'An der Küste kommen Sie ohne Auto aus: Promenade, Supermärkte, Ärzte und Restaurants liegen nah beieinander. Das Dorf Torrox ist hügelig, mit engen Gassen rund um die Plaza de la Constitución. Für die Urbanisationen auf den Hügeln und Häuser im Außenbereich brauchen Sie ein Auto.',
      ] },
      { h: 'Klima im Jahresverlauf', p: [
        'Torrox nennt sich das Dorf mit dem besten Klima Europas. Die Jahresdurchschnittstemperatur an der Küste liegt bei rund 19 Grad, mit milden Wintern und selten extremer Hitze. Das Dorf liegt auf etwa 150 Metern und ist nachts ein paar Grad kühler. Monat für Monat lesen Sie mehr unter <a href="/de/orte/torrox/wetter/">Wetter in Torrox</a>.',
      ] },
      { h: 'Die Umgebung', p: [
        'Im Osten liegt <a href="/de/orte/nerja/">Nerja</a> mit den Höhlen und dem Balcón de Europa; über die Bergstraße kommen Sie nach <a href="/de/orte/frigiliana/">Frigiliana</a>. Landeinwärts erreichen Sie <a href="/de/orte/competa/">Cómpeta</a> in einer halben Stunde. Westlich folgen <a href="/de/orte/algarrobo/">Algarrobo</a> und <a href="/de/orte/torre-del-mar/">Torre del Mar</a>. Am Leuchtturm von Torrox liegen die Reste der römischen Siedlung Caviclum.',
      ] },
      { h: 'Alltag', p: [
        'Torrox hat gut 22.000 Einwohner, davon etwa 37% mit ausländischer Staatsangehörigkeit, darunter eine große deutsche Gemeinschaft. An der Küste leben viele Überwinterer, im Winter ist es dort lebendiger als in vielen anderen Badeorten. Das Dorf Torrox ist spanischer, mit Bars rund um den Platz und Festen wie dem Día de las Migas kurz vor Weihnachten. Wer an der Küste wohnt und Spanisch üben möchte, findet dazu im Dorf Gelegenheit.',
      ] },
    ],
    sv: [
      { h: 'Hitta hit och ta sig runt', p: [
        'Torrox Costa ligger direkt vid A-7 och den gamla kustvägen N-340. Till flygplatsen i Málaga kör du cirka 50 minuter, till Nerja tio minuter. Bussarna mellan Málaga och Nerja stannar vid kusten, och en stadsbuss förbinder Torrox Costa med byn Torrox, fyra kilometer in i landet.',
        'Vid kusten klarar du dig utan bil: strandpromenaden, mataffärer, läkare och restauranger ligger nära varandra. Byn Torrox är kuperad, med smala gränder runt Plaza de la Constitución. För områdena på kullarna och hus på landsbygden behöver du bil.',
      ] },
      { h: 'Klimatet under året', p: [
        'Torrox kallar sig byn med Europas bästa klimat. Årsmedeltemperaturen vid kusten är runt 19 grader, med milda vintrar och sällan extrem hetta. Byn ligger på cirka 150 meters höjd och är några grader svalare på natten. Månad för månad: <a href="/sv/orter/torrox/vader/">vädret i Torrox</a>.',
      ] },
      { h: 'Omgivningen', p: [
        'Österut ligger <a href="/sv/orter/nerja/">Nerja</a> med grottorna och Balcón de Europa; bergsvägen tar dig till <a href="/sv/orter/frigiliana/">Frigiliana</a>. Inåt landet når du <a href="/sv/orter/competa/">Cómpeta</a> på en halvtimme. Västerut följer <a href="/sv/orter/algarrobo/">Algarrobo</a> och <a href="/sv/orter/torre-del-mar/">Torre del Mar</a>. Vid fyren i Torrox finns resterna av den romerska bosättningen Caviclum.',
      ] },
      { h: 'Vardagen', p: [
        'Torrox har drygt 22 000 invånare, varav cirka 37% utländska medborgare, med en stor tysk gemenskap. Vid kusten bor många övervintrare, så det är livligare på vintern än i många andra badorter. Byn Torrox är mer spansk, med barer runt torget och fiestor som Día de las Migas strax före jul. Bor du vid kusten och vill öva spanska är byn rätt ställe.',
      ] },
    ],
  },

  vinuela: {
    nl: [
      { h: 'Bereikbaarheid en vervoer', p: [
        'Viñuela ligt in het binnenland, aan de A-356 tussen Vélez-Málaga en het noorden van de Axarquía. Naar Vélez-Málaga en het ziekenhuis rijdt u ongeveer een kwartier, naar de kust bij Torre del Mar twintig minuten en naar de luchthaven van Málaga zo’n 45 minuten. Er rijdt een lijnbus naar Vélez-Málaga, maar niet vaak. Met een auto bent u hier veel vrijer.',
        'Het dorp en de kernen Los Romanes en Los Gómez zijn klein, met een paar winkels, bars en een gezondheidscentrum. Voor grote boodschappen rijdt u naar Vélez-Málaga. Veel huizen liggen verspreid op het platteland rond het meer, vaak aan een onverharde weg.',
      ] },
      { h: 'Klimaat door het jaar', p: [
        'Omdat Viñuela verder van zee ligt, is het hier in de zomer warmer dan aan de kust, met dagen boven de 35 graden. De nachten koelen beter af. In de winter zijn de nachten fris en hangt er soms mist boven het meer. Een huis hier heeft dus zowel goede koeling als verwarming nodig. Meer over het klimaat leest u bij <a href="/nl/weer/">het weer in de Axarquía</a>.',
      ] },
      { h: 'De omgeving', p: [
        'Het stuwmeer van La Viñuela, het grootste van de provincie, ligt aan de rand van het dorp, met wandel- en fietsroutes langs de oever en picknickplekken. Daarachter rijst La Maroma op. In de buurt liggen de bergdorpen <a href="/nl/plaatsen/alcaucin/">Alcaucín</a>, <a href="/nl/plaatsen/periana/">Periana</a> en <a href="/nl/plaatsen/canillas-de-aceituno/">Canillas de Aceituno</a>. Over de pas van Zafarraya rijdt u in ruim een uur naar Granada.',
      ] },
      { h: 'Dagelijks leven', p: [
        'Viñuela is klein: ongeveer 2.000 inwoners, verdeeld over het dorp, Los Romanes, Los Gómez en het buitengebied. Ruim 40% heeft een buitenlandse nationaliteit, vooral Britten. Het leven is landelijk en rustig, met de bar aan het plein als ontmoetingsplek en een feria in elke kern in de zomer. Buren wonen soms ver uit elkaar, dus het is fijn als iemand een oogje in het zeil houdt als u weg bent; lees over <a href="/nl/sleutelbeheer/">sleutelbeheer</a>.',
      ] },
    ],
    en: [
      { h: 'Getting there and getting around', p: [
        'Viñuela lies inland on the A-356 between Vélez-Málaga and the north of the Axarquía. Vélez-Málaga and the hospital are about fifteen minutes away, the coast at Torre del Mar twenty minutes and Málaga airport around 45 minutes. A bus runs to Vélez-Málaga, but not often. With a car you are much freer here.',
        'The village and the hamlets of Los Romanes and Los Gómez are small, with a few shops, bars and a health centre. For big shopping trips you drive to Vélez-Málaga. Many houses are scattered across the countryside around the lake, often on an unpaved track.',
      ] },
      { h: 'Climate through the year', p: [
        'Because Viñuela is further from the sea, summers are hotter than on the coast, with days above 35 degrees. Nights cool down better. In winter the nights are fresh and there is sometimes mist over the lake. So a house here needs both good cooling and heating. More on the climate in <a href="/en/weather/">the weather in the Axarquía</a>.',
      ] },
      { h: 'The surrounding area', p: [
        'La Viñuela reservoir, the largest in the province, is on the edge of the village, with walking and cycling routes along the shore and picnic spots. Behind it rises La Maroma. Nearby are the mountain villages of <a href="/en/places/alcaucin/">Alcaucín</a>, <a href="/en/places/periana/">Periana</a> and <a href="/en/places/canillas-de-aceituno/">Canillas de Aceituno</a>. Over the Zafarraya pass, Granada is a little over an hour away.',
      ] },
      { h: 'Everyday life', p: [
        'Viñuela is small: about 2,000 inhabitants, spread over the village, Los Romanes, Los Gómez and the countryside. More than 40% are foreign nationals, mostly British. Life is rural and quiet, with the bar on the square as a meeting place and a feria in each hamlet in summer. Neighbours can live far apart, so it helps to have someone keep an eye on the house while you are away; see <a href="/en/key-holding/">key holding</a>.',
      ] },
    ],
    de: [
      { h: 'Anreise und Verkehr', p: [
        'Viñuela liegt im Landesinneren an der A-356 zwischen Vélez-Málaga und dem Norden der Axarquía. Nach Vélez-Málaga und zum Krankenhaus fahren Sie etwa eine Viertelstunde, an die Küste bei Torre del Mar zwanzig Minuten und zum Flughafen Málaga rund 45 Minuten. Ein Bus fährt nach Vélez-Málaga, aber nicht oft. Mit dem Auto sind Sie hier viel freier.',
        'Das Dorf und die Ortsteile Los Romanes und Los Gómez sind klein, mit einigen Geschäften, Bars und einem Gesundheitszentrum. Für den Großeinkauf fahren Sie nach Vélez-Málaga. Viele Häuser liegen verstreut auf dem Land rund um den See, oft an einem unbefestigten Weg.',
      ] },
      { h: 'Klima im Jahresverlauf', p: [
        'Weil Viñuela weiter vom Meer entfernt ist, sind die Sommer heißer als an der Küste, mit Tagen über 35 Grad. Die Nächte kühlen besser ab. Im Winter sind die Nächte frisch, und manchmal liegt Nebel über dem See. Ein Haus hier braucht also gute Kühlung und Heizung. Mehr zum Klima unter <a href="/de/wetter/">Wetter in der Axarquía</a>.',
      ] },
      { h: 'Die Umgebung', p: [
        'Der Stausee La Viñuela, der größte der Provinz, liegt am Ortsrand, mit Wander- und Radwegen am Ufer und Picknickplätzen. Dahinter erhebt sich La Maroma. In der Nähe liegen die Bergdörfer <a href="/de/orte/alcaucin/">Alcaucín</a>, <a href="/de/orte/periana/">Periana</a> und <a href="/de/orte/canillas-de-aceituno/">Canillas de Aceituno</a>. Über den Pass von Zafarraya erreichen Sie Granada in gut einer Stunde.',
      ] },
      { h: 'Alltag', p: [
        'Viñuela ist klein: rund 2.000 Einwohner, verteilt auf das Dorf, Los Romanes, Los Gómez und das Umland. Über 40% haben eine ausländische Staatsangehörigkeit, vor allem Briten. Das Leben ist ländlich und ruhig, mit der Bar am Platz als Treffpunkt und einer Feria in jedem Ortsteil im Sommer. Nachbarn wohnen manchmal weit auseinander; es hilft, wenn jemand nach dem Haus sieht, wenn Sie weg sind. Siehe <a href="/de/hausbetreuung/">Hausbetreuung</a>.',
      ] },
    ],
    sv: [
      { h: 'Hitta hit och ta sig runt', p: [
        'Viñuela ligger inåt landet vid A-356 mellan Vélez-Málaga och norra Axarquía. Till Vélez-Málaga och sjukhuset tar det ungefär en kvart, till kusten vid Torre del Mar tjugo minuter och till flygplatsen i Málaga cirka 45 minuter. En buss går till Vélez-Málaga, men inte ofta. Med bil är du mycket friare här.',
        'Byn och delarna Los Romanes och Los Gómez är små, med några affärer, barer och en vårdcentral. För storhandling åker du till Vélez-Málaga. Många hus ligger utspridda på landsbygden runt sjön, ofta vid en grusväg.',
      ] },
      { h: 'Klimatet under året', p: [
        'Eftersom Viñuela ligger längre från havet är somrarna varmare än vid kusten, med dagar över 35 grader. Nätterna svalnar bättre. På vintern är nätterna kyliga och ibland ligger dimma över sjön. Ett hus här behöver alltså både bra kylning och värme. Mer om klimatet: <a href="/sv/vader/">vädret i Axarquía</a>.',
      ] },
      { h: 'Omgivningen', p: [
        'Dammsjön La Viñuela, provinsens största, ligger i utkanten av byn, med vandrings- och cykelleder längs stranden och picknickplatser. Bakom reser sig La Maroma. I närheten ligger bergsbyarna <a href="/sv/orter/alcaucin/">Alcaucín</a>, <a href="/sv/orter/periana/">Periana</a> och <a href="/sv/orter/canillas-de-aceituno/">Canillas de Aceituno</a>. Över passet vid Zafarraya når du Granada på drygt en timme.',
      ] },
      { h: 'Vardagen', p: [
        'Viñuela är litet: cirka 2 000 invånare, fördelade på byn, Los Romanes, Los Gómez och landsbygden. Över 40% är utländska medborgare, mest britter. Livet är lantligt och lugnt, med baren vid torget som mötesplats och en feria i varje del på sommaren. Grannarna kan bo långt ifrån varandra, så det är bra om någon har tillsyn över huset när du är borta; läs om <a href="/sv/tillsyn/">tillsyn</a>.',
      ] },
    ],
  },

  'torre-del-mar': {
    nl: [
      { h: 'Bereikbaarheid en vervoer', p: [
        'Torre del Mar ligt aan de A-7, op ongeveer 35 tot 40 minuten van de luchthaven van Málaga. Er rijden vaak bussen naar Málaga en naar Vélez-Málaga, en langs de kust naar Nerja. De stad is vlak, waardoor u hier makkelijk fietst en wandelt; langs de hele boulevard loopt een fietspad.',
        'Bijna alles ligt op loopafstand: supermarkten, de markt, banken, artsen en een groot aanbod aan restaurants en strandtenten. Het ziekenhuis van de streek staat in Vélez-Málaga, op tien minuten rijden. Torre del Mar hoort bij de gemeente Vélez-Málaga: vergunningen en gemeentelijke belastingen regelt u daar.',
      ] },
      { h: 'Klimaat door het jaar', p: [
        'Torre del Mar ligt in de brede kustvlakte bij de monding van de Vélez-rivier. Het is er zonnig en zacht, met winters van rond de 17 graden overdag. Omdat de bergen hier verder van zee liggen, waait het iets vaker dan in Nerja, en bij <em>terral</em>, de hete landwind, kan het in de zomer erg warm worden. Per maand leest u meer op <a href="/nl/plaatsen/torre-del-mar/weer/">het weer in Torre del Mar</a>.',
      ] },
      { h: 'De omgeving', p: [
        'Vlak naast de stad ligt de haven van <a href="/nl/plaatsen/caleta-de-velez/">Caleta de Vélez</a>, met vissersboten en jachten, en vier kilometer landinwaarts de oude stad <a href="/nl/plaatsen/velez-malaga/">Vélez-Málaga</a>. Langs de kust liggen <a href="/nl/plaatsen/algarrobo/">Algarrobo Costa</a> en <a href="/nl/plaatsen/benajarafe/">Benajarafe</a>. Bij de monding van de rivier is een klein natuurgebied met vogels. Het meer van <a href="/nl/plaatsen/vinuela/">La Viñuela</a> ligt op twintig minuten.',
      ] },
      { h: 'Wonen in Torre del Mar', p: [
        'Torre del Mar is een echte woonplaats, ook buiten het seizoen. Er wonen vooral Spanjaarden, met daarnaast veel Britten, Nederlanders, Duitsers en Scandinaviërs. Het aanbod bestaat vooral uit appartementen, van oudere complexen aan de boulevard tot nieuwbouw aan de westkant. Lees waar u op let in <a href="/nl/gidsen/appartement-kopen-spanje/">appartement kopen in Spanje</a>, en laat het appartement vóór de koop <a href="/nl/aankoopkeuring/">keuren</a>.',
      ] },
    ],
    en: [
      { h: 'Getting there and getting around', p: [
        'Torre del Mar is on the A-7, about 35 to 40 minutes from Málaga airport. Buses run often to Málaga and Vélez-Málaga, and along the coast to Nerja. The town is flat, so it is easy to cycle and walk; a cycle path runs the length of the promenade.',
        'Almost everything is within walking distance: supermarkets, the market, banks, doctors and a wide choice of restaurants and beach bars. The regional hospital is in Vélez-Málaga, ten minutes’ drive. Torre del Mar belongs to the municipality of Vélez-Málaga, so permits and local taxes are handled there.',
      ] },
      { h: 'Climate through the year', p: [
        'Torre del Mar lies on the wide coastal plain at the mouth of the Vélez river. It is sunny and mild, with winter days around 17 degrees. Because the mountains are further from the sea here, it is slightly windier than Nerja, and when the <em>terral</em>, the hot land wind, blows it can get very hot in summer. Month by month, see <a href="/en/places/torre-del-mar/weather/">the weather in Torre del Mar</a>.',
      ] },
      { h: 'The surrounding area', p: [
        'Right next to the town is the harbour of <a href="/en/places/caleta-de-velez/">Caleta de Vélez</a>, with fishing boats and yachts, and four kilometres inland the old town of <a href="/en/places/velez-malaga/">Vélez-Málaga</a>. Along the coast lie <a href="/en/places/algarrobo/">Algarrobo Costa</a> and <a href="/en/places/benajarafe/">Benajarafe</a>. At the river mouth there is a small nature area with birds. The lake at <a href="/en/places/vinuela/">La Viñuela</a> is twenty minutes away.',
      ] },
      { h: 'Living in Torre del Mar', p: [
        'Torre del Mar is a real place to live, also out of season. Most residents are Spanish, alongside many Britons, Dutch, Germans and Scandinavians. Most homes are apartments, from older blocks on the promenade to new builds on the western side. See what to look out for in <a href="/en/guides/buying-an-apartment-in-spain/">buying an apartment in Spain</a>, and have the apartment <a href="/en/property-survey/">surveyed</a> before you buy.',
      ] },
    ],
    de: [
      { h: 'Anreise und Verkehr', p: [
        'Torre del Mar liegt an der A-7, etwa 35 bis 40 Minuten vom Flughafen Málaga. Busse fahren häufig nach Málaga und Vélez-Málaga und an der Küste entlang nach Nerja. Der Ort ist flach, Sie können also gut radeln und spazieren; an der ganzen Promenade entlang führt ein Radweg.',
        'Fast alles ist zu Fuß erreichbar: Supermärkte, der Markt, Banken, Ärzte und eine große Auswahl an Restaurants und Strandbars. Das Kreiskrankenhaus steht in Vélez-Málaga, zehn Minuten mit dem Auto. Torre del Mar gehört zur Gemeinde Vélez-Málaga: Genehmigungen und Gemeindesteuern laufen dort.',
      ] },
      { h: 'Klima im Jahresverlauf', p: [
        'Torre del Mar liegt in der breiten Küstenebene an der Mündung des Río Vélez. Es ist sonnig und mild, mit Wintertagen um 17 Grad. Weil die Berge hier weiter vom Meer entfernt sind, weht es etwas häufiger als in Nerja, und bei <em>Terral</em>, dem heißen Landwind, kann es im Sommer sehr heiß werden. Monat für Monat lesen Sie mehr unter <a href="/de/orte/torre-del-mar/wetter/">Wetter in Torre del Mar</a>.',
      ] },
      { h: 'Die Umgebung', p: [
        'Direkt neben dem Ort liegt der Hafen von <a href="/de/orte/caleta-de-velez/">Caleta de Vélez</a> mit Fischerbooten und Jachten, vier Kilometer landeinwärts die Altstadt von <a href="/de/orte/velez-malaga/">Vélez-Málaga</a>. Entlang der Küste liegen <a href="/de/orte/algarrobo/">Algarrobo Costa</a> und <a href="/de/orte/benajarafe/">Benajarafe</a>. An der Flussmündung gibt es ein kleines Naturgebiet mit Vögeln. Der Stausee <a href="/de/orte/vinuela/">La Viñuela</a> ist zwanzig Minuten entfernt.',
      ] },
      { h: 'Wohnen in Torre del Mar', p: [
        'Torre del Mar ist ein echter Wohnort, auch außerhalb der Saison. Die meisten Bewohner sind Spanier, daneben viele Briten, Niederländer, Deutsche und Skandinavier. Das Angebot besteht vor allem aus Wohnungen, von älteren Anlagen an der Promenade bis zu Neubauten im Westen. Worauf Sie achten, lesen Sie unter <a href="/de/ratgeber/wohnung-kaufen-spanien/">Wohnung kaufen in Spanien</a>; lassen Sie die Wohnung vor dem Kauf <a href="/de/immobiliengutachten/">begutachten</a>.',
      ] },
    ],
    sv: [
      { h: 'Hitta hit och ta sig runt', p: [
        'Torre del Mar ligger vid A-7, cirka 35 till 40 minuter från flygplatsen i Málaga. Bussar går ofta till Málaga och Vélez-Málaga och längs kusten till Nerja. Staden är platt, så det är lätt att cykla och promenera; en cykelbana går längs hela strandpromenaden.',
        'Nästan allt ligger på gångavstånd: mataffärer, marknaden, banker, läkare och ett stort utbud av restauranger och strandbarer. Sjukhuset ligger i Vélez-Málaga, tio minuter bort med bil. Torre del Mar hör till kommunen Vélez-Málaga, så bygglov och kommunala skatter sköts där.',
      ] },
      { h: 'Klimatet under året', p: [
        'Torre del Mar ligger på den breda kustslätten vid Vélezflodens mynning. Det är soligt och milt, med vinterdagar runt 17 grader. Eftersom bergen ligger längre från havet här blåser det lite oftare än i Nerja, och när <em>terral</em>, den heta landvinden, blåser kan det bli mycket varmt på sommaren. Månad för månad: <a href="/sv/orter/torre-del-mar/vader/">vädret i Torre del Mar</a>.',
      ] },
      { h: 'Omgivningen', p: [
        'Alldeles intill ligger hamnen i <a href="/sv/orter/caleta-de-velez/">Caleta de Vélez</a>, med fiskebåtar och segelbåtar, och fyra kilometer in i landet den gamla staden <a href="/sv/orter/velez-malaga/">Vélez-Málaga</a>. Längs kusten ligger <a href="/sv/orter/algarrobo/">Algarrobo Costa</a> och <a href="/sv/orter/benajarafe/">Benajarafe</a>. Vid flodmynningen finns ett litet naturområde med fåglar. Sjön <a href="/sv/orter/vinuela/">La Viñuela</a> ligger tjugo minuter bort.',
      ] },
      { h: 'Att bo i Torre del Mar', p: [
        'Torre del Mar är en riktig boplats, även utanför säsongen. De flesta invånare är spanjorer, men här bor också många britter, nederländare, tyskar och skandinaver. Utbudet består mest av lägenheter, från äldre hus vid strandpromenaden till nyproduktion i väster. Läs vad du ska tänka på i <a href="/sv/guider/kopa-lagenhet-i-spanien/">köpa lägenhet i Spanien</a>, och låt <a href="/sv/besiktning/">besiktiga</a> lägenheten före köpet.',
      ] },
    ],
  },

  'velez-malaga': {
    nl: [
      { h: 'Bereikbaarheid en vervoer', p: [
        'Vélez-Málaga ligt vier kilometer landinwaarts, aan de A-7 en de A-356 naar het binnenland. Naar de luchthaven van Málaga rijdt u ongeveer 40 minuten. Er rijden vaak bussen naar Málaga, naar Torre del Mar en naar de dorpen in de bergen; voor veel bergdorpen is Vélez het vertrekpunt.',
        'Als hoofdstad van de Axarquía heeft Vélez de diensten die u als eigenaar nodig hebt: het streekziekenhuis, notarissen, het eigendomsregister, een kantoor van de belastingdienst en de politie voor uw <a href="/nl/gidsen/nie-nummer-aanvragen-spanje/">NIE-nummer</a>. Ook de grote bouwmarkten en groothandels voor materiaal liggen hier.',
      ] },
      { h: 'Klimaat door het jaar', p: [
        'In de stad is het in de zomer een paar graden warmer dan aan de kust in Torre del Mar, omdat de zeebries minder ver landinwaarts komt. De winters zijn zacht, met dagen rond de 17 graden. In de kernen hoger in de heuvels, zoals Lagos, Cajiz en Trapiche, zijn de nachten koeler. Meer leest u bij <a href="/nl/weer/">het weer in de Axarquía</a>.',
      ] },
      { h: 'De omgeving', p: [
        'De gemeente is groot en loopt van de kust tot ver de heuvels in. Aan zee liggen <a href="/nl/plaatsen/torre-del-mar/">Torre del Mar</a>, de haven van <a href="/nl/plaatsen/caleta-de-velez/">Caleta de Vélez</a> en <a href="/nl/plaatsen/benajarafe/">Benajarafe</a>. Landinwaarts rijdt u in een kwartier naar het meer van <a href="/nl/plaatsen/vinuela/">La Viñuela</a> of naar de dorpen <a href="/nl/plaatsen/benamargosa/">Benamargosa</a> en <a href="/nl/plaatsen/comares/">Comares</a>, hoog op een heuveltop.',
      ] },
      { h: 'Dagelijks leven', p: [
        'Met ongeveer 85.000 inwoners in de hele gemeente is Vélez-Málaga een echte Spaanse stad, en geen badplaats. In het centrum wonen vooral Spanjaarden; buitenlanders wonen vaker in Torre del Mar of in het buitengebied. Dat maakt Vélez interessant als u Spaans wilt leren en het gewone Andalusische leven zoekt, met de markthal, het oude centrum onder de Moorse burcht en de processies in de Semana Santa. Woningen zijn hier doorgaans goedkoper dan aan de kust.',
      ] },
    ],
    en: [
      { h: 'Getting there and getting around', p: [
        'Vélez-Málaga lies four kilometres inland, on the A-7 and the A-356 heading inland. Málaga airport is about 40 minutes’ drive. Buses run often to Málaga, Torre del Mar and the mountain villages; for many of those villages Vélez is the starting point.',
        'As the capital of the Axarquía, Vélez has the services you need as an owner: the regional hospital, notaries, the land registry, a tax office and the police for your <a href="/en/guides/nie-number-spain/">NIE number</a>. The large DIY stores and builders’ merchants are here too.',
      ] },
      { h: 'Climate through the year', p: [
        'In summer the town is a few degrees warmer than the coast at Torre del Mar, because the sea breeze reaches less far inland. Winters are mild, with days around 17 degrees. In the hamlets higher in the hills, such as Lagos, Cajiz and Trapiche, nights are cooler. More in <a href="/en/weather/">the weather in the Axarquía</a>.',
      ] },
      { h: 'The surrounding area', p: [
        'The municipality is large and runs from the coast far into the hills. By the sea are <a href="/en/places/torre-del-mar/">Torre del Mar</a>, the harbour of <a href="/en/places/caleta-de-velez/">Caleta de Vélez</a> and <a href="/en/places/benajarafe/">Benajarafe</a>. Inland, the lake at <a href="/en/places/vinuela/">La Viñuela</a> and the villages of <a href="/en/places/benamargosa/">Benamargosa</a> and <a href="/en/places/comares/">Comares</a>, high on a hilltop, are fifteen minutes away.',
      ] },
      { h: 'Everyday life', p: [
        'With about 85,000 inhabitants across the municipality, Vélez-Málaga is a real Spanish town, not a resort. The centre is mainly Spanish; foreigners more often live in Torre del Mar or in the countryside. That makes Vélez appealing if you want to learn Spanish and are looking for ordinary Andalusian life, with the market hall, the old centre below the Moorish fortress and the Holy Week processions. Homes here are usually cheaper than on the coast.',
      ] },
    ],
    de: [
      { h: 'Anreise und Verkehr', p: [
        'Vélez-Málaga liegt vier Kilometer landeinwärts, an der A-7 und der A-356 ins Hinterland. Zum Flughafen Málaga fahren Sie etwa 40 Minuten. Busse fahren häufig nach Málaga, Torre del Mar und in die Bergdörfer; für viele Dörfer ist Vélez der Ausgangspunkt.',
        'Als Hauptstadt der Axarquía hat Vélez die Stellen, die Sie als Eigentümer brauchen: das Kreiskrankenhaus, Notare, das Grundbuchamt, ein Finanzamt und die Polizei für Ihre <a href="/de/ratgeber/nie-nummer-spanien/">NIE-Nummer</a>. Auch die großen Baumärkte und Baustoffhändler sind hier.',
      ] },
      { h: 'Klima im Jahresverlauf', p: [
        'In der Stadt ist es im Sommer ein paar Grad wärmer als an der Küste in Torre del Mar, weil die Meeresbrise weniger weit ins Land reicht. Die Winter sind mild, mit Tagen um 17 Grad. In den höher gelegenen Ortsteilen wie Lagos, Cajiz und Trapiche sind die Nächte kühler. Mehr unter <a href="/de/wetter/">Wetter in der Axarquía</a>.',
      ] },
      { h: 'Die Umgebung', p: [
        'Die Gemeinde ist groß und reicht von der Küste weit in die Hügel. Am Meer liegen <a href="/de/orte/torre-del-mar/">Torre del Mar</a>, der Hafen von <a href="/de/orte/caleta-de-velez/">Caleta de Vélez</a> und <a href="/de/orte/benajarafe/">Benajarafe</a>. Im Landesinneren erreichen Sie in einer Viertelstunde den Stausee <a href="/de/orte/vinuela/">La Viñuela</a> oder die Dörfer <a href="/de/orte/benamargosa/">Benamargosa</a> und <a href="/de/orte/comares/">Comares</a>, hoch auf einem Hügel.',
      ] },
      { h: 'Alltag', p: [
        'Mit rund 85.000 Einwohnern in der ganzen Gemeinde ist Vélez-Málaga eine echte spanische Stadt und kein Badeort. Im Zentrum wohnen vor allem Spanier; Ausländer leben eher in Torre del Mar oder im Umland. Das macht Vélez interessant, wenn Sie Spanisch lernen und das normale andalusische Leben suchen, mit Markthalle, der Altstadt unter der maurischen Burg und den Prozessionen der Semana Santa. Wohnungen sind hier meist günstiger als an der Küste.',
      ] },
    ],
    sv: [
      { h: 'Hitta hit och ta sig runt', p: [
        'Vélez-Málaga ligger fyra kilometer in i landet, vid A-7 och A-356 mot inlandet. Till flygplatsen i Málaga kör du cirka 40 minuter. Bussar går ofta till Málaga, Torre del Mar och bergsbyarna; för många byar är Vélez utgångspunkten.',
        'Som huvudort i Axarquía har Vélez de tjänster du behöver som ägare: sjukhuset, notarier, fastighetsregistret, ett skattekontor och polisen för ditt <a href="/sv/guider/nie-nummer-spanien/">NIE-nummer</a>. Här finns också de stora byggvaruhusen och grossisterna för material.',
      ] },
      { h: 'Klimatet under året', p: [
        'I staden är det på sommaren några grader varmare än vid kusten i Torre del Mar, eftersom havsbrisen inte når lika långt in. Vintrarna är milda, med dagar runt 17 grader. I de högre belägna delarna, som Lagos, Cajiz och Trapiche, är nätterna svalare. Mer på <a href="/sv/vader/">vädret i Axarquía</a>.',
      ] },
      { h: 'Omgivningen', p: [
        'Kommunen är stor och sträcker sig från kusten långt upp i kullarna. Vid havet ligger <a href="/sv/orter/torre-del-mar/">Torre del Mar</a>, hamnen i <a href="/sv/orter/caleta-de-velez/">Caleta de Vélez</a> och <a href="/sv/orter/benajarafe/">Benajarafe</a>. Inåt landet når du på en kvart sjön <a href="/sv/orter/vinuela/">La Viñuela</a> eller byarna <a href="/sv/orter/benamargosa/">Benamargosa</a> och <a href="/sv/orter/comares/">Comares</a>, högt uppe på en kulle.',
      ] },
      { h: 'Vardagen', p: [
        'Med cirka 85 000 invånare i hela kommunen är Vélez-Málaga en riktig spansk stad och ingen badort. I centrum bor mest spanjorer; utlänningar bor oftare i Torre del Mar eller på landsbygden. Det gör Vélez intressant om du vill lära dig spanska och söker det vanliga andalusiska livet, med saluhallen, gamla stan under den moriska borgen och processionerna under Semana Santa. Bostäder är här oftast billigare än vid kusten.',
      ] },
    ],
  },

  'rincon-de-la-victoria': {
    nl: [
      { h: 'Bereikbaarheid en vervoer', p: [
        'Rincón de la Victoria ligt op ongeveer 16 kilometer van het centrum van Málaga, aan de A-7 en de kustweg. Naar de luchthaven rijdt u ongeveer 25 minuten. Bussen rijden de hele dag door naar Málaga, in ongeveer een halfuur tot het centrum. Daarmee is Rincón de plek in de Axarquía waar u het makkelijkst zonder auto woont en toch dicht bij een grote stad.',
        'De boulevard loopt over kilometers langs het strand, met een wandel- en fietspad door de tunnels van de oude spoorlijn Málaga–Vélez. Supermarkten, scholen, artsen en sportvoorzieningen zijn er volop; voor het ziekenhuis gaat u naar Málaga.',
      ] },
      { h: 'Klimaat door het jaar', p: [
        'Rincón heeft vrijwel hetzelfde klimaat als Málaga: zacht in de winter, met dagen rond de 17 graden, en warm en droog in de zomer. De heuvels achter de kust zijn hier lager, waardoor de zeebries ver het land in komt. Per maand leest u meer op <a href="/nl/plaatsen/rincon-de-la-victoria/weer/">het weer in Rincón de la Victoria</a>.',
      ] },
      { h: 'De omgeving', p: [
        'Rincón is de toegangspoort van de Axarquía vanuit Málaga. Naar het westen ligt <a href="/nl/plaatsen/la-cala-del-moral/">La Cala del Moral</a> en daarna de stad Málaga, met musea, het oude centrum en de haven. Landinwaarts liggen de kleine dorpen <a href="/nl/plaatsen/moclinejo/">Moclinejo</a>, <a href="/nl/plaatsen/macharaviaya/">Macharaviaya</a> en <a href="/nl/plaatsen/totalan/">Totalán</a>, en het natuurpark Montes de Málaga. Naar het oosten volgt de kust met <a href="/nl/plaatsen/benajarafe/">Benajarafe</a> en <a href="/nl/plaatsen/torre-del-mar/">Torre del Mar</a>.',
      ] },
      { h: 'Dagelijks leven', p: [
        'Rincón is met ruim 52.000 inwoners de grootste kustgemeente van de Axarquía en vooral een woonplaats voor Spaanse gezinnen die in Málaga werken. Dat geeft het hele jaar door leven: scholen, sportclubs, terrassen die in de winter vol zitten. Er wonen minder buitenlanders dan in Nerja of Torrox, dus Spaans spreken helpt. Door de nabijheid van Málaga liggen de woningprijzen hoger dan verder naar het oosten.',
      ] },
    ],
    en: [
      { h: 'Getting there and getting around', p: [
        'Rincón de la Victoria is about 16 kilometres from the centre of Málaga, on the A-7 and the coast road. The airport is around 25 minutes’ drive. Buses run all day to Málaga, taking about half an hour to the centre. That makes Rincón the place in the Axarquía where it is easiest to live without a car and still be close to a big city.',
        'The promenade runs for kilometres along the beach, with a walking and cycling path through the tunnels of the old Málaga–Vélez railway. Supermarkets, schools, doctors and sports facilities are plentiful; for hospital care you go to Málaga.',
      ] },
      { h: 'Climate through the year', p: [
        'Rincón has almost the same climate as Málaga: mild in winter, with days around 17 degrees, and warm and dry in summer. The hills behind the coast are lower here, so the sea breeze reaches well inland. Month by month, see <a href="/en/places/rincon-de-la-victoria/weather/">the weather in Rincón de la Victoria</a>.',
      ] },
      { h: 'The surrounding area', p: [
        'Rincón is the gateway to the Axarquía from Málaga. To the west lies <a href="/en/places/la-cala-del-moral/">La Cala del Moral</a> and then the city of Málaga, with its museums, old centre and harbour. Inland are the small villages of <a href="/en/places/moclinejo/">Moclinejo</a>, <a href="/en/places/macharaviaya/">Macharaviaya</a> and <a href="/en/places/totalan/">Totalán</a>, and the Montes de Málaga natural park. To the east the coast continues with <a href="/en/places/benajarafe/">Benajarafe</a> and <a href="/en/places/torre-del-mar/">Torre del Mar</a>.',
      ] },
      { h: 'Everyday life', p: [
        'With more than 52,000 inhabitants, Rincón is the largest coastal municipality in the Axarquía and mainly a home for Spanish families who work in Málaga. That keeps it lively all year: schools, sports clubs, terraces that are full in winter. Fewer foreigners live here than in Nerja or Torrox, so speaking Spanish helps. Because Málaga is so close, property prices are higher than further east.',
      ] },
    ],
    de: [
      { h: 'Anreise und Verkehr', p: [
        'Rincón de la Victoria liegt etwa 16 Kilometer vom Zentrum Málagas, an der A-7 und der Küstenstraße. Zum Flughafen fahren Sie rund 25 Minuten. Busse fahren den ganzen Tag nach Málaga, in etwa einer halben Stunde ins Zentrum. Damit ist Rincón der Ort in der Axarquía, an dem Sie am leichtesten ohne Auto leben und trotzdem nah an einer Großstadt sind.',
        'Die Promenade führt kilometerlang am Strand entlang, mit einem Fuß- und Radweg durch die Tunnel der alten Bahnlinie Málaga–Vélez. Supermärkte, Schulen, Ärzte und Sportanlagen gibt es reichlich; ins Krankenhaus fahren Sie nach Málaga.',
      ] },
      { h: 'Klima im Jahresverlauf', p: [
        'Rincón hat fast dasselbe Klima wie Málaga: mild im Winter, mit Tagen um 17 Grad, und warm und trocken im Sommer. Die Hügel hinter der Küste sind hier niedriger, sodass die Meeresbrise weit ins Land reicht. Monat für Monat lesen Sie mehr unter <a href="/de/orte/rincon-de-la-victoria/wetter/">Wetter in Rincón de la Victoria</a>.',
      ] },
      { h: 'Die Umgebung', p: [
        'Rincón ist das Tor zur Axarquía von Málaga aus. Westlich liegt <a href="/de/orte/la-cala-del-moral/">La Cala del Moral</a> und dann die Stadt Málaga mit Museen, Altstadt und Hafen. Im Landesinneren liegen die kleinen Dörfer <a href="/de/orte/moclinejo/">Moclinejo</a>, <a href="/de/orte/macharaviaya/">Macharaviaya</a> und <a href="/de/orte/totalan/">Totalán</a> sowie der Naturpark Montes de Málaga. Östlich geht die Küste weiter mit <a href="/de/orte/benajarafe/">Benajarafe</a> und <a href="/de/orte/torre-del-mar/">Torre del Mar</a>.',
      ] },
      { h: 'Alltag', p: [
        'Mit über 52.000 Einwohnern ist Rincón die größte Küstengemeinde der Axarquía und vor allem ein Wohnort für spanische Familien, die in Málaga arbeiten. Das sorgt das ganze Jahr für Leben: Schulen, Sportvereine, Terrassen, die auch im Winter voll sind. Hier leben weniger Ausländer als in Nerja oder Torrox, Spanisch zu sprechen hilft also. Wegen der Nähe zu Málaga liegen die Immobilienpreise höher als weiter östlich.',
      ] },
    ],
    sv: [
      { h: 'Hitta hit och ta sig runt', p: [
        'Rincón de la Victoria ligger cirka 16 kilometer från Málagas centrum, vid A-7 och kustvägen. Till flygplatsen kör du ungefär 25 minuter. Bussar går hela dagen till Málaga, ungefär en halvtimme till centrum. Det gör Rincón till den plats i Axarquía där det är lättast att bo utan bil och ändå nära en storstad.',
        'Strandpromenaden går i flera kilometer längs stranden, med gång- och cykelväg genom tunnlarna från den gamla järnvägen Málaga–Vélez. Mataffärer, skolor, läkare och idrottsanläggningar finns gott om; till sjukhus åker du till Málaga.',
      ] },
      { h: 'Klimatet under året', p: [
        'Rincón har nästan samma klimat som Málaga: milt på vintern, med dagar runt 17 grader, och varmt och torrt på sommaren. Kullarna bakom kusten är lägre här, så havsbrisen når långt in i landet. Månad för månad: <a href="/sv/orter/rincon-de-la-victoria/vader/">vädret i Rincón de la Victoria</a>.',
      ] },
      { h: 'Omgivningen', p: [
        'Rincón är porten till Axarquía från Málaga. Västerut ligger <a href="/sv/orter/la-cala-del-moral/">La Cala del Moral</a> och sedan staden Málaga, med museer, gamla stan och hamnen. Inåt landet ligger de små byarna <a href="/sv/orter/moclinejo/">Moclinejo</a>, <a href="/sv/orter/macharaviaya/">Macharaviaya</a> och <a href="/sv/orter/totalan/">Totalán</a>, och naturparken Montes de Málaga. Österut fortsätter kusten med <a href="/sv/orter/benajarafe/">Benajarafe</a> och <a href="/sv/orter/torre-del-mar/">Torre del Mar</a>.',
      ] },
      { h: 'Vardagen', p: [
        'Med över 52 000 invånare är Rincón den största kustkommunen i Axarquía och framför allt en boplats för spanska familjer som arbetar i Málaga. Det ger liv året runt: skolor, idrottsklubbar och terrasser som är fulla även på vintern. Här bor färre utlänningar än i Nerja eller Torrox, så det hjälper att tala spanska. Eftersom Málaga ligger så nära är bostadspriserna högre än längre österut.',
      ] },
    ],
  },
};
