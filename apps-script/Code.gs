/**
 * Axarquía Home: aanvragen uit de keuzehulp opslaan en doorsturen.
 *
 * Plak dit in Extensies > Apps Script van de Google Sheet "Aanvragen axarquiahome.com".
 * Zie apps-script/README.md voor de stappen.
 */

// ===== Instellingen =====
const CONFIG = {
  // Waar elke aanvraag direct heen gaat (bouwbedrijf). Meerdere adressen met komma's.
  // Voorlopig info@; vervang door het adres van het bouwbedrijf zodra dat bekend is.
  MAIL_BOUWBEDRIJF: 'info@axarquiahome.com',
  // Kopie voor Frans (commissie-administratie)
  MAIL_KOPIE: 'info@axarquiahome.com',
  // Naam van het tabblad in de sheet
  TABBLAD: 'Aanvragen',
  // Naam van de Drive-map voor foto's (wordt automatisch aangemaakt)
  FOTOMAP: 'Aanvragen axarquiahome.com - foto\'s',
  // Afzendernaam van de e-mails
  AFZENDER: 'Axarquía Home',
  // Afzenderadres. Werkt alleen als dit adres in Gmail als alias is toegevoegd
  // (Gmail > Instellingen > Accounts > "E-mail verzenden als"). Anders gaat de mail
  // vanaf het Google-account en staat dit adres als antwoordadres (reply-to).
  AFZENDER_ADRES: 'info@axarquiahome.com',
};

const KOLOMMEN = [
  'Datum', 'Aanvraag-id', 'Dienst', 'Situatie', 'Type woning', 'Plaats', 'Adres/link',
  'Planning', 'Budget', 'Omschrijving', 'Naam', 'E-mail', 'Telefoon', 'Contactvoorkeur',
  'Taal', 'Toestemming', 'Toestemming partner', 'Pagina', 'UTM', 'Foto\'s',
  // Door het bouwbedrijf in te vullen, voor de commissie:
  'Status (contact/offerte/getekend/afgewezen)', 'Offertebedrag excl. IVA', 'Opdrachtbedrag excl. IVA', 'Notities',
];

function doPost(e) {
  try {
    const d = JSON.parse(e.postData.contents);

    // Spam en dubbele inzendingen tegenhouden
    if (d.website) return json_({ ok: true });
    if (!d.naam || !d.email || d.toestemming !== 'ja') return json_({ ok: false, error: 'Verplichte velden ontbreken' });
    const cache = CacheService.getScriptCache();
    if (d.id && cache.get(d.id)) return json_({ ok: true, dubbel: true });

    const lock = LockService.getScriptLock();
    lock.waitLock(20000);
    try {
      const sheet = sheet_();
      const fotoLinks = bewaarFotos_(d);
      const rij = [
        new Date(), d.id || '', d.dienst || '', d.situatie || '', d.type_woning || '', d.plaats || '', d.adres || '',
        d.planning || '', d.budget || '', d.omschrijving || '', d.naam, d.email, d.telefoon || '', d.contactvoorkeur || '',
        d.taal || '', d.toestemming || '', d.toestemming_partner || 'nee', d.pagina || '', d.utm || '', fotoLinks.join('\n'),
        '', '', '', '',
      ];
      sheet.appendRow(rij);
      if (d.id) cache.put(d.id, '1', 21600);
      mailBouwbedrijf_(d, fotoLinks, sheet.getLastRow());
      mailKlant_(d);
    } finally {
      lock.releaseLock();
    }
    return json_({ ok: true });
  } catch (err) {
    console.error(err);
    return json_({ ok: false, error: String(err) });
  }
}

function doGet() {
  return json_({ ok: true, info: 'Axarquía Home aanvragen-endpoint' });
}

function sheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName(CONFIG.TABBLAD);
  if (!sh) sh = ss.insertSheet(CONFIG.TABBLAD);
  if (sh.getLastRow() === 0) {
    sh.appendRow(KOLOMMEN);
    sh.setFrozenRows(1);
    sh.getRange(1, 1, 1, KOLOMMEN.length).setFontWeight('bold');
  }
  return sh;
}

function bewaarFotos_(d) {
  if (!d.fotos || !d.fotos.length) return [];
  const it = DriveApp.getFoldersByName(CONFIG.FOTOMAP);
  const hoofdmap = it.hasNext() ? it.next() : DriveApp.createFolder(CONFIG.FOTOMAP);
  const stamp = Utilities.formatDate(new Date(), 'Europe/Madrid', 'yyyy-MM-dd HHmm');
  const map = hoofdmap.createFolder(`${stamp} ${d.naam} (${d.plaats || 'onbekend'})`);
  return d.fotos.slice(0, 5).map((f, i) => {
    const blob = Utilities.newBlob(Utilities.base64Decode(f.data), f.type || 'image/jpeg', f.name || `foto-${i + 1}.jpg`);
    return map.createFile(blob).getUrl();
  });
}

function mailBouwbedrijf_(d, fotoLinks, rijNummer) {
  const regels = [
    ['Dienst', d.dienst], ['Situatie', d.situatie], ['Type woning', d.type_woning], ['Plaats', d.plaats],
    ['Adres/link', d.adres], ['Planning', d.planning], ['Budget', d.budget], ['Omschrijving', d.omschrijving],
    ['Naam', d.naam], ['E-mail', d.email], ['Telefoon', d.telefoon], ['Contactvoorkeur', d.contactvoorkeur],
    ['Taal', d.taal], ['Toestemming partner', d.toestemming_partner || 'nee'],
  ].filter(([, v]) => v);
  const html = `
    <p><b>Nieuwe aanvraag via axarquiahome.com</b> (regel ${rijNummer} in de sheet)</p>
    <table cellpadding="6" style="border-collapse:collapse">${regels.map(([k, v]) =>
      `<tr><td style="color:#666;vertical-align:top">${k}</td><td>${esc_(v).replace(/\n/g, '<br>')}</td></tr>`).join('')}
    </table>
    ${fotoLinks.length ? `<p>Foto's:<br>${fotoLinks.map((u, i) => `<a href="${u}">Foto ${i + 1}</a>`).join('<br>')}</p>` : ''}
    <p>Graag binnen 24 uur contact opnemen en daarna de status invullen in de sheet:<br>
    <a href="${SpreadsheetApp.getActiveSpreadsheet().getUrl()}">Open de sheet</a></p>`;
  send_({
    to: CONFIG.MAIL_BOUWBEDRIJF,
    cc: CONFIG.MAIL_KOPIE,
    replyTo: d.email,
    name: CONFIG.AFZENDER,
    subject: `Nieuwe aanvraag: ${d.dienst || 'onbekend'} in ${d.plaats || 'onbekend'} (${d.naam})`,
    htmlBody: html,
  });
}

function mailKlant_(d) {
  const en = d.taal === 'en';
  send_({
    to: d.email,
    replyTo: CONFIG.MAIL_KOPIE,
    name: CONFIG.AFZENDER,
    subject: en ? 'We have received your request' : 'We hebben uw aanvraag ontvangen',
    htmlBody: en
      ? `<p>Dear ${esc_(d.naam)},</p><p>Thank you for your request. One of our team will contact you within 24 hours to discuss the next step.</p><p>Kind regards,<br>Axarquía Home</p>`
      : `<p>Beste ${esc_(d.naam)},</p><p>Bedankt voor uw aanvraag. Een Nederlandstalige collega neemt binnen 24 uur contact met u op om de volgende stap te bespreken.</p><p>Met vriendelijke groet,<br>Axarquía Home</p>`,
  });
}

/** Verstuurt via de info@-alias als die bestaat, anders via het Google-account. */
function send_(o) {
  const alias = GmailApp.getAliases().indexOf(CONFIG.AFZENDER_ADRES) !== -1;
  const opts = { htmlBody: o.htmlBody, name: o.name, replyTo: o.replyTo || CONFIG.AFZENDER_ADRES };
  if (o.cc) opts.cc = o.cc;
  if (alias) opts.from = CONFIG.AFZENDER_ADRES;
  GmailApp.sendEmail(o.to, o.subject, '', opts);
}

function esc_(s) {
  return String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}

/** Eenmalig handmatig uitvoeren om toestemming te geven en het tabblad aan te maken. */
function setup() {
  sheet_();
  DriveApp.getRootFolder();
  GmailApp.getAliases();
  MailApp.getRemainingDailyQuota();
}
