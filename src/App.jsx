import React from "react";
import "./styles/reset.css";
import "./App.css";
import GlobalStyle from "./styles/GlobalStyle";
import Header from "./components/layout/Header";
import TodoController from "./components/todo/TodoController";

function App() {
  return (
    <>
      <GlobalStyle />
      {/*개선: Header와 나머지Body전체 컴포넌트화, App.jsx 간소화*/}
      <Header />
      <TodoController />
    </>
  );
}

export default App;
