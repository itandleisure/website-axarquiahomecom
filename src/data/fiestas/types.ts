// Feesten per gemeente: types, hulpjes en de vertaling van datums.
// De feiten (namen, datums) staan één keer per feest; de korte tekst per taal.
// Datums wisselen per jaar: schrijf "rond", "eerste weekend van" enz. en geen jaartallen.
export type FLang = 'nl' | 'en' | 'de' | 'sv';
export const fiestaLangs: FLang[] = ['nl', 'en', 'de', 'sv'];
export type Tr = Record<FLang, string>;

/** Vier talen in vaste volgorde: nl, en, de, sv */
export const t = (nl: string, en: string, de: string, sv: string): Tr => ({ nl, en, de, sv });

const months: Record<FLang, string[]> = {
  nl: ['januari', 'februari', 'maart', 'april', 'mei', 'juni', 'juli', 'augustus', 'september', 'oktober', 'november', 'december'],
  en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  de: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
  sv: ['januari', 'februari', 'mars', 'april', 'maj', 'juni', 'juli', 'augusti', 'september', 'oktober', 'november', 'december'],
};
export const monthName = (l: FLang, m: number) => months[l][m - 1];

export interface When { text: Tr; month: number }

/** Vaste dag: D(15, 8) = 15 augustus */
export const D = (d: number, m: number): When => ({
  month: m,
  text: t(`${d} ${monthName('nl', m)}`, `${d} ${monthName('en', m)}`, `${d}. ${monthName('de', m)}`, `${d} ${monthName('sv', m)}`),
});
/** Twee dagen: D2(7, 8, 9) = 7 en 8 september */
export const D2 = (a: number, b: number, m: number): When => ({
  month: m,
  text: t(`${a} en ${b} ${monthName('nl', m)}`, `${a}–${b} ${monthName('en', m)}`, `${a}. und ${b}. ${monthName('de', m)}`, `${a}–${b} ${monthName('sv', m)}`),
});
/** Rond een dag: R(15, 5) = rond 15 mei */
export const R = (d: number, m: number): When => ({
  month: m,
  text: t(`rond ${d} ${monthName('nl', m)}`, `around ${d} ${monthName('en', m)}`, `um den ${d}. ${monthName('de', m)}`, `kring ${d} ${monthName('sv', m)}`),
});
/** Hele maand */
export const M = (m: number): When => ({
  month: m,
  text: t(monthName('nl', m), monthName('en', m), monthName('de', m), monthName('sv', m)),
});
/** Deel van een maand: P('mid', 8) = half augustus */
export const P = (part: 'begin' | 'mid' | 'end', m: number): When => {
  const p = { begin: ['begin', 'early', 'Anfang', 'början av'], mid: ['half', 'mid-', 'Mitte', 'mitten av'], end: ['eind', 'late', 'Ende', 'slutet av'] }[part];
  return {
    month: m,
    text: t(`${p[0]} ${monthName('nl', m)}`, part === 'mid' ? `mid-${monthName('en', m)}` : `${p[1]} ${monthName('en', m)}`, `${p[2]} ${monthName('de', m)}`, `${p[3]} ${monthName('sv', m)}`),
  };
};
/** N(1, 'weekend', 8) = eerste weekend van augustus; -1 = laatste, -2 = voorlaatste */
export const N = (n: 1 | 2 | 3 | -1 | -2, unit: 'weekend' | 'sunday' | 'saturday' | 'week', m: number): When => {
  const k = String(n) as '1' | '2' | '3' | '-1' | '-2';
  const nl = { '1': 'eerste', '2': 'tweede', '3': 'derde', '-1': 'laatste', '-2': 'voorlaatste' }[k];
  const en = { '1': 'first', '2': 'second', '3': 'third', '-1': 'last', '-2': 'second-to-last' }[k];
  // Duits: Wochenende (n), Sonntag/Samstag (m), Woche (f)
  const deStem = { '1': 'erst', '2': 'zweit', '3': 'dritt', '-1': 'letzt', '-2': 'vorletzt' }[k];
  const deEnd = unit === 'weekend' ? 'es' : unit === 'week' ? 'e' : 'er';
  const sv = { '1': 'första', '2': 'andra', '3': 'tredje', '-1': 'sista', '-2': 'näst sista' }[k];
  const u = {
    weekend: ['weekend', 'weekend', 'Wochenende', 'helgen'],
    sunday: ['zondag', 'Sunday', 'Sonntag', 'söndagen'],
    saturday: ['zaterdag', 'Saturday', 'Samstag', 'lördagen'],
    week: ['week', 'week', 'Woche', 'veckan'],
  }[unit];
  return {
    month: m,
    text: t(
      `${nl} ${u[0]} van ${monthName('nl', m)}`,
      `${en} ${u[1]} of ${monthName('en', m)}`,
      `${deStem}${deEnd} ${u[2]} im ${monthName('de', m)}`,
      `${sv} ${u[3]} i ${monthName('sv', m)}`,
    ),
  };
};
/** Rond Pasen; de maand (3) is alleen voor de volgorde */
export const E = (kind: 'holy-week' | 'good-friday' | 'dolores' | 'easter'): When => ({
  month: 3.5,
  text: {
    'holy-week': t('Goede Week, maart of april', 'Holy Week, March or April', 'Karwoche, März oder April', 'påskveckan, mars eller april'),
    'good-friday': t('Goede Vrijdag en Stille Zaterdag', 'Good Friday and Holy Saturday', 'Karfreitag und Karsamstag', 'långfredagen och påskafton'),
    dolores: t('vrijdag vóór de Goede Week', 'the Friday before Holy Week', 'Freitag vor der Karwoche', 'fredagen före påskveckan'),
    easter: t('rond Pasen', 'around Easter', 'um Ostern', 'kring påsk'),
  }[kind],
});
/** Vrije omschrijving, met een maand voor de volgorde */
export const W = (month: number, text: Tr): When => ({ month, text });

export interface FiestaEvent {
  /** Spaanse naam, gelijk in alle talen (of vertaald als het een beschrijving is) */
  name: string | Tr;
  when: When;
  text: Tr;
  /** Het bekendste feest van de plaats; komt bovenaan en in de FAQ */
  highlight?: boolean;
  /** Toont een korte uitleg over Halloween / Allerheiligen / Semana Santa in de algemene blokken */
  kind?: 'semana-santa' | 'halloween' | 'san-juan' | 'carnaval' | 'feria' | 'romeria';
}

export interface PlaceFiestas {
  /** Eén of twee zinnen over het feestjaar van de plaats */
  intro: Tr;
  events: FiestaEvent[];
  /** Bronnen, alleen voor onszelf */
  sources: string[];
}

export const nameOf = (e: FiestaEvent, l: FLang) => (typeof e.name === 'string' ? e.name : e.name[l]);
