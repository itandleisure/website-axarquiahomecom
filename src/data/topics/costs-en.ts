import type { Topic } from './types';

// Cost pages in English. Figures: guide prices for the Axarquía, incl. materials and labour, excl. VAT.
export const costsEn: Topic[] = [
  {
    key: 'badkamer',
    slug: 'bathroom-renovation',
    title: 'How much does a bathroom renovation cost in Spain?',
    seoTitle: 'Bathroom renovation costs in Spain: Axarquía prices (2026)',
    short: 'Bathroom',
    description: 'What does a new bathroom cost in the Axarquía? Prices for a refresh, a full renovation and a walk-in shower, plus what drives the price and what to watch for.',
    lead: 'A new bathroom is the job we do most often in the Axarquía. Here is what it costs, from new sanitaryware only to a complete bathroom with a walk-in shower.',
    keyword: 'bathroom renovation cost spain',
    dienst: 'badkamer-keuken',
    onderwerp: 'I would like a quote for renovating my bathroom.',
    answer: 'A complete bathroom of 4 to 6 m² usually costs <strong>€6,000 to €12,000</strong> in the Axarquía excluding VAT, including stripping out, pipework, tiling and sanitaryware. Just replacing the suite and taps starts at about €2,500. A large bathroom with bespoke finishes can reach €18,000 – €25,000.',
    sections: [
      {
        id: 'prices',
        h: 'Prices by type of bathroom renovation',
        html: '<p>Guide prices for 2026, including materials and labour, excluding VAT.</p>',
        table: {
          head: ['Job', 'What it includes', 'Guide price'],
          rows: [
            ['Refresh', 'New toilet, basin and taps, sealant, painting. Tiles stay.', '€2,500 – €5,000'],
            ['Bath out, walk-in shower in', 'Remove bath, level-access shower tray, glass screen, tiling in the shower area', '€3,000 – €6,000'],
            ['Full renovation, small bathroom (4–6 m²)', 'Everything out, new pipes and drains, floor and wall tiles, mid-range sanitaryware', '€6,000 – €12,000'],
            ['Full renovation, large bathroom', 'Larger area, double basin, concealed taps, better tiles', '€12,000 – €18,000'],
            ['Luxury or bespoke', 'Natural stone or microcement, made-to-measure units, underfloor heating', '€18,000 – €25,000+'],
          ],
          note: 'Adding an extra bathroom (new drains, possibly a permit) usually starts at around €10,000.',
        },
      },
      {
        id: 'factors',
        h: 'What drives the price?',
        html: `<ul>
<li><strong>Pipes and drains.</strong> Older village houses often still have lead or iron pipes and narrow waste pipes. In a full renovation you replace them at the same time. It costs more but prevents leaks later.</li>
<li><strong>Damp behind the tiles.</strong> Stripping out regularly reveals damp or a rotten subfloor. Keep a 10% contingency.</li>
<li><strong>Tiles and sanitaryware.</strong> Spanish tiles and sanitaryware are good and affordable. Large formats, microcement or northern European brands cost more, in labour too.</li>
<li><strong>Access.</strong> In a narrow street in Frigiliana or Cómpeta, all the rubble goes out by hand or in a small dumper. That adds up.</li>
<li><strong>Hot water.</strong> An old electric water heater is worth replacing at the same time, for example with a heat pump cylinder.</li>
</ul>`,
      },
      {
        id: 'example',
        h: 'Worked example: bathroom in a village house',
        html: '<p>A 5 m² bathroom on the first floor of a village house in Torrox. The bath comes out for a 90 × 120 cm walk-in shower, pipes and drains are renewed, the floor and walls are tiled with Spanish tiles, and there is a new toilet and vanity unit.</p>',
        table: {
          head: ['Item', 'Guide price'],
          rows: [
            ['Strip-out and rubble removal', '€800 – €1,200'],
            ['Pipes, drains and electrics', '€1,500 – €2,500'],
            ['Floor and wall tiling (± 25 m²)', '€2,000 – €3,000'],
            ['Sanitaryware, taps, shower screen, vanity unit', '€2,000 – €3,500'],
            ['Finishing, painting, sealant', '€400 – €800'],
            ['<strong>Total</strong>', '<strong>€6,700 – €11,000</strong>'],
          ],
        },
        after: '<p>Duration: two to three weeks. For a bathroom renovation without structural changes, most councils only require a notification (<em>declaración responsable</em>).</p>',
      },
      {
        id: 'vat',
        h: 'VAT, permits and payment',
        html: '<p>Renovation work on a private home can qualify for the reduced VAT rate of 10% instead of 21%, provided materials make up no more than 40% of the total. Ask for a quote broken down by item and pay in stages as each part is finished. More in our guide to <a href="/en/guides/renovation-costs-spain/">renovation costs in Spain</a>.</p>',
      },
      {
        id: 'maatwerk',
        h: 'Bespoke bathroom',
        html: `<p>Small or crooked bathrooms, sloping roofs and alcoves in thick walls: in the Axarquía a standard bathroom rarely fits exactly. A <strong>bespoke bathroom</strong> makes use of every centimetre: a vanity unit that fits the alcove exactly, a full-width walk-in shower without a step, shelves built into the wall and seamless walls in microcement or large tiles.</p>
<ul>
<li><strong>Price:</strong> a bespoke bathroom of 4 to 6 m² usually costs €12,000 to €25,000, excluding VAT.</li>
<li><strong>Popular:</strong> microcement, natural stone, a walk-in shower, a floating vanity and underfloor heating for winter.</li>
<li><strong>Lead time:</strong> three to five weeks, longer if furniture or stone is made to measure.</li>
</ul>`,
      },
    ],
    faq: [
      { q: 'How long does a new bathroom take?', a: 'A complete bathroom of average size usually takes two to three weeks. A little longer for bespoke work or when tiles or furniture have to be ordered.' },
      { q: 'Can it be done while I am in the UK?', a: 'Yes. You choose tiles and sanitaryware in advance from photos or a showroom visit, and you receive weekly photos while the work is under way.' },
      { q: 'Is a walk-in shower more expensive than a bath?', a: 'Not necessarily. A level-access shower does need a proper fall and a waterproof membrane under the tiles, and that work has to be done well. That makes it slightly more expensive than a standard shower tray.' },
    ],
    links: [
      { href: '/en/renovation/', label: 'Renovation and building work' },
      { href: '/en/guides/renovation-costs-spain/', label: 'Guide: how much does it cost to renovate a house in Spain?' },
      { href: '/en/problems/damp-and-mould/', label: 'Damp and mould in your home' },
    ],
    related: ['costs:keuken', 'costs:dak', 'problems:vocht'],
    sources: [
      { name: 'Habitissimo, bathroom renovation price guide (reformar baño)', url: 'https://www.habitissimo.es/presupuestos/reformar-bano' },
      { name: 'Cronoshare, bathroom renovation prices in Vélez-Málaga', url: 'https://www.cronoshare.com/servicios/presupuesto-reforma-integral-bano/malaga/velez-malaga' },
      { name: 'El Español, “renovating a bathroom now costs over €7,000” (May 2026)', url: 'https://www.elespanol.com/mujer/interiorismo/20260514/expertos-coinciden-reformar-bano-costaba-euros-ahora-supera-espana/1003744232504_0.amp.html' },
      { name: 'Ley 37/1992 del IVA, art. 91: reduced VAT rate for renovation', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1992-28740' },
    ],
    ctaTitle: 'A price for your bathroom?',
    ctaText: 'Send a few photos and the measurements. You will get a quote broken down by item.',
    minutes: 5,
    published: '2026-11-05',
  },
  {
    key: 'keuken',
    slug: 'kitchen-renovation',
    title: 'How much does a new kitchen cost in Spain?',
    seoTitle: 'New kitchen costs in Spain: Axarquía prices (2026)',
    short: 'Kitchen',
    description: 'What does a new kitchen cost in the Axarquía? Prices for new doors, a complete kitchen and a bespoke kitchen with an island, plus worktops and appliances.',
    lead: 'Many homes in the Axarquía still have a 1990s kitchen with tiles up to the ceiling. A new kitchen transforms the house. This is what the bill looks like.',
    keyword: 'new kitchen cost spain',
    dienst: 'badkamer-keuken',
    onderwerp: 'I would like a quote for a new kitchen.',
    answer: 'A complete new kitchen of 8 to 10 m² usually costs <strong>€8,000 to €15,000</strong> in the Axarquía excluding VAT, including strip-out, services, units, worktop and tiling. Appliances often come on top. Just replacing doors and worktop starts at about €3,000; a bespoke kitchen with an island can reach €30,000.',
    sections: [
      {
        id: 'prices',
        h: 'Prices by type of kitchen renovation',
        table: {
          head: ['Job', 'What it includes', 'Guide price'],
          rows: [
            ['Refresh', 'New doors, handles and worktop on the existing carcasses', '€3,000 – €6,000'],
            ['Complete kitchen, mid-range', 'Strip-out, new pipes and electrics, units, worktop, wall tiles', '€8,000 – €15,000'],
            ['Larger kitchen or higher spec', 'More units, quartz or ceramic worktop, better hardware', '€15,000 – €22,000'],
            ['Bespoke with island', 'Island with drainage and power in the floor, open-plan, wall removed', '€22,000 – €30,000+'],
            ['Appliances (separate)', 'Oven, hob, extractor, dishwasher, fridge', '€2,000 – €6,000'],
          ],
          note: 'Removing a load-bearing wall for an open-plan kitchen needs calculations by an architect or structural engineer and usually a permit.',
        },
      },
      {
        id: 'worktops',
        h: 'Worktops: what do most people choose?',
        table: {
          head: ['Worktop', 'Per linear metre (fitted)'],
          rows: [
            ['Laminate', '€100 – €200'],
            ['Granite (Spanish)', '€200 – €400'],
            ['Quartz composite (such as Silestone)', '€300 – €600'],
            ['Sintered ceramic (such as Dekton)', '€400 – €800'],
          ],
        },
        after: '<p>Granite and quartz composite often come from Spain itself (Almería is a major centre for stone), so they are relatively affordable here.</p>',
      },
      {
        id: 'factors',
        h: 'What drives the price?',
        html: `<ul>
<li><strong>Layout.</strong> Keeping the sink and hob in the same place saves on plumbing.</li>
<li><strong>Electrics.</strong> Old kitchens often lack enough circuits to run an induction hob, oven and dishwasher at once. A new consumer unit or a higher supply capacity (<em>potencia contratada</em>) may be needed.</li>
<li><strong>Extraction.</strong> An extractor vented outside works better than recirculation, but needs a hole through the wall or roof.</li>
<li><strong>Floor.</strong> New flooring running through into the living room looks better, but is a bigger job.</li>
</ul>`,
      },
      {
        id: 'planning',
        h: 'Planning and lead times',
        html: '<p>Allow four to six weeks for units and worktop to be delivered (the worktop is templated once the units are in) and one to two weeks of work on site. You will be without a kitchen during the work, so it is best planned for when you are not in Spain.</p>',
      },
      {
        id: 'maatwerk',
        h: 'Bespoke kitchen',
        html: `<p>In an old village house or a finca no wall is straight and no alcove the same size. A standard kitchen then leaves odd gaps and wasted corners. A <strong>bespoke kitchen</strong> is measured and made for your space: units up to the ceiling, a worktop that follows a sloping wall exactly, an island that suits how you cook and room for a large fridge or wine cooler.</p>
<ul>
<li><strong>Price:</strong> a bespoke kitchen of 8 to 10 m² usually costs €12,000 to €30,000, excluding VAT and appliances.</li>
<li><strong>Materials:</strong> solid wood, lacquered fronts, natural stone, ceramic or composite. Choose materials that can handle heat and moisture.</li>
<li><strong>Lead time:</strong> four to eight weeks of production after the design, then one to two weeks to fit.</li>
</ul>`,
      },
    ],
    faq: [
      { q: 'Can I buy a kitchen in the UK or at IKEA and have it fitted?', a: 'Yes. You then only pay for fitting, services and finishing. Note that UK and Spanish connections and sizes sometimes differ. Mention it beforehand and we will take it into account.' },
      { q: 'Do I need a permit for a new kitchen?', a: 'Replacing a kitchen without structural changes usually only needs a notification (declaración responsable) to the council. If a load-bearing wall comes out, a permit with a project is required.' },
      { q: 'What does a new worktop alone cost?', a: 'For an average kitchen with 3 to 4 metres of worktop, budget €1,000 to €2,500 including fitting and cut-outs, depending on the material.' },
    ],
    links: [
      { href: '/en/renovation/', label: 'Renovation and building work' },
      { href: '/en/costs/outdoor-kitchen/', label: 'Outdoor kitchen costs' },
      { href: '/en/guides/renovation-costs-spain/', label: 'Guide: how much does it cost to renovate a house in Spain?' },
    ],
    related: ['costs:badkamer', 'costs:buitenkeuken', 'costs:airco'],
    sources: [
      { name: 'Habitissimo, kitchen renovation price guide (reformar cocina)', url: 'https://www.habitissimo.es/presupuestos/reformar-cocina' },
      { name: 'Cronoshare, how much does a kitchen renovation cost', url: 'https://www.cronoshare.com/blog/?p=1304' },
      { name: 'El Español, “renovating a kitchen now costs over €10,000” (July 2026)', url: 'https://www.elespanol.com/mujer/interiorismo/20260723/arquitecto-reformar-cocina-costaba-euros-ahora-supera-espana/1003744328876_0.html' },
    ],
    ctaTitle: 'A new kitchen?',
    ctaText: 'Send photos and the measurements of your kitchen. You will get a proposal and a price per item.',
    minutes: 5,
    published: '2026-11-05',
  },
  {
    key: 'zwembad',
    slug: 'building-a-swimming-pool',
    title: 'How much does it cost to build a swimming pool in Spain?',
    seoTitle: 'Cost of building a pool in Spain: Axarquía prices (2026)',
    short: 'Swimming pool',
    description: 'What does a pool cost in the Axarquía? Prices for a prefab pool, an 8 × 4 m concrete pool and a pool with terrace, plus permits and running costs.',
    lead: 'A pool belongs with a house in the sun, and it makes a home easier to let and to sell. But on a hillside in the Axarquía it is more than digging a hole. This is what it costs.',
    keyword: 'cost of building a pool in spain',
    dienst: 'zwembad',
    onderwerp: 'I would like a quote for a new swimming pool.',
    answer: 'An 8 × 4 m concrete pool with filtration usually costs <strong>€20,000 to €30,000</strong> in the Axarquía excluding VAT. Complete with terrace, lighting and a salt system, budget <strong>€30,000 to €50,000</strong>. On a slope with retaining walls, €5,000 to €20,000 is often added.',
    sections: [
      {
        id: 'prices',
        h: 'Prices by type of pool',
        table: {
          head: ['Type', 'What it includes', 'Guide price'],
          rows: [
            ['Prefabricated fibreglass (± 7 × 3.5 m)', 'Ready-made shell, excavation, installation, filter', '€15,000 – €25,000'],
            ['Concrete pool 8 × 4 m (gunite)', 'Excavation, sprayed concrete, gresite mosaic, filter and pump', '€20,000 – €30,000'],
            ['Complete pool', 'Concrete pool plus surrounding terrace, lighting, salt chlorination, steps', '€30,000 – €50,000'],
            ['Overflow or infinity edge', 'Extra balance tank, equipment and finishing', '+ €10,000 – €25,000'],
            ['Renovating an existing pool', 'New gresite or coating, new pump and filter, fixing leaks', '€5,000 – €15,000'],
          ],
          note: 'Digging into rock, delivery along a narrow mountain track or retaining walls on a slope can push the price up considerably.',
        },
      },
      {
        id: 'extras',
        h: 'Additional costs',
        table: {
          head: ['Item', 'Guide price'],
          rows: [
            ['Project by an architect or technical engineer', '€1,500 – €3,500'],
            ['Building tax (ICIO) and council permit', 'usually 2% – 4% of the build cost'],
            ['Fence or cover (recommended with children or for letting)', '€1,500 – €5,000'],
            ['Heat pump for pool heating', '€3,000 – €6,000'],
          ],
        },
      },
      {
        id: 'running',
        h: 'What does a pool cost per year?',
        html: '<p>For an 8 × 4 m pool, budget roughly <strong>€1,200 to €2,500 a year</strong>: maintenance by a pool technician (weekly in summer, less in winter), chemicals or salt, electricity for the pump and topping up the water. During droughts, councils may restrict filling pools; check with yours. If you are not in Spain, combine pool care with <a href="/en/key-holding/">key holding</a>.</p>',
      },
      {
        id: 'permit',
        h: 'Permits and land',
        html: '<p>A new pool needs a building permit (<em>licencia de obra</em>) with a project. On rural land (<em>suelo no urbanizable</em>) the rules are stricter, and a home with AFO status often may not be extended at all. Read our guide to <a href="/en/guides/afo-legalisation-andalusia/">AFO and legalisation</a> first, and check what your council asks for, for example the <a href="/en/places/competa/building-permit/">building permit in Cómpeta</a> or <a href="/en/places/nerja/building-permit/">in Nerja</a>.</p>',
      },
    ],
    faq: [
      { q: 'How long does it take to build a pool?', a: 'The work itself takes four to eight weeks. The permit can take from a few weeks to a few months, depending on the council. If you want to swim in summer, start the application in autumn.' },
      { q: 'Prefab or concrete?', a: 'Prefab is quicker and often cheaper, but size and shape are fixed and the shell has to come by road. On a finca with a narrow access track that is sometimes impossible. Concrete can take any shape and fits anywhere.' },
      { q: 'Does a pool add value to my home?', a: 'In the Axarquía many buyers and holiday guests look for a home with a pool. For holiday letting it is almost a requirement. It mainly improves saleability and rental income.' },
    ],
    links: [
      { href: '/en/swimming-pool/', label: 'Swimming pools: building and maintenance' },
      { href: '/en/problems/legionella/', label: 'Legionella in pools, hot tubs and pipes' },
      { href: '/en/diy/building-your-own-swimming-pool/', label: 'Building your own pool: every step' },
      { href: '/en/guides/afo-legalisation-andalusia/', label: 'Guide: AFO status and legalisation' },
    ],
    related: ['costs:buitenkeuken', 'problems:legionella', 'costs:airco'],
    sources: [
      { name: 'Habitissimo, pool construction price guide (construir piscina)', url: 'https://www.habitissimo.es/presupuestos/construir-piscina' },
      { name: 'Cronoshare, how much does it cost to build a pool', url: 'https://www.cronoshare.com/blog/construir-una-piscina/' },
      { name: 'Junta de Andalucía, Ley 7/2021 (LISTA) on land use and building', url: 'https://www.juntadeandalucia.es/boja/2021/233/1' },
    ],
    ctaTitle: 'Planning a pool?',
    ctaText: 'Send photos of the spot and tell us what you have in mind. You will get a first price indication and advice on the permit.',
    minutes: 6,
    published: '2026-11-05',
  },
  {
    key: 'airco',
    slug: 'air-conditioning-and-heat-pumps',
    title: 'How much does air conditioning or a heat pump cost in Spain?',
    seoTitle: 'Air conditioning and heat pump costs in Spain',
    short: 'Air con and heat pumps',
    description: 'What does air conditioning cost in the Axarquía? Prices for split, multi-split and ducted systems, and an air-to-water heat pump (aerotermia).',
    lead: 'In summer you cool, in winter you heat. Homes in the Axarquía are cold in January too. Modern air conditioning does both. Here is what it costs.',
    keyword: 'air conditioning cost spain',
    dienst: 'anders',
    onderwerp: 'I would like a quote for air conditioning or a heat pump.',
    answer: 'One split air conditioner (cooling and heating) for a bedroom or living room costs roughly <strong>€900 to €1,800</strong> installed. Three rooms on a multi-split: <strong>€3,500 to €6,000</strong>. An air-to-water heat pump (aerotermia) for heating and hot water usually costs <strong>€8,000 to €15,000</strong>. Prices excluding VAT.',
    sections: [
      {
        id: 'prices',
        h: 'Prices by system',
        table: {
          head: ['System', 'Suitable for', 'Guide price (installed)'],
          rows: [
            ['Split unit 2.5 – 3.5 kW', 'One room up to ± 30 m²', '€900 – €1,800'],
            ['Multi-split, 1 outdoor and 3 indoor units', 'Apartment or small house', '€3,500 – €6,000'],
            ['Ducted system (conductos)', 'Whole house, hidden in a dropped ceiling', '€6,000 – €12,000'],
            ['Air-to-water heat pump (aerotermia)', 'Heating via radiators or underfloor, plus hot water', '€8,000 – €15,000'],
            ['Aerotermia with new underfloor heating', 'As part of a full renovation', '€12,000 – €20,000'],
            ['Heat pump water heater (hot water only)', 'Replaces the electric water heater', '€2,000 – €4,500'],
          ],
          note: 'Servicing: budget €80 – €150 a year per system for cleaning filters and a check.',
        },
      },
      {
        id: 'choosing',
        h: 'Which system suits your home?',
        html: `<ul>
<li><strong>Apartment on the coast:</strong> split units or a multi-split are usually enough. Check the rules of the owners’ association (<em>comunidad</em>) for outdoor units on the façade.</li>
<li><strong>Village house with thick walls:</strong> stays cool in summer for a long time, but is damp and cold in winter. Air conditioning with heating plus good ventilation helps against damp.</li>
<li><strong>Finca or villa used all year:</strong> a heat pump with underfloor heating is the most comfortable, especially combined with solar panels.</li>
</ul>`,
      },
      {
        id: 'power',
        h: 'Electricity supply and solar panels',
        html: '<p>Many older homes have a low contracted power (<em>potencia contratada</em>), for example 3.45 kW. With air conditioning, an induction hob and a heat pump you often need 5.75 kW or more. You increase it through your electricity supplier, which may require an inspection certificate (<em>boletín eléctrico</em>). With solar panels you generate much of the electricity for daytime cooling on your own roof.</p>',
      },
      {
        id: 'grants',
        h: 'Grants',
        html: '<p>In recent years there have been Spanish and European (Next Generation) grants for heat pumps and energy saving, and some councils give a discount on property tax (IBI) for solar energy. Schemes change often and money sometimes runs out quickly. Ask what is available when you request a quote.</p>',
      },
    ],
    faq: [
      { q: 'Can air conditioning heat as well?', a: 'Yes. Almost all modern split units are heat pumps that both cool and heat. With the mild winters in the Axarquía, that is an economical way to heat.' },
      { q: 'Do I need permission for an outdoor unit?', a: 'Usually not from the council, but in an apartment block you need the comunidad’s consent or must follow its rules. In protected village centres the council may set requirements for visible units on the façade.' },
      { q: 'How much electricity does air conditioning use?', a: 'A modern 3.5 kW split unit uses on average 0.8 to 1.2 kW per hour when cooling. A few hours a day in summer comes to a few tens of euros a month per room.' },
    ],
    links: [
      { href: '/en/guides/heating-and-cooling-spain/', label: 'Guide: heating and cooling compared' },
      { href: '/en/maintenance/', label: 'Maintenance and repairs' },
      { href: '/en/renovation/', label: 'Renovation and building work' },
      { href: '/en/problems/damp-and-mould/', label: 'Damp and mould in your home' },
    ],
    related: ['costs:dak', 'problems:vocht', 'costs:keuken'],
    sources: [
      { name: 'Merca2, the price of aerotermia in 2025', url: 'https://www.merca2.es/2025/08/11/precio-de-la-aerotermia-en-2025-la-climatizacion-eficiente-estabiliza-sus-costes-y-acelera-su-amortizacion-2221769/' },
      { name: 'Autosolar, what does it cost to install aerotermia', url: 'https://autosolar.es/instalacion-aerotermia/cuanto-cuesta-instalar-aerotermia' },
      { name: 'IDAE, grants for energy saving and renewables', url: 'https://www.idae.es/ayudas-y-financiacion' },
    ],
    ctaTitle: 'Cool in summer, warm in winter',
    ctaText: 'Tell us how big your home is and how you use it. You will get advice on the right system and a price.',
    minutes: 5,
    published: '2026-11-05',
  },
  {
    key: 'dak',
    slug: 'roof-and-roof-terrace',
    title: 'How much does it cost to repair a roof or roof terrace in Spain?',
    seoTitle: 'Roof and roof terrace repair costs in Spain: prices per m²',
    short: 'Roof and roof terrace',
    description: 'What does it cost to waterproof a flat roof or roof terrace in the Axarquía? Prices per m² for coatings, membranes, tiled roofs and a complete new roof.',
    lead: 'Most leaks in the Axarquía come from the roof: a flat roof terrace whose waterproofing has worn out, or a tiled roof with slipped tiles. Here is what the bill looks like.',
    keyword: 'roof terrace waterproofing cost spain',
    dienst: 'onderhoud',
    onderwerp: 'I would like a quote for repairing or waterproofing my roof or roof terrace.',
    answer: 'Re-waterproofing a flat roof terrace in the Axarquía costs <strong>€30 to €50 per m²</strong> with a liquid coating, and <strong>€70 to €130 per m²</strong> if the tiles have to come up for a new membrane and new tiles. Relaying a tiled roof costs €60 to €110 per m². Prices excluding VAT.',
    sections: [
      {
        id: 'prices',
        h: 'Prices per m²',
        table: {
          head: ['Job', 'What it includes', 'Per m²'],
          rows: [
            ['Liquid coating on a roof terrace', 'Cleaning, filling cracks, polyurethane or acrylic in several coats', '€30 – €50'],
            ['New membrane and new tiles', 'Old tiles up, falls corrected, bitumen or PVC membrane, new tiles', '€70 – €130'],
            ['Relaying a tiled roof', 'Tiles off, underlay or membrane, tiles back (topped up where needed)', '€60 – €110'],
            ['New roof with insulation', 'New beams or deck, insulation, waterproofing, tiles', '€150 – €300'],
          ],
        },
      },
      {
        id: 'small',
        h: 'Smaller repairs',
        table: {
          head: ['Repair', 'Guide price'],
          rows: [
            ['Tracing and sealing a local leak', '€300 – €1,500'],
            ['Clearing and repairing drains and gutters', '€150 – €600'],
            ['Replacing loose or broken tiles', '€200 – €800'],
            ['Repairing flashing at a chimney or upstand', '€400 – €1,500'],
          ],
          note: 'Scaffolding, a cherry picker or removing rubble in a narrow village street sometimes comes on top.',
        },
      },
      {
        id: 'example',
        h: 'Worked example: a 40 m² roof terrace',
        html: '<p>A 40 m² roof terrace on a village house in Cómpeta leaks every time it rains hard. The tiles are loose and water stands on the surface. A coating is not enough here: the tiles come up, the falls are corrected, a new membrane goes down and then new tiles. Budget <strong>€2,800 to €5,200</strong>, plus rubble removal if needed. For a terrace that is merely porous, without loose tiles, a coating at €1,200 to €2,000 may be enough.</p>',
      },
      {
        id: 'timing',
        h: 'The right time',
        html: '<p>Have the roof checked in September or October, before the autumn storms and the <em>gota fría</em>. That is also when the drains get cleared of leaves and Saharan dust (<em>calima</em>). If you cannot keep an eye on the house yourself, include this in your <a href="/en/key-holding/">key holding</a>.</p>',
      },
    ],
    faq: [
      { q: 'How long does a coating last?', a: 'A good polyurethane coating lasts eight to twelve years with normal use. A membrane under new tiles lasts twenty years or more.' },
      { q: 'Do I need a permit?', a: 'Waterproofing or relaying a roof without changing the structure usually only needs a notification (declaración responsable). A new roof structure needs a permit with a project.' },
      { q: 'Will my insurance pay for the repair?', a: 'Home insurance often pays for the water damage inside, but rarely for repairing a roof that leaks through wear and tear. Check your policy and report damage quickly, with photos.' },
    ],
    links: [
      { href: '/en/problems/roof-leaks/', label: 'Roof leaks: what to do' },
      { href: '/en/diy/repairing-or-replacing-your-roof/', label: 'Repairing your roof yourself' },
      { href: '/en/maintenance/', label: 'Maintenance and repairs' },
      { href: '/en/key-holding/', label: 'Key holding and property checks' },
    ],
    related: ['problems:daklekkage', 'problems:vocht', 'costs:airco'],
    sources: [
      { name: 'CYPE, Generador de Precios (Spanish construction prices, Andalusia)', url: 'https://generadordeprecios.info/' },
      { name: 'Habitissimo, roof terrace waterproofing price guide (impermeabilizar azotea)', url: 'https://www.habitissimo.es/presupuestos/impermeabilizar-azotea' },
      { name: 'AEMET, Spanish met office: gota fría and autumn storms', url: 'https://www.aemet.es/' },
    ],
    ctaTitle: 'Is your roof or roof terrace leaking?',
    ctaText: 'Send photos of the roof and of the spot inside where the water shows. You will get a price quickly.',
    minutes: 5,
    published: '2026-11-05',
  },
  {
    key: 'buitenkeuken',
    slug: 'outdoor-kitchen',
    title: 'How much does an outdoor kitchen cost in Spain?',
    seoTitle: 'Outdoor kitchen costs in Spain: Axarquía prices (2026)',
    short: 'Outdoor kitchen',
    description: 'What does a built-in outdoor kitchen with barbecue cost in the Axarquía? Prices from simple to complete with a roof, water, power and fridge, plus permits.',
    lead: 'In the Axarquía you live outdoors for much of the year. An outdoor kitchen by the pool or on the terrace is a popular project. This is what it costs.',
    keyword: 'outdoor kitchen spain',
    dienst: 'renovatie',
    onderwerp: 'I would like a quote for an outdoor kitchen.',
    answer: 'A simple built outdoor kitchen with barbecue and worktop costs <strong>€2,500 to €5,000</strong> in the Axarquía. With a sink, water, power and fridge, budget <strong>€6,000 to €12,000</strong>. With a roof and premium appliances, <strong>€12,000 to €25,000</strong>. Prices excluding VAT.',
    sections: [
      {
        id: 'prices',
        h: 'Prices by specification',
        table: {
          head: ['Specification', 'What it includes', 'Guide price'],
          rows: [
            ['Simple', 'Built block with charcoal barbecue and tiled or stone worktop', '€2,500 – €5,000'],
            ['Complete', 'Plus sink with water and drainage, sockets, cupboards, fridge', '€6,000 – €12,000'],
            ['Luxury', 'Plus pizza oven or gas grill, natural stone, lighting, roof', '€12,000 – €25,000'],
            ['Pergola or roof (separate)', 'Timber, aluminium or louvred roof', '€3,000 – €10,000'],
          ],
        },
      },
      {
        id: 'factors',
        h: 'What drives the price?',
        html: `<ul>
<li><strong>Water and drainage.</strong> The further from existing pipes, the more it costs. On a finca with a septic tank, drainage has to connect properly.</li>
<li><strong>Materials.</strong> Outdoor kitchens have to cope with sun, salt (on the coast) and rain. Choose 316 stainless steel, natural stone or ceramic, not ordinary timber.</li>
<li><strong>Foundations.</strong> On an existing terrace, or a new base on a slope.</li>
<li><strong>Power.</strong> Outdoor sockets must be waterproof and on their own protected circuit.</li>
</ul>`,
      },
      {
        id: 'permit',
        h: 'Permits',
        html: '<p>A freestanding barbecue or built block usually only needs a notification (<em>declaración responsable</em>). A roof with a solid covering counts as built area in many councils and needs a permit. On rural land and for a home with AFO status it is often not allowed. Check what your council asks for, for example <a href="/en/places/frigiliana/building-permit/">in Frigiliana</a> or <a href="/en/places/torrox/building-permit/">in Torrox</a>, and read the guide to <a href="/en/guides/afo-legalisation-andalusia/">AFO and legalisation</a>.</p>',
      },
    ],
    faq: [
      { q: 'Can I barbecue in summer?', a: 'In Andalusia the high fire-risk season runs from 1 June to 15 October. Barbecues with fire are then banned in and near woodland and natural areas, and strict rules apply on rural plots. In a residential area or at a house on the coast a fixed barbecue is usually allowed. A gas or electric grill is safer and often the best choice for a finca.' },
      { q: 'How long does it take to build?', a: 'A simple outdoor kitchen is built in one to two weeks. With plumbing and a roof, three to four weeks.' },
    ],
    links: [
      { href: '/en/renovation/', label: 'Renovation and building work' },
      { href: '/en/costs/building-a-swimming-pool/', label: 'Swimming pool costs' },
      { href: '/en/costs/kitchen-renovation/', label: 'New kitchen costs' },
    ],
    related: ['costs:zwembad', 'costs:keuken', 'problems:inbraak'],
    sources: [
      { name: 'Habitissimo, price guide for building a barbecue and outdoor kitchen', url: 'https://www.habitissimo.es/presupuestos/construir-barbacoa' },
      { name: 'Junta de Andalucía, INFOCA plan and fire-risk rules', url: 'https://www.juntadeandalucia.es/medioambiente/portal/areas-tematicas/incendios-forestales' },
    ],
    ctaTitle: 'An outdoor kitchen by the pool?',
    ctaText: 'Send a photo of the spot and tell us what you would like. You will get a design proposal and a price.',
    minutes: 4,
    published: '2026-11-05',
  },
  {
    key: 'zonnepanelen',
    slug: 'solar-panels',
    title: 'How much do solar panels cost in Spain?',
    seoTitle: 'Solar panels in Spain: costs and rules (2026)',
    short: 'Solar panels',
    description: 'What do solar panels cost in the Axarquía? Prices for 3 to 8 kWp, a home battery and an off-grid finca, plus permits, grants and payback time.',
    lead: 'The Axarquía gets more than 300 sunny days a year. Solar panels here produce around one and a half times as much as in the UK or Germany. This is what it costs, including when you only spend part of the year in Spain.',
    keyword: 'solar panels spain cost',
    dienst: 'energie',
    onderwerp: 'I would like a price for solar panels on my house.',
    answer: 'A 4 to 5 kWp system (10 to 12 panels) for a family home usually costs <strong>€4,500 to €7,000</strong> in the Axarquía, excluding VAT, including inverter, mounting and registration. A 5 kWh home battery adds <strong>€3,000 to €5,000</strong>. A finca with no grid connection needs a larger system with batteries: <strong>€10,000 to €18,000</strong>.',
    sections: [
      {
        id: 'prijzen',
        h: 'Prices by system',
        html: '<p>Guide prices for 2026, including panels, inverter, mounting, cabling, installation and registration, excluding VAT.</p>',
        table: {
          head: ['System', 'Suits', 'Guide price'],
          rows: [
            ['3 kWp, 7 – 8 panels', 'Apartment with its own roof or a small house, mostly daytime use', '€3,500 – €5,000'],
            ['4 – 5 kWp, 10 – 12 panels', 'Family home with air con and an induction hob', '€4,500 – €7,000'],
            ['6 – 8 kWp, 14 – 20 panels', 'Villa with a pool pump, heat pump or EV charger', '€6,500 – €10,000'],
            ['Home battery 5 kWh', 'Use daytime power in the evening', '+ €3,000 – €5,000'],
            ['Home battery 10 kWh', 'High use or a lot of evening use', '+ €5,500 – €9,000'],
            ['Solar water heater (termosifón), 150 – 300 litres', 'Hot water only', '€1,500 – €3,500'],
            ['Off-grid finca (aislada), 3 – 5 kWp with 10 – 15 kWh battery', 'Rural house without a grid connection', '€10,000 – €18,000'],
          ],
          note: 'Ground-mounted panels or a solar carport add €500 – €2,000 for the frame and foundations.',
        },
      },
      {
        id: 'factoren',
        h: 'What affects the price?',
        html: `<ul>
<li><strong>The roof.</strong> A flat roof terrace is easy. An old tiled roof sometimes needs checking or repairing first, or it will leak after drilling. Do both at once: see <a href="/en/costs/roof-and-roof-terrace/">the cost of a roof or roof terrace</a>.</li>
<li><strong>The wiring.</strong> An old installation without earthing or with a small consumer unit has to be sorted first. See <a href="/en/costs/electrical-rewiring/">what rewiring costs</a>.</li>
<li><strong>Access.</strong> Carrying panels up a narrow street in Frigiliana or Cómpeta takes longer than at a villa with a driveway.</li>
<li><strong>Battery or not.</strong> A battery nearly doubles the price. It pays off mainly if you live there all year or use a lot of power in the evening.</li>
<li><strong>Protected village centres.</strong> In some historic centres the town hall sets rules for visible panels.</li>
</ul>`,
      },
      {
        id: 'afwezig',
        h: 'Are solar panels worth it if you are only in Spain part of the year?',
        html: '<p>Yes, but it works differently from the UK. Power you do not use goes to the grid. In Spain you get a credit for it on your electricity bill through <em>compensación simplificada</em>, but it is lower than what you pay for power and the bill can never go below zero. A few tips:</p><ul><li>Choose a smaller system that matches what the house uses while you are away: fridge, pool pump, alarm, dehumidifier.</li><li>Ask your supplier about a virtual battery (<em>batería virtual</em>): it saves the credit for the months you are there.</li><li>If you rent the house out, guests use the power in summer and the system pays for itself faster.</li></ul>',
      },
      {
        id: 'terugverdienen',
        h: 'Worked example and payback',
        html: '<p>A villa in Torrox used all year, with air con, an induction hob and a pool pump. Consumption about 7,000 kWh a year.</p>',
        table: {
          head: ['Item', 'Guide figure'],
          rows: [
            ['5 kWp, 12 panels, hybrid inverter', '€6,000'],
            ['Yield per year in the Axarquía', 'approx. 8,000 kWh'],
            ['Self-consumed (approx. 50%) at €0.18 per kWh', 'approx. €720 a year'],
            ['Credit for exported power at €0.06 per kWh', 'approx. €240 a year'],
            ['<strong>Saving per year</strong>', '<strong>approx. €960</strong>'],
            ['<strong>Payback</strong>', '<strong>6 to 7 years</strong>'],
          ],
          note: 'Panels last 25 to 30 years. The inverter usually needs replacing after 10 to 15 years (€800 – €1,500).',
        },
      },
      {
        id: 'regels',
        h: 'Permits, registration and grants',
        html: `<ul>
<li><strong>Permit.</strong> Panels on the roof of an existing, legal home in Andalusia usually only need a simple notification (<em>declaración responsable</em>) to the town hall. Ground-mounted panels, a rural finca or a house with AFO status can need more. See the <em>Building permit</em> page of your municipality under <a href="/en/places/">Places</a>.</li>
<li><strong>Registration.</strong> The installer registers the system with the Junta de Andalucía and provides the electrical certificate (<em>boletín</em>). You then ask your supplier for the export credit.</li>
<li><strong>Tax discounts.</strong> Many town halls give a few years’ discount on property tax (<em>bonificación del IBI</em>) and on building tax (ICIO) for solar panels. The amount varies by municipality.</li>
<li><strong>Grants.</strong> Spanish and EU grants for self-consumption change often and sometimes run out quickly. For what is available in 2026, see <a href="/en/guides/energy-efficiency-grants-spain/">energy efficiency grants in Spain</a>.</li>
</ul>`,
      },
      {
        id: 'slim',
        h: 'Tip: smart energy management',
        html: '<p>Let your panels, battery, EV charger, water heater and pool pump work together. With <a href="/en/costs/smart-energy-management/">smart energy management</a> they run automatically when the sun shines or power is cheap. With a variable tariff that often saves an extra €150 to €400 a year, and you follow everything on your phone.</p>',
      },
    ],
    faq: [
      { q: 'How many panels do I need?', a: 'As a rule of thumb, about 0.7 kWp, so two panels, per 1,000 kWh of annual use. A house using 5,000 kWh needs 3.5 to 4 kWp, about 9 to 10 panels.' },
      { q: 'Does it work during a power cut?', a: 'A standard system switches off during a power cut, for the safety of engineers on the grid. If you want power during an outage, you need a hybrid inverter with a battery and a backup function.' },
      { q: 'Who cleans the panels?', a: 'Dust and Saharan sand (calima) reduce output. Rinsing them two or three times a year is enough. That can be part of maintenance or key holding.' },
      { q: 'Can I combine solar panels with a heat pump or air con?', a: 'Yes, that is the best combination. Air con and heat pumps run mostly during summer days, exactly when the panels produce most.' },
    ],
    links: [
      { href: '/en/renovation/', label: 'Renovation and building work' },
      { href: '/en/costs/air-conditioning-and-heat-pumps/', label: 'Cost of air con and heat pumps' },
      { href: '/en/guides/off-grid-living-spain/', label: 'Guide: off-grid living in Spain' },
      { href: '/en/guides/virtual-battery-spain/', label: 'Guide: virtual battery and export compensation' },
      { href: '/en/guides/electricity-providers-spain-compared/', label: 'Guide: electricity providers compared' },
    ],
    related: ['costs:thuisbatterij', 'costs:laadpaal', 'costs:energiebeheer'],
    sources: [
      { name: 'Selectra, solar panel prices for a family home (2026)', url: 'https://selectra.es/autoconsumo/instalacion/vivienda-unifamiliar' },
      { name: 'Autosolar, installing solar panels in Málaga', url: 'https://autosolar.es/mi-experiencia-placas-solares/instalacion-placas-solares-malaga' },
      { name: 'Real Decreto 244/2019, self-consumption and export compensation', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2019-5089' },
      { name: 'IDAE, grants for energy saving and renewables', url: 'https://www.idae.es/ayudas-y-financiacion' },
    ],
    ctaTitle: 'A price for solar panels?',
    ctaText: 'Send a photo of your roof and your latest electricity bill. You get a tailored proposal and a price.',
    minutes: 6,
    published: '2026-11-05',
  },
  {
    key: 'elektra',
    slug: 'electrical-rewiring',
    title: 'How much does rewiring a house cost in Spain?',
    seoTitle: 'Rewiring a house in Spain: costs, boletín and more power',
    short: 'Electrics',
    description: 'What does rewiring cost in the Axarquía? Prices for a new consumer unit, earthing, the electrical certificate (boletín) and a higher power supply.',
    lead: 'In many older houses in the Axarquía the electrics have never been renewed: no earthing, a small consumer unit and a supply that trips as soon as the air con and the kettle are on together. This is what it costs to put right.',
    keyword: 'rewiring house spain cost',
    dienst: 'energie',
    onderwerp: 'I would like a price for renewing or extending the electrics.',
    answer: 'Rewiring an apartment or small house (70 – 100 m²) usually costs <strong>€3,500 to €6,500</strong> in the Axarquía, excluding VAT. A village house or villa of 120 – 200 m²: <strong>€6,500 to €12,000</strong>. A new consumer unit alone costs €400 – €1,000 and the electrical certificate (<em>boletín</em>) €100 – €300.',
    sections: [
      {
        id: 'prijzen',
        h: 'Prices by job',
        table: {
          head: ['Job', 'What it includes', 'Guide price'],
          rows: [
            ['Electrical certificate (boletín, CIE)', 'Inspection and certificate by a registered electrician', '€100 – €300'],
            ['New consumer unit (cuadro)', 'Main switch, RCDs, circuits', '€400 – €1,000'],
            ['Earthing (toma de tierra)', 'Earth rod and earth cable to the consumer unit', '€300 – €800'],
            ['Extra circuit, for example for air con or induction', 'New cable from the consumer unit', '€150 – €400 per circuit'],
            ['Full rewire, apartment 70 – 100 m²', 'All cables, switches and sockets new, boletín included', '€3,500 – €6,500'],
            ['Full rewire, house 120 – 200 m²', 'The same, with more circuits and outdoor lighting', '€6,500 – €12,000'],
            ['EV charger', '7 kW wallbox on its own circuit', '€900 – €1,800'],
          ],
          note: 'In a full renovation the rewiring goes along with the demolition and plastering. That is cheaper than chasing walls afterwards.',
        },
      },
      {
        id: 'vermogen',
        h: 'More power (potencia contratada)',
        html: '<p>In Spain you choose how many kilowatts you can use at the same time. Many older houses have 3.45 or 4.6 kW. With air con, induction, a heat pump or a pool pump you often need 5.75 to 9.2 kW. You raise it through your electricity supplier. If the installation is more than twenty years old or a lot changes, the network operator (in the Axarquía usually e-distribución) asks for a new boletín. The operator charges a one-off connection fee of a few tens to a few hundred euros. Note that more power also means a higher fixed charge on your bill.</p>',
      },
      {
        id: 'wanneer',
        h: 'When do the electrics need renewing?',
        html: `<ul>
<li>There is no earthing, or the sockets have no earth pin.</li>
<li>The consumer unit still has fuses, or no RCD.</li>
<li>The power keeps tripping. See <a href="/en/problems/power-keeps-tripping/">what to do when the power keeps tripping</a>.</li>
<li>You see scorched sockets, loose wires or cables with fabric insulation.</li>
<li>You are buying the house, renting it out or putting the supply in your name: then you need a valid boletín.</li>
</ul>`,
      },
      {
        id: 'koop',
        h: 'When buying a house',
        html: '<p>The electrics are one of the things we always check in a <a href="/en/property-survey/">pre-purchase survey</a>. A full rewire can easily cost €5,000 to €10,000. That is a good argument when negotiating the price.</p>',
      },
    ],
    faq: [
      { q: 'What is a boletín eléctrico?', a: 'The Certificado de Instalación Eléctrica (CIE) proves that the electrics meet Spanish regulations. Only a registered electrician can issue it. You need it for a new connection, more power, or to put the contract in your name if the supply has been unused for a long time.' },
      { q: 'How long does rewiring take?', a: 'An apartment usually takes one to two weeks, a larger house two to four weeks. Plastering and painting come after, if they are not part of a wider renovation.' },
      { q: 'Can it be done while I am not in Spain?', a: 'Yes. You agree the position of sockets and lights on a floor plan beforehand, and you receive photos during the work.' },
    ],
    links: [
      { href: '/en/renovation/', label: 'Renovation and building work' },
      { href: '/en/property-survey/', label: 'Pre-purchase survey' },
      { href: '/en/guides/renovation-costs-spain/', label: 'Guide: how much does it cost to renovate a house in Spain?' },
    ],
    related: ['problems:stroom', 'costs:zonnepanelen', 'costs:airco'],
    sources: [
      { name: 'Habitissimo, price guide for rewiring (reformar instalación eléctrica)', url: 'https://www.habitissimo.es/presupuestos/reformar-instalacion-electrica-vivienda-o-local' },
      { name: 'CNMC, the boletín eléctrico: what it is and what it is for', url: 'https://cnmc.es/sites/default/files/editor_contenidos/Energia/Consumidores/3.2%20Bolet%C3%ADn%20el%C3%A9ctrico%2C%20qu%C3%A9%20es%20y%20para%20qu%C3%A9%20sirve.pdf' },
      { name: 'Reglamento Electrotécnico para Baja Tensión (REBT)', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2002-18099' },
    ],
    ctaTitle: 'Electrics in order?',
    ctaText: 'Send a photo of your consumer unit and tell us what you want to connect. You get advice and a price.',
    minutes: 5,
    published: '2026-11-05',
  },
  {
    key: 'thuisbatterij',
    slug: 'home-battery',
    title: 'How much does a home battery cost in Spain?',
    seoTitle: 'Home battery in Spain: costs, payback and backup power',
    short: 'Home battery',
    description: 'What does a home battery for solar panels cost in the Axarquía? Prices for 5, 10 and 15 kWh, backup power in a power cut and when a battery pays off.',
    lead: 'Since the great blackout of April 2025, when all of Spain was without power for hours, many owners have been asking about a home battery. What does it cost, when does it pay off, and what should you watch for in the Spanish climate?',
    keyword: 'home battery spain',
    dienst: 'energie',
    onderwerp: 'I would like a price for a home battery.',
    answer: 'A 5 kWh home battery costs about <strong>€3,000 to €5,000</strong> installed in the Axarquía, a 10 kWh battery <strong>€5,500 to €9,000</strong>, excluding VAT. If you already have solar panels with a standard inverter, you often need a hybrid inverter as well: <strong>€1,000 to €2,000</strong>. With a battery you use 70 to 80% of your solar power yourself, instead of 30 to 50%.',
    sections: [
      {
        id: 'prijzen',
        h: 'Prices by battery',
        html: '<p>Guide prices for 2026 for a lithium iron phosphate battery (LiFePO4), including installation and connection, excluding VAT.</p>',
        table: {
          head: ['Battery', 'Suits', 'Guide price'],
          rows: [
            ['5 kWh', 'Apartment or small house, evening use', '€3,000 – €5,000'],
            ['10 kWh', 'Family home with air con and induction', '€5,500 – €9,000'],
            ['15 kWh', 'Villa, or a house with a heat pump', '€8,000 – €12,000'],
            ['Add a hybrid inverter', 'If you already have panels with a standard inverter', '+ €1,000 – €2,000'],
            ['Backup function', 'Keep power during a grid outage', '+ €300 – €800'],
          ],
          note: 'Installing battery and panels together is cheaper than adding one later. See also the cost of <a href="/en/costs/solar-panels/">solar panels</a>.',
        },
      },
      {
        id: 'loont',
        h: 'When does a home battery pay off?',
        html: `<ul>
<li><strong>You live there all year or most of it.</strong> Then you use the stored power every evening, and the battery pays for itself in 8 to 12 years.</li>
<li><strong>You want power during an outage.</strong> With backup, the fridge, lights, internet, alarm and water pump keep working. In the countryside, where outages are more frequent, that is the main reason.</li>
<li><strong>Your finca has no grid connection.</strong> Then a battery is not a choice but a necessity. Read the guide <a href="/en/guides/off-grid-living-spain/">off-grid living</a>.</li>
<li><strong>You are only there a few weeks a year.</strong> Then a battery rarely pays off financially. A virtual battery from your supplier is cheaper.</li>
</ul>`,
      },
      {
        id: 'plek',
        h: 'Where does the battery go?',
        html: '<p>A battery lasts longer when it stays cool, ideally between 10 and 30 degrees. In the Axarquía that matters: in July a shed or roof terrace in the sun gets far too hot. An indoor space, a cellar or a ventilated plant room on the north side is best. The battery must also be easy to reach for maintenance and not in a damp room.</p>',
      },
      {
        id: 'voorbeeld',
        h: 'Worked example',
        html: '<p>A house in Torre del Mar, lived in all year, with 5 kWp of solar panels and a consumption of 6,000 kWh a year.</p>',
        table: {
          head: ['', 'Without battery', 'With 10 kWh battery'],
          rows: [
            ['Solar power used yourself', 'approx. 2,700 kWh', 'approx. 4,800 kWh'],
            ['Saving on power (€0.18 per kWh)', 'approx. €490', 'approx. €860'],
            ['Export credit (€0.06 per kWh)', 'approx. €320', 'approx. €190'],
            ['<strong>Total saving per year</strong>', '<strong>approx. €810</strong>', '<strong>approx. €1,050</strong>'],
          ],
          note: 'In this example the battery adds about €240 a year. At €7,000 for the battery, it is mainly an investment in security and independence, with a payback close to the battery’s lifespan. If electricity prices rise, it pays back faster.',
        },
      },
      {
        id: 'subsidie',
        h: 'Grants and tax discounts',
        html: '<p>Andalusia and Madrid regularly run grant schemes for batteries with self-consumption, and many town halls give an IBI discount for solar. The schemes change often. Ask what is available when you get your quote.</p>',
      },
      {
        id: 'slim',
        h: 'Tip: smart energy management',
        html: '<p>Let your panels, battery, EV charger, water heater and pool pump work together. With <a href="/en/costs/smart-energy-management/">smart energy management</a> they run automatically when the sun shines or power is cheap. With a variable tariff that often saves an extra €150 to €400 a year, and you follow everything on your phone.</p>',
      },
    ],
    faq: [
      { q: 'How long does a home battery last?', a: 'A lithium iron phosphate battery lasts 6,000 cycles or more, which is 12 to 15 years of daily use. Manufacturers usually give a 10-year warranty.' },
      { q: 'Does the battery work automatically during a power cut?', a: 'Only if the system has a backup function (EPS). Without it, the battery switches off during an outage too. Ask for it explicitly.' },
      { q: 'Can I add a battery to my existing solar panels?', a: 'Yes. With a hybrid inverter or a separate battery inverter that is possible with almost any system. Sometimes the existing inverter is already suitable.' },
      { q: 'Is a home battery safe?', a: 'Lithium iron phosphate is the safest type and is used almost everywhere. Have it installed by a registered installer, with the right protection and in a cool, dry place.' },
    ],
    links: [
      { href: '/en/costs/solar-panels/', label: 'Cost of solar panels' },
      { href: '/en/guides/off-grid-living-spain/', label: 'Guide: off-grid living in Spain' },
      { href: '/en/problems/power-keeps-tripping/', label: 'Power keeps tripping' },
      { href: '/en/guides/virtual-battery-spain/', label: 'Guide: virtual battery and export compensation' },
      { href: '/en/guides/electricity-providers-spain-compared/', label: 'Guide: electricity providers compared' },
    ],
    related: ['costs:zonnepanelen', 'costs:laadpaal', 'costs:energiebeheer'],
    sources: [
      { name: 'Selectra, solar panels with a battery: prices 2026', url: 'https://selectra.es/autoconsumo/instalacion/vivienda-unifamiliar' },
      { name: 'Red Eléctrica, report on the blackout of 28 April 2025', url: 'https://www.ree.es/es/sala-de-prensa' },
      { name: 'IDAE, grants for energy saving and renewables', url: 'https://www.idae.es/ayudas-y-financiacion' },
    ],
    ctaTitle: 'A home battery for your panels?',
    ctaText: 'Send a photo of your inverter or your roof and your latest electricity bill. You get advice on the right battery and a price.',
    minutes: 5,
    published: '2026-11-05',
  },
  {
    key: 'water',
    slug: 'water-tank-and-septic-tank',
    title: 'How much do a water tank, borehole and septic tank cost in Spain?',
    seoTitle: 'Water tank, borehole and septic tank in Spain: costs',
    short: 'Water tank and septic tank',
    description: 'Water and drainage on a finca in the Axarquía: prices for a water tank, cistern (aljibe) repair, borehole, pump and filter, and a septic tank.',
    lead: 'Many fincas in the Axarquía are not on mains water or mains drainage. After the drought of recent years owners want more certainty about their water, and old septic tanks often no longer meet the rules. This is what it costs.',
    keyword: 'water tank finca spain',
    dienst: 'onderhoud',
    onderwerp: 'I would like a price for water or drainage on my finca (water tank, well or septic tank).',
    answer: 'A 10,000 litre plastic water tank costs <strong>€1,500 to €4,000</strong> installed and connected. A pump with pressure vessel <strong>€600 to €1,500</strong>. A new septic tank <strong>€2,500 to €6,000</strong>, a compact treatment plant <strong>€4,000 to €9,000</strong>. A borehole with a permit easily comes to <strong>€10,000 to €30,000</strong>. Prices excluding VAT.',
    sections: [
      {
        id: 'prijzen',
        h: 'Water prices',
        table: {
          head: ['Item', 'What it includes', 'Guide price'],
          rows: [
            ['Plastic water tank 5,000 litres', 'Above ground, on a concrete base, connected', '€900 – €2,000'],
            ['Plastic water tank 10,000 – 20,000 litres', 'Above ground or half buried', '€1,500 – €5,000'],
            ['Repair a built cistern (aljibe)', 'Cleaning, sealing cracks, waterproof coating', '€2,000 – €8,000'],
            ['New underground cistern', 'Concrete, 20 – 40 m³, collecting roof water', '€8,000 – €20,000'],
            ['Pump with pressure vessel', 'Constant pressure in the house', '€600 – €1,500'],
            ['Filter and UV lamp', 'Drinking water from tank or well', '€800 – €2,000'],
            ['Borehole (pozo)', 'Permit, drilling, pump, pipework', '€10,000 – €30,000'],
          ],
          note: 'Drilling usually costs €100 – €200 per metre, and 80 to 150 metres deep is not unusual in the Axarquía. There is no guarantee you will find water.',
        },
      },
      {
        id: 'afvoer',
        h: 'Waste water prices',
        table: {
          head: ['Item', 'What it includes', 'Guide price'],
          rows: [
            ['Emptying a septic tank', 'Tanker, disposal at a licensed plant', '€150 – €300'],
            ['New septic tank (fosa séptica)', '2,000 – 4,000 litres, with soakaway or filter', '€2,500 – €6,000'],
            ['Compact treatment plant (depuradora)', 'Biological treatment, cleaner outflow', '€4,000 – €9,000'],
            ['Connecting to mains drainage', 'If there is a sewer nearby', '€1,500 – €6,000'],
          ],
          note: 'An old brick-built cesspit without a base usually does not meet the rules. The town hall or the Junta can require replacement during a renovation or after a complaint.',
        },
      },
      {
        id: 'regels',
        h: 'Permits and rules',
        html: `<ul>
<li><strong>Borehole:</strong> you need a permit or registration with the Junta de Andalucía water authority. A well without paperwork can cause problems on sale or inspection. For small private abstraction the procedure is simpler.</li>
<li><strong>Waste water:</strong> a septic tank or treatment plant must be watertight and must not pollute ground or river water. Discharging into the ground can need a permit.</li>
<li><strong>When buying:</strong> always have the water source and septic tank included in the <a href="/en/property-survey/">pre-purchase survey</a>.</li>
</ul>`,
      },
    ],
    faq: [
      { q: 'How big should my water tank be?', a: 'Allow 100 to 150 litres per person per day, plus the garden and pool. Two people without a pool use about 1,000 litres a week or more. A 10,000 litre tank then gives a few weeks’ buffer between deliveries.' },
      { q: 'How often does a septic tank need emptying?', a: 'Usually every two to four years, depending on its size and how often the house is used. More often if you rent it out.' },
      { q: 'Is tank water drinkable?', a: 'Only with a good filter and possibly a UV lamp, and if the tank is clean and closed. Have the water tested now and then.' },
    ],
    links: [
      { href: '/en/guides/off-grid-living-spain/', label: 'Guide: off-grid living in Spain' },
      { href: '/en/guides/buying-a-finca-in-spain/', label: 'Guide: buying a finca in Spain' },
      { href: '/en/maintenance/', label: 'Maintenance and repairs' },
    ],
    related: ['problems:waterdruk', 'problems:beerput', 'costs:keermuur'],
    sources: [
      { name: 'CYPE, Generador de Precios (Spanish building prices)', url: 'https://generadordeprecios.info/' },
      { name: 'Junta de Andalucía, water and water rights', url: 'https://www.juntadeandalucia.es/medioambiente/portal/areas-tematicas/agua' },
    ],
    ctaTitle: 'Sorting out water or drainage on your finca?',
    ctaText: 'Tell us how the house gets its water now and where the waste water goes. You get a proposal and a price.',
    minutes: 5,
    published: '2026-11-05',
  },
  {
    key: 'keermuur',
    slug: 'retaining-wall-and-drainage',
    title: 'How much does a retaining wall or drainage cost in Spain?',
    seoTitle: 'Retaining walls and drainage in Spain: costs (2026)',
    short: 'Retaining wall and drainage',
    description: 'Retaining wall, drainage or access track on a finca in the Axarquía? Prices for concrete, natural stone and gabions, and what to do after storm damage.',
    lead: 'Many houses in the Axarquía stand against a slope. A retaining wall that gives way, water running against the house after a storm or a track that washes out: these are big jobs, but good drainage prevents them.',
    keyword: 'retaining wall spain cost',
    dienst: 'onderhoud',
    onderwerp: 'I would like a price for a retaining wall, drainage or the access track.',
    answer: 'A concrete retaining wall 1.5 to 2 metres high usually costs <strong>€400 to €1,200 per linear metre</strong> in the Axarquía, including foundations and drainage. A natural stone wall <strong>€150 to €350 per m²</strong> of wall face. A drainage channel <strong>€60 to €150 per metre</strong>, a concrete access track <strong>€40 to €70 per m²</strong>. Prices excluding VAT.',
    sections: [
      {
        id: 'prijzen',
        h: 'Prices by job',
        table: {
          head: ['Job', 'What it includes', 'Guide price'],
          rows: [
            ['Concrete retaining wall 1.5 – 2 m', 'Foundations, reinforced concrete, drainage behind', '€400 – €1,200 per m'],
            ['Natural stone wall', 'Mortared or dry-stone, in local style', '€150 – €350 per m²'],
            ['Gabions (gaviones)', 'Steel cages filled with stone, quick and free-draining', '€120 – €250 per m²'],
            ['Rebuilding a collapsed wall', 'Clearing rubble, new foundations, rebuilding', '€2,000 – €10,000+'],
            ['Drainage behind a wall or along the house', 'Drain pipe, gravel, filter fabric', '€40 – €80 per m'],
            ['Drainage channel (canaleta)', 'Channel with grating across terrace or drive', '€60 – €150 per m'],
            ['Concrete access track', 'Groundwork, reinforcement, textured concrete', '€40 – €70 per m²'],
          ],
          note: 'For a retaining wall over about 1.5 metres, or one next to a house, the town hall usually requires a building permit with calculations by an architect or engineer.',
        },
      },
      {
        id: 'waarom',
        h: 'Why retaining walls fail',
        html: `<ul>
<li><strong>No drainage.</strong> Rainwater builds up behind the wall and pushes it over. This is by far the most common cause.</li>
<li><strong>Foundations too light</strong> or a wall without reinforcement, often built without calculations.</li>
<li><strong>Heavy rain after drought.</strong> An autumn DANA can bring more water in a few hours than the ground can take.</li>
<li><strong>Roots and vegetation</strong> pushing the wall apart.</li>
</ul>
<p>See also <a href="/en/problems/flooding-and-retaining-walls/">what to do about flooding or a cracking retaining wall</a>.</p>`,
      },
      {
        id: 'vergunning',
        h: 'Permits and rural land',
        html: '<p>Strict rules apply on rural land. Repairing an existing wall can usually be done with a notification; a new wall or a new track often needs a permit. On a house with AFO status only work needed for safety and maintenance is allowed. See the <em>Building permit</em> page of your municipality under <a href="/en/places/">Places</a> and the guide <a href="/en/guides/afo-legalisation-andalusia/">AFO and legalisation</a>.</p>',
      },
    ],
    faq: [
      { q: 'Does insurance cover a collapsed retaining wall?', a: 'Sometimes. Many buildings policies cover storm damage but exclude damage from poor maintenance or missing drainage. For exceptional rain the Consorcio de Compensación de Seguros may pay. See the guide on insurance and damage.' },
      { q: 'Can an old stone wall stay?', a: 'Often, if it is still straight and water can get through the joints. Bulging, displaced stones or cracks are signs to have it looked at.' },
      { q: 'When is the best time for this work?', a: 'Spring or summer, when the ground is dry. After a storm it sometimes has to be done straight away to prevent further damage.' },
    ],
    links: [
      { href: '/en/maintenance/', label: 'Maintenance and repairs' },
      { href: '/en/guides/buying-a-finca-in-spain/', label: 'Guide: buying a finca in Spain' },
      { href: '/en/weather/october/', label: 'The weather in October: the first heavy rain' },
    ],
    related: ['problems:wateroverlast', 'costs:water', 'problems:scheuren'],
    sources: [
      { name: 'CYPE, Generador de Precios (Spanish building prices)', url: 'https://generadordeprecios.info/' },
      { name: 'Código Técnico de la Edificación, DB SE-C Cimientos (foundations and retaining walls)', url: 'https://www.codigotecnico.org/' },
    ],
    ctaTitle: 'Need a retaining wall or drainage?',
    ctaText: 'Send photos of the wall or of where the water runs. You get advice and a price.',
    minutes: 5,
    published: '2026-11-05',
  },
  {
    key: 'laadpaal',
    slug: 'ev-charger',
    title: 'What does a home EV charger cost in Spain?',
    seoTitle: 'Home EV charger in Spain: costs, solar charging and rules',
    short: 'EV charger',
    description: 'What does an EV charger (wallbox) cost in the Axarquía? Prices per situation, charging from solar and a home battery, and the rules in an apartment block.',
    lead: 'The cheapest place to charge an electric car is at home, and in the Axarquía ideally with your own solar power. What does a charger cost, what needs doing to your supply, and can it work on a finca without mains power?',
    keyword: 'ev charger spain',
    dienst: 'energie',
    onderwerp: 'I would like a price for an EV charger.',
    answer: 'A 7.4 kW EV charger (wallbox) installed in the Axarquía usually costs <strong>€900 to €1,800</strong> excluding VAT, including its own circuit and protection. If the parking space is far from the meter, such as in the garage of an apartment block, expect <strong>€1,500 to €3,000</strong>. With solar panels you charge almost for free during the day.',
    sections: [
      {
        id: 'prijzen',
        h: 'Prices per situation',
        html: '<p>Indicative 2026 prices, including charger, cable, protection and registration, excluding VAT.</p>',
        table: {
          head: ['Situation', 'Details', 'Indication'],
          rows: [
            ['7.4 kW charger at the house', 'Drive or carport close to the consumer unit', '€900 – €1,800'],
            ['Charger in a parking garage', 'Long cable from your meter, in a block', '€1,500 – €3,000'],
            ['Smart charger for solar', 'Charges on the surplus from your panels', '+ €200 – €500'],
            ['Higher contracted power', 'From 4.6 to 7 kW or more with the grid operator', '€100 – €300 one-off, higher standing charge'],
            ['Extra solar panels for the car', '1.5 to 2 kWp, enough for 10,000 km a year', '€2,000 – €3,500'],
          ],
          note: 'Have the charger fitted together with solar panels or new wiring: it saves on chasing and making good. See the cost of <a href="/en/costs/solar-panels/">solar panels</a> and <a href="/en/costs/electrical-rewiring/">electrical rewiring</a>.',
        },
      },
      {
        id: 'leverancier',
        h: 'Charger through your energy supplier',
        html: `<p>Many Spanish energy suppliers sell an EV charger as a package, often at a fixed price or in monthly instalments with your electricity contract. Check what the standard installation includes:</p>
<ul>
<li><strong>A limited length of cable</strong>, often 15 to 20 metres between the consumer unit and the charger. Every extra metre costs more, often €20 to €40 a metre.</li>
<li><strong>Extra work</strong> such as trenching, drilling through walls, a separate meter in a parking garage or higher contracted power is charged separately.</li>
<li><strong>A contract</strong>: sometimes you are tied to the supplier for one or two years, or the low price only applies with their tariff.</li>
</ul>
<p>If the car is parked far from the consumer unit, as on a finca or in an apartment block, the package often costs more than expected. Then also get a quote from an independent installer and compare the total price.</p>`,
      },
      {
        id: 'zon',
        h: 'Charging from solar panels and a home battery',
        html: `<p>An average electric car uses 15 to 18 kWh per 100 km. At 10,000 km a year that is about 1,500 to 1,800 kWh. In the Axarquía 1 kWp of panels produces about 1,600 kWh a year, so 1 to 2 extra kWp covers most of it.</p>
<ul>
<li><strong>Charge during the day.</strong> A smart charger adjusts its speed to whatever the panels have spare. If you work from home or are retired, you can charge almost entirely on sunshine.</li>
<li><strong>Avoid charging from the home battery.</strong> A 60 kWh car battery is far bigger than a 10 kWh home battery. Set the charger so it does not drain the home battery, so you still have power in the evening.</li>
<li><strong>Cheap grid power at night.</strong> With a tariff that has a cheap night period, you charge outside sunny hours for a fraction of the daytime price.</li>
</ul>`,
      },
      {
        id: 'offgrid',
        h: 'Charging on a finca without mains power',
        html: `<p>Off-grid charging is possible, but needs a larger system. The car then mainly charges on sunny afternoons, at a lower rate of 2 to 3.7 kW, so the inverter can still run the rest of the house.</p>
<ul>
<li>Allow for <strong>2 to 3 kWp of extra panels</strong> for the car, because you produce less in winter and have no grid as a fallback.</li>
<li>Choose an <strong>inverter with enough capacity</strong> for the charger plus the water pump and air con at the same time.</li>
<li>Set the charger to <strong>charge only on surplus</strong>, so the home battery is full for the night.</li>
</ul>
<p>Read more in the guide <a href="/en/guides/off-grid-living-spain/">off-grid living in Spain</a>.</p>`,
      },
      {
        id: 'regels',
        h: 'Rules and registration',
        html: `<ul>
<li><strong>Authorised installer:</strong> a charging point falls under the Spanish wiring regulations (ITC-BT-52). An authorised installer fits it and registers it with the Junta.</li>
<li><strong>In an apartment block:</strong> you do not need permission from the owners’ association (<em>comunidad</em>) for a charger in your own parking space. You notify them in writing beforehand, and pay for the installation and the power yourself.</li>
<li><strong>Power:</strong> many homes have 4.6 or 5.75 kW. With a charger, 7 kW or more is comfortable, or use a charger with dynamic load balancing that backs off when the oven goes on.</li>
<li><strong>Grants:</strong> there are regular national schemes for charging points and an income tax (IRPF) deduction. Conditions change; ask what is available when you get a quote.</li>
</ul>`,
      },
      {
        id: 'slim',
        h: 'Tip: smart energy management',
        html: '<p>Let your panels, battery, EV charger, water heater and pool pump work together. With <a href="/en/costs/smart-energy-management/">smart energy management</a> they run automatically when the sun shines or power is cheap. With a variable tariff that often saves an extra €150 to €400 a year, and you follow everything on your phone.</p>',
      },
    ],
    faq: [
      { q: 'Can I not just charge from a normal socket?', a: 'Now and then, yes, but a normal socket is not made for hours at 2.3 kW. It gets hot and charges slowly: 10 to 12 km per hour. A charger is safer and three times as fast.' },
      { q: 'What does a full charge at home cost?', a: 'Charging a 60 kWh battery at €0.18 per kWh costs about €11, often half that in the night period, and almost nothing on your own solar panels.' },
      { q: 'Do I need to increase my contracted power?', a: 'Usually 7 kW or more is advisable. With a smart charger that backs off when you use a lot of other appliances, your current power can sometimes do.' },
      { q: 'Can I drive electric off-grid?', a: 'Yes, with enough extra panels and an inverter that can cope. You then mainly charge on sunny afternoons. For long winter weeks a rapid charger on the road is a useful backup.' },
    ],
    links: [
      { href: '/en/costs/solar-panels/', label: 'Cost of solar panels' },
      { href: '/en/costs/home-battery/', label: 'Cost of a home battery' },
      { href: '/en/guides/off-grid-living-spain/', label: 'Guide: off-grid living in Spain' },
      { href: '/en/guides/electricity-providers-spain-compared/#charger', label: 'Guide: EV chargers from energy suppliers' },
    ],
    related: ['costs:zonnepanelen', 'costs:thuisbatterij', 'costs:energiebeheer'],
    sources: [
      { name: 'BOE, Ley de Propiedad Horizontal, article 17.5 (charging points in a comunidad)', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-1960-10906' },
      { name: 'BOE, ITC-BT-52, installations for charging electric vehicles', url: 'https://www.boe.es/buscar/doc.php?id=BOE-A-2014-13681' },
      { name: 'IDAE, grants for electric mobility', url: 'https://www.idae.es/ayudas-y-financiacion' },
    ],
    ctaTitle: 'An EV charger at your house?',
    ctaText: 'Send a photo of your consumer unit and where the car is parked. You get advice and a price, also combined with solar panels.',
    minutes: 5,
    published: '2026-11-05',
  },
  {
    key: 'energiebeheer',
    slug: 'smart-energy-management',
    title: 'Smart energy management: a lower energy bill, automatically',
    seoTitle: 'Smart energy management in Spain: solar and battery',
    short: 'Smart energy management',
    description: 'With smart energy management your house in Spain runs its solar panels, home battery, EV charger, water heater and pool pump by itself.',
    lead: 'Solar panels, a home battery and an EV charger pay off most when they work together. With smart energy management your house handles that by itself: appliances run when the sun shines or power is cheap, and you see everything on your phone, even when you are not in Spain.',
    keyword: 'smart energy management',
    dienst: 'energiebeheer',
    onderwerp: 'I would like advice on smart energy management.',
    answer: 'Smart energy management usually costs a one-off <strong>€400 to €1,500</strong>, depending on how many devices you connect. With solar panels, a battery and a variable tariff it often saves an extra <strong>€150 to €400 a year</strong>, on top of what the panels already save.',
    sections: [
      {
        id: 'wat',
        h: 'What does smart energy management do?',
        html: `<p>A small box in your consumer unit connects everything that generates, stores or uses a lot of power. The system looks at the sun, the electricity price and the battery level, and decides every quarter of an hour what happens:</p>
<ul>
<li>The <strong>water heater and pool pump</strong> run around midday, on your own solar power.</li>
<li>The <strong>car</strong> charges on the surplus from the panels, or at night in the cheapest hours.</li>
<li>The <strong>home battery</strong> tops up in cheap hours and supplies power in the expensive evening hours.</li>
<li>The <strong>air con</strong> pre-cools the house on solar power before you get home.</li>
<li>You get an <strong>alert</strong> for a power cut, an empty battery, a low water tank or a leak, even when you are back in the UK.</li>
</ul>
<p>We work with open systems such as Home Assistant, which work with almost every brand of inverter, battery and charger. So you are not tied to one manufacturer or a supplier’s app.</p>`,
      },
      {
        id: 'contract',
        h: 'Fixed or variable electricity tariff?',
        html: `<p>In Spain you broadly choose between two kinds of contract:</p>
<ul>
<li><strong>Fixed price</strong> on the free market (<em>mercado libre</em>): the same price per kWh every hour, or a fixed price per time band. You know where you stand.</li>
<li><strong>Variable price</strong>, such as the regulated PVPC tariff: the price changes every hour and is published the day before. Power is often cheap in the middle of the day and at night, and expensive in the evening.</li>
</ul>
<p>A fixed contract suits a holiday home without a battery or charger. If you can shift your usage, a variable contract pays more: the system reads tomorrow’s hourly prices and schedules the battery, car, water heater and pool pump in the cheapest hours. The more you can shift, the bigger the difference.</p>`,
      },
      {
        id: 'prijzen',
        h: 'What does it cost?',
        html: '<p>Indicative 2026 prices, including installation and set-up, excluding VAT.</p>',
        table: {
          head: ['Package', 'What you get', 'Indication'],
          rows: [
            ['Insight', 'Energy meter, overview on your phone, alerts for faults', '€400 – €700'],
            ['Smart control', 'Plus link to inverter, battery, water heater and pool pump', '€700 – €1,200'],
            ['Complete', 'Plus EV charger, air con and control on hourly prices', '€1,000 – €1,500'],
            ['Remote management', 'Updates, changes and remote help when something does not work', '€15 – €25 a month'],
            ['Management with on-site service', 'Plus fast on-site help with faults and a yearly check', '€40 – €60 a month'],
          ],
          note: 'No solar panels or battery yet? See the cost of <a href="/en/costs/solar-panels/">solar panels</a>, a <a href="/en/costs/home-battery/">home battery</a> and an <a href="/en/costs/ev-charger/">EV charger</a>.',
        },
      },
      {
        id: 'offgrid',
        h: 'On a finca without mains power',
        html: '<p>Off-grid, smart energy management matters even more, because there is no grid as a fallback. The system only switches on heavy appliances when the battery is full enough, charges the car only on surplus, warns you of a low battery or low water tank, and shows you remotely that everything works. See the guide <a href="/en/guides/off-grid-living-spain/">off-grid living in Spain</a>.</p>',
      },
    ],
    faq: [
      { q: 'Do I need solar panels for smart energy management?', a: 'Not necessarily. With just a variable tariff you can already run the water heater, pool pump and car in cheap hours. With panels and a battery it pays off most.' },
      { q: 'Does it work with my brand of inverter or battery?', a: 'Almost always. Open systems such as Home Assistant work with the common brands. We check what you have when we quote.' },
      { q: 'Can I follow everything from the UK?', a: 'Yes. Your phone shows what the panels produce, what the house uses and how full the battery is, and you get an alert if something is wrong.' },
      { q: 'What happens if the internet goes down?', a: 'The system runs locally in the house and keeps controlling everything. Only remote viewing stops until the internet is back.' },
    ],
    links: [
      { href: '/en/costs/solar-panels/', label: 'Cost of solar panels' },
      { href: '/en/costs/home-battery/', label: 'Cost of a home battery' },
      { href: '/en/costs/ev-charger/', label: 'Cost of an EV charger' },
      { href: '/en/guides/electricity-providers-spain-compared/', label: 'Guide: electricity providers compared' },
      { href: '/en/guides/virtual-battery-spain/', label: 'Guide: virtual battery and export compensation' },
    ],
    related: ['costs:zonnepanelen', 'costs:thuisbatterij', 'costs:laadpaal'],
    sources: [
      { name: 'Red Eléctrica, hourly PVPC prices', url: 'https://www.ree.es/es/datos/mercados/precio-voluntario-pequeno-consumidor' },
      { name: 'CNMC, electricity tariff comparison', url: 'https://comparador.cnmc.gob.es/' },
      { name: 'Home Assistant, open smart home platform', url: 'https://www.home-assistant.io/' },
    ],
    ctaTitle: 'Lower your energy bill automatically?',
    ctaText: 'Tell us which panels, battery or charger you have and your electricity tariff. You get advice on what you can connect and what it saves.',
    minutes: 5,
    published: '2026-11-05',
  },
  {
    key: 'schoorsteen',
    slug: 'chimney-and-wood-burner',
    title: 'What does chimney sweeping, repair or a wood burner cost in Spain?',
    seoTitle: 'Chimney sweeping and wood burners in Spain: costs 2026',
    short: 'Chimney and wood burner',
    description: 'What does it cost to have your chimney swept or repaired, or a wood burner or pellet stove installed in the Axarquía?',
    lead: 'In winter an open fire or wood burner in the Axarquía is lovely, especially in a village house with thick walls. But a chimney that has not been swept for years draws badly, leaks in the rain and can catch fire. What does sweeping, repair or a new stove cost?',
    keyword: 'chimney sweep spain',
    dienst: 'schoorsteen',
    onderwerp: 'I would like my chimney swept or checked.',
    answer: 'Chimney sweeping in the Axarquía usually costs <strong>€60 to €120</strong>, or <strong>€120 to €250</strong> with a camera inspection. A wood burner with a new stainless steel flue costs <strong>€2,500 to €6,000</strong> installed, excluding VAT. Repairing an old masonry chimney ranges from a few hundred euros for a cowl to €3,000 or more.',
    sections: [
      {
        id: 'prijzen',
        h: 'Prices per job',
        html: '<p>Indicative 2026 prices, including materials and labour, excluding VAT.</p>',
        table: {
          head: ['Job', 'Details', 'Indication'],
          rows: [
            ['Chimney sweep', 'Open fire or wood burner, including a check', '€60 – €120'],
            ['Sweep with camera inspection', 'When buying, after a long idle period or after a chimney fire', '€120 – €250'],
            ['Rain cowl or wind cowl', 'Against rain, birds and downdraught', '€150 – €400'],
            ['Repair the roof flashing', 'Leaks around the chimney', '€400 – €1,500'],
            ['Repair a masonry chimney', 'Repointing, render, rebuilding the top', '€800 – €3,000'],
            ['Stainless steel liner in an existing chimney', 'For a stove in an old or leaking chimney', '€1,000 – €2,500'],
            ['Wood burner with new flue', 'Stove, twin-wall stainless flue and roof outlet', '€2,500 – €6,000'],
            ['Pellet stove', 'Stove and flue, with thermostat and timer', '€3,000 – €7,000'],
          ],
          note: 'Is the roof leaking around the chimney? See also the cost of <a href="/en/costs/roof-and-roof-terrace/">roof and roof terrace</a> repairs.',
        },
      },
      {
        id: 'vegen',
        h: 'How often should the chimney be swept?',
        html: `<p>If you use the fire regularly, have the chimney swept <strong>every year</strong>, ideally in September or October before the heating season. If you only use it a few weeks a year, every two years is usually enough, with a check for nests and loose bricks.</p>
<ul>
<li><strong>Soot and tar:</strong> in the Axarquía people burn a lot of olive and pine. Pine and damp wood leave a lot of tar (creosote) in the flue, the main cause of chimney fires.</li>
<li><strong>Nests:</strong> a chimney that has not been used for months is often blocked by birds’ nests in spring.</li>
<li><strong>Insurance:</strong> some insurers ask for proof the chimney was swept after a fire. Keep the invoice.</li>
</ul>`,
      },
      {
        id: 'kachel',
        h: 'Installing a wood burner or pellet stove',
        html: `<p>A closed wood burner gives three to four times as much heat as an open fire from the same wood. A pellet stove is cleaner and works with a thermostat and timer, handy if you want to warm the house remotely. Watch out for:</p>
<ul>
<li><strong>The flue</strong> must suit the stove and rise high enough above the roof. An old masonry chimney often gets a stainless steel liner.</li>
<li><strong>Distance to wood</strong>, beams and reed ceilings (<em>cañizo</em>) matters. In old village houses the flue often passes through a wooden ceiling, which needs an insulated sleeve.</li>
<li><strong>In an apartment block</strong> you usually need permission from the <em>comunidad</em> for a flue through the facade or roof.</li>
<li><strong>Heating with air con</strong> is often cheaper on the coast. A stove is mostly lovely in the mountain villages and for the atmosphere. See <a href="/en/costs/air-conditioning-and-heat-pumps/">air con and heat pumps</a>.</li>
</ul>`,
      },
    ],
    faq: [
      { q: 'Can I sweep the chimney myself?', a: 'With a sweeping kit you can, but a professional also spots cracks, loose bricks and tar build-up, and gives you proof for the insurer. On a high or steep roof it is not advisable to do it yourself.' },
      { q: 'How do I recognise a chimney fire?', a: 'A roaring sound, lots of smoke or sparks from the chimney and a very hot chimney breast. Close the stove’s air supply, get outside and call 112. Have the chimney inspected before you light it again.' },
      { q: 'Which wood burns best?', a: 'Dry hardwood, such as olive or almond, with less than 20% moisture. Let fresh wood dry for at least a year. Pine and damp wood give more soot and tar.' },
    ],
    links: [
      { href: '/en/guides/heating-and-cooling-spain/', label: 'Guide: heating and cooling compared' },
      { href: '/en/problems/smoking-chimney/', label: 'Smoking chimney' },
      { href: '/en/guides/preparing-your-spanish-home-for-winter/', label: 'Guide: preparing your home for winter' },
      { href: '/en/maintenance/', label: 'Maintenance and repairs' },
    ],
    related: ['problems:schoorsteen', 'costs:ramen', 'costs:airco'],
    sources: [
      { name: 'BOE, RITE (heating installations), IT 1.3 and IT 3', url: 'https://www.boe.es/buscar/act.php?id=BOE-A-2007-15820' },
    ],
    ctaTitle: 'Chimney sweep or a new stove?',
    ctaText: 'Send a photo of your fireplace or stove and the chimney on the roof. You get a price for sweeping, repair or a new stove.',
    minutes: 5,
    published: '2026-11-05',
  },
  {
    key: 'ramen',
    slug: 'windows-and-frames',
    title: 'What do new windows and frames cost in Spain?',
    seoTitle: 'Replacing windows in Spain: prices and costs (2026)',
    short: 'Windows and frames',
    description: 'What do new windows cost in the Axarquía? Prices per window for aluminium, uPVC and timber, double glazing, sliding doors and roller shutters.',
    lead: 'Many houses in the Axarquía still have single glazing in thin aluminium frames. In summer the heat comes in, in winter it is cold and draughty and condensation runs down the glass. New windows make a big difference to comfort and your electricity bill.',
    keyword: 'replacement windows spain',
    dienst: 'ramen',
    onderwerp: 'I would like a price for new windows.',
    answer: 'A new double-glazed window of about 120 by 120 cm usually costs <strong>€400 to €800</strong> installed in thermally broken aluminium and <strong>€350 to €700</strong> in uPVC, excluding VAT. A sliding door to the terrace costs <strong>€1,200 to €3,000</strong>. For a whole house with eight to twelve windows, allow €5,000 to €12,000.',
    sections: [
      {
        id: 'prijzen',
        h: 'Prices per window',
        html: '<p>Indicative 2026 prices for a window of about 120 × 120 cm, including removing the old window, fitting and finishing, excluding VAT.</p>',
        table: {
          head: ['Type', 'Details', 'Indication'],
          rows: [
            ['Thermally broken aluminium (RPT)', 'Most common in Spain, slim and strong', '€400 – €800'],
            ['uPVC', 'Insulates well, choose a grade made for strong sun', '€350 – €700'],
            ['Timber or timber-aluminium', 'For a village house or a protected old town', '€700 – €1,400'],
            ['Sliding door to the terrace', '2 to 3 metres wide, double glazed', '€1,200 – €3,000'],
            ['Replace the glass only', 'Double glazing in a sound existing frame', '€100 – €250 per m²'],
            ['Roller shutter (persiana)', 'Aluminium, manual or electric', '€250 – €600'],
            ['Fly screen (mosquitera)', 'Fixed, roller or sliding', '€60 – €150'],
          ],
          note: 'Include windows in a larger project: see <a href="/en/renovation/">renovation</a>.',
        },
      },
      {
        id: 'kiezen',
        h: 'Which window and which glass?',
        html: `<ul>
<li><strong>Thermally broken aluminium (<em>RPT</em>):</strong> the frame has an insulating strip, so the inside no longer gets cold and wet. Maintenance-free and available in any colour.</li>
<li><strong>uPVC:</strong> the best insulation for the money. Choose a profile suited to strong sun, otherwise a dark colour can warp.</li>
<li><strong>Glass:</strong> double glazing with a 12 to 16 mm cavity is standard. On the south and west sides solar control glass (<em>control solar</em>) helps against heat. On the ground floor laminated safety glass is advisable.</li>
<li><strong>Shutters and screens:</strong> a roller shutter keeps the heat out in summer and adds security while you are away. Fly screens are almost essential in the Axarquía.</li>
</ul>`,
      },
      {
        id: 'vergunning',
        h: 'Permits and rules',
        html: `<ul>
<li><strong>Replacing windows</strong> at the same size is usually a simple notification to the town hall (<em>declaración responsable</em> or <em>obra menor</em>).</li>
<li><strong>In a historic centre</strong>, such as in Frigiliana or Cómpeta, there are often rules on colour and material, such as timber or a wood colour.</li>
<li><strong>In an apartment block</strong> the facade must stay uniform. Ask the <em>comunidad</em> which colour and model are allowed.</li>
<li><strong>Grants:</strong> there are regular schemes and an income tax (IRPF) deduction for energy-saving renovations. For what is available in 2026, see <a href="/en/guides/energy-efficiency-grants-spain/">energy efficiency grants in Spain</a>.</li>
</ul>`,
      },
    ],
    faq: [
      { q: 'How long does it take to replace windows?', a: 'The windows are made to measure, which usually takes three to six weeks. Fitting takes about half a day per window, a whole house two to four days.' },
      { q: 'Do new windows help against condensation and mould?', a: 'Often, yes. With double glazing and an insulated frame the inside of the window is much less cold, so less condensation forms. Do keep ventilating. See draughts and condensation at windows.' },
      { q: 'Can I replace just the glass?', a: 'If the frames are sound and deep enough for double glazing, yes. With old thin aluminium frames without a thermal break the frame stays cold, so a new window is the better investment.' },
    ],
    links: [
      { href: '/en/problems/draughts-and-condensation-at-windows/', label: 'Draughts and condensation at windows' },
      { href: '/en/problems/damp-and-mould/', label: 'Damp and mould' },
      { href: '/en/renovation/', label: 'Renovation' },
    ],
    related: ['problems:tocht', 'costs:airco', 'problems:vocht'],
    sources: [
      { name: 'Código Técnico de la Edificación, DB HE (energy saving)', url: 'https://www.codigotecnico.org/DocumentosCTE/AhorroEnergia.html' },
      { name: 'IDAE, grants for energy saving in homes', url: 'https://www.idae.es/ayudas-y-financiacion' },
    ],
    ctaTitle: 'New windows for your house?',
    ctaText: 'Send photos of your windows and rough sizes. You get advice on material and glass, and a price per window.',
    minutes: 5,
    published: '2026-11-05',
  },
];
