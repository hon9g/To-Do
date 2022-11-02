# TO-DO App

TO-DO 앱에 필요한 데이터를 TS로 모델링하고 구현한 프로젝트입니다.
현재 UI를 통해 할 일을 추가하고, 완료여부를 업데이트 할 수 있습니다.

## Install

```bash
npm install
or
yarn
```

## Run w/ Dev env
```bash
npm run dev
```

## Build

```bash
npm run build
```

## Todo
```JavaScript
Todo {
  id: 아이디(required),
  description: 내용(required),
  isDone: 완료여부(required),
  category: 카테고리(required),
  tags: 태그들(optional),
}
```

### create
- 할 일을 추가할 수 있다.
- 내용(description)없이 추가할 수 없다.
### read
- ID를 기반으로 특정 할 일을 조회할 수 있다.

### readAll
- 모든 할 일을 조회할 수 있다.
### update
- ID를 제외한 모든 속성을 수정할 수 있다.
- 특정 할 일의 특정 태그를 수정할 수 있다.
### delete
- ID를 기반으로 특정 할 일을 삭제할 수 있다.

### deleteAll
- 모든 할 일을 제거할 수 있다.

### deleteTag
- 특정 할 일의 특정 태그를 삭제할 수 있다.

### deleteAllTag
- 특정 할 일의 모든 태그를 제거할 수 있다.

## Next To-do
추후에 다음과 같은 피쳐를 추가하려고 합니다. 우선순위가 높은 것부터 차례대로 나열했습니다.
1. 할 일 아이템을 삭제할 수 있다. (삭제는 메인 페이지에서 할 수 있다.)
2. 사용자 localStorage에 할일 목록을 저장해두어, 웹사이트에 재접속 했을 때 데이터가 유지되도록 한다.
3. 오늘까지 해야할 일을 `/today` 페이지에서 확인할 수 있다.
4. 사용자가 할 일 아이템의 카테고리와 태그를 설정 할 수 있다.
할 일 목록을 카테고리 별로 나누어 볼 수 있다.
5. 할 일 아이템에 태그를 노출한다. 
6. 할 일 아이템의 순서를 변경할 있다.

#### Reference
- [jsdoc.app](https://jsdoc.app)
- [to-do 챌린지 과제](https://gist.github.com/pocojang/3c3d4470a3d2a978b5ebfb3f613e40fa)
