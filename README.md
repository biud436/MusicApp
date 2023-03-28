# Introduction

## Store
- store 폴더가 아닌, composables 폴더에 store를 생성해야 한다.
- 전역 함수 `$fetch`를 사용하여 스토어 내에서 데이터를 가져올 수 있다.

## Composable & Composition API
- 리액트의 훅에서 영감을 받은 것으로 재사용 가능한 로직을 모듈화하여 사용할 수 있고 Reactive한 데이터를 만들 수 있다.
- 기존의 Option API를 계속 사용할 수도 있지만, 리액트 개발자 유입과 코드 재사용성 등으로 인해 최근 동향을 보면 Composition API로만 작성되는 것으로 보여진다. 

## Store의 합성
- Composable로 Store를 만들어서 여러 컴포넌트에 상태를 공유할 수 있다.

## provide() & inject()
- React의 Context와 비슷한 개념으로 상위 컴포넌트에서 하위 컴포넌트로 데이터를 전달할 수 있다.