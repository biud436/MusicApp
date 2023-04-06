<script setup lang="ts">
interface ButtonProps {
    variant: "text" | "outlined" | "contained";
    text: string;
}

const { text, variant } = defineProps<ButtonProps>();

</script>
<template>
    <button class="relative p-2 transition rounded-md" :class="{
        'bg-blue-500 text-white hover:bg-blue-600 hover:shadow-sm active:bg-blue-700': variant === 'contained',
        'border-blue-500 text-blue-500 border-1 hover:shadow-sm': variant === 'outlined',
        'text-blue-500 hover:text-blue-600 active:text-blue-700 ': variant === 'text'
    }">
        <span class="z-10"> {{ text }} </span>
        <span
            class="z-0 absolute top-0 left-0 w-full h-full transition scale-[10%] bg-blue-500 rounded-md active:scale-100 overflow-clip"></span>
    </button>
</template>
<style lang="scss"></style>