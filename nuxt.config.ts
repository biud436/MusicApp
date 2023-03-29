// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['~/assets/css/main.css'],
	build: {
		transpile: [],
	},
    vite: {
		ssr: {
			noExternal: [],
		},
		define: {
			"process.env.DEBUG": false,
		},
    }, 
    app: {
        head: {
            title: 'CS',
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
        }
    },
    modules: [
        '@nuxt/content',
        "@pinia/nuxt",
    ],
    plugins: [
    ],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
})
