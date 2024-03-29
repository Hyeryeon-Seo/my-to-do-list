import React, { useState } from "react";
import TodoForm from "./TodoForm";
import CustomOrderSelect from "../common/CustomOrderSelect";
import TodoList from "./TodoList";
import styled from "styled-components";

const ListsSection = styled.section`
	max-height: 1000px;
	margin-top: 30px;
`;

function TodoController({ todoList, setTodoList }) {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");
	const [deadline, setDeadline] = useState("");
	const [sortOrder, setSortOrder] = useState("desc"); //초기설정 빠른순? 설정안됨

	// input의 value값 가져오기
	// 개선: 이벤트핸들러함수명 컨벤션따라 변경
	const handleTitleInputChange = (event) => {
		setTitle(event.target.value);
	};

	// 개선: 이벤트핸들러함수명 컨벤션따라 변경
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
		const newOrderDeadline = [...todoList].sort((a, b) => {
			if (sortOrder === "asc") {
				// 다시 체크
				return new Date(a.deadline) - new Date(b.deadline);
			} else {
				return new Date(b.deadline) - new Date(a.deadline);
			}
		});
		setTodoList(newOrderDeadline); // 정렬된 todoitem으로 todolist 상태 업데이트
	};

	// 추가하기 버튼 addTodoHandler
	const addTodoHandler = (newTodo) => {
		// 개선: setTodoList([...todoList, newTodo]);도 기능은 잘 되지만, 빠르게 제출 시 에러날 수 있어서
		// 그냥 todoList가 아닌, 버튼누른당시?의 prevTodoList를 넣어서 작동하게 한다 ?
		// => set메서드 안 콜백함수로 처리 & 받은 newTodo를 맨 앞에 오도록 처리 -> 변경
		setTodoList((prevTodoList) => [...prevTodoList, newTodo]);
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
			// 이 경우 초기화없이 입력내용 유지시킴
			return;
		} else if (!deadline) {
			// 추가
			// 마감일 설정 안해도, 아래처럼 날짜로 넣어줘야 순서정렬 시 문제 x
			// 근데 왜인지 느린순하면 가장 나중에 뜨고, 빠른순하면 가장 먼저 뜬다..
			addTodoHandler({
				id: crypto.randomUUID(),
				title,
				content,
				deadline: 9999 - 12 - 31,
				isDone: false,
			});
			setTitle("");
			setContent("");
			setDeadline("");
		} else {
			addTodoHandler({
				id: crypto.randomUUID(), // id: todoList.length -id 중복 가능성 -> 개선: 고유한id부여- Date.now()도 가능 & crypto.randomUUID() 사용
				title, // input에 입력된 title,body - setTitle,setBody로 title,body 설정됨 (초기값에서)
				content,
				deadline,
				isDone: false,
			});
			setTitle(""); //초기화 - 개선: else케이스 안에 넣어서 추가(제출)되었을때만 초기화시킴
			setContent("");
			setDeadline("");
		}
	};

	// 삭제 버튼: filter메서드로 해당id의 카드빼기
	const deleteTodoHandler = (id) => {
		setTodoList((prevTodoList) =>
			prevTodoList.filter((todo) => todo.id !== id)
		); // 개선: setTodoList()안 콜백함수 (에러방지)
	};

	// Done 완료&완료취소 버튼 (토글)=> 해당id의 todo 의 key값, isDone의 value값을 false <-> true 로 변경해야
	const onToggleTodoItem = (id) => {
		// 개선: 위와 마찬가지로 set..()안 콜백함수 /

		setTodoList((prevTodos) =>
			prevTodos.map((todo) => {
				if (todo.id === id) {
					return { ...todo, isDone: !todo.isDone };
				}
				return todo;
			})
		);
	};

	const workingTodoList = todoList.filter((todo) => todo.isDone === false);
	const doneTodoList = todoList.filter((todo) => todo.isDone === true);

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
					// setDeadlinetText={setDeadlinetText}
				>
					Done 🎉
				</TodoList>
			</ListsSection>
		</main>
	);
}

export default TodoController;
