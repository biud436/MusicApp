<script lang="ts" setup>
definePageMeta({
    layout: "vibe",
})
</script>
<template>
    <main>
        <ViewWrapper>
            <ViewMagazines title="매거진" />
            <ViewMagazines title="내 취향 플레이리스트" />
            <ViewMagazines title="추천 플레이리스트" />
            <ViewMagazines title="주목할 최신곡" />
        </ViewWrapper>
    </main>
</template>
