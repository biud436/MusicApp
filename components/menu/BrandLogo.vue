<template>
    <div
        class="flex flex-row items-center h-10 gap-2 mt-4 text-justify bg-transparent rounded-full cursor-pointer select-none">
        <span class="text-sm font-bold text-white transition hover:scale-110 animate-slide">
            Planetun
        </span>
        <span class="text-2xl font-bold text-white transition hover:scale-110">
            SpaceSound
        </span>
    </div>
</template>
<style lang="scss">
.animate-slide {
    animation: slide 0.5s ease-in-out;

    @keyframes slide {
        0% {
            transform: translateX(-10px);
        }

        50% {
            transform: translateX(5px);
        }

        100% {
            transform: translateX(0);
        }
    }
}
</style>