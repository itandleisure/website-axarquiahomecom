# Keuzehulp koppelen aan Google Sheet en e-mail

Het formulier op `/nl/aanvraag/` stuurt elke aanvraag naar een klein Google Apps Script.
Dat script zet de aanvraag als regel in een Google Sheet, bewaart foto's in Google Drive,
mailt het bouwbedrijf (met Frans in cc) en stuurt de klant een bevestiging.

## Stappen (eenmalig, ongeveer 10 minuten)

1. Maak in Google Drive een nieuwe Google Sheet: **Aanvragen axarquiahome.com**.
2. Kies in de sheet **Extensies > Apps Script**.
3. Verwijder de voorbeeldcode en plak de inhoud van `Code.gs` uit deze map.
4. Vul bovenin bij `CONFIG` het e-mailadres van het bouwbedrijf in (`MAIL_BOUWBEDRIJF`)
   en controleer `MAIL_KOPIE`.
5. Kies bovenaan de functie **setup** en klik **Uitvoeren**. Google vraagt toestemming
   voor Sheets, Drive en Gmail: geef die (bij "Google heeft deze app niet geverifieerd"
   klik je op Geavanceerd > Doorgaan).
6. Klik **Implementeren > Nieuwe implementatie**, type **Web-app**:
   - Uitvoeren als: **Ik**
   - Wie heeft toegang: **Iedereen**
7. Kopieer de URL van de web-app (eindigt op `/exec`) en geef hem aan Claude.
   Claude zet hem in `src/data/site.ts` bij `leadEndpoint`.
8. Deel de sheet met het bouwbedrijf (rechten: bewerken), zodat zij de status en
   bedragen per aanvraag kunnen invullen. Dat is meteen de basis voor de commissie.

## Mail versturen vanaf info@axarquiahome.com (optioneel)

Apps Script verstuurt mail vanaf het Google-account waar de sheet onder valt. Klanten die
op de bevestiging antwoorden, komen altijd bij info@axarquiahome.com uit (reply-to).
Wil je dat de mail ook *van* info@ komt, voeg het adres dan toe als alias:

1. Gmail > Instellingen (tandwiel) > Alle instellingen > **Accounts en import**.
2. Bij **E-mail verzenden als**: klik "Nog een e-mailadres toevoegen".
3. Naam `Axarquía Home`, adres `info@axarquiahome.com`, vinkje "Behandelen als alias" aan.
4. Vul de SMTP-gegevens van Vimexx in (server en poort staan in je Vimexx-mailinstellingen,
   gebruikersnaam is het volledige e-mailadres, met het wachtwoord van de mailbox).
5. Bevestig met de code die Gmail naar info@ stuurt.

Het script ziet de alias daarna vanzelf en gebruikt hem als afzender.

## Wijzigingen later

Pas `Code.gs` aan, en kies daarna **Implementeren > Implementaties beheren > bewerken >
Nieuwe versie**. De URL blijft dan hetzelfde.

## Limieten

Een gratis Google-account kan ongeveer 100 e-mails per dag versturen via Apps Script
(Google Workspace: 1.500). Per aanvraag gaan er 2 mails uit, dus tot zo'n 50 aanvragen per dag.
