import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

import solidJs from '@astrojs/solid-js';

// https://astro.build/config
export default defineConfig({
	site: 'https://www.abhigyantrips.dev',
	integrations: [
		tailwind({
			applyBaseStyles: false,
		}),
		mdx({
			syntaxHighlight: 'shiki',
			shikiConfig: {
				themes: {
					light: 'rose-pine-dawn',
					dark: 'vitesse-dark',
				},
			},
		}),
		solidJs(),
	],
});
