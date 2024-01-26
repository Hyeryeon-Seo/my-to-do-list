import React from "react";
import "./reset.css";
import "./App.css";
import Header from "./components/layout/Header";
import TodoController from "./components/todo/TodoController";

function App() {
  return (
    <div className="app-container">
      {/*개선: Header와 나머지Body전체 컴포넌트화, App.jsx 간소화*/}
      <Header />
      <TodoController />
    </div>
  );
}

export default App;
