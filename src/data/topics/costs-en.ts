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
    description: 'What does a new kitchen cost in the Axarquía? Prices for new doors, a complete kitchen and a bespoke kitchen with an island, plus worktops, appliances and services.',
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
    description: 'What does a pool cost in the Axarquía? Prices for a prefabricated pool, an 8 × 4 m concrete pool and a complete pool with terrace, plus permits and running costs.',
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
    seoTitle: 'Air conditioning and heat pump costs in Spain (Axarquía, 2026)',
    short: 'Air con and heat pumps',
    description: 'What does air conditioning cost in the Axarquía? Prices for a split unit, multi-split and ducted system, and for an air-to-water heat pump (aerotermia) for heating and hot water.',
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
    seoTitle: 'Roof and roof terrace repair costs in Spain: prices per m² (2026)',
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
];
