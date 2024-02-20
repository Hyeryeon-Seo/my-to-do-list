import React from "react";
import Router from "./shared/Router";
import TodoProvider from "./context/TodoContext";

function App() {
	return (
		<>
			{/* <TodoProvider> */}
			<Router />
			{/* </TodoProvider> */}
		</>
	);
}

export default App;
