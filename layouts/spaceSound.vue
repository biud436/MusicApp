<script setup lang="ts">
import SpaceSoundMenu from "~~/components/menu/MenuContainer.vue"

</script>
<template>
    <main class="container h-full mx-auto">
        <div class="flex">
            <div class="flex flex-col h-[100vh] px-2 pl-3 w-3/4 sm:3/4 md:w-2/6 lg:w-2/6 xl:1/6 2xl:w-2/12 bg-black">
                <SpaceSoundMenu />
            </div>
            <div class="flex flex-col h-[100vh] px-2 pl-3 w-3/4 sm:3/4 md:w-4/6 lg:w-4/6 xl:5/6 2xl:w-10/12">
                <PlayerWaveformVisualization />
                <slot />
            </div>
            <PlayerContainer />
            <UiModal>
                <PlayerPlayList />
            </UiModal>
        </div>
    </main>
</template>