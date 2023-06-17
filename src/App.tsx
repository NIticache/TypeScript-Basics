import { useState } from "react";
import Test from "./Pages/Test";
import ToDo from "./Pages/ToDo";
import Fetch from "./Pages/Fetch";

// import "./App.css";

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<Fetch />
			{/* <Test /> */}
			{/* <ToDo /> */}
		</>
	);
}

export default App;
