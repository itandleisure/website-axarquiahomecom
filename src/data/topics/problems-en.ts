import type { Topic } from './types';

// Problem pages in English.
export const problemsEn: Topic[] = [
  {
    key: 'vocht',
    slug: 'damp-and-mould',
    title: 'Damp and mould in your home in Spain: causes and solutions',
    seoTitle: 'Damp and mould in Spanish houses: causes, fixes and costs',
    short: 'Damp and mould',
    description: 'Damp patches, mould or a musty smell in your home in the Axarquía? How to tell rising damp, condensation and leaks apart, what to do yourself and what the fix costs.',
    lead: 'Many people do not expect it in a sunny country, but damp is one of the most common complaints in homes in the Axarquía. Especially in village houses, houses built against a slope and houses that stand empty for months.',
    keyword: 'damp in spanish houses',
    dienst: 'onderhoud',
    onderwerp: 'I have damp or mould in my home.',
    answer: 'Damp in a Spanish home almost always has one of three causes: <strong>condensation</strong> (a closed, cold house without ventilation), <strong>rising or penetrating damp</strong> (old uninsulated walls or a wall against the hillside) or <strong>a leak</strong> (roof, pipe, drain). Find the cause first, then paint.',
    sections: [
      {
        id: 'recognise',
        h: 'Which kind of damp do you have?',
        table: {
          head: ['What you see', 'Likely cause'],
          rows: [
            ['Black spots in corners, behind wardrobes, on cold walls; worse in winter', 'Condensation: too little ventilation and cold walls'],
            ['Tide mark and flaking paint at the bottom of the wall, up to ± 1 metre, salt crystals', 'Rising damp from the ground'],
            ['Wet wall on the hillside side or under the terrace', 'Penetrating damp: soil and rainwater against the wall'],
            ['Patch on a ceiling or wall that grows after rain', 'Leaking roof or roof terrace'],
            ['Patch that is always wet, even in dry weather', 'Leaking water pipe or drain'],
          ],
        },
      },
      {
        id: 'yourself',
        h: 'What you can do yourself',
        html: `<ul>
<li>Ventilate every day, in winter too, and open a window when cooking or showering.</li>
<li>Use a dehumidifier. In an empty house it can drain through a hose into a waste pipe, so the tank never fills up.</li>
<li>Keep wardrobes ten centimetres away from outside walls.</li>
<li>Keep a little heating on in winter: a house that cools right down attracts condensation.</li>
<li>Remove mould with a mould cleaner or diluted bleach. Painting without tackling the cause only helps for a few months.</li>
</ul>`,
      },
      {
        id: 'solution',
        h: 'The solution and what it costs',
        table: {
          head: ['Solution', 'For', 'Guide price'],
          rows: [
            ['Mechanical ventilation or air vents', 'Condensation', '€300 – €2,500'],
            ['Damp-proof course injection', 'Rising damp', '€60 – €120 per linear metre of wall'],
            ['Lime or renovation plaster instead of cement', 'Rising damp in old walls', '€40 – €80 per m²'],
            ['Drainage and external waterproofing', 'Wall against a slope', '€150 – €400 per linear metre'],
            ['Tracing and repairing a leak', 'Pipe or roof', '€300 – €1,500'],
          ],
          note: 'Guide prices excluding VAT. For a finca built against a slope, drainage is often the only lasting solution.',
        },
      },
      {
        id: 'empty',
        h: 'Damp in an empty holiday home',
        html: '<p>A house that is shut up from November to March often smells musty on arrival. Mattresses, cushions and clothes can go mouldy. Have the house aired regularly and the dehumidifier checked. That is exactly what <a href="/en/key-holding/">key holding</a> does: regular visits, windows opened, photos, and immediate action when a damp patch appears.</p>',
      },
    ],
    faq: [
      { q: 'Why are Spanish homes so damp in winter?', a: 'Many homes are built to stay cool in summer: thick stone walls, tiled floors, no insulation and no central heating. In winter the walls cool down and moisture from the air condenses on them.' },
      { q: 'Is mould dangerous?', a: 'Mould can cause respiratory problems and is a particular issue for people with asthma or allergies. Deal with it quickly, and do not sleep in a room with a lot of mould.' },
      { q: 'Do I have to disclose damp when selling?', a: 'You should disclose known defects to the buyer. Conversely, when buying, have the house surveyed. A moisture meter reveals what a fresh coat of paint hides.' },
    ],
    links: [
      { href: '/en/maintenance/', label: 'Maintenance and repairs' },
      { href: '/en/key-holding/', label: 'Key holding and property checks' },
      { href: '/en/property-survey/', label: 'Pre-purchase survey' },
    ],
    related: ['problems:daklekkage', 'costs:dak', 'costs:airco'],
    sources: [
      { name: 'Código Técnico de la Edificación, DB HS 1 Protection against damp', url: 'https://www.codigotecnico.org/' },
      { name: 'CYPE, Generador de Precios (Spanish construction prices)', url: 'https://generadordeprecios.info/' },
    ],
    ctaTitle: 'Damp or mould in your home?',
    ctaText: 'Send photos of the patches and tell us where the house is. We will find the cause and price the fix.',
    minutes: 5,
    published: '2026-11-05',
  },
  {
    key: 'daklekkage',
    slug: 'roof-leaks',
    title: 'A leaking roof at your home in Spain: what now?',
    seoTitle: 'Leaking roof in Spain: first steps, causes and repair costs',
    short: 'Roof leaks',
    description: 'Is the roof or roof terrace of your home in the Axarquía leaking? What to do straight away, even from the UK, where leaks usually come from and what the repair costs.',
    lead: 'After a heavy downpour the neighbours message you: water is running down the wall. Leaks are the most common problem in the Axarquía, especially after the first autumn storms. Here is how to deal with it.',
    keyword: 'leaking roof spain',
    dienst: 'onderhoud',
    onderwerp: 'My roof or roof terrace is leaking.',
    answer: 'With a roof leak: <strong>limit the damage</strong> (buckets, move furniture, switch off power if water is near electrics), <strong>take photos</strong> for the insurer and have <strong>the roof drains checked</strong>: blocked outlets are the most common cause. A local repair costs €300 to €1,500; re-waterproofing a roof terrace €30 to €130 per m².',
    sections: [
      {
        id: 'now',
        h: 'What to do straight away',
        html: `<ol>
<li>Put buckets down and move furniture, rugs and electrical appliances out of the way.</li>
<li>Is water reaching lights or sockets? Switch off that circuit at the fuse board.</li>
<li>Take photos and videos of the damage inside and, if it is safe, of the roof.</li>
<li>Report the damage to your home insurer. Many Spanish policies have an emergency line for water damage.</li>
<li>Are the drain outlets on the roof terrace blocked? Clear them. Often the water drains away at once.</li>
</ol>
<p>Not in Spain yourself? Then it helps to have someone with a key who can go and look within a few hours. That is what <a href="/en/key-holding/">key holding</a> is for.</p>`,
      },
      {
        id: 'causes',
        h: 'Where do leaks usually come from?',
        html: `<ul>
<li><strong>Blocked drains</strong> on the roof terrace, from leaves, sand or Saharan dust (<em>calima</em>). The water stands and finds its way in.</li>
<li><strong>Worn waterproofing</strong> under or on the roof terrace tiles. After 15 to 25 years it is often finished.</li>
<li><strong>Loose or broken tiles</strong> on a pitched roof, for example after a storm.</li>
<li><strong>Flashings</strong> at chimneys, upstands and roof penetrations for air conditioning or solar panels.</li>
<li><strong>Cracks</strong> in the façade or parapet, letting driving rain in.</li>
</ul>`,
      },
      {
        id: 'costs',
        h: 'What does the repair cost?',
        table: {
          head: ['Repair', 'Guide price'],
          rows: [
            ['Clearing and repairing drains and gutters', '€150 – €600'],
            ['Tracing and sealing a local leak', '€300 – €1,500'],
            ['Coating a roof terrace (liquid membrane)', '€30 – €50 per m²'],
            ['Roof terrace: new membrane and new tiles', '€70 – €130 per m²'],
            ['Relaying a tiled roof', '€60 – €110 per m²'],
            ['Repairing water damage inside (plaster, painting)', '€300 – €2,000'],
          ],
          note: 'Guide prices excluding VAT. More detail and a worked example on the roof and roof terrace cost page.',
        },
      },
      {
        id: 'prevent',
        h: 'Prevention',
        html: '<p>Have the roof checked every year in September or October, before the autumn rains and the <em>gota fría</em>, and after every storm or calima. It costs little and prevents most leaks. See also <a href="/en/costs/roof-and-roof-terrace/">roof and roof terrace costs</a>.</p>',
      },
    ],
    faq: [
      { q: 'Will my insurance pay for a roof leak?', a: 'Most home policies pay for the water damage inside. Repairing the roof itself is often not covered if the leak is due to wear or lack of maintenance. Storm damage (often above a certain wind speed) sometimes is. Check your policy.' },
      { q: 'Who pays in an apartment?', a: 'The roof is usually common property. The owners’ association (comunidad) is then responsible for the repair. For a private roof terrace it can be different; that is set out in the statutes.' },
      { q: 'Can the roof be repaired in winter?', a: 'Yes, between showers. Coatings and membranes do need a few dry days. A temporary cover prevents further damage until the weather allows.' },
    ],
    links: [
      { href: '/en/costs/roof-and-roof-terrace/', label: 'Roof and roof terrace costs' },
      { href: '/en/maintenance/', label: 'Maintenance and repairs' },
      { href: '/en/key-holding/', label: 'Key holding and property checks' },
    ],
    related: ['costs:dak', 'problems:vocht', 'problems:scheuren'],
    sources: [
      { name: 'AEMET, weather warnings for rain and gota fría (DANA)', url: 'https://www.aemet.es/' },
      { name: 'Ley 49/1960 de Propiedad Horizontal (comunidad and common areas)', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1960-10906' },
      { name: 'CYPE, Generador de Precios (Spanish construction prices)', url: 'https://generadordeprecios.info/' },
    ],
    ctaTitle: 'Is your roof leaking?',
    ctaText: 'Send photos of the damage. We will go and look, even if you are not in Spain.',
    minutes: 5,
    published: '2026-11-05',
  },
  {
    key: 'scheuren',
    slug: 'cracks-in-walls',
    title: 'Cracks in walls: when should you worry?',
    seoTitle: 'Cracks in the walls of your house in Spain: harmless or serious?',
    short: 'Cracks in walls',
    description: 'Cracks in the walls of your home in the Axarquía? How to tell a harmless shrinkage crack from subsidence, what an inspection costs and what repairs cost.',
    lead: 'Almost every house in the Axarquía has a crack somewhere. Usually it is harmless. But on the clay soils in the hills, houses can genuinely subside. Here is how to tell the difference.',
    keyword: 'cracks in walls spain house',
    dienst: 'onderhoud',
    onderwerp: 'I have cracks in the walls of my house.',
    answer: 'Hairline cracks in plaster (under 1 mm) are usually harmless: shrinkage and temperature. Have a crack inspected if it is <strong>wider than 3 mm, runs diagonally from a window or door corner, steps through the brickwork, or is growing</strong>, and if doors and windows start to stick. An inspection by a building surveyor (<em>aparejador</em>) costs €300 to €800.',
    sections: [
      {
        id: 'types',
        h: 'Harmless or not?',
        table: {
          head: ['Crack', 'What it usually means'],
          rows: [
            ['Hairline cracks in a web pattern in the plaster', 'Plaster shrinkage. Cosmetic.'],
            ['Straight crack where old and new work meet', 'Joint between two parts of the building. Usually harmless, but seal against rain.'],
            ['Horizontal crack under the roof or roof terrace', 'Roof expanding in the heat. Monitor it.'],
            ['Diagonal crack from the corner of a window or door', 'Possible foundation movement. Have it inspected.'],
            ['Stepped crack through the joints, wider than 3 mm', 'Subsidence. Have it inspected.'],
            ['Crack that grows, sticking doors, sloping floor', 'Active movement. Have it inspected quickly.'],
          ],
        },
      },
      {
        id: 'axarquia',
        h: 'Why houses in the Axarquía crack',
        html: `<ul>
<li><strong>Clay soil.</strong> Parts of the hills have clay that swells when wet and shrinks in drought. After a long dry spell followed by heavy rain, foundations move.</li>
<li><strong>Slopes.</strong> Houses and terraces on a slope need retaining walls. If these do not drain water well, they start to shift.</li>
<li><strong>Extensions.</strong> An extension on different foundations from the old house settles differently, and a crack opens at the junction.</li>
<li><strong>Leaking pipes.</strong> A leaking drain under the house washes away the soil beneath the foundations.</li>
<li><strong>Earthquakes.</strong> Málaga province has light earthquakes. They rarely cause damage but can make existing cracks grow.</li>
</ul>`,
      },
      {
        id: 'monitor',
        h: 'Monitoring a crack',
        html: '<p>Not sure? Draw a pencil line at both ends of the crack with the date and measure its width. Or have a crack monitor (<em>fisurómetro</em> or <em>testigo</em>) fitted. After a few months, check whether the crack has grown longer or wider. If you are away, have this included in your regular <a href="/en/key-holding/">key holding</a> visits.</p>',
      },
      {
        id: 'costs',
        h: 'What do inspection and repairs cost?',
        table: {
          head: ['Work', 'Guide price'],
          rows: [
            ['Inspection and report by a building surveyor (aparejador or arquitecto técnico)', '€300 – €800'],
            ['Filling cosmetic cracks and painting', '€200 – €1,000'],
            ['Crack stitching with stainless steel ties (grapado) and plaster repair', '€1,000 – €5,000'],
            ['Drainage along foundations or a retaining wall', '€150 – €400 per linear metre'],
            ['Underpinning with micropiles', '€15,000 – €60,000+'],
          ],
          note: 'Guide prices excluding VAT. Serious subsidence is rare, but then a report with calculations comes first.',
        },
      },
    ],
    faq: [
      { q: 'Should I have cracks checked before buying a house?', a: 'Yes. Cracks are one of the most important things to look at in a survey, especially for a finca on a slope or a house with an extension. A fresh coat of paint can hide cracks.' },
      { q: 'Will insurance pay to repair cracks?', a: 'Usually not when it is settlement or wear. Earthquake damage in Spain is covered by the Consorcio de Compensación de Seguros, provided you have home insurance.' },
    ],
    links: [
      { href: '/en/property-survey/', label: 'Pre-purchase survey' },
      { href: '/en/maintenance/', label: 'Maintenance and repairs' },
      { href: '/en/guides/buying-a-finca-in-spain/', label: 'Guide: buying a finca in Spain' },
    ],
    related: ['problems:vocht', 'problems:termieten', 'problems:daklekkage'],
    sources: [
      { name: 'Instituto Geográfico Nacional, earthquakes in Spain', url: 'https://www.ign.es/web/ign/portal/sis-area-sismicidad' },
      { name: 'Consorcio de Compensación de Seguros, natural disaster cover', url: 'https://www.consorseguros.es/' },
      { name: 'IGME, map of expansive clays in Spain (arcillas expansivas)', url: 'https://www.igme.es/' },
    ],
    ctaTitle: 'Cracks in your walls?',
    ctaText: 'Send photos with a ruler or coin next to the crack for scale. We will tell you whether it needs investigating.',
    minutes: 5,
    published: '2026-11-05',
  },
  {
    key: 'termieten',
    slug: 'termites',
    title: 'Termites in your home in Spain: recognising and treating them',
    seoTitle: 'Termites in Spain (Andalusia): signs, treatment and costs',
    short: 'Termites',
    description: 'Termites in Andalusia: how to recognise them, how they differ from woodworm, how bait treatment works, what it costs and what to check before buying a house.',
    lead: 'Subterranean termites are found in many places in Andalusia, including the Axarquía. They eat timber beams, door frames and skirting boards from the inside, often unseen for years. Here is how to spot and treat them.',
    keyword: 'termites spain',
    dienst: 'onderhoud',
    onderwerp: 'I suspect termites or woodworm in my house.',
    answer: 'You recognise termites by <strong>mud tubes</strong> on walls and foundations, <strong>timber that sounds hollow</strong> or crumbles, and <strong>swarms of winged insects</strong> in spring. Bait treatment (<em>cebos</em>) usually costs <strong>€900 to €2,000</strong>, a chemical barrier €300 to €600. Replacing damaged beams comes on top.',
    sections: [
      {
        id: 'signs',
        h: 'How to recognise termites',
        html: `<ul>
<li><strong>Mud tubes</strong>: narrow brown tubes of soil along foundations, walls or behind skirting boards. Termites build them to stay damp and in the dark.</li>
<li><strong>Hollow timber</strong>: tap door frames, skirting boards and beams. If it sounds hollow or a screwdriver goes in easily, it has been eaten from the inside.</li>
<li><strong>Swarms</strong>: in spring (February to May), often after rain, winged termites fly out. Afterwards you find discarded wings on the windowsill.</li>
<li><strong>Blistering paint</strong> or rippled timber for no obvious reason.</li>
</ul>`,
      },
      {
        id: 'woodworm',
        h: 'Termites or woodworm?',
        table: {
          head: ['', 'Subterranean termites', 'Woodworm (carcoma)'],
          rows: [
            ['What you see', 'Mud tubes, no holes on the surface', 'Round holes of 1 – 3 mm and fine dust (frass)'],
            ['Where', 'Timber in contact with damp walls or the ground', 'Dry timber, furniture, beams'],
            ['Speed', 'Fast, can be structurally dangerous', 'Slow, over years'],
            ['Approach', 'Eliminate the colony with bait or a barrier', 'Inject or treat the timber'],
          ],
        },
      },
      {
        id: 'treatment',
        h: 'Treatment and costs',
        table: {
          head: ['Treatment', 'What it involves', 'Guide price'],
          rows: [
            ['Inspection', 'Check of house and garden, with a moisture meter', '€100 – €250'],
            ['Chemical barrier', 'Injections into the ground and walls around the house', '€300 – €600'],
            ['Bait system (cebos)', 'Bait stations around the house, monitored for months until the colony is dead', '€900 – €2,000'],
            ['Replacing timber beams or frames', 'After treatment, depending on the damage', '€500 – €10,000+'],
          ],
          note: 'Use a licensed company (registered in the ROESB register in Andalusia). Guide prices excluding VAT.',
        },
        after: '<p>A bait system works more slowly but tackles the whole colony. Research by the CSIC in Andalusia found that colonies disappeared completely with bait and proper follow-up.</p>',
      },
      {
        id: 'prevent',
        h: 'Prevention and buying',
        html: '<p>Termites love damp and timber touching the ground. Keep firewood and old beams away from the house, fix leaks and damp and have timber beams treated during a renovation. Buying an old village house or a finca? Include a termite check in your <a href="/en/property-survey/">pre-purchase survey</a>.</p>',
      },
    ],
    faq: [
      { q: 'Are termites common in the Axarquía?', a: 'Subterranean termites occur across much of Andalusia, in village centres and in the countryside. Not every house has them, but in old houses with timber beams and damp, a check is sensible.' },
      { q: 'Are termites dangerous for the structure?', a: 'They can weaken timber beams in floors and roofs so much that they sag or break. In most modern houses with concrete floors the damage is limited to frames, doors and skirting boards.' },
      { q: 'Can I treat termites myself?', a: 'DIY sprays only kill the termites you see. The colony lives in the ground and survives. For a lasting result you need a professional bait system or barrier.' },
    ],
    links: [
      { href: '/en/property-survey/', label: 'Pre-purchase survey' },
      { href: '/en/renovation/', label: 'Renovation and building work' },
      { href: '/en/problems/damp-and-mould/', label: 'Damp and mould in your home' },
    ],
    related: ['problems:vocht', 'problems:scheuren', 'costs:dak'],
    sources: [
      { name: 'CSIC (IPNA), study on termite elimination with bait in Andalusia (2025)', url: 'https://www.ipna.csic.es/sites/default/files/2025-04/20250421%20NP%20Estudio%20tratamiento%20pionero%20eliminaci%C3%B3n%20termitas.pdf' },
      { name: 'Habitissimo, price guide for woodworm and termite treatment', url: 'https://www.habitissimo.es/presupuestos/tratar-carcoma-y-o-termitas' },
      { name: 'Decreto 60/2012 (Junta de Andalucía), register of pest control companies (ROESB)', url: 'https://cdn.juntadeandalucia.es/boja/2012/60/d1.pdf' },
    ],
    ctaTitle: 'Termites or woodworm?',
    ctaText: 'Send photos of the timber and any tubes. We arrange inspection, treatment and repair.',
    minutes: 5,
    published: '2026-11-05',
  },
  {
    key: 'legionella',
    slug: 'legionella',
    title: 'Legionella in your holiday home, pool or hot tub',
    seoTitle: 'Legionella in a holiday home in Spain: the risk and prevention',
    short: 'Legionella',
    description: 'How big is the risk of legionella in an empty holiday home, pool or hot tub in Spain? Where the bacteria grow, what to do on arrival and what checks cost.',
    lead: 'Legionella grows in stagnant lukewarm water. A holiday home that stands empty for months in a warm climate is therefore a risk, more often than the pool itself. Here is how to prevent it.',
    keyword: 'legionella holiday home spain',
    dienst: 'sleutelbeheer',
    onderwerp: 'I would like the water system, water heater or hot tub of my home flushed and checked.',
    answer: 'The biggest risk is not a properly chlorinated pool, but the <strong>pipes, water heater, water tank and shower heads</strong> of a house that stands empty for a long time, and <strong>hot tubs and spa baths</strong>. On arrival, run all taps and showers for a few minutes, set the water heater to at least 60 °C and have the tank and hot tub cleaned every year.',
    sections: [
      {
        id: 'where',
        h: 'Where does legionella grow?',
        table: {
          head: ['Place', 'Risk', 'Why'],
          rows: [
            ['Pipes and showers in an empty house', 'High', 'Water stands for weeks and turns lukewarm in summer'],
            ['Electric water heater below 50 °C', 'High', 'Ideal temperature for the bacteria'],
            ['Water tank (depósito or aljibe) on a finca', 'Medium to high', 'Stagnant water, heat, sediment'],
            ['Hot tub or spa bath', 'High', 'Warm water that turns into spray'],
            ['Pool with correct chlorine or salt level', 'Low', 'Disinfection kills the bacteria'],
            ['Garden sprinklers and outdoor shower', 'Medium', 'Lukewarm water in hoses, spray'],
          ],
        },
        after: '<p>You become infected by inhaling tiny droplets, for example in the shower. Drinking the water is not a route of infection. Older people, smokers and people with weakened immunity are most at risk.</p>',
      },
      {
        id: 'arrival',
        h: 'What to do on arrival',
        html: `<ol>
<li>Switch on the water heater at 60 °C or higher and let it heat up for a few hours.</li>
<li>Run all taps and showers (hot and cold) for a few minutes with a window open. Hold the shower head low or remove it while you do.</li>
<li>Also run the outdoor shower and garden hoses.</li>
<li>Descale shower heads and tap aerators once a year, or replace them.</li>
</ol>
<p>Coming back after months away? Have the flushing done a few days before you arrive. With <a href="/en/key-holding/">key holding</a> we run the taps on every visit.</p>`,
      },
      {
        id: 'letting',
        h: 'If you let your home',
        html: '<p>If you let your home to holidaymakers, you are responsible for safe water for your guests. Legionella outbreaks in holiday homes make the news and can lead to claims. Set up a routine: flushing before every arrival, water heater at temperature, annual cleaning of tank and hot tub and, if you wish, a water test.</p>',
      },
      {
        id: 'costs',
        h: 'What do checks and cleaning cost?',
        table: {
          head: ['Work', 'Guide price'],
          rows: [
            ['Legionella water test in an accredited laboratory', '€60 – €150 per sample'],
            ['Cleaning and disinfecting a water tank (depósito, aljibe)', '€150 – €400'],
            ['Cleaning and disinfecting a hot tub', '€100 – €250'],
            ['Thermal or chemical disinfection of the system', '€300 – €800'],
            ['Flushing on every visit', 'part of key holding'],
          ],
          note: 'Guide prices excluding VAT.',
        },
      },
    ],
    faq: [
      { q: 'Can I catch legionella from my pool?', a: 'With the right level of chlorine or salt, the risk from a pool is low. A pool left for months without maintenance can cause other problems, such as algae. A hot tub or spa bath is a bigger risk, because the water is warm and becomes spray.' },
      { q: 'What are the symptoms of legionella?', a: 'Legionella can cause pneumonia (Legionnaires’ disease) with fever, cough and muscle pain, two to ten days after infection. If you have these symptoms after a stay, see a doctor and say where you have been.' },
      { q: 'Does the Spanish legionella law apply to my home?', a: 'The Spanish rules on legionella prevention (Real Decreto 487/2022) mainly apply to higher-risk installations such as hotels, pools open to the public and large water systems. An ordinary home largely falls outside them, but the measures are sensible at home too.' },
    ],
    links: [
      { href: '/en/key-holding/', label: 'Key holding and property checks' },
      { href: '/en/swimming-pool/', label: 'Swimming pools: building and maintenance' },
      { href: '/en/guides/wintering-in-spain/', label: 'Guide: wintering in Spain' },
    ],
    related: ['costs:zwembad', 'problems:inbraak', 'problems:vocht'],
    sources: [
      { name: 'Real Decreto 487/2022, health requirements for legionella prevention', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2022-10297' },
      { name: 'Ministerio de Sanidad, legionellosis', url: 'https://www.sanidad.gob.es/areas/sanidadAmbiental/calidadAguas/legionelosis/home.htm' },
      { name: 'NHS, Legionnaires’ disease', url: 'https://www.nhs.uk/conditions/legionnaires-disease/' },
    ],
    ctaTitle: 'A safe home on arrival?',
    ctaText: 'We flush the pipes, check the water heater and clean the tank and hot tub, so everything is ready when you arrive.',
    minutes: 5,
    published: '2026-11-05',
  },
  {
    key: 'inbraak',
    slug: 'burglary-and-squatters',
    title: 'Preventing burglary and squatters in an empty home in Spain',
    seoTitle: 'Protect your holiday home in Spain from burglary and squatters (okupas)',
    short: 'Burglary and squatters',
    description: 'How do you protect your holiday home in the Axarquía from burglary and squatters (okupas)? What works, what it costs, what to do after a break-in and how fast squatters can be removed.',
    lead: 'A house that stands empty for months stands out: closed shutters, an overflowing letterbox, no lights. In the Axarquía the risk is lower than in big cities, but it happens. Here is how to reduce the risk and what to do.',
    keyword: 'holiday home security spain',
    dienst: 'sleutelbeheer',
    onderwerp: 'I would like to make my home more secure and have it checked while I am away.',
    answer: 'The best protection is a house that <strong>does not look empty</strong> and where <strong>someone can be on site fast</strong> if something happens. Combine a monitored alarm (€30 – €50 a month), good locks or a security door and regular checks by a key holder. If you discover squatters within a few days, call the Guardia Civil or Policía Local at once.',
    sections: [
      {
        id: 'measures',
        h: 'What works, and what it costs',
        table: {
          head: ['Measure', 'Guide price'],
          rows: [
            ['Alarm with monitoring centre and cameras (subscription)', '€30 – €50 a month'],
            ['Security door (puerta acorazada or blindada)', '€1,000 – €2,500'],
            ['Anti-snap cylinders for existing doors', '€100 – €250 per door'],
            ['Window grilles (rejas) on the ground floor', '€150 – €400 per window'],
            ['Timers, smart lights and motion-sensor lighting', '€100 – €500'],
            ['Regular checks by a key holder, with photos', 'see key holding'],
          ],
          note: 'Guide prices including installation, excluding VAT.',
        },
      },
      {
        id: 'not-empty',
        h: 'Make sure the house does not look empty',
        html: `<ul>
<li>Have the letterbox emptied and leaflets removed.</li>
<li>Keep the garden and pool maintained. An overgrown garden shows nobody is there.</li>
<li>Use timers or smart lights, and have shutters opened and closed now and then.</li>
<li>Tell your neighbours who will be calling, and give them a phone number.</li>
<li>Do not post on social media that you are leaving.</li>
</ul>
<p>With <a href="/en/key-holding/">key holding</a> someone calls at set times to take care of all this, and goes straight round after an alarm or a storm.</p>`,
      },
      {
        id: 'squatters',
        h: 'Squatters (okupas): what does the law say?',
        html: '<p>A furnished second home or holiday home counts as a dwelling (<em>morada</em>) in Spain. Entering it without permission is the offence of <em>allanamiento de morada</em>. If you discover and report it quickly, the police can act immediately. The longer squatters stay, the harder it gets and the more often a court is needed. In addition, since 2018 a private owner can apply for eviction through a fast-track civil procedure (Ley 5/2018). Discovering it quickly is what matters most.</p>',
      },
      {
        id: 'after',
        h: 'What to do after a break-in',
        html: `<ol>
<li>Do not go in if you think someone may still be inside. Call 112 or the Guardia Civil (062).</li>
<li>Report it (<em>denuncia</em>) to the Guardia Civil or Policía Nacional. Part of this can be done online. You need the report for your insurer.</li>
<li>Photograph the damage and list what is missing.</li>
<li>Have locks and windows repaired at once, so the house is secure again.</li>
<li>Report the damage to your insurer.</li>
</ol>`,
      },
    ],
    faq: [
      { q: 'How common are burglaries in the Axarquía?', a: 'Less common than in big cities and busy resorts, but holiday homes that stand empty for long periods are a known target. Especially in the winter months and on remote fincas.' },
      { q: 'Will insurance pay out for a break-in at an empty house?', a: 'Many policies set conditions, such as minimum lock standards or a maximum number of days unoccupied. Read the terms (often under “deshabitación”) carefully and tell your insurer it is a second home.' },
      { q: 'Can I remove squatters myself?', a: 'No. Never do it yourself: you could commit an offence. Call the police and instruct a lawyer. The sooner you report it, the sooner it is resolved.' },
    ],
    links: [
      { href: '/en/key-holding/', label: 'Key holding and property checks' },
      { href: '/en/guides/wintering-in-spain/', label: 'Guide: wintering in Spain' },
      { href: '/en/maintenance/', label: 'Maintenance and repairs' },
    ],
    related: ['problems:legionella', 'problems:daklekkage', 'costs:buitenkeuken'],
    sources: [
      { name: 'Código Penal, art. 202 (allanamiento de morada) and art. 245 (usurpación)', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1995-25444' },
      { name: 'Ley 5/2018, fast-track eviction for occupied homes', url: 'https://www.boe.es/buscar/doc.php?id=BOE-A-2018-8575' },
      { name: 'Guardia Civil, reporting a crime (denuncia)', url: 'https://www.guardiacivil.es/' },
    ],
    ctaTitle: 'Your home in good hands while you are away',
    ctaText: 'Regular checks, photos and someone on site fast after an alarm. Ask about the options.',
    minutes: 6,
    published: '2026-11-05',
  },
];
