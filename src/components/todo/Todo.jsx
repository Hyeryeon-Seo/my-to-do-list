import React from "react";
import CustomBtn from "./CustomBtn";
// 여기서 CustomBtn 사용해서..(CustomBtn으로 props 내려주기) import
//App.jsx 나 TodoController 등 상위 컴포넌트 - import하는게 아니다. 오히려 여기서 export해서 상위컴포넌트에서 import (여기서는 상위컴의 props 내려받아 사용)
function Todo(props) {
  const {
    type,
    todo,
    key,
    title,
    content,
    firstHandler,
    secondHandler,
    firstBtn,
    secondBtn,
  } = props; // 구조분해할당

  if (type === "working") {
    // === 주의
    return (
      // Working 리스트
      <div key={key} className="workingTodo-box">
        <div className="todoTitle">{title}</div>
        <div className="todoContent">{content}</div>
        <CustomBtn className="del-btn" onClick={() => firstHandler(todo.id)}>
          {firstBtn}
        </CustomBtn>
        <CustomBtn className="done-btn" onClick={() => secondHandler(todo.id)}>
          {secondBtn}
        </CustomBtn>
      </div>
    );
  } else {
    return (
      // Done 리스트
      <div key={key} className="doneTodo-box">
        <div className="todoTitle">{title}</div>
        <div className="todoContent">{content}</div>
        <CustomBtn className="del-btn" onClick={() => firstHandler(todo.id)}>
          {firstBtn}
        </CustomBtn>
        <CustomBtn
          className="working-btn"
          onClick={() => secondHandler(todo.id)}
        >
          {secondBtn}
        </CustomBtn>
      </div>
    );
  }
}

export default Todo;
