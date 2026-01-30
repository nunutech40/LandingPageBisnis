// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import alpinejs from '@astrojs/alpinejs';
import sitemap from '@astrojs/sitemap';

import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
  site: 'https://conversion-engine.com',
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [alpinejs(), sitemap(), partytown({
    config: {
      forward: ["dataLayer.push"],
    },
  })]
});