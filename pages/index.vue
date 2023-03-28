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
            <User :data="data" />
            <Counter :targetValue="targetValue" />
        </div>
    </main>
</template>
<script lang="ts">
import { storeToRefs } from 'pinia';
import IncrementalHeader from '@/components/IncrementalHeader.vue'
import IncrementalContent from '@/components/IncrementalContent.vue'
import Counter from '@/components/Counter.vue';
import User from '@/components/User.vue';
import { useCounterStore } from '~~/composables/counter';
import { useServerStore } from '~~/composables/server';

export default defineComponent({
    setup() {
        const data = ref({});
        const isShake = ref(false);
        const counterStore = useCounterStore();
        const serverStore = useServerStore()

        const { counter } = storeToRefs(counterStore);
        const targetValue = ref(100);

        return {
            serverStore: serverStore,
            counterStore,
            counter,
            data,
            isShake,
            targetValue
        };
    },
    async mounted() {
        this.data = await this.serverStore.getData();
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
    components: { IncrementalHeader, IncrementalContent, Counter, User }
})
</script>