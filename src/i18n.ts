// Talen, vertaalde routes en vaste teksten van de site.
import { guides, guidesEn, guidesDe } from './data/guides';
export type Lang = 'nl' | 'en' | 'de';
export const langs: Lang[] = ['nl', 'en', 'de'];
export const langNames: Record<Lang, string> = { nl: 'Nederlands', en: 'English', de: 'Deutsch' };

/** Elke pagina met haar vertalingen. Gebruikt voor hreflang en de taalwissel. */
export const routes: Partial<Record<Lang, string>>[] = [
  { nl: '/nl/', en: '/en/', de: '/de/' },
  { nl: '/nl/renovatie/', en: '/en/renovation/', de: '/de/renovierung/' },
  { nl: '/nl/sleutelbeheer/', en: '/en/key-holding/', de: '/de/hausbetreuung/' },
  { nl: '/nl/aankoopkeuring/', en: '/en/property-survey/', de: '/de/immobiliengutachten/' },
  { nl: '/nl/zwembad/', en: '/en/swimming-pool/', de: '/de/pool/' },
  { nl: '/nl/onderhoud/', en: '/en/maintenance/', de: '/de/instandhaltung/' },
  { nl: '/nl/projecten/', en: '/en/projects/', de: '/de/projekte/' },
  { nl: '/nl/over-ons/', en: '/en/about-us/', de: '/de/ueber-uns/' },
  { nl: '/nl/aanvraag/', en: '/en/request/', de: '/de/anfrage/' },
  { nl: '/nl/privacy/', en: '/en/privacy/', de: '/de/datenschutz/' },
  { nl: '/nl/bedankt/', en: '/en/thank-you/', de: '/de/danke/' },
  { nl: '/nl/gidsen/', en: '/en/guides/', de: '/de/ratgeber/' },
  // Gidsen staan in alle talen in dezelfde volgorde (zie src/data/guides.ts)
  ...guides.map((g, i) => ({
    nl: `/nl/gidsen/${g.slug}/`,
    ...(guidesEn[i] ? { en: `/en/guides/${guidesEn[i].slug}/` } : {}),
    ...(guidesDe[i] ? { de: `/de/ratgeber/${guidesDe[i].slug}/` } : {}),
  })),
];

export function alternatesFor(path: string): Partial<Record<Lang, string>> {
  return routes.find((r) => Object.values(r).includes(path)) ?? {};
}

type Key = 'home' | 'request' | 'privacy' | 'thanks' | 'guides' | 'about' | 'projects';
const keyIndex: Record<Key, number> = { home: 0, projects: 6, about: 7, request: 8, privacy: 9, thanks: 10, guides: 11 };
export const path = (lang: Lang, key: Key) => routes[keyIndex[key]][lang]!;

export const nav: Record<Lang, { href: string; label: string }[]> = {
  nl: [
    { href: '/nl/renovatie/', label: 'Renovatie' },
    { href: '/nl/sleutelbeheer/', label: 'Sleutelbeheer' },
    { href: '/nl/aankoopkeuring/', label: 'Aankoopkeuring' },
    { href: '/nl/zwembad/', label: 'Zwembad' },
    { href: '/nl/onderhoud/', label: 'Onderhoud' },
    { href: '/nl/gidsen/', label: 'Gidsen' },
    { href: '/nl/over-ons/', label: 'Over ons' },
  ],
  en: [
    { href: '/en/renovation/', label: 'Renovation' },
    { href: '/en/key-holding/', label: 'Key holding' },
    { href: '/en/property-survey/', label: 'Survey' },
    { href: '/en/swimming-pool/', label: 'Pools' },
    { href: '/en/maintenance/', label: 'Maintenance' },
    { href: '/en/guides/', label: 'Guides' },
    { href: '/en/about-us/', label: 'About us' },
  ],
  de: [
    { href: '/de/renovierung/', label: 'Renovierung' },
    { href: '/de/hausbetreuung/', label: 'Hausbetreuung' },
    { href: '/de/immobiliengutachten/', label: 'Gutachten' },
    { href: '/de/pool/', label: 'Pool' },
    { href: '/de/instandhaltung/', label: 'Wartung' },
    { href: '/de/ratgeber/', label: 'Ratgeber' },
    { href: '/de/ueber-uns/', label: 'Über uns' },
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
    ctaText: 'Beantworten Sie ein paar kurze Fragen. Innerhalb von 24 Stunden meldet sich ein deutschsprachiger Ansprechpartner bei Ihnen, unverbindlich.',
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
} as const;
