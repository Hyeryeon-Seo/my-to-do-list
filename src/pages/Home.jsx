import React from "react";
import Header from "../components/layout/Header";
import TodoController from "../components/todo/TodoController";

const Home = ({ todoList, setTodoList }) => {
	return (
		<div>
			<Header />
			<TodoController todoList={todoList} setTodoList={setTodoList} />
		</div>
	);
};

export default Home;
