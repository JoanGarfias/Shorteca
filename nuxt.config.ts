import Lara from '@primeuix/themes/lara';
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { definePreset } from '@primeuix/themes';

const MyPreset = definePreset(Lara, {
	name: 'shorteca-preset',
  semantic: {
        primary: {
            50: '{indigo.50}',
            100: '{indigo.100}',
            200: '{indigo.200}',
            300: '{indigo.300}',
            400: '{indigo.400}',
            500: '{indigo.500}',
            600: '{indigo.600}',
            700: '{indigo.700}',
            800: '{indigo.800}',
            900: '{indigo.900}',
            950: '{indigo.950}'
        }
  },
	ripple: true
});

export default defineNuxtConfig({
	app: {
		head: {
			title: "Nuxt App",
		},
		link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
	},
	devtools: { enabled: false },
	css: [
		'~~/assets/main.css'
	],
	modules: ["@primevue/nuxt-module"],
	primevue: {
		options: {
			theme: {
				preset: MyPreset,
				options: {
					darkModeSelector: '.p-dark'
				}
			},
		},
		autoImport: true
	},
	vite: {
		plugins: [
			tailwindcss(),
		]
	},
	compatibilityDate: "2025-02-26"
});
