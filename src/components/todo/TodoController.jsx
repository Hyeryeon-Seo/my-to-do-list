import React from "react";

function TodoController() {
  return (
    <main>
      <form className="TodoInsert" onSubmit={onSubmit}>
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
        <CustomBtn className="add-btn" onClick={addTodoHandler}>
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
                    // 문제점: working부분에선 했으나, done부분에서는 todo={todo} 안넘김!
                    /*className="doneTodo-box"*/
                    type="done" // 개선
                    key={todo.id}
                    todo={todo} // 개선: 추가 - todo넘기기
                    title={todo.title}
                    content={todo.content}
                    firstHandler={deleteTodoHandler}
                    secondHandler={cancelDoneTodoHandler}
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
