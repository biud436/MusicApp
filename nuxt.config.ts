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
            title: 'Music Player',
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            link: [
                // https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css
                { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css' },
            ]
        },
        
    },
    modules: [
        '@nuxt/content',
        "@pinia/nuxt",
        '@nuxt/ui',
        'nuxt-swiper',
        '@vueuse/nuxt'
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
