// Praktische gidsen voor eigenaren: ongedierte, energielabel, autoverzekering en huisdieren.
// Eigen bestand, zodat andere gidsen in guides.ts kunnen groeien zonder conflicten.
// In nl, en en de staan de gidsen op dezelfde positie (achter guides-diensten.ts).
//
// Zoekwoorden (Ubersuggest, november 2026):
// - 'kakkerlakken spanje' 140 NL; 'control de plagas' 4.400 ES (Spaanstalig, alleen als ondersteuning)
// - 'energielabel spanje' 70 NL (+ 'energielabel spanje 2030' 50); 'certificado energetico' 6.600 ES
// - 'autoverzekering spanje' 90 NL; 'car insurance spain' 390 UK
// - 'pet transport to spain' 70 UK; NL vrijwel geen volume, gids vooral voor emigranten en als linkbaar artikel
// Let op kannibalisatie: /nl/problemen/termieten/ mikt op termieten; deze ongediertegids verwijst daarheen.
// De gids huis-verkopen-spanje/papieren heeft een korte alinea over het energielabel en linkt naar de nieuwe gids.
import type { GuideMeta } from './guides';

const published = '2026-11-07';

export const praktischNl: GuideMeta[] = [
  {
    slug: 'ongedierte-bestrijden-spanje',
    title: 'Ongedierte in uw huis in Spanje: kakkerlakken, muizen, processierups en termieten',
    seoTitle: 'Kakkerlakken en ander ongedierte in Spanje: zo komt u ervan af',
    short: 'Ongedierte bestrijden',
    description: 'Kakkerlakken, mieren, muizen, muggen, processierups of termieten in uw huis in de Axarquía? Zo herkent u ze, voorkomt u ze en wat een plaagbestrijder kost.',
    lead: 'Warmte, droogte en een huis dat maanden dicht is: ongedierte voelt zich in Zuid-Spanje snel thuis. Met een paar bouwkundige maatregelen en op tijd een erkende bestrijder houdt u het buiten.',
    keyword: 'kakkerlakken spanje',
    minutes: 8,
    published,
  },
  {
    slug: 'energielabel-spanje',
    title: 'Energielabel in Spanje (certificado energético): wanneer verplicht en wat kost het?',
    seoTitle: 'Energielabel Spanje: verplicht, kosten en de regels voor 2030',
    short: 'Energielabel',
    description: 'Wanneer heeft u in Spanje een energielabel (certificado de eficiencia energética) nodig, wat kost het, hoe lang is het geldig en hoe krijgt u een beter label?',
    lead: 'Verkoopt of verhuurt u uw huis in Spanje, dan heeft u een energielabel nodig. Het is snel geregeld en niet duur. En met de juiste verbeteringen scoort uw huis een stuk beter.',
    keyword: 'energielabel spanje',
    minutes: 7,
    published,
  },
  {
    slug: 'autoverzekering-spanje',
    title: 'Autoverzekering in Spanje: verplichte dekking, kosten en uw Nederlandse kenteken',
    seoTitle: 'Autoverzekering Spanje: wat u moet weten (2026)',
    short: 'Autoverzekering',
    description: 'Een auto in Spanje verzekeren: welke dekking verplicht is, wat het kost, hoe het zit met een Nederlands kenteken en uw schadevrije jaren, en een auto die maanden stilstaat.',
    lead: 'Rijdt u in Spanje met een eigen auto, of laat u er een staan voor als u er bent? Dan komt u vroeg of laat bij de Spaanse autoverzekering uit. Dit zijn de regels en de valkuilen.',
    keyword: 'autoverzekering spanje',
    minutes: 7,
    published,
  },
  {
    slug: 'met-huisdier-naar-spanje',
    title: 'Met uw hond of kat naar Spanje: papieren, reis en een huis dat erop is ingericht',
    seoTitle: 'Hond of kat meenemen naar Spanje: papieren en tips',
    short: 'Met huisdier naar Spanje',
    description: 'Met uw hond of kat naar Spanje verhuizen of overwinteren: chip, paspoort en rabiës, vervoer met auto of vliegtuig, Spaanse regels en een veilige tuin en zwembad.',
    lead: 'Uw hond of kat gaat gewoon mee naar de Axarquía. Met de juiste papieren is de reis zo geregeld. Daarna wilt u een huis en tuin waar uw dier veilig is, en weten welke Spaanse regels gelden.',
    keyword: 'hond meenemen naar spanje',
    minutes: 8,
    published,
  },
];

export const praktischEn: GuideMeta[] = [
  {
    slug: 'pest-control-spain',
    title: 'Pest control in Spain: cockroaches, rodents, processionary caterpillars and termites',
    seoTitle: 'Pest control in Spain: cockroaches, rats and termites',
    short: 'Pest control',
    description: 'Cockroaches, ants, mice, mosquitoes, processionary caterpillars or termites in your house in the Axarquía? How to recognise and prevent them, and what pest control costs.',
    lead: 'Heat, dry weather and a house that is shut for months: pests feel at home in southern Spain. A few building measures and a licensed pest controller at the right time keep them out.',
    keyword: 'pest control spain',
    minutes: 8,
    published,
  },
  {
    slug: 'energy-certificate-spain',
    title: 'Energy certificates in Spain (certificado energético): when you need one and what it costs',
    seoTitle: 'Energy certificate in Spain: rules, cost and validity',
    short: 'Energy certificate',
    description: 'When do you need an energy performance certificate (certificado de eficiencia energética) in Spain, what does it cost, how long is it valid and how do you get a better rating?',
    lead: 'If you sell or let your house in Spain, you need an energy certificate. It is quick to arrange and not expensive. And with the right improvements, your house can score a lot better.',
    keyword: 'energy certificate spain',
    minutes: 7,
    published,
  },
  {
    slug: 'car-insurance-spain',
    title: 'Car insurance in Spain for expats: compulsory cover, costs and UK cars',
    seoTitle: 'Car insurance in Spain for expats: what you need to know',
    short: 'Car insurance',
    description: 'Insuring a car in Spain: which cover is compulsory, what it costs, the rules for UK-registered cars, your no-claims history and a car that stands still for months.',
    lead: 'Driving your own car in Spain, or keeping one there for when you visit? Sooner or later you will deal with Spanish car insurance. These are the rules and the pitfalls.',
    keyword: 'car insurance spain',
    minutes: 7,
    published,
  },
  {
    slug: 'pet-transport-to-spain',
    title: 'Taking your dog or cat to Spain: pet transport, paperwork and a pet-proof home',
    seoTitle: 'Pet transport to Spain: paperwork, travel and tips',
    short: 'Pets to Spain',
    description: 'Moving or wintering in Spain with your dog or cat: microchip, Animal Health Certificate and rabies, travelling by car, ferry or plane, Spanish rules and a safe garden and pool.',
    lead: 'Your dog or cat can come with you to the Axarquía. With the right paperwork, the journey is easy to arrange. After that you want a house and garden where your pet is safe, and to know which Spanish rules apply.',
    keyword: 'pet transport to spain',
    minutes: 8,
    published,
  },
];

export const praktischDe: GuideMeta[] = [
  {
    slug: 'schaedlinge-spanien',
    title: 'Schädlinge im Haus in Spanien: Kakerlaken, Mäuse, Prozessionsspinner und Termiten',
    seoTitle: 'Kakerlaken und Schädlinge in Spanien: was hilft',
    short: 'Schädlingsbekämpfung',
    description: 'Kakerlaken, Ameisen, Mäuse, Mücken, Prozessionsspinner oder Termiten im Haus in der Axarquía? So erkennen und vermeiden Sie sie, und was ein Kammerjäger kostet.',
    lead: 'Wärme, Trockenheit und ein Haus, das monatelang zu ist: Schädlinge fühlen sich in Südspanien schnell zu Hause. Mit ein paar baulichen Maßnahmen und rechtzeitig einem zugelassenen Kammerjäger halten Sie sie draußen.',
    keyword: 'kakerlaken spanien',
    minutes: 8,
    published,
  },
  {
    slug: 'energieausweis-spanien',
    title: 'Energieausweis in Spanien (certificado energético): wann Pflicht und was er kostet',
    seoTitle: 'Energieausweis Spanien: Pflicht, Kosten und Gültigkeit',
    short: 'Energieausweis',
    description: 'Wann brauchen Sie in Spanien einen Energieausweis (certificado de eficiencia energética), was kostet er, wie lange gilt er und wie bekommen Sie eine bessere Klasse?',
    lead: 'Wenn Sie Ihr Haus in Spanien verkaufen oder vermieten, brauchen Sie einen Energieausweis. Er ist schnell erstellt und nicht teuer. Und mit den richtigen Verbesserungen schneidet Ihr Haus deutlich besser ab.',
    keyword: 'energieausweis spanien',
    minutes: 7,
    published,
  },
  {
    slug: 'autoversicherung-spanien',
    title: 'Autoversicherung in Spanien: Pflichtdeckung, Kosten und Ihr deutsches Kennzeichen',
    seoTitle: 'Autoversicherung in Spanien: das müssen Sie wissen',
    short: 'Autoversicherung',
    description: 'Ein Auto in Spanien versichern: welche Deckung Pflicht ist, was sie kostet, was mit deutschem Kennzeichen und Schadenfreiheitsrabatt gilt, und ein Auto, das monatelang steht.',
    lead: 'Fahren Sie in Spanien mit dem eigenen Auto, oder steht dort eines für Ihre Aufenthalte? Dann kommen Sie früher oder später zur spanischen Autoversicherung. Das sind die Regeln und die Fallstricke.',
    keyword: 'autoversicherung spanien',
    minutes: 7,
    published,
  },
  {
    slug: 'mit-hund-nach-spanien',
    title: 'Mit Hund oder Katze nach Spanien: Papiere, Reise und ein Haus, das dazu passt',
    seoTitle: 'Mit Hund oder Katze nach Spanien: Papiere und Tipps',
    short: 'Mit Haustier nach Spanien',
    description: 'Mit Hund oder Katze nach Spanien auswandern oder überwintern: Chip, EU-Heimtierausweis und Tollwut, Reise mit Auto oder Flugzeug, spanische Regeln und ein sicherer Garten und Pool.',
    lead: 'Ihr Hund oder Ihre Katze kommt einfach mit in die Axarquía. Mit den richtigen Papieren ist die Reise schnell organisiert. Danach wollen Sie ein Haus und einen Garten, in dem Ihr Tier sicher ist, und wissen, welche spanischen Regeln gelten.',
    keyword: 'mit hund nach spanien',
    minutes: 8,
    published,
  },
];
