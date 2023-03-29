import { defineStore } from 'pinia';

export type TodoData = {
    userId: number; 
    id: number; 
    title: string; 
    completed: boolean;
};

export interface CatProps {
    data: string[];
}


const endpoint = {
    todos: 'https://jsonplaceholder.typicode.com/todos/1',
    cat: 'https://meowfacts.herokuapp.com',
}

export const useServerStore = defineStore("main", {
    state: () => ({
    }),
    actions: {
        async getData(): Promise<TodoData> {
            const data = await $fetch<TodoData>(endpoint.todos);
            return data;
        },
        async getMeow() {
            const data = await $fetch<CatProps>(endpoint.cat);

            return data;
        }
    },
});