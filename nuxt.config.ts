import Lara from '@primeuix/themes/lara';
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

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
				preset: Lara,
				options: {
					darkModeSelector: ".p-dark",
				}
			},
			ripple: true
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
