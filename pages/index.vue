<script lang="ts" setup>
import { storeToRefs } from 'pinia';
import IncrementalContent from '@/components/IncrementalContent.vue'
import Counter from '@/components/Counter.vue';
import User from '@/components/User.vue';
import { useCounterStore } from '~~/composables/counter';
import { useServerStore } from '~~/composables/server';

const data = ref({});
const isShake = ref(false);
const counterStore = useCounterStore();
const serverStore = useServerStore()

const { counter } = storeToRefs(counterStore);
const targetValue = ref(100);

const increment = () => {
    counterStore.increment();
    startShake();
}

const decrement = () => {
    counterStore.decrement();
    startShake();
}

const startShake = () => {
    isShake.value = true;

    setTimeout(() => {
        isShake.value = false;
    }, 300);
}

onMounted(async () => {
    data.value = await serverStore.getData();
});

watch(targetValue, (newVal, oldVal) => {
    const diff = Math.abs(newVal - counter.value);
    if (diff < 10) {
        startShake();
    }
});

</script>
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