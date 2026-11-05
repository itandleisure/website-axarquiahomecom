// Kosten- en probleempagina's: alle inhoud bij elkaar en hulpfuncties voor adressen.
import { topicBase, topicLangs, type Topic, type TopicKind, type TopicLang } from './types';
import { costsNl } from './costs-nl';
import { costsEn } from './costs-en';
import { costsDe } from './costs-de';
import { problemsNl } from './problems-nl';
import { problemsEn } from './problems-en';
import { problemsDe } from './problems-de';

export * from './types';

export const topics: Record<TopicKind, Record<TopicLang, Topic[]>> = {
  costs: { nl: costsNl, en: costsEn, de: costsDe },
  problems: { nl: problemsNl, en: problemsEn, de: problemsDe },
};

export const topicHref = (kind: TopicKind, lang: TopicLang, t: Topic) => `${topicBase[kind][lang]}${t.slug}/`;

/** Zoek een pagina op `kind:key`, bijv. 'costs:badkamer' */
export function topicByRef(ref: string, lang: TopicLang): { kind: TopicKind; topic: Topic } | undefined {
  const [kind, key] = ref.split(':') as [TopicKind, string];
  const topic = topics[kind]?.[lang].find((t) => t.key === key);
  return topic ? { kind, topic } : undefined;
}

/** Vertalingen van een pagina (voor hreflang en de taalwissel) */
export function topicAlternates(kind: TopicKind, key: string): Partial<Record<TopicLang, string>> {
  return Object.fromEntries(
    topicLangs.flatMap((l) => {
      const t = topics[kind][l].find((x) => x.key === key);
      return t ? [[l, topicHref(kind, l, t)]] : [];
    }),
  );
}

export const hubAlternates = (kind: TopicKind) => ({ ...topicBase[kind] });

/** Alle adressen, voor de sitemap */
export const topicPaths = (Object.keys(topics) as TopicKind[]).flatMap((kind) =>
  topicLangs.flatMap((l) => topics[kind][l].map((t) => topicHref(kind, l, t))),
);

/** getStaticPaths voor de dynamische routes */
export const topicStaticPaths = (kind: TopicKind, lang: TopicLang) =>
  topics[kind][lang].map((t) => ({ params: { slug: t.slug } }));
