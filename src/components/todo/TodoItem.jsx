import React from "react";
import { Link, useNavigate } from "react-router-dom";
import * as S from "../../styles/TodoStyle";

function TodoItem(props) {
	const {
		type,
		todo,
		title,
		content,
		deadline,
		deleteTodoHandler,
		onToggleTodoItem,
	} = props; // 구조분해할당

	const navigate = useNavigate();

	let dateDeadline = "";
	let deadlineText = "";
	if (deadline === 9999 - 12 - 31) {
		// 넘겨받은 deadline이 없는 경우 (미정)
		deadlineText = "마감일 미정";
	} else {
		dateDeadline = new Date(deadline).toLocaleDateString("ko-KR", {
			year: "2-digit",
			month: "long",
			day: "numeric",
		});
		deadlineText = dateDeadline + "까지";
	}

	// 클릭 시 상세페이지로 (id를 파라미터로)
	// const onClickTodoHandler = (id) => {
	// 	navigate(`/${id}`); // Router에서 /detail/..로 설정안했음 주의
	// 	// Rotuer에서 지정한 /:todoId .. 파라미터명과일치해야하나? => 상관없음
	// 	// 여기선 걍 받아오는 인자 id 가 navigate에 쓰이는 id 같으면 될 뿐
	// 	// (여기서 todo.id 가 숫자더라도, 문자열로 들어가게된다 ``안)
	// };

	return (
		<S.TodoBox key={todo.id}>
			<S.TodoLink to={`${todo.id}`}>
				<S.TodoTextBox type={type}>
					<S.TodoTitle>{title}</S.TodoTitle>
					<S.TodoContent>{content}</S.TodoContent>
					<S.TodoDeadline>{deadlineText}</S.TodoDeadline>
				</S.TodoTextBox>
				<S.TodoBtnBox>
					<S.BtnDelDone
						onClick={() => deleteTodoHandler(todo.id)}
						type="delete"
					>
						삭제
					</S.BtnDelDone>
					<S.BtnDelDone onClick={() => onToggleTodoItem(todo.id)} type="isDone">
						{type === "working" ? "완료" : "완료 취소"}
					</S.BtnDelDone>
				</S.TodoBtnBox>
			</S.TodoLink>
		</S.TodoBox>
	);
}

export default TodoItem;
