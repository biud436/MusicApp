<script setup lang="ts">
import VibeMenu from "~~/components/menu/MenuContainer.vue"
</script>
<template>
    <div class="bg-black h-[100vh]">
        <VibeMenu />
        <slot />
    </div>
</template>