<script setup lang="ts">
import VibeMenu from "~~/components/menu/MenuContainer.vue"
</script>
<template>
    <main class="h-full ">
        <div class="flex">
            <div class="flex flex-col h-[100vh] px-2 pl-3 w-2/12 ">
                <VibeMenu />
            </div>
            <div class="flex flex-col w-10/12 h-[100vh] px-2 pl-3">
                <slot />
            </div>
            <PlayerContainer />
        </div>
    </main>
</template>