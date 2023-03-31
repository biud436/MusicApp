import { defineStore } from "pinia";

export const useMenuStore = defineStore("menu", {
    state: () => ({
        selectedCategory: "보관함",
    }),
    actions: {
        selectCategory(category: string) {
            this.selectedCategory = category;
        }
    },
});