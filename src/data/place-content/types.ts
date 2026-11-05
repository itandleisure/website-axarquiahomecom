// Teksten per plaats en per taal. Elke plaats heeft een eigen bestand in deze map.
// Schrijf eerst een feitenblad (bronnen staan onderaan elk bestand) en daaruit de teksten,
// zodat de feiten in alle talen gelijk zijn. HTML in alinea's is toegestaan (links, <em>).
export interface PlaceText {
  /** SEO-titel van de overzichtspagina */
  title: string;
  description: string;
  lead: string;
  intro: string[];
  facts: [string, string][];
  forWhom?: string;
  /** Pagina Zien en doen (alleen gemeenten in golf A en B) */
  see?: {
    title: string;
    description: string;
    lead: string;
    items: { name: string; text: string }[];
    fiestas?: { name: string; when: string; text: string }[];
  };
  /** Pagina Wonen */
  living?: {
    title: string;
    description: string;
    lead: string;
    sections: { h: string; p: string[] }[];
  };
  faq?: { q: string; a: string }[];
}

export type PlaceContent = Partial<Record<'nl' | 'en' | 'de', PlaceText>> & {
  /** Bronnen van het feitenblad, alleen voor onszelf */
  sources?: string[];
};
