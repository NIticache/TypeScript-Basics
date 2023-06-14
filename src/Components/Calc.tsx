import React from "react";

type props = {
	data: {
		name: string;
		Grade: string;
	};
};

const Calc = ({ data }: props) => {
	return (
		<div>
			Hi {data.name} <span>Your grade is {data.Grade}</span>
		</div>
	);
};

export default Calc;
