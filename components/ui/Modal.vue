
  
<script setup lang="ts">
import { useModalStore } from '~~/composables/modal';

const modalStore = useModalStore();

</script>
<template>
    <Transition name="slide-fade">

        <div class="fixed top-0 left-0 z-40 flex items-center justify-center w-full h-full" v-if="modalStore.isOpen"
            v-on-click-outside="modalStore.close">
            <div class="absolute z-0 w-full h-full bg-gray-900 opacity-75 pointer-events-none"></div>

            <div class="z-10 w-1/3 text-xl text-white rounded-lg border-gray-600/50 bg-black/60 border-1">
                <div class="text-right ">
                    <button @click="() => modalStore.close()" class="m-2 rounded-md cursor-pointer bg-blue-500/60">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div class="p-4">
                    <slot></slot>
                </div>
            </div>
        </div>
    </Transition>
</template>
<style lang="scss">
.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.3s ease-in;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateY(100px);
    opacity: 0;
}
</style>