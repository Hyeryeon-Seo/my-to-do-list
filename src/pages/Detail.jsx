import React from "react";
import Header from "../components/layout/Header";
import { useNavigate, useParams } from "react-router-dom";
import * as S from "../styles/TodoStyle";

const Detail = ({ todoList }) => {
	//REVIEW - 허걱 여기서 {id}로받아와서 쓰니까 에러가 났다. (TodoItem에서 useNavigate 주소에서는
	// id상관없었는데) Router에서의 파라미터로 주는 todoId가 같아야 하는 것일까?!
	// )
	const { todoId } = useParams(); // 파라미터 받은 걸 id로 부르고
	/* REVIEW 그냥 const params = useParams()라고하면 해당 객체를 params 변수에 담음
     /:id 이고 id가 1이라면 {id:1} 값이 나오는 것 (이 객체가 params에)
     => 구조분해할당 잘 이해할것! (js기본다지기) 그냥 변수로 담으면 객체가 담기므로 아래에서 그대로 id
     로써서 === 비교할 수 없다.  그런데 구분할을 할거면, 해당 객체의 key값과 변수명이 동일해야 !
     즉 Router에서 주는 파라미터명, todoId와 동일한 변수명으로 구분할 해야한다
    */
	const navigate = useNavigate();
	//파라미터 id에 해당하는 todo 카드 하나만 가져오기
	const selectedTodo = todoList.find((todo) => todo.id == todoId); // {}쓰고 return을 쓰든지, 그냥 => return없이 쓰든지
	//console.log({ selectedTodo }); // id=0인 todolist초기값에담긴 객체만 undefined로 뜸
	// console.log({ todoList }); 리스트도 잘떴다. 혹시나해서 다른카드 추가후 확인해보니 추가된todo클릭시 잘뜸
	// REVIEW 해결! 잠깐 - 파라미터 문자열로 넘어오는거같은데. 추가된객체는 id가 문자열이지만, 초기todo는 id 숫자임 0

	// 홈 화면으로 이동
	const onClickHomeHandler = () => {
		navigate("/");
	};

	return (
		<div>
			<Header />
			<S.HomeBtnBox>
				<S.BigBtn onClick={onClickHomeHandler}>HOME</S.BigBtn>
			</S.HomeBtnBox>
			<S.DetailWrapper>
				<S.DetailBox>
					<S.TodoDetailBox>
						<S.TodoTitle>{selectedTodo.title}</S.TodoTitle>
						<S.TodoContent>{selectedTodo.content}</S.TodoContent>
						<S.TodoDeadline>{selectedTodo.deadlineText}</S.TodoDeadline>
					</S.TodoDetailBox>
				</S.DetailBox>
			</S.DetailWrapper>
			<S.TodoBtnBox>
				{/*<S.BtnDelDone onClick={() => deleteTodoHandler(todo.id)} type="delete">
					삭제
				</S.BtnDelDone>
				<S.BtnDelDone onClick={() => onToggleTodoItem(todo.id)} type="isDone">
					{type === "working" ? "완료" : "완료 취소"}
				</S.BtnDelDone>*/}
			</S.TodoBtnBox>
		</div>
	);
};

export default Detail;
