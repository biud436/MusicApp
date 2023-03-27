<template>
    <main>
        <v-container gutter="24">
            <v-row dense>
                <IncrementalHeader :counter="counter">
                    <ContentDoc />
                </IncrementalHeader>
                <IncrementalContent :increment="increment" :decrement="decrement" />
            </v-row>
            <pre>{{ data }}</pre>
        </v-container>
    </main>
</template>
<script lang="ts">
import { storeToRefs } from 'pinia';
import IncrementalHeader from '@/components/IncrementalHeader.vue'
import IncrementalContent from '@/components/IncrementalContent.vue'

// Vue 2 문법을 사용한다
export default defineComponent({
    setup() {
        const data = ref({});
        const main = useMainStore();
        const { counter } = storeToRefs(main);
        return {
            main,
            counter,
            data
        };
    },
    async mounted() {
        this.data = await this.main.getData();
    },
    methods: {
        increment() {
            this.main.increment();
        },
        decrement() {
            this.main.decrement();
        },
    },
    components: { IncrementalHeader, IncrementalContent }
})
</script>
