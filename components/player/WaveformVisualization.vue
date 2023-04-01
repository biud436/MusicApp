<script setup lang="ts">
import WaveSurfer from 'wavesurfer.js';

const { $waveSurfer } = useNuxtApp();
const waveform = ref<HTMLElement>();
const wavesurfer = ref<WaveSurfer>();

const createWaveSurfer = () => {
    wavesurfer.value = $waveSurfer.create({
        container: waveform.value as HTMLElement,
        waveColor: 'grey',
        progressColor: 'green',
    });
    wavesurfer.value.load('https://wavesurfer-js.org/example/media/demo.wav');
}

onMounted(() => {
    createWaveSurfer();
});

</script>
<template>
    <section class="flex flex-col w-full px-5 m-2">
        <div class="mb-2 text-2xl text-white">
            파형 분석
        </div>
        <!-- 사운드 파형 분석 -->
        <div ref="waveform" class="w-full h-32 overflow-hidden bg-gray-800">
        </div>
    </section>
</template>