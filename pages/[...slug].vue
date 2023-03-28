<template>
    <main>
        <v-container gutter="24">
            <v-row dense class="gap-4" style="flex-direction: column;">
                <v-col>
                    <h2>
                        Counter Store
                    </h2>
                </v-col>
                <!-- <IncrementalHeader :counter="counter">
                    <ContentDoc />
                </IncrementalHeader> -->
                <v-col>
                    {{ counter }}
                </v-col>
                <v-col>
                    <IncrementalContent :increment="increment" :decrement="decrement" />
                </v-col>

            </v-row>
            <v-row class="gap-2" style="flex-direction: column;">
                <v-col>
                    <h2>Main Store (https://jsonplaceholder.typicode.com/todos/1 호출) </h2>
                </v-col>
                <v-col>
                    <pre>{{ data }}</pre>
                </v-col>
            </v-row>
        </v-container>
    </main>
</template>
<script lang="ts">
import { storeToRefs } from 'pinia';
import IncrementalHeader from '@/components/IncrementalHeader.vue'
import IncrementalContent from '@/components/IncrementalContent.vue'
import { useCounterStore } from '~~/composables/counter';

// Vue 2 문법을 사용한다
export default defineComponent({
    setup() {
        const data = ref({});
        const main = useMainStore();
        const counterStore = useCounterStore();

        const { counter } = storeToRefs(counterStore);

        return {
            mainStore: main,
            counterStore,
            counter,
            data
        };
    },
    async mounted() {
        this.data = await this.mainStore.getData();
    },
    methods: {
        increment() {
            this.counterStore.increment();
        },
        decrement() {
            this.counterStore.decrement();
        },
    },
    components: { IncrementalHeader, IncrementalContent }
})
</script>
<style lang="scss">
/* .gap-2 {
    gap: 2rem;
} */
</style>