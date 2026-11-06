// SEO-controle op de gebouwde site (dist/). Draai na `npm run build` met `npm run seo`.
// Controleert per indexeerbare pagina: titel (max. 60 tekens), meta-description (90-160),
// unieke titels en descriptions, precies één h1, geen overgeslagen kopniveaus en canonical.
import { readdir, readFile } from 'node:fs/promises';
import { join } from 'node:path';

const DIST = 'dist';
const SITE = 'https://axarquiahome.com';
const decode = (s) => s.replace(/&amp;/g, '&').replace(/&#39;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>');

async function walk(dir) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(p)));
    else if (e.name === 'index.html') out.push(p);
  }
  return out;
}

const problems = [];
const titles = new Map();
const descs = new Map();
let checked = 0;
for (const file of await walk(DIST)) {
  const html = await readFile(file, 'utf8');
  const url = '/' + file.slice(DIST.length + 1).replace(/index\.html$/, '');
  if (url === '/' || /<html[^>]*data-noindex/.test(html)) continue;
  checked++;
  const title = decode(html.match(/<title>([^<]*)<\/title>/)?.[1] ?? '');
  const desc = decode(html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? '');
  const canonical = html.match(/<link rel="canonical" href="([^"]*)"/)?.[1];
  const main = html.match(/<main[^>]*>([\s\S]*)<\/main>/)?.[1] ?? '';
  const levels = [...main.matchAll(/<h([1-6])[\s>]/g)].map((m) => Number(m[1]));
  const add = (msg) => problems.push(`${url}  ${msg}`);
  if (title.length > 60) add(`titel te lang (${title.length}): ${title}`);
  if (title.length < 25) add(`titel te kort (${title.length}): ${title}`);
  if (desc.length > 160) add(`description te lang (${desc.length})`);
  if (desc.length < 90) add(`description te kort (${desc.length})`);
  if (levels.filter((l) => l === 1).length !== 1) add(`aantal h1: ${levels.filter((l) => l === 1).length}`);
  for (let i = 1; i < levels.length; i++) if (levels[i] > levels[i - 1] + 1) { add(`kop springt van h${levels[i - 1]} naar h${levels[i]}`); break; }
  if (canonical !== SITE + url) add(`canonical klopt niet: ${canonical}`);
  titles.set(title, [...(titles.get(title) ?? []), url]);
  descs.set(desc, [...(descs.get(desc) ?? []), url]);
}
for (const [t, urls] of titles) if (urls.length > 1) problems.push(`dubbele titel "${t}": ${urls.join(', ')}`);
for (const [d, urls] of descs) if (urls.length > 1) problems.push(`dubbele description: ${urls.join(', ')}`);
const sitemap = await readFile(join(DIST, 'sitemap.xml'), 'utf8').catch(() => '');
if (!sitemap) problems.push('sitemap.xml ontbreekt');
if (sitemap.includes('[')) problems.push('sitemap bevat ongeldige adressen met [');

console.log(`${checked} indexeerbare pagina's gecontroleerd, ${problems.length} problemen.`);
for (const p of problems) console.log(' - ' + p);
process.exit(problems.length ? 1 : 0);
