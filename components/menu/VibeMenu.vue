<script setup lang="ts">
</script>
<template>
    <header class="border-r-[#1a1a1a] border-r-2 w-[300px] h-[100vh] fixed px-14">

        <div
            class="flex flex-row items-center h-10 gap-2 mt-4 text-justify bg-transparent rounded-full cursor-pointer select-none">
            <span class="text-sm font-bold text-white">
                NAVER
            </span>
            <span class="text-2xl font-bold text-white">
                VIBE
            </span>
        </div>
        <div class="flex flex-row justify-center w-full">
            <div class="w-4/6 h-[1px] bg-[#1a1a1a]" />
        </div>

        <div class="flex flex-col gap-2 ">
            <div class="flex items-center mt-4 flex-start">
                <svg class="bg-transparent h-[3.5rem] rounded-full w-[3.5rem] p-2">
                    <image href="https://avatars.githubusercontent.com/u/13586185?s=40&v=4" />
                </svg>
                <div class="ml-4">
                    <div class="font-sans text-[#cccccc] font-sm text-md hover:text-white cursor-pointer">어진석</div>
                </div>
                <!-- arrow down -->
                <svg class="w-4 h-4 ml-2 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                    fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd" />
                </svg>
            </div>
            <div class="flex flex-row justify-center w-full">
                <div class="w-4/6 h-[1px] bg-[#1a1a1a]" />
            </div>

            <div class="flex items-center justify-center w-full py-3 justify-items-center">
                <input
                    class="w-5/6 py-2 pl-12 leading-tight text-white forcus:font-bold  bg-[#1a1a1a] border-none appearance-none focus:outline-none peer/search focus:caret-pink-700"
                    id="search" type="text" placeholder="VIBE 검색" aria-label="VIBE 검색" />
                <!-- 돋보기 아이콘 -->
                <svg viewBox="0 0 24 24"
                    class="absolute w-6 h-6 right-4 left-20 fill-[#5c5c5c] peer-focus/search:fill-white"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M16.293 15.707l4.586 4.586a1 1 0 0 1-1.414 1.414l-4.586-4.586a8 8 0 1 1 1.414-1.414zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
                </svg>
                <!-- 회색 원 안에 X 버튼-->
                <svg viewBox="0 0 24 24"
                    class="absolute w-4 h-4 rounded-full fill-[#5c5c5c] peer-focus/search:fill-white bg-gray-400 hidden peer-focus/search:relative peer-focus/search:block right-5 z-10 cursor-pointer"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12 10.586l3.293-3.293a1 1 0 1 1 1.414 1.414L13.414 12l3.293 3.293a1 1 0 1 1-1.414 1.414L12 13.414l-3.293 3.293a1 1 0 1 1-1.414-1.414L10.586 12 7.293 8.707a1 1 0 1 1 1.414-1.414L12 10.586z" />
                </svg>
            </div>

            <div class="flex flex-row justify-center w-full">
                <div class="w-4/6 h-[1px] bg-[#1a1a1a]" />
            </div>
        </div>
    </header>
</template>