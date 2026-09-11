import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://venturare.com.br',
  output: 'static',
  integrations: [
    tailwind(),
    mdx(),
    sitemap(),
  ],
});
