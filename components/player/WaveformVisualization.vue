<script setup lang="ts">
import WaveSurfer from 'wavesurfer.js';

const { $waveSurfer } = useNuxtApp();
const waveform = ref<HTMLElement>();
const wavesurfer = ref<WaveSurfer>();

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
        });
        wavesurfer.value.load('https://wavesurfer-js.org/example/media/demo.wav');
    } catch (e) {
        console.error(e);
    }
}

onMounted(() => {
    createWaveSurfer();
});

onUnmounted(() => {
    wavesurfer.value?.destroy();
});

</script>
<template>
    <section class="flex flex-col w-full gap-4 p-6 text-white">
        <div class="text-2xl">현재 재생 중인 음악</div>
        <div class="flex flex-col rounded-xl bg-[url('/api/images/758')] bg-no-repeat bg-center bg-cover">
            <!-- 사운드 파형 분석 -->
            <div ref="waveform" class="top-0 h-full z-2">
            </div>
        </div>
    </section>
</template>