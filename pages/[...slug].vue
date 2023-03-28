<template>
    <main>
        <div class="container mx-auto">
            <div class="card-1">
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
            <div class="card-1">
                <div class=" text-2xl ">
                    <h2>Main Store </h2>
                    <p class=" text-gray-500 text-sm"> (https://jsonplaceholder.typicode.com/todos/1 호출) </p>
                </div>
                <div class="bg-slate-800 text-white pa-2 rounded-md">
                    <pre>{{ data }}</pre>
                </div>
            </div>
            <Counter :targetValue="targetValue" />
        </div>
    </main>
</template>
<script lang="ts">
import { storeToRefs } from 'pinia';
import IncrementalHeader from '@/components/IncrementalHeader.vue'
import IncrementalContent from '@/components/IncrementalContent.vue'
import { useCounterStore } from '~~/composables/counter';
import Counter from '@/components/Counter.vue';

export default defineComponent({
    setup() {
        const data = ref({});
        const isShake = ref(false);
        const main = useMainStore();
        const counterStore = useCounterStore();

        const { counter } = storeToRefs(counterStore);
        const targetValue = ref(100);

        watch(counter, (newVal, oldVal) => {

        });

        return {
            mainStore: main,
            counterStore,
            counter,
            data,
            isShake,
            targetValue
        };
    },
    async mounted() {
        this.data = await this.mainStore.getData();
    },
    watch: {
        targetValue: {
            handler(newVal, oldVal) {
                const diff = Math.abs(newVal - this.counter);
            },
        }
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
    components: { IncrementalHeader, IncrementalContent, Counter }
})
</script>
<style lang="scss"></style>