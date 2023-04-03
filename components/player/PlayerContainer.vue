<template>
    <div class="fixed bottom-0 left-0 w-full h-20 bg-[#191919] min-h-min text-white z-40">
        <div class="z-40 flex flex-row h-full gap-2">
            <PlayerInformationPanel>
                <PlayerAlbum />
                <PlayerSongPanel />
                <PlayerInteraction />
            </PlayerInformationPanel>
            <PlayerPanel>
                <PlayerBackward />
                <PlayerPlayAndResume />
                <PlayerForward />
            </PlayerPanel>
            <PlayerVolumePanel>
                <PlayerDuration />
                <PlayerSoundProgressBar />
                <PlayerPlayList />
            </PlayerVolumePanel>
        </div>
    </div>
</template>