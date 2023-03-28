<template>
    <main>
        <div class="container mx-auto">
            <div class="columns-2 gap-3 flex flex-col bg-gray-100 rounded-sm ma-2 pa-2 justify-items-center items-center">
                <div>
                    <h2 class="text-2xl hover:text-blue-600">
                        Counter Store
                    </h2>
                </div>
                <div class=" text-cyan-700 text-8xl " :class="{
                    'animate-ping': isShake
                }"> {{ counter }} </div>
                <div>
                    <IncrementalContent :increment="increment" :decrement="decrement" />
                </div>
            </div>
            <div class="columns-2 flex flex-col bg-gray-100 rounded-sm ma-2 pa-2 gap-3" style="flex-direction: column;">
                <div class="text-2xl ">
                    <h2>Main Store </h2>
                    <p class="text-gray-500 text-sm"> (https://jsonplaceholder.typicode.com/todos/1 호출) </p>
                </div>
                <div class="bg-slate-800 text-white pa-2 rounded-md">
                    <pre>{{ data }}</pre>
                </div>
            </div>
        </div>
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
        const isShake = ref(false);
        const main = useMainStore();
        const counterStore = useCounterStore();

        const { counter } = storeToRefs(counterStore);

        return {
            mainStore: main,
            counterStore,
            counter,
            data,
            isShake
        };
    },
    async mounted() {
        this.data = await this.mainStore.getData();
    },
    methods: {
        increment() {
            this.counterStore.increment();
            this.startShake();
        },
        decrement() {
            this.counterStore.decrement();
            this.startShake();
        },
        startShake() {
            this.isShake = true;

            setTimeout(() => {
                this.isShake = false;
            }, 300);
        },
    },
    components: { IncrementalHeader, IncrementalContent }
})
</script>
<style lang="scss"></style>