<script setup lang="ts">
import SpaceSoundMenu from "~~/components/menu/MenuContainer.vue"

</script>
<template>
    <main class="container h-[100vh] mx-auto">
        <div class="flex">
            <div class="flex flex-col w-3/4 px-2 pl-3 bg-black sm:3/4 md:w-2/6 lg:w-2/6 xl:1/6 2xl:w-2/12">
                <SpaceSoundMenu />
            </div>
            <div class="flex flex-col w-3/4 px-2 pl-3 sm:3/4 md:w-4/6 lg:w-4/6 xl:5/6 2xl:w-10/12">
                <PlayerWaveformVisualization />
                <slot />
            </div>
            <PlayerContainer />
            <UiModal>
                <PlayerPlayList />
            </UiModal>
            <!-- <DebugCaptureElement /> -->
        </div>
    </main>
</template>