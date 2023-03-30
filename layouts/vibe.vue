<script setup lang="ts">
import VibeMenu from "~~/components/menu/MenuContainer.vue"
</script>
<template>
    <main class=" bg-black h-[100vh]">
        <div class="flex">
            <div class="flex flex-col sm:hidden md:block md:w-3/12 lg:2/12 h-[100vh] px-2 pl-3">
                <VibeMenu />
            </div>
            <div class="flex flex-col sm:w-full md:w-9/12 lg:10/12 h-[100vh] px-2 pl-3">
                <slot />
            </div>
            <PlayerContainer />
        </div>
    </main>
</template>