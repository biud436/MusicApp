<script setup lang="ts">
import { usePlayerStore } from '~~/composables/player';

const playerStore = usePlayerStore();

</script>
<template>
    <div class="flex justify-center w-1/12 xs:w-2/5 lg:w-2/5 xl:w-2/12 min-h-fit">
        <div class="flex flex-col">
            <a class="text-ellipsis">{{ playerStore.metadata.name }}</a>
            <a class="text-ellipsis">{{ playerStore.metadata.artist }}</a>
        </div>
    </div>
</template>