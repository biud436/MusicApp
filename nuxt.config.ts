import vuetify from "vite-plugin-vuetify";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ["@/assets/main.scss"],
	build: {
		transpile: ["vuetify"],
	},
    vite: {
		ssr: {
			noExternal: ["vuetify"],
		},
		define: {
			"process.env.DEBUG": false,
		},
    }, 
    app: {
        head: {
            title: 'My Nuxt App',
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
        }
    },
    modules: [
        '@nuxt/content',
        "@pinia/nuxt",
		async (options, nuxt) => {
			// @ts-ignore
			nuxt.hooks.hook("vite:extendConfig", (config) => config.plugins.push(vuetify()));
		},        
    ],
    plugins: [
        '~/plugins/vuetify.ts'
    ]
})
