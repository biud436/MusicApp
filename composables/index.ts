import { defineStore } from 'pinia';

export type TodoData = {userId: number; id: number; title: string; completed: boolean;}

export const useMainStore = defineStore("main", {
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
        async getData(): Promise<TodoData> {
            const data = await $fetch<TodoData>('https://jsonplaceholder.typicode.com/todos/1');
            return data;
        }
    },
});