import { createGlobalStyle } from "styled-components";
// 처음에 const { createGlobalStyle } = require("styled-components"); 로 자동입력
// 해당부분 누르고 convert to ES module 해주니까 import,from 위처럼 잘 수정되었다

const GlobalStyle = createGlobalStyle`
    html { // body혹은html이라고 써줌으로써 전체에 적용
  display: flex;
  flex-direction: column; /* 내부 컨텐츠 세로 정렬 */
  align-items: center; /*이걸 해줘야 가로축 가운데 정렬 가능 (flex방향 column이라서*/
  margin: 0 auto 0;
  min-width: 800px;
  max-width: 1200px;
  min-height: 1000px;
  font-family: "Pretendard-Regular"; /*전체태그적용위해 필요*/
  background-color: rgb(255, 251, 226);
    }
 
    header {
  width: 1110px;
  /*적용안돼 따로 부여*/
  display: flex;
  justify-content: space-between; /*자식요소의 양 끝과 부모요소 사이의 공간을 제외한 자식요소 사이의 간격을 일정하게 벌림 */
  margin-top: 30px;
  margin-bottom: 10px; 
} 



`;

export default GlobalStyle;
