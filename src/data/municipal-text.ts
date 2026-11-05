// Teksten voor de pagina's Bouwvergunning en Praktisch wonen per gemeente, in NL, EN en DE.
// De teksten zijn gelijk voor alle gemeenten; de cijfers en het gemeentehuis komen uit src/data/municipal.ts.
// Feiten en bronnen staan bovenaan municipal.ts. HTML in alinea's is toegestaan.
import type { Lang } from '../i18n';
import { municipal, municipalChecked, municipalTaxYear, imputationRate, icioRange, ibiRange, type Municipal } from './municipal';

export type MunicipalPageKind = 'permit' | 'practical';
export type MunicipalLang = 'nl' | 'en' | 'de';
export const municipalLangs: MunicipalLang[] = ['nl', 'en', 'de'];

export interface MunicipalText {
  title: string;
  description: string;
  h1: string;
  lead: string;
  sections: { h: string; p: string[]; list?: string[] }[];
  facts: [string, string][];
  factsTitle: string;
  faq: { q: string; a: string }[];
  sources: string;
}

const locale: Record<MunicipalLang, string> = { nl: 'nl-NL', en: 'en-GB', de: 'de-DE' };
const num = (lang: MunicipalLang, n: number, d = 4) => n.toLocaleString(locale[lang], { maximumFractionDigits: d });
const pct = (lang: MunicipalLang, n: number) => (lang === 'de' ? `${num(lang, n)}\u00a0%` : `${num(lang, n)}%`);
const eur = (lang: MunicipalLang, n: number) => {
  const s = Math.round(n).toLocaleString(locale[lang]);
  return lang === 'nl' ? `€\u00a0${s}` : lang === 'en' ? `€${s}` : `${s}\u00a0€`;
};
const date = (lang: MunicipalLang) => new Date(municipalChecked).toLocaleDateString(locale[lang], { day: 'numeric', month: 'long', year: 'numeric' });
const site = (m: Municipal) => `<a href="https://www.${m.web}/" rel="noopener" target="_blank">${m.web}</a>`;

/** Voorbeeldbedragen voor de ICIO-berekening */
const examples = { bath: 12000, kitchen: 20000, pool: 35000 };
const exampleCadastral = 100000;

interface Ctx {
  name: string;
  /** Kernen die onder de gemeente vallen (voor "geldt ook voor") */
  villages: string[];
  m: Municipal;
  /** Links naar andere pagina's, al per taal opgebouwd */
  links: { request: (dienst?: string) => string; renovation: string; keyholding: string; survey: string; pool: string; maintenance: string; afo: string; renoCosts: string; buyCosts: string; finca: string; permit: string; practical: string };
}

function permit(lang: MunicipalLang, c: Ctx): MunicipalText {
  const { name, m, links } = c;
  const icio = pct(lang, m.icio);
  const ex = (v: number) => eur(lang, (v * m.icio) / 100);
  const also = c.villages.length ? c.villages.join(', ') : '';
  const range = `${pct(lang, icioRange.min)}–${pct(lang, icioRange.max)}`;
  const addr = [m.address, `${m.postcode} ${name}`].filter(Boolean).join(', ');
  if (lang === 'nl') return {
    title: `Bouwvergunning in ${name}: licencia de obra, kosten en doorlooptijd`,
    description: `Verbouwen in ${name}? Wanneer u een licencia de obra of een declaración responsable nodig hebt, wat de bouwbelasting (ICIO ${icio}) kost, hoe lang het duurt en waar u het aanvraagt.`,
    h1: `Bouwvergunning in ${name}`,
    lead: `Wie in ${name} gaat verbouwen, heeft bijna altijd iets van het gemeentehuis nodig. Voor kleine klussen volstaat een melding, voor grotere werken een vergunning. De gemeente rekent ${icio} bouwbelasting over de bouwkosten.`,
    factsTitle: `${name} in het kort`,
    facts: [
      ['Bouwbelasting (ICIO)', `${icio} van de bouwkosten`],
      ['Badkamer van ' + eur(lang, examples.bath), `${ex(examples.bath)} ICIO`],
      ['Keuken van ' + eur(lang, examples.kitchen), `${ex(examples.kitchen)} ICIO`],
      ['Zwembad van ' + eur(lang, examples.pool), `${ex(examples.pool)} ICIO`],
      ['Beslistermijn vergunning', 'max. 3 maanden'],
      ['Gemeentehuis', m.phone ? `${m.phone}` : site(m)],
    ],
    sections: [
      { h: 'Vergunning of melding?', p: [
        `In Andalusië regelt de bouwwet LISTA (Ley 7/2021) welke werken een vergunning nodig hebben. In ${name} gelden dezelfde regels als in de rest van de regio.${also ? ` Dat geldt ook voor ${also}, die onder de gemeente ${name} vallen.` : ''} Er zijn twee routes:`,
      ], list: [
        '<strong>Declaración responsable</strong> (melding): voor kleine werken zonder bouwproject, zoals een nieuwe keuken of badkamer, tegels, kozijnen in dezelfde maat of het opknappen van een dak zonder de constructie te raken. Ook voor werken binnen een bestaand, legaal huis in de bebouwde kom die niets aan de omvang, hoogte of het aantal woningen veranderen. U mag beginnen op de dag dat u de melding met alle stukken indient. In de volksmond heet dit nog vaak <em>obra menor</em>.',
        '<strong>Licencia de obra</strong> (vergunning, vaak <em>obra mayor</em> genoemd): voor nieuwbouw, uitbreidingen, een extra verdieping, ingrepen in de constructie en in de regel ook een zwembad. Hiervoor is een project van een architect nodig. U mag pas beginnen als de vergunning er is.',
      ] },
      { h: `Wat het kost in ${name}`, p: [
        `${name} rekent een bouwbelasting (<em>Impuesto sobre Construcciones, Instalaciones y Obras</em>, ICIO) van <strong>${icio}</strong> over de bouwkosten zonder btw en zonder honoraria. In de Axarquía ligt dit tarief tussen ${range}. Een badkamer van ${eur(lang, examples.bath)} kost zo ${ex(examples.bath)} aan ICIO en een zwembad van ${eur(lang, examples.pool)} ${ex(examples.pool)}.`,
        'Daarnaast vragen veel gemeenten leges voor de behandeling (<em>tasa por licencia urbanística</em>). Het bedrag staat in de belastingverordening (<em>ordenanza fiscal</em>) van de gemeente. Bij een vergunning komen de kosten van de architect en soms een veiligheidscoördinator erbij. Zie ook onze gids over <a href="' + links.renoCosts + '">kosten van renoveren</a>.',
      ] },
      { h: 'Hoe lang het duurt', p: [
        'Een declaración responsable geeft direct recht om te beginnen, mits alle stukken compleet zijn. De gemeente controleert achteraf en kan het werk stilleggen als iets niet klopt.',
        'Voor een vergunning moet de gemeente binnen <strong>drie maanden</strong> beslissen, gerekend vanaf de dag dat het dossier compleet is. Vraagt de gemeente om aanvullingen, dan begint die termijn later. Na afgifte hebt u in de regel één jaar om te beginnen en drie jaar om af te bouwen, tenzij de vergunning iets anders zegt.',
      ] },
      { h: `Waar u het aanvraagt in ${name}`, p: [
        `U dient de aanvraag of melding in bij het gemeentehuis (<em>Ayuntamiento de ${name}</em>)${m.address ? `, ${addr}` : ''}${m.phone ? `, telefoon ${m.phone}` : ''}. Digitaal kan het via het elektronische loket (<em>sede electrónica</em>) op ${site(m)}; daarvoor hebt u een digitaal certificaat nodig. De meeste eigenaren laten de aanvraag doen door hun architect of aannemer.`,
        `In kleinere gemeenten beoordeelt vaak een technicus van de Diputación de Málaga de aanvraag. Vraag bij het gemeentehuis welke stukken zij precies willen zien; dat verschilt per gemeente.`,
      ] },
      { h: 'Huizen in het buitengebied', p: [
        `Staat uw huis buiten de bebouwde kom, op <em>suelo rústico</em>? Dan zijn de regels strenger. Een melding volstaat daar alleen voor werken die het huis zuiniger maken, zoals isolatie of zonnepanelen, zonder extra vierkante meters. Voor al het andere is een vergunning nodig, en uitbreiden mag vaak niet. Is het huis ooit zonder vergunning gebouwd of uitgebreid, lees dan eerst onze gids over <a href="${links.afo}">AFO en legaliseren</a>.`,
      ] },
      { h: 'Wat wij voor u regelen', p: [
        `Wij kijken eerst of uw plan een melding of een vergunning nodig heeft, maken een begroting en zorgen voor de architect en de aanvraag bij de gemeente. Daarna voeren we het werk uit en houden u op de hoogte als u niet in Spanje bent. Lees meer over <a href="${links.renovation}">renovatie</a> en <a href="${links.pool}">een zwembad bouwen</a>, of <a href="${links.request('legalisatie')}">vraag direct advies</a>.`,
      ] },
    ],
    faq: [
      { q: `Heb ik in ${name} een vergunning nodig voor een nieuwe keuken of badkamer?`, a: 'Meestal niet. Zolang u niets aan de constructie of de indeling van het huis verandert, volstaat een declaración responsable. U betaalt wel ICIO over de bouwkosten.' },
      { q: `Hoeveel bouwbelasting betaal ik in ${name}?`, a: `De ICIO is ${icio} van de bouwkosten zonder btw (tarief ${municipalTaxYear} volgens het Spaanse ministerie van Financiën). Daar kunnen leges van de gemeente bij komen.` },
      { q: 'Wat gebeurt er als ik zonder vergunning bouw?', a: 'De gemeente kan het werk stilleggen, een boete opleggen en eisen dat u het terugbrengt in de oude staat. Bij verkoop komt het vaak boven tafel, omdat de koper of de notaris naar de vergunningen vraagt.' },
      { q: 'Moet ik zelf naar het gemeentehuis?', a: 'Nee. De architect of aannemer kan de aanvraag namens u indienen, ook digitaal. U tekent dan een machtiging.' },
    ],
    sources: `Bronnen: tarieven ${municipalTaxYear} uit de <em>Consulta de información impositiva municipal</em> van het Spaanse ministerie van Financiën; adres uit de <em>Base de Datos General de Entidades Locales</em>; regels uit de Ley 7/2021 (LISTA), art. 137 tot 141. Gecontroleerd op ${date(lang)}. Tarieven kunnen per 1 januari wijzigen; de belastingverordening van de gemeente is leidend.${m.addressChecked === false ? ' Het adres van het gemeentehuis komt uit een ouder gemeentelijk bericht; bel voor de zekerheid even.' : ''}`,
  };
  if (lang === 'en') return {
    title: `Building permit in ${name}: licencia de obra, costs and timing`,
    description: `Renovating in ${name}? When you need a licencia de obra or a declaración responsable, what the building tax (ICIO ${icio}) costs, how long it takes and where to apply.`,
    h1: `Building permit in ${name}`,
    lead: `If you are renovating in ${name}, you almost always need something from the town hall. Small jobs only need a notification, larger works need a permit. The council charges ${icio} building tax on the cost of the works.`,
    factsTitle: `${name} at a glance`,
    facts: [
      ['Building tax (ICIO)', `${icio} of the cost of works`],
      ['Bathroom costing ' + eur(lang, examples.bath), `${ex(examples.bath)} ICIO`],
      ['Kitchen costing ' + eur(lang, examples.kitchen), `${ex(examples.kitchen)} ICIO`],
      ['Pool costing ' + eur(lang, examples.pool), `${ex(examples.pool)} ICIO`],
      ['Decision on a permit', 'max. 3 months'],
      ['Town hall', m.phone ? `+34 ${m.phone}` : site(m)],
    ],
    sections: [
      { h: 'Permit or notification?', p: [
        `In Andalusia the planning law LISTA (Ley 7/2021) sets out which works need a permit. ${name} follows the same rules as the rest of the region.${also ? ` This also applies to ${also}, which belong to the municipality of ${name}.` : ''} There are two routes:`,
      ], list: [
        '<strong>Declaración responsable</strong> (notification): for small works that need no building project, such as a new kitchen or bathroom, tiling, windows of the same size or roof repairs that do not touch the structure. Also for works inside an existing, legal house in town that do not change its size, height or number of dwellings. You can start on the day you file the notification with all documents. Locally this is still often called <em>obra menor</em>.',
        '<strong>Licencia de obra</strong> (permit, often called <em>obra mayor</em>): for new builds, extensions, an extra floor, structural work and, as a rule, a swimming pool. This needs a project by an architect. You may only start once the permit has been granted.',
      ] },
      { h: `What it costs in ${name}`, p: [
        `${name} charges a building tax (<em>Impuesto sobre Construcciones, Instalaciones y Obras</em>, ICIO) of <strong>${icio}</strong> on the cost of the works, excluding VAT and professional fees. Across the Axarquía the rate ranges from ${range}. A ${eur(lang, examples.bath)} bathroom therefore costs ${ex(examples.bath)} in ICIO and a ${eur(lang, examples.pool)} pool ${ex(examples.pool)}.`,
        'Many councils also charge a processing fee (<em>tasa por licencia urbanística</em>), set in the council’s tax bylaw (<em>ordenanza fiscal</em>). With a permit you also pay the architect and sometimes a health and safety coordinator. See our guide to <a href="' + links.renoCosts + '">renovation costs</a>.',
      ] },
      { h: 'How long it takes', p: [
        'A declaración responsable lets you start straight away, as long as the paperwork is complete. The council checks afterwards and can stop the work if something is wrong.',
        'For a permit the council must decide within <strong>three months</strong> of receiving a complete application. If it asks for more documents, the clock starts later. Once granted, you normally have one year to start and three years to finish, unless the permit says otherwise.',
      ] },
      { h: `Where to apply in ${name}`, p: [
        `You file the application or notification with the town hall (<em>Ayuntamiento de ${name}</em>)${m.address ? `, ${addr}` : ''}${m.phone ? `, phone +34 ${m.phone}` : ''}. Online it goes through the council’s e-office (<em>sede electrónica</em>) at ${site(m)}, which needs a digital certificate. Most owners let their architect or builder file it.`,
        'In smaller municipalities a technician from the Diputación de Málaga often reviews the application. Ask the town hall exactly which documents they want; it varies by council.',
      ] },
      { h: 'Houses in the countryside', p: [
        `Is your house outside the town, on <em>suelo rústico</em>? Then the rules are stricter. A notification is only enough for works that make the house more energy efficient, such as insulation or solar panels, without adding floor space. Everything else needs a permit, and extensions are often not allowed. If the house was ever built or extended without a permit, read our guide to <a href="${links.afo}">AFO and legalisation</a> first.`,
      ] },
      { h: 'What we take care of', p: [
        `We first check whether your plan needs a notification or a permit, prepare a quote and arrange the architect and the application to the council. Then we carry out the work and keep you updated while you are away. Read more about <a href="${links.renovation}">renovation</a> and <a href="${links.pool}">building a pool</a>, or <a href="${links.request('legalisatie')}">ask for advice</a>.`,
      ] },
    ],
    faq: [
      { q: `Do I need a permit in ${name} for a new kitchen or bathroom?`, a: 'Usually not. As long as you do not change the structure or layout of the house, a declaración responsable is enough. You do pay ICIO on the cost of the works.' },
      { q: `How much building tax do I pay in ${name}?`, a: `ICIO is ${icio} of the cost of the works excluding VAT (${municipalTaxYear} rate according to the Spanish Ministry of Finance). A council fee may come on top.` },
      { q: 'What happens if I build without a permit?', a: 'The council can stop the work, fine you and order you to restore the original state. It often comes up when you sell, because the buyer or notary asks for the permits.' },
      { q: 'Do I have to go to the town hall myself?', a: 'No. Your architect or builder can file the application on your behalf, also online. You sign an authorisation.' },
    ],
    sources: `Sources: ${municipalTaxYear} rates from the Spanish Ministry of Finance (<em>Consulta de información impositiva municipal</em>); address from the <em>Base de Datos General de Entidades Locales</em>; rules from Ley 7/2021 (LISTA), articles 137 to 141. Checked on ${date(lang)}. Rates can change on 1 January; the council’s tax bylaw is what counts.${m.addressChecked === false ? ' The town hall address comes from an older council notice; call ahead to be sure.' : ''}`,
  };
  return {
    title: `Baugenehmigung in ${name}: Licencia de obra, Kosten und Dauer`,
    description: `Umbauen in ${name}? Wann Sie eine Licencia de obra oder eine Declaración responsable brauchen, was die Bausteuer (ICIO ${icio}) kostet, wie lange es dauert und wo Sie sie beantragen.`,
    h1: `Baugenehmigung in ${name}`,
    lead: `Wer in ${name} umbaut, braucht fast immer etwas vom Rathaus. Für kleine Arbeiten reicht eine Anzeige, für größere eine Genehmigung. Die Gemeinde erhebt ${icio} Bausteuer auf die Baukosten.`,
    factsTitle: `${name} auf einen Blick`,
    facts: [
      ['Bausteuer (ICIO)', `${icio} der Baukosten`],
      ['Bad für ' + eur(lang, examples.bath), `${ex(examples.bath)} ICIO`],
      ['Küche für ' + eur(lang, examples.kitchen), `${ex(examples.kitchen)} ICIO`],
      ['Pool für ' + eur(lang, examples.pool), `${ex(examples.pool)} ICIO`],
      ['Entscheidung über Genehmigung', 'max. 3 Monate'],
      ['Rathaus', m.phone ? `+34 ${m.phone}` : site(m)],
    ],
    sections: [
      { h: 'Genehmigung oder Anzeige?', p: [
        `In Andalusien legt das Baugesetz LISTA (Ley 7/2021) fest, welche Arbeiten eine Genehmigung brauchen. In ${name} gelten dieselben Regeln wie in der ganzen Region.${also ? ` Das gilt auch für ${also}, die zur Gemeinde ${name} gehören.` : ''} Es gibt zwei Wege:`,
      ], list: [
        '<strong>Declaración responsable</strong> (Anzeige): für kleine Arbeiten ohne Bauprojekt, etwa eine neue Küche oder ein neues Bad, Fliesen, Fenster in gleicher Größe oder Dachreparaturen ohne Eingriff in die Statik. Auch für Arbeiten in einem bestehenden, legalen Haus im Ort, die Größe, Höhe und Zahl der Wohnungen nicht ändern. Sie dürfen am Tag der vollständigen Anzeige beginnen. Vor Ort heißt das oft noch <em>obra menor</em>.',
        '<strong>Licencia de obra</strong> (Genehmigung, oft <em>obra mayor</em> genannt): für Neubau, Anbau, ein zusätzliches Stockwerk, Eingriffe in die Statik und in der Regel auch für einen Pool. Dafür braucht es ein Projekt eines Architekten. Sie dürfen erst beginnen, wenn die Genehmigung erteilt ist.',
      ] },
      { h: `Was es in ${name} kostet`, p: [
        `${name} erhebt eine Bausteuer (<em>Impuesto sobre Construcciones, Instalaciones y Obras</em>, ICIO) von <strong>${icio}</strong> auf die Baukosten ohne Mehrwertsteuer und Honorare. In der Axarquía liegt der Satz zwischen ${range}. Ein Bad für ${eur(lang, examples.bath)} kostet damit ${ex(examples.bath)} ICIO und ein Pool für ${eur(lang, examples.pool)} ${ex(examples.pool)}.`,
        'Viele Gemeinden verlangen zusätzlich eine Bearbeitungsgebühr (<em>tasa por licencia urbanística</em>), festgelegt in der Steuersatzung (<em>ordenanza fiscal</em>). Bei einer Genehmigung kommen Architekt und manchmal ein Sicherheitskoordinator hinzu. Siehe auch unseren Ratgeber zu den <a href="' + links.renoCosts + '">Renovierungskosten</a>.',
      ] },
      { h: 'Wie lange es dauert', p: [
        'Mit einer Declaración responsable dürfen Sie sofort beginnen, sofern die Unterlagen vollständig sind. Die Gemeinde prüft nachträglich und kann die Arbeiten stoppen, wenn etwas nicht stimmt.',
        'Über eine Genehmigung muss die Gemeinde innerhalb von <strong>drei Monaten</strong> ab vollständigem Antrag entscheiden. Fordert sie Unterlagen nach, beginnt die Frist später. Danach haben Sie in der Regel ein Jahr, um zu beginnen, und drei Jahre, um fertig zu werden, sofern die Genehmigung nichts anderes sagt.',
      ] },
      { h: `Wo Sie in ${name} beantragen`, p: [
        `Antrag oder Anzeige reichen Sie beim Rathaus ein (<em>Ayuntamiento de ${name}</em>)${m.address ? `, ${addr}` : ''}${m.phone ? `, Telefon +34 ${m.phone}` : ''}. Online geht es über das elektronische Amt (<em>sede electrónica</em>) auf ${site(m)}; dafür brauchen Sie ein digitales Zertifikat. Meist reicht der Architekt oder die Baufirma den Antrag ein.`,
        'In kleineren Gemeinden prüft oft ein Techniker der Diputación de Málaga den Antrag. Fragen Sie im Rathaus, welche Unterlagen genau verlangt werden; das ist je Gemeinde verschieden.',
      ] },
      { h: 'Häuser im Außenbereich', p: [
        `Steht Ihr Haus außerhalb des Ortes, auf <em>suelo rústico</em>? Dann gelten strengere Regeln. Eine Anzeige reicht dort nur für Arbeiten, die das Haus energieeffizienter machen, etwa Dämmung oder Solaranlagen, ohne zusätzliche Fläche. Alles andere braucht eine Genehmigung, und Anbauen ist oft nicht erlaubt. Wurde das Haus je ohne Genehmigung gebaut oder erweitert, lesen Sie zuerst unseren Ratgeber zu <a href="${links.afo}">AFO und Legalisierung</a>.`,
      ] },
      { h: 'Was wir für Sie übernehmen', p: [
        `Wir prüfen zuerst, ob Ihr Vorhaben eine Anzeige oder eine Genehmigung braucht, erstellen ein Angebot und kümmern uns um Architekt und Antrag. Danach führen wir die Arbeiten aus und halten Sie auf dem Laufenden, wenn Sie nicht in Spanien sind. Mehr zur <a href="${links.renovation}">Renovierung</a> und zum <a href="${links.pool}">Poolbau</a>, oder <a href="${links.request('legalisatie')}">fragen Sie direkt an</a>.`,
      ] },
    ],
    faq: [
      { q: `Brauche ich in ${name} eine Genehmigung für eine neue Küche oder ein neues Bad?`, a: 'Meist nicht. Solange Sie Statik und Grundriss nicht ändern, reicht eine Declaración responsable. ICIO auf die Baukosten zahlen Sie trotzdem.' },
      { q: `Wie viel Bausteuer zahle ich in ${name}?`, a: `Die ICIO beträgt ${icio} der Baukosten ohne Mehrwertsteuer (Satz ${municipalTaxYear} laut spanischem Finanzministerium). Dazu kann eine Gebühr der Gemeinde kommen.` },
      { q: 'Was passiert, wenn ich ohne Genehmigung baue?', a: 'Die Gemeinde kann die Arbeiten stoppen, ein Bußgeld verhängen und den Rückbau verlangen. Beim Verkauf fällt es oft auf, weil Käufer oder Notar nach den Genehmigungen fragen.' },
      { q: 'Muss ich selbst ins Rathaus?', a: 'Nein. Architekt oder Baufirma können den Antrag für Sie stellen, auch online. Sie unterschreiben eine Vollmacht.' },
    ],
    sources: `Quellen: Steuersätze ${municipalTaxYear} aus der <em>Consulta de información impositiva municipal</em> des spanischen Finanzministeriums; Adresse aus der <em>Base de Datos General de Entidades Locales</em>; Regeln aus der Ley 7/2021 (LISTA), Art. 137 bis 141. Geprüft am ${date(lang)}. Die Sätze können sich zum 1. Januar ändern; maßgeblich ist die Steuersatzung der Gemeinde.${m.addressChecked === false ? ' Die Adresse des Rathauses stammt aus einer älteren Mitteilung der Gemeinde; rufen Sie sicherheitshalber vorher an.' : ''}`,
  };
}

function practical(lang: MunicipalLang, c: Ctx): MunicipalText {
  const { name, m, links } = c;
  const ibi = pct(lang, m.ibiUrban);
  const ibiR = pct(lang, m.ibiRustic);
  const ibiEx = eur(lang, (exampleCadastral * m.ibiUrban) / 100);
  const imp = imputationRate(m);
  const nrEu = eur(lang, (exampleCadastral * imp) / 100 * 0.19);
  const nrOther = eur(lang, (exampleCadastral * imp) / 100 * 0.24);
  const range = `${pct(lang, ibiRange.min)}–${pct(lang, ibiRange.max)}`;
  const plus = m.plusvalia > 0 ? pct(lang, m.plusvalia) : '';
  const addr = [m.address, `${m.postcode} ${name}`].filter(Boolean).join(', ');
  const also = c.villages.length ? c.villages.join(', ') : '';
  const contactRow: [string, string] = [{ nl: 'Gemeentehuis', en: 'Town hall', de: 'Rathaus' }[lang], [m.phone ? (lang === 'nl' ? m.phone : `+34 ${m.phone}`) : '', site(m)].filter(Boolean).join('<br>')];
  if (lang === 'nl') return {
    title: `Praktisch wonen in ${name}: IBI, afval, water en padrón`,
    description: `Een huis in ${name}? Wat u betaalt aan IBI (${ibi}), wat niet-residenten aan belasting kwijt zijn, en hoe het zit met afval, water, internet en inschrijving bij de gemeente.`,
    h1: `Praktisch wonen in ${name}`,
    lead: `De vaste lasten en het papierwerk van een huis in ${name} op een rij: de onroerendgoedbelasting, de belasting voor niet-residenten, afval, water, internet en de inschrijving bij de gemeente.`,
    factsTitle: `${name} in het kort`,
    facts: [
      ['IBI woning (urbana)', ibi],
      ['IBI buitengebied (rústica)', ibiR],
      ['Catastrale waarden herzien', String(m.catastro)],
      ...(plus ? [['Plusvalía bij verkoop', plus] as [string, string]] : []),
      ['Bouwbelasting (ICIO)', pct(lang, m.icio)],
      contactRow,
    ],
    sections: [
      { h: 'IBI: de onroerendgoedbelasting', p: [
        `Elke eigenaar betaalt jaarlijks <em>Impuesto sobre Bienes Inmuebles</em> (IBI). In ${name} is het tarief in ${municipalTaxYear} <strong>${ibi}</strong> van de catastrale waarde voor woningen in de bebouwde kom en ${ibiR} voor grond in het buitengebied. In de Axarquía ligt het woningtarief tussen ${range}.${also ? ` Het tarief geldt ook in ${also}.` : ''}`,
        `Een woning met een catastrale waarde van ${eur(lang, exampleCadastral)} betaalt in ${name} dus ${ibiEx} per jaar. De catastrale waarde staat op uw aanslag en in het Catastro; ze ligt meestal ver onder de marktwaarde. In ${name} zijn de waarden voor het laatst in ${m.catastro} algemeen herzien.`,
        'De aanslag komt van het gemeentehuis of van de belastingdienst van de Diputación de Málaga (Patronato de Recaudación Provincial), die voor veel gemeenten in de provincie int. Laat de IBI automatisch afschrijven van een Spaanse rekening, dan mist u geen termijn als u niet in Spanje bent.',
      ] },
      { h: 'Belasting voor niet-residenten', p: [
        `Woont u niet in Spanje en verhuurt u het huis niet, dan betaalt u toch jaarlijks inkomstenbelasting voor niet-residenten (<em>IRNR</em>, formulier 210). Spanje rekent met een fictief inkomen van ${num(lang, imp)}% van de catastrale waarde${imp === 2 ? ', omdat de waarden in deze gemeente vóór 2012 zijn herzien' : ', omdat de waarden in deze gemeente na 2012 zijn herzien'}. Daarover betaalt u 19% als u in de EU of de EER woont, anders 24%.`,
        `Bij een catastrale waarde van ${eur(lang, exampleCadastral)} is dat ${nrEu} per jaar (EU) of ${nrOther} (bijvoorbeeld het Verenigd Koninkrijk). Lees meer in onze gids over <a href="${links.buyCosts}">kosten koper</a>.`,
      ] },
      { h: 'Afval', p: [
        `Voor het ophalen van afval rekent de gemeente een afvalheffing (<em>tasa de basura</em>). Het bedrag en de manier van innen staan in de belastingverordening van ${name}; soms komt het mee met de waterrekening, soms als aparte aanslag. Huisvuil gaat in de containers langs de weg; grof vuil en tuinafval brengt u naar het milieupunt (<em>punto limpio</em>) of laat u ophalen op afspraak.`,
      ] },
      { h: 'Water', p: [
        'Het drinkwater komt van het gemeentelijke waterbedrijf of van een bedrijf dat dat namens de gemeente doet. Bij aankoop zet u het contract en de meter op uw naam; vraag de verkoper om de laatste rekening, dan weet u bij wie u moet zijn.',
        'De Axarquía heeft in 2023 en 2024 te maken gehad met droogte en waterbeperkingen. Veel huizen buiten het dorp hebben daarom een eigen watertank (<em>depósito</em> of <em>aljibe</em>). Laat bij een finca nagaan waar het water vandaan komt en of de aansluiting legaal is.',
      ] },
      { h: 'Internet en glasvezel', p: [
        'In de dorpskernen en aan de kust ligt vaak glasvezel, maar dat verschilt per straat. Vraag bij de aanbieders na of uw adres is aangesloten voordat u koopt als u vanuit huis werkt. Op afgelegen fincas is internet via 4G/5G of satelliet gebruikelijk.',
      ] },
      { h: 'Inschrijven bij de gemeente: het padrón', p: [
        `Woont u (een deel van het jaar) in ${name}, dan schrijft u zich in bij het gemeentehuis in het bevolkingsregister (<em>padrón municipal</em>). U neemt uw paspoort, uw NIE en de koopakte of het huurcontract mee. U krijgt een bewijs van inschrijving (<em>certificado de empadronamiento</em>), dat u nodig hebt voor onder meer de huisarts, school, een auto op Spaans kenteken en residentie. De gemeente ontvangt geld per ingeschreven inwoner, dus zij waarderen het.`,
      ] },
      ...(plus ? [{ h: 'Plusvalía bij verkoop', p: [
        `Verkoopt u het huis, dan rekent de gemeente plusvalía municipal over de waardestijging van de grond. In ${name} is het tarief ${plus}. Het bedrag hangt af van de catastrale grondwaarde en hoe lang u het huis hebt gehad; bij verlies betaalt u niets.`,
      ] }] : []),
      { h: 'Gemeentehuis', p: [
        `<em>Ayuntamiento de ${name}</em>${m.address ? `, ${addr}` : ''}${m.phone ? `. Telefoon ${m.phone}` : ''}. Website en elektronisch loket: ${site(m)}.${m.addressChecked === false ? ' Het adres komt uit een ouder gemeentelijk bericht; bel voor de zekerheid even.' : ''}`,
      ] },
      { h: 'Niet in Spanje? Wij houden het huis in de gaten', p: [
        `Met <a href="${links.keyholding}">sleutelbeheer</a> controleren wij uw huis in ${name} op vaste momenten, na storm of zware regen, en sturen u foto’s. Lekkage of schade? Dan regelen we de <a href="${links.maintenance}">reparatie</a>. Gaat u kopen, laat het huis dan eerst <a href="${links.survey}">keuren</a>.`,
      ] },
    ],
    faq: [
      { q: `Hoeveel IBI betaal ik in ${name}?`, a: `Het tarief is ${ibi} van de catastrale waarde (${municipalTaxYear}). Bij een catastrale waarde van ${eur(lang, exampleCadastral)} is dat ${ibiEx} per jaar.` },
      { q: 'Moet ik me inschrijven in het padrón als ik maar een paar maanden per jaar in Spanje ben?', a: 'Wie gewoonlijk in Spanje woont, moet zich inschrijven in de gemeente waar hij het grootste deel van het jaar verblijft. Komt u alleen voor vakanties, dan is het niet verplicht. Inschrijving maakt u niet automatisch belastingplichtig in Spanje; dat hangt onder meer af van het aantal dagen dat u er bent (meer dan 183).' },
      { q: 'Wie betaalt de IBI in het jaar van aankoop?', a: 'De eigenaar op 1 januari krijgt de aanslag voor het hele jaar. Vaak spreken koper en verkoper bij de notaris af dat ze het bedrag naar rato verdelen.' },
    ],
    sources: `Bronnen: tarieven ${municipalTaxYear} en herzieningsjaar uit de <em>Consulta de información impositiva municipal</em> van het Spaanse ministerie van Financiën; adres uit de <em>Base de Datos General de Entidades Locales</em>; belasting niet-residenten volgens de Ley 35/2006 (IRPF), art. 85 en aanvullende bepaling 55. Gecontroleerd op ${date(lang)}. Tarieven kunnen per 1 januari wijzigen.`,
  };
  if (lang === 'en') return {
    title: `Practical guide to ${name}: IBI, rubbish tax, water and padrón`,
    description: `Own a home in ${name}? What you pay in IBI (${ibi}), what non-residents pay in tax, and how rubbish collection, water, internet and registering with the council work.`,
    h1: `Practical guide to ${name}`,
    lead: `The running costs and paperwork of a home in ${name} in one place: property tax, non-resident tax, rubbish, water, internet and registering with the council.`,
    factsTitle: `${name} at a glance`,
    facts: [
      ['IBI, homes (urbana)', ibi],
      ['IBI, rural land (rústica)', ibiR],
      ['Cadastral values revised', String(m.catastro)],
      ...(plus ? [['Plusvalía on sale', plus] as [string, string]] : []),
      ['Building tax (ICIO)', pct(lang, m.icio)],
      contactRow,
    ],
    sections: [
      { h: 'IBI: property tax', p: [
        `Every owner pays <em>Impuesto sobre Bienes Inmuebles</em> (IBI) each year. In ${name} the ${municipalTaxYear} rate is <strong>${ibi}</strong> of the cadastral value for homes in town and ${ibiR} for rural land. Across the Axarquía the rate for homes ranges from ${range}.${also ? ` The same rate applies in ${also}.` : ''}`,
        `A home with a cadastral value of ${eur(lang, exampleCadastral)} therefore pays ${ibiEx} a year in ${name}. The cadastral value is on your bill and in the Catastro, and is usually well below market value. ${name} last had a general revaluation in ${m.catastro}.`,
        'The bill comes from the town hall or from the tax office of the Diputación de Málaga (Patronato de Recaudación Provincial), which collects for many councils in the province. Pay by direct debit from a Spanish account so you never miss a deadline while you are away.',
      ] },
      { h: 'Tax for non-residents', p: [
        `If you do not live in Spain and do not rent the home out, you still pay non-resident income tax each year (<em>IRNR</em>, form 210). Spain assumes a notional income of ${num(lang, imp)}% of the cadastral value${imp === 2 ? ', because values in this municipality were last revised before 2012' : ', because values in this municipality were revised after 2012'}. You pay 19% on that if you live in the EU or EEA, otherwise 24%.`,
        `With a cadastral value of ${eur(lang, exampleCadastral)} that comes to ${nrEu} a year (EU) or ${nrOther} (for example the UK). More in our guide to <a href="${links.buyCosts}">buying costs</a>.`,
      ] },
      { h: 'Rubbish', p: [
        `The council charges a rubbish collection fee (<em>tasa de basura</em>). The amount and how it is collected are set in ${name}’s tax bylaw; sometimes it comes with the water bill, sometimes as a separate bill. Household waste goes in the roadside containers; bulky and garden waste goes to the recycling point (<em>punto limpio</em>) or is collected by appointment.`,
      ] },
      { h: 'Water', p: [
        'Drinking water comes from the municipal water service or a company running it for the council. When you buy, put the contract and meter in your name; ask the seller for the latest bill so you know who to contact.',
        'The Axarquía faced drought and water restrictions in 2023 and 2024. Many houses outside the villages therefore have their own water tank (<em>depósito</em> or <em>aljibe</em>). With a finca, check where the water comes from and whether the connection is legal.',
      ] },
      { h: 'Internet and fibre', p: [
        'Village centres and the coast often have fibre, but it varies street by street. If you work from home, check with the providers whether your address is connected before you buy. On remote fincas, 4G/5G or satellite internet is common.',
      ] },
      { h: 'Registering with the council: the padrón', p: [
        `If you live in ${name} for (part of) the year, register at the town hall on the population register (<em>padrón municipal</em>). Bring your passport, NIE and the deeds or rental contract. You receive a certificate (<em>certificado de empadronamiento</em>) that you need for the doctor, school, registering a car on Spanish plates and residency. The council receives funding per registered resident, so it is appreciated.`,
      ] },
      ...(plus ? [{ h: 'Plusvalía when you sell', p: [
        `When you sell, the council charges plusvalía municipal on the increase in land value. In ${name} the rate is ${plus}. The amount depends on the cadastral land value and how long you owned the home; if you sell at a loss you pay nothing.`,
      ] }] : []),
      { h: 'Town hall', p: [
        `<em>Ayuntamiento de ${name}</em>${m.address ? `, ${addr}` : ''}${m.phone ? `. Phone +34 ${m.phone}` : ''}. Website and e-office: ${site(m)}.${m.addressChecked === false ? ' The address comes from an older council notice; call ahead to be sure.' : ''}`,
      ] },
      { h: 'Away from Spain? We keep an eye on the house', p: [
        `With <a href="${links.keyholding}">key holding</a> we check your home in ${name} at set times and after storms or heavy rain, and send you photos. A leak or damage? We arrange the <a href="${links.maintenance}">repair</a>. Buying? Have the house <a href="${links.survey}">surveyed</a> first.`,
      ] },
    ],
    faq: [
      { q: `How much IBI do I pay in ${name}?`, a: `The rate is ${ibi} of the cadastral value (${municipalTaxYear}). With a cadastral value of ${eur(lang, exampleCadastral)} that is ${ibiEx} a year.` },
      { q: 'Do I need to register on the padrón if I only spend a few months a year in Spain?', a: 'Anyone who normally lives in Spain must register in the municipality where they spend most of the year. If you only come for holidays, it is not compulsory. Registering does not by itself make you tax resident; that depends among other things on spending more than 183 days a year in Spain.' },
      { q: 'Who pays the IBI in the year of purchase?', a: 'Whoever owns the property on 1 January receives the bill for the whole year. Buyer and seller often agree at the notary to split it pro rata.' },
    ],
    sources: `Sources: ${municipalTaxYear} rates and revaluation year from the Spanish Ministry of Finance (<em>Consulta de información impositiva municipal</em>); address from the <em>Base de Datos General de Entidades Locales</em>; non-resident tax under Ley 35/2006 (IRPF), article 85 and additional provision 55. Checked on ${date(lang)}. Rates can change on 1 January.`,
  };
  return {
    title: `Praktisches für ${name}: IBI, Müllgebühr, Wasser und Padrón`,
    description: `Ein Haus in ${name}? Was Sie an IBI (${ibi}) zahlen, welche Steuer Nichtresidenten zahlen und wie Müll, Wasser, Internet und die Anmeldung bei der Gemeinde funktionieren.`,
    h1: `Praktisches für ${name}`,
    lead: `Laufende Kosten und Papierkram eines Hauses in ${name} auf einen Blick: Grundsteuer, Steuer für Nichtresidenten, Müll, Wasser, Internet und die Anmeldung bei der Gemeinde.`,
    factsTitle: `${name} auf einen Blick`,
    facts: [
      ['IBI Wohnhaus (urbana)', ibi],
      ['IBI Außenbereich (rústica)', ibiR],
      ['Katasterwerte revidiert', String(m.catastro)],
      ...(plus ? [['Plusvalía beim Verkauf', plus] as [string, string]] : []),
      ['Bausteuer (ICIO)', pct(lang, m.icio)],
      contactRow,
    ],
    sections: [
      { h: 'IBI: die Grundsteuer', p: [
        `Jeder Eigentümer zahlt jährlich die <em>Impuesto sobre Bienes Inmuebles</em> (IBI). In ${name} beträgt der Satz ${municipalTaxYear} <strong>${ibi}</strong> des Katasterwerts für Häuser im Ort und ${ibiR} für Land im Außenbereich. In der Axarquía liegt der Satz für Wohnhäuser zwischen ${range}.${also ? ` Er gilt auch in ${also}.` : ''}`,
        `Ein Haus mit einem Katasterwert von ${eur(lang, exampleCadastral)} zahlt in ${name} also ${ibiEx} im Jahr. Der Katasterwert steht auf Ihrem Bescheid und im Catastro und liegt meist weit unter dem Marktwert. In ${name} wurden die Werte zuletzt ${m.catastro} allgemein revidiert.`,
        'Der Bescheid kommt vom Rathaus oder von der Steuerstelle der Diputación de Málaga (Patronato de Recaudación Provincial), die für viele Gemeinden der Provinz einzieht. Lassen Sie die IBI per Lastschrift von einem spanischen Konto abbuchen, dann verpassen Sie keine Frist, wenn Sie nicht in Spanien sind.',
      ] },
      { h: 'Steuer für Nichtresidenten', p: [
        `Wohnen Sie nicht in Spanien und vermieten Sie das Haus nicht, zahlen Sie trotzdem jährlich Einkommensteuer für Nichtresidenten (<em>IRNR</em>, Formular 210). Spanien setzt ein fiktives Einkommen von ${num(lang, imp)} % des Katasterwerts an${imp === 2 ? ', weil die Werte in dieser Gemeinde vor 2012 revidiert wurden' : ', weil die Werte in dieser Gemeinde nach 2012 revidiert wurden'}. Darauf zahlen Sie 19 %, wenn Sie in der EU oder im EWR wohnen, sonst 24 %.`,
        `Bei einem Katasterwert von ${eur(lang, exampleCadastral)} sind das ${nrEu} im Jahr (EU) oder ${nrOther} (zum Beispiel Schweiz). Mehr in unserem Ratgeber zu den <a href="${links.buyCosts}">Kaufnebenkosten</a>.`,
      ] },
      { h: 'Müll', p: [
        `Für die Müllabfuhr erhebt die Gemeinde eine Gebühr (<em>tasa de basura</em>). Höhe und Einzug regelt die Steuersatzung von ${name}; manchmal kommt sie mit der Wasserrechnung, manchmal als eigener Bescheid. Hausmüll kommt in die Container an der Straße; Sperrmüll und Gartenabfälle bringen Sie zum Wertstoffhof (<em>punto limpio</em>) oder lassen sie nach Absprache abholen.`,
      ] },
      { h: 'Wasser', p: [
        'Das Trinkwasser liefert der gemeindliche Wasserdienst oder ein Unternehmen im Auftrag der Gemeinde. Beim Kauf schreiben Sie Vertrag und Zähler auf Ihren Namen um; lassen Sie sich vom Verkäufer die letzte Rechnung geben, dann wissen Sie, an wen Sie sich wenden.',
        'Die Axarquía hatte 2023 und 2024 mit Dürre und Wasserbeschränkungen zu kämpfen. Viele Häuser außerhalb der Dörfer haben deshalb einen eigenen Wassertank (<em>depósito</em> oder <em>aljibe</em>). Lassen Sie bei einer Finca prüfen, woher das Wasser kommt und ob der Anschluss legal ist.',
      ] },
      { h: 'Internet und Glasfaser', p: [
        'In den Ortskernen und an der Küste gibt es oft Glasfaser, aber das ist von Straße zu Straße verschieden. Wenn Sie von zu Hause arbeiten, fragen Sie vor dem Kauf bei den Anbietern nach, ob Ihre Adresse angeschlossen ist. Auf abgelegenen Fincas ist Internet über 4G/5G oder Satellit üblich.',
      ] },
      { h: 'Anmeldung bei der Gemeinde: das Padrón', p: [
        `Wohnen Sie (einen Teil des Jahres) in ${name}, melden Sie sich im Rathaus im Einwohnerregister (<em>padrón municipal</em>) an. Bringen Sie Reisepass, NIE und Kaufurkunde oder Mietvertrag mit. Sie erhalten eine Bescheinigung (<em>certificado de empadronamiento</em>), die Sie unter anderem für Arzt, Schule, ein Auto mit spanischem Kennzeichen und die Residencia brauchen. Die Gemeinde erhält Geld pro gemeldetem Einwohner und sieht es daher gern.`,
      ] },
      ...(plus ? [{ h: 'Plusvalía beim Verkauf', p: [
        `Beim Verkauf erhebt die Gemeinde die plusvalía municipal auf den Wertzuwachs des Bodens. In ${name} beträgt der Satz ${plus}. Der Betrag hängt vom Katasterwert des Bodens und der Besitzdauer ab; bei einem Verlust zahlen Sie nichts.`,
      ] }] : []),
      { h: 'Rathaus', p: [
        `<em>Ayuntamiento de ${name}</em>${m.address ? `, ${addr}` : ''}${m.phone ? `. Telefon +34 ${m.phone}` : ''}. Website und elektronisches Amt: ${site(m)}.${m.addressChecked === false ? ' Die Adresse stammt aus einer älteren Mitteilung der Gemeinde; rufen Sie sicherheitshalber vorher an.' : ''}`,
      ] },
      { h: 'Nicht in Spanien? Wir behalten das Haus im Blick', p: [
        `Mit der <a href="${links.keyholding}">Hausbetreuung</a> kontrollieren wir Ihr Haus in ${name} regelmäßig und nach Sturm oder Starkregen und schicken Ihnen Fotos. Ein Leck oder ein Schaden? Wir kümmern uns um die <a href="${links.maintenance}">Reparatur</a>. Sie wollen kaufen? Lassen Sie das Haus zuerst <a href="${links.survey}">begutachten</a>.`,
      ] },
    ],
    faq: [
      { q: `Wie viel IBI zahle ich in ${name}?`, a: `Der Satz beträgt ${ibi} des Katasterwerts (${municipalTaxYear}). Bei einem Katasterwert von ${eur(lang, exampleCadastral)} sind das ${ibiEx} im Jahr.` },
      { q: 'Muss ich mich im Padrón anmelden, wenn ich nur einige Monate im Jahr in Spanien bin?', a: 'Wer gewöhnlich in Spanien lebt, muss sich in der Gemeinde anmelden, in der er den größten Teil des Jahres verbringt. Kommen Sie nur für Urlaube, ist es keine Pflicht. Die Anmeldung allein macht Sie nicht steuerlich ansässig; das hängt unter anderem davon ab, ob Sie mehr als 183 Tage im Jahr in Spanien sind.' },
      { q: 'Wer zahlt die IBI im Jahr des Kaufs?', a: 'Wer am 1. Januar Eigentümer ist, erhält den Bescheid für das ganze Jahr. Käufer und Verkäufer vereinbaren beim Notar oft eine anteilige Aufteilung.' },
    ],
    sources: `Quellen: Steuersätze ${municipalTaxYear} und Revisionsjahr aus der <em>Consulta de información impositiva municipal</em> des spanischen Finanzministeriums; Adresse aus der <em>Base de Datos General de Entidades Locales</em>; Steuer für Nichtresidenten nach Ley 35/2006 (IRPF), Art. 85 und Zusatzbestimmung 55. Geprüft am ${date(lang)}. Die Sätze können sich zum 1. Januar ändern.`,
  };
}

export function municipalText(kind: MunicipalPageKind, lang: MunicipalLang, slug: string, ctx: Omit<Ctx, 'm'>): MunicipalText {
  const m = municipal[slug];
  return kind === 'permit' ? permit(lang, { ...ctx, m }) : practical(lang, { ...ctx, m });
}
