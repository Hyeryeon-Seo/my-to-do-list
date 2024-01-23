import React, { useState } from "react";

import "./reset.css";
import "./App.css";
import CustomInput from "./components/Input";
import CustomBtn from "./components/CustomBtn";
import Todo from "./components/Todo";

function App() {
  const [todoList, setTodoList] = useState([
    // { id: 0, title: "", content: "", isDone: false },
    {
      id: 0,
      title: "리액트 강의 2회독하기",
      content: "1월 내로 리액트 강의내용 내 걸로 만들기 !",
      isDone: false,
    },
  ]);
  // 입력한 to-do를 담을 상태

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  // const [doneTodo, setDoneTodo] = useState([]);

  const onTitleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const onContentChangeHandler = (event) => {
    setContent(event.target.value);
  };

  // 추가하기 버튼 addTodoHandler
  const addTodoHandler = () => {
    const newTodo = {
      id: todoList.length,
      title: title, // input에 입력된 title,body - setTitle,setBody로 title,body 설정됨 (초기값에서)
      content: content,
      isDone: false,
    };
    setTodoList([...todoList, newTodo]);
  };

  // 추가 버튼 클릭 시 기존 input 빈칸의 글자 초기화
  const onSubmit = (e) => {
    setTitle(""); // title 초기화
    setContent(""); // body 초기화
    //기본이벤트(새로고침) 방지
    e.preventDefault();
  };

  const deleteTodoHandler = (id) => {
    const newTodoList = todoList.filter((todo) => todo.id !== id); // filter함수 사용, 받은 id의 todo가 아닌 것만 보여주기
    setTodoList(newTodoList);
  };

  // Done 버튼 (할 일 완료) => 해당id의 todo 의 key값, isDone의 value값을 false -> true 로 변경해야..
  const doneTodoHandler = (id) => {
    const newDoneTodo = {
      id: id,
      title: title,
      content: content,
      isDone: true,
    };
    setTodoList([...todoList, newDoneTodo]);
  };

  const cancelDoneTodoHandler = (id) => {
    const newWorkingTodo = {
      id: id,
      title: title,
      content: content,
      isDone: false,
    };
    setTodoList([...todoList, newWorkingTodo]);
  };

  return (
    <div className="app-container">
      <header>
        <div className="headerTitle">My To-do List</div>
        <div className="headerName">React 4기 서혜련</div>
      </header>
      <section>
        <form className="TodoInsert" onSubmit={onSubmit}>
          <div className="inputBox">
            <div className="inputText">제목</div>
            <CustomInput
              value={title}
              onChange={onTitleChangeHandler}
              placeholder=" title ..."
            />
          </div>
          <div className="inputBox">
            <div className="inputText">내용</div>
            <CustomInput
              value={content}
              onChange={onContentChangeHandler}
              placeholder=" content ..."
            />
          </div>
          <CustomBtn className="add-btn" onClick={addTodoHandler}>
            추가하기
          </CustomBtn>
        </form>
      </section>
      <main>
        <div className="workingTodoList">
          <div className="listTitle">Working 🏃‍♀️</div>
          <div className="list">
            {todoList
              .filter((todo) => todo.isDone === false)
              .map((todo) => {
                return (
                  <Todo
                    className="workingTodo-box"
                    todo={todo}
                    key={todo.id}
                    title={todo.title}
                    content={todo.content}
                    firstHandler={deleteTodoHandler}
                    secondHandler={doneTodoHandler}
                    firstBtn="삭제"
                    secondBtn="완료"
                  />
                );
              })}
          </div>
        </div>
        <div className="doneTodoList">
          <div className="listTitle">Done 🎉</div>
          <div className="list">
            {todoList
              .filter((todo) => todo.isDone === true)
              .map((todo) => {
                return (
                  <Todo
                    className="doneTodo-box"
                    key={todo.id}
                    title={todo.title}
                    content={todo.content}
                    firstHandler={deleteTodoHandler}
                    secondHandler={cancelDoneTodoHandler}
                    firstBtn="삭제"
                    secondBtn="완료 취소"
                  />
                );
              })}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
