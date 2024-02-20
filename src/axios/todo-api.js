import axios from "axios";

// instance 생성
const todoClient = axios.create({
	baseURL: process.env.REACT_APP_SERVER_URL, // ../todos
	headers: {
		"Content-Type": "application/json",
	},
});

const getTodos = async () => {
	// fetchTodos
	const { data } = await todoClient.get("/");
	// console.log(data); //data는 있는데, 화면에 렌더링이 안되는?
	return data;
};

const getSingleTodo = async (id) => {
	const { data } = await todoClient.get(`/${id}`);
	return data;
};

const createTodo = async (todo) => {
	await todoClient.post("/", todo);
};

const deleteTodo = async (id) => {
	await todoClient.delete(`/${id}`);
};

const updateTodo = async (id, todo) => {
	await todoClient.patch(`/${id}`, todo);
};

export { getTodos, getSingleTodo, createTodo, deleteTodo, updateTodo };
