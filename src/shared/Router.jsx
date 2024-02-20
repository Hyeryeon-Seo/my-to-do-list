import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";
import TodoProvider from "../context/TodoContext";

const Router = () => {
	// 입력한 to-do를 담을 상태
	// const [todoList, setTodoList] = useState([
	// 	{
	// 		id: 0,
	// 		title: "리액트 강의 2회독하기",
	// 		content: "1월 내로 리액트 강의내용 내 걸로 만들기 !",
	// 		deadline: "2024-01-31",
	// 		isDone: false,
	// 	},
	// ]);

	const [deadlineText, setDeadlinetText] = useState("");
	// 변경: useState사용으로 바꿈, 위(Home)에서부터 TodoItem까지 내려주기 / Detail에도 내려주기

	return (
		<>
			<BrowserRouter>
				<Routes>
					{/* <TodoProvider> */}
					<Route path="/" element={<Home />} />
					<Route path="/:todoId" element={<Detail />} />
					<Route path="*" element={<Navigate replace to="/" />} />
					{/*그 외 다른 path name이 url에 온 경우(*) 홈으로 이동(redirect)시키기 : Navigate사용 */}
					{/* </TodoProvider> */}
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default Router;
