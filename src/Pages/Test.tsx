import React from "react";
import Calc from "../Components/Calc";
const Test = () => {
	const add = (a: number, b: number) => {
		return a + b;
	};
	const data = {
		name: "Niti",
		Grade: "Mass",
		calculate: add,
	};
	// const testi = null;
	return (
		<div>
			<Calc data={data} addon={"test"} />

			{/* <Calc name='Niti'  Grade='Mass' />   used for Record Utility type */}
		</div>
	);
};

export default Test;
