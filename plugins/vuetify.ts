import { createVuetify} from 'vuetify';
import 'vuetify/styles';
import { aliases, mdi } from 'vuetify/iconsets/mdi'

export default defineNuxtPlugin((app) => {
    const vuetify = createVuetify({
        ssr: true,
        icons: {
            defaultSet: 'mdi',
            aliases,
            sets: {
                mdi
            }
        },
    });

    app.vueApp.use(vuetify);
})