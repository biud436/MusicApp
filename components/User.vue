<script setup lang="ts">
const { data } = defineProps<{ data: Record<string, any> }>();

</script>
<template>
    <div class="card-1">
        <div class=" text-2xl ">
            <h2>Main Store </h2>
            <p class=" text-gray-500 text-sm"> (https://jsonplaceholder.typicode.com/todos/1 호출) </p>
        </div>
        <div class="bg-slate-800 text-white pa-2 rounded-md">
            <pre>{{ data }}</pre>
        </div>
    </div>
</template>