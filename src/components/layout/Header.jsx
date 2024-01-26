import React from "react";

function Header() {
  /*const refreshPage = () => {
    window.location.reload(false);
  }; */
  // DOM제어문 그대로 window.location.reload하니까 작동안하고 위처럼 넣어주니까 됨(구글링)

  return (
    <header>
      {/*일반 div태그 -> h1태그로 변경*/}
      <h1 className="headerTitle">
        {/*onClick={refreshPage}새로고침기능 뺐다*/}
        💕 My To-Do List 🐾
      </h1>
      <h1 className="headerName">React 4기 서혜련</h1>
    </header>
  );
}

export default Header;
