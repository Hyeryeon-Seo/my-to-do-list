import "./App.css";
import React, { useState } from "react";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 0, title: "", body: "", isDone: false },
  ]); // 띄울 todolist?
  // 입력한 to-do를 담을 상태

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [done, setDone] = useState(false); // title, body처럼 isDone도 상태 변화하니까 state로 만들어줘야하나?

  const doneTodoList = todoList.filter((todo) => todo.isDone === true);

  const onTitleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const onBodyChangeHandler = (event) => {
    setBody(event.target.value);
  };

  // 추가하기 버튼 onSubmitHandler
  const onSubmitHandler = () => {
    const newTodo = {
      id: todoList.length,
      title: title, // input에 입력된 title,body - setTitle,setBody로 title,body 설정됨 (초기값에서)
      body: body,
      isDone: false,
    };
    setTodoList([...todoList, newTodo]);
  };

  const deleteTodoHandler = (id) => {
    const newTodoList = todoList.filter((todo) => todo.id !== id); // filter함수 사용, 받은 id의 todo가 아닌 것만 보여주기
    setTodoList(newTodoList);
  };

  // Done 버튼 => 해당id의 todo 의 key값, isDone의 value값을 false -> true 로 변경
  const doneTodoHandler = (id) => {
    // id받았는데 그럼 map이나 filter써야?
    setDone(true);
    // const doneTodoList = todoList.filter((todo) => todo.isDone === true); // 여기서 선언 맞나
    setTodoList(doneTodoList); // done to-do list 보여주기 (set..으로 갈아끼우기)
  };

  return (
    <div className="app-container">
      <header>
        <div>My To-Do List</div>
        <div>React 4기 서혜련</div>
      </header>
      <section>
        <div className="inputTitle">
          제목
          <input
            type="text"
            value={title}
            onChange={onTitleChangeHandler}
            placeholder="title..."
          ></input>
        </div>
        <div className="inputContent">
          내용
          <input
            type="text"
            value={body}
            onChange={onBodyChangeHandler}
            placeholder="content..."
          ></input>
        </div>
        <button className="add-btn" onClick={onSubmitHandler}>
          추가하기
        </button>
      </section>
      <main>
        <div className="todoList">
          <div>Working</div>
          <div>
            {todoList.map((todo) => {
              // return <div>{todo}</div>; => 에러 // 그냥 todo 객체를 <div>사이 넣어서 리턴할 게 아니라, key로 뽑아야. / {} 써줘야
              return (
                //ㅜ 원래 여기에 return이 들어가나.. map함수 => {} 그냥 리턴 필요없지만, 실제로 이 안을 실행하는게 아니라
                // 이걸 뱉어야(반환)하기때문인걸까.
                <div key={todo.id}>
                  <div>{todo.title}</div>
                  <div>{todo.body}</div>
                  <button
                    className="del-btn"
                    onClick={() => deleteTodoHandler(todo.id)}
                  >
                    {/*어렵다..onClick={({todo.id}) => deleteTodoHandler()}  위엔 또 todo.id에 {} 필요없나*/}
                    삭제
                  </button>
                  <button
                    className="done-btn"
                    onClick={() => doneTodoHandler(todo.id)}
                  >
                    완료
                  </button>
                  {/*done어렵다 */}
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <div>Done</div>
          <div>
            {/* doneTodoList 따로 여기서 불러도되나 함수안에선언됐는데 => 역시 에러. not defined로 뜸
             {doneTodoList.map((todo) => {  그게아니고, 원래의 todoList에서- isDone=true 인 것들만 불러와야
             그냥 doneTodoList 같은거 또 선언 밖에.. */}
            {doneTodoList.map((todo) => {
              return (
                <div key={todo.id}>
                  <div>{todo.title}</div>
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
