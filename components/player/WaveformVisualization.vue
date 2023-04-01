<script setup lang="ts">
import WaveSurfer from 'wavesurfer.js';
import { usePlayerStore } from '~~/composables/player';

const { $waveSurfer } = useNuxtApp();
const waveform = ref<HTMLElement>();
const wavesurfer = ref<WaveSurfer>();

const currentMusic = ref('https://wavesurfer-js.org/example/media/demo.wav');
const playerStore = usePlayerStore();

const createWaveSurfer = () => {
    try {
        wavesurfer.value = $waveSurfer.create({
            container: waveform.value as HTMLElement,
            waveColor: 'grey',
            progressColor: 'orange',
            height: 128,
            backgroundColor: 'transparent',
            barWidth: 2,
            barHeight: 1,
            barGap: 1,
            barRadius: 0,
            cursorWidth: 0,
            cursorColor: 'black',
            responsive: true,
        });
        wavesurfer.value.load(currentMusic.value);
        wavesurfer.value.on('ready', function () {
            wavesurfer.value?.play();
            playerStore.play();
        });
        wavesurfer.value.on("finish", function () {
            playerStore.pause();
        });
        wavesurfer.value.on('audioprocess', function () {
            playerStore.setDuration(wavesurfer.value?.getDuration()!);
            playerStore.setCurrentTime(wavesurfer.value?.getCurrentTime()!);
        });
    } catch (e) {
        console.error(e);
    }
};


onMounted(() => {
    createWaveSurfer();
});

onUnmounted(() => {
    wavesurfer.value?.destroy();
});

</script>
<template>
    <section class="flex flex-col w-full gap-4 p-6 text-white">
        <div class="text-2xl cursor-pointer select-none hover:underline">현재 재생 중인 음악</div>
        <div class="flex flex-col rounded-xl bg-[url('/api/images/758')] bg-no-repeat bg-center bg-cover">
            <!-- 사운드 파형 분석 -->
            <div ref="waveform" class="top-0 h-full z-2">
            </div>
        </div>
        <div class="flex flex-col self-end gap-2 text-sm text-white">
            <span>{{ playerStore.currentTimeFormatted }}</span>
        </div>
    </section>
</template>