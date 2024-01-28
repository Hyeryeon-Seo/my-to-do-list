# 📝 My Todo List 페이지 (React) 🐾

24.1.22 ~ 1.23 개인 프로젝트 + 1.25 ~ 개선 및 수정

### 🔗 vercel을 통한 리액트 사이트 배포 - URL : https://my-to-do-list-ecru.vercel.app/

### 📌 기능 구현 상태

- 추가하기 버튼 기능 구현 완료
- 삭제 버튼 기능 구현 완료 (filter메서드 사용)
- 완료, 완료 취소 버튼 구현하지 못함 -> 구현 완료 (toggle형식으로 완료<->취소 전환)

- useState hook 사용
- Component 분리, props로 데이터 전달
- filter, map 등의 배열 메서드 활용
- 중복 가능성없는 고유한 id 부여로 수정 (crypto.randomUUID())
- form 태그 유효성 검사 기능 추가, 추가/제출되었을 시 input값 초기화

- 카드레이아웃 개선: flex 등 활용, css - flex-wrap으로 카드 줄바꿈 추가
- 마감일(날짜) 추가 (input태그와 카드에 표시)

- 마감날짜 기준으로 오름차/내림차순 정렬 => **미완성** (내림차순 정렬 기능 가능은 함)

## 📌 기능 설명 - 컴포넌트 분리

- TodoItem.jsx
- CustomInput.jsx
- CustomBtn.jsx
- Header.jsx 추가
- TodoController.jsx 추가
- TodoForm.jsx 추가

💡

- App컴포넌트 > Header컴포넌트와 TodoCotroller컴포넌트만으로 구성해 간소화
- TodoController컴포넌트 > TodoForm, TodoItem컴포넌트 사용해 구성, 주요 기능 담당
- TodoForm > CustomInput, CustomBtn 컴포넌트 사용해 구성
- TodoItem컴포넌트 > CustomBtn 컴포넌트 사용해 구성
