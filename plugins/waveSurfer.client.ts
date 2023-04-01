import WaveSurfer from 'wavesurfer.js';

export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.provide('waveSurfer', WaveSurfer);
})