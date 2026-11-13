// Meldt nieuwe en gewijzigde pagina's bij IndexNow (Bing, Yandex, Seznam, Naver), zodat
// ChatGPT en Copilot (die via Bing zoeken) ze snel kennen. Twee stappen in de deploy-workflow:
//
//   node scripts/indexnow.mjs prepare   (na `npm run build`)
//     Berekent per pagina uit dist/sitemap.xml een hash, haalt de lijst van de vorige publicatie
//     op (https://<site>/indexnow-manifest.json), schrijft de nieuwe lijst naar dist/ en de
//     gewijzigde URL's naar indexnow-urls.txt.
//   node scripts/indexnow.mjs submit    (na de publicatie)
//     Stuurt de URL's uit indexnow-urls.txt met de sleutel uit indexnow-key.txt naar api.indexnow.org.
//
// Een fout hier mag de publicatie nooit tegenhouden: het script stopt dan met een melding.
import { createHash } from 'node:crypto';
import { readFile, writeFile, readdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join } from 'node:path';

const DIST = 'dist';
const LIST = 'indexnow-urls.txt';
const MANIFEST = 'indexnow-manifest.json';
const KEYFILE = 'indexnow-key.txt';

async function sleutel() {
  const f = (await readdir(DIST)).find((n) => /^[0-9a-f]{8,128}\.txt$/.test(n));
  if (!f) throw new Error('geen IndexNow-sleutelbestand in dist/');
  const key = (await readFile(join(DIST, f), 'utf8')).trim();
  if (`${key}.txt` !== f) throw new Error(`sleutelbestand ${f} bevat niet de sleutel`);
  return key;
}

async function prepare() {
  const sitemap = await readFile(join(DIST, 'sitemap.xml'), 'utf8');
  const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  const origin = new URL(urls[0]).origin;
  const nieuw = {};
  for (const url of urls) {
    const file = join(DIST, new URL(url).pathname, 'index.html');
    if (!existsSync(file)) continue;
    // Alleen de inhoud hashen, niet de wisselende namen van CSS- en JS-bestanden.
    const html = (await readFile(file, 'utf8')).replace(/\/_astro\/[^"' )]+/g, '');
    nieuw[url] = createHash('sha1').update(html).digest('hex').slice(0, 16);
  }
  let oud = null;
  try {
    const r = await fetch(`${origin}/${MANIFEST}`, { cache: 'no-store' });
    if (r.ok) oud = await r.json();
  } catch {}
  // Eerste keer (nog geen lijst online): alles melden.
  const gewijzigd = Object.keys(nieuw).filter((u) => !oud || oud[u] !== nieuw[u]);
  await writeFile(join(DIST, MANIFEST), JSON.stringify(nieuw));
  await writeFile(LIST, gewijzigd.join('\n'));
  await writeFile(KEYFILE, await sleutel());
  console.log(`IndexNow: ${gewijzigd.length} van ${urls.length} pagina's nieuw of gewijzigd${oud ? '' : ' (eerste melding)'}.`);
}

async function submit() {
  const urls = existsSync(LIST) ? (await readFile(LIST, 'utf8')).split('\n').filter(Boolean) : [];
  if (!urls.length) { console.log('IndexNow: niets te melden.'); return; }
  const key = (await readFile(KEYFILE, 'utf8')).trim();
  const host = new URL(urls[0]).host;
  for (let i = 0; i < urls.length; i += 10000) {
    const batch = urls.slice(i, i + 10000);
    const r = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify({ host, key, keyLocation: `https://${host}/${key}.txt`, urlList: batch }),
    });
    console.log(`IndexNow: ${batch.length} URL's gemeld, antwoord ${r.status} ${r.statusText}`);
    if (r.status >= 400) console.log(await r.text());
  }
}

const stap = process.argv[2];
try {
  if (stap === 'prepare') await prepare();
  else if (stap === 'submit') await submit();
  else throw new Error('gebruik: node scripts/indexnow.mjs prepare|submit');
} catch (e) {
  console.log(`IndexNow overgeslagen: ${e.message}`);
}
