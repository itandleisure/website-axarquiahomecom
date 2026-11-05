// Centrale gegevens van de site. Alles wat met [VUL IN] begint, moet nog
// worden aangevuld met gegevens van het bouwbedrijf of van Frans.
// Zolang `launchReady` op false staat, krijgt elke pagina "noindex" en
// blokkeert robots.txt de zoekmachines. Zet hem pas op true als alles klopt.

export const TODO = '[VUL IN]';
export const isFilled = (v: string | undefined | null): v is string =>
  !!v && !v.startsWith(TODO);

export const site = {
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
    yearsInRegion: `${TODO} aantal`,
  },

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

  villages: [
    'Nerja',
    'Cómpeta',
    'Frigiliana',
    'Torrox',
    'Torre del Mar',
    'Vélez-Málaga',
    'Rincón de la Victoria',
    'Algarrobo',
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

/** Zet een Nederlandse prijsnotatie om naar Engelse (€ 20.000 → €20,000). */
export const enPrice = (s: string) =>
  s.startsWith(TODO)
    ? s
    : s.replace(/(\d)\.(\d{3})/g, '$1,$2').replace(/€ /g, '€').replace(' per jaar', ' per year').replace(' per maand', ' per month');

/** Zet een Nederlandse prijsnotatie om naar Duitse (€ 20.000 → 20.000 €). */
export const dePrice = (s: string) =>
  s.startsWith(TODO)
    ? s
    : s.replace(/€ ([\d.]+)/g, '$1 €').replace(' per jaar', ' pro Jahr').replace(' per maand', ' pro Monat');
