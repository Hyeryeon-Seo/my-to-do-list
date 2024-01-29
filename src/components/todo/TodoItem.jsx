import React from "react";
import CustomBtn from "./CustomBtn";

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

  let dateDeadline = "";
  let deadlineText = "";
  if (!deadline) {
    // 넘겨받은 deadline이 없는 경우
    deadlineText = "마감일 미정";
  } else {
    dateDeadline = new Date(deadline).toLocaleDateString("ko-KR", {
      year: "2-digit",
      month: "long",
      day: "numeric",
    });
    deadlineText = dateDeadline + "까지";
  }

  if (type === "working") {
    // === 주의
    return (
      // Working 리스트 아이템
      <ul key={key} className="workingTodo-box">
        <div className="todo-main">
          <h2 className="todoTitle">{title}</h2>
          <p className="todoContent">{content}</p>
          <time className="todoDeadline">{deadlineText}</time>
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
          <time className="todoDeadline">{deadlineText}</time>
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
