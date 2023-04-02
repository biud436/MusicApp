<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination, Navigation, SwiperOptions } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
const slideItems = ref<{ id: number, title: string; description: string; image: string; }[]>();

interface MagazineProps { title: string; }

const props = withDefaults(defineProps<MagazineProps>(), {
    title: "Untitled",
});

const swiperBreakPoint = ref<{
    [width: number]: SwiperOptions;
    [ratio: string]: SwiperOptions;
} | undefined>({
    320: {
        slidesPerView: 1,
        spaceBetween: 10,
    },
    480: {
        slidesPerView: 2,
        spaceBetween: 10,
    },
    640: {
        slidesPerView: 2,
        spaceBetween: 10,

    },
    1024: {
        slidesPerView: 2,
        spaceBetween: 10,

    },
    1280: {
        slidesPerView: 2,
        spaceBetween: 10,
    },
    1920: {
        slidesPerView: 4,
        spaceBetween: 10,
    },
});

const swiperRef = useSwiper();

$fetch('/api/randomImage')
    .then((data) => {
        slideItems.value = data.items;
    });

const updateSwiper = () => {
    swiperRef.value.update();
};

onMounted(() => {
    window.addEventListener('resize', updateSwiper);
});

onUnmounted(() => {
    window.removeEventListener('resize', updateSwiper);
});

</script>
<template>
    <div class="flex flex-row items-center gap-3 my-12 text-gray-100 justify">
        <div class="text-2xl cursor-pointer hover:underline">{{ props.title }}</div>
        <div class="text-sm cursor-pointer animate-pulse">더보기</div>
    </div>
    <Suspense>
        <Swiper :navigation="true" :breakpoints="swiperBreakPoint" :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
        }" :modules="[Autoplay, Pagination, Navigation]" @swiper="swiper => swiperRef = swiper">
            <SwiperSlide v-for="item in slideItems" :key="item.id">
                <div
                    class="flex flex-col items-start justify-center gap-1 text-gray-400 cursor-pointer hover:animate-pulse">
                    <img :src="item.image" class="w-64 h-64" />
                    <div class="text-white text-md">{{ item.title }}</div>
                    <div class="text-sm">{{ item.description }}</div>
                    <div class="text-sm">{{ new Date().toLocaleDateString() }} <strong
                            class="text-red-400 text-4xlxl">&middot;</strong></div>
                </div>
            </SwiperSlide>
        </Swiper>
        <template #fallback>
            <UiSpinner />
        </template>
    </Suspense>
</template>