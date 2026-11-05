// Vragen voor makelaar of verkoper bij het kopen van een huis, per thema.
// De Spaanse zin is in elke taal dezelfde; de vraag en de toelichting zijn vertaald.
type L = { nl: string; en: string; de: string };

export interface CheckItem { q: L; es: string; why: L }
export interface CheckTheme { id: L; title: L; items: CheckItem[] }

export const buyingChecklist: CheckTheme[] = [
  {
    id: { nl: 'legaal', en: 'legal', de: 'legal' },
    title: { nl: 'Is het huis legaal?', en: 'Is the house legal?', de: 'Ist das Haus legal?' },
    items: [
      {
        q: { nl: 'Mag het huis bewoond worden?', en: 'May the house be lived in?', de: 'Darf das Haus bewohnt werden?' },
        es: '¿Tiene la vivienda licencia de primera ocupación o declaración responsable de ocupación? ¿Me puede enseñar el documento?',
        why: {
          nl: 'Sinds de Andalusische wet LISTA (2021) vervangt een melding (declaración responsable) de oude licentie. Zonder een van beide krijgt u soms geen water- of stroomcontract op uw naam.',
          en: 'Since the Andalusian LISTA law (2021) a declaration (declaración responsable) replaces the old licence. Without either, you may not get water or electricity contracts in your name.',
          de: 'Seit dem andalusischen Gesetz LISTA (2021) ersetzt eine Erklärung (declaración responsable) die alte Lizenz. Ohne eines davon bekommen Sie mitunter keinen Wasser- oder Stromvertrag auf Ihren Namen.',
        },
      },
      {
        q: { nl: 'Is alles wat er staat vergund?', en: 'Does everything that stands there have a permit?', de: 'Ist alles Gebaute genehmigt?' },
        es: '¿Tienen licencia de obra todas las construcciones: ampliaciones, piscina, terrazas cerradas, almacenes?',
        why: {
          nl: 'Een dichtgemaakt terras, een extra slaapkamer of een zwembad zonder vergunning komt op het platteland veel voor. U erft het probleem.',
          en: 'An enclosed terrace, an extra bedroom or a pool without a permit is common in the countryside. You inherit the problem.',
          de: 'Eine geschlossene Terrasse, ein zusätzliches Schlafzimmer oder ein Pool ohne Genehmigung sind auf dem Land häufig. Das Problem geht auf Sie über.',
        },
      },
      {
        q: { nl: 'Klopt de akte met de werkelijkheid?', en: 'Does the deed match reality?', de: 'Stimmt die Urkunde mit der Wirklichkeit überein?' },
        es: '¿Está todo lo construido declarado en la escritura y en el Catastro? ¿Coinciden los metros?',
        why: {
          nl: 'Wijken akte, kadaster en werkelijkheid af, dan is er vaak zonder vergunning gebouwd, en kan de bank lager taxeren.',
          en: 'If deed, cadastre and reality differ, something was often built without a permit, and the bank may value lower.',
          de: 'Weichen Urkunde, Kataster und Wirklichkeit ab, wurde oft ohne Genehmigung gebaut, und die Bank bewertet womöglich niedriger.',
        },
      },
      {
        q: { nl: 'Heeft het huis een AFO-verklaring?', en: 'Does the house have an AFO declaration?', de: 'Hat das Haus eine AFO-Erklärung?' },
        es: '¿Tiene la vivienda resolución de asimilado a fuera de ordenación (AFO) del Ayuntamiento?',
        why: {
          nl: 'Bij een huis op landelijke grond zonder volledige vergunning is een AFO-verklaring (DAFO) het bewijs dat de gemeente niet meer optreedt.',
          en: 'For a house on rural land without full permits, an AFO declaration (DAFO) is the proof that the town hall will no longer take action.',
          de: 'Bei einem Haus auf ländlichem Boden ohne volle Genehmigung belegt die AFO-Erklärung (DAFO), dass die Gemeinde nicht mehr einschreitet.',
        },
      },
      {
        q: { nl: 'Loopt er een procedure van de gemeente?', en: 'Are there any proceedings by the town hall?', de: 'Läuft ein Verfahren der Gemeinde?' },
        es: '¿Hay algún expediente de disciplina urbanística o sanción abierto sobre la vivienda o la parcela?',
        why: {
          nl: 'Een lopende handhavingsprocedure kan eindigen in een boete of sloop. Laat uw advocaat dit ook zelf bij de gemeente navragen.',
          en: 'Open enforcement proceedings can end in a fine or demolition. Have your lawyer check this with the town hall as well.',
          de: 'Ein laufendes Verfahren der Bauaufsicht kann mit Bußgeld oder Abriss enden. Lassen Sie Ihren Anwalt das zusätzlich bei der Gemeinde prüfen.',
        },
      },
      {
        q: { nl: 'Wat mag ik later nog bouwen?', en: 'What can I build later?', de: 'Was darf ich später noch bauen?' },
        es: '¿Qué tipo de suelo es (urbano o rústico)? ¿Se puede ampliar o construir una piscina?',
        why: {
          nl: 'Op landelijke grond en bij AFO-status is uitbreiden meestal niet toegestaan. Plant u een zwembad of gastenverblijf, vraag het dan vóór de koop.',
          en: 'On rural land and with AFO status, extending is usually not allowed. If you plan a pool or guest house, ask before you buy.',
          de: 'Auf ländlichem Boden und bei AFO-Status ist Erweitern meist nicht erlaubt. Planen Sie Pool oder Gästehaus, fragen Sie vor dem Kauf.',
        },
      },
    ],
  },
  {
    id: { nl: 'eigendom', en: 'ownership', de: 'eigentum' },
    title: { nl: 'Eigendom, schulden en kosten', en: 'Ownership, debts and costs', de: 'Eigentum, Schulden und Kosten' },
    items: [
      {
        q: { nl: 'Wie is de eigenaar en rust er een hypotheek op?', en: 'Who owns it, and is there a mortgage on it?', de: 'Wem gehört es, und ist eine Hypothek eingetragen?' },
        es: '¿Me puede facilitar una nota simple actualizada? ¿Hay hipotecas, embargos u otras cargas?',
        why: {
          nl: 'De nota simple uit het eigendomsregister toont eigenaar en lasten. Alle eigenaars (ook erfgenamen) moeten bij de notaris tekenen.',
          en: 'The nota simple from the Land Registry shows the owner and charges. All owners (including heirs) must sign at the notary.',
          de: 'Die Nota simple aus dem Eigentumsregister zeigt Eigentümer und Lasten. Alle Eigentümer (auch Erben) müssen beim Notar unterschreiben.',
        },
      },
      {
        q: { nl: 'Zijn de belastingen betaald?', en: 'Are the taxes paid?', de: 'Sind die Steuern bezahlt?' },
        es: '¿Está al corriente del pago del IBI y de la tasa de basura? ¿Me puede dar el último recibo?',
        why: {
          nl: 'Onbetaalde onroerendgoedbelasting (IBI) gaat mee met het huis. Het biljet toont ook de kadastrale waarde, die uw jaarlijkse lasten bepaalt.',
          en: 'Unpaid property tax (IBI) passes with the house. The bill also shows the cadastral value, which sets your annual costs.',
          de: 'Unbezahlte Grundsteuer (IBI) geht mit dem Haus über. Der Bescheid zeigt auch den Katasterwert, der Ihre jährlichen Kosten bestimmt.',
        },
      },
      {
        q: { nl: 'Wat kost de vereniging van eigenaars?', en: 'What are the community fees?', de: 'Was kostet die Eigentümergemeinschaft?' },
        es: '¿Cuánto es la cuota de comunidad? ¿Hay deudas o derramas aprobadas o previstas?',
        why: {
          nl: 'Bij een appartement of urbanisatie: een al besloten extra heffing (derrama) voor bijvoorbeeld een nieuw dak kan duizenden euro’s zijn.',
          en: 'For an apartment or urbanisation: an extra levy (derrama) already approved for, say, a new roof can cost thousands.',
          de: 'Bei Wohnung oder Urbanisation: Eine bereits beschlossene Sonderumlage (derrama), etwa für ein neues Dach, kann Tausende kosten.',
        },
      },
      {
        q: { nl: 'Wordt het huis leeg opgeleverd?', en: 'Will the house be handed over empty?', de: 'Wird das Haus leer übergeben?' },
        es: '¿Está la vivienda alquilada u ocupada? ¿Se entrega libre de inquilinos y ocupantes?',
        why: {
          nl: 'Een lopend huurcontract gaat in Spanje vaak mee met de verkoop.',
          en: 'In Spain a running tenancy often continues after a sale.',
          de: 'In Spanien läuft ein bestehender Mietvertrag nach dem Verkauf oft weiter.',
        },
      },
      {
        q: { nl: 'Wat zit er bij de prijs in?', en: 'What is included in the price?', de: 'Was ist im Preis enthalten?' },
        es: '¿Qué está incluido en el precio: muebles, electrodomésticos, aire acondicionado, equipo de piscina?',
        why: {
          nl: 'Leg het vast in de arras, met een lijst.',
          en: 'Put it in the arras contract, with a list.',
          de: 'Halten Sie es im Arras-Vertrag fest, mit einer Liste.',
        },
      },
      {
        q: { nl: 'Waarom verkoopt de eigenaar?', en: 'Why is the owner selling?', de: 'Warum verkauft der Eigentümer?' },
        es: '¿Por qué venden la casa y desde cuándo está en venta?',
        why: {
          nl: 'Een huis dat lang te koop staat, heeft vaak een reden: prijs, legaliteit of een gebrek. En het geeft ruimte om te onderhandelen.',
          en: 'A house that has been for sale a long time usually has a reason: price, legal status or a defect. And it gives room to negotiate.',
          de: 'Ein Haus, das lange zum Verkauf steht, hat meist einen Grund: Preis, Legalität oder ein Mangel. Und es gibt Verhandlungsspielraum.',
        },
      },
    ],
  },
  {
    id: { nl: 'staat', en: 'condition', de: 'zustand' },
    title: { nl: 'De staat van het huis', en: 'The condition of the house', de: 'Der Zustand des Hauses' },
    items: [
      {
        q: { nl: 'Zijn er vochtproblemen of lekkages geweest?', en: 'Have there been damp problems or leaks?', de: 'Gab es Feuchtigkeit oder Undichtigkeiten?' },
        es: '¿Ha tenido la casa problemas de humedad o filtraciones? ¿Cuándo se impermeabilizó la cubierta por última vez?',
        why: {
          nl: 'In de zomer lijkt elk huis droog. Vocht en daklekkage zijn de meest gevonden gebreken bij een keuring in de Axarquía.',
          en: 'In summer every house looks dry. Damp and roof leaks are the most common findings in surveys in the Axarquía.',
          de: 'Im Sommer wirkt jedes Haus trocken. Feuchtigkeit und undichte Dächer sind die häufigsten Befunde bei Gutachten in der Axarquía.',
        },
      },
      {
        q: { nl: 'Zijn er scheuren of verzakkingen?', en: 'Are there cracks or subsidence?', de: 'Gibt es Risse oder Setzungen?' },
        es: '¿Hay grietas en paredes o suelos? ¿Se han hecho reparaciones estructurales?',
        why: {
          nl: 'Vers geschilderde muren kunnen scheuren verbergen. Een keurder ziet het verschil tussen een krimpscheur en een constructief probleem.',
          en: 'Freshly painted walls can hide cracks. A surveyor can tell a shrinkage crack from a structural problem.',
          de: 'Frisch gestrichene Wände können Risse verbergen. Ein Gutachter unterscheidet Schwundrisse von Problemen der Statik.',
        },
      },
      {
        q: { nl: 'Zijn er termieten of houtworm geweest?', en: 'Have there been termites or woodworm?', de: 'Gab es Termiten oder Holzwurm?' },
        es: '¿Se ha tratado la casa contra termitas o carcoma? ¿Tiene el certificado del tratamiento?',
        why: {
          nl: 'Vooral bij oude huizen met houten balken. Behandeling kost honderden tot duizenden euro’s.',
          en: 'Especially in old houses with timber beams. Treatment costs hundreds to thousands of euros.',
          de: 'Vor allem bei alten Häusern mit Holzbalken. Eine Behandlung kostet Hunderte bis Tausende Euro.',
        },
      },
      {
        q: { nl: 'Is de elektra in orde?', en: 'Is the wiring in order?', de: 'Ist die Elektrik in Ordnung?' },
        es: '¿Tiene la instalación eléctrica boletín (certificado de instalación)? ¿Qué potencia tiene contratada?',
        why: {
          nl: 'Zonder certificaat lukt het soms niet om de stroom op uw naam te zetten. Een lage aansluiting is te krap voor airco en een warmtepomp.',
          en: 'Without a certificate you may not be able to transfer the supply. A low contracted power is too little for air conditioning and a heat pump.',
          de: 'Ohne Zertifikat lässt sich der Strom mitunter nicht umschreiben. Eine niedrige Anschlussleistung reicht nicht für Klimaanlage und Wärmepumpe.',
        },
      },
      {
        q: { nl: 'Hoe oud zijn dak, ramen, boiler en airco?', en: 'How old are the roof, windows, boiler and air conditioning?', de: 'Wie alt sind Dach, Fenster, Boiler und Klimaanlage?' },
        es: '¿Qué antigüedad tienen la cubierta, las ventanas, el termo y el aire acondicionado? ¿Hay facturas de las reformas?',
        why: {
          nl: 'Facturen van eerdere verbouwingen laten zien wat er is gedaan en door wie.',
          en: 'Invoices for earlier work show what was done and by whom.',
          de: 'Rechnungen früherer Arbeiten zeigen, was gemacht wurde und von wem.',
        },
      },
      {
        q: { nl: 'Is het zwembad in orde?', en: 'Is the pool in good order?', de: 'Ist der Pool in Ordnung?' },
        es: '¿Pierde agua la piscina? ¿Cuándo se renovó la depuradora?',
        why: {
          nl: 'Een lekkend zwembad of een versleten pomp en filter zijn kostenposten die u bij een bezichtiging niet ziet.',
          en: 'A leaking pool or a worn pump and filter are costs you do not see at a viewing.',
          de: 'Ein undichter Pool oder verschlissene Pumpe und Filter sind Kosten, die man bei einer Besichtigung nicht sieht.',
        },
      },
    ],
  },
  {
    id: { nl: 'platteland', en: 'countryside', de: 'land' },
    title: { nl: 'Water, afvoer en toegang (vooral bij een finca)', en: 'Water, drainage and access (especially for a finca)', de: 'Wasser, Abwasser und Zufahrt (vor allem bei einer Finca)' },
    items: [
      {
        q: { nl: 'Waar komt het water vandaan?', en: 'Where does the water come from?', de: 'Woher kommt das Wasser?' },
        es: '¿De dónde viene el agua: red municipal, pozo o comunidad de regantes? ¿Hay contrato o derecho de agua a nombre del vendedor?',
        why: {
          nl: 'Bij een put of irrigatiewater wilt u weten of het recht mee overgaat en of er in een droge zomer genoeg is.',
          en: 'With a well or irrigation water you want to know whether the right transfers with the house and whether there is enough in a dry summer.',
          de: 'Bei Brunnen oder Bewässerungswasser wollen Sie wissen, ob das Recht mit übergeht und ob es im trockenen Sommer reicht.',
        },
      },
      {
        q: { nl: 'Hoe wordt het afvalwater afgevoerd?', en: 'How is the wastewater handled?', de: 'Wie wird das Abwasser entsorgt?' },
        es: '¿Está la casa conectada al alcantarillado o tiene fosa séptica? ¿Cuándo se vació por última vez?',
        why: {
          nl: 'Een oude beerput voldoet vaak niet meer aan de regels. Een nieuwe zuiveringsinstallatie kost duizenden euro’s.',
          en: 'An old septic tank often no longer meets the rules. A new treatment plant costs thousands.',
          de: 'Eine alte Klärgrube entspricht oft nicht mehr den Vorschriften. Eine neue Kläranlage kostet Tausende.',
        },
      },
      {
        q: { nl: 'Is de toegangsweg openbaar?', en: 'Is the access road public?', de: 'Ist die Zufahrt öffentlich?' },
        es: '¿El camino de acceso es público o hay una servidumbre de paso? ¿Quién paga el mantenimiento?',
        why: {
          nl: 'Een weg over het land van de buren zonder ingeschreven recht van overpad kan later tot ruzie leiden.',
          en: 'A road over a neighbour’s land without a registered right of way can lead to disputes later.',
          de: 'Ein Weg über das Land des Nachbarn ohne eingetragenes Wegerecht kann später Streit bringen.',
        },
      },
      {
        q: { nl: 'Hoe zijn stroom, internet en mobiel bereik?', en: 'What about electricity, internet and mobile signal?', de: 'Wie sind Strom, Internet und Mobilfunk?' },
        es: '¿La casa tiene luz de red o placas solares? ¿Qué conexión a internet hay y hay buena cobertura móvil?',
        why: {
          nl: 'Niet elke finca hangt aan het net. Voor thuiswerken of verhuur is goed internet onmisbaar.',
          en: 'Not every finca is on the grid. For working from home or letting, good internet is essential.',
          de: 'Nicht jede Finca hängt am Netz. Fürs Homeoffice oder die Vermietung ist gutes Internet unverzichtbar.',
        },
      },
    ],
  },
  {
    id: { nl: 'omgeving', en: 'surroundings', de: 'umgebung' },
    title: { nl: 'Verhuur en omgeving', en: 'Letting and surroundings', de: 'Vermietung und Umgebung' },
    items: [
      {
        q: { nl: 'Mag ik het huis toeristisch verhuren?', en: 'Can I let the house to tourists?', de: 'Darf ich das Haus an Urlauber vermieten?' },
        es: '¿Tiene la vivienda número de registro de turismo? ¿Permiten el Ayuntamiento y la comunidad el alquiler turístico?',
        why: {
          nl: 'Gemeenten mogen vakantieverhuur beperken en in appartementengebouwen is toestemming van de vereniging nodig. Een bestaand nummer is geen garantie dat u verder mag.',
          en: 'Town halls can restrict holiday letting, and apartment buildings need the community’s consent. An existing number is no guarantee you can carry on.',
          de: 'Gemeinden dürfen Ferienvermietung beschränken, und in Wohnanlagen braucht es die Zustimmung der Gemeinschaft. Eine bestehende Nummer garantiert nicht, dass Sie weitermachen dürfen.',
        },
      },
      {
        q: { nl: 'Komen er bouwplannen in de buurt?', en: 'Are there building plans nearby?', de: 'Gibt es Bauvorhaben in der Nähe?' },
        es: '¿Hay planes urbanísticos, carreteras u obras previstas cerca de la vivienda?',
        why: {
          nl: 'Het uitzicht dat u koopt, is niet beschermd. Vraag het ook bij de gemeente.',
          en: 'The view you are buying is not protected. Ask the town hall too.',
          de: 'Die Aussicht, die Sie kaufen, ist nicht geschützt. Fragen Sie auch bei der Gemeinde.',
        },
      },
      {
        q: { nl: 'Hoe is het hier in de winter?', en: 'What is it like here in winter?', de: 'Wie ist es hier im Winter?' },
        es: '¿Cómo es la casa en invierno? ¿Cómo se calienta y cuánto se gasta en calefacción?',
        why: {
          nl: 'Steenhuizen zijn in de winter koud en vochtig. Vraag naar de stookkosten en bezoek het huis bij voorkeur ook in de winter.',
          en: 'Stone houses are cold and damp in winter. Ask about heating costs and preferably visit in winter too.',
          de: 'Steinhäuser sind im Winter kalt und feucht. Fragen Sie nach Heizkosten und besichtigen Sie möglichst auch im Winter.',
        },
      },
    ],
  },
];

export const checklistCount = buyingChecklist.reduce((n, t) => n + t.items.length, 0);
