# Introduction

<p align="center">
<img width="649" alt="image" src="https://user-images.githubusercontent.com/13586185/229292109-db7b3794-a855-468f-802d-bc83a650406d.gif">
<img width="649" alt="image" src="https://user-images.githubusercontent.com/13586185/229433246-1f9b36b6-dd7d-42b5-a429-893d1f2ae59d.gif">
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

## JSX/TSX 그리고 CSR, SSR, ISR, SSG
리액트에서는 서버에서 ReactDOMServer.renderToString()을 사용하여 JSX를 문자열로 변환한 후 클라이언트로 전달한다. TSX를 사용하면 이와 유사한 작업이 진행되는 것으로 추측할 수 있다. 다만 클라이언트 컴포넌트와 서버 컴포넌트의 구분이 모호한데, 메뉴를 동적으로 묘화하려고 처음에는 Nuxt의 서버 API에서 tsx 파일을 생성하여 작업하였지만, 서버 API는 말그대로 Node.js 환경의 서버를 말하는 것으로 tsx 파일은 호환되지 않았다. 

이같은 작업을 하면서 Nuxt에서는 `<ClientOnly>`라는 클라이언트 전용 컴포넌트를 만들 수 있는 기능이 존재한다는 것을 알게 되었다. Next 13의 `use client`와 유사한 걸로 추측된다. 필자는 서버에서 카테고리 데이터를 수신하여 메뉴의 메타 데이터만 받아서고 동적으로 컴포넌트를 생성하는 방식을 취하였다. 이러한 방식을 도입한 이유는 본래 메뉴는 정적인 데이터가 아니라 동적으로 생성되어야 하는 데이터이기 때문이다. 

즉, `$fetch`는 Life Cycle에서 created 전단계라고 하는데, 이때 $fetch를 사용하였으므로 동적으로 데이터가 생성된다는 것을 유추할 수 있다. 따라서 컴파일러는 이것을 서버 컴포넌트로 유추하게 될 것으로 추측된다. 하지만 카테고리 데이터는 초기 렌더링 값과 동일하므로 정적인 컴포넌트로 반환되는 것이 더 효율적이다. 
```vue
<script setup lang="tsx">
import { useMenuStore } from '~~/composables/menu';
import { Category } from '~~/server/api/categories';

const menuStore = useMenuStore();

type CategoryNode = {
    title: string;
    id: string;
    depth: number;
    icon: ReturnType<typeof defineComponent>;
    selected: boolean;
}

const items = ref<CategoryNode[]>([]);

const onClickCategory = ({ id }: Pick<Category, "id">) => {
    menuStore.selectCategory(id);
};

const fetchData = async () => {
    const data = await $fetch("/api/categories");

    if (!data) {
        return;
    }

    data.forEach((item: Category) => {
        return items.value.push({
            title: item.title,
            id: item.id,
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
    });

    return items;
};

onMounted(() => {
    fetchData();
});

</script>
```

비동기이므로 `Suspense`로 래핑하여, 데이터가 수신될 때 까지 `#fallback`으로 Spinner 등을 보여줘야 한다. 데이터 페치 함수를 onMounted() 밖에서 호출하면 created 전에 데이터가 준비되는 것으로 추측할 수 있고, onMounted 안에서 호출하면 created 후에 데이터가 준비되는 것으로 추측할 수 있다. 즉, 클라이언트 전용 컴포넌트로 동작하게 되는 것으로 추정을 해볼 수 있다. 이 같은 사실이 맞는 것인지는 아직 확실하지 않다.

## withDefaults

`defineProps` 함수에는 default 값을 설정할 수 없었기 때문에, `defineProps` 함수를 사용하여 프로퍼티를 정의한 후, `withDefaults` 함수를 사용하여 기본값을 설정해야 한다.

```vue
<script setup lang="tsx">
interface MagazineProps { title: string; }

const props = withDefaults(defineProps<MagazineProps>(), {
    title: "Untitled",
});
</script>
```

이때 취할 수 있는 가장 깔끔한 코드는 위와 같다.