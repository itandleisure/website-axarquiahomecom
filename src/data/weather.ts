// Weer en klimaat in de Axarquía: gemiddelden per maand, teksten per maand en per plaats.
// Bron: afgeronde langjarige gemiddelden (AEMET-normalen 1991–2020 voor Málaga en de oostkust),
// zeewatertemperatuur volgens Copernicus/Puertos del Estado. Per jaar en per plek verschilt het.
// Geen actuele verwachting: de pagina's gaan over het klimaat per maand.

export type WLang = 'nl' | 'en' | 'de';
export const weatherLangs: WLang[] = ['nl', 'en', 'de'];
type L = Record<WLang, string>;

export interface MonthClimate {
  /** Gemiddelde maximumtemperatuur aan de kust */
  max: number;
  /** Gemiddelde minimumtemperatuur aan de kust */
  min: number;
  /** Neerslag in mm */
  rain: number;
  /** Dagen met minstens 1 mm regen */
  rainDays: number;
  /** Zonuren per dag */
  sun: number;
  /** Zeewatertemperatuur */
  sea: number;
  /** Gemiddelde maximumtemperatuur thuis, ter vergelijking (NL: De Bilt, EN: Londen, DE: Berlijn) */
  home: Record<WLang, number>;
}

export const climate: MonthClimate[] = [
  { max: 17, min: 8, rain: 65, rainDays: 6, sun: 6, sea: 15, home: { nl: 6, en: 8, de: 3 } },
  { max: 18, min: 8, rain: 55, rainDays: 5, sun: 7, sea: 15, home: { nl: 7, en: 9, de: 5 } },
  { max: 20, min: 10, rain: 45, rainDays: 5, sun: 7, sea: 15, home: { nl: 10, en: 12, de: 9 } },
  { max: 21, min: 12, rain: 40, rainDays: 5, sun: 8, sea: 16, home: { nl: 14, en: 15, de: 15 } },
  { max: 24, min: 15, rain: 20, rainDays: 3, sun: 9, sea: 18, home: { nl: 18, en: 18, de: 19 } },
  { max: 28, min: 18, rain: 5, rainDays: 1, sun: 11, sea: 20, home: { nl: 21, en: 21, de: 22 } },
  { max: 30, min: 21, rain: 1, rainDays: 0, sun: 11, sea: 22, home: { nl: 23, en: 23, de: 24 } },
  { max: 31, min: 22, rain: 5, rainDays: 1, sun: 10, sea: 23, home: { nl: 23, en: 23, de: 24 } },
  { max: 28, min: 19, rain: 20, rainDays: 2, sun: 8, sea: 22, home: { nl: 19, en: 20, de: 19 } },
  { max: 24, min: 16, rain: 50, rainDays: 4, sun: 7, sea: 20, home: { nl: 15, en: 16, de: 14 } },
  { max: 20, min: 12, rain: 80, rainDays: 6, sun: 6, sea: 18, home: { nl: 10, en: 11, de: 8 } },
  { max: 18, min: 9, rain: 85, rainDays: 7, sun: 5, sea: 16, home: { nl: 7, en: 8, de: 4 } },
];

/** Hoogteligging: correctie op de kustwaarden (graden) en factor voor regen */
export type Altitude = 'coast' | 'hills' | 'mountains';
export const altitudeAdjust: Record<Altitude, { max: number; min: number; rain: number }> = {
  coast: { max: 0, min: 0, rain: 1 },
  hills: { max: -1, min: -2, rain: 1.15 },
  mountains: { max: -3, min: -5, rain: 1.35 },
};
export const climateFor = (m: number, alt: Altitude) => {
  const c = climate[m];
  const a = altitudeAdjust[alt];
  return { ...c, max: c.max + a.max, min: c.min + a.min, rain: Math.round((c.rain * a.rain) / 5) * 5 };
};

export const monthNames: Record<WLang, string[]> = {
  nl: ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'],
  en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  de: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
};
export const monthSlugs: Record<WLang, string[]> = {
  nl: monthNames.nl,
  en: monthNames.en.map((m) => m.toLowerCase()),
  de: ['januar', 'februar', 'maerz', 'april', 'mai', 'juni', 'juli', 'august', 'september', 'oktober', 'november', 'dezember'],
};

/** Adressen */
export const weatherBase: Record<WLang, string> = { nl: '/nl/weer/', en: '/en/weather/', de: '/de/wetter/' };
export const weatherMonthHref = (lang: WLang, m: number) => `${weatherBase[lang]}${monthSlugs[lang][m]}/`;
export const weatherSub: Record<WLang, string> = { nl: 'weer', en: 'weather', de: 'wetter' };
const placeBaseW: Record<WLang, string> = { nl: '/nl/plaatsen/', en: '/en/places/', de: '/de/orte/' };
export const weatherPlaceHref = (lang: WLang, slug: string) => `${placeBaseW[lang]}${slug}/${weatherSub[lang]}/`;

/** Per maand: hoe het weer is, en wat het betekent voor uw huis */
export const monthText: { weather: L; house: L }[] = [
  {
    weather: {
      nl: 'Januari is de koelste maand, maar overdag is het aan de kust meestal 15 tot 19 graden met veel zon. Op het terras in de luwte kunt u buiten lunchen. ’s Avonds en ’s nachts koelt het snel af, en in de bergdorpen kan het bij helder weer rond het vriespunt komen. Op de toppen van de Sierra Tejeda ligt soms sneeuw.',
      en: 'January is the coolest month, but on the coast it is usually 15 to 19 degrees in the daytime with plenty of sun. On a sheltered terrace you can have lunch outside. Evenings and nights cool down quickly, and in the mountain villages it can drop to around freezing on clear nights. There is sometimes snow on the peaks of the Sierra Tejeda.',
      de: 'Der Januar ist der kühlste Monat, aber an der Küste sind es tagsüber meist 15 bis 19 Grad mit viel Sonne. Auf einer windgeschützten Terrasse können Sie draußen zu Mittag essen. Abends und nachts kühlt es schnell ab, und in den Bergdörfern kann es in klaren Nächten um den Gefrierpunkt liegen. Auf den Gipfeln der Sierra Tejeda liegt manchmal Schnee.',
    },
    house: {
      nl: 'Binnen is het vaak kouder dan buiten: Spaanse huizen hebben dikke stenen muren, tegelvloeren en zelden isolatie. Een huis dat leegstaat, wordt koud en vochtig. Ventileer, gebruik een ontvochtiger en verwarm een beetje. Airco met verwarmingsfunctie is de zuinigste manier van verwarmen.',
      en: 'Indoors is often colder than outdoors: Spanish houses have thick stone walls, tiled floors and rarely any insulation. An empty house gets cold and damp. Ventilate, use a dehumidifier and keep a little heating on. Air con with a heating function is the most economical way to heat.',
      de: 'Drinnen ist es oft kälter als draußen: Spanische Häuser haben dicke Steinmauern, Fliesenböden und selten Dämmung. Ein leerstehendes Haus wird kalt und feucht. Lüften Sie, nutzen Sie einen Luftentfeuchter und heizen Sie ein wenig. Eine Klimaanlage mit Heizfunktion ist die sparsamste Art zu heizen.',
    },
  },
  {
    weather: {
      nl: 'Februari lijkt op januari, met iets langere en zonnigere dagen. Eind februari bloeien de amandelbomen in de heuvels rond Cómpeta en Comares. De zee is nog fris, rond 15 graden. Dit is de maand waarin veel overwinteraars uit Noord-Europa er zijn.',
      en: 'February is much like January, with slightly longer and sunnier days. In late February the almond trees blossom in the hills around Cómpeta and Comares. The sea is still cool, around 15 degrees. This is the month when many winter visitors from northern Europe are here.',
      de: 'Der Februar ähnelt dem Januar, mit etwas längeren und sonnigeren Tagen. Ende Februar blühen die Mandelbäume in den Hügeln um Cómpeta und Comares. Das Meer ist noch frisch, um 15 Grad. In diesem Monat sind viele Überwinterer aus Nordeuropa hier.',
    },
    house: {
      nl: 'Een goede maand om plannen te maken: de offertes voor een renovatie in het voorjaar kunnen nu worden opgevraagd, en u kunt zelf langskomen om materialen te kiezen. Controleer na regen het dakterras en de goten.',
      en: 'A good month to make plans: you can ask for quotes for a spring renovation now, and come over yourself to choose materials. Check the roof terrace and gutters after rain.',
      de: 'Ein guter Monat für Pläne: Angebote für eine Renovierung im Frühjahr können Sie jetzt anfragen und selbst vorbeikommen, um Materialien auszuwählen. Prüfen Sie nach Regen die Dachterrasse und die Regenrinnen.',
    },
  },
  {
    weather: {
      nl: 'In maart wordt het merkbaar warmer, met 18 tot 22 graden op zonnige dagen. Het kan nog een paar dagen flink regenen. Rond Pasen, dat in sommige jaren al in maart valt, begint het voorseizoen aan de kust.',
      en: 'In March it gets noticeably warmer, with 18 to 22 degrees on sunny days. There can still be a few days of heavy rain. Around Easter, which falls in March in some years, the early season starts on the coast.',
      de: 'Im März wird es spürbar wärmer, mit 18 bis 22 Grad an sonnigen Tagen. Es kann noch einige Tage kräftig regnen. Um Ostern, das in manchen Jahren schon in den März fällt, beginnt an der Küste die Vorsaison.',
    },
    house: {
      nl: 'Het begin van het bouwseizoen. Plan nu werk dat vóór de zomer klaar moet zijn, zoals een nieuwe badkamer, een zwembad of een buitenkeuken. Laat het zwembad opstarten en de airco reinigen vóór de warme maanden.',
      en: 'The start of the building season. Plan work that needs to be finished before summer now, such as a new bathroom, a pool or an outdoor kitchen. Have the pool started up and the air con cleaned before the warm months.',
      de: 'Der Beginn der Bausaison. Planen Sie jetzt Arbeiten, die vor dem Sommer fertig sein sollen, etwa ein neues Bad, einen Pool oder eine Außenküche. Lassen Sie den Pool in Betrieb nehmen und die Klimaanlage reinigen, bevor die warmen Monate kommen.',
    },
  },
  {
    weather: {
      nl: 'April is lente op zijn best: 20 tot 24 graden, groene heuvels en bloeiende bermen. Er valt nog wat regen, meestal in korte buien. De zee is met 16 graden nog te koud voor de meeste mensen, maar op het strand is het heerlijk.',
      en: 'April is spring at its best: 20 to 24 degrees, green hills and flowering verges. There is still some rain, usually in short showers. At 16 degrees the sea is still too cold for most people, but the beach is lovely.',
      de: 'Der April ist Frühling vom Feinsten: 20 bis 24 Grad, grüne Hügel und blühende Wegränder. Es regnet noch etwas, meist in kurzen Schauern. Mit 16 Grad ist das Meer für die meisten noch zu kalt, aber am Strand ist es herrlich.',
    },
    house: {
      nl: 'Ideaal weer om buiten te werken: schilderwerk, terrassen, daken en dakterrassen. Wilt u in de zomer een zwembad, dan is april de laatste goede maand om te beginnen.',
      en: 'Ideal weather for outdoor work: painting, terraces, roofs and roof terraces. If you want a pool for the summer, April is the last good month to start.',
      de: 'Ideales Wetter für Arbeiten im Freien: Malerarbeiten, Terrassen, Dächer und Dachterrassen. Wenn Sie im Sommer einen Pool möchten, ist der April der letzte gute Monat, um anzufangen.',
    },
  },
  {
    weather: {
      nl: 'Mei is warm en droog, met 22 tot 27 graden en lange zonnige dagen. Het regent zelden. De eerste mensen gaan de zee in, al is het water met 18 graden nog fris.',
      en: 'May is warm and dry, with 22 to 27 degrees and long sunny days. It rarely rains. The first people go into the sea, although at 18 degrees the water is still fresh.',
      de: 'Der Mai ist warm und trocken, mit 22 bis 27 Grad und langen sonnigen Tagen. Es regnet selten. Die ersten gehen ins Meer, auch wenn das Wasser mit 18 Grad noch frisch ist.',
    },
    house: {
      nl: 'Zet de tuinbewatering op de zomerstand en maak het perceel schoon: in Andalusië is het verplicht om droog onkruid rond het huis weg te halen tegen bosbrand. Laat zonnepanelen schoonspuiten na het stof en Saharazand van het voorjaar.',
      en: 'Switch the irrigation to summer mode and clear the land: in Andalusia you are required to remove dry vegetation around the house against wildfires. Have solar panels rinsed after the dust and Saharan sand of spring.',
      de: 'Stellen Sie die Bewässerung auf Sommerbetrieb und räumen Sie das Grundstück: In Andalusien ist es Pflicht, trockenes Gestrüpp rund ums Haus gegen Waldbrände zu entfernen. Lassen Sie Solarmodule nach dem Staub und Saharasand des Frühjahrs abspritzen.',
    },
  },
  {
    weather: {
      nl: 'In juni begint de zomer: 26 tot 30 graden, nauwelijks regen en meer dan elf uur zon per dag. Op 23 juni viert de kust de Noche de San Juan op het strand. De zee is met 20 graden goed om te zwemmen.',
      en: 'June is when summer starts: 26 to 30 degrees, hardly any rain and more than eleven hours of sun a day. On 23 June the coast celebrates the Noche de San Juan on the beach. At 20 degrees the sea is good for swimming.',
      de: 'Im Juni beginnt der Sommer: 26 bis 30 Grad, kaum Regen und mehr als elf Stunden Sonne am Tag. Am 23. Juni feiert die Küste die Noche de San Juan am Strand. Mit 20 Grad ist das Meer gut zum Schwimmen.',
    },
    house: {
      nl: 'De vraag naar airco, zonwering en zwembadonderhoud piekt. Wilt u nog airco laten plaatsen, wacht dan niet tot juli. Verhuurt u het huis, controleer dan nu de airco, het zwembad en de waterdruk.',
      en: 'Demand for air con, shading and pool maintenance peaks. If you still want air con fitted, do not wait until July. If you rent the house out, check the air con, pool and water pressure now.',
      de: 'Die Nachfrage nach Klimaanlagen, Sonnenschutz und Poolpflege erreicht ihren Höhepunkt. Wenn Sie noch eine Klimaanlage einbauen lassen wollen, warten Sie nicht bis Juli. Vermieten Sie das Haus, prüfen Sie jetzt Klimaanlage, Pool und Wasserdruck.',
    },
  },
  {
    weather: {
      nl: 'Juli is heet en droog, met 29 tot 32 graden aan de kust. Een zeebries maakt het daar draaglijk. Bij de <em>terral</em>, een hete wind uit het binnenland, kan het een paar dagen boven de 38 graden komen. In het binnenland rond Vélez en Periana is het warmer dan aan zee.',
      en: 'July is hot and dry, with 29 to 32 degrees on the coast. A sea breeze makes it bearable there. When the <em>terral</em>, a hot wind from inland, blows, it can top 38 degrees for a few days. Inland around Vélez and Periana it is hotter than by the sea.',
      de: 'Der Juli ist heiß und trocken, mit 29 bis 32 Grad an der Küste. Eine Meeresbrise macht es dort erträglich. Bei <em>Terral</em>, einem heißen Wind aus dem Landesinneren, kann es einige Tage über 38 Grad gehen. Im Hinterland um Vélez und Periana ist es heißer als am Meer.',
    },
    house: {
      nl: 'Bouwwerk gaat in juli en augustus trager, en in augustus liggen veel bedrijven een paar weken stil. Plan grote klussen liever in het najaar. Een leeg huis heeft in de zomer vooral last van hitte op het dak en een zwembad dat groen wordt.',
      en: 'Building work slows down in July and August, and many firms close for a few weeks in August. Plan big jobs for the autumn instead. An empty house mainly suffers from heat on the roof and a pool that turns green in summer.',
      de: 'Bauarbeiten laufen im Juli und August langsamer, und im August machen viele Betriebe einige Wochen Pause. Planen Sie große Arbeiten lieber für den Herbst. Ein leerstehendes Haus leidet im Sommer vor allem unter der Hitze auf dem Dach und einem Pool, der grün wird.',
    },
  },
  {
    weather: {
      nl: 'Augustus is de warmste maand, met 30 tot 33 graden en warme nachten boven de 20 graden. De zee is het warmst, rond 23 graden. Aan het eind van de maand kan een eerste onweersbui vallen.',
      en: 'August is the hottest month, with 30 to 33 degrees and warm nights above 20 degrees. The sea is at its warmest, around 23 degrees. Late in the month the first thunderstorm may come.',
      de: 'Der August ist der heißeste Monat, mit 30 bis 33 Grad und warmen Nächten über 20 Grad. Das Meer ist am wärmsten, um 23 Grad. Ende des Monats kann ein erstes Gewitter kommen.',
    },
    house: {
      nl: 'Vraag nu offertes aan voor werk in het najaar, zodat het bouwbedrijf in september kan beginnen. Laat vóór de herfstregen het dak, het dakterras en de afvoeren nakijken.',
      en: 'Ask for quotes now for autumn work, so the builder can start in September. Have the roof, roof terrace and drains checked before the autumn rain.',
      de: 'Fragen Sie jetzt Angebote für Arbeiten im Herbst an, damit der Betrieb im September beginnen kann. Lassen Sie Dach, Dachterrasse und Abflüsse vor dem Herbstregen prüfen.',
    },
  },
  {
    weather: {
      nl: 'September is nog zomer, met 26 tot 30 graden en de warmste zee van het jaar. Het wordt rustiger aan de kust. Tegen het eind van de maand kan een <em>DANA</em> komen, een koudeluchtbel die korte, zware regenbuien geeft.',
      en: 'September is still summer, with 26 to 30 degrees and the warmest sea of the year. The coast gets quieter. Towards the end of the month a <em>DANA</em> can arrive, a pocket of cold air that brings short, heavy downpours.',
      de: 'Der September ist noch Sommer, mit 26 bis 30 Grad und dem wärmsten Meer des Jahres. An der Küste wird es ruhiger. Gegen Monatsende kann eine <em>DANA</em> kommen, ein Kaltlufttropfen mit kurzen, heftigen Regengüssen.',
    },
    house: {
      nl: 'De beste maand om met een renovatie te beginnen: de zomergasten zijn weg en het weer is nog goed. Zorg dat goten, afvoeren en de afwatering rond het huis vrij zijn vóór de eerste zware bui.',
      en: 'The best month to start a renovation: the summer guests have gone and the weather is still good. Make sure gutters, drains and the drainage around the house are clear before the first heavy downpour.',
      de: 'Der beste Monat, um mit einer Renovierung zu beginnen: Die Sommergäste sind weg und das Wetter ist noch gut. Sorgen Sie dafür, dass Regenrinnen, Abflüsse und die Entwässerung ums Haus vor dem ersten Starkregen frei sind.',
    },
  },
  {
    weather: {
      nl: 'Oktober is voor velen de mooiste maand: 22 tot 26 graden, de zee nog rond 20 graden, en rustige stranden. Na een droge zomer valt de eerste echte regen, soms in één keer veel.',
      en: 'For many people October is the best month: 22 to 26 degrees, the sea still around 20 degrees, and quiet beaches. After a dry summer the first real rain falls, sometimes a lot at once.',
      de: 'Für viele ist der Oktober der schönste Monat: 22 bis 26 Grad, das Meer noch um 20 Grad und ruhige Strände. Nach einem trockenen Sommer fällt der erste richtige Regen, manchmal sehr viel auf einmal.',
    },
    house: {
      nl: 'De eerste zware regen laat zien waar een dak of dakterras lekt. Laat het direct nakijken, voordat de winterregen komt. Gaat u naar huis voor de winter, regel dan sleutelbeheer en zet het huis winterklaar.',
      en: 'The first heavy rain shows where a roof or roof terrace leaks. Have it checked straight away, before the winter rain. If you are going home for the winter, arrange key holding and get the house ready for winter.',
      de: 'Der erste Starkregen zeigt, wo ein Dach oder eine Dachterrasse undicht ist. Lassen Sie es sofort prüfen, bevor der Winterregen kommt. Fahren Sie über den Winter nach Hause, organisieren Sie die Hausbetreuung und machen Sie das Haus winterfest.',
    },
  },
  {
    weather: {
      nl: 'November is de natste maand. Er zijn dagen met stevige regen en wind, afgewisseld met zonnige dagen van 18 tot 21 graden. Het wordt vroeg donker en de avonden zijn koel.',
      en: 'November is the wettest month. There are days of heavy rain and wind, alternating with sunny days of 18 to 21 degrees. It gets dark early and the evenings are cool.',
      de: 'Der November ist der nasseste Monat. Es gibt Tage mit kräftigem Regen und Wind, abwechselnd mit sonnigen Tagen bei 18 bis 21 Grad. Es wird früh dunkel und die Abende sind kühl.',
    },
    house: {
      nl: 'Stormschade, lekkages en stroomstoringen komen nu het vaakst voor. Een leegstaand huis heeft iemand nodig die na een storm langsgaat. Een goede maand voor binnenwerk, zoals een badkamer of keuken.',
      en: 'Storm damage, leaks and power cuts are most common now. An empty house needs someone to check it after a storm. A good month for indoor work, such as a bathroom or kitchen.',
      de: 'Sturmschäden, Undichtigkeiten und Stromausfälle sind jetzt am häufigsten. Ein leerstehendes Haus braucht jemanden, der nach einem Sturm nachsieht. Ein guter Monat für Arbeiten drinnen, etwa ein Bad oder eine Küche.',
    },
  },
  {
    weather: {
      nl: 'December is wisselend: regenachtige dagen en heldere, zonnige dagen van 16 tot 19 graden. Met Kerst en Oud en Nieuw is het aan de kust vaak zonnig genoeg om buiten koffie te drinken.',
      en: 'December is changeable: rainy days and clear, sunny days of 16 to 19 degrees. Over Christmas and New Year it is often sunny enough on the coast to have coffee outside.',
      de: 'Der Dezember ist wechselhaft: Regentage und klare, sonnige Tage mit 16 bis 19 Grad. An Weihnachten und Silvester ist es an der Küste oft sonnig genug für einen Kaffee draußen.',
    },
    house: {
      nl: 'Een huis dat dicht zit, wordt nu vochtig. Laat het luchten en controleer of de ontvochtiger werkt. Komt u met de feestdagen, laat het huis dan vooraf verwarmen en klaarzetten.',
      en: 'A house that is shut up gets damp now. Have it aired and check that the dehumidifier works. If you are coming for the holidays, have the house warmed up and made ready beforehand.',
      de: 'Ein verschlossenes Haus wird jetzt feucht. Lassen Sie es lüften und prüfen Sie, ob der Luftentfeuchter funktioniert. Kommen Sie über die Feiertage, lassen Sie das Haus vorher heizen und vorbereiten.',
    },
  },
];

/** Plaatsen met een eigen weerpagina */
export interface WeatherPlace {
  slug: string;
  alt: Altitude;
  intro: L;
}

export const weatherPlaces: WeatherPlace[] = [
  {
    slug: 'nerja',
    alt: 'coast',
    intro: {
      nl: 'Nerja ligt beschut tegen de bergen van de Sierra Almijara, die koude noordenwind tegenhouden. Daardoor is het hier in de winter een van de zachtste plekken van de Costa del Sol, met veel zon en weinig wind. In de zomer koelt de zeebries de kust af; de hitte valt mee vergeleken met het binnenland.',
      en: 'Nerja is sheltered by the mountains of the Sierra Almijara, which hold back cold northerly winds. That makes it one of the mildest places on the Costa del Sol in winter, with lots of sun and little wind. In summer the sea breeze cools the coast; the heat is moderate compared with inland.',
      de: 'Nerja liegt geschützt vor den Bergen der Sierra Almijara, die kalte Nordwinde abhalten. Dadurch ist es im Winter einer der mildesten Orte der Costa del Sol, mit viel Sonne und wenig Wind. Im Sommer kühlt die Meeresbrise die Küste; die Hitze hält sich im Vergleich zum Hinterland in Grenzen.',
    },
  },
  {
    slug: 'torrox',
    alt: 'coast',
    intro: {
      nl: 'Torrox noemt zichzelf het dorp met het beste klimaat van Europa, en daar zit iets in: de gemiddelde jaartemperatuur aan Torrox Costa ligt rond de 19 graden, met zachte winters en zelden extreme hitte. Het dorp Torrox ligt 4 kilometer landinwaarts op ongeveer 150 meter hoogte en is ’s nachts een paar graden koeler dan de kust.',
      en: 'Torrox calls itself the village with the best climate in Europe, and there is something to it: the average annual temperature at Torrox Costa is around 19 degrees, with mild winters and rarely extreme heat. Torrox village lies 4 kilometres inland at about 150 metres and is a few degrees cooler at night than the coast.',
      de: 'Torrox nennt sich das Dorf mit dem besten Klima Europas, und daran ist etwas Wahres: Die Jahresdurchschnittstemperatur an der Torrox Costa liegt um 19 Grad, mit milden Wintern und selten extremer Hitze. Das Dorf Torrox liegt 4 Kilometer landeinwärts auf etwa 150 Metern und ist nachts ein paar Grad kühler als die Küste.',
    },
  },
  {
    slug: 'torre-del-mar',
    alt: 'coast',
    intro: {
      nl: 'Torre del Mar ligt in de brede, vlakke kustvlakte bij de monding van de Vélez-rivier. Het is er zonnig en vlak, met een lange boulevard. Omdat de bergen hier verder van zee liggen, waait het iets vaker dan in Nerja, en bij <em>terral</em> kan het in de zomer erg heet worden.',
      en: 'Torre del Mar lies on the wide, flat coastal plain at the mouth of the Vélez river. It is sunny and level, with a long promenade. Because the mountains are further from the sea here, it is slightly windier than Nerja, and when the <em>terral</em> blows it can get very hot in summer.',
      de: 'Torre del Mar liegt in der breiten, flachen Küstenebene an der Mündung des Río Vélez. Es ist sonnig und eben, mit einer langen Promenade. Weil die Berge hier weiter vom Meer entfernt sind, ist es etwas windiger als in Nerja, und bei <em>Terral</em> kann es im Sommer sehr heiß werden.',
    },
  },
  {
    slug: 'rincon-de-la-victoria',
    alt: 'coast',
    intro: {
      nl: 'Rincón de la Victoria ligt het dichtst bij Málaga en heeft vrijwel hetzelfde klimaat als de stad: zacht in de winter, warm en droog in de zomer. De heuvels achter de kust zijn hier lager, waardoor de zeebries ver het land in komt.',
      en: 'Rincón de la Victoria is closest to Málaga and has almost the same climate as the city: mild in winter, warm and dry in summer. The hills behind the coast are lower here, so the sea breeze reaches well inland.',
      de: 'Rincón de la Victoria liegt am nächsten an Málaga und hat fast dasselbe Klima wie die Stadt: mild im Winter, warm und trocken im Sommer. Die Hügel hinter der Küste sind hier niedriger, sodass die Meeresbrise weit ins Land reicht.',
    },
  },
  {
    slug: 'frigiliana',
    alt: 'hills',
    intro: {
      nl: 'Frigiliana ligt op ongeveer 300 meter hoogte, zes kilometer van zee. Overdag is het bijna even warm als aan de kust, maar de nachten zijn koeler en in de winter frisser. In de zomer is dat juist prettig: het koelt ’s avonds beter af dan in Nerja.',
      en: 'Frigiliana sits at about 300 metres, six kilometres from the sea. In the daytime it is almost as warm as the coast, but nights are cooler and winters fresher. In summer that is a plus: it cools down better in the evening than in Nerja.',
      de: 'Frigiliana liegt auf etwa 300 Metern Höhe, sechs Kilometer vom Meer. Tagsüber ist es fast so warm wie an der Küste, aber die Nächte sind kühler und die Winter frischer. Im Sommer ist das angenehm: Abends kühlt es besser ab als in Nerja.',
    },
  },
  {
    slug: 'competa',
    alt: 'mountains',
    intro: {
      nl: 'Cómpeta ligt op ongeveer 640 meter hoogte aan de voet van de Sierra Almijara. Het is er een paar graden koeler dan aan de kust en er valt meer regen. In de zomer is dat heerlijk, met koele avonden. In de winter kan het ’s nachts vriezen en ligt er soms sneeuw op de toppen boven het dorp. Een huis in Cómpeta heeft verwarming en goede ramen nodig.',
      en: 'Cómpeta sits at about 640 metres at the foot of the Sierra Almijara. It is a few degrees cooler than the coast and gets more rain. In summer that is lovely, with cool evenings. In winter it can freeze at night and there is sometimes snow on the peaks above the village. A house in Cómpeta needs heating and good windows.',
      de: 'Cómpeta liegt auf etwa 640 Metern am Fuß der Sierra Almijara. Es ist ein paar Grad kühler als an der Küste und es regnet mehr. Im Sommer ist das herrlich, mit kühlen Abenden. Im Winter kann es nachts frieren, und auf den Gipfeln über dem Dorf liegt manchmal Schnee. Ein Haus in Cómpeta braucht eine Heizung und gute Fenster.',
    },
  },
];
export const weatherPlaceBySlug = (slug: string) => weatherPlaces.find((w) => w.slug === slug);
