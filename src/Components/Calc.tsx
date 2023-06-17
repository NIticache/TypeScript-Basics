import { Box } from "@mui/material";
type props = {
	data: {
		name: string;
		course: string;
		grade: number; //change it to float reminder
		university: string;
		completed_status: boolean;
	};
};

const Calc = ({ data }: props) => {
	console.log(data, "data");
	return (
		<Box sx={{ width: "200px", minHeight: "200px" }}>
			<p> name: {data?.name}</p>
			<p> course: {data?.course};</p>
			<p> grade: {data?.grade}; </p>
			<p>university: {data?.university};</p>
			<p>completed_status: {data?.completed_status};</p>
		</Box>
	);
};

export default Calc;
