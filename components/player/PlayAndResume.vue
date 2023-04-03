<script setup lang="ts">
import { usePlayerStore } from '~~/composables/player';
const playerStore = usePlayerStore();

const play = () => {
    if (playerStore.isPlaying) {
        playerStore.pause();
    } else {
        playerStore.play();
    }
};

</script>
<template>
    <a class="text-ellipsis "><i
            class="p-4 m-1 text-red-600 transition rounded-[50%] cursor-pointer fa-solid fa-2x hover:bg-gray-700 hover:scale-125"
            :class="playerStore.isPlaying ? 'fa-pause' : 'fa-play'" id="play" @click="play"></i></a>
</template>