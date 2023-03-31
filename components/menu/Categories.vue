<script setup lang="tsx">
import { Category } from '~~/server/api/createCategories';

export type CategoryNode = {
    title: string;
    depth: number;
    icon: ReturnType<typeof defineComponent>;
    selected: boolean;
}

const items = ref<CategoryNode[]>([]);

$fetch("/api/createCategories")
    .then((data) => {
        data.forEach((item: Category) => {
            return items.value.push({
                title: item.title,
                depth: item.depth,
                icon: defineComponent(() => {
                    return () => (
                        <div>
                            <i class={item.icon}></i>
                        </div>
                    );
                }),
                selected: item.selected
            })
        })

        return items;
    })
    .then((items) => {
        console.log(items);
    })
</script>
<template>
    <div class="flex flex-col gap-2 mt-2 text-white">
        <div v-for="item in items" key="item.title" class="p-1 text-md">
            <Suspense>
                <div class="flex items-center text-gray-300 transition cursor-pointer hover:sacle-120 hover:opacity-80"
                    :class="{
                        'text-red-500 font-bold': item.selected
                    }">
                    <Component :is="item.icon" class="w-6 h-6 " />
                    <a class="ml-2">{{ item.title }}</a>
                </div>
                <template #fallback>
                    <UiSpinner />
                </template>
            </Suspense>
        </div>
    </div>
</template>