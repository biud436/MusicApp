<script setup lang="ts">
interface CounterProps {
    targetValue: number;
}
const { targetValue } = defineProps<CounterProps>();
const value = ref(targetValue);

</script>
<template>
    <div class="card-1">
        <h3>카운터 체크</h3>
        <input type="number" class="input-form" v-model="value" />
    </div>
</template>