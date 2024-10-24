import aspectRatio from '@tailwindcss/aspect-ratio';
import containerQueries from '@tailwindcss/container-queries';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				'fira-code': ['Fira Code'],
				mono: ['Fira Code']
			}
		}
	},

	plugins: [containerQueries, aspectRatio]
} as Config;
