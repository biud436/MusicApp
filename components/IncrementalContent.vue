<template>
    <v-col :cols="12" class="justify-center">
        <v-card>
            <v-card-text>
                <v-sheet class="pa-2 ma-2 bg-blue lighten-4" elevation="1">
                    <v-btn variant="tonal" class="mx-2" @click="increment">증가</v-btn>
                    <v-btn variant="tonal" class="mx-2" @click="decrement">감소</v-btn>
                </v-sheet>
            </v-card-text>
        </v-card>
    </v-col>
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