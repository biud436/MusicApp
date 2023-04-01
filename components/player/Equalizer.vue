<script setup lang="ts">
import WaveSurfer from 'wavesurfer.js/src/wavesurfer';
import { useEqualizerStore } from '~~/composables/equalizer';
const equalizerStore = useEqualizerStore();
const props = defineProps<
    { waveSurferRef: WaveSurfer | undefined }
>();
const EQ = equalizerStore.equalizer;
const filters = ref<BiquadFilterNode[]>([]);

watchEffect(() => {
    filters.value = EQ.map((band) => {
        const filter = props.waveSurferRef?.backend.getAudioContext().createBiquadFilter()!;

        filter.type = band.type as BiquadFilterType;
        filter.gain.value = band.g;
        filter.Q.value = 1;
        filter.frequency.value = band.f;

        return filter;
    });

    props.waveSurferRef?.backend.setFilters(filters.value);
});

const onChange = (e: Event, filter: BiquadFilterNode | undefined) => {
    if (!filter) return;
    filter.gain.value = ~~(e?.target as HTMLInputElement).value;
}

const onLoad = (input: Event) => {
    props.waveSurferRef?.util.style(input?.currentTarget as HTMLInputElement, {
        webkitAppearance: 'slider-vertical',
        width: '50px',
        height: '150px'
    });
};

</script>
<template>
    <div class="flex flex-col gap-2">
        <div class="text-2xl text-white hover:underline">
            이퀄라이저
        </div>
        <div
            class="flex flex-row justify-center w-full h-full gap-1 p-3 rounded-md bg-gradient-to-br from-sky-400 via-violet-600 to-blue-700 bg-opacity-60">
            <div v-for="filter in filters" :key="filter?.frequency.value">
                <input class="w-12 bg-white" type="range" orient="vertical" min="-40" max="40" :value="filter?.gain.value"
                    @input="onChange($event, filter)" @change="onChange($event, filter)" @load="onLoad($event)" />
                <p class="text-sm text-center text-white">{{ filter?.frequency.value.toString().replace("000", "K") }}</p>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
input[type=range] {
    appearance: slider-vertical;
}
</style>