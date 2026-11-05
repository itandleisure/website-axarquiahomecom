// Talen, vertaalde routes en vaste teksten van de site.
import { guides, guidesBy, guideHref } from './data/guides';
import { places, placeHref, type PlacePage } from './data/places';
import { placeContent } from './data/place-content';
import { hasMunicipalPages } from './data/place-tabs';
export type Lang = 'nl' | 'en' | 'de' | 'sv';
export const langs: Lang[] = ['nl', 'en', 'de', 'sv'];
export const langNames: Record<Lang, string> = { nl: 'Nederlands', en: 'English', de: 'Deutsch', sv: 'Svenska' };

/** Elke pagina met haar vertalingen. Gebruikt voor hreflang en de taalwissel. */
export const routes: Partial<Record<Lang, string>>[] = [
  { nl: '/nl/', en: '/en/', de: '/de/', sv: '/sv/' },
  { nl: '/nl/renovatie/', en: '/en/renovation/', de: '/de/renovierung/', sv: '/sv/renovering/' },
  { nl: '/nl/sleutelbeheer/', en: '/en/key-holding/', de: '/de/hausbetreuung/', sv: '/sv/tillsyn/' },
  { nl: '/nl/aankoopkeuring/', en: '/en/property-survey/', de: '/de/immobiliengutachten/', sv: '/sv/besiktning/' },
  { nl: '/nl/zwembad/', en: '/en/swimming-pool/', de: '/de/pool/', sv: '/sv/pool/' },
  { nl: '/nl/onderhoud/', en: '/en/maintenance/', de: '/de/instandhaltung/', sv: '/sv/underhall/' },
  { nl: '/nl/projecten/', en: '/en/projects/', de: '/de/projekte/', sv: '/sv/projekt/' },
  { nl: '/nl/over-ons/', en: '/en/about-us/', de: '/de/ueber-uns/', sv: '/sv/om-oss/' },
  { nl: '/nl/aanvraag/', en: '/en/request/', de: '/de/anfrage/', sv: '/sv/forfragan/' },
  { nl: '/nl/privacy/', en: '/en/privacy/', de: '/de/datenschutz/', sv: '/sv/integritet/' },
  { nl: '/nl/bedankt/', en: '/en/thank-you/', de: '/de/danke/', sv: '/sv/tack/' },
  { nl: '/nl/gidsen/', en: '/en/guides/', de: '/de/ratgeber/', sv: '/sv/guider/' },
  { nl: '/nl/plaatsen/', en: '/en/places/', de: '/de/orte/', sv: '/sv/orter/' },
  { nl: '/nl/zien-en-doen/', en: '/en/things-to-do/', de: '/de/sehenswuerdigkeiten/', sv: '/sv/se-och-gora/' },
  // Gidsen staan in alle talen in dezelfde volgorde (zie src/data/guides.ts)
  ...guides.map((_, i) =>
    Object.fromEntries(langs.filter((l) => guidesBy[l][i]).map((l) => [l, guideHref(l, guidesBy[l][i])])),
  ),
  // Plaatsen (pagina's bestaan alleen voor plaatsen met built: true)
  ...places
    .filter((p) => p.built)
    .flatMap((p) =>
      (['overview', 'see', 'living'] as PlacePage[]).map((page) =>
        Object.fromEntries(
          langs
            .filter((l) => {
              const c = placeContent[p.slug]?.[l];
              return c && (page === 'overview' || c[page]);
            })
            .map((l) => [l, placeHref(l, p, page)]),
        ),
      ),
    )
    .filter((r) => Object.keys(r).length > 0),
  // Bouwvergunning en Praktisch per gemeente (alleen nl, en, de)
  ...places
    .flatMap((p) =>
      (['permit', 'practical'] as PlacePage[]).map((page) =>
        Object.fromEntries(langs.filter((l) => hasMunicipalPages(l, p)).map((l) => [l, placeHref(l, p, page)])),
      ),
    )
    .filter((r) => Object.keys(r).length > 0),
];

export function alternatesFor(path: string): Partial<Record<Lang, string>> {
  return routes.find((r) => Object.values(r).includes(path)) ?? {};
}

type Key = 'home' | 'request' | 'privacy' | 'thanks' | 'guides' | 'about' | 'projects' | 'places' | 'todo';
const keyIndex: Record<Key, number> = { home: 0, projects: 6, about: 7, request: 8, privacy: 9, thanks: 10, guides: 11, places: 12, todo: 13 };
export const path = (lang: Lang, key: Key) => routes[keyIndex[key]][lang]!;

export interface NavItem { href: string; label: string; children?: { href: string; label: string }[] }
export const nav: Record<Lang, NavItem[]> = {
  nl: [
    { href: '/nl/#diensten', label: 'Diensten', children: [
      { href: '/nl/renovatie/', label: 'Renovatie' },
      { href: '/nl/sleutelbeheer/', label: 'Sleutelbeheer' },
      { href: '/nl/aankoopkeuring/', label: 'Aankoopkeuring' },
      { href: '/nl/zwembad/', label: 'Zwembad' },
      { href: '/nl/onderhoud/', label: 'Onderhoud' },
    ] },
    { href: '/nl/plaatsen/', label: 'Plaatsen' },
    { href: '/nl/wonen/', label: 'Wonen' },
    { href: '/nl/zien-en-doen/', label: 'Zien en doen' },
    { href: '/nl/gidsen/', label: 'Gidsen' },
    { href: '/nl/over-ons/', label: 'Over ons' },
  ],
  en: [
    { href: '/en/#services', label: 'Services', children: [
      { href: '/en/renovation/', label: 'Renovation' },
      { href: '/en/key-holding/', label: 'Key holding' },
      { href: '/en/property-survey/', label: 'Property survey' },
      { href: '/en/swimming-pool/', label: 'Swimming pools' },
      { href: '/en/maintenance/', label: 'Maintenance' },
    ] },
    { href: '/en/places/', label: 'Places' },
    { href: '/en/living/', label: 'Living' },
    { href: '/en/things-to-do/', label: 'Things to do' },
    { href: '/en/guides/', label: 'Guides' },
    { href: '/en/about-us/', label: 'About us' },
  ],
  de: [
    { href: '/de/#leistungen', label: 'Leistungen', children: [
      { href: '/de/renovierung/', label: 'Renovierung' },
      { href: '/de/hausbetreuung/', label: 'Hausbetreuung' },
      { href: '/de/immobiliengutachten/', label: 'Gutachten' },
      { href: '/de/pool/', label: 'Pool' },
      { href: '/de/instandhaltung/', label: 'Instandhaltung' },
    ] },
    { href: '/de/orte/', label: 'Orte' },
    { href: '/de/wohnen/', label: 'Wohnen' },
    { href: '/de/sehenswuerdigkeiten/', label: 'Sehenswertes' },
    { href: '/de/ratgeber/', label: 'Ratgeber' },
    { href: '/de/ueber-uns/', label: 'Über uns' },
  ],
  sv: [
    { href: '/sv/#tjanster', label: 'Tjänster', children: [
      { href: '/sv/renovering/', label: 'Renovering' },
      { href: '/sv/tillsyn/', label: 'Tillsyn' },
      { href: '/sv/besiktning/', label: 'Besiktning' },
      { href: '/sv/pool/', label: 'Pool' },
      { href: '/sv/underhall/', label: 'Underhåll' },
    ] },
    { href: '/sv/orter/', label: 'Orter' },
    { href: '/sv/bo/', label: 'Bo' },
    { href: '/sv/se-och-gora/', label: 'Se och göra' },
    { href: '/sv/guider/', label: 'Guider' },
    { href: '/sv/om-oss/', label: 'Om oss' },
  ],
};

export const services: Record<Lang, { href: string; title: string; text: string }[]> = {
  nl: [
    { href: '/nl/renovatie/', title: 'Renovatie en verbouwing', text: 'Van een verouderd dorpshuis tot een finca die helemaal opnieuw moet. Eén Nederlandstalig team, één aanspreekpunt.' },
    { href: '/nl/sleutelbeheer/', title: 'Sleutelbeheer en toezicht', text: 'Wij houden uw huis in de gaten als u er niet bent. Vaste controles, foto’s en direct actie bij een probleem.' },
    { href: '/nl/aankoopkeuring/', title: 'Aankoopkeuring', text: 'Laat een huis keuren voordat u tekent. U weet wat u koopt en wat het opknappen gaat kosten.' },
    { href: '/nl/zwembad/', title: 'Zwembad bouwen en onderhoud', text: 'Een nieuw zwembad, een oud bad dat weer moet werken, of vast onderhoud terwijl u weg bent.' },
    { href: '/nl/onderhoud/', title: 'Onderhoud en reparaties', text: 'Daken, lekkages, terrassen, perceel en tuin. Ook als u zelf niet in Spanje bent.' },
  ],
  en: [
    { href: '/en/renovation/', title: 'Renovation and building work', text: 'From a tired village house to a finca that needs starting over. One English-speaking team, one point of contact.' },
    { href: '/en/key-holding/', title: 'Key holding and property checks', text: 'We look after your home while you are away. Regular visits, photo reports and fast action when something is wrong.' },
    { href: '/en/property-survey/', title: 'Pre-purchase survey', text: 'Have the property surveyed before you sign. Know what you are buying and what it will cost to put right.' },
    { href: '/en/swimming-pool/', title: 'Swimming pools', text: 'A new pool, an old one that needs to work again, or regular maintenance while you are away.' },
    { href: '/en/maintenance/', title: 'Maintenance and repairs', text: 'Roofs, leaks, terraces, land and gardens. Even when you are not in Spain.' },
  ],
  de: [
    { href: '/de/renovierung/', title: 'Renovierung und Umbau', text: 'Vom in die Jahre gekommenen Dorfhaus bis zur Finca, die von Grund auf neu gemacht werden muss. Ein Team, ein Ansprechpartner.' },
    { href: '/de/hausbetreuung/', title: 'Hausbetreuung und Schlüsselservice', text: 'Wir kümmern uns um Ihr Haus, wenn Sie nicht da sind. Regelmäßige Kontrollen, Fotos und schnelle Hilfe bei Problemen.' },
    { href: '/de/immobiliengutachten/', title: 'Gutachten vor dem Kauf', text: 'Lassen Sie das Haus prüfen, bevor Sie unterschreiben. Sie wissen, was Sie kaufen und was die Sanierung kostet.' },
    { href: '/de/pool/', title: 'Poolbau und Poolpflege', text: 'Ein neuer Pool, ein alter, der wieder funktionieren soll, oder die regelmäßige Pflege, während Sie weg sind.' },
    { href: '/de/instandhaltung/', title: 'Instandhaltung und Reparaturen', text: 'Dächer, Undichtigkeiten, Terrassen, Grundstück und Garten. Auch wenn Sie nicht in Spanien sind.' },
  ],
  sv: [
    { href: '/sv/renovering/', title: 'Renovering och ombyggnad', text: 'Från ett slitet byhus till en finca som behöver göras om från grunden. Ett team, en kontaktperson.' },
    { href: '/sv/tillsyn/', title: 'Tillsyn och nyckelservice', text: 'Vi håller koll på ditt hus när du inte är där. Regelbundna besök, foton och snabb hjälp om något händer.' },
    { href: '/sv/besiktning/', title: 'Besiktning före köp', text: 'Låt besiktiga huset innan du skriver på. Då vet du vad du köper och vad det kostar att åtgärda.' },
    { href: '/sv/pool/', title: 'Poolbygge och poolskötsel', text: 'En ny pool, en gammal som ska fungera igen eller regelbunden skötsel medan du är borta.' },
    { href: '/sv/underhall/', title: 'Underhåll och reparationer', text: 'Tak, läckor, terrasser, tomt och trädgård. Även när du inte är i Spanien.' },
  ],
};

export const ui = {
  nl: {
    skip: 'Naar de inhoud',
    toHome: 'naar de homepage',
    menuOpen: 'Menu openen',
    mainMenu: 'Hoofdmenu',
    cta: 'Gratis aanvraag',
    ctaWizard: 'Start de keuzehulp',
    ctaTitle: 'Vertel ons wat u van plan bent',
    ctaText: 'Beantwoord een paar korte vragen. Binnen 24 uur neemt een Nederlandstalige collega contact met u op, zonder verplichtingen.',
    faq: 'Veelgestelde vragen',
    servicesTitle: 'Wat we voor u doen',
    more: 'Meer over',
    stepsTitle: 'Zo werkt het',
    crumbs: 'Kruimelpad',
    tagline: 'Het Nederlandstalige team voor kopen, verbouwen en beheren in de Axarquía, van Rincón de la Victoria tot Nerja.',
    fServices: 'Diensten',
    fContact: 'Contact',
    fAbout: 'Over',
    fRequest: 'Aanvraag doen',
    fAboutUs: 'Over ons',
    fProjects: 'Projecten',
    fGuides: 'Gidsen',
    fPrivacy: 'Privacy en voorwaarden',
    builtBy: (n: string) => `Uitvoering door ${n} in de Axarquía.`,
    builtByDefault: 'ons vaste Nederlandse bouwbedrijf',
    guide: 'Gids', minRead: 'minuten lezen', updated: 'Bijgewerkt op', inGuide: 'In deze gids', askAdvice: 'Vraag advies aan',
    readAlso: 'Lees ook', readGuide: 'Lees de gids', guidesCrumb: 'Gidsen', dateLocale: 'nl-NL',
    langLabel: 'Taal', readIn: 'Lees deze pagina in het',
  },
  en: {
    skip: 'Skip to content',
    toHome: 'to the homepage',
    menuOpen: 'Open menu',
    mainMenu: 'Main menu',
    cta: 'Free quote',
    ctaWizard: 'Start your request',
    ctaTitle: 'Tell us what you have in mind',
    ctaText: 'Answer a few short questions. A member of our English-speaking team will get back to you within 24 hours, with no obligation.',
    faq: 'Frequently asked questions',
    servicesTitle: 'What we do for you',
    more: 'More about',
    stepsTitle: 'How it works',
    crumbs: 'Breadcrumb',
    tagline: 'The English and Dutch-speaking team for buying, renovating and looking after homes in the Axarquía, from Rincón de la Victoria to Nerja.',
    fServices: 'Services',
    fContact: 'Contact',
    fAbout: 'About',
    fRequest: 'Make a request',
    fAboutUs: 'About us',
    fProjects: 'Projects',
    fGuides: 'Guides',
    fPrivacy: 'Privacy and terms',
    builtBy: (n: string) => `Work carried out by ${n} in the Axarquía.`,
    builtByDefault: 'our partner building company',
    guide: 'Guide', minRead: 'min read', updated: 'Updated', inGuide: 'In this guide', askAdvice: 'Ask for advice',
    readAlso: 'Read next', readGuide: 'Read the guide', guidesCrumb: 'Guides', dateLocale: 'en-GB',
    langLabel: 'Language', readIn: 'Read this page in',
  },
  de: {
    skip: 'Zum Inhalt',
    toHome: 'zur Startseite',
    menuOpen: 'Menü öffnen',
    mainMenu: 'Hauptmenü',
    cta: 'Kostenlose Anfrage',
    ctaWizard: 'Anfrage starten',
    ctaTitle: 'Erzählen Sie uns von Ihrem Vorhaben',
    ctaText: 'Beantworten Sie ein paar kurze Fragen. Innerhalb von 24 Stunden melden wir uns bei Ihnen, unverbindlich und auf Englisch oder Niederländisch.',
    faq: 'Häufige Fragen',
    servicesTitle: 'Was wir für Sie tun',
    more: 'Mehr zu',
    stepsTitle: 'So funktioniert es',
    crumbs: 'Brotkrümelnavigation',
    tagline: 'Das deutsch-, niederländisch- und englischsprachige Team für Kauf, Renovierung und Betreuung von Immobilien in der Axarquía, von Rincón de la Victoria bis Nerja.',
    fServices: 'Leistungen',
    fContact: 'Kontakt',
    fAbout: 'Über',
    fRequest: 'Anfrage stellen',
    fAboutUs: 'Über uns',
    fProjects: 'Projekte',
    fGuides: 'Ratgeber',
    fPrivacy: 'Impressum und Datenschutz',
    builtBy: (n: string) => `Ausführung durch ${n} in der Axarquía.`,
    builtByDefault: 'unser niederländisches Partner-Bauunternehmen',
    guide: 'Ratgeber', minRead: 'Minuten Lesezeit', updated: 'Aktualisiert am', inGuide: 'In diesem Ratgeber', askAdvice: 'Beratung anfragen',
    readAlso: 'Weiterlesen', readGuide: 'Zum Ratgeber', guidesCrumb: 'Ratgeber', dateLocale: 'de-DE',
    langLabel: 'Sprache', readIn: 'Diese Seite lesen auf',
  },
  sv: {
    skip: 'Till innehållet',
    toHome: 'till startsidan',
    menuOpen: 'Öppna menyn',
    mainMenu: 'Huvudmeny',
    cta: 'Gratis förfrågan',
    ctaWizard: 'Starta förfrågan',
    ctaTitle: 'Berätta vad du har för planer',
    ctaText: 'Svara på några korta frågor. Inom 24 timmar hör vi av oss, utan förpliktelser.',
    faq: 'Vanliga frågor',
    servicesTitle: 'Det här gör vi för dig',
    more: 'Mer om',
    stepsTitle: 'Så går det till',
    crumbs: 'Brödsmulor',
    tagline: 'Teamet för köp, renovering och tillsyn av bostäder i Axarquía, från Rincón de la Victoria till Nerja.',
    fServices: 'Tjänster',
    fContact: 'Kontakt',
    fAbout: 'Om',
    fRequest: 'Gör en förfrågan',
    fAboutUs: 'Om oss',
    fProjects: 'Projekt',
    fGuides: 'Guider',
    fPrivacy: 'Integritet och villkor',
    builtBy: (n: string) => `Arbetet utförs av ${n} i Axarquía.`,
    builtByDefault: 'vårt nederländska samarbetsföretag inom bygg',
    guide: 'Guide', minRead: 'minuters läsning', updated: 'Uppdaterad', inGuide: 'I den här guiden', askAdvice: 'Be om råd',
    readAlso: 'Läs också', readGuide: 'Läs guiden', guidesCrumb: 'Guider', dateLocale: 'sv-SE',
    langLabel: 'Språk', readIn: 'Läs sidan på',
  },
} as const;
