import { createContext, useState } from "react";

export const TodoContext = createContext();

const TodoProvider = ({ children }) => {
	const [todos, setTodos] = useState(null);

	const onSubmitTodo = (nextTodo) => {
		setTodos((prevTodos) => [nextTodo, ...prevTodos]);
	};

	const onDeleteTodoItem = (id) => {
		setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
	};

	const onToggleTodoItem = (id) => {
		setTodos((prevTodos) =>
			prevTodos.map((todoItem) => {
				if (todoItem.id === id) {
					return {
						...todoItem,
						isDone: !todoItem.isDone,
					};
				}

				return todoItem;
			})
		);
	};

	return (
		<TodoContext.Provider
			value={{
				todos,
				setTodos,
				onSubmitTodo,
				onDeleteTodoItem,
				onToggleTodoItem,
			}}
		>
			TodoProvider
		</TodoContext.Provider>
	);
};

export default TodoProvider;
