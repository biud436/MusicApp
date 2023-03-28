import { defineStore } from 'pinia';

export type TodoData = {
    userId: number; 
    id: number; 
    title: string; 
    completed: boolean;
};

export const useServerStore = defineStore("main", {
    state: () => ({
    }),
    actions: {
        async getData(): Promise<TodoData> {
            const data = await $fetch<TodoData>('https://jsonplaceholder.typicode.com/todos/1');
            return data;
        }
    },
});