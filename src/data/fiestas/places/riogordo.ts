import { t, D, E, M, W, type PlaceFiestas } from '../types';

const f: PlaceFiestas = {
  intro: t(
    'Riogordo is bekend om El Paso, het passiespel in de open lucht met honderden inwoners als spelers. Daarnaast heeft het dorp twee feria’s en een eigen slakkendag.',
    'Riogordo is known for El Paso, the open-air passion play with hundreds of villagers taking part. The village also has two fairs and its own snail day.',
    'Riogordo ist bekannt für El Paso, das Passionsspiel unter freiem Himmel mit Hunderten Einwohnern als Darsteller. Außerdem hat das Dorf zwei Ferias und einen eigenen Schneckentag.',
    'Riogordo är känt för El Paso, passionsspelet under bar himmel med hundratals bybor som skådespelare. Byn har också två ferior och en egen snigeldag.',
  ),
  events: [
    { name: 'Carnaval', when: M(2), kind: 'carnaval', text: t('verkleden en optocht.', 'fancy dress and a parade.', 'Verkleidung und Umzug.', 'utklädnad och parad.') },
    { name: 'El Paso de Riogordo', when: E('good-friday'), highlight: true, kind: 'semana-santa', text: t('het passiespel in de open lucht, met honderden spelers uit het dorp.', 'the open-air passion play, with hundreds of villagers taking part.', 'das Passionsspiel unter freiem Himmel mit Hunderten Darstellern aus dem Dorf.', 'passionsspelet under bar himmel, med hundratals bybor som spelar.') },
    { name: 'Feria de mayo', when: W(5, t('27 tot 29 mei', '27–29 May', '27. bis 29. Mai', '27–29 maj')), kind: 'feria', text: t('het voorjaarsfeest.', 'the spring fair.', 'das Frühlingsfest.', 'vårfesten.') },
    { name: 'Día del Caracol', when: D(1, 6), text: t('het dorp deelt slakken in saus uit, het gerecht van Riogordo.', 'the village hands out snails in sauce, Riogordo’s signature dish.', 'das Dorf verteilt Schnecken in Soße, das Gericht von Riogordo.', 'byn delar ut sniglar i sås, Riogordos typiska rätt.') },
    { name: 'Feria de agosto', when: W(8, t('14 tot 18 augustus', '14–18 August', '14. bis 18. August', '14–18 augusti')), kind: 'feria', text: t('het hoofdfeest ter ere van San Jacinto en Nuestra Señora de Gracia.', 'the main fiesta, in honour of San Jacinto and Nuestra Señora de Gracia.', 'das Hauptfest zu Ehren von San Jacinto und Nuestra Señora de Gracia.', 'huvudfesten, till ära för San Jacinto och Nuestra Señora de Gracia.') },
    { name: 'Fiesta del Candil', when: D(7, 9), text: t('een traditioneel feest met olielampjes en vuren in het dorp.', 'a traditional fiesta with oil lamps and fires in the village.', 'ein traditionelles Fest mit Öllampen und Feuern im Dorf.', 'en traditionell fest med oljelampor och eldar i byn.') },
  ],
  sources: ['https://es.wikipedia.org/wiki/Riogordo'],
};
export default f;
