<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination, Navigation } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
const slideItems = ref<{ id: number, title: string; description: string; image: string; }[]>();

const props = defineProps<{ title: string; }>();

$fetch('/api/randomImage')
    .then((data) => {
        slideItems.value = data.items;
    });
</script>
<template>
    <div class="flex flex-row items-center gap-3 my-12 text-gray-100 justify">
        <div class="text-2xl cursor-pointer hover:underline">{{ props.title }}</div>
        <div class="text-sm cursor-pointer animate-pulse">더보기</div>
    </div>
    <Suspense>
        <Swiper :slides-per-view="3" :space-between="30" :navigation="true" :breakpoints="{
            320: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            480: {
                slidesPerView: 3,
                spaceBetween: 40,
            },
            640: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
        }" :autoplay="{
    delay: 2500,
    disableOnInteraction: false,

}" :modules="[Autoplay, Pagination, Navigation]">
            <SwiperSlide v-for="item in slideItems" :key="item.id">
                <div
                    class="flex flex-col items-center justify-center gap-1 text-gray-400 cursor-pointer hover:animate-pulse">
                    <img :src="item.image" class="w-64 h-64" />
                    <div class="text-2xl font-bold">{{ item.title }}</div>
                    <div class="text-lg">{{ item.description }}</div>
                </div>
            </SwiperSlide>
        </Swiper>
        <template #fallback>
            <div class="w-6 h-6 text-2xl text-white">
                <i class="fa-solid fa-spinner-third animate-spin"></i>
                로딩중입니다
            </div>
        </template>
    </Suspense>
</template>