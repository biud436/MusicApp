<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination, Navigation } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
const slideItems = ref<{ id: number, title: string; description: string; image: string; }[]>();

onMounted(() => {
    const items = [];

    for (let i = 0; i < 10; i++) {
        items.push({
            id: i,
            title: `title ${i}`,
            description: `description ${i}`,
            image: `https://picsum.photos/seed/${i}/300/200`
        });
    }

    slideItems.value = items;
});

</script>
<template>
    <div class="flex flex-row items-start gap-1 mb-2 text-gray-100 justify justify-items-center">
        <div class="text-2xl">매거진</div>
        <!-- > 아이콘 -->
        <div class="text-sm">더보기</div>
    </div>
    <Swiper :slides-per-view="3" :space-between="30" :centered-slides="true" :navigation="true" :autoplay="{
        delay: 2500,
        disableOnInteraction: false,

    }" :modules="[Autoplay, Pagination, Navigation]">
        <SwiperSlide v-for="item in slideItems" :key="item.id">
            <div class="flex flex-col items-center justify-center gap-1 text-gray-400">
                <img :src="item.image" class="w-64 h-64" />
                <div class="text-2xl font-bold">{{ item.title }}</div>
                <div class="text-lg">{{ item.description }}</div>
            </div>
        </SwiperSlide>
    </Swiper>
</template>