// Foto's bij dienstpagina's, gidsen en kosten-, probleem- en zelf-doen-pagina's.
// Bron: Canva AI-beelden (commercieel gebruik toegestaan) en Canva Pro-stockfoto's. Nieuwe stockfoto's
// krijgen een merkje (logo + axarquiahome.com) zodat ze onderdeel van een ontwerp zijn en niet los staan.
// Geen eigen projecten: echte foto's van het bouwbedrijf komen alleen op Projecten en Over ons.
// Bestanden: public/images/onderwerpen/<naam>-<480|800|1200>.webp en public/images/og/<naam>.jpg.
import type { Lang } from '../i18n';
import { photoWidths } from './place-photos';

/** Spaans (es) is optioneel: zonder Spaanse tekst valt de alt terug op het Engels. */
interface TopicPhoto { alt: Record<Exclude<Lang, 'es'>, string> & { es?: string }; }

const photos: Record<string, TopicPhoto> = {
  'isolatie-steenwol-tussen-balken': { alt: {
    nl: 'Isolatiedeken van minerale wol wordt met werkhandschoenen tussen houten balken gelegd',
    en: 'Mineral wool insulation being laid between timber joists by hands in work gloves',
    de: 'Mineralwolle-Dämmung wird mit Arbeitshandschuhen zwischen Holzbalken verlegt',
    sv: 'Isolering av mineralull läggs mellan träbjälkar med arbetshandskar',
  } },
  'isolatie-glaswol-close-up': { alt: {
    nl: 'Close-up van gele glaswol-isolatie, zoals gebruikt in een voorzetwand of op zolder',
    en: 'Close-up of yellow glass wool insulation, as used in an internal wall lining or loft',
    de: 'Nahaufnahme gelber Glaswolle-Dämmung, wie sie in Vorsatzschalen oder auf dem Dachboden verwendet wird',
    sv: 'Närbild av gul glasull, som används i en isolerad innervägg eller på vinden',
  } },
  'vocht-afbladderende-verf-muur': { alt: {
    nl: 'Afbladderende verf en losgeraakt pleisterwerk op een muur door vocht',
    en: 'Paint flaking and plaster coming away from a wall because of damp',
    de: 'Abblätternde Farbe und loser Putz an einer Wand durch Feuchtigkeit',
    sv: 'Flagnande färg och lossnande puts på en vägg på grund av fukt',
  } },
  'lekkage-vlek-plafond-hoek': { alt: {
    nl: 'Waterschade in de hoek van een plafond: een vochtvlek met bladderende verf na een lekkage',
    en: 'Water damage in the corner of a ceiling: a damp stain with peeling paint after a leak',
    de: 'Wasserschaden in einer Deckenecke: ein Feuchtigkeitsfleck mit abblätternder Farbe nach einem Leck',
    sv: 'Vattenskada i ett hörn av taket: en fuktfläck med flagnande färg efter ett läckage',
  } },
  'schimmel-onderaan-muur-plint': { alt: {
    nl: 'Zwarte schimmelvlekken onderaan een witte binnenmuur, vlak boven de plint',
    en: 'Black mould spots at the bottom of a white interior wall, just above the skirting board',
    de: 'Schwarze Schimmelflecken unten an einer weißen Innenwand, direkt über der Sockelleiste',
    sv: 'Svarta mögelfläckar längst ner på en vit innervägg, strax ovanför golvlisten',
  } },
  'condens-schimmel-raam': { alt: {
    nl: 'Condens op het glas en schimmel in de hoek naast een raam, met een doek op de vensterbank tegen het water',
    en: 'Condensation on the glass and mould in the corner beside a window, with a cloth on the sill to catch the water',
    de: 'Kondenswasser an der Scheibe und Schimmel in der Ecke neben einem Fenster, mit einem Tuch gegen das Wasser',
    sv: 'Kondens på glaset och mögel i hörnet bredvid ett fönster, med en trasa som fångar upp vattnet',
  } },
  'zonnepanelen-pannendak': { alt: {
    nl: 'Zonnepanelen op een dak met rode dakpannen en gemetselde schoorstenen',
    en: 'Solar panels on a roof with red clay tiles and brick chimneys',
    de: 'Solarmodule auf einem Dach mit roten Tonziegeln und gemauerten Schornsteinen',
    sv: 'Solpaneler på ett tak med röda tegelpannor och murade skorstenar',
    es: 'Placas solares sobre un tejado de teja roja con chimeneas de ladrillo',
  } },
  'zonnepaneel-off-grid-paal': { alt: {
    nl: 'Los zonnepaneel op een paal met een kastje voor de aansluiting, tegen een blauwe lucht',
    en: 'Stand-alone solar panel on a pole with a connection box, against a blue sky',
    de: 'Einzelnes Solarmodul an einem Mast mit Anschlusskasten vor blauem Himmel',
    sv: 'Fristående solpanel på en stolpe med en kopplingslåda, mot en blå himmel',
    es: 'Placa solar independiente sobre un poste con una caja de conexiones, contra un cielo azul',
  } },
  'zonnepanelen-schoonmaken-borstel': { alt: {
    nl: 'Zonnepanelen worden met een borstel en water schoongemaakt',
    en: 'Solar panels being cleaned with a brush and water',
    de: 'Solarmodule werden mit Bürste und Wasser gereinigt',
    sv: 'Solpaneler rengörs med en borste och vatten',
  } },
  'zonnepanelen-stof-schoonmaken': { alt: {
    nl: 'Stoffig zonnepaneel wordt met een wisser aan een steel schoongemaakt',
    en: 'A dusty solar panel being cleaned with a squeegee on a pole',
    de: 'Ein staubiges Solarmodul wird mit einem Wischer an einer Stange gereinigt',
    sv: 'En dammig solpanel rengörs med en skrapa på ett skaft',
    es: 'Limpieza de una placa solar llena de polvo con un limpiador de mango largo',
  } },
  'laadpaal-installeren-meterkast': { alt: {
    nl: 'Elektricien sluit een laadpaal voor de auto aan in de meterkast, met de laadkabel aan de muur',
    en: 'Electrician wiring a home EV charger into the consumer unit, with the charging cable on the wall',
    de: 'Elektriker schließt eine Wallbox im Sicherungskasten an, daneben das Ladekabel an der Wand',
    sv: 'Elektriker kopplar in en laddbox för bilen i elcentralen, med laddkabeln på väggen',
  } },
  'elektrische-auto-laadpaal-buiten': { alt: {
    nl: 'Elektrische auto aan een laadpaal buiten, voor een bakstenen muur',
    en: 'Electric car plugged into an outdoor charging post in front of a brick wall',
    de: 'Elektroauto an einer Ladesäule im Freien vor einer Backsteinmauer',
    sv: 'Elbil kopplad till en laddstolpe utomhus framför en tegelvägg',
  } },
  'elektrische-auto-laadstekker': { alt: {
    nl: 'Laadstekker in de laadklep van een elektrische auto',
    en: 'Charging plug in the charging port of an electric car',
    de: 'Ladestecker in der Ladebuchse eines Elektroautos',
    sv: 'Laddkontakt i laddluckan på en elbil',
  } },
  // Dienstpagina's (hero). AI = Canva AI-beeld, stock = Canva Pro met merkje.
  'finca-zeezicht-axarquia': { alt: { // stock
    nl: 'Witte finca met pannendaken boven de heuvels van de Axarquía, met uitzicht op de Middellandse Zee',
    en: 'White finca with tiled roofs above the hills of the Axarquía, looking out over the Mediterranean',
    de: 'Weiße Finca mit Ziegeldächern über den Hügeln der Axarquía mit Blick aufs Mittelmeer',
    sv: 'Vit finca med tegeltak ovanför Axarquías kullar, med utsikt över Medelhavet',
    es: 'Finca blanca con tejados de teja sobre las colinas de la Axarquía, con vistas al Mediterráneo',
  } },
  'toegangsweg-finca-olijfbomen': { alt: { // stock
    nl: 'Onverharde toegangsweg naar een finca tussen olijfbomen en begroeide taluds in de Axarquía',
    en: 'Unpaved access road to a finca between olive trees and overgrown banks in the Axarquía',
    de: 'Unbefestigter Zufahrtsweg zu einer Finca zwischen Olivenbäumen und bewachsenen Böschungen in der Axarquía',
    sv: 'Grusväg upp till en finca mellan olivträd och bevuxna slänter i Axarquía',
    es: 'Camino de tierra hacia una finca entre olivos y taludes con vegetación en la Axarquía',
  } },
  'dorpshuis-renoveren-verbouwing': { alt: { // AI
    nl: 'Dorpshuis in de Axarquía tijdens de verbouwing: kale muren, houten balken, betonmolen en stapels terracotta tegels',
    en: 'Village house in the Axarquía during renovation: bare walls, timber beams, a cement mixer and stacks of terracotta tiles',
    de: 'Dorfhaus in der Axarquía während der Renovierung: nackte Wände, Holzbalken, Betonmischer und gestapelte Terrakottafliesen',
    sv: 'Byhus i Axarquía under renovering: nakna väggar, träbjälkar, cementblandare och staplade terrakottaplattor',
    es: 'Casa de pueblo en la Axarquía en plena reforma: paredes desnudas, vigas de madera, hormigonera y baldosas de barro apiladas',
  } },
  'zwembad-finca-sierra-almijara': { alt: { // AI
    nl: 'Zwembad bij een witte finca tussen de olijfbomen, met de bergen van de Sierra Almijara op de achtergrond',
    en: 'Swimming pool at a white finca among olive trees, with the Sierra Almijara mountains behind',
    de: 'Pool an einer weißen Finca zwischen Olivenbäumen, im Hintergrund die Berge der Sierra Almijara',
    sv: 'Pool vid en vit finca bland olivträd, med bergen i Sierra Almijara i bakgrunden',
    es: 'Piscina junto a una finca blanca entre olivos, con la Sierra Almijara al fondo',
  } },
  'sleutelbeheer-sleutels-blauwe-deur': { alt: { // AI
    nl: 'Hand met een sleutelbos met label voor de blauwe voordeur van een wit dorpshuis met geraniums',
    en: 'Hand holding a labelled bunch of keys in front of the blue door of a white village house with geraniums',
    de: 'Hand mit beschriftetem Schlüsselbund vor der blauen Haustür eines weißen Dorfhauses mit Geranien',
    sv: 'Hand med en märkt nyckelknippa framför den blå dörren till ett vitt byhus med pelargoner',
    es: 'Mano con un manojo de llaves etiquetado ante la puerta azul de una casa blanca de pueblo con geranios',
  } },
  'gevel-witten-onderhoud-finca': { alt: { // AI
    nl: 'Vakman wit de gevel van een finca met een verfroller, met olijfbomen en bergen op de achtergrond',
    en: 'Tradesman whitewashing the wall of a finca with a paint roller, olive trees and mountains behind',
    de: 'Handwerker weißelt die Fassade einer Finca mit der Farbrolle, dahinter Olivenbäume und Berge',
    sv: 'Hantverkare vitkalkar fasaden på en finca med en färgroller, olivträd och berg i bakgrunden',
    es: 'Operario encalando la fachada de una finca con un rodillo, con olivos y montañas al fondo',
  } },
  'loodgieter-boiler-repareren': { alt: { // AI
    nl: 'Loodgieter draait met een moersleutel de koperen leidingen onder een elektrische boiler vast',
    en: 'Plumber tightening the copper pipes under an electric water heater with a wrench',
    de: 'Installateur zieht mit dem Schraubenschlüssel die Kupferleitungen unter einem elektrischen Boiler fest',
    sv: 'Rörmokare drar åt kopparrören under en elektrisk varmvattenberedare med en skiftnyckel',
    es: 'Fontanero apretando con una llave las tuberías de cobre bajo un termo eléctrico',
  } },
  'aankoopkeuring-vochtmeting-muur': { alt: { // AI
    nl: 'Bouwkundige meet met een vochtmeter een vochtplek onderaan de muur van een oude finca',
    en: 'Surveyor checking a damp patch at the bottom of an old finca wall with a moisture meter',
    de: 'Gutachter misst mit einem Feuchtemessgerät einen feuchten Fleck unten an der Wand einer alten Finca',
    sv: 'Besiktningsman mäter en fuktfläck längst ner på väggen i en gammal finca med en fuktmätare',
    es: 'Perito midiendo con un medidor de humedad una mancha en la parte baja de un muro de una finca antigua',
  } },
  'verhuurbeheer-terras-zwembad-zeezicht': { alt: { // AI
    nl: 'Terras van een vakantievilla met ligbedden, opgevouwen handdoeken, een zwembad en zicht op zee',
    en: 'Holiday villa terrace with sun loungers, folded towels, a pool and a sea view',
    de: 'Terrasse einer Ferienvilla mit Liegen, gefalteten Handtüchern, Pool und Meerblick',
    sv: 'Terrass vid en semestervilla med solstolar, vikta handdukar, pool och havsutsikt',
    es: 'Terraza de una villa vacacional con tumbonas, toallas dobladas, piscina y vistas al mar',
  } },
  // Kosten-, probleem- en zelf-doen-pagina's (Canva AI).
  'badkamer-renoveren-inloopdouche': { alt: {
    nl: 'Gerenoveerde badkamer in een Andalusisch dorpshuis met inloopdouche, terracotta tegels en een rond raam met uitzicht op het witte dorp',
    en: 'Renovated bathroom in an Andalusian village house with a walk-in shower, terracotta tiles and an arched window looking out over the white village',
    de: 'Renoviertes Bad in einem andalusischen Dorfhaus mit bodengleicher Dusche, Terrakottafliesen und Rundbogenfenster mit Blick auf das weiße Dorf',
    sv: 'Renoverat badrum i ett andalusiskt byhus med walk-in-dusch, terrakottaplattor och ett välvt fönster mot den vita byn',
    es: 'Baño reformado en una casa de pueblo andaluza con ducha de obra, baldosas de barro y ventana en arco con vistas al pueblo blanco',
  } },
  'keuken-renoveren-finca': { alt: {
    nl: 'Nieuwe keuken in een finca met houten kasten, wit werkblad, terracotta vloer, houten balken en uitzicht op olijfbomen en bergen',
    en: 'New kitchen in a finca with wooden units, a white worktop, terracotta floor, timber beams and a view of olive trees and mountains',
    de: 'Neue Küche in einer Finca mit Holzfronten, weißer Arbeitsplatte, Terrakottaboden, Holzbalken und Blick auf Olivenbäume und Berge',
    sv: 'Nytt kök i en finca med träluckor, vit bänkskiva, terrakottagolv, träbjälkar och utsikt över olivträd och berg',
    es: 'Cocina nueva en una finca con muebles de madera, encimera blanca, suelo de barro, vigas de madera y vistas a olivos y montañas',
  } },
  'airco-installeren-binnenunit': { alt: {
    nl: 'Monteur hangt de binnenunit van een airco op aan een witte muur onder een houten balkenplafond',
    en: 'Technician fitting the indoor unit of an air conditioner to a white wall under a beamed ceiling',
    de: 'Monteur montiert das Innengerät einer Klimaanlage an einer weißen Wand unter einer Holzbalkendecke',
    sv: 'Montör sätter upp inomhusdelen till en luftkonditionering på en vit vägg under ett bjälktak',
    es: 'Técnico instalando la unidad interior de un aire acondicionado en una pared blanca bajo un techo de vigas',
  } },
  'buitenkeuken-barbecue-pergola': { alt: {
    nl: 'Gemetselde buitenkeuken met barbecue en spoelbak onder een rieten pergola, met uitzicht over de bergen van de Axarquía',
    en: 'Built-in outdoor kitchen with barbecue and sink under a reed pergola, looking out over the mountains of the Axarquía',
    de: 'Gemauerte Außenküche mit Grill und Spüle unter einer Schilfpergola mit Blick auf die Berge der Axarquía',
    sv: 'Murat utekök med grill och diskho under en vasspergola, med utsikt över bergen i Axarquía',
    es: 'Cocina exterior de obra con barbacoa y fregadero bajo una pérgola de cañizo, con vistas a las montañas de la Axarquía',
  } },
  'elektra-groepenkast-vernieuwen': { alt: {
    nl: 'Elektricien werkt aan een nieuwe groepenkast met aardlekschakelaars in een witte muur, met een multimeter ernaast',
    en: 'Electrician working on a new consumer unit with RCDs in a white wall, a multimeter beside it',
    de: 'Elektriker arbeitet an einem neuen Sicherungskasten mit FI-Schaltern in einer weißen Wand, daneben ein Multimeter',
    sv: 'Elektriker arbetar med en ny elcentral med jordfelsbrytare i en vit vägg, med en multimeter bredvid',
    es: 'Electricista trabajando en un cuadro eléctrico nuevo con diferenciales en una pared blanca, con un multímetro al lado',
  } },
  'watertank-finca-pomp': { alt: {
    nl: 'Groene watertank met pomp op een betonnen voet naast een witte finca tussen de olijfbomen',
    en: 'Green water tank with a pump on a concrete base next to a white finca among olive trees',
    de: 'Grüner Wassertank mit Pumpe auf einem Betonsockel neben einer weißen Finca zwischen Olivenbäumen',
    sv: 'Grön vattentank med pump på en betongplatta bredvid en vit finca bland olivträd',
    es: 'Depósito de agua verde con bomba sobre una base de hormigón junto a una finca blanca entre olivos',
  } },
  'keermuur-natuursteen-afwatering': { alt: {
    nl: 'Nieuwe keermuur van natuursteen met afvoerbuizen en een grindgoot onder een finca op een helling',
    en: 'New natural stone retaining wall with drainage pipes and a gravel channel below a finca on a slope',
    de: 'Neue Stützmauer aus Naturstein mit Entwässerungsrohren und Kiesrinne unterhalb einer Finca am Hang',
    sv: 'Ny stödmur av natursten med dräneringsrör och en grusränna nedanför en finca i en sluttning',
    es: 'Muro de contención nuevo de piedra natural con tubos de drenaje y una cuneta de grava bajo una finca en ladera',
  } },
  'houtkachel-rookkanaal-finca': { alt: {
    nl: 'Gietijzeren houtkachel met stalen rookkanaal in de woonkamer van een finca, met olijfhout ernaast',
    en: 'Cast-iron wood burner with a steel flue in the living room of a finca, olive wood stacked beside it',
    de: 'Gusseiserner Holzofen mit Stahlrauchrohr im Wohnzimmer einer Finca, daneben gestapeltes Olivenholz',
    sv: 'Gjutjärnskamin med rökrör av stål i vardagsrummet i en finca, med olivved bredvid',
    es: 'Estufa de leña de hierro fundido con tubo de acero en el salón de una finca, con leña de olivo al lado',
  } },
  'zwembad-aanleggen-bouwput': { alt: {
    nl: 'Zwembad in aanbouw bij een finca: bouwput met wapening en betonblokken, een graafmachine en de bergen op de achtergrond',
    en: 'Pool under construction at a finca: excavation with rebar and concrete blocks, a digger and the mountains behind',
    de: 'Pool im Bau bei einer Finca: Baugrube mit Bewehrung und Betonsteinen, ein Bagger und die Berge im Hintergrund',
    sv: 'Pool under byggnad vid en finca: schakt med armering och betongblock, en grävmaskin och bergen i bakgrunden',
    es: 'Piscina en construcción junto a una finca: vaso con armadura y bloques de hormigón, una excavadora y las montañas al fondo',
  } },
  'dakpannen-vervangen-dak': { alt: {
    nl: 'Dakdekker vervangt kapotte terracotta dakpannen met mortel, met een wit dorp en bergen op de achtergrond',
    en: 'Roofer replacing broken terracotta tiles with mortar, with a white village and mountains behind',
    de: 'Dachdecker ersetzt kaputte Terrakottaziegel mit Mörtel, im Hintergrund ein weißes Dorf und Berge',
    sv: 'Takläggare byter trasiga terrakottapannor med murbruk, med en vit by och berg i bakgrunden',
    es: 'Tejador sustituyendo tejas árabes rotas con mortero, con un pueblo blanco y montañas al fondo',
  } },
  'scheur-in-muur-raam': { alt: {
    nl: 'Hand wijst naar een diepe scheur in de witte gevel onder een raam van een oud huis',
    en: 'Hand pointing at a deep crack in the white wall below the window of an old house',
    de: 'Hand zeigt auf einen tiefen Riss in der weißen Fassade unter dem Fenster eines alten Hauses',
    sv: 'Hand pekar på en djup spricka i den vita fasaden under fönstret på ett gammalt hus',
    es: 'Mano señalando una grieta profunda en la fachada blanca bajo la ventana de una casa antigua',
  } },
  'termieten-schade-houten-balk': { alt: {
    nl: 'Termietenschade in een houten plafondbalk: uitgehold hout met gangen, ingeprikt met een schroevendraaier',
    en: 'Termite damage in a timber ceiling beam: hollowed-out wood with tunnels, probed with a screwdriver',
    de: 'Termitenschaden in einem Deckenbalken: ausgehöhltes Holz mit Gängen, mit einem Schraubendreher geprüft',
    sv: 'Termitskada i en takbjälke: urholkat trä med gångar, undersökt med en skruvmejsel',
    es: 'Daños de termitas en una viga de madera: madera hueca con galerías, comprobada con un destornillador',
  } },
  'legionella-douchekop-kalk': { alt: {
    nl: 'Hand houdt een verkalkte douchekop onder stromend heet water in een badkamer',
    en: 'Hand holding a limescale-covered shower head under running hot water in a bathroom',
    de: 'Hand hält einen verkalkten Duschkopf unter laufendes heißes Wasser im Badezimmer',
    sv: 'Hand håller ett kalkbelagt duschmunstycke under rinnande varmt vatten i ett badrum',
    es: 'Mano sujetando una alcachofa de ducha con cal bajo agua caliente en un baño',
  } },
  'inbraak-rejas-alarm-raam': { alt: {
    nl: 'Raam met witte smeedijzeren tralies en gesloten luiken in een witte gevel, met een alarmsirene erboven',
    en: 'Window with white wrought-iron bars and closed shutters in a white wall, with an alarm siren above',
    de: 'Fenster mit weißen schmiedeeisernen Gittern und geschlossenen Läden in einer weißen Fassade, darüber eine Alarmsirene',
    sv: 'Fönster med vita smidesgaller och stängda luckor i en vit fasad, med en larmsiren ovanför',
    es: 'Ventana con rejas blancas de forja y contraventanas cerradas en una fachada blanca, con una sirena de alarma encima',
  } },
  'stroomstoring-meterkast-zaklamp': { alt: {
    nl: 'Iemand zoekt met een zaklamp de uitgeschakelde groep in de meterkast van een donkere gang',
    en: 'Someone using a torch to find the tripped circuit in the fuse box in a dark hallway',
    de: 'Jemand sucht mit der Taschenlampe die ausgelöste Sicherung im Sicherungskasten eines dunklen Flurs',
    sv: 'Någon letar med en ficklampa efter den utlösta säkringen i elcentralen i en mörk hall',
    es: 'Alguien busca con una linterna el automático saltado en el cuadro eléctrico de un pasillo a oscuras',
  } },
  'lage-waterdruk-kraan': { alt: {
    nl: 'Uit een oude kraan boven een witte gootsteen komt maar een dun straaltje water',
    en: 'Only a thin trickle of water coming from an old tap above a white sink',
    de: 'Aus einem alten Wasserhahn über einem weißen Spülbecken kommt nur ein dünner Strahl',
    sv: 'Bara en tunn stråle vatten kommer ur en gammal kran över en vit diskho',
    es: 'De un grifo antiguo sobre un fregadero blanco sale solo un hilo de agua',
  } },
  'beerput-legen-finca': { alt: {
    nl: 'Geopende beerput in de tuin van een finca die met de slang van een zuigwagen wordt geleegd',
    en: 'Open septic tank in the garden of a finca being emptied with the hose of a vacuum tanker',
    de: 'Geöffnete Klärgrube im Garten einer Finca wird mit dem Schlauch eines Saugwagens geleert',
    sv: 'Öppen septiktank i trädgården vid en finca som töms med slangen från en slambil',
    es: 'Fosa séptica abierta en el jardín de una finca vaciada con la manguera de un camión cisterna',
  } },
  'wateroverlast-keermuur-ingestort': { alt: {
    nl: 'Ingestorte natuurstenen keermuur met modder en stenen op het terras van een finca na zware regen',
    en: 'Collapsed stone retaining wall with mud and rocks on the terrace of a finca after heavy rain',
    de: 'Eingestürzte Natursteinmauer mit Schlamm und Steinen auf der Terrasse einer Finca nach Starkregen',
    sv: 'Rasad stödmur av natursten med lera och stenar på terrassen vid en finca efter kraftigt regn',
    es: 'Muro de piedra derrumbado con barro y piedras en la terraza de una finca tras lluvias intensas',
  } },
};

interface Placement { lead: string; /** Tweede foto direct onder de kop van de sectie met dit volgnummer (vanaf 0; ids verschillen per taal) */ inline?: { section: number; photo: string }; }

/** Kosten-, probleem- en zelf-doen-pagina's, per `kind:key` (geldt voor alle talen). */
const topicPlacements: Record<string, Placement> = {
  'problems:vocht': { lead: 'schimmel-onderaan-muur-plint', inline: { section: 0, photo: 'vocht-afbladderende-verf-muur' } },
  'problems:tocht': { lead: 'condens-schimmel-raam' },
  'problems:daklekkage': { lead: 'lekkage-vlek-plafond-hoek' },
  'costs:ramen': { lead: 'condens-schimmel-raam' },
  'costs:dak': { lead: 'lekkage-vlek-plafond-hoek' },
  'diy:witten': { lead: 'vocht-afbladderende-verf-muur' },
  'diy:ramen': { lead: 'condens-schimmel-raam' },
  'costs:zonnepanelen': { lead: 'zonnepanelen-pannendak', inline: { section: 2, photo: 'zonnepanelen-stof-schoonmaken' } },
  'costs:thuisbatterij': { lead: 'zonnepanelen-pannendak' },
  'costs:energiebeheer': { lead: 'zonnepanelen-pannendak' },
  'costs:laadpaal': { lead: 'laadpaal-installeren-meterkast', inline: { section: 2, photo: 'elektrische-auto-laadpaal-buiten' } },
  'costs:badkamer': { lead: 'badkamer-renoveren-inloopdouche' },
  'costs:keuken': { lead: 'keuken-renoveren-finca' },
  'costs:zwembad': { lead: 'zwembad-finca-sierra-almijara', inline: { section: 1, photo: 'zwembad-aanleggen-bouwput' } },
  'costs:airco': { lead: 'airco-installeren-binnenunit' },
  'costs:buitenkeuken': { lead: 'buitenkeuken-barbecue-pergola' },
  'costs:elektra': { lead: 'elektra-groepenkast-vernieuwen' },
  'costs:water': { lead: 'watertank-finca-pomp', inline: { section: 1, photo: 'beerput-legen-finca' } },
  'costs:keermuur': { lead: 'keermuur-natuursteen-afwatering', inline: { section: 1, photo: 'wateroverlast-keermuur-ingestort' } },
  'costs:schoorsteen': { lead: 'houtkachel-rookkanaal-finca' },
  'diy:zwembad': { lead: 'zwembad-aanleggen-bouwput' },
  'diy:dak': { lead: 'dakpannen-vervangen-dak' },
  'diy:kachel': { lead: 'houtkachel-rookkanaal-finca' },
  'diy:watertank': { lead: 'watertank-finca-pomp' },
  'problems:scheuren': { lead: 'scheur-in-muur-raam' },
  'problems:termieten': { lead: 'termieten-schade-houten-balk' },
  'problems:legionella': { lead: 'legionella-douchekop-kalk' },
  'problems:inbraak': { lead: 'inbraak-rejas-alarm-raam' },
  'problems:stroom': { lead: 'stroomstoring-meterkast-zaklamp' },
  'problems:waterdruk': { lead: 'lage-waterdruk-kraan', inline: { section: 2, photo: 'watertank-finca-pomp' } },
  'problems:beerput': { lead: 'beerput-legen-finca' },
  'problems:wateroverlast': { lead: 'wateroverlast-keermuur-ingestort', inline: { section: 2, photo: 'keermuur-natuursteen-afwatering' } },
  'problems:schoorsteen': { lead: 'houtkachel-rookkanaal-finca' },
};

/** Gidsen, per slug. De tweede foto staat in de gidspagina zelf (component ArticlePhoto). */
const guidePlacements: Record<string, string> = {
  'placas-solares': 'zonnepanelen-pannendak',
  'baterias-para-placas-solares': 'zonnepanelen-pannendak',
  'subvenciones-placas-solares': 'zonnepanelen-pannendak',
  'huis-isoleren-spanje': 'isolatie-steenwol-tussen-balken',
  'insulating-your-house-in-spain': 'isolatie-steenwol-tussen-balken',
  'haus-daemmen-spanien': 'isolatie-steenwol-tussen-balken',
  'waterlekkage-spanje': 'lekkage-vlek-plafond-hoek',
  'water-leak-spain': 'lekkage-vlek-plafond-hoek',
  'wasserschaden-spanien': 'lekkage-vlek-plafond-hoek',
  'off-grid-wonen-spanje': 'zonnepaneel-off-grid-paal',
  'off-grid-living-spain': 'zonnepaneel-off-grid-paal',
  'virtuele-batterij-spanje': 'zonnepanelen-pannendak',
  'virtual-battery-spain': 'zonnepanelen-pannendak',
  'virtuelle-batterie-spanien': 'zonnepanelen-pannendak',
  'energieleveranciers-spanje-vergelijken': 'zonnepanelen-pannendak',
  'stromanbieter-spanien-vergleich': 'zonnepanelen-pannendak',
  'subsidie-verduurzamen-spanje': 'zonnepanelen-pannendak',
  'energy-efficiency-grants-spain': 'zonnepanelen-pannendak',
  'foerderung-energetische-sanierung-spanien': 'zonnepanelen-pannendak',
};

export interface ArticleImage { alt: string; src: string; srcset: string; og: string; }

export function topicPhoto(name: string, lang: Lang): ArticleImage | undefined {
  const p = photos[name];
  if (!p) return undefined;
  const base = `/images/onderwerpen/${name}`;
  return { alt: p.alt[lang as Exclude<Lang, 'es'>] ?? p.alt.en, src: `${base}-800.webp`, srcset: photoWidths.map((w) => `${base}-${w}.webp ${w}w`).join(', '), og: `/images/og/${name}.jpg` };
}

export function topicPhotos(kind: string, key: string, lang: Lang) {
  const pl = topicPlacements[`${kind}:${key}`];
  if (!pl) return { lead: undefined, inline: undefined };
  return {
    lead: topicPhoto(pl.lead, lang),
    inline: pl.inline ? { section: pl.inline.section, photo: topicPhoto(pl.inline.photo, lang)! } : undefined,
  };
}

export const guidePhoto = (slug: string, lang: Lang) => (guidePlacements[slug] ? topicPhoto(guidePlacements[slug], lang) : undefined);

/** Hero-foto per dienst (geldt voor alle talen). */
const servicePlacements: Record<string, string> = {
  home: 'finca-zeezicht-axarquia',
  renovatie: 'dorpshuis-renoveren-verbouwing',
  zwembad: 'zwembad-finca-sierra-almijara',
  sleutelbeheer: 'sleutelbeheer-sleutels-blauwe-deur',
  onderhoud: 'gevel-witten-onderhoud-finca',
  loodgieter: 'loodgieter-boiler-repareren',
  aankoopkeuring: 'aankoopkeuring-vochtmeting-muur',
  verhuurbeheer: 'verhuurbeheer-terras-zwembad-zeezicht',
  toegangsweg: 'toegangsweg-finca-olijfbomen',
};

export function servicePhoto(key: keyof typeof servicePlacements | string, lang: Lang) {
  const p = servicePlacements[key] ? topicPhoto(servicePlacements[key], lang) : undefined;
  return p ? { ...p, focus: 'center' } : undefined;
}
