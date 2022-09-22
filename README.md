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


#### Reference
- [jsdoc.app](https://jsdoc.app)
- [to-do 챌린지 과제](https://gist.github.com/pocojang/3c3d4470a3d2a978b5ebfb3f613e40fa)
