import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
    state: () => ({
        counter: 0,
    }),
    actions: {
        reset() {
            this.counter = 0;
        },
        increment() {
            this.counter++;
        },
        decrement() {
            this.counter--;
        },
    },
});