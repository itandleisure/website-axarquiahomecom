/**
 * Axarquía Home: aanvragen uit de keuzehulp en het contactformulier opslaan en doorsturen,
 * en inschrijvingen voor de gratis aankoopchecklist (lead magnet) opslaan en de pdf mailen.
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
  // Tabblad voor inschrijvingen op de gratis checklist. Dit zijn geen aanvragen:
  // ze gaan niet naar het bouwbedrijf en tellen niet als lead.
  TABBLAD_INSCHRIJVINGEN: 'Inschrijvingen',
  SITE: 'https://axarquiahome.com',
};

// Pdf en teksten van de checklist per taal (zelfde bestanden als in public/downloads/)
const CHECKLIST = {
  nl: {
    pdf: 'checklist-finca-kopen-axarquia.pdf',
    keuring: '/nl/aanvraag/?dienst=aankoopkeuring',
    subject: 'Uw checklist: een finca of huis kopen in de Axarquía',
    body: (naam, pdf, keuring) => `<p>${naam ? `Beste ${naam},` : 'Goedendag,'}</p>
      <p>Hierbij de checklist voor het kopen van een finca of huis in de Axarquía. U vindt hem als bijlage, en u kunt hem ook altijd hier downloaden: <a href="${pdf}">checklist (pdf)</a>.</p>
      <p>Drie punten die kopers het vaakst vergeten:</p>
      <ol><li>Vergelijk de <i>nota simple</i> en het kadaster met wat er echt staat. Klopt het oppervlak niet, dan is er waarschijnlijk zonder vergunning gebouwd.</li>
      <li>Vraag hoeveel water er de afgelopen droge zomers was, en of dat water rechtsgeldig bij het huis hoort.</li>
      <li>Reken de renovatie mee in uw budget. Bij een oudere finca is 15 tot 30% van de koopprijs geen uitzondering.</li></ol>
      <p>Heeft u een huis op het oog? Laat het keuren vóór u tekent. U krijgt per gebrek een prijs voor herstel, en daarmee onderhandelt u over de prijs: <a href="${keuring}">vraag een aankoopkeuring aan</a>.</p>
      <p>Met vriendelijke groet,<br>Axarquía Home</p>`,
  },
  en: {
    pdf: 'checklist-buying-a-finca-axarquia.pdf',
    keuring: '/en/request/?dienst=aankoopkeuring',
    subject: 'Your checklist: buying a finca or house in the Axarquía',
    body: (naam, pdf, keuring) => `<p>${naam ? `Dear ${naam},` : 'Hello,'}</p>
      <p>Here is your checklist for buying a finca or house in the Axarquía. It is attached, and you can always download it here: <a href="${pdf}">checklist (PDF)</a>.</p>
      <p>Three things buyers most often forget:</p>
      <ol><li>Compare the <i>nota simple</i> and the cadastre with what is actually there. If the floor area does not match, something was probably built without a permit.</li>
      <li>Ask how much water there was in recent dry summers, and whether that water is legally attached to the property.</li>
      <li>Include the renovation in your budget. For an older finca, 15 to 30% of the purchase price is not unusual.</li></ol>
      <p>Got a house in mind? Have it surveyed before you sign. You get a repair price for every defect, which you can use to negotiate: <a href="${keuring}">request a property survey</a>.</p>
      <p>Kind regards,<br>Axarquía Home</p>`,
  },
  de: {
    pdf: 'checkliste-finca-kaufen-axarquia.pdf',
    keuring: '/de/anfrage/?dienst=aankoopkeuring',
    subject: 'Ihre Checkliste: eine Finca oder ein Haus in der Axarquía kaufen',
    body: (naam, pdf, keuring) => `<p>${naam ? `Guten Tag ${naam},` : 'Guten Tag,'}</p>
      <p>anbei Ihre Checkliste für den Kauf einer Finca oder eines Hauses in der Axarquía. Sie finden sie im Anhang und können sie jederzeit hier herunterladen: <a href="${pdf}">Checkliste (PDF)</a>.</p>
      <p>Drei Punkte, die Käufer am häufigsten vergessen:</p>
      <ol><li>Vergleichen Sie die <i>nota simple</i> und das Kataster mit dem, was tatsächlich steht. Stimmt die Fläche nicht, wurde wahrscheinlich ohne Genehmigung gebaut.</li>
      <li>Fragen Sie, wie viel Wasser es in den letzten trockenen Sommern gab und ob das Wasser rechtlich zum Haus gehört.</li>
      <li>Rechnen Sie die Renovierung ins Budget ein. Bei einer älteren Finca sind 15 bis 30 % des Kaufpreises keine Ausnahme.</li></ol>
      <p>Haben Sie ein Haus im Blick? Lassen Sie es vor der Unterschrift begutachten. Sie erhalten für jeden Mangel einen Preis für die Behebung und können damit verhandeln: <a href="${keuring}">Immobiliengutachten anfragen</a>. Der Kontakt erfolgt auf Englisch oder Niederländisch.</p>
      <p>Mit freundlichen Grüßen<br>Axarquía Home</p>`,
  },
  sv: {
    pdf: 'checklista-kopa-finca-axarquia.pdf',
    keuring: '/sv/forfragan/?dienst=aankoopkeuring',
    subject: 'Din checklista: köpa en finca eller ett hus i Axarquía',
    body: (naam, pdf, keuring) => `<p>Hej${naam ? ` ${naam}` : ''},</p>
      <p>Här är din checklista för att köpa en finca eller ett hus i Axarquía. Den finns som bilaga, och du kan alltid ladda ner den här: <a href="${pdf}">checklista (pdf)</a>.</p>
      <p>Tre saker som köpare oftast glömmer:</p>
      <ol><li>Jämför <i>nota simple</i> och Catastro med vad som faktiskt står där. Stämmer inte ytan har något troligen byggts utan bygglov.</li>
      <li>Fråga hur mycket vatten det fanns de senaste torra somrarna, och om vattnet juridiskt hör till fastigheten.</li>
      <li>Räkna med renoveringen i budgeten. För en äldre finca är 15 till 30 % av köpeskillingen inte ovanligt.</li></ol>
      <p>Har du ett hus i sikte? Låt besiktiga det innan du skriver på. Du får ett pris för att åtgärda varje brist och kan använda det i förhandlingen: <a href="${keuring}">begär en besiktning</a>. Kontakten sker på engelska eller nederländska.</p>
      <p>Vänliga hälsningar<br>Axarquía Home</p>`,
  },
};

const KOLOMMEN_INSCHRIJVINGEN = [
  'Datum', 'Id', 'E-mail', 'Voornaam', 'Situatie', 'Taal', 'Toestemming tips', 'Pagina', 'UTM', 'Pdf gemaild', 'Afgemeld',
];

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
    // Gratis checklist (lead magnet): apart opslaan, pdf mailen, niet naar het bouwbedrijf
    if (d.dienst === 'checklist') return checklist_(d);
    if (!d.naam || !d.email || d.toestemming !== 'ja') return json_({ ok: false, error: 'Verplichte velden ontbreken' });
    // Contactformulier: telefoon en bericht zijn ook verplicht
    if (d.dienst === 'contact' && (!d.telefoon || !d.omschrijving)) return json_({ ok: false, error: 'Verplichte velden ontbreken' });
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

function checklist_(d) {
  const email = String(d.email || '').trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return json_({ ok: false, error: 'Ongeldig e-mailadres' });
  const cache = CacheService.getScriptCache();
  if (d.id && cache.get(d.id)) return json_({ ok: true, dubbel: true });
  // Niet vaker dan één keer per 6 uur naar hetzelfde adres mailen
  const sleutel = 'cl-' + email.toLowerCase();
  const alGemaild = !!cache.get(sleutel);

  const lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    const sh = inschrijvingenSheet_();
    const m = CHECKLIST[d.taal] || CHECKLIST.nl;
    let gemaild = 'nee';
    if (!alGemaild) {
      mailChecklist_(email, String(d.naam || '').trim(), m);
      gemaild = 'ja';
      cache.put(sleutel, '1', 21600);
    }
    sh.appendRow([
      new Date(), d.id || '', email, d.naam || '', d.situatie || '', d.taal || '',
      d.toestemming_tips === 'ja' ? 'ja' : 'nee', d.pagina || '', d.utm || '', gemaild, '',
    ]);
    if (d.id) cache.put(d.id, '1', 21600);
  } finally {
    lock.releaseLock();
  }
  return json_({ ok: true });
}

function mailChecklist_(email, naam, m) {
  const utm = 'utm_source=checklist&utm_medium=email';
  const pdfUrl = `${CONFIG.SITE}/downloads/${m.pdf}`;
  const keuringUrl = `${CONFIG.SITE}${m.keuring}&${utm}`;
  const alias = GmailApp.getAliases().indexOf(CONFIG.AFZENDER_ADRES) !== -1;
  const opts = { htmlBody: m.body(esc_(naam), pdfUrl, keuringUrl), name: CONFIG.AFZENDER, replyTo: CONFIG.AFZENDER_ADRES };
  if (alias) opts.from = CONFIG.AFZENDER_ADRES;
  // Pdf als bijlage meesturen; lukt dat niet (site nog niet online), dan alleen de link
  try {
    const res = UrlFetchApp.fetch(pdfUrl, { muteHttpExceptions: true });
    if (res.getResponseCode() === 200) opts.attachments = [res.getBlob().setName(m.pdf)];
  } catch (err) {
    console.warn('Pdf niet opgehaald: ' + err);
  }
  GmailApp.sendEmail(email, m.subject, '', opts);
}

function inschrijvingenSheet_() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName(CONFIG.TABBLAD_INSCHRIJVINGEN);
  if (!sh) sh = ss.insertSheet(CONFIG.TABBLAD_INSCHRIJVINGEN);
  if (sh.getLastRow() === 0) {
    sh.appendRow(KOLOMMEN_INSCHRIJVINGEN);
    sh.setFrozenRows(1);
    sh.getRange(1, 1, 1, KOLOMMEN_INSCHRIJVINGEN.length).setFontWeight('bold');
  }
  return sh;
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
  // Berichten van het gewone contactformulier hebben dienst "contact"
  const contact = d.dienst === 'contact';
  const regels = [
    ['Dienst', d.dienst], ['Situatie', d.situatie], ['Type woning', d.type_woning], ['Plaats', d.plaats],
    ['Adres/link', d.adres], ['Planning', d.planning], ['Budget', d.budget], ['Omschrijving', d.omschrijving],
    ['Naam', d.naam], ['E-mail', d.email], ['Telefoon', d.telefoon], ['Contactvoorkeur', d.contactvoorkeur],
    ['Taal', d.taal], ['Toestemming partner', d.toestemming_partner || 'nee'],
  ].filter(([, v]) => v);
  const html = `
    <p><b>${contact ? 'Nieuw contactbericht' : 'Nieuwe aanvraag'} via axarquiahome.com</b> (regel ${rijNummer} in de sheet)</p>
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
    subject: contact
      ? `Nieuw contactbericht van ${d.naam}`
      : `Nieuwe aanvraag: ${d.dienst || 'onbekend'} in ${d.plaats || 'onbekend'} (${d.naam})`,
    htmlBody: html,
  });
}

function mailKlant_(d) {
  const teksten = {
    nl: {
      subject: 'We hebben uw aanvraag ontvangen',
      body: `<p>Beste ${esc_(d.naam)},</p><p>Bedankt voor uw aanvraag. Een Nederlandstalige collega neemt binnen 24 uur contact met u op om de volgende stap te bespreken.</p><p>Met vriendelijke groet,<br>Axarquía Home</p>`,
    },
    en: {
      subject: 'We have received your request',
      body: `<p>Dear ${esc_(d.naam)},</p><p>Thank you for your request. One of our team will contact you within 24 hours to discuss the next step.</p><p>Kind regards,<br>Axarquía Home</p>`,
    },
    de: {
      subject: 'Wir haben Ihre Anfrage erhalten',
      body: `<p>Guten Tag ${esc_(d.naam)},</p><p>vielen Dank für Ihre Anfrage. Innerhalb von 24 Stunden meldet sich jemand aus unserem Team bei Ihnen, um den nächsten Schritt zu besprechen. Wir antworten auf Englisch oder Niederländisch.</p><p>Mit freundlichen Grüßen<br>Axarquía Home</p>`,
    },
    sv: {
      subject: 'Vi har tagit emot din förfrågan',
      body: `<p>Hej ${esc_(d.naam)},</p><p>Tack för din förfrågan. Inom 24 timmar hör någon från vårt team av sig för att gå igenom nästa steg. Vi svarar på engelska eller nederländska.</p><p>Vänliga hälsningar<br>Axarquía Home</p>`,
    },
    es: {
      subject: 'Hemos recibido su solicitud',
      body: `<p>Estimado/a ${esc_(d.naam)}:</p><p>Gracias por su solicitud. En menos de 24 horas una persona de nuestro equipo se pondrá en contacto con usted para comentar el siguiente paso.</p><p>Un cordial saludo,<br>Axarquía Home</p>`,
    },
  };
  const m = teksten[d.taal] || teksten.nl;
  send_({
    to: d.email,
    replyTo: CONFIG.MAIL_KOPIE,
    name: CONFIG.AFZENDER,
    subject: m.subject,
    htmlBody: m.body,
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
  inschrijvingenSheet_();
  UrlFetchApp.fetch(CONFIG.SITE, { muteHttpExceptions: true });
  DriveApp.getRootFolder();
  GmailApp.getAliases();
  MailApp.getRemainingDailyQuota();
}
