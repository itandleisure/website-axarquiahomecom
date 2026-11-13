// Centrale gegevens van de site. Alles wat met [VUL IN] begint, moet nog
// worden aangevuld met gegevens van het bouwbedrijf of van Frans.
// `indexable` bepaalt of Google de site mag indexeren (robots.txt en meta robots).
// `launchReady` zegt of alle [VUL IN]-gegevens zijn aangeleverd. Zolang dat niet
// zo is, tonen ontbrekende prijzen "op aanvraag" en zijn de gele blokken
// "Nog aanleveren" alleen zichtbaar in `npm run dev` (of als indexable op false staat).

export const TODO = '[VUL IN]';
export const isFilled = (v: string | undefined | null): v is string =>
  !!v && !v.startsWith(TODO);

export const site = {
  indexable: true,
  launchReady: false,

  brand: 'Axarquía Home',
  domain: 'axarquiahome.com',
  url: 'https://axarquiahome.com',

  // Het bouwbedrijf dat de opdrachten uitvoert
  company: {
    name: `${TODO} bedrijfsnaam bouwbedrijf`,
    legalName: `${TODO} juridische naam (S.L.)`,
    cif: `${TODO} CIF/NIF`,
    street: `${TODO} straat en huisnummer`,
    postalCode: `${TODO} postcode`,
    town: `${TODO} plaats`,
    phone: `${TODO} telefoon, bijv. +34 600 000 000`,
    whatsapp: `${TODO} WhatsApp in internationaal formaat zonder +, bijv. 34600000000`,
    email: `${TODO} e-mail voor aanvragen`,
  },

  // Jaren ervaring in de bouw (bevestigd door Frans), getoond op de Over ons-pagina
  experienceYears: 20,

  // De beheerder van de site (Frans' onderneming), voor privacy en colofon
  operator: {
    name: `${TODO} naam onderneming Frans`,
    kvk: `${TODO} KvK-nummer`,
    address: `${TODO} adres`,
    email: 'info@axarquiahome.com',
  },

  // URL van de Google Apps Script web-app (zie apps-script/README.md).
  // Zolang dit niet is ingevuld, toont de keuzehulp een melding in plaats van te versturen.
  leadEndpoint: 'https://script.google.com/macros/s/AKfycbyyOE8lTxFgFYaHyr7P4ebh_bxp5dal77rUdwcBO46O2Lu6Ic4Bz8GFvCpbC7LZhwGSnw/exec',

  // Microsoft Clarity (heatmaps en sessie-opnames). Laadt pas na toestemming via de cookiebanner.
  // Zet in Clarity onder Settings › Setup › Advanced settings Masking op Strict.
  // Leeg laten om Clarity uit te zetten.
  clarityId: 'z8rraji52s',
  // Google Analytics 4 Measurement ID (G-...). Laadt ook pas na toestemming. Leeg = uit.
  gaId: 'G-YSBXSHM7SS',

  // URL van de web-app uit apps-script/statistieken met toegang "Iedereen" (eindigt op /exec).
  // /statistiek/ haalt hier de cijfers op na het juiste wachtwoord (scripteigenschap WACHTWOORD).
  // Geen geheim: zonder wachtwoord geeft de URL geen cijfers. Leeg = /statistiek/ toont uitleg.
  statsDashboardUrl: 'https://script.google.com/macros/s/AKfycbzyzH9nke4qy05RwvmARr7Pq-bP4gjatbNNl_mg5RziEk3b86J8FN_0pm3ZWB7YHXXkSQ/exec',

  // Voorbeelden van plaatsen in het werkgebied: de hele Axarquía, niet gebonden aan één bouwbedrijf.
  villages: [
    'Nerja',
    'Frigiliana',
    'Torrox',
    'Cómpeta',
    'Torre del Mar',
    'Vélez-Málaga',
    'Rincón de la Victoria',
    'Algarrobo',
    'Viñuela',
    'Comares',
    'Canillas de Aceituno',
    'Periana',
  ],
};

// Prijsindicaties. Dit zijn voorlopige bandbreedtes uit het marktonderzoek.
// Laat het bouwbedrijf ze bevestigen of aanpassen voor livegang.
export const prices = {
  renovatieTotaal: '€ 20.000 – € 150.000',
  renovatiePerM2: `${TODO} prijs per m²`,
  badkamer: '€ 6.000 – € 25.000',
  keuken: `${TODO} prijs keuken`,
  zwembadNieuw: '€ 20.000 – € 50.000',
  zwembadOnderhoud: `${TODO} per maand`,
  keuring: '€ 400 – € 1.000',
  daken: '€ 1.500 – € 20.000',
  perceel: '€ 300 – € 2.000 per jaar',
  sleutelbeheer: {
    basis: `${TODO} per maand`,
    plus: `${TODO} per maand`,
    compleet: `${TODO} per maand`,
  },
};

// Menu en diensten staan in src/i18n.ts (per taal).

const onRequest = {
  nl: 'Prijs op aanvraag',
  en: 'Price on request',
  de: 'Preis auf Anfrage',
  sv: 'Pris på förfrågan',
  es: 'Precio a consultar',
} as const;

/** Nog niet ingevulde prijs: in `npm run dev` de [VUL IN]-tekst, op de echte site "op aanvraag". */
const pending = (s: string, lang: keyof typeof onRequest) => (import.meta.env.DEV ? s : onRequest[lang]);

/** Nederlandse prijs, of "Prijs op aanvraag" als hij nog niet is ingevuld. */
export const nlPrice = (s: string) => (s.startsWith(TODO) ? pending(s, 'nl') : s);

/** Zet een Nederlandse prijsnotatie om naar Engelse (€ 20.000 → €20,000). */
export const enPrice = (s: string) =>
  s.startsWith(TODO)
    ? pending(s, 'en')
    : s.replace(/(\d)\.(\d{3})/g, '$1,$2').replace(/€ /g, '€').replace(' per jaar', ' per year').replace(' per maand', ' per month');

/** Zet een Nederlandse prijsnotatie om naar Duitse (€ 20.000 → 20.000 €). */
export const dePrice = (s: string) =>
  s.startsWith(TODO)
    ? pending(s, 'de')
    : s.replace(/€ ([\d.]+)/g, '$1 €').replace(' per jaar', ' pro Jahr').replace(' per maand', ' pro Monat');

/** Prijs in Zweedse notatie: "€ 20.000" wordt "20 000 €". */
export const svPrice = (s: string) =>
  s.startsWith(TODO)
    ? pending(s, 'sv')
    : s.replace(/€ ([\d.]+)/g, (_, n: string) => `${n.replace(/\./g, ' ')} €`).replace(' per jaar', ' per år').replace(' per maand', ' per månad');

/** Prijs in Spaanse notatie: "€ 20.000" wordt "20.000 €". */
export const esPrice = (s: string) =>
  s.startsWith(TODO)
    ? pending(s, 'es')
    : s.replace(/€ ([\d.]+)/g, '$1 €').replace(' per jaar', ' al año').replace(' per maand', ' al mes');
