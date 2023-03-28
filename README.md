# Introduction

## Store
- store 폴더가 아닌, composables 폴더에 store를 생성해야 한다.
- 전역 함수 `$fetch`를 사용하여 스토어 내에서 데이터를 가져올 수 있다.

## Composable & Composition API
- 리액트의 훅에서 영감을 받은 것으로 재사용 가능한 로직을 모듈화하여 사용할 수 있고 Reactive한 데이터를 만들 수 있다.
- 기존의 Option API를 계속 사용할 수도 있지만, 리액트 개발자 유입과 코드 재사용성 등으로 인해 최근 동향을 보면 Composition API로만 작성되는 것으로 보여진다. 
- Composable로 Store를 만들어서 여러 컴포넌트에 상태를 공유할 수 있다.

## provide() & inject()
- React의 Context와 비슷한 개념으로 상위 컴포넌트에서 하위 컴포넌트로 데이터를 전달할 수 있다.

## Tailwind CSS
- TailwindCSS에 정의되어있는 클래스를 `@apply` at-rules를 사용하여 하나의 클래스로 병합할 수 있다.

### 예시
`.ma-2`와 `.pa-2` 클래스는 TailwindCSS에 정의되어있지 않기 때문에 다음과 같이 추가 등록이 가능하다.

```css
@layer utilities {
    .ma-2 {
      margin: 0.5rem;
    }
    .pa-2 {
      padding: 0.5rem;
    }
}

.card-1 {
    @apply columns-2 gap-3 flex flex-col bg-gray-100 rounded-sm ma-2 pa-2 justify-items-center items-center;
    flex-direction: column;
}
```

이렇게 하면 간단하게 클래스를 정의할 수 있다.

```html
<template>
    <div class="card-1">
        <div class=" text-2xl ">
            <h2>Main Store </h2>
            <p class=" text-gray-500 text-sm"> (https://jsonplaceholder.typicode.com/todos/1 호출) </p>
        </div>
        <div class="bg-slate-800 text-white pa-2 rounded-md">
            <pre>{{ data }}</pre>
        </div>
    </div>
</template>
```

또한 TailwindCSS는 [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)를 설치하면 VSCode에서 자동완성을 지원한다.