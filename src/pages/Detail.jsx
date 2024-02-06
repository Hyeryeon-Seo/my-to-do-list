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
						<S.TodoContent>
							{selectedTodo.isDone ? "👍 완료 🎉" : "🏃‍♀️ 진행 중 🏃"}
						</S.TodoContent>
					</S.TodoDetailBox>
					<S.TodoDeadline>
						{selectedTodo.deadline === 9956
							? //마감일 미정시 9999-12-31로 대충 날짜 설정했는데 9956숫자로 뜸
							  "마감일 미정"
							: `마감일 : ${selectedTodo.deadline}`}
					</S.TodoDeadline>
				</S.DetailBox>
			</S.DetailWrapper>
			<S.TodoBtnBox></S.TodoBtnBox>
		</div>
	);
};

export default Detail;
