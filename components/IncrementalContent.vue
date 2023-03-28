<template>
    <div class="flex flex-row gap-8">
        <button class="btn-primary" @click="increment">증가</button>
        <button class="btn-secondary" @click="decrement">감소</button>
    </div>
</template>
<script>
export default defineComponent({
    props: {
        increment: {
            type: Function,
            required: true
        },
        decrement: {
            type: Function,
            required: true
        }
    }
})
</script>