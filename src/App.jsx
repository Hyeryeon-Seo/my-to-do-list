import React, { useState } from "react";

import "./reset.css";
import "./App.css";
// Todo 컴포넌트
import CustomInput from "./components/Input";
import CustomBtn from "./components/CustomBtn";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 0, title: "", content: "", isDone: false },
    { id: 1, title: "리액트뿌셔", content: "2회독가자", isDone: true },
  ]); // 띄울 todolist?
  // 입력한 to-do를 담을 상태

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  // const [done, setDone] = useState(false); // title, body처럼 isDone도 상태 변화하니까 state로 만들어줘야하나? - 근데 렌더링되나?
  // done은 화면상 렌더링 아니고 걍 value값을 바꿔주면 되는 거 아닐까 ? (state가 아니고)
  const [doneTodo, setDoneTodo] = useState([]);

  // const workingTodoList = todoList.filter((todo) => todo.isDone === false);
  // const doneTodoList = todoList.filter((todo) => todo.isDone === true);
  // 이렇게 하면 doneTodoList에 맞게 뜬다, 근데 그냥 working에도 뜨고. => 그래서 마찬가지로 workingTodoList 생성
  // 근데문제가 렌더링을 하려면, todolist - state 여야할듯?  (맞는듯. 반영이 안됨.. done버튼 등 눌러도 내용은 변하지만)
  // 위 변수는 렌더링 안되는 문제! (바뀌었는데 화면상 반영이 안됨..)  변수화를 애초에 하면 안되고 걍 오른쪽처럼 쭉 써야하나.
  //todoList 자체는 state니까
  // 근데 아래에서 newToDoList는 변수선언 -> 근데 그건 변할 게 없으니까 (이미 new todo 들어온걸로 고정.)

  // 즉 위에걸,  setTodolist로 그냥 갈아끼워주기?  ??
  // 근데 working과 done 나누긴해야

  // 근데 filter를 쓰든, 아니면 map함수에서 if(isDone..)조건 붙여서 쓰기도하는듯?

  const onTitleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const onContentChangeHandler = (event) => {
    setContent(event.target.value);
  };

  // 추가하기 버튼 addTodoHandler
  const addTodoHandler = () => {
    // check validaton  유효성 검사?
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

  // Done 버튼 (할 일 완료) => 해당id의 todo 의 key값, isDone의 value값을 false -> true 로 변경
  const doneTodoHandler = (id) => {
    const newDoneTodo
    // Done 구역에 뜨도록 렌더링 ? 되어야
    // 이버튼 누를 당시의 id (아래에서보면, map함수로 하나하나 돌고있던 중)
    // id받았는데 그럼 map이나 filter써야?
    //setDone(true); //setDone 메서드는 done 상태를 바꿔줄 수 있음 - 우선 해당 id의 객체를 가져와야? 위에 filter했듯이(delete핸들러)
    // id 일치하면 true로 바꿔줘야하나..여튼 그럼 todoList를 따로 써주긴해야할듯? 거기서 todo뽑아서.. todo객체가 우선 필요
    // todoList.filter((todo) => {todo.id === })
    // todoList[id].setDone(true); => 에러 // [id=index]니까 이걸로 접근해서 해당 객체 하나(todo?)에서 setDone?..
    console.log(todoList[id].isDone); // 콘솔찍어보면 그대로 false임   ?!?
    // const doneTodoList = todoList.filter((todo) => todo.isDone === true); // 여기서 선언 맞나
    // setTodoList(doneTodoList); // done to-do list 보여주기 (set..으로 갈아끼우기) -> done아닌 working to-do도 다 보여줘야하는데
    // done으로 아예 todolist를 갈아끼우는 건 아닌거같다.  => 그래서 done 완료버튼 누르면 다 사라지는듯 (근데 donetodolist에 아무것도 없는상태?왜지)
    // 글고 done버튼 눌렀으면 그것만 isDone : true로 변경해주면되지, 왜 전체리스트를 건듬? ..아닌가

    //todoList[id].isDone = true; 왜 에러나지 변경됐었는데// done버튼,완료되었으니까, 해당 객체 key의 value값 변경 (=로변경하는 거 맞음)
    // 그러나 이걸론 부족! true로 변경되지만, doneTodoList에 반영 x 변화 x
    // true로 값 바뀐 건 맞는데, 화면에 렌더링 하려면 todoList에 set메서드 써야 하는 것일까? (위 add경우처럼) 변경된거 반영

    // 아 done, working list 따로 나누는게 아니고, 그냥 함수 만들어서 거기서 toggle 기능.  삼항연산자로
    // isDone ?  :  이렇게 써야하는지도
    // const newDoneTodo = {
    //   id: dt.id,
    //   title: dt.title,
    //   content: dt.content,
    // };

    setTodoList(todoList);
  };

  const cancelDoneTodoHandler = (id) => {};

  return (
    <div className="app-container">
      <header>
        <div>My To-Do List</div>
        <div>React 4기 서혜련</div>
      </header>
      <section>
        <form className="TodoInsert" onSubmit={onSubmit}>
          <div className="inputBox">
            <div className="inputText">제목</div>
            <CustomInput
              //type="text" 써줄 필요 없는? (props)
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
          <div>
            {todoList
              .filter((todo) => todo.isDone === false)
              .map((todo) => {
                // return <div>{todo}</div>; => 에러 // 그냥 todo 객체를 <div>사이 넣어서 리턴할 게 아니라, key로 뽑아야. / {} 써줘야
                return (
                  //ㅜ 원래 여기에 return이 들어가나.. map함수 => {} 그냥 리턴 필요없지만, 실제로 이 안을 실행하는게 아니라
                  // 이걸 뱉어야(반환)하기때문인걸까.
                  <div key={todo.id} className="workingTodo-box">
                    <div>{todo.title}</div>
                    <div>{todo.content}</div>
                    <CustomBtn
                      className="del-btn"
                      onClick={() => deleteTodoHandler(todo.id)} // 이렇게 쓰는거 이해안됨 다시
                    >
                      {/*어렵다..onClick={({todo.id}) => deleteTodoHandler()}  위엔 또 todo.id에 {} 필요없나*/}
                      삭제
                    </CustomBtn>
                    <CustomBtn
                      className="done-btn"
                      onClick={() => doneTodoHandler(todo.id)}
                    >
                      완료
                    </CustomBtn>
                    {/*done어렵다 */}
                  </div>
                );
              })}
          </div>
        </div>
        <div className="doneTodoList">
          <div className="listTitle">Done 🎉</div>
          <div>
            {/* doneTodoList 따로 여기서 불러도되나 함수안에선언됐는데 => 역시 에러. not defined로 뜸
             {doneTodoList.map((todo) => {  그게아니고, 원래의 todoList에서- isDone=true 인 것들만 불러와야
             그냥 doneTodoList 같은거 또 선언 밖에.. 
             아래랑 위 처럼 했는데 완료 버튼 누르면 그냥 모든목록 다! 사라짐*/}
            {todoList
              .filter((todo) => todo.isDone === true) // filter메서드로, 이 조건 하에서 나타내기,
              .map((todo) => {
                // 그리고 그 조건 하의 배열의 요소 하나하나 도는 것
                return (
                  <div key={todo.id}>
                    <div>{todo.title}</div>
                    <div>{todo.content}</div>
                    <CustomBtn
                      className="del-btn"
                      onClick={() => deleteTodoHandler(todo.id)}
                    >
                      삭제
                    </CustomBtn>
                    <CustomBtn
                      className="working-btn"
                      onClick={() => cancelDoneTodoHandler(todo.id)}
                    >
                      완료 취소
                    </CustomBtn>
                  </div>
                );
              })}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
