import { defineStore } from "pinia";

interface EqualizerInfo {
    f: number;
    type: "lowshelf"|"peaking"|"highshelf";
}

export const useEqualizerStore = defineStore("equalizer", {
    state: () => ({
        equalizer: [
            {
                f: 32,
                g: 0,
                type: 'lowshelf'
            },
            {
                f: 64,
                g: 0,
                type: 'peaking'
            },
            {
                f: 125,
                g: 0,
                type: 'peaking'
            },
            {
                f: 250,
                g: 0,
                type: 'peaking'
            },
            {
                f: 500,
                g: 0,
                type: 'peaking'
            },
            {
                f: 1000,
                g: 0,
                type: 'peaking'
            },
            {
                f: 2000,
                g: 0,
                type: 'peaking'
            },
            {
                f: 4000,
                g: 0,
                type: 'peaking'
            },
            {
                f: 8000,
                g: 0,
                type: 'peaking'
            },
            {
                f: 16000,
                g: 0,
                type: 'highshelf'
            }            
        ]
    }),

})