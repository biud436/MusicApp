<script setup lang="ts">
interface IncrementalContentProps {
    increment: () => void;
    decrement: () => void;
};

const { increment, decrement } = defineProps<IncrementalContentProps>();
</script>
<template>
    <div class="flex flex-row gap-8">
        <button class="btn-primary" @click="increment">증가</button>
        <button class="btn-secondary" @click="decrement">감소</button>
    </div>
</template>