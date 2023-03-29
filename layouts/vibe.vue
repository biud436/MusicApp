<script setup lang="ts">
import VibeMenu from "~~/components/menu/MenuContainer.vue"
</script>
<template>
    <main class="bg-black h-[100vh]">
        <VibeMenu />
        <slot />
        <PlayerContainer />
    </main>
</template>