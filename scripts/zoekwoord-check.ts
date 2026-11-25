// Zoekwoordcontrole op de gebouwde site (dist/). Draai na `npm run build` met `npm run zoekwoorden`.
// Per indexeerbare pagina: welk hoofdzoekwoord (uit de gidsen/topics of src/data/zoekwoorden.ts),
// en of twee pagina's in dezelfde taal op hetzelfde zoekwoord sturen (kannibalisatie).
// Voor de speerpunten ook: staat het zoekwoord in de titel en linkt de pagina naar de dienst.
import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { guidesBy, guideHref } from '../src/data/guides';
import { topics, topicHref } from '../src/data/topics';
import { pageKeywords, placeKeyword, speerpunten, type KwLang } from '../src/data/zoekwoorden';

const DIST = 'dist';
const norm = (s: string) => s.toLowerCase().normalize('NFKD').replace(/[̀-ͯ]/g, '').replace(/[-\s]+/g, ' ').trim();
const kw = new Map<string, string | null>();
for (const [lang, list] of Object.entries(guidesBy)) for (const g of list) kw.set(guideHref(lang as KwLang & keyof typeof guidesBy, g), g.keyword);
for (const [kind, byLang] of Object.entries(topics))
  for (const [lang, list] of Object.entries(byLang)) for (const t of list) if (t.keyword) kw.set(topicHref(kind as never, lang as never, t), t.keyword);
for (const [p, k] of Object.entries(pageKeywords)) if (!kw.has(p)) kw.set(p, k);
const placeDirs: Record<string, KwLang> = { plaatsen: 'nl', places: 'en', orte: 'de', orter: 'sv' };

async function walk(dir: string): Promise<string[]> {
  const out: string[] = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(p)));
    else if (e.name === 'index.html') out.push(p);
  }
  return out;
}

const missing: string[] = [];
const byKw = new Map<string, string[]>();
const html = new Map<string, string>();
let checked = 0;
for (const file of await walk(DIST)) {
  const h = await readFile(file, 'utf8');
  const url = '/' + file.slice(DIST.length + 1).replace(/index\.html$/, '');
  if (url === '/' || /<html[^>]*data-noindex/.test(h) || /<meta name="robots" content="noindex/.test(h)) continue;
  if (/^\/(print|statistiek)\//.test(url)) continue;
  html.set(url, h);
  checked++;
  const seg = url.split('/').filter(Boolean);
  let k = kw.get(url);
  if (k === undefined && placeDirs[seg[1]] && seg.length >= 3) k = placeKeyword(placeDirs[seg[1]], seg[2], seg[3] ?? '');
  if (k === undefined) { missing.push(url); continue; }
  if (k === null) continue;
  const key = seg[0] + '|' + norm(k);
  byKw.set(key, [...(byKw.get(key) ?? []), url]);
}
const problems: string[] = [];
for (const u of missing) problems.push(`${u}  geen hoofdzoekwoord (zet het in src/data/zoekwoorden.ts of in de gids)`);
for (const [key, urls] of byKw) if (urls.length > 1) problems.push(`kannibalisatie "${key.split('|')[1]}" (${key.split('|')[0]}): ${urls.join(', ')}`);
const notes: string[] = [];
for (const s of speerpunten) {
  const h = html.get(s.path);
  if (!h) { problems.push(`speerpunt ${s.path} bestaat niet of staat op noindex`); continue; }
  const title = h.match(/<title>([^<]*)<\/title>/)?.[1] ?? '';
  const stop = new Set(['in', 'i', 'a', 'the', 'to', 'naar', 'nach', 'de', 'het', 'een']);
  const lacking = norm(s.keyword).split(' ').filter((w) => !stop.has(w) && !norm(title).includes(w));
  if (lacking.length) notes.push(`speerpunt ${s.path}: titel "${title}" mist ${lacking.join(', ')} uit "${s.keyword}"`);
  if (s.supports && !h.includes(`href="${s.supports}"`)) notes.push(`speerpunt ${s.path} linkt niet naar ${s.supports}`);
  const hub = s.supports && html.get(s.supports);
  if (hub && !hub.includes(`href="${s.path}"`)) notes.push(`${s.supports} linkt niet naar speerpunt ${s.path}`);
}
console.log(`${checked} indexeerbare pagina's, ${byKw.size} hoofdzoekwoorden, ${problems.length} problemen, ${notes.length} aandachtspunten.`);
for (const p of problems) console.log(' - ' + p);
for (const n of notes) console.log(' * ' + n);
process.exit(problems.length ? 1 : 0);
