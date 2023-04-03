<script setup lang="ts">
import { usePlayerStore } from '~~/composables/player';

const playerStore = usePlayerStore();


</script>
<template>
    <div class="flex flex-col items-center justify-center w-48">
        <span class="text-sm text-white">
            {{ playerStore.time }}
        </span>
    </div>
</template>