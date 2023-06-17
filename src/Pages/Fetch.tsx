import { useEffect, useState } from "react";
import ApiComponent from "../Components/ApiComponent";
const Fetch = () => {
	type props = {
		body: string;
		id: number;
		title: string;
		userId: number;
	};
	const [data, setData] = useState<Array<props> | null>(null);
	useEffect(() => {
		console.log("object");
		if (data !== null) {
			console.log(data);
		} else {
			apiCall();
		}
	}, [data]);

	const apiCall = async () => {
		await fetch("https://jsonplaceholder.typicode.com/posts")
			.then((res) => res.json())
			.then((data) => {
				// console.log(data);

				setData(data);
			});
	};

	return (
		<div>
			{data?.map((item) => {
				return <ApiComponent data={item} />;
			})}
		</div>
	);
};

export default Fetch;
