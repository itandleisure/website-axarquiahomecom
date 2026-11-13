// Vervolgvragen van de keuzehulp (/nl/aanvraag/ en vertalingen), per dienst.
//
// Elke dienst krijgt in stap 4 alleen de vragen die erbij horen: geen budget bij
// sleutelbeheer, geen "wanneer beginnen" bij een keuring, enzovoort.
// Teksten staan per vraag naast elkaar in de volgorde nl, en, de, sv (Spaans staat in keuzehulp-es.ts).
// De waarde die naar het bouwbedrijf gaat is altijd de Nederlandse tekst, zodat
// de sheet en de mail voor hen leesbaar blijven, in welke taal de klant ook invult.

import type { Lang } from '../i18n';

export type Tx = Record<Lang, string>;
import { keuzehulpEs } from './keuzehulp-es';
/** Spaans komt uit keuzehulp-es.ts, op de Engelse tekst. */
const es = (en: string) => {
  const t = keuzehulpEs[en];
  if (!t) throw new Error(`Spaanse vertaling ontbreekt in keuzehulp-es.ts voor: ${en}`);
  return t;
};
const tx = (nl: string, en: string, de: string, sv: string): Tx => ({ nl, en, de, sv, es: es(en) });

export type Dienst =
  | 'renovatie'
  | 'badkamer-keuken'
  | 'sleutelbeheer'
  | 'verhuurbeheer'
  | 'aankoopkeuring'
  | 'zwembad'
  | 'onderhoud'
  | 'ramen'
  | 'schoorsteen'
  | 'legalisatie'
  | 'energie'
  | 'energiebeheer'
  | 'anders';

export interface Optie { t: Tx; s?: Tx }
export interface Vraag {
  /** Veldnaam. `planning` en `budget` gaan naar de eigen kolommen in de sheet; de rest komt in de omschrijving. */
  name: string;
  kind: 'radio' | 'select' | 'checks';
  label: Tx;
  options: Optie[];
  required?: boolean;
  hint?: Tx;
  /** Alleen tonen als een andere vraag (op Nederlandse waarde) een van deze antwoorden heeft. */
  showIf?: { name: string; values: string[] };
}
export interface DienstVragen {
  legend: Tx;
  vragen: Vraag[];
  placeholder: Tx;
  /** Vraag "Wat is uw situatie?" tonen. Bij een keuring is de klant altijd koper. */
  situatie?: boolean;
  /** Foto's uploaden aanbieden in stap 5. */
  fotos?: boolean;
}

const o = (nl: string, en: string, de: string, sv: string, s?: Tx): Optie => ({ t: tx(nl, en, de, sv), s });

const waarOm = tx('Waar gaat het om?', 'What is it about?', 'Worum geht es?', 'Vad gäller det?');
const weetNiet = o('Weet ik nog niet', 'Not sure yet', 'Weiß ich noch nicht', 'Vet inte än');

const planningStart: Vraag = {
  name: 'planning',
  kind: 'select',
  required: true,
  label: tx('Wanneer wilt u beginnen?', 'When would you like to start?', 'Wann möchten Sie beginnen?', 'När vill du börja?'),
  options: [
    o('Zo snel mogelijk', 'As soon as possible', 'So bald wie möglich', 'Så snart som möjligt'),
    o('Binnen 3 maanden', 'Within 3 months', 'Innerhalb von 3 Monaten', 'Inom 3 månader'),
    o('Over 3 tot 6 maanden', 'In 3 to 6 months', 'In 3 bis 6 Monaten', 'Om 3 till 6 månader'),
    o('Over meer dan 6 maanden', 'In more than 6 months', 'In mehr als 6 Monaten', 'Om mer än 6 månader'),
    weetNiet,
  ],
};

const budget = (showIf?: Vraag['showIf']): Vraag => ({
  name: 'budget',
  kind: 'select',
  showIf,
  label: tx(
    'Welk budget heeft u ongeveer in gedachten?',
    'Roughly what budget do you have in mind?',
    'Welches Budget haben Sie ungefähr vorgesehen?',
    'Ungefär vilken budget har du tänkt dig?',
  ),
  hint: tx(
    'Optioneel. Dit helpt ons om u direct een realistisch voorstel te doen.',
    'Optional. This helps us come back to you with a realistic proposal.',
    'Optional. So können wir Ihnen gleich einen realistischen Vorschlag machen.',
    'Valfritt. Då kan vi direkt ge dig ett realistiskt förslag.',
  ),
  options: [
    o('Tot € 5.000', 'Up to €5,000', 'Bis 5.000 €', 'Upp till 5 000 €'),
    o('€ 5.000 – € 20.000', '€5,000 – €20,000', '5.000 – 20.000 €', '5 000 – 20 000 €'),
    o('€ 20.000 – € 50.000', '€20,000 – €50,000', '20.000 – 50.000 €', '20 000 – 50 000 €'),
    o('€ 50.000 – € 100.000', '€50,000 – €100,000', '50.000 – 100.000 €', '50 000 – 100 000 €'),
    o('Meer dan € 100.000', 'Over €100,000', 'Mehr als 100.000 €', 'Mer än 100 000 €'),
    weetNiet,
  ],
});

export const vragen: Record<Dienst, DienstVragen> = {
  renovatie: {
    legend: tx('Wat wilt u laten doen?', 'What would you like done?', 'Was möchten Sie machen lassen?', 'Vad vill du få gjort?'),
    situatie: true,
    fotos: true,
    vragen: [
      {
        name: 'omvang',
        kind: 'radio',
        required: true,
        label: tx('Hoe groot is de klus?', 'How big is the job?', 'Wie groß ist das Vorhaben?', 'Hur stort är jobbet?'),
        options: [
          o('Hele woning renoveren', 'Renovate the whole house', 'Das ganze Haus renovieren', 'Renovera hela huset'),
          o('Eén of enkele ruimtes', 'One or a few rooms', 'Einen oder mehrere Räume', 'Ett eller några rum'),
          o('Aanbouw of uitbreiding', 'Extension', 'Anbau oder Erweiterung', 'Tillbyggnad'),
          o('Dak, dakterras of gevel', 'Roof, roof terrace or façade', 'Dach, Dachterrasse oder Fassade', 'Tak, takterrass eller fasad'),
          o('Terras, tuin of buitenkeuken', 'Terrace, garden or outdoor kitchen', 'Terrasse, Garten oder Außenküche', 'Terrass, trädgård eller utekök'),
        ],
      },
      planningStart,
      budget(),
    ],
    placeholder: tx(
      'Bijvoorbeeld: dorpshuis van 120 m² helemaal opknappen, met nieuwe elektra en leidingen…',
      'For example: completely refurbish a 120 m² village house, including new wiring and plumbing…',
      'Zum Beispiel: Dorfhaus mit 120 m² komplett sanieren, mit neuer Elektrik und neuen Leitungen…',
      'Till exempel: renovera ett byhus på 120 m² helt, med ny el och nya rör…',
    ),
  },

  'badkamer-keuken': {
    legend: tx('Wat wilt u vernieuwen?', 'What would you like to renew?', 'Was möchten Sie erneuern?', 'Vad vill du förnya?'),
    situatie: true,
    fotos: true,
    vragen: [
      {
        name: 'ruimte',
        kind: 'radio',
        required: true,
        label: tx('Om welke ruimte gaat het?', 'Which room is it?', 'Um welchen Raum geht es?', 'Vilket rum gäller det?'),
        options: [
          o('Badkamer', 'Bathroom', 'Bad', 'Badrum'),
          o('Keuken', 'Kitchen', 'Küche', 'Kök'),
          o('Badkamer én keuken', 'Bathroom and kitchen', 'Bad und Küche', 'Badrum och kök'),
          o('Meerdere badkamers', 'Several bathrooms', 'Mehrere Bäder', 'Flera badrum'),
          o('Buitenkeuken', 'Outdoor kitchen', 'Außenküche', 'Utekök'),
        ],
      },
      planningStart,
      budget(),
    ],
    placeholder: tx(
      'Bijvoorbeeld: badkamer van 6 m², het bad eruit en een inloopdouche erin…',
      'For example: 6 m² bathroom, take out the bath and put in a walk-in shower…',
      'Zum Beispiel: Bad mit 6 m², Badewanne raus und eine bodengleiche Dusche rein…',
      'Till exempel: badrum på 6 m², ta bort badkaret och sätta in en walk-in-dusch…',
    ),
  },

  sleutelbeheer: {
    legend: tx(
      'Welk sleutelbeheer zoekt u?',
      'What kind of key holding are you looking for?',
      'Welche Hausbetreuung suchen Sie?',
      'Vilken tillsyn söker du?',
    ),
    situatie: true,
    fotos: false,
    vragen: [
      {
        name: 'aanwezig',
        kind: 'select',
        required: true,
        label: tx(
          'Hoeveel bent u zelf in de woning?',
          'How much time do you spend at the property?',
          'Wie oft sind Sie selbst vor Ort?',
          'Hur mycket är du själv i bostaden?',
        ),
        options: [
          o('Een paar weken per jaar', 'A few weeks a year', 'Ein paar Wochen im Jahr', 'Några veckor per år'),
          o('Een paar maanden per jaar', 'A few months a year', 'Ein paar Monate im Jahr', 'Några månader per år'),
          o('Een half jaar of langer', 'Six months or more', 'Ein halbes Jahr oder länger', 'Ett halvår eller mer'),
          o('Ik verhuur de woning (ook)', 'I (also) rent it out', 'Ich vermiete die Immobilie (auch)', 'Jag hyr (också) ut bostaden'),
        ],
      },
      {
        name: 'extras',
        kind: 'checks',
        label: tx(
          'Wat moet er verder geregeld worden?',
          'Anything else we should take care of?',
          'Was soll sonst noch erledigt werden?',
          'Vad mer ska skötas?',
        ),
        hint: tx('Optioneel, meerdere antwoorden mogelijk.', 'Optional, tick all that apply.', 'Optional, Mehrfachauswahl möglich.', 'Valfritt, flera svar möjliga.'),
        options: [
          o('Zwembad', 'Pool', 'Pool', 'Pool'),
          o('Tuin', 'Garden', 'Garten', 'Trädgård'),
          o('Schoonmaak', 'Cleaning', 'Reinigung', 'Städning'),
          o('Post', 'Post', 'Post', 'Post'),
          o('Sleuteloverdracht aan gasten of huurders', 'Handing keys to guests or tenants', 'Schlüsselübergabe an Gäste oder Mieter', 'Nyckelöverlämning till gäster eller hyresgäster'),
          o('Monteurs en leveranciers binnenlaten', 'Letting in engineers and deliveries', 'Handwerker und Lieferungen hereinlassen', 'Släppa in hantverkare och leveranser'),
        ],
      },
      {
        name: 'planning',
        kind: 'select',
        required: true,
        label: tx('Vanaf wanneer?', 'From when?', 'Ab wann?', 'Från när?'),
        options: [
          o('Zo snel mogelijk', 'As soon as possible', 'So bald wie möglich', 'Så snart som möjligt'),
          o('Binnen 3 maanden', 'Within 3 months', 'Innerhalb von 3 Monaten', 'Inom 3 månader'),
          o('Vanaf een bepaalde maand (zie toelichting)', 'From a specific month (see notes)', 'Ab einem bestimmten Monat (siehe Hinweis)', 'Från en viss månad (se beskrivning)'),
          weetNiet,
        ],
      },
    ],
    placeholder: tx(
      'Bijvoorbeeld: wij zijn er van mei tot oktober, de rest van het jaar graag elke twee weken een controle…',
      'For example: we are there from May to October, the rest of the year a check every two weeks please…',
      'Zum Beispiel: Wir sind von Mai bis Oktober da, den Rest des Jahres bitte alle zwei Wochen eine Kontrolle…',
      'Till exempel: vi är där maj till oktober, resten av året gärna en kontroll varannan vecka…',
    ),
  },

  verhuurbeheer: {
    legend: tx(
      'Welk verhuurbeheer zoekt u?',
      'What kind of rental management are you looking for?',
      'Welchen Vermietungsservice suchen Sie?',
      'Vilken uthyrningsservice söker du?',
    ),
    situatie: true,
    fotos: true,
    vragen: [
      {
        name: 'beheer',
        kind: 'radio',
        required: true,
        label: tx('Wat wilt u uitbesteden?', 'What would you like us to handle?', 'Was möchten Sie abgeben?', 'Vad vill du lämna över?'),
        options: [
          o('Alleen schoonmaak en wissels', 'Cleaning and changeovers only', 'Nur Reinigung und Gästewechsel', 'Bara städning och gästbyten', tx('Ik doe zelf de boekingen', 'I handle the bookings myself', 'Die Buchungen mache ich selbst', 'Jag sköter bokningarna själv')),
          o('Volledig verhuurbeheer', 'Full rental management', 'Komplette Vermietungsverwaltung', 'Fullständig förvaltning', tx('Ook gastencontact en boekingen', 'Including guest contact and bookings', 'Auch Gästekontakt und Buchungen', 'Även gästkontakt och bokningar')),
          o('Weet ik nog niet, graag advies', 'Not sure yet, please advise', 'Weiß ich noch nicht, bitte beraten', 'Vet inte än, vill ha råd'),
        ],
      },
      {
        name: 'verhuur',
        kind: 'select',
        required: true,
        label: tx('Verhuurt u de woning al?', 'Do you already let the property?', 'Vermieten Sie die Immobilie schon?', 'Hyr du redan ut bostaden?'),
        options: [
          o('Ja, met een toeristische registratie (VUT)', 'Yes, with a tourist registration (VUT)', 'Ja, mit touristischer Registrierung (VUT)', 'Ja, med turistregistrering (VUT)'),
          o('Ja, maar zonder registratie', 'Yes, but without registration', 'Ja, aber ohne Registrierung', 'Ja, men utan registrering'),
          o('Nog niet, ik wil beginnen', 'Not yet, I want to start', 'Noch nicht, ich möchte beginnen', 'Inte än, jag vill börja'),
        ],
      },
      {
        name: 'extras',
        kind: 'checks',
        label: tx('Wat moet er verder geregeld worden?', 'Anything else we should take care of?', 'Was soll sonst noch erledigt werden?', 'Vad mer ska skötas?'),
        hint: tx('Optioneel, meerdere antwoorden mogelijk.', 'Optional, tick all that apply.', 'Optional, Mehrfachauswahl möglich.', 'Valfritt, flera svar möjliga.'),
        options: [
          o('Sleuteloverdracht aan gasten', 'Handing keys to guests', 'Schlüsselübergabe an Gäste', 'Nyckelöverlämning till gäster'),
          o('Beddengoed en handdoeken leveren', 'Supplying bed linen and towels', 'Bettwäsche und Handtücher stellen', 'Leverera sänglinne och handdukar'),
          o('Zwembad', 'Pool', 'Pool', 'Pool'),
          o('Tuin', 'Garden', 'Garten', 'Trädgård'),
          o('Sleutelbeheer als er geen gasten zijn', 'Key holding when there are no guests', 'Hausbetreuung, wenn keine Gäste da sind', 'Tillsyn när det inte finns gäster'),
          o('Huis verhuurklaar maken', 'Getting the house ready to let', 'Haus für die Vermietung herrichten', 'Göra huset redo för uthyrning'),
        ],
      },
      {
        name: 'planning',
        kind: 'select',
        required: true,
        label: tx('Vanaf wanneer?', 'From when?', 'Ab wann?', 'Från när?'),
        options: [
          o('Zo snel mogelijk', 'As soon as possible', 'So bald wie möglich', 'Så snart som möjligt'),
          o('Voor het komende seizoen', 'Before the coming season', 'Vor der kommenden Saison', 'Före kommande säsong'),
          o('Vanaf een bepaalde maand (zie toelichting)', 'From a specific month (see notes)', 'Ab einem bestimmten Monat (siehe Hinweis)', 'Från en viss månad (se beskrivning)'),
          weetNiet,
        ],
      },
    ],
    placeholder: tx(
      'Bijvoorbeeld: appartement met 2 slaapkamers in Torrox Costa, we verhuren via Airbnb van april tot oktober, gemiddeld een wissel per week…',
      'For example: 2-bedroom apartment in Torrox Costa, we let it on Airbnb from April to October, about one changeover a week…',
      'Zum Beispiel: Wohnung mit 2 Schlafzimmern in Torrox Costa, wir vermieten über Airbnb von April bis Oktober, etwa ein Wechsel pro Woche…',
      'Till exempel: lägenhet med 2 sovrum i Torrox Costa, vi hyr ut via Airbnb april till oktober, ungefär ett byte i veckan…',
    ),
  },

  aankoopkeuring: {
    legend: tx(
      'Over de woning die u wilt kopen',
      'About the property you want to buy',
      'Zur Immobilie, die Sie kaufen möchten',
      'Om bostaden du vill köpa',
    ),
    situatie: false,
    fotos: true,
    vragen: [
      {
        name: 'fase',
        kind: 'radio',
        required: true,
        label: tx('Hoe ver bent u met de aankoop?', 'How far along is the purchase?', 'Wie weit ist der Kauf?', 'Hur långt har köpet kommit?'),
        options: [
          o('Ik heb een woning op het oog', 'I have a property in mind', 'Ich habe eine Immobilie im Auge', 'Jag har en bostad på gång'),
          o('Bod gedaan of reservering getekend', 'Offer made or reservation signed', 'Angebot gemacht oder Reservierung unterschrieben', 'Bud lagt eller reservation undertecknad'),
          o('Koopcontract (arras) getekend', 'Deposit contract (arras) signed', 'Anzahlungsvertrag (Arras) unterschrieben', 'Handpenningsavtal (arras) undertecknat'),
          o('Ik zoek nog', 'Still searching', 'Ich suche noch', 'Jag letar fortfarande'),
        ],
      },
      {
        name: 'planning',
        kind: 'select',
        required: true,
        label: tx('Wanneer moet de keuring klaar zijn?', 'When do you need the survey?', 'Bis wann brauchen Sie das Gutachten?', 'När behöver du besiktningen?'),
        options: [
          o('Binnen een week', 'Within a week', 'Innerhalb einer Woche', 'Inom en vecka'),
          o('Binnen twee weken', 'Within two weeks', 'Innerhalb von zwei Wochen', 'Inom två veckor'),
          o('Binnen een maand', 'Within a month', 'Innerhalb eines Monats', 'Inom en månad'),
          o('Geen haast', 'No rush', 'Keine Eile', 'Ingen brådska'),
        ],
      },
    ],
    placeholder: tx(
      'Bijvoorbeeld: finca bij Cómpeta, de bezichtiging is op 12 maart en de notaris staat gepland voor april…',
      'For example: finca near Cómpeta, the viewing is on 12 March and completion is planned for April…',
      'Zum Beispiel: Finca bei Cómpeta, Besichtigung am 12. März, Notartermin im April geplant…',
      'Till exempel: finca nära Cómpeta, visningen är den 12 mars och tillträdet är planerat till april…',
    ),
  },

  zwembad: {
    legend: tx('Wat speelt er met het zwembad?', 'What do you need for the pool?', 'Worum geht es beim Pool?', 'Vad gäller poolen?'),
    situatie: true,
    fotos: true,
    vragen: [
      {
        name: 'zwembad',
        kind: 'radio',
        required: true,
        label: waarOm,
        options: [
          o('Nieuw zwembad bouwen', 'Build a new pool', 'Neuen Pool bauen', 'Bygga ny pool'),
          o('Renoveren of nieuwe afwerking', 'Renovate or resurface', 'Renovieren oder neu beschichten', 'Renovera eller ny ytbeläggning'),
          o('Lekkage of reparatie', 'Leak or repair', 'Leck oder Reparatur', 'Läcka eller reparation'),
          o('Pomp, filter of verwarming', 'Pump, filter or heating', 'Pumpe, Filter oder Heizung', 'Pump, filter eller värme'),
          o('Regelmatig onderhoud', 'Regular maintenance', 'Regelmäßige Pflege', 'Regelbunden skötsel'),
        ],
      },
      planningStart,
      budget({ name: 'zwembad', values: ['Nieuw zwembad bouwen', 'Renoveren of nieuwe afwerking'] }),
    ],
    placeholder: tx(
      'Bijvoorbeeld: zwembad van 8 bij 4 meter verliest water, of: graag een nieuw zwembad naast het terras…',
      'For example: 8 by 4 metre pool is losing water, or: a new pool next to the terrace please…',
      'Zum Beispiel: Pool mit 8 x 4 Metern verliert Wasser, oder: bitte ein neuer Pool neben der Terrasse…',
      'Till exempel: pool på 8 x 4 meter läcker vatten, eller: gärna en ny pool bredvid terrassen…',
    ),
  },

  onderhoud: {
    legend: tx('Wat moet er gebeuren?', 'What needs doing?', 'Was muss gemacht werden?', 'Vad behöver göras?'),
    situatie: true,
    fotos: true,
    vragen: [
      {
        name: 'werk',
        kind: 'checks',
        required: true,
        label: waarOm,
        hint: tx('Meerdere antwoorden mogelijk.', 'Tick all that apply.', 'Mehrfachauswahl möglich.', 'Flera svar möjliga.'),
        options: [
          o('Dak of dakterras', 'Roof or roof terrace', 'Dach oder Dachterrasse', 'Tak eller takterrass'),
          o('Lekkage of vocht', 'Leak or damp', 'Undichtigkeit oder Feuchtigkeit', 'Läcka eller fukt'),
          o('Schilderwerk', 'Painting', 'Malerarbeiten', 'Målning'),
          o('Loodgieter of elektra', 'Plumbing or electrics', 'Sanitär oder Elektrik', 'VVS eller el'),
          o('Ramen, deuren of kozijnen', 'Windows or doors', 'Fenster oder Türen', 'Fönster eller dörrar'),
          o('Perceel, tuin of snoeien', 'Land, garden or pruning', 'Grundstück, Garten oder Baumschnitt', 'Tomt, trädgård eller beskärning'),
          o('Toegangsweg of oprit', 'Access road or driveway', 'Zufahrtsweg oder Einfahrt', 'Tillfartsväg eller uppfart'),
          o('Iets anders', 'Something else', 'Etwas anderes', 'Något annat'),
        ],
      },
      {
        name: 'planning',
        kind: 'select',
        required: true,
        label: tx('Hoe dringend is het?', 'How urgent is it?', 'Wie dringend ist es?', 'Hur brådskande är det?'),
        options: [
          o('Spoed: er is schade', 'Urgent: there is damage', 'Dringend: es gibt einen Schaden', 'Akut: det finns skador'),
          o('Binnen een paar weken', 'Within a few weeks', 'In den nächsten Wochen', 'Inom några veckor'),
          o('Niet dringend', 'Not urgent', 'Nicht dringend', 'Inte brådskande'),
        ],
      },
    ],
    placeholder: tx(
      'Bijvoorbeeld: na de regen komt er water door het plafond van de slaapkamer…',
      'For example: after the rain, water is coming through the bedroom ceiling…',
      'Zum Beispiel: Nach dem Regen kommt Wasser durch die Decke im Schlafzimmer…',
      'Till exempel: efter regnet kommer det vatten genom taket i sovrummet…',
    ),
  },

  legalisatie: {
    legend: tx(
      'Welke vergunning of legalisatie?',
      'Which permit or legalisation?',
      'Welche Genehmigung oder Legalisierung?',
      'Vilket tillstånd eller legalisering?',
    ),
    situatie: true,
    fotos: false,
    vragen: [
      {
        name: 'legalisatie',
        kind: 'radio',
        required: true,
        label: waarOm,
        options: [
          o('AFO-verklaring', 'AFO certificate', 'AFO-Bescheinigung', 'AFO-intyg'),
          o('Aanbouw of zwembad legaliseren', 'Legalise an extension or pool', 'Anbau oder Pool legalisieren', 'Legalisera tillbyggnad eller pool'),
          o('Vergunning voor een verbouwing', 'Permit for building work', 'Baugenehmigung für einen Umbau', 'Bygglov för ombyggnad'),
          o('Energielabel', 'Energy certificate', 'Energieausweis', 'Energideklaration'),
          o('Weet ik niet, graag advies', 'Not sure, please advise', 'Weiß ich nicht, bitte beraten', 'Vet inte, vill ha råd'),
        ],
      },
      {
        name: 'planning',
        kind: 'select',
        required: true,
        label: tx('Is er een deadline?', 'Is there a deadline?', 'Gibt es eine Frist?', 'Finns det en deadline?'),
        options: [
          o('Binnen een maand', 'Within a month', 'Innerhalb eines Monats', 'Inom en månad'),
          o('Binnen 3 maanden', 'Within 3 months', 'Innerhalb von 3 Monaten', 'Inom 3 månader'),
          o('Geen deadline', 'No deadline', 'Keine Frist', 'Ingen deadline'),
        ],
      },
    ],
    placeholder: tx(
      'Bijvoorbeeld: de overdekte veranda staat niet in het kadaster en we willen volgend jaar verkopen…',
      'For example: the covered porch is not in the land registry and we want to sell next year…',
      'Zum Beispiel: Die überdachte Veranda ist nicht im Kataster eingetragen und wir möchten nächstes Jahr verkaufen…',
      'Till exempel: den inglasade verandan finns inte i fastighetsregistret och vi vill sälja nästa år…',
    ),
  },

  ramen: {
    legend: tx('Wat wilt u aan ramen of kozijnen laten doen?', 'What would you like done to your windows?', 'Was soll an Fenstern oder Rahmen gemacht werden?', 'Vad vill du få gjort med fönstren?'),
    situatie: true,
    fotos: true,
    vragen: [
      {
        name: 'ramen',
        kind: 'radio',
        required: true,
        label: waarOm,
        options: [
          o('Ramen of kozijnen vervangen', 'Replace windows or frames', 'Fenster oder Rahmen austauschen', 'Byta fönster eller karmar'),
          o('Dubbel glas', 'Double glazing', 'Doppelverglasung', 'Tvåglasfönster'),
          o('Rolluiken of luiken', 'Roller shutters or shutters', 'Rollläden oder Fensterläden', 'Rullgardiner eller fönsterluckor'),
          o('Horren', 'Fly screens', 'Insektenschutz', 'Insektsnät'),
          o('Reparatie of tocht', 'Repair or draughts', 'Reparatur oder Zugluft', 'Reparation eller drag'),
        ],
      },
      planningStart,
      budget(),
    ],
    placeholder: tx(
      'Bijvoorbeeld: zes houten ramen met enkel glas, het tocht en de luiken klemmen…',
      'For example: six wooden single-glazed windows, draughty, and the shutters stick…',
      'Zum Beispiel: sechs Holzfenster mit Einfachverglasung, es zieht und die Läden klemmen…',
      'Till exempel: sex träfönster med enkelglas, det drar och luckorna kärvar…',
    ),
  },

  schoorsteen: {
    legend: tx('Schoorsteen of kachel', 'Chimney or stove', 'Schornstein oder Ofen', 'Skorsten eller kamin'),
    situatie: true,
    fotos: true,
    vragen: [
      {
        name: 'schoorsteen',
        kind: 'radio',
        required: true,
        label: waarOm,
        options: [
          o('Schoorsteen vegen', 'Chimney sweeping', 'Schornstein fegen', 'Sotning'),
          o('Reparatie of lekkage', 'Repair or leak', 'Reparatur oder Undichtigkeit', 'Reparation eller läcka'),
          o('Houtkachel of pelletkachel plaatsen', 'Install a wood or pellet stove', 'Kamin- oder Pelletofen einbauen', 'Installera braskamin eller pelletskamin'),
          o('Open haard ombouwen', 'Convert an open fireplace', 'Offenen Kamin umbauen', 'Bygga om en öppen spis'),
        ],
      },
      {
        name: 'planning',
        kind: 'select',
        required: true,
        label: tx('Wanneer moet het klaar zijn?', 'When do you need it done?', 'Bis wann soll es fertig sein?', 'När behöver det vara klart?'),
        options: [
          o('Zo snel mogelijk', 'As soon as possible', 'So bald wie möglich', 'Så snart som möjligt'),
          o('Voor de winter', 'Before winter', 'Vor dem Winter', 'Före vintern'),
          o('Geen haast', 'No rush', 'Keine Eile', 'Ingen brådska'),
        ],
      },
      budget({ name: 'schoorsteen', values: ['Houtkachel of pelletkachel plaatsen', 'Open haard ombouwen'] }),
    ],
    placeholder: tx(
      'Bijvoorbeeld: de open haard rookt terug in de kamer, of: graag een houtkachel in de woonkamer…',
      'For example: the open fire smokes back into the room, or: a wood burner in the living room please…',
      'Zum Beispiel: Der offene Kamin raucht ins Zimmer, oder: bitte einen Kaminofen im Wohnzimmer…',
      'Till exempel: den öppna spisen ryker in i rummet, eller: gärna en braskamin i vardagsrummet…',
    ),
  },

  energie: {
    legend: tx('Zonnepanelen of elektra', 'Solar panels or electrics', 'Solaranlage oder Elektrik', 'Solpaneler eller el'),
    situatie: true,
    fotos: true,
    vragen: [
      {
        name: 'energie',
        kind: 'checks',
        required: true,
        label: waarOm,
        hint: tx('Meerdere antwoorden mogelijk.', 'Tick all that apply.', 'Mehrfachauswahl möglich.', 'Flera svar möjliga.'),
        options: [
          o('Zonnepanelen', 'Solar panels', 'Solaranlage', 'Solpaneler'),
          o('Thuisbatterij', 'Home battery', 'Batteriespeicher', 'Hembatteri'),
          o('Laadpaal', 'EV charger', 'Wallbox', 'Laddbox'),
          o('Groepenkast of elektra vernieuwen', 'New consumer unit or rewiring', 'Sicherungskasten oder Elektrik erneuern', 'Ny elcentral eller ny el'),
          o('Storing of reparatie', 'Fault or repair', 'Störung oder Reparatur', 'Fel eller reparation'),
        ],
      },
      planningStart,
      budget(),
    ],
    placeholder: tx(
      'Bijvoorbeeld: plat dak op het zuiden, rekening van zo’n € 120 per maand, airco in de zomer…',
      'For example: south-facing flat roof, bills of about €120 a month, air con in summer…',
      'Zum Beispiel: Flachdach nach Süden, Stromrechnung etwa 120 € im Monat, Klimaanlage im Sommer…',
      'Till exempel: platt tak mot söder, elräkning på cirka 120 € i månaden, luftkonditionering på sommaren…',
    ),
  },

  energiebeheer: {
    legend: tx('Slim energiebeheer', 'Smart energy management', 'Energiemanagement', 'Smart energistyrning'),
    situatie: true,
    fotos: false,
    vragen: [
      {
        name: 'installatie',
        kind: 'checks',
        label: tx('Wat heeft u al?', 'What do you already have?', 'Was haben Sie bereits?', 'Vad har du redan?'),
        hint: tx('Optioneel, meerdere antwoorden mogelijk.', 'Optional, tick all that apply.', 'Optional, Mehrfachauswahl möglich.', 'Valfritt, flera svar möjliga.'),
        options: [
          o('Zonnepanelen', 'Solar panels', 'Solaranlage', 'Solpaneler'),
          o('Thuisbatterij', 'Home battery', 'Batteriespeicher', 'Hembatteri'),
          o('Warmtepomp of airco', 'Heat pump or air con', 'Wärmepumpe oder Klimaanlage', 'Värmepump eller luftkonditionering'),
          o('Zwembadpomp', 'Pool pump', 'Poolpumpe', 'Poolpump'),
          o('Laadpaal', 'EV charger', 'Wallbox', 'Laddbox'),
        ],
      },
      planningStart,
    ],
    placeholder: tx(
      'Bijvoorbeeld: we hebben zonnepanelen maar leveren veel terug, en de zwembadpomp draait ’s nachts…',
      'For example: we have solar panels but export a lot, and the pool pump runs at night…',
      'Zum Beispiel: Wir haben eine Solaranlage, speisen aber viel ein, und die Poolpumpe läuft nachts…',
      'Till exempel: vi har solpaneler men säljer mycket tillbaka, och poolpumpen går på natten…',
    ),
  },

  anders: {
    legend: tx('Waar kunnen we u mee helpen?', 'What can we help with?', 'Womit können wir helfen?', 'Vad kan vi hjälpa till med?'),
    situatie: true,
    fotos: true,
    vragen: [
      {
        name: 'onderwerp',
        kind: 'radio',
        required: true,
        label: waarOm,
        options: [
          o('Airco of verwarming', 'Air con or heating', 'Klimaanlage oder Heizung', 'Luftkonditionering eller värme'),
          o('Tegelwerk', 'Tiling', 'Fliesenarbeiten', 'Kakel och klinker'),
          o('Verhuizen', 'Removals', 'Umzug', 'Flytt'),
          o('Schoonmaak', 'Cleaning', 'Reinigung', 'Städning'),
          o('Iets anders', 'Something else', 'Etwas anderes', 'Något annat'),
        ],
      },
      planningStart,
      budget(),
    ],
    placeholder: tx(
      'Bijvoorbeeld: airco in de slaapkamers en de woonkamer…',
      'For example: air con in the bedrooms and living room…',
      'Zum Beispiel: Klimaanlage in den Schlafzimmern und im Wohnzimmer…',
      'Till exempel: luftkonditionering i sovrummen och vardagsrummet…',
    ),
  },
};
