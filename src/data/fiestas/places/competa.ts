import { t, D, M, type PlaceFiestas } from '../types';

const f: PlaceFiestas = {
  intro: t(
    'Cómpeta is in de hele streek bekend om de Noche del Vino op 15 augustus. Maar ook de rest van het jaar is er feest, van de bloemenkruisen in mei tot de zomerferia in juli.',
    'Cómpeta is famous across the area for the Noche del Vino on 15 August. But there is plenty to celebrate the rest of the year too, from the flower crosses in May to the summer fair in July.',
    'Cómpeta ist in der ganzen Gegend für die Noche del Vino am 15. August bekannt. Doch auch im Rest des Jahres wird gefeiert, von den Blumenkreuzen im Mai bis zur Sommer-Feria im Juli.',
    'Cómpeta är känt i hela trakten för Noche del Vino den 15 augusti. Men det firas resten av året också, från blomsterkorsen i maj till sommarferian i juli.',
  ),
  events: [
    { name: 'Feria del Barrio', when: M(1), text: t('feest in de wijk El Barrio ter ere van San Sebastián, met een kleine romería.', 'a fiesta in the El Barrio quarter in honour of San Sebastián, ending with a small romería.', 'Fest im Viertel El Barrio zu Ehren von San Sebastián, mit einer kleinen Romería.', 'fest i stadsdelen El Barrio till ära för San Sebastián, med en liten romería.') },
    { name: 'Cruces de Mayo', when: D(3, 5), text: t('kruisen van bloemen en een processie naar La Cruz del Monte.', 'crosses made of flowers and a procession up to La Cruz del Monte.', 'Blumenkreuze und eine Prozession hinauf zur Cruz del Monte.', 'blomsterkors och en procession upp till La Cruz del Monte.') },
    { name: 'Feria de verano', when: M(7), kind: 'feria', text: t('vier dagen feest voor de beschermheilige San Sebastián, met een romería op de laatste dag.', 'four days of fiesta for the patron saint San Sebastián, with a romería on the last day.', 'vier Tage Fest für den Schutzpatron San Sebastián, mit einer Romería am letzten Tag.', 'fyra dagars fest för skyddshelgonet San Sebastián, med romería sista dagen.') },
    { name: 'Noche del Vino', when: D(15, 8), highlight: true, text: t(
      'sinds 1973 het grote wijnfeest, met gratis wijn, flamenco en het traditionele druiven treden op de Plaza Almijara tot diep in de nacht.',
      'the big wine festival since 1973, with free wine, flamenco and traditional grape treading on the Plaza Almijara late into the night.',
      'seit 1973 das große Weinfest, mit kostenlosem Wein, Flamenco und traditionellem Traubentreten auf der Plaza Almijara bis tief in die Nacht.',
      'den stora vinfesten sedan 1973, med gratis vin, flamenco och traditionell druvtrampning på Plaza Almijara långt in på natten.',
    ) },
  ],
  sources: ['https://es.wikipedia.org/wiki/Cómpeta', 'https://es.hispanopedia.com/wiki/Cómpeta'],
};
export default f;
