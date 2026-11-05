// Verstuurt een aanvraag of contactbericht naar het Google Apps Script (zie apps-script/).
// Gebruikt door de keuzehulp en het contactformulier, zodat beide op dezelfde manier
// in de sheet en bij het bouwbedrijf terechtkomen.

export function newId(): string {
  return crypto.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

/** true als het versturen gelukt is (of in elk geval de server heeft bereikt). */
export async function sendLead(endpoint: string, data: Record<string, unknown>): Promise<boolean> {
  const body = JSON.stringify(data);
  const headers = { 'Content-Type': 'text/plain;charset=utf-8' }; // geen CORS-preflight bij Apps Script
  try {
    const res = await fetch(endpoint, { method: 'POST', body, headers });
    const json = await res.json().catch(() => ({ ok: res.ok }));
    if (!json.ok) throw new Error(json.error || 'Versturen mislukt');
    return true;
  } catch {
    try {
      // Terugval: Apps Script stuurt soms door zonder CORS-headers. Het script negeert dubbele id's.
      await fetch(endpoint, { method: 'POST', body, mode: 'no-cors', headers });
      return true;
    } catch {
      return false;
    }
  }
}
