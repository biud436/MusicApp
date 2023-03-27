<template>
    <v-col :cols="12">
        <v-sheet class="pa-2 ma-2 bg-grey lighten-2" elevation="1">
            <v-container>
                <slot />
            </v-container>
            <v-list>
                <v-list-item>
                    <v-text-field name="name" label="제목" id="id"></v-text-field>
                    <v-textarea label="내용"></v-textarea>
                </v-list-item>
            </v-list>
        </v-sheet>
        Counter: {{ counter }}
    </v-col>
</template>
<script lang="ts">
export default defineComponent({
    props: {
        counter: {
            type: Number,
            required: true,
        }
    },

})
</script>