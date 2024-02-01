import React from "react";
import styled from "styled-components";

const TodoBox = styled.ul`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin-top: 20px;
	background-color: rgb(255, 233, 205);
	border: none;
	border-radius: 5px;
	width: 255px;
	margin-right: 15px;
	&:hover {
		box-shadow: 0px 0px 3px 1px lightcoral;
	}
`;

const TodoTextBox = styled.div`
	text-decoration: ${(props) =>
		props.type === "working" ? "none" : "line-through gray"};
	display: flex;
	flex-direction: column;
	gap: 1rem;
	word-wrap: break-word;
	/*영어만 제목에서 줄바꿈안되는 현상 발견 > 영어,단어기준- 이걸해야만 영어글자 삐져나옴에 적용돼 해결! */
`;

const TodoTitle = styled.h2`
	font-size: 25px;
	font-weight: bold;
	margin: 20px 15px 0 15px;
	line-height: 1.5em;
`;

const TodoContent = styled.p`
	margin: 0 20px 10px 20px;
	line-height: 1.5em;
	min-height: 20px;
`;

const TodoDeadline = styled.time`
	margin: 20px 20px 10px auto;
	color: rgb(73, 65, 70);
	width: 90%;
	text-align: end; /*width %와 같이써야 적용*/
	font-size: 15px;
`;

const TodoBtnBox = styled.div`
	display: flex;
	justify-content: space-between;
`;

const BtnDelDone = styled.button`
	background-color: rgb(250, 243, 231);
	width: 100px;
	height: 30px;
	border: 2px solid rgb(223, 173, 168);
	margin: 10px 10px 20px 10px;
	&:hover {
		color: white;
		background-color: ${(props) =>
			props.type === "delete" ? "rgb(250, 95, 67)" : "rgb(104, 104, 250)"};
	}
`;

function TodoItem(props) {
	const {
		type,
		todo,
		key,
		title,
		content,
		deadline,
		deleteTodoHandler,
		onToggleTodoItem,
	} = props; // 구조분해할당

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

	return (
		<TodoBox key={key}>
			<TodoTextBox type={type}>
				<TodoTitle>{title}</TodoTitle>
				<TodoContent>{content}</TodoContent>
				<TodoDeadline>{deadlineText}</TodoDeadline>
			</TodoTextBox>
			<TodoBtnBox>
				<BtnDelDone onClick={() => deleteTodoHandler(todo.id)} type="delete">
					삭제
				</BtnDelDone>
				<BtnDelDone onClick={() => onToggleTodoItem(todo.id)} type="isDone">
					{type === "working" ? "완료" : "완료 취소"}
				</BtnDelDone>
			</TodoBtnBox>
		</TodoBox>
	);
}

export default TodoItem;
