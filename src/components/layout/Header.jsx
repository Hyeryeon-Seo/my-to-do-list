import React from "react";

function Header() {
  return (
    <header>
      {/*일반 div태그 -> h1태그로 변경*/}
      <h1 className="headerTitle">💕 My To-Do List 🐾</h1>
      <h1 className="headerName">React 4기 서혜련</h1>
    </header>
  );
}

export default Header;
