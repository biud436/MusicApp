export type Category = {
    title: string;
    depth: number;
    icon: string;
    selected: boolean;
}

export default defineEventHandler(({context}) => {
    // '투데이', '차트', '최신앨범', 'DJ 스테이션', 'VIBE MAG', '이달의 노래', '보관함'
    const categories: Category[] = [
        {
            title: '투데이',
            depth: 1,
            icon: "fa-solid fa-dice-d20",
            selected: false,
        },
        {
            title: '차트',
            depth: 1,
            icon: "fa-solid fa-trophy",
            selected: false,
        },
        {
            title: '최신앨범',
            depth: 1,
            icon: "fas fa-compact-disc",
            selected: false,
        },
        {
            title: 'DJ 스테이션',
            depth: 1,
            icon: "fas fa-headphones",
            selected: false,
        },
        {
            title: 'VIBE MAG',
            depth: 1,
            icon: "fa-solid fa-clipboard-list",
            selected: false,
        },
        {
            title: '이달의 노래',
            depth: 1,
            icon: "fa-solid fa-music",
            selected: false,
        },
        {
            title: '보관함',
            depth: 1,
            icon: "fa-solid fa-heart",
            selected: false,
        },
    ];

    return categories;
});