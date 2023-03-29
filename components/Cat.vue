<script setup lang="ts">
interface CatProps {
    data: string;
}
const { data } = defineProps<CatProps>();
const len = ref(0);

computed(() => {
    len.value = data.length
});

onMounted(() => {
    len.value = data.length;
});

</script>
<template>
    <div class="w-full card-1">
        <div class="text-2xl">
            Cat
        </div>
        <div class="flex flex-wrap w-11/12 text-white rounded-md bg-slate-800">
            {{ data }}
        </div>
        <div class="text-right">
            {{ len }}
        </div>
    </div>
</template>