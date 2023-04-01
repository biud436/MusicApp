# Introduction

<p align="center">
<img width="649" alt="image" src="https://user-images.githubusercontent.com/13586185/229292109-db7b3794-a855-468f-802d-bc83a650406d.gif">
</p>

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
`.ma-2`와 `.pa-2` 클래스는 TailwindCSS에 정의되어있지 않기 때문에 `@apply` at-rules를 사용할 때 다음과 같이 추가 등록을 해야 한다.

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

이렇게 하면 간단하게 클래스를 정리할 수 있다.

```html
<template>
    <div class="card-1">
        <div class="text-2xl ">
            <h2>Main Store </h2>
            <p class="text-sm text-gray-500 "> (https://jsonplaceholder.typicode.com/todos/1 호출) </p>
        </div>
        <div class="text-white rounded-md bg-slate-800 pa-2">
            <pre>{{ data }}</pre>
        </div>
    </div>
</template>
```

또한 TailwindCSS는 [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)를 설치하면 VSCode에서 자동 완성을 지원한다.

- 전세계가 열광하는 라이브러리이지만, UI 프레임워크가 아닌 CSS 프레임워크이므로 UI 프레임워크인 Vuetify나 BootstrapVue와 달리 미리 정의되어있는 built-in class나 컴포넌트가 없다. 따라서 `@apply` at-rules를 사용하여 커스텀 클래스를 만들어야 한다. 이는 백엔드 개발자가 빠르게 미리 완성되어있는 UI 컴포넌트를 끌어다가 프로토타입을 구축해야 할 땐 적절하지 않을 수 있다. 

CSS 프레임워크를 사용하지 않고 UI 프레임워크를 사용하면 백엔드 개발자 입장에선 더 빨리 개발할 수 있다는 장점이 있지만, 프론트나 디자이너 입장에서는 커스텀이 용이한 CSS 프레임워크를 사용하는 것이 더 편리할 수 있다.

[https://github.com/tailwindlabs/tailwindcss/blob/master/src/corePlugins.js#L679](https://github.com/tailwindlabs/tailwindcss/blob/master/src/corePlugins.js#L679) 를 분석해보면 아래와 같은 부분이 있다.

```js
  margin: createUtilityPlugin(
    'margin',
    [
      ['m', ['margin']],
      [
        ['mx', ['margin-left', 'margin-right']],
        ['my', ['margin-top', 'margin-bottom']],
      ],
      [
        ['ms', ['margin-inline-start']],
        ['me', ['margin-inline-end']],
        ['mt', ['margin-top']],
        ['mr', ['margin-right']],
        ['mb', ['margin-bottom']],
        ['ml', ['margin-left']],
      ],
    ],
    { supportsNegativeValues: true }
  ),
```

이는 부트스트랩이나 기타 다른 UI 프레임워크와는 궤를 달리하고 있는 부분으로, 미리 만들어진 스타일 파일이 없고, 클래스명을 추출하여 직접 아래와 같이 변환한다. 예를 들어서, mx-auto라고 적으면 실제로 아래와 같이 변환된다.


```css
.mx-auto {
    margin-right: auto !important;
    margin-left: auto !important;
}
````

## 동적 컴포넌트와 JSX/TSX
TSX를 이용하여 메뉴를 동적으로 묘화하였다. Nuxt에서는 서버 API에서 tsx를 사용할 수 없었기 때문에, 메뉴의 메타 데이터만 반환하고 동적으로 컴포넌트를 생성하는 방식을 사용하였다.

```vue
<script setup lang="tsx">
import { Category } from '~~/server/api/categories';

export type CategoryNode = {
    title: string;
    depth: number;
    icon: ReturnType<typeof defineComponent>;
    selected: boolean;
}

const items = ref<CategoryNode[]>([]);

$fetch("/api/categories")
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
```

동적으로 컴포넌트를 사용할 때, JSX를 사용하여 컴포넌트 생성을 간단히 하였다. 또한 비동기이므로 `Suspense`로 래핑하여 만일의 사태에 대비하였다.