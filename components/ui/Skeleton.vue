<script setup lang="ts">
interface SkeletonProps {
    circle?: boolean;
    rounded?: boolean;
    animation?: boolean;
    variant?: 'text' | 'rect' | 'circle';
}

const props = defineProps<SkeletonProps>();

</script>
<template>
    <div class="w-full h-full">
        <div class="w-full h-full bg-gray-300 bg-gradient-to-b to-gray-800 from-gray-700" :class="{
            'rounded-full':
                props.circle, 'rounded': props.rounded, 'animate-pulse': props.animation,
        }"></div>
    </div>
</template>