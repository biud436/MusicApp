<template>
    <div class="card-1">
        <h3>카운터 체크</h3>
        <input type="number" class="input-form" v-model="targetValue" />
    </div>
</template>
<script lang="ts">
const Counter = defineComponent({
    props: {
        targetValue: {
            type: Number,
            default: 100
        }
    },
});

export default Counter;
</script>