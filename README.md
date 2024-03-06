# 📝 My Todo List 페이지 (React) 🐾

24.1.22 ~ 1.23 개인 프로젝트 + 1.25 ~ 개선 및 수정

- 2.1 추가 수정 (컴포넌트구성 등 변경, CSS->styled components 사용)

### 🔗 vercel을 통한 리액트 사이트 배포 - URL : https://my-to-do-list-ecru.vercel.app/

<br>

### Branches
- **main** : props-drilling / 디자인: styled-components  활용
- **json-server/axios** : json-server, axios 활용 시도

  <br>
------------

## 📌 기능 구현 상태

- 추가하기 버튼 기능 구현 완료
- 삭제 버튼 기능 구현 완료 (filter메서드 사용)
- 완료, 완료 취소 버튼 구현하지 못함 => 구현 완료 (toggle형식으로 완료<->취소 전환)

- useState hook 사용
- Component 분리, props로 데이터 전달
- filter, map 등의 배열 메서드 활용

  <br>

- 중복 가능성없는 고유한 id 부여로 수정 (crypto.randomUUID())
- form 태그 유효성 검사 기능 추가, 추가/제출되었을 시 input값 초기화

  <br>

- (추가과제)

  - 카드레이아웃 개선: flex 등 활용, css - flex-wrap으로 카드 줄바꿈 추가
  - 마감일(날짜) 추가 (input태그와 카드에 표시)

    <br>

  - 마감날짜 기준으로 오름차/내림차순 정렬

    - (가능하나 약간의 문제 - 처음에 '빠른 순' 먼저 택하면 적용 안됨)
    - 마감일 미정시 아예 몰아서 정렬시켜야 하는데, 아직까진 마감일 미정시 해당카드 그대로</br>
      => 2.1 마감일 미정인 카드끼리 모아 정렬되게 함 (마감일 순 정렬 선택 시 카드가 안움직여서 중간에 섞이는 일 X)

  - CSS 및 인라인 스타일링 => 모두 styled components 스타일링으로 변경 (컴포넌트 스타일링 마이그레이션, 글로벌 스타일 적용, props를 이용한 동적 스타일링
    </br> ~ 완료버튼 클릭 시 카드 내용 취소줄 기능)

<br>

### 📌 기능 설명 - 컴포넌트 분리

- TodoItem.jsx
- CustomInput.jsx
- ~~CustomBtn.jsx~~ (이후 삭제)
- Header.jsx 추가
- TodoController.jsx 추가
- TodoForm.jsx 추가

</br>
* 이후 수정</br></br>
  - TodoList.jsx 추가</br>
  - CustomOrderSelect.jsx 추가</br></br>
  - 폴더구조 변경: 
  src폴더 > components > common, layout, todo </br>

(자세한 사항은 아래 사진 참고 !)</br></br>
<img src="/assets/foldersScreenshot_0201.png" width="300"></br></br>

💡

- App컴포넌트 > Header컴포넌트와 TodoCotroller컴포넌트만으로 구성해 간소화
- TodoController컴포넌트 > TodoForm, TodoItem컴포넌트 (+ 추가: TodoList, CustomOrderSelect) 사용해 구성, 주요 기능 담당
- TodoForm > CustomInput, ~~CustomBtn~~ 컴포넌트 사용해 구성
- TodoItem컴포넌트 > ~~CustomBtn 컴포넌트 사용해 구성~~

<br>

## 📌시연 화면

- 23.02.01 디자인 추가 수정<br/><br/>
  <img src="/assets/mainScreenshot_0201.png" width="800"><br/><br/>

- todo 카드 추가하기 <br/><br/>
  <img src="/assets/GIF_add,submit.gif" width="800"> <br/><br/>
- todo 카드 삭제하기 <br/><br/>
  <img src="/assets/GIF_delete.gif"  width="800"> <br/><br/>

- todo 카드 완료<->완료취소 이동 <br/><br/>
  <img src="/assets/GIF_isdone.gif"  width="800"> <br/><br/>
- todo 마감일 선택 x 시 '마감일 미정'으로 뜨게 함 <br/><br/>
  <img src="/assets/GIF_unselectedDeadline.gif" width="800"> <br/><br/>
- todo 카드 목록을 마감일 빠른 순/느린 순으로 정렬하기 <br/><br/>
  <img src="/assets/GIF_sortOrder.gif" width="800">
