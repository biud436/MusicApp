export type Category = {
    title: string;
    id: string;
    depth: number;
    icon: string;
    selected: boolean;
}

import { v4 as uuidv4 } from 'uuid';

export default defineEventHandler(({context}) => {
    // '투데이', '차트', '최신앨범', 'DJ 스테이션', 'VIBE MAG', '이달의 노래', '보관함'
    const categories: Category[] = [
        {
            title: '투데이',
            id: uuidv4(),
            depth: 1,
            icon: "fa-solid fa-dice-d20",
            selected: false,
        },
        {
            title: '차트',
            id: uuidv4(),
            depth: 1,
            icon: "fa-solid fa-trophy",
            selected: false,
        },
        {
            title: '최신앨범',
            id: uuidv4(),
            depth: 1,
            icon: "fas fa-compact-disc",
            selected: false,
        },
        {
            title: 'DJ 스테이션',
            id: uuidv4(),
            depth: 1,
            icon: "fas fa-headphones",
            selected: false,
        },
        {
            title: 'VIBE MAG',
            id: uuidv4(),
            depth: 1,
            icon: "fa-solid fa-clipboard-list",
            selected: false,
        },
        {
            title: '이달의 노래',
            id: uuidv4(),
            depth: 1,
            icon: "fa-solid fa-music",
            selected: false,
        },
        {
            title: '보관함',
            id: uuidv4(),
            depth: 1,
            icon: "fa-solid fa-heart",
            selected: false,
        },
    ];

    return categories;
});