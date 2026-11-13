/**
 * Axarquía Home: statistieken-dashboard.
 *
 * Haalt elke nacht automatisch op:
 *  - Google Search Console: klikken, vertoningen, posities en zoekwoorden per taal
 *  - Bing Webmaster Tools: klikken en zoekwoorden (optioneel, met API-sleutel)
 *  - Google Analytics 4 of Plausible: bezoekers en bronnen per taal, inclusief
 *    verkeer uit ChatGPT, Perplexity enz. (optioneel)
 *  - Aanvragen uit de sheet "Aanvragen axarquiahome.com" (optioneel)
 * en ontvangt elke week van een Claude-routine:
 *  - Ubersuggest: posities van de gevolgde zoekwoorden en AI-zichtbaarheid
 *
 * Alles komt in deze Google Sheet; de web-app toont het als dashboard dat alleen
 * jij (de eigenaar) kunt openen. Zie README.md in deze map voor de stappen.
 */

// ===== Instellingen =====
const CONFIG = {
  // Search Console-property (domeinproperty)
  GSC_SITE: 'sc-domain:axarquiahome.com',
  // Bing Webmaster Tools: site zoals hij in Bing staat
  BING_SITE: 'https://axarquiahome.com/',
  // Plausible: domein zoals in Plausible ingesteld
  PLAUSIBLE_SITE: 'axarquiahome.com',
  // Talen van de site, herkend aan het begin van het pad
  TALEN: { nl: '/nl/', en: '/en/', de: '/de/' },
  // Hoeveel dagen per run opnieuw ophalen (Search Console werkt cijfers tot 3 dagen terug bij)
  DAGEN_VERVERSEN: 60,
};
// Sleutels staan NIET in de code maar in Projectinstellingen > Scripteigenschappen:
//   GA4_PROPERTY_ID, BING_API_KEY, PLAUSIBLE_API_KEY, AANVRAGEN_SHEET_ID, TOKEN (maakt setup() zelf aan)

const AI_BRONNEN = /chatgpt|openai|perplexity|gemini|bard|copilot|claude|anthropic|deepseek|you\.com|phind|mistral|grok/i;

const TABS = {
  gscDag: ['Google per dag', ['Datum', 'Taal', 'Klikken', 'Vertoningen', 'CTR', 'Positie']],
  gscZw: ['Google zoekwoorden', ['Taal', 'Zoekwoord', 'Klikken', 'Vertoningen', 'Positie', 'Positie vorige 28 dagen']],
  gscPag: ['Google pagina\'s', ['Taal', 'Pagina', 'Klikken', 'Vertoningen', 'Positie']],
  bing: ['Bing', ['Taal', 'Klikken', 'Vertoningen']],
  bingZw: ['Bing zoekwoorden', ['Zoekwoord', 'Klikken', 'Vertoningen', 'Positie']],
  bezDag: ['Bezoekers per dag', ['Datum', 'Taal', 'Bezoekers', 'Bezoeken', 'Paginaweergaven']],
  bronnen: ['Bronnen', ['Taal', 'Bron', 'Bezoekers', 'AI']],
  pos: ['Posities', ['Datum', 'Taal', 'Land', 'Zoekwoord', 'Positie', 'Vorige positie', 'Pagina', 'Zoekvolume']],
  posHist: ['Posities historie', ['Datum', 'Taal', 'Land', 'Zoekwoord', 'Positie']],
  ai: ['AI-zichtbaarheid', ['Datum', 'Provider', 'Zichtbaarheid %', 'Vermeldingen', 'Gem. positie', 'Share of voice %']],
  aiPrompts: ['AI-prompts', ['Datum', 'Taal', 'Prompt', 'Genoemd', 'Positie', 'Providers', 'Wel genoemd']],
  log: ['Log', ['Tijd', 'Onderdeel', 'Resultaat']],
};

// ===== Eenmalig: setup =====
function setup() {
  Object.keys(TABS).forEach((k) => tab_(k));
  const props = PropertiesService.getScriptProperties();
  if (!props.getProperty('TOKEN')) props.setProperty('TOKEN', Utilities.getUuid().replace(/-/g, ''));
  ScriptApp.getProjectTriggers()
    .filter((t) => t.getHandlerFunction() === 'ververs')
    .forEach((t) => ScriptApp.deleteTrigger(t));
  ScriptApp.newTrigger('ververs').timeBased().everyDays(1).atHour(6).create();
  ververs();
  Logger.log('Klaar. Token voor de wekelijkse Claude-routine: ' + props.getProperty('TOKEN'));
}

// ===== Elke nacht =====
function ververs() {
  stap_('Search Console', haalSearchConsole_);
  if (prop_('BING_API_KEY')) stap_('Bing', haalBing_);
  if (prop_('GA4_PROPERTY_ID')) stap_('Google Analytics', haalGA4_);
  else if (prop_('PLAUSIBLE_API_KEY')) stap_('Plausible', haalPlausible_);
}

function stap_(naam, fn) {
  try {
    log_(naam, fn() || 'ok');
  } catch (err) {
    log_(naam, 'FOUT: ' + err.message);
  }
}

// ===== Google Search Console =====
function haalSearchConsole_() {
  const eind = dag_(-1);
  const start = dag_(-CONFIG.DAGEN_VERVERSEN);
  const talen = ['alle'].concat(Object.keys(CONFIG.TALEN));

  // Per dag per taal
  const nieuw = [];
  talen.forEach((t) => {
    gsc_({ startDate: start, endDate: eind, dimensions: ['date'], rowLimit: 1000, dimensionFilterGroups: filter_(t) })
      .forEach((r) => nieuw.push([r.keys[0], t, r.clicks, r.impressions, rond_(r.ctr, 4), rond_(r.position, 1)]));
  });
  upsert_('gscDag', nieuw, (r) => r[0] + '|' + r[1]);

  // Zoekwoorden en pagina's, laatste 28 dagen tegen de 28 dagen daarvoor
  const zw = [];
  const pag = [];
  talen.forEach((t) => {
    const nu = gsc_({ startDate: dag_(-29), endDate: eind, dimensions: ['query'], rowLimit: 500, dimensionFilterGroups: filter_(t) });
    const toen = gsc_({ startDate: dag_(-57), endDate: dag_(-30), dimensions: ['query'], rowLimit: 1000, dimensionFilterGroups: filter_(t) });
    const vorige = {};
    toen.forEach((r) => (vorige[r.keys[0]] = rond_(r.position, 1)));
    nu.forEach((r) => zw.push([t, r.keys[0], r.clicks, r.impressions, rond_(r.position, 1), vorige[r.keys[0]] || '']));
    gsc_({ startDate: dag_(-29), endDate: eind, dimensions: ['page'], rowLimit: 200, dimensionFilterGroups: filter_(t) })
      .forEach((r) => pag.push([t, r.keys[0].replace(/^https?:\/\/[^/]+/, ''), r.clicks, r.impressions, rond_(r.position, 1)]));
  });
  vervang_('gscZw', zw);
  vervang_('gscPag', pag);
  return nieuw.length + ' dagregels, ' + zw.length + ' zoekwoorden';
}

function gsc_(body) {
  const url = 'https://www.googleapis.com/webmasters/v3/sites/' + encodeURIComponent(CONFIG.GSC_SITE) + '/searchAnalytics/query';
  const res = UrlFetchApp.fetch(url, {
    method: 'post',
    contentType: 'application/json',
    headers: { Authorization: 'Bearer ' + ScriptApp.getOAuthToken() },
    payload: JSON.stringify(Object.assign({ dataState: 'all' }, body)),
    muteHttpExceptions: true,
  });
  if (res.getResponseCode() !== 200) throw new Error('Search Console ' + res.getResponseCode() + ': ' + res.getContentText().slice(0, 300));
  return JSON.parse(res.getContentText()).rows || [];
}

function filter_(taal) {
  if (taal === 'alle') return undefined;
  return [{ filters: [{ dimension: 'page', operator: 'contains', expression: CONFIG.TALEN[taal] }] }];
}

// ===== Bing Webmaster Tools =====
function haalBing_() {
  const sleutel = prop_('BING_API_KEY');
  const grens = Date.now() - 28 * 864e5;
  const bing = (methode) => {
    const url = 'https://ssl.bing.com/webmaster/api.svc/json/' + methode + '?siteUrl=' + encodeURIComponent(CONFIG.BING_SITE) + '&apikey=' + sleutel;
    const res = UrlFetchApp.fetch(url, { muteHttpExceptions: true });
    if (res.getResponseCode() !== 200) throw new Error('Bing ' + res.getResponseCode() + ': ' + res.getContentText().slice(0, 300));
    return (JSON.parse(res.getContentText()).d || []).filter((r) => bingDatum_(r.Date) >= grens);
  };

  const perTaal = { alle: [0, 0] };
  Object.keys(CONFIG.TALEN).forEach((t) => (perTaal[t] = [0, 0]));
  bing('GetPageStats').forEach((r) => {
    const t = taalVan_(r.Query);
    perTaal.alle[0] += r.Clicks; perTaal.alle[1] += r.Impressions;
    if (perTaal[t]) { perTaal[t][0] += r.Clicks; perTaal[t][1] += r.Impressions; }
  });
  vervang_('bing', Object.keys(perTaal).map((t) => [t, perTaal[t][0], perTaal[t][1]]));

  const zw = {};
  bing('GetQueryStats').forEach((r) => {
    const z = (zw[r.Query] = zw[r.Query] || [0, 0, 0]);
    z[0] += r.Clicks; z[1] += r.Impressions; z[2] += (r.AvgImpressionPosition || 0) * r.Impressions;
  });
  vervang_('bingZw', Object.keys(zw).map((q) => [q, zw[q][0], zw[q][1], zw[q][1] ? rond_(zw[q][2] / zw[q][1], 1) : '']));
  return perTaal.alle[0] + ' klikken (28 dagen)';
}

function bingDatum_(s) {
  const m = /Date\((\d+)/.exec(String(s));
  return m ? Number(m[1]) : 0;
}

// ===== Google Analytics 4 =====
// Telt alleen bezoekers die cookies accepteren (consent mode), dus lager dan het echte aantal.
function haalGA4_() {
  const start = dag_(-CONFIG.DAGEN_VERVERSEN);
  const eind = dag_(0);
  const talen = ['alle'].concat(Object.keys(CONFIG.TALEN));
  const nieuw = [];
  const bronnen = [];
  talen.forEach((t) => {
    const filter = t === 'alle' ? undefined
      : { filter: { fieldName: 'landingPage', stringFilter: { matchType: 'BEGINS_WITH', value: CONFIG.TALEN[t] } } };
    ga4_({ dateRanges: [{ startDate: start, endDate: eind }], dimensions: [{ name: 'date' }],
      metrics: [{ name: 'activeUsers' }, { name: 'sessions' }, { name: 'screenPageViews' }], dimensionFilter: filter, limit: 1000 })
      .forEach((r) => {
        const d = r.dimensionValues[0].value;
        nieuw.push([d.slice(0, 4) + '-' + d.slice(4, 6) + '-' + d.slice(6, 8), t,
          Number(r.metricValues[0].value), Number(r.metricValues[1].value), Number(r.metricValues[2].value)]);
      });
    ga4_({ dateRanges: [{ startDate: '28daysAgo', endDate: 'today' }], dimensions: [{ name: 'sessionSource' }],
      metrics: [{ name: 'activeUsers' }], dimensionFilter: filter, limit: 50,
      orderBys: [{ metric: { metricName: 'activeUsers' }, desc: true }] })
      .forEach((r) => {
        const bron = r.dimensionValues[0].value;
        bronnen.push([t, bron, Number(r.metricValues[0].value), AI_BRONNEN.test(bron) ? 'ja' : 'nee']);
      });
  });
  upsert_('bezDag', nieuw, (r) => r[0] + '|' + r[1]);
  vervang_('bronnen', bronnen);
  return nieuw.length + ' dagregels';
}

function ga4_(body) {
  const id = String(prop_('GA4_PROPERTY_ID')).replace(/\D/g, '');
  const res = UrlFetchApp.fetch('https://analyticsdata.googleapis.com/v1beta/properties/' + id + ':runReport', {
    method: 'post',
    contentType: 'application/json',
    headers: { Authorization: 'Bearer ' + ScriptApp.getOAuthToken() },
    payload: JSON.stringify(body),
    muteHttpExceptions: true,
  });
  if (res.getResponseCode() !== 200) throw new Error('Google Analytics ' + res.getResponseCode() + ': ' + res.getContentText().slice(0, 300));
  return JSON.parse(res.getContentText()).rows || [];
}

// ===== Plausible (cookieloze bezoekersstatistieken, alternatief voor GA4) =====
function haalPlausible_() {
  const start = dag_(-CONFIG.DAGEN_VERVERSEN);
  const eind = dag_(0);
  const talen = ['alle'].concat(Object.keys(CONFIG.TALEN));
  const nieuw = [];
  const bronnen = [];
  talen.forEach((t) => {
    const filters = t === 'alle' ? [] : [['contains', 'visit:entry_page', [CONFIG.TALEN[t]]]];
    plausible_({ metrics: ['visitors', 'visits', 'pageviews'], date_range: [start, eind], dimensions: ['time:day'], filters: filters })
      .forEach((r) => nieuw.push([r.dimensions[0], t, r.metrics[0], r.metrics[1], r.metrics[2]]));
    plausible_({ metrics: ['visitors'], date_range: '28d', dimensions: ['visit:source'], filters: filters, pagination: { limit: 50 } })
      .forEach((r) => bronnen.push([t, r.dimensions[0], r.metrics[0], AI_BRONNEN.test(r.dimensions[0]) ? 'ja' : 'nee']));
  });
  upsert_('bezDag', nieuw, (r) => r[0] + '|' + r[1]);
  vervang_('bronnen', bronnen);
  return nieuw.length + ' dagregels';
}

function plausible_(query) {
  const res = UrlFetchApp.fetch('https://plausible.io/api/v2/query', {
    method: 'post',
    contentType: 'application/json',
    headers: { Authorization: 'Bearer ' + prop_('PLAUSIBLE_API_KEY') },
    payload: JSON.stringify(Object.assign({ site_id: CONFIG.PLAUSIBLE_SITE }, query)),
    muteHttpExceptions: true,
  });
  if (res.getResponseCode() !== 200) throw new Error('Plausible ' + res.getResponseCode() + ': ' + res.getContentText().slice(0, 300));
  return JSON.parse(res.getContentText()).results || [];
}

// ===== Ontvangen van de wekelijkse Claude-routine (Ubersuggest) =====
// Verwacht JSON: { token, datum, posities: [{taal, land, zoekwoord, positie, vorige, pagina, volume}],
//   ai: { providers: [{provider, zichtbaarheid, vermeldingen, positie, share}],
//         prompts: [{taal, prompt, genoemd, positie, providers, merken}] } }
function doPost(e) {
  try {
    const d = JSON.parse(e.postData.contents);
    if (!d.token || d.token !== prop_('TOKEN')) return json_({ ok: false, error: 'Ongeldig token' });
    const datum = d.datum || dag_(0);
    const lock = LockService.getScriptLock();
    lock.waitLock(20000);
    try {
      if (Array.isArray(d.posities) && d.posities.length) {
        const rijen = d.posities.map((p) => [datum, p.taal || '', p.land || '', p.zoekwoord || '', num_(p.positie), num_(p.vorige), p.pagina || '', num_(p.volume)]);
        vervang_('pos', rijen);
        upsert_('posHist', rijen.map((r) => r.slice(0, 5)), (r) => [r[0], r[1], r[2], r[3]].join('|'));
      }
      if (d.ai && Array.isArray(d.ai.providers) && d.ai.providers.length) {
        upsert_('ai', d.ai.providers.map((p) => [datum, p.provider || 'alle', num_(p.zichtbaarheid), num_(p.vermeldingen), num_(p.positie), num_(p.share)]),
          (r) => r[0] + '|' + r[1]);
      }
      if (d.ai && Array.isArray(d.ai.prompts) && d.ai.prompts.length) {
        vervang_('aiPrompts', d.ai.prompts.map((p) => [datum, p.taal || '', p.prompt || '', p.genoemd ? 'ja' : 'nee', num_(p.positie),
          [].concat(p.providers || []).join(', '), [].concat(p.merken || []).slice(0, 8).join(', ')]));
      }
    } finally {
      lock.releaseLock();
    }
    log_('Ubersuggest', (d.posities || []).length + ' posities, ' + ((d.ai && d.ai.prompts) || []).length + ' prompts');
    return json_({ ok: true });
  } catch (err) {
    log_('Ubersuggest', 'FOUT: ' + err.message);
    return json_({ ok: false, error: err.message });
  }
}

// ===== Dashboard =====
function doGet() {
  const wie = (Session.getActiveUser().getEmail() || '').toLowerCase();
  const eigenaar = (Session.getEffectiveUser().getEmail() || '').toLowerCase();
  const mag = wie && wie === eigenaar;
  // ALLOWALL: het dashboard mag getoond worden op axarquiahome.com/statistiek/.
  // De cijfers blijven alleen zichtbaar voor de eigenaar (controle hierboven + Google-login).
  if (!mag) {
    return HtmlService.createHtmlOutput('<p style="font-family:sans-serif">Geen toegang. Log in met het Google-account dat eigenaar is van het dashboard.</p>'
      + '<script>try{window.top.postMessage("axh-statistiek:geen-toegang","*")}catch(e){}</script>')
      .setTitle('Geen toegang')
      .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  }
  const t = HtmlService.createTemplateFromFile('Dashboard');
  t.data = JSON.stringify(data_()).replace(/</g, '\\u003c');
  return t.evaluate()
    .setTitle('Statistieken axarquiahome.com')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function data_() {
  const lees = (k) => {
    const sh = tab_(k);
    if (sh.getLastRow() < 2) return [];
    return sh.getRange(2, 1, sh.getLastRow() - 1, sh.getLastColumn()).getValues()
      .map((r) => r.map((c) => (c instanceof Date ? Utilities.formatDate(c, 'Europe/Madrid', 'yyyy-MM-dd') : c)));
  };
  const uit = {};
  Object.keys(TABS).forEach((k) => (uit[k] = k === 'log' ? lees(k).slice(-20) : lees(k)));
  uit.aanvragen = aanvragen_();
  uit.bezoekersBron = prop_('GA4_PROPERTY_ID') ? 'Google Analytics' : prop_('PLAUSIBLE_API_KEY') ? 'Plausible' : '';
  uit.bingActief = !!prop_('BING_API_KEY');
  uit.bijgewerkt = Utilities.formatDate(new Date(), 'Europe/Madrid', 'd MMM yyyy HH:mm');
  return uit;
}

// Alleen datum, taal, dienst en status: geen persoonsgegevens in het dashboard.
function aanvragen_() {
  const id = prop_('AANVRAGEN_SHEET_ID');
  if (!id) return null;
  try {
    const sh = SpreadsheetApp.openById(id).getSheetByName('Aanvragen');
    if (!sh || sh.getLastRow() < 2) return [];
    const kop = sh.getRange(1, 1, 1, sh.getLastColumn()).getValues()[0];
    const kol = (naam) => kop.findIndex((k) => String(k).indexOf(naam) === 0);
    const [iDatum, iTaal, iDienst, iStatus] = [kol('Datum'), kol('Taal'), kol('Dienst'), kol('Status')];
    return sh.getRange(2, 1, sh.getLastRow() - 1, kop.length).getValues().map((r) => [
      r[iDatum] instanceof Date ? Utilities.formatDate(r[iDatum], 'Europe/Madrid', 'yyyy-MM-dd') : String(r[iDatum]),
      String(r[iTaal] || '').toLowerCase().slice(0, 2), String(r[iDienst] || ''), iStatus >= 0 ? String(r[iStatus] || '') : '',
    ]);
  } catch (err) {
    log_('Aanvragen', 'FOUT: ' + err.message);
    return null;
  }
}

// ===== Hulpfuncties =====
function tab_(k) {
  const [naam, kop] = TABS[k];
  const ss = SpreadsheetApp.getActive();
  let sh = ss.getSheetByName(naam);
  if (!sh) {
    sh = ss.insertSheet(naam);
    sh.getRange(1, 1, 1, kop.length).setValues([kop]).setFontWeight('bold');
    sh.setFrozenRows(1);
  }
  return sh;
}

function vervang_(k, rijen) {
  const sh = tab_(k);
  if (sh.getLastRow() > 1) sh.getRange(2, 1, sh.getLastRow() - 1, sh.getLastColumn()).clearContent();
  if (rijen.length) sh.getRange(2, 1, rijen.length, rijen[0].length).setValues(rijen);
}

// Bestaande regels met dezelfde sleutel worden overschreven, de rest blijft (historie).
function upsert_(k, nieuw, sleutel) {
  const sh = tab_(k);
  const kolommen = TABS[k][1].length;
  const oud = sh.getLastRow() > 1
    ? sh.getRange(2, 1, sh.getLastRow() - 1, kolommen).getValues()
      .map((r) => r.map((c) => (c instanceof Date ? Utilities.formatDate(c, 'Europe/Madrid', 'yyyy-MM-dd') : c)))
    : [];
  const map = {};
  oud.concat(nieuw).forEach((r) => (map[sleutel(r)] = r));
  const alles = Object.keys(map).map((s) => map[s]).sort((a, b) => String(a[0]).localeCompare(String(b[0])));
  vervang_(k, alles);
}

function taalVan_(url) {
  const pad = String(url).replace(/^https?:\/\/[^/]+/, '');
  return Object.keys(CONFIG.TALEN).find((t) => pad.indexOf(CONFIG.TALEN[t]) === 0) || 'overig';
}

function log_(onderdeel, resultaat) {
  const sh = tab_('log');
  sh.appendRow([new Date(), onderdeel, resultaat]);
  if (sh.getLastRow() > 500) sh.deleteRows(2, sh.getLastRow() - 500);
}

function dag_(offset) {
  return Utilities.formatDate(new Date(Date.now() + offset * 864e5), 'Europe/Madrid', 'yyyy-MM-dd');
}
function rond_(n, d) { const f = Math.pow(10, d); return Math.round(n * f) / f; }
function num_(v) { return v === null || v === undefined || v === '' || isNaN(Number(v)) ? '' : Number(v); }
function prop_(k) { return PropertiesService.getScriptProperties().getProperty(k); }
function json_(o) { return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON); }
