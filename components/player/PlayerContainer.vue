<template>
    <div class="fixed bottom-0 left-0 w-full h-20 bg-[#191919] min-h-min text-white z-40">
        <div class="flex flex-row h-full gap-2">
            <div class="flex flex-row items-center content-center flex-grow-[1] h-full justify-items-center ml-2">
                <div class="flex justify-center w-1/5 ">
                    <a class="text-ellipsis">{ album }</a>
                </div>
                <div class="flex justify-center w-1/5 ">
                    <div class="flex flex-col">
                        <a class="text-ellipsis">{ song }</a>
                        <a class="text-ellipsis">{ artist }</a>
                    </div>
                </div>
                <div class="flex flex-row items-center justify-between gap-4">
                    <div class="flex justify-center w-1/5">
                        <i
                            class="text-gray-400 transition fa-solid fa-heart-circle-check hover:scale-105 hover:text-gray-100"></i>
                    </div>
                    <div class="flex justify-center w-1/5 ">
                        <a class="text-ellipsis"><i
                                class="text-gray-400 transition fa-solid fa-music hover:text-gray-100 hover:scale-105"></i></a>
                    </div>
                    <div class="flex justify-center w-1/5 ">
                        <a class="text-ellipsis"><i
                                class="text-gray-400 transition cursor-pointer fa-solid fa-ellipsis hover:scale-105 hover:text-gray-100"></i></a>
                    </div>
                </div>
            </div>
            <div class="flex-grow-[1] flex items-center justify-start gap-4 ">
                <a class="text-ellipsis"><i class="transition fa-solid fa-backward-step fa-2x hover:scale-110"></i></a>
                <a class="text-ellipsis "><i
                        class="p-4 m-1 text-red-600 transition rounded-[50%] cursor-pointer fa-solid fa-play fa-2x hover:bg-gray-700 hover:scale-125"
                        id="play"></i></a>
                <a class="text-ellipsis"><i class="transition fa-solid fa-forward-step fa-2x hover:scale-110"></i></a>
            </div>
            <div class="flex-grow-[1] flex items-center mr-2 justify-around gap-3">
                <PlayerSoundProgressBar />
                <a class="text-ellipsis"><i
                        class="transition fa-solid fa-list text-slate-500 hover:text-slate-200 hover:scale-105"></i></a>
            </div>
        </div>
    </div>
</template>