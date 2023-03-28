<script setup lang="ts">
const { targetValue } = defineProps<{ targetValue: number }>();
const value = ref(targetValue);

</script>
<template>
    <div class="card-1">
        <h3>카운터 체크</h3>
        <input type="number" class="input-form" v-model="value" />
    </div>
</template>