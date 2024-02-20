import React, { useEffect } from "react";
import Header from "../components/layout/Header";
import TodoController from "../components/todo/TodoController";
import { getTodos } from "../axios/todo-api";

const Home = () => {
	// useEffect(() => {
	// 	// db로 부터 값 가져오기
	// 	// const data = getTodos();
	// 	getTodos();
	// }, []);

	return (
		<div>
			<Header />
			<TodoController />
		</div>
	);
};

export default Home;
