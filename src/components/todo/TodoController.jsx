import React, { useState } from "react";
import CustomInput from "./Input";
import CustomBtn from "./CustomBtn";
import Todo from "./Todo";

function TodoController() {
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

  // input의 value값 가져오기
  // 개선: 이벤트핸들러함수명 컨벤션따라 변경
  const handleTitleInputChange = (event) => {
    setTitle(event.target.value);
  };

  // 개선: 이벤트핸들러함수명 컨벤션따라 변경
  const handleContentInputChange = (event) => {
    setContent(event.target.value);
  };

  // 추가하기 버튼 addTodoHandler
  const addTodoHandler = (newTodo) => {
    // 개선: setTodoList([...todoList, newTodo]);도 기능은 잘 되지만, 빠르게 제출 시 에러날 수 있어서
    // 그냥 todoList가 아닌, 버튼누른당시?의 prevTodoList를 넣어서 작동하게 한다 ?
    // => set메서드 안 콜백함수로 처리 & 받은 newTodo를 맨 앞에 오도록 처리
    setTodoList((prevTodoList) => [newTodo, ...prevTodoList]);
  };

  // form태그에 들어가는 함수: onSubmit
  // 이 안에 추가기능함수addTodoHandler에 인자넣어서 실행시킴 (유효성검사와 함께)
  // 추가 버튼 클릭 시 기존 input 빈칸의 글자 초기화
  const onSubmit = (e) => {
    //기본이벤트(페이지이동) 방지
    e.preventDefault();
    // setTitle(""); // title 초기화
    // setContent(""); // body 초기화

    // 개선: 유효성 검사 추가
    if (!title || !content) {
      alert("제목과 내용 모두 입력해주세요");
      return; // 아래 else없이 그냥 return이면 의미 없다
    } else {
      // 위의 경우가 아니라면 아래 실행
      // 아래 객체를 추가하기 함수에 넣어주기
      addTodoHandler({
        id: crypto.randomUUID(), // id: todoList.length -id 중복 가능성 -> 개선: 고유한id부여- Date.now()도 가능 & crypto.randomUUID() 사용
        title: title, // input에 입력된 title,body - setTitle,setBody로 title,body 설정됨 (초기값에서)
        content: content,
        isDone: false,
      });
    }
    e.target.reset(); // 개선(다른방법): form태그 내 (제출시) input 초기화 _form태그로 가능한 메서드
  };

  // 삭제 버튼: filter메서드로 해당id의 카드빼기
  const deleteTodoHandler = (id) => {
    // const newTodoList = todoList.filter((todo) => todo.id !== id); // filter함수 사용, 받은 id의 todo가 아닌 것만 보여주기
    setTodoList((prevTodoList) =>
      prevTodoList.filter((todo) => todo.id !== id)
    ); // 개선: setTodoList()안 콜백함수 (에러방지)
  };

  // Done 완료&완료취소 버튼 (토글)=> 해당id의 todo 의 key값, isDone의 value값을 false <-> true 로 변경해야
  const onToggleTodoItem = (id) => {
    // 개선: 위와 마찬가지로 set..()안 콜백함수 /
    // 단순 추가, 혹은 filter로 삭제기능 구현과 달리
    // 완료,완료취소 기능은 하나의 todo객체 안에서 수정해야 (삭제에서 filter썼듯 여기는 map을 쓰며 돌아야)
    //setTodoList를 쓴다는건, 다시 새로운 list로 바꿔야하는건데 해당id의객체 isDone만 바꿔서 갈아끼운거 보내줘야
    setTodoList((prevTodos) =>
      prevTodos.map((todo) => {
        if (todo.id === id) {
          // 해당 객체 속성 바꿔서 리턴
          return { ...todo, isDone: !todo.isDone }; // todo의 키isDone의 밸류값_반대로 넣어주기
          // todo.isDone = !todo.isDone; 만 하면 작동안됨! ㅠㅠ 꼭 나머지객체부분도 ...으로 풀고, isDone바꿔야
        }
        return todo;
        // 위의 if조건에 해당할때만 isDone바꿔주고 나머지는 그냥 todo그대로 리턴
      })
    );
  };

  return (
    <main>
      {/*여기선 일단 form태그자체는 컴포넌트화 X, 그 안의 input만 컴포넌트화했다 */}
      <form onSubmit={onSubmit}>
        <div className="inputBox">
          <div className="inputText">제목</div>
          <CustomInput
            value={title}
            onChange={handleTitleInputChange}
            placeholder=" title ..."
          />
        </div>
        <div className="inputBox">
          <div className="inputText">내용</div>
          <CustomInput
            value={content}
            onChange={handleContentInputChange}
            placeholder=" content ..."
          />
        </div>
        {/* 아래버튼 속성 onClick={addTodoHandler}을 없애고
        대신 type="submit"을 넣고, 
        form태그에 연결된 함수 onSubmit안에서 유효성검사와 함께
        추가기능 처리하도록 함*/}
        <CustomBtn className="add-btn" type="submit">
          추가하기
        </CustomBtn>
      </form>
      <section>
        <div className="workingTodoList">
          <div className="listTitle">Working 🏃‍♀️</div>
          <div className="list">
            {todoList
              .filter((todo) => todo.isDone === false)
              .map((todo) => {
                return (
                  <Todo
                    /*className="workingTodo-box"*/
                    type="working" // 개선: className말고 type으로 구분하도록 한다 (Todo컴포넌트에서)
                    key={todo.id}
                    todo={todo}
                    title={todo.title}
                    content={todo.content}
                    firstHandler={deleteTodoHandler}
                    secondHandler={onToggleTodoItem}
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
                    // 문제점: working부분에선 했으나, done부분에서는 todo={todo} 안넘김!
                    /*className="doneTodo-box"*/
                    type="done" // 개선
                    key={todo.id}
                    todo={todo} // 개선: 추가 - todo넘기기
                    title={todo.title}
                    content={todo.content}
                    firstHandler={deleteTodoHandler}
                    secondHandler={onToggleTodoItem}
                    firstBtn="삭제" //이 key를 통해 "삭제" 문자열을 꺼낼수
                    secondBtn="완료 취소"
                  />
                );
              })}
          </div>
        </div>
      </section>
    </main>
  );
}

export default TodoController;
