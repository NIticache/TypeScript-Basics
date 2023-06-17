import { Container, Box } from "@mui/material";
import Calc from "../Components/Calc";
const Test = () => {
	const data = [
		{
			name: "Niti",
			course: "M.E",
			grade: 9,
			university: "",
			completed_status: true,
		},
		{
			name: "Niti",
			course: "M.E",
			grade: 9,
			university: "",
			completed_status: true,
		},
		{
			name: "Niti",
			course: "M.E",
			grade: 9,
			university: "",
			completed_status: true,
		},
		{
			name: "Niti",
			course: "M.E",
			grade: 9,
			university: "",
			completed_status: true,
		},
	];

	return (
		<Container>
			<Box
				sx={{
					display: "grid",
					gap: "10px",
					gridTemplateColumns: "20% 20%",
				}}>
				{data?.map((item) => {
					return <Calc data={item} />;
				})}
			</Box>
		</Container>
	);
};

export default Test;
