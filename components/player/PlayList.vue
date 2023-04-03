<script setup lang="ts">
import { useModalStore } from '~~/composables/modal';
import { PlayerInfo, usePlayerStore } from '~~/composables/player';

const playerStore = usePlayerStore();
const modalStore = useModalStore();

const playlist: PlayerInfo[] = [
    {
        currentTime: 0,
        duration: 300,
        isPlaying: false,
        volume: 50,
        isMute: false,
        metadata: {
            name: "Lose Yourself",
            artist: "Eminem"
        },
        albumArt: "400"
    },
    {
        currentTime: 120,
        duration: 240,
        isPlaying: true,
        volume: 70,
        isMute: false,
        metadata: {
            name: "Bohemian Rhapsody",
            artist: "Queen"
        },
        albumArt: "888"
    },
    {
        currentTime: 180,
        duration: 270,
        isPlaying: true,
        volume: 80,
        isMute: false,
        metadata: {
            name: "Thriller",
            artist: "Michael Jackson"
        },
        albumArt: "889"
    },
    {
        currentTime: 60,
        duration: 180,
        isPlaying: true,
        volume: 60,
        isMute: false,
        metadata: {
            name: "Hotel California",
            artist: "The Eagles"
        },
        albumArt: "890"
    },
    {
        currentTime: 240,
        duration: 300,
        isPlaying: false,
        volume: 40,
        isMute: true,
        metadata: {
            name: "Yesterday",
            artist: "The Beatles"
        },
        albumArt: "892"
    }
];

const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${minutes.toString().padStart(2, "0")}분 ${seconds.toString().padStart(2, "0")}초`;
}

const play = (item: PlayerInfo) => {
    const { metadata } = item;
    playerStore.play({
        name: metadata.name,
        artist: metadata.artist,
    },
        item.albumArt);

    modalStore.close();
}

</script>
<template>
    <div class="flex flex-col gap-4">
        <div class="p-1 text-2xl text-white rounded-lg bg-slate-700">
            <i class="fa-solid fa-music"></i>
            재생 목록 <span class="inline text-md xs:hidden md:inline xl:inline">(총 {{ playlist.length }}곡)</span>
        </div>
        <div class="flex flex-col items-end justify-end gap-4">
            <span class="text-sm text-white">
                총 재생 길이: {{ formatTime(playlist.reduce((a, b) => a + b.duration, 0)) }}
            </span>
        </div>
        <div class="flex flex-col gap-2">
            <div v-for="item in playlist" :key="item.metadata.name"
                class="flex flex-row gap-4 cursor-pointer hover:bg-slate-700" @click="play(item)">
                <div class="flex flex-col justify-center">
                    <img :src="'/api/images/' + item.albumArt" class="w-16 h-16 rounded-lg" />
                </div>
                <div class="flex flex-col justify-center">
                    <div class="text-xl text-white">
                        {{ item.metadata.name }}
                    </div>
                    <div class="text-sm text-gray-400">
                        {{ item.metadata.artist }}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>