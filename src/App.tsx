import { useState } from "react";
import Test from "./Pages/Test";
import ToDo from "./Pages/ToDo";
// import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			{/* <Test /> */}
			<ToDo />
		</>
	);
}

export default App;
