### 어떠한 관점에서 역할과 책임에 따라 관심사를 분리하였는지 리뷰어에게 설명할 수 있어야 해요.

### 나만의 기준 성립

- 컴포넌트

  - 상태 기준으로 렌더링 되도록 하는 역할
  - 상태가 업데이트 되면 렌더링 되도록 분리
  - 부모 컴포넌트가 렌더링 되면 자식도 렌더링 되도록 설정

- 라우터

  - 도메인 로직과 관련 없게 제작

- 비동기 통신
  - fetch를 활용해서 제작
  - 비동기 에러는 throw를 통해서 에러 메세지가 되도록 제자

### 컴포넌트 요구사항

- [ ] 상태가 업데이트 되면 렌더링이 발생된다.
- [ ] 부모 컴포넌트가 업데이트 되면 자식 컴포넌트들이 렌더링 된다.

### 라우터 요구사항

- [ ] 현재 url에 맞는 화면을 보여준다.
- [ ] 주소가 변경 될때마다 url도 같이 변경된다.
- [ ] 앞으로/뒤로 가가 기능
