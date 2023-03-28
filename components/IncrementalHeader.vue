<template>
    <div class="text-gray-200 text-2xl">
        Counter: {{ counter }}
    </div>
</template>
<script lang="ts">
// Vue 2 문법을 사용한다
export default defineComponent({
    props: {
        counter: {
            type: Number,
            required: true,
        }
    },

})
</script>