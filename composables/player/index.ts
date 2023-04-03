import { defineStore } from "pinia";

interface PlayerInfo {
    currentTime: number;
    duration: number;
    isPlaying: boolean;
    volume: number;
    isMute: boolean;
    metadata: PlayerMetadata;
    albumArt: string;
}

interface PlayerMetadata {
    name: string;
    artist: string;
}

export const usePlayerStore = defineStore("player", {
    state: () => ({
        // 현재 재생 중인 음악의 재생 시간
        currentTime: 0 as PlayerInfo["currentTime"],
        // 현재 재생 중인 음악의 총 재생 시간
        duration: 0 as PlayerInfo["duration"],
        // 재생 여부
        isPlaying: false as PlayerInfo["isPlaying"],
        // 음량 (0 ~ 1)
        volume: 0.5 as PlayerInfo["volume"],
        // 음소거 여부
        isMute: false as PlayerInfo["isMute"],
        // 현재 음악 메타 정보
        metadata: {
            name: "Untitled",
            artist: "Unknown",
        } as PlayerMetadata,
        // 앨범 이미지
        albumArt: "" as PlayerInfo["albumArt"],
    }),
    getters: {
        // 현재 재생 중인 음악의 재생 시간 (분:초)
        currentTimeFormatted() {
            const minutes = Math.floor(this.currentTime / 60);
            const seconds = Math.floor(this.currentTime % 60);

            return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
        },
        // 현재 재생 중인 음악의 총 재생 시간 (분:초)
        durationFormatted() {
            const minutes = Math.floor(this.duration / 60);
            const seconds = Math.floor(this.duration % 60);

            return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
        },
        time() {
            return `${this.currentTimeFormatted} / ${this.durationFormatted}`;
        },
        albumArtUrl(): string {
            return `/images/${this.albumArt}`;
        },
        volumePercentage(): number {
            return this.volume * 100;
        }
    },
    actions: {
        toggleMute() {
            this.isMute = !this.isMute;
        },
        togglePlay() {
            this.isPlaying = !this.isPlaying;
        },
        play() {
            this.isPlaying = true;
        },
        pause() {
            this.isPlaying = false;
        },
        mute() {
            this.isMute = true;
        },
        unmute() {
            this.isMute = false;
        },
        setDuration(duration: number) {
            this.duration = duration;
        },
        setCurrentTime(currentTime: number) {
            this.currentTime = currentTime;
        },
        setVolume(volume: number) {
            if(volume < 0) {
                volume = 0;
            }
            if(volume > 100) {
                volume = 100;
            }

            // 볼륨 정규화
            const normalizedVolume = volume / 100;

            this.volume = normalizedVolume;
        }
    }
});