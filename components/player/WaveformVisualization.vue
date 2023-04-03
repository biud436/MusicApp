<script setup lang="ts">
import WaveSurfer from 'wavesurfer.js';
import { usePlayerStore } from '~~/composables/player';
import PlayerEqualizer from '~~/components/player/Equalizer.vue';
import { storeToRefs } from 'pinia';

const { $waveSurfer } = useNuxtApp();
const waveform = ref<HTMLElement>();
const wavesurfer = ref<WaveSurfer>();

const playerStore = usePlayerStore();
const { currentMusic } = storeToRefs(playerStore);

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
        });
        wavesurfer.value.on("finish", function () {
            playerStore.pause();
        });
        wavesurfer.value.on('audioprocess', function () {
            playerStore.setDuration(wavesurfer.value?.getDuration()!);
            playerStore.setCurrentTime(wavesurfer.value?.getCurrentTime()!);
        });

        /**
         * ! Events
         * audioprocess – Fires continuously as the audio plays.
         * dblclick – When instance is double-clicked.
         * destroy – When instance is destroyed.
         * error – Occurs on error. Callback will receive (string) error message.
         * finish – When it finishes playing.
         * interaction – When there's interaction with the waveform.
         * loading – Fires continuously when loading using fetch or drag'n'drop. Callback will receive (integer) loading progress in percents [0..100].
         * mute – On mute change. Callback will receive (boolean) new mute status.
         * pause – When audio is paused.
         * play – When playback starts.
         * ready – When audio is loaded, decoded and the waveform drawn. This fires before the waveform is drawn when using MediaElement, see waveform-ready.
         * scroll - When the scrollbar is moved. Callback will receive a ScrollEvent object.
         * seek – On seeking. Callback will receive (float) progress [0..1].
         * volume – On volume change. Callback will receive (integer) new volume.
         * waveform-ready – Fires after the waveform is drawn when using the MediaElement backend. If you're using the WebAudio backend, you can use ready.
         * zoom – On zooming. Callback will receive (integer) minPxPerSec.
         */

    } catch (e) {
        console.error(e);
    }
};

watch(playerStore, (store) => {
    if (store.isPlaying) {
        wavesurfer.value?.play();
    } else {
        wavesurfer.value?.pause();
    }
});

watch(playerStore, (store) => {
    wavesurfer.value?.setVolume(store.volume);
});

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
        <div class="relative flex flex-col rounded-xl" id="waveform-background">
            <div class="absolute inset-0 w-full bg-black opacity-20"></div>
            <img src="/api/images/758" class="absolute w-fit h-[100%]" />
            <!-- 사운드 파형 분석 -->
            <div ref="waveform" class="top-0 h-full z-2">
            </div>
            <div class="flex flex-col self-end gap-2 p-1 text-sm text-white">
                <span>{{ playerStore.time }}</span>
            </div>
        </div>
        <Component :is="PlayerEqualizer" :wave-surfer-ref="wavesurfer" v-if="wavesurfer" />
    </section>
</template>