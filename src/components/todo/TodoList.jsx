import React from "react";
import TodoItem from "./TodoItem";
import styled from "styled-components";

const TodoListBox = styled.div`
	${(props) => (props.type === "working" ? "none" : "margin-top: 100px")}
`;
// 근데 왜 위 마진50~을 주는걸로 적용하니, 적용되는 done부분만 hr태그가 굵어지는것?
// -> 100px 마진으로 더 띄어주니까 해결됐다
// ""안에 띄어쓰기도 중요! margin - top 이렇게 쓰면 인식못함
//이런주석은 백틱안에 안쓰는게. / ${(//props) => (props.type === "working" ? "" : "margin - top: 50px;")}
//안에 js문법 사용, css?부분은 ""문자열처럼 안에 써줘야 함 주의! / (props)=> 써주기

const List = styled.li`
	display: flex;
	margin-top: 10px;
	margin-left: 20px;
	/* 최대 최소넓이는 리스트 뜨는 부분에만 적용*/
	min-width: 800px;
	max-width: 1200px;
	min-height: 250px; /*이래야 카드없어도 어느정도 리스트높이유지*/
	flex-wrap: wrap; /*필수! 카드리스트 다음 줄 이동하게 해줌*/
`;

const ListTitle = styled.h2`
	font-size: x-large;
	font-weight: bold;
`;

function TodoList({
	children,
	type,
	todoList,
	deleteTodoHandler,
	onToggleTodoItem,
}) {
	// working type? 넘겨받으면.. 위 TodoList  스타일만 다르게.

	return (
		<TodoListBox type={type}>
			<ListTitle>{children}</ListTitle>
			<hr />
			<List>
				{todoList.map((todo) => {
					return (
						<TodoItem
							type={type}
							key={todo.id}
							todo={todo}
							title={todo.title}
							content={todo.content}
							deadline={todo.deadline}
							deleteTodoHandler={deleteTodoHandler}
							onToggleTodoItem={onToggleTodoItem}
						/>
					);
				})}
				{/*return문 안 js문법이라서 꼭 마지막 감싸는 {}중괄호 필요
                & {{todoList}.map .. 이미 큰중괄호안js문법이라 이중중괄호필요없음 그냥 {todoList.map..}
                이거땜에 안뜸 ㅠㅠ*/}
			</List>
		</TodoListBox>
	);
}

export default TodoList;
