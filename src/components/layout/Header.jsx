import React from "react";
import styled from "styled-components";
// import GlobalStyle from "../../styles/GlobalStyle"; - 어쩌피 App.jsx로 이 컴포넌트
// import할거라서, 거기서 전역스타일링 쓰면 다 적용되니 여기서 적용할 필요 X

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
