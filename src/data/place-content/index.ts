import type { PlaceContent } from './types';
const files = import.meta.glob<{ default: PlaceContent }>('./*.ts', { eager: true });
export const placeContent: Record<string, PlaceContent> = Object.fromEntries(
  Object.entries(files)
    .filter(([f]) => !/\/(index|types)\.ts$/.test(f))
    .map(([f, m]) => [f.replace(/^\.\/|\.ts$/g, ''), m.default]),
);
