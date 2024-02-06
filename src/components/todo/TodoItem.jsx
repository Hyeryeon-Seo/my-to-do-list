import React, { useState } from "react";
import * as S from "../../styles/TodoStyle";

function TodoItem(props) {
	const {
		type,
		todo,
		title,
		content,
		deadline,
		// deadlineText,
		// setDeadlinetText,
		deleteTodoHandler,
		onToggleTodoItem,
	} = props; // 구조분해할당

	// const [deadlineText, setDeadlinetText] = useState(""); // useState사용으로 바꿔봄, 가능

	let dateDeadline = "";
	let deadlineText = "";
	if (deadline === 9999 - 12 - 31) {
		// 넘겨받은 deadline이 없는 경우 (미정)
		deadlineText = "마감일 미정";
		// setDeadlinetText("마감일 미정");
	} else {
		dateDeadline = new Date(deadline).toLocaleDateString("ko-KR", {
			year: "2-digit",
			month: "long",
			day: "numeric",
		});
		// setDeadlinetText(dateDeadline + "까지");
		deadlineText = dateDeadline + "까지";
	}

	return (
		<S.TodoBox key={todo.id}>
			<S.TodoLink to={`${todo.id}`}>
				<S.TodoTextBox type={type}>
					<S.TodoTitle>{title}</S.TodoTitle>
					<S.TodoContent>{content}</S.TodoContent>
					<S.TodoDeadline>{deadlineText}</S.TodoDeadline>
				</S.TodoTextBox>
			</S.TodoLink>
			{/* Link태그를 버튼까지 감싸버리면 버튼 작동 X */}
			<S.TodoBtnBox>
				<S.BtnDelDone onClick={() => deleteTodoHandler(todo.id)} type="delete">
					삭제
				</S.BtnDelDone>
				<S.BtnDelDone onClick={() => onToggleTodoItem(todo.id)} type="isDone">
					{type === "working" ? "완료" : "완료 취소"}
				</S.BtnDelDone>
			</S.TodoBtnBox>
		</S.TodoBox>
	);
}

export default TodoItem;
