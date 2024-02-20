import React, { useContext, useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import CustomOrderSelect from "../common/CustomOrderSelect";
import TodoList from "./TodoList";
import styled from "styled-components";
import {
	createTodo,
	deleteTodo,
	getTodos,
	updateTodo,
} from "../../axios/todo-api";
import { TodoContext } from "../../context/TodoContext";
// 기존의 state ,  setTodos 등과 함께 헷갈림

function TodoController() {
	// + (기존 Router.jsx에서 [todoList, setTodolist] 로 useState사용하였으나)  - axios 사용하며 변경
	const [todo, setTodo] = useState({
		title: "",
		content: "",
		deadline: "",
		isDone: false,
	});
	const { todos, setTodos } = useState(null);
	// const { todos, setTodos } = useContext(TodoContext);

	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const [deadline, setDeadline] = useState("");
	const [sortOrder, setSortOrder] = useState("desc");

	// input의 value값 가져오기
	const handleTitleInputChange = (event) => {
		setTitle(event.target.value);
	};

	const handleContentInputChange = (event) => {
		setContent(event.target.value);
	};

	// 추가: input type="date" 의 value값 가져오기
	const handleDeadlineInputChange = (event) => {
		setDeadline(event.target.value);
		// console.log(event.target.value); 날짜형식확인-예시) 2024-02-01
		// if (!event.target.value) 혹은 (==="")
		// 위 if 경우는 날짜 눌렀다가 삭제시 뜸 (애초에 선택자체를 안하면 이함수가호출X)
	};

	// 추가: 마감날짜 오름차순 내림차순 정렬 드롭다운 메뉴 _select 설정시
	const handleSortOrderChange = (event) => {
		setSortOrder(event.target.value);
		sortTodoItems(sortOrder); //?
	};

	// todoItem 정렬하는 함수
	// 작동하지만 처음에 '빠른순'을 먼저 택하면 안먹힘 (느린순했다가 눌러야)
	// 그런데 오름차순 asc가 마감일 느린순? (아마 카드가 왼쪽부터 추가되다보니 방향이 바뀌어서 그런게 아닐까 -> 상관없음)
	// 마감일 입력x로 미정시, 그 카드들은 순서정렬자체가 안되는 문제 (그대로있음) -> 미정 시에도 9999-.. 날짜부여해서 해결
	// useEffect 사용 가능
	const sortTodoItems = () => {
		const newOrderDeadline = [...todos].sort((a, b) => {
			if (sortOrder === "asc") {
				// 다시 체크
				return new Date(a.deadline) - new Date(b.deadline);
			} else {
				return new Date(b.deadline) - new Date(a.deadline);
			}
		});
		setTodos(newOrderDeadline); // 정렬된 todoitem으로 todolist 상태 업데이트
	};

	// 추가하기 버튼 addTodoHandler
	const addTodoHandler = (newTodo) => {
		setTodos((prevTodos) => [...prevTodos, newTodo]); // +axios / but setTodos 등 todos state도 같이 바꿔줘야 화면에 렌더링!
	};

	// form태그에 들어가는 함수: onSubmit
	// 이 안에 추가기능함수addTodoHandler에 인자넣어서 실행시킴 (유효성검사와 함께)
	// 추가 버튼 클릭 시 기존 input 빈칸의 글자 초기화
	const onSubmit = (e) => {
		//기본이벤트(페이지이동) 방지
		e.preventDefault();

		// 개선: 유효성 검사 추가
		if (!title || !content) {
			alert("제목과 내용 모두 입력해주세요");
			return;
		} else if (!deadline) {
			// 추가
			const newTodo = {
				id: crypto.randomUUID(),
				title,
				content,
				deadline: 9999 - 12 - 31,
				isDone: false,
			};
			addTodoHandler(newTodo);
			setTitle("");
			setContent("");
			setDeadline("");
			createTodo(newTodo); // + axios api - 서버에
		} else {
			const newTodo = {
				id: crypto.randomUUID(),
				title,
				content,
				deadline,
				isDone: false,
			};
			addTodoHandler(newTodo);
			setTitle(""); //초기화 - 개선: else케이스 안에 넣어서 추가(제출)되었을때만 초기화시킴
			setContent("");
			setDeadline("");
			createTodo(newTodo); // + axios api - 서버에
		}
		getTodos(); // 상태 업데이트 (setTodos([...todos, todo] 할수도있지만))
	};

	// 삭제 버튼: filter메서드로 해당id의 카드빼기
	const deleteTodoHandler = (id) => {
		deleteTodo(id); // 서버의 todo항목 삭제
		setTodos(
			// 클라이언트 상태에서도 제거?
			todos.filter((item) => {
				return item.id !== id;
			})
		);
	};

	// Done 완료&완료취소 버튼 (토글)=> 해당id의 todo 의 key값, isDone의 value값을 false <-> true 로 변경해야
	const onToggleTodoItem = (id, todo) => {
		updateTodo(id, todo);
		setTodos((prevTodos) =>
			prevTodos?.map((todo) => {
				if (todo.id === id) {
					return { ...todo, isDone: !todo.isDone };
				}
				return todo;
			})
		);
	};

	const workingTodoList = todos?.filter((todo) => todo.isDone === false);
	const doneTodoList = todos?.filter((todo) => todo.isDone === true);

	// + axios
	// db로 부터 값 가져오기
	useEffect(() => {
		const data = getTodos();
		getTodos();
		setTodos(data);
	}, []);

	return (
		<main>
			<TodoForm
				onSubmit={onSubmit}
				valueTitle={title}
				valueContent={content}
				valueDeadline={deadline}
				onChangeTitle={handleTitleInputChange}
				onChangeContent={handleContentInputChange}
				onChangeDeadline={handleDeadlineInputChange}
			/>
			{/* 순서정렬 select태그 섹션 */}
			<CustomOrderSelect
				selectValue={sortOrder}
				selectOnChange={handleSortOrderChange}
			>
				마감일 순으로 보기
			</CustomOrderSelect>
			<ListsSection>
				<TodoList
					type="working"
					todoList={workingTodoList}
					deleteTodoHandler={deleteTodoHandler}
					onToggleTodoItem={onToggleTodoItem}
					// deadlineText={deadlineText}
					// setDeadlinetText={setDeadlinetText}
				>
					Working 🏃‍♀️
				</TodoList>
				<TodoList
					type="done"
					todoList={doneTodoList}
					deleteTodoHandler={deleteTodoHandler}
					onToggleTodoItem={onToggleTodoItem}
					// deadlineText={deadlineText}
					// setDeadlinetText={setDeadlineText}
				>
					Done 🎉
				</TodoList>
			</ListsSection>
		</main>
	);
}

export default TodoController;

const ListsSection = styled.section`
	max-height: 1000px;
	margin-top: 30px;
`;
