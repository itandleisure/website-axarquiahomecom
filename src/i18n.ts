// Talen, vertaalde routes en vaste teksten van de site.
import { guides } from './data/guides';
export type Lang = 'nl' | 'en';
export const langs: Lang[] = ['nl', 'en'];

/** Elke pagina met haar vertalingen. Gebruikt voor hreflang en de taalwissel. */
export const routes: Partial<Record<Lang, string>>[] = [
  { nl: '/nl/', en: '/en/' },
  { nl: '/nl/renovatie/', en: '/en/renovation/' },
  { nl: '/nl/sleutelbeheer/', en: '/en/key-holding/' },
  { nl: '/nl/aankoopkeuring/', en: '/en/property-survey/' },
  { nl: '/nl/zwembad/', en: '/en/swimming-pool/' },
  { nl: '/nl/onderhoud/', en: '/en/maintenance/' },
  { nl: '/nl/projecten/', en: '/en/projects/' },
  { nl: '/nl/over-ons/', en: '/en/about-us/' },
  { nl: '/nl/aanvraag/', en: '/en/request/' },
  { nl: '/nl/privacy/', en: '/en/privacy/' },
  { nl: '/nl/bedankt/', en: '/en/thank-you/' },
  { nl: '/nl/gidsen/', en: '/en/guides/' },
  ...guides.map((g) => ({ nl: `/nl/gidsen/${g.slug}/`, ...(g.alt ? { en: `/en/guides/${g.alt}/` } : {}) })),
];

export function alternatesFor(path: string): Partial<Record<Lang, string>> {
  return routes.find((r) => Object.values(r).includes(path)) ?? {};
}

export const path = (lang: Lang, key: 'home' | 'request' | 'privacy' | 'thanks' | 'guides') =>
  ({
    home: { nl: '/nl/', en: '/en/' },
    request: { nl: '/nl/aanvraag/', en: '/en/request/' },
    privacy: { nl: '/nl/privacy/', en: '/en/privacy/' },
    thanks: { nl: '/nl/bedankt/', en: '/en/thank-you/' },
    guides: { nl: '/nl/gidsen/', en: '/en/guides/' },
  })[key][lang];

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
    otherLang: 'English',
    otherLangLabel: 'Read this page in English',
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
    otherLang: 'Nederlands',
    otherLangLabel: 'Lees deze pagina in het Nederlands',
  },
} as const;
