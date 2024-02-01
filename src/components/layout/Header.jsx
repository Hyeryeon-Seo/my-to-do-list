import React from "react";
import styled from "styled-components";
// import GlobalStyle from "../../styles/GlobalStyle";

const HeaderTitle = styled.h1`
  font-family: "Pretendard-Black"; /*두꺼운폰트적용*/
  font-size: 30px;
  font-weight: 900;
  margin-left: 20px;
  margin-top: 5px;
  margin-bottom: 10px;
`;

const HeaderName = styled.h1`
  font-family: "Pretendard-Light";
  font-size: 12px;
  margin-top: 20px;
  color: slategray;
`;

function Header() {
  return (
    <header>
      {/*일반 div태그 -> h1태그로 변경*/}
      <HeaderTitle>💕 My To-Do List 🐾</HeaderTitle>
      <HeaderName>React 4기 서혜련</HeaderName>
    </header>
  );
}

export default Header;
