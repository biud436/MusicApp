import WaveSurfer from 'wavesurfer.js';

// Do not use class here!
interface WaveSurferAdapter {
    create: () => void;
}

export default defineNuxtPlugin(nuxtApp => {

    // const adapter = {
    //     create: () => {

    //     },
    // } as WaveSurferAdapter;

    nuxtApp.provide('waveSurfer', WaveSurfer);
})