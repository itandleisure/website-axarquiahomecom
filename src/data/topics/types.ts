// Kosten- en probleempagina's: gedeelde typen, adressen en vaste teksten.
// De inhoud staat per taal in costs-*.ts, problems-*.ts en diy-*.ts (zelf doen). Een pagina heeft in elke taal
// dezelfde `key`, zo vinden de vertalingen elkaar (hreflang en taalwissel).

export type TopicLang = 'nl' | 'en' | 'de';
export type TopicKind = 'costs' | 'problems' | 'diy';
export const topicLangs: TopicLang[] = ['nl', 'en', 'de'];

export interface TopicTable {
  head: string[];
  rows: string[][];
  note?: string;
}

export interface TopicSection {
  id: string;
  h: string;
  /** HTML vóór de tabel */
  html?: string;
  table?: TopicTable;
  /** HTML na de tabel */
  after?: string;
}

export interface Topic {
  /** Gelijk in alle talen, bijv. 'badkamer' */
  key: string;
  slug: string;
  title: string;
  seoTitle: string;
  /** Kort, voor kruimelpad en kaarten */
  short: string;
  description: string;
  lead: string;
  /** Hoofdzoekwoord */
  keyword: string;
  /** Dienst die in het aanvraagformulier wordt voorgekozen */
  dienst: string;
  /** Tekst die in het omschrijvingsveld van het formulier wordt gezet */
  onderwerp: string;
  /** Kort antwoord bovenaan (featured snippet) */
  answer: string;
  sections: TopicSection[];
  faq: { q: string; a: string }[];
  /** Interne links naar diensten, gidsen en plaatspagina's */
  links: { href: string; label: string }[];
  /** Andere kosten- of probleempagina's: `kind:key` */
  related: string[];
  sources: { name: string; url: string }[];
  ctaTitle: string;
  ctaText: string;
  minutes: number;
  published: string;
  updated?: string;
}

/** Datum waarop de prijzen voor het laatst zijn nagekeken */
export const pricesChecked = '2026-11-05';

export const topicBase: Record<TopicKind, Record<TopicLang, string>> = {
  costs: { nl: '/nl/kosten/', en: '/en/costs/', de: '/de/kosten/' },
  problems: { nl: '/nl/problemen/', en: '/en/problems/', de: '/de/probleme/' },
  diy: { nl: '/nl/zelf-doen/', en: '/en/diy/', de: '/de/selbermachen/' },
};

export const topicUi = {
  nl: {
    hub: { costs: 'Kosten', problems: 'Problemen', diy: 'Zelf doen' },
    eyebrow: { costs: 'Kosten', problems: 'Probleem oplossen', diy: 'Zelf doen' },
    minRead: 'minuten lezen',
    updated: 'Bijgewerkt op',
    inPage: 'Op deze pagina',
    shortAnswer: 'Kort antwoord',
    askQuote: 'Vraag een offerte aan',
    askHelp: 'Vraag hulp aan',
    askDiy: 'Liever laten doen?',
    sourcesTitle: 'Bronnen en verantwoording',
    sourcesText:
      'De bedragen zijn indicaties voor de Axarquía, inclusief materiaal en arbeid en exclusief btw (IVA), tenzij anders vermeld. Ze zijn gebaseerd op Spaanse prijsgidsen en op wat we in de praktijk zien. Elk huis is anders: een offerte na een bezoek of op basis van foto’s is altijd nauwkeuriger. Prijzen nagekeken op',
    sourcesTextDiy:
      'Wilt u weten wat een klus bij uw huis kost, of laat u hem liever doen? Vraag een vrijblijvende offerte aan. Regels voor vergunningen verschillen per gemeente: vraag het altijd na bij het ayuntamiento voordat u begint. Werk veilig; u voert deze klussen uit op eigen risico. Nagekeken op',
    alsoUseful: 'Ook handig',
    related: { costs: 'Meer kostenoverzichten', problems: 'Andere problemen', diy: 'Meer klussen om zelf te doen' },
    read: 'Lees meer',
    dateLocale: 'nl-NL',
  },
  en: {
    hub: { costs: 'Costs', problems: 'Problems', diy: 'DIY' },
    eyebrow: { costs: 'Costs', problems: 'Fixing problems', diy: 'Do it yourself' },
    minRead: 'min read',
    updated: 'Updated',
    inPage: 'On this page',
    shortAnswer: 'Short answer',
    askQuote: 'Ask for a quote',
    askHelp: 'Ask for help',
    askDiy: 'Rather have it done?',
    sourcesTitle: 'Sources and method',
    sourcesText:
      'Figures are guide prices for the Axarquía, including materials and labour and excluding VAT (IVA), unless stated otherwise. They are based on Spanish price guides and on what we see in practice. Every house is different: a quote after a visit, or based on photos, is always more accurate. Prices checked on',
    sourcesTextDiy:
      'Want to know what a job would cost at your house, or would you rather have it done? Ask for a free, no-obligation quote. Permit rules differ per municipality: always check with the ayuntamiento before you start. Work safely; you carry out these jobs at your own risk. Checked on',
    alsoUseful: 'Also useful',
    related: { costs: 'More cost guides', problems: 'Other problems', diy: 'More DIY guides' },
    read: 'Read more',
    dateLocale: 'en-GB',
  },
  de: {
    hub: { costs: 'Kosten', problems: 'Probleme', diy: 'Selbermachen' },
    eyebrow: { costs: 'Kosten', problems: 'Probleme lösen', diy: 'Selbermachen' },
    minRead: 'Minuten Lesezeit',
    updated: 'Aktualisiert am',
    inPage: 'Auf dieser Seite',
    shortAnswer: 'Kurze Antwort',
    askQuote: 'Angebot anfragen',
    askHelp: 'Hilfe anfragen',
    askDiy: 'Lieber machen lassen?',
    sourcesTitle: 'Quellen und Methode',
    sourcesText:
      'Die Beträge sind Richtwerte für die Axarquía, inklusive Material und Arbeit und ohne Mehrwertsteuer (IVA), sofern nicht anders angegeben. Sie beruhen auf spanischen Preisportalen und auf unserer Erfahrung vor Ort. Jedes Haus ist anders: Ein Angebot nach einer Besichtigung oder anhand von Fotos ist immer genauer. Preise geprüft am',
    sourcesTextDiy:
      'Möchten Sie wissen, was eine Arbeit an Ihrem Haus kostet, oder lassen Sie sie lieber machen? Fragen Sie ein unverbindliches Angebot an. Die Genehmigungsregeln unterscheiden sich je Gemeinde: Fragen Sie vor Beginn immer beim Ayuntamiento nach. Arbeiten Sie sicher; Sie führen diese Arbeiten auf eigenes Risiko aus. Geprüft am',
    alsoUseful: 'Auch hilfreich',
    related: { costs: 'Weitere Kostenübersichten', problems: 'Weitere Probleme', diy: 'Weitere Anleitungen' },
    read: 'Weiterlesen',
    dateLocale: 'de-DE',
  },
} as const;

/** Paden van de aanvraagpagina per taal */
export const requestPath: Record<TopicLang, string> = { nl: '/nl/aanvraag/', en: '/en/request/', de: '/de/anfrage/' };
