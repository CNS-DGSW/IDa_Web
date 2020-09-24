# IDa_Web

## 규칙

- `prettier` 사용

### PR & Merge

- 설정 셋팅 등 가벼운 경우가 아니라면 최소 1명 이상 리뷰 이후에 `Merge` 한다.
- npm 라이브러리를 추가하였다면, pr 설명에 왜 추가하였는지 작성한다.

### Commit Messge

[좋은 커밋 메시지 만들기](https://velog.io/@hyeong412/TIL-%EC%A2%8B%EC%9D%80-%EC%BB%A4%EB%B0%8B-%EB%A9%94%EC%84%B8%EC%A7%80-%EC%9E%91%EC%84%B1%ED%95%98%EA%B8%B0-)를 참고

- Ex) [FIX] Message

### Components

Components 폴더에서는 무조건 View 로직만 관리한다.

### Containers

비지니스 로직을 Container에서 작성한다. 만약 Component 에서 그 함수를 써야 한다면, Props로 전달하여 사용한다.

### Stores

전역으로 선언되어야 하는 `State` 혹은 Api를 받아와야 하는 경우, `assets/api` 안에 api 로직을 작성하여 호출하여 사용한다.

### Props

Props 를 사용하였다면, 무조건 `proptypes`를 통하여 타입을 정해주도록 한다.
