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
        'nuxt-swiper'
    ],
    swiper: {
        // Swiper options
        //----------------------
        // prefix: 'Swiper',
        // styleLang: 'css',
        // modules: ['navigation', 'pagination'], // all modules are imported by default
    },
    plugins: [
    ],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
})
