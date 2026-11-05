// Keuzemenu "Wat wilt u doen?" op de homepage.
//
// Zo groeit het menu mee: zet een nieuwe gids hier bij het juiste onderwerp.
// Een link verschijnt pas op de site als de pagina echt bestaat. U kunt een
// link dus al toevoegen voordat de gids klaar is; hij blijft verborgen tot de
// pagina live staat. Een onderwerp zonder enige bestaande link wordt ook
// verborgen (bijv. "Zelf doen" tot de eerste klusgids er is).
import type { Lang } from '../i18n';

export interface MenuLink {
  label: string;
  href: string;
}

export interface MenuTopic {
  key: string;
  /** Korte naam op de knop */
  label: string;
  /** Kop boven het paneel */
  title: string;
  intro: string;
  links: MenuLink[];
  /** Knop onderaan; de eerste bestaande link wordt gebruikt */
  cta?: MenuLink[];
}

export interface HomeMenu {
  heading: string;
  lead: string;
  request: MenuLink;
  topics: MenuTopic[];
}

const nl: HomeMenu = {
  heading: 'Wat wilt u doen?',
  lead: 'Kies uw onderwerp. U ziet meteen de gidsen, kosten en diensten die erbij horen.',
  request: { label: 'Of stel direct uw vraag', href: '/nl/aanvraag/' },
  topics: [
    {
      key: 'kopen',
      label: 'Kopen',
      title: 'Een huis kopen in de Axarquía',
      intro: 'Van het zoeken tot de notaris: waar u op let, wat het kost en hoe u voorkomt dat u een probleem koopt.',
      links: [
        { label: 'Huis kopen in Spanje: het stappenplan', href: '/nl/gidsen/huis-kopen-in-spanje/' },
        { label: 'Aankoopchecklist met vragen in het Spaans', href: '/nl/gidsen/huis-kopen-in-spanje/checklist/' },
        { label: 'Huis kopen in Málaga en Andalusië', href: '/nl/gidsen/huis-kopen-malaga-andalusie/' },
        { label: 'Finca, appartement of dorpshuis?', href: '/nl/gidsen/finca-appartement-of-dorpshuis/' },
        { label: 'Finca kopen: legaliteit, water en toegang', href: '/nl/gidsen/finca-kopen-in-spanje/' },
        { label: 'Kosten koper in Spanje', href: '/nl/gidsen/kosten-koper-spanje/' },
        { label: 'AFO en legaliseren', href: '/nl/gidsen/afo-legaliseren-andalusie/' },
      ],
      cta: [{ label: 'Aankoopkeuring aanvragen', href: '/nl/aankoopkeuring/' }],
    },
    {
      key: 'verbouwen',
      label: 'Verbouwen',
      title: 'Verbouwen en renoveren',
      intro: 'Wat kost het, wat mag er en waar begint u? Per onderdeel van het huis.',
      links: [
        { label: 'Wat kost een huis renoveren?', href: '/nl/gidsen/kosten-huis-renoveren-spanje/' },
        { label: 'Vergunning voor verbouwen', href: '/nl/gidsen/vergunning-verbouwen-andalusie/' },
        { label: 'Vloer kiezen: tegels, microcement of PVC', href: '/nl/gidsen/vloer-kiezen-spanje/' },
        { label: 'Regendouche, inloopdouche of bad?', href: '/nl/gidsen/badkamer-douche-of-bad/' },
        { label: 'Badkamer renoveren: kosten', href: '/nl/kosten/badkamer-renoveren/' },
        { label: 'Nieuwe keuken: kosten', href: '/nl/kosten/keuken-renoveren/' },
        { label: 'Dak en dakterras', href: '/nl/kosten/dak-en-dakterras/' },
        { label: 'Ramen en kozijnen', href: '/nl/kosten/ramen-en-kozijnen/' },
        { label: 'Elektra vernieuwen', href: '/nl/kosten/elektra-vernieuwen/' },
        { label: 'Rekentool verbouwkosten', href: '/nl/kosten/rekentool/' },
      ],
      cta: [{ label: 'Meer over renovatie', href: '/nl/renovatie/' }],
    },
    {
      key: 'buiten',
      label: 'Tuin en zwembad',
      title: 'Buiten: zwembad, terras en perceel',
      intro: 'Zwembad, buitenkeuken, keermuur en water op uw perceel.',
      links: [
        { label: 'Zwembad laten bouwen: kosten', href: '/nl/kosten/zwembad-laten-bouwen/' },
        { label: 'Buitenkeuken', href: '/nl/kosten/buitenkeuken/' },
        { label: 'Keermuur en afwatering', href: '/nl/kosten/keermuur-en-afwatering/' },
        { label: 'Watertank, boorput en beerput', href: '/nl/kosten/watertank-en-beerput/' },
      ],
      cta: [{ label: 'Meer over zwembaden', href: '/nl/zwembad/' }],
    },
    {
      key: 'energie',
      label: 'Energie',
      title: 'Energie besparen en zelf opwekken',
      intro: 'Zonnepanelen, batterij, laadpaal en een warm huis in de winter.',
      links: [
        { label: 'Zonnepanelen: kosten en opbrengst', href: '/nl/kosten/zonnepanelen/' },
        { label: 'Thuisbatterij', href: '/nl/kosten/thuisbatterij/' },
        { label: 'Virtuele batterij', href: '/nl/gidsen/virtuele-batterij-spanje/' },
        { label: 'Energieleveranciers vergelijken', href: '/nl/gidsen/energieleveranciers-spanje-vergelijken/' },
        { label: 'Laadpaal', href: '/nl/kosten/laadpaal/' },
        { label: 'Verwarmen en koelen', href: '/nl/gidsen/verwarmen-en-koelen-spanje/' },
        { label: 'Airco en warmtepomp', href: '/nl/kosten/airco-en-warmtepomp/' },
        { label: 'Off-grid wonen', href: '/nl/gidsen/off-grid-wonen-spanje/' },
      ],
    },
    {
      key: 'verhuren',
      label: 'Verhuren en beheren',
      title: 'Verhuren en laten beheren',
      intro: 'Uw huis verhuren, onderhouden en in de gaten laten houden als u er niet bent.',
      links: [
        { label: 'Woning verhuren in Spanje', href: '/nl/gidsen/woning-verhuren-spanje/' },
        { label: 'Bestaande B&B kopen', href: '/nl/gidsen/huis-kopen-in-spanje/bed-and-breakfast-kopen/' },
        { label: 'Belastingkalender voor eigenaren', href: '/nl/gidsen/belastingkalender-spanje/' },
        { label: 'Verzekering voor uw huis', href: '/nl/gidsen/verzekering-huis-spanje/' },
        { label: 'Huis winterklaar maken', href: '/nl/gidsen/huis-winterklaar-spanje/' },
        { label: 'Onderhoud', href: '/nl/onderhoud/' },
      ],
      cta: [{ label: 'Meer over sleutelbeheer', href: '/nl/sleutelbeheer/' }],
    },
    {
      key: 'verkopen',
      label: 'Verkopen',
      title: 'Uw huis verkopen',
      intro: 'De papieren op orde, het huis opgeknapt en een vlotte verkoop. Of eerst kopen, opknappen en doorverkopen.',
      links: [
        { label: 'Huis verkopen in Spanje', href: '/nl/gidsen/huis-verkopen-spanje/' },
        { label: 'Welke papieren heeft u nodig?', href: '/nl/gidsen/huis-verkopen-spanje/papieren/' },
        { label: 'Opknappen voor de verkoop', href: '/nl/gidsen/huis-verkopen-spanje/opknappen/' },
        { label: 'Huis flippen in Spanje', href: '/nl/gidsen/huis-flippen-spanje/' },
      ],
    },
    {
      key: 'probleem',
      label: 'Probleem oplossen',
      title: 'Er is iets mis met uw huis',
      intro: 'Vocht, een lekkend dak, scheuren of geen water. Wat de oorzaak is en wat u nu doet.',
      links: [
        { label: 'Vocht en schimmel', href: '/nl/problemen/vocht-en-schimmel/' },
        { label: 'Daklekkage', href: '/nl/problemen/daklekkage/' },
        { label: 'Scheuren in muren', href: '/nl/problemen/scheuren-in-muren/' },
        { label: 'Stroom valt steeds uit', href: '/nl/problemen/stroom-valt-uit/' },
        { label: 'Geen water of weinig druk', href: '/nl/problemen/geen-water-of-waterdruk/' },
        { label: 'Termieten', href: '/nl/problemen/termieten/' },
      ],
      cta: [{ label: 'Alle problemen', href: '/nl/problemen/' }],
    },
    {
      key: 'zelf',
      label: 'Zelf doen',
      title: 'Zelf aan de slag',
      intro: 'Klussen die u zelf kunt doen, met stappen, materiaal en wanneer u beter een vakman belt.',
      links: [],
    },
    {
      key: 'wonen',
      label: 'Wonen en emigreren',
      title: 'Wonen of overwinteren in de Axarquía',
      intro: 'Emigreren, overwinteren, de dorpen en het weer.',
      links: [
        { label: 'Emigreren naar Spanje', href: '/nl/gidsen/emigreren-naar-spanje/' },
        { label: 'Wonen in de Axarquía', href: '/nl/wonen/' },
        { label: 'Overwinteren in Spanje', href: '/nl/gidsen/overwinteren-in-spanje/' },
        { label: 'Alle dorpen en plaatsen', href: '/nl/plaatsen/' },
        { label: 'Weer en klimaat per maand', href: '/nl/weer/' },
        { label: 'Feesten en fiesta’s', href: '/nl/feesten/' },
      ],
    },
  ],
};

const en: HomeMenu = {
  heading: 'What would you like to do?',
  lead: 'Pick a topic to see the guides, costs and services that go with it.',
  request: { label: 'Or ask us directly', href: '/en/request/' },
  topics: [
    {
      key: 'kopen',
      label: 'Buy',
      title: 'Buying a home in the Axarquía',
      intro: 'From viewing to the notary: what to check, what it costs and how to avoid buying a problem.',
      links: [
        { label: 'Buying a house in Spain: step by step', href: '/en/guides/buying-a-house-in-spain/' },
        { label: 'Buying checklist with Spanish questions', href: '/en/guides/buying-a-house-in-spain/checklist/' },
        { label: 'Buying property in Málaga and Andalusia', href: '/en/guides/buying-property-in-malaga/' },
        { label: 'Finca, apartment or village house?', href: '/en/guides/finca-apartment-or-village-house/' },
        { label: 'Buying a finca: legal status, water, access', href: '/en/guides/buying-a-finca-in-spain/' },
        { label: 'Buying costs in Spain', href: '/en/guides/buying-costs-in-spain/' },
        { label: 'AFO and legalisation', href: '/en/guides/afo-legalisation-andalusia/' },
      ],
      cta: [{ label: 'Book a property survey', href: '/en/property-survey/' }],
    },
    {
      key: 'verbouwen',
      label: 'Renovate',
      title: 'Renovating and rebuilding',
      intro: 'What it costs, what is allowed and where to start, room by room.',
      links: [
        { label: 'How much does renovating cost?', href: '/en/guides/renovation-costs-spain/' },
        { label: 'Building permits for renovation', href: '/en/guides/building-permits-renovation-andalusia/' },
        { label: 'Choosing a floor: tiles, microcement or vinyl', href: '/en/guides/flooring-options-spain/' },
        { label: 'Rain shower, walk-in shower or bath?', href: '/en/guides/bathroom-shower-or-bath/' },
        { label: 'Bathroom renovation costs', href: '/en/costs/bathroom-renovation/' },
        { label: 'New kitchen costs', href: '/en/costs/kitchen-renovation/' },
        { label: 'Roof and roof terrace', href: '/en/costs/roof-and-roof-terrace/' },
        { label: 'Windows and frames', href: '/en/costs/windows-and-frames/' },
        { label: 'Electrical rewiring', href: '/en/costs/electrical-rewiring/' },
        { label: 'Renovation cost calculator', href: '/en/costs/calculator/' },
      ],
      cta: [{ label: 'More about renovation', href: '/en/renovation/' }],
    },
    {
      key: 'buiten',
      label: 'Garden and pool',
      title: 'Outdoors: pool, terrace and land',
      intro: 'Swimming pool, outdoor kitchen, retaining walls and water on your land.',
      links: [
        { label: 'Building a swimming pool: costs', href: '/en/costs/building-a-swimming-pool/' },
        { label: 'Outdoor kitchen', href: '/en/costs/outdoor-kitchen/' },
        { label: 'Retaining wall and drainage', href: '/en/costs/retaining-wall-and-drainage/' },
        { label: 'Water tank, borehole and septic tank', href: '/en/costs/water-tank-and-septic-tank/' },
      ],
      cta: [{ label: 'More about pools', href: '/en/swimming-pool/' }],
    },
    {
      key: 'energie',
      label: 'Energy',
      title: 'Save energy and make your own',
      intro: 'Solar panels, batteries, EV charging and a warm house in winter.',
      links: [
        { label: 'Solar panels: costs and yield', href: '/en/costs/solar-panels/' },
        { label: 'Home battery', href: '/en/costs/home-battery/' },
        { label: 'Virtual battery', href: '/en/guides/virtual-battery-spain/' },
        { label: 'Electricity providers compared', href: '/en/guides/electricity-providers-spain-compared/' },
        { label: 'EV charger', href: '/en/costs/ev-charger/' },
        { label: 'Heating and cooling', href: '/en/guides/heating-and-cooling-spain/' },
        { label: 'Air conditioning and heat pumps', href: '/en/costs/air-conditioning-and-heat-pumps/' },
        { label: 'Off-grid living', href: '/en/guides/off-grid-living-spain/' },
      ],
    },
    {
      key: 'verhuren',
      label: 'Rent out and manage',
      title: 'Renting out and looking after your home',
      intro: 'Letting your home, maintaining it and having it checked while you are away.',
      links: [
        { label: 'Renting out property in Spain', href: '/en/guides/renting-out-property-in-spain/' },
        { label: 'Buying an existing B&B', href: '/en/guides/buying-a-house-in-spain/buying-a-bed-and-breakfast/' },
        { label: 'Tax calendar for owners', href: '/en/guides/spanish-property-tax-calendar/' },
        { label: 'Home insurance', href: '/en/guides/home-insurance-spain/' },
        { label: 'Preparing your home for winter', href: '/en/guides/preparing-your-spanish-home-for-winter/' },
        { label: 'Maintenance', href: '/en/maintenance/' },
      ],
      cta: [{ label: 'More about key holding', href: '/en/key-holding/' }],
    },
    {
      key: 'verkopen',
      label: 'Sell',
      title: 'Selling your home',
      intro: 'Paperwork in order, the house in shape and a smooth sale. Or buy, renovate and sell on.',
      links: [
        { label: 'Selling a house in Spain', href: '/en/guides/selling-a-house-in-spain/' },
        { label: 'Which documents do you need?', href: '/en/guides/selling-a-house-in-spain/paperwork/' },
        { label: 'Repairs before selling', href: '/en/guides/selling-a-house-in-spain/repairs-before-selling/' },
        { label: 'Flipping houses in Spain', href: '/en/guides/flipping-houses-in-spain/' },
      ],
    },
    {
      key: 'probleem',
      label: 'Fix a problem',
      title: 'Something is wrong with your house',
      intro: 'Damp, a leaking roof, cracks or no water. What causes it and what to do now.',
      links: [
        { label: 'Damp and mould', href: '/en/problems/damp-and-mould/' },
        { label: 'Roof leaks', href: '/en/problems/roof-leaks/' },
        { label: 'Cracks in walls', href: '/en/problems/cracks-in-walls/' },
        { label: 'Power keeps tripping', href: '/en/problems/power-keeps-tripping/' },
        { label: 'No water or low pressure', href: '/en/problems/no-water-or-low-pressure/' },
        { label: 'Termites', href: '/en/problems/termites/' },
      ],
      cta: [{ label: 'All problems', href: '/en/problems/' }],
    },
    {
      key: 'zelf',
      label: 'Do it yourself',
      title: 'Doing it yourself',
      intro: 'Jobs you can do yourself, with steps, materials and when to call a professional.',
      links: [],
    },
    {
      key: 'wonen',
      label: 'Live and move',
      title: 'Living or wintering in the Axarquía',
      intro: 'Moving to Spain, wintering, the villages and the weather.',
      links: [
        { label: 'Moving to Spain from the UK', href: '/en/guides/moving-to-spain-from-the-uk/' },
        { label: 'Living in the Axarquía', href: '/en/living/' },
        { label: 'Wintering in Spain', href: '/en/guides/wintering-in-spain/' },
        { label: 'All towns and villages', href: '/en/places/' },
        { label: 'Weather and climate by month', href: '/en/weather/' },
        { label: 'Fiestas', href: '/en/fiestas/' },
      ],
    },
  ],
};

const de: HomeMenu = {
  heading: 'Was möchten Sie tun?',
  lead: 'Wählen Sie Ihr Thema. Sie sehen sofort die passenden Ratgeber, Kosten und Leistungen.',
  request: { label: 'Oder fragen Sie uns direkt', href: '/de/anfrage/' },
  topics: [
    {
      key: 'kopen',
      label: 'Kaufen',
      title: 'Ein Haus in der Axarquía kaufen',
      intro: 'Von der Besichtigung bis zum Notar: worauf Sie achten, was es kostet und wie Sie keinen Ärger mitkaufen.',
      links: [
        { label: 'Haus kaufen in Spanien: Schritt für Schritt', href: '/de/ratgeber/haus-kaufen-spanien/' },
        { label: 'Kauf-Checkliste mit spanischen Fragen', href: '/de/ratgeber/haus-kaufen-spanien/checkliste/' },
        { label: 'Immobilie kaufen in Málaga und Andalusien', href: '/de/ratgeber/immobilie-kaufen-malaga/' },
        { label: 'Finca, Wohnung oder Dorfhaus?', href: '/de/ratgeber/finca-wohnung-oder-dorfhaus/' },
        { label: 'Finca kaufen: Legalität, Wasser, Zufahrt', href: '/de/ratgeber/finca-kaufen-spanien/' },
        { label: 'Kaufnebenkosten in Spanien', href: '/de/ratgeber/kaufnebenkosten-spanien/' },
        { label: 'AFO und Legalisierung', href: '/de/ratgeber/afo-legalisierung-andalusien/' },
      ],
      cta: [{ label: 'Immobiliengutachten anfragen', href: '/de/immobiliengutachten/' }],
    },
    {
      key: 'verbouwen',
      label: 'Renovieren',
      title: 'Umbauen und renovieren',
      intro: 'Was es kostet, was erlaubt ist und wo Sie anfangen, Raum für Raum.',
      links: [
        { label: 'Was kostet eine Renovierung?', href: '/de/ratgeber/renovierungskosten-spanien/' },
        { label: 'Baugenehmigung für den Umbau', href: '/de/ratgeber/baugenehmigung-umbau-andalusien/' },
        { label: 'Bodenbelag: Fliesen, Mikrozement oder Vinyl', href: '/de/ratgeber/bodenbelag-spanien/' },
        { label: 'Regendusche, bodengleiche Dusche oder Wanne?', href: '/de/ratgeber/bad-dusche-oder-badewanne/' },
        { label: 'Bad renovieren: Kosten', href: '/de/kosten/bad-renovieren/' },
        { label: 'Neue Küche: Kosten', href: '/de/kosten/kueche-renovieren/' },
        { label: 'Dach und Dachterrasse', href: '/de/kosten/dach-und-dachterrasse/' },
        { label: 'Fenster und Rahmen', href: '/de/kosten/fenster-und-rahmen/' },
        { label: 'Elektrik erneuern', href: '/de/kosten/elektrik-erneuern/' },
        { label: 'Renovierungsrechner', href: '/de/kosten/rechner/' },
      ],
      cta: [{ label: 'Mehr zur Renovierung', href: '/de/renovierung/' }],
    },
    {
      key: 'buiten',
      label: 'Garten und Pool',
      title: 'Draußen: Pool, Terrasse und Grundstück',
      intro: 'Pool, Außenküche, Stützmauer und Wasser auf Ihrem Grundstück.',
      links: [
        { label: 'Pool bauen: Kosten', href: '/de/kosten/pool-bauen/' },
        { label: 'Außenküche', href: '/de/kosten/aussenkueche/' },
        { label: 'Stützmauer und Entwässerung', href: '/de/kosten/stuetzmauer-und-entwaesserung/' },
        { label: 'Wassertank, Brunnen und Klärgrube', href: '/de/kosten/wassertank-und-klaergrube/' },
      ],
      cta: [{ label: 'Mehr zum Pool', href: '/de/pool/' }],
    },
    {
      key: 'energie',
      label: 'Energie',
      title: 'Energie sparen und selbst erzeugen',
      intro: 'Solaranlage, Batterie, Wallbox und ein warmes Haus im Winter.',
      links: [
        { label: 'Solaranlage: Kosten und Ertrag', href: '/de/kosten/solaranlage/' },
        { label: 'Batteriespeicher', href: '/de/kosten/batteriespeicher/' },
        { label: 'Virtuelle Batterie', href: '/de/ratgeber/virtuelle-batterie-spanien/' },
        { label: 'Stromanbieter vergleichen', href: '/de/ratgeber/stromanbieter-spanien-vergleich/' },
        { label: 'Wallbox', href: '/de/kosten/wallbox/' },
        { label: 'Heizen und Kühlen', href: '/de/ratgeber/heizen-und-kuehlen-spanien/' },
        { label: 'Klimaanlage und Wärmepumpe', href: '/de/kosten/klimaanlage-und-waermepumpe/' },
        { label: 'Autark leben', href: '/de/ratgeber/autark-leben-spanien/' },
      ],
    },
    {
      key: 'verhuren',
      label: 'Vermieten und betreuen',
      title: 'Vermieten und betreuen lassen',
      intro: 'Ihr Haus vermieten, instand halten und kontrollieren lassen, wenn Sie nicht da sind.',
      links: [
        { label: 'Immobilie in Spanien vermieten', href: '/de/ratgeber/immobilie-in-spanien-vermieten/' },
        { label: 'Bestehende Pension kaufen', href: '/de/ratgeber/haus-kaufen-spanien/pension-kaufen/' },
        { label: 'Steuerkalender für Eigentümer', href: '/de/ratgeber/steuerkalender-spanien/' },
        { label: 'Hausversicherung', href: '/de/ratgeber/hausversicherung-spanien/' },
        { label: 'Haus winterfest machen', href: '/de/ratgeber/haus-winterfest-spanien/' },
        { label: 'Instandhaltung', href: '/de/instandhaltung/' },
      ],
      cta: [{ label: 'Mehr zur Hausbetreuung', href: '/de/hausbetreuung/' }],
    },
    {
      key: 'verkopen',
      label: 'Verkaufen',
      title: 'Ihr Haus verkaufen',
      intro: 'Unterlagen in Ordnung, das Haus hergerichtet und ein zügiger Verkauf. Oder kaufen, renovieren und weiterverkaufen.',
      links: [
        { label: 'Haus verkaufen in Spanien', href: '/de/ratgeber/haus-verkaufen-spanien/' },
        { label: 'Welche Unterlagen brauchen Sie?', href: '/de/ratgeber/haus-verkaufen-spanien/unterlagen/' },
        { label: 'Renovieren vor dem Verkauf', href: '/de/ratgeber/haus-verkaufen-spanien/renovieren-vor-dem-verkauf/' },
        { label: 'Immobilien flippen in Spanien', href: '/de/ratgeber/immobilien-flippen-spanien/' },
      ],
    },
    {
      key: 'probleem',
      label: 'Problem lösen',
      title: 'Mit Ihrem Haus stimmt etwas nicht',
      intro: 'Feuchtigkeit, ein undichtes Dach, Risse oder kein Wasser. Was die Ursache ist und was Sie jetzt tun.',
      links: [
        { label: 'Feuchtigkeit und Schimmel', href: '/de/probleme/feuchtigkeit-und-schimmel/' },
        { label: 'Undichtes Dach', href: '/de/probleme/undichtes-dach/' },
        { label: 'Risse in Wänden', href: '/de/probleme/risse-in-waenden/' },
        { label: 'Strom fällt aus', href: '/de/probleme/strom-faellt-aus/' },
        { label: 'Kein Wasser oder Wasserdruck', href: '/de/probleme/kein-wasser-oder-wasserdruck/' },
        { label: 'Termiten', href: '/de/probleme/termiten/' },
      ],
      cta: [{ label: 'Alle Probleme', href: '/de/probleme/' }],
    },
    {
      key: 'zelf',
      label: 'Selber machen',
      title: 'Selbst Hand anlegen',
      intro: 'Arbeiten, die Sie selbst erledigen können, mit Schritten, Material und wann besser ein Profi kommt.',
      links: [],
    },
    {
      key: 'wonen',
      label: 'Wohnen und auswandern',
      title: 'Wohnen oder überwintern in der Axarquía',
      intro: 'Auswandern, überwintern, die Dörfer und das Wetter.',
      links: [
        { label: 'Auswandern nach Spanien', href: '/de/ratgeber/auswandern-nach-spanien/' },
        { label: 'Leben in der Axarquía', href: '/de/wohnen/' },
        { label: 'Überwintern in Spanien', href: '/de/ratgeber/ueberwintern-in-spanien/' },
        { label: 'Alle Orte und Dörfer', href: '/de/orte/' },
        { label: 'Wetter und Klima nach Monat', href: '/de/wetter/' },
        { label: 'Feste', href: '/de/feste/' },
      ],
    },
  ],
};

export const homeMenu: Partial<Record<Lang, HomeMenu>> = { nl, en, de };
