# Statistieken-dashboard axarquiahome.com

Eén pagina met verkeer, posities in Google en vermeldingen in AI, per taal (NL, EN, later DE).
Het draait als Google Apps Script in een Google Sheet: gratis, zonder cookies op de site,
en alleen te openen met jouw Google-account.

## Wat waar vandaan komt

| Op het dashboard | Bron | Hoe vaak | Automatisch? |
|---|---|---|---|
| Klikken, vertoningen, gem. positie, zoekwoorden, pagina's | Google Search Console | elke nacht | ja |
| Klikken en zoekwoorden in Bing (ook basis voor Copilot) | Bing Webmaster Tools API | elke nacht | ja, met API-sleutel |
| Bezoekers, bronnen, bezoekers via ChatGPT/Perplexity | Google Analytics 4 (of Plausible) | elke nacht | ja, met property-ID |
| Posities op 40 vaste zoekwoorden (NL, BE, ES, UK) | Ubersuggest | wekelijks | ja, via Claude |
| Genoemd in ChatGPT, Gemini, Google AI Overviews | Ubersuggest AI Search Visibility | wekelijks | ja, via Claude |
| Aanvragen per maand en taal | Sheet "Aanvragen axarquiahome.com" | bij openen | ja |

De taal wordt herkend aan het pad: `/nl/`, `/en/`, `/de/`. Komt er Duits bij, dan verschijnt
het vanzelf onder de knop Duits.

## Stap 1: sheet en script (eenmalig, 10 minuten)

Gebruik het Google-account dat eigenaar is van de Search Console-property.

1. Maak in Google Drive een nieuwe Google Sheet: **Statistieken axarquiahome.com**.
2. Kies **Extensies > Apps Script**.
3. Klik links op het tandwiel (**Projectinstellingen**) en zet een vinkje bij
   **"Manifestbestand appsscript.json weergeven in editor"**.
4. Ga terug naar **Editor** en vul drie bestanden:
   - `appsscript.json`: vervang de inhoud door die uit deze map.
   - `Code.gs`: vervang de inhoud door `Statistieken.gs` uit deze map.
   - Klik op **+ > HTML**, noem het bestand `Dashboard` en plak `Dashboard.html`.
5. Kies bovenaan de functie **setup** en klik **Uitvoeren**. Geef toestemming
   (bij "Google heeft deze app niet geverifieerd": Geavanceerd > Doorgaan).
   Setup maakt de tabbladen, haalt meteen de Search Console-cijfers op en zet een
   nachtelijke update om 6:00 aan.
6. Onderin het **Uitvoeringslogboek** staat een regel "Token voor de wekelijkse
   Claude-routine". Die heb je bij stap 2 nodig.

## Stap 2: twee web-apps

Hetzelfde script krijgt twee implementaties: een privé dashboard en een ontvanger
voor de wekelijkse Ubersuggest-cijfers.

1. **Implementeren > Nieuwe implementatie**, type **Web-app**, beschrijving "Dashboard":
   - Uitvoeren als: **Ik**
   - Wie heeft toegang: **Alleen ikzelf**

   De URL (eindigt op `/exec`) is je dashboard. Zet hem in je bladwijzers.
2. Nog een keer **Nieuwe implementatie**, **Web-app**, beschrijving "Ontvanger":
   - Uitvoeren als: **Ik**
   - Wie heeft toegang: **Iedereen**

   Geef deze URL en het token aan Claude. Deze link toont zelf geen cijfers
   (iedereen die niet is ingelogd als jij krijgt "Geen toegang"), hij neemt alleen
   gegevens aan met het juiste token.

Na een wijziging in de code: **Implementeren > Implementaties beheren**, bij allebei
bewerken > **Nieuwe versie**. De URL's blijven gelijk.

## Stap 3: extra bronnen (optioneel, maar aanbevolen)

Sleutels gaan in **Projectinstellingen > Scripteigenschappen** (niet in de code):

| Eigenschap | Waar vind je hem |
|---|---|
| `GA4_PROPERTY_ID` | Google Analytics > Beheer (tandwiel) > **Property-details**: het getal rechtsboven bij Property-ID (bijv. `512345678`, niet de G-code) |
| `BING_API_KEY` | Bing Webmaster Tools > tandwiel (Instellingen) > **API-toegang** > API-sleutel |
| `PLAUSIBLE_API_KEY` | Plausible > Account settings > **API keys** > New API key (Stats API) |
| `AANVRAGEN_SHEET_ID` | De lange code in de URL van de sheet "Aanvragen axarquiahome.com", tussen `/d/` en `/edit` |

**Google Analytics 4**: gebruik hetzelfde Google-account als voor het script, of geef dat account leesrechten op de GA4-property. Na het toevoegen van `GA4_PROPERTY_ID` één keer `ververs` uitvoeren en de nieuwe toestemming geven. Let op: met een cookiebanner telt GA4 alleen bezoekers die cookies accepteren, dus de echte aantallen liggen hoger.

**Plausible** (alternatief, alleen als GA4 niet gekoppeld is) meet echte bezoekers zonder cookies (geen cookiebanner nodig) en laat zien
hoeveel mensen via ChatGPT, Perplexity of Gemini binnenkomen. Search Console ziet alleen
Google-zoekverkeer. Kosten: vanaf ongeveer 9 euro per maand. Maak een account op
plausible.io, voeg `axarquiahome.com` toe en laat Claude het meetscript in de site zetten.

## Stap 4: de wekelijkse AI-update

Ubersuggest heeft geen API die Apps Script kan aanroepen, dus een geplande Claude-taak haalt
elke maandag de posities en AI-vermeldingen op en stuurt ze naar de Ontvanger.
Daarvoor moet de Claude-omgeving `script.google.com` en `script.googleusercontent.com`
mogen bereiken: voeg die toe bij Allowed domains van de cloud environment van dit project.

Wat de taak doet, zodat het later na te bouwen is:

1. Ubersuggest `project_position_info` voor project `axarquiahome.com`, per locatie
   (nl/2528, nl/2056, nl/2724, en/2826, en/2724), laatste 30 dagen.
2. Ubersuggest `brand_visibility_overview` (totaal en per provider) en `brand_prompts`.
3. POST naar de Ontvanger-URL:

```json
{
  "token": "…",
  "datum": "2026-11-09",
  "posities": [{ "taal": "nl", "land": 2528, "zoekwoord": "sleutelbeheer spanje", "positie": 14, "vorige": 18, "pagina": "/nl/sleutelbeheer/", "volume": 90 }],
  "ai": {
    "providers": [{ "provider": "alle", "zichtbaarheid": 15, "vermeldingen": 3, "positie": 2.5, "share": 6 }],
    "prompts": [{ "taal": "nl", "prompt": "Wie doet sleutelbeheer …?", "genoemd": true, "positie": 2, "providers": ["openai"], "merken": ["Axarquía Home"] }]
  }
}
```

`positie` leeg of `null` betekent: niet in de top 100.

## Goed om te weten

- Search Console loopt 2 à 3 dagen achter en toont pas iets als Google de site indexeert
  (dus na livegang en `launchReady: true`).
- Google AI Overviews zitten in de Search Console-cijfers, maar Google splitst ze niet apart uit.
  De Ubersuggest-meting en de AI-bronnen in Plausible vullen dat aan.
- Het dashboard toont van de aanvragen alleen datum, taal, dienst en status, geen persoonsgegevens.
- Het dashboard is alleen voor de eigenaar van het script. Wil je iemand laten meekijken,
  deel dan de sheet zelf (alleen lezen): alle cijfers staan ook in de tabbladen.
