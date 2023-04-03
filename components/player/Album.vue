<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { usePlayerStore } from '~~/composables/player';

const { albumArt } = storeToRefs(usePlayerStore());
</script>
<template>
    <div class="flex justify-center w-2/12 xs:w-1/5 sm:w-1/5 xl:w-1/12">
        <a class="text-ellipsis">
            <img class="w-12 h-12 rounded-full hover:scale-105" :src="`/api/images/${albumArt}`" />
        </a>
    </div>
</template>