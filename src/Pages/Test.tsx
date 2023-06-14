import React from "react";
import Calc from "Components/Calc";
const Test = () => {
	const data = {
		name: "Niti",
		Grade: "Mass",
	};

	return (
		<div>
			<Calc data={data} />
		</div>
	);
};

export default Test;
