import { createGlobalStyle } from "styled-components";
// 처음에 const { createGlobalStyle } = require("styled-components"); 로 자동입력
// 해당부분 누르고 convert to ES module 해주니까 import,from 위처럼 잘 수정되었다

const GlobalStyle = createGlobalStyle`
@font-face {
	font-family: "Pretendard-Light";
	src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Light.woff")
		format("woff");
	font-weight: 300;
	font-style: normal;
}

@font-face {
	font-family: "Pretendard-Regular";
	src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
		format("woff");
	font-weight: 400;
	font-style: normal;
}

@font-face {
	font-family: "Pretendard-Bold";
	src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Bold.woff")
		format("woff");
	font-weight: 700;
	font-style: normal;
}

@font-face {
	font-family: "Pretendard-Black";
	src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Black.woff")
		format("woff");
	font-weight: 900;
	font-style: normal;
}

  html { // body혹은html이라고 써줌으로써 전체에 적용
  display: flex;
  flex-direction: column; /* 내부 컨텐츠 세로 정렬 */
  align-items: center; /*이걸 해줘야 가로축 가운데 정렬 가능 (flex방향 column이라서*/
  margin: 0 auto 0;
  min-width: 800px;
  max-width: 1200px;
  min-height: 1000px;
  font-family: "Pretendard-Regular"; /*전체태그적용위해 필요*/
  background-color: rgb(250, 243, 231);
  // 이렇게 해주니까, 전체 div에 css줬을떄와 달리, 배경색도 전체적으로 적용이 되었다
  //(즉 가장큰 컨테이너크기가 넓어진, 감싸는?)
    }

  * {
      font-family: "Pretendard-Regular"; // 이걸 적용해야 form의 input,btn 등에도 폰트적용
  }
 
  header {
  width: 1110px;
  /*적용안돼 따로 부여*/
  display: flex;
  justify-content: space-between; /*자식요소의 양 끝과 부모요소 사이의 공간을 제외한 자식요소 사이의 간격을 일정하게 벌림 */
  margin-top: 30px;
  margin-bottom: 10px; 
    } 

  main {
  margin: 10px;
  width: 1110px;
  /*min,max말고 이렇게 딱 정해줘야 가운데에 온다 ..*/
  }

  input {
    height: 30px;
    font-size: 15px;
    margin-top: 15px;
    border-radius: 5px;
    border: 0px;
  }

  form {
	width: 100%;
	background-color: rgb(245, 203, 169);
	height: 70px;
	display: flex;
	justify-content: space-around; /*자식요소 기준 주위 공간을 일정 간격으로 벌림*/
	padding: 10px;
	border-radius: 15px;
  }

  button {
  font-size: medium;
	border-radius: 10px;
  }

  hr {
  height: 1px;
  background: rgb(229, 178, 253);
  border: 0;
  }
`;

export default GlobalStyle;
