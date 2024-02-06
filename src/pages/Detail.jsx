import React from "react";
import Header from "../components/layout/Header";
import { useNavigate, useParams } from "react-router-dom";
import * as S from "../styles/TodoStyle";

const Detail = ({ todoList }) => {
	const { todoId } = useParams();

	const navigate = useNavigate();
	const selectedTodo = todoList.find((todo) => todo.id.toString() === todoId); // {}쓰고 return을 쓰든지, 그냥 => return없이 쓰든지

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
			<S.TodoBtnBox></S.TodoBtnBox>
		</div>
	);
};

export default Detail;
