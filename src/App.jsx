import React, { useState } from "react";

import "./reset.css";
import "./App.css";
import Header from "./components/layout/Header";
import CustomInput from "./components/Input";
import CustomBtn from "./components/CustomBtn";
import Todo from "./components/Todo";

function App() {
  const [todoList, setTodoList] = useState([
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

  const handleTitleInputChange = (event) => {
    // 개선: 이벤트핸들러함수명 컨벤션따라 변경
    setTitle(event.target.value);
  };

  const handleContentInputChange = (event) => {
    // 개선: 이벤트핸들러함수명 컨벤션따라 변경
    setContent(event.target.value);
  };

  // 추가하기 버튼 addTodoHandler
  const addTodoHandler = () => {
    const newTodo = {
      id: crypto.randomUUID(), // id: todoList.length -id 중복 가능성 -> 개선: 고유한id부여- Date.now()도 가능 & crypto.randomUUID() 사용
      title: title, // input에 입력된 title,body - setTitle,setBody로 title,body 설정됨 (초기값에서)
      content: content,
      isDone: false,
    };
    setTodoList([...todoList, newTodo]);
  };

  // 추가 버튼 클릭 시 기존 input 빈칸의 글자 초기화
  const onSubmit = (e) => {
    //기본이벤트(페이지이동) 방지
    e.preventDefault();

    // setTitle(""); // title 초기화
    // setContent(""); // body 초기화
    e.target.reset(); // 개선(다른방법): form태그 내 (제출시) input 초기화 _form태그로 가능한 메서드
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
      <Header />{" "}
      {/*개선:Header와 나머지Body전체 컴포넌트화, App.jsx 간결하게 바꿈*/}
    </div>
  );
}

export default App;
