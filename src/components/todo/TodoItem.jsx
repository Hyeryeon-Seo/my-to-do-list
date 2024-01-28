import React from "react";
import CustomBtn from "./CustomBtn";
// 여기서 CustomBtn 사용해서..(CustomBtn으로 props 내려주기) import
//App.jsx 나 TodoController 등 상위 컴포넌트 - import하는게 아니다. 오히려 여기서 export해서 상위컴포넌트에서 import (여기서는 상위컴의 props 내려받아 사용)
function TodoItem(props) {
  const {
    type,
    todo,
    key,
    title,
    content,
    deadline,
    firstHandler,
    secondHandler,
    firstBtn,
    secondBtn,
  } = props; // 구조분해할당

  let dateDeadline = ""; // 밖에서 선언해줘야. 재할당할거니 let
  if (!deadline) {
    // 넘겨받은 deadline이 없는 경우
    dateDeadline = "미정";
  } else {
    dateDeadline = new Date(deadline).toLocaleDateString("ko-KR", {
      year: "2-digit", // year- numeric, 2-digit 만 가능
      month: "long", // month 속성으로 "long","short"여야 년-월-일 뜸
      day: "numeric", // day- numeric, 2-digit
    });
  }

  if (type === "working") {
    // === 주의
    return (
      // Working 리스트 아이템
      <ul key={key} className="workingTodo-box">
        <div className="todo-main">
          <h2 className="todoTitle">{title}</h2>
          <p className="todoContent">{content}</p>
          <time className="todoDeadline">마감일 : {dateDeadline}</time>
        </div>
        <div className="todo-btns">
          <CustomBtn className="del-btn" onClick={() => firstHandler(todo.id)}>
            {firstBtn}
          </CustomBtn>
          <CustomBtn
            className="done-btn"
            onClick={() => secondHandler(todo.id)}
          >
            {secondBtn}
          </CustomBtn>
        </div>
      </ul>
    );
  } else {
    return (
      // Done 리스트 아이템
      <ul key={key} className="doneTodo-box">
        <div className="todo-main">
          <h2 className="todoTitle">{title}</h2>
          <p className="todoContent">{content}</p>
          <time className="todoDeadline">마감일 : {dateDeadline}</time>
        </div>
        <div className="todo-btns">
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
      </ul>
    );
  }
}

export default TodoItem;
