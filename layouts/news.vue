<template>
    <div class="bg-[#f2f4f7] min-h-screen p-0 m-0">
        <div class="container mx-auto">
            <div class="card-1">
                <div class="text-2xl">
                    News
                </div>
                <slot />
            </div>
            <div class="container">
                <button class="btn-primary" @click="$router.back()">뒤로</button>
            </div>
        </div>
    </div>
</template>
