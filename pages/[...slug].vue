<template>
    <main>
        <v-container gutter="24">
            <v-row dense>
                <IncrementalHeader :counter="counter">
                    <ContentDoc />
                </IncrementalHeader>
                <IncrementalContent :increment="increment" :decrement="decrement" />
            </v-row>
        </v-container>
    </main>
</template>
<script lang="ts">
import { storeToRefs } from 'pinia';
import IncrementalHeader from '@/components/IncrementalHeader.vue'
import IncrementalContent from '@/components/IncrementalContent.vue'
export default defineComponent({
    setup() {
        const main = useMainStore();
        const { counter } = storeToRefs(main);
        return {
            main,
            counter
        };
    },
    methods: {
        increment() {
            this.main.increment();
        },
        decrement() {
            this.main.decrement();
        }
    },
    components: { IncrementalHeader, IncrementalContent }
})
</script>
