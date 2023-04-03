<script setup lang="ts">
import { useModalStore } from '~~/composables/modal';


const modalStore = useModalStore();
const toggleListModal = () => {
    modalStore.toogle();
}

</script>
<template>
    <a class="text-ellipsis" @click="toggleListModal">
        <i class="transition fa-solid fa-list text-slate-500 hover:text-slate-200 hover:scale-105"></i>
    </a>
</template>
<style lang="scss">
// 밑에서 위로 슬라이드
.slide-up-enter-active,
.slide-up-leave-active {
    transition: all 0.3s ease;
}
</style>