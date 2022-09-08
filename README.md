# TO-DO App Modeling

TO-DO 앱에 필요한 데이터를 JS-Doc으로 모델링한 프로젝트입니다.
사용되는 모든 함수는 선언부만 만들어져 있고, 함수 및 클래스의 내부는 구현하지 않았습니다.

## Todo
```JavaScript
Todo {
  아이디(required),
  내용(required),
  완료여부(required),
  카테고리(required),
  태그들(optional),
}
```

### CREATE
- 할 일을 추가할 수 있다.
- 내용없이 추가할 수 없다.
### READ
- 모든 할 일을 조회할 수 있다.
- ID를 기반으로 특정 할 일을 조회할 수 있다.
### UPDATE
- ID를 제외한 모든 속성을 수정할 수 있다.
- 특정 할 일의 특정 태그를 수정할 수 있다.
#### DELETE
- ID를 기반으로 특정 할 일을 삭제할 수 있다.
- 모든 할 일을 제거할 수 있다.
- 특정 할 일의 특정 태그를 삭제할 수 있다.
- 특정 할 일의 모든 태그를 제거할 수 있다.

### Modeling (Shape)
```JavaScript
Item {
  property(required),
  property(optional),
}
```

## Install

```bash
npm install
or
yarn
```

## Build

```bash
npm run docs
or
yarn docs
```

#### Reference
- [jsdoc.app](https://jsdoc.app)
- [to-do 챌린지 과제](https://gist.github.com/pocojang/3c3d4470a3d2a978b5ebfb3f613e40fa)
