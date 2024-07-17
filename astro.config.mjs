import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from '@astrojs/mdx';

import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.abhigyantrips.dev',
  redirects: {
    '/discord': 'https://discord.gg/zdVnRaQVzn'
  },
  integrations: [tailwind({
	applyBaseStyles: false,
  }), mdx({
    syntaxHighlight: 'shiki',
    shikiConfig: {
      themes: {
        light: 'rose-pine-dawn',
        dark: 'vitesse-dark'
      }
    }
  }), solidJs()]
});
