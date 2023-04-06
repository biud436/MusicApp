<script setup lang="ts">
interface ButtonProps {
    variant: "text" | "outlined" | "contained";
    text: string;
}

const { text, variant } = defineProps<ButtonProps>();
const buttonRef = ref<HTMLButtonElement>(null!);

/**
 * DOM 직접 접근 테스트
 */
class ButtonRippleEffect {
    static UNMOUNTED = 1000;

    private button?: HTMLButtonElement;

    onMounted() {
        const button = buttonRef.value;
        if (!button) return;

        this.button = button;
        button.addEventListener('mounseenter', this.onClick);

    }

    onClick() {
        if (!this.button) {
            return;
        }

        const spanElem = document.createElement('span');
        spanElem.textContent = "오우...";
        spanElem.classList.add("animate-spin")

        setTimeout(() => {
            if (spanElem) {
                this.button?.removeChild(spanElem);
                spanElem.remove();
            }
        }, ButtonRippleEffect.UNMOUNTED);

        this.button.appendChild(spanElem);
    }
}

onMounted(() => {
    new ButtonRippleEffect().onMounted();
})

</script>
<template>
    <button class="relative p-2 transition rounded-md " :class="{
        'bg-blue-500 text-white hover:bg-blue-600 hover:shadow-sm active:bg-blue-700': variant === 'contained',
        'border-blue-500 text-blue-500 border-1 hover:shadow-sm': variant === 'outlined',
        'text-blue-500 hover:text-blue-600 active:text-blue-700': variant === 'text'
    }" ref="buttonRef">
        <span class="">
            {{ text }}
        </span>
        <span
            class="absolute top-0 left-0 w-full h-full transition opacity-0 scale-[10%] bg-blue-200 rounded-md active:scale-100 active:opacity-100 "></span>

    </button>
</template>
<style lang="scss"></style>