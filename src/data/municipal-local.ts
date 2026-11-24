// Lokale tekst voor de pagina's Bouwvergunning en Praktisch wonen van de grootste gemeenten.
//
// Waarom: de sjabloontekst in municipal-text.ts is voor alle 31 gemeenten bijna gelijk. Google ziet zulke
// pagina's als dun of dubbel. Daarom krijgen alleen de gemeenten hieronder (de 8 met de meeste kopers en
// eigenaren) een eigen, lokale tekst en staan ze in de sitemap. De bouwvergunning- en praktisch-pagina's van
// de andere gemeenten blijven bestaan voor bezoekers, maar staan op "noindex, follow" (zie MunicipalPage.astro).
//
// Nieuwe gemeente erbij? Voeg hier een blok toe in alle vier de talen; de pagina's komen dan vanzelf
// in de sitemap en worden indexeerbaar.
//
// Feiten (gecontroleerd 24 november 2026):
// - Kustwet: Ley 22/1988 de Costas, art. 23 en 26 (beschermingszone 100 m, toestemming van de autonome regio)
//   en overgangsbepaling 3 (20 m voor grond die in 1988 al stedelijk gebied was).
// - Waterwet: Real Decreto Legislativo 1/2001 (Ley de Aguas), art. 6 (zona de policía 100 m) en art. 54.2
//   (eigen put tot 7.000 m³ per jaar, inschrijving in het Registro de Aguas).
// - Vakantieverhuur in appartementen: Ley 49/1960 de Propiedad Horizontal, art. 17.12, gewijzigd door
//   Ley Orgánica 1/2025 (nieuwe toeristische verhuur vraagt instemming van 3/5 van de eigenaren, sinds 3 april 2025).
// - Archeologie Algarrobo: Morro de Mezquitilla en de necropolis van Trayamar (Bien de Interés Cultural).
// - Natuurgebieden: Parque Natural Sierras de Tejeda, Almijara y Alhama; Paraje Natural Acantilados de Maro-Cerro Gordo.
import { municipal } from './municipal';
import type { MunicipalLang, MunicipalPageKind } from './municipal-text';

export interface LocalBlock {
  sections: { h: string; p: string[]; list?: string[] }[];
  faq?: { q: string; a: string }[];
}

type PerLang = Record<MunicipalLang, LocalBlock>;
type PerKind = Record<MunicipalPageKind, PerLang>;

const all = Object.values(municipal);
const total = all.length;
/** Positie van een gemeente als de duurste eerst staat: 1 = hoogste tarief */
const rank = (v: number, key: 'icio' | 'ibiUrban') => 1 + all.filter((m) => m[key] > v).length;

const locale: Record<MunicipalLang, string> = { nl: 'nl-NL', en: 'en-GB', de: 'de-DE', sv: 'sv-SE' };
const pct = (lang: MunicipalLang, n: number) => {
  const s = n.toLocaleString(locale[lang], { maximumFractionDigits: 4 });
  return lang === 'de' || lang === 'sv' ? `${s} %` : `${s}%`;
};
const eur = (lang: MunicipalLang, n: number) => {
  const s = Math.round(n).toLocaleString(locale[lang]);
  return lang === 'nl' ? `€ ${s}` : lang === 'en' ? `€${s}` : `${s} €`;
};

/** Vergelijking met de andere gemeenten: uniek per gemeente, uit de cijfers van Hacienda */
export function comparison(lang: MunicipalLang, kind: MunicipalPageKind, slug: string, name: string): { h: string; p: string[] } | undefined {
  const m = municipal[slug];
  if (!m) return undefined;
  if (kind === 'permit') {
    const r = rank(m.icio, 'icio');
    const reno = 150000;
    const cost = eur(lang, (reno * m.icio) / 100);
    const low = eur(lang, (reno * Math.min(...all.map((x) => x.icio))) / 100);
    const high = eur(lang, (reno * Math.max(...all.map((x) => x.icio))) / 100);
    return {
      nl: { h: `${name} vergeleken met de rest van de Axarquía`, p: [`Met een ICIO van ${pct(lang, m.icio)} staat ${name} op plaats ${r} van de ${total} gemeenten in de Axarquía, gerekend van duur naar goedkoop. Bij een complete renovatie van ${eur(lang, reno)} betaalt u hier ${cost} aan bouwbelasting. In de goedkoopste gemeente zou dat ${low} zijn, in de duurste ${high}. Het verschil is zelden een reden om ergens anders te kopen, maar reken het wel mee in uw begroting.`] },
      en: { h: `${name} compared with the rest of the Axarquía`, p: [`With an ICIO of ${pct(lang, m.icio)}, ${name} ranks ${r} of the ${total} municipalities in the Axarquía, from most to least expensive. On a full renovation costing ${eur(lang, reno)} you pay ${cost} in building tax here. In the cheapest municipality it would be ${low}, in the most expensive ${high}. The difference is rarely a reason to buy elsewhere, but do include it in your budget.`] },
      de: { h: `${name} im Vergleich zur übrigen Axarquía`, p: [`Mit einer ICIO von ${pct(lang, m.icio)} liegt ${name} auf Platz ${r} der ${total} Gemeinden der Axarquía, von teuer nach günstig. Bei einer Komplettrenovierung für ${eur(lang, reno)} zahlen Sie hier ${cost} Bausteuer. In der günstigsten Gemeinde wären es ${low}, in der teuersten ${high}. Ein Grund, anderswo zu kaufen, ist das selten, aber rechnen Sie es in Ihr Budget ein.`] },
      sv: { h: `${name} jämfört med resten av Axarquía`, p: [`Med en ICIO på ${pct(lang, m.icio)} hamnar ${name} på plats ${r} av ${total} kommuner i Axarquía, räknat från dyrast till billigast. Vid en totalrenovering för ${eur(lang, reno)} betalar du här ${cost} i byggskatt. I den billigaste kommunen vore det ${low}, i den dyraste ${high}. Skillnaden är sällan ett skäl att köpa någon annanstans, men räkna med den i budgeten.`] },
    }[lang];
  }
  const r = rank(m.ibiUrban, 'ibiUrban');
  const cv = 150000;
  const ibi = eur(lang, (cv * m.ibiUrban) / 100);
  const imp = m.catastro >= 2012 ? 1.1 : 2;
  const nr = eur(lang, ((cv * imp) / 100) * 0.19);
  return {
    nl: { h: `Vaste lasten in ${name} vergeleken`, p: [`Met een IBI-tarief van ${pct(lang, m.ibiUrban)} staat ${name} op plaats ${r} van de ${total} gemeenten in de Axarquía, gerekend van duur naar goedkoop. Let wel: het tarief zegt niet alles, want de catastrale waarden zijn hier voor het laatst in ${m.catastro} herzien. Voor een huis met een catastrale waarde van ${eur(lang, cv)} betaalt u in ${name} ${ibi} IBI per jaar, en als niet-resident uit de EU nog eens ongeveer ${nr} inkomstenbelasting (${pct(lang, imp)} fictief inkomen, 19%).`] },
    en: { h: `Running costs in ${name} compared`, p: [`With an IBI rate of ${pct(lang, m.ibiUrban)}, ${name} ranks ${r} of the ${total} municipalities in the Axarquía, from most to least expensive. The rate is not the whole story, because cadastral values here were last revised in ${m.catastro}. For a home with a cadastral value of ${eur(lang, cv)} you pay ${ibi} IBI a year in ${name}, and as an EU non-resident about ${nr} income tax on top (${pct(lang, imp)} notional income, 19%; 24% from outside the EU).`] },
    de: { h: `Laufende Kosten in ${name} im Vergleich`, p: [`Mit einem IBI-Satz von ${pct(lang, m.ibiUrban)} liegt ${name} auf Platz ${r} der ${total} Gemeinden der Axarquía, von teuer nach günstig. Der Satz allein sagt aber wenig, denn die Katasterwerte wurden hier zuletzt ${m.catastro} revidiert. Für ein Haus mit einem Katasterwert von ${eur(lang, cv)} zahlen Sie in ${name} ${ibi} IBI im Jahr, und als Nichtresident aus der EU zusätzlich etwa ${nr} Einkommensteuer (${pct(lang, imp)} fiktives Einkommen, 19 %).`] },
    sv: { h: `Löpande kostnader i ${name} jämfört`, p: [`Med en IBI-sats på ${pct(lang, m.ibiUrban)} hamnar ${name} på plats ${r} av ${total} kommuner i Axarquía, räknat från dyrast till billigast. Satsen säger inte allt, eftersom taxeringsvärdena här senast reviderades ${m.catastro}. För ett hus med ett taxeringsvärde på ${eur(lang, cv)} betalar du i ${name} ${ibi} i IBI per år, och som icke-resident från EU dessutom ungefär ${nr} i inkomstskatt (${pct(lang, imp)} fiktiv inkomst, 19 %).`] },
  }[lang];
}

// Herbruikbare zinnen over de kustwet, in vier talen
const coast = {
  nl: (place: string) => `Binnen 100 meter van de kustlijn geldt in ${place} de beschermingszone van de Spaanse kustwet (<em>Ley de Costas</em>); voor grond die in 1988 al stedelijk gebied was, is dat 20 meter. Wilt u in die zone uitbreiden, bijbouwen of het gebruik veranderen, dan hebt u naast de gemeentelijke vergunning ook toestemming van de Junta de Andalucía nodig. Een renovatie binnen het bestaande huis, zonder extra volume, is daar in de regel wel mogelijk; vraag vooraf na welke melding de Junta verwacht.`,
  en: (place: string) => `Within 100 metres of the shoreline, ${place} falls under the protection zone of the Spanish Coastal Law (<em>Ley de Costas</em>); for land that was already urban in 1988 the zone is 20 metres. If you want to extend, add a building or change the use there, you need authorisation from the Junta de Andalucía on top of the council permit. Renovating inside the existing house, without adding volume, is normally still possible; check beforehand which notification the Junta expects.`,
  de: (place: string) => `Innerhalb von 100 Metern von der Uferlinie gilt in ${place} die Schutzzone des spanischen Küstengesetzes (<em>Ley de Costas</em>); für Grund, der 1988 schon städtisch war, sind es 20 Meter. Wer dort anbauen, zusätzlich bauen oder die Nutzung ändern will, braucht neben der Genehmigung der Gemeinde auch eine Erlaubnis der Junta de Andalucía. Eine Renovierung im bestehenden Haus ohne zusätzliches Volumen ist dort in der Regel möglich; klären Sie vorher, welche Anzeige die Junta erwartet.`,
  sv: (place: string) => `Inom 100 meter från strandlinjen gäller i ${place} skyddszonen i den spanska kustlagen (<em>Ley de Costas</em>); för mark som redan 1988 var tätort är zonen 20 meter. Vill du bygga till, bygga nytt eller ändra användningen där behöver du utöver kommunens lov också tillstånd från Junta de Andalucía. En renovering inne i det befintliga huset, utan extra volym, går som regel bra; fråga i förväg vilken anmälan Junta vill ha.`,
};

// Vakantieverhuur in een appartementencomplex (Ley de Propiedad Horizontal, sinds april 2025)
const rental = {
  nl: 'Wilt u een appartement als vakantiewoning verhuren? Dan registreert u het bij de Junta de Andalucía (<em>Registro de Turismo de Andalucía</em>) en vraagt u sinds juli 2025 ook een landelijk registratienummer aan. Sinds april 2025 is voor nieuwe toeristische verhuur in een appartementencomplex bovendien de instemming van drie vijfde van de eigenaren nodig. Vraag bij aankoop dus naar de statuten en de laatste besluiten van de vereniging van eigenaars (<em>comunidad de propietarios</em>).',
  en: 'Want to let an apartment to holidaymakers? Register it with the Junta de Andalucía (<em>Registro de Turismo de Andalucía</em>) and, since July 2025, also apply for a national registration number. Since April 2025, new holiday letting in an apartment building also needs the approval of three fifths of the owners. When you buy, ask for the community statutes and the latest decisions of the owners’ association (<em>comunidad de propietarios</em>).',
  de: 'Möchten Sie eine Wohnung an Feriengäste vermieten? Dann registrieren Sie sie bei der Junta de Andalucía (<em>Registro de Turismo de Andalucía</em>) und beantragen seit Juli 2025 auch eine landesweite Registriernummer. Seit April 2025 braucht neue Ferienvermietung in einer Wohnanlage außerdem die Zustimmung von drei Fünfteln der Eigentümer. Fragen Sie beim Kauf nach der Satzung und den letzten Beschlüssen der Eigentümergemeinschaft (<em>comunidad de propietarios</em>).',
  sv: 'Vill du hyra ut en lägenhet till turister? Då registrerar du den hos Junta de Andalucía (<em>Registro de Turismo de Andalucía</em>) och ansöker sedan juli 2025 även om ett nationellt registreringsnummer. Sedan april 2025 krävs dessutom att tre femtedelar av ägarna godkänner ny turistuthyrning i ett flerbostadshus. Be därför om stadgarna och de senaste besluten från ägarföreningen (<em>comunidad de propietarios</em>) när du köper.',
};

// Eigen put of bron (Ley de Aguas, art. 54.2)
const well = {
  nl: 'Heeft het huis een eigen put of bron? Een put voor eigen gebruik tot 7.000 m³ per jaar mag, maar moet ingeschreven staan in het waterregister (<em>Registro de Aguas</em>) van de Junta. Vraag bij aankoop om dat bewijs: een niet-ingeschreven put kan de gemeente of de Junta laten sluiten, en de notaris of de koper na u vraagt ernaar.',
  en: 'Does the house have its own well or spring? A well for your own use of up to 7,000 m³ a year is allowed, but it must be entered in the Junta’s water register (<em>Registro de Aguas</em>). Ask for proof when you buy: an unregistered well can be closed by the authorities, and the notary or the next buyer will ask about it.',
  de: 'Hat das Haus einen eigenen Brunnen oder eine Quelle? Ein Brunnen für den Eigenbedarf bis 7.000 m³ im Jahr ist erlaubt, muss aber im Wasserregister (<em>Registro de Aguas</em>) der Junta eingetragen sein. Lassen Sie sich beim Kauf den Nachweis zeigen: Einen nicht eingetragenen Brunnen können die Behörden schließen lassen, und Notar oder späterer Käufer fragen danach.',
  sv: 'Har huset en egen brunn eller källa? En brunn för eget bruk upp till 7 000 m³ per år är tillåten, men den måste vara inskriven i Juntas vattenregister (<em>Registro de Aguas</em>). Be om beviset när du köper: en oregistrerad brunn kan myndigheterna stänga, och notarien eller nästa köpare frågar efter den.',
};

export const municipalLocal: Record<string, PerKind> = {
  nerja: {
    permit: {
      nl: { sections: [
        { h: 'Bouwen aan de kust en bij de kliffen van Maro', p: [
          `Veel huizen in Nerja staan dicht bij zee. ${coast.nl('Nerja')}`,
          'Ten oosten van Maro liggen de kliffen van Maro-Cerro Gordo, een beschermd natuurgebied (<em>paraje natural</em>), en het noorden van de gemeente hoort bij het natuurpark Sierras de Tejeda, Almijara y Alhama. Daar is bijna elk werk aan een huis gebonden aan extra regels, en vaak is ook een advies van de milieudienst van de Junta nodig.',
        ] },
        { h: 'Verbouwen in het centrum van Nerja', p: [
          'Rond de Balcón de Europa en in de oude straten zijn de straten smal, is parkeren beperkt en gelden vaste tijden voor laden en lossen. Een container of steiger op straat vraagt een aparte vergunning van de gemeente voor het gebruik van de openbare weg (<em>ocupación de vía pública</em>). Wij plannen de aanvoer daarom vroeg in de ochtend en met kleine wagens, en vragen die vergunning tegelijk met de melding aan.',
        ] },
      ], faq: [
        { q: 'Mag ik in Nerja mijn dakterras overkappen?', a: 'Een vaste overkapping telt meestal als extra bebouwde oppervlakte en vraagt een vergunning; of het mag, hangt af van wat het bestemmingsplan (PGOU) op uw perceel toestaat. In een appartementencomplex hebt u ook toestemming van de vereniging van eigenaars nodig. Een zonnezeil of losse parasol kan zonder vergunning.' },
      ] },
      en: { sections: [
        { h: 'Building on the coast and near the Maro cliffs', p: [
          `Many homes in Nerja are close to the sea. ${coast.en('Nerja')}`,
          'East of Maro lie the cliffs of Maro-Cerro Gordo, a protected natural area (<em>paraje natural</em>), and the north of the municipality belongs to the Sierras de Tejeda, Almijara y Alhama natural park. Almost any work on a house there comes with extra rules, and a report from the Junta’s environmental department is often needed as well.',
        ] },
        { h: 'Renovating in the centre of Nerja', p: [
          'Around the Balcón de Europa and in the old streets, roads are narrow, parking is limited and there are fixed times for loading and unloading. A skip or scaffolding on the street needs a separate council permit for use of the public road (<em>ocupación de vía pública</em>). We therefore schedule deliveries early in the morning with small vans, and apply for that permit together with the notification.',
        ] },
      ], faq: [
        { q: 'Can I cover my roof terrace in Nerja?', a: 'A fixed roof usually counts as extra built floor space and needs a permit; whether it is allowed depends on what the town plan (PGOU) permits on your plot. In an apartment building you also need the approval of the owners’ association. A shade sail or free-standing parasol needs no permit.' },
      ] },
      de: { sections: [
        { h: 'Bauen an der Küste und bei den Klippen von Maro', p: [
          `Viele Häuser in Nerja liegen nah am Meer. ${coast.de('Nerja')}`,
          'Östlich von Maro liegen die Klippen von Maro-Cerro Gordo, ein geschütztes Naturgebiet (<em>paraje natural</em>), und der Norden der Gemeinde gehört zum Naturpark Sierras de Tejeda, Almijara y Alhama. Dort gelten für fast jede Arbeit am Haus zusätzliche Regeln, und oft ist auch eine Stellungnahme der Umweltbehörde der Junta nötig.',
        ] },
        { h: 'Umbauen im Zentrum von Nerja', p: [
          'Rund um den Balcón de Europa und in den alten Gassen sind die Straßen eng, Parkplätze knapp, und es gelten feste Lieferzeiten. Ein Container oder Gerüst auf der Straße braucht eine eigene Genehmigung der Gemeinde für die Nutzung öffentlicher Flächen (<em>ocupación de vía pública</em>). Wir planen Lieferungen deshalb früh am Morgen mit kleinen Fahrzeugen und beantragen diese Genehmigung zusammen mit der Anzeige.',
        ] },
      ], faq: [
        { q: 'Darf ich in Nerja meine Dachterrasse überdachen?', a: 'Eine feste Überdachung zählt meist als zusätzliche bebaute Fläche und braucht eine Genehmigung; ob sie erlaubt ist, hängt vom Bebauungsplan (PGOU) für Ihr Grundstück ab. In einer Wohnanlage brauchen Sie auch die Zustimmung der Eigentümergemeinschaft. Ein Sonnensegel oder freistehender Schirm geht ohne Genehmigung.' },
      ] },
      sv: { sections: [
        { h: 'Bygga vid kusten och nära klipporna vid Maro', p: [
          `Många hus i Nerja ligger nära havet. ${coast.sv('Nerja')}`,
          'Öster om Maro ligger klipporna vid Maro-Cerro Gordo, ett skyddat naturområde (<em>paraje natural</em>), och norra delen av kommunen hör till naturparken Sierras de Tejeda, Almijara y Alhama. Där gäller extra regler för nästan allt arbete på ett hus, och ofta behövs också ett yttrande från Juntas miljöförvaltning.',
        ] },
        { h: 'Renovera i centrala Nerja', p: [
          'Runt Balcón de Europa och i de gamla gränderna är gatorna smala, parkeringen begränsad och det finns fasta tider för lastning och lossning. En container eller byggställning på gatan kräver ett särskilt tillstånd från kommunen för att använda allmän plats (<em>ocupación de vía pública</em>). Vi planerar därför leveranser tidigt på morgonen med små bilar och söker det tillståndet samtidigt med anmälan.',
        ] },
      ], faq: [
        { q: 'Får jag bygga tak över min takterrass i Nerja?', a: 'Ett fast tak räknas oftast som extra byggd yta och kräver bygglov; om det är tillåtet beror på vad detaljplanen (PGOU) medger för din tomt. I ett flerbostadshus behöver du också ägarföreningens godkännande. Ett solsegel eller ett fristående parasoll kräver inget lov.' },
      ] },
    },
    practical: {
      nl: { sections: [
        { h: 'Een appartement in Nerja verhuren', p: [rental.nl, 'In Nerja staan veel woningen in complexen met een gedeeld zwembad en tuin. Naast de IBI betaalt u dan een maandelijkse bijdrage aan de vereniging van eigenaars. Vraag bij aankoop of er een extra heffing (<em>derrama</em>) is besloten voor bijvoorbeeld een nieuw dak of een lift; die komt anders voor uw rekening.'] },
      ], faq: [
        { q: 'Mag ik mijn appartement in Nerja als vakantiewoning verhuren?', a: 'Alleen met een registratie bij de Junta de Andalucía en een landelijk registratienummer. Voor nieuwe verhuur in een complex is sinds april 2025 ook de instemming van drie vijfde van de eigenaren nodig, tenzij de statuten het al toestaan.' },
      ] },
      en: { sections: [
        { h: 'Letting an apartment in Nerja', p: [rental.en, 'Many homes in Nerja are in complexes with a shared pool and garden. On top of the IBI you then pay a monthly fee to the owners’ association. When you buy, ask whether an extra levy (<em>derrama</em>) has been agreed, for example for a new roof or a lift; otherwise it will be yours to pay.'] },
      ], faq: [
        { q: 'Can I let my apartment in Nerja to holidaymakers?', a: 'Only with a registration at the Junta de Andalucía and a national registration number. Since April 2025, new holiday letting in a complex also needs the approval of three fifths of the owners, unless the statutes already allow it.' },
      ] },
      de: { sections: [
        { h: 'Eine Wohnung in Nerja vermieten', p: [rental.de, 'In Nerja liegen viele Wohnungen in Anlagen mit gemeinsamem Pool und Garten. Neben der IBI zahlen Sie dann ein monatliches Hausgeld an die Eigentümergemeinschaft. Fragen Sie beim Kauf, ob eine Sonderumlage (<em>derrama</em>) beschlossen wurde, etwa für ein neues Dach oder einen Aufzug; sonst tragen Sie sie.'] },
      ], faq: [
        { q: 'Darf ich meine Wohnung in Nerja an Feriengäste vermieten?', a: 'Nur mit einer Registrierung bei der Junta de Andalucía und einer landesweiten Registriernummer. Für neue Vermietung in einer Wohnanlage braucht es seit April 2025 auch die Zustimmung von drei Fünfteln der Eigentümer, sofern die Satzung es nicht schon erlaubt.' },
      ] },
      sv: { sections: [
        { h: 'Hyra ut en lägenhet i Nerja', p: [rental.sv, 'I Nerja ligger många bostäder i anläggningar med gemensam pool och trädgård. Utöver IBI betalar du då en månadsavgift till ägarföreningen. Fråga när du köper om en extra uttaxering (<em>derrama</em>) har beslutats, till exempel för nytt tak eller hiss; annars är det du som betalar den.'] },
      ], faq: [
        { q: 'Får jag hyra ut min lägenhet i Nerja till turister?', a: 'Bara med en registrering hos Junta de Andalucía och ett nationellt registreringsnummer. Sedan april 2025 krävs för ny uthyrning i en anläggning också att tre femtedelar av ägarna godkänner det, om inte stadgarna redan tillåter det.' },
      ] },
    },
  },

  frigiliana: {
    permit: {
      nl: { sections: [
        { h: 'Het witte dorp: regels voor het aanzicht', p: [
          'Frigiliana is een van de bekendste witte dorpen van Andalusië, en de gemeente bewaakt dat beeld. In het oude centrum (het <em>barrio mudéjar</em>) let de gemeente op witte gevels, traditionele dakpannen, houten deuren en luiken en de maat van ramen en balkons. Reken erop dat een aanvraag voor een nieuwe gevel, een dakopbouw of andere kozijnen hier strenger wordt bekeken dan elders, en lever foto’s en een tekening van het eindresultaat mee.',
        ] },
        { h: 'Fincas in het natuurpark', p: [
          'Een groot deel van de gemeente ligt in het natuurpark Sierras de Tejeda, Almijara y Alhama. Voor fincas daar geldt naast de bouwwet ook het beheerplan van het park: uitbreiden mag zelden, en voor werk aan het huis, de toegangsweg of een zwembad is vaak een advies van de milieudienst van de Junta nodig. Dat kost tijd; plan bij een vergunning eerder zes maanden dan drie.',
        ] },
      ], faq: [
        { q: 'Mag ik in het centrum van Frigiliana mijn gevel in een andere kleur schilderen?', a: 'In het oude centrum vrijwel nooit: wit is daar de regel, met hooguit een gekleurde plint of rand volgens de lokale traditie. Vraag bij twijfel vooraf bij het gemeentehuis wat is toegestaan.' },
      ] },
      en: { sections: [
        { h: 'The white village: rules on appearance', p: [
          'Frigiliana is one of the best-known white villages in Andalusia, and the council protects that image. In the old town (the <em>barrio mudéjar</em>) it watches for white façades, traditional roof tiles, wooden doors and shutters and the size of windows and balconies. Expect an application for a new façade, a rooftop extension or different window frames to be looked at more strictly than elsewhere, and include photos and a drawing of the end result.',
        ] },
        { h: 'Fincas in the natural park', p: [
          'Much of the municipality lies in the Sierras de Tejeda, Almijara y Alhama natural park. For fincas there, the park’s management plan applies on top of the planning law: extensions are rarely allowed, and work on the house, the access road or a pool often needs a report from the Junta’s environmental department. That takes time; with a permit, plan for six months rather than three.',
        ] },
      ], faq: [
        { q: 'Can I paint my façade a different colour in the centre of Frigiliana?', a: 'In the old town almost never: white is the rule, with at most a coloured plinth or edge in the local tradition. If in doubt, ask the town hall beforehand what is allowed.' },
      ] },
      de: { sections: [
        { h: 'Das weiße Dorf: Regeln für das Ortsbild', p: [
          'Frigiliana ist eines der bekanntesten weißen Dörfer Andalusiens, und die Gemeinde schützt dieses Bild. Im alten Ortskern (dem <em>barrio mudéjar</em>) achtet sie auf weiße Fassaden, traditionelle Dachziegel, Holztüren und -läden und die Größe von Fenstern und Balkonen. Rechnen Sie damit, dass ein Antrag für eine neue Fassade, einen Dachaufbau oder andere Fensterrahmen hier strenger geprüft wird als anderswo, und legen Sie Fotos und eine Zeichnung des Ergebnisses bei.',
        ] },
        { h: 'Fincas im Naturpark', p: [
          'Ein großer Teil der Gemeinde liegt im Naturpark Sierras de Tejeda, Almijara y Alhama. Für Fincas dort gilt neben dem Baugesetz auch der Managementplan des Parks: Anbauen ist selten erlaubt, und für Arbeiten am Haus, am Zufahrtsweg oder einen Pool braucht es oft eine Stellungnahme der Umweltbehörde der Junta. Das kostet Zeit; planen Sie bei einer Genehmigung eher sechs Monate als drei.',
        ] },
      ], faq: [
        { q: 'Darf ich im Zentrum von Frigiliana meine Fassade farbig streichen?', a: 'Im alten Ortskern fast nie: Weiß ist dort die Regel, höchstens mit einem farbigen Sockel oder Rand nach örtlicher Tradition. Fragen Sie im Zweifel vorher im Rathaus, was erlaubt ist.' },
      ] },
      sv: { sections: [
        { h: 'Den vita byn: regler för utseendet', p: [
          'Frigiliana är en av Andalusiens mest kända vita byar, och kommunen värnar om den bilden. I den gamla stadskärnan (<em>barrio mudéjar</em>) bevakar kommunen vita fasader, traditionellt taktegel, trädörrar och fönsterluckor och storleken på fönster och balkonger. Räkna med att en ansökan om ny fasad, påbyggnad på taket eller andra fönsterkarmar granskas strängare här än på andra håll, och bifoga foton och en ritning av slutresultatet.',
        ] },
        { h: 'Fincor i naturparken', p: [
          'En stor del av kommunen ligger i naturparken Sierras de Tejeda, Almijara y Alhama. För fincor där gäller utöver bygglagen också parkens skötselplan: att bygga till är sällan tillåtet, och arbete på huset, tillfartsvägen eller en pool kräver ofta ett yttrande från Juntas miljöförvaltning. Det tar tid; räkna hellre med sex månader än tre för ett bygglov.',
        ] },
      ], faq: [
        { q: 'Får jag måla fasaden i en annan färg i centrala Frigiliana?', a: 'I den gamla stadskärnan nästan aldrig: vitt är regeln, med högst en färgad sockel eller kant enligt lokal tradition. Fråga kommunhuset i förväg om du är osäker.' },
      ] },
    },
    practical: {
      nl: { sections: [
        { h: 'Water op een finca rond Frigiliana', p: [well.nl, 'In het dorp komt het water van het gemeentelijke net. Op de fincas in de heuvels hebben veel huizen een watertank en soms een aandeel in een oude irrigatiegoot (<em>acequia</em>) met vaste beurten. Laat bij aankoop vastleggen welke waterrechten bij het perceel horen.'] },
      ], faq: [
        { q: 'Heeft elke finca rond Frigiliana aansluiting op het waterleidingnet?', a: 'Nee. Veel fincas buiten het dorp hebben een eigen tank, een put of een aandeel in een irrigatiegoot. Controleer bij aankoop waar het water vandaan komt en of de put is ingeschreven.' },
      ] },
      en: { sections: [
        { h: 'Water on a finca around Frigiliana', p: [well.en, 'In the village the water comes from the municipal network. On the fincas in the hills many houses have a water tank and sometimes a share in an old irrigation channel (<em>acequia</em>) with fixed turns. When you buy, have the water rights that belong to the plot written down.'] },
      ], faq: [
        { q: 'Is every finca around Frigiliana connected to mains water?', a: 'No. Many fincas outside the village have their own tank, a well or a share in an irrigation channel. When you buy, check where the water comes from and whether the well is registered.' },
      ] },
      de: { sections: [
        { h: 'Wasser auf einer Finca rund um Frigiliana', p: [well.de, 'Im Dorf kommt das Wasser aus dem Netz der Gemeinde. Auf den Fincas in den Hügeln haben viele Häuser einen Wassertank und manchmal einen Anteil an einem alten Bewässerungskanal (<em>acequia</em>) mit festen Zeiten. Lassen Sie beim Kauf festhalten, welche Wasserrechte zum Grundstück gehören.'] },
      ], faq: [
        { q: 'Ist jede Finca rund um Frigiliana an das Wassernetz angeschlossen?', a: 'Nein. Viele Fincas außerhalb des Dorfes haben einen eigenen Tank, einen Brunnen oder einen Anteil an einem Bewässerungskanal. Prüfen Sie beim Kauf, woher das Wasser kommt und ob der Brunnen eingetragen ist.' },
      ] },
      sv: { sections: [
        { h: 'Vatten på en finca runt Frigiliana', p: [well.sv, 'I byn kommer vattnet från det kommunala nätet. På fincorna i bergen har många hus en vattentank och ibland en andel i en gammal bevattningskanal (<em>acequia</em>) med fasta turer. Låt skriva in vilka vattenrättigheter som hör till tomten när du köper.'] },
      ], faq: [
        { q: 'Är alla fincor runt Frigiliana anslutna till det kommunala vattnet?', a: 'Nej. Många fincor utanför byn har egen tank, brunn eller en andel i en bevattningskanal. Kontrollera var vattnet kommer ifrån och om brunnen är registrerad när du köper.' },
      ] },
    },
  },

  torrox: {
    permit: {
      nl: { sections: [
        { h: 'Torrox Costa: kust en appartementencomplexen', p: [
          `De gemeente bestaat uit het oude dorp op de heuvel en de kust met Torrox Costa en El Morche. ${coast.nl('Torrox Costa en El Morche')}`,
          'Aan de kust staan veel appartementencomplexen. Werk aan de gevel, het dicht maken van een terras (<em>cerramiento</em>), een airco-unit op de gevel of een andere kleur zonwering vraagt daar naast de melding bij de gemeente ook toestemming van de vereniging van eigenaars. Een terras dicht maken telt bovendien vaak als extra oppervlakte en vraagt dan een vergunning.',
        ] },
        { h: 'Het dorp Torrox', p: [
          'In het oude dorp zijn de straten steil en smal. Materiaal gaat vaak met een kleine dumper of met de hand naar binnen, en een container op straat vraagt een vergunning voor het gebruik van de openbare weg. Op de hellingen rond het dorp staan veel huizen op <em>suelo rústico</em>, waar de strengere regels voor het buitengebied gelden.',
        ] },
      ], faq: [
        { q: 'Mag ik in Torrox Costa mijn terras met glas dichtmaken?', a: 'Alleen met toestemming van de vereniging van eigenaars, omdat het aanzicht van het gebouw verandert, en meestal ook met een vergunning van de gemeente, omdat het als extra woonoppervlak telt. Zonder die stukken kan de gemeente of de comunidad eisen dat het weer weg gaat.' },
      ] },
      en: { sections: [
        { h: 'Torrox Costa: the coast and apartment complexes', p: [
          `The municipality consists of the old village on the hill and the coast with Torrox Costa and El Morche. ${coast.en('Torrox Costa and El Morche')}`,
          'Along the coast there are many apartment complexes. Work on the façade, enclosing a terrace (<em>cerramiento</em>), an air conditioning unit on the façade or a different colour of awning needs the approval of the owners’ association as well as the notification to the council. Enclosing a terrace also often counts as extra floor space and then needs a permit.',
        ] },
        { h: 'The village of Torrox', p: [
          'In the old village the streets are steep and narrow. Materials often go in by small dumper or by hand, and a skip on the street needs a permit for use of the public road. On the slopes around the village many houses stand on <em>suelo rústico</em>, where the stricter countryside rules apply.',
        ] },
      ], faq: [
        { q: 'Can I glaze in my terrace in Torrox Costa?', a: 'Only with the approval of the owners’ association, because it changes the look of the building, and usually also with a council permit, because it counts as extra living space. Without those papers the council or the community can order it to be removed.' },
      ] },
      de: { sections: [
        { h: 'Torrox Costa: Küste und Wohnanlagen', p: [
          `Die Gemeinde besteht aus dem alten Dorf auf dem Hügel und der Küste mit Torrox Costa und El Morche. ${coast.de('Torrox Costa und El Morche')}`,
          'An der Küste gibt es viele Wohnanlagen. Arbeiten an der Fassade, das Schließen einer Terrasse (<em>cerramiento</em>), ein Klimagerät an der Fassade oder eine andersfarbige Markise brauchen dort neben der Anzeige bei der Gemeinde auch die Zustimmung der Eigentümergemeinschaft. Eine geschlossene Terrasse zählt zudem oft als zusätzliche Fläche und braucht dann eine Genehmigung.',
        ] },
        { h: 'Das Dorf Torrox', p: [
          'Im alten Dorf sind die Straßen steil und eng. Material kommt oft mit einem kleinen Dumper oder von Hand ins Haus, und ein Container auf der Straße braucht eine Genehmigung für die Nutzung öffentlicher Flächen. An den Hängen rund um das Dorf stehen viele Häuser auf <em>suelo rústico</em>, wo die strengeren Regeln für den Außenbereich gelten.',
        ] },
      ], faq: [
        { q: 'Darf ich in Torrox Costa meine Terrasse verglasen?', a: 'Nur mit Zustimmung der Eigentümergemeinschaft, weil sich das Aussehen des Gebäudes ändert, und meist auch mit einer Genehmigung der Gemeinde, weil es als zusätzliche Wohnfläche zählt. Ohne diese Unterlagen können Gemeinde oder Gemeinschaft den Rückbau verlangen.' },
      ] },
      sv: { sections: [
        { h: 'Torrox Costa: kusten och lägenhetsanläggningarna', p: [
          `Kommunen består av den gamla byn på kullen och kusten med Torrox Costa och El Morche. ${coast.sv('Torrox Costa och El Morche')}`,
          'Längs kusten finns många lägenhetsanläggningar. Arbete på fasaden, att glasa in en terrass (<em>cerramiento</em>), en luftkonditionering på fasaden eller en markis i annan färg kräver där utöver anmälan till kommunen också ägarföreningens godkännande. En inglasad terrass räknas dessutom ofta som extra yta och kräver då bygglov.',
        ] },
        { h: 'Byn Torrox', p: [
          'I den gamla byn är gatorna branta och smala. Material bärs ofta in med en liten dumper eller för hand, och en container på gatan kräver tillstånd för att använda allmän plats. På sluttningarna runt byn står många hus på <em>suelo rústico</em>, där de strängare reglerna för landsbygden gäller.',
        ] },
      ], faq: [
        { q: 'Får jag glasa in min terrass i Torrox Costa?', a: 'Bara med ägarföreningens godkännande, eftersom byggnadens utseende ändras, och oftast också med bygglov från kommunen, eftersom det räknas som extra boyta. Utan de handlingarna kan kommunen eller föreningen kräva att den tas bort.' },
      ] },
    },
    practical: {
      nl: { sections: [
        { h: 'Wonen in een complex in Torrox Costa', p: ['Torrox Costa en El Morche hebben veel appartementencomplexen, en Torrox heeft een van de grootste Duitstalige gemeenschappen van de Axarquía. In een complex betaalt u naast de IBI een maandelijkse bijdrage aan de vereniging van eigenaars voor onderhoud, zwembad, tuin en eventueel een conciërge. Vraag bij aankoop om de laatste jaarrekening en de notulen: daar ziet u of er grote uitgaven of een extra heffing (<em>derrama</em>) aankomen.', rental.nl] },
      ], faq: [
        { q: 'Wat kost een vereniging van eigenaars in Torrox Costa?', a: 'Dat verschilt sterk per complex: met zwembad, tuin en lift is het meer dan in een klein gebouw zonder voorzieningen. De verkoper moet bij de notaris een verklaring van de comunidad laten zien dat er geen achterstand is; vraag ook de begroting voor het komende jaar.' },
      ] },
      en: { sections: [
        { h: 'Living in a complex in Torrox Costa', p: ['Torrox Costa and El Morche have many apartment complexes, and Torrox has one of the largest German-speaking communities in the Axarquía. In a complex you pay a monthly fee to the owners’ association on top of the IBI, for maintenance, pool, garden and sometimes a caretaker. When you buy, ask for the latest accounts and minutes: they show whether large expenses or an extra levy (<em>derrama</em>) are coming.', rental.en] },
      ], faq: [
        { q: 'What does the community fee cost in Torrox Costa?', a: 'It varies widely by complex: with a pool, garden and lift it is more than in a small building without facilities. At the notary the seller must show a certificate from the community that there are no arrears; also ask for next year’s budget.' },
      ] },
      de: { sections: [
        { h: 'Wohnen in einer Anlage in Torrox Costa', p: ['Torrox Costa und El Morche haben viele Wohnanlagen, und Torrox hat eine der größten deutschsprachigen Gemeinschaften der Axarquía. In einer Anlage zahlen Sie neben der IBI ein monatliches Hausgeld an die Eigentümergemeinschaft für Instandhaltung, Pool, Garten und eventuell einen Hausmeister. Fragen Sie beim Kauf nach der letzten Jahresabrechnung und den Protokollen: Daran sehen Sie, ob große Ausgaben oder eine Sonderumlage (<em>derrama</em>) anstehen.', rental.de] },
      ], faq: [
        { q: 'Was kostet das Hausgeld in Torrox Costa?', a: 'Das ist je Anlage sehr verschieden: Mit Pool, Garten und Aufzug ist es mehr als in einem kleinen Haus ohne Einrichtungen. Beim Notar muss der Verkäufer eine Bescheinigung der Gemeinschaft vorlegen, dass keine Rückstände bestehen; fragen Sie auch nach dem Haushaltsplan für das nächste Jahr.' },
      ] },
      sv: { sections: [
        { h: 'Bo i en anläggning i Torrox Costa', p: ['Torrox Costa och El Morche har många lägenhetsanläggningar, och Torrox har en av de största tyskspråkiga grupperna i Axarquía. I en anläggning betalar du utöver IBI en månadsavgift till ägarföreningen för underhåll, pool, trädgård och ibland en vaktmästare. Be om det senaste bokslutet och protokollen när du köper: där ser du om stora utgifter eller en extra uttaxering (<em>derrama</em>) väntar.', rental.sv] },
      ], faq: [
        { q: 'Vad kostar ägarföreningen i Torrox Costa?', a: 'Det varierar mycket mellan anläggningarna: med pool, trädgård och hiss är det mer än i ett litet hus utan gemensamma utrymmen. Hos notarien måste säljaren visa ett intyg från föreningen om att inga avgifter är obetalda; be också om budgeten för nästa år.' },
      ] },
    },
  },

  competa: {
    permit: {
      nl: { sections: [
        { h: 'Bergdorp aan de rand van het natuurpark', p: [
          'Cómpeta ligt op ruim 600 meter hoogte, en een groot deel van de gemeente hoort bij het natuurpark Sierras de Tejeda, Almijara y Alhama. De meeste buitenlandse eigenaren hebben hier een finca op <em>suelo rústico</em>. Daar zijn uitbreidingen zelden mogelijk, en voor een zwembad, een nieuwe toegangsweg of een aanbouw is vaak ook een advies van de milieudienst van de Junta nodig. Veel fincas zijn in de loop der jaren stap voor stap uitgebreid; laat dus eerst nagaan wat er legaal staat.',
        ] },
        { h: 'Werken in het dorp en op de hellingen', p: [
          'In het dorp zijn de straatjes smal en steil. Grotere vrachtwagens komen er niet in, dus materiaal gaat met kleine wagens en het laatste stuk vaak met de hand. Ook een toegangsweg verharden of verbreden is een werk waarvoor u bij de gemeente moet zijn. Reken bij fincas op extra transportkosten en plan het werk buiten de natte wintermaanden.',
        ] },
      ], faq: [
        { q: 'Mag ik bij mijn finca in Cómpeta een zwembad bouwen?', a: 'Vaak wel, maar alleen met een vergunning en een project van een architect, en het huis zelf moet legaal zijn (of een AFO hebben). Ligt de finca in het natuurpark, dan beslist ook de milieudienst van de Junta mee. Vraag het vóór de aankoop na als een zwembad voor u belangrijk is.' },
      ] },
      en: { sections: [
        { h: 'A mountain village on the edge of the natural park', p: [
          'Cómpeta lies at over 600 metres, and much of the municipality belongs to the Sierras de Tejeda, Almijara y Alhama natural park. Most foreign owners here have a finca on <em>suelo rústico</em>. Extensions are rarely possible there, and a pool, a new access road or an extension often also needs a report from the Junta’s environmental department. Many fincas have been extended bit by bit over the years, so first have someone check what is legally there.',
        ] },
        { h: 'Working in the village and on the slopes', p: [
          'In the village the lanes are narrow and steep. Larger lorries cannot get in, so materials travel in small vans and the last stretch is often carried by hand. Surfacing or widening an access road is also work you need to go to the council for. With fincas, allow for extra transport costs and plan the work outside the wet winter months.',
        ] },
      ], faq: [
        { q: 'Can I build a pool at my finca in Cómpeta?', a: 'Often yes, but only with a permit and an architect’s project, and the house itself must be legal (or have AFO status). If the finca is in the natural park, the Junta’s environmental department also has a say. Check before you buy if a pool matters to you.' },
      ] },
      de: { sections: [
        { h: 'Bergdorf am Rand des Naturparks', p: [
          'Cómpeta liegt auf gut 600 Metern Höhe, und ein großer Teil der Gemeinde gehört zum Naturpark Sierras de Tejeda, Almijara y Alhama. Die meisten ausländischen Eigentümer haben hier eine Finca auf <em>suelo rústico</em>. Dort sind Anbauten selten möglich, und für einen Pool, einen neuen Zufahrtsweg oder einen Anbau braucht es oft auch eine Stellungnahme der Umweltbehörde der Junta. Viele Fincas wurden über die Jahre Stück für Stück erweitert; lassen Sie also zuerst prüfen, was legal ist.',
        ] },
        { h: 'Arbeiten im Dorf und an den Hängen', p: [
          'Im Dorf sind die Gassen eng und steil. Größere Lastwagen kommen nicht hinein, daher fährt Material in kleinen Fahrzeugen, und das letzte Stück wird oft von Hand getragen. Auch einen Zufahrtsweg zu befestigen oder zu verbreitern ist eine Arbeit, für die Sie zur Gemeinde müssen. Rechnen Sie bei Fincas mit zusätzlichen Transportkosten und planen Sie die Arbeiten außerhalb der nassen Wintermonate.',
        ] },
      ], faq: [
        { q: 'Darf ich bei meiner Finca in Cómpeta einen Pool bauen?', a: 'Oft ja, aber nur mit Genehmigung und Projekt eines Architekten, und das Haus selbst muss legal sein (oder einen AFO-Status haben). Liegt die Finca im Naturpark, entscheidet auch die Umweltbehörde der Junta mit. Klären Sie es vor dem Kauf, wenn Ihnen ein Pool wichtig ist.' },
      ] },
      sv: { sections: [
        { h: 'Bergsby i utkanten av naturparken', p: [
          'Cómpeta ligger på drygt 600 meters höjd, och en stor del av kommunen hör till naturparken Sierras de Tejeda, Almijara y Alhama. De flesta utländska ägare här har en finca på <em>suelo rústico</em>. Där är tillbyggnader sällan möjliga, och en pool, en ny tillfartsväg eller en tillbyggnad kräver ofta också ett yttrande från Juntas miljöförvaltning. Många fincor har byggts ut bit för bit genom åren, så låt först kontrollera vad som är lagligt.',
        ] },
        { h: 'Arbeta i byn och på sluttningarna', p: [
          'I byn är gränderna smala och branta. Större lastbilar kommer inte in, så material fraktas i små bilar och den sista biten bärs ofta för hand. Att belägga eller bredda en tillfartsväg är också ett arbete som kräver kontakt med kommunen. Räkna med extra transportkostnader för fincor och planera arbetet utanför de regniga vintermånaderna.',
        ] },
      ], faq: [
        { q: 'Får jag bygga en pool vid min finca i Cómpeta?', a: 'Ofta ja, men bara med bygglov och ett projekt från en arkitekt, och själva huset måste vara lagligt (eller ha AFO-status). Ligger fincan i naturparken har även Juntas miljöförvaltning ett ord med i laget. Kontrollera det före köpet om en pool är viktig för dig.' },
      ] },
    },
    practical: {
      nl: { sections: [
        { h: 'Winter in Cómpeta: verwarming en vocht', p: ['Op 600 meter hoogte zijn de winternachten koud en vochtig, en veel oude huizen hebben geen verwarming. Houtkachels en pelletkachels zijn hier gewoon; voor een nieuwe kachel met een rookkanaal door het dak hebt u een melding bij de gemeente nodig. Staat het huis in de winter leeg, laat het dan af en toe luchten en controleren op vocht en lekkage, zeker na zware regen.', well.nl] },
      ], faq: [
        { q: 'Hoe koud wordt het in Cómpeta in de winter?', a: 'Overdag is het vaak zonnig en zacht, maar ’s nachts kan het enkele graden boven nul worden. Goede isolatie en verwarming zijn daarom geen luxe, zeker als u er in de winter woont.' },
      ] },
      en: { sections: [
        { h: 'Winter in Cómpeta: heating and damp', p: ['At 600 metres the winter nights are cold and damp, and many old houses have no heating. Wood and pellet stoves are common here; a new stove with a flue through the roof needs a notification to the council. If the house stands empty in winter, have it aired and checked for damp and leaks now and then, especially after heavy rain.', well.en] },
      ], faq: [
        { q: 'How cold does Cómpeta get in winter?', a: 'Days are often sunny and mild, but at night it can drop to a few degrees above zero. Good insulation and heating are therefore no luxury, especially if you live there in winter.' },
      ] },
      de: { sections: [
        { h: 'Winter in Cómpeta: Heizung und Feuchtigkeit', p: ['Auf 600 Metern sind die Winternächte kalt und feucht, und viele alte Häuser haben keine Heizung. Holz- und Pelletöfen sind hier üblich; für einen neuen Ofen mit Rauchrohr durch das Dach brauchen Sie eine Anzeige bei der Gemeinde. Steht das Haus im Winter leer, lassen Sie es ab und zu lüften und auf Feuchtigkeit und Lecks prüfen, vor allem nach starkem Regen.', well.de] },
      ], faq: [
        { q: 'Wie kalt wird es in Cómpeta im Winter?', a: 'Tagsüber ist es oft sonnig und mild, nachts kann es aber auf wenige Grad über null sinken. Gute Dämmung und Heizung sind deshalb kein Luxus, vor allem wenn Sie im Winter dort wohnen.' },
      ] },
      sv: { sections: [
        { h: 'Vinter i Cómpeta: värme och fukt', p: ['På 600 meters höjd är vinternätterna kalla och fuktiga, och många gamla hus saknar värme. Ved- och pelletskaminer är vanliga här; en ny kamin med rökrör genom taket kräver en anmälan till kommunen. Står huset tomt på vintern, låt någon vädra och kontrollera det för fukt och läckor då och då, särskilt efter kraftigt regn.', well.sv] },
      ], faq: [
        { q: 'Hur kallt blir det i Cómpeta på vintern?', a: 'Dagarna är ofta soliga och milda, men på natten kan det sjunka till några grader över noll. Bra isolering och värme är därför ingen lyx, särskilt om du bor där på vintern.' },
      ] },
    },
  },

  'velez-malaga': {
    permit: {
      nl: { sections: [
        { h: 'Eén gemeente, veel kernen', p: [
          'Vélez-Málaga is veruit de grootste gemeente van de Axarquía. Behalve de stad zelf vallen ook Torre del Mar, Caleta de Vélez, Benajarafe, Almayate, Chilches en de dorpen in het binnenland eronder. Een vergunning voor een huis in Torre del Mar of Benajarafe vraagt u dus aan bij het gemeentehuis van Vélez-Málaga. Omdat de gemeente groot is, werkt een eigen afdeling ruimtelijke ordening (<em>urbanismo</em>) de aanvragen af; reken op een formele procedure en lever het dossier in één keer compleet aan.',
          `${coast.nl('de kustkernen van Vélez-Málaga')}`,
        ] },
        { h: 'Het binnenland: kassen, avocado’s en buitengebied', p: [
          'Tussen de kust en de heuvels ligt veel landbouwgrond met kassen en plantages van avocado en mango. Huizen daar staan bijna altijd op <em>suelo rústico</em>, waar de strengere regels gelden. Een schuur ombouwen tot woning of een tweede woning op het perceel bouwen mag in de regel niet. Lees bij twijfel eerst onze gids over AFO en legaliseren.',
        ] },
      ], faq: [
        { q: 'Waar vraag ik een vergunning aan voor een huis in Torre del Mar?', a: 'Bij de gemeente Vélez-Málaga, want Torre del Mar hoort daarbij. Dat kan digitaal via het elektronische loket van velezmalaga.es; meestal dient de architect of aannemer het in.' },
      ] },
      en: { sections: [
        { h: 'One municipality, many towns', p: [
          'Vélez-Málaga is by far the largest municipality in the Axarquía. Besides the town itself it includes Torre del Mar, Caleta de Vélez, Benajarafe, Almayate, Chilches and the villages inland. So a permit for a home in Torre del Mar or Benajarafe is applied for at Vélez-Málaga town hall. Because the council is large, a dedicated planning department (<em>urbanismo</em>) handles applications; expect a formal procedure and submit a complete file in one go.',
          `${coast.en('the coastal towns of Vélez-Málaga')}`,
        ] },
        { h: 'Inland: greenhouses, avocados and countryside', p: [
          'Between the coast and the hills there is a lot of farmland with greenhouses and avocado and mango plantations. Houses there almost always stand on <em>suelo rústico</em>, where the stricter rules apply. Converting a shed into a home or building a second house on the plot is normally not allowed. If in doubt, read our guide to AFO and legalisation first.',
        ] },
      ], faq: [
        { q: 'Where do I apply for a permit for a home in Torre del Mar?', a: 'At Vélez-Málaga council, because Torre del Mar belongs to it. It can be done online via the e-office at velezmalaga.es; usually the architect or builder files it.' },
      ] },
      de: { sections: [
        { h: 'Eine Gemeinde, viele Ortsteile', p: [
          'Vélez-Málaga ist mit Abstand die größte Gemeinde der Axarquía. Neben der Stadt selbst gehören auch Torre del Mar, Caleta de Vélez, Benajarafe, Almayate, Chilches und die Dörfer im Hinterland dazu. Eine Genehmigung für ein Haus in Torre del Mar oder Benajarafe beantragen Sie also beim Rathaus von Vélez-Málaga. Weil die Gemeinde groß ist, bearbeitet eine eigene Bauabteilung (<em>urbanismo</em>) die Anträge; rechnen Sie mit einem formalen Verfahren und reichen Sie die Unterlagen auf einmal vollständig ein.',
          `${coast.de('den Küstenorten von Vélez-Málaga')}`,
        ] },
        { h: 'Das Hinterland: Gewächshäuser, Avocados und Außenbereich', p: [
          'Zwischen Küste und Hügeln liegt viel Agrarland mit Gewächshäusern und Avocado- und Mangoplantagen. Häuser stehen dort fast immer auf <em>suelo rústico</em>, wo die strengeren Regeln gelten. Einen Schuppen zum Wohnhaus umbauen oder ein zweites Haus auf das Grundstück stellen ist in der Regel nicht erlaubt. Lesen Sie im Zweifel zuerst unseren Ratgeber zu AFO und Legalisierung.',
        ] },
      ], faq: [
        { q: 'Wo beantrage ich eine Genehmigung für ein Haus in Torre del Mar?', a: 'Bei der Gemeinde Vélez-Málaga, denn Torre del Mar gehört dazu. Das geht online über das elektronische Amt auf velezmalaga.es; meist reicht der Architekt oder die Baufirma den Antrag ein.' },
      ] },
      sv: { sections: [
        { h: 'En kommun, många orter', p: [
          'Vélez-Málaga är den överlägset största kommunen i Axarquía. Utöver själva staden hör även Torre del Mar, Caleta de Vélez, Benajarafe, Almayate, Chilches och byarna i inlandet dit. Ett bygglov för ett hus i Torre del Mar eller Benajarafe söker du alltså hos kommunhuset i Vélez-Málaga. Eftersom kommunen är stor hanterar en egen planavdelning (<em>urbanismo</em>) ansökningarna; räkna med ett formellt förfarande och lämna in en komplett ansökan på en gång.',
          `${coast.sv('kustorterna i Vélez-Málaga')}`,
        ] },
        { h: 'Inlandet: växthus, avokado och landsbygd', p: [
          'Mellan kusten och bergen finns mycket jordbruksmark med växthus och odlingar av avokado och mango. Hus där står nästan alltid på <em>suelo rústico</em>, där de strängare reglerna gäller. Att bygga om ett förråd till bostad eller bygga ett andra hus på tomten är som regel inte tillåtet. Läs vid tvekan först vår guide om AFO och legalisering.',
        ] },
      ], faq: [
        { q: 'Var söker jag bygglov för ett hus i Torre del Mar?', a: 'Hos Vélez-Málaga kommun, eftersom Torre del Mar hör dit. Det går digitalt via den elektroniska expeditionen på velezmalaga.es; oftast lämnar arkitekten eller byggfirman in ansökan.' },
      ] },
    },
    practical: {
      nl: { sections: [
        { h: 'Zaken regelen in Torre del Mar of Vélez', p: ['Woont u in Torre del Mar, Caleta of Benajarafe, dan hoort u voor het padrón, de IBI en de afvalheffing bij de gemeente Vélez-Málaga. Voor veel zaken kunt u ook terecht bij het gemeentekantoor in Torre del Mar (<em>tenencia de alcaldía</em>), zodat u niet naar de stad hoeft. Maak vooraf een afspraak (<em>cita previa</em>); zonder afspraak wordt u vaak niet geholpen.', rental.nl] },
      ], faq: [
        { q: 'Moet ik voor het padrón naar Vélez-Málaga als ik in Torre del Mar woon?', a: 'Niet per se. Het gemeentekantoor in Torre del Mar helpt ook met inschrijvingen. Maak vooraf een afspraak en neem uw paspoort, NIE en de koopakte of het huurcontract mee.' },
      ] },
      en: { sections: [
        { h: 'Getting things done in Torre del Mar or Vélez', p: ['If you live in Torre del Mar, Caleta or Benajarafe, the padrón, IBI and rubbish fee are all handled by Vélez-Málaga council. For many matters you can also go to the council office in Torre del Mar (<em>tenencia de alcaldía</em>), so you do not have to go into town. Book an appointment first (<em>cita previa</em>); without one you are often not seen.', rental.en] },
      ], faq: [
        { q: 'Do I have to go to Vélez-Málaga for the padrón if I live in Torre del Mar?', a: 'Not necessarily. The council office in Torre del Mar also handles registrations. Book an appointment and bring your passport, NIE and the deeds or rental contract.' },
      ] },
      de: { sections: [
        { h: 'Behördengänge in Torre del Mar oder Vélez', p: ['Wohnen Sie in Torre del Mar, Caleta oder Benajarafe, sind für Padrón, IBI und Müllgebühr die Gemeinde Vélez-Málaga zuständig. Für viele Anliegen können Sie auch zum Gemeindebüro in Torre del Mar (<em>tenencia de alcaldía</em>), sodass Sie nicht in die Stadt müssen. Vereinbaren Sie vorher einen Termin (<em>cita previa</em>); ohne Termin wird man oft nicht bedient.', rental.de] },
      ], faq: [
        { q: 'Muss ich für den Padrón nach Vélez-Málaga, wenn ich in Torre del Mar wohne?', a: 'Nicht unbedingt. Das Gemeindebüro in Torre del Mar hilft ebenfalls bei der Anmeldung. Vereinbaren Sie einen Termin und bringen Sie Pass, NIE und Kaufurkunde oder Mietvertrag mit.' },
      ] },
      sv: { sections: [
        { h: 'Ärenden i Torre del Mar eller Vélez', p: ['Bor du i Torre del Mar, Caleta eller Benajarafe är det Vélez-Málaga kommun som hanterar padrón, IBI och sophämtningsavgiften. För många ärenden kan du också gå till kommunkontoret i Torre del Mar (<em>tenencia de alcaldía</em>), så att du slipper åka in till stan. Boka tid i förväg (<em>cita previa</em>); utan bokning blir du ofta inte hjälpt.', rental.sv] },
      ], faq: [
        { q: 'Måste jag åka till Vélez-Málaga för padrón om jag bor i Torre del Mar?', a: 'Inte nödvändigtvis. Kommunkontoret i Torre del Mar hjälper också till med inskrivning. Boka tid och ta med pass, NIE och köpekontrakt eller hyresavtal.' },
      ] },
    },
  },

  'rincon-de-la-victoria': {
    permit: {
      nl: { sections: [
        { h: 'Dicht bebouwd, vlak bij Málaga', p: [
          `Rincón de la Victoria, met La Cala del Moral, Torre de Benagalbón en Benagalbón, is bijna aaneengebouwd met de stad Málaga. De meeste huizen zijn appartementen en rijtjeshuizen in de bebouwde kom. ${coast.nl('Rincón de la Victoria')}`,
          'In appartementencomplexen en rijtjeshuizen met een gezamenlijke gevel bepaalt de vereniging van eigenaars mee over alles wat van buiten zichtbaar is: kozijnen, zonwering, airco-units, het dichtmaken van een terras of een extra verdieping op een rijtjeshuis. Vraag die toestemming vóór de melding bij de gemeente, anders kan de comunidad later eisen dat het werk wordt teruggedraaid.',
        ] },
      ], faq: [
        { q: 'Mag ik een verdieping op mijn rijtjeshuis in Rincón de la Victoria zetten?', a: 'Alleen als het bestemmingsplan op uw perceel extra hoogte en oppervlakte toestaat, met een vergunning en een project van een architect. Bij een rijtje met een gezamenlijke gevel of gedeelde voorzieningen is vaak ook toestemming van de andere eigenaren nodig.' },
      ] },
      en: { sections: [
        { h: 'Densely built, close to Málaga', p: [
          `Rincón de la Victoria, with La Cala del Moral, Torre de Benagalbón and Benagalbón, is almost joined to the city of Málaga. Most homes are apartments and terraced houses in town. ${coast.en('Rincón de la Victoria')}`,
          'In apartment complexes and terraces with a shared façade, the owners’ association has a say in everything visible from outside: window frames, awnings, air conditioning units, enclosing a terrace or adding a floor to a terraced house. Get that approval before you notify the council, or the community can later demand that the work is undone.',
        ] },
      ], faq: [
        { q: 'Can I add a floor to my terraced house in Rincón de la Victoria?', a: 'Only if the town plan allows extra height and floor space on your plot, with a permit and an architect’s project. In a terrace with a shared façade or shared facilities, the other owners often have to agree as well.' },
      ] },
      de: { sections: [
        { h: 'Dicht bebaut, nah an Málaga', p: [
          `Rincón de la Victoria mit La Cala del Moral, Torre de Benagalbón und Benagalbón ist fast mit der Stadt Málaga zusammengewachsen. Die meisten Häuser sind Wohnungen und Reihenhäuser im Ort. ${coast.de('Rincón de la Victoria')}`,
          'In Wohnanlagen und Reihenhäusern mit gemeinsamer Fassade redet die Eigentümergemeinschaft bei allem mit, was von außen sichtbar ist: Fensterrahmen, Markisen, Klimageräte, das Schließen einer Terrasse oder ein zusätzliches Stockwerk auf einem Reihenhaus. Holen Sie diese Zustimmung vor der Anzeige bei der Gemeinde ein, sonst kann die Gemeinschaft später den Rückbau verlangen.',
        ] },
      ], faq: [
        { q: 'Darf ich auf mein Reihenhaus in Rincón de la Victoria ein Stockwerk setzen?', a: 'Nur wenn der Bebauungsplan auf Ihrem Grundstück zusätzliche Höhe und Fläche erlaubt, mit Genehmigung und Projekt eines Architekten. Bei einer Reihe mit gemeinsamer Fassade oder gemeinsamen Einrichtungen müssen oft auch die anderen Eigentümer zustimmen.' },
      ] },
      sv: { sections: [
        { h: 'Tätt bebyggt, nära Málaga', p: [
          `Rincón de la Victoria, med La Cala del Moral, Torre de Benagalbón och Benagalbón, har nästan vuxit ihop med staden Málaga. De flesta bostäder är lägenheter och radhus i tätorten. ${coast.sv('Rincón de la Victoria')}`,
          'I lägenhetsanläggningar och radhus med gemensam fasad har ägarföreningen ett ord med i allt som syns utifrån: fönsterkarmar, markiser, luftkonditionering, inglasning av terrass eller en extra våning på ett radhus. Skaffa det godkännandet innan du gör anmälan till kommunen, annars kan föreningen senare kräva att arbetet görs ogjort.',
        ] },
      ], faq: [
        { q: 'Får jag bygga på en våning på mitt radhus i Rincón de la Victoria?', a: 'Bara om detaljplanen medger extra höjd och yta på din tomt, med bygglov och ett projekt från en arkitekt. I en radhuslänga med gemensam fasad eller gemensamma utrymmen måste ofta även de andra ägarna godkänna det.' },
      ] },
    },
    practical: {
      nl: { sections: [
        { h: 'Waarom de catastrale waarde hier telt', p: ['Rincón de la Victoria is een van de weinige gemeenten in de Axarquía waar de catastrale waarden na 2012 opnieuw zijn vastgesteld (in 2014). Daardoor liggen die waarden dichter bij de marktwaarde dan in de rest van de regio. Voor niet-residenten rekent de Belastingdienst hier met 1,1% fictief inkomen in plaats van 2%, maar over een hogere catastrale waarde. Kijk dus naar het bedrag op de IBI-aanslag, niet alleen naar het tarief.', 'Door de ligging vlak bij Málaga wonen hier veel mensen het hele jaar. Er rijden bussen naar Málaga en het vliegveld ligt op ongeveer een half uur rijden.'] },
      ], faq: [
        { q: 'Is wonen in Rincón de la Victoria duurder dan elders in de Axarquía?', a: 'De huizenprijzen liggen hier hoger door de nabijheid van Málaga, en de catastrale waarden zijn recenter vastgesteld. De IBI-aanslag valt daardoor vaak hoger uit dan bij een vergelijkbaar huis verder naar het oosten.' },
      ] },
      en: { sections: [
        { h: 'Why the cadastral value matters here', p: ['Rincón de la Victoria is one of the few municipalities in the Axarquía where cadastral values were reassessed after 2012 (in 2014). As a result they are closer to market value than in the rest of the region. For non-residents the tax office uses 1.1% notional income here instead of 2%, but on a higher cadastral value. So look at the amount on the IBI bill, not just the rate.', 'Being so close to Málaga, many people live here all year round. There are buses to Málaga and the airport is about half an hour’s drive.'] },
      ], faq: [
        { q: 'Is living in Rincón de la Victoria more expensive than elsewhere in the Axarquía?', a: 'House prices are higher here because Málaga is so close, and the cadastral values were set more recently. The IBI bill is therefore often higher than for a similar house further east.' },
      ] },
      de: { sections: [
        { h: 'Warum der Katasterwert hier zählt', p: ['Rincón de la Victoria ist eine der wenigen Gemeinden der Axarquía, in denen die Katasterwerte nach 2012 neu festgesetzt wurden (2014). Dadurch liegen sie näher am Marktwert als im Rest der Region. Für Nichtresidenten setzt das Finanzamt hier 1,1 % statt 2 % fiktives Einkommen an, allerdings auf einen höheren Katasterwert. Schauen Sie also auf den Betrag im IBI-Bescheid, nicht nur auf den Satz.', 'Wegen der Nähe zu Málaga wohnen hier viele Menschen das ganze Jahr. Es fahren Busse nach Málaga, und der Flughafen ist etwa eine halbe Stunde entfernt.'] },
      ], faq: [
        { q: 'Ist Wohnen in Rincón de la Victoria teurer als anderswo in der Axarquía?', a: 'Die Hauspreise sind hier wegen der Nähe zu Málaga höher, und die Katasterwerte wurden später festgesetzt. Der IBI-Bescheid fällt deshalb oft höher aus als bei einem vergleichbaren Haus weiter östlich.' },
      ] },
      sv: { sections: [
        { h: 'Därför spelar taxeringsvärdet roll här', p: ['Rincón de la Victoria är en av få kommuner i Axarquía där taxeringsvärdena fastställdes på nytt efter 2012 (år 2014). De ligger därför närmare marknadsvärdet än i resten av regionen. För icke-residenter räknar skatteverket här med 1,1 % fiktiv inkomst i stället för 2 %, men på ett högre taxeringsvärde. Titta alltså på beloppet på IBI-avin, inte bara på satsen.', 'Eftersom Málaga ligger så nära bor många här året runt. Det går bussar till Málaga och flygplatsen ligger ungefär en halvtimme bort med bil.'] },
      ], faq: [
        { q: 'Är det dyrare att bo i Rincón de la Victoria än på andra håll i Axarquía?', a: 'Huspriserna är högre här på grund av närheten till Málaga, och taxeringsvärdena har fastställts senare. IBI-avin blir därför ofta högre än för ett liknande hus längre österut.' },
      ] },
    },
  },

  algarrobo: {
    permit: {
      nl: { sections: [
        { h: 'Algarrobo Costa en Mezquitilla', p: [
          `Algarrobo bestaat uit het witte dorp op de heuvel en de kust met Algarrobo Costa en Mezquitilla. ${coast.nl('Algarrobo Costa en Mezquitilla')}`,
          'Bij Mezquitilla liggen bovendien belangrijke archeologische vindplaatsen uit de Feniciërstijd, zoals de Morro de Mezquitilla en de grafheuvels van Trayamar, beschermd als <em>Bien de Interés Cultural</em>. Bij graafwerk in of bij zo’n beschermde zone kan de Junta archeologisch toezicht eisen. Dat kost tijd en geld; vraag het na voordat u een zwembad of kelder plant.',
        ] },
        { h: 'Het dorp en de hellingen', p: [
          'Het dorp Algarrobo heeft smalle, steile straten, en rond het dorp liggen veel terrassen met avocado’s en mango’s. Huizen daar staan op <em>suelo rústico</em>, met de strengere regels voor het buitengebied. Een losse schuur of berging op het perceel telt ook als bouwwerk en vraagt toestemming.',
        ] },
      ], faq: [
        { q: 'Mag ik in Mezquitilla een zwembad laten graven?', a: 'Meestal wel, met een vergunning. Ligt uw perceel in of bij een archeologische beschermingszone, dan kan de Junta eisen dat een archeoloog het graafwerk begeleidt. Vraag dat vooraf na bij de gemeente.' },
      ] },
      en: { sections: [
        { h: 'Algarrobo Costa and Mezquitilla', p: [
          `Algarrobo consists of the white village on the hill and the coast with Algarrobo Costa and Mezquitilla. ${coast.en('Algarrobo Costa and Mezquitilla')}`,
          'Near Mezquitilla there are also important archaeological sites from Phoenician times, such as the Morro de Mezquitilla and the Trayamar tombs, protected as <em>Bien de Interés Cultural</em>. For digging in or near such a protected zone, the Junta can require archaeological supervision. That costs time and money; check before you plan a pool or basement.',
        ] },
        { h: 'The village and the slopes', p: [
          'The village of Algarrobo has narrow, steep streets, and around it lie many terraces of avocados and mangoes. Houses there stand on <em>suelo rústico</em>, with the stricter countryside rules. A separate shed or store on the plot also counts as a building and needs approval.',
        ] },
      ], faq: [
        { q: 'Can I have a pool dug in Mezquitilla?', a: 'Usually yes, with a permit. If your plot lies in or near an archaeological protection zone, the Junta can require an archaeologist to oversee the digging. Check with the council beforehand.' },
      ] },
      de: { sections: [
        { h: 'Algarrobo Costa und Mezquitilla', p: [
          `Algarrobo besteht aus dem weißen Dorf auf dem Hügel und der Küste mit Algarrobo Costa und Mezquitilla. ${coast.de('Algarrobo Costa und Mezquitilla')}`,
          'Bei Mezquitilla liegen zudem wichtige archäologische Fundstätten aus phönizischer Zeit, etwa der Morro de Mezquitilla und die Gräber von Trayamar, geschützt als <em>Bien de Interés Cultural</em>. Bei Erdarbeiten in oder nahe einer solchen Schutzzone kann die Junta eine archäologische Begleitung verlangen. Das kostet Zeit und Geld; fragen Sie nach, bevor Sie einen Pool oder Keller planen.',
        ] },
        { h: 'Das Dorf und die Hänge', p: [
          'Das Dorf Algarrobo hat enge, steile Straßen, und rundherum liegen viele Terrassen mit Avocados und Mangos. Häuser dort stehen auf <em>suelo rústico</em>, mit den strengeren Regeln für den Außenbereich. Auch ein freistehender Schuppen oder Abstellraum auf dem Grundstück zählt als Bauwerk und braucht eine Erlaubnis.',
        ] },
      ], faq: [
        { q: 'Darf ich in Mezquitilla einen Pool graben lassen?', a: 'Meist ja, mit Genehmigung. Liegt Ihr Grundstück in oder nahe einer archäologischen Schutzzone, kann die Junta verlangen, dass ein Archäologe die Erdarbeiten begleitet. Fragen Sie vorher bei der Gemeinde nach.' },
      ] },
      sv: { sections: [
        { h: 'Algarrobo Costa och Mezquitilla', p: [
          `Algarrobo består av den vita byn på kullen och kusten med Algarrobo Costa och Mezquitilla. ${coast.sv('Algarrobo Costa och Mezquitilla')}`,
          'Vid Mezquitilla finns dessutom viktiga arkeologiska platser från feniciernas tid, som Morro de Mezquitilla och gravarna i Trayamar, skyddade som <em>Bien de Interés Cultural</em>. Vid grävarbeten i eller nära en sådan skyddszon kan Junta kräva arkeologisk övervakning. Det kostar tid och pengar; fråga innan du planerar en pool eller källare.',
        ] },
        { h: 'Byn och sluttningarna', p: [
          'Byn Algarrobo har smala, branta gator, och runt den ligger många terrasser med avokado och mango. Hus där står på <em>suelo rústico</em>, med de strängare reglerna för landsbygden. Även ett fristående förråd på tomten räknas som en byggnad och kräver tillstånd.',
        ] },
      ], faq: [
        { q: 'Får jag gräva en pool i Mezquitilla?', a: 'Oftast ja, med bygglov. Ligger din tomt i eller nära en arkeologisk skyddszon kan Junta kräva att en arkeolog övervakar grävningen. Fråga kommunen i förväg.' },
      ] },
    },
    practical: {
      nl: { sections: [
        { h: 'Kust of dorp: twee soorten vaste lasten', p: ['Een appartement in Algarrobo Costa of Mezquitilla heeft andere vaste lasten dan een huis in het dorp of op het land. Aan de kust betaalt u meestal een bijdrage aan de vereniging van eigenaars en hebt u te maken met de regels voor vakantieverhuur. Op het land komt het irrigatiewater vaak van een vereniging van watergebruikers (<em>comunidad de regantes</em>), met een eigen jaarlijkse bijdrage per aandeel.', rental.nl] },
      ], faq: [
        { q: 'Wat is een comunidad de regantes?', a: 'Een vereniging van eigenaren die samen irrigatiewater verdelen. Hoort uw perceel erbij, dan betaalt u een jaarlijkse bijdrage en krijgt u water volgens een vast schema. Laat bij aankoop nagaan of het waterrecht mee overgaat.' },
      ] },
      en: { sections: [
        { h: 'Coast or village: two kinds of running costs', p: ['An apartment in Algarrobo Costa or Mezquitilla has different running costs from a house in the village or in the countryside. On the coast you usually pay a community fee and deal with the holiday letting rules. In the countryside, irrigation water often comes from an irrigators’ association (<em>comunidad de regantes</em>), with its own annual fee per share.', rental.en] },
      ], faq: [
        { q: 'What is a comunidad de regantes?', a: 'An association of landowners who share irrigation water. If your plot belongs to one, you pay an annual fee and receive water on a fixed schedule. When you buy, check that the water right transfers with the property.' },
      ] },
      de: { sections: [
        { h: 'Küste oder Dorf: zwei Arten laufender Kosten', p: ['Eine Wohnung in Algarrobo Costa oder Mezquitilla hat andere laufende Kosten als ein Haus im Dorf oder auf dem Land. An der Küste zahlen Sie meist Hausgeld an die Eigentümergemeinschaft und haben mit den Regeln für Ferienvermietung zu tun. Auf dem Land kommt das Bewässerungswasser oft von einer Bewässerungsgemeinschaft (<em>comunidad de regantes</em>), mit einem eigenen Jahresbeitrag pro Anteil.', rental.de] },
      ], faq: [
        { q: 'Was ist eine Comunidad de regantes?', a: 'Eine Gemeinschaft von Grundeigentümern, die sich Bewässerungswasser teilen. Gehört Ihr Grundstück dazu, zahlen Sie einen Jahresbeitrag und bekommen Wasser nach festem Plan. Prüfen Sie beim Kauf, ob das Wasserrecht mit übergeht.' },
      ] },
      sv: { sections: [
        { h: 'Kust eller by: två slags löpande kostnader', p: ['En lägenhet i Algarrobo Costa eller Mezquitilla har andra löpande kostnader än ett hus i byn eller på landet. Vid kusten betalar du oftast en avgift till ägarföreningen och berörs av reglerna för turistuthyrning. På landet kommer bevattningsvattnet ofta från en bevattningsförening (<em>comunidad de regantes</em>), med en egen årsavgift per andel.', rental.sv] },
      ], faq: [
        { q: 'Vad är en comunidad de regantes?', a: 'En förening av markägare som delar på bevattningsvatten. Hör din tomt dit betalar du en årsavgift och får vatten enligt ett fast schema. Kontrollera vid köpet att vattenrätten följer med fastigheten.' },
      ] },
    },
  },

  vinuela: {
    permit: {
      nl: { sections: [
        { h: 'Bouwen bij het stuwmeer van La Viñuela', p: [
          'Het stuwmeer (<em>embalse</em>) van La Viñuela is de belangrijkste drinkwaterbron van de Axarquía. Rond het meer en langs beken geldt de Spaanse waterwet: binnen 100 meter van de oever ligt een toezichtzone (<em>zona de policía</em>), waar bouwen, graven en ophogen naast de gemeentelijke vergunning ook toestemming van de waterbeheerder van de Junta vragen. Een huis met uitzicht op het meer kan dus extra papierwerk betekenen.',
        ] },
        { h: 'Bijna alles is buitengebied', p: [
          'Buiten het dorp en de kernen zoals Los Romanes staan de meeste huizen op <em>suelo rústico</em>. Veel van die huizen zijn in de jaren tachtig en negentig gebouwd of uitgebreid, niet altijd met vergunning. Daarom is in Viñuela de vraag of een huis legaal is of een AFO heeft vaak belangrijker dan de vergunning voor de verbouwing zelf. Laat dat uitzoeken vóór u tekent.',
        ] },
      ], faq: [
        { q: 'Mag ik bij het meer van La Viñuela een steiger of trap naar het water bouwen?', a: 'In de regel niet zonder toestemming van de waterbeheerder, omdat de oever en de zone erlangs beschermd zijn. Voor werk binnen 100 meter van de oever hebt u naast de gemeente ook de Junta nodig.' },
      ] },
      en: { sections: [
        { h: 'Building near La Viñuela reservoir', p: [
          'La Viñuela reservoir (<em>embalse</em>) is the Axarquía’s main source of drinking water. Around the lake and along streams the Spanish Water Law applies: within 100 metres of the bank lies a control zone (<em>zona de policía</em>), where building, digging and raising the ground need authorisation from the Junta’s water authority on top of the council permit. A house with a lake view can therefore mean extra paperwork.',
        ] },
        { h: 'Almost everything is countryside', p: [
          'Outside the village and hamlets such as Los Romanes, most houses stand on <em>suelo rústico</em>. Many were built or extended in the 1980s and 1990s, not always with a permit. That is why in Viñuela the question of whether a house is legal or has AFO status often matters more than the permit for the renovation itself. Have it checked before you sign.',
        ] },
      ], faq: [
        { q: 'Can I build a jetty or steps down to the water at La Viñuela lake?', a: 'Normally not without approval from the water authority, because the bank and the zone along it are protected. For work within 100 metres of the bank you need the Junta as well as the council.' },
      ] },
      de: { sections: [
        { h: 'Bauen am Stausee von La Viñuela', p: [
          'Der Stausee (<em>embalse</em>) von La Viñuela ist die wichtigste Trinkwasserquelle der Axarquía. Rund um den See und entlang von Bächen gilt das spanische Wassergesetz: Innerhalb von 100 Metern vom Ufer liegt eine Aufsichtszone (<em>zona de policía</em>), in der Bauen, Graben und Aufschütten neben der Genehmigung der Gemeinde auch eine Erlaubnis der Wasserbehörde der Junta brauchen. Ein Haus mit Seeblick kann also zusätzlichen Papierkram bedeuten.',
        ] },
        { h: 'Fast alles ist Außenbereich', p: [
          'Außerhalb des Dorfes und der Weiler wie Los Romanes stehen die meisten Häuser auf <em>suelo rústico</em>. Viele wurden in den 1980er- und 1990er-Jahren gebaut oder erweitert, nicht immer mit Genehmigung. Deshalb ist in Viñuela die Frage, ob ein Haus legal ist oder einen AFO-Status hat, oft wichtiger als die Genehmigung für den Umbau selbst. Lassen Sie das vor der Unterschrift klären.',
        ] },
      ], faq: [
        { q: 'Darf ich am See von La Viñuela einen Steg oder eine Treppe zum Wasser bauen?', a: 'In der Regel nicht ohne Erlaubnis der Wasserbehörde, weil Ufer und Uferzone geschützt sind. Für Arbeiten innerhalb von 100 Metern vom Ufer brauchen Sie neben der Gemeinde auch die Junta.' },
      ] },
      sv: { sections: [
        { h: 'Bygga vid La Viñuelas reservoar', p: [
          'Reservoaren (<em>embalse</em>) i La Viñuela är Axarquías viktigaste dricksvattenkälla. Runt sjön och längs bäckar gäller den spanska vattenlagen: inom 100 meter från stranden ligger en tillsynszon (<em>zona de policía</em>) där byggande, grävning och utfyllnad kräver tillstånd från Juntas vattenmyndighet utöver kommunens lov. Ett hus med sjöutsikt kan alltså innebära extra pappersarbete.',
        ] },
        { h: 'Nästan allt är landsbygd', p: [
          'Utanför byn och småorter som Los Romanes står de flesta hus på <em>suelo rústico</em>. Många byggdes eller byggdes ut på 1980- och 1990-talet, inte alltid med lov. Därför är frågan om ett hus är lagligt eller har AFO-status i Viñuela ofta viktigare än bygglovet för själva renoveringen. Låt kontrollera det innan du skriver på.',
        ] },
      ], faq: [
        { q: 'Får jag bygga en brygga eller trappa ner till vattnet vid La Viñuela-sjön?', a: 'Som regel inte utan tillstånd från vattenmyndigheten, eftersom stranden och zonen längs den är skyddade. För arbete inom 100 meter från stranden behöver du Junta utöver kommunen.' },
      ] },
    },
    practical: {
      nl: { sections: [
        { h: 'Water, put en irrigatie in Viñuela', p: [well.nl, 'Dat het grootste stuwmeer van de regio in de gemeente ligt, betekent niet dat water hier vanzelf ruim is: in de droge jaren 2023 en 2024 stond het meer zeer laag en golden in de hele Axarquía beperkingen. Een eigen watertank en zuinige tuin zijn ook in Viñuela verstandig.'] },
      ], faq: [
        { q: 'Komt het drinkwater in Viñuela uit het meer?', a: 'Het meer levert water aan een groot deel van de Axarquía, maar het water gaat eerst naar een zuiveringsinstallatie en via het netwerk naar de gemeenten. Huizen buiten het netwerk zijn aangewezen op een tank, een put of een aansluiting via een vereniging van watergebruikers.' },
      ] },
      en: { sections: [
        { h: 'Water, wells and irrigation in Viñuela', p: [well.en, 'Having the region’s largest reservoir in the municipality does not mean water is plentiful here: in the dry years of 2023 and 2024 the lake was very low and restrictions applied across the Axarquía. A water tank of your own and a low-water garden make sense in Viñuela too.'] },
      ], faq: [
        { q: 'Does the drinking water in Viñuela come from the lake?', a: 'The lake supplies water to much of the Axarquía, but it first goes to a treatment plant and then through the network to the municipalities. Houses off the network rely on a tank, a well or a connection through a water users’ association.' },
      ] },
      de: { sections: [
        { h: 'Wasser, Brunnen und Bewässerung in Viñuela', p: [well.de, 'Dass der größte Stausee der Region in der Gemeinde liegt, heißt nicht, dass Wasser hier reichlich ist: In den trockenen Jahren 2023 und 2024 war der See sehr niedrig, und in der ganzen Axarquía galten Einschränkungen. Ein eigener Wassertank und ein sparsamer Garten sind auch in Viñuela sinnvoll.'] },
      ], faq: [
        { q: 'Kommt das Trinkwasser in Viñuela aus dem See?', a: 'Der See versorgt einen großen Teil der Axarquía, das Wasser geht aber zuerst in eine Aufbereitungsanlage und dann über das Netz zu den Gemeinden. Häuser ohne Netzanschluss sind auf einen Tank, einen Brunnen oder einen Anschluss über eine Wassergemeinschaft angewiesen.' },
      ] },
      sv: { sections: [
        { h: 'Vatten, brunnar och bevattning i Viñuela', p: [well.sv, 'Att regionens största reservoar ligger i kommunen betyder inte att det finns gott om vatten här: under de torra åren 2023 och 2024 var sjön mycket låg och det rådde begränsningar i hela Axarquía. En egen vattentank och en snål trädgård är klokt även i Viñuela.'] },
      ], faq: [
        { q: 'Kommer dricksvattnet i Viñuela från sjön?', a: 'Sjön försörjer stora delar av Axarquía, men vattnet går först till ett reningsverk och sedan via nätet till kommunerna. Hus utanför nätet är beroende av tank, brunn eller anslutning via en vattenförening.' },
      ] },
    },
  },
};

/** Krijgen de pagina's Bouwvergunning en Praktisch van deze gemeente een eigen tekst (en dus index)? */
export const isMunicipalIndexed = (slug: string) => !!municipalLocal[slug];

/** Lokale secties en FAQ voor een pagina, inclusief de vergelijking met de andere gemeenten */
export function localFor(lang: MunicipalLang, kind: MunicipalPageKind, slug: string, name: string): LocalBlock | undefined {
  const block = municipalLocal[slug]?.[kind]?.[lang];
  if (!block) return undefined;
  const cmp = comparison(lang, kind, slug, name);
  return { sections: [...block.sections, ...(cmp ? [cmp] : [])], faq: block.faq };
}
