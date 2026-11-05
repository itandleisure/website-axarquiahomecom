// Rekentool (kostencalculator): bedragen per onderdeel, in euro's, exclusief btw.
// Eén bron: de bedragen komen uit de tabellen op de kostenpagina's (src/data/topics/costs-*.ts)
// en uit de gids "Wat kost een huis renoveren in Spanje?". Pas je daar een prijs aan, pas hem hier ook aan.
import type { TopicLang } from './topics/types';

type L = Record<TopicLang, string>;

/** fixed = vast bedrag (× aantal als er een aantal is), m2 = per m², each = per stuk */
export type CalcUnit = 'fixed' | 'm2' | 'each';

export interface CalcOption {
  id: string;
  label: L;
  hint?: L;
  min: number;
  max: number;
  unit: CalcUnit;
}

export interface CalcExtra {
  id: string;
  label: L;
  /** Vast bedrag erbij */
  min?: number;
  max?: number;
  /** Of een percentage van het basisbedrag */
  pct?: [number, number];
}

export interface CalcQty {
  label: L;
  unitLabel: L;
  def: number;
  min: number;
  max: number;
  /** Geldt het aantal voor alle opties (bijv. aantal badkamers)? Anders alleen voor m2- en each-opties. */
  all?: boolean;
}

export interface Calc {
  /** Gelijk aan de key van de kostenpagina, of 'woning' voor de hele woning */
  key: string;
  /** Dienst die in het aanvraagformulier wordt voorgekozen */
  dienst: string;
  label: L;
  sub: L;
  options: CalcOption[];
  qty?: CalcQty;
  extras: CalcExtra[];
}

const m2: CalcQty['unitLabel'] = { nl: 'm²', en: 'm²', de: 'm²' };

export const calcs: Calc[] = [
  {
    key: 'woning',
    dienst: 'renovatie',
    label: { nl: 'Hele woning', en: 'Whole house', de: 'Ganzes Haus' },
    sub: { nl: 'Opfrissen tot totaalrenovatie', en: 'From a refresh to a full renovation', de: 'Vom Auffrischen bis zur Komplettsanierung' },
    qty: { label: { nl: 'Woonoppervlak', en: 'Living area', de: 'Wohnfläche' }, unitLabel: m2, def: 100, min: 20, max: 600 },
    options: [
      { id: 'opfrissen', unit: 'm2', min: 250, max: 500,
        label: { nl: 'Opfrissen', en: 'Refresh', de: 'Auffrischen' },
        hint: { nl: 'Schilderwerk, nieuwe vloer, kleine reparaties, sanitair vervangen', en: 'Decorating, new flooring, small repairs, new sanitaryware', de: 'Anstrich, neuer Boden, kleine Reparaturen, neue Sanitärobjekte' } },
      { id: 'middel', unit: 'm2', min: 600, max: 1000,
        label: { nl: 'Middelgrote renovatie', en: 'Medium renovation', de: 'Mittlere Renovierung' },
        hint: { nl: 'Badkamer en keuken nieuw, elektra deels, ramen, afwerking', en: 'New bathroom and kitchen, partial rewiring, windows, finishes', de: 'Neues Bad und neue Küche, Elektrik teilweise, Fenster, Ausbau' } },
      { id: 'totaal', unit: 'm2', min: 1000, max: 1600,
        label: { nl: 'Totaalrenovatie', en: 'Full renovation', de: 'Komplettsanierung' },
        hint: { nl: 'Alles eruit: leidingen, elektra, isolatie, indeling, dak', en: 'Strip back: plumbing, electrics, insulation, layout, roof', de: 'Alles raus: Leitungen, Elektrik, Dämmung, Grundriss, Dach' } },
    ],
    extras: [],
  },
  {
    key: 'badkamer',
    dienst: 'badkamer-keuken',
    label: { nl: 'Badkamer', en: 'Bathroom', de: 'Bad' },
    sub: { nl: 'Opfrissen, inloopdouche of compleet', en: 'Refresh, walk-in shower or complete', de: 'Auffrischen, bodengleiche Dusche oder komplett' },
    qty: { label: { nl: 'Aantal badkamers', en: 'Number of bathrooms', de: 'Anzahl Bäder' }, unitLabel: { nl: '', en: '', de: '' }, def: 1, min: 1, max: 5, all: true },
    options: [
      { id: 'opfrissen', unit: 'fixed', min: 2500, max: 5000,
        label: { nl: 'Opfrissen', en: 'Refresh', de: 'Auffrischen' },
        hint: { nl: 'Nieuw toilet, wastafel en kranen. Tegels blijven.', en: 'New toilet, basin and taps. Tiles stay.', de: 'Neues WC, Waschbecken und Armaturen. Fliesen bleiben.' } },
      { id: 'inloopdouche', unit: 'fixed', min: 3000, max: 6000,
        label: { nl: 'Bad eruit, inloopdouche erin', en: 'Bath out, walk-in shower in', de: 'Wanne raus, bodengleiche Dusche rein' },
        hint: { nl: 'Douchevloer op niveau, glazen wand, tegels in de douchehoek', en: 'Level shower floor, glass screen, tiles in the shower area', de: 'Ebenerdiger Duschboden, Glaswand, Fliesen im Duschbereich' } },
      { id: 'compleet-klein', unit: 'fixed', min: 6000, max: 12000,
        label: { nl: 'Complete renovatie, 4–6 m²', en: 'Complete renovation, 4–6 m²', de: 'Komplettsanierung, 4–6 m²' },
        hint: { nl: 'Alles eruit, nieuwe leidingen, tegels en sanitair', en: 'Strip out, new pipes, tiles and sanitaryware', de: 'Alles raus, neue Leitungen, Fliesen und Sanitär' } },
      { id: 'compleet-ruim', unit: 'fixed', min: 12000, max: 18000,
        label: { nl: 'Complete renovatie, ruime badkamer', en: 'Complete renovation, large bathroom', de: 'Komplettsanierung, großes Bad' },
        hint: { nl: 'Dubbele wastafel, inbouwkranen, betere tegels', en: 'Double basin, concealed taps, better tiles', de: 'Doppelwaschtisch, Unterputzarmaturen, bessere Fliesen' } },
      { id: 'luxe', unit: 'fixed', min: 18000, max: 25000,
        label: { nl: 'Luxe of maatwerk', en: 'Luxury or bespoke', de: 'Luxus oder Maßanfertigung' },
        hint: { nl: 'Natuursteen of microcement, maatwerkmeubel, vloerverwarming', en: 'Natural stone or microcement, bespoke unit, underfloor heating', de: 'Naturstein oder Mikrozement, Maßmöbel, Fußbodenheizung' } },
    ],
    extras: [],
  },
  {
    key: 'keuken',
    dienst: 'badkamer-keuken',
    label: { nl: 'Keuken', en: 'Kitchen', de: 'Küche' },
    sub: { nl: 'Nieuwe fronten tot maatwerk met eiland', en: 'New doors to bespoke with an island', de: 'Neue Fronten bis Maßküche mit Insel' },
    options: [
      { id: 'opfrissen', unit: 'fixed', min: 3000, max: 6000,
        label: { nl: 'Opfrissen', en: 'Refresh', de: 'Auffrischen' },
        hint: { nl: 'Nieuwe fronten en werkblad op de bestaande kasten', en: 'New doors and worktop on the existing units', de: 'Neue Fronten und Arbeitsplatte auf den bestehenden Schränken' } },
      { id: 'compleet', unit: 'fixed', min: 8000, max: 15000,
        label: { nl: 'Complete keuken, middensegment', en: 'Complete kitchen, mid-range', de: 'Komplette Küche, Mittelklasse' },
        hint: { nl: 'Slopen, leidingen en elektra, kasten, werkblad, tegels', en: 'Strip out, plumbing and electrics, units, worktop, tiles', de: 'Abbruch, Leitungen und Elektrik, Schränke, Arbeitsplatte, Fliesen' } },
      { id: 'groot', unit: 'fixed', min: 15000, max: 22000,
        label: { nl: 'Grotere keuken of hoger segment', en: 'Larger kitchen or higher spec', de: 'Größere Küche oder gehobene Ausstattung' },
        hint: { nl: 'Meer kasten, kwarts- of keramisch werkblad', en: 'More units, quartz or ceramic worktop', de: 'Mehr Schränke, Quarz- oder Keramikplatte' } },
      { id: 'maatwerk', unit: 'fixed', min: 22000, max: 30000,
        label: { nl: 'Maatwerk met kookeiland', en: 'Bespoke with an island', de: 'Maßküche mit Kochinsel' },
        hint: { nl: 'Eiland met afvoer en stroom, open keuken', en: 'Island with drainage and power, open-plan', de: 'Insel mit Abfluss und Strom, offene Küche' } },
    ],
    extras: [
      { id: 'apparatuur', min: 2000, max: 6000,
        label: { nl: 'Nieuwe apparatuur (oven, kookplaat, afzuigkap, vaatwasser, koelkast)', en: 'New appliances (oven, hob, extractor, dishwasher, fridge)', de: 'Neue Geräte (Backofen, Kochfeld, Dunstabzug, Spülmaschine, Kühlschrank)' } },
    ],
  },
  {
    key: 'zwembad',
    dienst: 'zwembad',
    label: { nl: 'Zwembad', en: 'Swimming pool', de: 'Pool' },
    sub: { nl: 'Nieuw bouwen of renoveren', en: 'New build or renovation', de: 'Neubau oder Sanierung' },
    options: [
      { id: 'prefab', unit: 'fixed', min: 15000, max: 25000,
        label: { nl: 'Prefab polyester (± 7 × 3,5 m)', en: 'Prefab fibreglass (approx. 7 × 3.5 m)', de: 'Fertigbecken Polyester (ca. 7 × 3,5 m)' },
        hint: { nl: 'Kant-en-klare kuip, graafwerk, plaatsing, filter', en: 'Ready-made shell, digging, installation, filter', de: 'Fertigschale, Aushub, Einbau, Filter' } },
      { id: 'beton', unit: 'fixed', min: 20000, max: 30000,
        label: { nl: 'Betonnen bad 8 × 4 m', en: 'Concrete pool 8 × 4 m', de: 'Betonpool 8 × 4 m' },
        hint: { nl: 'Gespoten beton, gresite-mozaïek, filter en pomp', en: 'Sprayed concrete, gresite mosaic, filter and pump', de: 'Spritzbeton, Gresite-Mosaik, Filter und Pumpe' } },
      { id: 'compleet', unit: 'fixed', min: 30000, max: 50000,
        label: { nl: 'Compleet zwembad met terras', en: 'Complete pool with terrace', de: 'Kompletter Pool mit Terrasse' },
        hint: { nl: 'Betonnen bad plus terras, verlichting, zoutsysteem, trap', en: 'Concrete pool plus terrace, lighting, salt system, steps', de: 'Betonpool plus Terrasse, Beleuchtung, Salzanlage, Treppe' } },
      { id: 'renoveren', unit: 'fixed', min: 5000, max: 15000,
        label: { nl: 'Bestaand bad renoveren', en: 'Renovate an existing pool', de: 'Bestehenden Pool sanieren' },
        hint: { nl: 'Nieuwe gresite of coating, pomp en filter, lekkages dichten', en: 'New gresite or coating, pump and filter, fix leaks', de: 'Neues Gresite oder Beschichtung, Pumpe und Filter, Lecks abdichten' } },
    ],
    extras: [
      { id: 'helling', min: 5000, max: 20000,
        label: { nl: 'Op een helling, met keermuren', en: 'On a slope, with retaining walls', de: 'Am Hang, mit Stützmauern' } },
      { id: 'overloop', min: 10000, max: 25000,
        label: { nl: 'Overloopbad of infinity-rand', en: 'Overflow or infinity edge', de: 'Überlaufrinne oder Infinity-Kante' } },
      { id: 'warmtepomp', min: 3000, max: 6000,
        label: { nl: 'Warmtepomp voor zwembadverwarming', en: 'Heat pump to heat the pool', de: 'Wärmepumpe zur Poolheizung' } },
      { id: 'hek', min: 1500, max: 5000,
        label: { nl: 'Hek of afdekking', en: 'Fence or cover', de: 'Zaun oder Abdeckung' } },
      { id: 'project', min: 1500, max: 3500,
        label: { nl: 'Project van een architect of ingenieur (nodig bij nieuwbouw)', en: 'Plans by an architect or engineer (needed for a new pool)', de: 'Projekt von Architekt oder Ingenieur (beim Neubau nötig)' } },
      { id: 'leges', pct: [2, 4],
        label: { nl: 'Bouwleges en vergunning gemeente (2% – 4%)', en: 'Building tax and town hall permit (2% – 4%)', de: 'Baugebühren und Genehmigung der Gemeinde (2 % – 4 %)' } },
    ],
  },
  {
    key: 'airco',
    dienst: 'anders',
    label: { nl: 'Airco of warmtepomp', en: 'Air con or heat pump', de: 'Klimaanlage oder Wärmepumpe' },
    sub: { nl: 'Koelen, verwarmen, warm water', en: 'Cooling, heating, hot water', de: 'Kühlen, Heizen, Warmwasser' },
    qty: { label: { nl: 'Aantal kamers', en: 'Number of rooms', de: 'Anzahl Räume' }, unitLabel: { nl: '', en: '', de: '' }, def: 2, min: 1, max: 8 },
    options: [
      { id: 'split', unit: 'each', min: 900, max: 1800,
        label: { nl: 'Split-airco per kamer', en: 'Split unit per room', de: 'Split-Gerät pro Raum' },
        hint: { nl: '2,5 – 3,5 kW, koelt en verwarmt, kamer tot ± 30 m²', en: '2.5 – 3.5 kW, cools and heats, room up to approx. 30 m²', de: '2,5 – 3,5 kW, kühlt und heizt, Raum bis ca. 30 m²' } },
      { id: 'multisplit', unit: 'fixed', min: 3500, max: 6000,
        label: { nl: 'Multisplit, 3 binnendelen', en: 'Multi-split, 3 indoor units', de: 'Multisplit, 3 Innengeräte' },
        hint: { nl: 'Eén buitendeel, voor appartement of kleine woning', en: 'One outdoor unit, for an apartment or small house', de: 'Ein Außengerät, für Wohnung oder kleines Haus' } },
      { id: 'kanalen', unit: 'fixed', min: 6000, max: 12000,
        label: { nl: 'Kanalensysteem (conductos)', en: 'Ducted system (conductos)', de: 'Kanalsystem (conductos)' },
        hint: { nl: 'Hele woning, onzichtbaar in verlaagd plafond', en: 'Whole house, hidden in a false ceiling', de: 'Ganzes Haus, unsichtbar in abgehängter Decke' } },
      { id: 'aerotermia', unit: 'fixed', min: 8000, max: 15000,
        label: { nl: 'Lucht-waterwarmtepomp (aerotermia)', en: 'Air-to-water heat pump (aerotermia)', de: 'Luft-Wasser-Wärmepumpe (aerotermia)' },
        hint: { nl: 'Verwarming via radiatoren of vloer, plus warm water', en: 'Heating via radiators or floor, plus hot water', de: 'Heizung über Heizkörper oder Boden, plus Warmwasser' } },
      { id: 'aerotermia-vloer', unit: 'fixed', min: 12000, max: 20000,
        label: { nl: 'Aerotermia met nieuwe vloerverwarming', en: 'Aerotermia with new underfloor heating', de: 'Aerotermia mit neuer Fußbodenheizung' },
        hint: { nl: 'Bij een totaalrenovatie', en: 'As part of a full renovation', de: 'Im Rahmen einer Komplettsanierung' } },
      { id: 'boiler', unit: 'fixed', min: 2000, max: 4500,
        label: { nl: 'Warmtepompboiler (alleen warm water)', en: 'Heat pump water heater (hot water only)', de: 'Wärmepumpen-Boiler (nur Warmwasser)' },
        hint: { nl: 'Vervanger van de elektrische boiler', en: 'Replaces the electric water heater', de: 'Ersetzt den elektrischen Boiler' } },
    ],
    extras: [],
  },
  {
    key: 'dak',
    dienst: 'onderhoud',
    label: { nl: 'Dak of dakterras', en: 'Roof or roof terrace', de: 'Dach oder Dachterrasse' },
    sub: { nl: 'Waterdicht maken of opnieuw leggen', en: 'Waterproofing or re-roofing', de: 'Abdichten oder neu eindecken' },
    qty: { label: { nl: 'Oppervlak', en: 'Area', de: 'Fläche' }, unitLabel: m2, def: 40, min: 5, max: 400 },
    options: [
      { id: 'coating', unit: 'm2', min: 30, max: 50,
        label: { nl: 'Vloeibare coating op dakterras', en: 'Liquid coating on a roof terrace', de: 'Flüssigabdichtung auf der Dachterrasse' },
        hint: { nl: 'Reinigen, scheuren dichten, coating in lagen', en: 'Clean, fill cracks, coating in layers', de: 'Reinigen, Risse schließen, Beschichtung in Schichten' } },
      { id: 'membraan', unit: 'm2', min: 70, max: 130,
        label: { nl: 'Nieuw membraan en nieuwe tegels', en: 'New membrane and new tiles', de: 'Neue Abdichtungsbahn und neue Fliesen' },
        hint: { nl: 'Oude tegels eruit, afschot herstellen, membraan, tegels', en: 'Old tiles up, correct the fall, membrane, tiles', de: 'Alte Fliesen raus, Gefälle herstellen, Bahn, Fliesen' } },
      { id: 'pannen', unit: 'm2', min: 60, max: 110,
        label: { nl: 'Pannendak opnieuw leggen', en: 'Re-lay a tiled roof', de: 'Ziegeldach neu eindecken' },
        hint: { nl: 'Pannen eraf, onderdak of folie, pannen terug', en: 'Tiles off, underlay, tiles back', de: 'Ziegel runter, Unterdach oder Folie, Ziegel zurück' } },
      { id: 'nieuw', unit: 'm2', min: 150, max: 300,
        label: { nl: 'Nieuw dak met isolatie', en: 'New roof with insulation', de: 'Neues Dach mit Dämmung' },
        hint: { nl: 'Nieuwe balken of plaat, isolatie, waterdichte laag, pannen', en: 'New beams or deck, insulation, waterproofing, tiles', de: 'Neue Balken oder Platte, Dämmung, Abdichtung, Ziegel' } },
    ],
    extras: [],
  },
  {
    key: 'buitenkeuken',
    dienst: 'renovatie',
    label: { nl: 'Buitenkeuken', en: 'Outdoor kitchen', de: 'Außenküche' },
    sub: { nl: 'Barbecue tot complete buitenkeuken', en: 'From a barbecue to a full outdoor kitchen', de: 'Vom Grill bis zur kompletten Außenküche' },
    options: [
      { id: 'eenvoudig', unit: 'fixed', min: 2500, max: 5000,
        label: { nl: 'Eenvoudig', en: 'Simple', de: 'Einfach' },
        hint: { nl: 'Gemetseld blok met barbecue en werkblad', en: 'Built-in block with barbecue and worktop', de: 'Gemauerter Block mit Grill und Arbeitsfläche' } },
      { id: 'compleet', unit: 'fixed', min: 6000, max: 12000,
        label: { nl: 'Compleet', en: 'Complete', de: 'Komplett' },
        hint: { nl: 'Plus spoelbak, water, stroom, kastjes, koelkast', en: 'Plus sink, water, power, cupboards, fridge', de: 'Plus Spüle, Wasser, Strom, Schränke, Kühlschrank' } },
      { id: 'luxe', unit: 'fixed', min: 12000, max: 25000,
        label: { nl: 'Luxe', en: 'Luxury', de: 'Luxus' },
        hint: { nl: 'Pizzaoven of gasgrill, natuursteen, verlichting, overkapping', en: 'Pizza oven or gas grill, natural stone, lighting, roof', de: 'Pizzaofen oder Gasgrill, Naturstein, Beleuchtung, Überdachung' } },
    ],
    extras: [
      { id: 'pergola', min: 3000, max: 10000,
        label: { nl: 'Pergola of overkapping', en: 'Pergola or roof', de: 'Pergola oder Überdachung' } },
    ],
  },
  {
    key: 'zonnepanelen',
    dienst: 'energie',
    label: { nl: 'Zonnepanelen', en: 'Solar panels', de: 'Solaranlage' },
    sub: { nl: 'Panelen, thuisbatterij, zonneboiler', en: 'Panels, home battery, solar water heater', de: 'Module, Speicher, Solarthermie' },
    options: [
      { id: 'klein', unit: 'fixed', min: 3500, max: 5000,
        label: { nl: '3 kWp, 7 – 8 panelen', en: '3 kWp, 7 – 8 panels', de: '3 kWp, 7 – 8 Module' },
        hint: { nl: 'Appartement met eigen dak of klein huis', en: 'Apartment with its own roof or a small house', de: 'Wohnung mit eigenem Dach oder kleines Haus' } },
      { id: 'middel', unit: 'fixed', min: 4500, max: 7000,
        label: { nl: '4 – 5 kWp, 10 – 12 panelen', en: '4 – 5 kWp, 10 – 12 panels', de: '4 – 5 kWp, 10 – 12 Module' },
        hint: { nl: 'Woonhuis met airco en inductie', en: 'Family home with air con and induction', de: 'Wohnhaus mit Klimaanlage und Induktion' } },
      { id: 'groot', unit: 'fixed', min: 6500, max: 10000,
        label: { nl: '6 – 8 kWp, 14 – 20 panelen', en: '6 – 8 kWp, 14 – 20 panels', de: '6 – 8 kWp, 14 – 20 Module' },
        hint: { nl: 'Villa met zwembadpomp, warmtepomp of laadpaal', en: 'Villa with pool pump, heat pump or EV charger', de: 'Villa mit Poolpumpe, Wärmepumpe oder Wallbox' } },
      { id: 'aislada', unit: 'fixed', min: 10000, max: 18000,
        label: { nl: 'Finca zonder stroomnet', en: 'Off-grid finca', de: 'Finca ohne Stromnetz' },
        hint: { nl: '3 – 5 kWp met 10 – 15 kWh batterij', en: '3 – 5 kWp with 10 – 15 kWh battery', de: '3 – 5 kWp mit 10 – 15 kWh Speicher' } },
      { id: 'zonneboiler', unit: 'fixed', min: 1500, max: 3500,
        label: { nl: 'Alleen zonneboiler', en: 'Solar water heater only', de: 'Nur Solarthermie' },
        hint: { nl: '150 – 300 liter warm water', en: '150 – 300 litres of hot water', de: '150 – 300 Liter Warmwasser' } },
    ],
    extras: [
      { id: 'batterij', min: 3000, max: 5000,
        label: { nl: 'Thuisbatterij 5 kWh', en: 'Home battery 5 kWh', de: 'Batteriespeicher 5 kWh' } },
      { id: 'grond', min: 500, max: 2000,
        label: { nl: 'Op de grond of op een pergola', en: 'Ground-mounted or on a carport', de: 'Auf dem Boden oder auf einem Carport' } },
    ],
  },
  {
    key: 'elektra',
    dienst: 'energie',
    label: { nl: 'Elektra', en: 'Electrics', de: 'Elektrik' },
    sub: { nl: 'Groepenkast, aarding, alles nieuw', en: 'Consumer unit, earthing, full rewire', de: 'Sicherungskasten, Erdung, alles neu' },
    qty: { label: { nl: 'Woonoppervlak', en: 'Living area', de: 'Wohnfläche' }, unitLabel: m2, def: 100, min: 20, max: 600 },
    options: [
      { id: 'boletin', unit: 'fixed', min: 100, max: 300,
        label: { nl: 'Alleen keuringsbewijs (boletín)', en: 'Electrical certificate only (boletín)', de: 'Nur Elektro-Zertifikat (boletín)' },
        hint: { nl: 'Als de installatie in orde is', en: 'If the installation is in order', de: 'Wenn die Installation in Ordnung ist' } },
      { id: 'cuadro', unit: 'fixed', min: 400, max: 1000,
        label: { nl: 'Nieuwe groepenkast', en: 'New consumer unit', de: 'Neuer Sicherungskasten' },
        hint: { nl: 'Hoofdschakelaar, aardlekschakelaars, groepen', en: 'Main switch, RCDs, circuits', de: 'Hauptschalter, FI-Schalter, Stromkreise' } },
      { id: 'compleet', unit: 'm2', min: 45, max: 70,
        label: { nl: 'Complete elektra vernieuwen', en: 'Full rewire', de: 'Komplette Elektrik erneuern' },
        hint: { nl: 'Alle leidingen, schakelaars en contactdozen, inclusief boletín', en: 'All cables, switches and sockets, boletín included', de: 'Alle Leitungen, Schalter und Steckdosen, inklusive boletín' } },
    ],
    extras: [
      { id: 'aarding', min: 300, max: 800,
        label: { nl: 'Aarding aanleggen', en: 'Install earthing', de: 'Erdung herstellen' } },
      { id: 'laadpaal', min: 900, max: 1800,
        label: { nl: 'Laadpaal voor de auto', en: 'EV charger', de: 'Wallbox fürs Auto' } },
    ],
  },
];

/** Paden van de rekentool per taal */
export const calcPath: Record<TopicLang, string> = {
  nl: '/nl/kosten/rekentool/',
  en: '/en/costs/calculator/',
  de: '/de/kosten/rechner/',
};

/** Paden van de gids over de kosten van een hele woning */
export const renovationGuidePath: Record<TopicLang, string> = {
  nl: '/nl/gidsen/kosten-huis-renoveren-spanje/',
  en: '/en/guides/renovation-costs-spain/',
  de: '/de/ratgeber/renovierungskosten-spanien/',
};

/** Ondergrenzen van de budgetkeuzes in het aanvraagformulier (zelfde volgorde als daar) */
export const budgetBounds = [0, 5000, 20000, 50000, 100000];
