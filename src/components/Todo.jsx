import React from "react";
import "../App.jsx"; // App.jsx의 함수 등 사용
import CustomBtn from "./CustomBtn";
// 여기서 CustomBtn 사용해서..(CustomBtn으로 props 내려주기) import
function Todo(props) {
  const {
    className,
    todo,
    key,
    title,
    content,
    firstHandler,
    secondHandler,
    firstBtn,
    secondBtn,
  } = props; // 구조분해할당

  if (className === "workingTodo-box") {
    return (
      // Working 리스트
      <div key={key} className="workingTodo-box">
        <div className="todoTitle">{title}</div>
        <div className="todoContent">{content}</div>
        <CustomBtn className="del-btn" onClick={() => firstHandler(todo.id)}>
          {/* 꼭 todo.id..로 todo넘겨서 해야하나?_됨  /  key로 받으면 안되나.. 안되는듯 */}
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
        <CustomBtn
          className="del-btn"
          onClick={() => firstHandler(todo.id)} // 이렇게 쓰는거 이해안됨 다시
        >
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
