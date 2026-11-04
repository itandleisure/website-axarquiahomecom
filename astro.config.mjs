// @ts-check
import { defineConfig } from 'astro/config';

// Statische site. Live via GitHub Pages op het eigen domein (zie public/CNAME).
export default defineConfig({
  site: 'https://axarquiahome.com',
  trailingSlash: 'always',
  build: { format: 'directory' },
  compressHTML: true,
});
