// Hulpjes voor SEO-teksten die uit een sjabloon komen (plaatsnaam erin).
// Google toont ongeveer 60 tekens titel en 155-160 tekens description.

/** Eerste variant die binnen `max` tekens past, anders de laatste (kortste). */
export const fit = (max: number, ...options: string[]) => options.find((o) => o.length <= max) ?? options[options.length - 1];

/** Titel: de eerste variant van max. 60 tekens. */
export const fitTitle = (...options: string[]) => fit(60, ...options);

/** Description: de eerste variant van max. 160 tekens. */
export const fitDesc = (...options: string[]) => fit(160, ...options);
