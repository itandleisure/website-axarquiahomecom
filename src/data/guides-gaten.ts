// Gidsen voor zoekwoorden met volume waar de site nog geen pagina voor had (analyse 24 november 2026).
// In nl, en en de staan de gidsen op dezelfde positie (achter guides-wonen.ts). Zweeds staat in guides-sv.ts (met `of`).
//
// Zoekvolumes per maand (DataForSEO, Google, november 2026):
// - nie nummer aanvragen / nie nummer: NL 1.000 + 720; nie number spain: UK 1.300; nie nummer spanien: DE 880
// - appartement kopen spanje: NL 1.900; buying an apartment in spain: UK 170; wohnung kaufen spanien: DE 1.600
// - inheritance tax spain: UK 590 (+ spanish will 260); erbschaftssteuer spanien: DE 260; erfbelasting spanje: NL klein
// - krankenversicherung spanien: DE 480; zorgverzekering spanje: NL 210; health insurance spain: UK 880
// - rente in spanien: DE 320; pensioen in spanje: NL 170; retiring to spain: UK 1.000
// - nederlandse makelaar spanje: NL 390; immobilienmakler spanien: DE 210; estate agents spain: UK 320
// Alleen Engels (achteraan in guidesEn, zonder vertaling op dezelfde positie):
// - non lucrative visa spain: UK 2.400; digital nomad visa spain: UK 1.900
import type { GuideMeta } from './guides';

const published = '2026-11-24';

export const gatenNl: GuideMeta[] = [
  {
    slug: 'nie-nummer-aanvragen-spanje',
    title: 'NIE-nummer aanvragen: vanuit Nederland, België of in Spanje',
    seoTitle: 'NIE-nummer aanvragen in 2026: stappen, stukken en kosten',
    short: 'NIE-nummer aanvragen',
    description: 'Zo vraagt u een NIE-nummer aan: bij het consulaat in Amsterdam of Brussel, bij de politie in Spanje of met een volmacht. Met formulier EX-15, stukken en kosten.',
    lead: 'Zonder NIE-nummer koopt u geen huis, opent u geen bankrekening en sluit u geen stroomcontract af. Gelukkig is het aanvragen niet moeilijk als u weet waar u moet zijn.',
    keyword: 'nie nummer aanvragen',
    minutes: 7,
    published,
  },
  {
    slug: 'appartement-kopen-spanje',
    title: 'Appartement kopen in Spanje: vereniging van eigenaars, kosten en valkuilen',
    seoTitle: 'Appartement kopen in Spanje: kosten, comunidad en tips',
    short: 'Appartement kopen',
    description: 'Een appartement kopen in Spanje? Wat de vereniging van eigenaars betekent, welke stukken u opvraagt, wat het kost en of u mag verhuren aan vakantiegasten.',
    lead: 'Een appartement aan de kust is voor veel Nederlanders en Belgen de makkelijkste stap naar een eigen plek in Spanje. Maar u koopt meer dan vier muren: ook een stuk van het gebouw en een stem in de vereniging van eigenaars.',
    keyword: 'appartement kopen spanje',
    minutes: 8,
    published,
  },
  {
    slug: 'erfbelasting-testament-spanje',
    title: 'Erfbelasting en testament in Spanje: wat uw erfgenamen betalen',
    seoTitle: 'Erfbelasting Spanje en een Spaans testament (2026)',
    short: 'Erfbelasting en testament',
    description: 'Erfbelasting in Spanje: wat Andalusië heft, hoe dat samengaat met Nederland of België, waarom een Spaans testament helpt en wat uw erfgenamen doen.',
    lead: 'Een huis in Spanje valt onder Spaanse erfbelasting, ook als u in Nederland of België woont. In Andalusië betalen partner en kinderen bijna niets, maar alleen als het goed geregeld is.',
    keyword: 'erfbelasting spanje',
    minutes: 9,
    published,
  },
  {
    slug: 'zorgverzekering-spanje',
    title: 'Zorgverzekering in Spanje: publieke zorg, S1, convenio especial of privé',
    seoTitle: 'Zorgverzekering in Spanje: zo bent u goed verzekerd',
    short: 'Zorgverzekering',
    description: 'Welke zorgverzekering hebt u nodig als u in Spanje woont of overwintert? Publieke zorg via werk of S1, de convenio especial, privéverzekering en de EHIC.',
    lead: 'Of u nu overwintert of voorgoed verhuist: uw zorgverzekering is een van de eerste dingen die u moet regelen. Welke route voor u geldt, hangt af van of u werkt, gepensioneerd bent of nog geen van beide.',
    keyword: 'zorgverzekering spanje',
    minutes: 8,
    published,
  },
  {
    slug: 'pensioen-in-spanje',
    title: 'Met pensioen in Spanje: AOW, belasting, zorg en wonen',
    seoTitle: 'Pensioen in Spanje: AOW, belasting en zorg (2026)',
    short: 'Pensioen in Spanje',
    description: 'Met pensioen naar Spanje? Wat er gebeurt met uw AOW en pensioen, waar u belasting betaalt, hoe u verzekerd bent voor zorg en waar u op let bij het wonen.',
    lead: 'Steeds meer Nederlanders en Belgen brengen hun pensioen door in de Spaanse zon. Uw AOW en pensioen gaan mee, maar belasting, zorg en de keuze van uw huis vragen voorbereiding.',
    keyword: 'pensioen in spanje',
    minutes: 9,
    published,
  },
  {
    slug: 'makelaar-spanje-kiezen',
    title: 'Een makelaar in Spanje kiezen: zo werkt het en hier let u op',
    seoTitle: 'Nederlandse makelaar in Spanje: zo kiest u goed',
    short: 'Makelaar kiezen',
    description: 'Hoe werkt een makelaar in Spanje, wie betaalt de courtage en waar let u op bij een Nederlandse of Belgische makelaar? Met de vragen die u vooraf stelt.',
    lead: 'In Spanje is makelaar geen beschermd beroep en werkt de makelaar meestal voor de verkoper. Dat hoeft geen probleem te zijn, zolang u weet hoe het werkt en wat u zelf laat controleren.',
    keyword: 'nederlandse makelaar spanje',
    minutes: 7,
    published,
  },
];

export const gatenEn: GuideMeta[] = [
  {
    slug: 'nie-number-spain',
    title: 'NIE number in Spain: how to apply from the UK or in Spain',
    seoTitle: 'How to get an NIE number in Spain (2026 guide)',
    short: 'NIE number',
    description: 'How to get an NIE number in Spain: at the Spanish consulate in London or Edinburgh, at a police station in Spain or through a lawyer. Forms, documents and fees.',
    lead: 'You cannot buy a house, open a bank account or sign up for electricity in Spain without an NIE number. Applying is not hard once you know where to go and what to bring.',
    keyword: 'nie number spain',
    minutes: 7,
    published,
  },
  {
    slug: 'buying-an-apartment-in-spain',
    title: 'Buying an apartment in Spain: community fees, costs and pitfalls',
    seoTitle: 'Buying an apartment in Spain: costs, community and tips',
    short: 'Buying an apartment',
    description: 'Buying an apartment in Spain? What the community of owners means, which documents to ask for, what it costs and whether you can let it to holidaymakers.',
    lead: 'An apartment on the coast is the easiest way for many Britons to own a place in Spain. But you buy more than four walls: you also buy a share of the building and a vote in the community of owners.',
    keyword: 'buying an apartment in spain',
    minutes: 8,
    published,
  },
  {
    slug: 'inheritance-tax-spain',
    title: 'Inheritance tax in Spain and making a Spanish will',
    seoTitle: 'Spanish inheritance tax and wills for British owners',
    short: 'Inheritance tax and wills',
    description: 'Spanish inheritance tax for British owners: what Andalucía charges, how it fits with UK inheritance tax, why a Spanish will helps and what your heirs must do.',
    lead: 'A house in Spain falls under Spanish inheritance tax, even if you live in the UK. In Andalucía, spouses and children pay almost nothing, but only if things are set up properly.',
    keyword: 'inheritance tax spain',
    minutes: 9,
    published,
  },
  {
    slug: 'health-insurance-spain',
    title: 'Health insurance in Spain: public healthcare, S1, convenio especial or private',
    seoTitle: 'Health insurance in Spain for British expats (2026)',
    short: 'Health insurance',
    description: 'Which health insurance do you need in Spain? Public healthcare through work or an S1, the convenio especial, private cover for visas and the GHIC for visits.',
    lead: 'Whether you winter in Spain or move for good, healthcare is one of the first things to sort out. Which route applies depends on whether you work, receive a UK State Pension or neither.',
    keyword: 'health insurance spain',
    minutes: 8,
    published,
  },
  {
    slug: 'retiring-to-spain',
    title: 'Retiring to Spain from the UK: visas, pensions, tax and healthcare',
    seoTitle: 'Retiring to Spain from the UK: the 2026 guide',
    short: 'Retiring to Spain',
    description: 'Retiring to Spain after Brexit: the non-lucrative visa, your State Pension and private pensions, where you pay tax, healthcare with an S1 and choosing a home.',
    lead: 'Spain is still the favourite place for British retirees. Since Brexit you need a visa to stay longer than 90 days in 180, but with the right paperwork your pension, healthcare and new home are well within reach.',
    keyword: 'retiring to spain',
    minutes: 10,
    published,
  },
  {
    slug: 'estate-agents-spain',
    title: 'Estate agents in Spain: how they work and how to choose one',
    seoTitle: 'Estate agents in Spain: how to choose a good one',
    short: 'Estate agents',
    description: 'How estate agents in Spain work, who pays the commission and what to check before you trust an English-speaking agent. With the questions to ask first.',
    lead: 'In Spain, anyone can call themselves an estate agent, and the agent usually works for the seller. That need not be a problem, as long as you know how it works and what to check yourself.',
    keyword: 'estate agents spain',
    minutes: 7,
    published,
  },
];

export const gatenDe: GuideMeta[] = [
  {
    slug: 'nie-nummer-spanien',
    title: 'NIE-Nummer beantragen: von Deutschland aus oder in Spanien',
    seoTitle: 'NIE-Nummer Spanien beantragen: Ablauf und Kosten 2026',
    short: 'NIE-Nummer',
    description: 'So beantragen Sie die NIE-Nummer: beim spanischen Konsulat, bei der Polizei in Spanien oder per Vollmacht. Mit Formular EX-15, Unterlagen und Kosten.',
    lead: 'Ohne NIE-Nummer kaufen Sie in Spanien kein Haus, eröffnen kein Bankkonto und schließen keinen Stromvertrag ab. Der Antrag ist nicht schwer, wenn Sie wissen, wohin Sie gehen müssen.',
    keyword: 'nie nummer spanien',
    minutes: 7,
    published,
  },
  {
    slug: 'wohnung-kaufen-spanien',
    title: 'Wohnung kaufen in Spanien: Eigentümergemeinschaft, Kosten und Fallen',
    seoTitle: 'Wohnung kaufen in Spanien: Kosten, Comunidad und Tipps',
    short: 'Wohnung kaufen',
    description: 'Eine Wohnung in Spanien kaufen? Was die Eigentümergemeinschaft bedeutet, welche Unterlagen Sie anfordern, was es kostet und ob Sie an Urlauber vermieten dürfen.',
    lead: 'Eine Wohnung an der Küste ist für viele Deutsche der einfachste Weg zu einem eigenen Platz in Spanien. Sie kaufen aber mehr als vier Wände: auch einen Anteil am Gebäude und eine Stimme in der Eigentümergemeinschaft.',
    keyword: 'wohnung kaufen spanien',
    minutes: 8,
    published,
  },
  {
    slug: 'erbschaftssteuer-spanien',
    title: 'Erbschaftssteuer und Testament in Spanien: was Ihre Erben zahlen',
    seoTitle: 'Erbschaftssteuer Spanien und spanisches Testament',
    short: 'Erbschaftssteuer und Testament',
    description: 'Ein Haus in Spanien und die Erbschaftssteuer: was Andalusien verlangt, wie das mit der deutschen Steuer zusammenpasst, warum ein spanisches Testament hilft.',
    lead: 'Ein Haus in Spanien unterliegt der spanischen Erbschaftssteuer, auch wenn Sie in Deutschland wohnen. In Andalusien zahlen Ehepartner und Kinder fast nichts, aber nur, wenn alles richtig geregelt ist.',
    keyword: 'erbschaftssteuer spanien',
    minutes: 9,
    published,
  },
  {
    slug: 'krankenversicherung-spanien',
    title: 'Krankenversicherung in Spanien: öffentlich, S1, Convenio especial oder privat',
    seoTitle: 'Krankenversicherung in Spanien: so sind Sie versichert',
    short: 'Krankenversicherung',
    description: 'Welche Krankenversicherung brauchen Sie in Spanien? Öffentliche Versorgung über Arbeit oder S1, Convenio especial, Privatversicherung und die EHIC.',
    lead: 'Ob Sie überwintern oder ganz umziehen: die Krankenversicherung gehört zu den ersten Dingen, die Sie klären müssen. Welcher Weg für Sie gilt, hängt davon ab, ob Sie arbeiten, Rente beziehen oder keines von beiden.',
    keyword: 'krankenversicherung spanien',
    minutes: 8,
    published,
  },
  {
    slug: 'rente-in-spanien',
    title: 'Rente in Spanien: Auszahlung, Steuern, Krankenversicherung und Wohnen',
    seoTitle: 'Rente in Spanien: Steuern, Versicherung und Wohnen',
    short: 'Rente in Spanien',
    description: 'Ihre deutsche Rente in Spanien: wie sie ausgezahlt wird, wo Sie Steuern zahlen, wie Sie krankenversichert sind und worauf Sie beim Wohnen im Alter achten.',
    lead: 'Immer mehr Deutsche verbringen ihren Ruhestand in der spanischen Sonne. Ihre Rente kommt mit, aber Steuern, Krankenversicherung und die Wahl des Hauses wollen gut vorbereitet sein.',
    keyword: 'rente in spanien',
    minutes: 9,
    published,
  },
  {
    slug: 'immobilienmakler-spanien',
    title: 'Immobilienmakler in Spanien: so arbeiten sie und so wählen Sie gut',
    seoTitle: 'Immobilienmakler in Spanien: worauf Sie achten sollten',
    short: 'Makler wählen',
    description: 'Wie arbeitet ein Immobilienmakler in Spanien, wer zahlt die Provision und worauf achten Sie bei einem deutschen Makler? Mit den Fragen, die Sie vorher stellen.',
    lead: 'In Spanien ist Makler kein geschützter Beruf, und der Makler arbeitet meist für den Verkäufer. Das muss kein Problem sein, solange Sie wissen, wie es läuft und was Sie selbst prüfen lassen.',
    keyword: 'immobilienmakler spanien',
    minutes: 7,
    published,
  },
];

/** Alleen Engels: komt achteraan in de Engelse lijst, zodat de posities van nl, en en de gelijk blijven. */
export const gatenEnOnly: GuideMeta[] = [
  {
    slug: 'non-lucrative-visa-spain',
    title: 'Spain’s non-lucrative visa and digital nomad visa: which one fits you?',
    seoTitle: 'Non-lucrative visa Spain 2026: income, steps, costs',
    short: 'Non-lucrative visa',
    description: 'Spain’s non-lucrative visa and digital nomad visa for Britons: the income you need, health insurance, documents, the 90/180-day rule and how to apply.',
    lead: 'Since Brexit, Britons can stay in Spain for 90 days in every 180 without a visa. To stay longer, most retirees use the non-lucrative visa and remote workers the digital nomad visa.',
    keyword: 'non lucrative visa spain',
    minutes: 9,
    published,
  },
];
