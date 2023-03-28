<script setup lang="ts">
interface IncrementalHeaderProps {
    counter: number;
}

const { counter } = defineProps<IncrementalHeaderProps>();
</script>
<template>
    <div class="text-gray-200 text-2xl">
        Counter: {{ counter }}
    </div>
</template>