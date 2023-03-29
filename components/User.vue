<script setup lang="ts">
interface UserProps {
    data: Record<string, any>
};
const { data } = defineProps<UserProps>();

</script>
<template>
    <div class="card-1">
        <div class="text-2xl text-center">
            <h2>Main Store </h2>
            <p class="text-sm text-gray-500"> (https://jsonplaceholder.typicode.com/todos/1 호출) </p>
        </div>
        <div class="text-white rounded-md bg-slate-800 pa-2">
            <pre class="first-letter:text-2xl">{{ data }}</pre>
        </div>
    </div>
</template>