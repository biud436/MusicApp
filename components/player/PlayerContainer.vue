<script setup lang="ts">
import Skeleton from '../ui/Skeleton.vue';
</script>
<template>
    <div class="fixed bottom-0 left-0 w-full h-20 bg-[#191919] min-h-min text-white z-40">
        <div class="flex flex-row h-full gap-2">
            <div class="flex flex-row items-center content-center flex-grow-[1] h-full justify-items-center ml-2">
                <div class="flex justify-center w-1/5 ">
                    <a class="text-ellipsis">앨범</a>
                </div>
                <div class="flex justify-center w-1/5 ">
                    <div class="flex flex-col">
                        <a class="text-ellipsis">노래명</a>
                        <a class="text-ellipsis">가수명</a>
                    </div>
                </div>
                <div class="flex justify-center w-1/5">
                    <IconLike />
                </div>
                <div class="flex justify-center w-1/5 ">
                    <a class="text-ellipsis">가사</a>
                </div>
                <div class="flex justify-center w-1/5 ">
                    <a class="text-ellipsis">더보기</a>
                </div>
            </div>
            <div class="flex-grow-[2] flex items-center justify-center gap-4">
                <a class="text-ellipsis"><i class="transition fa-solid fa-backward-step fa-2x hover:scale-110"></i></a>
                <a class="text-ellipsis "><i
                        class="p-4 text-red-600 transition rounded-full cursor-pointer fa-solid fa-play fa-2x hover:bg-gray-700"
                        id="play"></i></a>
                <a class="text-ellipsis"><i class="transition fa-solid fa-forward-step fa-2x hover:scale-110"></i></a>
            </div>
            <div class="flex-grow-[1] flex items-center mr-2 justify-around gap-3">
                <a class="text-ellipsis">진행바</a>
                <a class="text-ellipsis">재생 목록</a>
            </div>
        </div>
    </div>
</template>