// Onderwerp-clusters ("mini-sites"): per onderwerp één hoofdpagina met alle gidsen,
// kosten-, probleem- en zelf-doen-pagina's die erbij horen.
//
// - Op de hoofdpagina toont <ClusterLinks> automatisch het blok "Alles over …".
// - Op elke pagina uit het cluster toont hij een blok terug naar de hoofdpagina, met
//   de checklist, de rekentool en andere pagina's uit hetzelfde onderwerp.
// - Gidsen tonen onder "Lees ook" eerst gidsen uit hetzelfde cluster.
//
// Leden staan als Nederlands adres. De vertalingen worden automatisch opgezocht
// (src/i18n.ts routes en src/data/topics); bestaat een pagina niet in een taal, dan
// valt hij daar gewoon weg. Een pagina mag in meer clusters staan: het eerste cluster
// waarin hij staat, is zijn "eigen" cluster voor de link terug.
// Nieuwe gids of kostenpagina? Zet het NL-adres hier bij het juiste onderwerp.
import { alternatesFor, langs, services, type Lang } from '../i18n';
import { guidesBy, guideHref, type GuideMeta } from './guides';
import { topics, topicHref, topicAlternates, topicBase, topicUi, type TopicKind, type TopicLang } from './topics';
import { checklists, type ChecklistId } from './checklists';
import { calcPath } from './calculator';

export type ClusterId = 'renovatie' | 'zwembad' | 'sleutelbeheer' | 'onderhoud' | 'kopen' | 'verkopen' | 'emigreren' | 'energie';

type Tx = Partial<Record<Lang, string>>;

export interface Cluster {
  id: ClusterId;
  /** Onderwerp, zoals in "Alles over …" */
  name: Tx;
  /** Hoofdpagina (NL-adres). Extra hoofdpagina's (zoals loodgieter) tonen hetzelfde blok. */
  hub: string;
  extraHubs?: string[];
  /** Eigen hoofdpagina's die niet in src/i18n.ts routes staan (nieuwe clusterpagina's) */
  hubPaths?: Tx;
  /** Korte omschrijving van zo'n eigen hoofdpagina, voor het blok terug */
  hubText?: Tx;
  checklist?: ChecklistId;
  /** Klus in de rekentool (src/data/calculator.ts) */
  calc?: string;
  /** Dienst die in het aanvraagformulier wordt voorgekozen */
  dienst?: string;
  members: string[];
}

const g = (s: string) => `/nl/gidsen/${s}/`;
const k = (s: string) => `/nl/kosten/${s}/`;
const p = (s: string) => `/nl/problemen/${s}/`;
const z = (s: string) => `/nl/zelf-doen/${s}/`;

// Volgorde telt: een pagina hoort bij het eerste cluster waarin hij staat.
export const clusters: Cluster[] = [
  {
    id: 'kopen',
    name: { nl: 'huis of finca kopen', en: 'buying a house or finca', de: 'Haus oder Finca kaufen', sv: 'köpa hus eller finca', es: 'comprar casa o finca' },
    hub: '/nl/aankoopkeuring/',
    checklist: 'kopen',
    dienst: 'aankoopkeuring',
    members: [
      g('huis-kopen-in-spanje'), g('finca-kopen-in-spanje'), g('kosten-koper-spanje'), g('huis-kopen-malaga-andalusie'),
      g('finca-appartement-of-dorpshuis'), g('afo-legaliseren-andalusie'), g('toegangsweg-finca-spanje'), '/nl/toegangsweg/',
      g('huis-flippen-spanje'), g('appartement-kopen-spanje'), g('nie-nummer-aanvragen-spanje'), g('makelaar-spanje-kiezen'),
      g('erfbelasting-testament-spanje'), '/nl/checklist-finca-kopen/',
    ],
  },
  {
    id: 'verkopen',
    name: { nl: 'verkopen en verhuren', en: 'selling and renting out', de: 'Verkaufen und Vermieten', sv: 'sälja och hyra ut', es: 'vender y alquilar' },
    hub: '/nl/verhuurbeheer/',
    checklist: 'verkopen',
    dienst: 'verhuurbeheer',
    members: [g('huis-verkopen-spanje'), g('woning-verhuren-spanje'), '/nl/checklist-huis-verkopen-verhuren/'],
  },
  {
    id: 'sleutelbeheer',
    name: { nl: 'sleutelbeheer en een leeg huis', en: 'key holding and an empty house', de: 'Hausbetreuung und ein leeres Haus', sv: 'tillsyn av ett tomt hus', es: 'gestión de llaves y casa vacía' },
    hub: '/nl/sleutelbeheer/',
    checklist: 'onderhoud',
    dienst: 'sleutelbeheer',
    members: [
      g('huis-winterklaar-spanje'), g('beveiliging-huis-spanje'), p('inbraak-en-kraak-leeg-huis'), g('verzekering-huis-spanje'),
      g('overwinteren-in-spanje'),
    ],
  },
  {
    id: 'zwembad',
    name: { nl: 'het zwembad', en: 'swimming pools', de: 'den Pool', sv: 'poolen', es: 'la piscina' },
    hub: '/nl/zwembad/',
    checklist: 'onderhoud',
    calc: 'zwembad',
    dienst: 'zwembad',
    members: [k('zwembad-laten-bouwen'), g('zwembad-onderhoud-spanje'), z('zwembad-zelf-aanleggen')],
  },
  {
    id: 'energie',
    name: { nl: 'verduurzamen en energie', en: 'energy saving and solar', de: 'Energiesparen und Solar', sv: 'energi och solel', es: 'energía y ahorro' },
    hub: '/nl/verduurzamen/',
    hubPaths: { nl: '/nl/verduurzamen/', en: '/en/energy-saving/', de: '/de/energiesparen/', sv: '/sv/energi-och-solel/' },
    hubText: {
      nl: 'Zonnepanelen, thuisbatterij, airco en warmtepomp, isolatie en subsidies: kosten, regels en tips op één plek.',
      en: 'Solar panels, home batteries, air con and heat pumps, insulation and grants: costs, rules and tips in one place.',
      de: 'Photovoltaik, Batteriespeicher, Klimaanlage und Wärmepumpe, Dämmung und Förderung: Kosten, Regeln und Tipps an einem Ort.',
      sv: 'Solceller, batteri, luftkonditionering och värmepump, isolering och bidrag: kostnader, regler och tips på ett ställe.',
    },
    checklist: 'renoveren',
    calc: 'zonnepanelen',
    dienst: 'energie',
    members: [
      k('zonnepanelen'), k('thuisbatterij'), g('virtuele-batterij-spanje'), k('airco-en-warmtepomp'), g('verwarmen-en-koelen-spanje'),
      g('huis-isoleren-spanje'), g('zonwering-rolluiken-horren-spanje'), k('slim-energiebeheer'), k('laadpaal'),
      g('subsidie-verduurzamen-spanje'), g('energielabel-spanje'), g('energieleveranciers-spanje-vergelijken'), g('off-grid-wonen-spanje'),
    ],
  },
  {
    id: 'renovatie',
    name: { nl: 'renoveren en verbouwen', en: 'renovating and building', de: 'Renovieren und Umbauen', sv: 'renovera och bygga om', es: 'reformar y construir' },
    hub: '/nl/renovatie/',
    checklist: 'renoveren',
    calc: 'woning',
    dienst: 'renovatie',
    members: [
      '/nl/nederlandse-aannemer-axarquia/', g('kosten-huis-renoveren-spanje'), '/nl/kosten/', k('rekentool'), g('dorpshuis-renoveren-spanje'), g('verbouwen-op-afstand-spanje'),
      g('vergunning-verbouwen-andalusie'), g('aannemer-costa-del-sol'), g('renovatie-factuur-of-cash-spanje'),
      g('3d-ontwerp-verbouwing'), k('badkamer-renoveren'), g('badkamer-douche-of-bad'), k('keuken-renoveren'), k('buitenkeuken'),
      k('elektra-vernieuwen'), g('leidingen-en-boiler-vervangen-spanje'), k('ramen-en-kozijnen'), k('dak-en-dakterras'),
      g('asbest-uralita-dak-spanje'), k('schoorsteen-en-houtkachel'), g('vloer-kiezen-spanje'), g('levensloopbestendig-maken-spanje'),
      g('bouwen-op-eigen-grond-spanje'), g('huis-isoleren-spanje'), '/nl/checklist-renoveren/',
    ],
  },
  {
    id: 'onderhoud',
    name: { nl: 'onderhoud en reparaties', en: 'maintenance and repairs', de: 'Instandhaltung und Reparaturen', sv: 'underhåll och reparationer', es: 'mantenimiento y reparaciones' },
    hub: '/nl/onderhoud/',
    extraHubs: ['/nl/loodgieter/'],
    checklist: 'onderhoud',
    dienst: 'onderhoud',
    members: [
      '/nl/problemen/', p('daklekkage'), p('vocht-en-schimmel'), p('scheuren-in-muren'), g('waterlekkage-spanje'),
      p('geen-water-of-waterdruk'), p('beerput-vol-of-stinkt'), k('watertank-en-beerput'), p('legionella'), g('waterfilter-spanje'),
      p('stroom-valt-uit'), p('tocht-en-condens-bij-ramen'), p('schoorsteen-rookt-terug'), p('wateroverlast-en-keermuur'),
      k('keermuur-en-afwatering'), p('termieten'), g('ongedierte-bestrijden-spanje'), g('tuin-en-perceel-spanje'),
      g('gevel-witten-schilderen-spanje'), '/nl/zelf-doen/', z('dak-zelf-repareren-of-vervangen'), z('gevel-witten-met-kalk'),
      z('ramen-zelf-vervangen'), z('watertank-plaatsen-en-aansluiten'), z('houtkachel-en-schoorsteen-plaatsen'),
      '/nl/checklist-huis-onderhouden/',
    ],
  },
  {
    id: 'emigreren',
    name: { nl: 'emigreren en wonen in Spanje', en: 'moving to and living in Spain', de: 'Auswandern und Leben in Spanien', sv: 'flytta till och bo i Spanien', es: 'mudarse y vivir en España' },
    hub: '/nl/emigreren/',
    hubPaths: { nl: '/nl/emigreren/', en: '/en/moving-to-spain/', de: '/de/auswandern/', sv: '/sv/utvandra-till-spanien/' },
    hubText: {
      nl: 'Stappenplan, wonen in de Axarquía, belasting, verzekering, huisdieren en de gratis checklist voor uw verhuizing.',
      en: 'Step-by-step plan, living in the Axarquía, tax, insurance, pets and the free checklist for your move.',
      de: 'Schritt-für-Schritt-Plan, Leben in der Axarquía, Steuern, Versicherung, Haustiere und die kostenlose Checkliste für Ihren Umzug.',
      sv: 'Steg för steg, att bo i Axarquía, skatt, försäkring, husdjur och den kostnadsfria checklistan för din flytt.',
    },
    checklist: 'emigreren',
    members: [
      g('emigreren-naar-spanje'), '/nl/wonen/', g('wonen-in-spanje'), g('overwinteren-in-spanje'), g('met-huisdier-naar-spanje'),
      g('pensioen-in-spanje'), g('zorgverzekering-spanje'),
      g('belastingkalender-spanje'), g('autoverzekering-spanje'), g('off-grid-wonen-spanje'), '/nl/plaatsen/',
      '/nl/checklist-emigreren-spanje/',
    ],
  },
];

// ---------------------------------------------------------------------------
// Vertalen en opzoeken

const topicDirs: Record<string, TopicKind> = { kosten: 'costs', problemen: 'problems', 'zelf-doen': 'diy' };

/** Het adres van een NL-pagina in een andere taal, of undefined als die vertaling niet bestaat. */
export function translatePath(nlPath: string, lang: Lang): string | undefined {
  for (const c of clusters) if (c.hubPaths && c.hubPaths.nl === nlPath) return c.hubPaths[lang];
  if (lang === 'nl') return nlPath;
  const alt = alternatesFor(nlPath)[lang];
  if (alt) return alt;
  const m = nlPath.match(/^\/nl\/(kosten|problemen|zelf-doen)\/(?:([^/]+)\/)?$/);
  if (!m) return undefined;
  const kind = topicDirs[m[1]];
  if (!(lang in topicBase[kind])) return undefined;
  const tl = lang as TopicLang;
  if (!m[2]) return topics[kind][tl].length ? topicBase[kind][tl] : undefined;
  if (m[2] === 'rekentool') return calcPath[tl];
  const t = topics[kind].nl.find((x) => x.slug === m[2]);
  return t ? topicAlternates(kind, t.key)[tl] : undefined;
}

export type PageKind = 'guide' | 'costs' | 'problems' | 'diy' | 'page';
export interface PageInfo { href: string; title: string; text: string; kind: PageKind }

const hubText: Record<TopicKind, Tx> = {
  costs: {
    nl: 'Prijsindicaties per onderdeel, met rekenvoorbeelden en bronnen.',
    en: 'Guide prices per job, with worked examples and sources.',
    de: 'Richtpreise pro Gewerk, mit Rechenbeispielen und Quellen.',
    sv: 'Riktpriser per arbete, med räkneexempel och källor.',
  },
  problems: {
    nl: 'Vocht, lekkage, scheuren en meer: oorzaken, eerste stappen en kosten.',
    en: 'Damp, leaks, cracks and more: causes, first steps and costs.',
    de: 'Feuchtigkeit, Lecks, Risse und mehr: Ursachen, erste Schritte und Kosten.',
    sv: 'Fukt, läckor, sprickor och mer: orsaker, första åtgärder och kostnader.',
  },
  diy: {
    nl: 'Klussen die u zelf kunt doen, en wanneer u beter een vakman belt.',
    en: 'Jobs you can do yourself, and when to call in a professional.',
    de: 'Arbeiten, die Sie selbst machen können, und wann besser ein Fachmann kommt.',
    sv: 'Arbeten du kan göra själv, och när det är bättre att ringa en hantverkare.',
  },
};

const calcInfo: Tx = { nl: 'Rekentool: bereken uw prijs', en: 'Calculator: work out your price', de: 'Kostenrechner: Preis berechnen', sv: 'Kalkylator: räkna ut ditt pris' };
const calcText: Tx = {
  nl: 'Kies wat u wilt laten doen en zie direct wat het ongeveer kost.',
  en: 'Choose what you want done and see straight away roughly what it costs.',
  de: 'Wählen Sie, was gemacht werden soll, und sehen Sie sofort die ungefähren Kosten.',
  sv: 'Välj vad du vill få gjort och se direkt ungefär vad det kostar.',
};

const extraPages: Record<string, { title: Tx; text: Tx }> = {
  '/nl/nederlandse-aannemer-axarquia/': {
    title: { nl: 'Nederlandse aannemer in de Axarquía', en: 'English-speaking builders in the Axarquía' },
    text: {
      nl: 'Renovatie en verbouwing in Nerja, Torrox, Cómpeta en omgeving, met een Nederlandstalig team.',
      en: 'Renovation and building work in Nerja, Torrox, Cómpeta and nearby, with an English-speaking team.',
    },
  },
  '/nl/plaatsen/': {
    title: { nl: 'Plaatsen in de Axarquía', en: 'Places in the Axarquía', de: 'Orte in der Axarquía', sv: 'Orter i Axarquía' },
    text: {
      nl: 'Alle dorpen en kustplaatsen: wonen, prijzen, zien en doen.',
      en: 'Every village and coastal town: living, prices and things to do.',
      de: 'Alle Dörfer und Küstenorte: Wohnen, Preise und Sehenswertes.',
      sv: 'Alla byar och kustorter: bo, priser och sevärdheter.',
    },
  },
  '/nl/toegangsweg/': {
    title: { nl: 'Toegangsweg aanleggen of herstellen', en: 'Building or repairing an access road', de: 'Zufahrtsweg bauen oder sanieren', sv: 'Bygga eller laga tillfartsväg', es: 'Construir o reparar un camino de acceso' },
    text: {
      nl: 'Een onverharde weg naar uw finca verharden of herstellen, met afwatering.',
      en: 'Surfacing or repairing the track to your finca, including drainage.',
      de: 'Den Weg zu Ihrer Finca befestigen oder sanieren, mit Entwässerung.',
      sv: 'Belägga eller laga vägen till din finca, med avvattning.',
      es: 'Asfaltar o reparar el camino a su finca, con drenaje.',
    },
  },
};

const index = new Map<string, PageInfo>();
for (const l of langs) {
  for (const x of guidesBy[l] as GuideMeta[]) index.set(guideHref(l, x), { href: guideHref(l, x), title: x.title, text: x.description, kind: 'guide' });
  for (const s of services[l]) index.set(s.href, { href: s.href, title: s.title, text: s.text, kind: 'page' });
  for (const id of Object.keys(checklists) as ChecklistId[]) {
    const c = checklists[id][l];
    if (c) index.set(c.path, { href: c.path, title: c.title, text: c.page.description, kind: 'page' });
  }
}
for (const kind of Object.keys(topics) as TopicKind[]) {
  for (const l of Object.keys(topics[kind]) as TopicLang[]) {
    for (const t of topics[kind][l]) index.set(topicHref(kind, l, t), { href: topicHref(kind, l, t), title: t.title, text: t.description, kind });
    if (topics[kind][l].length) index.set(topicBase[kind][l], { href: topicBase[kind][l], title: topicUi[l].hub[kind], text: hubText[kind][l] ?? '', kind });
  }
}
for (const l of Object.keys(calcPath) as TopicLang[]) index.set(calcPath[l], { href: calcPath[l], title: calcInfo[l]!, text: calcText[l]!, kind: 'costs' });
for (const [nl, e] of Object.entries(extraPages)) {
  for (const l of langs) {
    const href = l === 'nl' ? nl : alternatesFor(nl)[l];
    if (href && e.title[l]) index.set(href, { href, title: e.title[l]!, text: e.text[l] ?? '', kind: 'page' });
  }
}

// Eigen hoofdpagina's van clusters (verduurzamen, emigreren)
const hubTitle: Tx = { nl: 'Alles over', en: 'All about', de: 'Alles über', sv: 'Allt om' };
for (const c of clusters) {
  for (const l of langs) {
    const href = c.hubPaths?.[l];
    if (href) index.set(href, { href, title: `${hubTitle[l] ?? ''} ${c.name[l]}`.trim(), text: c.hubText?.[l] ?? '', kind: 'page' });
  }
}

/** Titel en korte tekst van een pagina (in de taal van het adres). */
export function pageInfo(href: string, _lang?: Lang): PageInfo | undefined {
  return index.get(href);
}

/** Alle pagina's van een cluster in een taal (alleen pagina's die in die taal bestaan). */
export function clusterMembers(c: Cluster, lang: Lang): PageInfo[] {
  const seen = new Set<string>();
  return c.members.flatMap((m) => {
    const href = translatePath(m, lang);
    const info = href ? index.get(href) : undefined;
    if (!info || seen.has(info.href)) return [];
    seen.add(info.href);
    return [info];
  });
}

/** Hoofdpagina van een cluster in een taal */
export const clusterHub = (c: Cluster, lang: Lang) => translatePath(c.hub, lang);

/** Het cluster waarvan dit adres de hoofdpagina is */
export function clusterForHub(path: string, lang: Lang): Cluster | undefined {
  return clusters.find((c) => [c.hub, ...(c.extraHubs ?? [])].some((h) => translatePath(h, lang) === path));
}

/** Het eigen cluster van een pagina. Deelpagina's van een gids vallen onder het cluster van hun hoofdgids. */
export function clusterForPage(path: string, lang: Lang): Cluster | undefined {
  const parentSlug = (guidesBy[lang] as GuideMeta[]).find((x) => guideHref(lang, x) === path)?.parent;
  const parent = parentSlug ? (guidesBy[lang] as GuideMeta[]).find((x) => x.slug === parentSlug) : undefined;
  const candidates = [path, ...(parent ? [guideHref(lang, parent)] : [])];
  for (const cand of candidates) {
    const c = clusters.find((c) => c.members.some((m) => translatePath(m, lang) === cand));
    if (c) return c;
  }
  return undefined;
}

/** Checklist die bij een pagina hoort via haar cluster (voor kosten-, probleem- en zelf-doen-pagina's). */
export function clusterChecklist(path: string, lang: Lang): ChecklistId | undefined {
  const c = clusterForPage(path, lang);
  return c?.checklist && checklists[c.checklist][lang] ? c.checklist : undefined;
}
