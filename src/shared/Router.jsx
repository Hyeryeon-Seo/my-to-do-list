import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Detail from "../pages/Detail";

const Router = () => {
	const [todoList, setTodoList] = useState([
		{
			id: 0,
			title: "리액트 강의 2회독하기",
			content: "1월 내로 리액트 강의내용 내 걸로 만들기 !",
			deadline: "마감일 : 2024-01-31",
			isDone: false,
		},
	]);
	// 입력한 to-do를 담을 상태

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route
						path="/"
						element={<Home todoList={todoList} setTodoList={setTodoList} />}
					/>
					<Route
						path="/:todoId"
						element={<Detail todoList={todoList} setTodoList={setTodoList} />}
					/>
					<Route path="*" element={<Navigate replace to="/" />} />
					{/*그 외 다른 path name이 url에 온 경우(*) 홈으로 이동(redirect)시키기 : Navigate사용 */}
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default Router;
