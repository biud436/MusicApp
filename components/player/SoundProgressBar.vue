<script setup lang="ts">
import { usePlayerStore } from '~~/composables/player';

const playerStore = usePlayerStore();

const current = ref(playerStore.volumePercentage);
const max = 100;
const isMuted = ref(false);
const isHover = ref(false);

const onClick = (e: MouseEvent) => {
    e.preventDefault();

    const progressBar = e?.currentTarget as HTMLProgressElement;

    if (!progressBar) {
        return;
    }

    const clickPosition = e.clientX - progressBar.getBoundingClientRect().left
    const progressBarWidth = progressBar.clientWidth
    const newProgress = Math.round((clickPosition / progressBarWidth) * 100)

    current.value = newProgress;

    playerStore.setVolume(newProgress);
};

const onMouseEnter = () => {
    isHover.value = true;
};

const onMouseLeave = () => {
    isHover.value = false;
};

const onClickMute = () => {
    isMuted.value = !isMuted.value;

    if (isMuted.value) {
        playerStore.setVolume(0);
        playerStore.mute();
    } else {
        playerStore.setVolume(current.value);
        playerStore.unmute();
    }
};

</script>
<template>
    <div class="flex flex-row items-center justify-center w-full gap-2 py-2 transition cursor-pointer"
        @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
        <div id="volume" class="peer/volume">
            <i class="cursor-pointer fa-solid hover:text-white" :class="{
                'fa-volume-high': !isMuted,
                'fa-volume-mute': isMuted,
                'text-white': isHover,
                'text-gray-500': !isHover
            }" @click="onClickMute"></i>
        </div>
        <progress
            class="w-full h-1 [&::-webkit-progress-value]:bg-gray-600 peer-hover/volume:[&::-webkit-progress-value]:bg-gray-200 transition"
            :class="{
                'progress-not-hovering': !isHover,
                'progress-hovering': isHover,
            }" :value="current" :max="max" @click="onClick">
        </progress>
    </div>
</template>
<style lang="scss"></style>